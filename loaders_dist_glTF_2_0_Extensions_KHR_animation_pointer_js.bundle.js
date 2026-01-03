"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_animation_pointer_js"],{

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_animation_pointer.data.js":
/*!*************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_animation_pointer.data.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Animations/animation */ "../core/dist/Animations/animation.js");
/* harmony import */ var _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderAnimation */ "../loaders/dist/glTF/2.0/glTFLoaderAnimation.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _objectModelMapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/naming-convention */




function getColor3(_target, source, offset, scale) {
    return core_Maths_math_color__WEBPACK_IMPORTED_MODULE_2__.Color3.FromArray(source, offset).scale(scale);
}
function getAlpha(_target, source, offset, scale) {
    return source[offset + 3] * scale;
}
function getFloat(_target, source, offset, scale) {
    return source[offset] * scale;
}
function getMinusFloat(_target, source, offset, scale) {
    return -source[offset] * scale;
}
function getNextFloat(_target, source, offset, scale) {
    return source[offset + 1] * scale;
}
function getFloatBy2(_target, source, offset, scale) {
    return source[offset] * scale * 2;
}
function getTextureTransformTree(textureName) {
    return {
        scale: [
            new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, `${textureName}.uScale`, getFloat, () => 2),
            new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, `${textureName}.vScale`, getNextFloat, () => 2),
        ],
        offset: [
            new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, `${textureName}.uOffset`, getFloat, () => 2),
            new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, `${textureName}.vOffset`, getNextFloat, () => 2),
        ],
        rotation: [new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, `${textureName}.wAng`, getMinusFloat, () => 1)],
    };
}
class CameraAnimationPropertyInfo extends _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo {
    /** @internal */
    buildAnimations(target, name, fps, keys) {
        return [{ babylonAnimatable: target._babylonCamera, babylonAnimation: this._buildAnimation(name, fps, keys) }];
    }
}
class MaterialAnimationPropertyInfo extends _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo {
    /** @internal */
    buildAnimations(target, name, fps, keys) {
        const babylonAnimations = [];
        for (const fillMode in target._data) {
            babylonAnimations.push({
                babylonAnimatable: target._data[fillMode].babylonMaterial,
                babylonAnimation: this._buildAnimation(name, fps, keys),
            });
        }
        return babylonAnimations;
    }
}
class LightAnimationPropertyInfo extends _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo {
    /** @internal */
    buildAnimations(target, name, fps, keys) {
        return [{ babylonAnimatable: target._babylonLight, babylonAnimation: this._buildAnimation(name, fps, keys) }];
    }
}
class MeshAnimationPropertyInfo extends _glTFLoaderAnimation__WEBPACK_IMPORTED_MODULE_1__.AnimationPropertyInfo {
    /** @internal */
    buildAnimations(target, name, fps, keys) {
        return target._primitiveBabylonMeshes
            ? target._primitiveBabylonMeshes.map((mesh) => ({ babylonAnimatable: mesh, babylonAnimation: this._buildAnimation(name, fps, keys) }))
            : [];
    }
}
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/orthographic/xmag", [
    new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoLeft", getMinusFloat, () => 1),
    new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoRight", getNextFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/orthographic/ymag", [
    new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoBottom", getMinusFloat, () => 1),
    new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "orthoTop", getNextFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/orthographic/zfar", [new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "maxZ", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/orthographic/znear", [new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "minZ", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/perspective/yfov", [new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "fov", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/perspective/zfar", [new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "maxZ", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/cameras/{}/perspective/znear", [new CameraAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "minZ", getFloat, () => 1)]);
// add interpolation to the materials mapping
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/pbrMetallicRoughness/baseColorFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "albedoColor", getColor3, () => 4),
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "alpha", getAlpha, () => 4),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/pbrMetallicRoughness/metallicFactor", [new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "metallic", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/pbrMetallicRoughness/metallicFactor", [new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "roughness", getFloat, () => 1)]);
const baseColorTextureInterpolation = getTextureTransformTree("albedoTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/scale", baseColorTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/offset", baseColorTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/rotation", baseColorTextureInterpolation.rotation);
const metallicRoughnessTextureInterpolation = getTextureTransformTree("metallicTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("//materials/{}/pbrMetallicRoughness/metallicRoughnessTexture/scale", metallicRoughnessTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("//materials/{}/pbrMetallicRoughness/metallicRoughnessTexture/offset", metallicRoughnessTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("//materials/{}/pbrMetallicRoughness/metallicRoughnessTexture/rotation", metallicRoughnessTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/emissiveFactor", [new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "emissiveColor", getColor3, () => 3)]);
const normalTextureInterpolation = getTextureTransformTree("bumpTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/normalTexture/scale", [new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "bumpTexture.level", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/normalTexture/extensions/KHR_texture_transform/scale", normalTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/normalTexture/extensions/KHR_texture_transform/offset", normalTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/normalTexture/extensions/KHR_texture_transform/rotation", normalTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/occlusionTexture/strength", [new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "ambientTextureStrength", getFloat, () => 1)]);
const occlusionTextureInterpolation = getTextureTransformTree("ambientTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/occlusionTexture/extensions/KHR_texture_transform/scale", occlusionTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/occlusionTexture/extensions/KHR_texture_transform/offset", occlusionTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/occlusionTexture/extensions/KHR_texture_transform/rotation", occlusionTextureInterpolation.rotation);
const emissiveTextureInterpolation = getTextureTransformTree("emissiveTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/emissiveTexture/extensions/KHR_texture_transform/scale", emissiveTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/emissiveTexture/extensions/KHR_texture_transform/offset", emissiveTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/emissiveTexture/extensions/KHR_texture_transform/rotation", emissiveTextureInterpolation.rotation);
// materials extensions
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyStrength", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "anisotropy.intensity", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyRotation", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "anisotropy.angle", getFloat, () => 1),
]);
const anisotropyTextureInterpolation = getTextureTransformTree("anisotropy.texture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyTexture/extensions/KHR_texture_transform/scale", anisotropyTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyTexture/extensions/KHR_texture_transform/offset", anisotropyTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyTexture/extensions/KHR_texture_transform/rotation", anisotropyTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.intensity", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.roughness", getFloat, () => 1),
]);
const clearcoatTextureInterpolation = getTextureTransformTree("clearCoat.texture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatTexture/extensions/KHR_texture_transform/scale", clearcoatTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatTexture/extensions/KHR_texture_transform/offset", clearcoatTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatTexture/extensions/KHR_texture_transform/rotation", clearcoatTextureInterpolation.rotation);
const clearcoatNormalTextureInterpolation = getTextureTransformTree("clearCoat.bumpTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/scale", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.bumpTexture.level", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/extensions/KHR_texture_transform/scale", clearcoatNormalTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/extensions/KHR_texture_transform/offset", clearcoatNormalTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/extensions/KHR_texture_transform/rotation", clearcoatNormalTextureInterpolation.rotation);
const clearcoatRoughnessTextureInterpolation = getTextureTransformTree("clearCoat.textureRoughness");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessTexture/extensions/KHR_texture_transform/scale", clearcoatRoughnessTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessTexture/extensions/KHR_texture_transform/offset", clearcoatRoughnessTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessTexture/extensions/KHR_texture_transform/rotation", clearcoatRoughnessTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_dispersion/dispersionFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.dispersion", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_emissive_strength/emissiveStrength", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "emissiveIntensity", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_ior/ior", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "indexOfRefraction", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.intensity", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceIor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.indexOfRefraction", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessMinimum", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.minimumThickness", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessMaximum", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "iridescence.maximumThickness", getFloat, () => 1),
]);
const iridescenceTextureInterpolation = getTextureTransformTree("iridescence.texture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceTexture/extensions/KHR_texture_transform/scale", iridescenceTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceTexture/extensions/KHR_texture_transform/offset", iridescenceTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceTexture/extensions/KHR_texture_transform/rotation", iridescenceTextureInterpolation.rotation);
const iridescenceThicknessTextureInterpolation = getTextureTransformTree("iridescence.thicknessTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessTexture/extensions/KHR_texture_transform/scale", iridescenceThicknessTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessTexture/extensions/KHR_texture_transform/offset", iridescenceThicknessTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessTexture/extensions/KHR_texture_transform/rotation", iridescenceThicknessTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenColorFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "sheen.color", getColor3, () => 3),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "sheen.roughness", getFloat, () => 1),
]);
const sheenTextureInterpolation = getTextureTransformTree("sheen.texture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenColorTexture/extensions/KHR_texture_transform/scale", sheenTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenColorTexture/extensions/KHR_texture_transform/offset", sheenTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenColorTexture/extensions/KHR_texture_transform/rotation", sheenTextureInterpolation.rotation);
const sheenRoughnessTextureInterpolation = getTextureTransformTree("sheen.textureRoughness");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessTexture/extensions/KHR_texture_transform/scale", sheenRoughnessTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessTexture/extensions/KHR_texture_transform/offset", sheenRoughnessTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessTexture/extensions/KHR_texture_transform/rotation", sheenRoughnessTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "metallicF0Factor", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularColorFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "metallicReflectanceColor", getColor3, () => 3),
]);
const specularTextureInterpolation = getTextureTransformTree("metallicReflectanceTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularTexture/extensions/KHR_texture_transform/scale", specularTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularTexture/extensions/KHR_texture_transform/offset", specularTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularTexture/extensions/KHR_texture_transform/rotation", specularTextureInterpolation.rotation);
const specularColorTextureInterpolation = getTextureTransformTree("reflectanceTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularColorTexture/extensions/KHR_texture_transform/scale", specularColorTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularColorTexture/extensions/KHR_texture_transform/offset", specularColorTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_specular/specularColorTexture/extensions/KHR_texture_transform/rotation", specularColorTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_transmission/transmissionFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.refractionIntensity", getFloat, () => 1),
]);
const transmissionTextureInterpolation = getTextureTransformTree("subSurface.refractionIntensityTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_transmission/transmissionTexture/extensions/KHR_texture_transform/scale", transmissionTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_transmission/transmissionTexture/extensions/KHR_texture_transform/offset", transmissionTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_transmission/transmissionTexture/extensions/KHR_texture_transform/rotation", transmissionTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_volume/attenuationColor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "subSurface.tintColor", getColor3, () => 3),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_volume/attenuationDistance", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.tintColorAtDistance", getFloat, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_volume/thicknessFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.maximumThickness", getFloat, () => 1),
]);
const thicknessTextureInterpolation = getTextureTransformTree("subSurface.thicknessTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_volume/thicknessTexture/extensions/KHR_texture_transform/scale", thicknessTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_volume/thicknessTexture/extensions/KHR_texture_transform/offset", thicknessTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_volume/thicknessTexture/extensions/KHR_texture_transform/rotation", thicknessTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "subSurface.translucencyIntensity", getFloat, () => 1),
]);
const diffuseTransmissionTextureInterpolation = getTextureTransformTree("subSurface.translucencyIntensityTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionTexture/extensions/KHR_texture_transform/scale", diffuseTransmissionTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionTexture/extensions/KHR_texture_transform/offset", diffuseTransmissionTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionTexture/extensions/KHR_texture_transform/rotation", diffuseTransmissionTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorFactor", [
    new MaterialAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "subSurface.translucencyColor", getColor3, () => 3),
]);
const diffuseTransmissionColorTextureInterpolation = getTextureTransformTree("subSurface.translucencyColorTexture");
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorTexture/extensions/KHR_texture_transform/scale", diffuseTransmissionColorTextureInterpolation.scale);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorTexture/extensions/KHR_texture_transform/offset", diffuseTransmissionColorTextureInterpolation.offset);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorTexture/extensions/KHR_texture_transform/rotation", diffuseTransmissionColorTextureInterpolation.rotation);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/KHR_lights_punctual/lights/{}/color", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "diffuse", getColor3, () => 3)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/KHR_lights_punctual/lights/{}/intensity", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "intensity", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/KHR_lights_punctual/lights/{}/range", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "range", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/KHR_lights_punctual/lights/{}/spot/innerConeAngle", [
    new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "innerAngle", getFloatBy2, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/KHR_lights_punctual/lights/{}/spot/outerConeAngle", [
    new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "angle", getFloatBy2, () => 1),
]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/EXT_lights_area/lights/{}/color", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "diffuse", getColor3, () => 3)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/EXT_lights_area/lights/{}/intensity", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "intensity", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/EXT_lights_area/lights/{}/size", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "radius", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/extensions/EXT_lights_area/lights/{}/rect/aspect", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "radius", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/nodes/{}/extensions/EXT_lights_ies/color", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_COLOR3, "diffuse", getColor3, () => 3)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/nodes/{}/extensions/EXT_lights_ies/multiplier", [new LightAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "intensity", getFloat, () => 1)]);
(0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.SetInterpolationForKey)("/nodes/{}/extensions/KHR_node_visibility/visible", [new MeshAnimationPropertyInfo(core_Animations_animation__WEBPACK_IMPORTED_MODULE_0__.Animation.ANIMATIONTYPE_FLOAT, "isVisible", getFloat, () => 1)]);


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

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_animation_pointer.js":
/*!********************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_animation_pointer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_animation_pointer: () => (/* binding */ KHR_animation_pointer)
/* harmony export */ });
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var _objectModelMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* harmony import */ var _KHR_animation_pointer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_animation_pointer.data */ "../loaders/dist/glTF/2.0/Extensions/KHR_animation_pointer.data.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





