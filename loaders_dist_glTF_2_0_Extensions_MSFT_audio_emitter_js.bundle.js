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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfTVNGVF9hdWRpb19lbWl0dGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUVBO0FBRUE7QUFqQkE7O0FBRUE7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQWNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTs7O0FBR0E7QUFDQTtBQWpEQTs7QUFFQTtBQUNBO0FBT0E7QUFTQTtBQVNBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBeUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4VUE7QUEyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4bUJBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOzs7Ozs7O0FBT0E7QUFDQTtBQXRKQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBZUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQXdDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQW9LQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBa1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXAwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFrMEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZpQ0E7QUFDQTtBQWdCQTs7OztBQUlBO0FBQ0E7QUFnQkE7Ozs7O0FBS0E7QUFDQTtBQXJCQTs7QUFFQTtBQUNBO0FBVUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkxBO0FBRUE7O0FBRUE7QUFDQTtBQWVBOzs7OztBQUtBO0FBQ0E7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFFQTtBQW9DQTs7O0FBR0E7QUFDQTtBQUNBO0FBZUE7O0FBRUE7QUFDQTtBQWpCQTs7QUFFQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQW5pbWF0aW9ucy9hbmltYXRpb25FdmVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvL2F1ZGlvU2NlbmVDb21wb25lbnQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpby9zb3VuZC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvL3NvdW5kVHJhY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpby93ZWlnaHRlZHNvdW5kLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb1NvdW5kU291cmNlLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9NU0ZUX2F1ZGlvX2VtaXR0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbXBvc2VkIG9mIGEgZnJhbWUsIGFuZCBhbiBhY3Rpb24gZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25FdmVudCB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBpZiB0aGUgYW5pbWF0aW9uIGV2ZW50IGlzIGRvbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRG9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGFuaW1hdGlvbiBldmVudFxyXG4gICAgICogQHBhcmFtIGZyYW1lIFRoZSBmcmFtZSBmb3Igd2hpY2ggdGhlIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG4gICAgICogQHBhcmFtIGFjdGlvbiBUaGUgZXZlbnQgdG8gcGVyZm9ybSB3aGVuIHRyaWdnZXJlZFxyXG4gICAgICogQHBhcmFtIG9ubHlPbmNlIFNwZWNpZmllcyBpZiB0aGUgZXZlbnQgc2hvdWxkIGJlIHRyaWdnZXJlZCBvbmx5IG9uY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqIFRoZSBmcmFtZSBmb3Igd2hpY2ggdGhlIGV2ZW50IGlzIHRyaWdnZXJlZCAqKi9cclxuICAgICAgICBwdWJsaWMgZnJhbWU6IG51bWJlcixcclxuICAgICAgICAvKiogVGhlIGV2ZW50IHRvIHBlcmZvcm0gd2hlbiB0cmlnZ2VyZWQgKiovXHJcbiAgICAgICAgcHVibGljIGFjdGlvbjogKGN1cnJlbnRGcmFtZTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIC8qKiBTcGVjaWZpZXMgaWYgdGhlIGV2ZW50IHNob3VsZCBiZSB0cmlnZ2VyZWQgb25seSBvbmNlKiovXHJcbiAgICAgICAgcHVibGljIG9ubHlPbmNlPzogYm9vbGVhblxyXG4gICAgKSB7fVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfY2xvbmUoKTogQW5pbWF0aW9uRXZlbnQge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uRXZlbnQodGhpcy5mcmFtZSwgdGhpcy5hY3Rpb24sIHRoaXMub25seU9uY2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4vc291bmRcIjtcclxuaW1wb3J0IHsgU291bmRUcmFjayB9IGZyb20gXCIuL3NvdW5kVHJhY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBNYXRyaXgsIFZlY3RvcjMgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVTZXJpYWxpemFibGVDb21wb25lbnQgfSBmcm9tIFwiLi4vc2NlbmVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2NlbmVDb21wb25lbnRDb25zdGFudHMgfSBmcm9tIFwiLi4vc2NlbmVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCIuLi9hc3NldENvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IFwiLi9hdWRpb0VuZ2luZVwiO1xyXG5pbXBvcnQgeyBQcmVjaXNpb25EYXRlIH0gZnJvbSBcIi4uL01pc2MvcHJlY2lzaW9uRGF0ZVwiO1xyXG5pbXBvcnQgeyBFbmdpbmVTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL2VuZ2luZVN0b3JlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5pbXBvcnQgeyBBZGRQYXJzZXIgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL1BsdWdpbnMvYmFieWxvbkZpbGVQYXJzZXIuZnVuY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuXHJcbi8vIEFkZHMgdGhlIHBhcnNlciB0byB0aGUgc2NlbmUgcGFyc2Vycy5cclxuQWRkUGFyc2VyKFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8sIChwYXJzZWREYXRhOiBhbnksIHNjZW5lOiBTY2VuZSwgY29udGFpbmVyOiBBc3NldENvbnRhaW5lciwgcm9vdFVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAvLyBUT0RPOiBhZGQgc291bmRcclxuICAgIGxldCBsb2FkZWRTb3VuZHM6IFNvdW5kW10gPSBbXTtcclxuICAgIGxldCBsb2FkZWRTb3VuZDogU291bmQ7XHJcbiAgICBjb250YWluZXIuc291bmRzID0gY29udGFpbmVyLnNvdW5kcyB8fCBbXTtcclxuICAgIGlmIChwYXJzZWREYXRhLnNvdW5kcyAhPT0gdW5kZWZpbmVkICYmIHBhcnNlZERhdGEuc291bmRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBjYWNoZSA9IHBhcnNlZERhdGEuc291bmRzLmxlbmd0aDsgaW5kZXggPCBjYWNoZTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTb3VuZCA9IHBhcnNlZERhdGEuc291bmRzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lPy5jYW5Vc2VXZWJBdWRpbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRTb3VuZC51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRTb3VuZC51cmwgPSBwYXJzZWRTb3VuZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2FkZWRTb3VuZHNbcGFyc2VkU291bmQudXJsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZFNvdW5kID0gU291bmQuUGFyc2UocGFyc2VkU291bmQsIHNjZW5lLCByb290VXJsKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZWRTb3VuZHNbcGFyc2VkU291bmQudXJsXSA9IGxvYWRlZFNvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zb3VuZHMucHVzaChsb2FkZWRTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zb3VuZHMucHVzaChTb3VuZC5QYXJzZShwYXJzZWRTb3VuZCwgc2NlbmUsIHJvb3RVcmwsIGxvYWRlZFNvdW5kc1twYXJzZWRTb3VuZC51cmxdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc291bmRzLnB1c2gobmV3IFNvdW5kKHBhcnNlZFNvdW5kLm5hbWUsIG51bGwsIHNjZW5lKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGVkU291bmRzID0gW107XHJcbn0pO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi9zY2VuZVwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NlbmUge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICAgICAqIEJhY2tpbmcgZmllbGRcclxuICAgICAgICAgKi9cclxuICAgICAgICBfbWFpblNvdW5kVHJhY2s6IFNvdW5kVHJhY2s7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1haW4gc291bmQgdHJhY2sgcGxheWVkIGJ5IHRoZSBzY2VuZS5cclxuICAgICAgICAgKiBJdCBjb250YWlucyB5b3VyIHByaW1hcnkgY29sbGVjdGlvbiBvZiBzb3VuZHMuXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBtYWluU291bmRUcmFjazogU291bmRUcmFjaztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbGlzdCBvZiBzb3VuZCB0cmFja3MgYWRkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3VuZFRyYWNrczogTnVsbGFibGU8QXJyYXk8U291bmRUcmFjaz4+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIGEgc291bmQgdXNpbmcgYSBnaXZlbiBuYW1lXHJcbiAgICAgICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgbmFtZSB0byBzZWFyY2ggZm9yXHJcbiAgICAgICAgICogQHJldHVybnMgdGhlIGZvdW5kIHNvdW5kIG9yIG51bGwgaWYgbm90IGZvdW5kIGF0IGFsbC5cclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFNvdW5kQnlOYW1lKG5hbWU6IHN0cmluZyk6IE51bGxhYmxlPFNvdW5kPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIGlmIGF1ZGlvIHN1cHBvcnQgaXMgZW5hYmxlZFxyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXVkaW9FbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgaWYgYXVkaW8gd2lsbCBiZSBvdXRwdXQgdG8gaGVhZHBob25lc1xyXG4gICAgICAgICAqIEBkZXByZWNhdGVkIHBsZWFzZSB1c2UgQXVkaW9FbmdpbmVWMiBpbnN0ZWFkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaGVhZHBob25lOiBib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgY3VzdG9tIGF1ZGlvIGxpc3RlbmVyIHBvc2l0aW9uIHByb3ZpZGVyXHJcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBhdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcjogTnVsbGFibGU8KCkgPT4gVmVjdG9yMz47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyBjdXN0b20gYXVkaW8gbGlzdGVuZXIgcm90YXRpb24gcHJvdmlkZXJcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyOiBOdWxsYWJsZTwoKSA9PiBWZWN0b3IzPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyBvciBzZXRzIGEgcmVmcmVzaCByYXRlIHdoZW4gdXNpbmcgM0QgYXVkaW8gcG9zaXRpb25pbmdcclxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBwbGVhc2UgdXNlIEF1ZGlvRW5naW5lVjIgaW5zdGVhZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGF1ZGlvUG9zaXRpb25pbmdSZWZyZXNoUmF0ZTogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmUucHJvdG90eXBlLCBcIm1haW5Tb3VuZFRyYWNrXCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9tYWluU291bmRUcmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9tYWluU291bmRUcmFjayA9IG5ldyBTb3VuZFRyYWNrKHRoaXMsIHsgbWFpblRyYWNrOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5Tb3VuZFRyYWNrO1xyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbn0pO1xyXG5cclxuU2NlbmUucHJvdG90eXBlLmdldFNvdW5kQnlOYW1lID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZyk6IE51bGxhYmxlPFNvdW5kPiB7XHJcbiAgICBsZXQgaW5kZXg6IG51bWJlcjtcclxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbltpbmRleF0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb25baW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgIGZvciAobGV0IHNkSW5kZXggPSAwOyBzZEluZGV4IDwgdGhpcy5zb3VuZFRyYWNrcy5sZW5ndGg7IHNkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNvdW5kVHJhY2tzW3NkSW5kZXhdLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kVHJhY2tzW3NkSW5kZXhdLnNvdW5kQ29sbGVjdGlvbltpbmRleF0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdW5kVHJhY2tzW3NkSW5kZXhdLnNvdW5kQ29sbGVjdGlvbltpbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmUucHJvdG90eXBlLCBcImF1ZGlvRW5hYmxlZFwiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSkge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wby5hdWRpb0VuYWJsZWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUsIHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbXBvLmVuYWJsZUF1ZGlvKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29tcG8uZGlzYWJsZUF1ZGlvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjZW5lLnByb3RvdHlwZSwgXCJoZWFkcGhvbmVcIiwge1xyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG8uaGVhZHBob25lO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lLCB2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb21wby5zd2l0Y2hBdWRpb01vZGVGb3JIZWFkcGhvbmVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29tcG8uc3dpdGNoQXVkaW9Nb2RlRm9yTm9ybWFsU3BlYWtlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmUucHJvdG90eXBlLCBcImF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyXCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvLmF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lLCB2YWx1ZTogKCkgPT4gVmVjdG9yMykge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWUgcGFzc2VkIHRvIFtTY2VuZS5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlcl0gbXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFZlY3RvcjNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29tcG8uYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmUucHJvdG90eXBlLCBcImF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyXCIsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lKSB7XHJcbiAgICAgICAgbGV0IGNvbXBvID0gdGhpcy5fZ2V0Q29tcG9uZW50KFNjZW5lQ29tcG9uZW50Q29uc3RhbnRzLk5BTUVfQVVESU8pIGFzIEF1ZGlvU2NlbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKCFjb21wbykge1xyXG4gICAgICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRDb21wb25lbnQoY29tcG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvLmF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRoaXM6IFNjZW5lLCB2YWx1ZTogKCkgPT4gVmVjdG9yMykge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWUgcGFzc2VkIHRvIFtTY2VuZS5hdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlcl0gbXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFZlY3RvcjNcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29tcG8uYXVkaW9MaXN0ZW5lclJvdGF0aW9uUHJvdmlkZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU2NlbmUucHJvdG90eXBlLCBcImF1ZGlvUG9zaXRpb25pbmdSZWZyZXNoUmF0ZVwiLCB7XHJcbiAgICBnZXQ6IGZ1bmN0aW9uICh0aGlzOiBTY2VuZSkge1xyXG4gICAgICAgIGxldCBjb21wbyA9IHRoaXMuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKSBhcyBBdWRpb1NjZW5lQ29tcG9uZW50O1xyXG4gICAgICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICAgICAgY29tcG8gPSBuZXcgQXVkaW9TY2VuZUNvbXBvbmVudCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wby5hdWRpb1Bvc2l0aW9uaW5nUmVmcmVzaFJhdGU7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGhpczogU2NlbmUsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY29tcG8gPSB0aGlzLl9nZXRDb21wb25lbnQoU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTykgYXMgQXVkaW9TY2VuZUNvbXBvbmVudDtcclxuICAgICAgICBpZiAoIWNvbXBvKSB7XHJcbiAgICAgICAgICAgIGNvbXBvID0gbmV3IEF1ZGlvU2NlbmVDb21wb25lbnQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZENvbXBvbmVudChjb21wbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wby5hdWRpb1Bvc2l0aW9uaW5nUmVmcmVzaFJhdGUgPSB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBzb3VuZCBzY2VuZSBjb21wb25lbnQgcmVzcG9uc2libGUgdG8gbWFuYWdlIGFueSBzb3VuZHNcclxuICogaW4gYSBnaXZlbiBzY2VuZS5cclxuICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBBdWRpb0VuZ2luZVYyIGluc3RlYWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1NjZW5lQ29tcG9uZW50IGltcGxlbWVudHMgSVNjZW5lU2VyaWFsaXphYmxlQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9DYW1lcmFEaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAwLCAtMSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IG5hbWUgaGVscGZ1bCB0byBpZGVudGlmeSB0aGUgY29tcG9uZW50IGluIHRoZSBsaXN0IG9mIHNjZW5lIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gU2NlbmVDb21wb25lbnRDb25zdGFudHMuTkFNRV9BVURJTztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzY2VuZSB0aGUgY29tcG9uZW50IGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzY2VuZTogU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXVkaW9FbmFibGVkID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aGV0aGVyIGF1ZGlvIGlzIGVuYWJsZWQgb3Igbm90LlxyXG4gICAgICogUGxlYXNlIHVzZSByZWxhdGVkIGVuYWJsZS9kaXNhYmxlIG1ldGhvZCB0byBzd2l0Y2ggc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXVkaW9FbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdWRpb0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhZHBob25lID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgd2hldGhlciBhdWRpbyBpcyBvdXRwdXR0aW5nIHRvIGhlYWRwaG9uZSBvciBub3QuXHJcbiAgICAgKiBQbGVhc2UgdXNlIHRoZSBhY2NvcmRpbmcgU3dpdGNoIG1ldGhvZHMgdG8gY2hhbmdlIG91dHB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoZWFkcGhvbmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRwaG9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIHJlZnJlc2ggcmF0ZSB3aGVuIHVzaW5nIDNEIGF1ZGlvIHBvc2l0aW9uaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdWRpb1Bvc2l0aW9uaW5nUmVmcmVzaFJhdGUgPSA1MDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIFNldHMgYSBjdXN0b20gbGlzdGVuZXIgcG9zaXRpb24gZm9yIGFsbCBzb3VuZHMgaW4gdGhlIHNjZW5lXHJcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIGlzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgYWN0aXZlIGNhbWVyYVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXI6IE51bGxhYmxlPCgpID0+IFZlY3RvcjM+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3IgU2V0cyBhIGN1c3RvbSBsaXN0ZW5lciByb3RhdGlvbiBmb3IgYWxsIHNvdW5kcyBpbiB0aGUgc2NlbmVcclxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgdGhlIHJvdGF0aW9uIG9mIHRoZSBmaXJzdCBhY3RpdmUgY2FtZXJhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlcjogTnVsbGFibGU8KCkgPT4gVmVjdG9yMz4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGZvciB0aGUgZ2l2ZW4gc2NlbmVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBEZWZpbmVzIHRoZSBzY2VuZSB0byByZWdpc3RlciB0aGUgY29tcG9uZW50IGluXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lPzogTnVsbGFibGU8U2NlbmU+KSB7XHJcbiAgICAgICAgc2NlbmUgPSBzY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIHNjZW5lLnNvdW5kVHJhY2tzID0gW10gYXMgU291bmRUcmFja1tdO1xyXG4gICAgICAgIHNjZW5lLnNvdW5kcyA9IFtdIGFzIFNvdW5kW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGNvbXBvbmVudCBpbiBhIGdpdmVuIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLl9hZnRlclJlbmRlclN0YWdlLnJlZ2lzdGVyU3RlcChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5TVEVQX0FGVEVSUkVOREVSX0FVRElPLCB0aGlzLCB0aGlzLl9hZnRlclJlbmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWJ1aWxkcyB0aGUgZWxlbWVudHMgcmVsYXRlZCB0byB0aGlzIGNvbXBvbmVudCBpbiBjYXNlIG9mXHJcbiAgICAgKiBjb250ZXh0IGxvc3QgZm9yIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVidWlsZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIGhlcmUuIChOb3QgcmVuZGVyaW5nIHJlbGF0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoZSBjb21wb25lbnQgZGF0YSB0byB0aGUgc3BlY2lmaWVkIGpzb24gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCBUaGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc291bmRzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291bmR0cmFjayA9IHRoaXMuc2NlbmUuc291bmRUcmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNvdW5kSWQgPSAwOyBzb3VuZElkIDwgc291bmR0cmFjay5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBzb3VuZElkKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnNvdW5kcy5wdXNoKHNvdW5kdHJhY2suc291bmRDb2xsZWN0aW9uW3NvdW5kSWRdLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYWxsIHRoZSBlbGVtZW50cyBmcm9tIHRoZSBjb250YWluZXIgdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIHRoZSBjb250YWluZXIgaG9sZGluZyB0aGUgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEZyb21Db250YWluZXIoY29udGFpbmVyOiBJQXNzZXRDb250YWluZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lci5zb3VuZHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIGNvbnRhaW5lci5zb3VuZHMpIHtcclxuICAgICAgICAgICAgc291bmQucGxheSgpO1xyXG4gICAgICAgICAgICBzb3VuZC5hdXRvcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubWFpblNvdW5kVHJhY2suYWRkU291bmQoc291bmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSBlbGVtZW50cyBpbiB0aGUgY29udGFpbmVyIGZyb20gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIGNvbnRhaW5zIHRoZSBlbGVtZW50cyB0byByZW1vdmVcclxuICAgICAqIEBwYXJhbSBkaXNwb3NlIGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgc2hvdWxkIGJlIGRpc3Bvc2VkIChkZWZhdWx0OiBmYWxzZSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUZyb21Db250YWluZXIoY29udGFpbmVyOiBJQXNzZXRDb250YWluZXIsIGRpc3Bvc2UgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyLnNvdW5kcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgY29udGFpbmVyLnNvdW5kcykge1xyXG4gICAgICAgICAgICBzb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNvdW5kLmF1dG9wbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubWFpblNvdW5kVHJhY2sucmVtb3ZlU291bmQoc291bmQpO1xyXG4gICAgICAgICAgICBpZiAoZGlzcG9zZSkge1xyXG4gICAgICAgICAgICAgICAgc291bmQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZXMgdGhlIGNvbXBvbmVudCBhbmQgdGhlIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgaWYgKHNjZW5lLl9tYWluU291bmRUcmFjaykge1xyXG4gICAgICAgICAgICBzY2VuZS5tYWluU291bmRUcmFjay5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2NJbmRleCA9IDA7IHNjSW5kZXggPCBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IHNjSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuc291bmRUcmFja3Nbc2NJbmRleF0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZXMgYXVkaW8gaW4gdGhlIGFzc29jaWF0ZWQgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNhYmxlQXVkaW8oKSB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUgJiYgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICAgICAgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0LnN1c3BlbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb25baV0ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb25bal0ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZXMgYXVkaW8gaW4gdGhlIGFzc29jaWF0ZWQgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVBdWRpbygpIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9FbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNjZW5lLm1haW5Tb3VuZFRyYWNrLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uW2ldLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb25baV0ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzW2ldLnNvdW5kQ29sbGVjdGlvbltqXS5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zb3VuZENvbGxlY3Rpb25bal0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCBhdWRpbyB0byBoZWFkcGhvbmUgb3V0cHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3dpdGNoQXVkaW9Nb2RlRm9ySGVhZHBob25lcygpIHtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5faGVhZHBob25lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc2NlbmUubWFpblNvdW5kVHJhY2suc3dpdGNoUGFubmluZ01vZGVsVG9IUlRGKCk7XHJcbiAgICAgICAgaWYgKHNjZW5lLnNvdW5kVHJhY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUuc291bmRUcmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNjZW5lLnNvdW5kVHJhY2tzW2ldLnN3aXRjaFBhbm5pbmdNb2RlbFRvSFJURigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3dpdGNoIGF1ZGlvIHRvIG5vcm1hbCBzcGVha2Vycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3aXRjaEF1ZGlvTW9kZUZvck5vcm1hbFNwZWFrZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICB0aGlzLl9oZWFkcGhvbmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc2NlbmUubWFpblNvdW5kVHJhY2suc3dpdGNoUGFubmluZ01vZGVsVG9FcXVhbFBvd2VyKCk7XHJcblxyXG4gICAgICAgIGlmIChzY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLnNvdW5kVHJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5zb3VuZFRyYWNrc1tpXS5zd2l0Y2hQYW5uaW5nTW9kZWxUb0VxdWFsUG93ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZWRDYW1lcmFEaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgcHJpdmF0ZSBfY2FjaGVkQ2FtZXJhUG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgcHJpdmF0ZSBfbGFzdENoZWNrID0gMDtcclxuICAgIHByaXZhdGUgX2ludmVydE1hdHJpeFRlbXAgPSBuZXcgTWF0cml4KCk7XHJcbiAgICBwcml2YXRlIF9jYW1lcmFEaXJlY3Rpb25UZW1wID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICBwcml2YXRlIF9hZnRlclJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBQcmVjaXNpb25EYXRlLk5vdztcclxuICAgICAgICBpZiAodGhpcy5fbGFzdENoZWNrICYmIG5vdyAtIHRoaXMuX2xhc3RDaGVjayA8IHRoaXMuYXVkaW9Qb3NpdGlvbmluZ1JlZnJlc2hSYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RDaGVjayA9IG5vdztcclxuXHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lO1xyXG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9FbmFibGVkIHx8ICFzY2VuZS5fbWFpblNvdW5kVHJhY2sgfHwgIXNjZW5lLnNvdW5kVHJhY2tzIHx8IChzY2VuZS5fbWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uLmxlbmd0aCA9PT0gMCAmJiBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF1ZGlvRW5naW5lID0gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU7XHJcblxyXG4gICAgICAgIGlmICghYXVkaW9FbmdpbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuaW5nQ2FtZXJhID0gc2NlbmUuYWN0aXZlQ2FtZXJhO1xyXG4gICAgICAgICAgICBpZiAoc2NlbmUuYWN0aXZlQ2FtZXJhcyAmJiBzY2VuZS5hY3RpdmVDYW1lcmFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmluZ0NhbWVyYSA9IHNjZW5lLmFjdGl2ZUNhbWVyYXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEEgY3VzdG9tIGxpc3RlbmVyIHBvc2l0aW9uIHByb3ZpZGVyIHdhcyBzZXRcclxuICAgICAgICAgICAgLy8gVXNlIHRoZSB1c2VycyBwcm92aWRlZCBwb3NpdGlvbiBpbnN0ZWFkIG9mIGNhbWVyYSdzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbjogVmVjdG9yMyA9IHRoaXMuYXVkaW9MaXN0ZW5lclBvc2l0aW9uUHJvdmlkZXIoKTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbGlzdGVuZXIgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5saXN0ZW5lci5zZXRQb3NpdGlvbihwb3NpdGlvbi54IHx8IDAsIHBvc2l0aW9uLnkgfHwgMCwgcG9zaXRpb24ueiB8fCAwKTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgbGlzdGVuaW5nIGNhbWVyYVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmluZ0NhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBsaXN0ZW5lciBwb3NpdGlvbiB0byB0aGUgbGlzdGVuaW5nIGNhbWVyYSBnbG9iYWwgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2FjaGVkQ2FtZXJhUG9zaXRpb24uZXF1YWxzKGxpc3RlbmluZ0NhbWVyYS5nbG9iYWxQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWRDYW1lcmFQb3NpdGlvbi5jb3B5RnJvbShsaXN0ZW5pbmdDYW1lcmEuZ2xvYmFsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5saXN0ZW5lci5zZXRQb3NpdGlvbihsaXN0ZW5pbmdDYW1lcmEuZ2xvYmFsUG9zaXRpb24ueCwgbGlzdGVuaW5nQ2FtZXJhLmdsb2JhbFBvc2l0aW9uLnksIGxpc3RlbmluZ0NhbWVyYS5nbG9iYWxQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2V0IHRoZSBsaXN0ZW5lciBwb3NpdGlvbiB0byAwLCAwICwwXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBsaXN0ZW5lciBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBIGN1c3RvbSBsaXN0ZW5lciByb3RhdGlvbiBwcm92aWRlciB3YXMgc2V0XHJcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgdXNlcnMgcHJvdmlkZWQgcm90YXRpb24gaW5zdGVhZCBvZiBjYW1lcmEnc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb0xpc3RlbmVyUm90YXRpb25Qcm92aWRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb246IFZlY3RvcjMgPSB0aGlzLmF1ZGlvTGlzdGVuZXJSb3RhdGlvblByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQubGlzdGVuZXIuc2V0T3JpZW50YXRpb24ocm90YXRpb24ueCB8fCAwLCByb3RhdGlvbi55IHx8IDAsIHJvdGF0aW9uLnogfHwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGxpc3RlbmluZyBjYW1lcmFcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5pbmdDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZvciBWUiBjYW1lcmFzXHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuaW5nQ2FtZXJhLnJpZ0NhbWVyYXMgJiYgbGlzdGVuaW5nQ2FtZXJhLnJpZ0NhbWVyYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmluZ0NhbWVyYSA9IGxpc3RlbmluZ0NhbWVyYS5yaWdDYW1lcmFzWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpc3RlbmluZ0NhbWVyYS5nZXRWaWV3TWF0cml4KCkuaW52ZXJ0VG9SZWYodGhpcy5faW52ZXJ0TWF0cml4VGVtcCk7XHJcbiAgICAgICAgICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybU5vcm1hbFRvUmVmKEF1ZGlvU2NlbmVDb21wb25lbnQuX0NhbWVyYURpcmVjdGlvbiwgdGhpcy5faW52ZXJ0TWF0cml4VGVtcCwgdGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gVG8gYXZvaWQgc29tZSBlcnJvcnMgb24gR2VhclZSXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAueCkgJiYgIWlzTmFOKHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAueSkgJiYgIWlzTmFOKHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAueikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NhY2hlZENhbWVyYURpcmVjdGlvbi5lcXVhbHModGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkQ2FtZXJhRGlyZWN0aW9uLmNvcHlGcm9tKHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQubGlzdGVuZXIuc2V0T3JpZW50YXRpb24odGhpcy5fY2FtZXJhRGlyZWN0aW9uVGVtcC54LCB0aGlzLl9jYW1lcmFEaXJlY3Rpb25UZW1wLnksIHRoaXMuX2NhbWVyYURpcmVjdGlvblRlbXAueiwgMCwgMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBzZXQgdGhlIGxpc3RlbmVyIHJvdGF0aW9uIHRvIDAsIDAgLDBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGxpc3RlbmVyIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5hdWRpb0NvbnRleHQubGlzdGVuZXIuc2V0T3JpZW50YXRpb24oMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2VuZS5tYWluU291bmRUcmFjay5zb3VuZENvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gc2NlbmUubWFpblNvdW5kVHJhY2suc291bmRDb2xsZWN0aW9uW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdW5kLnVzZUN1c3RvbUF0dGVudWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQudXBkYXRlRGlzdGFuY2VGcm9tTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzY2VuZS5zb3VuZFRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gc2NlbmUuc291bmRUcmFja3NbaV0uc291bmRDb2xsZWN0aW9uW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc291bmQudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnVwZGF0ZURpc3RhbmNlRnJvbUxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblNvdW5kLl9TY2VuZUNvbXBvbmVudEluaXRpYWxpemF0aW9uID0gKHNjZW5lOiBTY2VuZSkgPT4ge1xyXG4gICAgbGV0IGNvbXBvID0gc2NlbmUuX2dldENvbXBvbmVudChTY2VuZUNvbXBvbmVudENvbnN0YW50cy5OQU1FX0FVRElPKTtcclxuICAgIGlmICghY29tcG8pIHtcclxuICAgICAgICBjb21wbyA9IG5ldyBBdWRpb1NjZW5lQ29tcG9uZW50KHNjZW5lKTtcclxuICAgICAgICBzY2VuZS5fYWRkQ29tcG9uZW50KGNvbXBvKTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJU3RhdGljU291bmRPcHRpb25zLCBJU3RhdGljU291bmRQbGF5T3B0aW9ucywgSVN0YXRpY1NvdW5kU3RvcE9wdGlvbnMgfSBmcm9tIFwiLi4vQXVkaW9WMi9hYnN0cmFjdEF1ZGlvL3N0YXRpY1NvdW5kXCI7XHJcbmltcG9ydCB0eXBlIHsgSVN0cmVhbWluZ1NvdW5kT3B0aW9ucyB9IGZyb20gXCIuLi9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3RyZWFtaW5nU291bmRcIjtcclxuaW1wb3J0IHsgX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMsIF9TcGF0aWFsQXVkaW9EZWZhdWx0cyB9IGZyb20gXCIuLi9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xyXG5pbXBvcnQgdHlwZSB7IElBdWRpb1BhcmFtZXRlclJhbXBPcHRpb25zIH0gZnJvbSBcIi4uL0F1ZGlvVjIvYXVkaW9QYXJhbWV0ZXJcIjtcclxuaW1wb3J0IHsgQXVkaW9QYXJhbWV0ZXJSYW1wU2hhcGUgfSBmcm9tIFwiLi4vQXVkaW9WMi9hdWRpb1BhcmFtZXRlclwiO1xyXG5pbXBvcnQgeyBTb3VuZFN0YXRlIH0gZnJvbSBcIi4uL0F1ZGlvVjIvc291bmRTdGF0ZVwiO1xyXG5pbXBvcnQgeyBfV2ViQXVkaW9Tb3VuZFNvdXJjZSB9IGZyb20gXCIuLi9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvU291bmRTb3VyY2VcIjtcclxuaW1wb3J0IHsgX1dlYkF1ZGlvU3RhdGljU291bmQgfSBmcm9tIFwiLi4vQXVkaW9WMi93ZWJBdWRpby93ZWJBdWRpb1N0YXRpY1NvdW5kXCI7XHJcbmltcG9ydCB7IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kIH0gZnJvbSBcIi4uL0F1ZGlvVjIvd2ViQXVkaW8vd2ViQXVkaW9TdHJlYW1pbmdTb3VuZFwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdEVuZ2luZSB9IGZyb20gXCIuLi9FbmdpbmVzL2Fic3RyYWN0RW5naW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCIuLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCIuLi9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBfV2FybkltcG9ydCB9IGZyb20gXCIuLi9NaXNjL2RldlRvb2xzXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBfUmV0cnlXaXRoSW50ZXJ2YWwgfSBmcm9tIFwiLi4vTWlzYy90aW1pbmdUb29sc1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lIH0gZnJvbSBcIi4vYXVkaW9FbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJU291bmRPcHRpb25zIH0gZnJvbSBcIi4vSW50ZXJmYWNlcy9JU291bmRPcHRpb25zXCI7XHJcblxyXG5jb25zdCBUbXBSYW1wT3B0aW9uczogSUF1ZGlvUGFyYW1ldGVyUmFtcE9wdGlvbnMgPSB7XHJcbiAgICBkdXJhdGlvbjogMCxcclxuICAgIHNoYXBlOiBBdWRpb1BhcmFtZXRlclJhbXBTaGFwZS5MaW5lYXIsXHJcbn07XHJcblxyXG5jb25zdCBUbXBQbGF5T3B0aW9uczogUGFydGlhbDxJU3RhdGljU291bmRQbGF5T3B0aW9ucz4gPSB7XHJcbiAgICBkdXJhdGlvbjogMCxcclxuICAgIHN0YXJ0T2Zmc2V0OiAwLFxyXG4gICAgd2FpdFRpbWU6IDAsXHJcbn07XHJcblxyXG5jb25zdCBUbXBTdG9wT3B0aW9uczogSVN0YXRpY1NvdW5kU3RvcE9wdGlvbnMgPSB7XHJcbiAgICB3YWl0VGltZTogMCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIEQycihkZWdyZWVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFIyZChyYWRpYW5zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgc291bmQgdGhhdCBjYW4gYmUgcGxheWVkIGluIHRoZSBhcHBsaWNhdGlvbi5cclxuICogVGhlIHNvdW5kIGNhbiBlaXRoZXIgYmUgYW4gYW1iaWVudCB0cmFjayBvciBhIHNpbXBsZSBzb3VuZCBwbGF5ZWQgaW4gcmVhY3Rpb24gdG8gYSB1c2VyIGFjdGlvbi5cclxuICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpb1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNvdW5kIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHNvdW5kIGluIHRoZSBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kVjIubmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgc291bmQgYXV0b3BsYXkgb25jZSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXV0b3BsYXkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSA/IHRydWUgOiB0aGlzLl9vcHRpb25zVjIuYXV0b3BsYXkhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYXV0b3BsYXkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIuYXV0b3BsYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIHNvdW5kIGxvb3AgYWZ0ZXIgaXQgZmluaXNoZXMgcGxheWluZyBvbmNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSA/IHRydWUgOiB0aGlzLl9zb3VuZFYyLmxvb3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsb29wKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fc291bmRWMikge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLmxvb3AgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBzb3VuZCB1c2UgYSBjdXN0b20gYXR0ZW51YXRpb24gY3VydmUgdG8gc2ltdWxhdGUgdGhlIGZhbGxvZmZcclxuICAgICAqIGhhcHBlbmluZyB3aGVuIHRoZSBzb3VyY2UgZ2V0cyBmdXJ0aGVyIGF3YXkgZnJvbSB0aGUgY2FtZXJhLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNjcmVhdGluZy15b3VyLW93bi1jdXN0b20tYXR0ZW51YXRpb24tZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZUN1c3RvbUF0dGVudWF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzb3VuZCB0cmFjayBpZCB0aGlzIHNvdW5kIGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzb3VuZFRyYWNrSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGlzIHNvdW5kIGN1cnJlbnRseSBwbGF5ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNQbGF5aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU291bmRTb3VyY2UgPyB0cnVlIDogdGhpcy5fc291bmRWMj8uc3RhdGUgPT09IFNvdW5kU3RhdGUuU3RhcnRlZCB8fCAoIXRoaXMuaXNSZWFkeSgpICYmIHRoaXMuX29wdGlvbnNWMi5hdXRvcGxheSEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhpcyBzb3VuZCBjdXJyZW50bHkgcGF1c2VkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzUGF1c2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFYyIGluc3RhbmNlb2YgX1dlYkF1ZGlvU291bmRTb3VyY2UgPyBmYWxzZSA6IHRoaXMuX3NvdW5kVjIuc3RhdGUgPT09IFNvdW5kU3RhdGUuUGF1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHRoZSByZWZlcmVuY2UgZGlzdGFuY2UgdGhlIHNvdW5kIHNob3VsZCBiZSBoZWFyZCBwZXJmZWN0bHkuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmRGlzdGFuY2U6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGUgcm9sbCBvZmYgZmFjdG9yIG9mIHNwYXRpYWwgc291bmRzLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJvbGxvZmZGYWN0b3I6IG51bWJlciA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZSB0aGUgbWF4IGRpc3RhbmNlIHRoZSBzb3VuZCBzaG91bGQgYmUgaGVhcmQgKGludGVuc2l0eSBqdXN0IGJlY2FtZSAwIGF0IHRoaXMgcG9pbnQpLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtYXhEaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbE1heERpc3RhbmNlIHx8IDEwMDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbWF4RGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsTWF4RGlzdGFuY2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLm1heERpc3RhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgdGhlIGRpc3RhbmNlIGF0dGVudWF0aW9uIG1vZGVsIHRoZSBzb3VuZCB3aWxsIGZvbGxvdy5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlzdGFuY2VNb2RlbCgpOiBcImxpbmVhclwiIHwgXCJpbnZlcnNlXCIgfCBcImV4cG9uZW50aWFsXCIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbERpc3RhbmNlTW9kZWwgfHwgXCJsaW5lYXJcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZGlzdGFuY2VNb2RlbCh2YWx1ZTogXCJsaW5lYXJcIiB8IFwiaW52ZXJzZVwiIHwgXCJleHBvbmVudGlhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxEaXN0YW5jZU1vZGVsID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5kaXN0YW5jZU1vZGVsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEJhY2sgQ29tcGF0XHJcbiAgICAgKiovXHJcbiAgICBwdWJsaWMgb25lbmRlZDogKCkgPT4gYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYW4gb2JqZWN0IHVzZWQgdG8gc3RvcmUgdXNlciBkZWZpbmVkIGluZm9ybWF0aW9uIGZvciB0aGUgc291bmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtZXRhZGF0YTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgZXZlbnQgd2hlbiB0aGUgY3VycmVudCBwbGF5aW5nIHNvdW5kIGZpbmlzaGVzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25FbmRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxTb3VuZD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdGltZSBmb3IgdGhlIHNvdW5kLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSA/IHRoaXMuX3NvdW5kVjIuZW5naW5lLmN1cnJlbnRUaW1lIDogdGhpcy5fc291bmRWMi5jdXJyZW50VGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhpcyBzb3VuZCBlbmFibGVzIHNwYXRpYWwgc291bmQuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNwYXRpYWxTb3VuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMj8uX2lzU3BhdGlhbCA/PyBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhpcyBzb3VuZCBlbmFibGVzIHNwYXRpYWwgc291bmQuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNwYXRpYWxTb3VuZChuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuX2lzU3BhdGlhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvY2FsRGlyZWN0aW9uOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoMSwgMCwgMCk7XHJcbiAgICBwcml2YXRlIF92b2x1bWU6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIF9pc1JlYWR5VG9QbGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc0RpcmVjdGlvbmFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yZWFkeVRvUGxheUNhbGxiYWNrOiAoKSA9PiBhbnk7XHJcbiAgICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIF9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlOiBOdWxsYWJsZTxUcmFuc2Zvcm1Ob2RlPjtcclxuICAgIHByaXZhdGUgX2N1c3RvbUF0dGVudWF0aW9uRnVuY3Rpb246IChjdXJyZW50Vm9sdW1lOiBudW1iZXIsIGN1cnJlbnREaXN0YW5jZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCByZWZEaXN0YW5jZTogbnVtYmVyLCByb2xsb2ZmRmFjdG9yOiBudW1iZXIpID0+IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JlZ2lzdGVyRnVuYzogTnVsbGFibGU8KGNvbm5lY3RlZE1lc2g6IFRyYW5zZm9ybU5vZGUpID0+IHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBfaXNPdXRwdXRDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3VybDogTnVsbGFibGU8c3RyaW5nPiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uc1YyOiBQYXJ0aWFsPElTdGF0aWNTb3VuZE9wdGlvbnM+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc291bmRWMjogX1dlYkF1ZGlvU291bmRTb3VyY2UgfCBfV2ViQXVkaW9TdGF0aWNTb3VuZCB8IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kO1xyXG4gICAgcHJpdmF0ZSBfb25SZWFkeU9ic2VydmFibGU6IE51bGxhYmxlPE9ic2VydmFibGU8dm9pZD4+ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdldCBfb25SZWFkeSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX29uUmVhZHlPYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVhZHlPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uUmVhZHlPYnNlcnZhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX1NjZW5lQ29tcG9uZW50SW5pdGlhbGl6YXRpb246IChzY2VuZTogU2NlbmUpID0+IHZvaWQgPSAoXykgPT4ge1xyXG4gICAgICAgIHRocm93IF9XYXJuSW1wb3J0KFwiQXVkaW9TY2VuZUNvbXBvbmVudFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBzb3VuZCBhbmQgYXR0YWNoIGl0IHRvIGEgc2NlbmVcclxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgeW91ciBzb3VuZFxyXG4gICAgICogQHBhcmFtIHVybE9yQXJyYXlCdWZmZXIgVXJsIHRvIHRoZSBzb3VuZCB0byBsb2FkIGFzeW5jIG9yIEFycmF5QnVmZmVyLCBpdCBhbHNvIHdvcmtzIHdpdGggTWVkaWFTdHJlYW1zIGFuZCBBdWRpb0J1ZmZlcnNcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB0aGUgc291bmQgYmVsb25ncyB0b1xyXG4gICAgICogQHBhcmFtIHJlYWR5VG9QbGF5Q2FsbGJhY2sgUHJvdmlkZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIHlvdSdkIGxpa2UgdG8gbG9hZCB5b3VyIGNvZGUgb25jZSB0aGUgc291bmQgaXMgcmVhZHkgdG8gYmUgcGxheWVkXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPYmplY3RzIHRvIHByb3ZpZGUgd2l0aCB0aGUgY3VycmVudCBhdmFpbGFibGUgb3B0aW9uczogYXV0b3BsYXksIGxvb3AsIHZvbHVtZSwgc3BhdGlhbFNvdW5kLCBtYXhEaXN0YW5jZSwgcm9sbG9mZkZhY3RvciwgcmVmRGlzdGFuY2UsIGRpc3RhbmNlTW9kZWwsIHBhbm5pbmdNb2RlbCwgc3RyZWFtaW5nXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdXJsT3JBcnJheUJ1ZmZlcjogYW55LCBzY2VuZT86IE51bGxhYmxlPFNjZW5lPiwgcmVhZHlUb1BsYXlDYWxsYmFjazogTnVsbGFibGU8KCkgPT4gdm9pZD4gPSBudWxsLCBvcHRpb25zPzogSVNvdW5kT3B0aW9ucykge1xyXG4gICAgICAgIHNjZW5lID0gc2NlbmUgfHwgRW5naW5lU3RvcmUuTGFzdENyZWF0ZWRTY2VuZTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICBTb3VuZC5fU2NlbmVDb21wb25lbnRJbml0aWFsaXphdGlvbihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fcmVhZHlUb1BsYXlDYWxsYmFjayA9IHJlYWR5VG9QbGF5Q2FsbGJhY2sgfHwgKCgpID0+IHt9KTtcclxuXHJcbiAgICAgICAgLy8gRGVmYXVsdCBjdXN0b20gYXR0ZW51YXRpb24gZnVuY3Rpb24gaXMgYSBsaW5lYXIgYXR0ZW51YXRpb25cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgdGhpcy5fY3VzdG9tQXR0ZW51YXRpb25GdW5jdGlvbiA9IChjdXJyZW50Vm9sdW1lOiBudW1iZXIsIGN1cnJlbnREaXN0YW5jZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCByZWZEaXN0YW5jZTogbnVtYmVyLCByb2xsb2ZmRmFjdG9yOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXN0YW5jZSA8IG1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFZvbHVtZSAqICgxIC0gY3VycmVudERpc3RhbmNlIC8gbWF4RGlzdGFuY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc1YyOiBQYXJ0aWFsPElTdGF0aWNTb3VuZE9wdGlvbnM+ID0ge1xyXG4gICAgICAgICAgICBhbmFseXplckVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsIC8vIGBmYWxzZWAgZm9yIG5vdywgYnV0IHdpbGwgYmUgc2V0IHRvIGdpdmVuIG9wdGlvbiBsYXRlclxyXG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5sZW5ndGggfHwgMCxcclxuICAgICAgICAgICAgbG9vcDogb3B0aW9ucy5sb29wIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wRW5kOiAwLFxyXG4gICAgICAgICAgICBsb29wU3RhcnQ6IDAsXHJcbiAgICAgICAgICAgIG91dEJ1czogbnVsbCxcclxuICAgICAgICAgICAgb3V0QnVzQXV0b0RlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBwbGF5YmFja1JhdGU6IG9wdGlvbnMucGxheWJhY2tSYXRlIHx8IDEsXHJcbiAgICAgICAgICAgIHBpdGNoOiAwLFxyXG4gICAgICAgICAgICBza2lwQ29kZWNDaGVjazogb3B0aW9ucy5za2lwQ29kZWNDaGVjayB8fCBmYWxzZSxcclxuICAgICAgICAgICAgc3BhdGlhbERpc3RhbmNlTW9kZWw6IG9wdGlvbnMuZGlzdGFuY2VNb2RlbCxcclxuICAgICAgICAgICAgc3BhdGlhbEVuYWJsZWQ6IG9wdGlvbnMuc3BhdGlhbFNvdW5kLFxyXG4gICAgICAgICAgICBzcGF0aWFsTWF4RGlzdGFuY2U6IG9wdGlvbnMubWF4RGlzdGFuY2UsXHJcbiAgICAgICAgICAgIHNwYXRpYWxNaW5EaXN0YW5jZTogb3B0aW9ucy5yZWZEaXN0YW5jZSxcclxuICAgICAgICAgICAgc3BhdGlhbFJvbGxvZmZGYWN0b3I6IG9wdGlvbnMucm9sbG9mZkZhY3RvcixcclxuICAgICAgICAgICAgc3RlcmVvRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiBvcHRpb25zLm9mZnNldCB8fCAwLFxyXG4gICAgICAgICAgICB2b2x1bWU6IG9wdGlvbnMudm9sdW1lID8/IDEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl92b2x1bWUgPSBvcHRpb25zLnZvbHVtZSA/PyAxO1xyXG5cclxuICAgICAgICBpZiAoX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMob3B0aW9uc1YyKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbEF1dG9VcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxDb25lSW5uZXJBbmdsZSA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5jb25lSW5uZXJBbmdsZTtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJBbmdsZSA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5jb25lT3V0ZXJBbmdsZTtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJWb2x1bWUgPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZU91dGVyVm9sdW1lO1xyXG4gICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbE1pblVwZGF0ZVRpbWUgPSAwO1xyXG4gICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbE9yaWVudGF0aW9uID0gX1NwYXRpYWxBdWRpb0RlZmF1bHRzLm9yaWVudGF0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsUGFubmluZ01vZGVsID0gKHRoaXMuX3NjZW5lLmhlYWRwaG9uZSA/IFwiSFJURlwiIDogXCJlcXVhbHBvd2VyXCIpIGFzIFwiZXF1YWxwb3dlclwiIHwgXCJIUlRGXCI7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsUG9zaXRpb24gPSBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxSb3RhdGlvbiA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5yb3RhdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBvcHRpb25zVjIuc3BhdGlhbFJvdGF0aW9uUXVhdGVybmlvbiA9IF9TcGF0aWFsQXVkaW9EZWZhdWx0cy5yb3RhdGlvblF1YXRlcm5pb24uY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zVjIuc3BhdGlhbE1heERpc3RhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNWMi5zcGF0aWFsTWF4RGlzdGFuY2UgPSAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX29wdGlvbnNWMiA9IHsgLi4ub3B0aW9uc1YyIH07XHJcbiAgICAgICAgdGhpcy5fb3B0aW9uc1YyLmF1dG9wbGF5ID0gb3B0aW9ucy5hdXRvcGxheSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbiA9IG9wdGlvbnMudXNlQ3VzdG9tQXR0ZW51YXRpb24gPz8gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlQ3VzdG9tQXR0ZW51YXRpb24pIHtcclxuICAgICAgICAgICAgb3B0aW9uc1YyLnNwYXRpYWxNYXhEaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgICAgIG9wdGlvbnNWMi52b2x1bWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN0cmVhbWluZyA9IG9wdGlvbnM/LnN0cmVhbWluZyB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgYXVkaW9FbmdpbmUgPSBBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZTtcclxuICAgICAgICBpZiAoIWF1ZGlvRW5naW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF1ZGlvRW5naW5lVjIgPSAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUgYXMgQXVkaW9FbmdpbmUpLl92MjtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlU291bmRWMiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbWluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtaW5nT3B0aW9uc1YyOiBQYXJ0aWFsPElTdHJlYW1pbmdTb3VuZE9wdGlvbnM+ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRDb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zVjIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gbmV3IF9XZWJBdWRpb1N0cmVhbWluZ1NvdW5kKG5hbWUsIGF1ZGlvRW5naW5lVjIsIHN0cmVhbWluZ09wdGlvbnNWMik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICB2b2lkIHNvdW5kLl9pbml0QXN5bmModXJsT3JBcnJheUJ1ZmZlciwgb3B0aW9uc1YyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICB2b2lkIHNvdW5kLnByZWxvYWRJbnN0YW5jZXNBc3luYygxKS50aGVuKHRoaXMuX29uUmVhZHlUb1BsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdW5kO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291bmQgPSBuZXcgX1dlYkF1ZGlvU3RhdGljU291bmQobmFtZSwgYXVkaW9FbmdpbmVWMiwgb3B0aW9uc1YyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgIHZvaWQgc291bmQuX2luaXRBc3luYyh1cmxPckFycmF5QnVmZmVyLCBvcHRpb25zVjIpLnRoZW4odGhpcy5fb25SZWFkeVRvUGxheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSWYgbm8gcGFyYW1ldGVyIGlzIHBhc3NlZCB0aGVuIHRoZSBzZXRBdWRpb0J1ZmZlciBzaG91bGQgYmUgY2FsbGVkIHRvIHByZXBhcmUgdGhlIHNvdW5kLlxyXG4gICAgICAgIGlmICghdXJsT3JBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHNvdW5kIGJ1dCBkb24ndCBjYWxsIF9pbml0QXN5bmMgb24gaXQsIHlldC4gQ2FsbCBpdCBsYXRlciB3aGVuIGBzZXRBdWRpb0J1ZmZlcmAgaXMgY2FsbGVkLlxyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyID0gbmV3IF9XZWJBdWRpb1N0YXRpY1NvdW5kKG5hbWUsIGF1ZGlvRW5naW5lVjIsIG9wdGlvbnNWMik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdXJsT3JBcnJheUJ1ZmZlciA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl91cmwgPSB1cmxPckFycmF5QnVmZmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyID0gY3JlYXRlU291bmRWMigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsT3JBcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyID0gY3JlYXRlU291bmRWMigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsT3JBcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEhUTUxNZWRpYUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RyZWFtaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IGNyZWF0ZVNvdW5kVjIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHVybE9yQXJyYXlCdWZmZXIgaW5zdGFuY2VvZiBNZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE1lZGlhU3RyZWFtQXVkaW9Tb3VyY2VOb2RlKGF1ZGlvRW5naW5lVjIuX2F1ZGlvQ29udGV4dCwgeyBtZWRpYVN0cmVhbTogdXJsT3JBcnJheUJ1ZmZlciB9KTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMiA9IG5ldyBfV2ViQXVkaW9Tb3VuZFNvdXJjZShuYW1lLCBub2RlLCBhdWRpb0VuZ2luZVYyLCBvcHRpb25zVjIpO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgdm9pZCB0aGlzLl9zb3VuZFYyLl9pbml0QXN5bmMob3B0aW9uc1YyKS50aGVuKHRoaXMuX29uUmVhZHlUb1BsYXkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsT3JBcnJheUJ1ZmZlciBpbnN0YW5jZW9mIEF1ZGlvQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyID0gY3JlYXRlU291bmRWMigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1cmxPckFycmF5QnVmZmVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyID0gY3JlYXRlU291bmRWMigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VuZFYyKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5FcnJvcihcIlBhcmFtZXRlciBtdXN0IGJlIGEgVVJMIHRvIHRoZSBzb3VuZCwgYW4gQXJyYXkgb2YgVVJMcyAoLm1wMyAmIC5vZ2cpIG9yIGFuIEFycmF5QnVmZmVyIG9mIHRoZSBzb3VuZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5vbkVuZGVkT2JzZXJ2YWJsZS5hZGQodGhpcy5fb25lbmRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uUmVhZHlUb1BsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUubWFpblNvdW5kVHJhY2suYWRkU291bmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmVhZHlUb1BsYXlDYWxsYmFjaygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fb25SZWFkeU9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25SZWFkeU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc1YyLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxlYXNlIHRoZSBzb3VuZCBhbmQgaXRzIGFzc29jaWF0ZWQgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNSZWFkeVRvUGxheSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kVHJhY2tJZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmUubWFpblNvdW5kVHJhY2sucmVtb3ZlU291bmQodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5zb3VuZFRyYWNrc1t0aGlzLnNvdW5kVHJhY2tJZF0ucmVtb3ZlU291bmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSAmJiB0aGlzLl9yZWdpc3RlckZ1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZS51bnJlZ2lzdGVyQWZ0ZXJXb3JsZE1hdHJpeFVwZGF0ZSh0aGlzLl9yZWdpc3RlckZ1bmMpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NvdW5kVjIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBpZiB0aGUgc291bmRzIGlzIHJlYWR5IHRvIGJlIHBsYXllZCBvciBub3QuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHJlYWR5LCBvdGhlcndpc2UgZmFsc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzUmVhZHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUmVhZHlUb1BsYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgY2xhc3MgbmFtZS5cclxuICAgICAqIEByZXR1cm5zIGN1cnJlbnQgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiU291bmRcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGRhdGEgb2YgdGhlIHNvdW5kIGZyb20gYW4gYXVkaW9idWZmZXJcclxuICAgICAqIEBwYXJhbSBhdWRpb0J1ZmZlciBUaGUgYXVkaW9CdWZmZXIgY29udGFpbmluZyB0aGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QXVkaW9CdWZmZXIoYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVhZHlUb1BsYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLl9pbml0QXN5bmMoYXVkaW9CdWZmZXIsIHRoaXMuX29wdGlvbnNWMikudGhlbih0aGlzLl9vblJlYWR5VG9QbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHNvdW5kcyBvcHRpb25zIHN1Y2ggYXMgbWF4ZGlzdGFuY2UsIGxvb3AuLi5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyB2YWx1ZXMgbmFtZWQgYXMgdGhlIG9iamVjdCBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IElTb3VuZE9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmxvb3AgPSBvcHRpb25zLmxvb3AgPz8gdGhpcy5sb29wO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gb3B0aW9ucy5tYXhEaXN0YW5jZSA/PyB0aGlzLm1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uID0gb3B0aW9ucy51c2VDdXN0b21BdHRlbnVhdGlvbiA/PyB0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGxvZmZGYWN0b3IgPSBvcHRpb25zLnJvbGxvZmZGYWN0b3IgPz8gdGhpcy5yb2xsb2ZmRmFjdG9yO1xyXG4gICAgICAgICAgICB0aGlzLnJlZkRpc3RhbmNlID0gb3B0aW9ucy5yZWZEaXN0YW5jZSA/PyB0aGlzLnJlZkRpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlTW9kZWwgPSBvcHRpb25zLmRpc3RhbmNlTW9kZWwgPz8gdGhpcy5kaXN0YW5jZU1vZGVsO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5wbGF5YmFja1JhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQbGF5YmFja1JhdGUob3B0aW9ucy5wbGF5YmFja1JhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNwYXRpYWxTb3VuZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXRpYWxTb3VuZCA9IG9wdGlvbnMuc3BhdGlhbFNvdW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnZvbHVtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZvbHVtZShvcHRpb25zLnZvbHVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnN0YXJ0T2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuZHVyYXRpb24gPSBvcHRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkICYmIHRoaXMuaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3BhdGlhbFBhcmFtZXRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlU3BhdGlhbFBhcmFtZXRlcnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzcGF0aWFsID0gdGhpcy5fc291bmRWMi5zcGF0aWFsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbikge1xyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIFdlYkF1ZGlvIGF0dGVudWF0aW9uLlxyXG4gICAgICAgICAgICBzcGF0aWFsLmRpc3RhbmNlTW9kZWwgPSBcImxpbmVhclwiO1xyXG4gICAgICAgICAgICBzcGF0aWFsLm1pbkRpc3RhbmNlID0gMTtcclxuICAgICAgICAgICAgc3BhdGlhbC5tYXhEaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgICAgIHNwYXRpYWwucm9sbG9mZkZhY3RvciA9IDE7XHJcbiAgICAgICAgICAgIHNwYXRpYWwucGFubmluZ01vZGVsID0gXCJlcXVhbHBvd2VyXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BhdGlhbC5kaXN0YW5jZU1vZGVsID0gdGhpcy5kaXN0YW5jZU1vZGVsO1xyXG4gICAgICAgICAgICBzcGF0aWFsLm1pbkRpc3RhbmNlID0gdGhpcy5yZWZEaXN0YW5jZTtcclxuICAgICAgICAgICAgc3BhdGlhbC5tYXhEaXN0YW5jZSA9IHRoaXMubWF4RGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHNwYXRpYWwucm9sbG9mZkZhY3RvciA9IHRoaXMucm9sbG9mZkZhY3RvcjtcclxuICAgICAgICAgICAgc3BhdGlhbC5wYW5uaW5nTW9kZWwgPSB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbFBhbm5pbmdNb2RlbCB8fCBcImVxdWFscG93ZXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdGhlIHBhbm5pbmcgbW9kZWwgdG8gSFJURjpcclxuICAgICAqIFJlbmRlcnMgYSBzdGVyZW8gb3V0cHV0IG9mIGhpZ2hlciBxdWFsaXR5IHRoYW4gZXF1YWxwb3dlciDigJQgaXQgdXNlcyBhIGNvbnZvbHV0aW9uIHdpdGggbWVhc3VyZWQgaW1wdWxzZSByZXNwb25zZXMgZnJvbSBodW1hbiBzdWJqZWN0cy5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9sZWdhY3kvYXVkaW8jY3JlYXRpbmctYS1zcGF0aWFsLTNkLXNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hQYW5uaW5nTW9kZWxUb0hSVEYoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5wYW5uaW5nTW9kZWwgPSBcIkhSVEZcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdGhlIHBhbm5pbmcgbW9kZWwgdG8gRXF1YWwgUG93ZXI6XHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBlcXVhbC1wb3dlciBwYW5uaW5nIGFsZ29yaXRobSwgZ2VuZXJhbGx5IHJlZ2FyZGVkIGFzIHNpbXBsZSBhbmQgZWZmaWNpZW50LiBlcXVhbHBvd2VyIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNjcmVhdGluZy1hLXNwYXRpYWwtM2Qtc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN3aXRjaFBhbm5pbmdNb2RlbFRvRXF1YWxQb3dlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLnBhbm5pbmdNb2RlbCA9IFwiZXF1YWxwb3dlclwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbm5lY3QgdGhpcyBzb3VuZCB0byBhIHNvdW5kIHRyYWNrIGF1ZGlvIG5vZGUgbGlrZSBnYWluLi4uXHJcbiAgICAgKiBAcGFyYW0gc291bmRUcmFja0F1ZGlvTm9kZSB0aGUgc291bmQgdHJhY2sgYXVkaW8gbm9kZSB0byBjb25uZWN0IHRvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25uZWN0VG9Tb3VuZFRyYWNrQXVkaW9Ob2RlKHNvdW5kVHJhY2tBdWRpb05vZGU6IEF1ZGlvTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dE5vZGUgPSB0aGlzLl9zb3VuZFYyLl9vdXROb2RlO1xyXG4gICAgICAgIGlmIChvdXRwdXROb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc091dHB1dENvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0Tm9kZS5jb25uZWN0KHNvdW5kVHJhY2tBdWRpb05vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc091dHB1dENvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIHRoaXMgc291bmQgaW50byBhIGRpcmVjdGlvbmFsIHNvdXJjZVxyXG4gICAgICogQHBhcmFtIGNvbmVJbm5lckFuZ2xlIFNpemUgb2YgdGhlIGlubmVyIGNvbmUgaW4gZGVncmVlXHJcbiAgICAgKiBAcGFyYW0gY29uZU91dGVyQW5nbGUgU2l6ZSBvZiB0aGUgb3V0ZXIgY29uZSBpbiBkZWdyZWVcclxuICAgICAqIEBwYXJhbSBjb25lT3V0ZXJHYWluIFZvbHVtZSBvZiB0aGUgc291bmQgb3V0c2lkZSB0aGUgb3V0ZXIgY29uZSAoYmV0d2VlbiAwLjAgYW5kIDEuMClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldERpcmVjdGlvbmFsQ29uZShjb25lSW5uZXJBbmdsZTogbnVtYmVyLCBjb25lT3V0ZXJBbmdsZTogbnVtYmVyLCBjb25lT3V0ZXJHYWluOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY29uZU91dGVyQW5nbGUgPCBjb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJzZXREaXJlY3Rpb25hbENvbmUoKTogb3V0ZXIgYW5nbGUgb2YgdGhlIGNvbmUgbXVzdCBiZSBzdXBlcmlvciBvciBlcXVhbCB0byB0aGUgaW5uZXIgYW5nbGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVJbm5lckFuZ2xlID0gRDJyKGNvbmVJbm5lckFuZ2xlKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVPdXRlckFuZ2xlID0gRDJyKGNvbmVPdXRlckFuZ2xlKTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVPdXRlclZvbHVtZSA9IGNvbmVPdXRlckdhaW47XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLmNvbmVJbm5lckFuZ2xlID0gdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lSW5uZXJBbmdsZTtcclxuICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwuY29uZU91dGVyQW5nbGUgPSB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVPdXRlckFuZ2xlO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5jb25lT3V0ZXJWb2x1bWUgPSBjb25lT3V0ZXJHYWluO1xyXG5cclxuICAgICAgICB0aGlzLl9pc0RpcmVjdGlvbmFsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5aW5nICYmIHRoaXMubG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KDAsIHRoaXMuX29wdGlvbnNWMi5zdGFydE9mZnNldCwgdGhpcy5fb3B0aW9uc1YyLmR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGlubmVyIGFuZ2xlIGZvciB0aGUgZGlyZWN0aW9uYWwgY29uZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIFIyZCh0eXBlb2YgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lSW5uZXJBbmdsZSA9PT0gXCJudW1iZXJcIiA/IHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZUlubmVyQW5nbGUgOiBfU3BhdGlhbEF1ZGlvRGVmYXVsdHMuY29uZUlubmVyQW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBpbm5lciBhbmdsZSBmb3IgdGhlIGRpcmVjdGlvbmFsIGNvbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFsdWUgPSBEMnIodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT0gdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lSW5uZXJBbmdsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcImRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGU6IG91dGVyIGFuZ2xlIG9mIHRoZSBjb25lIG11c3QgYmUgc3VwZXJpb3Igb3IgZXF1YWwgdG8gdGhlIGlubmVyIGFuZ2xlLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVJbm5lckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5jb25lSW5uZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBvdXRlciBhbmdsZSBmb3IgdGhlIGRpcmVjdGlvbmFsIGNvbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBSMmQodHlwZW9mIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZU91dGVyQW5nbGUgPT09IFwibnVtYmVyXCIgPyB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbENvbmVPdXRlckFuZ2xlIDogX1NwYXRpYWxBdWRpb0RlZmF1bHRzLmNvbmVPdXRlckFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgb3V0ZXIgYW5nbGUgZm9yIHRoZSBkaXJlY3Rpb25hbCBjb25lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhbHVlID0gRDJyKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9IHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsQ29uZU91dGVyQW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5kaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJkaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlOiBvdXRlciBhbmdsZSBvZiB0aGUgY29uZSBtdXN0IGJlIHN1cGVyaW9yIG9yIGVxdWFsIHRvIHRoZSBpbm5lciBhbmdsZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxDb25lT3V0ZXJBbmdsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwuY29uZU91dGVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBlbWl0dGVyIGlmIHNwYXRpYWwgc291bmQgaXMgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtIG5ld1Bvc2l0aW9uIERlZmluZXMgdGhlIG5ldyBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjMpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxQb3NpdGlvbiAmJiBuZXdQb3NpdGlvbi5lcXVhbHModGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxQb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnNWMi5zcGF0aWFsUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxQb3NpdGlvbiA9IFZlY3RvcjMuWmVybygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbFBvc2l0aW9uLmNvcHlGcm9tKG5ld1Bvc2l0aW9uKTtcclxuICAgICAgICBpZiAodGhpcy5zcGF0aWFsU291bmQgJiYgIWlzTmFOKG5ld1Bvc2l0aW9uLngpICYmICFpc05hTihuZXdQb3NpdGlvbi55KSAmJiAhaXNOYU4obmV3UG9zaXRpb24ueikpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdFNwYXRpYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbG9jYWwgZGlyZWN0aW9uIG9mIHRoZSBlbWl0dGVyIGlmIHNwYXRpYWwgc291bmQgaXMgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtIG5ld0xvY2FsRGlyZWN0aW9uIERlZmluZXMgdGhlIG5ldyBsb2NhbCBkaXJlY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExvY2FsRGlyZWN0aW9uVG9NZXNoKG5ld0xvY2FsRGlyZWN0aW9uOiBWZWN0b3IzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxEaXJlY3Rpb24gPSBuZXdMb2NhbERpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZURpcmVjdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgfHwgIXRoaXMuc3BhdGlhbFNvdW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdCA9IHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBWZWN0b3IzLlRyYW5zZm9ybU5vcm1hbCh0aGlzLl9sb2NhbERpcmVjdGlvbiwgbWF0KTtcclxuICAgICAgICBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRTcGF0aWFsKCk7XHJcbiAgICAgICAgdGhpcy5fc291bmRWMi5zcGF0aWFsLm9yaWVudGF0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRTcGF0aWFsKCkge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kVjIuX2lzU3BhdGlhbCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zVjIuc3BhdGlhbERpc3RhbmNlTW9kZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zVjIuc3BhdGlhbERpc3RhbmNlTW9kZWwgPSBcImxpbmVhclwiO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnNwYXRpYWwuZGlzdGFuY2VNb2RlbCA9IFwibGluZWFyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fb3B0aW9uc1YyLnNwYXRpYWxNYXhEaXN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNWMi5zcGF0aWFsTWF4RGlzdGFuY2UgPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5tYXhEaXN0YW5jZSA9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHVwZGF0ZURpc3RhbmNlRnJvbUxpc3RlbmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFYyLl9vdXROb2RlICYmIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbiAmJiB0aGlzLl9zY2VuZS5hY3RpdmVDYW1lcmEpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLl9zY2VuZS5hdWRpb0xpc3RlbmVyUG9zaXRpb25Qcm92aWRlclxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uLnN1YnRyYWN0KHRoaXMuX3NjZW5lLmF1ZGlvTGlzdGVuZXJQb3NpdGlvblByb3ZpZGVyKCkpLmxlbmd0aCgpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUuZ2V0RGlzdGFuY2VUb0NhbWVyYSh0aGlzLl9zY2VuZS5hY3RpdmVDYW1lcmEpO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnZvbHVtZSA9IHRoaXMuX2N1c3RvbUF0dGVudWF0aW9uRnVuY3Rpb24odGhpcy5fdm9sdW1lLCBkaXN0YW5jZSwgdGhpcy5tYXhEaXN0YW5jZSwgdGhpcy5yZWZEaXN0YW5jZSwgdGhpcy5yb2xsb2ZmRmFjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgbmV3IGN1c3RvbSBhdHRlbnVhdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHNvdW5kLlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIERlZmluZXMgdGhlIGZ1bmN0aW9uIHVzZWQgZm9yIHRoZSBhdHRlbnVhdGlvblxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNjcmVhdGluZy15b3VyLW93bi1jdXN0b20tYXR0ZW51YXRpb24tZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEF0dGVudWF0aW9uRnVuY3Rpb24oY2FsbGJhY2s6IChjdXJyZW50Vm9sdW1lOiBudW1iZXIsIGN1cnJlbnREaXN0YW5jZTogbnVtYmVyLCBtYXhEaXN0YW5jZTogbnVtYmVyLCByZWZEaXN0YW5jZTogbnVtYmVyLCByb2xsb2ZmRmFjdG9yOiBudW1iZXIpID0+IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUF0dGVudWF0aW9uRnVuY3Rpb24gPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXkgdGhlIHNvdW5kXHJcbiAgICAgKiBAcGFyYW0gdGltZSAob3B0aW9uYWwpIFN0YXJ0IHRoZSBzb3VuZCBhZnRlciBYIHNlY29uZHMuIFN0YXJ0IGltbWVkaWF0ZWx5ICgwKSBieSBkZWZhdWx0LlxyXG4gICAgICogQHBhcmFtIG9mZnNldCAob3B0aW9uYWwpIFN0YXJ0IHRoZSBzb3VuZCBhdCBhIHNwZWNpZmljIHRpbWUgaW4gc2Vjb25kc1xyXG4gICAgICogQHBhcmFtIGxlbmd0aCAob3B0aW9uYWwpIFNvdW5kIGR1cmF0aW9uIChpbiBzZWNvbmRzKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGxheSh0aW1lPzogbnVtYmVyLCBvZmZzZXQ/OiBudW1iZXIsIGxlbmd0aD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvRW5naW5lID0gQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU7XHJcbiAgICAgICAgYXVkaW9FbmdpbmU/LnVubG9jaygpO1xyXG5cclxuICAgICAgICAvLyBXZWJBdWRpbyBzb3VuZCBzb3VyY2VzIGhhdmUgbm8gYHBsYXlgIGZ1bmN0aW9uIGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIHBsYXlpbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNSZWFkeVRvUGxheSAmJiB0aGlzLl9zY2VuZS5hdWRpb0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gVGhlIHNvdW5kIGNhbiBvbmx5IHJlc3VtZSBmcm9tIHBhdXNlIHdoZW4gdGhlIGB0aW1lYCwgYG9mZnNldGAgYW5kIGBsZW5ndGhgIGFyZ3MgYXJlIG5vdCBzZXQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb3VuZFYyLnN0YXRlID09PSBTb3VuZFN0YXRlLlBhdXNlZCAmJiAodGltZSAhPT0gdW5kZWZpbmVkIHx8IG9mZnNldCAhPT0gdW5kZWZpbmVkIHx8IGxlbmd0aCAhPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRWMi5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBUbXBQbGF5T3B0aW9ucy5kdXJhdGlvbiA9IGxlbmd0aCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgVG1wUGxheU9wdGlvbnMuc3RhcnRPZmZzZXQgPSBvZmZzZXQgIT09IHVuZGVmaW5lZCA/IG9mZnNldCB8fCB0aGlzLl9vcHRpb25zVjIuc3RhcnRPZmZzZXQhIDogdGhpcy5fb3B0aW9uc1YyLnN0YXJ0T2Zmc2V0ITtcclxuICAgICAgICAgICAgICAgIFRtcFBsYXlPcHRpb25zLndhaXRUaW1lID0gdGltZSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhdWRpb0VuZ2luZT8udW5sb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnBsYXkoVG1wUGxheU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGEgYml0IGZvciBGRiBhcyBjb250ZXh0IHNlZW1zIGxhdGUgdG8gYmUgcmVhZHkuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9zb3VuZFYyIGFzIF9XZWJBdWRpb1N0YXRpY1NvdW5kIHwgX1dlYkF1ZGlvU3RyZWFtaW5nU291bmQpLnBsYXkoVG1wUGxheU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJFcnJvciB3aGlsZSB0cnlpbmcgdG8gcGxheSBhdWRpbzogXCIgKyB0aGlzLm5hbWUgKyBcIiwgXCIgKyBleC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbmVuZGVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9uZW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbmVuZGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FbmRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3AgdGhlIHNvdW5kXHJcbiAgICAgKiBAcGFyYW0gdGltZSAob3B0aW9uYWwpIFN0b3AgdGhlIHNvdW5kIGFmdGVyIFggc2Vjb25kcy4gU3RvcCBpbW1lZGlhdGVseSAoMCkgYnkgZGVmYXVsdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3AodGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc291bmRWMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZWJBdWRpbyBzb3VuZCBzb3VyY2VzIGhhdmUgbm8gYHN0b3BgIGZ1bmN0aW9uIGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIHBsYXlpbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUbXBTdG9wT3B0aW9ucy53YWl0VGltZSA9IHRpbWUgfHwgMDtcclxuICAgICAgICB0aGlzLl9zb3VuZFYyLnN0b3AoVG1wU3RvcE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHV0IHRoZSBzb3VuZCBpbiBwYXVzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zb3VuZFYyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdlYkF1ZGlvIHNvdW5kIHNvdXJjZXMgaGF2ZSBubyBgcGF1c2VgIGZ1bmN0aW9uIGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIHBsYXlpbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9Tb3VuZFNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zb3VuZFYyLnBhdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGEgZGVkaWNhdGVkIHZvbHVtZSBmb3IgdGhpcyBzb3VuZHNcclxuICAgICAqIEBwYXJhbSBuZXdWb2x1bWUgRGVmaW5lIHRoZSBuZXcgdm9sdW1lIG9mIHRoZSBzb3VuZFxyXG4gICAgICogQHBhcmFtIHRpbWUgRGVmaW5lIHRpbWUgZm9yIGdyYWR1YWwgY2hhbmdlIHRvIG5ldyB2b2x1bWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFZvbHVtZShuZXdWb2x1bWU6IG51bWJlciwgdGltZT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25SZWFkeS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Vm9sdW1lKG5ld1ZvbHVtZSwgdGltZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUbXBSYW1wT3B0aW9ucy5kdXJhdGlvbiA9IHRpbWUgfHwgMDtcclxuICAgICAgICB0aGlzLl9zb3VuZFYyLnNldFZvbHVtZShuZXdWb2x1bWUsIFRtcFJhbXBPcHRpb25zKTtcclxuICAgICAgICB0aGlzLl92b2x1bWUgPSBuZXdWb2x1bWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHNvdW5kIHBsYXkgYmFjayByYXRlXHJcbiAgICAgKiBAcGFyYW0gbmV3UGxheWJhY2tSYXRlIERlZmluZSB0aGUgcGxheWJhY2sgcmF0ZSB0aGUgc291bmQgc2hvdWxkIGJlIHBsYXllZCBhdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0UGxheWJhY2tSYXRlKG5ld1BsYXliYWNrUmF0ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFYyLnBsYXliYWNrUmF0ZSA9IG5ld1BsYXliYWNrUmF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBzb3VuZCBwbGF5IGJhY2sgcmF0ZS5cclxuICAgICAqIEByZXR1cm5zIHRoZSAgcGxheSBiYWNrIHJhdGUgb2YgdGhlIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRWMiBpbnN0YW5jZW9mIF9XZWJBdWRpb1N0YXRpY1NvdW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFYyLnBsYXliYWNrUmF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdm9sdW1lIG9mIHRoZSBzb3VuZC5cclxuICAgICAqIEByZXR1cm5zIHRoZSB2b2x1bWUgb2YgdGhlIHNvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRWb2x1bWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdm9sdW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIHRoZSBzb3VuZCB0byBhIGRlZGljYXRlZCBtZXNoXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtTm9kZSBUaGUgdHJhbnNmb3JtIG5vZGUgdG8gY29ubmVjdCB0aGUgc291bmQgd2l0aFxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2xlZ2FjeS9hdWRpbyNhdHRhY2hpbmctYS1zb3VuZC10by1hLW1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaFRvTWVzaCh0cmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy5fcmVnaXN0ZXJGdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUudW5yZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fcmVnaXN0ZXJGdW5jKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJGdW5jID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSA9IHRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwYXRpYWxTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwYXRpYWxTb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGxheWluZyAmJiB0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KDAsIHRoaXMuX29wdGlvbnNWMi5zdGFydE9mZnNldCwgdGhpcy5fb3B0aW9uc1YyLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vblJlZ2lzdGVyQWZ0ZXJXb3JsZE1hdHJpeFVwZGF0ZSh0aGlzLl9jb25uZWN0ZWRUcmFuc2Zvcm1Ob2RlKTtcclxuICAgICAgICB0aGlzLl9yZWdpc3RlckZ1bmMgPSAodHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdGhpcy5fb25SZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZS5yZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fcmVnaXN0ZXJGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGFjaCB0aGUgc291bmQgZnJvbSB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBtZXNoXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vbGVnYWN5L2F1ZGlvI2F0dGFjaGluZy1hLXNvdW5kLXRvLWEtbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGV0YWNoRnJvbU1lc2goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUgJiYgdGhpcy5fcmVnaXN0ZXJGdW5jKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUudW5yZWdpc3RlckFmdGVyV29ybGRNYXRyaXhVcGRhdGUodGhpcy5fcmVnaXN0ZXJGdW5jKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJGdW5jID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uUmVnaXN0ZXJBZnRlcldvcmxkTWF0cml4VXBkYXRlKG5vZGU6IFRyYW5zZm9ybU5vZGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoISg8YW55Pm5vZGUpLmdldEJvdW5kaW5nSW5mbykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKG5vZGUuYWJzb2x1dGVQb3NpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaCA9IG5vZGUgYXMgQWJzdHJhY3RNZXNoO1xyXG4gICAgICAgICAgICBjb25zdCBib3VuZGluZ0luZm8gPSBtZXNoLmdldEJvdW5kaW5nSW5mbygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGJvdW5kaW5nSW5mby5ib3VuZGluZ1NwaGVyZS5jZW50ZXJXb3JsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9pc0RpcmVjdGlvbmFsICYmIHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb25lIHRoZSBjdXJyZW50IHNvdW5kIGluIHRoZSBzY2VuZS5cclxuICAgICAqIEByZXR1cm5zIHRoZSBuZXcgc291bmQgY2xvbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb25lKCk6IE51bGxhYmxlPFNvdW5kPiB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5fc291bmRWMiBpbnN0YW5jZW9mIF9XZWJBdWRpb1N0YXRpY1NvdW5kKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zOiBJU291bmRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdXRvcGxheTogdGhpcy5hdXRvcGxheSxcclxuICAgICAgICAgICAgbG9vcDogdGhpcy5sb29wLFxyXG4gICAgICAgICAgICB2b2x1bWU6IHRoaXMuX3ZvbHVtZSxcclxuICAgICAgICAgICAgc3BhdGlhbFNvdW5kOiB0aGlzLnNwYXRpYWxTb3VuZCxcclxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IHRoaXMubWF4RGlzdGFuY2UsXHJcbiAgICAgICAgICAgIHVzZUN1c3RvbUF0dGVudWF0aW9uOiB0aGlzLnVzZUN1c3RvbUF0dGVudWF0aW9uLFxyXG4gICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0aGlzLnJvbGxvZmZGYWN0b3IsXHJcbiAgICAgICAgICAgIHJlZkRpc3RhbmNlOiB0aGlzLnJlZkRpc3RhbmNlLFxyXG4gICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0aGlzLmRpc3RhbmNlTW9kZWwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjbG9uZWRTb3VuZCA9IG5ldyBTb3VuZCh0aGlzLm5hbWUgKyBcIl9jbG9uZWRcIiwgdGhpcy5fc291bmRWMi5idWZmZXIsIHRoaXMuX3NjZW5lLCBudWxsLCBjdXJyZW50T3B0aW9ucyk7XHJcbiAgICAgICAgKGNsb25lZFNvdW5kLl9vcHRpb25zVjIgYXMgYW55KSA9IHRoaXMuX29wdGlvbnNWMjtcclxuICAgICAgICBpZiAodGhpcy51c2VDdXN0b21BdHRlbnVhdGlvbikge1xyXG4gICAgICAgICAgICBjbG9uZWRTb3VuZC5zZXRBdHRlbnVhdGlvbkZ1bmN0aW9uKHRoaXMuX2N1c3RvbUF0dGVudWF0aW9uRnVuY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xvbmVkU291bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHVuZGVybHlpbmcgYXVkaW8gYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRhdGFcclxuICAgICAqIEByZXR1cm5zIHRoZSBhdWRpbyBidWZmZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEF1ZGlvQnVmZmVyKCk6IE51bGxhYmxlPEF1ZGlvQnVmZmVyPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kVjIgaW5zdGFuY2VvZiBfV2ViQXVkaW9TdGF0aWNTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc291bmRWMi5idWZmZXIuX2F1ZGlvQnVmZmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIFdlYkF1ZGlvIEF1ZGlvQnVmZmVyU291cmNlTm9kZSwgbGV0cyB5b3Uga2VlcCB0cmFjayBvZiBhbmQgc3RvcCBpbnN0YW5jZXMgb2YgdGhpcyBTb3VuZC5cclxuICAgICAqIEByZXR1cm5zIHRoZSBzb3VyY2Ugbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U291bmRTb3VyY2UoKTogTnVsbGFibGU8QXVkaW9CdWZmZXJTb3VyY2VOb2RlPiB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX3NvdW5kU291cmNlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgV2ViQXVkaW8gR2Fpbk5vZGUsIGdpdmVzIHlvdSBwcmVjaXNlIGNvbnRyb2wgb3ZlciB0aGUgZ2FpbiBvZiBpbnN0YW5jZXMgb2YgdGhpcyBTb3VuZC5cclxuICAgICAqIEByZXR1cm5zIHRoZSBnYWluIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNvdW5kR2FpbigpOiBOdWxsYWJsZTxHYWluTm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZFYyLl9vdXROb2RlIGFzIEdhaW5Ob2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGUgU291bmQgaW4gYSBKU09OIHJlcHJlc2VudGF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMuX3VybCxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRoaXMuYXV0b3BsYXksXHJcbiAgICAgICAgICAgIGxvb3A6IHRoaXMubG9vcCxcclxuICAgICAgICAgICAgdm9sdW1lOiB0aGlzLl92b2x1bWUsXHJcbiAgICAgICAgICAgIHNwYXRpYWxTb3VuZDogdGhpcy5zcGF0aWFsU291bmQsXHJcbiAgICAgICAgICAgIG1heERpc3RhbmNlOiB0aGlzLm1heERpc3RhbmNlLFxyXG4gICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0aGlzLnJvbGxvZmZGYWN0b3IsXHJcbiAgICAgICAgICAgIHJlZkRpc3RhbmNlOiB0aGlzLnJlZkRpc3RhbmNlLFxyXG4gICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0aGlzLmRpc3RhbmNlTW9kZWwsXHJcbiAgICAgICAgICAgIHBsYXliYWNrUmF0ZTogdGhpcy5nZXRQbGF5YmFja1JhdGUoKSxcclxuICAgICAgICAgICAgcGFubmluZ01vZGVsOiB0aGlzLl9zb3VuZFYyLnNwYXRpYWwucGFubmluZ01vZGVsLFxyXG4gICAgICAgICAgICBzb3VuZFRyYWNrSWQ6IHRoaXMuc291bmRUcmFja0lkLFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zcGF0aWFsU291bmQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29ubmVjdGVkTWVzaElkID0gdGhpcy5fY29ubmVjdGVkVHJhbnNmb3JtTm9kZS5pZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5wb3NpdGlvbiA9IHRoaXMuX3NvdW5kVjIuc3BhdGlhbC5wb3NpdGlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucmVmRGlzdGFuY2UgPSB0aGlzLnJlZkRpc3RhbmNlO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmRpc3RhbmNlTW9kZWwgPSB0aGlzLmRpc3RhbmNlTW9kZWw7XHJcblxyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlzRGlyZWN0aW9uYWwgPSB0aGlzLl9pc0RpcmVjdGlvbmFsO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmxvY2FsRGlyZWN0aW9uVG9NZXNoID0gdGhpcy5fbG9jYWxEaXJlY3Rpb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmVJbm5lckFuZ2xlID0gdGhpcy5kaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmVPdXRlckFuZ2xlID0gdGhpcy5kaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmVPdXRlckdhaW4gPSB0aGlzLl9zb3VuZFYyLnNwYXRpYWwuY29uZU91dGVyVm9sdW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgYSBzb3VuZCB0byBpbnN0YW50aWF0ZSBpbiBhIGdpdmVuIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VkU291bmQgRGVmaW5lIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzb3VuZCAodXN1YWxseSBjb21pbmcgZnJvbSB0aGUgc2VyaWFsaXplIG1ldGhvZClcclxuICAgICAqIEBwYXJhbSBzY2VuZSBEZWZpbmUgdGhlIHNjZW5lIHRoZSBuZXcgcGFyc2VkIHNvdW5kIHNob3VsZCBiZSBjcmVhdGVkIGluXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBEZWZpbmUgdGhlIHJvb3R1cmwgb2YgdGhlIGxvYWQgaW4gY2FzZSB3ZSBuZWVkIHRvIGZldGNoIHJlbGF0aXZlIGRlcGVuZGVuY2llc1xyXG4gICAgICogQHBhcmFtIHNvdXJjZVNvdW5kIERlZmluZSBhIHNvdW5kIHBsYWNlIGhvbGRlciBpZiBkbyBub3QgbmVlZCB0byBpbnN0YW50aWF0ZSBhIG5ldyBvbmVcclxuICAgICAqIEByZXR1cm5zIHRoZSBuZXdseSBwYXJzZWQgc291bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQYXJzZShwYXJzZWRTb3VuZDogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZywgc291cmNlU291bmQ/OiBTb3VuZCk6IFNvdW5kIHtcclxuICAgICAgICBjb25zdCBzb3VuZE5hbWUgPSBwYXJzZWRTb3VuZC5uYW1lO1xyXG4gICAgICAgIGxldCBzb3VuZFVybDtcclxuICAgICAgICBpZiAocGFyc2VkU291bmQudXJsKSB7XHJcbiAgICAgICAgICAgIHNvdW5kVXJsID0gcm9vdFVybCArIHBhcnNlZFNvdW5kLnVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VuZFVybCA9IHJvb3RVcmwgKyBzb3VuZE5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBwYXJzZWRTb3VuZC5hdXRvcGxheSxcclxuICAgICAgICAgICAgbG9vcDogcGFyc2VkU291bmQubG9vcCxcclxuICAgICAgICAgICAgdm9sdW1lOiBwYXJzZWRTb3VuZC52b2x1bWUsXHJcbiAgICAgICAgICAgIHNwYXRpYWxTb3VuZDogcGFyc2VkU291bmQuc3BhdGlhbFNvdW5kLFxyXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogcGFyc2VkU291bmQubWF4RGlzdGFuY2UsXHJcbiAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHBhcnNlZFNvdW5kLnJvbGxvZmZGYWN0b3IsXHJcbiAgICAgICAgICAgIHJlZkRpc3RhbmNlOiBwYXJzZWRTb3VuZC5yZWZEaXN0YW5jZSxcclxuICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogcGFyc2VkU291bmQuZGlzdGFuY2VNb2RlbCxcclxuICAgICAgICAgICAgcGxheWJhY2tSYXRlOiBwYXJzZWRTb3VuZC5wbGF5YmFja1JhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgbmV3U291bmQ6IFNvdW5kO1xyXG4gICAgICAgIGlmICghc291cmNlU291bmQpIHtcclxuICAgICAgICAgICAgbmV3U291bmQgPSBuZXcgU291bmQoXHJcbiAgICAgICAgICAgICAgICBzb3VuZE5hbWUsXHJcbiAgICAgICAgICAgICAgICBzb3VuZFVybCxcclxuICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbW92ZVBlbmRpbmdEYXRhKG5ld1NvdW5kKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZFBlbmRpbmdEYXRhKG5ld1NvdW5kKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZXRCdWZmZXJBbmRSdW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfUmV0cnlXaXRoSW50ZXJ2YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gc291cmNlU291bmQuX2lzUmVhZHlUb1BsYXksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0J1ZmZlciA9IHNvdXJjZVNvdW5kLmdldEF1ZGlvQnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdWRpb0J1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U291bmQuc2V0QXVkaW9CdWZmZXIoYXVkaW9CdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NvdW5kLl9pc1JlYWR5VG9QbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NvdW5kLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTb3VuZC5wbGF5KDAsIHNvdXJjZVNvdW5kLl9vcHRpb25zVjIuc3RhcnRPZmZzZXQsIHNvdXJjZVNvdW5kLl9vcHRpb25zVjIuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBuZXdTb3VuZCA9IG5ldyBTb3VuZChzb3VuZE5hbWUsIG5ldyBBcnJheUJ1ZmZlcigwKSwgc2NlbmUsIG51bGwsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRCdWZmZXJBbmRSdW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcnNlZFNvdW5kLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdW5kUG9zaXRpb24gPSBWZWN0b3IzLkZyb21BcnJheShwYXJzZWRTb3VuZC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIG5ld1NvdW5kLnNldFBvc2l0aW9uKHNvdW5kUG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyc2VkU291bmQuaXNEaXJlY3Rpb25hbCkge1xyXG4gICAgICAgICAgICBuZXdTb3VuZC5zZXREaXJlY3Rpb25hbENvbmUocGFyc2VkU291bmQuY29uZUlubmVyQW5nbGUgfHwgMzYwLCBwYXJzZWRTb3VuZC5jb25lT3V0ZXJBbmdsZSB8fCAzNjAsIHBhcnNlZFNvdW5kLmNvbmVPdXRlckdhaW4gfHwgMCk7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZWRTb3VuZC5sb2NhbERpcmVjdGlvblRvTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxEaXJlY3Rpb25Ub01lc2ggPSBWZWN0b3IzLkZyb21BcnJheShwYXJzZWRTb3VuZC5sb2NhbERpcmVjdGlvblRvTWVzaCk7XHJcbiAgICAgICAgICAgICAgICBuZXdTb3VuZC5zZXRMb2NhbERpcmVjdGlvblRvTWVzaChsb2NhbERpcmVjdGlvblRvTWVzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcnNlZFNvdW5kLmNvbm5lY3RlZE1lc2hJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0ZWRNZXNoID0gc2NlbmUuZ2V0TWVzaEJ5SWQocGFyc2VkU291bmQuY29ubmVjdGVkTWVzaElkKTtcclxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NvdW5kLmF0dGFjaFRvTWVzaChjb25uZWN0ZWRNZXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyc2VkU291bmQubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbmV3U291bmQubWV0YWRhdGEgPSBwYXJzZWRTb3VuZC5tZXRhZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1NvdW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZWdpc3RlciBDbGFzcyBOYW1lXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLlNvdW5kXCIsIFNvdW5kKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBTb3VuZCB9IGZyb20gXCIuL3NvdW5kXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5hbHlzZXIgfSBmcm9tIFwiLi9hbmFseXNlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiLi4vRW5naW5lcy9lbmdpbmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdEVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGFsbG93ZWQgZHVyaW5nIHRoZSBjcmVhdGlvbiBvZiBhIHNvdW5kIHRyYWNrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU291bmRUcmFja09wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdm9sdW1lIHRoZSBzb3VuZCB0cmFjayBzaG91bGQgdGFrZSBkdXJpbmcgY3JlYXRpb25cclxuICAgICAqL1xyXG4gICAgdm9sdW1lPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmUgaWYgdGhlIHNvdW5kIHRyYWNrIGlzIHRoZSBtYWluIHNvdW5kIHRyYWNrIG9mIHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBtYWluVHJhY2s/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogSXQgY291bGQgYmUgdXNlZnVsIHRvIGlzb2xhdGUgeW91ciBtdXNpYyAmIHNvdW5kcyBvbiBzZXZlcmFsIHRyYWNrcyB0byBiZXR0ZXIgbWFuYWdlIHZvbHVtZSBvbiBhIGdyb3VwZWQgaW5zdGFuY2Ugb2Ygc291bmRzLlxyXG4gKiBJdCB3aWxsIGJlIGFsc28gdXNlZCBpbiBhIGZ1dHVyZSByZWxlYXNlIHRvIGFwcGx5IGVmZmVjdHMgb24gYSBzcGVjaWZpYyB0cmFjay5cclxuICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI3VzaW5nLXNvdW5kLXRyYWNrc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNvdW5kVHJhY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHNvdW5kIHRyYWNrIGluIHRoZSBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpc3Qgb2Ygc291bmRzIGluY2x1ZGVkIGluIHRoZSBzb3VuZCB0cmFjay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdW5kQ29sbGVjdGlvbjogQXJyYXk8U291bmQ+O1xyXG5cclxuICAgIHByaXZhdGUgX291dHB1dEF1ZGlvTm9kZTogTnVsbGFibGU8R2Fpbk5vZGU+O1xyXG4gICAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkQW5hbHlzZXI6IEFuYWx5c2VyO1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uczogSVNvdW5kVHJhY2tPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzb3VuZCB0cmFjay5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2F1ZGlvL3BsYXlpbmdTb3VuZHNNdXNpYyN1c2luZy1zb3VuZC10cmFja3NcclxuICAgICAqIEBwYXJhbSBzY2VuZSBEZWZpbmUgdGhlIHNjZW5lIHRoZSBzb3VuZCB0cmFjayBiZWxvbmdzIHRvXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZT86IE51bGxhYmxlPFNjZW5lPiwgb3B0aW9uczogSVNvdW5kVHJhY2tPcHRpb25zID0ge30pIHtcclxuICAgICAgICBzY2VuZSA9IHNjZW5lIHx8IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmU7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5zb3VuZENvbGxlY3Rpb24gPSBbXTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLm1haW5UcmFjayAmJiB0aGlzLl9zY2VuZS5zb3VuZFRyYWNrcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5zb3VuZFRyYWNrcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5fc2NlbmUuc291bmRUcmFja3MubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZVNvdW5kVHJhY2tBdWRpb0dyYXBoKCkge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmUuYXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZSA9IEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZS5jb25uZWN0KEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLm1hc3RlckdhaW4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnZvbHVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZS5nYWluLnZhbHVlID0gdGhpcy5fb3B0aW9ucy52b2x1bWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbGVhc2UgdGhlIHNvdW5kIHRyYWNrIGFuZCBpdHMgYXNzb2NpYXRlZCByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lICYmIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLmNhblVzZVdlYkF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRBbmFseXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkQW5hbHlzZXIuc3RvcERlYnVnQ2FudmFzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc291bmRDb2xsZWN0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENvbGxlY3Rpb25bMF0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vdXRwdXRBdWRpb05vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgc291bmQgdG8gdGhpcyBzb3VuZCB0cmFja1xyXG4gICAgICogQHBhcmFtIHNvdW5kIGRlZmluZSB0aGUgc291bmQgdG8gYWRkXHJcbiAgICAgKiBAaWdub3JlTmFtaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRTb3VuZChzb3VuZDogU291bmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVNvdW5kVHJhY2tBdWRpb0dyYXBoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgIHNvdW5kLmNvbm5lY3RUb1NvdW5kVHJhY2tBdWRpb05vZGUodGhpcy5fb3V0cHV0QXVkaW9Ob2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvdW5kLnNvdW5kVHJhY2tJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChzb3VuZC5zb3VuZFRyYWNrSWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZS5tYWluU291bmRUcmFjay5yZW1vdmVTb3VuZChzb3VuZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2NlbmUuc291bmRUcmFja3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lLnNvdW5kVHJhY2tzW3NvdW5kLnNvdW5kVHJhY2tJZF0ucmVtb3ZlU291bmQoc291bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNvdW5kQ29sbGVjdGlvbi5wdXNoKHNvdW5kKTtcclxuICAgICAgICBzb3VuZC5zb3VuZFRyYWNrSWQgPSB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIHNvdW5kIHRvIHRoaXMgc291bmQgdHJhY2tcclxuICAgICAqIEBwYXJhbSBzb3VuZCBkZWZpbmUgdGhlIHNvdW5kIHRvIHJlbW92ZVxyXG4gICAgICogQGlnbm9yZU5hbWluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlU291bmQoc291bmQ6IFNvdW5kKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNvdW5kQ29sbGVjdGlvbi5pbmRleE9mKHNvdW5kKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRDb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgZ2xvYmFsIHZvbHVtZSBmb3IgdGhlIGZ1bGwgc291bmQgdHJhY2suXHJcbiAgICAgKiBAcGFyYW0gbmV3Vm9sdW1lIERlZmluZSB0aGUgbmV3IHZvbHVtZSBvZiB0aGUgc291bmQgdHJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFZvbHVtZShuZXdWb2x1bWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8gJiYgdGhpcy5fb3V0cHV0QXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEF1ZGlvTm9kZS5nYWluLnZhbHVlID0gbmV3Vm9sdW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCB0aGUgcGFubmluZyBtb2RlbCB0byBIUlRGOlxyXG4gICAgICogUmVuZGVycyBhIHN0ZXJlbyBvdXRwdXQgb2YgaGlnaGVyIHF1YWxpdHkgdGhhbiBlcXVhbHBvd2VyIOKAlCBpdCB1c2VzIGEgY29udm9sdXRpb24gd2l0aCBtZWFzdXJlZCBpbXB1bHNlIHJlc3BvbnNlcyBmcm9tIGh1bWFuIHN1YmplY3RzLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3dpdGNoUGFubmluZ01vZGVsVG9IUlRGKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENvbGxlY3Rpb25baV0uc3dpdGNoUGFubmluZ01vZGVsVG9IUlRGKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdGhlIHBhbm5pbmcgbW9kZWwgdG8gRXF1YWwgUG93ZXI6XHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBlcXVhbC1wb3dlciBwYW5uaW5nIGFsZ29yaXRobSwgZ2VuZXJhbGx5IHJlZ2FyZGVkIGFzIHNpbXBsZSBhbmQgZWZmaWNpZW50LiBlcXVhbHBvd2VyIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI2NyZWF0aW5nLWEtc3BhdGlhbC0zZC1zb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3dpdGNoUGFubmluZ01vZGVsVG9FcXVhbFBvd2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBYnN0cmFjdEVuZ2luZS5hdWRpb0VuZ2luZT8uY2FuVXNlV2ViQXVkaW8pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvdW5kQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENvbGxlY3Rpb25baV0uc3dpdGNoUGFubmluZ01vZGVsVG9FcXVhbFBvd2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25uZWN0IHRoZSBzb3VuZCB0cmFjayB0byBhbiBhdWRpbyBhbmFseXNlciBhbGxvd2luZyBzb21lIGFtYXppbmdcclxuICAgICAqIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHRoZSBzb3VuZHMvbXVzaWMgYW5kIHlvdXIgdmlzdWFsaXphdGlvbiAoVnVNZXRlciBmb3IgaW5zdGFuY2UpLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYXVkaW8vcGxheWluZ1NvdW5kc011c2ljI3VzaW5nLXRoZS1hbmFseXNlclxyXG4gICAgICogQHBhcmFtIGFuYWx5c2VyIFRoZSBhbmFseXNlciB0byBjb25uZWN0IHRvIHRoZSBlbmdpbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbm5lY3RUb0FuYWx5c2VyKGFuYWx5c2VyOiBBbmFseXNlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWRBbmFseXNlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRBbmFseXNlci5zdG9wRGVidWdDYW52YXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkQW5hbHlzZXIgPSBhbmFseXNlcjtcclxuICAgICAgICBpZiAoQWJzdHJhY3RFbmdpbmUuYXVkaW9FbmdpbmU/LmNhblVzZVdlYkF1ZGlvICYmIHRoaXMuX291dHB1dEF1ZGlvTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRwdXRBdWRpb05vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRBbmFseXNlci5jb25uZWN0QXVkaW9Ob2Rlcyh0aGlzLl9vdXRwdXRBdWRpb05vZGUsIEFic3RyYWN0RW5naW5lLmF1ZGlvRW5naW5lLm1hc3RlckdhaW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFNvdW5kIH0gZnJvbSBcIi4uL0F1ZGlvL3NvdW5kXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9NaXNjL2xvZ2dlclwiO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIG9uZSBvciBtb3JlIFNvdW5kIG9iamVjdHMgYW5kIHNlbGVjdHMgb25lIHdpdGggcmFuZG9tIHdlaWdodCBmb3IgcGxheWJhY2suXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2VpZ2h0ZWRTb3VuZCB7XHJcbiAgICAvKiogV2hlbiB0cnVlIGEgU291bmQgd2lsbCBiZSBzZWxlY3RlZCBhbmQgcGxheWVkIHdoZW4gdGhlIGN1cnJlbnQgcGxheWluZyBTb3VuZCBjb21wbGV0ZXMuICovXHJcbiAgICBwdWJsaWMgbG9vcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY29uZUlubmVyQW5nbGU6IG51bWJlciA9IDM2MDtcclxuICAgIHByaXZhdGUgX2NvbmVPdXRlckFuZ2xlOiBudW1iZXIgPSAzNjA7XHJcbiAgICBwcml2YXRlIF92b2x1bWU6IG51bWJlciA9IDE7XHJcbiAgICAvKiogQSBTb3VuZCBpcyBjdXJyZW50bHkgcGxheWluZy4gKi9cclxuICAgIHB1YmxpYyBpc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBBIFNvdW5kIGlzIGN1cnJlbnRseSBwYXVzZWQuICovXHJcbiAgICBwdWJsaWMgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9zb3VuZHM6IFNvdW5kW10gPSBbXTtcclxuICAgIHByaXZhdGUgX3dlaWdodHM6IG51bWJlcltdID0gW107XHJcbiAgICBwcml2YXRlIF9jdXJyZW50SW5kZXg/OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFdlaWdodGVkU291bmQgZnJvbSB0aGUgbGlzdCBvZiBzb3VuZHMgZ2l2ZW4uXHJcbiAgICAgKiBAcGFyYW0gbG9vcCBXaGVuIHRydWUgYSBTb3VuZCB3aWxsIGJlIHNlbGVjdGVkIGFuZCBwbGF5ZWQgd2hlbiB0aGUgY3VycmVudCBwbGF5aW5nIFNvdW5kIGNvbXBsZXRlcy5cclxuICAgICAqIEBwYXJhbSBzb3VuZHMgQXJyYXkgb2YgU291bmRzIHRoYXQgd2lsbCBiZSBzZWxlY3RlZCBmcm9tLlxyXG4gICAgICogQHBhcmFtIHdlaWdodHMgQXJyYXkgb2YgbnVtYmVyIHZhbHVlcyBmb3Igc2VsZWN0aW9uIHdlaWdodHM7IGxlbmd0aCBtdXN0IGVxdWFsIHNvdW5kcywgdmFsdWVzIHdpbGwgYmUgbm9ybWFsaXplZCB0byAxXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvb3A6IGJvb2xlYW4sIHNvdW5kczogU291bmRbXSwgd2VpZ2h0czogbnVtYmVyW10pIHtcclxuICAgICAgICBpZiAoc291bmRzLmxlbmd0aCAhPT0gd2VpZ2h0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU291bmRzIGxlbmd0aCBkb2VzIG5vdCBlcXVhbCB3ZWlnaHRzIGxlbmd0aFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy5fd2VpZ2h0cyA9IHdlaWdodHM7XHJcbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSB3ZWlnaHRzXHJcbiAgICAgICAgbGV0IHdlaWdodFN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCB3ZWlnaHQgb2Ygd2VpZ2h0cykge1xyXG4gICAgICAgICAgICB3ZWlnaHRTdW0gKz0gd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnZXZWlnaHRTdW0gPSB3ZWlnaHRTdW0gPiAwID8gMSAvIHdlaWdodFN1bSA6IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93ZWlnaHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlaWdodHNbaV0gKj0gaW52V2VpZ2h0U3VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zb3VuZHMgPSBzb3VuZHM7XHJcbiAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiB0aGlzLl9zb3VuZHMpIHtcclxuICAgICAgICAgICAgc291bmQub25FbmRlZE9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uZW5kZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNpemUgb2YgY29uZSBpbiBkZWdyZWVzIGZvciBhIGRpcmVjdGlvbmFsIHNvdW5kIGluIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gYXR0ZW51YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uYWxDb25lSW5uZXJBbmdsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25lSW5uZXJBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzaXplIG9mIGNvbmUgaW4gZGVncmVlcyBmb3IgYSBkaXJlY3Rpb25hbCBzb3VuZCBpbiB3aGljaCB0aGVyZSB3aWxsIGJlIG5vIGF0dGVudWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29uZUlubmVyQW5nbGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmVPdXRlckFuZ2xlIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihcImRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGU6IG91dGVyIGFuZ2xlIG9mIHRoZSBjb25lIG11c3QgYmUgc3VwZXJpb3Igb3IgZXF1YWwgdG8gdGhlIGlubmVyIGFuZ2xlLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY29uZUlubmVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzb3VuZCBvZiB0aGlzLl9zb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgIHNvdW5kLmRpcmVjdGlvbmFsQ29uZUlubmVyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpemUgb2YgY29uZSBpbiBkZWdyZWVzIGZvciBhIGRpcmVjdGlvbmFsIHNvdW5kIG91dHNpZGUgb2Ygd2hpY2ggdGhlcmUgd2lsbCBiZSBubyBzb3VuZC5cclxuICAgICAqIExpc3RlbmVyIGFuZ2xlcyBiZXR3ZWVuIGlubmVyQW5nbGUgYW5kIG91dGVyQW5nbGUgd2lsbCBmYWxsb2ZmIGxpbmVhcmx5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbmFsQ29uZU91dGVyQW5nbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZU91dGVyQW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaXplIG9mIGNvbmUgaW4gZGVncmVlcyBmb3IgYSBkaXJlY3Rpb25hbCBzb3VuZCBvdXRzaWRlIG9mIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gc291bmQuXHJcbiAgICAgKiBMaXN0ZW5lciBhbmdsZXMgYmV0d2VlbiBpbm5lckFuZ2xlIGFuZCBvdXRlckFuZ2xlIHdpbGwgZmFsbG9mZiBsaW5lYXJseS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvbmVPdXRlckFuZ2xlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IHRoaXMuX2NvbmVJbm5lckFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJkaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlOiBvdXRlciBhbmdsZSBvZiB0aGUgY29uZSBtdXN0IGJlIHN1cGVyaW9yIG9yIGVxdWFsIHRvIHRoZSBpbm5lciBhbmdsZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmVPdXRlckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgdGhpcy5fc291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5kaXJlY3Rpb25hbENvbmVPdXRlckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5YmFjayB2b2x1bWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXliYWNrIHZvbHVtZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCB2b2x1bWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdm9sdW1lKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc291bmQgb2YgdGhpcy5fc291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VuZC5zZXRWb2x1bWUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uZW5kZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kc1t0aGlzLl9jdXJyZW50SW5kZXhdLmF1dG9wbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvb3AgJiYgdGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXNwZW5kIHBsYXliYWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXVzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRzW3RoaXMuX2N1cnJlbnRJbmRleF0ucGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3AgcGxheWJhY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudEluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRzW3RoaXMuX2N1cnJlbnRJbmRleF0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHBsYXliYWNrLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0T2Zmc2V0IFBvc2l0aW9uIHRoZSBjbGlwIGhlYWQgYXQgYSBzcGVjaWZpYyB0aW1lIGluIHNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5KHN0YXJ0T2Zmc2V0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21WYWx1ZSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2VpZ2h0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG90YWwgKz0gdGhpcy5fd2VpZ2h0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21WYWx1ZSA8PSB0b3RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc291bmQgPSB0aGlzLl9zb3VuZHNbdGhpcy5fY3VycmVudEluZGV4ID8/IDBdO1xyXG4gICAgICAgIGlmIChzb3VuZC5pc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgc291bmQucGxheSgwLCB0aGlzLmlzUGF1c2VkID8gdW5kZWZpbmVkIDogc3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNvdW5kLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0QXVkaW9Ob2RlIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSVNvdW5kU291cmNlT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL2Fic3RyYWN0U291bmRTb3VyY2VcIjtcbmltcG9ydCB7IEFic3RyYWN0U291bmRTb3VyY2UgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdFNvdW5kU291cmNlXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0U3BhdGlhbEF1ZGlvIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vc3ViUHJvcGVydGllcy9hYnN0cmFjdFNwYXRpYWxBdWRpb1wiO1xuaW1wb3J0IHsgX0hhc1NwYXRpYWxBdWRpb09wdGlvbnMgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL2Fic3RyYWN0U3BhdGlhbEF1ZGlvXCI7XG5pbXBvcnQgeyBfU3RlcmVvQXVkaW8gfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9zdWJQcm9wZXJ0aWVzL3N0ZXJlb0F1ZGlvXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoIH0gZnJvbSBcIi4vc3ViTm9kZXMvd2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoXCI7XG5pbXBvcnQgeyBfU3BhdGlhbFdlYkF1ZGlvIH0gZnJvbSBcIi4vc3ViUHJvcGVydGllcy9zcGF0aWFsV2ViQXVkaW9cIjtcbmltcG9ydCB0eXBlIHsgX1dlYkF1ZGlvRW5naW5lIH0gZnJvbSBcIi4vd2ViQXVkaW9FbmdpbmVcIjtcbmltcG9ydCB0eXBlIHsgSVdlYkF1ZGlvSW5Ob2RlIH0gZnJvbSBcIi4vd2ViQXVkaW9Ob2RlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjbGFzcyBfV2ViQXVkaW9Tb3VuZFNvdXJjZSBleHRlbmRzIEFic3RyYWN0U291bmRTb3VyY2Uge1xuICAgIHByaXZhdGUgX3N0ZXJlbzogTnVsbGFibGU8X1N0ZXJlb0F1ZGlvPiA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgX3N1YkdyYXBoOiBfV2ViQXVkaW9CdXNBbmRTb3VuZFN1YkdyYXBoO1xuICAgIHByb3RlY3RlZCBfd2ViQXVkaW9Ob2RlOiBBdWRpb05vZGU7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dCB8IE9mZmxpbmVBdWRpb0NvbnRleHQ7XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGVuZ2luZTogX1dlYkF1ZGlvRW5naW5lO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdlYkF1ZGlvTm9kZTogQXVkaW9Ob2RlLCBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSwgb3B0aW9uczogUGFydGlhbDxJU291bmRTb3VyY2VPcHRpb25zPikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IHRoaXMuZW5naW5lLl9hdWRpb0NvbnRleHQ7XG4gICAgICAgIHRoaXMuX3dlYkF1ZGlvTm9kZSA9IHdlYkF1ZGlvTm9kZTtcblxuICAgICAgICB0aGlzLl9zdWJHcmFwaCA9IG5ldyBfV2ViQXVkaW9Tb3VuZFNvdXJjZS5fU3ViR3JhcGgodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBhc3luYyBfaW5pdEFzeW5jKG9wdGlvbnM6IFBhcnRpYWw8SVNvdW5kU291cmNlT3B0aW9ucz4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3V0QnVzKSB7XG4gICAgICAgICAgICB0aGlzLm91dEJ1cyA9IG9wdGlvbnMub3V0QnVzO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub3V0QnVzQXV0b0RlZmF1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuZ2luZS5pc1JlYWR5UHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMub3V0QnVzID0gdGhpcy5lbmdpbmUuZGVmYXVsdE1haW5CdXM7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKF9IYXNTcGF0aWFsQXVkaW9PcHRpb25zKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BhdGlhbFByb3BlcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZ2luZS5fYWRkTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBfaW5Ob2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2ViQXVkaW9Ob2RlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IF9vdXROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ViR3JhcGguX291dE5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXQgc3RlcmVvKCk6IF9TdGVyZW9BdWRpbyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVyZW8gPz8gKHRoaXMuX3N0ZXJlbyA9IG5ldyBfU3RlcmVvQXVkaW8odGhpcy5fc3ViR3JhcGgpKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIG92ZXJyaWRlIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLl9zdGVyZW8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoLmRpc3Bvc2UoKTtcblxuICAgICAgICB0aGlzLmVuZ2luZS5fcmVtb3ZlTm9kZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9Tb3VuZFNvdXJjZVwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBfY29ubmVjdChub2RlOiBJV2ViQXVkaW9Jbk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gc3VwZXIuX2Nvbm5lY3Qobm9kZSk7XG5cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSB3cmFwcGVkIG5vZGUgaXMgbm90IGF2YWlsYWJsZSBub3csIGl0IHdpbGwgYmUgY29ubmVjdGVkIGxhdGVyIGJ5IHRoZSBzdWJncmFwaC5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9kaXNjb25uZWN0KG5vZGU6IElXZWJBdWRpb0luTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaXNjb25uZWN0ZWQgPSBzdXBlci5fZGlzY29ubmVjdChub2RlKTtcblxuICAgICAgICBpZiAoIWRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX2luTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0Tm9kZT8uZGlzY29ubmVjdChub2RlLl9pbk5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9jcmVhdGVTcGF0aWFsUHJvcGVydHkoYXV0b1VwZGF0ZTogYm9vbGVhbiwgbWluVXBkYXRlVGltZTogbnVtYmVyKTogQWJzdHJhY3RTcGF0aWFsQXVkaW8ge1xuICAgICAgICByZXR1cm4gbmV3IF9TcGF0aWFsV2ViQXVkaW8odGhpcy5fc3ViR3JhcGgsIGF1dG9VcGRhdGUsIG1pblVwZGF0ZVRpbWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9TdWJHcmFwaCA9IGNsYXNzIGV4dGVuZHMgX1dlYkF1ZGlvQnVzQW5kU291bmRTdWJHcmFwaCB7XG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb3duZXI6IF9XZWJBdWRpb1NvdW5kU291cmNlO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIGdldCBfdXBzdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX3Vwc3RyZWFtTm9kZXMgPz8gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSBfb25TdWJOb2Rlc0NoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgICAgICBzdXBlci5fb25TdWJOb2Rlc0NoYW5nZWQoKTtcblxuICAgICAgICAgICAgdGhpcy5fb3duZXIuX2luTm9kZS5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vd25lci5fc3ViR3JhcGguX2luTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX293bmVyLl9pbk5vZGUuY29ubmVjdCh0aGlzLl9vd25lci5fc3ViR3JhcGguX2luTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb25Hcm91cCB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uR3JvdXBcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkV2ZW50XCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSBcImNvcmUvQXVkaW8vc291bmRcIjtcclxuaW1wb3J0IHsgV2VpZ2h0ZWRTb3VuZCB9IGZyb20gXCJjb3JlL0F1ZGlvL3dlaWdodGVkc291bmRcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUFycmF5SXRlbSwgSVNjZW5lLCBJTm9kZSwgSUFuaW1hdGlvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgR0xURkxvYWRlciwgQXJyYXlJdGVtIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBJTVNGVEF1ZGlvRW1pdHRlcl9DbGlwLCBJTVNGVEF1ZGlvRW1pdHRlcl9FbWl0dGVyLCBJTVNGVEF1ZGlvRW1pdHRlcl9FbWl0dGVyc1JlZmVyZW5jZSwgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnQgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNU0ZUQXVkaW9FbWl0dGVyX0FuaW1hdGlvbkV2ZW50QWN0aW9uIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5cclxuaW1wb3J0IFwiY29yZS9BdWRpby9hdWRpb1NjZW5lQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJNU0ZUX2F1ZGlvX2VtaXR0ZXJcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBNU0ZUX2F1ZGlvX2VtaXR0ZXIgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIk1TRlRfYXVkaW9fZW1pdHRlclwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyQ2xpcCBleHRlbmRzIElNU0ZUQXVkaW9FbWl0dGVyX0NsaXAsIElBcnJheUl0ZW0ge1xyXG4gICAgX29iamVjdFVSTD86IFByb21pc2U8c3RyaW5nPjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJFbWl0dGVyIGV4dGVuZHMgSU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlciwgSUFycmF5SXRlbSB7XHJcbiAgICBfYmFieWxvbkRhdGE/OiB7XHJcbiAgICAgICAgc291bmQ/OiBXZWlnaHRlZFNvdW5kO1xyXG4gICAgICAgIGxvYWRlZDogUHJvbWlzZTx2b2lkPjtcclxuICAgIH07XHJcbiAgICBfYmFieWxvblNvdW5kczogU291bmRbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElNU0ZUQXVkaW9FbWl0dGVyIHtcclxuICAgIGNsaXBzOiBJTG9hZGVyQ2xpcFtdO1xyXG4gICAgZW1pdHRlcnM6IElMb2FkZXJFbWl0dGVyW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTG9hZGVyQW5pbWF0aW9uRXZlbnQgZXh0ZW5kcyBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudCwgSUFycmF5SXRlbSB7fVxyXG5cclxuaW50ZXJmYWNlIElMb2FkZXJBbmltYXRpb25FdmVudHMge1xyXG4gICAgZXZlbnRzOiBJTG9hZGVyQW5pbWF0aW9uRXZlbnRbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtTcGVjaWZpY2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vbmFqYWRvam8vZ2xURi9ibG9iL01TRlRfYXVkaW9fZW1pdHRlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvTVNGVF9hdWRpb19lbWl0dGVyL1JFQURNRS5tZClcclxuICogISEhIEV4cGVyaW1lbnRhbCBFeHRlbnNpb24gU3ViamVjdCB0byBDaGFuZ2VzICEhIVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgTVNGVF9hdWRpb19lbWl0dGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuICAgIHByaXZhdGUgX2NsaXBzOiBBcnJheTxJTG9hZGVyQ2xpcD47XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyczogQXJyYXk8SUxvYWRlckVtaXR0ZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMuX2NsaXBzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgICAgICh0aGlzLl9lbWl0dGVycyBhcyBhbnkpID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgb25Mb2FkaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zICYmIGV4dGVuc2lvbnNbdGhpcy5uYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW3RoaXMubmFtZV0gYXMgSU1TRlRBdWRpb0VtaXR0ZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jbGlwcyA9IGV4dGVuc2lvbi5jbGlwcztcclxuICAgICAgICAgICAgdGhpcy5fZW1pdHRlcnMgPSBleHRlbnNpb24uZW1pdHRlcnM7XHJcblxyXG4gICAgICAgICAgICBBcnJheUl0ZW0uQXNzaWduKHRoaXMuX2NsaXBzKTtcclxuICAgICAgICAgICAgQXJyYXlJdGVtLkFzc2lnbih0aGlzLl9lbWl0dGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRTY2VuZUFzeW5jKGNvbnRleHQ6IHN0cmluZywgc2NlbmU6IElTY2VuZSk6IE51bGxhYmxlPFByb21pc2U8dm9pZD4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2U+KGNvbnRleHQsIHNjZW5lLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTxhbnk+PigpO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkZXIubG9hZFNjZW5lQXN5bmMoY29udGV4dCwgc2NlbmUpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW1pdHRlckluZGV4IG9mIGV4dGVuc2lvbi5lbWl0dGVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLnJlZkRpc3RhbmNlICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIubWF4RGlzdGFuY2UgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5yb2xsb2ZmRmFjdG9yICE9IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGlzdGFuY2VNb2RlbCAhPSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmlubmVyQW5nbGUgIT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5vdXRlckFuZ2xlICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9OiBEaXJlY3Rpb24gb3IgRGlzdGFuY2UgcHJvcGVydGllcyBhcmUgbm90IGFsbG93ZWQgb24gZW1pdHRlcnMgYXR0YWNoZWQgdG8gYSBzY2VuZWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhgJHtleHRlbnNpb25Db250ZXh0fS9lbWl0dGVycy8ke2VtaXR0ZXIuaW5kZXh9YCwgZW1pdHRlcikpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgbG9hZE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBhc3NpZ246IChiYWJ5bG9uVHJhbnNmb3JtTm9kZTogVHJhbnNmb3JtTm9kZSkgPT4gdm9pZCk6IE51bGxhYmxlPFByb21pc2U8VHJhbnNmb3JtTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gR0xURkxvYWRlci5Mb2FkRXh0ZW5zaW9uQXN5bmM8SU1TRlRBdWRpb0VtaXR0ZXJfRW1pdHRlcnNSZWZlcmVuY2UsIFRyYW5zZm9ybU5vZGU+KGNvbnRleHQsIG5vZGUsIHRoaXMubmFtZSwgYXN5bmMgKGV4dGVuc2lvbkNvbnRleHQsIGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWVzaCA9IGF3YWl0IHRoaXMuX2xvYWRlci5sb2FkTm9kZUFzeW5jKGV4dGVuc2lvbkNvbnRleHQsIG5vZGUsIChiYWJ5bG9uTWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbWl0dGVySW5kZXggb2YgZXh0ZW5zaW9uLmVtaXR0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9IEFycmF5SXRlbS5HZXQoYCR7ZXh0ZW5zaW9uQ29udGV4dH0vZW1pdHRlcnNgLCB0aGlzLl9lbWl0dGVycywgZW1pdHRlckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEVtaXR0ZXJBc3luYyhgJHtleHRlbnNpb25Db250ZXh0fS9lbWl0dGVycy8ke2VtaXR0ZXIuaW5kZXh9YCwgZW1pdHRlcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNvdW5kIG9mIGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5hdHRhY2hUb01lc2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLmlubmVyQW5nbGUgIT0gdW5kZWZpbmVkIHx8IGVtaXR0ZXIub3V0ZXJBbmdsZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291bmQuc2V0TG9jYWxEaXJlY3Rpb25Ub01lc2goVmVjdG9yMy5Gb3J3YXJkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5zZXREaXJlY3Rpb25hbENvbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyICogVG9vbHMuVG9EZWdyZWVzKGVtaXR0ZXIuaW5uZXJBbmdsZSA9PSB1bmRlZmluZWQgPyBNYXRoLlBJIDogZW1pdHRlci5pbm5lckFuZ2xlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgKiBUb29scy5Ub0RlZ3JlZXMoZW1pdHRlci5vdXRlckFuZ2xlID09IHVuZGVmaW5lZCA/IE1hdGguUEkgOiBlbWl0dGVyLm91dGVyQW5nbGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFzc2lnbihiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQW5pbWF0aW9uQXN5bmMoY29udGV4dDogc3RyaW5nLCBhbmltYXRpb246IElBbmltYXRpb24pOiBOdWxsYWJsZTxQcm9taXNlPEFuaW1hdGlvbkdyb3VwPj4ge1xyXG4gICAgICAgIHJldHVybiBHTFRGTG9hZGVyLkxvYWRFeHRlbnNpb25Bc3luYzxJTG9hZGVyQW5pbWF0aW9uRXZlbnRzLCBBbmltYXRpb25Hcm91cD4oY29udGV4dCwgYW5pbWF0aW9uLCB0aGlzLm5hbWUsIGFzeW5jIChleHRlbnNpb25Db250ZXh0LCBleHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbkdyb3VwID0gYXdhaXQgdGhpcy5fbG9hZGVyLmxvYWRBbmltYXRpb25Bc3luYyhjb250ZXh0LCBhbmltYXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IG5ldyBBcnJheTxQcm9taXNlPGFueT4+KCk7XHJcbiAgICAgICAgICAgIEFycmF5SXRlbS5Bc3NpZ24oZXh0ZW5zaW9uLmV2ZW50cyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXh0ZW5zaW9uLmV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9sb2FkQW5pbWF0aW9uRXZlbnRBc3luYyhgJHtleHRlbnNpb25Db250ZXh0fS9ldmVudHMvJHtldmVudC5pbmRleH1gLCBjb250ZXh0LCBhbmltYXRpb24sIGV2ZW50LCBiYWJ5bG9uQW5pbWF0aW9uR3JvdXApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZENsaXBBc3luYyhjb250ZXh0OiBzdHJpbmcsIGNsaXA6IElMb2FkZXJDbGlwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBpZiAoY2xpcC5fb2JqZWN0VVJMKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGlwLl9vYmplY3RVUkw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZTogUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+O1xyXG4gICAgICAgIGlmIChjbGlwLnVyaSkge1xyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5fbG9hZGVyLmxvYWRVcmlBc3luYyhjb250ZXh0LCBjbGlwLCBjbGlwLnVyaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IEFycmF5SXRlbS5HZXQoYCR7Y29udGV4dH0vYnVmZmVyVmlld2AsIHRoaXMuX2xvYWRlci5nbHRmLmJ1ZmZlclZpZXdzLCBjbGlwLmJ1ZmZlclZpZXcpO1xyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5fbG9hZGVyLmxvYWRCdWZmZXJWaWV3QXN5bmMoYC9idWZmZXJWaWV3cy8ke2J1ZmZlclZpZXcuaW5kZXh9YCwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICBjbGlwLl9vYmplY3RVUkwgPSBwcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6IGNsaXAubWltZVR5cGUgfSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xpcC5fb2JqZWN0VVJMO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHByaXZhdGUgX2xvYWRFbWl0dGVyQXN5bmMoY29udGV4dDogc3RyaW5nLCBlbWl0dGVyOiBJTG9hZGVyRW1pdHRlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHMgPSBlbWl0dGVyLl9iYWJ5bG9uU291bmRzIHx8IFtdO1xyXG4gICAgICAgIGlmICghZW1pdHRlci5fYmFieWxvbkRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpcFByb21pc2VzID0gbmV3IEFycmF5PFByb21pc2U8YW55Pj4oKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVtaXR0ZXIubmFtZSB8fCBgZW1pdHRlciR7ZW1pdHRlci5pbmRleH1gO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2b2x1bWU6IGVtaXR0ZXIudm9sdW1lID09IHVuZGVmaW5lZCA/IDEgOiBlbWl0dGVyLnZvbHVtZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1pdHRlci5jbGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpcENvbnRleHQgPSBgL2V4dGVuc2lvbnMvJHt0aGlzLm5hbWV9L2NsaXBzYDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaXAgPSBBcnJheUl0ZW0uR2V0KGNsaXBDb250ZXh0LCB0aGlzLl9jbGlwcywgZW1pdHRlci5jbGlwc1tpXS5jbGlwKTtcclxuICAgICAgICAgICAgICAgIGNsaXBQcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRDbGlwQXN5bmMoYCR7Y2xpcENvbnRleHR9LyR7ZW1pdHRlci5jbGlwc1tpXS5jbGlwfWAsIGNsaXApLnRoZW4oKG9iamVjdFVSTDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdW5kID0gKGVtaXR0ZXIuX2JhYnlsb25Tb3VuZHNbaV0gPSBuZXcgU291bmQobmFtZSwgb2JqZWN0VVJMLCB0aGlzLl9sb2FkZXIuYmFieWxvblNjZW5lLCBudWxsLCBvcHRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnJlZkRpc3RhbmNlID0gZW1pdHRlci5yZWZEaXN0YW5jZSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5tYXhEaXN0YW5jZSA9IGVtaXR0ZXIubWF4RGlzdGFuY2UgfHwgMjU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5yb2xsb2ZmRmFjdG9yID0gZW1pdHRlci5yb2xsb2ZmRmFjdG9yIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLmRpc3RhbmNlTW9kZWwgPSBlbWl0dGVyLmRpc3RhbmNlTW9kZWwgfHwgXCJleHBvbmVudGlhbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IFByb21pc2UuYWxsKGNsaXBQcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHRzID0gZW1pdHRlci5jbGlwcy5tYXAoKGNsaXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xpcC53ZWlnaHQgfHwgMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ZWRTb3VuZCA9IG5ldyBXZWlnaHRlZFNvdW5kKGVtaXR0ZXIubG9vcCB8fCBmYWxzZSwgZW1pdHRlci5fYmFieWxvblNvdW5kcywgd2VpZ2h0cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1pdHRlci5pbm5lckFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ZWRTb3VuZC5kaXJlY3Rpb25hbENvbmVJbm5lckFuZ2xlID0gMiAqIFRvb2xzLlRvRGVncmVlcyhlbWl0dGVyLmlubmVyQW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVtaXR0ZXIub3V0ZXJBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodGVkU291bmQuZGlyZWN0aW9uYWxDb25lT3V0ZXJBbmdsZSA9IDIgKiBUb29scy5Ub0RlZ3JlZXMoZW1pdHRlci5vdXRlckFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLnZvbHVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodGVkU291bmQudm9sdW1lID0gZW1pdHRlci52b2x1bWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLl9iYWJ5bG9uRGF0YSEuc291bmQgPSB3ZWlnaHRlZFNvdW5kO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGVtaXR0ZXIuX2JhYnlsb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBwcm9taXNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXIuX2JhYnlsb25EYXRhLmxvYWRlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRFdmVudEFjdGlvbihcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgc291bmQ6IFdlaWdodGVkU291bmQsXHJcbiAgICAgICAgYWN0aW9uOiBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbixcclxuICAgICAgICB0aW1lOiBudW1iZXIsXHJcbiAgICAgICAgc3RhcnRPZmZzZXQ/OiBudW1iZXJcclxuICAgICk6IChjdXJyZW50RnJhbWU6IG51bWJlcikgPT4gdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBJTVNGVEF1ZGlvRW1pdHRlcl9BbmltYXRpb25FdmVudEFjdGlvbi5wbGF5OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGN1cnJlbnRGcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVPZmZzZXQgPSAoc3RhcnRPZmZzZXQgfHwgMCkgKyAoY3VycmVudEZyYW1lIC0gdGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQucGxheShmcmFtZU9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24uc3RvcDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgSU1TRlRBdWRpb0VtaXR0ZXJfQW5pbWF0aW9uRXZlbnRBY3Rpb24ucGF1c2U6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2NvbnRleHR9OiBVbnN1cHBvcnRlZCBhY3Rpb24gJHthY3Rpb259YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfbG9hZEFuaW1hdGlvbkV2ZW50QXN5bmMoXHJcbiAgICAgICAgY29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbkNvbnRleHQ6IHN0cmluZyxcclxuICAgICAgICBhbmltYXRpb246IElBbmltYXRpb24sXHJcbiAgICAgICAgZXZlbnQ6IElMb2FkZXJBbmltYXRpb25FdmVudCxcclxuICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXA6IEFuaW1hdGlvbkdyb3VwXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoYmFieWxvbkFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb24gPSBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAudGFyZ2V0ZWRBbmltYXRpb25zWzBdO1xyXG4gICAgICAgIGNvbnN0IGVtaXR0ZXJJbmRleCA9IGV2ZW50LmVtaXR0ZXI7XHJcbiAgICAgICAgY29uc3QgZW1pdHRlciA9IEFycmF5SXRlbS5HZXQoYC9leHRlbnNpb25zLyR7dGhpcy5uYW1lfS9lbWl0dGVyc2AsIHRoaXMuX2VtaXR0ZXJzLCBlbWl0dGVySW5kZXgpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkRW1pdHRlckFzeW5jKGNvbnRleHQsIGVtaXR0ZXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzb3VuZCA9IGVtaXR0ZXIuX2JhYnlsb25EYXRhIS5zb3VuZDtcclxuICAgICAgICAgICAgaWYgKHNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uRXZlbnQgPSBuZXcgQW5pbWF0aW9uRXZlbnQoZXZlbnQudGltZSwgdGhpcy5fZ2V0RXZlbnRBY3Rpb24oY29udGV4dCwgc291bmQsIGV2ZW50LmFjdGlvbiwgZXZlbnQudGltZSwgZXZlbnQuc3RhcnRPZmZzZXQpKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24uYW5pbWF0aW9uLmFkZEV2ZW50KGJhYnlsb25BbmltYXRpb25FdmVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHN0YXJ0ZWQgYXVkaW8gc3RvcHMgd2hlbiB0aGlzIGFuaW1hdGlvbiBpcyB0ZXJtaW5hdGVkLlxyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbkdyb3VwLm9uQW5pbWF0aW9uR3JvdXBFbmRPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uR3JvdXAub25BbmltYXRpb25Hcm91cFBhdXNlT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBNU0ZUX2F1ZGlvX2VtaXR0ZXIobG9hZGVyKSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=