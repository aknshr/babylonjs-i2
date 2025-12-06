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
/* harmony import */ var _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AudioV2/abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AudioV2/webAudio/webAudioSoundSource */ "../core/dist/AudioV2/webAudio/webAudioSoundSource.js");
/* harmony import */ var _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AudioV2/webAudio/webAudioStaticSound */ "../core/dist/AudioV2/webAudio/webAudioStaticSound.js");
/* harmony import */ var _AudioV2_webAudio_webAudioStreamingSound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AudioV2/webAudio/webAudioStreamingSound */ "../core/dist/AudioV2/webAudio/webAudioStreamingSound.js");
/* harmony import */ var _Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Engines/abstractEngine */ "../core/dist/Engines/abstractEngine.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Misc_devTools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Misc/devTools */ "../core/dist/Misc/devTools.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _Misc_timingTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Misc/timingTools */ "../core/dist/Misc/timingTools.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");













const TmpRampOptions = {
    duration: 0,
    shape: "linear" /* AudioParameterRampShape.Linear */,
};
const TmpPlayOptions = {
    duration: 0,
    startOffset: 0,
    waitTime: 0,
};
const TmpStopOptions = {
    waitTime: 0,
};
function D2r(degrees) {
    return (degrees * Math.PI) / 180;
}
function R2d(radians) {
    return (radians * 180) / Math.PI;
}
/**
 * Defines a sound that can be played in the application.
 * The sound can either be an ambient track or a simple sound played in reaction to a user action.
 * @see https://doc.babylonjs.com/legacy/audio
 */
class Sound {
    /**
     * The name of the sound in the scene.
     */
    get name() {
        return this._soundV2.name;
    }
    set name(value) {
        this._soundV2.name = value;
    }
    /**
     * Does the sound autoplay once loaded.
     */
    get autoplay() {
        return this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource ? true : this._optionsV2.autoplay;
    }
    set autoplay(value) {
        this._optionsV2.autoplay = value;
    }
    /**
     * Does the sound loop after it finishes playing once.
     */
    get loop() {
        return this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource ? true : this._soundV2.loop;
    }
    set loop(value) {
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource) {
            return;
        }
        if (this._soundV2) {
            this._soundV2.loop = value;
        }
    }
    /**
     * Is this sound currently played.
     */
    get isPlaying() {
        return this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource ? true : this._soundV2?.state === 3 /* SoundState.Started */ || (!this.isReady() && this._optionsV2.autoplay);
    }
    /**
     * Is this sound currently paused.
     */
    get isPaused() {
        return this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource ? false : this._soundV2.state === 5 /* SoundState.Paused */;
    }
    /**
     * Define the max distance the sound should be heard (intensity just became 0 at this point).
     * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
     */
    get maxDistance() {
        return this._optionsV2.spatialMaxDistance || 100;
    }
    set maxDistance(value) {
        this._optionsV2.spatialMaxDistance = value;
        if (this.useCustomAttenuation) {
            return;
        }
        if (this._soundV2) {
            this._initSpatial();
            this._soundV2.spatial.maxDistance = value;
        }
    }
    /**
     * Define the distance attenuation model the sound will follow.
     * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
     */
    get distanceModel() {
        return this._optionsV2.spatialDistanceModel || "linear";
    }
    set distanceModel(value) {
        this._optionsV2.spatialDistanceModel = value;
        if (this._soundV2) {
            this._initSpatial();
            this._soundV2.spatial.distanceModel = value;
        }
    }
    /**
     * Gets the current time for the sound.
     */
    get currentTime() {
        return this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource ? this._soundV2.engine.currentTime : this._soundV2.currentTime;
    }
    /**
     * Does this sound enables spatial sound.
     * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
     */
    get spatialSound() {
        return this._soundV2?._isSpatial ?? false;
    }
    /**
     * Does this sound enables spatial sound.
     * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
     */
    set spatialSound(newValue) {
        if (this._soundV2) {
            if (newValue) {
                this._initSpatial();
            }
            else {
                this._soundV2._isSpatial = false;
            }
        }
    }
    get _onReady() {
        if (!this._onReadyObservable) {
            this._onReadyObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_9__.Observable();
        }
        return this._onReadyObservable;
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
         * Does the sound use a custom attenuation curve to simulate the falloff
         * happening when the source gets further away from the camera.
         * @see https://doc.babylonjs.com/legacy/audio#creating-your-own-custom-attenuation-function
         */
        this.useCustomAttenuation = false;
        /**
         * The sound track id this sound belongs to.
         */
        this.soundTrackId = -1;
        /**
         * Define the reference distance the sound should be heard perfectly.
         * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
         */
        this.refDistance = 1;
        /**
         * Define the roll off factor of spatial sounds.
         * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
         */
        this.rolloffFactor = 1;
        /**
         * Gets or sets an object used to store user defined information for the sound.
         */
        this.metadata = null;
        /**
         * Observable event when the current playing sound finishes.
         */
        this.onEndedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_9__.Observable();
        this._localDirection = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3(1, 0, 0);
        this._volume = 1;
        this._isReadyToPlay = false;
        this._isDirectional = false;
        this._isOutputConnected = false;
        this._url = null;
        this._onReadyObservable = null;
        this._onReadyToPlay = () => {
            this._scene.mainSoundTrack.addSound(this);
            this._isReadyToPlay = true;
            this._readyToPlayCallback();
            if (this._onReadyObservable) {
                this._onReadyObservable.notifyObservers();
            }
            if (this._optionsV2.autoplay) {
                this.play();
            }
        };
        this._onended = () => {
            if (this.onended) {
                this.onended();
            }
            this.onEndedObservable.notifyObservers(this);
        };
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_5__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        Sound._SceneComponentInitialization(scene);
        this._readyToPlayCallback = readyToPlayCallback || (() => { });
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
        options = options || {};
        const optionsV2 = {
            analyzerEnabled: false,
            autoplay: false, // `false` for now, but will be set to given option later
            duration: options.length || 0,
            loop: options.loop || false,
            loopEnd: 0,
            loopStart: 0,
            maxInstances: 1,
            outBus: null,
            outBusAutoDefault: false,
            playbackRate: options.playbackRate || 1,
            pitch: 0,
            skipCodecCheck: options.skipCodecCheck || false,
            spatialDistanceModel: options.distanceModel,
            spatialEnabled: options.spatialSound,
            spatialMaxDistance: options.maxDistance,
            spatialMinDistance: options.refDistance,
            spatialRolloffFactor: options.rolloffFactor,
            stereoEnabled: false,
            startOffset: options.offset || 0,
            volume: options.volume ?? 1,
        };
        this._volume = options.volume ?? 1;
        if ((0,_AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._HasSpatialAudioOptions)(optionsV2)) {
            optionsV2.spatialAutoUpdate = false;
            optionsV2.spatialConeInnerAngle = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.coneInnerAngle;
            optionsV2.spatialConeOuterAngle = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.coneOuterAngle;
            optionsV2.spatialConeOuterVolume = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.coneOuterVolume;
            optionsV2.spatialMinUpdateTime = 0;
            optionsV2.spatialOrientation = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.orientation.clone();
            optionsV2.spatialPanningModel = (this._scene.headphone ? "HRTF" : "equalpower");
            optionsV2.spatialPosition = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.position.clone();
            optionsV2.spatialRotation = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.rotation.clone();
            optionsV2.spatialRotationQuaternion = _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.rotationQuaternion.clone();
            if (optionsV2.spatialMaxDistance === undefined) {
                optionsV2.spatialMaxDistance = 100;
            }
        }
        this._optionsV2 = { ...optionsV2 };
        this._optionsV2.autoplay = options.autoplay || false;
        this.useCustomAttenuation = options.useCustomAttenuation ?? false;
        if (this.useCustomAttenuation) {
            optionsV2.spatialMaxDistance = Number.MAX_VALUE;
            optionsV2.volume = 0;
        }
        let streaming = options?.streaming || false;
        const audioEngine = _Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_4__.AbstractEngine.audioEngine;
        if (!audioEngine) {
            return;
        }
        const audioEngineV2 = _Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_4__.AbstractEngine.audioEngine._v2;
        const createSoundV2 = () => {
            if (streaming) {
                const streamingOptionsV2 = {
                    preloadCount: 0,
                    ...optionsV2,
                };
                const sound = new _AudioV2_webAudio_webAudioStreamingSound__WEBPACK_IMPORTED_MODULE_3__._WebAudioStreamingSound(name, audioEngineV2, streamingOptionsV2);
                // eslint-disable-next-line github/no-then
                void sound._initAsync(urlOrArrayBuffer, optionsV2).then(() => {
                    // eslint-disable-next-line github/no-then
                    void sound.preloadInstancesAsync(1).then(this._onReadyToPlay);
                });
                return sound;
            }
            else {
                const sound = new _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound(name, audioEngineV2, optionsV2);
                // eslint-disable-next-line github/no-then
                void sound._initAsync(urlOrArrayBuffer, optionsV2).then(this._onReadyToPlay);
                return sound;
            }
        };
        // If no parameter is passed then the setAudioBuffer should be called to prepare the sound.
        if (!urlOrArrayBuffer) {
            // Create the sound but don't call _initAsync on it, yet. Call it later when `setAudioBuffer` is called.
            this._soundV2 = new _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound(name, audioEngineV2, optionsV2);
        }
        else if (typeof urlOrArrayBuffer === "string") {
            this._url = urlOrArrayBuffer;
            this._soundV2 = createSoundV2();
        }
        else if (urlOrArrayBuffer instanceof ArrayBuffer) {
            streaming = false;
            this._soundV2 = createSoundV2();
        }
        else if (urlOrArrayBuffer instanceof HTMLMediaElement) {
            streaming = true;
            this._soundV2 = createSoundV2();
        }
        else if (urlOrArrayBuffer instanceof MediaStream) {
            const node = new MediaStreamAudioSourceNode(audioEngineV2._audioContext, { mediaStream: urlOrArrayBuffer });
            this._soundV2 = new _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource(name, node, audioEngineV2, optionsV2);
            // eslint-disable-next-line github/no-then
            void this._soundV2._initAsync(optionsV2).then(this._onReadyToPlay);
        }
        else if (urlOrArrayBuffer instanceof AudioBuffer) {
            streaming = false;
            this._soundV2 = createSoundV2();
        }
        else if (Array.isArray(urlOrArrayBuffer)) {
            this._soundV2 = createSoundV2();
        }
        if (!this._soundV2) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Error("Parameter must be a URL to the sound, an Array of URLs (.mp3 & .ogg) or an ArrayBuffer of the sound.");
            return;
        }
        if (!(this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource)) {
            this._soundV2.onEndedObservable.add(this._onended);
        }
    }
    /**
     * Release the sound and its associated resources
     */
    dispose() {
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
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._connectedTransformNode = null;
        }
        this._soundV2.dispose();
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
    /**
     * Sets the data of the sound from an audiobuffer
     * @param audioBuffer The audioBuffer containing the data
     */
    setAudioBuffer(audioBuffer) {
        if (this._isReadyToPlay) {
            return;
        }
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._soundV2._initAsync(audioBuffer, this._optionsV2).then(this._onReadyToPlay);
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
            if (options.playbackRate !== undefined) {
                this.setPlaybackRate(options.playbackRate);
            }
            if (options.spatialSound !== undefined) {
                this.spatialSound = options.spatialSound;
            }
            if (options.volume !== undefined) {
                this.setVolume(options.volume);
            }
            if (this._soundV2 instanceof _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound) {
                let updated = false;
                if (options.offset !== undefined) {
                    this._optionsV2.startOffset = options.offset;
                    updated = true;
                }
                if (options.length !== undefined) {
                    this._soundV2.duration = options.length;
                    updated = true;
                }
                if (updated && this.isPaused) {
                    this.stop();
                }
            }
            this._updateSpatialParameters();
        }
    }
    _updateSpatialParameters() {
        if (!this.spatialSound) {
            return;
        }
        const spatial = this._soundV2.spatial;
        if (this.useCustomAttenuation) {
            // Disable WebAudio attenuation.
            spatial.distanceModel = "linear";
            spatial.minDistance = 1;
            spatial.maxDistance = Number.MAX_VALUE;
            spatial.rolloffFactor = 1;
            spatial.panningModel = "equalpower";
        }
        else {
            spatial.distanceModel = this.distanceModel;
            spatial.minDistance = this.refDistance;
            spatial.maxDistance = this.maxDistance;
            spatial.rolloffFactor = this.rolloffFactor;
            spatial.panningModel = this._optionsV2.spatialPanningModel || "equalpower";
        }
    }
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
     */
    switchPanningModelToHRTF() {
        if (this.spatialSound) {
            this._initSpatial();
            this._soundV2.spatial.panningModel = "HRTF";
        }
    }
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound
     */
    switchPanningModelToEqualPower() {
        if (this.spatialSound) {
            this._initSpatial();
            this._soundV2.spatial.panningModel = "equalpower";
        }
    }
    /**
     * Connect this sound to a sound track audio node like gain...
     * @param soundTrackAudioNode the sound track audio node to connect to
     */
    connectToSoundTrackAudioNode(soundTrackAudioNode) {
        const outputNode = this._soundV2._outNode;
        if (outputNode) {
            if (this._isOutputConnected) {
                outputNode.disconnect();
            }
            outputNode.connect(soundTrackAudioNode);
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
            _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Error("setDirectionalCone(): outer angle of the cone must be superior or equal to the inner angle.");
            return;
        }
        this._optionsV2.spatialConeInnerAngle = D2r(coneInnerAngle);
        this._optionsV2.spatialConeOuterAngle = D2r(coneOuterAngle);
        this._optionsV2.spatialConeOuterVolume = coneOuterGain;
        this._initSpatial();
        this._soundV2.spatial.coneInnerAngle = this._optionsV2.spatialConeInnerAngle;
        this._soundV2.spatial.coneOuterAngle = this._optionsV2.spatialConeOuterAngle;
        this._soundV2.spatial.coneOuterVolume = coneOuterGain;
        this._isDirectional = true;
        if (this.isPlaying && this.loop) {
            this.stop();
            this.play(0, this._optionsV2.startOffset, this._optionsV2.duration);
        }
    }
    /**
     * Gets or sets the inner angle for the directional cone.
     */
    get directionalConeInnerAngle() {
        return R2d(typeof this._optionsV2.spatialConeInnerAngle === "number" ? this._optionsV2.spatialConeInnerAngle : _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.coneInnerAngle);
    }
    /**
     * Gets or sets the inner angle for the directional cone.
     */
    set directionalConeInnerAngle(value) {
        value = D2r(value);
        if (value != this._optionsV2.spatialConeInnerAngle) {
            if (this.directionalConeOuterAngle < value) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._optionsV2.spatialConeInnerAngle = value;
            if (this.spatialSound) {
                this._initSpatial();
                this._soundV2.spatial.coneInnerAngle = value;
            }
        }
    }
    /**
     * Gets or sets the outer angle for the directional cone.
     */
    get directionalConeOuterAngle() {
        return R2d(typeof this._optionsV2.spatialConeOuterAngle === "number" ? this._optionsV2.spatialConeOuterAngle : _AudioV2_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_0__._SpatialAudioDefaults.coneOuterAngle);
    }
    /**
     * Gets or sets the outer angle for the directional cone.
     */
    set directionalConeOuterAngle(value) {
        value = D2r(value);
        if (value != this._optionsV2.spatialConeOuterAngle) {
            if (value < this.directionalConeInnerAngle) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._optionsV2.spatialConeOuterAngle = value;
            if (this.spatialSound) {
                this._initSpatial();
                this._soundV2.spatial.coneOuterAngle = value;
            }
        }
    }
    /**
     * Sets the position of the emitter if spatial sound is enabled
     * @param newPosition Defines the new position
     */
    setPosition(newPosition) {
        if (this._optionsV2.spatialPosition && newPosition.equals(this._optionsV2.spatialPosition)) {
            return;
        }
        if (!this._optionsV2.spatialPosition) {
            this._optionsV2.spatialPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3.Zero();
        }
        this._optionsV2.spatialPosition.copyFrom(newPosition);
        if (this.spatialSound && !isNaN(newPosition.x) && !isNaN(newPosition.y) && !isNaN(newPosition.z)) {
            this._initSpatial();
            this._soundV2.spatial.position = newPosition;
        }
    }
    /**
     * Sets the local direction of the emitter if spatial sound is enabled
     * @param newLocalDirection Defines the new local direction
     */
    setLocalDirectionToMesh(newLocalDirection) {
        this._localDirection = newLocalDirection;
        if (this._connectedTransformNode && this.isPlaying) {
            this._updateDirection();
        }
    }
    _updateDirection() {
        if (!this._connectedTransformNode || !this.spatialSound) {
            return;
        }
        const mat = this._connectedTransformNode.getWorldMatrix();
        const direction = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3.TransformNormal(this._localDirection, mat);
        direction.normalize();
        this._initSpatial();
        this._soundV2.spatial.orientation = direction;
    }
    _initSpatial() {
        this._soundV2._isSpatial = true;
        if (this._optionsV2.spatialDistanceModel === undefined) {
            this._optionsV2.spatialDistanceModel = "linear";
            this._soundV2.spatial.distanceModel = "linear";
        }
        if (this._optionsV2.spatialMaxDistance === undefined) {
            this._optionsV2.spatialMaxDistance = 100;
            this._soundV2.spatial.maxDistance = 100;
        }
    }
    /** @internal */
    updateDistanceFromListener() {
        if (this._soundV2._outNode && this._connectedTransformNode && this.useCustomAttenuation && this._scene.activeCamera) {
            const distance = this._scene.audioListenerPositionProvider
                ? this._connectedTransformNode.position.subtract(this._scene.audioListenerPositionProvider()).length()
                : this._connectedTransformNode.getDistanceToCamera(this._scene.activeCamera);
            this._soundV2.volume = this._customAttenuationFunction(this._volume, distance, this.maxDistance, this.refDistance, this.rolloffFactor);
        }
    }
    /**
     * Sets a new custom attenuation function for the sound.
     * @param callback Defines the function used for the attenuation
     * @see https://doc.babylonjs.com/legacy/audio#creating-your-own-custom-attenuation-function
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
        const audioEngine = _Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_4__.AbstractEngine.audioEngine;
        audioEngine?.unlock();
        // WebAudio sound sources have no `play` function because they are always playing.
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource) {
            return;
        }
        if (this._isReadyToPlay && this._scene.audioEnabled) {
            // The sound can only resume from pause when the `time`, `offset` and `length` args are not set.
            if (this._soundV2.state === 5 /* SoundState.Paused */ && (time !== undefined || offset !== undefined || length !== undefined)) {
                this._soundV2.stop();
            }
            try {
                TmpPlayOptions.duration = length || 0;
                TmpPlayOptions.startOffset = offset !== undefined ? offset || this._optionsV2.startOffset : this._optionsV2.startOffset;
                TmpPlayOptions.waitTime = time || 0;
                if (audioEngine?.unlocked) {
                    this._soundV2.play(TmpPlayOptions);
                }
                else {
                    // Wait a bit for FF as context seems late to be ready.
                    setTimeout(() => {
                        this._soundV2.play(TmpPlayOptions);
                    }, 500);
                }
            }
            catch (ex) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_8__.Logger.Error("Error while trying to play audio: " + this.name + ", " + ex.message);
            }
        }
    }
    /**
     * Stop the sound
     * @param time (optional) Stop the sound after X seconds. Stop immediately (0) by default.
     */
    stop(time) {
        if (!this._soundV2) {
            return;
        }
        // WebAudio sound sources have no `stop` function because they are always playing.
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource) {
            return;
        }
        TmpStopOptions.waitTime = time || 0;
        this._soundV2.stop(TmpStopOptions);
    }
    /**
     * Put the sound in pause
     */
    pause() {
        if (!this._soundV2) {
            return;
        }
        // WebAudio sound sources have no `pause` function because they are always playing.
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioSoundSource__WEBPACK_IMPORTED_MODULE_1__._WebAudioSoundSource) {
            return;
        }
        this._soundV2.pause();
    }
    /**
     * Sets a dedicated volume for this sounds
     * @param newVolume Define the new volume of the sound
     * @param time Define time for gradual change to new volume
     */
    setVolume(newVolume, time) {
        if (!this.isReady()) {
            this._onReady.addOnce(() => {
                this.setVolume(newVolume, time);
            });
            return;
        }
        TmpRampOptions.duration = time || 0;
        this._soundV2.setVolume(newVolume, TmpRampOptions);
        this._volume = newVolume;
    }
    /**
     * Set the sound play back rate
     * @param newPlaybackRate Define the playback rate the sound should be played at
     */
    setPlaybackRate(newPlaybackRate) {
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound) {
            this._soundV2.playbackRate = newPlaybackRate;
        }
    }
    /**
     * Gets the sound play back rate.
     * @returns the  play back rate of the sound
     */
    getPlaybackRate() {
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound) {
            return this._soundV2.playbackRate;
        }
        return 1;
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
     * @see https://doc.babylonjs.com/legacy/audio#attaching-a-sound-to-a-mesh
     */
    attachToMesh(transformNode) {
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
        }
        this._connectedTransformNode = transformNode;
        if (!this.spatialSound) {
            this.spatialSound = true;
            if (this.isPlaying && this.loop) {
                this.stop();
                this.play(0, this._optionsV2.startOffset, this._optionsV2.duration);
            }
        }
        this._onRegisterAfterWorldMatrixUpdate(this._connectedTransformNode);
        this._registerFunc = (transformNode) => this._onRegisterAfterWorldMatrixUpdate(transformNode);
        this._connectedTransformNode.registerAfterWorldMatrixUpdate(this._registerFunc);
    }
    /**
     * Detach the sound from the previously attached mesh
     * @see https://doc.babylonjs.com/legacy/audio#attaching-a-sound-to-a-mesh
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
        if (this._isDirectional && this.isPlaying) {
            this._updateDirection();
        }
    }
    /**
     * Clone the current sound in the scene.
     * @returns the new sound clone
     */
    clone() {
        if (!(this._soundV2 instanceof _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound)) {
            return null;
        }
        const currentOptions = {
            autoplay: this.autoplay,
            loop: this.loop,
            volume: this._volume,
            spatialSound: this.spatialSound,
            maxDistance: this.maxDistance,
            useCustomAttenuation: this.useCustomAttenuation,
            rolloffFactor: this.rolloffFactor,
            refDistance: this.refDistance,
            distanceModel: this.distanceModel,
        };
        const clonedSound = new Sound(this.name + "_cloned", this._soundV2.buffer, this._scene, null, currentOptions);
        clonedSound._optionsV2 = this._optionsV2;
        if (this.useCustomAttenuation) {
            clonedSound.setAttenuationFunction(this._customAttenuationFunction);
        }
        return clonedSound;
    }
    /**
     * Gets the current underlying audio buffer containing the data
     * @returns the audio buffer
     */
    getAudioBuffer() {
        if (this._soundV2 instanceof _AudioV2_webAudio_webAudioStaticSound__WEBPACK_IMPORTED_MODULE_2__._WebAudioStaticSound) {
            return this._soundV2.buffer._audioBuffer;
        }
        return null;
    }
    /**
     * Gets the WebAudio AudioBufferSourceNode, lets you keep track of and stop instances of this Sound.
     * @returns the source node
     */
    getSoundSource() {
        // return this._soundSource;
        return null;
    }
    /**
     * Gets the WebAudio GainNode, gives you precise control over the gain of instances of this Sound.
     * @returns the gain node
     */
    getSoundGain() {
        return this._soundV2._outNode;
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
            spatialSound: this.spatialSound,
            maxDistance: this.maxDistance,
            rolloffFactor: this.rolloffFactor,
            refDistance: this.refDistance,
            distanceModel: this.distanceModel,
            playbackRate: this.getPlaybackRate(),
            panningModel: this._soundV2.spatial.panningModel,
            soundTrackId: this.soundTrackId,
            metadata: this.metadata,
        };
        if (this.spatialSound) {
            if (this._connectedTransformNode) {
                serializationObject.connectedMeshId = this._connectedTransformNode.id;
            }
            serializationObject.position = this._soundV2.spatial.position.asArray();
            serializationObject.refDistance = this.refDistance;
            serializationObject.distanceModel = this.distanceModel;
            serializationObject.isDirectional = this._isDirectional;
            serializationObject.localDirectionToMesh = this._localDirection.asArray();
            serializationObject.coneInnerAngle = this.directionalConeInnerAngle;
            serializationObject.coneOuterAngle = this.directionalConeOuterAngle;
            serializationObject.coneOuterGain = this._soundV2.spatial.coneOuterVolume;
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
                (0,_Misc_timingTools__WEBPACK_IMPORTED_MODULE_10__._RetryWithInterval)(() => sourceSound._isReadyToPlay, () => {
                    const audioBuffer = sourceSound.getAudioBuffer();
                    if (audioBuffer) {
                        newSound.setAudioBuffer(audioBuffer);
                    }
                    newSound._isReadyToPlay = true;
                    if (newSound.autoplay) {
                        newSound.play(0, sourceSound._optionsV2.startOffset, sourceSound._optionsV2.duration);
                    }
                }, undefined, 300);
            };
            newSound = new Sound(soundName, new ArrayBuffer(0), scene, null, options);
            setBufferAndRun();
        }
        if (parsedSound.position) {
            const soundPosition = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3.FromArray(parsedSound.position);
            newSound.setPosition(soundPosition);
        }
        if (parsedSound.isDirectional) {
            newSound.setDirectionalCone(parsedSound.coneInnerAngle || 360, parsedSound.coneOuterAngle || 360, parsedSound.coneOuterGain || 0);
            if (parsedSound.localDirectionToMesh) {
                const localDirectionToMesh = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3.FromArray(parsedSound.localDirectionToMesh);
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
}
/**
 * @internal
 */
Sound._SceneComponentInitialization = (_) => {
    throw (0,_Misc_devTools__WEBPACK_IMPORTED_MODULE_7__._WarnImport)("AudioSceneComponent");
};
// Register Class Name
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_11__.RegisterClass)("BABYLON.Sound", Sound);


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

