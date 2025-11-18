"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["src_services_panes_tools_exportService_tsx"],{

/***/ "../core/dist/Misc/sceneSerializer.js":
/*!********************************************!*\
  !*** ../core/dist/Misc/sceneSerializer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneSerializer: () => (/* binding */ SceneSerializer)
/* harmony export */ });
/* harmony import */ var _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var _Materials_multiMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Materials/multiMaterial */ "../core/dist/Materials/multiMaterial.js");
/* harmony import */ var _decorators_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







let SerializedGeometries = [];
const SerializeGeometry = (geometry, serializationGeometries) => {
    if (geometry.doNotSerialize) {
        return;
    }
    serializationGeometries.vertexData.push(geometry.serializeVerticeData());
    SerializedGeometries[geometry.id] = true;
};
const SerializeMesh = (mesh, serializationScene) => {
    const serializationObject = {};
    // Geometry
    const geometry = mesh._geometry;
    if (geometry) {
        if (!mesh.getScene().getGeometryById(geometry.id)) {
            // Geometry was in the memory but not added to the scene, nevertheless it's better to serialize to be able to reload the mesh with its geometry
            SerializeGeometry(geometry, serializationScene.geometries);
        }
    }
    // Custom
    if (mesh.serialize) {
        mesh.serialize(serializationObject);
    }
    return serializationObject;
};
const FinalizeSingleNode = (node, serializationObject) => {
    if (node._isMesh) {
        const mesh = node;
        //only works if the mesh is already loaded
        if (mesh.delayLoadState === _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.DELAYLOADSTATE_LOADED || mesh.delayLoadState === _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.DELAYLOADSTATE_NONE) {
            const serializeMaterial = (material) => {
                serializationObject.materials = serializationObject.materials || [];
                if (mesh.material && !serializationObject.materials.some((mat) => mat.id === mesh.material.id)) {
                    serializationObject.materials.push(material.serialize());
                }
            };
            //serialize material
            if (mesh.material && !mesh.material.doNotSerialize) {
                if (mesh.material instanceof _Materials_multiMaterial__WEBPACK_IMPORTED_MODULE_2__.MultiMaterial) {
                    serializationObject.multiMaterials = serializationObject.multiMaterials || [];
                    if (!serializationObject.multiMaterials.some((mat) => mat.id === mesh.material.id)) {
                        serializationObject.multiMaterials.push(mesh.material.serialize());
                        for (const submaterial of mesh.material.subMaterials) {
                            if (submaterial) {
                                serializeMaterial(submaterial);
                            }
                        }
                    }
                }
                else {
                    serializeMaterial(mesh.material);
                }
            }
            else if (!mesh.material) {
                serializeMaterial(mesh.getScene().defaultMaterial);
            }
            //serialize geometry
            const geometry = mesh._geometry;
            if (geometry) {
                if (!serializationObject.geometries) {
                    serializationObject.geometries = {};
                    serializationObject.geometries.boxes = [];
                    serializationObject.geometries.spheres = [];
                    serializationObject.geometries.cylinders = [];
                    serializationObject.geometries.toruses = [];
                    serializationObject.geometries.grounds = [];
                    serializationObject.geometries.planes = [];
                    serializationObject.geometries.torusKnots = [];
                    serializationObject.geometries.vertexData = [];
                }
                SerializeGeometry(geometry, serializationObject.geometries);
            }
            // Skeletons
            if (mesh.skeleton && !mesh.skeleton.doNotSerialize) {
                serializationObject.skeletons = serializationObject.skeletons || [];
                serializationObject.skeletons.push(mesh.skeleton.serialize());
            }
            //serialize the actual mesh
            serializationObject.meshes = serializationObject.meshes || [];
            serializationObject.meshes.push(SerializeMesh(mesh, serializationObject));
        }
    }
    else if (node.getClassName() === "TransformNode") {
        const transformNode = node;
        serializationObject.transformNodes.push(transformNode.serialize());
    }
    else if (node.getClassName().indexOf("Camera") !== -1) {
        const camera = node;
        serializationObject.cameras.push(camera.serialize());
    }
    else if (node.getClassName().indexOf("Light") !== -1) {
        const light = node;
        serializationObject.lights.push(light.serialize());
    }
};
/**
 * Class used to serialize a scene into a string
 */
