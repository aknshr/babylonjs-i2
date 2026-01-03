"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_glTFLoaderAnimation_js"],{

/***/ "../loaders/dist/glTF/2.0/glTFLoaderAnimation.js":
/*!*******************************************************!*\
  !*** ../loaders/dist/glTF/2.0/glTFLoaderAnimation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationPropertyInfo: () => (/* binding */ AnimationPropertyInfo),
/* harmony export */   TransformNodeAnimationPropertyInfo: () => (/* binding */ TransformNodeAnimationPropertyInfo),
/* harmony export */   WeightAnimationPropertyInfo: () => (/* binding */ WeightAnimationPropertyInfo),
/* harmony export */   getQuaternion: () => (/* binding */ getQuaternion),
/* harmony export */   getVector3: () => (/* binding */ getVector3),
/* harmony export */   getWeights: () => (/* binding */ getWeights)
/* harmony export */ });
/* harmony import */ var core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Animations/animation */ "../core/dist/Animations/animation.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Extensions/objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getVector3(_target, source, offset, scale) {
    return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(source, offset).scaleInPlace(scale);
}
/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getQuaternion(_target, source, offset, scale) {
    return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(source, offset).scaleInPlace(scale);
}
/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getWeights(target, source, offset, scale) {
    const value = new Array(target._numMorphTargets);
    for (let i = 0; i < value.length; i++) {
        value[i] = source[offset++] * scale;
    }
    return value;
}
/** @internal */
class AnimationPropertyInfo {
    /** @internal */
    constructor(type, name, getValue, getStride) {
        this.type = type;
        this.name = name;
        this.getValue = getValue;
        this.getStride = getStride;
    }
    _buildAnimation(name, fps, keys) {
        const babylonAnimation = new core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation(name, this.name, fps, this.type);
        babylonAnimation.setKeys(keys, true);
        return babylonAnimation;
    }
}
/** @internal */
class TransformNodeAnimationPropertyInfo extends AnimationPropertyInfo {
    /** @internal */
    buildAnimations(target, name, fps, keys) {
        const babylonAnimations = [];
        babylonAnimations.push({ babylonAnimatable: target._babylonTransformNode, babylonAnimation: this._buildAnimation(name, fps, keys) });
        return babylonAnimations;
    }
}
/** @internal */
class WeightAnimationPropertyInfo extends AnimationPropertyInfo {
    buildAnimations(target, name, fps, keys) {
        const babylonAnimations = [];
        if (target._numMorphTargets) {
            for (let targetIndex = 0; targetIndex < target._numMorphTargets; targetIndex++) {
                const babylonAnimation = new core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation(`${name}_${targetIndex}`, this.name, fps, this.type);
                babylonAnimation.setKeys(keys.map((key) => ({
                    frame: key.frame,
                    inTangent: key.inTangent ? key.inTangent[targetIndex] : undefined,
                    value: key.value[targetIndex],
                    outTangent: key.outTangent ? key.outTangent[targetIndex] : undefined,
                    interpolation: key.interpolation,
                })), true);
                if (target._primitiveBabylonMeshes) {
                    for (const babylonMesh of target._primitiveBabylonMeshes) {
                        if (babylonMesh.morphTargetManager) {
                            const morphTarget = babylonMesh.morphTargetManager.getTarget(targetIndex);
                            const babylonAnimationClone = babylonAnimation.clone();
                            morphTarget.animations.push(babylonAnimationClone);
                            babylonAnimations.push({ babylonAnimatable: morphTarget, babylonAnimation: babylonAnimationClone });
                        }
                    }
                }
            }
        }
        return babylonAnimations;
    }
}
(0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.SetInterpolationForKey)("/nodes/{}/translation", [new TransformNodeAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3, "position", getVector3, () => 3)]);
(0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.SetInterpolationForKey)("/nodes/{}/rotation", [new TransformNodeAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_QUATERNION, "rotationQuaternion", getQuaternion, () => 4)]);
(0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.SetInterpolationForKey)("/nodes/{}/scale", [new TransformNodeAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_VECTOR3, "scaling", getVector3, () => 3)]);
(0,_Extensions_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.SetInterpolationForKey)("/nodes/{}/weights", [new WeightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "influence", getWeights, (target) => target._numMorphTargets)]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX2dsVEZMb2FkZXJBbmltYXRpb25fanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9nbFRGTG9hZGVyQW5pbWF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgU2V0SW50ZXJwb2xhdGlvbkZvcktleSB9IGZyb20gXCIuL0V4dGVuc2lvbnMvb2JqZWN0TW9kZWxNYXBwaW5nXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCB0eXBlIEdldFZhbHVlRm4gPSAodGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcikgPT4gYW55O1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWZWN0b3IzKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gVmVjdG9yMy5Gcm9tQXJyYXkoc291cmNlLCBvZmZzZXQpLnNjYWxlSW5QbGFjZShzY2FsZSk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVhdGVybmlvbihfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFF1YXRlcm5pb24ge1xyXG4gICAgcmV0dXJuIFF1YXRlcm5pb24uRnJvbUFycmF5KHNvdXJjZSwgb2Zmc2V0KS5zY2FsZUluUGxhY2Uoc2NhbGUpO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodHModGFyZ2V0OiBJTm9kZSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheTxudW1iZXI+KHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzISk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWVbaV0gPSBzb3VyY2Vbb2Zmc2V0KytdICogc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0VmFsdWU6IEdldFZhbHVlRm4sXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGdldFN0cmlkZTogKHRhcmdldDogYW55KSA9PiBudW1iZXJcclxuICAgICkge31cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2J1aWxkQW5pbWF0aW9uKG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKTogQW5pbWF0aW9uIHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbihuYW1lLCB0aGlzLm5hbWUsIGZwcywgdGhpcy50eXBlKTtcclxuICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uLnNldEtleXMoa2V5cywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25BbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10pOiB7IGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZTsgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uIH1bXTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKHRhcmdldDogSU5vZGUsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbnM6IHsgYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlOyBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24gfVtdID0gW107XHJcbiAgICAgICAgYmFieWxvbkFuaW1hdGlvbnMucHVzaCh7IGJhYnlsb25BbmltYXRhYmxlOiB0YXJnZXQuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlISwgYmFieWxvbkFuaW1hdGlvbjogdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSB9KTtcclxuICAgICAgICByZXR1cm4gYmFieWxvbkFuaW1hdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIFdlaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKHRhcmdldDogSU5vZGUsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbnM6IHsgYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlOyBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24gfVtdID0gW107XHJcbiAgICAgICAgaWYgKHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhcmdldEluZGV4ID0gMDsgdGFyZ2V0SW5kZXggPCB0YXJnZXQuX251bU1vcnBoVGFyZ2V0czsgdGFyZ2V0SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oYCR7bmFtZX1fJHt0YXJnZXRJbmRleH1gLCB0aGlzLm5hbWUsIGZwcywgdGhpcy50eXBlKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24uc2V0S2V5cyhcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZToga2V5LmZyYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IGtleS5pblRhbmdlbnQgPyBrZXkuaW5UYW5nZW50W3RhcmdldEluZGV4XSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleS52YWx1ZVt0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IGtleS5vdXRUYW5nZW50ID8ga2V5Lm91dFRhbmdlbnRbdGFyZ2V0SW5kZXhdIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBrZXkuaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Ll9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWVzaCBvZiB0YXJnZXQuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KHRhcmdldEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25DbG9uZSA9IGJhYnlsb25BbmltYXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0LmFuaW1hdGlvbnMucHVzaChiYWJ5bG9uQW5pbWF0aW9uQ2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbnMucHVzaCh7IGJhYnlsb25BbmltYXRhYmxlOiBtb3JwaFRhcmdldCwgYmFieWxvbkFuaW1hdGlvbjogYmFieWxvbkFuaW1hdGlvbkNsb25lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9ucztcclxuICAgIH1cclxufVxyXG5cclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9ub2Rlcy97fS90cmFuc2xhdGlvblwiLCBbbmV3IFRyYW5zZm9ybU5vZGVBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMywgXCJwb3NpdGlvblwiLCBnZXRWZWN0b3IzLCAoKSA9PiAzKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL25vZGVzL3t9L3JvdGF0aW9uXCIsIFtuZXcgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OLCBcInJvdGF0aW9uUXVhdGVybmlvblwiLCBnZXRRdWF0ZXJuaW9uLCAoKSA9PiA0KV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL25vZGVzL3t9L3NjYWxlXCIsIFtuZXcgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzLCBcInNjYWxpbmdcIiwgZ2V0VmVjdG9yMywgKCkgPT4gMyldKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9ub2Rlcy97fS93ZWlnaHRzXCIsIFtuZXcgV2VpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImluZmx1ZW5jZVwiLCBnZXRXZWlnaHRzLCAodGFyZ2V0KSA9PiB0YXJnZXQuX251bU1vcnBoVGFyZ2V0cyEpXSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=