"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_MSFT_audio_emitter_js"],{

/***/ "../core/dist/Animations/animationEvent.js":
/*!*************************************************!*\
  !*** ../core/dist/Animations/animationEvent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationEvent: () => (/* binding */ AnimationEvent)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Composed of a frame, and an action function
 */
class AnimationEvent {
    /**
     * Initializes the animation event
     * @param frame The frame for which the event is triggered
     * @param action The event to perform when triggered
     * @param onlyOnce Specifies if the event should be triggered only once
     */
    constructor(
    /** The frame for which the event is triggered **/
    frame, 
    /** The event to perform when triggered **/
    action, 
    /** Specifies if the event should be triggered only once**/
    onlyOnce) {
        this.frame = frame;
        this.action = action;
        this.onlyOnce = onlyOnce;
        /**
         * Specifies if the animation event is done
         */
        this.isDone = false;
    }
    /** @internal */
    _clone() {
        return new AnimationEvent(this.frame, this.action, this.onlyOnce);
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

/***/ "../core/dist/Audio/audioSceneComponent.js":
/*!*************************************************!*\
  !*** ../core/dist/Audio/audioSceneComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioSceneComponent: () => (/* binding */ AudioSceneComponent)
/* harmony export */ });
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "../core/dist/Audio/sound.js");
/* harmony import */ var _soundTrack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soundTrack */ "../core/dist/Audio/soundTrack.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _sceneComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sceneComponent */ "../core/dist/sceneComponent.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scene */ "../core/dist/scene.js");
/* harmony import */ var _audioEngine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audioEngine */ "../core/dist/Audio/audioEngine.js");
/* harmony import */ var _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Misc/precisionDate */ "../core/dist/Misc/precisionDate.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Engines/abstractEngine */ "../core/dist/Engines/abstractEngine.js");
/* harmony import */ var core_Loading_Plugins_babylonFileParser_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Loading/Plugins/babylonFileParser.function */ "../core/dist/Loading/Plugins/babylonFileParser.function.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");











// Adds the parser to the scene parsers.
(0,core_Loading_Plugins_babylonFileParser_function__WEBPACK_IMPORTED_MODULE_9__.AddParser)(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO, (parsedData, scene, container, rootUrl) => {
    // TODO: add sound
    let loadedSounds = [];
    let loadedSound;
    container.sounds = container.sounds || [];
    if (parsedData.sounds !== undefined && parsedData.sounds !== null) {
        for (let index = 0, cache = parsedData.sounds.length; index < cache; index++) {
            const parsedSound = parsedData.sounds[index];
            if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine?.canUseWebAudio) {
                if (!parsedSound.url) {
                    parsedSound.url = parsedSound.name;
                }
                if (!loadedSounds[parsedSound.url]) {
                    loadedSound = _sound__WEBPACK_IMPORTED_MODULE_0__.Sound.Parse(parsedSound, scene, rootUrl);
                    loadedSounds[parsedSound.url] = loadedSound;
                    container.sounds.push(loadedSound);
                }
                else {
                    container.sounds.push(_sound__WEBPACK_IMPORTED_MODULE_0__.Sound.Parse(parsedSound, scene, rootUrl, loadedSounds[parsedSound.url]));
                }
            }
            else {
                container.sounds.push(new _sound__WEBPACK_IMPORTED_MODULE_0__.Sound(parsedSound.name, null, scene));
            }
        }
    }
    loadedSounds = [];
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype, "mainSoundTrack", {
    get: function () {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (!this._mainSoundTrack) {
            this._mainSoundTrack = new _soundTrack__WEBPACK_IMPORTED_MODULE_1__.SoundTrack(this, { mainTrack: true });
        }
        return this._mainSoundTrack;
    },
    enumerable: true,
    configurable: true,
});
_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype.getSoundByName = function (name) {
    let index;
    for (index = 0; index < this.mainSoundTrack.soundCollection.length; index++) {
        if (this.mainSoundTrack.soundCollection[index].name === name) {
            return this.mainSoundTrack.soundCollection[index];
        }
    }
    if (this.soundTracks) {
        for (let sdIndex = 0; sdIndex < this.soundTracks.length; sdIndex++) {
            for (index = 0; index < this.soundTracks[sdIndex].soundCollection.length; index++) {
                if (this.soundTracks[sdIndex].soundCollection[index].name === name) {
                    return this.soundTracks[sdIndex].soundCollection[index];
                }
            }
        }
    }
    return null;
};
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype, "audioEnabled", {
    get: function () {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioEnabled;
    },
    set: function (value) {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value) {
            compo.enableAudio();
        }
        else {
            compo.disableAudio();
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype, "headphone", {
    get: function () {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.headphone;
    },
    set: function (value) {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value) {
            compo.switchAudioModeForHeadphones();
        }
        else {
            compo.switchAudioModeForNormalSpeakers();
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype, "audioListenerPositionProvider", {
    get: function () {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioListenerPositionProvider;
    },
    set: function (value) {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value && typeof value !== "function") {
            throw new Error("The value passed to [Scene.audioListenerPositionProvider] must be a function that returns a Vector3");
        }
        else {
            compo.audioListenerPositionProvider = value;
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype, "audioListenerRotationProvider", {
    get: function () {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioListenerRotationProvider;
    },
    set: function (value) {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value && typeof value !== "function") {
            throw new Error("The value passed to [Scene.audioListenerRotationProvider] must be a function that returns a Vector3");
        }
        else {
            compo.audioListenerRotationProvider = value;
        }
    },
    enumerable: true,
    configurable: true,
});
Object.defineProperty(_scene__WEBPACK_IMPORTED_MODULE_4__.Scene.prototype, "audioPositioningRefreshRate", {
    get: function () {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioPositioningRefreshRate;
    },
    set: function (value) {
        let compo = this._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        compo.audioPositioningRefreshRate = value;
    },
    enumerable: true,
    configurable: true,
});
/**
 * Defines the sound scene component responsible to manage any sounds
 * in a given scene.
 * @deprecated please use AudioEngineV2 instead
 */
class AudioSceneComponent {
    /**
     * Gets whether audio is enabled or not.
     * Please use related enable/disable method to switch state.
     */
    get audioEnabled() {
        return this._audioEnabled;
    }
    /**
     * Gets whether audio is outputting to headphone or not.
     * Please use the according Switch methods to change output.
     */
    get headphone() {
        return this._headphone;
    }
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */
    constructor(scene) {
        /**
         * The component name helpful to identify the component in the list of scene components.
         */
        this.name = _sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO;
        this._audioEnabled = true;
        this._headphone = false;
        /**
         * Gets or sets a refresh rate when using 3D audio positioning
         */
        this.audioPositioningRefreshRate = 500;
        /**
         * Gets or Sets a custom listener position for all sounds in the scene
         * By default, this is the position of the first active camera
         */
        this.audioListenerPositionProvider = null;
        /**
         * Gets or Sets a custom listener rotation for all sounds in the scene
         * By default, this is the rotation of the first active camera
         */
        this.audioListenerRotationProvider = null;
        this._cachedCameraDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3();
        this._cachedCameraPosition = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3();
        this._lastCheck = 0;
        this._invertMatrixTemp = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix();
        this._cameraDirectionTemp = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3();
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_7__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this.scene = scene;
        scene.soundTracks = [];
        scene.sounds = [];
    }
    /**
     * Registers the component in a given scene
     */
    register() {
        this.scene._afterRenderStage.registerStep(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.STEP_AFTERRENDER_AUDIO, this, this._afterRender);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */
    rebuild() {
        // Nothing to do here. (Not rendering related)
    }
    /**
     * Serializes the component data to the specified json object
     * @param serializationObject The object to serialize to
     */
    serialize(serializationObject) {
        serializationObject.sounds = [];
        if (this.scene.soundTracks) {
            for (let index = 0; index < this.scene.soundTracks.length; index++) {
                const soundtrack = this.scene.soundTracks[index];
                for (let soundId = 0; soundId < soundtrack.soundCollection.length; soundId++) {
                    serializationObject.sounds.push(soundtrack.soundCollection[soundId].serialize());
                }
            }
        }
    }
    /**
     * Adds all the elements from the container to the scene
     * @param container the container holding the elements
     */
    addFromContainer(container) {
        if (!container.sounds) {
            return;
        }
        for (const sound of container.sounds) {
            sound.play();
            sound.autoplay = true;
            this.scene.mainSoundTrack.addSound(sound);
        }
    }
    /**
     * Removes all the elements in the container from the scene
     * @param container contains the elements to remove
     * @param dispose if the removed element should be disposed (default: false)
     */
    removeFromContainer(container, dispose = false) {
        if (!container.sounds) {
            return;
        }
        for (const sound of container.sounds) {
            sound.stop();
            sound.autoplay = false;
            this.scene.mainSoundTrack.removeSound(sound);
            if (dispose) {
                sound.dispose();
            }
        }
    }
    /**
     * Disposes the component and the associated resources.
     */
    dispose() {
        const scene = this.scene;
        if (scene._mainSoundTrack) {
            scene.mainSoundTrack.dispose();
        }
        if (scene.soundTracks) {
            for (let scIndex = 0; scIndex < scene.soundTracks.length; scIndex++) {
                scene.soundTracks[scIndex].dispose();
            }
        }
    }
    /**
     * Disables audio in the associated scene.
     */
    disableAudio() {
        const scene = this.scene;
        this._audioEnabled = false;
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine.audioContext) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine.audioContext.suspend();
        }
        let i;
        for (i = 0; i < scene.mainSoundTrack.soundCollection.length; i++) {
            scene.mainSoundTrack.soundCollection[i].pause();
        }
        if (scene.soundTracks) {
            for (i = 0; i < scene.soundTracks.length; i++) {
                for (let j = 0; j < scene.soundTracks[i].soundCollection.length; j++) {
                    scene.soundTracks[i].soundCollection[j].pause();
                }
            }
        }
    }
    /**
     * Enables audio in the associated scene.
     */
    enableAudio() {
        const scene = this.scene;
        this._audioEnabled = true;
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine.audioContext) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine.audioContext.resume();
        }
        let i;
        for (i = 0; i < scene.mainSoundTrack.soundCollection.length; i++) {
            if (scene.mainSoundTrack.soundCollection[i].isPaused) {
                scene.mainSoundTrack.soundCollection[i].play();
            }
        }
        if (scene.soundTracks) {
            for (i = 0; i < scene.soundTracks.length; i++) {
                for (let j = 0; j < scene.soundTracks[i].soundCollection.length; j++) {
                    if (scene.soundTracks[i].soundCollection[j].isPaused) {
                        scene.soundTracks[i].soundCollection[j].play();
                    }
                }
            }
        }
    }
    /**
     * Switch audio to headphone output.
     */
    switchAudioModeForHeadphones() {
        const scene = this.scene;
        this._headphone = true;
        scene.mainSoundTrack.switchPanningModelToHRTF();
        if (scene.soundTracks) {
            for (let i = 0; i < scene.soundTracks.length; i++) {
                scene.soundTracks[i].switchPanningModelToHRTF();
            }
        }
    }
    /**
     * Switch audio to normal speakers.
     */
    switchAudioModeForNormalSpeakers() {
        const scene = this.scene;
        this._headphone = false;
        scene.mainSoundTrack.switchPanningModelToEqualPower();
        if (scene.soundTracks) {
            for (let i = 0; i < scene.soundTracks.length; i++) {
                scene.soundTracks[i].switchPanningModelToEqualPower();
            }
        }
    }
    _afterRender() {
        const now = _Misc_precisionDate__WEBPACK_IMPORTED_MODULE_6__.PrecisionDate.Now;
        if (this._lastCheck && now - this._lastCheck < this.audioPositioningRefreshRate) {
            return;
        }
        this._lastCheck = now;
        const scene = this.scene;
        if (!this._audioEnabled || !scene._mainSoundTrack || !scene.soundTracks || (scene._mainSoundTrack.soundCollection.length === 0 && scene.soundTracks.length === 1)) {
            return;
        }
        const audioEngine = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_8__.AbstractEngine.audioEngine;
        if (!audioEngine) {
            return;
        }
        if (audioEngine.audioContext) {
            let listeningCamera = scene.activeCamera;
            if (scene.activeCameras && scene.activeCameras.length > 0) {
                listeningCamera = scene.activeCameras[0];
            }
            // A custom listener position provider was set
            // Use the users provided position instead of camera's
            if (this.audioListenerPositionProvider) {
                const position = this.audioListenerPositionProvider();
                // Set the listener position
                audioEngine.audioContext.listener.setPosition(position.x || 0, position.y || 0, position.z || 0);
                // Check if there is a listening camera
            }
            else if (listeningCamera) {
                // Set the listener position to the listening camera global position
                if (!this._cachedCameraPosition.equals(listeningCamera.globalPosition)) {
                    this._cachedCameraPosition.copyFrom(listeningCamera.globalPosition);
                    audioEngine.audioContext.listener.setPosition(listeningCamera.globalPosition.x, listeningCamera.globalPosition.y, listeningCamera.globalPosition.z);
                }
            }
            // Otherwise set the listener position to 0, 0 ,0
            else {
                // Set the listener position
                audioEngine.audioContext.listener.setPosition(0, 0, 0);
            }
            // A custom listener rotation provider was set
            // Use the users provided rotation instead of camera's
            if (this.audioListenerRotationProvider) {
                const rotation = this.audioListenerRotationProvider();
                audioEngine.audioContext.listener.setOrientation(rotation.x || 0, rotation.y || 0, rotation.z || 0, 0, 1, 0);
                // Check if there is a listening camera
            }
            else if (listeningCamera) {
                // for VR cameras
                if (listeningCamera.rigCameras && listeningCamera.rigCameras.length > 0) {
                    listeningCamera = listeningCamera.rigCameras[0];
                }
                listeningCamera.getViewMatrix().invertToRef(this._invertMatrixTemp);
                _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformNormalToRef(AudioSceneComponent._CameraDirection, this._invertMatrixTemp, this._cameraDirectionTemp);
                this._cameraDirectionTemp.normalize();
                // To avoid some errors on GearVR
                if (!isNaN(this._cameraDirectionTemp.x) && !isNaN(this._cameraDirectionTemp.y) && !isNaN(this._cameraDirectionTemp.z)) {
                    if (!this._cachedCameraDirection.equals(this._cameraDirectionTemp)) {
                        this._cachedCameraDirection.copyFrom(this._cameraDirectionTemp);
                        audioEngine.audioContext.listener.setOrientation(this._cameraDirectionTemp.x, this._cameraDirectionTemp.y, this._cameraDirectionTemp.z, 0, 1, 0);
                    }
                }
            }
            // Otherwise set the listener rotation to 0, 0 ,0
            else {
                // Set the listener position
                audioEngine.audioContext.listener.setOrientation(0, 0, 0, 0, 1, 0);
            }
            let i;
            for (i = 0; i < scene.mainSoundTrack.soundCollection.length; i++) {
                const sound = scene.mainSoundTrack.soundCollection[i];
                if (sound.useCustomAttenuation) {
                    sound.updateDistanceFromListener();
                }
            }
            if (scene.soundTracks) {
                for (i = 0; i < scene.soundTracks.length; i++) {
                    for (let j = 0; j < scene.soundTracks[i].soundCollection.length; j++) {
                        const sound = scene.soundTracks[i].soundCollection[j];
                        if (sound.useCustomAttenuation) {
                            sound.updateDistanceFromListener();
                        }
                    }
                }
            }
        }
    }
}
AudioSceneComponent._CameraDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, -1);
_sound__WEBPACK_IMPORTED_MODULE_0__.Sound._SceneComponentInitialization = (scene) => {
    let compo = scene._getComponent(_sceneComponent__WEBPACK_IMPORTED_MODULE_3__.SceneComponentConstants.NAME_AUDIO);
    if (!compo) {
        compo = new AudioSceneComponent(scene);
        scene._addComponent(compo);
    }
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

/***/ "../core/dist/Audio/sound.js":
/*!***********************************!*\
  !*** ../core/dist/Audio/sound.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sound: () => (/* binding */ Sound)
/* harmony export */ });
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Misc_devTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Misc/devTools */ "../core/dist/Misc/devTools.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Engines/abstractEngine */ "../core/dist/Engines/abstractEngine.js");
/* harmony import */ var core_Misc_timingTools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Misc/timingTools */ "../core/dist/Misc/timingTools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










/**
 * Defines a sound that can be played in the application.
 * The sound can either be an ambient track or a simple sound played in reaction to a user action.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic
 */