class SceneSerializer {
    /**
     * Clear cache used by a previous serialization
     */
    static ClearCache() {
        SerializedGeometries = [];
    }
    /**
     * Serialize a scene into a JSON compatible object
     * Note that if the current engine does not support synchronous texture reading (like WebGPU), you should use SerializeAsync instead
     * as else you may not retrieve the proper base64 encoded texture data (when using the Texture.ForceSerializeBuffers flag)
     * @param scene defines the scene to serialize
     * @returns a JSON compatible object
     */
    static Serialize(scene) {
        return SceneSerializer._Serialize(scene);
    }
    static _Serialize(scene, checkSyncReadSupported = true) {
        const serializationObject = {};
        if (checkSyncReadSupported && !scene.getEngine()._features.supportSyncTextureRead && _Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.ForceSerializeBuffers) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Warn("The serialization object may not contain the proper base64 encoded texture data! You should use the SerializeAsync method instead.");
        }
        SceneSerializer.ClearCache();
        // Scene
        serializationObject.useDelayedTextureLoading = scene.useDelayedTextureLoading;
        serializationObject.autoClear = scene.autoClear;
        serializationObject.clearColor = scene.clearColor.asArray();
        serializationObject.ambientColor = scene.ambientColor.asArray();
        serializationObject.gravity = scene.gravity.asArray();
        serializationObject.collisionsEnabled = scene.collisionsEnabled;
        serializationObject.useRightHandedSystem = scene.useRightHandedSystem;
        // Fog
        if (scene.fogMode !== undefined && scene.fogMode !== null) {
            serializationObject.fogMode = scene.fogMode;
        }
        if (scene.fogColor !== undefined && scene.fogColor !== null) {
            serializationObject.fogColor = scene.fogColor.asArray();
        }
        if (scene.fogStart !== undefined && scene.fogStart !== null) {
            serializationObject.fogStart = scene.fogStart;
        }
        if (scene.fogEnd !== undefined && scene.fogEnd !== null) {
            serializationObject.fogEnd = scene.fogEnd;
        }
        if (scene.fogDensity !== undefined && scene.fogDensity !== null) {
            serializationObject.fogDensity = scene.fogDensity;
        }
        //Physics
        if (scene.isPhysicsEnabled && scene.isPhysicsEnabled()) {
            const physicEngine = scene.getPhysicsEngine();
            if (physicEngine) {
                serializationObject.physicsEnabled = true;
                serializationObject.physicsGravity = physicEngine.gravity.asArray();
                serializationObject.physicsEngine = physicEngine.getPhysicsPluginName();
            }
        }
        // Metadata
        if (scene.metadata) {
            serializationObject.metadata = scene.metadata;
        }
        // Morph targets
        serializationObject.morphTargetManagers = [];
        for (const abstractMesh of scene.meshes) {
            const manager = abstractMesh.morphTargetManager;
            if (manager) {
                serializationObject.morphTargetManagers.push(manager.serialize());
            }
        }
        // Lights
        serializationObject.lights = [];
        let index;
        let light;
        for (index = 0; index < scene.lights.length; index++) {
            light = scene.lights[index];
            if (!light.doNotSerialize) {
                serializationObject.lights.push(light.serialize());
            }
        }
        // Cameras
        serializationObject.cameras = [];
        for (index = 0; index < scene.cameras.length; index++) {
            const camera = scene.cameras[index];
            if (!camera.doNotSerialize) {
                serializationObject.cameras.push(camera.serialize());
            }
        }
        if (scene.activeCamera) {
            serializationObject.activeCameraID = scene.activeCamera.id;
        }
        // Animations
        _decorators_serialization__WEBPACK_IMPORTED_MODULE_3__.SerializationHelper.AppendSerializedAnimations(scene, serializationObject);
        // Animation Groups
        if (scene.animationGroups && scene.animationGroups.length > 0) {
            serializationObject.animationGroups = [];
            for (let animationGroupIndex = 0; animationGroupIndex < scene.animationGroups.length; animationGroupIndex++) {
                const animationGroup = scene.animationGroups[animationGroupIndex];
                serializationObject.animationGroups.push(animationGroup.serialize());
            }
        }
        // Reflection probes
        if (scene.reflectionProbes && scene.reflectionProbes.length > 0) {
            serializationObject.reflectionProbes = [];
            for (index = 0; index < scene.reflectionProbes.length; index++) {
                const reflectionProbe = scene.reflectionProbes[index];
                serializationObject.reflectionProbes.push(reflectionProbe.serialize());
            }
        }
        // Materials
        serializationObject.materials = [];
        serializationObject.multiMaterials = [];
        let material;
        for (index = 0; index < scene.materials.length; index++) {
            material = scene.materials[index];
            if (!material.doNotSerialize) {
                serializationObject.materials.push(material.serialize());
            }
        }
        // MultiMaterials
        serializationObject.multiMaterials = [];
        for (index = 0; index < scene.multiMaterials.length; index++) {
            const multiMaterial = scene.multiMaterials[index];
            serializationObject.multiMaterials.push(multiMaterial.serialize());
        }
        // Environment texture
        if (scene.environmentTexture) {
            if (scene.environmentTexture._files) {
                serializationObject.environmentTexture = scene.environmentTexture.serialize();
            }
            else {
                serializationObject.environmentTexture = scene.environmentTexture.name;
                serializationObject.environmentTextureRotationY = scene.environmentTexture.rotationY;
            }
        }
        // Environment Intensity
        serializationObject.environmentIntensity = scene.environmentIntensity;
        // IBL Intensity
        serializationObject.iblIntensity = scene.iblIntensity;
        // Skeletons
        serializationObject.skeletons = [];
        for (index = 0; index < scene.skeletons.length; index++) {
            const skeleton = scene.skeletons[index];
            if (!skeleton.doNotSerialize) {
                serializationObject.skeletons.push(skeleton.serialize());
            }
        }
        // Transform nodes
        serializationObject.transformNodes = [];
        for (index = 0; index < scene.transformNodes.length; index++) {
            if (!scene.transformNodes[index].doNotSerialize) {
                serializationObject.transformNodes.push(scene.transformNodes[index].serialize());
            }
        }
        // Geometries
        serializationObject.geometries = {};
        serializationObject.geometries.boxes = [];
        serializationObject.geometries.spheres = [];
        serializationObject.geometries.cylinders = [];
        serializationObject.geometries.toruses = [];
        serializationObject.geometries.grounds = [];
        serializationObject.geometries.planes = [];
        serializationObject.geometries.torusKnots = [];
        serializationObject.geometries.vertexData = [];
        SerializedGeometries = [];
        const geometries = scene.getGeometries();
        for (index = 0; index < geometries.length; index++) {
            const geometry = geometries[index];
            if (geometry.isReady()) {
                SerializeGeometry(geometry, serializationObject.geometries);
            }
        }
        // Meshes
        serializationObject.meshes = [];
        for (index = 0; index < scene.meshes.length; index++) {
            const abstractMesh = scene.meshes[index];
            if (abstractMesh instanceof _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                const mesh = abstractMesh;
                if (!mesh.doNotSerialize) {
                    if (mesh.delayLoadState === _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.DELAYLOADSTATE_LOADED || mesh.delayLoadState === _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.DELAYLOADSTATE_NONE) {
                        serializationObject.meshes.push(SerializeMesh(mesh, serializationObject));
                    }
                }
            }
        }
        // Particles Systems
        serializationObject.particleSystems = [];
        for (index = 0; index < scene.particleSystems.length; index++) {
            const particleSystem = scene.particleSystems[index];
            if (!particleSystem.doNotSerialize) {
                serializationObject.particleSystems.push(particleSystem.serialize(false));
            }
        }
        // Post processes
        serializationObject.postProcesses = [];
        for (index = 0; index < scene.postProcesses.length; index++) {
            const postProcess = scene.postProcesses[index];
            if (!postProcess.doNotSerialize) {
                serializationObject.postProcesses.push(postProcess.serialize());
            }
        }
        // Action Manager
        if (scene.actionManager) {
            serializationObject.actions = scene.actionManager.serialize("scene");
        }
        // Components
        for (const component of scene._serializableComponents) {
            component.serialize(serializationObject);
        }
        // Sprites
        if (scene.spriteManagers) {
            serializationObject.spriteManagers = [];
            for (index = 0; index < scene.spriteManagers.length; index++) {
                const spriteManager = scene.spriteManagers[index];
                if (!spriteManager.doNotSerialize) {
                    serializationObject.spriteManagers.push(spriteManager.serialize(true));
                }
            }
        }
        return serializationObject;
    }
    /**
     * Serialize a scene into a JSON compatible object
     * @param scene defines the scene to serialize
     * @returns a JSON promise compatible object
     */
    static async SerializeAsync(scene) {
        const serializationObject = SceneSerializer._Serialize(scene, false);
        const promises = [];
        this._CollectPromises(serializationObject, promises);
        await Promise.all(promises);
        return serializationObject;
    }
    static _CollectPromises(obj, promises) {
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; ++i) {
                const o = obj[i];
                if (o instanceof Promise) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, github/no-then
                    promises.push(o.then((res) => (obj[i] = res)));
                }
                else if (o instanceof Object || Array.isArray(o)) {
                    this._CollectPromises(o, promises);
                }
            }
        }
        else if (obj instanceof Object) {
            for (const name in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, name)) {
                    const o = obj[name];
                    if (o instanceof Promise) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, github/no-then
                        promises.push(o.then((res) => (obj[name] = res)));
                    }
                    else if (o instanceof Object || Array.isArray(o)) {
                        this._CollectPromises(o, promises);
                    }
                }
            }
        }
    }
    /**
     * Serialize a mesh into a JSON compatible object
     * @param toSerialize defines the mesh to serialize
     * @param withParents defines if parents must be serialized as well
     * @param withChildren defines if children must be serialized as well
     * @returns a JSON compatible object
     */
    static SerializeMesh(toSerialize /* Mesh || Mesh[] */, withParents = false, withChildren = false) {
        const serializationObject = {};
        serializationObject.meshes = [];
        serializationObject.transformNodes = [];
        serializationObject.cameras = [];
        serializationObject.lights = [];
        SceneSerializer.ClearCache();
        toSerialize = toSerialize instanceof Array ? toSerialize : [toSerialize];
        if (withParents || withChildren) {
            //deliberate for loop! not for each, appended should be processed as well.
            for (let i = 0; i < toSerialize.length; ++i) {
                if (withChildren) {
                    const descendants = toSerialize[i].getDescendants();
                    for (const node of descendants) {
                        if (toSerialize.indexOf(node) < 0 && !node.doNotSerialize) {
                            toSerialize.push(node);
                        }
                    }
                }
                //make sure the array doesn't contain the object already
                if (withParents && toSerialize[i].parent && toSerialize.indexOf(toSerialize[i].parent) < 0 && !toSerialize[i].parent.doNotSerialize) {
                    toSerialize.push(toSerialize[i].parent);
                }
            }
        }
        for (const mesh of toSerialize) {
            FinalizeSingleNode(mesh, serializationObject);
        }
        return serializationObject;
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

/***/ "./src/components/tools/exportTools.tsx":
/*!**********************************************!*\
  !*** ./src/components/tools/exportTools.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportBabylonTools: () => (/* binding */ ExportBabylonTools),
/* harmony export */   ExportGltfTools: () => (/* binding */ ExportGltfTools)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_dropdownPropertyLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/dropdownPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/dropdownPropertyLine.tsx");
/* harmony import */ var core_Misc_sceneSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/sceneSerializer */ "../core/dist/Misc/sceneSerializer.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Misc_environmentTextureTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/environmentTextureTools */ "../core/dist/Misc/environmentTextureTools.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/buttonLine */ "../sharedUiComponents/src/fluent/hoc/buttonLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_syncedSliderPropertyLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/syncedSliderPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/syncedSliderPropertyLine.tsx");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var core_Cameras_camera__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Cameras/camera */ "../core/dist/Cameras/camera.js");
/* harmony import */ var core_Lights_light__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Lights/light */ "../core/dist/Lights/light.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/switchPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/switchPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_primitives_lazyComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/lazyComponent */ "../sharedUiComponents/src/fluent/primitives/lazyComponent.tsx");
/* harmony import */ var shared_ui_components_fluent_primitives_collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/collapse */ "../sharedUiComponents/src/fluent/primitives/collapse.tsx");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react-icons */ "../../../node_modules/@fluentui/react-icons/lib/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2, _react_refresh_temp_3;
var _react_refresh_temp_4;
_react_refresh_temp_4 = __webpack_require__.$Refresh$.signature();

















