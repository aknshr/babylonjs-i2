"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_BVH_bvhFileLoader_js"],{

/***/ "../loaders/dist/BVH/bvhFileLoader.js":
/*!********************************************!*\
  !*** ../loaders/dist/BVH/bvhFileLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BVHFileLoader: () => (/* binding */ BVHFileLoader)
/* harmony export */ });
/* harmony import */ var core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var core_assetContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/assetContainer */ "../core/dist/assetContainer.js");
/* harmony import */ var core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Animations/animation */ "../core/dist/Animations/animation.js");
/* harmony import */ var _bvhFileLoader_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bvhFileLoader.metadata */ "../loaders/dist/BVH/bvhFileLoader.metadata.js");
/* harmony import */ var _bvhLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bvhLoader */ "../loaders/dist/BVH/bvhLoader.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * @experimental
 * BVH file type loader.
 * This is a babylon scene loader plugin.
 */
class BVHFileLoader {
    /**
     * Creates loader for bvh motion files
     * @param loadingOptions - Options for the bvh loader
     */
    constructor(loadingOptions) {
        /**
         * Name of the loader ("bvh")
         */
        this.name = _bvhFileLoader_metadata__WEBPACK_IMPORTED_MODULE_3__.BVHFileLoaderMetadata.name;
        /** @internal */
        this.extensions = _bvhFileLoader_metadata__WEBPACK_IMPORTED_MODULE_3__.BVHFileLoaderMetadata.extensions;
        this._loadingOptions = { ...BVHFileLoader._DefaultLoadingOptions, ...(loadingOptions ?? {}) };
    }
    static get _DefaultLoadingOptions() {
        return {
            loopMode: core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONLOOPMODE_CYCLE,
        };
    }
    /** @internal */
    createPlugin(options) {
        return new BVHFileLoader(options[_bvhFileLoader_metadata__WEBPACK_IMPORTED_MODULE_3__.BVHFileLoaderMetadata.name]);
    }
    /**
     * If the data string can be loaded directly.
     * @param data - direct load data
     * @returns if the data can be loaded directly
     */
    canDirectLoad(data) {
        return this.isBvhHeader(data);
    }
    isBvhHeader(text) {
        return text.split("\n")[0] == "HIERARCHY";
    }
    isNotBvhHeader(text) {
        return !this.isBvhHeader(text);
    }
    /**
     * Imports  from the loaded gaussian splatting data and adds them to the scene
     * @param _meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the bvh data to load
     * @returns a promise containing the loaded skeletons and animations
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    importMeshAsync(_meshesNames, scene, data) {
        if (typeof data !== "string") {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject("BVH loader expects string data.");
        }
        if (this.isNotBvhHeader(data)) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject("BVH loader expects HIERARCHY header.");
        }
        try {
            const skeleton = (0,_bvhLoader__WEBPACK_IMPORTED_MODULE_4__.ReadBvh)(data, scene, null, this._loadingOptions);
            return Promise.resolve({
                meshes: [],
                particleSystems: [],
                skeletons: [skeleton],
                animationGroups: [],
                transformNodes: [],
                geometries: [],
                lights: [],
                spriteManagers: [],
            });
        }
        catch (e) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject(e);
        }
    }
    /**
     * Imports all objects from the loaded bvh data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the bvh data to load
     * @returns a promise which completes when objects have been loaded to the scene
     */
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    loadAsync(scene, data) {
        if (typeof data !== "string") {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject("BVH loader expects string data.");
        }
        if (this.isNotBvhHeader(data)) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject("BVH loader expects HIERARCHY header.");
        }
        // eslint-disable-next-line github/no-then
        return this.importMeshAsync(null, scene, data).then(() => {
            // return void
        });
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @returns The loaded asset container
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    loadAssetContainerAsync(scene, data) {
        if (typeof data !== "string") {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject("BVH loader expects string data.");
        }
        if (this.isNotBvhHeader(data)) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject("BVH loader expects HIERARCHY header.");
        }
        const assetContainer = new core_assetContainer__WEBPACK_IMPORTED_MODULE_1__.AssetContainer(scene);
        try {
            const skeleton = (0,_bvhLoader__WEBPACK_IMPORTED_MODULE_4__.ReadBvh)(data, scene, assetContainer, this._loadingOptions);
            assetContainer.skeletons.push(skeleton);
            return Promise.resolve(assetContainer);
        }
        catch (e) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            return Promise.reject(e);
        }
    }
}
(0,core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.RegisterSceneLoaderPlugin)(new BVHFileLoader());


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

/***/ "../loaders/dist/BVH/bvhLoader.js":
/*!****************************************!*\
  !*** ../loaders/dist/BVH/bvhLoader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadBvh: () => (/* binding */ ReadBvh)
/* harmony export */ });
/* harmony import */ var core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Animations/animation */ "../core/dist/Animations/animation.js");
/* harmony import */ var core_Bones_bone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Bones/bone */ "../core/dist/Bones/bone.js");
/* harmony import */ var core_Bones_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Bones/skeleton */ "../core/dist/Bones/skeleton.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






const _XPosition = "Xposition";
const _YPosition = "Yposition";
const _ZPosition = "Zposition";
const _XRotation = "Xrotation";
const _YRotation = "Yrotation";
const _ZRotation = "Zrotation";
const _HierarchyNode = "HIERARCHY";
const _MotionNode = "MOTION";
class LoaderContext {
    constructor(skeleton) {
        this.loopMode = core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONLOOPMODE_CYCLE;
        this.list = [];
        this.root = CreateBVHNode();
        this.numFrames = 0;
        this.frameRate = 0;
        this.skeleton = skeleton;
    }
}
function CreateBVHNode() {
    return {
        name: "",
        type: "",
        offset: new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
        channels: [],
        children: [],
        frames: [],
        parent: null,
    };
}
function CreateBVHKeyFrame() {
    return {
        frame: 0,
        position: new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
        rotation: new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion(),
    };
}
/**
 * Converts the BVH node's offset to a Babylon matrix
 * @param node - The BVH node to convert
 * @returns The converted matrix
 */
function BoneOffset(node) {
    const x = node.offset.x;
    const y = node.offset.y;
    const z = node.offset.z;
    return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.Translation(x, y, z);
}
/**
 * Creates animations for the BVH node
 * @param node - The BVH node to create animations for
 * @param context - The loader context
 * @returns The created animations
 */
