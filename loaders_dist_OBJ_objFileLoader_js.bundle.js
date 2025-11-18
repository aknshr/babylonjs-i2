"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_OBJ_objFileLoader_js"],{

/***/ "../loaders/dist/OBJ/mtlFileLoader.js":
/*!********************************************!*\
  !*** ../loaders/dist/OBJ/mtlFileLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* binding */ MTLFileLoader)
/* harmony export */ });
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * Class reading and parsing the MTL file bundled with the obj file.
 */
class MTLFileLoader {
    constructor() {
        /**
         * All material loaded from the mtl will be set here
         */
        this.materials = [];
    }
    /**
     * This function will read the mtl file and create each material described inside
     * This function could be improve by adding :
     * -some component missing (Ni, Tf...)
     * -including the specific options available
     *
     * @param scene defines the scene the material will be created in
     * @param data defines the mtl data to parse
     * @param rootUrl defines the rooturl to use in order to load relative dependencies
     * @param assetContainer defines the asset container to store the material in (can be null)
     */
    parseMTL(scene, data, rootUrl, assetContainer) {
        if (data instanceof ArrayBuffer) {
            return;
        }
        //Split the lines from the file
        const lines = data.split("\n");
        // whitespace char ie: [ \t\r\n\f]
        const delimiterPattern = /\s+/;
        //Array with RGB colors
        let color;
        //New material
        let material = null;
        //Look at each line
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            // Blank line or comment
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            //Get the first parameter (keyword)
            const pos = line.indexOf(" ");
            let key = pos >= 0 ? line.substring(0, pos) : line;
            key = key.toLowerCase();
            //Get the data following the key
            const value = pos >= 0 ? line.substring(pos + 1).trim() : "";
            //This mtl keyword will create the new material
            if (key === "newmtl") {
                //Check if it is the first material.
                // Materials specifications are described after this keyword.
                if (material) {
                    //Add the previous material in the material array.
                    this.materials.push(material);
                }
                //Create a new material.
                // value is the name of the material read in the mtl file
                scene._blockEntityCollection = !!assetContainer;
                material = new core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_2__.StandardMaterial(value, scene);
                material._parentContainer = assetContainer;
                scene._blockEntityCollection = false;
            }
            else if (key === "kd" && material) {
                // Diffuse color (color under white light) using RGB values
                //value  = "r g b"
                color = value.split(delimiterPattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.diffuseColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ka" && material) {
                // Ambient color (color under shadow) using RGB values
                //value = "r g b"
                color = value.split(delimiterPattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.ambientColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ks" && material) {
                // Specular color (color when light is reflected from shiny surface) using RGB values
                //value = "r g b"
                color = value.split(delimiterPattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set the color into the material
                material.specularColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ke" && material) {
                // Emissive color using RGB values
                color = value.split(delimiterPattern, 3).map(parseFloat);
                material.emissiveColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ns" && material) {
                //value = "Integer"
                material.specularPower = parseFloat(value);
            }
            else if (key === "d" && material) {
                //d is dissolve for current material. It mean alpha for BABYLON
                material.alpha = parseFloat(value);
                //Texture
                //This part can be improved by adding the possible options of texture
            }
            else if (key === "map_ka" && material) {
                // ambient texture map with a loaded image
                //We must first get the folder of the image
                material.ambientTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_kd" && material) {
                // Diffuse texture map with a loaded image
                material.diffuseTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_ks" && material) {
                // Specular texture map with a loaded image
                //We must first get the folder of the image
                material.specularTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_ns") {
                //Specular
                //Specular highlight component
                //We must first get the folder of the image
                //
                //Not supported by BABYLON
                //
                //    continue;
            }
            else if (key === "map_bump" && material) {
                //The bump texture
                const values = value.split(delimiterPattern);
                const bumpMultiplierIndex = values.indexOf("-bm");
                let bumpMultiplier = null;
                if (bumpMultiplierIndex >= 0) {
                    bumpMultiplier = values[bumpMultiplierIndex + 1];
                    values.splice(bumpMultiplierIndex, 2); // remove
                }
                material.bumpTexture = MTLFileLoader._GetTexture(rootUrl, values.join(" "), scene);
                if (material.bumpTexture && bumpMultiplier !== null) {
                    material.bumpTexture.level = parseFloat(bumpMultiplier);
                }
            }
            else if (key === "map_d" && material) {
                // The dissolve of the material
                material.opacityTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
                //Options for illumination
            }
            else if (key === "illum") {
                //Illumination
                if (value === "0") {
                    //That mean Kd == Kd
                }
                else if (value === "1") {
                    //Color on and Ambient on
                }
                else if (value === "2") {
                    //Highlight on
                }
                else if (value === "3") {
                    //Reflection on and Ray trace on
                }
                else if (value === "4") {
                    //Transparency: Glass on, Reflection: Ray trace on
                }
                else if (value === "5") {
                    //Reflection: Fresnel on and Ray trace on
                }
                else if (value === "6") {
                    //Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
                }
                else if (value === "7") {
                    //Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
                }
                else if (value === "8") {
                    //Reflection on and Ray trace off
                }
                else if (value === "9") {
                    //Transparency: Glass on, Reflection: Ray trace off
                }
                else if (value === "10") {
                    //Casts shadows onto invisible surfaces
                }
            }
            else {
                // console.log("Unhandled expression at line : " + i +'\n' + "with value : " + line);
            }
        }
        //At the end of the file, add the last material
        if (material) {
            this.materials.push(material);
        }
    }
    /**
     * Gets the texture for the material.
     *
     * If the material is imported from input file,
     * We sanitize the url to ensure it takes the texture from aside the material.
     *
     * @param rootUrl The root url to load from
     * @param value The value stored in the mtl
     * @param scene
     * @returns The Texture
     */
    static _GetTexture(rootUrl, value, scene) {
        if (!value) {
            return null;
        }
        let url = rootUrl;
        // Load from input file.
        if (rootUrl === "file:") {
            let lastDelimiter = value.lastIndexOf("\\");
            if (lastDelimiter === -1) {
                lastDelimiter = value.lastIndexOf("/");
            }
            if (lastDelimiter > -1) {
                url += value.substring(lastDelimiter + 1);
            }
            else {
                url += value;
            }
        }
        // Not from input file.
        else {
            url += value;
        }
        return new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_1__.Texture(url, scene, false, MTLFileLoader.INVERT_TEXTURE_Y);
    }
}
/**
 * Invert Y-Axis of referenced textures on load
 */
MTLFileLoader.INVERT_TEXTURE_Y = true;


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

/***/ "../loaders/dist/OBJ/objFileLoader.js":
/*!********************************************!*\
  !*** ../loaders/dist/OBJ/objFileLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJFileLoader: () => (/* binding */ OBJFileLoader)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Loading/sceneLoader */ "../core/dist/Loading/sceneLoader.js");
/* harmony import */ var core_assetContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/assetContainer */ "../core/dist/assetContainer.js");
/* harmony import */ var _objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objFileLoader.metadata */ "../loaders/dist/OBJ/objFileLoader.metadata.js");
/* harmony import */ var _mtlFileLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mtlFileLoader */ "../loaders/dist/OBJ/mtlFileLoader.js");
/* harmony import */ var _solidParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solidParser */ "../loaders/dist/OBJ/solidParser.js");
/* harmony import */ var core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









/**
 * OBJ file type loader.
 * This is a babylon scene loader plugin.
 */
class OBJFileLoader {
    /**
     * Invert Y-Axis of referenced textures on load
     */
    static get INVERT_TEXTURE_Y() {
        return _mtlFileLoader__WEBPACK_IMPORTED_MODULE_5__.MTLFileLoader.INVERT_TEXTURE_Y;
    }
    static set INVERT_TEXTURE_Y(value) {
        _mtlFileLoader__WEBPACK_IMPORTED_MODULE_5__.MTLFileLoader.INVERT_TEXTURE_Y = value;
    }
    /**
     * Creates loader for .OBJ files
     *
     * @param loadingOptions options for loading and parsing OBJ/MTL files.
     */
    constructor(loadingOptions) {
        /**
         * Defines the name of the plugin.
         */
        this.name = _objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_4__.OBJFileLoaderMetadata.name;
        /**
         * Defines the extension the plugin is able to load.
         */
        this.extensions = _objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_4__.OBJFileLoaderMetadata.extensions;
        this._assetContainer = null;
        this._loadingOptions = { ...OBJFileLoader._DefaultLoadingOptions, ...(loadingOptions ?? {}) };
    }
    static get _DefaultLoadingOptions() {
        return {
            computeNormals: OBJFileLoader.COMPUTE_NORMALS,
            optimizeNormals: OBJFileLoader.OPTIMIZE_NORMALS,
            importVertexColors: OBJFileLoader.IMPORT_VERTEX_COLORS,
            invertY: OBJFileLoader.INVERT_Y,
            invertTextureY: OBJFileLoader.INVERT_TEXTURE_Y,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            UVScaling: OBJFileLoader.UV_SCALING,
            materialLoadingFailsSilently: OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY,
            optimizeWithUV: OBJFileLoader.OPTIMIZE_WITH_UV,
            skipMaterials: OBJFileLoader.SKIP_MATERIALS,
            useLegacyBehavior: OBJFileLoader.USE_LEGACY_BEHAVIOR,
        };
    }
    /**
     * Calls synchronously the MTL file attached to this obj.
     * Load function or importMesh function don't enable to load 2 files in the same time asynchronously.
     * Without this function materials are not displayed in the first frame (but displayed after).
     * In consequence it is impossible to get material information in your HTML file
     *
     * @param url The URL of the MTL file
     * @param rootUrl defines where to load data from
     * @param onSuccess Callback function to be called when the MTL file is loaded
     * @param onFailure
     */
    _loadMTL(url, rootUrl, onSuccess, onFailure) {
        //The complete path to the mtl file
        const pathOfFile = rootUrl + url;
        // Loads through the babylon tools to allow fileInput search.
        core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(pathOfFile, onSuccess, undefined, undefined, false, (request, exception) => {
            onFailure(pathOfFile, exception);
        });
    }
    /** @internal */
    createPlugin(options) {
        return new OBJFileLoader(options[_objFileLoader_metadata__WEBPACK_IMPORTED_MODULE_4__.OBJFileLoaderMetadata.name]);
    }
    /**
     * If the data string can be loaded directly.
     * @returns if the data can be loaded directly
     */
    canDirectLoad() {
        return false;
    }
    /**
     * Imports one or more meshes from the loaded OBJ data and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise containing the loaded meshes, particles, skeletons and animations
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    importMeshAsync(meshesNames, scene, data, rootUrl) {
        //get the meshes from OBJ file
        // eslint-disable-next-line github/no-then
        return this._parseSolidAsync(meshesNames, scene, data, rootUrl).then((meshes) => {
            return {
                meshes: meshes,
                particleSystems: [],
                skeletons: [],
                animationGroups: [],
                transformNodes: [],
                geometries: [],
                lights: [],
                spriteManagers: [],
            };
        });
    }
    /**
     * Imports all objects from the loaded OBJ data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise which completes when objects have been loaded to the scene
     */
    // eslint-disable-next-line no-restricted-syntax
    loadAsync(scene, data, rootUrl) {
        //Get the 3D model
        // eslint-disable-next-line github/no-then
        return this.importMeshAsync(null, scene, data, rootUrl).then(() => {
            // return void
        });
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @returns The loaded asset container
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    loadAssetContainerAsync(scene, data, rootUrl) {
        const container = new core_assetContainer__WEBPACK_IMPORTED_MODULE_3__.AssetContainer(scene);
        this._assetContainer = container;
        return (this.importMeshAsync(null, scene, data, rootUrl)
            // eslint-disable-next-line github/no-then
            .then((result) => {
            result.meshes.forEach((mesh) => container.meshes.push(mesh));
            result.meshes.forEach((mesh) => {
                const material = mesh.material;
                if (material) {
                    // Materials
                    if (container.materials.indexOf(material) == -1) {
                        container.materials.push(material);
                        // Textures
                        const textures = material.getActiveTextures();
                        textures.forEach((t) => {
                            if (container.textures.indexOf(t) == -1) {
                                container.textures.push(t);
                            }
                        });
                    }
                }
            });
            this._assetContainer = null;
            return container;
        })
            // eslint-disable-next-line github/no-then
            .catch((ex) => {
            this._assetContainer = null;
            throw ex;
        }));
    }
    /**
     * Read the OBJ file and create an Array of meshes.
     * Each mesh contains all information given by the OBJ and the MTL file.
     * i.e. vertices positions and indices, optional normals values, optional UV values, optional material
     * @param meshesNames defines a string or array of strings of the mesh names that should be loaded from the file
     * @param scene defines the scene where are displayed the data
     * @param data defines the content of the obj file
     * @param rootUrl defines the path to the folder
     * @returns the list of loaded meshes
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _parseSolidAsync(meshesNames, scene, data, rootUrl) {
        let fileToLoad = ""; //The name of the mtlFile to load
        const materialsFromMTLFile = new _mtlFileLoader__WEBPACK_IMPORTED_MODULE_5__.MTLFileLoader();
        const materialToUse = [];
        const babylonMeshesArray = []; //The mesh for babylon
        // Sanitize data
        data = data.replace(/#.*$/gm, "").trim();
        // Main function
        const solidParser = new _solidParser__WEBPACK_IMPORTED_MODULE_6__.SolidParser(materialToUse, babylonMeshesArray, this._loadingOptions);
        solidParser.parse(meshesNames, data, scene, this._assetContainer, (fileName) => {
            fileToLoad = fileName;
        });
        // load the materials
        const mtlPromises = [];
        // Check if we have a file to load
        if (fileToLoad !== "" && !this._loadingOptions.skipMaterials) {
            //Load the file synchronously
            mtlPromises.push(new Promise((resolve, reject) => {
                this._loadMTL(fileToLoad, rootUrl, (dataLoaded) => {
                    try {
                        //Create materials thanks MTLLoader function
                        materialsFromMTLFile.parseMTL(scene, dataLoaded, rootUrl, this._assetContainer);
                        //Look at each material loaded in the mtl file
                        for (let n = 0; n < materialsFromMTLFile.materials.length; n++) {
                            //Three variables to get all meshes with the same material
                            let startIndex = 0;
                            const _indices = [];
                            let _index;
                            //The material from MTL file is used in the meshes loaded
                            //Push the indice in an array
                            //Check if the material is not used for another mesh
                            while ((_index = materialToUse.indexOf(materialsFromMTLFile.materials[n].name, startIndex)) > -1) {
                                _indices.push(_index);
                                startIndex = _index + 1;
                            }
                            //If the material is not used dispose it
                            if (_index === -1 && _indices.length === 0) {
                                //If the material is not needed, remove it
                                materialsFromMTLFile.materials[n].dispose();
                            }
                            else {
                                for (let o = 0; o < _indices.length; o++) {
                                    //Apply the material to the Mesh for each mesh with the material
                                    const mesh = babylonMeshesArray[_indices[o]];
                                    const material = materialsFromMTLFile.materials[n];
                                    mesh.material = material;
                                    if (!mesh.getTotalIndices()) {
                                        // No indices, we need to turn on point cloud
                                        material.pointsCloud = true;
                                    }
                                }
                            }
                        }
                        resolve();
                    }
                    catch (e) {
                        core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Error processing MTL file: '${fileToLoad}'`);
                        if (this._loadingOptions.materialLoadingFailsSilently) {
                            resolve();
                        }
                        else {
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(e);
                        }
                    }
                }, (pathOfFile, exception) => {
                    core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Error downloading MTL file: '${fileToLoad}'`);
                    if (this._loadingOptions.materialLoadingFailsSilently) {
                        resolve();
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject(exception);
                    }
                });
            }));
        }
        //Return an array with all Mesh
        // eslint-disable-next-line github/no-then
        return Promise.all(mtlPromises).then(() => {
            const isLine = (mesh) => Boolean(mesh._internalMetadata?.["_isLine"] ?? false);
            // Iterate over the mesh, determine if it is a line mesh, clone or modify the material to line rendering.
            babylonMeshesArray.forEach((mesh) => {
                if (isLine(mesh)) {
                    let mat = mesh.material ?? new core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_7__.StandardMaterial(mesh.name + "_line", scene);
                    // If another mesh is using this material and it is not a line then we need to clone it.
                    const needClone = mat.getBindedMeshes().filter((e) => !isLine(e)).length > 0;
                    if (needClone) {
                        mat = mat.clone(mat.name + "_line") ?? mat;
                    }
                    mat.wireframe = true;
                    mesh.material = mat;
                    if (mesh._internalMetadata) {
                        mesh._internalMetadata["_isLine"] = undefined;
                    }
                }
            });
            return babylonMeshesArray;
        });
    }
}
/**
 * Defines if UVs are optimized by default during load.
 */
OBJFileLoader.OPTIMIZE_WITH_UV = true;
/**
 * Invert model on y-axis (does a model scaling inversion)
 */
OBJFileLoader.INVERT_Y = false;
/**
 * Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.
 */
OBJFileLoader.IMPORT_VERTEX_COLORS = false;
/**
 * Compute the normals for the model, even if normals are present in the file.
 */
OBJFileLoader.COMPUTE_NORMALS = false;
/**
 * Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
 * Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.
 */
OBJFileLoader.OPTIMIZE_NORMALS = false;
/**
 * Defines custom scaling of UV coordinates of loaded meshes.
 */
OBJFileLoader.UV_SCALING = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(1, 1);
/**
 * Skip loading the materials even if defined in the OBJ file (materials are ignored).
 */
OBJFileLoader.SKIP_MATERIALS = false;
/**
 * When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.
 *
 * Defaults to true for backwards compatibility.
 */
OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY = true;
/**
 * Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.
 */
OBJFileLoader.USE_LEGACY_BEHAVIOR = false;
//Add this loader into the register plugin
(0,core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_2__.RegisterSceneLoaderPlugin)(new OBJFileLoader());


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

/***/ "../loaders/dist/OBJ/solidParser.js":
/*!******************************************!*\
  !*** ../loaders/dist/OBJ/solidParser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolidParser: () => (/* binding */ SolidParser)
/* harmony export */ });
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Meshes_geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Meshes/geometry */ "../core/dist/Meshes/geometry.js");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Meshes/mesh.vertexData */ "../core/dist/Meshes/mesh.vertexData.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









/**
 * Class used to load mesh data from OBJ content
 */
