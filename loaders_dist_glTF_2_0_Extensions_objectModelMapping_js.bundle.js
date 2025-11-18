"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_objectModelMapping_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/gltfPathToObjectConverter.js":
/*!************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/gltfPathToObjectConverter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFPathToObjectConverter: () => (/* binding */ GLTFPathToObjectConverter),
/* harmony export */   OptionalPathExceptionsList: () => (/* binding */ OptionalPathExceptionsList)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Adding an exception here will break traversing through the glTF object tree.
 * This is used for properties that might not be in the glTF object model, but are optional and have a default value.
 * For example, the path /nodes/\{\}/extensions/KHR_node_visibility/visible is optional - the object can be deferred without the object fully existing.
 */
const OptionalPathExceptionsList = [
    {
        // get the node as object when reading an extension
        regex: new RegExp(`^/nodes/\\d+/extensions/`),
    },
];
/**
 * A converter that takes a glTF Object Model JSON Pointer
 * and transforms it into an ObjectAccessorContainer, allowing
 * objects referenced in the glTF to be associated with their
 * respective Babylon.js objects.
 */
class GLTFPathToObjectConverter {
    constructor(_gltf, _infoTree) {
        this._gltf = _gltf;
        this._infoTree = _infoTree;
    }
    /**
     * The pointer string is represented by a [JSON pointer](https://datatracker.ietf.org/doc/html/rfc6901).
     * See also https://github.com/KhronosGroup/glTF/blob/main/specification/2.0/ObjectModel.adoc#core-pointers
     * <animationPointer> := /<rootNode>/<assetIndex>/<propertyPath>
     * <rootNode> := "nodes" | "materials" | "meshes" | "cameras" | "extensions"
     * <assetIndex> := <digit> | <name>
     * <propertyPath> := <extensionPath> | <standardPath>
     * <extensionPath> := "extensions"/<name>/<standardPath>
     * <standardPath> := <name> | <name>/<standardPath>
     * <name> := W+
     * <digit> := D+
     *
     * Examples:
     *  - "/nodes/0/rotation"
     * - "/nodes.length"
     *  - "/materials/2/emissiveFactor"
     *  - "/materials/2/pbrMetallicRoughness/baseColorFactor"
     *  - "/materials/2/extensions/KHR_materials_emissive_strength/emissiveStrength"
     *
     * @param path The path to convert
     * @returns The object and info associated with the path
     */
    convert(path) {
        let objectTree = this._gltf;
        let infoTree = this._infoTree;
        let target = undefined;
        if (!path.startsWith("/")) {
            throw new Error("Path must start with a /");
        }
        const parts = path.split("/");
        parts.shift();
        //if the last part has ".length" in it, separate that as an extra part
        if (parts[parts.length - 1].includes(".length")) {
            const lastPart = parts[parts.length - 1];
            const split = lastPart.split(".");
            parts.pop();
            parts.push(...split);
        }
        let ignoreObjectTree = false;
        for (const part of parts) {
            const isLength = part === "length";
            if (isLength && !infoTree.__array__) {
                throw new Error(`Path ${path} is invalid`);
            }
            if (infoTree.__ignoreObjectTree__) {
                ignoreObjectTree = true;
            }
            if (infoTree.__array__ && !isLength) {
                infoTree = infoTree.__array__;
            }
            else {
                infoTree = infoTree[part];
                if (!infoTree) {
                    throw new Error(`Path ${path} is invalid`);
                }
            }
            if (!ignoreObjectTree) {
                if (objectTree === undefined) {
                    // check if the path is in the exception list. If it is, break and return the last object that was found
                    const exception = OptionalPathExceptionsList.find((e) => e.regex.test(path));
                    if (!exception) {
                        throw new Error(`Path ${path} is invalid`);
                    }
                }
                else if (!isLength) {
                    objectTree = objectTree?.[part];
                }
            }
            if (infoTree.__target__ || isLength) {
                target = objectTree;
            }
        }
        return {
            object: target,
            info: infoTree,
        };
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

/***/ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js":
/*!*****************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddObjectAccessorToKey: () => (/* binding */ AddObjectAccessorToKey),
/* harmony export */   GetMappingForKey: () => (/* binding */ GetMappingForKey),
/* harmony export */   GetPathToObjectConverter: () => (/* binding */ GetPathToObjectConverter),
/* harmony export */   SetInterpolationForKey: () => (/* binding */ SetInterpolationForKey)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Lights/spotLight */ "../core/dist/Lights/spotLight.js");
/* harmony import */ var _gltfPathToObjectConverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gltfPathToObjectConverter */ "../loaders/dist/glTF/2.0/Extensions/gltfPathToObjectConverter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/naming-convention */