/***/ "../core/dist/AudioV2/webAudio/webAudioSoundSource.js":
/*!************************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioSoundSource.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioSoundSource: () => (/* binding */ _WebAudioSoundSource)
/* harmony export */ });
/* harmony import */ var _abstractAudio_abstractSoundSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudio/abstractSoundSource */ "../core/dist/AudioV2/abstractAudio/abstractSoundSource.js");
/* harmony import */ var _abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractAudio/subProperties/abstractSpatialAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js");
/* harmony import */ var _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstractAudio/subProperties/stereoAudio */ "../core/dist/AudioV2/abstractAudio/subProperties/stereoAudio.js");
/* harmony import */ var _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subNodes/webAudioBusAndSoundSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js");
/* harmony import */ var _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subProperties/spatialWebAudio */ "../core/dist/AudioV2/webAudio/subProperties/spatialWebAudio.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/** @internal */
class _WebAudioSoundSource extends _abstractAudio_abstractSoundSource__WEBPACK_IMPORTED_MODULE_0__.AbstractSoundSource {
    /** @internal */
    constructor(name, webAudioNode, engine, options) {
        super(name, engine, options);
        this._stereo = null;
        this._audioContext = this.engine._audioContext;
        this._webAudioNode = webAudioNode;
        this._subGraph = new _WebAudioSoundSource._SubGraph(this);
    }
    /** @internal */
    async _initAsync(options) {
        if (options.outBus) {
            this.outBus = options.outBus;
        }
        else if (options.outBusAutoDefault !== false) {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0,_abstractAudio_subProperties_abstractSpatialAudio__WEBPACK_IMPORTED_MODULE_1__._HasSpatialAudioOptions)(options)) {
            this._initSpatialProperty();
        }
        this.engine._addNode(this);
    }
    /** @internal */
    get _inNode() {
        return this._webAudioNode;
    }
    /** @internal */
    get _outNode() {
        return this._subGraph._outNode;
    }
    /** @internal */
    get stereo() {
        return this._stereo ?? (this._stereo = new _abstractAudio_subProperties_stereoAudio__WEBPACK_IMPORTED_MODULE_2__._StereoAudio(this._subGraph));
    }
    /** @internal */
    dispose() {
        super.dispose();
        this._stereo = null;
        this._subGraph.dispose();
        this.engine._removeNode(this);
    }
    /** @internal */
    getClassName() {
        return "_WebAudioSoundSource";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _createSpatialProperty(autoUpdate, minUpdateTime) {
        return new _subProperties_spatialWebAudio__WEBPACK_IMPORTED_MODULE_4__._SpatialWebAudio(this._subGraph, autoUpdate, minUpdateTime);
    }
}
_WebAudioSoundSource._SubGraph = class extends _subNodes_webAudioBusAndSoundSubGraph__WEBPACK_IMPORTED_MODULE_3__._WebAudioBusAndSoundSubGraph {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
    _onSubNodesChanged() {
        super._onSubNodesChanged();
        this._owner._inNode.disconnect();
        if (this._owner._subGraph._inNode) {
            this._owner._inNode.connect(this._owner._subGraph._inNode);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfTVNGVF9hdWRpb19lbWl0dGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUVBO0FBRUE7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQWNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTs7O0FBR0E7QUFDQTtBQWpEQTs7QUFFQTtBQUNBO0FBT0E7QUFTQTtBQVNBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBeUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4VUE7QUEyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4bUJBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOzs7Ozs7O0FBT0E7QUFDQTtBQXRKQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBZUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQXdDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQXFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBa1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9mQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcjBCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQW0wQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGlDQTtBQUNBO0FBZ0JBOzs7O0FBSUE7QUFDQTtBQWdCQTs7Ozs7QUFLQTtBQUNBO0FBckJBOztBQUVBO0FBQ0E7QUFVQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TEE7QUFFQTs7QUFFQTtBQUNBO0FBZUE7Ozs7O0FBS0E7QUFDQTtBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFFQTtBQUVBO0FBb0NBOzs7QUFHQTtBQUNBO0FBQ0E7QUFlQTs7QUFFQTtBQUNBO0FBakJBOztBQUVBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BbmltYXRpb25zL2FuaW1hdGlvbkV2ZW50LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW8vYXVkaW9TY2VuZUNvbXBvbmVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvL3NvdW5kLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW8vc291bmRUcmFjay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvL3dlaWdodGVkc291bmQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvU291bmRTb3VyY2UudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL01TRlRfYXVkaW9fZW1pdHRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29tcG9zZWQgb2YgYSBmcmFtZSwgYW5kIGFuIGFjdGlvbiBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkV2ZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHRoZSBhbmltYXRpb24gZXZlbnQgaXMgZG9uZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNEb25lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgYW5pbWF0aW9uIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZnJhbWUgVGhlIGZyYW1lIGZvciB3aGljaCB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkXHJcbiAgICAgKiBAcGFyYW0gYWN0aW9uIFRoZSBldmVudCB0byBwZXJmb3JtIHdoZW4gdHJpZ2dlcmVkXHJcbiAgICAgKiBAcGFyYW0gb25seU9uY2UgU3BlY2lmaWVzIGlmIHRoZSBldmVudCBzaG91bGQgYmUgdHJpZ2dlcmVkIG9ubHkgb25jZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKiogVGhlIGZyYW1lIGZvciB3aGljaCB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkICoqL1xyXG4gICAgICAgIHB1YmxpYyBmcmFtZTogbnVtYmVyLFxyXG4gICAgICAgIC8qKiBUaGUgZXZlbnQgdG8gcGVyZm9ybSB3aGVuIHRyaWdnZXJlZCAqKi9cclxuICAgICAgICBwdWJsaWMgYWN0aW9uOiAoY3VycmVudEZyYW1lOiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICAgICAgLyoqIFNwZWNpZmllcyBpZiB0aGUgZXZlbnQgc2hvdWxkIGJlIHRyaWdnZXJlZCBvbmx5IG9uY2UqKi9cclxuICAgICAgICBwdWJsaWMgb25seU9uY2U/OiBib29sZWFuXHJcbiAgICApIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9jbG9uZSgpOiBBbmltYXRpb25FdmVudCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb25FdmVudCh0aGlzLmZyYW1lLCB0aGlzLmFjdGlvbiwgdGhpcy5vbmx5T25jZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi9zb3VuZFwiO1xyXG5pbXBvcnQgeyBTb3VuZFRyYWNrIH0gZnJvbSBcIi4vc291bmRUcmFja1wiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IE1hdHJpeCwgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZVNlcmlhbGl6YWJsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9zY2VuZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTY2VuZUNvbXBvbmVudENvbnN0YW50cyB9IGZyb20gXCIuLi9zY2VuZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2Fzc2V0Q29udGFpbmVyXCI7XHJcblxyXG5pbXBvcnQgXCIuL2F1ZGlvRW5naW5lXCI7XHJcbmltcG9ydCB7IFByZWNpc2lvbkRhdGUgfSBmcm9tIFwiLi4vTWlzYy9wcmVjaXNpb25EYXRlXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RFbmdpbmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2Fic3RyYWN0RW5naW5lXCI7XHJcbmltcG9ydCB7IEFkZFBhcnNlciB9IGZyb20gXCJjb3JlL0xvYWRpbmcvUGx1Z2lucy9iYWJ5bG9uRmlsZVBhcnNlci5mdW5jdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL0lBc3NldENvbnRhaW5lclwiO1xyXG5cclxuLy8gQWRkcyB0aGUgcGFyc2VyIHRvIHRoZSBzY2VuZSBwYXJzZXJzLlxyXG5BZGRQYXJzZXIoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTywgKHBhcnNlZERhdGE6IGFueSwgc2NlbmU6IFNjZW5lLCBjb250YWluZXI6IEFzc2V0Q29udGFpbmVyLCByb290VXJsOiBzdHJpbmcpID0+IHtcclxuICAgIC8vIFRPRE86IGFkZCBzb3VuZFxyXG4gICAgbGV0IGxvYWRlZFNvdW5kczogU291bmRbXSA9IFtdO1xyXG4gICAgbGV0IGxvYWRlZFNvdW5kOiBTb3VuZDtcclxuICAgIGNvbnRhaW5lci5zb3VuZHMgPSBjb250YWluZXIuc291bmRzIHx8IFtdO1xyXG4gICAgaWYgKHBhcnNlZERhdGEuc291bmRzICE9PSB1bmRlZmluZWQgJiYgcGFyc2VkRGF0YS5zb3VuZHMgIT09IG51bGwpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGNhY2hlID0gcGFyc2VkRGF0YS5zb3VuZHMubGVuZ3RoOyBpbmRleCA8IGNhY2hlOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFNvdW5kID0gcGFyc2VkRGF0YS5zb3VuZHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFNvdW5kLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFNvdW5kLnVybCA9IHBhcnNlZFNvdW5kLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvYWRlZFNvdW5kc1twYXJzZWRTb3VuZC51cmxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkU291bmQgPSBTb3VuZC5QYXJzZShwYXJzZWRTb3VuZCwgc2NlbmUsIHJvb3RVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZFNvdW5kc1twYXJzZWRTb3VuZC51cmxdID0gbG9hZGVkU291bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNvdW5kcy5wdXNoKGxvYWRlZFNvdW5kKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNvdW5kcy5wdXNoKFNvdW5kLlBhcnNlKHBhcnNlZFNvdW5kLCBzY2VuZSwgcm9vdFVybCwgbG9hZGVkU291bmRzW3BhcnNlZFNvdW5kLnVybF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zb3VuZHMucHVzaChuZXcgU291bmQocGFyc2VkU291bmQubmFtZSwgbnVsbCwgc2NlbmUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRTb3VuZHMgPSBbXTtcclxufSk7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uL3NjZW5lXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY2VuZSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGludGVybmFsXHJcbiAgICAgICAgICogQmFja2luZyBmaWVsZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9tYWluU291bmRUcmFjazogU291bmRUcmFjaztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWFpbiBzb3VuZCB0cmFjayBwbGF5ZWQgYnkgdGhlIHNjZW5lLlxyXG4gICAgICAgICAqIEl0IGNvbnRhaW5zIHlvdXIgcHJpbWFyeSBjb2xsZWN0aW9uIG9mIHNvdW5kcy5cclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG1haW5Tb3VuZFRyYWNrOiBTb3VuZFRyYWNrO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBsaXN0IG9mIHNvdW5kIHRyYWNrcyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNvdW5kVHJhY2tzOiBOdWxsYWJsZTxBcnJheTxTb3VuZFRyYWNrPj47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgYSBzb3VuZCB1c2luZyBhIGdpdmVuIG5hbWVcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBuYW1lIHRvIHNlYXJjaCBmb3JcclxuICAgICAgICAgKiBAcmV0dXJucyB0aGUgZm91bmQgc291bmQgb3IgbnVsbCBpZiBub3QgZm91bmQgYXQgYWxsLlxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0U291bmRCeU5hbWUobmFtZTogc3RyaW5nKTogTnVsbGFibGU8U291bmQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgaWYgYXVkaW8gc3VwcG9ydCBpcyBlbmFibGVkXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBhdWRpb0VuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyBpZiBhdWRpbyB3aWxsIGJlIG91dHB1dCB0byBoZWFkcGhvbmVzXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBoZWFkcGhvbmU6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyBjdXN0b20gYXVkaW8gbGlzdGVuZXIgcG9zaXRpb24gcHJvdmlkZXJcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyOiBOdWxsYWJsZTwoKSA9PiBWZWN0b3IzPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIGN1c3RvbSBhdWRpbyBsaXN0ZW5lciByb3RhdGlvbiBwcm92aWRlclxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXI6IE51bGxhYmxlPCgpID0+IFZlY3RvcjM+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgYSByZWZyZXNoIHJhdGUgd2hlbiB1c2luZyAzRCBhdWRpbyBwb3NpdGlvbmluZ1xyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXVkaW9Qb3NpdGlvbmluZ1JlZnJlc2hSYXRlOiBudW1iZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZS5wcm90b3R5cGUsIFwibWFpblNvdW5kVHJhY2tcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX21haW5Tb3VuZFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21haW5Tb3VuZFRyYWNrID0gbmV3IFNvdW5kVHJhY2sodGhpcywgeyBtYWluVHJhY2s6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFpblNvdW5kVHJhY2s7XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxufSk7XHJcblxyXG5TY2VuZS5wcm90b3R5cGUuZ2V0U291bmRCeU5hbWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKTogTnVsbGFibGU8U291bmQ+IHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyO1xyXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uW2luZGV4XS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbltpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2RJbmRleCA9IDA7IHNkSW5kZXggPCB0aGlzLnNvdW5kVHJhY2tzLmxlbmd0aDsgc2RJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc291bmRUcmFja3Nbc2RJbmRleF0uc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRUcmFja3Nbc2RJbmRleF0uc291bmRDb2xsZWN0aW9uW2luZGV4XS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291bmRUcmFja3Nbc2RJbmRleF0uc291bmRDb2xsZWN0aW9uW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZS5wcm90b3R5cGUsIFwiYXVkaW9FbmFibGVkXCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvLmF1ZGlvRW5hYmxlZDtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSwgdmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgY29tcG8uZW5hYmxlQXVkaW8oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wby5kaXNhYmxlQXVkaW8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmUucHJvdG90eXBlLCBcImhlYWRwaG9uZVwiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSkge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wby5oZWFkcGhvbmU7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbXBvLnN3aXRjaEF1ZGlvTW9kZUZvckhlYWRwaG9uZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wby5zd2l0Y2hBdWRpb01vZGVGb3JOb3JtYWxTcGVha2VycygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZS5wcm90b3R5cGUsIFwiYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXJcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG8uYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXI7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUsIHZhbHVlOiAoKSA9PiBWZWN0b3IzKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB2YWx1ZSBwYXNzZWQgdG8gW1NjZW5lLmF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyXSBtdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVmVjdG9yM1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wby5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZS5wcm90b3R5cGUsIFwiYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXJcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG8uYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXI7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUsIHZhbHVlOiAoKSA9PiBWZWN0b3IzKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB2YWx1ZSBwYXNzZWQgdG8gW1NjZW5lLmF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyXSBtdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVmVjdG9yM1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21wby5hdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY2VuZS5wcm90b3R5cGUsIFwiYXVkaW9Qb3NpdGlvbmluZ1JlZnJlc2hSYXRlXCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvLmF1ZGlvUG9zaXRpb25pbmdSZWZyZXNoUmF0ZTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvLmF1ZGlvUG9zaXRpb25pbmdSZWZyZXNoUmF0ZSA9IHZhbHVlO1xyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHNvdW5kIHNjZW5lIGNvbXBvbmVudCByZXNwb25zaWJsZSB0byBtYW5hZ2UgYW55IHNvdW5kc1xyXG4gKiBpbiBhIGdpdmVuIHNjZW5lLlxyXG4gKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1ZGlvU2NlbmVDb21wb25lbnQgaW1wbGVtZW50cyBJU2NlbmVTZXJpYWxpemFibGVDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0NhbWVyYURpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDAsIC0xKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgbmFtZSBoZWxwZnVsIHRvIGlkZW50aWZ5IHRoZSBjb21wb25lbnQgaW4gdGhlIGxpc3Qgb2Ygc2NlbmUgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNjZW5lIHRoZSBjb21wb25lbnQgYmVsb25ncyB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNjZW5lOiBTY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIF9hdWRpb0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHdoZXRoZXIgYXVkaW8gaXMgZW5hYmxlZCBvciBub3QuXHJcbiAgICAgKiBQbGVhc2UgdXNlIHJlbGF0ZWQgZW5hYmxlL2Rpc2FibGUgbWV0aG9kIHRvIHN3aXRjaCBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhdWRpb0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvRW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oZWFkcGhvbmUgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aGV0aGVyIGF1ZGlvIGlzIG91dHB1dHRpbmcgdG8gaGVhZHBob25lIG9yIG5vdC5cclxuICAgICAqIFBsZWFzZSB1c2UgdGhlIGFjY29yZGluZyBTd2l0Y2ggbWV0aG9kcyB0byBjaGFuZ2Ugb3V0cHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRwaG9uZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhZHBob25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgcmVmcmVzaCByYXRlIHdoZW4gdXNpbmcgM0QgYXVkaW8gcG9zaXRpb25pbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF1ZGlvUG9zaXRpb25pbmdSZWZyZXNoUmF0ZSA9IDUwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3IgU2V0cyBhIGN1c3RvbSBsaXN0ZW5lciBwb3NpdGlvbiBmb3IgYWxsIHNvdW5kcyBpbiB0aGUgc2NlbmVcclxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBhY3RpdmUgY2FtZXJhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcjogTnVsbGFibGU8KCkgPT4gVmVjdG9yMz4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBTZXRzIGEgY3VzdG9tIGxpc3RlbmVyIHJvdGF0aW9uIGZvciBhbGwgc291bmRzIGluIHRoZSBzY2VuZVxyXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBpcyB0aGUgcm90YXRpb24gb2YgdGhlIGZpcnN0IGFjdGl2ZSBjYW1lcmFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyOiBOdWxsYWJsZTwoKSA9PiBWZWN0b3IzPiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgZm9yIHRoZSBnaXZlbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIERlZmluZXMgdGhlIHNjZW5lIHRvIHJlZ2lzdGVyIHRoZSBjb21wb25lbnQgaW5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU/OiBOdWxsYWJsZTxTY2VuZT4pIHtcclxuICAgICAgICBzY2VuZSA9IHNjZW5lIHx8IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmU7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgc2NlbmUuc291bmRUcmFja3MgPSBbXSBhcyBTb3VuZFRyYWNrW107XHJcbiAgICAgICAgc2NlbmUuc291bmRzID0gW10gYXMgU291bmRbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyB0aGUgY29tcG9uZW50IGluIGEgZ2l2ZW4gc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuX2FmdGVyUmVuZGVyU3RhZ2UucmVnaXN0ZXJTdGVwKFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLlNURVBfQUZURVJSRU5ERVJfQVVESU8sIHRoaXMsIHRoaXMuX2FmdGVyUmVuZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYnVpbGRzIHRoZSBlbGVtZW50cyByZWxhdGVkIHRvIHRoaXMgY29tcG9uZW50IGluIGNhc2Ugb2ZcclxuICAgICAqIGNvbnRleHQgbG9zdCBmb3IgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWJ1aWxkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZS4gKE5vdCByZW5kZXJpbmcgcmVsYXRlZClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhlIGNvbXBvbmVudCBkYXRhIHRvIHRoZSBzcGVjaWZpZWQganNvbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IFRoZSBvYmplY3QgdG8gc2VyaWFsaXplIHRvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zb3VuZHMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VuZHRyYWNrID0gdGhpcy5zY2VuZS5zb3VuZFRyYWNrc1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc291bmRJZCA9IDA7IHNvdW5kSWQgPCBzb3VuZHRyYWNrLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IHNvdW5kSWQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc291bmRzLnB1c2goc291bmR0cmFjay5zb3VuZENvbGxlY3Rpb25bc291bmRJZF0uc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhbGwgdGhlIGVsZW1lbnRzIGZyb20gdGhlIGNvbnRhaW5lciB0byB0aGUgc2NlbmVcclxuICAgICAqIEBwYXJhbSBjb250YWluZXIgdGhlIGNvbnRhaW5lciBob2xkaW5nIHRoZSBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkRnJvbUNvbnRhaW5lcihjb250YWluZXI6IElBc3NldENvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyLnNvdW5kcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgY29udGFpbmVyLnNvdW5kcykge1xyXG4gICAgICAgICAgICBzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHNvdW5kLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5tYWluU291bmRUcmFjay5hZGRTb3VuZChzb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIGVsZW1lbnRzIGluIHRoZSBjb250YWluZXIgZnJvbSB0aGUgc2NlbmVcclxuICAgICAqIEBwYXJhbSBjb250YWluZXIgY29udGFpbnMgdGhlIGVsZW1lbnRzIHRvIHJlbW92ZVxyXG4gICAgICogQHBhcmFtIGRpc3Bvc2UgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCBzaG91bGQgYmUgZGlzcG9zZWQgKGRlZmF1bHQ6IGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRnJvbUNvbnRhaW5lcihjb250YWluZXI6IElBc3NldENvbnRhaW5lciwgZGlzcG9zZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIuc291bmRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiBjb250YWluZXIuc291bmRzKSB7XHJcbiAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgc291bmQuYXV0b3BsYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5tYWluU291bmRUcmFjay5yZW1vdmVTb3VuZChzb3VuZCk7XHJcbiAgICAgICAgICAgIGlmIChkaXNwb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlcyB0aGUgY29tcG9uZW50IGFuZCB0aGUgYXNzb2NpYXRlZCByZXNvdXJjZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICBpZiAoc2NlbmUuX21haW5Tb3VuZFRyYWNrKSB7XHJcbiAgICAgICAgICAgIHNjZW5lLm1haW5Tb3VuZFRyYWNrLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzY0luZGV4ID0gMDsgc2NJbmRleCA8IHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgc2NJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5zb3VuZFRyYWNrc1tzY0luZGV4XS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlcyBhdWRpbyBpbiB0aGUgYXNzb2NpYXRlZCBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc2FibGVBdWRpbygpIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9FbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZSAmJiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuc3VzcGVuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbltpXS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbltqXS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlcyBhdWRpbyBpbiB0aGUgYXNzb2NpYXRlZCBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZUF1ZGlvKCkge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICB0aGlzLl9hdWRpb0VuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUgJiYgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb25baV0uaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbltpXS5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uW2pdLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbltqXS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIGF1ZGlvIHRvIGhlYWRwaG9uZSBvdXRwdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hBdWRpb01vZGVGb3JIZWFkcGhvbmVzKCkge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICB0aGlzLl9oZWFkcGhvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBzY2VuZS5tYWluU291bmRUcmFjay5zd2l0Y2hQYW5uaW5nTW9kZWxUb0hSVEYoKTtcclxuICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuc291bmRUcmFja3NbaV0uc3dpdGNoUGFubmluZ01vZGVsVG9IUlRGKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggYXVkaW8gdG8gbm9ybWFsIHNwZWFrZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3dpdGNoQXVkaW9Nb2RlRm9yTm9ybWFsU3BlYWtlcnMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuX2hlYWRwaG9uZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzY2VuZS5tYWluU291bmRUcmFjay5zd2l0Y2hQYW5uaW5nTW9kZWxUb0VxdWFsUG93ZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLnNvdW5kVHJhY2tzW2ldLnN3aXRjaFBhbm5pbmdNb2RlbFRvRXF1YWxQb3dlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhY2hlZENhbWVyYURpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICBwcml2YXRlIF9jYWNoZWRDYW1lcmFQb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICBwcml2YXRlIF9sYXN0Q2hlY2sgPSAwO1xyXG4gICAgcHJpdmF0ZSBfaW52ZXJ0TWF0cml4VGVtcCA9IG5ldyBNYXRyaXgoKTtcclxuICAgIHByaXZhdGUgX2NhbWVyYURpcmVjdGlvblRlbXAgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuICAgIHByaXZhdGUgX2FmdGVyUmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IFByZWNpc2lvbkRhdGUuTm93O1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0Q2hlY2sgJiYgbm93IC0gdGhpcy5fbGFzdENoZWNrIDwgdGhpcy5hdWRpb1Bvc2l0aW9uaW5nUmVmcmVzaFJhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdENoZWNrID0gbm93O1xyXG5cclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hdWRpb0VuYWJsZWQgfHwgIXNjZW5lLl9tYWluU291bmRUcmFjayB8fCAhc2NlbmUuc291bmRUcmFja3MgfHwgKHNjZW5lLl9tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoID09PSAwICYmIHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYXVkaW9FbmdpbmUgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZTtcclxuXHJcbiAgICAgICAgaWYgKCFhdWRpb0VuZ2luZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5pbmdDYW1lcmEgPSBzY2VuZS5hY3RpdmVDYW1lcmE7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZS5hY3RpdmVDYW1lcmFzICYmIHNjZW5lLmFjdGl2ZUNhbWVyYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuaW5nQ2FtZXJhID0gc2NlbmUuYWN0aXZlQ2FtZXJhc1swXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQSBjdXN0b20gbGlzdGVuZXIgcG9zaXRpb24gcHJvdmlkZXIgd2FzIHNldFxyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHVzZXJzIHByb3ZpZGVkIHBvc2l0aW9uIGluc3RlYWQgb2YgY2FtZXJhJ3NcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uOiBWZWN0b3IzID0gdGhpcy5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBsaXN0ZW5lciBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHBvc2l0aW9uLnggfHwgMCwgcG9zaXRpb24ueSB8fCAwLCBwb3NpdGlvbi56IHx8IDApO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBsaXN0ZW5pbmcgY2FtZXJhXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuaW5nQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGxpc3RlbmVyIHBvc2l0aW9uIHRvIHRoZSBsaXN0ZW5pbmcgY2FtZXJhIGdsb2JhbCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jYWNoZWRDYW1lcmFQb3NpdGlvbi5lcXVhbHMobGlzdGVuaW5nQ2FtZXJhLmdsb2JhbFBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZENhbWVyYVBvc2l0aW9uLmNvcHlGcm9tKGxpc3RlbmluZ0NhbWVyYS5nbG9iYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKGxpc3RlbmluZ0NhbWVyYS5nbG9iYWxQb3NpdGlvbi54LCBsaXN0ZW5pbmdDYW1lcmEuZ2xvYmFsUG9zaXRpb24ueSwgbGlzdGVuaW5nQ2FtZXJhLmdsb2JhbFBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBzZXQgdGhlIGxpc3RlbmVyIHBvc2l0aW9uIHRvIDAsIDAgLDBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGxpc3RlbmVyIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQubGlzdGVuZXIuc2V0UG9zaXRpb24oMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEEgY3VzdG9tIGxpc3RlbmVyIHJvdGF0aW9uIHByb3ZpZGVyIHdhcyBzZXRcclxuICAgICAgICAgICAgLy8gVXNlIHRoZSB1c2VycyBwcm92aWRlZCByb3RhdGlvbiBpbnN0ZWFkIG9mIGNhbWVyYSdzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvbjogVmVjdG9yMyA9IHRoaXMuYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXIoKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbihyb3RhdGlvbi54IHx8IDAsIHJvdGF0aW9uLnkgfHwgMCwgcm90YXRpb24ueiB8fCAwLCAwLCAxLCAwKTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgbGlzdGVuaW5nIGNhbWVyYVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmluZ0NhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIFZSIGNhbWVyYXNcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5pbmdDYW1lcmEucmlnQ2FtZXJhcyAmJiBsaXN0ZW5pbmdDYW1lcmEucmlnQ2FtZXJhcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuaW5nQ2FtZXJhID0gbGlzdGVuaW5nQ2FtZXJhLnJpZ0NhbWVyYXNbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGlzdGVuaW5nQ2FtZXJhLmdldFZpZXdNYXRyaXgoKS5pbnZlcnRUb1JlZih0aGlzLl9pbnZlcnRNYXRyaXhUZW1wKTtcclxuICAgICAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtTm9ybWFsVG9SZWYoQXVkaW9TY2VuZUNvbXBvbmVudC5fQ2FtZXJhRGlyZWN0aW9uLCB0aGlzLl9pbnZlcnRNYXRyaXhUZW1wLCB0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBUbyBhdm9pZCBzb21lIGVycm9ycyBvbiBHZWFyVlJcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC54KSAmJiAhaXNOYU4odGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC55KSAmJiAhaXNOYU4odGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC56KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2FjaGVkQ2FtZXJhRGlyZWN0aW9uLmVxdWFscyh0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRDYW1lcmFEaXJlY3Rpb24uY29weUZyb20odGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLngsIHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAueSwgdGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC56LCAwLCAxLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHNldCB0aGUgbGlzdGVuZXIgcm90YXRpb24gdG8gMCwgMCAsMFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbGlzdGVuZXIgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbigwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGk6IG51bWJlcjtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291bmQgPSBzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb25baV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc291bmQudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC51cGRhdGVEaXN0YW5jZUZyb21MaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291bmQgPSBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb25bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VuZC51c2VDdXN0b21BdHRlbnVhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmQudXBkYXRlRGlzdGFuY2VGcm9tTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuU291bmQuX1NjZW5lQ29tcG9uZW50SW5pdGlhbGl6YXRpb24gPSAoc2NlbmU6IFNjZW5lKSA9PiB7XHJcbiAgICBsZXQgY29tcG8gPSBzY2VuZS5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pO1xyXG4gICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQoc2NlbmUpO1xyXG4gICAgICAgIHNjZW5lLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgdHlwZSB7IElTdGF0aWNTb3VuZE9wdGlvbnMsIElTdGF0aWNTb3VuZFBsYXlPcHRpb25zLCBJU3RhdGljU291bmRTdG9wT3B0aW9ucyB9IGZyb20gXCIuLi9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3RhdGljU291bmRcIjtcclxuaW1wb3J0IHR5cGUgeyBJU3RyZWFtaW5nU291bmRPcHRpb25zIH0gZnJvbSBcIi4uL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdHJlYW1pbmdTb3VuZFwiO1xyXG5pbXBvcnQgeyBfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucywgX1NwYXRpYWxBdWRpb0RlZmF1bHRzIH0gZnJvbSBcIi4uL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XHJcbmltcG9ydCB0eXBlIHsgSUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnMgfSBmcm9tIFwiLi4vQXVkaW9WMi9hdWRpb1BhcmFtZXRlclwiO1xyXG5pbXBvcnQgeyBBdWRpb1BhcmFtZXRlclJhbXBTaGFwZSB9IGZyb20gXCIuLi9BdWRpb1YyL2F1ZGlvUGFyYW1ldGVyXCI7XHJcbmltcG9ydCB7IFNvdW5kU3RhdGUgfSBmcm9tIFwiLi4vQXVkaW9WMi9zb3VuZFN0YXRlXCI7XHJcbmltcG9ydCB7IF9XZWJBdWRpb1NvdW5kU291cmNlIH0gZnJvbSBcIi4uL0F1ZGlvVjIvd2ViQXVkaW8vd2ViQXVkaW9Tb3VuZFNvdXJjZVwiO1xyXG5pbXBvcnQgeyBfV2ViQXVkaW9TdGF0aWNTb3VuZCB9IGZyb20gXCIuLi9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvU3RhdGljU291bmRcIjtcclxuaW1wb3J0IHsgX1dlYkF1ZGlvU3RyZWFtaW5nU291bmQgfSBmcm9tIFwiLi4vQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb1N0cmVhbWluZ1NvdW5kXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcIi4uL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIi4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcIi4uL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcIi4uL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IF9XYXJuSW1wb3J0IH0gZnJvbSBcIi4uL01pc2MvZGV2VG9vbHNcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IF9SZXRyeVdpdGhJbnRlcnZhbCB9IGZyb20gXCIuLi9NaXNjL3RpbWluZ1Rvb2xzXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElTb3VuZE9wdGlvbnMgfSBmcm9tIFwiLi9JbnRlcmZhY2VzL0lTb3VuZE9wdGlvbnNcIjtcclxuXHJcbmNvbnN0IFRtcFJhbXBPcHRpb25zOiBJQXVkaW9QYXJhbWV0ZXJSYW1wT3B0aW9ucyA9IHtcclxuICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgc2hhcGU6IEF1ZGlvUGFyYW1ldGVyUmFtcFNoYXBlLkxpbmVhcixcclxufTtcclxuXHJcbmNvbnN0IFRtcFBsYXlPcHRpb25zOiBQYXJ0aWFsPElTdGF0aWNTb3VuZFBsYXlPcHRpb25zPiA9IHtcclxuICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgc3RhcnRPZmZzZXQ6IDAsXHJcbiAgICB3YWl0VGltZTogMCxcclxufTtcclxuXHJcbmNvbnN0IFRtcFN0b3BPcHRpb25zOiBJU3RhdGljU291bmRTdG9wT3B0aW9ucyA9IHtcclxuICAgIHdhaXRUaW1lOiAwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gRDJyKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcclxufVxyXG5cclxuZnVuY3Rpb24gUjJkKHJhZGlhbnM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKHJhZGlhbnMgKiAxODApIC8gTWF0aC5QSTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBzb3VuZCB0aGF0IGNhbiBiZSBwbGF5ZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxyXG4gKiBUaGUgc291bmQgY2FuIGVpdGhlciBiZSBhbiBhbWJpZW50IHRyYWNrIG9yIGEgc2ltcGxlIHNvdW5kIHBsYXllZCBpbiByZWFjdGlvbiB0byBhIHVzZXIgYWN0aW9uLlxyXG4gKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU291bmQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgc291bmQgaW4gdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMi5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBzb3VuZCBhdXRvcGxheSBvbmNlIGxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhdXRvcGxheSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMiBpbnN0YW5jZW9mIF9XZWJBdWRpb1NvdW5kU291cmNlID8gdHJ1ZSA6IHRoaXMuX29wdGlvbnNWMi5hdXRvcGxheSE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhdXRvcGxheSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnNWMi5hdXRvcGxheSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgc291bmQgbG9vcCBhZnRlciBpdCBmaW5pc2hlcyBwbGF5aW5nIG9uY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMiBpbnN0YW5jZW9mIF9XZWJBdWRpb1NvdW5kU291cmNlID8gdHJ1ZSA6IHRoaXMuX3NvdW5kVjIubG9vcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxvb3AodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRWMiBpbnN0YW5jZW9mIF9XZWJBdWRpb1NvdW5kU291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIubG9vcCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIHNvdW5kIHVzZSBhIGN1c3RvbSBhdHRlbnVhdGlvbiBjdXJ2ZSB0byBzaW11bGF0ZSB0aGUgZmFsbG9mZlxyXG4gICAgICogaGFwcGVuaW5nIHdoZW4gdGhlIHNvdXJjZSBnZXRzIGZ1cnRoZXIgYXdheSBmcm9tIHRoZSBjYW1lcmEuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLXlvdXItb3duLWN1c3RvbS1hdHRlbnVhdGlvbi1mdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlQ3VzdG9tQXR0ZW51YXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNvdW5kIHRyYWNrIGlkIHRoaXMgc291bmQgYmVsb25ncyB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdW5kVHJhY2tJZDogbnVtYmVyID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoaXMgc291bmQgY3VycmVudGx5IHBsYXllZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc1BsYXlpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSA/IHRydWUgOiB0aGlzLl9zb3VuZFYyPy5zdGF0ZSA9PT0gU291bmRTdGF0ZS5TdGFydGVkIHx8ICghdGhpcy5pc1JlYWR5KCkgJiYgdGhpcy5fb3B0aW9uc1YyLmF1dG9wbGF5ISk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGlzIHNvdW5kIGN1cnJlbnRseSBwYXVzZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNQYXVzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSA/IGZhbHNlIDogdGhpcy5fc291bmRWMi5zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhlIHJlZmVyZW5jZSBkaXN0YW5jZSB0aGUgc291bmQgc2hvdWxkIGJlIGhlYXJkIHBlcmZlY3RseS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZEaXN0YW5jZTogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoZSByb2xsIG9mZiBmYWN0b3Igb2Ygc3BhdGlhbCBzb3VuZHMuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm9sbG9mZkZhY3RvcjogbnVtYmVyID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoZSBtYXggZGlzdGFuY2UgdGhlIHNvdW5kIHNob3VsZCBiZSBoZWFyZCAoaW50ZW5zaXR5IGp1c3QgYmVjYW1lIDAgYXQgdGhpcyBwb2ludCkuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1heERpc3RhbmNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsTWF4RGlzdGFuY2UgfHwgMTAwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBtYXhEaXN0YW5jZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxNYXhEaXN0YW5jZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc291bmRWMikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwubWF4RGlzdGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGUgZGlzdGFuY2UgYXR0ZW51YXRpb24gbW9kZWwgdGhlIHNvdW5kIHdpbGwgZm9sbG93LlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkaXN0YW5jZU1vZGVsKCk6IFwibGluZWFyXCIgfCBcImludmVyc2VcIiB8IFwiZXhwb25lbnRpYWxcIiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsRGlzdGFuY2VNb2RlbCB8fCBcImxpbmVhclwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBkaXN0YW5jZU1vZGVsKHZhbHVlOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCIpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbERpc3RhbmNlTW9kZWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLmRpc3RhbmNlTW9kZWwgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQmFjayBDb21wYXRcclxuICAgICAqKi9cclxuICAgIHB1YmxpYyBvbmVuZGVkOiAoKSA9PiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhbiBvYmplY3QgdXNlZCB0byBzdG9yZSB1c2VyIGRlZmluZWQgaW5mb3JtYXRpb24gZm9yIHRoZSBzb3VuZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSBldmVudCB3aGVuIHRoZSBjdXJyZW50IHBsYXlpbmcgc291bmQgZmluaXNoZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkVuZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPFNvdW5kPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCB0aW1lIGZvciB0aGUgc291bmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMiBpbnN0YW5jZW9mIF9XZWJBdWRpb1NvdW5kU291cmNlID8gdGhpcy5fc291bmRWMi5lbmdpbmUuY3VycmVudFRpbWUgOiB0aGlzLl9zb3VuZFYyLmN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGlzIHNvdW5kIGVuYWJsZXMgc3BhdGlhbCBzb3VuZC5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3BhdGlhbFNvdW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFYyPy5faXNTcGF0aWFsID8/IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGlzIHNvdW5kIGVuYWJsZXMgc3BhdGlhbCBzb3VuZC5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgc3BhdGlhbFNvdW5kKG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIpIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRWMi5faXNTcGF0aWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9jYWxEaXJlY3Rpb246IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygxLCAwLCAwKTtcclxuICAgIHByaXZhdGUgX3ZvbHVtZTogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgX2lzUmVhZHlUb1BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2lzRGlyZWN0aW9uYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3JlYWR5VG9QbGF5Q2FsbGJhY2s6ICgpID0+IGFueTtcclxuICAgIHByaXZhdGUgX3NjZW5lOiBTY2VuZTtcclxuICAgIHByaXZhdGUgX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGU6IE51bGxhYmxlPFRyYW5zZm9ybU5vZGU+O1xyXG4gICAgcHJpdmF0ZSBfY3VzdG9tQXR0ZW51YXRpb25GdW5jdGlvbjogKGN1cnJlbnRWb2x1bWU6IG51bWJlciwgY3VycmVudERpc3RhbmNlOiBudW1iZXIsIG1heERpc3RhbmNlOiBudW1iZXIsIHJlZkRpc3RhbmNlOiBudW1iZXIsIHJvbGxvZmZGYWN0b3I6IG51bWJlcikgPT4gbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJGdW5jOiBOdWxsYWJsZTwoY29ubmVjdGVkTWVzaDogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZD47XHJcbiAgICBwcml2YXRlIF9pc091dHB1dENvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdXJsOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vcHRpb25zVjI6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zb3VuZFYyOiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSB8IF9XZWJBdWRpb1N0YXRpY1NvdW5kIHwgX1dlYkF1ZGlvU3RyZWFtaW5nU291bmQ7XHJcbiAgICBwcml2YXRlIF9vblJlYWR5T2JzZXJ2YWJsZTogTnVsbGFibGU8T2JzZXJ2YWJsZTx2b2lkPj4gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2V0IF9vblJlYWR5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fb25SZWFkeU9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25SZWFkeU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fb25SZWFkeU9ic2VydmFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfU2NlbmVDb21wb25lbnRJbml0aWFsaXphdGlvbjogKHNjZW5lOiBTY2VuZSkgPT4gdm9pZCA9IChfKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgX1dhcm5JbXBvcnQoXCJBdWRpb1NjZW5lQ29tcG9uZW50XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHNvdW5kIGFuZCBhdHRhY2ggaXQgdG8gYSBzY2VuZVxyXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB5b3VyIHNvdW5kXHJcbiAgICAgKiBAcGFyYW0gdXJsT3JBcnJheUJ1ZmZlciBVcmwgdG8gdGhlIHNvdW5kIHRvIGxvYWQgYXN5bmMgb3IgQXJyYXlCdWZmZXIsIGl0IGFsc28gd29ya3Mgd2l0aCBNZWRpYVN0cmVhbXMgYW5kIEF1ZGlvQnVmZmVyc1xyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHRoZSBzb3VuZCBiZWxvbmdzIHRvXHJcbiAgICAgKiBAcGFyYW0gcmVhZHlUb1BsYXlDYWxsYmFjayBQcm92aWRlIGEgY2FsbGJhY2sgZnVuY3Rpb24gaWYgeW91J2QgbGlrZSB0byBsb2FkIHlvdXIgY29kZSBvbmNlIHRoZSBzb3VuZCBpcyByZWFkeSB0byBiZSBwbGF5ZWRcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9iamVjdHMgdG8gcHJvdmlkZSB3aXRoIHRoZSBjdXJyZW50IGF2YWlsYWJsZSBvcHRpb25zOiBhdXRvcGxheSwgbG9vcCwgdm9sdW1lLCBzcGF0aWFsU291bmQsIG1heERpc3RhbmNlLCByb2xsb2ZmRmFjdG9yLCByZWZEaXN0YW5jZSwgZGlzdGFuY2VNb2RlbCwgcGFubmluZ01vZGVsLCBzdHJlYW1pbmdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB1cmxPckFycmF5QnVmZmVyOiBhbnksIHNjZW5lPzogTnVsbGFibGU8U2NlbmU+LCByZWFkeVRvUGxheUNhbGxiYWNrOiBOdWxsYWJsZTwoKSA9PiB2b2lkPiA9IG51bGwsIG9wdGlvbnM/OiBJU291bmRPcHRpb25zKSB7XHJcbiAgICAgICAgc2NlbmUgPSBzY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIFNvdW5kLl9TY2VuZUNvbXBvbmVudEluaXRpYWxpemF0aW9uKHNjZW5lKTtcclxuICAgICAgICB0aGlzLl9yZWFkeVRvUGxheUNhbGxiYWNrID0gcmVhZHlUb1BsYXlDYWxsYmFjayB8fCAoKCkgPT4ge30pO1xyXG5cclxuICAgICAgICAvLyBEZWZhdWx0IGN1c3RvbSBhdHRlbnVhdGlvbiBmdW5jdGlvbiBpcyBhIGxpbmVhciBhdHRlbnVhdGlvblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICB0aGlzLl9jdXN0b21BdHRlbnVhdGlvbkZ1bmN0aW9uID0gKGN1cnJlbnRWb2x1bWU6IG51bWJlciwgY3VycmVudERpc3RhbmNlOiBudW1iZXIsIG1heERpc3RhbmNlOiBudW1iZXIsIHJlZkRpc3RhbmNlOiBudW1iZXIsIHJvbGxvZmZGYWN0b3I6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDwgbWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50Vm9sdW1lICogKDEgLSBjdXJyZW50RGlzdGFuY2UgLyBtYXhEaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zVjI6IFBhcnRpYWw8SVN0YXRpY1NvdW5kT3B0aW9ucz4gPSB7XHJcbiAgICAgICAgICAgIGFuYWx5emVyRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSwgLy8gYGZhbHNlYCBmb3Igbm93LCBidXQgd2lsbCBiZSBzZXQgdG8gZ2l2ZW4gb3B0aW9uIGxhdGVyXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgICBsb29wOiBvcHRpb25zLmxvb3AgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BFbmQ6IDAsXHJcbiAgICAgICAgICAgIGxvb3BTdGFydDogMCxcclxuICAgICAgICAgICAgbWF4SW5zdGFuY2VzOiAxLFxyXG4gICAgICAgICAgICBvdXRCdXM6IG51bGwsXHJcbiAgICAgICAgICAgIG91dEJ1c0F1dG9EZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgcGxheWJhY2tSYXRlOiBvcHRpb25zLnBsYXliYWNrUmF0ZSB8fCAxLFxyXG4gICAgICAgICAgICBwaXRjaDogMCxcclxuICAgICAgICAgICAgc2tpcENvZGVjQ2hlY2s6IG9wdGlvbnMuc2tpcENvZGVjQ2hlY2sgfHwgZmFsc2UsXHJcbiAgICAgICAgICAgIHNwYXRpYWxEaXN0YW5jZU1vZGVsOiBvcHRpb25zLmRpc3RhbmNlTW9kZWwsXHJcbiAgICAgICAgICAgIHNwYXRpYWxFbmFibGVkOiBvcHRpb25zLnNwYXRpYWxTb3VuZCxcclxuICAgICAgICAgICAgc3BhdGlhbE1heERpc3RhbmNlOiBvcHRpb25zLm1heERpc3RhbmNlLFxyXG4gICAgICAgICAgICBzcGF0aWFsTWluRGlzdGFuY2U6IG9wdGlvbnMucmVmRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIHNwYXRpYWxSb2xsb2ZmRmFjdG9yOiBvcHRpb25zLnJvbGxvZmZGYWN0b3IsXHJcbiAgICAgICAgICAgIHN0ZXJlb0VuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGFydE9mZnNldDogb3B0aW9ucy5vZmZzZXQgfHwgMCxcclxuICAgICAgICAgICAgdm9sdW1lOiBvcHRpb25zLnZvbHVtZSA/PyAxLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdm9sdW1lID0gb3B0aW9ucy52b2x1bWUgPz8gMTtcclxuXHJcbiAgICAgICAgaWYgKF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnNWMikpIHtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxBdXRvVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsQ29uZUlubmVyQW5nbGUgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZUlubmVyQW5nbGU7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsQ29uZU91dGVyQW5nbGUgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZU91dGVyQW5nbGU7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsQ29uZU91dGVyVm9sdW1lID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVPdXRlclZvbHVtZTtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxNaW5VcGRhdGVUaW1lID0gMDtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxPcmllbnRhdGlvbiA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5vcmllbnRhdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbFBhbm5pbmdNb2RlbCA9ICh0aGlzLl9zY2VuZS5oZWFkcGhvbmUgPyBcIkhSVEZcIiA6IFwiZXF1YWxwb3dlclwiKSBhcyBcImVxdWFscG93ZXJcIiB8IFwiSFJURlwiO1xyXG4gICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbFBvc2l0aW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsUm90YXRpb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxSb3RhdGlvblF1YXRlcm5pb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucm90YXRpb25RdWF0ZXJuaW9uLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9uc1YyLnNwYXRpYWxNYXhEaXN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbE1heERpc3RhbmNlID0gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIgPSB7IC4uLm9wdGlvbnNWMiB9O1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnNWMi5hdXRvcGxheSA9IG9wdGlvbnMuYXV0b3BsYXkgfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24gPSBvcHRpb25zLnVzZUN1c3RvbUF0dGVudWF0aW9uID8/IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsTWF4RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgICBvcHRpb25zVjIudm9sdW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJlYW1pbmcgPSBvcHRpb25zPy5zdHJlYW1pbmcgfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1ZGlvRW5naW5lID0gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU7XHJcbiAgICAgICAgaWYgKCFhdWRpb0VuZ2luZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdWRpb0VuZ2luZVYyID0gKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lIGFzIEF1ZGlvRW5naW5lKS5fdjI7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVNvdW5kVjIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW1pbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbWluZ09wdGlvbnNWMjogUGFydGlhbDxJU3RyZWFtaW5nU291bmRPcHRpb25zPiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQ291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9uc1YyLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBfV2ViQXVkaW9TdHJlYW1pbmdTb3VuZChuYW1lLCBhdWRpb0VuZ2luZVYyLCBzdHJlYW1pbmdPcHRpb25zVjIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgdm9pZCBzb3VuZC5faW5pdEFzeW5jKHVybE9yQXJyYXlCdWZmZXIsIG9wdGlvbnNWMikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBzb3VuZC5wcmVsb2FkSW5zdGFuY2VzQXN5bmMoMSkudGhlbih0aGlzLl9vblJlYWR5VG9QbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3VuZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gbmV3IF9XZWJBdWRpb1N0YXRpY1NvdW5kKG5hbWUsIGF1ZGlvRW5naW5lVjIsIG9wdGlvbnNWMik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICB2b2lkIHNvdW5kLl9pbml0QXN5bmModXJsT3JBcnJheUJ1ZmZlciwgb3B0aW9uc1YyKS50aGVuKHRoaXMuX29uUmVhZHlUb1BsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIElmIG5vIHBhcmFtZXRlciBpcyBwYXNzZWQgdGhlbiB0aGUgc2V0QXVkaW9CdWZmZXIgc2hvdWxkIGJlIGNhbGxlZCB0byBwcmVwYXJlIHRoZSBzb3VuZC5cclxuICAgICAgICBpZiAoIXVybE9yQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBzb3VuZCBidXQgZG9uJ3QgY2FsbCBfaW5pdEFzeW5jIG9uIGl0LCB5ZXQuIENhbGwgaXQgbGF0ZXIgd2hlbiBgc2V0QXVkaW9CdWZmZXJgIGlzIGNhbGxlZC5cclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IG5ldyBfV2ViQXVkaW9TdGF0aWNTb3VuZChuYW1lLCBhdWRpb0VuZ2luZVYyLCBvcHRpb25zVjIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHVybE9yQXJyYXlCdWZmZXIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXJsID0gdXJsT3JBcnJheUJ1ZmZlcjtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IGNyZWF0ZVNvdW5kVjIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVybE9yQXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBzdHJlYW1pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IGNyZWF0ZVNvdW5kVjIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVybE9yQXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBIVE1MTWVkaWFFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHN0cmVhbWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIgPSBjcmVhdGVTb3VuZFYyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmxPckFycmF5QnVmZmVyIGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBNZWRpYVN0cmVhbUF1ZGlvU291cmNlTm9kZShhdWRpb0VuZ2luZVYyLl9hdWRpb0NvbnRleHQsIHsgbWVkaWFTdHJlYW06IHVybE9yQXJyYXlCdWZmZXIgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIgPSBuZXcgX1dlYkF1ZGlvU291bmRTb3VyY2UobmFtZSwgbm9kZSwgYXVkaW9FbmdpbmVWMiwgb3B0aW9uc1YyKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5fc291bmRWMi5faW5pdEFzeW5jKG9wdGlvbnNWMikudGhlbih0aGlzLl9vblJlYWR5VG9QbGF5KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVybE9yQXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBBdWRpb0J1ZmZlcikge1xyXG4gICAgICAgICAgICBzdHJlYW1pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IGNyZWF0ZVNvdW5kVjIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodXJsT3JBcnJheUJ1ZmZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IGNyZWF0ZVNvdW5kVjIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc291bmRWMikge1xyXG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIFVSTCB0byB0aGUgc291bmQsIGFuIEFycmF5IG9mIFVSTHMgKC5tcDMgJiAub2dnKSBvciBhbiBBcnJheUJ1ZmZlciBvZiB0aGUgc291bmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU291bmRTb3VyY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIub25FbmRlZE9ic2VydmFibGUuYWRkKHRoaXMuX29uZW5kZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblJlYWR5VG9QbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lLm1haW5Tb3VuZFRyYWNrLmFkZFNvdW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JlYWR5VG9QbGF5Q2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX29uUmVhZHlPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVhZHlPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNWMi5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsZWFzZSB0aGUgc291bmQgYW5kIGl0cyBhc3NvY2lhdGVkIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzUmVhZHlUb1BsYXkgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZFRyYWNrSWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLm1haW5Tb3VuZFRyYWNrLnJlbW92ZVNvdW5kKHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUuc291bmRUcmFja3NbdGhpcy5zb3VuZFRyYWNrSWRdLnJlbW92ZVNvdW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy5fcmVnaXN0ZXJGdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUudW5yZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fcmVnaXN0ZXJGdW5jKTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zb3VuZFYyLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgaWYgdGhlIHNvdW5kcyBpcyByZWFkeSB0byBiZSBwbGF5ZWQgb3Igbm90LlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiByZWFkeSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1JlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1JlYWR5VG9QbGF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGNsYXNzIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJucyBjdXJyZW50IGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlNvdW5kXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBkYXRhIG9mIHRoZSBzb3VuZCBmcm9tIGFuIGF1ZGlvYnVmZmVyXHJcbiAgICAgKiBAcGFyYW0gYXVkaW9CdWZmZXIgVGhlIGF1ZGlvQnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEF1ZGlvQnVmZmVyKGF1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1JlYWR5VG9QbGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcywgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5faW5pdEFzeW5jKGF1ZGlvQnVmZmVyLCB0aGlzLl9vcHRpb25zVjIpLnRoZW4odGhpcy5fb25SZWFkeVRvUGxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgY3VycmVudCBzb3VuZHMgb3B0aW9ucyBzdWNoIGFzIG1heGRpc3RhbmNlLCBsb29wLi4uXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdmFsdWVzIG5hbWVkIGFzIHRoZSBvYmplY3QgcHJvcGVydGllc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBJU291bmRPcHRpb25zKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5sb29wID0gb3B0aW9ucy5sb29wID8/IHRoaXMubG9vcDtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG9wdGlvbnMubWF4RGlzdGFuY2UgPz8gdGhpcy5tYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbiA9IG9wdGlvbnMudXNlQ3VzdG9tQXR0ZW51YXRpb24gPz8gdGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5yb2xsb2ZmRmFjdG9yID0gb3B0aW9ucy5yb2xsb2ZmRmFjdG9yID8/IHRoaXMucm9sbG9mZkZhY3RvcjtcclxuICAgICAgICAgICAgdGhpcy5yZWZEaXN0YW5jZSA9IG9wdGlvbnMucmVmRGlzdGFuY2UgPz8gdGhpcy5yZWZEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5kaXN0YW5jZU1vZGVsID0gb3B0aW9ucy5kaXN0YW5jZU1vZGVsID8/IHRoaXMuZGlzdGFuY2VNb2RlbDtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxheWJhY2tSYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxheWJhY2tSYXRlKG9wdGlvbnMucGxheWJhY2tSYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zcGF0aWFsU291bmQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF0aWFsU291bmQgPSBvcHRpb25zLnNwYXRpYWxTb3VuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy52b2x1bWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUob3B0aW9ucy52b2x1bWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNWMi5zdGFydE9mZnNldCA9IG9wdGlvbnMub2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFYyLmR1cmF0aW9uID0gb3B0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZCAmJiB0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNwYXRpYWxQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVNwYXRpYWxQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3BhdGlhbCA9IHRoaXMuX3NvdW5kVjIuc3BhdGlhbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBXZWJBdWRpbyBhdHRlbnVhdGlvbi5cclxuICAgICAgICAgICAgc3BhdGlhbC5kaXN0YW5jZU1vZGVsID0gXCJsaW5lYXJcIjtcclxuICAgICAgICAgICAgc3BhdGlhbC5taW5EaXN0YW5jZSA9IDE7XHJcbiAgICAgICAgICAgIHNwYXRpYWwubWF4RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgICBzcGF0aWFsLnJvbGxvZmZGYWN0b3IgPSAxO1xyXG4gICAgICAgICAgICBzcGF0aWFsLnBhbm5pbmdNb2RlbCA9IFwiZXF1YWxwb3dlclwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYXRpYWwuZGlzdGFuY2VNb2RlbCA9IHRoaXMuZGlzdGFuY2VNb2RlbDtcclxuICAgICAgICAgICAgc3BhdGlhbC5taW5EaXN0YW5jZSA9IHRoaXMucmVmRGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHNwYXRpYWwubWF4RGlzdGFuY2UgPSB0aGlzLm1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICBzcGF0aWFsLnJvbGxvZmZGYWN0b3IgPSB0aGlzLnJvbGxvZmZGYWN0b3I7XHJcbiAgICAgICAgICAgIHNwYXRpYWwucGFubmluZ01vZGVsID0gdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxQYW5uaW5nTW9kZWwgfHwgXCJlcXVhbHBvd2VyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIHRoZSBwYW5uaW5nIG1vZGVsIHRvIEhSVEY6XHJcbiAgICAgKiBSZW5kZXJzIGEgc3RlcmVvIG91dHB1dCBvZiBoaWdoZXIgcXVhbGl0eSB0aGFuIGVxdWFscG93ZXIg4oCUIGl0IHVzZXMgYSBjb252b2x1dGlvbiB3aXRoIG1lYXN1cmVkIGltcHVsc2UgcmVzcG9uc2VzIGZyb20gaHVtYW4gc3ViamVjdHMuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3dpdGNoUGFubmluZ01vZGVsVG9IUlRGKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwucGFubmluZ01vZGVsID0gXCJIUlRGXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIHRoZSBwYW5uaW5nIG1vZGVsIHRvIEVxdWFsIFBvd2VyOlxyXG4gICAgICogUmVwcmVzZW50cyB0aGUgZXF1YWwtcG93ZXIgcGFubmluZyBhbGdvcml0aG0sIGdlbmVyYWxseSByZWdhcmRlZCBhcyBzaW1wbGUgYW5kIGVmZmljaWVudC4gZXF1YWxwb3dlciBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hQYW5uaW5nTW9kZWxUb0VxdWFsUG93ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5wYW5uaW5nTW9kZWwgPSBcImVxdWFscG93ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25uZWN0IHRoaXMgc291bmQgdG8gYSBzb3VuZCB0cmFjayBhdWRpbyBub2RlIGxpa2UgZ2Fpbi4uLlxyXG4gICAgICogQHBhcmFtIHNvdW5kVHJhY2tBdWRpb05vZGUgdGhlIHNvdW5kIHRyYWNrIGF1ZGlvIG5vZGUgdG8gY29ubmVjdCB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29ubmVjdFRvU291bmRUcmFja0F1ZGlvTm9kZShzb3VuZFRyYWNrQXVkaW9Ob2RlOiBBdWRpb05vZGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBvdXRwdXROb2RlID0gdGhpcy5fc291bmRWMi5fb3V0Tm9kZTtcclxuICAgICAgICBpZiAob3V0cHV0Tm9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNPdXRwdXRDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dE5vZGUuY29ubmVjdChzb3VuZFRyYWNrQXVkaW9Ob2RlKTtcclxuICAgICAgICAgICAgdGhpcy5faXNPdXRwdXRDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybSB0aGlzIHNvdW5kIGludG8gYSBkaXJlY3Rpb25hbCBzb3VyY2VcclxuICAgICAqIEBwYXJhbSBjb25lSW5uZXJBbmdsZSBTaXplIG9mIHRoZSBpbm5lciBjb25lIGluIGRlZ3JlZVxyXG4gICAgICogQHBhcmFtIGNvbmVPdXRlckFuZ2xlIFNpemUgb2YgdGhlIG91dGVyIGNvbmUgaW4gZGVncmVlXHJcbiAgICAgKiBAcGFyYW0gY29uZU91dGVyR2FpbiBWb2x1bWUgb2YgdGhlIHNvdW5kIG91dHNpZGUgdGhlIG91dGVyIGNvbmUgKGJldHdlZW4gMC4wIGFuZCAxLjApXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREaXJlY3Rpb25hbENvbmUoY29uZUlubmVyQW5nbGU6IG51bWJlciwgY29uZU91dGVyQW5nbGU6IG51bWJlciwgY29uZU91dGVyR2FpbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNvbmVPdXRlckFuZ2xlIDwgY29uZUlubmVyQW5nbGUpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwic2V0RGlyZWN0aW9uYWxDb25lKCk6IG91dGVyIGFuZ2xlIG9mIHRoZSBjb25lIG11c3QgYmUgc3VwZXJpb3Igb3IgZXF1YWwgdG8gdGhlIGlubmVyIGFuZ2xlLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lSW5uZXJBbmdsZSA9IEQycihjb25lSW5uZXJBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJBbmdsZSA9IEQycihjb25lT3V0ZXJBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJWb2x1bWUgPSBjb25lT3V0ZXJHYWluO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0U3BhdGlhbCgpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5jb25lSW5uZXJBbmdsZSA9IHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZUlubmVyQW5nbGU7XHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLmNvbmVPdXRlckFuZ2xlID0gdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwuY29uZU91dGVyVm9sdW1lID0gY29uZU91dGVyR2FpbjtcclxuXHJcbiAgICAgICAgdGhpcy5faXNEaXJlY3Rpb25hbCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZyAmJiB0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSgwLCB0aGlzLl9vcHRpb25zVjIuc3RhcnRPZmZzZXQsIHRoaXMuX29wdGlvbnNWMi5kdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBpbm5lciBhbmdsZSBmb3IgdGhlIGRpcmVjdGlvbmFsIGNvbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBSMmQodHlwZW9mIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZUlubmVyQW5nbGUgPT09IFwibnVtYmVyXCIgPyB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVJbm5lckFuZ2xlIDogX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVJbm5lckFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgaW5uZXIgYW5nbGUgZm9yIHRoZSBkaXJlY3Rpb25hbCBjb25lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhbHVlID0gRDJyKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZUlubmVyQW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSA8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlOiBvdXRlciBhbmdsZSBvZiB0aGUgY29uZSBtdXN0IGJlIHN1cGVyaW9yIG9yIGVxdWFsIHRvIHRoZSBpbm5lciBhbmdsZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lSW5uZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwuY29uZUlubmVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgb3V0ZXIgYW5nbGUgZm9yIHRoZSBkaXJlY3Rpb25hbCBjb25lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gUjJkKHR5cGVvZiB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVPdXRlckFuZ2xlID09PSBcIm51bWJlclwiID8gdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJBbmdsZSA6IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5jb25lT3V0ZXJBbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIG91dGVyIGFuZ2xlIGZvciB0aGUgZGlyZWN0aW9uYWwgY29uZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB2YWx1ZSA9IEQycih2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVPdXRlckFuZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMuZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZTogb3V0ZXIgYW5nbGUgb2YgdGhlIGNvbmUgbXVzdCBiZSBzdXBlcmlvciBvciBlcXVhbCB0byB0aGUgaW5uZXIgYW5nbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZU91dGVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLmNvbmVPdXRlckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZW1pdHRlciBpZiBzcGF0aWFsIHNvdW5kIGlzIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSBuZXdQb3NpdGlvbiBEZWZpbmVzIHRoZSBuZXcgcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uOiBWZWN0b3IzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsUG9zaXRpb24gJiYgbmV3UG9zaXRpb24uZXF1YWxzKHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zVjIuc3BhdGlhbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsUG9zaXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxQb3NpdGlvbi5jb3B5RnJvbShuZXdQb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BhdGlhbFNvdW5kICYmICFpc05hTihuZXdQb3NpdGlvbi54KSAmJiAhaXNOYU4obmV3UG9zaXRpb24ueSkgJiYgIWlzTmFOKG5ld1Bvc2l0aW9uLnopKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGxvY2FsIGRpcmVjdGlvbiBvZiB0aGUgZW1pdHRlciBpZiBzcGF0aWFsIHNvdW5kIGlzIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSBuZXdMb2NhbERpcmVjdGlvbiBEZWZpbmVzIHRoZSBuZXcgbG9jYWwgZGlyZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRMb2NhbERpcmVjdGlvblRvTWVzaChuZXdMb2NhbERpcmVjdGlvbjogVmVjdG9yMyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvY2FsRGlyZWN0aW9uID0gbmV3TG9jYWxEaXJlY3Rpb247XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlICYmIHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlIHx8ICF0aGlzLnNwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXQgPSB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gVmVjdG9yMy5UcmFuc2Zvcm1Ob3JtYWwodGhpcy5fbG9jYWxEaXJlY3Rpb24sIG1hdCk7XHJcbiAgICAgICAgZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0U3BhdGlhbCgpO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5vcmllbnRhdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0U3BhdGlhbCgpIHtcclxuICAgICAgICB0aGlzLl9zb3VuZFYyLl9pc1NwYXRpYWwgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxEaXN0YW5jZU1vZGVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxEaXN0YW5jZU1vZGVsID0gXCJsaW5lYXJcIjtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLmRpc3RhbmNlTW9kZWwgPSBcImxpbmVhclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsTWF4RGlzdGFuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbE1heERpc3RhbmNlID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwubWF4RGlzdGFuY2UgPSAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVEaXN0YW5jZUZyb21MaXN0ZW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRWMi5fb3V0Tm9kZSAmJiB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlICYmIHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24gJiYgdGhpcy5fc2NlbmUuYWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5fc2NlbmUuYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXJcclxuICAgICAgICAgICAgICAgID8gdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZS5wb3NpdGlvbi5zdWJ0cmFjdCh0aGlzLl9zY2VuZS5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcigpKS5sZW5ndGgoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLmdldERpc3RhbmNlVG9DYW1lcmEodGhpcy5fc2NlbmUuYWN0aXZlQ2FtZXJhKTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi52b2x1bWUgPSB0aGlzLl9jdXN0b21BdHRlbnVhdGlvbkZ1bmN0aW9uKHRoaXMuX3ZvbHVtZSwgZGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UsIHRoaXMucmVmRGlzdGFuY2UsIHRoaXMucm9sbG9mZkZhY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIG5ldyBjdXN0b20gYXR0ZW51YXRpb24gZnVuY3Rpb24gZm9yIHRoZSBzb3VuZC5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBEZWZpbmVzIHRoZSBmdW5jdGlvbiB1c2VkIGZvciB0aGUgYXR0ZW51YXRpb25cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmcteW91ci1vd24tY3VzdG9tLWF0dGVudWF0aW9uLWZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRBdHRlbnVhdGlvbkZ1bmN0aW9uKGNhbGxiYWNrOiAoY3VycmVudFZvbHVtZTogbnVtYmVyLCBjdXJyZW50RGlzdGFuY2U6IG51bWJlciwgbWF4RGlzdGFuY2U6IG51bWJlciwgcmVmRGlzdGFuY2U6IG51bWJlciwgcm9sbG9mZkZhY3RvcjogbnVtYmVyKSA9PiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXN0b21BdHRlbnVhdGlvbkZ1bmN0aW9uID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5IHRoZSBzb3VuZFxyXG4gICAgICogQHBhcmFtIHRpbWUgKG9wdGlvbmFsKSBTdGFydCB0aGUgc291bmQgYWZ0ZXIgWCBzZWNvbmRzLiBTdGFydCBpbW1lZGlhdGVseSAoMCkgYnkgZGVmYXVsdC5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgKG9wdGlvbmFsKSBTdGFydCB0aGUgc291bmQgYXQgYSBzcGVjaWZpYyB0aW1lIGluIHNlY29uZHNcclxuICAgICAqIEBwYXJhbSBsZW5ndGggKG9wdGlvbmFsKSBTb3VuZCBkdXJhdGlvbiAoaW4gc2Vjb25kcylcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXkodGltZT86IG51bWJlciwgb2Zmc2V0PzogbnVtYmVyLCBsZW5ndGg/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0VuZ2luZSA9IEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lO1xyXG4gICAgICAgIGF1ZGlvRW5naW5lPy51bmxvY2soKTtcclxuXHJcbiAgICAgICAgLy8gV2ViQXVkaW8gc291bmQgc291cmNlcyBoYXZlIG5vIGBwbGF5YCBmdW5jdGlvbiBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBwbGF5aW5nLlxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVhZHlUb1BsYXkgJiYgdGhpcy5fc2NlbmUuYXVkaW9FbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBzb3VuZCBjYW4gb25seSByZXN1bWUgZnJvbSBwYXVzZSB3aGVuIHRoZSBgdGltZWAsIGBvZmZzZXRgIGFuZCBgbGVuZ3RoYCBhcmdzIGFyZSBub3Qgc2V0LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc291bmRWMi5zdGF0ZSA9PT0gU291bmRTdGF0ZS5QYXVzZWQgJiYgKHRpbWUgIT09IHVuZGVmaW5lZCB8fCBvZmZzZXQgIT09IHVuZGVmaW5lZCB8fCBsZW5ndGggIT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgVG1wUGxheU9wdGlvbnMuZHVyYXRpb24gPSBsZW5ndGggfHwgMDtcclxuICAgICAgICAgICAgICAgIFRtcFBsYXlPcHRpb25zLnN0YXJ0T2Zmc2V0ID0gb2Zmc2V0ICE9PSB1bmRlZmluZWQgPyBvZmZzZXQgfHwgdGhpcy5fb3B0aW9uc1YyLnN0YXJ0T2Zmc2V0ISA6IHRoaXMuX29wdGlvbnNWMi5zdGFydE9mZnNldCE7XHJcbiAgICAgICAgICAgICAgICBUbXBQbGF5T3B0aW9ucy53YWl0VGltZSA9IHRpbWUgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9FbmdpbmU/LnVubG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc291bmRWMi5wbGF5KFRtcFBsYXlPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBhIGJpdCBmb3IgRkYgYXMgY29udGV4dCBzZWVtcyBsYXRlIHRvIGJlIHJlYWR5LlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fc291bmRWMiBhcyBfV2ViQXVkaW9TdGF0aWNTb3VuZCB8IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kKS5wbGF5KFRtcFBsYXlPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHBsYXkgYXVkaW86IFwiICsgdGhpcy5uYW1lICsgXCIsIFwiICsgZXgubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25lbmRlZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vbmVuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25lbmRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uRW5kZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHRoZSBzb3VuZFxyXG4gICAgICogQHBhcmFtIHRpbWUgKG9wdGlvbmFsKSBTdG9wIHRoZSBzb3VuZCBhZnRlciBYIHNlY29uZHMuIFN0b3AgaW1tZWRpYXRlbHkgKDApIGJ5IGRlZmF1bHQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wKHRpbWU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NvdW5kVjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2ViQXVkaW8gc291bmQgc291cmNlcyBoYXZlIG5vIGBzdG9wYCBmdW5jdGlvbiBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBwbGF5aW5nLlxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVG1wU3RvcE9wdGlvbnMud2FpdFRpbWUgPSB0aW1lIHx8IDA7XHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5zdG9wKFRtcFN0b3BPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFB1dCB0aGUgc291bmQgaW4gcGF1c2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc291bmRWMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZWJBdWRpbyBzb3VuZCBzb3VyY2VzIGhhdmUgbm8gYHBhdXNlYCBmdW5jdGlvbiBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBwbGF5aW5nLlxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU291bmRTb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhIGRlZGljYXRlZCB2b2x1bWUgZm9yIHRoaXMgc291bmRzXHJcbiAgICAgKiBAcGFyYW0gbmV3Vm9sdW1lIERlZmluZSB0aGUgbmV3IHZvbHVtZSBvZiB0aGUgc291bmRcclxuICAgICAqIEBwYXJhbSB0aW1lIERlZmluZSB0aW1lIGZvciBncmFkdWFsIGNoYW5nZSB0byBuZXcgdm9sdW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWb2x1bWUobmV3Vm9sdW1lOiBudW1iZXIsIHRpbWU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVhZHkuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZvbHVtZShuZXdWb2x1bWUsIHRpbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVG1wUmFtcE9wdGlvbnMuZHVyYXRpb24gPSB0aW1lIHx8IDA7XHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5zZXRWb2x1bWUobmV3Vm9sdW1lLCBUbXBSYW1wT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fdm9sdW1lID0gbmV3Vm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBzb3VuZCBwbGF5IGJhY2sgcmF0ZVxyXG4gICAgICogQHBhcmFtIG5ld1BsYXliYWNrUmF0ZSBEZWZpbmUgdGhlIHBsYXliYWNrIHJhdGUgdGhlIHNvdW5kIHNob3VsZCBiZSBwbGF5ZWQgYXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBsYXliYWNrUmF0ZShuZXdQbGF5YmFja1JhdGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5wbGF5YmFja1JhdGUgPSBuZXdQbGF5YmFja1JhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc291bmQgcGxheSBiYWNrIHJhdGUuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgIHBsYXkgYmFjayByYXRlIG9mIHRoZSBzb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UGxheWJhY2tSYXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMi5wbGF5YmFja1JhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZvbHVtZSBvZiB0aGUgc291bmQuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgdm9sdW1lIG9mIHRoZSBzb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Vm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCB0aGUgc291bmQgdG8gYSBkZWRpY2F0ZWQgbWVzaFxyXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybU5vZGUgVGhlIHRyYW5zZm9ybSBub2RlIHRvIGNvbm5lY3QgdGhlIHNvdW5kIHdpdGhcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jYXR0YWNoaW5nLWEtc291bmQtdG8tYS1tZXNoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdHRhY2hUb01lc2godHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlICYmIHRoaXMuX3JlZ2lzdGVyRnVuYykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLnVucmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRoaXMuX3JlZ2lzdGVyRnVuYyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyRnVuYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgPSB0cmFuc2Zvcm1Ob2RlO1xyXG4gICAgICAgIGlmICghdGhpcy5zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF0aWFsU291bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcgJiYgdGhpcy5sb29wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheSgwLCB0aGlzLl9vcHRpb25zVjIuc3RhcnRPZmZzZXQsIHRoaXMuX29wdGlvbnNWMi5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25SZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJGdW5jID0gKHRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHRoaXMuX29uUmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRyYW5zZm9ybU5vZGUpO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUucmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRoaXMuX3JlZ2lzdGVyRnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggdGhlIHNvdW5kIGZyb20gdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgbWVzaFxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNhdHRhY2hpbmctYS1zb3VuZC10by1hLW1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRldGFjaEZyb21NZXNoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlICYmIHRoaXMuX3JlZ2lzdGVyRnVuYykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLnVucmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKHRoaXMuX3JlZ2lzdGVyRnVuYyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyRnVuYyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vblJlZ2lzdGVyQWZ0ZXJXb3JsZE1hdHJpeFVwZGF0ZShub2RlOiBUcmFuc2Zvcm1Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCEoPGFueT5ub2RlKS5nZXRCb3VuZGluZ0luZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihub2RlLmFic29sdXRlUG9zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBub2RlIGFzIEFic3RyYWN0TWVzaDtcclxuICAgICAgICAgICAgY29uc3QgYm91bmRpbmdJbmZvID0gbWVzaC5nZXRCb3VuZGluZ0luZm8oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihib3VuZGluZ0luZm8uYm91bmRpbmdTcGhlcmUuY2VudGVyV29ybGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNEaXJlY3Rpb25hbCAmJiB0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVEaXJlY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9uZSB0aGUgY3VycmVudCBzb3VuZCBpbiB0aGUgc2NlbmUuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3IHNvdW5kIGNsb25lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBOdWxsYWJsZTxTb3VuZD4ge1xyXG4gICAgICAgIGlmICghKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9uczogSVNvdW5kT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRoaXMuYXV0b3BsYXksXHJcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcCxcclxuICAgICAgICAgICAgdm9sdW1lOiB0aGlzLl92b2x1bWUsXHJcbiAgICAgICAgICAgIHNwYXRpYWxTb3VuZDogdGhpcy5zcGF0aWFsU291bmQsXHJcbiAgICAgICAgICAgIG1heERpc3RhbmNlOiB0aGlzLm1heERpc3RhbmNlLFxyXG4gICAgICAgICAgICB1c2VDdXN0b21BdHRlbnVhdGlvbjogdGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbixcclxuICAgICAgICAgICAgcm9sbG9mZkZhY3RvcjogdGhpcy5yb2xsb2ZmRmFjdG9yLFxyXG4gICAgICAgICAgICByZWZEaXN0YW5jZTogdGhpcy5yZWZEaXN0YW5jZSxcclxuICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogdGhpcy5kaXN0YW5jZU1vZGVsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY2xvbmVkU291bmQgPSBuZXcgU291bmQodGhpcy5uYW1lICsgXCJfY2xvbmVkXCIsIHRoaXMuX3NvdW5kVjIuYnVmZmVyLCB0aGlzLl9zY2VuZSwgbnVsbCwgY3VycmVudE9wdGlvbnMpO1xyXG4gICAgICAgIChjbG9uZWRTb3VuZC5fb3B0aW9uc1YyIGFzIGFueSkgPSB0aGlzLl9vcHRpb25zVjI7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgY2xvbmVkU291bmQuc2V0QXR0ZW51YXRpb25GdW5jdGlvbih0aGlzLl9jdXN0b21BdHRlbnVhdGlvbkZ1bmN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsb25lZFNvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCB1bmRlcmx5aW5nIGF1ZGlvIGJ1ZmZlciBjb250YWluaW5nIHRoZSBkYXRhXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgYXVkaW8gYnVmZmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBdWRpb0J1ZmZlcigpOiBOdWxsYWJsZTxBdWRpb0J1ZmZlcj4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU3RhdGljU291bmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIuYnVmZmVyLl9hdWRpb0J1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBXZWJBdWRpbyBBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIGxldHMgeW91IGtlZXAgdHJhY2sgb2YgYW5kIHN0b3AgaW5zdGFuY2VzIG9mIHRoaXMgU291bmQuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgc291cmNlIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNvdW5kU291cmNlKCk6IE51bGxhYmxlPEF1ZGlvQnVmZmVyU291cmNlTm9kZT4ge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9zb3VuZFNvdXJjZTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIFdlYkF1ZGlvIEdhaW5Ob2RlLCBnaXZlcyB5b3UgcHJlY2lzZSBjb250cm9sIG92ZXIgdGhlIGdhaW4gb2YgaW5zdGFuY2VzIG9mIHRoaXMgU291bmQuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZ2FpbiBub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTb3VuZEdhaW4oKTogTnVsbGFibGU8R2Fpbk5vZGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMi5fb3V0Tm9kZSBhcyBHYWluTm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhlIFNvdW5kIGluIGEgSlNPTiByZXByZXNlbnRhdGlvblxyXG4gICAgICogQHJldHVybnMgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgdXJsOiB0aGlzLl91cmwsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5LFxyXG4gICAgICAgICAgICBsb29wOiB0aGlzLmxvb3AsXHJcbiAgICAgICAgICAgIHZvbHVtZTogdGhpcy5fdm9sdW1lLFxyXG4gICAgICAgICAgICBzcGF0aWFsU291bmQ6IHRoaXMuc3BhdGlhbFNvdW5kLFxyXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogdGhpcy5tYXhEaXN0YW5jZSxcclxuICAgICAgICAgICAgcm9sbG9mZkZhY3RvcjogdGhpcy5yb2xsb2ZmRmFjdG9yLFxyXG4gICAgICAgICAgICByZWZEaXN0YW5jZTogdGhpcy5yZWZEaXN0YW5jZSxcclxuICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogdGhpcy5kaXN0YW5jZU1vZGVsLFxyXG4gICAgICAgICAgICBwbGF5YmFja1JhdGU6IHRoaXMuZ2V0UGxheWJhY2tSYXRlKCksXHJcbiAgICAgICAgICAgIHBhbm5pbmdNb2RlbDogdGhpcy5fc291bmRWMi5zcGF0aWFsLnBhbm5pbmdNb2RlbCxcclxuICAgICAgICAgICAgc291bmRUcmFja0lkOiB0aGlzLnNvdW5kVHJhY2tJZCxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMubWV0YWRhdGEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbm5lY3RlZE1lc2hJZCA9IHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucG9zaXRpb24gPSB0aGlzLl9zb3VuZFYyLnNwYXRpYWwucG9zaXRpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnJlZkRpc3RhbmNlID0gdGhpcy5yZWZEaXN0YW5jZTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kaXN0YW5jZU1vZGVsID0gdGhpcy5kaXN0YW5jZU1vZGVsO1xyXG5cclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5pc0RpcmVjdGlvbmFsID0gdGhpcy5faXNEaXJlY3Rpb25hbDtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5sb2NhbERpcmVjdGlvblRvTWVzaCA9IHRoaXMuX2xvY2FsRGlyZWN0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25lSW5uZXJBbmdsZSA9IHRoaXMuZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25lT3V0ZXJBbmdsZSA9IHRoaXMuZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25lT3V0ZXJHYWluID0gdGhpcy5fc291bmRWMi5zcGF0aWFsLmNvbmVPdXRlclZvbHVtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIGEgc291bmQgdG8gaW5zdGFudGlhdGUgaW4gYSBnaXZlbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFNvdW5kIERlZmluZSB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgc291bmQgKHVzdWFsbHkgY29taW5nIGZyb20gdGhlIHNlcmlhbGl6ZSBtZXRob2QpXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgRGVmaW5lIHRoZSBzY2VuZSB0aGUgbmV3IHBhcnNlZCBzb3VuZCBzaG91bGQgYmUgY3JlYXRlZCBpblxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgRGVmaW5lIHRoZSByb290dXJsIG9mIHRoZSBsb2FkIGluIGNhc2Ugd2UgbmVlZCB0byBmZXRjaCByZWxhdGl2ZSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEBwYXJhbSBzb3VyY2VTb3VuZCBEZWZpbmUgYSBzb3VuZCBwbGFjZSBob2xkZXIgaWYgZG8gbm90IG5lZWQgdG8gaW5zdGFudGlhdGUgYSBuZXcgb25lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3bHkgcGFyc2VkIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUGFyc2UocGFyc2VkU291bmQ6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcsIHNvdXJjZVNvdW5kPzogU291bmQpOiBTb3VuZCB7XHJcbiAgICAgICAgY29uc3Qgc291bmROYW1lID0gcGFyc2VkU291bmQubmFtZTtcclxuICAgICAgICBsZXQgc291bmRVcmw7XHJcbiAgICAgICAgaWYgKHBhcnNlZFNvdW5kLnVybCkge1xyXG4gICAgICAgICAgICBzb3VuZFVybCA9IHJvb3RVcmwgKyBwYXJzZWRTb3VuZC51cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc291bmRVcmwgPSByb290VXJsICsgc291bmROYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdXRvcGxheTogcGFyc2VkU291bmQuYXV0b3BsYXksXHJcbiAgICAgICAgICAgIGxvb3A6IHBhcnNlZFNvdW5kLmxvb3AsXHJcbiAgICAgICAgICAgIHZvbHVtZTogcGFyc2VkU291bmQudm9sdW1lLFxyXG4gICAgICAgICAgICBzcGF0aWFsU291bmQ6IHBhcnNlZFNvdW5kLnNwYXRpYWxTb3VuZCxcclxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IHBhcnNlZFNvdW5kLm1heERpc3RhbmNlLFxyXG4gICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiBwYXJzZWRTb3VuZC5yb2xsb2ZmRmFjdG9yLFxyXG4gICAgICAgICAgICByZWZEaXN0YW5jZTogcGFyc2VkU291bmQucmVmRGlzdGFuY2UsXHJcbiAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHBhcnNlZFNvdW5kLmRpc3RhbmNlTW9kZWwsXHJcbiAgICAgICAgICAgIHBsYXliYWNrUmF0ZTogcGFyc2VkU291bmQucGxheWJhY2tSYXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG5ld1NvdW5kOiBTb3VuZDtcclxuICAgICAgICBpZiAoIXNvdXJjZVNvdW5kKSB7XHJcbiAgICAgICAgICAgIG5ld1NvdW5kID0gbmV3IFNvdW5kKFxyXG4gICAgICAgICAgICAgICAgc291bmROYW1lLFxyXG4gICAgICAgICAgICAgICAgc291bmRVcmwsXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW1vdmVQZW5kaW5nRGF0YShuZXdTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRQZW5kaW5nRGF0YShuZXdTb3VuZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0QnVmZmVyQW5kUnVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgX1JldHJ5V2l0aEludGVydmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHNvdXJjZVNvdW5kLl9pc1JlYWR5VG9QbGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXVkaW9CdWZmZXIgPSBzb3VyY2VTb3VuZC5nZXRBdWRpb0J1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXVkaW9CdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NvdW5kLnNldEF1ZGlvQnVmZmVyKGF1ZGlvQnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTb3VuZC5faXNSZWFkeVRvUGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdTb3VuZC5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U291bmQucGxheSgwLCBzb3VyY2VTb3VuZC5fb3B0aW9uc1YyLnN0YXJ0T2Zmc2V0LCBzb3VyY2VTb3VuZC5fb3B0aW9uc1YyLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3U291bmQgPSBuZXcgU291bmQoc291bmROYW1lLCBuZXcgQXJyYXlCdWZmZXIoMCksIHNjZW5lLCBudWxsLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc2V0QnVmZmVyQW5kUnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJzZWRTb3VuZC5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VuZFBvc2l0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXkocGFyc2VkU291bmQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBuZXdTb3VuZC5zZXRQb3NpdGlvbihzb3VuZFBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcnNlZFNvdW5kLmlzRGlyZWN0aW9uYWwpIHtcclxuICAgICAgICAgICAgbmV3U291bmQuc2V0RGlyZWN0aW9uYWxDb25lKHBhcnNlZFNvdW5kLmNvbmVJbm5lckFuZ2xlIHx8IDM2MCwgcGFyc2VkU291bmQuY29uZU91dGVyQW5nbGUgfHwgMzYwLCBwYXJzZWRTb3VuZC5jb25lT3V0ZXJHYWluIHx8IDApO1xyXG4gICAgICAgICAgICBpZiAocGFyc2VkU291bmQubG9jYWxEaXJlY3Rpb25Ub01lc2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsRGlyZWN0aW9uVG9NZXNoID0gVmVjdG9yMy5Gcm9tQXJyYXkocGFyc2VkU291bmQubG9jYWxEaXJlY3Rpb25Ub01lc2gpO1xyXG4gICAgICAgICAgICAgICAgbmV3U291bmQuc2V0TG9jYWxEaXJlY3Rpb25Ub01lc2gobG9jYWxEaXJlY3Rpb25Ub01lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJzZWRTb3VuZC5jb25uZWN0ZWRNZXNoSWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGVkTWVzaCA9IHNjZW5lLmdldE1lc2hCeUlkKHBhcnNlZFNvdW5kLmNvbm5lY3RlZE1lc2hJZCk7XHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0ZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTb3VuZC5hdHRhY2hUb01lc2goY29ubmVjdGVkTWVzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcnNlZFNvdW5kLm1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG5ld1NvdW5kLm1ldGFkYXRhID0gcGFyc2VkU291bmQubWV0YWRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTb3VuZDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUmVnaXN0ZXIgQ2xhc3MgTmFtZVxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5Tb3VuZFwiLCBTb3VuZCk7XHJcbiIsImltcG9ydCB0eXBlIHsgU291bmQgfSBmcm9tIFwiLi9zb3VuZFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuYWx5c2VyIH0gZnJvbSBcIi4vYW5hbHlzZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RFbmdpbmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2Fic3RyYWN0RW5naW5lXCI7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBhbGxvd2VkIGR1cmluZyB0aGUgY3JlYXRpb24gb2YgYSBzb3VuZCB0cmFjay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNvdW5kVHJhY2tPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHZvbHVtZSB0aGUgc291bmQgdHJhY2sgc2hvdWxkIHRha2UgZHVyaW5nIGNyZWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHZvbHVtZT86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIGlmIHRoZSBzb3VuZCB0cmFjayBpcyB0aGUgbWFpbiBzb3VuZCB0cmFjayBvZiB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgbWFpblRyYWNrPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEl0IGNvdWxkIGJlIHVzZWZ1bCB0byBpc29sYXRlIHlvdXIgbXVzaWMgJiBzb3VuZHMgb24gc2V2ZXJhbCB0cmFja3MgdG8gYmV0dGVyIG1hbmFnZSB2b2x1bWUgb24gYSBncm91cGVkIGluc3RhbmNlIG9mIHNvdW5kcy5cclxuICogSXQgd2lsbCBiZSBhbHNvIHVzZWQgaW4gYSBmdXR1cmUgcmVsZWFzZSB0byBhcHBseSBlZmZlY3RzIG9uIGEgc3BlY2lmaWMgdHJhY2suXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyN1c2luZy1zb3VuZC10cmFja3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTb3VuZFRyYWNrIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBzb3VuZCB0cmFjayBpbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZDogbnVtYmVyID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIHNvdW5kcyBpbmNsdWRlZCBpbiB0aGUgc291bmQgdHJhY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VuZENvbGxlY3Rpb246IEFycmF5PFNvdW5kPjtcclxuXHJcbiAgICBwcml2YXRlIF9vdXRwdXRBdWRpb05vZGU6IE51bGxhYmxlPEdhaW5Ob2RlPjtcclxuICAgIHByaXZhdGUgX3NjZW5lOiBTY2VuZTtcclxuICAgIHByaXZhdGUgX2Nvbm5lY3RlZEFuYWx5c2VyOiBBbmFseXNlcjtcclxuICAgIHByaXZhdGUgX29wdGlvbnM6IElTb3VuZFRyYWNrT3B0aW9ucztcclxuICAgIHByaXZhdGUgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgc291bmQgdHJhY2suXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9hdWRpby9wbGF5aW5nU291bmRzTXVzaWMjdXNpbmctc291bmQtdHJhY2tzXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgRGVmaW5lIHRoZSBzY2VuZSB0aGUgc291bmQgdHJhY2sgYmVsb25ncyB0b1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU/OiBOdWxsYWJsZTxTY2VuZT4sIG9wdGlvbnM6IElTb3VuZFRyYWNrT3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgc2NlbmUgPSBzY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuc291bmRDb2xsZWN0aW9uID0gW107XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5tYWluVHJhY2sgJiYgdGhpcy5fc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUuc291bmRUcmFja3MucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuX3NjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRpYWxpemVTb3VuZFRyYWNrQXVkaW9HcmFwaCgpIHtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUuY29ubmVjdChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5tYXN0ZXJHYWluKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy52b2x1bWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX29wdGlvbnMudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxlYXNlIHRoZSBzb3VuZCB0cmFjayBhbmQgaXRzIGFzc29jaWF0ZWQgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZSAmJiBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5jYW5Vc2VXZWJBdWRpbykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkQW5hbHlzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyLnN0b3BEZWJ1Z0NhbnZhcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291bmRDb2xsZWN0aW9uWzBdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3V0cHV0QXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHNvdW5kIHRvIHRoaXMgc291bmQgdHJhY2tcclxuICAgICAqIEBwYXJhbSBzb3VuZCBkZWZpbmUgdGhlIHNvdW5kIHRvIGFkZFxyXG4gICAgICogQGlnbm9yZU5hbWluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkU291bmQoc291bmQ6IFNvdW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVTb3VuZFRyYWNrQXVkaW9HcmFwaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIHRoaXMuX291dHB1dEF1ZGlvTm9kZSkge1xyXG4gICAgICAgICAgICBzb3VuZC5jb25uZWN0VG9Tb3VuZFRyYWNrQXVkaW9Ob2RlKHRoaXMuX291dHB1dEF1ZGlvTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3VuZC5zb3VuZFRyYWNrSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoc291bmQuc291bmRUcmFja0lkID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NlbmUubWFpblNvdW5kVHJhY2sucmVtb3ZlU291bmQoc291bmQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZS5zb3VuZFRyYWNrc1tzb3VuZC5zb3VuZFRyYWNrSWRdLnJlbW92ZVNvdW5kKHNvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zb3VuZENvbGxlY3Rpb24ucHVzaChzb3VuZCk7XHJcbiAgICAgICAgc291bmQuc291bmRUcmFja0lkID0gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBzb3VuZCB0byB0aGlzIHNvdW5kIHRyYWNrXHJcbiAgICAgKiBAcGFyYW0gc291bmQgZGVmaW5lIHRoZSBzb3VuZCB0byByZW1vdmVcclxuICAgICAqIEBpZ25vcmVOYW1pbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVNvdW5kKHNvdW5kOiBTb3VuZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zb3VuZENvbGxlY3Rpb24uaW5kZXhPZihzb3VuZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQ29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIGdsb2JhbCB2b2x1bWUgZm9yIHRoZSBmdWxsIHNvdW5kIHRyYWNrLlxyXG4gICAgICogQHBhcmFtIG5ld1ZvbHVtZSBEZWZpbmUgdGhlIG5ldyB2b2x1bWUgb2YgdGhlIHNvdW5kIHRyYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWb2x1bWUobmV3Vm9sdW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIHRoaXMuX291dHB1dEF1ZGlvTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUuZ2Fpbi52YWx1ZSA9IG5ld1ZvbHVtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdGhlIHBhbm5pbmcgbW9kZWwgdG8gSFJURjpcclxuICAgICAqIFJlbmRlcnMgYSBzdGVyZW8gb3V0cHV0IG9mIGhpZ2hlciBxdWFsaXR5IHRoYW4gZXF1YWxwb3dlciDigJQgaXQgdXNlcyBhIGNvbnZvbHV0aW9uIHdpdGggbWVhc3VyZWQgaW1wdWxzZSByZXNwb25zZXMgZnJvbSBodW1hbiBzdWJqZWN0cy5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3aXRjaFBhbm5pbmdNb2RlbFRvSFJURigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291bmRDb2xsZWN0aW9uW2ldLnN3aXRjaFBhbm5pbmdNb2RlbFRvSFJURigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIHRoZSBwYW5uaW5nIG1vZGVsIHRvIEVxdWFsIFBvd2VyOlxyXG4gICAgICogUmVwcmVzZW50cyB0aGUgZXF1YWwtcG93ZXIgcGFubmluZyBhbGdvcml0aG0sIGdlbmVyYWxseSByZWdhcmRlZCBhcyBzaW1wbGUgYW5kIGVmZmljaWVudC4gZXF1YWxwb3dlciBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3aXRjaFBhbm5pbmdNb2RlbFRvRXF1YWxQb3dlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291bmRDb2xsZWN0aW9uW2ldLnN3aXRjaFBhbm5pbmdNb2RlbFRvRXF1YWxQb3dlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdCB0aGUgc291bmQgdHJhY2sgdG8gYW4gYXVkaW8gYW5hbHlzZXIgYWxsb3dpbmcgc29tZSBhbWF6aW5nXHJcbiAgICAgKiBzeW5jaHJvbml6YXRpb24gYmV0d2VlbiB0aGUgc291bmRzL211c2ljIGFuZCB5b3VyIHZpc3VhbGl6YXRpb24gKFZ1TWV0ZXIgZm9yIGluc3RhbmNlKS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyN1c2luZy10aGUtYW5hbHlzZXJcclxuICAgICAqIEBwYXJhbSBhbmFseXNlciBUaGUgYW5hbHlzZXIgdG8gY29ubmVjdCB0byB0aGUgZW5naW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25uZWN0VG9BbmFseXNlcihhbmFseXNlcjogQW5hbHlzZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkQW5hbHlzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkQW5hbHlzZXIuc3RvcERlYnVnQ2FudmFzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZEFuYWx5c2VyID0gYW5hbHlzZXI7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbyAmJiB0aGlzLl9vdXRwdXRBdWRpb05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkQW5hbHlzZXIuY29ubmVjdEF1ZGlvTm9kZXModGhpcy5fb3V0cHV0QXVkaW9Ob2RlLCBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZS5tYXN0ZXJHYWluKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBTb3VuZCB9IGZyb20gXCIuLi9BdWRpby9zb3VuZFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTWlzYy9sb2dnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBvbmUgb3IgbW9yZSBTb3VuZCBvYmplY3RzIGFuZCBzZWxlY3RzIG9uZSB3aXRoIHJhbmRvbSB3ZWlnaHQgZm9yIHBsYXliYWNrLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdlaWdodGVkU291bmQge1xyXG4gICAgLyoqIFdoZW4gdHJ1ZSBhIFNvdW5kIHdpbGwgYmUgc2VsZWN0ZWQgYW5kIHBsYXllZCB3aGVuIHRoZSBjdXJyZW50IHBsYXlpbmcgU291bmQgY29tcGxldGVzLiAqL1xyXG4gICAgcHVibGljIGxvb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2NvbmVJbm5lckFuZ2xlOiBudW1iZXIgPSAzNjA7XHJcbiAgICBwcml2YXRlIF9jb25lT3V0ZXJBbmdsZTogbnVtYmVyID0gMzYwO1xyXG4gICAgcHJpdmF0ZSBfdm9sdW1lOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqIEEgU291bmQgaXMgY3VycmVudGx5IHBsYXlpbmcuICovXHJcbiAgICBwdWJsaWMgaXNQbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogQSBTb3VuZCBpcyBjdXJyZW50bHkgcGF1c2VkLiAqL1xyXG4gICAgcHVibGljIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfc291bmRzOiBTb3VuZFtdID0gW107XHJcbiAgICBwcml2YXRlIF93ZWlnaHRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudEluZGV4PzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBXZWlnaHRlZFNvdW5kIGZyb20gdGhlIGxpc3Qgb2Ygc291bmRzIGdpdmVuLlxyXG4gICAgICogQHBhcmFtIGxvb3AgV2hlbiB0cnVlIGEgU291bmQgd2lsbCBiZSBzZWxlY3RlZCBhbmQgcGxheWVkIHdoZW4gdGhlIGN1cnJlbnQgcGxheWluZyBTb3VuZCBjb21wbGV0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc291bmRzIEFycmF5IG9mIFNvdW5kcyB0aGF0IHdpbGwgYmUgc2VsZWN0ZWQgZnJvbS5cclxuICAgICAqIEBwYXJhbSB3ZWlnaHRzIEFycmF5IG9mIG51bWJlciB2YWx1ZXMgZm9yIHNlbGVjdGlvbiB3ZWlnaHRzOyBsZW5ndGggbXVzdCBlcXVhbCBzb3VuZHMsIHZhbHVlcyB3aWxsIGJlIG5vcm1hbGl6ZWQgdG8gMVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb29wOiBib29sZWFuLCBzb3VuZHM6IFNvdW5kW10sIHdlaWdodHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgaWYgKHNvdW5kcy5sZW5ndGggIT09IHdlaWdodHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvdW5kcyBsZW5ndGggZG9lcyBub3QgZXF1YWwgd2VpZ2h0cyBsZW5ndGhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMuX3dlaWdodHMgPSB3ZWlnaHRzO1xyXG4gICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgd2VpZ2h0c1xyXG4gICAgICAgIGxldCB3ZWlnaHRTdW0gPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3Qgd2VpZ2h0IG9mIHdlaWdodHMpIHtcclxuICAgICAgICAgICAgd2VpZ2h0U3VtICs9IHdlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW52V2VpZ2h0U3VtID0gd2VpZ2h0U3VtID4gMCA/IDEgLyB3ZWlnaHRTdW0gOiAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2VpZ2h0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWlnaHRzW2ldICo9IGludldlaWdodFN1bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc291bmRzID0gc291bmRzO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgdGhpcy5fc291bmRzKSB7XHJcbiAgICAgICAgICAgIHNvdW5kLm9uRW5kZWRPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbmVuZGVkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzaXplIG9mIGNvbmUgaW4gZGVncmVlcyBmb3IgYSBkaXJlY3Rpb25hbCBzb3VuZCBpbiB3aGljaCB0aGVyZSB3aWxsIGJlIG5vIGF0dGVudWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZUlubmVyQW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2l6ZSBvZiBjb25lIGluIGRlZ3JlZXMgZm9yIGEgZGlyZWN0aW9uYWwgc291bmQgaW4gd2hpY2ggdGhlcmUgd2lsbCBiZSBubyBhdHRlbnVhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvbmVJbm5lckFuZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25lT3V0ZXJBbmdsZSA8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlOiBvdXRlciBhbmdsZSBvZiB0aGUgY29uZSBtdXN0IGJlIHN1cGVyaW9yIG9yIGVxdWFsIHRvIHRoZSBpbm5lciBhbmdsZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmVJbm5lckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgdGhpcy5fc291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5kaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaXplIG9mIGNvbmUgaW4gZGVncmVlcyBmb3IgYSBkaXJlY3Rpb25hbCBzb3VuZCBvdXRzaWRlIG9mIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gc291bmQuXHJcbiAgICAgKiBMaXN0ZW5lciBhbmdsZXMgYmV0d2VlbiBpbm5lckFuZ2xlIGFuZCBvdXRlckFuZ2xlIHdpbGwgZmFsbG9mZiBsaW5lYXJseS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmVPdXRlckFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2l6ZSBvZiBjb25lIGluIGRlZ3JlZXMgZm9yIGEgZGlyZWN0aW9uYWwgc291bmQgb3V0c2lkZSBvZiB3aGljaCB0aGVyZSB3aWxsIGJlIG5vIHNvdW5kLlxyXG4gICAgICogTGlzdGVuZXIgYW5nbGVzIGJldHdlZW4gaW5uZXJBbmdsZSBhbmQgb3V0ZXJBbmdsZSB3aWxsIGZhbGxvZmYgbGluZWFybHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9jb25lT3V0ZXJBbmdsZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCB0aGlzLl9jb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZTogb3V0ZXIgYW5nbGUgb2YgdGhlIGNvbmUgbXVzdCBiZSBzdXBlcmlvciBvciBlcXVhbCB0byB0aGUgaW5uZXIgYW5nbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jb25lT3V0ZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIHRoaXMuX3NvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgc291bmQuZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxheWJhY2sgdm9sdW1lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92b2x1bWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5YmFjayB2b2x1bWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZvbHVtZSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIHRoaXMuX3NvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgc291bmQuc2V0Vm9sdW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbmVuZGVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZHNbdGhpcy5fY3VycmVudEluZGV4XS5hdXRvcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb29wICYmIHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VzcGVuZCBwbGF5YmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kc1t0aGlzLl9jdXJyZW50SW5kZXhdLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHBsYXliYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kc1t0aGlzLl9jdXJyZW50SW5kZXhdLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBwbGF5YmFjay5cclxuICAgICAqIEBwYXJhbSBzdGFydE9mZnNldCBQb3NpdGlvbiB0aGUgY2xpcCBoZWFkIGF0IGEgc3BlY2lmaWMgdGltZSBpbiBzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheShzdGFydE9mZnNldD86IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tVmFsdWUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3dlaWdodHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHRoaXMuX3dlaWdodHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tVmFsdWUgPD0gdG90YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNvdW5kID0gdGhpcy5fc291bmRzW3RoaXMuX2N1cnJlbnRJbmRleCA/PyAwXTtcclxuICAgICAgICBpZiAoc291bmQuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHNvdW5kLnBsYXkoMCwgdGhpcy5pc1BhdXNlZCA/IHVuZGVmaW5lZCA6IHN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VuZC5hdXRvcGxheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEF1ZGlvTm9kZSB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0QXVkaW9Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IElTb3VuZFNvdXJjZU9wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFNvdW5kU291cmNlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RTb3VuZFNvdXJjZVwiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdFNwYXRpYWxBdWRpbyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL3N1YlByb3BlcnRpZXMvYWJzdHJhY3RTcGF0aWFsQXVkaW9cIjtcbmltcG9ydCB7IF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX1N0ZXJlb0F1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9zdGVyZW9BdWRpb1wiO1xuaW1wb3J0IHsgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB9IGZyb20gXCIuL3N1Yk5vZGVzL3dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaFwiO1xuaW1wb3J0IHsgX1NwYXRpYWxXZWJBdWRpbyB9IGZyb20gXCIuL3N1YlByb3BlcnRpZXMvc3BhdGlhbFdlYkF1ZGlvXCI7XG5pbXBvcnQgdHlwZSB7IF9XZWJBdWRpb0VuZ2luZSB9IGZyb20gXCIuL3dlYkF1ZGlvRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IElXZWJBdWRpb0luTm9kZSB9IGZyb20gXCIuL3dlYkF1ZGlvTm9kZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1dlYkF1ZGlvU291bmRTb3VyY2UgZXh0ZW5kcyBBYnN0cmFjdFNvdW5kU291cmNlIHtcbiAgICBwcml2YXRlIF9zdGVyZW86IE51bGxhYmxlPF9TdGVyZW9BdWRpbz4gPSBudWxsO1xuXG4gICAgcHJvdGVjdGVkIF9zdWJHcmFwaDogX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaDtcbiAgICBwcm90ZWN0ZWQgX3dlYkF1ZGlvTm9kZTogQXVkaW9Ob2RlO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBfYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQgfCBPZmZsaW5lQXVkaW9Db250ZXh0O1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB3ZWJBdWRpb05vZGU6IEF1ZGlvTm9kZSwgZW5naW5lOiBfV2ViQXVkaW9FbmdpbmUsIG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSB0aGlzLmVuZ2luZS5fYXVkaW9Db250ZXh0O1xuICAgICAgICB0aGlzLl93ZWJBdWRpb05vZGUgPSB3ZWJBdWRpb05vZGU7XG5cbiAgICAgICAgdGhpcy5fc3ViR3JhcGggPSBuZXcgX1dlYkF1ZGlvU291bmRTb3VyY2UuX1N1YkdyYXBoKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2luaXRBc3luYyhvcHRpb25zOiBQYXJ0aWFsPElTb3VuZFNvdXJjZU9wdGlvbnM+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmIChvcHRpb25zLm91dEJ1cykge1xuICAgICAgICAgICAgdGhpcy5vdXRCdXMgPSBvcHRpb25zLm91dEJ1cztcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm91dEJ1c0F1dG9EZWZhdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5lbmdpbmUuaXNSZWFkeVByb21pc2U7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IHRoaXMuZW5naW5lLmRlZmF1bHRNYWluQnVzO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fc3ViR3JhcGguaW5pdEFzeW5jKG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChfSGFzU3BhdGlhbEF1ZGlvT3B0aW9ucyhvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWxQcm9wZXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX2FkZE5vZGUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlYkF1ZGlvTm9kZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfb3V0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YkdyYXBoLl9vdXROb2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0IHN0ZXJlbygpOiBfU3RlcmVvQXVkaW8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcmVvID8/ICh0aGlzLl9zdGVyZW8gPSBuZXcgX1N0ZXJlb0F1ZGlvKHRoaXMuX3N1YkdyYXBoKSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5fc3RlcmVvID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaC5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX3JlbW92ZU5vZGUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiX1dlYkF1ZGlvU291bmRTb3VyY2VcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgd3JhcHBlZCBub2RlIGlzIG5vdCBhdmFpbGFibGUgbm93LCBpdCB3aWxsIGJlIGNvbm5lY3RlZCBsYXRlciBieSB0aGUgc3ViZ3JhcGguXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmNvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfZGlzY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlzY29ubmVjdGVkID0gc3VwZXIuX2Rpc2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFkaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLl9pbk5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dE5vZGU/LmRpc2Nvbm5lY3Qobm9kZS5faW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY3JlYXRlU3BhdGlhbFByb3BlcnR5KGF1dG9VcGRhdGU6IGJvb2xlYW4sIG1pblVwZGF0ZVRpbWU6IG51bWJlcik6IEFic3RyYWN0U3BhdGlhbEF1ZGlvIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfU3BhdGlhbFdlYkF1ZGlvKHRoaXMuX3N1YkdyYXBoLCBhdXRvVXBkYXRlLCBtaW5VcGRhdGVUaW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfU3ViR3JhcGggPSBjbGFzcyBleHRlbmRzIF9XZWJBdWRpb0J1c0FuZFNvdW5kU3ViR3JhcGgge1xuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX293bmVyOiBfV2ViQXVkaW9Tb3VuZFNvdXJjZTtcblxuICAgICAgICBwcm90ZWN0ZWQgZ2V0IF9kb3duc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl9kb3duc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX3Vwc3RyZWFtTm9kZXMoKTogTnVsbGFibGU8U2V0PEFic3RyYWN0QXVkaW9Ob2RlPj4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyLl91cHN0cmVhbU5vZGVzID8/IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX29uU3ViTm9kZXNDaGFuZ2VkKCk6IHZvaWQge1xuICAgICAgICAgICAgc3VwZXIuX29uU3ViTm9kZXNDaGFuZ2VkKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX293bmVyLl9pbk5vZGUuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3duZXIuX3N1YkdyYXBoLl9pbk5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vd25lci5faW5Ob2RlLmNvbm5lY3QodGhpcy5fb3duZXIuX3N1YkdyYXBoLl9pbk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uR3JvdXAgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkdyb3VwXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25FdmVudFwiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCJjb3JlL0F1ZGlvL3NvdW5kXCI7XHJcbmltcG9ydCB7IFdlaWdodGVkU291bmQgfSBmcm9tIFwiY29yZS9BdWRpby93ZWlnaHRlZHNvdW5kXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElBcnJheUl0ZW0sIElTY2VuZSwgSU5vZGUsIElBbmltYXRpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlckV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IEdMVEZMb2FkZXIsIEFycmF5SXRlbSB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSU1TRlRBdWRpb0VtaXR0ZXJfQ2xpcCwgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlciwgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2UsIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbiB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuXHJcbmltcG9ydCBcImNvcmUvQXVkaW8vYXVkaW9TY2VuZUNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiTVNGVF9hdWRpb19lbWl0dGVyXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgTVNGVF9hdWRpb19lbWl0dGVyIGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJNU0ZUX2F1ZGlvX2VtaXR0ZXJcIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxvYWRlckNsaXAgZXh0ZW5kcyBJTVNGVEF1ZGlvRW1pdHRlcl9DbGlwLCBJQXJyYXlJdGVtIHtcclxuICAgIF9vYmplY3RVUkw/OiBQcm9taXNlPHN0cmluZz47XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyRW1pdHRlciBleHRlbmRzIElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXIsIElBcnJheUl0ZW0ge1xyXG4gICAgX2JhYnlsb25EYXRhPzoge1xyXG4gICAgICAgIHNvdW5kPzogV2VpZ2h0ZWRTb3VuZDtcclxuICAgICAgICBsb2FkZWQ6IFByb21pc2U8dm9pZD47XHJcbiAgICB9O1xyXG4gICAgX2JhYnlsb25Tb3VuZHM6IFNvdW5kW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTVNGVEF1ZGlvRW1pdHRlciB7XHJcbiAgICBjbGlwczogSUxvYWRlckNsaXBbXTtcclxuICAgIGVtaXR0ZXJzOiBJTG9hZGVyRW1pdHRlcltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUxvYWRlckFuaW1hdGlvbkV2ZW50IGV4dGVuZHMgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnQsIElBcnJheUl0ZW0ge31cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyQW5pbWF0aW9uRXZlbnRzIHtcclxuICAgIGV2ZW50czogSUxvYWRlckFuaW1hdGlvbkV2ZW50W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL25hamFkb2pvL2dsVEYvYmxvYi9NU0ZUX2F1ZGlvX2VtaXR0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL01TRlRfYXVkaW9fZW1pdHRlci9SRUFETUUubWQpXHJcbiAqICEhISBFeHBlcmltZW50YWwgRXh0ZW5zaW9uIFN1YmplY3QgdG8gQ2hhbmdlcyAhISFcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNsYXNzIE1TRlRfYXVkaW9fZW1pdHRlciBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXI7XHJcbiAgICBwcml2YXRlIF9jbGlwczogQXJyYXk8SUxvYWRlckNsaXA+O1xyXG4gICAgcHJpdmF0ZSBfZW1pdHRlcnM6IEFycmF5PElMb2FkZXJFbWl0dGVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5fbG9hZGVyLmlzRXh0ZW5zaW9uVXNlZChOQU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgICAgICh0aGlzLl9jbGlwcyBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICAodGhpcy5fZW1pdHRlcnMgYXMgYW55KSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIG9uTG9hZGluZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zID0gdGhpcy5fbG9hZGVyLmdsdGYuZXh0ZW5zaW9ucztcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucyAmJiBleHRlbnNpb25zW3RoaXMubmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1t0aGlzLm5hbWVdIGFzIElNU0ZUQXVkaW9FbWl0dGVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2xpcHMgPSBleHRlbnNpb24uY2xpcHM7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJzID0gZXh0ZW5zaW9uLmVtaXR0ZXJzO1xyXG5cclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9jbGlwcyk7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24odGhpcy5fZW1pdHRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkU2NlbmVBc3luYyhjb250ZXh0OiBzdHJpbmcsIHNjZW5lOiBJU2NlbmUpOiBOdWxsYWJsZTxQcm9taXNlPHZvaWQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXJzUmVmZXJlbmNlPihjb250ZXh0LCBzY2VuZSwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZGVyLmxvYWRTY2VuZUFzeW5jKGNvbnRleHQsIHNjZW5lKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVtaXR0ZXJJbmRleCBvZiBleHRlbnNpb24uZW1pdHRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L2VtaXR0ZXJzYCwgdGhpcy5fZW1pdHRlcnMsIGVtaXR0ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5yZWZEaXN0YW5jZSAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLm1heERpc3RhbmNlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIucm9sbG9mZkZhY3RvciAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmRpc3RhbmNlTW9kZWwgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5pbm5lckFuZ2xlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIub3V0ZXJBbmdsZSAhPSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fTogRGlyZWN0aW9uIG9yIERpc3RhbmNlIHByb3BlcnRpZXMgYXJlIG5vdCBhbGxvd2VkIG9uIGVtaXR0ZXJzIGF0dGFjaGVkIHRvIGEgc2NlbmVgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnMvJHtlbWl0dGVyLmluZGV4fWAsIGVtaXR0ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWROb2RlQXN5bmMoY29udGV4dDogc3RyaW5nLCBub2RlOiBJTm9kZSwgYXNzaWduOiAoYmFieWxvblRyYW5zZm9ybU5vZGU6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQpOiBOdWxsYWJsZTxQcm9taXNlPFRyYW5zZm9ybU5vZGU+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZMb2FkZXIuTG9hZEV4dGVuc2lvbkFzeW5jPElNU0ZUQXVkaW9FbWl0dGVyX0VtaXR0ZXJzUmVmZXJlbmNlLCBUcmFuc2Zvcm1Ob2RlPihjb250ZXh0LCBub2RlLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBhd2FpdCB0aGlzLl9sb2FkZXIubG9hZE5vZGVBc3luYyhleHRlbnNpb25Db250ZXh0LCBub2RlLCAoYmFieWxvbk1lc2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW1pdHRlckluZGV4IG9mIGV4dGVuc2lvbi5lbWl0dGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAke2V4dGVuc2lvbkNvbnRleHR9L2VtaXR0ZXJzYCwgdGhpcy5fZW1pdHRlcnMsIGVtaXR0ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRFbWl0dGVyQXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnMvJHtlbWl0dGVyLmluZGV4fWAsIGVtaXR0ZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiBlbWl0dGVyLl9iYWJ5bG9uU291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmQuYXR0YWNoVG9NZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci5pbm5lckFuZ2xlICE9IHVuZGVmaW5lZCB8fCBlbWl0dGVyLm91dGVyQW5nbGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnNldExvY2FsRGlyZWN0aW9uVG9NZXNoKFZlY3RvcjMuRm9yd2FyZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmQuc2V0RGlyZWN0aW9uYWxDb25lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiAqIFRvb2xzLlRvRGVncmVlcyhlbWl0dGVyLmlubmVyQW5nbGUgPT0gdW5kZWZpbmVkID8gTWF0aC5QSSA6IGVtaXR0ZXIuaW5uZXJBbmdsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIub3V0ZXJBbmdsZSA9PSB1bmRlZmluZWQgPyBNYXRoLlBJIDogZW1pdHRlci5vdXRlckFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhc3NpZ24oYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbk1lc2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZEFuaW1hdGlvbkFzeW5jKGNvbnRleHQ6IHN0cmluZywgYW5pbWF0aW9uOiBJQW5pbWF0aW9uKTogTnVsbGFibGU8UHJvbWlzZTxBbmltYXRpb25Hcm91cD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SUxvYWRlckFuaW1hdGlvbkV2ZW50cywgQW5pbWF0aW9uR3JvdXA+KGNvbnRleHQsIGFuaW1hdGlvbiwgdGhpcy5uYW1lLCBhc3luYyAoZXh0ZW5zaW9uQ29udGV4dCwgZXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25Hcm91cCA9IGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dCwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKGV4dGVuc2lvbi5ldmVudHMpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV4dGVuc2lvbi5ldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEFuaW1hdGlvbkV2ZW50QXN5bmMoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZXZlbnRzLyR7ZXZlbnQuaW5kZXh9YCwgY29udGV4dCwgYW5pbWF0aW9uLCBldmVudCwgYmFieWxvbkFuaW1hdGlvbkdyb3VwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFieWxvbkFuaW1hdGlvbkdyb3VwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRDbGlwQXN5bmMoY29udGV4dDogc3RyaW5nLCBjbGlwOiBJTG9hZGVyQ2xpcCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKGNsaXAuX29iamVjdFVSTCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xpcC5fb2JqZWN0VVJMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb21pc2U6IFByb21pc2U8QXJyYXlCdWZmZXJWaWV3PjtcclxuICAgICAgICBpZiAoY2xpcC51cmkpIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkVXJpQXN5bmMoY29udGV4dCwgY2xpcCwgY2xpcC51cmkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBBcnJheUl0ZW0uR2V0KGAke2NvbnRleHR9L2J1ZmZlclZpZXdgLCB0aGlzLl9sb2FkZXIuZ2x0Zi5idWZmZXJWaWV3cywgY2xpcC5idWZmZXJWaWV3KTtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHRoaXMuX2xvYWRlci5sb2FkQnVmZmVyVmlld0FzeW5jKGAvYnVmZmVyVmlld3MvJHtidWZmZXJWaWV3LmluZGV4fWAsIGJ1ZmZlclZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgY2xpcC5fb2JqZWN0VVJMID0gcHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiBjbGlwLm1pbWVUeXBlIH0pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsaXAuX29iamVjdFVSTDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwcml2YXRlIF9sb2FkRW1pdHRlckFzeW5jKGNvbnRleHQ6IHN0cmluZywgZW1pdHRlcjogSUxvYWRlckVtaXR0ZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBlbWl0dGVyLl9iYWJ5bG9uU291bmRzID0gZW1pdHRlci5fYmFieWxvblNvdW5kcyB8fCBbXTtcclxuICAgICAgICBpZiAoIWVtaXR0ZXIuX2JhYnlsb25EYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaXBQcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbWl0dGVyLm5hbWUgfHwgYGVtaXR0ZXIke2VtaXR0ZXIuaW5kZXh9YDtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBlbWl0dGVyLnZvbHVtZSA9PSB1bmRlZmluZWQgPyAxIDogZW1pdHRlci52b2x1bWUsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtaXR0ZXIuY2xpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBDb250ZXh0ID0gYC9leHRlbnNpb25zLyR7dGhpcy5uYW1lfS9jbGlwc2A7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlwID0gQXJyYXlJdGVtLkdldChjbGlwQ29udGV4dCwgdGhpcy5fY2xpcHMsIGVtaXR0ZXIuY2xpcHNbaV0uY2xpcCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwUHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQ2xpcEFzeW5jKGAke2NsaXBDb250ZXh0fS8ke2VtaXR0ZXIuY2xpcHNbaV0uY2xpcH1gLCBjbGlwKS50aGVuKChvYmplY3RVUkw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VuZCA9IChlbWl0dGVyLl9iYWJ5bG9uU291bmRzW2ldID0gbmV3IFNvdW5kKG5hbWUsIG9iamVjdFVSTCwgdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSwgbnVsbCwgb3B0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5yZWZEaXN0YW5jZSA9IGVtaXR0ZXIucmVmRGlzdGFuY2UgfHwgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQubWF4RGlzdGFuY2UgPSBlbWl0dGVyLm1heERpc3RhbmNlIHx8IDI1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQucm9sbG9mZkZhY3RvciA9IGVtaXR0ZXIucm9sbG9mZkZhY3RvciB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5kaXN0YW5jZU1vZGVsID0gZW1pdHRlci5kaXN0YW5jZU1vZGVsIHx8IFwiZXhwb25lbnRpYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBQcm9taXNlLmFsbChjbGlwUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0cyA9IGVtaXR0ZXIuY2xpcHMubWFwKChjbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsaXAud2VpZ2h0IHx8IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlaWdodGVkU291bmQgPSBuZXcgV2VpZ2h0ZWRTb3VuZChlbWl0dGVyLmxvb3AgfHwgZmFsc2UsIGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMsIHdlaWdodHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtaXR0ZXIuaW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodGVkU291bmQuZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSA9IDIgKiBUb29scy5Ub0RlZ3JlZXMoZW1pdHRlci5pbm5lckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLm91dGVyQW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLmRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUgPSAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIub3V0ZXJBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci52b2x1bWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRlZFNvdW5kLnZvbHVtZSA9IGVtaXR0ZXIudm9sdW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5fYmFieWxvbkRhdGEhLnNvdW5kID0gd2VpZ2h0ZWRTb3VuZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlbWl0dGVyLl9iYWJ5bG9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZDogcHJvbWlzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbWl0dGVyLl9iYWJ5bG9uRGF0YS5sb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0RXZlbnRBY3Rpb24oXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHNvdW5kOiBXZWlnaHRlZFNvdW5kLFxyXG4gICAgICAgIGFjdGlvbjogSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24sXHJcbiAgICAgICAgdGltZTogbnVtYmVyLFxyXG4gICAgICAgIHN0YXJ0T2Zmc2V0PzogbnVtYmVyXHJcbiAgICApOiAoY3VycmVudEZyYW1lOiBudW1iZXIpID0+IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24ucGxheToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50RnJhbWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lT2Zmc2V0ID0gKHN0YXJ0T2Zmc2V0IHx8IDApICsgKGN1cnJlbnRGcmFtZSAtIHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoZnJhbWVPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnN0b3A6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uLnBhdXNlOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtjb250ZXh0fTogVW5zdXBwb3J0ZWQgYWN0aW9uICR7YWN0aW9ufWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRBbmltYXRpb25FdmVudEFzeW5jKFxyXG4gICAgICAgIGNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb25Db250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGV2ZW50OiBJTG9hZGVyQW5pbWF0aW9uRXZlbnQsXHJcbiAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwOiBBbmltYXRpb25Hcm91cFxyXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKGJhYnlsb25BbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gYmFieWxvbkFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9uc1swXTtcclxuICAgICAgICBjb25zdCBlbWl0dGVySW5kZXggPSBldmVudC5lbWl0dGVyO1xyXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBBcnJheUl0ZW0uR2V0KGAvZXh0ZW5zaW9ucy8ke3RoaXMubmFtZX0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhjb250ZXh0LCBlbWl0dGVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc291bmQgPSBlbWl0dGVyLl9iYWJ5bG9uRGF0YSEuc291bmQ7XHJcbiAgICAgICAgICAgIGlmIChzb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkV2ZW50ID0gbmV3IEFuaW1hdGlvbkV2ZW50KGV2ZW50LnRpbWUsIHRoaXMuX2dldEV2ZW50QWN0aW9uKGNvbnRleHQsIHNvdW5kLCBldmVudC5hY3Rpb24sIGV2ZW50LnRpbWUsIGV2ZW50LnN0YXJ0T2Zmc2V0KSk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uLmFuaW1hdGlvbi5hZGRFdmVudChiYWJ5bG9uQW5pbWF0aW9uRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCBzdGFydGVkIGF1ZGlvIHN0b3BzIHdoZW4gdGhpcyBhbmltYXRpb24gaXMgdGVybWluYXRlZC5cclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb25Hcm91cC5vbkFuaW1hdGlvbkdyb3VwRW5kT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLm9uQW5pbWF0aW9uR3JvdXBQYXVzZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxudW5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSk7XHJcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgTVNGVF9hdWRpb19lbWl0dGVyKGxvYWRlcikpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=