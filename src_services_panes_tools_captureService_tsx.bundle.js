"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["src_services_panes_tools_captureService_tsx"],{

/***/ "../core/dist/Materials/Textures/Procedurals/customProceduralTexture.js":
/*!******************************************************************************!*\
  !*** ../core/dist/Materials/Textures/Procedurals/customProceduralTexture.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomProceduralTexture: () => (/* binding */ CustomProceduralTexture)
/* harmony export */ });
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var _proceduralTexture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proceduralTexture */ "../core/dist/Materials/Textures/Procedurals/proceduralTexture.js");
/* harmony import */ var _Misc_webRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Misc/webRequest */ "../core/dist/Misc/webRequest.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/proceduralTextures#creating-custom-procedural-textures
 */
class CustomProceduralTexture extends _proceduralTexture__WEBPACK_IMPORTED_MODULE_4__.ProceduralTexture {
    /**
     * Instantiates a new Custom Procedural Texture.
     * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
     * Custom Procedural textures are the easiest way to create your own procedural in your application.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/proceduralTextures#creating-custom-procedural-textures
     * @param name Define the name of the texture
     * @param texturePath Define the folder path containing all the custom texture related files (config, shaders...)
     * @param size Define the size of the texture to create
     * @param scene Define the scene the texture belongs to
     * @param fallbackTexture Define a fallback texture in case there were issues to create the custom texture
     * @param generateMipMaps Define if the texture should creates mip maps or not
     * @param skipJson Define a boolena indicating that there is no json config file to load
     */
    constructor(name, texturePath, size, scene, fallbackTexture, generateMipMaps, skipJson) {
        super(name, size, null, scene, fallbackTexture, generateMipMaps);
        this._animate = true;
        this._time = 0;
        this._texturePath = texturePath;
        if (fallbackTexture && !(fallbackTexture instanceof _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_3__.Texture)) {
            skipJson = !!fallbackTexture.skipJson;
        }
        if (!skipJson) {
            //Try to load json
            this._loadJson(texturePath);
        }
        else {
            this.setFragment(this._texturePath);
        }
        this.refreshRate = 1;
    }
    _loadJson(jsonUrl) {
        const noConfigFile = () => {
            try {
                this.setFragment(this._texturePath);
            }
            catch (ex) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("No json or ShaderStore or DOM element found for CustomProceduralTexture");
            }
        };
        const configFileUrl = jsonUrl + "/config.json";
        const xhr = new _Misc_webRequest__WEBPACK_IMPORTED_MODULE_5__.WebRequest();
        xhr.open("GET", configFileUrl);
        xhr.addEventListener("load", () => {
            if (xhr.status === 200 || (xhr.responseText && xhr.responseText.length > 0)) {
                try {
                    this._config = JSON.parse(xhr.response);
                    this.updateShaderUniforms();
                    this.updateTextures();
                    this.setFragment(this._texturePath + "/custom");
                    this._animate = this._config.animate;
                    this.refreshRate = this._config.refreshrate;
                }
                catch (ex) {
                    noConfigFile();
                }
            }
            else {
                noConfigFile();
            }
        }, false);
        xhr.addEventListener("error", () => {
            noConfigFile();
        }, false);
        try {
            xhr.send();
        }
        catch (ex) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("CustomProceduralTexture: Error on XHR send request.");
        }
    }
    /**
     * Is the texture ready to be used ? (rendered at least once)
     * @returns true if ready, otherwise, false.
     */
    isReady() {
        if (!super.isReady()) {
            return false;
        }
        for (const name in this._textures) {
            const texture = this._textures[name];
            if (!texture.isReady()) {
                return false;
            }
        }
        return true;
    }
    /**
     * Render the texture to its associated render target.
     * @param useCameraPostProcess Define if camera post process should be applied to the texture
     */
    render(useCameraPostProcess) {
        const scene = this.getScene();
        if (this._animate && scene) {
            this._time += scene.getAnimationRatio() * 0.03;
            this.updateShaderUniforms();
        }
        super.render(useCameraPostProcess);
    }
    /**
     * Update the list of dependant textures samplers in the shader.
     */
    updateTextures() {
        for (let i = 0; i < this._config.sampler2Ds.length; i++) {
            this.setTexture(this._config.sampler2Ds[i].sample2Dname, new _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_3__.Texture(this._texturePath + "/" + this._config.sampler2Ds[i].textureRelativeUrl, this.getScene()));
        }
    }
    /**
     * Update the uniform values of the procedural texture in the shader.
     */
    updateShaderUniforms() {
        if (this._config) {
            for (let j = 0; j < this._config.uniforms.length; j++) {
                const uniform = this._config.uniforms[j];
                switch (uniform.type) {
                    case "float":
                        this.setFloat(uniform.name, uniform.value);
                        break;
                    case "color3":
                        this.setColor3(uniform.name, new _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3(uniform.r, uniform.g, uniform.b));
                        break;
                    case "color4":
                        this.setColor4(uniform.name, new _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4(uniform.r, uniform.g, uniform.b, uniform.a));
                        break;
                    case "vector2":
                        this.setVector2(uniform.name, new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2(uniform.x, uniform.y));
                        break;
                    case "vector3":
                        this.setVector3(uniform.name, new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(uniform.x, uniform.y, uniform.z));
                        break;
                }
            }
        }
        this.setFloat("time", this._time);
    }
    /**
     * Define if the texture animates or not.
     */
    get animate() {
        return this._animate;
    }
    set animate(value) {
        this._animate = value;
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

/***/ "../core/dist/Misc/equirectangularCapture.js":
/*!***************************************************!*\
  !*** ../core/dist/Misc/equirectangularCapture.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureEquirectangularFromScene: () => (/* binding */ captureEquirectangularFromScene)
/* harmony export */ });
/* harmony import */ var _Probes_reflectionProbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Probes/reflectionProbe */ "../core/dist/Probes/reflectionProbe.js");
/* harmony import */ var _Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Materials/Textures/renderTargetTexture */ "../core/dist/Materials/Textures/renderTargetTexture.js");
/* harmony import */ var _Materials_Textures_Procedurals_customProceduralTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Materials/Textures/Procedurals/customProceduralTexture */ "../core/dist/Materials/Textures/Procedurals/customProceduralTexture.js");
/* harmony import */ var _dumpTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dumpTools */ "../core/dist/Misc/dumpTools.js");
/* harmony import */ var _Shaders_equirectangularPanorama_fragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shaders/equirectangularPanorama.fragment */ "../core/dist/Shaders/equirectangularPanorama.fragment.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * @param scene This refers to the scene which would be rendered in the given equirectangular capture
 * @param options This refers to the options for a given equirectangular capture
 * @returns the requested capture's pixel-data or auto downloads the file if options.filename is specified
 */
