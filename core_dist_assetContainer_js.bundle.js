"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_assetContainer_js"],{

/***/ "../core/dist/assetContainer.js":
/*!**************************************!*\
  !*** ../core/dist/assetContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAssetContainer: () => (/* binding */ AbstractAssetContainer),
/* harmony export */   AssetContainer: () => (/* binding */ AssetContainer),
/* harmony export */   InstantiatedEntries: () => (/* binding */ InstantiatedEntries),
/* harmony export */   KeepAssets: () => (/* binding */ KeepAssets)
/* harmony export */ });
/* harmony import */ var _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var _Meshes_transformNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meshes/abstractMesh */ "../core/dist/Meshes/abstractMesh.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Meshes/instancedMesh */ "../core/dist/Meshes/instancedMesh.js");
/* harmony import */ var _Lights_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lights/light */ "../core/dist/Lights/light.js");
/* harmony import */ var _Cameras_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cameras/camera */ "../core/dist/Cameras/camera.js");
/* harmony import */ var _Misc_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var _Misc_tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Misc/tags */ "../core/dist/Misc/tags.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");











/**
 * Root class for AssetContainer and KeepAssets
 */
class AbstractAssetContainer {
    constructor() {
        /**
         * Gets the list of root nodes (ie. nodes with no parent)
         */
        this.rootNodes = [];
        /** All of the cameras added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras
         */
        this.cameras = [];
        /**
         * All of the lights added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
         */
        this.lights = [];
        /**
         * All of the (abstract) meshes added to this scene
         */
        this.meshes = [];
        /**
         * The list of skeletons added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons
         */
        this.skeletons = [];
        /**
         * All of the particle systems added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro
         */
        this.particleSystems = [];
        /**
         * Gets a list of Animations associated with the scene
         */
        this.animations = [];
        /**
         * All of the animation groups added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations
         */
        this.animationGroups = [];
        /**
         * All of the multi-materials added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials
         */
        this.multiMaterials = [];
        /**
         * All of the materials added to this scene
         * In the context of a Scene, it is not supposed to be modified manually.
         * Any addition or removal should be done using the addMaterial and removeMaterial Scene methods.
         * Note also that the order of the Material within the array is not significant and might change.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction
         */
        this.materials = [];
        /**
         * The list of morph target managers added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph
         */
        this.morphTargetManagers = [];
        /**
         * The list of geometries used in the scene.
         */
        this.geometries = [];
        /**
         * All of the transform nodes added to this scene
         * In the context of a Scene, it is not supposed to be modified manually.
         * Any addition or removal should be done using the addTransformNode and removeTransformNode Scene methods.
         * Note also that the order of the TransformNode within the array is not significant and might change.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/transform_node
         */
        this.transformNodes = [];
        /**
         * ActionManagers available on the scene.
         * @deprecated
         */
        this.actionManagers = [];
        /**
         * Textures to keep.
         */
        this.textures = [];
        /** @internal */
        this._environmentTexture = null;
        /**
         * The list of postprocesses added to the scene
         */
        this.postProcesses = [];
        /**
         * The list of sounds
         */
        this.sounds = null;
        /**
         * The list of effect layers added to the scene
         */
        this.effectLayers = [];
        /**
         * The list of layers added to the scene
         */
        this.layers = [];
        /**
         * The list of reflection probes added to the scene
         */
        this.reflectionProbes = [];
    }
    /**
     * Texture used in all pbr material as the reflection texture.
     * As in the majority of the scene they are the same (exception for multi room and so on),
     * this is easier to reference from here than from all the materials.
     */
    get environmentTexture() {
        return this._environmentTexture;
    }
    set environmentTexture(value) {
        this._environmentTexture = value;
    }
    /**
     * @returns all meshes, lights, cameras, transformNodes and bones
     */
    getNodes() {
        let nodes = [];
        nodes = nodes.concat(this.meshes);
        nodes = nodes.concat(this.lights);
        nodes = nodes.concat(this.cameras);
        nodes = nodes.concat(this.transformNodes); // dummies
        for (const skeleton of this.skeletons) {
            nodes = nodes.concat(skeleton.bones);
        }
        return nodes;
    }
}
/**
 * Set of assets to keep when moving a scene into an asset container.
 */
class KeepAssets extends AbstractAssetContainer {
}
/**
 * Class used to store the output of the AssetContainer.instantiateAllMeshesToScene function
 */
class InstantiatedEntries {
    constructor() {
        /**
         * List of new root nodes (eg. nodes with no parent)
         */
        this.rootNodes = [];
        /**
         * List of new skeletons
         */
        this.skeletons = [];
        /**
         * List of new animation groups
         */
        this.animationGroups = [];
    }
    /**
     * Disposes the instantiated entries from the scene
     */
    dispose() {
        const rootNodes = this.rootNodes;
        for (const rootNode of rootNodes) {
            rootNode.dispose();
        }
        rootNodes.length = 0;
        const skeletons = this.skeletons;
        for (const skeleton of skeletons) {
            skeleton.dispose();
        }
        skeletons.length = 0;
        const animationGroups = this.animationGroups;
        for (const animationGroup of animationGroups) {
            animationGroup.dispose();
        }
        animationGroups.length = 0;
    }
}
/**
 * Container with a set of assets that can be added or removed from a scene.
 */