function CreateAnimations(node, context) {
    if (node.frames.length === 0) {
        return [];
    }
    const animations = [];
    // Create position animation if there are position channels
    const hasPosition = node.channels.some((c) => c === _XPosition || c === _YPosition || c === _ZPosition);
    // Create rotation animation if there are rotation channels
    const hasRotation = node.channels.some((c) => c === _XRotation || c === _YRotation || c === _ZRotation);
    const posAnim = new core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation(`${node.name}_pos`, "position", context.frameRate, core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3, context.loopMode);
    const rotAnim = new core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation(`${node.name}_rot`, "rotationQuaternion", context.frameRate, core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_QUATERNION, context.loopMode);
    const posKeys = [];
    const rotKeys = [];
    for (let i = 0; i < node.frames.length; i++) {
        const frame = node.frames[i];
        if (hasPosition && frame.position) {
            posKeys.push({
                frame: frame.frame,
                value: frame.position.clone(),
            });
        }
        if (hasRotation) {
            rotKeys.push({
                frame: frame.frame,
                value: frame.rotation.clone(),
            });
        }
    }
    if (posKeys.length > 0) {
        posAnim.setKeys(posKeys);
        animations.push(posAnim);
    }
    if (rotKeys.length > 0) {
        rotAnim.setKeys(rotKeys);
        animations.push(rotAnim);
    }
    return animations;
}
/**
 * Converts a BVH node to a Babylon bone
 * @param node - The BVH node to convert
 * @param parent - The parent bone
 * @param context - The loader context
 */
function ConvertNode(node, parent, context) {
    const matrix = BoneOffset(node);
    const bone = new core_Bones_bone__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name, context.skeleton, parent, matrix);
    // Create animation for this bone
    const animations = CreateAnimations(node, context);
    for (const animation of animations) {
        if (animation.getKeys() && animation.getKeys().length > 0) {
            bone.animations.push(animation);
        }
    }
    for (const child of node.children) {
        ConvertNode(child, bone, context);
    }
}
/**
 * Recursively reads data from a single frame into the bone hierarchy.
 * The bone hierarchy has to be structured in the same order as the BVH file.
 * keyframe data is stored in bone.frames.
 * @param data - splitted string array (frame values), values are shift()ed
 * @param frameNumber - playback time for this keyframe
 * @param bone - the bone to read frame data from
 * @param tokenIndex - the index of the token to read
 */
function ReadFrameData(data, frameNumber, bone, tokenIndex) {
    if (bone.type === "ENDSITE") {
        // end sites have no motion data
        return;
    }
    // add keyframe
    const keyframe = CreateBVHKeyFrame();
    keyframe.frame = frameNumber;
    keyframe.position = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    keyframe.rotation = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion();
    bone.frames.push(keyframe);
    let combinedRotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.Identity();
    // parse values for each channel in node
    for (let i = 0; i < bone.channels.length; ++i) {
        const channel = bone.channels[i];
        const value = data[tokenIndex.i++];
        if (!value) {
            continue;
        }
        const parsedValue = parseFloat(value.trim());
        if (channel.endsWith("position")) {
            switch (channel) {
                case _XPosition:
                    keyframe.position.x = parsedValue;
                    break;
                case _YPosition:
                    keyframe.position.y = parsedValue;
                    break;
                case _ZPosition:
                    keyframe.position.z = parsedValue;
                    break;
            }
        }
        else if (channel.endsWith("rotation")) {
            const angle = core_Misc_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.ToRadians(parsedValue);
            let rotationMatrix;
            switch (channel) {
                case _XRotation:
                    rotationMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.RotationX(angle);
                    break;
                case _YRotation:
                    rotationMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.RotationY(angle);
                    break;
                case _ZRotation:
                    rotationMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.RotationZ(angle);
                    break;
            }
            combinedRotation = rotationMatrix.multiply(combinedRotation);
        }
    }
    core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Quaternion.FromRotationMatrixToRef(combinedRotation, keyframe.rotation);
    // parse child nodes
    for (const child of bone.children) {
        ReadFrameData(data, frameNumber, child, tokenIndex);
    }
}
/**
 * Recursively parses the HIERARCHY section of the BVH file
 * @param lines - all lines of the file. lines are consumed as we go along
 * @param firstLine - line containing the node type and name e.g. "JOINT hip"
 * @param parent - the parent node for hierarchy
 * @param context - the loader context containing the list of nodes and other data
 * @returns a BVH node including children
 */
function ReadNode(lines, firstLine, parent, context) {
    const node = CreateBVHNode();
    node.parent = parent;
    context.list.push(node);
    // parse node type and name.
    let tokens = firstLine.trim().split(/\s+/);
    if (tokens[0].toUpperCase() === "END" && tokens[1].toUpperCase() === "SITE") {
        node.type = "ENDSITE";
        node.name = "ENDSITE"; // bvh end sites have no name
    }
    else {
        node.name = tokens[1];
        node.type = tokens[0].toUpperCase();
    }
    // opening bracket
    if (lines.shift()?.trim() != "{") {
        throw new Error("Expected opening { after type & name");
    }
    // parse OFFSET
    const tokensSplit = lines.shift()?.trim().split(/\s+/);
    if (!tokensSplit) {
        throw new Error("Unexpected end of file: missing OFFSET");
    }
    tokens = tokensSplit;
    if (tokens[0].toUpperCase() != "OFFSET") {
        throw new Error("Expected OFFSET, but got: " + tokens[0]);
    }
    if (tokens.length != 4) {
        throw new Error("OFFSET: Invalid number of values");
    }
    const offset = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]));
    if (isNaN(offset.x) || isNaN(offset.y) || isNaN(offset.z)) {
        throw new Error("OFFSET: Invalid values");
    }
    node.offset = offset;
    // parse CHANNELS definitions
    if (node.type != "ENDSITE") {
        tokens = lines.shift()?.trim().split(/\s+/);
        if (!tokens) {
            throw new Error("Unexpected end of file: missing CHANNELS");
        }
        if (tokens[0].toUpperCase() != "CHANNELS") {
            throw new Error("Expected CHANNELS definition");
        }
        const numChannels = parseInt(tokens[1]);
        // Skip CHANNELS and the number of channels
        node.channels = tokens.splice(2, numChannels);
        node.children = [];
    }
    // read children
    while (lines.length > 0) {
        const line = lines.shift()?.trim();
        if (line === "}") {
            // Finish reading the node
            return node;
        }
        else if (line) {
            node.children.push(ReadNode(lines, line, node, context));
        }
    }
    throw new Error("Unexpected end of file: missing closing brace");
}
/**
 * Reads a BVH file, returns a skeleton
 * @param text - The BVH file content
 * @param scene - The scene to add the skeleton to
 * @param assetContainer - The asset container to add the skeleton to
 * @param loadingOptions - The loading options
 * @returns The skeleton
 */