// Should end with "Async" and start with "C" but we are keeping it as is for backward compatibility
// eslint-disable-next-line no-restricted-syntax, @typescript-eslint/naming-convention
async function captureEquirectangularFromScene(scene, options) {
    const probe = options.probe ?? new _Probes_reflectionProbe__WEBPACK_IMPORTED_MODULE_0__.ReflectionProbe("tempProbe", options.size, scene);
    const wasProbeProvided = !!options.probe;
    if (!wasProbeProvided) {
        if (options.position) {
            probe.position = options.position.clone();
        }
        else if (scene.activeCamera) {
            probe.position = scene.activeCamera.position.clone();
        }
    }
    const meshesToConsider = options.meshesFilter ? scene.meshes.filter(options.meshesFilter) : scene.meshes;
    probe.renderList?.push(...meshesToConsider);
    probe.refreshRate = _Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_1__.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
    probe.cubeTexture.render();
    const dumpTexture = new _Materials_Textures_Procedurals_customProceduralTexture__WEBPACK_IMPORTED_MODULE_2__.CustomProceduralTexture("tempProceduralTexture", "equirectangularPanorama", { width: options.size * 2, height: options.size }, scene);
    dumpTexture.setTexture("cubeMap", probe.cubeTexture);
    return await new Promise((resolve, reject) => {
        dumpTexture.onGeneratedObservable.addOnce(() => {
            const pixelDataPromise = dumpTexture.readPixels();
            if (!pixelDataPromise) {
                reject(new Error("No Pixel Data found on procedural texture"));
                dumpTexture.dispose();
                if (!wasProbeProvided) {
                    probe.dispose();
                }
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            pixelDataPromise.then((pixelData) => {
                dumpTexture.dispose();
                if (!wasProbeProvided) {
                    probe.dispose();
                }
                if (options.filename) {
                    (0,_dumpTools__WEBPACK_IMPORTED_MODULE_3__.DumpData)(options.size * 2, options.size, pixelData, undefined, "image/png", options.filename);
                    resolve(null);
                }
                else {
                    resolve(pixelData);
                }
            });
        });
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

/***/ "../core/dist/Misc/videoRecorder.js":
/*!******************************************!*\
  !*** ../core/dist/Misc/videoRecorder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoRecorder: () => (/* binding */ VideoRecorder)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * This can help with recording videos from BabylonJS.
 * This is based on the available WebRTC functionalities of the browser.
 *
 * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToVideo
 */
class VideoRecorder {
    /**
     * Returns whether or not the VideoRecorder is available in your browser.
     * @param engine Defines the Babylon Engine.
     * @param canvas Defines the canvas to record. If not provided, the engine canvas will be used.
     * @returns true if supported otherwise false.
     */
    static IsSupported(engine, canvas) {
        const targetCanvas = canvas ?? engine.getRenderingCanvas();
        return !!targetCanvas && typeof targetCanvas.captureStream === "function";
    }
    /**
     * True when a recording is already in progress.
     */
    get isRecording() {
        return !!this._canvas && this._isRecording;
    }
    /**
     * Create a new VideoCapture object which can help converting what you see in Babylon to a video file.
     * @param engine Defines the BabylonJS Engine you wish to record.
     * @param options Defines options that can be used to customize the capture.
     */
    constructor(engine, options = {}) {
        if (!VideoRecorder.IsSupported(engine, options.canvas)) {
            // eslint-disable-next-line no-throw-literal
            throw "Your browser does not support recording so far.";
        }
        const canvas = options.canvas ?? engine.getRenderingCanvas();
        if (!canvas) {
            // eslint-disable-next-line no-throw-literal
            throw "The babylon engine must have a canvas to be recorded";
        }
        this._canvas = canvas;
        this._isRecording = false;
        this._options = {
            ...VideoRecorder._DefaultOptions,
            ...options,
        };
        const stream = this._canvas.captureStream(this._options.fps);
        if (this._options.audioTracks) {
            for (const track of this._options.audioTracks) {
                stream.addTrack(track);
            }
        }
        this._mediaRecorder = new MediaRecorder(stream, { mimeType: this._options.mimeType });
        this._mediaRecorder.ondataavailable = (evt) => this._handleDataAvailable(evt);
        this._mediaRecorder.onerror = (evt) => this._handleError(evt);
        this._mediaRecorder.onstop = () => this._handleStop();
    }
    /**
     * Stops the current recording before the default capture timeout passed in the startRecording function.
     */
    stopRecording() {
        if (!this._canvas || !this._mediaRecorder) {
            return;
        }
        if (!this.isRecording) {
            return;
        }
        this._isRecording = false;
        this._mediaRecorder.stop();
    }
    /**
     * Starts recording the canvas for a max duration specified in parameters.
     * @param fileName Defines the name of the file to be downloaded when the recording stop.
     * If null no automatic download will start and you can rely on the promise to get the data back.
     * @param maxDuration Defines the maximum recording time in seconds.
     * It defaults to 7 seconds. A value of zero will not stop automatically, you would need to call stopRecording manually.
     * @returns A promise callback at the end of the recording with the video data in Blob.
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    startRecording(fileName = "babylonjs.webm", maxDuration = 7) {
        if (!this._canvas || !this._mediaRecorder) {
            // eslint-disable-next-line no-throw-literal
            throw "Recorder has already been disposed";
        }
        if (this.isRecording) {
            // eslint-disable-next-line no-throw-literal
            throw "Recording already in progress";
        }
        if (maxDuration > 0) {
            setTimeout(() => {
                this.stopRecording();
            }, maxDuration * 1000);
        }
        this._fileName = fileName;
        this._recordedChunks = [];
        this._resolve = null;
        this._reject = null;
        this._isRecording = true;
        this._mediaRecorder.start(this._options.recordChunckSize);
        return new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    /**
     * Releases internal resources used during the recording.
     */
    dispose() {
        this._canvas = null;
        this._mediaRecorder = null;
        this._recordedChunks = [];
        this._fileName = null;
        this._resolve = null;
        this._reject = null;
    }
    _handleDataAvailable(event) {
        if (event.data.size > 0) {
            this._recordedChunks.push(event.data);
        }
    }
    _handleError(event) {
        this.stopRecording();
        if (this._reject) {
            this._reject(event.error);
        }
        else {
            throw new event.error();
        }
    }
    _handleStop() {
        this.stopRecording();
        const superBuffer = new Blob(this._recordedChunks);
        if (this._resolve) {
            this._resolve(superBuffer);
        }
        window.URL.createObjectURL(superBuffer);
        if (this._fileName) {
            _tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Download(superBuffer, this._fileName);
        }
    }
}
VideoRecorder._DefaultOptions = {
    mimeType: "video/webm",
    fps: 25,
    recordChunckSize: 3000,
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

/***/ }),

/***/ "../core/dist/Probes/reflectionProbe.js":
/*!**********************************************!*\
  !*** ../core/dist/Probes/reflectionProbe.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReflectionProbe: () => (/* binding */ ReflectionProbe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Misc/decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var _Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Materials/Textures/renderTargetTexture */ "../core/dist/Materials/Textures/renderTargetTexture.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scene */ "../core/dist/scene.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype.removeReflectionProbe = function (toRemove) {
    if (!this.reflectionProbes) {
        return -1;
    }
    const index = this.reflectionProbes.indexOf(toRemove);
    if (index !== -1) {
        this.reflectionProbes.splice(index, 1);
    }
    return index;
};
_scene__WEBPACK_IMPORTED_MODULE_5__.Scene.prototype.addReflectionProbe = function (newReflectionProbe) {
    if (!this.reflectionProbes) {
        this.reflectionProbes = [];
    }
    this.reflectionProbes.push(newReflectionProbe);
};
/**
 * Class used to generate realtime reflection / refraction cube textures
 * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/reflectionProbes
 */
class ReflectionProbe {
    /**
     * Creates a new reflection probe
     * @param name defines the name of the probe
     * @param size defines the texture resolution (for each face)
     * @param scene defines the hosting scene
     * @param generateMipMaps defines if mip maps should be generated automatically (true by default)
     * @param useFloat defines if HDR data (float data) should be used to store colors (false by default)
     * @param linearSpace defines if the probe should be generated in linear space or not (false by default)
     */
    constructor(
    /** defines the name of the probe */
    name, size, scene, generateMipMaps = true, useFloat = false, linearSpace = false) {
        this.name = name;
        this._viewMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.Identity();
        this._target = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.Zero();
        this._add = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.Zero();
        this._invertYAxis = false;
        /** Gets or sets probe position (center of the cube map) */
        this.position = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.Zero();
        /**
         * Gets or sets an object used to store user defined information for the reflection probe.
         */
        this.metadata = null;
        /** @internal */
        this._parentContainer = null;
        this._scene = scene;
        if (scene.getEngine().supportsUniformBuffers) {
            this._sceneUBOs = [];
            for (let i = 0; i < 6; ++i) {
                this._sceneUBOs.push(scene.createSceneUniformBuffer(`Scene for Reflection Probe (name "${name}") face #${i}`));
            }
        }
        // Create the scene field if not exist.
        if (!this._scene.reflectionProbes) {
            this._scene.reflectionProbes = [];
        }
        this._scene.reflectionProbes.push(this);
        let textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_6__.Constants.TEXTURETYPE_UNSIGNED_BYTE;
        if (useFloat) {
            const caps = this._scene.getEngine().getCaps();
            if (caps.textureHalfFloatRender) {
                textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_6__.Constants.TEXTURETYPE_HALF_FLOAT;
            }
            else if (caps.textureFloatRender) {
                textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_6__.Constants.TEXTURETYPE_FLOAT;
            }
        }
        this._renderTargetTexture = new _Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_3__.RenderTargetTexture(name, size, scene, generateMipMaps, true, textureType, true);
        this._renderTargetTexture.gammaSpace = !linearSpace;
        this._renderTargetTexture.invertZ = scene.useRightHandedSystem;
        const useReverseDepthBuffer = scene.getEngine().useReverseDepthBuffer;
        this._renderTargetTexture.onBeforeRenderObservable.add((faceIndex) => {
            if (this._sceneUBOs) {
                scene.setSceneUniformBuffer(this._sceneUBOs[faceIndex]);
                scene.getSceneUniformBuffer().unbindEffect();
            }
            switch (faceIndex) {
                case 0:
                    this._add.copyFromFloats(1, 0, 0);
                    break;
                case 1:
                    this._add.copyFromFloats(-1, 0, 0);
                    break;
                case 2:
                    this._add.copyFromFloats(0, this._invertYAxis ? 1 : -1, 0);
                    break;
                case 3:
                    this._add.copyFromFloats(0, this._invertYAxis ? -1 : 1, 0);
                    break;
                case 4:
                    this._add.copyFromFloats(0, 0, scene.useRightHandedSystem ? -1 : 1);
                    break;
                case 5:
                    this._add.copyFromFloats(0, 0, scene.useRightHandedSystem ? 1 : -1);
                    break;
            }
            if (this._attachedMesh) {
                this.position.copyFrom(this._attachedMesh.getAbsolutePosition());
            }
            this.position.addToRef(this._add, this._target);
            const lookAtFunction = scene.useRightHandedSystem ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.LookAtRHToRef : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.LookAtLHToRef;
            const perspectiveFunction = scene.useRightHandedSystem ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.PerspectiveFovRH : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Matrix.PerspectiveFovLH;
            lookAtFunction(this.position, this._target, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3.Up(), this._viewMatrix);
            if (scene.activeCamera) {
                this._projectionMatrix = perspectiveFunction(Math.PI / 2, 1, useReverseDepthBuffer ? scene.activeCamera.maxZ : scene.activeCamera.minZ, useReverseDepthBuffer ? scene.activeCamera.minZ : scene.activeCamera.maxZ, this._scene.getEngine().isNDCHalfZRange);
                scene.setTransformMatrix(this._viewMatrix, this._projectionMatrix);
                if (scene.activeCamera.isRigCamera && !this._renderTargetTexture.activeCamera) {
                    this._renderTargetTexture.activeCamera = scene.activeCamera.rigParent || null;
                }
            }
            scene._forcedViewPosition = this.position;
        });
        let currentApplyByPostProcess;
        this._renderTargetTexture.onBeforeBindObservable.add(() => {
            const engine = scene.getEngine();
            this._currentSceneUBO = scene.getSceneUniformBuffer();
            if (engine._enableGPUDebugMarkers) {
                engine.restoreDefaultFramebuffer();
                engine._debugPushGroup(`reflection probe generation for ${name}`);
            }
            currentApplyByPostProcess = this._scene.imageProcessingConfiguration.applyByPostProcess;
            if (linearSpace) {
                scene.imageProcessingConfiguration.applyByPostProcess = true;
            }
        });
        this._renderTargetTexture.onAfterUnbindObservable.add(() => {
            const engine = scene.getEngine();
            scene.imageProcessingConfiguration.applyByPostProcess = currentApplyByPostProcess;
            scene._forcedViewPosition = null;
            if (this._sceneUBOs) {
                scene.setSceneUniformBuffer(this._currentSceneUBO);
            }
            scene.updateTransformMatrix(true);
            if (engine._enableGPUDebugMarkers) {
                engine._debugPopGroup();
            }
        });
    }
    /** Gets or sets the number of samples to use for multi-sampling (0 by default). Required WebGL2 */
    get samples() {
        return this._renderTargetTexture.samples;
    }
    set samples(value) {
        this._renderTargetTexture.samples = value;
    }
    /** Gets or sets the refresh rate to use (on every frame by default) */
    get refreshRate() {
        return this._renderTargetTexture.refreshRate;
    }
    set refreshRate(value) {
        this._renderTargetTexture.refreshRate = value;
    }
    /**
     * Gets the hosting scene
     * @returns a Scene
     */
    getScene() {
        return this._scene;
    }
    /** Gets the internal CubeTexture used to render to */
    get cubeTexture() {
        return this._renderTargetTexture;
    }
    /** Gets or sets the list of meshes to render */
    get renderList() {
        return this._renderTargetTexture.renderList;
    }
    set renderList(value) {
        this._renderTargetTexture.renderList = value;
    }
    /**
     * Attach the probe to a specific mesh (Rendering will be done from attached mesh's position)
     * @param mesh defines the mesh to attach to
     */
    attachToMesh(mesh) {
        this._attachedMesh = mesh;
    }
    /**
     * Specifies whether or not the stencil and depth buffer are cleared between two rendering groups
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param autoClearDepthStencil Automatically clears depth and stencil between groups if true.
     */
    setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) {
        this._renderTargetTexture.setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil);
    }
    /**
     * Clean all associated resources
     */
    dispose() {
        const index = this._scene.reflectionProbes.indexOf(this);
        if (index !== -1) {
            // Remove from the scene if found
            this._scene.reflectionProbes.splice(index, 1);
        }
        if (this._parentContainer) {
            const index = this._parentContainer.reflectionProbes.indexOf(this);
            if (index > -1) {
                this._parentContainer.reflectionProbes.splice(index, 1);
            }
            this._parentContainer = null;
        }
        if (this._renderTargetTexture) {
            this._renderTargetTexture.dispose();
            this._renderTargetTexture = null;
        }
        if (this._sceneUBOs) {
            for (const ubo of this._sceneUBOs) {
                ubo.dispose();
            }
            this._sceneUBOs = [];
        }
    }
    /**
     * Converts the reflection probe information to a readable string for debug purpose.
     * @param fullDetails Supports for multiple levels of logging within scene loading
     * @returns the human readable reflection probe info
     */
    toString(fullDetails) {
        let ret = "Name: " + this.name;
        if (fullDetails) {
            ret += ", position: " + this.position.toString();
            if (this._attachedMesh) {
                ret += ", attached mesh: " + this._attachedMesh.name;
            }
        }
        return ret;
    }
    /**
     * Get the class name of the refection probe.
     * @returns "ReflectionProbe"
     */
    getClassName() {
        return "ReflectionProbe";
    }
    /**
     * Serialize the reflection probe to a JSON representation we can easily use in the respective Parse function.
     * @returns The JSON representation of the texture
     */
    serialize() {
        const serializationObject = _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_2__.SerializationHelper.Serialize(this, this._renderTargetTexture.serialize());
        serializationObject.isReflectionProbe = true;
        serializationObject.metadata = this.metadata;
        return serializationObject;
    }
    /**
     * Parse the JSON representation of a reflection probe in order to recreate the reflection probe in the given scene.
     * @param parsedReflectionProbe Define the JSON representation of the reflection probe
     * @param scene Define the scene the parsed reflection probe should be instantiated in
     * @param rootUrl Define the root url of the parsing sequence in the case of relative dependencies
     * @returns The parsed reflection probe if successful
     */
    static Parse(parsedReflectionProbe, scene, rootUrl) {
        let reflectionProbe = null;
        if (scene.reflectionProbes) {
            for (let index = 0; index < scene.reflectionProbes.length; index++) {
                const rp = scene.reflectionProbes[index];
                if (rp.name === parsedReflectionProbe.name) {
                    reflectionProbe = rp;
                    break;
                }
            }
        }
        reflectionProbe = _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_2__.SerializationHelper.Parse(() => reflectionProbe || new ReflectionProbe(parsedReflectionProbe.name, parsedReflectionProbe.renderTargetSize, scene, parsedReflectionProbe._generateMipMaps), parsedReflectionProbe, scene, rootUrl);
        reflectionProbe.cubeTexture._waitingRenderList = parsedReflectionProbe.renderList;
        if (parsedReflectionProbe._attachedMesh) {
            reflectionProbe.attachToMesh(scene.getMeshById(parsedReflectionProbe._attachedMesh));
        }
        if (parsedReflectionProbe.metadata) {
            reflectionProbe.metadata = parsedReflectionProbe.metadata;
        }
        return reflectionProbe;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsMeshReference)()
], ReflectionProbe.prototype, "_attachedMesh", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsVector3)()
], ReflectionProbe.prototype, "position", void 0);


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

/***/ "../core/dist/Shaders/equirectangularPanorama.fragment.js":
/*!****************************************************************!*\
  !*** ../core/dist/Shaders/equirectangularPanorama.fragment.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   equirectangularPanoramaPixelShader: () => (/* binding */ equirectangularPanoramaPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "equirectangularPanoramaPixelShader";
