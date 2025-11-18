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

/***/ "../core/dist/Misc/lazy.js":
/*!*********************************!*\
  !*** ../core/dist/Misc/lazy.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lazy: () => (/* binding */ Lazy)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * A class that lazily initializes a value given a factory function.
 */
class Lazy {
    /**
     * Creates a new instance of the Lazy class.
     * @param factory A function that creates the value.
     */
    constructor(factory) {
        this._factory = factory;
    }
    /**
     * Gets the lazily initialized value.
     */
    get value() {
        // If the factory function is still defined, it means we haven't called it yet.
        if (this._factory) {
            this._value = this._factory();
            // Set the factory function to undefined to allow it to be garbage collected.
            this._factory = undefined;
        }
        return this._value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX2dsVEZMb2FkZXJfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFLQTtBQUNBO0FBUUE7QUFSQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBb0JBOztBQUVBO0FBQ0E7QUFjQTs7O0FBR0E7QUFDQTtBQVpBOztBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBcUZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQWxHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUE2Q0E7QUF5SkE7QUE4QkE7O0FBRUE7QUFDQTtBQXNDQTtBQUNBO0FBbFBBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUE1c0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEwQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBeUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBakhBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWlGQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBUUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBS0E7QUFFQTtBQUNBO0FBT0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQXgxRkE7O0FBRUE7QUFDQTtBQXcxRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVqR0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFzQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUEwQkE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUFBOztBQWdFQTs7QUFFQTtBQUNBO0FBOENBOzs7O0FBSUE7QUFDQTtBQUNBO0FBdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpRkE7QUFFQTs7QUFFQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUF1Q0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFpQkE7Ozs7O0FBS0E7QUFDQTtBQWlCQTs7QUFFQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQWdCQTs7OztBQUlBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQWNBOztBQUVBO0FBQ0E7QUFjQTs7O0FBR0E7QUFDQTtBQTBEQTs7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFrVEE7O0FBRUE7QUFDQTtBQXVVQTtBQUNBO0FBRUE7QUFDQTtBQXNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBdjhCQTtBQUNBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBSUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQVFBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBejdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBdTNCQTtBQWdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5NUNBO0FBV0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQVVBOzs7Ozs7O0FBT0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9yYXdUZXh0dXJlMkRBcnJheS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZGF0YVJlYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZGVlcE1lcmdlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvbGF6eS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL2dsVEZMb2FkZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZGaWxlTG9hZGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGVmFsaWRhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi8uLi9zY2VuZVwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gc3RvcmUgMkQgYXJyYXkgdGV4dHVyZXMgY29udGFpbmluZyB1c2VyIGRhdGFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSYXdUZXh0dXJlMkRBcnJheSBleHRlbmRzIFRleHR1cmUge1xyXG4gICAgcHJpdmF0ZSBfZGVwdGg6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBsYXllcnMgb2YgdGhlIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkZXB0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgUmF3VGV4dHVyZTJEQXJyYXlcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIGRhdGEgb2YgdGhlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSB3aWR0aCBkZWZpbmVzIHRoZSB3aWR0aCBvZiB0aGUgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIGhlaWdodCBkZWZpbmVzIHRoZSBoZWlnaHQgb2YgdGhlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBkZXB0aCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgbGF5ZXJzIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IGRlZmluZXMgdGhlIHRleHR1cmUgZm9ybWF0IHRvIHVzZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGhvc3Rpbmcgc2NlbmVcclxuICAgICAqIEBwYXJhbSBnZW5lcmF0ZU1pcE1hcHMgZGVmaW5lcyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBtaXAgbGV2ZWxzIHNob3VsZCBiZSBnZW5lcmF0ZWQgKHRydWUgYnkgZGVmYXVsdClcclxuICAgICAqIEBwYXJhbSBpbnZlcnRZIGRlZmluZXMgaWYgdGV4dHVyZSBtdXN0IGJlIHN0b3JlZCB3aXRoIFkgYXhpcyBpbnZlcnRlZFxyXG4gICAgICogQHBhcmFtIHNhbXBsaW5nTW9kZSBkZWZpbmVzIHRoZSBzYW1wbGluZyBtb2RlIHRvIHVzZSAoVGV4dHVyZS5UUklMSU5FQVJfU0FNUExJTkdNT0RFIGJ5IGRlZmF1bHQpXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZVR5cGUgZGVmaW5lcyB0aGUgdGV4dHVyZSBUeXBlIChFbmdpbmUuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURSwgRW5naW5lLlRFWFRVUkVUWVBFX0ZMT0FULi4uKVxyXG4gICAgICogQHBhcmFtIGNyZWF0aW9uRmxhZ3Mgc3BlY2lmaWMgZmxhZ3MgdG8gdXNlIHdoZW4gY3JlYXRpbmcgdGhlIHRleHR1cmUgKENvbnN0YW50cy5URVhUVVJFX0NSRUFUSU9ORkxBR19TVE9SQUdFIGZvciBzdG9yYWdlIHRleHR1cmVzLCBmb3IgZWcpXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGRhdGE6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz4sXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBkZXB0aDogbnVtYmVyLFxyXG4gICAgICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIHRleHR1cmUgZm9ybWF0IHRvIHVzZSAqL1xyXG4gICAgICAgIHB1YmxpYyBmb3JtYXQ6IG51bWJlcixcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2VuZXJhdGVNaXBNYXBzOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBpbnZlcnRZOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgc2FtcGxpbmdNb2RlOiBudW1iZXIgPSBUZXh0dXJlLlRSSUxJTkVBUl9TQU1QTElOR01PREUsXHJcbiAgICAgICAgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURSxcclxuICAgICAgICBjcmVhdGlvbkZsYWdzPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihudWxsLCBzY2VuZSwgIWdlbmVyYXRlTWlwTWFwcywgaW52ZXJ0WSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBzY2VuZS5nZXRFbmdpbmUoKS5jcmVhdGVSYXdUZXh0dXJlMkRBcnJheShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZm9ybWF0LCBnZW5lcmF0ZU1pcE1hcHMsIGludmVydFksIHNhbXBsaW5nTW9kZSwgbnVsbCwgdGV4dHVyZVR5cGUsIGNyZWF0aW9uRmxhZ3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9kZXB0aCA9IGRlcHRoO1xyXG4gICAgICAgIHRoaXMuaXMyREFycmF5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgdGV4dHVyZSB3aXRoIG5ldyBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBkYXRhIHRvIHN0b3JlIGluIHRoZSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGUoZGF0YTogQXJyYXlCdWZmZXJWaWV3KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZ2V0RW5naW5lKCkhLnVwZGF0ZVJhd1RleHR1cmUyREFycmF5KHRoaXMuX3RleHR1cmUsIGRhdGEsIHRoaXMuX3RleHR1cmUuZm9ybWF0LCB0aGlzLl90ZXh0dXJlLmludmVydFksIG51bGwsIHRoaXMuX3RleHR1cmUudHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgUkdCQSB0ZXh0dXJlIGZyb20gc29tZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgRGVmaW5lIHRoZSB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSB3aWR0aCBEZWZpbmUgdGhlIHdpZHRoIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IERlZmluZSB0aGUgaGVpZ2h0IG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gZGVwdGggZGVmaW5lcyB0aGUgbnVtYmVyIG9mIGxheWVycyBvZiB0aGUgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHRoZSB0ZXh0dXJlIHdpbGwgYmVsb25nIHRvXHJcbiAgICAgKiBAcGFyYW0gZ2VuZXJhdGVNaXBNYXBzIERlZmluZSB3aGV0aGVyIG9yIG5vdCB0byBjcmVhdGUgbWlwIG1hcHMgZm9yIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gaW52ZXJ0WSBkZWZpbmUgaWYgdGhlIGRhdGEgc2hvdWxkIGJlIGZsaXBwZWQgb24gWSB3aGVuIHVwbG9hZGVkIHRvIHRoZSBHUFVcclxuICAgICAqIEBwYXJhbSBzYW1wbGluZ01vZGUgZGVmaW5lIHRoZSB0ZXh0dXJlIHNhbXBsaW5nIG1vZGUgKFRleHR1cmUueHh4X1NBTVBMSU5HTU9ERSlcclxuICAgICAqIEBwYXJhbSB0eXBlIGRlZmluZSB0aGUgZm9ybWF0IG9mIHRoZSBkYXRhIChpbnQsIGZsb2F0Li4uIEVuZ2luZS5URVhUVVJFVFlQRV94eHgpXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgUkdCQSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlUkdCQVRleHR1cmUoXHJcbiAgICAgICAgZGF0YTogQXJyYXlCdWZmZXJWaWV3LFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgZGVwdGg6IG51bWJlcixcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2VuZXJhdGVNaXBNYXBzOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICBpbnZlcnRZOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgc2FtcGxpbmdNb2RlOiBudW1iZXIgPSBDb25zdGFudHMuVEVYVFVSRV9UUklMSU5FQVJfU0FNUExJTkdNT0RFLFxyXG4gICAgICAgIHR5cGU6IG51bWJlciA9IENvbnN0YW50cy5URVhUVVJFVFlQRV9VTlNJR05FRF9CWVRFXHJcbiAgICApOiBSYXdUZXh0dXJlMkRBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSYXdUZXh0dXJlMkRBcnJheShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgQ29uc3RhbnRzLlRFWFRVUkVGT1JNQVRfUkdCQSwgc2NlbmUsIGdlbmVyYXRlTWlwTWFwcywgaW52ZXJ0WSwgc2FtcGxpbmdNb2RlLCB0eXBlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZWNvZGUgfSBmcm9tIFwiLi9zdHJpbmdUb29sc1wiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBkYXRhIGJ1ZmZlclxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUJ1ZmZlciB7XHJcbiAgICAvKipcclxuICAgICAqIFJlYWRzIGJ5dGVzIGZyb20gdGhlIGRhdGEgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ5dGVPZmZzZXQgVGhlIGJ5dGUgb2Zmc2V0IHRvIHJlYWRcclxuICAgICAqIEBwYXJhbSBieXRlTGVuZ3RoIFRoZSBieXRlIGxlbmd0aCB0byByZWFkXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBieXRlcyBhcmUgcmVhZFxyXG4gICAgICovXHJcbiAgICByZWFkQXN5bmMoYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYnl0ZSBsZW5ndGggb2YgdGhlIGJ1ZmZlci5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYnl0ZUxlbmd0aDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyBmb3IgcmVhZGluZyBmcm9tIGEgZGF0YSBidWZmZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEYXRhUmVhZGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgYnVmZmVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRhdGEgcmVhZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYnVmZmVyOiBJRGF0YUJ1ZmZlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjdXJyZW50IGJ5dGUgb2Zmc2V0IGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgZGF0YSBidWZmZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBieXRlT2Zmc2V0ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9kYXRhVmlldzogRGF0YVZpZXc7XHJcbiAgICBwcml2YXRlIF9kYXRhQnl0ZU9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byByZWFkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGJ1ZmZlcjogSURhdGFCdWZmZXIpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBnaXZlbiBieXRlIGxlbmd0aC5cclxuICAgICAqIEBwYXJhbSBieXRlTGVuZ3RoIFRoZSBieXRlIGxlbmd0aCB0byBsb2FkXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBsb2FkQXN5bmMoYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYnVmZmVyLnJlYWRBc3luYyh0aGlzLmJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YUJ5dGVPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhIHVuc2lnbmVkIDMyLWJpdCBpbnRlZ2VyIGZyb20gdGhlIGN1cnJlbnRseSBsb2FkZWQgZGF0YSByYW5nZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSAzMi1iaXQgaW50ZWdlciByZWFkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkVWludDMyKCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhVmlldy5nZXRVaW50MzIodGhpcy5fZGF0YUJ5dGVPZmZzZXQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFCeXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhIGJ5dGUgYXJyYXkgZnJvbSB0aGUgY3VycmVudGx5IGxvYWRlZCBkYXRhIHJhbmdlLlxyXG4gICAgICogQHBhcmFtIGJ5dGVMZW5ndGggVGhlIGJ5dGUgbGVuZ3RoIHRvIHJlYWRcclxuICAgICAqIEByZXR1cm5zIFRoZSBieXRlIGFycmF5IHJlYWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRVaW50OEFycmF5KGJ5dGVMZW5ndGg6IG51bWJlcik6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YVZpZXcuYnVmZmVyLCB0aGlzLl9kYXRhVmlldy5ieXRlT2Zmc2V0ICsgdGhpcy5fZGF0YUJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFCeXRlT2Zmc2V0ICs9IGJ5dGVMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5ieXRlT2Zmc2V0ICs9IGJ5dGVMZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50bHkgbG9hZGVkIGRhdGEgcmFuZ2UuXHJcbiAgICAgKiBAcGFyYW0gYnl0ZUxlbmd0aCBUaGUgYnl0ZSBsZW5ndGggdG8gcmVhZFxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyByZWFkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkU3RyaW5nKGJ5dGVMZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIERlY29kZSh0aGlzLnJlYWRVaW50OEFycmF5KGJ5dGVMZW5ndGgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNraXBzIHRoZSBnaXZlbiBieXRlIGxlbmd0aCB0aGUgY3VycmVudGx5IGxvYWRlZCBkYXRhIHJhbmdlLlxyXG4gICAgICogQHBhcmFtIGJ5dGVMZW5ndGggVGhlIGJ5dGUgbGVuZ3RoIHRvIHNraXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNraXBCeXRlcyhieXRlTGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kYXRhQnl0ZU9mZnNldCArPSBieXRlTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYnl0ZU9mZnNldCArPSBieXRlTGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODIxODIwOVxyXG4vKipcclxuICogTWVyZ2VzIGEgc2VyaWVzIG9mIG9iamVjdHMgaW50byBhIHNpbmdsZSBvYmplY3QsIGRlZXBseS5cclxuICogQHBhcmFtIG9iamVjdHMgVGhlIG9iamVjdHMgdG8gbWVyZ2UgKG9iamVjdHMgbGF0ZXIgaW4gdGhlIGxpc3QgdGFrZSBwcmVjZWRlbmNlKS5cclxuICogQHJldHVybnMgVGhlIG1lcmdlZCBvYmplY3QuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwTWVyZ2U8VCBleHRlbmRzIG9iamVjdD4oLi4ub2JqZWN0czogVFtdKTogVCB7XHJcbiAgICBjb25zdCBpc1JlY29yZCA9IChvYmo6IHVua25vd24pOiBvYmogaXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4gISFvYmogJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIjtcclxuXHJcbiAgICByZXR1cm4gb2JqZWN0cy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KChwcmV2LCBvYmopID0+IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBWYWwgPSBwcmV2W2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IG9WYWwgPSAob2JqIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtrZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNSZWNvcmQocFZhbCkgJiYgaXNSZWNvcmQob1ZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IGRlZXBNZXJnZShwVmFsLCBvVmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByZXZba2V5XSA9IG9WYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgfSwge30pIGFzIFQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEEgY2xhc3MgdGhhdCBsYXppbHkgaW5pdGlhbGl6ZXMgYSB2YWx1ZSBnaXZlbiBhIGZhY3RvcnkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGF6eTxUPiB7XHJcbiAgICBwcml2YXRlIF9mYWN0b3J5OiAoKCkgPT4gVCkgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF92YWx1ZTogVCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIExhenkgY2xhc3MuXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9yeSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZhY3Rvcnk6ICgpID0+IFQpIHtcclxuICAgICAgICB0aGlzLl9mYWN0b3J5ID0gZmFjdG9yeTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxhemlseSBpbml0aWFsaXplZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBUIHtcclxuICAgICAgICAvLyBJZiB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBzdGlsbCBkZWZpbmVkLCBpdCBtZWFucyB3ZSBoYXZlbid0IGNhbGxlZCBpdCB5ZXQuXHJcbiAgICAgICAgaWYgKHRoaXMuX2ZhY3RvcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9mYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZmFjdG9yeSBmdW5jdGlvbiB0byB1bmRlZmluZWQgdG8gYWxsb3cgaXQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXHJcbiAgICAgICAgICAgIHRoaXMuX2ZhY3RvcnkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSBhcyBUO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNtYXJ0QXJyYXkgfSBmcm9tIFwiLi4vTWlzYy9zbWFydEFycmF5XCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgSURpc3Bvc2FibGUsIFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcIi4uL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcIi4vbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgRWZmZWN0IH0gZnJvbSBcIi4uL01hdGVyaWFscy9lZmZlY3RcIjtcclxuaW1wb3J0IHsgUmF3VGV4dHVyZTJEQXJyYXkgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL3Jhd1RleHR1cmUyREFycmF5XCI7XHJcbmltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gZGVmb3JtIG1lc2hlcyB1c2luZyBtb3JwaGluZyBiZXR3ZWVuIGRpZmZlcmVudCB0YXJnZXRzXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21lc2gvbW9ycGhUYXJnZXRzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW9ycGhUYXJnZXRNYW5hZ2VyIGltcGxlbWVudHMgSURpc3Bvc2FibGUge1xyXG4gICAgLyoqIEVuYWJsZSBzdG9yaW5nIG1vcnBoIHRhcmdldCBkYXRhIGludG8gdGV4dHVyZXMgd2hlbiBzZXQgdG8gdHJ1ZSAodHJ1ZSBieSBkZWZhdWx0KSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFbmFibGVUZXh0dXJlU3RvcmFnZSA9IHRydWU7XHJcblxyXG4gICAgLyoqIE1heGltdW0gbnVtYmVyIG9mIGFjdGl2ZSBtb3JwaCB0YXJnZXRzIHN1cHBvcnRlZCBpbiB0aGUgXCJ2ZXJ0ZXggYXR0cmlidXRlXCIgbW9kZSAoaS5lLiwgbm90IHRoZSBcInRleHR1cmVcIiBtb2RlKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNYXhBY3RpdmVNb3JwaFRhcmdldHNJblZlcnRleEF0dHJpYnV0ZU1vZGUgPSA4O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB1c2VkIGluIHRleHR1cmUgbW9kZSwgaWYgZ3JlYXRoZXIgdGhhbiAwLCB0aGlzIHdpbGwgb3ZlcnJpZGUgdGhlIHRoZSBtb3JwaCBtYW5hZ2VyIG51bU1heEluZmx1ZW5jZXJzIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbnN0YW50VGFyZ2V0Q291bnRGb3JUZXh0dXJlTW9kZSA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0cyA9IG5ldyBBcnJheTxNb3JwaFRhcmdldD4oKTtcclxuICAgIHByaXZhdGUgX3RhcmdldEluZmx1ZW5jZUNoYW5nZWRPYnNlcnZlcnMgPSBuZXcgQXJyYXk8TnVsbGFibGU8T2JzZXJ2ZXI8Ym9vbGVhbj4+PigpO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0RGF0YUxheW91dENoYW5nZWRPYnNlcnZlcnMgPSBuZXcgQXJyYXk8TnVsbGFibGU8T2JzZXJ2ZXI8dm9pZD4+PigpO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZlVGFyZ2V0cyA9IG5ldyBTbWFydEFycmF5PE1vcnBoVGFyZ2V0PigxNik7XHJcbiAgICBwcml2YXRlIF9zY2VuZTogTnVsbGFibGU8U2NlbmU+O1xyXG4gICAgcHJpdmF0ZSBfaW5mbHVlbmNlczogRmxvYXQzMkFycmF5O1xyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydHNQb3NpdGlvbnMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3N1cHBvcnRzTm9ybWFscyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydHNUYW5nZW50cyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydHNVVnMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3N1cHBvcnRzVVYycyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc3VwcG9ydHNDb2xvcnMgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3ZlcnRleENvdW50ID0gMDtcclxuICAgIHByaXZhdGUgX3VuaXF1ZUlkID0gMDtcclxuICAgIHByaXZhdGUgX3RlbXBJbmZsdWVuY2VzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX2NhblVzZVRleHR1cmVGb3JUYXJnZXRzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9ibG9ja0NvdW50ZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbXVzdFN5bmNocm9uaXplID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2ZvcmNlVXBkYXRlV2hlblVuZnJvemVuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF90ZXh0dXJlVmVydGV4U3RyaWRlID0gMDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3RleHR1cmVXaWR0aCA9IDA7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF90ZXh0dXJlSGVpZ2h0ID0gMTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXM6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3BhcmVudENvbnRhaW5lcjogTnVsbGFibGU8SUFzc2V0Q29udGFpbmVyPiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF90YXJnZXRTdG9yZVRleHR1cmU6IE51bGxhYmxlPFJhd1RleHR1cmUyREFycmF5PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBpbmZsdWVuY2VycyBtdXN0IGJlIG9wdGltaXplZCAoZWcuIHJlY29tcGlsaW5nIHRoZSBzaGFkZXIgaWYgbGVzcyBpbmZsdWVuY2VycyBhcmUgdXNlZClcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wdGltaXplSW5mbHVlbmNlcnMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHBvc2l0aW9ucyBtdXN0IGJlIG1vcnBoZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZVBvc2l0aW9uTW9ycGhpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIG5vcm1hbHMgbXVzdCBiZSBtb3JwaGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVOb3JtYWxNb3JwaGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGFuZ2VudHMgbXVzdCBiZSBtb3JwaGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVUYW5nZW50TW9ycGhpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIFVWIG11c3QgYmUgbW9ycGhlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlVVZNb3JwaGluZyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgVVYyIG11c3QgYmUgbW9ycGhlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlVVYyTW9ycGhpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNvbG9ycyBtdXN0IGJlIG1vcnBoZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZUNvbG9yTW9ycGhpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IGFkZGluZyBuZXcgdGFyZ2V0IG9yIHVwZGF0aW5nIGFuIGV4aXN0aW5nIHRhcmdldCB3aWxsIG5vdCB1cGRhdGUgdGhlIHVuZGVybHlpbmcgZGF0YSBidWZmZXJzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgYXJlVXBkYXRlc0Zyb3plbihibG9jazogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChibG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja0NvdW50ZXIrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja0NvdW50ZXItLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2NrQ291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja0NvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKHRoaXMuX2ZvcmNlVXBkYXRlV2hlblVuZnJvemVuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlV2hlblVuZnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhcmVVcGRhdGVzRnJvemVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9ja0NvdW50ZXIgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBNb3JwaFRhcmdldE1hbmFnZXJcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBjdXJyZW50IHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgc2NlbmUgPSBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLmFkZE1vcnBoVGFyZ2V0TWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VuaXF1ZUlkID0gdGhpcy5fc2NlbmUuZ2V0VW5pcXVlSWQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVuZ2luZUNhcHMgPSB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKS5nZXRDYXBzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhblVzZVRleHR1cmVGb3JUYXJnZXRzID1cclxuICAgICAgICAgICAgICAgIGVuZ2luZUNhcHMuY2FuVXNlR0xWZXJ0ZXhJRCAmJiBlbmdpbmVDYXBzLnRleHR1cmVGbG9hdCAmJiBlbmdpbmVDYXBzLm1heFZlcnRleFRleHR1cmVJbWFnZVVuaXRzID4gMCAmJiBlbmdpbmVDYXBzLnRleHR1cmUyREFycmF5TWF4TGF5ZXJDb3VudCA+IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX251bU1heEluZmx1ZW5jZXJzID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgaW5mbHVlbmNlcnMgKHRhcmdldHMpIChkZWZhdWx0IHZhbHVlOiAwKS5cclxuICAgICAqIFNldHRpbmcgYSB2YWx1ZSBmb3IgdGhpcyBwcm9wZXJ0eSBjYW4gbGVhZCB0byBhIHNtb290aGVyIGV4cGVyaWVuY2UsIGFzIG9ubHkgb25lIHNoYWRlciB3aWxsIGJlIGNvbXBpbGVkLCB3aGljaCB3aWxsIHVzZSB0aGlzIHZhbHVlIGFzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpbmZsdWVuY2Vycy5cclxuICAgICAqIElmIHlvdSBsZWF2ZSB0aGUgdmFsdWUgYXQgMCAoZGVmYXVsdCksIGEgbmV3IHNoYWRlciB3aWxsIGJlIGNvbXBpbGVkIGV2ZXJ5IHRpbWUgdGhlIG51bWJlciBvZiBhY3RpdmUgaW5mbHVlbmNlcnMgY2hhbmdlcy4gVGhpcyBjYW4gY2F1c2UgcHJvYmxlbXMsIGFzIGNvbXBpbGluZyBhIHNoYWRlciB0YWtlcyB0aW1lLlxyXG4gICAgICogSWYgeW91IGFzc2lnbiBhIG5vbi16ZXJvIHZhbHVlIHRvIHRoaXMgcHJvcGVydHksIHlvdSBuZWVkIHRvIGVuc3VyZSB0aGF0IHRoaXMgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIHRoZSBtYXhpbXVtIG51bWJlciBvZiAoYWN0aXZlKSBpbmZsdWVuY2VycyB5b3UnbGwgbmVlZCBmb3IgdGhpcyBtb3JwaCBtYW5hZ2VyLlxyXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBpbmZsdWVuY2VycyB3aWxsIGJlIHRydW5jYXRlZCBhdCB0aGUgdmFsdWUgeW91IHNldCBmb3IgdGhpcyBwcm9wZXJ0eSwgd2hpY2ggY2FuIGxlYWQgdG8gdW5leHBlY3RlZCByZXN1bHRzLlxyXG4gICAgICogTm90ZSB0aGF0IHRoaXMgcHJvcGVydHkgaGFzIG5vIGVmZmVjdCBpZiBcInVzZVRleHR1cmVUb1N0b3JlVGFyZ2V0c1wiIGlzIGZhbHNlLlxyXG4gICAgICogTm90ZSBhcyB3ZWxsIHRoYXQgaWYgTW9ycGhUYXJnZXRNYW5hZ2VyLkNvbnN0YW50VGFyZ2V0Q291bnRGb3JUZXh0dXJlTW9kZSBpcyBncmVhdGVyIHRoYW4gMCwgdGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQgYW5kIHRoZSBjb25zdGFudCB2YWx1ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBudW1NYXhJbmZsdWVuY2VycygpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChNb3JwaFRhcmdldE1hbmFnZXIuQ29uc3RhbnRUYXJnZXRDb3VudEZvclRleHR1cmVNb2RlID4gMCAmJiB0aGlzLmlzVXNpbmdUZXh0dXJlRm9yVGFyZ2V0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gTW9ycGhUYXJnZXRNYW5hZ2VyLkNvbnN0YW50VGFyZ2V0Q291bnRGb3JUZXh0dXJlTW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bU1heEluZmx1ZW5jZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbnVtTWF4SW5mbHVlbmNlcnModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9udW1NYXhJbmZsdWVuY2VycyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbnVtTWF4SW5mbHVlbmNlcnMgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9tdXN0U3luY2hyb25pemUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB1bmlxdWUgSUQgb2YgdGhpcyBtYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdW5pcXVlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdW5pcXVlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgdmVydGljZXMgaGFuZGxlZCBieSB0aGlzIG1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB2ZXJ0ZXhDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIHN1cHBvcnRzIG1vcnBoaW5nIG9mIHBvc2l0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHN1cHBvcnRzUG9zaXRpb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1Bvc2l0aW9ucyAmJiB0aGlzLmVuYWJsZVBvc2l0aW9uTW9ycGhpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBzdXBwb3J0cyBtb3JwaGluZyBvZiBub3JtYWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3VwcG9ydHNOb3JtYWxzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c05vcm1hbHMgJiYgdGhpcy5lbmFibGVOb3JtYWxNb3JwaGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIHN1cHBvcnRzIG1vcnBoaW5nIG9mIHRhbmdlbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3VwcG9ydHNUYW5nZW50cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNUYW5nZW50cyAmJiB0aGlzLmVuYWJsZVRhbmdlbnRNb3JwaGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIHN1cHBvcnRzIG1vcnBoaW5nIG9mIHRleHR1cmUgY29vcmRpbmF0ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzdXBwb3J0c1VWcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNVVnMgJiYgdGhpcy5lbmFibGVVVk1vcnBoaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgc3VwcG9ydHMgbW9ycGhpbmcgb2YgdGV4dHVyZSBjb29yZGluYXRlcyAyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3VwcG9ydHNVVjJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1VWMnMgJiYgdGhpcy5lbmFibGVVVjJNb3JwaGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIHN1cHBvcnRzIG1vcnBoaW5nIG9mIGNvbG9yc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHN1cHBvcnRzQ29sb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c0NvbG9ycyAmJiB0aGlzLmVuYWJsZUNvbG9yTW9ycGhpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBoYXMgZGF0YSBmb3IgbW9ycGhpbmcgcG9zaXRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzUG9zaXRpb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdXBwb3J0c1Bvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBtYW5hZ2VyIGhhcyBkYXRhIGZvciBtb3JwaGluZyBub3JtYWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzTm9ybWFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNOb3JtYWxzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgaGFzIGRhdGEgZm9yIG1vcnBoaW5nIHRhbmdlbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzVGFuZ2VudHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRzVGFuZ2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBoYXMgZGF0YSBmb3IgbW9ycGhpbmcgdGV4dHVyZSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc1VWcygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNVVnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbWFuYWdlciBoYXMgZGF0YSBmb3IgbW9ycGhpbmcgdGV4dHVyZSBjb29yZGluYXRlcyAyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzVVYycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNVVjJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGlzIG1hbmFnZXIgaGFzIGRhdGEgZm9yIG1vcnBoaW5nIGNvbG9yc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0NvbG9ycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3VwcG9ydHNDb2xvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgdGFyZ2V0cyBzdG9yZWQgaW4gdGhpcyBtYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbnVtVGFyZ2V0cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBpbmZsdWVuY2VycyAoaWUuIHRoZSBudW1iZXIgb2YgdGFyZ2V0cyB3aXRoIGluZmx1ZW5jZXMgPiAwKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG51bUluZmx1ZW5jZXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luZmx1ZW5jZXNBcmVEaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zeW5jQWN0aXZlVGFyZ2V0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFyZ2V0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsaXN0IG9mIGluZmx1ZW5jZXMgKG9uZSBwZXIgdGFyZ2V0KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGluZmx1ZW5jZXMoKTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICBpZiAodGhpcy5faW5mbHVlbmNlc0FyZURpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZsdWVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VzZVRleHR1cmVUb1N0b3JlVGFyZ2V0cyA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHRhcmdldHMgc2hvdWxkIGJlIHN0b3JlZCBhcyBhIHRleHR1cmUgaW5zdGVhZCBvZiB1c2luZyB2ZXJ0ZXggYXR0cmlidXRlcyAoZGVmYXVsdCBpcyB0cnVlKS5cclxuICAgICAqIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpZiB0aGUgaGFyZHdhcmUgZG9lcyBub3Qgc3VwcG9ydCBpdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHVzZVRleHR1cmVUb1N0b3JlVGFyZ2V0cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlVGV4dHVyZVRvU3RvcmVUYXJnZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdXNlVGV4dHVyZVRvU3RvcmVUYXJnZXRzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZVRleHR1cmVUb1N0b3JlVGFyZ2V0cyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VUZXh0dXJlVG9TdG9yZVRhcmdldHMgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9tdXN0U3luY2hyb25pemUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N5bmNBY3RpdmVUYXJnZXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhlIHRhcmdldHMgYXJlIHN0b3JlZCBpbnRvIGEgdGV4dHVyZSAoaW5zdGVhZCBvZiBhcyBhdHRyaWJ1dGVzKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzVXNpbmdUZXh0dXJlRm9yVGFyZ2V0cygpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBNb3JwaFRhcmdldE1hbmFnZXIuRW5hYmxlVGV4dHVyZVN0b3JhZ2UgJiZcclxuICAgICAgICAgICAgdGhpcy51c2VUZXh0dXJlVG9TdG9yZVRhcmdldHMgJiZcclxuICAgICAgICAgICAgdGhpcy5fY2FuVXNlVGV4dHVyZUZvclRhcmdldHMgJiZcclxuICAgICAgICAgICAgIXRoaXMuX3NjZW5lPy5nZXRFbmdpbmUoKS5nZXRDYXBzKCkuZGlzYWJsZU1vcnBoVGFyZ2V0VGV4dHVyZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYW4gb2JqZWN0IHVzZWQgdG8gc3RvcmUgdXNlciBkZWZpbmVkIGluZm9ybWF0aW9uIGZvciB0aGUgTW9ycGhUYXJnZXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtZXRhZGF0YTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGFjdGl2ZSB0YXJnZXQgYXQgc3BlY2lmaWVkIGluZGV4LiBBbiBhY3RpdmUgdGFyZ2V0IGlzIGEgdGFyZ2V0IHdpdGggYW4gaW5mbHVlbmNlID4gMFxyXG4gICAgICogQHBhcmFtIGluZGV4IGRlZmluZXMgdGhlIGluZGV4IHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVxdWVzdGVkIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QWN0aXZlVGFyZ2V0KGluZGV4OiBudW1iZXIpOiBNb3JwaFRhcmdldCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luZmx1ZW5jZXNBcmVEaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zeW5jQWN0aXZlVGFyZ2V0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGFyZ2V0cy5kYXRhW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHRhcmdldCBhdCBzcGVjaWZpZWQgaW5kZXhcclxuICAgICAqIEBwYXJhbSBpbmRleCBkZWZpbmVzIHRoZSBpbmRleCB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgdGhlIHJlcXVlc3RlZCB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFRhcmdldChpbmRleDogbnVtYmVyKTogTW9ycGhUYXJnZXQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGZpcnN0IHRhcmdldCB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgbmFtZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgdGhlIHJlcXVlc3RlZCB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFRhcmdldEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBOdWxsYWJsZTxNb3JwaFRhcmdldD4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRoaXMuX3RhcmdldHMpIHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbmZsdWVuY2VzQXJlRGlydHkgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX25lZWRVcGRhdGVJbmZsdWVuY2VzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBuZXcgdGFyZ2V0IHRvIHRoaXMgbWFuYWdlclxyXG4gICAgICogQHBhcmFtIHRhcmdldCBkZWZpbmVzIHRoZSB0YXJnZXQgdG8gYWRkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQodGFyZ2V0OiBNb3JwaFRhcmdldCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgIHRoaXMuX3RhcmdldEluZmx1ZW5jZUNoYW5nZWRPYnNlcnZlcnMucHVzaChcclxuICAgICAgICAgICAgdGFyZ2V0Lm9uSW5mbHVlbmNlQ2hhbmdlZC5hZGQoKG5lZWRVcGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyZVVwZGF0ZXNGcm96ZW4gJiYgbmVlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlV2hlblVuZnJvemVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2luZmx1ZW5jZXNBcmVEaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZWVkVXBkYXRlSW5mbHVlbmNlcyA9IHRoaXMuX25lZWRVcGRhdGVJbmZsdWVuY2VzIHx8IG5lZWRVcGRhdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl90YXJnZXREYXRhTGF5b3V0Q2hhbmdlZE9ic2VydmVycy5wdXNoKFxyXG4gICAgICAgICAgICB0YXJnZXQuX29uRGF0YUxheW91dENoYW5nZWQuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX211c3RTeW5jaHJvbml6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zeW5jQWN0aXZlVGFyZ2V0cygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fbXVzdFN5bmNocm9uaXplID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zeW5jQWN0aXZlVGFyZ2V0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIHRhcmdldCBmcm9tIHRoZSBtYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IGRlZmluZXMgdGhlIHRhcmdldCB0byByZW1vdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVRhcmdldCh0YXJnZXQ6IE1vcnBoVGFyZ2V0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQub25JbmZsdWVuY2VDaGFuZ2VkLnJlbW92ZSh0aGlzLl90YXJnZXRJbmZsdWVuY2VDaGFuZ2VkT2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSlbMF0pO1xyXG4gICAgICAgICAgICB0YXJnZXQuX29uRGF0YUxheW91dENoYW5nZWQucmVtb3ZlKHRoaXMuX3RhcmdldERhdGFMYXlvdXRDaGFuZ2VkT2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSlbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLl9tdXN0U3luY2hyb25pemUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zeW5jQWN0aXZlVGFyZ2V0cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLnN0b3BBbmltYXRpb24odGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9iaW5kKGVmZmVjdDogRWZmZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luZmx1ZW5jZXNBcmVEaXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zeW5jQWN0aXZlVGFyZ2V0cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlZmZlY3Quc2V0RmxvYXQzKFwibW9ycGhUYXJnZXRUZXh0dXJlSW5mb1wiLCB0aGlzLl90ZXh0dXJlVmVydGV4U3RyaWRlLCB0aGlzLl90ZXh0dXJlV2lkdGgsIHRoaXMuX3RleHR1cmVIZWlnaHQpO1xyXG4gICAgICAgIGVmZmVjdC5zZXRGbG9hdEFycmF5KFwibW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlc1wiLCB0aGlzLl9tb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzKTtcclxuICAgICAgICBlZmZlY3Quc2V0VGV4dHVyZShcIm1vcnBoVGFyZ2V0c1wiLCB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmUpO1xyXG4gICAgICAgIGVmZmVjdC5zZXRGbG9hdChcIm1vcnBoVGFyZ2V0Q291bnRcIiwgdGhpcy5udW1JbmZsdWVuY2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9uZSB0aGUgY3VycmVudCBtYW5hZ2VyXHJcbiAgICAgKiBAcmV0dXJucyBhIG5ldyBNb3JwaFRhcmdldE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb25lKCk6IE1vcnBoVGFyZ2V0TWFuYWdlciB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IG5ldyBNb3JwaFRhcmdldE1hbmFnZXIodGhpcy5fc2NlbmUpO1xyXG4gICAgICAgIGNvcHkuYXJlVXBkYXRlc0Zyb3plbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRoaXMuX3RhcmdldHMpIHtcclxuICAgICAgICAgICAgY29weS5hZGRUYXJnZXQodGFyZ2V0LmNsb25lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3B5LmFyZVVwZGF0ZXNGcm96ZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29weS5lbmFibGVQb3NpdGlvbk1vcnBoaW5nID0gdGhpcy5lbmFibGVQb3NpdGlvbk1vcnBoaW5nO1xyXG4gICAgICAgIGNvcHkuZW5hYmxlTm9ybWFsTW9ycGhpbmcgPSB0aGlzLmVuYWJsZU5vcm1hbE1vcnBoaW5nO1xyXG4gICAgICAgIGNvcHkuZW5hYmxlVGFuZ2VudE1vcnBoaW5nID0gdGhpcy5lbmFibGVUYW5nZW50TW9ycGhpbmc7XHJcbiAgICAgICAgY29weS5lbmFibGVVVk1vcnBoaW5nID0gdGhpcy5lbmFibGVVVk1vcnBoaW5nO1xyXG4gICAgICAgIGNvcHkuZW5hYmxlVVYyTW9ycGhpbmcgPSB0aGlzLmVuYWJsZVVWMk1vcnBoaW5nO1xyXG4gICAgICAgIGNvcHkuZW5hYmxlQ29sb3JNb3JwaGluZyA9IHRoaXMuZW5hYmxlQ29sb3JNb3JwaGluZztcclxuICAgICAgICBjb3B5Lm1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoZSBjdXJyZW50IG1hbmFnZXIgaW50byBhIFNlcmlhbGl6YXRpb24gb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgc2VyaWFsaXplZCBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlkID0gdGhpcy51bmlxdWVJZDtcclxuXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC50YXJnZXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGhpcy5fdGFyZ2V0cykge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRhcmdldHMucHVzaCh0YXJnZXQuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tZXRhZGF0YSA9IHRoaXMubWV0YWRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zeW5jQWN0aXZlVGFyZ2V0cyhuZWVkVXBkYXRlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hcmVVcGRhdGVzRnJvemVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5lZWRVcGRhdGUgPSBuZWVkVXBkYXRlIHx8IHRoaXMuX25lZWRVcGRhdGVJbmZsdWVuY2VzO1xyXG5cclxuICAgICAgICB0aGlzLl9uZWVkVXBkYXRlSW5mbHVlbmNlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2luZmx1ZW5jZXNBcmVEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCB3YXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzID0gISF0aGlzLl90YXJnZXRTdG9yZVRleHR1cmU7XHJcbiAgICAgICAgY29uc3QgaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzID0gdGhpcy5pc1VzaW5nVGV4dHVyZUZvclRhcmdldHM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tdXN0U3luY2hyb25pemUgfHwgd2FzVXNpbmdUZXh0dXJlRm9yVGFyZ2V0cyAhPT0gaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c3RTeW5jaHJvbml6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNocm9uaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5mbHVlbmNlQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldHMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9tb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzIHx8IHRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXMubGVuZ3RoICE9PSB0aGlzLl90YXJnZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl90YXJnZXRzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0SW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0aGlzLl90YXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHRhcmdldEluZGV4Kys7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaW5mbHVlbmNlID09PSAwICYmIHRoaXMub3B0aW1pemVJbmZsdWVuY2Vycykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXRzLmxlbmd0aCA+PSBNb3JwaFRhcmdldE1hbmFnZXIuTWF4QWN0aXZlTW9ycGhUYXJnZXRzSW5WZXJ0ZXhBdHRyaWJ1dGVNb2RlICYmICF0aGlzLmlzVXNpbmdUZXh0dXJlRm9yVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzW2luZmx1ZW5jZUNvdW50XSA9IHRhcmdldEluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLl90ZW1wSW5mbHVlbmNlc1tpbmZsdWVuY2VDb3VudCsrXSA9IHRhcmdldC5pbmZsdWVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbW9ycGhUYXJnZXRUZXh0dXJlSW5kaWNlcy5sZW5ndGggIT09IGluZmx1ZW5jZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vcnBoVGFyZ2V0VGV4dHVyZUluZGljZXMgPSB0aGlzLl9tb3JwaFRhcmdldFRleHR1cmVJbmRpY2VzLnNsaWNlKDAsIGluZmx1ZW5jZUNvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faW5mbHVlbmNlcyB8fCB0aGlzLl9pbmZsdWVuY2VzLmxlbmd0aCAhPT0gaW5mbHVlbmNlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5mbHVlbmNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoaW5mbHVlbmNlQ291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGluZmx1ZW5jZUNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZmx1ZW5jZXNbaW5kZXhdID0gdGhpcy5fdGVtcEluZmx1ZW5jZXNbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5lZWRVcGRhdGUgJiYgdGhpcy5fc2NlbmUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIHRoaXMuX3NjZW5lLm1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCg8YW55Pm1lc2gpLm1vcnBoVGFyZ2V0TWFuYWdlciA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1VzaW5nVGV4dHVyZUZvclRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5fbWFya1N1Yk1lc2hlc0FzQXR0cmlidXRlc0RpcnR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxNZXNoPm1lc2gpLl9zeW5jR2VvbWV0cnlXaXRoTW9ycGhUYXJnZXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luY2hyb25pemUgdGhlIHRhcmdldHMgd2l0aCBhbGwgdGhlIG1lc2hlcyB1c2luZyB0aGlzIG1vcnBoIHRhcmdldCBtYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzeW5jaHJvbml6ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NjZW5lIHx8IHRoaXMuYXJlVXBkYXRlc0Zyb3plbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydHNQb3NpdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N1cHBvcnRzTm9ybWFscyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydHNUYW5nZW50cyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydHNVVnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N1cHBvcnRzVVYycyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc3VwcG9ydHNDb2xvcnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U3RvcmVUZXh0dXJlPy5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U3RvcmVUZXh0dXJlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzICYmIHRoaXMuX3RhcmdldHMubGVuZ3RoID4gZW5naW5lLmdldENhcHMoKS50ZXh0dXJlMkRBcnJheU1heExheWVyQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VUZXh0dXJlVG9TdG9yZVRhcmdldHMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRoaXMuX3RhcmdldHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNQb3NpdGlvbnMgPSB0aGlzLl9zdXBwb3J0c1Bvc2l0aW9ucyAmJiB0YXJnZXQuaGFzUG9zaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c05vcm1hbHMgPSB0aGlzLl9zdXBwb3J0c05vcm1hbHMgJiYgdGFyZ2V0Lmhhc05vcm1hbHM7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzVGFuZ2VudHMgPSB0aGlzLl9zdXBwb3J0c1RhbmdlbnRzICYmIHRhcmdldC5oYXNUYW5nZW50cztcclxuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNVVnMgPSB0aGlzLl9zdXBwb3J0c1VWcyAmJiB0YXJnZXQuaGFzVVZzO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1VWMnMgPSB0aGlzLl9zdXBwb3J0c1VWMnMgJiYgdGFyZ2V0Lmhhc1VWMnM7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cHBvcnRzQ29sb3JzID0gdGhpcy5fc3VwcG9ydHNDb2xvcnMgJiYgdGFyZ2V0Lmhhc0NvbG9ycztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleENvdW50ID0gdGFyZ2V0LnZlcnRleENvdW50O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmVydGV4Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZlcnRleENvdW50ID0gdmVydGV4Q291bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGV4Q291bnQgIT09IHZlcnRleENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgYEluY29tcGF0aWJsZSB0YXJnZXQuIFRhcmdldHMgbXVzdCBhbGwgaGF2ZSB0aGUgc2FtZSB2ZXJ0aWNlcyBjb3VudC4gQ3VycmVudCB2ZXJ0ZXggY291bnQ6ICR7dGhpcy5fdmVydGV4Q291bnR9LCB2ZXJ0ZXggY291bnQgZm9yIHRhcmdldCBcIiR7dGFyZ2V0Lm5hbWV9XCI6ICR7dmVydGV4Q291bnR9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNVc2luZ1RleHR1cmVGb3JUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVWZXJ0ZXhTdHJpZGUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNQb3NpdGlvbnMgJiYgdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSsrO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c05vcm1hbHMgJiYgdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSsrO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1RhbmdlbnRzICYmIHRoaXMuX3RleHR1cmVWZXJ0ZXhTdHJpZGUrKztcclxuICAgICAgICAgICAgdGhpcy5fc3VwcG9ydHNVVnMgJiYgdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSsrO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c1VWMnMgJiYgdGhpcy5fdGV4dHVyZVZlcnRleFN0cmlkZSsrO1xyXG4gICAgICAgICAgICB0aGlzLl9zdXBwb3J0c0NvbG9ycyAmJiB0aGlzLl90ZXh0dXJlVmVydGV4U3RyaWRlKys7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlV2lkdGggPSB0aGlzLl92ZXJ0ZXhDb3VudCAqIHRoaXMuX3RleHR1cmVWZXJ0ZXhTdHJpZGUgfHwgMTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZUhlaWdodCA9IDE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXhUZXh0dXJlU2l6ZSA9IGVuZ2luZS5nZXRDYXBzKCkubWF4VGV4dHVyZVNpemU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0dXJlV2lkdGggPiBtYXhUZXh0dXJlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dHVyZUhlaWdodCA9IE1hdGguY2VpbCh0aGlzLl90ZXh0dXJlV2lkdGggLyBtYXhUZXh0dXJlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0dXJlV2lkdGggPSBtYXhUZXh0dXJlU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q291bnQgPSB0aGlzLl90YXJnZXRzLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGFyZ2V0Q291bnQgKiB0aGlzLl90ZXh0dXJlV2lkdGggKiB0aGlzLl90ZXh0dXJlSGVpZ2h0ICogNCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhcmdldENvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0YXJnZXQuZ2V0UG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxzID0gdGFyZ2V0LmdldE5vcm1hbHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHV2cyA9IHRhcmdldC5nZXRVVnMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhbmdlbnRzID0gdGFyZ2V0LmdldFRhbmdlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1djJzID0gdGFyZ2V0LmdldFVWMnMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IHRhcmdldC5nZXRDb2xvcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBpbmRleCAqIHRoaXMuX3RleHR1cmVXaWR0aCAqIHRoaXMuX3RleHR1cmVIZWlnaHQgKiA0O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdmVydGV4ID0gMDsgdmVydGV4IDwgdGhpcy5fdmVydGV4Q291bnQ7IHZlcnRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzUG9zaXRpb25zICYmIHBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSBwb3NpdGlvbnNbdmVydGV4ICogM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMV0gPSBwb3NpdGlvbnNbdmVydGV4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDJdID0gcG9zaXRpb25zW3ZlcnRleCAqIDMgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3VwcG9ydHNOb3JtYWxzICYmIG5vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXRdID0gbm9ybWFsc1t2ZXJ0ZXggKiAzXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyAxXSA9IG5vcm1hbHNbdmVydGV4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDJdID0gbm9ybWFsc1t2ZXJ0ZXggKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzVVZzICYmIHV2cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSB1dnNbdmVydGV4ICogMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMV0gPSB1dnNbdmVydGV4ICogMiArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdXBwb3J0c1RhbmdlbnRzICYmIHRhbmdlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0XSA9IHRhbmdlbnRzW3ZlcnRleCAqIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDFdID0gdGFuZ2VudHNbdmVydGV4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDJdID0gdGFuZ2VudHNbdmVydGV4ICogMyArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdXBwb3J0c1VWMnMgJiYgdXYycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSB1djJzW3ZlcnRleCAqIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDFdID0gdXYyc1t2ZXJ0ZXggKiAyICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzQ29sb3JzICYmIGNvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldF0gPSBjb2xvcnNbdmVydGV4ICogNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbb2Zmc2V0ICsgMV0gPSBjb2xvcnNbdmVydGV4ICogNCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW29mZnNldCArIDJdID0gY29sb3JzW3ZlcnRleCAqIDQgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtvZmZzZXQgKyAzXSA9IGNvbG9yc1t2ZXJ0ZXggKiA0ICsgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0U3RvcmVUZXh0dXJlID0gUmF3VGV4dHVyZTJEQXJyYXkuQ3JlYXRlUkdCQVRleHR1cmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dHVyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGV4dHVyZUhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRhcmdldENvdW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NlbmUsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLlRFWFRVUkVfTkVBUkVTVF9TQU1QTElOR01PREUsXHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuVEVYVFVSRVRZUEVfRkxPQVRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0U3RvcmVUZXh0dXJlLm5hbWUgPSBgTW9ycGggdGV4dHVyZV8ke3RoaXMudW5pcXVlSWR9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZsYWcgbWVzaGVzIGFzIGRpcnR5IHRvIHJlc3luYyB3aXRoIHRoZSBhY3RpdmUgdGFyZ2V0c1xyXG4gICAgICAgIGZvciAoY29uc3QgbWVzaCBvZiB0aGlzLl9zY2VuZS5tZXNoZXMpIHtcclxuICAgICAgICAgICAgaWYgKCg8YW55Pm1lc2gpLm1vcnBoVGFyZ2V0TWFuYWdlciA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgKDxNZXNoPm1lc2gpLl9zeW5jR2VvbWV0cnlXaXRoTW9ycGhUYXJnZXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxlYXNlIGFsbCByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RhcmdldFN0b3JlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRTdG9yZVRleHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0U3RvcmVUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gc2NlbmVcclxuICAgICAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUucmVtb3ZlTW9ycGhUYXJnZXRNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wYXJlbnRDb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2Vycy5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnRDb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Q29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtb3JwaCBvZiB0aGlzLl90YXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZS5zdG9wQW5pbWF0aW9uKG1vcnBoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0aWNzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE1vcnBoVGFyZ2V0TWFuYWdlciBmcm9tIHNlcmlhbGl6ZWQgZGF0YVxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgZGVmaW5lcyB0aGUgc2VyaWFsaXplZCBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgaG9zdGluZyBzY2VuZVxyXG4gICAgICogQHJldHVybnMgdGhlIG5ldyBNb3JwaFRhcmdldE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQYXJzZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIHNjZW5lOiBTY2VuZSk6IE1vcnBoVGFyZ2V0TWFuYWdlciB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1vcnBoVGFyZ2V0TWFuYWdlcihzY2VuZSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0RGF0YSBvZiBzZXJpYWxpemF0aW9uT2JqZWN0LnRhcmdldHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmFkZFRhcmdldChNb3JwaFRhcmdldC5QYXJzZSh0YXJnZXREYXRhLCBzY2VuZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3QubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0gc2VyaWFsaXphdGlvbk9iamVjdC5tZXRhZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLyogZXNsaW50LWRpc2FibGUgZ2l0aHViL25vLXRoZW4gKi9cclxuaW1wb3J0IHR5cGUgeyBJbmRpY2VzQXJyYXksIE51bGxhYmxlLCBUeXBlZEFycmF5LCBUeXBlZEFycmF5Q29uc3RydWN0b3IgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gXCJjb3JlL01pc2MvZGVmZXJyZWRcIjtcclxuaW1wb3J0IHsgUXVhdGVybmlvbiwgVmVjdG9yMywgTWF0cml4LCBUbXBWZWN0b3JzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgRnJlZUNhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvZnJlZUNhbWVyYVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGFibGUgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGFibGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGlvbktleSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uS2V5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbktleUludGVycG9sYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbktleVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xyXG5pbXBvcnQgeyBCb25lIH0gZnJvbSBcImNvcmUvQm9uZXMvYm9uZVwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJjb3JlL0JvbmVzL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUNyZWF0aW9uT3B0aW9ucyB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHsgQnVmZmVyLCBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gXCJjb3JlL01lc2hlcy9nZW9tZXRyeVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0XCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0TWFuYWdlciB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlckFzeW5jUmVzdWx0LCBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50IH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJUHJvcGVydHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgQWNjZXNzb3JUeXBlLFxyXG4gICAgQ2FtZXJhVHlwZSxcclxuICAgIEFjY2Vzc29yQ29tcG9uZW50VHlwZSxcclxuICAgIE1hdGVyaWFsQWxwaGFNb2RlLFxyXG4gICAgVGV4dHVyZU1pbkZpbHRlcixcclxuICAgIFRleHR1cmVXcmFwTW9kZSxcclxuICAgIFRleHR1cmVNYWdGaWx0ZXIsXHJcbiAgICBNZXNoUHJpbWl0aXZlTW9kZSxcclxufSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHtcclxuICAgIElHTFRGLFxyXG4gICAgSVNhbXBsZXIsXHJcbiAgICBJTm9kZSxcclxuICAgIElTY2VuZSxcclxuICAgIElNZXNoLFxyXG4gICAgSUFjY2Vzc29yLFxyXG4gICAgSVNraW4sXHJcbiAgICBJQ2FtZXJhLFxyXG4gICAgSUFuaW1hdGlvbixcclxuICAgIElCdWZmZXIsXHJcbiAgICBJQnVmZmVyVmlldyxcclxuICAgIElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgSU1hdGVyaWFsLFxyXG4gICAgSVRleHR1cmVJbmZvLFxyXG4gICAgSVRleHR1cmUsXHJcbiAgICBJSW1hZ2UsXHJcbiAgICBJTWVzaFByaW1pdGl2ZSxcclxuICAgIElBcnJheUl0ZW0sXHJcbiAgICBfSVNhbXBsZXJEYXRhLFxyXG4gICAgSUFuaW1hdGlvbkNoYW5uZWwsXHJcbiAgICBJQW5pbWF0aW9uU2FtcGxlcixcclxuICAgIF9JQW5pbWF0aW9uU2FtcGxlckRhdGEsXHJcbn0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlciwgSUdMVEZMb2FkZXJEYXRhIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZGaWxlTG9hZGVyLCBHTFRGTG9hZGVyU3RhdGUsIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSwgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB9IGZyb20gXCIuLi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IERlY29kZUJhc2U2NFVybFRvQmluYXJ5LCBHZXRNaW1lVHlwZSwgSXNCYXNlNjREYXRhVXJsLCBMb2FkRmlsZUVycm9yIH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgeyBCb3VuZGluZ0luZm8gfSBmcm9tIFwiY29yZS9DdWxsaW5nL2JvdW5kaW5nSW5mb1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb25Qcm9wZXJ0eUluZm8gfSBmcm9tIFwiLi9nbFRGTG9hZGVyQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSU9iamVjdEluZm8gfSBmcm9tIFwiY29yZS9PYmplY3RNb2RlbC9vYmplY3RNb2RlbEludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJlZEdMVEZFeHRlbnNpb25zLCByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgR0xURkV4dGVuc2lvbkZhY3RvcnkgfSBmcm9tIFwiLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuaW1wb3J0IHR5cGUgeyBJSW50ZXJwb2xhdGlvblByb3BlcnR5SW5mbyB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC90eXBlRGVmaW5pdGlvbnNcIjtcclxuaW1wb3J0IHsgR2V0TWFwcGluZ0ZvcktleSB9IGZyb20gXCIuL0V4dGVuc2lvbnMvb2JqZWN0TW9kZWxNYXBwaW5nXCI7XHJcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gXCJjb3JlL01pc2MvZGVlcE1lcmdlclwiO1xyXG5pbXBvcnQgeyBHZXRUeXBlZEFycmF5Q29uc3RydWN0b3IgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB7IExhenkgfSBmcm9tIFwiY29yZS9NaXNjL2xhenlcIjtcclxuaW1wb3J0IHR5cGUgeyBJTWF0ZXJpYWxMb2FkaW5nQWRhcHRlciB9IGZyb20gXCIuL21hdGVyaWFsTG9hZGluZ0FkYXB0ZXJcIjtcclxuXHJcbi8vIENhY2hpbmcgdGhlc2UgZHluYW1pYyBpbXBvcnRzIGdpdmVzIGEgc3VycHJpc2luZyBwZXJmIGJvb3N0IChjb21wYXJlZCB0byBpbXBvcnRpbmcgdGhlbSBkaXJlY3RseSBlYWNoIHRpbWUpLlxyXG5jb25zdCBMYXp5QW5pbWF0aW9uR3JvdXBNb2R1bGVQcm9taXNlID0gbmV3IExhenkoKCkgPT4gaW1wb3J0KFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkdyb3VwXCIpKTtcclxuY29uc3QgTGF6eUxvYWRlckFuaW1hdGlvbk1vZHVsZVByb21pc2UgPSBuZXcgTGF6eSgoKSA9PiBpbXBvcnQoXCIuL2dsVEZMb2FkZXJBbmltYXRpb25cIikpO1xyXG5cclxuZXhwb3J0IHsgR0xURkZpbGVMb2FkZXIgfTtcclxuXHJcbmludGVyZmFjZSBJTG9hZGVyUHJvcGVydHkgZXh0ZW5kcyBJUHJvcGVydHkge1xyXG4gICAgX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9uczoge1xyXG4gICAgICAgIFtpZDogc3RyaW5nXTogYm9vbGVhbjtcclxuICAgIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJV2l0aE1ldGFkYXRhIHtcclxuICAgIG1ldGFkYXRhOiBhbnk7XHJcbiAgICBfaW50ZXJuYWxNZXRhZGF0YTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIGNsYXNzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzIHdoZW4gbG9hZGluZyB0aGUgZ2xURiBhc3NldFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFycmF5SXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gaXRlbSBmcm9tIHRoZSBnaXZlbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gZ2V0IHRoZSBpdGVtIGZyb21cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdGhlIGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYXJyYXkgaXRlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldDxUPihjb250ZXh0OiBzdHJpbmcsIGFycmF5OiBBcnJheUxpa2U8VD4gfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQpOiBUIHtcclxuICAgICAgICBpZiAoIWFycmF5IHx8IGluZGV4ID09IHVuZGVmaW5lZCB8fCAhYXJyYXlbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogRmFpbGVkIHRvIGZpbmQgaW5kZXggKCR7aW5kZXh9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFycmF5W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gaXRlbSBmcm9tIHRoZSBnaXZlbiBhcnJheSBvciByZXR1cm5zIG51bGwgaWYgbm90IGF2YWlsYWJsZS5cclxuICAgICAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gZ2V0IHRoZSBpdGVtIGZyb21cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdGhlIGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYXJyYXkgaXRlbSBvciBudWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVHJ5R2V0PFQ+KGFycmF5OiBBcnJheUxpa2U8VD4gfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQpOiBOdWxsYWJsZTxUPiB7XHJcbiAgICAgICAgaWYgKCFhcnJheSB8fCBpbmRleCA9PSB1bmRlZmluZWQgfHwgIWFycmF5W2luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheVtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBc3NpZ24gYW4gYGluZGV4YCBmaWVsZCB0byBlYWNoIGl0ZW0gb2YgdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSBvZiBpdGVtc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEFzc2lnbihhcnJheT86IElBcnJheUl0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChhcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtpbmRleF0uaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25UYXJnZXRJbmZvIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHRhcmdldDogdW5rbm93bjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwcm9wZXJ0aWVzOiBBcnJheTxBbmltYXRpb25Qcm9wZXJ0eUluZm8+O1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkQm91bmRpbmdJbmZvRnJvbVBvc2l0aW9uQWNjZXNzb3IoYWNjZXNzb3I6IElBY2Nlc3Nvcik6IE51bGxhYmxlPEJvdW5kaW5nSW5mbz4ge1xyXG4gICAgaWYgKGFjY2Vzc29yLm1pbiAmJiBhY2Nlc3Nvci5tYXgpIHtcclxuICAgICAgICBjb25zdCBtaW5BcnJheSA9IGFjY2Vzc29yLm1pbiBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcbiAgICAgICAgY29uc3QgbWF4QXJyYXkgPSBhY2Nlc3Nvci5tYXggYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgICAgIGNvbnN0IG1pblZlY3RvciA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXS5jb3B5RnJvbUZsb2F0cyhtaW5BcnJheVswXSwgbWluQXJyYXlbMV0sIG1pbkFycmF5WzJdKTtcclxuICAgICAgICBjb25zdCBtYXhWZWN0b3IgPSBUbXBWZWN0b3JzLlZlY3RvcjNbMV0uY29weUZyb21GbG9hdHMobWF4QXJyYXlbMF0sIG1heEFycmF5WzFdLCBtYXhBcnJheVsyXSk7XHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLm5vcm1hbGl6ZWQgJiYgYWNjZXNzb3IuY29tcG9uZW50VHlwZSAhPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FUKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXZpZGVyID0gMTtcclxuICAgICAgICAgICAgc3dpdGNoIChhY2Nlc3Nvci5jb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5CWVRFOlxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlkZXIgPSAxMjcuMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0JZVEU6XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2aWRlciA9IDI1NS4wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuU0hPUlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2aWRlciA9IDMyNzY3LjA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVDpcclxuICAgICAgICAgICAgICAgICAgICBkaXZpZGVyID0gNjU1MzUuMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvbmVPdmVyRGl2aWRlciA9IDEgLyBkaXZpZGVyO1xyXG4gICAgICAgICAgICBtaW5WZWN0b3Iuc2NhbGVJblBsYWNlKG9uZU92ZXJEaXZpZGVyKTtcclxuICAgICAgICAgICAgbWF4VmVjdG9yLnNjYWxlSW5QbGFjZShvbmVPdmVyRGl2aWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQm91bmRpbmdJbmZvKG1pblZlY3RvciwgbWF4VmVjdG9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG50eXBlIFBCUk1hdGVyaWFsSW1wbGVtZW50YXRpb24gPSB7XHJcbiAgICBtYXRlcmlhbENsYXNzOiB0eXBlb2YgTWF0ZXJpYWw7XHJcbiAgICBhZGFwdGVyQ2xhc3M6IG5ldyAobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiBJTWF0ZXJpYWxMb2FkaW5nQWRhcHRlcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZ2xURiAyLjAgbG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkxvYWRlciBpbXBsZW1lbnRzIElHTFRGTG9hZGVyIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBfY29tcGxldGVQcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPiA9IG51bGw7XHJcblxyXG4gICAgLyoqIFN0b3JhZ2UgKi9cclxuICAgIHB1YmxpYyBfYmFieWxvbkxpZ2h0czogTGlnaHRbXSA9IFtdO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfZGlzYWJsZUluc3RhbmNlZE1lc2ggPSAwO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfYWxsTWF0ZXJpYWxzRGlydHlSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfc2tpcFN0YXJ0QW5pbWF0aW9uU3RlcCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BhcmVudDogR0xURkZpbGVMb2FkZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9leHRlbnNpb25zID0gbmV3IEFycmF5PElHTFRGTG9hZGVyRXh0ZW5zaW9uPigpO1xyXG4gICAgcHJpdmF0ZSBfZGlzcG9zZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Jvb3RVcmw6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZmlsZU5hbWU6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdW5pcXVlUm9vdFVybDogTnVsbGFibGU8c3RyaW5nPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9nbHRmOiBJR0xURjtcclxuICAgIHByaXZhdGUgX2JpbjogTnVsbGFibGU8SURhdGFCdWZmZXI+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2JhYnlsb25TY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIF9yb290QmFieWxvbk1lc2g6IE51bGxhYmxlPFRyYW5zZm9ybU5vZGU+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRCYWJ5bG9uTWF0ZXJpYWxEYXRhOiB7IFtkcmF3TW9kZTogbnVtYmVyXTogTWF0ZXJpYWwgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcG9zdFNjZW5lTG9hZEFjdGlvbnMgPSBuZXcgQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21hdGVyaWFsQWRhcHRlckNhY2hlID0gbmV3IFdlYWtNYXA8TWF0ZXJpYWwsIElNYXRlcmlhbExvYWRpbmdBZGFwdGVyPigpO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfcGJyTWF0ZXJpYWxJbXBsOiBOdWxsYWJsZTxSZWFkb25seTxQQlJNYXRlcmlhbEltcGxlbWVudGF0aW9uPj4gfCBmYWxzZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBnbFRGIHNhbXBsZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRGVmYXVsdFNhbXBsZXI6IElTYW1wbGVyID0geyBpbmRleDogLTEgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGxvYWRlciBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nLCBmYWN0b3J5OiBHTFRGRXh0ZW5zaW9uRmFjdG9yeSk6IHZvaWQge1xyXG4gICAgICAgIHJlZ2lzdGVyR0xURkV4dGVuc2lvbihuYW1lLCBmYWxzZSwgZmFjdG9yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVycyBhIGxvYWRlciBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVyIGV4dGVuc2lvbi5cclxuICAgICAqIEByZXR1cm5zIEEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV4dGVuc2lvbiBoYXMgYmVlbiB1bnJlZ2lzdGVyZWRcclxuICAgICAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVbnJlZ2lzdGVyRXh0ZW5zaW9uKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBnbFRGIEpTT04uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZ2x0ZigpOiBJR0xURiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9nbHRmKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdsVEYgSlNPTiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dsdGY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQklOIGNodW5rIG9mIGEgYmluYXJ5IGdsVEYuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYmluKCk6IE51bGxhYmxlPElEYXRhQnVmZmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXJlbnQgZmlsZSBsb2FkZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGFyZW50KCk6IEdMVEZGaWxlTG9hZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJhYnlsb24gc2NlbmUgd2hlbiBsb2FkaW5nIHRoZSBhc3NldC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBiYWJ5bG9uU2NlbmUoKTogU2NlbmUge1xyXG4gICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjZW5lIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFieWxvblNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJvb3QgQmFieWxvbiBub2RlIHdoZW4gbG9hZGluZyB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdEJhYnlsb25NZXNoKCk6IE51bGxhYmxlPFRyYW5zZm9ybU5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdEJhYnlsb25NZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJvb3QgdXJsIHdoZW4gbG9hZGluZyB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcm9vdFVybCgpOiBOdWxsYWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFVybDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBvciBnZXRzIGEgY2FjaGVkIG1hdGVyaWFsIGxvYWRpbmcgYWRhcHRlciB3aXRoIGR5bmFtaWMgaW1wb3J0c1xyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsIFRoZSBtYXRlcmlhbCB0byBhZGFwdFxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBhcHByb3ByaWF0ZSBhZGFwdGVyXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9nZXRPckNyZWF0ZU1hdGVyaWFsQWRhcHRlcihtYXRlcmlhbDogTWF0ZXJpYWwpOiBJTWF0ZXJpYWxMb2FkaW5nQWRhcHRlciB7XHJcbiAgICAgICAgbGV0IGFkYXB0ZXIgPSB0aGlzLl9tYXRlcmlhbEFkYXB0ZXJDYWNoZS5nZXQobWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmICghYWRhcHRlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGJyTWF0ZXJpYWxJbXBsKSB7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyID0gbmV3IHRoaXMuX3Bick1hdGVyaWFsSW1wbC5hZGFwdGVyQ2xhc3MobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBcHByb3ByaWF0ZSBtYXRlcmlhbCBhZGFwdGVyIGNsYXNzIG5vdCBmb3VuZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsQWRhcHRlckNhY2hlLnNldChtYXRlcmlhbCwgYWRhcHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhZGFwdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kaXNwb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlUHJvbWlzZXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9ucy5mb3JFYWNoKChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5kaXNwb3NlICYmIGV4dGVuc2lvbi5kaXNwb3NlKCkpO1xyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgKHRoaXMuX2dsdGYgYXMgTnVsbGFibGU8SUdMVEY+KSA9IG51bGw7IC8vIFRPRE9cclxuICAgICAgICB0aGlzLl9iaW4gPSBudWxsO1xyXG4gICAgICAgICh0aGlzLl9iYWJ5bG9uU2NlbmUgYXMgTnVsbGFibGU8U2NlbmU+KSA9IG51bGw7IC8vIFRPRE9cclxuICAgICAgICB0aGlzLl9yb290QmFieWxvbk1lc2ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRCYWJ5bG9uTWF0ZXJpYWxEYXRhID0ge307XHJcbiAgICAgICAgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFyZW50LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGNvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+LFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZSA9IFwiXCJcclxuICAgICk6IFByb21pc2U8SVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQ+IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NldENvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZERhdGEoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbm9kZXM6IE51bGxhYmxlPEFycmF5PG51bWJlcj4+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZXNoZXNOYW1lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZU1hcDogeyBbbmFtZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcFtub2RlLm5hbWVdID0gbm9kZS5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lcyA9IG1lc2hlc05hbWVzIGluc3RhbmNlb2YgQXJyYXkgPyBtZXNoZXNOYW1lcyA6IFttZXNoZXNOYW1lc107XHJcbiAgICAgICAgICAgICAgICBub2RlcyA9IG5hbWVzLm1hcCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2RlTWFwW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmluZCBub2RlICcke25hbWV9J2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2xvYWRBc3luYyhyb290VXJsLCBmaWxlTmFtZSwgbm9kZXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiB0aGlzLl9nZXRNZXNoZXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNrZWxldG9uczogdGhpcy5fZ2V0U2tlbGV0b25zKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzOiB0aGlzLl9nZXRBbmltYXRpb25Hcm91cHMoKSxcclxuICAgICAgICAgICAgICAgICAgICBsaWdodHM6IHRoaXMuX2JhYnlsb25MaWdodHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZXM6IHRoaXMuX2dldFRyYW5zZm9ybU5vZGVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllczogdGhpcy5fZ2V0R2VvbWV0cmllcygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZU1hbmFnZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBsb2FkQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBJR0xURkxvYWRlckRhdGEsIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCwgZmlsZU5hbWUgPSBcIlwiKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5fbG9hZERhdGEoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2xvYWRBc3luYyhyb290VXJsLCBmaWxlTmFtZSwgbnVsbCwgKCkgPT4gdW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkQXN5bmM8VD4ocm9vdFVybDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBub2RlczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj4sIHJlc3VsdEZ1bmM6ICgpID0+IFQpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdFVybCA9IHJvb3RVcmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bmlxdWVSb290VXJsID0gIXJvb3RVcmwuc3RhcnRzV2l0aChcImZpbGU6XCIpICYmIGZpbGVOYW1lID8gcm9vdFVybCA6IGAke3Jvb3RVcmx9JHtEYXRlLm5vdygpfS9gO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9sb2FkRXh0ZW5zaW9uc0FzeW5jKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTk9URTogRXhwbGljaXRseSBjaGVjayBfcGJyTWF0ZXJpYWxJbXBsIGZvciBudWxsIGFzIGEgdmFsdWUgb2YgZmFsc2UgbWVhbnMgZG9uJ3QgdXNlIFBCUiBtYXRlcmlhbHMgYXQgYWxsLlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudC5za2lwTWF0ZXJpYWxzICYmIHRoaXMuX3Bick1hdGVyaWFsSW1wbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LnVzZU9wZW5QQlIgfHwgdGhpcy5pc0V4dGVuc2lvblVzZWQoXCJLSFJfbWF0ZXJpYWxzX29wZW5wYnJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGJyTWF0ZXJpYWxJbXBsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxDbGFzczogKGF3YWl0IGltcG9ydChcImNvcmUvTWF0ZXJpYWxzL1BCUi9vcGVucGJyTWF0ZXJpYWxcIikpLk9wZW5QQlJNYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXJDbGFzczogKGF3YWl0IGltcG9ydChcIi4vb3BlbnBick1hdGVyaWFsTG9hZGluZ0FkYXB0ZXJcIikpLk9wZW5QQlJNYXRlcmlhbExvYWRpbmdBZGFwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bick1hdGVyaWFsSW1wbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsQ2xhc3M6IChhd2FpdCBpbXBvcnQoXCJjb3JlL01hdGVyaWFscy9QQlIvcGJyTWF0ZXJpYWxcIikpLlBCUk1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRlckNsYXNzOiAoYXdhaXQgaW1wb3J0KFwiLi9wYnJNYXRlcmlhbExvYWRpbmdBZGFwdGVyXCIpKS5QQlJNYXRlcmlhbExvYWRpbmdBZGFwdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nVG9SZWFkeUNvdW50ZXJOYW1lID0gYCR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5MT0FESU5HXX0gPT4gJHtHTFRGTG9hZGVyU3RhdGVbR0xURkxvYWRlclN0YXRlLlJFQURZXX1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ1RvQ29tcGxldGVDb3VudGVyTmFtZSA9IGAke0dMVEZMb2FkZXJTdGF0ZVtHTFRGTG9hZGVyU3RhdGUuTE9BRElOR119ID0+ICR7R0xURkxvYWRlclN0YXRlW0dMVEZMb2FkZXJTdGF0ZS5DT01QTEVURV19YDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihsb2FkaW5nVG9Db21wbGV0ZUNvdW50ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5MT0FESU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V4dGVuc2lvbnNPbkxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEJsb2NrIHRoZSBtYXJraW5nIG9mIG1hdGVyaWFscyBkaXJ0eSB1bnRpbCB0aGUgc2NlbmUgaXMgbG9hZGVkLlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkQmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtID0gdGhpcy5fYmFieWxvblNjZW5lLmJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5ibG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQubG9hZE9ubHlNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTY2VuZUFzeW5jKFwiL25vZGVzXCIsIHsgbm9kZXM6IG5vZGVzLCBpbmRleDogLTEgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ2x0Zi5zY2VuZSAhPSB1bmRlZmluZWQgfHwgKHRoaXMuX2dsdGYuc2NlbmVzICYmIHRoaXMuX2dsdGYuc2NlbmVzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2VuZSA9IEFycmF5SXRlbS5HZXQoYC9zY2VuZWAsIHRoaXMuX2dsdGYuc2NlbmVzLCB0aGlzLl9nbHRmLnNjZW5lIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjZW5lQXN5bmMoYC9zY2VuZXMvJHtzY2VuZS5pbmRleH1gLCBzY2VuZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50LnNraXBNYXRlcmlhbHMgJiYgdGhpcy5wYXJlbnQubG9hZEFsbE1hdGVyaWFscyAmJiB0aGlzLl9nbHRmLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgdGhpcy5fZ2x0Zi5tYXRlcmlhbHMubGVuZ3RoOyArK20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLl9nbHRmLm1hdGVyaWFsc1ttXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IFwiL21hdGVyaWFscy9cIiArIG07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25EcmF3TW9kZSA9IE1hdGVyaWFsLlRyaWFuZ2xlRmlsbE1vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBudWxsLCBiYWJ5bG9uRHJhd01vZGUsICgpID0+IHt9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgdGhlIGJsb2NraW5nIG9mIG1hdGVyaWFsIGRpcnR5LlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FsbE1hdGVyaWFsc0RpcnR5UmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgd2UgYWRkIGEgbGlnaHQgZm9yIGluc3RhbmNlIGFzIGl0IHdpbGwgaW1wYWN0IHRoZSB3aG9sZSBzY2VuZS5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGF1dG9tYXRpY2FsbHkgcmVzZXRzIGV2ZXJ5dGhpbmcgaWYgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5ibG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20gPSBvbGRCbG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc207XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ5IGRlZmF1bHQgYSBuZXdseSBjcmVhdGVkIG1hdGVyaWFsIGlzIGRpcnR5IHNvIHRoZXJlIGlzIG5vIG5lZWQgdG8gZmxhZyB0aGUgZnVsbCBzY2VuZSBhcyBkaXJ0eS5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcGVyZiByZWFzb25zLCB3ZSB0aGVuIGJ5cGFzcyBibG9ja01hdGVyaWFsRGlydHlNZWNoYW5pc20gYXMgdGhpcyB3b3VsZCBcImRpcnR5XCIgdGhlIGVudGlyZSBzY2VuZS5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2ZvcmNlQmxvY2tNYXRlcmlhbERpcnR5TWVjaGFuaXNtKG9sZEJsb2NrTWF0ZXJpYWxEaXJ0eU1lY2hhbmlzbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5jb21waWxlTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9jb21waWxlTWF0ZXJpYWxzQXN5bmMoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5jb21waWxlU2hhZG93R2VuZXJhdG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fY29tcGlsZVNoYWRvd0dlbmVyYXRvcnNBc3luYygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRQcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yb290QmFieWxvbk1lc2ggJiYgdGhpcy5fcm9vdEJhYnlsb25NZXNoICE9PSB0aGlzLl9wYXJlbnQuY3VzdG9tUm9vdE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoLnNldEVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtpbmcgc3VyZSB3ZSBlbmFibGUgZW5vdWdoIGxpZ2h0cyB0byBoYXZlIGFsbCBsaWdodHMgdG9nZXRoZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5tYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gbWF0ZXJpYWwgYXMgYW55O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdC5tYXhTaW11bHRhbmVvdXNMaWdodHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Lm1heFNpbXVsdGFuZW91c0xpZ2h0cyA9IE1hdGgubWF4KG1hdC5tYXhTaW11bHRhbmVvdXNMaWdodHMsIHRoaXMuX2JhYnlsb25TY2VuZS5saWdodHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uUmVhZHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5SRUFEWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9za2lwU3RhcnRBbmltYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXN1bHRQcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKGxvYWRpbmdUb1JlYWR5Q291bnRlck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBUb29scy5TZXRJbW1lZGlhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLl9jb21wbGV0ZVByb21pc2VzKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIobG9hZGluZ1RvQ29tcGxldGVDb3VudGVyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3NldFN0YXRlKEdMVEZMb2FkZXJTdGF0ZS5DT01QTEVURSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25Db21wbGV0ZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXJyb3JPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vbkVycm9yT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25FcnJvck9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWREYXRhKGRhdGE6IElHTFRGTG9hZGVyRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2dsdGYgPSBkYXRhLmpzb24gYXMgSUdMVEY7XHJcbiAgICAgICAgdGhpcy5fc2V0dXBEYXRhKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmJpbikge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJzID0gdGhpcy5fZ2x0Zi5idWZmZXJzO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVycyAmJiBidWZmZXJzWzBdICYmICFidWZmZXJzWzBdLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5QnVmZmVyID0gYnVmZmVyc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aCA8IGRhdGEuYmluLmJ5dGVMZW5ndGggLSAzIHx8IGJpbmFyeUJ1ZmZlci5ieXRlTGVuZ3RoID4gZGF0YS5iaW4uYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBCaW5hcnkgYnVmZmVyIGxlbmd0aCAoJHtiaW5hcnlCdWZmZXIuYnl0ZUxlbmd0aH0pIGZyb20gSlNPTiBkb2VzIG5vdCBtYXRjaCBjaHVuayBsZW5ndGggKCR7ZGF0YS5iaW4uYnl0ZUxlbmd0aH0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluID0gZGF0YS5iaW47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIlVuZXhwZWN0ZWQgQklOIGNodW5rXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldHVwRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYWNjZXNzb3JzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuYW5pbWF0aW9ucyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmJ1ZmZlcnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5idWZmZXJWaWV3cyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLmNhbWVyYXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5pbWFnZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5tYXRlcmlhbHMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5tZXNoZXMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi5ub2Rlcyk7XHJcbiAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9nbHRmLnNhbXBsZXJzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2NlbmVzKTtcclxuICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2dsdGYuc2tpbnMpO1xyXG4gICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZ2x0Zi50ZXh0dXJlcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVQYXJlbnRzOiB7IFtpbmRleDogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuX2dsdGYubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVQYXJlbnRzW2luZGV4XSA9IG5vZGUuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByb290Tm9kZSA9IHRoaXMuX2NyZWF0ZVJvb3ROb2RlKCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLl9nbHRmLm5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRJbmRleCA9IG5vZGVQYXJlbnRzW25vZGUuaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnRJbmRleCA9PT0gdW5kZWZpbmVkID8gcm9vdE5vZGUgOiB0aGlzLl9nbHRmLm5vZGVzW3BhcmVudEluZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9sb2FkRXh0ZW5zaW9uc0FzeW5jKCkge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2VzOiBQcm9taXNlPElHTFRGTG9hZGVyRXh0ZW5zaW9uPltdID0gW107XHJcblxyXG4gICAgICAgIHJlZ2lzdGVyZWRHTFRGRXh0ZW5zaW9ucy5mb3JFYWNoKChyZWdpc3RlcmVkRXh0ZW5zaW9uLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIERvbid0IGxvYWQgZXhwbGljaXRseSBkaXNhYmxlZCBleHRlbnNpb25zLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuZXh0ZW5zaW9uT3B0aW9uc1tuYW1lXT8uZW5hYmxlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3YXJuIGlmIHRoZSBkaXNhYmxlZCBleHRlbnNpb24gaXMgdXNlZCBieSB0aGUgbW9kZWwuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZEV4dGVuc2lvbi5pc0dMVEZFeHRlbnNpb24gJiYgdGhpcy5pc0V4dGVuc2lvblVzZWQobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgRXh0ZW5zaW9uICR7bmFtZX0gaXMgdXNlZCBidXQgaGFzIGJlZW4gZXhwbGljaXRseSBkaXNhYmxlZC5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBMb2FkIGxvYWRlciBleHRlbnNpb25zIHRoYXQgYXJlIG5vdCBhIGdsVEYgZXh0ZW5zaW9uLCBhcyB3ZWxsIGFzIGV4dGVuc2lvbnMgdGhhdCBhcmUgZ2xURiBleHRlbnNpb25zIGFuZCBhcmUgdXNlZCBieSB0aGUgbW9kZWwuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFyZWdpc3RlcmVkRXh0ZW5zaW9uLmlzR0xURkV4dGVuc2lvbiB8fCB0aGlzLmlzRXh0ZW5zaW9uVXNlZChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uUHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBhd2FpdCByZWdpc3RlcmVkRXh0ZW5zaW9uLmZhY3RvcnkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ubmFtZSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYFRoZSBuYW1lIG9mIHRoZSBnbFRGIGxvYWRlciBleHRlbnNpb24gaW5zdGFuY2UgZG9lcyBub3QgbWF0Y2ggdGhlIHJlZ2lzdGVyZWQgbmFtZTogJHtleHRlbnNpb24ubmFtZX0gIT09ICR7bmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgICAgICB9KSgpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMucHVzaCguLi4oYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZW5zaW9uUHJvbWlzZXMpKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMuc29ydCgoYSwgYikgPT4gKGEub3JkZXIgfHwgTnVtYmVyLk1BWF9WQUxVRSkgLSAoYi5vcmRlciB8fCBOdW1iZXIuTUFYX1ZBTFVFKSk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZ2x0Zi5leHRlbnNpb25zUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMuX2dsdGYuZXh0ZW5zaW9uc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB0aGlzLl9leHRlbnNpb25zLnNvbWUoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLm5hbWUgPT09IG5hbWUgJiYgZXh0ZW5zaW9uLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuZXh0ZW5zaW9uT3B0aW9uc1tuYW1lXT8uZW5hYmxlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1aXJlZCBleHRlbnNpb24gJHtuYW1lfSBpcyBkaXNhYmxlZGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlcXVpcmVkIGV4dGVuc2lvbiAke25hbWV9IGlzIG5vdCBhdmFpbGFibGVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVSb290Tm9kZSgpOiBJTm9kZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5jdXN0b21Sb290Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCA9IHRoaXMuX3BhcmVudC5jdXN0b21Sb290Tm9kZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICAgICAgICAgIF9iYWJ5bG9uVHJhbnNmb3JtTm9kZTogdGhpcy5fcm9vdEJhYnlsb25NZXNoID09PSBudWxsID8gdW5kZWZpbmVkIDogdGhpcy5fcm9vdEJhYnlsb25NZXNoLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgY29uc3Qgcm9vdE1lc2ggPSBuZXcgTWVzaChcIl9fcm9vdF9fXCIsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoID0gcm9vdE1lc2g7XHJcbiAgICAgICAgdGhpcy5fcm9vdEJhYnlsb25NZXNoLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaC5zZXRFbmFibGVkKGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9vdE5vZGU6IElOb2RlID0ge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICAgICAgICAgIF9iYWJ5bG9uVHJhbnNmb3JtTm9kZTogdGhpcy5fcm9vdEJhYnlsb25NZXNoLFxyXG4gICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9wYXJlbnQuY29vcmRpbmF0ZVN5c3RlbU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUuQVVUTzoge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByb290Tm9kZS5yb3RhdGlvbiA9IFswLCAxLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgICAgICByb290Tm9kZS5zY2FsZSA9IFsxLCAxLCAtMV07XHJcbiAgICAgICAgICAgICAgICAgICAgR0xURkxvYWRlci5fTG9hZFRyYW5zZm9ybShyb290Tm9kZSwgdGhpcy5fcm9vdEJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlLkZPUkNFX1JJR0hUX0hBTkRFRDoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb29yZGluYXRlIHN5c3RlbSBtb2RlICgke3RoaXMuX3BhcmVudC5jb29yZGluYXRlU3lzdGVtTW9kZX0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3BhcmVudC5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyb290TWVzaCk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIHNjZW5lLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBnbFRGIHNjZW5lIHByb3BlcnR5XHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke3NjZW5lLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgaWYgKHNjZW5lLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygc2NlbmUubm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L25vZGVzLyR7aW5kZXh9YCwgdGhpcy5fZ2x0Zi5ub2RlcywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb2RlQXN5bmMoYC9ub2Rlcy8ke25vZGUuaW5kZXh9YCwgbm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLnBhcmVudCA9IHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpb24gb2YgdGhpcy5fcG9zdFNjZW5lTG9hZEFjdGlvbnMpIHtcclxuICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRBbmltYXRpb25zQXN5bmMoKSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mb3JFYWNoUHJpbWl0aXZlKG5vZGU6IElOb2RlLCBjYWxsYmFjazogKGJhYnlsb25NZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAobm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25NZXNoIG9mIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRHZW9tZXRyaWVzKCk6IEdlb21ldHJ5W10ge1xyXG4gICAgICAgIGNvbnN0IGdlb21ldHJpZXM6IEdlb21ldHJ5W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSAoYmFieWxvbk1lc2ggYXMgTWVzaCkuZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdlb21ldHJ5ICYmIGdlb21ldHJpZXMuaW5kZXhPZihnZW9tZXRyeSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZW9tZXRyaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE1lc2hlcygpOiBBYnN0cmFjdE1lc2hbXSB7XHJcbiAgICAgICAgY29uc3QgbWVzaGVzOiBBYnN0cmFjdE1lc2hbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBSb290IG1lc2ggaXMgYWx3YXlzIGZpcnN0LCBpZiBhdmFpbGFibGUuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RCYWJ5bG9uTWVzaCBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCkge1xyXG4gICAgICAgICAgICBtZXNoZXMucHVzaCh0aGlzLl9yb290QmFieWxvbk1lc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLl9nbHRmLm5vZGVzO1xyXG4gICAgICAgIGlmIChub2Rlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hQcmltaXRpdmUobm9kZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNoZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VHJhbnNmb3JtTm9kZXMoKTogVHJhbnNmb3JtTm9kZVtdIHtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1Ob2RlczogVHJhbnNmb3JtTm9kZVtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fZ2x0Zi5ub2RlcztcclxuICAgICAgICBpZiAobm9kZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgJiYgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUuZ2V0Q2xhc3NOYW1lKCkgPT09IFwiVHJhbnNmb3JtTm9kZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZXMucHVzaChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGVGb3JTa2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtTm9kZXMucHVzaChub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtTm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0U2tlbGV0b25zKCk6IFNrZWxldG9uW10ge1xyXG4gICAgICAgIGNvbnN0IHNrZWxldG9uczogU2tlbGV0b25bXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBza2lucyA9IHRoaXMuX2dsdGYuc2tpbnM7XHJcbiAgICAgICAgaWYgKHNraW5zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2tpbiBvZiBza2lucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraW4uX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2VsZXRvbnMucHVzaChza2luLl9kYXRhLmJhYnlsb25Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBza2VsZXRvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0QW5pbWF0aW9uR3JvdXBzKCk6IEFuaW1hdGlvbkdyb3VwW10ge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwczogQW5pbWF0aW9uR3JvdXBbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gdGhpcy5fZ2x0Zi5hbmltYXRpb25zO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3Vwcy5wdXNoKGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkdyb3VwcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydEFuaW1hdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9wYXJlbnQuYW5pbWF0aW9uU3RhcnRNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5OT05FOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuRklSU1Q6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cHMgPSB0aGlzLl9nZXRBbmltYXRpb25Hcm91cHMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cHNbMF0uc3RhcnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEdMVEZMb2FkZXJBbmltYXRpb25TdGFydE1vZGUuQUxMOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzID0gdGhpcy5fZ2V0QW5pbWF0aW9uR3JvdXBzKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cCBvZiBiYWJ5bG9uQW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLnN0YXJ0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKGBJbnZhbGlkIGFuaW1hdGlvbiBzdGFydCBtb2RlICgke3RoaXMuX3BhcmVudC5hbmltYXRpb25TdGFydE1vZGV9KWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIG5vZGUuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbm9kZSBUaGUgZ2xURiBub2RlIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgQmFieWxvbiBtZXNoIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQgPSAoKSA9PiB7fSk6IFByb21pc2U8VHJhbnNmb3JtTm9kZT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZE5vZGVBc3luYyhjb250ZXh0LCBub2RlLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCByZWN1cnNpdmUgbm9kZSBoaWVyYXJjaHlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke25vZGUubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkTm9kZSA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBHTFRGTG9hZGVyLkFkZFBvaW50ZXJNZXRhZGF0YShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuX0xvYWRUcmFuc2Zvcm0obm9kZSwgYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUuY2FtZXJhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9jYW1lcmFgLCB0aGlzLl9nbHRmLmNhbWVyYXMsIG5vZGUuY2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2FtZXJhQXN5bmMoYC9jYW1lcmFzLyR7Y2FtZXJhLmluZGV4fWAsIGNhbWVyYSwgKGJhYnlsb25DYW1lcmEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5wYXJlbnQgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnNjYWxpbmcueCA9IC0xOyAvLyBDYW5jZWxsaW5nIHJvb3Qgbm9kZSBzY2FsaW5nIGZvciBoYW5kZWRuZXNzIHNvIHRoZSB2aWV3IG1hdHJpeCBkb2VzIG5vdCBlbmQgdXAgZmxpcHBlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9jaGlsZHJlbi8ke2luZGV4fWAsIHRoaXMuX2dsdGYubm9kZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWROb2RlQXN5bmMoYC9ub2Rlcy8ke2NoaWxkTm9kZS5pbmRleH1gLCBjaGlsZE5vZGUsIChjaGlsZEJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEJhYnlsb25NZXNoLnBhcmVudCA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzTWVzaCA9IG5vZGUubWVzaCAhPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGFzU2tpbiA9IHRoaXMuX3BhcmVudC5sb2FkU2tpbnMgJiYgbm9kZS5za2luICE9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNNZXNoIHx8IGhhc1NraW4pIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBub2RlLm5hbWUgfHwgYG5vZGUke25vZGUuaW5kZXh9YDtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1Ob2RlID0gbmV3IFRyYW5zZm9ybU5vZGUobm9kZU5hbWUsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybU5vZGUuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5tZXNoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgPSB0cmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGVGb3JTa2luID0gdHJhbnNmb3JtTm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2FkTm9kZSh0cmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNNZXNoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNTa2luKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NraW5zIChzZWNvbmQgaW1wbGVtZW50YXRpb24gbm90ZSlcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgY29kZSBwYXRoIHdpbGwgcGxhY2UgdGhlIHNraW5uZWQgbWVzaCBhcyBhIHNpYmxpbmcgb2YgdGhlIHNrZWxldG9uIHJvb3Qgbm9kZSB3aXRob3V0IGxvYWRpbmcgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm0sIHdoaWNoIGVmZmVjdGl2ZWx5IGlnbm9yZXMgdGhlIHRyYW5zZm9ybSBvZiB0aGUgc2tpbm5lZCBtZXNoLCBhcyBwZXIgc3BlYy5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9tZXNoYCwgdGhpcy5fZ2x0Zi5tZXNoZXMsIG5vZGUubWVzaCk7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNZXNoQXN5bmMoYC9tZXNoZXMvJHttZXNoLmluZGV4fWAsIG5vZGUsIG1lc2gsIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4gPSBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4hO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgdGhlIG1ldGFkYXRhIGZyb20gdGhlIHNraW4gbm9kZSB0byB0aGUgc2tpbm5lZCBtZXNoIGluIGNhc2UgYSBsb2FkZXIgZXh0ZW5zaW9uIGFkZGVkIG1ldGFkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5tZXRhZGF0YSA9IGRlZXBNZXJnZShiYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4ubWV0YWRhdGEsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLm1ldGFkYXRhIHx8IHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraW4gPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NraW5gLCB0aGlzLl9nbHRmLnNraW5zLCBub2RlLnNraW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZFNraW5Bc3luYyhgL3NraW5zLyR7c2tpbi5pbmRleH1gLCBub2RlLCBza2luLCAoYmFieWxvblNrZWxldG9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yRWFjaFByaW1pdGl2ZShub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2guc2tlbGV0b24gPSBiYWJ5bG9uU2tlbGV0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgdW50aWwgYWxsIHRoZSBub2RlcyBhcmUgcGFyZW50ZWQgYmVmb3JlIHBhcmVudGluZyB0aGUgc2tpbm5lZCBtZXNoLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RTY2VuZUxvYWRBY3Rpb25zLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbi5za2VsZXRvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYWNlIHRoZSBza2lubmVkIG1lc2ggbm9kZSBhcyBhIHNpYmxpbmcgb2YgdGhlIHNrZWxldG9uIHJvb3Qgbm9kZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiB0aGUgcGFyZW50IG9mIHRoZSBza2VsZXRvbiByb290IGlzIHRoZSBza2lubmVkIG1lc2guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gQXJyYXlJdGVtLkdldChgL3NraW5zLyR7c2tpbi5pbmRleH0vc2tlbGV0b25gLCB0aGlzLl9nbHRmLm5vZGVzLCBza2luLnNrZWxldG9uKS5wYXJlbnQhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaW5kZXggPT09IHBhcmVudE5vZGUuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wYXJlbnQgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZUZvclNraW4ucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wYXJlbnQgPSBwYXJlbnROb2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wYXJlbnQgPSB0aGlzLl9yb290QmFieWxvbk1lc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5vblNraW5Mb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IG5vZGU6IGJhYnlsb25UcmFuc2Zvcm1Ob2RlRm9yU2tpbiwgc2tpbm5lZE5vZGU6IGJhYnlsb25UcmFuc2Zvcm1Ob2RlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L21lc2hgLCB0aGlzLl9nbHRmLm1lc2hlcywgbm9kZS5tZXNoKTtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1lc2hBc3luYyhgL21lc2hlcy8ke21lc2guaW5kZXh9YCwgbm9kZSwgbWVzaCwgbG9hZE5vZGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoUHJpbWl0aXZlKG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNNZXNoID0gYmFieWxvbk1lc2ggYXMgTWVzaDtcclxuICAgICAgICAgICAgICAgIGlmICghYXNNZXNoLmlzQW5JbnN0YW5jZSAmJiBhc01lc2guZ2VvbWV0cnkgJiYgYXNNZXNoLmdlb21ldHJ5LnVzZUJvdW5kaW5nSW5mb0Zyb21HZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbXBseSBhcHBseSB0aGUgd29ybGQgbWF0cmljZXMgdG8gdGhlIGJvdW5kaW5nIGluZm8gLSB0aGUgZXh0ZW5kcyBhcmUgYWxyZWFkeSBva1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLl91cGRhdGVCb3VuZGluZ0luZm8oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gucmVmcmVzaEJvdW5kaW5nSW5mbyh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRNZXNoQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgbWVzaDogSU1lc2gsIGFzc2lnbjogKGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkKTogUHJvbWlzZTxUcmFuc2Zvcm1Ob2RlPiB7XHJcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlcyA9IG1lc2gucHJpbWl0aXZlcztcclxuICAgICAgICBpZiAoIXByaW1pdGl2ZXMgfHwgIXByaW1pdGl2ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogUHJpbWl0aXZlcyBhcmUgbWlzc2luZ2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaW1pdGl2ZXNbMF0uaW5kZXggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24ocHJpbWl0aXZlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH0gJHttZXNoLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG5vZGUubmFtZSB8fCBgbm9kZSR7bm9kZS5pbmRleH1gO1xyXG5cclxuICAgICAgICBpZiAocHJpbWl0aXZlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlID0gbWVzaC5wcmltaXRpdmVzWzBdO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyhgJHtjb250ZXh0fS9wcmltaXRpdmVzLyR7cHJpbWl0aXZlLmluZGV4fWAsIG5hbWUsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgKGJhYnlsb25NZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgPSBiYWJ5bG9uTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzID0gW2JhYnlsb25NZXNoXTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIXRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSA9IG5ldyBUcmFuc2Zvcm1Ob2RlKG5hbWUsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgICAgIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByaW1pdGl2ZSBvZiBwcmltaXRpdmVzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoYCR7Y29udGV4dH0vcHJpbWl0aXZlcy8ke3ByaW1pdGl2ZS5pbmRleH1gLCBgJHtuYW1lfV9wcmltaXRpdmUke3ByaW1pdGl2ZS5pbmRleH1gLCBub2RlLCBtZXNoLCBwcmltaXRpdmUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5wYXJlbnQgPSBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMhLnB1c2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3NpZ24obm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsIERlZmluZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBsb2FkaW5nIGRhdGEgZm9yIG1lc2ggcHJpbWl0aXZlcy5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBtZXNoIG5hbWUgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIG5vZGUgVGhlIGdsVEYgbm9kZSB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWVzaCBUaGUgZ2xURiBtZXNoIHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBwcmltaXRpdmUgVGhlIGdsVEYgbWVzaCBwcmltaXRpdmUgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBhc3NpZ24gQSBmdW5jdGlvbiBjYWxsZWQgc3luY2hyb25vdXNseSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXNcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBtZXNoIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGUgb3IgbnVsbCBpZiBub3QgaGFuZGxlZFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBub2RlOiBJTm9kZSxcclxuICAgICAgICBtZXNoOiBJTWVzaCxcclxuICAgICAgICBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLFxyXG4gICAgICAgIGFzc2lnbjogKGJhYnlsb25NZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWRcclxuICAgICk6IFByb21pc2U8QWJzdHJhY3RNZXNoPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkTWVzaFByaW1pdGl2ZUFzeW5jKGNvbnRleHQsIG5hbWUsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fWApO1xyXG5cclxuICAgICAgICBjb25zdCBzaG91bGRJbnN0YW5jZSA9IHRoaXMuX2Rpc2FibGVJbnN0YW5jZWRNZXNoID09PSAwICYmIHRoaXMuX3BhcmVudC5jcmVhdGVJbnN0YW5jZXMgJiYgbm9kZS5za2luID09IHVuZGVmaW5lZCAmJiAhbWVzaC5wcmltaXRpdmVzWzBdLnRhcmdldHM7XHJcblxyXG4gICAgICAgIGxldCBiYWJ5bG9uQWJzdHJhY3RNZXNoOiBBYnN0cmFjdE1lc2g7XHJcbiAgICAgICAgbGV0IHByb21pc2U6IFByb21pc2U8dW5rbm93bj47XHJcblxyXG4gICAgICAgIGlmIChzaG91bGRJbnN0YW5jZSAmJiBwcmltaXRpdmUuX2luc3RhbmNlRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGJhYnlsb25BYnN0cmFjdE1lc2ggPSBwcmltaXRpdmUuX2luc3RhbmNlRGF0YS5iYWJ5bG9uU291cmNlTWVzaC5jcmVhdGVJbnN0YW5jZShuYW1lKTtcclxuICAgICAgICAgICAgYmFieWxvbkFic3RyYWN0TWVzaC5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByb21pc2UgPSBwcmltaXRpdmUuX2luc3RhbmNlRGF0YS5wcm9taXNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gbmV3IE1lc2gobmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2guX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5zaWRlT3JpZW50YXRpb24gPSB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uIDogTWF0ZXJpYWwuQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlTW9ycGhUYXJnZXRzKGNvbnRleHQsIG5vZGUsIG1lc2gsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0LCBwcmltaXRpdmUsIGJhYnlsb25NZXNoKS50aGVuKGFzeW5jIChiYWJ5bG9uR2VvbWV0cnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fbG9hZE1vcnBoVGFyZ2V0c0FzeW5jKGNvbnRleHQsIHByaW1pdGl2ZSwgYmFieWxvbk1lc2gsIGJhYnlsb25HZW9tZXRyeSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5hcHBseVRvTWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25HZW9tZXRyeS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudC5za2lwTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uRHJhd01vZGUgPSBHTFRGTG9hZGVyLl9HZXREcmF3TW9kZShjb250ZXh0LCBwcmltaXRpdmUubW9kZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJpbWl0aXZlLm1hdGVyaWFsID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWJ5bG9uTWF0ZXJpYWwgPSB0aGlzLl9kZWZhdWx0QmFieWxvbk1hdGVyaWFsRGF0YVtiYWJ5bG9uRHJhd01vZGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFieWxvbk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbCA9IHRoaXMuX2NyZWF0ZURlZmF1bHRNYXRlcmlhbChcIl9fR0xURkxvYWRlci5fZGVmYXVsdFwiLCBiYWJ5bG9uRHJhd01vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRCYWJ5bG9uTWF0ZXJpYWxEYXRhW2JhYnlsb25EcmF3TW9kZV0gPSBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25NZXNoLm1hdGVyaWFsID0gYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vbWF0ZXJpYWxgLCB0aGlzLl9nbHRmLm1hdGVyaWFscywgcHJpbWl0aXZlLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTWF0ZXJpYWxBc3luYyhgL21hdGVyaWFscy8ke21hdGVyaWFsLmluZGV4fWAsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCAoYmFieWxvbk1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5tYXRlcmlhbCA9IGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZEluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuX2luc3RhbmNlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uU291cmNlTWVzaDogYmFieWxvbk1lc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25BYnN0cmFjdE1lc2ggPSBiYWJ5bG9uTWVzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25BYnN0cmFjdE1lc2gsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhiYWJ5bG9uQWJzdHJhY3RNZXNoKTtcclxuICAgICAgICBhc3NpZ24oYmFieWxvbkFic3RyYWN0TWVzaCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQWJzdHJhY3RNZXNoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBiYWJ5bG9uTWVzaDogTWVzaCk6IFByb21pc2U8R2VvbWV0cnk+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dCwgcHJpbWl0aXZlLCBiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogQXR0cmlidXRlcyBhcmUgbWlzc2luZ2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFieWxvbkdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KGJhYnlsb25NZXNoLm5hbWUsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcblxyXG4gICAgICAgIGlmIChwcmltaXRpdmUuaW5kaWNlcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2guaXNVbkluZGV4ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9pbmRpY2VzYCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIHByaW1pdGl2ZS5pbmRpY2VzKTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRJbmRpY2VzQWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2FjY2Vzc29yLmluZGV4fWAsIGFjY2Vzc29yKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5LnNldEluZGljZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbG9hZEF0dHJpYnV0ZSA9IChuYW1lOiBzdHJpbmcsIGtpbmQ6IHN0cmluZywgY2FsbGJhY2s/OiAoYWNjZXNzb3I6IElBY2Nlc3NvcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tuYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFieWxvbk1lc2guX2RlbGF5SW5mbyA9IGJhYnlsb25NZXNoLl9kZWxheUluZm8gfHwgW107XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvLmluZGV4T2Yoa2luZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5fZGVsYXlJbmZvLnB1c2goa2luZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9hdHRyaWJ1dGVzLyR7bmFtZX1gLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgYXR0cmlidXRlc1tuYW1lXSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVmVydGV4QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2FjY2Vzc29yLmluZGV4fWAsIGFjY2Vzc29yLCBraW5kKS50aGVuKChiYWJ5bG9uVmVydGV4QnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25WZXJ0ZXhCdWZmZXIuZ2V0S2luZCgpID09PSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kICYmICF0aGlzLnBhcmVudC5hbHdheXNDb21wdXRlQm91bmRpbmdCb3ggJiYgIWJhYnlsb25NZXNoLnNrZWxldG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Cb3VuZGluZ0luZm8gPSBMb2FkQm91bmRpbmdJbmZvRnJvbVBvc2l0aW9uQWNjZXNzb3IoYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbkJvdW5kaW5nSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5Ll9ib3VuZGluZ0luZm8gPSBiYWJ5bG9uQm91bmRpbmdJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5LnVzZUJvdW5kaW5nSW5mb0Zyb21HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFieWxvbkdlb21ldHJ5LnNldFZlcnRpY2VzQnVmZmVyKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGFjY2Vzc29yLmNvdW50KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2luZCA9PSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5udW1Cb25lSW5mbHVlbmNlcnMgPSA4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJQT1NJVElPTlwiLCBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiTk9STUFMXCIsIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEFOR0VOVFwiLCBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8wXCIsIFZlcnRleEJ1ZmZlci5VVktpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8xXCIsIFZlcnRleEJ1ZmZlci5VVjJLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfMlwiLCBWZXJ0ZXhCdWZmZXIuVVYzS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzNcIiwgVmVydGV4QnVmZmVyLlVWNEtpbmQpO1xyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF80XCIsIFZlcnRleEJ1ZmZlci5VVjVLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiVEVYQ09PUkRfNVwiLCBWZXJ0ZXhCdWZmZXIuVVY2S2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIkpPSU5UU18wXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiV0VJR0hUU18wXCIsIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiSk9JTlRTXzFcIiwgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZCk7XHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIldFSUdIVFNfMVwiLCBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kKTtcclxuICAgICAgICBsb2FkQXR0cmlidXRlKFwiQ09MT1JfMFwiLCBWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kLCAoYWNjZXNzb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjY2Vzc29yLnR5cGUgPT09IEFjY2Vzc29yVHlwZS5WRUM0KSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5oYXNWZXJ0ZXhBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25HZW9tZXRyeTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVNb3JwaFRhcmdldHMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgbWVzaDogSU1lc2gsIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsIGJhYnlsb25NZXNoOiBNZXNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFwcmltaXRpdmUudGFyZ2V0cyB8fCAhdGhpcy5fcGFyZW50LmxvYWRNb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuX251bU1vcnBoVGFyZ2V0cyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbm9kZS5fbnVtTW9ycGhUYXJnZXRzID0gcHJpbWl0aXZlLnRhcmdldHMubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpbWl0aXZlLnRhcmdldHMubGVuZ3RoICE9PSBub2RlLl9udW1Nb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBQcmltaXRpdmVzIGRvIG5vdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiB0YXJnZXRzYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXROYW1lcyA9IG1lc2guZXh0cmFzID8gbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMgOiBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyID0gbmV3IE1vcnBoVGFyZ2V0TWFuYWdlcih0aGlzLl9iYWJ5bG9uU2NlbmUpO1xyXG4gICAgICAgIGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlci5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgYmFieWxvbk1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyLmFyZVVwZGF0ZXNGcm96ZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJpbWl0aXZlLnRhcmdldHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IG5vZGUud2VpZ2h0cyA/IG5vZGUud2VpZ2h0c1tpbmRleF0gOiBtZXNoLndlaWdodHMgPyBtZXNoLndlaWdodHNbaW5kZXhdIDogMDtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldE5hbWVzID8gdGFyZ2V0TmFtZXNbaW5kZXhdIDogYG1vcnBoVGFyZ2V0JHtpbmRleH1gO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuYWRkVGFyZ2V0KG5ldyBNb3JwaFRhcmdldChuYW1lLCB3ZWlnaHQsIGJhYnlsb25NZXNoLmdldFNjZW5lKCkpKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogdGVsbCB0aGUgdGFyZ2V0IHdoZXRoZXIgaXQgaGFzIHBvc2l0aW9ucywgbm9ybWFscywgdGFuZ2VudHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZE1vcnBoVGFyZ2V0c0FzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSwgYmFieWxvbk1lc2g6IE1lc2gsIGJhYnlsb25HZW9tZXRyeTogR2VvbWV0cnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXByaW1pdGl2ZS50YXJnZXRzIHx8ICF0aGlzLl9wYXJlbnQubG9hZE1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIhO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uTW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkTW9ycGhUYXJnZXRWZXJ0ZXhEYXRhQXN5bmMoYCR7Y29udGV4dH0vdGFyZ2V0cy8ke2luZGV4fWAsIGJhYnlsb25HZW9tZXRyeSwgcHJpbWl0aXZlLnRhcmdldHNbaW5kZXhdLCBiYWJ5bG9uTW9ycGhUYXJnZXQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlci5hcmVVcGRhdGVzRnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfbG9hZE1vcnBoVGFyZ2V0VmVydGV4RGF0YUFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBiYWJ5bG9uR2VvbWV0cnk6IEdlb21ldHJ5LFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9LFxyXG4gICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldDogTW9ycGhUYXJnZXRcclxuICAgICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvYWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlOiBzdHJpbmcsIGtpbmQ6IHN0cmluZywgc2V0RGF0YTogKGJhYnlsb25WZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlciwgZGF0YTogRmxvYXQzMkFycmF5KSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25WZXJ0ZXhCdWZmZXIgPSBiYWJ5bG9uR2VvbWV0cnkuZ2V0VmVydGV4QnVmZmVyKGtpbmQpO1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25WZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9LyR7YXR0cmlidXRlfWAsIHRoaXMuX2dsdGYuYWNjZXNzb3JzLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEZsb2F0QWNjZXNzb3JBc3luYyhgL2FjY2Vzc29ycy8ke2FjY2Vzc29yLmluZGV4fWAsIGFjY2Vzc29yKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlBPU0lUSU9OXCIsIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uVmVydGV4QnVmZmVyLmZvckVhY2goZGF0YS5sZW5ndGgsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpbmRleF0gPSBkYXRhW2luZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXRQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIk5PUk1BTFwiLCBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCwgKGJhYnlsb25WZXJ0ZXhCdWZmZXIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uVmVydGV4QnVmZmVyLmZvckVhY2gobm9ybWFscy5sZW5ndGgsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbaW5kZXhdID0gZGF0YVtpbmRleF0gKyB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTW9ycGhUYXJnZXQuc2V0Tm9ybWFscyhub3JtYWxzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRBTkdFTlRcIiwgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kLCAoYmFieWxvblZlcnRleEJ1ZmZlciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YW5nZW50cyA9IG5ldyBGbG9hdDMyQXJyYXkoKGRhdGEubGVuZ3RoIC8gMykgKiA0KTtcclxuICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaCgoZGF0YS5sZW5ndGggLyAzKSAqIDQsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRhbmdlbnQgZGF0YSBmb3IgbW9ycGggdGFyZ2V0cyBpcyBzdG9yZWQgYXMgeHl6IGRlbHRhLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHZlcnRleERhdGEudGFuZ2VudCBpcyBzdG9yZWQgYXMgeHl6dy5cclxuICAgICAgICAgICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gc2tpcCBldmVyeSBmb3VydGggdmVydGV4RGF0YS50YW5nZW50LlxyXG4gICAgICAgICAgICAgICAgaWYgKChpbmRleCArIDEpICUgNCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRzW2RhdGFJbmRleF0gPSBkYXRhW2RhdGFJbmRleF0gKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXRUYW5nZW50cyh0YW5nZW50cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJURVhDT09SRF8wXCIsIFZlcnRleEJ1ZmZlci5VVktpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV2cyA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uVmVydGV4QnVmZmVyLmZvckVhY2goZGF0YS5sZW5ndGgsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHV2c1tpbmRleF0gPSBkYXRhW2luZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXRVVnModXZzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbG9hZEF0dHJpYnV0ZShcIlRFWENPT1JEXzFcIiwgVmVydGV4QnVmZmVyLlVWMktpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV2cyA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uVmVydGV4QnVmZmVyLmZvckVhY2goZGF0YS5sZW5ndGgsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHV2c1tpbmRleF0gPSBkYXRhW2luZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXRVVjJzKHV2cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvYWRBdHRyaWJ1dGUoXCJDT0xPUl8wXCIsIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQsIChiYWJ5bG9uVmVydGV4QnVmZmVyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvcnMgPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRTaXplID0gYmFieWxvblZlcnRleEJ1ZmZlci5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRTaXplID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KChkYXRhLmxlbmd0aCAvIDMpICogNCk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uVmVydGV4QnVmZmVyLmZvckVhY2goZGF0YS5sZW5ndGgsICh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhpZCA9IE1hdGguZmxvb3IoaW5kZXggLyAzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFubmVsID0gaW5kZXggJSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1s0ICogcGl4aWQgKyBjaGFubmVsXSA9IGRhdGFbMyAqIHBpeGlkICsgY2hhbm5lbF0gKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAvIDM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1s0ICogaSArIDNdID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRTaXplID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25WZXJ0ZXhCdWZmZXIuZm9yRWFjaChkYXRhLmxlbmd0aCwgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1tpbmRleF0gPSBkYXRhW2luZGV4XSArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgbnVtYmVyIG9mIGNvbXBvbmVudHMgKCR7Y29tcG9uZW50U2l6ZX0pIGZvciBDT0xPUl8wIGF0dHJpYnV0ZWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhYnlsb25Nb3JwaFRhcmdldC5zZXRDb2xvcnMoY29sb3JzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTG9hZFRyYW5zZm9ybShub2RlOiBJTm9kZSwgYmFieWxvbk5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmUgdGhlIFRSUyBvZiBza2lubmVkIG5vZGVzLlxyXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnMgKHNlY29uZCBpbXBsZW1lbnRhdGlvbiBub3RlKVxyXG4gICAgICAgIGlmIChub2RlLnNraW4gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICBsZXQgc2NhbGluZyA9IFZlY3RvcjMuT25lKCk7XHJcblxyXG4gICAgICAgIGlmIChub2RlLm1hdHJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguRnJvbUFycmF5KG5vZGUubWF0cml4KTtcclxuICAgICAgICAgICAgbWF0cml4LmRlY29tcG9zZShzY2FsaW5nLCByb3RhdGlvbiwgcG9zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLnRyYW5zbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG5vZGUudHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5KG5vZGUucm90YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChub2RlLnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBzY2FsaW5nID0gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhYnlsb25Ob2RlLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgYmFieWxvbk5vZGUucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb247XHJcbiAgICAgICAgYmFieWxvbk5vZGUuc2NhbGluZyA9IHNjYWxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZFNraW5Bc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBza2luOiBJU2tpbiwgYXNzaWduOiAoYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbikgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fcGFyZW50LmxvYWRTa2lucykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRTa2luQXN5bmMoY29udGV4dCwgbm9kZSwgc2tpbik7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2tpbi5fZGF0YSkge1xyXG4gICAgICAgICAgICBhc3NpZ24oc2tpbi5fZGF0YS5iYWJ5bG9uU2tlbGV0b24pO1xyXG4gICAgICAgICAgICByZXR1cm4gc2tpbi5fZGF0YS5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b25JZCA9IGBza2VsZXRvbiR7c2tpbi5pbmRleH1gO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uU2tlbGV0b24gPSBuZXcgU2tlbGV0b24oc2tpbi5uYW1lIHx8IHNrZWxldG9uSWQsIHNrZWxldG9uSWQsIHRoaXMuX2JhYnlsb25TY2VuZSk7XHJcbiAgICAgICAgYmFieWxvblNrZWxldG9uLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkQm9uZXMoY29udGV4dCwgc2tpbiwgYmFieWxvblNrZWxldG9uKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fbG9hZFNraW5JbnZlcnNlQmluZE1hdHJpY2VzRGF0YUFzeW5jKGNvbnRleHQsIHNraW4pLnRoZW4oKGludmVyc2VCaW5kTWF0cmljZXNEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUJvbmVNYXRyaWNlcyhiYWJ5bG9uU2tlbGV0b24sIGludmVyc2VCaW5kTWF0cmljZXNEYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2tpbi5fZGF0YSA9IHtcclxuICAgICAgICAgICAgYmFieWxvblNrZWxldG9uOiBiYWJ5bG9uU2tlbGV0b24sXHJcbiAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXNzaWduKGJhYnlsb25Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCb25lcyhjb250ZXh0OiBzdHJpbmcsIHNraW46IElTa2luLCBiYWJ5bG9uU2tlbGV0b246IFNrZWxldG9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHNraW4uc2tlbGV0b24gPT0gdW5kZWZpbmVkIHx8IHRoaXMuX3BhcmVudC5hbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCByb290Tm9kZSA9IHRoaXMuX2ZpbmRTa2VsZXRvblJvb3ROb2RlKGAke2NvbnRleHR9L2pvaW50c2AsIHNraW4uam9pbnRzKTtcclxuICAgICAgICAgICAgaWYgKHJvb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2tpbi5za2VsZXRvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbi5za2VsZXRvbiA9IHJvb3ROb2RlLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1BhcmVudCA9IChhOiBJTm9kZSwgYjogSU5vZGUpOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGIucGFyZW50OyBiID0gYi5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLnBhcmVudCA9PT0gYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tlbGV0b25Ob2RlID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9za2VsZXRvbmAsIHRoaXMuX2dsdGYubm9kZXMsIHNraW4uc2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbk5vZGUgIT09IHJvb3ROb2RlICYmICFpc1BhcmVudChza2VsZXRvbk5vZGUsIHJvb3ROb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fS9za2VsZXRvbjogT3ZlcnJpZGluZyB3aXRoIG5lYXJlc3QgY29tbW9uIGFuY2VzdG9yIGFzIHNrZWxldG9uIG5vZGUgaXMgbm90IGEgY29tbW9uIHJvb3RgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbi5za2VsZXRvbiA9IHJvb3ROb2RlLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBGYWlsZWQgdG8gZmluZCBjb21tb24gcm9vdGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBiYWJ5bG9uQm9uZXM6IHsgW2luZGV4OiBudW1iZXJdOiBCb25lIH0gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHNraW4uam9pbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2pvaW50cy8ke2luZGV4fWAsIHRoaXMuX2dsdGYubm9kZXMsIGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEJvbmUobm9kZSwgc2tpbiwgYmFieWxvblNrZWxldG9uLCBiYWJ5bG9uQm9uZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maW5kU2tlbGV0b25Sb290Tm9kZShjb250ZXh0OiBzdHJpbmcsIGpvaW50czogQXJyYXk8bnVtYmVyPik6IE51bGxhYmxlPElOb2RlPiB7XHJcbiAgICAgICAgaWYgKGpvaW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYXRoczogeyBbam9pbnQ6IG51bWJlcl06IEFycmF5PElOb2RlPiB9ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBqb2ludHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGF0aDogSU5vZGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vJHtpbmRleH1gLCB0aGlzLl9nbHRmLm5vZGVzLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aC51bnNoaWZ0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50ITtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoc1tpbmRleF0gPSBwYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvb3ROb2RlOiBOdWxsYWJsZTxJTm9kZT4gPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyA7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IHBhdGhzW2pvaW50c1swXV07XHJcbiAgICAgICAgICAgIGlmIChpID49IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBwYXRoW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGpvaW50cy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGhzW2pvaW50c1tqXV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBwYXRoLmxlbmd0aCB8fCBub2RlICE9PSBwYXRoW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByb290Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRCb25lKG5vZGU6IElOb2RlLCBza2luOiBJU2tpbiwgYmFieWxvblNrZWxldG9uOiBTa2VsZXRvbiwgYmFieWxvbkJvbmVzOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9KTogQm9uZSB7XHJcbiAgICAgICAgbm9kZS5faXNKb2ludCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBiYWJ5bG9uQm9uZSA9IGJhYnlsb25Cb25lc1tub2RlLmluZGV4XTtcclxuICAgICAgICBpZiAoYmFieWxvbkJvbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJhYnlsb25Cb25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmVudEJhYnlsb25Cb25lOiBOdWxsYWJsZTxCb25lPiA9IG51bGw7XHJcbiAgICAgICAgaWYgKG5vZGUuaW5kZXggIT09IHNraW4uc2tlbGV0b24pIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50ICYmIG5vZGUucGFyZW50LmluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50QmFieWxvbkJvbmUgPSB0aGlzLl9sb2FkQm9uZShub2RlLnBhcmVudCwgc2tpbiwgYmFieWxvblNrZWxldG9uLCBiYWJ5bG9uQm9uZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNraW4uc2tlbGV0b24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYC9za2lucy8ke3NraW4uaW5kZXh9L3NrZWxldG9uOiBTa2VsZXRvbiBub2RlIGlzIG5vdCBhIGNvbW1vbiByb290YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbmVJbmRleCA9IHNraW4uam9pbnRzLmluZGV4T2Yobm9kZS5pbmRleCk7XHJcbiAgICAgICAgYmFieWxvbkJvbmUgPSBuZXcgQm9uZShub2RlLm5hbWUgfHwgYGpvaW50JHtub2RlLmluZGV4fWAsIGJhYnlsb25Ta2VsZXRvbiwgcGFyZW50QmFieWxvbkJvbmUsIHRoaXMuX2dldE5vZGVNYXRyaXgobm9kZSksIG51bGwsIG51bGwsIGJvbmVJbmRleCk7XHJcbiAgICAgICAgYmFieWxvbkJvbmVzW25vZGUuaW5kZXhdID0gYmFieWxvbkJvbmU7XHJcblxyXG4gICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIHNjZW5lIGlzIGxvYWRlZCB0byBlbnN1cmUgdGhlIHRyYW5zZm9ybSBub2RlcyBhcmUgbG9hZGVkLlxyXG4gICAgICAgIHRoaXMuX3Bvc3RTY2VuZUxvYWRBY3Rpb25zLnB1c2goKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBMaW5rIHRoZSBCYWJ5bG9uIGJvbmUgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBCYWJ5bG9uIHRyYW5zZm9ybSBub2RlLlxyXG4gICAgICAgICAgICAvLyBBIGdsVEYgam9pbnQgaXMgYSBwb2ludGVyIHRvIGEgZ2xURiBub2RlIGluIHRoZSBnbFRGIG5vZGUgaGllcmFyY2h5IHNpbWlsYXIgdG8gVW5pdHkzRC5cclxuICAgICAgICAgICAgYmFieWxvbkJvbmUubGlua1RyYW5zZm9ybU5vZGUobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25Cb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRTa2luSW52ZXJzZUJpbmRNYXRyaWNlc0RhdGFBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNraW46IElTa2luKTogUHJvbWlzZTxOdWxsYWJsZTxGbG9hdDMyQXJyYXk+PiB7XHJcbiAgICAgICAgaWYgKHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9pbnZlcnNlQmluZE1hdHJpY2VzYCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHthY2Nlc3Nvci5pbmRleH1gLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQm9uZU1hdHJpY2VzKGJhYnlsb25Ta2VsZXRvbjogU2tlbGV0b24sIGludmVyc2VCaW5kTWF0cmljZXNEYXRhOiBOdWxsYWJsZTxGbG9hdDMyQXJyYXk+KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uQm9uZSBvZiBiYWJ5bG9uU2tlbGV0b24uYm9uZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZU1hdHJpeCA9IE1hdHJpeC5JZGVudGl0eSgpO1xyXG4gICAgICAgICAgICBjb25zdCBib25lSW5kZXggPSBiYWJ5bG9uQm9uZS5faW5kZXghO1xyXG4gICAgICAgICAgICBpZiAoaW52ZXJzZUJpbmRNYXRyaWNlc0RhdGEgJiYgYm9uZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgTWF0cml4LkZyb21BcnJheVRvUmVmKGludmVyc2VCaW5kTWF0cmljZXNEYXRhLCBib25lSW5kZXggKiAxNiwgYmFzZU1hdHJpeCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlTWF0cml4LmludmVydFRvUmVmKGJhc2VNYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uUGFyZW50Qm9uZSA9IGJhYnlsb25Cb25lLmdldFBhcmVudCgpO1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblBhcmVudEJvbmUpIHtcclxuICAgICAgICAgICAgICAgIGJhc2VNYXRyaXgubXVsdGlwbHlUb1JlZihiYWJ5bG9uUGFyZW50Qm9uZS5nZXRBYnNvbHV0ZUludmVyc2VCaW5kTWF0cml4KCksIGJhc2VNYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uQm9uZS51cGRhdGVNYXRyaXgoYmFzZU1hdHJpeCwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgYmFieWxvbkJvbmUuX3VwZGF0ZUFic29sdXRlQmluZE1hdHJpY2VzKHVuZGVmaW5lZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROb2RlTWF0cml4KG5vZGU6IElOb2RlKTogTWF0cml4IHtcclxuICAgICAgICByZXR1cm4gbm9kZS5tYXRyaXhcclxuICAgICAgICAgICAgPyBNYXRyaXguRnJvbUFycmF5KG5vZGUubWF0cml4KVxyXG4gICAgICAgICAgICA6IE1hdHJpeC5Db21wb3NlKFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID8gVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS5zY2FsZSkgOiBWZWN0b3IzLk9uZSgpLFxyXG4gICAgICAgICAgICAgICAgICBub2RlLnJvdGF0aW9uID8gUXVhdGVybmlvbi5Gcm9tQXJyYXkobm9kZS5yb3RhdGlvbikgOiBRdWF0ZXJuaW9uLklkZW50aXR5KCksXHJcbiAgICAgICAgICAgICAgICAgIG5vZGUudHJhbnNsYXRpb24gPyBWZWN0b3IzLkZyb21BcnJheShub2RlLnRyYW5zbGF0aW9uKSA6IFZlY3RvcjMuWmVybygpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBjYW1lcmEuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gY2FtZXJhIFRoZSBnbFRGIGNhbWVyYSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGFzc2lnbiBBIGZ1bmN0aW9uIGNhbGxlZCBzeW5jaHJvbm91c2x5IGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllc1xyXG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbG9hZGVkIEJhYnlsb24gY2FtZXJhIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRDYW1lcmFBc3luYyhjb250ZXh0OiBzdHJpbmcsIGNhbWVyYTogSUNhbWVyYSwgYXNzaWduOiAoYmFieWxvbkNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPENhbWVyYT4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZENhbWVyYUFzeW5jKGNvbnRleHQsIGNhbWVyYSwgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fSAke2NhbWVyYS5uYW1lIHx8IFwiXCJ9YCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uQ2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoY2FtZXJhLm5hbWUgfHwgYGNhbWVyYSR7Y2FtZXJhLmluZGV4fWAsIFZlY3RvcjMuWmVybygpLCB0aGlzLl9iYWJ5bG9uU2NlbmUsIGZhbHNlKTtcclxuICAgICAgICBiYWJ5bG9uQ2FtZXJhLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNhbWVyYS5fYmFieWxvbkNhbWVyYSA9IGJhYnlsb25DYW1lcmE7XHJcblxyXG4gICAgICAgIC8vIGdsVEYgY2FtZXJhcyBsb29rIHRvd2FyZHMgdGhlIGxvY2FsIC1aIGF4aXMuXHJcbiAgICAgICAgYmFieWxvbkNhbWVyYS5zZXRUYXJnZXQobmV3IFZlY3RvcjMoMCwgMCwgLTEpKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjYW1lcmEudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENhbWVyYVR5cGUuUEVSU1BFQ1RJVkU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNwZWN0aXZlID0gY2FtZXJhLnBlcnNwZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwZXJzcGVjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogQ2FtZXJhIHBlcnNwZWN0aXZlIHByb3BlcnRpZXMgYXJlIG1pc3NpbmdgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLmZvdiA9IHBlcnNwZWN0aXZlLnlmb3Y7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1pblogPSBwZXJzcGVjdGl2ZS56bmVhcjtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEubWF4WiA9IHBlcnNwZWN0aXZlLnpmYXIgfHwgMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUM6IHtcclxuICAgICAgICAgICAgICAgIGlmICghY2FtZXJhLm9ydGhvZ3JhcGhpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogQ2FtZXJhIG9ydGhvZ3JhcGhpYyBwcm9wZXJ0aWVzIGFyZSBtaXNzaW5nYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5tb2RlID0gQ2FtZXJhLk9SVEhPR1JBUEhJQ19DQU1FUkE7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvTGVmdCA9IC1jYW1lcmEub3J0aG9ncmFwaGljLnhtYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvUmlnaHQgPSBjYW1lcmEub3J0aG9ncmFwaGljLnhtYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm9ydGhvQm90dG9tID0gLWNhbWVyYS5vcnRob2dyYXBoaWMueW1hZztcclxuICAgICAgICAgICAgICAgIGJhYnlsb25DYW1lcmEub3J0aG9Ub3AgPSBjYW1lcmEub3J0aG9ncmFwaGljLnltYWc7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQ2FtZXJhLm1pblogPSBjYW1lcmEub3J0aG9ncmFwaGljLnpuZWFyO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkNhbWVyYS5tYXhaID0gY2FtZXJhLm9ydGhvZ3JhcGhpYy56ZmFyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBJbnZhbGlkIGNhbWVyYSB0eXBlICgke2NhbWVyYS50eXBlfSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbkNhbWVyYSwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Lm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoYmFieWxvbkNhbWVyYSk7XHJcbiAgICAgICAgYXNzaWduKGJhYnlsb25DYW1lcmEpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ0Nsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQ2FtZXJhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBbmltYXRpb25zQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihcIkxvYWQgYW5pbWF0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHRoaXMuX2dsdGYuYW5pbWF0aW9ucztcclxuICAgICAgICBpZiAoIWFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx2b2lkPj4oKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFuaW1hdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQW5pbWF0aW9uQXN5bmMoYC9hbmltYXRpb25zLyR7YW5pbWF0aW9uLmluZGV4fWAsIGFuaW1hdGlvbikudGhlbigoYW5pbWF0aW9uR3JvdXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZWxldGUgdGhlIGFuaW1hdGlvbiBncm91cCBpZiBpdCBlbmRlZCB1cCBub3QgaGF2aW5nIGFueSBhbmltYXRpb25zIGluIGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJMb2FkIGFuaW1hdGlvbnNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYW5pbWF0aW9uLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgZ2xURiBhbmltYXRpb24gcHJvcGVydHlcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBCYWJ5bG9uIGFuaW1hdGlvbiBncm91cCB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dDogc3RyaW5nLCBhbmltYXRpb246IElBbmltYXRpb24pOiBQcm9taXNlPEFuaW1hdGlvbkdyb3VwPiB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihcIkxvYWQgYW5pbWF0aW9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0LCBhbmltYXRpb24pO1xyXG4gICAgICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgIHJldHVybiBMYXp5QW5pbWF0aW9uR3JvdXBNb2R1bGVQcm9taXNlLnZhbHVlLnRoZW4oKHsgQW5pbWF0aW9uR3JvdXAgfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cCA9IG5ldyBBbmltYXRpb25Hcm91cChhbmltYXRpb24ubmFtZSB8fCBgYW5pbWF0aW9uJHthbmltYXRpb24uaW5kZXh9YCwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLl9wYXJlbnRDb250YWluZXIgPSB0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXAgPSBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbihhbmltYXRpb24uY2hhbm5lbHMpO1xyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKGFuaW1hdGlvbi5zYW1wbGVycyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoYW5uZWwgb2YgYW5pbWF0aW9uLmNoYW5uZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoYCR7Y29udGV4dH0vY2hhbm5lbHMvJHtjaGFubmVsLmluZGV4fWAsIGNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgKGJhYnlsb25UYXJnZXQsIGJhYnlsb25BbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblRhcmdldC5hbmltYXRpb25zID0gYmFieWxvblRhcmdldC5hbmltYXRpb25zIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVGFyZ2V0LmFuaW1hdGlvbnMucHVzaChiYWJ5bG9uQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLmFkZFRhcmdldGVkQW5pbWF0aW9uKGJhYnlsb25BbmltYXRpb24sIGJhYnlsb25UYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIkxvYWQgYW5pbWF0aW9uXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5ub3JtYWxpemUoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFieWxvbkFuaW1hdGlvbkdyb3VwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIExvYWRzIGEgZ2xURiBhbmltYXRpb24gY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25Db250ZXh0IFRoZSBjb250ZXh0IG9mIHRoZSBhbmltYXRpb24gd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgZ2xURiBhbmltYXRpb24gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBjaGFubmVsIFRoZSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gb25Mb2FkIENhbGxlZCBmb3IgZWFjaCBhbmltYXRpb24gbG9hZGVkXHJcbiAgICAgKiBAcmV0dXJucyBBIHZvaWQgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGNoYW5uZWw6IElBbmltYXRpb25DaGFubmVsLFxyXG4gICAgICAgIG9uTG9hZDogKGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZSwgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uQ29udGV4dCwgYW5pbWF0aW9uLCBjaGFubmVsLCBvbkxvYWQpO1xyXG4gICAgICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5uZWwudGFyZ2V0Lm5vZGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3RhcmdldC9ub2RlYCwgdGhpcy5fZ2x0Zi5ub2RlcywgY2hhbm5lbC50YXJnZXQubm9kZSk7XHJcbiAgICAgICAgY29uc3QgY2hhbm5lbFRhcmdldFBhdGggPSBjaGFubmVsLnRhcmdldC5wYXRoO1xyXG4gICAgICAgIGNvbnN0IHBhdGhJc1dlaWdodHMgPSBjaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguV0VJR0hUUztcclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGFuaW1hdGlvbnMgdGhhdCBoYXZlIG5vIGFuaW1hdGlvbiB0YXJnZXRzLlxyXG4gICAgICAgIGlmICgocGF0aElzV2VpZ2h0cyAmJiAhdGFyZ2V0Tm9kZS5fbnVtTW9ycGhUYXJnZXRzKSB8fCAoIXBhdGhJc1dlaWdodHMgJiYgIXRhcmdldE5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBsb2FkIG5vZGUgYW5pbWF0aW9ucyBpZiBkaXNhYmxlZC5cclxuICAgICAgICBpZiAoIXRoaXMuX3BhcmVudC5sb2FkTm9kZUFuaW1hdGlvbnMgJiYgIXBhdGhJc1dlaWdodHMgJiYgIXRhcmdldE5vZGUuX2lzSm9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYXN5bmMtbG9hZCB0aGUgYW5pbWF0aW9uIHNhbXBsZXIgdG8gcHJvdmlkZSB0aGUgaW50ZXJwb2xhdGlvbiBvZiB0aGUgY2hhbm5lbFRhcmdldFBhdGhcclxuICAgICAgICByZXR1cm4gTGF6eUxvYWRlckFuaW1hdGlvbk1vZHVsZVByb21pc2UudmFsdWUudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzOiBJSW50ZXJwb2xhdGlvblByb3BlcnR5SW5mb1tdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNoYW5uZWxUYXJnZXRQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IEdldE1hcHBpbmdGb3JLZXkoXCIvbm9kZXMve30vdHJhbnNsYXRpb25cIik/LmludGVycG9sYXRpb24hO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBHZXRNYXBwaW5nRm9yS2V5KFwiL25vZGVzL3t9L3JvdGF0aW9uXCIpPy5pbnRlcnBvbGF0aW9uITtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguU0NBTEU6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gR2V0TWFwcGluZ0ZvcktleShcIi9ub2Rlcy97fS9zY2FsZVwiKT8uaW50ZXJwb2xhdGlvbiE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gR2V0TWFwcGluZ0ZvcktleShcIi9ub2Rlcy97fS93ZWlnaHRzXCIpPy5pbnRlcnBvbGF0aW9uITtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH0vdGFyZ2V0L3BhdGg6IEludmFsaWQgdmFsdWUgKCR7Y2hhbm5lbC50YXJnZXQucGF0aH0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc3RheSBzYWZlXHJcbiAgICAgICAgICAgIGlmICghcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L3RhcmdldC9wYXRoOiBDb3VsZCBub3QgZmluZCBpbnRlcnBvbGF0aW9uIHByb3BlcnRpZXMgZm9yIHRhcmdldCBwYXRoICgke2NoYW5uZWwudGFyZ2V0LnBhdGh9KWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmZvOiBJT2JqZWN0SW5mbzxJSW50ZXJwb2xhdGlvblByb3BlcnR5SW5mb1tdPiA9IHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGFyZ2V0Tm9kZSxcclxuICAgICAgICAgICAgICAgIGluZm86IHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFuaW1hdGlvbkNoYW5uZWxGcm9tVGFyZ2V0SW5mb0FzeW5jKGNvbnRleHQsIGFuaW1hdGlvbkNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgdGFyZ2V0SW5mbywgb25Mb2FkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIExvYWRzIGEgZ2xURiBhbmltYXRpb24gY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25Db250ZXh0IFRoZSBjb250ZXh0IG9mIHRoZSBhbmltYXRpb24gd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgZ2xURiBhbmltYXRpb24gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBjaGFubmVsIFRoZSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0SW5mbyBUaGUgZ2xURiB0YXJnZXQgYW5kIHByb3BlcnRpZXNcclxuICAgICAqIEBwYXJhbSBvbkxvYWQgQ2FsbGVkIGZvciBlYWNoIGFuaW1hdGlvbiBsb2FkZWRcclxuICAgICAqIEByZXR1cm5zIEEgdm9pZCBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRBbmltYXRpb25DaGFubmVsRnJvbVRhcmdldEluZm9Bc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBjaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgICAgICB0YXJnZXRJbmZvOiBJT2JqZWN0SW5mbzxJSW50ZXJwb2xhdGlvblByb3BlcnR5SW5mb1tdPixcclxuICAgICAgICBvbkxvYWQ6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZFxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZnBzID0gdGhpcy5wYXJlbnQudGFyZ2V0RnBzO1xyXG4gICAgICAgIGNvbnN0IGludmZwcyA9IDEgLyBmcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXIgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L3NhbXBsZXJgLCBhbmltYXRpb24uc2FtcGxlcnMsIGNoYW5uZWwuc2FtcGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBbmltYXRpb25TYW1wbGVyQXN5bmMoYCR7YW5pbWF0aW9uQ29udGV4dH0vc2FtcGxlcnMvJHtjaGFubmVsLnNhbXBsZXJ9YCwgc2FtcGxlcikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtQW5pbWF0aW9ucyA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRJbmZvLm9iamVjdDtcclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlJbmZvcyA9IHRhcmdldEluZm8uaW5mbztcclxuICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgZnJvbSB0aGUgcmVhZCB2YWx1ZS5cclxuICAgICAgICAgICAgLy8gR0xURiB2YWx1ZXMgbWF5IGJlIGRpc3BhdGNoZWQgdG8gc2V2ZXJhbCBCYWJ5bG9uIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBiYXNlQ29sb3JGYWN0b3IgW2ByYCwgYGdgLCBgYmAsIGBhYF0gaXMgZGlzcGF0Y2hlZCB0b1xyXG4gICAgICAgICAgICAvLyAtIGFsYmVkb0NvbG9yIGFzIENvbG9yMyhgcmAsIGBnYCwgYGJgKVxyXG4gICAgICAgICAgICAvLyAtIGFscGhhIGFzIGBhYFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5SW5mbyBvZiBwcm9wZXJ0eUluZm9zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpZGUgPSBwcm9wZXJ0eUluZm8uZ2V0U3RyaWRlKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRhdGEuaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBkYXRhLm91dHB1dDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBuZXcgQXJyYXk8SUFuaW1hdGlvbktleT4oaW5wdXQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5pbnRlcnBvbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5TVEVQOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHlJbmZvLmdldFZhbHVlKHRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogaW5wdXRbaW5kZXhdICogZnBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluVGFuZ2VudCA9IHByb3BlcnR5SW5mby5nZXRWYWx1ZSh0YXJnZXQsIG91dHB1dCwgb3V0cHV0T2Zmc2V0LCBpbnZmcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHlJbmZvLmdldFZhbHVlKHRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dFRhbmdlbnQgPSBwcm9wZXJ0eUluZm8uZ2V0VmFsdWUodGFyZ2V0LCBvdXRwdXQsIG91dHB1dE9mZnNldCwgaW52ZnBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dE9mZnNldCArPSBzdHJpZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGlucHV0W2luZGV4XSAqIGZwcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IGluVGFuZ2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0VGFuZ2VudDogb3V0VGFuZ2VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydHlJbmZvLmdldFZhbHVlKHRhcmdldCwgb3V0cHV0LCBvdXRwdXRPZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0T2Zmc2V0ICs9IHN0cmlkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogaW5wdXRbaW5kZXhdICogZnBzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdXRwdXRPZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGAke2FuaW1hdGlvbi5uYW1lIHx8IGBhbmltYXRpb24ke2FuaW1hdGlvbi5pbmRleH1gfV9jaGFubmVsJHtjaGFubmVsLmluZGV4fV8ke251bUFuaW1hdGlvbnN9YDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9ucyA9IHByb3BlcnR5SW5mby5idWlsZEFuaW1hdGlvbnModGFyZ2V0LCBuYW1lLCBmcHMsIGtleXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbkFuaW1hdGlvbiBvZiBiYWJ5bG9uQW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1BbmltYXRpb25zKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZChiYWJ5bG9uQW5pbWF0aW9uLmJhYnlsb25BbmltYXRhYmxlLCBiYWJ5bG9uQW5pbWF0aW9uLmJhYnlsb25BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBbmltYXRpb25TYW1wbGVyQXN5bmMoY29udGV4dDogc3RyaW5nLCBzYW1wbGVyOiBJQW5pbWF0aW9uU2FtcGxlcik6IFByb21pc2U8X0lBbmltYXRpb25TYW1wbGVyRGF0YT4ge1xyXG4gICAgICAgIGlmIChzYW1wbGVyLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYW1wbGVyLl9kYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IHNhbXBsZXIuaW50ZXJwb2xhdGlvbiB8fCBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgc3dpdGNoIChpbnRlcnBvbGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uU1RFUDpcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI6XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkU6IHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS9pbnRlcnBvbGF0aW9uOiBJbnZhbGlkIHZhbHVlICgke3NhbXBsZXIuaW50ZXJwb2xhdGlvbn0pYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0QWNjZXNzb3IgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2lucHV0YCwgdGhpcy5fZ2x0Zi5hY2Nlc3NvcnMsIHNhbXBsZXIuaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG91dHB1dEFjY2Vzc29yID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9vdXRwdXRgLCB0aGlzLl9nbHRmLmFjY2Vzc29ycywgc2FtcGxlci5vdXRwdXQpO1xyXG4gICAgICAgIHNhbXBsZXIuX2RhdGEgPSBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoYC9hY2Nlc3NvcnMvJHtpbnB1dEFjY2Vzc29yLmluZGV4fWAsIGlucHV0QWNjZXNzb3IpLFxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGAvYWNjZXNzb3JzLyR7b3V0cHV0QWNjZXNzb3IuaW5kZXh9YCwgb3V0cHV0QWNjZXNzb3IpLFxyXG4gICAgICAgIF0pLnRoZW4oKFtpbnB1dERhdGEsIG91dHB1dERhdGFdKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXREYXRhLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgIG91dHB1dDogb3V0cHV0RGF0YSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXIuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgZ2xURiBidWZmZXIgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBieXRlT2Zmc2V0IFRoZSBieXRlIG9mZnNldCB0byB1c2VcclxuICAgICAqIEBwYXJhbSBieXRlTGVuZ3RoIFRoZSBieXRlIGxlbmd0aCB0byB1c2VcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBkYXRhIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRCdWZmZXJBc3luYyhjb250ZXh0OiBzdHJpbmcsIGJ1ZmZlcjogSUJ1ZmZlciwgYnl0ZU9mZnNldDogbnVtYmVyLCBieXRlTGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyVmlldz4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvblByb21pc2UgPSB0aGlzLl9leHRlbnNpb25zTG9hZEJ1ZmZlckFzeW5jKGNvbnRleHQsIGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJ1ZmZlci5fZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLl9kYXRhID0gdGhpcy5sb2FkVXJpQXN5bmMoYCR7Y29udGV4dH0vdXJpYCwgYnVmZmVyLCBidWZmZXIudXJpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fYmluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBVcmkgaXMgbWlzc2luZyBvciB0aGUgYmluYXJ5IGdsVEYgaXMgbWlzc2luZyBpdHMgYmluYXJ5IGNodW5rYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnVmZmVyLl9kYXRhID0gdGhpcy5fYmluLnJlYWRBc3luYygwLCBidWZmZXIuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBidWZmZXIuX2RhdGEudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBnbFRGIGJ1ZmZlciB2aWV3LlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXcgVGhlIGdsVEYgYnVmZmVyIHZpZXcgcHJvcGVydHlcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBkYXRhIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkQnVmZmVyVmlld0FzeW5jKGNvbnRleHQsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlclZpZXcuX2RhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXcuX2RhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidWZmZXIgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlcmAsIHRoaXMuX2dsdGYuYnVmZmVycywgYnVmZmVyVmlldy5idWZmZXIpO1xyXG4gICAgICAgIGJ1ZmZlclZpZXcuX2RhdGEgPSB0aGlzLmxvYWRCdWZmZXJBc3luYyhgL2J1ZmZlcnMvJHtidWZmZXIuaW5kZXh9YCwgYnVmZmVyLCBidWZmZXJWaWV3LmJ5dGVPZmZzZXQgfHwgMCwgYnVmZmVyVmlldy5ieXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclZpZXcuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEFjY2Vzc29yQXN5bmMoY29udGV4dDogc3RyaW5nLCBhY2Nlc3NvcjogSUFjY2Vzc29yLCBjb25zdHJ1Y3RvcjogVHlwZWRBcnJheUNvbnN0cnVjdG9yKTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBpZiAoYWNjZXNzb3IuX2RhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc29yLl9kYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbnVtQ29tcG9uZW50cyA9IEdMVEZMb2FkZXIuX0dldE51bUNvbXBvbmVudHMoY29udGV4dCwgYWNjZXNzb3IudHlwZSk7XHJcbiAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IG51bUNvbXBvbmVudHMgKiBWZXJ0ZXhCdWZmZXIuR2V0VHlwZUJ5dGVMZW5ndGgoYWNjZXNzb3IuY29tcG9uZW50VHlwZSk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbnVtQ29tcG9uZW50cyAqIGFjY2Vzc29yLmNvdW50O1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3IuYnVmZmVyVmlldyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSBQcm9taXNlLnJlc29sdmUobmV3IGNvbnN0cnVjdG9yKGxlbmd0aCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBhY2Nlc3Nvci5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgPT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCAmJiAhYWNjZXNzb3Iubm9ybWFsaXplZCAmJiAoIWJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSB8fCBidWZmZXJWaWV3LmJ5dGVTdHJpZGUgPT09IGJ5dGVTdHJpZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoY29udGV4dCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgZGF0YSwgYWNjZXNzb3IuYnl0ZU9mZnNldCwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZWRBcnJheSA9IG5ldyBjb25zdHJ1Y3RvcihsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleEJ1ZmZlci5Gb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5ieXRlT2Zmc2V0IHx8IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSB8fCBieXRlU3RyaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1Db21wb25lbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEFycmF5Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3Iubm9ybWFsaXplZCB8fCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWRBcnJheVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVkQXJyYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLnNwYXJzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzcGFyc2UgPSBhY2Nlc3Nvci5zcGFyc2U7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9kYXRhID0gYWNjZXNzb3IuX2RhdGEudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZWRBcnJheSA9IGRhdGEgYXMgVHlwZWRBcnJheTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGljZXNCdWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zcGFyc2UvaW5kaWNlcy9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgc3BhcnNlLmluZGljZXMuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXNCdWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zcGFyc2UvdmFsdWVzL2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBzcGFyc2UudmFsdWVzLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2luZGljZXNCdWZmZXJWaWV3LmluZGV4fWAsIGluZGljZXNCdWZmZXJWaWV3KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke3ZhbHVlc0J1ZmZlclZpZXcuaW5kZXh9YCwgdmFsdWVzQnVmZmVyVmlldyksXHJcbiAgICAgICAgICAgICAgICBdKS50aGVuKChbaW5kaWNlc0RhdGEsIHZhbHVlc0RhdGFdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbnRleHR9L3NwYXJzZS9pbmRpY2VzYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlc0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJzZS5pbmRpY2VzLmJ5dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXJzZS5jb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICkgYXMgSW5kaWNlc0FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFyc2VMZW5ndGggPSBudW1Db21wb25lbnRzICogc3BhcnNlLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXM6IFR5cGVkQXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvci5jb21wb25lbnRUeXBlID09PSBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQgJiYgIWFjY2Vzc29yLm5vcm1hbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheShgJHtjb250ZXh0fS9zcGFyc2UvdmFsdWVzYCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgdmFsdWVzRGF0YSwgc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0LCBzcGFyc2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYXJzZURhdGEgPSBHTFRGTG9hZGVyLl9HZXRUeXBlZEFycmF5KGAke2NvbnRleHR9L3NwYXJzZS92YWx1ZXNgLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCB2YWx1ZXNEYXRhLCBzcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQsIHNwYXJzZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IG5ldyBjb25zdHJ1Y3RvcihzcGFyc2VMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWZXJ0ZXhCdWZmZXIuRm9yRWFjaChzcGFyc2VEYXRhLCAwLCBieXRlU3RyaWRlLCBudW1Db21wb25lbnRzLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlLCB2YWx1ZXMubGVuZ3RoLCBhY2Nlc3Nvci5ub3JtYWxpemVkIHx8IGZhbHNlLCAodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlc0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRpY2VzSW5kZXggPSAwOyBpbmRpY2VzSW5kZXggPCBpbmRpY2VzLmxlbmd0aDsgaW5kaWNlc0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFJbmRleCA9IGluZGljZXNbaW5kaWNlc0luZGV4XSAqIG51bUNvbXBvbmVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudEluZGV4ID0gMDsgY29tcG9uZW50SW5kZXggPCBudW1Db21wb25lbnRzOyBjb21wb25lbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEFycmF5W2RhdGFJbmRleCsrXSA9IHZhbHVlc1t2YWx1ZXNJbmRleCsrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVkQXJyYXk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWNjZXNzb3IuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkRmxvYXRBY2Nlc3NvckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYWNjZXNzb3I6IElBY2Nlc3Nvcik6IFByb21pc2U8RmxvYXQzMkFycmF5PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBY2Nlc3NvckFzeW5jKGNvbnRleHQsIGFjY2Vzc29yLCBGbG9hdDMyQXJyYXkpIGFzIFByb21pc2U8RmxvYXQzMkFycmF5PjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRJbmRpY2VzQWNjZXNzb3JBc3luYyhjb250ZXh0OiBzdHJpbmcsIGFjY2Vzc29yOiBJQWNjZXNzb3IpOiBQcm9taXNlPEluZGljZXNBcnJheT4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3Nvci50eXBlICE9PSBBY2Nlc3NvclR5cGUuU0NBTEFSKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS90eXBlOiBJbnZhbGlkIHZhbHVlICR7YWNjZXNzb3IudHlwZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSAhPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0JZVEUgJiZcclxuICAgICAgICAgICAgYWNjZXNzb3IuY29tcG9uZW50VHlwZSAhPT0gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX1NIT1JUICYmXHJcbiAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgIT09IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9JTlRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L2NvbXBvbmVudFR5cGU6IEludmFsaWQgdmFsdWUgJHthY2Nlc3Nvci5jb21wb25lbnRUeXBlfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3Nvci5fZGF0YSBhcyBQcm9taXNlPEluZGljZXNBcnJheT47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYWNjZXNzb3Iuc3BhcnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGAke2NvbnRleHR9L2NvbXBvbmVudFR5cGVgLCBhY2Nlc3Nvci5jb21wb25lbnRUeXBlKTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSB0aGlzLl9sb2FkQWNjZXNzb3JBc3luYyhjb250ZXh0LCBhY2Nlc3NvciwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9nbHRmLmJ1ZmZlclZpZXdzLCBhY2Nlc3Nvci5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2RhdGEgPSB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuX0dldFR5cGVkQXJyYXkoY29udGV4dCwgYWNjZXNzb3IuY29tcG9uZW50VHlwZSwgZGF0YSwgYWNjZXNzb3IuYnl0ZU9mZnNldCwgYWNjZXNzb3IuY291bnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3Nvci5fZGF0YSBhcyBQcm9taXNlPEluZGljZXNBcnJheT47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkVmVydGV4QnVmZmVyVmlld0FzeW5jKGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogUHJvbWlzZTxCdWZmZXI+IHtcclxuICAgICAgICBpZiAoYnVmZmVyVmlldy5fYmFieWxvbkJ1ZmZlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyVmlldy5fYmFieWxvbkJ1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICBidWZmZXJWaWV3Ll9iYWJ5bG9uQnVmZmVyID0gdGhpcy5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWZmZXIoZW5naW5lLCBkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBidWZmZXJWaWV3Ll9iYWJ5bG9uQnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9hZFZlcnRleEFjY2Vzc29yQXN5bmMoY29udGV4dDogc3RyaW5nLCBhY2Nlc3NvcjogSUFjY2Vzc29yLCBraW5kOiBzdHJpbmcpOiBQcm9taXNlPFZlcnRleEJ1ZmZlcj4ge1xyXG4gICAgICAgIGlmIChhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcj8uW2tpbmRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgYWNjZXNzb3IuX2JhYnlsb25WZXJ0ZXhCdWZmZXIgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29yLnNwYXJzZSB8fCBhY2Nlc3Nvci5idWZmZXJWaWV3ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXSA9IHRoaXMuX2xvYWRGbG9hdEFjY2Vzc29yQXN5bmMoY29udGV4dCwgYWNjZXNzb3IpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVydGV4QnVmZmVyKGVuZ2luZSwgZGF0YSwga2luZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9idWZmZXJWaWV3YCwgdGhpcy5fZ2x0Zi5idWZmZXJWaWV3cywgYWNjZXNzb3IuYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29yLl9iYWJ5bG9uVmVydGV4QnVmZmVyW2tpbmRdID0gdGhpcy5fbG9hZFZlcnRleEJ1ZmZlclZpZXdBc3luYyhidWZmZXJWaWV3KS50aGVuKChiYWJ5bG9uQnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1Db21wb25lbnRzID0gR0xURkxvYWRlci5fR2V0TnVtQ29tcG9uZW50cyhjb250ZXh0LCBhY2Nlc3Nvci50eXBlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVydGV4QnVmZmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZSxcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGtpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuYnl0ZVN0cmlkZSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3IuYnl0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICBudW1Db21wb25lbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3Iubm9ybWFsaXplZCxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3Nvci5fYmFieWxvblZlcnRleEJ1ZmZlcltraW5kXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkTWF0ZXJpYWxNZXRhbGxpY1JvdWdobmVzc1Byb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnRpZXM6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5fZ2V0T3JDcmVhdGVNYXRlcmlhbEFkYXB0ZXIoYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgLy8gU2V0IGJhc2UgY29sb3IgYW5kIGFscGhhIHVzaW5nIGFkYXB0ZXJcclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuYmFzZUNvbG9yRmFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLmJhc2VDb2xvciA9IENvbG9yMy5Gcm9tQXJyYXkocHJvcGVydGllcy5iYXNlQ29sb3JGYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYWRhcHRlci5nZW9tZXRyeU9wYWNpdHkgPSBwcm9wZXJ0aWVzLmJhc2VDb2xvckZhY3RvclszXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIuYmFzZUNvbG9yID0gQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBtZXRhbGxpYyBhbmQgcm91Z2huZXNzIHVzaW5nIGFkYXB0ZXJcclxuICAgICAgICAgICAgYWRhcHRlci5iYXNlTWV0YWxuZXNzID0gcHJvcGVydGllcy5tZXRhbGxpY0ZhY3RvciA9PSB1bmRlZmluZWQgPyAxIDogcHJvcGVydGllcy5tZXRhbGxpY0ZhY3RvcjtcclxuICAgICAgICAgICAgYWRhcHRlci5zcGVjdWxhclJvdWdobmVzcyA9IHByb3BlcnRpZXMucm91Z2huZXNzRmFjdG9yID09IHVuZGVmaW5lZCA/IDEgOiBwcm9wZXJ0aWVzLnJvdWdobmVzc0ZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9iYXNlQ29sb3JUZXh0dXJlYCwgcHJvcGVydGllcy5iYXNlQ29sb3JUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKEJhc2UgQ29sb3IpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRlci5iYXNlQ29sb3JUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlSW5mb0FzeW5jKGAke2NvbnRleHR9L21ldGFsbGljUm91Z2huZXNzVGV4dHVyZWAsIHByb3BlcnRpZXMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlLCAodGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKE1ldGFsbGljIFJvdWdobmVzcylgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmJhc2VNZXRhbG5lc3NUZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRlci5zcGVjdWxhclJvdWdobmVzc1RleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENvbmZpZ3VyZSB0ZXh0dXJlIGNoYW5uZWwgdXNhZ2UgdXNpbmcgYWRhcHRlclxyXG4gICAgICAgICAgICAgICAgYWRhcHRlci51c2VSb3VnaG5lc3NGcm9tTWV0YWxsaWNUZXh0dXJlR3JlZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYWRhcHRlci51c2VNZXRhbGxpY0Zyb21NZXRhbGxpY1RleHR1cmVCbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBtYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGJhYnlsb25NZXNoOiBOdWxsYWJsZTxNZXNoPixcclxuICAgICAgICBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcixcclxuICAgICAgICBhc3NpZ246IChiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkID0gKCkgPT4ge31cclxuICAgICk6IFByb21pc2U8TWF0ZXJpYWw+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCBhc3NpZ24pO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25Qcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25Qcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0ZXJpYWwuX2RhdGEgPSBtYXRlcmlhbC5fZGF0YSB8fCB7fTtcclxuICAgICAgICBsZXQgYmFieWxvbkRhdGEgPSBtYXRlcmlhbC5fZGF0YVtiYWJ5bG9uRHJhd01vZGVdO1xyXG4gICAgICAgIGlmICghYmFieWxvbkRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dPcGVuKGAke2NvbnRleHR9ICR7bWF0ZXJpYWwubmFtZSB8fCBcIlwifWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gdGhpcy5jcmVhdGVNYXRlcmlhbChjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGJhYnlsb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsOiBiYWJ5bG9uTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHByb21pc2U6IHRoaXMubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbWF0ZXJpYWwuX2RhdGFbYmFieWxvbkRyYXdNb2RlXSA9IGJhYnlsb25EYXRhO1xyXG5cclxuICAgICAgICAgICAgR0xURkxvYWRlci5BZGRQb2ludGVyTWV0YWRhdGEoYmFieWxvbk1hdGVyaWFsLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhiYWJ5bG9uTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25NZXNoKSB7XHJcbiAgICAgICAgICAgIGJhYnlsb25EYXRhLmJhYnlsb25NZXNoZXMucHVzaChiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaC5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWVzaGVzLmluZGV4T2YoYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25EYXRhLmJhYnlsb25NZXNoZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3NpZ24oYmFieWxvbkRhdGEuYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25EYXRhLnByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uRGF0YS5iYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRGVmYXVsdE1hdGVyaWFsKG5hbWU6IHN0cmluZywgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wYnJNYXRlcmlhbEltcGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUEJSIE1hdGVyaWFsIGNsYXNzIG5vdCBsb2FkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISF0aGlzLl9hc3NldENvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSBuZXcgdGhpcy5fcGJyTWF0ZXJpYWxJbXBsLm1hdGVyaWFsQ2xhc3MobmFtZSwgdGhpcy5fYmFieWxvblNjZW5lKTtcclxuICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuX3BhcmVudENvbnRhaW5lciA9IHRoaXMuX2Fzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgYmFieWxvbk1hdGVyaWFsLmZpbGxNb2RlID0gYmFieWxvbkRyYXdNb2RlO1xyXG4gICAgICAgIGJhYnlsb25NYXRlcmlhbC50cmFuc3BhcmVuY3lNb2RlID0gdGhpcy5fcGJyTWF0ZXJpYWxJbXBsLm1hdGVyaWFsQ2xhc3MuTUFURVJJQUxfT1BBUVVFO1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbWF0ZXJpYWwgYWRhcHRlciBhbmQgc2V0IHNvbWUgZGVmYXVsdCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHByb21pc2UgdG8gcmVzb2x2ZSBoZXJlLlxyXG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9nZXRPckNyZWF0ZU1hdGVyaWFsQWRhcHRlcihiYWJ5bG9uTWF0ZXJpYWwpO1xyXG4gICAgICAgIGFkYXB0ZXIudHJhbnNwYXJlbmN5QXNBbHBoYUNvdmVyYWdlID0gdGhpcy5fcGFyZW50LnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2U7XHJcblxyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IG1ldGFsbGljIGFuZCByb3VnaG5lc3MgdmFsdWVzXHJcbiAgICAgICAgYWRhcHRlci5iYXNlTWV0YWxuZXNzID0gMS4wO1xyXG4gICAgICAgIGFkYXB0ZXIuc3BlY3VsYXJSb3VnaG5lc3MgPSAxLjA7XHJcblxyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgQmFieWxvbiBtYXRlcmlhbCBmcm9tIGEgZ2xURiBtYXRlcmlhbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBUaGUgZ2xURiBtYXRlcmlhbCBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25EcmF3TW9kZSBUaGUgZHJhdyBtb2RlIGZvciB0aGUgQmFieWxvbiBtYXRlcmlhbFxyXG4gICAgICogQHJldHVybnMgVGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZU1hdGVyaWFsKGNvbnRleHQ6IHN0cmluZywgbWF0ZXJpYWw6IElNYXRlcmlhbCwgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uTWF0ZXJpYWwgPSB0aGlzLl9leHRlbnNpb25zQ3JlYXRlTWF0ZXJpYWwoY29udGV4dCwgbWF0ZXJpYWwsIGJhYnlsb25EcmF3TW9kZSk7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleHRlbnNpb25NYXRlcmlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBtYXRlcmlhbC5uYW1lIHx8IGBtYXRlcmlhbCR7bWF0ZXJpYWwuaW5kZXh9YDtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSB0aGlzLl9jcmVhdGVEZWZhdWx0TWF0ZXJpYWwobmFtZSwgYmFieWxvbkRyYXdNb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25NYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHByb3BlcnRpZXMgZnJvbSBhIGdsVEYgbWF0ZXJpYWwgaW50byBhIEJhYnlsb24gbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgVGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkTWF0ZXJpYWxCYXNlUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZE1hdGVyaWFsTWV0YWxsaWNSb3VnaG5lc3NQcm9wZXJ0aWVzQXN5bmMoYCR7Y29udGV4dH0vcGJyTWV0YWxsaWNSb3VnaG5lc3NgLCBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcywgYmFieWxvbk1hdGVyaWFsKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRNYXRlcmlhbEFscGhhUHJvcGVydGllcyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBub3JtYWwsIG9jY2x1c2lvbiwgYW5kIGVtaXNzaXZlIHByb3BlcnRpZXMgZnJvbSBhIGdsVEYgbWF0ZXJpYWwgaW50byBhIEJhYnlsb24gbWF0ZXJpYWwuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgVGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbEJhc2VQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5fZ2V0T3JDcmVhdGVNYXRlcmlhbEFkYXB0ZXIoYmFieWxvbk1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGVtaXNzaW9uIGNvbG9yIHVzaW5nIGFkYXB0ZXJcclxuICAgICAgICBhZGFwdGVyLmVtaXNzaW9uQ29sb3IgPSBtYXRlcmlhbC5lbWlzc2l2ZUZhY3RvciA/IENvbG9yMy5Gcm9tQXJyYXkobWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IpIDogbmV3IENvbG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGRvdWJsZS1zaWRlZCBwcm9wZXJ0aWVzIHVzaW5nIGFkYXB0ZXJcclxuICAgICAgICBpZiAobWF0ZXJpYWwuZG91YmxlU2lkZWQpIHtcclxuICAgICAgICAgICAgYWRhcHRlci5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgYWRhcHRlci50d29TaWRlZExpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbC5ub3JtYWxUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUubm9uQ29sb3JEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmVJbmZvQXN5bmMoYCR7Y29udGV4dH0vbm9ybWFsVGV4dHVyZWAsIG1hdGVyaWFsLm5vcm1hbFRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChOb3JtYWwpYDtcclxuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmdlb21ldHJ5Tm9ybWFsVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsLm5vcm1hbFRleHR1cmU/LnNjYWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmxldmVsID0gbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IG5vcm1hbCBtYXAgaW52ZXJzaW9ucyB1c2luZyBhZGFwdGVyXHJcbiAgICAgICAgICAgIGFkYXB0ZXIuc2V0Tm9ybWFsTWFwSW52ZXJzaW9ucyghdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtLCB0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFvVGV4dHVyZTogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgbGV0IGFvU3RyZW5ndGg6IG51bWJlciA9IDEuMDtcclxuICAgICAgICBsZXQgZW1pc3Npb25UZXh0dXJlOiBCYXNlVGV4dHVyZTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZS5ub25Db2xvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9vY2NsdXNpb25UZXh0dXJlYCwgbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZSwgKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLm5hbWUgPSBgJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0gKE9jY2x1c2lvbilgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFvVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhb1N0cmVuZ3RoID0gbWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZUluZm9Bc3luYyhgJHtjb250ZXh0fS9lbWlzc2l2ZVRleHR1cmVgLCBtYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmUsICh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5uYW1lID0gYCR7YmFieWxvbk1hdGVyaWFsLm5hbWV9IChFbWlzc2l2ZSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXNzaW9uVGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gU2V0IGFtYmllbnQgb2NjbHVzaW9uIGFuZCBlbWlzc2l2ZSB0ZXh0dXJlcyB1c2luZyBhZGFwdGVyXHJcbiAgICAgICAgICAgIGlmIChhb1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIGFkYXB0ZXIuYW1iaWVudE9jY2x1c2lvblRleHR1cmUgPSBhb1RleHR1cmU7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLmFtYmllbnRPY2NsdXNpb25UZXh0dXJlU3RyZW5ndGggPSBhb1N0cmVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZW1pc3Npb25UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGFwdGVyLmVtaXNzaW9uQ29sb3JUZXh0dXJlID0gZW1pc3Npb25UZXh0dXJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgYWxwaGEgcHJvcGVydGllcyBmcm9tIGEgZ2xURiBtYXRlcmlhbCBpbnRvIGEgQmFieWxvbiBtYXRlcmlhbC5cclxuICAgICAqIE11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBzZXR0aW5nIHRoZSBhbGJlZG8gdGV4dHVyZSBvZiB0aGUgQmFieWxvbiBtYXRlcmlhbCB3aGVuIHRoZSBtYXRlcmlhbCBoYXMgYW4gYWxiZWRvIHRleHR1cmUuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWwgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgVGhlIEJhYnlsb24gbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbEFscGhhUHJvcGVydGllcyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Bick1hdGVyaWFsSW1wbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IE1hdGVyaWFsIHR5cGUgbm90IHN1cHBvcnRlZGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuX2dldE9yQ3JlYXRlTWF0ZXJpYWxBZGFwdGVyKGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICAgICAgY29uc3QgYmFzZUNvbG9yVGV4dHVyZSA9IGFkYXB0ZXIuYmFzZUNvbG9yVGV4dHVyZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxwaGFNb2RlID0gbWF0ZXJpYWwuYWxwaGFNb2RlIHx8IE1hdGVyaWFsQWxwaGFNb2RlLk9QQVFVRTtcclxuICAgICAgICBzd2l0Y2ggKGFscGhhTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsQWxwaGFNb2RlLk9QQVFVRToge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1hdGVyaWFsLnRyYW5zcGFyZW5jeU1vZGUgPSB0aGlzLl9wYnJNYXRlcmlhbEltcGwubWF0ZXJpYWxDbGFzcy5NQVRFUklBTF9PUEFRVUU7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGEgPSAxLjA7IC8vIEZvcmNlIGFscGhhIHRvIDEuMCBmb3Igb3BhcXVlIG1vZGUuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIE1hdGVyaWFsQWxwaGFNb2RlLk1BU0s6IHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50cmFuc3BhcmVuY3lNb2RlID0gdGhpcy5fcGJyTWF0ZXJpYWxJbXBsLm1hdGVyaWFsQ2xhc3MuTUFURVJJQUxfQUxQSEFURVNUO1xyXG4gICAgICAgICAgICAgICAgYWRhcHRlci5hbHBoYUN1dE9mZiA9IG1hdGVyaWFsLmFscGhhQ3V0b2ZmID09IHVuZGVmaW5lZCA/IDAuNSA6IG1hdGVyaWFsLmFscGhhQ3V0b2ZmO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JUZXh0dXJlLmhhc0FscGhhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTWF0ZXJpYWxBbHBoYU1vZGUuQkxFTkQ6IHtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25NYXRlcmlhbC50cmFuc3BhcmVuY3lNb2RlID0gdGhpcy5fcGJyTWF0ZXJpYWxJbXBsLm1hdGVyaWFsQ2xhc3MuTUFURVJJQUxfQUxQSEFCTEVORDtcclxuICAgICAgICAgICAgICAgIGlmIChiYXNlQ29sb3JUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yVGV4dHVyZS5oYXNBbHBoYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRlci51c2VBbHBoYUZyb21CYXNlQ29sb3JUZXh0dXJlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fS9hbHBoYU1vZGU6IEludmFsaWQgdmFsdWUgKCR7bWF0ZXJpYWwuYWxwaGFNb2RlfSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiB0ZXh0dXJlIGluZm8uXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZUluZm8gVGhlIGdsVEYgdGV4dHVyZSBpbmZvIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gYXNzaWduIEEgZnVuY3Rpb24gY2FsbGVkIHN5bmNocm9ub3VzbHkgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBsb2FkZWQgQmFieWxvbiB0ZXh0dXJlIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRUZXh0dXJlSW5mb0FzeW5jKGNvbnRleHQ6IHN0cmluZywgdGV4dHVyZUluZm86IElUZXh0dXJlSW5mbywgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0LCB0ZXh0dXJlSW5mbywgYXNzaWduKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9nT3BlbihgJHtjb250ZXh0fWApO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZUluZm8udGV4Q29vcmQhID49IDYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9L3RleENvb3JkOiBJbnZhbGlkIHZhbHVlICgke3RleHR1cmVJbmZvLnRleENvb3JkfSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2luZGV4YCwgdGhpcy5fZ2x0Zi50ZXh0dXJlcywgdGV4dHVyZUluZm8uaW5kZXgpO1xyXG4gICAgICAgIHRleHR1cmUuX3RleHR1cmVJbmZvID0gdGV4dHVyZUluZm87XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLl9sb2FkVGV4dHVyZUFzeW5jKGAvdGV4dHVyZXMvJHt0ZXh0dXJlSW5mby5pbmRleH1gLCB0ZXh0dXJlLCAoYmFieWxvblRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmUuY29vcmRpbmF0ZXNJbmRleCA9IHRleHR1cmVJbmZvLnRleENvb3JkIHx8IDA7XHJcbiAgICAgICAgICAgIEdMVEZMb2FkZXIuQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25UZXh0dXJlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgYXNzaWduKGJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dDbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRUZXh0dXJlQXN5bmMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlOiBJVGV4dHVyZSwgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkID0gKCkgPT4ge30pOiBQcm9taXNlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uUHJvbWlzZSA9IHRoaXMuX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUFzeW5jKGNvbnRleHQsIHRleHR1cmUsIGFzc2lnbik7XHJcbiAgICAgICAgaWYgKGV4dGVuc2lvblByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvblByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH0gJHt0ZXh0dXJlLm5hbWUgfHwgXCJcIn1gKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlciA9IHRleHR1cmUuc2FtcGxlciA9PSB1bmRlZmluZWQgPyBHTFRGTG9hZGVyLkRlZmF1bHRTYW1wbGVyIDogQXJyYXlJdGVtLkdldChgJHtjb250ZXh0fS9zYW1wbGVyYCwgdGhpcy5fZ2x0Zi5zYW1wbGVycywgdGV4dHVyZS5zYW1wbGVyKTtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vc291cmNlYCwgdGhpcy5fZ2x0Zi5pbWFnZXMsIHRleHR1cmUuc291cmNlKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5fY3JlYXRlVGV4dHVyZUFzeW5jKGNvbnRleHQsIHNhbXBsZXIsIGltYWdlLCBhc3NpZ24sIHVuZGVmaW5lZCwgIXRleHR1cmUuX3RleHR1cmVJbmZvLm5vbkNvbG9yRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9jcmVhdGVUZXh0dXJlQXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHNhbXBsZXI6IElTYW1wbGVyLFxyXG4gICAgICAgIGltYWdlOiBJSW1hZ2UsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlKSA9PiB2b2lkID0gKCkgPT4ge30sXHJcbiAgICAgICAgdGV4dHVyZUxvYWRlck9wdGlvbnM/OiB1bmtub3duLFxyXG4gICAgICAgIHVzZVNSR0JCdWZmZXI/OiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPEJhc2VUZXh0dXJlPiB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlckRhdGEgPSB0aGlzLl9sb2FkU2FtcGxlcihgL3NhbXBsZXJzLyR7c2FtcGxlci5pbmRleH1gLCBzYW1wbGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx1bmtub3duPj4oKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQ8dm9pZD4oKTtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uU2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUNyZWF0aW9uT3B0aW9uczogSVRleHR1cmVDcmVhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG5vTWlwbWFwOiBzYW1wbGVyRGF0YS5ub01pcE1hcHMsXHJcbiAgICAgICAgICAgIGludmVydFk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzYW1wbGluZ01vZGU6IHNhbXBsZXJEYXRhLnNhbXBsaW5nTW9kZSxcclxuICAgICAgICAgICAgb25Mb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yOiAobWVzc2FnZT86IHN0cmluZywgZXhjZXB0aW9uPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihgJHtjb250ZXh0fTogJHtleGNlcHRpb24gJiYgZXhjZXB0aW9uLm1lc3NhZ2UgPyBleGNlcHRpb24ubWVzc2FnZSA6IG1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gbG9hZCB0ZXh0dXJlXCJ9YCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtaW1lVHlwZTogaW1hZ2UubWltZVR5cGUgPz8gR2V0TWltZVR5cGUoaW1hZ2UudXJpID8/IFwiXCIpLFxyXG4gICAgICAgICAgICBsb2FkZXJPcHRpb25zOiB0ZXh0dXJlTG9hZGVyT3B0aW9ucyxcclxuICAgICAgICAgICAgdXNlU1JHQkJ1ZmZlcjogISF1c2VTUkdCQnVmZmVyICYmIHRoaXMuX3BhcmVudC51c2VTUkdCQnVmZmVycyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJhYnlsb25UZXh0dXJlID0gbmV3IFRleHR1cmUobnVsbCwgdGhpcy5fYmFieWxvblNjZW5lLCB0ZXh0dXJlQ3JlYXRpb25PcHRpb25zKTtcclxuICAgICAgICBiYWJ5bG9uVGV4dHVyZS5fcGFyZW50Q29udGFpbmVyID0gdGhpcy5fYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGRlZmVycmVkLnByb21pc2UpO1xyXG5cclxuICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZUFzeW5jKGAvaW1hZ2VzLyR7aW1hZ2UuaW5kZXh9YCwgaW1hZ2UpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBpbWFnZS51cmkgfHwgYCR7dGhpcy5fZmlsZU5hbWV9I2ltYWdlJHtpbWFnZS5pbmRleH1gO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVVybCA9IGBkYXRhOiR7dGhpcy5fdW5pcXVlUm9vdFVybH0ke25hbWV9YDtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25UZXh0dXJlLnVwZGF0ZVVSTChkYXRhVXJsLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGludGVybmFsIHRleHR1cmUgbGFiZWwuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmUgPSBiYWJ5bG9uVGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFRleHR1cmUubGFiZWwgPSBpbWFnZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGJhYnlsb25UZXh0dXJlLndyYXBVID0gc2FtcGxlckRhdGEud3JhcFU7XHJcbiAgICAgICAgYmFieWxvblRleHR1cmUud3JhcFYgPSBzYW1wbGVyRGF0YS53cmFwVjtcclxuICAgICAgICBhc3NpZ24oYmFieWxvblRleHR1cmUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50LnVzZUdsdGZUZXh0dXJlTmFtZXMpIHtcclxuICAgICAgICAgICAgYmFieWxvblRleHR1cmUubmFtZSA9IGltYWdlLm5hbWUgfHwgaW1hZ2UudXJpIHx8IGBpbWFnZSR7aW1hZ2UuaW5kZXh9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uVGV4dHVyZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkU2FtcGxlcihjb250ZXh0OiBzdHJpbmcsIHNhbXBsZXI6IElTYW1wbGVyKTogX0lTYW1wbGVyRGF0YSB7XHJcbiAgICAgICAgaWYgKCFzYW1wbGVyLl9kYXRhKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZXIuX2RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBub01pcE1hcHM6IHNhbXBsZXIubWluRmlsdGVyID09PSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1QgfHwgc2FtcGxlci5taW5GaWx0ZXIgPT09IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxpbmdNb2RlOiBHTFRGTG9hZGVyLl9HZXRUZXh0dXJlU2FtcGxpbmdNb2RlKGNvbnRleHQsIHNhbXBsZXIpLFxyXG4gICAgICAgICAgICAgICAgd3JhcFU6IEdMVEZMb2FkZXIuX0dldFRleHR1cmVXcmFwTW9kZShgJHtjb250ZXh0fS93cmFwU2AsIHNhbXBsZXIud3JhcFMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcFY6IEdMVEZMb2FkZXIuX0dldFRleHR1cmVXcmFwTW9kZShgJHtjb250ZXh0fS93cmFwVGAsIHNhbXBsZXIud3JhcFQpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNhbXBsZXIuX2RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhIGdsVEYgaW1hZ2UuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gaW1hZ2UgVGhlIGdsVEYgaW1hZ2UgcHJvcGVydHlcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBkYXRhIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRJbWFnZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgaW1hZ2U6IElJbWFnZSk6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PiB7XHJcbiAgICAgICAgaWYgKCFpbWFnZS5fZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ09wZW4oYCR7Y29udGV4dH0gJHtpbWFnZS5uYW1lIHx8IFwiXCJ9YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW1hZ2UudXJpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5fZGF0YSA9IHRoaXMubG9hZFVyaUFzeW5jKGAke2NvbnRleHR9L3VyaWAsIGltYWdlLCBpbWFnZS51cmkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2dsdGYuYnVmZmVyVmlld3MsIGltYWdlLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuX2RhdGEgPSB0aGlzLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9nQ2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbWFnZS5fZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiB1cmkuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIGdsVEYgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIHRoZSB1cmlcclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGJhc2U2NCBvciByZWxhdGl2ZSB1cmlcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGxvYWRlZCBkYXRhIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRVcmlBc3luYyhjb250ZXh0OiBzdHJpbmcsIHByb3BlcnR5OiBJUHJvcGVydHksIHVyaTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25Qcm9taXNlID0gdGhpcy5fZXh0ZW5zaW9uc0xvYWRVcmlBc3luYyhjb250ZXh0LCBwcm9wZXJ0eSwgdXJpKTtcclxuICAgICAgICBpZiAoZXh0ZW5zaW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5zaW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghR0xURkxvYWRlci5fVmFsaWRhdGVVcmkodXJpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06ICcke3VyaX0nIGlzIGludmFsaWRgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChJc0Jhc2U2NERhdGFVcmwodXJpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkodXJpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke2NvbnRleHR9OiBEZWNvZGVkICR7dXJpLnN1YnN0cmluZygwLCA2NCl9Li4uICgke2RhdGEubGVuZ3RofSBieXRlcylgKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9nKGAke2NvbnRleHR9OiBMb2FkaW5nICR7dXJpfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LnByZXByb2Nlc3NVcmxBc3luYyh0aGlzLl9yb290VXJsICsgdXJpKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Rpc3Bvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgJHtjb250ZXh0fTogTG9hZGVkICR7dXJpfSAoJHsoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aH0gYnl0ZXMpYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IExvYWRGaWxlRXJyb3IoYCR7Y29udGV4dH06IEZhaWxlZCB0byBsb2FkICcke3VyaX0nJHtyZXF1ZXN0ID8gXCI6IFwiICsgcmVxdWVzdC5zdGF0dXMgKyBcIiBcIiArIHJlcXVlc3Quc3RhdHVzVGV4dCA6IFwiXCJ9YCwgcmVxdWVzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIEpTT04gcG9pbnRlciB0byB0aGUgX2ludGVybmFsTWV0YWRhdGEgb2YgdGhlIEJhYnlsb24gb2JqZWN0IGF0IGA8b2JqZWN0Pi5faW50ZXJuYWxNZXRhZGF0YS5nbHRmLnBvaW50ZXJzYC5cclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uT2JqZWN0IHRoZSBCYWJ5bG9uIG9iamVjdCB3aXRoIF9pbnRlcm5hbE1ldGFkYXRhXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRlciB0aGUgSlNPTiBwb2ludGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQWRkUG9pbnRlck1ldGFkYXRhKGJhYnlsb25PYmplY3Q6IElXaXRoTWV0YWRhdGEsIHBvaW50ZXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGJhYnlsb25PYmplY3QubWV0YWRhdGEgPSBiYWJ5bG9uT2JqZWN0Lm1ldGFkYXRhIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gKGJhYnlsb25PYmplY3QuX2ludGVybmFsTWV0YWRhdGEgPSBiYWJ5bG9uT2JqZWN0Ll9pbnRlcm5hbE1ldGFkYXRhIHx8IHt9KTtcclxuICAgICAgICBjb25zdCBnbHRmID0gKG1ldGFkYXRhLmdsdGYgPSBtZXRhZGF0YS5nbHRmIHx8IHt9KTtcclxuICAgICAgICBjb25zdCBwb2ludGVycyA9IChnbHRmLnBvaW50ZXJzID0gZ2x0Zi5wb2ludGVycyB8fCBbXSk7XHJcbiAgICAgICAgcG9pbnRlcnMucHVzaChwb2ludGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfR2V0VGV4dHVyZVdyYXBNb2RlKGNvbnRleHQ6IHN0cmluZywgbW9kZTogVGV4dHVyZVdyYXBNb2RlIHwgdW5kZWZpbmVkKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBTZXQgZGVmYXVsdHMgaWYgdW5kZWZpbmVkXHJcbiAgICAgICAgbW9kZSA9IG1vZGUgPT0gdW5kZWZpbmVkID8gVGV4dHVyZVdyYXBNb2RlLlJFUEVBVCA6IG1vZGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmVXcmFwTW9kZS5DTEFNUF9UT19FREdFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuQ0xBTVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZVdyYXBNb2RlLk1JUlJPUkVEX1JFUEVBVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk1JUlJPUl9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuV1JBUF9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9OiBJbnZhbGlkIHZhbHVlICgke21vZGV9KWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuV1JBUF9BRERSRVNTTU9ERTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFRleHR1cmVTYW1wbGluZ01vZGUoY29udGV4dDogc3RyaW5nLCBzYW1wbGVyOiBJU2FtcGxlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzIGlmIHVuZGVmaW5lZFxyXG4gICAgICAgIGNvbnN0IG1hZ0ZpbHRlciA9IHNhbXBsZXIubWFnRmlsdGVyID09IHVuZGVmaW5lZCA/IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSIDogc2FtcGxlci5tYWdGaWx0ZXI7XHJcbiAgICAgICAgY29uc3QgbWluRmlsdGVyID0gc2FtcGxlci5taW5GaWx0ZXIgPT0gdW5kZWZpbmVkID8gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUiA6IHNhbXBsZXIubWluRmlsdGVyO1xyXG5cclxuICAgICAgICBpZiAobWFnRmlsdGVyID09PSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1pbkZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLkxJTkVBUl9ORUFSRVNUX01JUExJTkVBUjtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5MSU5FQVJfTUlQTUFQX0xJTkVBUjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5MSU5FQVJfTElORUFSX01JUExJTkVBUjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vbWluRmlsdGVyOiBJbnZhbGlkIHZhbHVlICgke21pbkZpbHRlcn0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBMSU5FQVI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobWFnRmlsdGVyICE9PSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1QpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGAke2NvbnRleHR9L21hZ0ZpbHRlcjogSW52YWxpZCB2YWx1ZSAoJHttYWdGaWx0ZXJ9KWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1pbkZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVF9NSVBORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX0xJTkVBUl9NSVBORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTElORUFSO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTElORUFSOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUExJTkVBUjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vbWluRmlsdGVyOiBJbnZhbGlkIHZhbHVlICgke21pbkZpbHRlcn0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUX01JUE5FQVJFU1Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcihjb250ZXh0OiBzdHJpbmcsIGNvbXBvbmVudFR5cGU6IEFjY2Vzc29yQ29tcG9uZW50VHlwZSk6IFR5cGVkQXJyYXlDb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEdldFR5cGVkQXJyYXlDb25zdHJ1Y3Rvcihjb21wb25lbnRUeXBlKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUeXBlZEFycmF5KGNvbnRleHQ6IHN0cmluZywgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLCBidWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbGVuZ3RoOiBudW1iZXIpOiBUeXBlZEFycmF5IHtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBidWZmZXJWaWV3LmJ1ZmZlcjtcclxuICAgICAgICBieXRlT2Zmc2V0ID0gYnVmZmVyVmlldy5ieXRlT2Zmc2V0ICsgKGJ5dGVPZmZzZXQgfHwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gR0xURkxvYWRlci5fR2V0VHlwZWRBcnJheUNvbnN0cnVjdG9yKGAke2NvbnRleHR9L2NvbXBvbmVudFR5cGVgLCBjb21wb25lbnRUeXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50VHlwZUxlbmd0aCA9IFZlcnRleEJ1ZmZlci5HZXRUeXBlQnl0ZUxlbmd0aChjb21wb25lbnRUeXBlKTtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCAlIGNvbXBvbmVudFR5cGVMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgLy8gSEFDSzogQ29weSB0aGUgYnVmZmVyIGlmIGJ5dGUgb2Zmc2V0IGlzIG5vdCBhIG11bHRpcGxlIG9mIGNvbXBvbmVudCB0eXBlIGJ5dGUgbGVuZ3RoLlxyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgJHtjb250ZXh0fTogQ29weWluZyBidWZmZXIgYXMgYnl0ZSBvZmZzZXQgKCR7Ynl0ZU9mZnNldH0pIGlzIG5vdCBhIG11bHRpcGxlIG9mIGNvbXBvbmVudCB0eXBlIGJ5dGUgbGVuZ3RoICgke2NvbXBvbmVudFR5cGVMZW5ndGh9KWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKGJ1ZmZlci5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgbGVuZ3RoICogY29tcG9uZW50VHlwZUxlbmd0aCksIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcihidWZmZXIsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldE51bUNvbXBvbmVudHMoY29udGV4dDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiU0NBTEFSXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUM0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQ0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Y29udGV4dH06IEludmFsaWQgdHlwZSAoJHt0eXBlfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfVmFsaWRhdGVVcmkodXJpOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gVG9vbHMuSXNCYXNlNjQodXJpKSB8fCB1cmkuaW5kZXhPZihcIi4uXCIpID09PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9HZXREcmF3TW9kZShjb250ZXh0OiBzdHJpbmcsIG1vZGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKG1vZGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vZGUgPSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRVM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5QT0lOVFM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuUG9pbnRMaXN0RHJhd01vZGU7XHJcbiAgICAgICAgICAgIGNhc2UgTWVzaFByaW1pdGl2ZU1vZGUuTElORVM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuTGluZUxpc3REcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX0xPT1A6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuTGluZUxvb3BEcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX1NUUklQOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLkxpbmVTdHJpcERyYXdNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRlcmlhbC5UcmlhbmdsZUZpbGxNb2RlO1xyXG4gICAgICAgICAgICBjYXNlIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTtcclxuICAgICAgICAgICAgY2FzZSBNZXNoUHJpbWl0aXZlTW9kZS5UUklBTkdMRV9GQU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogSW52YWxpZCBtZXNoIHByaW1pdGl2ZSBtb2RlICgke21vZGV9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXBpbGVNYXRlcmlhbHNBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiQ29tcGlsZSBtYXRlcmlhbHNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8dW5rbm93bj4+KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9nbHRmLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIHRoaXMuX2dsdGYubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwuX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25EcmF3TW9kZSBpbiBtYXRlcmlhbC5fZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uRGF0YSA9IG1hdGVyaWFsLl9kYXRhW2JhYnlsb25EcmF3TW9kZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFieWxvbk1lc2ggb2YgYmFieWxvbkRhdGEuYmFieWxvbk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIG5vblVuaWZvcm1TY2FsaW5nIGlzIHNldCBpZiBuZWNlc3NhcnkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gYmFieWxvbkRhdGEuYmFieWxvbk1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VDb21waWxhdGlvbkFzeW5jKGJhYnlsb25NZXNoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGJhYnlsb25NYXRlcmlhbC5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoYmFieWxvbk1lc2gsIHsgdXNlSW5zdGFuY2VzOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQudXNlQ2xpcFBsYW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VDb21waWxhdGlvbkFzeW5jKGJhYnlsb25NZXNoLCB7IGNsaXBQbGFuZTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChiYWJ5bG9uTWF0ZXJpYWwuZm9yY2VDb21waWxhdGlvbkFzeW5jKGJhYnlsb25NZXNoLCB7IGNsaXBQbGFuZTogdHJ1ZSwgdXNlSW5zdGFuY2VzOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll9lbmRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIG1hdGVyaWFsc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb21waWxlU2hhZG93R2VuZXJhdG9yc0FzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudC5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJDb21waWxlIHNoYWRvdyBnZW5lcmF0b3JzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPHVua25vd24+PigpO1xyXG5cclxuICAgICAgICBjb25zdCBsaWdodHMgPSB0aGlzLl9iYWJ5bG9uU2NlbmUubGlnaHRzO1xyXG4gICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2YgbGlnaHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRvciA9IGxpZ2h0LmdldFNoYWRvd0dlbmVyYXRvcigpO1xyXG4gICAgICAgICAgICBpZiAoZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGdlbmVyYXRvci5mb3JjZUNvbXBpbGF0aW9uQXN5bmMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiQ29tcGlsZSBzaGFkb3cgZ2VuZXJhdG9yc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mb3JFYWNoRXh0ZW5zaW9ucyhhY3Rpb246IChleHRlbnNpb246IElHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgdGhpcy5fZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbihleHRlbnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FwcGx5RXh0ZW5zaW9uczxUPihwcm9wZXJ0eTogSVByb3BlcnR5LCBmdW5jdGlvbk5hbWU6IHN0cmluZywgYWN0aW9uQXN5bmM6IChleHRlbnNpb246IElHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiBOdWxsYWJsZTxUPiB8IHVuZGVmaW5lZCk6IE51bGxhYmxlPFQ+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV4dGVuc2lvbiBvZiB0aGlzLl9leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBgJHtleHRlbnNpb24ubmFtZX0uJHtmdW5jdGlvbk5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlclByb3BlcnR5ID0gcHJvcGVydHkgYXMgSUxvYWRlclByb3BlcnR5O1xyXG4gICAgICAgICAgICAgICAgbG9hZGVyUHJvcGVydHkuX2FjdGl2ZUxvYWRlckV4dGVuc2lvbkZ1bmN0aW9ucyA9IGxvYWRlclByb3BlcnR5Ll9hY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnMgPSBsb2FkZXJQcm9wZXJ0eS5fYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVMb2FkZXJFeHRlbnNpb25GdW5jdGlvbnNbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zW2lkXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbkFzeW5jKGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlTG9hZGVyRXh0ZW5zaW9uRnVuY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNPbkxvYWRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZm9yRWFjaEV4dGVuc2lvbnMoKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLm9uTG9hZGluZyAmJiBleHRlbnNpb24ub25Mb2FkaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNPblJlYWR5KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2ZvckVhY2hFeHRlbnNpb25zKChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5vblJlYWR5ICYmIGV4dGVuc2lvbi5vblJlYWR5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRTY2VuZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2NlbmU6IElTY2VuZSk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHNjZW5lLCBcImxvYWRTY2VuZVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZFNjZW5lQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKG5vZGUsIFwibG9hZE5vZGVcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWROb2RlQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZENhbWVyYUFzeW5jKGNvbnRleHQ6IHN0cmluZywgY2FtZXJhOiBJQ2FtZXJhLCBhc3NpZ246IChiYWJ5bG9uQ2FtZXJhOiBDYW1lcmEpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPENhbWVyYT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKGNhbWVyYSwgXCJsb2FkQ2FtZXJhXCIsIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5sb2FkQ2FtZXJhQXN5bmMgJiYgZXh0ZW5zaW9uLmxvYWRDYW1lcmFBc3luYyhjb250ZXh0LCBjYW1lcmEsIGFzc2lnbikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRWZXJ0ZXhEYXRhQXN5bmMoY29udGV4dDogc3RyaW5nLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlLCBiYWJ5bG9uTWVzaDogTWVzaCk6IE51bGxhYmxlPFByb21pc2U8R2VvbWV0cnk+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhwcmltaXRpdmUsIFwibG9hZFZlcnRleERhdGFcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkVmVydGV4RGF0YUFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZFZlcnRleERhdGFBc3luYyhjb250ZXh0LCBwcmltaXRpdmUsIGJhYnlsb25NZXNoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZE1lc2hQcmltaXRpdmVBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIG5vZGU6IElOb2RlLFxyXG4gICAgICAgIG1lc2g6IElNZXNoLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmUsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxBYnN0cmFjdE1lc2g+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgcHJpbWl0aXZlLFxyXG4gICAgICAgICAgICBcImxvYWRNZXNoUHJpbWl0aXZlXCIsXHJcbiAgICAgICAgICAgIChleHRlbnNpb24pID0+IGV4dGVuc2lvbi5fbG9hZE1lc2hQcmltaXRpdmVBc3luYyAmJiBleHRlbnNpb24uX2xvYWRNZXNoUHJpbWl0aXZlQXN5bmMoY29udGV4dCwgbmFtZSwgbm9kZSwgbWVzaCwgcHJpbWl0aXZlLCBhc3NpZ24pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbWF0ZXJpYWw6IElNYXRlcmlhbCxcclxuICAgICAgICBiYWJ5bG9uTWVzaDogTnVsbGFibGU8TWVzaD4sXHJcbiAgICAgICAgYmFieWxvbkRyYXdNb2RlOiBudW1iZXIsXHJcbiAgICAgICAgYXNzaWduOiAoYmFieWxvbk1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTxNYXRlcmlhbD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBtYXRlcmlhbCxcclxuICAgICAgICAgICAgXCJsb2FkTWF0ZXJpYWxcIixcclxuICAgICAgICAgICAgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkTWF0ZXJpYWxBc3luYyAmJiBleHRlbnNpb24uX2xvYWRNYXRlcmlhbEFzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWVzaCwgYmFieWxvbkRyYXdNb2RlLCBhc3NpZ24pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zQ3JlYXRlTWF0ZXJpYWwoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGU6IG51bWJlcik6IE51bGxhYmxlPE1hdGVyaWFsPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhtYXRlcmlhbCwgXCJjcmVhdGVNYXRlcmlhbFwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uY3JlYXRlTWF0ZXJpYWwgJiYgZXh0ZW5zaW9uLmNyZWF0ZU1hdGVyaWFsKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uRHJhd01vZGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkTWF0ZXJpYWxQcm9wZXJ0aWVzQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLFxyXG4gICAgICAgICAgICBcImxvYWRNYXRlcmlhbFByb3BlcnRpZXNcIixcclxuICAgICAgICAgICAgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRNYXRlcmlhbFByb3BlcnRpZXNBc3luYyAmJiBleHRlbnNpb24ubG9hZE1hdGVyaWFsUHJvcGVydGllc0FzeW5jKGNvbnRleHQsIG1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWwpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2V4dGVuc2lvbnNMb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8sIGFzc2lnbjogKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8QmFzZVRleHR1cmU+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyh0ZXh0dXJlSW5mbywgXCJsb2FkVGV4dHVyZUluZm9cIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRUZXh0dXJlSW5mb0FzeW5jICYmIGV4dGVuc2lvbi5sb2FkVGV4dHVyZUluZm9Bc3luYyhjb250ZXh0LCB0ZXh0dXJlSW5mbywgYXNzaWduKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFRleHR1cmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHRleHR1cmU6IElUZXh0dXJlLCBhc3NpZ246IChiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPEJhc2VUZXh0dXJlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnModGV4dHVyZSwgXCJsb2FkVGV4dHVyZVwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRUZXh0dXJlQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkVGV4dHVyZUFzeW5jKGNvbnRleHQsIHRleHR1cmUsIGFzc2lnbikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0OiBzdHJpbmcsIGFuaW1hdGlvbjogSUFuaW1hdGlvbik6IE51bGxhYmxlPFByb21pc2U8QW5pbWF0aW9uR3JvdXA+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5RXh0ZW5zaW9ucyhhbmltYXRpb24sIFwibG9hZEFuaW1hdGlvblwiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZEFuaW1hdGlvbkFzeW5jICYmIGV4dGVuc2lvbi5sb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBjaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgICAgICBvbkxvYWQ6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgXCJsb2FkQW5pbWF0aW9uQ2hhbm5lbFwiLFxyXG4gICAgICAgICAgICAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24uX2xvYWRBbmltYXRpb25DaGFubmVsQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEFzeW5jKGNvbnRleHQsIGFuaW1hdGlvbkNvbnRleHQsIGFuaW1hdGlvbiwgY2hhbm5lbCwgb25Mb2FkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFNraW5Bc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBza2luOiBJU2tpbik6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHNraW4sIFwibG9hZFNraW5cIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkU2tpbkFzeW5jICYmIGV4dGVuc2lvbi5fbG9hZFNraW5Bc3luYyhjb250ZXh0LCBub2RlLCBza2luKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZFVyaUFzeW5jKGNvbnRleHQ6IHN0cmluZywgcHJvcGVydHk6IElQcm9wZXJ0eSwgdXJpOiBzdHJpbmcpOiBOdWxsYWJsZTxQcm9taXNlPEFycmF5QnVmZmVyVmlldz4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlFeHRlbnNpb25zKHByb3BlcnR5LCBcImxvYWRVcmlcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLl9sb2FkVXJpQXN5bmMgJiYgZXh0ZW5zaW9uLl9sb2FkVXJpQXN5bmMoY29udGV4dCwgcHJvcGVydHksIHVyaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfZXh0ZW5zaW9uc0xvYWRCdWZmZXJWaWV3QXN5bmMoY29udGV4dDogc3RyaW5nLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoYnVmZmVyVmlldywgXCJsb2FkQnVmZmVyVmlld1wiLCAoZXh0ZW5zaW9uKSA9PiBleHRlbnNpb24ubG9hZEJ1ZmZlclZpZXdBc3luYyAmJiBleHRlbnNpb24ubG9hZEJ1ZmZlclZpZXdBc3luYyhjb250ZXh0LCBidWZmZXJWaWV3KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zTG9hZEJ1ZmZlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgYnVmZmVyOiBJQnVmZmVyLCBieXRlT2Zmc2V0OiBudW1iZXIsIGJ5dGVMZW5ndGg6IG51bWJlcik6IE51bGxhYmxlPFByb21pc2U8QXJyYXlCdWZmZXJWaWV3Pj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUV4dGVuc2lvbnMoYnVmZmVyLCBcImxvYWRCdWZmZXJcIiwgKGV4dGVuc2lvbikgPT4gZXh0ZW5zaW9uLmxvYWRCdWZmZXJBc3luYyAmJiBleHRlbnNpb24ubG9hZEJ1ZmZlckFzeW5jKGNvbnRleHQsIGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIG1ldGhvZCBjYWxsZWQgYnkgYSBsb2FkZXIgZXh0ZW5zaW9uIHRvIGxvYWQgYW4gZ2xURiBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIGdsVEYgcHJvcGVydHkgdG8gbG9hZCB0aGUgZXh0ZW5zaW9uIGZyb21cclxuICAgICAqIEBwYXJhbSBleHRlbnNpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gdG8gbG9hZFxyXG4gICAgICogQHBhcmFtIGFjdGlvbkFzeW5jIFRoZSBhY3Rpb24gdG8gcnVuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcHJvbWlzZSByZXR1cm5lZCBieSBhY3Rpb25Bc3luYyBvciBudWxsIGlmIHRoZSBleHRlbnNpb24gZG9lcyBub3QgZXhpc3RcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZEV4dGVuc2lvbkFzeW5jPFRFeHRlbnNpb24gPSB1bmtub3duLCBUUmVzdWx0ID0gdm9pZD4oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHByb3BlcnR5OiBJUHJvcGVydHksXHJcbiAgICAgICAgZXh0ZW5zaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGFjdGlvbkFzeW5jOiAoZXh0ZW5zaW9uQ29udGV4dDogc3RyaW5nLCBleHRlbnNpb246IFRFeHRlbnNpb24pID0+IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+XHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPFRSZXN1bHQ+PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eS5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHByb3BlcnR5LmV4dGVuc2lvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0gYXMgVEV4dGVuc2lvbjtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpb25Bc3luYyhgJHtjb250ZXh0fS9leHRlbnNpb25zLyR7ZXh0ZW5zaW9uTmFtZX1gLCBleHRlbnNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIG1ldGhvZCBjYWxsZWQgYnkgYSBsb2FkZXIgZXh0ZW5zaW9uIHRvIGxvYWQgYSBnbFRGIGV4dHJhLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgVGhlIGNvbnRleHQgd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5IFRoZSBnbFRGIHByb3BlcnR5IHRvIGxvYWQgdGhlIGV4dHJhIGZyb21cclxuICAgICAqIEBwYXJhbSBleHRlbnNpb25OYW1lIFRoZSBuYW1lIG9mIHRoZSBleHRlbnNpb24gdG8gbG9hZFxyXG4gICAgICogQHBhcmFtIGFjdGlvbkFzeW5jIFRoZSBhY3Rpb24gdG8gcnVuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcHJvbWlzZSByZXR1cm5lZCBieSBhY3Rpb25Bc3luYyBvciBudWxsIGlmIHRoZSBleHRyYSBkb2VzIG5vdCBleGlzdFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkRXh0cmFBc3luYzxURXh0cmEgPSB1bmtub3duLCBUUmVzdWx0ID0gdm9pZD4oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHByb3BlcnR5OiBJUHJvcGVydHksXHJcbiAgICAgICAgZXh0ZW5zaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGFjdGlvbkFzeW5jOiAoZXh0cmFDb250ZXh0OiBzdHJpbmcsIGV4dHJhOiBURXh0cmEpID0+IE51bGxhYmxlPFByb21pc2U8VFJlc3VsdD4+XHJcbiAgICApOiBOdWxsYWJsZTxQcm9taXNlPFRSZXN1bHQ+PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eS5leHRyYXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRyYXMgPSBwcm9wZXJ0eS5leHRyYXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dHJhID0gZXh0cmFzW2V4dGVuc2lvbk5hbWVdIGFzIFRFeHRyYTtcclxuICAgICAgICBpZiAoIWV4dHJhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbkFzeW5jKGAke2NvbnRleHR9L2V4dHJhcy8ke2V4dGVuc2lvbk5hbWV9YCwgZXh0cmEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGZvciBwcmVzZW5jZSBvZiBhbiBleHRlbnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXh0ZW5zaW9uIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyB0aGUgcHJlc2VuY2Ugb2YgdGhlIGdpdmVuIGV4dGVuc2lvbiBuYW1lIGluIGBleHRlbnNpb25zVXNlZGBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRXh0ZW5zaW9uVXNlZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9nbHRmLmV4dGVuc2lvbnNVc2VkICYmIHRoaXMuX2dsdGYuZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmNyZW1lbnRzIHRoZSBpbmRlbnRhdGlvbiBsZXZlbCBhbmQgbG9ncyBhIG1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2dcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ09wZW4obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2dPcGVuKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjcmVtZW50cyB0aGUgaW5kZW50YXRpb24gbGV2ZWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dDbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX2xvZ0Nsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGEgbWVzc2FnZVxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2cobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgYSBwZXJmb3JtYW5jZSBjb3VudGVyLlxyXG4gICAgICogQHBhcmFtIGNvdW50ZXJOYW1lIFRoZSBuYW1lIG9mIHRoZSBwZXJmb3JtYW5jZSBjb3VudGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50Ll9zdGFydFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmRzIGEgcGVyZm9ybWFuY2UgY291bnRlci5cclxuICAgICAqIEBwYXJhbSBjb3VudGVyTmFtZSBUaGUgbmFtZSBvZiB0aGUgcGVyZm9ybWFuY2UgY291bnRlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5kUGVyZm9ybWFuY2VDb3VudGVyKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihjb3VudGVyTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlciA9IChwYXJlbnQpID0+IG5ldyBHTFRGTG9hZGVyKHBhcmVudCk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGdpdGh1Yi9uby10aGVuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9ycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlICogYXMgR0xURjIgZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5LCBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCwgSVNjZW5lTG9hZGVyQXN5bmNSZXN1bHQsIFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJTY2VuZUxvYWRlclBsdWdpbiB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lLCBJRGlzcG9zYWJsZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgV2ViUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2Mvd2ViUmVxdWVzdFwiO1xyXG5pbXBvcnQgdHlwZSB7IElGaWxlUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVJlcXVlc3RcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJRGF0YUJ1ZmZlciB9IGZyb20gXCJjb3JlL01pc2MvZGF0YVJlYWRlclwiO1xyXG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZWYWxpZGF0aW9uIH0gZnJvbSBcIi4vZ2xURlZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgR0xURkZpbGVMb2FkZXJNZXRhZGF0YSwgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCB9IGZyb20gXCIuL2dsVEZGaWxlTG9hZGVyLm1ldGFkYXRhXCI7XHJcbmltcG9ydCB0eXBlIHsgTG9hZEZpbGVFcnJvciB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IERlY29kZUJhc2U2NFVybFRvQmluYXJ5IH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgUnVudGltZUVycm9yLCBFcnJvckNvZGVzIH0gZnJvbSBcImNvcmUvTWlzYy9lcnJvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0TWFuYWdlciB9IGZyb20gXCJjb3JlL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgb3B0aW9ucyBmb3IgZ2xURiBsb2FkZXIgZXh0ZW5zaW9ucy4gVGhpcyBpbnRlcmZhY2UgaXMgZXh0ZW5kZWQgYnkgc3BlY2lmaWMgZXh0ZW5zaW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZD4ge31cclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2NcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBnbFRGIGxvYWRlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBbR0xURkZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXTogUGFydGlhbDxHTFRGTG9hZGVyT3B0aW9ucz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsZVJlcXVlc3RJbmZvIGV4dGVuZHMgSUZpbGVSZXF1ZXN0IHtcclxuICAgIF9sZW5ndGhDb21wdXRhYmxlPzogYm9vbGVhbjtcclxuICAgIF9sb2FkZWQ/OiBudW1iZXI7XHJcbiAgICBfdG90YWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRBc3luYyhhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRWaWV3QXN5bmMoYXJyYXlCdWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBieXRlT2Zmc2V0ID49IGFycmF5QnVmZmVyVmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiT2Zmc2V0IGlzIG91dCBvZiByYW5nZS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGggPiBhcnJheUJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkxlbmd0aCBpcyBvdXQgb2YgcmFuZ2UuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlclZpZXcuYnVmZmVyLCBhcnJheUJ1ZmZlclZpZXcuYnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNb2RlIHRoYXQgZGV0ZXJtaW5lcyB0aGUgY29vcmRpbmF0ZSBzeXN0ZW0gdG8gdXNlLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlIHtcclxuICAgIC8qKlxyXG4gICAgICogQXV0b21hdGljYWxseSBjb252ZXJ0IHRoZSBnbFRGIHJpZ2h0LWhhbmRlZCBkYXRhIHRvIHRoZSBhcHByb3ByaWF0ZSBzeXN0ZW0gYmFzZWQgb24gdGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBzeXN0ZW0gbW9kZSBvZiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIEFVVE8sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB1c2VSaWdodEhhbmRlZFN5c3RlbSBmbGFnIG9uIHRoZSBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgRk9SQ0VfUklHSFRfSEFOREVELFxyXG59XHJcblxyXG4vKipcclxuICogTW9kZSB0aGF0IGRldGVybWluZXMgd2hhdCBhbmltYXRpb25zIHdpbGwgc3RhcnQuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlIHtcclxuICAgIC8qKlxyXG4gICAgICogTm8gYW5pbWF0aW9uIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIE5PTkUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmlyc3QgYW5pbWF0aW9uIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIEZJUlNULFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsIGFuaW1hdGlvbnMgd2lsbCBzdGFydC5cclxuICAgICAqL1xyXG4gICAgQUxMLFxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBnbFRGIGFzc2V0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxvYWRlckRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgZ2xURiBKU09OLlxyXG4gICAgICovXHJcbiAgICBqc29uOiBvYmplY3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgQklOIGNodW5rIG9mIGEgYmluYXJ5IGdsVEYuXHJcbiAgICAgKi9cclxuICAgIGJpbjogTnVsbGFibGU8SURhdGFCdWZmZXI+O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBleHRlbmRpbmcgdGhlIGxvYWRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBvcmRlciBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqIFRoZSBsb2FkZXIgc29ydHMgdGhlIGV4dGVuc2lvbnMgdXNpbmcgdGhlc2UgdmFsdWVzIHdoZW4gbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkZXIgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBHTFRGTG9hZGVyU3RhdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgbG9hZGluZy5cclxuICAgICAqL1xyXG4gICAgTE9BRElORyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldCBpcyByZWFkeSBmb3IgcmVuZGVyaW5nLlxyXG4gICAgICovXHJcbiAgICBSRUFEWSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgQ09NUExFVEUsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxvYWRlciBleHRlbmRzIElEaXNwb3NhYmxlIHtcclxuICAgIGltcG9ydE1lc2hBc3luYzogKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGNvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+LFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKSA9PiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PjtcclxuICAgIGxvYWRBc3luYzogKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lPzogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyBkZWZhdWx0L2ltcGxpY2l0IG9wdGlvbnMgdG8gZXh0ZW5zaW9uIHNwZWNpZmljIG9wdGlvbnMuXHJcbiAqL1xyXG50eXBlIERlZmF1bHRFeHRlbnNpb25PcHRpb25zPEJhc2VFeHRlbnNpb25PcHRpb25zPiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgZXh0ZW5zaW9uIGlzIGVuYWJsZWRcclxuICAgICAqL1xyXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XHJcbn0gJiBCYXNlRXh0ZW5zaW9uT3B0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCB0aGUgY29uY3JldGUgKG5vdCBhYnN0cmFjdCkgZ2xURiBvcHRpb25zLCBleGNsdWRpbmcgY2FsbGJhY2tzLlxyXG4gKiBUaGUgcHVycG9zZSBvZiB0aGlzIGNsYXNzIGlzIHRvIG1ha2UgaXQgZWFzeSB0byBwcm92aWRlIGEgd2F5IHRvIG11dGF0ZSB0aGUgZGVmYXVsdFxyXG4gKiBsb2FkZXIgb3B0aW9ucyAoc2VlIHRoZSBHTFRGTG9hZGVyRGVmYXVsdE9wdGlvbnMgaW5zdGFuY2UgYmVsb3cpIHdpdGhvdXQgZHVwbGljYXRpbmdcclxuICogYWxsIHRoZSBvcHRpb25zIGluIHlldCBhbm90aGVyIG9iamVjdC4gU2luY2UgdGhpcyBjbGFzcyBpcyBpbnN0YW50aWF0ZWQgZm9yIHRoZSBkZWZhdWx0XHJcbiAqIG9wdGlvbnMgb2JqZWN0LCBhYnN0cmFjdCBwcm9wZXJ0aWVzIGFuZCBjYWxsYmFja3MgYXJlIG5vdCBpbmNsdWRlZCwgaXQncyBtb3JlIGp1c3RcclxuICogZmxhZy10eXBlIG9wdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBHTFRGTG9hZGVyQmFzZU9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGFsd2F5cyBjb21wdXRlIHRoZSBib3VuZGluZyBib3hlcyBvZiBtZXNoZXMgYW5kIG5vdCB1c2UgdGhlIG1pbi9tYXggdmFsdWVzIGZyb20gdGhlIHBvc2l0aW9uIGFjY2Vzc29yLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBhbHdheXMgY29tcHV0ZSB0aGUgbmVhcmVzdCBjb21tb24gYW5jZXN0b3Igb2YgdGhlIHNrZWxldG9uIGpvaW50cyBpbnN0ZWFkIG9mIHVzaW5nIGBza2luLnNrZWxldG9uYC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIGxvYWRpbmcgYXNzZXRzIHdpdGggaW52YWxpZCBgc2tpbi5za2VsZXRvbmAgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWx3YXlzQ29tcHV0ZVNrZWxldG9uUm9vdE5vZGUgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhbmltYXRpb24gc3RhcnQgbW9kZS4gRGVmYXVsdHMgdG8gRklSU1QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGFydE1vZGUgPSBHTFRGTG9hZGVyQW5pbWF0aW9uU3RhcnRNb2RlLkZJUlNUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjb21waWxlIG1hdGVyaWFscyBiZWZvcmUgcmFpc2luZyB0aGUgc3VjY2VzcyBjYWxsYmFjay4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb21waWxlTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZVNoYWRvd0dlbmVyYXRvcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb29yZGluYXRlIHN5c3RlbSBtb2RlLiBEZWZhdWx0cyB0byBBVVRPLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29vcmRpbmF0ZVN5c3RlbU1vZGUgPSBHTFRGTG9hZGVyQ29vcmRpbmF0ZVN5c3RlbU1vZGUuQVVUTztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY3JlYXRlIGluc3RhbmNlcyB3aGVuIG11bHRpcGxlIGdsVEYgbm9kZXMgcG9pbnQgdG8gdGhlIHNhbWUgZ2xURiBtZXNoLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlSW5zdGFuY2VzID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGxvYWQgYWxsIG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLCBldmVuIGlmIG5vdCB1c2VkIGJ5IGFueSBtZXNoLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBbGxNYXRlcmlhbHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgbG9hZCBtb3JwaCB0YXJnZXRzLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1vcnBoVGFyZ2V0cyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGxvYWQgbm9kZSBhbmltYXRpb25zLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICogTk9URTogVGhlIGFuaW1hdGlvbiBvZiB0aGlzIG5vZGUgd2lsbCBzdGlsbCBsb2FkIGlmIHRoZSBub2RlIGlzIGFsc28gYSBqb2ludCBvZiBhIHNraW4gYW5kIGBsb2FkU2tpbnNgIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkTm9kZUFuaW1hdGlvbnMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCBvbmx5IHRoZSBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkT25seU1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBsb2FkIHNraW5zLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFNraW5zID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGRvIG5vdCBsb2FkIGFueSBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBza2lwTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGxvYWRpbmcgZ2xURiBhbmltYXRpb25zLCB3aGljaCBhcmUgZGVmaW5lZCBpbiBzZWNvbmRzLCB0YXJnZXQgdGhlbSB0byB0aGlzIEZQUy4gRGVmYXVsdHMgdG8gNjAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXRGcHMgPSA2MDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIEFscGhhIGJsZW5kZWQgbWF0ZXJpYWxzIGFyZSBvbmx5IGFwcGxpZWQgYXMgY292ZXJhZ2UuXHJcbiAgICAgKiBJZiBmYWxzZSwgKGRlZmF1bHQpIFRoZSBsdW1pbmFuY2Ugb2YgZWFjaCBwaXhlbCB3aWxsIHJlZHVjZSBpdHMgb3BhY2l0eSB0byBzaW11bGF0ZSB0aGUgYmVoYXZpb3VyIG9mIG1vc3QgcGh5c2ljYWwgbWF0ZXJpYWxzLlxyXG4gICAgICogSWYgdHJ1ZSwgbm8gZXh0cmEgZWZmZWN0cyBhcmUgYXBwbGllZCB0byB0cmFuc3BhcmVudCBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGFsc28gY29tcGlsZSBtYXRlcmlhbHMgd2l0aCBjbGlwIHBsYW5lcy4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VDbGlwUGxhbmUgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIHRoZSBsb2FkZXIgd2lsbCBkZXJpdmUgdGhlIG5hbWUgZm9yIEJhYnlsb24gdGV4dHVyZXMgZnJvbSB0aGUgZ2xURiB0ZXh0dXJlIG5hbWUsIGltYWdlIG5hbWUsIG9yIGltYWdlIHVybC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBOb3RlIHRoYXQgaXQgaXMgcG9zc2libGUgZm9yIG11bHRpcGxlIEJhYnlsb24gdGV4dHVyZXMgdG8gc2hhcmUgdGhlIHNhbWUgbmFtZSB3aGVuIHRoZSBCYWJ5bG9uIHRleHR1cmVzIGxvYWQgZnJvbSB0aGUgc2FtZSBnbFRGIHRleHR1cmUgb3IgaW1hZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VHbHRmVGV4dHVyZU5hbWVzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIHVzZSByYW5nZSByZXF1ZXN0cyB3aGVuIGxvYWQgYmluYXJ5IGdsVEYgZmlsZXMgZnJvbSBIVFRQLlxyXG4gICAgICogRW5hYmxpbmcgd2lsbCBkaXNhYmxlIG9mZmxpbmUgc3VwcG9ydCBhbmQgZ2xURiB2YWxpZGF0b3IuXHJcbiAgICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZVJhbmdlUmVxdWVzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIGxvYWQgdGhlIGNvbG9yIChnYW1tYSBlbmNvZGVkKSB0ZXh0dXJlcyBpbnRvIHNSR0IgYnVmZmVycyAoaWYgc3VwcG9ydGVkIGJ5IHRoZSBHUFUpLCB3aGljaCB3aWxsIHlpZWxkIG1vcmUgYWNjdXJhdGUgcmVzdWx0cyB3aGVuIHNhbXBsaW5nIHRoZSB0ZXh0dXJlLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlU1JHQkJ1ZmZlcnMgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCB2YWxpZGF0ZSB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWxpZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB0aGUgZ2xURiBmaWxlcyB1c2luZyB0aGUgT3BlblBCUiBtYXRlcmlhbC5cclxuICAgICAqIEBleHBlcmltZW50YWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZU9wZW5QQlIgPSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IEdMVEYgbG9hZGVyIG9wdGlvbnMuXHJcbiAqIE92ZXJyaWRlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgb2JqZWN0IHRvIGdsb2JhbGx5IGNoYW5nZSB0aGUgZGVmYXVsdCBsb2FkZXIgb3B0aW9ucy5cclxuICogVG8gc3BlY2lmeSBvcHRpb25zIGZvciBhIHNwZWNpZmljIGxvYWQgY2FsbCwgcGFzcyB0aG9zZSBvcHRpb25zIGludG8gdGhlIGFzc29jaWF0ZWQgbG9hZCBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBHTFRGTG9hZGVyRGVmYXVsdE9wdGlvbnMgPSBuZXcgR0xURkxvYWRlckJhc2VPcHRpb25zKCk7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBHTFRGTG9hZGVyT3B0aW9ucyBleHRlbmRzIEdMVEZMb2FkZXJCYXNlT3B0aW9ucyB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYmFieWxvbmpzL2F2YWlsYWJsZVxyXG4gICAgcHJvdGVjdGVkIGNvcHlGcm9tKG9wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PEdMVEZMb2FkZXJPcHRpb25zPj4pIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c0NvbXB1dGVCb3VuZGluZ0JveCA9IG9wdGlvbnMuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID8/IHRoaXMuYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94O1xyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlID0gb3B0aW9ucy5hbHdheXNDb21wdXRlU2tlbGV0b25Sb290Tm9kZSA/PyB0aGlzLmFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0TW9kZSA9IG9wdGlvbnMuYW5pbWF0aW9uU3RhcnRNb2RlID8/IHRoaXMuYW5pbWF0aW9uU3RhcnRNb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzID0gb3B0aW9ucy5jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA/PyB0aGlzLmNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVNYXRlcmlhbHMgPSBvcHRpb25zLmNvbXBpbGVNYXRlcmlhbHMgPz8gdGhpcy5jb21waWxlTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzID0gb3B0aW9ucy5jb21waWxlU2hhZG93R2VuZXJhdG9ycyA/PyB0aGlzLmNvbXBpbGVTaGFkb3dHZW5lcmF0b3JzO1xyXG4gICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVTeXN0ZW1Nb2RlID0gb3B0aW9ucy5jb29yZGluYXRlU3lzdGVtTW9kZSA/PyB0aGlzLmNvb3JkaW5hdGVTeXN0ZW1Nb2RlO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluc3RhbmNlcyA9IG9wdGlvbnMuY3JlYXRlSW5zdGFuY2VzID8/IHRoaXMuY3JlYXRlSW5zdGFuY2VzO1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVJvb3ROb2RlID0gb3B0aW9ucy5jdXN0b21Sb290Tm9kZTtcclxuICAgICAgICAgICAgdGhpcy5leHRlbnNpb25PcHRpb25zID0gb3B0aW9ucy5leHRlbnNpb25PcHRpb25zID8/IHRoaXMuZXh0ZW5zaW9uT3B0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5sb2FkQWxsTWF0ZXJpYWxzID0gb3B0aW9ucy5sb2FkQWxsTWF0ZXJpYWxzID8/IHRoaXMubG9hZEFsbE1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy5sb2FkTW9ycGhUYXJnZXRzID0gb3B0aW9ucy5sb2FkTW9ycGhUYXJnZXRzID8/IHRoaXMubG9hZE1vcnBoVGFyZ2V0cztcclxuICAgICAgICAgICAgdGhpcy5sb2FkTm9kZUFuaW1hdGlvbnMgPSBvcHRpb25zLmxvYWROb2RlQW5pbWF0aW9ucyA/PyB0aGlzLmxvYWROb2RlQW5pbWF0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5sb2FkT25seU1hdGVyaWFscyA9IG9wdGlvbnMubG9hZE9ubHlNYXRlcmlhbHMgPz8gdGhpcy5sb2FkT25seU1hdGVyaWFscztcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2tpbnMgPSBvcHRpb25zLmxvYWRTa2lucyA/PyB0aGlzLmxvYWRTa2lucztcclxuICAgICAgICAgICAgdGhpcy5sb2dnaW5nRW5hYmxlZCA9IG9wdGlvbnMubG9nZ2luZ0VuYWJsZWQgPz8gdGhpcy5sb2dnaW5nRW5hYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5vbkNhbWVyYUxvYWRlZCA9IG9wdGlvbnMub25DYW1lcmFMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZCA9IG9wdGlvbnMub25NYXRlcmlhbExvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWQgPSBvcHRpb25zLm9uTWVzaExvYWRlZDtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZCA9IG9wdGlvbnMub25QYXJzZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25Ta2luTG9hZGVkID0gb3B0aW9ucy5vblNraW5Mb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkID0gb3B0aW9ucy5vblRleHR1cmVMb2FkZWQ7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWQgPSBvcHRpb25zLm9uVmFsaWRhdGVkO1xyXG4gICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NVcmxBc3luYyA9IG9wdGlvbnMucHJlcHJvY2Vzc1VybEFzeW5jID8/IHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jO1xyXG4gICAgICAgICAgICB0aGlzLnNraXBNYXRlcmlhbHMgPSBvcHRpb25zLnNraXBNYXRlcmlhbHMgPz8gdGhpcy5za2lwTWF0ZXJpYWxzO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEZwcyA9IG9wdGlvbnMudGFyZ2V0RnBzID8/IHRoaXMudGFyZ2V0RnBzO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPSBvcHRpb25zLnRyYW5zcGFyZW5jeUFzQ292ZXJhZ2UgPz8gdGhpcy50cmFuc3BhcmVuY3lBc0NvdmVyYWdlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUNsaXBQbGFuZSA9IG9wdGlvbnMudXNlQ2xpcFBsYW5lID8/IHRoaXMudXNlQ2xpcFBsYW5lO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUdsdGZUZXh0dXJlTmFtZXMgPSBvcHRpb25zLnVzZUdsdGZUZXh0dXJlTmFtZXMgPz8gdGhpcy51c2VHbHRmVGV4dHVyZU5hbWVzO1xyXG4gICAgICAgICAgICB0aGlzLnVzZU9wZW5QQlIgPSBvcHRpb25zLnVzZU9wZW5QQlIgPz8gdGhpcy51c2VPcGVuUEJSO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVJhbmdlUmVxdWVzdHMgPSBvcHRpb25zLnVzZVJhbmdlUmVxdWVzdHMgPz8gdGhpcy51c2VSYW5nZVJlcXVlc3RzO1xyXG4gICAgICAgICAgICB0aGlzLnVzZVNSR0JCdWZmZXJzID0gb3B0aW9ucy51c2VTUkdCQnVmZmVycyA/PyB0aGlzLnVzZVNSR0JCdWZmZXJzO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlID0gb3B0aW9ucy52YWxpZGF0ZSA/PyB0aGlzLnZhbGlkYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvblBhcnNlZD86ICgobG9hZGVyRGF0YTogSUdMVEZMb2FkZXJEYXRhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcbiAgICAvLyBWMiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNhcHR1cmUgcGVyZm9ybWFuY2UgY291bnRlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVyczogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIG5vZGUgdG8gdXNlIGFzIHRoZSByb290IG9mIHRoZSBoaWVyYXJjaHkgd2hlbiBsb2FkaW5nIHRoZSBzY2VuZSAoZGVmYXVsdDogdW5kZWZpbmVkKS4gSWYgbm90IGRlZmluZWQsIGEgcm9vdCBub2RlIHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkLlxyXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgbnVsbCBpZiB5b3UgZG9uJ3Qgd2FudCBhIHJvb3Qgbm9kZSB0byBiZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VzdG9tUm9vdE5vZGU/OiBOdWxsYWJsZTxUcmFuc2Zvcm1Ob2RlPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgZ2xURiBleHRlbnNpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXh0ZW5zaW9uT3B0aW9uczoge1xyXG4gICAgICAgIC8vIE5PVEU6IFRoaXMgdHlwZSBpcyBkb2luZyB0d28gdGhpbmdzOlxyXG4gICAgICAgIC8vIDEuIEFkZGluZyBhbiBpbXBsaWNpdCAnZW5hYmxlZCcgcHJvcGVydHkgdG8gdGhlIG9wdGlvbnMgZm9yIGVhY2ggZXh0ZW5zaW9uLlxyXG4gICAgICAgIC8vIDIuIENyZWF0aW5nIGEgbWFwcGVkIHR5cGUgb2YgYWxsIHRoZSBvcHRpb25zIG9mIGFsbCB0aGUgZXh0ZW5zaW9ucyB0byBtYWtlIGl0IGp1c3QgbG9vayBsaWtlIGEgY29uc29saWRhdGVkIHBsYWluIG9iamVjdCBpbiBpbnRlbGxpc2Vuc2UgZm9yIHRoZSB1c2VyLlxyXG4gICAgICAgIFtFeHRlbnNpb24gaW4ga2V5b2YgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnNdPzoge1xyXG4gICAgICAgICAgICBbT3B0aW9uIGluIGtleW9mIERlZmF1bHRFeHRlbnNpb25PcHRpb25zPEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zW0V4dGVuc2lvbl0+XTogRGVmYXVsdEV4dGVuc2lvbk9wdGlvbnM8R0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnNbRXh0ZW5zaW9uXT5bT3B0aW9uXTtcclxuICAgICAgICB9O1xyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgZW5hYmxlIGxvZ2dpbmcgZm9yIHRoZSBsb2FkZXIuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgbG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbkNhbWVyYUxvYWRlZD86IChjYW1lcmE6IENhbWVyYSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvbk1hdGVyaWFsTG9hZGVkPzogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25NZXNoTG9hZGVkPzogKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBvblNraW5Mb2FkZWQ/OiAobm9kZTogVHJhbnNmb3JtTm9kZSwgc2tpbm5lZE5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSB0ZXh0dXJlIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IG9uVGV4dHVyZUxvYWRlZD86ICh0ZXh0dXJlOiBCYXNlVGV4dHVyZSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciB0aGUgYXNzZXQgaXMgdmFsaWRhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgb25WYWxpZGF0ZWQ/OiAocmVzdWx0czogR0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cykgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBhIHVybCByZWZlcmVuY2VkIGJ5IHRoZSBhc3NldC5cclxuICAgICAqIEBwYXJhbSB1cmwgdXJsIHJlZmVyZW5jZWQgYnkgdGhlIGFzc2V0XHJcbiAgICAgKiBAcmV0dXJucyBBc3luYyB1cmwgdG8gbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybDogc3RyaW5nKSA9PiBQcm9taXNlLnJlc29sdmUodXJsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGUgbG9hZGVyIGZvciBsb2FkaW5nIGdsVEYgZmlsZXMgaW50byBhIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZGaWxlTG9hZGVyIGV4dGVuZHMgR0xURkxvYWRlck9wdGlvbnMgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSwgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3Rvcnkge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlR0xURjFMb2FkZXI6IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlcjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVHTFRGMkxvYWRlcjogKHBhcmVudDogR0xURkZpbGVMb2FkZXIpID0+IElHTFRGTG9hZGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBnbFRGIGZpbGUgbG9hZGVyLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBsb2FkZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PEdMVEZMb2FkZXJPcHRpb25zPj4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29weUZyb20oT2JqZWN0LmFzc2lnbih7IC4uLkdMVEZMb2FkZXJEZWZhdWx0T3B0aW9ucyB9LCBvcHRpb25zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEJlZ2luIENvbW1vbiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25QYXJzZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUdMVEZMb2FkZXJEYXRhPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uUGFyc2VkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPElHTFRGTG9hZGVyRGF0YT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmFpc2VkIHdoZW4gdGhlIGFzc2V0IGhhcyBiZWVuIHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uUGFyc2VkKGNhbGxiYWNrOiAoKGxvYWRlckRhdGE6IElHTFRGTG9hZGVyRGF0YSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25QYXJzZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25QYXJzZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblBhcnNlZE9ic2VydmVyID0gdGhpcy5vblBhcnNlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBFbmQgQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEJlZ2luIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIGZhbHNlIHRvIGRpc2FibGUgaW5jcmVtZW50YWwgbG9hZGluZyB3aGljaCBkZWxheXMgdGhlIGxvYWRlciBmcm9tIGNhbGxpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdW50aWwgYWZ0ZXIgbG9hZGluZyB0aGUgbWVzaGVzIGFuZCBzaGFkZXJzLlxyXG4gICAgICogVGV4dHVyZXMgYWx3YXlzIGxvYWRzIGFzeW5jaHJvbm91c2x5LiBGb3IgZXhhbXBsZSwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgY2FuIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBsb2FkZWQgbWVzaGVzIHdoZW4gaW5jcmVtZW50YWwgbG9hZGluZyBpcyBkaXNhYmxlZC5cclxuICAgICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbmNyZW1lbnRhbExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBpbiBvcmRlciB0byB3b3JrIHdpdGggaG9tb2dlbmVvdXMgY29vcmRpbmF0ZXMsIGF2YWlsYWJsZSB3aXRoIHNvbWUgY29udmVydGVycyBhbmQgZXhwb3J0ZXJzLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21vZ2VuZW91c19jb29yZGluYXRlcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhvbW9nZW5lb3VzQ29vcmRpbmF0ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRW5kIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBvYnNlcnZhYmxlIGlzIHJhaXNlZCBhcyBzb29uIGFzIHRoZSBtZXNoIG9iamVjdCBpcyBjcmVhdGVkLCBtZWFuaW5nIHNvbWUgZGF0YSBtYXkgbm90IGhhdmUgYmVlbiBzZXR1cCB5ZXQgZm9yIHRoaXMgbWVzaCAodmVydGV4IGRhdGEsIG1vcnBoIHRhcmdldHMsIG1hdGVyaWFsLCAuLi4pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1lc2hMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QWJzdHJhY3RNZXNoPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWVzaExvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxBYnN0cmFjdE1lc2g+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1lc2ggYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBtZXNoLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uTWVzaExvYWRlZChjYWxsYmFjazogKChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTWVzaExvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uTWVzaExvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHNraW4gYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBza2luIG5vZGUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9pbXBvcnRlcnMvZ2xURi9nbFRGU2tpbm5pbmcjaWdub3JpbmctdGhlLXRyYW5zZm9ybS1vZi10aGUtc2tpbm5lZC1tZXNoXHJcbiAgICAgKiBAcGFyYW0gbm9kZSAtIHRoZSB0cmFuc2Zvcm0gbm9kZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBvcmlnaW5hbCBnbFRGIHNraW4gbm9kZSB1c2VkIGZvciBhbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gc2tpbm5lZE5vZGUgLSB0aGUgdHJhbnNmb3JtIG5vZGUgdGhhdCBpcyB0aGUgc2tpbm5lZCBtZXNoIGl0c2VsZiBvciB0aGUgcGFyZW50IG9mIHRoZSBza2lubmVkIG1lc2hlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25Ta2luTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHsgbm9kZTogVHJhbnNmb3JtTm9kZTsgc2tpbm5lZE5vZGU6IFRyYW5zZm9ybU5vZGUgfT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblNraW5Mb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8eyBub2RlOiBUcmFuc2Zvcm1Ob2RlOyBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSB9Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBza2luIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgc2tpbiBub2RlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvaW1wb3J0ZXJzL2dsVEYvZ2xURlNraW5uaW5nI2lnbm9yaW5nLXRoZS10cmFuc2Zvcm0tb2YtdGhlLXNraW5uZWQtbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uU2tpbkxvYWRlZChjYWxsYmFjazogKChub2RlOiBUcmFuc2Zvcm1Ob2RlLCBza2lubmVkTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCkgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Ta2luTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNraW5Mb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblNraW5Mb2FkZWRPYnNlcnZlciA9IHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKGRhdGEpID0+IGNhbGxiYWNrKGRhdGEubm9kZSwgZGF0YS5za2lubmVkTm9kZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8QmFzZVRleHR1cmU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEJhc2VUZXh0dXJlPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSB0ZXh0dXJlIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvblRleHR1cmVMb2FkZWQoY2FsbGJhY2s6ICgodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8TWF0ZXJpYWw+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NYXRlcmlhbExvYWRlZChjYWxsYmFjazogKChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHZvaWQpIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWF0ZXJpYWxMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Q2FtZXJhPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPENhbWVyYT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgY2FtZXJhIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgY2FtZXJhLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uQ2FtZXJhTG9hZGVkKGNhbGxiYWNrOiAoKGNhbWVyYTogQ2FtZXJhKSA9PiB2b2lkKSB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FtZXJhTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aCBMT0RzLCByYWlzZWQgd2hlbiBhbGwgb2YgdGhlIExPRHMgYXJlIGNvbXBsZXRlLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRob3V0IExPRHMsIHJhaXNlZCB3aGVuIHRoZSBtb2RlbCBpcyBjb21wbGV0ZSwgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIGxvYWRlciByZXNvbHZlcyB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uQ29tcGxldGVPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkNvbXBsZXRlT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPHZvaWQ+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGggTE9EcywgcmFpc2VkIHdoZW4gYWxsIG9mIHRoZSBMT0RzIGFyZSBjb21wbGV0ZS5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aG91dCBMT0RzLCByYWlzZWQgd2hlbiB0aGUgbW9kZWwgaXMgY29tcGxldGUsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsb2FkZXIgcmVzb2x2ZXMgdGhlIHJldHVybmVkIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25Db21wbGV0ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNvbXBsZXRlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25Db21wbGV0ZU9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25Db21wbGV0ZU9ic2VydmVyID0gdGhpcy5vbkNvbXBsZXRlT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkVycm9yT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkVycm9yT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPGFueT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uRXJyb3IoY2FsbGJhY2s6IChyZWFzb246IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkVycm9yT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25FcnJvck9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25FcnJvck9ic2VydmVyID0gdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRGlzcG9zZU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRGlzcG9zZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgdGhlIGxvYWRlciBpcyBkaXNwb3NlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkRpc3Bvc2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRGlzcG9zZU9ic2VydmVyID0gdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqIFNldCBhZGRpdGlvbmFsIG9wdGlvbnMgZm9yIGEgbG9hZGVyIGV4dGVuc2lvbiBpbiB0aGlzIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8SUdMVEZMb2FkZXJFeHRlbnNpb24+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJFeHRlbnNpb24+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciBhIGxvYWRlciBleHRlbnNpb24gaXMgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkV4dGVuc2lvbkxvYWRlZChjYWxsYmFjazogKGV4dGVuc2lvbjogSUdMVEZMb2FkZXJFeHRlbnNpb24pID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25FeHRlbnNpb25Mb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIgPSB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIGxvZ2dpbmcgaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsb2dnaW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2dnaW5nRW5hYmxlZCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbG9nZ2luZ0VuYWJsZWQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2dpbmdFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IHRoaXMuX2xvZ0VuYWJsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nID0gdGhpcy5fbG9nRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBjYXB0dXJlIHBlcmZvcm1hbmNlIGNvdW50ZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckVuYWJsZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9zdGFydFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCBhZnRlciB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdGUgaXMgc2V0IHRvIHRydWUuIFRoZSBldmVudCBkYXRhIGlzIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvblZhbGlkYXRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVmFsaWRhdGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCBhZnRlciB0aGUgYXNzZXQgaXMgdmFsaWRhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uVmFsaWRhdGVkKGNhbGxiYWNrOiAocmVzdWx0czogR0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cykgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25WYWxpZGF0ZWRPYnNlcnZlciA9IHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBOdWxsYWJsZTxJR0xURkxvYWRlcj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NDYWxsYmFjaz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgX3JlcXVlc3RzID0gbmV3IEFycmF5PElGaWxlUmVxdWVzdEluZm8+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2FkZXIgKFwiZ2x0ZlwiKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXh0ZW5zaW9ucyA9IEdMVEZGaWxlTG9hZGVyTWV0YWRhdGEuZXh0ZW5zaW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBsb2FkZXIsIHJlbGVhc2VzIHJlc291cmNlcyBkdXJpbmcgbG9hZCwgYW5kIGNhbmNlbHMgYW55IG91dHN0YW5kaW5nIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybCkgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXY6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgdXNlQXJyYXlCdWZmZXI/OiBib29sZWFuLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgbmFtZT86IHN0cmluZ1xyXG4gICAgKTogTnVsbGFibGU8SUZpbGVSZXF1ZXN0PiB7XHJcbiAgICAgICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhmaWxlT3JVcmwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCaW5hcnkoc2NlbmUsIGZpbGVPclVybCwgcm9vdFVybCwgb25TdWNjZXNzLCBvbkVycm9yLCBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrID0gb25Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSAoZmlsZU9yVXJsIGFzIEZpbGUpLm5hbWUgfHwgVG9vbHMuR2V0RmlsZW5hbWUoZmlsZU9yVXJsIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSYW5nZVJlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiZ2xURiB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiByYW5nZSByZXF1ZXN0cyBhcmUgZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVxdWVzdDogSUZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT2JzZXJ2YWJsZTogbmV3IE9ic2VydmFibGU8SUZpbGVSZXF1ZXN0PigpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQnVmZmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2ViUmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLCBgYnl0ZXM9JHtieXRlT2Zmc2V0fS0ke2J5dGVPZmZzZXQgKyBieXRlTGVuZ3RoIC0gMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IDAsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKG5ldyBEYXRhUmVhZGVyKGRhdGFCdWZmZXIpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhmaWxlUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyhsb2FkZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVSZXF1ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGZpbGVPclVybCxcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIsIDAsIChkYXRhIGFzIEFycmF5QnVmZmVyKS5ieXRlTGVuZ3RoKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICBmaWxlT3JVcmwsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBkYXRhIGFzIHN0cmluZywgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoeyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YSBhcyBzdHJpbmcpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQmluYXJ5KFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHVua25vd24sIHJlc3BvbnNlVVJMPzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QsIGV4Y2VwdGlvbj86IExvYWRGaWxlRXJyb3IpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpLCByb290VXJsLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMoXHJcbiAgICAgICAgICAgIG5ldyBEYXRhUmVhZGVyKHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRWaWV3QXN5bmMoZGF0YSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBkYXRhLmJ5dGVMZW5ndGgsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAobG9hZGVyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yID8gKGVycm9yKSA9PiBvbkVycm9yKHVuZGVmaW5lZCwgZXJyb3IpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbG9nKGBMb2FkaW5nICR7ZmlsZU5hbWUgfHwgXCJcIn1gKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZGVyID0gdGhpcy5fZ2V0TG9hZGVyKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLmltcG9ydE1lc2hBc3luYyhtZXNoZXNOYW1lcywgc2NlbmUsIG51bGwsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsIGZpbGVOYW1lPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZEFzeW5jKHNjZW5lLCBkYXRhLCByb290VXJsLCBvblByb2dyZXNzLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3NldENvbnRhaW5lckFzeW5jKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICk6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGFzc2V0IGNvbnRhaW5lci5cclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEFzc2V0Q29udGFpbmVyKHNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBtYXRlcmlhbHMvdGV4dHVyZXMgd2hlbiBsb2FkaW5nIHRvIGFkZCB0byBjb250YWluZXJcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxzOiBBcnJheTxNYXRlcmlhbD4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlczogQXJyYXk8QmFzZVRleHR1cmU+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVzLnB1c2godGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFzOiBBcnJheTxDYW1lcmE+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZCgoY2FtZXJhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFzLnB1c2goY2FtZXJhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXJzOiBBcnJheTxNb3JwaFRhcmdldE1hbmFnZXI+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKG1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcnMucHVzaChtZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5pbXBvcnRNZXNoQXN5bmMobnVsbCwgc2NlbmUsIGNvbnRhaW5lciwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmdlb21ldHJpZXMsIHJlc3VsdC5nZW9tZXRyaWVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tZXNoZXMsIHJlc3VsdC5tZXNoZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnBhcnRpY2xlU3lzdGVtcywgcmVzdWx0LnBhcnRpY2xlU3lzdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuc2tlbGV0b25zLCByZXN1bHQuc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5hbmltYXRpb25Hcm91cHMsIHJlc3VsdC5hbmltYXRpb25Hcm91cHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1hdGVyaWFscywgbWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci50ZXh0dXJlcywgdGV4dHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmxpZ2h0cywgcmVzdWx0LmxpZ2h0cyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudHJhbnNmb3JtTm9kZXMsIHJlc3VsdC50cmFuc2Zvcm1Ob2Rlcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuY2FtZXJhcywgY2FtZXJhcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubW9ycGhUYXJnZXRNYW5hZ2VycywgbW9ycGhUYXJnZXRNYW5hZ2Vycyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuRGlyZWN0TG9hZChkYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR0xURkZpbGVMb2FkZXJNZXRhZGF0YS5jYW5EaXJlY3RMb2FkKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXJlY3RMb2FkKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcImJhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8IC8vIHRoaXMgaXMgdGVjaG5pY2FsbHkgaW5jb3JyZWN0LCBidXQgd2lsbCBjb250aW51ZSB0byBzdXBwb3J0IGZvciBiYWNrY29tcGF0LlxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCI7YmFzZTY0LFwiICsgR0xURk1hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpIHx8XHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcIm1vZGVsL2dsdGYtYmluYXJ5O2Jhc2U2NCxcIiArIEdMVEZNYWdpY0Jhc2U2NEVuY29kZWQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gRGVjb2RlQmFzZTY0VXJsVG9CaW5hcnkoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIDAsIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgbmV3IERhdGFSZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IHJlYWRBc3luYyhhcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZShzY2VuZSwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjYWxsYmFjayB0aGF0IGFsbG93cyBjdXN0b20gaGFuZGxpbmcgb2YgdGhlIHJvb3QgdXJsIGJhc2VkIG9uIHRoZSByZXNwb25zZSB1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCB0aGUgb3JpZ2luYWwgcm9vdCB1cmxcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVVSTCB0aGUgcmVzcG9uc2UgdXJsIGlmIGF2YWlsYWJsZVxyXG4gICAgICogQHJldHVybnMgdGhlIG5ldyByb290IHVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV3cml0ZVJvb3RVUkw/KHJvb3RVcmw6IHN0cmluZywgcmVzcG9uc2VVUkw/OiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBsdWdpbihvcHRpb25zOiBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMpOiBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHTFRGRmlsZUxvYWRlcihvcHRpb25zW0dMVEZGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxvYWRlciBzdGF0ZSBvciBudWxsIGlmIHRoZSBsb2FkZXIgaXMgbm90IGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsb2FkZXJTdGF0ZSgpOiBOdWxsYWJsZTxHTFRGTG9hZGVyU3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgc3RhdGUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uTG9hZGVyU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFzc2V0IGlzIGNvbXBsZXRlbHkgbG9hZGVkLlxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aGVuQ29tcGxldGVBc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yT2JzZXJ2YWJsZS5hZGRPbmNlKChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldFN0YXRlKHN0YXRlOiBHTFRGTG9hZGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRlclN0YXRlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9sb2coR0xURkxvYWRlclN0YXRlW3RoaXMuX3N0YXRlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9sb2FkRmlsZShcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVzZUFycmF5QnVmZmVyPzogYm9vbGVhbixcclxuICAgICAgICBvbkVycm9yPzogKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uT3BlbmVkPzogKHJlcXVlc3Q6IFdlYlJlcXVlc3QpID0+IHZvaWRcclxuICAgICk6IElGaWxlUmVxdWVzdCB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNjZW5lLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgZmlsZU9yVXJsLFxyXG4gICAgICAgICAgICBvblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Qcm9ncmVzcyhldmVudCwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIHVzZUFycmF5QnVmZmVyLFxyXG4gICAgICAgICAgICBvbkVycm9yLFxyXG4gICAgICAgICAgICBvbk9wZW5lZFxyXG4gICAgICAgICkgYXMgSUZpbGVSZXF1ZXN0SW5mbztcclxuICAgICAgICByZXF1ZXN0Lm9uQ29tcGxldGVPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBsZW5ndGggY29tcHV0YWJsZSB0byBiZSB0cnVlIHNpbmNlIHdlIGNhbiBndWFyYW50ZWUgdGhlIGRhdGEgaXMgbG9hZGVkLlxyXG4gICAgICAgICAgICByZXF1ZXN0Ll9sZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVxdWVzdC5fdG90YWwgPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblByb2dyZXNzKGV2ZW50OiBQcm9ncmVzc0V2ZW50LCByZXF1ZXN0OiBJRmlsZVJlcXVlc3RJbmZvKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlO1xyXG4gICAgICAgIHJlcXVlc3QuX2xvYWRlZCA9IGV2ZW50LmxvYWRlZDtcclxuICAgICAgICByZXF1ZXN0Ll90b3RhbCA9IGV2ZW50LnRvdGFsO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoQ29tcHV0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGxvYWRlZCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGUgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll9sb2FkZWQgPT09IHVuZGVmaW5lZCB8fCByZXF1ZXN0Ll90b3RhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlICYmIHJlcXVlc3QuX2xlbmd0aENvbXB1dGFibGU7XHJcbiAgICAgICAgICAgIGxvYWRlZCArPSByZXF1ZXN0Ll9sb2FkZWQ7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHJlcXVlc3QuX3RvdGFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjayh7XHJcbiAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IGxlbmd0aENvbXB1dGFibGUsXHJcbiAgICAgICAgICAgIGxvYWRlZDogbG9hZGVkLFxyXG4gICAgICAgICAgICB0b3RhbDogbGVuZ3RoQ29tcHV0YWJsZSA/IHRvdGFsIDogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92YWxpZGF0ZShzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksIHJvb3RVcmwgPSBcIlwiLCBmaWxlTmFtZSA9IFwiXCIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoXCJWYWxpZGF0ZSBKU09OXCIpO1xyXG4gICAgICAgIEdMVEZWYWxpZGF0aW9uLlZhbGlkYXRlQXN5bmMoZGF0YSwgcm9vdFVybCwgZmlsZU5hbWUsICh1cmkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jKHJvb3RVcmwgKyB1cmkpLnRoZW4oKHVybCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjZW5lLl9sb2FkRmlsZUFzeW5jKHVybCwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEsIDAsIGRhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEZhaWxlZCB0byB2YWxpZGF0ZTogJHtyZWFzb24ubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExvYWRlcihsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpOiBJR0xURkxvYWRlciB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSAoPGFueT5sb2FkZXJEYXRhLmpzb24pLmFzc2V0IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2coYEFzc2V0IHZlcnNpb246ICR7YXNzZXQudmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5taW5WZXJzaW9uICYmIHRoaXMuX2xvZyhgQXNzZXQgbWluaW11bSB2ZXJzaW9uOiAke2Fzc2V0Lm1pblZlcnNpb259YCk7XHJcbiAgICAgICAgYXNzZXQuZ2VuZXJhdG9yICYmIHRoaXMuX2xvZyhgQXNzZXQgZ2VuZXJhdG9yOiAke2Fzc2V0LmdlbmVyYXRvcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3NldC5taW5WZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmICghbWluVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5fY29tcGFyZVZlcnNpb24obWluVmVyc2lvbiwgeyBtYWpvcjogMiwgbWlub3I6IDAgfSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvbXBhdGlibGUgbWluaW11bSB2ZXJzaW9uOiBcIiArIGFzc2V0Lm1pblZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXJzOiB7IFtrZXk6IG51bWJlcl06IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlciB9ID0ge1xyXG4gICAgICAgICAgICAxOiBHTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIsXHJcbiAgICAgICAgICAgIDI6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXIgPSBjcmVhdGVMb2FkZXJzW3ZlcnNpb24ubWFqb3JdO1xyXG4gICAgICAgIGlmICghY3JlYXRlTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9hZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlSnNvbihqc29uOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICB0aGlzLl9sb2coYEpTT04gbGVuZ3RoOiAke2pzb24ubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBtYWdpYyArIHZlcnNpb24gKyBsZW5ndGggKyBqc29uIGxlbmd0aCArIGpzb24gZm9ybWF0XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDIwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQmluYXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgTWFnaWM6IDB4NDY1NDZjNjcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWdpYyA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICBpZiAobWFnaWMgIT09IEJpbmFyeS5NYWdpYykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcIlVuZXhwZWN0ZWQgbWFnaWM6IFwiICsgbWFnaWMsIEVycm9yQ29kZXMuR0xURkxvYWRlclVuZXhwZWN0ZWRNYWdpY0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZyhgQmluYXJ5IHZlcnNpb246ICR7dmVyc2lvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VSYW5nZVJlcXVlc3RzICYmIGxlbmd0aCAhPT0gZGF0YVJlYWRlci5idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYExlbmd0aCBpbiBoZWFkZXIgZG9lcyBub3QgbWF0Y2ggYWN0dWFsIGRhdGEgbGVuZ3RoOiAke2xlbmd0aH0gIT0gJHtkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5wYWNrZWQ6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPjtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZCA9IHRoaXMuX3VucGFja0JpbmFyeVYxQXN5bmMoZGF0YVJlYWRlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIlVucGFjayBCaW5hcnlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdW5wYWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ29udGVudEZvcm1hdCA9IHtcclxuICAgICAgICAgICAgSlNPTjogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEZvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudEZvcm1hdCAhPT0gQ29udGVudEZvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjb250ZW50IGZvcm1hdDogJHtjb250ZW50Rm9ybWF0fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUxlbmd0aCA9IGxlbmd0aCAtIGRhdGFSZWFkZXIuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNvbnRlbnRMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgaWYgKGJvZHlMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGJvZHlMZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeVYyQXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlciwgbGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IENodW5rRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAweDRlNGY1MzRhLFxyXG4gICAgICAgICAgICBCSU46IDB4MDA0ZTQ5NDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBoZWFkZXIuXHJcbiAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGlmIChjaHVua0Zvcm1hdCAhPT0gQ2h1bmtGb3JtYXQuSlNPTikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBjaHVuayBmb3JtYXQgaXMgbm90IEpTT05cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCYWlsIGlmIHRoZXJlIGFyZSBubyBvdGhlciBjaHVua3MuXHJcbiAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKGNodW5rTGVuZ3RoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBhbmQgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgbmV4dCBjaHVuay5cclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGggKyA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNodW5rTGVuZ3RoKSksIGJpbjogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZEFzeW5jID0gKCk6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtGb3JtYXQgPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNodW5rRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5KU09OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgSlNPTiBjaHVua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5CSU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGNodW5rTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB1bnJlY29nbml6ZWQgY2h1bmtGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJlYWRlci5za2lwQnl0ZXMoY2h1bmtMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDgpLnRoZW4ocmVhZEFzeW5jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRBc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKTogTnVsbGFibGU8eyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAodmVyc2lvbiA9PT0gXCIxLjBcIiB8fCB2ZXJzaW9uID09PSBcIjEuMC4xXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ham9yOiAxLFxyXG4gICAgICAgICAgICAgICAgbWlub3I6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9ICh2ZXJzaW9uICsgXCJcIikubWF0Y2goL14oXFxkKylcXC4oXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9jb21wYXJlVmVyc2lvbihhOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSwgYjogeyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhLm1ham9yID4gYi5tYWpvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPCBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWlub3IgPiBiLm1pbm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA8IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nU3BhY2VzID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xyXG4gICAgcHJpdmF0ZSBfbG9nSW5kZW50TGV2ZWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSW5kZW50TGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIC0tdGhpcy5fbG9nSW5kZW50TGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nRW5hYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSBHTFRGRmlsZUxvYWRlci5fbG9nU3BhY2VzLnN1YnN0cmluZygwLCB0aGlzLl9sb2dJbmRlbnRMZXZlbCAqIDIpO1xyXG4gICAgICAgIExvZ2dlci5Mb2coYCR7c3BhY2VzfSR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dEaXNhYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVG9vbHMuU3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5FbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuXHJcblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IEdMVEZGaWxlTG9hZGVyKCkpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBnaXRodWIvbm8tdGhlbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG5pbXBvcnQgdHlwZSAqIGFzIEdMVEYyIGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgbGV0IEdMVEZWYWxpZGF0b3I6IEdMVEYyLklHTFRGVmFsaWRhdG9yO1xyXG5cclxuLy8gV29ya2VyR2xvYmFsU2NvcGVcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmRlY2xhcmUgZnVuY3Rpb24gcG9zdE1lc3NhZ2UobWVzc2FnZTogYW55LCB0cmFuc2Zlcj86IGFueVtdKTogdm9pZDtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQXN5bmMoXHJcbiAgICBkYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5LFxyXG4gICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIGdldEV4dGVybmFsUmVzb3VyY2U6ICh1cmk6IHN0cmluZykgPT4gUHJvbWlzZTxVaW50OEFycmF5PlxyXG4pOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IEdMVEYyLklHTFRGVmFsaWRhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgZXh0ZXJuYWxSZXNvdXJjZUZ1bmN0aW9uOiBnZXRFeHRlcm5hbFJlc291cmNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUpIHtcclxuICAgICAgICBvcHRpb25zLnVyaSA9IHJvb3RVcmwgPT09IFwiZmlsZTpcIiA/IGZpbGVOYW1lIDogcm9vdFVybCArIGZpbGVOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlQnl0ZXMoZGF0YSwgb3B0aW9ucykgOiBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlU3RyaW5nKGRhdGEsIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0aGF0IGdldHMgY29udmVydGVkIHRvIGEgYmxvYiB1cmwgdG8gcGFzcyBpbnRvIGEgd29ya2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gV29ya2VyRnVuYygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlczogQXJyYXk8eyByZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZCB9PiA9IFtdO1xyXG5cclxuICAgIG9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhkYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidmFsaWRhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdGVBc3luYyhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHVyaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2VcIiwgaW5kZXg6IGluZGV4LCB1cmk6IHVyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZXNvbHZlXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZWplY3RcIiwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBnbFRGIHZhbGlkYXRpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgdGhlIGdsVEYgdmFsaWRhdG9yLlxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZWYWxpZGF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24uIERlZmF1bHRzIHRvIGB7IHVybDogXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2dsdGZfdmFsaWRhdG9yLmpzXCIgfWAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlndXJhdGlvbjogSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgICB1cmw6IGAke1Rvb2xzLl9EZWZhdWx0Q2RuVXJsfS9nbHRmX3ZhbGlkYXRvci5qc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkU2NyaXB0UHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIGEgZ2xURiBhc3NldCB1c2luZyB0aGUgZ2xURi1WYWxpZGF0b3IuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgSlNPTiBvZiBhIGdsVEYgb3IgdGhlIGFycmF5IGJ1ZmZlciBvZiBhIGJpbmFyeSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHRoZSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgVGhlIGZpbGUgbmFtZSBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBnZXRFeHRlcm5hbFJlc291cmNlIFRoZSBjYWxsYmFjayB0byBnZXQgZXh0ZXJuYWwgcmVzb3VyY2VzIGZvciB0aGUgZ2xURiB2YWxpZGF0b3JcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGdsVEYgdmFsaWRhdGlvbiByZXN1bHRzIG9uY2UgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWYWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXksXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZTogKHVyaTogc3RyaW5nKSA9PiBQcm9taXNlPFVpbnQ4QXJyYXk+XHJcbiAgICApOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJDb250ZW50ID0gYCR7VmFsaWRhdGVBc3luY30oJHtXb3JrZXJGdW5jfSkoKWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JrZXJCbG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbd29ya2VyQ29udGVudF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCIgfSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJCbG9iVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yOiBFcnJvckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdldEV4dGVybmFsUmVzb3VyY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZShkYXRhLnVyaSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZXNvbHZlXCIsIGluZGV4OiBkYXRhLmluZGV4LCB2YWx1ZTogdmFsdWUgfSwgW3ZhbHVlLmJ1ZmZlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiLCBpbmRleDogZGF0YS5pbmRleCwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZXNvbHZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRhdGUucmVqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEucmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbk1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImluaXRcIiwgdXJsOiBUb29scy5HZXRCYWJ5bG9uU2NyaXB0VVJMKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTbGljZSB0aGUgZGF0YSB0byBhdm9pZCBjb3B5aW5nIHRoZSB3aG9sZSBhcnJheSBidWZmZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VkRGF0YSA9IGRhdGEuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZVwiLCBkYXRhOiBzbGljZWREYXRhLCByb290VXJsOiByb290VXJsLCBmaWxlTmFtZTogZmlsZU5hbWUgfSwgW3NsaWNlZERhdGEuYnVmZmVyXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlXCIsIGRhdGE6IGRhdGEsIHJvb3RVcmw6IHJvb3RVcmwsIGZpbGVOYW1lOiBmaWxlTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9Mb2FkU2NyaXB0UHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fTG9hZFNjcmlwdFByb21pc2UgPSBUb29scy5Mb2FkQmFieWxvblNjcmlwdEFzeW5jKHRoaXMuQ29uZmlndXJhdGlvbi51cmwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fTG9hZFNjcmlwdFByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGVBc3luYyhkYXRhLCByb290VXJsLCBmaWxlTmFtZSwgZ2V0RXh0ZXJuYWxSZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=