function ReadBvh(text, scene, assetContainer, loadingOptions) {
    const lines = text.split("\n");
    const { loopMode } = loadingOptions;
    scene._blockEntityCollection = !!assetContainer;
    const skeleton = new core_Bones_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton("", "", scene);
    skeleton._parentContainer = assetContainer;
    scene._blockEntityCollection = false;
    const context = new LoaderContext(skeleton);
    context.loopMode = loopMode;
    // read model structure
    const firstLine = lines.shift();
    if (!firstLine || firstLine.trim().toUpperCase() !== _HierarchyNode) {
        throw new Error("HIERARCHY expected");
    }
    const nodeLine = lines.shift();
    if (!nodeLine) {
        throw new Error("Unexpected end of file after HIERARCHY");
    }
    const root = ReadNode(lines, nodeLine.trim(), null, context);
    // read motion data
    const motionLine = lines.shift();
    if (!motionLine || motionLine.trim().toUpperCase() !== _MotionNode) {
        throw new Error("MOTION expected");
    }
    const framesLine = lines.shift();
    if (!framesLine) {
        throw new Error("Unexpected end of file before frame count");
    }
    const framesTokens = framesLine.trim().split(/[\s]+/);
    if (framesTokens.length < 2) {
        throw new Error("Invalid frame count line");
    }
    // number of frames
    const numFrames = parseInt(framesTokens[1]);
    if (isNaN(numFrames)) {
        throw new Error("Failed to read number of frames.");
    }
    context.numFrames = numFrames;
    // frame time
    const frameTimeLine = lines.shift();
    if (!frameTimeLine) {
        throw new Error("Unexpected end of file before frame time");
    }
    const frameTimeTokens = frameTimeLine.trim().split(/[\s]+/);
    if (frameTimeTokens.length < 3) {
        throw new Error("Invalid frame time line");
    }
    const frameTime = parseFloat(frameTimeTokens[2]);
    if (isNaN(frameTime)) {
        throw new Error("Failed to read frame time.");
    }
    if (frameTime <= 0) {
        throw new Error("Failed to read frame time. Invalid value " + frameTime);
    }
    context.frameRate = 1 / frameTime;
    // read frame data line by line
    for (let i = 0; i < numFrames; ++i) {
        const frameLine = lines.shift();
        if (!frameLine) {
            continue;
        }
        const tokens = frameLine.trim().split(/[\s]+/) || [];
        ReadFrameData(tokens, i, root, { i: 0 });
    }
    context.root = root;
    ConvertNode(context.root, null, context);
    context.skeleton.returnToRest();
    return context.skeleton;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X0JWSF9idmhGaWxlTG9hZGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7QUFJQTtBQUNBO0FBV0E7OztBQUdBO0FBQ0E7QUFkQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFRQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvQlZIL2J2aEZpbGVMb2FkZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9CVkgvYnZoTG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3RvcnksIElTY2VuZUxvYWRlckFzeW5jUmVzdWx0LCBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XG5pbXBvcnQgeyBSZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xuaW1wb3J0IHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xuaW1wb3J0IHR5cGUgeyBCVkhMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL2J2aExvYWRpbmdPcHRpb25zXCI7XG5pbXBvcnQgeyBCVkhGaWxlTG9hZGVyTWV0YWRhdGEgfSBmcm9tIFwiLi9idmhGaWxlTG9hZGVyLm1ldGFkYXRhXCI7XG5pbXBvcnQgeyBSZWFkQnZoIH0gZnJvbSBcIi4vYnZoTG9hZGVyXCI7XG5cbmRlY2xhcmUgbW9kdWxlIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBidmggbG9hZGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgW0JWSEZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXTogUGFydGlhbDxCVkhMb2FkaW5nT3B0aW9ucz47XG4gICAgfVxufVxuXG4vKipcbiAqIEBleHBlcmltZW50YWxcbiAqIEJWSCBmaWxlIHR5cGUgbG9hZGVyLlxuICogVGhpcyBpcyBhIGJhYnlsb24gc2NlbmUgbG9hZGVyIHBsdWdpbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEJWSEZpbGVMb2FkZXIgaW1wbGVtZW50cyBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSB7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgbG9hZGVyIChcImJ2aFwiKVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gQlZIRmlsZUxvYWRlck1ldGFkYXRhLm5hbWU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIHJlYWRvbmx5IGV4dGVuc2lvbnMgPSBCVkhGaWxlTG9hZGVyTWV0YWRhdGEuZXh0ZW5zaW9ucztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvYWRpbmdPcHRpb25zOiBCVkhMb2FkaW5nT3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgbG9hZGVyIGZvciBidmggbW90aW9uIGZpbGVzXG4gICAgICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGJ2aCBsb2FkZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihsb2FkaW5nT3B0aW9ucz86IFBhcnRpYWw8UmVhZG9ubHk8QlZITG9hZGluZ09wdGlvbnM+Pikge1xuICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucyA9IHsgLi4uQlZIRmlsZUxvYWRlci5fRGVmYXVsdExvYWRpbmdPcHRpb25zLCAuLi4obG9hZGluZ09wdGlvbnMgPz8ge30pIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IF9EZWZhdWx0TG9hZGluZ09wdGlvbnMoKTogQlZITG9hZGluZ09wdGlvbnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9vcE1vZGU6IEFuaW1hdGlvbi5BTklNQVRJT05MT09QTU9ERV9DWUNMRSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGNyZWF0ZVBsdWdpbihvcHRpb25zOiBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMpOiBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYyB7XG4gICAgICAgIHJldHVybiBuZXcgQlZIRmlsZUxvYWRlcihvcHRpb25zW0JWSEZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGRhdGEgc3RyaW5nIGNhbiBiZSBsb2FkZWQgZGlyZWN0bHkuXG4gICAgICogQHBhcmFtIGRhdGEgLSBkaXJlY3QgbG9hZCBkYXRhXG4gICAgICogQHJldHVybnMgaWYgdGhlIGRhdGEgY2FuIGJlIGxvYWRlZCBkaXJlY3RseVxuICAgICAqL1xuICAgIHB1YmxpYyBjYW5EaXJlY3RMb2FkKGRhdGE6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0J2aEhlYWRlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNCdmhIZWFkZXIodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFwiXFxuXCIpWzBdID09IFwiSElFUkFSQ0hZXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTm90QnZoSGVhZGVyKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNCdmhIZWFkZXIodGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wb3J0cyAgZnJvbSB0aGUgbG9hZGVkIGdhdXNzaWFuIHNwbGF0dGluZyBkYXRhIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXG4gICAgICogQHBhcmFtIF9tZXNoZXNOYW1lcyBhIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIG9mIHRoZSBtZXNoIG5hbWVzIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBmcm9tIHRoZSBmaWxlXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgbWVzaGVzIHNob3VsZCBiZSBhZGRlZCB0b1xuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBidmggZGF0YSB0byBsb2FkXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIGxvYWRlZCBza2VsZXRvbnMgYW5kIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgcHVibGljIGltcG9ydE1lc2hBc3luYyhfbWVzaGVzTmFtZXM6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZCwgc2NlbmU6IFNjZW5lLCBkYXRhOiB1bmtub3duKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQlZIIGxvYWRlciBleHBlY3RzIHN0cmluZyBkYXRhLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc05vdEJ2aEhlYWRlcihkYXRhIGFzIHN0cmluZykpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQlZIIGxvYWRlciBleHBlY3RzIEhJRVJBUkNIWSBoZWFkZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IFJlYWRCdmgoZGF0YSwgc2NlbmUsIG51bGwsIHRoaXMuX2xvYWRpbmdPcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgIG1lc2hlczogW10sXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBza2VsZXRvbnM6IFtza2VsZXRvbl0sXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogW10sXG4gICAgICAgICAgICAgICAgZ2VvbWV0cmllczogW10sXG4gICAgICAgICAgICAgICAgbGlnaHRzOiBbXSxcbiAgICAgICAgICAgICAgICBzcHJpdGVNYW5hZ2VyczogW10sXG4gICAgICAgICAgICB9IGFzIElTY2VuZUxvYWRlckFzeW5jUmVzdWx0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gdGhlIGxvYWRlZCBidmggZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhlIG9iamVjdHMgc2hvdWxkIGJlIGFkZGVkIHRvXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGJ2aCBkYXRhIHRvIGxvYWRcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2Ugd2hpY2ggY29tcGxldGVzIHdoZW4gb2JqZWN0cyBoYXZlIGJlZW4gbG9hZGVkIHRvIHRoZSBzY2VuZVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogdW5rbm93bik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQlZIIGxvYWRlciBleHBlY3RzIHN0cmluZyBkYXRhLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc05vdEJ2aEhlYWRlcihkYXRhIGFzIHN0cmluZykpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiQlZIIGxvYWRlciBleHBlY3RzIEhJRVJBUkNIWSBoZWFkZXIuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXG4gICAgICAgIHJldHVybiB0aGlzLmltcG9ydE1lc2hBc3luYyhudWxsLCBzY2VuZSwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyByZXR1cm4gdm9pZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGludG8gYW4gYXNzZXQgY29udGFpbmVyLlxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gbG9hZCBpbnRvXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gaW1wb3J0XG4gICAgICogQHJldHVybnMgVGhlIGxvYWRlZCBhc3NldCBjb250YWluZXJcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgcHVibGljIGxvYWRBc3NldENvbnRhaW5lckFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogdW5rbm93bik6IFByb21pc2U8QXNzZXRDb250YWluZXI+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkJWSCBsb2FkZXIgZXhwZWN0cyBzdHJpbmcgZGF0YS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNOb3RCdmhIZWFkZXIoZGF0YSBhcyBzdHJpbmcpKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkJWSCBsb2FkZXIgZXhwZWN0cyBISUVSQVJDSFkgaGVhZGVyLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhc3NldENvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IFJlYWRCdmgoZGF0YSwgc2NlbmUsIGFzc2V0Q29udGFpbmVyLCB0aGlzLl9sb2FkaW5nT3B0aW9ucyk7XG4gICAgICAgICAgICBhc3NldENvbnRhaW5lci5za2VsZXRvbnMucHVzaChza2VsZXRvbik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFzc2V0Q29udGFpbmVyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IEJWSEZpbGVMb2FkZXIoKSk7XG4iLCJpbXBvcnQgdHlwZSB7IElBbmltYXRpb25LZXkgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zXCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgQm9uZSB9IGZyb20gXCJjb3JlL0JvbmVzL2JvbmVcIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcImNvcmUvQm9uZXMvc2tlbGV0b25cIjtcbmltcG9ydCB7IE1hdHJpeCwgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBCVkhMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL2J2aExvYWRpbmdPcHRpb25zXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xuXG5jb25zdCBfWFBvc2l0aW9uID0gXCJYcG9zaXRpb25cIjtcbmNvbnN0IF9ZUG9zaXRpb24gPSBcIllwb3NpdGlvblwiO1xuY29uc3QgX1pQb3NpdGlvbiA9IFwiWnBvc2l0aW9uXCI7XG5jb25zdCBfWFJvdGF0aW9uID0gXCJYcm90YXRpb25cIjtcbmNvbnN0IF9ZUm90YXRpb24gPSBcIllyb3RhdGlvblwiO1xuY29uc3QgX1pSb3RhdGlvbiA9IFwiWnJvdGF0aW9uXCI7XG5cbmNvbnN0IF9IaWVyYXJjaHlOb2RlID0gXCJISUVSQVJDSFlcIjtcbmNvbnN0IF9Nb3Rpb25Ob2RlID0gXCJNT1RJT05cIjtcblxuY2xhc3MgTG9hZGVyQ29udGV4dCB7XG4gICAgbG9vcE1vZGU6IG51bWJlciA9IEFuaW1hdGlvbi5BTklNQVRJT05MT09QTU9ERV9DWUNMRTtcbiAgICBsaXN0OiBJQlZITm9kZVtdID0gW107XG4gICAgcm9vdDogSUJWSE5vZGUgPSBDcmVhdGVCVkhOb2RlKCk7XG4gICAgbnVtRnJhbWVzOiBudW1iZXIgPSAwO1xuICAgIGZyYW1lUmF0ZTogbnVtYmVyID0gMDtcbiAgICBza2VsZXRvbjogU2tlbGV0b247XG5cbiAgICBjb25zdHJ1Y3Rvcihza2VsZXRvbjogU2tlbGV0b24pIHtcbiAgICAgICAgdGhpcy5za2VsZXRvbiA9IHNrZWxldG9uO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIElCVkhOb2RlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIG9mZnNldDogVmVjdG9yMztcbiAgICBjaGFubmVsczogc3RyaW5nW107XG4gICAgY2hpbGRyZW46IElCVkhOb2RlW107XG4gICAgZnJhbWVzOiBJQlZIS2V5RnJhbWVbXTtcbiAgICBwYXJlbnQ6IE51bGxhYmxlPElCVkhOb2RlPjtcbn1cblxuaW50ZXJmYWNlIElCVkhLZXlGcmFtZSB7XG4gICAgZnJhbWU6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogVmVjdG9yMztcbiAgICByb3RhdGlvbjogUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlQlZITm9kZSgpOiBJQlZITm9kZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJcIixcbiAgICAgICAgb2Zmc2V0OiBuZXcgVmVjdG9yMygpLFxuICAgICAgICBjaGFubmVsczogW10sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgZnJhbWVzOiBbXSxcbiAgICAgICAgcGFyZW50OiBudWxsLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIENyZWF0ZUJWSEtleUZyYW1lKCk6IElCVkhLZXlGcmFtZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygpLFxuICAgICAgICByb3RhdGlvbjogbmV3IFF1YXRlcm5pb24oKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBCVkggbm9kZSdzIG9mZnNldCB0byBhIEJhYnlsb24gbWF0cml4XG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBCVkggbm9kZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIG1hdHJpeFxuICovXG5mdW5jdGlvbiBCb25lT2Zmc2V0KG5vZGU6IElCVkhOb2RlKTogTWF0cml4IHtcbiAgICBjb25zdCB4ID0gbm9kZS5vZmZzZXQueDtcbiAgICBjb25zdCB5ID0gbm9kZS5vZmZzZXQueTtcbiAgICBjb25zdCB6ID0gbm9kZS5vZmZzZXQuejtcbiAgICByZXR1cm4gTWF0cml4LlRyYW5zbGF0aW9uKHgsIHksIHopO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5pbWF0aW9ucyBmb3IgdGhlIEJWSCBub2RlXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBCVkggbm9kZSB0byBjcmVhdGUgYW5pbWF0aW9ucyBmb3JcbiAqIEBwYXJhbSBjb250ZXh0IC0gVGhlIGxvYWRlciBjb250ZXh0XG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBhbmltYXRpb25zXG4gKi9cbmZ1bmN0aW9uIENyZWF0ZUFuaW1hdGlvbnMobm9kZTogSUJWSE5vZGUsIGNvbnRleHQ6IExvYWRlckNvbnRleHQpOiBBbmltYXRpb25bXSB7XG4gICAgaWYgKG5vZGUuZnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uczogQW5pbWF0aW9uW10gPSBbXTtcblxuICAgIC8vIENyZWF0ZSBwb3NpdGlvbiBhbmltYXRpb24gaWYgdGhlcmUgYXJlIHBvc2l0aW9uIGNoYW5uZWxzXG4gICAgY29uc3QgaGFzUG9zaXRpb24gPSBub2RlLmNoYW5uZWxzLnNvbWUoKGMpID0+IGMgPT09IF9YUG9zaXRpb24gfHwgYyA9PT0gX1lQb3NpdGlvbiB8fCBjID09PSBfWlBvc2l0aW9uKTtcblxuICAgIC8vIENyZWF0ZSByb3RhdGlvbiBhbmltYXRpb24gaWYgdGhlcmUgYXJlIHJvdGF0aW9uIGNoYW5uZWxzXG4gICAgY29uc3QgaGFzUm90YXRpb24gPSBub2RlLmNoYW5uZWxzLnNvbWUoKGMpID0+IGMgPT09IF9YUm90YXRpb24gfHwgYyA9PT0gX1lSb3RhdGlvbiB8fCBjID09PSBfWlJvdGF0aW9uKTtcblxuICAgIGNvbnN0IHBvc0FuaW0gPSBuZXcgQW5pbWF0aW9uKGAke25vZGUubmFtZX1fcG9zYCwgXCJwb3NpdGlvblwiLCBjb250ZXh0LmZyYW1lUmF0ZSwgQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMywgY29udGV4dC5sb29wTW9kZSk7XG5cbiAgICBjb25zdCByb3RBbmltID0gbmV3IEFuaW1hdGlvbihgJHtub2RlLm5hbWV9X3JvdGAsIFwicm90YXRpb25RdWF0ZXJuaW9uXCIsIGNvbnRleHQuZnJhbWVSYXRlLCBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OLCBjb250ZXh0Lmxvb3BNb2RlKTtcblxuICAgIGNvbnN0IHBvc0tleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xuICAgIGNvbnN0IHJvdEtleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmcmFtZSA9IG5vZGUuZnJhbWVzW2ldO1xuXG4gICAgICAgIGlmIChoYXNQb3NpdGlvbiAmJiBmcmFtZS5wb3NpdGlvbikge1xuICAgICAgICAgICAgcG9zS2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBmcmFtZTogZnJhbWUuZnJhbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZyYW1lLnBvc2l0aW9uLmNsb25lKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNSb3RhdGlvbikge1xuICAgICAgICAgICAgcm90S2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBmcmFtZTogZnJhbWUuZnJhbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZyYW1lLnJvdGF0aW9uLmNsb25lKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcG9zQW5pbS5zZXRLZXlzKHBvc0tleXMpO1xuICAgICAgICBhbmltYXRpb25zLnB1c2gocG9zQW5pbSk7XG4gICAgfVxuXG4gICAgaWYgKHJvdEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICByb3RBbmltLnNldEtleXMocm90S2V5cyk7XG4gICAgICAgIGFuaW1hdGlvbnMucHVzaChyb3RBbmltKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5pbWF0aW9ucztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIEJWSCBub2RlIHRvIGEgQmFieWxvbiBib25lXG4gKiBAcGFyYW0gbm9kZSAtIFRoZSBCVkggbm9kZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0gcGFyZW50IC0gVGhlIHBhcmVudCBib25lXG4gKiBAcGFyYW0gY29udGV4dCAtIFRoZSBsb2FkZXIgY29udGV4dFxuICovXG5mdW5jdGlvbiBDb252ZXJ0Tm9kZShub2RlOiBJQlZITm9kZSwgcGFyZW50OiBOdWxsYWJsZTxCb25lPiwgY29udGV4dDogTG9hZGVyQ29udGV4dCkge1xuICAgIGNvbnN0IG1hdHJpeCA9IEJvbmVPZmZzZXQobm9kZSk7XG4gICAgY29uc3QgYm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSwgY29udGV4dC5za2VsZXRvbiwgcGFyZW50LCBtYXRyaXgpO1xuXG4gICAgLy8gQ3JlYXRlIGFuaW1hdGlvbiBmb3IgdGhpcyBib25lXG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IENyZWF0ZUFuaW1hdGlvbnMobm9kZSwgY29udGV4dCk7XG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYW5pbWF0aW9ucykge1xuICAgICAgICBpZiAoYW5pbWF0aW9uLmdldEtleXMoKSAmJiBhbmltYXRpb24uZ2V0S2V5cygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGJvbmUuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgQ29udmVydE5vZGUoY2hpbGQsIGJvbmUsIGNvbnRleHQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSByZWFkcyBkYXRhIGZyb20gYSBzaW5nbGUgZnJhbWUgaW50byB0aGUgYm9uZSBoaWVyYXJjaHkuXG4gKiBUaGUgYm9uZSBoaWVyYXJjaHkgaGFzIHRvIGJlIHN0cnVjdHVyZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIEJWSCBmaWxlLlxuICoga2V5ZnJhbWUgZGF0YSBpcyBzdG9yZWQgaW4gYm9uZS5mcmFtZXMuXG4gKiBAcGFyYW0gZGF0YSAtIHNwbGl0dGVkIHN0cmluZyBhcnJheSAoZnJhbWUgdmFsdWVzKSwgdmFsdWVzIGFyZSBzaGlmdCgpZWRcbiAqIEBwYXJhbSBmcmFtZU51bWJlciAtIHBsYXliYWNrIHRpbWUgZm9yIHRoaXMga2V5ZnJhbWVcbiAqIEBwYXJhbSBib25lIC0gdGhlIGJvbmUgdG8gcmVhZCBmcmFtZSBkYXRhIGZyb21cbiAqIEBwYXJhbSB0b2tlbkluZGV4IC0gdGhlIGluZGV4IG9mIHRoZSB0b2tlbiB0byByZWFkXG4gKi9cbmZ1bmN0aW9uIFJlYWRGcmFtZURhdGEoZGF0YTogc3RyaW5nW10sIGZyYW1lTnVtYmVyOiBudW1iZXIsIGJvbmU6IElCVkhOb2RlLCB0b2tlbkluZGV4OiB7IGk6IG51bWJlciB9KSB7XG4gICAgaWYgKGJvbmUudHlwZSA9PT0gXCJFTkRTSVRFXCIpIHtcbiAgICAgICAgLy8gZW5kIHNpdGVzIGhhdmUgbm8gbW90aW9uIGRhdGFcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFkZCBrZXlmcmFtZVxuICAgIGNvbnN0IGtleWZyYW1lID0gQ3JlYXRlQlZIS2V5RnJhbWUoKTtcbiAgICBrZXlmcmFtZS5mcmFtZSA9IGZyYW1lTnVtYmVyO1xuICAgIGtleWZyYW1lLnBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcbiAgICBrZXlmcmFtZS5yb3RhdGlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbiAgICBib25lLmZyYW1lcy5wdXNoKGtleWZyYW1lKTtcblxuICAgIGxldCBjb21iaW5lZFJvdGF0aW9uID0gTWF0cml4LklkZW50aXR5KCk7XG5cbiAgICAvLyBwYXJzZSB2YWx1ZXMgZm9yIGVhY2ggY2hhbm5lbCBpbiBub2RlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib25lLmNoYW5uZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBib25lLmNoYW5uZWxzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbdG9rZW5JbmRleC5pKytdO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUudHJpbSgpKTtcbiAgICAgICAgaWYgKGNoYW5uZWwuZW5kc1dpdGgoXCJwb3NpdGlvblwiKSkge1xuICAgICAgICAgICAgc3dpdGNoIChjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfWFBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICBrZXlmcmFtZS5wb3NpdGlvbi54ID0gcGFyc2VkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX1lQb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAga2V5ZnJhbWUucG9zaXRpb24ueSA9IHBhcnNlZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9aUG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgIGtleWZyYW1lLnBvc2l0aW9uLnogPSBwYXJzZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbC5lbmRzV2l0aChcInJvdGF0aW9uXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IFRvb2xzLlRvUmFkaWFucyhwYXJzZWRWYWx1ZSk7XG4gICAgICAgICAgICBsZXQgcm90YXRpb25NYXRyaXg6IE1hdHJpeDtcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgX1hSb3RhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb25NYXRyaXggPSBNYXRyaXguUm90YXRpb25YKGFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfWVJvdGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IE1hdHJpeC5Sb3RhdGlvblkoYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9aUm90YXRpb246XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gTWF0cml4LlJvdGF0aW9uWihhbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tYmluZWRSb3RhdGlvbiA9IHJvdGF0aW9uTWF0cml4IS5tdWx0aXBseShjb21iaW5lZFJvdGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFF1YXRlcm5pb24uRnJvbVJvdGF0aW9uTWF0cml4VG9SZWYoY29tYmluZWRSb3RhdGlvbiwga2V5ZnJhbWUucm90YXRpb24pO1xuXG4gICAgLy8gcGFyc2UgY2hpbGQgbm9kZXNcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGJvbmUuY2hpbGRyZW4pIHtcbiAgICAgICAgUmVhZEZyYW1lRGF0YShkYXRhLCBmcmFtZU51bWJlciwgY2hpbGQsIHRva2VuSW5kZXgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBwYXJzZXMgdGhlIEhJRVJBUkNIWSBzZWN0aW9uIG9mIHRoZSBCVkggZmlsZVxuICogQHBhcmFtIGxpbmVzIC0gYWxsIGxpbmVzIG9mIHRoZSBmaWxlLiBsaW5lcyBhcmUgY29uc3VtZWQgYXMgd2UgZ28gYWxvbmdcbiAqIEBwYXJhbSBmaXJzdExpbmUgLSBsaW5lIGNvbnRhaW5pbmcgdGhlIG5vZGUgdHlwZSBhbmQgbmFtZSBlLmcuIFwiSk9JTlQgaGlwXCJcbiAqIEBwYXJhbSBwYXJlbnQgLSB0aGUgcGFyZW50IG5vZGUgZm9yIGhpZXJhcmNoeVxuICogQHBhcmFtIGNvbnRleHQgLSB0aGUgbG9hZGVyIGNvbnRleHQgY29udGFpbmluZyB0aGUgbGlzdCBvZiBub2RlcyBhbmQgb3RoZXIgZGF0YVxuICogQHJldHVybnMgYSBCVkggbm9kZSBpbmNsdWRpbmcgY2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gUmVhZE5vZGUobGluZXM6IHN0cmluZ1tdLCBmaXJzdExpbmU6IHN0cmluZywgcGFyZW50OiBOdWxsYWJsZTxJQlZITm9kZT4sIGNvbnRleHQ6IExvYWRlckNvbnRleHQpOiBJQlZITm9kZSB7XG4gICAgY29uc3Qgbm9kZSA9IENyZWF0ZUJWSE5vZGUoKTtcbiAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICBjb250ZXh0Lmxpc3QucHVzaChub2RlKTtcblxuICAgIC8vIHBhcnNlIG5vZGUgdHlwZSBhbmQgbmFtZS5cbiAgICBsZXQgdG9rZW5zOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IGZpcnN0TGluZS50cmltKCkuc3BsaXQoL1xccysvKTtcblxuICAgIGlmICh0b2tlbnNbMF0udG9VcHBlckNhc2UoKSA9PT0gXCJFTkRcIiAmJiB0b2tlbnNbMV0udG9VcHBlckNhc2UoKSA9PT0gXCJTSVRFXCIpIHtcbiAgICAgICAgbm9kZS50eXBlID0gXCJFTkRTSVRFXCI7XG4gICAgICAgIG5vZGUubmFtZSA9IFwiRU5EU0lURVwiOyAvLyBidmggZW5kIHNpdGVzIGhhdmUgbm8gbmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUubmFtZSA9IHRva2Vuc1sxXTtcbiAgICAgICAgbm9kZS50eXBlID0gdG9rZW5zWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gb3BlbmluZyBicmFja2V0XG4gICAgaWYgKGxpbmVzLnNoaWZ0KCk/LnRyaW0oKSAhPSBcIntcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBvcGVuaW5nIHsgYWZ0ZXIgdHlwZSAmIG5hbWVcIik7XG4gICAgfVxuXG4gICAgLy8gcGFyc2UgT0ZGU0VUXG4gICAgY29uc3QgdG9rZW5zU3BsaXQgPSBsaW5lcy5zaGlmdCgpPy50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgICBpZiAoIXRva2Vuc1NwbGl0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGU6IG1pc3NpbmcgT0ZGU0VUXCIpO1xuICAgIH1cbiAgICB0b2tlbnMgPSB0b2tlbnNTcGxpdDtcblxuICAgIGlmICh0b2tlbnNbMF0udG9VcHBlckNhc2UoKSAhPSBcIk9GRlNFVFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIE9GRlNFVCwgYnV0IGdvdDogXCIgKyB0b2tlbnNbMF0pO1xuICAgIH1cbiAgICBpZiAodG9rZW5zLmxlbmd0aCAhPSA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9GRlNFVDogSW52YWxpZCBudW1iZXIgb2YgdmFsdWVzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IG5ldyBWZWN0b3IzKHBhcnNlRmxvYXQodG9rZW5zWzFdKSwgcGFyc2VGbG9hdCh0b2tlbnNbMl0pLCBwYXJzZUZsb2F0KHRva2Vuc1szXSkpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldC54KSB8fCBpc05hTihvZmZzZXQueSkgfHwgaXNOYU4ob2Zmc2V0LnopKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9GRlNFVDogSW52YWxpZCB2YWx1ZXNcIik7XG4gICAgfVxuXG4gICAgbm9kZS5vZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICAvLyBwYXJzZSBDSEFOTkVMUyBkZWZpbml0aW9uc1xuICAgIGlmIChub2RlLnR5cGUgIT0gXCJFTkRTSVRFXCIpIHtcbiAgICAgICAgdG9rZW5zID0gbGluZXMuc2hpZnQoKT8udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIGlmICghdG9rZW5zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBmaWxlOiBtaXNzaW5nIENIQU5ORUxTXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRva2Vuc1swXS50b1VwcGVyQ2FzZSgpICE9IFwiQ0hBTk5FTFNcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgQ0hBTk5FTFMgZGVmaW5pdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG51bUNoYW5uZWxzID0gcGFyc2VJbnQodG9rZW5zWzFdKTtcbiAgICAgICAgLy8gU2tpcCBDSEFOTkVMUyBhbmQgdGhlIG51bWJlciBvZiBjaGFubmVsc1xuICAgICAgICBub2RlLmNoYW5uZWxzID0gdG9rZW5zLnNwbGljZSgyLCBudW1DaGFubmVscyk7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICB9XG5cbiAgICAvLyByZWFkIGNoaWxkcmVuXG4gICAgd2hpbGUgKGxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzLnNoaWZ0KCk/LnRyaW0oKTtcblxuICAgICAgICBpZiAobGluZSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCByZWFkaW5nIHRoZSBub2RlXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChsaW5lKSB7XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goUmVhZE5vZGUobGluZXMsIGxpbmUsIG5vZGUsIGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGU6IG1pc3NpbmcgY2xvc2luZyBicmFjZVwiKTtcbn1cblxuLyoqXG4gKiBSZWFkcyBhIEJWSCBmaWxlLCByZXR1cm5zIGEgc2tlbGV0b25cbiAqIEBwYXJhbSB0ZXh0IC0gVGhlIEJWSCBmaWxlIGNvbnRlbnRcbiAqIEBwYXJhbSBzY2VuZSAtIFRoZSBzY2VuZSB0byBhZGQgdGhlIHNrZWxldG9uIHRvXG4gKiBAcGFyYW0gYXNzZXRDb250YWluZXIgLSBUaGUgYXNzZXQgY29udGFpbmVyIHRvIGFkZCB0aGUgc2tlbGV0b24gdG9cbiAqIEBwYXJhbSBsb2FkaW5nT3B0aW9ucyAtIFRoZSBsb2FkaW5nIG9wdGlvbnNcbiAqIEByZXR1cm5zIFRoZSBza2VsZXRvblxuICovXG5leHBvcnQgZnVuY3Rpb24gUmVhZEJ2aCh0ZXh0OiBzdHJpbmcsIHNjZW5lOiBTY2VuZSwgYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPiwgbG9hZGluZ09wdGlvbnM6IEJWSExvYWRpbmdPcHRpb25zKTogU2tlbGV0b24ge1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcblxuICAgIGNvbnN0IHsgbG9vcE1vZGUgfSA9IGxvYWRpbmdPcHRpb25zO1xuXG4gICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhYXNzZXRDb250YWluZXI7XG4gICAgY29uc3Qgc2tlbGV0b24gPSBuZXcgU2tlbGV0b24oXCJcIiwgXCJcIiwgc2NlbmUpO1xuICAgIHNrZWxldG9uLl9wYXJlbnRDb250YWluZXIgPSBhc3NldENvbnRhaW5lcjtcbiAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IExvYWRlckNvbnRleHQoc2tlbGV0b24pO1xuICAgIGNvbnRleHQubG9vcE1vZGUgPSBsb29wTW9kZTtcblxuICAgIC8vIHJlYWQgbW9kZWwgc3RydWN0dXJlXG4gICAgY29uc3QgZmlyc3RMaW5lID0gbGluZXMuc2hpZnQoKTtcbiAgICBpZiAoIWZpcnN0TGluZSB8fCBmaXJzdExpbmUudHJpbSgpLnRvVXBwZXJDYXNlKCkgIT09IF9IaWVyYXJjaHlOb2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhJRVJBUkNIWSBleHBlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlTGluZSA9IGxpbmVzLnNoaWZ0KCk7XG4gICAgaWYgKCFub2RlTGluZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGVuZCBvZiBmaWxlIGFmdGVyIEhJRVJBUkNIWVwiKTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdCA9IFJlYWROb2RlKGxpbmVzLCBub2RlTGluZS50cmltKCksIG51bGwsIGNvbnRleHQpO1xuXG4gICAgLy8gcmVhZCBtb3Rpb24gZGF0YVxuICAgIGNvbnN0IG1vdGlvbkxpbmUgPSBsaW5lcy5zaGlmdCgpO1xuICAgIGlmICghbW90aW9uTGluZSB8fCBtb3Rpb25MaW5lLnRyaW0oKS50b1VwcGVyQ2FzZSgpICE9PSBfTW90aW9uTm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNT1RJT04gZXhwZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWVzTGluZSA9IGxpbmVzLnNoaWZ0KCk7XG4gICAgaWYgKCFmcmFtZXNMaW5lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUgYmVmb3JlIGZyYW1lIGNvdW50XCIpO1xuICAgIH1cbiAgICBjb25zdCBmcmFtZXNUb2tlbnMgPSBmcmFtZXNMaW5lLnRyaW0oKS5zcGxpdCgvW1xcc10rLyk7XG4gICAgaWYgKGZyYW1lc1Rva2Vucy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZnJhbWUgY291bnQgbGluZVwiKTtcbiAgICB9XG5cbiAgICAvLyBudW1iZXIgb2YgZnJhbWVzXG4gICAgY29uc3QgbnVtRnJhbWVzID0gcGFyc2VJbnQoZnJhbWVzVG9rZW5zWzFdKTtcbiAgICBpZiAoaXNOYU4obnVtRnJhbWVzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcmVhZCBudW1iZXIgb2YgZnJhbWVzLlwiKTtcbiAgICB9XG4gICAgY29udGV4dC5udW1GcmFtZXMgPSBudW1GcmFtZXM7XG5cbiAgICAvLyBmcmFtZSB0aW1lXG4gICAgY29uc3QgZnJhbWVUaW1lTGluZSA9IGxpbmVzLnNoaWZ0KCk7XG4gICAgaWYgKCFmcmFtZVRpbWVMaW5lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZW5kIG9mIGZpbGUgYmVmb3JlIGZyYW1lIHRpbWVcIik7XG4gICAgfVxuICAgIGNvbnN0IGZyYW1lVGltZVRva2VucyA9IGZyYW1lVGltZUxpbmUudHJpbSgpLnNwbGl0KC9bXFxzXSsvKTtcbiAgICBpZiAoZnJhbWVUaW1lVG9rZW5zLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBmcmFtZSB0aW1lIGxpbmVcIik7XG4gICAgfVxuICAgIGNvbnN0IGZyYW1lVGltZSA9IHBhcnNlRmxvYXQoZnJhbWVUaW1lVG9rZW5zWzJdKTtcbiAgICBpZiAoaXNOYU4oZnJhbWVUaW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcmVhZCBmcmFtZSB0aW1lLlwiKTtcbiAgICB9XG4gICAgaWYgKGZyYW1lVGltZSA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZWFkIGZyYW1lIHRpbWUuIEludmFsaWQgdmFsdWUgXCIgKyBmcmFtZVRpbWUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZnJhbWVSYXRlID0gMSAvIGZyYW1lVGltZTtcblxuICAgIC8vIHJlYWQgZnJhbWUgZGF0YSBsaW5lIGJ5IGxpbmVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUZyYW1lczsgKytpKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lTGluZSA9IGxpbmVzLnNoaWZ0KCk7XG4gICAgICAgIGlmICghZnJhbWVMaW5lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbnMgPSBmcmFtZUxpbmUudHJpbSgpLnNwbGl0KC9bXFxzXSsvKSB8fCBbXTtcbiAgICAgICAgUmVhZEZyYW1lRGF0YSh0b2tlbnMsIGksIHJvb3QsIHsgaTogMCB9KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJvb3QgPSByb290O1xuXG4gICAgQ29udmVydE5vZGUoY29udGV4dC5yb290LCBudWxsLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuc2tlbGV0b24ucmV0dXJuVG9SZXN0KCk7XG4gICAgcmV0dXJuIGNvbnRleHQuc2tlbGV0b247XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9