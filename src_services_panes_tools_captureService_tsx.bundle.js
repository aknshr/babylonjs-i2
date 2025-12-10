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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var _Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Materials/Textures/renderTargetTexture */ "../core/dist/Materials/Textures/renderTargetTexture.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene */ "../core/dist/scene.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype.removeReflectionProbe = function (toRemove) {
    if (!this.reflectionProbes) {
        return -1;
    }
    const index = this.reflectionProbes.indexOf(toRemove);
    if (index !== -1) {
        this.reflectionProbes.splice(index, 1);
    }
    return index;
};
_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype.addReflectionProbe = function (newReflectionProbe) {
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
        this._viewMatrix = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.Identity();
        this._target = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Zero();
        this._add = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Zero();
        this._invertYAxis = false;
        /** Gets or sets probe position (center of the cube map) */
        this.position = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Zero();
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
        let textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.TEXTURETYPE_UNSIGNED_BYTE;
        if (useFloat) {
            const caps = this._scene.getEngine().getCaps();
            if (caps.textureHalfFloatRender) {
                textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.TEXTURETYPE_HALF_FLOAT;
            }
            else if (caps.textureFloatRender) {
                textureType = _Engines_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.TEXTURETYPE_FLOAT;
            }
        }
        this._renderTargetTexture = new _Materials_Textures_renderTargetTexture__WEBPACK_IMPORTED_MODULE_2__.RenderTargetTexture(name, size, scene, generateMipMaps, true, textureType, true);
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
            const lookAtFunction = scene.useRightHandedSystem ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.LookAtRHToRef : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.LookAtLHToRef;
            const perspectiveFunction = scene.useRightHandedSystem ? _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.PerspectiveFovRH : _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.PerspectiveFovLH;
            lookAtFunction(this.position, this._target, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3.Up(), this._viewMatrix);
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
            this._currentSceneUBO = scene.getSceneUniformBuffer();
            scene.getEngine()._debugPushGroup?.(`reflection probe generation for ${name}`, 1);
            currentApplyByPostProcess = this._scene.imageProcessingConfiguration.applyByPostProcess;
            if (linearSpace) {
                scene.imageProcessingConfiguration.applyByPostProcess = true;
            }
        });
        this._renderTargetTexture.onAfterUnbindObservable.add(() => {
            scene.imageProcessingConfiguration.applyByPostProcess = currentApplyByPostProcess;
            scene._forcedViewPosition = null;
            if (this._sceneUBOs) {
                scene.setSceneUniformBuffer(this._currentSceneUBO);
            }
            scene.updateTransformMatrix(true);
            scene.getEngine()._debugPopGroup?.(1);
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
        const serializationObject = _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Serialize(this, this._renderTargetTexture.serialize());
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
        reflectionProbe = _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(() => reflectionProbe || new ReflectionProbe(parsedReflectionProbe.name, parsedReflectionProbe.renderTargetSize, scene, parsedReflectionProbe._generateMipMaps), parsedReflectionProbe, scene, rootUrl);
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
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsMeshReference)()
], ReflectionProbe.prototype, "_attachedMesh", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector3)()
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: "Capture", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.CameraRegular, onClick: captureScreenshot }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: "Capture Equirectangular", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.CameraRegular, onClick: captureEquirectangularAsync }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_1__.ButtonLine, { label: isRecording ? "Stop Recording" : "Record Video", itemId: "Start/Stop Record", icon: isRecording ? _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.RecordStopRegular : _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.RecordRegular, onClick: recordVideoAsync })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlcnZpY2VzX3BhbmVzX3Rvb2xzX2NhcHR1cmVTZXJ2aWNlX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBOzs7O0FBSUE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBU0E7QUEzQkE7QUFDQTtBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQW1DQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFnRUE7Ozs7O0FBS0E7QUFDQTtBQU9BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUEzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBMEJBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFqQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFsVEE7QUFEQTtBQUNBO0FBUUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBOEJBO0FBOUNBOztBQUFBO0FBZ0RBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQTdDQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9UZXh0dXJlcy9Qcm9jZWR1cmFscy9jdXN0b21Qcm9jZWR1cmFsVGV4dHVyZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZXF1aXJlY3Rhbmd1bGFyQ2FwdHVyZS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvdmlkZW9SZWNvcmRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1Byb2Jlcy9yZWZsZWN0aW9uUHJvYmUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL2VxdWlyZWN0YW5ndWxhclBhbm9yYW1hLmZyYWdtZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvaW5zcGVjdG9yLXYyL3NyYy9jb21wb25lbnRzL3Rvb2xzL2NhcHR1cmVUb29scy50c3giLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9pbnNwZWN0b3ItdjIvc3JjL3NlcnZpY2VzL3BhbmVzL3Rvb2xzL2NhcHR1cmVTZXJ2aWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi8uLi8uLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzLCBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IENvbG9yNCwgQ29sb3IzIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCIuLi8uLi8uLi9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElQcm9jZWR1cmFsVGV4dHVyZUNyZWF0aW9uT3B0aW9ucyB9IGZyb20gXCIuL3Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB7IFByb2NlZHVyYWxUZXh0dXJlIH0gZnJvbSBcIi4vcHJvY2VkdXJhbFRleHR1cmVcIjtcclxuaW1wb3J0IHsgV2ViUmVxdWVzdCB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3dlYlJlcXVlc3RcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlU2l6ZSB9IGZyb20gXCIuLi8uLi8uLi9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZUNyZWF0aW9uT3B0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgdG8gY3JlYXRlIGEgQ3VzdG9tIFByb2NlZHVyYWwgVGV4dHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVByb2NlZHVyYWxUZXh0dXJlQ3JlYXRpb25PcHRpb25zIGV4dGVuZHMgSVByb2NlZHVyYWxUZXh0dXJlQ3JlYXRpb25PcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIGEgYm9vbGVuYSBpbmRpY2F0aW5nIHRoYXQgdGhlcmUgaXMgbm8ganNvbiBjb25maWcgZmlsZSB0byBsb2FkXHJcbiAgICAgKi9cclxuICAgIHNraXBKc29uPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2NlZHVyYWwgdGV4dHVyaW5nIGlzIGEgd2F5IHRvIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlIGEgdGV4dHVyZS4gVGhlcmUgYXJlIDIgdHlwZXMgb2YgcHJvY2VkdXJhbCB0ZXh0dXJlczogY29kZS1vbmx5LCBhbmQgY29kZSB0aGF0IHJlZmVyZW5jZXMgc29tZSBjbGFzc2ljIDJEIGltYWdlcywgc29tZXRpbWVzIGNhbGxlZCAncmVmTWFwcycgb3IgJ3NhbXBsZXInIGltYWdlcy5cclxuICogQ3VzdG9tIFByb2NlZHVyYWwgdGV4dHVyZXMgYXJlIHRoZSBlYXNpZXN0IHdheSB0byBjcmVhdGUgeW91ciBvd24gcHJvY2VkdXJhbCBpbiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9tYXRlcmlhbHMvdXNpbmcvcHJvY2VkdXJhbFRleHR1cmVzI2NyZWF0aW5nLWN1c3RvbS1wcm9jZWR1cmFsLXRleHR1cmVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3VzdG9tUHJvY2VkdXJhbFRleHR1cmUgZXh0ZW5kcyBQcm9jZWR1cmFsVGV4dHVyZSB7XHJcbiAgICBwcml2YXRlIF9hbmltYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX3RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jb25maWc6IGFueTtcclxuICAgIHByaXZhdGUgX3RleHR1cmVQYXRoOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YW50aWF0ZXMgYSBuZXcgQ3VzdG9tIFByb2NlZHVyYWwgVGV4dHVyZS5cclxuICAgICAqIFByb2NlZHVyYWwgdGV4dHVyaW5nIGlzIGEgd2F5IHRvIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlIGEgdGV4dHVyZS4gVGhlcmUgYXJlIDIgdHlwZXMgb2YgcHJvY2VkdXJhbCB0ZXh0dXJlczogY29kZS1vbmx5LCBhbmQgY29kZSB0aGF0IHJlZmVyZW5jZXMgc29tZSBjbGFzc2ljIDJEIGltYWdlcywgc29tZXRpbWVzIGNhbGxlZCAncmVmTWFwcycgb3IgJ3NhbXBsZXInIGltYWdlcy5cclxuICAgICAqIEN1c3RvbSBQcm9jZWR1cmFsIHRleHR1cmVzIGFyZSB0aGUgZWFzaWVzdCB3YXkgdG8gY3JlYXRlIHlvdXIgb3duIHByb2NlZHVyYWwgaW4geW91ciBhcHBsaWNhdGlvbi5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21hdGVyaWFscy91c2luZy9wcm9jZWR1cmFsVGV4dHVyZXMjY3JlYXRpbmctY3VzdG9tLXByb2NlZHVyYWwtdGV4dHVyZXNcclxuICAgICAqIEBwYXJhbSBuYW1lIERlZmluZSB0aGUgbmFtZSBvZiB0aGUgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHRleHR1cmVQYXRoIERlZmluZSB0aGUgZm9sZGVyIHBhdGggY29udGFpbmluZyBhbGwgdGhlIGN1c3RvbSB0ZXh0dXJlIHJlbGF0ZWQgZmlsZXMgKGNvbmZpZywgc2hhZGVycy4uLilcclxuICAgICAqIEBwYXJhbSBzaXplIERlZmluZSB0aGUgc2l6ZSBvZiB0aGUgdGV4dHVyZSB0byBjcmVhdGVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBEZWZpbmUgdGhlIHNjZW5lIHRoZSB0ZXh0dXJlIGJlbG9uZ3MgdG9cclxuICAgICAqIEBwYXJhbSBmYWxsYmFja1RleHR1cmUgRGVmaW5lIGEgZmFsbGJhY2sgdGV4dHVyZSBpbiBjYXNlIHRoZXJlIHdlcmUgaXNzdWVzIHRvIGNyZWF0ZSB0aGUgY3VzdG9tIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBnZW5lcmF0ZU1pcE1hcHMgRGVmaW5lIGlmIHRoZSB0ZXh0dXJlIHNob3VsZCBjcmVhdGVzIG1pcCBtYXBzIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIHNraXBKc29uIERlZmluZSBhIGJvb2xlbmEgaW5kaWNhdGluZyB0aGF0IHRoZXJlIGlzIG5vIGpzb24gY29uZmlnIGZpbGUgdG8gbG9hZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBzaXplOiBUZXh0dXJlU2l6ZSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZmFsbGJhY2tUZXh0dXJlPzogVGV4dHVyZSB8IElDdXN0b21Qcm9jZWR1cmFsVGV4dHVyZUNyZWF0aW9uT3B0aW9ucyxcclxuICAgICAgICBnZW5lcmF0ZU1pcE1hcHM/OiBib29sZWFuLFxyXG4gICAgICAgIHNraXBKc29uPzogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgc2l6ZSwgbnVsbCwgc2NlbmUsIGZhbGxiYWNrVGV4dHVyZSwgZ2VuZXJhdGVNaXBNYXBzKTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlUGF0aCA9IHRleHR1cmVQYXRoO1xyXG5cclxuICAgICAgICBpZiAoZmFsbGJhY2tUZXh0dXJlICYmICEoZmFsbGJhY2tUZXh0dXJlIGluc3RhbmNlb2YgVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgc2tpcEpzb24gPSAhIWZhbGxiYWNrVGV4dHVyZS5za2lwSnNvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2tpcEpzb24pIHtcclxuICAgICAgICAgICAgLy9UcnkgdG8gbG9hZCBqc29uXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRKc29uKHRleHR1cmVQYXRoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZyYWdtZW50KHRoaXMuX3RleHR1cmVQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmF0ZSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZEpzb24oanNvblVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9Db25maWdGaWxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFnbWVudCh0aGlzLl90ZXh0dXJlUGF0aCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuTG9nKFwiTm8ganNvbiBvciBTaGFkZXJTdG9yZSBvciBET00gZWxlbWVudCBmb3VuZCBmb3IgQ3VzdG9tUHJvY2VkdXJhbFRleHR1cmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWdGaWxlVXJsID0ganNvblVybCArIFwiL2NvbmZpZy5qc29uXCI7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFdlYlJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgY29uZmlnRmlsZVVybCk7XHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwibG9hZFwiLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwIHx8ICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWcgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFnbWVudCh0aGlzLl90ZXh0dXJlUGF0aCArIFwiL2N1c3RvbVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGUgPSB0aGlzLl9jb25maWcuYW5pbWF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoUmF0ZSA9IHRoaXMuX2NvbmZpZy5yZWZyZXNocmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0NvbmZpZ0ZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vQ29uZmlnRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vQ29uZmlnRmlsZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiQ3VzdG9tUHJvY2VkdXJhbFRleHR1cmU6IEVycm9yIG9uIFhIUiBzZW5kIHJlcXVlc3QuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB0ZXh0dXJlIHJlYWR5IHRvIGJlIHVzZWQgPyAocmVuZGVyZWQgYXQgbGVhc3Qgb25jZSlcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgcmVhZHksIG90aGVyd2lzZSwgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBpc1JlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghc3VwZXIuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLl90ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5fdGV4dHVyZXNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIHRoZSB0ZXh0dXJlIHRvIGl0cyBhc3NvY2lhdGVkIHJlbmRlciB0YXJnZXQuXHJcbiAgICAgKiBAcGFyYW0gdXNlQ2FtZXJhUG9zdFByb2Nlc3MgRGVmaW5lIGlmIGNhbWVyYSBwb3N0IHByb2Nlc3Mgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHJlbmRlcih1c2VDYW1lcmFQb3N0UHJvY2Vzcz86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmUoKTtcclxuICAgICAgICBpZiAodGhpcy5fYW5pbWF0ZSAmJiBzY2VuZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lICs9IHNjZW5lLmdldEFuaW1hdGlvblJhdGlvKCkgKiAwLjAzO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci5yZW5kZXIodXNlQ2FtZXJhUG9zdFByb2Nlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGRlcGVuZGFudCB0ZXh0dXJlcyBzYW1wbGVycyBpbiB0aGUgc2hhZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVGV4dHVyZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb25maWcuc2FtcGxlcjJEcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHR1cmUodGhpcy5fY29uZmlnLnNhbXBsZXIyRHNbaV0uc2FtcGxlMkRuYW1lLCBuZXcgVGV4dHVyZSh0aGlzLl90ZXh0dXJlUGF0aCArIFwiL1wiICsgdGhpcy5fY29uZmlnLnNhbXBsZXIyRHNbaV0udGV4dHVyZVJlbGF0aXZlVXJsLCB0aGlzLmdldFNjZW5lKCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHVuaWZvcm0gdmFsdWVzIG9mIHRoZSBwcm9jZWR1cmFsIHRleHR1cmUgaW4gdGhlIHNoYWRlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVNoYWRlclVuaWZvcm1zKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9jb25maWcudW5pZm9ybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaWZvcm0gPSB0aGlzLl9jb25maWcudW5pZm9ybXNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh1bmlmb3JtLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGbG9hdCh1bmlmb3JtLm5hbWUsIHVuaWZvcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29sb3IzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3IzKHVuaWZvcm0ubmFtZSwgbmV3IENvbG9yMyh1bmlmb3JtLnIsIHVuaWZvcm0uZywgdW5pZm9ybS5iKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvcjRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvcjQodW5pZm9ybS5uYW1lLCBuZXcgQ29sb3I0KHVuaWZvcm0uciwgdW5pZm9ybS5nLCB1bmlmb3JtLmIsIHVuaWZvcm0uYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmVjdG9yMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZlY3RvcjIodW5pZm9ybS5uYW1lLCBuZXcgVmVjdG9yMih1bmlmb3JtLngsIHVuaWZvcm0ueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmVjdG9yM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZlY3RvcjModW5pZm9ybS5uYW1lLCBuZXcgVmVjdG9yMyh1bmlmb3JtLngsIHVuaWZvcm0ueSwgdW5pZm9ybS56KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwidGltZVwiLCB0aGlzLl90aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSBpZiB0aGUgdGV4dHVyZSBhbmltYXRlcyBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5pbWF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGFuaW1hdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBSZWZsZWN0aW9uUHJvYmUgfSBmcm9tIFwiLi4vUHJvYmVzL3JlZmxlY3Rpb25Qcm9iZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCIuLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IFJlbmRlclRhcmdldFRleHR1cmUgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL3JlbmRlclRhcmdldFRleHR1cmVcIjtcclxuaW1wb3J0IHsgQ3VzdG9tUHJvY2VkdXJhbFRleHR1cmUgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL2N1c3RvbVByb2NlZHVyYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB7IER1bXBEYXRhIH0gZnJvbSBcIi4vZHVtcFRvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgXCIuLi9TaGFkZXJzL2VxdWlyZWN0YW5ndWxhclBhbm9yYW1hLmZyYWdtZW50XCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGNvbnRhaW5pbmcgb3B0aW9ucyByZWxhdGVkIHRvIGVxdWlyZWN0YW5ndWxhciBjYXB0dXJlIG9mIHRoZSBjdXJyZW50IHNjZW5lXHJcbiAqL1xyXG4vLyBTaG91bGQgaGF2ZSBcIklcIiBwcmVmaXggYnV0IHdlIGFyZSBrZWVwaW5nIGl0IGFzIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBFcXVpUmVjdGFuZ3VsYXJDYXB0dXJlT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgb3B0aW9uIHJlbGF0ZXMgdG8gc21hbGxlc3QgZGltZW5zaW9uIG9mIHRoZSBnaXZlbiBlcXVpcmVjdGFuZ3VsYXIgY2FwdHVyZVxyXG4gICAgICogR2l2aW5nIGEgNTEycHggc2l6ZSB3b3VsZCByZXN1bHQgaW4gYW4gaW1hZ2UgdGhhdCA1MTIgeCAxMDI0cHhcclxuICAgICAqL1xyXG4gICAgc2l6ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25hbCBmdW5jdGlvbiB0byBtYXAgd2hpY2ggbWVzaGVzIHNob3VsZCBnZXQgcmVuZGVyZWQgb24gdGhlIGVxdWlyZWN0YW5ndWxhciBtYXBcclxuICAgICAqIFRoaXMgaXMgc3BlY2lmaWNhbGx5IGhlbHBmdWwgd2hlbiB5b3UgaGF2ZSBjZXJ0YWluIG1lc2hlcyB0aGF0IHlvdSB3YW50IHRvIHNraXAsIGVzcGVjaWFsbHkgZ3JvdW5kXHJcbiAgICAgKi9cclxuICAgIG1lc2hlc0ZpbHRlcj86IChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbmFsIGFyZ3VtZW50IHRvIHNwZWNpZnkgZmlsZW5hbWUsIHBhc3NpbmcgdGhpcyB3b3VsZCBhdXRvIGRvd25sb2FkIHRoZSBnaXZlbiBmaWxlXHJcbiAgICAgKi9cclxuICAgIGZpbGVuYW1lPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwgYXJndW1lbnQgdG8gc3BlY2lmeSBwb3NpdGlvbiBpbiAzRCBTcGFjZSBmcm9tIHdoZXJlIHRoZSBlcXVpcmVjdGFuZ3VsYXIgY2FwdHVyZSBzaG91bGQgYmUgdGFrZW4sIGlmIG5vdCBzcGVjaWZpZWQsIGl0IHdvdWxkIHRha2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSdzIGFjdGl2ZSBjYW1lcmEgb3IgZWxzZSBvcmlnaW5cclxuICAgICAqL1xyXG4gICAgcG9zaXRpb24/OiBWZWN0b3IzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwgYXJndW1lbnQgdG8gc3BlY2lmeSBwcm9iZSB3aXRoIHdoaWNoIHRoZSBlcXVpcmVjdGFuZ3VsYXIgaW1hZ2UgaXMgZ2VuZXJhdGVkXHJcbiAgICAgKiBXaGVuIHBhc3NpbmcgdGhpcywgc2l6ZSBhbmQgcG9zaXRpb24gYXJndW1lbnRzIGFyZSBpZ25vcmVkXHJcbiAgICAgKi9cclxuICAgIHByb2JlPzogUmVmbGVjdGlvblByb2JlO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHNjZW5lIFRoaXMgcmVmZXJzIHRvIHRoZSBzY2VuZSB3aGljaCB3b3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgZ2l2ZW4gZXF1aXJlY3Rhbmd1bGFyIGNhcHR1cmVcclxuICogQHBhcmFtIG9wdGlvbnMgVGhpcyByZWZlcnMgdG8gdGhlIG9wdGlvbnMgZm9yIGEgZ2l2ZW4gZXF1aXJlY3Rhbmd1bGFyIGNhcHR1cmVcclxuICogQHJldHVybnMgdGhlIHJlcXVlc3RlZCBjYXB0dXJlJ3MgcGl4ZWwtZGF0YSBvciBhdXRvIGRvd25sb2FkcyB0aGUgZmlsZSBpZiBvcHRpb25zLmZpbGVuYW1lIGlzIHNwZWNpZmllZFxyXG4gKi9cclxuLy8gU2hvdWxkIGVuZCB3aXRoIFwiQXN5bmNcIiBhbmQgc3RhcnQgd2l0aCBcIkNcIiBidXQgd2UgYXJlIGtlZXBpbmcgaXQgYXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVFcXVpcmVjdGFuZ3VsYXJGcm9tU2NlbmUoc2NlbmU6IFNjZW5lLCBvcHRpb25zOiBFcXVpUmVjdGFuZ3VsYXJDYXB0dXJlT3B0aW9ucyk6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3IHwgbnVsbD4ge1xyXG4gICAgY29uc3QgcHJvYmU6IFJlZmxlY3Rpb25Qcm9iZSA9IG9wdGlvbnMucHJvYmUgPz8gbmV3IFJlZmxlY3Rpb25Qcm9iZShcInRlbXBQcm9iZVwiLCBvcHRpb25zLnNpemUsIHNjZW5lKTtcclxuICAgIGNvbnN0IHdhc1Byb2JlUHJvdmlkZWQgPSAhIW9wdGlvbnMucHJvYmU7XHJcbiAgICBpZiAoIXdhc1Byb2JlUHJvdmlkZWQpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICBwcm9iZS5wb3NpdGlvbiA9IG9wdGlvbnMucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICBwcm9iZS5wb3NpdGlvbiA9IHNjZW5lLmFjdGl2ZUNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG1lc2hlc1RvQ29uc2lkZXIgPSBvcHRpb25zLm1lc2hlc0ZpbHRlciA/IHNjZW5lLm1lc2hlcy5maWx0ZXIob3B0aW9ucy5tZXNoZXNGaWx0ZXIpIDogc2NlbmUubWVzaGVzO1xyXG4gICAgcHJvYmUucmVuZGVyTGlzdD8ucHVzaCguLi5tZXNoZXNUb0NvbnNpZGVyKTtcclxuICAgIHByb2JlLnJlZnJlc2hSYXRlID0gUmVuZGVyVGFyZ2V0VGV4dHVyZS5SRUZSRVNIUkFURV9SRU5ERVJfT05DRTtcclxuICAgIHByb2JlLmN1YmVUZXh0dXJlLnJlbmRlcigpO1xyXG4gICAgY29uc3QgZHVtcFRleHR1cmUgPSBuZXcgQ3VzdG9tUHJvY2VkdXJhbFRleHR1cmUoXCJ0ZW1wUHJvY2VkdXJhbFRleHR1cmVcIiwgXCJlcXVpcmVjdGFuZ3VsYXJQYW5vcmFtYVwiLCB7IHdpZHRoOiBvcHRpb25zLnNpemUgKiAyLCBoZWlnaHQ6IG9wdGlvbnMuc2l6ZSB9LCBzY2VuZSk7XHJcbiAgICBkdW1wVGV4dHVyZS5zZXRUZXh0dXJlKFwiY3ViZU1hcFwiLCBwcm9iZS5jdWJlVGV4dHVyZSk7XHJcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGR1bXBUZXh0dXJlLm9uR2VuZXJhdGVkT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGl4ZWxEYXRhUHJvbWlzZSA9IGR1bXBUZXh0dXJlLnJlYWRQaXhlbHMoKTtcclxuICAgICAgICAgICAgaWYgKCFwaXhlbERhdGFQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiTm8gUGl4ZWwgRGF0YSBmb3VuZCBvbiBwcm9jZWR1cmFsIHRleHR1cmVcIikpO1xyXG4gICAgICAgICAgICAgICAgZHVtcFRleHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3YXNQcm9iZVByb3ZpZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvYmUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMsIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIHBpeGVsRGF0YVByb21pc2UudGhlbigocGl4ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkdW1wVGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdhc1Byb2JlUHJvdmlkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9iZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIER1bXBEYXRhKG9wdGlvbnMuc2l6ZSAqIDIsIG9wdGlvbnMuc2l6ZSwgcGl4ZWxEYXRhLCB1bmRlZmluZWQsIFwiaW1hZ2UvcG5nXCIsIG9wdGlvbnMuZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGl4ZWxEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcIi4uL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuXHJcbmludGVyZmFjZSBNZWRpYVJlY29yZGVyIHtcclxuICAgIC8qKiBTdGFydHMgcmVjb3JkaW5nICovXHJcbiAgICBzdGFydCh0aW1lU2xpY2U6IG51bWJlcik6IHZvaWQ7XHJcbiAgICAvKiogU3RvcHMgcmVjb3JkaW5nICovXHJcbiAgICBzdG9wKCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqIEV2ZW50IHJhaXNlZCB3aGVuIGFuIGVycm9yIGFyaXNlZC4gKi9cclxuICAgIG9uZXJyb3I6IChldmVudDogRXJyb3JFdmVudCkgPT4gdm9pZDtcclxuICAgIC8qKiBFdmVudCByYWlzZWQgd2hlbiB0aGUgcmVjb3JkaW5nIHN0b3BzLiAqL1xyXG4gICAgb25zdG9wOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xyXG4gICAgLyoqIEV2ZW50IHJhaXNlZCB3aGVuIGEgbmV3IGNodW5rIG9mIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgdHJhY2tlZC4gKi9cclxuICAgIG9uZGF0YWF2YWlsYWJsZTogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1lZGlhUmVjb3JkZXJPcHRpb25zIHtcclxuICAgIC8qKiBUaGUgbWltZSB0eXBlIHlvdSB3YW50IHRvIHVzZSBhcyB0aGUgcmVjb3JkaW5nIGNvbnRhaW5lciBmb3IgdGhlIG5ldyBNZWRpYVJlY29yZGVyLiAqL1xyXG4gICAgbWltZVR5cGU/OiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIGNob3NlbiBiaXRyYXRlIGZvciB0aGUgYXVkaW8gY29tcG9uZW50IG9mIHRoZSBtZWRpYS4gKi9cclxuICAgIGF1ZGlvQml0c1BlclNlY29uZD86IG51bWJlcjtcclxuICAgIC8qKiBUaGUgY2hvc2VuIGJpdHJhdGUgZm9yIHRoZSB2aWRlbyBjb21wb25lbnQgb2YgdGhlIG1lZGlhLiAqL1xyXG4gICAgdmlkZW9CaXRzUGVyU2Vjb25kPzogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBjaG9zZW4gYml0cmF0ZSBmb3IgdGhlIGF1ZGlvIGFuZCB2aWRlbyBjb21wb25lbnRzIG9mIHRoZSBtZWRpYS4gVGhpcyBjYW4gYmUgc3BlY2lmaWVkIGluc3RlYWQgb2YgdGhlIGFib3ZlIHR3byBwcm9wZXJ0aWVzLlxyXG4gICAgICogSWYgdGhpcyBpcyBzcGVjaWZpZWQgYWxvbmcgd2l0aCBvbmUgb3IgdGhlIG90aGVyIG9mIHRoZSBhYm92ZSBwcm9wZXJ0aWVzLCB0aGlzIHdpbGwgYmUgdXNlZCBmb3IgdGhlIG9uZSB0aGF0IGlzbid0IHNwZWNpZmllZC4gKi9cclxuICAgIGJpdHNQZXJTZWNvbmQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNZWRpYVJlY29yZGVyQ29uc3RydWN0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcHJvdG90eXBlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBwcm90b3R5cGU6IE1lZGlhUmVjb3JkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE1lZGlhUmVjb3JkZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RyZWFtIERlZmluZXMgdGhlIHN0cmVhbSB0byByZWNvcmQuXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBEZWZpbmVzIHRoZSBvcHRpb25zIGZvciB0aGUgcmVjb3JkZXIgYXZhaWxhYmxlIGluIHRoZSB0eXBlIE1lZGlhUmVjb3JkZXJPcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBuZXcgKHN0cmVhbTogTWVkaWFTdHJlYW0sIG9wdGlvbnM/OiBNZWRpYVJlY29yZGVyT3B0aW9ucyk6IE1lZGlhUmVjb3JkZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZWRpYVJlY29yZGVyIG9iamVjdCBhdmFpbGFibGUgaW4gc29tZSBicm93c2Vycy5cclxuICovXHJcbmRlY2xhcmUgdmFyIE1lZGlhUmVjb3JkZXI6IE1lZGlhUmVjb3JkZXJDb25zdHJ1Y3RvcjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHJlcHJlc2VudHMgdGhlIGRpZmZlcmVudCBvcHRpb25zIGF2YWlsYWJsZSBmb3IgdGhlIHZpZGVvIGNhcHR1cmUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvUmVjb3JkZXJPcHRpb25zIHtcclxuICAgIC8qKiBUaGUgY2FudmFzIHlvdSB3YW50IHRvIHJlY29yZCAqL1xyXG4gICAgY2FudmFzPzogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAvKiogRGVmaW5lcyB0aGUgbWltZSB0eXBlIG9mIHRoZSB2aWRlby4gKi9cclxuICAgIG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICAvKiogRGVmaW5lcyB0aGUgRlBTIHRoZSB2aWRlbyBzaG91bGQgYmUgcmVjb3JkZWQgYXQuICovXHJcbiAgICBmcHM6IG51bWJlcjtcclxuICAgIC8qKiBEZWZpbmVzIHRoZSBjaHVuayBzaXplIGZvciB0aGUgcmVjb3JkaW5nIGRhdGEuICovXHJcbiAgICByZWNvcmRDaHVuY2tTaXplOiBudW1iZXI7XHJcbiAgICAvKiogVGhlIGF1ZGlvIHRyYWNrcyB0byBhdHRhY2ggdG8gdGhlIHJlY29yZGluZy4gKi9cclxuICAgIGF1ZGlvVHJhY2tzPzogTWVkaWFTdHJlYW1UcmFja1tdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjYW4gaGVscCB3aXRoIHJlY29yZGluZyB2aWRlb3MgZnJvbSBCYWJ5bG9uSlMuXHJcbiAqIFRoaXMgaXMgYmFzZWQgb24gdGhlIGF2YWlsYWJsZSBXZWJSVEMgZnVuY3Rpb25hbGl0aWVzIG9mIHRoZSBicm93c2VyLlxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9zY2VuZS9yZW5kZXJUb1ZpZGVvXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlkZW9SZWNvcmRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWltZVR5cGU6IFwidmlkZW8vd2VibVwiLFxyXG4gICAgICAgIGZwczogMjUsXHJcbiAgICAgICAgcmVjb3JkQ2h1bmNrU2l6ZTogMzAwMCxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBWaWRlb1JlY29yZGVyIGlzIGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuXHJcbiAgICAgKiBAcGFyYW0gZW5naW5lIERlZmluZXMgdGhlIEJhYnlsb24gRW5naW5lLlxyXG4gICAgICogQHBhcmFtIGNhbnZhcyBEZWZpbmVzIHRoZSBjYW52YXMgdG8gcmVjb3JkLiBJZiBub3QgcHJvdmlkZWQsIHRoZSBlbmdpbmUgY2FudmFzIHdpbGwgYmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgc3VwcG9ydGVkIG90aGVyd2lzZSBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJc1N1cHBvcnRlZChlbmdpbmU6IEFic3RyYWN0RW5naW5lLCBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENhbnZhcyA9IGNhbnZhcyA/PyBlbmdpbmUuZ2V0UmVuZGVyaW5nQ2FudmFzKCk7XHJcbiAgICAgICAgcmV0dXJuICEhdGFyZ2V0Q2FudmFzICYmIHR5cGVvZiAoPGFueT50YXJnZXRDYW52YXMpLmNhcHR1cmVTdHJlYW0gPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vcHRpb25zOiBWaWRlb1JlY29yZGVyT3B0aW9ucztcclxuICAgIHByaXZhdGUgX2NhbnZhczogTnVsbGFibGU8SFRNTENhbnZhc0VsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBfbWVkaWFSZWNvcmRlcjogTnVsbGFibGU8TWVkaWFSZWNvcmRlcj47XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVjb3JkZWRDaHVua3M6IGFueVtdO1xyXG4gICAgcHJpdmF0ZSBfZmlsZU5hbWU6IE51bGxhYmxlPHN0cmluZz47XHJcbiAgICBwcml2YXRlIF9yZXNvbHZlOiBOdWxsYWJsZTwoYmxvYjogQmxvYikgPT4gdm9pZD47XHJcbiAgICBwcml2YXRlIF9yZWplY3Q6IE51bGxhYmxlPChlcnJvcjogYW55KSA9PiB2b2lkPjtcclxuXHJcbiAgICBwcml2YXRlIF9pc1JlY29yZGluZzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgd2hlbiBhIHJlY29yZGluZyBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzUmVjb3JkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2NhbnZhcyAmJiB0aGlzLl9pc1JlY29yZGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBWaWRlb0NhcHR1cmUgb2JqZWN0IHdoaWNoIGNhbiBoZWxwIGNvbnZlcnRpbmcgd2hhdCB5b3Ugc2VlIGluIEJhYnlsb24gdG8gYSB2aWRlbyBmaWxlLlxyXG4gICAgICogQHBhcmFtIGVuZ2luZSBEZWZpbmVzIHRoZSBCYWJ5bG9uSlMgRW5naW5lIHlvdSB3aXNoIHRvIHJlY29yZC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIERlZmluZXMgb3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgY2FwdHVyZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZW5naW5lOiBBYnN0cmFjdEVuZ2luZSwgb3B0aW9uczogUGFydGlhbDxWaWRlb1JlY29yZGVyT3B0aW9ucz4gPSB7fSkge1xyXG4gICAgICAgIGlmICghVmlkZW9SZWNvcmRlci5Jc1N1cHBvcnRlZChlbmdpbmUsIG9wdGlvbnMuY2FudmFzKSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICB0aHJvdyBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHJlY29yZGluZyBzbyBmYXIuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBvcHRpb25zLmNhbnZhcyA/PyBlbmdpbmUuZ2V0UmVuZGVyaW5nQ2FudmFzKCk7XHJcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICAgICAgdGhyb3cgXCJUaGUgYmFieWxvbiBlbmdpbmUgbXVzdCBoYXZlIGEgY2FudmFzIHRvIGJlIHJlY29yZGVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5faXNSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4uVmlkZW9SZWNvcmRlci5fRGVmYXVsdE9wdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fY2FudmFzLmNhcHR1cmVTdHJlYW0odGhpcy5fb3B0aW9ucy5mcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1ZGlvVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgdGhpcy5fb3B0aW9ucy5hdWRpb1RyYWNrcykge1xyXG4gICAgICAgICAgICAgICAgc3RyZWFtLmFkZFRyYWNrKHRyYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwgeyBtaW1lVHlwZTogdGhpcy5fb3B0aW9ucy5taW1lVHlwZSB9KTtcclxuICAgICAgICB0aGlzLl9tZWRpYVJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldnQ6IEV2ZW50KSA9PiB0aGlzLl9oYW5kbGVEYXRhQXZhaWxhYmxlKGV2dCk7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFSZWNvcmRlci5vbmVycm9yID0gKGV2dDogRXJyb3JFdmVudCkgPT4gdGhpcy5faGFuZGxlRXJyb3IoZXZ0KTtcclxuICAgICAgICB0aGlzLl9tZWRpYVJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHRoaXMuX2hhbmRsZVN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIHRoZSBjdXJyZW50IHJlY29yZGluZyBiZWZvcmUgdGhlIGRlZmF1bHQgY2FwdHVyZSB0aW1lb3V0IHBhc3NlZCBpbiB0aGUgc3RhcnRSZWNvcmRpbmcgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wUmVjb3JkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FudmFzIHx8ICF0aGlzLl9tZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pc1JlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX21lZGlhUmVjb3JkZXIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHJlY29yZGluZyB0aGUgY2FudmFzIGZvciBhIG1heCBkdXJhdGlvbiBzcGVjaWZpZWQgaW4gcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBEZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHRvIGJlIGRvd25sb2FkZWQgd2hlbiB0aGUgcmVjb3JkaW5nIHN0b3AuXHJcbiAgICAgKiBJZiBudWxsIG5vIGF1dG9tYXRpYyBkb3dubG9hZCB3aWxsIHN0YXJ0IGFuZCB5b3UgY2FuIHJlbHkgb24gdGhlIHByb21pc2UgdG8gZ2V0IHRoZSBkYXRhIGJhY2suXHJcbiAgICAgKiBAcGFyYW0gbWF4RHVyYXRpb24gRGVmaW5lcyB0aGUgbWF4aW11bSByZWNvcmRpbmcgdGltZSBpbiBzZWNvbmRzLlxyXG4gICAgICogSXQgZGVmYXVsdHMgdG8gNyBzZWNvbmRzLiBBIHZhbHVlIG9mIHplcm8gd2lsbCBub3Qgc3RvcCBhdXRvbWF0aWNhbGx5LCB5b3Ugd291bGQgbmVlZCB0byBjYWxsIHN0b3BSZWNvcmRpbmcgbWFudWFsbHkuXHJcbiAgICAgKiBAcmV0dXJucyBBIHByb21pc2UgY2FsbGJhY2sgYXQgdGhlIGVuZCBvZiB0aGUgcmVjb3JkaW5nIHdpdGggdGhlIHZpZGVvIGRhdGEgaW4gQmxvYi5cclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICBwdWJsaWMgc3RhcnRSZWNvcmRpbmcoZmlsZU5hbWU6IE51bGxhYmxlPHN0cmluZz4gPSBcImJhYnlsb25qcy53ZWJtXCIsIG1heER1cmF0aW9uID0gNyk6IFByb21pc2U8QmxvYj4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FudmFzIHx8ICF0aGlzLl9tZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgIHRocm93IFwiUmVjb3JkZXIgaGFzIGFscmVhZHkgYmVlbiBkaXNwb3NlZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICAgICAgdGhyb3cgXCJSZWNvcmRpbmcgYWxyZWFkeSBpbiBwcm9ncmVzc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heER1cmF0aW9uID4gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICB9LCBtYXhEdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB0aGlzLl9yZWNvcmRlZENodW5rcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3JlamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzUmVjb3JkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9tZWRpYVJlY29yZGVyLnN0YXJ0KHRoaXMuX29wdGlvbnMucmVjb3JkQ2h1bmNrU2l6ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxCbG9iPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxlYXNlcyBpbnRlcm5hbCByZXNvdXJjZXMgdXNlZCBkdXJpbmcgdGhlIHJlY29yZGluZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9tZWRpYVJlY29yZGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVjb3JkZWRDaHVua3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9maWxlTmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVEYXRhQXZhaWxhYmxlKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS5zaXplID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWNvcmRlZENodW5rcy5wdXNoKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYW5kbGVFcnJvcihldmVudDogRXJyb3JFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcFJlY29yZGluZygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChldmVudC5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGV2ZW50LmVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hhbmRsZVN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wUmVjb3JkaW5nKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1cGVyQnVmZmVyID0gbmV3IEJsb2IodGhpcy5fcmVjb3JkZWRDaHVua3MpO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUoc3VwZXJCdWZmZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3VwZXJCdWZmZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZmlsZU5hbWUpIHtcclxuICAgICAgICAgICAgVG9vbHMuRG93bmxvYWQoc3VwZXJCdWZmZXIsIHRoaXMuX2ZpbGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VyaWFsaXplQXNNZXNoUmVmZXJlbmNlLCBzZXJpYWxpemVBc1ZlY3RvcjMgfSBmcm9tIFwiLi4vTWlzYy9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25IZWxwZXIgfSBmcm9tIFwiLi4vTWlzYy9kZWNvcmF0b3JzLnNlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgUmVuZGVyVGFyZ2V0VGV4dHVyZSB9IGZyb20gXCIuLi9NYXRlcmlhbHMvVGV4dHVyZXMvcmVuZGVyVGFyZ2V0VGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBNYXRyaXgsIFZlY3RvcjMgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiLi4vTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgdHlwZSB7IFVuaWZvcm1CdWZmZXIgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL3VuaWZvcm1CdWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vc2NlbmVcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjZW5lIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbGlzdCBvZiByZWZsZWN0aW9uIHByb2JlcyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9lbnZpcm9ubWVudC9yZWZsZWN0aW9uUHJvYmVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVmbGVjdGlvblByb2JlczogQXJyYXk8UmVmbGVjdGlvblByb2JlPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gcmVmbGVjdGlvbiBwcm9iZSBmcm9tIHRoaXMgc2NlbmUuXHJcbiAgICAgICAgICogQHBhcmFtIHRvUmVtb3ZlIFRoZSByZWZsZWN0aW9uIHByb2JlIHRvIHJlbW92ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIFRoZSBpbmRleCBvZiB0aGUgcmVtb3ZlZCByZWZsZWN0aW9uIHByb2JlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVtb3ZlUmVmbGVjdGlvblByb2JlKHRvUmVtb3ZlOiBSZWZsZWN0aW9uUHJvYmUpOiBudW1iZXI7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgdGhlIGdpdmVuIHJlZmxlY3Rpb24gcHJvYmUgdG8gdGhpcyBzY2VuZS5cclxuICAgICAgICAgKiBAcGFyYW0gbmV3UmVmbGVjdGlvblByb2JlIFRoZSByZWZsZWN0aW9uIHByb2JlIHRvIGFkZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFJlZmxlY3Rpb25Qcm9iZShuZXdSZWZsZWN0aW9uUHJvYmU6IFJlZmxlY3Rpb25Qcm9iZSk6IHZvaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblNjZW5lLnByb3RvdHlwZS5yZW1vdmVSZWZsZWN0aW9uUHJvYmUgPSBmdW5jdGlvbiAodG9SZW1vdmU6IFJlZmxlY3Rpb25Qcm9iZSk6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMucmVmbGVjdGlvblByb2Jlcykge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmVmbGVjdGlvblByb2Jlcy5pbmRleE9mKHRvUmVtb3ZlKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLnJlZmxlY3Rpb25Qcm9iZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbn07XHJcblxyXG5TY2VuZS5wcm90b3R5cGUuYWRkUmVmbGVjdGlvblByb2JlID0gZnVuY3Rpb24gKG5ld1JlZmxlY3Rpb25Qcm9iZTogUmVmbGVjdGlvblByb2JlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVmbGVjdGlvblByb2Jlcykge1xyXG4gICAgICAgIHRoaXMucmVmbGVjdGlvblByb2JlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVmbGVjdGlvblByb2Jlcy5wdXNoKG5ld1JlZmxlY3Rpb25Qcm9iZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBnZW5lcmF0ZSByZWFsdGltZSByZWZsZWN0aW9uIC8gcmVmcmFjdGlvbiBjdWJlIHRleHR1cmVzXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2Vudmlyb25tZW50L3JlZmxlY3Rpb25Qcm9iZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uUHJvYmUge1xyXG4gICAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyVGFyZ2V0VGV4dHVyZTogUmVuZGVyVGFyZ2V0VGV4dHVyZTtcclxuICAgIHByaXZhdGUgX3Byb2plY3Rpb25NYXRyaXg6IE1hdHJpeDtcclxuICAgIHByaXZhdGUgX3ZpZXdNYXRyaXggPSBNYXRyaXguSWRlbnRpdHkoKTtcclxuICAgIHByaXZhdGUgX3RhcmdldCA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgcHJpdmF0ZSBfYWRkID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICBAc2VyaWFsaXplQXNNZXNoUmVmZXJlbmNlKClcclxuICAgIHByaXZhdGUgX2F0dGFjaGVkTWVzaDogTnVsbGFibGU8QWJzdHJhY3RNZXNoPjtcclxuXHJcbiAgICBwcml2YXRlIF9pbnZlcnRZQXhpcyA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfc2NlbmVVQk9zOiBVbmlmb3JtQnVmZmVyW107XHJcbiAgICBwcml2YXRlIF9jdXJyZW50U2NlbmVVQk86IFVuaWZvcm1CdWZmZXI7XHJcblxyXG4gICAgLyoqIEdldHMgb3Igc2V0cyBwcm9iZSBwb3NpdGlvbiAoY2VudGVyIG9mIHRoZSBjdWJlIG1hcCkgKi9cclxuICAgIEBzZXJpYWxpemVBc1ZlY3RvcjMoKVxyXG4gICAgcHVibGljIHBvc2l0aW9uID0gVmVjdG9yMy5aZXJvKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYW4gb2JqZWN0IHVzZWQgdG8gc3RvcmUgdXNlciBkZWZpbmVkIGluZm9ybWF0aW9uIGZvciB0aGUgcmVmbGVjdGlvbiBwcm9iZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfcGFyZW50Q29udGFpbmVyOiBOdWxsYWJsZTxJQXNzZXRDb250YWluZXI+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmVmbGVjdGlvbiBwcm9iZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcHJvYmVcclxuICAgICAqIEBwYXJhbSBzaXplIGRlZmluZXMgdGhlIHRleHR1cmUgcmVzb2x1dGlvbiAoZm9yIGVhY2ggZmFjZSlcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBob3N0aW5nIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZ2VuZXJhdGVNaXBNYXBzIGRlZmluZXMgaWYgbWlwIG1hcHMgc2hvdWxkIGJlIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5ICh0cnVlIGJ5IGRlZmF1bHQpXHJcbiAgICAgKiBAcGFyYW0gdXNlRmxvYXQgZGVmaW5lcyBpZiBIRFIgZGF0YSAoZmxvYXQgZGF0YSkgc2hvdWxkIGJlIHVzZWQgdG8gc3RvcmUgY29sb3JzIChmYWxzZSBieSBkZWZhdWx0KVxyXG4gICAgICogQHBhcmFtIGxpbmVhclNwYWNlIGRlZmluZXMgaWYgdGhlIHByb2JlIHNob3VsZCBiZSBnZW5lcmF0ZWQgaW4gbGluZWFyIHNwYWNlIG9yIG5vdCAoZmFsc2UgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqIGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHByb2JlICovXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBzaXplOiBudW1iZXIsXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGdlbmVyYXRlTWlwTWFwcyA9IHRydWUsXHJcbiAgICAgICAgdXNlRmxvYXQgPSBmYWxzZSxcclxuICAgICAgICBsaW5lYXJTcGFjZSA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUuZ2V0RW5naW5lKCkuc3VwcG9ydHNVbmlmb3JtQnVmZmVycykge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZVVCT3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lVUJPcy5wdXNoKHNjZW5lLmNyZWF0ZVNjZW5lVW5pZm9ybUJ1ZmZlcihgU2NlbmUgZm9yIFJlZmxlY3Rpb24gUHJvYmUgKG5hbWUgXCIke25hbWV9XCIpIGZhY2UgIyR7aX1gKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc2NlbmUgZmllbGQgaWYgbm90IGV4aXN0LlxyXG4gICAgICAgIGlmICghdGhpcy5fc2NlbmUucmVmbGVjdGlvblByb2Jlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5yZWZsZWN0aW9uUHJvYmVzID0gW10gYXMgUmVmbGVjdGlvblByb2JlW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NjZW5lLnJlZmxlY3Rpb25Qcm9iZXMucHVzaCh0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX1VOU0lHTkVEX0JZVEU7XHJcbiAgICAgICAgaWYgKHVzZUZsb2F0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcHMgPSB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKS5nZXRDYXBzKCk7XHJcbiAgICAgICAgICAgIGlmIChjYXBzLnRleHR1cmVIYWxmRmxvYXRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX0hBTEZfRkxPQVQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2Fwcy50ZXh0dXJlRmxvYXRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmVUeXBlID0gQ29uc3RhbnRzLlRFWFRVUkVUWVBFX0ZMT0FUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUgPSBuZXcgUmVuZGVyVGFyZ2V0VGV4dHVyZShuYW1lLCBzaXplLCBzY2VuZSwgZ2VuZXJhdGVNaXBNYXBzLCB0cnVlLCB0ZXh0dXJlVHlwZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5nYW1tYVNwYWNlID0gIWxpbmVhclNwYWNlO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUuaW52ZXJ0WiA9IHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VSZXZlcnNlRGVwdGhCdWZmZXIgPSBzY2VuZS5nZXRFbmdpbmUoKS51c2VSZXZlcnNlRGVwdGhCdWZmZXI7XHJcblxyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLmFkZCgoZmFjZUluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NjZW5lVUJPcykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuc2V0U2NlbmVVbmlmb3JtQnVmZmVyKHRoaXMuX3NjZW5lVUJPc1tmYWNlSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIHNjZW5lLmdldFNjZW5lVW5pZm9ybUJ1ZmZlcigpLnVuYmluZEVmZmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZmFjZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkLmNvcHlGcm9tRmxvYXRzKDEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZC5jb3B5RnJvbUZsb2F0cygtMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkLmNvcHlGcm9tRmxvYXRzKDAsIHRoaXMuX2ludmVydFlBeGlzID8gMSA6IC0xLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGQuY29weUZyb21GbG9hdHMoMCwgdGhpcy5faW52ZXJ0WUF4aXMgPyAtMSA6IDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZC5jb3B5RnJvbUZsb2F0cygwLCAwLCBzY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkLmNvcHlGcm9tRmxvYXRzKDAsIDAsIHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2F0dGFjaGVkTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5RnJvbSh0aGlzLl9hdHRhY2hlZE1lc2guZ2V0QWJzb2x1dGVQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGRUb1JlZih0aGlzLl9hZGQsIHRoaXMuX3RhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsb29rQXRGdW5jdGlvbiA9IHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gTWF0cml4Lkxvb2tBdFJIVG9SZWYgOiBNYXRyaXguTG9va0F0TEhUb1JlZjtcclxuICAgICAgICAgICAgY29uc3QgcGVyc3BlY3RpdmVGdW5jdGlvbiA9IHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gTWF0cml4LlBlcnNwZWN0aXZlRm92UkggOiBNYXRyaXguUGVyc3BlY3RpdmVGb3ZMSDtcclxuXHJcbiAgICAgICAgICAgIGxvb2tBdEZ1bmN0aW9uKHRoaXMucG9zaXRpb24sIHRoaXMuX3RhcmdldCwgVmVjdG9yMy5VcCgpLCB0aGlzLl92aWV3TWF0cml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzY2VuZS5hY3RpdmVDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZUZ1bmN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguUEkgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUmV2ZXJzZURlcHRoQnVmZmVyID8gc2NlbmUuYWN0aXZlQ2FtZXJhLm1heFogOiBzY2VuZS5hY3RpdmVDYW1lcmEubWluWixcclxuICAgICAgICAgICAgICAgICAgICB1c2VSZXZlcnNlRGVwdGhCdWZmZXIgPyBzY2VuZS5hY3RpdmVDYW1lcmEubWluWiA6IHNjZW5lLmFjdGl2ZUNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLmdldEVuZ2luZSgpLmlzTkRDSGFsZlpSYW5nZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNjZW5lLnNldFRyYW5zZm9ybU1hdHJpeCh0aGlzLl92aWV3TWF0cml4LCB0aGlzLl9wcm9qZWN0aW9uTWF0cml4KTtcclxuICAgICAgICAgICAgICAgIGlmIChzY2VuZS5hY3RpdmVDYW1lcmEuaXNSaWdDYW1lcmEgJiYgIXRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUuYWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5hY3RpdmVDYW1lcmEgPSBzY2VuZS5hY3RpdmVDYW1lcmEucmlnUGFyZW50IHx8IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2NlbmUuX2ZvcmNlZFZpZXdQb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QXBwbHlCeVBvc3RQcm9jZXNzOiBib29sZWFuO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLm9uQmVmb3JlQmluZE9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lVUJPID0gc2NlbmUuZ2V0U2NlbmVVbmlmb3JtQnVmZmVyKCk7XHJcbiAgICAgICAgICAgIHNjZW5lLmdldEVuZ2luZSgpLl9kZWJ1Z1B1c2hHcm91cD8uKGByZWZsZWN0aW9uIHByb2JlIGdlbmVyYXRpb24gZm9yICR7bmFtZX1gLCAxKTtcclxuICAgICAgICAgICAgY3VycmVudEFwcGx5QnlQb3N0UHJvY2VzcyA9IHRoaXMuX3NjZW5lLmltYWdlUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uYXBwbHlCeVBvc3RQcm9jZXNzO1xyXG4gICAgICAgICAgICBpZiAobGluZWFyU3BhY2UpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLmltYWdlUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uYXBwbHlCeVBvc3RQcm9jZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLm9uQWZ0ZXJVbmJpbmRPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNjZW5lLmltYWdlUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uYXBwbHlCeVBvc3RQcm9jZXNzID0gY3VycmVudEFwcGx5QnlQb3N0UHJvY2VzcztcclxuICAgICAgICAgICAgc2NlbmUuX2ZvcmNlZFZpZXdQb3NpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zY2VuZVVCT3MpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLnNldFNjZW5lVW5pZm9ybUJ1ZmZlcih0aGlzLl9jdXJyZW50U2NlbmVVQk8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNjZW5lLnVwZGF0ZVRyYW5zZm9ybU1hdHJpeCh0cnVlKTtcclxuICAgICAgICAgICAgc2NlbmUuZ2V0RW5naW5lKCkuX2RlYnVnUG9wR3JvdXA/LigxKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0cyBvciBzZXRzIHRoZSBudW1iZXIgb2Ygc2FtcGxlcyB0byB1c2UgZm9yIG11bHRpLXNhbXBsaW5nICgwIGJ5IGRlZmF1bHQpLiBSZXF1aXJlZCBXZWJHTDIgKi9cclxuICAgIHB1YmxpYyBnZXQgc2FtcGxlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLnNhbXBsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzYW1wbGVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLnNhbXBsZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0cyBvciBzZXRzIHRoZSByZWZyZXNoIHJhdGUgdG8gdXNlIChvbiBldmVyeSBmcmFtZSBieSBkZWZhdWx0KSAqL1xyXG4gICAgcHVibGljIGdldCByZWZyZXNoUmF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLnJlZnJlc2hSYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcmVmcmVzaFJhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUucmVmcmVzaFJhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGhvc3Rpbmcgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIGEgU2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNjZW5lKCk6IFNjZW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldHMgdGhlIGludGVybmFsIEN1YmVUZXh0dXJlIHVzZWQgdG8gcmVuZGVyIHRvICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1YmVUZXh0dXJlKCk6IFJlbmRlclRhcmdldFRleHR1cmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIGxpc3Qgb2YgbWVzaGVzIHRvIHJlbmRlciAqL1xyXG4gICAgcHVibGljIGdldCByZW5kZXJMaXN0KCk6IE51bGxhYmxlPEFic3RyYWN0TWVzaFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUucmVuZGVyTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJlbmRlckxpc3QodmFsdWU6IE51bGxhYmxlPEFic3RyYWN0TWVzaFtdPikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclRhcmdldFRleHR1cmUucmVuZGVyTGlzdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIHRoZSBwcm9iZSB0byBhIHNwZWNpZmljIG1lc2ggKFJlbmRlcmluZyB3aWxsIGJlIGRvbmUgZnJvbSBhdHRhY2hlZCBtZXNoJ3MgcG9zaXRpb24pXHJcbiAgICAgKiBAcGFyYW0gbWVzaCBkZWZpbmVzIHRoZSBtZXNoIHRvIGF0dGFjaCB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXR0YWNoVG9NZXNoKG1lc2g6IE51bGxhYmxlPEFic3RyYWN0TWVzaD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdHRhY2hlZE1lc2ggPSBtZXNoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRoZSBzdGVuY2lsIGFuZCBkZXB0aCBidWZmZXIgYXJlIGNsZWFyZWQgYmV0d2VlbiB0d28gcmVuZGVyaW5nIGdyb3Vwc1xyXG4gICAgICogQHBhcmFtIHJlbmRlcmluZ0dyb3VwSWQgVGhlIHJlbmRlcmluZyBncm91cCBpZCBjb3JyZXNwb25kaW5nIHRvIGl0cyBpbmRleFxyXG4gICAgICogQHBhcmFtIGF1dG9DbGVhckRlcHRoU3RlbmNpbCBBdXRvbWF0aWNhbGx5IGNsZWFycyBkZXB0aCBhbmQgc3RlbmNpbCBiZXR3ZWVuIGdyb3VwcyBpZiB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UmVuZGVyaW5nQXV0b0NsZWFyRGVwdGhTdGVuY2lsKHJlbmRlcmluZ0dyb3VwSWQ6IG51bWJlciwgYXV0b0NsZWFyRGVwdGhTdGVuY2lsOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5zZXRSZW5kZXJpbmdBdXRvQ2xlYXJEZXB0aFN0ZW5jaWwocmVuZGVyaW5nR3JvdXBJZCwgYXV0b0NsZWFyRGVwdGhTdGVuY2lsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFuIGFsbCBhc3NvY2lhdGVkIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3NjZW5lLnJlZmxlY3Rpb25Qcm9iZXMuaW5kZXhPZih0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSB0aGUgc2NlbmUgaWYgZm91bmRcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUucmVmbGVjdGlvblByb2Jlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BhcmVudENvbnRhaW5lci5yZWZsZWN0aW9uUHJvYmVzLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnRDb250YWluZXIucmVmbGVjdGlvblByb2Jlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudENvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXRUZXh0dXJlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgKDxhbnk+dGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZSkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lVUJPcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVibyBvZiB0aGlzLl9zY2VuZVVCT3MpIHtcclxuICAgICAgICAgICAgICAgIHViby5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2NlbmVVQk9zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIHJlZmxlY3Rpb24gcHJvYmUgaW5mb3JtYXRpb24gdG8gYSByZWFkYWJsZSBzdHJpbmcgZm9yIGRlYnVnIHB1cnBvc2UuXHJcbiAgICAgKiBAcGFyYW0gZnVsbERldGFpbHMgU3VwcG9ydHMgZm9yIG11bHRpcGxlIGxldmVscyBvZiBsb2dnaW5nIHdpdGhpbiBzY2VuZSBsb2FkaW5nXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgaHVtYW4gcmVhZGFibGUgcmVmbGVjdGlvbiBwcm9iZSBpbmZvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0b1N0cmluZyhmdWxsRGV0YWlscz86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXQgPSBcIk5hbWU6IFwiICsgdGhpcy5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoZnVsbERldGFpbHMpIHtcclxuICAgICAgICAgICAgcmV0ICs9IFwiLCBwb3NpdGlvbjogXCIgKyB0aGlzLnBvc2l0aW9uLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYXR0YWNoZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gXCIsIGF0dGFjaGVkIG1lc2g6IFwiICsgdGhpcy5fYXR0YWNoZWRNZXNoLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIHJlZmVjdGlvbiBwcm9iZS5cclxuICAgICAqIEByZXR1cm5zIFwiUmVmbGVjdGlvblByb2JlXCJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlJlZmxlY3Rpb25Qcm9iZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplIHRoZSByZWZsZWN0aW9uIHByb2JlIHRvIGEgSlNPTiByZXByZXNlbnRhdGlvbiB3ZSBjYW4gZWFzaWx5IHVzZSBpbiB0aGUgcmVzcGVjdGl2ZSBQYXJzZSBmdW5jdGlvbi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gU2VyaWFsaXphdGlvbkhlbHBlci5TZXJpYWxpemUodGhpcywgdGhpcy5fcmVuZGVyVGFyZ2V0VGV4dHVyZS5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5pc1JlZmxlY3Rpb25Qcm9iZSA9IHRydWU7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tZXRhZGF0YSA9IHRoaXMubWV0YWRhdGE7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYSByZWZsZWN0aW9uIHByb2JlIGluIG9yZGVyIHRvIHJlY3JlYXRlIHRoZSByZWZsZWN0aW9uIHByb2JlIGluIHRoZSBnaXZlbiBzY2VuZS5cclxuICAgICAqIEBwYXJhbSBwYXJzZWRSZWZsZWN0aW9uUHJvYmUgRGVmaW5lIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZWZsZWN0aW9uIHByb2JlXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgRGVmaW5lIHRoZSBzY2VuZSB0aGUgcGFyc2VkIHJlZmxlY3Rpb24gcHJvYmUgc2hvdWxkIGJlIGluc3RhbnRpYXRlZCBpblxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgRGVmaW5lIHRoZSByb290IHVybCBvZiB0aGUgcGFyc2luZyBzZXF1ZW5jZSBpbiB0aGUgY2FzZSBvZiByZWxhdGl2ZSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEByZXR1cm5zIFRoZSBwYXJzZWQgcmVmbGVjdGlvbiBwcm9iZSBpZiBzdWNjZXNzZnVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUGFyc2UocGFyc2VkUmVmbGVjdGlvblByb2JlOiBhbnksIHNjZW5lOiBTY2VuZSwgcm9vdFVybDogc3RyaW5nKTogTnVsbGFibGU8UmVmbGVjdGlvblByb2JlPiB7XHJcbiAgICAgICAgbGV0IHJlZmxlY3Rpb25Qcm9iZTogTnVsbGFibGU8UmVmbGVjdGlvblByb2JlPiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHNjZW5lLnJlZmxlY3Rpb25Qcm9iZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNjZW5lLnJlZmxlY3Rpb25Qcm9iZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBycCA9IHNjZW5lLnJlZmxlY3Rpb25Qcm9iZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJwLm5hbWUgPT09IHBhcnNlZFJlZmxlY3Rpb25Qcm9iZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmbGVjdGlvblByb2JlID0gcnA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZmxlY3Rpb25Qcm9iZSA9IFNlcmlhbGl6YXRpb25IZWxwZXIuUGFyc2UoXHJcbiAgICAgICAgICAgICgpID0+IHJlZmxlY3Rpb25Qcm9iZSB8fCBuZXcgUmVmbGVjdGlvblByb2JlKHBhcnNlZFJlZmxlY3Rpb25Qcm9iZS5uYW1lLCBwYXJzZWRSZWZsZWN0aW9uUHJvYmUucmVuZGVyVGFyZ2V0U2l6ZSwgc2NlbmUsIHBhcnNlZFJlZmxlY3Rpb25Qcm9iZS5fZ2VuZXJhdGVNaXBNYXBzKSxcclxuICAgICAgICAgICAgcGFyc2VkUmVmbGVjdGlvblByb2JlLFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgcm9vdFVybFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVmbGVjdGlvblByb2JlLmN1YmVUZXh0dXJlLl93YWl0aW5nUmVuZGVyTGlzdCA9IHBhcnNlZFJlZmxlY3Rpb25Qcm9iZS5yZW5kZXJMaXN0O1xyXG5cclxuICAgICAgICBpZiAocGFyc2VkUmVmbGVjdGlvblByb2JlLl9hdHRhY2hlZE1lc2gpIHtcclxuICAgICAgICAgICAgcmVmbGVjdGlvblByb2JlLmF0dGFjaFRvTWVzaChzY2VuZS5nZXRNZXNoQnlJZChwYXJzZWRSZWZsZWN0aW9uUHJvYmUuX2F0dGFjaGVkTWVzaCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZFJlZmxlY3Rpb25Qcm9iZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICByZWZsZWN0aW9uUHJvYmUubWV0YWRhdGEgPSBwYXJzZWRSZWZsZWN0aW9uUHJvYmUubWV0YWRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVmbGVjdGlvblByb2JlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJlcXVpcmVjdGFuZ3VsYXJQYW5vcmFtYVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2lmZGVmIEdMX0VTXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4jZW5kaWZcbiNkZWZpbmUgTV9QSSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTVcbnZhcnlpbmcgdmVjMiB2VVY7dW5pZm9ybSBzYW1wbGVyQ3ViZSBjdWJlTWFwO3ZvaWQgbWFpbih2b2lkKSB7dmVjMiB1dj12VVY7ZmxvYXQgbG9uZ2l0dWRlPXV2LngqMi4qTV9QSS1NX1BJK01fUEkvMi47ZmxvYXQgbGF0aXR1ZGU9KDEuLXV2LnkpKk1fUEk7dmVjMyBkaXI9dmVjMyhcbi0gc2luKCBsb25naXR1ZGUgKSpzaW4oIGxhdGl0dWRlICksXG5jb3MoIGxhdGl0dWRlICksXG4tIGNvcyggbG9uZ2l0dWRlICkqc2luKCBsYXRpdHVkZSApXG4pO25vcm1hbGl6ZSggZGlyICk7Z2xfRnJhZ0NvbG9yPXRleHR1cmVDdWJlKCBjdWJlTWFwLGRpciApO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZXF1aXJlY3Rhbmd1bGFyUGFub3JhbWFQaXhlbFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCJpbXBvcnQgeyBCdXR0b25MaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvYnV0dG9uTGluZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgU3luY2VkU2xpZGVyUHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy9zeW5jZWRTbGlkZXJQcm9wZXJ0eUxpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NyZWVuc2hvdFNpemUgfSBmcm9tIFwiY29yZS9NaXNjL2ludGVyZmFjZXMvc2NyZWVuc2hvdFNpemVcIjtcclxuaW1wb3J0IHsgU3dpdGNoUHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy9zd2l0Y2hQcm9wZXJ0eUxpbmVcIjtcclxuaW1wb3J0IHsgVmlkZW9SZWNvcmRlciB9IGZyb20gXCJjb3JlL01pc2MvdmlkZW9SZWNvcmRlclwiO1xyXG5pbXBvcnQgeyBjYXB0dXJlRXF1aXJlY3Rhbmd1bGFyRnJvbVNjZW5lIH0gZnJvbSBcImNvcmUvTWlzYy9lcXVpcmVjdGFuZ3VsYXJDYXB0dXJlXCI7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9wcmltaXRpdmVzL2NvbGxhcHNlXCI7XHJcbmltcG9ydCB7IENhbWVyYVJlZ3VsYXIsIFJlY29yZFJlZ3VsYXIsIFJlY29yZFN0b3BSZWd1bGFyIH0gZnJvbSBcIkBmbHVlbnR1aS9yZWFjdC1pY29uc1wiO1xyXG5pbXBvcnQgeyBGcmFtZUdyYXBoVXRpbHMgfSBmcm9tIFwiY29yZS9GcmFtZUdyYXBoL2ZyYW1lR3JhcGhVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcHR1cmVSdHRUb29sczogRnVuY3Rpb25Db21wb25lbnQ8eyBzY2VuZTogU2NlbmUgfT4gPSAoeyBzY2VuZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlV2lkdGhIZWlnaHQsIHNldFVzZVdpZHRoSGVpZ2h0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzY3JlZW5zaG90U2l6ZSwgc2V0U2NyZWVuc2hvdFNpemVdID0gdXNlU3RhdGU8SVNjcmVlbnNob3RTaXplPih7IHByZWNpc2lvbjogMSB9KTtcclxuXHJcbiAgICBjb25zdCBjYXB0dXJlUmVuZGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpemVUb1VzZTogSVNjcmVlbnNob3RTaXplID0geyAuLi5zY3JlZW5zaG90U2l6ZSB9O1xyXG4gICAgICAgIGlmICghdXNlV2lkdGhIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2l6ZVRvVXNlLndpZHRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBzaXplVG9Vc2UuaGVpZ2h0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICBUb29scy5DcmVhdGVTY3JlZW5zaG90VXNpbmdSZW5kZXJUYXJnZXQoc2NlbmUuZ2V0RW5naW5lKCksIHNjZW5lLmFjdGl2ZUNhbWVyYSwgc2l6ZVRvVXNlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NjZW5lLCBzY3JlZW5zaG90U2l6ZSwgdXNlV2lkdGhIZWlnaHRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCdXR0b25MaW5lIGxhYmVsPVwiQ2FwdHVyZVwiIGljb249e0NhbWVyYVJlZ3VsYXJ9IG9uQ2xpY2s9e2NhcHR1cmVSZW5kZXJ9IC8+XHJcbiAgICAgICAgICAgIDxTeW5jZWRTbGlkZXJQcm9wZXJ0eUxpbmVcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlY2lzaW9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzY3JlZW5zaG90U2l6ZS5wcmVjaXNpb24gPz8gMX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFNjcmVlbnNob3RTaXplKHsgLi4uc2NyZWVuc2hvdFNpemUsIHByZWNpc2lvbjogdmFsdWUgPz8gMSB9KX1cclxuICAgICAgICAgICAgICAgIG1pbj17MC4xfVxyXG4gICAgICAgICAgICAgICAgbWF4PXsxMH1cclxuICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFN3aXRjaFByb3BlcnR5TGluZSBsYWJlbD1cIlVzZSBDdXN0b20gV2lkdGgvSGVpZ2h0XCIgdmFsdWU9e3VzZVdpZHRoSGVpZ2h0fSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRVc2VXaWR0aEhlaWdodCh2YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSB2aXNpYmxlPXt1c2VXaWR0aEhlaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8U3luY2VkU2xpZGVyUHJvcGVydHlMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjcmVlbnNob3RTaXplLndpZHRoID8/IDUxMn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IHNldFNjcmVlbnNob3RTaXplKHsgLi4uc2NyZWVuc2hvdFNpemUsIHdpZHRoOiBkYXRhID8/IDUxMiB9KX1cclxuICAgICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3luY2VkU2xpZGVyUHJvcGVydHlMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY3JlZW5zaG90U2l6ZS5oZWlnaHQgPz8gNTEyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0YSkgPT4gc2V0U2NyZWVuc2hvdFNpemUoeyAuLi5zY3JlZW5zaG90U2l6ZSwgaGVpZ2h0OiBkYXRhID8/IDUxMiB9KX1cclxuICAgICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcHR1cmVTY3JlZW5zaG90VG9vbHM6IEZ1bmN0aW9uQ29tcG9uZW50PHsgc2NlbmU6IFNjZW5lIH0+ID0gKHsgc2NlbmUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzUmVjb3JkaW5nLCBzZXRJc1JlY29yZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB2aWRlb1JlY29yZGVyID0gdXNlUmVmPFZpZGVvUmVjb3JkZXI+KCk7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZVNjcmVlbnNob3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gc2NlbmUuZnJhbWVHcmFwaCA/IEZyYW1lR3JhcGhVdGlscy5GaW5kTWFpbkNhbWVyYShzY2VuZS5mcmFtZUdyYXBoKSA6IHNjZW5lLmFjdGl2ZUNhbWVyYTtcclxuICAgICAgICBpZiAoY2FtZXJhKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkNyZWF0ZVNjcmVlbnNob3Qoc2NlbmUuZ2V0RW5naW5lKCksIGNhbWVyYSwgeyBwcmVjaXNpb246IDEgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NjZW5lXSk7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZUVxdWlyZWN0YW5ndWxhckFzeW5jID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVDYW1lcmEgPSBzY2VuZS5hY3RpdmVDYW1lcmE7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50QWN0aXZlQ2FtZXJhICYmIHNjZW5lLmZyYW1lR3JhcGgpIHtcclxuICAgICAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhID0gRnJhbWVHcmFwaFV0aWxzLkZpbmRNYWluQ2FtZXJhKHNjZW5lLmZyYW1lR3JhcGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2NlbmUuYWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNhcHR1cmVFcXVpcmVjdGFuZ3VsYXJGcm9tU2NlbmUoc2NlbmUsIHsgc2l6ZTogMTAyNCwgZmlsZW5hbWU6IFwiZXF1aXJlY3Rhbmd1bGFyX2NhcHR1cmUucG5nXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWF0b21pYy11cGRhdGVzXHJcbiAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhID0gY3VycmVudEFjdGl2ZUNhbWVyYTtcclxuICAgIH0sIFtzY2VuZV0pO1xyXG5cclxuICAgIGNvbnN0IHJlY29yZFZpZGVvQXN5bmMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZpZGVvUmVjb3JkZXIuY3VycmVudCAmJiB2aWRlb1JlY29yZGVyLmN1cnJlbnQuaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgdmlkZW9SZWNvcmRlci5jdXJyZW50LnN0b3BSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgc2V0SXNSZWNvcmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXZpZGVvUmVjb3JkZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICB2aWRlb1JlY29yZGVyLmN1cnJlbnQgPSBuZXcgVmlkZW9SZWNvcmRlcihzY2VuZS5nZXRFbmdpbmUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIHZpZGVvUmVjb3JkZXIuY3VycmVudC5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgIHNldElzUmVjb3JkaW5nKHRydWUpO1xyXG4gICAgfSwgW3NjZW5lXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uTGluZSBsYWJlbD1cIkNhcHR1cmVcIiBpY29uPXtDYW1lcmFSZWd1bGFyfSBvbkNsaWNrPXtjYXB0dXJlU2NyZWVuc2hvdH0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbkxpbmUgbGFiZWw9XCJDYXB0dXJlIEVxdWlyZWN0YW5ndWxhclwiIGljb249e0NhbWVyYVJlZ3VsYXJ9IG9uQ2xpY2s9e2NhcHR1cmVFcXVpcmVjdGFuZ3VsYXJBc3luY30gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbkxpbmUgbGFiZWw9e2lzUmVjb3JkaW5nID8gXCJTdG9wIFJlY29yZGluZ1wiIDogXCJSZWNvcmQgVmlkZW9cIn0gaXRlbUlkPVwiU3RhcnQvU3RvcCBSZWNvcmRcIiBpY29uPXtpc1JlY29yZGluZyA/IFJlY29yZFN0b3BSZWd1bGFyIDogUmVjb3JkUmVndWxhcn0gb25DbGljaz17cmVjb3JkVmlkZW9Bc3luY30gLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB0eXBlIHsgU2VydmljZURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxhcml0eS9zZXJ2aWNlRGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBUb29sc1NlcnZpY2VJZGVudGl0eSB9IGZyb20gXCIuLi90b29sc1NlcnZpY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBJVG9vbHNTZXJ2aWNlIH0gZnJvbSBcIi4uL3Rvb2xzU2VydmljZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElEaXNwb3NhYmxlIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgQ2FwdHVyZVJ0dFRvb2xzLCBDYXB0dXJlU2NyZWVuc2hvdFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHMvY2FwdHVyZVRvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FwdHVyZVNlcnZpY2VEZWZpbml0aW9uOiBTZXJ2aWNlRGVmaW5pdGlvbjxbXSwgW0lUb29sc1NlcnZpY2VdPiA9IHtcclxuICAgIGZyaWVuZGx5TmFtZTogXCJDYXB0dXJlIFRvb2xzXCIsXHJcbiAgICBjb25zdW1lczogW1Rvb2xzU2VydmljZUlkZW50aXR5XSxcclxuICAgIGZhY3Rvcnk6ICh0b29sc1NlcnZpY2UpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50UmVnaXN0cmF0aW9uczogSURpc3Bvc2FibGVbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTY3JlZW5zaG90IGNhcHR1cmUgY29udGVudFxyXG4gICAgICAgIGNvbnRlbnRSZWdpc3RyYXRpb25zLnB1c2goXHJcbiAgICAgICAgICAgIHRvb2xzU2VydmljZS5hZGRTZWN0aW9uQ29udGVudCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiU2NyZWVuc2hvdCBDYXB0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBcIlNjcmVlbnNob3QgQ2FwdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoeyBjb250ZXh0IH0pID0+IDxDYXB0dXJlU2NyZWVuc2hvdFRvb2xzIHNjZW5lPXtjb250ZXh0fSAvPixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBSVFQgY2FwdHVyZSBjb250ZW50XHJcbiAgICAgICAgY29udGVudFJlZ2lzdHJhdGlvbnMucHVzaChcclxuICAgICAgICAgICAgdG9vbHNTZXJ2aWNlLmFkZFNlY3Rpb25Db250ZW50KHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJSVFQgQ2FwdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogXCJSVFQgQ2FwdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoeyBjb250ZXh0IH0pID0+IDxDYXB0dXJlUnR0VG9vbHMgc2NlbmU9e2NvbnRleHR9IC8+LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRSZWdpc3RyYXRpb25zLmZvckVhY2goKHJlZ2lzdHJhdGlvbikgPT4gcmVnaXN0cmF0aW9uLmRpc3Bvc2UoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXJ2aWNlRGVmaW5pdGlvbnM6IFtDYXB0dXJlU2VydmljZURlZmluaXRpb25dLFxyXG59IGFzIGNvbnN0O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=