class Sound {
    /**
     * Does the sound loop after it finishes playing once.
     */
    get loop() {
        return this._loop;
    }
    set loop(value) {
        if (value === this._loop) {
            return;
        }
        this._loop = value;
        this.updateOptions({ loop: value });
    }
    /**
     * Gets the current time for the sound.
     */
    get currentTime() {
        if (this._htmlAudioElement) {
            return this._htmlAudioElement.currentTime;
        }
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext && (this.isPlaying || this.isPaused)) {
            // The `_currentTime` member is only updated when the sound is paused. Add the time since the last start
            // to get the actual current time.
            const timeSinceLastStart = this.isPaused ? 0 : core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime - this._startTime;
            return this._currentTime + timeSinceLastStart;
        }
        return 0;
    }
    /**
     * Does this sound enables spatial sound.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */
    get spatialSound() {
        return this._spatialSound;
    }
    /**
     * Does this sound enables spatial sound.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */
    set spatialSound(newValue) {
        if (newValue == this._spatialSound) {
            return;
        }
        const wasPlaying = this.isPlaying;
        this.pause();
        if (newValue) {
            this._spatialSound = newValue;
            this._updateSpatialParameters();
        }
        else {
            this._disableSpatialSound();
        }
        if (wasPlaying) {
            this.play();
        }
    }
    /**
     * Create a sound and attach it to a scene
     * @param name Name of your sound
     * @param urlOrArrayBuffer Url to the sound to load async or ArrayBuffer, it also works with MediaStreams and AudioBuffers
     * @param scene defines the scene the sound belongs to
     * @param readyToPlayCallback Provide a callback function if you'd like to load your code once the sound is ready to be played
     * @param options Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel, streaming
     */
    constructor(name, urlOrArrayBuffer, scene, readyToPlayCallback = null, options) {
        /**
         * Does the sound autoplay once loaded.
         */
        this.autoplay = false;
        this._loop = false;
        /**
         * Does the sound use a custom attenuation curve to simulate the falloff
         * happening when the source gets further away from the camera.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-your-own-custom-attenuation-function
         */
        this.useCustomAttenuation = false;
        /**
         * Is this sound currently played.
         */
        this.isPlaying = false;
        /**
         * Is this sound currently paused.
         */
        this.isPaused = false;
        /**
         * Define the reference distance the sound should be heard perfectly.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */
        this.refDistance = 1;
        /**
         * Define the roll off factor of spatial sounds.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */
        this.rolloffFactor = 1;
        /**
         * Define the max distance the sound should be heard (intensity just became 0 at this point).
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */
        this.maxDistance = 100;
        /**
         * Define the distance attenuation model the sound will follow.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */
        this.distanceModel = "linear";
        /**
         * Gets or sets an object used to store user defined information for the sound.
         */
        this.metadata = null;
        /**
         * Observable event when the current playing sound finishes.
         */
        this.onEndedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        this._spatialSound = false;
        this._panningModel = "equalpower";
        this._playbackRate = 1;
        this._streaming = false;
        this._startTime = 0;
        this._currentTime = 0;
        this._position = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Zero();
        this._localDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(1, 0, 0);
        this._volume = 1;
        this._isReadyToPlay = false;
        this._isDirectional = false;
        // Used if you'd like to create a directional sound.
        // If not set, the sound will be omnidirectional
        this._coneInnerAngle = 360;
        this._coneOuterAngle = 360;
        this._coneOuterGain = 0;
        this._isOutputConnected = false;
        this._urlType = "Unknown";
        this.name = name;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_5__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        Sound._SceneComponentInitialization(scene);
        this._readyToPlayCallback = readyToPlayCallback;
        // Default custom attenuation function is a linear attenuation
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._customAttenuationFunction = (currentVolume, currentDistance, maxDistance, refDistance, rolloffFactor) => {
            if (currentDistance < maxDistance) {
                return currentVolume * (1 - currentDistance / maxDistance);
            }
            else {
                return 0;
            }
        };
        if (options) {
            this.autoplay = options.autoplay || false;
            this._loop = options.loop || false;
            // if volume === 0, we need another way to check this option
            if (options.volume !== undefined) {
                this._volume = options.volume;
            }
            this._spatialSound = options.spatialSound ?? false;
            this.maxDistance = options.maxDistance ?? 100;
            this.useCustomAttenuation = options.useCustomAttenuation ?? false;
            this.rolloffFactor = options.rolloffFactor || 1;
            this.refDistance = options.refDistance || 1;
            this.distanceModel = options.distanceModel || "linear";
            this._playbackRate = options.playbackRate || 1;
            this._streaming = options.streaming ?? false;
            this._length = options.length;
            this._offset = options.offset;
        }
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext) {
            this._soundGain = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.createGain();
            this._soundGain.gain.value = this._volume;
            this._inputAudioNode = this._soundGain;
            this._outputAudioNode = this._soundGain;
            if (this._spatialSound) {
                this._createSpatialParameters();
            }
            this._scene.mainSoundTrack.addSound(this);
            let validParameter = true;
            // if no parameter is passed, you need to call setAudioBuffer yourself to prepare the sound
            if (urlOrArrayBuffer) {
                try {
                    if (typeof urlOrArrayBuffer === "string") {
                        this._urlType = "String";
                        this._url = urlOrArrayBuffer;
                    }
                    else if (urlOrArrayBuffer instanceof ArrayBuffer) {
                        this._urlType = "ArrayBuffer";
                    }
                    else if (urlOrArrayBuffer instanceof HTMLMediaElement) {
                        this._urlType = "MediaElement";
                    }
                    else if (urlOrArrayBuffer instanceof MediaStream) {
                        this._urlType = "MediaStream";
                    }
                    else if (urlOrArrayBuffer instanceof AudioBuffer) {
                        this._urlType = "AudioBuffer";
                    }
                    else if (Array.isArray(urlOrArrayBuffer)) {
                        this._urlType = "Array";
                    }
                    let urls = [];
                    let codecSupportedFound = false;
                    switch (this._urlType) {
                        case "MediaElement":
                            this._streaming = true;
                            this._isReadyToPlay = true;
                            this._streamingSource = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.createMediaElementSource(urlOrArrayBuffer);
                            if (this.autoplay) {
                                this.play(0, this._offset, this._length);
                            }
                            if (this._readyToPlayCallback) {
                                this._readyToPlayCallback();
                            }
                            break;
                        case "MediaStream":
                            this._streaming = true;
                            this._isReadyToPlay = true;
                            this._streamingSource = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.createMediaStreamSource(urlOrArrayBuffer);
                            if (this.autoplay) {
                                this.play(0, this._offset, this._length);
                            }
                            if (this._readyToPlayCallback) {
                                this._readyToPlayCallback();
                            }
                            break;
                        case "ArrayBuffer":
                            if (urlOrArrayBuffer.byteLength > 0) {
                                codecSupportedFound = true;
                                this._soundLoaded(urlOrArrayBuffer);
                            }
                            break;
                        case "AudioBuffer":
                            this._audioBufferLoaded(urlOrArrayBuffer);
                            break;
                        case "String":
                            urls.push(urlOrArrayBuffer);
                        // eslint-disable-next-line no-fallthrough
                        case "Array":
                            if (urls.length === 0) {
                                urls = urlOrArrayBuffer;
                            }
                            // If we found a supported format, we load it immediately and stop the loop
                            for (let i = 0; i < urls.length; i++) {
                                const url = urls[i];
                                codecSupportedFound =
                                    (options && options.skipCodecCheck) ||
                                        (url.indexOf(".mp3", url.length - 4) !== -1 && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.isMP3supported) ||
                                        (url.indexOf(".ogg", url.length - 4) !== -1 && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.isOGGsupported) ||
                                        url.indexOf(".wav", url.length - 4) !== -1 ||
                                        url.indexOf(".m4a", url.length - 4) !== -1 ||
                                        url.indexOf(".mp4", url.length - 4) !== -1 ||
                                        url.indexOf("blob:") !== -1;
                                if (codecSupportedFound) {
                                    // Loading sound
                                    if (!this._streaming) {
                                        this._scene._loadFile(url, (data) => {
                                            this._soundLoaded(data);
                                        }, undefined, true, true, (exception) => {
                                            if (exception) {
                                                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("XHR " + exception.status + " error on: " + url + ".");
                                            }
                                            _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Sound creation aborted.");
                                            this._scene.mainSoundTrack.removeSound(this);
                                        });
                                    }
                                    // Streaming sound using HTML5 Audio tag
                                    else {
                                        this._htmlAudioElement = new Audio(url);
                                        this._htmlAudioElement.controls = false;
                                        this._htmlAudioElement.loop = this.loop;
                                        _Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.SetCorsBehavior(url, this._htmlAudioElement);
                                        this._htmlAudioElement.preload = "auto";
                                        this._htmlAudioElement.addEventListener("canplaythrough", () => {
                                            this._isReadyToPlay = true;
                                            if (this.autoplay) {
                                                this.play(0, this._offset, this._length);
                                            }
                                            if (this._readyToPlayCallback) {
                                                this._readyToPlayCallback();
                                            }
                                        }, { once: true });
                                        document.body.appendChild(this._htmlAudioElement);
                                        this._htmlAudioElement.load();
                                    }
                                    break;
                                }
                            }
                            break;
                        default:
                            validParameter = false;
                            break;
                    }
                    if (!validParameter) {
                        _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Parameter must be a URL to the sound, an Array of URLs (.mp3 & .ogg) or an ArrayBuffer of the sound.");
                    }
                    else {
                        if (!codecSupportedFound) {
                            this._isReadyToPlay = true;
                            // Simulating a ready to play event to avoid breaking code path
                            if (this._readyToPlayCallback) {
                                setTimeout(() => {
                                    if (this._readyToPlayCallback) {
                                        this._readyToPlayCallback();
                                    }
                                }, 1000);
                            }
                        }
                    }
                }
                catch (ex) {
                    _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Unexpected error. Sound creation aborted.");
                    this._scene.mainSoundTrack.removeSound(this);
                }
            }
        }
        else {
            // Adding an empty sound to avoid breaking audio calls for non Web Audio browsers
            this._scene.mainSoundTrack.addSound(this);
            if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine && !core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.WarnedWebAudioUnsupported) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Web Audio is not supported by your browser.");
                core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.WarnedWebAudioUnsupported = true;
            }
            // Simulating a ready to play event to avoid breaking code for non web audio browsers
            if (this._readyToPlayCallback) {
                setTimeout(() => {
                    if (this._readyToPlayCallback) {
                        this._readyToPlayCallback();
                    }
                }, 1000);
            }
        }
    }
    /**
     * Release the sound and its associated resources
     */
    dispose() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio) {
            if (this.isPlaying) {
                this.stop();
            }
            this._isReadyToPlay = false;
            if (this.soundTrackId === -1) {
                this._scene.mainSoundTrack.removeSound(this);
            }
            else if (this._scene.soundTracks) {
                this._scene.soundTracks[this.soundTrackId].removeSound(this);
            }
            if (this._soundGain) {
                this._soundGain.disconnect();
                this._soundGain = null;
            }
            if (this._soundPanner) {
                this._soundPanner.disconnect();
                this._soundPanner = null;
            }
            if (this._soundSource) {
                this._soundSource.disconnect();
                this._soundSource = null;
            }
            this._audioBuffer = null;
            if (this._htmlAudioElement) {
                this._htmlAudioElement.pause();
                this._htmlAudioElement.src = "";
                document.body.removeChild(this._htmlAudioElement);
                this._htmlAudioElement = null;
            }
            if (this._streamingSource) {
                this._streamingSource.disconnect();
                this._streamingSource = null;
            }
            if (this._connectedTransformNode && this._registerFunc) {
                this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
                this._connectedTransformNode = null;
            }
            this._clearTimeoutsAndObservers();
        }
    }
    /**
     * Gets if the sounds is ready to be played or not.
     * @returns true if ready, otherwise false
     */
    isReady() {
        return this._isReadyToPlay;
    }
    /**
     * Get the current class name.
     * @returns current class name
     */
    getClassName() {
        return "Sound";
    }
    _audioBufferLoaded(buffer) {
        if (!core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext) {
            return;
        }
        this._audioBuffer = buffer;
        this._isReadyToPlay = true;
        if (this.autoplay) {
            this.play(0, this._offset, this._length);
        }
        if (this._readyToPlayCallback) {
            this._readyToPlayCallback();
        }
    }
    _soundLoaded(audioData) {
        if (!core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.decodeAudioData(audioData, (buffer) => {
            this._audioBufferLoaded(buffer);
        }, (err) => {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Error while decoding audio data for: " + this.name + " / Error: " + err);
        });
    }
    /**
     * Sets the data of the sound from an audiobuffer
     * @param audioBuffer The audioBuffer containing the data
     */
    setAudioBuffer(audioBuffer) {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio) {
            this._audioBuffer = audioBuffer;
            this._isReadyToPlay = true;
        }
    }
    /**
     * Updates the current sounds options such as maxdistance, loop...
     * @param options A JSON object containing values named as the object properties
     */
    updateOptions(options) {
        if (options) {
            this.loop = options.loop ?? this.loop;
            this.maxDistance = options.maxDistance ?? this.maxDistance;
            this.useCustomAttenuation = options.useCustomAttenuation ?? this.useCustomAttenuation;
            this.rolloffFactor = options.rolloffFactor ?? this.rolloffFactor;
            this.refDistance = options.refDistance ?? this.refDistance;
            this.distanceModel = options.distanceModel ?? this.distanceModel;
            this._playbackRate = options.playbackRate ?? this._playbackRate;
            this._length = options.length ?? undefined;
            this.spatialSound = options.spatialSound ?? this._spatialSound;
            this._setOffset(options.offset ?? undefined);
            this.setVolume(options.volume ?? this._volume);
            this._updateSpatialParameters();
            if (this.isPlaying) {
                if (this._streaming && this._htmlAudioElement) {
                    this._htmlAudioElement.playbackRate = this._playbackRate;
                    if (this._htmlAudioElement.loop !== this.loop) {
                        this._htmlAudioElement.loop = this.loop;
                    }
                }
                else {
                    if (this._soundSource) {
                        this._soundSource.playbackRate.value = this._playbackRate;
                        if (this._soundSource.loop !== this.loop) {
                            this._soundSource.loop = this.loop;
                        }
                        if (this._offset !== undefined && this._soundSource.loopStart !== this._offset) {
                            this._soundSource.loopStart = this._offset;
                        }
                        if (this._length !== undefined && this._length !== this._soundSource.loopEnd) {
                            this._soundSource.loopEnd = (this._offset | 0) + this._length;
                        }
                    }
                }
            }
        }
    }
    _createSpatialParameters() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext) {
            if (this._scene.headphone) {
                this._panningModel = "HRTF";
            }
            this._soundPanner = this._soundPanner ?? core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.createPanner();
            if (this._soundPanner && this._outputAudioNode) {
                this._updateSpatialParameters();
                this._soundPanner.connect(this._outputAudioNode);
                this._inputAudioNode = this._soundPanner;
            }
        }
    }
    _disableSpatialSound() {
        if (!this._spatialSound) {
            return;
        }
        this._inputAudioNode = this._soundGain;
        this._soundPanner?.disconnect();
        this._soundPanner = null;
        this._spatialSound = false;
    }
    _updateSpatialParameters() {
        if (!this._spatialSound) {
            return;
        }
        if (this._soundPanner) {
            if (this.useCustomAttenuation) {
                // Tricks to disable in a way embedded Web Audio attenuation
                this._soundPanner.distanceModel = "linear";
                this._soundPanner.maxDistance = Number.MAX_VALUE;
                this._soundPanner.refDistance = 1;
                this._soundPanner.rolloffFactor = 1;
                this._soundPanner.panningModel = this._panningModel;
            }
            else {
                this._soundPanner.distanceModel = this.distanceModel;
                this._soundPanner.maxDistance = this.maxDistance;
                this._soundPanner.refDistance = this.refDistance;
                this._soundPanner.rolloffFactor = this.rolloffFactor;
                this._soundPanner.panningModel = this._panningModel;
            }
        }
        else {
            this._createSpatialParameters();
        }
    }
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */
    switchPanningModelToHRTF() {
        this._panningModel = "HRTF";
        this._switchPanningModel();
    }
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */
    switchPanningModelToEqualPower() {
        this._panningModel = "equalpower";
        this._switchPanningModel();
    }
    _switchPanningModel() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner) {
            this._soundPanner.panningModel = this._panningModel;
        }
    }
    /**
     * Connect this sound to a sound track audio node like gain...
     * @param soundTrackAudioNode the sound track audio node to connect to
     */
    connectToSoundTrackAudioNode(soundTrackAudioNode) {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._outputAudioNode) {
            if (this._isOutputConnected) {
                this._outputAudioNode.disconnect();
            }
            this._outputAudioNode.connect(soundTrackAudioNode);
            this._isOutputConnected = true;
        }
    }
    /**
     * Transform this sound into a directional source
     * @param coneInnerAngle Size of the inner cone in degree
     * @param coneOuterAngle Size of the outer cone in degree
     * @param coneOuterGain Volume of the sound outside the outer cone (between 0.0 and 1.0)
     */
    setDirectionalCone(coneInnerAngle, coneOuterAngle, coneOuterGain) {
        if (coneOuterAngle < coneInnerAngle) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("setDirectionalCone(): outer angle of the cone must be superior or equal to the inner angle.");
            return;
        }
        this._coneInnerAngle = coneInnerAngle;
        this._coneOuterAngle = coneOuterAngle;
        this._coneOuterGain = coneOuterGain;
        this._isDirectional = true;
        if (this.isPlaying && this.loop) {
            this.stop();
            this.play(0, this._offset, this._length);
        }
    }
    /**
     * Gets or sets the inner angle for the directional cone.
     */
    get directionalConeInnerAngle() {
        return this._coneInnerAngle;
    }
    /**
     * Gets or sets the inner angle for the directional cone.
     */
    set directionalConeInnerAngle(value) {
        if (value != this._coneInnerAngle) {
            if (this._coneOuterAngle < value) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneInnerAngle = value;
            if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner) {
                this._soundPanner.coneInnerAngle = this._coneInnerAngle;
            }
        }
    }
    /**
     * Gets or sets the outer angle for the directional cone.
     */
    get directionalConeOuterAngle() {
        return this._coneOuterAngle;
    }
    /**
     * Gets or sets the outer angle for the directional cone.
     */
    set directionalConeOuterAngle(value) {
        if (value != this._coneOuterAngle) {
            if (value < this._coneInnerAngle) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneOuterAngle = value;
            if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner) {
                this._soundPanner.coneOuterAngle = this._coneOuterAngle;
            }
        }
    }
    /**
     * Sets the position of the emitter if spatial sound is enabled
     * @param newPosition Defines the new position
     */
    setPosition(newPosition) {
        if (newPosition.equals(this._position)) {
            return;
        }
        this._position.copyFrom(newPosition);
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio &&
            this._spatialSound &&
            this._soundPanner &&
            !isNaN(this._position.x) &&
            !isNaN(this._position.y) &&
            !isNaN(this._position.z)) {
            this._soundPanner.positionX.value = this._position.x;
            this._soundPanner.positionY.value = this._position.y;
            this._soundPanner.positionZ.value = this._position.z;
        }
    }
    /**
     * Sets the local direction of the emitter if spatial sound is enabled
     * @param newLocalDirection Defines the new local direction
     */
    setLocalDirectionToMesh(newLocalDirection) {
        this._localDirection = newLocalDirection;
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._connectedTransformNode && this.isPlaying) {
            this._updateDirection();
        }
    }
    _updateDirection() {
        if (!this._connectedTransformNode || !this._soundPanner) {
            return;
        }
        const mat = this._connectedTransformNode.getWorldMatrix();
        const direction = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformNormal(this._localDirection, mat);
        direction.normalize();
        this._soundPanner.orientationX.value = direction.x;
        this._soundPanner.orientationY.value = direction.y;
        this._soundPanner.orientationZ.value = direction.z;
    }
    /** @internal */
    updateDistanceFromListener() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._connectedTransformNode && this.useCustomAttenuation && this._soundGain && this._scene.activeCamera) {
            const distance = this._scene.audioListenerPositionProvider
                ? this._connectedTransformNode.position.subtract(this._scene.audioListenerPositionProvider()).length()
                : this._connectedTransformNode.getDistanceToCamera(this._scene.activeCamera);
            this._soundGain.gain.value = this._customAttenuationFunction(this._volume, distance, this.maxDistance, this.refDistance, this.rolloffFactor);
        }
    }
    /**
     * Sets a new custom attenuation function for the sound.
     * @param callback Defines the function used for the attenuation
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-your-own-custom-attenuation-function
     */
    setAttenuationFunction(callback) {
        this._customAttenuationFunction = callback;
    }
    /**
     * Play the sound
     * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
     * @param offset (optional) Start the sound at a specific time in seconds
     * @param length (optional) Sound duration (in seconds)
     */
    play(time, offset, length) {
        if (this._isReadyToPlay && this._scene.audioEnabled && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext) {
            try {
                this._clearTimeoutsAndObservers();
                let startTime = time ? core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext.currentTime + time : core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext.currentTime;
                if (!this._soundSource || !this._streamingSource) {
                    if (this._spatialSound && this._soundPanner) {
                        if (!isNaN(this._position.x) && !isNaN(this._position.y) && !isNaN(this._position.z)) {
                            this._soundPanner.positionX.value = this._position.x;
                            this._soundPanner.positionY.value = this._position.y;
                            this._soundPanner.positionZ.value = this._position.z;
                        }
                        if (this._isDirectional) {
                            this._soundPanner.coneInnerAngle = this._coneInnerAngle;
                            this._soundPanner.coneOuterAngle = this._coneOuterAngle;
                            this._soundPanner.coneOuterGain = this._coneOuterGain;
                            if (this._connectedTransformNode) {
                                this._updateDirection();
                            }
                            else {
                                this._soundPanner.setOrientation(this._localDirection.x, this._localDirection.y, this._localDirection.z);
                            }
                        }
                    }
                }
                if (this._streaming) {
                    if (!this._streamingSource && this._htmlAudioElement) {
                        this._streamingSource = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.createMediaElementSource(this._htmlAudioElement);
                        this._htmlAudioElement.onended = () => {
                            this._onended();
                        };
                        this._htmlAudioElement.playbackRate = this._playbackRate;
                    }
                    if (this._streamingSource) {
                        this._streamingSource.disconnect();
                        if (this._inputAudioNode) {
                            this._streamingSource.connect(this._inputAudioNode);
                        }
                    }
                    if (this._htmlAudioElement) {
                        // required to manage properly the new suspended default state of Chrome
                        // When the option 'streaming: true' is used, we need first to wait for
                        // the audio engine to be unlocked by a user gesture before trying to play
                        // an HTML Audio element
                        const tryToPlay = () => {
                            if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.unlocked) {
                                if (!this._htmlAudioElement) {
                                    return;
                                }
                                this._htmlAudioElement.currentTime = offset ?? 0;
                                const playPromise = this._htmlAudioElement.play();
                                // In browsers that don’t yet support this functionality,
                                // playPromise won’t be defined.
                                if (playPromise !== undefined) {
                                    // eslint-disable-next-line github/no-then
                                    playPromise.catch(() => {
                                        // Automatic playback failed.
                                        // Waiting for the audio engine to be unlocked by user click on unmute
                                        core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.lock();
                                        if (this.loop || this.autoplay) {
                                            this._audioUnlockedObserver = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.onAudioUnlockedObservable.addOnce(() => {
                                                tryToPlay();
                                            });
                                        }
                                    });
                                }
                            }
                            else {
                                if (this.loop || this.autoplay) {
                                    this._audioUnlockedObserver = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.onAudioUnlockedObservable.addOnce(() => {
                                        tryToPlay();
                                    });
                                }
                            }
                        };
                        tryToPlay();
                    }
                }
                else {
                    const tryToPlay = () => {
                        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext) {
                            length = length || this._length;
                            if (offset !== undefined) {
                                this._setOffset(offset);
                            }
                            if (this._soundSource) {
                                const oldSource = this._soundSource;
                                oldSource.onended = () => {
                                    oldSource.disconnect();
                                };
                            }
                            this._soundSource = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext.createBufferSource();
                            if (this._soundSource && this._inputAudioNode) {
                                this._soundSource.buffer = this._audioBuffer;
                                this._soundSource.connect(this._inputAudioNode);
                                this._soundSource.loop = this.loop;
                                if (offset !== undefined) {
                                    this._soundSource.loopStart = offset;
                                }
                                if (length !== undefined) {
                                    this._soundSource.loopEnd = (offset | 0) + length;
                                }
                                this._soundSource.playbackRate.value = this._playbackRate;
                                this._soundSource.onended = () => {
                                    this._onended();
                                };
                                startTime = time ? core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext.currentTime + time : core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime;
                                const actualOffset = ((this.isPaused ? this.currentTime : 0) + (this._offset ?? 0)) % this._soundSource.buffer.duration;
                                this._soundSource.start(startTime, actualOffset, this.loop ? undefined : length);
                            }
                        }
                    };
                    if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext.state === "suspended") {
                        // Wait a bit for FF as context seems late to be ready.
                        this._tryToPlayTimeout = setTimeout(() => {
                            if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext.state === "suspended") {
                                // Automatic playback failed.
                                // Waiting for the audio engine to be unlocked by user click on unmute
                                core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.lock();
                                if (this.loop || this.autoplay) {
                                    this._audioUnlockedObserver = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.onAudioUnlockedObservable.addOnce(() => {
                                        tryToPlay();
                                    });
                                }
                            }
                            else {
                                tryToPlay();
                            }
                        }, 500);
                    }
                    else {
                        tryToPlay();
                    }
                }
                this._startTime = startTime;
                this.isPlaying = true;
                this.isPaused = false;
            }
            catch (ex) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("Error while trying to play audio: " + this.name + ", " + ex.message);
            }
        }
    }
    _onended() {
        this.isPlaying = false;
        this._startTime = 0;
        this._currentTime = 0;
        if (this.onended) {
            this.onended();
        }
        this.onEndedObservable.notifyObservers(this);
    }
    /**
     * Stop the sound
     * @param time (optional) Stop the sound after X seconds. Stop immediately (0) by default.
     */
    stop(time) {
        if (this.isPlaying) {
            this._clearTimeoutsAndObservers();
            if (this._streaming) {
                if (this._htmlAudioElement) {
                    this._htmlAudioElement.pause();
                    // Test needed for Firefox or it will generate an Invalid State Error
                    if (this._htmlAudioElement.currentTime > 0) {
                        this._htmlAudioElement.currentTime = 0;
                    }
                }
                else {
                    this._streamingSource?.disconnect();
                }
                this.isPlaying = false;
            }
            else if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext && this._soundSource) {
                const stopTime = time ? core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime + time : undefined;
                this._soundSource.onended = () => {
                    this.isPlaying = false;
                    this.isPaused = false;
                    this._startTime = 0;
                    this._currentTime = 0;
                    if (this._soundSource) {
                        this._soundSource.onended = () => void 0;
                    }
                    this._onended();
                };
                this._soundSource.stop(stopTime);
            }
            else {
                this.isPlaying = false;
            }
        }
        else if (this.isPaused) {
            this.isPaused = false;
            this._startTime = 0;
            this._currentTime = 0;
        }
    }
    /**
     * Put the sound in pause
     */
    pause() {
        if (this.isPlaying) {
            this._clearTimeoutsAndObservers();
            if (this._streaming) {
                if (this._htmlAudioElement) {
                    this._htmlAudioElement.pause();
                }
                else {
                    this._streamingSource?.disconnect();
                }
                this.isPlaying = false;
                this.isPaused = true;
            }
            else if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.audioContext && this._soundSource) {
                this._soundSource.onended = () => void 0;
                this._soundSource.stop();
                this.isPlaying = false;
                this.isPaused = true;
                this._currentTime += core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime - this._startTime;
            }
        }
    }
    /**
     * Sets a dedicated volume for this sounds
     * @param newVolume Define the new volume of the sound
     * @param time Define time for gradual change to new volume
     */
    setVolume(newVolume, time) {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._soundGain) {
            if (time && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext) {
                this._soundGain.gain.cancelScheduledValues(core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime);
                this._soundGain.gain.setValueAtTime(this._soundGain.gain.value, core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime);
                this._soundGain.gain.linearRampToValueAtTime(newVolume, core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine.audioContext.currentTime + time);
            }
            else {
                this._soundGain.gain.value = newVolume;
            }
        }
        this._volume = newVolume;
    }
    /**
     * Set the sound play back rate
     * @param newPlaybackRate Define the playback rate the sound should be played at
     */
    setPlaybackRate(newPlaybackRate) {
        this._playbackRate = newPlaybackRate;
        if (this.isPlaying) {
            if (this._streaming && this._htmlAudioElement) {
                this._htmlAudioElement.playbackRate = this._playbackRate;
            }
            else if (this._soundSource) {
                this._soundSource.playbackRate.value = this._playbackRate;
            }
        }
    }
    /**
     * Gets the sound play back rate.
     * @returns the  play back rate of the sound
     */
    getPlaybackRate() {
        return this._playbackRate;
    }
    /**
     * Gets the volume of the sound.
     * @returns the volume of the sound
     */
    getVolume() {
        return this._volume;
    }
    /**
     * Attach the sound to a dedicated mesh
     * @param transformNode The transform node to connect the sound with
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#attaching-a-sound-to-a-mesh
     */
    attachToMesh(transformNode) {
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
        }
        this._connectedTransformNode = transformNode;
        if (!this._spatialSound) {
            this._spatialSound = true;
            this._createSpatialParameters();
            if (this.isPlaying && this.loop) {
                this.stop();
                this.play(0, this._offset, this._length);
            }
        }
        this._onRegisterAfterWorldMatrixUpdate(this._connectedTransformNode);
        this._registerFunc = (transformNode) => this._onRegisterAfterWorldMatrixUpdate(transformNode);
        this._connectedTransformNode.registerAfterWorldMatrixUpdate(this._registerFunc);
    }
    /**
     * Detach the sound from the previously attached mesh
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#attaching-a-sound-to-a-mesh
     */
    detachFromMesh() {
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
            this._connectedTransformNode = null;
        }
    }
    _onRegisterAfterWorldMatrixUpdate(node) {
        if (!node.getBoundingInfo) {
            this.setPosition(node.absolutePosition);
        }
        else {
            const mesh = node;
            const boundingInfo = mesh.getBoundingInfo();
            this.setPosition(boundingInfo.boundingSphere.centerWorld);
        }
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.canUseWebAudio && this._isDirectional && this.isPlaying) {
            this._updateDirection();
        }
    }
    /**
     * Clone the current sound in the scene.
     * @returns the new sound clone
     */
    clone() {
        if (!this._streaming) {
            const setBufferAndRun = () => {
                (0,core_Misc_timingTools__WEBPACK_IMPORTED_MODULE_8__._RetryWithInterval)(() => this._isReadyToPlay, () => {
                    clonedSound._audioBuffer = this.getAudioBuffer();
                    clonedSound._isReadyToPlay = true;
                    if (clonedSound.autoplay) {
                        clonedSound.play(0, this._offset, this._length);
                    }
                }, undefined, 300);
            };
            const currentOptions = {
                autoplay: this.autoplay,
                loop: this.loop,
                volume: this._volume,
                spatialSound: this._spatialSound,
                maxDistance: this.maxDistance,
                useCustomAttenuation: this.useCustomAttenuation,
                rolloffFactor: this.rolloffFactor,
                refDistance: this.refDistance,
                distanceModel: this.distanceModel,
            };
            const clonedSound = new Sound(this.name + "_cloned", new ArrayBuffer(0), this._scene, null, currentOptions);
            if (this.useCustomAttenuation) {
                clonedSound.setAttenuationFunction(this._customAttenuationFunction);
            }
            clonedSound.setPosition(this._position);
            clonedSound.setPlaybackRate(this._playbackRate);
            setBufferAndRun();
            return clonedSound;
        }
        // Can't clone a streaming sound
        else {
            return null;
        }
    }
    /**
     * Gets the current underlying audio buffer containing the data
     * @returns the audio buffer
     */
    getAudioBuffer() {
        return this._audioBuffer;
    }
    /**
     * Gets the WebAudio AudioBufferSourceNode, lets you keep track of and stop instances of this Sound.
     * @returns the source node
     */
    getSoundSource() {
        return this._soundSource;
    }
    /**
     * Gets the WebAudio GainNode, gives you precise control over the gain of instances of this Sound.
     * @returns the gain node
     */
    getSoundGain() {
        return this._soundGain;
    }
    /**
     * Serializes the Sound in a JSON representation
     * @returns the JSON representation of the sound
     */
    serialize() {
        const serializationObject = {
            name: this.name,
            url: this._url,
            autoplay: this.autoplay,
            loop: this.loop,
            volume: this._volume,
            spatialSound: this._spatialSound,
            maxDistance: this.maxDistance,
            rolloffFactor: this.rolloffFactor,
            refDistance: this.refDistance,
            distanceModel: this.distanceModel,
            playbackRate: this._playbackRate,
            panningModel: this._panningModel,
            soundTrackId: this.soundTrackId,
            metadata: this.metadata,
        };
        if (this._spatialSound) {
            if (this._connectedTransformNode) {
                serializationObject.connectedMeshId = this._connectedTransformNode.id;
            }
            serializationObject.position = this._position.asArray();
            serializationObject.refDistance = this.refDistance;
            serializationObject.distanceModel = this.distanceModel;
            serializationObject.isDirectional = this._isDirectional;
            serializationObject.localDirectionToMesh = this._localDirection.asArray();
            serializationObject.coneInnerAngle = this._coneInnerAngle;
            serializationObject.coneOuterAngle = this._coneOuterAngle;
            serializationObject.coneOuterGain = this._coneOuterGain;
        }
        return serializationObject;
    }
    /**
     * Parse a JSON representation of a sound to instantiate in a given scene
     * @param parsedSound Define the JSON representation of the sound (usually coming from the serialize method)
     * @param scene Define the scene the new parsed sound should be created in
     * @param rootUrl Define the rooturl of the load in case we need to fetch relative dependencies
     * @param sourceSound Define a sound place holder if do not need to instantiate a new one
     * @returns the newly parsed sound
     */
    static Parse(parsedSound, scene, rootUrl, sourceSound) {
        const soundName = parsedSound.name;
        let soundUrl;
        if (parsedSound.url) {
            soundUrl = rootUrl + parsedSound.url;
        }
        else {
            soundUrl = rootUrl + soundName;
        }
        const options = {
            autoplay: parsedSound.autoplay,
            loop: parsedSound.loop,
            volume: parsedSound.volume,
            spatialSound: parsedSound.spatialSound,
            maxDistance: parsedSound.maxDistance,
            rolloffFactor: parsedSound.rolloffFactor,
            refDistance: parsedSound.refDistance,
            distanceModel: parsedSound.distanceModel,
            playbackRate: parsedSound.playbackRate,
        };
        let newSound;
        if (!sourceSound) {
            newSound = new Sound(soundName, soundUrl, scene, () => {
                scene.removePendingData(newSound);
            }, options);
            scene.addPendingData(newSound);
        }
        else {
            const setBufferAndRun = () => {
                (0,core_Misc_timingTools__WEBPACK_IMPORTED_MODULE_8__._RetryWithInterval)(() => sourceSound._isReadyToPlay, () => {
                    newSound._audioBuffer = sourceSound.getAudioBuffer();
                    newSound._isReadyToPlay = true;
                    if (newSound.autoplay) {
                        newSound.play(0, newSound._offset, newSound._length);
                    }
                }, undefined, 300);
            };
            newSound = new Sound(soundName, new ArrayBuffer(0), scene, null, options);
            setBufferAndRun();
        }
        if (parsedSound.position) {
            const soundPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(parsedSound.position);
            newSound.setPosition(soundPosition);
        }
        if (parsedSound.isDirectional) {
            newSound.setDirectionalCone(parsedSound.coneInnerAngle || 360, parsedSound.coneOuterAngle || 360, parsedSound.coneOuterGain || 0);
            if (parsedSound.localDirectionToMesh) {
                const localDirectionToMesh = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(parsedSound.localDirectionToMesh);
                newSound.setLocalDirectionToMesh(localDirectionToMesh);
            }
        }
        if (parsedSound.connectedMeshId) {
            const connectedMesh = scene.getMeshById(parsedSound.connectedMeshId);
            if (connectedMesh) {
                newSound.attachToMesh(connectedMesh);
            }
        }
        if (parsedSound.metadata) {
            newSound.metadata = parsedSound.metadata;
        }
        return newSound;
    }
    _setOffset(value) {
        if (this._offset === value) {
            return;
        }
        if (this.isPaused) {
            this.stop();
            this.isPaused = false;
        }
        this._offset = value;
    }
    _clearTimeoutsAndObservers() {
        if (this._tryToPlayTimeout) {
            clearTimeout(this._tryToPlayTimeout);
            this._tryToPlayTimeout = null;
        }
        if (this._audioUnlockedObserver) {
            core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_7__.AbstractEngine.audioEngine?.onAudioUnlockedObservable.remove(this._audioUnlockedObserver);
            this._audioUnlockedObserver = null;
        }
    }
}
/**
 * @internal
 */