class AssetContainer extends AbstractAssetContainer {
    /**
     * Instantiates an AssetContainer.
     * @param scene The scene the AssetContainer belongs to.
     */
    constructor(scene) {
        super();
        this._wasAddedToScene = false;
        scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_4__.EngineStore.LastCreatedScene;
        if (!scene) {
            return;
        }
        this.scene = scene;
        this["proceduralTextures"] = [];
        scene.onDisposeObservable.add(() => {
            if (!this._wasAddedToScene) {
                this.dispose();
            }
        });
        this._onContextRestoredObserver = scene.getEngine().onContextRestoredObservable.add(() => {
            for (const geometry of this.geometries) {
                geometry._rebuild();
            }
            for (const mesh of this.meshes) {
                mesh._rebuild();
            }
            for (const system of this.particleSystems) {
                system.rebuild();
            }
            for (const texture of this.textures) {
                texture._rebuild();
            }
        });
    }
    /**
     * Given a list of nodes, return a topological sorting of them.
     * @param nodes
     * @returns a sorted array of nodes
     */
    _topologicalSort(nodes) {
        const nodesUidMap = new Map();
        for (const node of nodes) {
            nodesUidMap.set(node.uniqueId, node);
        }
        const dependencyGraph = {
            dependsOn: new Map(), // given a node id, what are the ids of the nodes it depends on
            dependedBy: new Map(), // given a node id, what are the ids of the nodes that depend on it
        };
        // Build the dependency graph given the list of nodes
        // First pass: Initialize the empty dependency graph
        for (const node of nodes) {
            const nodeId = node.uniqueId;
            dependencyGraph.dependsOn.set(nodeId, new Set());
            dependencyGraph.dependedBy.set(nodeId, new Set());
        }
        // Second pass: Populate the dependency graph. We assume that we
        // don't need to check for cycles here, as the scene graph cannot
        // contain cycles. Our graph also already contains all transitive
        // dependencies because getDescendants returns the transitive
        // dependencies by default.
        for (const node of nodes) {
            const nodeId = node.uniqueId;
            const dependsOn = dependencyGraph.dependsOn.get(nodeId);
            if (node instanceof _Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_5__.InstancedMesh) {
                const masterMesh = node.sourceMesh;
                if (nodesUidMap.has(masterMesh.uniqueId)) {
                    dependsOn.add(masterMesh.uniqueId);
                    dependencyGraph.dependedBy.get(masterMesh.uniqueId).add(nodeId);
                }
            }
            const dependedBy = dependencyGraph.dependedBy.get(nodeId);
            for (const child of node.getDescendants()) {
                const childId = child.uniqueId;
                if (nodesUidMap.has(childId)) {
                    dependedBy.add(childId);
                    const childDependsOn = dependencyGraph.dependsOn.get(childId);
                    childDependsOn.add(nodeId);
                }
            }
        }
        // Third pass: Topological sort
        const sortedNodes = [];
        // First: Find all nodes that have no dependencies
        const leaves = [];
        for (const node of nodes) {
            const nodeId = node.uniqueId;
            if (dependencyGraph.dependsOn.get(nodeId).size === 0) {
                leaves.push(node);
                nodesUidMap.delete(nodeId);
            }
        }
        const visitList = leaves;
        while (visitList.length > 0) {
            const nodeToVisit = visitList.shift();
            sortedNodes.push(nodeToVisit);
            // Remove the node from the dependency graph
            // When a node is visited, we know that dependsOn is empty.
            // So we only need to remove the node from dependedBy.
            const dependedByVisitedNode = dependencyGraph.dependedBy.get(nodeToVisit.uniqueId);
            // Array.from(x.values()) is to make the TS compiler happy
            for (const dependedByVisitedNodeId of Array.from(dependedByVisitedNode.values())) {
                const dependsOnDependedByVisitedNode = dependencyGraph.dependsOn.get(dependedByVisitedNodeId);
                dependsOnDependedByVisitedNode.delete(nodeToVisit.uniqueId);
                if (dependsOnDependedByVisitedNode.size === 0 && nodesUidMap.get(dependedByVisitedNodeId)) {
                    visitList.push(nodesUidMap.get(dependedByVisitedNodeId));
                    nodesUidMap.delete(dependedByVisitedNodeId);
                }
            }
        }
        if (nodesUidMap.size > 0) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("SceneSerializer._topologicalSort: There were unvisited nodes:");
            nodesUidMap.forEach((node) => {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error(node.name);
            });
        }
        return sortedNodes;
    }
    _addNodeAndDescendantsToList(list, addedIds, rootNode, predicate) {
        if (!rootNode || (predicate && !predicate(rootNode)) || addedIds.has(rootNode.uniqueId)) {
            return;
        }
        list.push(rootNode);
        addedIds.add(rootNode.uniqueId);
        for (const child of rootNode.getDescendants(true)) {
            this._addNodeAndDescendantsToList(list, addedIds, child, predicate);
        }
    }
    /**
     * Check if a specific node is contained in this asset container.
     * @param node the node to check
     * @returns true if the node is contained in this container, otherwise false.
     */
    _isNodeInContainer(node) {
        if (node instanceof _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_2__.AbstractMesh && this.meshes.indexOf(node) !== -1) {
            return true;
        }
        if (node instanceof _Meshes_transformNode__WEBPACK_IMPORTED_MODULE_1__.TransformNode && this.transformNodes.indexOf(node) !== -1) {
            return true;
        }
        if (node instanceof _Lights_light__WEBPACK_IMPORTED_MODULE_6__.Light && this.lights.indexOf(node) !== -1) {
            return true;
        }
        if (node instanceof _Cameras_camera__WEBPACK_IMPORTED_MODULE_7__.Camera && this.cameras.indexOf(node) !== -1) {
            return true;
        }
        return false;
    }
    /**
     * For every node in the scene, check if its parent node is also in the scene.
     * @returns true if every node's parent is also in the scene, otherwise false.
     */
    _isValidHierarchy() {
        for (const node of this.meshes) {
            if (node.parent && !this._isNodeInContainer(node.parent)) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn(`Node ${node.name} has a parent that is not in the container.`);
                return false;
            }
        }
        for (const node of this.transformNodes) {
            if (node.parent && !this._isNodeInContainer(node.parent)) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn(`Node ${node.name} has a parent that is not in the container.`);
                return false;
            }
        }
        for (const node of this.lights) {
            if (node.parent && !this._isNodeInContainer(node.parent)) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn(`Node ${node.name} has a parent that is not in the container.`);
                return false;
            }
        }
        for (const node of this.cameras) {
            if (node.parent && !this._isNodeInContainer(node.parent)) {
                _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn(`Node ${node.name} has a parent that is not in the container.`);
                return false;
            }
        }
        return true;
    }
    /**
     * Instantiate or clone all meshes and add the new ones to the scene.
     * Skeletons and animation groups will all be cloned
     * @param nameFunction defines an optional function used to get new names for clones
     * @param cloneMaterials defines an optional boolean that defines if materials must be cloned as well (false by default)
     * @param options defines an optional list of options to control how to instantiate / clone models
     * @param options.doNotInstantiate defines if the model must be instantiated or just cloned
     * @param options.predicate defines a predicate used to filter whih mesh to instantiate/clone
     * @returns a list of rootNodes, skeletons and animation groups that were duplicated
     */
    instantiateModelsToScene(nameFunction, cloneMaterials = false, options) {
        if (!this._isValidHierarchy()) {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_8__.Tools.Warn("SceneSerializer.InstantiateModelsToScene: The Asset Container hierarchy is not valid.");
        }
        const conversionMap = {};
        const storeMap = {};
        const result = new InstantiatedEntries();
        const alreadySwappedSkeletons = [];
        const alreadySwappedMaterials = [];
        const localOptions = {
            doNotInstantiate: true,
            ...options,
        };
        const onClone = (source, clone) => {
            conversionMap[source.uniqueId] = clone.uniqueId;
            storeMap[clone.uniqueId] = clone;
            if (nameFunction) {
                clone.name = nameFunction(source.name);
            }
            if (clone instanceof _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                const clonedMesh = clone;
                if (clonedMesh.morphTargetManager) {
                    const oldMorphTargetManager = source.morphTargetManager;
                    clonedMesh.morphTargetManager = oldMorphTargetManager.clone();
                    for (let index = 0; index < oldMorphTargetManager.numTargets; index++) {
                        const oldTarget = oldMorphTargetManager.getTarget(index);
                        const newTarget = clonedMesh.morphTargetManager.getTarget(index);
                        conversionMap[oldTarget.uniqueId] = newTarget.uniqueId;
                        storeMap[newTarget.uniqueId] = newTarget;
                    }
                }
            }
        };
        const nodesToSort = [];
        const idsOnSortList = new Set();
        for (const transformNode of this.transformNodes) {
            if (transformNode.parent === null) {
                this._addNodeAndDescendantsToList(nodesToSort, idsOnSortList, transformNode, localOptions.predicate);
            }
        }
        for (const mesh of this.meshes) {
            if (mesh.parent === null) {
                this._addNodeAndDescendantsToList(nodesToSort, idsOnSortList, mesh, localOptions.predicate);
            }
        }
        // Topologically sort nodes by parenting/instancing relationships so that all resources are in place
        // when a given node is instantiated.
        const sortedNodes = this._topologicalSort(nodesToSort);
        const onNewCreated = (source, clone) => {
            onClone(source, clone);
            if (source.parent) {
                const replicatedParentId = conversionMap[source.parent.uniqueId];
                const replicatedParent = storeMap[replicatedParentId];
                if (replicatedParent) {
                    clone.parent = replicatedParent;
                }
                else {
                    clone.parent = source.parent;
                }
            }
            if (clone.position && source.position) {
                clone.position.copyFrom(source.position);
            }
            if (clone.rotationQuaternion && source.rotationQuaternion) {
                clone.rotationQuaternion.copyFrom(source.rotationQuaternion);
            }
            if (clone.rotation && source.rotation) {
                clone.rotation.copyFrom(source.rotation);
            }
            if (clone.scaling && source.scaling) {
                clone.scaling.copyFrom(source.scaling);
            }
            if (clone.material) {
                const mesh = clone;
                if (mesh.material) {
                    if (cloneMaterials) {
                        const sourceMaterial = source.material;
                        if (alreadySwappedMaterials.indexOf(sourceMaterial) === -1) {
                            let swap = sourceMaterial.clone(nameFunction ? nameFunction(sourceMaterial.name) : "Clone of " + sourceMaterial.name);
                            alreadySwappedMaterials.push(sourceMaterial);
                            conversionMap[sourceMaterial.uniqueId] = swap.uniqueId;
                            storeMap[swap.uniqueId] = swap;
                            if (sourceMaterial.getClassName() === "MultiMaterial") {
                                const multi = sourceMaterial;
                                for (const material of multi.subMaterials) {
                                    if (!material) {
                                        continue;
                                    }
                                    swap = material.clone(nameFunction ? nameFunction(material.name) : "Clone of " + material.name);
                                    alreadySwappedMaterials.push(material);
                                    conversionMap[material.uniqueId] = swap.uniqueId;
                                    storeMap[swap.uniqueId] = swap;
                                }
                                multi.subMaterials = multi.subMaterials.map((m) => m && storeMap[conversionMap[m.uniqueId]]);
                            }
                        }
                        if (mesh.getClassName() !== "InstancedMesh") {
                            mesh.material = storeMap[conversionMap[sourceMaterial.uniqueId]];
                        }
                    }
                    else {
                        if (mesh.material.getClassName() === "MultiMaterial") {
                            if (this.scene.multiMaterials.indexOf(mesh.material) === -1) {
                                this.scene.addMultiMaterial(mesh.material);
                            }
                        }
                        else {
                            if (this.scene.materials.indexOf(mesh.material) === -1) {
                                this.scene.addMaterial(mesh.material);
                            }
                        }
                    }
                }
            }
            if (clone.parent === null) {
                result.rootNodes.push(clone);
            }
        };
        for (const node of sortedNodes) {
            if (node.getClassName() === "InstancedMesh") {
                const instancedNode = node;
                const sourceMesh = instancedNode.sourceMesh;
                const replicatedSourceId = conversionMap[sourceMesh.uniqueId];
                const replicatedSource = typeof replicatedSourceId === "number" ? storeMap[replicatedSourceId] : sourceMesh;
                const replicatedInstancedNode = replicatedSource.createInstance(instancedNode.name);
                onNewCreated(instancedNode, replicatedInstancedNode);
            }
            else {
                // Mesh or TransformNode
                let canInstance = true;
                if (node.getClassName() === "TransformNode" ||
                    node.getClassName() === "Node" ||
                    node.skeleton ||
                    !node.getTotalVertices ||
                    node.getTotalVertices() === 0) {
                    // Transform nodes, skinned meshes, and meshes with no vertices can never be instanced!
                    canInstance = false;
                }
                else if (localOptions.doNotInstantiate) {
                    if (typeof localOptions.doNotInstantiate === "function") {
                        canInstance = !localOptions.doNotInstantiate(node);
                    }
                    else {
                        canInstance = !localOptions.doNotInstantiate;
                    }
                }
                const replicatedNode = canInstance ? node.createInstance(`instance of ${node.name}`) : node.clone(`Clone of ${node.name}`, null, true);
                if (!replicatedNode) {
                    throw new Error(`Could not clone or instantiate node on Asset Container ${node.name}`);
                }
                onNewCreated(node, replicatedNode);
            }
        }
        for (const s of this.skeletons) {
            if (localOptions.predicate && !localOptions.predicate(s)) {
                continue;
            }
            const clone = s.clone(nameFunction ? nameFunction(s.name) : "Clone of " + s.name);
            for (const m of this.meshes) {
                if (m.skeleton === s && !m.isAnInstance) {
                    const copy = storeMap[conversionMap[m.uniqueId]];
                    if (!copy || copy.isAnInstance) {
                        continue;
                    }
                    copy.skeleton = clone;
                    if (alreadySwappedSkeletons.indexOf(clone) !== -1) {
                        continue;
                    }
                    alreadySwappedSkeletons.push(clone);
                    // Check if bones are mesh linked
                    for (const bone of clone.bones) {
                        if (bone._linkedTransformNode) {
                            bone._linkedTransformNode = storeMap[conversionMap[bone._linkedTransformNode.uniqueId]];
                        }
                    }
                }
            }
            result.skeletons.push(clone);
        }
        for (const o of this.animationGroups) {
            if (localOptions.predicate && !localOptions.predicate(o)) {
                continue;
            }
            const clone = o.clone(nameFunction ? nameFunction(o.name) : "Clone of " + o.name, (oldTarget) => {
                const newTarget = storeMap[conversionMap[oldTarget.uniqueId]];
                return newTarget || oldTarget;
            });
            result.animationGroups.push(clone);
        }
        return result;
    }
    /**
     * Adds all the assets from the container to the scene.
     */
    addAllToScene() {
        if (this._wasAddedToScene) {
            return;
        }
        if (!this._isValidHierarchy()) {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_8__.Tools.Warn("SceneSerializer.addAllToScene: The Asset Container hierarchy is not valid.");
        }
        this._wasAddedToScene = true;
        this.addToScene(null);
        if (this.environmentTexture) {
            this.scene.environmentTexture = this.environmentTexture;
        }
        for (const component of this.scene._serializableComponents) {
            component.addFromContainer(this);
        }
        this.scene.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver);
        this._onContextRestoredObserver = null;
    }
    /**
     * Adds assets from the container to the scene.
     * @param predicate defines a predicate used to select which entity will be added (can be null)
     */
    addToScene(predicate = null) {
        const addedNodes = [];
        for (const o of this.cameras) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addCamera(o);
            addedNodes.push(o);
        }
        for (const o of this.lights) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addLight(o);
            addedNodes.push(o);
        }
        for (const o of this.meshes) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addMesh(o);
            addedNodes.push(o);
        }
        for (const o of this.skeletons) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addSkeleton(o);
        }
        for (const o of this.animations) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addAnimation(o);
        }
        for (const o of this.animationGroups) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addAnimationGroup(o);
        }
        for (const o of this.multiMaterials) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addMultiMaterial(o);
        }
        for (const o of this.materials) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addMaterial(o);
        }
        for (const o of this.morphTargetManagers) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addMorphTargetManager(o);
        }
        for (const o of this.geometries) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addGeometry(o);
        }
        for (const o of this.transformNodes) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addTransformNode(o);
            addedNodes.push(o);
        }
        for (const o of this.actionManagers) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addActionManager(o);
        }
        for (const o of this.textures) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addTexture(o);
        }
        for (const o of this.reflectionProbes) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.addReflectionProbe(o);
        }
        // No more nodes added to scene after this line, so it's safe to make a "snapshot" of nodes
        if (addedNodes.length) {
            // build the nodeSet only if needed
            const nodeSet = new Set(this.scene.meshes);
            // benchmark shows Set constructor and Set.add have similar performance,
            // but using Set.add here avoids another allocate in scene.getNodes().
            for (const light of this.scene.lights) {
                nodeSet.add(light);
            }
            for (const camera of this.scene.cameras) {
                nodeSet.add(camera);
            }
            for (const transformNode of this.scene.transformNodes) {
                nodeSet.add(transformNode);
            }
            for (const skeleton of this.skeletons) {
                for (const bone of skeleton.bones) {
                    nodeSet.add(bone);
                }
            }
            for (const addedNode of addedNodes) {
                // If node was added to the scene, but parent is not in the scene, break the relationship
                if (addedNode.parent && !nodeSet.has(addedNode.parent)) {
                    // Use setParent to keep transform if possible
                    if (addedNode.setParent) {
                        addedNode.setParent(null);
                    }
                    else {
                        addedNode.parent = null;
                    }
                }
            }
        }
    }
    /**
     * Removes all the assets in the container from the scene
     */
    removeAllFromScene() {
        if (!this._isValidHierarchy()) {
            _Misc_tools__WEBPACK_IMPORTED_MODULE_8__.Tools.Warn("SceneSerializer.removeAllFromScene: The Asset Container hierarchy is not valid.");
        }
        this._wasAddedToScene = false;
        this.removeFromScene(null);
        if (this.environmentTexture === this.scene.environmentTexture) {
            this.scene.environmentTexture = null;
        }
        for (const component of this.scene._serializableComponents) {
            component.removeFromContainer(this);
        }
    }
    /**
     * Removes assets in the container from the scene
     * @param predicate defines a predicate used to select which entity will be added (can be null)
     */
    removeFromScene(predicate = null) {
        for (const o of this.cameras) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeCamera(o);
        }
        for (const o of this.lights) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeLight(o);
        }
        for (const o of this.meshes) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeMesh(o, true);
        }
        for (const o of this.skeletons) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeSkeleton(o);
        }
        for (const o of this.animations) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeAnimation(o);
        }
        for (const o of this.animationGroups) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeAnimationGroup(o);
        }
        for (const o of this.multiMaterials) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeMultiMaterial(o);
        }
        for (const o of this.materials) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeMaterial(o);
        }
        for (const o of this.morphTargetManagers) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeMorphTargetManager(o);
        }
        for (const o of this.geometries) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeGeometry(o);
        }
        for (const o of this.transformNodes) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeTransformNode(o);
        }
        for (const o of this.actionManagers) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeActionManager(o);
        }
        for (const o of this.textures) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeTexture(o);
        }
        for (const o of this.reflectionProbes) {
            if (predicate && !predicate(o)) {
                continue;
            }
            this.scene.removeReflectionProbe(o);
        }
    }
    /**
     * Disposes all the assets in the container
     */
    dispose() {
        const cameras = this.cameras.slice(0);
        for (const camera of cameras) {
            camera.dispose();
        }
        this.cameras.length = 0;
        const lights = this.lights.slice(0);
        for (const light of lights) {
            light.dispose();
        }
        this.lights.length = 0;
        const meshes = this.meshes.slice(0);
        for (const mesh of meshes) {
            mesh.dispose();
        }
        this.meshes.length = 0;
        const skeletons = this.skeletons.slice(0);
        for (const skeleton of skeletons) {
            skeleton.dispose();
        }
        this.skeletons.length = 0;
        const animationGroups = this.animationGroups.slice(0);
        for (const animationGroup of animationGroups) {
            animationGroup.dispose();
        }
        this.animationGroups.length = 0;
        const multiMaterials = this.multiMaterials.slice(0);
        for (const multiMaterial of multiMaterials) {
            multiMaterial.dispose();
        }
        this.multiMaterials.length = 0;
        const materials = this.materials.slice(0);
        for (const material of materials) {
            material.dispose();
        }
        this.materials.length = 0;
        const geometries = this.geometries.slice(0);
        for (const geometry of geometries) {
            geometry.dispose();
        }
        this.geometries.length = 0;
        const transformNodes = this.transformNodes.slice(0);
        for (const transformNode of transformNodes) {
            transformNode.dispose();
        }
        this.transformNodes.length = 0;
        const actionManagers = this.actionManagers.slice(0);
        for (const actionManager of actionManagers) {
            actionManager.dispose();
        }
        this.actionManagers.length = 0;
        const textures = this.textures.slice(0);
        for (const texture of textures) {
            texture.dispose();
        }
        this.textures.length = 0;
        const reflectionProbes = this.reflectionProbes.slice(0);
        for (const reflectionProbe of reflectionProbes) {
            reflectionProbe.dispose();
        }
        this.reflectionProbes.length = 0;
        const morphTargetManagers = this.morphTargetManagers.slice(0);
        for (const morphTargetManager of morphTargetManagers) {
            morphTargetManager.dispose();
        }
        this.morphTargetManagers.length = 0;
        if (this.environmentTexture) {
            this.environmentTexture.dispose();
            this.environmentTexture = null;
        }
        for (const component of this.scene._serializableComponents) {
            component.removeFromContainer(this, true);
        }
        if (this._onContextRestoredObserver) {
            this.scene.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver);
            this._onContextRestoredObserver = null;
        }
    }
    _moveAssets(sourceAssets, targetAssets, keepAssets) {
        if (!sourceAssets || !targetAssets) {
            return;
        }
        for (const asset of sourceAssets) {
            let move = true;
            if (keepAssets) {
                for (const keepAsset of keepAssets) {
                    if (asset === keepAsset) {
                        move = false;
                        break;
                    }
                }
            }
            if (move) {
                targetAssets.push(asset);
                asset._parentContainer = this;
            }
        }
    }
    /**
     * Removes all the assets contained in the scene and adds them to the container.
     * @param keepAssets Set of assets to keep in the scene. (default: empty)
     */
    moveAllFromScene(keepAssets) {
        this._wasAddedToScene = false;
        if (keepAssets === undefined) {
            keepAssets = new KeepAssets();
        }
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                this[key] = this[key] || (key === "_environmentTexture" ? null : []);
                this._moveAssets(this.scene[key], this[key], keepAssets[key]);
            }
        }
        this.environmentTexture = this.scene.environmentTexture;
        this.removeAllFromScene();
    }
    /**
     * Adds all meshes in the asset container to a root mesh that can be used to position all the contained meshes. The root mesh is then added to the front of the meshes in the assetContainer.
     * @returns the root mesh
     */
    createRootMesh() {
        const rootMesh = new _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh("assetContainerRootMesh", this.scene);
        for (const m of this.meshes) {
            if (!m.parent) {
                rootMesh.addChild(m);
            }
        }
        this.meshes.unshift(rootMesh);
        return rootMesh;
    }
    /**
     * Merge animations (direct and animation groups) from this asset container into a scene
     * @param scene is the instance of BABYLON.Scene to append to (default: last created scene)
     * @param animatables set of animatables to retarget to a node from the scene
     * @param targetConverter defines a function used to convert animation targets from the asset container to the scene (default: search node by name)
     * @returns an array of the new AnimationGroup added to the scene (empty array if none)
     */
    mergeAnimationsTo(scene = _Engines_engineStore__WEBPACK_IMPORTED_MODULE_4__.EngineStore.LastCreatedScene, animatables, targetConverter = null) {
        if (!scene) {
            _Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error("No scene available to merge animations to");
            return [];
        }
        const _targetConverter = targetConverter
            ? targetConverter
            : (target) => {
                let node = null;
                const targetProperty = target.animations.length ? target.animations[0].targetProperty : "";
                /*
            BabylonJS adds special naming to targets that are children of nodes.
            This name attempts to remove that special naming to get the parent nodes name in case the target
            can't be found in the node tree

            Ex: Torso_primitive0 likely points to a Mesh primitive. We take away primitive0 and are left with "Torso" which is the name
            of the primitive's parent.
        */
                const name = target.name.split(".").join("").split("_primitive")[0];
                switch (targetProperty) {
                    case "position":
                    case "rotationQuaternion":
                        node = scene.getTransformNodeByName(target.name) || scene.getTransformNodeByName(name);
                        break;
                    case "influence":
                        node = scene.getMorphTargetByName(target.name) || scene.getMorphTargetByName(name);
                        break;
                    default:
                        node = scene.getNodeByName(target.name) || scene.getNodeByName(name);
                }
                return node;
            };
        // Copy new node animations
        const nodesInAC = this.getNodes();
        for (const nodeInAC of nodesInAC) {
            const nodeInScene = _targetConverter(nodeInAC);
            if (nodeInScene !== null) {
                // Remove old animations with same target property as a new one
                for (const animationInAC of nodeInAC.animations) {
                    // Doing treatment on an array for safety measure
                    const animationsWithSameProperty = nodeInScene.animations.filter((animationInScene) => {
                        return animationInScene.targetProperty === animationInAC.targetProperty;
                    });
                    for (const animationWithSameProperty of animationsWithSameProperty) {
                        const index = nodeInScene.animations.indexOf(animationWithSameProperty, 0);
                        if (index > -1) {
                            nodeInScene.animations.splice(index, 1);
                        }
                    }
                }
                // Append new animations
                nodeInScene.animations = nodeInScene.animations.concat(nodeInAC.animations);
            }
        }
        const newAnimationGroups = [];
        // Copy new animation groups
        const animationGroups = this.animationGroups.slice();
        for (const animationGroupInAC of animationGroups) {
            // Clone the animation group and all its animatables
            newAnimationGroups.push(animationGroupInAC.clone(animationGroupInAC.name, _targetConverter));
            // Remove animatables related to the asset container
            for (const animatable of animationGroupInAC.animatables) {
                animatable.stop();
            }
        }
        // Retarget animatables
        for (const animatable of animatables) {
            const target = _targetConverter(animatable.target);
            if (target) {
                // Clone the animatable and retarget it
                scene.beginAnimation(target, animatable.fromFrame, animatable.toFrame, animatable.loopAnimation, animatable.speedRatio, animatable.onAnimationEnd ? animatable.onAnimationEnd : undefined, undefined, true, undefined, animatable.onAnimationLoop ? animatable.onAnimationLoop : undefined);
                // Stop animation for the target in the asset container
                scene.stopAnimation(animatable.target);
            }
        }
        return newAnimationGroups;
    }
    /**
     * @since 6.15.0
     * This method checks for any node that has no parent
     * and is not in the rootNodes array, and adds the node
     * there, if so.
     */
    populateRootNodes() {
        this.rootNodes.length = 0;
        for (const m of this.meshes) {
            if (!m.parent && this.rootNodes.indexOf(m) === -1) {
                this.rootNodes.push(m);
            }
        }
        for (const t of this.transformNodes) {
            if (!t.parent && this.rootNodes.indexOf(t) === -1) {
                this.rootNodes.push(t);
            }
        }
        for (const l of this.lights) {
            if (!l.parent && this.rootNodes.indexOf(l) === -1) {
                this.rootNodes.push(l);
            }
        }
        for (const c of this.cameras) {
            if (!c.parent && this.rootNodes.indexOf(c) === -1) {
                this.rootNodes.push(c);
            }
        }
    }
    /**
     * @since 6.26.0
     * Given a root asset, this method will traverse its hierarchy and add it, its children and any materials/skeletons to the container.
     * @param root root node
     */
    addAllAssetsToContainer(root) {
        if (!root) {
            return;
        }
        const nodesToVisit = [];
        const visitedNodes = new Set();
        nodesToVisit.push(root);
        while (nodesToVisit.length > 0) {
            const nodeToVisit = nodesToVisit.pop();
            if (nodeToVisit instanceof _Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh) {
                if (nodeToVisit.geometry && this.geometries.indexOf(nodeToVisit.geometry) === -1) {
                    this.geometries.push(nodeToVisit.geometry);
                }
                this.meshes.push(nodeToVisit);
            }
            else if (nodeToVisit instanceof _Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_5__.InstancedMesh) {
                this.meshes.push(nodeToVisit);
            }
            else if (nodeToVisit instanceof _Meshes_transformNode__WEBPACK_IMPORTED_MODULE_1__.TransformNode) {
                this.transformNodes.push(nodeToVisit);
            }
            else if (nodeToVisit instanceof _Lights_light__WEBPACK_IMPORTED_MODULE_6__.Light) {
                this.lights.push(nodeToVisit);
            }
            else if (nodeToVisit instanceof _Cameras_camera__WEBPACK_IMPORTED_MODULE_7__.Camera) {
                this.cameras.push(nodeToVisit);
            }
            if (nodeToVisit instanceof _Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_2__.AbstractMesh) {
                if (nodeToVisit.material && this.materials.indexOf(nodeToVisit.material) === -1) {
                    this.materials.push(nodeToVisit.material);
                    for (const texture of nodeToVisit.material.getActiveTextures()) {
                        if (this.textures.indexOf(texture) === -1) {
                            this.textures.push(texture);
                        }
                    }
                }
                if (nodeToVisit.skeleton && this.skeletons.indexOf(nodeToVisit.skeleton) === -1) {
                    this.skeletons.push(nodeToVisit.skeleton);
                }
                if (nodeToVisit.morphTargetManager && this.morphTargetManagers.indexOf(nodeToVisit.morphTargetManager) === -1) {
                    this.morphTargetManagers.push(nodeToVisit.morphTargetManager);
                }
            }
            for (const child of nodeToVisit.getChildren()) {
                if (!visitedNodes.has(child)) {
                    nodesToVisit.push(child);
                }
            }
            visitedNodes.add(nodeToVisit);
        }
        this.populateRootNodes();
    }
    /**
     * Get from a list of objects by tags
     * @param list the list of objects to use
     * @param tagsQuery the query to use
     * @param filter a predicate to filter for tags
     * @returns
     */
    _getByTags(list, tagsQuery, filter) {
        if (tagsQuery === undefined) {
            // returns the complete list (could be done with Tags.MatchesQuery but no need to have a for-loop here)
            return list;
        }
        const listByTags = [];
        for (const i in list) {
            const item = list[i];
            if (_Misc_tags__WEBPACK_IMPORTED_MODULE_9__.Tags && _Misc_tags__WEBPACK_IMPORTED_MODULE_9__.Tags.MatchesQuery(item, tagsQuery) && (!filter || filter(item))) {
                listByTags.push(item);
            }
        }
        return listByTags;
    }
    /**
     * Get a list of meshes by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Mesh
     */
    getMeshesByTags(tagsQuery, filter) {
        return this._getByTags(this.meshes, tagsQuery, filter);
    }
    /**
     * Get a list of cameras by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Camera
     */
    getCamerasByTags(tagsQuery, filter) {
        return this._getByTags(this.cameras, tagsQuery, filter);
    }
    /**
     * Get a list of lights by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Light
     */
    getLightsByTags(tagsQuery, filter) {
        return this._getByTags(this.lights, tagsQuery, filter);
    }
    /**
     * Get a list of materials by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Material
     */
    getMaterialsByTags(tagsQuery, filter) {
        return this._getByTags(this.materials, tagsQuery, filter).concat(this._getByTags(this.multiMaterials, tagsQuery, filter));
    }
    /**
     * Get a list of transform nodes by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of TransformNode
     */
    getTransformNodesByTags(tagsQuery, filter) {
        return this._getByTags(this.transformNodes, tagsQuery, filter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X2Fzc2V0Q29udGFpbmVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBMEJBO0FBOURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFxQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUF3QkE7QUF0QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBU0E7OztBQUdBO0FBQ0E7QUFDQTtBQWJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL2Fzc2V0Q29udGFpbmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIi4vTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCIuL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2tlbGV0b24gfSBmcm9tIFwiLi9Cb25lcy9za2VsZXRvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcIi4vQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xyXG5pbXBvcnQgeyB0eXBlIEFuaW1hdGFibGUgfSBmcm9tIFwiLi9BbmltYXRpb25zL2FuaW1hdGFibGUuY29yZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgTXVsdGlNYXRlcmlhbCB9IGZyb20gXCIuL01hdGVyaWFscy9tdWx0aU1hdGVyaWFsXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiLi9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiLi9FbmdpbmVzL2VuZ2luZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEVuZ2luZSB9IGZyb20gXCIuL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2VkTWVzaCB9IGZyb20gXCIuL01lc2hlcy9pbnN0YW5jZWRNZXNoXCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcIi4vTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4vTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElQYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCIuL1BhcnRpY2xlcy9JUGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiLi9JQXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0TWFuYWdlciB9IGZyb20gXCIuL01vcnBoL21vcnBoVGFyZ2V0TWFuYWdlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEdlb21ldHJ5IH0gZnJvbSBcIi4vTWVzaGVzL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBY3Rpb25NYW5hZ2VyIH0gZnJvbSBcIi4vQWN0aW9ucy9hYnN0cmFjdEFjdGlvbk1hbmFnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCIuL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFBvc3RQcm9jZXNzIH0gZnJvbSBcIi4vUG9zdFByb2Nlc3Nlcy9wb3N0UHJvY2Vzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNvdW5kIH0gZnJvbSBcIi4vQXVkaW8vc291bmRcIjtcclxuaW1wb3J0IHR5cGUgeyBMYXllciB9IGZyb20gXCIuL0xheWVycy9sYXllclwiO1xyXG5pbXBvcnQgdHlwZSB7IEVmZmVjdExheWVyIH0gZnJvbSBcIi4vTGF5ZXJzL2VmZmVjdExheWVyXCI7XHJcbmltcG9ydCB0eXBlIHsgUmVmbGVjdGlvblByb2JlIH0gZnJvbSBcIi4vUHJvYmVzL3JlZmxlY3Rpb25Qcm9iZVwiO1xyXG5pbXBvcnQgdHlwZSB7IExlbnNGbGFyZVN5c3RlbSB9IGZyb20gXCIuL0xlbnNGbGFyZXMvbGVuc0ZsYXJlU3lzdGVtXCI7XHJcbmltcG9ydCB0eXBlIHsgUHJvY2VkdXJhbFRleHR1cmUgfSBmcm9tIFwiLi9NYXRlcmlhbHMvVGV4dHVyZXMvUHJvY2VkdXJhbHMvcHJvY2VkdXJhbFRleHR1cmVcIjtcclxuaW1wb3J0IHsgVGFncyB9IGZyb20gXCIuL01pc2MvdGFnc1wiO1xyXG5cclxuLyoqXHJcbiAqIFJvb3QgY2xhc3MgZm9yIEFzc2V0Q29udGFpbmVyIGFuZCBLZWVwQXNzZXRzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RBc3NldENvbnRhaW5lciBpbXBsZW1lbnRzIElBc3NldENvbnRhaW5lciB7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2Ygcm9vdCBub2RlcyAoaWUuIG5vZGVzIHdpdGggbm8gcGFyZW50KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm9vdE5vZGVzOiBOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvKiogQWxsIG9mIHRoZSBjYW1lcmFzIGFkZGVkIHRvIHRoaXMgc2NlbmVcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL2NhbWVyYXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNhbWVyYXM6IENhbWVyYVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIGxpZ2h0cyBhZGRlZCB0byB0aGlzIHNjZW5lXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9saWdodHMvbGlnaHRzX2ludHJvZHVjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlnaHRzOiBMaWdodFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIChhYnN0cmFjdCkgbWVzaGVzIGFkZGVkIHRvIHRoaXMgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1lc2hlczogQWJzdHJhY3RNZXNoW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIHNrZWxldG9ucyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21lc2gvYm9uZXNTa2VsZXRvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNrZWxldG9uczogU2tlbGV0b25bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsIG9mIHRoZSBwYXJ0aWNsZSBzeXN0ZW1zIGFkZGVkIHRvIHRoaXMgc2NlbmVcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL3BhcnRpY2xlcy9wYXJ0aWNsZV9zeXN0ZW0vcGFydGljbGVfc3lzdGVtX2ludHJvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXJ0aWNsZVN5c3RlbXM6IElQYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgbGlzdCBvZiBBbmltYXRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFuaW1hdGlvbnM6IEFuaW1hdGlvbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIGFuaW1hdGlvbiBncm91cHMgYWRkZWQgdG8gdGhpcyBzY2VuZVxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvYW5pbWF0aW9uL2dyb3VwQW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uR3JvdXBzOiBBbmltYXRpb25Hcm91cFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIG11bHRpLW1hdGVyaWFscyBhZGRlZCB0byB0aGlzIHNjZW5lXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9tYXRlcmlhbHMvdXNpbmcvbXVsdGlNYXRlcmlhbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG11bHRpTWF0ZXJpYWxzOiBNdWx0aU1hdGVyaWFsW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBvZiB0aGUgbWF0ZXJpYWxzIGFkZGVkIHRvIHRoaXMgc2NlbmVcclxuICAgICAqIEluIHRoZSBjb250ZXh0IG9mIGEgU2NlbmUsIGl0IGlzIG5vdCBzdXBwb3NlZCB0byBiZSBtb2RpZmllZCBtYW51YWxseS5cclxuICAgICAqIEFueSBhZGRpdGlvbiBvciByZW1vdmFsIHNob3VsZCBiZSBkb25lIHVzaW5nIHRoZSBhZGRNYXRlcmlhbCBhbmQgcmVtb3ZlTWF0ZXJpYWwgU2NlbmUgbWV0aG9kcy5cclxuICAgICAqIE5vdGUgYWxzbyB0aGF0IHRoZSBvcmRlciBvZiB0aGUgTWF0ZXJpYWwgd2l0aGluIHRoZSBhcnJheSBpcyBub3Qgc2lnbmlmaWNhbnQgYW5kIG1pZ2h0IGNoYW5nZS5cclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21hdGVyaWFscy91c2luZy9tYXRlcmlhbHNfaW50cm9kdWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXRlcmlhbHM6IE1hdGVyaWFsW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIG1vcnBoIHRhcmdldCBtYW5hZ2VycyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21lc2gvZHluYW1pY01lc2hNb3JwaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW9ycGhUYXJnZXRNYW5hZ2VyczogTW9ycGhUYXJnZXRNYW5hZ2VyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIGdlb21ldHJpZXMgdXNlZCBpbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZW9tZXRyaWVzOiBHZW9tZXRyeVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgb2YgdGhlIHRyYW5zZm9ybSBub2RlcyBhZGRlZCB0byB0aGlzIHNjZW5lXHJcbiAgICAgKiBJbiB0aGUgY29udGV4dCBvZiBhIFNjZW5lLCBpdCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgbW9kaWZpZWQgbWFudWFsbHkuXHJcbiAgICAgKiBBbnkgYWRkaXRpb24gb3IgcmVtb3ZhbCBzaG91bGQgYmUgZG9uZSB1c2luZyB0aGUgYWRkVHJhbnNmb3JtTm9kZSBhbmQgcmVtb3ZlVHJhbnNmb3JtTm9kZSBTY2VuZSBtZXRob2RzLlxyXG4gICAgICogTm90ZSBhbHNvIHRoYXQgdGhlIG9yZGVyIG9mIHRoZSBUcmFuc2Zvcm1Ob2RlIHdpdGhpbiB0aGUgYXJyYXkgaXMgbm90IHNpZ25pZmljYW50IGFuZCBtaWdodCBjaGFuZ2UuXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vZmVhdHVyZXMvZmVhdHVyZXNEZWVwRGl2ZS9tZXNoL3RyYW5zZm9ybXMvcGFyZW50X3Bpdm90L3RyYW5zZm9ybV9ub2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm1Ob2RlczogVHJhbnNmb3JtTm9kZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3Rpb25NYW5hZ2VycyBhdmFpbGFibGUgb24gdGhlIHNjZW5lLlxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjdGlvbk1hbmFnZXJzOiBBYnN0cmFjdEFjdGlvbk1hbmFnZXJbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGV4dHVyZXMgdG8ga2VlcC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHRleHR1cmVzOiBCYXNlVGV4dHVyZVtdID0gW107XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHJvdGVjdGVkIF9lbnZpcm9ubWVudFRleHR1cmU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFRleHR1cmUgdXNlZCBpbiBhbGwgcGJyIG1hdGVyaWFsIGFzIHRoZSByZWZsZWN0aW9uIHRleHR1cmUuXHJcbiAgICAgKiBBcyBpbiB0aGUgbWFqb3JpdHkgb2YgdGhlIHNjZW5lIHRoZXkgYXJlIHRoZSBzYW1lIChleGNlcHRpb24gZm9yIG11bHRpIHJvb20gYW5kIHNvIG9uKSxcclxuICAgICAqIHRoaXMgaXMgZWFzaWVyIHRvIHJlZmVyZW5jZSBmcm9tIGhlcmUgdGhhbiBmcm9tIGFsbCB0aGUgbWF0ZXJpYWxzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVudmlyb25tZW50VGV4dHVyZSgpOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudFRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBlbnZpcm9ubWVudFRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIHRoaXMuX2Vudmlyb25tZW50VGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpc3Qgb2YgcG9zdHByb2Nlc3NlcyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3RQcm9jZXNzZXM6IFBvc3RQcm9jZXNzW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIHNvdW5kc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc291bmRzOiBOdWxsYWJsZTxTb3VuZFtdPiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlzdCBvZiBlZmZlY3QgbGF5ZXJzIGFkZGVkIHRvIHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZWZmZWN0TGF5ZXJzOiBFZmZlY3RMYXllcltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlzdCBvZiBsYXllcnMgYWRkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsYXllcnM6IExheWVyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIHJlZmxlY3Rpb24gcHJvYmVzIGFkZGVkIHRvIHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVmbGVjdGlvblByb2JlczogUmVmbGVjdGlvblByb2JlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIGxlbnMgZmxhcmUgc3lzdGVtcyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxlbnNGbGFyZVN5c3RlbXM6IExlbnNGbGFyZVN5c3RlbVtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpc3Qgb2YgcHJvY2VkdXJhbCB0ZXh0dXJlcyBhZGRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHByb2NlZHVyYWxUZXh0dXJlczogUHJvY2VkdXJhbFRleHR1cmVbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFsbCBtZXNoZXMsIGxpZ2h0cywgY2FtZXJhcywgdHJhbnNmb3JtTm9kZXMgYW5kIGJvbmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb2RlcygpOiBBcnJheTxOb2RlPiB7XHJcbiAgICAgICAgbGV0IG5vZGVzOiBOb2RlW10gPSBbXTtcclxuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh0aGlzLm1lc2hlcyk7XHJcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy5saWdodHMpO1xyXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRoaXMuY2FtZXJhcyk7XHJcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGhpcy50cmFuc2Zvcm1Ob2Rlcyk7IC8vIGR1bW1pZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHNrZWxldG9uIG9mIHRoaXMuc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHNrZWxldG9uLmJvbmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2V0IG9mIGFzc2V0cyB0byBrZWVwIHdoZW4gbW92aW5nIGEgc2NlbmUgaW50byBhbiBhc3NldCBjb250YWluZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2VlcEFzc2V0cyBleHRlbmRzIEFic3RyYWN0QXNzZXRDb250YWluZXIge31cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIHN0b3JlIHRoZSBvdXRwdXQgb2YgdGhlIEFzc2V0Q29udGFpbmVyLmluc3RhbnRpYXRlQWxsTWVzaGVzVG9TY2VuZSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluc3RhbnRpYXRlZEVudHJpZXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IG9mIG5ldyByb290IG5vZGVzIChlZy4gbm9kZXMgd2l0aCBubyBwYXJlbnQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByb290Tm9kZXM6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBvZiBuZXcgc2tlbGV0b25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBza2VsZXRvbnM6IFNrZWxldG9uW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExpc3Qgb2YgbmV3IGFuaW1hdGlvbiBncm91cHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFuaW1hdGlvbkdyb3VwczogQW5pbWF0aW9uR3JvdXBbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZXMgdGhlIGluc3RhbnRpYXRlZCBlbnRyaWVzIGZyb20gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGVzO1xyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdE5vZGUgb2Ygcm9vdE5vZGVzKSB7XHJcbiAgICAgICAgICAgIHJvb3ROb2RlLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9vdE5vZGVzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHNrZWxldG9ucyA9IHRoaXMuc2tlbGV0b25zO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2Ygc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIHNrZWxldG9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2tlbGV0b25zLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwcyA9IHRoaXMuYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uR3JvdXAgb2YgYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbWF0aW9uR3JvdXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgd2l0aCBhIHNldCBvZiBhc3NldHMgdGhhdCBjYW4gYmUgYWRkZWQgb3IgcmVtb3ZlZCBmcm9tIGEgc2NlbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXNzZXRDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdEFzc2V0Q29udGFpbmVyIHtcclxuICAgIHByaXZhdGUgX3dhc0FkZGVkVG9TY2VuZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfb25Db250ZXh0UmVzdG9yZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8QWJzdHJhY3RFbmdpbmU+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzY2VuZSB0aGUgQXNzZXRDb250YWluZXIgYmVsb25ncyB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNjZW5lOiBTY2VuZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbnRpYXRlcyBhbiBBc3NldENvbnRhaW5lci5cclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdGhlIEFzc2V0Q29udGFpbmVyIGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lPzogTnVsbGFibGU8U2NlbmU+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBzY2VuZSA9IHNjZW5lIHx8IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmU7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzW1wicHJvY2VkdXJhbFRleHR1cmVzXCJdID0gW107XHJcblxyXG4gICAgICAgIHNjZW5lLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93YXNBZGRlZFRvU2NlbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX29uQ29udGV4dFJlc3RvcmVkT2JzZXJ2ZXIgPSBzY2VuZS5nZXRFbmdpbmUoKS5vbkNvbnRleHRSZXN0b3JlZE9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBnZW9tZXRyeSBvZiB0aGlzLmdlb21ldHJpZXMpIHtcclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5Ll9yZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWVzaCBvZiB0aGlzLm1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgbWVzaC5fcmVidWlsZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN5c3RlbSBvZiB0aGlzLnBhcnRpY2xlU3lzdGVtcykge1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLnJlYnVpbGQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCB0ZXh0dXJlIG9mIHRoaXMudGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuX3JlYnVpbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBsaXN0IG9mIG5vZGVzLCByZXR1cm4gYSB0b3BvbG9naWNhbCBzb3J0aW5nIG9mIHRoZW0uXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIG5vZGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3RvcG9sb2dpY2FsU29ydChub2RlczogTm9kZVtdKTogTm9kZVtdIHtcclxuICAgICAgICBjb25zdCBub2Rlc1VpZE1hcCA9IG5ldyBNYXA8bnVtYmVyLCBOb2RlPigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgbm9kZXNVaWRNYXAuc2V0KG5vZGUudW5pcXVlSWQsIG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jeUdyYXBoID0ge1xyXG4gICAgICAgICAgICBkZXBlbmRzT246IG5ldyBNYXA8bnVtYmVyLCBTZXQ8bnVtYmVyPj4oKSwgLy8gZ2l2ZW4gYSBub2RlIGlkLCB3aGF0IGFyZSB0aGUgaWRzIG9mIHRoZSBub2RlcyBpdCBkZXBlbmRzIG9uXHJcbiAgICAgICAgICAgIGRlcGVuZGVkQnk6IG5ldyBNYXA8bnVtYmVyLCBTZXQ8bnVtYmVyPj4oKSwgLy8gZ2l2ZW4gYSBub2RlIGlkLCB3aGF0IGFyZSB0aGUgaWRzIG9mIHRoZSBub2RlcyB0aGF0IGRlcGVuZCBvbiBpdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIHRoZSBkZXBlbmRlbmN5IGdyYXBoIGdpdmVuIHRoZSBsaXN0IG9mIG5vZGVzXHJcblxyXG4gICAgICAgIC8vIEZpcnN0IHBhc3M6IEluaXRpYWxpemUgdGhlIGVtcHR5IGRlcGVuZGVuY3kgZ3JhcGhcclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZUlkID0gbm9kZS51bmlxdWVJZDtcclxuICAgICAgICAgICAgZGVwZW5kZW5jeUdyYXBoLmRlcGVuZHNPbi5zZXQobm9kZUlkLCBuZXcgU2V0PG51bWJlcj4oKSk7XHJcbiAgICAgICAgICAgIGRlcGVuZGVuY3lHcmFwaC5kZXBlbmRlZEJ5LnNldChub2RlSWQsIG5ldyBTZXQ8bnVtYmVyPigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNlY29uZCBwYXNzOiBQb3B1bGF0ZSB0aGUgZGVwZW5kZW5jeSBncmFwaC4gV2UgYXNzdW1lIHRoYXQgd2VcclxuICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGNoZWNrIGZvciBjeWNsZXMgaGVyZSwgYXMgdGhlIHNjZW5lIGdyYXBoIGNhbm5vdFxyXG4gICAgICAgIC8vIGNvbnRhaW4gY3ljbGVzLiBPdXIgZ3JhcGggYWxzbyBhbHJlYWR5IGNvbnRhaW5zIGFsbCB0cmFuc2l0aXZlXHJcbiAgICAgICAgLy8gZGVwZW5kZW5jaWVzIGJlY2F1c2UgZ2V0RGVzY2VuZGFudHMgcmV0dXJucyB0aGUgdHJhbnNpdGl2ZVxyXG4gICAgICAgIC8vIGRlcGVuZGVuY2llcyBieSBkZWZhdWx0LlxyXG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlSWQgPSBub2RlLnVuaXF1ZUlkO1xyXG4gICAgICAgICAgICBjb25zdCBkZXBlbmRzT24gPSBkZXBlbmRlbmN5R3JhcGguZGVwZW5kc09uLmdldChub2RlSWQpITtcclxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBJbnN0YW5jZWRNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXN0ZXJNZXNoID0gbm9kZS5zb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzVWlkTWFwLmhhcyhtYXN0ZXJNZXNoLnVuaXF1ZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZHNPbi5hZGQobWFzdGVyTWVzaC51bmlxdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeUdyYXBoLmRlcGVuZGVkQnkuZ2V0KG1hc3Rlck1lc2gudW5pcXVlSWQpIS5hZGQobm9kZUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZXBlbmRlZEJ5ID0gZGVwZW5kZW5jeUdyYXBoLmRlcGVuZGVkQnkuZ2V0KG5vZGVJZCkhO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmdldERlc2NlbmRhbnRzKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkSWQgPSBjaGlsZC51bmlxdWVJZDtcclxuICAgICAgICAgICAgICAgIGlmIChub2Rlc1VpZE1hcC5oYXMoY2hpbGRJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlZEJ5LmFkZChjaGlsZElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGREZXBlbmRzT24gPSBkZXBlbmRlbmN5R3JhcGguZGVwZW5kc09uLmdldChjaGlsZElkKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGREZXBlbmRzT24uYWRkKG5vZGVJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoaXJkIHBhc3M6IFRvcG9sb2dpY2FsIHNvcnRcclxuICAgICAgICBjb25zdCBzb3J0ZWROb2RlczogTm9kZVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIEZpcnN0OiBGaW5kIGFsbCBub2RlcyB0aGF0IGhhdmUgbm8gZGVwZW5kZW5jaWVzXHJcbiAgICAgICAgY29uc3QgbGVhdmVzOiBOb2RlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZUlkID0gbm9kZS51bmlxdWVJZDtcclxuICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3lHcmFwaC5kZXBlbmRzT24uZ2V0KG5vZGVJZCkhLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxlYXZlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZXNVaWRNYXAuZGVsZXRlKG5vZGVJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2l0TGlzdCA9IGxlYXZlcztcclxuICAgICAgICB3aGlsZSAodmlzaXRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZVRvVmlzaXQgPSB2aXNpdExpc3Quc2hpZnQoKSE7XHJcblxyXG4gICAgICAgICAgICBzb3J0ZWROb2Rlcy5wdXNoKG5vZGVUb1Zpc2l0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgbm9kZSBmcm9tIHRoZSBkZXBlbmRlbmN5IGdyYXBoXHJcbiAgICAgICAgICAgIC8vIFdoZW4gYSBub2RlIGlzIHZpc2l0ZWQsIHdlIGtub3cgdGhhdCBkZXBlbmRzT24gaXMgZW1wdHkuXHJcbiAgICAgICAgICAgIC8vIFNvIHdlIG9ubHkgbmVlZCB0byByZW1vdmUgdGhlIG5vZGUgZnJvbSBkZXBlbmRlZEJ5LlxyXG4gICAgICAgICAgICBjb25zdCBkZXBlbmRlZEJ5VmlzaXRlZE5vZGUgPSBkZXBlbmRlbmN5R3JhcGguZGVwZW5kZWRCeS5nZXQobm9kZVRvVmlzaXQudW5pcXVlSWQpITtcclxuICAgICAgICAgICAgLy8gQXJyYXkuZnJvbSh4LnZhbHVlcygpKSBpcyB0byBtYWtlIHRoZSBUUyBjb21waWxlciBoYXBweVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlcGVuZGVkQnlWaXNpdGVkTm9kZUlkIG9mIEFycmF5LmZyb20oZGVwZW5kZWRCeVZpc2l0ZWROb2RlLnZhbHVlcygpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kc09uRGVwZW5kZWRCeVZpc2l0ZWROb2RlID0gZGVwZW5kZW5jeUdyYXBoLmRlcGVuZHNPbi5nZXQoZGVwZW5kZWRCeVZpc2l0ZWROb2RlSWQpITtcclxuICAgICAgICAgICAgICAgIGRlcGVuZHNPbkRlcGVuZGVkQnlWaXNpdGVkTm9kZS5kZWxldGUobm9kZVRvVmlzaXQudW5pcXVlSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRzT25EZXBlbmRlZEJ5VmlzaXRlZE5vZGUuc2l6ZSA9PT0gMCAmJiBub2Rlc1VpZE1hcC5nZXQoZGVwZW5kZWRCeVZpc2l0ZWROb2RlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRMaXN0LnB1c2gobm9kZXNVaWRNYXAuZ2V0KGRlcGVuZGVkQnlWaXNpdGVkTm9kZUlkKSEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzVWlkTWFwLmRlbGV0ZShkZXBlbmRlZEJ5VmlzaXRlZE5vZGVJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2Rlc1VpZE1hcC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJTY2VuZVNlcmlhbGl6ZXIuX3RvcG9sb2dpY2FsU29ydDogVGhlcmUgd2VyZSB1bnZpc2l0ZWQgbm9kZXM6XCIpO1xyXG4gICAgICAgICAgICBub2Rlc1VpZE1hcC5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3Iobm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc29ydGVkTm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkTm9kZUFuZERlc2NlbmRhbnRzVG9MaXN0KGxpc3Q6IE5vZGVbXSwgYWRkZWRJZHM6IFNldDxudW1iZXI+LCByb290Tm9kZT86IE5vZGUsIHByZWRpY2F0ZT86IChlbnRpdHk6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghcm9vdE5vZGUgfHwgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKHJvb3ROb2RlKSkgfHwgYWRkZWRJZHMuaGFzKHJvb3ROb2RlLnVuaXF1ZUlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXN0LnB1c2gocm9vdE5vZGUpO1xyXG4gICAgICAgIGFkZGVkSWRzLmFkZChyb290Tm9kZS51bmlxdWVJZCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygcm9vdE5vZGUuZ2V0RGVzY2VuZGFudHModHJ1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkTm9kZUFuZERlc2NlbmRhbnRzVG9MaXN0KGxpc3QsIGFkZGVkSWRzLCBjaGlsZCwgcHJlZGljYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIHNwZWNpZmljIG5vZGUgaXMgY29udGFpbmVkIGluIHRoaXMgYXNzZXQgY29udGFpbmVyLlxyXG4gICAgICogQHBhcmFtIG5vZGUgdGhlIG5vZGUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIG5vZGUgaXMgY29udGFpbmVkIGluIHRoaXMgY29udGFpbmVyLCBvdGhlcndpc2UgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2lzTm9kZUluQ29udGFpbmVyKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCAmJiB0aGlzLm1lc2hlcy5pbmRleE9mKG5vZGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlICYmIHRoaXMudHJhbnNmb3JtTm9kZXMuaW5kZXhPZihub2RlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTGlnaHQgJiYgdGhpcy5saWdodHMuaW5kZXhPZihub2RlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgQ2FtZXJhICYmIHRoaXMuY2FtZXJhcy5pbmRleE9mKG5vZGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9yIGV2ZXJ5IG5vZGUgaW4gdGhlIHNjZW5lLCBjaGVjayBpZiBpdHMgcGFyZW50IG5vZGUgaXMgYWxzbyBpbiB0aGUgc2NlbmUuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIGV2ZXJ5IG5vZGUncyBwYXJlbnQgaXMgYWxzbyBpbiB0aGUgc2NlbmUsIG90aGVyd2lzZSBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNWYWxpZEhpZXJhcmNoeSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5tZXNoZXMpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50ICYmICF0aGlzLl9pc05vZGVJbkNvbnRhaW5lcihub2RlLnBhcmVudCkpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBOb2RlICR7bm9kZS5uYW1lfSBoYXMgYSBwYXJlbnQgdGhhdCBpcyBub3QgaW4gdGhlIGNvbnRhaW5lci5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy50cmFuc2Zvcm1Ob2Rlcykge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQgJiYgIXRoaXMuX2lzTm9kZUluQ29udGFpbmVyKG5vZGUucGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYE5vZGUgJHtub2RlLm5hbWV9IGhhcyBhIHBhcmVudCB0aGF0IGlzIG5vdCBpbiB0aGUgY29udGFpbmVyLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmxpZ2h0cykge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5wYXJlbnQgJiYgIXRoaXMuX2lzTm9kZUluQ29udGFpbmVyKG5vZGUucGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYE5vZGUgJHtub2RlLm5hbWV9IGhhcyBhIHBhcmVudCB0aGF0IGlzIG5vdCBpbiB0aGUgY29udGFpbmVyLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNhbWVyYXMpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50ICYmICF0aGlzLl9pc05vZGVJbkNvbnRhaW5lcihub2RlLnBhcmVudCkpIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBOb2RlICR7bm9kZS5uYW1lfSBoYXMgYSBwYXJlbnQgdGhhdCBpcyBub3QgaW4gdGhlIGNvbnRhaW5lci5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbnRpYXRlIG9yIGNsb25lIGFsbCBtZXNoZXMgYW5kIGFkZCB0aGUgbmV3IG9uZXMgdG8gdGhlIHNjZW5lLlxyXG4gICAgICogU2tlbGV0b25zIGFuZCBhbmltYXRpb24gZ3JvdXBzIHdpbGwgYWxsIGJlIGNsb25lZFxyXG4gICAgICogQHBhcmFtIG5hbWVGdW5jdGlvbiBkZWZpbmVzIGFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gZ2V0IG5ldyBuYW1lcyBmb3IgY2xvbmVzXHJcbiAgICAgKiBAcGFyYW0gY2xvbmVNYXRlcmlhbHMgZGVmaW5lcyBhbiBvcHRpb25hbCBib29sZWFuIHRoYXQgZGVmaW5lcyBpZiBtYXRlcmlhbHMgbXVzdCBiZSBjbG9uZWQgYXMgd2VsbCAoZmFsc2UgYnkgZGVmYXVsdClcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIGRlZmluZXMgYW4gb3B0aW9uYWwgbGlzdCBvZiBvcHRpb25zIHRvIGNvbnRyb2wgaG93IHRvIGluc3RhbnRpYXRlIC8gY2xvbmUgbW9kZWxzXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucy5kb05vdEluc3RhbnRpYXRlIGRlZmluZXMgaWYgdGhlIG1vZGVsIG11c3QgYmUgaW5zdGFudGlhdGVkIG9yIGp1c3QgY2xvbmVkXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucy5wcmVkaWNhdGUgZGVmaW5lcyBhIHByZWRpY2F0ZSB1c2VkIHRvIGZpbHRlciB3aGloIG1lc2ggdG8gaW5zdGFudGlhdGUvY2xvbmVcclxuICAgICAqIEByZXR1cm5zIGEgbGlzdCBvZiByb290Tm9kZXMsIHNrZWxldG9ucyBhbmQgYW5pbWF0aW9uIGdyb3VwcyB0aGF0IHdlcmUgZHVwbGljYXRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5zdGFudGlhdGVNb2RlbHNUb1NjZW5lKFxyXG4gICAgICAgIG5hbWVGdW5jdGlvbj86IChzb3VyY2VOYW1lOiBzdHJpbmcpID0+IHN0cmluZyxcclxuICAgICAgICBjbG9uZU1hdGVyaWFscyA9IGZhbHNlLFxyXG4gICAgICAgIG9wdGlvbnM/OiB7IGRvTm90SW5zdGFudGlhdGU/OiBib29sZWFuIHwgKChub2RlOiBOb2RlKSA9PiBib29sZWFuKTsgcHJlZGljYXRlPzogKGVudGl0eTogYW55KSA9PiBib29sZWFuIH1cclxuICAgICk6IEluc3RhbnRpYXRlZEVudHJpZXMge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNWYWxpZEhpZXJhcmNoeSgpKSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oXCJTY2VuZVNlcmlhbGl6ZXIuSW5zdGFudGlhdGVNb2RlbHNUb1NjZW5lOiBUaGUgQXNzZXQgQ29udGFpbmVyIGhpZXJhcmNoeSBpcyBub3QgdmFsaWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb252ZXJzaW9uTWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge307XHJcbiAgICAgICAgY29uc3Qgc3RvcmVNYXA6IHsgW2tleTogbnVtYmVyXTogYW55IH0gPSB7fTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW5zdGFudGlhdGVkRW50cmllcygpO1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlTd2FwcGVkU2tlbGV0b25zOiBTa2VsZXRvbltdID0gW107XHJcbiAgICAgICAgY29uc3QgYWxyZWFkeVN3YXBwZWRNYXRlcmlhbHM6IE1hdGVyaWFsW10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9jYWxPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkb05vdEluc3RhbnRpYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9uQ2xvbmUgPSAoc291cmNlOiBOb2RlLCBjbG9uZTogTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBjb252ZXJzaW9uTWFwW3NvdXJjZS51bmlxdWVJZF0gPSBjbG9uZS51bmlxdWVJZDtcclxuICAgICAgICAgICAgc3RvcmVNYXBbY2xvbmUudW5pcXVlSWRdID0gY2xvbmU7XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZS5uYW1lID0gbmFtZUZ1bmN0aW9uKHNvdXJjZS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkTWVzaCA9IGNsb25lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbG9uZWRNZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZE1vcnBoVGFyZ2V0TWFuYWdlciA9IChzb3VyY2UgYXMgTWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyITtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZWRNZXNoLm1vcnBoVGFyZ2V0TWFuYWdlciA9IG9sZE1vcnBoVGFyZ2V0TWFuYWdlci5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb2xkTW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkVGFyZ2V0ID0gb2xkTW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldCA9IGNsb25lZE1lc2gubW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uTWFwW29sZFRhcmdldC51bmlxdWVJZF0gPSBuZXdUYXJnZXQudW5pcXVlSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlTWFwW25ld1RhcmdldC51bmlxdWVJZF0gPSBuZXdUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXNUb1NvcnQ6IE5vZGVbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGlkc09uU29ydExpc3QgPSBuZXcgU2V0PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCB0cmFuc2Zvcm1Ob2RlIG9mIHRoaXMudHJhbnNmb3JtTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybU5vZGUucGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGROb2RlQW5kRGVzY2VuZGFudHNUb0xpc3Qobm9kZXNUb1NvcnQsIGlkc09uU29ydExpc3QsIHRyYW5zZm9ybU5vZGUsIGxvY2FsT3B0aW9ucy5wcmVkaWNhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgdGhpcy5tZXNoZXMpIHtcclxuICAgICAgICAgICAgaWYgKG1lc2gucGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGROb2RlQW5kRGVzY2VuZGFudHNUb0xpc3Qobm9kZXNUb1NvcnQsIGlkc09uU29ydExpc3QsIG1lc2gsIGxvY2FsT3B0aW9ucy5wcmVkaWNhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUb3BvbG9naWNhbGx5IHNvcnQgbm9kZXMgYnkgcGFyZW50aW5nL2luc3RhbmNpbmcgcmVsYXRpb25zaGlwcyBzbyB0aGF0IGFsbCByZXNvdXJjZXMgYXJlIGluIHBsYWNlXHJcbiAgICAgICAgLy8gd2hlbiBhIGdpdmVuIG5vZGUgaXMgaW5zdGFudGlhdGVkLlxyXG4gICAgICAgIGNvbnN0IHNvcnRlZE5vZGVzID0gdGhpcy5fdG9wb2xvZ2ljYWxTb3J0KG5vZGVzVG9Tb3J0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb25OZXdDcmVhdGVkID0gKHNvdXJjZTogTm9kZSwgY2xvbmU6IE5vZGUpID0+IHtcclxuICAgICAgICAgICAgb25DbG9uZShzb3VyY2UsIGNsb25lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzb3VyY2UucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsaWNhdGVkUGFyZW50SWQgPSBjb252ZXJzaW9uTWFwW3NvdXJjZS5wYXJlbnQudW5pcXVlSWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGljYXRlZFBhcmVudCA9IHN0b3JlTWFwW3JlcGxpY2F0ZWRQYXJlbnRJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxpY2F0ZWRQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZS5wYXJlbnQgPSByZXBsaWNhdGVkUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZS5wYXJlbnQgPSBzb3VyY2UucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKGNsb25lIGFzIGFueSkucG9zaXRpb24gJiYgKHNvdXJjZSBhcyBhbnkpLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAoY2xvbmUgYXMgYW55KS5wb3NpdGlvbi5jb3B5RnJvbSgoc291cmNlIGFzIGFueSkucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoY2xvbmUgYXMgYW55KS5yb3RhdGlvblF1YXRlcm5pb24gJiYgKHNvdXJjZSBhcyBhbnkpLnJvdGF0aW9uUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgKGNsb25lIGFzIGFueSkucm90YXRpb25RdWF0ZXJuaW9uLmNvcHlGcm9tKChzb3VyY2UgYXMgYW55KS5yb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoY2xvbmUgYXMgYW55KS5yb3RhdGlvbiAmJiAoc291cmNlIGFzIGFueSkucm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnJvdGF0aW9uLmNvcHlGcm9tKChzb3VyY2UgYXMgYW55KS5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChjbG9uZSBhcyBhbnkpLnNjYWxpbmcgJiYgKHNvdXJjZSBhcyBhbnkpLnNjYWxpbmcpIHtcclxuICAgICAgICAgICAgICAgIChjbG9uZSBhcyBhbnkpLnNjYWxpbmcuY29weUZyb20oKHNvdXJjZSBhcyBhbnkpLnNjYWxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoKGNsb25lIGFzIGFueSkubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBjbG9uZSBhcyBBYnN0cmFjdE1lc2g7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc2gubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvbmVNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlTWF0ZXJpYWwgPSAoc291cmNlIGFzIEFic3RyYWN0TWVzaCkubWF0ZXJpYWwhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlTd2FwcGVkTWF0ZXJpYWxzLmluZGV4T2Yoc291cmNlTWF0ZXJpYWwpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN3YXAgPSBzb3VyY2VNYXRlcmlhbC5jbG9uZShuYW1lRnVuY3Rpb24gPyBuYW1lRnVuY3Rpb24oc291cmNlTWF0ZXJpYWwubmFtZSkgOiBcIkNsb25lIG9mIFwiICsgc291cmNlTWF0ZXJpYWwubmFtZSkhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVN3YXBwZWRNYXRlcmlhbHMucHVzaChzb3VyY2VNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uTWFwW3NvdXJjZU1hdGVyaWFsLnVuaXF1ZUlkXSA9IHN3YXAudW5pcXVlSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZU1hcFtzd2FwLnVuaXF1ZUlkXSA9IHN3YXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZU1hdGVyaWFsLmdldENsYXNzTmFtZSgpID09PSBcIk11bHRpTWF0ZXJpYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG11bHRpID0gc291cmNlTWF0ZXJpYWwgYXMgTXVsdGlNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBtYXRlcmlhbCBvZiBtdWx0aS5zdWJNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcCA9IG1hdGVyaWFsLmNsb25lKG5hbWVGdW5jdGlvbiA/IG5hbWVGdW5jdGlvbihtYXRlcmlhbC5uYW1lKSA6IFwiQ2xvbmUgb2YgXCIgKyBtYXRlcmlhbC5uYW1lKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscmVhZHlTd2FwcGVkTWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uTWFwW21hdGVyaWFsLnVuaXF1ZUlkXSA9IHN3YXAudW5pcXVlSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlTWFwW3N3YXAudW5pcXVlSWRdID0gc3dhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpLnN1Yk1hdGVyaWFscyA9IG11bHRpLnN1Yk1hdGVyaWFscy5tYXAoKG0pID0+IG0gJiYgc3RvcmVNYXBbY29udmVyc2lvbk1hcFttLnVuaXF1ZUlkXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzaC5nZXRDbGFzc05hbWUoKSAhPT0gXCJJbnN0YW5jZWRNZXNoXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwgPSBzdG9yZU1hcFtjb252ZXJzaW9uTWFwW3NvdXJjZU1hdGVyaWFsLnVuaXF1ZUlkXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzaC5tYXRlcmlhbC5nZXRDbGFzc05hbWUoKSA9PT0gXCJNdWx0aU1hdGVyaWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lLm11bHRpTWF0ZXJpYWxzLmluZGV4T2YobWVzaC5tYXRlcmlhbCBhcyBNdWx0aU1hdGVyaWFsKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZE11bHRpTWF0ZXJpYWwobWVzaC5tYXRlcmlhbCBhcyBNdWx0aU1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lLm1hdGVyaWFscy5pbmRleE9mKG1lc2gubWF0ZXJpYWwpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkTWF0ZXJpYWwobWVzaC5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbG9uZS5wYXJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5yb290Tm9kZXMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygc29ydGVkTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0Q2xhc3NOYW1lKCkgPT09IFwiSW5zdGFuY2VkTWVzaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZWROb2RlID0gbm9kZSBhcyBJbnN0YW5jZWRNZXNoO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlTWVzaCA9IGluc3RhbmNlZE5vZGUuc291cmNlTWVzaDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxpY2F0ZWRTb3VyY2VJZCA9IGNvbnZlcnNpb25NYXBbc291cmNlTWVzaC51bmlxdWVJZF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXBsaWNhdGVkU291cmNlID0gdHlwZW9mIHJlcGxpY2F0ZWRTb3VyY2VJZCA9PT0gXCJudW1iZXJcIiA/IHN0b3JlTWFwW3JlcGxpY2F0ZWRTb3VyY2VJZF0gOiBzb3VyY2VNZXNoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGljYXRlZEluc3RhbmNlZE5vZGUgPSByZXBsaWNhdGVkU291cmNlLmNyZWF0ZUluc3RhbmNlKGluc3RhbmNlZE5vZGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBvbk5ld0NyZWF0ZWQoaW5zdGFuY2VkTm9kZSwgcmVwbGljYXRlZEluc3RhbmNlZE5vZGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTWVzaCBvciBUcmFuc2Zvcm1Ob2RlXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FuSW5zdGFuY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2xhc3NOYW1lKCkgPT09IFwiVHJhbnNmb3JtTm9kZVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDbGFzc05hbWUoKSA9PT0gXCJOb2RlXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAobm9kZSBhcyBNZXNoKS5za2VsZXRvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICEobm9kZSBhcyBhbnkpLmdldFRvdGFsVmVydGljZXMgfHxcclxuICAgICAgICAgICAgICAgICAgICAobm9kZSBhcyBNZXNoKS5nZXRUb3RhbFZlcnRpY2VzKCkgPT09IDBcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBub2Rlcywgc2tpbm5lZCBtZXNoZXMsIGFuZCBtZXNoZXMgd2l0aCBubyB2ZXJ0aWNlcyBjYW4gbmV2ZXIgYmUgaW5zdGFuY2VkIVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbkluc3RhbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsT3B0aW9ucy5kb05vdEluc3RhbnRpYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2NhbE9wdGlvbnMuZG9Ob3RJbnN0YW50aWF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkluc3RhbmNlID0gIWxvY2FsT3B0aW9ucy5kb05vdEluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkluc3RhbmNlID0gIWxvY2FsT3B0aW9ucy5kb05vdEluc3RhbnRpYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxpY2F0ZWROb2RlID0gY2FuSW5zdGFuY2UgPyAobm9kZSBhcyBNZXNoKS5jcmVhdGVJbnN0YW5jZShgaW5zdGFuY2Ugb2YgJHtub2RlLm5hbWV9YCkgOiBub2RlLmNsb25lKGBDbG9uZSBvZiAke25vZGUubmFtZX1gLCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVwbGljYXRlZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBjbG9uZSBvciBpbnN0YW50aWF0ZSBub2RlIG9uIEFzc2V0IENvbnRhaW5lciAke25vZGUubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uTmV3Q3JlYXRlZChub2RlLCByZXBsaWNhdGVkTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcyBvZiB0aGlzLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxPcHRpb25zLnByZWRpY2F0ZSAmJiAhbG9jYWxPcHRpb25zLnByZWRpY2F0ZShzKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gcy5jbG9uZShuYW1lRnVuY3Rpb24gPyBuYW1lRnVuY3Rpb24ocy5uYW1lKSA6IFwiQ2xvbmUgb2YgXCIgKyBzLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBtIG9mIHRoaXMubWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobS5za2VsZXRvbiA9PT0gcyAmJiAhbS5pc0FuSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gc3RvcmVNYXBbY29udmVyc2lvbk1hcFttLnVuaXF1ZUlkXV0gYXMgTWVzaDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvcHkgfHwgY29weS5pc0FuSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcHkuc2tlbGV0b24gPSBjbG9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlTd2FwcGVkU2tlbGV0b25zLmluZGV4T2YoY2xvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlTd2FwcGVkU2tlbGV0b25zLnB1c2goY2xvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBib25lcyBhcmUgbWVzaCBsaW5rZWRcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJvbmUgb2YgY2xvbmUuYm9uZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvbmUuX2xpbmtlZFRyYW5zZm9ybU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbmUuX2xpbmtlZFRyYW5zZm9ybU5vZGUgPSBzdG9yZU1hcFtjb252ZXJzaW9uTWFwW2JvbmUuX2xpbmtlZFRyYW5zZm9ybU5vZGUudW5pcXVlSWRdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0LnNrZWxldG9ucy5wdXNoKGNsb25lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLmFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxPcHRpb25zLnByZWRpY2F0ZSAmJiAhbG9jYWxPcHRpb25zLnByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gby5jbG9uZShuYW1lRnVuY3Rpb24gPyBuYW1lRnVuY3Rpb24oby5uYW1lKSA6IFwiQ2xvbmUgb2YgXCIgKyBvLm5hbWUsIChvbGRUYXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RhcmdldCA9IHN0b3JlTWFwW2NvbnZlcnNpb25NYXBbb2xkVGFyZ2V0LnVuaXF1ZUlkXV07XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1RhcmdldCB8fCBvbGRUYXJnZXQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LmFuaW1hdGlvbkdyb3Vwcy5wdXNoKGNsb25lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFsbCB0aGUgYXNzZXRzIGZyb20gdGhlIGNvbnRhaW5lciB0byB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRBbGxUb1NjZW5lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl93YXNBZGRlZFRvU2NlbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2lzVmFsaWRIaWVyYXJjaHkoKSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiU2NlbmVTZXJpYWxpemVyLmFkZEFsbFRvU2NlbmU6IFRoZSBBc3NldCBDb250YWluZXIgaGllcmFyY2h5IGlzIG5vdCB2YWxpZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl93YXNBZGRlZFRvU2NlbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRvU2NlbmUobnVsbCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudmlyb25tZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmVudmlyb25tZW50VGV4dHVyZSA9IHRoaXMuZW52aXJvbm1lbnRUZXh0dXJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5zY2VuZS5fc2VyaWFsaXphYmxlQ29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuYWRkRnJvbUNvbnRhaW5lcih0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuZ2V0RW5naW5lKCkub25Db250ZXh0UmVzdG9yZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNvbnRleHRSZXN0b3JlZE9ic2VydmVyKTtcclxuICAgICAgICB0aGlzLl9vbkNvbnRleHRSZXN0b3JlZE9ic2VydmVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYXNzZXRzIGZyb20gdGhlIGNvbnRhaW5lciB0byB0aGUgc2NlbmUuXHJcbiAgICAgKiBAcGFyYW0gcHJlZGljYXRlIGRlZmluZXMgYSBwcmVkaWNhdGUgdXNlZCB0byBzZWxlY3Qgd2hpY2ggZW50aXR5IHdpbGwgYmUgYWRkZWQgKGNhbiBiZSBudWxsKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVG9TY2VuZShwcmVkaWNhdGU6IE51bGxhYmxlPChlbnRpdHk6IGFueSkgPT4gYm9vbGVhbj4gPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgYWRkZWROb2RlczogTm9kZVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMuY2FtZXJhcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkQ2FtZXJhKG8pO1xyXG4gICAgICAgICAgICBhZGRlZE5vZGVzLnB1c2gobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLmxpZ2h0cykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkTGlnaHQobyk7XHJcbiAgICAgICAgICAgIGFkZGVkTm9kZXMucHVzaChvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMubWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRNZXNoKG8pO1xyXG4gICAgICAgICAgICBhZGRlZE5vZGVzLnB1c2gobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkU2tlbGV0b24obyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG8pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEFuaW1hdGlvbihvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMuYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRBbmltYXRpb25Hcm91cChvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMubXVsdGlNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG8pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZE11bHRpTWF0ZXJpYWwobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkTWF0ZXJpYWwobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLm1vcnBoVGFyZ2V0TWFuYWdlcnMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG8pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZE1vcnBoVGFyZ2V0TWFuYWdlcihvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMuZ2VvbWV0cmllcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkR2VvbWV0cnkobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLnRyYW5zZm9ybU5vZGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRUcmFuc2Zvcm1Ob2RlKG8pO1xyXG4gICAgICAgICAgICBhZGRlZE5vZGVzLnB1c2gobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLmFjdGlvbk1hbmFnZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRBY3Rpb25NYW5hZ2VyKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgdGhpcy50ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkVGV4dHVyZShvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMucmVmbGVjdGlvblByb2Jlcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkUmVmbGVjdGlvblByb2JlKG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gbW9yZSBub2RlcyBhZGRlZCB0byBzY2VuZSBhZnRlciB0aGlzIGxpbmUsIHNvIGl0J3Mgc2FmZSB0byBtYWtlIGEgXCJzbmFwc2hvdFwiIG9mIG5vZGVzXHJcbiAgICAgICAgaWYgKGFkZGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIGJ1aWxkIHRoZSBub2RlU2V0IG9ubHkgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVTZXQgPSBuZXcgU2V0PE5vZGU+KHRoaXMuc2NlbmUubWVzaGVzKTtcclxuICAgICAgICAgICAgLy8gYmVuY2htYXJrIHNob3dzIFNldCBjb25zdHJ1Y3RvciBhbmQgU2V0LmFkZCBoYXZlIHNpbWlsYXIgcGVyZm9ybWFuY2UsXHJcbiAgICAgICAgICAgIC8vIGJ1dCB1c2luZyBTZXQuYWRkIGhlcmUgYXZvaWRzIGFub3RoZXIgYWxsb2NhdGUgaW4gc2NlbmUuZ2V0Tm9kZXMoKS5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiB0aGlzLnNjZW5lLmxpZ2h0cykge1xyXG4gICAgICAgICAgICAgICAgbm9kZVNldC5hZGQobGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FtZXJhIG9mIHRoaXMuc2NlbmUuY2FtZXJhcykge1xyXG4gICAgICAgICAgICAgICAgbm9kZVNldC5hZGQoY2FtZXJhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYW5zZm9ybU5vZGUgb2YgdGhpcy5zY2VuZS50cmFuc2Zvcm1Ob2Rlcykge1xyXG4gICAgICAgICAgICAgICAgbm9kZVNldC5hZGQodHJhbnNmb3JtTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBza2VsZXRvbiBvZiB0aGlzLnNrZWxldG9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBib25lIG9mIHNrZWxldG9uLmJvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVNldC5hZGQoYm9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRlZE5vZGUgb2YgYWRkZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm9kZSB3YXMgYWRkZWQgdG8gdGhlIHNjZW5lLCBidXQgcGFyZW50IGlzIG5vdCBpbiB0aGUgc2NlbmUsIGJyZWFrIHRoZSByZWxhdGlvbnNoaXBcclxuICAgICAgICAgICAgICAgIGlmIChhZGRlZE5vZGUucGFyZW50ICYmICFub2RlU2V0LmhhcyhhZGRlZE5vZGUucGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBzZXRQYXJlbnQgdG8ga2VlcCB0cmFuc2Zvcm0gaWYgcG9zc2libGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGFkZGVkTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5zZXRQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGFkZGVkTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5zZXRQYXJlbnQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWROb2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIGFzc2V0cyBpbiB0aGUgY29udGFpbmVyIGZyb20gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVBbGxGcm9tU2NlbmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZhbGlkSGllcmFyY2h5KCkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihcIlNjZW5lU2VyaWFsaXplci5yZW1vdmVBbGxGcm9tU2NlbmU6IFRoZSBBc3NldCBDb250YWluZXIgaGllcmFyY2h5IGlzIG5vdCB2YWxpZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl93YXNBZGRlZFRvU2NlbmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tU2NlbmUobnVsbCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudmlyb25tZW50VGV4dHVyZSA9PT0gdGhpcy5zY2VuZS5lbnZpcm9ubWVudFRleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5lbnZpcm9ubWVudFRleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5zY2VuZS5fc2VyaWFsaXphYmxlQ29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQucmVtb3ZlRnJvbUNvbnRhaW5lcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFzc2V0cyBpbiB0aGUgY29udGFpbmVyIGZyb20gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gcHJlZGljYXRlIGRlZmluZXMgYSBwcmVkaWNhdGUgdXNlZCB0byBzZWxlY3Qgd2hpY2ggZW50aXR5IHdpbGwgYmUgYWRkZWQgKGNhbiBiZSBudWxsKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlRnJvbVNjZW5lKHByZWRpY2F0ZTogTnVsbGFibGU8KGVudGl0eTogYW55KSA9PiBib29sZWFuPiA9IG51bGwpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgdGhpcy5jYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVDYW1lcmEobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLmxpZ2h0cykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlTGlnaHQobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLm1lc2hlcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlTWVzaChvLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMuc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVTa2VsZXRvbihvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlQW5pbWF0aW9uKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgdGhpcy5hbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG8pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZUFuaW1hdGlvbkdyb3VwKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgdGhpcy5tdWx0aU1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlTXVsdGlNYXRlcmlhbChvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVNYXRlcmlhbChvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMubW9ycGhUYXJnZXRNYW5hZ2Vycykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlTW9ycGhUYXJnZXRNYW5hZ2VyKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgdGhpcy5nZW9tZXRyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVHZW9tZXRyeShvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMudHJhbnNmb3JtTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKG8pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZVRyYW5zZm9ybU5vZGUobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgbyBvZiB0aGlzLmFjdGlvbk1hbmFnZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUgJiYgIXByZWRpY2F0ZShvKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmVBY3Rpb25NYW5hZ2VyKG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG8gb2YgdGhpcy50ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlVGV4dHVyZShvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIHRoaXMucmVmbGVjdGlvblByb2Jlcykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlUmVmbGVjdGlvblByb2JlKG8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIGFsbCB0aGUgYXNzZXRzIGluIHRoZSBjb250YWluZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhcyA9IHRoaXMuY2FtZXJhcy5zbGljZSgwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiBjYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBsaWdodHMgPSB0aGlzLmxpZ2h0cy5zbGljZSgwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIGxpZ2h0cykge1xyXG4gICAgICAgICAgICBsaWdodC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlnaHRzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc2hlcyA9IHRoaXMubWVzaGVzLnNsaWNlKDApO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWVzaCBvZiBtZXNoZXMpIHtcclxuICAgICAgICAgICAgbWVzaC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzaGVzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHNrZWxldG9ucyA9IHRoaXMuc2tlbGV0b25zLnNsaWNlKDApO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2tlbGV0b24gb2Ygc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIHNrZWxldG9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5za2VsZXRvbnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uR3JvdXBzID0gdGhpcy5hbmltYXRpb25Hcm91cHMuc2xpY2UoMCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb25Hcm91cCBvZiBhbmltYXRpb25Hcm91cHMpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXAuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkdyb3Vwcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBtdWx0aU1hdGVyaWFscyA9IHRoaXMubXVsdGlNYXRlcmlhbHMuc2xpY2UoMCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtdWx0aU1hdGVyaWFsIG9mIG11bHRpTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIG11bHRpTWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11bHRpTWF0ZXJpYWxzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFscyA9IHRoaXMubWF0ZXJpYWxzLnNsaWNlKDApO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgbWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cmllcyA9IHRoaXMuZ2VvbWV0cmllcy5zbGljZSgwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdlb21ldHJ5IG9mIGdlb21ldHJpZXMpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdlb21ldHJpZXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtTm9kZXMgPSB0aGlzLnRyYW5zZm9ybU5vZGVzLnNsaWNlKDApO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHJhbnNmb3JtTm9kZSBvZiB0cmFuc2Zvcm1Ob2Rlcykge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Ob2Rlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb25NYW5hZ2VycyA9IHRoaXMuYWN0aW9uTWFuYWdlcnMuc2xpY2UoMCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpb25NYW5hZ2VyIG9mIGFjdGlvbk1hbmFnZXJzKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbk1hbmFnZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXJzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy50ZXh0dXJlcy5zbGljZSgwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHRleHR1cmUgb2YgdGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgdGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dHVyZXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVmbGVjdGlvblByb2JlcyA9IHRoaXMucmVmbGVjdGlvblByb2Jlcy5zbGljZSgwKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlZmxlY3Rpb25Qcm9iZSBvZiByZWZsZWN0aW9uUHJvYmVzKSB7XHJcbiAgICAgICAgICAgIHJlZmxlY3Rpb25Qcm9iZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmbGVjdGlvblByb2Jlcy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXJzID0gdGhpcy5tb3JwaFRhcmdldE1hbmFnZXJzLnNsaWNlKDApO1xyXG4gICAgICAgIGZvciAoY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyIG9mIG1vcnBoVGFyZ2V0TWFuYWdlcnMpIHtcclxuICAgICAgICAgICAgbW9ycGhUYXJnZXRNYW5hZ2VyLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3JwaFRhcmdldE1hbmFnZXJzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVudmlyb25tZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50VGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnRUZXh0dXJlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuc2NlbmUuX3NlcmlhbGl6YWJsZUNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnJlbW92ZUZyb21Db250YWluZXIodGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fb25Db250ZXh0UmVzdG9yZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmdldEVuZ2luZSgpLm9uQ29udGV4dFJlc3RvcmVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25Db250ZXh0UmVzdG9yZWRPYnNlcnZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ29udGV4dFJlc3RvcmVkT2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlQXNzZXRzPFQ+KHNvdXJjZUFzc2V0czogVFtdLCB0YXJnZXRBc3NldHM6IFRbXSwga2VlcEFzc2V0czogVFtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFzb3VyY2VBc3NldHMgfHwgIXRhcmdldEFzc2V0cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGFzc2V0IG9mIHNvdXJjZUFzc2V0cykge1xyXG4gICAgICAgICAgICBsZXQgbW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChrZWVwQXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtlZXBBc3NldCBvZiBrZWVwQXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0ID09PSBrZWVwQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRBc3NldHMucHVzaChhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAoYXNzZXQgYXMgYW55KS5fcGFyZW50Q29udGFpbmVyID0gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSBhc3NldHMgY29udGFpbmVkIGluIHRoZSBzY2VuZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBjb250YWluZXIuXHJcbiAgICAgKiBAcGFyYW0ga2VlcEFzc2V0cyBTZXQgb2YgYXNzZXRzIHRvIGtlZXAgaW4gdGhlIHNjZW5lLiAoZGVmYXVsdDogZW1wdHkpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtb3ZlQWxsRnJvbVNjZW5lKGtlZXBBc3NldHM/OiBLZWVwQXNzZXRzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fd2FzQWRkZWRUb1NjZW5lID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChrZWVwQXNzZXRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAga2VlcEFzc2V0cyA9IG5ldyBLZWVwQXNzZXRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcywga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylba2V5XSA9ICg8YW55PnRoaXMpW2tleV0gfHwgKGtleSA9PT0gXCJfZW52aXJvbm1lbnRUZXh0dXJlXCIgPyBudWxsIDogW10pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUFzc2V0cygoPGFueT50aGlzLnNjZW5lKVtrZXldLCAoPGFueT50aGlzKVtrZXldLCAoPGFueT5rZWVwQXNzZXRzKVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudFRleHR1cmUgPSB0aGlzLnNjZW5lLmVudmlyb25tZW50VGV4dHVyZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxGcm9tU2NlbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYWxsIG1lc2hlcyBpbiB0aGUgYXNzZXQgY29udGFpbmVyIHRvIGEgcm9vdCBtZXNoIHRoYXQgY2FuIGJlIHVzZWQgdG8gcG9zaXRpb24gYWxsIHRoZSBjb250YWluZWQgbWVzaGVzLiBUaGUgcm9vdCBtZXNoIGlzIHRoZW4gYWRkZWQgdG8gdGhlIGZyb250IG9mIHRoZSBtZXNoZXMgaW4gdGhlIGFzc2V0Q29udGFpbmVyLlxyXG4gICAgICogQHJldHVybnMgdGhlIHJvb3QgbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUm9vdE1lc2goKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdE1lc2ggPSBuZXcgTWVzaChcImFzc2V0Q29udGFpbmVyUm9vdE1lc2hcIiwgdGhpcy5zY2VuZSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtIG9mIHRoaXMubWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGlmICghbS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJvb3RNZXNoLmFkZENoaWxkKG0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWVzaGVzLnVuc2hpZnQocm9vdE1lc2gpO1xyXG4gICAgICAgIHJldHVybiByb290TWVzaDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1lcmdlIGFuaW1hdGlvbnMgKGRpcmVjdCBhbmQgYW5pbWF0aW9uIGdyb3VwcykgZnJvbSB0aGlzIGFzc2V0IGNvbnRhaW5lciBpbnRvIGEgc2NlbmVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBpcyB0aGUgaW5zdGFuY2Ugb2YgQkFCWUxPTi5TY2VuZSB0byBhcHBlbmQgdG8gKGRlZmF1bHQ6IGxhc3QgY3JlYXRlZCBzY2VuZSlcclxuICAgICAqIEBwYXJhbSBhbmltYXRhYmxlcyBzZXQgb2YgYW5pbWF0YWJsZXMgdG8gcmV0YXJnZXQgdG8gYSBub2RlIGZyb20gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0Q29udmVydGVyIGRlZmluZXMgYSBmdW5jdGlvbiB1c2VkIHRvIGNvbnZlcnQgYW5pbWF0aW9uIHRhcmdldHMgZnJvbSB0aGUgYXNzZXQgY29udGFpbmVyIHRvIHRoZSBzY2VuZSAoZGVmYXVsdDogc2VhcmNoIG5vZGUgYnkgbmFtZSlcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBuZXcgQW5pbWF0aW9uR3JvdXAgYWRkZWQgdG8gdGhlIHNjZW5lIChlbXB0eSBhcnJheSBpZiBub25lKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWVyZ2VBbmltYXRpb25zVG8oXHJcbiAgICAgICAgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IEVuZ2luZVN0b3JlLkxhc3RDcmVhdGVkU2NlbmUsXHJcbiAgICAgICAgYW5pbWF0YWJsZXM6IEFuaW1hdGFibGVbXSxcclxuICAgICAgICB0YXJnZXRDb252ZXJ0ZXI6IE51bGxhYmxlPCh0YXJnZXQ6IGFueSkgPT4gTnVsbGFibGU8Tm9kZT4+ID0gbnVsbFxyXG4gICAgKTogQW5pbWF0aW9uR3JvdXBbXSB7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoXCJObyBzY2VuZSBhdmFpbGFibGUgdG8gbWVyZ2UgYW5pbWF0aW9ucyB0b1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgX3RhcmdldENvbnZlcnRlciA9IHRhcmdldENvbnZlcnRlclxyXG4gICAgICAgICAgICA/IHRhcmdldENvbnZlcnRlclxyXG4gICAgICAgICAgICA6ICh0YXJnZXQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldC5hbmltYXRpb25zLmxlbmd0aCA/IHRhcmdldC5hbmltYXRpb25zWzBdLnRhcmdldFByb3BlcnR5IDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICBCYWJ5bG9uSlMgYWRkcyBzcGVjaWFsIG5hbWluZyB0byB0YXJnZXRzIHRoYXQgYXJlIGNoaWxkcmVuIG9mIG5vZGVzLlxyXG4gICAgICAgICAgICAgIFRoaXMgbmFtZSBhdHRlbXB0cyB0byByZW1vdmUgdGhhdCBzcGVjaWFsIG5hbWluZyB0byBnZXQgdGhlIHBhcmVudCBub2RlcyBuYW1lIGluIGNhc2UgdGhlIHRhcmdldFxyXG4gICAgICAgICAgICAgIGNhbid0IGJlIGZvdW5kIGluIHRoZSBub2RlIHRyZWVcclxuXHJcbiAgICAgICAgICAgICAgRXg6IFRvcnNvX3ByaW1pdGl2ZTAgbGlrZWx5IHBvaW50cyB0byBhIE1lc2ggcHJpbWl0aXZlLiBXZSB0YWtlIGF3YXkgcHJpbWl0aXZlMCBhbmQgYXJlIGxlZnQgd2l0aCBcIlRvcnNvXCIgd2hpY2ggaXMgdGhlIG5hbWVcclxuICAgICAgICAgICAgICBvZiB0aGUgcHJpbWl0aXZlJ3MgcGFyZW50LlxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpLnNwbGl0KFwiX3ByaW1pdGl2ZVwiKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFyZ2V0UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwb3NpdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uUXVhdGVybmlvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBzY2VuZS5nZXRUcmFuc2Zvcm1Ob2RlQnlOYW1lKHRhcmdldC5uYW1lKSB8fCBzY2VuZS5nZXRUcmFuc2Zvcm1Ob2RlQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluZmx1ZW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBzY2VuZS5nZXRNb3JwaFRhcmdldEJ5TmFtZSh0YXJnZXQubmFtZSkgfHwgc2NlbmUuZ2V0TW9ycGhUYXJnZXRCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBzY2VuZS5nZXROb2RlQnlOYW1lKHRhcmdldC5uYW1lKSB8fCBzY2VuZS5nZXROb2RlQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDb3B5IG5ldyBub2RlIGFuaW1hdGlvbnNcclxuICAgICAgICBjb25zdCBub2Rlc0luQUMgPSB0aGlzLmdldE5vZGVzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBub2RlSW5BQyBvZiBub2Rlc0luQUMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZUluU2NlbmUgPSBfdGFyZ2V0Q29udmVydGVyKG5vZGVJbkFDKTtcclxuICAgICAgICAgICAgaWYgKG5vZGVJblNjZW5lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgb2xkIGFuaW1hdGlvbnMgd2l0aCBzYW1lIHRhcmdldCBwcm9wZXJ0eSBhcyBhIG5ldyBvbmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uSW5BQyBvZiBub2RlSW5BQy5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9pbmcgdHJlYXRtZW50IG9uIGFuIGFycmF5IGZvciBzYWZldHkgbWVhc3VyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbnNXaXRoU2FtZVByb3BlcnR5ID0gbm9kZUluU2NlbmUuYW5pbWF0aW9ucy5maWx0ZXIoKGFuaW1hdGlvbkluU2NlbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkluU2NlbmUudGFyZ2V0UHJvcGVydHkgPT09IGFuaW1hdGlvbkluQUMudGFyZ2V0UHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb25XaXRoU2FtZVByb3BlcnR5IG9mIGFuaW1hdGlvbnNXaXRoU2FtZVByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbm9kZUluU2NlbmUuYW5pbWF0aW9ucy5pbmRleE9mKGFuaW1hdGlvbldpdGhTYW1lUHJvcGVydHksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUluU2NlbmUuYW5pbWF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBuZXcgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgbm9kZUluU2NlbmUuYW5pbWF0aW9ucyA9IG5vZGVJblNjZW5lLmFuaW1hdGlvbnMuY29uY2F0KG5vZGVJbkFDLmFuaW1hdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdBbmltYXRpb25Hcm91cHM6IEFuaW1hdGlvbkdyb3VwW10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQ29weSBuZXcgYW5pbWF0aW9uIGdyb3Vwc1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwcyA9IHRoaXMuYW5pbWF0aW9uR3JvdXBzLnNsaWNlKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb25Hcm91cEluQUMgb2YgYW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIC8vIENsb25lIHRoZSBhbmltYXRpb24gZ3JvdXAgYW5kIGFsbCBpdHMgYW5pbWF0YWJsZXNcclxuICAgICAgICAgICAgbmV3QW5pbWF0aW9uR3JvdXBzLnB1c2goYW5pbWF0aW9uR3JvdXBJbkFDLmNsb25lKGFuaW1hdGlvbkdyb3VwSW5BQy5uYW1lLCBfdGFyZ2V0Q29udmVydGVyKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYW5pbWF0YWJsZXMgcmVsYXRlZCB0byB0aGUgYXNzZXQgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0YWJsZSBvZiBhbmltYXRpb25Hcm91cEluQUMuYW5pbWF0YWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGFibGUuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXRhcmdldCBhbmltYXRhYmxlc1xyXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0YWJsZSBvZiBhbmltYXRhYmxlcykge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBfdGFyZ2V0Q29udmVydGVyKGFuaW1hdGFibGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHRoZSBhbmltYXRhYmxlIGFuZCByZXRhcmdldCBpdFxyXG4gICAgICAgICAgICAgICAgc2NlbmUuYmVnaW5BbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGFibGUuZnJvbUZyYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGFibGUudG9GcmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRhYmxlLmxvb3BBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0YWJsZS5zcGVlZFJhdGlvLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGFibGUub25BbmltYXRpb25FbmQgPyBhbmltYXRhYmxlLm9uQW5pbWF0aW9uRW5kIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRhYmxlLm9uQW5pbWF0aW9uTG9vcCA/IGFuaW1hdGFibGUub25BbmltYXRpb25Mb29wIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0b3AgYW5pbWF0aW9uIGZvciB0aGUgdGFyZ2V0IGluIHRoZSBhc3NldCBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIHNjZW5lLnN0b3BBbmltYXRpb24oYW5pbWF0YWJsZS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3QW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHNpbmNlIDYuMTUuMFxyXG4gICAgICogVGhpcyBtZXRob2QgY2hlY2tzIGZvciBhbnkgbm9kZSB0aGF0IGhhcyBubyBwYXJlbnRcclxuICAgICAqIGFuZCBpcyBub3QgaW4gdGhlIHJvb3ROb2RlcyBhcnJheSwgYW5kIGFkZHMgdGhlIG5vZGVcclxuICAgICAqIHRoZXJlLCBpZiBzby5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvcHVsYXRlUm9vdE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMucm9vdE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBtIG9mIHRoaXMubWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGlmICghbS5wYXJlbnQgJiYgdGhpcy5yb290Tm9kZXMuaW5kZXhPZihtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGVzLnB1c2gobSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB0IG9mIHRoaXMudHJhbnNmb3JtTm9kZXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0LnBhcmVudCAmJiB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZXMucHVzaCh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGwgb2YgdGhpcy5saWdodHMpIHtcclxuICAgICAgICAgICAgaWYgKCFsLnBhcmVudCAmJiB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKGwpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290Tm9kZXMucHVzaChsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5jYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIGlmICghYy5wYXJlbnQgJiYgdGhpcy5yb290Tm9kZXMuaW5kZXhPZihjKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdE5vZGVzLnB1c2goYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc2luY2UgNi4yNi4wXHJcbiAgICAgKiBHaXZlbiBhIHJvb3QgYXNzZXQsIHRoaXMgbWV0aG9kIHdpbGwgdHJhdmVyc2UgaXRzIGhpZXJhcmNoeSBhbmQgYWRkIGl0LCBpdHMgY2hpbGRyZW4gYW5kIGFueSBtYXRlcmlhbHMvc2tlbGV0b25zIHRvIHRoZSBjb250YWluZXIuXHJcbiAgICAgKiBAcGFyYW0gcm9vdCByb290IG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEFsbEFzc2V0c1RvQ29udGFpbmVyKHJvb3Q6IE5vZGUpIHtcclxuICAgICAgICBpZiAoIXJvb3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZXNUb1Zpc2l0OiBOb2RlW10gPSBbXTtcclxuICAgICAgICBjb25zdCB2aXNpdGVkTm9kZXMgPSBuZXcgU2V0PE5vZGU+KCk7XHJcblxyXG4gICAgICAgIG5vZGVzVG9WaXNpdC5wdXNoKHJvb3QpO1xyXG5cclxuICAgICAgICB3aGlsZSAobm9kZXNUb1Zpc2l0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZVRvVmlzaXQgPSBub2Rlc1RvVmlzaXQucG9wKCkhO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGVUb1Zpc2l0IGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVUb1Zpc2l0Lmdlb21ldHJ5ICYmIHRoaXMuZ2VvbWV0cmllcy5pbmRleE9mKG5vZGVUb1Zpc2l0Lmdlb21ldHJ5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlb21ldHJpZXMucHVzaChub2RlVG9WaXNpdC5nZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc2hlcy5wdXNoKG5vZGVUb1Zpc2l0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlVG9WaXNpdCBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzaGVzLnB1c2gobm9kZVRvVmlzaXQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGVUb1Zpc2l0IGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Ob2Rlcy5wdXNoKG5vZGVUb1Zpc2l0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlVG9WaXNpdCBpbnN0YW5jZW9mIExpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpZ2h0cy5wdXNoKG5vZGVUb1Zpc2l0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlVG9WaXNpdCBpbnN0YW5jZW9mIENhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFzLnB1c2gobm9kZVRvVmlzaXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZVRvVmlzaXQgaW5zdGFuY2VvZiBBYnN0cmFjdE1lc2gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlVG9WaXNpdC5tYXRlcmlhbCAmJiB0aGlzLm1hdGVyaWFscy5pbmRleE9mKG5vZGVUb1Zpc2l0Lm1hdGVyaWFsKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFscy5wdXNoKG5vZGVUb1Zpc2l0Lm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRleHR1cmUgb2Ygbm9kZVRvVmlzaXQubWF0ZXJpYWwuZ2V0QWN0aXZlVGV4dHVyZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlcy5pbmRleE9mKHRleHR1cmUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5wdXNoKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub2RlVG9WaXNpdC5za2VsZXRvbiAmJiB0aGlzLnNrZWxldG9ucy5pbmRleE9mKG5vZGVUb1Zpc2l0LnNrZWxldG9uKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNrZWxldG9ucy5wdXNoKG5vZGVUb1Zpc2l0LnNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZVRvVmlzaXQubW9ycGhUYXJnZXRNYW5hZ2VyICYmIHRoaXMubW9ycGhUYXJnZXRNYW5hZ2Vycy5pbmRleE9mKG5vZGVUb1Zpc2l0Lm1vcnBoVGFyZ2V0TWFuYWdlcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3JwaFRhcmdldE1hbmFnZXJzLnB1c2gobm9kZVRvVmlzaXQubW9ycGhUYXJnZXRNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlVG9WaXNpdC5nZXRDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWROb2Rlcy5oYXMoY2hpbGQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1Zpc2l0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2aXNpdGVkTm9kZXMuYWRkKG5vZGVUb1Zpc2l0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9wdWxhdGVSb290Tm9kZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBmcm9tIGEgbGlzdCBvZiBvYmplY3RzIGJ5IHRhZ3NcclxuICAgICAqIEBwYXJhbSBsaXN0IHRoZSBsaXN0IG9mIG9iamVjdHMgdG8gdXNlXHJcbiAgICAgKiBAcGFyYW0gdGFnc1F1ZXJ5IHRoZSBxdWVyeSB0byB1c2VcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgYSBwcmVkaWNhdGUgdG8gZmlsdGVyIGZvciB0YWdzXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRCeVRhZ3M8VD4obGlzdDogVFtdLCB0YWdzUXVlcnk6IHN0cmluZywgZmlsdGVyPzogKGl0ZW06IFQpID0+IGJvb2xlYW4pOiBUW10ge1xyXG4gICAgICAgIGlmICh0YWdzUXVlcnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm5zIHRoZSBjb21wbGV0ZSBsaXN0IChjb3VsZCBiZSBkb25lIHdpdGggVGFncy5NYXRjaGVzUXVlcnkgYnV0IG5vIG5lZWQgdG8gaGF2ZSBhIGZvci1sb29wIGhlcmUpXHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGlzdEJ5VGFncyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gbGlzdCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKFRhZ3MgJiYgVGFncy5NYXRjaGVzUXVlcnkoaXRlbSwgdGFnc1F1ZXJ5KSAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoaXRlbSkpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0QnlUYWdzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0QnlUYWdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgbGlzdCBvZiBtZXNoZXMgYnkgdGFnc1xyXG4gICAgICogQHBhcmFtIHRhZ3NRdWVyeSBkZWZpbmVzIHRoZSB0YWdzIHF1ZXJ5IHRvIHVzZVxyXG4gICAgICogQHBhcmFtIGZpbHRlciBkZWZpbmVzIGEgcHJlZGljYXRlIHVzZWQgdG8gZmlsdGVyIHJlc3VsdHNcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIE1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE1lc2hlc0J5VGFncyh0YWdzUXVlcnk6IHN0cmluZywgZmlsdGVyPzogKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gYm9vbGVhbik6IEFic3RyYWN0TWVzaFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QnlUYWdzKHRoaXMubWVzaGVzLCB0YWdzUXVlcnksIGZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBsaXN0IG9mIGNhbWVyYXMgYnkgdGFnc1xyXG4gICAgICogQHBhcmFtIHRhZ3NRdWVyeSBkZWZpbmVzIHRoZSB0YWdzIHF1ZXJ5IHRvIHVzZVxyXG4gICAgICogQHBhcmFtIGZpbHRlciBkZWZpbmVzIGEgcHJlZGljYXRlIHVzZWQgdG8gZmlsdGVyIHJlc3VsdHNcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIENhbWVyYVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2FtZXJhc0J5VGFncyh0YWdzUXVlcnk6IHN0cmluZywgZmlsdGVyPzogKGNhbWVyYTogQ2FtZXJhKSA9PiBib29sZWFuKTogQ2FtZXJhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCeVRhZ3ModGhpcy5jYW1lcmFzLCB0YWdzUXVlcnksIGZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBsaXN0IG9mIGxpZ2h0cyBieSB0YWdzXHJcbiAgICAgKiBAcGFyYW0gdGFnc1F1ZXJ5IGRlZmluZXMgdGhlIHRhZ3MgcXVlcnkgdG8gdXNlXHJcbiAgICAgKiBAcGFyYW0gZmlsdGVyIGRlZmluZXMgYSBwcmVkaWNhdGUgdXNlZCB0byBmaWx0ZXIgcmVzdWx0c1xyXG4gICAgICogQHJldHVybnMgYW4gYXJyYXkgb2YgTGlnaHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExpZ2h0c0J5VGFncyh0YWdzUXVlcnk6IHN0cmluZywgZmlsdGVyPzogKGxpZ2h0OiBMaWdodCkgPT4gYm9vbGVhbik6IExpZ2h0W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCeVRhZ3ModGhpcy5saWdodHMsIHRhZ3NRdWVyeSwgZmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIGxpc3Qgb2YgbWF0ZXJpYWxzIGJ5IHRhZ3NcclxuICAgICAqIEBwYXJhbSB0YWdzUXVlcnkgZGVmaW5lcyB0aGUgdGFncyBxdWVyeSB0byB1c2VcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgZGVmaW5lcyBhIHByZWRpY2F0ZSB1c2VkIHRvIGZpbHRlciByZXN1bHRzXHJcbiAgICAgKiBAcmV0dXJucyBhbiBhcnJheSBvZiBNYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TWF0ZXJpYWxzQnlUYWdzKHRhZ3NRdWVyeTogc3RyaW5nLCBmaWx0ZXI/OiAobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiBib29sZWFuKTogTWF0ZXJpYWxbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJ5VGFncyh0aGlzLm1hdGVyaWFscywgdGFnc1F1ZXJ5LCBmaWx0ZXIpLmNvbmNhdCh0aGlzLl9nZXRCeVRhZ3ModGhpcy5tdWx0aU1hdGVyaWFscywgdGFnc1F1ZXJ5LCBmaWx0ZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIGxpc3Qgb2YgdHJhbnNmb3JtIG5vZGVzIGJ5IHRhZ3NcclxuICAgICAqIEBwYXJhbSB0YWdzUXVlcnkgZGVmaW5lcyB0aGUgdGFncyBxdWVyeSB0byB1c2VcclxuICAgICAqIEBwYXJhbSBmaWx0ZXIgZGVmaW5lcyBhIHByZWRpY2F0ZSB1c2VkIHRvIGZpbHRlciByZXN1bHRzXHJcbiAgICAgKiBAcmV0dXJucyBhbiBhcnJheSBvZiBUcmFuc2Zvcm1Ob2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRUcmFuc2Zvcm1Ob2Rlc0J5VGFncyh0YWdzUXVlcnk6IHN0cmluZywgZmlsdGVyPzogKHRyYW5zZm9ybTogVHJhbnNmb3JtTm9kZSkgPT4gYm9vbGVhbik6IFRyYW5zZm9ybU5vZGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJ5VGFncyh0aGlzLnRyYW5zZm9ybU5vZGVzLCB0YWdzUXVlcnksIGZpbHRlcik7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==