const nodesTree = {
    length: {
        type: "number",
        get: (nodes) => nodes.length,
        getTarget: (nodes) => nodes.map((node) => node._babylonTransformNode),
        getPropertyName: [() => "length"],
    },
    __array__: {
        __target__: true,
        translation: {
            type: "Vector3",
            get: (node) => node._babylonTransformNode?.position,
            set: (value, node) => node._babylonTransformNode?.position.copyFrom(value),
            getTarget: (node) => node._babylonTransformNode,
            getPropertyName: [() => "position"],
        },
        rotation: {
            type: "Quaternion",
            get: (node) => node._babylonTransformNode?.rotationQuaternion,
            set: (value, node) => node._babylonTransformNode?.rotationQuaternion?.copyFrom(value),
            getTarget: (node) => node._babylonTransformNode,
            getPropertyName: [() => "rotationQuaternion"],
        },
        scale: {
            type: "Vector3",
            get: (node) => node._babylonTransformNode?.scaling,
            set: (value, node) => node._babylonTransformNode?.scaling.copyFrom(value),
            getTarget: (node) => node._babylonTransformNode,
            getPropertyName: [() => "scaling"],
        },
        weights: {
            length: {
                type: "number",
                get: (node) => node._numMorphTargets,
                getTarget: (node) => node._babylonTransformNode,
                getPropertyName: [() => "influence"],
            },
            __array__: {
                __target__: true,
                type: "number",
                get: (node, index) => (index !== undefined ? node._primitiveBabylonMeshes?.[0].morphTargetManager?.getTarget(index).influence : undefined),
                // set: (value: number, node: INode, index?: number) => node._babylonTransformNode?.getMorphTargetManager()?.getTarget(index)?.setInfluence(value),
                getTarget: (node) => node._babylonTransformNode,
                getPropertyName: [() => "influence"],
            },
            type: "number[]",
            get: (node, index) => [0], // TODO: get the weights correctly
            // set: (value: number, node: INode, index?: number) => node._babylonTransformNode?.getMorphTargetManager()?.getTarget(index)?.setInfluence(value),
            getTarget: (node) => node._babylonTransformNode,
            getPropertyName: [() => "influence"],
        },
        // readonly!
        matrix: {
            type: "Matrix",
            get: (node) => core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(node._babylonTransformNode?.scaling, node._babylonTransformNode?.rotationQuaternion, node._babylonTransformNode?.position),
            getTarget: (node) => node._babylonTransformNode,
            isReadOnly: true,
        },
        globalMatrix: {
            type: "Matrix",
            get: (node) => {
                const matrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity();
                // RHS/LHS support
                let rootNode = node.parent;
                while (rootNode && rootNode.parent) {
                    rootNode = rootNode.parent;
                }
                const forceUpdate = node._babylonTransformNode?.position._isDirty || node._babylonTransformNode?.rotationQuaternion?._isDirty || node._babylonTransformNode?.scaling._isDirty;
                if (rootNode) {
                    // take the parent root node's world matrix, invert it, and multiply it with the current node's world matrix
                    // This will provide the global matrix, ignoring the RHS->LHS conversion
                    const rootMatrix = rootNode._babylonTransformNode?.computeWorldMatrix(true).invert();
                    if (rootMatrix) {
                        node._babylonTransformNode?.computeWorldMatrix(forceUpdate)?.multiplyToRef(rootMatrix, matrix);
                    }
                }
                else if (node._babylonTransformNode) {
                    matrix.copyFrom(node._babylonTransformNode.computeWorldMatrix(forceUpdate));
                }
                return matrix;
            },
            getTarget: (node) => node._babylonTransformNode,
            isReadOnly: true,
        },
        extensions: {
            EXT_lights_ies: {
                multiplier: {
                    type: "number",
                    get: (node) => {
                        return node._babylonTransformNode?.getChildren((child) => child instanceof core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight, true)[0]?.intensity;
                    },
                    getTarget: (node) => node._babylonTransformNode?.getChildren((child) => child instanceof core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight, true)[0],
                    set: (value, node) => {
                        if (node._babylonTransformNode) {
                            const light = node._babylonTransformNode.getChildren((child) => child instanceof core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight, true)[0];
                            if (light) {
                                light.intensity = value;
                            }
                        }
                    },
                },
                color: {
                    type: "Color3",
                    get: (node) => {
                        return node._babylonTransformNode?.getChildren((child) => child instanceof core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight, true)[0]?.diffuse;
                    },
                    getTarget: (node) => node._babylonTransformNode?.getChildren((child) => child instanceof core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight, true)[0],
                    set: (value, node) => {
                        if (node._babylonTransformNode) {
                            const light = node._babylonTransformNode.getChildren((child) => child instanceof core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight, true)[0];
                            if (light) {
                                light.diffuse = value;
                            }
                        }
                    },
                },
            },
            KHR_node_visibility: {
                visible: {
                    type: "boolean",
                    get: (node) => {
                        return node._primitiveBabylonMeshes ? node._primitiveBabylonMeshes[0].isVisible : false;
                    },
                    getTarget: () => undefined, // TODO: what should this return?
                    set: (value, node) => {
                        if (node._primitiveBabylonMeshes) {
                            node._primitiveBabylonMeshes.forEach((mesh) => (mesh.isVisible = value));
                        }
                    },
                },
            },
        },
    },
};
const animationsTree = {
    length: {
        type: "number",
        get: (animations) => animations.length,
        getTarget: (animations) => animations.map((animation) => animation._babylonAnimationGroup),
        getPropertyName: [() => "length"],
    },
    __array__: {},
};
const meshesTree = {
    length: {
        type: "number",
        get: (meshes) => meshes.length,
        getTarget: (meshes) => meshes.map((mesh) => mesh.primitives[0]._instanceData?.babylonSourceMesh),
        getPropertyName: [() => "length"],
    },
    __array__: {},
};
const camerasTree = {
    __array__: {
        __target__: true,
        orthographic: {
            xmag: {
                componentsCount: 2,
                type: "Vector2",
                get: (camera) => new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(camera._babylonCamera?.orthoLeft ?? 0, camera._babylonCamera?.orthoRight ?? 0),
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.orthoLeft = value.x;
                        camera._babylonCamera.orthoRight = value.y;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "orthoLeft", () => "orthoRight"],
            },
            ymag: {
                componentsCount: 2,
                type: "Vector2",
                get: (camera) => new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(camera._babylonCamera?.orthoBottom ?? 0, camera._babylonCamera?.orthoTop ?? 0),
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.orthoBottom = value.x;
                        camera._babylonCamera.orthoTop = value.y;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "orthoBottom", () => "orthoTop"],
            },
            zfar: {
                type: "number",
                get: (camera) => camera._babylonCamera?.maxZ,
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.maxZ = value;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "maxZ"],
            },
            znear: {
                type: "number",
                get: (camera) => camera._babylonCamera?.minZ,
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.minZ = value;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "minZ"],
            },
        },
        perspective: {
            aspectRatio: {
                type: "number",
                get: (camera) => camera._babylonCamera?.getEngine().getAspectRatio(camera._babylonCamera),
                getTarget: (camera) => camera,
                getPropertyName: [() => "aspectRatio"],
                isReadOnly: true, // might not be the case for glTF?
            },
            yfov: {
                type: "number",
                get: (camera) => camera._babylonCamera?.fov,
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.fov = value;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "fov"],
            },
            zfar: {
                type: "number",
                get: (camera) => camera._babylonCamera?.maxZ,
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.maxZ = value;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "maxZ"],
            },
            znear: {
                type: "number",
                get: (camera) => camera._babylonCamera?.minZ,
                set: (value, camera) => {
                    if (camera._babylonCamera) {
                        camera._babylonCamera.minZ = value;
                    }
                },
                getTarget: (camera) => camera,
                getPropertyName: [() => "minZ"],
            },
        },
    },
};
const materialsTree = {
    __array__: {
        __target__: true,
        emissiveFactor: {
            type: "Color3",
            get: (material, index, payload) => GetMaterial(material, index, payload).emissiveColor,
            set: (value, material, index, payload) => GetMaterial(material, index, payload).emissiveColor.copyFrom(value),
            getTarget: (material, index, payload) => GetMaterial(material, index, payload),
            getPropertyName: [() => "emissiveColor"],
        },
        emissiveTexture: {
            extensions: {
                KHR_texture_transform: GenerateTextureMap("emissiveTexture"),
            },
        },
        normalTexture: {
            scale: {
                type: "number",
                get: (material, index, payload) => GetTexture(material, payload, "bumpTexture")?.level,
                set: (value, material, index, payload) => {
                    const texture = GetTexture(material, payload, "bumpTexture");
                    if (texture) {
                        texture.level = value;
                    }
                },
                getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                getPropertyName: [() => "level"],
            },
            extensions: {
                KHR_texture_transform: GenerateTextureMap("bumpTexture"),
            },
        },
        occlusionTexture: {
            strength: {
                type: "number",
                get: (material, index, payload) => GetMaterial(material, index, payload).ambientTextureStrength,
                set: (value, material, index, payload) => {
                    const mat = GetMaterial(material, index, payload);
                    if (mat) {
                        mat.ambientTextureStrength = value;
                    }
                },
                getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                getPropertyName: [() => "ambientTextureStrength"],
            },
            extensions: {
                KHR_texture_transform: GenerateTextureMap("ambientTexture"),
            },
        },
        pbrMetallicRoughness: {
            baseColorFactor: {
                type: "Color4",
                get: (material, index, payload) => {
                    const mat = GetMaterial(material, index, payload);
                    return core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4.FromColor3(mat.albedoColor, mat.alpha);
                },
                set: (value, material, index, payload) => {
                    const mat = GetMaterial(material, index, payload);
                    mat.albedoColor.set(value.r, value.g, value.b);
                    mat.alpha = value.a;
                },
                getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                // This is correct on the animation level, but incorrect as a single property of a type Color4
                getPropertyName: [() => "albedoColor", () => "alpha"],
            },
            baseColorTexture: {
                extensions: {
                    KHR_texture_transform: GenerateTextureMap("albedoTexture"),
                },
            },
            metallicFactor: {
                type: "number",
                get: (material, index, payload) => GetMaterial(material, index, payload).metallic,
                set: (value, material, index, payload) => {
                    const mat = GetMaterial(material, index, payload);
                    if (mat) {
                        mat.metallic = value;
                    }
                },
                getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                getPropertyName: [() => "metallic"],
            },
            roughnessFactor: {
                type: "number",
                get: (material, index, payload) => GetMaterial(material, index, payload).roughness,
                set: (value, material, index, payload) => {
                    const mat = GetMaterial(material, index, payload);
                    if (mat) {
                        mat.roughness = value;
                    }
                },
                getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                getPropertyName: [() => "roughness"],
            },
            metallicRoughnessTexture: {
                extensions: {
                    KHR_texture_transform: GenerateTextureMap("metallicTexture"),
                },
            },
        },
        extensions: {
            KHR_materials_anisotropy: {
                anisotropyStrength: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).anisotropy.intensity,
                    set: (value, material, index, payload) => {
                        GetMaterial(material, index, payload).anisotropy.intensity = value;
                    },
                    getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                    getPropertyName: [() => "anisotropy.intensity"],
                },
                anisotropyRotation: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).anisotropy.angle,
                    set: (value, material, index, payload) => {
                        GetMaterial(material, index, payload).anisotropy.angle = value;
                    },
                    getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                    getPropertyName: [() => "anisotropy.angle"],
                },
                anisotropyTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("anisotropy", "texture"),
                    },
                },
            },
            KHR_materials_clearcoat: {
                clearcoatFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).clearCoat.intensity,
                    set: (value, material, index, payload) => {
                        GetMaterial(material, index, payload).clearCoat.intensity = value;
                    },
                    getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                    getPropertyName: [() => "clearCoat.intensity"],
                },
                clearcoatRoughnessFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).clearCoat.roughness,
                    set: (value, material, index, payload) => {
                        GetMaterial(material, index, payload).clearCoat.roughness = value;
                    },
                    getTarget: (material, index, payload) => GetMaterial(material, index, payload),
                    getPropertyName: [() => "clearCoat.roughness"],
                },
                clearcoatTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("clearCoat", "texture"),
                    },
                },
                clearcoatNormalTexture: {
                    scale: {
                        type: "number",
                        get: (material, index, payload) => GetMaterial(material, index, payload).clearCoat.bumpTexture?.level,
                        getTarget: GetMaterial,
                        set: (value, material, index, payload) => (GetMaterial(material, index, payload).clearCoat.bumpTexture.level = value),
                    },
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("clearCoat", "bumpTexture"),
                    },
                },
                clearcoatRoughnessTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("clearCoat", "textureRoughness"),
                    },
                },
            },
            KHR_materials_dispersion: {
                dispersion: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.dispersion,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).subSurface.dispersion = value),
                },
            },
            KHR_materials_emissive_strength: {
                emissiveStrength: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).emissiveIntensity,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).emissiveIntensity = value),
                },
            },
            KHR_materials_ior: {
                ior: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).indexOfRefraction,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).indexOfRefraction = value),
                },
            },
            KHR_materials_iridescence: {
                iridescenceFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).iridescence.intensity,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).iridescence.intensity = value),
                },
                iridescenceIor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).iridescence.indexOfRefraction,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).iridescence.indexOfRefraction = value),
                },
                iridescenceTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("iridescence", "texture"),
                    },
                },
                iridescenceThicknessMaximum: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).iridescence.maximumThickness,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).iridescence.maximumThickness = value),
                },
                iridescenceThicknessMinimum: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).iridescence.minimumThickness,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).iridescence.minimumThickness = value),
                },
                iridescenceThicknessTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("iridescence", "thicknessTexture"),
                    },
                },
            },
            KHR_materials_sheen: {
                sheenColorFactor: {
                    type: "Color3",
                    get: (material, index, payload) => GetMaterial(material, index, payload).sheen.color,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => GetMaterial(material, index, payload).sheen.color.copyFrom(value),
                },
                sheenColorTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("sheen", "texture"),
                    },
                },
                sheenRoughnessFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).sheen.intensity,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).sheen.intensity = value),
                },
                sheenRoughnessTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("sheen", "thicknessTexture"),
                    },
                },
            },
            KHR_materials_specular: {
                specularFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).metallicF0Factor,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).metallicF0Factor = value),
                    getPropertyName: [() => "metallicF0Factor"],
                },
                specularColorFactor: {
                    type: "Color3",
                    get: (material, index, payload) => GetMaterial(material, index, payload).metallicReflectanceColor,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => GetMaterial(material, index, payload).metallicReflectanceColor.copyFrom(value),
                    getPropertyName: [() => "metallicReflectanceColor"],
                },
                specularTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("metallicReflectanceTexture"),
                    },
                },
                specularColorTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("reflectanceTexture"),
                    },
                },
            },
            KHR_materials_transmission: {
                transmissionFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.refractionIntensity,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).subSurface.refractionIntensity = value),
                    getPropertyName: [() => "subSurface.refractionIntensity"],
                },
                transmissionTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("subSurface", "refractionIntensityTexture"),
                    },
                },
            },
            KHR_materials_diffuse_transmission: {
                diffuseTransmissionFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.translucencyIntensity,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).subSurface.translucencyIntensity = value),
                },
                diffuseTransmissionTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("subSurface", "translucencyIntensityTexture"),
                    },
                },
                diffuseTransmissionColorFactor: {
                    type: "Color3",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.translucencyColor,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => value && GetMaterial(material, index, payload).subSurface.translucencyColor?.copyFrom(value),
                },
                diffuseTransmissionColorTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("subSurface", "translucencyColorTexture"),
                    },
                },
            },
            KHR_materials_volume: {
                attenuationColor: {
                    type: "Color3",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.tintColor,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => GetMaterial(material, index, payload).subSurface.tintColor.copyFrom(value),
                },
                attenuationDistance: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.tintColorAtDistance,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).subSurface.tintColorAtDistance = value),
                },
                thicknessFactor: {
                    type: "number",
                    get: (material, index, payload) => GetMaterial(material, index, payload).subSurface.maximumThickness,
                    getTarget: GetMaterial,
                    set: (value, material, index, payload) => (GetMaterial(material, index, payload).subSurface.maximumThickness = value),
                },
                thicknessTexture: {
                    extensions: {
                        KHR_texture_transform: GenerateTextureMap("subSurface", "thicknessTexture"),
                    },
                },
            },
        },
    },
};
const extensionsTree = {
    KHR_lights_punctual: {
        lights: {
            length: {
                type: "number",
                get: (lights) => lights.length,
                getTarget: (lights) => lights.map((light) => light._babylonLight),
                getPropertyName: [(_lights) => "length"],
            },
            __array__: {
                __target__: true,
                color: {
                    type: "Color3",
                    get: (light) => light._babylonLight?.diffuse,
                    set: (value, light) => light._babylonLight?.diffuse.copyFrom(value),
                    getTarget: (light) => light._babylonLight,
                    getPropertyName: [(_light) => "diffuse"],
                },
                intensity: {
                    type: "number",
                    get: (light) => light._babylonLight?.intensity,
                    set: (value, light) => (light._babylonLight ? (light._babylonLight.intensity = value) : undefined),
                    getTarget: (light) => light._babylonLight,
                    getPropertyName: [(_light) => "intensity"],
                },
                range: {
                    type: "number",
                    get: (light) => light._babylonLight?.range,
                    set: (value, light) => (light._babylonLight ? (light._babylonLight.range = value) : undefined),
                    getTarget: (light) => light._babylonLight,
                    getPropertyName: [(_light) => "range"],
                },
                spot: {
                    innerConeAngle: {
                        type: "number",
                        get: (light) => light._babylonLight?.innerAngle,
                        set: (value, light) => (light._babylonLight ? (light._babylonLight.innerAngle = value) : undefined),
                        getTarget: (light) => light._babylonLight,
                        getPropertyName: [(_light) => "innerConeAngle"],
                    },
                    outerConeAngle: {
                        type: "number",
                        get: (light) => light._babylonLight?.angle,
                        set: (value, light) => (light._babylonLight ? (light._babylonLight.angle = value) : undefined),
                        getTarget: (light) => light._babylonLight,
                        getPropertyName: [(_light) => "outerConeAngle"],
                    },
                },
            },
        },
    },
    EXT_lights_area: {
        lights: {
            length: {
                type: "number",
                get: (lights) => lights.length,
                getTarget: (lights) => lights.map((light) => light._babylonLight),
                getPropertyName: [(_lights) => "length"],
            },
            __array__: {
                __target__: true,
                color: {
                    type: "Color3",
                    get: (light) => light._babylonLight?.diffuse,
                    set: (value, light) => light._babylonLight?.diffuse.copyFrom(value),
                    getTarget: (light) => light._babylonLight,
                    getPropertyName: [(_light) => "diffuse"],
                },
                intensity: {
                    type: "number",
                    get: (light) => light._babylonLight?.intensity,
                    set: (value, light) => (light._babylonLight ? (light._babylonLight.intensity = value) : undefined),
                    getTarget: (light) => light._babylonLight,
                    getPropertyName: [(_light) => "intensity"],
                },
                size: {
                    type: "number",
                    get: (light) => light._babylonLight?.height,
                    set: (value, light) => (light._babylonLight ? (light._babylonLight.height = value) : undefined),
                    getTarget: (light) => light._babylonLight,
                    getPropertyName: [(_light) => "size"],
                },
                rect: {
                    aspect: {
                        type: "number",
                        get: (light) => light._babylonLight?.width / light._babylonLight?.height,
                        set: (value, light) => light._babylonLight ? (light._babylonLight.width = value * light._babylonLight.height) : undefined,
                        getTarget: (light) => light._babylonLight,
                        getPropertyName: [(_light) => "aspect"],
                    },
                },
            },
        },
    },
    EXT_lights_ies: {
        lights: {
            length: {
                type: "number",
                get: (lights) => lights.length,
                getTarget: (lights) => lights.map((light) => light._babylonLight),
                getPropertyName: [(_lights) => "length"],
            },
        },
    },
    EXT_lights_image_based: {
        lights: {
            length: {
                type: "number",
                get: (lights) => lights.length,
                getTarget: (lights) => lights.map((light) => light._babylonTexture),
                getPropertyName: [(_lights) => "length"],
            },
            __array__: {
                __target__: true,
                intensity: {
                    type: "number",
                    get: (light) => light._babylonTexture?.level,
                    set: (value, light) => {
                        if (light._babylonTexture) {
                            light._babylonTexture.level = value;
                        }
                    },
                    getTarget: (light) => light._babylonTexture,
                },
                rotation: {
                    type: "Quaternion",
                    get: (light) => light._babylonTexture && core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromRotationMatrix(light._babylonTexture?.getReflectionTextureMatrix()),
                    set: (value, light) => {
                        if (!light._babylonTexture) {
                            return;
                        }
                        // Invert the rotation so that positive rotation is counter-clockwise.
                        if (!light._babylonTexture.getScene()?.useRightHandedSystem) {
                            value = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Inverse(value);
                        }
                        core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromQuaternionToRef(value, light._babylonTexture.getReflectionTextureMatrix());
                    },
                    getTarget: (light) => light._babylonTexture,
                },
            },
        },
    },
};
function GetTexture(material, payload, textureType, textureInObject) {
    const babylonMaterial = GetMaterial(material, payload);
    return textureInObject ? babylonMaterial[textureType][textureInObject] : babylonMaterial[textureType];
}
function GetMaterial(material, _index, payload) {
    return material._data?.[payload?.fillMode ?? core_Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.MATERIAL_TriangleFillMode]?.babylonMaterial;
}
function GenerateTextureMap(textureType, textureInObject) {
    return {
        offset: {
            componentsCount: 2,
            // assuming two independent values for u and v, and NOT a Vector2
            type: "Vector2",
            get: (material, _index, payload) => {
                const texture = GetTexture(material, payload, textureType, textureInObject);
                return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(texture?.uOffset, texture?.vOffset);
            },
            getTarget: GetMaterial,
            set: (value, material, _index, payload) => {
                const texture = GetTexture(material, payload, textureType, textureInObject);
                (texture.uOffset = value.x), (texture.vOffset = value.y);
            },
            getPropertyName: [
                () => `${textureType}${textureInObject ? "." + textureInObject : ""}.uOffset`,
                () => `${textureType}${textureInObject ? "." + textureInObject : ""}.vOffset`,
            ],
        },
        rotation: {
            type: "number",
            get: (material, _index, payload) => GetTexture(material, payload, textureType, textureInObject)?.wAng,
            getTarget: GetMaterial,
            set: (value, material, _index, payload) => (GetTexture(material, payload, textureType, textureInObject).wAng = value),
            getPropertyName: [() => `${textureType}${textureInObject ? "." + textureInObject : ""}.wAng`],
        },
        scale: {
            componentsCount: 2,
            type: "Vector2",
            get: (material, _index, payload) => {
                const texture = GetTexture(material, payload, textureType, textureInObject);
                return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(texture?.uScale, texture?.vScale);
            },
            getTarget: GetMaterial,
            set: (value, material, index, payload) => {
                const texture = GetTexture(material, payload, textureType, textureInObject);
                (texture.uScale = value.x), (texture.vScale = value.y);
            },
            getPropertyName: [
                () => `${textureType}${textureInObject ? "." + textureInObject : ""}.uScale`,
                () => `${textureType}${textureInObject ? "." + textureInObject : ""}.vScale`,
            ],
        },
    };
}
const objectModelMapping = {
    cameras: camerasTree,
    nodes: nodesTree,
    materials: materialsTree,
    extensions: extensionsTree,
    animations: animationsTree,
    meshes: meshesTree,
};
/**
 * get a path-to-object converter for the given glTF tree
 * @param gltf the glTF tree to use
 * @returns a path-to-object converter for the given glTF tree
 */