const shader = `#ifdef GL_ES
precision highp float;
#endif
#define M_PI 3.1415926535897932384626433832795
varying vec2 vUV;uniform samplerCube cubeMap;void main(void) {vec2 uv=vUV;float longitude=uv.x*2.*M_PI-M_PI+M_PI/2.;float latitude=(1.-uv.y)*M_PI;vec3 dir=vec3(
- sin( longitude )*sin( latitude ),
cos( latitude ),
- cos( longitude )*sin( latitude )
);normalize( dir );gl_FragColor=textureCube( cubeMap,dir );}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const equirectangularPanoramaPixelShader = { name, shader };


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

/***/ "./src/components/tools/captureTools.tsx":
/*!***********************************************!*\
  !*** ./src/components/tools/captureTools.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureRttTools: () => (/* binding */ CaptureRttTools),
/* harmony export */   CaptureScreenshotTools: () => (/* binding */ CaptureScreenshotTools)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/buttonLine */ "../sharedUiComponents/src/fluent/hoc/buttonLine.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_syncedSliderPropertyLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/syncedSliderPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/syncedSliderPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/switchPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/switchPropertyLine.tsx");
/* harmony import */ var core_Misc_videoRecorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Misc/videoRecorder */ "../core/dist/Misc/videoRecorder.js");
/* harmony import */ var core_Misc_equirectangularCapture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Misc/equirectangularCapture */ "../core/dist/Misc/equirectangularCapture.js");
/* harmony import */ var shared_ui_components_fluent_primitives_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/collapse */ "../sharedUiComponents/src/fluent/primitives/collapse.tsx");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-icons */ "../../../node_modules/@fluentui/react-icons/lib/index.js");
/* harmony import */ var core_FrameGraph_frameGraphUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/FrameGraph/frameGraphUtils */ "../core/dist/FrameGraph/frameGraphUtils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2;
var _react_refresh_temp_3, _react_refresh_temp_4;
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();
_react_refresh_temp_4 = __webpack_require__.$Refresh$.signature();











const CaptureRttTools = ({ scene }) => {
    _react_refresh_temp_3();
    const [useWidthHeight, setUseWidthHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [screenshotSize, setScreenshotSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({ precision: 1 });
    const captureRender = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
        const sizeToUse = { ...screenshotSize };
        if (!useWidthHeight) {
            sizeToUse.width = undefined;
            sizeToUse.height = undefined;
        }
        if (scene.activeCamera) {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.CreateScreenshotUsingRenderTarget(scene.getEngine(), scene.activeCamera, sizeToUse, undefined, undefined, 4);
        }
    }, [scene, screenshotSize, useWidthHeight]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: "Capture", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.CameraRegular, onClick: captureRender }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_syncedSliderPropertyLine__WEBPACK_IMPORTED_MODULE_4__.SyncedSliderPropertyLine, { label: "Precision", value: screenshotSize.precision ?? 1, onChange: (value) => setScreenshotSize({ ...screenshotSize, precision: value ?? 1 }), min: 0.1, max: 10, step: 0.1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_5__.SwitchPropertyLine, { label: "Use Custom Width/Height", value: useWidthHeight, onChange: (value) => setUseWidthHeight(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_components_fluent_primitives_collapse__WEBPACK_IMPORTED_MODULE_8__.Collapse, { visible: useWidthHeight, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_syncedSliderPropertyLine__WEBPACK_IMPORTED_MODULE_4__.SyncedSliderPropertyLine, { label: "Width", value: screenshotSize.width ?? 512, onChange: (data) => setScreenshotSize({ ...screenshotSize, width: data ?? 512 }), min: 1, step: 1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_syncedSliderPropertyLine__WEBPACK_IMPORTED_MODULE_4__.SyncedSliderPropertyLine, { label: "Height", value: screenshotSize.height ?? 512, onChange: (data) => setScreenshotSize({ ...screenshotSize, height: data ?? 512 }), min: 1, step: 1 })] })] }));
};
_react_refresh_temp_1 = CaptureRttTools;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CaptureRttTools");
_react_refresh_temp_3(CaptureRttTools, "9enlSGu5I+KsBLuABN+ZReH0PtQ=");
const CaptureScreenshotTools = ({ scene }) => {
    _react_refresh_temp_4();
    const [isRecording, setIsRecording] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const videoRecorder = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const captureScreenshot = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
        const camera = scene.frameGraph ? core_FrameGraph_frameGraphUtils__WEBPACK_IMPORTED_MODULE_10__.FrameGraphUtils.FindMainCamera(scene.frameGraph) : scene.activeCamera;
        if (camera) {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.CreateScreenshot(scene.getEngine(), camera, { precision: 1 });
        }
    }, [scene]);
    const captureEquirectangularAsync = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
        const currentActiveCamera = scene.activeCamera;
        if (!currentActiveCamera && scene.frameGraph) {
            scene.activeCamera = core_FrameGraph_frameGraphUtils__WEBPACK_IMPORTED_MODULE_10__.FrameGraphUtils.FindMainCamera(scene.frameGraph);
        }
        if (scene.activeCamera) {
            await (0,core_Misc_equirectangularCapture__WEBPACK_IMPORTED_MODULE_7__.captureEquirectangularFromScene)(scene, { size: 1024, filename: "equirectangular_capture.png" });
        }
        // eslint-disable-next-line require-atomic-updates
        scene.activeCamera = currentActiveCamera;
    }, [scene]);
    const recordVideoAsync = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
        if (videoRecorder.current && videoRecorder.current.isRecording) {
            videoRecorder.current.stopRecording();
            setIsRecording(false);
            return;
        }
        if (!videoRecorder.current) {
            videoRecorder.current = new core_Misc_videoRecorder__WEBPACK_IMPORTED_MODULE_6__.VideoRecorder(scene.getEngine());
        }
        void videoRecorder.current.startRecording();
        setIsRecording(true);
    }, [scene]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: "Capture", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.CameraRegular, onClick: captureScreenshot }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: "Capture Equirectangular", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.CameraRegular, onClick: captureEquirectangularAsync }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: isRecording ? "Stop Recording" : "Record Video", itemId: "Start/Stop Recording", icon: isRecording ? _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.RecordStopRegular : _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.RecordRegular, onClick: recordVideoAsync })] }));
};
_react_refresh_temp_2 = CaptureScreenshotTools;
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "CaptureScreenshotTools");
_react_refresh_temp_4(CaptureScreenshotTools, "F19blawcQBvo1qVWgfL8UEfZRBc=");


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

/***/ "./src/services/panes/tools/captureService.tsx":
/*!*****************************************************!*\
  !*** ./src/services/panes/tools/captureService.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptureServiceDefinition: () => (/* binding */ CaptureServiceDefinition),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _toolsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolsService */ "./src/services/panes/toolsService.tsx");
/* harmony import */ var _components_tools_captureTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tools/captureTools */ "./src/components/tools/captureTools.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const CaptureServiceDefinition = {
    friendlyName: "Capture Tools",
    consumes: [_toolsService__WEBPACK_IMPORTED_MODULE_1__.ToolsServiceIdentity],
    factory: (toolsService) => {
        const contentRegistrations = [];
        // Screenshot capture content
        contentRegistrations.push(toolsService.addSectionContent({
            key: "Screenshot Capture",
            section: "Screenshot Capture",
            component: ({ context }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_captureTools__WEBPACK_IMPORTED_MODULE_2__.CaptureScreenshotTools, { scene: context }),
        }));
        // RTT capture content
        contentRegistrations.push(toolsService.addSectionContent({
            key: "RTT Capture",
            section: "RTT Capture",
            component: ({ context }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_captureTools__WEBPACK_IMPORTED_MODULE_2__.CaptureRttTools, { scene: context }),
        }));
        return {
            dispose: () => {
                contentRegistrations.forEach((registration) => registration.dispose());
            },
        };
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    serviceDefinitions: [CaptureServiceDefinition],
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlcnZpY2VzX3BhbmVzX3Rvb2xzX2NhcHR1cmVTZXJ2aWNlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBOzs7O0FBSUE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBU0E7QUEzQkE7QUFDQTtBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQW1DQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFnRUE7Ozs7O0FBS0E7QUFDQTtBQU9BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUEzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBMEJBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFqQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXpUQTtBQURBO0FBQ0E7QUFRQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUE4QkE7QUE5Q0E7O0FBQUE7QUFnREE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBbERBOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL2N1c3RvbVByb2NlZHVyYWxUZXh0dXJlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWlzYy9lcXVpcmVjdGFuZ3VsYXJDYXB0dXJlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWlzYy92aWRlb1JlY29yZGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUHJvYmVzL3JlZmxlY3Rpb25Qcm9iZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvZXF1aXJlY3Rhbmd1bGFyUGFub3JhbWEuZnJhZ21lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9pbnNwZWN0b3ItdjIvc3JjL2NvbXBvbmVudHMvdG9vbHMvY2FwdHVyZVRvb2xzLnRzeCIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvc2VydmljZXMvcGFuZXMvdG9vbHMvY2FwdHVyZVNlcnZpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uLy4uLy4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29sb3I0LCBDb2xvcjMgfSBmcm9tIFwiLi4vLi4vLi4vTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgSVByb2NlZHVyYWxUZXh0dXJlQ3JlYXRpb25PcHRpb25zIH0gZnJvbSBcIi4vcHJvY2VkdXJhbFRleHR1cmVcIjtcclxuaW1wb3J0IHsgUHJvY2VkdXJhbFRleHR1cmUgfSBmcm9tIFwiLi9wcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBXZWJSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uLy4uL01pc2Mvd2ViUmVxdWVzdFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmVTaXplIH0gZnJvbSBcIi4uLy4uLy4uL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlQ3JlYXRpb25PcHRpb25zXCI7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyB0byBjcmVhdGUgYSBDdXN0b20gUHJvY2VkdXJhbCBUZXh0dXJlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tUHJvY2VkdXJhbFRleHR1cmVDcmVhdGlvbk9wdGlvbnMgZXh0ZW5kcyBJUHJvY2VkdXJhbFRleHR1cmVDcmVhdGlvbk9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgYSBib29sZW5hIGluZGljYXRpbmcgdGhhdCB0aGVyZSBpcyBubyBqc29uIGNvbmZpZyBmaWxlIHRvIGxvYWRcclxuICAgICAqL1xyXG4gICAgc2tpcEpzb24/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogUHJvY2VkdXJhbCB0ZXh0dXJpbmcgaXMgYSB3YXkgdG8gcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSB0ZXh0dXJlLiBUaGVyZSBhcmUgMiB0eXBlcyBvZiBwcm9jZWR1cmFsIHRleHR1cmVzOiBjb2RlLW9ubHksIGFuZCBjb2RlIHRoYXQgcmVmZXJlbmNlcyBzb21lIGNsYXNzaWMgMkQgaW1hZ2VzLCBzb21ldGltZXMgY2FsbGVkICdyZWZNYXBzJyBvciAnc2FtcGxlcicgaW1hZ2VzLlxyXG4gKiBDdXN0b20gUHJvY2VkdXJhbCB0ZXh0dXJlcyBhcmUgdGhlIGVhc2llc3Qgd2F5IHRvIGNyZWF0ZSB5b3VyIG93biBwcm9jZWR1cmFsIGluIHlvdXIgYXBwbGljYXRpb24uXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21hdGVyaWFscy91c2luZy9wcm9jZWR1cmFsVGV4dHVyZXMjY3JlYXRpbmctY3VzdG9tLXByb2NlZHVyYWwtdGV4dHVyZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21Qcm9jZWR1cmFsVGV4dHVyZSBleHRlbmRzIFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgIHByaXZhdGUgX2FuaW1hdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfdGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2NvbmZpZzogYW55O1xyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZVBhdGg6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbnRpYXRlcyBhIG5ldyBDdXN0b20gUHJvY2VkdXJhbCBUZXh0dXJlLlxyXG4gICAgICogUHJvY2VkdXJhbCB0ZXh0dXJpbmcgaXMgYSB3YXkgdG8gcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSB0ZXh0dXJlLiBUaGVyZSBhcmUgMiB0eXBlcyBvZiBwcm9jZWR1cmFsIHRleHR1cmVzOiBjb2RlLW9ubHksIGFuZCBjb2RlIHRoYXQgcmVmZXJlbmNlcyBzb21lIGNsYXNzaWMgMkQgaW1hZ2VzLCBzb21ldGltZXMgY2FsbGVkICdyZWZNYXBzJyBvciAnc2FtcGxlcicgaW1hZ2VzLlxyXG4gICAgICogQ3VzdG9tIFByb2NlZHVyYWwgdGV4dHVyZXMgYXJlIHRoZSBlYXNpZXN0IHdheSB0byBjcmVhdGUgeW91ciBvd24gcHJvY2VkdXJhbCBpbiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvbWF0ZXJpYWxzL3VzaW5nL3Byb2NlZHVyYWxUZXh0dXJlcyNjcmVhdGluZy1jdXN0b20tcHJvY2VkdXJhbC10ZXh0dXJlc1xyXG4gICAgICogQHBhcmFtIG5hbWUgRGVmaW5lIHRoZSBuYW1lIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZVBhdGggRGVmaW5lIHRoZSBmb2xkZXIgcGF0aCBjb250YWluaW5nIGFsbCB0aGUgY3VzdG9tIHRleHR1cmUgcmVsYXRlZCBmaWxlcyAoY29uZmlnLCBzaGFkZXJzLi4uKVxyXG4gICAgICogQHBhcmFtIHNpemUgRGVmaW5lIHRoZSBzaXplIG9mIHRoZSB0ZXh0dXJlIHRvIGNyZWF0ZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIERlZmluZSB0aGUgc2NlbmUgdGhlIHRleHR1cmUgYmVsb25ncyB0b1xyXG4gICAgICogQHBhcmFtIGZhbGxiYWNrVGV4dHVyZSBEZWZpbmUgYSBmYWxsYmFjayB0ZXh0dXJlIGluIGNhc2UgdGhlcmUgd2VyZSBpc3N1ZXMgdG8gY3JlYXRlIHRoZSBjdXN0b20gdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIGdlbmVyYXRlTWlwTWFwcyBEZWZpbmUgaWYgdGhlIHRleHR1cmUgc2hvdWxkIGNyZWF0ZXMgbWlwIG1hcHMgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gc2tpcEpzb24gRGVmaW5lIGEgYm9vbGVuYSBpbmRpY2F0aW5nIHRoYXQgdGhlcmUgaXMgbm8ganNvbiBjb25maWcgZmlsZSB0byBsb2FkXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIHNpemU6IFRleHR1cmVTaXplLFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmYWxsYmFja1RleHR1cmU/OiBUZXh0dXJlIHwgSUN1c3RvbVByb2NlZHVyYWxUZXh0dXJlQ3JlYXRpb25PcHRpb25zLFxyXG4gICAgICAgIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW4sXHJcbiAgICAgICAgc2tpcEpzb24/OiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzaXplLCBudWxsLCBzY2VuZSwgZmFsbGJhY2tUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHMpO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVQYXRoID0gdGV4dHVyZVBhdGg7XHJcblxyXG4gICAgICAgIGlmIChmYWxsYmFja1RleHR1cmUgJiYgIShmYWxsYmFja1RleHR1cmUgaW5zdGFuY2VvZiBUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICBza2lwSnNvbiA9ICEhZmFsbGJhY2tUZXh0dXJlLnNraXBKc29uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFza2lwSnNvbikge1xyXG4gICAgICAgICAgICAvL1RyeSB0byBsb2FkIGpzb25cclxuICAgICAgICAgICAgdGhpcy5fbG9hZEpzb24odGV4dHVyZVBhdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhZ21lbnQodGhpcy5fdGV4dHVyZVBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hSYXRlID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkSnNvbihqc29uVXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub0NvbmZpZ0ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZyYWdtZW50KHRoaXMuX3RleHR1cmVQYXRoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5Mb2coXCJObyBqc29uIG9yIFNoYWRlclN0b3JlIG9yIERPTSBlbGVtZW50IGZvdW5kIGZvciBDdXN0b21Qcm9jZWR1cmFsVGV4dHVyZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbmZpZ0ZpbGVVcmwgPSBqc29uVXJsICsgXCIvY29uZmlnLmpzb25cIjtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgV2ViUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBjb25maWdGaWxlVXJsKTtcclxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJsb2FkXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgKHhoci5yZXNwb25zZVRleHQgJiYgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZyYWdtZW50KHRoaXMuX3RleHR1cmVQYXRoICsgXCIvY3VzdG9tXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IHRoaXMuX2NvbmZpZy5hbmltYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hSYXRlID0gdGhpcy5fY29uZmlnLnJlZnJlc2hyYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vQ29uZmlnRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9Db25maWdGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiZXJyb3JcIixcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9Db25maWdGaWxlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJDdXN0b21Qcm9jZWR1cmFsVGV4dHVyZTogRXJyb3Igb24gWEhSIHNlbmQgcmVxdWVzdC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHRleHR1cmUgcmVhZHkgdG8gYmUgdXNlZCA/IChyZW5kZXJlZCBhdCBsZWFzdCBvbmNlKVxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiByZWFkeSwgb3RoZXJ3aXNlLCBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGlzUmVhZHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFzdXBlci5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuX3RleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLl90ZXh0dXJlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGV4dHVyZS5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgdGhlIHRleHR1cmUgdG8gaXRzIGFzc29jaWF0ZWQgcmVuZGVyIHRhcmdldC5cclxuICAgICAqIEBwYXJhbSB1c2VDYW1lcmFQb3N0UHJvY2VzcyBEZWZpbmUgaWYgY2FtZXJhIHBvc3QgcHJvY2VzcyBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVuZGVyKHVzZUNhbWVyYVBvc3RQcm9jZXNzPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbmltYXRlICYmIHNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgKz0gc2NlbmUuZ2V0QW5pbWF0aW9uUmF0aW8oKSAqIDAuMDM7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLnJlbmRlcih1c2VDYW1lcmFQb3N0UHJvY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgZGVwZW5kYW50IHRleHR1cmVzIHNhbXBsZXJzIGluIHRoZSBzaGFkZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVUZXh0dXJlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbmZpZy5zYW1wbGVyMkRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dHVyZSh0aGlzLl9jb25maWcuc2FtcGxlcjJEc1tpXS5zYW1wbGUyRG5hbWUsIG5ldyBUZXh0dXJlKHRoaXMuX3RleHR1cmVQYXRoICsgXCIvXCIgKyB0aGlzLl9jb25maWcuc2FtcGxlcjJEc1tpXS50ZXh0dXJlUmVsYXRpdmVVcmwsIHRoaXMuZ2V0U2NlbmUoKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgdW5pZm9ybSB2YWx1ZXMgb2YgdGhlIHByb2NlZHVyYWwgdGV4dHVyZSBpbiB0aGUgc2hhZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlU2hhZGVyVW5pZm9ybXMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2NvbmZpZy51bmlmb3Jtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdW5pZm9ybSA9IHRoaXMuX2NvbmZpZy51bmlmb3Jtc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHVuaWZvcm0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmbG9hdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZsb2F0KHVuaWZvcm0ubmFtZSwgdW5pZm9ybS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvcjNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvcjModW5pZm9ybS5uYW1lLCBuZXcgQ29sb3IzKHVuaWZvcm0uciwgdW5pZm9ybS5nLCB1bmlmb3JtLmIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbG9yNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbG9yNCh1bmlmb3JtLm5hbWUsIG5ldyBDb2xvcjQodW5pZm9ybS5yLCB1bmlmb3JtLmcsIHVuaWZvcm0uYiwgdW5pZm9ybS5hKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZWN0b3IyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmVjdG9yMih1bmlmb3JtLm5hbWUsIG5ldyBWZWN0b3IyKHVuaWZvcm0ueCwgdW5pZm9ybS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZWN0b3IzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmVjdG9yMyh1bmlmb3JtLm5hbWUsIG5ldyBWZWN0b3IzKHVuaWZvcm0ueCwgdW5pZm9ybS55LCB1bmlmb3JtLnopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJ0aW1lXCIsIHRoaXMuX3RpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIGlmIHRoZSB0ZXh0dXJlIGFuaW1hdGVzIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhbmltYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYW5pbWF0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IFJlZmxlY3Rpb25Qcm9iZSB9IGZyb20gXCIuLi9Qcm9iZXMvcmVmbGVjdGlvblByb2JlXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcIi4uL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgUmVuZGVyVGFyZ2V0VGV4dHVyZSB9IGZyb20gXCIuLi9NYXRlcmlhbHMvVGV4dHVyZXMvcmVuZGVyVGFyZ2V0VGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21Qcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCIuLi9NYXRlcmlhbHMvVGV4dHVyZXMvUHJvY2VkdXJhbHMvY3VzdG9tUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuaW1wb3J0IHsgRHVtcERhdGEgfSBmcm9tIFwiLi9kdW1wVG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBWZWN0b3IzIH0gZnJvbSBcIi4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCBcIi4uL1NoYWRlcnMvZXF1aXJlY3Rhbmd1bGFyUGFub3JhbWEuZnJhZ21lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgY29udGFpbmluZyBvcHRpb25zIHJlbGF0ZWQgdG8gZXF1aXJlY3Rhbmd1bGFyIGNhcHR1cmUgb2YgdGhlIGN1cnJlbnQgc2NlbmVcclxuICovXHJcbi8vIFNob3VsZCBoYXZlIFwiSVwiIHByZWZpeCBidXQgd2UgYXJlIGtlZXBpbmcgaXQgYXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIEVxdWlSZWN0YW5ndWxhckNhcHR1cmVPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBvcHRpb24gcmVsYXRlcyB0byBzbWFsbGVzdCBkaW1lbnNpb24gb2YgdGhlIGdpdmVuIGVxdWlyZWN0YW5ndWxhciBjYXB0dXJlXHJcbiAgICAgKiBHaXZpbmcgYSA1MTJweCBzaXplIHdvdWxkIHJlc3VsdCBpbiBhbiBpbWFnZSB0aGF0IDUxMiB4IDEwMjRweFxyXG4gICAgICovXHJcbiAgICBzaXplOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbmFsIGZ1bmN0aW9uIHRvIG1hcCB3aGljaCBtZXNoZXMgc2hvdWxkIGdldCByZW5kZXJlZCBvbiB0aGUgZXF1aXJlY3Rhbmd1bGFyIG1hcFxyXG4gICAgICogVGhpcyBpcyBzcGVjaWZpY2FsbHkgaGVscGZ1bCB3aGVuIHlvdSBoYXZlIGNlcnRhaW4gbWVzaGVzIHRoYXQgeW91IHdhbnQgdG8gc2tpcCwgZXNwZWNpYWxseSBncm91bmRcclxuICAgICAqL1xyXG4gICAgbWVzaGVzRmlsdGVyPzogKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwgYXJndW1lbnQgdG8gc3BlY2lmeSBmaWxlbmFtZSwgcGFzc2luZyB0aGlzIHdvdWxkIGF1dG8gZG93bmxvYWQgdGhlIGdpdmVuIGZpbGVcclxuICAgICAqL1xyXG4gICAgZmlsZW5hbWU/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25hbCBhcmd1bWVudCB0byBzcGVjaWZ5IHBvc2l0aW9uIGluIDNEIFNwYWNlIGZyb20gd2hlcmUgdGhlIGVxdWlyZWN0YW5ndWxhciBjYXB0dXJlIHNob3VsZCBiZSB0YWtlbiwgaWYgbm90IHNwZWNpZmllZCwgaXQgd291bGQgdGFrZSB0aGUgcG9zaXRpb24gb2YgdGhlIHNjZW5lJ3MgYWN0aXZlIGNhbWVyYSBvciBlbHNlIG9yaWdpblxyXG4gICAgICovXHJcbiAgICBwb3NpdGlvbj86IFZlY3RvcjM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25hbCBhcmd1bWVudCB0byBzcGVjaWZ5IHByb2JlIHdpdGggd2hpY2ggdGhlIGVxdWlyZWN0YW5ndWxhciBpbWFnZSBpcyBnZW5lcmF0ZWRcclxuICAgICAqIFdoZW4gcGFzc2luZyB0aGlzLCBzaXplIGFuZCBwb3NpdGlvbiBhcmd1bWVudHMgYXJlIGlnbm9yZWRcclxuICAgICAqL1xyXG4gICAgcHJvYmU/OiBSZWZsZWN0aW9uUHJvYmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gc2NlbmUgVGhpcyByZWZlcnMgdG8gdGhlIHNjZW5lIHdoaWNoIHdvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSBnaXZlbiBlcXVpcmVjdGFuZ3VsYXIgY2FwdHVyZVxyXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGlzIHJlZmVycyB0byB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBlcXVpcmVjdGFuZ3VsYXIgY2FwdHVyZVxyXG4gKiBAcmV0dXJucyB0aGUgcmVxdWVzdGVkIGNhcHR1cmUncyBwaXhlbC1kYXRhIG9yIGF1dG8gZG93bmxvYWRzIHRoZSBmaWxlIGlmIG9wdGlvbnMuZmlsZW5hbWUgaXMgc3BlY2lmaWVkXHJcbiAqL1xyXG4vLyBTaG91bGQgZW5kIHdpdGggXCJBc3luY1wiIGFuZCBzdGFydCB3aXRoIFwiQ1wiIGJ1dCB3ZSBhcmUga2VlcGluZyBpdCBhcyBpcyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FwdHVyZUVxdWlyZWN0YW5ndWxhckZyb21TY2VuZShzY2VuZTogU2NlbmUsIG9wdGlvbnM6IEVxdWlSZWN0YW5ndWxhckNhcHR1cmVPcHRpb25zKTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXcgfCBudWxsPiB7XHJcbiAgICBjb25zdCBwcm9iZTogUmVmbGVjdGlvblByb2JlID0gb3B0aW9ucy5wcm9iZSA/PyBuZXcgUmVmbGVjdGlvblByb2JlKFwidGVtcFByb2JlXCIsIG9wdGlvbnMuc2l6ZSwgc2NlbmUpO1xyXG4gICAgY29uc3Qgd2FzUHJvYmVQcm92aWRlZCA9ICEhb3B0aW9ucy5wcm9iZTtcclxuICAgIGlmICghd2FzUHJvYmVQcm92aWRlZCkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHByb2JlLnBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NlbmUuYWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIHByb2JlLnBvc2l0aW9uID0gc2NlbmUuYWN0aXZlQ2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbWVzaGVzVG9Db25zaWRlciA9IG9wdGlvbnMubWVzaGVzRmlsdGVyID8gc2NlbmUubWVzaGVzLmZpbHRlcihvcHRpb25zLm1lc2hlc0ZpbHRlcikgOiBzY2VuZS5tZXNoZXM7XHJcbiAgICBwcm9iZS5yZW5kZXJMaXN0Py5wdXNoKC4uLm1lc2hlc1RvQ29uc2lkZXIpO1xyXG4gICAgcHJvYmUucmVmcmVzaFJhdGUgPSBSZW5kZXJUYXJnZXRUZXh0dXJlLlJFRlJFU0hSQVRFX1JFTkRFUl9PTkNFO1xyXG4gICAgcHJvYmUuY3ViZVRleHR1cmUucmVuZGVyKCk7XHJcbiAgICBjb25zdCBkdW1wVGV4dHVyZSA9IG5ldyBDdXN0b21Qcm9jZWR1cmFsVGV4dHVyZShcInRlbXBQcm9jZWR1cmFsVGV4dHVyZVwiLCBcImVxdWlyZWN0YW5ndWxhclBhbm9yYW1hXCIsIHsgd2lkdGg6IG9wdGlvbnMuc2l6ZSAqIDIsIGhlaWdodDogb3B0aW9ucy5zaXplIH0sIHNjZW5lKTtcclxuICAgIGR1bXBUZXh0dXJlLnNldFRleHR1cmUoXCJjdWJlTWFwXCIsIHByb2JlLmN1YmVUZXh0dXJlKTtcclxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZHVtcFRleHR1cmUub25HZW5lcmF0ZWRPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwaXhlbERhdGFQcm9taXNlID0gZHVtcFRleHR1cmUucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICBpZiAoIXBpeGVsRGF0YVByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJObyBQaXhlbCBEYXRhIGZvdW5kIG9uIHByb2NlZHVyYWwgdGV4dHVyZVwiKSk7XHJcbiAgICAgICAgICAgICAgICBkdW1wVGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdhc1Byb2JlUHJvdmlkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9iZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgcGl4ZWxEYXRhUHJvbWlzZS50aGVuKChwaXhlbERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGR1bXBUZXh0dXJlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICghd2FzUHJvYmVQcm92aWRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2JlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRHVtcERhdGEob3B0aW9ucy5zaXplICogMiwgb3B0aW9ucy5zaXplLCBwaXhlbERhdGEsIHVuZGVmaW5lZCwgXCJpbWFnZS9wbmdcIiwgb3B0aW9ucy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwaXhlbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RFbmdpbmUgfSBmcm9tIFwiLi4vRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5cclxuaW50ZXJmYWNlIE1lZGlhUmVjb3JkZXIge1xyXG4gICAgLyoqIFN0YXJ0cyByZWNvcmRpbmcgKi9cclxuICAgIHN0YXJ0KHRpbWVTbGljZTogbnVtYmVyKTogdm9pZDtcclxuICAgIC8qKiBTdG9wcyByZWNvcmRpbmcgKi9cclxuICAgIHN0b3AoKTogdm9pZDtcclxuXHJcbiAgICAvKiogRXZlbnQgcmFpc2VkIHdoZW4gYW4gZXJyb3IgYXJpc2VkLiAqL1xyXG4gICAgb25lcnJvcjogKGV2ZW50OiBFcnJvckV2ZW50KSA9PiB2b2lkO1xyXG4gICAgLyoqIEV2ZW50IHJhaXNlZCB3aGVuIHRoZSByZWNvcmRpbmcgc3RvcHMuICovXHJcbiAgICBvbnN0b3A6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcbiAgICAvKiogRXZlbnQgcmFpc2VkIHdoZW4gYSBuZXcgY2h1bmsgb2YgZGF0YSBpcyBhdmFpbGFibGUgYW5kIHNob3VsZCBiZSB0cmFja2VkLiAqL1xyXG4gICAgb25kYXRhYXZhaWxhYmxlOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWVkaWFSZWNvcmRlck9wdGlvbnMge1xyXG4gICAgLyoqIFRoZSBtaW1lIHR5cGUgeW91IHdhbnQgdG8gdXNlIGFzIHRoZSByZWNvcmRpbmcgY29udGFpbmVyIGZvciB0aGUgbmV3IE1lZGlhUmVjb3JkZXIuICovXHJcbiAgICBtaW1lVHlwZT86IHN0cmluZztcclxuICAgIC8qKiBUaGUgY2hvc2VuIGJpdHJhdGUgZm9yIHRoZSBhdWRpbyBjb21wb25lbnQgb2YgdGhlIG1lZGlhLiAqL1xyXG4gICAgYXVkaW9CaXRzUGVyU2Vjb25kPzogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBjaG9zZW4gYml0cmF0ZSBmb3IgdGhlIHZpZGVvIGNvbXBvbmVudCBvZiB0aGUgbWVkaWEuICovXHJcbiAgICB2aWRlb0JpdHNQZXJTZWNvbmQ/OiBudW1iZXI7XHJcbiAgICAvKiogVGhlIGNob3NlbiBiaXRyYXRlIGZvciB0aGUgYXVkaW8gYW5kIHZpZGVvIGNvbXBvbmVudHMgb2YgdGhlIG1lZGlhLiBUaGlzIGNhbiBiZSBzcGVjaWZpZWQgaW5zdGVhZCBvZiB0aGUgYWJvdmUgdHdvIHByb3BlcnRpZXMuXHJcbiAgICAgKiBJZiB0aGlzIGlzIHNwZWNpZmllZCBhbG9uZyB3aXRoIG9uZSBvciB0aGUgb3RoZXIgb2YgdGhlIGFib3ZlIHByb3BlcnRpZXMsIHRoaXMgd2lsbCBiZSB1c2VkIGZvciB0aGUgb25lIHRoYXQgaXNuJ3Qgc3BlY2lmaWVkLiAqL1xyXG4gICAgYml0c1BlclNlY29uZD86IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1lZGlhUmVjb3JkZXJDb25zdHJ1Y3RvciB7XHJcbiAgICAvKipcclxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwcm90b3R5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHByb3RvdHlwZTogTWVkaWFSZWNvcmRlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgTWVkaWFSZWNvcmRlci5cclxuICAgICAqIEBwYXJhbSBzdHJlYW0gRGVmaW5lcyB0aGUgc3RyZWFtIHRvIHJlY29yZC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIERlZmluZXMgdGhlIG9wdGlvbnMgZm9yIHRoZSByZWNvcmRlciBhdmFpbGFibGUgaW4gdGhlIHR5cGUgTWVkaWFSZWNvcmRlck9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIG5ldyAoc3RyZWFtOiBNZWRpYVN0cmVhbSwgb3B0aW9ucz86IE1lZGlhUmVjb3JkZXJPcHRpb25zKTogTWVkaWFSZWNvcmRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lZGlhUmVjb3JkZXIgb2JqZWN0IGF2YWlsYWJsZSBpbiBzb21lIGJyb3dzZXJzLlxyXG4gKi9cclxuZGVjbGFyZSB2YXIgTWVkaWFSZWNvcmRlcjogTWVkaWFSZWNvcmRlckNvbnN0cnVjdG9yO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgcmVwcmVzZW50cyB0aGUgZGlmZmVyZW50IG9wdGlvbnMgYXZhaWxhYmxlIGZvciB0aGUgdmlkZW8gY2FwdHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9SZWNvcmRlck9wdGlvbnMge1xyXG4gICAgLyoqIFRoZSBjYW52YXMgeW91IHdhbnQgdG8gcmVjb3JkICovXHJcbiAgICBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIC8qKiBEZWZpbmVzIHRoZSBtaW1lIHR5cGUgb2YgdGhlIHZpZGVvLiAqL1xyXG4gICAgbWltZVR5cGU6IHN0cmluZztcclxuICAgIC8qKiBEZWZpbmVzIHRoZSBGUFMgdGhlIHZpZGVvIHNob3VsZCBiZSByZWNvcmRlZCBhdC4gKi9cclxuICAgIGZwczogbnVtYmVyO1xyXG4gICAgLyoqIERlZmluZXMgdGhlIGNodW5rIHNpemUgZm9yIHRoZSByZWNvcmRpbmcgZGF0YS4gKi9cclxuICAgIHJlY29yZENodW5ja1NpemU6IG51bWJlcjtcclxuICAgIC8qKiBUaGUgYXVkaW8gdHJhY2tzIHRvIGF0dGFjaCB0byB0aGUgcmVjb3JkaW5nLiAqL1xyXG4gICAgYXVkaW9UcmFja3M/OiBNZWRpYVN0cmVhbVRyYWNrW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNhbiBoZWxwIHdpdGggcmVjb3JkaW5nIHZpZGVvcyBmcm9tIEJhYnlsb25KUy5cclxuICogVGhpcyBpcyBiYXNlZCBvbiB0aGUgYXZhaWxhYmxlIFdlYlJUQyBmdW5jdGlvbmFsaXRpZXMgb2YgdGhlIGJyb3dzZXIuXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL3NjZW5lL3JlbmRlclRvVmlkZW9cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1JlY29yZGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9EZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBtaW1lVHlwZTogXCJ2aWRlby93ZWJtXCIsXHJcbiAgICAgICAgZnBzOiAyNSxcclxuICAgICAgICByZWNvcmRDaHVuY2tTaXplOiAzMDAwLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIFZpZGVvUmVjb3JkZXIgaXMgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci5cclxuICAgICAqIEBwYXJhbSBlbmdpbmUgRGVmaW5lcyB0aGUgQmFieWxvbiBFbmdpbmUuXHJcbiAgICAgKiBAcGFyYW0gY2FudmFzIERlZmluZXMgdGhlIGNhbnZhcyB0byByZWNvcmQuIElmIG5vdCBwcm92aWRlZCwgdGhlIGVuZ2luZSBjYW52YXMgd2lsbCBiZSB1c2VkLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBzdXBwb3J0ZWQgb3RoZXJ3aXNlIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIElzU3VwcG9ydGVkKGVuZ2luZTogQWJzdHJhY3RFbmdpbmUsIGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2FudmFzID0gY2FudmFzID8/IGVuZ2luZS5nZXRSZW5kZXJpbmdDYW52YXMoKTtcclxuICAgICAgICByZXR1cm4gISF0YXJnZXRDYW52YXMgJiYgdHlwZW9mICg8YW55PnRhcmdldENhbnZhcykuY2FwdHVyZVN0cmVhbSA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29wdGlvbnM6IFZpZGVvUmVjb3JkZXJPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfY2FudmFzOiBOdWxsYWJsZTxIVE1MQ2FudmFzRWxlbWVudD47XHJcbiAgICBwcml2YXRlIF9tZWRpYVJlY29yZGVyOiBOdWxsYWJsZTxNZWRpYVJlY29yZGVyPjtcclxuXHJcbiAgICBwcml2YXRlIF9yZWNvcmRlZENodW5rczogYW55W107XHJcbiAgICBwcml2YXRlIF9maWxlTmFtZTogTnVsbGFibGU8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgX3Jlc29sdmU6IE51bGxhYmxlPChibG9iOiBCbG9iKSA9PiB2b2lkPjtcclxuICAgIHByaXZhdGUgX3JlamVjdDogTnVsbGFibGU8KGVycm9yOiBhbnkpID0+IHZvaWQ+O1xyXG5cclxuICAgIHByaXZhdGUgX2lzUmVjb3JkaW5nOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSB3aGVuIGEgcmVjb3JkaW5nIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNSZWNvcmRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fY2FudmFzICYmIHRoaXMuX2lzUmVjb3JkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFZpZGVvQ2FwdHVyZSBvYmplY3Qgd2hpY2ggY2FuIGhlbHAgY29udmVydGluZyB3aGF0IHlvdSBzZWUgaW4gQmFieWxvbiB0byBhIHZpZGVvIGZpbGUuXHJcbiAgICAgKiBAcGFyYW0gZW5naW5lIERlZmluZXMgdGhlIEJhYnlsb25KUyBFbmdpbmUgeW91IHdpc2ggdG8gcmVjb3JkLlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRGVmaW5lcyBvcHRpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBjYXB0dXJlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmU6IEFic3RyYWN0RW5naW5lLCBvcHRpb25zOiBQYXJ0aWFsPFZpZGVvUmVjb3JkZXJPcHRpb25zPiA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFWaWRlb1JlY29yZGVyLklzU3VwcG9ydGVkKGVuZ2luZSwgb3B0aW9ucy5jYW52YXMpKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgIHRocm93IFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgcmVjb3JkaW5nIHNvIGZhci5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IG9wdGlvbnMuY2FudmFzID8/IGVuZ2luZS5nZXRSZW5kZXJpbmdDYW52YXMoKTtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICB0aHJvdyBcIlRoZSBiYWJ5bG9uIGVuZ2luZSBtdXN0IGhhdmUgYSBjYW52YXMgdG8gYmUgcmVjb3JkZWRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLl9pc1JlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5WaWRlb1JlY29yZGVyLl9EZWZhdWx0T3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9jYW52YXMuY2FwdHVyZVN0cmVhbSh0aGlzLl9vcHRpb25zLmZwcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXVkaW9UcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiB0aGlzLl9vcHRpb25zLmF1ZGlvVHJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0uYWRkVHJhY2sodHJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9tZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtLCB7IG1pbWVUeXBlOiB0aGlzLl9vcHRpb25zLm1pbWVUeXBlIH0pO1xyXG4gICAgICAgIHRoaXMuX21lZGlhUmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2dDogRXZlbnQpID0+IHRoaXMuX2hhbmRsZURhdGFBdmFpbGFibGUoZXZ0KTtcclxuICAgICAgICB0aGlzLl9tZWRpYVJlY29yZGVyLm9uZXJyb3IgPSAoZXZ0OiBFcnJvckV2ZW50KSA9PiB0aGlzLl9oYW5kbGVFcnJvcihldnQpO1xyXG4gICAgICAgIHRoaXMuX21lZGlhUmVjb3JkZXIub25zdG9wID0gKCkgPT4gdGhpcy5faGFuZGxlU3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGN1cnJlbnQgcmVjb3JkaW5nIGJlZm9yZSB0aGUgZGVmYXVsdCBjYXB0dXJlIHRpbWVvdXQgcGFzc2VkIGluIHRoZSBzdGFydFJlY29yZGluZyBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3BSZWNvcmRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW52YXMgfHwgIXRoaXMuX21lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgcmVjb3JkaW5nIHRoZSBjYW52YXMgZm9yIGEgbWF4IGR1cmF0aW9uIHNwZWNpZmllZCBpbiBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIERlZmluZXMgdGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gYmUgZG93bmxvYWRlZCB3aGVuIHRoZSByZWNvcmRpbmcgc3RvcC5cclxuICAgICAqIElmIG51bGwgbm8gYXV0b21hdGljIGRvd25sb2FkIHdpbGwgc3RhcnQgYW5kIHlvdSBjYW4gcmVseSBvbiB0aGUgcHJvbWlzZSB0byBnZXQgdGhlIGRhdGEgYmFjay5cclxuICAgICAqIEBwYXJhbSBtYXhEdXJhdGlvbiBEZWZpbmVzIHRoZSBtYXhpbXVtIHJlY29yZGluZyB0aW1lIGluIHNlY29uZHMuXHJcbiAgICAgKiBJdCBkZWZhdWx0cyB0byA3IHNlY29uZHMuIEEgdmFsdWUgb2YgemVybyB3aWxsIG5vdCBzdG9wIGF1dG9tYXRpY2FsbHksIHlvdSB3b3VsZCBuZWVkIHRvIGNhbGwgc3RvcFJlY29yZGluZyBtYW51YWxseS5cclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSBjYWxsYmFjayBhdCB0aGUgZW5kIG9mIHRoZSByZWNvcmRpbmcgd2l0aCB0aGUgdmlkZW8gZGF0YSBpbiBCbG9iLlxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgIHB1YmxpYyBzdGFydFJlY29yZGluZyhmaWxlTmFtZTogTnVsbGFibGU8c3RyaW5nPiA9IFwiYmFieWxvbmpzLndlYm1cIiwgbWF4RHVyYXRpb24gPSA3KTogUHJvbWlzZTxCbG9iPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW52YXMgfHwgIXRoaXMuX21lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICAgICAgdGhyb3cgXCJSZWNvcmRlciBoYXMgYWxyZWFkeSBiZWVuIGRpc3Bvc2VkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICB0aHJvdyBcIlJlY29yZGluZyBhbHJlYWR5IGluIHByb2dyZXNzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4RHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sIG1heER1cmF0aW9uICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maWxlTmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHRoaXMuX3JlY29yZGVkQ2h1bmtzID0gW107XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5faXNSZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21lZGlhUmVjb3JkZXIuc3RhcnQodGhpcy5fb3B0aW9ucy5yZWNvcmRDaHVuY2tTaXplKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEJsb2I+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbGVhc2VzIGludGVybmFsIHJlc291cmNlcyB1c2VkIGR1cmluZyB0aGUgcmVjb3JkaW5nLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX21lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9yZWNvcmRlZENodW5rcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ZpbGVOYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9yZXNvbHZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9yZWplY3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZURhdGFBdmFpbGFibGUoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY29yZGVkQ2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZUVycm9yKGV2ZW50OiBFcnJvckV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wUmVjb3JkaW5nKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9yZWplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0KGV2ZW50LmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZXZlbnQuZXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGFuZGxlU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3BSZWNvcmRpbmcoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VwZXJCdWZmZXIgPSBuZXcgQmxvYih0aGlzLl9yZWNvcmRlZENodW5rcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc29sdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZShzdXBlckJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdXBlckJ1ZmZlcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9maWxlTmFtZSkge1xyXG4gICAgICAgICAgICBUb29scy5Eb3dubG9hZChzdXBlckJ1ZmZlciwgdGhpcy5fZmlsZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZXJpYWxpemVBc01lc2hSZWZlcmVuY2UsIHNlcmlhbGl6ZUFzVmVjdG9yMyB9IGZyb20gXCIuLi9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvbkhlbHBlciB9IGZyb20gXCIuLi9NaXNjL2RlY29yYXRvcnMuc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBSZW5kZXJUYXJnZXRUZXh0dXJlIH0gZnJvbSBcIi4uL01hdGVyaWFscy9UZXh0dXJlcy9yZW5kZXJUYXJnZXRUZXh0dXJlXCI7XHJcbmltcG9ydCB7IE1hdHJpeCwgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCIuLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgVW5pZm9ybUJ1ZmZlciB9IGZyb20gXCIuLi9NYXRlcmlhbHMvdW5pZm9ybUJ1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL0lBc3NldENvbnRhaW5lclwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi9zY2VuZVwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NlbmUge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBsaXN0IG9mIHJlZmxlY3Rpb24gcHJvYmVzIGFkZGVkIHRvIHRoZSBzY2VuZVxyXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2Vudmlyb25tZW50L3JlZmxlY3Rpb25Qcm9iZXNcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWZsZWN0aW9uUHJvYmVzOiBBcnJheTxSZWZsZWN0aW9uUHJvYmU+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiByZWZsZWN0aW9uIHByb2JlIGZyb20gdGhpcyBzY2VuZS5cclxuICAgICAgICAgKiBAcGFyYW0gdG9SZW1vdmUgVGhlIHJlZmxlY3Rpb24gcHJvYmUgdG8gcmVtb3ZlXHJcbiAgICAgICAgICogQHJldHVybnMgVGhlIGluZGV4IG9mIHRoZSByZW1vdmVkIHJlZmxlY3Rpb24gcHJvYmVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZW1vdmVSZWZsZWN0aW9uUHJvYmUodG9SZW1vdmU6IFJlZmxlY3Rpb25Qcm9iZSk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkcyB0aGUgZ2l2ZW4gcmVmbGVjdGlvbiBwcm9iZSB0byB0aGlzIHNjZW5lLlxyXG4gICAgICAgICAqIEBwYXJhbSBuZXdSZWZsZWN0aW9uUHJvYmUgVGhlIHJlZmxlY3Rpb24gcHJvYmUgdG8gYWRkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWRkUmVmbGVjdGlvblByb2JlKG5ld1JlZmxlY3Rpb25Qcm9iZTogUmVmbGVjdGlvblByb2JlKTogdm9pZDtcclxuICAgIH1cclxufVxyXG5cclxuU2NlbmUucHJvdG90eXBlLnJlbW92ZVJlZmxlY3Rpb25Qcm9iZSA9IGZ1bmN0aW9uICh0b1JlbW92ZTogUmVmbGVjdGlvblByb2JlKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5yZWZsZWN0aW9uUHJvYmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZWZsZWN0aW9uUHJvYmVzLmluZGV4T2YodG9SZW1vdmUpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMucmVmbGVjdGlvblByb2Jlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmRleDtcclxufTtcclxuXHJcblNjZW5lLnByb3RvdHlwZS5hZGRSZWZsZWN0aW9uUHJvYmUgPSBmdW5jdGlvbiAobmV3UmVmbGVjdGlvblByb2JlOiBSZWZsZWN0aW9uUHJvYmUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWZsZWN0aW9uUHJvYmVzKSB7XHJcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uUHJvYmVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWZsZWN0aW9uUHJvYmVzLnB1c2gobmV3UmVmbGVjdGlvblByb2JlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIGdlbmVyYXRlIHJlYWx0aW1lIHJlZmxlY3Rpb24gLyByZWZyYWN0aW9uIGN1YmUgdGV4dHVyZXNcclxuICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvZW52aXJvbm1lbnQvcmVmbGVjdGlvblByb2Jlc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25Qcm9iZSB7XHJcbiAgICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIF9yZW5kZXJUYXJnZXRUZXh0dXJlOiBSZW5kZXJUYXJnZXRUZXh0dXJlO1xyXG4gICAgcHJpdmF0ZSBfcHJvamVjdGlvbk1hdHJpeDogTWF0cml4O1xyXG4gICAgcHJpdmF0ZSBfdmlld01hdHJpeCA9IE1hdHJpeC5JZGVudGl0eSgpO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0ID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBwcml2YXRlIF9hZGQgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIEBzZXJpYWxpemVBc01lc2hSZWZlcmVuY2UoKVxyXG4gICAgcHJpdmF0ZSBfYXR0YWNoZWRNZXNoOiBOdWxsYWJsZTxBYnN0cmFjdE1lc2g+O1xyXG5cclxuICAgIHByaXZhdGUgX2ludmVydFlBeGlzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zY2VuZVVCT3M6IFVuaWZvcm1CdWZmZXJbXTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRTY2VuZVVCTzogVW5pZm9ybUJ1ZmZlcjtcclxuXHJcbiAgICAvKiogR2V0cyBvciBzZXRzIHByb2JlIHBvc2l0aW9uIChjZW50ZXIgb2YgdGhlIGN1YmUgbWFwKSAqL1xyXG4gICAgQHNlcmlhbGl6ZUFzVmVjdG9yMygpXHJcbiAgICBwdWJsaWMgcG9zaXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhbiBvYmplY3QgdXNlZCB0byBzdG9yZSB1c2VyIGRlZmluZWQgaW5mb3JtYXRpb24gZm9yIHRoZSByZWZsZWN0aW9uIHByb2JlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWV0YWRhdGE6IGFueSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9wYXJlbnRDb250YWluZXI6IE51bGxhYmxlPElBc3NldENvbnRhaW5lcj4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyByZWZsZWN0aW9uIHByb2JlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBwcm9iZVxyXG4gICAgICogQHBhcmFtIHNpemUgZGVmaW5lcyB0aGUgdGV4dHVyZSByZXNvbHV0aW9uIChmb3IgZWFjaCBmYWNlKVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGhvc3Rpbmcgc2NlbmVcclxuICAgICAqIEBwYXJhbSBnZW5lcmF0ZU1pcE1hcHMgZGVmaW5lcyBpZiBtaXAgbWFwcyBzaG91bGQgYmUgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkgKHRydWUgYnkgZGVmYXVsdClcclxuICAgICAqIEBwYXJhbSB1c2VGbG9hdCBkZWZpbmVzIGlmIEhEUiBkYXRhIChmbG9hdCBkYXRhKSBzaG91bGQgYmUgdXNlZCB0byBzdG9yZSBjb2xvcnMgKGZhbHNlIGJ5IGRlZmF1bHQpXHJcbiAgICAgKiBAcGFyYW0gbGluZWFyU3BhY2UgZGVmaW5lcyBpZiB0aGUgcHJvYmUgc2hvdWxkIGJlIGdlbmVyYXRlZCBpbiBsaW5lYXIgc3BhY2Ugb3Igbm90IChmYWxzZSBieSBkZWZhdWx0KVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKiogZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcHJvYmUgKi9cclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHNpemU6IG51bWJlcixcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZ2VuZXJhdGVNaXBNYXBzID0gdHJ1ZSxcclxuICAgICAgICB1c2VGbG9hdCA9IGZhbHNlLFxyXG4gICAgICAgIGxpbmVhclNwYWNlID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIGlmIChzY2VuZS5nZXRFbmdpbmUoKS5zdXBwb3J0c1VuaWZvcm1CdWZmZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lVUJPcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NlbmVVQk9zLnB1c2goc2NlbmUuY3JlYXRlU2NlbmVVbmlmb3JtQnVmZmVyKGBTY2VuZSBmb3IgUmVmbGVjdGlvbiBQcm9iZSAobmFtZSBcIiR7bmFtZX1cIikgZmFjZSAjJHtpfWApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzY2VuZSBmaWVsZCBpZiBub3QgZXhpc3QuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2VuZS5yZWZsZWN0aW9uUHJvYmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLnJlZmxlY3Rpb25Qcm9iZXMgPSBbXSBhcyBSZWZsZWN0aW9uUHJvYmVbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2NlbmUucmVmbGVjdGlvblByb2Jlcy5wdXNoKHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfVU5TSUdORURfQllURTtcclxuICAgICAgICBpZiAodXNlRmxvYXQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FwcyA9IHRoaXMuX3NjZW5lLmdldEVuZ2luZSgpLmdldENhcHMoKTtcclxuICAgICAgICAgICAgaWYgKGNhcHMudGV4dHVyZUhhbGZGbG9hdFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfSEFMRl9GTE9BVDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXBzLnRleHR1cmVGbG9hdFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZVR5cGUgPSBDb25zdGFudHMuVEVYVFVSRVRZUEVfRkxPQVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZSA9IG5ldyBSZW5kZXJUYXJnZXRUZXh0dXJlKG5hbWUsIHNpemUsIHNjZW5lLCBnZW5lcmF0ZU1pcE1hcHMsIHRydWUsIHRleHR1cmVUeXBlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLmdhbW1hU3BhY2UgPSAhbGluZWFyU3BhY2U7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5pbnZlcnRaID0gc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZVJldmVyc2VEZXB0aEJ1ZmZlciA9IHNjZW5lLmdldEVuZ2luZSgpLnVzZVJldmVyc2VEZXB0aEJ1ZmZlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUuYWRkKChmYWNlSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2NlbmVVQk9zKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5zZXRTY2VuZVVuaWZvcm1CdWZmZXIodGhpcy5fc2NlbmVVQk9zW2ZhY2VJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuZ2V0U2NlbmVVbmlmb3JtQnVmZmVyKCkudW5iaW5kRWZmZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoIChmYWNlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGQuY29weUZyb21GbG9hdHMoMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkLmNvcHlGcm9tRmxvYXRzKC0xLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGQuY29weUZyb21GbG9hdHMoMCwgdGhpcy5faW52ZXJ0WUF4aXMgPyAxIDogLTEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZC5jb3B5RnJvbUZsb2F0cygwLCB0aGlzLl9pbnZlcnRZQXhpcyA/IC0xIDogMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkLmNvcHlGcm9tRmxvYXRzKDAsIDAsIHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gLTEgOiAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGQuY29weUZyb21GbG9hdHMoMCwgMCwgc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyAxIDogLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYXR0YWNoZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHlGcm9tKHRoaXMuX2F0dGFjaGVkTWVzaC5nZXRBYnNvbHV0ZVBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZFRvUmVmKHRoaXMuX2FkZCwgdGhpcy5fdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2tBdEZ1bmN0aW9uID0gc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBNYXRyaXguTG9va0F0UkhUb1JlZiA6IE1hdHJpeC5Mb29rQXRMSFRvUmVmO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJzcGVjdGl2ZUZ1bmN0aW9uID0gc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBNYXRyaXguUGVyc3BlY3RpdmVGb3ZSSCA6IE1hdHJpeC5QZXJzcGVjdGl2ZUZvdkxIO1xyXG5cclxuICAgICAgICAgICAgbG9va0F0RnVuY3Rpb24odGhpcy5wb3NpdGlvbiwgdGhpcy5fdGFyZ2V0LCBWZWN0b3IzLlVwKCksIHRoaXMuX3ZpZXdNYXRyaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlRnVuY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5QSSAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VSZXZlcnNlRGVwdGhCdWZmZXIgPyBzY2VuZS5hY3RpdmVDYW1lcmEubWF4WiA6IHNjZW5lLmFjdGl2ZUNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVJldmVyc2VEZXB0aEJ1ZmZlciA/IHNjZW5lLmFjdGl2ZUNhbWVyYS5taW5aIDogc2NlbmUuYWN0aXZlQ2FtZXJhLm1heFosXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NlbmUuZ2V0RW5naW5lKCkuaXNORENIYWxmWlJhbmdlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuc2V0VHJhbnNmb3JtTWF0cml4KHRoaXMuX3ZpZXdNYXRyaXgsIHRoaXMuX3Byb2plY3Rpb25NYXRyaXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYS5pc1JpZ0NhbWVyYSAmJiAhdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5hY3RpdmVDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLmFjdGl2ZUNhbWVyYSA9IHNjZW5lLmFjdGl2ZUNhbWVyYS5yaWdQYXJlbnQgfHwgbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY2VuZS5fZm9yY2VkVmlld1Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRBcHBseUJ5UG9zdFByb2Nlc3M6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUub25CZWZvcmVCaW5kT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbmdpbmUgPSBzY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lVUJPID0gc2NlbmUuZ2V0U2NlbmVVbmlmb3JtQnVmZmVyKCk7XHJcbiAgICAgICAgICAgIGlmIChlbmdpbmUuX2VuYWJsZUdQVURlYnVnTWFya2Vycykge1xyXG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc3RvcmVEZWZhdWx0RnJhbWVidWZmZXIoKTtcclxuICAgICAgICAgICAgICAgIGVuZ2luZS5fZGVidWdQdXNoR3JvdXAoYHJlZmxlY3Rpb24gcHJvYmUgZ2VuZXJhdGlvbiBmb3IgJHtuYW1lfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRBcHBseUJ5UG9zdFByb2Nlc3MgPSB0aGlzLl9zY2VuZS5pbWFnZVByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmFwcGx5QnlQb3N0UHJvY2VzcztcclxuICAgICAgICAgICAgaWYgKGxpbmVhclNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5pbWFnZVByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmFwcGx5QnlQb3N0UHJvY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5vbkFmdGVyVW5iaW5kT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbmdpbmUgPSBzY2VuZS5nZXRFbmdpbmUoKTtcclxuICAgICAgICAgICAgc2NlbmUuaW1hZ2VQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5hcHBseUJ5UG9zdFByb2Nlc3MgPSBjdXJyZW50QXBwbHlCeVBvc3RQcm9jZXNzO1xyXG4gICAgICAgICAgICBzY2VuZS5fZm9yY2VkVmlld1Bvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NjZW5lVUJPcykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuc2V0U2NlbmVVbmlmb3JtQnVmZmVyKHRoaXMuX2N1cnJlbnRTY2VuZVVCTyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2NlbmUudXBkYXRlVHJhbnNmb3JtTWF0cml4KHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZW5naW5lLl9lbmFibGVHUFVEZWJ1Z01hcmtlcnMpIHtcclxuICAgICAgICAgICAgICAgIGVuZ2luZS5fZGVidWdQb3BHcm91cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldHMgb3Igc2V0cyB0aGUgbnVtYmVyIG9mIHNhbXBsZXMgdG8gdXNlIGZvciBtdWx0aS1zYW1wbGluZyAoMCBieSBkZWZhdWx0KS4gUmVxdWlyZWQgV2ViR0wyICovXHJcbiAgICBwdWJsaWMgZ2V0IHNhbXBsZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5zYW1wbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2FtcGxlcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5zYW1wbGVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldHMgb3Igc2V0cyB0aGUgcmVmcmVzaCByYXRlIHRvIHVzZSAob24gZXZlcnkgZnJhbWUgYnkgZGVmYXVsdCkgKi9cclxuICAgIHB1YmxpYyBnZXQgcmVmcmVzaFJhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5yZWZyZXNoUmF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJlZnJlc2hSYXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLnJlZnJlc2hSYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBob3N0aW5nIHNjZW5lXHJcbiAgICAgKiBAcmV0dXJucyBhIFNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZSgpOiBTY2VuZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXRzIHRoZSBpbnRlcm5hbCBDdWJlVGV4dHVyZSB1c2VkIHRvIHJlbmRlciB0byAqL1xyXG4gICAgcHVibGljIGdldCBjdWJlVGV4dHVyZSgpOiBSZW5kZXJUYXJnZXRUZXh0dXJlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0cyBvciBzZXRzIHRoZSBsaXN0IG9mIG1lc2hlcyB0byByZW5kZXIgKi9cclxuICAgIHB1YmxpYyBnZXQgcmVuZGVyTGlzdCgpOiBOdWxsYWJsZTxBYnN0cmFjdE1lc2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLnJlbmRlckxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCByZW5kZXJMaXN0KHZhbHVlOiBOdWxsYWJsZTxBYnN0cmFjdE1lc2hbXT4pIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLnJlbmRlckxpc3QgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCB0aGUgcHJvYmUgdG8gYSBzcGVjaWZpYyBtZXNoIChSZW5kZXJpbmcgd2lsbCBiZSBkb25lIGZyb20gYXR0YWNoZWQgbWVzaCdzIHBvc2l0aW9uKVxyXG4gICAgICogQHBhcmFtIG1lc2ggZGVmaW5lcyB0aGUgbWVzaCB0byBhdHRhY2ggdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaFRvTWVzaChtZXNoOiBOdWxsYWJsZTxBYnN0cmFjdE1lc2g+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNoZWRNZXNoID0gbWVzaDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0aGUgc3RlbmNpbCBhbmQgZGVwdGggYnVmZmVyIGFyZSBjbGVhcmVkIGJldHdlZW4gdHdvIHJlbmRlcmluZyBncm91cHNcclxuICAgICAqIEBwYXJhbSByZW5kZXJpbmdHcm91cElkIFRoZSByZW5kZXJpbmcgZ3JvdXAgaWQgY29ycmVzcG9uZGluZyB0byBpdHMgaW5kZXhcclxuICAgICAqIEBwYXJhbSBhdXRvQ2xlYXJEZXB0aFN0ZW5jaWwgQXV0b21hdGljYWxseSBjbGVhcnMgZGVwdGggYW5kIHN0ZW5jaWwgYmV0d2VlbiBncm91cHMgaWYgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFJlbmRlcmluZ0F1dG9DbGVhckRlcHRoU3RlbmNpbChyZW5kZXJpbmdHcm91cElkOiBudW1iZXIsIGF1dG9DbGVhckRlcHRoU3RlbmNpbDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUuc2V0UmVuZGVyaW5nQXV0b0NsZWFyRGVwdGhTdGVuY2lsKHJlbmRlcmluZ0dyb3VwSWQsIGF1dG9DbGVhckRlcHRoU3RlbmNpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhbiBhbGwgYXNzb2NpYXRlZCByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zY2VuZS5yZWZsZWN0aW9uUHJvYmVzLmluZGV4T2YodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGhlIHNjZW5lIGlmIGZvdW5kXHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLnJlZmxlY3Rpb25Qcm9iZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9wYXJlbnRDb250YWluZXIucmVmbGVjdGlvblByb2Jlcy5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Q29udGFpbmVyLnJlZmxlY3Rpb25Qcm9iZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUpID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zY2VuZVVCT3MpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB1Ym8gb2YgdGhpcy5fc2NlbmVVQk9zKSB7XHJcbiAgICAgICAgICAgICAgICB1Ym8uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lVUJPcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSByZWZsZWN0aW9uIHByb2JlIGluZm9ybWF0aW9uIHRvIGEgcmVhZGFibGUgc3RyaW5nIGZvciBkZWJ1ZyBwdXJwb3NlLlxyXG4gICAgICogQHBhcmFtIGZ1bGxEZXRhaWxzIFN1cHBvcnRzIGZvciBtdWx0aXBsZSBsZXZlbHMgb2YgbG9nZ2luZyB3aXRoaW4gc2NlbmUgbG9hZGluZ1xyXG4gICAgICogQHJldHVybnMgdGhlIGh1bWFuIHJlYWRhYmxlIHJlZmxlY3Rpb24gcHJvYmUgaW5mb1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoZnVsbERldGFpbHM/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0ID0gXCJOYW1lOiBcIiArIHRoaXMubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bGxEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgIHJldCArPSBcIiwgcG9zaXRpb246IFwiICsgdGhpcy5wb3NpdGlvbi50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2F0dGFjaGVkTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9IFwiLCBhdHRhY2hlZCBtZXNoOiBcIiArIHRoaXMuX2F0dGFjaGVkTWVzaC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSByZWZlY3Rpb24gcHJvYmUuXHJcbiAgICAgKiBAcmV0dXJucyBcIlJlZmxlY3Rpb25Qcm9iZVwiXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJSZWZsZWN0aW9uUHJvYmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZSB0aGUgcmVmbGVjdGlvbiBwcm9iZSB0byBhIEpTT04gcmVwcmVzZW50YXRpb24gd2UgY2FuIGVhc2lseSB1c2UgaW4gdGhlIHJlc3BlY3RpdmUgUGFyc2UgZnVuY3Rpb24uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IFNlcmlhbGl6YXRpb25IZWxwZXIuU2VyaWFsaXplKHRoaXMsIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuaXNSZWZsZWN0aW9uUHJvYmUgPSB0cnVlO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGEgcmVmbGVjdGlvbiBwcm9iZSBpbiBvcmRlciB0byByZWNyZWF0ZSB0aGUgcmVmbGVjdGlvbiBwcm9iZSBpbiB0aGUgZ2l2ZW4gc2NlbmUuXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VkUmVmbGVjdGlvblByb2JlIERlZmluZSB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcmVmbGVjdGlvbiBwcm9iZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIERlZmluZSB0aGUgc2NlbmUgdGhlIHBhcnNlZCByZWZsZWN0aW9uIHByb2JlIHNob3VsZCBiZSBpbnN0YW50aWF0ZWQgaW5cclxuICAgICAqIEBwYXJhbSByb290VXJsIERlZmluZSB0aGUgcm9vdCB1cmwgb2YgdGhlIHBhcnNpbmcgc2VxdWVuY2UgaW4gdGhlIGNhc2Ugb2YgcmVsYXRpdmUgZGVwZW5kZW5jaWVzXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcGFyc2VkIHJlZmxlY3Rpb24gcHJvYmUgaWYgc3VjY2Vzc2Z1bFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBhcnNlKHBhcnNlZFJlZmxlY3Rpb25Qcm9iZTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IE51bGxhYmxlPFJlZmxlY3Rpb25Qcm9iZT4ge1xyXG4gICAgICAgIGxldCByZWZsZWN0aW9uUHJvYmU6IE51bGxhYmxlPFJlZmxlY3Rpb25Qcm9iZT4gPSBudWxsO1xyXG4gICAgICAgIGlmIChzY2VuZS5yZWZsZWN0aW9uUHJvYmVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzY2VuZS5yZWZsZWN0aW9uUHJvYmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnAgPSBzY2VuZS5yZWZsZWN0aW9uUHJvYmVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChycC5uYW1lID09PSBwYXJzZWRSZWZsZWN0aW9uUHJvYmUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZmxlY3Rpb25Qcm9iZSA9IHJwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWZsZWN0aW9uUHJvYmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKFxyXG4gICAgICAgICAgICAoKSA9PiByZWZsZWN0aW9uUHJvYmUgfHwgbmV3IFJlZmxlY3Rpb25Qcm9iZShwYXJzZWRSZWZsZWN0aW9uUHJvYmUubmFtZSwgcGFyc2VkUmVmbGVjdGlvblByb2JlLnJlbmRlclRhcmdldFNpemUsIHNjZW5lLCBwYXJzZWRSZWZsZWN0aW9uUHJvYmUuX2dlbmVyYXRlTWlwTWFwcyksXHJcbiAgICAgICAgICAgIHBhcnNlZFJlZmxlY3Rpb25Qcm9iZSxcclxuICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgIHJvb3RVcmxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlZmxlY3Rpb25Qcm9iZS5jdWJlVGV4dHVyZS5fd2FpdGluZ1JlbmRlckxpc3QgPSBwYXJzZWRSZWZsZWN0aW9uUHJvYmUucmVuZGVyTGlzdDtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZFJlZmxlY3Rpb25Qcm9iZS5fYXR0YWNoZWRNZXNoKSB7XHJcbiAgICAgICAgICAgIHJlZmxlY3Rpb25Qcm9iZS5hdHRhY2hUb01lc2goc2NlbmUuZ2V0TWVzaEJ5SWQocGFyc2VkUmVmbGVjdGlvblByb2JlLl9hdHRhY2hlZE1lc2gpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWRSZWZsZWN0aW9uUHJvYmUubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgcmVmbGVjdGlvblByb2JlLm1ldGFkYXRhID0gcGFyc2VkUmVmbGVjdGlvblByb2JlLm1ldGFkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZmxlY3Rpb25Qcm9iZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZXF1aXJlY3Rhbmd1bGFyUGFub3JhbWFQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNpZmRlZiBHTF9FU1xucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuI2VuZGlmXG4jZGVmaW5lIE1fUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XG52YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gc2FtcGxlckN1YmUgY3ViZU1hcDt2b2lkIG1haW4odm9pZCkge3ZlYzIgdXY9dlVWO2Zsb2F0IGxvbmdpdHVkZT11di54KjIuKk1fUEktTV9QSStNX1BJLzIuO2Zsb2F0IGxhdGl0dWRlPSgxLi11di55KSpNX1BJO3ZlYzMgZGlyPXZlYzMoXG4tIHNpbiggbG9uZ2l0dWRlICkqc2luKCBsYXRpdHVkZSApLFxuY29zKCBsYXRpdHVkZSApLFxuLSBjb3MoIGxvbmdpdHVkZSApKnNpbiggbGF0aXR1ZGUgKVxuKTtub3JtYWxpemUoIGRpciApO2dsX0ZyYWdDb2xvcj10ZXh0dXJlQ3ViZSggY3ViZU1hcCxkaXIgKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGVxdWlyZWN0YW5ndWxhclBhbm9yYW1hUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgQnV0dG9uTGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL2J1dHRvbkxpbmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IFN5bmNlZFNsaWRlclByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvc3luY2VkU2xpZGVyUHJvcGVydHlMaW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgSVNjcmVlbnNob3RTaXplIH0gZnJvbSBcImNvcmUvTWlzYy9pbnRlcmZhY2VzL3NjcmVlbnNob3RTaXplXCI7XHJcbmltcG9ydCB7IFN3aXRjaFByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvc3dpdGNoUHJvcGVydHlMaW5lXCI7XHJcbmltcG9ydCB7IFZpZGVvUmVjb3JkZXIgfSBmcm9tIFwiY29yZS9NaXNjL3ZpZGVvUmVjb3JkZXJcIjtcclxuaW1wb3J0IHsgY2FwdHVyZUVxdWlyZWN0YW5ndWxhckZyb21TY2VuZSB9IGZyb20gXCJjb3JlL01pc2MvZXF1aXJlY3Rhbmd1bGFyQ2FwdHVyZVwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvcHJpbWl0aXZlcy9jb2xsYXBzZVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFSZWd1bGFyLCBSZWNvcmRSZWd1bGFyLCBSZWNvcmRTdG9wUmVndWxhciB9IGZyb20gXCJAZmx1ZW50dWkvcmVhY3QtaWNvbnNcIjtcclxuaW1wb3J0IHsgRnJhbWVHcmFwaFV0aWxzIH0gZnJvbSBcImNvcmUvRnJhbWVHcmFwaC9mcmFtZUdyYXBoVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXB0dXJlUnR0VG9vbHM6IEZ1bmN0aW9uQ29tcG9uZW50PHsgc2NlbmU6IFNjZW5lIH0+ID0gKHsgc2NlbmUgfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZVdpZHRoSGVpZ2h0LCBzZXRVc2VXaWR0aEhlaWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2NyZWVuc2hvdFNpemUsIHNldFNjcmVlbnNob3RTaXplXSA9IHVzZVN0YXRlPElTY3JlZW5zaG90U2l6ZT4oeyBwcmVjaXNpb246IDEgfSk7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZVJlbmRlciA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBzaXplVG9Vc2U6IElTY3JlZW5zaG90U2l6ZSA9IHsgLi4uc2NyZWVuc2hvdFNpemUgfTtcclxuICAgICAgICBpZiAoIXVzZVdpZHRoSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNpemVUb1VzZS53aWR0aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc2l6ZVRvVXNlLmhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY2VuZS5hY3RpdmVDYW1lcmEpIHtcclxuICAgICAgICAgICAgVG9vbHMuQ3JlYXRlU2NyZWVuc2hvdFVzaW5nUmVuZGVyVGFyZ2V0KHNjZW5lLmdldEVuZ2luZSgpLCBzY2VuZS5hY3RpdmVDYW1lcmEsIHNpemVUb1VzZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIDQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzY2VuZSwgc2NyZWVuc2hvdFNpemUsIHVzZVdpZHRoSGVpZ2h0XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uTGluZSBsYWJlbD1cIkNhcHR1cmVcIiBpY29uPXtDYW1lcmFSZWd1bGFyfSBvbkNsaWNrPXtjYXB0dXJlUmVuZGVyfSAvPlxyXG4gICAgICAgICAgICA8U3luY2VkU2xpZGVyUHJvcGVydHlMaW5lXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZWNpc2lvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2NyZWVuc2hvdFNpemUucHJlY2lzaW9uID8/IDF9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTY3JlZW5zaG90U2l6ZSh7IC4uLnNjcmVlbnNob3RTaXplLCBwcmVjaXNpb246IHZhbHVlID8/IDEgfSl9XHJcbiAgICAgICAgICAgICAgICBtaW49ezAuMX1cclxuICAgICAgICAgICAgICAgIG1heD17MTB9XHJcbiAgICAgICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTd2l0Y2hQcm9wZXJ0eUxpbmUgbGFiZWw9XCJVc2UgQ3VzdG9tIFdpZHRoL0hlaWdodFwiIHZhbHVlPXt1c2VXaWR0aEhlaWdodH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VXNlV2lkdGhIZWlnaHQodmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8Q29sbGFwc2UgdmlzaWJsZT17dXNlV2lkdGhIZWlnaHR9PlxyXG4gICAgICAgICAgICAgICAgPFN5bmNlZFNsaWRlclByb3BlcnR5TGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY3JlZW5zaG90U2l6ZS53aWR0aCA/PyA1MTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRhKSA9PiBzZXRTY3JlZW5zaG90U2l6ZSh7IC4uLnNjcmVlbnNob3RTaXplLCB3aWR0aDogZGF0YSA/PyA1MTIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN5bmNlZFNsaWRlclByb3BlcnR5TGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NyZWVuc2hvdFNpemUuaGVpZ2h0ID8/IDUxMn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IHNldFNjcmVlbnNob3RTaXplKHsgLi4uc2NyZWVuc2hvdFNpemUsIGhlaWdodDogZGF0YSA/PyA1MTIgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXB0dXJlU2NyZWVuc2hvdFRvb2xzOiBGdW5jdGlvbkNvbXBvbmVudDx7IHNjZW5lOiBTY2VuZSB9PiA9ICh7IHNjZW5lIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc1JlY29yZGluZywgc2V0SXNSZWNvcmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdmlkZW9SZWNvcmRlciA9IHVzZVJlZjxWaWRlb1JlY29yZGVyPigpO1xyXG5cclxuICAgIGNvbnN0IGNhcHR1cmVTY3JlZW5zaG90ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHNjZW5lLmZyYW1lR3JhcGggPyBGcmFtZUdyYXBoVXRpbHMuRmluZE1haW5DYW1lcmEoc2NlbmUuZnJhbWVHcmFwaCkgOiBzY2VuZS5hY3RpdmVDYW1lcmE7XHJcbiAgICAgICAgaWYgKGNhbWVyYSkge1xyXG4gICAgICAgICAgICBUb29scy5DcmVhdGVTY3JlZW5zaG90KHNjZW5lLmdldEVuZ2luZSgpLCBjYW1lcmEsIHsgcHJlY2lzaW9uOiAxIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzY2VuZV0pO1xyXG5cclxuICAgIGNvbnN0IGNhcHR1cmVFcXVpcmVjdGFuZ3VsYXJBc3luYyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlQ2FtZXJhID0gc2NlbmUuYWN0aXZlQ2FtZXJhO1xyXG4gICAgICAgIGlmICghY3VycmVudEFjdGl2ZUNhbWVyYSAmJiBzY2VuZS5mcmFtZUdyYXBoKSB7XHJcbiAgICAgICAgICAgIHNjZW5lLmFjdGl2ZUNhbWVyYSA9IEZyYW1lR3JhcGhVdGlscy5GaW5kTWFpbkNhbWVyYShzY2VuZS5mcmFtZUdyYXBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICBhd2FpdCBjYXB0dXJlRXF1aXJlY3Rhbmd1bGFyRnJvbVNjZW5lKHNjZW5lLCB7IHNpemU6IDEwMjQsIGZpbGVuYW1lOiBcImVxdWlyZWN0YW5ndWxhcl9jYXB0dXJlLnBuZ1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1hdG9taWMtdXBkYXRlc1xyXG4gICAgICAgIHNjZW5lLmFjdGl2ZUNhbWVyYSA9IGN1cnJlbnRBY3RpdmVDYW1lcmE7XHJcbiAgICB9LCBbc2NlbmVdKTtcclxuXHJcbiAgICBjb25zdCByZWNvcmRWaWRlb0FzeW5jID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh2aWRlb1JlY29yZGVyLmN1cnJlbnQgJiYgdmlkZW9SZWNvcmRlci5jdXJyZW50LmlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIHZpZGVvUmVjb3JkZXIuY3VycmVudC5zdG9wUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIHNldElzUmVjb3JkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF2aWRlb1JlY29yZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdmlkZW9SZWNvcmRlci5jdXJyZW50ID0gbmV3IFZpZGVvUmVjb3JkZXIoc2NlbmUuZ2V0RW5naW5lKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCB2aWRlb1JlY29yZGVyLmN1cnJlbnQuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICBzZXRJc1JlY29yZGluZyh0cnVlKTtcclxuICAgIH0sIFtzY2VuZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvbkxpbmUgbGFiZWw9XCJDYXB0dXJlXCIgaWNvbj17Q2FtZXJhUmVndWxhcn0gb25DbGljaz17Y2FwdHVyZVNjcmVlbnNob3R9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25MaW5lIGxhYmVsPVwiQ2FwdHVyZSBFcXVpcmVjdGFuZ3VsYXJcIiBpY29uPXtDYW1lcmFSZWd1bGFyfSBvbkNsaWNrPXtjYXB0dXJlRXF1aXJlY3Rhbmd1bGFyQXN5bmN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25MaW5lXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17aXNSZWNvcmRpbmcgPyBcIlN0b3AgUmVjb3JkaW5nXCIgOiBcIlJlY29yZCBWaWRlb1wifVxyXG4gICAgICAgICAgICAgICAgaXRlbUlkPVwiU3RhcnQvU3RvcCBSZWNvcmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17aXNSZWNvcmRpbmcgPyBSZWNvcmRTdG9wUmVndWxhciA6IFJlY29yZFJlZ3VsYXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWNvcmRWaWRlb0FzeW5jfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHR5cGUgeyBTZXJ2aWNlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGFyaXR5L3NlcnZpY2VEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFRvb2xzU2VydmljZUlkZW50aXR5IH0gZnJvbSBcIi4uL3Rvb2xzU2VydmljZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElUb29sc1NlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHNTZXJ2aWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSURpc3Bvc2FibGUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBDYXB0dXJlUnR0VG9vbHMsIENhcHR1cmVTY3JlZW5zaG90VG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90b29scy9jYXB0dXJlVG9vbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXB0dXJlU2VydmljZURlZmluaXRpb246IFNlcnZpY2VEZWZpbml0aW9uPFtdLCBbSVRvb2xzU2VydmljZV0+ID0ge1xyXG4gICAgZnJpZW5kbHlOYW1lOiBcIkNhcHR1cmUgVG9vbHNcIixcclxuICAgIGNvbnN1bWVzOiBbVG9vbHNTZXJ2aWNlSWRlbnRpdHldLFxyXG4gICAgZmFjdG9yeTogKHRvb2xzU2VydmljZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRSZWdpc3RyYXRpb25zOiBJRGlzcG9zYWJsZVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIFNjcmVlbnNob3QgY2FwdHVyZSBjb250ZW50XHJcbiAgICAgICAgY29udGVudFJlZ2lzdHJhdGlvbnMucHVzaChcclxuICAgICAgICAgICAgdG9vbHNTZXJ2aWNlLmFkZFNlY3Rpb25Db250ZW50KHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJTY3JlZW5zaG90IENhcHR1cmVcIixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IFwiU2NyZWVuc2hvdCBDYXB0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICh7IGNvbnRleHQgfSkgPT4gPENhcHR1cmVTY3JlZW5zaG90VG9vbHMgc2NlbmU9e2NvbnRleHR9IC8+LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFJUVCBjYXB0dXJlIGNvbnRlbnRcclxuICAgICAgICBjb250ZW50UmVnaXN0cmF0aW9ucy5wdXNoKFxyXG4gICAgICAgICAgICB0b29sc1NlcnZpY2UuYWRkU2VjdGlvbkNvbnRlbnQoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcIlJUVCBDYXB0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBcIlJUVCBDYXB0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICh7IGNvbnRleHQgfSkgPT4gPENhcHR1cmVSdHRUb29scyBzY2VuZT17Y29udGV4dH0gLz4sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGVudFJlZ2lzdHJhdGlvbnMuZm9yRWFjaCgocmVnaXN0cmF0aW9uKSA9PiByZWdpc3RyYXRpb24uZGlzcG9zZSgpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNlcnZpY2VEZWZpbml0aW9uczogW0NhcHR1cmVTZXJ2aWNlRGVmaW5pdGlvbl0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=