const NAME = "KHR_animation_pointer";
/**
 * [Specification PR](https://github.com/KhronosGroup/glTF/pull/2147)
 * !!! Experimental Extension Subject to Changes !!!
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class KHR_animation_pointer {
    /**
     * @internal
     */
    constructor(loader) {
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this._loader = loader;
        this._pathToObjectConverter = (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_2__.GetPathToObjectConverter)(this._loader.gltf);
    }
    /**
     * Defines whether this extension is enabled.
     */
    get enabled() {
        return this._loader.isExtensionUsed(NAME);
    }
    /** @internal */
    dispose() {
        this._loader = null;
        delete this._pathToObjectConverter; // GC
    }
    /**
     * Loads a glTF animation channel.
     * @param context The context when loading the asset
     * @param animationContext The context of the animation when loading the asset
     * @param animation The glTF animation property
     * @param channel The glTF animation channel property
     * @param onLoad Called for each animation loaded
     * @returns A void promise that resolves when the load is complete or null if not handled
     */
    // eslint-disable-next-line no-restricted-syntax
    _loadAnimationChannelAsync(context, animationContext, animation, channel, onLoad) {
        const extension = channel.target.extensions?.KHR_animation_pointer;
        if (!extension || !this._pathToObjectConverter) {
            return null;
        }
        if (channel.target.path !== "pointer" /* AnimationChannelTargetPath.POINTER */) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`${context}/target/path: Value (${channel.target.path}) must be (${"pointer" /* AnimationChannelTargetPath.POINTER */}) when using the ${this.name} extension`);
        }
        if (channel.target.node != undefined) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`${context}/target/node: Value (${channel.target.node}) must not be present when using the ${this.name} extension`);
        }
        const extensionContext = `${context}/extensions/${this.name}`;
        const pointer = extension.pointer;
        if (!pointer) {
            throw new Error(`${extensionContext}: Pointer is missing`);
        }
        try {
            const obj = this._pathToObjectConverter.convert(pointer);
            if (!obj.info.interpolation) {
                throw new Error(`${extensionContext}/pointer: Interpolation is missing`);
            }
            return this._loader._loadAnimationChannelFromTargetInfoAsync(context, animationContext, animation, channel, {
                object: obj.object,
                info: obj.info.interpolation,
            }, onLoad);
        }
        catch (e) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(`${extensionContext}/pointer: Invalid pointer (${pointer}) skipped`);
            return null;
        }
    }
}
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_1__.registerGLTFExtension)(NAME, true, (loader) => new KHR_animation_pointer(loader));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2FuaW1hdGlvbl9wb2ludGVyX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBSUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1VBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFhQTs7O0FBR0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQVhBOztBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfYW5pbWF0aW9uX3BvaW50ZXIuZGF0YS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2FuaW1hdGlvbl9wb2ludGVyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvZ2xURkxvYWRlckFuaW1hdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb24gKi9cclxuXHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUNhbWVyYSwgSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBJTWF0ZXJpYWwsIElOb2RlIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGFibGUgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGFibGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvblByb3BlcnR5SW5mbyB9IGZyb20gXCIuLi9nbFRGTG9hZGVyQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgU2V0SW50ZXJwb2xhdGlvbkZvcktleSB9IGZyb20gXCIuL29iamVjdE1vZGVsTWFwcGluZ1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29sb3IzKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogQ29sb3IzIHtcclxuICAgIHJldHVybiBDb2xvcjMuRnJvbUFycmF5KHNvdXJjZSwgb2Zmc2V0KS5zY2FsZShzY2FsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFscGhhKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzb3VyY2Vbb2Zmc2V0ICsgM10gKiBzY2FsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmxvYXQoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvdXJjZVtvZmZzZXRdICogc2NhbGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1pbnVzRmxvYXQoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIC1zb3VyY2Vbb2Zmc2V0XSAqIHNjYWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0RmxvYXQoX3RhcmdldDogYW55LCBzb3VyY2U6IEZsb2F0MzJBcnJheSwgb2Zmc2V0OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvdXJjZVtvZmZzZXQgKyAxXSAqIHNjYWxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGbG9hdEJ5MihfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc291cmNlW29mZnNldF0gKiBzY2FsZSAqIDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKHRleHR1cmVOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2NhbGU6IFtcclxuICAgICAgICAgICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBgJHt0ZXh0dXJlTmFtZX0udVNjYWxlYCwgZ2V0RmxvYXQsICgpID0+IDIpLFxyXG4gICAgICAgICAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIGAke3RleHR1cmVOYW1lfS52U2NhbGVgLCBnZXROZXh0RmxvYXQsICgpID0+IDIpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb2Zmc2V0OiBbXHJcbiAgICAgICAgICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgYCR7dGV4dHVyZU5hbWV9LnVPZmZzZXRgLCBnZXRGbG9hdCwgKCkgPT4gMiksXHJcbiAgICAgICAgICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgYCR7dGV4dHVyZU5hbWV9LnZPZmZzZXRgLCBnZXROZXh0RmxvYXQsICgpID0+IDIpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcm90YXRpb246IFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIGAke3RleHR1cmVOYW1lfS53QW5nYCwgZ2V0TWludXNGbG9hdCwgKCkgPT4gMSldLFxyXG4gICAgfTtcclxufVxyXG5cclxuY2xhc3MgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvIGV4dGVuZHMgQW5pbWF0aW9uUHJvcGVydHlJbmZvIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBidWlsZEFuaW1hdGlvbnModGFyZ2V0OiBJQ2FtZXJhLCBuYW1lOiBzdHJpbmcsIGZwczogbnVtYmVyLCBrZXlzOiBhbnlbXSkge1xyXG4gICAgICAgIHJldHVybiBbeyBiYWJ5bG9uQW5pbWF0YWJsZTogdGFyZ2V0Ll9iYWJ5bG9uQ2FtZXJhISwgYmFieWxvbkFuaW1hdGlvbjogdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSB9XTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8gZXh0ZW5kcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IElNYXRlcmlhbCwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10pIHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uczogeyBiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGU7IGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbiB9W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpbGxNb2RlIGluIHRhcmdldC5fZGF0YSEpIHtcclxuICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0YWJsZTogdGFyZ2V0Ll9kYXRhW2ZpbGxNb2RlXS5iYWJ5bG9uTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uOiB0aGlzLl9idWlsZEFuaW1hdGlvbihuYW1lLCBmcHMsIGtleXMpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25BbmltYXRpb25zO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKHRhcmdldDogSUtIUkxpZ2h0c1B1bmN0dWFsX0xpZ2h0LCBuYW1lOiBzdHJpbmcsIGZwczogbnVtYmVyLCBrZXlzOiBhbnlbXSkge1xyXG4gICAgICAgIHJldHVybiBbeyBiYWJ5bG9uQW5pbWF0YWJsZTogdGFyZ2V0Ll9iYWJ5bG9uTGlnaHQhLCBiYWJ5bG9uQW5pbWF0aW9uOiB0aGlzLl9idWlsZEFuaW1hdGlvbihuYW1lLCBmcHMsIGtleXMpIH1dO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNZXNoQW5pbWF0aW9uUHJvcGVydHlJbmZvIGV4dGVuZHMgQW5pbWF0aW9uUHJvcGVydHlJbmZvIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBidWlsZEFuaW1hdGlvbnModGFyZ2V0OiBJTm9kZSwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10pIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0Ll9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzXHJcbiAgICAgICAgICAgID8gdGFyZ2V0Ll9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzLm1hcCgobWVzaCkgPT4gKHsgYmFieWxvbkFuaW1hdGFibGU6IG1lc2gsIGJhYnlsb25BbmltYXRpb246IHRoaXMuX2J1aWxkQW5pbWF0aW9uKG5hbWUsIGZwcywga2V5cykgfSkpXHJcbiAgICAgICAgICAgIDogW107XHJcbiAgICB9XHJcbn1cclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvY2FtZXJhcy97fS9vcnRob2dyYXBoaWMveG1hZ1wiLCBbXHJcbiAgICBuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm9ydGhvTGVmdFwiLCBnZXRNaW51c0Zsb2F0LCAoKSA9PiAxKSxcclxuICAgIG5ldyBDYW1lcmFBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwib3J0aG9SaWdodFwiLCBnZXROZXh0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvY2FtZXJhcy97fS9vcnRob2dyYXBoaWMveW1hZ1wiLCBbXHJcbiAgICBuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm9ydGhvQm90dG9tXCIsIGdldE1pbnVzRmxvYXQsICgpID0+IDEpLFxyXG4gICAgbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJvcnRob1RvcFwiLCBnZXROZXh0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvY2FtZXJhcy97fS9vcnRob2dyYXBoaWMvemZhclwiLCBbbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJtYXhaXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2NhbWVyYXMve30vb3J0aG9ncmFwaGljL3puZWFyXCIsIFtuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm1pblpcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSk7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2NhbWVyYXMve30vcGVyc3BlY3RpdmUveWZvdlwiLCBbbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJmb3ZcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvY2FtZXJhcy97fS9wZXJzcGVjdGl2ZS96ZmFyXCIsIFtuZXcgQ2FtZXJhQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcIm1heFpcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvY2FtZXJhcy97fS9wZXJzcGVjdGl2ZS96bmVhclwiLCBbbmV3IENhbWVyYUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJtaW5aXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0pO1xyXG5cclxuLy8gYWRkIGludGVycG9sYXRpb24gdG8gdGhlIG1hdGVyaWFscyBtYXBwaW5nXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L3Bick1ldGFsbGljUm91Z2huZXNzL2Jhc2VDb2xvckZhY3RvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfQ09MT1IzLCBcImFsYmVkb0NvbG9yXCIsIGdldENvbG9yMywgKCkgPT4gNCksXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiYWxwaGFcIiwgZ2V0QWxwaGEsICgpID0+IDQpLFxyXG5dKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vcGJyTWV0YWxsaWNSb3VnaG5lc3MvbWV0YWxsaWNGYWN0b3JcIiwgW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJtZXRhbGxpY1wiLCBnZXRGbG9hdCwgKCkgPT4gMSldKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vcGJyTWV0YWxsaWNSb3VnaG5lc3MvbWV0YWxsaWNGYWN0b3JcIiwgW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJyb3VnaG5lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSk7XHJcbmNvbnN0IGJhc2VDb2xvclRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJhbGJlZG9UZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9wYnJNZXRhbGxpY1JvdWdobmVzcy9iYXNlQ29sb3JUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsIGJhc2VDb2xvclRleHR1cmVJbnRlcnBvbGF0aW9uLnNjYWxlKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vcGJyTWV0YWxsaWNSb3VnaG5lc3MvYmFzZUNvbG9yVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9vZmZzZXRcIiwgYmFzZUNvbG9yVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vcGJyTWV0YWxsaWNSb3VnaG5lc3MvYmFzZUNvbG9yVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLCBiYXNlQ29sb3JUZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvbik7XHJcblxyXG5jb25zdCBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJtZXRhbGxpY1RleHR1cmVcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvL21hdGVyaWFscy97fS9wYnJNZXRhbGxpY1JvdWdobmVzcy9tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUvc2NhbGVcIiwgbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbi5zY2FsZSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvL21hdGVyaWFscy97fS9wYnJNZXRhbGxpY1JvdWdobmVzcy9tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUvb2Zmc2V0XCIsIG1ldGFsbGljUm91Z2huZXNzVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi8vbWF0ZXJpYWxzL3t9L3Bick1ldGFsbGljUm91Z2huZXNzL21ldGFsbGljUm91Z2huZXNzVGV4dHVyZS9yb3RhdGlvblwiLCBtZXRhbGxpY1JvdWdobmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2VtaXNzaXZlRmFjdG9yXCIsIFtuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfQ09MT1IzLCBcImVtaXNzaXZlQ29sb3JcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKV0pO1xyXG5jb25zdCBub3JtYWxUZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwiYnVtcFRleHR1cmVcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L25vcm1hbFRleHR1cmUvc2NhbGVcIiwgW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJidW1wVGV4dHVyZS5sZXZlbFwiLCBnZXRGbG9hdCwgKCkgPT4gMSldKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L25vcm1hbFRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vc2NhbGVcIiwgbm9ybWFsVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9ub3JtYWxUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL29mZnNldFwiLCBub3JtYWxUZXh0dXJlSW50ZXJwb2xhdGlvbi5vZmZzZXQpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9ub3JtYWxUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsIG5vcm1hbFRleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L29jY2x1c2lvblRleHR1cmUvc3RyZW5ndGhcIiwgW25ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJhbWJpZW50VGV4dHVyZVN0cmVuZ3RoXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0pO1xyXG5cclxuY29uc3Qgb2NjbHVzaW9uVGV4dHVyZUludGVycG9sYXRpb24gPSBnZXRUZXh0dXJlVHJhbnNmb3JtVHJlZShcImFtYmllbnRUZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9vY2NsdXNpb25UZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsIG9jY2x1c2lvblRleHR1cmVJbnRlcnBvbGF0aW9uLnNjYWxlKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vb2NjbHVzaW9uVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9vZmZzZXRcIiwgb2NjbHVzaW9uVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vb2NjbHVzaW9uVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLCBvY2NsdXNpb25UZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvbik7XHJcbmNvbnN0IGVtaXNzaXZlVGV4dHVyZUludGVycG9sYXRpb24gPSBnZXRUZXh0dXJlVHJhbnNmb3JtVHJlZShcImVtaXNzaXZlVGV4dHVyZVwiKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZW1pc3NpdmVUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsIGVtaXNzaXZlVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9lbWlzc2l2ZVRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIGVtaXNzaXZlVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZW1pc3NpdmVUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsIGVtaXNzaXZlVGV4dHVyZUludGVycG9sYXRpb24ucm90YXRpb24pO1xyXG5cclxuLy8gbWF0ZXJpYWxzIGV4dGVuc2lvbnNcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkvYW5pc290cm9weVN0cmVuZ3RoXCIsIFtcclxuICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJhbmlzb3Ryb3B5LmludGVuc2l0eVwiLCBnZXRGbG9hdCwgKCkgPT4gMSksXHJcbl0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfYW5pc290cm9weS9hbmlzb3Ryb3B5Um90YXRpb25cIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFuaXNvdHJvcHkuYW5nbGVcIiwgZ2V0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuY29uc3QgYW5pc290cm9weVRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJhbmlzb3Ryb3B5LnRleHR1cmVcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5L2FuaXNvdHJvcHlUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsIGFuaXNvdHJvcHlUZXh0dXJlSW50ZXJwb2xhdGlvbi5zY2FsZSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19hbmlzb3Ryb3B5L2FuaXNvdHJvcHlUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL29mZnNldFwiLCBhbmlzb3Ryb3B5VGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2FuaXNvdHJvcHkvYW5pc290cm9weVRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vcm90YXRpb25cIiwgYW5pc290cm9weVRleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC9jbGVhcmNvYXRGYWN0b3JcIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImNsZWFyQ29hdC5pbnRlbnNpdHlcIiwgZ2V0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC9jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3JcIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImNsZWFyQ29hdC5yb3VnaG5lc3NcIiwgZ2V0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuY29uc3QgY2xlYXJjb2F0VGV4dHVyZUludGVycG9sYXRpb24gPSBnZXRUZXh0dXJlVHJhbnNmb3JtVHJlZShcImNsZWFyQ29hdC50ZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0L2NsZWFyY29hdFRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vc2NhbGVcIiwgY2xlYXJjb2F0VGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0L2NsZWFyY29hdFRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIGNsZWFyY29hdFRleHR1cmVJbnRlcnBvbGF0aW9uLm9mZnNldCk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvY2xlYXJjb2F0VGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLCBjbGVhcmNvYXRUZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvbik7XHJcbmNvbnN0IGNsZWFyY29hdE5vcm1hbFRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJjbGVhckNvYXQuYnVtcFRleHR1cmVcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS9zY2FsZVwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiY2xlYXJDb2F0LmJ1bXBUZXh0dXJlLmxldmVsXCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9zY2FsZVwiLCBjbGVhcmNvYXROb3JtYWxUZXh0dXJlSW50ZXJwb2xhdGlvbi5zY2FsZSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXHJcbiAgICBcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC9jbGVhcmNvYXROb3JtYWxUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL29mZnNldFwiLFxyXG4gICAgY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0XHJcbik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXHJcbiAgICBcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC9jbGVhcmNvYXROb3JtYWxUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsXHJcbiAgICBjbGVhcmNvYXROb3JtYWxUZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvblxyXG4pO1xyXG5jb25zdCBjbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwiY2xlYXJDb2F0LnRleHR1cmVSb3VnaG5lc3NcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXHJcbiAgICBcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdC9jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsXHJcbiAgICBjbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbi5zY2FsZVxyXG4pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFxyXG4gICAgXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9vZmZzZXRcIixcclxuICAgIGNsZWFyY29hdFJvdWdobmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uLm9mZnNldFxyXG4pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFxyXG4gICAgXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19jbGVhcmNvYXQvY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLFxyXG4gICAgY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZUludGVycG9sYXRpb24ucm90YXRpb25cclxuKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaXNwZXJzaW9uL2Rpc3BlcnNpb25GYWN0b3JcIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInN1YlN1cmZhY2UuZGlzcGVyc2lvblwiLCBnZXRGbG9hdCwgKCkgPT4gMSksXHJcbl0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgvZW1pc3NpdmVTdHJlbmd0aFwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiZW1pc3NpdmVJbnRlbnNpdHlcIiwgZ2V0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lvci9pb3JcIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImluZGV4T2ZSZWZyYWN0aW9uXCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS9pcmlkZXNjZW5jZUZhY3RvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaXJpZGVzY2VuY2UuaW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS9pcmlkZXNjZW5jZUlvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaXJpZGVzY2VuY2UuaW5kZXhPZlJlZnJhY3Rpb25cIiwgZ2V0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlL2lyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bVwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaXJpZGVzY2VuY2UubWluaW11bVRoaWNrbmVzc1wiLCBnZXRGbG9hdCwgKCkgPT4gMSksXHJcbl0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UvaXJpZGVzY2VuY2VUaGlja25lc3NNYXhpbXVtXCIsIFtcclxuICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpcmlkZXNjZW5jZS5tYXhpbXVtVGhpY2tuZXNzXCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcblxyXG5jb25zdCBpcmlkZXNjZW5jZVRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJpcmlkZXNjZW5jZS50ZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UvaXJpZGVzY2VuY2VUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsIGlyaWRlc2NlbmNlVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UvaXJpZGVzY2VuY2VUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL29mZnNldFwiLCBpcmlkZXNjZW5jZVRleHR1cmVJbnRlcnBvbGF0aW9uLm9mZnNldCk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS9pcmlkZXNjZW5jZVRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vcm90YXRpb25cIiwgaXJpZGVzY2VuY2VUZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvbik7XHJcblxyXG5jb25zdCBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJpcmlkZXNjZW5jZS50aGlja25lc3NUZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFxyXG4gICAgXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19pcmlkZXNjZW5jZS9pcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vc2NhbGVcIixcclxuICAgIGlyaWRlc2NlbmNlVGhpY2tuZXNzVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGVcclxuKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcclxuICAgIFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UvaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL29mZnNldFwiLFxyXG4gICAgaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbi5vZmZzZXRcclxuKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcclxuICAgIFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfaXJpZGVzY2VuY2UvaXJpZGVzY2VuY2VUaGlja25lc3NUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsXHJcbiAgICBpcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uXHJcbik7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4vc2hlZW5Db2xvckZhY3RvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfQ09MT1IzLCBcInNoZWVuLmNvbG9yXCIsIGdldENvbG9yMywgKCkgPT4gMyksXHJcbl0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4vc2hlZW5Sb3VnaG5lc3NGYWN0b3JcIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInNoZWVuLnJvdWdobmVzc1wiLCBnZXRGbG9hdCwgKCkgPT4gMSksXHJcbl0pO1xyXG5cclxuY29uc3Qgc2hlZW5UZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwic2hlZW4udGV4dHVyZVwiKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NoZWVuL3NoZWVuQ29sb3JUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsIHNoZWVuVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4vc2hlZW5Db2xvclRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIHNoZWVuVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NoZWVuL3NoZWVuQ29sb3JUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsIHNoZWVuVGV4dHVyZUludGVycG9sYXRpb24ucm90YXRpb24pO1xyXG5cclxuY29uc3Qgc2hlZW5Sb3VnaG5lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwic2hlZW4udGV4dHVyZVJvdWdobmVzc1wiKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NoZWVuL3NoZWVuUm91Z2huZXNzVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9zY2FsZVwiLCBzaGVlblJvdWdobmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uLnNjYWxlKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NoZWVuL3NoZWVuUm91Z2huZXNzVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9vZmZzZXRcIiwgc2hlZW5Sb3VnaG5lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbi5vZmZzZXQpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc2hlZW4vc2hlZW5Sb3VnaG5lc3NUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsIHNoZWVuUm91Z2huZXNzVGV4dHVyZUludGVycG9sYXRpb24ucm90YXRpb24pO1xyXG5cclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyL3NwZWN1bGFyRmFjdG9yXCIsIFtcclxuICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJtZXRhbGxpY0YwRmFjdG9yXCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci9zcGVjdWxhckNvbG9yRmFjdG9yXCIsIFtcclxuICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwibWV0YWxsaWNSZWZsZWN0YW5jZUNvbG9yXCIsIGdldENvbG9yMywgKCkgPT4gMyksXHJcbl0pO1xyXG5cclxuY29uc3Qgc3BlY3VsYXJUZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwibWV0YWxsaWNSZWZsZWN0YW5jZVRleHR1cmVcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci9zcGVjdWxhclRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vc2NhbGVcIiwgc3BlY3VsYXJUZXh0dXJlSW50ZXJwb2xhdGlvbi5zY2FsZSk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci9zcGVjdWxhclRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIHNwZWN1bGFyVGV4dHVyZUludGVycG9sYXRpb24ub2Zmc2V0KTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyL3NwZWN1bGFyVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLCBzcGVjdWxhclRleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uKTtcclxuY29uc3Qgc3BlY3VsYXJDb2xvclRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJyZWZsZWN0YW5jZVRleHR1cmVcIik7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci9zcGVjdWxhckNvbG9yVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9zY2FsZVwiLCBzcGVjdWxhckNvbG9yVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXIvc3BlY3VsYXJDb2xvclRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIHNwZWN1bGFyQ29sb3JUZXh0dXJlSW50ZXJwb2xhdGlvbi5vZmZzZXQpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFxyXG4gICAgXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19zcGVjdWxhci9zcGVjdWxhckNvbG9yVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLFxyXG4gICAgc3BlY3VsYXJDb2xvclRleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uXHJcbik7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uL3RyYW5zbWlzc2lvbkZhY3RvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS5yZWZyYWN0aW9uSW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcbmNvbnN0IHRyYW5zbWlzc2lvblRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJzdWJTdXJmYWNlLnJlZnJhY3Rpb25JbnRlbnNpdHlUZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uL3RyYW5zbWlzc2lvblRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vc2NhbGVcIiwgdHJhbnNtaXNzaW9uVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uL3RyYW5zbWlzc2lvblRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIHRyYW5zbWlzc2lvblRleHR1cmVJbnRlcnBvbGF0aW9uLm9mZnNldCk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXHJcbiAgICBcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbi90cmFuc21pc3Npb25UZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsXHJcbiAgICB0cmFuc21pc3Npb25UZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvblxyXG4pO1xyXG5cclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9tYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX3ZvbHVtZS9hdHRlbnVhdGlvbkNvbG9yXCIsIFtcclxuICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwic3ViU3VyZmFjZS50aW50Q29sb3JcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKSxcclxuXSk7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL2F0dGVudWF0aW9uRGlzdGFuY2VcIiwgW1xyXG4gICAgbmV3IE1hdGVyaWFsQW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInN1YlN1cmZhY2UudGludENvbG9yQXREaXN0YW5jZVwiLCBnZXRGbG9hdCwgKCkgPT4gMSksXHJcbl0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL3RoaWNrbmVzc0ZhY3RvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS5tYXhpbXVtVGhpY2tuZXNzXCIsIGdldEZsb2F0LCAoKSA9PiAxKSxcclxuXSk7XHJcblxyXG5jb25zdCB0aGlja25lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwic3ViU3VyZmFjZS50aGlja25lc3NUZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL3RoaWNrbmVzc1RleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vc2NhbGVcIiwgdGhpY2tuZXNzVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGUpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfdm9sdW1lL3RoaWNrbmVzc1RleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsIHRoaWNrbmVzc1RleHR1cmVJbnRlcnBvbGF0aW9uLm9mZnNldCk7XHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc192b2x1bWUvdGhpY2tuZXNzVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLCB0aGlja25lc3NUZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvbik7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24vZGlmZnVzZVRyYW5zbWlzc2lvbkZhY3RvclwiLCBbXHJcbiAgICBuZXcgTWF0ZXJpYWxBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwic3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lJbnRlbnNpdHlcIiwgZ2V0RmxvYXQsICgpID0+IDEpLFxyXG5dKTtcclxuXHJcbmNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlSW50ZXJwb2xhdGlvbiA9IGdldFRleHR1cmVUcmFuc2Zvcm1UcmVlKFwic3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lJbnRlbnNpdHlUZXh0dXJlXCIpO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFxyXG4gICAgXCJtYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uL2RpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsXHJcbiAgICBkaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZUludGVycG9sYXRpb24uc2NhbGVcclxuKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcclxuICAgIFwibWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbi9kaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9vZmZzZXRcIixcclxuICAgIGRpZmZ1c2VUcmFuc21pc3Npb25UZXh0dXJlSW50ZXJwb2xhdGlvbi5vZmZzZXRcclxuKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcclxuICAgIFwibWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbi9kaWZmdXNlVHJhbnNtaXNzaW9uVGV4dHVyZS9leHRlbnNpb25zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybS9yb3RhdGlvblwiLFxyXG4gICAgZGlmZnVzZVRyYW5zbWlzc2lvblRleHR1cmVJbnRlcnBvbGF0aW9uLnJvdGF0aW9uXHJcbik7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL21hdGVyaWFscy97fS9leHRlbnNpb25zL0tIUl9tYXRlcmlhbHNfZGlmZnVzZV90cmFuc21pc3Npb24vZGlmZnVzZVRyYW5zbWlzc2lvbkNvbG9yRmFjdG9yXCIsIFtcclxuICAgIG5ldyBNYXRlcmlhbEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9DT0xPUjMsIFwic3ViU3VyZmFjZS50cmFuc2x1Y2VuY3lDb2xvclwiLCBnZXRDb2xvcjMsICgpID0+IDMpLFxyXG5dKTtcclxuXHJcbmNvbnN0IGRpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmVJbnRlcnBvbGF0aW9uID0gZ2V0VGV4dHVyZVRyYW5zZm9ybVRyZWUoXCJzdWJTdXJmYWNlLnRyYW5zbHVjZW5jeUNvbG9yVGV4dHVyZVwiKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcclxuICAgIFwibWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbi9kaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3NjYWxlXCIsXHJcbiAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlSW50ZXJwb2xhdGlvbi5zY2FsZVxyXG4pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFxyXG4gICAgXCJtYXRlcmlhbHMve30vZXh0ZW5zaW9ucy9LSFJfbWF0ZXJpYWxzX2RpZmZ1c2VfdHJhbnNtaXNzaW9uL2RpZmZ1c2VUcmFuc21pc3Npb25Db2xvclRleHR1cmUvZXh0ZW5zaW9ucy9LSFJfdGV4dHVyZV90cmFuc2Zvcm0vb2Zmc2V0XCIsXHJcbiAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlSW50ZXJwb2xhdGlvbi5vZmZzZXRcclxuKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcclxuICAgIFwibWF0ZXJpYWxzL3t9L2V4dGVuc2lvbnMvS0hSX21hdGVyaWFsc19kaWZmdXNlX3RyYW5zbWlzc2lvbi9kaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlL2V4dGVuc2lvbnMvS0hSX3RleHR1cmVfdHJhbnNmb3JtL3JvdGF0aW9uXCIsXHJcbiAgICBkaWZmdXNlVHJhbnNtaXNzaW9uQ29sb3JUZXh0dXJlSW50ZXJwb2xhdGlvbi5yb3RhdGlvblxyXG4pO1xyXG5cclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9leHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwvbGlnaHRzL3t9L2NvbG9yXCIsIFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfQ09MT1IzLCBcImRpZmZ1c2VcIiwgZ2V0Q29sb3IzLCAoKSA9PiAzKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2V4dGVuc2lvbnMvS0hSX2xpZ2h0c19wdW5jdHVhbC9saWdodHMve30vaW50ZW5zaXR5XCIsIFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2V4dGVuc2lvbnMvS0hSX2xpZ2h0c19wdW5jdHVhbC9saWdodHMve30vcmFuZ2VcIiwgW25ldyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJyYW5nZVwiLCBnZXRGbG9hdCwgKCkgPT4gMSldKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9leHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwvbGlnaHRzL3t9L3Nwb3QvaW5uZXJDb25lQW5nbGVcIiwgW1xyXG4gICAgbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImlubmVyQW5nbGVcIiwgZ2V0RmxvYXRCeTIsICgpID0+IDEpLFxyXG5dKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9leHRlbnNpb25zL0tIUl9saWdodHNfcHVuY3R1YWwvbGlnaHRzL3t9L3Nwb3Qvb3V0ZXJDb25lQW5nbGVcIiwgW1xyXG4gICAgbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImFuZ2xlXCIsIGdldEZsb2F0QnkyLCAoKSA9PiAxKSxcclxuXSk7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2V4dGVuc2lvbnMvRVhUX2xpZ2h0c19hcmVhL2xpZ2h0cy97fS9jb2xvclwiLCBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJkaWZmdXNlXCIsIGdldENvbG9yMywgKCkgPT4gMyldKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9leHRlbnNpb25zL0VYVF9saWdodHNfYXJlYS9saWdodHMve30vaW50ZW5zaXR5XCIsIFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwiaW50ZW5zaXR5XCIsIGdldEZsb2F0LCAoKSA9PiAxKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2V4dGVuc2lvbnMvRVhUX2xpZ2h0c19hcmVhL2xpZ2h0cy97fS9zaXplXCIsIFtuZXcgTGlnaHRBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIFwicmFkaXVzXCIsIGdldEZsb2F0LCAoKSA9PiAxKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL2V4dGVuc2lvbnMvRVhUX2xpZ2h0c19hcmVhL2xpZ2h0cy97fS9yZWN0L2FzcGVjdFwiLCBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcInJhZGl1c1wiLCBnZXRGbG9hdCwgKCkgPT4gMSldKTtcclxuXHJcblNldEludGVycG9sYXRpb25Gb3JLZXkoXCIvbm9kZXMve30vZXh0ZW5zaW9ucy9FWFRfbGlnaHRzX2llcy9jb2xvclwiLCBbbmV3IExpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0NPTE9SMywgXCJkaWZmdXNlXCIsIGdldENvbG9yMywgKCkgPT4gMyldKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9ub2Rlcy97fS9leHRlbnNpb25zL0VYVF9saWdodHNfaWVzL211bHRpcGxpZXJcIiwgW25ldyBMaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpbnRlbnNpdHlcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSk7XHJcblxyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL25vZGVzL3t9L2V4dGVuc2lvbnMvS0hSX25vZGVfdmlzaWJpbGl0eS92aXNpYmxlXCIsIFtuZXcgTWVzaEFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9GTE9BVCwgXCJpc1Zpc2libGVcIiwgZ2V0RmxvYXQsICgpID0+IDEpXSk7XHJcbiIsImltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRhYmxlIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRhYmxlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElBbmltYXRpb24sIElBbmltYXRpb25DaGFubmVsIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUtIUkFuaW1hdGlvblBvaW50ZXIgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEdMVEZQYXRoVG9PYmplY3RDb252ZXJ0ZXIgfSBmcm9tIFwiLi9nbHRmUGF0aFRvT2JqZWN0Q29udmVydGVyXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyR0xURkV4dGVuc2lvbiwgdW5yZWdpc3RlckdMVEZFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IEdldFBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCIuL29iamVjdE1vZGVsTWFwcGluZ1wiO1xyXG5pbXBvcnQgXCIuL0tIUl9hbmltYXRpb25fcG9pbnRlci5kYXRhXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfYW5pbWF0aW9uX3BvaW50ZXJcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBLSFJfYW5pbWF0aW9uX3BvaW50ZXIgZXh0ZW5zaW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIE5PVEU6IERvbid0IHVzZSBOQU1FIGhlcmUgYXMgaXQgd2lsbCBicmVhayB0aGUgVU1EIHR5cGUgZGVjbGFyYXRpb25zLlxyXG4gICAgICAgIFtcIktIUl9hbmltYXRpb25fcG9pbnRlclwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbU3BlY2lmaWNhdGlvbiBQUl0oaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMjE0NylcclxuICogISEhIEV4cGVyaW1lbnRhbCBFeHRlbnNpb24gU3ViamVjdCB0byBDaGFuZ2VzICEhIVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY2xhc3MgS0hSX2FuaW1hdGlvbl9wb2ludGVyIGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG5cclxuICAgIHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcjtcclxuICAgIHByaXZhdGUgX3BhdGhUb09iamVjdENvbnZlcnRlcj86IEdMVEZQYXRoVG9PYmplY3RDb252ZXJ0ZXI8YW55LCBhbnksIGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobG9hZGVyOiBHTFRGTG9hZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuX3BhdGhUb09iamVjdENvbnZlcnRlciA9IEdldFBhdGhUb09iamVjdENvbnZlcnRlcih0aGlzLl9sb2FkZXIuZ2x0Zik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgICh0aGlzLl9sb2FkZXIgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3BhdGhUb09iamVjdENvbnZlcnRlcjsgLy8gR0NcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgZ2xURiBhbmltYXRpb24gY2hhbm5lbC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IFRoZSBjb250ZXh0IHdoZW4gbG9hZGluZyB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBhbmltYXRpb25Db250ZXh0IFRoZSBjb250ZXh0IG9mIHRoZSBhbmltYXRpb24gd2hlbiBsb2FkaW5nIHRoZSBhc3NldFxyXG4gICAgICogQHBhcmFtIGFuaW1hdGlvbiBUaGUgZ2xURiBhbmltYXRpb24gcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBjaGFubmVsIFRoZSBnbFRGIGFuaW1hdGlvbiBjaGFubmVsIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gb25Mb2FkIENhbGxlZCBmb3IgZWFjaCBhbmltYXRpb24gbG9hZGVkXHJcbiAgICAgKiBAcmV0dXJucyBBIHZvaWQgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWQgaXMgY29tcGxldGUgb3IgbnVsbCBpZiBub3QgaGFuZGxlZFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAgIHB1YmxpYyBfbG9hZEFuaW1hdGlvbkNoYW5uZWxBc3luYyhcclxuICAgICAgICBjb250ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgYW5pbWF0aW9uQ29udGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogSUFuaW1hdGlvbixcclxuICAgICAgICBjaGFubmVsOiBJQW5pbWF0aW9uQ2hhbm5lbCxcclxuICAgICAgICBvbkxvYWQ6IChiYWJ5bG9uQW5pbWF0YWJsZTogSUFuaW1hdGFibGUsIGJhYnlsb25BbmltYXRpb246IEFuaW1hdGlvbikgPT4gdm9pZFxyXG4gICAgKTogTnVsbGFibGU8UHJvbWlzZTx2b2lkPj4ge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGNoYW5uZWwudGFyZ2V0LmV4dGVuc2lvbnM/LktIUl9hbmltYXRpb25fcG9pbnRlciBhcyBJS0hSQW5pbWF0aW9uUG9pbnRlcjtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbiB8fCAhdGhpcy5fcGF0aFRvT2JqZWN0Q29udmVydGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5uZWwudGFyZ2V0LnBhdGggIT09IEFuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlBPSU5URVIpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vdGFyZ2V0L3BhdGg6IFZhbHVlICgke2NoYW5uZWwudGFyZ2V0LnBhdGh9KSBtdXN0IGJlICgke0FuaW1hdGlvbkNoYW5uZWxUYXJnZXRQYXRoLlBPSU5URVJ9KSB3aGVuIHVzaW5nIHRoZSAke3RoaXMubmFtZX0gZXh0ZW5zaW9uYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbm5lbC50YXJnZXQubm9kZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYCR7Y29udGV4dH0vdGFyZ2V0L25vZGU6IFZhbHVlICgke2NoYW5uZWwudGFyZ2V0Lm5vZGV9KSBtdXN0IG5vdCBiZSBwcmVzZW50IHdoZW4gdXNpbmcgdGhlICR7dGhpcy5uYW1lfSBleHRlbnNpb25gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbkNvbnRleHQgPSBgJHtjb250ZXh0fS9leHRlbnNpb25zLyR7dGhpcy5uYW1lfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBleHRlbnNpb24ucG9pbnRlcjtcclxuICAgICAgICBpZiAoIXBvaW50ZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2V4dGVuc2lvbkNvbnRleHR9OiBQb2ludGVyIGlzIG1pc3NpbmdgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuX3BhdGhUb09iamVjdENvbnZlcnRlci5jb252ZXJ0KHBvaW50ZXIpO1xyXG4gICAgICAgICAgICBpZiAoIW9iai5pbmZvLmludGVycG9sYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtleHRlbnNpb25Db250ZXh0fS9wb2ludGVyOiBJbnRlcnBvbGF0aW9uIGlzIG1pc3NpbmdgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyLl9sb2FkQW5pbWF0aW9uQ2hhbm5lbEZyb21UYXJnZXRJbmZvQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ29udGV4dCxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmoub2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZm86IG9iai5pbmZvLmludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Mb2FkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihgJHtleHRlbnNpb25Db250ZXh0fS9wb2ludGVyOiBJbnZhbGlkIHBvaW50ZXIgKCR7cG9pbnRlcn0pIHNraXBwZWRgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfYW5pbWF0aW9uX3BvaW50ZXIobG9hZGVyKSk7XHJcbiIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IElOb2RlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0YWJsZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0YWJsZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgU2V0SW50ZXJwb2xhdGlvbkZvcktleSB9IGZyb20gXCIuL0V4dGVuc2lvbnMvb2JqZWN0TW9kZWxNYXBwaW5nXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCB0eXBlIEdldFZhbHVlRm4gPSAodGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcikgPT4gYW55O1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWZWN0b3IzKF90YXJnZXQ6IGFueSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gVmVjdG9yMy5Gcm9tQXJyYXkoc291cmNlLCBvZmZzZXQpLnNjYWxlSW5QbGFjZShzY2FsZSk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVhdGVybmlvbihfdGFyZ2V0OiBhbnksIHNvdXJjZTogRmxvYXQzMkFycmF5LCBvZmZzZXQ6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IFF1YXRlcm5pb24ge1xyXG4gICAgcmV0dXJuIFF1YXRlcm5pb24uRnJvbUFycmF5KHNvdXJjZSwgb2Zmc2V0KS5zY2FsZUluUGxhY2Uoc2NhbGUpO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodHModGFyZ2V0OiBJTm9kZSwgc291cmNlOiBGbG9hdDMyQXJyYXksIG9mZnNldDogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG5ldyBBcnJheTxudW1iZXI+KHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzISk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWVbaV0gPSBzb3VyY2Vbb2Zmc2V0KytdICogc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbmltYXRpb25Qcm9wZXJ0eUluZm8ge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0VmFsdWU6IEdldFZhbHVlRm4sXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGdldFN0cmlkZTogKHRhcmdldDogYW55KSA9PiBudW1iZXJcclxuICAgICkge31cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2J1aWxkQW5pbWF0aW9uKG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKTogQW5pbWF0aW9uIHtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbihuYW1lLCB0aGlzLm5hbWUsIGZwcywgdGhpcy50eXBlKTtcclxuICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uLnNldEtleXMoa2V5cywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGJhYnlsb25BbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGJ1aWxkQW5pbWF0aW9ucyh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBmcHM6IG51bWJlciwga2V5czogYW55W10pOiB7IGJhYnlsb25BbmltYXRhYmxlOiBJQW5pbWF0YWJsZTsgYmFieWxvbkFuaW1hdGlvbjogQW5pbWF0aW9uIH1bXTtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKHRhcmdldDogSU5vZGUsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbnM6IHsgYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlOyBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24gfVtdID0gW107XHJcbiAgICAgICAgYmFieWxvbkFuaW1hdGlvbnMucHVzaCh7IGJhYnlsb25BbmltYXRhYmxlOiB0YXJnZXQuX2JhYnlsb25UcmFuc2Zvcm1Ob2RlISwgYmFieWxvbkFuaW1hdGlvbjogdGhpcy5fYnVpbGRBbmltYXRpb24obmFtZSwgZnBzLCBrZXlzKSB9KTtcclxuICAgICAgICByZXR1cm4gYmFieWxvbkFuaW1hdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIFdlaWdodEFuaW1hdGlvblByb3BlcnR5SW5mbyBleHRlbmRzIEFuaW1hdGlvblByb3BlcnR5SW5mbyB7XHJcbiAgICBwdWJsaWMgYnVpbGRBbmltYXRpb25zKHRhcmdldDogSU5vZGUsIG5hbWU6IHN0cmluZywgZnBzOiBudW1iZXIsIGtleXM6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbnM6IHsgYmFieWxvbkFuaW1hdGFibGU6IElBbmltYXRhYmxlOyBiYWJ5bG9uQW5pbWF0aW9uOiBBbmltYXRpb24gfVtdID0gW107XHJcbiAgICAgICAgaWYgKHRhcmdldC5fbnVtTW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhcmdldEluZGV4ID0gMDsgdGFyZ2V0SW5kZXggPCB0YXJnZXQuX251bU1vcnBoVGFyZ2V0czsgdGFyZ2V0SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFieWxvbkFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oYCR7bmFtZX1fJHt0YXJnZXRJbmRleH1gLCB0aGlzLm5hbWUsIGZwcywgdGhpcy50eXBlKTtcclxuICAgICAgICAgICAgICAgIGJhYnlsb25BbmltYXRpb24uc2V0S2V5cyhcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZToga2V5LmZyYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblRhbmdlbnQ6IGtleS5pblRhbmdlbnQgPyBrZXkuaW5UYW5nZW50W3RhcmdldEluZGV4XSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGtleS52YWx1ZVt0YXJnZXRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFRhbmdlbnQ6IGtleS5vdXRUYW5nZW50ID8ga2V5Lm91dFRhbmdlbnRbdGFyZ2V0SW5kZXhdIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBrZXkuaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Ll9wcmltaXRpdmVCYWJ5bG9uTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWJ5bG9uTWVzaCBvZiB0YXJnZXQuX3ByaW1pdGl2ZUJhYnlsb25NZXNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhYnlsb25NZXNoLm1vcnBoVGFyZ2V0TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXQgPSBiYWJ5bG9uTWVzaC5tb3JwaFRhcmdldE1hbmFnZXIuZ2V0VGFyZ2V0KHRhcmdldEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhYnlsb25BbmltYXRpb25DbG9uZSA9IGJhYnlsb25BbmltYXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0LmFuaW1hdGlvbnMucHVzaChiYWJ5bG9uQW5pbWF0aW9uQ2xvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbnMucHVzaCh7IGJhYnlsb25BbmltYXRhYmxlOiBtb3JwaFRhcmdldCwgYmFieWxvbkFuaW1hdGlvbjogYmFieWxvbkFuaW1hdGlvbkNsb25lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYWJ5bG9uQW5pbWF0aW9ucztcclxuICAgIH1cclxufVxyXG5cclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9ub2Rlcy97fS90cmFuc2xhdGlvblwiLCBbbmV3IFRyYW5zZm9ybU5vZGVBbmltYXRpb25Qcm9wZXJ0eUluZm8oQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfVkVDVE9SMywgXCJwb3NpdGlvblwiLCBnZXRWZWN0b3IzLCAoKSA9PiAzKV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL25vZGVzL3t9L3JvdGF0aW9uXCIsIFtuZXcgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OLCBcInJvdGF0aW9uUXVhdGVybmlvblwiLCBnZXRRdWF0ZXJuaW9uLCAoKSA9PiA0KV0pO1xyXG5TZXRJbnRlcnBvbGF0aW9uRm9yS2V5KFwiL25vZGVzL3t9L3NjYWxlXCIsIFtuZXcgVHJhbnNmb3JtTm9kZUFuaW1hdGlvblByb3BlcnR5SW5mbyhBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9WRUNUT1IzLCBcInNjYWxpbmdcIiwgZ2V0VmVjdG9yMywgKCkgPT4gMyldKTtcclxuU2V0SW50ZXJwb2xhdGlvbkZvcktleShcIi9ub2Rlcy97fS93ZWlnaHRzXCIsIFtuZXcgV2VpZ2h0QW5pbWF0aW9uUHJvcGVydHlJbmZvKEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBcImluZmx1ZW5jZVwiLCBnZXRXZWlnaHRzLCAodGFyZ2V0KSA9PiB0YXJnZXQuX251bU1vcnBoVGFyZ2V0cyEpXSk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=