function GetPathToObjectConverter(gltf) {
    return new _gltfPathToObjectConverter__WEBPACK_IMPORTED_MODULE_4__.GLTFPathToObjectConverter(gltf, objectModelMapping);
}
/**
 * This function will return the object accessor for the given key in the object model
 * If the key is not found, it will return undefined
 * @param key the key to get the mapping for, for example /materials/\{\}/emissiveFactor
 * @returns an object accessor for the given key, or undefined if the key is not found
 */
function GetMappingForKey(key) {
    // replace every `{}` in key with __array__ to match the object model
    const keyParts = key.split("/").map((part) => part.replace(/{}/g, "__array__"));
    let current = objectModelMapping;
    for (const part of keyParts) {
        // make sure part is not empty
        if (!part) {
            continue;
        }
        current = current[part];
    }
    // validate that current is an object accessor
    if (current && current.type && current.get) {
        return current;
    }
    return undefined;
}
/**
 * Set interpolation for a specific key in the object model
 * @param key the key to set, for example /materials/\{\}/emissiveFactor
 * @param interpolation the interpolation elements array
 */
function SetInterpolationForKey(key, interpolation) {
    // replace every `{}` in key with __array__ to match the object model
    const keyParts = key.split("/").map((part) => part.replace(/{}/g, "__array__"));
    let current = objectModelMapping;
    for (const part of keyParts) {
        // make sure part is not empty
        if (!part) {
            continue;
        }
        current = current[part];
    }
    // validate that the current object is an object accessor
    if (current && current.type && current.get) {
        current.interpolation = interpolation;
    }
}
/**
 * This will ad a new object accessor in the object model at the given key.
 * Note that this will NOT change the typescript types. To do that you will need to change the interface itself (extending it in the module that uses it)
 * @param key the key to add the object accessor at. For example /cameras/\{\}/perspective/aspectRatio
 * @param accessor the object accessor to add
 */
