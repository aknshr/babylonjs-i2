"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_STL_stlFileLoader_js"],{

/***/ "../loaders/dist/STL/stlFileLoader.js":
/*!********************************************!*\
  !*** ../loaders/dist/STL/stlFileLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STLFileLoader: () => (/* binding */ STLFileLoader)
/* harmony export */ });
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var core_assetContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/assetContainer */ "../core/dist/assetContainer.js");
/* harmony import */ var _stlFileLoader_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stlFileLoader.metadata */ "../loaders/dist/STL/stlFileLoader.metadata.js");
/* harmony import */ var core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * STL file type loader.
 * This is a babylon scene loader plugin.
 */
class STLFileLoader {
    constructor() {
        /** @internal */
        this.solidPattern = /solid (\S*)([\S\s]*?)endsolid[ ]*(\S*)/g;
        /** @internal */
        this.facetsPattern = /facet([\s\S]*?)endfacet/g;
        /** @internal */
        this.normalPattern = /normal[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g;
        /** @internal */
        this.vertexPattern = /vertex[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g;
        /**
         * Defines the name of the plugin.
         */
        this.name = _stlFileLoader_metadata__WEBPACK_IMPORTED_MODULE_5__.STLFileLoaderMetadata.name;
        /**
         * Defines the extensions the stl loader is able to load.
         * force data to come in as an ArrayBuffer
         * we'll convert to string if it looks like it's an ASCII .stl
         */
        this.extensions = _stlFileLoader_metadata__WEBPACK_IMPORTED_MODULE_5__.STLFileLoaderMetadata.extensions;
    }
    /**
     * Import meshes into a scene.
     * @param meshesNames An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     * @param scene The scene to import into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param meshes The meshes array to import into
     * @returns True if successful or false otherwise
     */
    importMesh(meshesNames, scene, data, rootUrl, meshes) {
        let matches;
        if (typeof data !== "string") {
            if (this._isBinary(data)) {
                // binary .stl
                const babylonMesh = new core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_2__.Mesh("stlmesh", scene);
                this._parseBinary(babylonMesh, data);
                if (meshes) {
                    meshes.push(babylonMesh);
                }
                return true;
            }
            // ASCII .stl
            // convert to string
            data = new TextDecoder().decode(new Uint8Array(data));
        }
        //if arrived here, data is a string, containing the STLA data.
        while ((matches = this.solidPattern.exec(data))) {
            let meshName = matches[1];
            const meshNameFromEnd = matches[3];
            if (meshNameFromEnd && meshName != meshNameFromEnd) {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Error("Error in STL, solid name != endsolid name");
                return false;
            }
            // check meshesNames
            if (meshesNames && meshName) {
                if (meshesNames instanceof Array) {
                    if (!meshesNames.indexOf(meshName)) {
                        continue;
                    }
                }
                else {
                    if (meshName !== meshesNames) {
                        continue;
                    }
                }
            }
            // stl mesh name can be empty as well
            meshName = meshName || "stlmesh";
            const babylonMesh = new core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_2__.Mesh(meshName, scene);
            this._parseASCII(babylonMesh, matches[2]);
            if (meshes) {
                meshes.push(babylonMesh);
            }
        }
        return true;
    }
    /**
     * Load into a scene.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @returns true if successful or false otherwise
     */
    load(scene, data, rootUrl) {
        const result = this.importMesh(null, scene, data, rootUrl, null);
        return result;
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @returns The loaded asset container
     */
    loadAssetContainer(scene, data, rootUrl) {
        const container = new core_assetContainer__WEBPACK_IMPORTED_MODULE_4__.AssetContainer(scene);
        scene._blockEntityCollection = true;
        this.importMesh(null, scene, data, rootUrl, container.meshes);
        scene._blockEntityCollection = false;
        return container;
    }
    _isBinary(data) {
        // check if file size is correct for binary stl
        const reader = new DataView(data);
        // A Binary STL header is 80 bytes, if the data size is not great than
        // that then it's not a binary STL.
        if (reader.byteLength <= 80) {
            return false;
        }
        const faceSize = (32 / 8) * 3 + (32 / 8) * 3 * 3 + 16 / 8;
        const nFaces = reader.getUint32(80, true);
        if (80 + 32 / 8 + nFaces * faceSize === reader.byteLength) {
            return true;
        }
        // US-ASCII begin with 's', 'o', 'l', 'i', 'd'
        const ascii = [115, 111, 108, 105, 100];
        for (let off = 0; off < 5; off++) {
            if (reader.getUint8(off) !== ascii[off]) {
                return true;
            }
        }
        return false;
    }
    _parseBinary(mesh, data) {
        const reader = new DataView(data);
        const faces = reader.getUint32(80, true);
        const dataOffset = 84;
        const faceLength = 12 * 4 + 2;
        let offset = 0;
        const positions = new Float32Array(faces * 3 * 3);
        const normals = new Float32Array(faces * 3 * 3);
        const indices = new Uint32Array(faces * 3);
        let indicesCount = 0;
        for (let face = 0; face < faces; face++) {
            const start = dataOffset + face * faceLength;
            const normalX = reader.getFloat32(start, true);
            const normalY = reader.getFloat32(start + 4, true);
            const normalZ = reader.getFloat32(start + 8, true);
            for (let i = 1; i <= 3; i++) {
                const vertexstart = start + i * 12;
                // ordering is intentional to match ascii import
                positions[offset] = reader.getFloat32(vertexstart, true);
                normals[offset] = normalX;
                if (!STLFileLoader.DO_NOT_ALTER_FILE_COORDINATES) {
                    positions[offset + 2] = reader.getFloat32(vertexstart + 4, true);
                    positions[offset + 1] = reader.getFloat32(vertexstart + 8, true);
                    normals[offset + 2] = normalY;
                    normals[offset + 1] = normalZ;
                }
                else {
                    positions[offset + 1] = reader.getFloat32(vertexstart + 4, true);
                    positions[offset + 2] = reader.getFloat32(vertexstart + 8, true);
                    normals[offset + 1] = normalY;
                    normals[offset + 2] = normalZ;
                }
                offset += 3;
            }
            if (STLFileLoader.DO_NOT_ALTER_FILE_COORDINATES) {
                indices[indicesCount] = indicesCount;
                indices[indicesCount + 1] = indicesCount + 2;
                indices[indicesCount + 2] = indicesCount + 1;
                indicesCount += 3;
            }
            else {
                indices[indicesCount] = indicesCount++;
                indices[indicesCount] = indicesCount++;
                indices[indicesCount] = indicesCount++;
            }
        }
        mesh.setVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind, positions);
        mesh.setVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind, normals);
        mesh.setIndices(indices);
        mesh.computeWorldMatrix(true);
    }
    _parseASCII(mesh, solidData) {
        const positions = [];
        const normals = [];
        const indices = [];
        let indicesCount = 0;
        //load facets, ignoring loop as the standard doesn't define it can contain more than vertices
        let matches;
        while ((matches = this.facetsPattern.exec(solidData))) {
            const facet = matches[1];
            //one normal per face
            const normalMatches = this.normalPattern.exec(facet);
            this.normalPattern.lastIndex = 0;
            if (!normalMatches) {
                continue;
            }
            const normal = [Number(normalMatches[1]), Number(normalMatches[5]), Number(normalMatches[3])];
            let vertexMatch;
            while ((vertexMatch = this.vertexPattern.exec(facet))) {
                if (!STLFileLoader.DO_NOT_ALTER_FILE_COORDINATES) {
                    positions.push(Number(vertexMatch[1]), Number(vertexMatch[5]), Number(vertexMatch[3]));
                    normals.push(normal[0], normal[1], normal[2]);
                }
                else {
                    positions.push(Number(vertexMatch[1]), Number(vertexMatch[3]), Number(vertexMatch[5]));
                    // Flipping the second and third component because inverted
                    // when normal was declared.
                    normals.push(normal[0], normal[2], normal[1]);
                }
            }
            if (STLFileLoader.DO_NOT_ALTER_FILE_COORDINATES) {
                indices.push(indicesCount, indicesCount + 2, indicesCount + 1);
                indicesCount += 3;
            }
            else {
                indices.push(indicesCount++, indicesCount++, indicesCount++);
            }
            this.vertexPattern.lastIndex = 0;
        }
        this.facetsPattern.lastIndex = 0;
        mesh.setVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind, positions);
        mesh.setVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind, normals);
        mesh.setIndices(indices);
        mesh.computeWorldMatrix(true);
    }
}
/**
 * Defines if Y and Z axes are swapped or not when loading an STL file.
 * The default is false to maintain backward compatibility. When set to
 * true, coordinates from the STL file are used without change.
 */
