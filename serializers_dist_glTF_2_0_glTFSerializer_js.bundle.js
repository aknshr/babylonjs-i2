"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["serializers_dist_glTF_2_0_glTFSerializer_js"],{

/***/ "../core/dist/Helpers/materialConversionHelper.js":
/*!********************************************************!*\
  !*** ../core/dist/Helpers/materialConversionHelper.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpecularPowerToRoughness: () => (/* binding */ SpecularPowerToRoughness)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Given the control points, solve for x based on a given t for a cubic bezier curve
 * @param t a value between 0 and 1
 * @param p0 first control point
 * @param p1 second control point
 * @param p2 third control point
 * @param p3 fourth control point
 * @returns number result of cubic bezier curve at the specified t
 */
function CubicBezierCurve(t, p0, p1, p2, p3) {
    return (1 - t) * (1 - t) * (1 - t) * p0 + 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t * p3;
}
/**
 * Evaluates a specified specular power value to determine the appropriate roughness value,
 * based on a pre-defined cubic bezier curve with specular on the abscissa axis (x-axis)
 * and roughness on the ordinant axis (y-axis)
 * @param specularPower specular power of standard material
 * @param p0 first control point
 * @param p1 second control point
 * @param p2 third control point
 * @param p3 fourth control point
 * @returns Number representing the roughness value
 */
function SpecularPowerToRoughness(specularPower, p0 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 1), p1 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0.1), p2 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0.1), p3 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(1300, 0.1)) {
    // Given P0.x = 0, P1.x = 0, P2.x = 0
    //   x = t * t * t * P3.x
    //   t = (x / P3.x)^(1/3)
    const t = Math.pow(specularPower / p3.x, 0.333333);
    return CubicBezierCurve(t, p0.y, p1.y, p2.y, p3.y);
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

/***/ "../core/dist/Materials/GreasedLine/greasedLineMaterialDefaults.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Materials/GreasedLine/greasedLineMaterialDefaults.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreasedLineMaterialDefaults: () => (/* binding */ GreasedLineMaterialDefaults)
/* harmony export */ });
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Maths/math.color */ "../core/dist/Maths/math.color.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Default settings for GreasedLine materials
 */
class GreasedLineMaterialDefaults {
}
/**
 * Default line color for newly created lines
 */
GreasedLineMaterialDefaults.DEFAULT_COLOR = _Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
/**
 * Default line width when sizeAttenuation is true
 */
GreasedLineMaterialDefaults.DEFAULT_WIDTH_ATTENUATED = 1;
/**
 * Defaule line width
 */
GreasedLineMaterialDefaults.DEFAULT_WIDTH = 0.1;


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

/***/ "../core/dist/Materials/GreasedLine/greasedLinePluginMaterial.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Materials/GreasedLine/greasedLinePluginMaterial.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreasedLinePluginMaterial: () => (/* binding */ GreasedLinePluginMaterial),
/* harmony export */   MaterialGreasedLineDefines: () => (/* binding */ MaterialGreasedLineDefines)
/* harmony export */ });
/* harmony import */ var _Textures_rawTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Textures/rawTexture */ "../core/dist/Materials/Textures/rawTexture.js");
/* harmony import */ var _materialPluginBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../materialPluginBase */ "../core/dist/Materials/materialPluginBase.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _materialDefines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../materialDefines */ "../core/dist/Materials/materialDefines.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./greasedLineMaterialDefaults */ "../core/dist/Materials/GreasedLine/greasedLineMaterialDefaults.js");
/* harmony import */ var _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Misc/greasedLineTools */ "../core/dist/Misc/greasedLineTools.js");
/* harmony import */ var _greasedLinePluginMaterialShadersGLSL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./greasedLinePluginMaterialShadersGLSL */ "../core/dist/Materials/GreasedLine/greasedLinePluginMaterialShadersGLSL.js");
/* harmony import */ var _greasedLinePluginMaterialShadersWGSL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./greasedLinePluginMaterialShadersWGSL */ "../core/dist/Materials/GreasedLine/greasedLinePluginMaterialShadersWGSL.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










/**
 * @internal
 */
class MaterialGreasedLineDefines extends _materialDefines__WEBPACK_IMPORTED_MODULE_3__.MaterialDefines {
    constructor() {
        super(...arguments);
        /**
         * The material has a color option specified
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_HAS_COLOR = false;
        /**
         * The material's size attenuation optiom
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_SIZE_ATTENUATION = false;
        /**
         * The type of color distribution is set to line this value equals to true.
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = false;
        /**
         * True if scene is in right handed coordinate system.
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = false;
        /**
         * True if the line is in camera facing mode
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_CAMERA_FACING = true;
        /**
         * True if the line uses offsets
         */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_USE_OFFSETS = false;
    }
}
/**
 * GreasedLinePluginMaterial for GreasedLineMesh/GreasedLineRibbonMesh.
 * Use the GreasedLineBuilder.CreateGreasedLineMaterial function to create and instance of this class.
 */
class GreasedLinePluginMaterial extends _materialPluginBase__WEBPACK_IMPORTED_MODULE_1__.MaterialPluginBase {
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language
     * @param _shaderLanguage The shader language to use
     * @returns true if the plugin is compatible with the shader language. Return always true since both GLSL and WGSL are supported
     */
    isCompatible(_shaderLanguage) {
        return true;
    }
    /**
     * Creates a new instance of the GreasedLinePluginMaterial
     * @param material Base material for the plugin
     * @param scene The scene
     * @param options Plugin options
     */
    constructor(material, scene, options) {
        options = options || {
            color: _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_5__.GreasedLineMaterialDefaults.DEFAULT_COLOR,
        };
        const defines = new MaterialGreasedLineDefines();
        defines.GREASED_LINE_HAS_COLOR = !!options.color && !options.useColors;
        defines.GREASED_LINE_SIZE_ATTENUATION = options.sizeAttenuation ?? false;
        defines.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = options.colorDistributionType === 1 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_LINE */;
        defines.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (scene ?? material.getScene()).useRightHandedSystem;
        defines.GREASED_LINE_CAMERA_FACING = options.cameraFacing ?? true;
        super(material, GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME, 200, defines, true, true);
        /**
         * You can provide a colorsTexture to use instead of one generated from the 'colors' option
         */
        this.colorsTexture = null;
        this._forceGLSL = false;
        this._forceGLSL = options?.forceGLSL || GreasedLinePluginMaterial.ForceGLSL;
        this._scene = scene ?? material.getScene();
        this._engine = this._scene.getEngine();
        this._cameraFacing = options.cameraFacing ?? true;
        this.visibility = options.visibility ?? 1;
        this.useDash = options.useDash ?? false;
        this.dashRatio = options.dashRatio ?? 0.5;
        this.dashOffset = options.dashOffset ?? 0;
        this.width = options.width ? options.width : options.sizeAttenuation ? _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_5__.GreasedLineMaterialDefaults.DEFAULT_WIDTH_ATTENUATED : _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_5__.GreasedLineMaterialDefaults.DEFAULT_WIDTH;
        this._sizeAttenuation = options.sizeAttenuation ?? false;
        this.colorMode = options.colorMode ?? 0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */;
        this._color = options.color ?? null;
        this.useColors = options.useColors ?? false;
        this._colorsDistributionType = options.colorDistributionType ?? 0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */;
        this.colorsSampling = options.colorsSampling ?? _Textures_rawTexture__WEBPACK_IMPORTED_MODULE_0__.RawTexture.NEAREST_NEAREST;
        this._colors = options.colors ?? null;
        this.dashCount = options.dashCount ?? 1; // calculate the _dashArray value, call the setter
        this.resolution = options.resolution ?? new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector2(this._engine.getRenderWidth(), this._engine.getRenderHeight()); // calculate aspect call the setter
        if (options.colorsTexture) {
            this.colorsTexture = options.colorsTexture; // colorsTexture from options takes precedence
        }
        else {
            if (this._colors) {
                this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.CreateColorsTexture(`${material.name}-colors-texture`, this._colors, this.colorsSampling, this._scene);
            }
            else {
                this._color = this._color ?? _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_5__.GreasedLineMaterialDefaults.DEFAULT_COLOR;
                _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.PrepareEmptyColorsTexture(this._scene);
            }
        }
        this._engine.onDisposeObservable.add(() => {
            _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.DisposeEmptyColorsTexture();
        });
    }
    /**
     * Get the shader attributes
     * @param attributes array which will be filled with the attributes
     */
    getAttributes(attributes) {
        attributes.push("grl_offsets");
        attributes.push("grl_widths");
        attributes.push("grl_colorPointers");
        attributes.push("grl_counters");
        if (this._cameraFacing) {
            attributes.push("grl_previousAndSide");
            attributes.push("grl_nextAndCounters");
        }
        else {
            attributes.push("grl_slopes");
        }
    }
    /**
     * Get the shader samplers
     * @param samplers
     */
    getSamplers(samplers) {
        samplers.push("grl_colors");
    }
    /**
     * Get the shader textures
     * @param activeTextures array which will be filled with the textures
     */
    getActiveTextures(activeTextures) {
        if (this.colorsTexture) {
            activeTextures.push(this.colorsTexture);
        }
    }
    /**
     * Get the shader uniforms
     * @param shaderLanguage The shader language to use
     * @returns uniforms
     */
    getUniforms(shaderLanguage = 0 /* ShaderLanguage.GLSL */) {
        const ubo = [
            { name: "grl_singleColor", size: 3, type: "vec3" },
            { name: "grl_textureSize", size: 2, type: "vec2" },
            { name: "grl_dashOptions", size: 4, type: "vec4" },
            { name: "grl_colorMode_visibility_colorsWidth_useColors", size: 4, type: "vec4" },
        ];
        if (this._cameraFacing) {
            ubo.push({ name: "grl_projection", size: 16, type: "mat4" }, { name: "grl_aspect_resolution_lineWidth", size: 4, type: "vec4" });
        }
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */) {
            ubo.push({
                name: "viewProjection",
                size: 16,
                type: "mat4",
            });
        }
        return {
            ubo,
            vertex: this._cameraFacing && this._isGLSL(shaderLanguage)
                ? `
                    uniform vec4 grl_aspect_resolution_lineWidth;
                    uniform mat4 grl_projection;
    `
                : "",
            fragment: this._isGLSL(shaderLanguage)
                ? `
                    uniform vec4 grl_dashOptions;
                    uniform vec2 grl_textureSize;
                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;
                    uniform vec3 grl_singleColor;
    `
                : "",
        };
    }
    // only getter, it doesn't make sense to use this plugin on a mesh other than GreasedLineMesh
    // and it doesn't make sense to disable it on the mesh
    get isEnabled() {
        return true;
    }
    /**
     * Bind the uniform buffer
     * @param uniformBuffer
     */
    bindForSubMesh(uniformBuffer) {
        if (this._cameraFacing) {
            uniformBuffer.updateMatrix("grl_projection", this._scene.getProjectionMatrix());
            if (!this._isGLSL(this._material.shaderLanguage)) {
                uniformBuffer.updateMatrix("viewProjection", this._scene.getTransformMatrix());
            }
            const resolutionLineWidth = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector4[0];
            resolutionLineWidth.x = this._aspect;
            resolutionLineWidth.y = this._resolution.x;
            resolutionLineWidth.z = this._resolution.y;
            resolutionLineWidth.w = this.width;
            uniformBuffer.updateVector4("grl_aspect_resolution_lineWidth", resolutionLineWidth);
        }
        const dashOptions = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector4[0];
        dashOptions.x = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.BooleanToNumber(this.useDash);
        dashOptions.y = this._dashArray;
        dashOptions.z = this.dashOffset;
        dashOptions.w = this.dashRatio;
        uniformBuffer.updateVector4("grl_dashOptions", dashOptions);
        const colorModeVisibilityColorsWidthUseColors = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector4[1];
        colorModeVisibilityColorsWidthUseColors.x = this.colorMode;
        colorModeVisibilityColorsWidthUseColors.y = this.visibility;
        colorModeVisibilityColorsWidthUseColors.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0;
        colorModeVisibilityColorsWidthUseColors.w = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.BooleanToNumber(this.useColors);
        uniformBuffer.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", colorModeVisibilityColorsWidthUseColors);
        if (this._color) {
            uniformBuffer.updateColor3("grl_singleColor", this._color);
        }
        const texture = this.colorsTexture ?? _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_5__.GreasedLineMaterialDefaults.EmptyColorsTexture;
        uniformBuffer.setTexture("grl_colors", texture);
        uniformBuffer.updateFloat2("grl_textureSize", texture?.getSize().width ?? 1, texture?.getSize().height ?? 1);
    }
    /**
     * Prepare the defines
     * @param defines
     * @param _scene
     * @param mesh
     */
    prepareDefines(defines, _scene, mesh) {
        defines.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors;
        defines.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation;
        defines.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = this._colorsDistributionType === 1 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_LINE */;
        defines.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = _scene.useRightHandedSystem;
        defines.GREASED_LINE_CAMERA_FACING = this._cameraFacing;
        defines.GREASED_LINE_USE_OFFSETS = !!mesh.offsets;
    }
    /**
     * Get the class name
     * @returns class name
     */
    getClassName() {
        return GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME;
    }
    /**
     * Get shader code
     * @param shaderType vertex/fragment
     * @param shaderLanguage GLSL or WGSL
     * @returns shader code
     */
    getCustomCode(shaderType, shaderLanguage = 0 /* ShaderLanguage.GLSL */) {
        if (this._isGLSL(shaderLanguage)) {
            return (0,_greasedLinePluginMaterialShadersGLSL__WEBPACK_IMPORTED_MODULE_7__.GetCustomCode)(shaderType, this._cameraFacing);
        }
        return (0,_greasedLinePluginMaterialShadersWGSL__WEBPACK_IMPORTED_MODULE_8__.GetCustomCode)(shaderType, this._cameraFacing);
    }
    /**
     * Disposes the plugin material.
     */
    dispose() {
        this.colorsTexture?.dispose();
        super.dispose();
    }
    /**
     * Returns the colors used to colorize the line
     */
    get colors() {
        return this._colors;
    }
    /**
     * Sets the colors used to colorize the line
     */
    set colors(value) {
        this.setColors(value);
    }
    /**
     * Creates or updates the colors texture
     * @param colors color table RGBA
     * @param lazy if lazy, the colors are not updated
     * @param forceNewTexture force creation of a new texture
     */
    setColors(colors, lazy = false, forceNewTexture = false) {
        const origColorsCount = this._colors?.length ?? 0;
        this._colors = colors;
        if (colors === null || colors.length === 0) {
            this.colorsTexture?.dispose();
            return;
        }
        if (lazy && !forceNewTexture) {
            return;
        }
        if (this.colorsTexture && origColorsCount === colors.length && !forceNewTexture) {
            const colorArray = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.Color3toRGBAUint8(colors);
            this.colorsTexture.update(colorArray);
        }
        else {
            this.colorsTexture?.dispose();
            this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.CreateColorsTexture(`${this._material.name}-colors-texture`, colors, this.colorsSampling, this._scene);
        }
    }
    /**
     * Updates the material. Use when material created in lazy mode.
     */
    updateLazy() {
        if (this._colors) {
            this.setColors(this._colors, false, true);
        }
    }
    /**
     * Gets the number of dashes in the line
     */
    get dashCount() {
        return this._dashCount;
    }
    /**
     * Sets the number of dashes in the line
     * @param value dash
     */
    set dashCount(value) {
        this._dashCount = value;
        this._dashArray = 1 / value;
    }
    /**
     * If set to true the line will be rendered always with the same width regardless how far it is located from the camera.
     * Not supported for non camera facing lines.
     */
    get sizeAttenuation() {
        return this._sizeAttenuation;
    }
    /**
     * Turn on/off size attenuation of the width option and widths array.
     * Not supported for non camera facing lines.
     * @param value If set to true the line will be rendered always with the same width regardless how far it is located from the camera.
     */
    set sizeAttenuation(value) {
        this._sizeAttenuation = value;
        this.markAllDefinesAsDirty();
    }
    /**
     * Gets the color of the line
     */
    get color() {
        return this._color;
    }
    /**
     * Sets the color of the line
     * @param value Color3 or null to clear the color. You need to clear the color if you use colors and useColors = true
     */
    set color(value) {
        this.setColor(value);
    }
    /**
     * Sets the color of the line. If set the whole line will be mixed with this color according to the colorMode option.
     * @param value color
     * @param doNotMarkDirty if true, the material will not be marked as dirty
     */
    setColor(value, doNotMarkDirty = false) {
        if ((this._color === null && value !== null) || (this._color !== null && value === null)) {
            this._color = value;
            if (!doNotMarkDirty) {
                this.markAllDefinesAsDirty();
            }
        }
        else {
            this._color = value;
        }
    }
    /**
     * Gets the color distributiopn type
     */
    get colorsDistributionType() {
        return this._colorsDistributionType;
    }
    /**
     * Sets the color distribution type
     * @see GreasedLineMeshColorDistributionType
     * @param value color distribution type
     */
    set colorsDistributionType(value) {
        this._colorsDistributionType = value;
        this.markAllDefinesAsDirty();
    }
    /**
     * Gets the resolution
     */
    get resolution() {
        return this._resolution;
    }
    /**
     * Sets the resolution
     * @param value resolution of the screen for GreasedLine
     */
    set resolution(value) {
        this._aspect = value.x / value.y;
        this._resolution = value;
    }
    /**
     * Serializes this plugin material
     * @returns serializationObjec
     */
    serialize() {
        const serializationObject = super.serialize();
        const greasedLineMaterialOptions = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this.colorsSampling,
            colorMode: this.colorMode,
            dashCount: this._dashCount,
            dashOffset: this.dashOffset,
            dashRatio: this.dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this.useColors,
            useDash: this.useDash,
            visibility: this.visibility,
            width: this.width,
        };
        if (this._colors) {
            greasedLineMaterialOptions.colors = this._colors;
        }
        if (this._color) {
            greasedLineMaterialOptions.color = this._color;
        }
        serializationObject.greasedLineMaterialOptions = greasedLineMaterialOptions;
        return serializationObject;
    }
    /**
     * Parses a serialized objects
     * @param source serialized object
     * @param scene scene
     * @param rootUrl root url for textures
     */
    parse(source, scene, rootUrl) {
        super.parse(source, scene, rootUrl);
        const greasedLineMaterialOptions = source.greasedLineMaterialOptions;
        this.colorsTexture?.dispose();
        if (greasedLineMaterialOptions.color) {
            this.setColor(greasedLineMaterialOptions.color, true);
        }
        if (greasedLineMaterialOptions.colorDistributionType) {
            this.colorsDistributionType = greasedLineMaterialOptions.colorDistributionType;
        }
        if (greasedLineMaterialOptions.colors) {
            this.colors = greasedLineMaterialOptions.colors;
        }
        if (greasedLineMaterialOptions.colorsSampling) {
            this.colorsSampling = greasedLineMaterialOptions.colorsSampling;
        }
        if (greasedLineMaterialOptions.colorMode) {
            this.colorMode = greasedLineMaterialOptions.colorMode;
        }
        if (greasedLineMaterialOptions.useColors) {
            this.useColors = greasedLineMaterialOptions.useColors;
        }
        if (greasedLineMaterialOptions.visibility) {
            this.visibility = greasedLineMaterialOptions.visibility;
        }
        if (greasedLineMaterialOptions.useDash) {
            this.useDash = greasedLineMaterialOptions.useDash;
        }
        if (greasedLineMaterialOptions.dashCount) {
            this.dashCount = greasedLineMaterialOptions.dashCount;
        }
        if (greasedLineMaterialOptions.dashRatio) {
            this.dashRatio = greasedLineMaterialOptions.dashRatio;
        }
        if (greasedLineMaterialOptions.dashOffset) {
            this.dashOffset = greasedLineMaterialOptions.dashOffset;
        }
        if (greasedLineMaterialOptions.width) {
            this.width = greasedLineMaterialOptions.width;
        }
        if (greasedLineMaterialOptions.sizeAttenuation) {
            this.sizeAttenuation = greasedLineMaterialOptions.sizeAttenuation;
        }
        if (greasedLineMaterialOptions.resolution) {
            this.resolution = greasedLineMaterialOptions.resolution;
        }
        if (this.colors) {
            this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, scene);
        }
        else {
            _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.PrepareEmptyColorsTexture(scene);
        }
        this.markAllDefinesAsDirty();
    }
    /**
     * Makes a duplicate of the current configuration into another one.
     * @param plugin define the config where to copy the info
     */
    copyTo(plugin) {
        const dest = plugin;
        dest.colorsTexture?.dispose();
        if (this._colors) {
            dest.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.CreateColorsTexture(`${dest._material.name}-colors-texture`, this._colors, dest.colorsSampling, this._scene);
        }
        dest.setColor(this.color, true);
        dest.colorsDistributionType = this.colorsDistributionType;
        dest.colorsSampling = this.colorsSampling;
        dest.colorMode = this.colorMode;
        dest.useColors = this.useColors;
        dest.visibility = this.visibility;
        dest.useDash = this.useDash;
        dest.dashCount = this.dashCount;
        dest.dashRatio = this.dashRatio;
        dest.dashOffset = this.dashOffset;
        dest.width = this.width;
        dest.sizeAttenuation = this.sizeAttenuation;
        dest.resolution = this.resolution;
        dest.markAllDefinesAsDirty();
    }
    _isGLSL(shaderLanguage) {
        return shaderLanguage === 0 /* ShaderLanguage.GLSL */ || this._forceGLSL;
    }
}
/**
 * Plugin name
 */
GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial";
/**
 * Force all the greased lines to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */
GreasedLinePluginMaterial.ForceGLSL = false;
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)(`BABYLON.${GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME}`, GreasedLinePluginMaterial);


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

/***/ "../core/dist/Materials/GreasedLine/greasedLinePluginMaterialShadersGLSL.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/Materials/GreasedLine/greasedLinePluginMaterialShadersGLSL.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCustomCode: () => (/* binding */ GetCustomCode)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Returns GLSL custom shader code
 * @param shaderType vertex or fragment
 * @param cameraFacing is in camera facing mode?
 * @returns GLSL custom shader code
 */
/** @internal */
function GetCustomCode(shaderType, cameraFacing) {
    if (shaderType === "vertex") {
        const obj = {
            CUSTOM_VERTEX_DEFINITIONS: `
                attribute float grl_widths;
                attribute vec3 grl_offsets;
                attribute float grl_colorPointers;
                varying float grlCounters;
                varying float grlColorPointer;

                #ifdef GREASED_LINE_CAMERA_FACING
                    attribute vec4 grl_previousAndSide;
                    attribute vec4 grl_nextAndCounters;

                    vec2 grlFix( vec4 i, float aspect ) {
                        vec2 res = i.xy / i.w;
                        res.x *= aspect;
                        return res;
                    }
                #else
                    attribute vec3 grl_slopes;
                    attribute float grl_counters;
                #endif
                `,
            CUSTOM_VERTEX_UPDATE_POSITION: `
                #ifdef GREASED_LINE_CAMERA_FACING
                    vec3 grlPositionOffset = grl_offsets;
                    positionUpdated += grlPositionOffset;
                #else
                    positionUpdated = (positionUpdated + grl_offsets) + (grl_slopes * grl_widths);
                #endif
                `,
            CUSTOM_VERTEX_MAIN_END: `
                grlColorPointer = grl_colorPointers;

                #ifdef GREASED_LINE_CAMERA_FACING

                    float grlAspect = grl_aspect_resolution_lineWidth.x;
                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;

                    vec3 grlPrevious = grl_previousAndSide.xyz;
                    float grlSide = grl_previousAndSide.w;

                    vec3 grlNext = grl_nextAndCounters.xyz;
                    grlCounters = grl_nextAndCounters.w;
                    float grlWidth = grlBaseWidth * grl_widths;
                    
                    vec3 worldDir = normalize(grlNext - grlPrevious);
                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);
                    mat4 grlMatrix = viewProjection * finalWorld;
                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);
                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);
                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);
                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);
                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);

                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);

                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM
                        grlNormal.xy *= -.5 * grlWidth;
                    #else
                        grlNormal.xy *= .5 * grlWidth;
                    #endif

                    grlNormal *= grl_projection;

                    #ifdef GREASED_LINE_SIZE_ATTENUATION
                        grlNormal.xy *= grlFinalPosition.w;
                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;
                    #endif

                    grlFinalPosition.xy += grlNormal.xy * grlSide;
                    gl_Position = grlFinalPosition;

                    vPositionW = vec3(grlFinalPosition);
                #else
                    grlCounters = grl_counters;
                #endif
                `,
        };
        if (cameraFacing) {
            obj["!gl_Position\\=viewProjection\\*worldPos;"] = "//"; // not needed for camera facing GRL
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return obj;
    }
    if (shaderType === "fragment") {
        return {
            CUSTOM_FRAGMENT_DEFINITIONS: `
                    #ifdef PBR
                         #define grlFinalColor finalColor
                    #else
                         #define grlFinalColor color
                    #endif

                    varying float grlCounters;
                    varying float grlColorPointer;
                    uniform sampler2D grl_colors;
                `,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `
                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;
                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;
                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;
                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;

                    float grlUseDash = grl_dashOptions.x;
                    float grlDashArray = grl_dashOptions.y;
                    float grlDashOffset = grl_dashOptions.z;
                    float grlDashRatio = grl_dashOptions.w;

                    grlFinalColor.a *= step(grlCounters, grlVisibility);
                    if(grlFinalColor.a == 0.) discard;

                    if(grlUseDash == 1.){
                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));
                        if (grlFinalColor.a == 0.) discard;
                    }

                    #ifdef GREASED_LINE_HAS_COLOR
                        if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */}.) {
                            grlFinalColor.rgb = grl_singleColor;
                        } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */}.) {
                            grlFinalColor.rgb += grl_singleColor;
                        } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */}.) {
                            grlFinalColor.rgb *= grl_singleColor;
                        }
                    #else
                        if (grlUseColors == 1.) {
                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);
                            #else
                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));
                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);
                            #endif
                            if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */}.) {
                                grlFinalColor = grlColor;
                            } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */}.) {
                                grlFinalColor += grlColor;
                            } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */}.) {
                                grlFinalColor *= grlColor;
                            }
                        }
                    #endif
                `,
        };
    }
    return null;
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

/***/ "../core/dist/Materials/GreasedLine/greasedLinePluginMaterialShadersWGSL.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/Materials/GreasedLine/greasedLinePluginMaterialShadersWGSL.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCustomCode: () => (/* binding */ GetCustomCode)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Returns WGSL custom shader code
 * @param shaderType vertex or fragment
 * @param cameraFacing is in camera facing mode?
 * @returns WGSL custom shader code
 */
/** @internal */
function GetCustomCode(shaderType, cameraFacing) {
    if (shaderType === "vertex") {
        const obj = {
            CUSTOM_VERTEX_DEFINITIONS: `
                attribute grl_widths: f32;
                attribute grl_colorPointers: f32;
                varying grlCounters: f32;
                varying grlColorPointer: f32;

                #ifdef GREASED_LINE_USE_OFFSETS
                    attribute grl_offsets: vec3f;   
                #endif

                #ifdef GREASED_LINE_CAMERA_FACING
                    attribute grl_previousAndSide : vec4f;
                    attribute grl_nextAndCounters : vec4f;

                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {
                        var res = i.xy / i.w;
                        res.x *= aspect;
                        return res;
                    }
                #else
                    attribute grl_slopes: f32;
                    attribute grl_counters: f32;
                #endif


                `,
            CUSTOM_VERTEX_UPDATE_POSITION: `
                #ifdef GREASED_LINE_USE_OFFSETS
                    var grlPositionOffset: vec3f = input.grl_offsets;
                #else
                    var grlPositionOffset = vec3f(0.);
                #endif

                #ifdef GREASED_LINE_CAMERA_FACING
                    positionUpdated += grlPositionOffset;
                #else
                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);
                #endif
                `,
            CUSTOM_VERTEX_MAIN_END: `
                vertexOutputs.grlColorPointer = input.grl_colorPointers;

                #ifdef GREASED_LINE_CAMERA_FACING

                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;
                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;

                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;
                    let grlSide: f32 = input.grl_previousAndSide.w;

                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;
                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;

                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;

                    let worldDir: vec3f = normalize(grlNext - grlPrevious);
                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);
                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;
                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); 
                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);
                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);
                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);
                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);

                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);

                    let grlHalfWidth: f32 = 0.5 * grlWidth;
                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
                        grlNormal.x *= -grlHalfWidth;
                        grlNormal.y *= -grlHalfWidth;
                    #else
                        grlNormal.x *= grlHalfWidth;
                        grlNormal.y *= grlHalfWidth;
                    #endif

                    grlNormal *= uniforms.grl_projection;

                    #if defined(GREASED_LINE_SIZE_ATTENUATION)
                        grlNormal.x *= grlFinalPosition.w;
                        grlNormal.y *= grlFinalPosition.w;

                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;
                        grlNormal.x /= pr.x;
                        grlNormal.y /= pr.y;
                    #endif

                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);
                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;
                
                #else
                    vertexOutputs.grlCounters = input.grl_counters;
                #endif
                `,
        };
        if (cameraFacing) {
            obj["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"; // not needed for camera facing GRL
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return obj;
    }
    if (shaderType === "fragment") {
        return {
            CUSTOM_FRAGMENT_DEFINITIONS: `
                    #ifdef PBR
                         #define grlFinalColor finalColor
                    #else
                         #define grlFinalColor color
                    #endif

                    varying grlCounters: f32;
                    varying grlColorPointer: 32;

                    var grl_colors: texture_2d<f32>;
                    var grl_colorsSampler: sampler;
                `,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `
                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;
                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;
                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;
                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;

                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;
                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;
                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;
                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;

                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);
                    if (grlFinalColor.a == 0.0) {
                        discard;
                    }

                    if (grlUseDash == 1.0) {
                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;
                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));

                        if (grlFinalColor.a == 0.0) {
                            discard;
                        }
                    }

                    #ifdef GREASED_LINE_HAS_COLOR
                        if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */}.) {
                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);
                        } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */}.) {
                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);
                        } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */}.) {
                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);
                        }
                    #else
                        if (grlUseColors == 1.) {
                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));
                            #else
                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));
                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);
                            #endif
                            if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */}.) {
                                grlFinalColor = grlColor;
                            } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */}.) {
                                grlFinalColor += grlColor;
                            } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */}.) {
                                grlFinalColor *= grlColor;
                            }
                        }
                    #endif


                `,
        };
    }
    return null;
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

/***/ "../core/dist/Materials/GreasedLine/greasedLineSimpleMaterial.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Materials/GreasedLine/greasedLineSimpleMaterial.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreasedLineSimpleMaterial: () => (/* binding */ GreasedLineSimpleMaterial),
/* harmony export */   GreasedLineUseOffsetsSimpleMaterialDefine: () => (/* binding */ GreasedLineUseOffsetsSimpleMaterialDefine)
/* harmony export */ });
/* harmony import */ var _Textures_rawTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Textures/rawTexture */ "../core/dist/Materials/Textures/rawTexture.js");
/* harmony import */ var _shaderMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderMaterial */ "../core/dist/Materials/shaderMaterial.js");
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Textures_textureSampler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Textures/textureSampler */ "../core/dist/Materials/Textures/textureSampler.js");
/* harmony import */ var _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Misc/greasedLineTools */ "../core/dist/Misc/greasedLineTools.js");
/* harmony import */ var _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./greasedLineMaterialDefaults */ "../core/dist/Materials/GreasedLine/greasedLineMaterialDefaults.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








const GreasedLineUseOffsetsSimpleMaterialDefine = "GREASED_LINE_USE_OFFSETS";
/**
 * GreasedLineSimpleMaterial
 */
class GreasedLineSimpleMaterial extends _shaderMaterial__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial {
    /**
     * GreasedLineSimple material constructor
     * @param name material name
     * @param scene the scene
     * @param options material options
     */
    constructor(name, scene, options) {
        const engine = scene.getEngine();
        const isWGSL = engine.isWebGPU && !(options.forceGLSL || GreasedLineSimpleMaterial.ForceGLSL);
        const defines = [
            `COLOR_DISTRIBUTION_TYPE_LINE ${1 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_LINE */}.`,
            `COLOR_DISTRIBUTION_TYPE_SEGMENT ${0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */}.`,
            `COLOR_MODE_SET ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */}.`,
            `COLOR_MODE_ADD ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */}.`,
            `COLOR_MODE_MULTIPLY ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */}.`,
        ];
        if (scene.useRightHandedSystem) {
            defines.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        }
        const attributes = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        if (options.cameraFacing) {
            defines.push("GREASED_LINE_CAMERA_FACING");
            attributes.push("grl_previousAndSide", "grl_nextAndCounters");
        }
        else {
            attributes.push("grl_slopes");
            attributes.push("grl_counters");
        }
        const uniforms = [
            "grlColorsWidth",
            "grlUseColors",
            "grlWidth",
            "grlColor",
            "grl_colorModeAndColorDistributionType",
            "grlResolution",
            "grlAspect",
            "grlAizeAttenuation",
            "grlDashArray",
            "grlDashOffset",
            "grlDashRatio",
            "grlUseDash",
            "grlVisibility",
            "grlColors",
        ];
        if (!isWGSL) {
            uniforms.push("world", "viewProjection", "view", "projection");
        }
        super(name, scene, {
            vertex: "greasedLine",
            fragment: "greasedLine",
        }, {
            uniformBuffers: isWGSL ? ["Scene", "Mesh"] : undefined,
            attributes,
            uniforms,
            samplers: isWGSL ? [] : ["grlColors"],
            defines,
            extraInitializationsAsync: async () => {
                if (isWGSL) {
                    await Promise.all([__webpack_require__.e(/*! import() */ "core_dist_ShadersWGSL_greasedLine_vertex_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../ShadersWGSL/greasedLine.vertex */ "../core/dist/ShadersWGSL/greasedLine.vertex.js")), __webpack_require__.e(/*! import() */ "core_dist_ShadersWGSL_greasedLine_fragment_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../ShadersWGSL/greasedLine.fragment */ "../core/dist/ShadersWGSL/greasedLine.fragment.js"))]);
                }
                else {
                    await Promise.all([__webpack_require__.e(/*! import() */ "core_dist_Shaders_greasedLine_vertex_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../Shaders/greasedLine.vertex */ "../core/dist/Shaders/greasedLine.vertex.js")), __webpack_require__.e(/*! import() */ "core_dist_Shaders_greasedLine_fragment_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../Shaders/greasedLine.fragment */ "../core/dist/Shaders/greasedLine.fragment.js"))]);
                }
            },
            shaderLanguage: isWGSL ? 1 /* ShaderLanguage.WGSL */ : 0 /* ShaderLanguage.GLSL */,
        });
        this._color = _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.White();
        this._colorsDistributionType = 0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */;
        this._colorsTexture = null;
        options = options || {
            color: _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.DEFAULT_COLOR,
        };
        this.visibility = options.visibility ?? 1;
        this.useDash = options.useDash ?? false;
        this.dashRatio = options.dashRatio ?? 0.5;
        this.dashOffset = options.dashOffset ?? 0;
        this.dashCount = options.dashCount ?? 1; // calculate the _dashArray value, call the setter
        this.width = options.width
            ? options.width
            : options.sizeAttenuation && options.cameraFacing
                ? _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.DEFAULT_WIDTH_ATTENUATED
                : _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.DEFAULT_WIDTH;
        this.sizeAttenuation = options.sizeAttenuation ?? false;
        this.color = options.color ?? _Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.White();
        this.useColors = options.useColors ?? false;
        this.colorsDistributionType = options.colorDistributionType ?? 0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */;
        this.colorsSampling = options.colorsSampling ?? _Textures_rawTexture__WEBPACK_IMPORTED_MODULE_0__.RawTexture.NEAREST_NEAREST;
        this.colorMode = options.colorMode ?? 0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */;
        this._colors = options.colors ?? null;
        this._cameraFacing = options.cameraFacing ?? true;
        this.resolution = options.resolution ?? new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector2(engine.getRenderWidth(), engine.getRenderHeight()); // calculate aspect call the setter
        if (options.colorsTexture) {
            this.colorsTexture = options.colorsTexture;
        }
        else {
            if (this._colors) {
                this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, scene);
            }
            else {
                this._color = this._color ?? _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.DEFAULT_COLOR;
                this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.PrepareEmptyColorsTexture(scene);
            }
        }
        if (isWGSL) {
            const sampler = new _Textures_textureSampler__WEBPACK_IMPORTED_MODULE_4__.TextureSampler();
            sampler.setParameters(); // use the default values
            sampler.samplingMode = this.colorsSampling;
            this.setTextureSampler("grlColorsSampler", sampler);
        }
        engine.onDisposeObservable.add(() => {
            _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.DisposeEmptyColorsTexture();
        });
    }
    /**
     * Disposes the plugin material.
     */
    dispose() {
        this._colorsTexture?.dispose();
        super.dispose();
    }
    _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector2(this._colorMode, this._colorsDistributionType));
    }
    /**
     * Updates the material. Use when material created in lazy mode.
     */
    updateLazy() {
        if (this._colors) {
            this.setColors(this._colors, false, true);
        }
    }
    /**
     * Returns the colors used to colorize the line
     */
    get colors() {
        return this._colors;
    }
    /**
     * Sets the colors used to colorize the line
     */
    set colors(value) {
        this.setColors(value);
    }
    /**
     * Creates or updates the colors texture
     * @param colors color table RGBA
     * @param lazy if lazy, the colors are not updated
     * @param forceNewTexture force creation of a new texture
     */
    setColors(colors, lazy = false, forceNewTexture = false) {
        const origColorsCount = this._colors?.length ?? 0;
        this._colors = colors;
        if (colors === null || colors.length === 0) {
            this._colorsTexture?.dispose();
            return;
        }
        if (lazy && !forceNewTexture) {
            return;
        }
        if (this._colorsTexture && origColorsCount === colors.length && !forceNewTexture) {
            const colorArray = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.Color3toRGBAUint8(colors);
            this._colorsTexture.update(colorArray);
        }
        else {
            this._colorsTexture?.dispose();
            this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.CreateColorsTexture(`${this.name}-colors-texture`, colors, this.colorsSampling, this.getScene());
        }
    }
    /**
     * Gets the colors texture
     */
    get colorsTexture() {
        return this._colorsTexture ?? null;
    }
    /**
     * Sets the colorsTexture
     */
    set colorsTexture(value) {
        this._colorsTexture = value;
        this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width);
        this.setTexture("grlColors", this._colorsTexture);
    }
    /**
     * Line base width. At each point the line width is calculated by widths[pointIndex] * width
     */
    get width() {
        return this._width;
    }
    /**
     * Line base width. At each point the line width is calculated by widths[pointIndex] * width
     */
    set width(value) {
        this._width = value;
        this.setFloat("grlWidth", value);
    }
    /**
     * Whether to use the colors option to colorize the line
     */
    get useColors() {
        return this._useColors;
    }
    set useColors(value) {
        this._useColors = value;
        this.setFloat("grlUseColors", _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.BooleanToNumber(value));
    }
    /**
     * The type of sampling of the colors texture. The values are the same when using with textures.
     */
    get colorsSampling() {
        return this._colorsSampling;
    }
    /**
     * The type of sampling of the colors texture. The values are the same when using with textures.
     */
    set colorsSampling(value) {
        this._colorsSampling = value;
    }
    /**
     * Normalized value of how much of the line will be visible
     * 0 - 0% of the line will be visible
     * 1 - 100% of the line will be visible
     */
    get visibility() {
        return this._visibility;
    }
    set visibility(value) {
        this._visibility = value;
        this.setFloat("grlVisibility", value);
    }
    /**
     * Turns on/off dash mode
     */
    get useDash() {
        return this._useDash;
    }
    /**
     * Turns on/off dash mode
     */
    set useDash(value) {
        this._useDash = value;
        this.setFloat("grlUseDash", _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.BooleanToNumber(value));
    }
    /**
     * Gets the dash offset
     */
    get dashOffset() {
        return this._dashOffset;
    }
    /**
     * Sets the dash offset
     */
    set dashOffset(value) {
        this._dashOffset = value;
        this.setFloat("grlDashOffset", value);
    }
    /**
     * Length of the dash. 0 to 1. 0.5 means half empty, half drawn.
     */
    get dashRatio() {
        return this._dashRatio;
    }
    /**
     * Length of the dash. 0 to 1. 0.5 means half empty, half drawn.
     */
    set dashRatio(value) {
        this._dashRatio = value;
        this.setFloat("grlDashRatio", value);
    }
    /**
     * Gets the number of dashes in the line
     */
    get dashCount() {
        return this._dashCount;
    }
    /**
     * Sets the number of dashes in the line
     * @param value dash
     */
    set dashCount(value) {
        this._dashCount = value;
        this._dashArray = 1 / value;
        this.setFloat("grlDashArray", this._dashArray);
    }
    /**
     * False means 1 unit in width = 1 unit on scene, true means 1 unit in width is reduced on the screen to make better looking lines
     */
    get sizeAttenuation() {
        return this._sizeAttenuation;
    }
    /**
     * Turn on/off attenuation of the width option and widths array.
     * @param value false means 1 unit in width = 1 unit on scene, true means 1 unit in width is reduced on the screen to make better looking lines
     */
    set sizeAttenuation(value) {
        this._sizeAttenuation = value;
        this.setFloat("grlSizeAttenuation", _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.BooleanToNumber(value));
    }
    /**
     * Gets the color of the line
     */
    get color() {
        return this._color;
    }
    /**
     * Sets the color of the line
     * @param value Color3
     */
    set color(value) {
        this.setColor(value);
    }
    /**
     * Sets the color of the line. If set the whole line will be mixed with this color according to the colorMode option.
     * The simple material always needs a color to be set. If you set it to null it will set the color to the default color (GreasedLineSimpleMaterial.DEFAULT_COLOR).
     * @param value color
     */
    setColor(value) {
        value = value ?? _greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.DEFAULT_COLOR;
        this._color = value;
        this.setColor3("grlColor", value);
    }
    /**
     * Gets the color distributiopn type
     */
    get colorsDistributionType() {
        return this._colorsDistributionType;
    }
    /**
     * Sets the color distribution type
     * @see GreasedLineMeshColorDistributionType
     * @param value color distribution type
     */
    set colorsDistributionType(value) {
        this._colorsDistributionType = value;
        this._setColorModeAndColorDistributionType();
    }
    /**
     * Gets the mixing mode of the color and colors paramaters. Default value is GreasedLineMeshColorMode.SET.
     * MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.
     * @see GreasedLineMeshColorMode
     */
    get colorMode() {
        return this._colorMode;
    }
    /**
     * Sets the mixing mode of the color and colors paramaters. Default value is GreasedLineMeshColorMode.SET.
     * MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.
     * @see GreasedLineMeshColorMode
     */
    set colorMode(value) {
        this._colorMode = value;
        this._setColorModeAndColorDistributionType();
    }
    /**
     * Gets the resolution
     */
    get resolution() {
        return this._resolution;
    }
    /**
     * Sets the resolution
     * @param value resolution of the screen for GreasedLine
     */
    set resolution(value) {
        this._resolution = value;
        this.setVector2("grlResolution", value);
        this.setFloat("grlAspect", value.x / value.y);
    }
    /**
     * Serializes this plugin material
     * @returns serializationObjec
     */
    serialize() {
        const serializationObject = super.serialize();
        const greasedLineMaterialOptions = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this._colorsSampling,
            colorMode: this._colorMode,
            color: this._color,
            dashCount: this._dashCount,
            dashOffset: this._dashOffset,
            dashRatio: this._dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this._useColors,
            useDash: this._useDash,
            visibility: this._visibility,
            width: this._width,
            cameraFacing: this._cameraFacing,
        };
        if (this._colors) {
            greasedLineMaterialOptions.colors = this._colors;
        }
        serializationObject.greasedLineMaterialOptions = greasedLineMaterialOptions;
        return serializationObject;
    }
    /**
     * Parses a serialized objects
     * @param source serialized object
     * @param scene scene
     * @param _rootUrl root url for textures
     */
    parse(source, scene, _rootUrl) {
        const greasedLineMaterialOptions = source.greasedLineMaterialOptions;
        this._colorsTexture?.dispose();
        if (greasedLineMaterialOptions.color) {
            this.color = greasedLineMaterialOptions.color;
        }
        if (greasedLineMaterialOptions.colorDistributionType) {
            this.colorsDistributionType = greasedLineMaterialOptions.colorDistributionType;
        }
        if (greasedLineMaterialOptions.colorsSampling) {
            this.colorsSampling = greasedLineMaterialOptions.colorsSampling;
        }
        if (greasedLineMaterialOptions.colorMode) {
            this.colorMode = greasedLineMaterialOptions.colorMode;
        }
        if (greasedLineMaterialOptions.useColors) {
            this.useColors = greasedLineMaterialOptions.useColors;
        }
        if (greasedLineMaterialOptions.visibility) {
            this.visibility = greasedLineMaterialOptions.visibility;
        }
        if (greasedLineMaterialOptions.useDash) {
            this.useDash = greasedLineMaterialOptions.useDash;
        }
        if (greasedLineMaterialOptions.dashCount) {
            this.dashCount = greasedLineMaterialOptions.dashCount;
        }
        if (greasedLineMaterialOptions.dashRatio) {
            this.dashRatio = greasedLineMaterialOptions.dashRatio;
        }
        if (greasedLineMaterialOptions.dashOffset) {
            this.dashOffset = greasedLineMaterialOptions.dashOffset;
        }
        if (greasedLineMaterialOptions.width) {
            this.width = greasedLineMaterialOptions.width;
        }
        if (greasedLineMaterialOptions.sizeAttenuation) {
            this.sizeAttenuation = greasedLineMaterialOptions.sizeAttenuation;
        }
        if (greasedLineMaterialOptions.resolution) {
            this.resolution = greasedLineMaterialOptions.resolution;
        }
        if (greasedLineMaterialOptions.colors) {
            this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.CreateColorsTexture(`${this.name}-colors-texture`, greasedLineMaterialOptions.colors, this.colorsSampling, this.getScene());
        }
        else {
            this.colorsTexture = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_5__.GreasedLineTools.PrepareEmptyColorsTexture(scene);
        }
        this._cameraFacing = greasedLineMaterialOptions.cameraFacing ?? true;
        this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing);
    }
}
/**
 * Force to use GLSL in WebGPU
 */
GreasedLineSimpleMaterial.ForceGLSL = false;


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

/***/ "../core/dist/Materials/Textures/textureMerger.js":
/*!********************************************************!*\
  !*** ../core/dist/Materials/Textures/textureMerger.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateConstantInput: () => (/* binding */ CreateConstantInput),
/* harmony export */   CreateRGBAConfiguration: () => (/* binding */ CreateRGBAConfiguration),
/* harmony export */   CreateTextureInput: () => (/* binding */ CreateTextureInput),
/* harmony export */   MergeTexturesAsync: () => (/* binding */ MergeTexturesAsync)
/* harmony export */ });
/* harmony import */ var _Procedurals_proceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Procedurals/proceduralTexture */ "../core/dist/Materials/Textures/Procedurals/proceduralTexture.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Engines/constants */ "../core/dist/Engines/constants.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const _ShaderName = "textureMerger";
/**
 * @internal
 * Check if a channel input is a texture input
 * @param input The channel input to check
 * @returns True if the input is a texture input, false otherwise
 */
function IsTextureInput(input) {
    return "texture" in input;
}
/**
 * @internal
 * Check if a channel input is a constant input
 * @param input The channel input to check
 * @returns True if the input is a constant input, false otherwise
 */
function IsConstantInput(input) {
    return "value" in input;
}
/**
 * @internal
 * Copy texture transformation properties from one texture to another
 * @param source The source texture
 * @param destination The destination texture
 */
function CopyTextureTransform(source, destination) {
    destination.uOffset = source.uOffset;
    destination.vOffset = source.vOffset;
    destination.uScale = source.uScale;
    destination.vScale = source.vScale;
    destination.uAng = source.uAng;
    destination.vAng = source.vAng;
    destination.wAng = source.wAng;
    destination.uRotationCenter = source.uRotationCenter;
    destination.vRotationCenter = source.vRotationCenter;
}
/**
 * @internal
 * Merge multiple texture channels into a single texture
 * @param name Name for the resulting texture
 * @param config Merge configuration
 * @param scene Scene to create the texture in
 * @returns The merged texture
 */
async function MergeTexturesAsync(name, config, scene) {
    const channels = [config.red, config.green, config.blue, config.alpha];
    const textureInputs = [];
    const textureInputMap = []; // Maps channel index to texture input index (-1 for constants)
    // Collect unique textures and validate inputs
    for (let channelIndex = 0; channelIndex < 4; channelIndex++) {
        const channel = channels[channelIndex];
        if (channel) {
            if (IsTextureInput(channel)) {
                // Validate source channel
                if (channel.sourceChannel < 0 || channel.sourceChannel > 3) {
                    throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
                }
                // Find or add texture to inputs
                let textureIndex = textureInputs.indexOf(channel.texture);
                if (textureIndex === -1) {
                    textureIndex = textureInputs.length;
                    textureInputs.push(channel.texture);
                }
                textureInputMap[channelIndex] = textureIndex;
            }
            else if (IsConstantInput(channel)) {
                // Validate constant value
                if (channel.value < 0 || channel.value > 1) {
                    throw new Error("Constant value must be between 0.0 and 1.0");
                }
                textureInputMap[channelIndex] = -1;
            }
            else {
                throw new Error("Invalid channel input configuration");
            }
        }
        else {
            textureInputMap[channelIndex] = -1;
        }
    }
    // Determine output size
    let outputSize = config.outputSize;
    if (!outputSize && textureInputs.length > 0) {
        // Use the largest texture size
        let maxSize = 0;
        for (const texture of textureInputs) {
            const size = texture.getSize();
            const currentSize = Math.max(size.width, size.height);
            if (currentSize > maxSize) {
                maxSize = currentSize;
                outputSize = size.width === size.height ? maxSize : size;
            }
        }
    }
    outputSize = outputSize || 512; // Fallback size
    // Generate shader defines
    const defines = [];
    const usedTextures = new Set();
    for (let channelIndex = 0; channelIndex < 4; channelIndex++) {
        const channel = channels[channelIndex];
        const channelName = ["RED", "GREEN", "BLUE", "ALPHA"][channelIndex];
        if (channel && IsTextureInput(channel)) {
            defines.push(`${channelName}_FROM_TEXTURE`);
            const textureIndex = textureInputMap[channelIndex];
            usedTextures.add(textureIndex);
        }
    }
    // Add texture defines for used textures
    usedTextures.forEach((textureIndex) => {
        defines.push(`USE_TEXTURE${textureIndex}`);
    });
    // Create the procedural texture
    const outputTextureOptions = {
        type: _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURETYPE_HALF_FLOAT,
        format: _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTUREFORMAT_RGBA,
        samplingMode: _Engines_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.TEXTURE_NEAREST_SAMPLINGMODE,
        generateDepthBuffer: false,
        generateMipMaps: false,
        shaderLanguage: scene.getEngine().isWebGPU ? 1 /* ShaderLanguage.WGSL */ : 0 /* ShaderLanguage.GLSL */,
        extraInitializationsAsync: async () => {
            if (scene.getEngine().isWebGPU) {
                await Promise.all([__webpack_require__.e(/*! import() */ "core_dist_ShadersWGSL_textureMerger_fragment_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../ShadersWGSL/textureMerger.fragment */ "../core/dist/ShadersWGSL/textureMerger.fragment.js"))]);
            }
            else {
                await Promise.all([__webpack_require__.e(/*! import() */ "core_dist_Shaders_textureMerger_fragment_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../Shaders/textureMerger.fragment */ "../core/dist/Shaders/textureMerger.fragment.js"))]);
            }
        },
    };
    const proceduralTexture = new _Procedurals_proceduralTexture__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture(name, outputSize, _ShaderName, scene, outputTextureOptions);
    proceduralTexture.refreshRate = -1; // Do not auto-refresh
    // Set the defines
    proceduralTexture.defines = defines.length > 0 ? "#define " + defines.join("\n#define ") + "\n" : "";
    // Set up texture inputs
    for (let i = 0; i < textureInputs.length; i++) {
        CopyTextureTransform(textureInputs[i], proceduralTexture);
        proceduralTexture.setTexture(`inputTexture${i}`, textureInputs[i]);
    }
    // Set up channel configuration
    for (let channelIndex = 0; channelIndex < 4; channelIndex++) {
        const channel = channels[channelIndex];
        const channelName = ["red", "green", "blue", "alpha"][channelIndex];
        if (channel && IsTextureInput(channel)) {
            const textureIndex = textureInputMap[channelIndex];
            proceduralTexture.setInt(`${channelName}TextureIndex`, textureIndex);
            proceduralTexture.setInt(`${channelName}SourceChannel`, channel.sourceChannel);
        }
        else {
            // Use constant value (either provided or default)
            let constantValue;
            if (channel && IsConstantInput(channel)) {
                constantValue = channel.value;
            }
            else {
                // Use default values: 0 for RGB, 1 for alpha
                constantValue = channelIndex === 3 ? 1.0 : 0.0;
            }
            proceduralTexture.setFloat(`${channelName}ConstantValue`, constantValue);
        }
    }
    return await new Promise((resolve, reject) => {
        // Compile and render
        proceduralTexture.executeWhenReady(() => {
            try {
                proceduralTexture.render();
                resolve(proceduralTexture);
            }
            catch (error) {
                reject(error instanceof Error ? error : new Error(String(error)));
            }
        });
    });
}
/**
 * @internal
 * Create a texture input configuration
 * @param texture The texture to read from
 * @param sourceChannel The channel to read (0=R, 1=G, 2=B, 3=A)
 * @returns Texture channel input configuration
 */
function CreateTextureInput(texture, sourceChannel) {
    return { texture, sourceChannel };
}
/**
 * @internal
 * Create a constant value input configuration
 * @param value The constant value (0.0-1.0)
 * @returns Constant channel input configuration
 */
function CreateConstantInput(value) {
    return { value };
}
/**
 * @internal
 * Create a simple RGBA channel packing configuration
 * @param red Input for red channel
 * @param green Input for green channel (optional, defaults to 0)
 * @param blue Input for blue channel (optional, defaults to 0)
 * @param alpha Input for alpha channel (optional, defaults to 1)
 * @returns Texture merge configuration
 */
function CreateRGBAConfiguration(red, green, blue, alpha) {
    return { red, green, blue, alpha };
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

/***/ "../core/dist/Meshes/GreasedLine/greasedLineBaseMesh.js":
/*!**************************************************************!*\
  !*** ../core/dist/Meshes/GreasedLine/greasedLineBaseMesh.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreasedLineBaseMesh: () => (/* binding */ GreasedLineBaseMesh),
/* harmony export */   GreasedLineRibbonAutoDirectionMode: () => (/* binding */ GreasedLineRibbonAutoDirectionMode),
/* harmony export */   GreasedLineRibbonFacesMode: () => (/* binding */ GreasedLineRibbonFacesMode),
/* harmony export */   GreasedLineRibbonPointsMode: () => (/* binding */ GreasedLineRibbonPointsMode)
/* harmony export */ });
/* harmony import */ var _Materials_GreasedLine_greasedLinePluginMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Materials/GreasedLine/greasedLinePluginMaterial */ "../core/dist/Materials/GreasedLine/greasedLinePluginMaterial.js");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var _Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var _mesh_vertexData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mesh.vertexData */ "../core/dist/Meshes/mesh.vertexData.js");
/* harmony import */ var _Misc_deepCopier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Misc/deepCopier */ "../core/dist/Misc/deepCopier.js");
/* harmony import */ var _Materials_GreasedLine_greasedLineSimpleMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Materials/GreasedLine/greasedLineSimpleMaterial */ "../core/dist/Materials/GreasedLine/greasedLineSimpleMaterial.js");
/* harmony import */ var _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Misc/greasedLineTools */ "../core/dist/Misc/greasedLineTools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * In POINTS_MODE_POINTS every array of points will become the center (backbone) of the ribbon. The ribbon will be expanded by `width / 2` to `+direction` and `-direction` as well.
 * In POINTS_MODE_PATHS every array of points specifies an edge. These will be used to build one ribbon.
 */
var GreasedLineRibbonPointsMode;
(function (GreasedLineRibbonPointsMode) {
    GreasedLineRibbonPointsMode[GreasedLineRibbonPointsMode["POINTS_MODE_POINTS"] = 0] = "POINTS_MODE_POINTS";
    GreasedLineRibbonPointsMode[GreasedLineRibbonPointsMode["POINTS_MODE_PATHS"] = 1] = "POINTS_MODE_PATHS";
})(GreasedLineRibbonPointsMode || (GreasedLineRibbonPointsMode = {}));
/**
 * FACES_MODE_SINGLE_SIDED single sided with back face culling. Default value.
 * FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING single sided without back face culling. Sets backFaceCulling = false on the material so it affects all line ribbons added to the line ribbon instance.
 * FACES_MODE_DOUBLE_SIDED extra back faces are created. This doubles the amount of faces of the mesh.
 */
var GreasedLineRibbonFacesMode;
(function (GreasedLineRibbonFacesMode) {
    GreasedLineRibbonFacesMode[GreasedLineRibbonFacesMode["FACES_MODE_SINGLE_SIDED"] = 0] = "FACES_MODE_SINGLE_SIDED";
    GreasedLineRibbonFacesMode[GreasedLineRibbonFacesMode["FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING"] = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING";
    GreasedLineRibbonFacesMode[GreasedLineRibbonFacesMode["FACES_MODE_DOUBLE_SIDED"] = 2] = "FACES_MODE_DOUBLE_SIDED";
})(GreasedLineRibbonFacesMode || (GreasedLineRibbonFacesMode = {}));
/**
 * Only with POINTS_MODE_PATHS.
 * AUTO_DIRECTIONS_FROM_FIRST_SEGMENT sets the direction (slope) of the ribbon from the direction of the first line segment. Recommended.
 * AUTO_DIRECTIONS_FROM_ALL_SEGMENTS in this mode the direction (slope) will be calculated for each line segment according to the direction vector between each point of the line segments. Slow method.
 * AUTO_DIRECTIONS_ENHANCED in this mode the direction (slope) will be calculated for each line segment according to the direction vector between each point of the line segments using a more sophisitcaed algorithm. Slowest method.
 * AUTO_DIRECTIONS_FACE_TO in this mode the direction (slope) will be calculated for each line segment according to the direction vector between each point of the line segments and a direction (face-to) vector specified in direction. The resulting line will face to the direction of this face-to vector.
 * AUTO_DIRECTIONS_NONE you have to set the direction (slope) manually. Recommended.
 */
var GreasedLineRibbonAutoDirectionMode;
(function (GreasedLineRibbonAutoDirectionMode) {
    GreasedLineRibbonAutoDirectionMode[GreasedLineRibbonAutoDirectionMode["AUTO_DIRECTIONS_FROM_FIRST_SEGMENT"] = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT";
    GreasedLineRibbonAutoDirectionMode[GreasedLineRibbonAutoDirectionMode["AUTO_DIRECTIONS_FROM_ALL_SEGMENTS"] = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS";
    GreasedLineRibbonAutoDirectionMode[GreasedLineRibbonAutoDirectionMode["AUTO_DIRECTIONS_ENHANCED"] = 2] = "AUTO_DIRECTIONS_ENHANCED";
    GreasedLineRibbonAutoDirectionMode[GreasedLineRibbonAutoDirectionMode["AUTO_DIRECTIONS_FACE_TO"] = 3] = "AUTO_DIRECTIONS_FACE_TO";
    GreasedLineRibbonAutoDirectionMode[GreasedLineRibbonAutoDirectionMode["AUTO_DIRECTIONS_NONE"] = 99] = "AUTO_DIRECTIONS_NONE";
})(GreasedLineRibbonAutoDirectionMode || (GreasedLineRibbonAutoDirectionMode = {}));
/**
 * GreasedLineBaseMesh
 */
class GreasedLineBaseMesh extends _mesh__WEBPACK_IMPORTED_MODULE_1__.Mesh {
    constructor(name, scene, _options) {
        super(name, scene, null, null, false, false);
        this.name = name;
        this._options = _options;
        this._lazy = false;
        this._updatable = false;
        this._engine = scene.getEngine();
        this._lazy = _options.lazy ?? false;
        this._updatable = _options.updatable ?? false;
        this._vertexPositions = [];
        this._indices = [];
        this._uvs = [];
        this._points = [];
        this._colorPointers = _options.colorPointers ?? [];
        this._widths = _options.widths ?? new Array(_options.points.length).fill(1);
    }
    /**
     * "GreasedLineMesh"
     * @returns "GreasedLineMesh"
     */
    getClassName() {
        return "GreasedLineMesh";
    }
    _updateWidthsWithValue(defaulValue) {
        let pointCount = 0;
        for (const points of this._points) {
            pointCount += points.length;
        }
        const countDiff = (pointCount / 3) * 2 - this._widths.length;
        for (let i = 0; i < countDiff; i++) {
            this._widths.push(defaulValue);
        }
    }
    /**
     * Updated a lazy line. Rerenders the line and updates boundinfo as well.
     */
    updateLazy() {
        this._setPoints(this._points);
        if (!this._options.colorPointers) {
            this._updateColorPointers();
        }
        this._createVertexBuffers(this._options.ribbonOptions?.smoothShading);
        !this.doNotSyncBoundingInfo && this.refreshBoundingInfo();
        this.greasedLineMaterial?.updateLazy();
    }
    /**
     * Adds new points to the line. It doesn't rerenders the line if in lazy mode.
     * @param points points table
     * @param options optional options
     */
    addPoints(points, options) {
        for (const p of points) {
            this._points.push(p);
        }
        if (!this._lazy) {
            this.setPoints(this._points, options);
        }
    }
    /**
     * Dispose the line and it's resources
     * @param doNotRecurse Set to true to not recurse into each children (recurse into each children by default)
     * @param disposeMaterialAndTextures Set to true to also dispose referenced materials and textures (false by default)
     */
    dispose(doNotRecurse, disposeMaterialAndTextures = false) {
        super.dispose(doNotRecurse, disposeMaterialAndTextures);
    }
    /**
     * @returns true if the mesh was created in lazy mode
     */
    isLazy() {
        return this._lazy;
    }
    /**
     * Returns the UVs
     */
    get uvs() {
        return this._uvs;
    }
    /**
     * Sets the UVs
     * @param uvs the UVs
     */
    set uvs(uvs) {
        this._uvs = uvs instanceof Float32Array ? uvs : new Float32Array(uvs);
        this._createVertexBuffers();
    }
    /**
     * Returns the points offsets
     * Return the points offsets
     */
    get offsets() {
        return this._offsets;
    }
    /**
     * Sets point offests
     * @param offsets offset table [x,y,z, x,y,z, ....]
     */
    set offsets(offsets) {
        if (this.material instanceof _Materials_GreasedLine_greasedLineSimpleMaterial__WEBPACK_IMPORTED_MODULE_5__.GreasedLineSimpleMaterial) {
            this.material.setDefine(_Materials_GreasedLine_greasedLineSimpleMaterial__WEBPACK_IMPORTED_MODULE_5__.GreasedLineUseOffsetsSimpleMaterialDefine, offsets?.length > 0);
        }
        this._offsets = offsets;
        if (!this._offsetsBuffer) {
            this._createOffsetsBuffer(offsets);
        }
        else {
            this._offsetsBuffer.update(offsets);
        }
    }
    /**
     * Gets widths at each line point like [widthLower, widthUpper, widthLower, widthUpper, ...]
     */
    get widths() {
        return this._widths;
    }
    /**
     * Sets widths at each line point
     * @param widths width table [widthLower, widthUpper, widthLower, widthUpper ...]
     */
    set widths(widths) {
        this._widths = widths;
        if (!this._lazy) {
            this._widthsBuffer && this._widthsBuffer.update(widths);
        }
    }
    /**
     * Gets the color pointer. Each vertex need a color pointer. These color pointers points to the colors in the color table @see colors
     */
    get colorPointers() {
        return this._colorPointers;
    }
    /**
     * Sets the color pointer
     * @param colorPointers array of color pointer in the colors array. One pointer for every vertex is needed.
     */
    set colorPointers(colorPointers) {
        this._colorPointers = colorPointers;
        if (!this._lazy) {
            this._colorPointersBuffer && this._colorPointersBuffer.update(colorPointers);
        }
    }
    /**
     * Gets the pluginMaterial associated with line
     */
    get greasedLineMaterial() {
        if (this.material && this.material instanceof _Materials_GreasedLine_greasedLineSimpleMaterial__WEBPACK_IMPORTED_MODULE_5__.GreasedLineSimpleMaterial) {
            return this.material;
        }
        const materialPlugin = this.material?.pluginManager?.getPlugin(_Materials_GreasedLine_greasedLinePluginMaterial__WEBPACK_IMPORTED_MODULE_0__.GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME);
        if (materialPlugin) {
            return materialPlugin;
        }
        return;
    }
    /**
     * Return copy the points.
     */
    get points() {
        const pointsCopy = [];
        _Misc_deepCopier__WEBPACK_IMPORTED_MODULE_4__.DeepCopier.DeepCopy(this._points, pointsCopy);
        return pointsCopy;
    }
    /**
     * Sets line points and rerenders the line.
     * @param points points table
     * @param options optional options
     */
    setPoints(points, options) {
        this._points = _Misc_greasedLineTools__WEBPACK_IMPORTED_MODULE_6__.GreasedLineTools.ConvertPoints(points, options?.pointsOptions ?? this._options.pointsOptions);
        this._updateWidths();
        if (!options?.colorPointers) {
            this._updateColorPointers();
        }
        this._setPoints(this._points, options);
    }
    _initGreasedLine() {
        this._vertexPositions = [];
        this._indices = [];
        this._uvs = [];
    }
    _createLineOptions() {
        const lineOptions = {
            points: this._points,
            colorPointers: this._colorPointers,
            lazy: this._lazy,
            updatable: this._updatable,
            uvs: this._uvs,
            widths: this._widths,
            ribbonOptions: this._options.ribbonOptions,
        };
        return lineOptions;
    }
    /**
     * Serializes this GreasedLineMesh
     * @param serializationObject object to write serialization to
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.type = this.getClassName();
        serializationObject.lineOptions = this._createLineOptions();
    }
    _createVertexBuffers(computeNormals = false) {
        const vertexData = new _mesh_vertexData__WEBPACK_IMPORTED_MODULE_3__.VertexData();
        vertexData.positions = this._vertexPositions;
        vertexData.indices = this._indices;
        vertexData.uvs = this._uvs;
        if (computeNormals) {
            vertexData.normals = [];
            _mesh_vertexData__WEBPACK_IMPORTED_MODULE_3__.VertexData.ComputeNormals(this._vertexPositions, this._indices, vertexData.normals);
        }
        vertexData.applyToMesh(this, this._options.updatable);
        return vertexData;
    }
    _createOffsetsBuffer(offsets) {
        const engine = this._scene.getEngine();
        const offsetBuffer = new _Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer(engine, offsets, this._updatable, 3);
        this.setVerticesBuffer(offsetBuffer.createVertexBuffer("grl_offsets", 0, 3));
        this._offsetsBuffer = offsetBuffer;
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

/***/ "../core/dist/Misc/greasedLineTools.js":
/*!*********************************************!*\
  !*** ../core/dist/Misc/greasedLineTools.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GreasedLineTools: () => (/* binding */ GreasedLineTools)
/* harmony export */ });
/* harmony import */ var _Maths_math_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.path */ "../core/dist/Maths/math.path.js");
/* harmony import */ var _Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Meshes_Builders_textBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Meshes/Builders/textBuilder */ "../core/dist/Meshes/Builders/textBuilder.js");
/* harmony import */ var _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Materials/Textures/rawTexture */ "../core/dist/Materials/Textures/rawTexture.js");
/* harmony import */ var _Engines_engine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Engines/engine */ "../core/dist/Engines/engine.js");
/* harmony import */ var _Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Materials/GreasedLine/greasedLineMaterialDefaults */ "../core/dist/Materials/GreasedLine/greasedLineMaterialDefaults.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * Tool functions for GreasedLine
 */
class GreasedLineTools {
    /**
     * Converts GreasedLinePoints to number[][]
     * @param points GreasedLinePoints
     * @param options GreasedLineToolsConvertPointsOptions
     * @returns number[][] with x, y, z coordinates of the points, like [[x, y, z, x, y, z, ...], [x, y, z, ...]]
     */
    static ConvertPoints(points, options) {
        if (points.length && Array.isArray(points) && typeof points[0] === "number") {
            return [points];
        }
        else if (points.length && Array.isArray(points[0]) && typeof points[0][0] === "number") {
            return points;
        }
        else if (points.length && !Array.isArray(points[0]) && points[0] instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3) {
            const positions = [];
            for (let j = 0; j < points.length; j++) {
                const p = points[j];
                positions.push(p.x, p.y, p.z);
            }
            return [positions];
        }
        else if (points.length > 0 && Array.isArray(points[0]) && points[0].length > 0 && points[0][0] instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3) {
            const positions = [];
            const vectorPoints = points;
            for (const p of vectorPoints) {
                positions.push(p.flatMap((p2) => [p2.x, p2.y, p2.z]));
            }
            return positions;
        }
        else if (points instanceof Float32Array) {
            if (options?.floatArrayStride) {
                const positions = [];
                const stride = options.floatArrayStride * 3;
                for (let i = 0; i < points.length; i += stride) {
                    const linePoints = new Array(stride); // Pre-allocate memory for the line
                    for (let j = 0; j < stride; j++) {
                        linePoints[j] = points[i + j];
                    }
                    positions.push(linePoints);
                }
                return positions;
            }
            else {
                return [Array.from(points)];
            }
        }
        else if (points.length && points[0] instanceof Float32Array) {
            const positions = [];
            for (const p of points) {
                positions.push(Array.from(p));
            }
            return positions;
        }
        return [];
    }
    /**
     * Omit zero length lines predicate for the MeshesToLines function
     * @param p1 point1 position of the face
     * @param p2 point2 position of the face
     * @param p3 point3 position of the face
     * @returns original points or null if any edge length is zero
     */
    static OmitZeroLengthPredicate(p1, p2, p3) {
        const fileredPoints = [];
        // edge1
        if (p2.subtract(p1).lengthSquared() > 0) {
            fileredPoints.push([p1, p2]);
        }
        // edge2
        if (p3.subtract(p2).lengthSquared() > 0) {
            fileredPoints.push([p2, p3]);
        }
        // edge3
        if (p1.subtract(p3).lengthSquared() > 0) {
            fileredPoints.push([p3, p1]);
        }
        return fileredPoints.length === 0 ? null : fileredPoints;
    }
    /**
     * Omit duplicate lines predicate for the MeshesToLines function
     * @param p1 point1 position of the face
     * @param p2 point2 position of the face
     * @param p3 point3 position of the face
     * @param points array of points to search in
     * @returns original points or null if any edge length is zero
     */
    static OmitDuplicatesPredicate(p1, p2, p3, points) {
        const fileredPoints = [];
        // edge1
        if (!GreasedLineTools._SearchInPoints(p1, p2, points)) {
            fileredPoints.push([p1, p2]);
        }
        // edge2
        if (!GreasedLineTools._SearchInPoints(p2, p3, points)) {
            fileredPoints.push([p2, p3]);
        }
        // edge3
        if (!GreasedLineTools._SearchInPoints(p3, p1, points)) {
            fileredPoints.push([p3, p1]);
        }
        return fileredPoints.length === 0 ? null : fileredPoints;
    }
    static _SearchInPoints(p1, p2, points) {
        for (const ps of points) {
            for (let i = 0; i < ps.length; i++) {
                if (ps[i]?.equals(p1)) {
                    // find the first point
                    // if it has a sibling of p2 the line already exists
                    if (ps[i + 1]?.equals(p2) || ps[i - 1]?.equals(p2)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /**
     * Gets mesh triangles as line positions
     * @param meshes array of meshes
     * @param predicate predicate function which decides whether to include the mesh triangle/face in the ouput
     * @returns array of arrays of points
     */
    static MeshesToLines(meshes, predicate) {
        const points = [];
        for (let meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
            const mesh = meshes[meshIndex];
            const vertices = mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind);
            const indices = mesh.getIndices();
            if (vertices && indices) {
                for (let i = 0, ii = 0; i < indices.length; i++) {
                    const vi1 = indices[ii++] * 3;
                    const vi2 = indices[ii++] * 3;
                    const vi3 = indices[ii++] * 3;
                    const p1 = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(vertices[vi1], vertices[vi1 + 1], vertices[vi1 + 2]);
                    const p2 = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(vertices[vi2], vertices[vi2 + 1], vertices[vi2 + 2]);
                    const p3 = new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(vertices[vi3], vertices[vi3 + 1], vertices[vi3 + 2]);
                    if (predicate) {
                        const pointsFromPredicate = predicate(p1, p2, p3, points, i, vi1, mesh, meshIndex, vertices, indices);
                        if (pointsFromPredicate) {
                            for (const p of pointsFromPredicate) {
                                points.push(p);
                            }
                        }
                    }
                    else {
                        points.push([p1, p2], [p2, p3], [p3, p1]);
                    }
                }
            }
        }
        return points;
    }
    /**
     * Converts number coordinates to Vector3s
     * @param points number array of x, y, z, x, y z, ... coordinates
     * @returns Vector3 array
     */
    static ToVector3Array(points) {
        if (Array.isArray(points[0])) {
            const array = [];
            const inputArray = points;
            for (const subInputArray of inputArray) {
                const subArray = [];
                for (let i = 0; i < subInputArray.length; i += 3) {
                    subArray.push(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(subInputArray[i], subInputArray[i + 1], subInputArray[i + 2]));
                }
                array.push(subArray);
            }
            return array;
        }
        const inputArray = points;
        const array = [];
        for (let i = 0; i < inputArray.length; i += 3) {
            array.push(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(inputArray[i], inputArray[i + 1], inputArray[i + 2]));
        }
        return array;
    }
    /**
     * Gets a number array from a Vector3 array.
     * You can you for example to convert your Vector3[] offsets to the required number[] for the offsets option.
     * @param points Vector3 array
     * @returns an array of x, y, z coordinates as numbers [x, y, z, x, y, z, x, y, z, ....]
     */
    static ToNumberArray(points) {
        return points.flatMap((v) => [v.x, v.y, v.z]);
    }
    /**
     * Calculates the sum of points of every line and the number of points in each line.
     * This function is useful when you are drawing multiple lines in one mesh and you want
     * to know the counts. For example for creating an offsets table.
     * @param points point array
     * @returns points count info
     */
    static GetPointsCountInfo(points) {
        const counts = new Array(points.length);
        let total = 0;
        for (let n = points.length; n--;) {
            counts[n] = points[n].length / 3;
            total += counts[n];
        }
        return { total, counts };
    }
    /**
     * Gets the length of the line counting all it's segments length
     * @param data array of line points
     * @returns length of the line
     */
    static GetLineLength(data) {
        if (data.length === 0) {
            return 0;
        }
        let points;
        if (typeof data[0] === "number") {
            points = GreasedLineTools.ToVector3Array(data);
        }
        else {
            points = data;
        }
        const tmp = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0];
        let length = 0;
        for (let index = 0; index < points.length - 1; index++) {
            const point1 = points[index];
            const point2 = points[index + 1];
            length += point2.subtractToRef(point1, tmp).length();
        }
        return length;
    }
    /**
     * Gets the length from the beginning to each point of the line as array.
     * @param data array of line points
     * @param buf optional pre-allocated buffer to reduce memory pressure, should be at least `data.length * 4 / 3` bytes
     * @returns length array of the line
     */
    static GetLineLengthArray(data, buf) {
        const out = buf ? new Float32Array(buf, 0, data.length / 3) : new Float32Array(data.length / 3);
        let length = 0;
        for (let index = 0, pointsLength = data.length / 3 - 1; index < pointsLength; index++) {
            let x = data[index * 3 + 0];
            let y = data[index * 3 + 1];
            let z = data[index * 3 + 2];
            x -= data[index * 3 + 3];
            y -= data[index * 3 + 4];
            z -= data[index * 3 + 5];
            const currentLength = Math.sqrt(x * x + y * y + z * z);
            length += currentLength;
            out[index + 1] = length;
        }
        return out;
    }
    /**
     * Divides a segment into smaller segments.
     * A segment is a part of the line between it's two points.
     * @param point1 first point of the line
     * @param point2 second point of the line
     * @param segmentCount number of segments we want to have in the divided line
     * @returns
     */
    static SegmentizeSegmentByCount(point1, point2, segmentCount) {
        const dividedLinePoints = [];
        const diff = point2.subtract(point1);
        const divisor = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0];
        divisor.setAll(segmentCount);
        const segmentVector = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[1];
        diff.divideToRef(divisor, segmentVector);
        let nextPoint = point1.clone();
        dividedLinePoints.push(nextPoint);
        for (let index = 0; index < segmentCount; index++) {
            nextPoint = nextPoint.clone();
            dividedLinePoints.push(nextPoint.addInPlace(segmentVector));
        }
        return dividedLinePoints;
    }
    /**
     * Divides a line into segments.
     * A segment is a part of the line between it's two points.
     * @param what line points
     * @param segmentLength length of each segment of the resulting line (distance between two line points)
     * @returns line point
     */
    static SegmentizeLineBySegmentLength(what, segmentLength) {
        const subLines = what[0] instanceof _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3
            ? GreasedLineTools.GetLineSegments(what)
            : typeof what[0] === "number"
                ? GreasedLineTools.GetLineSegments(GreasedLineTools.ToVector3Array(what))
                : what;
        const points = [];
        for (const s of subLines) {
            if (s.length > segmentLength) {
                const segments = GreasedLineTools.SegmentizeSegmentByCount(s.point1, s.point2, Math.ceil(s.length / segmentLength));
                for (const seg of segments) {
                    points.push(seg);
                }
            }
            else {
                points.push(s.point1);
                points.push(s.point2);
            }
        }
        return points;
    }
    /**
     * Divides a line into segments.
     * A segment is a part of the line between it's two points.
     * @param what line points
     * @param segmentCount number of segments
     * @returns line point
     */
    static SegmentizeLineBySegmentCount(what, segmentCount) {
        const points = (typeof what[0] === "number" ? GreasedLineTools.ToVector3Array(what) : what);
        const segmentLength = GreasedLineTools.GetLineLength(points) / segmentCount;
        return GreasedLineTools.SegmentizeLineBySegmentLength(points, segmentLength);
    }
    /**
     * Gets line segments.
     * A segment is a part of the line between it's two points.
     * @param points line points
     * @returns segments information of the line segment including starting point, ending point and the distance between them
     */
    static GetLineSegments(points) {
        const segments = [];
        for (let index = 0; index < points.length - 1; index++) {
            const point1 = points[index];
            const point2 = points[index + 1];
            const length = point2.subtract(point1).length();
            segments.push({ point1, point2, length });
        }
        return segments;
    }
    /**
     * Gets the minimum and the maximum length of a line segment in the line.
     * A segment is a part of the line between it's two points.
     * @param points line points
     * @returns
     */
    static GetMinMaxSegmentLength(points) {
        const subLines = GreasedLineTools.GetLineSegments(points);
        const sorted = subLines.sort((s) => s.length);
        return {
            min: sorted[0].length,
            max: sorted[sorted.length - 1].length,
        };
    }
    /**
     * Finds the last visible position in world space of the line according to the visibility parameter
     * @param lineSegments segments of the line
     * @param lineLength total length of the line
     * @param visbility normalized value of visibility
     * @param localSpace if true the result will be in local space (default is false)
     * @returns world space coordinate of the last visible piece of the line
     */
    static GetPositionOnLineByVisibility(lineSegments, lineLength, visbility, localSpace = false) {
        const lengthVisibilityRatio = lineLength * visbility;
        let sumSegmentLengths = 0;
        let segmentIndex = 0;
        const lineSegmentsLength = lineSegments.length;
        for (let i = 0; i < lineSegmentsLength; i++) {
            if (lengthVisibilityRatio <= sumSegmentLengths + lineSegments[i].length) {
                segmentIndex = i;
                break;
            }
            sumSegmentLengths += lineSegments[i].length;
        }
        const s = (lengthVisibilityRatio - sumSegmentLengths) / lineSegments[segmentIndex].length;
        lineSegments[segmentIndex].point2.subtractToRef(lineSegments[segmentIndex].point1, _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0]);
        _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[1] = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[0].multiplyByFloats(s, s, s);
        if (!localSpace) {
            _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[1].addInPlace(lineSegments[segmentIndex].point1);
        }
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.TmpVectors.Vector3[1].clone();
    }
    /**
     * Creates lines in a shape of circle/arc.
     * A segment is a part of the line between it's two points.
     * @param radiusX radiusX of the circle
     * @param segments number of segments in the circle
     * @param z z coordinate of the points. Defaults to 0.
     * @param radiusY radiusY of the circle - you can draw an oval if using different values
     * @param segmentAngle angle offset of the segments. Defaults to Math.PI * 2 / segments. Change this value to draw a part of the circle.
     * @returns line points
     */
    static GetCircleLinePoints(radiusX, segments, z = 0, radiusY = radiusX, segmentAngle = (Math.PI * 2) / segments) {
        const points = [];
        for (let i = 0; i <= segments; i++) {
            points.push(new _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(Math.cos(i * segmentAngle) * radiusX, Math.sin(i * segmentAngle) * radiusY, z));
        }
        return points;
    }
    /**
     * Gets line points in a shape of a bezier curve
     * @param p0 bezier point0
     * @param p1 bezier point1
     * @param p2 bezier point2
     * @param segments number of segments in the curve
     * @returns
     */
    static GetBezierLinePoints(p0, p1, p2, segments) {
        return _Maths_math_path__WEBPACK_IMPORTED_MODULE_0__.Curve3.CreateQuadraticBezier(p0, p1, p2, segments)
            .getPoints()
            .flatMap((v) => [v.x, v.y, v.z]);
    }
    /**
     *
     * @param position position of the arrow cap (mainly you want to create a triangle, set widthUp and widthDown to the same value and omit widthStartUp and widthStartDown)
     * @param direction direction which the arrow points to
     * @param length length (size) of the arrow cap itself
     * @param widthUp the arrow width above the line
     * @param widthDown the arrow width belove the line
     * @param widthStartUp the arrow width at the start of the arrow above the line. In most scenarios this is 0.
     * @param widthStartDown the arrow width at the start of the arrow below the line. In most scenarios this is 0.
     * @returns
     */
    static GetArrowCap(position, direction, length, widthUp, widthDown, widthStartUp = 0, widthStartDown = 0) {
        const points = [position.clone(), position.add(direction.multiplyByFloats(length, length, length))];
        const widths = [widthUp, widthDown, widthStartUp, widthStartDown];
        return {
            points,
            widths,
        };
    }
    /**
     * Gets 3D positions of points from a text and font
     * @param text Text
     * @param size Size of the font
     * @param resolution Resolution of the font
     * @param fontData defines the font data (can be generated with http://gero3.github.io/facetype.js/)
     * @param z z coordinate
     * @param includeInner include the inner parts of the font in the result. Default true. If false, only the outlines will be returned.
     * @returns number[][] of 3D positions
     */
    static GetPointsFromText(text, size, resolution, fontData, z = 0, includeInner = true) {
        const allPoints = [];
        const shapePaths = (0,_Meshes_Builders_textBuilder__WEBPACK_IMPORTED_MODULE_3__.CreateTextShapePaths)(text, size, resolution, fontData);
        for (const sp of shapePaths) {
            for (const p of sp.paths) {
                const points = [];
                const points2d = p.getPoints();
                for (const p2d of points2d) {
                    points.push(p2d.x, p2d.y, z);
                }
                allPoints.push(points);
            }
            if (includeInner) {
                for (const h of sp.holes) {
                    const holes = [];
                    const points2d = h.getPoints();
                    for (const p2d of points2d) {
                        holes.push(p2d.x, p2d.y, z);
                    }
                    allPoints.push(holes);
                }
            }
        }
        return allPoints;
    }
    /**
     * Converts an array of Color3 to Uint8Array
     * @param colors Arrray of Color3
     * @returns Uin8Array of colors [r, g, b, a, r, g, b, a, ...]
     */
    static Color3toRGBAUint8(colors) {
        const colorTable = new Uint8Array(colors.length * 4);
        for (let i = 0, j = 0; i < colors.length; i++) {
            colorTable[j++] = colors[i].r * 255;
            colorTable[j++] = colors[i].g * 255;
            colorTable[j++] = colors[i].b * 255;
            colorTable[j++] = 255;
        }
        return colorTable;
    }
    /**
     * Creates a RawTexture from an RGBA color array and sets it on the plugin material instance.
     * @param name name of the texture
     * @param colors Uint8Array of colors
     * @param colorsSampling sampling mode of the created texture
     * @param scene Scene
     * @returns the colors texture
     */
    static CreateColorsTexture(name, colors, colorsSampling, scene) {
        const maxTextureSize = scene.getEngine().getCaps().maxTextureSize ?? 1;
        const width = colors.length > maxTextureSize ? maxTextureSize : colors.length;
        const height = Math.ceil(colors.length / maxTextureSize);
        if (height > 1) {
            colors = [...colors, ...Array(width * height - colors.length).fill(colors[0])];
        }
        const colorsArray = GreasedLineTools.Color3toRGBAUint8(colors);
        const colorsTexture = new _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_4__.RawTexture(colorsArray, width, height, _Engines_engine__WEBPACK_IMPORTED_MODULE_5__.Engine.TEXTUREFORMAT_RGBA, scene, false, true, colorsSampling);
        colorsTexture.name = name;
        return colorsTexture;
    }
    /**
     * A minimum size texture for the colors sampler2D when there is no colors texture defined yet.
     * For fast switching using the useColors property without the need to use defines.
     * @param scene Scene
     * @returns empty colors texture
     */
    static PrepareEmptyColorsTexture(scene) {
        if (!_Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.EmptyColorsTexture) {
            const colorsArray = new Uint8Array(4);
            _Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.EmptyColorsTexture = new _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_4__.RawTexture(colorsArray, 1, 1, _Engines_engine__WEBPACK_IMPORTED_MODULE_5__.Engine.TEXTUREFORMAT_RGBA, scene, false, false, _Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_4__.RawTexture.NEAREST_NEAREST);
            _Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.EmptyColorsTexture.name = "grlEmptyColorsTexture";
        }
        return _Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.EmptyColorsTexture;
    }
    /**
     * Diposes the shared empty colors texture
     */
    static DisposeEmptyColorsTexture() {
        _Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.EmptyColorsTexture?.dispose();
        _Materials_GreasedLine_greasedLineMaterialDefaults__WEBPACK_IMPORTED_MODULE_6__.GreasedLineMaterialDefaults.EmptyColorsTexture = null;
    }
    /**
     * Converts boolean to number.
     * @param bool the bool value
     * @returns 1 if true, 0 if false.
     */
    static BooleanToNumber(bool) {
        return bool ? 1 : 0;
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

/***/ "../serializers/dist/exportUtils.js":
/*!******************************************!*\
  !*** ../serializers/dist/exportUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConvertHandednessMatrix: () => (/* binding */ ConvertHandednessMatrix),
/* harmony export */   IsNoopNode: () => (/* binding */ IsNoopNode)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.constants */ "../core/dist/Maths/math.constants.js");
/* harmony import */ var core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Meshes/abstractMesh */ "../core/dist/Meshes/abstractMesh.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Matrix that converts handedness on the X-axis. Used to convert from LH to RH and vice versa.
 * @internal
 */
const ConvertHandednessMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.Compose(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1), core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity(), core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero());
/**
 * Checks if a node is a "noop" transform node, usually inserted by the glTF loader to correct handedness.
 * @internal
 */
function IsNoopNode(node, useRightHandedSystem) {
    if (!(node instanceof core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_2__.TransformNode)) {
        return false;
    }
    // Transform
    if (useRightHandedSystem) {
        const matrix = node.getWorldMatrix();
        if (!matrix.equalsWithEpsilon(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.IdentityReadOnly, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_1__.Epsilon)) {
            return false;
        }
    }
    else {
        const matrix = node.getWorldMatrix().multiplyToRef(ConvertHandednessMatrix, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
        if (!matrix.equalsWithEpsilon(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.IdentityReadOnly, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_1__.Epsilon)) {
            return false;
        }
    }
    // Geometry
    if (node instanceof core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_3__.AbstractMesh && node.geometry) {
        return false;
    }
    return true;
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

/***/ "../serializers/dist/glTF/2.0/bufferManager.js":
/*!*****************************************************!*\
  !*** ../serializers/dist/glTF/2.0/bufferManager.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferManager: () => (/* binding */ BufferManager)
/* harmony export */ });
/* harmony import */ var _dataWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataWriter */ "../serializers/dist/glTF/2.0/dataWriter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


function GetHighestByteAlignment(byteLength) {
    if (byteLength % 4 === 0) {
        return 4;
    }
    if (byteLength % 2 === 0) {
        return 2;
    }
    return 1;
}
/**
 * Utility class to centralize the management of binary data, bufferViews, and the objects that reference them.
 * @internal
 */
class BufferManager {
    constructor() {
        /**
         * Maps a bufferView to its data
         */
        this._bufferViewToData = new Map();
        /**
         * Maps a bufferView to glTF objects that reference it via a "bufferView" property (e.g. accessors, images)
         */
        this._bufferViewToProperties = new Map();
        /**
         * Maps an accessor to its bufferView
         */
        this._accessorToBufferView = new Map();
    }
    /**
     * Generates a binary buffer from the stored bufferViews. Also populates the bufferViews list.
     * @param bufferViews The list of bufferViews to be populated while writing the binary
     * @returns The binary buffer
     */
    generateBinary(bufferViews) {
        // Construct a DataWriter with the total byte length to prevent resizing
        let totalByteLength = 0;
        this._bufferViewToData.forEach((data) => {
            totalByteLength += data.byteLength;
        });
        const dataWriter = new _dataWriter__WEBPACK_IMPORTED_MODULE_0__.DataWriter(totalByteLength);
        // Order the bufferViews in descending order of their alignment requirements
        const orderedBufferViews = Array.from(this._bufferViewToData.keys()).sort((a, b) => GetHighestByteAlignment(b.byteLength) - GetHighestByteAlignment(a.byteLength));
        // Fill in the bufferViews list and missing bufferView index references while writing the binary
        for (const bufferView of orderedBufferViews) {
            bufferView.byteOffset = dataWriter.byteOffset;
            bufferViews.push(bufferView);
            const bufferViewIndex = bufferViews.length - 1;
            const properties = this.getPropertiesWithBufferView(bufferView);
            for (const object of properties) {
                object.bufferView = bufferViewIndex;
            }
            dataWriter.writeTypedArray(this._bufferViewToData.get(bufferView));
            this._bufferViewToData.delete(bufferView); // Try to free up memory ASAP
        }
        return dataWriter.getOutputData();
    }
    /**
     * Creates a buffer view based on the supplied arguments
     * @param data a TypedArray to create the bufferView for
     * @param byteStride byte distance between consecutive elements
     * @returns bufferView for glTF
     */
    createBufferView(data, byteStride) {
        const bufferView = {
            buffer: 0,
            byteOffset: undefined, // byteOffset will be set later, when we write the binary and decide bufferView ordering
            byteLength: data.byteLength,
            byteStride: byteStride,
        };
        this._bufferViewToData.set(bufferView, data);
        return bufferView;
    }
    /**
     * Creates an accessor based on the supplied arguments and assigns it to the bufferView
     * @param bufferView The glTF bufferView referenced by this accessor
     * @param type The type of the accessor
     * @param componentType The datatype of components in the attribute
     * @param count The number of attributes referenced by this accessor
     * @param byteOffset The offset relative to the start of the bufferView in bytes
     * @param minMax Minimum and maximum value of each component in this attribute
     * @param normalized Specifies whether integer data values are normalized before usage
     * @returns accessor for glTF
     */
    createAccessor(bufferView, type, componentType, count, byteOffset, minMax, normalized) {
        this._verifyBufferView(bufferView);
        const accessor = {
            bufferView: undefined, // bufferView will be set to a real index later, once we write the binary and decide bufferView ordering
            componentType: componentType,
            count: count,
            type: type,
            min: minMax?.min,
            max: minMax?.max,
            normalized: normalized,
            byteOffset: byteOffset,
        };
        this.setBufferView(accessor, bufferView);
        this._accessorToBufferView.set(accessor, bufferView);
        return accessor;
    }
    /**
     * Assigns a bufferView to a glTF object that references it
     * @param object The glTF object
     * @param bufferView The bufferView to assign
     */
    setBufferView(object, bufferView) {
        this._verifyBufferView(bufferView);
        const properties = this.getPropertiesWithBufferView(bufferView);
        properties.push(object);
    }
    /**
     * Removes buffer view from the binary data, as well as from all its known references
     * @param bufferView the bufferView to remove
     */
    removeBufferView(bufferView) {
        const properties = this.getPropertiesWithBufferView(bufferView);
        for (const object of properties) {
            if (object.bufferView !== undefined) {
                delete object.bufferView;
            }
        }
        this._bufferViewToData.delete(bufferView);
        this._bufferViewToProperties.delete(bufferView);
        this._accessorToBufferView.forEach((bv, accessor) => {
            if (bv === bufferView) {
                // Additionally, remove byteOffset from accessor referencing this bufferView
                if (accessor.byteOffset !== undefined) {
                    delete accessor.byteOffset;
                }
                this._accessorToBufferView.delete(accessor);
            }
        });
    }
    getBufferView(accessor) {
        const bufferView = this._accessorToBufferView.get(accessor);
        this._verifyBufferView(bufferView);
        return bufferView;
    }
    getPropertiesWithBufferView(bufferView) {
        this._verifyBufferView(bufferView);
        this._bufferViewToProperties.set(bufferView, this._bufferViewToProperties.get(bufferView) ?? []);
        return this._bufferViewToProperties.get(bufferView);
    }
    getData(bufferView) {
        this._verifyBufferView(bufferView);
        return this._bufferViewToData.get(bufferView);
    }
    _verifyBufferView(bufferView) {
        if (bufferView === undefined || !this._bufferViewToData.has(bufferView)) {
            throw new Error(`BufferView ${bufferView} not found in BufferManager.`);
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

/***/ "../serializers/dist/glTF/2.0/dataWriter.js":
/*!**************************************************!*\
  !*** ../serializers/dist/glTF/2.0/dataWriter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataWriter: () => (/* binding */ DataWriter)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

const TypedArrayToWriteMethod = new Map([
    [Int8Array, (d, b, v) => d.setInt8(b, v)],
    [Uint8Array, (dv, bo, v) => dv.setUint8(bo, v)],
    [Uint8ClampedArray, (dv, bo, v) => dv.setUint8(bo, v)],
    [Int16Array, (dv, bo, v) => dv.setInt16(bo, v, true)],
    [Uint16Array, (dv, bo, v) => dv.setUint16(bo, v, true)],
    [Int32Array, (dv, bo, v) => dv.setInt32(bo, v, true)],
    [Uint32Array, (dv, bo, v) => dv.setUint32(bo, v, true)],
    [Float32Array, (dv, bo, v) => dv.setFloat32(bo, v, true)],
    [Float64Array, (dv, bo, v) => dv.setFloat64(bo, v, true)],
]);
/** @internal */
class DataWriter {
    writeTypedArray(value) {
        this._checkGrowBuffer(value.byteLength);
        const setMethod = TypedArrayToWriteMethod.get(value.constructor);
        for (let i = 0; i < value.length; i++) {
            setMethod(this._dataView, this._byteOffset, value[i]);
            this._byteOffset += value.BYTES_PER_ELEMENT;
        }
    }
    constructor(byteLength) {
        this._data = new Uint8Array(byteLength);
        this._dataView = new DataView(this._data.buffer);
        this._byteOffset = 0;
    }
    get byteOffset() {
        return this._byteOffset;
    }
    getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset);
    }
    writeUInt8(value) {
        this._checkGrowBuffer(1);
        this._dataView.setUint8(this._byteOffset, value);
        this._byteOffset++;
    }
    writeInt8(value) {
        this._checkGrowBuffer(1);
        this._dataView.setInt8(this._byteOffset, value);
        this._byteOffset++;
    }
    writeInt16(entry) {
        this._checkGrowBuffer(2);
        this._dataView.setInt16(this._byteOffset, entry, true);
        this._byteOffset += 2;
    }
    writeUInt16(value) {
        this._checkGrowBuffer(2);
        this._dataView.setUint16(this._byteOffset, value, true);
        this._byteOffset += 2;
    }
    writeInt32(entry) {
        this._checkGrowBuffer(4);
        this._dataView.setInt32(this._byteOffset, entry, true);
        this._byteOffset += 4;
    }
    writeUInt32(value) {
        this._checkGrowBuffer(4);
        this._dataView.setUint32(this._byteOffset, value, true);
        this._byteOffset += 4;
    }
    writeFloat32(value) {
        this._checkGrowBuffer(4);
        this._dataView.setFloat32(this._byteOffset, value, true);
        this._byteOffset += 4;
    }
    writeFloat64(value) {
        this._checkGrowBuffer(8);
        this._dataView.setFloat64(this._byteOffset, value, true);
        this._byteOffset += 8;
    }
    _checkGrowBuffer(byteLength) {
        const newByteLength = this.byteOffset + byteLength;
        if (newByteLength > this._data.byteLength) {
            const newData = new Uint8Array(newByteLength * 2);
            newData.set(this._data);
            this._data = newData;
            this._dataView = new DataView(this._data.buffer);
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

/***/ "../serializers/dist/glTF/2.0/glTFAnimation.js":
/*!*****************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFAnimation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _GLTFAnimation: () => (/* binding */ _GLTFAnimation)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Animations/animation */ "../core/dist/Animations/animation.js");
/* harmony import */ var core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var core_Morph_morphTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Morph/morphTarget */ "../core/dist/Morph/morphTarget.js");
/* harmony import */ var core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Meshes/mesh */ "../core/dist/Meshes/mesh.js");
/* harmony import */ var core_Cameras_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Cameras/camera */ "../core/dist/Cameras/camera.js");
/* harmony import */ var core_Lights_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Lights/light */ "../core/dist/Lights/light.js");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glTFUtilities */ "../serializers/dist/glTF/2.0/glTFUtilities.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










/**
 * @internal
 * Enum for handling in tangent and out tangent.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var _TangentType;
(function (_TangentType) {
    /**
     * Specifies that input tangents are used.
     */
    _TangentType[_TangentType["INTANGENT"] = 0] = "INTANGENT";
    /**
     * Specifies that output tangents are used.
     */
    _TangentType[_TangentType["OUTTANGENT"] = 1] = "OUTTANGENT";
})(_TangentType || (_TangentType = {}));
/**
 * @internal
 * Utility class for generating glTF animation data from BabylonJS.
 */
class _GLTFAnimation {
    /**
     * Determine if a node is transformable - ie has properties it should be part of animation of transformation.
     * @param babylonNode the node to test
     * @returns true if can be animated, false otherwise. False if the parameter is null or undefined.
     */
    static _IsTransformable(babylonNode) {
        return babylonNode && (babylonNode instanceof core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_3__.TransformNode || babylonNode instanceof core_Cameras_camera__WEBPACK_IMPORTED_MODULE_6__.Camera || babylonNode instanceof core_Lights_light__WEBPACK_IMPORTED_MODULE_7__.Light);
    }
    /**
     * @ignore
     *
     * Creates glTF channel animation from BabylonJS animation.
     * @param babylonTransformNode - BabylonJS mesh.
     * @param animation - animation.
     * @param animationChannelTargetPath - The target animation channel.
     * @param useQuaternion - Specifies if quaternions are used.
     * @returns nullable IAnimationData
     */
    static _CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate) {
        if (this._IsTransformable(babylonTransformNode)) {
            const inputs = [];
            const outputs = [];
            const keyFrames = animation.getKeys();
            const minMaxKeyFrames = _GLTFAnimation._CalculateMinMaxKeyFrames(keyFrames);
            const interpolationOrBake = _GLTFAnimation._DeduceInterpolation(keyFrames, animationChannelTargetPath, useQuaternion);
            const interpolation = interpolationOrBake.interpolationType;
            const shouldBakeAnimation = interpolationOrBake.shouldBakeAnimation;
            if (shouldBakeAnimation) {
                _GLTFAnimation._CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minMaxKeyFrames.min, minMaxKeyFrames.max, animation.framePerSecond, animationSampleRate, inputs, outputs, minMaxKeyFrames, useQuaternion);
            }
            else {
                if (interpolation === "LINEAR" /* AnimationSamplerInterpolation.LINEAR */ || interpolation === "STEP" /* AnimationSamplerInterpolation.STEP */) {
                    _GLTFAnimation._CreateLinearOrStepAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion);
                }
                else if (interpolation === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
                    _GLTFAnimation._CreateCubicSplineAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion);
                }
                else {
                    _GLTFAnimation._CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minMaxKeyFrames.min, minMaxKeyFrames.max, animation.framePerSecond, animationSampleRate, inputs, outputs, minMaxKeyFrames, useQuaternion);
                }
            }
            if (inputs.length && outputs.length) {
                const result = {
                    inputs: inputs,
                    outputs: outputs,
                    samplerInterpolation: interpolation,
                    inputsMin: shouldBakeAnimation ? minMaxKeyFrames.min : core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.FloatRound(minMaxKeyFrames.min / animation.framePerSecond),
                    inputsMax: shouldBakeAnimation ? minMaxKeyFrames.max : core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.FloatRound(minMaxKeyFrames.max / animation.framePerSecond),
                };
                return result;
            }
        }
        return null;
    }
    static _DeduceAnimationInfo(animation) {
        let animationChannelTargetPath = null;
        let dataAccessorType = "VEC3" /* AccessorType.VEC3 */;
        let useQuaternion = false;
        const property = animation.targetProperty.split(".");
        switch (property[0]) {
            case "scaling": {
                animationChannelTargetPath = "scale" /* AnimationChannelTargetPath.SCALE */;
                break;
            }
            case "position": {
                animationChannelTargetPath = "translation" /* AnimationChannelTargetPath.TRANSLATION */;
                break;
            }
            case "rotation": {
                dataAccessorType = "VEC4" /* AccessorType.VEC4 */;
                animationChannelTargetPath = "rotation" /* AnimationChannelTargetPath.ROTATION */;
                break;
            }
            case "rotationQuaternion": {
                dataAccessorType = "VEC4" /* AccessorType.VEC4 */;
                useQuaternion = true;
                animationChannelTargetPath = "rotation" /* AnimationChannelTargetPath.ROTATION */;
                break;
            }
            case "influence": {
                dataAccessorType = "SCALAR" /* AccessorType.SCALAR */;
                animationChannelTargetPath = "weights" /* AnimationChannelTargetPath.WEIGHTS */;
                break;
            }
            default: {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Error(`Unsupported animatable property ${property[0]}`);
            }
        }
        if (animationChannelTargetPath) {
            return { animationChannelTargetPath: animationChannelTargetPath, dataAccessorType: dataAccessorType, useQuaternion: useQuaternion };
        }
        else {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("animation channel target path and data accessor type could be deduced");
        }
        return null;
    }
    /**
     * @ignore
     * Create node animations from the transform node animations
     * @param babylonNode
     * @param runtimeGLTFAnimation
     * @param idleGLTFAnimations
     * @param nodeMap
     * @param nodes
     * @param bufferManager
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    static _CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, bufferManager, bufferViews, accessors, animationSampleRate, useRightHanded, shouldExportAnimation) {
        let glTFAnimation;
        if (_GLTFAnimation._IsTransformable(babylonNode)) {
            if (babylonNode.animations) {
                for (const animation of babylonNode.animations) {
                    if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                        continue;
                    }
                    const animationInfo = _GLTFAnimation._DeduceAnimationInfo(animation);
                    if (animationInfo) {
                        glTFAnimation = {
                            name: animation.name,
                            samplers: [],
                            channels: [],
                        };
                        _GLTFAnimation._AddAnimation(`${animation.name}`, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, useRightHanded);
                        if (glTFAnimation.samplers.length && glTFAnimation.channels.length) {
                            idleGLTFAnimations.push(glTFAnimation);
                        }
                    }
                }
            }
        }
    }
    /**
     * @ignore
     * Create individual morph animations from the mesh's morph target animation tracks
     * @param babylonNode
     * @param runtimeGLTFAnimation
     * @param idleGLTFAnimations
     * @param nodeMap
     * @param nodes
     * @param bufferManager
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    static _CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, nodeMap, nodes, bufferManager, bufferViews, accessors, animationSampleRate, useRightHanded, shouldExportAnimation) {
        let glTFAnimation;
        if (babylonNode instanceof core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_5__.Mesh) {
            const morphTargetManager = babylonNode.morphTargetManager;
            if (morphTargetManager) {
                for (let i = 0; i < morphTargetManager.numTargets; ++i) {
                    const morphTarget = morphTargetManager.getTarget(i);
                    for (const animation of morphTarget.animations) {
                        if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                            continue;
                        }
                        const combinedAnimation = new core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation(`${animation.name}`, "influence", animation.framePerSecond, animation.dataType, animation.loopMode, animation.enableBlending);
                        const combinedAnimationKeys = [];
                        const animationKeys = animation.getKeys();
                        for (let j = 0; j < animationKeys.length; ++j) {
                            const animationKey = animationKeys[j];
                            for (let k = 0; k < morphTargetManager.numTargets; ++k) {
                                if (k == i) {
                                    combinedAnimationKeys.push(animationKey);
                                }
                                else {
                                    combinedAnimationKeys.push({ frame: animationKey.frame, value: 0 });
                                }
                            }
                        }
                        combinedAnimation.setKeys(combinedAnimationKeys, true);
                        const animationInfo = _GLTFAnimation._DeduceAnimationInfo(combinedAnimation);
                        if (animationInfo) {
                            glTFAnimation = {
                                name: combinedAnimation.name,
                                samplers: [],
                                channels: [],
                            };
                            _GLTFAnimation._AddAnimation(animation.name, animation.hasRunningRuntimeAnimations ? runtimeGLTFAnimation : glTFAnimation, babylonNode, combinedAnimation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, useRightHanded, morphTargetManager.numTargets);
                            if (glTFAnimation.samplers.length && glTFAnimation.channels.length) {
                                idleGLTFAnimations.push(glTFAnimation);
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * @internal
     * Create node and morph animations from the animation groups
     * @param babylonScene
     * @param glTFAnimations
     * @param nodeMap
     * @param nodes
     * @param bufferManager
     * @param bufferViews
     * @param accessors
     * @param animationSampleRate
     */
    static _CreateNodeAndMorphAnimationFromAnimationGroups(babylonScene, glTFAnimations, nodeMap, bufferManager, bufferViews, accessors, animationSampleRate, leftHandedNodes, shouldExportAnimation) {
        let glTFAnimation;
        if (babylonScene.animationGroups) {
            const animationGroups = babylonScene.animationGroups;
            for (const animationGroup of animationGroups) {
                const morphAnimations = new Map();
                const sampleAnimations = new Map();
                const morphAnimationMeshes = new Set();
                const animationGroupFrameDiff = animationGroup.to - animationGroup.from;
                glTFAnimation = {
                    name: animationGroup.name,
                    channels: [],
                    samplers: [],
                };
                for (let i = 0; i < animationGroup.targetedAnimations.length; ++i) {
                    const targetAnimation = animationGroup.targetedAnimations[i];
                    const target = targetAnimation.target;
                    const animation = targetAnimation.animation;
                    if (shouldExportAnimation && !shouldExportAnimation(animation)) {
                        continue;
                    }
                    const convertToRightHanded = leftHandedNodes.has(target);
                    if (this._IsTransformable(target) || (target.length === 1 && this._IsTransformable(target[0]))) {
                        const animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            const babylonTransformNode = this._IsTransformable(target) ? target : this._IsTransformable(target[0]) ? target[0] : null;
                            if (babylonTransformNode) {
                                _GLTFAnimation._AddAnimation(`${animation.name}`, glTFAnimation, babylonTransformNode, animation, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, convertToRightHanded);
                            }
                        }
                    }
                    else if (target instanceof core_Morph_morphTarget__WEBPACK_IMPORTED_MODULE_4__.MorphTarget || (target.length === 1 && target[0] instanceof core_Morph_morphTarget__WEBPACK_IMPORTED_MODULE_4__.MorphTarget)) {
                        const animationInfo = _GLTFAnimation._DeduceAnimationInfo(targetAnimation.animation);
                        if (animationInfo) {
                            const babylonMorphTarget = target instanceof core_Morph_morphTarget__WEBPACK_IMPORTED_MODULE_4__.MorphTarget ? target : target[0];
                            if (babylonMorphTarget) {
                                const babylonMorphTargetManager = babylonScene.morphTargetManagers.find((morphTargetManager) => {
                                    for (let j = 0; j < morphTargetManager.numTargets; ++j) {
                                        if (morphTargetManager.getTarget(j) === babylonMorphTarget) {
                                            return true;
                                        }
                                    }
                                    return false;
                                });
                                if (babylonMorphTargetManager) {
                                    const babylonMesh = babylonScene.meshes.find((mesh) => {
                                        return mesh.morphTargetManager === babylonMorphTargetManager;
                                    });
                                    if (babylonMesh) {
                                        if (!morphAnimations.has(babylonMesh)) {
                                            morphAnimations.set(babylonMesh, new Map());
                                        }
                                        morphAnimations.get(babylonMesh)?.set(babylonMorphTarget, animation);
                                        morphAnimationMeshes.add(babylonMesh);
                                        sampleAnimations.set(babylonMesh, animation);
                                    }
                                }
                            }
                        }
                    }
                    else {
                        // this is the place for the KHR_animation_pointer.
                    }
                }
                morphAnimationMeshes.forEach((mesh) => {
                    const morphTargetManager = mesh.morphTargetManager;
                    let combinedAnimationGroup = null;
                    const animationKeys = [];
                    const sampleAnimation = sampleAnimations.get(mesh);
                    const sampleAnimationKeys = sampleAnimation.getKeys();
                    const numAnimationKeys = sampleAnimationKeys.length;
                    /*
                        Due to how glTF expects morph target animation data to be formatted, we need to rearrange the individual morph target animation tracks,
                        such that we have a single animation, where a given keyframe input value has successive output values for each morph target belonging to the manager.
                        See: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations

                        We do this via constructing a new Animation track, and interleaving the frames of each morph target animation track in the current Animation Group
                        We reuse the Babylon Animation data structure for ease of handling export of cubic spline animation keys, and to reuse the
                        existing _GLTFAnimation.AddAnimation codepath with minimal modification, however the constructed Babylon Animation is NOT intended for use in-engine.
                    */
                    for (let i = 0; i < numAnimationKeys; ++i) {
                        for (let j = 0; j < morphTargetManager.numTargets; ++j) {
                            const morphTarget = morphTargetManager.getTarget(j);
                            const animationsByMorphTarget = morphAnimations.get(mesh);
                            if (animationsByMorphTarget) {
                                const morphTargetAnimation = animationsByMorphTarget.get(morphTarget);
                                if (morphTargetAnimation) {
                                    if (!combinedAnimationGroup) {
                                        combinedAnimationGroup = new core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation(`${animationGroup.name}_${mesh.name}_MorphWeightAnimation`, "influence", morphTargetAnimation.framePerSecond, core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_FLOAT, morphTargetAnimation.loopMode, morphTargetAnimation.enableBlending);
                                    }
                                    animationKeys.push(morphTargetAnimation.getKeys()[i]);
                                }
                                else {
                                    animationKeys.push({
                                        frame: animationGroup.from + (animationGroupFrameDiff / numAnimationKeys) * i,
                                        value: morphTarget.influence,
                                        inTangent: sampleAnimationKeys[0].inTangent ? 0 : undefined,
                                        outTangent: sampleAnimationKeys[0].outTangent ? 0 : undefined,
                                    });
                                }
                            }
                        }
                    }
                    combinedAnimationGroup.setKeys(animationKeys, true);
                    const animationInfo = _GLTFAnimation._DeduceAnimationInfo(combinedAnimationGroup);
                    if (animationInfo) {
                        _GLTFAnimation._AddAnimation(`${animationGroup.name}_${mesh.name}_MorphWeightAnimation`, glTFAnimation, mesh, combinedAnimationGroup, animationInfo.dataAccessorType, animationInfo.animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, animationInfo.useQuaternion, animationSampleRate, false, morphTargetManager?.numTargets);
                    }
                });
                if (glTFAnimation.channels.length && glTFAnimation.samplers.length) {
                    glTFAnimations.push(glTFAnimation);
                }
            }
        }
    }
    static _AddAnimation(name, glTFAnimation, babylonTransformNode, animation, dataAccessorType, animationChannelTargetPath, nodeMap, bufferManager, bufferViews, accessors, useQuaternion, animationSampleRate, convertToRightHanded, morphAnimationChannels) {
        const animationData = _GLTFAnimation._CreateNodeAnimation(babylonTransformNode, animation, animationChannelTargetPath, useQuaternion, animationSampleRate);
        let bufferView;
        let accessor;
        let keyframeAccessorIndex;
        let dataAccessorIndex;
        let animationSampler;
        let animationChannel;
        if (animationData) {
            /*
             * Now that we have the glTF converted morph target animation data,
             * we can remove redundant input data so that we have n input frames,
             * and morphAnimationChannels * n output frames
             */
            if (morphAnimationChannels) {
                let index = 0;
                let currentInput = 0;
                const newInputs = [];
                while (animationData.inputs.length > 0) {
                    currentInput = animationData.inputs.shift();
                    if (index % morphAnimationChannels == 0) {
                        newInputs.push(currentInput);
                    }
                    index++;
                }
                animationData.inputs = newInputs;
            }
            const nodeIndex = nodeMap.get(babylonTransformNode);
            // Create buffer view and accessor for key frames.
            const inputData = new Float32Array(animationData.inputs);
            bufferView = bufferManager.createBufferView(inputData);
            accessor = bufferManager.createAccessor(bufferView, "SCALAR" /* AccessorType.SCALAR */, 5126 /* AccessorComponentType.FLOAT */, animationData.inputs.length, undefined, {
                min: [animationData.inputsMin],
                max: [animationData.inputsMax],
            });
            accessors.push(accessor);
            keyframeAccessorIndex = accessors.length - 1;
            // Perform conversions on keyed values while also building their buffer.
            const rotationQuaternion = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
            const eulerVec3 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            const position = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            const isCamera = babylonTransformNode instanceof core_Cameras_camera__WEBPACK_IMPORTED_MODULE_6__.Camera;
            const elementCount = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_8__.GetAccessorElementCount)(dataAccessorType);
            const outputData = new Float32Array(animationData.outputs.length * elementCount);
            animationData.outputs.forEach(function (output, index) {
                let outputToWrite = output;
                switch (animationChannelTargetPath) {
                    case "translation" /* AnimationChannelTargetPath.TRANSLATION */:
                        if (convertToRightHanded) {
                            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, position);
                            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_8__.ConvertToRightHandedPosition)(position);
                            position.toArray(outputToWrite);
                        }
                        break;
                    case "rotation" /* AnimationChannelTargetPath.ROTATION */:
                        if (output.length === 4) {
                            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(output, 0, rotationQuaternion);
                        }
                        else {
                            outputToWrite = new Array(4); // Will need 4, not 3, for a quaternion
                            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(output, 0, eulerVec3);
                            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerVectorToRef(eulerVec3, rotationQuaternion);
                        }
                        if (convertToRightHanded) {
                            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_8__.ConvertToRightHandedRotation)(rotationQuaternion);
                            if (isCamera) {
                                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_8__.Rotate180Y)(rotationQuaternion);
                            }
                        }
                        rotationQuaternion.toArray(outputToWrite);
                        break;
                }
                outputData.set(outputToWrite, index * elementCount);
            });
            // Create buffer view and accessor for keyed values.
            bufferView = bufferManager.createBufferView(outputData);
            accessor = bufferManager.createAccessor(bufferView, dataAccessorType, 5126 /* AccessorComponentType.FLOAT */, animationData.outputs.length);
            accessors.push(accessor);
            dataAccessorIndex = accessors.length - 1;
            // create sampler
            animationSampler = {
                interpolation: animationData.samplerInterpolation,
                input: keyframeAccessorIndex,
                output: dataAccessorIndex,
            };
            glTFAnimation.samplers.push(animationSampler);
            // create channel
            animationChannel = {
                sampler: glTFAnimation.samplers.length - 1,
                target: {
                    node: nodeIndex,
                    path: animationChannelTargetPath,
                },
            };
            glTFAnimation.channels.push(animationChannel);
        }
    }
    /**
     * Create a baked animation
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation corresponding to the BabylonJS mesh
     * @param animationChannelTargetPath animation target channel
     * @param minFrame minimum animation frame
     * @param maxFrame maximum animation frame
     * @param fps frames per second of the animation
     * @param sampleRate
     * @param inputs input key frames of the animation
     * @param outputs output key frame data of the animation
     * @param minMaxFrames
     * @param minMaxFrames.min
     * @param minMaxFrames.max
     * @param useQuaternion specifies if quaternions should be used
     */
    static _CreateBakedAnimation(babylonTransformNode, animation, animationChannelTargetPath, minFrame, maxFrame, fps, sampleRate, inputs, outputs, minMaxFrames, useQuaternion) {
        let value;
        const quaternionCache = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
        let previousTime = null;
        let time;
        let maxUsedFrame = null;
        let currKeyFrame = null;
        let nextKeyFrame = null;
        let prevKeyFrame = null;
        let endFrame = null;
        minMaxFrames.min = core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.FloatRound(minFrame / fps);
        const keyFrames = animation.getKeys();
        for (let i = 0, length = keyFrames.length; i < length; ++i) {
            endFrame = null;
            currKeyFrame = keyFrames[i];
            if (i + 1 < length) {
                nextKeyFrame = keyFrames[i + 1];
                if ((currKeyFrame.value.equals && currKeyFrame.value.equals(nextKeyFrame.value)) || currKeyFrame.value === nextKeyFrame.value) {
                    if (i === 0) {
                        // set the first frame to itself
                        endFrame = currKeyFrame.frame;
                    }
                    else {
                        continue;
                    }
                }
                else {
                    endFrame = nextKeyFrame.frame;
                }
            }
            else {
                // at the last key frame
                prevKeyFrame = keyFrames[i - 1];
                if ((currKeyFrame.value.equals && currKeyFrame.value.equals(prevKeyFrame.value)) || currKeyFrame.value === prevKeyFrame.value) {
                    continue;
                }
                else {
                    endFrame = maxFrame;
                }
            }
            if (endFrame) {
                for (let f = currKeyFrame.frame; f <= endFrame; f += sampleRate) {
                    time = core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.FloatRound(f / fps);
                    if (time === previousTime) {
                        continue;
                    }
                    previousTime = time;
                    maxUsedFrame = time;
                    const state = {
                        key: 0,
                        repeatCount: 0,
                        loopMode: animation.loopMode,
                    };
                    value = animation._interpolate(f, state);
                    _GLTFAnimation._SetInterpolatedValue(babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, useQuaternion);
                }
            }
        }
        if (maxUsedFrame) {
            minMaxFrames.max = maxUsedFrame;
        }
    }
    static _ConvertFactorToVector3OrQuaternion(factor, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion) {
        const basePositionRotationOrScale = _GLTFAnimation._GetBasePositionRotationOrScale(babylonTransformNode, animationChannelTargetPath, useQuaternion);
        // handles single component x, y, z or w component animation by using a base property and animating over a component.
        const property = animation.targetProperty.split(".");
        const componentName = property ? property[1] : ""; // x, y, z, or w component
        const value = useQuaternion ? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArray(basePositionRotationOrScale).normalize() : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(basePositionRotationOrScale);
        switch (componentName) {
            case "x":
            case "y":
            case "z": {
                value[componentName] = factor;
                break;
            }
            case "w": {
                value.w = factor;
                break;
            }
            default: {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Error(`glTFAnimation: Unsupported component name "${componentName}"!`);
            }
        }
        return value;
    }
    static _SetInterpolatedValue(babylonTransformNode, value, time, animation, animationChannelTargetPath, quaternionCache, inputs, outputs, useQuaternion) {
        let cacheValue;
        inputs.push(time);
        if (animationChannelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */) {
            outputs.push([value]);
            return;
        }
        if (animation.dataType === core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_FLOAT) {
            value = this._ConvertFactorToVector3OrQuaternion(value, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion);
        }
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
            if (useQuaternion) {
                quaternionCache = value;
            }
            else {
                cacheValue = value;
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRollToRef(cacheValue.y, cacheValue.x, cacheValue.z, quaternionCache);
            }
            outputs.push(quaternionCache.asArray());
        }
        else {
            // scaling and position animation
            cacheValue = value;
            outputs.push(cacheValue.asArray());
        }
    }
    /**
     * Creates linear animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    static _CreateLinearOrStepAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion) {
        for (const keyFrame of animation.getKeys()) {
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion);
        }
    }
    /**
     * Creates cubic spline animation from the animation key frames
     * @param babylonTransformNode BabylonJS mesh
     * @param animation BabylonJS animation
     * @param animationChannelTargetPath The target animation channel
     * @param inputs Array to store the key frame times
     * @param outputs Array to store the key frame data
     * @param useQuaternion Specifies if quaternions are used in the animation
     */
    static _CreateCubicSplineAnimation(babylonTransformNode, animation, animationChannelTargetPath, inputs, outputs, useQuaternion) {
        animation.getKeys().forEach(function (keyFrame) {
            inputs.push(keyFrame.frame / animation.framePerSecond); // keyframes in seconds.
            _GLTFAnimation._AddSplineTangent(_TangentType.INTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */, keyFrame, useQuaternion);
            _GLTFAnimation._AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion);
            _GLTFAnimation._AddSplineTangent(_TangentType.OUTTANGENT, outputs, animationChannelTargetPath, "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */, keyFrame, useQuaternion);
        });
    }
    static _GetBasePositionRotationOrScale(babylonTransformNode, animationChannelTargetPath, useQuaternion) {
        let basePositionRotationOrScale;
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
            if (useQuaternion) {
                const q = babylonTransformNode.rotationQuaternion;
                basePositionRotationOrScale = (q ?? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity()).asArray();
            }
            else {
                const r = babylonTransformNode.rotation;
                basePositionRotationOrScale = (r ?? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()).asArray();
            }
        }
        else if (animationChannelTargetPath === "translation" /* AnimationChannelTargetPath.TRANSLATION */) {
            const p = babylonTransformNode.position;
            basePositionRotationOrScale = (p ?? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()).asArray();
        }
        else {
            // scale
            const s = babylonTransformNode.scaling;
            basePositionRotationOrScale = (s ?? core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.One()).asArray();
        }
        return basePositionRotationOrScale;
    }
    /**
     * Adds a key frame value
     * @param keyFrame
     * @param animation
     * @param outputs
     * @param animationChannelTargetPath
     * @param babylonTransformNode
     * @param useQuaternion
     */
    static _AddKeyframeValue(keyFrame, animation, outputs, animationChannelTargetPath, babylonTransformNode, useQuaternion) {
        let newPositionRotationOrScale;
        const animationType = animation.dataType;
        if (animationType === core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_VECTOR3) {
            let value = keyFrame.value.asArray();
            if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                const array = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArray(value);
                const rotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z);
                value = rotationQuaternion.asArray();
            }
            outputs.push(value); // scale  vector.
        }
        else if (animationType === core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_FLOAT) {
            if (animationChannelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */) {
                outputs.push([keyFrame.value]);
            }
            else {
                // handles single component x, y, z or w component animation by using a base property and animating over a component.
                newPositionRotationOrScale = this._ConvertFactorToVector3OrQuaternion(keyFrame.value, babylonTransformNode, animation, animationChannelTargetPath, useQuaternion);
                if (newPositionRotationOrScale) {
                    if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                        const posRotScale = useQuaternion
                            ? newPositionRotationOrScale
                            : core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(newPositionRotationOrScale.y, newPositionRotationOrScale.x, newPositionRotationOrScale.z).normalize();
                        outputs.push(posRotScale.asArray());
                    }
                    outputs.push(newPositionRotationOrScale.asArray());
                }
            }
        }
        else if (animationType === core_Animations_animation__WEBPACK_IMPORTED_MODULE_2__.Animation.ANIMATIONTYPE_QUATERNION) {
            outputs.push(keyFrame.value.normalize().asArray());
        }
        else {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("glTFAnimation: Unsupported key frame values for animation!");
        }
    }
    /**
     * @internal
     * Determine the interpolation based on the key frames
     * @param keyFrames
     * @param animationChannelTargetPath
     * @param useQuaternion
     */
    static _DeduceInterpolation(keyFrames, animationChannelTargetPath, useQuaternion) {
        let interpolationType;
        let shouldBakeAnimation = false;
        let key;
        if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */ && !useQuaternion) {
            return { interpolationType: "LINEAR" /* AnimationSamplerInterpolation.LINEAR */, shouldBakeAnimation: true };
        }
        for (let i = 0, length = keyFrames.length; i < length; ++i) {
            key = keyFrames[i];
            if (key.inTangent || key.outTangent) {
                if (interpolationType) {
                    if (interpolationType !== "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    interpolationType = "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */;
                }
            }
            else {
                if (interpolationType) {
                    if (interpolationType === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */ ||
                        (key.interpolation && key.interpolation === 1 /* AnimationKeyInterpolation.STEP */ && interpolationType !== "STEP" /* AnimationSamplerInterpolation.STEP */)) {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                        shouldBakeAnimation = true;
                        break;
                    }
                }
                else {
                    if (key.interpolation && key.interpolation === 1 /* AnimationKeyInterpolation.STEP */) {
                        interpolationType = "STEP" /* AnimationSamplerInterpolation.STEP */;
                    }
                    else {
                        interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
                    }
                }
            }
        }
        if (!interpolationType) {
            interpolationType = "LINEAR" /* AnimationSamplerInterpolation.LINEAR */;
        }
        return { interpolationType: interpolationType, shouldBakeAnimation: shouldBakeAnimation };
    }
    /**
     * Adds an input tangent or output tangent to the output data
     * If an input tangent or output tangent is missing, it uses the zero vector or zero quaternion
     * @param tangentType Specifies which type of tangent to handle (inTangent or outTangent)
     * @param outputs The animation data by keyframe
     * @param animationChannelTargetPath The target animation channel
     * @param interpolation The interpolation type
     * @param keyFrame The key frame with the animation data
     * @param useQuaternion Specifies if quaternions are used
     */
    static _AddSplineTangent(tangentType, outputs, animationChannelTargetPath, interpolation, keyFrame, useQuaternion) {
        let tangent;
        const tangentValue = tangentType === _TangentType.INTANGENT ? keyFrame.inTangent : keyFrame.outTangent;
        if (interpolation === "CUBICSPLINE" /* AnimationSamplerInterpolation.CUBICSPLINE */) {
            if (animationChannelTargetPath === "rotation" /* AnimationChannelTargetPath.ROTATION */) {
                if (tangentValue) {
                    if (useQuaternion) {
                        tangent = tangentValue.asArray();
                    }
                    else {
                        const array = tangentValue;
                        tangent = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationYawPitchRoll(array.y, array.x, array.z).asArray();
                    }
                }
                else {
                    tangent = [0, 0, 0, 0];
                }
            }
            else if (animationChannelTargetPath === "weights" /* AnimationChannelTargetPath.WEIGHTS */) {
                if (tangentValue) {
                    tangent = [tangentValue];
                }
                else {
                    tangent = [0];
                }
            }
            else {
                if (tangentValue) {
                    tangent = tangentValue.asArray();
                }
                else {
                    tangent = [0, 0, 0];
                }
            }
            outputs.push(tangent);
        }
    }
    /**
     * Get the minimum and maximum key frames' frame values
     * @param keyFrames animation key frames
     * @returns the minimum and maximum key frame value
     */
    static _CalculateMinMaxKeyFrames(keyFrames) {
        let min = Infinity;
        let max = -Infinity;
        keyFrames.forEach(function (keyFrame) {
            min = Math.min(min, keyFrame.frame);
            max = Math.max(max, keyFrame.frame);
        });
        return { min: min, max: max };
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

/***/ "../serializers/dist/glTF/2.0/glTFData.js":
/*!************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFData.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFData: () => (/* binding */ GLTFData)
/* harmony export */ });
/* harmony import */ var core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/fileTools */ "../core/dist/Misc/fileTools.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Class for holding and downloading glTF file data
 */
class GLTFData {
    constructor() {
        /**
         * Object which contains the file name as the key and its data as the value
         */
        this.files = {};
    }
    /**
     * @deprecated Use files instead
     */
    get glTFFiles() {
        return this.files;
    }
    /**
     * Downloads the glTF data as files based on their names and data
     */
    downloadFiles() {
        for (const key in this.files) {
            const value = this.files[key];
            const blob = new Blob([value], { type: (0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_0__.GetMimeType)(key) });
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Download(blob, key);
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

/***/ "../serializers/dist/glTF/2.0/glTFExporter.js":
/*!****************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFExporter.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFExporter: () => (/* binding */ GLTFExporter)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Meshes/abstractMesh */ "../core/dist/Meshes/abstractMesh.js");
/* harmony import */ var core_Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Meshes/instancedMesh */ "../core/dist/Meshes/instancedMesh.js");
/* harmony import */ var core_Materials_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Materials/material */ "../core/dist/Materials/material.js");
/* harmony import */ var core_Engines_engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Engines/engine */ "../core/dist/Engines/engine.js");
/* harmony import */ var core_Engines_engineStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./glTFMaterialExporter */ "../serializers/dist/glTF/2.0/glTFMaterialExporter.js");
/* harmony import */ var _glTFData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./glTFData */ "../serializers/dist/glTF/2.0/glTFData.js");
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./glTFUtilities */ "../serializers/dist/glTF/2.0/glTFUtilities.js");
/* harmony import */ var _exportUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../exportUtils */ "../serializers/dist/exportUtils.js");
/* harmony import */ var _bufferManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bufferManager */ "../serializers/dist/glTF/2.0/bufferManager.js");
/* harmony import */ var core_Cameras_camera__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core/Cameras/camera */ "../core/dist/Cameras/camera.js");
/* harmony import */ var core_Materials_multiMaterial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core/Materials/multiMaterial */ "../core/dist/Materials/multiMaterial.js");
/* harmony import */ var core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core/Materials/PBR/pbrBaseMaterial */ "../core/dist/Materials/PBR/pbrBaseMaterial.js");
/* harmony import */ var core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core/Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core/Buffers/bufferUtils */ "../core/dist/Buffers/bufferUtils.js");
/* harmony import */ var _glTFAnimation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./glTFAnimation */ "../serializers/dist/glTF/2.0/glTFAnimation.js");
/* harmony import */ var _glTFMorphTargetsUtilities__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./glTFMorphTargetsUtilities */ "../serializers/dist/glTF/2.0/glTFMorphTargetsUtilities.js");
/* harmony import */ var core_Meshes_linesMesh__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core/Meshes/linesMesh */ "../core/dist/Meshes/linesMesh.js");
/* harmony import */ var core_Meshes_GreasedLine_greasedLineBaseMesh__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core/Meshes/GreasedLine/greasedLineBaseMesh */ "../core/dist/Meshes/GreasedLine/greasedLineBaseMesh.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Cameras_targetCamera__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core/Cameras/targetCamera */ "../core/dist/Cameras/targetCamera.js");
/* harmony import */ var core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core/Maths/math.constants */ "../core/dist/Maths/math.constants.js");
/* harmony import */ var _dataWriter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dataWriter */ "../serializers/dist/glTF/2.0/dataWriter.js");
/* harmony import */ var core_Materials_PBR_openpbrMaterial__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core/Materials/PBR/openpbrMaterial */ "../core/dist/Materials/PBR/openpbrMaterial.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






























class ExporterState {
    constructor(convertToRightHanded, wasAddedByNoopNode) {
        // Babylon indices array, start, count, offset, flip -> glTF accessor index
        this._indicesAccessorMap = new Map();
        // Babylon buffer -> glTF buffer view
        this._vertexBufferViewMap = new Map();
        // Babylon vertex buffer, start, count -> glTF accessor index
        this._vertexAccessorMap = new Map();
        this._remappedBufferView = new Map();
        this._meshMorphTargetMap = new Map();
        this._vertexMapColorAlpha = new Map();
        this._exportedNodes = new Set();
        // Babylon mesh -> glTF mesh index
        this._meshMap = new Map();
        // Only used when convertToRightHanded is true.
        this.convertedToRightHandedBuffers = new Map();
        this.convertToRightHanded = convertToRightHanded;
        this.wasAddedByNoopNode = wasAddedByNoopNode;
    }
    getIndicesAccessor(indices, start, count, offset, flip) {
        return this._indicesAccessorMap.get(indices)?.get(start)?.get(count)?.get(offset)?.get(flip);
    }
    setIndicesAccessor(indices, start, count, offset, flip, accessorIndex) {
        let map1 = this._indicesAccessorMap.get(indices);
        if (!map1) {
            map1 = new Map();
            this._indicesAccessorMap.set(indices, map1);
        }
        let map2 = map1.get(start);
        if (!map2) {
            map2 = new Map();
            map1.set(start, map2);
        }
        let map3 = map2.get(count);
        if (!map3) {
            map3 = new Map();
            map2.set(count, map3);
        }
        let map4 = map3.get(offset);
        if (!map4) {
            map4 = new Map();
            map3.set(offset, map4);
        }
        map4.set(flip, accessorIndex);
    }
    pushExportedNode(node) {
        if (!this._exportedNodes.has(node)) {
            this._exportedNodes.add(node);
        }
    }
    getNodesSet() {
        return this._exportedNodes;
    }
    getVertexBufferView(buffer) {
        return this._vertexBufferViewMap.get(buffer);
    }
    setVertexBufferView(buffer, bufferView) {
        this._vertexBufferViewMap.set(buffer, bufferView);
    }
    setRemappedBufferView(buffer, vertexBuffer, bufferView) {
        this._remappedBufferView.set(buffer, new Map());
        this._remappedBufferView.get(buffer).set(vertexBuffer, bufferView);
    }
    getRemappedBufferView(buffer, vertexBuffer) {
        return this._remappedBufferView.get(buffer)?.get(vertexBuffer);
    }
    getVertexAccessor(vertexBuffer, start, count) {
        return this._vertexAccessorMap.get(vertexBuffer)?.get(start)?.get(count);
    }
    setVertexAccessor(vertexBuffer, start, count, accessorIndex) {
        let map1 = this._vertexAccessorMap.get(vertexBuffer);
        if (!map1) {
            map1 = new Map();
            this._vertexAccessorMap.set(vertexBuffer, map1);
        }
        let map2 = map1.get(start);
        if (!map2) {
            map2 = new Map();
            map1.set(start, map2);
        }
        map2.set(count, accessorIndex);
    }
    hasVertexColorAlpha(vertexBuffer) {
        return this._vertexMapColorAlpha.get(vertexBuffer) || false;
    }
    setHasVertexColorAlpha(vertexBuffer, hasAlpha) {
        return this._vertexMapColorAlpha.set(vertexBuffer, hasAlpha);
    }
    getMesh(mesh) {
        return this._meshMap.get(mesh);
    }
    setMesh(mesh, meshIndex) {
        this._meshMap.set(mesh, meshIndex);
    }
    bindMorphDataToMesh(mesh, morphData) {
        const morphTargets = this._meshMorphTargetMap.get(mesh) || [];
        this._meshMorphTargetMap.set(mesh, morphTargets);
        if (morphTargets.indexOf(morphData) === -1) {
            morphTargets.push(morphData);
        }
    }
    getMorphTargetsFromMesh(mesh) {
        return this._meshMorphTargetMap.get(mesh);
    }
}
/** @internal */
class GLTFExporter {
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/promise-function-async
    _ApplyExtension(node, extensions, index, actionAsync) {
        if (index >= extensions.length) {
            return Promise.resolve(node);
        }
        const currentPromise = actionAsync(extensions[index], node);
        if (!currentPromise) {
            return this._ApplyExtension(node, extensions, index + 1, actionAsync);
        }
        // eslint-disable-next-line github/no-then
        return currentPromise.then(async (newNode) => (newNode ? await this._ApplyExtension(newNode, extensions, index + 1, actionAsync) : null));
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/promise-function-async
    _ApplyExtensions(node, actionAsync) {
        const extensions = [];
        for (const name of GLTFExporter._ExtensionNames) {
            extensions.push(this._extensions[name]);
        }
        return this._ApplyExtension(node, extensions, 0, actionAsync);
    }
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    _extensionsPostExportNodeAsync(context, node, babylonNode, nodeMap, convertToRightHanded) {
        return this._ApplyExtensions(node, 
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        (extension, node) => extension.postExportNodeAsync && extension.postExportNodeAsync(context, node, babylonNode, nodeMap, convertToRightHanded, this._bufferManager));
    }
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/promise-function-async
    _extensionsPostExportMaterialAsync(context, material, babylonMaterial) {
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        return this._ApplyExtensions(material, (extension, node) => extension.postExportMaterialAsync && extension.postExportMaterialAsync(context, node, babylonMaterial));
    }
    /**
     * Get additional textures for a material
     * @param context The context when loading the asset
     * @param material The glTF material
     * @param babylonMaterial The Babylon.js material
     * @returns List of additional textures
     */
    async _extensionsPostExportMaterialAdditionalTexturesAsync(context, material, babylonMaterial) {
        const output = [];
        await Promise.all(GLTFExporter._ExtensionNames.map(async (name) => {
            const extension = this._extensions[name];
            if (extension.postExportMaterialAdditionalTexturesAsync) {
                const textures = await extension.postExportMaterialAdditionalTexturesAsync(context, material, babylonMaterial);
                output.push(...textures);
            }
        }));
        return output;
    }
    _extensionsPostExportTextures(context, textureInfo, babylonTexture) {
        for (const name of GLTFExporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.postExportTexture) {
                extension.postExportTexture(context, textureInfo, babylonTexture);
            }
        }
    }
    _extensionsPostExportMeshPrimitive(primitive) {
        for (const name of GLTFExporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.postExportMeshPrimitive) {
                extension.postExportMeshPrimitive(primitive, this._bufferManager, this._accessors);
            }
        }
    }
    async _extensionsPreGenerateBinaryAsync() {
        for (const name of GLTFExporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.preGenerateBinaryAsync) {
                // eslint-disable-next-line no-await-in-loop
                await extension.preGenerateBinaryAsync(this._bufferManager);
            }
        }
    }
    _forEachExtensions(action) {
        for (const name of GLTFExporter._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.enabled) {
                action(extension);
            }
        }
    }
    _extensionsOnExporting() {
        this._forEachExtensions((extension) => {
            if (extension.wasUsed) {
                this._glTF.extensionsUsed ||= [];
                if (this._glTF.extensionsUsed.indexOf(extension.name) === -1) {
                    this._glTF.extensionsUsed.push(extension.name);
                }
                if (extension.required) {
                    this._glTF.extensionsRequired ||= [];
                    if (this._glTF.extensionsRequired.indexOf(extension.name) === -1) {
                        this._glTF.extensionsRequired.push(extension.name);
                    }
                }
                this._glTF.extensions ||= {};
                if (extension.onExporting) {
                    extension.onExporting();
                }
            }
        });
    }
    _loadExtensions() {
        for (const name of GLTFExporter._ExtensionNames) {
            const extension = GLTFExporter._ExtensionFactories[name](this);
            this._extensions[name] = extension;
        }
    }
    constructor(babylonScene = core_Engines_engineStore__WEBPACK_IMPORTED_MODULE_8__.EngineStore.LastCreatedScene, options) {
        this._glTF = {
            asset: { generator: `Babylon.js v${core_Engines_engine__WEBPACK_IMPORTED_MODULE_7__.Engine.Version}`, version: "2.0" },
        };
        this._animations = [];
        this._accessors = [];
        this._bufferViews = [];
        this._cameras = [];
        this._images = [];
        this._materials = [];
        this._meshes = [];
        this._nodes = [];
        this._samplers = [];
        this._scenes = [];
        this._skins = [];
        this._textures = [];
        this._imageData = {};
        this._shouldUseGlb = false;
        this._materialExporter = new _glTFMaterialExporter__WEBPACK_IMPORTED_MODULE_9__.GLTFMaterialExporter(this);
        this._extensions = {};
        this._bufferManager = new _bufferManager__WEBPACK_IMPORTED_MODULE_13__.BufferManager();
        this._shouldExportNodeMap = new Map();
        // Babylon node -> glTF node index
        this._nodeMap = new Map();
        // Babylon material -> glTF material index
        this._materialMap = new Map();
        this._camerasMap = new Map();
        this._nodesCameraMap = new Map();
        this._skinMap = new Map();
        this._nodesSkinMap = new Map();
        // A material in this set requires UVs
        this._materialNeedsUVsSet = new Set();
        if (!babylonScene) {
            throw new Error("No scene available to export");
        }
        this._babylonScene = babylonScene;
        this._options = {
            shouldExportNode: () => true,
            shouldExportAnimation: () => true,
            metadataSelector: (metadata) => metadata?.gltf?.extras,
            animationSampleRate: 1 / 60,
            exportWithoutWaitingForScene: false,
            exportUnusedUVs: false,
            removeNoopRootNodes: true,
            includeCoordinateSystemConversionNodes: false,
            meshCompressionMethod: "None",
            ...options,
        };
        this._loadExtensions();
    }
    dispose() {
        for (const key in this._extensions) {
            const extension = this._extensions[key];
            extension.dispose();
        }
    }
    get options() {
        return this._options;
    }
    static RegisterExtension(name, factory, order = 100) {
        if (GLTFExporter.UnregisterExtension(name)) {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn(`Extension with the name ${name} already exists`);
        }
        GLTFExporter._ExtensionFactories[name] = factory;
        const extensionOrder = order ?? 0; // Use provided order or default to 0
        GLTFExporter._ExtensionOrders[name] = extensionOrder;
        // Find the correct position to insert the extension based on order
        let insertIndex = GLTFExporter._ExtensionNames.length;
        for (let i = 0; i < GLTFExporter._ExtensionNames.length; i++) {
            const existingName = GLTFExporter._ExtensionNames[i];
            const existingOrder = GLTFExporter._ExtensionOrders[existingName];
            // If the order is less, insert before.
            if (extensionOrder < existingOrder) {
                insertIndex = i;
                break;
            }
        }
        GLTFExporter._ExtensionNames.splice(insertIndex, 0, name);
    }
    static UnregisterExtension(name) {
        if (!GLTFExporter._ExtensionFactories[name]) {
            return false;
        }
        delete GLTFExporter._ExtensionFactories[name];
        delete GLTFExporter._ExtensionOrders[name];
        const index = GLTFExporter._ExtensionNames.indexOf(name);
        if (index !== -1) {
            GLTFExporter._ExtensionNames.splice(index, 1);
        }
        return true;
    }
    _generateJSON(bufferByteLength, fileName, prettyPrint) {
        const buffer = { byteLength: bufferByteLength };
        if (buffer.byteLength) {
            this._glTF.buffers = [buffer];
        }
        if (this._nodes && this._nodes.length) {
            this._glTF.nodes = this._nodes;
        }
        if (this._meshes && this._meshes.length) {
            this._glTF.meshes = this._meshes;
        }
        if (this._scenes && this._scenes.length) {
            this._glTF.scenes = this._scenes;
            this._glTF.scene = 0;
        }
        if (this._cameras && this._cameras.length) {
            this._glTF.cameras = this._cameras;
        }
        if (this._bufferViews && this._bufferViews.length) {
            this._glTF.bufferViews = this._bufferViews;
        }
        if (this._accessors && this._accessors.length) {
            this._glTF.accessors = this._accessors;
        }
        if (this._animations && this._animations.length) {
            this._glTF.animations = this._animations;
        }
        if (this._materials && this._materials.length) {
            this._glTF.materials = this._materials;
        }
        if (this._textures && this._textures.length) {
            this._glTF.textures = this._textures;
        }
        if (this._samplers && this._samplers.length) {
            this._glTF.samplers = this._samplers;
        }
        if (this._skins && this._skins.length) {
            this._glTF.skins = this._skins;
        }
        if (this._images && this._images.length) {
            this._glTF.images = this._images;
        }
        if (!this._shouldUseGlb) {
            buffer.uri = fileName + ".bin";
        }
        return prettyPrint ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF);
    }
    async generateGLTFAsync(glTFPrefix) {
        const binaryBuffer = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const jsonText = this._generateJSON(binaryBuffer.byteLength, glTFPrefix, true);
        const bin = new Blob([binaryBuffer], { type: "application/octet-stream" });
        const glTFFileName = glTFPrefix + ".gltf";
        const glTFBinFile = glTFPrefix + ".bin";
        const container = new _glTFData__WEBPACK_IMPORTED_MODULE_10__.GLTFData();
        container.files[glTFFileName] = jsonText;
        container.files[glTFBinFile] = bin;
        if (this._imageData) {
            for (const image in this._imageData) {
                container.files[image] = this._imageData[image];
            }
        }
        return container;
    }
    async _generateBinaryAsync() {
        await this._exportSceneAsync();
        await this._extensionsPreGenerateBinaryAsync();
        return this._bufferManager.generateBinary(this._bufferViews);
    }
    /**
     * Pads the number to a multiple of 4
     * @param num number to pad
     * @returns padded number
     */
    _getPadding(num) {
        const remainder = num % 4;
        const padding = remainder === 0 ? remainder : 4 - remainder;
        return padding;
    }
    async generateGLBAsync(glTFPrefix) {
        this._shouldUseGlb = true;
        const binaryBuffer = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const jsonText = this._generateJSON(binaryBuffer.byteLength);
        const glbFileName = glTFPrefix + ".glb";
        const headerLength = 12;
        const chunkLengthPrefix = 8;
        let jsonLength = jsonText.length;
        let encodedJsonText;
        // Make use of TextEncoder when available
        if (typeof TextEncoder !== "undefined") {
            const encoder = new TextEncoder();
            encodedJsonText = encoder.encode(jsonText);
            jsonLength = encodedJsonText.length;
        }
        const jsonPadding = this._getPadding(jsonLength);
        const binPadding = this._getPadding(binaryBuffer.byteLength);
        const byteLength = headerLength + 2 * chunkLengthPrefix + jsonLength + jsonPadding + binaryBuffer.byteLength + binPadding;
        const dataWriter = new _dataWriter__WEBPACK_IMPORTED_MODULE_27__.DataWriter(byteLength);
        // Header
        dataWriter.writeUInt32(0x46546c67); // "glTF"
        dataWriter.writeUInt32(2); // Version
        dataWriter.writeUInt32(byteLength); // Total bytes in file
        // JSON chunk length prefix
        dataWriter.writeUInt32(jsonLength + jsonPadding);
        dataWriter.writeUInt32(0x4e4f534a); // "JSON"
        // JSON chunk bytes
        if (encodedJsonText) {
            // If TextEncoder was available, we can simply copy the encoded array
            dataWriter.writeTypedArray(encodedJsonText);
        }
        else {
            const blankCharCode = "_".charCodeAt(0);
            for (let i = 0; i < jsonLength; ++i) {
                const charCode = jsonText.charCodeAt(i);
                // If the character doesn't fit into a single UTF-16 code unit, just put a blank character
                if (charCode != jsonText.codePointAt(i)) {
                    dataWriter.writeUInt8(blankCharCode);
                }
                else {
                    dataWriter.writeUInt8(charCode);
                }
            }
        }
        // JSON padding
        for (let i = 0; i < jsonPadding; ++i) {
            dataWriter.writeUInt8(0x20);
        }
        // Binary chunk length prefix
        dataWriter.writeUInt32(binaryBuffer.byteLength + binPadding);
        dataWriter.writeUInt32(0x004e4942); // "BIN"
        // Binary chunk bytes
        dataWriter.writeTypedArray(binaryBuffer);
        // Binary padding
        for (let i = 0; i < binPadding; ++i) {
            dataWriter.writeUInt8(0);
        }
        const container = new _glTFData__WEBPACK_IMPORTED_MODULE_10__.GLTFData();
        container.files[glbFileName] = new Blob([dataWriter.getOutputData()], { type: "application/octet-stream" });
        return container;
    }
    _setNodeTransformation(node, babylonTransformNode, convertToRightHanded) {
        if (!babylonTransformNode.getPivotPoint().equalsWithEpsilon(_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DefaultTranslation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon)) {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Pivot points are not supported in the glTF serializer");
        }
        if (!babylonTransformNode.position.equalsWithEpsilon(_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DefaultTranslation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon)) {
            const translation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0].copyFrom(babylonTransformNode.position);
            if (convertToRightHanded) {
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.ConvertToRightHandedPosition)(translation);
            }
            node.translation = translation.asArray();
        }
        if (!babylonTransformNode.scaling.equalsWithEpsilon(_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DefaultScale, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon)) {
            node.scale = babylonTransformNode.scaling.asArray();
        }
        const rotationQuaternion = babylonTransformNode.rotationQuaternion?.clone() ||
            core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromEulerAngles(babylonTransformNode.rotation.x, babylonTransformNode.rotation.y, babylonTransformNode.rotation.z);
        if (!rotationQuaternion.equalsWithEpsilon(_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DefaultRotation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon)) {
            if (convertToRightHanded) {
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.ConvertToRightHandedRotation)(rotationQuaternion);
            }
            node.rotation = rotationQuaternion.normalize().asArray();
        }
    }
    _setCameraTransformation(node, babylonCamera, convertToRightHanded) {
        // Camera types store rotation differently (e.g., ArcRotateCamera uses alpha/beta, others use rotationQuaternion).
        // Extract the transform from the world matrix instead of handling each case separately.
        const translation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0];
        const rotationQuaternion = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0];
        const cameraWorldMatrix = babylonCamera.getWorldMatrix();
        if (babylonCamera.parent) {
            // Camera.getWorldMatrix returns global coordinates. GLTF node must use local coordinates. If camera has parent we need to use local translation/rotation.
            const parentInvWorldMatrix = babylonCamera.parent.getWorldMatrix().invertToRef(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
            const cameraLocal = cameraWorldMatrix.multiplyToRef(parentInvWorldMatrix, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[1]);
            cameraLocal.decompose(undefined, rotationQuaternion, translation);
        }
        else {
            cameraWorldMatrix.decompose(undefined, rotationQuaternion, translation);
        }
        if (!translation.equalsWithEpsilon(_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DefaultTranslation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon)) {
            if (convertToRightHanded) {
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.ConvertToRightHandedPosition)(translation);
            }
            node.translation = translation.asArray();
        }
        if (convertToRightHanded) {
            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.ConvertToRightHandedRotation)(rotationQuaternion);
        }
        // Left-handed scenes have cameras that always face Z+ (opposite of glTF's Z-).
        // Use scene coordinate system rather than convertToRightHanded, since some
        // cameras may not need convertToRightHanded but still need correction to face Z-.
        if (!this._babylonScene.useRightHandedSystem) {
            (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.Rotate180Y)(rotationQuaternion);
        }
        if (!rotationQuaternion.equalsWithEpsilon(_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DefaultRotation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon)) {
            node.rotation = rotationQuaternion.asArray();
        }
    }
    // Export babylon cameras to glTF cameras
    _listAvailableCameras() {
        for (const camera of this._babylonScene.cameras) {
            const glTFCamera = {
                type: camera.mode === core_Cameras_camera__WEBPACK_IMPORTED_MODULE_14__.Camera.PERSPECTIVE_CAMERA ? "perspective" /* CameraType.PERSPECTIVE */ : "orthographic" /* CameraType.ORTHOGRAPHIC */,
            };
            if (camera.name) {
                glTFCamera.name = camera.name;
            }
            if (glTFCamera.type === "perspective" /* CameraType.PERSPECTIVE */) {
                glTFCamera.perspective = {
                    aspectRatio: camera.getEngine().getAspectRatio(camera),
                    yfov: camera.fovMode === core_Cameras_camera__WEBPACK_IMPORTED_MODULE_14__.Camera.FOVMODE_VERTICAL_FIXED ? camera.fov : camera.fov * camera.getEngine().getAspectRatio(camera),
                    znear: camera.minZ,
                    zfar: camera.maxZ,
                };
            }
            else if (glTFCamera.type === "orthographic" /* CameraType.ORTHOGRAPHIC */) {
                const halfWidth = camera.orthoLeft && camera.orthoRight ? 0.5 * (camera.orthoRight - camera.orthoLeft) : camera.getEngine().getRenderWidth() * 0.5;
                const halfHeight = camera.orthoBottom && camera.orthoTop ? 0.5 * (camera.orthoTop - camera.orthoBottom) : camera.getEngine().getRenderHeight() * 0.5;
                glTFCamera.orthographic = {
                    xmag: halfWidth,
                    ymag: halfHeight,
                    znear: camera.minZ,
                    zfar: camera.maxZ,
                };
            }
            this._camerasMap.set(camera, glTFCamera);
        }
    }
    // Cleanup unused cameras and assign index to nodes.
    _exportAndAssignCameras() {
        const gltfCameras = Array.from(this._camerasMap.values());
        for (const gltfCamera of gltfCameras) {
            const usedNodes = this._nodesCameraMap.get(gltfCamera);
            if (usedNodes !== undefined) {
                this._cameras.push(gltfCamera);
                for (const node of usedNodes) {
                    node.camera = this._cameras.length - 1;
                }
            }
        }
    }
    // Collects all skins in a skins map so nodes can reference it during node parsing.
    _listAvailableSkeletons() {
        for (const skeleton of this._babylonScene.skeletons) {
            if (skeleton.bones.length <= 0) {
                continue;
            }
            const skin = { joints: [] };
            this._skinMap.set(skeleton, skin);
        }
    }
    _exportAndAssignSkeletons(leftHandNodes) {
        for (const skeleton of this._babylonScene.skeletons) {
            if (skeleton.bones.length <= 0) {
                continue;
            }
            const skin = this._skinMap.get(skeleton);
            if (skin == undefined) {
                continue;
            }
            // The bones (joints) of a skeleton (skin) must be exported in the same order as they appear in vertex attributes,
            // which is indicated by getIndex and may not match a bone's index in skeleton.bones
            const boneIndexMap = {};
            let maxBoneIndex = -1;
            for (let i = 0; i < skeleton.bones.length; ++i) {
                const bone = skeleton.bones[i];
                const boneIndex = bone.getIndex() ?? i;
                if (boneIndex !== -1) {
                    boneIndexMap[boneIndex] = bone;
                    if (boneIndex > maxBoneIndex) {
                        maxBoneIndex = boneIndex;
                    }
                }
            }
            // Set joints indices to scene nodes.
            const inverseBindMatrices = [];
            for (let boneIndex = 0; boneIndex <= maxBoneIndex; ++boneIndex) {
                const bone = boneIndexMap[boneIndex]; // Assumes no gaps in bone indices
                const transformNode = bone.getTransformNode();
                const nodeIndex = transformNode ? this._nodeMap.get(transformNode) : undefined;
                if (nodeIndex === undefined) {
                    core_Misc_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
                    continue; // The indices may be out-of-sync after this and break the skinning.
                }
                skin.joints.push(nodeIndex);
                const boneMatrix = bone.getAbsoluteInverseBindMatrix().clone();
                if (leftHandNodes.has(transformNode)) {
                    (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.ConvertToRightHandedTransformMatrix)(boneMatrix);
                }
                inverseBindMatrices.push(boneMatrix);
            }
            // Nodes that use this skin.
            const skinnedNodes = this._nodesSkinMap.get(skin);
            // Only export the skin if it has at least one joint and is used by a mesh.
            if (skin.joints.length > 0 && skinnedNodes !== undefined) {
                const inverseBindMatricesData = new Float32Array(inverseBindMatrices.length * 16); // Always a 4 x 4 matrix of 32 bit float
                inverseBindMatrices.forEach((mat, index) => {
                    inverseBindMatricesData.set(mat.m, index * 16);
                });
                const bufferView = this._bufferManager.createBufferView(inverseBindMatricesData);
                this._accessors.push(this._bufferManager.createAccessor(bufferView, "MAT4" /* AccessorType.MAT4 */, 5126 /* AccessorComponentType.FLOAT */, inverseBindMatrices.length));
                skin.inverseBindMatrices = this._accessors.length - 1;
                this._skins.push(skin);
                const skinIndex = this._skins.length - 1;
                for (const skinnedNode of skinnedNodes) {
                    skinnedNode.skin = skinIndex;
                }
            }
        }
    }
    async _exportSceneAsync() {
        const scene = { nodes: [] };
        // Scene metadata
        if (this._babylonScene.metadata) {
            const extras = this._options.metadataSelector(this._babylonScene.metadata);
            if (extras) {
                scene.extras = extras;
            }
        }
        //  TODO:
        //  deal with this from the loader:
        //  babylonMaterial.invertNormalMapX = !this._babylonScene.useRightHandedSystem;
        //  babylonMaterial.invertNormalMapY = this._babylonScene.useRightHandedSystem;
        const rootNodesRH = new Array();
        const rootNodesLH = new Array();
        const rootNoopNodesRH = new Array();
        for (const rootNode of this._babylonScene.rootNodes) {
            if (this._options.removeNoopRootNodes && !this._options.includeCoordinateSystemConversionNodes && (0,_exportUtils__WEBPACK_IMPORTED_MODULE_12__.IsNoopNode)(rootNode, this._babylonScene.useRightHandedSystem)) {
                rootNoopNodesRH.push(...rootNode.getChildren());
            }
            else if (this._babylonScene.useRightHandedSystem) {
                rootNodesRH.push(rootNode);
            }
            else {
                rootNodesLH.push(rootNode);
            }
        }
        this._listAvailableCameras();
        this._listAvailableSkeletons();
        const stateLH = new ExporterState(true, false);
        scene.nodes.push(...(await this._exportNodesAsync(rootNodesLH, stateLH)));
        const stateRH = new ExporterState(false, false);
        scene.nodes.push(...(await this._exportNodesAsync(rootNodesRH, stateRH)));
        const noopRH = new ExporterState(false, true);
        scene.nodes.push(...(await this._exportNodesAsync(rootNoopNodesRH, noopRH)));
        if (scene.nodes.length) {
            this._scenes.push(scene);
        }
        this._exportAndAssignCameras();
        this._exportAndAssignSkeletons(stateLH.getNodesSet());
        if (this._babylonScene.animationGroups.length) {
            _glTFAnimation__WEBPACK_IMPORTED_MODULE_20__._GLTFAnimation._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, stateLH.getNodesSet(), this._options.shouldExportAnimation);
        }
    }
    _shouldExportNode(babylonNode) {
        let result = this._shouldExportNodeMap.get(babylonNode);
        if (result === undefined) {
            result = this._options.shouldExportNode(babylonNode);
            this._shouldExportNodeMap.set(babylonNode, result);
        }
        return result;
    }
    async _exportNodesAsync(babylonRootNodes, state) {
        const nodes = new Array();
        this._exportBuffers(babylonRootNodes, state);
        for (const babylonNode of babylonRootNodes) {
            // eslint-disable-next-line no-await-in-loop
            await this._exportNodeAsync(babylonNode, nodes, state);
        }
        return nodes;
    }
    _collectBuffers(babylonNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTargetsToMeshesMap, state) {
        if (this._shouldExportNode(babylonNode) && babylonNode instanceof core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_4__.AbstractMesh && babylonNode.geometry) {
            const vertexBuffers = babylonNode.geometry.getVertexBuffers();
            if (vertexBuffers) {
                for (const kind in vertexBuffers) {
                    if (!(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.IsStandardVertexAttribute)(kind)) {
                        continue;
                    }
                    const vertexBuffer = vertexBuffers[kind];
                    state.setHasVertexColorAlpha(vertexBuffer, babylonNode.hasVertexAlpha);
                    const buffer = vertexBuffer._buffer;
                    const vertexBufferArray = bufferToVertexBuffersMap.get(buffer) || [];
                    bufferToVertexBuffersMap.set(buffer, vertexBufferArray);
                    if (vertexBufferArray.indexOf(vertexBuffer) === -1) {
                        vertexBufferArray.push(vertexBuffer);
                    }
                    const meshes = vertexBufferToMeshesMap.get(vertexBuffer) || [];
                    vertexBufferToMeshesMap.set(vertexBuffer, meshes);
                    if (meshes.indexOf(babylonNode) === -1) {
                        meshes.push(babylonNode);
                    }
                }
            }
            const morphTargetManager = babylonNode.morphTargetManager;
            if (morphTargetManager) {
                for (let morphIndex = 0; morphIndex < morphTargetManager.numTargets; morphIndex++) {
                    const morphTarget = morphTargetManager.getTarget(morphIndex);
                    const meshes = morphTargetsToMeshesMap.get(morphTarget) || [];
                    morphTargetsToMeshesMap.set(morphTarget, meshes);
                    if (meshes.indexOf(babylonNode) === -1) {
                        meshes.push(babylonNode);
                    }
                }
            }
        }
        for (const babylonChildNode of babylonNode.getChildren()) {
            this._collectBuffers(babylonChildNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTargetsToMeshesMap, state);
        }
    }
    _exportBuffers(babylonRootNodes, state) {
        const bufferToVertexBuffersMap = new Map();
        const vertexBufferToMeshesMap = new Map();
        const morphTargetsMeshesMap = new Map();
        for (const babylonNode of babylonRootNodes) {
            this._collectBuffers(babylonNode, bufferToVertexBuffersMap, vertexBufferToMeshesMap, morphTargetsMeshesMap, state);
        }
        const buffers = Array.from(bufferToVertexBuffersMap.keys());
        for (const buffer of buffers) {
            const data = buffer.getData();
            if (!data) {
                throw new Error("Buffer data is not available");
            }
            const vertexBuffers = bufferToVertexBuffersMap.get(buffer);
            if (!vertexBuffers) {
                continue;
            }
            const byteStride = vertexBuffers[0].byteStride;
            if (vertexBuffers.some((vertexBuffer) => vertexBuffer.byteStride !== byteStride)) {
                throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
            }
            const bytes = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.DataArrayToUint8Array)(data).slice();
            // Apply normalizations and color corrections to buffer data in-place.
            for (const vertexBuffer of vertexBuffers) {
                const meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                const { byteOffset, byteStride, componentCount, type, count, normalized, kind } = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetVertexBufferInfo)(vertexBuffer, meshes);
                switch (kind) {
                    // Normalize normals and tangents.
                    case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.NormalKind:
                    case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.TangentKind: {
                        (0,core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_19__.EnumerateFloatValues)(bytes, byteOffset, byteStride, componentCount, type, count, normalized, (values) => {
                            const length = Math.sqrt(values[0] * values[0] + values[1] * values[1] + values[2] * values[2]);
                            if (length > 0) {
                                const invLength = 1 / length;
                                values[0] *= invLength;
                                values[1] *= invLength;
                                values[2] *= invLength;
                            }
                        });
                        break;
                    }
                    // Convert StandardMaterial vertex colors from gamma to linear space.
                    case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.ColorKind: {
                        const stdMaterialCount = meshes.filter((mesh) => mesh.material instanceof core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_17__.StandardMaterial || mesh.material == null).length;
                        if (stdMaterialCount == 0) {
                            break; // Buffer not used by StandardMaterials, so no conversion needed.
                        }
                        // TODO: Implement this case.
                        if (stdMaterialCount != meshes.length) {
                            core_Misc_logger__WEBPACK_IMPORTED_MODULE_18__.Logger.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                            break;
                        }
                        if (type == core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.UNSIGNED_BYTE) {
                            core_Misc_logger__WEBPACK_IMPORTED_MODULE_18__.Logger.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                        }
                        const vertexData3 = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_24__.Color3();
                        const vertexData4 = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_24__.Color4();
                        const useExactSrgbConversions = this._babylonScene.getEngine().useExactSrgbConversions;
                        (0,core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_19__.EnumerateFloatValues)(bytes, byteOffset, byteStride, componentCount, type, count, normalized, (values) => {
                            // Using separate Color3 and Color4 objects to ensure the right functions are called.
                            if (values.length === 3) {
                                vertexData3.fromArray(values, 0);
                                vertexData3.toLinearSpaceToRef(vertexData3, useExactSrgbConversions);
                                vertexData3.toArray(values, 0);
                            }
                            else {
                                vertexData4.fromArray(values, 0);
                                vertexData4.toLinearSpaceToRef(vertexData4, useExactSrgbConversions);
                                vertexData4.toArray(values, 0);
                            }
                        });
                    }
                }
            }
            // Perform coordinate conversions, if needed, to buffer data in-place (only for positions, normals and tangents).
            if (state.convertToRightHanded) {
                for (const vertexBuffer of vertexBuffers) {
                    const meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                    const { byteOffset, byteStride, componentCount, type, count, normalized, kind } = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetVertexBufferInfo)(vertexBuffer, meshes);
                    switch (kind) {
                        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.PositionKind:
                        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.NormalKind:
                        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.TangentKind: {
                            (0,core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_19__.EnumerateFloatValues)(bytes, byteOffset, byteStride, componentCount, type, count, normalized, (values) => {
                                values[0] = -values[0];
                            });
                        }
                    }
                }
                // Save converted bytes for min/max computation.
                state.convertedToRightHandedBuffers.set(buffer, bytes);
            }
            // Create buffer view, but defer accessor creation for later. Instead, track it via ExporterState.
            const bufferView = this._bufferManager.createBufferView(bytes, byteStride);
            state.setVertexBufferView(buffer, bufferView);
            const floatMatricesIndices = new Map();
            // If buffers are of type MatricesIndicesKind and have float values, we need to create a new buffer instead.
            for (const vertexBuffer of vertexBuffers) {
                const meshes = vertexBufferToMeshesMap.get(vertexBuffer);
                const { kind, totalVertices } = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetVertexBufferInfo)(vertexBuffer, meshes);
                switch (kind) {
                    case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.MatricesIndicesKind:
                    case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.MatricesIndicesExtraKind: {
                        if (vertexBuffer.type == core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.FLOAT) {
                            const floatData = vertexBuffer.getFloatData(totalVertices);
                            if (floatData !== null) {
                                floatMatricesIndices.set(vertexBuffer, floatData);
                            }
                        }
                    }
                }
            }
            if (floatMatricesIndices.size !== 0) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_18__.Logger.Warn(`Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.`);
            }
            const floatArrayVertexBuffers = Array.from(floatMatricesIndices.keys());
            for (const vertexBuffer of floatArrayVertexBuffers) {
                const array = floatMatricesIndices.get(vertexBuffer);
                if (!array) {
                    continue;
                }
                const is16Bit = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.FloatsNeed16BitInteger)(array);
                const newArray = new (is16Bit ? Uint16Array : Uint8Array)(array.length);
                for (let index = 0; index < array.length; index++) {
                    newArray[index] = array[index];
                }
                const bufferView = this._bufferManager.createBufferView(newArray, 4 * (is16Bit ? 2 : 1));
                state.setRemappedBufferView(buffer, vertexBuffer, bufferView);
            }
        }
        // Build morph targets buffers
        const morphTargets = Array.from(morphTargetsMeshesMap.keys());
        for (const morphTarget of morphTargets) {
            const meshes = morphTargetsMeshesMap.get(morphTarget);
            if (!meshes) {
                continue;
            }
            const glTFMorphTarget = (0,_glTFMorphTargetsUtilities__WEBPACK_IMPORTED_MODULE_21__.BuildMorphTargetBuffers)(morphTarget, meshes[0], this._bufferManager, this._bufferViews, this._accessors, state.convertToRightHanded);
            for (const mesh of meshes) {
                state.bindMorphDataToMesh(mesh, glTFMorphTarget);
            }
        }
    }
    /**
     * Processes a node to be exported to the glTF file
     * @returns A promise that resolves once the node has been exported
     * @internal
     */
    async _exportNodeAsync(babylonNode, parentNodeChildren, state) {
        let nodeIndex = this._nodeMap.get(babylonNode);
        if (nodeIndex !== undefined) {
            if (!parentNodeChildren.includes(nodeIndex)) {
                parentNodeChildren.push(nodeIndex);
            }
            return;
        }
        const node = await this._createNodeAsync(babylonNode, state);
        if (node) {
            nodeIndex = this._nodes.length;
            this._nodes.push(node);
            this._nodeMap.set(babylonNode, nodeIndex);
            state.pushExportedNode(babylonNode);
            parentNodeChildren.push(nodeIndex);
            // Process node's animations once the node has been added to nodeMap (TODO: This should be refactored)
            const runtimeGLTFAnimation = {
                name: "runtime animations",
                channels: [],
                samplers: [],
            };
            const idleGLTFAnimations = [];
            if (!this._babylonScene.animationGroups.length) {
                _glTFAnimation__WEBPACK_IMPORTED_MODULE_20__._GLTFAnimation._CreateMorphTargetAnimationFromMorphTargetAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, state.convertToRightHanded, this._options.shouldExportAnimation);
                if (babylonNode.animations.length) {
                    _glTFAnimation__WEBPACK_IMPORTED_MODULE_20__._GLTFAnimation._CreateNodeAnimationFromNodeAnimations(babylonNode, runtimeGLTFAnimation, idleGLTFAnimations, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, state.convertToRightHanded, this._options.shouldExportAnimation);
                }
            }
            if (runtimeGLTFAnimation.channels.length && runtimeGLTFAnimation.samplers.length) {
                this._animations.push(runtimeGLTFAnimation);
            }
            idleGLTFAnimations.forEach((idleGLTFAnimation) => {
                if (idleGLTFAnimation.channels.length && idleGLTFAnimation.samplers.length) {
                    this._animations.push(idleGLTFAnimation);
                }
            });
        }
        // Begin processing child nodes once parent has been added to the node list
        const children = node ? [] : parentNodeChildren;
        for (const babylonChildNode of babylonNode.getChildren()) {
            // eslint-disable-next-line no-await-in-loop
            await this._exportNodeAsync(babylonChildNode, children, state);
        }
        if (node && children.length) {
            node.children = children;
        }
    }
    /**
     * Creates a glTF node from a Babylon.js node. If skipped, returns null.
     * @internal
     */
    async _createNodeAsync(babylonNode, state) {
        if (!this._shouldExportNode(babylonNode)) {
            return null;
        }
        const node = {};
        if (babylonNode.name) {
            node.name = babylonNode.name;
        }
        // Node metadata
        if (babylonNode.metadata) {
            const extras = this._options.metadataSelector(babylonNode.metadata);
            if (extras) {
                node.extras = extras;
            }
        }
        if (babylonNode instanceof core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_3__.TransformNode) {
            this._setNodeTransformation(node, babylonNode, state.convertToRightHanded);
            if (babylonNode instanceof core_Meshes_abstractMesh__WEBPACK_IMPORTED_MODULE_4__.AbstractMesh) {
                const babylonMesh = babylonNode instanceof core_Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_5__.InstancedMesh ? babylonNode.sourceMesh : babylonNode;
                if (babylonMesh.subMeshes && babylonMesh.subMeshes.length > 0) {
                    node.mesh = await this._exportMeshAsync(babylonMesh, state);
                }
                if (babylonNode.skeleton) {
                    const skin = this._skinMap.get(babylonNode.skeleton);
                    if (skin !== undefined) {
                        if (this._nodesSkinMap.get(skin) === undefined) {
                            this._nodesSkinMap.set(skin, []);
                        }
                        this._nodesSkinMap.get(skin)?.push(node);
                    }
                }
            }
        }
        if (babylonNode instanceof core_Cameras_targetCamera__WEBPACK_IMPORTED_MODULE_25__.TargetCamera) {
            const gltfCamera = this._camerasMap.get(babylonNode);
            if (gltfCamera) {
                if (this._nodesCameraMap.get(gltfCamera) === undefined) {
                    this._nodesCameraMap.set(gltfCamera, []);
                }
                this._setCameraTransformation(node, babylonNode, state.convertToRightHanded);
                // If a parent node exists and can be collapsed, merge their transformations and mark the parent as the camera-containing node.
                const parentBabylonNode = babylonNode.parent;
                if (parentBabylonNode !== null && (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.IsChildCollapsible)(babylonNode, parentBabylonNode)) {
                    const parentNodeIndex = this._nodeMap.get(parentBabylonNode);
                    if (parentNodeIndex !== undefined) {
                        const parentNode = this._nodes[parentNodeIndex];
                        (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.CollapseChildIntoParent)(node, parentNode);
                        this._nodesCameraMap.get(gltfCamera)?.push(parentNode);
                        return null; // Skip exporting the original child node
                    }
                }
                this._nodesCameraMap.get(gltfCamera)?.push(node);
            }
        }
        // Apply extensions to the node. If this resolves to null, it means we should skip exporting this node
        const processedNode = await this._extensionsPostExportNodeAsync("exportNodeAsync", node, babylonNode, this._nodeMap, state.convertToRightHanded);
        if (!processedNode) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_18__.Logger.Warn(`Not exporting node ${babylonNode.name}`);
            return null;
        }
        return node;
    }
    _exportIndices(indices, is32Bits, start, count, offset, fillMode, sideOrientation, state, primitive) {
        let indicesToExport = indices;
        primitive.mode = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetPrimitiveMode)(fillMode);
        // Flip indices if triangle winding order is not CCW, as glTF is always CCW.
        const flip = sideOrientation !== core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.CounterClockWiseSideOrientation && (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.IsTriangleFillMode)(fillMode);
        if (flip) {
            if (fillMode === core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.TriangleStripDrawMode || fillMode === core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.TriangleFanDrawMode) {
                throw new Error("Triangle strip/fan fill mode is not implemented");
            }
            primitive.mode = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetPrimitiveMode)(fillMode);
            const newIndices = is32Bits ? new Uint32Array(count) : new Uint16Array(count);
            if (indices) {
                for (let i = 0; i + 2 < count; i += 3) {
                    newIndices[i] = indices[start + i] + offset;
                    newIndices[i + 1] = indices[start + i + 2] + offset;
                    newIndices[i + 2] = indices[start + i + 1] + offset;
                }
            }
            else {
                for (let i = 0; i + 2 < count; i += 3) {
                    newIndices[i] = i;
                    newIndices[i + 1] = i + 2;
                    newIndices[i + 2] = i + 1;
                }
            }
            indicesToExport = newIndices;
        }
        else if (indices && offset !== 0) {
            const newIndices = is32Bits ? new Uint32Array(count) : new Uint16Array(count);
            for (let i = 0; i < count; i++) {
                newIndices[i] = indices[start + i] + offset;
            }
            indicesToExport = newIndices;
        }
        if (indicesToExport) {
            let accessorIndex = state.getIndicesAccessor(indices, start, count, offset, flip);
            if (accessorIndex === undefined) {
                const bytes = (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.IndicesArrayToTypedSubarray)(indicesToExport, start, count, is32Bits);
                const bufferView = this._bufferManager.createBufferView(bytes);
                const componentType = is32Bits ? 5125 /* AccessorComponentType.UNSIGNED_INT */ : 5123 /* AccessorComponentType.UNSIGNED_SHORT */;
                this._accessors.push(this._bufferManager.createAccessor(bufferView, "SCALAR" /* AccessorType.SCALAR */, componentType, count, 0));
                accessorIndex = this._accessors.length - 1;
                state.setIndicesAccessor(indices, start, count, offset, flip, accessorIndex);
            }
            primitive.indices = accessorIndex;
        }
    }
    _exportVertexBuffer(vertexBuffer, babylonMaterial, start, count, state, primitive) {
        const kind = vertexBuffer.getKind();
        if (!(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.IsStandardVertexAttribute)(kind)) {
            return;
        }
        if (kind.startsWith("uv") && !this._options.exportUnusedUVs) {
            if (!babylonMaterial || !this._materialNeedsUVsSet.has(babylonMaterial)) {
                return;
            }
        }
        let accessorIndex = state.getVertexAccessor(vertexBuffer, start, count);
        if (accessorIndex === undefined) {
            // Get min/max from converted or original data.
            const data = state.convertedToRightHandedBuffers.get(vertexBuffer._buffer) || vertexBuffer._buffer.getData();
            const minMax = kind === core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.PositionKind ? (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetMinMax)(data, vertexBuffer, start, count) : undefined;
            // For the remapped buffer views we created for float matrices indices, make sure to use their updated information.
            const isFloatMatricesIndices = (kind === core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.MatricesIndicesKind || kind === core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.MatricesIndicesExtraKind) && vertexBuffer.type === core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.FLOAT;
            const vertexBufferType = isFloatMatricesIndices ? core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.UNSIGNED_BYTE : vertexBuffer.type;
            const vertexBufferNormalized = isFloatMatricesIndices ? undefined : vertexBuffer.normalized;
            const bufferView = isFloatMatricesIndices ? state.getRemappedBufferView(vertexBuffer._buffer, vertexBuffer) : state.getVertexBufferView(vertexBuffer._buffer);
            const byteOffset = vertexBuffer.byteOffset + start * vertexBuffer.byteStride;
            this._accessors.push(this._bufferManager.createAccessor(bufferView, (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetAccessorType)(kind, state.hasVertexColorAlpha(vertexBuffer)), vertexBufferType, count, byteOffset, minMax, vertexBufferNormalized // TODO: Find other places where this is needed.
            ));
            accessorIndex = this._accessors.length - 1;
            state.setVertexAccessor(vertexBuffer, start, count, accessorIndex);
        }
        primitive.attributes[(0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_11__.GetAttributeType)(kind)] = accessorIndex;
    }
    async _exportMaterialAsync(babylonMaterial, vertexBuffers, subMesh, primitive) {
        let materialIndex = this._materialMap.get(babylonMaterial);
        if (materialIndex === undefined) {
            const hasUVs = vertexBuffers && Object.keys(vertexBuffers).some((kind) => kind.startsWith("uv"));
            babylonMaterial = babylonMaterial instanceof core_Materials_multiMaterial__WEBPACK_IMPORTED_MODULE_15__.MultiMaterial ? babylonMaterial.subMaterials[subMesh.materialIndex] : babylonMaterial;
            if (babylonMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_16__.PBRBaseMaterial) {
                materialIndex = await this._materialExporter.exportPBRMaterialAsync(babylonMaterial, hasUVs);
            }
            else if (babylonMaterial instanceof core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_17__.StandardMaterial) {
                materialIndex = await this._materialExporter.exportStandardMaterialAsync(babylonMaterial, hasUVs);
            }
            else if (babylonMaterial instanceof core_Materials_PBR_openpbrMaterial__WEBPACK_IMPORTED_MODULE_28__.OpenPBRMaterial) {
                materialIndex = await this._materialExporter.exportOpenPBRMaterialAsync(babylonMaterial, hasUVs);
            }
            else {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_18__.Logger.Warn(`Unsupported material '${babylonMaterial.name}' with type ${babylonMaterial.getClassName()}`);
                return;
            }
            this._materialMap.set(babylonMaterial, materialIndex);
        }
        primitive.material = materialIndex;
    }
    async _exportMeshAsync(babylonMesh, state) {
        let meshIndex = state.getMesh(babylonMesh);
        if (meshIndex !== undefined) {
            return meshIndex;
        }
        const mesh = { primitives: [] };
        meshIndex = this._meshes.length;
        this._meshes.push(mesh);
        state.setMesh(babylonMesh, meshIndex);
        const indices = babylonMesh.isUnIndexed ? null : babylonMesh.getIndices();
        const vertexBuffers = babylonMesh.geometry?.getVertexBuffers();
        const morphTargets = state.getMorphTargetsFromMesh(babylonMesh);
        const isLinesMesh = babylonMesh instanceof core_Meshes_linesMesh__WEBPACK_IMPORTED_MODULE_22__.LinesMesh;
        const isGreasedLineMesh = babylonMesh instanceof core_Meshes_GreasedLine_greasedLineBaseMesh__WEBPACK_IMPORTED_MODULE_23__.GreasedLineBaseMesh;
        const subMeshes = babylonMesh.subMeshes;
        if (vertexBuffers && subMeshes && subMeshes.length > 0) {
            for (const subMesh of subMeshes) {
                const primitive = { attributes: {} };
                const babylonMaterial = subMesh.getMaterial() || this._babylonScene.defaultMaterial;
                if (isGreasedLineMesh) {
                    const material = {
                        name: babylonMaterial.name,
                    };
                    const babylonLinesMesh = babylonMesh;
                    const colorWhite = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_24__.Color3.White();
                    const alpha = babylonLinesMesh.material?.alpha ?? 1;
                    const color = babylonLinesMesh.greasedLineMaterial?.color ?? colorWhite;
                    if (!color.equalsWithEpsilon(colorWhite, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon) || alpha < 1) {
                        material.pbrMetallicRoughness = {
                            baseColorFactor: [...color.asArray(), alpha],
                        };
                    }
                    this._materials.push(material);
                    primitive.material = this._materials.length - 1;
                }
                else if (isLinesMesh) {
                    // Special case for LinesMesh
                    const material = {
                        name: babylonMaterial.name,
                    };
                    const babylonLinesMesh = babylonMesh;
                    if (!babylonLinesMesh.color.equalsWithEpsilon(core_Maths_math_color__WEBPACK_IMPORTED_MODULE_24__.Color3.White(), core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_26__.Epsilon) || babylonLinesMesh.alpha < 1) {
                        material.pbrMetallicRoughness = {
                            baseColorFactor: [...babylonLinesMesh.color.asArray(), babylonLinesMesh.alpha],
                        };
                    }
                    this._materials.push(material);
                    primitive.material = this._materials.length - 1;
                }
                else {
                    // Material
                    // eslint-disable-next-line no-await-in-loop
                    await this._exportMaterialAsync(babylonMaterial, vertexBuffers, subMesh, primitive);
                }
                // Index buffer
                const fillMode = isLinesMesh || isGreasedLineMesh ? core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.LineListDrawMode : (babylonMesh.overrideRenderingFillMode ?? babylonMaterial.fillMode);
                let sideOrientation = babylonMaterial._getEffectiveOrientation(babylonMesh);
                if (state.wasAddedByNoopNode && !babylonMesh.getScene().useRightHandedSystem) {
                    // To properly remove a conversion node, we must also cancel out the implicit flip in its children's side orientations.
                    sideOrientation = sideOrientation === core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.ClockWiseSideOrientation ? core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.CounterClockWiseSideOrientation : core_Materials_material__WEBPACK_IMPORTED_MODULE_6__.Material.ClockWiseSideOrientation;
                }
                this._exportIndices(indices, indices ? (0,core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_19__.AreIndices32Bits)(indices, subMesh.indexCount, subMesh.indexStart, subMesh.verticesStart) : subMesh.verticesCount > 65535, indices ? subMesh.indexStart : subMesh.verticesStart, indices ? subMesh.indexCount : subMesh.verticesCount, -subMesh.verticesStart, fillMode, sideOrientation, state, primitive);
                // Vertex buffers
                for (const vertexBuffer of Object.values(vertexBuffers)) {
                    this._exportVertexBuffer(vertexBuffer, babylonMaterial, subMesh.verticesStart, subMesh.verticesCount, state, primitive);
                }
                if (morphTargets) {
                    primitive.targets = [];
                    for (const gltfMorphTarget of morphTargets) {
                        primitive.targets.push(gltfMorphTarget.attributes);
                    }
                }
                mesh.primitives.push(primitive);
                this._extensionsPostExportMeshPrimitive(primitive);
            }
        }
        if (morphTargets) {
            mesh.weights = [];
            if (!mesh.extras) {
                mesh.extras = {};
            }
            mesh.extras.targetNames = [];
            for (const gltfMorphTarget of morphTargets) {
                mesh.weights.push(gltfMorphTarget.influence);
                mesh.extras.targetNames.push(gltfMorphTarget.name);
            }
        }
        return meshIndex;
    }
}
GLTFExporter._ExtensionNames = new Array();
GLTFExporter._ExtensionFactories = {};
GLTFExporter._ExtensionOrders = {};


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

/***/ "../serializers/dist/glTF/2.0/glTFMaterialExporter.js":
/*!************************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFMaterialExporter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFMaterialExporter: () => (/* binding */ GLTFMaterialExporter),
/* harmony export */   _ConvertToGLTFPBRMetallicRoughness: () => (/* binding */ _ConvertToGLTFPBRMetallicRoughness),
/* harmony export */   _SolveMetallic: () => (/* binding */ _SolveMetallic)
/* harmony export */ });
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.scalar */ "../core/dist/Maths/math.scalar.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Misc_textureTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/textureTools */ "../core/dist/Misc/textureTools.js");
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var core_Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Materials/Textures/rawTexture */ "../core/dist/Materials/Textures/rawTexture.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_Misc_dumpTools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Misc/dumpTools */ "../core/dist/Misc/dumpTools.js");
/* harmony import */ var core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Materials/PBR/pbrBaseMaterial */ "../core/dist/Materials/PBR/pbrBaseMaterial.js");
/* harmony import */ var core_Helpers_materialConversionHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Helpers/materialConversionHelper */ "../core/dist/Helpers/materialConversionHelper.js");
/* harmony import */ var core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/Misc/fileTools */ "../core/dist/Misc/fileTools.js");
/* harmony import */ var core_Materials_PBR_openpbrMaterial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Materials/PBR/openpbrMaterial */ "../core/dist/Materials/PBR/openpbrMaterial.js");
/* harmony import */ var core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core/Materials/Textures/textureMerger */ "../core/dist/Materials/Textures/textureMerger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable github/no-then */
/* eslint-disable babylonjs/available */













const Epsilon = 1e-6;
const DielectricSpecular = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(0.04, 0.04, 0.04);
const MaxSpecularPower = 1024;
const White = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
const Black = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.BlackReadOnly;
function GetFileExtensionFromMimeType(mimeType) {
    switch (mimeType) {
        case "image/jpeg" /* ImageMimeType.JPEG */:
            return ".jpg";
        case "image/png" /* ImageMimeType.PNG */:
            return ".png";
        case "image/webp" /* ImageMimeType.WEBP */:
            return ".webp";
        case "image/avif" /* ImageMimeType.AVIF */:
            return ".avif";
        case "image/ktx2" /* ImageMimeType.KTX2 */:
            return ".ktx2";
    }
}
/**
 * @param mimeType the MIME type requested by the user
 * @returns true if the given mime type is compatible with glTF
 */
function IsSupportedMimeType(mimeType) {
    switch (mimeType) {
        case "image/jpeg" /* ImageMimeType.JPEG */:
        case "image/png" /* ImageMimeType.PNG */:
        case "image/webp" /* ImageMimeType.WEBP */:
        case "image/avif" /* ImageMimeType.AVIF */:
        case "image/ktx2" /* ImageMimeType.KTX2 */:
            return true;
        default:
            return false;
    }
}
/**
 * Gets cached image from a texture, if available.
 * @param babylonTexture texture to check for cached image
 * @returns image data if found and directly usable; null otherwise
 */
async function GetCachedImageAsync(babylonTexture) {
    const internalTexture = babylonTexture.getInternalTexture();
    if (!internalTexture || internalTexture.source !== 1 /* InternalTextureSource.Url */) {
        return null;
    }
    if (internalTexture.invertY) {
        return null;
    }
    const buffer = internalTexture._buffer;
    let data;
    let mimeType = babylonTexture.mimeType;
    if (!buffer) {
        data = await core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.LoadFileAsync(internalTexture.url);
        mimeType = (0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_10__.GetMimeType)(internalTexture.url) || mimeType;
    }
    else if (ArrayBuffer.isView(buffer)) {
        data = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    else if (buffer instanceof ArrayBuffer) {
        data = buffer;
    }
    else if (buffer instanceof Blob) {
        data = await buffer.arrayBuffer();
        mimeType = buffer.type || mimeType;
    }
    else if (typeof buffer === "string") {
        data = await core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.LoadFileAsync(buffer);
        mimeType = (0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_10__.GetMimeType)(buffer) || mimeType;
    }
    else if (typeof HTMLImageElement !== "undefined" && buffer instanceof HTMLImageElement) {
        data = await core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.LoadFileAsync(buffer.src);
        mimeType = (0,core_Misc_fileTools__WEBPACK_IMPORTED_MODULE_10__.GetMimeType)(buffer.src) || mimeType;
    }
    if (data && IsSupportedMimeType(mimeType)) {
        return new Blob([data], { type: mimeType });
    }
    return null;
}
/**
 * Computes the metallic factor from specular glossiness values.
 * @param diffuse diffused value
 * @param specular specular value
 * @param oneMinusSpecularStrength one minus the specular strength
 * @returns metallic value
 * @internal
 */
function _SolveMetallic(diffuse, specular, oneMinusSpecularStrength) {
    if (specular < DielectricSpecular.r) {
        return 0;
    }
    const a = DielectricSpecular.r;
    const b = (diffuse * oneMinusSpecularStrength) / (1.0 - DielectricSpecular.r) + specular - 2.0 * DielectricSpecular.r;
    const c = DielectricSpecular.r - specular;
    const d = b * b - 4.0 * a * c;
    return core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__.Scalar.Clamp((-b + Math.sqrt(d)) / (2.0 * a), 0, 1);
}
/**
 * Computes the metallic/roughness factors from a Standard Material.
 * @internal
 */
function _ConvertToGLTFPBRMetallicRoughness(babylonStandardMaterial) {
    const diffuse = babylonStandardMaterial.diffuseColor.toLinearSpace(babylonStandardMaterial.getScene().getEngine().useExactSrgbConversions).scale(0.5);
    const opacity = babylonStandardMaterial.alpha;
    const specularPower = core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__.Scalar.Clamp(babylonStandardMaterial.specularPower, 0, MaxSpecularPower);
    const roughness = (0,core_Helpers_materialConversionHelper__WEBPACK_IMPORTED_MODULE_9__.SpecularPowerToRoughness)(specularPower);
    const glTFPbrMetallicRoughness = {
        baseColorFactor: [diffuse.r, diffuse.g, diffuse.b, opacity],
        metallicFactor: 0,
        roughnessFactor: roughness,
    };
    return glTFPbrMetallicRoughness;
}
/**
 * Sets the glTF alpha mode to a glTF material from the Babylon Material
 * @param glTFMaterial glTF material
 * @param babylonMaterial Babylon material
 */
function SetAlphaMode(glTFMaterial, babylonMaterial) {
    if (babylonMaterial.needAlphaBlending()) {
        glTFMaterial.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
    }
    else if (babylonMaterial.needAlphaTesting()) {
        glTFMaterial.alphaMode = "MASK" /* MaterialAlphaMode.MASK */;
        glTFMaterial.alphaCutoff = babylonMaterial.alphaCutOff;
    }
}
function CreateWhiteTexture(width, height, scene) {
    const data = new Uint8Array(width * height * 4);
    for (let i = 0; i < data.length; i = i + 4) {
        data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0xff;
    }
    const rawTexture = core_Materials_Textures_rawTexture__WEBPACK_IMPORTED_MODULE_5__.RawTexture.CreateRGBATexture(data, width, height, scene);
    return rawTexture;
}
function ConvertPixelArrayToFloat32(pixels) {
    if (pixels instanceof Uint8Array) {
        const length = pixels.length;
        const buffer = new Float32Array(pixels.length);
        for (let i = 0; i < length; ++i) {
            buffer[i] = pixels[i] / 255;
        }
        return buffer;
    }
    else if (pixels instanceof Float32Array) {
        return pixels;
    }
    else {
        throw new Error("Unsupported pixel format!");
    }
}
/**
 * Utility methods for working with glTF material conversion properties.
 * @internal
 */
class GLTFMaterialExporter {
    constructor(_exporter) {
        this._exporter = _exporter;
        // Mapping to store textures
        this._textureMap = new Map();
        // Mapping of internal textures to images to avoid exporting duplicate images
        this._internalTextureToImage = {};
    }
    getTextureInfo(babylonTexture) {
        return babylonTexture ? (this._textureMap.get(babylonTexture.uniqueId) ?? null) : null;
    }
    async exportStandardMaterialAsync(babylonStandardMaterial, hasUVs) {
        const pbrMetallicRoughness = _ConvertToGLTFPBRMetallicRoughness(babylonStandardMaterial);
        const material = { name: babylonStandardMaterial.name };
        if (babylonStandardMaterial.backFaceCulling != null && !babylonStandardMaterial.backFaceCulling) {
            if (!babylonStandardMaterial.twoSidedLighting) {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.Warn(babylonStandardMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
            }
            material.doubleSided = true;
        }
        if (hasUVs) {
            const promises = [];
            const diffuseTexture = babylonStandardMaterial.diffuseTexture;
            if (diffuseTexture) {
                promises.push(this.exportTextureAsync(diffuseTexture).then((textureInfo) => {
                    if (textureInfo) {
                        pbrMetallicRoughness.baseColorTexture = textureInfo;
                    }
                }));
            }
            const bumpTexture = babylonStandardMaterial.bumpTexture;
            if (bumpTexture) {
                promises.push(this.exportTextureAsync(bumpTexture).then((textureInfo) => {
                    if (textureInfo) {
                        material.normalTexture = textureInfo;
                        if (bumpTexture.level !== 1) {
                            material.normalTexture.scale = bumpTexture.level;
                        }
                    }
                }));
            }
            const emissiveTexture = babylonStandardMaterial.emissiveTexture;
            if (emissiveTexture) {
                material.emissiveFactor = [1.0, 1.0, 1.0];
                promises.push(this.exportTextureAsync(emissiveTexture).then((textureInfo) => {
                    if (textureInfo) {
                        material.emissiveTexture = textureInfo;
                    }
                }));
            }
            const ambientTexture = babylonStandardMaterial.ambientTexture;
            if (ambientTexture) {
                promises.push(this.exportTextureAsync(ambientTexture).then((textureInfo) => {
                    if (textureInfo) {
                        const occlusionTexture = {
                            index: textureInfo.index,
                        };
                        material.occlusionTexture = occlusionTexture;
                    }
                }));
            }
            if (promises.length > 0) {
                this._exporter._materialNeedsUVsSet.add(babylonStandardMaterial);
                await Promise.all(promises);
            }
        }
        if (babylonStandardMaterial.alpha < 1.0 || babylonStandardMaterial.opacityTexture) {
            if (babylonStandardMaterial.alphaMode === core_Engines_constants__WEBPACK_IMPORTED_MODULE_6__.Constants.ALPHA_COMBINE) {
                material.alphaMode = "BLEND" /* MaterialAlphaMode.BLEND */;
            }
            else {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.Warn(babylonStandardMaterial.name + ": glTF 2.0 does not support alpha mode: " + babylonStandardMaterial.alphaMode.toString());
            }
        }
        if (babylonStandardMaterial.emissiveColor && !babylonStandardMaterial.emissiveColor.equalsWithEpsilon(Black, Epsilon)) {
            material.emissiveFactor = babylonStandardMaterial.emissiveColor.asArray();
        }
        material.pbrMetallicRoughness = pbrMetallicRoughness;
        SetAlphaMode(material, babylonStandardMaterial);
        await this._finishMaterialAsync(material, babylonStandardMaterial);
        const materials = this._exporter._materials;
        materials.push(material);
        return materials.length - 1;
    }
    async _finishMaterialAsync(glTFMaterial, babylonMaterial) {
        const textures = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", glTFMaterial, babylonMaterial);
        const promises = [];
        for (const texture of textures) {
            promises.push(this.exportTextureAsync(texture));
        }
        await Promise.all(promises);
        await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", glTFMaterial, babylonMaterial);
    }
    /**
     * Resizes the two source textures to the same dimensions.  If a texture is null, a default white texture is generated.  If both textures are null, returns null
     * @param texture1 first texture to resize
     * @param texture2 second texture to resize
     * @param scene babylonjs scene
     * @returns resized textures or null
     */
    _resizeTexturesToSameDimensions(texture1, texture2, scene) {
        const texture1Size = texture1 ? texture1.getSize() : { width: 0, height: 0 };
        const texture2Size = texture2 ? texture2.getSize() : { width: 0, height: 0 };
        let resizedTexture1;
        let resizedTexture2;
        if (texture1Size.width < texture2Size.width) {
            if (texture1 && texture1 instanceof core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture) {
                resizedTexture1 = core_Misc_textureTools__WEBPACK_IMPORTED_MODULE_3__.TextureTools.CreateResizedCopy(texture1, texture2Size.width, texture2Size.height, true);
            }
            else {
                resizedTexture1 = CreateWhiteTexture(texture2Size.width, texture2Size.height, scene);
            }
            resizedTexture2 = texture2;
        }
        else if (texture1Size.width > texture2Size.width) {
            if (texture2 && texture2 instanceof core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture) {
                resizedTexture2 = core_Misc_textureTools__WEBPACK_IMPORTED_MODULE_3__.TextureTools.CreateResizedCopy(texture2, texture1Size.width, texture1Size.height, true);
            }
            else {
                resizedTexture2 = CreateWhiteTexture(texture1Size.width, texture1Size.height, scene);
            }
            resizedTexture1 = texture1;
        }
        else {
            resizedTexture1 = texture1;
            resizedTexture2 = texture2;
        }
        return {
            texture1: resizedTexture1,
            texture2: resizedTexture2,
        };
    }
    /**
     * Convert Specular Glossiness Textures to Metallic Roughness
     * See link below for info on the material conversions from PBR Metallic/Roughness and Specular/Glossiness
     * @see https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness/examples/convert-between-workflows-bjs/js/babylon.pbrUtilities.js
     * @param diffuseTexture texture used to store diffuse information
     * @param specularGlossinessTexture texture used to store specular and glossiness information
     * @param factors specular glossiness material factors
     * @returns pbr metallic roughness interface or null
     */
    async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(diffuseTexture, specularGlossinessTexture, factors) {
        const promises = new Array();
        if (!(diffuseTexture || specularGlossinessTexture)) {
            return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        }
        const scene = diffuseTexture ? diffuseTexture.getScene() : specularGlossinessTexture ? specularGlossinessTexture.getScene() : null;
        if (scene) {
            const resizedTextures = this._resizeTexturesToSameDimensions(diffuseTexture, specularGlossinessTexture, scene);
            const diffuseSize = resizedTextures.texture1?.getSize();
            let diffuseBuffer;
            let specularGlossinessBuffer;
            const width = diffuseSize.width;
            const height = diffuseSize.height;
            const diffusePixels = await resizedTextures.texture1.readPixels();
            const specularPixels = await resizedTextures.texture2.readPixels();
            if (diffusePixels) {
                diffuseBuffer = ConvertPixelArrayToFloat32(diffusePixels);
            }
            else {
                return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
            }
            if (specularPixels) {
                specularGlossinessBuffer = ConvertPixelArrayToFloat32(specularPixels);
            }
            else {
                return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
            }
            const byteLength = specularGlossinessBuffer.byteLength;
            const metallicRoughnessBuffer = new Uint8Array(byteLength);
            const baseColorBuffer = new Uint8Array(byteLength);
            const strideSize = 4;
            const maxBaseColor = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
            let maxMetallic = 0;
            let maxRoughness = 0;
            for (let h = 0; h < height; ++h) {
                for (let w = 0; w < width; ++w) {
                    const offset = (width * h + w) * strideSize;
                    const diffuseColor = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(diffuseBuffer[offset], diffuseBuffer[offset + 1], diffuseBuffer[offset + 2])
                        .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                        .multiply(factors.diffuseColor);
                    const specularColor = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(specularGlossinessBuffer[offset], specularGlossinessBuffer[offset + 1], specularGlossinessBuffer[offset + 2])
                        .toLinearSpace(scene.getEngine().useExactSrgbConversions)
                        .multiply(factors.specularColor);
                    const glossiness = specularGlossinessBuffer[offset + 3] * factors.glossiness;
                    const specularGlossiness = {
                        diffuseColor: diffuseColor,
                        specularColor: specularColor,
                        glossiness: glossiness,
                    };
                    const metallicRoughness = this._convertSpecularGlossinessToMetallicRoughness(specularGlossiness);
                    maxBaseColor.r = Math.max(maxBaseColor.r, metallicRoughness.baseColor.r);
                    maxBaseColor.g = Math.max(maxBaseColor.g, metallicRoughness.baseColor.g);
                    maxBaseColor.b = Math.max(maxBaseColor.b, metallicRoughness.baseColor.b);
                    maxMetallic = Math.max(maxMetallic, metallicRoughness.metallic);
                    maxRoughness = Math.max(maxRoughness, metallicRoughness.roughness);
                    baseColorBuffer[offset] = metallicRoughness.baseColor.r * 255;
                    baseColorBuffer[offset + 1] = metallicRoughness.baseColor.g * 255;
                    baseColorBuffer[offset + 2] = metallicRoughness.baseColor.b * 255;
                    baseColorBuffer[offset + 3] = resizedTextures.texture1.hasAlpha ? diffuseBuffer[offset + 3] * 255 : 255;
                    metallicRoughnessBuffer[offset] = 0;
                    metallicRoughnessBuffer[offset + 1] = metallicRoughness.roughness * 255;
                    metallicRoughnessBuffer[offset + 2] = metallicRoughness.metallic * 255;
                    metallicRoughnessBuffer[offset + 3] = 255;
                }
            }
            // Retrieves the metallic roughness factors from the maximum texture values.
            const metallicRoughnessFactors = {
                baseColor: maxBaseColor,
                metallic: maxMetallic,
                roughness: maxRoughness,
            };
            let writeOutMetallicRoughnessTexture = false;
            let writeOutBaseColorTexture = false;
            for (let h = 0; h < height; ++h) {
                for (let w = 0; w < width; ++w) {
                    const destinationOffset = (width * h + w) * strideSize;
                    baseColorBuffer[destinationOffset] /= metallicRoughnessFactors.baseColor.r > Epsilon ? metallicRoughnessFactors.baseColor.r : 1;
                    baseColorBuffer[destinationOffset + 1] /= metallicRoughnessFactors.baseColor.g > Epsilon ? metallicRoughnessFactors.baseColor.g : 1;
                    baseColorBuffer[destinationOffset + 2] /= metallicRoughnessFactors.baseColor.b > Epsilon ? metallicRoughnessFactors.baseColor.b : 1;
                    const linearBaseColorPixel = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(baseColorBuffer[destinationOffset], baseColorBuffer[destinationOffset + 1], baseColorBuffer[destinationOffset + 2]);
                    const sRGBBaseColorPixel = linearBaseColorPixel.toGammaSpace(scene.getEngine().useExactSrgbConversions);
                    baseColorBuffer[destinationOffset] = sRGBBaseColorPixel.r * 255;
                    baseColorBuffer[destinationOffset + 1] = sRGBBaseColorPixel.g * 255;
                    baseColorBuffer[destinationOffset + 2] = sRGBBaseColorPixel.b * 255;
                    if (!sRGBBaseColorPixel.equalsWithEpsilon(White, Epsilon)) {
                        writeOutBaseColorTexture = true;
                    }
                    metallicRoughnessBuffer[destinationOffset + 1] /= metallicRoughnessFactors.roughness > Epsilon ? metallicRoughnessFactors.roughness : 1;
                    metallicRoughnessBuffer[destinationOffset + 2] /= metallicRoughnessFactors.metallic > Epsilon ? metallicRoughnessFactors.metallic : 1;
                    const metallicRoughnessPixel = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromInts(255, metallicRoughnessBuffer[destinationOffset + 1], metallicRoughnessBuffer[destinationOffset + 2]);
                    if (!metallicRoughnessPixel.equalsWithEpsilon(White, Epsilon)) {
                        writeOutMetallicRoughnessTexture = true;
                    }
                }
            }
            if (writeOutMetallicRoughnessTexture) {
                promises.push((0,core_Misc_dumpTools__WEBPACK_IMPORTED_MODULE_7__.EncodeImageAsync)(metallicRoughnessBuffer, width, height).then((data) => {
                    metallicRoughnessFactors.metallicRoughnessTextureData = data;
                }));
            }
            if (writeOutBaseColorTexture) {
                promises.push((0,core_Misc_dumpTools__WEBPACK_IMPORTED_MODULE_7__.EncodeImageAsync)(baseColorBuffer, width, height).then((data) => {
                    metallicRoughnessFactors.baseColorTextureData = data;
                }));
            }
            return await Promise.all(promises).then(() => {
                return metallicRoughnessFactors;
            });
        }
        else {
            return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!");
        }
    }
    /**
     * Converts specular glossiness material properties to metallic roughness
     * @param specularGlossiness interface with specular glossiness material properties
     * @returns interface with metallic roughness material properties
     */
    _convertSpecularGlossinessToMetallicRoughness(specularGlossiness) {
        const diffusePerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.diffuseColor);
        const specularPerceivedBrightness = this._getPerceivedBrightness(specularGlossiness.specularColor);
        const oneMinusSpecularStrength = 1 - this._getMaxComponent(specularGlossiness.specularColor);
        const metallic = _SolveMetallic(diffusePerceivedBrightness, specularPerceivedBrightness, oneMinusSpecularStrength);
        const baseColorFromDiffuse = specularGlossiness.diffuseColor.scale(oneMinusSpecularStrength / (1.0 - DielectricSpecular.r) / Math.max(1 - metallic, Epsilon));
        const baseColorFromSpecular = specularGlossiness.specularColor.subtract(DielectricSpecular.scale(1 - metallic)).scale(1 / Math.max(metallic, Epsilon));
        let baseColor = core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.Lerp(baseColorFromDiffuse, baseColorFromSpecular, metallic * metallic);
        baseColor = baseColor.clampToRef(0, 1, baseColor);
        const metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: 1 - specularGlossiness.glossiness,
        };
        return metallicRoughness;
    }
    /**
     * Calculates the surface reflectance, independent of lighting conditions
     * @param color Color source to calculate brightness from
     * @returns number representing the perceived brightness, or zero if color is undefined
     */
    _getPerceivedBrightness(color) {
        return Math.sqrt(0.299 * color.r * color.r + 0.587 * color.g * color.g + 0.114 * color.b * color.b);
    }
    /**
     * Returns the maximum color component value
     * @param color
     * @returns maximum color component value, or zero if color is null or undefined
     */
    _getMaxComponent(color) {
        return Math.max(color.r, Math.max(color.g, color.b));
    }
    /**
     * Convert a PBRMaterial (Metallic/Roughness) to Metallic Roughness factors
     * @param baseColor Base color of the material
     * @param metallic Metallic factor of the material
     * @param roughness Roughness factor of the material
     * @param albedoTexture Albedo texture of the material
     * @param metallicTexture Metallic texture of the material
     * @param roughnessTexture Roughness texture of the material
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param glTFPbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasUVs specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    async _convertMetalRoughFactorsToMetallicRoughnessAsync(baseColor, metallic, roughness, albedoTexture, metallicTexture, roughnessTexture, babylonPBRMaterial, glTFPbrMetallicRoughness, hasUVs) {
        const promises = [];
        const metallicRoughness = {
            baseColor: baseColor,
            metallic: metallic,
            roughness: roughness,
        };
        if (hasUVs) {
            if (babylonPBRMaterial instanceof core_Materials_PBR_openpbrMaterial__WEBPACK_IMPORTED_MODULE_11__.OpenPBRMaterial) {
                if (babylonPBRMaterial.geometryOpacityTexture) {
                    // Merge baseColor and opacity
                    const albedoId = albedoTexture && albedoTexture.getInternalTexture() ? albedoTexture.getInternalTexture().uniqueId : 0;
                    const opacityId = babylonPBRMaterial.geometryOpacityTexture && babylonPBRMaterial.geometryOpacityTexture.getInternalTexture()
                        ? babylonPBRMaterial.geometryOpacityTexture.getInternalTexture().uniqueId
                        : 0;
                    const mergedId = Number(`${albedoId}${opacityId}`);
                    const glTFTexture = this._textureMap.get(mergedId);
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                    }
                    else {
                        promises.push((0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.MergeTexturesAsync)("baseColorOpacityTexture", (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateRGBAConfiguration)(albedoTexture ? (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(albedoTexture, 0) : (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateConstantInput)(1.0), albedoTexture ? (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(albedoTexture, 1) : (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateConstantInput)(1.0), albedoTexture ? (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(albedoTexture, 2) : (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateConstantInput)(1.0), (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(babylonPBRMaterial.geometryOpacityTexture, 0)), babylonPBRMaterial.getScene()).then(async (mergedTexture) => {
                            const glTFTexture = await this.exportTextureAsync(mergedTexture, mergedId);
                            if (glTFTexture) {
                                glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                            }
                        }));
                    }
                }
                else {
                    if (albedoTexture) {
                        promises.push(this.exportTextureAsync(albedoTexture).then((glTFTexture) => {
                            if (glTFTexture) {
                                glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                            }
                        }));
                    }
                }
                if (babylonPBRMaterial._useMetallicFromMetallicTextureBlue && metallicTexture) {
                    promises.push(this.exportTextureAsync(metallicTexture).then((glTFTexture) => {
                        if (glTFTexture) {
                            glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                        }
                    }));
                }
                else if (roughnessTexture || metallicTexture) {
                    const metallicId = metallicTexture && metallicTexture.getInternalTexture() ? metallicTexture.getInternalTexture().uniqueId : 0;
                    const roughnessId = roughnessTexture && roughnessTexture.getInternalTexture() ? roughnessTexture.getInternalTexture().uniqueId : 0;
                    const mergedId = Number(`${metallicId}${roughnessId}`);
                    const glTFTexture = this._textureMap.get(mergedId);
                    if (glTFTexture) {
                        glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                    }
                    else {
                        promises.push((0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.MergeTexturesAsync)("MetalRoughTexture", (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateRGBAConfiguration)(babylonPBRMaterial.ambientOcclusionTexture ? (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(babylonPBRMaterial.ambientOcclusionTexture, 0) : (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateConstantInput)(1.0), roughnessTexture ? (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(roughnessTexture, 0) : (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateConstantInput)(1.0), metallicTexture ? (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateTextureInput)(metallicTexture, 0) : (0,core_Materials_Textures_textureMerger__WEBPACK_IMPORTED_MODULE_12__.CreateConstantInput)(1.0)), babylonPBRMaterial.getScene()).then(async (mergedTexture) => {
                            const glTFTexture = await this.exportTextureAsync(mergedTexture, mergedId);
                            if (glTFTexture) {
                                glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                            }
                        }));
                    }
                }
            }
            else {
                if (albedoTexture) {
                    promises.push(this.exportTextureAsync(albedoTexture).then((glTFTexture) => {
                        if (glTFTexture) {
                            glTFPbrMetallicRoughness.baseColorTexture = glTFTexture;
                        }
                    }));
                }
                if (metallicTexture) {
                    promises.push(this.exportTextureAsync(metallicTexture).then((glTFTexture) => {
                        if (glTFTexture) {
                            glTFPbrMetallicRoughness.metallicRoughnessTexture = glTFTexture;
                        }
                    }));
                }
            }
        }
        if (promises.length > 0) {
            this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
            await Promise.all(promises);
        }
        return metallicRoughness;
    }
    _getTextureSampler(texture) {
        const sampler = {};
        if (!texture || !(texture instanceof core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture)) {
            return sampler;
        }
        const wrapS = this._getGLTFTextureWrapMode(texture.wrapU);
        if (wrapS !== 10497 /* TextureWrapMode.REPEAT */) {
            sampler.wrapS = wrapS;
        }
        const wrapT = this._getGLTFTextureWrapMode(texture.wrapV);
        if (wrapT !== 10497 /* TextureWrapMode.REPEAT */) {
            sampler.wrapT = wrapT;
        }
        switch (texture.samplingMode) {
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.LINEAR_LINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.LINEAR_NEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.NEAREST_LINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9729 /* TextureMinFilter.LINEAR */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.NEAREST_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.NEAREST_NEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9728 /* TextureMinFilter.NEAREST */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.NEAREST_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.LINEAR_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.LINEAR_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.NEAREST_NEAREST_MIPLINEAR: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9986 /* TextureMinFilter.NEAREST_MIPMAP_LINEAR */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.LINEAR_LINEAR_MIPLINEAR: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9987 /* TextureMinFilter.LINEAR_MIPMAP_LINEAR */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.LINEAR_LINEAR_MIPNEAREST: {
                sampler.magFilter = 9729 /* TextureMagFilter.LINEAR */;
                sampler.minFilter = 9985 /* TextureMinFilter.LINEAR_MIPMAP_NEAREST */;
                break;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.NEAREST_NEAREST_MIPNEAREST: {
                sampler.magFilter = 9728 /* TextureMagFilter.NEAREST */;
                sampler.minFilter = 9984 /* TextureMinFilter.NEAREST_MIPMAP_NEAREST */;
                break;
            }
        }
        return sampler;
    }
    _getGLTFTextureWrapMode(wrapMode) {
        switch (wrapMode) {
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.WRAP_ADDRESSMODE: {
                return 10497 /* TextureWrapMode.REPEAT */;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.CLAMP_ADDRESSMODE: {
                return 33071 /* TextureWrapMode.CLAMP_TO_EDGE */;
            }
            case core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture.MIRROR_ADDRESSMODE: {
                return 33648 /* TextureWrapMode.MIRRORED_REPEAT */;
            }
            default: {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.Error(`Unsupported Texture Wrap Mode ${wrapMode}!`);
                return 10497 /* TextureWrapMode.REPEAT */;
            }
        }
    }
    /**
     * Convert a PBRMaterial (Specular/Glossiness) to Metallic Roughness factors
     * @param babylonPBRMaterial BJS PBR Metallic Roughness Material
     * @param pbrMetallicRoughness glTF PBR Metallic Roughness interface
     * @param hasUVs specifies if texture coordinates are present on the submesh to determine if textures should be applied
     * @returns glTF PBR Metallic Roughness factors
     */
    async _convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, pbrMetallicRoughness, hasUVs) {
        const specGloss = {
            diffuseColor: babylonPBRMaterial._albedoColor,
            specularColor: babylonPBRMaterial._reflectivityColor,
            glossiness: babylonPBRMaterial._microSurface,
        };
        const albedoTexture = babylonPBRMaterial._albedoTexture;
        const reflectivityTexture = babylonPBRMaterial._reflectivityTexture;
        const useMicrosurfaceFromReflectivityMapAlpha = babylonPBRMaterial._useMicroSurfaceFromReflectivityMapAlpha;
        if (reflectivityTexture && !useMicrosurfaceFromReflectivityMapAlpha) {
            return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        }
        if ((albedoTexture || reflectivityTexture) && hasUVs) {
            this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
            const samplerIndex = this._exportTextureSampler(albedoTexture || reflectivityTexture);
            const metallicRoughnessFactors = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(albedoTexture, reflectivityTexture, specGloss);
            const textures = this._exporter._textures;
            if (metallicRoughnessFactors.baseColorTextureData) {
                const imageIndex = await this._exportImageAsync(`baseColor${textures.length}`, metallicRoughnessFactors.baseColorTextureData);
                pbrMetallicRoughness.baseColorTexture = this._exportTextureInfo(imageIndex, samplerIndex, albedoTexture?.coordinatesIndex);
            }
            if (metallicRoughnessFactors.metallicRoughnessTextureData) {
                const imageIndex = await this._exportImageAsync(`metallicRoughness${textures.length}`, metallicRoughnessFactors.metallicRoughnessTextureData);
                pbrMetallicRoughness.metallicRoughnessTexture = this._exportTextureInfo(imageIndex, samplerIndex, reflectivityTexture?.coordinatesIndex);
            }
            return metallicRoughnessFactors;
        }
        else {
            return this._convertSpecularGlossinessToMetallicRoughness(specGloss);
        }
    }
    async exportPBRMaterialAsync(babylonPBRMaterial, hasUVs) {
        const glTFPbrMetallicRoughness = {};
        const glTFMaterial = {
            name: babylonPBRMaterial.name,
        };
        const useMetallicRoughness = babylonPBRMaterial.isMetallicWorkflow();
        if (useMetallicRoughness) {
            const albedoColor = babylonPBRMaterial._albedoColor;
            const alpha = babylonPBRMaterial.alpha;
            if (albedoColor) {
                glTFPbrMetallicRoughness.baseColorFactor = [albedoColor.r, albedoColor.g, albedoColor.b, alpha];
            }
        }
        const metallicRoughness = useMetallicRoughness
            ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(babylonPBRMaterial._albedoColor, babylonPBRMaterial._metallic, babylonPBRMaterial._roughness, babylonPBRMaterial._albedoTexture, babylonPBRMaterial._metallicTexture, babylonPBRMaterial._metallicTexture, babylonPBRMaterial, glTFPbrMetallicRoughness, hasUVs)
            : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(babylonPBRMaterial, glTFPbrMetallicRoughness, hasUVs);
        await this._setMetallicRoughnessPbrMaterialAsync(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, hasUVs);
        await this._finishMaterialAsync(glTFMaterial, babylonPBRMaterial);
        const materials = this._exporter._materials;
        materials.push(glTFMaterial);
        return materials.length - 1;
    }
    async _setMetallicRoughnessPbrMaterialAsync(metallicRoughness, babylonPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, hasUVs) {
        SetAlphaMode(glTFMaterial, babylonPBRMaterial);
        if (!metallicRoughness.baseColor.equalsWithEpsilon(White, Epsilon) || !core_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_1__.Scalar.WithinEpsilon(babylonPBRMaterial.alpha, 1, Epsilon)) {
            glTFPbrMetallicRoughness.baseColorFactor = [metallicRoughness.baseColor.r, metallicRoughness.baseColor.g, metallicRoughness.baseColor.b, babylonPBRMaterial.alpha];
        }
        if (metallicRoughness.metallic != null && metallicRoughness.metallic !== 1) {
            glTFPbrMetallicRoughness.metallicFactor = metallicRoughness.metallic;
        }
        if (metallicRoughness.roughness != null && metallicRoughness.roughness !== 1) {
            glTFPbrMetallicRoughness.roughnessFactor = metallicRoughness.roughness;
        }
        if (babylonPBRMaterial.backFaceCulling != null && !babylonPBRMaterial.backFaceCulling) {
            if (!babylonPBRMaterial._twoSidedLighting) {
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.Warn(babylonPBRMaterial.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF.");
            }
            glTFMaterial.doubleSided = true;
        }
        if (hasUVs) {
            const promises = [];
            const bumpTexture = babylonPBRMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_8__.PBRBaseMaterial ? babylonPBRMaterial._bumpTexture : babylonPBRMaterial.geometryNormalTexture;
            if (bumpTexture) {
                promises.push(this.exportTextureAsync(bumpTexture).then((glTFTexture) => {
                    if (glTFTexture) {
                        glTFMaterial.normalTexture = glTFTexture;
                        if (bumpTexture.level !== 1) {
                            glTFMaterial.normalTexture.scale = bumpTexture.level;
                        }
                    }
                }));
            }
            const ambientTexture = babylonPBRMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_8__.PBRBaseMaterial ? babylonPBRMaterial._ambientTexture : babylonPBRMaterial.ambientOcclusionTexture;
            if (ambientTexture) {
                promises.push(new Promise(async (resolve) => {
                    if (babylonPBRMaterial instanceof core_Materials_PBR_openpbrMaterial__WEBPACK_IMPORTED_MODULE_11__.OpenPBRMaterial && glTFPbrMetallicRoughness.metallicRoughnessTexture) {
                        // The metallicRoughnessTexture already contains the ambient occlusion data in its red channel, we don't need to export it again
                        // However, we still need to set the texture info on the material.
                        const samplerIndex = this._exportTextureSampler(ambientTexture);
                        const imageIndex = this._exporter._textures[glTFPbrMetallicRoughness.metallicRoughnessTexture.index].source;
                        const textureInfo = this._exportTextureInfo(imageIndex, samplerIndex, ambientTexture.coordinatesIndex);
                        this._textureMap.set(ambientTexture.uniqueId, textureInfo);
                        this._exporter._extensionsPostExportTextures("exporter", textureInfo, ambientTexture);
                        return resolve(textureInfo);
                    }
                    else {
                        return resolve(await this.exportTextureAsync(ambientTexture));
                    }
                }).then(async (glTFTexture) => {
                    if (glTFTexture) {
                        const occlusionTexture = {
                            index: glTFTexture.index,
                            texCoord: glTFTexture.texCoord,
                            extensions: glTFTexture.extensions,
                        };
                        glTFMaterial.occlusionTexture = occlusionTexture;
                        if (babylonPBRMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_8__.PBRBaseMaterial) {
                            occlusionTexture.strength = babylonPBRMaterial._ambientTextureStrength;
                        }
                        else {
                            occlusionTexture.strength = babylonPBRMaterial.ambientOcclusionTexture.level;
                        }
                    }
                }));
            }
            const emissiveTexture = babylonPBRMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_8__.PBRBaseMaterial ? babylonPBRMaterial._emissiveTexture : babylonPBRMaterial.emissionColorTexture;
            if (emissiveTexture) {
                promises.push(this.exportTextureAsync(emissiveTexture).then((glTFTexture) => {
                    if (glTFTexture) {
                        glTFMaterial.emissiveTexture = glTFTexture;
                    }
                }));
            }
            if (promises.length > 0) {
                this._exporter._materialNeedsUVsSet.add(babylonPBRMaterial);
                await Promise.all(promises);
            }
        }
        const emissiveColor = babylonPBRMaterial instanceof core_Materials_PBR_pbrBaseMaterial__WEBPACK_IMPORTED_MODULE_8__.PBRBaseMaterial ? babylonPBRMaterial._emissiveColor : babylonPBRMaterial.emissionColor;
        if (!emissiveColor.equalsWithEpsilon(Black, Epsilon)) {
            glTFMaterial.emissiveFactor = emissiveColor.asArray();
        }
        glTFMaterial.pbrMetallicRoughness = glTFPbrMetallicRoughness;
    }
    async exportOpenPBRMaterialAsync(babylonOpenPBRMaterial, hasUVs) {
        const glTFPbrMetallicRoughness = {};
        const glTFMaterial = {
            name: babylonOpenPBRMaterial.name,
        };
        const albedoColor = babylonOpenPBRMaterial.baseColor;
        const alpha = babylonOpenPBRMaterial.geometryOpacity;
        if (albedoColor) {
            glTFPbrMetallicRoughness.baseColorFactor = [albedoColor.r, albedoColor.g, albedoColor.b, alpha];
        }
        const metallicRoughness = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(babylonOpenPBRMaterial.baseColor, babylonOpenPBRMaterial.baseMetalness, babylonOpenPBRMaterial.specularRoughness, babylonOpenPBRMaterial.baseColorTexture, babylonOpenPBRMaterial.baseMetalnessTexture, babylonOpenPBRMaterial.specularRoughnessTexture, babylonOpenPBRMaterial, glTFPbrMetallicRoughness, hasUVs);
        await this._setMetallicRoughnessPbrMaterialAsync(metallicRoughness, babylonOpenPBRMaterial, glTFMaterial, glTFPbrMetallicRoughness, hasUVs);
        await this._finishMaterialAsync(glTFMaterial, babylonOpenPBRMaterial);
        const materials = this._exporter._materials;
        materials.push(glTFMaterial);
        return materials.length - 1;
    }
    async exportTextureAsync(babylonTexture, overrideId = null) {
        let textureInfo = this._textureMap.get(overrideId ?? babylonTexture.uniqueId);
        if (textureInfo) {
            return textureInfo;
        }
        const samplerIndex = this._exportTextureSampler(babylonTexture);
        const imageIndex = await this._exportTextureImageAsync(babylonTexture);
        textureInfo = this._exportTextureInfo(imageIndex, samplerIndex, babylonTexture.coordinatesIndex);
        this._textureMap.set(overrideId ?? babylonTexture.uniqueId, textureInfo);
        this._exporter._extensionsPostExportTextures("exporter", textureInfo, babylonTexture);
        return textureInfo;
    }
    async _exportTextureImageAsync(babylonTexture) {
        const requestedMimeType = babylonTexture.mimeType ?? "none";
        // TODO: Add an official way for users to export using a different mime type
        // than the one they loaded with (which is denoted by Texture.mimeType)
        const internalTextureToImage = this._internalTextureToImage;
        const internalTextureUniqueId = babylonTexture.getInternalTexture().uniqueId;
        internalTextureToImage[internalTextureUniqueId] = internalTextureToImage[internalTextureUniqueId] || {};
        let imageIndexPromise = internalTextureToImage[internalTextureUniqueId][requestedMimeType];
        if (imageIndexPromise === undefined) {
            imageIndexPromise = (async () => {
                // Try to get the image from memory first, if applicable
                const cache = await GetCachedImageAsync(babylonTexture);
                if (cache && (requestedMimeType === "none" || cache.type === requestedMimeType)) {
                    return await this._exportImageAsync(babylonTexture.name, cache);
                }
                // Preserve texture mime type if defined
                let mimeType = "image/png" /* ImageMimeType.PNG */;
                if (requestedMimeType !== "none") {
                    if (IsSupportedMimeType(requestedMimeType)) {
                        mimeType = requestedMimeType;
                    }
                    else {
                        mimeType = "image/png" /* ImageMimeType.PNG */;
                        core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.Warn(`Unsupported media type: ${requestedMimeType}. Exporting texture as PNG.`);
                    }
                }
                const size = babylonTexture.getSize();
                const pixels = await (0,core_Misc_textureTools__WEBPACK_IMPORTED_MODULE_3__.GetTextureDataAsync)(babylonTexture);
                const imageData = await (0,core_Misc_dumpTools__WEBPACK_IMPORTED_MODULE_7__.EncodeImageAsync)(pixels, size.width, size.height, mimeType);
                return await this._exportImageAsync(babylonTexture.name, imageData);
            })();
            internalTextureToImage[internalTextureUniqueId][requestedMimeType] = imageIndexPromise;
        }
        return await imageIndexPromise;
    }
    async _exportImageAsync(name, imageData) {
        const images = this._exporter._images;
        let image;
        if (this._exporter._shouldUseGlb) {
            image = {
                name: name,
                mimeType: imageData.type,
                bufferView: undefined, // Will be updated later by BufferManager
            };
            const data = await imageData.arrayBuffer();
            const bufferView = this._exporter._bufferManager.createBufferView(new Uint8Array(data));
            this._exporter._bufferManager.setBufferView(image, bufferView);
        }
        else {
            // Build a unique URI
            const baseName = name.replace(/\.\/|\/|\.\\|\\/g, "_");
            const extension = GetFileExtensionFromMimeType(imageData.type);
            let fileName = baseName + extension;
            if (images.some((image) => image.uri === fileName)) {
                fileName = `${baseName}_${core_Misc_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.RandomId()}${extension}`;
            }
            image = {
                name: name,
                uri: fileName,
            };
            this._exporter._imageData[fileName] = imageData; // Save image data to be written to file later
        }
        images.push(image);
        return images.length - 1;
    }
    _exportTextureInfo(imageIndex, samplerIndex, coordinatesIndex) {
        const textures = this._exporter._textures;
        let textureIndex = textures.findIndex((t) => t.sampler == samplerIndex && t.source === imageIndex);
        if (textureIndex === -1) {
            textureIndex = textures.length;
            textures.push({
                source: imageIndex,
                sampler: samplerIndex,
            });
        }
        const textureInfo = { index: textureIndex };
        if (coordinatesIndex) {
            textureInfo.texCoord = coordinatesIndex;
        }
        return textureInfo;
    }
    _exportTextureSampler(texture) {
        const sampler = this._getTextureSampler(texture);
        // if a pre-existing sampler with identical parameters exists, then reuse the previous sampler
        const samplers = this._exporter._samplers;
        const samplerIndex = samplers.findIndex((s) => s.minFilter === sampler.minFilter && s.magFilter === sampler.magFilter && s.wrapS === sampler.wrapS && s.wrapT === sampler.wrapT);
        if (samplerIndex !== -1) {
            return samplerIndex;
        }
        samplers.push(sampler);
        return samplers.length - 1;
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

/***/ "../serializers/dist/glTF/2.0/glTFMorphTargetsUtilities.js":
/*!*****************************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFMorphTargetsUtilities.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildMorphTargetBuffers: () => (/* binding */ BuildMorphTargetBuffers)
/* harmony export */ });
/* harmony import */ var _glTFUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFUtilities */ "../serializers/dist/glTF/2.0/glTFUtilities.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





function BuildMorphTargetBuffers(morphTarget, mesh, bufferManager, bufferViews, accessors, convertToRightHanded) {
    const result = {
        attributes: {},
        influence: morphTarget.influence,
        name: morphTarget.name,
    };
    const geometry = mesh.geometry;
    if (!geometry) {
        core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen.");
        return result;
    }
    const flipX = convertToRightHanded ? -1 : 1;
    const floatSize = 4;
    const difference = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Zero();
    let vertexStart = 0;
    let vertexCount = 0;
    if (morphTarget.hasPositions) {
        const morphPositions = morphTarget.getPositions();
        const originalPositions = geometry.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind); // Bypasses any instance data of mesh
        if (originalPositions) {
            const positionData = new Float32Array(originalPositions.length);
            const min = [Infinity, Infinity, Infinity];
            const max = [-Infinity, -Infinity, -Infinity];
            vertexCount = originalPositions.length / 3;
            vertexStart = 0;
            for (let i = vertexStart; i < vertexCount; ++i) {
                const originalPosition = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(originalPositions, i * 3);
                const morphPosition = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(morphPositions, i * 3);
                morphPosition.subtractToRef(originalPosition, difference);
                difference.x *= flipX;
                min[0] = Math.min(min[0], difference.x);
                max[0] = Math.max(max[0], difference.x);
                min[1] = Math.min(min[1], difference.y);
                max[1] = Math.max(max[1], difference.y);
                min[2] = Math.min(min[2], difference.z);
                max[2] = Math.max(max[2], difference.z);
                positionData[i * 3] = difference.x;
                positionData[i * 3 + 1] = difference.y;
                positionData[i * 3 + 2] = difference.z;
            }
            const bufferView = bufferManager.createBufferView(positionData, floatSize * 3);
            const accessor = bufferManager.createAccessor(bufferView, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, morphPositions.length / 3, 0, { min, max });
            accessors.push(accessor);
            result.attributes["POSITION"] = accessors.length - 1;
        }
        else {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Warn(`Morph target positions for mesh ${mesh.name} were not exported. Mesh does not have position vertex data`);
        }
    }
    if (morphTarget.hasNormals) {
        const morphNormals = morphTarget.getNormals();
        const originalNormals = geometry.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind);
        if (originalNormals) {
            const normalData = new Float32Array(originalNormals.length);
            vertexCount = originalNormals.length / 3;
            vertexStart = 0;
            for (let i = vertexStart; i < vertexCount; ++i) {
                const originalNormal = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(originalNormals, i * 3).normalize();
                const morphNormal = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(morphNormals, i * 3).normalize();
                morphNormal.subtractToRef(originalNormal, difference);
                normalData[i * 3] = difference.x * flipX;
                normalData[i * 3 + 1] = difference.y;
                normalData[i * 3 + 2] = difference.z;
            }
            const bufferView = bufferManager.createBufferView(normalData, floatSize * 3);
            const accessor = bufferManager.createAccessor(bufferView, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, morphNormals.length / 3, 0);
            accessors.push(accessor);
            result.attributes["NORMAL"] = accessors.length - 1;
        }
        else {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Warn(`Morph target normals for mesh ${mesh.name} were not exported. Mesh does not have normals vertex data`);
        }
    }
    if (morphTarget.hasTangents) {
        const morphTangents = morphTarget.getTangents();
        const originalTangents = geometry.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind);
        if (originalTangents) {
            vertexCount = originalTangents.length / 4;
            const tangentData = new Float32Array(vertexCount * 3);
            vertexStart = 0;
            for (let i = vertexStart; i < vertexCount; ++i) {
                // Only read the x, y, z components and ignore w
                const originalTangent = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(originalTangents, i * 4);
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.NormalizeTangent)(originalTangent);
                // Morph target tangents omit the w component so it won't be present in the data
                const morphTangent = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(morphTangents, i * 3);
                (0,_glTFUtilities__WEBPACK_IMPORTED_MODULE_0__.NormalizeTangent)(morphTangent);
                morphTangent.subtractToRef(originalTangent, difference);
                tangentData[i * 3] = difference.x * flipX;
                tangentData[i * 3 + 1] = difference.y;
                tangentData[i * 3 + 2] = difference.z;
            }
            const bufferView = bufferManager.createBufferView(tangentData, floatSize * 3);
            const accessor = bufferManager.createAccessor(bufferView, "VEC3" /* AccessorType.VEC3 */, 5126 /* AccessorComponentType.FLOAT */, vertexCount, 0);
            accessors.push(accessor);
            result.attributes["TANGENT"] = accessors.length - 1;
        }
        else {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Warn(`Morph target tangents for mesh ${mesh.name} were not exported. Mesh does not have tangents vertex data`);
        }
    }
    if (morphTarget.hasColors) {
        const morphColors = morphTarget.getColors();
        const originalColors = geometry.getVerticesData(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
        const buffer = geometry.getVertexBuffer(core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
        if (originalColors && buffer) {
            const componentSize = buffer.getSize();
            vertexCount = originalColors.length / componentSize;
            const colorData = new Float32Array(vertexCount * componentSize);
            vertexStart = 0;
            for (let i = vertexStart; i < vertexCount; ++i) {
                if (componentSize === 3) {
                    const originalColor = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(originalColors, i * componentSize);
                    const morphColor = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.FromArray(morphColors, i * componentSize);
                    morphColor.subtractToRef(originalColor, difference);
                    colorData[i * 3] = difference.x;
                    colorData[i * 3 + 1] = difference.y;
                    colorData[i * 3 + 2] = difference.z;
                }
                else if (componentSize === 4) {
                    const difference4 = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector4();
                    const originalColor = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector4.FromArray(originalColors, i * componentSize);
                    const morphColor = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector4.FromArray(morphColors, i * componentSize);
                    morphColor.subtractToRef(originalColor, difference4);
                    colorData[i * 4] = difference4.x;
                    colorData[i * 4 + 1] = difference4.y;
                    colorData[i * 4 + 2] = difference4.z;
                    colorData[i * 4 + 3] = difference4.w;
                }
                else {
                    core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Warn(`Unsupported number of components for color attribute: ${componentSize}`);
                }
            }
            const bufferView = bufferManager.createBufferView(colorData, floatSize * componentSize);
            const accessor = bufferManager.createAccessor(bufferView, componentSize === 3 ? "VEC3" /* AccessorType.VEC3 */ : "VEC4" /* AccessorType.VEC4 */, 5126 /* AccessorComponentType.FLOAT */, vertexCount, 0);
            accessors.push(accessor);
            result.attributes["COLOR_0"] = accessors.length - 1;
        }
        else {
            core_Misc_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.Warn(`Morph target colors for mesh ${mesh.name} were not exported. Mesh does not have colors vertex data`);
        }
    }
    return result;
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

/***/ "../serializers/dist/glTF/2.0/glTFSerializer.js":
/*!******************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFSerializer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF2Export: () => (/* binding */ GLTF2Export)
/* harmony export */ });
/* harmony import */ var _glTFExporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFExporter */ "../serializers/dist/glTF/2.0/glTFExporter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Class for generating glTF data from a Babylon scene.
 */
class GLTF2Export {
    /**
     * Exports the scene to .gltf file format
     * @param scene Babylon scene
     * @param fileName Name to use for the .gltf file
     * @param options Exporter options
     * @returns Returns the exported data
     */
    static async GLTFAsync(scene, fileName, options) {
        if (!options || !options.exportWithoutWaitingForScene) {
            await scene.whenReadyAsync();
        }
        const exporter = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter(scene, options);
        const data = await exporter.generateGLTFAsync(fileName.replace(/\.[^/.]+$/, ""));
        exporter.dispose();
        return data;
    }
    /**
     * Exports the scene to .glb file format
     * @param scene Babylon scene
     * @param fileName Name to use for the .glb file
     * @param options Exporter options
     * @returns Returns the exported data
     */
    static async GLBAsync(scene, fileName, options) {
        if (!options || !options.exportWithoutWaitingForScene) {
            await scene.whenReadyAsync();
        }
        const exporter = new _glTFExporter__WEBPACK_IMPORTED_MODULE_0__.GLTFExporter(scene, options);
        const data = await exporter.generateGLBAsync(fileName.replace(/\.[^/.]+$/, ""));
        exporter.dispose();
        return data;
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

/***/ "../serializers/dist/glTF/2.0/glTFUtilities.js":
/*!*****************************************************!*\
  !*** ../serializers/dist/glTF/2.0/glTFUtilities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapseChildIntoParent: () => (/* binding */ CollapseChildIntoParent),
/* harmony export */   ConvertToRightHandedPosition: () => (/* binding */ ConvertToRightHandedPosition),
/* harmony export */   ConvertToRightHandedRotation: () => (/* binding */ ConvertToRightHandedRotation),
/* harmony export */   ConvertToRightHandedTransformMatrix: () => (/* binding */ ConvertToRightHandedTransformMatrix),
/* harmony export */   DataArrayToUint8Array: () => (/* binding */ DataArrayToUint8Array),
/* harmony export */   DefaultRotation: () => (/* binding */ DefaultRotation),
/* harmony export */   DefaultScale: () => (/* binding */ DefaultScale),
/* harmony export */   DefaultTranslation: () => (/* binding */ DefaultTranslation),
/* harmony export */   FloatsNeed16BitInteger: () => (/* binding */ FloatsNeed16BitInteger),
/* harmony export */   GetAccessorElementCount: () => (/* binding */ GetAccessorElementCount),
/* harmony export */   GetAccessorType: () => (/* binding */ GetAccessorType),
/* harmony export */   GetAttributeType: () => (/* binding */ GetAttributeType),
/* harmony export */   GetMinMax: () => (/* binding */ GetMinMax),
/* harmony export */   GetPrimitiveMode: () => (/* binding */ GetPrimitiveMode),
/* harmony export */   GetVertexBufferInfo: () => (/* binding */ GetVertexBufferInfo),
/* harmony export */   IndicesArrayToTypedSubarray: () => (/* binding */ IndicesArrayToTypedSubarray),
/* harmony export */   IsChildCollapsible: () => (/* binding */ IsChildCollapsible),
/* harmony export */   IsStandardVertexAttribute: () => (/* binding */ IsStandardVertexAttribute),
/* harmony export */   IsTriangleFillMode: () => (/* binding */ IsTriangleFillMode),
/* harmony export */   NormalizeTangent: () => (/* binding */ NormalizeTangent),
/* harmony export */   OmitDefaultValues: () => (/* binding */ OmitDefaultValues),
/* harmony export */   Rotate180Y: () => (/* binding */ Rotate180Y)
/* harmony export */ });
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var core_Materials_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Materials/material */ "../core/dist/Materials/material.js");
/* harmony import */ var core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Meshes/transformNode */ "../core/dist/Meshes/transformNode.js");
/* harmony import */ var core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Buffers/bufferUtils */ "../core/dist/Buffers/bufferUtils.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Cameras_targetCamera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Cameras/targetCamera */ "../core/dist/Cameras/targetCamera.js");
/* harmony import */ var core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Maths/math.constants */ "../core/dist/Maths/math.constants.js");
/* harmony import */ var _exportUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../exportUtils */ "../serializers/dist/exportUtils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










// Default values for comparison.
const DefaultTranslation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.ZeroReadOnly;
const DefaultRotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.Identity();
const DefaultScale = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.OneReadOnly;
const DefaultLoaderCameraParentScaleLh = new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 1, 1);
/**
 * Get the information necessary for enumerating a vertex buffer.
 * @param vertexBuffer the vertex buffer to enumerate
 * @param meshes the meshes that use the vertex buffer
 * @returns the information necessary to enumerate the vertex buffer
 */
function GetVertexBufferInfo(vertexBuffer, meshes) {
    const { byteOffset, byteStride, type, normalized } = vertexBuffer;
    const componentCount = vertexBuffer.getSize();
    const totalVertices = meshes.reduce((max, current) => {
        return current.getTotalVertices() > max ? current.getTotalVertices() : max;
    }, -Number.MAX_VALUE); // Get the max total vertices count, to ensure we capture the full range of vertex data used by the meshes.
    const count = totalVertices * componentCount;
    const kind = vertexBuffer.getKind();
    return { byteOffset, byteStride, componentCount, type, count, normalized, totalVertices, kind };
}
function GetAccessorElementCount(accessorType) {
    switch (accessorType) {
        case "MAT2" /* AccessorType.MAT2 */:
            return 4;
        case "MAT3" /* AccessorType.MAT3 */:
            return 9;
        case "MAT4" /* AccessorType.MAT4 */:
            return 16;
        case "SCALAR" /* AccessorType.SCALAR */:
            return 1;
        case "VEC2" /* AccessorType.VEC2 */:
            return 2;
        case "VEC3" /* AccessorType.VEC3 */:
            return 3;
        case "VEC4" /* AccessorType.VEC4 */:
            return 4;
    }
}
function FloatsNeed16BitInteger(floatArray) {
    return floatArray.some((value) => value >= 256);
}
function IsStandardVertexAttribute(type) {
    switch (type) {
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesExtraKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsExtraKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV3Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV4Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV5Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV6Kind:
            return true;
    }
    return false;
}
function GetAccessorType(kind, hasVertexColorAlpha) {
    if (kind == core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind) {
        return hasVertexColorAlpha ? "VEC4" /* AccessorType.VEC4 */ : "VEC3" /* AccessorType.VEC3 */;
    }
    switch (kind) {
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind:
            return "VEC3" /* AccessorType.VEC3 */;
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesExtraKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsExtraKind:
            return "VEC4" /* AccessorType.VEC4 */;
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV3Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV4Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV5Kind:
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV6Kind:
            return "VEC2" /* AccessorType.VEC2 */;
    }
    throw new Error(`Unknown kind ${kind}`);
}
function GetAttributeType(kind) {
    switch (kind) {
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind:
            return "POSITION";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind:
            return "NORMAL";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.TangentKind:
            return "TANGENT";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind:
            return "COLOR_0";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind:
            return "TEXCOORD_0";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind:
            return "TEXCOORD_1";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV3Kind:
            return "TEXCOORD_2";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV4Kind:
            return "TEXCOORD_3";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV5Kind:
            return "TEXCOORD_4";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV6Kind:
            return "TEXCOORD_5";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesKind:
            return "JOINTS_0";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesIndicesExtraKind:
            return "JOINTS_1";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsKind:
            return "WEIGHTS_0";
        case core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.MatricesWeightsExtraKind:
            return "WEIGHTS_1";
    }
    throw new Error(`Unknown kind: ${kind}`);
}
function GetPrimitiveMode(fillMode) {
    switch (fillMode) {
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.TriangleFillMode:
            return 4 /* MeshPrimitiveMode.TRIANGLES */;
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.TriangleStripDrawMode:
            return 5 /* MeshPrimitiveMode.TRIANGLE_STRIP */;
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.TriangleFanDrawMode:
            return 6 /* MeshPrimitiveMode.TRIANGLE_FAN */;
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.PointListDrawMode:
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.PointFillMode:
            return 0 /* MeshPrimitiveMode.POINTS */;
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.LineLoopDrawMode:
            return 2 /* MeshPrimitiveMode.LINE_LOOP */;
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.LineListDrawMode:
            return 1 /* MeshPrimitiveMode.LINES */;
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.LineStripDrawMode:
            return 3 /* MeshPrimitiveMode.LINE_STRIP */;
    }
    throw new Error(`Unknown fill mode: ${fillMode}`);
}
function IsTriangleFillMode(fillMode) {
    switch (fillMode) {
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.TriangleFillMode:
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.TriangleStripDrawMode:
        case core_Materials_material__WEBPACK_IMPORTED_MODULE_2__.Material.TriangleFanDrawMode:
            return true;
    }
    return false;
}
function NormalizeTangent(tangent) {
    const length = Math.sqrt(tangent.x * tangent.x + tangent.y * tangent.y + tangent.z * tangent.z);
    if (length > 0) {
        tangent.x /= length;
        tangent.y /= length;
        tangent.z /= length;
    }
}
function ConvertToRightHandedPosition(value) {
    value.x *= -1;
    return value;
}
/** @internal */
function ConvertToRightHandedTransformMatrix(matrix) {
    _exportUtils__WEBPACK_IMPORTED_MODULE_8__.ConvertHandednessMatrix.invertToRef(core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]).multiplyToRef(matrix, matrix).multiplyToRef(_exportUtils__WEBPACK_IMPORTED_MODULE_8__.ConvertHandednessMatrix, matrix);
    return matrix;
}
/**
 * Converts, in-place, a left-handed quaternion to a right-handed quaternion via a change of basis.
 * @param value the unit quaternion to convert
 * @returns the converted quaternion
 */
function ConvertToRightHandedRotation(value) {
    /**
     * This is the simplified version of the following equation:
     *    q' = to_quaternion(M * to_matrix(q) * M^-1)
     * where M is the conversion matrix `convertHandednessMatrix`,
     * q is the input quaternion, and q' is the converted quaternion.
     * Reference: https://d3cw3dd2w32x2b.cloudfront.net/wp-content/uploads/2015/01/matrix-to-quat.pdf
     */
    if (value.x * value.x + value.y * value.y > 0.5) {
        const absX = Math.abs(value.x);
        const absY = Math.abs(value.y);
        if (absX > absY) {
            const sign = Math.sign(value.x);
            value.x = absX;
            value.y *= -sign;
            value.z *= -sign;
            value.w *= sign;
        }
        else {
            const sign = Math.sign(value.y);
            value.x *= -sign;
            value.y = absY;
            value.z *= sign;
            value.w *= -sign;
        }
    }
    else {
        const absZ = Math.abs(value.z);
        const absW = Math.abs(value.w);
        if (absZ > absW) {
            const sign = Math.sign(value.z);
            value.x *= -sign;
            value.y *= sign;
            value.z = absZ;
            value.w *= -sign;
        }
        else {
            const sign = Math.sign(value.w);
            value.x *= sign;
            value.y *= -sign;
            value.z *= -sign;
            value.w = absW;
        }
    }
    return value;
}
/**
 * Pre-multiplies a 180-degree Y rotation to the quaternion, in order to match glTF's flipped forward direction for cameras.
 * @param rotation Target camera rotation.
 */
function Rotate180Y(rotation) {
    // Simplified from: rotation * (0, 1, 0, 0).
    rotation.copyFromFloats(-rotation.z, rotation.w, rotation.x, -rotation.y);
}
/**
 * Collapses GLTF parent and node into a single node, ignoring scaling.
 * This is useful for removing nodes that were added by the GLTF importer.
 * @param node Original GLTF node (Light or Camera).
 * @param parentNode Target parent node.
 */
function CollapseChildIntoParent(node, parentNode) {
    const parentTranslation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(parentNode.translation || [0, 0, 0], 0, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[0]);
    const parentRotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(parentNode.rotation || [0, 0, 0, 1], 0, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[0]);
    const parentMatrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(DefaultScale, parentRotation, parentTranslation, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[0]);
    const translation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector3.FromArrayToRef(node.translation || [0, 0, 0], 0, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Vector3[2]);
    const rotation = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromArrayToRef(node.rotation || [0, 0, 0, 1], 0, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Quaternion[1]);
    const matrix = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(DefaultScale, rotation, translation, core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.TmpVectors.Matrix[1]);
    parentMatrix.multiplyToRef(matrix, matrix);
    matrix.decompose(undefined, parentRotation, parentTranslation);
    if (parentTranslation.equalsWithEpsilon(DefaultTranslation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_7__.Epsilon)) {
        delete parentNode.translation;
    }
    else {
        parentNode.translation = parentTranslation.asArray();
    }
    if (parentRotation.equalsWithEpsilon(DefaultRotation, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_7__.Epsilon)) {
        delete parentNode.rotation;
    }
    else {
        parentNode.rotation = parentRotation.asArray();
    }
    if (parentNode.scale) {
        delete parentNode.scale;
    }
}
/**
 * Checks whether a camera or light node is candidate for collapsing with its parent node.
 * This is useful for roundtrips, as the glTF Importer parents a new node to
 * lights and cameras to store their original transformation information.
 * @param babylonNode Babylon light or camera node.
 * @param parentBabylonNode Target Babylon parent node.
 * @returns True if the two nodes can be merged, false otherwise.
 */
function IsChildCollapsible(babylonNode, parentBabylonNode) {
    if (!(parentBabylonNode instanceof core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_3__.TransformNode)) {
        return false;
    }
    // Verify child is the only descendant
    const isOnlyDescendant = parentBabylonNode.getChildren().length === 1 && babylonNode.getChildren().length === 0 && babylonNode.parent === parentBabylonNode;
    if (!isOnlyDescendant) {
        return false;
    }
    // Verify parent has the expected scaling, determined by the node type and scene's coordinate system.
    const scene = babylonNode.getScene();
    const expectedScale = babylonNode instanceof core_Cameras_targetCamera__WEBPACK_IMPORTED_MODULE_6__.TargetCamera && !scene.useRightHandedSystem ? DefaultLoaderCameraParentScaleLh : DefaultScale;
    if (!parentBabylonNode.scaling.equalsWithEpsilon(expectedScale, core_Maths_math_constants__WEBPACK_IMPORTED_MODULE_7__.Epsilon)) {
        core_Misc_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Warn(`Cannot collapse node ${babylonNode.name} into parent node ${parentBabylonNode.name} with modified scaling.`);
        return false;
    }
    return true;
}
/**
 * Converts an IndicesArray into either a Uint32Array or Uint16Array.
 * If the `start` and `count` parameters specify a subset of the array, a new view is created.
 * If the input is a number[], the data is copied into a new buffer.
 * @param indices input array to be converted
 * @param start starting index
 * @param count number of indices
 * @param is32Bits whether the output should be Uint32Array (true) or Uint16Array (false) when indices is an `Array`
 * @returns a Uint32Array or Uint16Array
 * @internal
 */
function IndicesArrayToTypedSubarray(indices, start, count, is32Bits) {
    let processedIndices = indices;
    if (start !== 0 || count !== indices.length) {
        processedIndices = Array.isArray(indices) ? indices.slice(start, start + count) : indices.subarray(start, start + count);
    }
    // If Int32Array, cast the indices (which should all be positive) to Uint32Array
    if (processedIndices instanceof Int32Array) {
        return new Uint32Array(processedIndices.buffer, processedIndices.byteOffset, processedIndices.length);
    }
    if (Array.isArray(processedIndices)) {
        return is32Bits ? new Uint32Array(processedIndices) : new Uint16Array(processedIndices);
    }
    return processedIndices;
}
function DataArrayToUint8Array(data) {
    if (data instanceof Array) {
        const floatData = new Float32Array(data);
        return new Uint8Array(floatData.buffer, floatData.byteOffset, floatData.byteLength);
    }
    return ArrayBuffer.isView(data) ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength) : new Uint8Array(data);
}
function GetMinMax(data, vertexBuffer, start, count) {
    const { byteOffset, byteStride, type, normalized } = vertexBuffer;
    const size = vertexBuffer.getSize();
    const min = new Array(size).fill(Infinity);
    const max = new Array(size).fill(-Infinity);
    (0,core_Buffers_bufferUtils__WEBPACK_IMPORTED_MODULE_4__.EnumerateFloatValues)(data, byteOffset + start * byteStride, byteStride, size, type, count * size, normalized, (values) => {
        for (let i = 0; i < size; i++) {
            min[i] = Math.min(min[i], values[i]);
            max[i] = Math.max(max[i], values[i]);
        }
    });
    return { min, max };
}
/**
 * Removes, in-place, object properties which have the same value as the default value.
 * Useful for avoiding unnecessary properties in the glTF JSON.
 * @param object the object to omit default values from
 * @param defaultValues a partial object with default values
 * @returns object with default values omitted
 */
function OmitDefaultValues(object, defaultValues) {
    for (const [key, value] of Object.entries(object)) {
        const defaultValue = defaultValues[key];
        if ((Array.isArray(value) && Array.isArray(defaultValue) && AreArraysEqual(value, defaultValue)) || value === defaultValue) {
            delete object[key];
        }
    }
    return object;
}
function AreArraysEqual(array1, array2) {
    return array1.length === array2.length && array1.every((val, i) => val === array2[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplcnNfZGlzdF9nbFRGXzJfMF9nbFRGU2VyaWFsaXplcl9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBR0E7QUFJQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7QUFHQTtBQUNBO0FBNEVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQ0E7O0FBRUE7QUFDQTtBQWdCQTtBQThCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUE5a0JBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQXdrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNocEJBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBd0JBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBRUE7QUFLQTtBQStFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBaGhCQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFJQTtBQTRDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXlHQTs7QUFFQTtBQUNBO0FBa0JBO0FBS0E7QUFKQTtBQUVBO0FBUkE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hhQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMza0JBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFvSkE7QUFsSkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBaURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0akNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBbUJBO0FBakJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBcUJBO0FBcEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXVEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFsTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFTQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFtSkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFXQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQTV4Q0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFJBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFPQTtBQUFBO0FBTkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxb0NBO0FBRUE7QUFDQTtBQUNBO0FBWUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMQTtBQWlFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvSGVscGVycy9tYXRlcmlhbENvbnZlcnNpb25IZWxwZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvR3JlYXNlZExpbmUvZ3JlYXNlZExpbmVNYXRlcmlhbERlZmF1bHRzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWwudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NYXRlcmlhbHMvR3JlYXNlZExpbmUvZ3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbFNoYWRlcnNHTFNMLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWxTaGFkZXJzV0dTTC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01hdGVyaWFscy9HcmVhc2VkTGluZS9ncmVhc2VkTGluZVNpbXBsZU1hdGVyaWFsLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVNZXJnZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9NZXNoZXMvR3JlYXNlZExpbmUvZ3JlYXNlZExpbmVCYXNlTWVzaC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL01pc2MvZ3JlYXNlZExpbmVUb29scy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L3NlcmlhbGl6ZXJzL3NyYy9leHBvcnRVdGlscy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9idWZmZXJNYW5hZ2VyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvc2VyaWFsaXplcnMvc3JjL2dsVEYvMi4wL2RhdGFXcml0ZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURkFuaW1hdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRGF0YS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGRXhwb3J0ZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURk1hdGVyaWFsRXhwb3J0ZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9zZXJpYWxpemVycy9zcmMvZ2xURi8yLjAvZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllcy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGU2VyaWFsaXplci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L3NlcmlhbGl6ZXJzL3NyYy9nbFRGLzIuMC9nbFRGVXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5cclxuLyoqXHJcbiAqIEdpdmVuIHRoZSBjb250cm9sIHBvaW50cywgc29sdmUgZm9yIHggYmFzZWQgb24gYSBnaXZlbiB0IGZvciBhIGN1YmljIGJlemllciBjdXJ2ZVxyXG4gKiBAcGFyYW0gdCBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMVxyXG4gKiBAcGFyYW0gcDAgZmlyc3QgY29udHJvbCBwb2ludFxyXG4gKiBAcGFyYW0gcDEgc2Vjb25kIGNvbnRyb2wgcG9pbnRcclxuICogQHBhcmFtIHAyIHRoaXJkIGNvbnRyb2wgcG9pbnRcclxuICogQHBhcmFtIHAzIGZvdXJ0aCBjb250cm9sIHBvaW50XHJcbiAqIEByZXR1cm5zIG51bWJlciByZXN1bHQgb2YgY3ViaWMgYmV6aWVyIGN1cnZlIGF0IHRoZSBzcGVjaWZpZWQgdFxyXG4gKi9cclxuZnVuY3Rpb24gQ3ViaWNCZXppZXJDdXJ2ZSh0OiBudW1iZXIsIHAwOiBudW1iZXIsIHAxOiBudW1iZXIsIHAyOiBudW1iZXIsIHAzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICgxIC0gdCkgKiAoMSAtIHQpICogKDEgLSB0KSAqIHAwICsgMyAqICgxIC0gdCkgKiAoMSAtIHQpICogdCAqIHAxICsgMyAqICgxIC0gdCkgKiB0ICogdCAqIHAyICsgdCAqIHQgKiB0ICogcDM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmFsdWF0ZXMgYSBzcGVjaWZpZWQgc3BlY3VsYXIgcG93ZXIgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBhcHByb3ByaWF0ZSByb3VnaG5lc3MgdmFsdWUsXHJcbiAqIGJhc2VkIG9uIGEgcHJlLWRlZmluZWQgY3ViaWMgYmV6aWVyIGN1cnZlIHdpdGggc3BlY3VsYXIgb24gdGhlIGFic2Npc3NhIGF4aXMgKHgtYXhpcylcclxuICogYW5kIHJvdWdobmVzcyBvbiB0aGUgb3JkaW5hbnQgYXhpcyAoeS1heGlzKVxyXG4gKiBAcGFyYW0gc3BlY3VsYXJQb3dlciBzcGVjdWxhciBwb3dlciBvZiBzdGFuZGFyZCBtYXRlcmlhbFxyXG4gKiBAcGFyYW0gcDAgZmlyc3QgY29udHJvbCBwb2ludFxyXG4gKiBAcGFyYW0gcDEgc2Vjb25kIGNvbnRyb2wgcG9pbnRcclxuICogQHBhcmFtIHAyIHRoaXJkIGNvbnRyb2wgcG9pbnRcclxuICogQHBhcmFtIHAzIGZvdXJ0aCBjb250cm9sIHBvaW50XHJcbiAqIEByZXR1cm5zIE51bWJlciByZXByZXNlbnRpbmcgdGhlIHJvdWdobmVzcyB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFNwZWN1bGFyUG93ZXJUb1JvdWdobmVzcyhzcGVjdWxhclBvd2VyOiBudW1iZXIsIHAwID0gbmV3IFZlY3RvcjIoMCwgMSksIHAxID0gbmV3IFZlY3RvcjIoMCwgMC4xKSwgcDIgPSBuZXcgVmVjdG9yMigwLCAwLjEpLCBwMyA9IG5ldyBWZWN0b3IyKDEzMDAsIDAuMSkpOiBudW1iZXIge1xyXG4gICAgLy8gR2l2ZW4gUDAueCA9IDAsIFAxLnggPSAwLCBQMi54ID0gMFxyXG4gICAgLy8gICB4ID0gdCAqIHQgKiB0ICogUDMueFxyXG4gICAgLy8gICB0ID0gKHggLyBQMy54KV4oMS8zKVxyXG4gICAgY29uc3QgdCA9IE1hdGgucG93KHNwZWN1bGFyUG93ZXIgLyBwMy54LCAwLjMzMzMzMyk7XHJcbiAgICByZXR1cm4gQ3ViaWNCZXppZXJDdXJ2ZSh0LCBwMC55LCBwMS55LCBwMi55LCBwMy55KTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFJhd1RleHR1cmUgfSBmcm9tIFwiLi4vVGV4dHVyZXMvcmF3VGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCIuLi8uLi9NYXRocy9tYXRoLmNvbG9yXCI7XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzZXR0aW5ncyBmb3IgR3JlYXNlZExpbmUgbWF0ZXJpYWxzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JlYXNlZExpbmVNYXRlcmlhbERlZmF1bHRzIHtcclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBsaW5lIGNvbG9yIGZvciBuZXdseSBjcmVhdGVkIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9DT0xPUiA9IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGxpbmUgd2lkdGggd2hlbiBzaXplQXR0ZW51YXRpb24gaXMgdHJ1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfV0lEVEhfQVRURU5VQVRFRCA9IDE7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bGUgbGluZSB3aWR0aFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERFRkFVTFRfV0lEVEggPSAwLjE7XHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IGNvbG9ycyB0ZXh0dXJlIGZvciBXZWJHUFVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFbXB0eUNvbG9yc1RleHR1cmU6IE51bGxhYmxlPFJhd1RleHR1cmU+O1xyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgQWJzdHJhY3RFbmdpbmUgfSBmcm9tIFwiLi4vLi4vRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5pbXBvcnQgeyBSYXdUZXh0dXJlIH0gZnJvbSBcIi4uL1RleHR1cmVzL3Jhd1RleHR1cmVcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxQbHVnaW5CYXNlIH0gZnJvbSBcIi4uL21hdGVyaWFsUGx1Z2luQmFzZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uLy4uL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgVW5pZm9ybUJ1ZmZlciB9IGZyb20gXCIuLi91bmlmb3JtQnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIsIFRtcFZlY3RvcnMgfSBmcm9tIFwiLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBDb2xvcjMgfSBmcm9tIFwiLi4vLi4vTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiLi4vbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWF0ZXJpYWxEZWZpbmVzIH0gZnJvbSBcIi4uL21hdGVyaWFsRGVmaW5lc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCIuLi8uLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiLi4vVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBTaGFkZXJMYW5ndWFnZSB9IGZyb20gXCIuLi9zaGFkZXJMYW5ndWFnZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBHcmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucywgSUdyZWFzZWRMaW5lTWF0ZXJpYWwgfSBmcm9tIFwiLi9ncmVhc2VkTGluZU1hdGVyaWFsSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGUsIEdyZWFzZWRMaW5lTWVzaENvbG9yTW9kZSB9IGZyb20gXCIuL2dyZWFzZWRMaW5lTWF0ZXJpYWxJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cyB9IGZyb20gXCIuL2dyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0c1wiO1xyXG5pbXBvcnQgeyBHcmVhc2VkTGluZVRvb2xzIH0gZnJvbSBcIi4uLy4uL01pc2MvZ3JlYXNlZExpbmVUb29sc1wiO1xyXG5pbXBvcnQgeyBHZXRDdXN0b21Db2RlIGFzIGdldEN1c3RvbUNvZGVHTFNMIH0gZnJvbSBcIi4vZ3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbFNoYWRlcnNHTFNMXCI7XHJcbmltcG9ydCB7IEdldEN1c3RvbUNvZGUgYXMgZ2V0Q3VzdG9tQ29kZVdHU0wgfSBmcm9tIFwiLi9ncmVhc2VkTGluZVBsdWdpbk1hdGVyaWFsU2hhZGVyc1dHU0xcIjtcclxuaW1wb3J0IHR5cGUgeyBHcmVhc2VkTGluZUJhc2VNZXNoIH0gZnJvbSBcIi4uLy4uL01lc2hlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsR3JlYXNlZExpbmVEZWZpbmVzIGV4dGVuZHMgTWF0ZXJpYWxEZWZpbmVzIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1hdGVyaWFsIGhhcyBhIGNvbG9yIG9wdGlvbiBzcGVjaWZpZWRcclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgR1JFQVNFRF9MSU5FX0hBU19DT0xPUiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF0ZXJpYWwncyBzaXplIGF0dGVudWF0aW9uIG9wdGlvbVxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBHUkVBU0VEX0xJTkVfU0laRV9BVFRFTlVBVElPTiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHlwZSBvZiBjb2xvciBkaXN0cmlidXRpb24gaXMgc2V0IHRvIGxpbmUgdGhpcyB2YWx1ZSBlcXVhbHMgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG4gICAgR1JFQVNFRF9MSU5FX0NPTE9SX0RJU1RSSUJVVElPTl9UWVBFX0xJTkUgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiBzY2VuZSBpcyBpbiByaWdodCBoYW5kZWQgY29vcmRpbmF0ZSBzeXN0ZW0uXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIEdSRUFTRURfTElORV9SSUdIVF9IQU5ERURfQ09PUkRJTkFURV9TWVNURU0gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgaWYgdGhlIGxpbmUgaXMgaW4gY2FtZXJhIGZhY2luZyBtb2RlXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIEdSRUFTRURfTElORV9DQU1FUkFfRkFDSU5HID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRydWUgaWYgdGhlIGxpbmUgdXNlcyBvZmZzZXRzXHJcbiAgICAgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIEdSRUFTRURfTElORV9VU0VfT0ZGU0VUUyA9IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogR3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbCBmb3IgR3JlYXNlZExpbmVNZXNoL0dyZWFzZWRMaW5lUmliYm9uTWVzaC5cclxuICogVXNlIHRoZSBHcmVhc2VkTGluZUJ1aWxkZXIuQ3JlYXRlR3JlYXNlZExpbmVNYXRlcmlhbCBmdW5jdGlvbiB0byBjcmVhdGUgYW5kIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbCBleHRlbmRzIE1hdGVyaWFsUGx1Z2luQmFzZSBpbXBsZW1lbnRzIElHcmVhc2VkTGluZU1hdGVyaWFsIHtcclxuICAgIC8qKlxyXG4gICAgICogUGx1Z2luIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHUkVBU0VEX0xJTkVfTUFURVJJQUxfTkFNRSA9IFwiR3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9yY2UgYWxsIHRoZSBncmVhc2VkIGxpbmVzIHRvIGNvbXBpbGUgdG8gZ2xzbCBldmVuIG9uIFdlYkdQVSBlbmdpbmVzLlxyXG4gICAgICogRmFsc2UgYnkgZGVmYXVsdC4gVGhpcyBpcyBtb3N0bHkgbWVhbnQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9yY2VHTFNMID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgY29sb3JzIG9wdGlvbiB0byBjb2xvcml6ZSB0aGUgbGluZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlQ29sb3JzOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm9ybWFsaXplZCB2YWx1ZSBvZiBob3cgbXVjaCBvZiB0aGUgbGluZSB3aWxsIGJlIHZpc2libGVcclxuICAgICAqIDAgLSAwJSBvZiB0aGUgbGluZSB3aWxsIGJlIHZpc2libGVcclxuICAgICAqIDEgLSAxMDAlIG9mIHRoZSBsaW5lIHdpbGwgYmUgdmlzaWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmlzaWJpbGl0eTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGFzaCBvZmZzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhc2hPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExlbmd0aCBvZiB0aGUgZGFzaC4gMCB0byAxLiAwLjUgbWVhbnMgaGFsZiBlbXB0eSwgaGFsZiBkcmF3bi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhc2hSYXRpbzogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGluZSBiYXNlIHdpZHRoLiBBdCBlYWNoIHBvaW50IHRoZSBsaW5lIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgd2lkdGhzW3BvaW50SW5kZXhdICogd2lkdGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHlwZSBvZiBzYW1wbGluZyBvZiB0aGUgY29sb3JzIHRleHR1cmUuIFRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lIHdoZW4gdXNpbmcgd2l0aCB0ZXh0dXJlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbG9yc1NhbXBsaW5nOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUdXJucyBvbi9vZmYgZGFzaCBtb2RlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VEYXNoOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1peGluZyBtb2RlIG9mIHRoZSBjb2xvciBwYXJhbWF0ZXIuIERlZmF1bHQgdmFsdWUgaXMgR3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLlNFVFxyXG4gICAgICogQHNlZSBHcmVhc2VkTGluZU1lc2hDb2xvck1vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbG9yTW9kZTogR3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IGNhbiBwcm92aWRlIGEgY29sb3JzVGV4dHVyZSB0byB1c2UgaW5zdGVhZCBvZiBvbmUgZ2VuZXJhdGVkIGZyb20gdGhlICdjb2xvcnMnIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29sb3JzVGV4dHVyZTogTnVsbGFibGU8UmF3VGV4dHVyZT4gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3NjZW5lOiBTY2VuZTtcclxuICAgIHByaXZhdGUgX2Rhc2hDb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGFzaEFycmF5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jb2xvcjogTnVsbGFibGU8Q29sb3IzPjtcclxuICAgIHByaXZhdGUgX2NvbG9yczogTnVsbGFibGU8Q29sb3IzW10+O1xyXG4gICAgcHJpdmF0ZSBfY29sb3JzRGlzdHJpYnV0aW9uVHlwZTogR3JlYXNlZExpbmVNZXNoQ29sb3JEaXN0cmlidXRpb25UeXBlO1xyXG4gICAgcHJpdmF0ZSBfcmVzb2x1dGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX2FzcGVjdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZUF0dGVudWF0aW9uOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2NhbWVyYUZhY2luZzogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9lbmdpbmU6IEFic3RyYWN0RW5naW5lO1xyXG5cclxuICAgIHByaXZhdGUgX2ZvcmNlR0xTTCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHRoZSBwbHVnaW4gaXMgY29tcGF0aWJsZSB3aXRoIGEgZ2l2ZW4gc2hhZGVyIGxhbmd1YWdlXHJcbiAgICAgKiBAcGFyYW0gX3NoYWRlckxhbmd1YWdlIFRoZSBzaGFkZXIgbGFuZ3VhZ2UgdG8gdXNlXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwbHVnaW4gaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzaGFkZXIgbGFuZ3VhZ2UuIFJldHVybiBhbHdheXMgdHJ1ZSBzaW5jZSBib3RoIEdMU0wgYW5kIFdHU0wgYXJlIHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgaXNDb21wYXRpYmxlKF9zaGFkZXJMYW5ndWFnZTogU2hhZGVyTGFuZ3VhZ2UpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEdyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtYXRlcmlhbCBCYXNlIG1hdGVyaWFsIGZvciB0aGUgcGx1Z2luXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBQbHVnaW4gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtYXRlcmlhbDogTWF0ZXJpYWwsIHNjZW5lPzogU2NlbmUsIG9wdGlvbnM/OiBHcmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcclxuICAgICAgICAgICAgY29sb3I6IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5ERUZBVUxUX0NPTE9SLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmluZXMgPSBuZXcgTWF0ZXJpYWxHcmVhc2VkTGluZURlZmluZXMoKTtcclxuICAgICAgICBkZWZpbmVzLkdSRUFTRURfTElORV9IQVNfQ09MT1IgPSAhIW9wdGlvbnMuY29sb3IgJiYgIW9wdGlvbnMudXNlQ29sb3JzO1xyXG4gICAgICAgIGRlZmluZXMuR1JFQVNFRF9MSU5FX1NJWkVfQVRURU5VQVRJT04gPSBvcHRpb25zLnNpemVBdHRlbnVhdGlvbiA/PyBmYWxzZTtcclxuICAgICAgICBkZWZpbmVzLkdSRUFTRURfTElORV9DT0xPUl9ESVNUUklCVVRJT05fVFlQRV9MSU5FID0gb3B0aW9ucy5jb2xvckRpc3RyaWJ1dGlvblR5cGUgPT09IEdyZWFzZWRMaW5lTWVzaENvbG9yRGlzdHJpYnV0aW9uVHlwZS5DT0xPUl9ESVNUUklCVVRJT05fVFlQRV9MSU5FO1xyXG4gICAgICAgIGRlZmluZXMuR1JFQVNFRF9MSU5FX1JJR0hUX0hBTkRFRF9DT09SRElOQVRFX1NZU1RFTSA9IChzY2VuZSA/PyBtYXRlcmlhbC5nZXRTY2VuZSgpKS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICBkZWZpbmVzLkdSRUFTRURfTElORV9DQU1FUkFfRkFDSU5HID0gb3B0aW9ucy5jYW1lcmFGYWNpbmcgPz8gdHJ1ZTtcclxuICAgICAgICBzdXBlcihtYXRlcmlhbCwgR3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbC5HUkVBU0VEX0xJTkVfTUFURVJJQUxfTkFNRSwgMjAwLCBkZWZpbmVzLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9yY2VHTFNMID0gb3B0aW9ucz8uZm9yY2VHTFNMIHx8IEdyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWwuRm9yY2VHTFNMO1xyXG5cclxuICAgICAgICB0aGlzLl9zY2VuZSA9IHNjZW5lID8/IG1hdGVyaWFsLmdldFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5fZW5naW5lID0gdGhpcy5fc2NlbmUuZ2V0RW5naW5lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbWVyYUZhY2luZyA9IG9wdGlvbnMuY2FtZXJhRmFjaW5nID8/IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IG9wdGlvbnMudmlzaWJpbGl0eSA/PyAxO1xyXG4gICAgICAgIHRoaXMudXNlRGFzaCA9IG9wdGlvbnMudXNlRGFzaCA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhc2hSYXRpbyA9IG9wdGlvbnMuZGFzaFJhdGlvID8/IDAuNTtcclxuICAgICAgICB0aGlzLmRhc2hPZmZzZXQgPSBvcHRpb25zLmRhc2hPZmZzZXQgPz8gMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCA/IG9wdGlvbnMud2lkdGggOiBvcHRpb25zLnNpemVBdHRlbnVhdGlvbiA/IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5ERUZBVUxUX1dJRFRIX0FUVEVOVUFURUQgOiBHcmVhc2VkTGluZU1hdGVyaWFsRGVmYXVsdHMuREVGQVVMVF9XSURUSDtcclxuICAgICAgICB0aGlzLl9zaXplQXR0ZW51YXRpb24gPSBvcHRpb25zLnNpemVBdHRlbnVhdGlvbiA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbG9yTW9kZSA9IG9wdGlvbnMuY29sb3JNb2RlID8/IEdyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX1NFVDtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IG9wdGlvbnMuY29sb3IgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZUNvbG9ycyA9IG9wdGlvbnMudXNlQ29sb3JzID8/IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yc0Rpc3RyaWJ1dGlvblR5cGUgPSBvcHRpb25zLmNvbG9yRGlzdHJpYnV0aW9uVHlwZSA/PyBHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGUuQ09MT1JfRElTVFJJQlVUSU9OX1RZUEVfU0VHTUVOVDtcclxuICAgICAgICB0aGlzLmNvbG9yc1NhbXBsaW5nID0gb3B0aW9ucy5jb2xvcnNTYW1wbGluZyA/PyBSYXdUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVDtcclxuICAgICAgICB0aGlzLl9jb2xvcnMgPSBvcHRpb25zLmNvbG9ycyA/PyBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmRhc2hDb3VudCA9IG9wdGlvbnMuZGFzaENvdW50ID8/IDE7IC8vIGNhbGN1bGF0ZSB0aGUgX2Rhc2hBcnJheSB2YWx1ZSwgY2FsbCB0aGUgc2V0dGVyXHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gb3B0aW9ucy5yZXNvbHV0aW9uID8/IG5ldyBWZWN0b3IyKHRoaXMuX2VuZ2luZS5nZXRSZW5kZXJXaWR0aCgpLCB0aGlzLl9lbmdpbmUuZ2V0UmVuZGVySGVpZ2h0KCkpOyAvLyBjYWxjdWxhdGUgYXNwZWN0IGNhbGwgdGhlIHNldHRlclxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5jb2xvcnNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZSA9IG9wdGlvbnMuY29sb3JzVGV4dHVyZTsgLy8gY29sb3JzVGV4dHVyZSBmcm9tIG9wdGlvbnMgdGFrZXMgcHJlY2VkZW5jZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZSA9IEdyZWFzZWRMaW5lVG9vbHMuQ3JlYXRlQ29sb3JzVGV4dHVyZShgJHttYXRlcmlhbC5uYW1lfS1jb2xvcnMtdGV4dHVyZWAsIHRoaXMuX2NvbG9ycywgdGhpcy5jb2xvcnNTYW1wbGluZywgdGhpcy5fc2NlbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3IgPSB0aGlzLl9jb2xvciA/PyBHcmVhc2VkTGluZU1hdGVyaWFsRGVmYXVsdHMuREVGQVVMVF9DT0xPUjtcclxuICAgICAgICAgICAgICAgIEdyZWFzZWRMaW5lVG9vbHMuUHJlcGFyZUVtcHR5Q29sb3JzVGV4dHVyZSh0aGlzLl9zY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VuZ2luZS5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdyZWFzZWRMaW5lVG9vbHMuRGlzcG9zZUVtcHR5Q29sb3JzVGV4dHVyZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzaGFkZXIgYXR0cmlidXRlc1xyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgYXJyYXkgd2hpY2ggd2lsbCBiZSBmaWxsZWQgd2l0aCB0aGUgYXR0cmlidXRlc1xyXG4gICAgICovXHJcbiAgICBvdmVycmlkZSBnZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKFwiZ3JsX29mZnNldHNcIik7XHJcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKFwiZ3JsX3dpZHRoc1wiKTtcclxuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goXCJncmxfY29sb3JQb2ludGVyc1wiKTtcclxuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goXCJncmxfY291bnRlcnNcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUZhY2luZykge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goXCJncmxfcHJldmlvdXNBbmRTaWRlXCIpO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goXCJncmxfbmV4dEFuZENvdW50ZXJzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChcImdybF9zbG9wZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzaGFkZXIgc2FtcGxlcnNcclxuICAgICAqIEBwYXJhbSBzYW1wbGVyc1xyXG4gICAgICovXHJcbiAgICBvdmVycmlkZSBnZXRTYW1wbGVycyhzYW1wbGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICBzYW1wbGVycy5wdXNoKFwiZ3JsX2NvbG9yc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc2hhZGVyIHRleHR1cmVzXHJcbiAgICAgKiBAcGFyYW0gYWN0aXZlVGV4dHVyZXMgYXJyYXkgd2hpY2ggd2lsbCBiZSBmaWxsZWQgd2l0aCB0aGUgdGV4dHVyZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldEFjdGl2ZVRleHR1cmVzKGFjdGl2ZVRleHR1cmVzOiBCYXNlVGV4dHVyZVtdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBhY3RpdmVUZXh0dXJlcy5wdXNoKHRoaXMuY29sb3JzVGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzaGFkZXIgdW5pZm9ybXNcclxuICAgICAqIEBwYXJhbSBzaGFkZXJMYW5ndWFnZSBUaGUgc2hhZGVyIGxhbmd1YWdlIHRvIHVzZVxyXG4gICAgICogQHJldHVybnMgdW5pZm9ybXNcclxuICAgICAqL1xyXG4gICAgb3ZlcnJpZGUgZ2V0VW5pZm9ybXMoc2hhZGVyTGFuZ3VhZ2UgPSBTaGFkZXJMYW5ndWFnZS5HTFNMKSB7XHJcbiAgICAgICAgY29uc3QgdWJvID0gW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiZ3JsX3NpbmdsZUNvbG9yXCIsIHNpemU6IDMsIHR5cGU6IFwidmVjM1wiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJncmxfdGV4dHVyZVNpemVcIiwgc2l6ZTogMiwgdHlwZTogXCJ2ZWMyXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcImdybF9kYXNoT3B0aW9uc1wiLCBzaXplOiA0LCB0eXBlOiBcInZlYzRcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiZ3JsX2NvbG9yTW9kZV92aXNpYmlsaXR5X2NvbG9yc1dpZHRoX3VzZUNvbG9yc1wiLCBzaXplOiA0LCB0eXBlOiBcInZlYzRcIiB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUZhY2luZykge1xyXG4gICAgICAgICAgICB1Ym8ucHVzaCh7IG5hbWU6IFwiZ3JsX3Byb2plY3Rpb25cIiwgc2l6ZTogMTYsIHR5cGU6IFwibWF0NFwiIH0sIHsgbmFtZTogXCJncmxfYXNwZWN0X3Jlc29sdXRpb25fbGluZVdpZHRoXCIsIHNpemU6IDQsIHR5cGU6IFwidmVjNFwiIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNoYWRlckxhbmd1YWdlID09PSBTaGFkZXJMYW5ndWFnZS5XR1NMKSB7XHJcbiAgICAgICAgICAgIHViby5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidmlld1Byb2plY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIHNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYXQ0XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdWJvLFxyXG4gICAgICAgICAgICB2ZXJ0ZXg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW1lcmFGYWNpbmcgJiYgdGhpcy5faXNHTFNMKHNoYWRlckxhbmd1YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gdmVjNCBncmxfYXNwZWN0X3Jlc29sdXRpb25fbGluZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gbWF0NCBncmxfcHJvamVjdGlvbjtcclxuICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXHJcbiAgICAgICAgICAgIGZyYWdtZW50OiB0aGlzLl9pc0dMU0woc2hhZGVyTGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgICAgICA/IGBcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHZlYzQgZ3JsX2Rhc2hPcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gdmVjMiBncmxfdGV4dHVyZVNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSB2ZWM0IGdybF9jb2xvck1vZGVfdmlzaWJpbGl0eV9jb2xvcnNXaWR0aF91c2VDb2xvcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSB2ZWMzIGdybF9zaW5nbGVDb2xvcjtcclxuICAgIGBcclxuICAgICAgICAgICAgICAgIDogXCJcIixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9ubHkgZ2V0dGVyLCBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gdXNlIHRoaXMgcGx1Z2luIG9uIGEgbWVzaCBvdGhlciB0aGFuIEdyZWFzZWRMaW5lTWVzaFxyXG4gICAgLy8gYW5kIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBkaXNhYmxlIGl0IG9uIHRoZSBtZXNoXHJcbiAgICBnZXQgaXNFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGUgdW5pZm9ybSBidWZmZXJcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtQnVmZmVyXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlIGJpbmRGb3JTdWJNZXNoKHVuaWZvcm1CdWZmZXI6IFVuaWZvcm1CdWZmZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FtZXJhRmFjaW5nKSB7XHJcbiAgICAgICAgICAgIHVuaWZvcm1CdWZmZXIudXBkYXRlTWF0cml4KFwiZ3JsX3Byb2plY3Rpb25cIiwgdGhpcy5fc2NlbmUuZ2V0UHJvamVjdGlvbk1hdHJpeCgpKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0dMU0wodGhpcy5fbWF0ZXJpYWwuc2hhZGVyTGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlmb3JtQnVmZmVyLnVwZGF0ZU1hdHJpeChcInZpZXdQcm9qZWN0aW9uXCIsIHRoaXMuX3NjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkxpbmVXaWR0aCA9IFRtcFZlY3RvcnMuVmVjdG9yNFswXTtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbkxpbmVXaWR0aC54ID0gdGhpcy5fYXNwZWN0O1xyXG4gICAgICAgICAgICByZXNvbHV0aW9uTGluZVdpZHRoLnkgPSB0aGlzLl9yZXNvbHV0aW9uLng7XHJcbiAgICAgICAgICAgIHJlc29sdXRpb25MaW5lV2lkdGgueiA9IHRoaXMuX3Jlc29sdXRpb24ueTtcclxuICAgICAgICAgICAgcmVzb2x1dGlvbkxpbmVXaWR0aC53ID0gdGhpcy53aWR0aDtcclxuICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlci51cGRhdGVWZWN0b3I0KFwiZ3JsX2FzcGVjdF9yZXNvbHV0aW9uX2xpbmVXaWR0aFwiLCByZXNvbHV0aW9uTGluZVdpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhc2hPcHRpb25zID0gVG1wVmVjdG9ycy5WZWN0b3I0WzBdO1xyXG4gICAgICAgIGRhc2hPcHRpb25zLnggPSBHcmVhc2VkTGluZVRvb2xzLkJvb2xlYW5Ub051bWJlcih0aGlzLnVzZURhc2gpO1xyXG4gICAgICAgIGRhc2hPcHRpb25zLnkgPSB0aGlzLl9kYXNoQXJyYXk7XHJcbiAgICAgICAgZGFzaE9wdGlvbnMueiA9IHRoaXMuZGFzaE9mZnNldDtcclxuICAgICAgICBkYXNoT3B0aW9ucy53ID0gdGhpcy5kYXNoUmF0aW87XHJcbiAgICAgICAgdW5pZm9ybUJ1ZmZlci51cGRhdGVWZWN0b3I0KFwiZ3JsX2Rhc2hPcHRpb25zXCIsIGRhc2hPcHRpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JNb2RlVmlzaWJpbGl0eUNvbG9yc1dpZHRoVXNlQ29sb3JzID0gVG1wVmVjdG9ycy5WZWN0b3I0WzFdO1xyXG4gICAgICAgIGNvbG9yTW9kZVZpc2liaWxpdHlDb2xvcnNXaWR0aFVzZUNvbG9ycy54ID0gdGhpcy5jb2xvck1vZGU7XHJcbiAgICAgICAgY29sb3JNb2RlVmlzaWJpbGl0eUNvbG9yc1dpZHRoVXNlQ29sb3JzLnkgPSB0aGlzLnZpc2liaWxpdHk7XHJcbiAgICAgICAgY29sb3JNb2RlVmlzaWJpbGl0eUNvbG9yc1dpZHRoVXNlQ29sb3JzLnogPSB0aGlzLmNvbG9yc1RleHR1cmUgPyB0aGlzLmNvbG9yc1RleHR1cmUuZ2V0U2l6ZSgpLndpZHRoIDogMDtcclxuICAgICAgICBjb2xvck1vZGVWaXNpYmlsaXR5Q29sb3JzV2lkdGhVc2VDb2xvcnMudyA9IEdyZWFzZWRMaW5lVG9vbHMuQm9vbGVhblRvTnVtYmVyKHRoaXMudXNlQ29sb3JzKTtcclxuICAgICAgICB1bmlmb3JtQnVmZmVyLnVwZGF0ZVZlY3RvcjQoXCJncmxfY29sb3JNb2RlX3Zpc2liaWxpdHlfY29sb3JzV2lkdGhfdXNlQ29sb3JzXCIsIGNvbG9yTW9kZVZpc2liaWxpdHlDb2xvcnNXaWR0aFVzZUNvbG9ycyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcikge1xyXG4gICAgICAgICAgICB1bmlmb3JtQnVmZmVyLnVwZGF0ZUNvbG9yMyhcImdybF9zaW5nbGVDb2xvclwiLCB0aGlzLl9jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmNvbG9yc1RleHR1cmUgPz8gR3JlYXNlZExpbmVNYXRlcmlhbERlZmF1bHRzLkVtcHR5Q29sb3JzVGV4dHVyZTtcclxuICAgICAgICB1bmlmb3JtQnVmZmVyLnNldFRleHR1cmUoXCJncmxfY29sb3JzXCIsIHRleHR1cmUpO1xyXG4gICAgICAgIHVuaWZvcm1CdWZmZXIudXBkYXRlRmxvYXQyKFwiZ3JsX3RleHR1cmVTaXplXCIsIHRleHR1cmU/LmdldFNpemUoKS53aWR0aCA/PyAxLCB0ZXh0dXJlPy5nZXRTaXplKCkuaGVpZ2h0ID8/IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZSB0aGUgZGVmaW5lc1xyXG4gICAgICogQHBhcmFtIGRlZmluZXNcclxuICAgICAqIEBwYXJhbSBfc2NlbmVcclxuICAgICAqIEBwYXJhbSBtZXNoXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlIHByZXBhcmVEZWZpbmVzKGRlZmluZXM6IE1hdGVyaWFsR3JlYXNlZExpbmVEZWZpbmVzLCBfc2NlbmU6IFNjZW5lLCBtZXNoOiBBYnN0cmFjdE1lc2gpIHtcclxuICAgICAgICBkZWZpbmVzLkdSRUFTRURfTElORV9IQVNfQ09MT1IgPSAhIXRoaXMuY29sb3IgJiYgIXRoaXMudXNlQ29sb3JzO1xyXG4gICAgICAgIGRlZmluZXMuR1JFQVNFRF9MSU5FX1NJWkVfQVRURU5VQVRJT04gPSB0aGlzLl9zaXplQXR0ZW51YXRpb247XHJcbiAgICAgICAgZGVmaW5lcy5HUkVBU0VEX0xJTkVfQ09MT1JfRElTVFJJQlVUSU9OX1RZUEVfTElORSA9IHRoaXMuX2NvbG9yc0Rpc3RyaWJ1dGlvblR5cGUgPT09IEdyZWFzZWRMaW5lTWVzaENvbG9yRGlzdHJpYnV0aW9uVHlwZS5DT0xPUl9ESVNUUklCVVRJT05fVFlQRV9MSU5FO1xyXG4gICAgICAgIGRlZmluZXMuR1JFQVNFRF9MSU5FX1JJR0hUX0hBTkRFRF9DT09SRElOQVRFX1NZU1RFTSA9IF9zY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbTtcclxuICAgICAgICBkZWZpbmVzLkdSRUFTRURfTElORV9DQU1FUkFfRkFDSU5HID0gdGhpcy5fY2FtZXJhRmFjaW5nO1xyXG4gICAgICAgIGRlZmluZXMuR1JFQVNFRF9MSU5FX1VTRV9PRkZTRVRTID0gISEobWVzaCBhcyBHcmVhc2VkTGluZUJhc2VNZXNoKS5vZmZzZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gR3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbC5HUkVBU0VEX0xJTkVfTUFURVJJQUxfTkFNRTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBzaGFkZXIgY29kZVxyXG4gICAgICogQHBhcmFtIHNoYWRlclR5cGUgdmVydGV4L2ZyYWdtZW50XHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyTGFuZ3VhZ2UgR0xTTCBvciBXR1NMXHJcbiAgICAgKiBAcmV0dXJucyBzaGFkZXIgY29kZVxyXG4gICAgICovXHJcbiAgICBvdmVycmlkZSBnZXRDdXN0b21Db2RlKHNoYWRlclR5cGU6IHN0cmluZywgc2hhZGVyTGFuZ3VhZ2UgPSBTaGFkZXJMYW5ndWFnZS5HTFNMKTogTnVsbGFibGU8eyBbcG9pbnROYW1lOiBzdHJpbmddOiBzdHJpbmcgfT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0dMU0woc2hhZGVyTGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDdXN0b21Db2RlR0xTTChzaGFkZXJUeXBlLCB0aGlzLl9jYW1lcmFGYWNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2V0Q3VzdG9tQ29kZVdHU0woc2hhZGVyVHlwZSwgdGhpcy5fY2FtZXJhRmFjaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBwbHVnaW4gbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZT8uZGlzcG9zZSgpO1xyXG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGNvbG9ycyB1c2VkIHRvIGNvbG9yaXplIHRoZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIGdldCBjb2xvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvbG9ycyB1c2VkIHRvIGNvbG9yaXplIHRoZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIHNldCBjb2xvcnModmFsdWU6IE51bGxhYmxlPENvbG9yM1tdPikge1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3JzKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgb3IgdXBkYXRlcyB0aGUgY29sb3JzIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjb2xvcnMgY29sb3IgdGFibGUgUkdCQVxyXG4gICAgICogQHBhcmFtIGxhenkgaWYgbGF6eSwgdGhlIGNvbG9ycyBhcmUgbm90IHVwZGF0ZWRcclxuICAgICAqIEBwYXJhbSBmb3JjZU5ld1RleHR1cmUgZm9yY2UgY3JlYXRpb24gb2YgYSBuZXcgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29sb3JzKGNvbG9yczogTnVsbGFibGU8Q29sb3IzW10+LCBsYXp5ID0gZmFsc2UsIGZvcmNlTmV3VGV4dHVyZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0NvbG9yc0NvdW50ID0gdGhpcy5fY29sb3JzPy5sZW5ndGggPz8gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sb3JzID0gY29sb3JzO1xyXG5cclxuICAgICAgICBpZiAoY29sb3JzID09PSBudWxsIHx8IGNvbG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNUZXh0dXJlPy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYXp5ICYmICFmb3JjZU5ld1RleHR1cmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzVGV4dHVyZSAmJiBvcmlnQ29sb3JzQ291bnQgPT09IGNvbG9ycy5sZW5ndGggJiYgIWZvcmNlTmV3VGV4dHVyZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvckFycmF5ID0gR3JlYXNlZExpbmVUb29scy5Db2xvcjN0b1JHQkFVaW50OChjb2xvcnMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1RleHR1cmUudXBkYXRlKGNvbG9yQXJyYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZT8uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1RleHR1cmUgPSBHcmVhc2VkTGluZVRvb2xzLkNyZWF0ZUNvbG9yc1RleHR1cmUoYCR7dGhpcy5fbWF0ZXJpYWwubmFtZX0tY29sb3JzLXRleHR1cmVgLCBjb2xvcnMsIHRoaXMuY29sb3JzU2FtcGxpbmcsIHRoaXMuX3NjZW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBtYXRlcmlhbC4gVXNlIHdoZW4gbWF0ZXJpYWwgY3JlYXRlZCBpbiBsYXp5IG1vZGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVMYXp5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnModGhpcy5fY29sb3JzLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGRhc2hlcyBpbiB0aGUgbGluZVxyXG4gICAgICovXHJcbiAgICBnZXQgZGFzaENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXNoQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG51bWJlciBvZiBkYXNoZXMgaW4gdGhlIGxpbmVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBkYXNoXHJcbiAgICAgKi9cclxuICAgIHNldCBkYXNoQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2Rhc2hDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX2Rhc2hBcnJheSA9IDEgLyB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHNldCB0byB0cnVlIHRoZSBsaW5lIHdpbGwgYmUgcmVuZGVyZWQgYWx3YXlzIHdpdGggdGhlIHNhbWUgd2lkdGggcmVnYXJkbGVzcyBob3cgZmFyIGl0IGlzIGxvY2F0ZWQgZnJvbSB0aGUgY2FtZXJhLlxyXG4gICAgICogTm90IHN1cHBvcnRlZCBmb3Igbm9uIGNhbWVyYSBmYWNpbmcgbGluZXMuXHJcbiAgICAgKi9cclxuICAgIGdldCBzaXplQXR0ZW51YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemVBdHRlbnVhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR1cm4gb24vb2ZmIHNpemUgYXR0ZW51YXRpb24gb2YgdGhlIHdpZHRoIG9wdGlvbiBhbmQgd2lkdGhzIGFycmF5LlxyXG4gICAgICogTm90IHN1cHBvcnRlZCBmb3Igbm9uIGNhbWVyYSBmYWNpbmcgbGluZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgSWYgc2V0IHRvIHRydWUgdGhlIGxpbmUgd2lsbCBiZSByZW5kZXJlZCBhbHdheXMgd2l0aCB0aGUgc2FtZSB3aWR0aCByZWdhcmRsZXNzIGhvdyBmYXIgaXQgaXMgbG9jYXRlZCBmcm9tIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHNldCBzaXplQXR0ZW51YXRpb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zaXplQXR0ZW51YXRpb24gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm1hcmtBbGxEZWZpbmVzQXNEaXJ0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29sb3Igb2YgdGhlIGxpbmVcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvbG9yIG9mIHRoZSBsaW5lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQ29sb3IzIG9yIG51bGwgdG8gY2xlYXIgdGhlIGNvbG9yLiBZb3UgbmVlZCB0byBjbGVhciB0aGUgY29sb3IgaWYgeW91IHVzZSBjb2xvcnMgYW5kIHVzZUNvbG9ycyA9IHRydWVcclxuICAgICAqL1xyXG4gICAgc2V0IGNvbG9yKHZhbHVlOiBOdWxsYWJsZTxDb2xvcjM+KSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2xvciBvZiB0aGUgbGluZS4gSWYgc2V0IHRoZSB3aG9sZSBsaW5lIHdpbGwgYmUgbWl4ZWQgd2l0aCB0aGlzIGNvbG9yIGFjY29yZGluZyB0byB0aGUgY29sb3JNb2RlIG9wdGlvbi5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBjb2xvclxyXG4gICAgICogQHBhcmFtIGRvTm90TWFya0RpcnR5IGlmIHRydWUsIHRoZSBtYXRlcmlhbCB3aWxsIG5vdCBiZSBtYXJrZWQgYXMgZGlydHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldENvbG9yKHZhbHVlOiBOdWxsYWJsZTxDb2xvcjM+LCBkb05vdE1hcmtEaXJ0eSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLl9jb2xvciA9PT0gbnVsbCAmJiB2YWx1ZSAhPT0gbnVsbCkgfHwgKHRoaXMuX2NvbG9yICE9PSBudWxsICYmIHZhbHVlID09PSBudWxsKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIWRvTm90TWFya0RpcnR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtBbGxEZWZpbmVzQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2xvciBkaXN0cmlidXRpb3BuIHR5cGVcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbG9yc0Rpc3RyaWJ1dGlvblR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yc0Rpc3RyaWJ1dGlvblR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2xvciBkaXN0cmlidXRpb24gdHlwZVxyXG4gICAgICogQHNlZSBHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBjb2xvciBkaXN0cmlidXRpb24gdHlwZVxyXG4gICAgICovXHJcbiAgICBzZXQgY29sb3JzRGlzdHJpYnV0aW9uVHlwZSh2YWx1ZTogR3JlYXNlZExpbmVNZXNoQ29sb3JEaXN0cmlidXRpb25UeXBlKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3JzRGlzdHJpYnV0aW9uVHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubWFya0FsbERlZmluZXNBc0RpcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSByZXNvbHV0aW9uXHJcbiAgICAgKi9cclxuICAgIGdldCByZXNvbHV0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvbHV0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgcmVzb2x1dGlvblxyXG4gICAgICogQHBhcmFtIHZhbHVlIHJlc29sdXRpb24gb2YgdGhlIHNjcmVlbiBmb3IgR3JlYXNlZExpbmVcclxuICAgICAqL1xyXG4gICAgc2V0IHJlc29sdXRpb24odmFsdWU6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLl9hc3BlY3QgPSB2YWx1ZS54IC8gdmFsdWUueTtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgcGx1Z2luIG1hdGVyaWFsXHJcbiAgICAgKiBAcmV0dXJucyBzZXJpYWxpemF0aW9uT2JqZWNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBzdXBlci5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnM6IEdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb2xvckRpc3RyaWJ1dGlvblR5cGU6IHRoaXMuX2NvbG9yc0Rpc3RyaWJ1dGlvblR5cGUsXHJcbiAgICAgICAgICAgIGNvbG9yc1NhbXBsaW5nOiB0aGlzLmNvbG9yc1NhbXBsaW5nLFxyXG4gICAgICAgICAgICBjb2xvck1vZGU6IHRoaXMuY29sb3JNb2RlLFxyXG4gICAgICAgICAgICBkYXNoQ291bnQ6IHRoaXMuX2Rhc2hDb3VudCxcclxuICAgICAgICAgICAgZGFzaE9mZnNldDogdGhpcy5kYXNoT2Zmc2V0LFxyXG4gICAgICAgICAgICBkYXNoUmF0aW86IHRoaXMuZGFzaFJhdGlvLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOiB0aGlzLl9yZXNvbHV0aW9uLFxyXG4gICAgICAgICAgICBzaXplQXR0ZW51YXRpb246IHRoaXMuX3NpemVBdHRlbnVhdGlvbixcclxuICAgICAgICAgICAgdXNlQ29sb3JzOiB0aGlzLnVzZUNvbG9ycyxcclxuICAgICAgICAgICAgdXNlRGFzaDogdGhpcy51c2VEYXNoLFxyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JzID0gdGhpcy5fY29sb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcclxuICAgICAgICAgICAgZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMgPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgYSBzZXJpYWxpemVkIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSBzb3VyY2Ugc2VyaWFsaXplZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBzY2VuZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgcm9vdCB1cmwgZm9yIHRleHR1cmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBwYXJzZShzb3VyY2U6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5wYXJzZShzb3VyY2UsIHNjZW5lLCByb290VXJsKTtcclxuICAgICAgICBjb25zdCBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucyA9IDxHcmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucz5zb3VyY2UuZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZT8uZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcihncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy5jb2xvciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy5jb2xvckRpc3RyaWJ1dGlvblR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNEaXN0cmlidXRpb25UeXBlID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JEaXN0cmlidXRpb25UeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JzU2FtcGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNTYW1wbGluZyA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9yc1NhbXBsaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JNb2RlID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JNb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMudXNlQ29sb3JzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlQ29sb3JzID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMudXNlQ29sb3JzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMudmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy52aXNpYmlsaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMudXNlRGFzaCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZURhc2ggPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy51c2VEYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuZGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaENvdW50ID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuZGFzaENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuZGFzaFJhdGlvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaFJhdGlvID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuZGFzaFJhdGlvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuZGFzaE9mZnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hPZmZzZXQgPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy5kYXNoT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuc2l6ZUF0dGVudWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZUF0dGVudWF0aW9uID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuc2l6ZUF0dGVudWF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMucmVzb2x1dGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdXRpb24gPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy5yZXNvbHV0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb2xvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNUZXh0dXJlID0gR3JlYXNlZExpbmVUb29scy5DcmVhdGVDb2xvcnNUZXh0dXJlKGAke3RoaXMuX21hdGVyaWFsLm5hbWV9LWNvbG9ycy10ZXh0dXJlYCwgdGhpcy5jb2xvcnMsIHRoaXMuY29sb3JzU2FtcGxpbmcsIHNjZW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBHcmVhc2VkTGluZVRvb2xzLlByZXBhcmVFbXB0eUNvbG9yc1RleHR1cmUoc2NlbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXJrQWxsRGVmaW5lc0FzRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIGEgZHVwbGljYXRlIG9mIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gaW50byBhbm90aGVyIG9uZS5cclxuICAgICAqIEBwYXJhbSBwbHVnaW4gZGVmaW5lIHRoZSBjb25maWcgd2hlcmUgdG8gY29weSB0aGUgaW5mb1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgY29weVRvKHBsdWdpbjogTWF0ZXJpYWxQbHVnaW5CYXNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGVzdCA9IHBsdWdpbiBhcyBHcmVhc2VkTGluZVBsdWdpbk1hdGVyaWFsO1xyXG5cclxuICAgICAgICBkZXN0LmNvbG9yc1RleHR1cmU/LmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9ycykge1xyXG4gICAgICAgICAgICBkZXN0LmNvbG9yc1RleHR1cmUgPSBHcmVhc2VkTGluZVRvb2xzLkNyZWF0ZUNvbG9yc1RleHR1cmUoYCR7ZGVzdC5fbWF0ZXJpYWwubmFtZX0tY29sb3JzLXRleHR1cmVgLCB0aGlzLl9jb2xvcnMsIGRlc3QuY29sb3JzU2FtcGxpbmcsIHRoaXMuX3NjZW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlc3Quc2V0Q29sb3IodGhpcy5jb2xvciwgdHJ1ZSk7XHJcbiAgICAgICAgZGVzdC5jb2xvcnNEaXN0cmlidXRpb25UeXBlID0gdGhpcy5jb2xvcnNEaXN0cmlidXRpb25UeXBlO1xyXG4gICAgICAgIGRlc3QuY29sb3JzU2FtcGxpbmcgPSB0aGlzLmNvbG9yc1NhbXBsaW5nO1xyXG4gICAgICAgIGRlc3QuY29sb3JNb2RlID0gdGhpcy5jb2xvck1vZGU7XHJcbiAgICAgICAgZGVzdC51c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcclxuICAgICAgICBkZXN0LnZpc2liaWxpdHkgPSB0aGlzLnZpc2liaWxpdHk7XHJcbiAgICAgICAgZGVzdC51c2VEYXNoID0gdGhpcy51c2VEYXNoO1xyXG4gICAgICAgIGRlc3QuZGFzaENvdW50ID0gdGhpcy5kYXNoQ291bnQ7XHJcbiAgICAgICAgZGVzdC5kYXNoUmF0aW8gPSB0aGlzLmRhc2hSYXRpbztcclxuICAgICAgICBkZXN0LmRhc2hPZmZzZXQgPSB0aGlzLmRhc2hPZmZzZXQ7XHJcbiAgICAgICAgZGVzdC53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgZGVzdC5zaXplQXR0ZW51YXRpb24gPSB0aGlzLnNpemVBdHRlbnVhdGlvbjtcclxuICAgICAgICBkZXN0LnJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb247XHJcblxyXG4gICAgICAgIGRlc3QubWFya0FsbERlZmluZXNBc0RpcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNHTFNMKHNoYWRlckxhbmd1YWdlOiBTaGFkZXJMYW5ndWFnZSkge1xyXG4gICAgICAgIHJldHVybiBzaGFkZXJMYW5ndWFnZSA9PT0gU2hhZGVyTGFuZ3VhZ2UuR0xTTCB8fCB0aGlzLl9mb3JjZUdMU0w7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoYEJBQllMT04uJHtHcmVhc2VkTGluZVBsdWdpbk1hdGVyaWFsLkdSRUFTRURfTElORV9NQVRFUklBTF9OQU1FfWAsIEdyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWwpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUgfSBmcm9tIFwiLi9ncmVhc2VkTGluZU1hdGVyaWFsSW50ZXJmYWNlc1wiO1xuXG4vKipcbiAqIFJldHVybnMgR0xTTCBjdXN0b20gc2hhZGVyIGNvZGVcbiAqIEBwYXJhbSBzaGFkZXJUeXBlIHZlcnRleCBvciBmcmFnbWVudFxuICogQHBhcmFtIGNhbWVyYUZhY2luZyBpcyBpbiBjYW1lcmEgZmFjaW5nIG1vZGU/XG4gKiBAcmV0dXJucyBHTFNMIGN1c3RvbSBzaGFkZXIgY29kZVxuICovXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gR2V0Q3VzdG9tQ29kZShzaGFkZXJUeXBlOiBzdHJpbmcsIGNhbWVyYUZhY2luZzogYm9vbGVhbik6IE51bGxhYmxlPHsgW3BvaW50TmFtZTogc3RyaW5nXTogc3RyaW5nIH0+IHtcbiAgICBpZiAoc2hhZGVyVHlwZSA9PT0gXCJ2ZXJ0ZXhcIikge1xuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHtcbiAgICAgICAgICAgIENVU1RPTV9WRVJURVhfREVGSU5JVElPTlM6IGBcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgZ3JsX3dpZHRocztcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyBncmxfb2Zmc2V0cztcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgZ3JsX2NvbG9yUG9pbnRlcnM7XG4gICAgICAgICAgICAgICAgdmFyeWluZyBmbG9hdCBncmxDb3VudGVycztcbiAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IGdybENvbG9yUG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgdmVjNCBncmxfcHJldmlvdXNBbmRTaWRlO1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgdmVjNCBncmxfbmV4dEFuZENvdW50ZXJzO1xuXG4gICAgICAgICAgICAgICAgICAgIHZlYzIgZ3JsRml4KCB2ZWM0IGksIGZsb2F0IGFzcGVjdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlYzIgcmVzID0gaS54eSAvIGkudztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy54ICo9IGFzcGVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyBncmxfc2xvcGVzO1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgZ3JsX2NvdW50ZXJzO1xuICAgICAgICAgICAgICAgICNlbmRpZlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBDVVNUT01fVkVSVEVYX1VQREFURV9QT1NJVElPTjogYFxuICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xuICAgICAgICAgICAgICAgICAgICB2ZWMzIGdybFBvc2l0aW9uT2Zmc2V0ID0gZ3JsX29mZnNldHM7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlZCArPSBncmxQb3NpdGlvbk9mZnNldDtcbiAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblVwZGF0ZWQgPSAocG9zaXRpb25VcGRhdGVkICsgZ3JsX29mZnNldHMpICsgKGdybF9zbG9wZXMgKiBncmxfd2lkdGhzKTtcbiAgICAgICAgICAgICAgICAjZW5kaWZcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORDogYFxuICAgICAgICAgICAgICAgIGdybENvbG9yUG9pbnRlciA9IGdybF9jb2xvclBvaW50ZXJzO1xuXG4gICAgICAgICAgICAgICAgI2lmZGVmIEdSRUFTRURfTElORV9DQU1FUkFfRkFDSU5HXG5cbiAgICAgICAgICAgICAgICAgICAgZmxvYXQgZ3JsQXNwZWN0ID0gZ3JsX2FzcGVjdF9yZXNvbHV0aW9uX2xpbmVXaWR0aC54O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdCBncmxCYXNlV2lkdGggPSBncmxfYXNwZWN0X3Jlc29sdXRpb25fbGluZVdpZHRoLnc7XG5cbiAgICAgICAgICAgICAgICAgICAgdmVjMyBncmxQcmV2aW91cyA9IGdybF9wcmV2aW91c0FuZFNpZGUueHl6O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdCBncmxTaWRlID0gZ3JsX3ByZXZpb3VzQW5kU2lkZS53O1xuXG4gICAgICAgICAgICAgICAgICAgIHZlYzMgZ3JsTmV4dCA9IGdybF9uZXh0QW5kQ291bnRlcnMueHl6O1xuICAgICAgICAgICAgICAgICAgICBncmxDb3VudGVycyA9IGdybF9uZXh0QW5kQ291bnRlcnMudztcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQgZ3JsV2lkdGggPSBncmxCYXNlV2lkdGggKiBncmxfd2lkdGhzO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmVjMyB3b3JsZERpciA9IG5vcm1hbGl6ZShncmxOZXh0IC0gZ3JsUHJldmlvdXMpO1xuICAgICAgICAgICAgICAgICAgICB2ZWMzIG5lYXJQb3NpdGlvbiA9IHBvc2l0aW9uVXBkYXRlZCArICh3b3JsZERpciAqIDAuMDEpO1xuICAgICAgICAgICAgICAgICAgICBtYXQ0IGdybE1hdHJpeCA9IHZpZXdQcm9qZWN0aW9uICogZmluYWxXb3JsZDtcbiAgICAgICAgICAgICAgICAgICAgdmVjNCBncmxGaW5hbFBvc2l0aW9uID0gZ3JsTWF0cml4ICogdmVjNChwb3NpdGlvblVwZGF0ZWQgLCAxLjApO1xuICAgICAgICAgICAgICAgICAgICB2ZWM0IHNjcmVlbk5lYXJQb3MgPSBncmxNYXRyaXggKiB2ZWM0KG5lYXJQb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgICAgICAgICAgICAgdmVjMiBncmxMaW5lUG9zaXRpb24gPSBncmxGaXgoZ3JsRmluYWxQb3NpdGlvbiwgZ3JsQXNwZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmVjMiBncmxMaW5lTmVhclBvc2l0aW9uID0gZ3JsRml4KHNjcmVlbk5lYXJQb3MsIGdybEFzcGVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHZlYzIgZ3JsRGlyID0gbm9ybWFsaXplKGdybExpbmVOZWFyUG9zaXRpb24gLSBncmxMaW5lUG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZlYzQgZ3JsTm9ybWFsID0gdmVjNCgtZ3JsRGlyLnksIGdybERpci54LCAwLiwgMS4pO1xuXG4gICAgICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfUklHSFRfSEFOREVEX0NPT1JESU5BVEVfU1lTVEVNXG4gICAgICAgICAgICAgICAgICAgICAgICBncmxOb3JtYWwueHkgKj0gLS41ICogZ3JsV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICNlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBncmxOb3JtYWwueHkgKj0gLjUgKiBncmxXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgI2VuZGlmXG5cbiAgICAgICAgICAgICAgICAgICAgZ3JsTm9ybWFsICo9IGdybF9wcm9qZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfU0laRV9BVFRFTlVBVElPTlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JsTm9ybWFsLnh5ICo9IGdybEZpbmFsUG9zaXRpb24udztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdybE5vcm1hbC54eSAvPSAodmVjNChncmxfYXNwZWN0X3Jlc29sdXRpb25fbGluZVdpZHRoLnl6LCAwLiwgMS4pICogZ3JsX3Byb2plY3Rpb24pLnh5O1xuICAgICAgICAgICAgICAgICAgICAjZW5kaWZcblxuICAgICAgICAgICAgICAgICAgICBncmxGaW5hbFBvc2l0aW9uLnh5ICs9IGdybE5vcm1hbC54eSAqIGdybFNpZGU7XG4gICAgICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gZ3JsRmluYWxQb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICB2UG9zaXRpb25XID0gdmVjMyhncmxGaW5hbFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICBncmxDb3VudGVycyA9IGdybF9jb3VudGVycztcbiAgICAgICAgICAgICAgICAjZW5kaWZcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoY2FtZXJhRmFjaW5nKSB7XG4gICAgICAgICAgICBvYmpbXCIhZ2xfUG9zaXRpb25cXFxcPXZpZXdQcm9qZWN0aW9uXFxcXCp3b3JsZFBvcztcIl0gPSBcIi8vXCI7IC8vIG5vdCBuZWVkZWQgZm9yIGNhbWVyYSBmYWNpbmcgR1JMXG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKHNoYWRlclR5cGUgPT09IFwiZnJhZ21lbnRcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TOiBgXG4gICAgICAgICAgICAgICAgICAgICNpZmRlZiBQQlJcbiAgICAgICAgICAgICAgICAgICAgICAgICAjZGVmaW5lIGdybEZpbmFsQ29sb3IgZmluYWxDb2xvclxuICAgICAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICNkZWZpbmUgZ3JsRmluYWxDb2xvciBjb2xvclxuICAgICAgICAgICAgICAgICAgICAjZW5kaWZcblxuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IGdybENvdW50ZXJzO1xuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IGdybENvbG9yUG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgZ3JsX2NvbG9ycztcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX0JFRk9SRV9GUkFHQ09MT1I6IGBcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQgZ3JsQ29sb3JNb2RlID0gZ3JsX2NvbG9yTW9kZV92aXNpYmlsaXR5X2NvbG9yc1dpZHRoX3VzZUNvbG9ycy54O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdCBncmxWaXNpYmlsaXR5ID0gZ3JsX2NvbG9yTW9kZV92aXNpYmlsaXR5X2NvbG9yc1dpZHRoX3VzZUNvbG9ycy55O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdCBncmxDb2xvcnNXaWR0aCA9IGdybF9jb2xvck1vZGVfdmlzaWJpbGl0eV9jb2xvcnNXaWR0aF91c2VDb2xvcnMuejtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQgZ3JsVXNlQ29sb3JzID0gZ3JsX2NvbG9yTW9kZV92aXNpYmlsaXR5X2NvbG9yc1dpZHRoX3VzZUNvbG9ycy53O1xuXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0IGdybFVzZURhc2ggPSBncmxfZGFzaE9wdGlvbnMueDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQgZ3JsRGFzaEFycmF5ID0gZ3JsX2Rhc2hPcHRpb25zLnk7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0IGdybERhc2hPZmZzZXQgPSBncmxfZGFzaE9wdGlvbnMuejtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQgZ3JsRGFzaFJhdGlvID0gZ3JsX2Rhc2hPcHRpb25zLnc7XG5cbiAgICAgICAgICAgICAgICAgICAgZ3JsRmluYWxDb2xvci5hICo9IHN0ZXAoZ3JsQ291bnRlcnMsIGdybFZpc2liaWxpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZihncmxGaW5hbENvbG9yLmEgPT0gMC4pIGRpc2NhcmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZ3JsVXNlRGFzaCA9PSAxLil7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yLmEgKj0gY2VpbChtb2QoZ3JsQ291bnRlcnMgKyBncmxEYXNoT2Zmc2V0LCBncmxEYXNoQXJyYXkpIC0gKGdybERhc2hBcnJheSAqIGdybERhc2hSYXRpbykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdybEZpbmFsQ29sb3IuYSA9PSAwLikgZGlzY2FyZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfSEFTX0NPTE9SXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JsQ29sb3JNb2RlID09ICR7R3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLkNPTE9SX01PREVfU0VUfS4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yLnJnYiA9IGdybF9zaW5nbGVDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JsQ29sb3JNb2RlID09ICR7R3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLkNPTE9SX01PREVfQUREfS4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yLnJnYiArPSBncmxfc2luZ2xlQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdybENvbG9yTW9kZSA9PSAke0dyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX01VTFRJUExZfS4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yLnJnYiAqPSBncmxfc2luZ2xlQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JsVXNlQ29sb3JzID09IDEuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2lmZGVmIEdSRUFTRURfTElORV9DT0xPUl9ESVNUUklCVVRJT05fVFlQRV9MSU5FXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYzQgZ3JsQ29sb3IgPSB0ZXh0dXJlMkQoZ3JsX2NvbG9ycywgdmVjMihncmxDb3VudGVycywgMC4pLCAwLik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Vsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjMiBsb29rdXAgPSB2ZWMyKGZyYWN0KGdybENvbG9yUG9pbnRlciAvIGdybF90ZXh0dXJlU2l6ZS54KSwgMS4wIC0gZmxvb3IoZ3JsQ29sb3JQb2ludGVyIC8gZ3JsX3RleHR1cmVTaXplLngpIC8gbWF4KGdybF90ZXh0dXJlU2l6ZS55IC0gMS4wLCAxLjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjNCBncmxDb2xvciA9IHRleHR1cmUyRChncmxfY29sb3JzLCBsb29rdXAsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VuZGlmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdybENvbG9yTW9kZSA9PSAke0dyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX1NFVH0uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdybEZpbmFsQ29sb3IgPSBncmxDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdybENvbG9yTW9kZSA9PSAke0dyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX0FERH0uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdybEZpbmFsQ29sb3IgKz0gZ3JsQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChncmxDb2xvck1vZGUgPT0gJHtHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUuQ09MT1JfTU9ERV9NVUxUSVBMWX0uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdybEZpbmFsQ29sb3IgKj0gZ3JsQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAjZW5kaWZcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgR3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlIH0gZnJvbSBcIi4vZ3JlYXNlZExpbmVNYXRlcmlhbEludGVyZmFjZXNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIFdHU0wgY3VzdG9tIHNoYWRlciBjb2RlXG4gKiBAcGFyYW0gc2hhZGVyVHlwZSB2ZXJ0ZXggb3IgZnJhZ21lbnRcbiAqIEBwYXJhbSBjYW1lcmFGYWNpbmcgaXMgaW4gY2FtZXJhIGZhY2luZyBtb2RlP1xuICogQHJldHVybnMgV0dTTCBjdXN0b20gc2hhZGVyIGNvZGVcbiAqL1xuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdldEN1c3RvbUNvZGUoc2hhZGVyVHlwZTogc3RyaW5nLCBjYW1lcmFGYWNpbmc6IGJvb2xlYW4pOiBOdWxsYWJsZTx7IFtwb2ludE5hbWU6IHN0cmluZ106IHN0cmluZyB9PiB7XG4gICAgaWYgKHNoYWRlclR5cGUgPT09IFwidmVydGV4XCIpIHtcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7XG4gICAgICAgICAgICBDVVNUT01fVkVSVEVYX0RFRklOSVRJT05TOiBgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlIGdybF93aWR0aHM6IGYzMjtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZ3JsX2NvbG9yUG9pbnRlcnM6IGYzMjtcbiAgICAgICAgICAgICAgICB2YXJ5aW5nIGdybENvdW50ZXJzOiBmMzI7XG4gICAgICAgICAgICAgICAgdmFyeWluZyBncmxDb2xvclBvaW50ZXI6IGYzMjtcblxuICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfVVNFX09GRlNFVFNcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIGdybF9vZmZzZXRzOiB2ZWMzZjsgICBcbiAgICAgICAgICAgICAgICAjZW5kaWZcblxuICAgICAgICAgICAgICAgICNpZmRlZiBHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZ3JsX3ByZXZpb3VzQW5kU2lkZSA6IHZlYzRmO1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZ3JsX25leHRBbmRDb3VudGVycyA6IHZlYzRmO1xuXG4gICAgICAgICAgICAgICAgICAgIGZuIGdybEZpeChpOiB2ZWM0ZiwgYXNwZWN0OiBmMzIpIC0+IHZlYzJmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBpLnh5IC8gaS53O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnggKj0gYXNwZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNlbHNlXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBncmxfc2xvcGVzOiBmMzI7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBncmxfY291bnRlcnM6IGYzMjtcbiAgICAgICAgICAgICAgICAjZW5kaWZcblxuXG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIENVU1RPTV9WRVJURVhfVVBEQVRFX1BPU0lUSU9OOiBgXG4gICAgICAgICAgICAgICAgI2lmZGVmIEdSRUFTRURfTElORV9VU0VfT0ZGU0VUU1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JsUG9zaXRpb25PZmZzZXQ6IHZlYzNmID0gaW5wdXQuZ3JsX29mZnNldHM7XG4gICAgICAgICAgICAgICAgI2Vsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdybFBvc2l0aW9uT2Zmc2V0ID0gdmVjM2YoMC4pO1xuICAgICAgICAgICAgICAgICNlbmRpZlxuXG4gICAgICAgICAgICAgICAgI2lmZGVmIEdSRUFTRURfTElORV9DQU1FUkFfRkFDSU5HXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVXBkYXRlZCArPSBncmxQb3NpdGlvbk9mZnNldDtcbiAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblVwZGF0ZWQgPSAocG9zaXRpb25VcGRhdGVkICsgZ3JsUG9zaXRpb25PZmZzZXQpICsgKGlucHV0LmdybF9zbG9wZXMgKiBpbnB1dC5ncmxfd2lkdGhzKTtcbiAgICAgICAgICAgICAgICAjZW5kaWZcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgQ1VTVE9NX1ZFUlRFWF9NQUlOX0VORDogYFxuICAgICAgICAgICAgICAgIHZlcnRleE91dHB1dHMuZ3JsQ29sb3JQb2ludGVyID0gaW5wdXQuZ3JsX2NvbG9yUG9pbnRlcnM7XG5cbiAgICAgICAgICAgICAgICAjaWZkZWYgR1JFQVNFRF9MSU5FX0NBTUVSQV9GQUNJTkdcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JsQXNwZWN0OiBmMzIgPSB1bmlmb3Jtcy5ncmxfYXNwZWN0X3Jlc29sdXRpb25fbGluZVdpZHRoLng7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxCYXNlV2lkdGg6IGYzMiA9IHVuaWZvcm1zLmdybF9hc3BlY3RfcmVzb2x1dGlvbl9saW5lV2lkdGgudztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JsUHJldmlvdXM6IHZlYzNmID0gaW5wdXQuZ3JsX3ByZXZpb3VzQW5kU2lkZS54eXo7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxTaWRlOiBmMzIgPSBpbnB1dC5ncmxfcHJldmlvdXNBbmRTaWRlLnc7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGdybE5leHQ6IHZlYzNmID0gaW5wdXQuZ3JsX25leHRBbmRDb3VudGVycy54eXo7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRleE91dHB1dHMuZ3JsQ291bnRlcnMgPSBpbnB1dC5ncmxfbmV4dEFuZENvdW50ZXJzLnc7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGdybFdpZHRoOiBmMzIgPSBncmxCYXNlV2lkdGggKiBpbnB1dC5ncmxfd2lkdGhzO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3JsZERpcjogdmVjM2YgPSBub3JtYWxpemUoZ3JsTmV4dCAtIGdybFByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5lYXJQb3NpdGlvbjogdmVjM2YgPSBwb3NpdGlvblVwZGF0ZWQgKyAod29ybGREaXIgKiAwLjAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdybE1hdHJpeDogbWF0NHg0ZiA9IHVuaWZvcm1zLnZpZXdQcm9qZWN0aW9uICogZmluYWxXb3JsZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdybEZpbmFsUG9zaXRpb246IHZlYzRmID0gZ3JsTWF0cml4ICogdmVjNGYocG9zaXRpb25VcGRhdGVkLCAxLjApOyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcmVlbk5lYXJQb3M6IHZlYzRmID0gZ3JsTWF0cml4ICogdmVjNChuZWFyUG9zaXRpb24sIDEuMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxMaW5lUG9zaXRpb246IHZlYzJmID0gZ3JsRml4KGdybEZpbmFsUG9zaXRpb24sIGdybEFzcGVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxMaW5lTmVhclBvc2l0aW9uOiB2ZWMyZiA9IGdybEZpeChzY3JlZW5OZWFyUG9zLCBncmxBc3BlY3QpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JsRGlyOiB2ZWMyZiA9IG5vcm1hbGl6ZShncmxMaW5lTmVhclBvc2l0aW9uIC0gZ3JsTGluZVBvc2l0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JsTm9ybWFsOiB2ZWM0ZiA9IHZlYzRmKC1ncmxEaXIueSwgZ3JsRGlyLngsIDAuMCwgMS4wKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JsSGFsZldpZHRoOiBmMzIgPSAwLjUgKiBncmxXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgI2lmIGRlZmluZWQoR1JFQVNFRF9MSU5FX1JJR0hUX0hBTkRFRF9DT09SRElOQVRFX1NZU1RFTSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGdybE5vcm1hbC54ICo9IC1ncmxIYWxmV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmxOb3JtYWwueSAqPSAtZ3JsSGFsZldpZHRoO1xuICAgICAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JsTm9ybWFsLnggKj0gZ3JsSGFsZldpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JsTm9ybWFsLnkgKj0gZ3JsSGFsZldpZHRoO1xuICAgICAgICAgICAgICAgICAgICAjZW5kaWZcblxuICAgICAgICAgICAgICAgICAgICBncmxOb3JtYWwgKj0gdW5pZm9ybXMuZ3JsX3Byb2plY3Rpb247XG5cbiAgICAgICAgICAgICAgICAgICAgI2lmIGRlZmluZWQoR1JFQVNFRF9MSU5FX1NJWkVfQVRURU5VQVRJT04pXG4gICAgICAgICAgICAgICAgICAgICAgICBncmxOb3JtYWwueCAqPSBncmxGaW5hbFBvc2l0aW9uLnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmxOb3JtYWwueSAqPSBncmxGaW5hbFBvc2l0aW9uLnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwciA9IHZlYzRmKHVuaWZvcm1zLmdybF9hc3BlY3RfcmVzb2x1dGlvbl9saW5lV2lkdGgueXosIDAuMCwgMS4wKSAqIHVuaWZvcm1zLmdybF9wcm9qZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JsTm9ybWFsLnggLz0gcHIueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdybE5vcm1hbC55IC89IHByLnk7XG4gICAgICAgICAgICAgICAgICAgICNlbmRpZlxuXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleE91dHB1dHMucG9zaXRpb24gPSB2ZWM0ZihncmxGaW5hbFBvc2l0aW9uLnh5ICsgZ3JsTm9ybWFsLnh5ICogZ3JsU2lkZSwgZ3JsRmluYWxQb3NpdGlvbi56LCBncmxGaW5hbFBvc2l0aW9uLncpO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhPdXRwdXRzLnZQb3NpdGlvblcgPSB2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uLnh5ejtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhPdXRwdXRzLmdybENvdW50ZXJzID0gaW5wdXQuZ3JsX2NvdW50ZXJzO1xuICAgICAgICAgICAgICAgICNlbmRpZlxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNhbWVyYUZhY2luZykge1xuICAgICAgICAgICAgb2JqW1wiIXZlcnRleE91dHB1dHNcXFxcLnBvc2l0aW9uXFxcXHM9XFxcXHNzY2VuZVxcXFwudmlld1Byb2plY3Rpb25cXFxcc1xcXFwqXFxcXHN3b3JsZFBvcztcIl0gPSBcIi8vXCI7IC8vIG5vdCBuZWVkZWQgZm9yIGNhbWVyYSBmYWNpbmcgR1JMXG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKHNoYWRlclR5cGUgPT09IFwiZnJhZ21lbnRcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TOiBgXG4gICAgICAgICAgICAgICAgICAgICNpZmRlZiBQQlJcbiAgICAgICAgICAgICAgICAgICAgICAgICAjZGVmaW5lIGdybEZpbmFsQ29sb3IgZmluYWxDb2xvclxuICAgICAgICAgICAgICAgICAgICAjZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICNkZWZpbmUgZ3JsRmluYWxDb2xvciBjb2xvclxuICAgICAgICAgICAgICAgICAgICAjZW5kaWZcblxuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGdybENvdW50ZXJzOiBmMzI7XG4gICAgICAgICAgICAgICAgICAgIHZhcnlpbmcgZ3JsQ29sb3JQb2ludGVyOiAzMjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JsX2NvbG9yczogdGV4dHVyZV8yZDxmMzI+O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JsX2NvbG9yc1NhbXBsZXI6IHNhbXBsZXI7XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIENVU1RPTV9GUkFHTUVOVF9CRUZPUkVfRlJBR0NPTE9SOiBgXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxDb2xvck1vZGU6IGYzMiA9IHVuaWZvcm1zLmdybF9jb2xvck1vZGVfdmlzaWJpbGl0eV9jb2xvcnNXaWR0aF91c2VDb2xvcnMueDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdybFZpc2liaWxpdHk6IGYzMiA9IHVuaWZvcm1zLmdybF9jb2xvck1vZGVfdmlzaWJpbGl0eV9jb2xvcnNXaWR0aF91c2VDb2xvcnMueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdybENvbG9yc1dpZHRoOiBmMzIgPSB1bmlmb3Jtcy5ncmxfY29sb3JNb2RlX3Zpc2liaWxpdHlfY29sb3JzV2lkdGhfdXNlQ29sb3JzLno7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxVc2VDb2xvcnM6IGYzMiA9IHVuaWZvcm1zLmdybF9jb2xvck1vZGVfdmlzaWJpbGl0eV9jb2xvcnNXaWR0aF91c2VDb2xvcnMudztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JsVXNlRGFzaDogZjMyID0gdW5pZm9ybXMuZ3JsX2Rhc2hPcHRpb25zLng7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxEYXNoQXJyYXk6IGYzMiA9IHVuaWZvcm1zLmdybF9kYXNoT3B0aW9ucy55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JsRGFzaE9mZnNldDogZjMyID0gdW5pZm9ybXMuZ3JsX2Rhc2hPcHRpb25zLno7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncmxEYXNoUmF0aW86IGYzMiA9IHVuaWZvcm1zLmdybF9kYXNoT3B0aW9ucy53O1xuXG4gICAgICAgICAgICAgICAgICAgIGdybEZpbmFsQ29sb3IuYSAqPSBzdGVwKGZyYWdtZW50SW5wdXRzLmdybENvdW50ZXJzLCBncmxWaXNpYmlsaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdybEZpbmFsQ29sb3IuYSA9PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NhcmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JsVXNlRGFzaCA9PSAxLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXNoUG9zaXRpb24gPSAoZnJhZ21lbnRJbnB1dHMuZ3JsQ291bnRlcnMgKyBncmxEYXNoT2Zmc2V0KSAlIGdybERhc2hBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdybEZpbmFsQ29sb3IuYSAqPSBjZWlsKGRhc2hQb3NpdGlvbiAtIChncmxEYXNoQXJyYXkgKiBncmxEYXNoUmF0aW8pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdybEZpbmFsQ29sb3IuYSA9PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjYXJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2lmZGVmIEdSRUFTRURfTElORV9IQVNfQ09MT1JcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmxDb2xvck1vZGUgPT0gJHtHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUuQ09MT1JfTU9ERV9TRVR9Likge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdybEZpbmFsQ29sb3IgPSB2ZWM0Zih1bmlmb3Jtcy5ncmxfc2luZ2xlQ29sb3IsIGdybEZpbmFsQ29sb3IuYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdybENvbG9yTW9kZSA9PSAke0dyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX0FERH0uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JsRmluYWxDb2xvciArPSB2ZWM0Zih1bmlmb3Jtcy5ncmxfc2luZ2xlQ29sb3IsIGdybEZpbmFsQ29sb3IuYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdybENvbG9yTW9kZSA9PSAke0dyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX01VTFRJUExZfS4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yICo9IHZlYzRmKHVuaWZvcm1zLmdybF9zaW5nbGVDb2xvciwgZ3JsRmluYWxDb2xvci5hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2Vsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmxVc2VDb2xvcnMgPT0gMS4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjaWZkZWYgR1JFQVNFRF9MSU5FX0NPTE9SX0RJU1RSSUJVVElPTl9UWVBFX0xJTkVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdybENvbG9yOiB2ZWM0ZiA9IHRleHR1cmVTYW1wbGUoZ3JsX2NvbG9ycywgZ3JsX2NvbG9yc1NhbXBsZXIsIHZlYzJmKGZyYWdtZW50SW5wdXRzLmdybENvdW50ZXJzLCAwLikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rdXA6IHZlYzJmID0gdmVjMihmcmFjdChmcmFnbWVudElucHV0cy5ncmxDb2xvclBvaW50ZXIgLyB1bmlmb3Jtcy5ncmxfdGV4dHVyZVNpemUueCksIDEuMCAtIGZsb29yKGZyYWdtZW50SW5wdXRzLmdybENvbG9yUG9pbnRlciAvIHVuaWZvcm1zLmdybF90ZXh0dXJlU2l6ZS54KSAvIG1heCh1bmlmb3Jtcy5ncmxfdGV4dHVyZVNpemUueSAtIDEuMCwgMS4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBncmxDb2xvcjogdmVjNGYgPSB0ZXh0dXJlU2FtcGxlKGdybF9jb2xvcnMsIGdybF9jb2xvcnNTYW1wbGVyLCBsb29rdXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbmRpZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmxDb2xvck1vZGUgPT0gJHtHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUuQ09MT1JfTU9ERV9TRVR9Likge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yID0gZ3JsQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChncmxDb2xvck1vZGUgPT0gJHtHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUuQ09MT1JfTU9ERV9BRER9Likge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yICs9IGdybENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3JsQ29sb3JNb2RlID09ICR7R3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLkNPTE9SX01PREVfTVVMVElQTFl9Likge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmxGaW5hbENvbG9yICo9IGdybENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2VuZGlmXG5cblxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uLy4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IFJhd1RleHR1cmUgfSBmcm9tIFwiLi4vVGV4dHVyZXMvcmF3VGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBTaGFkZXJNYXRlcmlhbCB9IGZyb20gXCIuLi9zaGFkZXJNYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCIuLi8uLi9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgU2hhZGVyTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vc2hhZGVyTGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dHVyZVNhbXBsZXIgfSBmcm9tIFwiLi4vVGV4dHVyZXMvdGV4dHVyZVNhbXBsZXJcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgR3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMsIElHcmVhc2VkTGluZU1hdGVyaWFsIH0gZnJvbSBcIi4vZ3JlYXNlZExpbmVNYXRlcmlhbEludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgR3JlYXNlZExpbmVNZXNoQ29sb3JEaXN0cmlidXRpb25UeXBlLCBHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUgfSBmcm9tIFwiLi9ncmVhc2VkTGluZU1hdGVyaWFsSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBHcmVhc2VkTGluZVRvb2xzIH0gZnJvbSBcIi4uLy4uL01pc2MvZ3JlYXNlZExpbmVUb29sc1wiO1xyXG5pbXBvcnQgeyBHcmVhc2VkTGluZU1hdGVyaWFsRGVmYXVsdHMgfSBmcm9tIFwiLi9ncmVhc2VkTGluZU1hdGVyaWFsRGVmYXVsdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmVhc2VkTGluZVVzZU9mZnNldHNTaW1wbGVNYXRlcmlhbERlZmluZSA9IFwiR1JFQVNFRF9MSU5FX1VTRV9PRkZTRVRTXCI7XHJcblxyXG4vKipcclxuICogR3JlYXNlZExpbmVTaW1wbGVNYXRlcmlhbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyZWFzZWRMaW5lU2ltcGxlTWF0ZXJpYWwgZXh0ZW5kcyBTaGFkZXJNYXRlcmlhbCBpbXBsZW1lbnRzIElHcmVhc2VkTGluZU1hdGVyaWFsIHtcclxuICAgIC8qKlxyXG4gICAgICogRm9yY2UgdG8gdXNlIEdMU0wgaW4gV2ViR1BVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9yY2VHTFNMID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfdmlzaWJpbGl0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3VzZURhc2g6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9kYXNoQ291bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2Rhc2hBcnJheTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGFzaFJhdGlvOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kYXNoT2Zmc2V0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF91c2VDb2xvcnM6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9jb2xvcjogQ29sb3IzID0gQ29sb3IzLldoaXRlKCk7XHJcbiAgICBwcml2YXRlIF9jb2xvcnM6IE51bGxhYmxlPENvbG9yM1tdPjtcclxuICAgIHByaXZhdGUgX2NvbG9yc0Rpc3RyaWJ1dGlvblR5cGU6IEdyZWFzZWRMaW5lTWVzaENvbG9yRGlzdHJpYnV0aW9uVHlwZSA9IEdyZWFzZWRMaW5lTWVzaENvbG9yRGlzdHJpYnV0aW9uVHlwZS5DT0xPUl9ESVNUUklCVVRJT05fVFlQRV9TRUdNRU5UO1xyXG4gICAgcHJpdmF0ZSBfY29sb3JNb2RlOiBHcmVhc2VkTGluZU1lc2hDb2xvck1vZGU7XHJcbiAgICBwcml2YXRlIF9jb2xvcnNTYW1wbGluZzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmVzb2x1dGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX3NpemVBdHRlbnVhdGlvbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2NvbG9yc1RleHR1cmU6IE51bGxhYmxlPFJhd1RleHR1cmU+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2NhbWVyYUZhY2luZzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyZWFzZWRMaW5lU2ltcGxlIG1hdGVyaWFsIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBtYXRlcmlhbCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBtYXRlcmlhbCBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc2NlbmU6IFNjZW5lLCBvcHRpb25zOiBHcmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHNjZW5lLmdldEVuZ2luZSgpO1xyXG4gICAgICAgIGNvbnN0IGlzV0dTTCA9IGVuZ2luZS5pc1dlYkdQVSAmJiAhKG9wdGlvbnMuZm9yY2VHTFNMIHx8IEdyZWFzZWRMaW5lU2ltcGxlTWF0ZXJpYWwuRm9yY2VHTFNMKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmaW5lcyA9IFtcclxuICAgICAgICAgICAgYENPTE9SX0RJU1RSSUJVVElPTl9UWVBFX0xJTkUgJHtHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGUuQ09MT1JfRElTVFJJQlVUSU9OX1RZUEVfTElORX0uYCxcclxuICAgICAgICAgICAgYENPTE9SX0RJU1RSSUJVVElPTl9UWVBFX1NFR01FTlQgJHtHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGUuQ09MT1JfRElTVFJJQlVUSU9OX1RZUEVfU0VHTUVOVH0uYCxcclxuICAgICAgICAgICAgYENPTE9SX01PREVfU0VUICR7R3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLkNPTE9SX01PREVfU0VUfS5gLFxyXG4gICAgICAgICAgICBgQ09MT1JfTU9ERV9BREQgJHtHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUuQ09MT1JfTU9ERV9BRER9LmAsXHJcbiAgICAgICAgICAgIGBDT0xPUl9NT0RFX01VTFRJUExZICR7R3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLkNPTE9SX01PREVfTVVMVElQTFl9LmAsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBpZiAoc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgZGVmaW5lcy5wdXNoKFwiR1JFQVNFRF9MSU5FX1JJR0hUX0hBTkRFRF9DT09SRElOQVRFX1NZU1RFTVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXCJwb3NpdGlvblwiLCBcImdybF93aWR0aHNcIiwgXCJncmxfb2Zmc2V0c1wiLCBcImdybF9jb2xvclBvaW50ZXJzXCJdO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5jYW1lcmFGYWNpbmcpIHtcclxuICAgICAgICAgICAgZGVmaW5lcy5wdXNoKFwiR1JFQVNFRF9MSU5FX0NBTUVSQV9GQUNJTkdcIik7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChcImdybF9wcmV2aW91c0FuZFNpZGVcIiwgXCJncmxfbmV4dEFuZENvdW50ZXJzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChcImdybF9zbG9wZXNcIik7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChcImdybF9jb3VudGVyc1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gW1xyXG4gICAgICAgICAgICBcImdybENvbG9yc1dpZHRoXCIsXHJcbiAgICAgICAgICAgIFwiZ3JsVXNlQ29sb3JzXCIsXHJcbiAgICAgICAgICAgIFwiZ3JsV2lkdGhcIixcclxuICAgICAgICAgICAgXCJncmxDb2xvclwiLFxyXG4gICAgICAgICAgICBcImdybF9jb2xvck1vZGVBbmRDb2xvckRpc3RyaWJ1dGlvblR5cGVcIixcclxuICAgICAgICAgICAgXCJncmxSZXNvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZ3JsQXNwZWN0XCIsXHJcbiAgICAgICAgICAgIFwiZ3JsQWl6ZUF0dGVudWF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZ3JsRGFzaEFycmF5XCIsXHJcbiAgICAgICAgICAgIFwiZ3JsRGFzaE9mZnNldFwiLFxyXG4gICAgICAgICAgICBcImdybERhc2hSYXRpb1wiLFxyXG4gICAgICAgICAgICBcImdybFVzZURhc2hcIixcclxuICAgICAgICAgICAgXCJncmxWaXNpYmlsaXR5XCIsXHJcbiAgICAgICAgICAgIFwiZ3JsQ29sb3JzXCIsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1dHU0wpIHtcclxuICAgICAgICAgICAgdW5pZm9ybXMucHVzaChcIndvcmxkXCIsIFwidmlld1Byb2plY3Rpb25cIiwgXCJ2aWV3XCIsIFwicHJvamVjdGlvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmVydGV4OiBcImdyZWFzZWRMaW5lXCIsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudDogXCJncmVhc2VkTGluZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1bmlmb3JtQnVmZmVyczogaXNXR1NMID8gW1wiU2NlbmVcIiwgXCJNZXNoXCJdIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcnM6IGlzV0dTTCA/IFtdIDogW1wiZ3JsQ29sb3JzXCJdLFxyXG4gICAgICAgICAgICAgICAgZGVmaW5lcyxcclxuICAgICAgICAgICAgICAgIGV4dHJhSW5pdGlhbGl6YXRpb25zQXN5bmM6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNXR1NMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtpbXBvcnQoXCIuLi8uLi9TaGFkZXJzV0dTTC9ncmVhc2VkTGluZS52ZXJ0ZXhcIiksIGltcG9ydChcIi4uLy4uL1NoYWRlcnNXR1NML2dyZWFzZWRMaW5lLmZyYWdtZW50XCIpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW2ltcG9ydChcIi4uLy4uL1NoYWRlcnMvZ3JlYXNlZExpbmUudmVydGV4XCIpLCBpbXBvcnQoXCIuLi8uLi9TaGFkZXJzL2dyZWFzZWRMaW5lLmZyYWdtZW50XCIpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNoYWRlckxhbmd1YWdlOiBpc1dHU0wgPyBTaGFkZXJMYW5ndWFnZS5XR1NMIDogU2hhZGVyTGFuZ3VhZ2UuR0xTTCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtcclxuICAgICAgICAgICAgY29sb3I6IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5ERUZBVUxUX0NPTE9SLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IG9wdGlvbnMudmlzaWJpbGl0eSA/PyAxO1xyXG4gICAgICAgIHRoaXMudXNlRGFzaCA9IG9wdGlvbnMudXNlRGFzaCA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhc2hSYXRpbyA9IG9wdGlvbnMuZGFzaFJhdGlvID8/IDAuNTtcclxuICAgICAgICB0aGlzLmRhc2hPZmZzZXQgPSBvcHRpb25zLmRhc2hPZmZzZXQgPz8gMDtcclxuICAgICAgICB0aGlzLmRhc2hDb3VudCA9IG9wdGlvbnMuZGFzaENvdW50ID8/IDE7IC8vIGNhbGN1bGF0ZSB0aGUgX2Rhc2hBcnJheSB2YWx1ZSwgY2FsbCB0aGUgc2V0dGVyXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGhcclxuICAgICAgICAgICAgPyBvcHRpb25zLndpZHRoXHJcbiAgICAgICAgICAgIDogb3B0aW9ucy5zaXplQXR0ZW51YXRpb24gJiYgb3B0aW9ucy5jYW1lcmFGYWNpbmdcclxuICAgICAgICAgICAgICA/IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5ERUZBVUxUX1dJRFRIX0FUVEVOVUFURURcclxuICAgICAgICAgICAgICA6IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5ERUZBVUxUX1dJRFRIO1xyXG4gICAgICAgIHRoaXMuc2l6ZUF0dGVudWF0aW9uID0gb3B0aW9ucy5zaXplQXR0ZW51YXRpb24gPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IG9wdGlvbnMuY29sb3IgPz8gQ29sb3IzLldoaXRlKCk7XHJcbiAgICAgICAgdGhpcy51c2VDb2xvcnMgPSBvcHRpb25zLnVzZUNvbG9ycyA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbG9yc0Rpc3RyaWJ1dGlvblR5cGUgPSBvcHRpb25zLmNvbG9yRGlzdHJpYnV0aW9uVHlwZSA/PyBHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGUuQ09MT1JfRElTVFJJQlVUSU9OX1RZUEVfU0VHTUVOVDtcclxuICAgICAgICB0aGlzLmNvbG9yc1NhbXBsaW5nID0gb3B0aW9ucy5jb2xvcnNTYW1wbGluZyA/PyBSYXdUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVDtcclxuICAgICAgICB0aGlzLmNvbG9yTW9kZSA9IG9wdGlvbnMuY29sb3JNb2RlID8/IEdyZWFzZWRMaW5lTWVzaENvbG9yTW9kZS5DT0xPUl9NT0RFX1NFVDtcclxuICAgICAgICB0aGlzLl9jb2xvcnMgPSBvcHRpb25zLmNvbG9ycyA/PyBudWxsO1xyXG4gICAgICAgIHRoaXMuX2NhbWVyYUZhY2luZyA9IG9wdGlvbnMuY2FtZXJhRmFjaW5nID8/IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gb3B0aW9ucy5yZXNvbHV0aW9uID8/IG5ldyBWZWN0b3IyKGVuZ2luZS5nZXRSZW5kZXJXaWR0aCgpLCBlbmdpbmUuZ2V0UmVuZGVySGVpZ2h0KCkpOyAvLyBjYWxjdWxhdGUgYXNwZWN0IGNhbGwgdGhlIHNldHRlclxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5jb2xvcnNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZSA9IG9wdGlvbnMuY29sb3JzVGV4dHVyZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yc1RleHR1cmUgPSBHcmVhc2VkTGluZVRvb2xzLkNyZWF0ZUNvbG9yc1RleHR1cmUoYCR7dGhpcy5uYW1lfS1jb2xvcnMtdGV4dHVyZWAsIHRoaXMuX2NvbG9ycywgdGhpcy5jb2xvcnNTYW1wbGluZywgc2NlbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3IgPSB0aGlzLl9jb2xvciA/PyBHcmVhc2VkTGluZU1hdGVyaWFsRGVmYXVsdHMuREVGQVVMVF9DT0xPUjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzVGV4dHVyZSA9IEdyZWFzZWRMaW5lVG9vbHMuUHJlcGFyZUVtcHR5Q29sb3JzVGV4dHVyZShzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1dHU0wpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlciA9IG5ldyBUZXh0dXJlU2FtcGxlcigpO1xyXG4gICAgICAgICAgICBzYW1wbGVyLnNldFBhcmFtZXRlcnMoKTsgLy8gdXNlIHRoZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgICAgICAgICBzYW1wbGVyLnNhbXBsaW5nTW9kZSA9IHRoaXMuY29sb3JzU2FtcGxpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dHVyZVNhbXBsZXIoXCJncmxDb2xvcnNTYW1wbGVyXCIsIHNhbXBsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW5naW5lLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgR3JlYXNlZExpbmVUb29scy5EaXNwb3NlRW1wdHlDb2xvcnNUZXh0dXJlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlcyB0aGUgcGx1Z2luIG1hdGVyaWFsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb2xvcnNUZXh0dXJlPy5kaXNwb3NlKCk7XHJcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldENvbG9yTW9kZUFuZENvbG9yRGlzdHJpYnV0aW9uVHlwZSgpIHtcclxuICAgICAgICB0aGlzLnNldFZlY3RvcjIoXCJncmxfY29sb3JNb2RlQW5kQ29sb3JEaXN0cmlidXRpb25UeXBlXCIsIG5ldyBWZWN0b3IyKHRoaXMuX2NvbG9yTW9kZSwgdGhpcy5fY29sb3JzRGlzdHJpYnV0aW9uVHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgbWF0ZXJpYWwuIFVzZSB3aGVuIG1hdGVyaWFsIGNyZWF0ZWQgaW4gbGF6eSBtb2RlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlTGF6eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JzKHRoaXMuX2NvbG9ycywgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGNvbG9ycyB1c2VkIHRvIGNvbG9yaXplIHRoZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIGdldCBjb2xvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9ycztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvbG9ycyB1c2VkIHRvIGNvbG9yaXplIHRoZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIHNldCBjb2xvcnModmFsdWU6IE51bGxhYmxlPENvbG9yM1tdPikge1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3JzKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgb3IgdXBkYXRlcyB0aGUgY29sb3JzIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBjb2xvcnMgY29sb3IgdGFibGUgUkdCQVxyXG4gICAgICogQHBhcmFtIGxhenkgaWYgbGF6eSwgdGhlIGNvbG9ycyBhcmUgbm90IHVwZGF0ZWRcclxuICAgICAqIEBwYXJhbSBmb3JjZU5ld1RleHR1cmUgZm9yY2UgY3JlYXRpb24gb2YgYSBuZXcgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29sb3JzKGNvbG9yczogTnVsbGFibGU8Q29sb3IzW10+LCBsYXp5ID0gZmFsc2UsIGZvcmNlTmV3VGV4dHVyZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0NvbG9yc0NvdW50ID0gdGhpcy5fY29sb3JzPy5sZW5ndGggPz8gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sb3JzID0gY29sb3JzO1xyXG5cclxuICAgICAgICBpZiAoY29sb3JzID09PSBudWxsIHx8IGNvbG9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sb3JzVGV4dHVyZT8uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGF6eSAmJiAhZm9yY2VOZXdUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb2xvcnNUZXh0dXJlICYmIG9yaWdDb2xvcnNDb3VudCA9PT0gY29sb3JzLmxlbmd0aCAmJiAhZm9yY2VOZXdUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yQXJyYXkgPSBHcmVhc2VkTGluZVRvb2xzLkNvbG9yM3RvUkdCQVVpbnQ4KGNvbG9ycyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yc1RleHR1cmUudXBkYXRlKGNvbG9yQXJyYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yc1RleHR1cmU/LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNUZXh0dXJlID0gR3JlYXNlZExpbmVUb29scy5DcmVhdGVDb2xvcnNUZXh0dXJlKGAke3RoaXMubmFtZX0tY29sb3JzLXRleHR1cmVgLCBjb2xvcnMsIHRoaXMuY29sb3JzU2FtcGxpbmcsIHRoaXMuZ2V0U2NlbmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29sb3JzIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbG9yc1RleHR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9jb2xvcnNUZXh0dXJlIGFzIFJhd1RleHR1cmUpID8/IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2xvcnNUZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHNldCBjb2xvcnNUZXh0dXJlKHZhbHVlOiBSYXdUZXh0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3JzVGV4dHVyZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJncmxDb2xvcnNXaWR0aFwiLCB0aGlzLl9jb2xvcnNUZXh0dXJlLmdldFNpemUoKS53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5zZXRUZXh0dXJlKFwiZ3JsQ29sb3JzXCIsIHRoaXMuX2NvbG9yc1RleHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGluZSBiYXNlIHdpZHRoLiBBdCBlYWNoIHBvaW50IHRoZSBsaW5lIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgd2lkdGhzW3BvaW50SW5kZXhdICogd2lkdGhcclxuICAgICAqL1xyXG4gICAgZ2V0IHdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpbmUgYmFzZSB3aWR0aC4gQXQgZWFjaCBwb2ludCB0aGUgbGluZSB3aWR0aCBpcyBjYWxjdWxhdGVkIGJ5IHdpZHRoc1twb2ludEluZGV4XSAqIHdpZHRoXHJcbiAgICAgKi9cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwiZ3JsV2lkdGhcIiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byB1c2UgdGhlIGNvbG9ycyBvcHRpb24gdG8gY29sb3JpemUgdGhlIGxpbmVcclxuICAgICAqL1xyXG4gICAgZ2V0IHVzZUNvbG9ycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlQ29sb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB1c2VDb2xvcnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl91c2VDb2xvcnMgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwiZ3JsVXNlQ29sb3JzXCIsIEdyZWFzZWRMaW5lVG9vbHMuQm9vbGVhblRvTnVtYmVyKHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHlwZSBvZiBzYW1wbGluZyBvZiB0aGUgY29sb3JzIHRleHR1cmUuIFRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lIHdoZW4gdXNpbmcgd2l0aCB0ZXh0dXJlcy5cclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbG9yc1NhbXBsaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvcnNTYW1wbGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0eXBlIG9mIHNhbXBsaW5nIG9mIHRoZSBjb2xvcnMgdGV4dHVyZS4gVGhlIHZhbHVlcyBhcmUgdGhlIHNhbWUgd2hlbiB1c2luZyB3aXRoIHRleHR1cmVzLlxyXG4gICAgICovXHJcbiAgICBzZXQgY29sb3JzU2FtcGxpbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yc1NhbXBsaW5nID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3JtYWxpemVkIHZhbHVlIG9mIGhvdyBtdWNoIG9mIHRoZSBsaW5lIHdpbGwgYmUgdmlzaWJsZVxyXG4gICAgICogMCAtIDAlIG9mIHRoZSBsaW5lIHdpbGwgYmUgdmlzaWJsZVxyXG4gICAgICogMSAtIDEwMCUgb2YgdGhlIGxpbmUgd2lsbCBiZSB2aXNpYmxlXHJcbiAgICAgKi9cclxuICAgIGdldCB2aXNpYmlsaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpYmlsaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2aXNpYmlsaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl92aXNpYmlsaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImdybFZpc2liaWxpdHlcIiwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHVybnMgb24vb2ZmIGRhc2ggbW9kZVxyXG4gICAgICovXHJcbiAgICBnZXQgdXNlRGFzaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlRGFzaDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR1cm5zIG9uL29mZiBkYXNoIG1vZGVcclxuICAgICAqL1xyXG4gICAgc2V0IHVzZURhc2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl91c2VEYXNoID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImdybFVzZURhc2hcIiwgR3JlYXNlZExpbmVUb29scy5Cb29sZWFuVG9OdW1iZXIodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGRhc2ggb2Zmc2V0XHJcbiAgICAgKi9cclxuICAgIGdldCBkYXNoT2Zmc2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXNoT2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZGFzaCBvZmZzZXRcclxuICAgICAqL1xyXG4gICAgc2V0IGRhc2hPZmZzZXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2Rhc2hPZmZzZXQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwiZ3JsRGFzaE9mZnNldFwiLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZW5ndGggb2YgdGhlIGRhc2guIDAgdG8gMS4gMC41IG1lYW5zIGhhbGYgZW1wdHksIGhhbGYgZHJhd24uXHJcbiAgICAgKi9cclxuICAgIGdldCBkYXNoUmF0aW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rhc2hSYXRpbztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExlbmd0aCBvZiB0aGUgZGFzaC4gMCB0byAxLiAwLjUgbWVhbnMgaGFsZiBlbXB0eSwgaGFsZiBkcmF3bi5cclxuICAgICAqL1xyXG4gICAgc2V0IGRhc2hSYXRpbyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGFzaFJhdGlvID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImdybERhc2hSYXRpb1wiLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgZGFzaGVzIGluIHRoZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIGdldCBkYXNoQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rhc2hDb3VudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbnVtYmVyIG9mIGRhc2hlcyBpbiB0aGUgbGluZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIGRhc2hcclxuICAgICAqL1xyXG4gICAgc2V0IGRhc2hDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGFzaENvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fZGFzaEFycmF5ID0gMSAvIHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJncmxEYXNoQXJyYXlcIiwgdGhpcy5fZGFzaEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZhbHNlIG1lYW5zIDEgdW5pdCBpbiB3aWR0aCA9IDEgdW5pdCBvbiBzY2VuZSwgdHJ1ZSBtZWFucyAxIHVuaXQgaW4gd2lkdGggaXMgcmVkdWNlZCBvbiB0aGUgc2NyZWVuIHRvIG1ha2UgYmV0dGVyIGxvb2tpbmcgbGluZXNcclxuICAgICAqL1xyXG4gICAgZ2V0IHNpemVBdHRlbnVhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZUF0dGVudWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHVybiBvbi9vZmYgYXR0ZW51YXRpb24gb2YgdGhlIHdpZHRoIG9wdGlvbiBhbmQgd2lkdGhzIGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIGZhbHNlIG1lYW5zIDEgdW5pdCBpbiB3aWR0aCA9IDEgdW5pdCBvbiBzY2VuZSwgdHJ1ZSBtZWFucyAxIHVuaXQgaW4gd2lkdGggaXMgcmVkdWNlZCBvbiB0aGUgc2NyZWVuIHRvIG1ha2UgYmV0dGVyIGxvb2tpbmcgbGluZXNcclxuICAgICAqL1xyXG4gICAgc2V0IHNpemVBdHRlbnVhdGlvbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NpemVBdHRlbnVhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJncmxTaXplQXR0ZW51YXRpb25cIiwgR3JlYXNlZExpbmVUb29scy5Cb29sZWFuVG9OdW1iZXIodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvbG9yIG9mIHRoZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIGdldCBjb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2xvciBvZiB0aGUgbGluZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIENvbG9yM1xyXG4gICAgICovXHJcbiAgICBzZXQgY29sb3IodmFsdWU6IENvbG9yMykge1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY29sb3Igb2YgdGhlIGxpbmUuIElmIHNldCB0aGUgd2hvbGUgbGluZSB3aWxsIGJlIG1peGVkIHdpdGggdGhpcyBjb2xvciBhY2NvcmRpbmcgdG8gdGhlIGNvbG9yTW9kZSBvcHRpb24uXHJcbiAgICAgKiBUaGUgc2ltcGxlIG1hdGVyaWFsIGFsd2F5cyBuZWVkcyBhIGNvbG9yIHRvIGJlIHNldC4gSWYgeW91IHNldCBpdCB0byBudWxsIGl0IHdpbGwgc2V0IHRoZSBjb2xvciB0byB0aGUgZGVmYXVsdCBjb2xvciAoR3JlYXNlZExpbmVTaW1wbGVNYXRlcmlhbC5ERUZBVUxUX0NPTE9SKS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBjb2xvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29sb3IodmFsdWU6IE51bGxhYmxlPENvbG9yMz4pIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID8/IEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5ERUZBVUxUX0NPTE9SO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjMoXCJncmxDb2xvclwiLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjb2xvciBkaXN0cmlidXRpb3BuIHR5cGVcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbG9yc0Rpc3RyaWJ1dGlvblR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yc0Rpc3RyaWJ1dGlvblR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2xvciBkaXN0cmlidXRpb24gdHlwZVxyXG4gICAgICogQHNlZSBHcmVhc2VkTGluZU1lc2hDb2xvckRpc3RyaWJ1dGlvblR5cGVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBjb2xvciBkaXN0cmlidXRpb24gdHlwZVxyXG4gICAgICovXHJcbiAgICBzZXQgY29sb3JzRGlzdHJpYnV0aW9uVHlwZSh2YWx1ZTogR3JlYXNlZExpbmVNZXNoQ29sb3JEaXN0cmlidXRpb25UeXBlKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3JzRGlzdHJpYnV0aW9uVHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3NldENvbG9yTW9kZUFuZENvbG9yRGlzdHJpYnV0aW9uVHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbWl4aW5nIG1vZGUgb2YgdGhlIGNvbG9yIGFuZCBjb2xvcnMgcGFyYW1hdGVycy4gRGVmYXVsdCB2YWx1ZSBpcyBHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUuU0VULlxyXG4gICAgICogTUFURVJJQUxfVFlQRV9TSU1QTEUgbWl4ZXMgdGhlIGNvbG9yIGFuZCBjb2xvcnMgb2YgdGhlIGdyZWFzZWQgbGluZSBtYXRlcmlhbC5cclxuICAgICAqIEBzZWUgR3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlXHJcbiAgICAgKi9cclxuICAgIGdldCBjb2xvck1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yTW9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG1peGluZyBtb2RlIG9mIHRoZSBjb2xvciBhbmQgY29sb3JzIHBhcmFtYXRlcnMuIERlZmF1bHQgdmFsdWUgaXMgR3JlYXNlZExpbmVNZXNoQ29sb3JNb2RlLlNFVC5cclxuICAgICAqIE1BVEVSSUFMX1RZUEVfU0lNUExFIG1peGVzIHRoZSBjb2xvciBhbmQgY29sb3JzIG9mIHRoZSBncmVhc2VkIGxpbmUgbWF0ZXJpYWwuXHJcbiAgICAgKiBAc2VlIEdyZWFzZWRMaW5lTWVzaENvbG9yTW9kZVxyXG4gICAgICovXHJcbiAgICBzZXQgY29sb3JNb2RlKHZhbHVlOiBHcmVhc2VkTGluZU1lc2hDb2xvck1vZGUpIHtcclxuICAgICAgICB0aGlzLl9jb2xvck1vZGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zZXRDb2xvck1vZGVBbmRDb2xvckRpc3RyaWJ1dGlvblR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHJlc29sdXRpb25cclxuICAgICAqL1xyXG4gICAgZ2V0IHJlc29sdXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc29sdXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSByZXNvbHV0aW9uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgcmVzb2x1dGlvbiBvZiB0aGUgc2NyZWVuIGZvciBHcmVhc2VkTGluZVxyXG4gICAgICovXHJcbiAgICBzZXQgcmVzb2x1dGlvbih2YWx1ZTogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFZlY3RvcjIoXCJncmxSZXNvbHV0aW9uXCIsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwiZ3JsQXNwZWN0XCIsIHZhbHVlLnggLyB2YWx1ZS55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBwbHVnaW4gbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIHNlcmlhbGl6YXRpb25PYmplY1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IHN1cGVyLnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9uczogR3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbG9yRGlzdHJpYnV0aW9uVHlwZTogdGhpcy5fY29sb3JzRGlzdHJpYnV0aW9uVHlwZSxcclxuICAgICAgICAgICAgY29sb3JzU2FtcGxpbmc6IHRoaXMuX2NvbG9yc1NhbXBsaW5nLFxyXG4gICAgICAgICAgICBjb2xvck1vZGU6IHRoaXMuX2NvbG9yTW9kZSxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMuX2NvbG9yLFxyXG4gICAgICAgICAgICBkYXNoQ291bnQ6IHRoaXMuX2Rhc2hDb3VudCxcclxuICAgICAgICAgICAgZGFzaE9mZnNldDogdGhpcy5fZGFzaE9mZnNldCxcclxuICAgICAgICAgICAgZGFzaFJhdGlvOiB0aGlzLl9kYXNoUmF0aW8sXHJcbiAgICAgICAgICAgIHJlc29sdXRpb246IHRoaXMuX3Jlc29sdXRpb24sXHJcbiAgICAgICAgICAgIHNpemVBdHRlbnVhdGlvbjogdGhpcy5fc2l6ZUF0dGVudWF0aW9uLFxyXG4gICAgICAgICAgICB1c2VDb2xvcnM6IHRoaXMuX3VzZUNvbG9ycyxcclxuICAgICAgICAgICAgdXNlRGFzaDogdGhpcy5fdXNlRGFzaCxcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdGhpcy5fdmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxyXG4gICAgICAgICAgICBjYW1lcmFGYWNpbmc6IHRoaXMuX2NhbWVyYUZhY2luZyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9ycyA9IHRoaXMuX2NvbG9ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMgPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucztcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgYSBzZXJpYWxpemVkIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSBzb3VyY2Ugc2VyaWFsaXplZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBzY2VuZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIF9yb290VXJsIHJvb3QgdXJsIGZvciB0ZXh0dXJlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFyc2Uoc291cmNlOiBhbnksIHNjZW5lOiBTY2VuZSwgX3Jvb3RVcmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zID0gPEdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zPnNvdXJjZS5ncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fY29sb3JzVGV4dHVyZT8uZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY29sb3JEaXN0cmlidXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzRGlzdHJpYnV0aW9uVHlwZSA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9yRGlzdHJpYnV0aW9uVHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9yc1NhbXBsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzU2FtcGxpbmcgPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy5jb2xvcnNTYW1wbGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9yTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yTW9kZSA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9yTW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnVzZUNvbG9ycykge1xyXG4gICAgICAgICAgICB0aGlzLnVzZUNvbG9ycyA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnVzZUNvbG9ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnZpc2liaWxpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMudmlzaWJpbGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnVzZURhc2gpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VEYXNoID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMudXNlRGFzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmRhc2hDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hDb3VudCA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmRhc2hDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmRhc2hSYXRpbykge1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hSYXRpbyA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmRhc2hSYXRpbztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmRhc2hPZmZzZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXNoT2Zmc2V0ID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuZGFzaE9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBncmVhc2VkTGluZU1hdGVyaWFsT3B0aW9ucy53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnNpemVBdHRlbnVhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNpemVBdHRlbnVhdGlvbiA9IGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnNpemVBdHRlbnVhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLnJlc29sdXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHV0aW9uID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMucmVzb2x1dGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9ycykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1RleHR1cmUgPSBHcmVhc2VkTGluZVRvb2xzLkNyZWF0ZUNvbG9yc1RleHR1cmUoYCR7dGhpcy5uYW1lfS1jb2xvcnMtdGV4dHVyZWAsIGdyZWFzZWRMaW5lTWF0ZXJpYWxPcHRpb25zLmNvbG9ycywgdGhpcy5jb2xvcnNTYW1wbGluZywgdGhpcy5nZXRTY2VuZSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1RleHR1cmUgPSBHcmVhc2VkTGluZVRvb2xzLlByZXBhcmVFbXB0eUNvbG9yc1RleHR1cmUoc2NlbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FtZXJhRmFjaW5nID0gZ3JlYXNlZExpbmVNYXRlcmlhbE9wdGlvbnMuY2FtZXJhRmFjaW5nID8/IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXREZWZpbmUoXCJHUkVBU0VEX0xJTkVfQ0FNRVJBX0ZBQ0lOR1wiLCB0aGlzLl9jYW1lcmFGYWNpbmcpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vLi4vc2NlbmVcIjtcbmltcG9ydCB0eXBlIHsgSVByb2NlZHVyYWxUZXh0dXJlQ3JlYXRpb25PcHRpb25zIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL3Byb2NlZHVyYWxUZXh0dXJlXCI7XG5pbXBvcnQgeyBQcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCIuL1Byb2NlZHVyYWxzL3Byb2NlZHVyYWxUZXh0dXJlXCI7XG5pbXBvcnQgdHlwZSB7IEJhc2VUZXh0dXJlIH0gZnJvbSBcIi4vYmFzZVRleHR1cmVcIjtcbmltcG9ydCB0eXBlIHsgVGV4dHVyZVNpemUgfSBmcm9tIFwiLi90ZXh0dXJlQ3JlYXRpb25PcHRpb25zXCI7XG5pbXBvcnQgeyBTaGFkZXJMYW5ndWFnZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zaGFkZXJMYW5ndWFnZVwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL0VuZ2luZXMvY29uc3RhbnRzXCI7XG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiLi90ZXh0dXJlXCI7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgYSB0ZXh0dXJlIGlucHV0IHNvdXJjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUZXh0dXJlQ2hhbm5lbElucHV0IHtcbiAgICAvKiogVGhlIHRleHR1cmUgdG8gdXNlIGFzIGlucHV0ICovXG4gICAgdGV4dHVyZTogQmFzZVRleHR1cmU7XG4gICAgLyoqIFNvdXJjZSBjaGFubmVsIHRvIHJlYWQgZnJvbSAoMD1SLCAxPUcsIDI9QiwgMz1BKSAqL1xuICAgIHNvdXJjZUNoYW5uZWw6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBhIGNvbnN0YW50IHZhbHVlIGlucHV0IHNvdXJjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb25zdGFudENoYW5uZWxJbnB1dCB7XG4gICAgLyoqIENvbnN0YW50IHZhbHVlIGJldHdlZW4gMC4wIGFuZCAxLjAgKi9cbiAgICB2YWx1ZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIFVuaW9uIHR5cGUgZm9yIGNoYW5uZWwgaW5wdXQgc291cmNlc1xuICovXG5leHBvcnQgdHlwZSBDaGFubmVsSW5wdXQgPSBJVGV4dHVyZUNoYW5uZWxJbnB1dCB8IElDb25zdGFudENoYW5uZWxJbnB1dDtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciB0ZXh0dXJlIG1lcmdpbmcgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRleHR1cmVNZXJnZUNvbmZpZ3VyYXRpb24ge1xuICAgIC8qKiBDb25maWd1cmF0aW9uIGZvciByZWQgb3V0cHV0IGNoYW5uZWwgKi9cbiAgICByZWQ6IENoYW5uZWxJbnB1dDtcbiAgICAvKiogQ29uZmlndXJhdGlvbiBmb3IgZ3JlZW4gb3V0cHV0IGNoYW5uZWwgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byAwKSAqL1xuICAgIGdyZWVuPzogQ2hhbm5lbElucHV0O1xuICAgIC8qKiBDb25maWd1cmF0aW9uIGZvciBibHVlIG91dHB1dCBjaGFubmVsIChvcHRpb25hbCwgZGVmYXVsdHMgdG8gMCkgKi9cbiAgICBibHVlPzogQ2hhbm5lbElucHV0O1xuICAgIC8qKiBDb25maWd1cmF0aW9uIGZvciBhbHBoYSBvdXRwdXQgY2hhbm5lbCAob3B0aW9uYWwsIGRlZmF1bHRzIHRvIDEpICovXG4gICAgYWxwaGE/OiBDaGFubmVsSW5wdXQ7XG4gICAgLyoqIE91dHB1dCB0ZXh0dXJlIHNpemUuIElmIG5vdCBzcGVjaWZpZWQsIHVzZXMgdGhlIGxhcmdlc3QgaW5wdXQgdGV4dHVyZSBzaXplICovXG4gICAgb3V0cHV0U2l6ZT86IFRleHR1cmVTaXplO1xuICAgIC8qKiBXaGV0aGVyIHRvIGdlbmVyYXRlIG1pcG1hcHMgZm9yIHRoZSBvdXRwdXQgdGV4dHVyZSAqL1xuICAgIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW47XG59XG5cbmNvbnN0IF9TaGFkZXJOYW1lID0gXCJ0ZXh0dXJlTWVyZ2VyXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBDaGVjayBpZiBhIGNoYW5uZWwgaW5wdXQgaXMgYSB0ZXh0dXJlIGlucHV0XG4gKiBAcGFyYW0gaW5wdXQgVGhlIGNoYW5uZWwgaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGlucHV0IGlzIGEgdGV4dHVyZSBpbnB1dCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIElzVGV4dHVyZUlucHV0KGlucHV0OiBDaGFubmVsSW5wdXQpOiBpbnB1dCBpcyBJVGV4dHVyZUNoYW5uZWxJbnB1dCB7XG4gICAgcmV0dXJuIFwidGV4dHVyZVwiIGluIGlucHV0O1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQ2hlY2sgaWYgYSBjaGFubmVsIGlucHV0IGlzIGEgY29uc3RhbnQgaW5wdXRcbiAqIEBwYXJhbSBpbnB1dCBUaGUgY2hhbm5lbCBpbnB1dCB0byBjaGVja1xuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgaW5wdXQgaXMgYSBjb25zdGFudCBpbnB1dCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIElzQ29uc3RhbnRJbnB1dChpbnB1dDogQ2hhbm5lbElucHV0KTogaW5wdXQgaXMgSUNvbnN0YW50Q2hhbm5lbElucHV0IHtcbiAgICByZXR1cm4gXCJ2YWx1ZVwiIGluIGlucHV0O1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQ29weSB0ZXh0dXJlIHRyYW5zZm9ybWF0aW9uIHByb3BlcnRpZXMgZnJvbSBvbmUgdGV4dHVyZSB0byBhbm90aGVyXG4gKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgdGV4dHVyZVxuICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiB0ZXh0dXJlXG4gKi9cbmZ1bmN0aW9uIENvcHlUZXh0dXJlVHJhbnNmb3JtKHNvdXJjZTogVGV4dHVyZSwgZGVzdGluYXRpb246IFRleHR1cmUpIHtcbiAgICBkZXN0aW5hdGlvbi51T2Zmc2V0ID0gc291cmNlLnVPZmZzZXQ7XG4gICAgZGVzdGluYXRpb24udk9mZnNldCA9IHNvdXJjZS52T2Zmc2V0O1xuICAgIGRlc3RpbmF0aW9uLnVTY2FsZSA9IHNvdXJjZS51U2NhbGU7XG4gICAgZGVzdGluYXRpb24udlNjYWxlID0gc291cmNlLnZTY2FsZTtcbiAgICBkZXN0aW5hdGlvbi51QW5nID0gc291cmNlLnVBbmc7XG4gICAgZGVzdGluYXRpb24udkFuZyA9IHNvdXJjZS52QW5nO1xuICAgIGRlc3RpbmF0aW9uLndBbmcgPSBzb3VyY2Uud0FuZztcbiAgICBkZXN0aW5hdGlvbi51Um90YXRpb25DZW50ZXIgPSBzb3VyY2UudVJvdGF0aW9uQ2VudGVyO1xuICAgIGRlc3RpbmF0aW9uLnZSb3RhdGlvbkNlbnRlciA9IHNvdXJjZS52Um90YXRpb25DZW50ZXI7XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKiBNZXJnZSBtdWx0aXBsZSB0ZXh0dXJlIGNoYW5uZWxzIGludG8gYSBzaW5nbGUgdGV4dHVyZVxuICogQHBhcmFtIG5hbWUgTmFtZSBmb3IgdGhlIHJlc3VsdGluZyB0ZXh0dXJlXG4gKiBAcGFyYW0gY29uZmlnIE1lcmdlIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSBzY2VuZSBTY2VuZSB0byBjcmVhdGUgdGhlIHRleHR1cmUgaW5cbiAqIEByZXR1cm5zIFRoZSBtZXJnZWQgdGV4dHVyZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTWVyZ2VUZXh0dXJlc0FzeW5jKG5hbWU6IHN0cmluZywgY29uZmlnOiBJVGV4dHVyZU1lcmdlQ29uZmlndXJhdGlvbiwgc2NlbmU6IFNjZW5lKTogUHJvbWlzZTxQcm9jZWR1cmFsVGV4dHVyZT4ge1xuICAgIGNvbnN0IGNoYW5uZWxzID0gW2NvbmZpZy5yZWQsIGNvbmZpZy5ncmVlbiwgY29uZmlnLmJsdWUsIGNvbmZpZy5hbHBoYV07XG4gICAgY29uc3QgdGV4dHVyZUlucHV0czogQmFzZVRleHR1cmVbXSA9IFtdO1xuICAgIGNvbnN0IHRleHR1cmVJbnB1dE1hcDogbnVtYmVyW10gPSBbXTsgLy8gTWFwcyBjaGFubmVsIGluZGV4IHRvIHRleHR1cmUgaW5wdXQgaW5kZXggKC0xIGZvciBjb25zdGFudHMpXG5cbiAgICAvLyBDb2xsZWN0IHVuaXF1ZSB0ZXh0dXJlcyBhbmQgdmFsaWRhdGUgaW5wdXRzXG4gICAgZm9yIChsZXQgY2hhbm5lbEluZGV4ID0gMDsgY2hhbm5lbEluZGV4IDwgNDsgY2hhbm5lbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IGNoYW5uZWxzW2NoYW5uZWxJbmRleF07XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICBpZiAoSXNUZXh0dXJlSW5wdXQoY2hhbm5lbCkpIHtcbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBzb3VyY2UgY2hhbm5lbFxuICAgICAgICAgICAgICAgIGlmIChjaGFubmVsLnNvdXJjZUNoYW5uZWwgPCAwIHx8IGNoYW5uZWwuc291cmNlQ2hhbm5lbCA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU291cmNlIGNoYW5uZWwgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDMgKFIsIEcsIEIsIEEpXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZpbmQgb3IgYWRkIHRleHR1cmUgdG8gaW5wdXRzXG4gICAgICAgICAgICAgICAgbGV0IHRleHR1cmVJbmRleCA9IHRleHR1cmVJbnB1dHMuaW5kZXhPZihjaGFubmVsLnRleHR1cmUpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVJbmRleCA9IHRleHR1cmVJbnB1dHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlSW5wdXRzLnB1c2goY2hhbm5lbC50ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dHVyZUlucHV0TWFwW2NoYW5uZWxJbmRleF0gPSB0ZXh0dXJlSW5kZXg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKElzQ29uc3RhbnRJbnB1dChjaGFubmVsKSkge1xuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIGNvbnN0YW50IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5uZWwudmFsdWUgPCAwIHx8IGNoYW5uZWwudmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnN0YW50IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAwLjAgYW5kIDEuMFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dHVyZUlucHV0TWFwW2NoYW5uZWxJbmRleF0gPSAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjaGFubmVsIGlucHV0IGNvbmZpZ3VyYXRpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0dXJlSW5wdXRNYXBbY2hhbm5lbEluZGV4XSA9IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIG91dHB1dCBzaXplXG4gICAgbGV0IG91dHB1dFNpemUgPSBjb25maWcub3V0cHV0U2l6ZTtcbiAgICBpZiAoIW91dHB1dFNpemUgJiYgdGV4dHVyZUlucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgbGFyZ2VzdCB0ZXh0dXJlIHNpemVcbiAgICAgICAgbGV0IG1heFNpemUgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHRleHR1cmUgb2YgdGV4dHVyZUlucHV0cykge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRleHR1cmUuZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNpemUgPSBNYXRoLm1heChzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgICAgICAgICAgbWF4U2l6ZSA9IGN1cnJlbnRTaXplO1xuICAgICAgICAgICAgICAgIG91dHB1dFNpemUgPSBzaXplLndpZHRoID09PSBzaXplLmhlaWdodCA/IG1heFNpemUgOiBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG91dHB1dFNpemUgPSBvdXRwdXRTaXplIHx8IDUxMjsgLy8gRmFsbGJhY2sgc2l6ZVxuXG4gICAgLy8gR2VuZXJhdGUgc2hhZGVyIGRlZmluZXNcbiAgICBjb25zdCBkZWZpbmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHVzZWRUZXh0dXJlcyA9IG5ldyBTZXQ8bnVtYmVyPigpO1xuXG4gICAgZm9yIChsZXQgY2hhbm5lbEluZGV4ID0gMDsgY2hhbm5lbEluZGV4IDwgNDsgY2hhbm5lbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IGNoYW5uZWxzW2NoYW5uZWxJbmRleF07XG4gICAgICAgIGNvbnN0IGNoYW5uZWxOYW1lID0gW1wiUkVEXCIsIFwiR1JFRU5cIiwgXCJCTFVFXCIsIFwiQUxQSEFcIl1bY2hhbm5lbEluZGV4XTtcblxuICAgICAgICBpZiAoY2hhbm5lbCAmJiBJc1RleHR1cmVJbnB1dChjaGFubmVsKSkge1xuICAgICAgICAgICAgZGVmaW5lcy5wdXNoKGAke2NoYW5uZWxOYW1lfV9GUk9NX1RFWFRVUkVgKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmRleCA9IHRleHR1cmVJbnB1dE1hcFtjaGFubmVsSW5kZXhdO1xuICAgICAgICAgICAgdXNlZFRleHR1cmVzLmFkZCh0ZXh0dXJlSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRleHR1cmUgZGVmaW5lcyBmb3IgdXNlZCB0ZXh0dXJlc1xuICAgIHVzZWRUZXh0dXJlcy5mb3JFYWNoKCh0ZXh0dXJlSW5kZXgpID0+IHtcbiAgICAgICAgZGVmaW5lcy5wdXNoKGBVU0VfVEVYVFVSRSR7dGV4dHVyZUluZGV4fWApO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBwcm9jZWR1cmFsIHRleHR1cmVcbiAgICBjb25zdCBvdXRwdXRUZXh0dXJlT3B0aW9uczogSVByb2NlZHVyYWxUZXh0dXJlQ3JlYXRpb25PcHRpb25zID0ge1xuICAgICAgICB0eXBlOiBDb25zdGFudHMuVEVYVFVSRVRZUEVfSEFMRl9GTE9BVCxcbiAgICAgICAgZm9ybWF0OiBDb25zdGFudHMuVEVYVFVSRUZPUk1BVF9SR0JBLFxuICAgICAgICBzYW1wbGluZ01vZGU6IENvbnN0YW50cy5URVhUVVJFX05FQVJFU1RfU0FNUExJTkdNT0RFLFxuICAgICAgICBnZW5lcmF0ZURlcHRoQnVmZmVyOiBmYWxzZSxcbiAgICAgICAgZ2VuZXJhdGVNaXBNYXBzOiBmYWxzZSxcbiAgICAgICAgc2hhZGVyTGFuZ3VhZ2U6IHNjZW5lLmdldEVuZ2luZSgpLmlzV2ViR1BVID8gU2hhZGVyTGFuZ3VhZ2UuV0dTTCA6IFNoYWRlckxhbmd1YWdlLkdMU0wsXG4gICAgICAgIGV4dHJhSW5pdGlhbGl6YXRpb25zQXN5bmM6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY2VuZS5nZXRFbmdpbmUoKS5pc1dlYkdQVSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtpbXBvcnQoXCIuLi8uLi9TaGFkZXJzV0dTTC90ZXh0dXJlTWVyZ2VyLmZyYWdtZW50XCIpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtpbXBvcnQoXCIuLi8uLi9TaGFkZXJzL3RleHR1cmVNZXJnZXIuZnJhZ21lbnRcIildKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHByb2NlZHVyYWxUZXh0dXJlID0gbmV3IFByb2NlZHVyYWxUZXh0dXJlKG5hbWUsIG91dHB1dFNpemUsIF9TaGFkZXJOYW1lLCBzY2VuZSwgb3V0cHV0VGV4dHVyZU9wdGlvbnMpO1xuICAgIHByb2NlZHVyYWxUZXh0dXJlLnJlZnJlc2hSYXRlID0gLTE7IC8vIERvIG5vdCBhdXRvLXJlZnJlc2hcblxuICAgIC8vIFNldCB0aGUgZGVmaW5lc1xuICAgIHByb2NlZHVyYWxUZXh0dXJlLmRlZmluZXMgPSBkZWZpbmVzLmxlbmd0aCA+IDAgPyBcIiNkZWZpbmUgXCIgKyBkZWZpbmVzLmpvaW4oXCJcXG4jZGVmaW5lIFwiKSArIFwiXFxuXCIgOiBcIlwiO1xuXG4gICAgLy8gU2V0IHVwIHRleHR1cmUgaW5wdXRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0dXJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIENvcHlUZXh0dXJlVHJhbnNmb3JtKHRleHR1cmVJbnB1dHNbaV0gYXMgVGV4dHVyZSwgcHJvY2VkdXJhbFRleHR1cmUpO1xuICAgICAgICBwcm9jZWR1cmFsVGV4dHVyZS5zZXRUZXh0dXJlKGBpbnB1dFRleHR1cmUke2l9YCwgdGV4dHVyZUlucHV0c1tpXSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGNoYW5uZWwgY29uZmlndXJhdGlvblxuICAgIGZvciAobGV0IGNoYW5uZWxJbmRleCA9IDA7IGNoYW5uZWxJbmRleCA8IDQ7IGNoYW5uZWxJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBjaGFubmVsc1tjaGFubmVsSW5kZXhdO1xuICAgICAgICBjb25zdCBjaGFubmVsTmFtZSA9IFtcInJlZFwiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcImFscGhhXCJdW2NoYW5uZWxJbmRleF07XG5cbiAgICAgICAgaWYgKGNoYW5uZWwgJiYgSXNUZXh0dXJlSW5wdXQoY2hhbm5lbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmRleCA9IHRleHR1cmVJbnB1dE1hcFtjaGFubmVsSW5kZXhdO1xuICAgICAgICAgICAgcHJvY2VkdXJhbFRleHR1cmUuc2V0SW50KGAke2NoYW5uZWxOYW1lfVRleHR1cmVJbmRleGAsIHRleHR1cmVJbmRleCk7XG4gICAgICAgICAgICBwcm9jZWR1cmFsVGV4dHVyZS5zZXRJbnQoYCR7Y2hhbm5lbE5hbWV9U291cmNlQ2hhbm5lbGAsIGNoYW5uZWwuc291cmNlQ2hhbm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVc2UgY29uc3RhbnQgdmFsdWUgKGVpdGhlciBwcm92aWRlZCBvciBkZWZhdWx0KVxuICAgICAgICAgICAgbGV0IGNvbnN0YW50VmFsdWU6IG51bWJlcjtcbiAgICAgICAgICAgIGlmIChjaGFubmVsICYmIElzQ29uc3RhbnRJbnB1dChjaGFubmVsKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0YW50VmFsdWUgPSBjaGFubmVsLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgZGVmYXVsdCB2YWx1ZXM6IDAgZm9yIFJHQiwgMSBmb3IgYWxwaGFcbiAgICAgICAgICAgICAgICBjb25zdGFudFZhbHVlID0gY2hhbm5lbEluZGV4ID09PSAzID8gMS4wIDogMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvY2VkdXJhbFRleHR1cmUuc2V0RmxvYXQoYCR7Y2hhbm5lbE5hbWV9Q29uc3RhbnRWYWx1ZWAsIGNvbnN0YW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPFByb2NlZHVyYWxUZXh0dXJlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIENvbXBpbGUgYW5kIHJlbmRlclxuICAgICAgICBwcm9jZWR1cmFsVGV4dHVyZS5leGVjdXRlV2hlblJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHJvY2VkdXJhbFRleHR1cmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcm9jZWR1cmFsVGV4dHVyZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoU3RyaW5nKGVycm9yKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIENyZWF0ZSBhIHRleHR1cmUgaW5wdXQgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHRleHR1cmUgVGhlIHRleHR1cmUgdG8gcmVhZCBmcm9tXG4gKiBAcGFyYW0gc291cmNlQ2hhbm5lbCBUaGUgY2hhbm5lbCB0byByZWFkICgwPVIsIDE9RywgMj1CLCAzPUEpXG4gKiBAcmV0dXJucyBUZXh0dXJlIGNoYW5uZWwgaW5wdXQgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVGV4dHVyZUlucHV0KHRleHR1cmU6IEJhc2VUZXh0dXJlLCBzb3VyY2VDaGFubmVsOiBudW1iZXIpOiBJVGV4dHVyZUNoYW5uZWxJbnB1dCB7XG4gICAgcmV0dXJuIHsgdGV4dHVyZSwgc291cmNlQ2hhbm5lbCB9O1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQ3JlYXRlIGEgY29uc3RhbnQgdmFsdWUgaW5wdXQgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHZhbHVlIFRoZSBjb25zdGFudCB2YWx1ZSAoMC4wLTEuMClcbiAqIEByZXR1cm5zIENvbnN0YW50IGNoYW5uZWwgaW5wdXQgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29uc3RhbnRJbnB1dCh2YWx1ZTogbnVtYmVyKTogSUNvbnN0YW50Q2hhbm5lbElucHV0IHtcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQ3JlYXRlIGEgc2ltcGxlIFJHQkEgY2hhbm5lbCBwYWNraW5nIGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSByZWQgSW5wdXQgZm9yIHJlZCBjaGFubmVsXG4gKiBAcGFyYW0gZ3JlZW4gSW5wdXQgZm9yIGdyZWVuIGNoYW5uZWwgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byAwKVxuICogQHBhcmFtIGJsdWUgSW5wdXQgZm9yIGJsdWUgY2hhbm5lbCAob3B0aW9uYWwsIGRlZmF1bHRzIHRvIDApXG4gKiBAcGFyYW0gYWxwaGEgSW5wdXQgZm9yIGFscGhhIGNoYW5uZWwgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byAxKVxuICogQHJldHVybnMgVGV4dHVyZSBtZXJnZSBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVSR0JBQ29uZmlndXJhdGlvbihyZWQ6IENoYW5uZWxJbnB1dCwgZ3JlZW4/OiBDaGFubmVsSW5wdXQsIGJsdWU/OiBDaGFubmVsSW5wdXQsIGFscGhhPzogQ2hhbm5lbElucHV0KTogSVRleHR1cmVNZXJnZUNvbmZpZ3VyYXRpb24ge1xuICAgIHJldHVybiB7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH07XG59XG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uLy4uL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdyZWFzZWRMaW5lTWF0ZXJpYWwgfSBmcm9tIFwiLi4vLi4vTWF0ZXJpYWxzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lTWF0ZXJpYWxJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEdyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWwgfSBmcm9tIFwiLi4vLi4vTWF0ZXJpYWxzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lUGx1Z2luTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCIuLi9tZXNoXCI7XHJcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCIuLi8uLi9CdWZmZXJzL2J1ZmZlclwiO1xyXG5pbXBvcnQgdHlwZSB7IFZlY3RvcjMgfSBmcm9tIFwiLi4vLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVmVydGV4RGF0YSB9IGZyb20gXCIuLi9tZXNoLnZlcnRleERhdGFcIjtcclxuaW1wb3J0IHsgRGVlcENvcGllciB9IGZyb20gXCIuLi8uLi9NaXNjL2RlZXBDb3BpZXJcIjtcclxuaW1wb3J0IHsgR3JlYXNlZExpbmVTaW1wbGVNYXRlcmlhbCwgR3JlYXNlZExpbmVVc2VPZmZzZXRzU2ltcGxlTWF0ZXJpYWxEZWZpbmUgfSBmcm9tIFwiLi4vLi4vTWF0ZXJpYWxzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lU2ltcGxlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdEVuZ2luZSB9IGZyb20gXCIuLi8uLi9FbmdpbmVzL2Fic3RyYWN0RW5naW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvYXRBcnJheSwgSW5kaWNlc0FycmF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IEdyZWFzZWRMaW5lVG9vbHMgfSBmcm9tIFwiLi4vLi4vTWlzYy9ncmVhc2VkTGluZVRvb2xzXCI7XHJcblxyXG4vKipcclxuICogSW4gUE9JTlRTX01PREVfUE9JTlRTIGV2ZXJ5IGFycmF5IG9mIHBvaW50cyB3aWxsIGJlY29tZSB0aGUgY2VudGVyIChiYWNrYm9uZSkgb2YgdGhlIHJpYmJvbi4gVGhlIHJpYmJvbiB3aWxsIGJlIGV4cGFuZGVkIGJ5IGB3aWR0aCAvIDJgIHRvIGArZGlyZWN0aW9uYCBhbmQgYC1kaXJlY3Rpb25gIGFzIHdlbGwuXHJcbiAqIEluIFBPSU5UU19NT0RFX1BBVEhTIGV2ZXJ5IGFycmF5IG9mIHBvaW50cyBzcGVjaWZpZXMgYW4gZWRnZS4gVGhlc2Ugd2lsbCBiZSB1c2VkIHRvIGJ1aWxkIG9uZSByaWJib24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBHcmVhc2VkTGluZVJpYmJvblBvaW50c01vZGUge1xyXG4gICAgUE9JTlRTX01PREVfUE9JTlRTID0gMCxcclxuICAgIFBPSU5UU19NT0RFX1BBVEhTID0gMSxcclxufVxyXG5cclxuLyoqXHJcbiAqIEZBQ0VTX01PREVfU0lOR0xFX1NJREVEIHNpbmdsZSBzaWRlZCB3aXRoIGJhY2sgZmFjZSBjdWxsaW5nLiBEZWZhdWx0IHZhbHVlLlxyXG4gKiBGQUNFU19NT0RFX1NJTkdMRV9TSURFRF9OT19CQUNLRkFDRV9DVUxMSU5HIHNpbmdsZSBzaWRlZCB3aXRob3V0IGJhY2sgZmFjZSBjdWxsaW5nLiBTZXRzIGJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlIG9uIHRoZSBtYXRlcmlhbCBzbyBpdCBhZmZlY3RzIGFsbCBsaW5lIHJpYmJvbnMgYWRkZWQgdG8gdGhlIGxpbmUgcmliYm9uIGluc3RhbmNlLlxyXG4gKiBGQUNFU19NT0RFX0RPVUJMRV9TSURFRCBleHRyYSBiYWNrIGZhY2VzIGFyZSBjcmVhdGVkLiBUaGlzIGRvdWJsZXMgdGhlIGFtb3VudCBvZiBmYWNlcyBvZiB0aGUgbWVzaC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdyZWFzZWRMaW5lUmliYm9uRmFjZXNNb2RlIHtcclxuICAgIEZBQ0VTX01PREVfU0lOR0xFX1NJREVEID0gMCxcclxuICAgIEZBQ0VTX01PREVfU0lOR0xFX1NJREVEX05PX0JBQ0tGQUNFX0NVTExJTkcgPSAxLFxyXG4gICAgRkFDRVNfTU9ERV9ET1VCTEVfU0lERUQgPSAyLFxyXG59XHJcblxyXG4vKipcclxuICogT25seSB3aXRoIFBPSU5UU19NT0RFX1BBVEhTLlxyXG4gKiBBVVRPX0RJUkVDVElPTlNfRlJPTV9GSVJTVF9TRUdNRU5UIHNldHMgdGhlIGRpcmVjdGlvbiAoc2xvcGUpIG9mIHRoZSByaWJib24gZnJvbSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBmaXJzdCBsaW5lIHNlZ21lbnQuIFJlY29tbWVuZGVkLlxyXG4gKiBBVVRPX0RJUkVDVElPTlNfRlJPTV9BTExfU0VHTUVOVFMgaW4gdGhpcyBtb2RlIHRoZSBkaXJlY3Rpb24gKHNsb3BlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgZm9yIGVhY2ggbGluZSBzZWdtZW50IGFjY29yZGluZyB0byB0aGUgZGlyZWN0aW9uIHZlY3RvciBiZXR3ZWVuIGVhY2ggcG9pbnQgb2YgdGhlIGxpbmUgc2VnbWVudHMuIFNsb3cgbWV0aG9kLlxyXG4gKiBBVVRPX0RJUkVDVElPTlNfRU5IQU5DRUQgaW4gdGhpcyBtb2RlIHRoZSBkaXJlY3Rpb24gKHNsb3BlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgZm9yIGVhY2ggbGluZSBzZWdtZW50IGFjY29yZGluZyB0byB0aGUgZGlyZWN0aW9uIHZlY3RvciBiZXR3ZWVuIGVhY2ggcG9pbnQgb2YgdGhlIGxpbmUgc2VnbWVudHMgdXNpbmcgYSBtb3JlIHNvcGhpc2l0Y2FlZCBhbGdvcml0aG0uIFNsb3dlc3QgbWV0aG9kLlxyXG4gKiBBVVRPX0RJUkVDVElPTlNfRkFDRV9UTyBpbiB0aGlzIG1vZGUgdGhlIGRpcmVjdGlvbiAoc2xvcGUpIHdpbGwgYmUgY2FsY3VsYXRlZCBmb3IgZWFjaCBsaW5lIHNlZ21lbnQgYWNjb3JkaW5nIHRvIHRoZSBkaXJlY3Rpb24gdmVjdG9yIGJldHdlZW4gZWFjaCBwb2ludCBvZiB0aGUgbGluZSBzZWdtZW50cyBhbmQgYSBkaXJlY3Rpb24gKGZhY2UtdG8pIHZlY3RvciBzcGVjaWZpZWQgaW4gZGlyZWN0aW9uLiBUaGUgcmVzdWx0aW5nIGxpbmUgd2lsbCBmYWNlIHRvIHRoZSBkaXJlY3Rpb24gb2YgdGhpcyBmYWNlLXRvIHZlY3Rvci5cclxuICogQVVUT19ESVJFQ1RJT05TX05PTkUgeW91IGhhdmUgdG8gc2V0IHRoZSBkaXJlY3Rpb24gKHNsb3BlKSBtYW51YWxseS4gUmVjb21tZW5kZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBHcmVhc2VkTGluZVJpYmJvbkF1dG9EaXJlY3Rpb25Nb2RlIHtcclxuICAgIEFVVE9fRElSRUNUSU9OU19GUk9NX0ZJUlNUX1NFR01FTlQgPSAwLFxyXG4gICAgQVVUT19ESVJFQ1RJT05TX0ZST01fQUxMX1NFR01FTlRTID0gMSxcclxuICAgIEFVVE9fRElSRUNUSU9OU19FTkhBTkNFRCA9IDIsXHJcbiAgICBBVVRPX0RJUkVDVElPTlNfRkFDRV9UTyA9IDMsXHJcbiAgICBBVVRPX0RJUkVDVElPTlNfTk9ORSA9IDk5LFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHcmVhc2VkTGluZVJpYmJvbk9wdGlvbnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaG93IHRoZSBwb2ludHMgYXJlIHByb2Nlc3NlZC5cclxuICAgICAqIEluIEdyZWFzZWRMaW5lUmliYm9uUG9pbnRzTW9kZS5QT0lOVFNfTU9ERV9QT0lOVFMgZXZlcnkgYXJyYXkgb2YgcG9pbnRzIHdpbGwgYmVjb21lIHRoZSBjZW50ZXIgb2YgdGhlIHJpYmJvbi4gVGhlIHJpYmJvbiB3aWxsIGJlIGV4cGFuZGVkIGJ5IHdpZHRoLzIgdG8gK2RpcmVjdGlvbiBhbmQgLWRpcmVjdGlvbiBhcyB3ZWxsLlxyXG4gICAgICogSW4gR3JlYXNlZExpbmVSaWJib25Qb2ludHNNb2RlLlBPSU5UU19NT0RFX1BBVEhTIGV2ZXJ5IGFycmF5IG9mIHBvaW50cyBpcyBvbmUgcGF0aC4gVGhlc2Ugd2lsbCBiZSB1c2VkIHRvIGJ1dWlkIG9uZSByaWJib24uXHJcbiAgICAgKi9cclxuICAgIHBvaW50c01vZGU/OiBHcmVhc2VkTGluZVJpYmJvblBvaW50c01vZGU7XHJcbiAgICAvKipcclxuICAgICAqIE5vcm1hbGl6ZWQgZGlyZWN0aW9ucyBvZiB0aGUgc2xvcGVzIG9mIHRoZSBub24gY2FtZXJhIGZhY2luZyBsaW5lcy5cclxuICAgICAqL1xyXG4gICAgZGlyZWN0aW9ucz86IFZlY3RvcjNbXSB8IFZlY3RvcjM7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGNhbGN1bGF0aW9uIG1vZGUgb2YgdGhlIGRpcmVjdGlvbnMgd2hpY2ggdGhlIGxpbmUgd2lsbCBiZSB0aGlja2VuZWQgdG8uXHJcbiAgICAgKi9cclxuICAgIGRpcmVjdGlvbnNBdXRvTW9kZT86IEdyZWFzZWRMaW5lUmliYm9uQXV0b0RpcmVjdGlvbk1vZGU7XHJcbiAgICAvKipcclxuICAgICAqIFdpZHRoIG9mIHRoZSByaWJib24uXHJcbiAgICAgKi9cclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cm9scyBob3cgdGhlIGZhY2VzIGFyZSBjcmVhdGVkLlxyXG4gICAgICogR3JlYXNlZExpbmVSaWJib25GYWNlc01vZGUuRkFDRVNfTU9ERV9TSU5HTEVfU0lERUQgPSBzaW5nbGUgc2lkZWQgd2l0aCBiYWNrIGZhY2UgY3VsbGluZy4gRGVmYXVsdCB2YWx1ZS5cclxuICAgICAqIEdyZWFzZWRMaW5lUmliYm9uRmFjZXNNb2RlLkZBQ0VTX01PREVfU0lOR0xFX1NJREVEX05PX0JBQ0tGQUNFX0NVTExJTkcgPSBzaW5nbGUgc2lkZWQgd2l0aG91dCBiYWNrIGZhY2UgY3VsbGluZ1xyXG4gICAgICogR3JlYXNlZExpbmVSaWJib25GYWNlc01vZGUuRkFDRVNfTU9ERV9ET1VCTEVfU0lERUQgPSBleHRyYSBiYWNrIGZhY2VzIGFyZSBjcmVhdGVkLiBUaGlzIGRvdWJsZXMgdGhlIGFtb3VudCBvZiBmYWNlcyBvZiB0aGUgbWVzaC5cclxuICAgICAqL1xyXG4gICAgZmFjZXNNb2RlPzogR3JlYXNlZExpbmVSaWJib25GYWNlc01vZGU7XHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIHRoZSBwYXRoIHdpbGwgYmUgY2xvc2VkLlxyXG4gICAgICovXHJcbiAgICBjbG9zZVBhdGg/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBub3JtYWxzIHdpbGwgYmUgY29tcHV0ZWQgd2hlbiBjcmVhdGluZyB0aGUgdmVydGV4IGJ1ZmZlcnMuXHJcbiAgICAgKiBUaGlzIHJlc3VsdHMgdG8gc21vb3RoIHNoYWRpbmcgb2YgdGhlIG1lc2guXHJcbiAgICAgKi9cclxuICAgIHNtb290aFNoYWRpbmc/OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgR3JlYXNlZExpbmVQb2ludHMgPSBWZWN0b3IzW10gfCBWZWN0b3IzW11bXSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0MzJBcnJheVtdIHwgbnVtYmVyW11bXSB8IG51bWJlcltdO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGNvbnZlcnRpbmcgdGhlIHBvaW50cyB0byB0aGUgaW50ZXJuYWwgbnVtYmVyW11bXSBmb3JtYXQgdXNlZCBieSBHcmVhc2VkTGluZVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyZWFzZWRMaW5lUG9pbnRzT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIElmIGRlZmluZWQgYW5kIGEgRmxvYXQzMkFycmF5IGlzIHVzZWQgZm9yIHRoZSBwb2ludHMgcGFyYW1ldGVyLFxyXG4gICAgICogaXQgd2lsbCBjcmVhdGUgbXVsdGlwbGUgZGlzY29ubmVjdGVkIGxpbmVzLlxyXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgZGVmaW5lcyBob3cgbWFueSBlbnRyaWVzIGZyb20gdGhlIGFycmF5IHRvIHVzZSBmb3Igb25lIGxpbmUuXHJcbiAgICAgKiBPbmUgZW50cnkgPSAzIGZsb2F0IHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgZmxvYXRBcnJheVN0cmlkZT86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIGNyZWF0aW5nIGEgR3JlYXNlZExpbmVNZXNoXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JlYXNlZExpbmVNZXNoT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIFBvaW50cyBvZiB0aGUgbGluZS5cclxuICAgICAqL1xyXG4gICAgcG9pbnRzOiBHcmVhc2VkTGluZVBvaW50cztcclxuICAgIC8qKlxyXG4gICAgICogRWFjaCBsaW5lIHNlZ21lbnQgKGZyb20gcG9pbnQgdG8gcG9pbnQpIGNhbiBoYXZlIGl0J3Mgd2lkdGggbXVsdGlwbGllci4gRmluYWwgd2lkdGggPSB3aWR0aHNbc2VnbWVudElkeF0gKiB3aWR0aC5cclxuICAgICAqIERlZmF1bHRzIHRvIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICB3aWR0aHM/OiBudW1iZXJbXTtcclxuICAgIC8qKlxyXG4gICAgICogSWYgaW5zdGFuY2UgaXMgc3BlY2lmaWVkLCBsaW5lcyBhcmUgYWRkZWQgdG8gdGhlIHNwZWNpZmllZCBpbnN0YW5jZS5cclxuICAgICAqIERlZmF1bHRzIHRvIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgaW5zdGFuY2U/OiBHcmVhc2VkTGluZUJhc2VNZXNoO1xyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgY2FuIG1hbnVhbGx5IHNldCB0aGUgY29sb3IgcG9pbnRlcnMgc28geW91IGNhbiBjb250cm9sIHdoaWNoIHNlZ21lbnQvcGFydFxyXG4gICAgICogd2lsbCB1c2Ugd2hpY2ggY29sb3IgZnJvbSB0aGUgY29sb3JzIG1hdGVyaWFsIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBjb2xvclBvaW50ZXJzPzogbnVtYmVyW107XHJcbiAgICAvKipcclxuICAgICAqIFVWcyBmb3IgdGhlIG1lc2hcclxuICAgICAqL1xyXG4gICAgdXZzPzogRmxvYXRBcnJheTtcclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgb2Zmc2V0cyBhbmQgd2lkdGhzIGFyZSB1cGRhdGFibGUuXHJcbiAgICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRhYmxlPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4gQHNlZSBpbnN0YW5jZSBpcyBzcGVjaWZpZWQuXHJcbiAgICAgKiBJZiB0cnVlLCB0aGUgbGluZSB3aWxsIGJlIHJlbmRlcmVkIG9ubHkgYWZ0ZXIgY2FsbGluZyBpbnN0YW5jZS51cGRhdGVMYXp5KCkuIElmIGZhbHNlLCBsaW5lIHdpbGwgYmUgcmVyZW5kZXJlZCBhZnRlciBldmVyeSBjYWxsIHRvIEBzZWUgQ3JlYXRlR3JlYXNlZExpbmVcclxuICAgICAqIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBsYXp5PzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9wdGlvbnMgZm9yIHRoZSByaWJib24gd2hpY2ggd2lsbCBiZSB1c2VkIGFzIGEgbGluZS5cclxuICAgICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB0aGUgbGluZSBzd2l0Y2hlcyBhdXRvbWF0aWNhbGx5IHRvIGEgbm9uIGNhbWVyYSBmYWNpbmcgbW9kZS5cclxuICAgICAqL1xyXG4gICAgcmliYm9uT3B0aW9ucz86IEdyZWFzZWRMaW5lUmliYm9uT3B0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9ucyBmb3IgY29udmVydGluZyB0aGUgcG9pbnRzLlxyXG4gICAgICovXHJcbiAgICBwb2ludHNPcHRpb25zPzogR3JlYXNlZExpbmVQb2ludHNPcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogR3JlYXNlZExpbmVCYXNlTWVzaFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyZWFzZWRMaW5lQmFzZU1lc2ggZXh0ZW5kcyBNZXNoIHtcclxuICAgIHByb3RlY3RlZCBfdmVydGV4UG9zaXRpb25zOiBGbG9hdEFycmF5O1xyXG4gICAgcHJvdGVjdGVkIF9pbmRpY2VzOiBJbmRpY2VzQXJyYXk7XHJcbiAgICBwcm90ZWN0ZWQgX3V2czogRmxvYXRBcnJheTtcclxuICAgIHByb3RlY3RlZCBfcG9pbnRzOiBudW1iZXJbXVtdO1xyXG4gICAgcHJvdGVjdGVkIF9vZmZzZXRzOiBudW1iZXJbXTtcclxuICAgIHByb3RlY3RlZCBfY29sb3JQb2ludGVyczogbnVtYmVyW107XHJcbiAgICBwcm90ZWN0ZWQgX3dpZHRoczogbnVtYmVyW107XHJcblxyXG4gICAgcHJvdGVjdGVkIF9vZmZzZXRzQnVmZmVyPzogQnVmZmVyO1xyXG4gICAgcHJvdGVjdGVkIF93aWR0aHNCdWZmZXI/OiBCdWZmZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbG9yUG9pbnRlcnNCdWZmZXI/OiBCdWZmZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9sYXp5ID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX3VwZGF0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBfZW5naW5lOiBBYnN0cmFjdEVuZ2luZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBwcm90ZWN0ZWQgX29wdGlvbnM6IEdyZWFzZWRMaW5lTWVzaE9wdGlvbnNcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHNjZW5lLCBudWxsLCBudWxsLCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbmdpbmUgPSBzY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGF6eSA9IF9vcHRpb25zLmxhenkgPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRhYmxlID0gX29wdGlvbnMudXBkYXRhYmxlID8/IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl92ZXJ0ZXhQb3NpdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9pbmRpY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fdXZzID0gW107XHJcbiAgICAgICAgdGhpcy5fcG9pbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fY29sb3JQb2ludGVycyA9IF9vcHRpb25zLmNvbG9yUG9pbnRlcnMgPz8gW107XHJcbiAgICAgICAgdGhpcy5fd2lkdGhzID0gX29wdGlvbnMud2lkdGhzID8/IG5ldyBBcnJheShfb3B0aW9ucy5wb2ludHMubGVuZ3RoKS5maWxsKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXCJHcmVhc2VkTGluZU1lc2hcIlxyXG4gICAgICogQHJldHVybnMgXCJHcmVhc2VkTGluZU1lc2hcIlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiR3JlYXNlZExpbmVNZXNoXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9zZXRQb2ludHMocG9pbnRzOiBudW1iZXJbXVtdLCBvcHRpb25zPzogR3JlYXNlZExpbmVNZXNoT3B0aW9ucyk6IHZvaWQ7XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3VwZGF0ZUNvbG9yUG9pbnRlcnMoKTogdm9pZDtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfdXBkYXRlV2lkdGhzKCk6IHZvaWQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIF91cGRhdGVXaWR0aHNXaXRoVmFsdWUoZGVmYXVsVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBwb2ludENvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvaW50cyBvZiB0aGlzLl9wb2ludHMpIHtcclxuICAgICAgICAgICAgcG9pbnRDb3VudCArPSBwb2ludHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb3VudERpZmYgPSAocG9pbnRDb3VudCAvIDMpICogMiAtIHRoaXMuX3dpZHRocy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudERpZmY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl93aWR0aHMucHVzaChkZWZhdWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlZCBhIGxhenkgbGluZS4gUmVyZW5kZXJzIHRoZSBsaW5lIGFuZCB1cGRhdGVzIGJvdW5kaW5mbyBhcyB3ZWxsLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlTGF6eSgpIHtcclxuICAgICAgICB0aGlzLl9zZXRQb2ludHModGhpcy5fcG9pbnRzKTtcclxuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuY29sb3JQb2ludGVycykge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVDb2xvclBvaW50ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVZlcnRleEJ1ZmZlcnModGhpcy5fb3B0aW9ucy5yaWJib25PcHRpb25zPy5zbW9vdGhTaGFkaW5nKTtcclxuICAgICAgICAhdGhpcy5kb05vdFN5bmNCb3VuZGluZ0luZm8gJiYgdGhpcy5yZWZyZXNoQm91bmRpbmdJbmZvKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JlYXNlZExpbmVNYXRlcmlhbD8udXBkYXRlTGF6eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBuZXcgcG9pbnRzIHRvIHRoZSBsaW5lLiBJdCBkb2Vzbid0IHJlcmVuZGVycyB0aGUgbGluZSBpZiBpbiBsYXp5IG1vZGUuXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRzIHBvaW50cyB0YWJsZVxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9uYWwgb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkUG9pbnRzKHBvaW50czogbnVtYmVyW11bXSwgb3B0aW9ucz86IEdyZWFzZWRMaW5lTWVzaE9wdGlvbnMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9sYXp5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9pbnRzKHRoaXMuX3BvaW50cywgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSB0aGUgbGluZSBhbmQgaXQncyByZXNvdXJjZXNcclxuICAgICAqIEBwYXJhbSBkb05vdFJlY3Vyc2UgU2V0IHRvIHRydWUgdG8gbm90IHJlY3Vyc2UgaW50byBlYWNoIGNoaWxkcmVuIChyZWN1cnNlIGludG8gZWFjaCBjaGlsZHJlbiBieSBkZWZhdWx0KVxyXG4gICAgICogQHBhcmFtIGRpc3Bvc2VNYXRlcmlhbEFuZFRleHR1cmVzIFNldCB0byB0cnVlIHRvIGFsc28gZGlzcG9zZSByZWZlcmVuY2VkIG1hdGVyaWFscyBhbmQgdGV4dHVyZXMgKGZhbHNlIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKGRvTm90UmVjdXJzZT86IGJvb2xlYW4sIGRpc3Bvc2VNYXRlcmlhbEFuZFRleHR1cmVzID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlci5kaXNwb3NlKGRvTm90UmVjdXJzZSwgZGlzcG9zZU1hdGVyaWFsQW5kVGV4dHVyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbWVzaCB3YXMgY3JlYXRlZCBpbiBsYXp5IG1vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzTGF6eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF6eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFVWc1xyXG4gICAgICovXHJcbiAgICBnZXQgdXZzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91dnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBVVnNcclxuICAgICAqIEBwYXJhbSB1dnMgdGhlIFVWc1xyXG4gICAgICovXHJcbiAgICBzZXQgdXZzKHV2czogRmxvYXRBcnJheSkge1xyXG4gICAgICAgIHRoaXMuX3V2cyA9IHV2cyBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSA/IHV2cyA6IG5ldyBGbG9hdDMyQXJyYXkodXZzKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVWZXJ0ZXhCdWZmZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBwb2ludHMgb2Zmc2V0c1xyXG4gICAgICogUmV0dXJuIHRoZSBwb2ludHMgb2Zmc2V0c1xyXG4gICAgICovXHJcbiAgICBnZXQgb2Zmc2V0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgcG9pbnQgb2ZmZXN0c1xyXG4gICAgICogQHBhcmFtIG9mZnNldHMgb2Zmc2V0IHRhYmxlIFt4LHkseiwgeCx5LHosIC4uLi5dXHJcbiAgICAgKi9cclxuICAgIHNldCBvZmZzZXRzKG9mZnNldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWwgaW5zdGFuY2VvZiBHcmVhc2VkTGluZVNpbXBsZU1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwuc2V0RGVmaW5lKEdyZWFzZWRMaW5lVXNlT2Zmc2V0c1NpbXBsZU1hdGVyaWFsRGVmaW5lLCBvZmZzZXRzPy5sZW5ndGggPiAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb2Zmc2V0cyA9IG9mZnNldHM7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9vZmZzZXRzQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9mZnNldHNCdWZmZXIob2Zmc2V0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0c0J1ZmZlci51cGRhdGUob2Zmc2V0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB3aWR0aHMgYXQgZWFjaCBsaW5lIHBvaW50IGxpa2UgW3dpZHRoTG93ZXIsIHdpZHRoVXBwZXIsIHdpZHRoTG93ZXIsIHdpZHRoVXBwZXIsIC4uLl1cclxuICAgICAqL1xyXG4gICAgZ2V0IHdpZHRocygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGhzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB3aWR0aHMgYXQgZWFjaCBsaW5lIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gd2lkdGhzIHdpZHRoIHRhYmxlIFt3aWR0aExvd2VyLCB3aWR0aFVwcGVyLCB3aWR0aExvd2VyLCB3aWR0aFVwcGVyIC4uLl1cclxuICAgICAqL1xyXG4gICAgc2V0IHdpZHRocyh3aWR0aHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGhzID0gd2lkdGhzO1xyXG4gICAgICAgIGlmICghdGhpcy5fbGF6eSkge1xyXG4gICAgICAgICAgICB0aGlzLl93aWR0aHNCdWZmZXIgJiYgdGhpcy5fd2lkdGhzQnVmZmVyLnVwZGF0ZSh3aWR0aHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNvbG9yIHBvaW50ZXIuIEVhY2ggdmVydGV4IG5lZWQgYSBjb2xvciBwb2ludGVyLiBUaGVzZSBjb2xvciBwb2ludGVycyBwb2ludHMgdG8gdGhlIGNvbG9ycyBpbiB0aGUgY29sb3IgdGFibGUgQHNlZSBjb2xvcnNcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbG9yUG9pbnRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yUG9pbnRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb2xvciBwb2ludGVyXHJcbiAgICAgKiBAcGFyYW0gY29sb3JQb2ludGVycyBhcnJheSBvZiBjb2xvciBwb2ludGVyIGluIHRoZSBjb2xvcnMgYXJyYXkuIE9uZSBwb2ludGVyIGZvciBldmVyeSB2ZXJ0ZXggaXMgbmVlZGVkLlxyXG4gICAgICovXHJcbiAgICBzZXQgY29sb3JQb2ludGVycyhjb2xvclBvaW50ZXJzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yUG9pbnRlcnMgPSBjb2xvclBvaW50ZXJzO1xyXG4gICAgICAgIGlmICghdGhpcy5fbGF6eSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xvclBvaW50ZXJzQnVmZmVyICYmIHRoaXMuX2NvbG9yUG9pbnRlcnNCdWZmZXIudXBkYXRlKGNvbG9yUG9pbnRlcnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBsdWdpbk1hdGVyaWFsIGFzc29jaWF0ZWQgd2l0aCBsaW5lXHJcbiAgICAgKi9cclxuICAgIGdldCBncmVhc2VkTGluZU1hdGVyaWFsKCk6IElHcmVhc2VkTGluZU1hdGVyaWFsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAodGhpcy5tYXRlcmlhbCAmJiB0aGlzLm1hdGVyaWFsIGluc3RhbmNlb2YgR3JlYXNlZExpbmVTaW1wbGVNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxQbHVnaW4gPSB0aGlzLm1hdGVyaWFsPy5wbHVnaW5NYW5hZ2VyPy5nZXRQbHVnaW4oR3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbC5HUkVBU0VEX0xJTkVfTUFURVJJQUxfTkFNRSk7XHJcbiAgICAgICAgaWYgKG1hdGVyaWFsUGx1Z2luKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8R3JlYXNlZExpbmVQbHVnaW5NYXRlcmlhbD5tYXRlcmlhbFBsdWdpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGNvcHkgdGhlIHBvaW50cy5cclxuICAgICAqL1xyXG4gICAgZ2V0IHBvaW50cygpIHtcclxuICAgICAgICBjb25zdCBwb2ludHNDb3B5OiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgRGVlcENvcGllci5EZWVwQ29weSh0aGlzLl9wb2ludHMsIHBvaW50c0NvcHkpO1xyXG4gICAgICAgIHJldHVybiBwb2ludHNDb3B5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBsaW5lIHBvaW50cyBhbmQgcmVyZW5kZXJzIHRoZSBsaW5lLlxyXG4gICAgICogQHBhcmFtIHBvaW50cyBwb2ludHMgdGFibGVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbmFsIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBvaW50cyhwb2ludHM6IEdyZWFzZWRMaW5lUG9pbnRzLCBvcHRpb25zPzogR3JlYXNlZExpbmVNZXNoT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3BvaW50cyA9IEdyZWFzZWRMaW5lVG9vbHMuQ29udmVydFBvaW50cyhwb2ludHMsIG9wdGlvbnM/LnBvaW50c09wdGlvbnMgPz8gdGhpcy5fb3B0aW9ucy5wb2ludHNPcHRpb25zKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVXaWR0aHMoKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnM/LmNvbG9yUG9pbnRlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29sb3JQb2ludGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXRQb2ludHModGhpcy5fcG9pbnRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2luaXRHcmVhc2VkTGluZSgpIHtcclxuICAgICAgICB0aGlzLl92ZXJ0ZXhQb3NpdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9pbmRpY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5fdXZzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9jcmVhdGVMaW5lT3B0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBsaW5lT3B0aW9uczogR3JlYXNlZExpbmVNZXNoT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcG9pbnRzOiB0aGlzLl9wb2ludHMsXHJcbiAgICAgICAgICAgIGNvbG9yUG9pbnRlcnM6IHRoaXMuX2NvbG9yUG9pbnRlcnMsXHJcbiAgICAgICAgICAgIGxhenk6IHRoaXMuX2xhenksXHJcbiAgICAgICAgICAgIHVwZGF0YWJsZTogdGhpcy5fdXBkYXRhYmxlLFxyXG4gICAgICAgICAgICB1dnM6IHRoaXMuX3V2cyxcclxuICAgICAgICAgICAgd2lkdGhzOiB0aGlzLl93aWR0aHMsXHJcbiAgICAgICAgICAgIHJpYmJvbk9wdGlvbnM6IHRoaXMuX29wdGlvbnMucmliYm9uT3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBsaW5lT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBHcmVhc2VkTGluZU1lc2hcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IG9iamVjdCB0byB3cml0ZSBzZXJpYWxpemF0aW9uIHRvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudHlwZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubGluZU9wdGlvbnMgPSB0aGlzLl9jcmVhdGVMaW5lT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlVmVydGV4QnVmZmVycyhjb21wdXRlTm9ybWFscyA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4RGF0YSA9IG5ldyBWZXJ0ZXhEYXRhKCk7XHJcbiAgICAgICAgdmVydGV4RGF0YS5wb3NpdGlvbnMgPSB0aGlzLl92ZXJ0ZXhQb3NpdGlvbnM7XHJcbiAgICAgICAgdmVydGV4RGF0YS5pbmRpY2VzID0gdGhpcy5faW5kaWNlcztcclxuICAgICAgICB2ZXJ0ZXhEYXRhLnV2cyA9IHRoaXMuX3V2cztcclxuICAgICAgICBpZiAoY29tcHV0ZU5vcm1hbHMpIHtcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5ub3JtYWxzID0gW107XHJcbiAgICAgICAgICAgIFZlcnRleERhdGEuQ29tcHV0ZU5vcm1hbHModGhpcy5fdmVydGV4UG9zaXRpb25zLCB0aGlzLl9pbmRpY2VzLCB2ZXJ0ZXhEYXRhLm5vcm1hbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2ZXJ0ZXhEYXRhLmFwcGx5VG9NZXNoKHRoaXMsIHRoaXMuX29wdGlvbnMudXBkYXRhYmxlKTtcclxuICAgICAgICByZXR1cm4gdmVydGV4RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZU9mZnNldHNCdWZmZXIob2Zmc2V0czogbnVtYmVyW10pIHtcclxuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0QnVmZmVyID0gbmV3IEJ1ZmZlcihlbmdpbmUsIG9mZnNldHMsIHRoaXMuX3VwZGF0YWJsZSwgMyk7XHJcbiAgICAgICAgdGhpcy5zZXRWZXJ0aWNlc0J1ZmZlcihvZmZzZXRCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKFwiZ3JsX29mZnNldHNcIiwgMCwgMykpO1xyXG4gICAgICAgIHRoaXMuX29mZnNldHNCdWZmZXIgPSBvZmZzZXRCdWZmZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3VydmUzIH0gZnJvbSBcIi4uL01hdGhzL21hdGgucGF0aFwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiLi4vQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVG1wVmVjdG9ycywgVmVjdG9yMyB9IGZyb20gXCIuLi9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCIuLi9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZvbnREYXRhIH0gZnJvbSBcIi4uL01lc2hlcy9CdWlsZGVycy90ZXh0QnVpbGRlclwiO1xyXG5pbXBvcnQgeyBDcmVhdGVUZXh0U2hhcGVQYXRocyB9IGZyb20gXCIuLi9NZXNoZXMvQnVpbGRlcnMvdGV4dEJ1aWxkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBJbmRpY2VzQXJyYXkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBHcmVhc2VkTGluZVBvaW50cywgR3JlYXNlZExpbmVQb2ludHNPcHRpb25zIH0gZnJvbSBcIi4uL01lc2hlcy9HcmVhc2VkTGluZS9ncmVhc2VkTGluZUJhc2VNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgQ29sb3IzIH0gZnJvbSBcIi4uL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgUmF3VGV4dHVyZSB9IGZyb20gXCIuLi9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3VGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuLi9FbmdpbmVzL2VuZ2luZVwiO1xyXG5pbXBvcnQgeyBHcmVhc2VkTGluZU1hdGVyaWFsRGVmYXVsdHMgfSBmcm9tIFwiLi4vTWF0ZXJpYWxzL0dyZWFzZWRMaW5lL2dyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0c1wiO1xyXG5cclxuLyoqXHJcbiAqIFRvb2wgZnVuY3Rpb25zIGZvciBHcmVhc2VkTGluZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyZWFzZWRMaW5lVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBHcmVhc2VkTGluZVBvaW50cyB0byBudW1iZXJbXVtdXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRzIEdyZWFzZWRMaW5lUG9pbnRzXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBHcmVhc2VkTGluZVRvb2xzQ29udmVydFBvaW50c09wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIG51bWJlcltdW10gd2l0aCB4LCB5LCB6IGNvb3JkaW5hdGVzIG9mIHRoZSBwb2ludHMsIGxpa2UgW1t4LCB5LCB6LCB4LCB5LCB6LCAuLi5dLCBbeCwgeSwgeiwgLi4uXV1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb252ZXJ0UG9pbnRzKHBvaW50czogR3JlYXNlZExpbmVQb2ludHMsIG9wdGlvbnM/OiBHcmVhc2VkTGluZVBvaW50c09wdGlvbnMpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCAmJiBBcnJheS5pc0FycmF5KHBvaW50cykgJiYgdHlwZW9mIHBvaW50c1swXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gWzxudW1iZXJbXT5wb2ludHNdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzLmxlbmd0aCAmJiBBcnJheS5pc0FycmF5KHBvaW50c1swXSkgJiYgdHlwZW9mIHBvaW50c1swXVswXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gPG51bWJlcltdW10+cG9pbnRzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzLmxlbmd0aCAmJiAhQXJyYXkuaXNBcnJheShwb2ludHNbMF0pICYmIHBvaW50c1swXSBpbnN0YW5jZW9mIFZlY3RvcjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHBvaW50c1tqXSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocC54LCBwLnksIHAueik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtwb3NpdGlvbnNdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzLmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheShwb2ludHNbMF0pICYmIHBvaW50c1swXS5sZW5ndGggPiAwICYmIHBvaW50c1swXVswXSBpbnN0YW5jZW9mIFZlY3RvcjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHZlY3RvclBvaW50cyA9IHBvaW50cyBhcyBWZWN0b3IzW11bXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIHZlY3RvclBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocC5mbGF0TWFwKChwMikgPT4gW3AyLngsIHAyLnksIHAyLnpdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cyBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucz8uZmxvYXRBcnJheVN0cmlkZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpZGUgPSBvcHRpb25zLmZsb2F0QXJyYXlTdHJpZGUgKiAzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IHN0cmlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVQb2ludHMgPSBuZXcgQXJyYXkoc3RyaWRlKTsgLy8gUHJlLWFsbG9jYXRlIG1lbW9yeSBmb3IgdGhlIGxpbmVcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0cmlkZTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVQb2ludHNbal0gPSBwb2ludHNbaSArIGpdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChsaW5lUG9pbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW0FycmF5LmZyb20ocG9pbnRzKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHBvaW50cy5sZW5ndGggJiYgcG9pbnRzWzBdIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uczogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChBcnJheS5mcm9tKHAgYXMgRmxvYXQzMkFycmF5KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbWl0IHplcm8gbGVuZ3RoIGxpbmVzIHByZWRpY2F0ZSBmb3IgdGhlIE1lc2hlc1RvTGluZXMgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSBwMSBwb2ludDEgcG9zaXRpb24gb2YgdGhlIGZhY2VcclxuICAgICAqIEBwYXJhbSBwMiBwb2ludDIgcG9zaXRpb24gb2YgdGhlIGZhY2VcclxuICAgICAqIEBwYXJhbSBwMyBwb2ludDMgcG9zaXRpb24gb2YgdGhlIGZhY2VcclxuICAgICAqIEByZXR1cm5zIG9yaWdpbmFsIHBvaW50cyBvciBudWxsIGlmIGFueSBlZGdlIGxlbmd0aCBpcyB6ZXJvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT21pdFplcm9MZW5ndGhQcmVkaWNhdGUocDE6IFZlY3RvcjMsIHAyOiBWZWN0b3IzLCBwMzogVmVjdG9yMykge1xyXG4gICAgICAgIGNvbnN0IGZpbGVyZWRQb2ludHMgPSBbXTtcclxuICAgICAgICAvLyBlZGdlMVxyXG4gICAgICAgIGlmIChwMi5zdWJ0cmFjdChwMSkubGVuZ3RoU3F1YXJlZCgpID4gMCkge1xyXG4gICAgICAgICAgICBmaWxlcmVkUG9pbnRzLnB1c2goW3AxLCBwMl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlZGdlMlxyXG4gICAgICAgIGlmIChwMy5zdWJ0cmFjdChwMikubGVuZ3RoU3F1YXJlZCgpID4gMCkge1xyXG4gICAgICAgICAgICBmaWxlcmVkUG9pbnRzLnB1c2goW3AyLCBwM10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlZGdlM1xyXG4gICAgICAgIGlmIChwMS5zdWJ0cmFjdChwMykubGVuZ3RoU3F1YXJlZCgpID4gMCkge1xyXG4gICAgICAgICAgICBmaWxlcmVkUG9pbnRzLnB1c2goW3AzLCBwMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsZXJlZFBvaW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogZmlsZXJlZFBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9taXQgZHVwbGljYXRlIGxpbmVzIHByZWRpY2F0ZSBmb3IgdGhlIE1lc2hlc1RvTGluZXMgZnVuY3Rpb25cclxuICAgICAqIEBwYXJhbSBwMSBwb2ludDEgcG9zaXRpb24gb2YgdGhlIGZhY2VcclxuICAgICAqIEBwYXJhbSBwMiBwb2ludDIgcG9zaXRpb24gb2YgdGhlIGZhY2VcclxuICAgICAqIEBwYXJhbSBwMyBwb2ludDMgcG9zaXRpb24gb2YgdGhlIGZhY2VcclxuICAgICAqIEBwYXJhbSBwb2ludHMgYXJyYXkgb2YgcG9pbnRzIHRvIHNlYXJjaCBpblxyXG4gICAgICogQHJldHVybnMgb3JpZ2luYWwgcG9pbnRzIG9yIG51bGwgaWYgYW55IGVkZ2UgbGVuZ3RoIGlzIHplcm9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPbWl0RHVwbGljYXRlc1ByZWRpY2F0ZShwMTogVmVjdG9yMywgcDI6IFZlY3RvcjMsIHAzOiBWZWN0b3IzLCBwb2ludHM6IFZlY3RvcjNbXVtdKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZXJlZFBvaW50cyA9IFtdO1xyXG4gICAgICAgIC8vIGVkZ2UxXHJcbiAgICAgICAgaWYgKCFHcmVhc2VkTGluZVRvb2xzLl9TZWFyY2hJblBvaW50cyhwMSwgcDIsIHBvaW50cykpIHtcclxuICAgICAgICAgICAgZmlsZXJlZFBvaW50cy5wdXNoKFtwMSwgcDJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWRnZTJcclxuICAgICAgICBpZiAoIUdyZWFzZWRMaW5lVG9vbHMuX1NlYXJjaEluUG9pbnRzKHAyLCBwMywgcG9pbnRzKSkge1xyXG4gICAgICAgICAgICBmaWxlcmVkUG9pbnRzLnB1c2goW3AyLCBwM10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlZGdlM1xyXG4gICAgICAgIGlmICghR3JlYXNlZExpbmVUb29scy5fU2VhcmNoSW5Qb2ludHMocDMsIHAxLCBwb2ludHMpKSB7XHJcbiAgICAgICAgICAgIGZpbGVyZWRQb2ludHMucHVzaChbcDMsIHAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWxlcmVkUG9pbnRzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBmaWxlcmVkUG9pbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9TZWFyY2hJblBvaW50cyhwMTogVmVjdG9yMywgcDI6IFZlY3RvcjMsIHBvaW50czogVmVjdG9yM1tdW10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBzIG9mIHBvaW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHNbaV0/LmVxdWFscyhwMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IGhhcyBhIHNpYmxpbmcgb2YgcDIgdGhlIGxpbmUgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHNbaSArIDFdPy5lcXVhbHMocDIpIHx8IHBzW2kgLSAxXT8uZXF1YWxzKHAyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBtZXNoIHRyaWFuZ2xlcyBhcyBsaW5lIHBvc2l0aW9uc1xyXG4gICAgICogQHBhcmFtIG1lc2hlcyBhcnJheSBvZiBtZXNoZXNcclxuICAgICAqIEBwYXJhbSBwcmVkaWNhdGUgcHJlZGljYXRlIGZ1bmN0aW9uIHdoaWNoIGRlY2lkZXMgd2hldGhlciB0byBpbmNsdWRlIHRoZSBtZXNoIHRyaWFuZ2xlL2ZhY2UgaW4gdGhlIG91cHV0XHJcbiAgICAgKiBAcmV0dXJucyBhcnJheSBvZiBhcnJheXMgb2YgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTWVzaGVzVG9MaW5lcyhcclxuICAgICAgICBtZXNoZXM6IEFic3RyYWN0TWVzaFtdLFxyXG4gICAgICAgIHByZWRpY2F0ZT86IChcclxuICAgICAgICAgICAgcDE6IFZlY3RvcjMsXHJcbiAgICAgICAgICAgIHAyOiBWZWN0b3IzLFxyXG4gICAgICAgICAgICBwMzogVmVjdG9yMyxcclxuICAgICAgICAgICAgcG9pbnRzOiBWZWN0b3IzW11bXSxcclxuICAgICAgICAgICAgaW5kaWNlSW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgdmVydGV4SW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgbWVzaDogQWJzdHJhY3RNZXNoLFxyXG4gICAgICAgICAgICBtZXNoSW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgdmVydGljZXM6IEZsb2F0QXJyYXksXHJcbiAgICAgICAgICAgIGluZGljZXM6IEluZGljZXNBcnJheVxyXG4gICAgICAgICkgPT4gVmVjdG9yM1tdW11cclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHBvaW50czogVmVjdG9yM1tdW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbWVzaEluZGV4ID0gMDsgbWVzaEluZGV4IDwgbWVzaGVzLmxlbmd0aDsgbWVzaEluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1ttZXNoSW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbWVzaC5nZXRJbmRpY2VzKCk7XHJcbiAgICAgICAgICAgIGlmICh2ZXJ0aWNlcyAmJiBpbmRpY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpMSA9IGluZGljZXNbaWkrK10gKiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpMiA9IGluZGljZXNbaWkrK10gKiAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpMyA9IGluZGljZXNbaWkrK10gKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMSA9IG5ldyBWZWN0b3IzKHZlcnRpY2VzW3ZpMV0sIHZlcnRpY2VzW3ZpMSArIDFdLCB2ZXJ0aWNlc1t2aTEgKyAyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDIgPSBuZXcgVmVjdG9yMyh2ZXJ0aWNlc1t2aTJdLCB2ZXJ0aWNlc1t2aTIgKyAxXSwgdmVydGljZXNbdmkyICsgMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAzID0gbmV3IFZlY3RvcjModmVydGljZXNbdmkzXSwgdmVydGljZXNbdmkzICsgMV0sIHZlcnRpY2VzW3ZpMyArIDJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludHNGcm9tUHJlZGljYXRlID0gcHJlZGljYXRlKHAxLCBwMiwgcDMsIHBvaW50cywgaSwgdmkxLCBtZXNoLCBtZXNoSW5kZXgsIHZlcnRpY2VzLCBpbmRpY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50c0Zyb21QcmVkaWNhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwb2ludHNGcm9tUHJlZGljYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMucHVzaChbcDEsIHAyXSwgW3AyLCBwM10sIFtwMywgcDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBudW1iZXIgY29vcmRpbmF0ZXMgdG8gVmVjdG9yM3NcclxuICAgICAqIEBwYXJhbSBwb2ludHMgbnVtYmVyIGFycmF5IG9mIHgsIHksIHosIHgsIHkgeiwgLi4uIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcmV0dXJucyBWZWN0b3IzIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVG9WZWN0b3IzQXJyYXkocG9pbnRzOiBudW1iZXJbXSB8IG51bWJlcltdW10pIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwb2ludHNbMF0pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5OiBWZWN0b3IzW11bXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dEFycmF5ID0gcG9pbnRzIGFzIG51bWJlcltdW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3ViSW5wdXRBcnJheSBvZiBpbnB1dEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJBcnJheTogVmVjdG9yM1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YklucHV0QXJyYXkubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJBcnJheS5wdXNoKG5ldyBWZWN0b3IzKHN1YklucHV0QXJyYXlbaV0sIHN1YklucHV0QXJyYXlbaSArIDFdLCBzdWJJbnB1dEFycmF5W2kgKyAyXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChzdWJBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRBcnJheSA9IHBvaW50cyBhcyBudW1iZXJbXTtcclxuICAgICAgICBjb25zdCBhcnJheTogVmVjdG9yM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2gobmV3IFZlY3RvcjMoaW5wdXRBcnJheVtpXSwgaW5wdXRBcnJheVtpICsgMV0sIGlucHV0QXJyYXlbaSArIDJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBudW1iZXIgYXJyYXkgZnJvbSBhIFZlY3RvcjMgYXJyYXkuXHJcbiAgICAgKiBZb3UgY2FuIHlvdSBmb3IgZXhhbXBsZSB0byBjb252ZXJ0IHlvdXIgVmVjdG9yM1tdIG9mZnNldHMgdG8gdGhlIHJlcXVpcmVkIG51bWJlcltdIGZvciB0aGUgb2Zmc2V0cyBvcHRpb24uXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRzIFZlY3RvcjMgYXJyYXlcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIHgsIHksIHogY29vcmRpbmF0ZXMgYXMgbnVtYmVycyBbeCwgeSwgeiwgeCwgeSwgeiwgeCwgeSwgeiwgLi4uLl1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBUb051bWJlckFycmF5KHBvaW50czogVmVjdG9yM1tdKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cy5mbGF0TWFwKCh2KSA9PiBbdi54LCB2LnksIHYuel0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3VtIG9mIHBvaW50cyBvZiBldmVyeSBsaW5lIGFuZCB0aGUgbnVtYmVyIG9mIHBvaW50cyBpbiBlYWNoIGxpbmUuXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWZ1bCB3aGVuIHlvdSBhcmUgZHJhd2luZyBtdWx0aXBsZSBsaW5lcyBpbiBvbmUgbWVzaCBhbmQgeW91IHdhbnRcclxuICAgICAqIHRvIGtub3cgdGhlIGNvdW50cy4gRm9yIGV4YW1wbGUgZm9yIGNyZWF0aW5nIGFuIG9mZnNldHMgdGFibGUuXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRzIHBvaW50IGFycmF5XHJcbiAgICAgKiBAcmV0dXJucyBwb2ludHMgY291bnQgaW5mb1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFBvaW50c0NvdW50SW5mbyhwb2ludHM6IG51bWJlcltdW10pOiB7IHRvdGFsOiBudW1iZXI7IGNvdW50czogbnVtYmVyW10gfSB7XHJcbiAgICAgICAgY29uc3QgY291bnRzID0gbmV3IEFycmF5KHBvaW50cy5sZW5ndGgpO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IHBvaW50cy5sZW5ndGg7IG4tLTsgKSB7XHJcbiAgICAgICAgICAgIGNvdW50c1tuXSA9IHBvaW50c1tuXS5sZW5ndGggLyAzO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBjb3VudHNbbl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHRvdGFsLCBjb3VudHMgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZSBjb3VudGluZyBhbGwgaXQncyBzZWdtZW50cyBsZW5ndGhcclxuICAgICAqIEBwYXJhbSBkYXRhIGFycmF5IG9mIGxpbmUgcG9pbnRzXHJcbiAgICAgKiBAcmV0dXJucyBsZW5ndGggb2YgdGhlIGxpbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMaW5lTGVuZ3RoKGRhdGE6IFZlY3RvcjNbXSB8IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcG9pbnRzOiBWZWN0b3IzW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhWzBdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHBvaW50cyA9IEdyZWFzZWRMaW5lVG9vbHMuVG9WZWN0b3IzQXJyYXkoPG51bWJlcltdPmRhdGEpIGFzIFZlY3RvcjNbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb2ludHMgPSBkYXRhIGFzIFZlY3RvcjNbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRtcCA9IFRtcFZlY3RvcnMuVmVjdG9yM1swXTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9pbnRzLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQxID0gcG9pbnRzW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQyID0gcG9pbnRzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGxlbmd0aCArPSBwb2ludDIuc3VidHJhY3RUb1JlZihwb2ludDEsIHRtcCkubGVuZ3RoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsZW5ndGggZnJvbSB0aGUgYmVnaW5uaW5nIHRvIGVhY2ggcG9pbnQgb2YgdGhlIGxpbmUgYXMgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBhcnJheSBvZiBsaW5lIHBvaW50c1xyXG4gICAgICogQHBhcmFtIGJ1ZiBvcHRpb25hbCBwcmUtYWxsb2NhdGVkIGJ1ZmZlciB0byByZWR1Y2UgbWVtb3J5IHByZXNzdXJlLCBzaG91bGQgYmUgYXQgbGVhc3QgYGRhdGEubGVuZ3RoICogNCAvIDNgIGJ5dGVzXHJcbiAgICAgKiBAcmV0dXJucyBsZW5ndGggYXJyYXkgb2YgdGhlIGxpbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMaW5lTGVuZ3RoQXJyYXkoZGF0YTogbnVtYmVyW10sIGJ1Zj86IEFycmF5QnVmZmVyKTogRmxvYXQzMkFycmF5IHtcclxuICAgICAgICBjb25zdCBvdXQgPSBidWYgPyBuZXcgRmxvYXQzMkFycmF5KGJ1ZiwgMCwgZGF0YS5sZW5ndGggLyAzKSA6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGggLyAzKTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDAsIHBvaW50c0xlbmd0aCA9IGRhdGEubGVuZ3RoIC8gMyAtIDE7IGluZGV4IDwgcG9pbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZGF0YVtpbmRleCAqIDMgKyAwXTtcclxuICAgICAgICAgICAgbGV0IHkgPSBkYXRhW2luZGV4ICogMyArIDFdO1xyXG4gICAgICAgICAgICBsZXQgeiA9IGRhdGFbaW5kZXggKiAzICsgMl07XHJcbiAgICAgICAgICAgIHggLT0gZGF0YVtpbmRleCAqIDMgKyAzXTtcclxuICAgICAgICAgICAgeSAtPSBkYXRhW2luZGV4ICogMyArIDRdO1xyXG4gICAgICAgICAgICB6IC09IGRhdGFbaW5kZXggKiAzICsgNV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICAgICAgICAgICAgbGVuZ3RoICs9IGN1cnJlbnRMZW5ndGg7XHJcbiAgICAgICAgICAgIG91dFtpbmRleCArIDFdID0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGl2aWRlcyBhIHNlZ21lbnQgaW50byBzbWFsbGVyIHNlZ21lbnRzLlxyXG4gICAgICogQSBzZWdtZW50IGlzIGEgcGFydCBvZiB0aGUgbGluZSBiZXR3ZWVuIGl0J3MgdHdvIHBvaW50cy5cclxuICAgICAqIEBwYXJhbSBwb2ludDEgZmlyc3QgcG9pbnQgb2YgdGhlIGxpbmVcclxuICAgICAqIEBwYXJhbSBwb2ludDIgc2Vjb25kIHBvaW50IG9mIHRoZSBsaW5lXHJcbiAgICAgKiBAcGFyYW0gc2VnbWVudENvdW50IG51bWJlciBvZiBzZWdtZW50cyB3ZSB3YW50IHRvIGhhdmUgaW4gdGhlIGRpdmlkZWQgbGluZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTZWdtZW50aXplU2VnbWVudEJ5Q291bnQocG9pbnQxOiBWZWN0b3IzLCBwb2ludDI6IFZlY3RvcjMsIHNlZ21lbnRDb3VudDogbnVtYmVyKTogVmVjdG9yM1tdIHtcclxuICAgICAgICBjb25zdCBkaXZpZGVkTGluZVBvaW50czogVmVjdG9yM1tdID0gW107XHJcbiAgICAgICAgY29uc3QgZGlmZiA9IHBvaW50Mi5zdWJ0cmFjdChwb2ludDEpO1xyXG4gICAgICAgIGNvbnN0IGRpdmlzb3IgPSBUbXBWZWN0b3JzLlZlY3RvcjNbMF07XHJcbiAgICAgICAgZGl2aXNvci5zZXRBbGwoc2VnbWVudENvdW50KTtcclxuICAgICAgICBjb25zdCBzZWdtZW50VmVjdG9yID0gVG1wVmVjdG9ycy5WZWN0b3IzWzFdO1xyXG4gICAgICAgIGRpZmYuZGl2aWRlVG9SZWYoZGl2aXNvciwgc2VnbWVudFZlY3Rvcik7XHJcblxyXG4gICAgICAgIGxldCBuZXh0UG9pbnQgPSBwb2ludDEuY2xvbmUoKTtcclxuICAgICAgICBkaXZpZGVkTGluZVBvaW50cy5wdXNoKG5leHRQb2ludCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlZ21lbnRDb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBuZXh0UG9pbnQgPSBuZXh0UG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgZGl2aWRlZExpbmVQb2ludHMucHVzaChuZXh0UG9pbnQuYWRkSW5QbGFjZShzZWdtZW50VmVjdG9yKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGl2aWRlZExpbmVQb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXZpZGVzIGEgbGluZSBpbnRvIHNlZ21lbnRzLlxyXG4gICAgICogQSBzZWdtZW50IGlzIGEgcGFydCBvZiB0aGUgbGluZSBiZXR3ZWVuIGl0J3MgdHdvIHBvaW50cy5cclxuICAgICAqIEBwYXJhbSB3aGF0IGxpbmUgcG9pbnRzXHJcbiAgICAgKiBAcGFyYW0gc2VnbWVudExlbmd0aCBsZW5ndGggb2YgZWFjaCBzZWdtZW50IG9mIHRoZSByZXN1bHRpbmcgbGluZSAoZGlzdGFuY2UgYmV0d2VlbiB0d28gbGluZSBwb2ludHMpXHJcbiAgICAgKiBAcmV0dXJucyBsaW5lIHBvaW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2VnbWVudGl6ZUxpbmVCeVNlZ21lbnRMZW5ndGgod2hhdDogVmVjdG9yM1tdIHwgbnVtYmVyW10gfCB7IHBvaW50MTogVmVjdG9yMzsgcG9pbnQyOiBWZWN0b3IzOyBsZW5ndGg6IG51bWJlciB9W10sIHNlZ21lbnRMZW5ndGg6IG51bWJlcik6IFZlY3RvcjNbXSB7XHJcbiAgICAgICAgY29uc3Qgc3ViTGluZXMgPVxyXG4gICAgICAgICAgICB3aGF0WzBdIGluc3RhbmNlb2YgVmVjdG9yM1xyXG4gICAgICAgICAgICAgICAgPyBHcmVhc2VkTGluZVRvb2xzLkdldExpbmVTZWdtZW50cyh3aGF0IGFzIFZlY3RvcjNbXSlcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHdoYXRbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgPyBHcmVhc2VkTGluZVRvb2xzLkdldExpbmVTZWdtZW50cyhHcmVhc2VkTGluZVRvb2xzLlRvVmVjdG9yM0FycmF5KHdoYXQgYXMgbnVtYmVyW10pIGFzIFZlY3RvcjNbXSlcclxuICAgICAgICAgICAgICAgICAgOiAod2hhdCBhcyB7IHBvaW50MTogVmVjdG9yMzsgcG9pbnQyOiBWZWN0b3IzOyBsZW5ndGg6IG51bWJlciB9W10pO1xyXG4gICAgICAgIGNvbnN0IHBvaW50czogVmVjdG9yM1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIHN1YkxpbmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IHNlZ21lbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRzID0gR3JlYXNlZExpbmVUb29scy5TZWdtZW50aXplU2VnbWVudEJ5Q291bnQocy5wb2ludDEsIHMucG9pbnQyLCBNYXRoLmNlaWwocy5sZW5ndGggLyBzZWdtZW50TGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNlZyBvZiBzZWdtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHNlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChzLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChzLnBvaW50Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpdmlkZXMgYSBsaW5lIGludG8gc2VnbWVudHMuXHJcbiAgICAgKiBBIHNlZ21lbnQgaXMgYSBwYXJ0IG9mIHRoZSBsaW5lIGJldHdlZW4gaXQncyB0d28gcG9pbnRzLlxyXG4gICAgICogQHBhcmFtIHdoYXQgbGluZSBwb2ludHNcclxuICAgICAqIEBwYXJhbSBzZWdtZW50Q291bnQgbnVtYmVyIG9mIHNlZ21lbnRzXHJcbiAgICAgKiBAcmV0dXJucyBsaW5lIHBvaW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2VnbWVudGl6ZUxpbmVCeVNlZ21lbnRDb3VudCh3aGF0OiBWZWN0b3IzW10gfCBudW1iZXJbXSwgc2VnbWVudENvdW50OiBudW1iZXIpOiBWZWN0b3IzW10ge1xyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IDxWZWN0b3IzW10+KHR5cGVvZiB3aGF0WzBdID09PSBcIm51bWJlclwiID8gR3JlYXNlZExpbmVUb29scy5Ub1ZlY3RvcjNBcnJheSg8bnVtYmVyW10+d2hhdCkgOiB3aGF0KTtcclxuICAgICAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gR3JlYXNlZExpbmVUb29scy5HZXRMaW5lTGVuZ3RoKHBvaW50cykgLyBzZWdtZW50Q291bnQ7XHJcbiAgICAgICAgcmV0dXJuIEdyZWFzZWRMaW5lVG9vbHMuU2VnbWVudGl6ZUxpbmVCeVNlZ21lbnRMZW5ndGgocG9pbnRzLCBzZWdtZW50TGVuZ3RoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBsaW5lIHNlZ21lbnRzLlxyXG4gICAgICogQSBzZWdtZW50IGlzIGEgcGFydCBvZiB0aGUgbGluZSBiZXR3ZWVuIGl0J3MgdHdvIHBvaW50cy5cclxuICAgICAqIEBwYXJhbSBwb2ludHMgbGluZSBwb2ludHNcclxuICAgICAqIEByZXR1cm5zIHNlZ21lbnRzIGluZm9ybWF0aW9uIG9mIHRoZSBsaW5lIHNlZ21lbnQgaW5jbHVkaW5nIHN0YXJ0aW5nIHBvaW50LCBlbmRpbmcgcG9pbnQgYW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRMaW5lU2VnbWVudHMocG9pbnRzOiBWZWN0b3IzW10pOiB7IHBvaW50MTogVmVjdG9yMzsgcG9pbnQyOiBWZWN0b3IzOyBsZW5ndGg6IG51bWJlciB9W10ge1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50MSA9IHBvaW50c1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50MiA9IHBvaW50c1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwb2ludDIuc3VidHJhY3QocG9pbnQxKS5sZW5ndGgoKTtcclxuICAgICAgICAgICAgc2VnbWVudHMucHVzaCh7IHBvaW50MSwgcG9pbnQyLCBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VnbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBtaW5pbXVtIGFuZCB0aGUgbWF4aW11bSBsZW5ndGggb2YgYSBsaW5lIHNlZ21lbnQgaW4gdGhlIGxpbmUuXHJcbiAgICAgKiBBIHNlZ21lbnQgaXMgYSBwYXJ0IG9mIHRoZSBsaW5lIGJldHdlZW4gaXQncyB0d28gcG9pbnRzLlxyXG4gICAgICogQHBhcmFtIHBvaW50cyBsaW5lIHBvaW50c1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRNaW5NYXhTZWdtZW50TGVuZ3RoKHBvaW50czogVmVjdG9yM1tdKTogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSB7XHJcbiAgICAgICAgY29uc3Qgc3ViTGluZXMgPSBHcmVhc2VkTGluZVRvb2xzLkdldExpbmVTZWdtZW50cyhwb2ludHMpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IHN1YkxpbmVzLnNvcnQoKHMpID0+IHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtaW46IHNvcnRlZFswXS5sZW5ndGgsXHJcbiAgICAgICAgICAgIG1heDogc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS5sZW5ndGgsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmRzIHRoZSBsYXN0IHZpc2libGUgcG9zaXRpb24gaW4gd29ybGQgc3BhY2Ugb2YgdGhlIGxpbmUgYWNjb3JkaW5nIHRvIHRoZSB2aXNpYmlsaXR5IHBhcmFtZXRlclxyXG4gICAgICogQHBhcmFtIGxpbmVTZWdtZW50cyBzZWdtZW50cyBvZiB0aGUgbGluZVxyXG4gICAgICogQHBhcmFtIGxpbmVMZW5ndGggdG90YWwgbGVuZ3RoIG9mIHRoZSBsaW5lXHJcbiAgICAgKiBAcGFyYW0gdmlzYmlsaXR5IG5vcm1hbGl6ZWQgdmFsdWUgb2YgdmlzaWJpbGl0eVxyXG4gICAgICogQHBhcmFtIGxvY2FsU3BhY2UgaWYgdHJ1ZSB0aGUgcmVzdWx0IHdpbGwgYmUgaW4gbG9jYWwgc3BhY2UgKGRlZmF1bHQgaXMgZmFsc2UpXHJcbiAgICAgKiBAcmV0dXJucyB3b3JsZCBzcGFjZSBjb29yZGluYXRlIG9mIHRoZSBsYXN0IHZpc2libGUgcGllY2Ugb2YgdGhlIGxpbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRQb3NpdGlvbk9uTGluZUJ5VmlzaWJpbGl0eShsaW5lU2VnbWVudHM6IHsgcG9pbnQxOiBWZWN0b3IzOyBwb2ludDI6IFZlY3RvcjM7IGxlbmd0aDogbnVtYmVyIH1bXSwgbGluZUxlbmd0aDogbnVtYmVyLCB2aXNiaWxpdHk6IG51bWJlciwgbG9jYWxTcGFjZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoVmlzaWJpbGl0eVJhdGlvID0gbGluZUxlbmd0aCAqIHZpc2JpbGl0eTtcclxuICAgICAgICBsZXQgc3VtU2VnbWVudExlbmd0aHMgPSAwO1xyXG4gICAgICAgIGxldCBzZWdtZW50SW5kZXggPSAwO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5lU2VnbWVudHNMZW5ndGggPSBsaW5lU2VnbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZVNlZ21lbnRzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGxlbmd0aFZpc2liaWxpdHlSYXRpbyA8PSBzdW1TZWdtZW50TGVuZ3RocyArIGxpbmVTZWdtZW50c1tpXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdW1TZWdtZW50TGVuZ3RocyArPSBsaW5lU2VnbWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcyA9IChsZW5ndGhWaXNpYmlsaXR5UmF0aW8gLSBzdW1TZWdtZW50TGVuZ3RocykgLyBsaW5lU2VnbWVudHNbc2VnbWVudEluZGV4XS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGxpbmVTZWdtZW50c1tzZWdtZW50SW5kZXhdLnBvaW50Mi5zdWJ0cmFjdFRvUmVmKGxpbmVTZWdtZW50c1tzZWdtZW50SW5kZXhdLnBvaW50MSwgVG1wVmVjdG9ycy5WZWN0b3IzWzBdKTtcclxuICAgICAgICBUbXBWZWN0b3JzLlZlY3RvcjNbMV0gPSBUbXBWZWN0b3JzLlZlY3RvcjNbMF0ubXVsdGlwbHlCeUZsb2F0cyhzLCBzLCBzKTtcclxuICAgICAgICBpZiAoIWxvY2FsU3BhY2UpIHtcclxuICAgICAgICAgICAgVG1wVmVjdG9ycy5WZWN0b3IzWzFdLmFkZEluUGxhY2UobGluZVNlZ21lbnRzW3NlZ21lbnRJbmRleF0ucG9pbnQxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBUbXBWZWN0b3JzLlZlY3RvcjNbMV0uY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgbGluZXMgaW4gYSBzaGFwZSBvZiBjaXJjbGUvYXJjLlxyXG4gICAgICogQSBzZWdtZW50IGlzIGEgcGFydCBvZiB0aGUgbGluZSBiZXR3ZWVuIGl0J3MgdHdvIHBvaW50cy5cclxuICAgICAqIEBwYXJhbSByYWRpdXNYIHJhZGl1c1ggb2YgdGhlIGNpcmNsZVxyXG4gICAgICogQHBhcmFtIHNlZ21lbnRzIG51bWJlciBvZiBzZWdtZW50cyBpbiB0aGUgY2lyY2xlXHJcbiAgICAgKiBAcGFyYW0geiB6IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50cy4gRGVmYXVsdHMgdG8gMC5cclxuICAgICAqIEBwYXJhbSByYWRpdXNZIHJhZGl1c1kgb2YgdGhlIGNpcmNsZSAtIHlvdSBjYW4gZHJhdyBhbiBvdmFsIGlmIHVzaW5nIGRpZmZlcmVudCB2YWx1ZXNcclxuICAgICAqIEBwYXJhbSBzZWdtZW50QW5nbGUgYW5nbGUgb2Zmc2V0IG9mIHRoZSBzZWdtZW50cy4gRGVmYXVsdHMgdG8gTWF0aC5QSSAqIDIgLyBzZWdtZW50cy4gQ2hhbmdlIHRoaXMgdmFsdWUgdG8gZHJhdyBhIHBhcnQgb2YgdGhlIGNpcmNsZS5cclxuICAgICAqIEByZXR1cm5zIGxpbmUgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q2lyY2xlTGluZVBvaW50cyhyYWRpdXNYOiBudW1iZXIsIHNlZ21lbnRzOiBudW1iZXIsIHogPSAwLCByYWRpdXNZID0gcmFkaXVzWCwgc2VnbWVudEFuZ2xlID0gKE1hdGguUEkgKiAyKSAvIHNlZ21lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRzOiBWZWN0b3IzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzZWdtZW50czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKG5ldyBWZWN0b3IzKE1hdGguY29zKGkgKiBzZWdtZW50QW5nbGUpICogcmFkaXVzWCwgTWF0aC5zaW4oaSAqIHNlZ21lbnRBbmdsZSkgKiByYWRpdXNZLCB6KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGxpbmUgcG9pbnRzIGluIGEgc2hhcGUgb2YgYSBiZXppZXIgY3VydmVcclxuICAgICAqIEBwYXJhbSBwMCBiZXppZXIgcG9pbnQwXHJcbiAgICAgKiBAcGFyYW0gcDEgYmV6aWVyIHBvaW50MVxyXG4gICAgICogQHBhcmFtIHAyIGJlemllciBwb2ludDJcclxuICAgICAqIEBwYXJhbSBzZWdtZW50cyBudW1iZXIgb2Ygc2VnbWVudHMgaW4gdGhlIGN1cnZlXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJlemllckxpbmVQb2ludHMocDA6IFZlY3RvcjMsIHAxOiBWZWN0b3IzLCBwMjogVmVjdG9yMywgc2VnbWVudHM6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBDdXJ2ZTMuQ3JlYXRlUXVhZHJhdGljQmV6aWVyKHAwLCBwMSwgcDIsIHNlZ21lbnRzKVxyXG4gICAgICAgICAgICAuZ2V0UG9pbnRzKClcclxuICAgICAgICAgICAgLmZsYXRNYXAoKHYpID0+IFt2LngsIHYueSwgdi56XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIHBvc2l0aW9uIG9mIHRoZSBhcnJvdyBjYXAgKG1haW5seSB5b3Ugd2FudCB0byBjcmVhdGUgYSB0cmlhbmdsZSwgc2V0IHdpZHRoVXAgYW5kIHdpZHRoRG93biB0byB0aGUgc2FtZSB2YWx1ZSBhbmQgb21pdCB3aWR0aFN0YXJ0VXAgYW5kIHdpZHRoU3RhcnREb3duKVxyXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBkaXJlY3Rpb24gd2hpY2ggdGhlIGFycm93IHBvaW50cyB0b1xyXG4gICAgICogQHBhcmFtIGxlbmd0aCBsZW5ndGggKHNpemUpIG9mIHRoZSBhcnJvdyBjYXAgaXRzZWxmXHJcbiAgICAgKiBAcGFyYW0gd2lkdGhVcCB0aGUgYXJyb3cgd2lkdGggYWJvdmUgdGhlIGxpbmVcclxuICAgICAqIEBwYXJhbSB3aWR0aERvd24gdGhlIGFycm93IHdpZHRoIGJlbG92ZSB0aGUgbGluZVxyXG4gICAgICogQHBhcmFtIHdpZHRoU3RhcnRVcCB0aGUgYXJyb3cgd2lkdGggYXQgdGhlIHN0YXJ0IG9mIHRoZSBhcnJvdyBhYm92ZSB0aGUgbGluZS4gSW4gbW9zdCBzY2VuYXJpb3MgdGhpcyBpcyAwLlxyXG4gICAgICogQHBhcmFtIHdpZHRoU3RhcnREb3duIHRoZSBhcnJvdyB3aWR0aCBhdCB0aGUgc3RhcnQgb2YgdGhlIGFycm93IGJlbG93IHRoZSBsaW5lLiBJbiBtb3N0IHNjZW5hcmlvcyB0aGlzIGlzIDAuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEFycm93Q2FwKHBvc2l0aW9uOiBWZWN0b3IzLCBkaXJlY3Rpb246IFZlY3RvcjMsIGxlbmd0aDogbnVtYmVyLCB3aWR0aFVwOiBudW1iZXIsIHdpZHRoRG93bjogbnVtYmVyLCB3aWR0aFN0YXJ0VXAgPSAwLCB3aWR0aFN0YXJ0RG93biA9IDApIHtcclxuICAgICAgICBjb25zdCBwb2ludHMgPSBbcG9zaXRpb24uY2xvbmUoKSwgcG9zaXRpb24uYWRkKGRpcmVjdGlvbi5tdWx0aXBseUJ5RmxvYXRzKGxlbmd0aCwgbGVuZ3RoLCBsZW5ndGgpKV07XHJcbiAgICAgICAgY29uc3Qgd2lkdGhzID0gW3dpZHRoVXAsIHdpZHRoRG93biwgd2lkdGhTdGFydFVwLCB3aWR0aFN0YXJ0RG93bl07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvaW50cyxcclxuICAgICAgICAgICAgd2lkdGhzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIDNEIHBvc2l0aW9ucyBvZiBwb2ludHMgZnJvbSBhIHRleHQgYW5kIGZvbnRcclxuICAgICAqIEBwYXJhbSB0ZXh0IFRleHRcclxuICAgICAqIEBwYXJhbSBzaXplIFNpemUgb2YgdGhlIGZvbnRcclxuICAgICAqIEBwYXJhbSByZXNvbHV0aW9uIFJlc29sdXRpb24gb2YgdGhlIGZvbnRcclxuICAgICAqIEBwYXJhbSBmb250RGF0YSBkZWZpbmVzIHRoZSBmb250IGRhdGEgKGNhbiBiZSBnZW5lcmF0ZWQgd2l0aCBodHRwOi8vZ2VybzMuZ2l0aHViLmlvL2ZhY2V0eXBlLmpzLylcclxuICAgICAqIEBwYXJhbSB6IHogY29vcmRpbmF0ZVxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVJbm5lciBpbmNsdWRlIHRoZSBpbm5lciBwYXJ0cyBvZiB0aGUgZm9udCBpbiB0aGUgcmVzdWx0LiBEZWZhdWx0IHRydWUuIElmIGZhbHNlLCBvbmx5IHRoZSBvdXRsaW5lcyB3aWxsIGJlIHJldHVybmVkLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyW11bXSBvZiAzRCBwb3NpdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRQb2ludHNGcm9tVGV4dCh0ZXh0OiBzdHJpbmcsIHNpemU6IG51bWJlciwgcmVzb2x1dGlvbjogbnVtYmVyLCBmb250RGF0YTogSUZvbnREYXRhLCB6ID0gMCwgaW5jbHVkZUlubmVyID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGFsbFBvaW50cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNoYXBlUGF0aHMgPSBDcmVhdGVUZXh0U2hhcGVQYXRocyh0ZXh0LCBzaXplLCByZXNvbHV0aW9uLCBmb250RGF0YSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc3Agb2Ygc2hhcGVQYXRocykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2Ygc3AucGF0aHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRzMmQgPSBwLmdldFBvaW50cygpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwMmQgb2YgcG9pbnRzMmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwMmQueCwgcDJkLnksIHopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWxsUG9pbnRzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGluY2x1ZGVJbm5lcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBoIG9mIHNwLmhvbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG9sZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludHMyZCA9IGguZ2V0UG9pbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwMmQgb2YgcG9pbnRzMmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9sZXMucHVzaChwMmQueCwgcDJkLnksIHopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhbGxQb2ludHMucHVzaChob2xlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhbGxQb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyBhbiBhcnJheSBvZiBDb2xvcjMgdG8gVWludDhBcnJheVxyXG4gICAgICogQHBhcmFtIGNvbG9ycyBBcnJyYXkgb2YgQ29sb3IzXHJcbiAgICAgKiBAcmV0dXJucyBVaW44QXJyYXkgb2YgY29sb3JzIFtyLCBnLCBiLCBhLCByLCBnLCBiLCBhLCAuLi5dXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IzdG9SR0JBVWludDgoY29sb3JzOiBDb2xvcjNbXSk6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yVGFibGU6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShjb2xvcnMubGVuZ3RoICogNCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbaisrXSA9IGNvbG9yc1tpXS5yICogMjU1O1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlW2orK10gPSBjb2xvcnNbaV0uZyAqIDI1NTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVtqKytdID0gY29sb3JzW2ldLmIgKiAyNTU7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbaisrXSA9IDI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvclRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFJhd1RleHR1cmUgZnJvbSBhbiBSR0JBIGNvbG9yIGFycmF5IGFuZCBzZXRzIGl0IG9uIHRoZSBwbHVnaW4gbWF0ZXJpYWwgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gY29sb3JzIFVpbnQ4QXJyYXkgb2YgY29sb3JzXHJcbiAgICAgKiBAcGFyYW0gY29sb3JzU2FtcGxpbmcgc2FtcGxpbmcgbW9kZSBvZiB0aGUgY3JlYXRlZCB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgU2NlbmVcclxuICAgICAqIEByZXR1cm5zIHRoZSBjb2xvcnMgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUNvbG9yc1RleHR1cmUobmFtZTogc3RyaW5nLCBjb2xvcnM6IENvbG9yM1tdLCBjb2xvcnNTYW1wbGluZzogbnVtYmVyLCBzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICBjb25zdCBtYXhUZXh0dXJlU2l6ZSA9IHNjZW5lLmdldEVuZ2luZSgpLmdldENhcHMoKS5tYXhUZXh0dXJlU2l6ZSA/PyAxO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29sb3JzLmxlbmd0aCA+IG1heFRleHR1cmVTaXplID8gbWF4VGV4dHVyZVNpemUgOiBjb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChjb2xvcnMubGVuZ3RoIC8gbWF4VGV4dHVyZVNpemUpO1xyXG4gICAgICAgIGlmIChoZWlnaHQgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbG9ycyA9IFsuLi5jb2xvcnMsIC4uLkFycmF5KHdpZHRoICogaGVpZ2h0IC0gY29sb3JzLmxlbmd0aCkuZmlsbChjb2xvcnNbMF0pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sb3JzQXJyYXkgPSBHcmVhc2VkTGluZVRvb2xzLkNvbG9yM3RvUkdCQVVpbnQ4KGNvbG9ycyk7XHJcbiAgICAgICAgY29uc3QgY29sb3JzVGV4dHVyZSA9IG5ldyBSYXdUZXh0dXJlKGNvbG9yc0FycmF5LCB3aWR0aCwgaGVpZ2h0LCBFbmdpbmUuVEVYVFVSRUZPUk1BVF9SR0JBLCBzY2VuZSwgZmFsc2UsIHRydWUsIGNvbG9yc1NhbXBsaW5nKTtcclxuICAgICAgICBjb2xvcnNUZXh0dXJlLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHJldHVybiBjb2xvcnNUZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBtaW5pbXVtIHNpemUgdGV4dHVyZSBmb3IgdGhlIGNvbG9ycyBzYW1wbGVyMkQgd2hlbiB0aGVyZSBpcyBubyBjb2xvcnMgdGV4dHVyZSBkZWZpbmVkIHlldC5cclxuICAgICAqIEZvciBmYXN0IHN3aXRjaGluZyB1c2luZyB0aGUgdXNlQ29sb3JzIHByb3BlcnR5IHdpdGhvdXQgdGhlIG5lZWQgdG8gdXNlIGRlZmluZXMuXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgU2NlbmVcclxuICAgICAqIEByZXR1cm5zIGVtcHR5IGNvbG9ycyB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUHJlcGFyZUVtcHR5Q29sb3JzVGV4dHVyZShzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICBpZiAoIUdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5FbXB0eUNvbG9yc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzQXJyYXkgPSBuZXcgVWludDhBcnJheSg0KTtcclxuICAgICAgICAgICAgR3JlYXNlZExpbmVNYXRlcmlhbERlZmF1bHRzLkVtcHR5Q29sb3JzVGV4dHVyZSA9IG5ldyBSYXdUZXh0dXJlKGNvbG9yc0FycmF5LCAxLCAxLCBFbmdpbmUuVEVYVFVSRUZPUk1BVF9SR0JBLCBzY2VuZSwgZmFsc2UsIGZhbHNlLCBSYXdUZXh0dXJlLk5FQVJFU1RfTkVBUkVTVCk7XHJcbiAgICAgICAgICAgIEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5FbXB0eUNvbG9yc1RleHR1cmUubmFtZSA9IFwiZ3JsRW1wdHlDb2xvcnNUZXh0dXJlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gR3JlYXNlZExpbmVNYXRlcmlhbERlZmF1bHRzLkVtcHR5Q29sb3JzVGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpcG9zZXMgdGhlIHNoYXJlZCBlbXB0eSBjb2xvcnMgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERpc3Bvc2VFbXB0eUNvbG9yc1RleHR1cmUoKSB7XHJcbiAgICAgICAgR3JlYXNlZExpbmVNYXRlcmlhbERlZmF1bHRzLkVtcHR5Q29sb3JzVGV4dHVyZT8uZGlzcG9zZSgpO1xyXG4gICAgICAgIEdyZWFzZWRMaW5lTWF0ZXJpYWxEZWZhdWx0cy5FbXB0eUNvbG9yc1RleHR1cmUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYm9vbGVhbiB0byBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gYm9vbCB0aGUgYm9vbCB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgMSBpZiB0cnVlLCAwIGlmIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJvb2xlYW5Ub051bWJlcihib29sPzogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiBib29sID8gMSA6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWF0cml4LCBRdWF0ZXJuaW9uLCBUbXBWZWN0b3JzLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgRXBzaWxvbiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuXHJcbi8qKlxyXG4gKiBNYXRyaXggdGhhdCBjb252ZXJ0cyBoYW5kZWRuZXNzIG9uIHRoZSBYLWF4aXMuIFVzZWQgdG8gY29udmVydCBmcm9tIExIIHRvIFJIIGFuZCB2aWNlIHZlcnNhLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb252ZXJ0SGFuZGVkbmVzc01hdHJpeCA9IE1hdHJpeC5Db21wb3NlKG5ldyBWZWN0b3IzKC0xLCAxLCAxKSwgUXVhdGVybmlvbi5JZGVudGl0eSgpLCBWZWN0b3IzLlplcm8oKSk7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgbm9kZSBpcyBhIFwibm9vcFwiIHRyYW5zZm9ybSBub2RlLCB1c3VhbGx5IGluc2VydGVkIGJ5IHRoZSBnbFRGIGxvYWRlciB0byBjb3JyZWN0IGhhbmRlZG5lc3MuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElzTm9vcE5vZGUobm9kZTogTm9kZSwgdXNlUmlnaHRIYW5kZWRTeXN0ZW06IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFuc2Zvcm1cclxuICAgIGlmICh1c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5vZGUuZ2V0V29ybGRNYXRyaXgoKTtcclxuICAgICAgICBpZiAoIW1hdHJpeC5lcXVhbHNXaXRoRXBzaWxvbihNYXRyaXguSWRlbnRpdHlSZWFkT25seSwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbm9kZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5VG9SZWYoQ29udmVydEhhbmRlZG5lc3NNYXRyaXgsIFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuICAgICAgICBpZiAoIW1hdHJpeC5lcXVhbHNXaXRoRXBzaWxvbihNYXRyaXguSWRlbnRpdHlSZWFkT25seSwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9tZXRyeVxyXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBYnN0cmFjdE1lc2ggJiYgbm9kZS5nZW9tZXRyeSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFR5cGVkQXJyYXkgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIEFjY2Vzc29yVHlwZSwgSUFjY2Vzc29yLCBJQnVmZmVyVmlldyB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcbmltcG9ydCB7IERhdGFXcml0ZXIgfSBmcm9tIFwiLi9kYXRhV3JpdGVyXCI7XG5cbnR5cGUgVHlwZWRBcnJheUZvcmdsVEYgPSBFeGNsdWRlPFR5cGVkQXJyYXksIEZsb2F0NjRBcnJheSB8IEJpZ0ludDY0QXJyYXkgfCBCaWdVaW50NjRBcnJheT47XG5cbmludGVyZmFjZSBJUHJvcGVydHlXaXRoQnVmZmVyVmlldyB7XG4gICAgYnVmZmVyVmlldz86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gR2V0SGlnaGVzdEJ5dGVBbGlnbm1lbnQoYnl0ZUxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYnl0ZUxlbmd0aCAlIDQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxuICAgIGlmIChieXRlTGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDE7XG59XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyB0byBjZW50cmFsaXplIHRoZSBtYW5hZ2VtZW50IG9mIGJpbmFyeSBkYXRhLCBidWZmZXJWaWV3cywgYW5kIHRoZSBvYmplY3RzIHRoYXQgcmVmZXJlbmNlIHRoZW0uXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1ZmZlck1hbmFnZXIge1xuICAgIC8qKlxuICAgICAqIE1hcHMgYSBidWZmZXJWaWV3IHRvIGl0cyBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYnVmZmVyVmlld1RvRGF0YTogTWFwPElCdWZmZXJWaWV3LCBUeXBlZEFycmF5Rm9yZ2xURj4gPSBuZXcgTWFwPElCdWZmZXJWaWV3LCBUeXBlZEFycmF5Rm9yZ2xURj4oKTtcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBidWZmZXJWaWV3IHRvIGdsVEYgb2JqZWN0cyB0aGF0IHJlZmVyZW5jZSBpdCB2aWEgYSBcImJ1ZmZlclZpZXdcIiBwcm9wZXJ0eSAoZS5nLiBhY2Nlc3NvcnMsIGltYWdlcylcbiAgICAgKi9cbiAgICBwcml2YXRlIF9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzOiBNYXA8SUJ1ZmZlclZpZXcsIElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3W10+ID0gbmV3IE1hcDxJQnVmZmVyVmlldywgSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXdbXT4oKTtcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYW4gYWNjZXNzb3IgdG8gaXRzIGJ1ZmZlclZpZXdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hY2Nlc3NvclRvQnVmZmVyVmlldzogTWFwPElBY2Nlc3NvciwgSUJ1ZmZlclZpZXc+ID0gbmV3IE1hcDxJQWNjZXNzb3IsIElCdWZmZXJWaWV3PigpO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgYmluYXJ5IGJ1ZmZlciBmcm9tIHRoZSBzdG9yZWQgYnVmZmVyVmlld3MuIEFsc28gcG9wdWxhdGVzIHRoZSBidWZmZXJWaWV3cyBsaXN0LlxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3cyBUaGUgbGlzdCBvZiBidWZmZXJWaWV3cyB0byBiZSBwb3B1bGF0ZWQgd2hpbGUgd3JpdGluZyB0aGUgYmluYXJ5XG4gICAgICogQHJldHVybnMgVGhlIGJpbmFyeSBidWZmZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2VuZXJhdGVCaW5hcnkoYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10pOiBVaW50OEFycmF5IHtcbiAgICAgICAgLy8gQ29uc3RydWN0IGEgRGF0YVdyaXRlciB3aXRoIHRoZSB0b3RhbCBieXRlIGxlbmd0aCB0byBwcmV2ZW50IHJlc2l6aW5nXG4gICAgICAgIGxldCB0b3RhbEJ5dGVMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRvdGFsQnl0ZUxlbmd0aCArPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhV3JpdGVyID0gbmV3IERhdGFXcml0ZXIodG90YWxCeXRlTGVuZ3RoKTtcblxuICAgICAgICAvLyBPcmRlciB0aGUgYnVmZmVyVmlld3MgaW4gZGVzY2VuZGluZyBvcmRlciBvZiB0aGVpciBhbGlnbm1lbnQgcmVxdWlyZW1lbnRzXG4gICAgICAgIGNvbnN0IG9yZGVyZWRCdWZmZXJWaWV3cyA9IEFycmF5LmZyb20odGhpcy5fYnVmZmVyVmlld1RvRGF0YS5rZXlzKCkpLnNvcnQoKGEsIGIpID0+IEdldEhpZ2hlc3RCeXRlQWxpZ25tZW50KGIuYnl0ZUxlbmd0aCkgLSBHZXRIaWdoZXN0Qnl0ZUFsaWdubWVudChhLmJ5dGVMZW5ndGgpKTtcblxuICAgICAgICAvLyBGaWxsIGluIHRoZSBidWZmZXJWaWV3cyBsaXN0IGFuZCBtaXNzaW5nIGJ1ZmZlclZpZXcgaW5kZXggcmVmZXJlbmNlcyB3aGlsZSB3cml0aW5nIHRoZSBiaW5hcnlcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXJWaWV3IG9mIG9yZGVyZWRCdWZmZXJWaWV3cykge1xuICAgICAgICAgICAgYnVmZmVyVmlldy5ieXRlT2Zmc2V0ID0gZGF0YVdyaXRlci5ieXRlT2Zmc2V0O1xuICAgICAgICAgICAgYnVmZmVyVmlld3MucHVzaChidWZmZXJWaWV3KTtcblxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlld0luZGV4ID0gYnVmZmVyVmlld3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgICBvYmplY3QuYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdJbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YVdyaXRlci53cml0ZVR5cGVkQXJyYXkodGhpcy5fYnVmZmVyVmlld1RvRGF0YS5nZXQoYnVmZmVyVmlldykhKTtcblxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5kZWxldGUoYnVmZmVyVmlldyk7IC8vIFRyeSB0byBmcmVlIHVwIG1lbW9yeSBBU0FQXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVdyaXRlci5nZXRPdXRwdXREYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1ZmZlciB2aWV3IGJhc2VkIG9uIHRoZSBzdXBwbGllZCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gZGF0YSBhIFR5cGVkQXJyYXkgdG8gY3JlYXRlIHRoZSBidWZmZXJWaWV3IGZvclxuICAgICAqIEBwYXJhbSBieXRlU3RyaWRlIGJ5dGUgZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIGJ1ZmZlclZpZXcgZm9yIGdsVEZcbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlQnVmZmVyVmlldyhkYXRhOiBUeXBlZEFycmF5Rm9yZ2xURiwgYnl0ZVN0cmlkZT86IG51bWJlcik6IElCdWZmZXJWaWV3IHtcbiAgICAgICAgY29uc3QgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcgPSB7XG4gICAgICAgICAgICBidWZmZXI6IDAsXG4gICAgICAgICAgICBieXRlT2Zmc2V0OiB1bmRlZmluZWQsIC8vIGJ5dGVPZmZzZXQgd2lsbCBiZSBzZXQgbGF0ZXIsIHdoZW4gd2Ugd3JpdGUgdGhlIGJpbmFyeSBhbmQgZGVjaWRlIGJ1ZmZlclZpZXcgb3JkZXJpbmdcbiAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgICAgIGJ5dGVTdHJpZGU6IGJ5dGVTdHJpZGUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2J1ZmZlclZpZXdUb0RhdGEuc2V0KGJ1ZmZlclZpZXcsIGRhdGEpO1xuICAgICAgICByZXR1cm4gYnVmZmVyVmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGFjY2Vzc29yIGJhc2VkIG9uIHRoZSBzdXBwbGllZCBhcmd1bWVudHMgYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGJ1ZmZlclZpZXdcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlldyBUaGUgZ2xURiBidWZmZXJWaWV3IHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBhY2Nlc3NvclxuICAgICAqIEBwYXJhbSBjb21wb25lbnRUeXBlIFRoZSBkYXRhdHlwZSBvZiBjb21wb25lbnRzIGluIHRoZSBhdHRyaWJ1dGVcbiAgICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiBhdHRyaWJ1dGVzIHJlZmVyZW5jZWQgYnkgdGhpcyBhY2Nlc3NvclxuICAgICAqIEBwYXJhbSBieXRlT2Zmc2V0IFRoZSBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBidWZmZXJWaWV3IGluIGJ5dGVzXG4gICAgICogQHBhcmFtIG1pbk1heCBNaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlIG9mIGVhY2ggY29tcG9uZW50IGluIHRoaXMgYXR0cmlidXRlXG4gICAgICogQHBhcmFtIG5vcm1hbGl6ZWQgU3BlY2lmaWVzIHdoZXRoZXIgaW50ZWdlciBkYXRhIHZhbHVlcyBhcmUgbm9ybWFsaXplZCBiZWZvcmUgdXNhZ2VcbiAgICAgKiBAcmV0dXJucyBhY2Nlc3NvciBmb3IgZ2xURlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVBY2Nlc3NvcihcbiAgICAgICAgYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcsXG4gICAgICAgIHR5cGU6IEFjY2Vzc29yVHlwZSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogQWNjZXNzb3JDb21wb25lbnRUeXBlLFxuICAgICAgICBjb3VudDogbnVtYmVyLFxuICAgICAgICBieXRlT2Zmc2V0PzogbnVtYmVyLFxuICAgICAgICBtaW5NYXg/OiB7IG1pbjogbnVtYmVyW107IG1heDogbnVtYmVyW10gfSxcbiAgICAgICAgbm9ybWFsaXplZD86IGJvb2xlYW5cbiAgICApOiBJQWNjZXNzb3Ige1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICBjb25zdCBhY2Nlc3NvcjogSUFjY2Vzc29yID0ge1xuICAgICAgICAgICAgYnVmZmVyVmlldzogdW5kZWZpbmVkLCAvLyBidWZmZXJWaWV3IHdpbGwgYmUgc2V0IHRvIGEgcmVhbCBpbmRleCBsYXRlciwgb25jZSB3ZSB3cml0ZSB0aGUgYmluYXJ5IGFuZCBkZWNpZGUgYnVmZmVyVmlldyBvcmRlcmluZ1xuICAgICAgICAgICAgY29tcG9uZW50VHlwZTogY29tcG9uZW50VHlwZSxcbiAgICAgICAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBtaW46IG1pbk1heD8ubWluLFxuICAgICAgICAgICAgbWF4OiBtaW5NYXg/Lm1heCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQ6IG5vcm1hbGl6ZWQsXG4gICAgICAgICAgICBieXRlT2Zmc2V0OiBieXRlT2Zmc2V0LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEJ1ZmZlclZpZXcoYWNjZXNzb3IsIGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5zZXQoYWNjZXNzb3IsIGJ1ZmZlclZpZXcpO1xuICAgICAgICByZXR1cm4gYWNjZXNzb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBhIGJ1ZmZlclZpZXcgdG8gYSBnbFRGIG9iamVjdCB0aGF0IHJlZmVyZW5jZXMgaXRcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBnbFRGIG9iamVjdFxuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3IFRoZSBidWZmZXJWaWV3IHRvIGFzc2lnblxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRCdWZmZXJWaWV3KG9iamVjdDogSVByb3BlcnR5V2l0aEJ1ZmZlclZpZXcsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KSB7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgcHJvcGVydGllcy5wdXNoKG9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBidWZmZXIgdmlldyBmcm9tIHRoZSBiaW5hcnkgZGF0YSwgYXMgd2VsbCBhcyBmcm9tIGFsbCBpdHMga25vd24gcmVmZXJlbmNlc1xuICAgICAqIEBwYXJhbSBidWZmZXJWaWV3IHRoZSBidWZmZXJWaWV3IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVCdWZmZXJWaWV3KGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3KTtcbiAgICAgICAgZm9yIChjb25zdCBvYmplY3Qgb2YgcHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0LmJ1ZmZlclZpZXc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmRlbGV0ZShidWZmZXJWaWV3KTtcbiAgICAgICAgdGhpcy5fYnVmZmVyVmlld1RvUHJvcGVydGllcy5kZWxldGUoYnVmZmVyVmlldyk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc29yVG9CdWZmZXJWaWV3LmZvckVhY2goKGJ2LCBhY2Nlc3NvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGJ2ID09PSBidWZmZXJWaWV3KSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbGx5LCByZW1vdmUgYnl0ZU9mZnNldCBmcm9tIGFjY2Vzc29yIHJlZmVyZW5jaW5nIHRoaXMgYnVmZmVyVmlld1xuICAgICAgICAgICAgICAgIGlmIChhY2Nlc3Nvci5ieXRlT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFjY2Vzc29yLmJ5dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29yVG9CdWZmZXJWaWV3LmRlbGV0ZShhY2Nlc3Nvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCdWZmZXJWaWV3KGFjY2Vzc29yOiBJQWNjZXNzb3IpOiBJQnVmZmVyVmlldyB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9hY2Nlc3NvclRvQnVmZmVyVmlldy5nZXQoYWNjZXNzb3IpO1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICByZXR1cm4gYnVmZmVyVmlldyE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb3BlcnRpZXNXaXRoQnVmZmVyVmlldyhidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IElQcm9wZXJ0eVdpdGhCdWZmZXJWaWV3W10ge1xuICAgICAgICB0aGlzLl92ZXJpZnlCdWZmZXJWaWV3KGJ1ZmZlclZpZXcpO1xuICAgICAgICB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLnNldChidWZmZXJWaWV3LCB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLmdldChidWZmZXJWaWV3KSA/PyBbXSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJWaWV3VG9Qcm9wZXJ0aWVzLmdldChidWZmZXJWaWV3KSE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERhdGEoYnVmZmVyVmlldzogSUJ1ZmZlclZpZXcpOiBUeXBlZEFycmF5Rm9yZ2xURiB7XG4gICAgICAgIHRoaXMuX3ZlcmlmeUJ1ZmZlclZpZXcoYnVmZmVyVmlldyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJWaWV3VG9EYXRhLmdldChidWZmZXJWaWV3KSE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdmVyaWZ5QnVmZmVyVmlldyhidWZmZXJWaWV3PzogSUJ1ZmZlclZpZXcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCB8fCAhdGhpcy5fYnVmZmVyVmlld1RvRGF0YS5oYXMoYnVmZmVyVmlldykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnVmZmVyVmlldyAke2J1ZmZlclZpZXd9IG5vdCBmb3VuZCBpbiBCdWZmZXJNYW5hZ2VyLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGJhYnlsb25qcy9hdmFpbGFibGUgKi9cclxuaW1wb3J0IHR5cGUgeyBUeXBlZEFycmF5IH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuXHJcbmNvbnN0IFR5cGVkQXJyYXlUb1dyaXRlTWV0aG9kID0gbmV3IE1hcDxGdW5jdGlvbiwgKGRhdGFWaWV3OiBEYXRhVmlldywgYnl0ZU9mZnNldDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSA9PiB2b2lkPihbXHJcbiAgICBbSW50OEFycmF5LCAoZCwgYiwgdikgPT4gZC5zZXRJbnQ4KGIsIHYpXSxcclxuICAgIFtVaW50OEFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50OChibywgdildLFxyXG4gICAgW1VpbnQ4Q2xhbXBlZEFycmF5LCAoZHYsIGJvLCB2KSA9PiBkdi5zZXRVaW50OChibywgdildLFxyXG4gICAgW0ludDE2QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEludDE2KGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbVWludDE2QXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldFVpbnQxNihibywgdiwgdHJ1ZSldLFxyXG4gICAgW0ludDMyQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldEludDMyKGJvLCB2LCB0cnVlKV0sXHJcbiAgICBbVWludDMyQXJyYXksIChkdiwgYm8sIHYpID0+IGR2LnNldFVpbnQzMihibywgdiwgdHJ1ZSldLFxyXG4gICAgW0Zsb2F0MzJBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0RmxvYXQzMihibywgdiwgdHJ1ZSldLFxyXG4gICAgW0Zsb2F0NjRBcnJheSwgKGR2LCBibywgdikgPT4gZHYuc2V0RmxvYXQ2NChibywgdiwgdHJ1ZSldLFxyXG5dKTtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIERhdGFXcml0ZXIge1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogVWludDhBcnJheTtcclxuICAgIHByaXZhdGUgX2RhdGFWaWV3OiBEYXRhVmlldztcclxuICAgIHByaXZhdGUgX2J5dGVPZmZzZXQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgd3JpdGVUeXBlZEFycmF5KHZhbHVlOiBFeGNsdWRlPFR5cGVkQXJyYXksIEJpZ0ludDY0QXJyYXkgfCBCaWdVaW50NjRBcnJheT4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIodmFsdWUuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc2V0TWV0aG9kID0gVHlwZWRBcnJheVRvV3JpdGVNZXRob2QuZ2V0KHZhbHVlLmNvbnN0cnVjdG9yKSE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRNZXRob2QodGhpcy5fZGF0YVZpZXcsIHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSB2YWx1ZS5CWVRFU19QRVJfRUxFTUVOVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGJ5dGVMZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBieXRlT2Zmc2V0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5dGVPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE91dHB1dERhdGEoKTogVWludDhBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMuX2RhdGEuYnVmZmVyLCAwLCB0aGlzLl9ieXRlT2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVVSW50OCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDEpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQ4KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50OCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDEpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEludDgodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQrKztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd3JpdGVJbnQxNihlbnRyeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDIpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEludDE2KHRoaXMuX2J5dGVPZmZzZXQsIGVudHJ5LCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlVUludDE2KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jaGVja0dyb3dCdWZmZXIoMik7XHJcbiAgICAgICAgdGhpcy5fZGF0YVZpZXcuc2V0VWludDE2KHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlSW50MzIoZW50cnk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRJbnQzMih0aGlzLl9ieXRlT2Zmc2V0LCBlbnRyeSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZVVJbnQzMih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDQpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldFVpbnQzMih0aGlzLl9ieXRlT2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnl0ZU9mZnNldCArPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3cml0ZUZsb2F0MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrR3Jvd0J1ZmZlcig0KTtcclxuICAgICAgICB0aGlzLl9kYXRhVmlldy5zZXRGbG9hdDMyKHRoaXMuX2J5dGVPZmZzZXQsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9ieXRlT2Zmc2V0ICs9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdyaXRlRmxvYXQ2NCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tHcm93QnVmZmVyKDgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFWaWV3LnNldEZsb2F0NjQodGhpcy5fYnl0ZU9mZnNldCwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J5dGVPZmZzZXQgKz0gODtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jaGVja0dyb3dCdWZmZXIoYnl0ZUxlbmd0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmV3Qnl0ZUxlbmd0aCA9IHRoaXMuYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGg7XHJcbiAgICAgICAgaWYgKG5ld0J5dGVMZW5ndGggPiB0aGlzLl9kYXRhLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IG5ldyBVaW50OEFycmF5KG5ld0J5dGVMZW5ndGggKiAyKTtcclxuICAgICAgICAgICAgbmV3RGF0YS5zZXQodGhpcy5fZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgSUFuaW1hdGlvbiwgSU5vZGUsIElCdWZmZXJWaWV3LCBJQWNjZXNzb3IsIElBbmltYXRpb25TYW1wbGVyLCBJQW5pbWF0aW9uQ2hhbm5lbCB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24sIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBBY2Nlc3NvclR5cGUsIEFjY2Vzc29yQ29tcG9uZW50VHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMywgUXVhdGVybmlvbiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb25LZXkgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbktleVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25LZXlcIjtcclxuXHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2xpZ2h0XCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyTWFuYWdlciB9IGZyb20gXCIuL2J1ZmZlck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2V0QWNjZXNzb3JFbGVtZW50Q291bnQsIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24sIFJvdGF0ZTE4MFksIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24gfSBmcm9tIFwiLi9nbFRGVXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEludGVyZmFjZSB0byBzdG9yZSBhbmltYXRpb24gZGF0YS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBfSUFuaW1hdGlvbkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBLZXlmcmFtZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHM6IG51bWJlcltdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBWYWx1ZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBvdXRwdXRzOiBudW1iZXJbXVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRpb24gaW50ZXJwb2xhdGlvbiBkYXRhLlxyXG4gICAgICovXHJcbiAgICBzYW1wbGVySW50ZXJwb2xhdGlvbjogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIE1pbmltdW0ga2V5ZnJhbWUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGlucHV0c01pbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIGtleWZyYW1lIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBpbnB1dHNNYXg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIF9JQW5pbWF0aW9uSW5mbyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgY2hhbm5lbCBmb3IgdGhlIGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBnbFRGIGFjY2Vzc29yIHR5cGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUuVkVDMyB8IEFjY2Vzc29yVHlwZS5WRUM0IHwgQWNjZXNzb3JUeXBlLlNDQUxBUjtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGlmIHF1YXRlcm5pb25zIHNob3VsZCBiZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEVudW0gZm9yIGhhbmRsaW5nIGluIHRhbmdlbnQgYW5kIG91dCB0YW5nZW50LlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5lbnVtIF9UYW5nZW50VHlwZSB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IGlucHV0IHRhbmdlbnRzIGFyZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBJTlRBTkdFTlQsXHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGF0IG91dHB1dCB0YW5nZW50cyBhcmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgT1VUVEFOR0VOVCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBnZW5lcmF0aW5nIGdsVEYgYW5pbWF0aW9uIGRhdGEgZnJvbSBCYWJ5bG9uSlMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgX0dMVEZBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSBub2RlIGlzIHRyYW5zZm9ybWFibGUgLSBpZSBoYXMgcHJvcGVydGllcyBpdCBzaG91bGQgYmUgcGFydCBvZiBhbmltYXRpb24gb2YgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvbk5vZGUgdGhlIG5vZGUgdG8gdGVzdFxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBjYW4gYmUgYW5pbWF0ZWQsIGZhbHNlIG90aGVyd2lzZS4gRmFsc2UgaWYgdGhlIHBhcmFtZXRlciBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uTm9kZSAmJiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhIHx8IGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIENyZWF0ZXMgZ2xURiBjaGFubmVsIGFuaW1hdGlvbiBmcm9tIEJhYnlsb25KUyBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblRyYW5zZm9ybU5vZGUgLSBCYWJ5bG9uSlMgbWVzaC5cclxuICAgICAqIEBwYXJhbSBhbmltYXRpb24gLSBhbmltYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggLSBUaGUgdGFyZ2V0IGFuaW1hdGlvbiBjaGFubmVsLlxyXG4gICAgICogQHBhcmFtIHVzZVF1YXRlcm5pb24gLSBTcGVjaWZpZXMgaWYgcXVhdGVybmlvbnMgYXJlIHVzZWQuXHJcbiAgICAgKiBAcmV0dXJucyBudWxsYWJsZSBJQW5pbWF0aW9uRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlclxyXG4gICAgKTogTnVsbGFibGU8X0lBbmltYXRpb25EYXRhPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRzOiBudW1iZXJbXVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUZyYW1lcyA9IGFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk1heEtleUZyYW1lcyA9IF9HTFRGQW5pbWF0aW9uLl9DYWxjdWxhdGVNaW5NYXhLZXlGcmFtZXMoa2V5RnJhbWVzKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbk9yQmFrZSA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VJbnRlcnBvbGF0aW9uKGtleUZyYW1lcywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25PckJha2UuaW50ZXJwb2xhdGlvblR5cGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJha2VBbmltYXRpb24gPSBpbnRlcnBvbGF0aW9uT3JCYWtlLnNob3VsZEJha2VBbmltYXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQmFrZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5NYXhLZXlGcmFtZXMubWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcy5tYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbiA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSIHx8IGludGVycG9sYXRpb24gPT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApIHtcclxuICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQ3JlYXRlTGluZWFyT3JTdGVwQW5pbWF0aW9uKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCBhbmltYXRpb24sIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBpbnB1dHMsIG91dHB1dHMsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uLCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZUJha2VkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTWF4S2V5RnJhbWVzLm1heCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbk1heEtleUZyYW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dHMubGVuZ3RoICYmIG91dHB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IF9JQW5pbWF0aW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IGlucHV0cyxcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiBvdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXJJbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01pbjogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5taW4gOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5taW4gLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0c01heDogc2hvdWxkQmFrZUFuaW1hdGlvbiA/IG1pbk1heEtleUZyYW1lcy5tYXggOiBUb29scy5GbG9hdFJvdW5kKG1pbk1heEtleUZyYW1lcy5tYXggLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlQW5pbWF0aW9uSW5mbyhhbmltYXRpb246IEFuaW1hdGlvbik6IE51bGxhYmxlPF9JQW5pbWF0aW9uSW5mbz4ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogTnVsbGFibGU8QW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg+ID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGxldCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSBhbmltYXRpb24udGFyZ2V0UHJvcGVydHkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHN3aXRjaCAocHJvcGVydHlbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3NpdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlRSQU5TTEFUSU9OO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJvdGF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicm90YXRpb25RdWF0ZXJuaW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFBY2Nlc3NvclR5cGUgPSBBY2Nlc3NvclR5cGUuVkVDNDtcclxuICAgICAgICAgICAgICAgIHVzZVF1YXRlcm5pb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmZsdWVuY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgZGF0YUFjY2Vzc29yVHlwZSA9IEFjY2Vzc29yVHlwZS5TQ0FMQVI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5FcnJvcihgVW5zdXBwb3J0ZWQgYW5pbWF0YWJsZSBwcm9wZXJ0eSAke3Byb3BlcnR5WzBdfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGRhdGFBY2Nlc3NvclR5cGU6IGRhdGFBY2Nlc3NvclR5cGUsIHVzZVF1YXRlcm5pb246IHVzZVF1YXRlcm5pb24gfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5FcnJvcihcImFuaW1hdGlvbiBjaGFubmVsIHRhcmdldCBwYXRoIGFuZCBkYXRhIGFjY2Vzc29yIHR5cGUgY291bGQgYmUgZGVkdWNlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmltYXRpb25zIGZyb20gdGhlIHRyYW5zZm9ybSBub2RlIGFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTm9kZVxyXG4gICAgICogQHBhcmFtIHJ1bnRpbWVHTFRGQW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gaWRsZUdMVEZBbmltYXRpb25zXHJcbiAgICAgKiBAcGFyYW0gbm9kZU1hcFxyXG4gICAgICogQHBhcmFtIG5vZGVzXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyTWFuYWdlclxyXG4gICAgICogQHBhcmFtIGJ1ZmZlclZpZXdzXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3JzXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uU2FtcGxlUmF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9DcmVhdGVOb2RlQW5pbWF0aW9uRnJvbU5vZGVBbmltYXRpb25zKFxyXG4gICAgICAgIGJhYnlsb25Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHJ1bnRpbWVHTFRGQW5pbWF0aW9uOiBJQW5pbWF0aW9uLFxyXG4gICAgICAgIGlkbGVHTFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIG5vZGVzOiBJTm9kZVtdLFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgdXNlUmlnaHRIYW5kZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoX0dMVEZBbmltYXRpb24uX0lzVHJhbnNmb3JtYWJsZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRXhwb3J0QW5pbWF0aW9uICYmICFzaG91bGRFeHBvcnRBbmltYXRpb24oYW5pbWF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVJpZ2h0SGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBDcmVhdGUgaW5kaXZpZHVhbCBtb3JwaCBhbmltYXRpb25zIGZyb20gdGhlIG1lc2gncyBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25Ob2RlXHJcbiAgICAgKiBAcGFyYW0gcnVudGltZUdMVEZBbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBpZGxlR0xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU1vcnBoVGFyZ2V0QW5pbWF0aW9uRnJvbU1vcnBoVGFyZ2V0QW5pbWF0aW9ucyhcclxuICAgICAgICBiYWJ5bG9uTm9kZTogTm9kZSxcclxuICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSxcclxuICAgICAgICBub2RlTWFwOiBNYXA8Tm9kZSwgbnVtYmVyPixcclxuICAgICAgICBub2RlczogSU5vZGVbXSxcclxuICAgICAgICBidWZmZXJNYW5hZ2VyOiBCdWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgIGJ1ZmZlclZpZXdzOiBJQnVmZmVyVmlld1tdLFxyXG4gICAgICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyLFxyXG4gICAgICAgIHVzZVJpZ2h0SGFuZGVkOiBib29sZWFuLFxyXG4gICAgICAgIHNob3VsZEV4cG9ydEFuaW1hdGlvbj86IChhbmltYXRpb246IEFuaW1hdGlvbikgPT4gYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGdsVEZBbmltYXRpb246IElBbmltYXRpb247XHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uTm9kZS5tb3JwaFRhcmdldE1hbmFnZXI7XHJcbiAgICAgICAgICAgIGlmIChtb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0ID0gbW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBtb3JwaFRhcmdldC5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHthbmltYXRpb24ubmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZsdWVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVBlclNlY29uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5lbmFibGVCbGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEFuaW1hdGlvbktleXM6IElBbmltYXRpb25LZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzID0gYW5pbWF0aW9uLmdldEtleXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYW5pbWF0aW9uS2V5cy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uS2V5ID0gYW5pbWF0aW9uS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbW9ycGhUYXJnZXRNYW5hZ2VyLm51bVRhcmdldHM7ICsraykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25LZXlzLnB1c2goYW5pbWF0aW9uS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbktleXMucHVzaCh7IGZyYW1lOiBhbmltYXRpb25LZXkuZnJhbWUsIHZhbHVlOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbi5zZXRLZXlzKGNvbWJpbmVkQW5pbWF0aW9uS2V5cywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbWJpbmVkQW5pbWF0aW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5oYXNSdW5uaW5nUnVudGltZUFuaW1hdGlvbnMgPyBydW50aW1lR0xURkFuaW1hdGlvbiA6IGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbk5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VSaWdodEhhbmRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkbGVHTFRGQW5pbWF0aW9ucy5wdXNoKGdsVEZBbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBDcmVhdGUgbm9kZSBhbmQgbW9ycGggYW5pbWF0aW9ucyBmcm9tIHRoZSBhbmltYXRpb24gZ3JvdXBzXHJcbiAgICAgKiBAcGFyYW0gYmFieWxvblNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZ2xURkFuaW1hdGlvbnNcclxuICAgICAqIEBwYXJhbSBub2RlTWFwXHJcbiAgICAgKiBAcGFyYW0gbm9kZXNcclxuICAgICAqIEBwYXJhbSBidWZmZXJNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyVmlld3NcclxuICAgICAqIEBwYXJhbSBhY2Nlc3NvcnNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25TYW1wbGVSYXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZU5vZGVBbmRNb3JwaEFuaW1hdGlvbkZyb21BbmltYXRpb25Hcm91cHMoXHJcbiAgICAgICAgYmFieWxvblNjZW5lOiBTY2VuZSxcclxuICAgICAgICBnbFRGQW5pbWF0aW9uczogSUFuaW1hdGlvbltdLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgbGVmdEhhbmRlZE5vZGVzOiBTZXQ8Tm9kZT4sXHJcbiAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uPzogKGFuaW1hdGlvbjogQW5pbWF0aW9uKSA9PiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbjtcclxuICAgICAgICBpZiAoYmFieWxvblNjZW5lLmFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cHMgPSBiYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbkdyb3VwIG9mIGFuaW1hdGlvbkdyb3Vwcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhBbmltYXRpb25zOiBNYXA8TWVzaCwgTWFwPE1vcnBoVGFyZ2V0LCBBbmltYXRpb24+PiA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZUFuaW1hdGlvbnM6IE1hcDxNZXNoLCBBbmltYXRpb24+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhBbmltYXRpb25NZXNoZXM6IFNldDxNZXNoPiA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwRnJhbWVEaWZmID0gYW5pbWF0aW9uR3JvdXAudG8gLSBhbmltYXRpb25Hcm91cC5mcm9tO1xyXG4gICAgICAgICAgICAgICAgZ2xURkFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBhbmltYXRpb25Hcm91cC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBzYW1wbGVyczogW10sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRBbmltYXRpb24gPSBhbmltYXRpb25Hcm91cC50YXJnZXRlZEFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0QW5pbWF0aW9uLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSB0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRFeHBvcnRBbmltYXRpb24gJiYgIXNob3VsZEV4cG9ydEFuaW1hdGlvbihhbmltYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udmVydFRvUmlnaHRIYW5kZWQgPSBsZWZ0SGFuZGVkTm9kZXMuaGFzKHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSB8fCAodGFyZ2V0Lmxlbmd0aCA9PT0gMSAmJiB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0WzBdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uSW5mbyA9IF9HTFRGQW5pbWF0aW9uLl9EZWR1Y2VBbmltYXRpb25JbmZvKHRhcmdldEFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFieWxvblRyYW5zZm9ybU5vZGUgPSB0aGlzLl9Jc1RyYW5zZm9ybWFibGUodGFyZ2V0KSA/IHRhcmdldCA6IHRoaXMuX0lzVHJhbnNmb3JtYWJsZSh0YXJnZXRbMF0pID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbi5uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkluZm8uZGF0YUFjY2Vzc29yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby51c2VRdWF0ZXJuaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0IHx8ICh0YXJnZXQubGVuZ3RoID09PSAxICYmIHRhcmdldFswXSBpbnN0YW5jZW9mIE1vcnBoVGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25JbmZvID0gX0dMVEZBbmltYXRpb24uX0RlZHVjZUFuaW1hdGlvbkluZm8odGFyZ2V0QW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTW9ycGhUYXJnZXQgPSB0YXJnZXQgaW5zdGFuY2VvZiBNb3JwaFRhcmdldCA/IHRhcmdldCA6ICh0YXJnZXRbMF0gYXMgTW9ycGhUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Nb3JwaFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25Nb3JwaFRhcmdldE1hbmFnZXIgPSBiYWJ5bG9uU2NlbmUubW9ycGhUYXJnZXRNYW5hZ2Vycy5maW5kKChtb3JwaFRhcmdldE1hbmFnZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9ycGhUYXJnZXRNYW5hZ2VyLmdldFRhcmdldChqKSA9PT0gYmFieWxvbk1vcnBoVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gYmFieWxvblNjZW5lLm1lc2hlcy5maW5kKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1lc2ggYXMgTWVzaCkubW9ycGhUYXJnZXRNYW5hZ2VyID09PSBiYWJ5bG9uTW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBhcyBNZXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvbk1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbW9ycGhBbmltYXRpb25zLmhhcyhiYWJ5bG9uTWVzaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbnMuc2V0KGJhYnlsb25NZXNoLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhBbmltYXRpb25zLmdldChiYWJ5bG9uTWVzaCk/LnNldChiYWJ5bG9uTW9ycGhUYXJnZXQsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5hZGQoYmFieWxvbk1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlQW5pbWF0aW9ucy5zZXQoYmFieWxvbk1lc2gsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBwbGFjZSBmb3IgdGhlIEtIUl9hbmltYXRpb25fcG9pbnRlci5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb3JwaEFuaW1hdGlvbk1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gbWVzaC5tb3JwaFRhcmdldE1hbmFnZXIhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21iaW5lZEFuaW1hdGlvbkdyb3VwOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25LZXlzOiBJQW5pbWF0aW9uS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVBbmltYXRpb24gPSBzYW1wbGVBbmltYXRpb25zLmdldChtZXNoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FtcGxlQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbi5nZXRLZXlzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtQW5pbWF0aW9uS2V5cyA9IHNhbXBsZUFuaW1hdGlvbktleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIER1ZSB0byBob3cgZ2xURiBleHBlY3RzIG1vcnBoIHRhcmdldCBhbmltYXRpb24gZGF0YSB0byBiZSBmb3JtYXR0ZWQsIHdlIG5lZWQgdG8gcmVhcnJhbmdlIHRoZSBpbmRpdmlkdWFsIG1vcnBoIHRhcmdldCBhbmltYXRpb24gdHJhY2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNoIHRoYXQgd2UgaGF2ZSBhIHNpbmdsZSBhbmltYXRpb24sIHdoZXJlIGEgZ2l2ZW4ga2V5ZnJhbWUgaW5wdXQgdmFsdWUgaGFzIHN1Y2Nlc3NpdmUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBtb3JwaCB0YXJnZXQgYmVsb25naW5nIHRvIHRoZSBtYW5hZ2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBkbyB0aGlzIHZpYSBjb25zdHJ1Y3RpbmcgYSBuZXcgQW5pbWF0aW9uIHRyYWNrLCBhbmQgaW50ZXJsZWF2aW5nIHRoZSBmcmFtZXMgb2YgZWFjaCBtb3JwaCB0YXJnZXQgYW5pbWF0aW9uIHRyYWNrIGluIHRoZSBjdXJyZW50IEFuaW1hdGlvbiBHcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSByZXVzZSB0aGUgQmFieWxvbiBBbmltYXRpb24gZGF0YSBzdHJ1Y3R1cmUgZm9yIGVhc2Ugb2YgaGFuZGxpbmcgZXhwb3J0IG9mIGN1YmljIHNwbGluZSBhbmltYXRpb24ga2V5cywgYW5kIHRvIHJldXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZyBfR0xURkFuaW1hdGlvbi5BZGRBbmltYXRpb24gY29kZXBhdGggd2l0aCBtaW5pbWFsIG1vZGlmaWNhdGlvbiwgaG93ZXZlciB0aGUgY29uc3RydWN0ZWQgQmFieWxvbiBBbmltYXRpb24gaXMgTk9UIGludGVuZGVkIGZvciB1c2UgaW4tZW5naW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BbmltYXRpb25LZXlzOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldCA9IG1vcnBoVGFyZ2V0TWFuYWdlci5nZXRUYXJnZXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25zQnlNb3JwaFRhcmdldCA9IG1vcnBoQW5pbWF0aW9ucy5nZXQobWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uc0J5TW9ycGhUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JwaFRhcmdldEFuaW1hdGlvbiA9IGFuaW1hdGlvbnNCeU1vcnBoVGFyZ2V0LmdldChtb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tYmluZWRBbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRBbmltYXRpb25Hcm91cCA9IG5ldyBBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YW5pbWF0aW9uR3JvdXAubmFtZX1fJHttZXNoLm5hbWV9X01vcnBoV2VpZ2h0QW5pbWF0aW9uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZmx1ZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmZyYW1lUGVyU2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmxvb3BNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0QW5pbWF0aW9uLmVuYWJsZUJsZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaChtb3JwaFRhcmdldEFuaW1hdGlvbi5nZXRLZXlzKClbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbktleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZTogYW5pbWF0aW9uR3JvdXAuZnJvbSArIChhbmltYXRpb25Hcm91cEZyYW1lRGlmZiAvIG51bUFuaW1hdGlvbktleXMpICogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb3JwaFRhcmdldC5pbmZsdWVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0uaW5UYW5nZW50ID8gMCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IHNhbXBsZUFuaW1hdGlvbktleXNbMF0ub3V0VGFuZ2VudCA/IDAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEFuaW1hdGlvbkdyb3VwIS5zZXRLZXlzKGFuaW1hdGlvbktleXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkluZm8gPSBfR0xURkFuaW1hdGlvbi5fRGVkdWNlQW5pbWF0aW9uSW5mbyhjb21iaW5lZEFuaW1hdGlvbkdyb3VwISk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2FuaW1hdGlvbkdyb3VwLm5hbWV9XyR7bWVzaC5uYW1lfV9Nb3JwaFdlaWdodEFuaW1hdGlvbmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGQW5pbWF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQW5pbWF0aW9uR3JvdXAhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5kYXRhQWNjZXNzb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSW5mby5hbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25JbmZvLnVzZVF1YXRlcm5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXI/Lm51bVRhcmdldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChnbFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBnbFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsVEZBbmltYXRpb25zLnB1c2goZ2xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FkZEFuaW1hdGlvbihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ2xURkFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBkYXRhQWNjZXNzb3JUeXBlOiBBY2Nlc3NvclR5cGUsXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG5vZGVNYXA6IE1hcDxOb2RlLCBudW1iZXI+LFxyXG4gICAgICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICAgICAgYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10sXHJcbiAgICAgICAgYWNjZXNzb3JzOiBJQWNjZXNzb3JbXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuLFxyXG4gICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IG51bWJlcixcclxuICAgICAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbixcclxuICAgICAgICBtb3JwaEFuaW1hdGlvbkNoYW5uZWxzPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25EYXRhID0gX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmltYXRpb24oYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24sIGFuaW1hdGlvblNhbXBsZVJhdGUpO1xyXG4gICAgICAgIGxldCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldztcclxuICAgICAgICBsZXQgYWNjZXNzb3I6IElBY2Nlc3NvcjtcclxuICAgICAgICBsZXQga2V5ZnJhbWVBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRhdGFBY2Nlc3NvckluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvblNhbXBsZXI6IElBbmltYXRpb25TYW1wbGVyO1xyXG4gICAgICAgIGxldCBhbmltYXRpb25DaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbDtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogTm93IHRoYXQgd2UgaGF2ZSB0aGUgZ2xURiBjb252ZXJ0ZWQgbW9ycGggdGFyZ2V0IGFuaW1hdGlvbiBkYXRhLFxyXG4gICAgICAgICAgICAgKiB3ZSBjYW4gcmVtb3ZlIHJlZHVuZGFudCBpbnB1dCBkYXRhIHNvIHRoYXQgd2UgaGF2ZSBuIGlucHV0IGZyYW1lcyxcclxuICAgICAgICAgICAgICogYW5kIG1vcnBoQW5pbWF0aW9uQ2hhbm5lbHMgKiBuIG91dHB1dCBmcmFtZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChtb3JwaEFuaW1hdGlvbkNoYW5uZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbnB1dDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChhbmltYXRpb25EYXRhLmlucHV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElucHV0ID0gYW5pbWF0aW9uRGF0YS5pbnB1dHMuc2hpZnQoKSE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICUgbW9ycGhBbmltYXRpb25DaGFubmVscyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0lucHV0cy5wdXNoKGN1cnJlbnRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhLmlucHV0cyA9IG5ld0lucHV0cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbm9kZU1hcC5nZXQoYmFieWxvblRyYW5zZm9ybU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5IGZyYW1lcy5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXREYXRhID0gbmV3IEZsb2F0MzJBcnJheShhbmltYXRpb25EYXRhLmlucHV0cyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoaW5wdXREYXRhKTtcclxuICAgICAgICAgICAgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5TQ0FMQVIsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgYW5pbWF0aW9uRGF0YS5pbnB1dHMubGVuZ3RoLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgICAgIG1pbjogW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWluXSxcclxuICAgICAgICAgICAgICAgIG1heDogW2FuaW1hdGlvbkRhdGEuaW5wdXRzTWF4XSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAga2V5ZnJhbWVBY2Nlc3NvckluZGV4ID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGNvbnZlcnNpb25zIG9uIGtleWVkIHZhbHVlcyB3aGlsZSBhbHNvIGJ1aWxkaW5nIHRoZWlyIGJ1ZmZlci5cclxuICAgICAgICAgICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICAgICAgY29uc3QgZXVsZXJWZWMzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0NhbWVyYSA9IGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGluc3RhbmNlb2YgQ2FtZXJhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudENvdW50ID0gR2V0QWNjZXNzb3JFbGVtZW50Q291bnQoZGF0YUFjY2Vzc29yVHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGFuaW1hdGlvbkRhdGEub3V0cHV0cy5sZW5ndGggKiBlbGVtZW50Q291bnQpO1xyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhLm91dHB1dHMuZm9yRWFjaChmdW5jdGlvbiAob3V0cHV0OiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dFRvV3JpdGU6IG51bWJlcltdID0gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT046XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihvdXRwdXQsIDAsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRUb1dyaXRlID0gbmV3IEFycmF5KDQpOyAvLyBXaWxsIG5lZWQgNCwgbm90IDMsIGZvciBhIHF1YXRlcm5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3RvcjMuRnJvbUFycmF5VG9SZWYob3V0cHV0LCAwLCBldWxlclZlYzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Gcm9tRXVsZXJWZWN0b3JUb1JlZihldWxlclZlYzMsIHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbihyb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm90YXRlMTgwWShyb3RhdGlvblF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24udG9BcnJheShvdXRwdXRUb1dyaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhLnNldChvdXRwdXRUb1dyaXRlLCBpbmRleCAqIGVsZW1lbnRDb3VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1ZmZlciB2aWV3IGFuZCBhY2Nlc3NvciBmb3Iga2V5ZWQgdmFsdWVzLlxyXG4gICAgICAgICAgICBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KG91dHB1dERhdGEpO1xyXG4gICAgICAgICAgICBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgZGF0YUFjY2Vzc29yVHlwZSwgQWNjZXNzb3JDb21wb25lbnRUeXBlLkZMT0FULCBhbmltYXRpb25EYXRhLm91dHB1dHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICBkYXRhQWNjZXNzb3JJbmRleCA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHNhbXBsZXJcclxuICAgICAgICAgICAgYW5pbWF0aW9uU2FtcGxlciA9IHtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRpb246IGFuaW1hdGlvbkRhdGEuc2FtcGxlckludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoga2V5ZnJhbWVBY2Nlc3NvckluZGV4LFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBkYXRhQWNjZXNzb3JJbmRleCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZ2xURkFuaW1hdGlvbi5zYW1wbGVycy5wdXNoKGFuaW1hdGlvblNhbXBsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGNoYW5uZWxcclxuICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbCA9IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXI6IGdsVEZBbmltYXRpb24uc2FtcGxlcnMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGdsVEZBbmltYXRpb24uY2hhbm5lbHMucHVzaChhbmltYXRpb25DaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBiYWtlZCBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIEJhYnlsb25KUyBtZXNoXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggYW5pbWF0aW9uIHRhcmdldCBjaGFubmVsXHJcbiAgICAgKiBAcGFyYW0gbWluRnJhbWUgbWluaW11bSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIEBwYXJhbSBtYXhGcmFtZSBtYXhpbXVtIGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogQHBhcmFtIGZwcyBmcmFtZXMgcGVyIHNlY29uZCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2FtcGxlUmF0ZVxyXG4gICAgICogQHBhcmFtIGlucHV0cyBpbnB1dCBrZXkgZnJhbWVzIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSBvdXRwdXRzIG91dHB1dCBrZXkgZnJhbWUgZGF0YSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzXHJcbiAgICAgKiBAcGFyYW0gbWluTWF4RnJhbWVzLm1pblxyXG4gICAgICogQHBhcmFtIG1pbk1heEZyYW1lcy5tYXhcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIHNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBzaG91bGQgYmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlQmFrZWRBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIG1pbkZyYW1lOiBudW1iZXIsXHJcbiAgICAgICAgbWF4RnJhbWU6IG51bWJlcixcclxuICAgICAgICBmcHM6IG51bWJlcixcclxuICAgICAgICBzYW1wbGVSYXRlOiBudW1iZXIsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIG1pbk1heEZyYW1lczogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgdmFsdWU6IG51bWJlciB8IFZlY3RvcjMgfCBRdWF0ZXJuaW9uO1xyXG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb25DYWNoZTogUXVhdGVybmlvbiA9IFF1YXRlcm5pb24uSWRlbnRpdHkoKTtcclxuICAgICAgICBsZXQgcHJldmlvdXNUaW1lOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgICAgICBsZXQgdGltZTogbnVtYmVyO1xyXG4gICAgICAgIGxldCBtYXhVc2VkRnJhbWU6IE51bGxhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgICAgIGxldCBjdXJyS2V5RnJhbWU6IE51bGxhYmxlPElBbmltYXRpb25LZXk+ID0gbnVsbDtcclxuICAgICAgICBsZXQgbmV4dEtleUZyYW1lOiBOdWxsYWJsZTxJQW5pbWF0aW9uS2V5PiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByZXZLZXlGcmFtZTogTnVsbGFibGU8SUFuaW1hdGlvbktleT4gPSBudWxsO1xyXG4gICAgICAgIGxldCBlbmRGcmFtZTogTnVsbGFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICAgICAgbWluTWF4RnJhbWVzLm1pbiA9IFRvb2xzLkZsb2F0Um91bmQobWluRnJhbWUgLyBmcHMpO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlGcmFtZXMgPSBhbmltYXRpb24uZ2V0S2V5cygpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0ga2V5RnJhbWVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGVuZEZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgY3VycktleUZyYW1lID0ga2V5RnJhbWVzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGkgKyAxIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0S2V5RnJhbWUgPSBrZXlGcmFtZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzICYmIGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMobmV4dEtleUZyYW1lLnZhbHVlKSkgfHwgY3VycktleUZyYW1lLnZhbHVlID09PSBuZXh0S2V5RnJhbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGZpcnN0IGZyYW1lIHRvIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRGcmFtZSA9IGN1cnJLZXlGcmFtZS5mcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZEZyYW1lID0gbmV4dEtleUZyYW1lLmZyYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYXQgdGhlIGxhc3Qga2V5IGZyYW1lXHJcbiAgICAgICAgICAgICAgICBwcmV2S2V5RnJhbWUgPSBrZXlGcmFtZXNbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJyS2V5RnJhbWUudmFsdWUuZXF1YWxzICYmIGN1cnJLZXlGcmFtZS52YWx1ZS5lcXVhbHMocHJldktleUZyYW1lLnZhbHVlKSkgfHwgY3VycktleUZyYW1lLnZhbHVlID09PSBwcmV2S2V5RnJhbWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRnJhbWUgPSBtYXhGcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5kRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGYgPSBjdXJyS2V5RnJhbWUuZnJhbWU7IGYgPD0gZW5kRnJhbWU7IGYgKz0gc2FtcGxlUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBUb29scy5GbG9hdFJvdW5kKGYgLyBmcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSBwcmV2aW91c1RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VXNlZEZyYW1lID0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcE1vZGU6IGFuaW1hdGlvbi5sb29wTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYW5pbWF0aW9uLl9pbnRlcnBvbGF0ZShmLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9TZXRJbnRlcnBvbGF0ZWRWYWx1ZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdmFsdWUsIHRpbWUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHF1YXRlcm5pb25DYWNoZSwgaW5wdXRzLCBvdXRwdXRzLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4VXNlZEZyYW1lKSB7XHJcbiAgICAgICAgICAgIG1pbk1heEZyYW1lcy5tYXggPSBtYXhVc2VkRnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKFxyXG4gICAgICAgIGZhY3RvcjogbnVtYmVyLFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogQW5pbWF0aW9uLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApOiBWZWN0b3IzIHwgUXVhdGVybmlvbiB7XHJcbiAgICAgICAgY29uc3QgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gX0dMVEZBbmltYXRpb24uX0dldEJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIC8vIGhhbmRsZXMgc2luZ2xlIGNvbXBvbmVudCB4LCB5LCB6IG9yIHcgY29tcG9uZW50IGFuaW1hdGlvbiBieSB1c2luZyBhIGJhc2UgcHJvcGVydHkgYW5kIGFuaW1hdGluZyBvdmVyIGEgY29tcG9uZW50LlxyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gYW5pbWF0aW9uLnRhcmdldFByb3BlcnR5LnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gcHJvcGVydHkgPyBwcm9wZXJ0eVsxXSA6IFwiXCI7IC8vIHgsIHksIHosIG9yIHcgY29tcG9uZW50XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1c2VRdWF0ZXJuaW9uID8gUXVhdGVybmlvbi5Gcm9tQXJyYXkoYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlKS5ub3JtYWxpemUoKSA6IFZlY3RvcjMuRnJvbUFycmF5KGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwieFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwielwiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVtjb21wb25lbnROYW1lXSA9IGZhY3RvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3XCI6IHtcclxuICAgICAgICAgICAgICAgICh2YWx1ZSBhcyBRdWF0ZXJuaW9uKS53ID0gZmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoYGdsVEZBbmltYXRpb246IFVuc3VwcG9ydGVkIGNvbXBvbmVudCBuYW1lIFwiJHtjb21wb25lbnROYW1lfVwiIWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1NldEludGVycG9sYXRlZFZhbHVlKFxyXG4gICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBOb2RlLFxyXG4gICAgICAgIHZhbHVlOiBudW1iZXIgfCBWZWN0b3IzIHwgUXVhdGVybmlvbixcclxuICAgICAgICB0aW1lOiBudW1iZXIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIHF1YXRlcm5pb25DYWNoZTogUXVhdGVybmlvbixcclxuICAgICAgICBpbnB1dHM6IG51bWJlcltdLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGNhY2hlVmFsdWU6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyO1xyXG4gICAgICAgIGlucHV0cy5wdXNoKHRpbWUpO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKFt2YWx1ZSBhcyBudW1iZXJdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kYXRhVHlwZSA9PT0gQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKHZhbHVlIGFzIG51bWJlciwgYmFieWxvblRyYW5zZm9ybU5vZGUsIGFuaW1hdGlvbiwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIHVzZVF1YXRlcm5pb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgcXVhdGVybmlvbkNhY2hlID0gdmFsdWUgYXMgUXVhdGVybmlvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlVmFsdWUgPSB2YWx1ZSBhcyBWZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgUXVhdGVybmlvbi5Sb3RhdGlvbllhd1BpdGNoUm9sbFRvUmVmKGNhY2hlVmFsdWUueSwgY2FjaGVWYWx1ZS54LCBjYWNoZVZhbHVlLnosIHF1YXRlcm5pb25DYWNoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHF1YXRlcm5pb25DYWNoZS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNjYWxpbmcgYW5kIHBvc2l0aW9uIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBjYWNoZVZhbHVlID0gdmFsdWUgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKGNhY2hlVmFsdWUuYXNBcnJheSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGxpbmVhciBhbmltYXRpb24gZnJvbSB0aGUgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGlucHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIHRpbWVzXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZCBpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVMaW5lYXJPclN0ZXBBbmltYXRpb24oXHJcbiAgICAgICAgYmFieWxvblRyYW5zZm9ybU5vZGU6IE5vZGUsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBBbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGlucHV0czogbnVtYmVyW10sXHJcbiAgICAgICAgb3V0cHV0czogbnVtYmVyW11bXSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleUZyYW1lIG9mIGFuaW1hdGlvbi5nZXRLZXlzKCkpIHtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goa2V5RnJhbWUuZnJhbWUgLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpOyAvLyBrZXlmcmFtZXMgaW4gc2Vjb25kcy5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZEtleWZyYW1lVmFsdWUoa2V5RnJhbWUsIGFuaW1hdGlvbiwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLCB1c2VRdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGN1YmljIHNwbGluZSBhbmltYXRpb24gZnJvbSB0aGUgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uVHJhbnNmb3JtTm9kZSBCYWJ5bG9uSlMgbWVzaFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBCYWJ5bG9uSlMgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGlucHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIHRpbWVzXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0cyBBcnJheSB0byBzdG9yZSB0aGUga2V5IGZyYW1lIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZCBpbiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9DcmVhdGVDdWJpY1NwbGluZUFuaW1hdGlvbihcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgaW5wdXRzOiBudW1iZXJbXSxcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGFuaW1hdGlvbi5nZXRLZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5RnJhbWUpIHtcclxuICAgICAgICAgICAgaW5wdXRzLnB1c2goa2V5RnJhbWUuZnJhbWUgLyBhbmltYXRpb24uZnJhbWVQZXJTZWNvbmQpOyAvLyBrZXlmcmFtZXMgaW4gc2Vjb25kcy5cclxuICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0FkZFNwbGluZVRhbmdlbnQoX1RhbmdlbnRUeXBlLklOVEFOR0VOVCwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FLCBrZXlGcmFtZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9BZGRLZXlmcmFtZVZhbHVlKGtleUZyYW1lLCBhbmltYXRpb24sIG91dHB1dHMsIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCBiYWJ5bG9uVHJhbnNmb3JtTm9kZSwgdXNlUXVhdGVybmlvbik7XHJcblxyXG4gICAgICAgICAgICBfR0xURkFuaW1hdGlvbi5fQWRkU3BsaW5lVGFuZ2VudChfVGFuZ2VudFR5cGUuT1VUVEFOR0VOVCwgb3V0cHV0cywgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsIEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FLCBrZXlGcmFtZSwgdXNlUXVhdGVybmlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0dldEJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZShiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSwgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLCB1c2VRdWF0ZXJuaW9uOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTogbnVtYmVyW107XHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICBpZiAodXNlUXVhdGVybmlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5yb3RhdGlvblF1YXRlcm5pb247XHJcbiAgICAgICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAocSA/PyBRdWF0ZXJuaW9uLklkZW50aXR5KCkpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHI6IFZlY3RvcjMgPSAoYmFieWxvblRyYW5zZm9ybU5vZGUgYXMgVHJhbnNmb3JtTm9kZSkucm90YXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlUG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSAociA/PyBWZWN0b3IzLlplcm8oKSkuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguVFJBTlNMQVRJT04pIHtcclxuICAgICAgICAgICAgY29uc3QgcDogVmVjdG9yMyA9IChiYWJ5bG9uVHJhbnNmb3JtTm9kZSBhcyBUcmFuc2Zvcm1Ob2RlKS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgYmFzZVBvc2l0aW9uUm90YXRpb25PclNjYWxlID0gKHAgPz8gVmVjdG9yMy5aZXJvKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzY2FsZVxyXG4gICAgICAgICAgICBjb25zdCBzOiBWZWN0b3IzID0gKGJhYnlsb25UcmFuc2Zvcm1Ob2RlIGFzIFRyYW5zZm9ybU5vZGUpLnNjYWxpbmc7XHJcbiAgICAgICAgICAgIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSA9IChzID8/IFZlY3RvcjMuT25lKCkpLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhc2VQb3NpdGlvblJvdGF0aW9uT3JTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBrZXkgZnJhbWUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZVxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIG91dHB1dHNcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25UcmFuc2Zvcm1Ob2RlXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkS2V5ZnJhbWVWYWx1ZShcclxuICAgICAgICBrZXlGcmFtZTogSUFuaW1hdGlvbktleSxcclxuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbixcclxuICAgICAgICBvdXRwdXRzOiBudW1iZXJbXVtdLFxyXG4gICAgICAgIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoOiBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCxcclxuICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZTogTm9kZSxcclxuICAgICAgICB1c2VRdWF0ZXJuaW9uOiBib29sZWFuXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGU6IE51bGxhYmxlPFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyPjtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25UeXBlID0gYW5pbWF0aW9uLmRhdGFUeXBlO1xyXG4gICAgICAgIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGtleUZyYW1lLnZhbHVlLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoID09PSBBbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aC5ST1RBVElPTikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBWZWN0b3IzLkZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKGFycmF5LnksIGFycmF5LngsIGFycmF5LnopO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByb3RhdGlvblF1YXRlcm5pb24uYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dHMucHVzaCh2YWx1ZSk7IC8vIHNjYWxlICB2ZWN0b3IuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmltYXRpb25UeXBlID09PSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dHMucHVzaChba2V5RnJhbWUudmFsdWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZXMgc2luZ2xlIGNvbXBvbmVudCB4LCB5LCB6IG9yIHcgY29tcG9uZW50IGFuaW1hdGlvbiBieSB1c2luZyBhIGJhc2UgcHJvcGVydHkgYW5kIGFuaW1hdGluZyBvdmVyIGEgY29tcG9uZW50LlxyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3RhdGlvbk9yU2NhbGUgPSB0aGlzLl9Db252ZXJ0RmFjdG9yVG9WZWN0b3IzT3JRdWF0ZXJuaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIGtleUZyYW1lLnZhbHVlIGFzIG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uVHJhbnNmb3JtTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlUXVhdGVybmlvblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zUm90U2NhbGUgPSB1c2VRdWF0ZXJuaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdQb3NpdGlvblJvdGF0aW9uT3JTY2FsZSBhcyBRdWF0ZXJuaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLnksIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLngsIG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLnopLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzLnB1c2gocG9zUm90U2NhbGUuYXNBcnJheSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0cy5wdXNoKG5ld1Bvc2l0aW9uUm90YXRpb25PclNjYWxlLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvblR5cGUgPT09IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1FVQVRFUk5JT04pIHtcclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKChrZXlGcmFtZS52YWx1ZSBhcyBRdWF0ZXJuaW9uKS5ub3JtYWxpemUoKS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiZ2xURkFuaW1hdGlvbjogVW5zdXBwb3J0ZWQga2V5IGZyYW1lIHZhbHVlcyBmb3IgYW5pbWF0aW9uIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIERldGVybWluZSB0aGUgaW50ZXJwb2xhdGlvbiBiYXNlZCBvbiB0aGUga2V5IGZyYW1lc1xyXG4gICAgICogQHBhcmFtIGtleUZyYW1lc1xyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoXHJcbiAgICAgKiBAcGFyYW0gdXNlUXVhdGVybmlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfRGVkdWNlSW50ZXJwb2xhdGlvbihcclxuICAgICAgICBrZXlGcmFtZXM6IElBbmltYXRpb25LZXlbXSxcclxuICAgICAgICBhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aDogQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGgsXHJcbiAgICAgICAgdXNlUXVhdGVybmlvbjogYm9vbGVhblxyXG4gICAgKTogeyBpbnRlcnBvbGF0aW9uVHlwZTogQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb247IHNob3VsZEJha2VBbmltYXRpb246IGJvb2xlYW4gfSB7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRpb25UeXBlOiBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbiB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgc2hvdWxkQmFrZUFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBrZXk6IElBbmltYXRpb25LZXk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25DaGFubmVsVGFyZ2V0UGF0aCA9PT0gQW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGguUk9UQVRJT04gJiYgIXVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW50ZXJwb2xhdGlvblR5cGU6IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkxJTkVBUiwgc2hvdWxkQmFrZUFuaW1hdGlvbjogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGtleUZyYW1lcy5sZW5ndGg7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBrZXkgPSBrZXlGcmFtZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5UYW5nZW50IHx8IGtleS5vdXRUYW5nZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGlvblR5cGUgIT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCYWtlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLkNVQklDU1BMSU5FO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9PT0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uQ1VCSUNTUExJTkUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleS5pbnRlcnBvbGF0aW9uICYmIGtleS5pbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25LZXlJbnRlcnBvbGF0aW9uLlNURVAgJiYgaW50ZXJwb2xhdGlvblR5cGUgIT09IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVApXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25UeXBlID0gQW5pbWF0aW9uU2FtcGxlckludGVycG9sYXRpb24uTElORUFSO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCYWtlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmludGVycG9sYXRpb24gJiYga2V5LmludGVycG9sYXRpb24gPT09IEFuaW1hdGlvbktleUludGVycG9sYXRpb24uU1RFUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uVHlwZSA9IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLlNURVA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW50ZXJwb2xhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvblR5cGUgPSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5MSU5FQVI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBpbnRlcnBvbGF0aW9uVHlwZTogaW50ZXJwb2xhdGlvblR5cGUsIHNob3VsZEJha2VBbmltYXRpb246IHNob3VsZEJha2VBbmltYXRpb24gfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYW4gaW5wdXQgdGFuZ2VudCBvciBvdXRwdXQgdGFuZ2VudCB0byB0aGUgb3V0cHV0IGRhdGFcclxuICAgICAqIElmIGFuIGlucHV0IHRhbmdlbnQgb3Igb3V0cHV0IHRhbmdlbnQgaXMgbWlzc2luZywgaXQgdXNlcyB0aGUgemVybyB2ZWN0b3Igb3IgemVybyBxdWF0ZXJuaW9uXHJcbiAgICAgKiBAcGFyYW0gdGFuZ2VudFR5cGUgU3BlY2lmaWVzIHdoaWNoIHR5cGUgb2YgdGFuZ2VudCB0byBoYW5kbGUgKGluVGFuZ2VudCBvciBvdXRUYW5nZW50KVxyXG4gICAgICogQHBhcmFtIG91dHB1dHMgVGhlIGFuaW1hdGlvbiBkYXRhIGJ5IGtleWZyYW1lXHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggVGhlIHRhcmdldCBhbmltYXRpb24gY2hhbm5lbFxyXG4gICAgICogQHBhcmFtIGludGVycG9sYXRpb24gVGhlIGludGVycG9sYXRpb24gdHlwZVxyXG4gICAgICogQHBhcmFtIGtleUZyYW1lIFRoZSBrZXkgZnJhbWUgd2l0aCB0aGUgYW5pbWF0aW9uIGRhdGFcclxuICAgICAqIEBwYXJhbSB1c2VRdWF0ZXJuaW9uIFNwZWNpZmllcyBpZiBxdWF0ZXJuaW9ucyBhcmUgdXNlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQWRkU3BsaW5lVGFuZ2VudChcclxuICAgICAgICB0YW5nZW50VHlwZTogX1RhbmdlbnRUeXBlLFxyXG4gICAgICAgIG91dHB1dHM6IG51bWJlcltdW10sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGg6IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLFxyXG4gICAgICAgIGludGVycG9sYXRpb246IEFuaW1hdGlvblNhbXBsZXJJbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgIGtleUZyYW1lOiBJQW5pbWF0aW9uS2V5LFxyXG4gICAgICAgIHVzZVF1YXRlcm5pb246IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgICAgIGxldCB0YW5nZW50OiBudW1iZXJbXTtcclxuICAgICAgICBjb25zdCB0YW5nZW50VmFsdWU6IFZlY3RvcjMgfCBRdWF0ZXJuaW9uIHwgbnVtYmVyID0gdGFuZ2VudFR5cGUgPT09IF9UYW5nZW50VHlwZS5JTlRBTkdFTlQgPyBrZXlGcmFtZS5pblRhbmdlbnQgOiBrZXlGcmFtZS5vdXRUYW5nZW50O1xyXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uID09PSBBbmltYXRpb25TYW1wbGVySW50ZXJwb2xhdGlvbi5DVUJJQ1NQTElORSkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlJPVEFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZVF1YXRlcm5pb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9ICh0YW5nZW50VmFsdWUgYXMgUXVhdGVybmlvbikuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gdGFuZ2VudFZhbHVlIGFzIFZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBRdWF0ZXJuaW9uLlJvdGF0aW9uWWF3UGl0Y2hSb2xsKGFycmF5LnksIGFycmF5LngsIGFycmF5LnopLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5pbWF0aW9uQ2hhbm5lbFRhcmdldFBhdGggPT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLldFSUdIVFMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gW3RhbmdlbnRWYWx1ZSBhcyBudW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50ID0gWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnQgPSAodGFuZ2VudFZhbHVlIGFzIFZlY3RvcjMpLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudCA9IFswLCAwLCAwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3V0cHV0cy5wdXNoKHRhbmdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBrZXkgZnJhbWVzJyBmcmFtZSB2YWx1ZXNcclxuICAgICAqIEBwYXJhbSBrZXlGcmFtZXMgYW5pbWF0aW9uIGtleSBmcmFtZXNcclxuICAgICAqIEByZXR1cm5zIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGtleSBmcmFtZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ2FsY3VsYXRlTWluTWF4S2V5RnJhbWVzKGtleUZyYW1lczogSUFuaW1hdGlvbktleVtdKTogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSB7XHJcbiAgICAgICAgbGV0IG1pbjogbnVtYmVyID0gSW5maW5pdHk7XHJcbiAgICAgICAgbGV0IG1heDogbnVtYmVyID0gLUluZmluaXR5O1xyXG4gICAgICAgIGtleUZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXlGcmFtZSkge1xyXG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIGtleUZyYW1lLmZyYW1lKTtcclxuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBrZXlGcmFtZS5mcmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IG1pbjogbWluLCBtYXg6IG1heCB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdldE1pbWVUeXBlIH0gZnJvbSBcImNvcmUvTWlzYy9maWxlVG9vbHNcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGhvbGRpbmcgYW5kIGRvd25sb2FkaW5nIGdsVEYgZmlsZSBkYXRhXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkRhdGEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIGZpbGUgbmFtZSBhcyB0aGUga2V5IGFuZCBpdHMgZGF0YSBhcyB0aGUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGVzOiB7IFtmaWxlTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgZmlsZXMgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGdsVEZGaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvd25sb2FkcyB0aGUgZ2xURiBkYXRhIGFzIGZpbGVzIGJhc2VkIG9uIHRoZWlyIG5hbWVzIGFuZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkb3dubG9hZEZpbGVzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZmlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpbGVzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbdmFsdWVdLCB7IHR5cGU6IEdldE1pbWVUeXBlKGtleSkgfSk7XHJcbiAgICAgICAgICAgIFRvb2xzLkRvd25sb2FkKGJsb2IsIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHtcclxuICAgIElCdWZmZXJWaWV3LFxyXG4gICAgSUFjY2Vzc29yLFxyXG4gICAgSU5vZGUsXHJcbiAgICBJU2NlbmUsXHJcbiAgICBJTWVzaCxcclxuICAgIElNYXRlcmlhbCxcclxuICAgIElUZXh0dXJlLFxyXG4gICAgSUltYWdlLFxyXG4gICAgSVNhbXBsZXIsXHJcbiAgICBJQW5pbWF0aW9uLFxyXG4gICAgSU1lc2hQcmltaXRpdmUsXHJcbiAgICBJQnVmZmVyLFxyXG4gICAgSUdMVEYsXHJcbiAgICBJVGV4dHVyZUluZm8sXHJcbiAgICBJU2tpbixcclxuICAgIElDYW1lcmEsXHJcbn0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NvckNvbXBvbmVudFR5cGUsIEFjY2Vzc29yVHlwZSwgQ2FtZXJhVHlwZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBJbmRpY2VzQXJyYXksIE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVG1wVmVjdG9ycywgUXVhdGVybmlvbiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgTWF0cml4IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTdWJNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL3N1Yk1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZWRNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2luc3RhbmNlZE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBCYXNlVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9iYXNlVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2VuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgRW5naW5lU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2VuZ2luZVN0b3JlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElHTFRGRXhwb3J0ZXJFeHRlbnNpb25WMiB9IGZyb20gXCIuL2dsVEZFeHBvcnRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBHTFRGTWF0ZXJpYWxFeHBvcnRlciB9IGZyb20gXCIuL2dsVEZNYXRlcmlhbEV4cG9ydGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUV4cG9ydE9wdGlvbnMgfSBmcm9tIFwiLi9nbFRGU2VyaWFsaXplclwiO1xyXG5pbXBvcnQgeyBHTFRGRGF0YSB9IGZyb20gXCIuL2dsVEZEYXRhXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uLFxyXG4gICAgQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbixcclxuICAgIERhdGFBcnJheVRvVWludDhBcnJheSxcclxuICAgIEdldEFjY2Vzc29yVHlwZSxcclxuICAgIEdldEF0dHJpYnV0ZVR5cGUsXHJcbiAgICBHZXRNaW5NYXgsXHJcbiAgICBHZXRQcmltaXRpdmVNb2RlLFxyXG4gICAgSXNUcmlhbmdsZUZpbGxNb2RlLFxyXG4gICAgSXNDaGlsZENvbGxhcHNpYmxlLFxyXG4gICAgRmxvYXRzTmVlZDE2Qml0SW50ZWdlcixcclxuICAgIElzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUsXHJcbiAgICBJbmRpY2VzQXJyYXlUb1R5cGVkU3ViYXJyYXksXHJcbiAgICBHZXRWZXJ0ZXhCdWZmZXJJbmZvLFxyXG4gICAgQ29sbGFwc2VDaGlsZEludG9QYXJlbnQsXHJcbiAgICBSb3RhdGUxODBZLFxyXG4gICAgRGVmYXVsdFRyYW5zbGF0aW9uLFxyXG4gICAgRGVmYXVsdFNjYWxlLFxyXG4gICAgRGVmYXVsdFJvdGF0aW9uLFxyXG4gICAgQ29udmVydFRvUmlnaHRIYW5kZWRUcmFuc2Zvcm1NYXRyaXgsXHJcbn0gZnJvbSBcIi4vZ2xURlV0aWxpdGllc1wiO1xyXG5pbXBvcnQgeyBJc05vb3BOb2RlIH0gZnJvbSBcIi4uLy4uL2V4cG9ydFV0aWxzXCI7XHJcbmltcG9ydCB7IEJ1ZmZlck1hbmFnZXIgfSBmcm9tIFwiLi9idWZmZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IE11bHRpTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbXVsdGlNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBQQlJCYXNlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvUEJSL3BickJhc2VNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMsIEFyZUluZGljZXMzMkJpdHMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgQm9uZSwgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lc1wiO1xyXG5pbXBvcnQgeyBfR0xURkFuaW1hdGlvbiB9IGZyb20gXCIuL2dsVEZBbmltYXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldCB9IGZyb20gXCJjb3JlL01vcnBoXCI7XHJcbmltcG9ydCB7IEJ1aWxkTW9ycGhUYXJnZXRCdWZmZXJzIH0gZnJvbSBcIi4vZ2xURk1vcnBoVGFyZ2V0c1V0aWxpdGllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElNb3JwaFRhcmdldERhdGEgfSBmcm9tIFwiLi9nbFRGTW9ycGhUYXJnZXRzVXRpbGl0aWVzXCI7XHJcbmltcG9ydCB7IExpbmVzTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9saW5lc01lc2hcIjtcclxuaW1wb3J0IHsgR3JlYXNlZExpbmVCYXNlTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9HcmVhc2VkTGluZS9ncmVhc2VkTGluZUJhc2VNZXNoXCI7XHJcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBUYXJnZXRDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL3RhcmdldENhbWVyYVwiO1xyXG5pbXBvcnQgeyBFcHNpbG9uIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRGF0YVdyaXRlciB9IGZyb20gXCIuL2RhdGFXcml0ZXJcIjtcclxuaW1wb3J0IHsgT3BlblBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9vcGVucGJyTWF0ZXJpYWxcIjtcclxuXHJcbmNsYXNzIEV4cG9ydGVyU3RhdGUge1xyXG4gICAgLy8gQmFieWxvbiBpbmRpY2VzIGFycmF5LCBzdGFydCwgY291bnQsIG9mZnNldCwgZmxpcCAtPiBnbFRGIGFjY2Vzc29yIGluZGV4XHJcbiAgICBwcml2YXRlIF9pbmRpY2VzQWNjZXNzb3JNYXAgPSBuZXcgTWFwPE51bGxhYmxlPEluZGljZXNBcnJheT4sIE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+Pj4+PigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gYnVmZmVyIC0+IGdsVEYgYnVmZmVyIHZpZXdcclxuICAgIHByaXZhdGUgX3ZlcnRleEJ1ZmZlclZpZXdNYXAgPSBuZXcgTWFwPEJ1ZmZlciwgSUJ1ZmZlclZpZXc+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiB2ZXJ0ZXggYnVmZmVyLCBzdGFydCwgY291bnQgLT4gZ2xURiBhY2Nlc3NvciBpbmRleFxyXG4gICAgcHJpdmF0ZSBfdmVydGV4QWNjZXNzb3JNYXAgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVtYXBwZWRCdWZmZXJWaWV3ID0gbmV3IE1hcDxCdWZmZXIsIE1hcDxWZXJ0ZXhCdWZmZXIsIElCdWZmZXJWaWV3Pj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9tZXNoTW9ycGhUYXJnZXRNYXAgPSBuZXcgTWFwPEFic3RyYWN0TWVzaCwgSU1vcnBoVGFyZ2V0RGF0YVtdPigpO1xyXG5cclxuICAgIHByaXZhdGUgX3ZlcnRleE1hcENvbG9yQWxwaGEgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgYm9vbGVhbj4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRlZE5vZGVzID0gbmV3IFNldDxOb2RlPigpO1xyXG5cclxuICAgIC8vIEJhYnlsb24gbWVzaCAtPiBnbFRGIG1lc2ggaW5kZXhcclxuICAgIHByaXZhdGUgX21lc2hNYXAgPSBuZXcgTWFwPEFic3RyYWN0TWVzaCwgbnVtYmVyPigpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbiwgd2FzQWRkZWRCeU5vb3BOb2RlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9SaWdodEhhbmRlZCA9IGNvbnZlcnRUb1JpZ2h0SGFuZGVkO1xyXG4gICAgICAgIHRoaXMud2FzQWRkZWRCeU5vb3BOb2RlID0gd2FzQWRkZWRCeU5vb3BOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2FzQWRkZWRCeU5vb3BOb2RlOiBib29sZWFuO1xyXG5cclxuICAgIC8vIE9ubHkgdXNlZCB3aGVuIGNvbnZlcnRUb1JpZ2h0SGFuZGVkIGlzIHRydWUuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMgPSBuZXcgTWFwPEJ1ZmZlciwgVWludDhBcnJheT4oKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBmbGlwOiBib29sZWFuKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLmdldChpbmRpY2VzKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KT8uZ2V0KG9mZnNldCk/LmdldChmbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SW5kaWNlc0FjY2Vzc29yKGluZGljZXM6IE51bGxhYmxlPEluZGljZXNBcnJheT4sIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBmbGlwOiBib29sZWFuLCBhY2Nlc3NvckluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWFwMSA9IHRoaXMuX2luZGljZXNBY2Nlc3Nvck1hcC5nZXQoaW5kaWNlcyk7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+Pj4oKTtcclxuICAgICAgICAgICAgdGhpcy5faW5kaWNlc0FjY2Vzc29yTWFwLnNldChpbmRpY2VzLCBtYXAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXAyID0gbWFwMS5nZXQoc3RhcnQpO1xyXG4gICAgICAgIGlmICghbWFwMikge1xyXG4gICAgICAgICAgICBtYXAyID0gbmV3IE1hcDxudW1iZXIsIE1hcDxudW1iZXIsIE1hcDxib29sZWFuLCBudW1iZXI+Pj4oKTtcclxuICAgICAgICAgICAgbWFwMS5zZXQoc3RhcnQsIG1hcDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcDMgPSBtYXAyLmdldChjb3VudCk7XHJcbiAgICAgICAgaWYgKCFtYXAzKSB7XHJcbiAgICAgICAgICAgIG1hcDMgPSBuZXcgTWFwPG51bWJlciwgTWFwPGJvb2xlYW4sIG51bWJlcj4+KCk7XHJcbiAgICAgICAgICAgIG1hcDIuc2V0KGNvdW50LCBtYXAzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXA0ID0gbWFwMy5nZXQob2Zmc2V0KTtcclxuICAgICAgICBpZiAoIW1hcDQpIHtcclxuICAgICAgICAgICAgbWFwNCA9IG5ldyBNYXA8Ym9vbGVhbiwgbnVtYmVyPigpO1xyXG4gICAgICAgICAgICBtYXAzLnNldChvZmZzZXQsIG1hcDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwNC5zZXQoZmxpcCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2hFeHBvcnRlZE5vZGUobm9kZTogTm9kZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZXhwb3J0ZWROb2Rlcy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZWROb2Rlcy5hZGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb2Rlc1NldCgpOiBTZXQ8Tm9kZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBvcnRlZE5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyKTogSUJ1ZmZlclZpZXcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhCdWZmZXJWaWV3TWFwLmdldChidWZmZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCBidWZmZXJWaWV3OiBJQnVmZmVyVmlldyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlclZpZXdNYXAuc2V0KGJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJlbWFwcGVkQnVmZmVyVmlldyhidWZmZXI6IEJ1ZmZlciwgdmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIGJ1ZmZlclZpZXc6IElCdWZmZXJWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LnNldChidWZmZXIsIG5ldyBNYXA8VmVydGV4QnVmZmVyLCBJQnVmZmVyVmlldz4oKSk7XHJcbiAgICAgICAgdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpIS5zZXQodmVydGV4QnVmZmVyLCBidWZmZXJWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVtYXBwZWRCdWZmZXJWaWV3KGJ1ZmZlcjogQnVmZmVyLCB2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IElCdWZmZXJWaWV3IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVtYXBwZWRCdWZmZXJWaWV3LmdldChidWZmZXIpPy5nZXQodmVydGV4QnVmZmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhBY2Nlc3Nvck1hcC5nZXQodmVydGV4QnVmZmVyKT8uZ2V0KHN0YXJ0KT8uZ2V0KGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VmVydGV4QWNjZXNzb3IodmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIHN0YXJ0OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIGFjY2Vzc29ySW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXAxID0gdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuZ2V0KHZlcnRleEJ1ZmZlcik7XHJcbiAgICAgICAgaWYgKCFtYXAxKSB7XHJcbiAgICAgICAgICAgIG1hcDEgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdmVydGV4QWNjZXNzb3JNYXAuc2V0KHZlcnRleEJ1ZmZlciwgbWFwMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWFwMiA9IG1hcDEuZ2V0KHN0YXJ0KTtcclxuICAgICAgICBpZiAoIW1hcDIpIHtcclxuICAgICAgICAgICAgbWFwMiA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIG1hcDEuc2V0KHN0YXJ0LCBtYXAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcDIuc2V0KGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXI6IFZlcnRleEJ1ZmZlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIYXNWZXJ0ZXhDb2xvckFscGhhKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBoYXNBbHBoYTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhNYXBDb2xvckFscGhhLnNldCh2ZXJ0ZXhCdWZmZXIsIGhhc0FscGhhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWVzaChtZXNoOiBBYnN0cmFjdE1lc2gpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoTWFwLmdldChtZXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWVzaChtZXNoOiBBYnN0cmFjdE1lc2gsIG1lc2hJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVzaE1hcC5zZXQobWVzaCwgbWVzaEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmluZE1vcnBoRGF0YVRvTWVzaChtZXNoOiBBYnN0cmFjdE1lc2gsIG1vcnBoRGF0YTogSU1vcnBoVGFyZ2V0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IHRoaXMuX21lc2hNb3JwaFRhcmdldE1hcC5nZXQobWVzaCkgfHwgW107XHJcbiAgICAgICAgdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLnNldChtZXNoLCBtb3JwaFRhcmdldHMpO1xyXG4gICAgICAgIGlmIChtb3JwaFRhcmdldHMuaW5kZXhPZihtb3JwaERhdGEpID09PSAtMSkge1xyXG4gICAgICAgICAgICBtb3JwaFRhcmdldHMucHVzaChtb3JwaERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW9ycGhUYXJnZXRzRnJvbU1lc2gobWVzaDogQWJzdHJhY3RNZXNoKTogSU1vcnBoVGFyZ2V0RGF0YVtdIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaE1vcnBoVGFyZ2V0TWFwLmdldChtZXNoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgR0xURkV4cG9ydGVyIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBfZ2xURjogSUdMVEYgPSB7XHJcbiAgICAgICAgYXNzZXQ6IHsgZ2VuZXJhdG9yOiBgQmFieWxvbi5qcyB2JHtFbmdpbmUuVmVyc2lvbn1gLCB2ZXJzaW9uOiBcIjIuMFwiIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfYW5pbWF0aW9uczogSUFuaW1hdGlvbltdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2FjY2Vzc29yczogSUFjY2Vzc29yW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfYnVmZmVyVmlld3M6IElCdWZmZXJWaWV3W10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfY2FtZXJhczogSUNhbWVyYVtdID0gW107XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2ltYWdlczogSUltYWdlW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxzOiBJTWF0ZXJpYWxbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9tZXNoZXM6IElNZXNoW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfbm9kZXM6IElOb2RlW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfc2FtcGxlcnM6IElTYW1wbGVyW10gPSBbXTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfc2NlbmVzOiBJU2NlbmVbXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF9za2luczogSVNraW5bXSA9IFtdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IF90ZXh0dXJlczogSVRleHR1cmVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfYmFieWxvblNjZW5lOiBTY2VuZTtcclxuICAgIHB1YmxpYyByZWFkb25seSBfaW1hZ2VEYXRhOiB7IFtmaWxlTmFtZTogc3RyaW5nXTogQmxvYiB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYWtlZCBhbmltYXRpb24gc2FtcGxlIHJhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uU2FtcGxlUmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX29wdGlvbnM6IFJlcXVpcmVkPElFeHBvcnRPcHRpb25zPjtcclxuXHJcbiAgICBwdWJsaWMgX3Nob3VsZFVzZUdsYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfbWF0ZXJpYWxFeHBvcnRlciA9IG5ldyBHTFRGTWF0ZXJpYWxFeHBvcnRlcih0aGlzKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9leHRlbnNpb25zOiB7IFtuYW1lOiBzdHJpbmddOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIgfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBfYnVmZmVyTWFuYWdlciA9IG5ldyBCdWZmZXJNYW5hZ2VyKCk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2hvdWxkRXhwb3J0Tm9kZU1hcCA9IG5ldyBNYXA8Tm9kZSwgYm9vbGVhbj4oKTtcclxuXHJcbiAgICAvLyBCYWJ5bG9uIG5vZGUgLT4gZ2xURiBub2RlIGluZGV4XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2RlTWFwID0gbmV3IE1hcDxOb2RlLCBudW1iZXI+KCk7XHJcblxyXG4gICAgLy8gQmFieWxvbiBtYXRlcmlhbCAtPiBnbFRGIG1hdGVyaWFsIGluZGV4XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsTWFwID0gbmV3IE1hcDxNYXRlcmlhbCwgbnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FtZXJhc01hcCA9IG5ldyBNYXA8Q2FtZXJhLCBJQ2FtZXJhPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbm9kZXNDYW1lcmFNYXAgPSBuZXcgTWFwPElDYW1lcmEsIElOb2RlW10+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9za2luTWFwID0gbmV3IE1hcDxTa2VsZXRvbiwgSVNraW4+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ub2Rlc1NraW5NYXAgPSBuZXcgTWFwPElTa2luLCBJTm9kZVtdPigpO1xyXG5cclxuICAgIC8vIEEgbWF0ZXJpYWwgaW4gdGhpcyBzZXQgcmVxdWlyZXMgVVZzXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX21hdGVyaWFsTmVlZHNVVnNTZXQgPSBuZXcgU2V0PE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FeHRlbnNpb25OYW1lcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRXh0ZW5zaW9uRmFjdG9yaWVzOiB7IFtuYW1lOiBzdHJpbmddOiAoZXhwb3J0ZXI6IEdMVEZFeHBvcnRlcikgPT4gSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyIH0gPSB7fTtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FeHRlbnNpb25PcmRlcnM6IHsgW25hbWU6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgIHByaXZhdGUgX0FwcGx5RXh0ZW5zaW9uPFQ+KFxyXG4gICAgICAgIG5vZGU6IFQsXHJcbiAgICAgICAgZXh0ZW5zaW9uczogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyW10sXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyLCBub2RlOiBUKSA9PiBQcm9taXNlPE51bGxhYmxlPFQ+PiB8IHVuZGVmaW5lZFxyXG4gICAgKTogUHJvbWlzZTxOdWxsYWJsZTxUPj4ge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSBleHRlbnNpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb21pc2UgPSBhY3Rpb25Bc3luYyhleHRlbnNpb25zW2luZGV4XSwgbm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghY3VycmVudFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX0FwcGx5RXh0ZW5zaW9uKG5vZGUsIGV4dGVuc2lvbnMsIGluZGV4ICsgMSwgYWN0aW9uQXN5bmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9taXNlLnRoZW4oYXN5bmMgKG5ld05vZGUpID0+IChuZXdOb2RlID8gYXdhaXQgdGhpcy5fQXBwbHlFeHRlbnNpb24obmV3Tm9kZSwgZXh0ZW5zaW9ucywgaW5kZXggKyAxLCBhY3Rpb25Bc3luYykgOiBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgIHByaXZhdGUgX0FwcGx5RXh0ZW5zaW9uczxUPihub2RlOiBULCBhY3Rpb25Bc3luYzogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyLCBub2RlOiBUKSA9PiBQcm9taXNlPE51bGxhYmxlPFQ+PiB8IHVuZGVmaW5lZCk6IFByb21pc2U8TnVsbGFibGU8VD4+IHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zOiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMucHVzaCh0aGlzLl9leHRlbnNpb25zW25hbWVdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9BcHBseUV4dGVuc2lvbihub2RlLCBleHRlbnNpb25zLCAwLCBhY3Rpb25Bc3luYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE5vZGVBc3luYyhjb250ZXh0OiBzdHJpbmcsIG5vZGU6IElOb2RlLCBiYWJ5bG9uTm9kZTogTm9kZSwgbm9kZU1hcDogTWFwPE5vZGUsIG51bWJlcj4sIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogUHJvbWlzZTxOdWxsYWJsZTxJTm9kZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmNcclxuICAgICAgICAgICAgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMgJiYgZXh0ZW5zaW9uLnBvc3RFeHBvcnROb2RlQXN5bmMoY29udGV4dCwgbm9kZSwgYmFieWxvbk5vZGUsIG5vZGVNYXAsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkLCB0aGlzLl9idWZmZXJNYW5hZ2VyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luY1xyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoY29udGV4dDogc3RyaW5nLCBtYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsKTogUHJvbWlzZTxOdWxsYWJsZTxJTWF0ZXJpYWw+PiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0FwcGx5RXh0ZW5zaW9ucyhtYXRlcmlhbCwgKGV4dGVuc2lvbiwgbm9kZSkgPT4gZXh0ZW5zaW9uLnBvc3RFeHBvcnRNYXRlcmlhbEFzeW5jICYmIGV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBc3luYyhjb250ZXh0LCBub2RlLCBiYWJ5bG9uTWF0ZXJpYWwpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhZGRpdGlvbmFsIHRleHR1cmVzIGZvciBhIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY29udGV4dCB3aGVuIGxvYWRpbmcgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gbWF0ZXJpYWwgVGhlIGdsVEYgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgVGhlIEJhYnlsb24uanMgbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIExpc3Qgb2YgYWRkaXRpb25hbCB0ZXh0dXJlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXNBc3luYyhjb250ZXh0OiBzdHJpbmcsIG1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPEJhc2VUZXh0dXJlW10+IHtcclxuICAgICAgICBjb25zdCBvdXRwdXQ6IEJhc2VUZXh0dXJlW10gPSBbXTtcclxuXHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMubWFwKGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnNpb24ucG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzQXN5bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IGF3YWl0IGV4dGVuc2lvbi5wb3N0RXhwb3J0TWF0ZXJpYWxBZGRpdGlvbmFsVGV4dHVyZXNBc3luYyhjb250ZXh0LCBtYXRlcmlhbCwgYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCguLi50ZXh0dXJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoY29udGV4dDogc3RyaW5nLCB0ZXh0dXJlSW5mbzogSVRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5wb3N0RXhwb3J0VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uLnBvc3RFeHBvcnRUZXh0dXJlKGNvbnRleHQsIHRleHR1cmVJbmZvLCBiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9leHRlbnNpb25zUG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHRoaXMuX2V4dGVuc2lvbnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnBvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb24ucG9zdEV4cG9ydE1lc2hQcmltaXRpdmUocHJpbWl0aXZlLCB0aGlzLl9idWZmZXJNYW5hZ2VyLCB0aGlzLl9hY2Nlc3NvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBfZXh0ZW5zaW9uc1ByZUdlbmVyYXRlQmluYXJ5QXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHRlbnNpb24ucHJlR2VuZXJhdGVCaW5hcnlBc3luYykge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgICAgIGF3YWl0IGV4dGVuc2lvbi5wcmVHZW5lcmF0ZUJpbmFyeUFzeW5jKHRoaXMuX2J1ZmZlck1hbmFnZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ZvckVhY2hFeHRlbnNpb25zKGFjdGlvbjogKGV4dGVuc2lvbjogSUdMVEZFeHBvcnRlckV4dGVuc2lvblYyKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbi5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHRlbnNpb25zT25FeHBvcnRpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZm9yRWFjaEV4dGVuc2lvbnMoKGV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLndhc1VzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQgfHw9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dsVEYuZXh0ZW5zaW9uc1VzZWQuaW5kZXhPZihleHRlbnNpb24ubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zVXNlZC5wdXNoKGV4dGVuc2lvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQgfHw9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nbFRGLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKGV4dGVuc2lvbi5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2xURi5leHRlbnNpb25zUmVxdWlyZWQucHVzaChleHRlbnNpb24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsVEYuZXh0ZW5zaW9ucyB8fD0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uLm9uRXhwb3J0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uLm9uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc1tuYW1lXSA9IGV4dGVuc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGJhYnlsb25TY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gRW5naW5lU3RvcmUuTGFzdENyZWF0ZWRTY2VuZSwgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uU2NlbmUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc2NlbmUgYXZhaWxhYmxlIHRvIGV4cG9ydFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JhYnlsb25TY2VuZSA9IGJhYnlsb25TY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2hvdWxkRXhwb3J0Tm9kZTogKCkgPT4gdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdWxkRXhwb3J0QW5pbWF0aW9uOiAoKSA9PiB0cnVlLFxyXG4gICAgICAgICAgICBtZXRhZGF0YVNlbGVjdG9yOiAobWV0YWRhdGEpID0+IG1ldGFkYXRhPy5nbHRmPy5leHRyYXMsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblNhbXBsZVJhdGU6IDEgLyA2MCxcclxuICAgICAgICAgICAgZXhwb3J0V2l0aG91dFdhaXRpbmdGb3JTY2VuZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cG9ydFVudXNlZFVWczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbW92ZU5vb3BSb290Tm9kZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzaENvbXByZXNzaW9uTWV0aG9kOiBcIk5vbmVcIixcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkRXh0ZW5zaW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2V4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5fZXh0ZW5zaW9uc1trZXldO1xyXG4gICAgICAgICAgICBleHRlbnNpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckV4dGVuc2lvbihuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IChleHBvcnRlcjogR0xURkV4cG9ydGVyKSA9PiBJR0xURkV4cG9ydGVyRXh0ZW5zaW9uVjIsIG9yZGVyOiBudW1iZXIgPSAxMDApOiB2b2lkIHtcclxuICAgICAgICBpZiAoR0xURkV4cG9ydGVyLlVucmVnaXN0ZXJFeHRlbnNpb24obmFtZSkpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgRXh0ZW5zaW9uIHdpdGggdGhlIG5hbWUgJHtuYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25GYWN0b3JpZXNbbmFtZV0gPSBmYWN0b3J5O1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbk9yZGVyID0gb3JkZXIgPz8gMDsgLy8gVXNlIHByb3ZpZGVkIG9yZGVyIG9yIGRlZmF1bHQgdG8gMFxyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uT3JkZXJzW25hbWVdID0gZXh0ZW5zaW9uT3JkZXI7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlY3QgcG9zaXRpb24gdG8gaW5zZXJ0IHRoZSBleHRlbnNpb24gYmFzZWQgb24gb3JkZXJcclxuICAgICAgICBsZXQgaW5zZXJ0SW5kZXggPSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbk5hbWVzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdOYW1lID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdPcmRlciA9IEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uT3JkZXJzW2V4aXN0aW5nTmFtZV07XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgb3JkZXIgaXMgbGVzcywgaW5zZXJ0IGJlZm9yZS5cclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbk9yZGVyIDwgZXhpc3RpbmdPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZFeHBvcnRlci5fRXh0ZW5zaW9uTmFtZXMuc3BsaWNlKGluc2VydEluZGV4LCAwLCBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVucmVnaXN0ZXJFeHRlbnNpb24obmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBHTFRGRXhwb3J0ZXIuX0V4dGVuc2lvbkZhY3Rvcmllc1tuYW1lXTtcclxuICAgICAgICBkZWxldGUgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25PcmRlcnNbbmFtZV07XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgR0xURkV4cG9ydGVyLl9FeHRlbnNpb25OYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2VuZXJhdGVKU09OKGJ1ZmZlckJ5dGVMZW5ndGg6IG51bWJlciwgZmlsZU5hbWU/OiBzdHJpbmcsIHByZXR0eVByaW50PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyOiBJQnVmZmVyID0geyBieXRlTGVuZ3RoOiBidWZmZXJCeXRlTGVuZ3RoIH07XHJcblxyXG4gICAgICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlcnMgPSBbYnVmZmVyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX25vZGVzICYmIHRoaXMuX25vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm5vZGVzID0gdGhpcy5fbm9kZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXNoZXMgJiYgdGhpcy5fbWVzaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLm1lc2hlcyA9IHRoaXMuX21lc2hlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NjZW5lcyAmJiB0aGlzLl9zY2VuZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYuc2NlbmVzID0gdGhpcy5fc2NlbmVzO1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNjZW5lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhbWVyYXMgJiYgdGhpcy5fY2FtZXJhcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5jYW1lcmFzID0gdGhpcy5fY2FtZXJhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlclZpZXdzICYmIHRoaXMuX2J1ZmZlclZpZXdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmJ1ZmZlclZpZXdzID0gdGhpcy5fYnVmZmVyVmlld3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnMgJiYgdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLmFjY2Vzc29ycyA9IHRoaXMuX2FjY2Vzc29ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5hbmltYXRpb25zID0gdGhpcy5fYW5pbWF0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21hdGVyaWFscyAmJiB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYubWF0ZXJpYWxzID0gdGhpcy5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZXMgJiYgdGhpcy5fdGV4dHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsVEYudGV4dHVyZXMgPSB0aGlzLl90ZXh0dXJlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NhbXBsZXJzICYmIHRoaXMuX3NhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9nbFRGLnNhbXBsZXJzID0gdGhpcy5fc2FtcGxlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9za2lucyAmJiB0aGlzLl9za2lucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5za2lucyA9IHRoaXMuX3NraW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VzICYmIHRoaXMuX2ltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xURi5pbWFnZXMgPSB0aGlzLl9pbWFnZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Nob3VsZFVzZUdsYikge1xyXG4gICAgICAgICAgICBidWZmZXIudXJpID0gZmlsZU5hbWUgKyBcIi5iaW5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcmV0dHlQcmludCA/IEpTT04uc3RyaW5naWZ5KHRoaXMuX2dsVEYsIG51bGwsIDIpIDogSlNPTi5zdHJpbmdpZnkodGhpcy5fZ2xURik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlR0xURkFzeW5jKGdsVEZQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R0xURkRhdGE+IHtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgY29uc3QganNvblRleHQgPSB0aGlzLl9nZW5lcmF0ZUpTT04oYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgsIGdsVEZQcmVmaXgsIHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBiaW4gPSBuZXcgQmxvYihbYmluYXJ5QnVmZmVyXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnbFRGRmlsZU5hbWUgPSBnbFRGUHJlZml4ICsgXCIuZ2x0ZlwiO1xyXG4gICAgICAgIGNvbnN0IGdsVEZCaW5GaWxlID0gZ2xURlByZWZpeCArIFwiLmJpblwiO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgR0xURkRhdGEoKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsVEZGaWxlTmFtZV0gPSBqc29uVGV4dDtcclxuICAgICAgICBjb250YWluZXIuZmlsZXNbZ2xURkJpbkZpbGVdID0gYmluO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2UgaW4gdGhpcy5faW1hZ2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZmlsZXNbaW1hZ2VdID0gdGhpcy5faW1hZ2VEYXRhW2ltYWdlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk6IFByb21pc2U8VWludDhBcnJheT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydFNjZW5lQXN5bmMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9leHRlbnNpb25zUHJlR2VuZXJhdGVCaW5hcnlBc3luYygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJNYW5hZ2VyLmdlbmVyYXRlQmluYXJ5KHRoaXMuX2J1ZmZlclZpZXdzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhZHMgdGhlIG51bWJlciB0byBhIG11bHRpcGxlIG9mIDRcclxuICAgICAqIEBwYXJhbSBudW0gbnVtYmVyIHRvIHBhZFxyXG4gICAgICogQHJldHVybnMgcGFkZGVkIG51bWJlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRQYWRkaW5nKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBudW0gJSA0O1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSByZW1haW5kZXIgPT09IDAgPyByZW1haW5kZXIgOiA0IC0gcmVtYWluZGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFkZGluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VuZXJhdGVHTEJBc3luYyhnbFRGUHJlZml4OiBzdHJpbmcpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkVXNlR2xiID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBiaW5hcnlCdWZmZXIgPSBhd2FpdCB0aGlzLl9nZW5lcmF0ZUJpbmFyeUFzeW5jKCk7XHJcbiAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc09uRXhwb3J0aW5nKCk7XHJcbiAgICAgICAgY29uc3QganNvblRleHQgPSB0aGlzLl9nZW5lcmF0ZUpTT04oYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBnbGJGaWxlTmFtZSA9IGdsVEZQcmVmaXggKyBcIi5nbGJcIjtcclxuICAgICAgICBjb25zdCBoZWFkZXJMZW5ndGggPSAxMjtcclxuICAgICAgICBjb25zdCBjaHVua0xlbmd0aFByZWZpeCA9IDg7XHJcbiAgICAgICAgbGV0IGpzb25MZW5ndGggPSBqc29uVGV4dC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGVuY29kZWRKc29uVGV4dDtcclxuICAgICAgICAvLyBNYWtlIHVzZSBvZiBUZXh0RW5jb2RlciB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgICAgICBlbmNvZGVkSnNvblRleHQgPSBlbmNvZGVyLmVuY29kZShqc29uVGV4dCk7XHJcbiAgICAgICAgICAgIGpzb25MZW5ndGggPSBlbmNvZGVkSnNvblRleHQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBqc29uUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoanNvbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmluUGFkZGluZyA9IHRoaXMuX2dldFBhZGRpbmcoYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBieXRlTGVuZ3RoID0gaGVhZGVyTGVuZ3RoICsgMiAqIGNodW5rTGVuZ3RoUHJlZml4ICsganNvbkxlbmd0aCArIGpzb25QYWRkaW5nICsgYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBiaW5QYWRkaW5nO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhV3JpdGVyID0gbmV3IERhdGFXcml0ZXIoYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgIC8vIEhlYWRlclxyXG4gICAgICAgIGRhdGFXcml0ZXIud3JpdGVVSW50MzIoMHg0NjU0NmM2Nyk7IC8vIFwiZ2xURlwiXHJcbiAgICAgICAgZGF0YVdyaXRlci53cml0ZVVJbnQzMigyKTsgLy8gVmVyc2lvblxyXG4gICAgICAgIGRhdGFXcml0ZXIud3JpdGVVSW50MzIoYnl0ZUxlbmd0aCk7IC8vIFRvdGFsIGJ5dGVzIGluIGZpbGVcclxuXHJcbiAgICAgICAgLy8gSlNPTiBjaHVuayBsZW5ndGggcHJlZml4XHJcbiAgICAgICAgZGF0YVdyaXRlci53cml0ZVVJbnQzMihqc29uTGVuZ3RoICsganNvblBhZGRpbmcpO1xyXG4gICAgICAgIGRhdGFXcml0ZXIud3JpdGVVSW50MzIoMHg0ZTRmNTM0YSk7IC8vIFwiSlNPTlwiXHJcblxyXG4gICAgICAgIC8vIEpTT04gY2h1bmsgYnl0ZXNcclxuICAgICAgICBpZiAoZW5jb2RlZEpzb25UZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIElmIFRleHRFbmNvZGVyIHdhcyBhdmFpbGFibGUsIHdlIGNhbiBzaW1wbHkgY29weSB0aGUgZW5jb2RlZCBhcnJheVxyXG4gICAgICAgICAgICBkYXRhV3JpdGVyLndyaXRlVHlwZWRBcnJheShlbmNvZGVkSnNvblRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsYW5rQ2hhckNvZGUgPSBcIl9cIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25MZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhckNvZGUgPSBqc29uVGV4dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNoYXJhY3RlciBkb2Vzbid0IGZpdCBpbnRvIGEgc2luZ2xlIFVURi0xNiBjb2RlIHVuaXQsIGp1c3QgcHV0IGEgYmxhbmsgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgIT0ganNvblRleHQuY29kZVBvaW50QXQoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhV3JpdGVyLndyaXRlVUludDgoYmxhbmtDaGFyQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFXcml0ZXIud3JpdGVVSW50OChjaGFyQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEpTT04gcGFkZGluZ1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvblBhZGRpbmc7ICsraSkge1xyXG4gICAgICAgICAgICBkYXRhV3JpdGVyLndyaXRlVUludDgoMHgyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCaW5hcnkgY2h1bmsgbGVuZ3RoIHByZWZpeFxyXG4gICAgICAgIGRhdGFXcml0ZXIud3JpdGVVSW50MzIoYmluYXJ5QnVmZmVyLmJ5dGVMZW5ndGggKyBiaW5QYWRkaW5nKTtcclxuICAgICAgICBkYXRhV3JpdGVyLndyaXRlVUludDMyKDB4MDA0ZTQ5NDIpOyAvLyBcIkJJTlwiXHJcblxyXG4gICAgICAgIC8vIEJpbmFyeSBjaHVuayBieXRlc1xyXG4gICAgICAgIGRhdGFXcml0ZXIud3JpdGVUeXBlZEFycmF5KGJpbmFyeUJ1ZmZlcik7XHJcblxyXG4gICAgICAgIC8vIEJpbmFyeSBwYWRkaW5nXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5QYWRkaW5nOyArK2kpIHtcclxuICAgICAgICAgICAgZGF0YVdyaXRlci53cml0ZVVJbnQ4KDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gbmV3IEdMVEZEYXRhKCk7XHJcbiAgICAgICAgY29udGFpbmVyLmZpbGVzW2dsYkZpbGVOYW1lXSA9IG5ldyBCbG9iKFtkYXRhV3JpdGVyLmdldE91dHB1dERhdGEoKV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXROb2RlVHJhbnNmb3JtYXRpb24obm9kZTogSU5vZGUsIGJhYnlsb25UcmFuc2Zvcm1Ob2RlOiBUcmFuc2Zvcm1Ob2RlLCBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICghYmFieWxvblRyYW5zZm9ybU5vZGUuZ2V0UGl2b3RQb2ludCgpLmVxdWFsc1dpdGhFcHNpbG9uKERlZmF1bHRUcmFuc2xhdGlvbiwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihcIlBpdm90IHBvaW50cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGUgZ2xURiBzZXJpYWxpemVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYWJ5bG9uVHJhbnNmb3JtTm9kZS5wb3NpdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihEZWZhdWx0VHJhbnNsYXRpb24sIEVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdLmNvcHlGcm9tKGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFBvc2l0aW9uKHRyYW5zbGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYmFieWxvblRyYW5zZm9ybU5vZGUuc2NhbGluZy5lcXVhbHNXaXRoRXBzaWxvbihEZWZhdWx0U2NhbGUsIEVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5zY2FsaW5nLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9XHJcbiAgICAgICAgICAgIGJhYnlsb25UcmFuc2Zvcm1Ob2RlLnJvdGF0aW9uUXVhdGVybmlvbj8uY2xvbmUoKSB8fFxyXG4gICAgICAgICAgICBRdWF0ZXJuaW9uLkZyb21FdWxlckFuZ2xlcyhiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi54LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi55LCBiYWJ5bG9uVHJhbnNmb3JtTm9kZS5yb3RhdGlvbi56KTtcclxuXHJcbiAgICAgICAgaWYgKCFyb3RhdGlvblF1YXRlcm5pb24uZXF1YWxzV2l0aEVwc2lsb24oRGVmYXVsdFJvdGF0aW9uLCBFcHNpbG9uKSkge1xyXG4gICAgICAgICAgICBpZiAoY29udmVydFRvUmlnaHRIYW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkUm90YXRpb24ocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbi5ub3JtYWxpemUoKS5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGU6IElOb2RlLCBiYWJ5bG9uQ2FtZXJhOiBUYXJnZXRDYW1lcmEsIGNvbnZlcnRUb1JpZ2h0SGFuZGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2FtZXJhIHR5cGVzIHN0b3JlIHJvdGF0aW9uIGRpZmZlcmVudGx5IChlLmcuLCBBcmNSb3RhdGVDYW1lcmEgdXNlcyBhbHBoYS9iZXRhLCBvdGhlcnMgdXNlIHJvdGF0aW9uUXVhdGVybmlvbikuXHJcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgdHJhbnNmb3JtIGZyb20gdGhlIHdvcmxkIG1hdHJpeCBpbnN0ZWFkIG9mIGhhbmRsaW5nIGVhY2ggY2FzZSBzZXBhcmF0ZWx5LlxyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVG1wVmVjdG9ycy5WZWN0b3IzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IFRtcFZlY3RvcnMuUXVhdGVybmlvblswXTtcclxuICAgICAgICBjb25zdCBjYW1lcmFXb3JsZE1hdHJpeCA9IGJhYnlsb25DYW1lcmEuZ2V0V29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25DYW1lcmEucGFyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIENhbWVyYS5nZXRXb3JsZE1hdHJpeCByZXR1cm5zIGdsb2JhbCBjb29yZGluYXRlcy4gR0xURiBub2RlIG11c3QgdXNlIGxvY2FsIGNvb3JkaW5hdGVzLiBJZiBjYW1lcmEgaGFzIHBhcmVudCB3ZSBuZWVkIHRvIHVzZSBsb2NhbCB0cmFuc2xhdGlvbi9yb3RhdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgcGFyZW50SW52V29ybGRNYXRyaXggPSBiYWJ5bG9uQ2FtZXJhLnBhcmVudC5nZXRXb3JsZE1hdHJpeCgpLmludmVydFRvUmVmKFRtcFZlY3RvcnMuTWF0cml4WzBdKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhTG9jYWwgPSBjYW1lcmFXb3JsZE1hdHJpeC5tdWx0aXBseVRvUmVmKHBhcmVudEludldvcmxkTWF0cml4LCBUbXBWZWN0b3JzLk1hdHJpeFsxXSk7XHJcbiAgICAgICAgICAgIGNhbWVyYUxvY2FsLmRlY29tcG9zZSh1bmRlZmluZWQsIHJvdGF0aW9uUXVhdGVybmlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbWVyYVdvcmxkTWF0cml4LmRlY29tcG9zZSh1bmRlZmluZWQsIHJvdGF0aW9uUXVhdGVybmlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0cmFuc2xhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihEZWZhdWx0VHJhbnNsYXRpb24sIEVwc2lsb24pKSB7XHJcbiAgICAgICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih0cmFuc2xhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb252ZXJ0VG9SaWdodEhhbmRlZCkge1xyXG4gICAgICAgICAgICBDb252ZXJ0VG9SaWdodEhhbmRlZFJvdGF0aW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMZWZ0LWhhbmRlZCBzY2VuZXMgaGF2ZSBjYW1lcmFzIHRoYXQgYWx3YXlzIGZhY2UgWisgKG9wcG9zaXRlIG9mIGdsVEYncyBaLSkuXHJcbiAgICAgICAgLy8gVXNlIHNjZW5lIGNvb3JkaW5hdGUgc3lzdGVtIHJhdGhlciB0aGFuIGNvbnZlcnRUb1JpZ2h0SGFuZGVkLCBzaW5jZSBzb21lXHJcbiAgICAgICAgLy8gY2FtZXJhcyBtYXkgbm90IG5lZWQgY29udmVydFRvUmlnaHRIYW5kZWQgYnV0IHN0aWxsIG5lZWQgY29ycmVjdGlvbiB0byBmYWNlIFotLlxyXG4gICAgICAgIGlmICghdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIFJvdGF0ZTE4MFkocm90YXRpb25RdWF0ZXJuaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcm90YXRpb25RdWF0ZXJuaW9uLmVxdWFsc1dpdGhFcHNpbG9uKERlZmF1bHRSb3RhdGlvbiwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgbm9kZS5yb3RhdGlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbi5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4cG9ydCBiYWJ5bG9uIGNhbWVyYXMgdG8gZ2xURiBjYW1lcmFzXHJcbiAgICBwcml2YXRlIF9saXN0QXZhaWxhYmxlQ2FtZXJhcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhbWVyYSBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuY2FtZXJhcykge1xyXG4gICAgICAgICAgICBjb25zdCBnbFRGQ2FtZXJhOiBJQ2FtZXJhID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY2FtZXJhLm1vZGUgPT09IENhbWVyYS5QRVJTUEVDVElWRV9DQU1FUkEgPyBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFIDogQ2FtZXJhVHlwZS5PUlRIT0dSQVBISUMsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGdsVEZDYW1lcmEubmFtZSA9IGNhbWVyYS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLlBFUlNQRUNUSVZFKSB7XHJcbiAgICAgICAgICAgICAgICBnbFRGQ2FtZXJhLnBlcnNwZWN0aXZlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBjYW1lcmEuZ2V0RW5naW5lKCkuZ2V0QXNwZWN0UmF0aW8oY2FtZXJhKSxcclxuICAgICAgICAgICAgICAgICAgICB5Zm92OiBjYW1lcmEuZm92TW9kZSA9PT0gQ2FtZXJhLkZPVk1PREVfVkVSVElDQUxfRklYRUQgPyBjYW1lcmEuZm92IDogY2FtZXJhLmZvdiAqIGNhbWVyYS5nZXRFbmdpbmUoKS5nZXRBc3BlY3RSYXRpbyhjYW1lcmEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHpuZWFyOiBjYW1lcmEubWluWixcclxuICAgICAgICAgICAgICAgICAgICB6ZmFyOiBjYW1lcmEubWF4WixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2xURkNhbWVyYS50eXBlID09PSBDYW1lcmFUeXBlLk9SVEhPR1JBUEhJQykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gY2FtZXJhLm9ydGhvTGVmdCAmJiBjYW1lcmEub3J0aG9SaWdodCA/IDAuNSAqIChjYW1lcmEub3J0aG9SaWdodCAtIGNhbWVyYS5vcnRob0xlZnQpIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlcldpZHRoKCkgKiAwLjU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYWxmSGVpZ2h0ID0gY2FtZXJhLm9ydGhvQm90dG9tICYmIGNhbWVyYS5vcnRob1RvcCA/IDAuNSAqIChjYW1lcmEub3J0aG9Ub3AgLSBjYW1lcmEub3J0aG9Cb3R0b20pIDogY2FtZXJhLmdldEVuZ2luZSgpLmdldFJlbmRlckhlaWdodCgpICogMC41O1xyXG4gICAgICAgICAgICAgICAgZ2xURkNhbWVyYS5vcnRob2dyYXBoaWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeG1hZzogaGFsZldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHltYWc6IGhhbGZIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgem5lYXI6IGNhbWVyYS5taW5aLFxyXG4gICAgICAgICAgICAgICAgICAgIHpmYXI6IGNhbWVyYS5tYXhaLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFzTWFwLnNldChjYW1lcmEsIGdsVEZDYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDbGVhbnVwIHVudXNlZCBjYW1lcmFzIGFuZCBhc3NpZ24gaW5kZXggdG8gbm9kZXMuXHJcbiAgICBwcml2YXRlIF9leHBvcnRBbmRBc3NpZ25DYW1lcmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGdsdGZDYW1lcmFzID0gQXJyYXkuZnJvbSh0aGlzLl9jYW1lcmFzTWFwLnZhbHVlcygpKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdsdGZDYW1lcmEgb2YgZ2x0ZkNhbWVyYXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlZE5vZGVzID0gdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpO1xyXG4gICAgICAgICAgICBpZiAodXNlZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbWVyYXMucHVzaChnbHRmQ2FtZXJhKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB1c2VkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmNhbWVyYSA9IHRoaXMuX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb2xsZWN0cyBhbGwgc2tpbnMgaW4gYSBza2lucyBtYXAgc28gbm9kZXMgY2FuIHJlZmVyZW5jZSBpdCBkdXJpbmcgbm9kZSBwYXJzaW5nLlxyXG4gICAgcHJpdmF0ZSBfbGlzdEF2YWlsYWJsZVNrZWxldG9ucygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNrZWxldG9uIG9mIHRoaXMuX2JhYnlsb25TY2VuZS5za2VsZXRvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHNrZWxldG9uLmJvbmVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2tpbjogSVNraW4gPSB7IGpvaW50czogW10gfTtcclxuICAgICAgICAgICAgdGhpcy5fc2tpbk1hcC5zZXQoc2tlbGV0b24sIHNraW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRBbmRBc3NpZ25Ta2VsZXRvbnMobGVmdEhhbmROb2RlczogU2V0PE5vZGU+KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBza2VsZXRvbiBvZiB0aGlzLl9iYWJ5bG9uU2NlbmUuc2tlbGV0b25zKSB7XHJcbiAgICAgICAgICAgIGlmIChza2VsZXRvbi5ib25lcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNraW4gPSB0aGlzLl9za2luTWFwLmdldChza2VsZXRvbik7XHJcbiAgICAgICAgICAgIGlmIChza2luID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSBib25lcyAoam9pbnRzKSBvZiBhIHNrZWxldG9uIChza2luKSBtdXN0IGJlIGV4cG9ydGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgYXBwZWFyIGluIHZlcnRleCBhdHRyaWJ1dGVzLFxyXG4gICAgICAgICAgICAvLyB3aGljaCBpcyBpbmRpY2F0ZWQgYnkgZ2V0SW5kZXggYW5kIG1heSBub3QgbWF0Y2ggYSBib25lJ3MgaW5kZXggaW4gc2tlbGV0b24uYm9uZXNcclxuICAgICAgICAgICAgY29uc3QgYm9uZUluZGV4TWFwOiB7IFtpbmRleDogbnVtYmVyXTogQm9uZSB9ID0ge307XHJcbiAgICAgICAgICAgIGxldCBtYXhCb25lSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2VsZXRvbi5ib25lcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IHNrZWxldG9uLmJvbmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZUluZGV4ID0gYm9uZS5nZXRJbmRleCgpID8/IGk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9uZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvbmVJbmRleE1hcFtib25lSW5kZXhdID0gYm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9uZUluZGV4ID4gbWF4Qm9uZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEJvbmVJbmRleCA9IGJvbmVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBqb2ludHMgaW5kaWNlcyB0byBzY2VuZSBub2Rlcy5cclxuICAgICAgICAgICAgY29uc3QgaW52ZXJzZUJpbmRNYXRyaWNlczogTWF0cml4W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgYm9uZUluZGV4ID0gMDsgYm9uZUluZGV4IDw9IG1heEJvbmVJbmRleDsgKytib25lSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmUgPSBib25lSW5kZXhNYXBbYm9uZUluZGV4XTsgLy8gQXNzdW1lcyBubyBnYXBzIGluIGJvbmUgaW5kaWNlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtTm9kZSA9IGJvbmUuZ2V0VHJhbnNmb3JtTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gdHJhbnNmb3JtTm9kZSA/IHRoaXMuX25vZGVNYXAuZ2V0KHRyYW5zZm9ybU5vZGUpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihcIkV4cG9ydGluZyBhIGJvbmUgd2l0aG91dCBhIGxpbmtlZCB0cmFuc2Zvcm0gbm9kZSBpcyBjdXJyZW50bHkgdW5zdXBwb3J0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBUaGUgaW5kaWNlcyBtYXkgYmUgb3V0LW9mLXN5bmMgYWZ0ZXIgdGhpcyBhbmQgYnJlYWsgdGhlIHNraW5uaW5nLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2tpbi5qb2ludHMucHVzaChub2RlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvbmVNYXRyaXggPSBib25lLmdldEFic29sdXRlSW52ZXJzZUJpbmRNYXRyaXgoKS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxlZnRIYW5kTm9kZXMuaGFzKHRyYW5zZm9ybU5vZGUhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnRUb1JpZ2h0SGFuZGVkVHJhbnNmb3JtTWF0cml4KGJvbmVNYXRyaXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW52ZXJzZUJpbmRNYXRyaWNlcy5wdXNoKGJvbmVNYXRyaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOb2RlcyB0aGF0IHVzZSB0aGlzIHNraW4uXHJcbiAgICAgICAgICAgIGNvbnN0IHNraW5uZWROb2RlcyA9IHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbik7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IGV4cG9ydCB0aGUgc2tpbiBpZiBpdCBoYXMgYXQgbGVhc3Qgb25lIGpvaW50IGFuZCBpcyB1c2VkIGJ5IGEgbWVzaC5cclxuICAgICAgICAgICAgaWYgKHNraW4uam9pbnRzLmxlbmd0aCA+IDAgJiYgc2tpbm5lZE5vZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludmVyc2VCaW5kTWF0cmljZXNEYXRhID0gbmV3IEZsb2F0MzJBcnJheShpbnZlcnNlQmluZE1hdHJpY2VzLmxlbmd0aCAqIDE2KTsgLy8gQWx3YXlzIGEgNCB4IDQgbWF0cml4IG9mIDMyIGJpdCBmbG9hdFxyXG4gICAgICAgICAgICAgICAgaW52ZXJzZUJpbmRNYXRyaWNlcy5mb3JFYWNoKChtYXQ6IE1hdHJpeCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VCaW5kTWF0cmljZXNEYXRhLnNldChtYXQubSwgaW5kZXggKiAxNik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gdGhpcy5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KGludmVyc2VCaW5kTWF0cmljZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLk1BVDQsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgaW52ZXJzZUJpbmRNYXRyaWNlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHNraW4uaW52ZXJzZUJpbmRNYXRyaWNlcyA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NraW5zLnB1c2goc2tpbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2luSW5kZXggPSB0aGlzLl9za2lucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBza2lubmVkTm9kZSBvZiBza2lubmVkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2lubmVkTm9kZS5za2luID0gc2tpbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydFNjZW5lQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc2NlbmU6IElTY2VuZSA9IHsgbm9kZXM6IFtdIH07XHJcblxyXG4gICAgICAgIC8vIFNjZW5lIG1ldGFkYXRhXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYXMgPSB0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IodGhpcy5fYmFieWxvblNjZW5lLm1ldGFkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuZXh0cmFzID0gZXh0cmFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgVE9ETzpcclxuICAgICAgICAvLyAgZGVhbCB3aXRoIHRoaXMgZnJvbSB0aGUgbG9hZGVyOlxyXG4gICAgICAgIC8vICBiYWJ5bG9uTWF0ZXJpYWwuaW52ZXJ0Tm9ybWFsTWFwWCA9ICF0aGlzLl9iYWJ5bG9uU2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcbiAgICAgICAgLy8gIGJhYnlsb25NYXRlcmlhbC5pbnZlcnROb3JtYWxNYXBZID0gdGhpcy5fYmFieWxvblNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtO1xyXG5cclxuICAgICAgICBjb25zdCByb290Tm9kZXNSSCA9IG5ldyBBcnJheTxOb2RlPigpO1xyXG4gICAgICAgIGNvbnN0IHJvb3ROb2Rlc0xIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5vb3BOb2Rlc1JIID0gbmV3IEFycmF5PE5vZGU+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgcm9vdE5vZGUgb2YgdGhpcy5fYmFieWxvblNjZW5lLnJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5yZW1vdmVOb29wUm9vdE5vZGVzICYmICF0aGlzLl9vcHRpb25zLmluY2x1ZGVDb29yZGluYXRlU3lzdGVtQ29udmVyc2lvbk5vZGVzICYmIElzTm9vcE5vZGUocm9vdE5vZGUsIHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJvb3ROb29wTm9kZXNSSC5wdXNoKC4uLnJvb3ROb2RlLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdE5vZGVzUkgucHVzaChyb290Tm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb290Tm9kZXNMSC5wdXNoKHJvb3ROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdEF2YWlsYWJsZUNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9saXN0QXZhaWxhYmxlU2tlbGV0b25zKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlTEggPSBuZXcgRXhwb3J0ZXJTdGF0ZSh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgc2NlbmUubm9kZXMucHVzaCguLi4oYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZXNBc3luYyhyb290Tm9kZXNMSCwgc3RhdGVMSCkpKTtcclxuICAgICAgICBjb25zdCBzdGF0ZVJIID0gbmV3IEV4cG9ydGVyU3RhdGUoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb2Rlc1JILCBzdGF0ZVJIKSkpO1xyXG4gICAgICAgIGNvbnN0IG5vb3BSSCA9IG5ldyBFeHBvcnRlclN0YXRlKGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBzY2VuZS5ub2Rlcy5wdXNoKC4uLihhd2FpdCB0aGlzLl9leHBvcnROb2Rlc0FzeW5jKHJvb3ROb29wTm9kZXNSSCwgbm9vcFJIKSkpO1xyXG5cclxuICAgICAgICBpZiAoc2NlbmUubm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lcy5wdXNoKHNjZW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2V4cG9ydEFuZEFzc2lnbkNhbWVyYXMoKTtcclxuICAgICAgICB0aGlzLl9leHBvcnRBbmRBc3NpZ25Ta2VsZXRvbnMoc3RhdGVMSC5nZXROb2Rlc1NldCgpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhYnlsb25TY2VuZS5hbmltYXRpb25Hcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIF9HTFRGQW5pbWF0aW9uLl9DcmVhdGVOb2RlQW5kTW9ycGhBbmltYXRpb25Gcm9tQW5pbWF0aW9uR3JvdXBzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFieWxvblNjZW5lLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9ucyxcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vZGVNYXAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVMSC5nZXROb2Rlc1NldCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaG91bGRFeHBvcnRBbmltYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLmdldChiYWJ5bG9uTm9kZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9vcHRpb25zLnNob3VsZEV4cG9ydE5vZGUoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRFeHBvcnROb2RlTWFwLnNldChiYWJ5bG9uTm9kZSwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfZXhwb3J0Tm9kZXNBc3luYyhiYWJ5bG9uUm9vdE5vZGVzOiBOb2RlW10sIHN0YXRlOiBFeHBvcnRlclN0YXRlKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGVzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXhwb3J0QnVmZmVycyhiYWJ5bG9uUm9vdE5vZGVzLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9leHBvcnROb2RlQXN5bmMoYmFieWxvbk5vZGUsIG5vZGVzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGVjdEJ1ZmZlcnMoXHJcbiAgICAgICAgYmFieWxvbk5vZGU6IE5vZGUsXHJcbiAgICAgICAgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwOiBNYXA8QnVmZmVyLCBWZXJ0ZXhCdWZmZXJbXT4sXHJcbiAgICAgICAgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXA6IE1hcDxWZXJ0ZXhCdWZmZXIsIEFic3RyYWN0TWVzaFtdPixcclxuICAgICAgICBtb3JwaFRhcmdldHNUb01lc2hlc01hcDogTWFwPE1vcnBoVGFyZ2V0LCBBYnN0cmFjdE1lc2hbXT4sXHJcbiAgICAgICAgc3RhdGU6IEV4cG9ydGVyU3RhdGVcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRFeHBvcnROb2RlKGJhYnlsb25Ob2RlKSAmJiBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCAmJiBiYWJ5bG9uTm9kZS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk5vZGUuZ2VvbWV0cnkuZ2V0VmVydGV4QnVmZmVycygpO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBraW5kIGluIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlciA9IHZlcnRleEJ1ZmZlcnNba2luZF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0SGFzVmVydGV4Q29sb3JBbHBoYSh2ZXJ0ZXhCdWZmZXIsIGJhYnlsb25Ob2RlLmhhc1ZlcnRleEFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJBcnJheSA9IGJ1ZmZlclRvVmVydGV4QnVmZmVyc01hcC5nZXQoYnVmZmVyKSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAuc2V0KGJ1ZmZlciwgdmVydGV4QnVmZmVyQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXhCdWZmZXJBcnJheS5pbmRleE9mKHZlcnRleEJ1ZmZlcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlckFycmF5LnB1c2godmVydGV4QnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLnNldCh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hlcy5pbmRleE9mKGJhYnlsb25Ob2RlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzLnB1c2goYmFieWxvbk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyID0gYmFieWxvbk5vZGUubW9ycGhUYXJnZXRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbW9ycGhJbmRleCA9IDA7IG1vcnBoSW5kZXggPCBtb3JwaFRhcmdldE1hbmFnZXIubnVtVGFyZ2V0czsgbW9ycGhJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBtb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KG1vcnBoSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoZXMgPSBtb3JwaFRhcmdldHNUb01lc2hlc01hcC5nZXQobW9ycGhUYXJnZXQpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0c1RvTWVzaGVzTWFwLnNldChtb3JwaFRhcmdldCwgbWVzaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaGVzLmluZGV4T2YoYmFieWxvbk5vZGUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNoZXMucHVzaChiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJhYnlsb25DaGlsZE5vZGUgb2YgYmFieWxvbk5vZGUuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uQ2hpbGROb2RlLCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAsIHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLCBtb3JwaFRhcmdldHNUb01lc2hlc01hcCwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRCdWZmZXJzKGJhYnlsb25Sb290Tm9kZXM6IE5vZGVbXSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAgPSBuZXcgTWFwPEJ1ZmZlciwgVmVydGV4QnVmZmVyW10+KCk7XHJcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAgPSBuZXcgTWFwPFZlcnRleEJ1ZmZlciwgQWJzdHJhY3RNZXNoW10+KCk7XHJcbiAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRzTWVzaGVzTWFwID0gbmV3IE1hcDxNb3JwaFRhcmdldCwgQWJzdHJhY3RNZXNoW10+KCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgYmFieWxvbk5vZGUgb2YgYmFieWxvblJvb3ROb2Rlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnVmZmVycyhiYWJ5bG9uTm9kZSwgYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLCB2ZXJ0ZXhCdWZmZXJUb01lc2hlc01hcCwgbW9ycGhUYXJnZXRzTWVzaGVzTWFwLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidWZmZXJzID0gQXJyYXkuZnJvbShidWZmZXJUb1ZlcnRleEJ1ZmZlcnNNYXAua2V5cygpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYnVmZmVyLmdldERhdGEoKTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIgZGF0YSBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYnVmZmVyVG9WZXJ0ZXhCdWZmZXJzTWFwLmdldChidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0cmlkZSA9IHZlcnRleEJ1ZmZlcnNbMF0uYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgaWYgKHZlcnRleEJ1ZmZlcnMuc29tZSgodmVydGV4QnVmZmVyKSA9PiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZSAhPT0gYnl0ZVN0cmlkZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZlcnRleCBidWZmZXJzIHBvaW50aW5nIHRvIHRoZSBzYW1lIGJ1ZmZlciBtdXN0IGhhdmUgdGhlIHNhbWUgYnl0ZSBzdHJpZGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGEpLnNsaWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSBub3JtYWxpemF0aW9ucyBhbmQgY29sb3IgY29ycmVjdGlvbnMgdG8gYnVmZmVyIGRhdGEgaW4tcGxhY2UuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCBraW5kIH0gPSBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgbm9ybWFscyBhbmQgdGFuZ2VudHMuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnVtZXJhdGVGbG9hdFZhbHVlcyhieXRlcywgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQodmFsdWVzWzBdICogdmFsdWVzWzBdICsgdmFsdWVzWzFdICogdmFsdWVzWzFdICsgdmFsdWVzWzJdICogdmFsdWVzWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52TGVuZ3RoID0gMSAvIGxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gKj0gaW52TGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sxXSAqPSBpbnZMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWzJdICo9IGludkxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IFN0YW5kYXJkTWF0ZXJpYWwgdmVydGV4IGNvbG9ycyBmcm9tIGdhbW1hIHRvIGxpbmVhciBzcGFjZS5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Db2xvcktpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RkTWF0ZXJpYWxDb3VudCA9IG1lc2hlcy5maWx0ZXIoKG1lc2gpID0+IG1lc2gubWF0ZXJpYWwgaW5zdGFuY2VvZiBTdGFuZGFyZE1hdGVyaWFsIHx8IG1lc2gubWF0ZXJpYWwgPT0gbnVsbCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gQnVmZmVyIG5vdCB1c2VkIGJ5IFN0YW5kYXJkTWF0ZXJpYWxzLCBzbyBubyBjb252ZXJzaW9uIG5lZWRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdGhpcyBjYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RkTWF0ZXJpYWxDb3VudCAhPSBtZXNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIk5vdCBjb252ZXJ0aW5nIHZlcnRleCBjb2xvciBzcGFjZSwgYXMgYnVmZmVyIGlzIHNoYXJlZCBieSBTdGFuZGFyZE1hdGVyaWFscyBhbmQgb3RoZXIgbWF0ZXJpYWwgdHlwZXMuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFZlcnRleEJ1ZmZlci5VTlNJR05FRF9CWVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcIkNvbnZlcnRpbmcgdWludDggdmVydGV4IGNvbG9ycyB0byBsaW5lYXIgc3BhY2UuIFJlc3VsdHMgbWF5IGxvb2sgaW5jb3JyZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVydGV4RGF0YTMgPSBuZXcgQ29sb3IzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleERhdGE0ID0gbmV3IENvbG9yNCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyA9IHRoaXMuX2JhYnlsb25TY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzaW5nIHNlcGFyYXRlIENvbG9yMyBhbmQgQ29sb3I0IG9iamVjdHMgdG8gZW5zdXJlIHRoZSByaWdodCBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMuZnJvbUFycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9MaW5lYXJTcGFjZVRvUmVmKHZlcnRleERhdGEzLCB1c2VFeGFjdFNyZ2JDb252ZXJzaW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGV4RGF0YTMudG9BcnJheSh2YWx1ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC5mcm9tQXJyYXkodmFsdWVzLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0xpbmVhclNwYWNlVG9SZWYodmVydGV4RGF0YTQsIHVzZUV4YWN0U3JnYkNvbnZlcnNpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhNC50b0FycmF5KHZhbHVlcywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBjb29yZGluYXRlIGNvbnZlcnNpb25zLCBpZiBuZWVkZWQsIHRvIGJ1ZmZlciBkYXRhIGluLXBsYWNlIChvbmx5IGZvciBwb3NpdGlvbnMsIG5vcm1hbHMgYW5kIHRhbmdlbnRzKS5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiB2ZXJ0ZXhCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzaGVzID0gdmVydGV4QnVmZmVyVG9NZXNoZXNNYXAuZ2V0KHZlcnRleEJ1ZmZlcikhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgY29tcG9uZW50Q291bnQsIHR5cGUsIGNvdW50LCBub3JtYWxpemVkLCBraW5kIH0gPSBHZXRWZXJ0ZXhCdWZmZXJJbmZvKHZlcnRleEJ1ZmZlciwgbWVzaGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudW1lcmF0ZUZsb2F0VmFsdWVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSAtdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjb252ZXJ0ZWQgYnl0ZXMgZm9yIG1pbi9tYXggY29tcHV0YXRpb24uXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb252ZXJ0ZWRUb1JpZ2h0SGFuZGVkQnVmZmVycy5zZXQoYnVmZmVyLCBieXRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBidWZmZXIgdmlldywgYnV0IGRlZmVyIGFjY2Vzc29yIGNyZWF0aW9uIGZvciBsYXRlci4gSW5zdGVhZCwgdHJhY2sgaXQgdmlhIEV4cG9ydGVyU3RhdGUuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcoYnl0ZXMsIGJ5dGVTdHJpZGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zZXRWZXJ0ZXhCdWZmZXJWaWV3KGJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmbG9hdE1hdHJpY2VzSW5kaWNlcyA9IG5ldyBNYXA8VmVydGV4QnVmZmVyLCBGbG9hdEFycmF5PigpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgYnVmZmVycyBhcmUgb2YgdHlwZSBNYXRyaWNlc0luZGljZXNLaW5kIGFuZCBoYXZlIGZsb2F0IHZhbHVlcywgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYnVmZmVyIGluc3RlYWQuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmVydGV4QnVmZmVyIG9mIHZlcnRleEJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IHZlcnRleEJ1ZmZlclRvTWVzaGVzTWFwLmdldCh2ZXJ0ZXhCdWZmZXIpITtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsga2luZCwgdG90YWxWZXJ0aWNlcyB9ID0gR2V0VmVydGV4QnVmZmVySW5mbyh2ZXJ0ZXhCdWZmZXIsIG1lc2hlcyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4QnVmZmVyLnR5cGUgPT0gVmVydGV4QnVmZmVyLkZMT0FUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmbG9hdERhdGEgPSB2ZXJ0ZXhCdWZmZXIuZ2V0RmxvYXREYXRhKHRvdGFsVmVydGljZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb2F0RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0TWF0cmljZXNJbmRpY2VzLnNldCh2ZXJ0ZXhCdWZmZXIsIGZsb2F0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmbG9hdE1hdHJpY2VzSW5kaWNlcy5zaXplICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuV2FybihcclxuICAgICAgICAgICAgICAgICAgICBgSm9pbnQgaW5kaWNlcyBjb252ZXJzaW9uIG5lZWRlZDogc29tZSBqb2ludCBpbmRpY2VzIGFyZSBzdG9yZWQgYXMgZmxvYXRzIGluIEJhYnlsb24gYnV0IEdMVEYgcmVxdWlyZXMgVU5TSUdORUQgQllURVMuIFdlIHdpbGwgcGVyZm9ybSB0aGUgY29udmVyc2lvbiBidXQgdGhpcyBtaWdodCBsZWFkIHRvIHVudXNlZCBkYXRhIGluIHRoZSBidWZmZXIuYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZmxvYXRBcnJheVZlcnRleEJ1ZmZlcnMgPSBBcnJheS5mcm9tKGZsb2F0TWF0cmljZXNJbmRpY2VzLmtleXMoKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiBmbG9hdEFycmF5VmVydGV4QnVmZmVycykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBmbG9hdE1hdHJpY2VzSW5kaWNlcy5nZXQodmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXMxNkJpdCA9IEZsb2F0c05lZWQxNkJpdEludGVnZXIoYXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBuZXcgKGlzMTZCaXQgPyBVaW50MTZBcnJheSA6IFVpbnQ4QXJyYXkpKGFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXlbaW5kZXhdID0gYXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhuZXdBcnJheSwgNCAqIChpczE2Qml0ID8gMiA6IDEpKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldFJlbWFwcGVkQnVmZmVyVmlldyhidWZmZXIsIHZlcnRleEJ1ZmZlciwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIG1vcnBoIHRhcmdldHMgYnVmZmVyc1xyXG4gICAgICAgIGNvbnN0IG1vcnBoVGFyZ2V0cyA9IEFycmF5LmZyb20obW9ycGhUYXJnZXRzTWVzaGVzTWFwLmtleXMoKSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbW9ycGhUYXJnZXQgb2YgbW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2hlcyA9IG1vcnBoVGFyZ2V0c01lc2hlc01hcC5nZXQobW9ycGhUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnbFRGTW9ycGhUYXJnZXQgPSBCdWlsZE1vcnBoVGFyZ2V0QnVmZmVycyhtb3JwaFRhcmdldCwgbWVzaGVzWzBdLCB0aGlzLl9idWZmZXJNYW5hZ2VyLCB0aGlzLl9idWZmZXJWaWV3cywgdGhpcy5fYWNjZXNzb3JzLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc2ggb2YgbWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iaW5kTW9ycGhEYXRhVG9NZXNoKG1lc2gsIGdsVEZNb3JwaFRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYSBub2RlIHRvIGJlIGV4cG9ydGVkIHRvIHRoZSBnbFRGIGZpbGVcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIG5vZGUgaGFzIGJlZW4gZXhwb3J0ZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnROb2RlQXN5bmMoYmFieWxvbk5vZGU6IE5vZGUsIHBhcmVudE5vZGVDaGlsZHJlbjogQXJyYXk8bnVtYmVyPiwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgbm9kZUluZGV4ID0gdGhpcy5fbm9kZU1hcC5nZXQoYmFieWxvbk5vZGUpO1xyXG4gICAgICAgIGlmIChub2RlSW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIXBhcmVudE5vZGVDaGlsZHJlbi5pbmNsdWRlcyhub2RlSW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlQ2hpbGRyZW4ucHVzaChub2RlSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBhd2FpdCB0aGlzLl9jcmVhdGVOb2RlQXN5bmMoYmFieWxvbk5vZGUsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgbm9kZUluZGV4ID0gdGhpcy5fbm9kZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLl9ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9ub2RlTWFwLnNldChiYWJ5bG9uTm9kZSwgbm9kZUluZGV4KTtcclxuICAgICAgICAgICAgc3RhdGUucHVzaEV4cG9ydGVkTm9kZShiYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGVDaGlsZHJlbi5wdXNoKG5vZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIG5vZGUncyBhbmltYXRpb25zIG9uY2UgdGhlIG5vZGUgaGFzIGJlZW4gYWRkZWQgdG8gbm9kZU1hcCAoVE9ETzogVGhpcyBzaG91bGQgYmUgcmVmYWN0b3JlZClcclxuICAgICAgICAgICAgY29uc3QgcnVudGltZUdMVEZBbmltYXRpb246IElBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInJ1bnRpbWUgYW5pbWF0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcnM6IFtdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBpZGxlR0xURkFuaW1hdGlvbnM6IElBbmltYXRpb25bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9iYWJ5bG9uU2NlbmUuYW5pbWF0aW9uR3JvdXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZU1vcnBoVGFyZ2V0QW5pbWF0aW9uRnJvbU1vcnBoVGFyZ2V0QW5pbWF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uTm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBpZGxlR0xURkFuaW1hdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZU1hcCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclZpZXdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb25TYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25Ob2RlLmFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX0dMVEZBbmltYXRpb24uX0NyZWF0ZU5vZGVBbmltYXRpb25Gcm9tTm9kZUFuaW1hdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhYnlsb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lR0xURkFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlTWFwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2RlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyTWFuYWdlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyVmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uU2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuY29udmVydFRvUmlnaHRIYW5kZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuc2hvdWxkRXhwb3J0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJ1bnRpbWVHTFRGQW5pbWF0aW9uLmNoYW5uZWxzLmxlbmd0aCAmJiBydW50aW1lR0xURkFuaW1hdGlvbi5zYW1wbGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbnMucHVzaChydW50aW1lR0xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWRsZUdMVEZBbmltYXRpb25zLmZvckVhY2goKGlkbGVHTFRGQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRsZUdMVEZBbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoICYmIGlkbGVHTFRGQW5pbWF0aW9uLnNhbXBsZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbnMucHVzaChpZGxlR0xURkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmVnaW4gcHJvY2Vzc2luZyBjaGlsZCBub2RlcyBvbmNlIHBhcmVudCBoYXMgYmVlbiBhZGRlZCB0byB0aGUgbm9kZSBsaXN0XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlID8gW10gOiBwYXJlbnROb2RlQ2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uQ2hpbGROb2RlIG9mIGJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fZXhwb3J0Tm9kZUFzeW5jKGJhYnlsb25DaGlsZE5vZGUsIGNoaWxkcmVuLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBnbFRGIG5vZGUgZnJvbSBhIEJhYnlsb24uanMgbm9kZS4gSWYgc2tpcHBlZCwgcmV0dXJucyBudWxsLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2NyZWF0ZU5vZGVBc3luYyhiYWJ5bG9uTm9kZTogTm9kZSwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPE51bGxhYmxlPElOb2RlPj4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2hvdWxkRXhwb3J0Tm9kZShiYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlOiBJTm9kZSA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUubmFtZSkge1xyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSBiYWJ5bG9uTm9kZS5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm9kZSBtZXRhZGF0YVxyXG4gICAgICAgIGlmIChiYWJ5bG9uTm9kZS5tZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRyYXMgPSB0aGlzLl9vcHRpb25zLm1ldGFkYXRhU2VsZWN0b3IoYmFieWxvbk5vZGUubWV0YWRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoZXh0cmFzKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4dHJhcyA9IGV4dHJhcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25Ob2RlIGluc3RhbmNlb2YgVHJhbnNmb3JtTm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXROb2RlVHJhbnNmb3JtYXRpb24obm9kZSwgYmFieWxvbk5vZGUsIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEFic3RyYWN0TWVzaCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbk1lc2ggPSBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIEluc3RhbmNlZE1lc2ggPyBiYWJ5bG9uTm9kZS5zb3VyY2VNZXNoIDogKGJhYnlsb25Ob2RlIGFzIE1lc2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLnN1Yk1lc2hlcyAmJiBiYWJ5bG9uTWVzaC5zdWJNZXNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUubWVzaCA9IGF3YWl0IHRoaXMuX2V4cG9ydE1lc2hBc3luYyhiYWJ5bG9uTWVzaCwgc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uTm9kZS5za2VsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraW4gPSB0aGlzLl9za2luTWFwLmdldChiYWJ5bG9uTm9kZS5za2VsZXRvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNTa2luTWFwLnNldChza2luLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVzU2tpbk1hcC5nZXQoc2tpbik/LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUYXJnZXRDYW1lcmEpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2x0ZkNhbWVyYSA9IHRoaXMuX2NhbWVyYXNNYXAuZ2V0KGJhYnlsb25Ob2RlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChnbHRmQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ub2Rlc0NhbWVyYU1hcC5zZXQoZ2x0ZkNhbWVyYSwgW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldENhbWVyYVRyYW5zZm9ybWF0aW9uKG5vZGUsIGJhYnlsb25Ob2RlLCBzdGF0ZS5jb252ZXJ0VG9SaWdodEhhbmRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwYXJlbnQgbm9kZSBleGlzdHMgYW5kIGNhbiBiZSBjb2xsYXBzZWQsIG1lcmdlIHRoZWlyIHRyYW5zZm9ybWF0aW9ucyBhbmQgbWFyayB0aGUgcGFyZW50IGFzIHRoZSBjYW1lcmEtY29udGFpbmluZyBub2RlLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50QmFieWxvbk5vZGUgPSBiYWJ5bG9uTm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50QmFieWxvbk5vZGUgIT09IG51bGwgJiYgSXNDaGlsZENvbGxhcHNpYmxlKGJhYnlsb25Ob2RlLCBwYXJlbnRCYWJ5bG9uTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlSW5kZXggPSB0aGlzLl9ub2RlTWFwLmdldChwYXJlbnRCYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLl9ub2Rlc1twYXJlbnROb2RlSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2xsYXBzZUNoaWxkSW50b1BhcmVudChub2RlLCBwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpPy5wdXNoKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gU2tpcCBleHBvcnRpbmcgdGhlIG9yaWdpbmFsIGNoaWxkIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZXNDYW1lcmFNYXAuZ2V0KGdsdGZDYW1lcmEpPy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBcHBseSBleHRlbnNpb25zIHRvIHRoZSBub2RlLiBJZiB0aGlzIHJlc29sdmVzIHRvIG51bGwsIGl0IG1lYW5zIHdlIHNob3VsZCBza2lwIGV4cG9ydGluZyB0aGlzIG5vZGVcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWROb2RlID0gYXdhaXQgdGhpcy5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnROb2RlQXN5bmMoXCJleHBvcnROb2RlQXN5bmNcIiwgbm9kZSwgYmFieWxvbk5vZGUsIHRoaXMuX25vZGVNYXAsIHN0YXRlLmNvbnZlcnRUb1JpZ2h0SGFuZGVkKTtcclxuICAgICAgICBpZiAoIXByb2Nlc3NlZE5vZGUpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYE5vdCBleHBvcnRpbmcgbm9kZSAke2JhYnlsb25Ob2RlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0SW5kaWNlcyhcclxuICAgICAgICBpbmRpY2VzOiBOdWxsYWJsZTxJbmRpY2VzQXJyYXk+LFxyXG4gICAgICAgIGlzMzJCaXRzOiBib29sZWFuLFxyXG4gICAgICAgIHN0YXJ0OiBudW1iZXIsXHJcbiAgICAgICAgY291bnQ6IG51bWJlcixcclxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcclxuICAgICAgICBmaWxsTW9kZTogbnVtYmVyLFxyXG4gICAgICAgIHNpZGVPcmllbnRhdGlvbjogbnVtYmVyLFxyXG4gICAgICAgIHN0YXRlOiBFeHBvcnRlclN0YXRlLFxyXG4gICAgICAgIHByaW1pdGl2ZTogSU1lc2hQcmltaXRpdmVcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpbmRpY2VzVG9FeHBvcnQgPSBpbmRpY2VzO1xyXG5cclxuICAgICAgICBwcmltaXRpdmUubW9kZSA9IEdldFByaW1pdGl2ZU1vZGUoZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAvLyBGbGlwIGluZGljZXMgaWYgdHJpYW5nbGUgd2luZGluZyBvcmRlciBpcyBub3QgQ0NXLCBhcyBnbFRGIGlzIGFsd2F5cyBDQ1cuXHJcbiAgICAgICAgY29uc3QgZmxpcCA9IHNpZGVPcmllbnRhdGlvbiAhPT0gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbiAmJiBJc1RyaWFuZ2xlRmlsbE1vZGUoZmlsbE1vZGUpO1xyXG4gICAgICAgIGlmIChmbGlwKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxsTW9kZSA9PT0gTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlIHx8IGZpbGxNb2RlID09PSBNYXRlcmlhbC5UcmlhbmdsZUZhbkRyYXdNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmlhbmdsZSBzdHJpcC9mYW4gZmlsbCBtb2RlIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJpbWl0aXZlLm1vZGUgPSBHZXRQcmltaXRpdmVNb2RlKGZpbGxNb2RlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGljZXMgPSBpczMyQml0cyA/IG5ldyBVaW50MzJBcnJheShjb3VudCkgOiBuZXcgVWludDE2QXJyYXkoY291bnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpICsgMiA8IGNvdW50OyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2ldID0gaW5kaWNlc1tzdGFydCArIGldICsgb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGljZXNbaSArIDFdID0gaW5kaWNlc1tzdGFydCArIGkgKyAyXSArIG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAyXSA9IGluZGljZXNbc3RhcnQgKyBpICsgMV0gKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSArIDIgPCBjb3VudDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpICsgMV0gPSBpICsgMjtcclxuICAgICAgICAgICAgICAgICAgICBuZXdJbmRpY2VzW2kgKyAyXSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbmRpY2VzVG9FeHBvcnQgPSBuZXdJbmRpY2VzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kaWNlcyAmJiBvZmZzZXQgIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kaWNlcyA9IGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KGNvdW50KSA6IG5ldyBVaW50MTZBcnJheShjb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kaWNlc1tpXSA9IGluZGljZXNbc3RhcnQgKyBpXSArIG9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5kaWNlc1RvRXhwb3J0ID0gbmV3SW5kaWNlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRpY2VzVG9FeHBvcnQpIHtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc29ySW5kZXggPSBzdGF0ZS5nZXRJbmRpY2VzQWNjZXNzb3IoaW5kaWNlcywgc3RhcnQsIGNvdW50LCBvZmZzZXQsIGZsaXApO1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzb3JJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBieXRlcyA9IEluZGljZXNBcnJheVRvVHlwZWRTdWJhcnJheShpbmRpY2VzVG9FeHBvcnQsIHN0YXJ0LCBjb3VudCwgaXMzMkJpdHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhieXRlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50VHlwZSA9IGlzMzJCaXRzID8gQWNjZXNzb3JDb21wb25lbnRUeXBlLlVOU0lHTkVEX0lOVCA6IEFjY2Vzc29yQ29tcG9uZW50VHlwZS5VTlNJR05FRF9TSE9SVDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKHRoaXMuX2J1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlNDQUxBUiwgY29tcG9uZW50VHlwZSwgY291bnQsIDApKTtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc29ySW5kZXggPSB0aGlzLl9hY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNldEluZGljZXNBY2Nlc3NvcihpbmRpY2VzLCBzdGFydCwgY291bnQsIG9mZnNldCwgZmxpcCwgYWNjZXNzb3JJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZS5pbmRpY2VzID0gYWNjZXNzb3JJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwb3J0VmVydGV4QnVmZmVyKHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBzdGF0ZTogRXhwb3J0ZXJTdGF0ZSwgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGtpbmQgPSB2ZXJ0ZXhCdWZmZXIuZ2V0S2luZCgpO1xyXG5cclxuICAgICAgICBpZiAoIUlzU3RhbmRhcmRWZXJ0ZXhBdHRyaWJ1dGUoa2luZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtpbmQuc3RhcnRzV2l0aChcInV2XCIpICYmICF0aGlzLl9vcHRpb25zLmV4cG9ydFVudXNlZFVWcykge1xyXG4gICAgICAgICAgICBpZiAoIWJhYnlsb25NYXRlcmlhbCB8fCAhdGhpcy5fbWF0ZXJpYWxOZWVkc1VWc1NldC5oYXMoYmFieWxvbk1hdGVyaWFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWNjZXNzb3JJbmRleCA9IHN0YXRlLmdldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50KTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc29ySW5kZXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgbWluL21heCBmcm9tIGNvbnZlcnRlZCBvciBvcmlnaW5hbCBkYXRhLlxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gc3RhdGUuY29udmVydGVkVG9SaWdodEhhbmRlZEJ1ZmZlcnMuZ2V0KHZlcnRleEJ1ZmZlci5fYnVmZmVyKSB8fCB2ZXJ0ZXhCdWZmZXIuX2J1ZmZlci5nZXREYXRhKCkhO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5NYXggPSBraW5kID09PSBWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kID8gR2V0TWluTWF4KGRhdGEsIHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50KSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvciB0aGUgcmVtYXBwZWQgYnVmZmVyIHZpZXdzIHdlIGNyZWF0ZWQgZm9yIGZsb2F0IG1hdHJpY2VzIGluZGljZXMsIG1ha2Ugc3VyZSB0byB1c2UgdGhlaXIgdXBkYXRlZCBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgY29uc3QgaXNGbG9hdE1hdHJpY2VzSW5kaWNlcyA9XHJcbiAgICAgICAgICAgICAgICAoa2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQgfHwga2luZCA9PT0gVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZCkgJiYgdmVydGV4QnVmZmVyLnR5cGUgPT09IFZlcnRleEJ1ZmZlci5GTE9BVDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleEJ1ZmZlclR5cGUgPSBpc0Zsb2F0TWF0cmljZXNJbmRpY2VzID8gVmVydGV4QnVmZmVyLlVOU0lHTkVEX0JZVEUgOiB2ZXJ0ZXhCdWZmZXIudHlwZTtcclxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyTm9ybWFsaXplZCA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyB1bmRlZmluZWQgOiB2ZXJ0ZXhCdWZmZXIubm9ybWFsaXplZDtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGlzRmxvYXRNYXRyaWNlc0luZGljZXMgPyBzdGF0ZS5nZXRSZW1hcHBlZEJ1ZmZlclZpZXcodmVydGV4QnVmZmVyLl9idWZmZXIsIHZlcnRleEJ1ZmZlcikhIDogc3RhdGUuZ2V0VmVydGV4QnVmZmVyVmlldyh2ZXJ0ZXhCdWZmZXIuX2J1ZmZlcikhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IHZlcnRleEJ1ZmZlci5ieXRlT2Zmc2V0ICsgc3RhcnQgKiB2ZXJ0ZXhCdWZmZXIuYnl0ZVN0cmlkZTtcclxuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgR2V0QWNjZXNzb3JUeXBlKGtpbmQsIHN0YXRlLmhhc1ZlcnRleENvbG9yQWxwaGEodmVydGV4QnVmZmVyKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBieXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbk1heCxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXJOb3JtYWxpemVkIC8vIFRPRE86IEZpbmQgb3RoZXIgcGxhY2VzIHdoZXJlIHRoaXMgaXMgbmVlZGVkLlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvckluZGV4ID0gdGhpcy5fYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHN0YXRlLnNldFZlcnRleEFjY2Vzc29yKHZlcnRleEJ1ZmZlciwgc3RhcnQsIGNvdW50LCBhY2Nlc3NvckluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaW1pdGl2ZS5hdHRyaWJ1dGVzW0dldEF0dHJpYnV0ZVR5cGUoa2luZCldID0gYWNjZXNzb3JJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwsIHZlcnRleEJ1ZmZlcnM6IHsgW2tpbmQ6IHN0cmluZ106IFZlcnRleEJ1ZmZlciB9LCBzdWJNZXNoOiBTdWJNZXNoLCBwcmltaXRpdmU6IElNZXNoUHJpbWl0aXZlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsSW5kZXggPSB0aGlzLl9tYXRlcmlhbE1hcC5nZXQoYmFieWxvbk1hdGVyaWFsKTtcclxuICAgICAgICBpZiAobWF0ZXJpYWxJbmRleCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1VWcyA9IHZlcnRleEJ1ZmZlcnMgJiYgT2JqZWN0LmtleXModmVydGV4QnVmZmVycykuc29tZSgoa2luZCkgPT4ga2luZC5zdGFydHNXaXRoKFwidXZcIikpO1xyXG4gICAgICAgICAgICBiYWJ5bG9uTWF0ZXJpYWwgPSBiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBNdWx0aU1hdGVyaWFsID8gYmFieWxvbk1hdGVyaWFsLnN1Yk1hdGVyaWFsc1tzdWJNZXNoLm1hdGVyaWFsSW5kZXhdISA6IGJhYnlsb25NYXRlcmlhbDtcclxuICAgICAgICAgICAgaWYgKGJhYnlsb25NYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxJbmRleCA9IGF3YWl0IHRoaXMuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0UEJSTWF0ZXJpYWxBc3luYyhiYWJ5bG9uTWF0ZXJpYWwsIGhhc1VWcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFieWxvbk1hdGVyaWFsIGluc3RhbmNlb2YgU3RhbmRhcmRNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxJbmRleCA9IGF3YWl0IHRoaXMuX21hdGVyaWFsRXhwb3J0ZXIuZXhwb3J0U3RhbmRhcmRNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgaGFzVVZzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWJ5bG9uTWF0ZXJpYWwgaW5zdGFuY2VvZiBPcGVuUEJSTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsSW5kZXggPSBhd2FpdCB0aGlzLl9tYXRlcmlhbEV4cG9ydGVyLmV4cG9ydE9wZW5QQlJNYXRlcmlhbEFzeW5jKGJhYnlsb25NYXRlcmlhbCwgaGFzVVZzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBVbnN1cHBvcnRlZCBtYXRlcmlhbCAnJHtiYWJ5bG9uTWF0ZXJpYWwubmFtZX0nIHdpdGggdHlwZSAke2JhYnlsb25NYXRlcmlhbC5nZXRDbGFzc05hbWUoKX1gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxNYXAuc2V0KGJhYnlsb25NYXRlcmlhbCwgbWF0ZXJpYWxJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSBtYXRlcmlhbEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydE1lc2hBc3luYyhiYWJ5bG9uTWVzaDogTWVzaCwgc3RhdGU6IEV4cG9ydGVyU3RhdGUpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGxldCBtZXNoSW5kZXggPSBzdGF0ZS5nZXRNZXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICBpZiAobWVzaEluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc2hJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lc2g6IElNZXNoID0geyBwcmltaXRpdmVzOiBbXSB9O1xyXG4gICAgICAgIG1lc2hJbmRleCA9IHRoaXMuX21lc2hlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fbWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgICAgc3RhdGUuc2V0TWVzaChiYWJ5bG9uTWVzaCwgbWVzaEluZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IGJhYnlsb25NZXNoLmlzVW5JbmRleGVkID8gbnVsbCA6IGJhYnlsb25NZXNoLmdldEluZGljZXMoKTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXJzID0gYmFieWxvbk1lc2guZ2VvbWV0cnk/LmdldFZlcnRleEJ1ZmZlcnMoKTtcclxuICAgICAgICBjb25zdCBtb3JwaFRhcmdldHMgPSBzdGF0ZS5nZXRNb3JwaFRhcmdldHNGcm9tTWVzaChiYWJ5bG9uTWVzaCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzTGluZXNNZXNoID0gYmFieWxvbk1lc2ggaW5zdGFuY2VvZiBMaW5lc01lc2g7XHJcbiAgICAgICAgY29uc3QgaXNHcmVhc2VkTGluZU1lc2ggPSBiYWJ5bG9uTWVzaCBpbnN0YW5jZW9mIEdyZWFzZWRMaW5lQmFzZU1lc2g7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Yk1lc2hlcyA9IGJhYnlsb25NZXNoLnN1Yk1lc2hlcztcclxuICAgICAgICBpZiAodmVydGV4QnVmZmVycyAmJiBzdWJNZXNoZXMgJiYgc3ViTWVzaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJNZXNoIG9mIHN1Yk1lc2hlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpbWl0aXZlOiBJTWVzaFByaW1pdGl2ZSA9IHsgYXR0cmlidXRlczoge30gfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTWF0ZXJpYWwgPSBzdWJNZXNoLmdldE1hdGVyaWFsKCkgfHwgdGhpcy5fYmFieWxvblNjZW5lLmRlZmF1bHRNYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHcmVhc2VkTGluZU1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBiYWJ5bG9uTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWJ5bG9uTGluZXNNZXNoID0gYmFieWxvbk1lc2g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yV2hpdGUgPSBDb2xvcjMuV2hpdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9IGJhYnlsb25MaW5lc01lc2gubWF0ZXJpYWw/LmFscGhhID8/IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBiYWJ5bG9uTGluZXNNZXNoLmdyZWFzZWRMaW5lTWF0ZXJpYWw/LmNvbG9yID8/IGNvbG9yV2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xvci5lcXVhbHNXaXRoRXBzaWxvbihjb2xvcldoaXRlLCBFcHNpbG9uKSB8fCBhbHBoYSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JGYWN0b3I6IFsuLi5jb2xvci5hc0FycmF5KCksIGFscGhhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaW5lc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIExpbmVzTWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJTWF0ZXJpYWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGJhYnlsb25NYXRlcmlhbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25MaW5lc01lc2ggPSBiYWJ5bG9uTWVzaDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWJ5bG9uTGluZXNNZXNoLmNvbG9yLmVxdWFsc1dpdGhFcHNpbG9uKENvbG9yMy5XaGl0ZSgpLCBFcHNpbG9uKSB8fCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckZhY3RvcjogWy4uLmJhYnlsb25MaW5lc01lc2guY29sb3IuYXNBcnJheSgpLCBiYWJ5bG9uTGluZXNNZXNoLmFscGhhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hdGVyaWFscy5wdXNoKG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubWF0ZXJpYWwgPSB0aGlzLl9tYXRlcmlhbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydE1hdGVyaWFsQXN5bmMoYmFieWxvbk1hdGVyaWFsLCB2ZXJ0ZXhCdWZmZXJzLCBzdWJNZXNoLCBwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEluZGV4IGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbE1vZGUgPSBpc0xpbmVzTWVzaCB8fCBpc0dyZWFzZWRMaW5lTWVzaCA/IE1hdGVyaWFsLkxpbmVMaXN0RHJhd01vZGUgOiAoYmFieWxvbk1lc2gub3ZlcnJpZGVSZW5kZXJpbmdGaWxsTW9kZSA/PyBiYWJ5bG9uTWF0ZXJpYWwuZmlsbE1vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzaWRlT3JpZW50YXRpb24gPSBiYWJ5bG9uTWF0ZXJpYWwuX2dldEVmZmVjdGl2ZU9yaWVudGF0aW9uKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS53YXNBZGRlZEJ5Tm9vcE5vZGUgJiYgIWJhYnlsb25NZXNoLmdldFNjZW5lKCkudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUbyBwcm9wZXJseSByZW1vdmUgYSBjb252ZXJzaW9uIG5vZGUsIHdlIG11c3QgYWxzbyBjYW5jZWwgb3V0IHRoZSBpbXBsaWNpdCBmbGlwIGluIGl0cyBjaGlsZHJlbidzIHNpZGUgb3JpZW50YXRpb25zLlxyXG4gICAgICAgICAgICAgICAgICAgIHNpZGVPcmllbnRhdGlvbiA9IHNpZGVPcmllbnRhdGlvbiA9PT0gTWF0ZXJpYWwuQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uID8gTWF0ZXJpYWwuQ291bnRlckNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbiA6IE1hdGVyaWFsLkNsb2NrV2lzZVNpZGVPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRJbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcyA/IEFyZUluZGljZXMzMkJpdHMoaW5kaWNlcywgc3ViTWVzaC5pbmRleENvdW50LCBzdWJNZXNoLmluZGV4U3RhcnQsIHN1Yk1lc2gudmVydGljZXNTdGFydCkgOiBzdWJNZXNoLnZlcnRpY2VzQ291bnQgPiA2NTUzNSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2VzID8gc3ViTWVzaC5pbmRleFN0YXJ0IDogc3ViTWVzaC52ZXJ0aWNlc1N0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXMgPyBzdWJNZXNoLmluZGV4Q291bnQgOiBzdWJNZXNoLnZlcnRpY2VzQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgLXN1Yk1lc2gudmVydGljZXNTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICBmaWxsTW9kZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWRlT3JpZW50YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFZlcnRleCBidWZmZXJzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlcnRleEJ1ZmZlciBvZiBPYmplY3QudmFsdWVzKHZlcnRleEJ1ZmZlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0VmVydGV4QnVmZmVyKHZlcnRleEJ1ZmZlciwgYmFieWxvbk1hdGVyaWFsLCBzdWJNZXNoLnZlcnRpY2VzU3RhcnQsIHN1Yk1lc2gudmVydGljZXNDb3VudCwgc3RhdGUsIHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vcnBoVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS50YXJnZXRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBnbHRmTW9ycGhUYXJnZXQgb2YgbW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1pdGl2ZS50YXJnZXRzLnB1c2goZ2x0Zk1vcnBoVGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtZXNoLnByaW1pdGl2ZXMucHVzaChwcmltaXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRNZXNoUHJpbWl0aXZlKHByaW1pdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgbWVzaC53ZWlnaHRzID0gW107XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lc2guZXh0cmFzKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoLmV4dHJhcyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lc2guZXh0cmFzLnRhcmdldE5hbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdsdGZNb3JwaFRhcmdldCBvZiBtb3JwaFRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgIG1lc2gud2VpZ2h0cy5wdXNoKGdsdGZNb3JwaFRhcmdldC5pbmZsdWVuY2UpO1xyXG4gICAgICAgICAgICAgICAgbWVzaC5leHRyYXMudGFyZ2V0TmFtZXMucHVzaChnbHRmTW9ycGhUYXJnZXQubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNoSW5kZXg7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZ2l0aHViL25vLXRoZW4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgYmFieWxvbmpzL2F2YWlsYWJsZSAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJVGV4dHVyZUluZm8sIElNYXRlcmlhbCwgSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsIElNYXRlcmlhbE9jY2x1c2lvblRleHR1cmVJbmZvLCBJU2FtcGxlciwgSUltYWdlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU1pbWVUeXBlLCBNYXRlcmlhbEFscGhhTW9kZSwgVGV4dHVyZU1hZ0ZpbHRlciwgVGV4dHVyZU1pbkZpbHRlciwgVGV4dHVyZVdyYXBNb2RlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBEZWVwSW1tdXRhYmxlLCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5zY2FsYXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IEdldFRleHR1cmVEYXRhQXN5bmMsIFRleHR1cmVUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdGV4dHVyZVRvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFJhd1RleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvcmF3VGV4dHVyZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEdMVEZFeHBvcnRlciB9IGZyb20gXCIuL2dsVEZFeHBvcnRlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBFbmNvZGVJbWFnZUFzeW5jIH0gZnJvbSBcImNvcmUvTWlzYy9kdW1wVG9vbHNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgUEJSQmFzZU1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJCYXNlTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3BlY3VsYXJQb3dlclRvUm91Z2huZXNzIH0gZnJvbSBcImNvcmUvSGVscGVycy9tYXRlcmlhbENvbnZlcnNpb25IZWxwZXJcIjtcclxuaW1wb3J0IHsgSW50ZXJuYWxUZXh0dXJlU291cmNlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL2ludGVybmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBHZXRNaW1lVHlwZSB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IE9wZW5QQlJNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9QQlIvb3BlbnBick1hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE1lcmdlVGV4dHVyZXNBc3luYywgQ3JlYXRlUkdCQUNvbmZpZ3VyYXRpb24sIENyZWF0ZVRleHR1cmVJbnB1dCwgQ3JlYXRlQ29uc3RhbnRJbnB1dCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlTWVyZ2VyXCI7XHJcblxyXG5jb25zdCBFcHNpbG9uID0gMWUtNjtcclxuY29uc3QgRGllbGVjdHJpY1NwZWN1bGFyID0gbmV3IENvbG9yMygwLjA0LCAwLjA0LCAwLjA0KSBhcyBEZWVwSW1tdXRhYmxlPENvbG9yMz47XHJcbmNvbnN0IE1heFNwZWN1bGFyUG93ZXIgPSAxMDI0O1xyXG5jb25zdCBXaGl0ZSA9IENvbG9yMy5XaGl0ZSgpIGFzIERlZXBJbW11dGFibGU8Q29sb3IzPjtcclxuY29uc3QgQmxhY2sgPSBDb2xvcjMuQmxhY2tSZWFkT25seTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHN0b3Jpbmcgc3BlY3VsYXIgZ2xvc3NpbmVzcyBmYWN0b3JzXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuaW50ZXJmYWNlIElQQlJTcGVjdWxhckdsb3NzaW5lc3Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBsaW5lYXIgZGlmZnVzZSBmYWN0b3JzIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICovXHJcbiAgICBkaWZmdXNlQ29sb3I6IENvbG9yMztcclxuICAgIHNwZWN1bGFyQ29sb3I6IENvbG9yMztcclxuICAgIGdsb3NzaW5lc3M6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElQQlJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICBiYXNlQ29sb3I6IENvbG9yMztcclxuICAgIG1ldGFsbGljOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgcm91Z2huZXNzOiBOdWxsYWJsZTxudW1iZXI+O1xyXG4gICAgbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YT86IE51bGxhYmxlPEJsb2I+O1xyXG4gICAgYmFzZUNvbG9yVGV4dHVyZURhdGE/OiBOdWxsYWJsZTxCbG9iPjtcclxufVxyXG5cclxuZnVuY3Rpb24gR2V0RmlsZUV4dGVuc2lvbkZyb21NaW1lVHlwZShtaW1lVHlwZTogSW1hZ2VNaW1lVHlwZSk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLkpQRUc6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5qcGdcIjtcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuUE5HOlxyXG4gICAgICAgICAgICByZXR1cm4gXCIucG5nXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLldFQlA6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi53ZWJwXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLkFWSUY6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5hdmlmXCI7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLktUWDI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIi5rdHgyXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbWltZVR5cGUgdGhlIE1JTUUgdHlwZSByZXF1ZXN0ZWQgYnkgdGhlIHVzZXJcclxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbWltZSB0eXBlIGlzIGNvbXBhdGlibGUgd2l0aCBnbFRGXHJcbiAqL1xyXG5mdW5jdGlvbiBJc1N1cHBvcnRlZE1pbWVUeXBlKG1pbWVUeXBlPzogc3RyaW5nKTogbWltZVR5cGUgaXMgSW1hZ2VNaW1lVHlwZSB7XHJcbiAgICBzd2l0Y2ggKG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLkpQRUc6XHJcbiAgICAgICAgY2FzZSBJbWFnZU1pbWVUeXBlLlBORzpcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuV0VCUDpcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuQVZJRjpcclxuICAgICAgICBjYXNlIEltYWdlTWltZVR5cGUuS1RYMjpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0cyBjYWNoZWQgaW1hZ2UgZnJvbSBhIHRleHR1cmUsIGlmIGF2YWlsYWJsZS5cclxuICogQHBhcmFtIGJhYnlsb25UZXh0dXJlIHRleHR1cmUgdG8gY2hlY2sgZm9yIGNhY2hlZCBpbWFnZVxyXG4gKiBAcmV0dXJucyBpbWFnZSBkYXRhIGlmIGZvdW5kIGFuZCBkaXJlY3RseSB1c2FibGU7IG51bGwgb3RoZXJ3aXNlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBHZXRDYWNoZWRJbWFnZUFzeW5jKGJhYnlsb25UZXh0dXJlOiBCYXNlVGV4dHVyZSk6IFByb21pc2U8TnVsbGFibGU8QmxvYj4+IHtcclxuICAgIGNvbnN0IGludGVybmFsVGV4dHVyZSA9IGJhYnlsb25UZXh0dXJlLmdldEludGVybmFsVGV4dHVyZSgpO1xyXG4gICAgaWYgKCFpbnRlcm5hbFRleHR1cmUgfHwgaW50ZXJuYWxUZXh0dXJlLnNvdXJjZSAhPT0gSW50ZXJuYWxUZXh0dXJlU291cmNlLlVybCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGludGVybmFsVGV4dHVyZS5pbnZlcnRZKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVmZmVyID0gaW50ZXJuYWxUZXh0dXJlLl9idWZmZXI7XHJcblxyXG4gICAgbGV0IGRhdGE7XHJcbiAgICBsZXQgbWltZVR5cGUgPSAoYmFieWxvblRleHR1cmUgYXMgVGV4dHVyZSkubWltZVR5cGU7XHJcblxyXG4gICAgaWYgKCFidWZmZXIpIHtcclxuICAgICAgICBkYXRhID0gYXdhaXQgVG9vbHMuTG9hZEZpbGVBc3luYyhpbnRlcm5hbFRleHR1cmUudXJsKTtcclxuICAgICAgICBtaW1lVHlwZSA9IEdldE1pbWVUeXBlKGludGVybmFsVGV4dHVyZS51cmwpIHx8IG1pbWVUeXBlO1xyXG4gICAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYnVmZmVyKSkge1xyXG4gICAgICAgIGRhdGEgPSBidWZmZXIuYnVmZmVyLnNsaWNlKGJ1ZmZlci5ieXRlT2Zmc2V0LCBidWZmZXIuYnl0ZU9mZnNldCArIGJ1ZmZlci5ieXRlTGVuZ3RoKSBhcyBBcnJheUJ1ZmZlcjtcclxuICAgIH0gZWxzZSBpZiAoYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICBkYXRhID0gYnVmZmVyO1xyXG4gICAgfSBlbHNlIGlmIChidWZmZXIgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgICAgZGF0YSA9IGF3YWl0IGJ1ZmZlci5hcnJheUJ1ZmZlcigpO1xyXG4gICAgICAgIG1pbWVUeXBlID0gYnVmZmVyLnR5cGUgfHwgbWltZVR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBkYXRhID0gYXdhaXQgVG9vbHMuTG9hZEZpbGVBc3luYyhidWZmZXIpO1xyXG4gICAgICAgIG1pbWVUeXBlID0gR2V0TWltZVR5cGUoYnVmZmVyKSB8fCBtaW1lVHlwZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgYnVmZmVyIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCBUb29scy5Mb2FkRmlsZUFzeW5jKGJ1ZmZlci5zcmMpO1xyXG4gICAgICAgIG1pbWVUeXBlID0gR2V0TWltZVR5cGUoYnVmZmVyLnNyYykgfHwgbWltZVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEgJiYgSXNTdXBwb3J0ZWRNaW1lVHlwZShtaW1lVHlwZSkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6IG1pbWVUeXBlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tcHV0ZXMgdGhlIG1ldGFsbGljIGZhY3RvciBmcm9tIHNwZWN1bGFyIGdsb3NzaW5lc3MgdmFsdWVzLlxyXG4gKiBAcGFyYW0gZGlmZnVzZSBkaWZmdXNlZCB2YWx1ZVxyXG4gKiBAcGFyYW0gc3BlY3VsYXIgc3BlY3VsYXIgdmFsdWVcclxuICogQHBhcmFtIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCBvbmUgbWludXMgdGhlIHNwZWN1bGFyIHN0cmVuZ3RoXHJcbiAqIEByZXR1cm5zIG1ldGFsbGljIHZhbHVlXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Tb2x2ZU1ldGFsbGljKGRpZmZ1c2U6IG51bWJlciwgc3BlY3VsYXI6IG51bWJlciwgb25lTWludXNTcGVjdWxhclN0cmVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHNwZWN1bGFyIDwgRGllbGVjdHJpY1NwZWN1bGFyLnIpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhID0gRGllbGVjdHJpY1NwZWN1bGFyLnI7XHJcbiAgICBjb25zdCBiID0gKGRpZmZ1c2UgKiBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGgpIC8gKDEuMCAtIERpZWxlY3RyaWNTcGVjdWxhci5yKSArIHNwZWN1bGFyIC0gMi4wICogRGllbGVjdHJpY1NwZWN1bGFyLnI7XHJcbiAgICBjb25zdCBjID0gRGllbGVjdHJpY1NwZWN1bGFyLnIgLSBzcGVjdWxhcjtcclxuICAgIGNvbnN0IGQgPSBiICogYiAtIDQuMCAqIGEgKiBjO1xyXG4gICAgcmV0dXJuIFNjYWxhci5DbGFtcCgoLWIgKyBNYXRoLnNxcnQoZCkpIC8gKDIuMCAqIGEpLCAwLCAxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBtZXRhbGxpYy9yb3VnaG5lc3MgZmFjdG9ycyBmcm9tIGEgU3RhbmRhcmQgTWF0ZXJpYWwuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Db252ZXJ0VG9HTFRGUEJSTWV0YWxsaWNSb3VnaG5lc3MoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWw6IFN0YW5kYXJkTWF0ZXJpYWwpOiBJTWF0ZXJpYWxQYnJNZXRhbGxpY1JvdWdobmVzcyB7XHJcbiAgICBjb25zdCBkaWZmdXNlID0gYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZGlmZnVzZUNvbG9yLnRvTGluZWFyU3BhY2UoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZ2V0U2NlbmUoKS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucykuc2NhbGUoMC41KTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYTtcclxuICAgIGNvbnN0IHNwZWN1bGFyUG93ZXIgPSBTY2FsYXIuQ2xhbXAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuc3BlY3VsYXJQb3dlciwgMCwgTWF4U3BlY3VsYXJQb3dlcik7XHJcblxyXG4gICAgY29uc3Qgcm91Z2huZXNzID0gU3BlY3VsYXJQb3dlclRvUm91Z2huZXNzKHNwZWN1bGFyUG93ZXIpO1xyXG5cclxuICAgIGNvbnN0IGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgYmFzZUNvbG9yRmFjdG9yOiBbZGlmZnVzZS5yLCBkaWZmdXNlLmcsIGRpZmZ1c2UuYiwgb3BhY2l0eV0sXHJcbiAgICAgICAgbWV0YWxsaWNGYWN0b3I6IDAsXHJcbiAgICAgICAgcm91Z2huZXNzRmFjdG9yOiByb3VnaG5lc3MsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBnbFRGIGFscGhhIG1vZGUgdG8gYSBnbFRGIG1hdGVyaWFsIGZyb20gdGhlIEJhYnlsb24gTWF0ZXJpYWxcclxuICogQHBhcmFtIGdsVEZNYXRlcmlhbCBnbFRGIG1hdGVyaWFsXHJcbiAqIEBwYXJhbSBiYWJ5bG9uTWF0ZXJpYWwgQmFieWxvbiBtYXRlcmlhbFxyXG4gKi9cclxuZnVuY3Rpb24gU2V0QWxwaGFNb2RlKGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLCBiYWJ5bG9uTWF0ZXJpYWw6IE1hdGVyaWFsICYgeyBhbHBoYUN1dE9mZj86IG51bWJlciB9KTogdm9pZCB7XHJcbiAgICBpZiAoYmFieWxvbk1hdGVyaWFsLm5lZWRBbHBoYUJsZW5kaW5nKCkpIHtcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuQkxFTkQ7XHJcbiAgICB9IGVsc2UgaWYgKGJhYnlsb25NYXRlcmlhbC5uZWVkQWxwaGFUZXN0aW5nKCkpIHtcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFNb2RlID0gTWF0ZXJpYWxBbHBoYU1vZGUuTUFTSztcclxuICAgICAgICBnbFRGTWF0ZXJpYWwuYWxwaGFDdXRvZmYgPSBiYWJ5bG9uTWF0ZXJpYWwuYWxwaGFDdXRPZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVdoaXRlVGV4dHVyZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NlbmU6IFNjZW5lKTogVGV4dHVyZSB7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpID0gaSArIDQpIHtcclxuICAgICAgICBkYXRhW2ldID0gZGF0YVtpICsgMV0gPSBkYXRhW2kgKyAyXSA9IGRhdGFbaSArIDNdID0gMHhmZjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXdUZXh0dXJlID0gUmF3VGV4dHVyZS5DcmVhdGVSR0JBVGV4dHVyZShkYXRhLCB3aWR0aCwgaGVpZ2h0LCBzY2VuZSk7XHJcblxyXG4gICAgcmV0dXJuIHJhd1RleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKHBpeGVsczogQXJyYXlCdWZmZXJWaWV3KTogRmxvYXQzMkFycmF5IHtcclxuICAgIGlmIChwaXhlbHMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcGl4ZWxzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHBpeGVscy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgYnVmZmVyW2ldID0gcGl4ZWxzW2ldIC8gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfSBlbHNlIGlmIChwaXhlbHMgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwaXhlbCBmb3JtYXQhXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggZ2xURiBtYXRlcmlhbCBjb252ZXJzaW9uIHByb3BlcnRpZXMuXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZNYXRlcmlhbEV4cG9ydGVyIHtcclxuICAgIC8vIE1hcHBpbmcgdG8gc3RvcmUgdGV4dHVyZXNcclxuICAgIHByaXZhdGUgX3RleHR1cmVNYXAgPSBuZXcgTWFwPG51bWJlciwgSVRleHR1cmVJbmZvPigpO1xyXG5cclxuICAgIC8vIE1hcHBpbmcgb2YgaW50ZXJuYWwgdGV4dHVyZXMgdG8gaW1hZ2VzIHRvIGF2b2lkIGV4cG9ydGluZyBkdXBsaWNhdGUgaW1hZ2VzXHJcbiAgICBwcml2YXRlIF9pbnRlcm5hbFRleHR1cmVUb0ltYWdlOiB7IFt1bmlxdWVJZDogbnVtYmVyXTogeyBbbWltZVR5cGU6IHN0cmluZ106IFByb21pc2U8bnVtYmVyPiB9IH0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9leHBvcnRlcjogR0xURkV4cG9ydGVyKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZXh0dXJlSW5mbyhiYWJ5bG9uVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+KTogTnVsbGFibGU8SVRleHR1cmVJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25UZXh0dXJlID8gKHRoaXMuX3RleHR1cmVNYXAuZ2V0KGJhYnlsb25UZXh0dXJlLnVuaXF1ZUlkKSA/PyBudWxsKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydFN0YW5kYXJkTWF0ZXJpYWxBc3luYyhiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbDogU3RhbmRhcmRNYXRlcmlhbCwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBwYnJNZXRhbGxpY1JvdWdobmVzcyA9IF9Db252ZXJ0VG9HTFRGUEJSTWV0YWxsaWNSb3VnaG5lc3MoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbDogSU1hdGVyaWFsID0geyBuYW1lOiBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5uYW1lIH07XHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyAhPSBudWxsICYmICFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC50d29TaWRlZExpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm5hbWUgKyBcIjogQmFjay1mYWNlIGN1bGxpbmcgZGlzYWJsZWQgYW5kIHR3by1zaWRlZCBsaWdodGluZyBkaXNhYmxlZCBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmRvdWJsZVNpZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNVVnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGRpZmZ1c2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGRpZmZ1c2VUZXh0dXJlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSB0ZXh0dXJlSW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidW1wVGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmJ1bXBUZXh0dXJlO1xyXG4gICAgICAgICAgICBpZiAoYnVtcFRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYnVtcFRleHR1cmUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZSA9IHRleHR1cmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlLmxldmVsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwubm9ybWFsVGV4dHVyZS5zY2FsZSA9IGJ1bXBUZXh0dXJlLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXNzaXZlVGV4dHVyZSA9IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBbMS4wLCAxLjAsIDEuMF07XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhlbWlzc2l2ZVRleHR1cmUpLnRoZW4oKHRleHR1cmVJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gdGV4dHVyZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudFRleHR1cmUgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbWJpZW50VGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGFtYmllbnRUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0VGV4dHVyZUFzeW5jKGFtYmllbnRUZXh0dXJlKS50aGVuKCh0ZXh0dXJlSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9jY2x1c2lvblRleHR1cmU6IElNYXRlcmlhbE9jY2x1c2lvblRleHR1cmVJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiB0ZXh0dXJlSW5mby5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlID0gb2NjbHVzaW9uVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLmFscGhhIDwgMS4wIHx8IGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsLm9wYWNpdHlUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIGlmIChiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5hbHBoYU1vZGUgPT09IENvbnN0YW50cy5BTFBIQV9DT01CSU5FKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbHBoYU1vZGUgPSBNYXRlcmlhbEFscGhhTW9kZS5CTEVORDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwubmFtZSArIFwiOiBnbFRGIDIuMCBkb2VzIG5vdCBzdXBwb3J0IGFscGhhIG1vZGU6IFwiICsgYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuYWxwaGFNb2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvciAmJiAhYmFieWxvblN0YW5kYXJkTWF0ZXJpYWwuZW1pc3NpdmVDb2xvci5lcXVhbHNXaXRoRXBzaWxvbihCbGFjaywgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVGYWN0b3IgPSBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yLmFzQXJyYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzID0gcGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICAgICAgU2V0QWxwaGFNb2RlKG1hdGVyaWFsLCBiYWJ5bG9uU3RhbmRhcmRNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZpbmlzaE1hdGVyaWFsQXN5bmMobWF0ZXJpYWwsIGJhYnlsb25TdGFuZGFyZE1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0gdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFscztcclxuICAgICAgICBtYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2ZpbmlzaE1hdGVyaWFsQXN5bmMoZ2xURk1hdGVyaWFsOiBJTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbDogTWF0ZXJpYWwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IGF3YWl0IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQWRkaXRpb25hbFRleHR1cmVzQXN5bmMoXCJleHBvcnRNYXRlcmlhbFwiLCBnbFRGTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPE51bGxhYmxlPElUZXh0dXJlSW5mbz4+PiA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHRleHR1cmUgb2YgdGV4dHVyZXMpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmV4cG9ydFRleHR1cmVBc3luYyh0ZXh0dXJlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX2V4cG9ydGVyLl9leHRlbnNpb25zUG9zdEV4cG9ydE1hdGVyaWFsQXN5bmMoXCJleHBvcnRNYXRlcmlhbFwiLCBnbFRGTWF0ZXJpYWwsIGJhYnlsb25NYXRlcmlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVzIHRoZSB0d28gc291cmNlIHRleHR1cmVzIHRvIHRoZSBzYW1lIGRpbWVuc2lvbnMuICBJZiBhIHRleHR1cmUgaXMgbnVsbCwgYSBkZWZhdWx0IHdoaXRlIHRleHR1cmUgaXMgZ2VuZXJhdGVkLiAgSWYgYm90aCB0ZXh0dXJlcyBhcmUgbnVsbCwgcmV0dXJucyBudWxsXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZTEgZmlyc3QgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlMiBzZWNvbmQgdGV4dHVyZSB0byByZXNpemVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBiYWJ5bG9uanMgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIHJlc2l6ZWQgdGV4dHVyZXMgb3IgbnVsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9yZXNpemVUZXh0dXJlc1RvU2FtZURpbWVuc2lvbnModGV4dHVyZTE6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgdGV4dHVyZTI6IE51bGxhYmxlPEJhc2VUZXh0dXJlPiwgc2NlbmU6IFNjZW5lKTogeyB0ZXh0dXJlMTogQmFzZVRleHR1cmU7IHRleHR1cmUyOiBCYXNlVGV4dHVyZSB9IHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlMVNpemUgPSB0ZXh0dXJlMSA/IHRleHR1cmUxLmdldFNpemUoKSA6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUyU2l6ZSA9IHRleHR1cmUyID8gdGV4dHVyZTIuZ2V0U2l6ZSgpIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMTogQmFzZVRleHR1cmU7XHJcbiAgICAgICAgbGV0IHJlc2l6ZWRUZXh0dXJlMjogQmFzZVRleHR1cmU7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlMVNpemUud2lkdGggPCB0ZXh0dXJlMlNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmUxICYmIHRleHR1cmUxIGluc3RhbmNlb2YgVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gVGV4dHVyZVRvb2xzLkNyZWF0ZVJlc2l6ZWRDb3B5KHRleHR1cmUxLCB0ZXh0dXJlMlNpemUud2lkdGgsIHRleHR1cmUyU2l6ZS5oZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gQ3JlYXRlV2hpdGVUZXh0dXJlKHRleHR1cmUyU2l6ZS53aWR0aCwgdGV4dHVyZTJTaXplLmhlaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMiA9IHRleHR1cmUyITtcclxuICAgICAgICB9IGVsc2UgaWYgKHRleHR1cmUxU2l6ZS53aWR0aCA+IHRleHR1cmUyU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICBpZiAodGV4dHVyZTIgJiYgdGV4dHVyZTIgaW5zdGFuY2VvZiBUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBUZXh0dXJlVG9vbHMuQ3JlYXRlUmVzaXplZENvcHkodGV4dHVyZTIsIHRleHR1cmUxU2l6ZS53aWR0aCwgdGV4dHVyZTFTaXplLmhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemVkVGV4dHVyZTIgPSBDcmVhdGVXaGl0ZVRleHR1cmUodGV4dHVyZTFTaXplLndpZHRoLCB0ZXh0dXJlMVNpemUuaGVpZ2h0LCBzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUxID0gdGV4dHVyZTEhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc2l6ZWRUZXh0dXJlMSA9IHRleHR1cmUxITtcclxuICAgICAgICAgICAgcmVzaXplZFRleHR1cmUyID0gdGV4dHVyZTIhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dHVyZTE6IHJlc2l6ZWRUZXh0dXJlMSEsXHJcbiAgICAgICAgICAgIHRleHR1cmUyOiByZXNpemVkVGV4dHVyZTIhLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IFNwZWN1bGFyIEdsb3NzaW5lc3MgVGV4dHVyZXMgdG8gTWV0YWxsaWMgUm91Z2huZXNzXHJcbiAgICAgKiBTZWUgbGluayBiZWxvdyBmb3IgaW5mbyBvbiB0aGUgbWF0ZXJpYWwgY29udmVyc2lvbnMgZnJvbSBQQlIgTWV0YWxsaWMvUm91Z2huZXNzIGFuZCBTcGVjdWxhci9HbG9zc2luZXNzXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21haW4vZXh0ZW5zaW9ucy8yLjAvQXJjaGl2ZWQvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MvZXhhbXBsZXMvY29udmVydC1iZXR3ZWVuLXdvcmtmbG93cy1ianMvanMvYmFieWxvbi5wYnJVdGlsaXRpZXMuanNcclxuICAgICAqIEBwYXJhbSBkaWZmdXNlVGV4dHVyZSB0ZXh0dXJlIHVzZWQgdG8gc3RvcmUgZGlmZnVzZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHBhcmFtIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdGV4dHVyZSB1c2VkIHRvIHN0b3JlIHNwZWN1bGFyIGFuZCBnbG9zc2luZXNzIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gZmFjdG9ycyBzcGVjdWxhciBnbG9zc2luZXNzIG1hdGVyaWFsIGZhY3RvcnNcclxuICAgICAqIEByZXR1cm5zIHBiciBtZXRhbGxpYyByb3VnaG5lc3MgaW50ZXJmYWNlIG9yIG51bGxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydFNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmVzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGRpZmZ1c2VUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+LFxyXG4gICAgICAgIGZhY3RvcnM6IElQQlJTcGVjdWxhckdsb3NzaW5lc3NcclxuICAgICk6IFByb21pc2U8SVBCUk1ldGFsbGljUm91Z2huZXNzPiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgQXJyYXk8UHJvbWlzZTx2b2lkPj4oKTtcclxuICAgICAgICBpZiAoIShkaWZmdXNlVGV4dHVyZSB8fCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXCJkaWZmdXNlIGFuZCBzcGVjdWxhciBnbG9zc2luZXNzIHRleHR1cmVzIGFyZSBub3QgZGVmaW5lZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gZGlmZnVzZVRleHR1cmUgPyBkaWZmdXNlVGV4dHVyZS5nZXRTY2VuZSgpIDogc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSA/IHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUuZ2V0U2NlbmUoKSA6IG51bGw7XHJcbiAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRUZXh0dXJlcyA9IHRoaXMuX3Jlc2l6ZVRleHR1cmVzVG9TYW1lRGltZW5zaW9ucyhkaWZmdXNlVGV4dHVyZSwgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZnVzZVNpemUgPSByZXNpemVkVGV4dHVyZXMudGV4dHVyZTE/LmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaWZmdXNlQnVmZmVyOiBGbG9hdDMyQXJyYXk7XHJcbiAgICAgICAgICAgIGxldCBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXI6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZGlmZnVzZVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRpZmZ1c2VTaXplLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZ1c2VQaXhlbHMgPSBhd2FpdCByZXNpemVkVGV4dHVyZXMudGV4dHVyZTEucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVjdWxhclBpeGVscyA9IGF3YWl0IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMi5yZWFkUGl4ZWxzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlmZnVzZVBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZGlmZnVzZUJ1ZmZlciA9IENvbnZlcnRQaXhlbEFycmF5VG9GbG9hdDMyKGRpZmZ1c2VQaXhlbHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KFwiRmFpbGVkIHRvIHJldHJpZXZlIHBpeGVscyBmcm9tIGRpZmZ1c2UgdGV4dHVyZSFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWN1bGFyUGl4ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBzcGVjdWxhckdsb3NzaW5lc3NCdWZmZXIgPSBDb252ZXJ0UGl4ZWxBcnJheVRvRmxvYXQzMihzcGVjdWxhclBpeGVscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXCJGYWlsZWQgdG8gcmV0cmlldmUgcGl4ZWxzIGZyb20gc3BlY3VsYXIgZ2xvc3NpbmVzcyB0ZXh0dXJlIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlci5ieXRlTGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXIgPSBuZXcgVWludDhBcnJheShieXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYmFzZUNvbG9yQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZUxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJpZGVTaXplID0gNDtcclxuICAgICAgICAgICAgY29uc3QgbWF4QmFzZUNvbG9yID0gbmV3IENvbG9yMygwLCAwLCAwKTtcclxuICAgICAgICAgICAgbGV0IG1heE1ldGFsbGljID0gMDtcclxuICAgICAgICAgICAgbGV0IG1heFJvdWdobmVzcyA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgKytoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHdpZHRoOyArK3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAod2lkdGggKiBoICsgdykgKiBzdHJpZGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmdXNlQ29sb3IgPSBuZXcgQ29sb3IzKGRpZmZ1c2VCdWZmZXJbb2Zmc2V0XSwgZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAxXSwgZGlmZnVzZUJ1ZmZlcltvZmZzZXQgKyAyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGluZWFyU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tdWx0aXBseShmYWN0b3JzLmRpZmZ1c2VDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJDb2xvciA9IG5ldyBDb2xvcjMoc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldF0sIHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAxXSwgc3BlY3VsYXJHbG9zc2luZXNzQnVmZmVyW29mZnNldCArIDJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9MaW5lYXJTcGFjZShzY2VuZS5nZXRFbmdpbmUoKS51c2VFeGFjdFNyZ2JDb252ZXJzaW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm11bHRpcGx5KGZhY3RvcnMuc3BlY3VsYXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2xvc3NpbmVzcyA9IHNwZWN1bGFyR2xvc3NpbmVzc0J1ZmZlcltvZmZzZXQgKyAzXSAqIGZhY3RvcnMuZ2xvc3NpbmVzcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlY3VsYXJHbG9zc2luZXNzOiBJUEJSU3BlY3VsYXJHbG9zc2luZXNzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWZmdXNlQ29sb3I6IGRpZmZ1c2VDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY3VsYXJDb2xvcjogc3BlY3VsYXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvc3NpbmVzczogZ2xvc3NpbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IHRoaXMuX2NvbnZlcnRTcGVjdWxhckdsb3NzaW5lc3NUb01ldGFsbGljUm91Z2huZXNzKHNwZWN1bGFyR2xvc3NpbmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QmFzZUNvbG9yLnIgPSBNYXRoLm1heChtYXhCYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEJhc2VDb2xvci5nID0gTWF0aC5tYXgobWF4QmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhCYXNlQ29sb3IuYiA9IE1hdGgubWF4KG1heEJhc2VDb2xvci5iLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4TWV0YWxsaWMgPSBNYXRoLm1heChtYXhNZXRhbGxpYywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhSb3VnaG5lc3MgPSBNYXRoLm1heChtYXhSb3VnaG5lc3MsIG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcyEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbb2Zmc2V0XSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5yICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAxXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltvZmZzZXQgKyAzXSA9IHJlc2l6ZWRUZXh0dXJlcy50ZXh0dXJlMS5oYXNBbHBoYSA/IGRpZmZ1c2VCdWZmZXJbb2Zmc2V0ICsgM10gKiAyNTUgOiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzQnVmZmVyW29mZnNldCArIDFdID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAyXSA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljISAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhbGxpY1JvdWdobmVzc0J1ZmZlcltvZmZzZXQgKyAzXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmV0cmlldmVzIHRoZSBtZXRhbGxpYyByb3VnaG5lc3MgZmFjdG9ycyBmcm9tIHRoZSBtYXhpbXVtIHRleHR1cmUgdmFsdWVzLlxyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgICAgIGJhc2VDb2xvcjogbWF4QmFzZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgbWV0YWxsaWM6IG1heE1ldGFsbGljLFxyXG4gICAgICAgICAgICAgICAgcm91Z2huZXNzOiBtYXhSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHdyaXRlT3V0QmFzZUNvbG9yVGV4dHVyZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7ICsraCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdyA9IDA7IHcgPCB3aWR0aDsgKyt3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSAod2lkdGggKiBoICsgdykgKiBzdHJpZGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXRdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuciA+IEVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLnIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDFdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuZyA+IEVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmcgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdIC89IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3IuYiA+IEVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMuYmFzZUNvbG9yLmIgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lYXJCYXNlQ29sb3JQaXhlbCA9IENvbG9yMy5Gcm9tSW50cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUNvbG9yQnVmZmVyW2Rlc3RpbmF0aW9uT2Zmc2V0ICsgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzUkdCQmFzZUNvbG9yUGl4ZWwgPSBsaW5lYXJCYXNlQ29sb3JQaXhlbC50b0dhbW1hU3BhY2Uoc2NlbmUuZ2V0RW5naW5lKCkudXNlRXhhY3RTcmdiQ29udmVyc2lvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldF0gPSBzUkdCQmFzZUNvbG9yUGl4ZWwuciAqIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQ29sb3JCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSA9IHNSR0JCYXNlQ29sb3JQaXhlbC5nICogMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VDb2xvckJ1ZmZlcltkZXN0aW5hdGlvbk9mZnNldCArIDJdID0gc1JHQkJhc2VDb2xvclBpeGVsLmIgKiAyNTU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc1JHQkJhc2VDb2xvclBpeGVsLmVxdWFsc1dpdGhFcHNpbG9uKFdoaXRlLCBFcHNpbG9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZU91dEJhc2VDb2xvclRleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA+IEVwc2lsb24gPyBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMucm91Z2huZXNzISA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSAvPSBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWMhID4gRXBzaWxvbiA/IG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpYyEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc1BpeGVsID0gQ29sb3IzLkZyb21JbnRzKDI1NSwgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAxXSwgbWV0YWxsaWNSb3VnaG5lc3NCdWZmZXJbZGVzdGluYXRpb25PZmZzZXQgKyAyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWV0YWxsaWNSb3VnaG5lc3NQaXhlbC5lcXVhbHNXaXRoRXBzaWxvbihXaGl0ZSwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVPdXRNZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdyaXRlT3V0TWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIEVuY29kZUltYWdlQXN5bmMobWV0YWxsaWNSb3VnaG5lc3NCdWZmZXIsIHdpZHRoLCBoZWlnaHQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZURhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3cml0ZU91dEJhc2VDb2xvclRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgRW5jb2RlSW1hZ2VBc3luYyhiYXNlQ29sb3JCdWZmZXIsIHdpZHRoLCBoZWlnaHQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzLmJhc2VDb2xvclRleHR1cmVEYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChcIl9Db252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzOiBTY2VuZSBmcm9tIHRleHR1cmVzIGlzIG1pc3NpbmchXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHNwZWN1bGFyIGdsb3NzaW5lc3MgbWF0ZXJpYWwgcHJvcGVydGllcyB0byBtZXRhbGxpYyByb3VnaG5lc3NcclxuICAgICAqIEBwYXJhbSBzcGVjdWxhckdsb3NzaW5lc3MgaW50ZXJmYWNlIHdpdGggc3BlY3VsYXIgZ2xvc3NpbmVzcyBtYXRlcmlhbCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyBpbnRlcmZhY2Ugd2l0aCBtZXRhbGxpYyByb3VnaG5lc3MgbWF0ZXJpYWwgcHJvcGVydGllc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjdWxhckdsb3NzaW5lc3M6IElQQlJTcGVjdWxhckdsb3NzaW5lc3MpOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3Mge1xyXG4gICAgICAgIGNvbnN0IGRpZmZ1c2VQZXJjZWl2ZWRCcmlnaHRuZXNzID0gdGhpcy5fZ2V0UGVyY2VpdmVkQnJpZ2h0bmVzcyhzcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBzcGVjdWxhclBlcmNlaXZlZEJyaWdodG5lc3MgPSB0aGlzLl9nZXRQZXJjZWl2ZWRCcmlnaHRuZXNzKHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICBjb25zdCBvbmVNaW51c1NwZWN1bGFyU3RyZW5ndGggPSAxIC0gdGhpcy5fZ2V0TWF4Q29tcG9uZW50KHNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckNvbG9yKTtcclxuICAgICAgICBjb25zdCBtZXRhbGxpYyA9IF9Tb2x2ZU1ldGFsbGljKGRpZmZ1c2VQZXJjZWl2ZWRCcmlnaHRuZXNzLCBzcGVjdWxhclBlcmNlaXZlZEJyaWdodG5lc3MsIG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgYmFzZUNvbG9yRnJvbURpZmZ1c2UgPSBzcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUNvbG9yLnNjYWxlKG9uZU1pbnVzU3BlY3VsYXJTdHJlbmd0aCAvICgxLjAgLSBEaWVsZWN0cmljU3BlY3VsYXIucikgLyBNYXRoLm1heCgxIC0gbWV0YWxsaWMsIEVwc2lsb24pKTtcclxuICAgICAgICBjb25zdCBiYXNlQ29sb3JGcm9tU3BlY3VsYXIgPSBzcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJDb2xvci5zdWJ0cmFjdChEaWVsZWN0cmljU3BlY3VsYXIuc2NhbGUoMSAtIG1ldGFsbGljKSkuc2NhbGUoMSAvIE1hdGgubWF4KG1ldGFsbGljLCBFcHNpbG9uKSk7XHJcbiAgICAgICAgbGV0IGJhc2VDb2xvciA9IENvbG9yMy5MZXJwKGJhc2VDb2xvckZyb21EaWZmdXNlLCBiYXNlQ29sb3JGcm9tU3BlY3VsYXIsIG1ldGFsbGljICogbWV0YWxsaWMpO1xyXG4gICAgICAgIGJhc2VDb2xvciA9IGJhc2VDb2xvci5jbGFtcFRvUmVmKDAsIDEsIGJhc2VDb2xvcik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzOiBJUEJSTWV0YWxsaWNSb3VnaG5lc3MgPSB7XHJcbiAgICAgICAgICAgIGJhc2VDb2xvcjogYmFzZUNvbG9yLFxyXG4gICAgICAgICAgICBtZXRhbGxpYzogbWV0YWxsaWMsXHJcbiAgICAgICAgICAgIHJvdWdobmVzczogMSAtIHNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHN1cmZhY2UgcmVmbGVjdGFuY2UsIGluZGVwZW5kZW50IG9mIGxpZ2h0aW5nIGNvbmRpdGlvbnNcclxuICAgICAqIEBwYXJhbSBjb2xvciBDb2xvciBzb3VyY2UgdG8gY2FsY3VsYXRlIGJyaWdodG5lc3MgZnJvbVxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgcGVyY2VpdmVkIGJyaWdodG5lc3MsIG9yIHplcm8gaWYgY29sb3IgaXMgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldFBlcmNlaXZlZEJyaWdodG5lc3MoY29sb3I6IENvbG9yMyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgwLjI5OSAqIGNvbG9yLnIgKiBjb2xvci5yICsgMC41ODcgKiBjb2xvci5nICogY29sb3IuZyArIDAuMTE0ICogY29sb3IuYiAqIGNvbG9yLmIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWVcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICogQHJldHVybnMgbWF4aW11bSBjb2xvciBjb21wb25lbnQgdmFsdWUsIG9yIHplcm8gaWYgY29sb3IgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0TWF4Q29tcG9uZW50KGNvbG9yOiBDb2xvcjMpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChjb2xvci5yLCBNYXRoLm1heChjb2xvci5nLCBjb2xvci5iKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUEJSTWF0ZXJpYWwgKE1ldGFsbGljL1JvdWdobmVzcykgdG8gTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqIEBwYXJhbSBiYXNlQ29sb3IgQmFzZSBjb2xvciBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtZXRhbGxpYyBNZXRhbGxpYyBmYWN0b3Igb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gcm91Z2huZXNzIFJvdWdobmVzcyBmYWN0b3Igb2YgdGhlIG1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gYWxiZWRvVGV4dHVyZSBBbGJlZG8gdGV4dHVyZSBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtZXRhbGxpY1RleHR1cmUgTWV0YWxsaWMgdGV4dHVyZSBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSByb3VnaG5lc3NUZXh0dXJlIFJvdWdobmVzcyB0ZXh0dXJlIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gaGFzVVZzIHNwZWNpZmllcyBpZiB0ZXh0dXJlIGNvb3JkaW5hdGVzIGFyZSBwcmVzZW50IG9uIHRoZSBzdWJtZXNoIHRvIGRldGVybWluZSBpZiB0ZXh0dXJlcyBzaG91bGQgYmUgYXBwbGllZFxyXG4gICAgICogQHJldHVybnMgZ2xURiBQQlIgTWV0YWxsaWMgUm91Z2huZXNzIGZhY3RvcnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfY29udmVydE1ldGFsUm91Z2hGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgIGJhc2VDb2xvcjogQ29sb3IzLFxyXG4gICAgICAgIG1ldGFsbGljOiBOdWxsYWJsZTxudW1iZXI+LFxyXG4gICAgICAgIHJvdWdobmVzczogTnVsbGFibGU8bnVtYmVyPixcclxuICAgICAgICBhbGJlZG9UZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgbWV0YWxsaWNUZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4sXHJcbiAgICAgICAgcm91Z2huZXNzVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+LFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsIHwgT3BlblBCUk1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbWV0YWxsaWNSb3VnaG5lc3M6IElQQlJNZXRhbGxpY1JvdWdobmVzcyA9IHtcclxuICAgICAgICAgICAgYmFzZUNvbG9yOiBiYXNlQ29sb3IsXHJcbiAgICAgICAgICAgIG1ldGFsbGljOiBtZXRhbGxpYyxcclxuICAgICAgICAgICAgcm91Z2huZXNzOiByb3VnaG5lc3MsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGhhc1VWcykge1xyXG4gICAgICAgICAgICBpZiAoYmFieWxvblBCUk1hdGVyaWFsIGluc3RhbmNlb2YgT3BlblBCUk1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFieWxvblBCUk1hdGVyaWFsLmdlb21ldHJ5T3BhY2l0eVRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBiYXNlQ29sb3IgYW5kIG9wYWNpdHlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGJlZG9JZCA9IGFsYmVkb1RleHR1cmUgJiYgYWxiZWRvVGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKSA/IGFsYmVkb1RleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkhLnVuaXF1ZUlkIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5SWQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWwuZ2VvbWV0cnlPcGFjaXR5VGV4dHVyZSAmJiBiYWJ5bG9uUEJSTWF0ZXJpYWwuZ2VvbWV0cnlPcGFjaXR5VGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiYWJ5bG9uUEJSTWF0ZXJpYWwuZ2VvbWV0cnlPcGFjaXR5VGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKSEudW5pcXVlSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWRJZCA9IE51bWJlcihgJHthbGJlZG9JZH0ke29wYWNpdHlJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnbFRGVGV4dHVyZSA9IHRoaXMuX3RleHR1cmVNYXAuZ2V0KG1lcmdlZElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVyZ2VUZXh0dXJlc0FzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUNvbG9yT3BhY2l0eVRleHR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVSR0JBQ29uZmlndXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxiZWRvVGV4dHVyZSA/IENyZWF0ZVRleHR1cmVJbnB1dChhbGJlZG9UZXh0dXJlLCAwKSA6IENyZWF0ZUNvbnN0YW50SW5wdXQoMS4wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxiZWRvVGV4dHVyZSA/IENyZWF0ZVRleHR1cmVJbnB1dChhbGJlZG9UZXh0dXJlLCAxKSA6IENyZWF0ZUNvbnN0YW50SW5wdXQoMS4wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxiZWRvVGV4dHVyZSA/IENyZWF0ZVRleHR1cmVJbnB1dChhbGJlZG9UZXh0dXJlLCAyKSA6IENyZWF0ZUNvbnN0YW50SW5wdXQoMS4wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlVGV4dHVyZUlucHV0KGJhYnlsb25QQlJNYXRlcmlhbC5nZW9tZXRyeU9wYWNpdHlUZXh0dXJlLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsLmdldFNjZW5lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbihhc3luYyAobWVyZ2VkVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsVEZUZXh0dXJlID0gYXdhaXQgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMobWVyZ2VkVGV4dHVyZSwgbWVyZ2VkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxiZWRvVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYWxiZWRvVGV4dHVyZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uUEJSTWF0ZXJpYWwuX3VzZU1ldGFsbGljRnJvbU1ldGFsbGljVGV4dHVyZUJsdWUgJiYgbWV0YWxsaWNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMobWV0YWxsaWNUZXh0dXJlKS50aGVuKChnbFRGVGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdWdobmVzc1RleHR1cmUgfHwgbWV0YWxsaWNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YWxsaWNJZCA9IG1ldGFsbGljVGV4dHVyZSAmJiBtZXRhbGxpY1RleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkgPyBtZXRhbGxpY1RleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkhLnVuaXF1ZUlkIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3VnaG5lc3NJZCA9IHJvdWdobmVzc1RleHR1cmUgJiYgcm91Z2huZXNzVGV4dHVyZS5nZXRJbnRlcm5hbFRleHR1cmUoKSA/IHJvdWdobmVzc1RleHR1cmUuZ2V0SW50ZXJuYWxUZXh0dXJlKCkhLnVuaXF1ZUlkIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWRJZCA9IE51bWJlcihgJHttZXRhbGxpY0lkfSR7cm91Z2huZXNzSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2xURlRleHR1cmUgPSB0aGlzLl90ZXh0dXJlTWFwLmdldChtZXJnZWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVyZ2VUZXh0dXJlc0FzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWV0YWxSb3VnaFRleHR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVSR0JBQ29uZmlndXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsLmFtYmllbnRPY2NsdXNpb25UZXh0dXJlID8gQ3JlYXRlVGV4dHVyZUlucHV0KGJhYnlsb25QQlJNYXRlcmlhbC5hbWJpZW50T2NjbHVzaW9uVGV4dHVyZSwgMCkgOiBDcmVhdGVDb25zdGFudElucHV0KDEuMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdWdobmVzc1RleHR1cmUgPyBDcmVhdGVUZXh0dXJlSW5wdXQocm91Z2huZXNzVGV4dHVyZSwgMCkgOiBDcmVhdGVDb25zdGFudElucHV0KDEuMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFsbGljVGV4dHVyZSA/IENyZWF0ZVRleHR1cmVJbnB1dChtZXRhbGxpY1RleHR1cmUsIDApIDogQ3JlYXRlQ29uc3RhbnRJbnB1dCgxLjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWwuZ2V0U2NlbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50aGVuKGFzeW5jIChtZXJnZWRUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2xURlRleHR1cmUgPSBhd2FpdCB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhtZXJnZWRUZXh0dXJlLCBtZXJnZWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSBnbFRGVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGJlZG9UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBvcnRUZXh0dXJlQXN5bmMoYWxiZWRvVGV4dHVyZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChtZXRhbGxpY1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhtZXRhbGxpY1RleHR1cmUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xURlRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlID0gZ2xURlRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZXRhbGxpY1JvdWdobmVzcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBJU2FtcGxlciB7XHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcjogSVNhbXBsZXIgPSB7fTtcclxuICAgICAgICBpZiAoIXRleHR1cmUgfHwgISh0ZXh0dXJlIGluc3RhbmNlb2YgVGV4dHVyZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbXBsZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3cmFwUyA9IHRoaXMuX2dldEdMVEZUZXh0dXJlV3JhcE1vZGUodGV4dHVyZS53cmFwVSk7XHJcbiAgICAgICAgaWYgKHdyYXBTICE9PSBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZXIud3JhcFMgPSB3cmFwUztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBUID0gdGhpcy5fZ2V0R0xURlRleHR1cmVXcmFwTW9kZSh0ZXh0dXJlLndyYXBWKTtcclxuICAgICAgICBpZiAod3JhcFQgIT09IFRleHR1cmVXcmFwTW9kZS5SRVBFQVQpIHtcclxuICAgICAgICAgICAgc2FtcGxlci53cmFwVCA9IHdyYXBUO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0ZXh0dXJlLnNhbXBsaW5nTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLkxJTkVBUjtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX0xJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUExJTkVBUjoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTkVBUkVTVF9ORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLk5FQVJFU1RfTElORUFSX01JUE5FQVJFU1Q6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5ORUFSRVNUO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5MSU5FQVJfTkVBUkVTVF9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX05FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX05FQVJFU1RfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLk5FQVJFU1RfTUlQTUFQX0xJTkVBUjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTElORUFSOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID0gVGV4dHVyZU1pbkZpbHRlci5ORUFSRVNUX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBMSU5FQVI6IHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZXIubWFnRmlsdGVyID0gVGV4dHVyZU1hZ0ZpbHRlci5MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTElORUFSX01JUE1BUF9MSU5FQVI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRleHR1cmUuTElORUFSX0xJTkVBUl9NSVBORUFSRVNUOiB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1hZ0ZpbHRlciA9IFRleHR1cmVNYWdGaWx0ZXIuTElORUFSO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5taW5GaWx0ZXIgPSBUZXh0dXJlTWluRmlsdGVyLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5ORUFSRVNUX05FQVJFU1RfTUlQTkVBUkVTVDoge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlci5tYWdGaWx0ZXIgPSBUZXh0dXJlTWFnRmlsdGVyLk5FQVJFU1Q7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9IFRleHR1cmVNaW5GaWx0ZXIuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2FtcGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRHTFRGVGV4dHVyZVdyYXBNb2RlKHdyYXBNb2RlOiBudW1iZXIpOiBUZXh0dXJlV3JhcE1vZGUge1xyXG4gICAgICAgIHN3aXRjaCAod3JhcE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUZXh0dXJlLldSQVBfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmVXcmFwTW9kZS5DTEFNUF9UT19FREdFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGV4dHVyZS5NSVJST1JfQUREUkVTU01PREU6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuTUlSUk9SRURfUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKGBVbnN1cHBvcnRlZCBUZXh0dXJlIFdyYXAgTW9kZSAke3dyYXBNb2RlfSFgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlV3JhcE1vZGUuUkVQRUFUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBhIFBCUk1hdGVyaWFsIChTcGVjdWxhci9HbG9zc2luZXNzKSB0byBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICogQHBhcmFtIGJhYnlsb25QQlJNYXRlcmlhbCBCSlMgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBNYXRlcmlhbFxyXG4gICAgICogQHBhcmFtIHBick1ldGFsbGljUm91Z2huZXNzIGdsVEYgUEJSIE1ldGFsbGljIFJvdWdobmVzcyBpbnRlcmZhY2VcclxuICAgICAqIEBwYXJhbSBoYXNVVnMgc3BlY2lmaWVzIGlmIHRleHR1cmUgY29vcmRpbmF0ZXMgYXJlIHByZXNlbnQgb24gdGhlIHN1Ym1lc2ggdG8gZGV0ZXJtaW5lIGlmIHRleHR1cmVzIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICAgKiBAcmV0dXJucyBnbFRGIFBCUiBNZXRhbGxpYyBSb3VnaG5lc3MgZmFjdG9yc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhcclxuICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCxcclxuICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPElQQlJNZXRhbGxpY1JvdWdobmVzcz4ge1xyXG4gICAgICAgIGNvbnN0IHNwZWNHbG9zczogSVBCUlNwZWN1bGFyR2xvc3NpbmVzcyA9IHtcclxuICAgICAgICAgICAgZGlmZnVzZUNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb0NvbG9yLFxyXG4gICAgICAgICAgICBzcGVjdWxhckNvbG9yOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JlZmxlY3Rpdml0eUNvbG9yLFxyXG4gICAgICAgICAgICBnbG9zc2luZXNzOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21pY3JvU3VyZmFjZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhbGJlZG9UZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9UZXh0dXJlO1xyXG4gICAgICAgIGNvbnN0IHJlZmxlY3Rpdml0eVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuX3JlZmxlY3Rpdml0eVRleHR1cmU7XHJcbiAgICAgICAgY29uc3QgdXNlTWljcm9zdXJmYWNlRnJvbVJlZmxlY3Rpdml0eU1hcEFscGhhID0gYmFieWxvblBCUk1hdGVyaWFsLl91c2VNaWNyb1N1cmZhY2VGcm9tUmVmbGVjdGl2aXR5TWFwQWxwaGE7XHJcbiAgICAgICAgaWYgKHJlZmxlY3Rpdml0eVRleHR1cmUgJiYgIXVzZU1pY3Jvc3VyZmFjZUZyb21SZWZsZWN0aXZpdHlNYXBBbHBoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXCJfQ29udmVydFBCUk1hdGVyaWFsOiBHbG9zc2luZXNzIHZhbHVlcyBub3QgaW5jbHVkZWQgaW4gdGhlIHJlZmxlY3Rpdml0eSB0ZXh0dXJlIGFyZSBjdXJyZW50bHkgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoYWxiZWRvVGV4dHVyZSB8fCByZWZsZWN0aXZpdHlUZXh0dXJlKSAmJiBoYXNVVnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX21hdGVyaWFsTmVlZHNVVnNTZXQuYWRkKGJhYnlsb25QQlJNYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSB0aGlzLl9leHBvcnRUZXh0dXJlU2FtcGxlcihhbGJlZG9UZXh0dXJlIHx8IHJlZmxlY3Rpdml0eVRleHR1cmUpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMgPSBhd2FpdCB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZXNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoYWxiZWRvVGV4dHVyZSwgcmVmbGVjdGl2aXR5VGV4dHVyZSwgc3BlY0dsb3NzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5fZXhwb3J0ZXIuX3RleHR1cmVzO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IGF3YWl0IHRoaXMuX2V4cG9ydEltYWdlQXN5bmMoYGJhc2VDb2xvciR7dGV4dHVyZXMubGVuZ3RofWAsIG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5iYXNlQ29sb3JUZXh0dXJlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCBhbGJlZG9UZXh0dXJlPy5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzRmFjdG9ycy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gYXdhaXQgdGhpcy5fZXhwb3J0SW1hZ2VBc3luYyhgbWV0YWxsaWNSb3VnaG5lc3Mke3RleHR1cmVzLmxlbmd0aH1gLCBtZXRhbGxpY1JvdWdobmVzc0ZhY3RvcnMubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBwYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4LCBzYW1wbGVySW5kZXgsIHJlZmxlY3Rpdml0eVRleHR1cmU/LmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWV0YWxsaWNSb3VnaG5lc3NGYWN0b3JzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb252ZXJ0U3BlY3VsYXJHbG9zc2luZXNzVG9NZXRhbGxpY1JvdWdobmVzcyhzcGVjR2xvc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhwb3J0UEJSTWF0ZXJpYWxBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWw6IFBCUkJhc2VNYXRlcmlhbCwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBiYWJ5bG9uUEJSTWF0ZXJpYWwubmFtZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1c2VNZXRhbGxpY1JvdWdobmVzcyA9IGJhYnlsb25QQlJNYXRlcmlhbC5pc01ldGFsbGljV29ya2Zsb3coKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZU1ldGFsbGljUm91Z2huZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsYmVkb0NvbG9yID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbGJlZG9Db2xvcjtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGE7XHJcbiAgICAgICAgICAgIGlmIChhbGJlZG9Db2xvcikge1xyXG4gICAgICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IFthbGJlZG9Db2xvci5yLCBhbGJlZG9Db2xvci5nLCBhbGJlZG9Db2xvci5iLCBhbHBoYV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gdXNlTWV0YWxsaWNSb3VnaG5lc3NcclxuICAgICAgICAgICAgPyBhd2FpdCB0aGlzLl9jb252ZXJ0TWV0YWxSb3VnaEZhY3RvcnNUb01ldGFsbGljUm91Z2huZXNzQXN5bmMoXHJcbiAgICAgICAgICAgICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbC5fYWxiZWRvQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbC5fbWV0YWxsaWMsXHJcbiAgICAgICAgICAgICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbC5fcm91Z2huZXNzLFxyXG4gICAgICAgICAgICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2FsYmVkb1RleHR1cmUsXHJcbiAgICAgICAgICAgICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbC5fbWV0YWxsaWNUZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgICBiYWJ5bG9uUEJSTWF0ZXJpYWwuX21ldGFsbGljVGV4dHVyZSxcclxuICAgICAgICAgICAgICAgICAgYmFieWxvblBCUk1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgICAgICAgIGhhc1VWc1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLl9jb252ZXJ0U3BlY0dsb3NzRmFjdG9yc1RvTWV0YWxsaWNSb3VnaG5lc3NBc3luYyhiYWJ5bG9uUEJSTWF0ZXJpYWwsIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcywgaGFzVVZzKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2V0TWV0YWxsaWNSb3VnaG5lc3NQYnJNYXRlcmlhbEFzeW5jKG1ldGFsbGljUm91Z2huZXNzLCBiYWJ5bG9uUEJSTWF0ZXJpYWwsIGdsVEZNYXRlcmlhbCwgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLCBoYXNVVnMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZpbmlzaE1hdGVyaWFsQXN5bmMoZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKGdsVEZNYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWxBc3luYyhcclxuICAgICAgICBtZXRhbGxpY1JvdWdobmVzczogSVBCUk1ldGFsbGljUm91Z2huZXNzLFxyXG4gICAgICAgIGJhYnlsb25QQlJNYXRlcmlhbDogUEJSQmFzZU1hdGVyaWFsIHwgT3BlblBCUk1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsLFxyXG4gICAgICAgIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzczogSU1hdGVyaWFsUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgaGFzVVZzOiBib29sZWFuXHJcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBTZXRBbHBoYU1vZGUoZ2xURk1hdGVyaWFsLCBiYWJ5bG9uUEJSTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBpZiAoIW1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5lcXVhbHNXaXRoRXBzaWxvbihXaGl0ZSwgRXBzaWxvbikgfHwgIVNjYWxhci5XaXRoaW5FcHNpbG9uKGJhYnlsb25QQlJNYXRlcmlhbC5hbHBoYSwgMSwgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciA9IFttZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3IuciwgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yLmcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvci5iLCBiYWJ5bG9uUEJSTWF0ZXJpYWwuYWxwaGFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljICE9IG51bGwgJiYgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWMgIT09IDEpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT0gbnVsbCAmJiBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3MgIT09IDEpIHtcclxuICAgICAgICAgICAgZ2xURlBick1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYWJ5bG9uUEJSTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nICE9IG51bGwgJiYgIWJhYnlsb25QQlJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFiYWJ5bG9uUEJSTWF0ZXJpYWwuX3R3b1NpZGVkTGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYmFieWxvblBCUk1hdGVyaWFsLm5hbWUgKyBcIjogQmFjay1mYWNlIGN1bGxpbmcgZGlzYWJsZWQgYW5kIHR3by1zaWRlZCBsaWdodGluZyBkaXNhYmxlZCBpcyBub3Qgc3VwcG9ydGVkIGluIGdsVEYuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5kb3VibGVTaWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1bXBUZXh0dXJlID0gYmFieWxvblBCUk1hdGVyaWFsIGluc3RhbmNlb2YgUEJSQmFzZU1hdGVyaWFsID8gYmFieWxvblBCUk1hdGVyaWFsLl9idW1wVGV4dHVyZSA6IGJhYnlsb25QQlJNYXRlcmlhbC5nZW9tZXRyeU5vcm1hbFRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChidW1wVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhidW1wVGV4dHVyZSkudGhlbigoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbFRGTWF0ZXJpYWwubm9ybWFsVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bXBUZXh0dXJlLmxldmVsICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLm5vcm1hbFRleHR1cmUuc2NhbGUgPSBidW1wVGV4dHVyZS5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50VGV4dHVyZSA9IGJhYnlsb25QQlJNYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCA/IGJhYnlsb25QQlJNYXRlcmlhbC5fYW1iaWVudFRleHR1cmUgOiBiYWJ5bG9uUEJSTWF0ZXJpYWwuYW1iaWVudE9jY2x1c2lvblRleHR1cmU7XHJcbiAgICAgICAgICAgIGlmIChhbWJpZW50VGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZTxOdWxsYWJsZTxJVGV4dHVyZUluZm8+Pihhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFieWxvblBCUk1hdGVyaWFsIGluc3RhbmNlb2YgT3BlblBCUk1hdGVyaWFsICYmIGdsVEZQYnJNZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgYWxyZWFkeSBjb250YWlucyB0aGUgYW1iaWVudCBvY2NsdXNpb24gZGF0YSBpbiBpdHMgcmVkIGNoYW5uZWwsIHdlIGRvbid0IG5lZWQgdG8gZXhwb3J0IGl0IGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIb3dldmVyLCB3ZSBzdGlsbCBuZWVkIHRvIHNldCB0aGUgdGV4dHVyZSBpbmZvIG9uIHRoZSBtYXRlcmlhbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHRoaXMuX2V4cG9ydFRleHR1cmVTYW1wbGVyKGFtYmllbnRUZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSB0aGlzLl9leHBvcnRlci5fdGV4dHVyZXNbZ2xURlBick1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZS5pbmRleF0uc291cmNlITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJbmZvID0gdGhpcy5fZXhwb3J0VGV4dHVyZUluZm8oaW1hZ2VJbmRleCwgc2FtcGxlckluZGV4LCBhbWJpZW50VGV4dHVyZS5jb29yZGluYXRlc0luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVNYXAuc2V0KGFtYmllbnRUZXh0dXJlLnVuaXF1ZUlkLCB0ZXh0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fZXh0ZW5zaW9uc1Bvc3RFeHBvcnRUZXh0dXJlcyhcImV4cG9ydGVyXCIsIHRleHR1cmVJbmZvLCBhbWJpZW50VGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0ZXh0dXJlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShhd2FpdCB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhhbWJpZW50VGV4dHVyZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihhc3luYyAoZ2xURlRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsVEZUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvY2NsdXNpb25UZXh0dXJlOiBJTWF0ZXJpYWxPY2NsdXNpb25UZXh0dXJlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogZ2xURlRleHR1cmUuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4Q29vcmQ6IGdsVEZUZXh0dXJlLnRleENvb3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IGdsVEZUZXh0dXJlLmV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsVEZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlID0gb2NjbHVzaW9uVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWJ5bG9uUEJSTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoID0gYmFieWxvblBCUk1hdGVyaWFsLl9hbWJpZW50VGV4dHVyZVN0cmVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoID0gYmFieWxvblBCUk1hdGVyaWFsLmFtYmllbnRPY2NsdXNpb25UZXh0dXJlIS5sZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbWlzc2l2ZVRleHR1cmUgPSBiYWJ5bG9uUEJSTWF0ZXJpYWwgaW5zdGFuY2VvZiBQQlJCYXNlTWF0ZXJpYWwgPyBiYWJ5bG9uUEJSTWF0ZXJpYWwuX2VtaXNzaXZlVGV4dHVyZSA6IGJhYnlsb25QQlJNYXRlcmlhbC5lbWlzc2lvbkNvbG9yVGV4dHVyZTtcclxuICAgICAgICAgICAgaWYgKGVtaXNzaXZlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydFRleHR1cmVBc3luYyhlbWlzc2l2ZVRleHR1cmUpLnRoZW4oKGdsVEZUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbFRGVGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZSA9IGdsVEZUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxOZWVkc1VWc1NldC5hZGQoYmFieWxvblBCUk1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW1pc3NpdmVDb2xvciA9IGJhYnlsb25QQlJNYXRlcmlhbCBpbnN0YW5jZW9mIFBCUkJhc2VNYXRlcmlhbCA/IGJhYnlsb25QQlJNYXRlcmlhbC5fZW1pc3NpdmVDb2xvciA6IGJhYnlsb25QQlJNYXRlcmlhbC5lbWlzc2lvbkNvbG9yO1xyXG4gICAgICAgIGlmICghZW1pc3NpdmVDb2xvci5lcXVhbHNXaXRoRXBzaWxvbihCbGFjaywgRXBzaWxvbikpIHtcclxuICAgICAgICAgICAgZ2xURk1hdGVyaWFsLmVtaXNzaXZlRmFjdG9yID0gZW1pc3NpdmVDb2xvci5hc0FycmF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbFRGTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3MgPSBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4cG9ydE9wZW5QQlJNYXRlcmlhbEFzeW5jKGJhYnlsb25PcGVuUEJSTWF0ZXJpYWw6IE9wZW5QQlJNYXRlcmlhbCwgaGFzVVZzOiBib29sZWFuKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBjb25zdCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3M6IElNYXRlcmlhbFBick1ldGFsbGljUm91Z2huZXNzID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0IGdsVEZNYXRlcmlhbDogSU1hdGVyaWFsID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBiYWJ5bG9uT3BlblBCUk1hdGVyaWFsLm5hbWUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxiZWRvQ29sb3IgPSBiYWJ5bG9uT3BlblBCUk1hdGVyaWFsLmJhc2VDb2xvcjtcclxuICAgICAgICBjb25zdCBhbHBoYSA9IGJhYnlsb25PcGVuUEJSTWF0ZXJpYWwuZ2VvbWV0cnlPcGFjaXR5O1xyXG4gICAgICAgIGlmIChhbGJlZG9Db2xvcikge1xyXG4gICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yID0gW2FsYmVkb0NvbG9yLnIsIGFsYmVkb0NvbG9yLmcsIGFsYmVkb0NvbG9yLmIsIGFscGhhXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gYXdhaXQgdGhpcy5fY29udmVydE1ldGFsUm91Z2hGYWN0b3JzVG9NZXRhbGxpY1JvdWdobmVzc0FzeW5jKFxyXG4gICAgICAgICAgICBiYWJ5bG9uT3BlblBCUk1hdGVyaWFsLmJhc2VDb2xvcixcclxuICAgICAgICAgICAgYmFieWxvbk9wZW5QQlJNYXRlcmlhbC5iYXNlTWV0YWxuZXNzLFxyXG4gICAgICAgICAgICBiYWJ5bG9uT3BlblBCUk1hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzLFxyXG4gICAgICAgICAgICBiYWJ5bG9uT3BlblBCUk1hdGVyaWFsLmJhc2VDb2xvclRleHR1cmUsXHJcbiAgICAgICAgICAgIGJhYnlsb25PcGVuUEJSTWF0ZXJpYWwuYmFzZU1ldGFsbmVzc1RleHR1cmUsXHJcbiAgICAgICAgICAgIGJhYnlsb25PcGVuUEJSTWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3NUZXh0dXJlLFxyXG4gICAgICAgICAgICBiYWJ5bG9uT3BlblBCUk1hdGVyaWFsLFxyXG4gICAgICAgICAgICBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsXHJcbiAgICAgICAgICAgIGhhc1VWc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NldE1ldGFsbGljUm91Z2huZXNzUGJyTWF0ZXJpYWxBc3luYyhtZXRhbGxpY1JvdWdobmVzcywgYmFieWxvbk9wZW5QQlJNYXRlcmlhbCwgZ2xURk1hdGVyaWFsLCBnbFRGUGJyTWV0YWxsaWNSb3VnaG5lc3MsIGhhc1VWcyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoTWF0ZXJpYWxBc3luYyhnbFRGTWF0ZXJpYWwsIGJhYnlsb25PcGVuUEJSTWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSB0aGlzLl9leHBvcnRlci5fbWF0ZXJpYWxzO1xyXG4gICAgICAgIG1hdGVyaWFscy5wdXNoKGdsVEZNYXRlcmlhbCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGVyaWFscy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleHBvcnRUZXh0dXJlQXN5bmMoYmFieWxvblRleHR1cmU6IEJhc2VUZXh0dXJlLCBvdmVycmlkZUlkOiBOdWxsYWJsZTxudW1iZXI+ID0gbnVsbCk6IFByb21pc2U8TnVsbGFibGU8SVRleHR1cmVJbmZvPj4ge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlSW5mbyA9IHRoaXMuX3RleHR1cmVNYXAuZ2V0KG92ZXJyaWRlSWQgPz8gYmFieWxvblRleHR1cmUudW5pcXVlSWQpO1xyXG4gICAgICAgIGlmICh0ZXh0dXJlSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGVySW5kZXggPSB0aGlzLl9leHBvcnRUZXh0dXJlU2FtcGxlcihiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IGF3YWl0IHRoaXMuX2V4cG9ydFRleHR1cmVJbWFnZUFzeW5jKGJhYnlsb25UZXh0dXJlKTtcclxuXHJcbiAgICAgICAgdGV4dHVyZUluZm8gPSB0aGlzLl9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4LCBzYW1wbGVySW5kZXgsIGJhYnlsb25UZXh0dXJlLmNvb3JkaW5hdGVzSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVNYXAuc2V0KG92ZXJyaWRlSWQgPz8gYmFieWxvblRleHR1cmUudW5pcXVlSWQsIHRleHR1cmVJbmZvKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2V4dGVuc2lvbnNQb3N0RXhwb3J0VGV4dHVyZXMoXCJleHBvcnRlclwiLCB0ZXh0dXJlSW5mbywgYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9leHBvcnRUZXh0dXJlSW1hZ2VBc3luYyhiYWJ5bG9uVGV4dHVyZTogQmFzZVRleHR1cmUpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZE1pbWVUeXBlID0gKGJhYnlsb25UZXh0dXJlIGFzIFRleHR1cmUpLm1pbWVUeXBlID8/IFwibm9uZVwiO1xyXG4gICAgICAgIC8vIFRPRE86IEFkZCBhbiBvZmZpY2lhbCB3YXkgZm9yIHVzZXJzIHRvIGV4cG9ydCB1c2luZyBhIGRpZmZlcmVudCBtaW1lIHR5cGVcclxuICAgICAgICAvLyB0aGFuIHRoZSBvbmUgdGhleSBsb2FkZWQgd2l0aCAod2hpY2ggaXMgZGVub3RlZCBieSBUZXh0dXJlLm1pbWVUeXBlKVxyXG5cclxuICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmVUb0ltYWdlID0gdGhpcy5faW50ZXJuYWxUZXh0dXJlVG9JbWFnZTtcclxuICAgICAgICBjb25zdCBpbnRlcm5hbFRleHR1cmVVbmlxdWVJZCA9IGJhYnlsb25UZXh0dXJlLmdldEludGVybmFsVGV4dHVyZSgpIS51bmlxdWVJZDtcclxuICAgICAgICBpbnRlcm5hbFRleHR1cmVUb0ltYWdlW2ludGVybmFsVGV4dHVyZVVuaXF1ZUlkXSA9IGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdIHx8IHt9O1xyXG4gICAgICAgIGxldCBpbWFnZUluZGV4UHJvbWlzZSA9IGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW3JlcXVlc3RlZE1pbWVUeXBlXTtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlSW5kZXhQcm9taXNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW1hZ2VJbmRleFByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGdldCB0aGUgaW1hZ2UgZnJvbSBtZW1vcnkgZmlyc3QsIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgR2V0Q2FjaGVkSW1hZ2VBc3luYyhiYWJ5bG9uVGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUgJiYgKHJlcXVlc3RlZE1pbWVUeXBlID09PSBcIm5vbmVcIiB8fCBjYWNoZS50eXBlID09PSByZXF1ZXN0ZWRNaW1lVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fZXhwb3J0SW1hZ2VBc3luYyhiYWJ5bG9uVGV4dHVyZS5uYW1lLCBjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHJlc2VydmUgdGV4dHVyZSBtaW1lIHR5cGUgaWYgZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbWVUeXBlID0gSW1hZ2VNaW1lVHlwZS5QTkc7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdGVkTWltZVR5cGUgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKElzU3VwcG9ydGVkTWltZVR5cGUocmVxdWVzdGVkTWltZVR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gcmVxdWVzdGVkTWltZVR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUgPSBJbWFnZU1pbWVUeXBlLlBORztcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuV2FybihgVW5zdXBwb3J0ZWQgbWVkaWEgdHlwZTogJHtyZXF1ZXN0ZWRNaW1lVHlwZX0uIEV4cG9ydGluZyB0ZXh0dXJlIGFzIFBORy5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGJhYnlsb25UZXh0dXJlLmdldFNpemUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVscyA9IGF3YWl0IEdldFRleHR1cmVEYXRhQXN5bmMoYmFieWxvblRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgRW5jb2RlSW1hZ2VBc3luYyhwaXhlbHMsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCBtaW1lVHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2V4cG9ydEltYWdlQXN5bmMoYmFieWxvblRleHR1cmUubmFtZSwgaW1hZ2VEYXRhKTtcclxuICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgIGludGVybmFsVGV4dHVyZVRvSW1hZ2VbaW50ZXJuYWxUZXh0dXJlVW5pcXVlSWRdW3JlcXVlc3RlZE1pbWVUeXBlXSA9IGltYWdlSW5kZXhQcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGltYWdlSW5kZXhQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2V4cG9ydEltYWdlQXN5bmMobmFtZTogc3RyaW5nLCBpbWFnZURhdGE6IEJsb2IpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuX2V4cG9ydGVyLl9pbWFnZXM7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZTogSUltYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLl9leHBvcnRlci5fc2hvdWxkVXNlR2xiKSB7XHJcbiAgICAgICAgICAgIGltYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBpbWFnZURhdGEudHlwZSBhcyBJbWFnZU1pbWVUeXBlLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldzogdW5kZWZpbmVkLCAvLyBXaWxsIGJlIHVwZGF0ZWQgbGF0ZXIgYnkgQnVmZmVyTWFuYWdlclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgaW1hZ2VEYXRhLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSB0aGlzLl9leHBvcnRlci5fYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KG5ldyBVaW50OEFycmF5KGRhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwb3J0ZXIuX2J1ZmZlck1hbmFnZXIuc2V0QnVmZmVyVmlldyhpbWFnZSwgYnVmZmVyVmlldyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQnVpbGQgYSB1bmlxdWUgVVJJXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VOYW1lID0gbmFtZS5yZXBsYWNlKC9cXC5cXC98XFwvfFxcLlxcXFx8XFxcXC9nLCBcIl9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IEdldEZpbGVFeHRlbnNpb25Gcm9tTWltZVR5cGUoaW1hZ2VEYXRhLnR5cGUgYXMgSW1hZ2VNaW1lVHlwZSk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IGJhc2VOYW1lICsgZXh0ZW5zaW9uO1xyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLnNvbWUoKGltYWdlKSA9PiBpbWFnZS51cmkgPT09IGZpbGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBgJHtiYXNlTmFtZX1fJHtUb29scy5SYW5kb21JZCgpfSR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHVyaTogZmlsZU5hbWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cG9ydGVyLl9pbWFnZURhdGFbZmlsZU5hbWVdID0gaW1hZ2VEYXRhOyAvLyBTYXZlIGltYWdlIGRhdGEgdG8gYmUgd3JpdHRlbiB0byBmaWxlIGxhdGVyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWFnZXMucHVzaChpbWFnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbWFnZXMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRUZXh0dXJlSW5mbyhpbWFnZUluZGV4OiBudW1iZXIsIHNhbXBsZXJJbmRleDogbnVtYmVyLCBjb29yZGluYXRlc0luZGV4PzogbnVtYmVyKTogSVRleHR1cmVJbmZvIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuX2V4cG9ydGVyLl90ZXh0dXJlcztcclxuICAgICAgICBsZXQgdGV4dHVyZUluZGV4ID0gdGV4dHVyZXMuZmluZEluZGV4KCh0KSA9PiB0LnNhbXBsZXIgPT0gc2FtcGxlckluZGV4ICYmIHQuc291cmNlID09PSBpbWFnZUluZGV4KTtcclxuICAgICAgICBpZiAodGV4dHVyZUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5kZXggPSB0ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRleHR1cmVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBpbWFnZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcjogc2FtcGxlckluZGV4LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmVJbmZvOiBJVGV4dHVyZUluZm8gPSB7IGluZGV4OiB0ZXh0dXJlSW5kZXggfTtcclxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNJbmRleCkge1xyXG4gICAgICAgICAgICB0ZXh0dXJlSW5mby50ZXhDb29yZCA9IGNvb3JkaW5hdGVzSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBvcnRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlOiBOdWxsYWJsZTxCYXNlVGV4dHVyZT4pOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXIgPSB0aGlzLl9nZXRUZXh0dXJlU2FtcGxlcih0ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgYSBwcmUtZXhpc3Rpbmcgc2FtcGxlciB3aXRoIGlkZW50aWNhbCBwYXJhbWV0ZXJzIGV4aXN0cywgdGhlbiByZXVzZSB0aGUgcHJldmlvdXMgc2FtcGxlclxyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJzID0gdGhpcy5fZXhwb3J0ZXIuX3NhbXBsZXJzO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZXJJbmRleCA9IHNhbXBsZXJzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKHMpID0+IHMubWluRmlsdGVyID09PSBzYW1wbGVyLm1pbkZpbHRlciAmJiBzLm1hZ0ZpbHRlciA9PT0gc2FtcGxlci5tYWdGaWx0ZXIgJiYgcy53cmFwUyA9PT0gc2FtcGxlci53cmFwUyAmJiBzLndyYXBUID09PSBzYW1wbGVyLndyYXBUXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2FtcGxlckluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2FtcGxlckluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2FtcGxlcnMucHVzaChzYW1wbGVyKTtcclxuICAgICAgICByZXR1cm4gc2FtcGxlcnMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElCdWZmZXJWaWV3LCBJQWNjZXNzb3IgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc29yQ29tcG9uZW50VHlwZSwgQWNjZXNzb3JUeXBlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE1vcnBoVGFyZ2V0IH0gZnJvbSBcImNvcmUvTW9ycGgvbW9ycGhUYXJnZXRcIjtcclxuaW1wb3J0IHR5cGUgeyBCdWZmZXJNYW5hZ2VyIH0gZnJvbSBcIi4vYnVmZmVyTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IHsgTm9ybWFsaXplVGFuZ2VudCB9IGZyb20gXCIuL2dsVEZVdGlsaXRpZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjMsIFZlY3RvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdG8gc3RvcmUgbW9ycGggdGFyZ2V0IGluZm9ybWF0aW9uLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vcnBoVGFyZ2V0RGF0YSB7XHJcbiAgICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xyXG4gICAgaW5mbHVlbmNlOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdWlsZE1vcnBoVGFyZ2V0QnVmZmVycyhcclxuICAgIG1vcnBoVGFyZ2V0OiBNb3JwaFRhcmdldCxcclxuICAgIG1lc2g6IEFic3RyYWN0TWVzaCxcclxuICAgIGJ1ZmZlck1hbmFnZXI6IEJ1ZmZlck1hbmFnZXIsXHJcbiAgICBidWZmZXJWaWV3czogSUJ1ZmZlclZpZXdbXSxcclxuICAgIGFjY2Vzc29yczogSUFjY2Vzc29yW10sXHJcbiAgICBjb252ZXJ0VG9SaWdodEhhbmRlZDogYm9vbGVhblxyXG4pOiBJTW9ycGhUYXJnZXREYXRhIHtcclxuICAgIGNvbnN0IHJlc3VsdDogSU1vcnBoVGFyZ2V0RGF0YSA9IHtcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcclxuICAgICAgICBpbmZsdWVuY2U6IG1vcnBoVGFyZ2V0LmluZmx1ZW5jZSxcclxuICAgICAgICBuYW1lOiBtb3JwaFRhcmdldC5uYW1lLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XHJcbiAgICBpZiAoIWdlb21ldHJ5KSB7XHJcbiAgICAgICAgVG9vbHMuV2FybihcIkF0dGVtcHRlZCB0byBleHBvcnQgbW9ycGggdGFyZ2V0IGRhdGEgZnJvbSBhIG1lc2ggd2l0aG91dCBnZW9tZXRyeS4gVGhpcyBzaG91bGQgbm90IGhhcHBlbi5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmbGlwWCA9IGNvbnZlcnRUb1JpZ2h0SGFuZGVkID8gLTEgOiAxO1xyXG4gICAgY29uc3QgZmxvYXRTaXplID0gNDtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBWZWN0b3IzLlplcm8oKTtcclxuICAgIGxldCB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICBsZXQgdmVydGV4Q291bnQgPSAwO1xyXG5cclxuICAgIGlmIChtb3JwaFRhcmdldC5oYXNQb3NpdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaFBvc2l0aW9ucyA9IG1vcnBoVGFyZ2V0LmdldFBvc2l0aW9ucygpITtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTsgLy8gQnlwYXNzZXMgYW55IGluc3RhbmNlIGRhdGEgb2YgbWVzaFxyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxQb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25EYXRhID0gbmV3IEZsb2F0MzJBcnJheShvcmlnaW5hbFBvc2l0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBbSW5maW5pdHksIEluZmluaXR5LCBJbmZpbml0eV07XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IFstSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5XTtcclxuICAgICAgICAgICAgdmVydGV4Q291bnQgPSBvcmlnaW5hbFBvc2l0aW9ucy5sZW5ndGggLyAzO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUG9zaXRpb24gPSBWZWN0b3IzLkZyb21BcnJheShvcmlnaW5hbFBvc2l0aW9ucywgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9ycGhQb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG1vcnBoUG9zaXRpb25zLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBtb3JwaFBvc2l0aW9uLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxQb3NpdGlvbiwgZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlLnggKj0gZmxpcFg7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluWzBdID0gTWF0aC5taW4obWluWzBdLCBkaWZmZXJlbmNlLngpO1xyXG4gICAgICAgICAgICAgICAgbWF4WzBdID0gTWF0aC5tYXgobWF4WzBdLCBkaWZmZXJlbmNlLngpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pblsxXSA9IE1hdGgubWluKG1pblsxXSwgZGlmZmVyZW5jZS55KTtcclxuICAgICAgICAgICAgICAgIG1heFsxXSA9IE1hdGgubWF4KG1heFsxXSwgZGlmZmVyZW5jZS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW5bMl0gPSBNYXRoLm1pbihtaW5bMl0sIGRpZmZlcmVuY2Uueik7XHJcbiAgICAgICAgICAgICAgICBtYXhbMl0gPSBNYXRoLm1heChtYXhbMl0sIGRpZmZlcmVuY2Uueik7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25EYXRhW2kgKiAzXSA9IGRpZmZlcmVuY2UueDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRGF0YVtpICogMyArIDFdID0gZGlmZmVyZW5jZS55O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25EYXRhW2kgKiAzICsgMl0gPSBkaWZmZXJlbmNlLno7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUJ1ZmZlclZpZXcocG9zaXRpb25EYXRhLCBmbG9hdFNpemUgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5WRUMzLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIG1vcnBoUG9zaXRpb25zLmxlbmd0aCAvIDMsIDAsIHsgbWluLCBtYXggfSk7XHJcbiAgICAgICAgICAgIGFjY2Vzc29ycy5wdXNoKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXNbXCJQT1NJVElPTlwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCBwb3NpdGlvbnMgZm9yIG1lc2ggJHttZXNoLm5hbWV9IHdlcmUgbm90IGV4cG9ydGVkLiBNZXNoIGRvZXMgbm90IGhhdmUgcG9zaXRpb24gdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vcnBoVGFyZ2V0Lmhhc05vcm1hbHMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaE5vcm1hbHMgPSBtb3JwaFRhcmdldC5nZXROb3JtYWxzKCkhO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTm9ybWFscyA9IGdlb21ldHJ5LmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbE5vcm1hbHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkob3JpZ2luYWxOb3JtYWxzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxOb3JtYWxzLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxOb3JtYWwgPSBWZWN0b3IzLkZyb21BcnJheShvcmlnaW5hbE5vcm1hbHMsIGkgKiAzKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoTm9ybWFsID0gVmVjdG9yMy5Gcm9tQXJyYXkobW9ycGhOb3JtYWxzLCBpICogMykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBtb3JwaE5vcm1hbC5zdWJ0cmFjdFRvUmVmKG9yaWdpbmFsTm9ybWFsLCBkaWZmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBub3JtYWxEYXRhW2kgKiAzXSA9IGRpZmZlcmVuY2UueCAqIGZsaXBYO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsRGF0YVtpICogMyArIDFdID0gZGlmZmVyZW5jZS55O1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsRGF0YVtpICogMyArIDJdID0gZGlmZmVyZW5jZS56O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KG5vcm1hbERhdGEsIGZsb2F0U2l6ZSAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgQWNjZXNzb3JUeXBlLlZFQzMsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgbW9ycGhOb3JtYWxzLmxlbmd0aCAvIDMsIDApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzW1wiTk9STUFMXCJdID0gYWNjZXNzb3JzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuV2FybihgTW9ycGggdGFyZ2V0IG5vcm1hbHMgZm9yIG1lc2ggJHttZXNoLm5hbWV9IHdlcmUgbm90IGV4cG9ydGVkLiBNZXNoIGRvZXMgbm90IGhhdmUgbm9ybWFscyB2ZXJ0ZXggZGF0YWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9ycGhUYXJnZXQuaGFzVGFuZ2VudHMpIHtcclxuICAgICAgICBjb25zdCBtb3JwaFRhbmdlbnRzID0gbW9ycGhUYXJnZXQuZ2V0VGFuZ2VudHMoKSE7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUYW5nZW50cyA9IGdlb21ldHJ5LmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuVGFuZ2VudEtpbmQpO1xyXG5cclxuICAgICAgICBpZiAob3JpZ2luYWxUYW5nZW50cykge1xyXG4gICAgICAgICAgICB2ZXJ0ZXhDb3VudCA9IG9yaWdpbmFsVGFuZ2VudHMubGVuZ3RoIC8gNDtcclxuICAgICAgICAgICAgY29uc3QgdGFuZ2VudERhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRleENvdW50ICogMyk7XHJcbiAgICAgICAgICAgIHZlcnRleFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHZlcnRleFN0YXJ0OyBpIDwgdmVydGV4Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgLy8gT25seSByZWFkIHRoZSB4LCB5LCB6IGNvbXBvbmVudHMgYW5kIGlnbm9yZSB3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFRhbmdlbnQgPSBWZWN0b3IzLkZyb21BcnJheShvcmlnaW5hbFRhbmdlbnRzLCBpICogNCk7XHJcbiAgICAgICAgICAgICAgICBOb3JtYWxpemVUYW5nZW50KG9yaWdpbmFsVGFuZ2VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTW9ycGggdGFyZ2V0IHRhbmdlbnRzIG9taXQgdGhlIHcgY29tcG9uZW50IHNvIGl0IHdvbid0IGJlIHByZXNlbnQgaW4gdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoVGFuZ2VudCA9IFZlY3RvcjMuRnJvbUFycmF5KG1vcnBoVGFuZ2VudHMsIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIE5vcm1hbGl6ZVRhbmdlbnQobW9ycGhUYW5nZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBtb3JwaFRhbmdlbnQuc3VidHJhY3RUb1JlZihvcmlnaW5hbFRhbmdlbnQsIGRpZmZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgdGFuZ2VudERhdGFbaSAqIDNdID0gZGlmZmVyZW5jZS54ICogZmxpcFg7XHJcbiAgICAgICAgICAgICAgICB0YW5nZW50RGF0YVtpICogMyArIDFdID0gZGlmZmVyZW5jZS55O1xyXG4gICAgICAgICAgICAgICAgdGFuZ2VudERhdGFbaSAqIDMgKyAyXSA9IGRpZmZlcmVuY2UuejtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyTWFuYWdlci5jcmVhdGVCdWZmZXJWaWV3KHRhbmdlbnREYXRhLCBmbG9hdFNpemUgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzb3IgPSBidWZmZXJNYW5hZ2VyLmNyZWF0ZUFjY2Vzc29yKGJ1ZmZlclZpZXcsIEFjY2Vzc29yVHlwZS5WRUMzLCBBY2Nlc3NvckNvbXBvbmVudFR5cGUuRkxPQVQsIHZlcnRleENvdW50LCAwKTtcclxuICAgICAgICAgICAgYWNjZXNzb3JzLnB1c2goYWNjZXNzb3IpO1xyXG4gICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlc1tcIlRBTkdFTlRcIl0gPSBhY2Nlc3NvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKGBNb3JwaCB0YXJnZXQgdGFuZ2VudHMgZm9yIG1lc2ggJHttZXNoLm5hbWV9IHdlcmUgbm90IGV4cG9ydGVkLiBNZXNoIGRvZXMgbm90IGhhdmUgdGFuZ2VudHMgdmVydGV4IGRhdGFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vcnBoVGFyZ2V0Lmhhc0NvbG9ycykge1xyXG4gICAgICAgIGNvbnN0IG1vcnBoQ29sb3JzID0gbW9ycGhUYXJnZXQuZ2V0Q29sb3JzKCkhO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQ29sb3JzID0gZ2VvbWV0cnkuZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGdlb21ldHJ5LmdldFZlcnRleEJ1ZmZlcihWZXJ0ZXhCdWZmZXIuQ29sb3JLaW5kKTtcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsQ29sb3JzICYmIGJ1ZmZlcikge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRTaXplID0gYnVmZmVyLmdldFNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHZlcnRleENvdW50ID0gb3JpZ2luYWxDb2xvcnMubGVuZ3RoIC8gY29tcG9uZW50U2l6ZTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhDb3VudCAqIGNvbXBvbmVudFNpemUpO1xyXG4gICAgICAgICAgICB2ZXJ0ZXhTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB2ZXJ0ZXhTdGFydDsgaSA8IHZlcnRleENvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRTaXplID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvciA9IFZlY3RvcjMuRnJvbUFycmF5KG9yaWdpbmFsQ29sb3JzLCBpICogY29tcG9uZW50U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhDb2xvciA9IFZlY3RvcjMuRnJvbUFycmF5KG1vcnBoQ29sb3JzLCBpICogY29tcG9uZW50U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1vcnBoQ29sb3Iuc3VidHJhY3RUb1JlZihvcmlnaW5hbENvbG9yLCBkaWZmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDNdID0gZGlmZmVyZW5jZS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogMyArIDFdID0gZGlmZmVyZW5jZS55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogMyArIDJdID0gZGlmZmVyZW5jZS56O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRTaXplID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZTQgPSBuZXcgVmVjdG9yNCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29sb3IgPSBWZWN0b3I0LkZyb21BcnJheShvcmlnaW5hbENvbG9ycywgaSAqIGNvbXBvbmVudFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcnBoQ29sb3IgPSBWZWN0b3I0LkZyb21BcnJheShtb3JwaENvbG9ycywgaSAqIGNvbXBvbmVudFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtb3JwaENvbG9yLnN1YnRyYWN0VG9SZWYob3JpZ2luYWxDb2xvciwgZGlmZmVyZW5jZTQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogNF0gPSBkaWZmZXJlbmNlNC54O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yRGF0YVtpICogNCArIDFdID0gZGlmZmVyZW5jZTQueTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbaSAqIDQgKyAyXSA9IGRpZmZlcmVuY2U0Lno7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JEYXRhW2kgKiA0ICsgM10gPSBkaWZmZXJlbmNlNC53O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBVbnN1cHBvcnRlZCBudW1iZXIgb2YgY29tcG9uZW50cyBmb3IgY29sb3IgYXR0cmlidXRlOiAke2NvbXBvbmVudFNpemV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQnVmZmVyVmlldyhjb2xvckRhdGEsIGZsb2F0U2l6ZSAqIGNvbXBvbmVudFNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NvciA9IGJ1ZmZlck1hbmFnZXIuY3JlYXRlQWNjZXNzb3IoYnVmZmVyVmlldywgY29tcG9uZW50U2l6ZSA9PT0gMyA/IEFjY2Vzc29yVHlwZS5WRUMzIDogQWNjZXNzb3JUeXBlLlZFQzQsIEFjY2Vzc29yQ29tcG9uZW50VHlwZS5GTE9BVCwgdmVydGV4Q291bnQsIDApO1xyXG4gICAgICAgICAgICBhY2Nlc3NvcnMucHVzaChhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzW1wiQ09MT1JfMFwiXSA9IGFjY2Vzc29ycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLldhcm4oYE1vcnBoIHRhcmdldCBjb2xvcnMgZm9yIG1lc2ggJHttZXNoLm5hbWV9IHdlcmUgbm90IGV4cG9ydGVkLiBNZXNoIGRvZXMgbm90IGhhdmUgY29sb3JzIHZlcnRleCBkYXRhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBOb2RlIH0gZnJvbSBcImNvcmUvbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEdMVEZEYXRhIH0gZnJvbSBcIi4vZ2xURkRhdGFcIjtcclxuaW1wb3J0IHsgR0xURkV4cG9ydGVyIH0gZnJvbSBcIi4vZ2xURkV4cG9ydGVyXCI7XHJcblxyXG4vKipcclxuICogTWVzaCBjb21wcmVzc2lvbiBtZXRob2RzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVzaENvbXByZXNzaW9uTWV0aG9kID0gXCJOb25lXCIgfCBcIkRyYWNvXCI7XHJcblxyXG4vKipcclxuICogSG9sZHMgYSBjb2xsZWN0aW9uIG9mIGV4cG9ydGVyIG9wdGlvbnMgYW5kIHBhcmFtZXRlcnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV4cG9ydE9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciBhIGJhYnlsb24gbm9kZSBzaG91bGQgYmUgZXhwb3J0ZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gbm9kZSBzb3VyY2UgQmFieWxvbiBub2RlLiBJdCBpcyB1c2VkIHRvIGNoZWNrIHdoZXRoZXIgaXQgc2hvdWxkIGJlIGV4cG9ydGVkIHRvIGdsVEYgb3Igbm90XHJcbiAgICAgKiBAcmV0dXJucyBib29sZWFuLCB3aGljaCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgbm9kZSBzaG91bGQgYmUgZXhwb3J0ZWQgKHRydWUpIG9yIG5vdCAoZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHNob3VsZEV4cG9ydE5vZGU/KG5vZGU6IE5vZGUpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggaW5kaWNhdGVzIHdoZXRoZXIgYW4gYW5pbWF0aW9uIG9uIHRoZSBzY2VuZSBzaG91bGQgYmUgZXhwb3J0ZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIHNvdXJjZSBhbmltYXRpb25cclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4sIHdoaWNoIGluZGljYXRlcyB3aGV0aGVyIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlIGV4cG9ydGVkICh0cnVlKSBvciBub3QgKGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzaG91bGRFeHBvcnRBbmltYXRpb24/KGFuaW1hdGlvbjogQW5pbWF0aW9uKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIHBhcnQgb2YgdGhlIHNjZW5lIG9yIG5vZGUncyBgbWV0YWRhdGFgIHRoYXQgd2lsbCBwb3B1bGF0ZSB0aGUgY29ycmVzcG9uZGluZ1xyXG4gICAgICogZ2xURiBvYmplY3QncyBgZXh0cmFzYCBmaWVsZC4gSWYgbm90IGRlZmluZWQsIGBub2RlLm1ldGFkYXRhLmdsdGYuZXh0cmFzYCB3aWxsIGJlIHVzZWQuXHJcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGEgc291cmNlIG1ldGFkYXRhIHRvIHJlYWQgZnJvbVxyXG4gICAgICogQHJldHVybnMgdGhlIGRhdGEgdG8gc3RvcmUgaW50byB0aGUgZ2xURiBleHRyYXMgZmllbGRcclxuICAgICAqL1xyXG4gICAgbWV0YWRhdGFTZWxlY3Rvcj8obWV0YWRhdGE6IGFueSk6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzYW1wbGUgcmF0ZSB0byBiYWtlIGFuaW1hdGlvbiBjdXJ2ZXMuIERlZmF1bHRzIHRvIDEgLyA2MC5cclxuICAgICAqL1xyXG4gICAgYW5pbWF0aW9uU2FtcGxlUmF0ZT86IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJlZ2luIHNlcmlhbGl6YXRpb24gd2l0aG91dCB3YWl0aW5nIGZvciB0aGUgc2NlbmUgdG8gYmUgcmVhZHkuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBleHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyBpZiB1bnVzZWQgdmVydGV4IHV2IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIGV4cG9ydC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydFVudXNlZFVWcz86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgbm8tb3Agcm9vdCBub2RlcyB3aGVuIHBvc3NpYmxlLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICByZW1vdmVOb29wUm9vdE5vZGVzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyBpZiBjb29yZGluYXRlIHN5c3RlbSBzd2FwcGluZyByb290IG5vZGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBleHBvcnQuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSByZW1vdmVOb29wUm9vdE5vZGVzIGluc3RlYWRcclxuICAgICAqL1xyXG4gICAgaW5jbHVkZUNvb3JkaW5hdGVTeXN0ZW1Db252ZXJzaW9uTm9kZXM/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHdoYXQgY29tcHJlc3Npb24gbWV0aG9kIHRvIGFwcGx5IHRvIG1lc2ggZGF0YS5cclxuICAgICAqL1xyXG4gICAgbWVzaENvbXByZXNzaW9uTWV0aG9kPzogTWVzaENvbXByZXNzaW9uTWV0aG9kO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgZm9yIGdlbmVyYXRpbmcgZ2xURiBkYXRhIGZyb20gYSBCYWJ5bG9uIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEYyRXhwb3J0IHtcclxuICAgIC8qKlxyXG4gICAgICogRXhwb3J0cyB0aGUgc2NlbmUgdG8gLmdsdGYgZmlsZSBmb3JtYXRcclxuICAgICAqIEBwYXJhbSBzY2VuZSBCYWJ5bG9uIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgTmFtZSB0byB1c2UgZm9yIHRoZSAuZ2x0ZiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBFeHBvcnRlciBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBleHBvcnRlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgR0xURkFzeW5jKHNjZW5lOiBTY2VuZSwgZmlsZU5hbWU6IHN0cmluZywgb3B0aW9ucz86IElFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxHTFRGRGF0YT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5leHBvcnRXaXRob3V0V2FpdGluZ0ZvclNjZW5lKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNjZW5lLndoZW5SZWFkeUFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHBvcnRlciA9IG5ldyBHTFRGRXhwb3J0ZXIoc2NlbmUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHBvcnRlci5nZW5lcmF0ZUdMVEZBc3luYyhmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLywgXCJcIikpO1xyXG4gICAgICAgIGV4cG9ydGVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHBvcnRzIHRoZSBzY2VuZSB0byAuZ2xiIGZpbGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgQmFieWxvbiBzY2VuZVxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIE5hbWUgdG8gdXNlIGZvciB0aGUgLmdsYiBmaWxlXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBFeHBvcnRlciBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBleHBvcnRlZCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgR0xCQXN5bmMoc2NlbmU6IFNjZW5lLCBmaWxlTmFtZTogc3RyaW5nLCBvcHRpb25zPzogSUV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPEdMVEZEYXRhPiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmV4cG9ydFdpdGhvdXRXYWl0aW5nRm9yU2NlbmUpIHtcclxuICAgICAgICAgICAgYXdhaXQgc2NlbmUud2hlblJlYWR5QXN5bmMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cG9ydGVyID0gbmV3IEdMVEZFeHBvcnRlcihzY2VuZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGV4cG9ydGVyLmdlbmVyYXRlR0xCQXN5bmMoZmlsZU5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpKTtcclxuICAgICAgICBleHBvcnRlci5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL3JlcXVpcmUtanNkb2MgKi9cclxuaW1wb3J0IHR5cGUgeyBJTm9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzb3JUeXBlLCBNZXNoUHJpbWl0aXZlTW9kZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBEYXRhQXJyYXksIEluZGljZXNBcnJheSwgRGVlcEltbXV0YWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFRtcFZlY3RvcnMsIE1hdHJpeCwgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgRW51bWVyYXRlRmxvYXRWYWx1ZXMgfSBmcm9tIFwiY29yZS9CdWZmZXJzL2J1ZmZlclV0aWxzXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgVGFyZ2V0Q2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy90YXJnZXRDYW1lcmFcIjtcclxuaW1wb3J0IHR5cGUgeyBTaGFkb3dMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zaGFkb3dMaWdodFwiO1xyXG5pbXBvcnQgeyBFcHNpbG9uIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ29udmVydEhhbmRlZG5lc3NNYXRyaXggfSBmcm9tIFwiLi4vLi4vZXhwb3J0VXRpbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBBcmVhTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvYXJlYUxpZ2h0XCI7XHJcblxyXG4vLyBEZWZhdWx0IHZhbHVlcyBmb3IgY29tcGFyaXNvbi5cclxuZXhwb3J0IGNvbnN0IERlZmF1bHRUcmFuc2xhdGlvbiA9IFZlY3RvcjMuWmVyb1JlYWRPbmx5O1xyXG5leHBvcnQgY29uc3QgRGVmYXVsdFJvdGF0aW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpIGFzIERlZXBJbW11dGFibGU8UXVhdGVybmlvbj47XHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0U2NhbGUgPSBWZWN0b3IzLk9uZVJlYWRPbmx5O1xyXG5jb25zdCBEZWZhdWx0TG9hZGVyQ2FtZXJhUGFyZW50U2NhbGVMaCA9IG5ldyBWZWN0b3IzKC0xLCAxLCAxKSBhcyBEZWVwSW1tdXRhYmxlPFZlY3RvcjM+O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IGZvciBlbnVtZXJhdGluZyBhIHZlcnRleCBidWZmZXIuXHJcbiAqIEBwYXJhbSB2ZXJ0ZXhCdWZmZXIgdGhlIHZlcnRleCBidWZmZXIgdG8gZW51bWVyYXRlXHJcbiAqIEBwYXJhbSBtZXNoZXMgdGhlIG1lc2hlcyB0aGF0IHVzZSB0aGUgdmVydGV4IGJ1ZmZlclxyXG4gKiBAcmV0dXJucyB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIGVudW1lcmF0ZSB0aGUgdmVydGV4IGJ1ZmZlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFZlcnRleEJ1ZmZlckluZm8odmVydGV4QnVmZmVyOiBWZXJ0ZXhCdWZmZXIsIG1lc2hlczogQWJzdHJhY3RNZXNoW10pIHtcclxuICAgIGNvbnN0IHsgYnl0ZU9mZnNldCwgYnl0ZVN0cmlkZSwgdHlwZSwgbm9ybWFsaXplZCB9ID0gdmVydGV4QnVmZmVyO1xyXG4gICAgY29uc3QgY29tcG9uZW50Q291bnQgPSB2ZXJ0ZXhCdWZmZXIuZ2V0U2l6ZSgpO1xyXG4gICAgY29uc3QgdG90YWxWZXJ0aWNlcyA9IG1lc2hlcy5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50LmdldFRvdGFsVmVydGljZXMoKSA+IG1heCA/IGN1cnJlbnQuZ2V0VG90YWxWZXJ0aWNlcygpIDogbWF4O1xyXG4gICAgfSwgLU51bWJlci5NQVhfVkFMVUUpOyAvLyBHZXQgdGhlIG1heCB0b3RhbCB2ZXJ0aWNlcyBjb3VudCwgdG8gZW5zdXJlIHdlIGNhcHR1cmUgdGhlIGZ1bGwgcmFuZ2Ugb2YgdmVydGV4IGRhdGEgdXNlZCBieSB0aGUgbWVzaGVzLlxyXG4gICAgY29uc3QgY291bnQgPSB0b3RhbFZlcnRpY2VzICogY29tcG9uZW50Q291bnQ7XHJcbiAgICBjb25zdCBraW5kID0gdmVydGV4QnVmZmVyLmdldEtpbmQoKTtcclxuXHJcbiAgICByZXR1cm4geyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCBjb21wb25lbnRDb3VudCwgdHlwZSwgY291bnQsIG5vcm1hbGl6ZWQsIHRvdGFsVmVydGljZXMsIGtpbmQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFjY2Vzc29yRWxlbWVudENvdW50KGFjY2Vzc29yVHlwZTogQWNjZXNzb3JUeXBlKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAoYWNjZXNzb3JUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUMjpcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUMzpcclxuICAgICAgICAgICAgcmV0dXJuIDk7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuTUFUNDpcclxuICAgICAgICAgICAgcmV0dXJuIDE2O1xyXG4gICAgICAgIGNhc2UgQWNjZXNzb3JUeXBlLlNDQUxBUjpcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDMjpcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDMzpcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgY2FzZSBBY2Nlc3NvclR5cGUuVkVDNDpcclxuICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGbG9hdHNOZWVkMTZCaXRJbnRlZ2VyKGZsb2F0QXJyYXk6IEZsb2F0QXJyYXkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmbG9hdEFycmF5LnNvbWUoKHZhbHVlKSA9PiB2YWx1ZSA+PSAyNTYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNTdGFuZGFyZFZlcnRleEF0dHJpYnV0ZSh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc1dlaWdodHNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0V4dHJhS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYyS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjNLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNEtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY1S2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjZLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFjY2Vzc29yVHlwZShraW5kOiBzdHJpbmcsIGhhc1ZlcnRleENvbG9yQWxwaGE6IGJvb2xlYW4pOiBBY2Nlc3NvclR5cGUge1xyXG4gICAgaWYgKGtpbmQgPT0gVmVydGV4QnVmZmVyLkNvbG9yS2luZCkge1xyXG4gICAgICAgIHJldHVybiBoYXNWZXJ0ZXhDb2xvckFscGhhID8gQWNjZXNzb3JUeXBlLlZFQzQgOiBBY2Nlc3NvclR5cGUuVkVDMztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUMzO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlRhbmdlbnRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzSW5kaWNlc0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzRXh0cmFLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLk1hdHJpY2VzV2VpZ2h0c0tpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gQWNjZXNzb3JUeXBlLlZFQzQ7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVZLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVYzS2luZDpcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjRLaW5kOlxyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY2S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIEFjY2Vzc29yVHlwZS5WRUMyO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBraW5kICR7a2luZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEF0dHJpYnV0ZVR5cGUoa2luZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAoa2luZCkge1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiUE9TSVRJT05cIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJOT1JNQUxcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEFOR0VOVFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLkNvbG9yS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ09MT1JfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfMFwiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWMktpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzFcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjNLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF8yXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuVVY0S2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEVYQ09PUkRfM1wiO1xyXG4gICAgICAgIGNhc2UgVmVydGV4QnVmZmVyLlVWNUtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRFWENPT1JEXzRcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5VVjZLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJURVhDT09SRF81XCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNJbmRpY2VzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiSk9JTlRTXzBcIjtcclxuICAgICAgICBjYXNlIFZlcnRleEJ1ZmZlci5NYXRyaWNlc0luZGljZXNFeHRyYUtpbmQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpPSU5UU18xXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzS2luZDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiV0VJR0hUU18wXCI7XHJcbiAgICAgICAgY2FzZSBWZXJ0ZXhCdWZmZXIuTWF0cmljZXNXZWlnaHRzRXh0cmFLaW5kOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJXRUlHSFRTXzFcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24ga2luZDogJHtraW5kfWApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0UHJpbWl0aXZlTW9kZShmaWxsTW9kZTogbnVtYmVyKTogTWVzaFByaW1pdGl2ZU1vZGUge1xyXG4gICAgc3dpdGNoIChmaWxsTW9kZSkge1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGaWxsTW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFUztcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlRyaWFuZ2xlU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX1NUUklQO1xyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlRSSUFOR0xFX0ZBTjtcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLlBvaW50TGlzdERyYXdNb2RlOlxyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuUG9pbnRGaWxsTW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLlBPSU5UUztcclxuICAgICAgICBjYXNlIE1hdGVyaWFsLkxpbmVMb29wRHJhd01vZGU6XHJcbiAgICAgICAgICAgIHJldHVybiBNZXNoUHJpbWl0aXZlTW9kZS5MSU5FX0xPT1A7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lTGlzdERyYXdNb2RlOlxyXG4gICAgICAgICAgICByZXR1cm4gTWVzaFByaW1pdGl2ZU1vZGUuTElORVM7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5MaW5lU3RyaXBEcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIE1lc2hQcmltaXRpdmVNb2RlLkxJTkVfU1RSSVA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGZpbGwgbW9kZTogJHtmaWxsTW9kZX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElzVHJpYW5nbGVGaWxsTW9kZShmaWxsTW9kZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKGZpbGxNb2RlKSB7XHJcbiAgICAgICAgY2FzZSBNYXRlcmlhbC5UcmlhbmdsZUZpbGxNb2RlOlxyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVTdHJpcERyYXdNb2RlOlxyXG4gICAgICAgIGNhc2UgTWF0ZXJpYWwuVHJpYW5nbGVGYW5EcmF3TW9kZTpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm9ybWFsaXplVGFuZ2VudCh0YW5nZW50OiBWZWN0b3I0IHwgVmVjdG9yMykge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHRhbmdlbnQueCAqIHRhbmdlbnQueCArIHRhbmdlbnQueSAqIHRhbmdlbnQueSArIHRhbmdlbnQueiAqIHRhbmdlbnQueik7XHJcbiAgICBpZiAobGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRhbmdlbnQueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgdGFuZ2VudC55IC89IGxlbmd0aDtcclxuICAgICAgICB0YW5nZW50LnogLz0gbGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRvUmlnaHRIYW5kZWRQb3NpdGlvbih2YWx1ZTogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgdmFsdWUueCAqPSAtMTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRvUmlnaHRIYW5kZWRUcmFuc2Zvcm1NYXRyaXgobWF0cml4OiBNYXRyaXgpOiBNYXRyaXgge1xyXG4gICAgQ29udmVydEhhbmRlZG5lc3NNYXRyaXguaW52ZXJ0VG9SZWYoVG1wVmVjdG9ycy5NYXRyaXhbMF0pLm11bHRpcGx5VG9SZWYobWF0cml4LCBtYXRyaXgpLm11bHRpcGx5VG9SZWYoQ29udmVydEhhbmRlZG5lc3NNYXRyaXgsIG1hdHJpeCk7XHJcbiAgICByZXR1cm4gbWF0cml4O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMsIGluLXBsYWNlLCBhIGxlZnQtaGFuZGVkIHF1YXRlcm5pb24gdG8gYSByaWdodC1oYW5kZWQgcXVhdGVybmlvbiB2aWEgYSBjaGFuZ2Ugb2YgYmFzaXMuXHJcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdW5pdCBxdWF0ZXJuaW9uIHRvIGNvbnZlcnRcclxuICogQHJldHVybnMgdGhlIGNvbnZlcnRlZCBxdWF0ZXJuaW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29udmVydFRvUmlnaHRIYW5kZWRSb3RhdGlvbih2YWx1ZTogUXVhdGVybmlvbik6IFF1YXRlcm5pb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIHRoZSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIGZvbGxvd2luZyBlcXVhdGlvbjpcclxuICAgICAqICAgIHEnID0gdG9fcXVhdGVybmlvbihNICogdG9fbWF0cml4KHEpICogTV4tMSlcclxuICAgICAqIHdoZXJlIE0gaXMgdGhlIGNvbnZlcnNpb24gbWF0cml4IGBjb252ZXJ0SGFuZGVkbmVzc01hdHJpeGAsXHJcbiAgICAgKiBxIGlzIHRoZSBpbnB1dCBxdWF0ZXJuaW9uLCBhbmQgcScgaXMgdGhlIGNvbnZlcnRlZCBxdWF0ZXJuaW9uLlxyXG4gICAgICogUmVmZXJlbmNlOiBodHRwczovL2QzY3czZGQydzMyeDJiLmNsb3VkZnJvbnQubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzAxL21hdHJpeC10by1xdWF0LnBkZlxyXG4gICAgICovXHJcbiAgICBpZiAodmFsdWUueCAqIHZhbHVlLnggKyB2YWx1ZS55ICogdmFsdWUueSA+IDAuNSkge1xyXG4gICAgICAgIGNvbnN0IGFic1ggPSBNYXRoLmFicyh2YWx1ZS54KTtcclxuICAgICAgICBjb25zdCBhYnNZID0gTWF0aC5hYnModmFsdWUueSk7XHJcbiAgICAgICAgaWYgKGFic1ggPiBhYnNZKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24odmFsdWUueCk7XHJcbiAgICAgICAgICAgIHZhbHVlLnggPSBhYnNYO1xyXG4gICAgICAgICAgICB2YWx1ZS55ICo9IC1zaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS56ICo9IC1zaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS53ICo9IHNpZ247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbih2YWx1ZS55KTtcclxuICAgICAgICAgICAgdmFsdWUueCAqPSAtc2lnbjtcclxuICAgICAgICAgICAgdmFsdWUueSA9IGFic1k7XHJcbiAgICAgICAgICAgIHZhbHVlLnogKj0gc2lnbjtcclxuICAgICAgICAgICAgdmFsdWUudyAqPSAtc2lnbjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGFic1ogPSBNYXRoLmFicyh2YWx1ZS56KTtcclxuICAgICAgICBjb25zdCBhYnNXID0gTWF0aC5hYnModmFsdWUudyk7XHJcbiAgICAgICAgaWYgKGFic1ogPiBhYnNXKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24odmFsdWUueik7XHJcbiAgICAgICAgICAgIHZhbHVlLnggKj0gLXNpZ247XHJcbiAgICAgICAgICAgIHZhbHVlLnkgKj0gc2lnbjtcclxuICAgICAgICAgICAgdmFsdWUueiA9IGFic1o7XHJcbiAgICAgICAgICAgIHZhbHVlLncgKj0gLXNpZ247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbih2YWx1ZS53KTtcclxuICAgICAgICAgICAgdmFsdWUueCAqPSBzaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS55ICo9IC1zaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS56ICo9IC1zaWduO1xyXG4gICAgICAgICAgICB2YWx1ZS53ID0gYWJzVztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogUHJlLW11bHRpcGxpZXMgYSAxODAtZGVncmVlIFkgcm90YXRpb24gdG8gdGhlIHF1YXRlcm5pb24sIGluIG9yZGVyIHRvIG1hdGNoIGdsVEYncyBmbGlwcGVkIGZvcndhcmQgZGlyZWN0aW9uIGZvciBjYW1lcmFzLlxyXG4gKiBAcGFyYW0gcm90YXRpb24gVGFyZ2V0IGNhbWVyYSByb3RhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3RhdGUxODBZKHJvdGF0aW9uOiBRdWF0ZXJuaW9uKTogdm9pZCB7XHJcbiAgICAvLyBTaW1wbGlmaWVkIGZyb206IHJvdGF0aW9uICogKDAsIDEsIDAsIDApLlxyXG4gICAgcm90YXRpb24uY29weUZyb21GbG9hdHMoLXJvdGF0aW9uLnosIHJvdGF0aW9uLncsIHJvdGF0aW9uLngsIC1yb3RhdGlvbi55KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbGxhcHNlcyBHTFRGIHBhcmVudCBhbmQgbm9kZSBpbnRvIGEgc2luZ2xlIG5vZGUsIGlnbm9yaW5nIHNjYWxpbmcuXHJcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciByZW1vdmluZyBub2RlcyB0aGF0IHdlcmUgYWRkZWQgYnkgdGhlIEdMVEYgaW1wb3J0ZXIuXHJcbiAqIEBwYXJhbSBub2RlIE9yaWdpbmFsIEdMVEYgbm9kZSAoTGlnaHQgb3IgQ2FtZXJhKS5cclxuICogQHBhcmFtIHBhcmVudE5vZGUgVGFyZ2V0IHBhcmVudCBub2RlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNlQ2hpbGRJbnRvUGFyZW50KG5vZGU6IElOb2RlLCBwYXJlbnROb2RlOiBJTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50VHJhbnNsYXRpb24gPSBWZWN0b3IzLkZyb21BcnJheVRvUmVmKHBhcmVudE5vZGUudHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdLCAwLCBUbXBWZWN0b3JzLlZlY3RvcjNbMF0pO1xyXG4gICAgY29uc3QgcGFyZW50Um90YXRpb24gPSBRdWF0ZXJuaW9uLkZyb21BcnJheVRvUmVmKHBhcmVudE5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdLCAwLCBUbXBWZWN0b3JzLlF1YXRlcm5pb25bMF0pO1xyXG4gICAgY29uc3QgcGFyZW50TWF0cml4ID0gTWF0cml4LkNvbXBvc2VUb1JlZihEZWZhdWx0U2NhbGUsIHBhcmVudFJvdGF0aW9uLCBwYXJlbnRUcmFuc2xhdGlvbiwgVG1wVmVjdG9ycy5NYXRyaXhbMF0pO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gVmVjdG9yMy5Gcm9tQXJyYXlUb1JlZihub2RlLnRyYW5zbGF0aW9uIHx8IFswLCAwLCAwXSwgMCwgVG1wVmVjdG9ycy5WZWN0b3IzWzJdKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gUXVhdGVybmlvbi5Gcm9tQXJyYXlUb1JlZihub2RlLnJvdGF0aW9uIHx8IFswLCAwLCAwLCAxXSwgMCwgVG1wVmVjdG9ycy5RdWF0ZXJuaW9uWzFdKTtcclxuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5Db21wb3NlVG9SZWYoRGVmYXVsdFNjYWxlLCByb3RhdGlvbiwgdHJhbnNsYXRpb24sIFRtcFZlY3RvcnMuTWF0cml4WzFdKTtcclxuXHJcbiAgICBwYXJlbnRNYXRyaXgubXVsdGlwbHlUb1JlZihtYXRyaXgsIG1hdHJpeCk7XHJcbiAgICBtYXRyaXguZGVjb21wb3NlKHVuZGVmaW5lZCwgcGFyZW50Um90YXRpb24sIHBhcmVudFRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICBpZiAocGFyZW50VHJhbnNsYXRpb24uZXF1YWxzV2l0aEVwc2lsb24oRGVmYXVsdFRyYW5zbGF0aW9uLCBFcHNpbG9uKSkge1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlLnRyYW5zbGF0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLnRyYW5zbGF0aW9uID0gcGFyZW50VHJhbnNsYXRpb24uYXNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXJlbnRSb3RhdGlvbi5lcXVhbHNXaXRoRXBzaWxvbihEZWZhdWx0Um90YXRpb24sIEVwc2lsb24pKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudE5vZGUucm90YXRpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUucm90YXRpb24gPSBwYXJlbnRSb3RhdGlvbi5hc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUuc2NhbGUpIHtcclxuICAgICAgICBkZWxldGUgcGFyZW50Tm9kZS5zY2FsZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGEgY2FtZXJhIG9yIGxpZ2h0IG5vZGUgaXMgY2FuZGlkYXRlIGZvciBjb2xsYXBzaW5nIHdpdGggaXRzIHBhcmVudCBub2RlLlxyXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3Igcm91bmR0cmlwcywgYXMgdGhlIGdsVEYgSW1wb3J0ZXIgcGFyZW50cyBhIG5ldyBub2RlIHRvXHJcbiAqIGxpZ2h0cyBhbmQgY2FtZXJhcyB0byBzdG9yZSB0aGVpciBvcmlnaW5hbCB0cmFuc2Zvcm1hdGlvbiBpbmZvcm1hdGlvbi5cclxuICogQHBhcmFtIGJhYnlsb25Ob2RlIEJhYnlsb24gbGlnaHQgb3IgY2FtZXJhIG5vZGUuXHJcbiAqIEBwYXJhbSBwYXJlbnRCYWJ5bG9uTm9kZSBUYXJnZXQgQmFieWxvbiBwYXJlbnQgbm9kZS5cclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHdvIG5vZGVzIGNhbiBiZSBtZXJnZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJc0NoaWxkQ29sbGFwc2libGUoYmFieWxvbk5vZGU6IFNoYWRvd0xpZ2h0IHwgVGFyZ2V0Q2FtZXJhIHwgQXJlYUxpZ2h0LCBwYXJlbnRCYWJ5bG9uTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCEocGFyZW50QmFieWxvbk5vZGUgaW5zdGFuY2VvZiBUcmFuc2Zvcm1Ob2RlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgY2hpbGQgaXMgdGhlIG9ubHkgZGVzY2VuZGFudFxyXG4gICAgY29uc3QgaXNPbmx5RGVzY2VuZGFudCA9IHBhcmVudEJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09PSAxICYmIGJhYnlsb25Ob2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09PSAwICYmIGJhYnlsb25Ob2RlLnBhcmVudCA9PT0gcGFyZW50QmFieWxvbk5vZGU7XHJcbiAgICBpZiAoIWlzT25seURlc2NlbmRhbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IHBhcmVudCBoYXMgdGhlIGV4cGVjdGVkIHNjYWxpbmcsIGRldGVybWluZWQgYnkgdGhlIG5vZGUgdHlwZSBhbmQgc2NlbmUncyBjb29yZGluYXRlIHN5c3RlbS5cclxuICAgIGNvbnN0IHNjZW5lID0gYmFieWxvbk5vZGUuZ2V0U2NlbmUoKTtcclxuICAgIGNvbnN0IGV4cGVjdGVkU2NhbGUgPSBiYWJ5bG9uTm9kZSBpbnN0YW5jZW9mIFRhcmdldENhbWVyYSAmJiAhc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyBEZWZhdWx0TG9hZGVyQ2FtZXJhUGFyZW50U2NhbGVMaCA6IERlZmF1bHRTY2FsZTtcclxuXHJcbiAgICBpZiAoIXBhcmVudEJhYnlsb25Ob2RlLnNjYWxpbmcuZXF1YWxzV2l0aEVwc2lsb24oZXhwZWN0ZWRTY2FsZSwgRXBzaWxvbikpIHtcclxuICAgICAgICBMb2dnZXIuV2FybihgQ2Fubm90IGNvbGxhcHNlIG5vZGUgJHtiYWJ5bG9uTm9kZS5uYW1lfSBpbnRvIHBhcmVudCBub2RlICR7cGFyZW50QmFieWxvbk5vZGUubmFtZX0gd2l0aCBtb2RpZmllZCBzY2FsaW5nLmApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIEluZGljZXNBcnJheSBpbnRvIGVpdGhlciBhIFVpbnQzMkFycmF5IG9yIFVpbnQxNkFycmF5LlxyXG4gKiBJZiB0aGUgYHN0YXJ0YCBhbmQgYGNvdW50YCBwYXJhbWV0ZXJzIHNwZWNpZnkgYSBzdWJzZXQgb2YgdGhlIGFycmF5LCBhIG5ldyB2aWV3IGlzIGNyZWF0ZWQuXHJcbiAqIElmIHRoZSBpbnB1dCBpcyBhIG51bWJlcltdLCB0aGUgZGF0YSBpcyBjb3BpZWQgaW50byBhIG5ldyBidWZmZXIuXHJcbiAqIEBwYXJhbSBpbmRpY2VzIGlucHV0IGFycmF5IHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0gc3RhcnQgc3RhcnRpbmcgaW5kZXhcclxuICogQHBhcmFtIGNvdW50IG51bWJlciBvZiBpbmRpY2VzXHJcbiAqIEBwYXJhbSBpczMyQml0cyB3aGV0aGVyIHRoZSBvdXRwdXQgc2hvdWxkIGJlIFVpbnQzMkFycmF5ICh0cnVlKSBvciBVaW50MTZBcnJheSAoZmFsc2UpIHdoZW4gaW5kaWNlcyBpcyBhbiBgQXJyYXlgXHJcbiAqIEByZXR1cm5zIGEgVWludDMyQXJyYXkgb3IgVWludDE2QXJyYXlcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5kaWNlc0FycmF5VG9UeXBlZFN1YmFycmF5KGluZGljZXM6IEluZGljZXNBcnJheSwgc3RhcnQ6IG51bWJlciwgY291bnQ6IG51bWJlciwgaXMzMkJpdHM6IGJvb2xlYW4pOiBVaW50MzJBcnJheSB8IFVpbnQxNkFycmF5IHtcclxuICAgIGxldCBwcm9jZXNzZWRJbmRpY2VzID0gaW5kaWNlcztcclxuICAgIGlmIChzdGFydCAhPT0gMCB8fCBjb3VudCAhPT0gaW5kaWNlcy5sZW5ndGgpIHtcclxuICAgICAgICBwcm9jZXNzZWRJbmRpY2VzID0gQXJyYXkuaXNBcnJheShpbmRpY2VzKSA/IGluZGljZXMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgY291bnQpIDogaW5kaWNlcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgSW50MzJBcnJheSwgY2FzdCB0aGUgaW5kaWNlcyAod2hpY2ggc2hvdWxkIGFsbCBiZSBwb3NpdGl2ZSkgdG8gVWludDMyQXJyYXlcclxuICAgIGlmIChwcm9jZXNzZWRJbmRpY2VzIGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkocHJvY2Vzc2VkSW5kaWNlcy5idWZmZXIsIHByb2Nlc3NlZEluZGljZXMuYnl0ZU9mZnNldCwgcHJvY2Vzc2VkSW5kaWNlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb2Nlc3NlZEluZGljZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzMzJCaXRzID8gbmV3IFVpbnQzMkFycmF5KHByb2Nlc3NlZEluZGljZXMpIDogbmV3IFVpbnQxNkFycmF5KHByb2Nlc3NlZEluZGljZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9jZXNzZWRJbmRpY2VzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGF0YUFycmF5VG9VaW50OEFycmF5KGRhdGE6IERhdGFBcnJheSk6IFVpbnQ4QXJyYXkge1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGZsb2F0RGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGZsb2F0RGF0YS5idWZmZXIsIGZsb2F0RGF0YS5ieXRlT2Zmc2V0LCBmbG9hdERhdGEuYnl0ZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCkgOiBuZXcgVWludDhBcnJheShkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1pbk1heChkYXRhOiBEYXRhQXJyYXksIHZlcnRleEJ1ZmZlcjogVmVydGV4QnVmZmVyLCBzdGFydDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogeyBtaW46IG51bWJlcltdOyBtYXg6IG51bWJlcltdIH0ge1xyXG4gICAgY29uc3QgeyBieXRlT2Zmc2V0LCBieXRlU3RyaWRlLCB0eXBlLCBub3JtYWxpemVkIH0gPSB2ZXJ0ZXhCdWZmZXI7XHJcbiAgICBjb25zdCBzaXplID0gdmVydGV4QnVmZmVyLmdldFNpemUoKTtcclxuICAgIGNvbnN0IG1pbiA9IG5ldyBBcnJheTxudW1iZXI+KHNpemUpLmZpbGwoSW5maW5pdHkpO1xyXG4gICAgY29uc3QgbWF4ID0gbmV3IEFycmF5PG51bWJlcj4oc2l6ZSkuZmlsbCgtSW5maW5pdHkpO1xyXG4gICAgRW51bWVyYXRlRmxvYXRWYWx1ZXMoZGF0YSwgYnl0ZU9mZnNldCArIHN0YXJ0ICogYnl0ZVN0cmlkZSwgYnl0ZVN0cmlkZSwgc2l6ZSwgdHlwZSwgY291bnQgKiBzaXplLCBub3JtYWxpemVkLCAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbWluW2ldID0gTWF0aC5taW4obWluW2ldLCB2YWx1ZXNbaV0pO1xyXG4gICAgICAgICAgICBtYXhbaV0gPSBNYXRoLm1heChtYXhbaV0sIHZhbHVlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbWluLCBtYXggfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMsIGluLXBsYWNlLCBvYmplY3QgcHJvcGVydGllcyB3aGljaCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gKiBVc2VmdWwgZm9yIGF2b2lkaW5nIHVubmVjZXNzYXJ5IHByb3BlcnRpZXMgaW4gdGhlIGdsVEYgSlNPTi5cclxuICogQHBhcmFtIG9iamVjdCB0aGUgb2JqZWN0IHRvIG9taXQgZGVmYXVsdCB2YWx1ZXMgZnJvbVxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlcyBhIHBhcnRpYWwgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXMgb21pdHRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9taXREZWZhdWx0VmFsdWVzPFQgZXh0ZW5kcyBvYmplY3Q+KG9iamVjdDogVCwgZGVmYXVsdFZhbHVlczogUGFydGlhbDxUPik6IFQge1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZXNba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIGlmICgoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpICYmIEFyZUFycmF5c0VxdWFsKHZhbHVlLCBkZWZhdWx0VmFsdWUpKSB8fCB2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3Rba2V5IGFzIGtleW9mIFRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFyZUFycmF5c0VxdWFsKGFycmF5MTogdW5rbm93bltdLCBhcnJheTI6IHVua25vd25bXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGFycmF5MS5sZW5ndGggPT09IGFycmF5Mi5sZW5ndGggJiYgYXJyYXkxLmV2ZXJ5KCh2YWwsIGkpID0+IHZhbCA9PT0gYXJyYXkyW2ldKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=