Sound._SceneComponentInitialization = (_) => {
    throw (0,_Misc_devTools__WEBPACK_IMPORTED_MODULE_4__._WarnImport)("AudioSceneComponent");
};
// Register Class Name
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_6__.RegisterClass)("BABYLON.Sound", Sound);


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

/***/ "../core/dist/Audio/soundTrack.js":
/*!****************************************!*\
  !*** ../core/dist/Audio/soundTrack.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoundTrack: () => (/* binding */ SoundTrack)
/* harmony export */ });
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Engines/abstractEngine */ "../core/dist/Engines/abstractEngine.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * It could be useful to isolate your music & sounds on several tracks to better manage volume on a grouped instance of sounds.
 * It will be also used in a future release to apply effects on a specific track.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-sound-tracks
 */
class SoundTrack {
    /**
     * Creates a new sound track.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-sound-tracks
     * @param scene Define the scene the sound track belongs to
     * @param options
     */
    constructor(scene, options = {}) {
        /**
         * The unique identifier of the sound track in the scene.
         */
        this.id = -1;
        this._isInitialized = false;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_0__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        this.soundCollection = [];
        this._options = options;
        if (!this._options.mainTrack && this._scene.soundTracks) {
            this._scene.soundTracks.push(this);
            this.id = this._scene.soundTracks.length - 1;
        }
    }
    _initializeSoundTrackAudioGraph() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine?.canUseWebAudio && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine.audioContext) {
            this._outputAudioNode = core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine.audioContext.createGain();
            this._outputAudioNode.connect(core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine.masterGain);
            if (this._options) {
                if (this._options.volume) {
                    this._outputAudioNode.gain.value = this._options.volume;
                }
            }
            this._isInitialized = true;
        }
    }
    /**
     * Release the sound track and its associated resources
     */
    dispose() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine && core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine.canUseWebAudio) {
            if (this._connectedAnalyser) {
                this._connectedAnalyser.stopDebugCanvas();
            }
            while (this.soundCollection.length) {
                this.soundCollection[0].dispose();
            }
            if (this._outputAudioNode) {
                this._outputAudioNode.disconnect();
            }
            this._outputAudioNode = null;
        }
    }
    /**
     * Adds a sound to this sound track
     * @param sound define the sound to add
     * @ignoreNaming
     */
    addSound(sound) {
        if (!this._isInitialized) {
            this._initializeSoundTrackAudioGraph();
        }
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine?.canUseWebAudio && this._outputAudioNode) {
            sound.connectToSoundTrackAudioNode(this._outputAudioNode);
        }
        if (sound.soundTrackId !== undefined) {
            if (sound.soundTrackId === -1) {
                this._scene.mainSoundTrack.removeSound(sound);
            }
            else if (this._scene.soundTracks) {
                this._scene.soundTracks[sound.soundTrackId].removeSound(sound);
            }
        }
        this.soundCollection.push(sound);
        sound.soundTrackId = this.id;
    }
    /**
     * Removes a sound to this sound track
     * @param sound define the sound to remove
     * @ignoreNaming
     */
    removeSound(sound) {
        const index = this.soundCollection.indexOf(sound);
        if (index !== -1) {
            this.soundCollection.splice(index, 1);
        }
    }
    /**
     * Set a global volume for the full sound track.
     * @param newVolume Define the new volume of the sound track
     */
    setVolume(newVolume) {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine?.canUseWebAudio && this._outputAudioNode) {
            this._outputAudioNode.gain.value = newVolume;
        }
    }
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */
    switchPanningModelToHRTF() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine?.canUseWebAudio) {
            for (let i = 0; i < this.soundCollection.length; i++) {
                this.soundCollection[i].switchPanningModelToHRTF();
            }
        }
    }
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */
    switchPanningModelToEqualPower() {
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine?.canUseWebAudio) {
            for (let i = 0; i < this.soundCollection.length; i++) {
                this.soundCollection[i].switchPanningModelToEqualPower();
            }
        }
    }
    /**
     * Connect the sound track to an audio analyser allowing some amazing
     * synchronization between the sounds/music and your visualization (VuMeter for instance).
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser
     * @param analyser The analyser to connect to the engine
     */
    connectToAnalyser(analyser) {
        if (this._connectedAnalyser) {
            this._connectedAnalyser.stopDebugCanvas();
        }
        this._connectedAnalyser = analyser;
        if (core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine?.canUseWebAudio && this._outputAudioNode) {
            this._outputAudioNode.disconnect();
            this._connectedAnalyser.connectAudioNodes(this._outputAudioNode, core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_1__.AbstractEngine.audioEngine.masterGain);
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

/***/ "../core/dist/Audio/weightedsound.js":
/*!*******************************************!*\
  !*** ../core/dist/Audio/weightedsound.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeightedSound: () => (/* binding */ WeightedSound)
/* harmony export */ });
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Wraps one or more Sound objects and selects one with random weight for playback.
 */
class WeightedSound {
    /**
     * Creates a new WeightedSound from the list of sounds given.
     * @param loop When true a Sound will be selected and played when the current playing Sound completes.
     * @param sounds Array of Sounds that will be selected from.
     * @param weights Array of number values for selection weights; length must equal sounds, values will be normalized to 1
     */
    constructor(loop, sounds, weights) {
        /** When true a Sound will be selected and played when the current playing Sound completes. */
        this.loop = false;
        this._coneInnerAngle = 360;
        this._coneOuterAngle = 360;
        this._volume = 1;
        /** A Sound is currently playing. */
        this.isPlaying = false;
        /** A Sound is currently paused. */
        this.isPaused = false;
        this._sounds = [];
        this._weights = [];
        if (sounds.length !== weights.length) {
            throw new Error("Sounds length does not equal weights length");
        }
        this.loop = loop;
        this._weights = weights;
        // Normalize the weights
        let weightSum = 0;
        for (const weight of weights) {
            weightSum += weight;
        }
        const invWeightSum = weightSum > 0 ? 1 / weightSum : 0;
        for (let i = 0; i < this._weights.length; i++) {
            this._weights[i] *= invWeightSum;
        }
        this._sounds = sounds;
        for (const sound of this._sounds) {
            sound.onEndedObservable.add(() => {
                this._onended();
            });
        }
    }
    /**
     * The size of cone in degrees for a directional sound in which there will be no attenuation.
     */
    get directionalConeInnerAngle() {
        return this._coneInnerAngle;
    }
    /**
     * The size of cone in degrees for a directional sound in which there will be no attenuation.
     */
    set directionalConeInnerAngle(value) {
        if (value !== this._coneInnerAngle) {
            if (this._coneOuterAngle < value) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneInnerAngle = value;
            for (const sound of this._sounds) {
                sound.directionalConeInnerAngle = value;
            }
        }
    }
    /**
     * Size of cone in degrees for a directional sound outside of which there will be no sound.
     * Listener angles between innerAngle and outerAngle will falloff linearly.
     */
    get directionalConeOuterAngle() {
        return this._coneOuterAngle;
    }
    /**
     * Size of cone in degrees for a directional sound outside of which there will be no sound.
     * Listener angles between innerAngle and outerAngle will falloff linearly.
     */
    set directionalConeOuterAngle(value) {
        if (value !== this._coneOuterAngle) {
            if (value < this._coneInnerAngle) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneOuterAngle = value;
            for (const sound of this._sounds) {
                sound.directionalConeOuterAngle = value;
            }
        }
    }
    /**
     * Playback volume.
     */
    get volume() {
        return this._volume;
    }
    /**
     * Playback volume.
     */
    set volume(value) {
        if (value !== this._volume) {
            for (const sound of this._sounds) {
                sound.setVolume(value);
            }
        }
    }
    _onended() {
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].autoplay = false;
        }
        if (this.loop && this.isPlaying) {
            this.play();
        }
        else {
            this.isPlaying = false;
        }
    }
    /**
     * Suspend playback
     */
    pause() {
        if (this.isPlaying) {
            this.isPaused = true;
            if (this._currentIndex !== undefined) {
                this._sounds[this._currentIndex].pause();
            }
        }
    }
    /**
     * Stop playback
     */
    stop() {
        this.isPlaying = false;
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].stop();
        }
    }
    /**
     * Start playback.
     * @param startOffset Position the clip head at a specific time in seconds.
     */
    play(startOffset) {
        if (!this.isPaused) {
            this.stop();
            const randomValue = Math.random();
            let total = 0;
            for (let i = 0; i < this._weights.length; i++) {
                total += this._weights[i];
                if (randomValue <= total) {
                    this._currentIndex = i;
                    break;
                }
            }
        }
        const sound = this._sounds[this._currentIndex ?? 0];
        if (sound.isReady()) {
            sound.play(0, this.isPaused ? undefined : startOffset);
        }
        else {
            sound.autoplay = true;
        }
        this.isPlaying = true;
        this.isPaused = false;
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

/***/ "../loaders/dist/glTF/2.0/Extensions/MSFT_audio_emitter.js":
/*!*****************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/MSFT_audio_emitter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MSFT_audio_emitter: () => (/* binding */ MSFT_audio_emitter)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Animations_animationEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Animations/animationEvent */ "../core/dist/Animations/animationEvent.js");
/* harmony import */ var core_Audio_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Audio/sound */ "../core/dist/Audio/sound.js");
/* harmony import */ var core_Audio_weightedsound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Audio/weightedsound */ "../core/dist/Audio/weightedsound.js");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../glTFLoader */ "../loaders/dist/glTF/2.0/glTFLoader.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var core_Audio_audioSceneComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Audio/audioSceneComponent */ "../core/dist/Audio/audioSceneComponent.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









