"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["src_services_panes_tools_importService_tsx"],{

/***/ "./src/components/tools/importTools.tsx":
/*!**********************************************!*\
  !*** ./src/components/tools/importTools.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAnimationsTools: () => (/* binding */ ImportAnimationsTools)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var core_Misc_filesInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/filesInput */ "../core/dist/Misc/filesInput.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/switchPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/switchPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_dropdownPropertyLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/dropdownPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/dropdownPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_fileUploadLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/fileUploadLine */ "../sharedUiComponents/src/fluent/hoc/fileUploadLine.tsx");
/* harmony import */ var shared_ui_components_fluent_primitives_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/collapse */ "../sharedUiComponents/src/fluent/primitives/collapse.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();









const AnimationGroupLoadingModes = [
    { label: "Clean", value: core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.SceneLoaderAnimationGroupLoadingMode.Clean },
    { label: "Stop", value: core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.SceneLoaderAnimationGroupLoadingMode.Stop },
    { label: "Sync", value: core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.SceneLoaderAnimationGroupLoadingMode.Sync },
    { label: "NoSync", value: core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.SceneLoaderAnimationGroupLoadingMode.NoSync },
];
const ImportAnimationsTools = ({ scene }) => {
    _react_refresh_temp_2();
    const [importDefaults, setImportDefaults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        overwriteAnimations: true,
        animationGroupLoadingMode: core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.SceneLoaderAnimationGroupLoadingMode.Clean,
    });
    const importAnimations = (event) => {
        const reloadAsync = async function (sceneFile) {
            if (sceneFile) {
                try {
                    await (0,core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.ImportAnimationsAsync)(sceneFile, scene, {
                        overwriteAnimations: importDefaults.overwriteAnimations,
                        animationGroupLoadingMode: importDefaults.animationGroupLoadingMode,
                    });
                    if (scene.animationGroups.length > 0) {
                        const currentGroup = scene.animationGroups[0];
                        currentGroup.play(true);
                    }
                }
                catch (error) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Error(`Error importing animations: ${error}`);
                }
            }
        };
        const filesInputAnimation = new core_Misc_filesInput__WEBPACK_IMPORTED_MODULE_3__.FilesInput(scene.getEngine(), scene, null, null, null, null, null, reloadAsync, null);
        filesInputAnimation.loadFiles(event);
        filesInputAnimation.dispose();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_fileUploadLine__WEBPACK_IMPORTED_MODULE_7__.FileUploadLine, { label: "Import Animations", accept: "gltf", onClick: (evt) => importAnimations(evt) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_switchPropertyLine__WEBPACK_IMPORTED_MODULE_5__.SwitchPropertyLine, { label: "Overwrite Animations", value: importDefaults.overwriteAnimations, onChange: (value) => {
                    setImportDefaults({ ...importDefaults, overwriteAnimations: value });
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_collapse__WEBPACK_IMPORTED_MODULE_8__.Collapse, { visible: !importDefaults.overwriteAnimations, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_dropdownPropertyLine__WEBPACK_IMPORTED_MODULE_6__.NumberDropdownPropertyLine, { label: "Animation Merge Mode", options: AnimationGroupLoadingModes, value: importDefaults.animationGroupLoadingMode, onChange: (value) => {
                        setImportDefaults({ ...importDefaults, animationGroupLoadingMode: value });
                    } }) })] }));
};
_react_refresh_temp_1 = ImportAnimationsTools;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "ImportAnimationsTools");
_react_refresh_temp_2(ImportAnimationsTools, "Z2WrjeLeQUZXE9qkp1B79iKHCoU=");


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

/***/ "./src/services/panes/tools/importService.tsx":
/*!****************************************************!*\
  !*** ./src/services/panes/tools/importService.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneImportServiceDefinition: () => (/* binding */ SceneImportServiceDefinition),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _toolsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolsService */ "./src/services/panes/toolsService.tsx");
/* harmony import */ var _components_tools_importTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/tools/importTools */ "./src/components/tools/importTools.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