const EnvExportImageTypes = [
    { label: "PNG", value: 0, imageType: "image/png" },
    { label: "WebP", value: 1, imageType: "image/webp" },
];
const ExportBabylonTools = ({ scene }) => {
    _react_refresh_temp_4();
    const [babylonExportOptions, setBabylonExportOptions] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
        imageTypeIndex: 0,
        imageQuality: 0.8,
        iblDiffuse: false,
    });
    const exportBabylon = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async () => {
        const strScene = JSON.stringify(core_Misc_sceneSerializer__WEBPACK_IMPORTED_MODULE_2__.SceneSerializer.Serialize(scene));
        const blob = new Blob([strScene], { type: "octet/stream" });
        core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Download(blob, "scene.babylon");
    }, [scene]);
    const createEnvTexture = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async () => {
        if (!scene.environmentTexture) {
            return;
        }
        try {
            const buffer = await core_Misc_environmentTextureTools__WEBPACK_IMPORTED_MODULE_4__.EnvironmentTextureTools.CreateEnvTextureAsync(scene.environmentTexture, {
                imageType: EnvExportImageTypes[babylonExportOptions.imageTypeIndex].imageType,
                imageQuality: babylonExportOptions.imageQuality,
                disableIrradianceTexture: !babylonExportOptions.iblDiffuse,
            });
            const blob = new Blob([buffer], { type: "octet/stream" });
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Download(blob, "environment.env");
        }
        catch (error) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Error(error);
            alert(error);
        }
    }, [scene, babylonExportOptions]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_7__.ButtonLine, { label: "Export to Babylon", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_16__.ArrowDownloadRegular, onClick: exportBabylon }), !scene.getEngine().premultipliedAlpha && scene.environmentTexture && scene.environmentTexture._prefiltered && scene.activeCamera && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_7__.ButtonLine, { label: "Generate .env texture", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_16__.ArrowDownloadRegular, onClick: createEnvTexture }), scene.environmentTexture.irradianceTexture && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__.SwitchPropertyLine, { label: "Diffuse Texture", description: "Export diffuse texture for IBL", value: babylonExportOptions.iblDiffuse, onChange: (value) => {
                            setBabylonExportOptions((prev) => ({ ...prev, iblDiffuse: value }));
                        } }, "iblDiffuse")), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_dropdownPropertyLine__WEBPACK_IMPORTED_MODULE_1__.NumberDropdownPropertyLine, { label: "Image type", options: EnvExportImageTypes, value: babylonExportOptions.imageTypeIndex, onChange: (val) => {
                            setBabylonExportOptions((prev) => ({ ...prev, imageTypeIndex: val }));
                        } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_collapse__WEBPACK_IMPORTED_MODULE_15__.Collapse, { visible: babylonExportOptions.imageTypeIndex > 0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_syncedSliderPropertyLine__WEBPACK_IMPORTED_MODULE_8__.SyncedSliderPropertyLine, { label: "Quality", value: babylonExportOptions.imageQuality, onChange: (value) => setBabylonExportOptions((prev) => ({ ...prev, imageQuality: value })), min: 0, max: 1 }) })] }))] }));
};
_react_refresh_temp_1 = ExportBabylonTools;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "ExportBabylonTools");
_react_refresh_temp_4(ExportBabylonTools, "kDowAchv+NriSjzoJCMmG4Dwu1Y=");
const ExportGltfTools = (0,shared_ui_components_fluent_primitives_lazyComponent__WEBPACK_IMPORTED_MODULE_14__.MakeLazyComponent)(_react_refresh_temp_2 = async () => {
    var _react_refresh_temp_5;
    _react_refresh_temp_5 = __webpack_require__.$Refresh$.signature();
    // Defer importing anything from the serializers package until this component is actually mounted.
    const { GLTF2Export } = await Promise.all(/*! import() */[__webpack_require__.e("core_dist_Morph_morphTarget_js"), __webpack_require__.e("serializers_dist_glTF_2_0_glTFSerializer_js")]).then(__webpack_require__.bind(__webpack_require__, /*! serializers/glTF/2.0/glTFSerializer */ "../serializers/dist/glTF/2.0/glTFSerializer.js"));
    return _react_refresh_temp_5((props) => {
        _react_refresh_temp_5();
        const [isExportingGltf, setIsExportingGltf] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
        const [gltfExportOptions, setGltfExportOptions] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
            exportDisabledNodes: false,
            exportSkyboxes: false,
            exportCameras: false,
            exportLights: false,
            dracoCompression: false,
        });
        const exportGLTF = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async () => {
            setIsExportingGltf(true);
            const shouldExport = (node) => {
                if (!gltfExportOptions.exportDisabledNodes) {
                    if (!node.isEnabled()) {
                        return false;
                    }
                }
                if (!gltfExportOptions.exportSkyboxes) {
                    if (node instanceof core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_9__.Mesh) {
                        if (node.material) {
                            const material = node.material;
                            const reflectionTexture = material.reflectionTexture;
                            if (reflectionTexture && reflectionTexture.coordinatesMode === core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_10__.Texture.SKYBOX_MODE) {
                                return false;
                            }
                        }
                    }
                }
                if (!gltfExportOptions.exportCameras) {
                    if (node instanceof core_Cameras_camera__WEBPACK_IMPORTED_MODULE_11__.Camera) {
                        return false;
                    }
                }
                if (!gltfExportOptions.exportLights) {
                    if (node instanceof core_Lights_light__WEBPACK_IMPORTED_MODULE_12__.Light) {
                        return false;
                    }
                }
                return true;
            };
            try {
                const glb = await GLTF2Export.GLBAsync(props.scene, "scene", {
                    meshCompressionMethod: gltfExportOptions.dracoCompression ? "Draco" : undefined,
                    shouldExportNode: (node) => shouldExport(node),
                });
                glb.downloadFiles();
            }
            catch (reason) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Error(`Failed to export GLB: ${reason}`);
            }
            finally {
                setIsExportingGltf(false);
            }
        }, [gltfExportOptions, props.scene]);
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__.SwitchPropertyLine, { label: "Export Disabled Nodes", description: "Whether to export nodes that are disabled in the scene.", value: gltfExportOptions.exportDisabledNodes, onChange: (checked) => setGltfExportOptions({ ...gltfExportOptions, exportDisabledNodes: checked }) }, "GLTFExportDisabledNodes"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__.SwitchPropertyLine, { label: "Export Skyboxes", description: "Whether to export skybox nodes in the scene.", value: gltfExportOptions.exportSkyboxes, onChange: (checked) => setGltfExportOptions({ ...gltfExportOptions, exportSkyboxes: checked }) }, "GLTFExportSkyboxes"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__.SwitchPropertyLine, { label: "Export Cameras", description: "Whether to export cameras in the scene.", value: gltfExportOptions.exportCameras, onChange: (checked) => setGltfExportOptions({ ...gltfExportOptions, exportCameras: checked }) }, "GLTFExportCameras"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__.SwitchPropertyLine, { label: "Export Lights", description: "Whether to export lights in the scene.", value: gltfExportOptions.exportLights, onChange: (checked) => setGltfExportOptions({ ...gltfExportOptions, exportLights: checked }) }, "GLTFExportLights"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_13__.SwitchPropertyLine, { label: "Draco Compression", description: "Whether to apply Draco compression to geometry.", value: gltfExportOptions.dracoCompression, onChange: (checked) => setGltfExportOptions({ ...gltfExportOptions, dracoCompression: checked }) }, "GLTFDracoCompression"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_buttonLine__WEBPACK_IMPORTED_MODULE_7__.ButtonLine, { label: "Export to GLB", icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_16__.ArrowDownloadRegular, onClick: exportGLTF, disabled: isExportingGltf })] }));
    }, "i00QOM7pPhqLe0K4H0dJqCULd5I=");
});
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "ExportGltfTools$MakeLazyComponent");
_react_refresh_temp_3 = ExportGltfTools;
__webpack_require__.$Refresh$.register(_react_refresh_temp_3, "ExportGltfTools");


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

/***/ "./src/services/panes/tools/exportService.tsx":
/*!****************************************************!*\
  !*** ./src/services/panes/tools/exportService.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportServiceDefinition: () => (/* binding */ ExportServiceDefinition),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _toolsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolsService */ "./src/services/panes/toolsService.tsx");