function AddObjectAccessorToKey(key, accessor) {
    // replace every `{}` in key with __array__ to match the object model
    const keyParts = key.split("/").map((part) => part.replace(/{}/g, "__array__"));
    let current = objectModelMapping;
    for (const part of keyParts) {
        // make sure part is not empty
        if (!part) {
            continue;
        }
        if (!current[part]) {
            if (part === "?") {
                current.__ignoreObjectTree__ = true;
                continue;
            }
            current[part] = {};
            // if the part is __array__ then add the __target__ property
            if (part === "__array__") {
                current[part].__target__ = true;
            }
        }
        current = current[part];
    }
    Object.assign(current, accessor);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfb2JqZWN0TW9kZWxNYXBwaW5nX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBS0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQWlSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9nbHRmUGF0aFRvT2JqZWN0Q29udmVydGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9vYmplY3RNb2RlbE1hcHBpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJT2JqZWN0SW5mbywgSVBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCJjb3JlL09iamVjdE1vZGVsL29iamVjdE1vZGVsSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSU9iamVjdEFjY2Vzc29yIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3R5cGVEZWZpbml0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIEFkZGluZyBhbiBleGNlcHRpb24gaGVyZSB3aWxsIGJyZWFrIHRyYXZlcnNpbmcgdGhyb3VnaCB0aGUgZ2xURiBvYmplY3QgdHJlZS5cclxuICogVGhpcyBpcyB1c2VkIGZvciBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgbm90IGJlIGluIHRoZSBnbFRGIG9iamVjdCBtb2RlbCwgYnV0IGFyZSBvcHRpb25hbCBhbmQgaGF2ZSBhIGRlZmF1bHQgdmFsdWUuXHJcbiAqIEZvciBleGFtcGxlLCB0aGUgcGF0aCAvbm9kZXMvXFx7XFx9L2V4dGVuc2lvbnMvS0hSX25vZGVfdmlzaWJpbGl0eS92aXNpYmxlIGlzIG9wdGlvbmFsIC0gdGhlIG9iamVjdCBjYW4gYmUgZGVmZXJyZWQgd2l0aG91dCB0aGUgb2JqZWN0IGZ1bGx5IGV4aXN0aW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE9wdGlvbmFsUGF0aEV4Y2VwdGlvbnNMaXN0OiB7XHJcbiAgICByZWdleDogUmVnRXhwO1xyXG59W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBub2RlIGFzIG9iamVjdCB3aGVuIHJlYWRpbmcgYW4gZXh0ZW5zaW9uXHJcbiAgICAgICAgcmVnZXg6IG5ldyBSZWdFeHAoYF4vbm9kZXMvXFxcXGQrL2V4dGVuc2lvbnMvYCksXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEEgY29udmVydGVyIHRoYXQgdGFrZXMgYSBnbFRGIE9iamVjdCBNb2RlbCBKU09OIFBvaW50ZXJcclxuICogYW5kIHRyYW5zZm9ybXMgaXQgaW50byBhbiBPYmplY3RBY2Nlc3NvckNvbnRhaW5lciwgYWxsb3dpbmdcclxuICogb2JqZWN0cyByZWZlcmVuY2VkIGluIHRoZSBnbFRGIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGVpclxyXG4gKiByZXNwZWN0aXZlIEJhYnlsb24uanMgb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGUGF0aFRvT2JqZWN0Q29udmVydGVyPFQsIEJhYnlsb25UeXBlLCBCYWJ5bG9uVmFsdWU+IGltcGxlbWVudHMgSVBhdGhUb09iamVjdENvbnZlcnRlcjxJT2JqZWN0QWNjZXNzb3I8VCwgQmFieWxvblR5cGUsIEJhYnlsb25WYWx1ZT4+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9nbHRmOiBJR0xURixcclxuICAgICAgICBwcml2YXRlIF9pbmZvVHJlZTogYW55XHJcbiAgICApIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcG9pbnRlciBzdHJpbmcgaXMgcmVwcmVzZW50ZWQgYnkgYSBbSlNPTiBwb2ludGVyXShodHRwczovL2RhdGF0cmFja2VyLmlldGYub3JnL2RvYy9odG1sL3JmYzY5MDEpLlxyXG4gICAgICogU2VlIGFsc28gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFpbi9zcGVjaWZpY2F0aW9uLzIuMC9PYmplY3RNb2RlbC5hZG9jI2NvcmUtcG9pbnRlcnNcclxuICAgICAqIDxhbmltYXRpb25Qb2ludGVyPiA6PSAvPHJvb3ROb2RlPi88YXNzZXRJbmRleD4vPHByb3BlcnR5UGF0aD5cclxuICAgICAqIDxyb290Tm9kZT4gOj0gXCJub2Rlc1wiIHwgXCJtYXRlcmlhbHNcIiB8IFwibWVzaGVzXCIgfCBcImNhbWVyYXNcIiB8IFwiZXh0ZW5zaW9uc1wiXHJcbiAgICAgKiA8YXNzZXRJbmRleD4gOj0gPGRpZ2l0PiB8IDxuYW1lPlxyXG4gICAgICogPHByb3BlcnR5UGF0aD4gOj0gPGV4dGVuc2lvblBhdGg+IHwgPHN0YW5kYXJkUGF0aD5cclxuICAgICAqIDxleHRlbnNpb25QYXRoPiA6PSBcImV4dGVuc2lvbnNcIi88bmFtZT4vPHN0YW5kYXJkUGF0aD5cclxuICAgICAqIDxzdGFuZGFyZFBhdGg+IDo9IDxuYW1lPiB8IDxuYW1lPi88c3RhbmRhcmRQYXRoPlxyXG4gICAgICogPG5hbWU+IDo9IFcrXHJcbiAgICAgKiA8ZGlnaXQ+IDo9IEQrXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZXM6XHJcbiAgICAgKiAgLSBcIi9ub2Rlcy8wL3JvdGF0aW9uXCJcclxuICAgICAqIC0gXCIvbm9kZXMubGVuZ3RoXCJcclxuICAgICAqICAtIFwiL21hdGVyaWFscy8yL2VtaXNzaXZlRmFjdG9yXCJcclxuICAgICAqICAtIFwiL21hdGVyaWFscy8yL3Bick1ldGFsbGljUm91Z2huZXNzL2Jhc2VDb2xvckZhY3RvclwiXHJcbiAgICAgKiAgLSBcIi9tYXRlcmlhbHMvMi9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgvZW1pc3NpdmVTdHJlbmd0aFwiXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gY29udmVydFxyXG4gICAgICogQHJldHVybnMgVGhlIG9iamVjdCBhbmQgaW5mbyBhc3NvY2lhdGVkIHdpdGggdGhlIHBhdGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnZlcnQocGF0aDogc3RyaW5nKTogSU9iamVjdEluZm88SU9iamVjdEFjY2Vzc29yPFQsIEJhYnlsb25UeXBlLCBCYWJ5bG9uVmFsdWU+PiB7XHJcbiAgICAgICAgbGV0IG9iamVjdFRyZWU6IGFueSA9IHRoaXMuX2dsdGY7XHJcbiAgICAgICAgbGV0IGluZm9UcmVlOiBhbnkgPSB0aGlzLl9pbmZvVHJlZTtcclxuICAgICAgICBsZXQgdGFyZ2V0OiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICghcGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoIG11c3Qgc3RhcnQgd2l0aCBhIC9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgcGFydHMuc2hpZnQoKTtcclxuXHJcbiAgICAgICAgLy9pZiB0aGUgbGFzdCBwYXJ0IGhhcyBcIi5sZW5ndGhcIiBpbiBpdCwgc2VwYXJhdGUgdGhhdCBhcyBhbiBleHRyYSBwYXJ0XHJcbiAgICAgICAgaWYgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLmluY2x1ZGVzKFwiLmxlbmd0aFwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0UGFydCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdCA9IGxhc3RQYXJ0LnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgcGFydHMucG9wKCk7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2goLi4uc3BsaXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlnbm9yZU9iamVjdFRyZWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGVuZ3RoID0gcGFydCA9PT0gXCJsZW5ndGhcIjtcclxuICAgICAgICAgICAgaWYgKGlzTGVuZ3RoICYmICFpbmZvVHJlZS5fX2FycmF5X18pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUGF0aCAke3BhdGh9IGlzIGludmFsaWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mb1RyZWUuX19pZ25vcmVPYmplY3RUcmVlX18pIHtcclxuICAgICAgICAgICAgICAgIGlnbm9yZU9iamVjdFRyZWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbmZvVHJlZS5fX2FycmF5X18gJiYgIWlzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvVHJlZSA9IGluZm9UcmVlLl9fYXJyYXlfXztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZm9UcmVlID0gaW5mb1RyZWVbcGFydF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluZm9UcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXRoICR7cGF0aH0gaXMgaW52YWxpZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaWdub3JlT2JqZWN0VHJlZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFRyZWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBwYXRoIGlzIGluIHRoZSBleGNlcHRpb24gbGlzdC4gSWYgaXQgaXMsIGJyZWFrIGFuZCByZXR1cm4gdGhlIGxhc3Qgb2JqZWN0IHRoYXQgd2FzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhjZXB0aW9uID0gT3B0aW9uYWxQYXRoRXhjZXB0aW9uc0xpc3QuZmluZCgoZSkgPT4gZS5yZWdleC50ZXN0KHBhdGgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhdGggJHtwYXRofSBpcyBpbnZhbGlkYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUcmVlID0gb2JqZWN0VHJlZT8uW3BhcnRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5mb1RyZWUuX190YXJnZXRfXyB8fCBpc0xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gb2JqZWN0VHJlZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb2JqZWN0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgIGluZm86IGluZm9UcmVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXG5cbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb24sIElDYW1lcmEsIElHTFRGLCBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIElFWFRMaWdodHNBcmVhX0xpZ2h0LCBJTWF0ZXJpYWwsIElNZXNoLCBJTm9kZSB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xuaW1wb3J0IHR5cGUgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB7IE1hdHJpeCwgUXVhdGVybmlvbiwgVmVjdG9yMiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHR5cGUgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XG5pbXBvcnQgdHlwZSB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5pbXBvcnQgeyBTcG90TGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvc3BvdExpZ2h0XCI7XG5pbXBvcnQgdHlwZSB7IElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcbmltcG9ydCB0eXBlIHsgSUludGVycG9sYXRpb25Qcm9wZXJ0eUluZm8sIElPYmplY3RBY2Nlc3NvciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC90eXBlRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB7IEdMVEZQYXRoVG9PYmplY3RDb252ZXJ0ZXIgfSBmcm9tIFwiLi9nbHRmUGF0aFRvT2JqZWN0Q29udmVydGVyXCI7XG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcbmltcG9ydCB0eXBlIHsgUmVjdEFyZWFMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9yZWN0QXJlYUxpZ2h0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZPYmplY3RNb2RlbFRyZWUge1xuICAgIGNhbWVyYXM6IElHTFRGT2JqZWN0TW9kZWxUcmVlQ2FtZXJhc09iamVjdDtcbiAgICBub2RlczogSUdMVEZPYmplY3RNb2RlbFRyZWVOb2Rlc09iamVjdDtcbiAgICBtYXRlcmlhbHM6IElHTFRGT2JqZWN0TW9kZWxUcmVlTWF0ZXJpYWxzT2JqZWN0O1xuICAgIGV4dGVuc2lvbnM6IElHTFRGT2JqZWN0TW9kZWxUcmVlRXh0ZW5zaW9uc09iamVjdDtcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAgIGxlbmd0aDogSU9iamVjdEFjY2Vzc29yPElBbmltYXRpb25bXSwgQW5pbWF0aW9uR3JvdXBbXSwgbnVtYmVyPjtcbiAgICAgICAgX19hcnJheV9fOiB7fTtcbiAgICB9O1xuICAgIG1lc2hlczoge1xuICAgICAgICBsZW5ndGg6IElPYmplY3RBY2Nlc3NvcjxJTWVzaFtdLCAoTWVzaCB8IHVuZGVmaW5lZClbXSwgbnVtYmVyPjtcbiAgICAgICAgX19hcnJheV9fOiB7fTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGT2JqZWN0TW9kZWxUcmVlTm9kZXNPYmplY3Q8R0xURlRhcmdldFR5cGUgPSBJTm9kZSwgQmFieWxvblRhcmdldFR5cGUgPSBUcmFuc2Zvcm1Ob2RlPiB7XG4gICAgbGVuZ3RoOiBJT2JqZWN0QWNjZXNzb3I8R0xURlRhcmdldFR5cGVbXSwgQmFieWxvblRhcmdldFR5cGVbXSwgbnVtYmVyPjtcbiAgICBfX2FycmF5X186IHtcbiAgICAgICAgX190YXJnZXRfXzogYm9vbGVhbjtcbiAgICAgICAgdHJhbnNsYXRpb246IElPYmplY3RBY2Nlc3NvcjxHTFRGVGFyZ2V0VHlwZSwgQmFieWxvblRhcmdldFR5cGUsIFZlY3RvcjM+O1xuICAgICAgICByb3RhdGlvbjogSU9iamVjdEFjY2Vzc29yPEdMVEZUYXJnZXRUeXBlLCBCYWJ5bG9uVGFyZ2V0VHlwZSwgUXVhdGVybmlvbj47XG4gICAgICAgIHNjYWxlOiBJT2JqZWN0QWNjZXNzb3I8R0xURlRhcmdldFR5cGUsIEJhYnlsb25UYXJnZXRUeXBlLCBWZWN0b3IzPjtcbiAgICAgICAgbWF0cml4OiBJT2JqZWN0QWNjZXNzb3I8R0xURlRhcmdldFR5cGUsIEJhYnlsb25UYXJnZXRUeXBlLCBNYXRyaXg+O1xuICAgICAgICBnbG9iYWxNYXRyaXg6IElPYmplY3RBY2Nlc3NvcjxHTFRGVGFyZ2V0VHlwZSwgQmFieWxvblRhcmdldFR5cGUsIE1hdHJpeD47XG4gICAgICAgIHdlaWdodHM6IHtcbiAgICAgICAgICAgIGxlbmd0aDogSU9iamVjdEFjY2Vzc29yPEdMVEZUYXJnZXRUeXBlLCBCYWJ5bG9uVGFyZ2V0VHlwZSwgbnVtYmVyPjtcbiAgICAgICAgICAgIF9fYXJyYXlfXzogeyBfX3RhcmdldF9fOiBib29sZWFuIH0gJiBJT2JqZWN0QWNjZXNzb3I8R0xURlRhcmdldFR5cGUsIEJhYnlsb25UYXJnZXRUeXBlLCBudW1iZXI+O1xuICAgICAgICB9ICYgSU9iamVjdEFjY2Vzc29yPEdMVEZUYXJnZXRUeXBlLCBCYWJ5bG9uVGFyZ2V0VHlwZSwgbnVtYmVyW10+O1xuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBFWFRfbGlnaHRzX2llcz86IHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsaWVyOiBJT2JqZWN0QWNjZXNzb3I8SU5vZGUsIExpZ2h0LCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBJT2JqZWN0QWNjZXNzb3I8SU5vZGUsIExpZ2h0LCBDb2xvcjM+O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEtIUl9ub2RlX3Zpc2liaWxpdHk/OiB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogSU9iamVjdEFjY2Vzc29yPElOb2RlLCBNZXNoLCBib29sZWFuPjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR0xURk9iamVjdE1vZGVsVHJlZUNhbWVyYXNPYmplY3Qge1xuICAgIF9fYXJyYXlfXzoge1xuICAgICAgICBfX3RhcmdldF9fOiBib29sZWFuO1xuICAgICAgICBvcnRob2dyYXBoaWM6IHtcbiAgICAgICAgICAgIHhtYWc6IElPYmplY3RBY2Nlc3NvcjxJQ2FtZXJhLCBJQ2FtZXJhLCBWZWN0b3IyPjtcbiAgICAgICAgICAgIHltYWc6IElPYmplY3RBY2Nlc3NvcjxJQ2FtZXJhLCBJQ2FtZXJhLCBWZWN0b3IyPjtcbiAgICAgICAgICAgIHpmYXI6IElPYmplY3RBY2Nlc3NvcjxJQ2FtZXJhLCBJQ2FtZXJhLCBudW1iZXI+O1xuICAgICAgICAgICAgem5lYXI6IElPYmplY3RBY2Nlc3NvcjxJQ2FtZXJhLCBJQ2FtZXJhLCBudW1iZXI+O1xuICAgICAgICB9O1xuICAgICAgICBwZXJzcGVjdGl2ZToge1xuICAgICAgICAgICAgeWZvdjogSU9iamVjdEFjY2Vzc29yPElDYW1lcmEsIElDYW1lcmEsIG51bWJlcj47XG4gICAgICAgICAgICB6ZmFyOiBJT2JqZWN0QWNjZXNzb3I8SUNhbWVyYSwgSUNhbWVyYSwgbnVtYmVyPjtcbiAgICAgICAgICAgIHpuZWFyOiBJT2JqZWN0QWNjZXNzb3I8SUNhbWVyYSwgSUNhbWVyYSwgbnVtYmVyPjtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBJT2JqZWN0QWNjZXNzb3I8SUNhbWVyYSwgSUNhbWVyYSwgTnVsbGFibGU8bnVtYmVyPj47XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR0xURk9iamVjdE1vZGVsVHJlZU1hdGVyaWFsc09iamVjdCB7XG4gICAgX19hcnJheV9fOiB7XG4gICAgICAgIF9fdGFyZ2V0X186IGJvb2xlYW47XG4gICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzOiB7XG4gICAgICAgICAgICBiYXNlQ29sb3JGYWN0b3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBDb2xvcjQ+O1xuICAgICAgICAgICAgbWV0YWxsaWNGYWN0b3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBOdWxsYWJsZTxudW1iZXI+PjtcbiAgICAgICAgICAgIHJvdWdobmVzc0ZhY3RvcjogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIE51bGxhYmxlPG51bWJlcj4+O1xuICAgICAgICAgICAgYmFzZUNvbG9yVGV4dHVyZToge1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBJVGV4dHVyZURlZmluaXRpb247XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmU6IHtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBlbWlzc2l2ZUZhY3RvcjogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIENvbG9yMz47XG4gICAgICAgIG5vcm1hbFRleHR1cmU6IHtcbiAgICAgICAgICAgIHNjYWxlOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IElUZXh0dXJlRGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIG9jY2x1c2lvblRleHR1cmU6IHtcbiAgICAgICAgICAgIHN0cmVuZ3RoOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IElUZXh0dXJlRGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGVtaXNzaXZlVGV4dHVyZToge1xuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5OiB7XG4gICAgICAgICAgICAgICAgYW5pc290cm9weVN0cmVuZ3RoOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5Um90YXRpb246IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19jbGVhcmNvYXQ6IHtcbiAgICAgICAgICAgICAgICBjbGVhcmNvYXRGYWN0b3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIGNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIG51bWJlcj47XG4gICAgICAgICAgICAgICAgY2xlYXJjb2F0VGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IElUZXh0dXJlRGVmaW5pdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNsZWFyY29hdE5vcm1hbFRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IElUZXh0dXJlRGVmaW5pdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNsZWFyY29hdFJvdWdobmVzc1RleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBJVGV4dHVyZURlZmluaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb246IHtcbiAgICAgICAgICAgICAgICBkaXNwZXJzaW9uOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2VtaXNzaXZlX3N0cmVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgZW1pc3NpdmVTdHJlbmd0aDogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIG51bWJlcj47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19pb3I6IHtcbiAgICAgICAgICAgICAgICBpb3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2U6IHtcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZUZhY3RvcjogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIG51bWJlcj47XG4gICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VJb3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bTogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIG51bWJlcj47XG4gICAgICAgICAgICAgICAgaXJpZGVzY2VuY2VUaGlja25lc3NNYXhpbXVtOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBJVGV4dHVyZURlZmluaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBJVGV4dHVyZURlZmluaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX3NoZWVuOiB7XG4gICAgICAgICAgICAgICAgc2hlZW5Db2xvckZhY3RvcjogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIENvbG9yMz47XG4gICAgICAgICAgICAgICAgc2hlZW5Sb3VnaG5lc3NGYWN0b3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIHNoZWVuQ29sb3JUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2hlZW5Sb3VnaG5lc3NUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19zcGVjdWxhcjoge1xuICAgICAgICAgICAgICAgIHNwZWN1bGFyRmFjdG9yOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBzcGVjdWxhckNvbG9yRmFjdG9yOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgQ29sb3IzPjtcbiAgICAgICAgICAgICAgICBzcGVjdWxhclRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBJVGV4dHVyZURlZmluaXRpb247XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzcGVjdWxhckNvbG9yVGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IElUZXh0dXJlRGVmaW5pdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNtaXNzaW9uRmFjdG9yOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICB0cmFuc21pc3Npb25UZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbjoge1xuICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25GYWN0b3I6IElPYmplY3RBY2Nlc3NvcjxJTWF0ZXJpYWwsIFBCUk1hdGVyaWFsLCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgTnVsbGFibGU8Q29sb3IzPj47XG4gICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yVGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IElUZXh0dXJlRGVmaW5pdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfdm9sdW1lOiB7XG4gICAgICAgICAgICAgICAgdGhpY2tuZXNzRmFjdG9yOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgQ29sb3IzPjtcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkRpc3RhbmNlOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICB0aGlja25lc3NUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogSVRleHR1cmVEZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmludGVyZmFjZSBJVGV4dHVyZURlZmluaXRpb24ge1xuICAgIG9mZnNldDogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIFZlY3RvcjI+O1xuICAgIHJvdGF0aW9uOiBJT2JqZWN0QWNjZXNzb3I8SU1hdGVyaWFsLCBQQlJNYXRlcmlhbCwgbnVtYmVyPjtcbiAgICBzY2FsZTogSU9iamVjdEFjY2Vzc29yPElNYXRlcmlhbCwgUEJSTWF0ZXJpYWwsIFZlY3RvcjI+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGT2JqZWN0TW9kZWxUcmVlTWVzaGVzT2JqZWN0IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZPYmplY3RNb2RlbFRyZWVFeHRlbnNpb25zT2JqZWN0IHtcbiAgICBLSFJfbGlnaHRzX3B1bmN0dWFsOiB7XG4gICAgICAgIGxpZ2h0czoge1xuICAgICAgICAgICAgbGVuZ3RoOiBJT2JqZWN0QWNjZXNzb3I8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0W10sIExpZ2h0W10sIG51bWJlcj47XG4gICAgICAgICAgICBfX2FycmF5X186IHtcbiAgICAgICAgICAgICAgICBfX3RhcmdldF9fOiBib29sZWFuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBJT2JqZWN0QWNjZXNzb3I8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBMaWdodCwgQ29sb3IzPjtcbiAgICAgICAgICAgICAgICBpbnRlbnNpdHk6IElPYmplY3RBY2Nlc3NvcjxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIExpZ2h0LCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIHJhbmdlOiBJT2JqZWN0QWNjZXNzb3I8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBMaWdodCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICBzcG90OiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyQ29uZUFuZ2xlOiBJT2JqZWN0QWNjZXNzb3I8SUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBMaWdodCwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICAgICAgb3V0ZXJDb25lQW5nbGU6IElPYmplY3RBY2Nlc3NvcjxJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQsIExpZ2h0LCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgRVhUX2xpZ2h0c19hcmVhOiB7XG4gICAgICAgIGxpZ2h0czoge1xuICAgICAgICAgICAgbGVuZ3RoOiBJT2JqZWN0QWNjZXNzb3I8SUVYVExpZ2h0c0FyZWFfTGlnaHRbXSwgTGlnaHRbXSwgbnVtYmVyPjtcbiAgICAgICAgICAgIF9fYXJyYXlfXzoge1xuICAgICAgICAgICAgICAgIF9fdGFyZ2V0X186IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgY29sb3I6IElPYmplY3RBY2Nlc3NvcjxJRVhUTGlnaHRzQXJlYV9MaWdodCwgTGlnaHQsIENvbG9yMz47XG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBJT2JqZWN0QWNjZXNzb3I8SUVYVExpZ2h0c0FyZWFfTGlnaHQsIExpZ2h0LCBudW1iZXI+O1xuICAgICAgICAgICAgICAgIHNpemU6IElPYmplY3RBY2Nlc3NvcjxJRVhUTGlnaHRzQXJlYV9MaWdodCwgTGlnaHQsIG51bWJlcj47XG4gICAgICAgICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgICAgICAgICBhc3BlY3Q6IElPYmplY3RBY2Nlc3NvcjxJRVhUTGlnaHRzQXJlYV9MaWdodCwgTGlnaHQsIG51bWJlcj47XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBFWFRfbGlnaHRzX2llczoge1xuICAgICAgICBsaWdodHM6IHtcbiAgICAgICAgICAgIGxlbmd0aDogSU9iamVjdEFjY2Vzc29yPElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFtdLCBMaWdodFtdLCBudW1iZXI+O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgRVhUX2xpZ2h0c19pbWFnZV9iYXNlZDoge1xuICAgICAgICBsaWdodHM6IHtcbiAgICAgICAgICAgIF9fYXJyYXlfXzoge1xuICAgICAgICAgICAgICAgIF9fdGFyZ2V0X186IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBJT2JqZWN0QWNjZXNzb3I8SUVYVExpZ2h0c0ltYWdlQmFzZWRfTGlnaHRJbWFnZUJhc2VkLCBCYXNlVGV4dHVyZSwgbnVtYmVyPjtcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogSU9iamVjdEFjY2Vzc29yPElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZCwgQmFzZVRleHR1cmUsIFF1YXRlcm5pb24+O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxlbmd0aDogSU9iamVjdEFjY2Vzc29yPElFWFRMaWdodHNJbWFnZUJhc2VkX0xpZ2h0SW1hZ2VCYXNlZFtdLCBCYXNlVGV4dHVyZVtdLCBudW1iZXI+O1xuICAgICAgICB9O1xuICAgIH07XG59XG5cbmNvbnN0IG5vZGVzVHJlZTogSUdMVEZPYmplY3RNb2RlbFRyZWVOb2Rlc09iamVjdCA9IHtcbiAgICBsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgZ2V0OiAobm9kZXM6IElOb2RlW10pID0+IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgZ2V0VGFyZ2V0OiAobm9kZXM6IElOb2RlW10pID0+IG5vZGVzLm1hcCgobm9kZSkgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUhKSxcbiAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJsZW5ndGhcIl0sXG4gICAgfSxcbiAgICBfX2FycmF5X186IHtcbiAgICAgICAgX190YXJnZXRfXzogdHJ1ZSxcbiAgICAgICAgdHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwiVmVjdG9yM1wiLFxuICAgICAgICAgICAgZ2V0OiAobm9kZTogSU5vZGUpID0+IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlPy5wb3NpdGlvbixcbiAgICAgICAgICAgIHNldDogKHZhbHVlOiBWZWN0b3IzLCBub2RlOiBJTm9kZSkgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnBvc2l0aW9uLmNvcHlGcm9tKHZhbHVlKSxcbiAgICAgICAgICAgIGdldFRhcmdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSxcbiAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwicG9zaXRpb25cIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcIlF1YXRlcm5pb25cIixcbiAgICAgICAgICAgIGdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8ucm90YXRpb25RdWF0ZXJuaW9uISxcbiAgICAgICAgICAgIHNldDogKHZhbHVlOiBRdWF0ZXJuaW9uLCBub2RlOiBJTm9kZSkgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnJvdGF0aW9uUXVhdGVybmlvbj8uY29weUZyb20odmFsdWUpLFxuICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobm9kZTogSU5vZGUpID0+IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLFxuICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJyb3RhdGlvblF1YXRlcm5pb25cIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBcIlZlY3RvcjNcIixcbiAgICAgICAgICAgIGdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uc2NhbGluZyxcbiAgICAgICAgICAgIHNldDogKHZhbHVlOiBWZWN0b3IzLCBub2RlOiBJTm9kZSkgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnNjYWxpbmcuY29weUZyb20odmFsdWUpLFxuICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobm9kZTogSU5vZGUpID0+IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLFxuICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJzY2FsaW5nXCJdLFxuICAgICAgICB9LFxuICAgICAgICB3ZWlnaHRzOiB7XG4gICAgICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9udW1Nb3JwaFRhcmdldHMsXG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobm9kZTogSU5vZGUpID0+IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwiaW5mbHVlbmNlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9fYXJyYXlfXzoge1xuICAgICAgICAgICAgICAgIF9fdGFyZ2V0X186IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBnZXQ6IChub2RlOiBJTm9kZSwgaW5kZXg/OiBudW1iZXIpID0+IChpbmRleCAhPT0gdW5kZWZpbmVkID8gbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcz8uWzBdLm1vcnBoVGFyZ2V0TWFuYWdlcj8uZ2V0VGFyZ2V0KGluZGV4KS5pbmZsdWVuY2UgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIC8vIHNldDogKHZhbHVlOiBudW1iZXIsIG5vZGU6IElOb2RlLCBpbmRleD86IG51bWJlcikgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LmdldE1vcnBoVGFyZ2V0TWFuYWdlcigpPy5nZXRUYXJnZXQoaW5kZXgpPy5zZXRJbmZsdWVuY2UodmFsdWUpLFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSxcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImluZmx1ZW5jZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlcltdXCIsXG4gICAgICAgICAgICBnZXQ6IChub2RlOiBJTm9kZSwgaW5kZXg/OiBudW1iZXIpID0+IFswXSwgLy8gVE9ETzogZ2V0IHRoZSB3ZWlnaHRzIGNvcnJlY3RseVxuICAgICAgICAgICAgLy8gc2V0OiAodmFsdWU6IG51bWJlciwgbm9kZTogSU5vZGUsIGluZGV4PzogbnVtYmVyKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uZ2V0TW9ycGhUYXJnZXRNYW5hZ2VyKCk/LmdldFRhcmdldChpbmRleCk/LnNldEluZmx1ZW5jZSh2YWx1ZSksXG4gICAgICAgICAgICBnZXRUYXJnZXQ6IChub2RlOiBJTm9kZSkgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUsXG4gICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImluZmx1ZW5jZVwiXSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmVhZG9ubHkhXG4gICAgICAgIG1hdHJpeDoge1xuICAgICAgICAgICAgdHlwZTogXCJNYXRyaXhcIixcbiAgICAgICAgICAgIGdldDogKG5vZGU6IElOb2RlKSA9PiBNYXRyaXguQ29tcG9zZShub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uc2NhbGluZyEsIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlPy5yb3RhdGlvblF1YXRlcm5pb24hLCBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8ucG9zaXRpb24hKSxcbiAgICAgICAgICAgIGdldFRhcmdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSxcbiAgICAgICAgICAgIGlzUmVhZE9ubHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGdsb2JhbE1hdHJpeDoge1xuICAgICAgICAgICAgdHlwZTogXCJNYXRyaXhcIixcbiAgICAgICAgICAgIGdldDogKG5vZGU6IElOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gTWF0cml4LklkZW50aXR5KCk7XG4gICAgICAgICAgICAgICAgLy8gUkhTL0xIUyBzdXBwb3J0XG4gICAgICAgICAgICAgICAgbGV0IHJvb3ROb2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJvb3ROb2RlICYmIHJvb3ROb2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICByb290Tm9kZSA9IHJvb3ROb2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZm9yY2VVcGRhdGUgPVxuICAgICAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8ucG9zaXRpb24uX2lzRGlydHkgfHwgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnJvdGF0aW9uUXVhdGVybmlvbj8uX2lzRGlydHkgfHwgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnNjYWxpbmcuX2lzRGlydHk7XG4gICAgICAgICAgICAgICAgaWYgKHJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRha2UgdGhlIHBhcmVudCByb290IG5vZGUncyB3b3JsZCBtYXRyaXgsIGludmVydCBpdCwgYW5kIG11bHRpcGx5IGl0IHdpdGggdGhlIGN1cnJlbnQgbm9kZSdzIHdvcmxkIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgcHJvdmlkZSB0aGUgZ2xvYmFsIG1hdHJpeCwgaWdub3JpbmcgdGhlIFJIUy0+TEhTIGNvbnZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm9vdE1hdHJpeCA9IHJvb3ROb2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpLmludmVydCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdE1hdHJpeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LmNvbXB1dGVXb3JsZE1hdHJpeChmb3JjZVVwZGF0ZSk/Lm11bHRpcGx5VG9SZWYocm9vdE1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LmNvcHlGcm9tKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLmNvbXB1dGVXb3JsZE1hdHJpeChmb3JjZVVwZGF0ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRhcmdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZSxcbiAgICAgICAgICAgIGlzUmVhZE9ubHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIEVYVF9saWdodHNfaWVzOiB7XG4gICAgICAgICAgICAgICAgbXVsdGlwbGllcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChub2RlOiBJTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlPy5nZXRDaGlsZHJlbigoY2hpbGQpID0+IGNoaWxkIGluc3RhbmNlb2YgU3BvdExpZ2h0LCB0cnVlKVswXT8uaW50ZW5zaXR5O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChub2RlOiBJTm9kZSkgPT4gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LmdldENoaWxkcmVuKChjaGlsZCkgPT4gY2hpbGQgaW5zdGFuY2VvZiBTcG90TGlnaHQsIHRydWUpWzBdLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRDaGlsZHJlbigoY2hpbGQpID0+IGNoaWxkIGluc3RhbmNlb2YgU3BvdExpZ2h0LCB0cnVlKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuaW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDb2xvcjNcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobm9kZTogSU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uZ2V0Q2hpbGRyZW4oKGNoaWxkKSA9PiBjaGlsZCBpbnN0YW5jZW9mIFNwb3RMaWdodCwgdHJ1ZSlbMF0/LmRpZmZ1c2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKG5vZGU6IElOb2RlKSA9PiBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uZ2V0Q2hpbGRyZW4oKGNoaWxkKSA9PiBjaGlsZCBpbnN0YW5jZW9mIFNwb3RMaWdodCwgdHJ1ZSlbMF0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBub2RlOiBJTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZS5nZXRDaGlsZHJlbigoY2hpbGQpID0+IGNoaWxkIGluc3RhbmNlb2YgU3BvdExpZ2h0LCB0cnVlKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuZGlmZnVzZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEtIUl9ub2RlX3Zpc2liaWxpdHk6IHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChub2RlOiBJTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMgPyBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzWzBdLmlzVmlzaWJsZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6ICgpID0+IHVuZGVmaW5lZCwgLy8gVE9ETzogd2hhdCBzaG91bGQgdGhpcyByZXR1cm4/XG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlOiBib29sZWFuLCBub2RlOiBJTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLl9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzLmZvckVhY2goKG1lc2gpID0+IChtZXNoLmlzVmlzaWJsZSA9IHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmNvbnN0IGFuaW1hdGlvbnNUcmVlID0ge1xuICAgIGxlbmd0aDoge1xuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICBnZXQ6IChhbmltYXRpb25zOiBJQW5pbWF0aW9uW10pID0+IGFuaW1hdGlvbnMubGVuZ3RoLFxuICAgICAgICBnZXRUYXJnZXQ6IChhbmltYXRpb25zOiBJQW5pbWF0aW9uW10pID0+IGFuaW1hdGlvbnMubWFwKChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwISksXG4gICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwibGVuZ3RoXCJdLFxuICAgIH0sXG4gICAgX19hcnJheV9fOiB7fSxcbn07XG5cbmNvbnN0IG1lc2hlc1RyZWUgPSB7XG4gICAgbGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgIGdldDogKG1lc2hlczogSU1lc2hbXSkgPT4gbWVzaGVzLmxlbmd0aCxcbiAgICAgICAgZ2V0VGFyZ2V0OiAobWVzaGVzOiBJTWVzaFtdKSA9PiBtZXNoZXMubWFwKChtZXNoKSA9PiBtZXNoLnByaW1pdGl2ZXNbMF0uX2luc3RhbmNlRGF0YT8uYmFieWxvblNvdXJjZU1lc2gpLFxuICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImxlbmd0aFwiXSxcbiAgICB9LFxuICAgIF9fYXJyYXlfXzoge30sXG59O1xuXG5jb25zdCBjYW1lcmFzVHJlZTogSUdMVEZPYmplY3RNb2RlbFRyZWVDYW1lcmFzT2JqZWN0ID0ge1xuICAgIF9fYXJyYXlfXzoge1xuICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxuICAgICAgICBvcnRob2dyYXBoaWM6IHtcbiAgICAgICAgICAgIHhtYWc6IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzQ291bnQ6IDIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWZWN0b3IyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAoY2FtZXJhKSA9PiBuZXcgVmVjdG9yMihjYW1lcmEuX2JhYnlsb25DYW1lcmE/Lm9ydGhvTGVmdCA/PyAwLCBjYW1lcmEuX2JhYnlsb25DYW1lcmE/Lm9ydGhvUmlnaHQgPz8gMCksXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIGNhbWVyYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuX2JhYnlsb25DYW1lcmEub3J0aG9MZWZ0ID0gdmFsdWUueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5fYmFieWxvbkNhbWVyYS5vcnRob1JpZ2h0ID0gdmFsdWUueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAoY2FtZXJhKSA9PiBjYW1lcmEsXG4gICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJvcnRob0xlZnRcIiwgKCkgPT4gXCJvcnRob1JpZ2h0XCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHltYWc6IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzQ291bnQ6IDIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJWZWN0b3IyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAoY2FtZXJhOiBJQ2FtZXJhKSA9PiBuZXcgVmVjdG9yMihjYW1lcmEuX2JhYnlsb25DYW1lcmE/Lm9ydGhvQm90dG9tID8/IDAsIGNhbWVyYS5fYmFieWxvbkNhbWVyYT8ub3J0aG9Ub3AgPz8gMCksXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IFZlY3RvcjIsIGNhbWVyYTogSUNhbWVyYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuX2JhYnlsb25DYW1lcmEub3J0aG9Cb3R0b20gPSB2YWx1ZS54O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhLm9ydGhvVG9wID0gdmFsdWUueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAoY2FtZXJhKSA9PiBjYW1lcmEsXG4gICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJvcnRob0JvdHRvbVwiLCAoKSA9PiBcIm9ydGhvVG9wXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpmYXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhPy5tYXhaLFxuICAgICAgICAgICAgICAgIHNldDogKHZhbHVlOiBudW1iZXIsIGNhbWVyYTogSUNhbWVyYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuX2JhYnlsb25DYW1lcmEubWF4WiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChjYW1lcmE6IElDYW1lcmEpID0+IGNhbWVyYSxcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcIm1heFpcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem5lYXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhPy5taW5aLFxuICAgICAgICAgICAgICAgIHNldDogKHZhbHVlOiBudW1iZXIsIGNhbWVyYTogSUNhbWVyYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuX2JhYnlsb25DYW1lcmEubWluWiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChjYW1lcmE6IElDYW1lcmEpID0+IGNhbWVyYSxcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcIm1pblpcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwZXJzcGVjdGl2ZToge1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhPy5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEuX2JhYnlsb25DYW1lcmEpLFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwiYXNwZWN0UmF0aW9cIl0sXG4gICAgICAgICAgICAgICAgaXNSZWFkT25seTogdHJ1ZSwgLy8gbWlnaHQgbm90IGJlIHRoZSBjYXNlIGZvciBnbFRGP1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlmb3Y6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLl9iYWJ5bG9uQ2FtZXJhPy5mb3YsXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgY2FtZXJhOiBJQ2FtZXJhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW1lcmEuX2JhYnlsb25DYW1lcmEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5fYmFieWxvbkNhbWVyYS5mb3YgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAoY2FtZXJhOiBJQ2FtZXJhKSA9PiBjYW1lcmEsXG4gICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJmb3ZcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgemZhcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAoY2FtZXJhOiBJQ2FtZXJhKSA9PiBjYW1lcmEuX2JhYnlsb25DYW1lcmE/Lm1heFosXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgY2FtZXJhOiBJQ2FtZXJhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW1lcmEuX2JhYnlsb25DYW1lcmEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5fYmFieWxvbkNhbWVyYS5tYXhaID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwibWF4WlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6bmVhcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAoY2FtZXJhOiBJQ2FtZXJhKSA9PiBjYW1lcmEuX2JhYnlsb25DYW1lcmE/Lm1pblosXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgY2FtZXJhOiBJQ2FtZXJhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW1lcmEuX2JhYnlsb25DYW1lcmEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5fYmFieWxvbkNhbWVyYS5taW5aID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGNhbWVyYTogSUNhbWVyYSkgPT4gY2FtZXJhLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwibWluWlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmNvbnN0IG1hdGVyaWFsc1RyZWU6IElHTFRGT2JqZWN0TW9kZWxUcmVlTWF0ZXJpYWxzT2JqZWN0ID0ge1xuICAgIF9fYXJyYXlfXzoge1xuICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxuICAgICAgICBlbWlzc2l2ZUZhY3Rvcjoge1xuICAgICAgICAgICAgdHlwZTogXCJDb2xvcjNcIixcbiAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmVtaXNzaXZlQ29sb3IsXG4gICAgICAgICAgICBzZXQ6ICh2YWx1ZTogQ29sb3IzLCBtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5lbWlzc2l2ZUNvbG9yLmNvcHlGcm9tKHZhbHVlKSxcbiAgICAgICAgICAgIGdldFRhcmdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLFxuICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJlbWlzc2l2ZUNvbG9yXCJdLFxuICAgICAgICB9LFxuICAgICAgICBlbWlzc2l2ZVRleHR1cmU6IHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IEdlbmVyYXRlVGV4dHVyZU1hcChcImVtaXNzaXZlVGV4dHVyZVwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG5vcm1hbFRleHR1cmU6IHtcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4gR2V0VGV4dHVyZShtYXRlcmlhbCwgcGF5bG9hZCwgXCJidW1wVGV4dHVyZVwiKT8ubGV2ZWwsXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgbWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IEdldFRleHR1cmUobWF0ZXJpYWwsIHBheWxvYWQsIFwiYnVtcFRleHR1cmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmxldmVsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwibGV2ZWxcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogR2VuZXJhdGVUZXh0dXJlTWFwKFwiYnVtcFRleHR1cmVcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvY2NsdXNpb25UZXh0dXJlOiB7XG4gICAgICAgICAgICBzdHJlbmd0aDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuYW1iaWVudFRleHR1cmVTdHJlbmd0aCxcbiAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZTogbnVtYmVyLCBtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQuYW1iaWVudFRleHR1cmVTdHJlbmd0aCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImFtYmllbnRUZXh0dXJlU3RyZW5ndGhcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogR2VuZXJhdGVUZXh0dXJlTWFwKFwiYW1iaWVudFRleHR1cmVcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzczoge1xuICAgICAgICAgICAgYmFzZUNvbG9yRmFjdG9yOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJDb2xvcjRcIixcbiAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ29sb3I0LkZyb21Db2xvcjMobWF0LmFsYmVkb0NvbG9yLCBtYXQuYWxwaGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IENvbG9yNCwgbWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0LmFsYmVkb0NvbG9yLnNldCh2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iKTtcbiAgICAgICAgICAgICAgICAgICAgbWF0LmFscGhhID0gdmFsdWUuYTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLFxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgY29ycmVjdCBvbiB0aGUgYW5pbWF0aW9uIGxldmVsLCBidXQgaW5jb3JyZWN0IGFzIGEgc2luZ2xlIHByb3BlcnR5IG9mIGEgdHlwZSBDb2xvcjRcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImFsYmVkb0NvbG9yXCIsICgpID0+IFwiYWxwaGFcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFzZUNvbG9yVGV4dHVyZToge1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJhbGJlZG9UZXh0dXJlXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YWxsaWNGYWN0b3I6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLm1ldGFsbGljLFxuICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQubWV0YWxsaWMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCksXG4gICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJtZXRhbGxpY1wiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb3VnaG5lc3NGYWN0b3I6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLnJvdWdobmVzcyxcbiAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LnJvdWdobmVzcyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcInJvdWdobmVzc1wiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmU6IHtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogR2VuZXJhdGVUZXh0dXJlTWFwKFwibWV0YWxsaWNUZXh0dXJlXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHk6IHtcbiAgICAgICAgICAgICAgICBhbmlzb3Ryb3B5U3RyZW5ndGg6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuYW5pc290cm9weS5pbnRlbnNpdHksXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlOiBudW1iZXIsIG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmFuaXNvdHJvcHkuaW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLFxuICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImFuaXNvdHJvcHkuaW50ZW5zaXR5XCJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYW5pc290cm9weVJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmFuaXNvdHJvcHkuYW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlOiBudW1iZXIsIG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmFuaXNvdHJvcHkuYW5nbGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCksXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwiYW5pc290cm9weS5hbmdsZVwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFuaXNvdHJvcHlUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogR2VuZXJhdGVUZXh0dXJlTWFwKFwiYW5pc290cm9weVwiLCBcInRleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdDoge1xuICAgICAgICAgICAgICAgIGNsZWFyY29hdEZhY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5jbGVhckNvYXQuaW50ZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4PywgcGF5bG9hZD8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuY2xlYXJDb2F0LmludGVuc2l0eSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gXCJjbGVhckNvYXQuaW50ZW5zaXR5XCJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmNsZWFyQ29hdC5yb3VnaG5lc3MsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5jbGVhckNvYXQucm91Z2huZXNzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKG1hdGVyaWFsLCBpbmRleD8sIHBheWxvYWQ/KSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLFxuICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcImNsZWFyQ29hdC5yb3VnaG5lc3NcIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGVhcmNvYXRUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogR2VuZXJhdGVUZXh0dXJlTWFwKFwiY2xlYXJDb2F0XCIsIFwidGV4dHVyZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsZWFyY29hdE5vcm1hbFRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuY2xlYXJDb2F0LmJ1bXBUZXh0dXJlPy5sZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiAoR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5jbGVhckNvYXQuYnVtcFRleHR1cmUhLmxldmVsID0gdmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IEdlbmVyYXRlVGV4dHVyZU1hcChcImNsZWFyQ29hdFwiLCBcImJ1bXBUZXh0dXJlXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IEdlbmVyYXRlVGV4dHVyZU1hcChcImNsZWFyQ29hdFwiLCBcInRleHR1cmVSb3VnaG5lc3NcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2Rpc3BlcnNpb246IHtcbiAgICAgICAgICAgICAgICBkaXNwZXJzaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLmRpc3BlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLnN1YlN1cmZhY2UuZGlzcGVyc2lvbiA9IHZhbHVlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGg6IHtcbiAgICAgICAgICAgICAgICBlbWlzc2l2ZVN0cmVuZ3RoOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5lbWlzc2l2ZUludGVuc2l0eSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gKEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuZW1pc3NpdmVJbnRlbnNpdHkgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX2lvcjoge1xuICAgICAgICAgICAgICAgIGlvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuaW5kZXhPZlJlZnJhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmluZGV4T2ZSZWZyYWN0aW9uID0gdmFsdWUpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZToge1xuICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlRmFjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5pcmlkZXNjZW5jZS5pbnRlbnNpdHksXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmlyaWRlc2NlbmNlLmludGVuc2l0eSA9IHZhbHVlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlyaWRlc2NlbmNlSW9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5pcmlkZXNjZW5jZS5pbmRleE9mUmVmcmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gKEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuaXJpZGVzY2VuY2UuaW5kZXhPZlJlZnJhY3Rpb24gPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJpcmlkZXNjZW5jZVwiLCBcInRleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01heGltdW06IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MsXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmlyaWRlc2NlbmNlLm1heGltdW1UaGlja25lc3MgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc01pbmltdW06IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MsXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLmlyaWRlc2NlbmNlLm1pbmltdW1UaGlja25lc3MgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJpcmlkZXNjZW5jZVwiLCBcInRoaWNrbmVzc1RleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX3NoZWVuOiB7XG4gICAgICAgICAgICAgICAgc2hlZW5Db2xvckZhY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNvbG9yM1wiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuc2hlZW4uY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuc2hlZW4uY29sb3IuY29weUZyb20odmFsdWUpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hlZW5Db2xvclRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJzaGVlblwiLCBcInRleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaGVlblJvdWdobmVzc0ZhY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuc2hlZW4uaW50ZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IEdldE1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiAoR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zaGVlbi5pbnRlbnNpdHkgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaGVlblJvdWdobmVzc1RleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJzaGVlblwiLCBcInRoaWNrbmVzc1RleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyOiB7XG4gICAgICAgICAgICAgICAgc3BlY3VsYXJGYWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLm1ldGFsbGljRjBGYWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLm1ldGFsbGljRjBGYWN0b3IgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwibWV0YWxsaWNGMEZhY3RvclwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWN1bGFyQ29sb3JGYWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDb2xvcjNcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5tZXRhbGxpY1JlZmxlY3RhbmNlQ29sb3IuY29weUZyb20odmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoKSA9PiBcIm1ldGFsbGljUmVmbGVjdGFuY2VDb2xvclwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWN1bGFyVGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IEdlbmVyYXRlVGV4dHVyZU1hcChcIm1ldGFsbGljUmVmbGVjdGFuY2VUZXh0dXJlXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvclRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJyZWZsZWN0YW5jZVRleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbjoge1xuICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbkZhY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuc3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IEdldE1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiAoR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHkgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwic3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5XCJdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJhbnNtaXNzaW9uVGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IEdlbmVyYXRlVGV4dHVyZU1hcChcInN1YlN1cmZhY2VcIiwgXCJyZWZyYWN0aW9uSW50ZW5zaXR5VGV4dHVyZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEtIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb246IHtcbiAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uRmFjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUludGVuc2l0eSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gKEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuc3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lJbnRlbnNpdHkgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBLSFJfdGV4dHVyZV90cmFuc2Zvcm06IEdlbmVyYXRlVGV4dHVyZU1hcChcInN1YlN1cmZhY2VcIiwgXCJ0cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ29sb3IzXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IEdldE1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiB2YWx1ZSAmJiBHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLnN1YlN1cmZhY2UudHJhbnNsdWNlbmN5Q29sb3I/LmNvcHlGcm9tKHZhbHVlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgS0hSX3RleHR1cmVfdHJhbnNmb3JtOiBHZW5lcmF0ZVRleHR1cmVNYXAoXCJzdWJTdXJmYWNlXCIsIFwidHJhbnNsdWNlbmN5Q29sb3JUZXh0dXJlXCIpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgS0hSX21hdGVyaWFsc192b2x1bWU6IHtcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ29sb3IzXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLnRpbnRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLnRpbnRDb2xvci5jb3B5RnJvbSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRlbnVhdGlvbkRpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkgPT4gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLnRpbnRDb2xvckF0RGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogR2V0TWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IChHZXRNYXRlcmlhbChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpLnN1YlN1cmZhY2UudGludENvbG9yQXREaXN0YW5jZSA9IHZhbHVlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaWNrbmVzc0ZhY3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgaW5kZXgsIHBheWxvYWQpID0+IEdldE1hdGVyaWFsKG1hdGVyaWFsLCBpbmRleCwgcGF5bG9hZCkuc3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzLFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IEdldE1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZSwgbWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKSA9PiAoR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIGluZGV4LCBwYXlsb2FkKS5zdWJTdXJmYWNlLm1heGltdW1UaGlja25lc3MgPSB2YWx1ZSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlja25lc3NUZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEtIUl90ZXh0dXJlX3RyYW5zZm9ybTogR2VuZXJhdGVUZXh0dXJlTWFwKFwic3ViU3VyZmFjZVwiLCBcInRoaWNrbmVzc1RleHR1cmVcIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmNvbnN0IGV4dGVuc2lvbnNUcmVlOiBJR0xURk9iamVjdE1vZGVsVHJlZUV4dGVuc2lvbnNPYmplY3QgPSB7XG4gICAgS0hSX2xpZ2h0c19wdW5jdHVhbDoge1xuICAgICAgICBsaWdodHM6IHtcbiAgICAgICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAobGlnaHRzOiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRbXSkgPT4gbGlnaHRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChsaWdodHM6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFtdKSA9PiBsaWdodHMubWFwKChsaWdodCkgPT4gbGlnaHQuX2JhYnlsb25MaWdodCEpLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHRzOiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRbXSkgPT4gXCJsZW5ndGhcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX19hcnJheV9fOiB7XG4gICAgICAgICAgICAgICAgX190YXJnZXRfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNvbG9yM1wiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiBsaWdodC5fYmFieWxvbkxpZ2h0Py5kaWZmdXNlLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZTogQ29sb3IzLCBsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiBsaWdodC5fYmFieWxvbkxpZ2h0Py5kaWZmdXNlLmNvcHlGcm9tKHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gbGlnaHQuX2JhYnlsb25MaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKF9saWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiBcImRpZmZ1c2VcIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gbGlnaHQuX2JhYnlsb25MaWdodD8uaW50ZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZTogbnVtYmVyLCBsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiAobGlnaHQuX2JhYnlsb25MaWdodCA/IChsaWdodC5fYmFieWxvbkxpZ2h0LmludGVuc2l0eSA9IHZhbHVlKSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGxpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gXCJpbnRlbnNpdHlcIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiBsaWdodC5fYmFieWxvbkxpZ2h0Py5yYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgbGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gKGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgPyAobGlnaHQuX2JhYnlsb25MaWdodC5yYW5nZSA9IHZhbHVlKSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGxpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gXCJyYW5nZVwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwb3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJDb25lQW5nbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IChsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiAobGlnaHQuX2JhYnlsb25MaWdodCBhcyBTcG90TGlnaHQpPy5pbm5lckFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgbGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gKGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgPyAoKGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgYXMgU3BvdExpZ2h0KS5pbm5lckFuZ2xlID0gdmFsdWUpIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGxpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoX2xpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQpID0+IFwiaW5uZXJDb25lQW5nbGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG91dGVyQ29uZUFuZ2xlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAobGlnaHQ6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodCkgPT4gKGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgYXMgU3BvdExpZ2h0KT8uYW5nbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZTogbnVtYmVyLCBsaWdodDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0KSA9PiAobGlnaHQuX2JhYnlsb25MaWdodCA/ICgobGlnaHQuX2JhYnlsb25MaWdodCBhcyBTcG90TGlnaHQpLmFuZ2xlID0gdmFsdWUpIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGxpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoX2xpZ2h0OiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHQpID0+IFwib3V0ZXJDb25lQW5nbGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBFWFRfbGlnaHRzX2FyZWE6IHtcbiAgICAgICAgbGlnaHRzOiB7XG4gICAgICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIGdldDogKGxpZ2h0czogSUVYVExpZ2h0c0FyZWFfTGlnaHRbXSkgPT4gbGlnaHRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChsaWdodHM6IElFWFRMaWdodHNBcmVhX0xpZ2h0W10pID0+IGxpZ2h0cy5tYXAoKGxpZ2h0KSA9PiBsaWdodC5fYmFieWxvbkxpZ2h0ISksXG4gICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKF9saWdodHM6IElFWFRMaWdodHNBcmVhX0xpZ2h0W10pID0+IFwibGVuZ3RoXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9fYXJyYXlfXzoge1xuICAgICAgICAgICAgICAgIF9fdGFyZ2V0X186IHRydWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDb2xvcjNcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PiBsaWdodC5fYmFieWxvbkxpZ2h0Py5kaWZmdXNlLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZTogQ29sb3IzLCBsaWdodDogSUVYVExpZ2h0c0FyZWFfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQ/LmRpZmZ1c2UuY29weUZyb20odmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChsaWdodDogSUVYVExpZ2h0c0FyZWFfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PiBcImRpZmZ1c2VcIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PiBsaWdodC5fYmFieWxvbkxpZ2h0Py5pbnRlbnNpdHksXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlOiBudW1iZXIsIGxpZ2h0OiBJRVhUTGlnaHRzQXJlYV9MaWdodCkgPT4gKGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgPyAobGlnaHQuX2JhYnlsb25MaWdodC5pbnRlbnNpdHkgPSB2YWx1ZSkgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChsaWdodDogSUVYVExpZ2h0c0FyZWFfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PiBcImludGVuc2l0eVwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAobGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PiAobGlnaHQuX2JhYnlsb25MaWdodCBhcyBSZWN0QXJlYUxpZ2h0KT8uaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2YWx1ZTogbnVtYmVyLCBsaWdodDogSUVYVExpZ2h0c0FyZWFfTGlnaHQpID0+IChsaWdodC5fYmFieWxvbkxpZ2h0ID8gKChsaWdodC5fYmFieWxvbkxpZ2h0IGFzIFJlY3RBcmVhTGlnaHQpLmhlaWdodCA9IHZhbHVlKSA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGxpZ2h0OiBJRVhUTGlnaHRzQXJlYV9MaWdodCkgPT4gbGlnaHQuX2JhYnlsb25MaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKF9saWdodDogSUVYVExpZ2h0c0FyZWFfTGlnaHQpID0+IFwic2l6ZVwiXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiAobGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PiAobGlnaHQuX2JhYnlsb25MaWdodCBhcyBSZWN0QXJlYUxpZ2h0KT8ud2lkdGggLyAobGlnaHQuX2JhYnlsb25MaWdodCBhcyBSZWN0QXJlYUxpZ2h0KT8uaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWU6IG51bWJlciwgbGlnaHQ6IElFWFRMaWdodHNBcmVhX0xpZ2h0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgPyAoKGxpZ2h0Ll9iYWJ5bG9uTGlnaHQgYXMgUmVjdEFyZWFMaWdodCkud2lkdGggPSB2YWx1ZSAqIChsaWdodC5fYmFieWxvbkxpZ2h0IGFzIFJlY3RBcmVhTGlnaHQpLmhlaWdodCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChsaWdodDogSUVYVExpZ2h0c0FyZWFfTGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uTGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFsoX2xpZ2h0OiBJRVhUTGlnaHRzQXJlYV9MaWdodCkgPT4gXCJhc3BlY3RcIl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBFWFRfbGlnaHRzX2llczoge1xuICAgICAgICBsaWdodHM6IHtcbiAgICAgICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAobGlnaHRzOiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRbXSkgPT4gbGlnaHRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ6IChsaWdodHM6IElLSFJMaWdodHNQdW5jdHVhbF9MaWdodFtdKSA9PiBsaWdodHMubWFwKChsaWdodCkgPT4gbGlnaHQuX2JhYnlsb25MaWdodCEpLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHRzOiBJS0hSTGlnaHRzUHVuY3R1YWxfTGlnaHRbXSkgPT4gXCJsZW5ndGhcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgRVhUX2xpZ2h0c19pbWFnZV9iYXNlZDoge1xuICAgICAgICBsaWdodHM6IHtcbiAgICAgICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgZ2V0OiAobGlnaHRzKSA9PiBsaWdodHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGdldFRhcmdldDogKGxpZ2h0cykgPT4gbGlnaHRzLm1hcCgobGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSEpLFxuICAgICAgICAgICAgICAgIGdldFByb3BlcnR5TmFtZTogWyhfbGlnaHRzKSA9PiBcImxlbmd0aFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfX2FycmF5X186IHtcbiAgICAgICAgICAgICAgICBfX3RhcmdldF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIGludGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChsaWdodCkgPT4gbGlnaHQuX2JhYnlsb25UZXh0dXJlPy5sZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiAodmFsdWUsIGxpZ2h0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlnaHQuX2JhYnlsb25UZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuX2JhYnlsb25UZXh0dXJlLmxldmVsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUXVhdGVybmlvblwiLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IChsaWdodCkgPT4gbGlnaHQuX2JhYnlsb25UZXh0dXJlICYmIFF1YXRlcm5pb24uRnJvbVJvdGF0aW9uTWF0cml4KGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZT8uZ2V0UmVmbGVjdGlvblRleHR1cmVNYXRyaXgoKSksXG4gICAgICAgICAgICAgICAgICAgIHNldDogKHZhbHVlLCBsaWdodCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaWdodC5fYmFieWxvblRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZlcnQgdGhlIHJvdGF0aW9uIHNvIHRoYXQgcG9zaXRpdmUgcm90YXRpb24gaXMgY291bnRlci1jbG9ja3dpc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZS5nZXRTY2VuZSgpPy51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gUXVhdGVybmlvbi5JbnZlcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0cml4LkZyb21RdWF0ZXJuaW9uVG9SZWYodmFsdWUsIGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZS5nZXRSZWZsZWN0aW9uVGV4dHVyZU1hdHJpeCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0OiAobGlnaHQpID0+IGxpZ2h0Ll9iYWJ5bG9uVGV4dHVyZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZnVuY3Rpb24gR2V0VGV4dHVyZShtYXRlcmlhbDogSU1hdGVyaWFsLCBwYXlsb2FkOiBhbnksIHRleHR1cmVUeXBlOiBrZXlvZiBQQlJNYXRlcmlhbCwgdGV4dHVyZUluT2JqZWN0Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgYmFieWxvbk1hdGVyaWFsID0gR2V0TWF0ZXJpYWwobWF0ZXJpYWwsIHBheWxvYWQpO1xuICAgIHJldHVybiB0ZXh0dXJlSW5PYmplY3QgPyBiYWJ5bG9uTWF0ZXJpYWxbdGV4dHVyZVR5cGVdW3RleHR1cmVJbk9iamVjdF0gOiBiYWJ5bG9uTWF0ZXJpYWxbdGV4dHVyZVR5cGVdO1xufVxuZnVuY3Rpb24gR2V0TWF0ZXJpYWwobWF0ZXJpYWw6IElNYXRlcmlhbCwgX2luZGV4PzogbnVtYmVyLCBwYXlsb2FkPzogYW55KSB7XG4gICAgcmV0dXJuIG1hdGVyaWFsLl9kYXRhPy5bcGF5bG9hZD8uZmlsbE1vZGUgPz8gQ29uc3RhbnRzLk1BVEVSSUFMX1RyaWFuZ2xlRmlsbE1vZGVdPy5iYWJ5bG9uTWF0ZXJpYWwgYXMgUEJSTWF0ZXJpYWw7XG59XG5mdW5jdGlvbiBHZW5lcmF0ZVRleHR1cmVNYXAodGV4dHVyZVR5cGU6IGtleW9mIFBCUk1hdGVyaWFsLCB0ZXh0dXJlSW5PYmplY3Q/OiBzdHJpbmcpOiBJVGV4dHVyZURlZmluaXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgY29tcG9uZW50c0NvdW50OiAyLFxuICAgICAgICAgICAgLy8gYXNzdW1pbmcgdHdvIGluZGVwZW5kZW50IHZhbHVlcyBmb3IgdSBhbmQgdiwgYW5kIE5PVCBhIFZlY3RvcjJcbiAgICAgICAgICAgIHR5cGU6IFwiVmVjdG9yMlwiLFxuICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIF9pbmRleD8sIHBheWxvYWQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IEdldFRleHR1cmUobWF0ZXJpYWwsIHBheWxvYWQsIHRleHR1cmVUeXBlLCB0ZXh0dXJlSW5PYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0ZXh0dXJlPy51T2Zmc2V0LCB0ZXh0dXJlPy52T2Zmc2V0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUYXJnZXQ6IEdldE1hdGVyaWFsLFxuICAgICAgICAgICAgc2V0OiAodmFsdWUsIG1hdGVyaWFsLCBfaW5kZXg/LCBwYXlsb2FkPykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBHZXRUZXh0dXJlKG1hdGVyaWFsLCBwYXlsb2FkLCB0ZXh0dXJlVHlwZSwgdGV4dHVyZUluT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAodGV4dHVyZS51T2Zmc2V0ID0gdmFsdWUueCksICh0ZXh0dXJlLnZPZmZzZXQgPSB2YWx1ZS55KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQcm9wZXJ0eU5hbWU6IFtcbiAgICAgICAgICAgICAgICAoKSA9PiBgJHt0ZXh0dXJlVHlwZX0ke3RleHR1cmVJbk9iamVjdCA/IFwiLlwiICsgdGV4dHVyZUluT2JqZWN0IDogXCJcIn0udU9mZnNldGAsXG4gICAgICAgICAgICAgICAgKCkgPT4gYCR7dGV4dHVyZVR5cGV9JHt0ZXh0dXJlSW5PYmplY3QgPyBcIi5cIiArIHRleHR1cmVJbk9iamVjdCA6IFwiXCJ9LnZPZmZzZXRgLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcm90YXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBnZXQ6IChtYXRlcmlhbCwgX2luZGV4PywgcGF5bG9hZD8pID0+IEdldFRleHR1cmUobWF0ZXJpYWwsIHBheWxvYWQsIHRleHR1cmVUeXBlLCB0ZXh0dXJlSW5PYmplY3QpPy53QW5nLFxuICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgX2luZGV4PywgcGF5bG9hZD8pID0+IChHZXRUZXh0dXJlKG1hdGVyaWFsLCBwYXlsb2FkLCB0ZXh0dXJlVHlwZSwgdGV4dHVyZUluT2JqZWN0KS53QW5nID0gdmFsdWUpLFxuICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbKCkgPT4gYCR7dGV4dHVyZVR5cGV9JHt0ZXh0dXJlSW5PYmplY3QgPyBcIi5cIiArIHRleHR1cmVJbk9iamVjdCA6IFwiXCJ9LndBbmdgXSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHNDb3VudDogMixcbiAgICAgICAgICAgIHR5cGU6IFwiVmVjdG9yMlwiLFxuICAgICAgICAgICAgZ2V0OiAobWF0ZXJpYWwsIF9pbmRleD8sIHBheWxvYWQ/KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IEdldFRleHR1cmUobWF0ZXJpYWwsIHBheWxvYWQsIHRleHR1cmVUeXBlLCB0ZXh0dXJlSW5PYmplY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0ZXh0dXJlPy51U2NhbGUsIHRleHR1cmU/LnZTY2FsZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VGFyZ2V0OiBHZXRNYXRlcmlhbCxcbiAgICAgICAgICAgIHNldDogKHZhbHVlLCBtYXRlcmlhbCwgaW5kZXg/LCBwYXlsb2FkPykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBHZXRUZXh0dXJlKG1hdGVyaWFsLCBwYXlsb2FkLCB0ZXh0dXJlVHlwZSwgdGV4dHVyZUluT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAodGV4dHVyZS51U2NhbGUgPSB2YWx1ZS54KSwgKHRleHR1cmUudlNjYWxlID0gdmFsdWUueSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UHJvcGVydHlOYW1lOiBbXG4gICAgICAgICAgICAgICAgKCkgPT4gYCR7dGV4dHVyZVR5cGV9JHt0ZXh0dXJlSW5PYmplY3QgPyBcIi5cIiArIHRleHR1cmVJbk9iamVjdCA6IFwiXCJ9LnVTY2FsZWAsXG4gICAgICAgICAgICAgICAgKCkgPT4gYCR7dGV4dHVyZVR5cGV9JHt0ZXh0dXJlSW5PYmplY3QgPyBcIi5cIiArIHRleHR1cmVJbk9iamVjdCA6IFwiXCJ9LnZTY2FsZWAsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbmNvbnN0IG9iamVjdE1vZGVsTWFwcGluZzogSUdMVEZPYmplY3RNb2RlbFRyZWUgPSB7XG4gICAgY2FtZXJhczogY2FtZXJhc1RyZWUsXG4gICAgbm9kZXM6IG5vZGVzVHJlZSxcbiAgICBtYXRlcmlhbHM6IG1hdGVyaWFsc1RyZWUsXG4gICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9uc1RyZWUsXG4gICAgYW5pbWF0aW9uczogYW5pbWF0aW9uc1RyZWUsXG4gICAgbWVzaGVzOiBtZXNoZXNUcmVlLFxufTtcblxuLyoqXG4gKiBnZXQgYSBwYXRoLXRvLW9iamVjdCBjb252ZXJ0ZXIgZm9yIHRoZSBnaXZlbiBnbFRGIHRyZWVcbiAqIEBwYXJhbSBnbHRmIHRoZSBnbFRGIHRyZWUgdG8gdXNlXG4gKiBAcmV0dXJucyBhIHBhdGgtdG8tb2JqZWN0IGNvbnZlcnRlciBmb3IgdGhlIGdpdmVuIGdsVEYgdHJlZVxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0UGF0aFRvT2JqZWN0Q29udmVydGVyKGdsdGY6IElHTFRGKSB7XG4gICAgcmV0dXJuIG5ldyBHTFRGUGF0aFRvT2JqZWN0Q29udmVydGVyKGdsdGYsIG9iamVjdE1vZGVsTWFwcGluZyk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgb2JqZWN0IGFjY2Vzc29yIGZvciB0aGUgZ2l2ZW4ga2V5IGluIHRoZSBvYmplY3QgbW9kZWxcbiAqIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kLCBpdCB3aWxsIHJldHVybiB1bmRlZmluZWRcbiAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBnZXQgdGhlIG1hcHBpbmcgZm9yLCBmb3IgZXhhbXBsZSAvbWF0ZXJpYWxzL1xce1xcfS9lbWlzc2l2ZUZhY3RvclxuICogQHJldHVybnMgYW4gb2JqZWN0IGFjY2Vzc29yIGZvciB0aGUgZ2l2ZW4ga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlIGtleSBpcyBub3QgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdldE1hcHBpbmdGb3JLZXkoa2V5OiBzdHJpbmcpOiBJT2JqZWN0QWNjZXNzb3IgfCB1bmRlZmluZWQge1xuICAgIC8vIHJlcGxhY2UgZXZlcnkgYHt9YCBpbiBrZXkgd2l0aCBfX2FycmF5X18gdG8gbWF0Y2ggdGhlIG9iamVjdCBtb2RlbFxuICAgIGNvbnN0IGtleVBhcnRzID0ga2V5LnNwbGl0KFwiL1wiKS5tYXAoKHBhcnQpID0+IHBhcnQucmVwbGFjZSgve30vZywgXCJfX2FycmF5X19cIikpO1xuICAgIGxldCBjdXJyZW50ID0gb2JqZWN0TW9kZWxNYXBwaW5nIGFzIGFueTtcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2Yga2V5UGFydHMpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHBhcnQgaXMgbm90IGVtcHR5XG4gICAgICAgIGlmICghcGFydCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGFydF07XG4gICAgfVxuICAgIC8vIHZhbGlkYXRlIHRoYXQgY3VycmVudCBpcyBhbiBvYmplY3QgYWNjZXNzb3JcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50LnR5cGUgJiYgY3VycmVudC5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogU2V0IGludGVycG9sYXRpb24gZm9yIGEgc3BlY2lmaWMga2V5IGluIHRoZSBvYmplY3QgbW9kZWxcbiAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBzZXQsIGZvciBleGFtcGxlIC9tYXRlcmlhbHMvXFx7XFx9L2VtaXNzaXZlRmFjdG9yXG4gKiBAcGFyYW0gaW50ZXJwb2xhdGlvbiB0aGUgaW50ZXJwb2xhdGlvbiBlbGVtZW50cyBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0SW50ZXJwb2xhdGlvbkZvcktleShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGlvbj86IElJbnRlcnBvbGF0aW9uUHJvcGVydHlJbmZvW10pOiB2b2lkIHtcbiAgICAvLyByZXBsYWNlIGV2ZXJ5IGB7fWAgaW4ga2V5IHdpdGggX19hcnJheV9fIHRvIG1hdGNoIHRoZSBvYmplY3QgbW9kZWxcbiAgICBjb25zdCBrZXlQYXJ0cyA9IGtleS5zcGxpdChcIi9cIikubWFwKChwYXJ0KSA9PiBwYXJ0LnJlcGxhY2UoL3t9L2csIFwiX19hcnJheV9fXCIpKTtcbiAgICBsZXQgY3VycmVudCA9IG9iamVjdE1vZGVsTWFwcGluZyBhcyBhbnk7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIGtleVBhcnRzKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSBwYXJ0IGlzIG5vdCBlbXB0eVxuICAgICAgICBpZiAoIXBhcnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgIH1cbiAgICAvLyB2YWxpZGF0ZSB0aGF0IHRoZSBjdXJyZW50IG9iamVjdCBpcyBhbiBvYmplY3QgYWNjZXNzb3JcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50LnR5cGUgJiYgY3VycmVudC5nZXQpIHtcbiAgICAgICAgKGN1cnJlbnQgYXMgSU9iamVjdEFjY2Vzc29yKS5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcbiAgICB9XG59XG5cbi8qKlxuICogVGhpcyB3aWxsIGFkIGEgbmV3IG9iamVjdCBhY2Nlc3NvciBpbiB0aGUgb2JqZWN0IG1vZGVsIGF0IHRoZSBnaXZlbiBrZXkuXG4gKiBOb3RlIHRoYXQgdGhpcyB3aWxsIE5PVCBjaGFuZ2UgdGhlIHR5cGVzY3JpcHQgdHlwZXMuIFRvIGRvIHRoYXQgeW91IHdpbGwgbmVlZCB0byBjaGFuZ2UgdGhlIGludGVyZmFjZSBpdHNlbGYgKGV4dGVuZGluZyBpdCBpbiB0aGUgbW9kdWxlIHRoYXQgdXNlcyBpdClcbiAqIEBwYXJhbSBrZXkgdGhlIGtleSB0byBhZGQgdGhlIG9iamVjdCBhY2Nlc3NvciBhdC4gRm9yIGV4YW1wbGUgL2NhbWVyYXMvXFx7XFx9L3BlcnNwZWN0aXZlL2FzcGVjdFJhdGlvXG4gKiBAcGFyYW0gYWNjZXNzb3IgdGhlIG9iamVjdCBhY2Nlc3NvciB0byBhZGRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEFkZE9iamVjdEFjY2Vzc29yVG9LZXk8R0xURlRhcmdldFR5cGUgPSBhbnksIEJhYnlsb25UYXJnZXRUeXBlID0gYW55LCBCYWJ5bG9uVmFsdWVUeXBlID0gYW55PihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBhY2Nlc3NvcjogSU9iamVjdEFjY2Vzc29yPEdMVEZUYXJnZXRUeXBlLCBCYWJ5bG9uVGFyZ2V0VHlwZSwgQmFieWxvblZhbHVlVHlwZT5cbik6IHZvaWQge1xuICAgIC8vIHJlcGxhY2UgZXZlcnkgYHt9YCBpbiBrZXkgd2l0aCBfX2FycmF5X18gdG8gbWF0Y2ggdGhlIG9iamVjdCBtb2RlbFxuICAgIGNvbnN0IGtleVBhcnRzID0ga2V5LnNwbGl0KFwiL1wiKS5tYXAoKHBhcnQpID0+IHBhcnQucmVwbGFjZSgve30vZywgXCJfX2FycmF5X19cIikpO1xuICAgIGxldCBjdXJyZW50ID0gb2JqZWN0TW9kZWxNYXBwaW5nIGFzIGFueTtcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2Yga2V5UGFydHMpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHBhcnQgaXMgbm90IGVtcHR5XG4gICAgICAgIGlmICghcGFydCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjdXJyZW50W3BhcnRdKSB7XG4gICAgICAgICAgICBpZiAocGFydCA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Ll9faWdub3JlT2JqZWN0VHJlZV9fID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRbcGFydF0gPSB7fTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwYXJ0IGlzIF9fYXJyYXlfXyB0aGVuIGFkZCB0aGUgX190YXJnZXRfXyBwcm9wZXJ0eVxuICAgICAgICAgICAgaWYgKHBhcnQgPT09IFwiX19hcnJheV9fXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50W3BhcnRdLl9fdGFyZ2V0X18gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnQsIGFjY2Vzc29yKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==