const SceneImportServiceDefinition = {
    friendlyName: "Import Tool",
    consumes: [_toolsService__WEBPACK_IMPORTED_MODULE_1__.ToolsServiceIdentity],
    factory: (toolsService) => {
        const contentRegistration = toolsService.addSectionContent({
            key: "AnimationImport",
            section: "Animation Import",
            component: ({ context }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_tools_importTools__WEBPACK_IMPORTED_MODULE_2__.ImportAnimationsTools, { scene: context }),
        });
        return {
            dispose: () => {
                contentRegistration.dispose();
            },
        };
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    serviceDefinitions: [SceneImportServiceDefinition],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NlcnZpY2VzX3BhbmVzX3Rvb2xzX2ltcG9ydFNlcnZpY2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQVFBO0FBQ0E7QUFLQTtBQXBEQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvaW5zcGVjdG9yLXYyL3NyYy9jb21wb25lbnRzL3Rvb2xzL2ltcG9ydFRvb2xzLnRzeCIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvc2VydmljZXMvcGFuZXMvdG9vbHMvaW1wb3J0U2VydmljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBEcm9wZG93bk9wdGlvbiB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvcHJpbWl0aXZlcy9kcm9wZG93blwiO1xyXG5pbXBvcnQgeyBJbXBvcnRBbmltYXRpb25zQXN5bmMsIFNjZW5lTG9hZGVyQW5pbWF0aW9uR3JvdXBMb2FkaW5nTW9kZSB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgRmlsZXNJbnB1dCB9IGZyb20gXCJjb3JlL01pc2MvZmlsZXNJbnB1dFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBTd2l0Y2hQcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL3N3aXRjaFByb3BlcnR5TGluZVwiO1xyXG5pbXBvcnQgeyBOdW1iZXJEcm9wZG93blByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvZHJvcGRvd25Qcm9wZXJ0eUxpbmVcIjtcclxuaW1wb3J0IHsgRmlsZVVwbG9hZExpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9maWxlVXBsb2FkTGluZVwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvcHJpbWl0aXZlcy9jb2xsYXBzZVwiO1xyXG5cclxuY29uc3QgQW5pbWF0aW9uR3JvdXBMb2FkaW5nTW9kZXMgPSBbXHJcbiAgICB7IGxhYmVsOiBcIkNsZWFuXCIsIHZhbHVlOiBTY2VuZUxvYWRlckFuaW1hdGlvbkdyb3VwTG9hZGluZ01vZGUuQ2xlYW4gfSxcclxuICAgIHsgbGFiZWw6IFwiU3RvcFwiLCB2YWx1ZTogU2NlbmVMb2FkZXJBbmltYXRpb25Hcm91cExvYWRpbmdNb2RlLlN0b3AgfSxcclxuICAgIHsgbGFiZWw6IFwiU3luY1wiLCB2YWx1ZTogU2NlbmVMb2FkZXJBbmltYXRpb25Hcm91cExvYWRpbmdNb2RlLlN5bmMgfSxcclxuICAgIHsgbGFiZWw6IFwiTm9TeW5jXCIsIHZhbHVlOiBTY2VuZUxvYWRlckFuaW1hdGlvbkdyb3VwTG9hZGluZ01vZGUuTm9TeW5jIH0sXHJcbl0gYXMgY29uc3Qgc2F0aXNmaWVzIERyb3Bkb3duT3B0aW9uPG51bWJlcj5bXTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbXBvcnRBbmltYXRpb25zVG9vbHM6IEZ1bmN0aW9uQ29tcG9uZW50PHsgc2NlbmU6IFNjZW5lIH0+ID0gKHsgc2NlbmUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ltcG9ydERlZmF1bHRzLCBzZXRJbXBvcnREZWZhdWx0c10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgb3ZlcndyaXRlQW5pbWF0aW9uczogdHJ1ZSxcclxuICAgICAgICBhbmltYXRpb25Hcm91cExvYWRpbmdNb2RlOiBTY2VuZUxvYWRlckFuaW1hdGlvbkdyb3VwTG9hZGluZ01vZGUuQ2xlYW4sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRBbmltYXRpb25zID0gKGV2ZW50OiBGaWxlTGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbG9hZEFzeW5jID0gYXN5bmMgZnVuY3Rpb24gKHNjZW5lRmlsZTogRmlsZSkge1xyXG4gICAgICAgICAgICBpZiAoc2NlbmVGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEltcG9ydEFuaW1hdGlvbnNBc3luYyhzY2VuZUZpbGUsIHNjZW5lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZUFuaW1hdGlvbnM6IGltcG9ydERlZmF1bHRzLm92ZXJ3cml0ZUFuaW1hdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwTG9hZGluZ01vZGU6IGltcG9ydERlZmF1bHRzLmFuaW1hdGlvbkdyb3VwTG9hZGluZ01vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50R3JvdXAgPSBzY2VuZS5hbmltYXRpb25Hcm91cHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cC5wbGF5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKGBFcnJvciBpbXBvcnRpbmcgYW5pbWF0aW9uczogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGVzSW5wdXRBbmltYXRpb24gPSBuZXcgRmlsZXNJbnB1dChzY2VuZS5nZXRFbmdpbmUoKSwgc2NlbmUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIHJlbG9hZEFzeW5jLCBudWxsKTtcclxuICAgICAgICBmaWxlc0lucHV0QW5pbWF0aW9uLmxvYWRGaWxlcyhldmVudCk7XHJcbiAgICAgICAgZmlsZXNJbnB1dEFuaW1hdGlvbi5kaXNwb3NlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZpbGVVcGxvYWRMaW5lIGxhYmVsPVwiSW1wb3J0IEFuaW1hdGlvbnNcIiBhY2NlcHQ9XCJnbHRmXCIgb25DbGljaz17KGV2dDogRmlsZUxpc3QpID0+IGltcG9ydEFuaW1hdGlvbnMoZXZ0KX0gLz5cclxuICAgICAgICAgICAgPFN3aXRjaFByb3BlcnR5TGluZVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJPdmVyd3JpdGUgQW5pbWF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW1wb3J0RGVmYXVsdHMub3ZlcndyaXRlQW5pbWF0aW9uc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbXBvcnREZWZhdWx0cyh7IC4uLmltcG9ydERlZmF1bHRzLCBvdmVyd3JpdGVBbmltYXRpb25zOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSB2aXNpYmxlPXshaW1wb3J0RGVmYXVsdHMub3ZlcndyaXRlQW5pbWF0aW9uc30+XHJcbiAgICAgICAgICAgICAgICA8TnVtYmVyRHJvcGRvd25Qcm9wZXJ0eUxpbmVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuaW1hdGlvbiBNZXJnZSBNb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtBbmltYXRpb25Hcm91cExvYWRpbmdNb2Rlc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW1wb3J0RGVmYXVsdHMuYW5pbWF0aW9uR3JvdXBMb2FkaW5nTW9kZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEltcG9ydERlZmF1bHRzKHsgLi4uaW1wb3J0RGVmYXVsdHMsIGFuaW1hdGlvbkdyb3VwTG9hZGluZ01vZGU6IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHR5cGUgeyBTZXJ2aWNlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGFyaXR5L3NlcnZpY2VEZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFRvb2xzU2VydmljZUlkZW50aXR5IH0gZnJvbSBcIi4uL3Rvb2xzU2VydmljZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElUb29sc1NlcnZpY2UgfSBmcm9tIFwiLi4vdG9vbHNTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEltcG9ydEFuaW1hdGlvbnNUb29scyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3Rvb2xzL2ltcG9ydFRvb2xzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2NlbmVJbXBvcnRTZXJ2aWNlRGVmaW5pdGlvbjogU2VydmljZURlZmluaXRpb248W10sIFtJVG9vbHNTZXJ2aWNlXT4gPSB7XHJcbiAgICBmcmllbmRseU5hbWU6IFwiSW1wb3J0IFRvb2xcIixcclxuICAgIGNvbnN1bWVzOiBbVG9vbHNTZXJ2aWNlSWRlbnRpdHldLFxyXG4gICAgZmFjdG9yeTogKHRvb2xzU2VydmljZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRSZWdpc3RyYXRpb24gPSB0b29sc1NlcnZpY2UuYWRkU2VjdGlvbkNvbnRlbnQoe1xyXG4gICAgICAgICAgICBrZXk6IFwiQW5pbWF0aW9uSW1wb3J0XCIsXHJcbiAgICAgICAgICAgIHNlY3Rpb246IFwiQW5pbWF0aW9uIEltcG9ydFwiLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICh7IGNvbnRleHQgfSkgPT4gPEltcG9ydEFuaW1hdGlvbnNUb29scyBzY2VuZT17Y29udGV4dH0gLz4sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRSZWdpc3RyYXRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2VydmljZURlZmluaXRpb25zOiBbU2NlbmVJbXBvcnRTZXJ2aWNlRGVmaW5pdGlvbl0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==