/* harmony import */ var _components_tools_exportTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tools/exportTools */ "./src/components/tools/exportTools.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const ExportServiceDefinition = {
    friendlyName: "Export Tools",
    consumes: [_toolsService__WEBPACK_IMPORTED_MODULE_1__.ToolsServiceIdentity],
    factory: (toolsService) => {
        const contentRegistrations = [];
        // glTF export content
        contentRegistrations.push(toolsService.addSectionContent({
            key: "glTF Export",
            section: "glTF Export",
            component: ({ context }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_exportTools__WEBPACK_IMPORTED_MODULE_2__.ExportGltfTools, { scene: context }),
        }));
        // Babylon export content
        contentRegistrations.push(toolsService.addSectionContent({
            key: "Babylon Export",
            section: "Babylon Export",
            component: ({ context }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_exportTools__WEBPACK_IMPORTED_MODULE_2__.ExportBabylonTools, { scene: context }),
        }));
        return {
            dispose: () => {
                contentRegistrations.forEach((registration) => registration.dispose());
            },
        };
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    serviceDefinitions: [ExportServiceDefinition],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlcnZpY2VzX3BhbmVzX3Rvb2xzX2V4cG9ydFNlcnZpY2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9jQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWFBO0FBQ0E7QUFRQTtBQUNBO0FBZUE7QUF0RUE7O0FBQUE7QUFnRkE7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF3Q0E7QUFDQTs7QUF6R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWlzYy9zY2VuZVNlcmlhbGl6ZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9pbnNwZWN0b3ItdjIvc3JjL2NvbXBvbmVudHMvdG9vbHMvZXhwb3J0VG9vbHMudHN4IiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvaW5zcGVjdG9yLXYyL3NyYy9zZXJ2aWNlcy9wYW5lcy90b29scy9leHBvcnRTZXJ2aWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcIi4uL01lc2hlcy9nZW9tZXRyeVwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIi4uL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBNdWx0aU1hdGVyaWFsIH0gZnJvbSBcIi4uL01hdGVyaWFscy9tdWx0aU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gXCIuLi9MaWdodHMvbGlnaHRcIjtcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvbkhlbHBlciB9IGZyb20gXCIuL2RlY29yYXRvcnMuc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4uL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgQ3ViZVRleHR1cmUgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2N1YmVUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCIuLi9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCIuLi9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IENhbWVyYSB9IGZyb20gXCIuLi9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5cclxubGV0IFNlcmlhbGl6ZWRHZW9tZXRyaWVzOiBHZW9tZXRyeVtdID0gW107XHJcbmNvbnN0IFNlcmlhbGl6ZUdlb21ldHJ5ID0gKGdlb21ldHJ5OiBHZW9tZXRyeSwgc2VyaWFsaXphdGlvbkdlb21ldHJpZXM6IGFueSk6IGFueSA9PiB7XHJcbiAgICBpZiAoZ2VvbWV0cnkuZG9Ob3RTZXJpYWxpemUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXphdGlvbkdlb21ldHJpZXMudmVydGV4RGF0YS5wdXNoKGdlb21ldHJ5LnNlcmlhbGl6ZVZlcnRpY2VEYXRhKCkpO1xyXG5cclxuICAgICg8YW55PlNlcmlhbGl6ZWRHZW9tZXRyaWVzKVtnZW9tZXRyeS5pZF0gPSB0cnVlO1xyXG59O1xyXG5cclxuY29uc3QgU2VyaWFsaXplTWVzaCA9IChtZXNoOiBNZXNoLCBzZXJpYWxpemF0aW9uU2NlbmU6IGFueSk6IGFueSA9PiB7XHJcbiAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fTtcclxuXHJcbiAgICAvLyBHZW9tZXRyeVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBtZXNoLl9nZW9tZXRyeTtcclxuICAgIGlmIChnZW9tZXRyeSkge1xyXG4gICAgICAgIGlmICghbWVzaC5nZXRTY2VuZSgpLmdldEdlb21ldHJ5QnlJZChnZW9tZXRyeS5pZCkpIHtcclxuICAgICAgICAgICAgLy8gR2VvbWV0cnkgd2FzIGluIHRoZSBtZW1vcnkgYnV0IG5vdCBhZGRlZCB0byB0aGUgc2NlbmUsIG5ldmVydGhlbGVzcyBpdCdzIGJldHRlciB0byBzZXJpYWxpemUgdG8gYmUgYWJsZSB0byByZWxvYWQgdGhlIG1lc2ggd2l0aCBpdHMgZ2VvbWV0cnlcclxuICAgICAgICAgICAgU2VyaWFsaXplR2VvbWV0cnkoZ2VvbWV0cnksIHNlcmlhbGl6YXRpb25TY2VuZS5nZW9tZXRyaWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3VzdG9tXHJcbiAgICBpZiAobWVzaC5zZXJpYWxpemUpIHtcclxuICAgICAgICBtZXNoLnNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxufTtcclxuXHJcbmNvbnN0IEZpbmFsaXplU2luZ2xlTm9kZSA9IChub2RlOiBOb2RlLCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpID0+IHtcclxuICAgIGlmICgobm9kZSBhcyBNZXNoKS5faXNNZXNoKSB7XHJcbiAgICAgICAgY29uc3QgbWVzaCA9IG5vZGUgYXMgTWVzaDtcclxuICAgICAgICAvL29ubHkgd29ya3MgaWYgdGhlIG1lc2ggaXMgYWxyZWFkeSBsb2FkZWRcclxuICAgICAgICBpZiAobWVzaC5kZWxheUxvYWRTdGF0ZSA9PT0gQ29uc3RhbnRzLkRFTEFZTE9BRFNUQVRFX0xPQURFRCB8fCBtZXNoLmRlbGF5TG9hZFN0YXRlID09PSBDb25zdGFudHMuREVMQVlMT0FEU1RBVEVfTk9ORSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVNYXRlcmlhbCA9IChtYXRlcmlhbDogTWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWF0ZXJpYWxzID0gc2VyaWFsaXphdGlvbk9iamVjdC5tYXRlcmlhbHMgfHwgW107XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaC5tYXRlcmlhbCAmJiAhc2VyaWFsaXphdGlvbk9iamVjdC5tYXRlcmlhbHMuc29tZSgobWF0OiBNYXRlcmlhbCkgPT4gbWF0LmlkID09PSAoPE1hdGVyaWFsPm1lc2gubWF0ZXJpYWwpLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9zZXJpYWxpemUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgaWYgKG1lc2gubWF0ZXJpYWwgJiYgIW1lc2gubWF0ZXJpYWwuZG9Ob3RTZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoLm1hdGVyaWFsIGluc3RhbmNlb2YgTXVsdGlNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubXVsdGlNYXRlcmlhbHMgPSBzZXJpYWxpemF0aW9uT2JqZWN0Lm11bHRpTWF0ZXJpYWxzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VyaWFsaXphdGlvbk9iamVjdC5tdWx0aU1hdGVyaWFscy5zb21lKChtYXQ6IE1hdGVyaWFsKSA9PiBtYXQuaWQgPT09ICg8TWF0ZXJpYWw+bWVzaC5tYXRlcmlhbCkuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubXVsdGlNYXRlcmlhbHMucHVzaChtZXNoLm1hdGVyaWFsLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJtYXRlcmlhbCBvZiBtZXNoLm1hdGVyaWFsLnN1Yk1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Ym1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplTWF0ZXJpYWwoc3VibWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVNYXRlcmlhbChtZXNoLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICghbWVzaC5tYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplTWF0ZXJpYWwobWVzaC5nZXRTY2VuZSgpLmRlZmF1bHRNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vc2VyaWFsaXplIGdlb21ldHJ5XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbWVzaC5fZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgIGlmIChnZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5nZW9tZXRyaWVzLmJveGVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5nZW9tZXRyaWVzLnNwaGVyZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMuY3lsaW5kZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5nZW9tZXRyaWVzLnRvcnVzZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMuZ3JvdW5kcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcy5wbGFuZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMudG9ydXNLbm90cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcy52ZXJ0ZXhEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgU2VyaWFsaXplR2VvbWV0cnkoZ2VvbWV0cnksIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2tlbGV0b25zXHJcbiAgICAgICAgICAgIGlmIChtZXNoLnNrZWxldG9uICYmICFtZXNoLnNrZWxldG9uLmRvTm90U2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnNrZWxldG9ucyA9IHNlcmlhbGl6YXRpb25PYmplY3Quc2tlbGV0b25zIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5za2VsZXRvbnMucHVzaChtZXNoLnNrZWxldG9uLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zZXJpYWxpemUgdGhlIGFjdHVhbCBtZXNoXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWVzaGVzID0gc2VyaWFsaXphdGlvbk9iamVjdC5tZXNoZXMgfHwgW107XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWVzaGVzLnB1c2goU2VyaWFsaXplTWVzaChtZXNoLCBzZXJpYWxpemF0aW9uT2JqZWN0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChub2RlLmdldENsYXNzTmFtZSgpID09PSBcIlRyYW5zZm9ybU5vZGVcIikge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybU5vZGUgPSBub2RlIGFzIFRyYW5zZm9ybU5vZGU7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC50cmFuc2Zvcm1Ob2Rlcy5wdXNoKHRyYW5zZm9ybU5vZGUuc2VyaWFsaXplKCkpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmdldENsYXNzTmFtZSgpLmluZGV4T2YoXCJDYW1lcmFcIikgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbm9kZSBhcyBDYW1lcmE7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jYW1lcmFzLnB1c2goY2FtZXJhLnNlcmlhbGl6ZSgpKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5nZXRDbGFzc05hbWUoKS5pbmRleE9mKFwiTGlnaHRcIikgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgbGlnaHQgPSBub2RlIGFzIExpZ2h0O1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubGlnaHRzLnB1c2gobGlnaHQuc2VyaWFsaXplKCkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gc2VyaWFsaXplIGEgc2NlbmUgaW50byBhIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjZW5lU2VyaWFsaXplciB7XHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIGNhY2hlIHVzZWQgYnkgYSBwcmV2aW91cyBzZXJpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJDYWNoZSgpOiB2b2lkIHtcclxuICAgICAgICBTZXJpYWxpemVkR2VvbWV0cmllcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplIGEgc2NlbmUgaW50byBhIEpTT04gY29tcGF0aWJsZSBvYmplY3RcclxuICAgICAqIE5vdGUgdGhhdCBpZiB0aGUgY3VycmVudCBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBzeW5jaHJvbm91cyB0ZXh0dXJlIHJlYWRpbmcgKGxpa2UgV2ViR1BVKSwgeW91IHNob3VsZCB1c2UgU2VyaWFsaXplQXN5bmMgaW5zdGVhZFxyXG4gICAgICogYXMgZWxzZSB5b3UgbWF5IG5vdCByZXRyaWV2ZSB0aGUgcHJvcGVyIGJhc2U2NCBlbmNvZGVkIHRleHR1cmUgZGF0YSAod2hlbiB1c2luZyB0aGUgVGV4dHVyZS5Gb3JjZVNlcmlhbGl6ZUJ1ZmZlcnMgZmxhZylcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB0byBzZXJpYWxpemVcclxuICAgICAqIEByZXR1cm5zIGEgSlNPTiBjb21wYXRpYmxlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNlcmlhbGl6ZShzY2VuZTogU2NlbmUpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBTY2VuZVNlcmlhbGl6ZXIuX1NlcmlhbGl6ZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1NlcmlhbGl6ZShzY2VuZTogU2NlbmUsIGNoZWNrU3luY1JlYWRTdXBwb3J0ZWQgPSB0cnVlKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrU3luY1JlYWRTdXBwb3J0ZWQgJiYgIXNjZW5lLmdldEVuZ2luZSgpLl9mZWF0dXJlcy5zdXBwb3J0U3luY1RleHR1cmVSZWFkICYmIFRleHR1cmUuRm9yY2VTZXJpYWxpemVCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiVGhlIHNlcmlhbGl6YXRpb24gb2JqZWN0IG1heSBub3QgY29udGFpbiB0aGUgcHJvcGVyIGJhc2U2NCBlbmNvZGVkIHRleHR1cmUgZGF0YSEgWW91IHNob3VsZCB1c2UgdGhlIFNlcmlhbGl6ZUFzeW5jIG1ldGhvZCBpbnN0ZWFkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNjZW5lU2VyaWFsaXplci5DbGVhckNhY2hlKCk7XHJcblxyXG4gICAgICAgIC8vIFNjZW5lXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC51c2VEZWxheWVkVGV4dHVyZUxvYWRpbmcgPSBzY2VuZS51c2VEZWxheWVkVGV4dHVyZUxvYWRpbmc7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5hdXRvQ2xlYXIgPSBzY2VuZS5hdXRvQ2xlYXI7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jbGVhckNvbG9yID0gc2NlbmUuY2xlYXJDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5hbWJpZW50Q29sb3IgPSBzY2VuZS5hbWJpZW50Q29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ3Jhdml0eSA9IHNjZW5lLmdyYXZpdHkuYXNBcnJheSgpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29sbGlzaW9uc0VuYWJsZWQgPSBzY2VuZS5jb2xsaXNpb25zRW5hYmxlZDtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnVzZVJpZ2h0SGFuZGVkU3lzdGVtID0gc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcblxyXG4gICAgICAgIC8vIEZvZ1xyXG4gICAgICAgIGlmIChzY2VuZS5mb2dNb2RlICE9PSB1bmRlZmluZWQgJiYgc2NlbmUuZm9nTW9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmZvZ01vZGUgPSBzY2VuZS5mb2dNb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2NlbmUuZm9nQ29sb3IgIT09IHVuZGVmaW5lZCAmJiBzY2VuZS5mb2dDb2xvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmZvZ0NvbG9yID0gc2NlbmUuZm9nQ29sb3IuYXNBcnJheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2NlbmUuZm9nU3RhcnQgIT09IHVuZGVmaW5lZCAmJiBzY2VuZS5mb2dTdGFydCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmZvZ1N0YXJ0ID0gc2NlbmUuZm9nU3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY2VuZS5mb2dFbmQgIT09IHVuZGVmaW5lZCAmJiBzY2VuZS5mb2dFbmQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5mb2dFbmQgPSBzY2VuZS5mb2dFbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY2VuZS5mb2dEZW5zaXR5ICE9PSB1bmRlZmluZWQgJiYgc2NlbmUuZm9nRGVuc2l0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmZvZ0RlbnNpdHkgPSBzY2VuZS5mb2dEZW5zaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9QaHlzaWNzXHJcbiAgICAgICAgaWYgKHNjZW5lLmlzUGh5c2ljc0VuYWJsZWQgJiYgc2NlbmUuaXNQaHlzaWNzRW5hYmxlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoeXNpY0VuZ2luZSA9IHNjZW5lLmdldFBoeXNpY3NFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwaHlzaWNFbmdpbmUpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucGh5c2ljc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5waHlzaWNzR3Jhdml0eSA9IHBoeXNpY0VuZ2luZS5ncmF2aXR5LmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucGh5c2ljc0VuZ2luZSA9IHBoeXNpY0VuZ2luZS5nZXRQaHlzaWNzUGx1Z2luTmFtZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNZXRhZGF0YVxyXG4gICAgICAgIGlmIChzY2VuZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm1ldGFkYXRhID0gc2NlbmUubWV0YWRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNb3JwaCB0YXJnZXRzXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tb3JwaFRhcmdldE1hbmFnZXJzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBhYnN0cmFjdE1lc2ggb2Ygc2NlbmUubWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZXIgPSAoPE1lc2g+YWJzdHJhY3RNZXNoKS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAobWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tb3JwaFRhcmdldE1hbmFnZXJzLnB1c2gobWFuYWdlci5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpZ2h0c1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubGlnaHRzID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGxpZ2h0OiBMaWdodDtcclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzY2VuZS5saWdodHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxpZ2h0ID0gc2NlbmUubGlnaHRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbGlnaHQuZG9Ob3RTZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubGlnaHRzLnB1c2gobGlnaHQuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYW1lcmFzXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jYW1lcmFzID0gW107XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2NlbmUuY2FtZXJhcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gc2NlbmUuY2FtZXJhc1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhbWVyYS5kb05vdFNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jYW1lcmFzLnB1c2goY2FtZXJhLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmFjdGl2ZUNhbWVyYUlEID0gc2NlbmUuYWN0aXZlQ2FtZXJhLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uc1xyXG4gICAgICAgIFNlcmlhbGl6YXRpb25IZWxwZXIuQXBwZW5kU2VyaWFsaXplZEFuaW1hdGlvbnMoc2NlbmUsIHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG5cclxuICAgICAgICAvLyBBbmltYXRpb24gR3JvdXBzXHJcbiAgICAgICAgaWYgKHNjZW5lLmFuaW1hdGlvbkdyb3VwcyAmJiBzY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmFuaW1hdGlvbkdyb3VwcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhbmltYXRpb25Hcm91cEluZGV4ID0gMDsgYW5pbWF0aW9uR3JvdXBJbmRleCA8IHNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGg7IGFuaW1hdGlvbkdyb3VwSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXAgPSBzY2VuZS5hbmltYXRpb25Hcm91cHNbYW5pbWF0aW9uR3JvdXBJbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5hbmltYXRpb25Hcm91cHMucHVzaChhbmltYXRpb25Hcm91cC5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlZmxlY3Rpb24gcHJvYmVzXHJcbiAgICAgICAgaWYgKHNjZW5lLnJlZmxlY3Rpb25Qcm9iZXMgJiYgc2NlbmUucmVmbGVjdGlvblByb2Jlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucmVmbGVjdGlvblByb2JlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2NlbmUucmVmbGVjdGlvblByb2Jlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmxlY3Rpb25Qcm9iZSA9IHNjZW5lLnJlZmxlY3Rpb25Qcm9iZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5yZWZsZWN0aW9uUHJvYmVzLnB1c2gocmVmbGVjdGlvblByb2JlLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWF0ZXJpYWxzXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tYXRlcmlhbHMgPSBbXTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm11bHRpTWF0ZXJpYWxzID0gW107XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsOiBNYXRlcmlhbDtcclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzY2VuZS5tYXRlcmlhbHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsID0gc2NlbmUubWF0ZXJpYWxzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKCFtYXRlcmlhbC5kb05vdFNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tYXRlcmlhbHMucHVzaChtYXRlcmlhbC5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE11bHRpTWF0ZXJpYWxzXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tdWx0aU1hdGVyaWFscyA9IFtdO1xyXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHNjZW5lLm11bHRpTWF0ZXJpYWxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBtdWx0aU1hdGVyaWFsID0gc2NlbmUubXVsdGlNYXRlcmlhbHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm11bHRpTWF0ZXJpYWxzLnB1c2gobXVsdGlNYXRlcmlhbC5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbnZpcm9ubWVudCB0ZXh0dXJlXHJcbiAgICAgICAgaWYgKHNjZW5lLmVudmlyb25tZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBpZiAoKHNjZW5lLmVudmlyb25tZW50VGV4dHVyZSBhcyBDdWJlVGV4dHVyZSkuX2ZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmVudmlyb25tZW50VGV4dHVyZSA9IHNjZW5lLmVudmlyb25tZW50VGV4dHVyZS5zZXJpYWxpemUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZW52aXJvbm1lbnRUZXh0dXJlID0gc2NlbmUuZW52aXJvbm1lbnRUZXh0dXJlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmVudmlyb25tZW50VGV4dHVyZVJvdGF0aW9uWSA9IChzY2VuZS5lbnZpcm9ubWVudFRleHR1cmUgYXMgQ3ViZVRleHR1cmUpLnJvdGF0aW9uWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW52aXJvbm1lbnQgSW50ZW5zaXR5XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5lbnZpcm9ubWVudEludGVuc2l0eSA9IHNjZW5lLmVudmlyb25tZW50SW50ZW5zaXR5O1xyXG5cclxuICAgICAgICAvLyBJQkwgSW50ZW5zaXR5XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5pYmxJbnRlbnNpdHkgPSBzY2VuZS5pYmxJbnRlbnNpdHk7XHJcblxyXG4gICAgICAgIC8vIFNrZWxldG9uc1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc2tlbGV0b25zID0gW107XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2NlbmUuc2tlbGV0b25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IHNjZW5lLnNrZWxldG9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmICghc2tlbGV0b24uZG9Ob3RTZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc2tlbGV0b25zLnB1c2goc2tlbGV0b24uc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUcmFuc2Zvcm0gbm9kZXNcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRyYW5zZm9ybU5vZGVzID0gW107XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2NlbmUudHJhbnNmb3JtTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghc2NlbmUudHJhbnNmb3JtTm9kZXNbaW5kZXhdLmRvTm90U2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRyYW5zZm9ybU5vZGVzLnB1c2goc2NlbmUudHJhbnNmb3JtTm9kZXNbaW5kZXhdLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2VvbWV0cmllc1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcyA9IHt9O1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMuYm94ZXMgPSBbXTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMuc3BoZXJlcyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcy5jeWxpbmRlcnMgPSBbXTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lmdlb21ldHJpZXMudG9ydXNlcyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcy5ncm91bmRzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5nZW9tZXRyaWVzLnBsYW5lcyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ2VvbWV0cmllcy50b3J1c0tub3RzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5nZW9tZXRyaWVzLnZlcnRleERhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgU2VyaWFsaXplZEdlb21ldHJpZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBnZW9tZXRyaWVzID0gc2NlbmUuZ2V0R2VvbWV0cmllcygpO1xyXG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGdlb21ldHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnkuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICBTZXJpYWxpemVHZW9tZXRyeShnZW9tZXRyeSwgc2VyaWFsaXphdGlvbk9iamVjdC5nZW9tZXRyaWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWVzaGVzXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tZXNoZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzY2VuZS5tZXNoZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFic3RyYWN0TWVzaCA9IHNjZW5lLm1lc2hlc1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAoYWJzdHJhY3RNZXNoIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaCA9IGFic3RyYWN0TWVzaDtcclxuICAgICAgICAgICAgICAgIGlmICghbWVzaC5kb05vdFNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNoLmRlbGF5TG9hZFN0YXRlID09PSBDb25zdGFudHMuREVMQVlMT0FEU1RBVEVfTE9BREVEIHx8IG1lc2guZGVsYXlMb2FkU3RhdGUgPT09IENvbnN0YW50cy5ERUxBWUxPQURTVEFURV9OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWVzaGVzLnB1c2goU2VyaWFsaXplTWVzaChtZXNoLCBzZXJpYWxpemF0aW9uT2JqZWN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJ0aWNsZXMgU3lzdGVtc1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucGFydGljbGVTeXN0ZW1zID0gW107XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2NlbmUucGFydGljbGVTeXN0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0aWNsZVN5c3RlbSA9IHNjZW5lLnBhcnRpY2xlU3lzdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmICghcGFydGljbGVTeXN0ZW0uZG9Ob3RTZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucGFydGljbGVTeXN0ZW1zLnB1c2gocGFydGljbGVTeXN0ZW0uc2VyaWFsaXplKGZhbHNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvc3QgcHJvY2Vzc2VzXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5wb3N0UHJvY2Vzc2VzID0gW107XHJcbiAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgc2NlbmUucG9zdFByb2Nlc3Nlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdFByb2Nlc3MgPSBzY2VuZS5wb3N0UHJvY2Vzc2VzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKCFwb3N0UHJvY2Vzcy5kb05vdFNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5wb3N0UHJvY2Vzc2VzLnB1c2gocG9zdFByb2Nlc3Muc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBY3Rpb24gTWFuYWdlclxyXG4gICAgICAgIGlmIChzY2VuZS5hY3Rpb25NYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuYWN0aW9ucyA9IHNjZW5lLmFjdGlvbk1hbmFnZXIuc2VyaWFsaXplKFwic2NlbmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21wb25lbnRzXHJcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2NlbmUuX3NlcmlhbGl6YWJsZUNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNwcml0ZXNcclxuICAgICAgICBpZiAoc2NlbmUuc3ByaXRlTWFuYWdlcnMpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zcHJpdGVNYW5hZ2VycyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBzY2VuZS5zcHJpdGVNYW5hZ2Vycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZU1hbmFnZXIgPSBzY2VuZS5zcHJpdGVNYW5hZ2Vyc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNwcml0ZU1hbmFnZXIuZG9Ob3RTZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnNwcml0ZU1hbmFnZXJzLnB1c2goc3ByaXRlTWFuYWdlci5zZXJpYWxpemUodHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZSBhIHNjZW5lIGludG8gYSBKU09OIGNvbXBhdGlibGUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgc2NlbmUgdG8gc2VyaWFsaXplXHJcbiAgICAgKiBAcmV0dXJucyBhIEpTT04gcHJvbWlzZSBjb21wYXRpYmxlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIFNlcmlhbGl6ZUFzeW5jKHNjZW5lOiBTY2VuZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IFNjZW5lU2VyaWFsaXplci5fU2VyaWFsaXplKHNjZW5lLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPGFueT4+ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX0NvbGxlY3RQcm9taXNlcyhzZXJpYWxpemF0aW9uT2JqZWN0LCBwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ29sbGVjdFByb21pc2VzKG9iajogYW55LCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxhbnk+Pik6IHZvaWQge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG8gPSBvYmpbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm4sIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChvLnRoZW4oKHJlczogYW55KSA9PiAob2JqW2ldID0gcmVzKSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvIGluc3RhbmNlb2YgT2JqZWN0IHx8IEFycmF5LmlzQXJyYXkobykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9Db2xsZWN0UHJvbWlzZXMobywgcHJvbWlzZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbyA9IG9ialtuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuLCBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKG8udGhlbigocmVzOiBhbnkpID0+IChvYmpbbmFtZV0gPSByZXMpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvIGluc3RhbmNlb2YgT2JqZWN0IHx8IEFycmF5LmlzQXJyYXkobykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fQ29sbGVjdFByb21pc2VzKG8sIHByb21pc2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemUgYSBtZXNoIGludG8gYSBKU09OIGNvbXBhdGlibGUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gdG9TZXJpYWxpemUgZGVmaW5lcyB0aGUgbWVzaCB0byBzZXJpYWxpemVcclxuICAgICAqIEBwYXJhbSB3aXRoUGFyZW50cyBkZWZpbmVzIGlmIHBhcmVudHMgbXVzdCBiZSBzZXJpYWxpemVkIGFzIHdlbGxcclxuICAgICAqIEBwYXJhbSB3aXRoQ2hpbGRyZW4gZGVmaW5lcyBpZiBjaGlsZHJlbiBtdXN0IGJlIHNlcmlhbGl6ZWQgYXMgd2VsbFxyXG4gICAgICogQHJldHVybnMgYSBKU09OIGNvbXBhdGlibGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2VyaWFsaXplTWVzaCh0b1NlcmlhbGl6ZTogYW55IC8qIE1lc2ggfHwgTWVzaFtdICovLCB3aXRoUGFyZW50czogYm9vbGVhbiA9IGZhbHNlLCB3aXRoQ2hpbGRyZW46IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge307XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5tZXNoZXMgPSBbXTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRyYW5zZm9ybU5vZGVzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jYW1lcmFzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5saWdodHMgPSBbXTtcclxuXHJcbiAgICAgICAgU2NlbmVTZXJpYWxpemVyLkNsZWFyQ2FjaGUoKTtcclxuXHJcbiAgICAgICAgdG9TZXJpYWxpemUgPSB0b1NlcmlhbGl6ZSBpbnN0YW5jZW9mIEFycmF5ID8gdG9TZXJpYWxpemUgOiBbdG9TZXJpYWxpemVdO1xyXG5cclxuICAgICAgICBpZiAod2l0aFBhcmVudHMgfHwgd2l0aENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIC8vZGVsaWJlcmF0ZSBmb3IgbG9vcCEgbm90IGZvciBlYWNoLCBhcHBlbmRlZCBzaG91bGQgYmUgcHJvY2Vzc2VkIGFzIHdlbGwuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9TZXJpYWxpemUubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aXRoQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRvU2VyaWFsaXplW2ldLmdldERlc2NlbmRhbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGRlc2NlbmRhbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b1NlcmlhbGl6ZS5pbmRleE9mKG5vZGUpIDwgMCAmJiAhbm9kZS5kb05vdFNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9TZXJpYWxpemUucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vbWFrZSBzdXJlIHRoZSBhcnJheSBkb2Vzbid0IGNvbnRhaW4gdGhlIG9iamVjdCBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgICBpZiAod2l0aFBhcmVudHMgJiYgdG9TZXJpYWxpemVbaV0ucGFyZW50ICYmIHRvU2VyaWFsaXplLmluZGV4T2YodG9TZXJpYWxpemVbaV0ucGFyZW50KSA8IDAgJiYgIXRvU2VyaWFsaXplW2ldLnBhcmVudC5kb05vdFNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvU2VyaWFsaXplLnB1c2godG9TZXJpYWxpemVbaV0ucGFyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIHRvU2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgIEZpbmFsaXplU2luZ2xlTm9kZShtZXNoLCBzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE51bWJlckRyb3Bkb3duUHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy9kcm9wZG93blByb3BlcnR5TGluZVwiO1xyXG5pbXBvcnQgeyBTY2VuZVNlcmlhbGl6ZXIgfSBmcm9tIFwiY29yZS9NaXNjL3NjZW5lU2VyaWFsaXplclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnRUZXh0dXJlVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL2Vudmlyb25tZW50VGV4dHVyZVRvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQ3ViZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvY3ViZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9idXR0b25MaW5lXCI7XHJcbmltcG9ydCB7IFN5bmNlZFNsaWRlclByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvc3luY2VkU2xpZGVyUHJvcGVydHlMaW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgUEJSTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3Bick1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFja2dyb3VuZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL0JhY2tncm91bmQvYmFja2dyb3VuZE1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xyXG5pbXBvcnQgeyBTd2l0Y2hQcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL3N3aXRjaFByb3BlcnR5TGluZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFrZUxhenlDb21wb25lbnQgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L3ByaW1pdGl2ZXMvbGF6eUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvcHJpbWl0aXZlcy9jb2xsYXBzZVwiO1xyXG5pbXBvcnQgeyBBcnJvd0Rvd25sb2FkUmVndWxhciB9IGZyb20gXCJAZmx1ZW50dWkvcmVhY3QtaWNvbnNcIjtcclxuXHJcbmNvbnN0IEVudkV4cG9ydEltYWdlVHlwZXMgPSBbXHJcbiAgICB7IGxhYmVsOiBcIlBOR1wiLCB2YWx1ZTogMCwgaW1hZ2VUeXBlOiBcImltYWdlL3BuZ1wiIH0sXHJcbiAgICB7IGxhYmVsOiBcIldlYlBcIiwgdmFsdWU6IDEsIGltYWdlVHlwZTogXCJpbWFnZS93ZWJwXCIgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmludGVyZmFjZSBJQmFieWxvbkV4cG9ydE9wdGlvbnNTdGF0ZSB7XHJcbiAgICBpbWFnZVR5cGVJbmRleDogbnVtYmVyO1xyXG4gICAgaW1hZ2VRdWFsaXR5OiBudW1iZXI7XHJcbiAgICBpYmxEaWZmdXNlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXhwb3J0QmFieWxvblRvb2xzOiBGdW5jdGlvbkNvbXBvbmVudDx7IHNjZW5lOiBTY2VuZSB9PiA9ICh7IHNjZW5lIH0pID0+IHtcclxuICAgIGNvbnN0IFtiYWJ5bG9uRXhwb3J0T3B0aW9ucywgc2V0QmFieWxvbkV4cG9ydE9wdGlvbnNdID0gdXNlU3RhdGU8UmVhZG9ubHk8SUJhYnlsb25FeHBvcnRPcHRpb25zU3RhdGU+Pih7XHJcbiAgICAgICAgaW1hZ2VUeXBlSW5kZXg6IDAsXHJcbiAgICAgICAgaW1hZ2VRdWFsaXR5OiAwLjgsXHJcbiAgICAgICAgaWJsRGlmZnVzZTogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBleHBvcnRCYWJ5bG9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0clNjZW5lID0gSlNPTi5zdHJpbmdpZnkoU2NlbmVTZXJpYWxpemVyLlNlcmlhbGl6ZShzY2VuZSkpO1xyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc3RyU2NlbmVdLCB7IHR5cGU6IFwib2N0ZXQvc3RyZWFtXCIgfSk7XHJcbiAgICAgICAgVG9vbHMuRG93bmxvYWQoYmxvYiwgXCJzY2VuZS5iYWJ5bG9uXCIpO1xyXG4gICAgfSwgW3NjZW5lXSk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlRW52VGV4dHVyZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXNjZW5lLmVudmlyb25tZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBFbnZpcm9ubWVudFRleHR1cmVUb29scy5DcmVhdGVFbnZUZXh0dXJlQXN5bmMoc2NlbmUuZW52aXJvbm1lbnRUZXh0dXJlIGFzIEN1YmVUZXh0dXJlLCB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVR5cGU6IEVudkV4cG9ydEltYWdlVHlwZXNbYmFieWxvbkV4cG9ydE9wdGlvbnMuaW1hZ2VUeXBlSW5kZXhdLmltYWdlVHlwZSxcclxuICAgICAgICAgICAgICAgIGltYWdlUXVhbGl0eTogYmFieWxvbkV4cG9ydE9wdGlvbnMuaW1hZ2VRdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUlycmFkaWFuY2VUZXh0dXJlOiAhYmFieWxvbkV4cG9ydE9wdGlvbnMuaWJsRGlmZnVzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBcIm9jdGV0L3N0cmVhbVwiIH0pO1xyXG4gICAgICAgICAgICBUb29scy5Eb3dubG9hZChibG9iLCBcImVudmlyb25tZW50LmVudlwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5FcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2NlbmUsIGJhYnlsb25FeHBvcnRPcHRpb25zXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uTGluZSBsYWJlbD1cIkV4cG9ydCB0byBCYWJ5bG9uXCIgaWNvbj17QXJyb3dEb3dubG9hZFJlZ3VsYXJ9IG9uQ2xpY2s9e2V4cG9ydEJhYnlsb259IC8+XHJcbiAgICAgICAgICAgIHshc2NlbmUuZ2V0RW5naW5lKCkucHJlbXVsdGlwbGllZEFscGhhICYmIHNjZW5lLmVudmlyb25tZW50VGV4dHVyZSAmJiBzY2VuZS5lbnZpcm9ubWVudFRleHR1cmUuX3ByZWZpbHRlcmVkICYmIHNjZW5lLmFjdGl2ZUNhbWVyYSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25MaW5lIGxhYmVsPVwiR2VuZXJhdGUgLmVudiB0ZXh0dXJlXCIgaWNvbj17QXJyb3dEb3dubG9hZFJlZ3VsYXJ9IG9uQ2xpY2s9e2NyZWF0ZUVudlRleHR1cmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3NjZW5lLmVudmlyb25tZW50VGV4dHVyZS5pcnJhZGlhbmNlVGV4dHVyZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hQcm9wZXJ0eUxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImlibERpZmZ1c2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaWZmdXNlIFRleHR1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFeHBvcnQgZGlmZnVzZSB0ZXh0dXJlIGZvciBJQkxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhYnlsb25FeHBvcnRPcHRpb25zLmlibERpZmZ1c2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFieWxvbkV4cG9ydE9wdGlvbnMoKHByZXYpID0+ICh7IC4uLnByZXYsIGlibERpZmZ1c2U6IHZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRHJvcGRvd25Qcm9wZXJ0eUxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSB0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17RW52RXhwb3J0SW1hZ2VUeXBlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhYnlsb25FeHBvcnRPcHRpb25zLmltYWdlVHlwZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFieWxvbkV4cG9ydE9wdGlvbnMoKHByZXYpID0+ICh7IC4uLnByZXYsIGltYWdlVHlwZUluZGV4OiB2YWwgYXMgbnVtYmVyIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSB2aXNpYmxlPXtiYWJ5bG9uRXhwb3J0T3B0aW9ucy5pbWFnZVR5cGVJbmRleCA+IDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3luY2VkU2xpZGVyUHJvcGVydHlMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlF1YWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhYnlsb25FeHBvcnRPcHRpb25zLmltYWdlUXVhbGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEJhYnlsb25FeHBvcnRPcHRpb25zKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBpbWFnZVF1YWxpdHk6IHZhbHVlIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIElHbHRmRXhwb3J0T3B0aW9uc1N0YXRlIHtcclxuICAgIGV4cG9ydERpc2FibGVkTm9kZXM6IGJvb2xlYW47XHJcbiAgICBleHBvcnRTa3lib3hlczogYm9vbGVhbjtcclxuICAgIGV4cG9ydENhbWVyYXM6IGJvb2xlYW47XHJcbiAgICBleHBvcnRMaWdodHM6IGJvb2xlYW47XHJcbiAgICBkcmFjb0NvbXByZXNzaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXhwb3J0R2x0ZlRvb2xzID0gTWFrZUxhenlDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gRGVmZXIgaW1wb3J0aW5nIGFueXRoaW5nIGZyb20gdGhlIHNlcmlhbGl6ZXJzIHBhY2thZ2UgdW50aWwgdGhpcyBjb21wb25lbnQgaXMgYWN0dWFsbHkgbW91bnRlZC5cclxuICAgIGNvbnN0IHsgR0xURjJFeHBvcnQgfSA9IGF3YWl0IGltcG9ydChcInNlcmlhbGl6ZXJzL2dsVEYvMi4wL2dsVEZTZXJpYWxpemVyXCIpO1xyXG5cclxuICAgIHJldHVybiAocHJvcHM6IHsgc2NlbmU6IFNjZW5lIH0pID0+IHtcclxuICAgICAgICBjb25zdCBbaXNFeHBvcnRpbmdHbHRmLCBzZXRJc0V4cG9ydGluZ0dsdGZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IFtnbHRmRXhwb3J0T3B0aW9ucywgc2V0R2x0ZkV4cG9ydE9wdGlvbnNdID0gdXNlU3RhdGU8UmVhZG9ubHk8SUdsdGZFeHBvcnRPcHRpb25zU3RhdGU+Pih7XHJcbiAgICAgICAgICAgIGV4cG9ydERpc2FibGVkTm9kZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHBvcnRTa3lib3hlczogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cG9ydENhbWVyYXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBleHBvcnRMaWdodHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmFjb0NvbXByZXNzaW9uOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwb3J0R0xURiA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNFeHBvcnRpbmdHbHRmKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkRXhwb3J0ID0gKG5vZGU6IE5vZGUpOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZ2x0ZkV4cG9ydE9wdGlvbnMuZXhwb3J0RGlzYWJsZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS5pc0VuYWJsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZ2x0ZkV4cG9ydE9wdGlvbnMuZXhwb3J0U2t5Ym94ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbm9kZS5tYXRlcmlhbCBhcyBQQlJNYXRlcmlhbCB8IFN0YW5kYXJkTWF0ZXJpYWwgfCBCYWNrZ3JvdW5kTWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZsZWN0aW9uVGV4dHVyZSA9IG1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZmxlY3Rpb25UZXh0dXJlICYmIHJlZmxlY3Rpb25UZXh0dXJlLmNvb3JkaW5hdGVzTW9kZSA9PT0gVGV4dHVyZS5TS1lCT1hfTU9ERSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWdsdGZFeHBvcnRPcHRpb25zLmV4cG9ydENhbWVyYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIENhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZ2x0ZkV4cG9ydE9wdGlvbnMuZXhwb3J0TGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBMaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdsYiA9IGF3YWl0IEdMVEYyRXhwb3J0LkdMQkFzeW5jKHByb3BzLnNjZW5lLCBcInNjZW5lXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoQ29tcHJlc3Npb25NZXRob2Q6IGdsdGZFeHBvcnRPcHRpb25zLmRyYWNvQ29tcHJlc3Npb24gPyBcIkRyYWNvXCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRXhwb3J0Tm9kZTogKG5vZGUpID0+IHNob3VsZEV4cG9ydChub2RlKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZ2xiLmRvd25sb2FkRmlsZXMoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoYEZhaWxlZCB0byBleHBvcnQgR0xCOiAke3JlYXNvbn1gKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldElzRXhwb3J0aW5nR2x0ZihmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbZ2x0ZkV4cG9ydE9wdGlvbnMsIHByb3BzLnNjZW5lXSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoUHJvcGVydHlMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiR0xURkV4cG9ydERpc2FibGVkTm9kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRXhwb3J0IERpc2FibGVkIE5vZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoZXRoZXIgdG8gZXhwb3J0IG5vZGVzIHRoYXQgYXJlIGRpc2FibGVkIGluIHRoZSBzY2VuZS5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnbHRmRXhwb3J0T3B0aW9ucy5leHBvcnREaXNhYmxlZE5vZGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0R2x0ZkV4cG9ydE9wdGlvbnMoeyAuLi5nbHRmRXhwb3J0T3B0aW9ucywgZXhwb3J0RGlzYWJsZWROb2RlczogY2hlY2tlZCB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoUHJvcGVydHlMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiR0xURkV4cG9ydFNreWJveGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkV4cG9ydCBTa3lib3hlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaGV0aGVyIHRvIGV4cG9ydCBza3lib3ggbm9kZXMgaW4gdGhlIHNjZW5lLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dsdGZFeHBvcnRPcHRpb25zLmV4cG9ydFNreWJveGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0R2x0ZkV4cG9ydE9wdGlvbnMoeyAuLi5nbHRmRXhwb3J0T3B0aW9ucywgZXhwb3J0U2t5Ym94ZXM6IGNoZWNrZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFByb3BlcnR5TGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIkdMVEZFeHBvcnRDYW1lcmFzXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkV4cG9ydCBDYW1lcmFzXCJcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoZXRoZXIgdG8gZXhwb3J0IGNhbWVyYXMgaW4gdGhlIHNjZW5lLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dsdGZFeHBvcnRPcHRpb25zLmV4cG9ydENhbWVyYXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGVja2VkOiBib29sZWFuKSA9PiBzZXRHbHRmRXhwb3J0T3B0aW9ucyh7IC4uLmdsdGZFeHBvcnRPcHRpb25zLCBleHBvcnRDYW1lcmFzOiBjaGVja2VkIH0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hQcm9wZXJ0eUxpbmVcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJHTFRGRXhwb3J0TGlnaHRzXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkV4cG9ydCBMaWdodHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2hldGhlciB0byBleHBvcnQgbGlnaHRzIGluIHRoZSBzY2VuZS5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnbHRmRXhwb3J0T3B0aW9ucy5leHBvcnRMaWdodHN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGVja2VkOiBib29sZWFuKSA9PiBzZXRHbHRmRXhwb3J0T3B0aW9ucyh7IC4uLmdsdGZFeHBvcnRPcHRpb25zLCBleHBvcnRMaWdodHM6IGNoZWNrZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFByb3BlcnR5TGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIkdMVEZEcmFjb0NvbXByZXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRyYWNvIENvbXByZXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoZXRoZXIgdG8gYXBwbHkgRHJhY28gY29tcHJlc3Npb24gdG8gZ2VvbWV0cnkuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z2x0ZkV4cG9ydE9wdGlvbnMuZHJhY29Db21wcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoZWNrZWQ6IGJvb2xlYW4pID0+IHNldEdsdGZFeHBvcnRPcHRpb25zKHsgLi4uZ2x0ZkV4cG9ydE9wdGlvbnMsIGRyYWNvQ29tcHJlc3Npb246IGNoZWNrZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmUgbGFiZWw9XCJFeHBvcnQgdG8gR0xCXCIgaWNvbj17QXJyb3dEb3dubG9hZFJlZ3VsYXJ9IG9uQ2xpY2s9e2V4cG9ydEdMVEZ9IGRpc2FibGVkPXtpc0V4cG9ydGluZ0dsdGZ9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59KTtcclxuIiwiaW1wb3J0IHR5cGUgeyBTZXJ2aWNlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGFyaXR5L3NlcnZpY2VEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFRvb2xzU2VydmljZUlkZW50aXR5IH0gZnJvbSBcIi4uL3Rvb2xzU2VydmljZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElUb29sc1NlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHNTZXJ2aWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgSURpc3Bvc2FibGUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBFeHBvcnRCYWJ5bG9uVG9vbHMsIEV4cG9ydEdsdGZUb29scyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Rvb2xzL2V4cG9ydFRvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRXhwb3J0U2VydmljZURlZmluaXRpb246IFNlcnZpY2VEZWZpbml0aW9uPFtdLCBbSVRvb2xzU2VydmljZV0+ID0ge1xyXG4gICAgZnJpZW5kbHlOYW1lOiBcIkV4cG9ydCBUb29sc1wiLFxyXG4gICAgY29uc3VtZXM6IFtUb29sc1NlcnZpY2VJZGVudGl0eV0sXHJcbiAgICBmYWN0b3J5OiAodG9vbHNTZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudFJlZ2lzdHJhdGlvbnM6IElEaXNwb3NhYmxlW10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gZ2xURiBleHBvcnQgY29udGVudFxyXG4gICAgICAgIGNvbnRlbnRSZWdpc3RyYXRpb25zLnB1c2goXHJcbiAgICAgICAgICAgIHRvb2xzU2VydmljZS5hZGRTZWN0aW9uQ29udGVudCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZ2xURiBFeHBvcnRcIixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IFwiZ2xURiBFeHBvcnRcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKHsgY29udGV4dCB9KSA9PiA8RXhwb3J0R2x0ZlRvb2xzIHNjZW5lPXtjb250ZXh0fSAvPixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBCYWJ5bG9uIGV4cG9ydCBjb250ZW50XHJcbiAgICAgICAgY29udGVudFJlZ2lzdHJhdGlvbnMucHVzaChcclxuICAgICAgICAgICAgdG9vbHNTZXJ2aWNlLmFkZFNlY3Rpb25Db250ZW50KHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJCYWJ5bG9uIEV4cG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogXCJCYWJ5bG9uIEV4cG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAoeyBjb250ZXh0IH0pID0+IDxFeHBvcnRCYWJ5bG9uVG9vbHMgc2NlbmU9e2NvbnRleHR9IC8+LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRSZWdpc3RyYXRpb25zLmZvckVhY2goKHJlZ2lzdHJhdGlvbikgPT4gcmVnaXN0cmF0aW9uLmRpc3Bvc2UoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXJ2aWNlRGVmaW5pdGlvbnM6IFtFeHBvcnRTZXJ2aWNlRGVmaW5pdGlvbl0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==