STLFileLoader.DO_NOT_ALTER_FILE_COORDINATES = false;
(0,core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_3__.RegisterSceneLoaderPlugin)(new STLFileLoader());


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X1NUTF9zdGxGaWxlTG9hZGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBWUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBNk9BO0FBcE9BOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMU9BOzs7O0FBSUE7QUFDQTtBQXdPQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvU1RML3N0bEZpbGVMb2FkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgdHlwZSB7IElTY2VuZUxvYWRlclBsdWdpbiB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJTY2VuZUxvYWRlclBsdWdpbiB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgU1RMRmlsZUxvYWRlck1ldGFkYXRhIH0gZnJvbSBcIi4vc3RsRmlsZUxvYWRlci5tZXRhZGF0YVwiO1xyXG5pbXBvcnQgXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVmaW5lcyBvcHRpb25zIGZvciB0aGUgc3RsIGxvYWRlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBbU1RMRmlsZUxvYWRlck1ldGFkYXRhLm5hbWVdOiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFNUTCBmaWxlIHR5cGUgbG9hZGVyLlxyXG4gKiBUaGlzIGlzIGEgYmFieWxvbiBzY2VuZSBsb2FkZXIgcGx1Z2luLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNUTEZpbGVMb2FkZXIgaW1wbGVtZW50cyBJU2NlbmVMb2FkZXJQbHVnaW4ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHNvbGlkUGF0dGVybiA9IC9zb2xpZCAoXFxTKikoW1xcU1xcc10qPyllbmRzb2xpZFsgXSooXFxTKikvZztcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgZmFjZXRzUGF0dGVybiA9IC9mYWNldChbXFxzXFxTXSo/KWVuZGZhY2V0L2c7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgbm9ybWFsUGF0dGVybiA9IC9ub3JtYWxbXFxzXSsoWy0rXT9bMC05XStcXC4/WzAtOV0qKFtlRV1bLStdP1swLTldKyk/KStbXFxzXSsoWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/KStbXFxzXSsoWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/KSsvZztcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyB2ZXJ0ZXhQYXR0ZXJuID0gL3ZlcnRleFtcXHNdKyhbLStdP1swLTldK1xcLj9bMC05XSooW2VFXVstK10/WzAtOV0rKT8pK1tcXHNdKyhbLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8pK1tcXHNdKyhbLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8pKy9nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFNUTEZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgZXh0ZW5zaW9ucyB0aGUgc3RsIGxvYWRlciBpcyBhYmxlIHRvIGxvYWQuXHJcbiAgICAgKiBmb3JjZSBkYXRhIHRvIGNvbWUgaW4gYXMgYW4gQXJyYXlCdWZmZXJcclxuICAgICAqIHdlJ2xsIGNvbnZlcnQgdG8gc3RyaW5nIGlmIGl0IGxvb2tzIGxpa2UgaXQncyBhbiBBU0NJSSAuc3RsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBleHRlbnNpb25zID0gU1RMRmlsZUxvYWRlck1ldGFkYXRhLmV4dGVuc2lvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIFkgYW5kIFogYXhlcyBhcmUgc3dhcHBlZCBvciBub3Qgd2hlbiBsb2FkaW5nIGFuIFNUTCBmaWxlLlxyXG4gICAgICogVGhlIGRlZmF1bHQgaXMgZmFsc2UgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gV2hlbiBzZXQgdG9cclxuICAgICAqIHRydWUsIGNvb3JkaW5hdGVzIGZyb20gdGhlIFNUTCBmaWxlIGFyZSB1c2VkIHdpdGhvdXQgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERPX05PVF9BTFRFUl9GSUxFX0NPT1JESU5BVEVTID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnQgbWVzaGVzIGludG8gYSBzY2VuZS5cclxuICAgICAqIEBwYXJhbSBtZXNoZXNOYW1lcyBBbiBhcnJheSBvZiBtZXNoIG5hbWVzLCBhIHNpbmdsZSBtZXNoIG5hbWUsIG9yIGVtcHR5IHN0cmluZyBmb3IgYWxsIG1lc2hlcyB0aGF0IGZpbHRlciB3aGF0IG1lc2hlcyBhcmUgaW1wb3J0ZWRcclxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gaW1wb3J0IGludG9cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgVGhlIHJvb3QgdXJsIGZvciBzY2VuZSBhbmQgcmVzb3VyY2VzXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzIFRoZSBtZXNoZXMgYXJyYXkgdG8gaW1wb3J0IGludG9cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgc3VjY2Vzc2Z1bCBvciBmYWxzZSBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGltcG9ydE1lc2gobWVzaGVzTmFtZXM6IGFueSwgc2NlbmU6IFNjZW5lLCBkYXRhOiBhbnksIHJvb3RVcmw6IHN0cmluZywgbWVzaGVzOiBOdWxsYWJsZTxBYnN0cmFjdE1lc2hbXT4pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgbWF0Y2hlcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0JpbmFyeShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYmluYXJ5IC5zdGxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gbmV3IE1lc2goXCJzdGxtZXNoXCIsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlQmluYXJ5KGJhYnlsb25NZXNoLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQVNDSUkgLnN0bFxyXG5cclxuICAgICAgICAgICAgLy8gY29udmVydCB0byBzdHJpbmdcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVWludDhBcnJheShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2lmIGFycml2ZWQgaGVyZSwgZGF0YSBpcyBhIHN0cmluZywgY29udGFpbmluZyB0aGUgU1RMQSBkYXRhLlxyXG5cclxuICAgICAgICB3aGlsZSAoKG1hdGNoZXMgPSB0aGlzLnNvbGlkUGF0dGVybi5leGVjKGRhdGEpKSkge1xyXG4gICAgICAgICAgICBsZXQgbWVzaE5hbWUgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNoTmFtZUZyb21FbmQgPSBtYXRjaGVzWzNdO1xyXG4gICAgICAgICAgICBpZiAobWVzaE5hbWVGcm9tRW5kICYmIG1lc2hOYW1lICE9IG1lc2hOYW1lRnJvbUVuZCkge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJFcnJvciBpbiBTVEwsIHNvbGlkIG5hbWUgIT0gZW5kc29saWQgbmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgbWVzaGVzTmFtZXNcclxuICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzICYmIG1lc2hOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaGVzTmFtZXMgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWVzaGVzTmFtZXMuaW5kZXhPZihtZXNoTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaE5hbWUgIT09IG1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc3RsIG1lc2ggbmFtZSBjYW4gYmUgZW1wdHkgYXMgd2VsbFxyXG4gICAgICAgICAgICBtZXNoTmFtZSA9IG1lc2hOYW1lIHx8IFwic3RsbWVzaFwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBuZXcgTWVzaChtZXNoTmFtZSwgc2NlbmUpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJzZUFTQ0lJKGJhYnlsb25NZXNoLCBtYXRjaGVzWzJdKTtcclxuICAgICAgICAgICAgaWYgKG1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW50byBhIHNjZW5lLlxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBzY2VuZSB0byBsb2FkIGludG9cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgVGhlIHJvb3QgdXJsIGZvciBzY2VuZSBhbmQgcmVzb3VyY2VzXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWwgb3IgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkKHNjZW5lOiBTY2VuZSwgZGF0YTogYW55LCByb290VXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmltcG9ydE1lc2gobnVsbCwgc2NlbmUsIGRhdGEsIHJvb3RVcmwsIG51bGwpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGludG8gYW4gYXNzZXQgY29udGFpbmVyLlxyXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBzY2VuZSB0byBsb2FkIGludG9cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGltcG9ydFxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgVGhlIHJvb3QgdXJsIGZvciBzY2VuZSBhbmQgcmVzb3VyY2VzXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbG9hZGVkIGFzc2V0IGNvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzc2V0Q29udGFpbmVyKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nLCByb290VXJsOiBzdHJpbmcpOiBBc3NldENvbnRhaW5lciB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEFzc2V0Q29udGFpbmVyKHNjZW5lKTtcclxuICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmltcG9ydE1lc2gobnVsbCwgc2NlbmUsIGRhdGEsIHJvb3RVcmwsIGNvbnRhaW5lci5tZXNoZXMpO1xyXG4gICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzQmluYXJ5KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIGZpbGUgc2l6ZSBpcyBjb3JyZWN0IGZvciBiaW5hcnkgc3RsXHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IERhdGFWaWV3KGRhdGEpO1xyXG5cclxuICAgICAgICAvLyBBIEJpbmFyeSBTVEwgaGVhZGVyIGlzIDgwIGJ5dGVzLCBpZiB0aGUgZGF0YSBzaXplIGlzIG5vdCBncmVhdCB0aGFuXHJcbiAgICAgICAgLy8gdGhhdCB0aGVuIGl0J3Mgbm90IGEgYmluYXJ5IFNUTC5cclxuICAgICAgICBpZiAocmVhZGVyLmJ5dGVMZW5ndGggPD0gODApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmFjZVNpemUgPSAoMzIgLyA4KSAqIDMgKyAoMzIgLyA4KSAqIDMgKiAzICsgMTYgLyA4O1xyXG4gICAgICAgIGNvbnN0IG5GYWNlcyA9IHJlYWRlci5nZXRVaW50MzIoODAsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoODAgKyAzMiAvIDggKyBuRmFjZXMgKiBmYWNlU2l6ZSA9PT0gcmVhZGVyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVUy1BU0NJSSBiZWdpbiB3aXRoICdzJywgJ28nLCAnbCcsICdpJywgJ2QnXHJcbiAgICAgICAgY29uc3QgYXNjaWkgPSBbMTE1LCAxMTEsIDEwOCwgMTA1LCAxMDBdO1xyXG4gICAgICAgIGZvciAobGV0IG9mZiA9IDA7IG9mZiA8IDU7IG9mZisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWFkZXIuZ2V0VWludDgob2ZmKSAhPT0gYXNjaWlbb2ZmXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wYXJzZUJpbmFyeShtZXNoOiBNZXNoLCBkYXRhOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBEYXRhVmlldyhkYXRhKTtcclxuICAgICAgICBjb25zdCBmYWNlcyA9IHJlYWRlci5nZXRVaW50MzIoODAsIHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhT2Zmc2V0ID0gODQ7XHJcbiAgICAgICAgY29uc3QgZmFjZUxlbmd0aCA9IDEyICogNCArIDI7XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGZhY2VzICogMyAqIDMpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KGZhY2VzICogMyAqIDMpO1xyXG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBuZXcgVWludDMyQXJyYXkoZmFjZXMgKiAzKTtcclxuICAgICAgICBsZXQgaW5kaWNlc0NvdW50ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZmFjZSA9IDA7IGZhY2UgPCBmYWNlczsgZmFjZSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZGF0YU9mZnNldCArIGZhY2UgKiBmYWNlTGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxYID0gcmVhZGVyLmdldEZsb2F0MzIoc3RhcnQsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxZID0gcmVhZGVyLmdldEZsb2F0MzIoc3RhcnQgKyA0LCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsWiA9IHJlYWRlci5nZXRGbG9hdDMyKHN0YXJ0ICsgOCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleHN0YXJ0ID0gc3RhcnQgKyBpICogMTI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgaXMgaW50ZW50aW9uYWwgdG8gbWF0Y2ggYXNjaWkgaW1wb3J0XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbb2Zmc2V0XSA9IHJlYWRlci5nZXRGbG9hdDMyKHZlcnRleHN0YXJ0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbb2Zmc2V0XSA9IG5vcm1hbFg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFTVExGaWxlTG9hZGVyLkRPX05PVF9BTFRFUl9GSUxFX0NPT1JESU5BVEVTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW29mZnNldCArIDJdID0gcmVhZGVyLmdldEZsb2F0MzIodmVydGV4c3RhcnQgKyA0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbb2Zmc2V0ICsgMV0gPSByZWFkZXIuZ2V0RmxvYXQzMih2ZXJ0ZXhzdGFydCArIDgsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzW29mZnNldCArIDJdID0gbm9ybWFsWTtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzW29mZnNldCArIDFdID0gbm9ybWFsWjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW29mZnNldCArIDFdID0gcmVhZGVyLmdldEZsb2F0MzIodmVydGV4c3RhcnQgKyA0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbb2Zmc2V0ICsgMl0gPSByZWFkZXIuZ2V0RmxvYXQzMih2ZXJ0ZXhzdGFydCArIDgsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzW29mZnNldCArIDFdID0gbm9ybWFsWTtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzW29mZnNldCArIDJdID0gbm9ybWFsWjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFNUTEZpbGVMb2FkZXIuRE9fTk9UX0FMVEVSX0ZJTEVfQ09PUkRJTkFURVMpIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kaWNlc0NvdW50XSA9IGluZGljZXNDb3VudDtcclxuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kaWNlc0NvdW50ICsgMV0gPSBpbmRpY2VzQ291bnQgKyAyO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRpY2VzQ291bnQgKyAyXSA9IGluZGljZXNDb3VudCArIDE7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzQ291bnQgKz0gMztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXNbaW5kaWNlc0NvdW50XSA9IGluZGljZXNDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlc1tpbmRpY2VzQ291bnRdID0gaW5kaWNlc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzW2luZGljZXNDb3VudF0gPSBpbmRpY2VzQ291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVzaC5zZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgcG9zaXRpb25zKTtcclxuICAgICAgICBtZXNoLnNldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCwgbm9ybWFscyk7XHJcbiAgICAgICAgbWVzaC5zZXRJbmRpY2VzKGluZGljZXMpO1xyXG4gICAgICAgIG1lc2guY29tcHV0ZVdvcmxkTWF0cml4KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlQVNDSUkobWVzaDogTWVzaCwgc29saWREYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBub3JtYWxzID0gW107XHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRpY2VzQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAvL2xvYWQgZmFjZXRzLCBpZ25vcmluZyBsb29wIGFzIHRoZSBzdGFuZGFyZCBkb2Vzbid0IGRlZmluZSBpdCBjYW4gY29udGFpbiBtb3JlIHRoYW4gdmVydGljZXNcclxuICAgICAgICBsZXQgbWF0Y2hlcztcclxuICAgICAgICB3aGlsZSAoKG1hdGNoZXMgPSB0aGlzLmZhY2V0c1BhdHRlcm4uZXhlYyhzb2xpZERhdGEpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBmYWNldCA9IG1hdGNoZXNbMV07XHJcbiAgICAgICAgICAgIC8vb25lIG5vcm1hbCBwZXIgZmFjZVxyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxNYXRjaGVzID0gdGhpcy5ub3JtYWxQYXR0ZXJuLmV4ZWMoZmFjZXQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcclxuICAgICAgICAgICAgaWYgKCFub3JtYWxNYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBub3JtYWwgPSBbTnVtYmVyKG5vcm1hbE1hdGNoZXNbMV0pLCBOdW1iZXIobm9ybWFsTWF0Y2hlc1s1XSksIE51bWJlcihub3JtYWxNYXRjaGVzWzNdKV07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmVydGV4TWF0Y2g7XHJcbiAgICAgICAgICAgIHdoaWxlICgodmVydGV4TWF0Y2ggPSB0aGlzLnZlcnRleFBhdHRlcm4uZXhlYyhmYWNldCkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVNUTEZpbGVMb2FkZXIuRE9fTk9UX0FMVEVSX0ZJTEVfQ09PUkRJTkFURVMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChOdW1iZXIodmVydGV4TWF0Y2hbMV0pLCBOdW1iZXIodmVydGV4TWF0Y2hbNV0pLCBOdW1iZXIodmVydGV4TWF0Y2hbM10pKTtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzLnB1c2gobm9ybWFsWzBdLCBub3JtYWxbMV0sIG5vcm1hbFsyXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKE51bWJlcih2ZXJ0ZXhNYXRjaFsxXSksIE51bWJlcih2ZXJ0ZXhNYXRjaFszXSksIE51bWJlcih2ZXJ0ZXhNYXRjaFs1XSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGbGlwcGluZyB0aGUgc2Vjb25kIGFuZCB0aGlyZCBjb21wb25lbnQgYmVjYXVzZSBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gbm9ybWFsIHdhcyBkZWNsYXJlZC5cclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzLnB1c2gobm9ybWFsWzBdLCBub3JtYWxbMl0sIG5vcm1hbFsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFNUTEZpbGVMb2FkZXIuRE9fTk9UX0FMVEVSX0ZJTEVfQ09PUkRJTkFURVMpIHtcclxuICAgICAgICAgICAgICAgIGluZGljZXMucHVzaChpbmRpY2VzQ291bnQsIGluZGljZXNDb3VudCArIDIsIGluZGljZXNDb3VudCArIDEpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlc0NvdW50ICs9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzLnB1c2goaW5kaWNlc0NvdW50KyssIGluZGljZXNDb3VudCsrLCBpbmRpY2VzQ291bnQrKyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhQYXR0ZXJuLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZhY2V0c1BhdHRlcm4ubGFzdEluZGV4ID0gMDtcclxuICAgICAgICBtZXNoLnNldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kLCBwb3NpdGlvbnMpO1xyXG4gICAgICAgIG1lc2guc2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kLCBub3JtYWxzKTtcclxuICAgICAgICBtZXNoLnNldEluZGljZXMoaW5kaWNlcyk7XHJcbiAgICAgICAgbWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyU2NlbmVMb2FkZXJQbHVnaW4obmV3IFNUTEZpbGVMb2FkZXIoKSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=