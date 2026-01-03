"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_node_hoverability_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_node_hoverability.js":
/*!********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_node_hoverability.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_node_hoverability: () => (/* binding */ KHR_node_hoverability)
/* harmony export */ });
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var _KHR_interactivity_declarationMapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_interactivity/declarationMapper */ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.js");
/* harmony import */ var _objectModelMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const NAME = "KHR_node_hoverability";
// interactivity
const MeshPointerOverPrefix = "targetMeshPointerOver_";
(0,_KHR_interactivity_declarationMapper__WEBPACK_IMPORTED_MODULE_1__.addNewInteractivityFlowGraphMapping)("event/onHoverIn", NAME, {
    // using GetVariable as the nodeIndex is a configuration and not a value (i.e. it's not mutable)
    blocks: ["FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */, "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */, "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */, "KHR_interactivity/FlowGraphGLTFDataProvider"],
    configuration: {
        stopPropagation: { name: "stopPropagation" },
        nodeIndex: {
            name: "variable",
            toBlock: "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */,
            dataTransformer(data) {
                return MeshPointerOverPrefix + data;
            },
        },
    },
    outputs: {
        values: {
            hoverNodeIndex: { name: "index", toBlock: "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */ },
            controllerIndex: { name: "pointerId" },
        },
        flows: {
            out: { name: "done" },
        },
    },
    interBlockConnectors: [
        {
            input: "targetMesh",
            output: "value",
            inputBlockIndex: 0,
            outputBlockIndex: 1,
            isVariable: true,
        },
        {
            input: "array",
            output: "nodes",
            inputBlockIndex: 2,
            outputBlockIndex: 3,
            isVariable: true,
        },
        {
            input: "object",
            output: "meshUnderPointer",
            inputBlockIndex: 2,
            outputBlockIndex: 0,
            isVariable: true,
        },
    ],
    extraProcessor(gltfBlock, _declaration, _mapping, _arrays, serializedObjects, context, globalGLTF) {
        // add the glTF to the configuration of the last serialized object
        const serializedObject = serializedObjects[serializedObjects.length - 1];
        serializedObject.config = serializedObject.config || {};
        serializedObject.config.glTF = globalGLTF;
        // find the listener nodeIndex value
        const nodeIndex = gltfBlock.configuration?.["nodeIndex"]?.value?.[0];
        if (nodeIndex === undefined || typeof nodeIndex !== "number") {
            throw new Error("nodeIndex not found in configuration");
        }
        const variableName = MeshPointerOverPrefix + nodeIndex;
        // find the nodeIndex value
        serializedObjects[1].config.variable = variableName;
        context._userVariables[variableName] = {
            className: "Mesh",
            id: globalGLTF?.nodes?.[nodeIndex]._babylonTransformNode?.id,
            uniqueId: globalGLTF?.nodes?.[nodeIndex]._babylonTransformNode?.uniqueId,
        };
        return serializedObjects;
    },
});
const MeshPointerOutPrefix = "targetMeshPointerOut_";
(0,_KHR_interactivity_declarationMapper__WEBPACK_IMPORTED_MODULE_1__.addNewInteractivityFlowGraphMapping)("event/onHoverOut", NAME, {
    // using GetVariable as the nodeIndex is a configuration and not a value (i.e. it's not mutable)
    blocks: ["FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */, "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */, "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */, "KHR_interactivity/FlowGraphGLTFDataProvider"],
    configuration: {
        stopPropagation: { name: "stopPropagation" },
        nodeIndex: {
            name: "variable",
            toBlock: "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */,
            dataTransformer(data) {
                return MeshPointerOutPrefix + data;
            },
        },
    },
    outputs: {
        values: {
            hoverNodeIndex: { name: "index", toBlock: "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */ },
            controllerIndex: { name: "pointerId" },
        },
        flows: {
            out: { name: "done" },
        },
    },
    interBlockConnectors: [
        {
            input: "targetMesh",
            output: "value",
            inputBlockIndex: 0,
            outputBlockIndex: 1,
            isVariable: true,
        },
        {
            input: "array",
            output: "nodes",
            inputBlockIndex: 2,
            outputBlockIndex: 3,
            isVariable: true,
        },
        {
            input: "object",
            output: "meshOutOfPointer",
            inputBlockIndex: 2,
            outputBlockIndex: 0,
            isVariable: true,
        },
    ],
    extraProcessor(gltfBlock, _declaration, _mapping, _arrays, serializedObjects, context, globalGLTF) {
        // add the glTF to the configuration of the last serialized object
        const serializedObject = serializedObjects[serializedObjects.length - 1];
        serializedObject.config = serializedObject.config || {};
        serializedObject.config.glTF = globalGLTF;
        const nodeIndex = gltfBlock.configuration?.["nodeIndex"]?.value?.[0];
        if (nodeIndex === undefined || typeof nodeIndex !== "number") {
            throw new Error("nodeIndex not found in configuration");
        }
        const variableName = MeshPointerOutPrefix + nodeIndex;
        // find the nodeIndex value
        serializedObjects[1].config.variable = variableName;
        context._userVariables[variableName] = {
            className: "Mesh",
            id: globalGLTF?.nodes?.[nodeIndex]._babylonTransformNode?.id,
            uniqueId: globalGLTF?.nodes?.[nodeIndex]._babylonTransformNode?.uniqueId,
        };
        return serializedObjects;
    },
});
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.AddObjectAccessorToKey)("/nodes/{}/extensions/KHR_node_hoverability/hoverable", {
    get: (node) => {
        const tn = node._babylonTransformNode;
        if (tn && tn.pointerOverDisableMeshTesting !== undefined) {
            return tn.pointerOverDisableMeshTesting;
        }
        return true;
    },
    set: (value, node) => {
        node._primitiveBabylonMeshes?.forEach((mesh) => {
            mesh.pointerOverDisableMeshTesting = !value;
        });
    },
    getTarget: (node) => node._babylonTransformNode,
    getPropertyName: [() => "pointerOverDisableMeshTesting"],
    type: "boolean",
});
/**
 * Loader extension for KHR_node_hoverability
 * @see https://github.com/KhronosGroup/glTF/pull/2426
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_node_hoverability {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this.enabled = loader.isExtensionUsed(NAME);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-misused-promises
    async onReady() {
        this._loader.gltf.nodes?.forEach((node) => {
            // default is true, so only apply if false
            if (node.extensions?.KHR_node_hoverability && node.extensions?.KHR_node_hoverability.hoverable === false) {
                node._babylonTransformNode?.getChildMeshes().forEach((mesh) => {
                    mesh.pointerOverDisableMeshTesting = true;
                });
            }
        });
    }
    dispose() {
        this._loader = null;
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.registerGLTFExtension)(NAME, true, (loader) => new KHR_node_hoverability(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX25vZGVfaG92ZXJhYmlsaXR5X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBZEE7O0FBRUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX25vZGVfaG92ZXJhYmlsaXR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQmxvY2tzL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB0eXBlIHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBhZGROZXdJbnRlcmFjdGl2aXR5Rmxvd0dyYXBoTWFwcGluZyB9IGZyb20gXCIuL0tIUl9pbnRlcmFjdGl2aXR5L2RlY2xhcmF0aW9uTWFwcGVyXCI7XG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBBZGRPYmplY3RBY2Nlc3NvclRvS2V5IH0gZnJvbSBcIi4vb2JqZWN0TW9kZWxNYXBwaW5nXCI7XG5cbmNvbnN0IE5BTUUgPSBcIktIUl9ub2RlX2hvdmVyYWJpbGl0eVwiO1xuXG5kZWNsYXJlIG1vZHVsZSBcIi4uLy4uL2dsVEZGaWxlTG9hZGVyXCIge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEtIUl9ub2RlX2hvdmVyYWJpbGl0eSBleHRlbnNpb24uXG4gICAgICAgICAqL1xuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cbiAgICAgICAgW1wiS0hSX25vZGVfaG92ZXJhYmlsaXR5XCJdOiB7fTtcbiAgICB9XG59XG5cbi8vIGludGVyYWN0aXZpdHlcbmNvbnN0IE1lc2hQb2ludGVyT3ZlclByZWZpeCA9IFwidGFyZ2V0TWVzaFBvaW50ZXJPdmVyX1wiO1xuYWRkTmV3SW50ZXJhY3Rpdml0eUZsb3dHcmFwaE1hcHBpbmcoXCJldmVudC9vbkhvdmVySW5cIiwgTkFNRSwge1xuICAgIC8vIHVzaW5nIEdldFZhcmlhYmxlIGFzIHRoZSBub2RlSW5kZXggaXMgYSBjb25maWd1cmF0aW9uIGFuZCBub3QgYSB2YWx1ZSAoaS5lLiBpdCdzIG5vdCBtdXRhYmxlKVxuICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuUG9pbnRlck92ZXJFdmVudCwgRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRWYXJpYWJsZSwgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbmRleE9mLCBcIktIUl9pbnRlcmFjdGl2aXR5L0Zsb3dHcmFwaEdMVEZEYXRhUHJvdmlkZXJcIl0sXG4gICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICBzdG9wUHJvcGFnYXRpb246IHsgbmFtZTogXCJzdG9wUHJvcGFnYXRpb25cIiB9LFxuICAgICAgICBub2RlSW5kZXg6IHtcbiAgICAgICAgICAgIG5hbWU6IFwidmFyaWFibGVcIixcbiAgICAgICAgICAgIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0VmFyaWFibGUsXG4gICAgICAgICAgICBkYXRhVHJhbnNmb3JtZXIoZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNZXNoUG9pbnRlck92ZXJQcmVmaXggKyBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBob3Zlck5vZGVJbmRleDogeyBuYW1lOiBcImluZGV4XCIsIHRvQmxvY2s6IEZsb3dHcmFwaEJsb2NrTmFtZXMuSW5kZXhPZiB9LFxuICAgICAgICAgICAgY29udHJvbGxlckluZGV4OiB7IG5hbWU6IFwicG9pbnRlcklkXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmxvd3M6IHtcbiAgICAgICAgICAgIG91dDogeyBuYW1lOiBcImRvbmVcIiB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgaW50ZXJCbG9ja0Nvbm5lY3RvcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW5wdXQ6IFwidGFyZ2V0TWVzaFwiLFxuICAgICAgICAgICAgb3V0cHV0OiBcInZhbHVlXCIsXG4gICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW5wdXQ6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIG91dHB1dDogXCJub2Rlc1wiLFxuICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAyLFxuICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMyxcbiAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0OiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgb3V0cHV0OiBcIm1lc2hVbmRlclBvaW50ZXJcIixcbiAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMixcbiAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cywgY29udGV4dCwgZ2xvYmFsR0xURikge1xuICAgICAgICAvLyBhZGQgdGhlIGdsVEYgdG8gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGxhc3Qgc2VyaWFsaXplZCBvYmplY3RcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZE9iamVjdCA9IHNlcmlhbGl6ZWRPYmplY3RzW3NlcmlhbGl6ZWRPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyA9IHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnIHx8IHt9O1xuICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZy5nbFRGID0gZ2xvYmFsR0xURjtcbiAgICAgICAgLy8gZmluZCB0aGUgbGlzdGVuZXIgbm9kZUluZGV4IHZhbHVlXG4gICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IGdsdGZCbG9jay5jb25maWd1cmF0aW9uPy5bXCJub2RlSW5kZXhcIl0/LnZhbHVlPy5bMF07XG4gICAgICAgIGlmIChub2RlSW5kZXggPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygbm9kZUluZGV4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlSW5kZXggbm90IGZvdW5kIGluIGNvbmZpZ3VyYXRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gTWVzaFBvaW50ZXJPdmVyUHJlZml4ICsgbm9kZUluZGV4O1xuICAgICAgICAvLyBmaW5kIHRoZSBub2RlSW5kZXggdmFsdWVcbiAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMV0uY29uZmlnLnZhcmlhYmxlID0gdmFyaWFibGVOYW1lO1xuICAgICAgICBjb250ZXh0Ll91c2VyVmFyaWFibGVzW3ZhcmlhYmxlTmFtZV0gPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiTWVzaFwiLFxuICAgICAgICAgICAgaWQ6IGdsb2JhbEdMVEY/Lm5vZGVzPy5bbm9kZUluZGV4XS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LmlkLFxuICAgICAgICAgICAgdW5pcXVlSWQ6IGdsb2JhbEdMVEY/Lm5vZGVzPy5bbm9kZUluZGV4XS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnVuaXF1ZUlkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgfSxcbn0pO1xuXG5jb25zdCBNZXNoUG9pbnRlck91dFByZWZpeCA9IFwidGFyZ2V0TWVzaFBvaW50ZXJPdXRfXCI7XG5hZGROZXdJbnRlcmFjdGl2aXR5Rmxvd0dyYXBoTWFwcGluZyhcImV2ZW50L29uSG92ZXJPdXRcIiwgTkFNRSwge1xuICAgIC8vIHVzaW5nIEdldFZhcmlhYmxlIGFzIHRoZSBub2RlSW5kZXggaXMgYSBjb25maWd1cmF0aW9uIGFuZCBub3QgYSB2YWx1ZSAoaS5lLiBpdCdzIG5vdCBtdXRhYmxlKVxuICAgIGJsb2NrczogW0Zsb3dHcmFwaEJsb2NrTmFtZXMuUG9pbnRlck91dEV2ZW50LCBGbG93R3JhcGhCbG9ja05hbWVzLkdldFZhcmlhYmxlLCBGbG93R3JhcGhCbG9ja05hbWVzLkluZGV4T2YsIFwiS0hSX2ludGVyYWN0aXZpdHkvRmxvd0dyYXBoR0xURkRhdGFQcm92aWRlclwiXSxcbiAgICBjb25maWd1cmF0aW9uOiB7XG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbjogeyBuYW1lOiBcInN0b3BQcm9wYWdhdGlvblwiIH0sXG4gICAgICAgIG5vZGVJbmRleDoge1xuICAgICAgICAgICAgbmFtZTogXCJ2YXJpYWJsZVwiLFxuICAgICAgICAgICAgdG9CbG9jazogRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRWYXJpYWJsZSxcbiAgICAgICAgICAgIGRhdGFUcmFuc2Zvcm1lcihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1lc2hQb2ludGVyT3V0UHJlZml4ICsgZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgaG92ZXJOb2RlSW5kZXg6IHsgbmFtZTogXCJpbmRleFwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLkluZGV4T2YgfSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJJbmRleDogeyBuYW1lOiBcInBvaW50ZXJJZFwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgICBvdXQ6IHsgbmFtZTogXCJkb25lXCIgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGludGVyQmxvY2tDb25uZWN0b3JzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0OiBcInRhcmdldE1lc2hcIixcbiAgICAgICAgICAgIG91dHB1dDogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAwLFxuICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMSxcbiAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0OiBcImFycmF5XCIsXG4gICAgICAgICAgICBvdXRwdXQ6IFwibm9kZXNcIixcbiAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMixcbiAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDMsXG4gICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dDogXCJvYmplY3RcIixcbiAgICAgICAgICAgIG91dHB1dDogXCJtZXNoT3V0T2ZQb2ludGVyXCIsXG4gICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDIsXG4gICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAwLFxuICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGV4dHJhUHJvY2Vzc29yKGdsdGZCbG9jaywgX2RlY2xhcmF0aW9uLCBfbWFwcGluZywgX2FycmF5cywgc2VyaWFsaXplZE9iamVjdHMsIGNvbnRleHQsIGdsb2JhbEdMVEYpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBnbFRGIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBsYXN0IHNlcmlhbGl6ZWQgb2JqZWN0XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRPYmplY3QgPSBzZXJpYWxpemVkT2JqZWN0c1tzZXJpYWxpemVkT2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcgPSBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyB8fCB7fTtcbiAgICAgICAgc2VyaWFsaXplZE9iamVjdC5jb25maWcuZ2xURiA9IGdsb2JhbEdMVEY7XG5cbiAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gZ2x0ZkJsb2NrLmNvbmZpZ3VyYXRpb24/LltcIm5vZGVJbmRleFwiXT8udmFsdWU/LlswXTtcbiAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBub2RlSW5kZXggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vZGVJbmRleCBub3QgZm91bmQgaW4gY29uZmlndXJhdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBNZXNoUG9pbnRlck91dFByZWZpeCArIG5vZGVJbmRleDtcbiAgICAgICAgLy8gZmluZCB0aGUgbm9kZUluZGV4IHZhbHVlXG4gICAgICAgIHNlcmlhbGl6ZWRPYmplY3RzWzFdLmNvbmZpZy52YXJpYWJsZSA9IHZhcmlhYmxlTmFtZTtcbiAgICAgICAgY29udGV4dC5fdXNlclZhcmlhYmxlc1t2YXJpYWJsZU5hbWVdID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIk1lc2hcIixcbiAgICAgICAgICAgIGlkOiBnbG9iYWxHTFRGPy5ub2Rlcz8uW25vZGVJbmRleF0uX2JhYnlsb25UcmFuc2Zvcm1Ob2RlPy5pZCxcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBnbG9iYWxHTFRGPy5ub2Rlcz8uW25vZGVJbmRleF0uX2JhYnlsb25UcmFuc2Zvcm1Ob2RlPy51bmlxdWVJZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWRPYmplY3RzO1xuICAgIH0sXG59KTtcblxuQWRkT2JqZWN0QWNjZXNzb3JUb0tleShcIi9ub2Rlcy97fS9leHRlbnNpb25zL0tIUl9ub2RlX2hvdmVyYWJpbGl0eS9ob3ZlcmFibGVcIiwge1xuICAgIGdldDogKG5vZGU6IElOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRuID0gbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgYW55O1xuICAgICAgICBpZiAodG4gJiYgdG4ucG9pbnRlck92ZXJEaXNhYmxlTWVzaFRlc3RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRuLnBvaW50ZXJPdmVyRGlzYWJsZU1lc2hUZXN0aW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgc2V0OiAodmFsdWU6IGJvb2xlYW4sIG5vZGU6IElOb2RlKSA9PiB7XG4gICAgICAgIG5vZGUuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXM/LmZvckVhY2goKG1lc2gpID0+IHtcbiAgICAgICAgICAgIG1lc2gucG9pbnRlck92ZXJEaXNhYmxlTWVzaFRlc3RpbmcgPSAhdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0VGFyZ2V0OiAobm9kZTogSU5vZGUpID0+IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLFxuICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwicG9pbnRlck92ZXJEaXNhYmxlTWVzaFRlc3RpbmdcIl0sXG4gICAgdHlwZTogXCJib29sZWFuXCIsXG59KTtcblxuLyoqXG4gKiBMb2FkZXIgZXh0ZW5zaW9uIGZvciBLSFJfbm9kZV9ob3ZlcmFiaWxpdHlcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMjQyNlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgY2xhc3MgS0hSX25vZGVfaG92ZXJhYmlsaXR5IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcblxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXNcbiAgICBwdWJsaWMgYXN5bmMgb25SZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fbG9hZGVyLmdsdGYubm9kZXM/LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgaXMgdHJ1ZSwgc28gb25seSBhcHBseSBpZiBmYWxzZVxuICAgICAgICAgICAgaWYgKG5vZGUuZXh0ZW5zaW9ucz8uS0hSX25vZGVfaG92ZXJhYmlsaXR5ICYmIG5vZGUuZXh0ZW5zaW9ucz8uS0hSX25vZGVfaG92ZXJhYmlsaXR5LmhvdmVyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBub2RlLl9iYWJ5bG9uVHJhbnNmb3JtTm9kZT8uZ2V0Q2hpbGRNZXNoZXMoKS5mb3JFYWNoKChtZXNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc2gucG9pbnRlck92ZXJEaXNhYmxlTWVzaFRlc3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcbiAgICB9XG59XG5cbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfbm9kZV9ob3ZlcmFiaWxpdHkobG9hZGVyKSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9