class SolidParser {
    /**
     * Creates a new SolidParser
     * @param materialToUse defines the array to fill with the list of materials to use (it will be filled by the parse function)
     * @param babylonMeshesArray defines the array to fill with the list of loaded meshes (it will be filled by the parse function)
     * @param loadingOptions defines the loading options to use
     */
    constructor(materialToUse, babylonMeshesArray, loadingOptions) {
        this._positions = []; //values for the positions of vertices
        this._normals = []; //Values for the normals
        this._uvs = []; //Values for the textures
        this._colors = [];
        this._extColors = []; //Extension color
        this._meshesFromObj = []; //[mesh] Contains all the obj meshes
        this._indicesForBabylon = []; //The list of indices for VertexData
        this._wrappedPositionForBabylon = []; //The list of position in vectors
        this._wrappedUvsForBabylon = []; //Array with all value of uvs to match with the indices
        this._wrappedColorsForBabylon = []; // Array with all color values to match with the indices
        this._wrappedNormalsForBabylon = []; //Array with all value of normals to match with the indices
        this._tuplePosNorm = []; //Create a tuple with indice of Position, Normal, UV  [pos, norm, uvs]
        this._curPositionInIndices = 0;
        this._hasMeshes = false; //Meshes are defined in the file
        this._unwrappedPositionsForBabylon = []; //Value of positionForBabylon w/o Vector3() [x,y,z]
        this._unwrappedColorsForBabylon = []; // Value of colorForBabylon w/o Color4() [r,g,b,a]
        this._unwrappedNormalsForBabylon = []; //Value of normalsForBabylon w/o Vector3()  [x,y,z]
        this._unwrappedUVForBabylon = []; //Value of uvsForBabylon w/o Vector3()      [x,y,z]
        this._triangles = []; //Indices from new triangles coming from polygons
        this._materialNameFromObj = ""; //The name of the current material
        this._objMeshName = ""; //The name of the current obj mesh
        this._increment = 1; //Id for meshes created by the multimaterial
        this._isFirstMaterial = true;
        this._grayColor = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4(0.5, 0.5, 0.5, 1);
        this._hasLineData = false; //If this mesh has line segment(l) data
        this._materialToUse = materialToUse;
        this._babylonMeshesArray = babylonMeshesArray;
        this._loadingOptions = loadingOptions;
    }
    /**
     * Search for obj in the given array.
     * This function is called to check if a couple of data already exists in an array.
     *
     * If found, returns the index of the founded tuple index. Returns -1 if not found
     * @param arr Array<{ normals: Array<number>, idx: Array<number> }>
     * @param obj Array<number>
     * @returns {boolean}
     */
    _isInArray(arr, obj) {
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [] };
        }
        const idx = arr[obj[0]].normals.indexOf(obj[1]);
        return idx === -1 ? -1 : arr[obj[0]].idx[idx];
    }
    _isInArrayUV(arr, obj) {
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [], uv: [] };
        }
        const idx = arr[obj[0]].normals.indexOf(obj[1]);
        if (idx != 1 && obj[2] === arr[obj[0]].uv[idx]) {
            return arr[obj[0]].idx[idx];
        }
        return -1;
    }
    /**
     * This function set the data for each triangle.
     * Data are position, normals and uvs
     * If a tuple of (position, normal) is not set, add the data into the corresponding array
     * If the tuple already exist, add only their indice
     *
     * @param data The vertex's data
     * * indicesPositionFromObj: The index in positions array
     * * indicesUvsFromObj: The index in uvs array
     * * indicesNormalFromObj: The index in normals array
     * * positionVectorFromOBJ: The value of position at index objIndice
     * * textureVectorFromOBJ: The value of uvs
     * * normalsVectorFromOBJ: The value of normals at index objNormale
     * * positionColorsFromOBJ: The value of color at index objIndice
     */
    _setData(data) {
        //Use default values if undefined
        data.indiceUvsFromObj ??= -1;
        data.indiceNormalFromObj ??= -1;
        //Check if this tuple already exists in the list of tuples
        let _index;
        if (this._loadingOptions.optimizeWithUV) {
            _index = this._isInArrayUV(this._tuplePosNorm, [data.indicePositionFromObj, data.indiceNormalFromObj, data.indiceUvsFromObj]);
        }
        else {
            _index = this._isInArray(this._tuplePosNorm, [data.indicePositionFromObj, data.indiceNormalFromObj]);
        }
        //If it not exists
        if (_index === -1) {
            //Add an new indice.
            //The array of indices is only an array with his length equal to the number of triangles - 1.
            //We add vertices data in this order
            this._indicesForBabylon.push(this._wrappedPositionForBabylon.length);
            //Push the position of vertice for Babylon
            //Each element is a Vector3(x,y,z)
            this._wrappedPositionForBabylon.push(data.positionVectorFromOBJ);
            if (data.textureVectorFromOBJ !== undefined) {
                //Push the uvs for Babylon
                //Each element is a Vector2(u,v)
                this._wrappedUvsForBabylon.push(data.textureVectorFromOBJ);
            }
            if (data.normalsVectorFromOBJ !== undefined) {
                //Push the normals for Babylon
                //Each element is a Vector3(x,y,z)
                this._wrappedNormalsForBabylon.push(data.normalsVectorFromOBJ);
            }
            if (data.positionColorsFromOBJ !== undefined) {
                //Push the colors for Babylon
                //Each element is a BABYLON.Color4(r,g,b,a)
                this._wrappedColorsForBabylon.push(data.positionColorsFromOBJ);
            }
            //Add the tuple in the comparison list
            this._tuplePosNorm[data.indicePositionFromObj].normals.push(data.indiceNormalFromObj);
            this._tuplePosNorm[data.indicePositionFromObj].idx.push(this._curPositionInIndices++);
            if (this._loadingOptions.optimizeWithUV) {
                this._tuplePosNorm[data.indicePositionFromObj].uv.push(data.indiceUvsFromObj);
            }
        }
        else {
            //The tuple already exists
            //Add the index of the already existing tuple
            //At this index we can get the value of position, normal, color and uvs of vertex
            this._indicesForBabylon.push(_index);
        }
    }
    /**
     * Transform Vector() and BABYLON.Color() objects into numbers in an array
     */
    _unwrapData() {
        try {
            //Every array has the same length
            for (let l = 0; l < this._wrappedPositionForBabylon.length; l++) {
                //Push the x, y, z values of each element in the unwrapped array
                this._unwrappedPositionsForBabylon.push(this._wrappedPositionForBabylon[l].x * this._handednessSign, this._wrappedPositionForBabylon[l].y, this._wrappedPositionForBabylon[l].z);
                if (this._wrappedNormalsForBabylon.length) {
                    this._unwrappedNormalsForBabylon.push(this._wrappedNormalsForBabylon[l].x * this._handednessSign, this._wrappedNormalsForBabylon[l].y, this._wrappedNormalsForBabylon[l].z);
                }
                if (this._wrappedUvsForBabylon.length) {
                    this._unwrappedUVForBabylon.push(this._wrappedUvsForBabylon[l].x, this._wrappedUvsForBabylon[l].y); //z is an optional value not supported by BABYLON
                }
                if (this._unwrappedColorsForBabylon.length) {
                    //Push the r, g, b, a values of each element in the unwrapped array
                    this._unwrappedColorsForBabylon.push(this._wrappedColorsForBabylon[l].r, this._wrappedColorsForBabylon[l].g, this._wrappedColorsForBabylon[l].b, this._wrappedColorsForBabylon[l].a);
                }
            }
            // Reset arrays for the next new meshes
            this._wrappedPositionForBabylon.length = 0;
            this._wrappedNormalsForBabylon.length = 0;
            this._wrappedUvsForBabylon.length = 0;
            this._wrappedColorsForBabylon.length = 0;
            this._tuplePosNorm.length = 0;
            this._curPositionInIndices = 0;
        }
        catch (e) {
            throw new Error("Unable to unwrap data while parsing OBJ data.");
        }
    }
    /**
     * Create triangles from polygons
     * It is important to notice that a triangle is a polygon
     * We get 5 patterns of face defined in OBJ File :
     * facePattern1 = ["1","2","3","4","5","6"]
     * facePattern2 = ["1/1","2/2","3/3","4/4","5/5","6/6"]
     * facePattern3 = ["1/1/1","2/2/2","3/3/3","4/4/4","5/5/5","6/6/6"]
     * facePattern4 = ["1//1","2//2","3//3","4//4","5//5","6//6"]
     * facePattern5 = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-4/-4/-4","-5/-5/-5","-6/-6/-6"]
     * Each pattern is divided by the same method
     * @param faces Array[String] The indices of elements
     * @param v Integer The variable to increment
     */
    _getTriangles(faces, v) {
        //Work for each element of the array
        for (let faceIndex = v; faceIndex < faces.length - 1; faceIndex++) {
            //Add on the triangle variable the indexes to obtain triangles
            this._pushTriangle(faces, faceIndex);
        }
        //Result obtained after 2 iterations:
        //Pattern1 => triangle = ["1","2","3","1","3","4"];
        //Pattern2 => triangle = ["1/1","2/2","3/3","1/1","3/3","4/4"];
        //Pattern3 => triangle = ["1/1/1","2/2/2","3/3/3","1/1/1","3/3/3","4/4/4"];
        //Pattern4 => triangle = ["1//1","2//2","3//3","1//1","3//3","4//4"];
        //Pattern5 => triangle = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-1/-1/-1","-3/-3/-3","-4/-4/-4"];
    }
    /**
     * To get color between color and extension color
     * @param index Integer The index of the element in the array
     * @returns value of target color
     */
    _getColor(index) {
        if (this._loadingOptions.importVertexColors) {
            return this._extColors[index] ?? this._colors[index];
        }
        else {
            return undefined;
        }
    }
    /**
     * Create triangles and push the data for each polygon for the pattern 1
     * In this pattern we get vertice positions
     * @param face
     * @param v
     */
    _setDataForCurrentFaceWithPattern1(face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        //For each element in the triangles array.
        //This var could contains 1 to an infinity of triangles
        for (let k = 0; k < this._triangles.length; k++) {
            // Set position indice
            const indicePositionFromObj = parseInt(this._triangles[k]) - 1;
            this._setData({
                indicePositionFromObj,
                positionVectorFromOBJ: this._positions[indicePositionFromObj],
                positionColorsFromOBJ: this._getColor(indicePositionFromObj),
            });
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    }
    /**
     * Create triangles and push the data for each polygon for the pattern 2
     * In this pattern we get vertice positions and uvs
     * @param face
     * @param v
     */
    _setDataForCurrentFaceWithPattern2(face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (let k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1/1"
            //Split the data for getting position and uv
            const point = this._triangles[k].split("/"); // ["1", "1"]
            //Set position indice
            const indicePositionFromObj = parseInt(point[0]) - 1;
            //Set uv indice
            const indiceUvsFromObj = parseInt(point[1]) - 1;
            this._setData({
                indicePositionFromObj,
                indiceUvsFromObj,
                positionVectorFromOBJ: this._positions[indicePositionFromObj],
                textureVectorFromOBJ: this._uvs[indiceUvsFromObj],
                positionColorsFromOBJ: this._getColor(indicePositionFromObj),
            });
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    }
    /**
     * Create triangles and push the data for each polygon for the pattern 3
     * In this pattern we get vertice positions, uvs and normals
     * @param face
     * @param v
     */
    _setDataForCurrentFaceWithPattern3(face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (let k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1/1/1"
            //Split the data for getting position, uv, and normals
            const point = this._triangles[k].split("/"); // ["1", "1", "1"]
            // Set position indice
            const indicePositionFromObj = parseInt(point[0]) - 1;
            // Set uv indice
            const indiceUvsFromObj = parseInt(point[1]) - 1;
            // Set normal indice
            const indiceNormalFromObj = parseInt(point[2]) - 1;
            this._setData({
                indicePositionFromObj,
                indiceUvsFromObj,
                indiceNormalFromObj,
                positionVectorFromOBJ: this._positions[indicePositionFromObj],
                textureVectorFromOBJ: this._uvs[indiceUvsFromObj],
                normalsVectorFromOBJ: this._normals[indiceNormalFromObj],
            });
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    }
    /**
     * Create triangles and push the data for each polygon for the pattern 4
     * In this pattern we get vertice positions and normals
     * @param face
     * @param v
     */
    _setDataForCurrentFaceWithPattern4(face, v) {
        this._getTriangles(face, v);
        for (let k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1//1"
            //Split the data for getting position and normals
            const point = this._triangles[k].split("//"); // ["1", "1"]
            // We check indices, and normals
            const indicePositionFromObj = parseInt(point[0]) - 1;
            const indiceNormalFromObj = parseInt(point[1]) - 1;
            this._setData({
                indicePositionFromObj,
                indiceNormalFromObj,
                positionVectorFromOBJ: this._positions[indicePositionFromObj],
                normalsVectorFromOBJ: this._normals[indiceNormalFromObj],
                positionColorsFromOBJ: this._getColor(indicePositionFromObj),
            });
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    }
    /*
     * Create triangles and push the data for each polygon for the pattern 3
     * In this pattern we get vertice positions, uvs and normals
     * @param face
     * @param v
     */
    _setDataForCurrentFaceWithPattern5(face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (let k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "-1/-1/-1"
            //Split the data for getting position, uv, and normals
            const point = this._triangles[k].split("/"); // ["-1", "-1", "-1"]
            // Set position indice
            const indicePositionFromObj = this._positions.length + parseInt(point[0]);
            // Set uv indice
            const indiceUvsFromObj = this._uvs.length + parseInt(point[1]);
            // Set normal indice
            const indiceNormalFromObj = this._normals.length + parseInt(point[2]);
            this._setData({
                indicePositionFromObj,
                indiceUvsFromObj,
                indiceNormalFromObj,
                positionVectorFromOBJ: this._positions[indicePositionFromObj],
                textureVectorFromOBJ: this._uvs[indiceUvsFromObj],
                normalsVectorFromOBJ: this._normals[indiceNormalFromObj],
                positionColorsFromOBJ: this._getColor(indicePositionFromObj),
            });
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    }
    _addPreviousObjMesh() {
        //Check if it is not the first mesh. Otherwise we don't have data.
        if (this._meshesFromObj.length > 0) {
            //Get the previous mesh for applying the data about the faces
            //=> in obj file, faces definition append after the name of the mesh
            this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1];
            //Set the data into Array for the mesh
            this._unwrapData();
            if (this._loadingOptions.useLegacyBehavior) {
                // Reverse tab. Otherwise face are displayed in the wrong sens
                this._indicesForBabylon.reverse();
            }
            //Set the information for the mesh
            //Slice the array to avoid rewriting because of the fact this is the same var which be rewrited
            this._handledMesh.indices = this._indicesForBabylon.slice();
            this._handledMesh.positions = this._unwrappedPositionsForBabylon.slice();
            if (this._unwrappedNormalsForBabylon.length) {
                this._handledMesh.normals = this._unwrappedNormalsForBabylon.slice();
            }
            if (this._unwrappedUVForBabylon.length) {
                this._handledMesh.uvs = this._unwrappedUVForBabylon.slice();
            }
            if (this._unwrappedColorsForBabylon.length) {
                this._handledMesh.colors = this._unwrappedColorsForBabylon.slice();
            }
            this._handledMesh.hasLines = this._hasLineData;
            //Reset the array for the next mesh
            this._indicesForBabylon.length = 0;
            this._unwrappedPositionsForBabylon.length = 0;
            this._unwrappedColorsForBabylon.length = 0;
            this._unwrappedNormalsForBabylon.length = 0;
            this._unwrappedUVForBabylon.length = 0;
            this._hasLineData = false;
        }
    }
    _optimizeNormals(mesh) {
        const positions = mesh.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
        const normals = mesh.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
        const mapVertices = {};
        if (!positions || !normals) {
            return;
        }
        for (let i = 0; i < positions.length / 3; i++) {
            const x = positions[i * 3 + 0];
            const y = positions[i * 3 + 1];
            const z = positions[i * 3 + 2];
            const key = x + "_" + y + "_" + z;
            let lst = mapVertices[key];
            if (!lst) {
                lst = [];
                mapVertices[key] = lst;
            }
            lst.push(i);
        }
        const normal = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3();
        for (const key in mapVertices) {
            const lst = mapVertices[key];
            if (lst.length < 2) {
                continue;
            }
            const v0Idx = lst[0];
            for (let i = 1; i < lst.length; ++i) {
                const vIdx = lst[i];
                normals[v0Idx * 3 + 0] += normals[vIdx * 3 + 0];
                normals[v0Idx * 3 + 1] += normals[vIdx * 3 + 1];
                normals[v0Idx * 3 + 2] += normals[vIdx * 3 + 2];
            }
            normal.copyFromFloats(normals[v0Idx * 3 + 0], normals[v0Idx * 3 + 1], normals[v0Idx * 3 + 2]);
            normal.normalize();
            for (let i = 0; i < lst.length; ++i) {
                const vIdx = lst[i];
                normals[vIdx * 3 + 0] = normal.x;
                normals[vIdx * 3 + 1] = normal.y;
                normals[vIdx * 3 + 2] = normal.z;
            }
        }
        mesh.setVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, normals);
    }
    static _IsLineElement(line) {
        return line.startsWith("l");
    }
    static _IsObjectElement(line) {
        return line.startsWith("o");
    }
    static _IsGroupElement(line) {
        return line.startsWith("g");
    }
    static _GetZbrushMRGB(line, notParse) {
        if (!line.startsWith("mrgb")) {
            return null;
        }
        line = line.replace("mrgb", "").trim();
        // if include vertex color , not load mrgb anymore
        if (notParse) {
            return [];
        }
        const regex = /[a-z0-9]/g;
        const regArray = line.match(regex);
        if (!regArray || regArray.length % 8 !== 0) {
            return [];
        }
        const array = [];
        for (let regIndex = 0; regIndex < regArray.length / 8; regIndex++) {
            //each item is MMRRGGBB, m is material index
            // const m = regArray[regIndex * 8 + 0] + regArray[regIndex * 8 + 1];
            const r = regArray[regIndex * 8 + 2] + regArray[regIndex * 8 + 3];
            const g = regArray[regIndex * 8 + 4] + regArray[regIndex * 8 + 5];
            const b = regArray[regIndex * 8 + 6] + regArray[regIndex * 8 + 7];
            array.push(new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4(parseInt(r, 16) / 255, parseInt(g, 16) / 255, parseInt(b, 16) / 255, 1));
        }
        return array;
    }
    /**
     * Function used to parse an OBJ string
     * @param meshesNames defines the list of meshes to load (all if not defined)
     * @param data defines the OBJ string
     * @param scene defines the hosting scene
     * @param assetContainer defines the asset container to load data in
     * @param onFileToLoadFound defines a callback that will be called if a MTL file is found
     */
    parse(meshesNames, data, scene, assetContainer, onFileToLoadFound) {
        //Move Santitize here to forbid delete zbrush data
        // Sanitize data
        data = data.replace(/#MRGB/g, "mrgb");
        data = data.replace(/#.*$/gm, "").trim();
        if (this._loadingOptions.useLegacyBehavior) {
            this._pushTriangle = (faces, faceIndex) => this._triangles.push(faces[0], faces[faceIndex], faces[faceIndex + 1]);
            this._handednessSign = 1;
        }
        else if (scene.useRightHandedSystem) {
            this._pushTriangle = (faces, faceIndex) => this._triangles.push(faces[0], faces[faceIndex + 1], faces[faceIndex]);
            this._handednessSign = 1;
        }
        else {
            this._pushTriangle = (faces, faceIndex) => this._triangles.push(faces[0], faces[faceIndex], faces[faceIndex + 1]);
            this._handednessSign = -1;
        }
        // Split the file into lines
        // Preprocess line data
        const linesOBJ = data.split("\n");
        const lineLines = [];
        let currentGroup = [];
        lineLines.push(currentGroup);
        for (let i = 0; i < linesOBJ.length; i++) {
            const line = linesOBJ[i].trim().replace(/\s\s/g, " ");
            // Comment or newLine
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            if (SolidParser._IsGroupElement(line) || SolidParser._IsObjectElement(line)) {
                currentGroup = [];
                lineLines.push(currentGroup);
            }
            if (SolidParser._IsLineElement(line)) {
                const lineValues = line.split(" ");
                // create line elements with two vertices only
                for (let i = 1; i < lineValues.length - 1; i++) {
                    currentGroup.push(`l ${lineValues[i]} ${lineValues[i + 1]}`);
                }
            }
            else {
                currentGroup.push(line);
            }
        }
        const lines = lineLines.flat();
        // Look at each line
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim().replace(/\s\s/g, " ");
            let result;
            // Comment or newLine
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            else if (SolidParser.VertexPattern.test(line)) {
                //Get information about one position possible for the vertices
                result = line.match(/[^ ]+/g); // match will return non-null due to passing regex pattern
                // Value of result with line: "v 1.0 2.0 3.0"
                // ["v", "1.0", "2.0", "3.0"]
                // Create a Vector3 with the position x, y, z
                this._positions.push(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
                if (this._loadingOptions.importVertexColors) {
                    if (result.length >= 7) {
                        const r = parseFloat(result[4]);
                        const g = parseFloat(result[5]);
                        const b = parseFloat(result[6]);
                        this._colors.push(new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color4(r > 1 ? r / 255 : r, g > 1 ? g / 255 : g, b > 1 ? b / 255 : b, result.length === 7 || result[7] === undefined ? 1 : parseFloat(result[7])));
                    }
                    else {
                        // TODO: maybe push NULL and if all are NULL to skip (and remove grayColor var).
                        this._colors.push(this._grayColor);
                    }
                }
            }
            else if ((result = SolidParser.NormalPattern.exec(line)) !== null) {
                //Create a Vector3 with the normals x, y, z
                //Value of result
                // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
                //Add the Vector in the list of normals
                this._normals.push(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
            }
            else if ((result = SolidParser.UVPattern.exec(line)) !== null) {
                //Create a Vector2 with the normals u, v
                //Value of result
                // ["vt 0.1 0.2 0.3", "0.1", "0.2"]
                //Add the Vector in the list of uvs
                this._uvs.push(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector2(parseFloat(result[1]) * this._loadingOptions.UVScaling.x, parseFloat(result[2]) * this._loadingOptions.UVScaling.y));
                //Identify patterns of faces
                //Face could be defined in different type of pattern
            }
            else if ((result = SolidParser.FacePattern3.exec(line)) !== null) {
                //Value of result:
                //["f 1/1/1 2/2/2 3/3/3", "1/1/1 2/2/2 3/3/3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2", "3/3/3"]
                1);
            }
            else if ((result = SolidParser.FacePattern4.exec(line)) !== null) {
                //Value of result:
                //["f 1//1 2//2 3//3", "1//1 2//2 3//3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern4(result[1].trim().split(" "), // ["1//1", "2//2", "3//3"]
                1);
            }
            else if ((result = SolidParser.FacePattern5.exec(line)) !== null) {
                //Value of result:
                //["f -1/-1/-1 -2/-2/-2 -3/-3/-3", "-1/-1/-1 -2/-2/-2 -3/-3/-3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern5(result[1].trim().split(" "), // ["-1/-1/-1", "-2/-2/-2", "-3/-3/-3"]
                1);
            }
            else if ((result = SolidParser.FacePattern2.exec(line)) !== null) {
                //Value of result:
                //["f 1/1 2/2 3/3", "1/1 2/2 3/3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2", "3/3"]
                1);
            }
            else if ((result = SolidParser.FacePattern1.exec(line)) !== null) {
                //Value of result
                //["f 1 2 3", "1 2 3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2", "3"]
                1);
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern1.exec(line)) !== null) {
                //Value of result
                //["l 1 2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2"]
                0);
                this._hasLineData = true;
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern2.exec(line)) !== null) {
                //Value of result
                //["l 1/1 2/2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2"]
                0);
                this._hasLineData = true;
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser._GetZbrushMRGB(line, !this._loadingOptions.importVertexColors))) {
                for (const element of result) {
                    this._extColors.push(element);
                }
            }
            else if ((result = SolidParser.LinePattern3.exec(line)) !== null) {
                //Value of result
                //["l 1/1/1 2/2/2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2"]
                0);
                this._hasLineData = true;
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if (SolidParser.GroupDescriptor.test(line) || SolidParser.ObjectDescriptor.test(line)) {
                // Create a new mesh corresponding to the name of the group.
                // Definition of the mesh
                const objMesh = {
                    name: line.substring(2).trim(), //Set the name of the current obj mesh
                    indices: null,
                    positions: null,
                    normals: null,
                    uvs: null,
                    colors: null,
                    materialName: this._materialNameFromObj,
                    isObject: SolidParser.ObjectDescriptor.test(line),
                };
                this._addPreviousObjMesh();
                //Push the last mesh created with only the name
                this._meshesFromObj.push(objMesh);
                //Set this variable to indicate that now meshesFromObj has objects defined inside
                this._hasMeshes = true;
                this._isFirstMaterial = true;
                this._increment = 1;
                //Keyword for applying a material
            }
            else if (SolidParser.UseMtlDescriptor.test(line)) {
                //Get the name of the material
                this._materialNameFromObj = line.substring(7).trim();
                //If this new material is in the same mesh
                if (!this._isFirstMaterial || !this._hasMeshes) {
                    //Set the data for the previous mesh
                    this._addPreviousObjMesh();
                    //Create a new mesh
                    const objMesh = 
                    //Set the name of the current obj mesh
                    {
                        name: (this._objMeshName || "mesh") + "_mm" + this._increment.toString(), //Set the name of the current obj mesh
                        indices: null,
                        positions: null,
                        normals: null,
                        uvs: null,
                        colors: null,
                        materialName: this._materialNameFromObj,
                        isObject: false,
                    };
                    this._increment++;
                    //If meshes are already defined
                    this._meshesFromObj.push(objMesh);
                    this._hasMeshes = true;
                }
                //Set the material name if the previous line define a mesh
                if (this._hasMeshes && this._isFirstMaterial) {
                    //Set the material name to the previous mesh (1 material per mesh)
                    this._meshesFromObj[this._meshesFromObj.length - 1].materialName = this._materialNameFromObj;
                    this._isFirstMaterial = false;
                }
                // Keyword for loading the mtl file
            }
            else if (SolidParser.MtlLibGroupDescriptor.test(line)) {
                // Get the name of mtl file
                onFileToLoadFound(line.substring(7).trim());
                // Apply smoothing
            }
            else if (SolidParser.SmoothDescriptor.test(line)) {
                // smooth shading => apply smoothing
                // Today I don't know it work with babylon and with obj.
                // With the obj file  an integer is set
            }
            else {
                //If there is another possibility
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_7__.Logger.Log("Unhandled expression at line : " + line);
            }
        }
        // At the end of the file, add the last mesh into the meshesFromObj array
        if (this._hasMeshes) {
            // Set the data for the last mesh
            this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1];
            if (this._loadingOptions.useLegacyBehavior) {
                //Reverse indices for displaying faces in the good sense
                this._indicesForBabylon.reverse();
            }
            //Get the good array
            this._unwrapData();
            //Set array
            this._handledMesh.indices = this._indicesForBabylon;
            this._handledMesh.positions = this._unwrappedPositionsForBabylon;
            if (this._unwrappedNormalsForBabylon.length) {
                this._handledMesh.normals = this._unwrappedNormalsForBabylon;
            }
            if (this._unwrappedUVForBabylon.length) {
                this._handledMesh.uvs = this._unwrappedUVForBabylon;
            }
            if (this._unwrappedColorsForBabylon.length) {
                this._handledMesh.colors = this._unwrappedColorsForBabylon;
            }
            this._handledMesh.hasLines = this._hasLineData;
        }
        // If any o or g keyword not found, create a mesh with a random id
        if (!this._hasMeshes) {
            let newMaterial = null;
            if (this._indicesForBabylon.length) {
                if (this._loadingOptions.useLegacyBehavior) {
                    // reverse tab of indices
                    this._indicesForBabylon.reverse();
                }
                //Get positions normals uvs
                this._unwrapData();
            }
            else {
                // There is no indices in the file. We will have to switch to point cloud rendering
                for (const pos of this._positions) {
                    this._unwrappedPositionsForBabylon.push(pos.x, pos.y, pos.z);
                }
                if (this._normals.length) {
                    for (const normal of this._normals) {
                        this._unwrappedNormalsForBabylon.push(normal.x, normal.y, normal.z);
                    }
                }
                if (this._uvs.length) {
                    for (const uv of this._uvs) {
                        this._unwrappedUVForBabylon.push(uv.x, uv.y);
                    }
                }
                if (this._extColors.length) {
                    for (const color of this._extColors) {
                        this._unwrappedColorsForBabylon.push(color.r, color.g, color.b, color.a);
                    }
                }
                else {
                    if (this._colors.length) {
                        for (const color of this._colors) {
                            this._unwrappedColorsForBabylon.push(color.r, color.g, color.b, color.a);
                        }
                    }
                }
                if (!this._materialNameFromObj) {
                    // Create a material with point cloud on
                    newMaterial = new core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(core_Meshes_geometry__WEBPACK_IMPORTED_MODULE_4__.Geometry.RandomId(), scene);
                    newMaterial.pointsCloud = true;
                    this._materialNameFromObj = newMaterial.name;
                    if (!this._normals.length) {
                        newMaterial.disableLighting = true;
                        newMaterial.emissiveColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.White();
                    }
                }
            }
            //Set data for one mesh
            this._meshesFromObj.push({
                name: core_Meshes_geometry__WEBPACK_IMPORTED_MODULE_4__.Geometry.RandomId(),
                indices: this._indicesForBabylon,
                positions: this._unwrappedPositionsForBabylon,
                colors: this._unwrappedColorsForBabylon,
                normals: this._unwrappedNormalsForBabylon,
                uvs: this._unwrappedUVForBabylon,
                materialName: this._materialNameFromObj,
                directMaterial: newMaterial,
                isObject: true,
                hasLines: this._hasLineData,
            });
        }
        //Set data for each mesh
        for (let j = 0; j < this._meshesFromObj.length; j++) {
            //check meshesNames (stlFileLoader)
            if (meshesNames && this._meshesFromObj[j].name) {
                if (meshesNames instanceof Array) {
                    if (meshesNames.indexOf(this._meshesFromObj[j].name) === -1) {
                        continue;
                    }
                }
                else {
                    if (this._meshesFromObj[j].name !== meshesNames) {
                        continue;
                    }
                }
            }
            //Get the current mesh
            //Set the data with VertexBuffer for each mesh
            this._handledMesh = this._meshesFromObj[j];
            //Create a Mesh with the name of the obj mesh
            scene._blockEntityCollection = !!assetContainer;
            const babylonMesh = new core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_5__.Mesh(this._meshesFromObj[j].name, scene);
            babylonMesh._parentContainer = assetContainer;
            scene._blockEntityCollection = false;
            this._handledMesh._babylonMesh = babylonMesh;
            // If this is a group mesh, it should have an object mesh as a parent. So look for the first object mesh that appears before it.
            if (!this._handledMesh.isObject) {
                for (let k = j - 1; k >= 0; --k) {
                    if (this._meshesFromObj[k].isObject && this._meshesFromObj[k]._babylonMesh) {
                        babylonMesh.parent = this._meshesFromObj[k]._babylonMesh;
                        break;
                    }
                }
            }
            //Push the name of the material to an array
            //This is indispensable for the importMesh function
            this._materialToUse.push(this._meshesFromObj[j].materialName);
            //If the mesh is a line mesh
            if (this._handledMesh.hasLines) {
                babylonMesh._internalMetadata ??= {};
                babylonMesh._internalMetadata["_isLine"] = true; //this is a line mesh
            }
            if (this._handledMesh.positions?.length === 0) {
                //Push the mesh into an array
                this._babylonMeshesArray.push(babylonMesh);
                continue;
            }
            const vertexData = new core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_6__.VertexData(); //The container for the values
            //Set the data for the babylonMesh
            vertexData.indices = this._handledMesh.indices;
            vertexData.positions = this._handledMesh.positions;
            if (this._loadingOptions.computeNormals || !this._handledMesh.normals) {
                // Compute normals if requested or if normals are not defined
                const normals = new Array();
                core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_6__.VertexData.ComputeNormals(this._handledMesh.positions, this._handledMesh.indices, normals);
                vertexData.normals = normals;
            }
            else {
                vertexData.normals = this._handledMesh.normals;
            }
            if (this._handledMesh.uvs) {
                vertexData.uvs = this._handledMesh.uvs;
            }
            if (this._handledMesh.colors) {
                vertexData.colors = this._handledMesh.colors;
            }
            //Set the data from the VertexBuffer to the current Mesh
            vertexData.applyToMesh(babylonMesh);
            if (this._loadingOptions.invertY) {
                babylonMesh.scaling.y *= -1;
            }
            if (this._loadingOptions.optimizeNormals) {
                this._optimizeNormals(babylonMesh);
            }
            //Push the mesh into an array
            this._babylonMeshesArray.push(babylonMesh);
            if (this._handledMesh.directMaterial) {
                babylonMesh.material = this._handledMesh.directMaterial;
            }
        }
    }
}
// Descriptor
/** Object descriptor */
SolidParser.ObjectDescriptor = /^o/;
/** Group descriptor */
SolidParser.GroupDescriptor = /^g/;
/** Material lib descriptor */
SolidParser.MtlLibGroupDescriptor = /^mtllib /;
/** Use a material descriptor */
SolidParser.UseMtlDescriptor = /^usemtl /;
/** Smooth descriptor */
SolidParser.SmoothDescriptor = /^s /;
// Patterns
/** Pattern used to detect a vertex */
SolidParser.VertexPattern = /^v(\s+[\d|.|+|\-|e|E]+){3,7}/;
/** Pattern used to detect a normal */
SolidParser.NormalPattern = /^vn(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;
/** Pattern used to detect a UV set */
SolidParser.UVPattern = /^vt(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;
/** Pattern used to detect a first kind of face (f vertex vertex vertex) */
SolidParser.FacePattern1 = /^f\s+(([\d]{1,}[\s]?){3,})+/;
/** Pattern used to detect a second kind of face (f vertex/uvs vertex/uvs vertex/uvs) */
SolidParser.FacePattern2 = /^f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
/** Pattern used to detect a third kind of face (f vertex/uvs/normal vertex/uvs/normal vertex/uvs/normal) */
SolidParser.FacePattern3 = /^f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
/** Pattern used to detect a fourth kind of face (f vertex//normal vertex//normal vertex//normal)*/
SolidParser.FacePattern4 = /^f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/;
/** Pattern used to detect a fifth kind of face (f -vertex/-uvs/-normal -vertex/-uvs/-normal -vertex/-uvs/-normal) */
SolidParser.FacePattern5 = /^f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/;
/** Pattern used to detect a line(l vertex vertex) */
SolidParser.LinePattern1 = /^l\s+(([\d]{1,}[\s]?){2,})+/;
/** Pattern used to detect a second kind of line (l vertex/uvs vertex/uvs) */
SolidParser.LinePattern2 = /^l\s+((([\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;
/** Pattern used to detect a third kind of line (l vertex/uvs/normal vertex/uvs/normal) */
SolidParser.LinePattern3 = /^l\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X09CSl9vYmpGaWxlTG9hZGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQStNQTtBQTdNQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQXROQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBWUE7OztBQUdBO0FBQ0E7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlEQTs7OztBQUlBO0FBQ0E7QUFsQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFsVkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBa1NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JYQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBZ0JBOztBQUVBO0FBQ0E7QUFxRUE7Ozs7O0FBS0E7QUFDQTtBQXJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9PQkovbXRsRmlsZUxvYWRlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL09CSi9vYmpGaWxlTG9hZGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvT0JKL3NvbGlkUGFyc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuLyoqXHJcbiAqIENsYXNzIHJlYWRpbmcgYW5kIHBhcnNpbmcgdGhlIE1UTCBmaWxlIGJ1bmRsZWQgd2l0aCB0aGUgb2JqIGZpbGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTVRMRmlsZUxvYWRlciB7XHJcbiAgICAvKipcclxuICAgICAqIEludmVydCBZLUF4aXMgb2YgcmVmZXJlbmNlZCB0ZXh0dXJlcyBvbiBsb2FkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSU5WRVJUX1RFWFRVUkVfWSA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgbWF0ZXJpYWwgbG9hZGVkIGZyb20gdGhlIG10bCB3aWxsIGJlIHNldCBoZXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXRlcmlhbHM6IFN0YW5kYXJkTWF0ZXJpYWxbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHJlYWQgdGhlIG10bCBmaWxlIGFuZCBjcmVhdGUgZWFjaCBtYXRlcmlhbCBkZXNjcmliZWQgaW5zaWRlXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdWxkIGJlIGltcHJvdmUgYnkgYWRkaW5nIDpcclxuICAgICAqIC1zb21lIGNvbXBvbmVudCBtaXNzaW5nIChOaSwgVGYuLi4pXHJcbiAgICAgKiAtaW5jbHVkaW5nIHRoZSBzcGVjaWZpYyBvcHRpb25zIGF2YWlsYWJsZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB0aGUgbWF0ZXJpYWwgd2lsbCBiZSBjcmVhdGVkIGluXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBtdGwgZGF0YSB0byBwYXJzZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdHVybCB0byB1c2UgaW4gb3JkZXIgdG8gbG9hZCByZWxhdGl2ZSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEBwYXJhbSBhc3NldENvbnRhaW5lciBkZWZpbmVzIHRoZSBhc3NldCBjb250YWluZXIgdG8gc3RvcmUgdGhlIG1hdGVyaWFsIGluIChjYW4gYmUgbnVsbClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcnNlTVRMKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIsIHJvb3RVcmw6IHN0cmluZywgYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TcGxpdCB0aGUgbGluZXMgZnJvbSB0aGUgZmlsZVxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gZGF0YS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAvLyB3aGl0ZXNwYWNlIGNoYXIgaWU6IFsgXFx0XFxyXFxuXFxmXVxyXG4gICAgICAgIGNvbnN0IGRlbGltaXRlclBhdHRlcm4gPSAvXFxzKy87XHJcbiAgICAgICAgLy9BcnJheSB3aXRoIFJHQiBjb2xvcnNcclxuICAgICAgICBsZXQgY29sb3I6IG51bWJlcltdO1xyXG4gICAgICAgIC8vTmV3IG1hdGVyaWFsXHJcbiAgICAgICAgbGV0IG1hdGVyaWFsOiBOdWxsYWJsZTxTdGFuZGFyZE1hdGVyaWFsPiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vTG9vayBhdCBlYWNoIGxpbmVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBCbGFuayBsaW5lIG9yIGNvbW1lbnRcclxuICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID09PSAwIHx8IGxpbmUuY2hhckF0KDApID09PSBcIiNcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vR2V0IHRoZSBmaXJzdCBwYXJhbWV0ZXIgKGtleXdvcmQpXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGxpbmUuaW5kZXhPZihcIiBcIik7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBwb3MgPj0gMCA/IGxpbmUuc3Vic3RyaW5nKDAsIHBvcykgOiBsaW5lO1xyXG4gICAgICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vR2V0IHRoZSBkYXRhIGZvbGxvd2luZyB0aGUga2V5XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBwb3MgPj0gMCA/IGxpbmUuc3Vic3RyaW5nKHBvcyArIDEpLnRyaW0oKSA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvL1RoaXMgbXRsIGtleXdvcmQgd2lsbCBjcmVhdGUgdGhlIG5ldyBtYXRlcmlhbFxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcIm5ld210bFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIGl0IGlzIHRoZSBmaXJzdCBtYXRlcmlhbC5cclxuICAgICAgICAgICAgICAgIC8vIE1hdGVyaWFscyBzcGVjaWZpY2F0aW9ucyBhcmUgZGVzY3JpYmVkIGFmdGVyIHRoaXMga2V5d29yZC5cclxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIHRoZSBwcmV2aW91cyBtYXRlcmlhbCBpbiB0aGUgbWF0ZXJpYWwgYXJyYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBhIG5ldyBtYXRlcmlhbC5cclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlIGlzIHRoZSBuYW1lIG9mIHRoZSBtYXRlcmlhbCByZWFkIGluIHRoZSBtdGwgZmlsZVxyXG5cclxuICAgICAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbCh2YWx1ZSwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuX3BhcmVudENvbnRhaW5lciA9IGFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJrZFwiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaWZmdXNlIGNvbG9yIChjb2xvciB1bmRlciB3aGl0ZSBsaWdodCkgdXNpbmcgUkdCIHZhbHVlc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdmFsdWUgID0gXCJyIGcgYlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHZhbHVlLnNwbGl0KGRlbGltaXRlclBhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIC8vY29sb3IgPSBbcixnLGJdXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0Z2hlIGNvbG9yIGludG8gdGhlIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwia2FcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQW1iaWVudCBjb2xvciAoY29sb3IgdW5kZXIgc2hhZG93KSB1c2luZyBSR0IgdmFsdWVzXHJcblxyXG4gICAgICAgICAgICAgICAgLy92YWx1ZSA9IFwiciBnIGJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB2YWx1ZS5zcGxpdChkZWxpbWl0ZXJQYXR0ZXJuLCAzKS5tYXAocGFyc2VGbG9hdCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yID0gW3IsZyxiXVxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGdoZSBjb2xvciBpbnRvIHRoZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuYW1iaWVudENvbG9yID0gQ29sb3IzLkZyb21BcnJheShjb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImtzXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNwZWN1bGFyIGNvbG9yIChjb2xvciB3aGVuIGxpZ2h0IGlzIHJlZmxlY3RlZCBmcm9tIHNoaW55IHN1cmZhY2UpIHVzaW5nIFJHQiB2YWx1ZXNcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ZhbHVlID0gXCJyIGcgYlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHZhbHVlLnNwbGl0KGRlbGltaXRlclBhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIC8vY29sb3IgPSBbcixnLGJdXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgY29sb3IgaW50byB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwia2VcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRW1pc3NpdmUgY29sb3IgdXNpbmcgUkdCIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB2YWx1ZS5zcGxpdChkZWxpbWl0ZXJQYXR0ZXJuLCAzKS5tYXAocGFyc2VGbG9hdCk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gQ29sb3IzLkZyb21BcnJheShjb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm5zXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vdmFsdWUgPSBcIkludGVnZXJcIlxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJQb3dlciA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJkXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vZCBpcyBkaXNzb2x2ZSBmb3IgY3VycmVudCBtYXRlcmlhbC4gSXQgbWVhbiBhbHBoYSBmb3IgQkFCWUxPTlxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuYWxwaGEgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1RleHR1cmVcclxuICAgICAgICAgICAgICAgIC8vVGhpcyBwYXJ0IGNhbiBiZSBpbXByb3ZlZCBieSBhZGRpbmcgdGhlIHBvc3NpYmxlIG9wdGlvbnMgb2YgdGV4dHVyZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJtYXBfa2FcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYW1iaWVudCB0ZXh0dXJlIG1hcCB3aXRoIGEgbG9hZGVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAvL1dlIG11c3QgZmlyc3QgZ2V0IHRoZSBmb2xkZXIgb2YgdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbWJpZW50VGV4dHVyZSA9IE1UTEZpbGVMb2FkZXIuX0dldFRleHR1cmUocm9vdFVybCwgdmFsdWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibWFwX2tkXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIERpZmZ1c2UgdGV4dHVyZSBtYXAgd2l0aCBhIGxvYWRlZCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUgPSBNVExGaWxlTG9hZGVyLl9HZXRUZXh0dXJlKHJvb3RVcmwsIHZhbHVlLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9rc1wiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTcGVjdWxhciB0ZXh0dXJlIG1hcCB3aXRoIGEgbG9hZGVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAvL1dlIG11c3QgZmlyc3QgZ2V0IHRoZSBmb2xkZXIgb2YgdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhclRleHR1cmUgPSBNVExGaWxlTG9hZGVyLl9HZXRUZXh0dXJlKHJvb3RVcmwsIHZhbHVlLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9uc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvL1NwZWN1bGFyXHJcbiAgICAgICAgICAgICAgICAvL1NwZWN1bGFyIGhpZ2hsaWdodCBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIC8vV2UgbXVzdCBmaXJzdCBnZXQgdGhlIGZvbGRlciBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvL05vdCBzdXBwb3J0ZWQgYnkgQkFCWUxPTlxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJtYXBfYnVtcFwiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1RoZSBidW1wIHRleHR1cmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KGRlbGltaXRlclBhdHRlcm4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVtcE11bHRpcGxpZXJJbmRleCA9IHZhbHVlcy5pbmRleE9mKFwiLWJtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bXBNdWx0aXBsaWVyOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnVtcE11bHRpcGxpZXJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVtcE11bHRpcGxpZXIgPSB2YWx1ZXNbYnVtcE11bHRpcGxpZXJJbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoYnVtcE11bHRpcGxpZXJJbmRleCwgMik7IC8vIHJlbW92ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmJ1bXBUZXh0dXJlID0gTVRMRmlsZUxvYWRlci5fR2V0VGV4dHVyZShyb290VXJsLCB2YWx1ZXMuam9pbihcIiBcIiksIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbC5idW1wVGV4dHVyZSAmJiBidW1wTXVsdGlwbGllciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLmJ1bXBUZXh0dXJlLmxldmVsID0gcGFyc2VGbG9hdChidW1wTXVsdGlwbGllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9kXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBkaXNzb2x2ZSBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHlUZXh0dXJlID0gTVRMRmlsZUxvYWRlci5fR2V0VGV4dHVyZShyb290VXJsLCB2YWx1ZSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vT3B0aW9ucyBmb3IgaWxsdW1pbmF0aW9uXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImlsbHVtXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vSWxsdW1pbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UaGF0IG1lYW4gS2QgPT0gS2RcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Db2xvciBvbiBhbmQgQW1iaWVudCBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0hpZ2hsaWdodCBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCIzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlZmxlY3Rpb24gb24gYW5kIFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI1XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlZmxlY3Rpb246IEZyZXNuZWwgb24gYW5kIFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI2XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvZmYgYW5kIFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvbiBhbmQgUmF5IHRyYWNlIG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVmbGVjdGlvbiBvbiBhbmQgUmF5IHRyYWNlIG9mZlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvZmZcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiMTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2FzdHMgc2hhZG93cyBvbnRvIGludmlzaWJsZSBzdXJmYWNlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJVbmhhbmRsZWQgZXhwcmVzc2lvbiBhdCBsaW5lIDogXCIgKyBpICsnXFxuJyArIFwid2l0aCB2YWx1ZSA6IFwiICsgbGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9BdCB0aGUgZW5kIG9mIHRoZSBmaWxlLCBhZGQgdGhlIGxhc3QgbWF0ZXJpYWxcclxuICAgICAgICBpZiAobWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdGV4dHVyZSBmb3IgdGhlIG1hdGVyaWFsLlxyXG4gICAgICpcclxuICAgICAqIElmIHRoZSBtYXRlcmlhbCBpcyBpbXBvcnRlZCBmcm9tIGlucHV0IGZpbGUsXHJcbiAgICAgKiBXZSBzYW5pdGl6ZSB0aGUgdXJsIHRvIGVuc3VyZSBpdCB0YWtlcyB0aGUgdGV4dHVyZSBmcm9tIGFzaWRlIHRoZSBtYXRlcmlhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgdG8gbG9hZCBmcm9tXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHN0b3JlZCBpbiB0aGUgbXRsXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqIEByZXR1cm5zIFRoZSBUZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUZXh0dXJlKHJvb3RVcmw6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc2NlbmU6IFNjZW5lKTogTnVsbGFibGU8VGV4dHVyZT4ge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gcm9vdFVybDtcclxuICAgICAgICAvLyBMb2FkIGZyb20gaW5wdXQgZmlsZS5cclxuICAgICAgICBpZiAocm9vdFVybCA9PT0gXCJmaWxlOlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0RGVsaW1pdGVyID0gdmFsdWUubGFzdEluZGV4T2YoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICBpZiAobGFzdERlbGltaXRlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGxhc3REZWxpbWl0ZXIgPSB2YWx1ZS5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsYXN0RGVsaW1pdGVyID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSB2YWx1ZS5zdWJzdHJpbmcobGFzdERlbGltaXRlciArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdCBmcm9tIGlucHV0IGZpbGUuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVGV4dHVyZSh1cmwsIHNjZW5lLCBmYWxzZSwgTVRMRmlsZUxvYWRlci5JTlZFUlRfVEVYVFVSRV9ZKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSwgSVNjZW5lTG9hZGVyUGx1Z2luLCBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCwgU2NlbmVMb2FkZXJQbHVnaW5PcHRpb25zIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFdlYlJlcXVlc3QgfSBmcm9tIFwiY29yZS9NaXNjL3dlYlJlcXVlc3RcIjtcclxuaW1wb3J0IHsgT0JKRmlsZUxvYWRlck1ldGFkYXRhIH0gZnJvbSBcIi4vb2JqRmlsZUxvYWRlci5tZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBNVExGaWxlTG9hZGVyIH0gZnJvbSBcIi4vbXRsRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE9CSkxvYWRpbmdPcHRpb25zIH0gZnJvbSBcIi4vb2JqTG9hZGluZ09wdGlvbnNcIjtcclxuaW1wb3J0IHsgU29saWRQYXJzZXIgfSBmcm9tIFwiLi9zb2xpZFBhcnNlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCIge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtanNkb2MsIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY2VuZUxvYWRlclBsdWdpbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIG9iaiBsb2FkZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgW09CSkZpbGVMb2FkZXJNZXRhZGF0YS5uYW1lXTogUGFydGlhbDxPQkpMb2FkaW5nT3B0aW9ucz47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPQkogZmlsZSB0eXBlIGxvYWRlci5cclxuICogVGhpcyBpcyBhIGJhYnlsb24gc2NlbmUgbG9hZGVyIHBsdWdpbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPQkpGaWxlTG9hZGVyIGltcGxlbWVudHMgSVNjZW5lTG9hZGVyUGx1Z2luQXN5bmMsIElTY2VuZUxvYWRlclBsdWdpbkZhY3Rvcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIFVWcyBhcmUgb3B0aW1pemVkIGJ5IGRlZmF1bHQgZHVyaW5nIGxvYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT1BUSU1JWkVfV0lUSF9VViA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIEludmVydCBtb2RlbCBvbiB5LWF4aXMgKGRvZXMgYSBtb2RlbCBzY2FsaW5nIGludmVyc2lvbilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJTlZFUlRfWSA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZlcnQgWS1BeGlzIG9mIHJlZmVyZW5jZWQgdGV4dHVyZXMgb24gbG9hZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJTlZFUlRfVEVYVFVSRV9ZKCkge1xyXG4gICAgICAgIHJldHVybiBNVExGaWxlTG9hZGVyLklOVkVSVF9URVhUVVJFX1k7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgSU5WRVJUX1RFWFRVUkVfWSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIE1UTEZpbGVMb2FkZXIuSU5WRVJUX1RFWFRVUkVfWSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5jbHVkZSBpbiBtZXNoZXMgdGhlIHZlcnRleCBjb2xvcnMgYXZhaWxhYmxlIGluIHNvbWUgT0JKIGZpbGVzLiAgVGhpcyBpcyBub3QgcGFydCBvZiBPQkogc3RhbmRhcmQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSU1QT1JUX1ZFUlRFWF9DT0xPUlMgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogQ29tcHV0ZSB0aGUgbm9ybWFscyBmb3IgdGhlIG1vZGVsLCBldmVuIGlmIG5vcm1hbHMgYXJlIHByZXNlbnQgaW4gdGhlIGZpbGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09NUFVURV9OT1JNQUxTID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIE9wdGltaXplIHRoZSBub3JtYWxzIGZvciB0aGUgbW9kZWwuIExpZ2h0aW5nIGNhbiBiZSB1bmV2ZW4gaWYgeW91IHVzZSBPcHRpbWl6ZVdpdGhVViA9IHRydWUgYmVjYXVzZSBuZXcgdmVydGljZXMgY2FuIGJlIGNyZWF0ZWQgZm9yIHRoZSBzYW1lIGxvY2F0aW9uIGlmIHRoZXkgcGVydGFpbiB0byBkaWZmZXJlbnQgZmFjZXMuXHJcbiAgICAgKiBVc2luZyBPcHRpbWl6ZWhOb3JtYWxzID0gdHJ1ZSB3aWxsIGhlbHAgc21vb3RoaW5nIHRoZSBsaWdodGluZyBieSBhdmVyYWdpbmcgdGhlIG5vcm1hbHMgb2YgdGhvc2UgdmVydGljZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT1BUSU1JWkVfTk9STUFMUyA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGN1c3RvbSBzY2FsaW5nIG9mIFVWIGNvb3JkaW5hdGVzIG9mIGxvYWRlZCBtZXNoZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVVZfU0NBTElORyA9IG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTa2lwIGxvYWRpbmcgdGhlIG1hdGVyaWFscyBldmVuIGlmIGRlZmluZWQgaW4gdGhlIE9CSiBmaWxlIChtYXRlcmlhbHMgYXJlIGlnbm9yZWQpLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNLSVBfTUFURVJJQUxTID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGEgbWF0ZXJpYWwgZmFpbHMgdG8gbG9hZCBPQkogbG9hZGVyIHdpbGwgc2lsZW50bHkgZmFpbCBhbmQgb25TdWNjZXNzKCkgY2FsbGJhY2sgd2lsbCBiZSB0cmlnZ2VyZWQuXHJcbiAgICAgKlxyXG4gICAgICogRGVmYXVsdHMgdG8gdHJ1ZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTUFURVJJQUxfTE9BRElOR19GQUlMU19TSUxFTlRMWSA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBhc3NldHMgd2l0aG91dCBoYW5kZWRuZXNzIGNvbnZlcnNpb25zLiBUaGlzIGZsYWcgaXMgZm9yIGNvbXBhdGliaWxpdHkuIFVzZSBpdCBvbmx5IGlmIGFic29sdXRlbHkgcmVxdWlyZWQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVTRV9MRUdBQ1lfQkVIQVZJT1IgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHBsdWdpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBPQkpGaWxlTG9hZGVyTWV0YWRhdGEubmFtZTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgZXh0ZW5zaW9uIHRoZSBwbHVnaW4gaXMgYWJsZSB0byBsb2FkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXh0ZW5zaW9ucyA9IE9CSkZpbGVMb2FkZXJNZXRhZGF0YS5leHRlbnNpb25zO1xyXG5cclxuICAgIHByaXZhdGUgX2Fzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRpbmdPcHRpb25zOiBPQkpMb2FkaW5nT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbG9hZGVyIGZvciAuT0JKIGZpbGVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIG9wdGlvbnMgZm9yIGxvYWRpbmcgYW5kIHBhcnNpbmcgT0JKL01UTCBmaWxlcy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGluZ09wdGlvbnM/OiBQYXJ0aWFsPFJlYWRvbmx5PE9CSkxvYWRpbmdPcHRpb25zPj4pIHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucyA9IHsgLi4uT0JKRmlsZUxvYWRlci5fRGVmYXVsdExvYWRpbmdPcHRpb25zLCAuLi4obG9hZGluZ09wdGlvbnMgPz8ge30pIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0IF9EZWZhdWx0TG9hZGluZ09wdGlvbnMoKTogT0JKTG9hZGluZ09wdGlvbnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVOb3JtYWxzOiBPQkpGaWxlTG9hZGVyLkNPTVBVVEVfTk9STUFMUyxcclxuICAgICAgICAgICAgb3B0aW1pemVOb3JtYWxzOiBPQkpGaWxlTG9hZGVyLk9QVElNSVpFX05PUk1BTFMsXHJcbiAgICAgICAgICAgIGltcG9ydFZlcnRleENvbG9yczogT0JKRmlsZUxvYWRlci5JTVBPUlRfVkVSVEVYX0NPTE9SUyxcclxuICAgICAgICAgICAgaW52ZXJ0WTogT0JKRmlsZUxvYWRlci5JTlZFUlRfWSxcclxuICAgICAgICAgICAgaW52ZXJ0VGV4dHVyZVk6IE9CSkZpbGVMb2FkZXIuSU5WRVJUX1RFWFRVUkVfWSxcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgICAgICAgICBVVlNjYWxpbmc6IE9CSkZpbGVMb2FkZXIuVVZfU0NBTElORyxcclxuICAgICAgICAgICAgbWF0ZXJpYWxMb2FkaW5nRmFpbHNTaWxlbnRseTogT0JKRmlsZUxvYWRlci5NQVRFUklBTF9MT0FESU5HX0ZBSUxTX1NJTEVOVExZLFxyXG4gICAgICAgICAgICBvcHRpbWl6ZVdpdGhVVjogT0JKRmlsZUxvYWRlci5PUFRJTUlaRV9XSVRIX1VWLFxyXG4gICAgICAgICAgICBza2lwTWF0ZXJpYWxzOiBPQkpGaWxlTG9hZGVyLlNLSVBfTUFURVJJQUxTLFxyXG4gICAgICAgICAgICB1c2VMZWdhY3lCZWhhdmlvcjogT0JKRmlsZUxvYWRlci5VU0VfTEVHQUNZX0JFSEFWSU9SLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxscyBzeW5jaHJvbm91c2x5IHRoZSBNVEwgZmlsZSBhdHRhY2hlZCB0byB0aGlzIG9iai5cclxuICAgICAqIExvYWQgZnVuY3Rpb24gb3IgaW1wb3J0TWVzaCBmdW5jdGlvbiBkb24ndCBlbmFibGUgdG8gbG9hZCAyIGZpbGVzIGluIHRoZSBzYW1lIHRpbWUgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBXaXRob3V0IHRoaXMgZnVuY3Rpb24gbWF0ZXJpYWxzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBmaXJzdCBmcmFtZSAoYnV0IGRpc3BsYXllZCBhZnRlcikuXHJcbiAgICAgKiBJbiBjb25zZXF1ZW5jZSBpdCBpcyBpbXBvc3NpYmxlIHRvIGdldCBtYXRlcmlhbCBpbmZvcm1hdGlvbiBpbiB5b3VyIEhUTUwgZmlsZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCBvZiB0aGUgTVRMIGZpbGVcclxuICAgICAqIEBwYXJhbSByb290VXJsIGRlZmluZXMgd2hlcmUgdG8gbG9hZCBkYXRhIGZyb21cclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3MgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIE1UTCBmaWxlIGlzIGxvYWRlZFxyXG4gICAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9sb2FkTVRMKFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChyZXNwb25zZTogc3RyaW5nIHwgQXJyYXlCdWZmZXIsIHJlc3BvbnNlVXJsPzogc3RyaW5nKSA9PiBhbnksXHJcbiAgICAgICAgb25GYWlsdXJlOiAocGF0aE9mRmlsZTogc3RyaW5nLCBleGNlcHRpb24/OiBhbnkpID0+IHZvaWRcclxuICAgICkge1xyXG4gICAgICAgIC8vVGhlIGNvbXBsZXRlIHBhdGggdG8gdGhlIG10bCBmaWxlXHJcbiAgICAgICAgY29uc3QgcGF0aE9mRmlsZSA9IHJvb3RVcmwgKyB1cmw7XHJcblxyXG4gICAgICAgIC8vIExvYWRzIHRocm91Z2ggdGhlIGJhYnlsb24gdG9vbHMgdG8gYWxsb3cgZmlsZUlucHV0IHNlYXJjaC5cclxuICAgICAgICBUb29scy5Mb2FkRmlsZShwYXRoT2ZGaWxlLCBvblN1Y2Nlc3MsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBmYWxzZSwgKHJlcXVlc3Q/OiBXZWJSZXF1ZXN0LCBleGNlcHRpb24/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgb25GYWlsdXJlKHBhdGhPZkZpbGUsIGV4Y2VwdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlUGx1Z2luKG9wdGlvbnM6IFNjZW5lTG9hZGVyUGx1Z2luT3B0aW9ucyk6IElTY2VuZUxvYWRlclBsdWdpbkFzeW5jIHwgSVNjZW5lTG9hZGVyUGx1Z2luIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9CSkZpbGVMb2FkZXIob3B0aW9uc1tPQkpGaWxlTG9hZGVyTWV0YWRhdGEubmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdGhlIGRhdGEgc3RyaW5nIGNhbiBiZSBsb2FkZWQgZGlyZWN0bHkuXHJcbiAgICAgKiBAcmV0dXJucyBpZiB0aGUgZGF0YSBjYW4gYmUgbG9hZGVkIGRpcmVjdGx5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjYW5EaXJlY3RMb2FkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydHMgb25lIG9yIG1vcmUgbWVzaGVzIGZyb20gdGhlIGxvYWRlZCBPQkogZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3Mgb2YgdGhlIG1lc2ggbmFtZXMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGZyb20gdGhlIGZpbGVcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhlIG1lc2hlcyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBPQkogZGF0YSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBsb2FkZWQgbWVzaGVzLCBwYXJ0aWNsZXMsIHNrZWxldG9ucyBhbmQgYW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKG1lc2hlc05hbWVzOiBhbnksIHNjZW5lOiBTY2VuZSwgZGF0YTogYW55LCByb290VXJsOiBzdHJpbmcpOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgLy9nZXQgdGhlIG1lc2hlcyBmcm9tIE9CSiBmaWxlXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlU29saWRBc3luYyhtZXNoZXNOYW1lcywgc2NlbmUsIGRhdGEsIHJvb3RVcmwpLnRoZW4oKG1lc2hlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzaGVzOiBtZXNoZXMsXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2tlbGV0b25zOiBbXSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwczogW10sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogW10sXHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyaWVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGxpZ2h0czogW10sXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVNYW5hZ2VyczogW10sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gdGhlIGxvYWRlZCBPQkogZGF0YSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGUgb2JqZWN0cyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBPQkogZGF0YSB0byBsb2FkXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB3aGljaCBjb21wbGV0ZXMgd2hlbiBvYmplY3RzIGhhdmUgYmVlbiBsb2FkZWQgdG8gdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHVibGljIGxvYWRBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9HZXQgdGhlIDNEIG1vZGVsXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHZvaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW50byBhbiBhc3NldCBjb250YWluZXIuXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIHNjZW5lIHRvIGxvYWQgaW50b1xyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gaW1wb3J0XHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHNjZW5lIGFuZCByZXNvdXJjZXNcclxuICAgICAqIEByZXR1cm5zIFRoZSBsb2FkZWQgYXNzZXQgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYywgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBsb2FkQXNzZXRDb250YWluZXJBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTxBc3NldENvbnRhaW5lcj4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiBjb250YWluZXIubWVzaGVzLnB1c2gobWVzaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tZXNoZXMuZm9yRWFjaCgobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLm1hdGVyaWFscy5pbmRleE9mKG1hdGVyaWFsKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRleHR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZXMgPSBtYXRlcmlhbC5nZXRBY3RpdmVUZXh0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci50ZXh0dXJlcy5pbmRleE9mKHQpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudGV4dHVyZXMucHVzaCh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGV4O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZCB0aGUgT0JKIGZpbGUgYW5kIGNyZWF0ZSBhbiBBcnJheSBvZiBtZXNoZXMuXHJcbiAgICAgKiBFYWNoIG1lc2ggY29udGFpbnMgYWxsIGluZm9ybWF0aW9uIGdpdmVuIGJ5IHRoZSBPQkogYW5kIHRoZSBNVEwgZmlsZS5cclxuICAgICAqIGkuZS4gdmVydGljZXMgcG9zaXRpb25zIGFuZCBpbmRpY2VzLCBvcHRpb25hbCBub3JtYWxzIHZhbHVlcywgb3B0aW9uYWwgVVYgdmFsdWVzLCBvcHRpb25hbCBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGRlZmluZXMgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyBvZiB0aGUgbWVzaCBuYW1lcyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgZnJvbSB0aGUgZmlsZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIHNjZW5lIHdoZXJlIGFyZSBkaXNwbGF5ZWQgdGhlIGRhdGFcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIGNvbnRlbnQgb2YgdGhlIG9iaiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSBwYXRoIHRvIHRoZSBmb2xkZXJcclxuICAgICAqIEByZXR1cm5zIHRoZSBsaXN0IG9mIGxvYWRlZCBtZXNoZXNcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jLCBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gICAgcHJpdmF0ZSBfcGFyc2VTb2xpZEFzeW5jKG1lc2hlc05hbWVzOiBhbnksIHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nLCByb290VXJsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEFic3RyYWN0TWVzaD4+IHtcclxuICAgICAgICBsZXQgZmlsZVRvTG9hZDogc3RyaW5nID0gXCJcIjsgLy9UaGUgbmFtZSBvZiB0aGUgbXRsRmlsZSB0byBsb2FkXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzRnJvbU1UTEZpbGU6IE1UTEZpbGVMb2FkZXIgPSBuZXcgTVRMRmlsZUxvYWRlcigpO1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsVG9Vc2U6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgYmFieWxvbk1lc2hlc0FycmF5OiBBcnJheTxNZXNoPiA9IFtdOyAvL1RoZSBtZXNoIGZvciBiYWJ5bG9uXHJcblxyXG4gICAgICAgIC8vIFNhbml0aXplIGRhdGFcclxuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8jLiokL2dtLCBcIlwiKS50cmltKCk7XHJcblxyXG4gICAgICAgIC8vIE1haW4gZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBzb2xpZFBhcnNlciA9IG5ldyBTb2xpZFBhcnNlcihtYXRlcmlhbFRvVXNlLCBiYWJ5bG9uTWVzaGVzQXJyYXksIHRoaXMuX2xvYWRpbmdPcHRpb25zKTtcclxuXHJcbiAgICAgICAgc29saWRQYXJzZXIucGFyc2UobWVzaGVzTmFtZXMsIGRhdGEsIHNjZW5lLCB0aGlzLl9hc3NldENvbnRhaW5lciwgKGZpbGVOYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgZmlsZVRvTG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHRoZSBtYXRlcmlhbHNcclxuICAgICAgICBjb25zdCBtdGxQcm9taXNlczogQXJyYXk8UHJvbWlzZTx2b2lkPj4gPSBbXTtcclxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgZmlsZSB0byBsb2FkXHJcbiAgICAgICAgaWYgKGZpbGVUb0xvYWQgIT09IFwiXCIgJiYgIXRoaXMuX2xvYWRpbmdPcHRpb25zLnNraXBNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgLy9Mb2FkIHRoZSBmaWxlIHN5bmNocm9ub3VzbHlcclxuICAgICAgICAgICAgbXRsUHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkTVRMKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVG9Mb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGF0YUxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0NyZWF0ZSBtYXRlcmlhbHMgdGhhbmtzIE1UTExvYWRlciBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsc0Zyb21NVExGaWxlLnBhcnNlTVRMKHNjZW5lLCBkYXRhTG9hZGVkLCByb290VXJsLCB0aGlzLl9hc3NldENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Mb29rIGF0IGVhY2ggbWF0ZXJpYWwgbG9hZGVkIGluIHRoZSBtdGwgZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgbWF0ZXJpYWxzRnJvbU1UTEZpbGUubWF0ZXJpYWxzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhyZWUgdmFyaWFibGVzIHRvIGdldCBhbGwgbWVzaGVzIHdpdGggdGhlIHNhbWUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaW5kaWNlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2luZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGUgbWF0ZXJpYWwgZnJvbSBNVEwgZmlsZSBpcyB1c2VkIGluIHRoZSBtZXNoZXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUHVzaCB0aGUgaW5kaWNlIGluIGFuIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgdGhlIG1hdGVyaWFsIGlzIG5vdCB1c2VkIGZvciBhbm90aGVyIG1lc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChfaW5kZXggPSBtYXRlcmlhbFRvVXNlLmluZGV4T2YobWF0ZXJpYWxzRnJvbU1UTEZpbGUubWF0ZXJpYWxzW25dLm5hbWUsIHN0YXJ0SW5kZXgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaW5kaWNlcy5wdXNoKF9pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gX2luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZSBtYXRlcmlhbCBpcyBub3QgdXNlZCBkaXNwb3NlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaW5kZXggPT09IC0xICYmIF9pbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGUgbWF0ZXJpYWwgaXMgbm90IG5lZWRlZCwgcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHNGcm9tTVRMRmlsZS5tYXRlcmlhbHNbbl0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCBfaW5kaWNlcy5sZW5ndGg7IG8rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBNZXNoIGZvciBlYWNoIG1lc2ggd2l0aCB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gYmFieWxvbk1lc2hlc0FycmF5W19pbmRpY2VzW29dXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG1hdGVyaWFsc0Zyb21NVExGaWxlLm1hdGVyaWFsc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVzaC5nZXRUb3RhbEluZGljZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBpbmRpY2VzLCB3ZSBuZWVkIHRvIHR1cm4gb24gcG9pbnQgY2xvdWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwucG9pbnRzQ2xvdWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgRXJyb3IgcHJvY2Vzc2luZyBNVEwgZmlsZTogJyR7ZmlsZVRvTG9hZH0nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLm1hdGVyaWFsTG9hZGluZ0ZhaWxzU2lsZW50bHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGF0aE9mRmlsZTogc3RyaW5nLCBleGNlcHRpb24/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEVycm9yIGRvd25sb2FkaW5nIE1UTCBmaWxlOiAnJHtmaWxlVG9Mb2FkfSdgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5tYXRlcmlhbExvYWRpbmdGYWlsc1NpbGVudGx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1JldHVybiBhbiBhcnJheSB3aXRoIGFsbCBNZXNoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG10bFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNMaW5lID0gKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4gQm9vbGVhbihtZXNoLl9pbnRlcm5hbE1ldGFkYXRhPy5bXCJfaXNMaW5lXCJdID8/IGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgbWVzaCwgZGV0ZXJtaW5lIGlmIGl0IGlzIGEgbGluZSBtZXNoLCBjbG9uZSBvciBtb2RpZnkgdGhlIG1hdGVyaWFsIHRvIGxpbmUgcmVuZGVyaW5nLlxyXG4gICAgICAgICAgICBiYWJ5bG9uTWVzaGVzQXJyYXkuZm9yRWFjaCgobWVzaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGluZShtZXNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXQgPSBtZXNoLm1hdGVyaWFsID8/IG5ldyBTdGFuZGFyZE1hdGVyaWFsKG1lc2gubmFtZSArIFwiX2xpbmVcIiwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGFub3RoZXIgbWVzaCBpcyB1c2luZyB0aGlzIG1hdGVyaWFsIGFuZCBpdCBpcyBub3QgYSBsaW5lIHRoZW4gd2UgbmVlZCB0byBjbG9uZSBpdC5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZWVkQ2xvbmUgPSBtYXQuZ2V0QmluZGVkTWVzaGVzKCkuZmlsdGVyKChlKSA9PiAhaXNMaW5lKGUpKS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWVkQ2xvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ID0gbWF0LmNsb25lKG1hdC5uYW1lICsgXCJfbGluZVwiKSA/PyBtYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdC53aXJlZnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwgPSBtYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2guX2ludGVybmFsTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5faW50ZXJuYWxNZXRhZGF0YVtcIl9pc0xpbmVcIl0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaGVzQXJyYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQWRkIHRoaXMgbG9hZGVyIGludG8gdGhlIHJlZ2lzdGVyIHBsdWdpblxyXG5SZWdpc3RlclNjZW5lTG9hZGVyUGx1Z2luKG5ldyBPQkpGaWxlTG9hZGVyKCkpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBPQkpMb2FkaW5nT3B0aW9ucyB9IGZyb20gXCIuL29iakxvYWRpbmdPcHRpb25zXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcblxyXG50eXBlIE1lc2hPYmplY3QgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpbmRpY2VzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PjtcclxuICAgIHBvc2l0aW9uczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj47XHJcbiAgICBub3JtYWxzOiBOdWxsYWJsZTxBcnJheTxudW1iZXI+PjtcclxuICAgIGNvbG9yczogTnVsbGFibGU8QXJyYXk8bnVtYmVyPj47XHJcbiAgICB1dnM6IE51bGxhYmxlPEFycmF5PG51bWJlcj4+O1xyXG4gICAgbWF0ZXJpYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBkaXJlY3RNYXRlcmlhbD86IE51bGxhYmxlPE1hdGVyaWFsPjtcclxuICAgIGlzT2JqZWN0OiBib29sZWFuOyAvLyBJZiB0aGUgZW50aXR5IGlzIGRlZmluZWQgYXMgYW4gb2JqZWN0IChcIm9cIiksIG9yIGdyb3VwIChcImdcIilcclxuICAgIF9iYWJ5bG9uTWVzaD86IEFic3RyYWN0TWVzaDsgLy8gVGhlIGNvcnJlc3BvbmRpbmcgQmFieWxvbiBtZXNoXHJcbiAgICBoYXNMaW5lcz86IGJvb2xlYW47IC8vIElmIHRoZSBtZXNoIGhhcyBsaW5lc1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gbG9hZCBtZXNoIGRhdGEgZnJvbSBPQkogY29udGVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNvbGlkUGFyc2VyIHtcclxuICAgIC8vIERlc2NyaXB0b3JcclxuICAgIC8qKiBPYmplY3QgZGVzY3JpcHRvciAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3REZXNjcmlwdG9yID0gL15vLztcclxuICAgIC8qKiBHcm91cCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdyb3VwRGVzY3JpcHRvciA9IC9eZy87XHJcbiAgICAvKiogTWF0ZXJpYWwgbGliIGRlc2NyaXB0b3IgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTXRsTGliR3JvdXBEZXNjcmlwdG9yID0gL15tdGxsaWIgLztcclxuICAgIC8qKiBVc2UgYSBtYXRlcmlhbCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVzZU10bERlc2NyaXB0b3IgPSAvXnVzZW10bCAvO1xyXG4gICAgLyoqIFNtb290aCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNtb290aERlc2NyaXB0b3IgPSAvXnMgLztcclxuXHJcbiAgICAvLyBQYXR0ZXJuc1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB2ZXJ0ZXggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVmVydGV4UGF0dGVybiA9IC9edihcXHMrW1xcZHwufCt8XFwtfGV8RV0rKXszLDd9LztcclxuICAgIC8qKiBQYXR0ZXJuIHVzZWQgdG8gZGV0ZWN0IGEgbm9ybWFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5vcm1hbFBhdHRlcm4gPSAvXnZuKFxccytbXFxkfC58K3xcXC18ZXxFXSspKCArW1xcZHwufCt8XFwtfGV8RV0rKSggK1tcXGR8LnwrfFxcLXxlfEVdKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBVViBzZXQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVVZQYXR0ZXJuID0gL152dChcXHMrW1xcZHwufCt8XFwtfGV8RV0rKSggK1tcXGR8LnwrfFxcLXxlfEVdKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBmaXJzdCBraW5kIG9mIGZhY2UgKGYgdmVydGV4IHZlcnRleCB2ZXJ0ZXgpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZhY2VQYXR0ZXJuMSA9IC9eZlxccysoKFtcXGRdezEsfVtcXHNdPyl7Myx9KSsvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBzZWNvbmQga2luZCBvZiBmYWNlIChmIHZlcnRleC91dnMgdmVydGV4L3V2cyB2ZXJ0ZXgvdXZzKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGYWNlUGF0dGVybjIgPSAvXmZcXHMrKCgoW1xcZF17MSx9XFwvW1xcZF17MSx9W1xcc10/KXszLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB0aGlyZCBraW5kIG9mIGZhY2UgKGYgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZhY2VQYXR0ZXJuMyA9IC9eZlxccysoKChbXFxkXXsxLH1cXC9bXFxkXXsxLH1cXC9bXFxkXXsxLH1bXFxzXT8pezMsfSkrKS87XHJcbiAgICAvKiogUGF0dGVybiB1c2VkIHRvIGRldGVjdCBhIGZvdXJ0aCBraW5kIG9mIGZhY2UgKGYgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwpKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRmFjZVBhdHRlcm40ID0gL15mXFxzKygoKFtcXGRdezEsfVxcL1xcL1tcXGRdezEsfVtcXHNdPyl7Myx9KSspLztcclxuICAgIC8qKiBQYXR0ZXJuIHVzZWQgdG8gZGV0ZWN0IGEgZmlmdGgga2luZCBvZiBmYWNlIChmIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGYWNlUGF0dGVybjUgPSAvXmZcXHMrKCgoLVtcXGRdezEsfVxcLy1bXFxkXXsxLH1cXC8tW1xcZF17MSx9W1xcc10/KXszLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBsaW5lKGwgdmVydGV4IHZlcnRleCkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTGluZVBhdHRlcm4xID0gL15sXFxzKygoW1xcZF17MSx9W1xcc10/KXsyLH0pKy87XHJcbiAgICAvKiogUGF0dGVybiB1c2VkIHRvIGRldGVjdCBhIHNlY29uZCBraW5kIG9mIGxpbmUgKGwgdmVydGV4L3V2cyB2ZXJ0ZXgvdXZzKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMaW5lUGF0dGVybjIgPSAvXmxcXHMrKCgoW1xcZF17MSx9XFwvW1xcZF17MSx9W1xcc10/KXsyLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB0aGlyZCBraW5kIG9mIGxpbmUgKGwgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExpbmVQYXR0ZXJuMyA9IC9ebFxccysoKChbXFxkXXsxLH1cXC9bXFxkXXsxLH1cXC9bXFxkXXsxLH1bXFxzXT8pezIsfSkrKS87XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGluZ09wdGlvbnM6IE9CSkxvYWRpbmdPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBBcnJheTxWZWN0b3IzPiA9IFtdOyAvL3ZhbHVlcyBmb3IgdGhlIHBvc2l0aW9ucyBvZiB2ZXJ0aWNlc1xyXG4gICAgcHJpdmF0ZSBfbm9ybWFsczogQXJyYXk8VmVjdG9yMz4gPSBbXTsgLy9WYWx1ZXMgZm9yIHRoZSBub3JtYWxzXHJcbiAgICBwcml2YXRlIF91dnM6IEFycmF5PFZlY3RvcjI+ID0gW107IC8vVmFsdWVzIGZvciB0aGUgdGV4dHVyZXNcclxuICAgIHByaXZhdGUgX2NvbG9yczogQXJyYXk8Q29sb3I0PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZXh0Q29sb3JzOiBBcnJheTxDb2xvcjQ+ID0gW107IC8vRXh0ZW5zaW9uIGNvbG9yXHJcbiAgICBwcml2YXRlIF9tZXNoZXNGcm9tT2JqOiBBcnJheTxNZXNoT2JqZWN0PiA9IFtdOyAvL1ttZXNoXSBDb250YWlucyBhbGwgdGhlIG9iaiBtZXNoZXNcclxuICAgIHByaXZhdGUgX2hhbmRsZWRNZXNoOiBNZXNoT2JqZWN0OyAvL1RoZSBjdXJyZW50IG1lc2ggb2YgbWVzaGVzIGFycmF5XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvL1RoZSBsaXN0IG9mIGluZGljZXMgZm9yIFZlcnRleERhdGFcclxuICAgIHByaXZhdGUgX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb246IEFycmF5PFZlY3RvcjM+ID0gW107IC8vVGhlIGxpc3Qgb2YgcG9zaXRpb24gaW4gdmVjdG9yc1xyXG4gICAgcHJpdmF0ZSBfd3JhcHBlZFV2c0ZvckJhYnlsb246IEFycmF5PFZlY3RvcjI+ID0gW107IC8vQXJyYXkgd2l0aCBhbGwgdmFsdWUgb2YgdXZzIHRvIG1hdGNoIHdpdGggdGhlIGluZGljZXNcclxuICAgIHByaXZhdGUgX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uOiBBcnJheTxDb2xvcjQ+ID0gW107IC8vIEFycmF5IHdpdGggYWxsIGNvbG9yIHZhbHVlcyB0byBtYXRjaCB3aXRoIHRoZSBpbmRpY2VzXHJcbiAgICBwcml2YXRlIF93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb246IEFycmF5PFZlY3RvcjM+ID0gW107IC8vQXJyYXkgd2l0aCBhbGwgdmFsdWUgb2Ygbm9ybWFscyB0byBtYXRjaCB3aXRoIHRoZSBpbmRpY2VzXHJcbiAgICBwcml2YXRlIF90dXBsZVBvc05vcm06IEFycmF5PHsgbm9ybWFsczogQXJyYXk8bnVtYmVyPjsgaWR4OiBBcnJheTxudW1iZXI+OyB1djogQXJyYXk8bnVtYmVyPiB9PiA9IFtdOyAvL0NyZWF0ZSBhIHR1cGxlIHdpdGggaW5kaWNlIG9mIFBvc2l0aW9uLCBOb3JtYWwsIFVWICBbcG9zLCBub3JtLCB1dnNdXHJcbiAgICBwcml2YXRlIF9jdXJQb3NpdGlvbkluSW5kaWNlcyA9IDA7XHJcbiAgICBwcml2YXRlIF9oYXNNZXNoZXM6IGJvb2xlYW4gPSBmYWxzZTsgLy9NZXNoZXMgYXJlIGRlZmluZWQgaW4gdGhlIGZpbGVcclxuICAgIHByaXZhdGUgX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb246IEFycmF5PG51bWJlcj4gPSBbXTsgLy9WYWx1ZSBvZiBwb3NpdGlvbkZvckJhYnlsb24gdy9vIFZlY3RvcjMoKSBbeCx5LHpdXHJcbiAgICBwcml2YXRlIF91bndyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uOiBBcnJheTxudW1iZXI+ID0gW107IC8vIFZhbHVlIG9mIGNvbG9yRm9yQmFieWxvbiB3L28gQ29sb3I0KCkgW3IsZyxiLGFdXHJcbiAgICBwcml2YXRlIF91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvL1ZhbHVlIG9mIG5vcm1hbHNGb3JCYWJ5bG9uIHcvbyBWZWN0b3IzKCkgIFt4LHksel1cclxuICAgIHByaXZhdGUgX3Vud3JhcHBlZFVWRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvL1ZhbHVlIG9mIHV2c0ZvckJhYnlsb24gdy9vIFZlY3RvcjMoKSAgICAgIFt4LHksel1cclxuICAgIHByaXZhdGUgX3RyaWFuZ2xlczogQXJyYXk8c3RyaW5nPiA9IFtdOyAvL0luZGljZXMgZnJvbSBuZXcgdHJpYW5nbGVzIGNvbWluZyBmcm9tIHBvbHlnb25zXHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbE5hbWVGcm9tT2JqOiBzdHJpbmcgPSBcIlwiOyAvL1RoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG1hdGVyaWFsXHJcbiAgICBwcml2YXRlIF9vYmpNZXNoTmFtZTogc3RyaW5nID0gXCJcIjsgLy9UaGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgcHJpdmF0ZSBfaW5jcmVtZW50OiBudW1iZXIgPSAxOyAvL0lkIGZvciBtZXNoZXMgY3JlYXRlZCBieSB0aGUgbXVsdGltYXRlcmlhbFxyXG4gICAgcHJpdmF0ZSBfaXNGaXJzdE1hdGVyaWFsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2dyYXlDb2xvciA9IG5ldyBDb2xvcjQoMC41LCAwLjUsIDAuNSwgMSk7XHJcbiAgICBwcml2YXRlIF9tYXRlcmlhbFRvVXNlOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgX2JhYnlsb25NZXNoZXNBcnJheTogQXJyYXk8TWVzaD47XHJcbiAgICBwcml2YXRlIF9wdXNoVHJpYW5nbGU6IChmYWNlczogQXJyYXk8c3RyaW5nPiwgZmFjZUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9oYW5kZWRuZXNzU2lnbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGFzTGluZURhdGE6IGJvb2xlYW4gPSBmYWxzZTsgLy9JZiB0aGlzIG1lc2ggaGFzIGxpbmUgc2VnbWVudChsKSBkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFNvbGlkUGFyc2VyXHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWxUb1VzZSBkZWZpbmVzIHRoZSBhcnJheSB0byBmaWxsIHdpdGggdGhlIGxpc3Qgb2YgbWF0ZXJpYWxzIHRvIHVzZSAoaXQgd2lsbCBiZSBmaWxsZWQgYnkgdGhlIHBhcnNlIGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGJhYnlsb25NZXNoZXNBcnJheSBkZWZpbmVzIHRoZSBhcnJheSB0byBmaWxsIHdpdGggdGhlIGxpc3Qgb2YgbG9hZGVkIG1lc2hlcyAoaXQgd2lsbCBiZSBmaWxsZWQgYnkgdGhlIHBhcnNlIGZ1bmN0aW9uKVxyXG4gICAgICogQHBhcmFtIGxvYWRpbmdPcHRpb25zIGRlZmluZXMgdGhlIGxvYWRpbmcgb3B0aW9ucyB0byB1c2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1hdGVyaWFsVG9Vc2U6IHN0cmluZ1tdLCBiYWJ5bG9uTWVzaGVzQXJyYXk6IEFycmF5PE1lc2g+LCBsb2FkaW5nT3B0aW9uczogT0JKTG9hZGluZ09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbFRvVXNlID0gbWF0ZXJpYWxUb1VzZTtcclxuICAgICAgICB0aGlzLl9iYWJ5bG9uTWVzaGVzQXJyYXkgPSBiYWJ5bG9uTWVzaGVzQXJyYXk7XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ09wdGlvbnMgPSBsb2FkaW5nT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCBmb3Igb2JqIGluIHRoZSBnaXZlbiBhcnJheS5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGNoZWNrIGlmIGEgY291cGxlIG9mIGRhdGEgYWxyZWFkeSBleGlzdHMgaW4gYW4gYXJyYXkuXHJcbiAgICAgKlxyXG4gICAgICogSWYgZm91bmQsIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZGVkIHR1cGxlIGluZGV4LiBSZXR1cm5zIC0xIGlmIG5vdCBmb3VuZFxyXG4gICAgICogQHBhcmFtIGFyciBBcnJheTx7IG5vcm1hbHM6IEFycmF5PG51bWJlcj4sIGlkeDogQXJyYXk8bnVtYmVyPiB9PlxyXG4gICAgICogQHBhcmFtIG9iaiBBcnJheTxudW1iZXI+XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNJbkFycmF5KGFycjogQXJyYXk8eyBub3JtYWxzOiBBcnJheTxudW1iZXI+OyBpZHg6IEFycmF5PG51bWJlcj4gfT4sIG9iajogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIGlmICghYXJyW29ialswXV0pIHtcclxuICAgICAgICAgICAgYXJyW29ialswXV0gPSB7IG5vcm1hbHM6IFtdLCBpZHg6IFtdIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkeCA9IGFycltvYmpbMF1dLm5vcm1hbHMuaW5kZXhPZihvYmpbMV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaWR4ID09PSAtMSA/IC0xIDogYXJyW29ialswXV0uaWR4W2lkeF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNJbkFycmF5VVYoYXJyOiBBcnJheTx7IG5vcm1hbHM6IEFycmF5PG51bWJlcj47IGlkeDogQXJyYXk8bnVtYmVyPjsgdXY6IEFycmF5PG51bWJlcj4gfT4sIG9iajogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIGlmICghYXJyW29ialswXV0pIHtcclxuICAgICAgICAgICAgYXJyW29ialswXV0gPSB7IG5vcm1hbHM6IFtdLCBpZHg6IFtdLCB1djogW10gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWR4ID0gYXJyW29ialswXV0ubm9ybWFscy5pbmRleE9mKG9ialsxXSk7XHJcblxyXG4gICAgICAgIGlmIChpZHggIT0gMSAmJiBvYmpbMl0gPT09IGFycltvYmpbMF1dLnV2W2lkeF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycltvYmpbMF1dLmlkeFtpZHhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNldCB0aGUgZGF0YSBmb3IgZWFjaCB0cmlhbmdsZS5cclxuICAgICAqIERhdGEgYXJlIHBvc2l0aW9uLCBub3JtYWxzIGFuZCB1dnNcclxuICAgICAqIElmIGEgdHVwbGUgb2YgKHBvc2l0aW9uLCBub3JtYWwpIGlzIG5vdCBzZXQsIGFkZCB0aGUgZGF0YSBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIGFycmF5XHJcbiAgICAgKiBJZiB0aGUgdHVwbGUgYWxyZWFkeSBleGlzdCwgYWRkIG9ubHkgdGhlaXIgaW5kaWNlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIHZlcnRleCdzIGRhdGFcclxuICAgICAqICogaW5kaWNlc1Bvc2l0aW9uRnJvbU9iajogVGhlIGluZGV4IGluIHBvc2l0aW9ucyBhcnJheVxyXG4gICAgICogKiBpbmRpY2VzVXZzRnJvbU9iajogVGhlIGluZGV4IGluIHV2cyBhcnJheVxyXG4gICAgICogKiBpbmRpY2VzTm9ybWFsRnJvbU9iajogVGhlIGluZGV4IGluIG5vcm1hbHMgYXJyYXlcclxuICAgICAqICogcG9zaXRpb25WZWN0b3JGcm9tT0JKOiBUaGUgdmFsdWUgb2YgcG9zaXRpb24gYXQgaW5kZXggb2JqSW5kaWNlXHJcbiAgICAgKiAqIHRleHR1cmVWZWN0b3JGcm9tT0JKOiBUaGUgdmFsdWUgb2YgdXZzXHJcbiAgICAgKiAqIG5vcm1hbHNWZWN0b3JGcm9tT0JKOiBUaGUgdmFsdWUgb2Ygbm9ybWFscyBhdCBpbmRleCBvYmpOb3JtYWxlXHJcbiAgICAgKiAqIHBvc2l0aW9uQ29sb3JzRnJvbU9CSjogVGhlIHZhbHVlIG9mIGNvbG9yIGF0IGluZGV4IG9iakluZGljZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXREYXRhKGRhdGE6IHtcclxuICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmo6IG51bWJlcjtcclxuICAgICAgICBpbmRpY2VVdnNGcm9tT2JqPzogbnVtYmVyO1xyXG4gICAgICAgIGluZGljZU5vcm1hbEZyb21PYmo/OiBudW1iZXI7XHJcbiAgICAgICAgcG9zaXRpb25WZWN0b3JGcm9tT0JKOiBWZWN0b3IzO1xyXG4gICAgICAgIHRleHR1cmVWZWN0b3JGcm9tT0JKPzogVmVjdG9yMjtcclxuICAgICAgICBub3JtYWxzVmVjdG9yRnJvbU9CSj86IFZlY3RvcjM7XHJcbiAgICAgICAgcG9zaXRpb25Db2xvcnNGcm9tT0JKPzogQ29sb3I0O1xyXG4gICAgfSkge1xyXG4gICAgICAgIC8vVXNlIGRlZmF1bHQgdmFsdWVzIGlmIHVuZGVmaW5lZFxyXG4gICAgICAgIGRhdGEuaW5kaWNlVXZzRnJvbU9iaiA/Pz0gLTE7XHJcbiAgICAgICAgZGF0YS5pbmRpY2VOb3JtYWxGcm9tT2JqID8/PSAtMTtcclxuXHJcbiAgICAgICAgLy9DaGVjayBpZiB0aGlzIHR1cGxlIGFscmVhZHkgZXhpc3RzIGluIHRoZSBsaXN0IG9mIHR1cGxlc1xyXG4gICAgICAgIGxldCBfaW5kZXg6IG51bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMub3B0aW1pemVXaXRoVVYpIHtcclxuICAgICAgICAgICAgX2luZGV4ID0gdGhpcy5faXNJbkFycmF5VVYodGhpcy5fdHVwbGVQb3NOb3JtLCBbZGF0YS5pbmRpY2VQb3NpdGlvbkZyb21PYmosIGRhdGEuaW5kaWNlTm9ybWFsRnJvbU9iaiwgZGF0YS5pbmRpY2VVdnNGcm9tT2JqXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX2luZGV4ID0gdGhpcy5faXNJbkFycmF5KHRoaXMuX3R1cGxlUG9zTm9ybSwgW2RhdGEuaW5kaWNlUG9zaXRpb25Gcm9tT2JqLCBkYXRhLmluZGljZU5vcm1hbEZyb21PYmpdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSWYgaXQgbm90IGV4aXN0c1xyXG4gICAgICAgIGlmIChfaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vQWRkIGFuIG5ldyBpbmRpY2UuXHJcbiAgICAgICAgICAgIC8vVGhlIGFycmF5IG9mIGluZGljZXMgaXMgb25seSBhbiBhcnJheSB3aXRoIGhpcyBsZW5ndGggZXF1YWwgdG8gdGhlIG51bWJlciBvZiB0cmlhbmdsZXMgLSAxLlxyXG4gICAgICAgICAgICAvL1dlIGFkZCB2ZXJ0aWNlcyBkYXRhIGluIHRoaXMgb3JkZXJcclxuICAgICAgICAgICAgdGhpcy5faW5kaWNlc0ZvckJhYnlsb24ucHVzaCh0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vUHVzaCB0aGUgcG9zaXRpb24gb2YgdmVydGljZSBmb3IgQmFieWxvblxyXG4gICAgICAgICAgICAvL0VhY2ggZWxlbWVudCBpcyBhIFZlY3RvcjMoeCx5LHopXHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ucHVzaChkYXRhLnBvc2l0aW9uVmVjdG9yRnJvbU9CSik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50ZXh0dXJlVmVjdG9yRnJvbU9CSiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvL1B1c2ggdGhlIHV2cyBmb3IgQmFieWxvblxyXG4gICAgICAgICAgICAgICAgLy9FYWNoIGVsZW1lbnQgaXMgYSBWZWN0b3IyKHUsdilcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uLnB1c2goZGF0YS50ZXh0dXJlVmVjdG9yRnJvbU9CSik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEubm9ybWFsc1ZlY3RvckZyb21PQkogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy9QdXNoIHRoZSBub3JtYWxzIGZvciBCYWJ5bG9uXHJcbiAgICAgICAgICAgICAgICAvL0VhY2ggZWxlbWVudCBpcyBhIFZlY3RvcjMoeCx5LHopXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ucHVzaChkYXRhLm5vcm1hbHNWZWN0b3JGcm9tT0JKKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5wb3NpdGlvbkNvbG9yc0Zyb21PQkogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy9QdXNoIHRoZSBjb2xvcnMgZm9yIEJhYnlsb25cclxuICAgICAgICAgICAgICAgIC8vRWFjaCBlbGVtZW50IGlzIGEgQkFCWUxPTi5Db2xvcjQocixnLGIsYSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLnB1c2goZGF0YS5wb3NpdGlvbkNvbG9yc0Zyb21PQkopO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0FkZCB0aGUgdHVwbGUgaW4gdGhlIGNvbXBhcmlzb24gbGlzdFxyXG4gICAgICAgICAgICB0aGlzLl90dXBsZVBvc05vcm1bZGF0YS5pbmRpY2VQb3NpdGlvbkZyb21PYmpdLm5vcm1hbHMucHVzaChkYXRhLmluZGljZU5vcm1hbEZyb21PYmopO1xyXG4gICAgICAgICAgICB0aGlzLl90dXBsZVBvc05vcm1bZGF0YS5pbmRpY2VQb3NpdGlvbkZyb21PYmpdLmlkeC5wdXNoKHRoaXMuX2N1clBvc2l0aW9uSW5JbmRpY2VzKyspO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMub3B0aW1pemVXaXRoVVYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3R1cGxlUG9zTm9ybVtkYXRhLmluZGljZVBvc2l0aW9uRnJvbU9ial0udXYucHVzaChkYXRhLmluZGljZVV2c0Zyb21PYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9UaGUgdHVwbGUgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgLy9BZGQgdGhlIGluZGV4IG9mIHRoZSBhbHJlYWR5IGV4aXN0aW5nIHR1cGxlXHJcbiAgICAgICAgICAgIC8vQXQgdGhpcyBpbmRleCB3ZSBjYW4gZ2V0IHRoZSB2YWx1ZSBvZiBwb3NpdGlvbiwgbm9ybWFsLCBjb2xvciBhbmQgdXZzIG9mIHZlcnRleFxyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5wdXNoKF9pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIFZlY3RvcigpIGFuZCBCQUJZTE9OLkNvbG9yKCkgb2JqZWN0cyBpbnRvIG51bWJlcnMgaW4gYW4gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdW53cmFwRGF0YSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL0V2ZXJ5IGFycmF5IGhhcyB0aGUgc2FtZSBsZW5ndGhcclxuICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL1B1c2ggdGhlIHgsIHksIHogdmFsdWVzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgdW53cmFwcGVkIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZFBvc2l0aW9uRm9yQmFieWxvbltsXS54ICogdGhpcy5faGFuZGVkbmVzc1NpZ24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZFBvc2l0aW9uRm9yQmFieWxvbltsXS55LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb25bbF0uelxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uW2xdLnggKiB0aGlzLl9oYW5kZWRuZXNzU2lnbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uW2xdLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWROb3JtYWxzRm9yQmFieWxvbltsXS56XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93cmFwcGVkVXZzRm9yQmFieWxvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91bndyYXBwZWRVVkZvckJhYnlsb24ucHVzaCh0aGlzLl93cmFwcGVkVXZzRm9yQmFieWxvbltsXS54LCB0aGlzLl93cmFwcGVkVXZzRm9yQmFieWxvbltsXS55KTsgLy96IGlzIGFuIG9wdGlvbmFsIHZhbHVlIG5vdCBzdXBwb3J0ZWQgYnkgQkFCWUxPTlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9QdXNoIHRoZSByLCBnLCBiLCBhIHZhbHVlcyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIHVud3JhcHBlZCBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0ucixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uYixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uYVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXlzIGZvciB0aGUgbmV4dCBuZXcgbWVzaGVzXHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3R1cGxlUG9zTm9ybS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJQb3NpdGlvbkluSW5kaWNlcyA9IDA7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdW53cmFwIGRhdGEgd2hpbGUgcGFyc2luZyBPQkogZGF0YS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyaWFuZ2xlcyBmcm9tIHBvbHlnb25zXHJcbiAgICAgKiBJdCBpcyBpbXBvcnRhbnQgdG8gbm90aWNlIHRoYXQgYSB0cmlhbmdsZSBpcyBhIHBvbHlnb25cclxuICAgICAqIFdlIGdldCA1IHBhdHRlcm5zIG9mIGZhY2UgZGVmaW5lZCBpbiBPQkogRmlsZSA6XHJcbiAgICAgKiBmYWNlUGF0dGVybjEgPSBbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjIgPSBbXCIxLzFcIixcIjIvMlwiLFwiMy8zXCIsXCI0LzRcIixcIjUvNVwiLFwiNi82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjMgPSBbXCIxLzEvMVwiLFwiMi8yLzJcIixcIjMvMy8zXCIsXCI0LzQvNFwiLFwiNS81LzVcIixcIjYvNi82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjQgPSBbXCIxLy8xXCIsXCIyLy8yXCIsXCIzLy8zXCIsXCI0Ly80XCIsXCI1Ly81XCIsXCI2Ly82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjUgPSBbXCItMS8tMS8tMVwiLFwiLTIvLTIvLTJcIixcIi0zLy0zLy0zXCIsXCItNC8tNC8tNFwiLFwiLTUvLTUvLTVcIixcIi02Ly02Ly02XCJdXHJcbiAgICAgKiBFYWNoIHBhdHRlcm4gaXMgZGl2aWRlZCBieSB0aGUgc2FtZSBtZXRob2RcclxuICAgICAqIEBwYXJhbSBmYWNlcyBBcnJheVtTdHJpbmddIFRoZSBpbmRpY2VzIG9mIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gdiBJbnRlZ2VyIFRoZSB2YXJpYWJsZSB0byBpbmNyZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0VHJpYW5nbGVzKGZhY2VzOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL1dvcmsgZm9yIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBmYWNlSW5kZXggPSB2OyBmYWNlSW5kZXggPCBmYWNlcy5sZW5ndGggLSAxOyBmYWNlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAvL0FkZCBvbiB0aGUgdHJpYW5nbGUgdmFyaWFibGUgdGhlIGluZGV4ZXMgdG8gb2J0YWluIHRyaWFuZ2xlc1xyXG4gICAgICAgICAgICB0aGlzLl9wdXNoVHJpYW5nbGUoZmFjZXMsIGZhY2VJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Jlc3VsdCBvYnRhaW5lZCBhZnRlciAyIGl0ZXJhdGlvbnM6XHJcbiAgICAgICAgLy9QYXR0ZXJuMSA9PiB0cmlhbmdsZSA9IFtcIjFcIixcIjJcIixcIjNcIixcIjFcIixcIjNcIixcIjRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuMiA9PiB0cmlhbmdsZSA9IFtcIjEvMVwiLFwiMi8yXCIsXCIzLzNcIixcIjEvMVwiLFwiMy8zXCIsXCI0LzRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuMyA9PiB0cmlhbmdsZSA9IFtcIjEvMS8xXCIsXCIyLzIvMlwiLFwiMy8zLzNcIixcIjEvMS8xXCIsXCIzLzMvM1wiLFwiNC80LzRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuNCA9PiB0cmlhbmdsZSA9IFtcIjEvLzFcIixcIjIvLzJcIixcIjMvLzNcIixcIjEvLzFcIixcIjMvLzNcIixcIjQvLzRcIl07XHJcbiAgICAgICAgLy9QYXR0ZXJuNSA9PiB0cmlhbmdsZSA9IFtcIi0xLy0xLy0xXCIsXCItMi8tMi8tMlwiLFwiLTMvLTMvLTNcIixcIi0xLy0xLy0xXCIsXCItMy8tMy8tM1wiLFwiLTQvLTQvLTRcIl07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUbyBnZXQgY29sb3IgYmV0d2VlbiBjb2xvciBhbmQgZXh0ZW5zaW9uIGNvbG9yXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggSW50ZWdlciBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaW4gdGhlIGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyB2YWx1ZSBvZiB0YXJnZXQgY29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0Q29sb3IoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4dENvbG9yc1tpbmRleF0gPz8gdGhpcy5fY29sb3JzW2luZGV4XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cmlhbmdsZXMgYW5kIHB1c2ggdGhlIGRhdGEgZm9yIGVhY2ggcG9seWdvbiBmb3IgdGhlIHBhdHRlcm4gMVxyXG4gICAgICogSW4gdGhpcyBwYXR0ZXJuIHdlIGdldCB2ZXJ0aWNlIHBvc2l0aW9uc1xyXG4gICAgICogQHBhcmFtIGZhY2VcclxuICAgICAqIEBwYXJhbSB2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMShmYWNlOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL0dldCB0aGUgaW5kaWNlcyBvZiB0cmlhbmdsZXMgZm9yIGVhY2ggcG9seWdvblxyXG4gICAgICAgIHRoaXMuX2dldFRyaWFuZ2xlcyhmYWNlLCB2KTtcclxuICAgICAgICAvL0ZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHRyaWFuZ2xlcyBhcnJheS5cclxuICAgICAgICAvL1RoaXMgdmFyIGNvdWxkIGNvbnRhaW5zIDEgdG8gYW4gaW5maW5pdHkgb2YgdHJpYW5nbGVzXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLl90cmlhbmdsZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgLy8gU2V0IHBvc2l0aW9uIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludCh0aGlzLl90cmlhbmdsZXNba10pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25WZWN0b3JGcm9tT0JKOiB0aGlzLl9wb3NpdGlvbnNbaW5kaWNlUG9zaXRpb25Gcm9tT2JqXSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sb3JzRnJvbU9CSjogdGhpcy5fZ2V0Q29sb3IoaW5kaWNlUG9zaXRpb25Gcm9tT2JqKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vUmVzZXQgdmFyaWFibGUgZm9yIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICB0aGlzLl90cmlhbmdsZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cmlhbmdsZXMgYW5kIHB1c2ggdGhlIGRhdGEgZm9yIGVhY2ggcG9seWdvbiBmb3IgdGhlIHBhdHRlcm4gMlxyXG4gICAgICogSW4gdGhpcyBwYXR0ZXJuIHdlIGdldCB2ZXJ0aWNlIHBvc2l0aW9ucyBhbmQgdXZzXHJcbiAgICAgKiBAcGFyYW0gZmFjZVxyXG4gICAgICogQHBhcmFtIHZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4yKGZhY2U6IEFycmF5PHN0cmluZz4sIHY6IG51bWJlcikge1xyXG4gICAgICAgIC8vR2V0IHRoZSBpbmRpY2VzIG9mIHRyaWFuZ2xlcyBmb3IgZWFjaCBwb2x5Z29uXHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIC8vdHJpYW5nbGVba10gPSBcIjEvMVwiXHJcbiAgICAgICAgICAgIC8vU3BsaXQgdGhlIGRhdGEgZm9yIGdldHRpbmcgcG9zaXRpb24gYW5kIHV2XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5fdHJpYW5nbGVzW2tdLnNwbGl0KFwiL1wiKTsgLy8gW1wiMVwiLCBcIjFcIl1cclxuICAgICAgICAgICAgLy9TZXQgcG9zaXRpb24gaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZVBvc2l0aW9uRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzBdKSAtIDE7XHJcbiAgICAgICAgICAgIC8vU2V0IHV2IGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VVdnNGcm9tT2JqID0gcGFyc2VJbnQocG9pbnRbMV0pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlVXZzRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVmVjdG9yRnJvbU9CSjogdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVmVjdG9yRnJvbU9CSjogdGhpcy5fdXZzW2luZGljZVV2c0Zyb21PYmpdLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Db2xvcnNGcm9tT0JKOiB0aGlzLl9nZXRDb2xvcihpbmRpY2VQb3NpdGlvbkZyb21PYmopLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vUmVzZXQgdmFyaWFibGUgZm9yIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICB0aGlzLl90cmlhbmdsZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cmlhbmdsZXMgYW5kIHB1c2ggdGhlIGRhdGEgZm9yIGVhY2ggcG9seWdvbiBmb3IgdGhlIHBhdHRlcm4gM1xyXG4gICAgICogSW4gdGhpcyBwYXR0ZXJuIHdlIGdldCB2ZXJ0aWNlIHBvc2l0aW9ucywgdXZzIGFuZCBub3JtYWxzXHJcbiAgICAgKiBAcGFyYW0gZmFjZVxyXG4gICAgICogQHBhcmFtIHZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4zKGZhY2U6IEFycmF5PHN0cmluZz4sIHY6IG51bWJlcikge1xyXG4gICAgICAgIC8vR2V0IHRoZSBpbmRpY2VzIG9mIHRyaWFuZ2xlcyBmb3IgZWFjaCBwb2x5Z29uXHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLzEvMVwiXHJcbiAgICAgICAgICAgIC8vU3BsaXQgdGhlIGRhdGEgZm9yIGdldHRpbmcgcG9zaXRpb24sIHV2LCBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi9cIik7IC8vIFtcIjFcIiwgXCIxXCIsIFwiMVwiXVxyXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZVBvc2l0aW9uRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzBdKSAtIDE7XHJcbiAgICAgICAgICAgIC8vIFNldCB1diBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlVXZzRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzFdKSAtIDE7XHJcbiAgICAgICAgICAgIC8vIFNldCBub3JtYWwgaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZU5vcm1hbEZyb21PYmogPSBwYXJzZUludChwb2ludFsyXSkgLSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmosXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VVdnNGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlTm9ybWFsRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVmVjdG9yRnJvbU9CSjogdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVmVjdG9yRnJvbU9CSjogdGhpcy5fdXZzW2luZGljZVV2c0Zyb21PYmpdLFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1ZlY3RvckZyb21PQko6IHRoaXMuX25vcm1hbHNbaW5kaWNlTm9ybWFsRnJvbU9ial0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDRcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMgYW5kIG5vcm1hbHNcclxuICAgICAqIEBwYXJhbSBmYWNlXHJcbiAgICAgKiBAcGFyYW0gdlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjQoZmFjZTogQXJyYXk8c3RyaW5nPiwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLy8xXCJcclxuICAgICAgICAgICAgLy9TcGxpdCB0aGUgZGF0YSBmb3IgZ2V0dGluZyBwb3NpdGlvbiBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi8vXCIpOyAvLyBbXCIxXCIsIFwiMVwiXVxyXG4gICAgICAgICAgICAvLyBXZSBjaGVjayBpbmRpY2VzLCBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludChwb2ludFswXSkgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VOb3JtYWxGcm9tT2JqID0gcGFyc2VJbnQocG9pbnRbMV0pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlTm9ybWFsRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVmVjdG9yRnJvbU9CSjogdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICBub3JtYWxzVmVjdG9yRnJvbU9CSjogdGhpcy5fbm9ybWFsc1tpbmRpY2VOb3JtYWxGcm9tT2JqXSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sb3JzRnJvbU9CSjogdGhpcy5fZ2V0Q29sb3IoaW5kaWNlUG9zaXRpb25Gcm9tT2JqKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vUmVzZXQgdmFyaWFibGUgZm9yIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICB0aGlzLl90cmlhbmdsZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogQ3JlYXRlIHRyaWFuZ2xlcyBhbmQgcHVzaCB0aGUgZGF0YSBmb3IgZWFjaCBwb2x5Z29uIGZvciB0aGUgcGF0dGVybiAzXHJcbiAgICAgKiBJbiB0aGlzIHBhdHRlcm4gd2UgZ2V0IHZlcnRpY2UgcG9zaXRpb25zLCB1dnMgYW5kIG5vcm1hbHNcclxuICAgICAqIEBwYXJhbSBmYWNlXHJcbiAgICAgKiBAcGFyYW0gdlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjUoZmFjZTogQXJyYXk8c3RyaW5nPiwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9HZXQgdGhlIGluZGljZXMgb2YgdHJpYW5nbGVzIGZvciBlYWNoIHBvbHlnb25cclxuICAgICAgICB0aGlzLl9nZXRUcmlhbmdsZXMoZmFjZSwgdik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIC8vdHJpYW5nbGVba10gPSBcIi0xLy0xLy0xXCJcclxuICAgICAgICAgICAgLy9TcGxpdCB0aGUgZGF0YSBmb3IgZ2V0dGluZyBwb3NpdGlvbiwgdXYsIGFuZCBub3JtYWxzXHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5fdHJpYW5nbGVzW2tdLnNwbGl0KFwiL1wiKTsgLy8gW1wiLTFcIiwgXCItMVwiLCBcIi0xXCJdXHJcbiAgICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlUG9zaXRpb25Gcm9tT2JqID0gdGhpcy5fcG9zaXRpb25zLmxlbmd0aCArIHBhcnNlSW50KHBvaW50WzBdKTtcclxuICAgICAgICAgICAgLy8gU2V0IHV2IGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VVdnNGcm9tT2JqID0gdGhpcy5fdXZzLmxlbmd0aCArIHBhcnNlSW50KHBvaW50WzFdKTtcclxuICAgICAgICAgICAgLy8gU2V0IG5vcm1hbCBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlTm9ybWFsRnJvbU9iaiA9IHRoaXMuX25vcm1hbHMubGVuZ3RoICsgcGFyc2VJbnQocG9pbnRbMl0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmosXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VVdnNGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlTm9ybWFsRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVmVjdG9yRnJvbU9CSjogdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlVmVjdG9yRnJvbU9CSjogdGhpcy5fdXZzW2luZGljZVV2c0Zyb21PYmpdLFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1ZlY3RvckZyb21PQko6IHRoaXMuX25vcm1hbHNbaW5kaWNlTm9ybWFsRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbG9yc0Zyb21PQko6IHRoaXMuX2dldENvbG9yKGluZGljZVBvc2l0aW9uRnJvbU9iaiksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkUHJldmlvdXNPYmpNZXNoKCkge1xyXG4gICAgICAgIC8vQ2hlY2sgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBtZXNoLiBPdGhlcndpc2Ugd2UgZG9uJ3QgaGF2ZSBkYXRhLlxyXG4gICAgICAgIGlmICh0aGlzLl9tZXNoZXNGcm9tT2JqLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy9HZXQgdGhlIHByZXZpb3VzIG1lc2ggZm9yIGFwcGx5aW5nIHRoZSBkYXRhIGFib3V0IHRoZSBmYWNlc1xyXG4gICAgICAgICAgICAvLz0+IGluIG9iaiBmaWxlLCBmYWNlcyBkZWZpbml0aW9uIGFwcGVuZCBhZnRlciB0aGUgbmFtZSBvZiB0aGUgbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaCA9IHRoaXMuX21lc2hlc0Zyb21PYmpbdGhpcy5fbWVzaGVzRnJvbU9iai5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGludG8gQXJyYXkgZm9yIHRoZSBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcERhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy51c2VMZWdhY3lCZWhhdmlvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV2ZXJzZSB0YWIuIE90aGVyd2lzZSBmYWNlIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHdyb25nIHNlbnNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TZXQgdGhlIGluZm9ybWF0aW9uIGZvciB0aGUgbWVzaFxyXG4gICAgICAgICAgICAvL1NsaWNlIHRoZSBhcnJheSB0byBhdm9pZCByZXdyaXRpbmcgYmVjYXVzZSBvZiB0aGUgZmFjdCB0aGlzIGlzIHRoZSBzYW1lIHZhciB3aGljaCBiZSByZXdyaXRlZFxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5pbmRpY2VzID0gdGhpcy5faW5kaWNlc0ZvckJhYnlsb24uc2xpY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2gucG9zaXRpb25zID0gdGhpcy5fdW53cmFwcGVkUG9zaXRpb25zRm9yQmFieWxvbi5zbGljZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5ub3JtYWxzID0gdGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24uc2xpY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2gudXZzID0gdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5jb2xvcnMgPSB0aGlzLl91bndyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guaGFzTGluZXMgPSB0aGlzLl9oYXNMaW5lRGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vUmVzZXQgdGhlIGFycmF5IGZvciB0aGUgbmV4dCBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl91bndyYXBwZWRVVkZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5faGFzTGluZURhdGEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb3B0aW1pemVOb3JtYWxzKG1lc2g6IEFic3RyYWN0TWVzaCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbHMgPSBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCk7XHJcbiAgICAgICAgY29uc3QgbWFwVmVydGljZXM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyW10gfSA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoIXBvc2l0aW9ucyB8fCAhbm9ybWFscykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGggLyAzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHBvc2l0aW9uc1tpICogMyArIDBdO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gcG9zaXRpb25zW2kgKiAzICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHogPSBwb3NpdGlvbnNbaSAqIDMgKyAyXTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0geCArIFwiX1wiICsgeSArIFwiX1wiICsgejtcclxuXHJcbiAgICAgICAgICAgIGxldCBsc3QgPSBtYXBWZXJ0aWNlc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoIWxzdCkge1xyXG4gICAgICAgICAgICAgICAgbHN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBtYXBWZXJ0aWNlc1trZXldID0gbHN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxzdC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXBWZXJ0aWNlcykge1xyXG4gICAgICAgICAgICBjb25zdCBsc3QgPSBtYXBWZXJ0aWNlc1trZXldO1xyXG4gICAgICAgICAgICBpZiAobHN0Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2MElkeCA9IGxzdFswXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZJZHggPSBsc3RbaV07XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW3YwSWR4ICogMyArIDBdICs9IG5vcm1hbHNbdklkeCAqIDMgKyAwXTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbdjBJZHggKiAzICsgMV0gKz0gbm9ybWFsc1t2SWR4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1t2MElkeCAqIDMgKyAyXSArPSBub3JtYWxzW3ZJZHggKiAzICsgMl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vcm1hbC5jb3B5RnJvbUZsb2F0cyhub3JtYWxzW3YwSWR4ICogMyArIDBdLCBub3JtYWxzW3YwSWR4ICogMyArIDFdLCBub3JtYWxzW3YwSWR4ICogMyArIDJdKTtcclxuICAgICAgICAgICAgbm9ybWFsLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZJZHggPSBsc3RbaV07XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW3ZJZHggKiAzICsgMF0gPSBub3JtYWwueDtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbdklkeCAqIDMgKyAxXSA9IG5vcm1hbC55O1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1t2SWR4ICogMyArIDJdID0gbm9ybWFsLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWVzaC5zZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQsIG5vcm1hbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Jc0xpbmVFbGVtZW50KGxpbmU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBsaW5lLnN0YXJ0c1dpdGgoXCJsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Jc09iamVjdEVsZW1lbnQobGluZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmUuc3RhcnRzV2l0aChcIm9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzR3JvdXBFbGVtZW50KGxpbmU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBsaW5lLnN0YXJ0c1dpdGgoXCJnXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRaYnJ1c2hNUkdCKGxpbmU6IHN0cmluZywgbm90UGFyc2U6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIWxpbmUuc3RhcnRzV2l0aChcIm1yZ2JcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoXCJtcmdiXCIsIFwiXCIpLnRyaW0oKTtcclxuICAgICAgICAvLyBpZiBpbmNsdWRlIHZlcnRleCBjb2xvciAsIG5vdCBsb2FkIG1yZ2IgYW55bW9yZVxyXG4gICAgICAgIGlmIChub3RQYXJzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1thLXowLTldL2c7XHJcbiAgICAgICAgY29uc3QgcmVnQXJyYXkgPSBsaW5lLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICBpZiAoIXJlZ0FycmF5IHx8IHJlZ0FycmF5Lmxlbmd0aCAlIDggIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJheTogQ29sb3I0W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByZWdJbmRleCA9IDA7IHJlZ0luZGV4IDwgcmVnQXJyYXkubGVuZ3RoIC8gODsgcmVnSW5kZXgrKykge1xyXG4gICAgICAgICAgICAvL2VhY2ggaXRlbSBpcyBNTVJSR0dCQiwgbSBpcyBtYXRlcmlhbCBpbmRleFxyXG4gICAgICAgICAgICAvLyBjb25zdCBtID0gcmVnQXJyYXlbcmVnSW5kZXggKiA4ICsgMF0gKyByZWdBcnJheVtyZWdJbmRleCAqIDggKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgciA9IHJlZ0FycmF5W3JlZ0luZGV4ICogOCArIDJdICsgcmVnQXJyYXlbcmVnSW5kZXggKiA4ICsgM107XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSByZWdBcnJheVtyZWdJbmRleCAqIDggKyA0XSArIHJlZ0FycmF5W3JlZ0luZGV4ICogOCArIDVdO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gcmVnQXJyYXlbcmVnSW5kZXggKiA4ICsgNl0gKyByZWdBcnJheVtyZWdJbmRleCAqIDggKyA3XTtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChuZXcgQ29sb3I0KHBhcnNlSW50KHIsIDE2KSAvIDI1NSwgcGFyc2VJbnQoZywgMTYpIC8gMjU1LCBwYXJzZUludChiLCAxNikgLyAyNTUsIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdXNlZCB0byBwYXJzZSBhbiBPQkogc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gbWVzaGVzTmFtZXMgZGVmaW5lcyB0aGUgbGlzdCBvZiBtZXNoZXMgdG8gbG9hZCAoYWxsIGlmIG5vdCBkZWZpbmVkKVxyXG4gICAgICogQHBhcmFtIGRhdGEgZGVmaW5lcyB0aGUgT0JKIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGhvc3Rpbmcgc2NlbmVcclxuICAgICAqIEBwYXJhbSBhc3NldENvbnRhaW5lciBkZWZpbmVzIHRoZSBhc3NldCBjb250YWluZXIgdG8gbG9hZCBkYXRhIGluXHJcbiAgICAgKiBAcGFyYW0gb25GaWxlVG9Mb2FkRm91bmQgZGVmaW5lcyBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgaWYgYSBNVEwgZmlsZSBpcyBmb3VuZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFyc2UobWVzaGVzTmFtZXM6IGFueSwgZGF0YTogc3RyaW5nLCBzY2VuZTogU2NlbmUsIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sIG9uRmlsZVRvTG9hZEZvdW5kOiAoZmlsZVRvTG9hZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgLy9Nb3ZlIFNhbnRpdGl6ZSBoZXJlIHRvIGZvcmJpZCBkZWxldGUgemJydXNoIGRhdGFcclxuICAgICAgICAvLyBTYW5pdGl6ZSBkYXRhXHJcbiAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvI01SR0IvZywgXCJtcmdiXCIpO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyMuKiQvZ20sIFwiXCIpLnRyaW0oKTtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMudXNlTGVnYWN5QmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHVzaFRyaWFuZ2xlID0gKGZhY2VzLCBmYWNlSW5kZXgpID0+IHRoaXMuX3RyaWFuZ2xlcy5wdXNoKGZhY2VzWzBdLCBmYWNlc1tmYWNlSW5kZXhdLCBmYWNlc1tmYWNlSW5kZXggKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRlZG5lc3NTaWduID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3B1c2hUcmlhbmdsZSA9IChmYWNlcywgZmFjZUluZGV4KSA9PiB0aGlzLl90cmlhbmdsZXMucHVzaChmYWNlc1swXSwgZmFjZXNbZmFjZUluZGV4ICsgMV0sIGZhY2VzW2ZhY2VJbmRleF0pO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kZWRuZXNzU2lnbiA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcHVzaFRyaWFuZ2xlID0gKGZhY2VzLCBmYWNlSW5kZXgpID0+IHRoaXMuX3RyaWFuZ2xlcy5wdXNoKGZhY2VzWzBdLCBmYWNlc1tmYWNlSW5kZXhdLCBmYWNlc1tmYWNlSW5kZXggKyAxXSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRlZG5lc3NTaWduID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTcGxpdCB0aGUgZmlsZSBpbnRvIGxpbmVzXHJcbiAgICAgICAgLy8gUHJlcHJvY2VzcyBsaW5lIGRhdGFcclxuICAgICAgICBjb25zdCBsaW5lc09CSiA9IGRhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgY29uc3QgbGluZUxpbmVzOiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGluZUxpbmVzLnB1c2goY3VycmVudEdyb3VwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc09CSi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNPQkpbaV0udHJpbSgpLnJlcGxhY2UoL1xcc1xccy9nLCBcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBDb21tZW50IG9yIG5ld0xpbmVcclxuICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID09PSAwIHx8IGxpbmUuY2hhckF0KDApID09PSBcIiNcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChTb2xpZFBhcnNlci5fSXNHcm91cEVsZW1lbnQobGluZSkgfHwgU29saWRQYXJzZXIuX0lzT2JqZWN0RWxlbWVudChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEdyb3VwID0gW107XHJcbiAgICAgICAgICAgICAgICBsaW5lTGluZXMucHVzaChjdXJyZW50R3JvdXApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoU29saWRQYXJzZXIuX0lzTGluZUVsZW1lbnQobGluZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVWYWx1ZXMgPSBsaW5lLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBsaW5lIGVsZW1lbnRzIHdpdGggdHdvIHZlcnRpY2VzIG9ubHlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZVZhbHVlcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXAucHVzaChgbCAke2xpbmVWYWx1ZXNbaV19ICR7bGluZVZhbHVlc1tpICsgMV19YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXAucHVzaChsaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBsaW5lTGluZXMuZmxhdCgpO1xyXG4gICAgICAgIC8vIExvb2sgYXQgZWFjaCBsaW5lXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV0udHJpbSgpLnJlcGxhY2UoL1xcc1xccy9nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgICAgIC8vIENvbW1lbnQgb3IgbmV3TGluZVxyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDAgfHwgbGluZS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChTb2xpZFBhcnNlci5WZXJ0ZXhQYXR0ZXJuLnRlc3QobGluZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vR2V0IGluZm9ybWF0aW9uIGFib3V0IG9uZSBwb3NpdGlvbiBwb3NzaWJsZSBmb3IgdGhlIHZlcnRpY2VzXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsaW5lLm1hdGNoKC9bXiBdKy9nKSE7IC8vIG1hdGNoIHdpbGwgcmV0dXJuIG5vbi1udWxsIGR1ZSB0byBwYXNzaW5nIHJlZ2V4IHBhdHRlcm5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBWYWx1ZSBvZiByZXN1bHQgd2l0aCBsaW5lOiBcInYgMS4wIDIuMCAzLjBcIlxyXG4gICAgICAgICAgICAgICAgLy8gW1widlwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgVmVjdG9yMyB3aXRoIHRoZSBwb3NpdGlvbiB4LCB5LCB6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnMucHVzaChuZXcgVmVjdG9yMyhwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLmltcG9ydFZlcnRleENvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID49IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHBhcnNlRmxvYXQocmVzdWx0WzRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZyA9IHBhcnNlRmxvYXQocmVzdWx0WzVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IHBhcnNlRmxvYXQocmVzdWx0WzZdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbG9ycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvbG9yNChyID4gMSA/IHIgLyAyNTUgOiByLCBnID4gMSA/IGcgLyAyNTUgOiBnLCBiID4gMSA/IGIgLyAyNTUgOiBiLCByZXN1bHQubGVuZ3RoID09PSA3IHx8IHJlc3VsdFs3XSA9PT0gdW5kZWZpbmVkID8gMSA6IHBhcnNlRmxvYXQocmVzdWx0WzddKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtYXliZSBwdXNoIE5VTEwgYW5kIGlmIGFsbCBhcmUgTlVMTCB0byBza2lwIChhbmQgcmVtb3ZlIGdyYXlDb2xvciB2YXIpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaCh0aGlzLl9ncmF5Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuTm9ybWFsUGF0dGVybi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBWZWN0b3IzIHdpdGggdGhlIG5vcm1hbHMgeCwgeSwgelxyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHRcclxuICAgICAgICAgICAgICAgIC8vIFtcInZuIDEuMCAyLjAgMy4wXCIsIFwiMS4wXCIsIFwiMi4wXCIsIFwiMy4wXCJdXHJcbiAgICAgICAgICAgICAgICAvL0FkZCB0aGUgVmVjdG9yIGluIHRoZSBsaXN0IG9mIG5vcm1hbHNcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vcm1hbHMucHVzaChuZXcgVmVjdG9yMyhwYXJzZUZsb2F0KHJlc3VsdFsxXSksIHBhcnNlRmxvYXQocmVzdWx0WzJdKSwgcGFyc2VGbG9hdChyZXN1bHRbM10pKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLlVWUGF0dGVybi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBWZWN0b3IyIHdpdGggdGhlIG5vcm1hbHMgdSwgdlxyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHRcclxuICAgICAgICAgICAgICAgIC8vIFtcInZ0IDAuMSAwLjIgMC4zXCIsIFwiMC4xXCIsIFwiMC4yXCJdXHJcbiAgICAgICAgICAgICAgICAvL0FkZCB0aGUgVmVjdG9yIGluIHRoZSBsaXN0IG9mIHV2c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXZzLnB1c2gobmV3IFZlY3RvcjIocGFyc2VGbG9hdChyZXN1bHRbMV0pICogdGhpcy5fbG9hZGluZ09wdGlvbnMuVVZTY2FsaW5nLngsIHBhcnNlRmxvYXQocmVzdWx0WzJdKSAqIHRoaXMuX2xvYWRpbmdPcHRpb25zLlVWU2NhbGluZy55KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZGVudGlmeSBwYXR0ZXJucyBvZiBmYWNlc1xyXG4gICAgICAgICAgICAgICAgLy9GYWNlIGNvdWxkIGJlIGRlZmluZWQgaW4gZGlmZmVyZW50IHR5cGUgb2YgcGF0dGVyblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5GYWNlUGF0dGVybjMuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0OlxyXG4gICAgICAgICAgICAgICAgLy9bXCJmIDEvMS8xIDIvMi8yIDMvMy8zXCIsIFwiMS8xLzEgMi8yLzIgMy8zLzNcIi4uLl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjMoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjEvMS8xXCIsIFwiMi8yLzJcIiwgXCIzLzMvM1wiXVxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkZhY2VQYXR0ZXJuNC5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHQ6XHJcbiAgICAgICAgICAgICAgICAvL1tcImYgMS8vMSAyLy8yIDMvLzNcIiwgXCIxLy8xIDIvLzIgMy8vM1wiLi4uXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuNChcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiMS8vMVwiLCBcIjIvLzJcIiwgXCIzLy8zXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuRmFjZVBhdHRlcm41LmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdDpcclxuICAgICAgICAgICAgICAgIC8vW1wiZiAtMS8tMS8tMSAtMi8tMi8tMiAtMy8tMy8tM1wiLCBcIi0xLy0xLy0xIC0yLy0yLy0yIC0zLy0zLy0zXCIuLi5dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm41KFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCItMS8tMS8tMVwiLCBcIi0yLy0yLy0yXCIsIFwiLTMvLTMvLTNcIl1cclxuICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5GYWNlUGF0dGVybjIuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0OlxyXG4gICAgICAgICAgICAgICAgLy9bXCJmIDEvMSAyLzIgMy8zXCIsIFwiMS8xIDIvMiAzLzNcIi4uLl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjIoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjEvMVwiLCBcIjIvMlwiLCBcIjMvM1wiXVxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkZhY2VQYXR0ZXJuMS5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHRcclxuICAgICAgICAgICAgICAgIC8vW1wiZiAxIDIgM1wiLCBcIjEgMiAzXCIuLi5dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4xKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxXCIsIFwiMlwiLCBcIjNcIl1cclxuICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBhIG1lc2ggb3IgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHRpbWUgdGhpcyBrZXl3b3JkIGlzIGFuYWx5emVkLCBjcmVhdGUgYSBuZXcgT2JqZWN0IHdpdGggYWxsIGRhdGEgZm9yIGNyZWF0aW5nIGEgYmFieWxvbk1lc2hcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuTGluZVBhdHRlcm4xLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy9bXCJsIDEgMlwiXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMShcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiMVwiLCBcIjJcIl1cclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzTGluZURhdGEgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBhIG1lc2ggb3IgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHRpbWUgdGhpcyBrZXl3b3JkIGlzIGFuYWx5emVkLCBjcmVhdGUgYSBuZXcgT2JqZWN0IHdpdGggYWxsIGRhdGEgZm9yIGNyZWF0aW5nIGEgYmFieWxvbk1lc2hcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuTGluZVBhdHRlcm4yLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy9bXCJsIDEvMSAyLzJcIl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjIoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjEvMVwiLCBcIjIvMlwiXVxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNMaW5lRGF0YSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGEgbWVzaCBvciBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgIC8vIEVhY2ggdGltZSB0aGlzIGtleXdvcmQgaXMgYW5hbHl6ZWQsIGNyZWF0ZSBhIG5ldyBPYmplY3Qgd2l0aCBhbGwgZGF0YSBmb3IgY3JlYXRpbmcgYSBiYWJ5bG9uTWVzaFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5fR2V0WmJydXNoTVJHQihsaW5lLCAhdGhpcy5fbG9hZGluZ09wdGlvbnMuaW1wb3J0VmVydGV4Q29sb3JzKSkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHRDb2xvcnMucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuTGluZVBhdHRlcm4zLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy9bXCJsIDEvMS8xIDIvMi8yXCJdXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4zKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxLzEvMVwiLCBcIjIvMi8yXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0xpbmVEYXRhID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgYSBtZXNoIG9yIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHRoaXMga2V5d29yZCBpcyBhbmFseXplZCwgY3JlYXRlIGEgbmV3IE9iamVjdCB3aXRoIGFsbCBkYXRhIGZvciBjcmVhdGluZyBhIGJhYnlsb25NZXNoXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU29saWRQYXJzZXIuR3JvdXBEZXNjcmlwdG9yLnRlc3QobGluZSkgfHwgU29saWRQYXJzZXIuT2JqZWN0RGVzY3JpcHRvci50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbWVzaCBjb3JyZXNwb25kaW5nIHRvIHRoZSBuYW1lIG9mIHRoZSBncm91cC5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRpb24gb2YgdGhlIG1lc2hcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iak1lc2g6IE1lc2hPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbGluZS5zdWJzdHJpbmcoMikudHJpbSgpLCAvL1NldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdXZzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbE5hbWU6IHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmosXHJcbiAgICAgICAgICAgICAgICAgICAgaXNPYmplY3Q6IFNvbGlkUGFyc2VyLk9iamVjdERlc2NyaXB0b3IudGVzdChsaW5lKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRQcmV2aW91c09iak1lc2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1B1c2ggdGhlIGxhc3QgbWVzaCBjcmVhdGVkIHdpdGggb25seSB0aGUgbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzaGVzRnJvbU9iai5wdXNoKG9iak1lc2gpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoaXMgdmFyaWFibGUgdG8gaW5kaWNhdGUgdGhhdCBub3cgbWVzaGVzRnJvbU9iaiBoYXMgb2JqZWN0cyBkZWZpbmVkIGluc2lkZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzTWVzaGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyc3RNYXRlcmlhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmNyZW1lbnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgLy9LZXl3b3JkIGZvciBhcHBseWluZyBhIG1hdGVyaWFsXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU29saWRQYXJzZXIuVXNlTXRsRGVzY3JpcHRvci50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICAvL0dldCB0aGUgbmFtZSBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmogPSBsaW5lLnN1YnN0cmluZyg3KS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZiB0aGlzIG5ldyBtYXRlcmlhbCBpcyBpbiB0aGUgc2FtZSBtZXNoXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0ZpcnN0TWF0ZXJpYWwgfHwgIXRoaXMuX2hhc01lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGUgcHJldmlvdXMgbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFByZXZpb3VzT2JqTWVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgbmV3IG1lc2hcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmpNZXNoOiBNZXNoT2JqZWN0ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgb2JqIG1lc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogKHRoaXMuX29iak1lc2hOYW1lIHx8IFwibWVzaFwiKSArIFwiX21tXCIgKyB0aGlzLl9pbmNyZW1lbnQudG9TdHJpbmcoKSwgLy9TZXQgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgb2JqIG1lc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXZzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxOYW1lOiB0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPYmplY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luY3JlbWVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbWVzaGVzIGFyZSBhbHJlYWR5IGRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNoZXNGcm9tT2JqLnB1c2gob2JqTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzTWVzaGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBtYXRlcmlhbCBuYW1lIGlmIHRoZSBwcmV2aW91cyBsaW5lIGRlZmluZSBhIG1lc2hcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzTWVzaGVzICYmIHRoaXMuX2lzRmlyc3RNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBtYXRlcmlhbCBuYW1lIHRvIHRoZSBwcmV2aW91cyBtZXNoICgxIG1hdGVyaWFsIHBlciBtZXNoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc2hlc0Zyb21PYmpbdGhpcy5fbWVzaGVzRnJvbU9iai5sZW5ndGggLSAxXS5tYXRlcmlhbE5hbWUgPSB0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyc3RNYXRlcmlhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gS2V5d29yZCBmb3IgbG9hZGluZyB0aGUgbXRsIGZpbGVcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChTb2xpZFBhcnNlci5NdGxMaWJHcm91cERlc2NyaXB0b3IudGVzdChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuYW1lIG9mIG10bCBmaWxlXHJcbiAgICAgICAgICAgICAgICBvbkZpbGVUb0xvYWRGb3VuZChsaW5lLnN1YnN0cmluZyg3KS50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHNtb290aGluZ1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNvbGlkUGFyc2VyLlNtb290aERlc2NyaXB0b3IudGVzdChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc21vb3RoIHNoYWRpbmcgPT4gYXBwbHkgc21vb3RoaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBUb2RheSBJIGRvbid0IGtub3cgaXQgd29yayB3aXRoIGJhYnlsb24gYW5kIHdpdGggb2JqLlxyXG4gICAgICAgICAgICAgICAgLy8gV2l0aCB0aGUgb2JqIGZpbGUgIGFuIGludGVnZXIgaXMgc2V0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGFub3RoZXIgcG9zc2liaWxpdHlcclxuICAgICAgICAgICAgICAgIExvZ2dlci5Mb2coXCJVbmhhbmRsZWQgZXhwcmVzc2lvbiBhdCBsaW5lIDogXCIgKyBsaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBdCB0aGUgZW5kIG9mIHRoZSBmaWxlLCBhZGQgdGhlIGxhc3QgbWVzaCBpbnRvIHRoZSBtZXNoZXNGcm9tT2JqIGFycmF5XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc01lc2hlcykge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGRhdGEgZm9yIHRoZSBsYXN0IG1lc2hcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2ggPSB0aGlzLl9tZXNoZXNGcm9tT2JqW3RoaXMuX21lc2hlc0Zyb21PYmoubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMudXNlTGVnYWN5QmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vUmV2ZXJzZSBpbmRpY2VzIGZvciBkaXNwbGF5aW5nIGZhY2VzIGluIHRoZSBnb29kIHNlbnNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vR2V0IHRoZSBnb29kIGFycmF5XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcERhdGEoKTtcclxuICAgICAgICAgICAgLy9TZXQgYXJyYXlcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guaW5kaWNlcyA9IHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5wb3NpdGlvbnMgPSB0aGlzLl91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5ub3JtYWxzID0gdGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLnV2cyA9IHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLmNvbG9ycyA9IHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guaGFzTGluZXMgPSB0aGlzLl9oYXNMaW5lRGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFueSBvIG9yIGcga2V5d29yZCBub3QgZm91bmQsIGNyZWF0ZSBhIG1lc2ggd2l0aCBhIHJhbmRvbSBpZFxyXG4gICAgICAgIGlmICghdGhpcy5faGFzTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdNYXRlcmlhbDogTnVsbGFibGU8U3RhbmRhcmRNYXRlcmlhbD4gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5kaWNlc0ZvckJhYnlsb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMudXNlTGVnYWN5QmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnNlIHRhYiBvZiBpbmRpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kaWNlc0ZvckJhYnlsb24ucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vR2V0IHBvc2l0aW9ucyBub3JtYWxzIHV2c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwRGF0YSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgbm8gaW5kaWNlcyBpbiB0aGUgZmlsZS4gV2Ugd2lsbCBoYXZlIHRvIHN3aXRjaCB0byBwb2ludCBjbG91ZCByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHRoaXMuX3Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb24ucHVzaChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm9ybWFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vcm1hbCBvZiB0aGlzLl9ub3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLnB1c2gobm9ybWFsLngsIG5vcm1hbC55LCBub3JtYWwueik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl91dnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB1diBvZiB0aGlzLl91dnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uLnB1c2godXYueCwgdXYueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9leHRDb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb2xvciBvZiB0aGlzLl9leHRDb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbi5wdXNoKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIGNvbG9yLmEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbG9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb2xvciBvZiB0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ucHVzaChjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBtYXRlcmlhbCB3aXRoIHBvaW50IGNsb3VkIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChHZW9tZXRyeS5SYW5kb21JZCgpLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld01hdGVyaWFsLnBvaW50c0Nsb3VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxOYW1lRnJvbU9iaiA9IG5ld01hdGVyaWFsLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbm9ybWFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TZXQgZGF0YSBmb3Igb25lIG1lc2hcclxuICAgICAgICAgICAgdGhpcy5fbWVzaGVzRnJvbU9iai5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IEdlb21ldHJ5LlJhbmRvbUlkKCksXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uczogdGhpcy5fdW53cmFwcGVkUG9zaXRpb25zRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIGNvbG9yczogdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIG5vcm1hbHM6IHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLFxyXG4gICAgICAgICAgICAgICAgdXZzOiB0aGlzLl91bndyYXBwZWRVVkZvckJhYnlsb24sXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbE5hbWU6IHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmosXHJcbiAgICAgICAgICAgICAgICBkaXJlY3RNYXRlcmlhbDogbmV3TWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICBpc09iamVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhc0xpbmVzOiB0aGlzLl9oYXNMaW5lRGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1NldCBkYXRhIGZvciBlYWNoIG1lc2hcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX21lc2hlc0Zyb21PYmoubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgLy9jaGVjayBtZXNoZXNOYW1lcyAoc3RsRmlsZUxvYWRlcilcclxuICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzICYmIHRoaXMuX21lc2hlc0Zyb21PYmpbal0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzTmFtZXMuaW5kZXhPZih0aGlzLl9tZXNoZXNGcm9tT2JqW2pdLm5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXNoZXNGcm9tT2JqW2pdLm5hbWUgIT09IG1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9HZXQgdGhlIGN1cnJlbnQgbWVzaFxyXG4gICAgICAgICAgICAvL1NldCB0aGUgZGF0YSB3aXRoIFZlcnRleEJ1ZmZlciBmb3IgZWFjaCBtZXNoXHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoID0gdGhpcy5fbWVzaGVzRnJvbU9ialtqXTtcclxuICAgICAgICAgICAgLy9DcmVhdGUgYSBNZXNoIHdpdGggdGhlIG5hbWUgb2YgdGhlIG9iaiBtZXNoXHJcblxyXG4gICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFhc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBuZXcgTWVzaCh0aGlzLl9tZXNoZXNGcm9tT2JqW2pdLm5hbWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgYmFieWxvbk1lc2guX3BhcmVudENvbnRhaW5lciA9IGFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLl9iYWJ5bG9uTWVzaCA9IGJhYnlsb25NZXNoO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZ3JvdXAgbWVzaCwgaXQgc2hvdWxkIGhhdmUgYW4gb2JqZWN0IG1lc2ggYXMgYSBwYXJlbnQuIFNvIGxvb2sgZm9yIHRoZSBmaXJzdCBvYmplY3QgbWVzaCB0aGF0IGFwcGVhcnMgYmVmb3JlIGl0LlxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hhbmRsZWRNZXNoLmlzT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gaiAtIDE7IGsgPj0gMDsgLS1rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21lc2hlc0Zyb21PYmpba10uaXNPYmplY3QgJiYgdGhpcy5fbWVzaGVzRnJvbU9ialtrXS5fYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk1lc2gucGFyZW50ID0gdGhpcy5fbWVzaGVzRnJvbU9ialtrXS5fYmFieWxvbk1lc2ghO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vUHVzaCB0aGUgbmFtZSBvZiB0aGUgbWF0ZXJpYWwgdG8gYW4gYXJyYXlcclxuICAgICAgICAgICAgLy9UaGlzIGlzIGluZGlzcGVuc2FibGUgZm9yIHRoZSBpbXBvcnRNZXNoIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsVG9Vc2UucHVzaCh0aGlzLl9tZXNoZXNGcm9tT2JqW2pdLm1hdGVyaWFsTmFtZSk7XHJcbiAgICAgICAgICAgIC8vSWYgdGhlIG1lc2ggaXMgYSBsaW5lIG1lc2hcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZWRNZXNoLmhhc0xpbmVzKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5faW50ZXJuYWxNZXRhZGF0YSA/Pz0ge307XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5faW50ZXJuYWxNZXRhZGF0YVtcIl9pc0xpbmVcIl0gPSB0cnVlOyAvL3RoaXMgaXMgYSBsaW5lIG1lc2hcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZWRNZXNoLnBvc2l0aW9ucz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL1B1c2ggdGhlIG1lc2ggaW50byBhbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvbk1lc2hlc0FycmF5LnB1c2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGE6IFZlcnRleERhdGEgPSBuZXcgVmVydGV4RGF0YSgpOyAvL1RoZSBjb250YWluZXIgZm9yIHRoZSB2YWx1ZXNcclxuICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoZSBiYWJ5bG9uTWVzaFxyXG4gICAgICAgICAgICB2ZXJ0ZXhEYXRhLmluZGljZXMgPSB0aGlzLl9oYW5kbGVkTWVzaC5pbmRpY2VzO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhEYXRhLnBvc2l0aW9ucyA9IHRoaXMuX2hhbmRsZWRNZXNoLnBvc2l0aW9ucztcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLmNvbXB1dGVOb3JtYWxzIHx8ICF0aGlzLl9oYW5kbGVkTWVzaC5ub3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21wdXRlIG5vcm1hbHMgaWYgcmVxdWVzdGVkIG9yIGlmIG5vcm1hbHMgYXJlIG5vdCBkZWZpbmVkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxzOiBBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICAgICAgICAgIFZlcnRleERhdGEuQ29tcHV0ZU5vcm1hbHModGhpcy5faGFuZGxlZE1lc2gucG9zaXRpb25zLCB0aGlzLl9oYW5kbGVkTWVzaC5pbmRpY2VzLCBub3JtYWxzKTtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEubm9ybWFscyA9IG5vcm1hbHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhLm5vcm1hbHMgPSB0aGlzLl9oYW5kbGVkTWVzaC5ub3JtYWxzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVkTWVzaC51dnMpIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEudXZzID0gdGhpcy5faGFuZGxlZE1lc2gudXZzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVkTWVzaC5jb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEuY29sb3JzID0gdGhpcy5faGFuZGxlZE1lc2guY29sb3JzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZyb20gdGhlIFZlcnRleEJ1ZmZlciB0byB0aGUgY3VycmVudCBNZXNoXHJcbiAgICAgICAgICAgIHZlcnRleERhdGEuYXBwbHlUb01lc2goYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMuaW52ZXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2guc2NhbGluZy55ICo9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5vcHRpbWl6ZU5vcm1hbHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGltaXplTm9ybWFscyhiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vUHVzaCB0aGUgbWVzaCBpbnRvIGFuIGFycmF5XHJcbiAgICAgICAgICAgIHRoaXMuX2JhYnlsb25NZXNoZXNBcnJheS5wdXNoKGJhYnlsb25NZXNoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVkTWVzaC5kaXJlY3RNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbk1lc2gubWF0ZXJpYWwgPSB0aGlzLl9oYW5kbGVkTWVzaC5kaXJlY3RNYXRlcmlhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=