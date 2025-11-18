"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphInterpolationBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js":
/*!****************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphInterpolationBlock: () => (/* binding */ FlowGraphInterpolationBlock)
/* harmony export */ });
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Animations_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Animations/animation */ "../core/dist/Animations/animation.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * This block is responsible for interpolating between two values.
 * The babylon concept used is Animation, and it is the output of this block.
 *
 * Note that values will be parsed when the in connection is triggered. until then changing the value will not trigger a new interpolation.
 *
 * Internally this block uses the Animation class.
 *
 * Note that if the interpolation is already running a signal will be sent to stop the animation group running it.
 */
class FlowGraphInterpolationBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphBlock {
    constructor(config = {}) {
        super(config);
        /**
         * The keyframes to interpolate between.
         * Each keyframe has a duration input and a value input.
         */
        this.keyFrames = [];
        const type = typeof config?.animationType === "string"
            ? (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.getRichTypeByFlowGraphType)(config.animationType)
            : (0,core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.getRichTypeByAnimationType)(config?.animationType ?? core_Engines_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.ANIMATIONTYPE_FLOAT);
        const numberOfKeyFrames = config?.keyFramesCount ?? 1;
        const duration = this.registerDataInput(`duration_0`, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeNumber, 0);
        const value = this.registerDataInput(`value_0`, type);
        this.keyFrames.push({ duration, value });
        for (let i = 1; i < numberOfKeyFrames + 1; i++) {
            const duration = this.registerDataInput(`duration_${i}`, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeNumber, i === numberOfKeyFrames ? config.duration : undefined);
            const value = this.registerDataInput(`value_${i}`, type);
            this.keyFrames.push({ duration, value });
        }
        this.initialValue = this.keyFrames[0].value;
        this.endValue = this.keyFrames[numberOfKeyFrames].value;
        this.easingFunction = this.registerDataInput("easingFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
        this.animation = this.registerDataOutput("animation", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
        this.propertyName = this.registerDataInput("propertyName", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny, config?.propertyName);
        this.customBuildAnimation = this.registerDataInput("customBuildAnimation", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
    }
    _updateOutputs(context) {
        const interpolationAnimations = context._getGlobalContextVariable("interpolationAnimations", []);
        const propertyName = this.propertyName.getValue(context);
        const easingFunction = this.easingFunction.getValue(context);
        const animation = this._createAnimation(context, propertyName, easingFunction);
        // If an old animation exists, it will be ignored here.
        // This is because if the animation is running and they both have the same target, the old will be stopped.
        // This doesn't happen here, it happens in the play animation block.
        this.animation.setValue(animation, context);
        // to make sure no 2 interpolations are running on the same target, we will mark the animation in the context
        if (Array.isArray(animation)) {
            for (const anim of animation) {
                interpolationAnimations.push(anim.uniqueId);
            }
        }
        else {
            interpolationAnimations.push(animation.uniqueId);
        }
        context._setGlobalContextVariable("interpolationAnimations", interpolationAnimations);
    }
    _createAnimation(context, propertyName, easingFunction) {
        const type = this.initialValue.richType;
        const keys = [];
        // add initial value
        const currentValue = this.initialValue.getValue(context) || type.defaultValue;
        keys.push({ frame: 0, value: currentValue });
        const numberOfKeyFrames = this.config?.numberOfKeyFrames ?? 1;
        for (let i = 1; i < numberOfKeyFrames + 1; i++) {
            const duration = this.keyFrames[i].duration?.getValue(context);
            let value = this.keyFrames[i].value?.getValue(context);
            if (i === numberOfKeyFrames - 1) {
                value = value || type.defaultValue;
            }
            if (duration !== undefined && value) {
                // convert duration to frames, based on 60 fps
                keys.push({ frame: duration * 60, value });
            }
        }
        const customBuildAnimation = this.customBuildAnimation.getValue(context);
        if (customBuildAnimation) {
            return customBuildAnimation(null, null, context)(keys, 60, type.animationType, easingFunction);
        }
        if (typeof propertyName === "string") {
            const animation = core_Animations_animation__WEBPACK_IMPORTED_MODULE_3__.Animation.CreateAnimation(propertyName, type.animationType, 60, easingFunction);
            animation.setKeys(keys);
            return [animation];
        }
        else {
            const animations = propertyName.map((name) => {
                const animation = core_Animations_animation__WEBPACK_IMPORTED_MODULE_3__.Animation.CreateAnimation(name, type.animationType, 60, easingFunction);
                animation.setKeys(keys);
                return animation;
            });
            return animations;
        }
    }
    getClassName() {
        return "FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_4__.RegisterClass)("FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */, FlowGraphInterpolationBlock);
// #L54P2C


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0FuaW1hdGlvbl9mbG93R3JhcGhJbnRlcnBvbGF0aW9uQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUErQkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUE4Q0E7QUFDQTtBQVZBOzs7QUFHQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9BbmltYXRpb24vZmxvd0dyYXBoSW50ZXJwb2xhdGlvbkJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRWFzaW5nRnVuY3Rpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2Vhc2luZ1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcImNvcmUvRW5naW5lcy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrLCB0eXBlIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFR5cGVzIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgZ2V0UmljaFR5cGVCeUFuaW1hdGlvblR5cGUsIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlLCBSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgaW50ZXJwb2xhdGlvbiBibG9jay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoSW50ZXJwb2xhdGlvbkJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2Yga2V5ZnJhbWVzIHRvIGludGVycG9sYXRlIGJldHdlZW4uXG4gICAgICogV2lsbCBkZWZhdWx0IHRvIDEgaWYgbm90IHByb3ZpZGVkIChpLmUuIGZyb20gY3VycmVudFZhbHVlIHRvIGEgcHJvdmlkZWQgdmFsdWUgaW4gdGhlIHRpbWUgcHJvdmlkZWQpXG4gICAgICovXG4gICAga2V5RnJhbWVzQ291bnQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIGludGVycG9sYXRpb24uXG4gICAgICovXG4gICAgZHVyYXRpb24/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlIGludGVycG9sYXRlZC5cbiAgICAgKi9cbiAgICBwcm9wZXJ0eU5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBhbmltYXRpb24gdG8gY3JlYXRlLlxuICAgICAqIERlZmF1bHQgaXMgQU5JTUFUSU9OVFlQRV9GTE9BVFxuICAgICAqIFRoaXMgY2Fubm90IGJlIGNoYW5nZWQgYWZ0ZXIgY29uc3RydWN0aW9uLCBzbyBtYWtlIHN1cmUgdG8gcGFzcyB0aGUgcmlnaHQgdmFsdWUuXG4gICAgICovXG4gICAgYW5pbWF0aW9uVHlwZT86IG51bWJlciB8IEZsb3dHcmFwaFR5cGVzO1xufVxuXG4vKipcbiAqIFRoaXMgYmxvY2sgaXMgcmVzcG9uc2libGUgZm9yIGludGVycG9sYXRpbmcgYmV0d2VlbiB0d28gdmFsdWVzLlxuICogVGhlIGJhYnlsb24gY29uY2VwdCB1c2VkIGlzIEFuaW1hdGlvbiwgYW5kIGl0IGlzIHRoZSBvdXRwdXQgb2YgdGhpcyBibG9jay5cbiAqXG4gKiBOb3RlIHRoYXQgdmFsdWVzIHdpbGwgYmUgcGFyc2VkIHdoZW4gdGhlIGluIGNvbm5lY3Rpb24gaXMgdHJpZ2dlcmVkLiB1bnRpbCB0aGVuIGNoYW5naW5nIHRoZSB2YWx1ZSB3aWxsIG5vdCB0cmlnZ2VyIGEgbmV3IGludGVycG9sYXRpb24uXG4gKlxuICogSW50ZXJuYWxseSB0aGlzIGJsb2NrIHVzZXMgdGhlIEFuaW1hdGlvbiBjbGFzcy5cbiAqXG4gKiBOb3RlIHRoYXQgaWYgdGhlIGludGVycG9sYXRpb24gaXMgYWxyZWFkeSBydW5uaW5nIGEgc2lnbmFsIHdpbGwgYmUgc2VudCB0byBzdG9wIHRoZSBhbmltYXRpb24gZ3JvdXAgcnVubmluZyBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEludGVycG9sYXRpb25CbG9jazxUPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgdmFsdWUgdG8gaW50ZXJwb2xhdGUgZnJvbS5cbiAgICAgKiBPcHRpb25hbC4gSWYgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCB2YWx1ZSB3aWxsIGJlIHVzZWQuXG4gICAgICogTm90ZSB0aGF0IGlmIHByb3ZpZGVkLCBldmVyeSB0aW1lIHRoZSBhbmltYXRpb24gaXMgY3JlYXRlZCB0aGlzIHZhbHVlIHdpbGwgYmUgdXNlZCFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5pdGlhbFZhbHVlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSB2YWx1ZSB0byBpbnRlcnBvbGF0ZSB0by5cbiAgICAgKiBPcHRpb25hbC4gVGhpcyBjYW4gYWxzbyBiZSBzZXQgdXNpbmcgdGhlIEtleUZyYW1lcyBpbnB1dCFcbiAgICAgKiBJZiBwcm92aWRlZCBpdCB3aWxsIGJlIHNldCB0byB0aGUgbGFzdCBrZXlmcmFtZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZW5kVmFsdWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+O1xuXG4gICAgLyoqXG4gICAgICogb3V0cHV0IGNvbm5lY3Rpb246IFRoZSBhbmltYXRpb24gdGhhdCB3aWxsIGJlIGNyZWF0ZWQgd2hlbiBpbiBpcyB0cmlnZ2VyZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGFuaW1hdGlvbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248QW5pbWF0aW9uIHwgQW5pbWF0aW9uW10+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogQW4gb3B0aW9uYWwgZWFzaW5nIGZ1bmN0aW9uIHRvIHVzZSBmb3IgdGhlIGludGVycG9sYXRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGVhc2luZ0Z1bmN0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxFYXNpbmdGdW5jdGlvbj47XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBwcm9wZXJ0eU5hbWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPHN0cmluZyB8IHN0cmluZ1tdPjtcblxuICAgIC8qKlxuICAgICAqIElmIHByb3ZpZGVkLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgdGhlIGFuaW1hdGlvbiBvYmplY3QocykuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGN1c3RvbUJ1aWxkQW5pbWF0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxcbiAgICAgICAgKHRhcmdldDogYW55LCBwcm9wZXJ0bmFtZTogYW55LCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSA9PiAoa2V5czogYW55W10sIGZwczogbnVtYmVyLCBhbmltYXRpb25UeXBlOiBudW1iZXIsIGVhc2luZ0Z1bmN0aW9uPzogRWFzaW5nRnVuY3Rpb24pID0+IEFuaW1hdGlvbiB8IEFuaW1hdGlvbltdXG4gICAgPjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXlmcmFtZXMgdG8gaW50ZXJwb2xhdGUgYmV0d2Vlbi5cbiAgICAgKiBFYWNoIGtleWZyYW1lIGhhcyBhIGR1cmF0aW9uIGlucHV0IGFuZCBhIHZhbHVlIGlucHV0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBrZXlGcmFtZXM6IHtcbiAgICAgICAgZHVyYXRpb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XG4gICAgICAgIHZhbHVlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPjtcbiAgICB9W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUZsb3dHcmFwaEludGVycG9sYXRpb25CbG9ja0NvbmZpZ3VyYXRpb24gPSB7fSkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICBjb25zdCB0eXBlID1cbiAgICAgICAgICAgIHR5cGVvZiBjb25maWc/LmFuaW1hdGlvblR5cGUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICA/IGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGNvbmZpZy5hbmltYXRpb25UeXBlKVxuICAgICAgICAgICAgICAgIDogZ2V0UmljaFR5cGVCeUFuaW1hdGlvblR5cGUoY29uZmlnPy5hbmltYXRpb25UeXBlID8/IENvbnN0YW50cy5BTklNQVRJT05UWVBFX0ZMT0FUKTtcblxuICAgICAgICBjb25zdCBudW1iZXJPZktleUZyYW1lcyA9IGNvbmZpZz8ua2V5RnJhbWVzQ291bnQgPz8gMTtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KGBkdXJhdGlvbl8wYCwgUmljaFR5cGVOdW1iZXIsIDApO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoYHZhbHVlXzBgLCB0eXBlKTtcbiAgICAgICAgdGhpcy5rZXlGcmFtZXMucHVzaCh7IGR1cmF0aW9uLCB2YWx1ZSB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1iZXJPZktleUZyYW1lcyArIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KGBkdXJhdGlvbl8ke2l9YCwgUmljaFR5cGVOdW1iZXIsIGkgPT09IG51bWJlck9mS2V5RnJhbWVzID8gY29uZmlnLmR1cmF0aW9uIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChgdmFsdWVfJHtpfWAsIHR5cGUpO1xuICAgICAgICAgICAgdGhpcy5rZXlGcmFtZXMucHVzaCh7IGR1cmF0aW9uLCB2YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMua2V5RnJhbWVzWzBdLnZhbHVlO1xuICAgICAgICB0aGlzLmVuZFZhbHVlID0gdGhpcy5rZXlGcmFtZXNbbnVtYmVyT2ZLZXlGcmFtZXNdLnZhbHVlO1xuICAgICAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImVhc2luZ0Z1bmN0aW9uXCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImFuaW1hdGlvblwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInByb3BlcnR5TmFtZVwiLCBSaWNoVHlwZUFueSwgY29uZmlnPy5wcm9wZXJ0eU5hbWUpO1xuICAgICAgICB0aGlzLmN1c3RvbUJ1aWxkQW5pbWF0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImN1c3RvbUJ1aWxkQW5pbWF0aW9uXCIsIFJpY2hUeXBlQW55KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uQW5pbWF0aW9ucyA9IGNvbnRleHQuX2dldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImludGVycG9sYXRpb25BbmltYXRpb25zXCIsIFtdKSBhcyBudW1iZXJbXTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eU5hbWUuZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gdGhpcy5lYXNpbmdGdW5jdGlvbi5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5fY3JlYXRlQW5pbWF0aW9uKGNvbnRleHQsIHByb3BlcnR5TmFtZSwgZWFzaW5nRnVuY3Rpb24pO1xuICAgICAgICAvLyBJZiBhbiBvbGQgYW5pbWF0aW9uIGV4aXN0cywgaXQgd2lsbCBiZSBpZ25vcmVkIGhlcmUuXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSBpZiB0aGUgYW5pbWF0aW9uIGlzIHJ1bm5pbmcgYW5kIHRoZXkgYm90aCBoYXZlIHRoZSBzYW1lIHRhcmdldCwgdGhlIG9sZCB3aWxsIGJlIHN0b3BwZWQuXG4gICAgICAgIC8vIFRoaXMgZG9lc24ndCBoYXBwZW4gaGVyZSwgaXQgaGFwcGVucyBpbiB0aGUgcGxheSBhbmltYXRpb24gYmxvY2suXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnNldFZhbHVlKGFuaW1hdGlvbiwgY29udGV4dCk7XG4gICAgICAgIC8vIHRvIG1ha2Ugc3VyZSBubyAyIGludGVycG9sYXRpb25zIGFyZSBydW5uaW5nIG9uIHRoZSBzYW1lIHRhcmdldCwgd2Ugd2lsbCBtYXJrIHRoZSBhbmltYXRpb24gaW4gdGhlIGNvbnRleHRcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhbmltIG9mIGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25BbmltYXRpb25zLnB1c2goYW5pbS51bmlxdWVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uQW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbi51bmlxdWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5fc2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwiaW50ZXJwb2xhdGlvbkFuaW1hdGlvbnNcIiwgaW50ZXJwb2xhdGlvbkFuaW1hdGlvbnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NyZWF0ZUFuaW1hdGlvbihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IHN0cmluZ1tdLCBlYXNpbmdGdW5jdGlvbjogRWFzaW5nRnVuY3Rpb24pOiBBbmltYXRpb24gfCBBbmltYXRpb25bXSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmluaXRpYWxWYWx1ZS5yaWNoVHlwZTtcbiAgICAgICAgY29uc3Qga2V5czogeyBmcmFtZTogbnVtYmVyOyB2YWx1ZTogVCB9W10gPSBbXTtcbiAgICAgICAgLy8gYWRkIGluaXRpYWwgdmFsdWVcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWUuZ2V0VmFsdWUoY29udGV4dCkgfHwgdHlwZS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIGtleXMucHVzaCh7IGZyYW1lOiAwLCB2YWx1ZTogY3VycmVudFZhbHVlIH0pO1xuICAgICAgICBjb25zdCBudW1iZXJPZktleUZyYW1lcyA9IHRoaXMuY29uZmlnPy5udW1iZXJPZktleUZyYW1lcyA/PyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bWJlck9mS2V5RnJhbWVzICsgMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMua2V5RnJhbWVzW2ldLmR1cmF0aW9uPy5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMua2V5RnJhbWVzW2ldLnZhbHVlPy5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChpID09PSBudW1iZXJPZktleUZyYW1lcyAtIDEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IHR5cGUuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IGR1cmF0aW9uIHRvIGZyYW1lcywgYmFzZWQgb24gNjAgZnBzXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKHsgZnJhbWU6IGR1cmF0aW9uICogNjAsIHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1c3RvbUJ1aWxkQW5pbWF0aW9uID0gdGhpcy5jdXN0b21CdWlsZEFuaW1hdGlvbi5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgaWYgKGN1c3RvbUJ1aWxkQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tQnVpbGRBbmltYXRpb24obnVsbCwgbnVsbCwgY29udGV4dCkoa2V5cywgNjAsIHR5cGUuYW5pbWF0aW9uVHlwZSwgZWFzaW5nRnVuY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHlOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBBbmltYXRpb24uQ3JlYXRlQW5pbWF0aW9uKHByb3BlcnR5TmFtZSwgdHlwZS5hbmltYXRpb25UeXBlLCA2MCwgZWFzaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnNldEtleXMoa2V5cyk7XG4gICAgICAgICAgICByZXR1cm4gW2FuaW1hdGlvbl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25zID0gcHJvcGVydHlOYW1lLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IEFuaW1hdGlvbi5DcmVhdGVBbmltYXRpb24obmFtZSwgdHlwZS5hbmltYXRpb25UeXBlLCA2MCwgZWFzaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5zZXRLZXlzKGtleXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb25zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5WYWx1ZUludGVycG9sYXRpb247XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuVmFsdWVJbnRlcnBvbGF0aW9uLCBGbG93R3JhcGhJbnRlcnBvbGF0aW9uQmxvY2spO1xuXG4vLyAjTDU0UDJDXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=