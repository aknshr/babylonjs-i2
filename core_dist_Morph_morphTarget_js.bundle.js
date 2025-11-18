"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_Morph_morphTarget_js"],{

/***/ "../core/dist/Morph/morphTarget.js":
/*!*****************************************!*\
  !*** ../core/dist/Morph/morphTarget.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MorphTarget: () => (/* binding */ MorphTarget)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _Engines_engineStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Engines/engineStore */ "../core/dist/Engines/engineStore.js");
/* harmony import */ var _Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Buffers/buffer */ "../core/dist/Buffers/buffer.js");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Misc/decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * Defines a target to use with MorphTargetManager
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/morphTargets
 */
class MorphTarget {
    /**
     * Gets or sets the influence of this target (ie. its weight in the overall morphing)
     */
    get influence() {
        return this._influence;
    }
    set influence(influence) {
        if (this._influence === influence) {
            return;
        }
        const previous = this._influence;
        this._influence = influence;
        if (this.onInfluenceChanged.hasObservers()) {
            this.onInfluenceChanged.notifyObservers(previous === 0 || influence === 0);
        }
    }
    /**
     * Gets or sets the animation properties override
     */
    get animationPropertiesOverride() {
        if (!this._animationPropertiesOverride && this._scene) {
            return this._scene.animationPropertiesOverride;
        }
        return this._animationPropertiesOverride;
    }
    set animationPropertiesOverride(value) {
        this._animationPropertiesOverride = value;
    }
    /**
     * Creates a new MorphTarget
     * @param name defines the name of the target
     * @param influence defines the influence to use
     * @param scene defines the scene the morphtarget belongs to
     */
    constructor(
    /** defines the name of the target */
    name, influence = 0, scene = null) {
        this.name = name;
        /**
         * Gets or sets the list of animations
         */
        this.animations = [];
        this._positions = null;
        this._normals = null;
        this._tangents = null;
        this._uvs = null;
        this._uv2s = null;
        this._colors = null;
        this._uniqueId = 0;
        /**
         * Observable raised when the influence changes
         */
        this.onInfluenceChanged = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** @internal */
        this._onDataLayoutChanged = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._animationPropertiesOverride = null;
        this.id = name;
        this._scene = scene || _Engines_engineStore__WEBPACK_IMPORTED_MODULE_1__.EngineStore.LastCreatedScene;
        this.influence = influence;
        if (this._scene) {
            this._uniqueId = this._scene.getUniqueId();
        }
    }
    /**
     * Gets the unique ID of this manager
     */
    get uniqueId() {
        return this._uniqueId;
    }
    /**
     * Gets a boolean defining if the target contains position data
     */
    get hasPositions() {
        return !!this._positions;
    }
    /**
     * Gets a boolean defining if the target contains normal data
     */
    get hasNormals() {
        return !!this._normals;
    }
    /**
     * Gets a boolean defining if the target contains tangent data
     */
    get hasTangents() {
        return !!this._tangents;
    }
    /**
     * Gets a boolean defining if the target contains texture coordinates data
     */
    get hasUVs() {
        return !!this._uvs;
    }
    /**
     * Gets a boolean defining if the target contains texture coordinates 2 data
     */
    get hasUV2s() {
        return !!this._uv2s;
    }
    get hasColors() {
        return !!this._colors;
    }
    /**
     * Gets the number of vertices stored in this target
     */
    get vertexCount() {
        return this._positions
            ? this._positions.length / 3
            : this._normals
                ? this._normals.length / 3
                : this._tangents
                    ? this._tangents.length / 3
                    : this._uvs
                        ? this._uvs.length / 2
                        : this._uv2s
                            ? this._uv2s.length / 2
                            : this._colors
                                ? this._colors.length / 4
                                : 0;
    }
    /**
     * Affects position data to this target
     * @param data defines the position data to use
     */
    setPositions(data) {
        const hadPositions = this.hasPositions;
        this._positions = data;
        if (hadPositions !== this.hasPositions) {
            this._onDataLayoutChanged.notifyObservers(undefined);
        }
    }
    /**
     * Gets the position data stored in this target
     * @returns a FloatArray containing the position data (or null if not present)
     */
    getPositions() {
        return this._positions;
    }
    /**
     * Affects normal data to this target
     * @param data defines the normal data to use
     */
    setNormals(data) {
        const hadNormals = this.hasNormals;
        this._normals = data;
        if (hadNormals !== this.hasNormals) {
            this._onDataLayoutChanged.notifyObservers(undefined);
        }
    }
    /**
     * Gets the normal data stored in this target
     * @returns a FloatArray containing the normal data (or null if not present)
     */
    getNormals() {
        return this._normals;
    }
    /**
     * Affects tangent data to this target
     * @param data defines the tangent data to use
     */
    setTangents(data) {
        const hadTangents = this.hasTangents;
        this._tangents = data;
        if (hadTangents !== this.hasTangents) {
            this._onDataLayoutChanged.notifyObservers(undefined);
        }
    }
    /**
     * Gets the tangent data stored in this target
     * @returns a FloatArray containing the tangent data (or null if not present)
     */
    getTangents() {
        return this._tangents;
    }
    /**
     * Affects texture coordinates data to this target
     * @param data defines the texture coordinates data to use
     */
    setUVs(data) {
        const hadUVs = this.hasUVs;
        this._uvs = data;
        if (hadUVs !== this.hasUVs) {
            this._onDataLayoutChanged.notifyObservers(undefined);
        }
    }
    /**
     * Gets the texture coordinates data stored in this target
     * @returns a FloatArray containing the texture coordinates data (or null if not present)
     */
    getUVs() {
        return this._uvs;
    }
    /**
     * Affects texture coordinates 2 data to this target
     * @param data defines the texture coordinates 2 data to use
     */
    setUV2s(data) {
        const hadUV2s = this.hasUV2s;
        this._uv2s = data;
        if (hadUV2s !== this.hasUV2s) {
            this._onDataLayoutChanged.notifyObservers(undefined);
        }
    }
    /**
     * Gets the texture coordinates 2 data stored in this target
     * @returns a FloatArray containing the texture coordinates 2 data (or null if not present)
     */
    getUV2s() {
        return this._uv2s;
    }
    /**
     * Affects color data to this target
     * @param data defines the color data to use
     */
    setColors(data) {
        const hadColors = this.hasColors;
        this._colors = data;
        if (hadColors !== this.hasColors) {
            this._onDataLayoutChanged.notifyObservers(undefined);
        }
    }
    /**
     * Gets the color data stored in this target
     * @returns a FloatArray containing the color data (or null if not present)
     */
    getColors() {
        return this._colors;
    }
    /**
     * Clone the current target
     * @returns a new MorphTarget
     */
    clone() {
        const newOne = _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.Clone(() => new MorphTarget(this.name, this.influence, this._scene), this);
        newOne._positions = this._positions;
        newOne._normals = this._normals;
        newOne._tangents = this._tangents;
        newOne._uvs = this._uvs;
        newOne._uv2s = this._uv2s;
        newOne._colors = this._colors;
        return newOne;
    }
    /**
     * Serializes the current target into a Serialization object
     * @returns the serialized object
     */
    serialize() {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.influence = this.influence;
        serializationObject.positions = Array.prototype.slice.call(this.getPositions());
        if (this.id != null) {
            serializationObject.id = this.id;
        }
        if (this.hasNormals) {
            serializationObject.normals = Array.prototype.slice.call(this.getNormals());
        }
        if (this.hasTangents) {
            serializationObject.tangents = Array.prototype.slice.call(this.getTangents());
        }
        if (this.hasUVs) {
            serializationObject.uvs = Array.prototype.slice.call(this.getUVs());
        }
        if (this.hasUV2s) {
            serializationObject.uv2s = Array.prototype.slice.call(this.getUV2s());
        }
        if (this.hasColors) {
            serializationObject.colors = Array.prototype.slice.call(this.getColors());
        }
        // Animations
        _Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.AppendSerializedAnimations(this, serializationObject);
        return serializationObject;
    }
    /**
     * Returns the string "MorphTarget"
     * @returns "MorphTarget"
     */
    getClassName() {
        return "MorphTarget";
    }
    // Statics
    /**
     * Creates a new target from serialized data
     * @param serializationObject defines the serialized data to use
     * @param scene defines the hosting scene
     * @returns a new MorphTarget
     */
    static Parse(serializationObject, scene) {
        const result = new MorphTarget(serializationObject.name, serializationObject.influence);
        result.setPositions(serializationObject.positions);
        if (serializationObject.id != null) {
            result.id = serializationObject.id;
        }
        if (serializationObject.normals) {
            result.setNormals(serializationObject.normals);
        }
        if (serializationObject.tangents) {
            result.setTangents(serializationObject.tangents);
        }
        if (serializationObject.uvs) {
            result.setUVs(serializationObject.uvs);
        }
        if (serializationObject.uv2s) {
            result.setUV2s(serializationObject.uv2s);
        }
        if (serializationObject.colors) {
            result.setColors(serializationObject.colors);
        }
        // Animations
        if (serializationObject.animations) {
            for (let animationIndex = 0; animationIndex < serializationObject.animations.length; animationIndex++) {
                const parsedAnimation = serializationObject.animations[animationIndex];
                const internalClass = (0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.GetClass)("BABYLON.Animation");
                if (internalClass) {
                    result.animations.push(internalClass.Parse(parsedAnimation));
                }
            }
            if (serializationObject.autoAnimate && scene) {
                scene.beginAnimation(result, serializationObject.autoAnimateFrom, serializationObject.autoAnimateTo, serializationObject.autoAnimateLoop, serializationObject.autoAnimateSpeed || 1.0);
            }
        }
        return result;
    }
    /**
     * Creates a MorphTarget from mesh data
     * @param mesh defines the source mesh
     * @param name defines the name to use for the new target
     * @param influence defines the influence to attach to the target
     * @returns a new MorphTarget
     */
    static FromMesh(mesh, name, influence) {
        if (!name) {
            name = mesh.name;
        }
        const result = new MorphTarget(name, influence, mesh.getScene());
        result.setPositions(mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.PositionKind));
        if (mesh.isVerticesDataPresent(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.NormalKind)) {
            result.setNormals(mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.NormalKind));
        }
        if (mesh.isVerticesDataPresent(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.TangentKind)) {
            result.setTangents(mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.TangentKind));
        }
        if (mesh.isVerticesDataPresent(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.UVKind)) {
            result.setUVs(mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.UVKind));
        }
        if (mesh.isVerticesDataPresent(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.UV2Kind)) {
            result.setUV2s(mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.UV2Kind));
        }
        if (mesh.isVerticesDataPresent(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.ColorKind)) {
            result.setColors(mesh.getVerticesData(_Buffers_buffer__WEBPACK_IMPORTED_MODULE_2__.VertexBuffer.ColorKind));
        }
        return result;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_3__.serialize)()
], MorphTarget.prototype, "id", void 0);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X01vcnBoX21vcnBoVGFyZ2V0X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQXdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBekVBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBNEJBO0FBNEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFuWUE7QUFEQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9Nb3JwaC9tb3JwaFRhcmdldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElBbmltYXRhYmxlIH0gZnJvbSBcIi4uL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSwgRmxvYXRBcnJheSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IEVuZ2luZVN0b3JlIH0gZnJvbSBcIi4uL0VuZ2luZXMvZW5naW5lU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiLi4vTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xyXG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIgfSBmcm9tIFwiLi4vQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb25Qcm9wZXJ0aWVzT3ZlcnJpZGUgfSBmcm9tIFwiLi4vQW5pbWF0aW9ucy9hbmltYXRpb25Qcm9wZXJ0aWVzT3ZlcnJpZGVcIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIi4uL01pc2MvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcIi4uL01pc2MvZGVjb3JhdG9ycy5zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IEdldENsYXNzIH0gZnJvbSBcIi4uL01pc2MvdHlwZVN0b3JlXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IEFuaW1hdGlvbiB9IGZyb20gXCIuLi9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSB0YXJnZXQgdG8gdXNlIHdpdGggTW9ycGhUYXJnZXRNYW5hZ2VyXHJcbiAqIEBzZWUgaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9mZWF0dXJlcy9mZWF0dXJlc0RlZXBEaXZlL21lc2gvbW9ycGhUYXJnZXRzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW9ycGhUYXJnZXQgaW1wbGVtZW50cyBJQW5pbWF0YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgbGlzdCBvZiBhbmltYXRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbmltYXRpb25zOiBBbmltYXRpb25bXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3NjZW5lOiBOdWxsYWJsZTxTY2VuZT47XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbnM6IE51bGxhYmxlPEZsb2F0QXJyYXk+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25vcm1hbHM6IE51bGxhYmxlPEZsb2F0QXJyYXk+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3RhbmdlbnRzOiBOdWxsYWJsZTxGbG9hdEFycmF5PiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF91dnM6IE51bGxhYmxlPEZsb2F0QXJyYXk+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3V2MnM6IE51bGxhYmxlPEZsb2F0QXJyYXk+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2NvbG9yczogTnVsbGFibGU8RmxvYXRBcnJheT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaW5mbHVlbmNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF91bmlxdWVJZCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBpbmZsdWVuY2UgY2hhbmdlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25JbmZsdWVuY2VDaGFuZ2VkID0gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX29uRGF0YUxheW91dENoYW5nZWQgPSBuZXcgT2JzZXJ2YWJsZTx2b2lkPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBpbmZsdWVuY2Ugb2YgdGhpcyB0YXJnZXQgKGllLiBpdHMgd2VpZ2h0IGluIHRoZSBvdmVyYWxsIG1vcnBoaW5nKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGluZmx1ZW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZsdWVuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBpbmZsdWVuY2UoaW5mbHVlbmNlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5mbHVlbmNlID09PSBpbmZsdWVuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLl9pbmZsdWVuY2U7XHJcbiAgICAgICAgdGhpcy5faW5mbHVlbmNlID0gaW5mbHVlbmNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vbkluZmx1ZW5jZUNoYW5nZWQuaGFzT2JzZXJ2ZXJzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluZmx1ZW5jZUNoYW5nZWQubm90aWZ5T2JzZXJ2ZXJzKHByZXZpb3VzID09PSAwIHx8IGluZmx1ZW5jZSA9PT0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBpZCBvZiB0aGUgbW9ycGggVGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uUHJvcGVydGllc092ZXJyaWRlOiBOdWxsYWJsZTxBbmltYXRpb25Qcm9wZXJ0aWVzT3ZlcnJpZGU+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgYW5pbWF0aW9uIHByb3BlcnRpZXMgb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhbmltYXRpb25Qcm9wZXJ0aWVzT3ZlcnJpZGUoKTogTnVsbGFibGU8QW5pbWF0aW9uUHJvcGVydGllc092ZXJyaWRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9hbmltYXRpb25Qcm9wZXJ0aWVzT3ZlcnJpZGUgJiYgdGhpcy5fc2NlbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NjZW5lLmFuaW1hdGlvblByb3BlcnRpZXNPdmVycmlkZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdGlvblByb3BlcnRpZXNPdmVycmlkZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGFuaW1hdGlvblByb3BlcnRpZXNPdmVycmlkZSh2YWx1ZTogTnVsbGFibGU8QW5pbWF0aW9uUHJvcGVydGllc092ZXJyaWRlPikge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdGlvblByb3BlcnRpZXNPdmVycmlkZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBNb3JwaFRhcmdldFxyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gaW5mbHVlbmNlIGRlZmluZXMgdGhlIGluZmx1ZW5jZSB0byB1c2VcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB0aGUgbW9ycGh0YXJnZXQgYmVsb25ncyB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqIGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHRhcmdldCAqL1xyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgaW5mbHVlbmNlID0gMCxcclxuICAgICAgICBzY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZSB8fCBFbmdpbmVTdG9yZS5MYXN0Q3JlYXRlZFNjZW5lO1xyXG4gICAgICAgIHRoaXMuaW5mbHVlbmNlID0gaW5mbHVlbmNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fc2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdW5pcXVlSWQgPSB0aGlzLl9zY2VuZS5nZXRVbmlxdWVJZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHVuaXF1ZSBJRCBvZiB0aGlzIG1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1bmlxdWVJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91bmlxdWVJZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGRlZmluaW5nIGlmIHRoZSB0YXJnZXQgY29udGFpbnMgcG9zaXRpb24gZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc1Bvc2l0aW9ucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9wb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBkZWZpbmluZyBpZiB0aGUgdGFyZ2V0IGNvbnRhaW5zIG5vcm1hbCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzTm9ybWFscygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl9ub3JtYWxzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gZGVmaW5pbmcgaWYgdGhlIHRhcmdldCBjb250YWlucyB0YW5nZW50IGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoYXNUYW5nZW50cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLl90YW5nZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGRlZmluaW5nIGlmIHRoZSB0YXJnZXQgY29udGFpbnMgdGV4dHVyZSBjb29yZGluYXRlcyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzVVZzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX3V2cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGRlZmluaW5nIGlmIHRoZSB0YXJnZXQgY29udGFpbnMgdGV4dHVyZSBjb29yZGluYXRlcyAyIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoYXNVVjJzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX3V2MnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoYXNDb2xvcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fY29sb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHZlcnRpY2VzIHN0b3JlZCBpbiB0aGlzIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHZlcnRleENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uc1xyXG4gICAgICAgICAgICA/IHRoaXMuX3Bvc2l0aW9ucy5sZW5ndGggLyAzXHJcbiAgICAgICAgICAgIDogdGhpcy5fbm9ybWFsc1xyXG4gICAgICAgICAgICAgID8gdGhpcy5fbm9ybWFscy5sZW5ndGggLyAzXHJcbiAgICAgICAgICAgICAgOiB0aGlzLl90YW5nZW50c1xyXG4gICAgICAgICAgICAgICAgPyB0aGlzLl90YW5nZW50cy5sZW5ndGggLyAzXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3V2c1xyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuX3V2cy5sZW5ndGggLyAyXHJcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5fdXYyc1xyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fdXYycy5sZW5ndGggLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9jb2xvcnNcclxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fY29sb3JzLmxlbmd0aCAvIDRcclxuICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmZmVjdHMgcG9zaXRpb24gZGF0YSB0byB0aGlzIHRhcmdldFxyXG4gICAgICogQHBhcmFtIGRhdGEgZGVmaW5lcyB0aGUgcG9zaXRpb24gZGF0YSB0byB1c2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFBvc2l0aW9ucyhkYXRhOiBOdWxsYWJsZTxGbG9hdEFycmF5Pikge1xyXG4gICAgICAgIGNvbnN0IGhhZFBvc2l0aW9ucyA9IHRoaXMuaGFzUG9zaXRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3NpdGlvbnMgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAoaGFkUG9zaXRpb25zICE9PSB0aGlzLmhhc1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRhdGFMYXlvdXRDaGFuZ2VkLm5vdGlmeU9ic2VydmVycyh1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBvc2l0aW9uIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIEZsb2F0QXJyYXkgY29udGFpbmluZyB0aGUgcG9zaXRpb24gZGF0YSAob3IgbnVsbCBpZiBub3QgcHJlc2VudClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvc2l0aW9ucygpOiBOdWxsYWJsZTxGbG9hdEFycmF5PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmZmVjdHMgbm9ybWFsIGRhdGEgdG8gdGhpcyB0YXJnZXRcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIG5vcm1hbCBkYXRhIHRvIHVzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Tm9ybWFscyhkYXRhOiBOdWxsYWJsZTxGbG9hdEFycmF5Pikge1xyXG4gICAgICAgIGNvbnN0IGhhZE5vcm1hbHMgPSB0aGlzLmhhc05vcm1hbHM7XHJcblxyXG4gICAgICAgIHRoaXMuX25vcm1hbHMgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAoaGFkTm9ybWFscyAhPT0gdGhpcy5oYXNOb3JtYWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRGF0YUxheW91dENoYW5nZWQubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbm9ybWFsIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIEZsb2F0QXJyYXkgY29udGFpbmluZyB0aGUgbm9ybWFsIGRhdGEgKG9yIG51bGwgaWYgbm90IHByZXNlbnQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROb3JtYWxzKCk6IE51bGxhYmxlPEZsb2F0QXJyYXk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9ybWFscztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmZmVjdHMgdGFuZ2VudCBkYXRhIHRvIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSB0YW5nZW50IGRhdGEgdG8gdXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRUYW5nZW50cyhkYXRhOiBOdWxsYWJsZTxGbG9hdEFycmF5Pikge1xyXG4gICAgICAgIGNvbnN0IGhhZFRhbmdlbnRzID0gdGhpcy5oYXNUYW5nZW50cztcclxuXHJcbiAgICAgICAgdGhpcy5fdGFuZ2VudHMgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAoaGFkVGFuZ2VudHMgIT09IHRoaXMuaGFzVGFuZ2VudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25EYXRhTGF5b3V0Q2hhbmdlZC5ub3RpZnlPYnNlcnZlcnModW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0YW5nZW50IGRhdGEgc3RvcmVkIGluIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIEZsb2F0QXJyYXkgY29udGFpbmluZyB0aGUgdGFuZ2VudCBkYXRhIChvciBudWxsIGlmIG5vdCBwcmVzZW50KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VGFuZ2VudHMoKTogTnVsbGFibGU8RmxvYXRBcnJheT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90YW5nZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmZmVjdHMgdGV4dHVyZSBjb29yZGluYXRlcyBkYXRhIHRvIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIGRhdGEgdG8gdXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRVVnMoZGF0YTogTnVsbGFibGU8RmxvYXRBcnJheT4pIHtcclxuICAgICAgICBjb25zdCBoYWRVVnMgPSB0aGlzLmhhc1VWcztcclxuXHJcbiAgICAgICAgdGhpcy5fdXZzID0gZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKGhhZFVWcyAhPT0gdGhpcy5oYXNVVnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25EYXRhTGF5b3V0Q2hhbmdlZC5ub3RpZnlPYnNlcnZlcnModW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIGRhdGEgc3RvcmVkIGluIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIEZsb2F0QXJyYXkgY29udGFpbmluZyB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyBkYXRhIChvciBudWxsIGlmIG5vdCBwcmVzZW50KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VVZzKCk6IE51bGxhYmxlPEZsb2F0QXJyYXk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXZzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZmZWN0cyB0ZXh0dXJlIGNvb3JkaW5hdGVzIDIgZGF0YSB0byB0aGlzIHRhcmdldFxyXG4gICAgICogQHBhcmFtIGRhdGEgZGVmaW5lcyB0aGUgdGV4dHVyZSBjb29yZGluYXRlcyAyIGRhdGEgdG8gdXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRVVjJzKGRhdGE6IE51bGxhYmxlPEZsb2F0QXJyYXk+KSB7XHJcbiAgICAgICAgY29uc3QgaGFkVVYycyA9IHRoaXMuaGFzVVYycztcclxuXHJcbiAgICAgICAgdGhpcy5fdXYycyA9IGRhdGE7XHJcblxyXG4gICAgICAgIGlmIChoYWRVVjJzICE9PSB0aGlzLmhhc1VWMnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25EYXRhTGF5b3V0Q2hhbmdlZC5ub3RpZnlPYnNlcnZlcnModW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIDIgZGF0YSBzdG9yZWQgaW4gdGhpcyB0YXJnZXRcclxuICAgICAqIEByZXR1cm5zIGEgRmxvYXRBcnJheSBjb250YWluaW5nIHRoZSB0ZXh0dXJlIGNvb3JkaW5hdGVzIDIgZGF0YSAob3IgbnVsbCBpZiBub3QgcHJlc2VudClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVWMnMoKTogTnVsbGFibGU8RmxvYXRBcnJheT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91djJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZmZWN0cyBjb2xvciBkYXRhIHRvIHRoaXMgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBjb2xvciBkYXRhIHRvIHVzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Q29sb3JzKGRhdGE6IE51bGxhYmxlPEZsb2F0QXJyYXk+KSB7XHJcbiAgICAgICAgY29uc3QgaGFkQ29sb3JzID0gdGhpcy5oYXNDb2xvcnM7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbG9ycyA9IGRhdGE7XHJcblxyXG4gICAgICAgIGlmIChoYWRDb2xvcnMgIT09IHRoaXMuaGFzQ29sb3JzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRGF0YUxheW91dENoYW5nZWQubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29sb3IgZGF0YSBzdG9yZWQgaW4gdGhpcyB0YXJnZXRcclxuICAgICAqIEByZXR1cm5zIGEgRmxvYXRBcnJheSBjb250YWluaW5nIHRoZSBjb2xvciBkYXRhIChvciBudWxsIGlmIG5vdCBwcmVzZW50KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q29sb3JzKCk6IE51bGxhYmxlPEZsb2F0QXJyYXk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvbmUgdGhlIGN1cnJlbnQgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIG5ldyBNb3JwaFRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogTW9ycGhUYXJnZXQge1xyXG4gICAgICAgIGNvbnN0IG5ld09uZSA9IFNlcmlhbGl6YXRpb25IZWxwZXIuQ2xvbmUoKCkgPT4gbmV3IE1vcnBoVGFyZ2V0KHRoaXMubmFtZSwgdGhpcy5pbmZsdWVuY2UsIHRoaXMuX3NjZW5lKSwgdGhpcyk7XHJcblxyXG4gICAgICAgIG5ld09uZS5fcG9zaXRpb25zID0gdGhpcy5fcG9zaXRpb25zO1xyXG4gICAgICAgIG5ld09uZS5fbm9ybWFscyA9IHRoaXMuX25vcm1hbHM7XHJcbiAgICAgICAgbmV3T25lLl90YW5nZW50cyA9IHRoaXMuX3RhbmdlbnRzO1xyXG4gICAgICAgIG5ld09uZS5fdXZzID0gdGhpcy5fdXZzO1xyXG4gICAgICAgIG5ld09uZS5fdXYycyA9IHRoaXMuX3V2MnM7XHJcbiAgICAgICAgbmV3T25lLl9jb2xvcnMgPSB0aGlzLl9jb2xvcnM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdPbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoZSBjdXJyZW50IHRhcmdldCBpbnRvIGEgU2VyaWFsaXphdGlvbiBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIHRoZSBzZXJpYWxpemVkIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge307XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmluZmx1ZW5jZSA9IHRoaXMuaW5mbHVlbmNlO1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnBvc2l0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZ2V0UG9zaXRpb25zKCkpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhc05vcm1hbHMpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5ub3JtYWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5nZXROb3JtYWxzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYXNUYW5nZW50cykge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRhbmdlbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5nZXRUYW5nZW50cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzVVZzKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudXZzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5nZXRVVnMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhc1VWMnMpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC51djJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5nZXRVVjJzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYXNDb2xvcnMpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb2xvcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmdldENvbG9ycygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGlvbnNcclxuICAgICAgICBTZXJpYWxpemF0aW9uSGVscGVyLkFwcGVuZFNlcmlhbGl6ZWRBbmltYXRpb25zKHRoaXMsIHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHN0cmluZyBcIk1vcnBoVGFyZ2V0XCJcclxuICAgICAqIEByZXR1cm5zIFwiTW9ycGhUYXJnZXRcIlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiTW9ycGhUYXJnZXRcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0aWNzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRhcmdldCBmcm9tIHNlcmlhbGl6ZWQgZGF0YVxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgZGVmaW5lcyB0aGUgc2VyaWFsaXplZCBkYXRhIHRvIHVzZVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGhvc3Rpbmcgc2NlbmVcclxuICAgICAqIEByZXR1cm5zIGEgbmV3IE1vcnBoVGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUGFyc2Uoc2VyaWFsaXphdGlvbk9iamVjdDogYW55LCBzY2VuZT86IFNjZW5lKTogTW9ycGhUYXJnZXQge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNb3JwaFRhcmdldChzZXJpYWxpemF0aW9uT2JqZWN0Lm5hbWUsIHNlcmlhbGl6YXRpb25PYmplY3QuaW5mbHVlbmNlKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LnNldFBvc2l0aW9ucyhzZXJpYWxpemF0aW9uT2JqZWN0LnBvc2l0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LmlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlkID0gc2VyaWFsaXphdGlvbk9iamVjdC5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3Qubm9ybWFscykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0Tm9ybWFscyhzZXJpYWxpemF0aW9uT2JqZWN0Lm5vcm1hbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC50YW5nZW50cykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0VGFuZ2VudHMoc2VyaWFsaXphdGlvbk9iamVjdC50YW5nZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LnV2cykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0VVZzKHNlcmlhbGl6YXRpb25PYmplY3QudXZzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3QudXYycykge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V0VVYycyhzZXJpYWxpemF0aW9uT2JqZWN0LnV2MnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC5jb2xvcnMpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldENvbG9ycyhzZXJpYWxpemF0aW9uT2JqZWN0LmNvbG9ycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBbmltYXRpb25zXHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3QuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhbmltYXRpb25JbmRleCA9IDA7IGFuaW1hdGlvbkluZGV4IDwgc2VyaWFsaXphdGlvbk9iamVjdC5hbmltYXRpb25zLmxlbmd0aDsgYW5pbWF0aW9uSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkQW5pbWF0aW9uID0gc2VyaWFsaXphdGlvbk9iamVjdC5hbmltYXRpb25zW2FuaW1hdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludGVybmFsQ2xhc3MgPSBHZXRDbGFzcyhcIkJBQllMT04uQW5pbWF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVybmFsQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYW5pbWF0aW9ucy5wdXNoKGludGVybmFsQ2xhc3MuUGFyc2UocGFyc2VkQW5pbWF0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LmF1dG9BbmltYXRlICYmIHNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5iZWdpbkFuaW1hdGlvbihcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5hdXRvQW5pbWF0ZUZyb20sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5hdXRvQW5pbWF0ZVRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuYXV0b0FuaW1hdGVMb29wLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuYXV0b0FuaW1hdGVTcGVlZCB8fCAxLjBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTW9ycGhUYXJnZXQgZnJvbSBtZXNoIGRhdGFcclxuICAgICAqIEBwYXJhbSBtZXNoIGRlZmluZXMgdGhlIHNvdXJjZSBtZXNoXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBuYW1lIHRvIHVzZSBmb3IgdGhlIG5ldyB0YXJnZXRcclxuICAgICAqIEBwYXJhbSBpbmZsdWVuY2UgZGVmaW5lcyB0aGUgaW5mbHVlbmNlIHRvIGF0dGFjaCB0byB0aGUgdGFyZ2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIG5ldyBNb3JwaFRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZyb21NZXNoKG1lc2g6IEFic3RyYWN0TWVzaCwgbmFtZT86IHN0cmluZywgaW5mbHVlbmNlPzogbnVtYmVyKTogTW9ycGhUYXJnZXQge1xyXG4gICAgICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgICAgICBuYW1lID0gbWVzaC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1vcnBoVGFyZ2V0KG5hbWUsIGluZmx1ZW5jZSwgbWVzaC5nZXRTY2VuZSgpKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LnNldFBvc2l0aW9ucyg8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKSk7XHJcblxyXG4gICAgICAgIGlmIChtZXNoLmlzVmVydGljZXNEYXRhUHJlc2VudChWZXJ0ZXhCdWZmZXIuTm9ybWFsS2luZCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldE5vcm1hbHMoPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc2guaXNWZXJ0aWNlc0RhdGFQcmVzZW50KFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldFRhbmdlbnRzKDxGbG9hdEFycmF5Pm1lc2guZ2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5UYW5nZW50S2luZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzaC5pc1ZlcnRpY2VzRGF0YVByZXNlbnQoVmVydGV4QnVmZmVyLlVWS2luZCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldFVWcyg8RmxvYXRBcnJheT5tZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuVVZLaW5kKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNoLmlzVmVydGljZXNEYXRhUHJlc2VudChWZXJ0ZXhCdWZmZXIuVVYyS2luZCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnNldFVWMnMoPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLlVWMktpbmQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc2guaXNWZXJ0aWNlc0RhdGFQcmVzZW50KFZlcnRleEJ1ZmZlci5Db2xvcktpbmQpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZXRDb2xvcnMoPEZsb2F0QXJyYXk+bWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLkNvbG9yS2luZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=