"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Misc_filesInput_js"],{

/***/ "../core/dist/Misc/filesInput.js":
/*!***************************************!*\
  !*** ../core/dist/Misc/filesInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesInput: () => (/* binding */ FilesInput)
/* harmony export */ });
/* harmony import */ var _Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var _Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _filesInputStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filesInputStore */ "../core/dist/Misc/filesInputStore.js");
/* harmony import */ var core_Loading_sceneLoaderFlags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Loading/sceneLoaderFlags */ "../core/dist/Loading/sceneLoaderFlags.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Class used to help managing file picking and drag-n-drop
 */
class FilesInput {
    /**
     * List of files ready to be loaded
     */
    static get FilesToLoad() {
        return _filesInputStore__WEBPACK_IMPORTED_MODULE_2__.FilesInputStore.FilesToLoad;
    }
    /**
     * Creates a new FilesInput
     * @param engine defines the rendering engine
     * @param scene defines the hosting scene
     * @param sceneLoadedCallback callback called when scene (files provided) is loaded
     * @param progressCallback callback called to track progress
     * @param additionalRenderLoopLogicCallback callback called to add user logic to the rendering loop
     * @param textureLoadingCallback callback called when a texture is loading
     * @param startingProcessingFilesCallback callback called when the system is about to process all files
     * @param onReloadCallback callback called when a reload is requested
     * @param errorCallback callback call if an error occurs
     * @param useAppend defines if the file loaded must be appended (true) or have the scene replaced (false, default behavior)
     * @param dontInjectRenderLoop defines if the render loop mustn't be injected into engine (default is false). Used only if useAppend is false.
     */
    constructor(engine, scene, sceneLoadedCallback, progressCallback, additionalRenderLoopLogicCallback, textureLoadingCallback, startingProcessingFilesCallback, onReloadCallback, errorCallback, useAppend = false, dontInjectRenderLoop = false) {
        this.useAppend = useAppend;
        this.dontInjectRenderLoop = dontInjectRenderLoop;
        /**
         * Callback called when a file is processed
         * @returns false to abort the process
         */
        this.onProcessFileCallback = () => {
            return true;
        };
        /**
         * If a loading UI should be displayed while loading a file
         */
        this.displayLoadingUI = true;
        /**
         * Function used when loading the scene file
         * @param sceneFile defines the file to load
         * @param onProgress onProgress callback called while loading the file
         * @returns a promise completing when the load is complete
         */
        this.loadAsync = async (sceneFile, onProgress) => this.useAppend
            ? await _Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.AppendAsync("file:", sceneFile, this._currentScene, onProgress)
            : await _Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.LoadAsync("file:", sceneFile, this._engine, onProgress);
        this._engine = engine;
        this._currentScene = scene;
        this._sceneLoadedCallback = sceneLoadedCallback;
        this._progressCallback = progressCallback;
        this._additionalRenderLoopLogicCallback = additionalRenderLoopLogicCallback;
        this._textureLoadingCallback = textureLoadingCallback;
        this._startingProcessingFilesCallback = startingProcessingFilesCallback;
        this._onReloadCallback = onReloadCallback;
        this._errorCallback = errorCallback;
    }
    /**
     * Calls this function to listen to drag'n'drop events on a specific DOM element
     * @param elementToMonitor defines the DOM element to track
     */
    // should probably be DragAndDrop
    // eslint-disable-next-line @typescript-eslint/naming-convention
    monitorElementForDragNDrop(elementToMonitor) {
        if (elementToMonitor) {
            this._elementToMonitor = elementToMonitor;
            this._dragEnterHandler = (e) => {
                this._drag(e);
            };
            this._dragOverHandler = (e) => {
                this._drag(e);
            };
            this._dropHandler = (e) => {
                this._drop(e);
            };
            this._elementToMonitor.addEventListener("dragenter", this._dragEnterHandler, false);
            this._elementToMonitor.addEventListener("dragover", this._dragOverHandler, false);
            this._elementToMonitor.addEventListener("drop", this._dropHandler, false);
        }
    }
    /** Gets the current list of files to load */
    get filesToLoad() {
        return this._filesToLoad;
    }
    /**
     * Release all associated resources
     */
    dispose() {
        if (!this._elementToMonitor) {
            return;
        }
        this._elementToMonitor.removeEventListener("dragenter", this._dragEnterHandler);
        this._elementToMonitor.removeEventListener("dragover", this._dragOverHandler);
        this._elementToMonitor.removeEventListener("drop", this._dropHandler);
    }
    _renderFunction() {
        if (this._additionalRenderLoopLogicCallback) {
            this._additionalRenderLoopLogicCallback();
        }
        if (this._currentScene) {
            if (this._textureLoadingCallback) {
                const remaining = this._currentScene.getWaitingItemsCount();
                if (remaining > 0) {
                    this._textureLoadingCallback(remaining);
                }
            }
            this._currentScene.render();
        }
    }
    _drag(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    _drop(eventDrop) {
        eventDrop.stopPropagation();
        eventDrop.preventDefault();
        this.loadFiles(eventDrop);
    }
    _traverseFolder(folder, files, remaining, callback) {
        const reader = folder.createReader();
        const relativePath = folder.fullPath.replace(/^\//, "").replace(/(.+?)\/?$/, "$1/");
        reader.readEntries((entries) => {
            remaining.count += entries.length;
            for (const entry of entries) {
                if (entry.isFile) {
                    entry.file((file) => {
                        file.correctName = relativePath + file.name;
                        files.push(file);
                        if (--remaining.count === 0) {
                            callback();
                        }
                    });
                }
                else if (entry.isDirectory) {
                    this._traverseFolder(entry, files, remaining, callback);
                }
            }
            if (--remaining.count === 0) {
                callback();
            }
        });
    }
    _processFiles(files) {
        for (let i = 0; i < files.length; i++) {
            const name = files[i].correctName.toLowerCase();
            const extension = name.split(".").pop();
            if (!this.onProcessFileCallback(files[i], name, extension, (sceneFile) => (this._sceneFileToLoad = sceneFile))) {
                continue;
            }
            if (_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.IsPluginForExtensionAvailable("." + extension)) {
                this._sceneFileToLoad = files[i];
            }
            FilesInput.FilesToLoad[name] = files[i];
        }
    }
    /**
     * Load files from a drop event
     * @param event defines the drop event to use as source
     */
    loadFiles(event) {
        // Handling data transfer via drag'n'drop
        if (event && event.dataTransfer && event.dataTransfer.files) {
            this._filesToLoad = event.dataTransfer.files;
        }
        // Handling files from input files
        if (event && event.target && event.target.files) {
            this._filesToLoad = event.target.files;
        }
        if (!this._filesToLoad || this._filesToLoad.length === 0) {
            return;
        }
        if (this._startingProcessingFilesCallback) {
            this._startingProcessingFilesCallback(this._filesToLoad);
        }
        if (this._filesToLoad && this._filesToLoad.length > 0) {
            const files = [];
            const folders = [];
            const items = event.dataTransfer ? event.dataTransfer.items : null;
            for (let i = 0; i < this._filesToLoad.length; i++) {
                const fileToLoad = this._filesToLoad[i];
                const name = fileToLoad.name.toLowerCase();
                let entry;
                fileToLoad.correctName = name;
                if (items) {
                    const item = items[i];
                    if (item.getAsEntry) {
                        entry = item.getAsEntry();
                    }
                    else if (item.webkitGetAsEntry) {
                        entry = item.webkitGetAsEntry();
                    }
                }
                if (!entry) {
                    files.push(fileToLoad);
                }
                else {
                    if (entry.isDirectory) {
                        folders.push(entry);
                    }
                    else {
                        files.push(fileToLoad);
                    }
                }
            }
            if (folders.length === 0) {
                this._processFiles(files);
                this._processReload();
            }
            else {
                const remaining = { count: folders.length };
                for (const folder of folders) {
                    this._traverseFolder(folder, files, remaining, () => {
                        this._processFiles(files);
                        if (remaining.count === 0) {
                            this._processReload();
                        }
                    });
                }
            }
        }
    }
    _processReload() {
        if (this._onReloadCallback) {
            this._onReloadCallback(this._sceneFileToLoad);
        }
        else {
            this.reload();
        }
    }
    /**
     * Reload the current scene from the loaded files
     */
    reload() {
        // If a scene file has been provided
        if (this._sceneFileToLoad) {
            if (!this.useAppend) {
                if (this._currentScene) {
                    if (_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errorsCount > 0) {
                        _Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.ClearLogCache();
                    }
                    this._engine.stopRenderLoop();
                }
            }
            core_Loading_sceneLoaderFlags__WEBPACK_IMPORTED_MODULE_3__.SceneLoaderFlags.ShowLoadingScreen = false;
            if (this.displayLoadingUI) {
                this._engine.displayLoadingUI();
            }
            this.loadAsync(this._sceneFileToLoad, this._progressCallback)
                // eslint-disable-next-line github/no-then
                .then((scene) => {
                // if appending do nothing
                if (!this.useAppend) {
                    if (this._currentScene) {
                        this._currentScene.dispose();
                    }
                    this._currentScene = scene;
                    // Wait for textures and shaders to be ready
                    this._currentScene.executeWhenReady(() => {
                        if (this.displayLoadingUI) {
                            this._engine.hideLoadingUI();
                        }
                        if (!this.dontInjectRenderLoop) {
                            this._engine.runRenderLoop(() => {
                                this._renderFunction();
                            });
                        }
                    });
                }
                else {
                    if (this.displayLoadingUI) {
                        this._engine.hideLoadingUI();
                    }
                }
                if (this._sceneLoadedCallback && this._currentScene) {
                    this._sceneLoadedCallback(this._sceneFileToLoad, this._currentScene);
                }
            })
                // eslint-disable-next-line github/no-then
                .catch((error) => {
                if (this.displayLoadingUI) {
                    this._engine.hideLoadingUI();
                }
                if (this._errorCallback) {
                    this._errorCallback(this._sceneFileToLoad, this._currentScene, error.message);
                }
            });
        }
        else {
            if (this._filesToLoad.length === 1) {
                const name = this._filesToLoad[0].name.toLowerCase();
                const extension = name.split(".").pop();
                if (extension) {
                    switch (extension.toLowerCase()) {
                        case "dds":
                        case "env":
                        case "hdr": {
                            return; // Ignore error in that case
                        }
                    }
                }
            }
            _Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error("Please provide a valid .babylon file.");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01pc2NfZmlsZXNJbnB1dF9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXdDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFVQTtBQUNBO0FBL0RBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQTJDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZmlsZXNJbnB1dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcIi4uL0VuZ2luZXMvYWJzdHJhY3RFbmdpbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQgfSBmcm9tIFwiLi4vTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBTY2VuZUxvYWRlciB9IGZyb20gXCIuLi9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBGaWxlc0lucHV0U3RvcmUgfSBmcm9tIFwiLi9maWxlc0lucHV0U3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBTY2VuZUxvYWRlckZsYWdzIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlckZsYWdzXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdXNlZCB0byBoZWxwIG1hbmFnaW5nIGZpbGUgcGlja2luZyBhbmQgZHJhZy1uLWRyb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaWxlc0lucHV0IHtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBvZiBmaWxlcyByZWFkeSB0byBiZSBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgRmlsZXNUb0xvYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIEZpbGVzSW5wdXRTdG9yZS5GaWxlc1RvTG9hZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIGEgZmlsZSBpcyBwcm9jZXNzZWRcclxuICAgICAqIEByZXR1cm5zIGZhbHNlIHRvIGFib3J0IHRoZSBwcm9jZXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblByb2Nlc3NGaWxlQ2FsbGJhY2s6IChmaWxlOiBGaWxlLCBuYW1lOiBzdHJpbmcsIGV4dGVuc2lvbjogc3RyaW5nLCBzZXRTY2VuZUZpbGVUb0xvYWQ6IChzY2VuZUZpbGU6IEZpbGUpID0+IHZvaWQpID0+IGJvb2xlYW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgYSBsb2FkaW5nIFVJIHNob3VsZCBiZSBkaXNwbGF5ZWQgd2hpbGUgbG9hZGluZyBhIGZpbGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3BsYXlMb2FkaW5nVUk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdXNlZCB3aGVuIGxvYWRpbmcgdGhlIHNjZW5lIGZpbGVcclxuICAgICAqIEBwYXJhbSBzY2VuZUZpbGUgZGVmaW5lcyB0aGUgZmlsZSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyBvblByb2dyZXNzIGNhbGxiYWNrIGNhbGxlZCB3aGlsZSBsb2FkaW5nIHRoZSBmaWxlXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgY29tcGxldGluZyB3aGVuIHRoZSBsb2FkIGlzIGNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmM6IChzY2VuZUZpbGU6IEZpbGUsIG9uUHJvZ3Jlc3M6IE51bGxhYmxlPChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZD4pID0+IFByb21pc2U8U2NlbmU+ID0gYXN5bmMgKHNjZW5lRmlsZSwgb25Qcm9ncmVzcykgPT5cclxuICAgICAgICB0aGlzLnVzZUFwcGVuZFxyXG4gICAgICAgICAgICA/IGF3YWl0IFNjZW5lTG9hZGVyLkFwcGVuZEFzeW5jKFwiZmlsZTpcIiwgc2NlbmVGaWxlLCB0aGlzLl9jdXJyZW50U2NlbmUsIG9uUHJvZ3Jlc3MpXHJcbiAgICAgICAgICAgIDogYXdhaXQgU2NlbmVMb2FkZXIuTG9hZEFzeW5jKFwiZmlsZTpcIiwgc2NlbmVGaWxlLCB0aGlzLl9lbmdpbmUsIG9uUHJvZ3Jlc3MpO1xyXG5cclxuICAgIHByaXZhdGUgX2VuZ2luZTogQWJzdHJhY3RFbmdpbmU7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50U2NlbmU6IE51bGxhYmxlPFNjZW5lPjtcclxuICAgIHByaXZhdGUgX3NjZW5lTG9hZGVkQ2FsbGJhY2s6IE51bGxhYmxlPChzY2VuZUZpbGU6IEZpbGUsIHNjZW5lOiBTY2VuZSkgPT4gdm9pZD47XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc0NhbGxiYWNrOiBOdWxsYWJsZTwocHJvZ3Jlc3M6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBfYWRkaXRpb25hbFJlbmRlckxvb3BMb2dpY0NhbGxiYWNrOiBOdWxsYWJsZTwoKSA9PiB2b2lkPjtcclxuICAgIHByaXZhdGUgX3RleHR1cmVMb2FkaW5nQ2FsbGJhY2s6IE51bGxhYmxlPChyZW1haW5pbmc6IG51bWJlcikgPT4gdm9pZD47XHJcbiAgICBwcml2YXRlIF9zdGFydGluZ1Byb2Nlc3NpbmdGaWxlc0NhbGxiYWNrOiBOdWxsYWJsZTwoZmlsZXM/OiBGaWxlW10pID0+IHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBfb25SZWxvYWRDYWxsYmFjazogTnVsbGFibGU8KHNjZW5lRmlsZTogRmlsZSkgPT4gdm9pZD47XHJcbiAgICBwcml2YXRlIF9lcnJvckNhbGxiYWNrOiBOdWxsYWJsZTwoc2NlbmVGaWxlOiBGaWxlLCBzY2VuZTogTnVsbGFibGU8U2NlbmU+LCBtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFRvTW9uaXRvcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NlbmVGaWxlVG9Mb2FkOiBGaWxlO1xyXG4gICAgcHJpdmF0ZSBfZmlsZXNUb0xvYWQ6IEZpbGVbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRmlsZXNJbnB1dFxyXG4gICAgICogQHBhcmFtIGVuZ2luZSBkZWZpbmVzIHRoZSByZW5kZXJpbmcgZW5naW5lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgaG9zdGluZyBzY2VuZVxyXG4gICAgICogQHBhcmFtIHNjZW5lTG9hZGVkQ2FsbGJhY2sgY2FsbGJhY2sgY2FsbGVkIHdoZW4gc2NlbmUgKGZpbGVzIHByb3ZpZGVkKSBpcyBsb2FkZWRcclxuICAgICAqIEBwYXJhbSBwcm9ncmVzc0NhbGxiYWNrIGNhbGxiYWNrIGNhbGxlZCB0byB0cmFjayBwcm9ncmVzc1xyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxSZW5kZXJMb29wTG9naWNDYWxsYmFjayBjYWxsYmFjayBjYWxsZWQgdG8gYWRkIHVzZXIgbG9naWMgdG8gdGhlIHJlbmRlcmluZyBsb29wXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZUxvYWRpbmdDYWxsYmFjayBjYWxsYmFjayBjYWxsZWQgd2hlbiBhIHRleHR1cmUgaXMgbG9hZGluZ1xyXG4gICAgICogQHBhcmFtIHN0YXJ0aW5nUHJvY2Vzc2luZ0ZpbGVzQ2FsbGJhY2sgY2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHN5c3RlbSBpcyBhYm91dCB0byBwcm9jZXNzIGFsbCBmaWxlc1xyXG4gICAgICogQHBhcmFtIG9uUmVsb2FkQ2FsbGJhY2sgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYSByZWxvYWQgaXMgcmVxdWVzdGVkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBjYWxsYmFjayBjYWxsIGlmIGFuIGVycm9yIG9jY3Vyc1xyXG4gICAgICogQHBhcmFtIHVzZUFwcGVuZCBkZWZpbmVzIGlmIHRoZSBmaWxlIGxvYWRlZCBtdXN0IGJlIGFwcGVuZGVkICh0cnVlKSBvciBoYXZlIHRoZSBzY2VuZSByZXBsYWNlZCAoZmFsc2UsIGRlZmF1bHQgYmVoYXZpb3IpXHJcbiAgICAgKiBAcGFyYW0gZG9udEluamVjdFJlbmRlckxvb3AgZGVmaW5lcyBpZiB0aGUgcmVuZGVyIGxvb3AgbXVzdG4ndCBiZSBpbmplY3RlZCBpbnRvIGVuZ2luZSAoZGVmYXVsdCBpcyBmYWxzZSkuIFVzZWQgb25seSBpZiB1c2VBcHBlbmQgaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGVuZ2luZTogQWJzdHJhY3RFbmdpbmUsXHJcbiAgICAgICAgc2NlbmU6IE51bGxhYmxlPFNjZW5lPixcclxuICAgICAgICBzY2VuZUxvYWRlZENhbGxiYWNrOiBOdWxsYWJsZTwoc2NlbmVGaWxlOiBGaWxlLCBzY2VuZTogU2NlbmUpID0+IHZvaWQ+LFxyXG4gICAgICAgIHByb2dyZXNzQ2FsbGJhY2s6IE51bGxhYmxlPChwcm9ncmVzczogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZD4sXHJcbiAgICAgICAgYWRkaXRpb25hbFJlbmRlckxvb3BMb2dpY0NhbGxiYWNrOiBOdWxsYWJsZTwoKSA9PiB2b2lkPixcclxuICAgICAgICB0ZXh0dXJlTG9hZGluZ0NhbGxiYWNrOiBOdWxsYWJsZTwocmVtYWluaW5nOiBudW1iZXIpID0+IHZvaWQ+LFxyXG4gICAgICAgIHN0YXJ0aW5nUHJvY2Vzc2luZ0ZpbGVzQ2FsbGJhY2s6IE51bGxhYmxlPChmaWxlcz86IEZpbGVbXSkgPT4gdm9pZD4sXHJcbiAgICAgICAgb25SZWxvYWRDYWxsYmFjazogTnVsbGFibGU8KHNjZW5lRmlsZTogRmlsZSkgPT4gdm9pZD4sXHJcbiAgICAgICAgZXJyb3JDYWxsYmFjazogTnVsbGFibGU8KHNjZW5lRmlsZTogRmlsZSwgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiwgbWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkPixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdXNlQXBwZW5kID0gZmFsc2UsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGRvbnRJbmplY3RSZW5kZXJMb29wID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2VuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2NlbmVMb2FkZWRDYWxsYmFjayA9IHNjZW5lTG9hZGVkQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsYmFjayA9IHByb2dyZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbFJlbmRlckxvb3BMb2dpY0NhbGxiYWNrID0gYWRkaXRpb25hbFJlbmRlckxvb3BMb2dpY0NhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVMb2FkaW5nQ2FsbGJhY2sgPSB0ZXh0dXJlTG9hZGluZ0NhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0aW5nUHJvY2Vzc2luZ0ZpbGVzQ2FsbGJhY2sgPSBzdGFydGluZ1Byb2Nlc3NpbmdGaWxlc0NhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX29uUmVsb2FkQ2FsbGJhY2sgPSBvblJlbG9hZENhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yQ2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RyYWdFbnRlckhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9kcmFnT3ZlckhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9kcm9wSGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIHRoaXMgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIGRyYWcnbidkcm9wIGV2ZW50cyBvbiBhIHNwZWNpZmljIERPTSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudFRvTW9uaXRvciBkZWZpbmVzIHRoZSBET00gZWxlbWVudCB0byB0cmFja1xyXG4gICAgICovXHJcbiAgICAvLyBzaG91bGQgcHJvYmFibHkgYmUgRHJhZ0FuZERyb3BcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIHB1YmxpYyBtb25pdG9yRWxlbWVudEZvckRyYWdORHJvcChlbGVtZW50VG9Nb25pdG9yOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChlbGVtZW50VG9Nb25pdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRUb01vbml0b3IgPSBlbGVtZW50VG9Nb25pdG9yO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0VudGVySGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnT3ZlckhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZyhlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fZHJvcEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJvcChlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRUb01vbml0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCB0aGlzLl9kcmFnRW50ZXJIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRUb01vbml0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuX2RyYWdPdmVySGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50VG9Nb25pdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuX2Ryb3BIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXRzIHRoZSBjdXJyZW50IGxpc3Qgb2YgZmlsZXMgdG8gbG9hZCAqL1xyXG4gICAgcHVibGljIGdldCBmaWxlc1RvTG9hZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZXNUb0xvYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxlYXNlIGFsbCBhc3NvY2lhdGVkIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRUb01vbml0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFRvTW9uaXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIHRoaXMuX2RyYWdFbnRlckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRUb01vbml0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuX2RyYWdPdmVySGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFRvTW9uaXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLl9kcm9wSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FkZGl0aW9uYWxSZW5kZXJMb29wTG9naWNDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRpdGlvbmFsUmVuZGVyTG9vcExvZ2ljQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50U2NlbmUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RleHR1cmVMb2FkaW5nQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMuX2N1cnJlbnRTY2VuZS5nZXRXYWl0aW5nSXRlbXNDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dHVyZUxvYWRpbmdDYWxsYmFjayhyZW1haW5pbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZS5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZyhlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kcm9wKGV2ZW50RHJvcDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnREcm9wLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50RHJvcC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRGaWxlcyhldmVudERyb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RyYXZlcnNlRm9sZGVyKGZvbGRlcjogYW55LCBmaWxlczogQXJyYXk8YW55PiwgcmVtYWluaW5nOiB7IGNvdW50OiBudW1iZXIgfSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBmb2xkZXIuY3JlYXRlUmVhZGVyKCk7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gZm9sZGVyLmZ1bGxQYXRoLnJlcGxhY2UoL15cXC8vLCBcIlwiKS5yZXBsYWNlKC8oLis/KVxcLz8kLywgXCIkMS9cIik7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRFbnRyaWVzKChlbnRyaWVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmVtYWluaW5nLmNvdW50ICs9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5maWxlKChmaWxlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5jb3JyZWN0TmFtZSA9IHJlbGF0aXZlUGF0aCArIGZpbGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZy5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYXZlcnNlRm9sZGVyKGVudHJ5LCBmaWxlcywgcmVtYWluaW5nLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgtLXJlbWFpbmluZy5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Byb2Nlc3NGaWxlcyhmaWxlczogQXJyYXk8YW55Pik6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpbGVzW2ldLmNvcnJlY3ROYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IG5hbWUuc3BsaXQoXCIuXCIpLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9uUHJvY2Vzc0ZpbGVDYWxsYmFjayhmaWxlc1tpXSwgbmFtZSwgZXh0ZW5zaW9uLCAoc2NlbmVGaWxlKSA9PiAodGhpcy5fc2NlbmVGaWxlVG9Mb2FkID0gc2NlbmVGaWxlKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoU2NlbmVMb2FkZXIuSXNQbHVnaW5Gb3JFeHRlbnNpb25BdmFpbGFibGUoXCIuXCIgKyBleHRlbnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZUZpbGVUb0xvYWQgPSBmaWxlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRmlsZXNJbnB1dC5GaWxlc1RvTG9hZFtuYW1lXSA9IGZpbGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgZmlsZXMgZnJvbSBhIGRyb3AgZXZlbnRcclxuICAgICAqIEBwYXJhbSBldmVudCBkZWZpbmVzIHRoZSBkcm9wIGV2ZW50IHRvIHVzZSBhcyBzb3VyY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlcyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSGFuZGxpbmcgZGF0YSB0cmFuc2ZlciB2aWEgZHJhZyduJ2Ryb3BcclxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9maWxlc1RvTG9hZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhhbmRsaW5nIGZpbGVzIGZyb20gaW5wdXQgZmlsZXNcclxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5maWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9maWxlc1RvTG9hZCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZmlsZXNUb0xvYWQgfHwgdGhpcy5fZmlsZXNUb0xvYWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydGluZ1Byb2Nlc3NpbmdGaWxlc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0aW5nUHJvY2Vzc2luZ0ZpbGVzQ2FsbGJhY2sodGhpcy5fZmlsZXNUb0xvYWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpbGVzVG9Mb2FkICYmIHRoaXMuX2ZpbGVzVG9Mb2FkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBmb2xkZXJzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsZXNUb0xvYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVUb0xvYWQ6IGFueSA9IHRoaXMuX2ZpbGVzVG9Mb2FkW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpbGVUb0xvYWQubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudHJ5O1xyXG5cclxuICAgICAgICAgICAgICAgIGZpbGVUb0xvYWQuY29ycmVjdE5hbWUgPSBuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZXRBc0VudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gaXRlbS5nZXRBc0VudHJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLndlYmtpdEdldEFzRW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBpdGVtLndlYmtpdEdldEFzRW50cnkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZmlsZVRvTG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzLnB1c2goZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZmlsZVRvTG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9sZGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NGaWxlcyhmaWxlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzUmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmcgPSB7IGNvdW50OiBmb2xkZXJzLmxlbmd0aCB9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmb2xkZXIgb2YgZm9sZGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYXZlcnNlRm9sZGVyKGZvbGRlciwgZmlsZXMsIHJlbWFpbmluZywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzRmlsZXMoZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZy5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc1JlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc1JlbG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25SZWxvYWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblJlbG9hZENhbGxiYWNrKHRoaXMuX3NjZW5lRmlsZVRvTG9hZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc2NlbmUgZnJvbSB0aGUgbG9hZGVkIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWxvYWQoKSB7XHJcbiAgICAgICAgLy8gSWYgYSBzY2VuZSBmaWxlIGhhcyBiZWVuIHByb3ZpZGVkXHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lRmlsZVRvTG9hZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMudXNlQXBwZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKExvZ2dlci5lcnJvcnNDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkNsZWFyTG9nQ2FjaGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5naW5lLnN0b3BSZW5kZXJMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFNjZW5lTG9hZGVyRmxhZ3MuU2hvd0xvYWRpbmdTY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheUxvYWRpbmdVSSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5naW5lLmRpc3BsYXlMb2FkaW5nVUkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkQXN5bmModGhpcy5fc2NlbmVGaWxlVG9Mb2FkLCB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc2NlbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhcHBlbmRpbmcgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VBcHBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciB0ZXh0dXJlcyBhbmQgc2hhZGVycyB0byBiZSByZWFkeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50U2NlbmUuZXhlY3V0ZVdoZW5SZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5TG9hZGluZ1VJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5naW5lLmhpZGVMb2FkaW5nVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kb250SW5qZWN0UmVuZGVyTG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheUxvYWRpbmdVSSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5naW5lLmhpZGVMb2FkaW5nVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NlbmVMb2FkZWRDYWxsYmFjayAmJiB0aGlzLl9jdXJyZW50U2NlbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NlbmVMb2FkZWRDYWxsYmFjayh0aGlzLl9zY2VuZUZpbGVUb0xvYWQsIHRoaXMuX2N1cnJlbnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlMb2FkaW5nVUkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5naW5lLmhpZGVMb2FkaW5nVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JDYWxsYmFjayh0aGlzLl9zY2VuZUZpbGVUb0xvYWQsIHRoaXMuX2N1cnJlbnRTY2VuZSwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGVzVG9Mb2FkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2ZpbGVzVG9Mb2FkWzBdLm5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IG5hbWUuc3BsaXQoXCIuXCIpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRkc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW52XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoZHJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgZXJyb3IgaW4gdGhhdCBjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCAuYmFieWxvbiBmaWxlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9