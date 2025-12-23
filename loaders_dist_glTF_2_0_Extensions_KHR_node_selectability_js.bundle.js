"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_node_selectability_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_node_selectability.js":
/*!*********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_node_selectability.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_node_selectability: () => (/* binding */ KHR_node_selectability)
/* harmony export */ });
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var _KHR_interactivity_declarationMapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_interactivity/declarationMapper */ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.js");
/* harmony import */ var _objectModelMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const NAME = "KHR_node_selectability";
// add the interactivity mapping for the onSelect event
(0,_KHR_interactivity_declarationMapper__WEBPACK_IMPORTED_MODULE_1__.addNewInteractivityFlowGraphMapping)("event/onSelect", NAME, {
    // using GetVariable as the nodeIndex is a configuration and not a value (i.e. it's not mutable)
    blocks: ["FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */, "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */, "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */, "KHR_interactivity/FlowGraphGLTFDataProvider"],
    configuration: {
        stopPropagation: { name: "stopPropagation" },
        nodeIndex: {
            name: "variable",
            toBlock: "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */,
            dataTransformer(data) {
                return "pickedMesh_" + data;
            },
        },
    },
    outputs: {
        values: {
            selectedNodeIndex: { name: "index", toBlock: "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */ },
            controllerIndex: { name: "pointerId" },
            selectionPoint: { name: "pickedPoint" },
            selectionRayOrigin: { name: "pickOrigin" },
        },
        flows: {
            out: { name: "done" },
        },
    },
    interBlockConnectors: [
        {
            input: "asset",
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
            output: "pickedMesh",
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
        const variableName = "pickedMesh_" + nodeIndex;
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
// object model extension for selectable
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.AddObjectAccessorToKey)("/nodes/{}/extensions/KHR_node_selectability/selectable", {
    get: (node) => {
        const tn = node._babylonTransformNode;
        if (tn && tn.isPickable !== undefined) {
            return tn.isPickable;
        }
        return true;
    },
    set: (value, node) => {
        node._primitiveBabylonMeshes?.forEach((mesh) => {
            mesh.isPickable = value;
        });
    },
    getTarget: (node) => node._babylonTransformNode,
    getPropertyName: [() => "isPickable"],
    type: "boolean",
});
/**
 * Loader extension for KHR_selectability
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_node_selectability {
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
            if (node.extensions?.KHR_node_selectability && node.extensions?.KHR_node_selectability.selectable === false) {
                node._babylonTransformNode?.getChildMeshes().forEach((mesh) => {
                    mesh.isPickable = false;
                });
            }
        });
    }
    dispose() {
        this._loader = null;
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_0__.registerGLTFExtension)(NAME, true, (loader) => new KHR_node_selectability(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX25vZGVfc2VsZWN0YWJpbGl0eV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQWRBOztBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfbm9kZV9zZWxlY3RhYmlsaXR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQmxvY2tzL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB0eXBlIHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBhZGROZXdJbnRlcmFjdGl2aXR5Rmxvd0dyYXBoTWFwcGluZyB9IGZyb20gXCIuL0tIUl9pbnRlcmFjdGl2aXR5L2RlY2xhcmF0aW9uTWFwcGVyXCI7XG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBBZGRPYmplY3RBY2Nlc3NvclRvS2V5IH0gZnJvbSBcIi4vb2JqZWN0TW9kZWxNYXBwaW5nXCI7XG5cbmNvbnN0IE5BTUUgPSBcIktIUl9ub2RlX3NlbGVjdGFiaWxpdHlcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gICAgZXhwb3J0IGludGVyZmFjZSBHTFRGTG9hZGVyRXh0ZW5zaW9uT3B0aW9ucyB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBLSFJfc2VsZWN0YWJpbGl0eSBleHRlbnNpb24uXG4gICAgICAgICAqL1xuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cbiAgICAgICAgW1wiS0hSX25vZGVfc2VsZWN0YWJpbGl0eVwiXToge307XG4gICAgfVxufVxuXG4vLyBhZGQgdGhlIGludGVyYWN0aXZpdHkgbWFwcGluZyBmb3IgdGhlIG9uU2VsZWN0IGV2ZW50XG5hZGROZXdJbnRlcmFjdGl2aXR5Rmxvd0dyYXBoTWFwcGluZyhcImV2ZW50L29uU2VsZWN0XCIsIE5BTUUsIHtcbiAgICAvLyB1c2luZyBHZXRWYXJpYWJsZSBhcyB0aGUgbm9kZUluZGV4IGlzIGEgY29uZmlndXJhdGlvbiBhbmQgbm90IGEgdmFsdWUgKGkuZS4gaXQncyBub3QgbXV0YWJsZSlcbiAgICBibG9ja3M6IFtGbG93R3JhcGhCbG9ja05hbWVzLk1lc2hQaWNrRXZlbnQsIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0VmFyaWFibGUsIEZsb3dHcmFwaEJsb2NrTmFtZXMuSW5kZXhPZiwgXCJLSFJfaW50ZXJhY3Rpdml0eS9GbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyXCJdLFxuICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiB7IG5hbWU6IFwic3RvcFByb3BhZ2F0aW9uXCIgfSxcbiAgICAgICAgbm9kZUluZGV4OiB7XG4gICAgICAgICAgICBuYW1lOiBcInZhcmlhYmxlXCIsXG4gICAgICAgICAgICB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLkdldFZhcmlhYmxlLFxuICAgICAgICAgICAgZGF0YVRyYW5zZm9ybWVyKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJwaWNrZWRNZXNoX1wiICsgZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgc2VsZWN0ZWROb2RlSW5kZXg6IHsgbmFtZTogXCJpbmRleFwiLCB0b0Jsb2NrOiBGbG93R3JhcGhCbG9ja05hbWVzLkluZGV4T2YgfSxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJJbmRleDogeyBuYW1lOiBcInBvaW50ZXJJZFwiIH0sXG4gICAgICAgICAgICBzZWxlY3Rpb25Qb2ludDogeyBuYW1lOiBcInBpY2tlZFBvaW50XCIgfSxcbiAgICAgICAgICAgIHNlbGVjdGlvblJheU9yaWdpbjogeyBuYW1lOiBcInBpY2tPcmlnaW5cIiB9LFxuICAgICAgICB9LFxuICAgICAgICBmbG93czoge1xuICAgICAgICAgICAgb3V0OiB7IG5hbWU6IFwiZG9uZVwiIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBpbnRlckJsb2NrQ29ubmVjdG9yczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dDogXCJhc3NldFwiLFxuICAgICAgICAgICAgb3V0cHV0OiBcInZhbHVlXCIsXG4gICAgICAgICAgICBpbnB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICBvdXRwdXRCbG9ja0luZGV4OiAxLFxuICAgICAgICAgICAgaXNWYXJpYWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW5wdXQ6IFwiYXJyYXlcIixcbiAgICAgICAgICAgIG91dHB1dDogXCJub2Rlc1wiLFxuICAgICAgICAgICAgaW5wdXRCbG9ja0luZGV4OiAyLFxuICAgICAgICAgICAgb3V0cHV0QmxvY2tJbmRleDogMyxcbiAgICAgICAgICAgIGlzVmFyaWFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0OiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgb3V0cHV0OiBcInBpY2tlZE1lc2hcIixcbiAgICAgICAgICAgIGlucHV0QmxvY2tJbmRleDogMixcbiAgICAgICAgICAgIG91dHB1dEJsb2NrSW5kZXg6IDAsXG4gICAgICAgICAgICBpc1ZhcmlhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgZXh0cmFQcm9jZXNzb3IoZ2x0ZkJsb2NrLCBfZGVjbGFyYXRpb24sIF9tYXBwaW5nLCBfYXJyYXlzLCBzZXJpYWxpemVkT2JqZWN0cywgY29udGV4dCwgZ2xvYmFsR0xURikge1xuICAgICAgICAvLyBhZGQgdGhlIGdsVEYgdG8gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGxhc3Qgc2VyaWFsaXplZCBvYmplY3RcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZE9iamVjdCA9IHNlcmlhbGl6ZWRPYmplY3RzW3NlcmlhbGl6ZWRPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZyA9IHNlcmlhbGl6ZWRPYmplY3QuY29uZmlnIHx8IHt9O1xuICAgICAgICBzZXJpYWxpemVkT2JqZWN0LmNvbmZpZy5nbFRGID0gZ2xvYmFsR0xURjtcbiAgICAgICAgLy8gZmluZCB0aGUgbGlzdGVuZXIgbm9kZUluZGV4IHZhbHVlXG4gICAgICAgIGNvbnN0IG5vZGVJbmRleCA9IGdsdGZCbG9jay5jb25maWd1cmF0aW9uPy5bXCJub2RlSW5kZXhcIl0/LnZhbHVlPy5bMF07XG4gICAgICAgIGlmIChub2RlSW5kZXggPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygbm9kZUluZGV4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub2RlSW5kZXggbm90IGZvdW5kIGluIGNvbmZpZ3VyYXRpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gXCJwaWNrZWRNZXNoX1wiICsgbm9kZUluZGV4O1xuICAgICAgICAvLyBmaW5kIHRoZSBub2RlSW5kZXggdmFsdWVcbiAgICAgICAgc2VyaWFsaXplZE9iamVjdHNbMV0uY29uZmlnLnZhcmlhYmxlID0gdmFyaWFibGVOYW1lO1xuICAgICAgICBjb250ZXh0Ll91c2VyVmFyaWFibGVzW3ZhcmlhYmxlTmFtZV0gPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiTWVzaFwiLFxuICAgICAgICAgICAgaWQ6IGdsb2JhbEdMVEY/Lm5vZGVzPy5bbm9kZUluZGV4XS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LmlkLFxuICAgICAgICAgICAgdW5pcXVlSWQ6IGdsb2JhbEdMVEY/Lm5vZGVzPy5bbm9kZUluZGV4XS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LnVuaXF1ZUlkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gc2VyaWFsaXplZE9iamVjdHM7XG4gICAgfSxcbn0pO1xuXG4vLyBvYmplY3QgbW9kZWwgZXh0ZW5zaW9uIGZvciBzZWxlY3RhYmxlXG5BZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL25vZGVzL3t9L2V4dGVuc2lvbnMvS0hSX25vZGVfc2VsZWN0YWJpbGl0eS9zZWxlY3RhYmxlXCIsIHtcbiAgICBnZXQ6IChub2RlOiBJTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0biA9IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIGFueTtcbiAgICAgICAgaWYgKHRuICYmIHRuLmlzUGlja2FibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRuLmlzUGlja2FibGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzZXQ6ICh2YWx1ZTogYm9vbGVhbiwgbm9kZTogSU5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5fcHJpbWl0aXZlQmFieWxvbk1lc2hlcz8uZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICAgICAgbWVzaC5pc1BpY2thYmxlID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0VGFyZ2V0OiAobm9kZTogSU5vZGUpID0+IG5vZGUuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlLFxuICAgIGdldFByb3BlcnR5TmFtZTogWygpID0+IFwiaXNQaWNrYWJsZVwiXSxcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbn0pO1xuXG4vKipcbiAqIExvYWRlciBleHRlbnNpb24gZm9yIEtIUl9zZWxlY3RhYmlsaXR5XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbmV4cG9ydCBjbGFzcyBLSFJfbm9kZV9zZWxlY3RhYmlsaXR5IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZXh0ZW5zaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcblxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxvYWRlcjogR0xURkxvYWRlcikge1xuICAgICAgICB0aGlzLl9sb2FkZXIgPSBsb2FkZXI7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGxvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXNcbiAgICBwdWJsaWMgYXN5bmMgb25SZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fbG9hZGVyLmdsdGYubm9kZXM/LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLmV4dGVuc2lvbnM/LktIUl9ub2RlX3NlbGVjdGFiaWxpdHkgJiYgbm9kZS5leHRlbnNpb25zPy5LSFJfbm9kZV9zZWxlY3RhYmlsaXR5LnNlbGVjdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5fYmFieWxvblRyYW5zZm9ybU5vZGU/LmdldENoaWxkTWVzaGVzKCkuZm9yRWFjaCgobWVzaCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZXNoLmlzUGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XG4gICAgfVxufVxuXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcbnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FLCB0cnVlLCAobG9hZGVyKSA9PiBuZXcgS0hSX25vZGVfc2VsZWN0YWJpbGl0eShsb2FkZXIpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==