const NAME = "MSFT_audio_emitter";
/**
 * [Specification](https://github.com/najadojo/glTF/blob/MSFT_audio_emitter/extensions/2.0/Vendor/MSFT_audio_emitter/README.md)
 * !!! Experimental Extension Subject to Changes !!!
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class MSFT_audio_emitter {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
        this._clips = null;
        this._emitters = null;
    }
    /** @internal */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._clips = extension.clips;
            this._emitters = extension.emitters;
            _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Assign(this._clips);
            _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Assign(this._emitters);
        }
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadSceneAsync(context, scene) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader.LoadExtensionAsync(context, scene, this.name, async (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadSceneAsync(context, scene));
            for (const emitterIndex of extension.emitters) {
                const emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Get(`${extensionContext}/emitters`, this._emitters, emitterIndex);
                if (emitter.refDistance != undefined ||
                    emitter.maxDistance != undefined ||
                    emitter.rolloffFactor != undefined ||
                    emitter.distanceModel != undefined ||
                    emitter.innerAngle != undefined ||
                    emitter.outerAngle != undefined) {
                    throw new Error(`${extensionContext}: Direction or Distance properties are not allowed on emitters attached to a scene`);
                }
                promises.push(this._loadEmitterAsync(`${extensionContext}/emitters/${emitter.index}`, emitter));
            }
            await Promise.all(promises);
        });
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader.LoadExtensionAsync(context, node, this.name, async (extensionContext, extension) => {
            const promises = new Array();
            const babylonMesh = await this._loader.loadNodeAsync(extensionContext, node, (babylonMesh) => {
                for (const emitterIndex of extension.emitters) {
                    const emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Get(`${extensionContext}/emitters`, this._emitters, emitterIndex);
                    promises.push(
                    // eslint-disable-next-line github/no-then
                    this._loadEmitterAsync(`${extensionContext}/emitters/${emitter.index}`, emitter).then(() => {
                        for (const sound of emitter._babylonSounds) {
                            sound.attachToMesh(babylonMesh);
                            if (emitter.innerAngle != undefined || emitter.outerAngle != undefined) {
                                sound.setLocalDirectionToMesh(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Forward());
                                sound.setDirectionalCone(2 * core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.ToDegrees(emitter.innerAngle == undefined ? Math.PI : emitter.innerAngle), 2 * core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.ToDegrees(emitter.outerAngle == undefined ? Math.PI : emitter.outerAngle), 0);
                            }
                        }
                    }));
                }
                assign(babylonMesh);
            });
            await Promise.all(promises);
            return babylonMesh;
        });
    }
    /**
     * @internal
     */
    // eslint-disable-next-line no-restricted-syntax
    loadAnimationAsync(context, animation) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader.LoadExtensionAsync(context, animation, this.name, async (extensionContext, extension) => {
            const babylonAnimationGroup = await this._loader.loadAnimationAsync(context, animation);
            const promises = new Array();
            _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Assign(extension.events);
            for (const event of extension.events) {
                promises.push(this._loadAnimationEventAsync(`${extensionContext}/events/${event.index}`, context, animation, event, babylonAnimationGroup));
            }
            await Promise.all(promises);
            return babylonAnimationGroup;
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadClipAsync(context, clip) {
        if (clip._objectURL) {
            return clip._objectURL;
        }
        let promise;
        if (clip.uri) {
            promise = this._loader.loadUriAsync(context, clip, clip.uri);
        }
        else {
            const bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Get(`${context}/bufferView`, this._loader.gltf.bufferViews, clip.bufferView);
            promise = this._loader.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView);
        }
        // eslint-disable-next-line github/no-then
        clip._objectURL = promise.then((data) => {
            return URL.createObjectURL(new Blob([data], { type: clip.mimeType }));
        });
        return clip._objectURL;
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadEmitterAsync(context, emitter) {
        emitter._babylonSounds = emitter._babylonSounds || [];
        if (!emitter._babylonData) {
            const clipPromises = new Array();
            const name = emitter.name || `emitter${emitter.index}`;
            const options = {
                loop: false,
                autoplay: false,
                volume: emitter.volume == undefined ? 1 : emitter.volume,
            };
            for (let i = 0; i < emitter.clips.length; i++) {
                const clipContext = `/extensions/${this.name}/clips`;
                const clip = _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Get(clipContext, this._clips, emitter.clips[i].clip);
                clipPromises.push(
                // eslint-disable-next-line github/no-then
                this._loadClipAsync(`${clipContext}/${emitter.clips[i].clip}`, clip).then((objectURL) => {
                    const sound = (emitter._babylonSounds[i] = new core_Audio_sound__WEBPACK_IMPORTED_MODULE_3__.Sound(name, objectURL, this._loader.babylonScene, null, options));
                    sound.refDistance = emitter.refDistance || 1;
                    sound.maxDistance = emitter.maxDistance || 256;
                    sound.rolloffFactor = emitter.rolloffFactor || 1;
                    sound.distanceModel = emitter.distanceModel || "exponential";
                }));
            }
            // eslint-disable-next-line github/no-then
            const promise = Promise.all(clipPromises).then(() => {
                const weights = emitter.clips.map((clip) => {
                    return clip.weight || 1;
                });
                const weightedSound = new core_Audio_weightedsound__WEBPACK_IMPORTED_MODULE_4__.WeightedSound(emitter.loop || false, emitter._babylonSounds, weights);
                if (emitter.innerAngle) {
                    weightedSound.directionalConeInnerAngle = 2 * core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.ToDegrees(emitter.innerAngle);
                }
                if (emitter.outerAngle) {
                    weightedSound.directionalConeOuterAngle = 2 * core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.ToDegrees(emitter.outerAngle);
                }
                if (emitter.volume) {
                    weightedSound.volume = emitter.volume;
                }
                emitter._babylonData.sound = weightedSound;
            });
            emitter._babylonData = {
                loaded: promise,
            };
        }
        return emitter._babylonData.loaded;
    }
    _getEventAction(context, sound, action, time, startOffset) {
        switch (action) {
            case "play" /* IMSFTAudioEmitter_AnimationEventAction.play */: {
                return (currentFrame) => {
                    const frameOffset = (startOffset || 0) + (currentFrame - time);
                    sound.play(frameOffset);
                };
            }
            case "stop" /* IMSFTAudioEmitter_AnimationEventAction.stop */: {
                return () => {
                    sound.stop();
                };
            }
            case "pause" /* IMSFTAudioEmitter_AnimationEventAction.pause */: {
                return () => {
                    sound.pause();
                };
            }
            default: {
                throw new Error(`${context}: Unsupported action ${action}`);
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _loadAnimationEventAsync(context, animationContext, animation, event, babylonAnimationGroup) {
        if (babylonAnimationGroup.targetedAnimations.length == 0) {
            return Promise.resolve();
        }
        const babylonAnimation = babylonAnimationGroup.targetedAnimations[0];
        const emitterIndex = event.emitter;
        const emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_5__.ArrayItem.Get(`/extensions/${this.name}/emitters`, this._emitters, emitterIndex);
        // eslint-disable-next-line github/no-then
        return this._loadEmitterAsync(context, emitter).then(() => {
            const sound = emitter._babylonData.sound;
            if (sound) {
                const babylonAnimationEvent = new core_Animations_animationEvent__WEBPACK_IMPORTED_MODULE_2__.AnimationEvent(event.time, this._getEventAction(context, sound, event.action, event.time, event.startOffset));
                babylonAnimation.animation.addEvent(babylonAnimationEvent);
                // Make sure all started audio stops when this animation is terminated.
                babylonAnimationGroup.onAnimationGroupEndObservable.add(() => {
                    sound.stop();
                });
                babylonAnimationGroup.onAnimationGroupPauseObservable.add(() => {
                    sound.pause();
                });
            }
        });
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_6__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_6__.registerGLTFExtension)(NAME, true, (loader) => new MSFT_audio_emitter(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfTVNGVF9hdWRpb19lbWl0dGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUVBO0FBRUE7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQWNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTs7O0FBR0E7QUFDQTtBQWpEQTs7QUFFQTtBQUNBO0FBT0E7QUFTQTtBQVNBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBeUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4VUE7QUEyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxbUJBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF1REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBNkNBOzs7Ozs7O0FBT0E7QUFDQTtBQWhMQTs7QUFFQTtBQUNBO0FBRUE7QUFpQkE7Ozs7QUFJQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVuQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUEwbkNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3h6Q0E7QUFDQTtBQWdCQTs7OztBQUlBO0FBQ0E7QUFnQkE7Ozs7O0FBS0E7QUFDQTtBQXJCQTs7QUFFQTtBQUNBO0FBVUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkxBO0FBRUE7O0FBRUE7QUFDQTtBQWVBOzs7OztBQUtBO0FBQ0E7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBRUE7QUFvQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQWVBOztBQUVBO0FBQ0E7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0FuaW1hdGlvbnMvYW5pbWF0aW9uRXZlbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpby9hdWRpb1NjZW5lQ29tcG9uZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW8vc291bmQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpby9zb3VuZFRyYWNrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW8vd2VpZ2h0ZWRzb3VuZC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvTVNGVF9hdWRpb19lbWl0dGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb21wb3NlZCBvZiBhIGZyYW1lLCBhbmQgYW4gYWN0aW9uIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uRXZlbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgaWYgdGhlIGFuaW1hdGlvbiBldmVudCBpcyBkb25lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0RvbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBhbmltYXRpb24gZXZlbnRcclxuICAgICAqIEBwYXJhbSBmcmFtZSBUaGUgZnJhbWUgZm9yIHdoaWNoIHRoZSBldmVudCBpcyB0cmlnZ2VyZWRcclxuICAgICAqIEBwYXJhbSBhY3Rpb24gVGhlIGV2ZW50IHRvIHBlcmZvcm0gd2hlbiB0cmlnZ2VyZWRcclxuICAgICAqIEBwYXJhbSBvbmx5T25jZSBTcGVjaWZpZXMgaWYgdGhlIGV2ZW50IHNob3VsZCBiZSB0cmlnZ2VyZWQgb25seSBvbmNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKiBUaGUgZnJhbWUgZm9yIHdoaWNoIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQgKiovXHJcbiAgICAgICAgcHVibGljIGZyYW1lOiBudW1iZXIsXHJcbiAgICAgICAgLyoqIFRoZSBldmVudCB0byBwZXJmb3JtIHdoZW4gdHJpZ2dlcmVkICoqL1xyXG4gICAgICAgIHB1YmxpYyBhY3Rpb246IChjdXJyZW50RnJhbWU6IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICAvKiogU3BlY2lmaWVzIGlmIHRoZSBldmVudCBzaG91bGQgYmUgdHJpZ2dlcmVkIG9ubHkgb25jZSoqL1xyXG4gICAgICAgIHB1YmxpYyBvbmx5T25jZT86IGJvb2xlYW5cclxuICAgICkge31cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2Nsb25lKCk6IEFuaW1hdGlvbkV2ZW50IHtcclxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbkV2ZW50KHRoaXMuZnJhbWUsIHRoaXMuYWN0aW9uLCB0aGlzLm9ubHlPbmNlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTb3VuZCB9IGZyb20gXCIuL3NvdW5kXCI7XHJcbmltcG9ydCB7IFNvdW5kVHJhY2sgfSBmcm9tIFwiLi9zb3VuZFRyYWNrXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgTWF0cml4LCBWZWN0b3IzIH0gZnJvbSBcIi4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSVNjZW5lU2VyaWFsaXphYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NjZW5lQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzIH0gZnJvbSBcIi4uL3NjZW5lQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiLi4vYXNzZXRDb250YWluZXJcIjtcclxuXHJcbmltcG9ydCBcIi4vYXVkaW9FbmdpbmVcIjtcclxuaW1wb3J0IHsgUHJlY2lzaW9uRGF0ZSB9IGZyb20gXCIuLi9NaXNjL3ByZWNpc2lvbkRhdGVcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdEVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuaW1wb3J0IHsgQWRkUGFyc2VyIH0gZnJvbSBcImNvcmUvTG9hZGluZy9QbHVnaW5zL2JhYnlsb25GaWxlUGFyc2VyLmZ1bmN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XHJcblxyXG4vLyBBZGRzIHRoZSBwYXJzZXIgdG8gdGhlIHNjZW5lIHBhcnNlcnMuXHJcbkFkZFBhcnNlcihTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPLCAocGFyc2VkRGF0YTogYW55LCBzY2VuZTogU2NlbmUsIGNvbnRhaW5lcjogQXNzZXRDb250YWluZXIsIHJvb3RVcmw6IHN0cmluZykgPT4ge1xyXG4gICAgLy8gVE9ETzogYWRkIHNvdW5kXHJcbiAgICBsZXQgbG9hZGVkU291bmRzOiBTb3VuZFtdID0gW107XHJcbiAgICBsZXQgbG9hZGVkU291bmQ6IFNvdW5kO1xyXG4gICAgY29udGFpbmVyLnNvdW5kcyA9IGNvbnRhaW5lci5zb3VuZHMgfHwgW107XHJcbiAgICBpZiAocGFyc2VkRGF0YS5zb3VuZHMgIT09IHVuZGVmaW5lZCAmJiBwYXJzZWREYXRhLnNvdW5kcyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgY2FjaGUgPSBwYXJzZWREYXRhLnNvdW5kcy5sZW5ndGg7IGluZGV4IDwgY2FjaGU7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkU291bmQgPSBwYXJzZWREYXRhLnNvdW5kc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8pIHtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkU291bmQudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkU291bmQudXJsID0gcGFyc2VkU291bmQubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghbG9hZGVkU291bmRzW3BhcnNlZFNvdW5kLnVybF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZWRTb3VuZCA9IFNvdW5kLlBhcnNlKHBhcnNlZFNvdW5kLCBzY2VuZSwgcm9vdFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkU291bmRzW3BhcnNlZFNvdW5kLnVybF0gPSBsb2FkZWRTb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc291bmRzLnB1c2gobG9hZGVkU291bmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc291bmRzLnB1c2goU291bmQuUGFyc2UocGFyc2VkU291bmQsIHNjZW5lLCByb290VXJsLCBsb2FkZWRTb3VuZHNbcGFyc2VkU291bmQudXJsXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNvdW5kcy5wdXNoKG5ldyBTb3VuZChwYXJzZWRTb3VuZC5uYW1lLCBudWxsLCBzY2VuZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZFNvdW5kcyA9IFtdO1xyXG59KTtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vc2NlbmVcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjZW5lIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAaW50ZXJuYWxcclxuICAgICAgICAgKiBCYWNraW5nIGZpZWxkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX21haW5Tb3VuZFRyYWNrOiBTb3VuZFRyYWNrO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYWluIHNvdW5kIHRyYWNrIHBsYXllZCBieSB0aGUgc2NlbmUuXHJcbiAgICAgICAgICogSXQgY29udGFpbnMgeW91ciBwcmltYXJ5IGNvbGxlY3Rpb24gb2Ygc291bmRzLlxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbWFpblNvdW5kVHJhY2s6IFNvdW5kVHJhY2s7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGxpc3Qgb2Ygc291bmQgdHJhY2tzIGFkZGVkIHRvIHRoZSBzY2VuZVxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc291bmRUcmFja3M6IE51bGxhYmxlPEFycmF5PFNvdW5kVHJhY2s+PjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBhIHNvdW5kIHVzaW5nIGEgZ2l2ZW4gbmFtZVxyXG4gICAgICAgICAqIEBwYXJhbSBuYW1lIGRlZmluZXMgdGhlIG5hbWUgdG8gc2VhcmNoIGZvclxyXG4gICAgICAgICAqIEByZXR1cm5zIHRoZSBmb3VuZCBzb3VuZCBvciBudWxsIGlmIG5vdCBmb3VuZCBhdCBhbGwuXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRTb3VuZEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBOdWxsYWJsZTxTb3VuZD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyBpZiBhdWRpbyBzdXBwb3J0IGlzIGVuYWJsZWRcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGF1ZGlvRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIGlmIGF1ZGlvIHdpbGwgYmUgb3V0cHV0IHRvIGhlYWRwaG9uZXNcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGhlYWRwaG9uZTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIGN1c3RvbSBhdWRpbyBsaXN0ZW5lciBwb3NpdGlvbiBwcm92aWRlclxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXI6IE51bGxhYmxlPCgpID0+IFZlY3RvcjM+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgY3VzdG9tIGF1ZGlvIGxpc3RlbmVyIHJvdGF0aW9uIHByb3ZpZGVyXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBhdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlcjogTnVsbGFibGU8KCkgPT4gVmVjdG9yMz47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyBhIHJlZnJlc2ggcmF0ZSB3aGVuIHVzaW5nIDNEIGF1ZGlvIHBvc2l0aW9uaW5nXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBhdWRpb1Bvc2l0aW9uaW5nUmVmcmVzaFJhdGU6IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lLnByb3RvdHlwZSwgXCJtYWluU291bmRUcmFja1wiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSkge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fbWFpblNvdW5kVHJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFpblNvdW5kVHJhY2sgPSBuZXcgU291bmRUcmFjayh0aGlzLCB7IG1haW5UcmFjazogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluU291bmRUcmFjaztcclxuICAgIH0sXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG59KTtcclxuXHJcblNjZW5lLnByb3RvdHlwZS5nZXRTb3VuZEJ5TmFtZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpOiBOdWxsYWJsZTxTb3VuZD4ge1xyXG4gICAgbGV0IGluZGV4OiBudW1iZXI7XHJcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb25baW5kZXhdLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc291bmRUcmFja3MpIHtcclxuICAgICAgICBmb3IgKGxldCBzZEluZGV4ID0gMDsgc2RJbmRleCA8IHRoaXMuc291bmRUcmFja3MubGVuZ3RoOyBzZEluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zb3VuZFRyYWNrc1tzZEluZGV4XS5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFRyYWNrc1tzZEluZGV4XS5zb3VuZENvbGxlY3Rpb25baW5kZXhdLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VuZFRyYWNrc1tzZEluZGV4XS5zb3VuZENvbGxlY3Rpb25baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lLnByb3RvdHlwZSwgXCJhdWRpb0VuYWJsZWRcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG8uYXVkaW9FbmFibGVkO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lLCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb21wby5lbmFibGVBdWRpbygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvLmRpc2FibGVBdWRpbygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZS5wcm90b3R5cGUsIFwiaGVhZHBob25lXCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvLmhlYWRwaG9uZTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSwgdmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgY29tcG8uc3dpdGNoQXVkaW9Nb2RlRm9ySGVhZHBob25lcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvLnN3aXRjaEF1ZGlvTW9kZUZvck5vcm1hbFNwZWFrZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lLnByb3RvdHlwZSwgXCJhdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlclwiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSkge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wby5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcjtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSwgdmFsdWU6ICgpID0+IFZlY3RvcjMpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHZhbHVlIHBhc3NlZCB0byBbU2NlbmUuYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXJdIG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBWZWN0b3IzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvLmF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lLnByb3RvdHlwZSwgXCJhdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlclwiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSkge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wby5hdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlcjtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSwgdmFsdWU6ICgpID0+IFZlY3RvcjMpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHZhbHVlIHBhc3NlZCB0byBbU2NlbmUuYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXJdIG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBWZWN0b3IzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvLmF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lLnByb3RvdHlwZSwgXCJhdWRpb1Bvc2l0aW9uaW5nUmVmcmVzaFJhdGVcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG8uYXVkaW9Qb3NpdGlvbmluZ1JlZnJlc2hSYXRlO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lLCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG8uYXVkaW9Qb3NpdGlvbmluZ1JlZnJlc2hSYXRlID0gdmFsdWU7XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxufSk7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgc291bmQgc2NlbmUgY29tcG9uZW50IHJlc3BvbnNpYmxlIHRvIG1hbmFnZSBhbnkgc291bmRzXHJcbiAqIGluIGEgZ2l2ZW4gc2NlbmUuXHJcbiAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXVkaW9TY2VuZUNvbXBvbmVudCBpbXBsZW1lbnRzIElTY2VuZVNlcmlhbGl6YWJsZUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ2FtZXJhRGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMCwgLTEpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCBuYW1lIGhlbHBmdWwgdG8gaWRlbnRpZnkgdGhlIGNvbXBvbmVudCBpbiB0aGUgbGlzdCBvZiBzY2VuZSBjb21wb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU87XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2NlbmUgdGhlIGNvbXBvbmVudCBiZWxvbmdzIHRvLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG5cclxuICAgIHByaXZhdGUgX2F1ZGlvRW5hYmxlZCA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciBhdWRpbyBpcyBlbmFibGVkIG9yIG5vdC5cclxuICAgICAqIFBsZWFzZSB1c2UgcmVsYXRlZCBlbmFibGUvZGlzYWJsZSBtZXRob2QgdG8gc3dpdGNoIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGF1ZGlvRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9FbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hlYWRwaG9uZSA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgYXVkaW8gaXMgb3V0cHV0dGluZyB0byBoZWFkcGhvbmUgb3Igbm90LlxyXG4gICAgICogUGxlYXNlIHVzZSB0aGUgYWNjb3JkaW5nIFN3aXRjaCBtZXRob2RzIHRvIGNoYW5nZSBvdXRwdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGVhZHBob25lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkcGhvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSByZWZyZXNoIHJhdGUgd2hlbiB1c2luZyAzRCBhdWRpbyBwb3NpdGlvbmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXVkaW9Qb3NpdGlvbmluZ1JlZnJlc2hSYXRlID0gNTAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBTZXRzIGEgY3VzdG9tIGxpc3RlbmVyIHBvc2l0aW9uIGZvciBhbGwgc291bmRzIGluIHRoZSBzY2VuZVxyXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBpcyB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IGFjdGl2ZSBjYW1lcmFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyOiBOdWxsYWJsZTwoKSA9PiBWZWN0b3IzPiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIFNldHMgYSBjdXN0b20gbGlzdGVuZXIgcm90YXRpb24gZm9yIGFsbCBzb3VuZHMgaW4gdGhlIHNjZW5lXHJcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIGlzIHRoZSByb3RhdGlvbiBvZiB0aGUgZmlyc3QgYWN0aXZlIGNhbWVyYVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXI6IE51bGxhYmxlPCgpID0+IFZlY3RvcjM+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGdpdmVuIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgRGVmaW5lcyB0aGUgc2NlbmUgdG8gcmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBpblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZT86IE51bGxhYmxlPFNjZW5lPikge1xyXG4gICAgICAgIHNjZW5lID0gc2NlbmUgfHwgRW5naW5lU3RvcmUuTGFzdENyZWF0ZWRTY2VuZTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgICAgICBzY2VuZS5zb3VuZFRyYWNrcyA9IFtdIGFzIFNvdW5kVHJhY2tbXTtcclxuICAgICAgICBzY2VuZS5zb3VuZHMgPSBbXSBhcyBTb3VuZFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIHRoZSBjb21wb25lbnQgaW4gYSBnaXZlbiBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5fYWZ0ZXJSZW5kZXJTdGFnZS5yZWdpc3RlclN0ZXAoU2NlbmVDb21wb25lbnRDb25zdGFudHMuU1RFUF9BRlRFUlJFTkRFUl9BVURJTywgdGhpcywgdGhpcy5fYWZ0ZXJSZW5kZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVidWlsZHMgdGhlIGVsZW1lbnRzIHJlbGF0ZWQgdG8gdGhpcyBjb21wb25lbnQgaW4gY2FzZSBvZlxyXG4gICAgICogY29udGV4dCBsb3N0IGZvciBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYnVpbGQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBkbyBoZXJlLiAoTm90IHJlbmRlcmluZyByZWxhdGVkKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGUgY29tcG9uZW50IGRhdGEgdG8gdGhlIHNwZWNpZmllZCBqc29uIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgVGhlIG9iamVjdCB0byBzZXJpYWxpemUgdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnNvdW5kcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kdHJhY2sgPSB0aGlzLnNjZW5lLnNvdW5kVHJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzb3VuZElkID0gMDsgc291bmRJZCA8IHNvdW5kdHJhY2suc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgc291bmRJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zb3VuZHMucHVzaChzb3VuZHRyYWNrLnNvdW5kQ29sbGVjdGlvbltzb3VuZElkXS5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFsbCB0aGUgZWxlbWVudHMgZnJvbSB0aGUgY29udGFpbmVyIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciB0aGUgY29udGFpbmVyIGhvbGRpbmcgdGhlIGVsZW1lbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRGcm9tQ29udGFpbmVyKGNvbnRhaW5lcjogSUFzc2V0Q29udGFpbmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIuc291bmRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiBjb250YWluZXIuc291bmRzKSB7XHJcbiAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgc291bmQuYXV0b3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLm1haW5Tb3VuZFRyYWNrLmFkZFNvdW5kKHNvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGNvbnRhaW5lciBmcm9tIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciBjb250YWlucyB0aGUgZWxlbWVudHMgdG8gcmVtb3ZlXHJcbiAgICAgKiBAcGFyYW0gZGlzcG9zZSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHNob3VsZCBiZSBkaXNwb3NlZCAoZGVmYXVsdDogZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVGcm9tQ29udGFpbmVyKGNvbnRhaW5lcjogSUFzc2V0Q29udGFpbmVyLCBkaXNwb3NlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lci5zb3VuZHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIGNvbnRhaW5lci5zb3VuZHMpIHtcclxuICAgICAgICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICBzb3VuZC5hdXRvcGxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLm1haW5Tb3VuZFRyYWNrLnJlbW92ZVNvdW5kKHNvdW5kKTtcclxuICAgICAgICAgICAgaWYgKGRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgIHNvdW5kLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBjb21wb25lbnQgYW5kIHRoZSBhc3NvY2lhdGVkIHJlc291cmNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG4gICAgICAgIGlmIChzY2VuZS5fbWFpblNvdW5kVHJhY2spIHtcclxuICAgICAgICAgICAgc2NlbmUubWFpblNvdW5kVHJhY2suZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNjSW5kZXggPSAwOyBzY0luZGV4IDwgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBzY0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLnNvdW5kVHJhY2tzW3NjSW5kZXhdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIGF1ZGlvIGluIHRoZSBhc3NvY2lhdGVkIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzYWJsZUF1ZGlvKCkge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICB0aGlzLl9hdWRpb0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5zdXNwZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uW2ldLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uW2pdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGVzIGF1ZGlvIGluIHRoZSBhc3NvY2lhdGVkIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlQXVkaW8oKSB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZSAmJiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbltpXS5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uW2ldLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb25bal0uaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uW2pdLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggYXVkaW8gdG8gaGVhZHBob25lIG91dHB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3aXRjaEF1ZGlvTW9kZUZvckhlYWRwaG9uZXMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuX2hlYWRwaG9uZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHNjZW5lLm1haW5Tb3VuZFRyYWNrLnN3aXRjaFBhbm5pbmdNb2RlbFRvSFJURigpO1xyXG4gICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zd2l0Y2hQYW5uaW5nTW9kZWxUb0hSVEYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCBhdWRpbyB0byBub3JtYWwgc3BlYWtlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hBdWRpb01vZGVGb3JOb3JtYWxTcGVha2VycygpIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5faGVhZHBob25lID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHNjZW5lLm1haW5Tb3VuZFRyYWNrLnN3aXRjaFBhbm5pbmdNb2RlbFRvRXF1YWxQb3dlcigpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuc291bmRUcmFja3NbaV0uc3dpdGNoUGFubmluZ01vZGVsVG9FcXVhbFBvd2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FjaGVkQ2FtZXJhRGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIHByaXZhdGUgX2NhY2hlZENhbWVyYVBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIHByaXZhdGUgX2xhc3RDaGVjayA9IDA7XHJcbiAgICBwcml2YXRlIF9pbnZlcnRNYXRyaXhUZW1wID0gbmV3IE1hdHJpeCgpO1xyXG4gICAgcHJpdmF0ZSBfY2FtZXJhRGlyZWN0aW9uVGVtcCA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gUHJlY2lzaW9uRGF0ZS5Ob3c7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RDaGVjayAmJiBub3cgLSB0aGlzLl9sYXN0Q2hlY2sgPCB0aGlzLmF1ZGlvUG9zaXRpb25pbmdSZWZyZXNoUmF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sYXN0Q2hlY2sgPSBub3c7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1ZGlvRW5hYmxlZCB8fCAhc2NlbmUuX21haW5Tb3VuZFRyYWNrIHx8ICFzY2VuZS5zb3VuZFRyYWNrcyB8fCAoc2NlbmUuX21haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGggPT09IDAgJiYgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoID09PSAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdWRpb0VuZ2luZSA9IEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lO1xyXG5cclxuICAgICAgICBpZiAoIWF1ZGlvRW5naW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmluZ0NhbWVyYSA9IHNjZW5lLmFjdGl2ZUNhbWVyYTtcclxuICAgICAgICAgICAgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYXMgJiYgc2NlbmUuYWN0aXZlQ2FtZXJhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5pbmdDYW1lcmEgPSBzY2VuZS5hY3RpdmVDYW1lcmFzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBIGN1c3RvbSBsaXN0ZW5lciBwb3NpdGlvbiBwcm92aWRlciB3YXMgc2V0XHJcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgdXNlcnMgcHJvdmlkZWQgcG9zaXRpb24gaW5zdGVhZCBvZiBjYW1lcmEnc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb246IFZlY3RvcjMgPSB0aGlzLmF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGxpc3RlbmVyIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQubGlzdGVuZXIuc2V0UG9zaXRpb24ocG9zaXRpb24ueCB8fCAwLCBwb3NpdGlvbi55IHx8IDAsIHBvc2l0aW9uLnogfHwgMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGxpc3RlbmluZyBjYW1lcmFcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5pbmdDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbGlzdGVuZXIgcG9zaXRpb24gdG8gdGhlIGxpc3RlbmluZyBjYW1lcmEgZ2xvYmFsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZENhbWVyYVBvc2l0aW9uLmVxdWFscyhsaXN0ZW5pbmdDYW1lcmEuZ2xvYmFsUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkQ2FtZXJhUG9zaXRpb24uY29weUZyb20obGlzdGVuaW5nQ2FtZXJhLmdsb2JhbFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQubGlzdGVuZXIuc2V0UG9zaXRpb24obGlzdGVuaW5nQ2FtZXJhLmdsb2JhbFBvc2l0aW9uLngsIGxpc3RlbmluZ0NhbWVyYS5nbG9iYWxQb3NpdGlvbi55LCBsaXN0ZW5pbmdDYW1lcmEuZ2xvYmFsUG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHNldCB0aGUgbGlzdGVuZXIgcG9zaXRpb24gdG8gMCwgMCAsMFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbGlzdGVuZXIgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5saXN0ZW5lci5zZXRQb3NpdGlvbigwLCAwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQSBjdXN0b20gbGlzdGVuZXIgcm90YXRpb24gcHJvdmlkZXIgd2FzIHNldFxyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHVzZXJzIHByb3ZpZGVkIHJvdGF0aW9uIGluc3RlYWQgb2YgY2FtZXJhJ3NcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uOiBWZWN0b3IzID0gdGhpcy5hdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlcigpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHJvdGF0aW9uLnggfHwgMCwgcm90YXRpb24ueSB8fCAwLCByb3RhdGlvbi56IHx8IDAsIDAsIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBsaXN0ZW5pbmcgY2FtZXJhXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuaW5nQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgVlIgY2FtZXJhc1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmluZ0NhbWVyYS5yaWdDYW1lcmFzICYmIGxpc3RlbmluZ0NhbWVyYS5yaWdDYW1lcmFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5pbmdDYW1lcmEgPSBsaXN0ZW5pbmdDYW1lcmEucmlnQ2FtZXJhc1swXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5pbmdDYW1lcmEuZ2V0Vmlld01hdHJpeCgpLmludmVydFRvUmVmKHRoaXMuX2ludmVydE1hdHJpeFRlbXApO1xyXG4gICAgICAgICAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Ob3JtYWxUb1JlZihBdWRpb1NjZW5lQ29tcG9uZW50Ll9DYW1lcmFEaXJlY3Rpb24sIHRoaXMuX2ludmVydE1hdHJpeFRlbXAsIHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIC8vIFRvIGF2b2lkIHNvbWUgZXJyb3JzIG9uIEdlYXJWUlxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLngpICYmICFpc05hTih0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLnkpICYmICFpc05hTih0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLnopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRDYW1lcmFEaXJlY3Rpb24uZXF1YWxzKHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZENhbWVyYURpcmVjdGlvbi5jb3B5RnJvbSh0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAueCwgdGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC55LCB0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLnosIDAsIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2V0IHRoZSBsaXN0ZW5lciByb3RhdGlvbiB0byAwLCAwICwwXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBsaXN0ZW5lciBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaTogbnVtYmVyO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VuZCA9IHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VuZC51c2VDdXN0b21BdHRlbnVhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnVwZGF0ZURpc3RhbmNlRnJvbUxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VuZCA9IHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbltqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdW5kLnVzZUN1c3RvbUF0dGVudWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC51cGRhdGVEaXN0YW5jZUZyb21MaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Tb3VuZC5fU2NlbmVDb21wb25lbnRJbml0aWFsaXphdGlvbiA9IChzY2VuZTogU2NlbmUpID0+IHtcclxuICAgIGxldCBjb21wbyA9IHNjZW5lLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTyk7XHJcbiAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudChzY2VuZSk7XHJcbiAgICAgICAgc2NlbmUuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiLi4vTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiLi4vTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IF9XYXJuSW1wb3J0IH0gZnJvbSBcIi4uL01pc2MvZGV2VG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBJU291bmRPcHRpb25zIH0gZnJvbSBcIi4vSW50ZXJmYWNlcy9JU291bmRPcHRpb25zXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi9JbnRlcmZhY2VzL0lBdWRpb0VuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE9ic2VydmVyIH0gZnJvbSBcIi4uL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5pbXBvcnQgeyBfUmV0cnlXaXRoSW50ZXJ2YWwgfSBmcm9tIFwiY29yZS9NaXNjL3RpbWluZ1Rvb2xzXCI7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIHNvdW5kIHRoYXQgY2FuIGJlIHBsYXllZCBpbiB0aGUgYXBwbGljYXRpb24uXHJcbiAqIFRoZSBzb3VuZCBjYW4gZWl0aGVyIGJlIGFuIGFtYmllbnQgdHJhY2sgb3IgYSBzaW1wbGUgc291bmQgcGxheWVkIGluIHJlYWN0aW9uIHRvIGEgdXNlciBhY3Rpb24uXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpY1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNvdW5kIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHNvdW5kIGluIHRoZSBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgc291bmQgYXV0b3BsYXkgb25jZSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdXRvcGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2xvb3AgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgc291bmQgbG9vcCBhZnRlciBpdCBmaW5pc2hlcyBwbGF5aW5nIG9uY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9vcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX2xvb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbG9vcCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucyh7IGxvb3A6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgc291bmQgdXNlIGEgY3VzdG9tIGF0dGVudWF0aW9uIGN1cnZlIHRvIHNpbXVsYXRlIHRoZSBmYWxsb2ZmXHJcbiAgICAgKiBoYXBwZW5pbmcgd2hlbiB0aGUgc291cmNlIGdldHMgZnVydGhlciBhd2F5IGZyb20gdGhlIGNhbWVyYS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyNjcmVhdGluZy15b3VyLW93bi1jdXN0b20tYXR0ZW51YXRpb24tZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZUN1c3RvbUF0dGVudWF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzb3VuZCB0cmFjayBpZCB0aGlzIHNvdW5kIGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VuZFRyYWNrSWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhpcyBzb3VuZCBjdXJyZW50bHkgcGxheWVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoaXMgc291bmQgY3VycmVudGx5IHBhdXNlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGUgcmVmZXJlbmNlIGRpc3RhbmNlIHRoZSBzb3VuZCBzaG91bGQgYmUgaGVhcmQgcGVyZmVjdGx5LlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmRGlzdGFuY2U6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGUgcm9sbCBvZmYgZmFjdG9yIG9mIHNwYXRpYWwgc291bmRzLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm9sbG9mZkZhY3RvcjogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoZSBtYXggZGlzdGFuY2UgdGhlIHNvdW5kIHNob3VsZCBiZSBoZWFyZCAoaW50ZW5zaXR5IGp1c3QgYmVjYW1lIDAgYXQgdGhpcyBwb2ludCkuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXhEaXN0YW5jZTogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhlIGRpc3RhbmNlIGF0dGVudWF0aW9uIG1vZGVsIHRoZSBzb3VuZCB3aWxsIGZvbGxvdy5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3RhbmNlTW9kZWw6IHN0cmluZyA9IFwibGluZWFyXCI7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQmFjayBDb21wYXRcclxuICAgICAqKi9cclxuICAgIHB1YmxpYyBvbmVuZGVkOiAoKSA9PiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhbiBvYmplY3QgdXNlZCB0byBzdG9yZSB1c2VyIGRlZmluZWQgaW5mb3JtYXRpb24gZm9yIHRoZSBzb3VuZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSBldmVudCB3aGVuIHRoZSBjdXJyZW50IHBsYXlpbmcgc291bmQgZmluaXNoZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkVuZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPFNvdW5kPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCB0aW1lIGZvciB0aGUgc291bmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5faHRtbEF1ZGlvRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faHRtbEF1ZGlvRWxlbWVudC5jdXJyZW50VGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uYXVkaW9Db250ZXh0ICYmICh0aGlzLmlzUGxheWluZyB8fCB0aGlzLmlzUGF1c2VkKSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgYF9jdXJyZW50VGltZWAgbWVtYmVyIGlzIG9ubHkgdXBkYXRlZCB3aGVuIHRoZSBzb3VuZCBpcyBwYXVzZWQuIEFkZCB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBzdGFydFxyXG4gICAgICAgICAgICAvLyB0byBnZXQgdGhlIGFjdHVhbCBjdXJyZW50IHRpbWUuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RTdGFydCA9IHRoaXMuaXNQYXVzZWQgPyAwIDogQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lIC0gdGhpcy5fc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWUgKyB0aW1lU2luY2VMYXN0U3RhcnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhpcyBzb3VuZCBlbmFibGVzIHNwYXRpYWwgc291bmQuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3BhdGlhbFNvdW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGF0aWFsU291bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoaXMgc291bmQgZW5hYmxlcyBzcGF0aWFsIHNvdW5kLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwYXRpYWxTb3VuZChuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0aGlzLl9zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd2FzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nO1xyXG4gICAgICAgIHRoaXMucGF1c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxTb3VuZCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTcGF0aWFsUGFyYW1ldGVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVTcGF0aWFsU291bmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3YXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zcGF0aWFsU291bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Bhbm5pbmdNb2RlbDogc3RyaW5nID0gXCJlcXVhbHBvd2VyXCI7XHJcbiAgICBwcml2YXRlIF9wbGF5YmFja1JhdGU6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIF9zdHJlYW1pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3N0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb246IFZlY3RvcjMgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIHByaXZhdGUgX2xvY2FsRGlyZWN0aW9uOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoMSwgMCwgMCk7XHJcbiAgICBwcml2YXRlIF92b2x1bWU6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIF9pc1JlYWR5VG9QbGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc0RpcmVjdGlvbmFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yZWFkeVRvUGxheUNhbGxiYWNrOiBOdWxsYWJsZTwoKSA9PiBhbnk+O1xyXG4gICAgcHJpdmF0ZSBfYXVkaW9CdWZmZXI6IE51bGxhYmxlPEF1ZGlvQnVmZmVyPjtcclxuICAgIHByaXZhdGUgX3NvdW5kU291cmNlOiBOdWxsYWJsZTxBdWRpb0J1ZmZlclNvdXJjZU5vZGU+O1xyXG4gICAgcHJpdmF0ZSBfc3RyZWFtaW5nU291cmNlOiBOdWxsYWJsZTxBdWRpb05vZGU+O1xyXG4gICAgcHJpdmF0ZSBfc291bmRQYW5uZXI6IE51bGxhYmxlPFBhbm5lck5vZGU+O1xyXG4gICAgcHJpdmF0ZSBfc291bmRHYWluOiBOdWxsYWJsZTxHYWluTm9kZT47XHJcbiAgICBwcml2YXRlIF9pbnB1dEF1ZGlvTm9kZTogTnVsbGFibGU8QXVkaW9Ob2RlPjtcclxuICAgIHByaXZhdGUgX291dHB1dEF1ZGlvTm9kZTogTnVsbGFibGU8QXVkaW9Ob2RlPjtcclxuICAgIC8vIFVzZWQgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYSBkaXJlY3Rpb25hbCBzb3VuZC5cclxuICAgIC8vIElmIG5vdCBzZXQsIHRoZSBzb3VuZCB3aWxsIGJlIG9tbmlkaXJlY3Rpb25hbFxyXG4gICAgcHJpdmF0ZSBfY29uZUlubmVyQW5nbGU6IG51bWJlciA9IDM2MDtcclxuICAgIHByaXZhdGUgX2NvbmVPdXRlckFuZ2xlOiBudW1iZXIgPSAzNjA7XHJcbiAgICBwcml2YXRlIF9jb25lT3V0ZXJHYWluOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkVHJhbnNmb3JtTm9kZTogTnVsbGFibGU8VHJhbnNmb3JtTm9kZT47XHJcbiAgICBwcml2YXRlIF9jdXN0b21BdHRlbnVhdGlvbkZ1bmN0aW9uOiAoY3VycmVudFZvbHVtZTogbnVtYmVyLCBjdXJyZW50RGlzdGFuY2U6IG51bWJlciwgbWF4RGlzdGFuY2U6IG51bWJlciwgcmVmRGlzdGFuY2U6IG51bWJlciwgcm9sbG9mZkZhY3RvcjogbnVtYmVyKSA9PiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9yZWdpc3RlckZ1bmM6IE51bGxhYmxlPChjb25uZWN0ZWRNZXNoOiBUcmFuc2Zvcm1Ob2RlKSA9PiB2b2lkPjtcclxuICAgIHByaXZhdGUgX2lzT3V0cHV0Q29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9odG1sQXVkaW9FbGVtZW50OiBOdWxsYWJsZTxIVE1MQXVkaW9FbGVtZW50PjtcclxuICAgIHByaXZhdGUgX3VybFR5cGU6IFwiVW5rbm93blwiIHwgXCJTdHJpbmdcIiB8IFwiQXJyYXlcIiB8IFwiQXJyYXlCdWZmZXJcIiB8IFwiTWVkaWFTdHJlYW1cIiB8IFwiQXVkaW9CdWZmZXJcIiB8IFwiTWVkaWFFbGVtZW50XCIgPSBcIlVua25vd25cIjtcclxuICAgIHByaXZhdGUgX2xlbmd0aD86IG51bWJlcjtcclxuICAgIHByaXZhdGUgX29mZnNldD86IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RyeVRvUGxheVRpbWVvdXQ6IE51bGxhYmxlPE5vZGVKUy5UaW1lb3V0PjtcclxuICAgIHByaXZhdGUgX2F1ZGlvVW5sb2NrZWRPYnNlcnZlcj86IE51bGxhYmxlPE9ic2VydmVyPElBdWRpb0VuZ2luZT4+O1xyXG4gICAgcHJpdmF0ZSBfdXJsPzogTnVsbGFibGU8c3RyaW5nPjtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX1NjZW5lQ29tcG9uZW50SW5pdGlhbGl6YXRpb246IChzY2VuZTogU2NlbmUpID0+IHZvaWQgPSAoXykgPT4ge1xyXG4gICAgICAgIHRocm93IF9XYXJuSW1wb3J0KFwiQXVkaW9TY2VuZUNvbXBvbmVudFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBzb3VuZCBhbmQgYXR0YWNoIGl0IHRvIGEgc2NlbmVcclxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgeW91ciBzb3VuZFxyXG4gICAgICogQHBhcmFtIHVybE9yQXJyYXlCdWZmZXIgVXJsIHRvIHRoZSBzb3VuZCB0byBsb2FkIGFzeW5jIG9yIEFycmF5QnVmZmVyLCBpdCBhbHNvIHdvcmtzIHdpdGggTWVkaWFTdHJlYW1zIGFuZCBBdWRpb0J1ZmZlcnNcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB0aGUgc291bmQgYmVsb25ncyB0b1xyXG4gICAgICogQHBhcmFtIHJlYWR5VG9QbGF5Q2FsbGJhY2sgUHJvdmlkZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIHlvdSdkIGxpa2UgdG8gbG9hZCB5b3VyIGNvZGUgb25jZSB0aGUgc291bmQgaXMgcmVhZHkgdG8gYmUgcGxheWVkXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPYmplY3RzIHRvIHByb3ZpZGUgd2l0aCB0aGUgY3VycmVudCBhdmFpbGFibGUgb3B0aW9uczogYXV0b3BsYXksIGxvb3AsIHZvbHVtZSwgc3BhdGlhbFNvdW5kLCBtYXhEaXN0YW5jZSwgcm9sbG9mZkZhY3RvciwgcmVmRGlzdGFuY2UsIGRpc3RhbmNlTW9kZWwsIHBhbm5pbmdNb2RlbCwgc3RyZWFtaW5nXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdXJsT3JBcnJheUJ1ZmZlcjogYW55LCBzY2VuZT86IE51bGxhYmxlPFNjZW5lPiwgcmVhZHlUb1BsYXlDYWxsYmFjazogTnVsbGFibGU8KCkgPT4gdm9pZD4gPSBudWxsLCBvcHRpb25zPzogSVNvdW5kT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgc2NlbmUgPSBzY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIFNvdW5kLl9TY2VuZUNvbXBvbmVudEluaXRpYWxpemF0aW9uKHNjZW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVhZHlUb1BsYXlDYWxsYmFjayA9IHJlYWR5VG9QbGF5Q2FsbGJhY2s7XHJcbiAgICAgICAgLy8gRGVmYXVsdCBjdXN0b20gYXR0ZW51YXRpb24gZnVuY3Rpb24gaXMgYSBsaW5lYXIgYXR0ZW51YXRpb25cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgdGhpcy5fY3VzdG9tQXR0ZW51YXRpb25GdW5jdGlvbiA9IChjdXJyZW50Vm9sdW1lOiBudW1iZXIsIGN1cnJlbnREaXN0YW5jZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCByZWZEaXN0YW5jZTogbnVtYmVyLCByb2xsb2ZmRmFjdG9yOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXN0YW5jZSA8IG1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFZvbHVtZSAqICgxIC0gY3VycmVudERpc3RhbmNlIC8gbWF4RGlzdGFuY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b3BsYXkgPSBvcHRpb25zLmF1dG9wbGF5IHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9sb29wID0gb3B0aW9ucy5sb29wIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBpZiB2b2x1bWUgPT09IDAsIHdlIG5lZWQgYW5vdGhlciB3YXkgdG8gY2hlY2sgdGhpcyBvcHRpb25cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudm9sdW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZvbHVtZSA9IG9wdGlvbnMudm9sdW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NwYXRpYWxTb3VuZCA9IG9wdGlvbnMuc3BhdGlhbFNvdW5kID8/IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gb3B0aW9ucy5tYXhEaXN0YW5jZSA/PyAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24gPSBvcHRpb25zLnVzZUN1c3RvbUF0dGVudWF0aW9uID8/IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGxvZmZGYWN0b3IgPSBvcHRpb25zLnJvbGxvZmZGYWN0b3IgfHwgMTtcclxuICAgICAgICAgICAgdGhpcy5yZWZEaXN0YW5jZSA9IG9wdGlvbnMucmVmRGlzdGFuY2UgfHwgMTtcclxuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZU1vZGVsID0gb3B0aW9ucy5kaXN0YW5jZU1vZGVsIHx8IFwibGluZWFyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXliYWNrUmF0ZSA9IG9wdGlvbnMucGxheWJhY2tSYXRlIHx8IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0cmVhbWluZyA9IG9wdGlvbnMuc3RyZWFtaW5nID8/IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZEdhaW4gPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZEdhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMuX3ZvbHVtZTtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRBdWRpb05vZGUgPSB0aGlzLl9zb3VuZEdhaW47XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZSA9IHRoaXMuX3NvdW5kR2FpbjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3BhdGlhbFBhcmFtZXRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5tYWluU291bmRUcmFjay5hZGRTb3VuZCh0aGlzKTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkUGFyYW1ldGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHBhcmFtZXRlciBpcyBwYXNzZWQsIHlvdSBuZWVkIHRvIGNhbGwgc2V0QXVkaW9CdWZmZXIgeW91cnNlbGYgdG8gcHJlcGFyZSB0aGUgc291bmRcclxuICAgICAgICAgICAgaWYgKHVybE9yQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmxPckFycmF5QnVmZmVyID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VybFR5cGUgPSBcIlN0cmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cmwgPSB1cmxPckFycmF5QnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsT3JBcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VybFR5cGUgPSBcIkFycmF5QnVmZmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cmxPckFycmF5QnVmZmVyIGluc3RhbmNlb2YgSFRNTE1lZGlhRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cmxUeXBlID0gXCJNZWRpYUVsZW1lbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVybE9yQXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cmxUeXBlID0gXCJNZWRpYVN0cmVhbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXJsT3JBcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEF1ZGlvQnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VybFR5cGUgPSBcIkF1ZGlvQnVmZmVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHVybE9yQXJyYXlCdWZmZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VybFR5cGUgPSBcIkFycmF5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29kZWNTdXBwb3J0ZWRGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3VybFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1lZGlhRWxlbWVudFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RyZWFtaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RyZWFtaW5nU291cmNlID0gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSh1cmxPckFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheSgwLCB0aGlzLl9vZmZzZXQsIHRoaXMuX2xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5VG9QbGF5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1lZGlhU3RyZWFtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdHJlYW1pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdHJlYW1pbmdTb3VyY2UgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UodXJsT3JBcnJheUJ1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b3BsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoMCwgdGhpcy5fb2Zmc2V0LCB0aGlzLl9sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZHlUb1BsYXlDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJheUJ1ZmZlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCg8QXJyYXlCdWZmZXI+dXJsT3JBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlY1N1cHBvcnRlZEZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZExvYWRlZCh1cmxPckFycmF5QnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQXVkaW9CdWZmZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyTG9hZGVkKHVybE9yQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTdHJpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybHMucHVzaCh1cmxPckFycmF5QnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJheVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJscyA9IHVybE9yQXJyYXlCdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBmb3VuZCBhIHN1cHBvcnRlZCBmb3JtYXQsIHdlIGxvYWQgaXQgaW1tZWRpYXRlbHkgYW5kIHN0b3AgdGhlIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWNTdXBwb3J0ZWRGb3VuZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb25zICYmIG9wdGlvbnMuc2tpcENvZGVjQ2hlY2spIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh1cmwuaW5kZXhPZihcIi5tcDNcIiwgdXJsLmxlbmd0aCAtIDQpICE9PSAtMSAmJiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5pc01QM3N1cHBvcnRlZCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVybC5pbmRleE9mKFwiLm9nZ1wiLCB1cmwubGVuZ3RoIC0gNCkgIT09IC0xICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmlzT0dHc3VwcG9ydGVkKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuaW5kZXhPZihcIi53YXZcIiwgdXJsLmxlbmd0aCAtIDQpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuaW5kZXhPZihcIi5tNGFcIiwgdXJsLmxlbmd0aCAtIDQpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuaW5kZXhPZihcIi5tcDRcIiwgdXJsLmxlbmd0aCAtIDQpICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwuaW5kZXhPZihcImJsb2I6XCIpICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29kZWNTdXBwb3J0ZWRGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2FkaW5nIHNvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc3RyZWFtaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZS5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kTG9hZGVkKGRhdGEgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXhjZXB0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIlhIUiBcIiArIGV4Y2VwdGlvbi5zdGF0dXMgKyBcIiBlcnJvciBvbjogXCIgKyB1cmwgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiU291bmQgY3JlYXRpb24gYWJvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLm1haW5Tb3VuZFRyYWNrLnJlbW92ZVNvdW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyZWFtaW5nIHNvdW5kIHVzaW5nIEhUTUw1IEF1ZGlvIHRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQgPSBuZXcgQXVkaW8odXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQuY29udHJvbHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQubG9vcCA9IHRoaXMubG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLlNldENvcnNCZWhhdmlvcih1cmwsIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faHRtbEF1ZGlvRWxlbWVudC5wcmVsb2FkID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9odG1sQXVkaW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYW5wbGF5dGhyb3VnaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoMCwgdGhpcy5fb2Zmc2V0LCB0aGlzLl9sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9odG1sQXVkaW9FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRQYXJhbWV0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZFBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIFVSTCB0byB0aGUgc291bmQsIGFuIEFycmF5IG9mIFVSTHMgKC5tcDMgJiAub2dnKSBvciBhbiBBcnJheUJ1ZmZlciBvZiB0aGUgc291bmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29kZWNTdXBwb3J0ZWRGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0aW5nIGEgcmVhZHkgdG8gcGxheSBldmVudCB0byBhdm9pZCBicmVha2luZyBjb2RlIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiVW5leHBlY3RlZCBlcnJvci4gU291bmQgY3JlYXRpb24gYWJvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NlbmUubWFpblNvdW5kVHJhY2sucmVtb3ZlU291bmQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgYW4gZW1wdHkgc291bmQgdG8gYXZvaWQgYnJlYWtpbmcgYXVkaW8gY2FsbHMgZm9yIG5vbiBXZWIgQXVkaW8gYnJvd3NlcnNcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUubWFpblNvdW5kVHJhY2suYWRkU291bmQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZSAmJiAhQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuV2FybmVkV2ViQXVkaW9VbnN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiV2ViIEF1ZGlvIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKTtcclxuICAgICAgICAgICAgICAgIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLldhcm5lZFdlYkF1ZGlvVW5zdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNpbXVsYXRpbmcgYSByZWFkeSB0byBwbGF5IGV2ZW50IHRvIGF2b2lkIGJyZWFraW5nIGNvZGUgZm9yIG5vbiB3ZWIgYXVkaW8gYnJvd3NlcnNcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5VG9QbGF5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlYWR5VG9QbGF5Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbGVhc2UgdGhlIHNvdW5kIGFuZCBpdHMgYXNzb2NpYXRlZCByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc291bmRUcmFja0lkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NlbmUubWFpblNvdW5kVHJhY2sucmVtb3ZlU291bmQodGhpcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLnNvdW5kVHJhY2tzW3RoaXMuc291bmRUcmFja0lkXS5yZW1vdmVTb3VuZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRHYWluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZEdhaW4uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRHYWluID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRQYW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faHRtbEF1ZGlvRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faHRtbEF1ZGlvRWxlbWVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faHRtbEF1ZGlvRWxlbWVudC5zcmMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9odG1sQXVkaW9FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtaW5nU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJlYW1pbmdTb3VyY2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyZWFtaW5nU291cmNlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy5fcmVnaXN0ZXJGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLnVucmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRoaXMuX3JlZ2lzdGVyRnVuYyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0c0FuZE9ic2VydmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgaWYgdGhlIHNvdW5kcyBpcyByZWFkeSB0byBiZSBwbGF5ZWQgb3Igbm90LlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiByZWFkeSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1JlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1JlYWR5VG9QbGF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGNsYXNzIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJucyBjdXJyZW50IGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlNvdW5kXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXVkaW9CdWZmZXJMb2FkZWQoYnVmZmVyOiBBdWRpb0J1ZmZlcikge1xyXG4gICAgICAgIGlmICghQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyID0gYnVmZmVyO1xyXG4gICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXkgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSgwLCB0aGlzLl9vZmZzZXQsIHRoaXMuX2xlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlYWR5VG9QbGF5Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc291bmRMb2FkZWQoYXVkaW9EYXRhOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIGlmICghQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKFxyXG4gICAgICAgICAgICBhdWRpb0RhdGEsXHJcbiAgICAgICAgICAgIChidWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyTG9hZGVkKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRXJyb3Igd2hpbGUgZGVjb2RpbmcgYXVkaW8gZGF0YSBmb3I6IFwiICsgdGhpcy5uYW1lICsgXCIgLyBFcnJvcjogXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGRhdGEgb2YgdGhlIHNvdW5kIGZyb20gYW4gYXVkaW9idWZmZXJcclxuICAgICAqIEBwYXJhbSBhdWRpb0J1ZmZlciBUaGUgYXVkaW9CdWZmZXIgY29udGFpbmluZyB0aGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QXVkaW9CdWZmZXIoYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbykge1xyXG4gICAgICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlciA9IGF1ZGlvQnVmZmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1JlYWR5VG9QbGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHNvdW5kcyBvcHRpb25zIHN1Y2ggYXMgbWF4ZGlzdGFuY2UsIGxvb3AuLi5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyB2YWx1ZXMgbmFtZWQgYXMgdGhlIG9iamVjdCBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IElTb3VuZE9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmxvb3AgPSBvcHRpb25zLmxvb3AgPz8gdGhpcy5sb29wO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gb3B0aW9ucy5tYXhEaXN0YW5jZSA/PyB0aGlzLm1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uID0gb3B0aW9ucy51c2VDdXN0b21BdHRlbnVhdGlvbiA/PyB0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGxvZmZGYWN0b3IgPSBvcHRpb25zLnJvbGxvZmZGYWN0b3IgPz8gdGhpcy5yb2xsb2ZmRmFjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLnJlZkRpc3RhbmNlID0gb3B0aW9ucy5yZWZEaXN0YW5jZSA/PyB0aGlzLnJlZkRpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlTW9kZWwgPSBvcHRpb25zLmRpc3RhbmNlTW9kZWwgPz8gdGhpcy5kaXN0YW5jZU1vZGVsO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5YmFja1JhdGUgPSBvcHRpb25zLnBsYXliYWNrUmF0ZSA/PyB0aGlzLl9wbGF5YmFja1JhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2xlbmd0aCA9IG9wdGlvbnMubGVuZ3RoID8/IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5zcGF0aWFsU291bmQgPSBvcHRpb25zLnNwYXRpYWxTb3VuZCA/PyB0aGlzLl9zcGF0aWFsU291bmQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE9mZnNldChvcHRpb25zLm9mZnNldCA/PyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZShvcHRpb25zLnZvbHVtZSA/PyB0aGlzLl92b2x1bWUpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTcGF0aWFsUGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdHJlYW1pbmcgJiYgdGhpcy5faHRtbEF1ZGlvRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQucGxheWJhY2tSYXRlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9odG1sQXVkaW9FbGVtZW50Lmxvb3AgIT09IHRoaXMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9odG1sQXVkaW9FbGVtZW50Lmxvb3AgPSB0aGlzLmxvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc291bmRTb3VyY2UubG9vcCAhPT0gdGhpcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFNvdXJjZS5sb29wID0gdGhpcy5sb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZzZXQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9zb3VuZFNvdXJjZS5sb29wU3RhcnQgIT09IHRoaXMuX29mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UubG9vcFN0YXJ0ID0gdGhpcy5fb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sZW5ndGggIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9sZW5ndGggIT09IHRoaXMuX3NvdW5kU291cmNlLmxvb3BFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLmxvb3BFbmQgPSAodGhpcy5fb2Zmc2V0ISB8IDApICsgdGhpcy5fbGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNwYXRpYWxQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zY2VuZS5oZWFkcGhvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bhbm5pbmdNb2RlbCA9IFwiSFJURlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyID0gdGhpcy5fc291bmRQYW5uZXIgPz8gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmNyZWF0ZVBhbm5lcigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRQYW5uZXIgJiYgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTcGF0aWFsUGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRQYW5uZXIuY29ubmVjdCh0aGlzLl9vdXRwdXRBdWRpb05vZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXRBdWRpb05vZGUgPSB0aGlzLl9zb3VuZFBhbm5lcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kaXNhYmxlU3BhdGlhbFNvdW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faW5wdXRBdWRpb05vZGUgPSB0aGlzLl9zb3VuZEdhaW47XHJcbiAgICAgICAgdGhpcy5fc291bmRQYW5uZXI/LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLl9zb3VuZFBhbm5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc3BhdGlhbFNvdW5kID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlU3BhdGlhbFBhcmFtZXRlcnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc291bmRQYW5uZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIFRyaWNrcyB0byBkaXNhYmxlIGluIGEgd2F5IGVtYmVkZGVkIFdlYiBBdWRpbyBhdHRlbnVhdGlvblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRQYW5uZXIuZGlzdGFuY2VNb2RlbCA9IFwibGluZWFyXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5tYXhEaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5yZWZEaXN0YW5jZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5yb2xsb2ZmRmFjdG9yID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnBhbm5pbmdNb2RlbCA9IHRoaXMuX3Bhbm5pbmdNb2RlbCBhcyBhbnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5kaXN0YW5jZU1vZGVsID0gdGhpcy5kaXN0YW5jZU1vZGVsIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLm1heERpc3RhbmNlID0gdGhpcy5tYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnJlZkRpc3RhbmNlID0gdGhpcy5yZWZEaXN0YW5jZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnJvbGxvZmZGYWN0b3IgPSB0aGlzLnJvbGxvZmZGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5wYW5uaW5nTW9kZWwgPSB0aGlzLl9wYW5uaW5nTW9kZWwgYXMgYW55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3BhdGlhbFBhcmFtZXRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdGhlIHBhbm5pbmcgbW9kZWwgdG8gSFJURjpcclxuICAgICAqIFJlbmRlcnMgYSBzdGVyZW8gb3V0cHV0IG9mIGhpZ2hlciBxdWFsaXR5IHRoYW4gZXF1YWxwb3dlciDigJQgaXQgdXNlcyBhIGNvbnZvbHV0aW9uIHdpdGggbWVhc3VyZWQgaW1wdWxzZSByZXNwb25zZXMgZnJvbSBodW1hbiBzdWJqZWN0cy5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3aXRjaFBhbm5pbmdNb2RlbFRvSFJURigpIHtcclxuICAgICAgICB0aGlzLl9wYW5uaW5nTW9kZWwgPSBcIkhSVEZcIjtcclxuICAgICAgICB0aGlzLl9zd2l0Y2hQYW5uaW5nTW9kZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCB0aGUgcGFubmluZyBtb2RlbCB0byBFcXVhbCBQb3dlcjpcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIGVxdWFsLXBvd2VyIHBhbm5pbmcgYWxnb3JpdGhtLCBnZW5lcmFsbHkgcmVnYXJkZWQgYXMgc2ltcGxlIGFuZCBlZmZpY2llbnQuIGVxdWFscG93ZXIgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hQYW5uaW5nTW9kZWxUb0VxdWFsUG93ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFubmluZ01vZGVsID0gXCJlcXVhbHBvd2VyXCI7XHJcbiAgICAgICAgdGhpcy5fc3dpdGNoUGFubmluZ01vZGVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3dpdGNoUGFubmluZ01vZGVsKCkge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5fc3BhdGlhbFNvdW5kICYmIHRoaXMuX3NvdW5kUGFubmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnBhbm5pbmdNb2RlbCA9IHRoaXMuX3Bhbm5pbmdNb2RlbCBhcyBhbnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdCB0aGlzIHNvdW5kIHRvIGEgc291bmQgdHJhY2sgYXVkaW8gbm9kZSBsaWtlIGdhaW4uLi5cclxuICAgICAqIEBwYXJhbSBzb3VuZFRyYWNrQXVkaW9Ob2RlIHRoZSBzb3VuZCB0cmFjayBhdWRpbyBub2RlIHRvIGNvbm5lY3QgdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbm5lY3RUb1NvdW5kVHJhY2tBdWRpb05vZGUoc291bmRUcmFja0F1ZGlvTm9kZTogQXVkaW9Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbyAmJiB0aGlzLl9vdXRwdXRBdWRpb05vZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzT3V0cHV0Q29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZS5jb25uZWN0KHNvdW5kVHJhY2tBdWRpb05vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc091dHB1dENvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoaXMgc291bmQgaW50byBhIGRpcmVjdGlvbmFsIHNvdXJjZVxyXG4gICAgICogQHBhcmFtIGNvbmVJbm5lckFuZ2xlIFNpemUgb2YgdGhlIGlubmVyIGNvbmUgaW4gZGVncmVlXHJcbiAgICAgKiBAcGFyYW0gY29uZU91dGVyQW5nbGUgU2l6ZSBvZiB0aGUgb3V0ZXIgY29uZSBpbiBkZWdyZWVcclxuICAgICAqIEBwYXJhbSBjb25lT3V0ZXJHYWluIFZvbHVtZSBvZiB0aGUgc291bmQgb3V0c2lkZSB0aGUgb3V0ZXIgY29uZSAoYmV0d2VlbiAwLjAgYW5kIDEuMClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldERpcmVjdGlvbmFsQ29uZShjb25lSW5uZXJBbmdsZTogbnVtYmVyLCBjb25lT3V0ZXJBbmdsZTogbnVtYmVyLCBjb25lT3V0ZXJHYWluOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY29uZU91dGVyQW5nbGUgPCBjb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJzZXREaXJlY3Rpb25hbENvbmUoKTogb3V0ZXIgYW5nbGUgb2YgdGhlIGNvbmUgbXVzdCBiZSBzdXBlcmlvciBvciBlcXVhbCB0byB0aGUgaW5uZXIgYW5nbGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbmVJbm5lckFuZ2xlID0gY29uZUlubmVyQW5nbGU7XHJcbiAgICAgICAgdGhpcy5fY29uZU91dGVyQW5nbGUgPSBjb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICB0aGlzLl9jb25lT3V0ZXJHYWluID0gY29uZU91dGVyR2FpbjtcclxuICAgICAgICB0aGlzLl9pc0RpcmVjdGlvbmFsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nICYmIHRoaXMubG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KDAsIHRoaXMuX29mZnNldCwgdGhpcy5fbGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGlubmVyIGFuZ2xlIGZvciB0aGUgZGlyZWN0aW9uYWwgY29uZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmVJbm5lckFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBpbm5lciBhbmdsZSBmb3IgdGhlIGRpcmVjdGlvbmFsIGNvbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuX2NvbmVJbm5lckFuZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25lT3V0ZXJBbmdsZSA8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlOiBvdXRlciBhbmdsZSBvZiB0aGUgY29uZSBtdXN0IGJlIHN1cGVyaW9yIG9yIGVxdWFsIHRvIHRoZSBpbm5lciBhbmdsZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmVJbm5lckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5fc3BhdGlhbFNvdW5kICYmIHRoaXMuX3NvdW5kUGFubmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5jb25lSW5uZXJBbmdsZSA9IHRoaXMuX2NvbmVJbm5lckFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBvdXRlciBhbmdsZSBmb3IgdGhlIGRpcmVjdGlvbmFsIGNvbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25lT3V0ZXJBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgb3V0ZXIgYW5nbGUgZm9yIHRoZSBkaXJlY3Rpb25hbCBjb25lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLl9jb25lT3V0ZXJBbmdsZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLl9jb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZTogb3V0ZXIgYW5nbGUgb2YgdGhlIGNvbmUgbXVzdCBiZSBzdXBlcmlvciBvciBlcXVhbCB0byB0aGUgaW5uZXIgYW5nbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb25lT3V0ZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIHRoaXMuX3NwYXRpYWxTb3VuZCAmJiB0aGlzLl9zb3VuZFBhbm5lcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRQYW5uZXIuY29uZU91dGVyQW5nbGUgPSB0aGlzLl9jb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBlbWl0dGVyIGlmIHNwYXRpYWwgc291bmQgaXMgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtIG5ld1Bvc2l0aW9uIERlZmluZXMgdGhlIG5ldyBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgICAgICBpZiAobmV3UG9zaXRpb24uZXF1YWxzKHRoaXMuX3Bvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uLmNvcHlGcm9tKG5ld1Bvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiZcclxuICAgICAgICAgICAgdGhpcy5fc3BhdGlhbFNvdW5kICYmXHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyICYmXHJcbiAgICAgICAgICAgICFpc05hTih0aGlzLl9wb3NpdGlvbi54KSAmJlxyXG4gICAgICAgICAgICAhaXNOYU4odGhpcy5fcG9zaXRpb24ueSkgJiZcclxuICAgICAgICAgICAgIWlzTmFOKHRoaXMuX3Bvc2l0aW9uLnopXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnBvc2l0aW9uWC52YWx1ZSA9IHRoaXMuX3Bvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnBvc2l0aW9uWS52YWx1ZSA9IHRoaXMuX3Bvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnBvc2l0aW9uWi52YWx1ZSA9IHRoaXMuX3Bvc2l0aW9uLno7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbG9jYWwgZGlyZWN0aW9uIG9mIHRoZSBlbWl0dGVyIGlmIHNwYXRpYWwgc291bmQgaXMgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtIG5ld0xvY2FsRGlyZWN0aW9uIERlZmluZXMgdGhlIG5ldyBsb2NhbCBkaXJlY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExvY2FsRGlyZWN0aW9uVG9NZXNoKG5ld0xvY2FsRGlyZWN0aW9uOiBWZWN0b3IzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxEaXJlY3Rpb24gPSBuZXdMb2NhbERpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbyAmJiB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlICYmIHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlIHx8ICF0aGlzLl9zb3VuZFBhbm5lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXQgPSB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gVmVjdG9yMy5UcmFuc2Zvcm1Ob3JtYWwodGhpcy5fbG9jYWxEaXJlY3Rpb24sIG1hdCk7XHJcbiAgICAgICAgZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLm9yaWVudGF0aW9uWC52YWx1ZSA9IGRpcmVjdGlvbi54O1xyXG4gICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLm9yaWVudGF0aW9uWS52YWx1ZSA9IGRpcmVjdGlvbi55O1xyXG4gICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLm9yaWVudGF0aW9uWi52YWx1ZSA9IGRpcmVjdGlvbi56O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVEaXN0YW5jZUZyb21MaXN0ZW5lcigpIHtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbiAmJiB0aGlzLl9zb3VuZEdhaW4gJiYgdGhpcy5fc2NlbmUuYWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5fc2NlbmUuYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgID8gdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZS5wb3NpdGlvbi5zdWJ0cmFjdCh0aGlzLl9zY2VuZS5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcigpKS5sZW5ndGgoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLmdldERpc3RhbmNlVG9DYW1lcmEodGhpcy5fc2NlbmUuYWN0aXZlQ2FtZXJhKTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRHYWluLmdhaW4udmFsdWUgPSB0aGlzLl9jdXN0b21BdHRlbnVhdGlvbkZ1bmN0aW9uKHRoaXMuX3ZvbHVtZSwgZGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UsIHRoaXMucmVmRGlzdGFuY2UsIHRoaXMucm9sbG9mZkZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIG5ldyBjdXN0b20gYXR0ZW51YXRpb24gZnVuY3Rpb24gZm9yIHRoZSBzb3VuZC5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBEZWZpbmVzIHRoZSBmdW5jdGlvbiB1c2VkIGZvciB0aGUgYXR0ZW51YXRpb25cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyNjcmVhdGluZy15b3VyLW93bi1jdXN0b20tYXR0ZW51YXRpb24tZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEF0dGVudWF0aW9uRnVuY3Rpb24oY2FsbGJhY2s6IChjdXJyZW50Vm9sdW1lOiBudW1iZXIsIGN1cnJlbnREaXN0YW5jZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCByZWZEaXN0YW5jZTogbnVtYmVyLCByb2xsb2ZmRmFjdG9yOiBudW1iZXIpID0+IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUF0dGVudWF0aW9uRnVuY3Rpb24gPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXkgdGhlIHNvdW5kXHJcbiAgICAgKiBAcGFyYW0gdGltZSAob3B0aW9uYWwpIFN0YXJ0IHRoZSBzb3VuZCBhZnRlciBYIHNlY29uZHMuIFN0YXJ0IGltbWVkaWF0ZWx5ICgwKSBieSBkZWZhdWx0LlxyXG4gICAgICogQHBhcmFtIG9mZnNldCAob3B0aW9uYWwpIFN0YXJ0IHRoZSBzb3VuZCBhdCBhIHNwZWNpZmljIHRpbWUgaW4gc2Vjb25kc1xyXG4gICAgICogQHBhcmFtIGxlbmd0aCAob3B0aW9uYWwpIFNvdW5kIGR1cmF0aW9uIChpbiBzZWNvbmRzKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheSh0aW1lPzogbnVtYmVyLCBvZmZzZXQ/OiBudW1iZXIsIGxlbmd0aD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1JlYWR5VG9QbGF5ICYmIHRoaXMuX3NjZW5lLmF1ZGlvRW5hYmxlZCAmJiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzQW5kT2JzZXJ2ZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRpbWUgPyBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lICsgdGltZSA6IEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NvdW5kU291cmNlIHx8ICF0aGlzLl9zdHJlYW1pbmdTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3BhdGlhbFNvdW5kICYmIHRoaXMuX3NvdW5kUGFubmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4odGhpcy5fcG9zaXRpb24ueCkgJiYgIWlzTmFOKHRoaXMuX3Bvc2l0aW9uLnkpICYmICFpc05hTih0aGlzLl9wb3NpdGlvbi56KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRQYW5uZXIucG9zaXRpb25YLnZhbHVlID0gdGhpcy5fcG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLnBvc2l0aW9uWS52YWx1ZSA9IHRoaXMuX3Bvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5wb3NpdGlvbloudmFsdWUgPSB0aGlzLl9wb3NpdGlvbi56O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0RpcmVjdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFBhbm5lci5jb25lSW5uZXJBbmdsZSA9IHRoaXMuX2NvbmVJbm5lckFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRQYW5uZXIuY29uZU91dGVyQW5nbGUgPSB0aGlzLl9jb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kUGFubmVyLmNvbmVPdXRlckdhaW4gPSB0aGlzLl9jb25lT3V0ZXJHYWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRQYW5uZXIuc2V0T3JpZW50YXRpb24odGhpcy5fbG9jYWxEaXJlY3Rpb24ueCwgdGhpcy5fbG9jYWxEaXJlY3Rpb24ueSwgdGhpcy5fbG9jYWxEaXJlY3Rpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9zdHJlYW1pbmdTb3VyY2UgJiYgdGhpcy5faHRtbEF1ZGlvRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdHJlYW1pbmdTb3VyY2UgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9odG1sQXVkaW9FbGVtZW50Lm9uZW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbmVuZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQucGxheWJhY2tSYXRlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtaW5nU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0cmVhbWluZ1NvdXJjZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dEF1ZGlvTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RyZWFtaW5nU291cmNlLmNvbm5lY3QodGhpcy5faW5wdXRBdWRpb05vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9odG1sQXVkaW9FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVkIHRvIG1hbmFnZSBwcm9wZXJseSB0aGUgbmV3IHN1c3BlbmRlZCBkZWZhdWx0IHN0YXRlIG9mIENocm9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBvcHRpb24gJ3N0cmVhbWluZzogdHJ1ZScgaXMgdXNlZCwgd2UgbmVlZCBmaXJzdCB0byB3YWl0IGZvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYXVkaW8gZW5naW5lIHRvIGJlIHVubG9ja2VkIGJ5IGEgdXNlciBnZXN0dXJlIGJlZm9yZSB0cnlpbmcgdG8gcGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbiBIVE1MIEF1ZGlvIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ5VG9QbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy51bmxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5faHRtbEF1ZGlvRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9odG1sQXVkaW9FbGVtZW50LmN1cnJlbnRUaW1lID0gb2Zmc2V0ID8/IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheVByb21pc2UgPSB0aGlzLl9odG1sQXVkaW9FbGVtZW50LnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gYnJvd3NlcnMgdGhhdCBkb27igJl0IHlldCBzdXBwb3J0IHRoaXMgZnVuY3Rpb25hbGl0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGF5UHJvbWlzZSB3b27igJl0IGJlIGRlZmluZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXlQcm9taXNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlQcm9taXNlLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG9tYXRpYyBwbGF5YmFjayBmYWlsZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIGZvciB0aGUgYXVkaW8gZW5naW5lIHRvIGJlIHVubG9ja2VkIGJ5IHVzZXIgY2xpY2sgb24gdW5tdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8ubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9vcCB8fCB0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9VbmxvY2tlZE9ic2VydmVyID0gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/Lm9uQXVkaW9VbmxvY2tlZE9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvb3AgfHwgdGhpcy5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb1VubG9ja2VkT2JzZXJ2ZXIgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8ub25BdWRpb1VubG9ja2VkT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeVRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ5VG9QbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gbGVuZ3RoIHx8IHRoaXMuX2xlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRPZmZzZXQob2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRTb3VyY2UgPSB0aGlzLl9zb3VuZFNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRTb3VyY2Uub25lbmRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkU291cmNlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kU291cmNlICYmIHRoaXMuX2lucHV0QXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UuYnVmZmVyID0gdGhpcy5fYXVkaW9CdWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UuY29ubmVjdCh0aGlzLl9pbnB1dEF1ZGlvTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UubG9vcCA9IHRoaXMubG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UubG9vcFN0YXJ0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRTb3VyY2UubG9vcEVuZCA9IChvZmZzZXQhIHwgMCkgKyBsZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHRoaXMuX3BsYXliYWNrUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFNvdXJjZS5vbmVuZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbmVuZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSB0aW1lID8gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSArIHRpbWUgOiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsT2Zmc2V0ID0gKCh0aGlzLmlzUGF1c2VkID8gdGhpcy5jdXJyZW50VGltZSA6IDApICsgKHRoaXMuX29mZnNldCA/PyAwKSkgJSB0aGlzLl9zb3VuZFNvdXJjZS5idWZmZXIhLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLnN0YXJ0KHN0YXJ0VGltZSwgYWN0dWFsT2Zmc2V0LCB0aGlzLmxvb3AgPyB1bmRlZmluZWQgOiBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5hdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBhIGJpdCBmb3IgRkYgYXMgY29udGV4dCBzZWVtcyBsYXRlIHRvIGJlIHJlYWR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90cnlUb1BsYXlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmF1ZGlvQ29udGV4dCEuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRvbWF0aWMgcGxheWJhY2sgZmFpbGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgZm9yIHRoZSBhdWRpbyBlbmdpbmUgdG8gYmUgdW5sb2NrZWQgYnkgdXNlciBjbGljayBvbiB1bm11dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9vcCB8fCB0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1ZGlvVW5sb2NrZWRPYnNlcnZlciA9IEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLm9uQXVkaW9VbmxvY2tlZE9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlUb1BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlUb1BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlUb1BsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gcGxheSBhdWRpbzogXCIgKyB0aGlzLm5hbWUgKyBcIiwgXCIgKyBleC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbmVuZGVkKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMub25lbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uZW5kZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkVuZGVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHRoZSBzb3VuZFxyXG4gICAgICogQHBhcmFtIHRpbWUgKG9wdGlvbmFsKSBTdG9wIHRoZSBzb3VuZCBhZnRlciBYIHNlY29uZHMuIFN0b3AgaW1tZWRpYXRlbHkgKDApIGJ5IGRlZmF1bHQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wKHRpbWU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0c0FuZE9ic2VydmVycygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faHRtbEF1ZGlvRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IG5lZWRlZCBmb3IgRmlyZWZveCBvciBpdCB3aWxsIGdlbmVyYXRlIGFuIEludmFsaWQgU3RhdGUgRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faHRtbEF1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faHRtbEF1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdHJlYW1pbmdTb3VyY2U/LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmF1ZGlvQ29udGV4dCAmJiB0aGlzLl9zb3VuZFNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcFRpbWUgPSB0aW1lID8gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lICsgdGltZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLm9uZW5kZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLm9uZW5kZWQgPSAoKSA9PiB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uZW5kZWQoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFNvdXJjZS5zdG9wKHN0b3BUaW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHV0IHRoZSBzb3VuZCBpbiBwYXVzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHNBbmRPYnNlcnZlcnMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0cmVhbWluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9odG1sQXVkaW9FbGVtZW50LnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0cmVhbWluZ1NvdXJjZT8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5hdWRpb0NvbnRleHQgJiYgdGhpcy5fc291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kU291cmNlLm9uZW5kZWQgPSAoKSA9PiB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFNvdXJjZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSArPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUgLSB0aGlzLl9zdGFydFRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgZGVkaWNhdGVkIHZvbHVtZSBmb3IgdGhpcyBzb3VuZHNcclxuICAgICAqIEBwYXJhbSBuZXdWb2x1bWUgRGVmaW5lIHRoZSBuZXcgdm9sdW1lIG9mIHRoZSBzb3VuZFxyXG4gICAgICogQHBhcmFtIHRpbWUgRGVmaW5lIHRpbWUgZm9yIGdyYWR1YWwgY2hhbmdlIHRvIG5ldyB2b2x1bWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFZvbHVtZShuZXdWb2x1bWU6IG51bWJlciwgdGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5fc291bmRHYWluKSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRHYWluLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZEdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSh0aGlzLl9zb3VuZEdhaW4uZ2Fpbi52YWx1ZSwgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kR2Fpbi5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKG5ld1ZvbHVtZSwgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lICsgdGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZEdhaW4uZ2Fpbi52YWx1ZSA9IG5ld1ZvbHVtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl92b2x1bWUgPSBuZXdWb2x1bWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHNvdW5kIHBsYXkgYmFjayByYXRlXHJcbiAgICAgKiBAcGFyYW0gbmV3UGxheWJhY2tSYXRlIERlZmluZSB0aGUgcGxheWJhY2sgcmF0ZSB0aGUgc291bmQgc2hvdWxkIGJlIHBsYXllZCBhdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UGxheWJhY2tSYXRlKG5ld1BsYXliYWNrUmF0ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGxheWJhY2tSYXRlID0gbmV3UGxheWJhY2tSYXRlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RyZWFtaW5nICYmIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2h0bWxBdWRpb0VsZW1lbnQucGxheWJhY2tSYXRlID0gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NvdW5kU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgPSB0aGlzLl9wbGF5YmFja1JhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzb3VuZCBwbGF5IGJhY2sgcmF0ZS5cclxuICAgICAqIEByZXR1cm5zIHRoZSAgcGxheSBiYWNrIHJhdGUgb2YgdGhlIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdm9sdW1lIG9mIHRoZSBzb3VuZC5cclxuICAgICAqIEByZXR1cm5zIHRoZSB2b2x1bWUgb2YgdGhlIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRWb2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIHRoZSBzb3VuZCB0byBhIGRlZGljYXRlZCBtZXNoXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtTm9kZSBUaGUgdHJhbnNmb3JtIG5vZGUgdG8gY29ubmVjdCB0aGUgc291bmQgd2l0aFxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2F0dGFjaGluZy1hLXNvdW5kLXRvLWEtbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXR0YWNoVG9NZXNoKHRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSAmJiB0aGlzLl9yZWdpc3RlckZ1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZS51bnJlZ2lzdGVyQWZ0ZXJXb3JsZE1hdHJpeFVwZGF0ZSh0aGlzLl9yZWdpc3RlckZ1bmMpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlckZ1bmMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlID0gdHJhbnNmb3JtTm9kZTtcclxuICAgICAgICBpZiAoIXRoaXMuX3NwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zcGF0aWFsU291bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVTcGF0aWFsUGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheSgwLCB0aGlzLl9vZmZzZXQsIHRoaXMuX2xlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25SZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJGdW5jID0gKHRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHRoaXMuX29uUmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUucmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRoaXMuX3JlZ2lzdGVyRnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggdGhlIHNvdW5kIGZyb20gdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgbWVzaFxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2F0dGFjaGluZy1hLXNvdW5kLXRvLWEtbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGV0YWNoRnJvbU1lc2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy5fcmVnaXN0ZXJGdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUudW5yZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fcmVnaXN0ZXJGdW5jKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJGdW5jID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uUmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKG5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoISg8YW55Pm5vZGUpLmdldEJvdW5kaW5nSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKG5vZGUuYWJzb2x1dGVQb3NpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaCA9IG5vZGUgYXMgQWJzdHJhY3RNZXNoO1xyXG4gICAgICAgICAgICBjb25zdCBib3VuZGluZ0luZm8gPSBtZXNoLmdldEJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGJvdW5kaW5nSW5mby5ib3VuZGluZ1NwaGVyZS5jZW50ZXJXb3JsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5faXNEaXJlY3Rpb25hbCAmJiB0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVEaXJlY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9uZSB0aGUgY3VycmVudCBzb3VuZCBpbiB0aGUgc2NlbmUuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3IHNvdW5kIGNsb25lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBOdWxsYWJsZTxTb3VuZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3RyZWFtaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldEJ1ZmZlckFuZFJ1biA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIF9SZXRyeVdpdGhJbnRlcnZhbChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLl9pc1JlYWR5VG9QbGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkU291bmQuX2F1ZGlvQnVmZmVyID0gdGhpcy5nZXRBdWRpb0J1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRTb3VuZC5faXNSZWFkeVRvUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbG9uZWRTb3VuZC5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkU291bmQucGxheSgwLCB0aGlzLl9vZmZzZXQsIHRoaXMuX2xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAzMDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5LFxyXG4gICAgICAgICAgICAgICAgbG9vcDogdGhpcy5sb29wLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiB0aGlzLl92b2x1bWUsXHJcbiAgICAgICAgICAgICAgICBzcGF0aWFsU291bmQ6IHRoaXMuX3NwYXRpYWxTb3VuZCxcclxuICAgICAgICAgICAgICAgIG1heERpc3RhbmNlOiB0aGlzLm1heERpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgdXNlQ3VzdG9tQXR0ZW51YXRpb246IHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24sXHJcbiAgICAgICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0aGlzLnJvbGxvZmZGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICByZWZEaXN0YW5jZTogdGhpcy5yZWZEaXN0YW5jZSxcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHRoaXMuZGlzdGFuY2VNb2RlbCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZFNvdW5kID0gbmV3IFNvdW5kKHRoaXMubmFtZSArIFwiX2Nsb25lZFwiLCBuZXcgQXJyYXlCdWZmZXIoMCksIHRoaXMuX3NjZW5lLCBudWxsLCBjdXJyZW50T3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRTb3VuZC5zZXRBdHRlbnVhdGlvbkZ1bmN0aW9uKHRoaXMuX2N1c3RvbUF0dGVudWF0aW9uRnVuY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsb25lZFNvdW5kLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgY2xvbmVkU291bmQuc2V0UGxheWJhY2tSYXRlKHRoaXMuX3BsYXliYWNrUmF0ZSk7XHJcbiAgICAgICAgICAgIHNldEJ1ZmZlckFuZFJ1bigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZFNvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDYW4ndCBjbG9uZSBhIHN0cmVhbWluZyBzb3VuZFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHVuZGVybHlpbmcgYXVkaW8gYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRhdGFcclxuICAgICAqIEByZXR1cm5zIHRoZSBhdWRpbyBidWZmZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEF1ZGlvQnVmZmVyKCk6IE51bGxhYmxlPEF1ZGlvQnVmZmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvQnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgV2ViQXVkaW8gQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBsZXRzIHlvdSBrZWVwIHRyYWNrIG9mIGFuZCBzdG9wIGluc3RhbmNlcyBvZiB0aGlzIFNvdW5kLlxyXG4gICAgICogQHJldHVybnMgdGhlIHNvdXJjZSBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTb3VuZFNvdXJjZSgpOiBOdWxsYWJsZTxBdWRpb0J1ZmZlclNvdXJjZU5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRTb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBXZWJBdWRpbyBHYWluTm9kZSwgZ2l2ZXMgeW91IHByZWNpc2UgY29udHJvbCBvdmVyIHRoZSBnYWluIG9mIGluc3RhbmNlcyBvZiB0aGlzIFNvdW5kLlxyXG4gICAgICogQHJldHVybnMgdGhlIGdhaW4gbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U291bmRHYWluKCk6IE51bGxhYmxlPEdhaW5Ob2RlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kR2FpbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhlIFNvdW5kIGluIGEgSlNPTiByZXByZXNlbnRhdGlvblxyXG4gICAgICogQHJldHVybnMgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5LFxyXG4gICAgICAgICAgICBsb29wOiB0aGlzLmxvb3AsXHJcbiAgICAgICAgICAgIHZvbHVtZTogdGhpcy5fdm9sdW1lLFxyXG4gICAgICAgICAgICBzcGF0aWFsU291bmQ6IHRoaXMuX3NwYXRpYWxTb3VuZCxcclxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IHRoaXMubWF4RGlzdGFuY2UsXHJcbiAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHRoaXMucm9sbG9mZkZhY3RvcixcclxuICAgICAgICAgICAgcmVmRGlzdGFuY2U6IHRoaXMucmVmRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHRoaXMuZGlzdGFuY2VNb2RlbCxcclxuICAgICAgICAgICAgcGxheWJhY2tSYXRlOiB0aGlzLl9wbGF5YmFja1JhdGUsXHJcbiAgICAgICAgICAgIHBhbm5pbmdNb2RlbDogdGhpcy5fcGFubmluZ01vZGVsLFxyXG4gICAgICAgICAgICBzb3VuZFRyYWNrSWQ6IHRoaXMuc291bmRUcmFja0lkLFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbm5lY3RlZE1lc2hJZCA9IHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucG9zaXRpb24gPSB0aGlzLl9wb3NpdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucmVmRGlzdGFuY2UgPSB0aGlzLnJlZkRpc3RhbmNlO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmRpc3RhbmNlTW9kZWwgPSB0aGlzLmRpc3RhbmNlTW9kZWw7XHJcblxyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlzRGlyZWN0aW9uYWwgPSB0aGlzLl9pc0RpcmVjdGlvbmFsO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmxvY2FsRGlyZWN0aW9uVG9NZXNoID0gdGhpcy5fbG9jYWxEaXJlY3Rpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmVJbm5lckFuZ2xlID0gdGhpcy5fY29uZUlubmVyQW5nbGU7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29uZU91dGVyQW5nbGUgPSB0aGlzLl9jb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25lT3V0ZXJHYWluID0gdGhpcy5fY29uZU91dGVyR2FpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGEgc291bmQgdG8gaW5zdGFudGlhdGUgaW4gYSBnaXZlbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFNvdW5kIERlZmluZSB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgc291bmQgKHVzdWFsbHkgY29taW5nIGZyb20gdGhlIHNlcmlhbGl6ZSBtZXRob2QpXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgRGVmaW5lIHRoZSBzY2VuZSB0aGUgbmV3IHBhcnNlZCBzb3VuZCBzaG91bGQgYmUgY3JlYXRlZCBpblxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgRGVmaW5lIHRoZSByb290dXJsIG9mIHRoZSBsb2FkIGluIGNhc2Ugd2UgbmVlZCB0byBmZXRjaCByZWxhdGl2ZSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEBwYXJhbSBzb3VyY2VTb3VuZCBEZWZpbmUgYSBzb3VuZCBwbGFjZSBob2xkZXIgaWYgZG8gbm90IG5lZWQgdG8gaW5zdGFudGlhdGUgYSBuZXcgb25lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3bHkgcGFyc2VkIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUGFyc2UocGFyc2VkU291bmQ6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcsIHNvdXJjZVNvdW5kPzogU291bmQpOiBTb3VuZCB7XHJcbiAgICAgICAgY29uc3Qgc291bmROYW1lID0gcGFyc2VkU291bmQubmFtZTtcclxuICAgICAgICBsZXQgc291bmRVcmw7XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWRTb3VuZC51cmwpIHtcclxuICAgICAgICAgICAgc291bmRVcmwgPSByb290VXJsICsgcGFyc2VkU291bmQudXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNvdW5kVXJsID0gcm9vdFVybCArIHNvdW5kTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBwYXJzZWRTb3VuZC5hdXRvcGxheSxcclxuICAgICAgICAgICAgbG9vcDogcGFyc2VkU291bmQubG9vcCxcclxuICAgICAgICAgICAgdm9sdW1lOiBwYXJzZWRTb3VuZC52b2x1bWUsXHJcbiAgICAgICAgICAgIHNwYXRpYWxTb3VuZDogcGFyc2VkU291bmQuc3BhdGlhbFNvdW5kLFxyXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogcGFyc2VkU291bmQubWF4RGlzdGFuY2UsXHJcbiAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHBhcnNlZFNvdW5kLnJvbGxvZmZGYWN0b3IsXHJcbiAgICAgICAgICAgIHJlZkRpc3RhbmNlOiBwYXJzZWRTb3VuZC5yZWZEaXN0YW5jZSxcclxuICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogcGFyc2VkU291bmQuZGlzdGFuY2VNb2RlbCxcclxuICAgICAgICAgICAgcGxheWJhY2tSYXRlOiBwYXJzZWRTb3VuZC5wbGF5YmFja1JhdGUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1NvdW5kOiBTb3VuZDtcclxuXHJcbiAgICAgICAgaWYgKCFzb3VyY2VTb3VuZCkge1xyXG4gICAgICAgICAgICBuZXdTb3VuZCA9IG5ldyBTb3VuZChcclxuICAgICAgICAgICAgICAgIHNvdW5kTmFtZSxcclxuICAgICAgICAgICAgICAgIHNvdW5kVXJsLFxyXG4gICAgICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVtb3ZlUGVuZGluZ0RhdGEobmV3U291bmQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkUGVuZGluZ0RhdGEobmV3U291bmQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldEJ1ZmZlckFuZFJ1biA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIF9SZXRyeVdpdGhJbnRlcnZhbChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBzb3VyY2VTb3VuZC5faXNSZWFkeVRvUGxheSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NvdW5kLl9hdWRpb0J1ZmZlciA9IHNvdXJjZVNvdW5kLmdldEF1ZGlvQnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NvdW5kLl9pc1JlYWR5VG9QbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NvdW5kLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTb3VuZC5wbGF5KDAsIG5ld1NvdW5kLl9vZmZzZXQsIG5ld1NvdW5kLl9sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3U291bmQgPSBuZXcgU291bmQoc291bmROYW1lLCBuZXcgQXJyYXlCdWZmZXIoMCksIHNjZW5lLCBudWxsLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0QnVmZmVyQW5kUnVuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkU291bmQucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgY29uc3Qgc291bmRQb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KHBhcnNlZFNvdW5kLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbmV3U291bmQuc2V0UG9zaXRpb24oc291bmRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJzZWRTb3VuZC5pc0RpcmVjdGlvbmFsKSB7XHJcbiAgICAgICAgICAgIG5ld1NvdW5kLnNldERpcmVjdGlvbmFsQ29uZShwYXJzZWRTb3VuZC5jb25lSW5uZXJBbmdsZSB8fCAzNjAsIHBhcnNlZFNvdW5kLmNvbmVPdXRlckFuZ2xlIHx8IDM2MCwgcGFyc2VkU291bmQuY29uZU91dGVyR2FpbiB8fCAwKTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZFNvdW5kLmxvY2FsRGlyZWN0aW9uVG9NZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbERpcmVjdGlvblRvTWVzaCA9IFZlY3RvcjMuRnJvbUFycmF5KHBhcnNlZFNvdW5kLmxvY2FsRGlyZWN0aW9uVG9NZXNoKTtcclxuICAgICAgICAgICAgICAgIG5ld1NvdW5kLnNldExvY2FsRGlyZWN0aW9uVG9NZXNoKGxvY2FsRGlyZWN0aW9uVG9NZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyc2VkU291bmQuY29ubmVjdGVkTWVzaElkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZE1lc2ggPSBzY2VuZS5nZXRNZXNoQnlJZChwYXJzZWRTb3VuZC5jb25uZWN0ZWRNZXNoSWQpO1xyXG4gICAgICAgICAgICBpZiAoY29ubmVjdGVkTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgbmV3U291bmQuYXR0YWNoVG9NZXNoKGNvbm5lY3RlZE1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkU291bmQubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbmV3U291bmQubWV0YWRhdGEgPSBwYXJzZWRTb3VuZC5tZXRhZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRPZmZzZXQodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fb2Zmc2V0ID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsZWFyVGltZW91dHNBbmRPYnNlcnZlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RyeVRvUGxheVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RyeVRvUGxheVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLl90cnlUb1BsYXlUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2F1ZGlvVW5sb2NrZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8ub25BdWRpb1VubG9ja2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fYXVkaW9VbmxvY2tlZE9ic2VydmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fYXVkaW9VbmxvY2tlZE9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJlZ2lzdGVyIENsYXNzIE5hbWVcclxuUmVnaXN0ZXJDbGFzcyhcIkJBQllMT04uU291bmRcIiwgU291bmQpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IFNvdW5kIH0gZnJvbSBcIi4vc291bmRcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmFseXNlciB9IGZyb20gXCIuL2FuYWx5c2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBFbmdpbmVTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL2VuZ2luZVN0b3JlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgYWxsb3dlZCBkdXJpbmcgdGhlIGNyZWF0aW9uIG9mIGEgc291bmQgdHJhY2suXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTb3VuZFRyYWNrT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB2b2x1bWUgdGhlIHNvdW5kIHRyYWNrIHNob3VsZCB0YWtlIGR1cmluZyBjcmVhdGlvblxyXG4gICAgICovXHJcbiAgICB2b2x1bWU/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSBpZiB0aGUgc291bmQgdHJhY2sgaXMgdGhlIG1haW4gc291bmQgdHJhY2sgb2YgdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIG1haW5UcmFjaz86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdCBjb3VsZCBiZSB1c2VmdWwgdG8gaXNvbGF0ZSB5b3VyIG11c2ljICYgc291bmRzIG9uIHNldmVyYWwgdHJhY2tzIHRvIGJldHRlciBtYW5hZ2Ugdm9sdW1lIG9uIGEgZ3JvdXBlZCBpbnN0YW5jZSBvZiBzb3VuZHMuXHJcbiAqIEl0IHdpbGwgYmUgYWxzbyB1c2VkIGluIGEgZnV0dXJlIHJlbGVhc2UgdG8gYXBwbHkgZWZmZWN0cyBvbiBhIHNwZWNpZmljIHRyYWNrLlxyXG4gKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjdXNpbmctc291bmQtdHJhY2tzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU291bmRUcmFjayB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiB0aGUgc291bmQgdHJhY2sgaW4gdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlciA9IC0xO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlzdCBvZiBzb3VuZHMgaW5jbHVkZWQgaW4gdGhlIHNvdW5kIHRyYWNrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc291bmRDb2xsZWN0aW9uOiBBcnJheTxTb3VuZD47XHJcblxyXG4gICAgcHJpdmF0ZSBfb3V0cHV0QXVkaW9Ob2RlOiBOdWxsYWJsZTxHYWluTm9kZT47XHJcbiAgICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIF9jb25uZWN0ZWRBbmFseXNlcjogQW5hbHlzZXI7XHJcbiAgICBwcml2YXRlIF9vcHRpb25zOiBJU291bmRUcmFja09wdGlvbnM7XHJcbiAgICBwcml2YXRlIF9pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNvdW5kIHRyYWNrLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI3VzaW5nLXNvdW5kLXRyYWNrc1xyXG4gICAgICogQHBhcmFtIHNjZW5lIERlZmluZSB0aGUgc2NlbmUgdGhlIHNvdW5kIHRyYWNrIGJlbG9uZ3MgdG9cclxuICAgICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lPzogTnVsbGFibGU8U2NlbmU+LCBvcHRpb25zOiBJU291bmRUcmFja09wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHNjZW5lID0gc2NlbmUgfHwgRW5naW5lU3RvcmUuTGFzdENyZWF0ZWRTY2VuZTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLnNvdW5kQ29sbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMubWFpblRyYWNrICYmIHRoaXMuX3NjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLnNvdW5kVHJhY2tzLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0aWFsaXplU291bmRUcmFja0F1ZGlvR3JhcGgoKSB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbyAmJiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlID0gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlLmNvbm5lY3QoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUubWFzdGVyR2Fpbik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudm9sdW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlLmdhaW4udmFsdWUgPSB0aGlzLl9vcHRpb25zLnZvbHVtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsZWFzZSB0aGUgc291bmQgdHJhY2sgYW5kIGl0cyBhc3NvY2lhdGVkIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUgJiYgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuY2FuVXNlV2ViQXVkaW8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRBbmFseXNlci5zdG9wRGVidWdDYW52YXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ29sbGVjdGlvblswXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX291dHB1dEF1ZGlvTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBzb3VuZCB0byB0aGlzIHNvdW5kIHRyYWNrXHJcbiAgICAgKiBAcGFyYW0gc291bmQgZGVmaW5lIHRoZSBzb3VuZCB0byBhZGRcclxuICAgICAqIEBpZ25vcmVOYW1pbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFNvdW5kKHNvdW5kOiBTb3VuZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplU291bmRUcmFja0F1ZGlvR3JhcGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbyAmJiB0aGlzLl9vdXRwdXRBdWRpb05vZGUpIHtcclxuICAgICAgICAgICAgc291bmQuY29ubmVjdFRvU291bmRUcmFja0F1ZGlvTm9kZSh0aGlzLl9vdXRwdXRBdWRpb05vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc291bmQuc291bmRUcmFja0lkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHNvdW5kLnNvdW5kVHJhY2tJZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLm1haW5Tb3VuZFRyYWNrLnJlbW92ZVNvdW5kKHNvdW5kKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NlbmUuc291bmRUcmFja3Nbc291bmQuc291bmRUcmFja0lkXS5yZW1vdmVTb3VuZChzb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc291bmRDb2xsZWN0aW9uLnB1c2goc291bmQpO1xyXG4gICAgICAgIHNvdW5kLnNvdW5kVHJhY2tJZCA9IHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgc291bmQgdG8gdGhpcyBzb3VuZCB0cmFja1xyXG4gICAgICogQHBhcmFtIHNvdW5kIGRlZmluZSB0aGUgc291bmQgdG8gcmVtb3ZlXHJcbiAgICAgKiBAaWdub3JlTmFtaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVTb3VuZChzb3VuZDogU291bmQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc291bmRDb2xsZWN0aW9uLmluZGV4T2Yoc291bmQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZENvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBnbG9iYWwgdm9sdW1lIGZvciB0aGUgZnVsbCBzb3VuZCB0cmFjay5cclxuICAgICAqIEBwYXJhbSBuZXdWb2x1bWUgRGVmaW5lIHRoZSBuZXcgdm9sdW1lIG9mIHRoZSBzb3VuZCB0cmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Vm9sdW1lKG5ld1ZvbHVtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbyAmJiB0aGlzLl9vdXRwdXRBdWRpb05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlLmdhaW4udmFsdWUgPSBuZXdWb2x1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIHRoZSBwYW5uaW5nIG1vZGVsIHRvIEhSVEY6XHJcbiAgICAgKiBSZW5kZXJzIGEgc3RlcmVvIG91dHB1dCBvZiBoaWdoZXIgcXVhbGl0eSB0aGFuIGVxdWFscG93ZXIg4oCUIGl0IHVzZXMgYSBjb252b2x1dGlvbiB3aXRoIG1lYXN1cmVkIGltcHVsc2UgcmVzcG9uc2VzIGZyb20gaHVtYW4gc3ViamVjdHMuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hQYW5uaW5nTW9kZWxUb0hSVEYoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ29sbGVjdGlvbltpXS5zd2l0Y2hQYW5uaW5nTW9kZWxUb0hSVEYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCB0aGUgcGFubmluZyBtb2RlbCB0byBFcXVhbCBQb3dlcjpcclxuICAgICAqIFJlcHJlc2VudHMgdGhlIGVxdWFsLXBvd2VyIHBhbm5pbmcgYWxnb3JpdGhtLCBnZW5lcmFsbHkgcmVnYXJkZWQgYXMgc2ltcGxlIGFuZCBlZmZpY2llbnQuIGVxdWFscG93ZXIgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hQYW5uaW5nTW9kZWxUb0VxdWFsUG93ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ29sbGVjdGlvbltpXS5zd2l0Y2hQYW5uaW5nTW9kZWxUb0VxdWFsUG93ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbm5lY3QgdGhlIHNvdW5kIHRyYWNrIHRvIGFuIGF1ZGlvIGFuYWx5c2VyIGFsbG93aW5nIHNvbWUgYW1hemluZ1xyXG4gICAgICogc3luY2hyb25pemF0aW9uIGJldHdlZW4gdGhlIHNvdW5kcy9tdXNpYyBhbmQgeW91ciB2aXN1YWxpemF0aW9uIChWdU1ldGVyIGZvciBpbnN0YW5jZSkuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjdXNpbmctdGhlLWFuYWx5c2VyXHJcbiAgICAgKiBAcGFyYW0gYW5hbHlzZXIgVGhlIGFuYWx5c2VyIHRvIGNvbm5lY3QgdG8gdGhlIGVuZ2luZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29ubmVjdFRvQW5hbHlzZXIoYW5hbHlzZXI6IEFuYWx5c2VyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyLnN0b3BEZWJ1Z0NhbnZhcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0ZWRBbmFseXNlciA9IGFuYWx5c2VyO1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyLmNvbm5lY3RBdWRpb05vZGVzKHRoaXMuX291dHB1dEF1ZGlvTm9kZSwgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUubWFzdGVyR2Fpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgU291bmQgfSBmcm9tIFwiLi4vQXVkaW8vc291bmRcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL01pc2MvbG9nZ2VyXCI7XHJcblxyXG4vKipcclxuICogV3JhcHMgb25lIG9yIG1vcmUgU291bmQgb2JqZWN0cyBhbmQgc2VsZWN0cyBvbmUgd2l0aCByYW5kb20gd2VpZ2h0IGZvciBwbGF5YmFjay5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBXZWlnaHRlZFNvdW5kIHtcclxuICAgIC8qKiBXaGVuIHRydWUgYSBTb3VuZCB3aWxsIGJlIHNlbGVjdGVkIGFuZCBwbGF5ZWQgd2hlbiB0aGUgY3VycmVudCBwbGF5aW5nIFNvdW5kIGNvbXBsZXRlcy4gKi9cclxuICAgIHB1YmxpYyBsb29wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jb25lSW5uZXJBbmdsZTogbnVtYmVyID0gMzYwO1xyXG4gICAgcHJpdmF0ZSBfY29uZU91dGVyQW5nbGU6IG51bWJlciA9IDM2MDtcclxuICAgIHByaXZhdGUgX3ZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIC8qKiBBIFNvdW5kIGlzIGN1cnJlbnRseSBwbGF5aW5nLiAqL1xyXG4gICAgcHVibGljIGlzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIEEgU291bmQgaXMgY3VycmVudGx5IHBhdXNlZC4gKi9cclxuICAgIHB1YmxpYyBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3NvdW5kczogU291bmRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfd2VpZ2h0czogbnVtYmVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRJbmRleD86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgV2VpZ2h0ZWRTb3VuZCBmcm9tIHRoZSBsaXN0IG9mIHNvdW5kcyBnaXZlbi5cclxuICAgICAqIEBwYXJhbSBsb29wIFdoZW4gdHJ1ZSBhIFNvdW5kIHdpbGwgYmUgc2VsZWN0ZWQgYW5kIHBsYXllZCB3aGVuIHRoZSBjdXJyZW50IHBsYXlpbmcgU291bmQgY29tcGxldGVzLlxyXG4gICAgICogQHBhcmFtIHNvdW5kcyBBcnJheSBvZiBTb3VuZHMgdGhhdCB3aWxsIGJlIHNlbGVjdGVkIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gd2VpZ2h0cyBBcnJheSBvZiBudW1iZXIgdmFsdWVzIGZvciBzZWxlY3Rpb24gd2VpZ2h0czsgbGVuZ3RoIG11c3QgZXF1YWwgc291bmRzLCB2YWx1ZXMgd2lsbCBiZSBub3JtYWxpemVkIHRvIDFcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9vcDogYm9vbGVhbiwgc291bmRzOiBTb3VuZFtdLCB3ZWlnaHRzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGlmIChzb3VuZHMubGVuZ3RoICE9PSB3ZWlnaHRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb3VuZHMgbGVuZ3RoIGRvZXMgbm90IGVxdWFsIHdlaWdodHMgbGVuZ3RoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLl93ZWlnaHRzID0gd2VpZ2h0cztcclxuICAgICAgICAvLyBOb3JtYWxpemUgdGhlIHdlaWdodHNcclxuICAgICAgICBsZXQgd2VpZ2h0U3VtID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHdlaWdodCBvZiB3ZWlnaHRzKSB7XHJcbiAgICAgICAgICAgIHdlaWdodFN1bSArPSB3ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGludldlaWdodFN1bSA9IHdlaWdodFN1bSA+IDAgPyAxIC8gd2VpZ2h0U3VtIDogMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3dlaWdodHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fd2VpZ2h0c1tpXSAqPSBpbnZXZWlnaHRTdW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NvdW5kcyA9IHNvdW5kcztcclxuICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIHRoaXMuX3NvdW5kcykge1xyXG4gICAgICAgICAgICBzb3VuZC5vbkVuZGVkT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25lbmRlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2l6ZSBvZiBjb25lIGluIGRlZ3JlZXMgZm9yIGEgZGlyZWN0aW9uYWwgc291bmQgaW4gd2hpY2ggdGhlcmUgd2lsbCBiZSBubyBhdHRlbnVhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmVJbm5lckFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNpemUgb2YgY29uZSBpbiBkZWdyZWVzIGZvciBhIGRpcmVjdGlvbmFsIHNvdW5kIGluIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gYXR0ZW51YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9jb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZU91dGVyQW5nbGUgPCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZTogb3V0ZXIgYW5nbGUgb2YgdGhlIGNvbmUgbXVzdCBiZSBzdXBlcmlvciBvciBlcXVhbCB0byB0aGUgaW5uZXIgYW5nbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb25lSW5uZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIHRoaXMuX3NvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgc291bmQuZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2l6ZSBvZiBjb25lIGluIGRlZ3JlZXMgZm9yIGEgZGlyZWN0aW9uYWwgc291bmQgb3V0c2lkZSBvZiB3aGljaCB0aGVyZSB3aWxsIGJlIG5vIHNvdW5kLlxyXG4gICAgICogTGlzdGVuZXIgYW5nbGVzIGJldHdlZW4gaW5uZXJBbmdsZSBhbmQgb3V0ZXJBbmdsZSB3aWxsIGZhbGxvZmYgbGluZWFybHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25lT3V0ZXJBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpemUgb2YgY29uZSBpbiBkZWdyZWVzIGZvciBhIGRpcmVjdGlvbmFsIHNvdW5kIG91dHNpZGUgb2Ygd2hpY2ggdGhlcmUgd2lsbCBiZSBubyBzb3VuZC5cclxuICAgICAqIExpc3RlbmVyIGFuZ2xlcyBiZXR3ZWVuIGlubmVyQW5nbGUgYW5kIG91dGVyQW5nbGUgd2lsbCBmYWxsb2ZmIGxpbmVhcmx5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29uZU91dGVyQW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5fY29uZUlubmVyQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcImRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGU6IG91dGVyIGFuZ2xlIG9mIHRoZSBjb25lIG11c3QgYmUgc3VwZXJpb3Igb3IgZXF1YWwgdG8gdGhlIGlubmVyIGFuZ2xlLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY29uZU91dGVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiB0aGlzLl9zb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgIHNvdW5kLmRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXliYWNrIHZvbHVtZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxheWJhY2sgdm9sdW1lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl92b2x1bWUpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiB0aGlzLl9zb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgIHNvdW5kLnNldFZvbHVtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25lbmRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRzW3RoaXMuX2N1cnJlbnRJbmRleF0uYXV0b3BsYXkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9vcCAmJiB0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1c3BlbmQgcGxheWJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhdXNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZHNbdGhpcy5fY3VycmVudEluZGV4XS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBwbGF5YmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZHNbdGhpcy5fY3VycmVudEluZGV4XS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgcGxheWJhY2suXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRPZmZzZXQgUG9zaXRpb24gdGhlIGNsaXAgaGVhZCBhdCBhIHNwZWNpZmljIHRpbWUgaW4gc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXkoc3RhcnRPZmZzZXQ/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93ZWlnaHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbCArPSB0aGlzLl93ZWlnaHRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbVZhbHVlIDw9IHRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3VuZCA9IHRoaXMuX3NvdW5kc1t0aGlzLl9jdXJyZW50SW5kZXggPz8gMF07XHJcbiAgICAgICAgaWYgKHNvdW5kLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICBzb3VuZC5wbGF5KDAsIHRoaXMuaXNQYXVzZWQgPyB1bmRlZmluZWQgOiBzdGFydE9mZnNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc291bmQuYXV0b3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uR3JvdXAgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkdyb3VwXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25FdmVudFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCJjb3JlL0F1ZGlvL3NvdW5kXCI7XHJcbmltcG9ydCB7IFdlaWdodGVkU291bmQgfSBmcm9tIFwiY29yZS9BdWRpby93ZWlnaHRlZHNvdW5kXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElBcnJheUl0ZW0sIElTY2VuZSwgSU5vZGUsIElBbmltYXRpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1TRlRBdWRpb0VtaXR0ZXJfQ2xpcCwgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlciwgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2UsIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmltcG9ydCBcImNvcmUvQXVkaW8vYXVkaW9TY2VuZUNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiTVNGVF9hdWRpb19lbWl0dGVyXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgTVNGVF9hdWRpb19lbWl0dGVyIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJNU0ZUX2F1ZGlvX2VtaXR0ZXJcIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxvYWRlckNsaXAgZXh0ZW5kcyBJTVNGVEF1ZGlvRW1pdHRlcl9DbGlwLCBJQXJyYXlJdGVtIHtcclxuICAgIF9vYmplY3RVUkw/OiBQcm9taXNlPHN0cmluZz47XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyRW1pdHRlciBleHRlbmRzIElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXIsIElBcnJheUl0ZW0ge1xyXG4gICAgX2JhYnlsb25EYXRhPzoge1xyXG4gICAgICAgIHNvdW5kPzogV2VpZ2h0ZWRTb3VuZDtcclxuICAgICAgICBsb2FkZWQ6IFByb21pc2U8dm9pZD47XHJcbiAgICB9O1xyXG4gICAgX2JhYnlsb25Tb3VuZHM6IFNvdW5kW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTVNGVEF1ZGlvRW1pdHRlciB7XHJcbiAgICBjbGlwczogSUxvYWRlckNsaXBbXTtcclxuICAgIGVtaXR0ZXJzOiBJTG9hZGVyRW1pdHRlcltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxvYWRlckFuaW1hdGlvbkV2ZW50IGV4dGVuZHMgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnQsIElBcnJheUl0ZW0ge31cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyQW5pbWF0aW9uRXZlbnRzIHtcclxuICAgIGV2ZW50czogSUxvYWRlckFuaW1hdGlvbkV2ZW50W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL25hamFkb2pvL2dsVEYvYmxvYi9NU0ZUX2F1ZGlvX2VtaXR0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL01TRlRfYXVkaW9fZW1pdHRlci9SRUFETUUubWQpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIE1TRlRfYXVkaW9fZW1pdHRlciBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcbiAgICBwcml2YXRlIF9jbGlwczogQXJyYXk8SUxvYWRlckNsaXA+O1xyXG4gICAgcHJpdmF0ZSBfZW1pdHRlcnM6IEFycmF5PElMb2FkZXJFbWl0dGVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgICAgICh0aGlzLl9jbGlwcyBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICAodGhpcy5fZW1pdHRlcnMgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gdGhpcy5fbG9hZGVyLmdsdGYuZXh0ZW5zaW9ucztcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBleHRlbnNpb25zW3RoaXMubmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1t0aGlzLm5hbWVdIGFzIElNU0ZUQXVkaW9FbWl0dGVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2xpcHMgPSBleHRlbnNpb24uY2xpcHM7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJzID0gZXh0ZW5zaW9uLmVtaXR0ZXJzO1xyXG5cclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9jbGlwcyk7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZW1pdHRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXJzUmVmZXJlbmNlPihjb250ZXh0LCBzY2VuZSwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVtaXR0ZXJJbmRleCBvZiBleHRlbnNpb24uZW1pdHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L2VtaXR0ZXJzYCwgdGhpcy5fZW1pdHRlcnMsIGVtaXR0ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5yZWZEaXN0YW5jZSAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLm1heERpc3RhbmNlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIucm9sbG9mZkZhY3RvciAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmRpc3RhbmNlTW9kZWwgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5pbm5lckFuZ2xlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIub3V0ZXJBbmdsZSAhPSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fTogRGlyZWN0aW9uIG9yIERpc3RhbmNlIHByb3BlcnRpZXMgYXJlIG5vdCBhbGxvd2VkIG9uIGVtaXR0ZXJzIGF0dGFjaGVkIHRvIGEgc2NlbmVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnMvJHtlbWl0dGVyLmluZGV4fWAsIGVtaXR0ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXJzUmVmZXJlbmNlLCBUcmFuc2Zvcm1Ob2RlPihjb250ZXh0LCBub2RlLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBhd2FpdCB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhleHRlbnNpb25Db250ZXh0LCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW1pdHRlckluZGV4IG9mIGV4dGVuc2lvbi5lbWl0dGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L2VtaXR0ZXJzYCwgdGhpcy5fZW1pdHRlcnMsIGVtaXR0ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnMvJHtlbWl0dGVyLmluZGV4fWAsIGVtaXR0ZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiBlbWl0dGVyLl9iYWJ5bG9uU291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmQuYXR0YWNoVG9NZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci5pbm5lckFuZ2xlICE9IHVuZGVmaW5lZCB8fCBlbWl0dGVyLm91dGVyQW5nbGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnNldExvY2FsRGlyZWN0aW9uVG9NZXNoKFZlY3RvcjMuRm9yd2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmQuc2V0RGlyZWN0aW9uYWxDb25lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiAqIFRvb2xzLlRvRGVncmVlcyhlbWl0dGVyLmlubmVyQW5nbGUgPT0gdW5kZWZpbmVkID8gTWF0aC5QSSA6IGVtaXR0ZXIuaW5uZXJBbmdsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIub3V0ZXJBbmdsZSA9PSB1bmRlZmluZWQgPyBNYXRoLlBJIDogZW1pdHRlci5vdXRlckFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbk1lc2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZEFuaW1hdGlvbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgYW5pbWF0aW9uOiBJQW5pbWF0aW9uKTogTnVsbGFibGU8UHJvbWlzZTxBbmltYXRpb25Hcm91cD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUxvYWRlckFuaW1hdGlvbkV2ZW50cywgQW5pbWF0aW9uR3JvdXA+KGNvbnRleHQsIGFuaW1hdGlvbiwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cCA9IGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKGV4dGVuc2lvbi5ldmVudHMpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV4dGVuc2lvbi5ldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEFuaW1hdGlvbkV2ZW50QXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZXZlbnRzLyR7ZXZlbnQuaW5kZXh9YCwgY29udGV4dCwgYW5pbWF0aW9uLCBldmVudCwgYmFieWxvbkFuaW1hdGlvbkdyb3VwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkFuaW1hdGlvbkdyb3VwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRDbGlwQXN5bmMoY29udGV4dDogc3RyaW5nLCBjbGlwOiBJTG9hZGVyQ2xpcCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKGNsaXAuX29iamVjdFVSTCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xpcC5fb2JqZWN0VVJMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb21pc2U6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PjtcclxuICAgICAgICBpZiAoY2xpcC51cmkpIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkVXJpQXN5bmMoY29udGV4dCwgY2xpcCwgY2xpcC51cmkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9sb2FkZXIuZ2x0Zi5idWZmZXJWaWV3cywgY2xpcC5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgY2xpcC5fb2JqZWN0VVJMID0gcHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiBjbGlwLm1pbWVUeXBlIH0pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsaXAuX29iamVjdFVSTDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9sb2FkRW1pdHRlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgZW1pdHRlcjogSUxvYWRlckVtaXR0ZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBlbWl0dGVyLl9iYWJ5bG9uU291bmRzID0gZW1pdHRlci5fYmFieWxvblNvdW5kcyB8fCBbXTtcclxuICAgICAgICBpZiAoIWVtaXR0ZXIuX2JhYnlsb25EYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaXBQcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbWl0dGVyLm5hbWUgfHwgYGVtaXR0ZXIke2VtaXR0ZXIuaW5kZXh9YDtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBlbWl0dGVyLnZvbHVtZSA9PSB1bmRlZmluZWQgPyAxIDogZW1pdHRlci52b2x1bWUsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtaXR0ZXIuY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBDb250ZXh0ID0gYC9leHRlbnNpb25zLyR7dGhpcy5uYW1lfS9jbGlwc2A7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlwID0gQXJyYXlJdGVtLkdldChjbGlwQ29udGV4dCwgdGhpcy5fY2xpcHMsIGVtaXR0ZXIuY2xpcHNbaV0uY2xpcCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwUHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQ2xpcEFzeW5jKGAke2NsaXBDb250ZXh0fS8ke2VtaXR0ZXIuY2xpcHNbaV0uY2xpcH1gLCBjbGlwKS50aGVuKChvYmplY3RVUkw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VuZCA9IChlbWl0dGVyLl9iYWJ5bG9uU291bmRzW2ldID0gbmV3IFNvdW5kKG5hbWUsIG9iamVjdFVSTCwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSwgbnVsbCwgb3B0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5yZWZEaXN0YW5jZSA9IGVtaXR0ZXIucmVmRGlzdGFuY2UgfHwgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQubWF4RGlzdGFuY2UgPSBlbWl0dGVyLm1heERpc3RhbmNlIHx8IDI1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQucm9sbG9mZkZhY3RvciA9IGVtaXR0ZXIucm9sbG9mZkZhY3RvciB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5kaXN0YW5jZU1vZGVsID0gZW1pdHRlci5kaXN0YW5jZU1vZGVsIHx8IFwiZXhwb25lbnRpYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBQcm9taXNlLmFsbChjbGlwUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0cyA9IGVtaXR0ZXIuY2xpcHMubWFwKChjbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsaXAud2VpZ2h0IHx8IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodGVkU291bmQgPSBuZXcgV2VpZ2h0ZWRTb3VuZChlbWl0dGVyLmxvb3AgfHwgZmFsc2UsIGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMsIHdlaWdodHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtaXR0ZXIuaW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodGVkU291bmQuZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSA9IDIgKiBUb29scy5Ub0RlZ3JlZXMoZW1pdHRlci5pbm5lckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLm91dGVyQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLmRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUgPSAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIub3V0ZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci52b2x1bWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLnZvbHVtZSA9IGVtaXR0ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5fYmFieWxvbkRhdGEhLnNvdW5kID0gd2VpZ2h0ZWRTb3VuZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbWl0dGVyLl9iYWJ5bG9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogcHJvbWlzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbWl0dGVyLl9iYWJ5bG9uRGF0YS5sb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0RXZlbnRBY3Rpb24oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHNvdW5kOiBXZWlnaHRlZFNvdW5kLFxyXG4gICAgICAgIGFjdGlvbjogSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24sXHJcbiAgICAgICAgdGltZTogbnVtYmVyLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0PzogbnVtYmVyXHJcbiAgICApOiAoY3VycmVudEZyYW1lOiBudW1iZXIpID0+IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24ucGxheToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50RnJhbWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lT2Zmc2V0ID0gKHN0YXJ0T2Zmc2V0IHx8IDApICsgKGN1cnJlbnRGcmFtZSAtIHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoZnJhbWVPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnN0b3A6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnBhdXNlOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogVW5zdXBwb3J0ZWQgYWN0aW9uICR7YWN0aW9ufWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRBbmltYXRpb25FdmVudEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGV2ZW50OiBJTG9hZGVyQW5pbWF0aW9uRXZlbnQsXHJcbiAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwOiBBbmltYXRpb25Hcm91cFxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25BbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gYmFieWxvbkFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9uc1swXTtcclxuICAgICAgICBjb25zdCBlbWl0dGVySW5kZXggPSBldmVudC5lbWl0dGVyO1xyXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAvZXh0ZW5zaW9ucy8ke3RoaXMubmFtZX0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhjb250ZXh0LCBlbWl0dGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc291bmQgPSBlbWl0dGVyLl9iYWJ5bG9uRGF0YSEuc291bmQ7XHJcbiAgICAgICAgICAgIGlmIChzb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkV2ZW50ID0gbmV3IEFuaW1hdGlvbkV2ZW50KGV2ZW50LnRpbWUsIHRoaXMuX2dldEV2ZW50QWN0aW9uKGNvbnRleHQsIHNvdW5kLCBldmVudC5hY3Rpb24sIGV2ZW50LnRpbWUsIGV2ZW50LnN0YXJ0T2Zmc2V0KSk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uLmFuaW1hdGlvbi5hZGRFdmVudChiYWJ5bG9uQW5pbWF0aW9uRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBzdGFydGVkIGF1ZGlvIHN0b3BzIHdoZW4gdGhpcyBhbmltYXRpb24gaXMgdGVybWluYXRlZC5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5vbkFuaW1hdGlvbkdyb3VwRW5kT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLm9uQW5pbWF0aW9uR3JvdXBQYXVzZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9hdWRpb19lbWl0dGVyKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=