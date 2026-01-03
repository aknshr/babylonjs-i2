"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphPlayAnimationBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js":
/*!****************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphPlayAnimationBlock: () => (/* binding */ FlowGraphPlayAnimationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphAsyncExecutionBlock */ "../core/dist/FlowGraph/flowGraphAsyncExecutionBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Animations_animationGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Animations/animationGroup */ "../core/dist/Animations/animationGroup.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * @experimental
 * A block that plays an animation on an animatable object.
 */
class FlowGraphPlayAnimationBlock extends _flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphAsyncExecutionBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config, ["animationLoop", "animationEnd", "animationGroupLoop"]);
        this.config = config;
        this.speed = this.registerDataInput("speed", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.loop = this.registerDataInput("loop", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean);
        this.from = this.registerDataInput("from", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber, 0);
        this.to = this.registerDataInput("to", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.currentFrame = this.registerDataOutput("currentFrame", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.currentTime = this.registerDataOutput("currentTime", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.currentAnimationGroup = this.registerDataOutput("currentAnimationGroup", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.animationGroup = this.registerDataInput("animationGroup", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config?.animationGroup);
        this.animation = this.registerDataInput("animation", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.object = this.registerDataInput("object", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    /**
     * @internal
     * @param context
     */
    _preparePendingTasks(context) {
        const ag = this.animationGroup.getValue(context);
        const animation = this.animation.getValue(context);
        if (!ag && !animation) {
            return this._reportError(context, "No animation or animation group provided");
        }
        else {
            // if an animation group was already created, dispose it and create a new one
            const currentAnimationGroup = this.currentAnimationGroup.getValue(context);
            if (currentAnimationGroup && currentAnimationGroup !== ag) {
                currentAnimationGroup.dispose();
            }
            let animationGroupToUse = ag;
            // check which animation to use. If no animationGroup was defined and an animation was provided, use the animation
            if (animation && !animationGroupToUse) {
                const target = this.object.getValue(context);
                if (!target) {
                    return this._reportError(context, "No target object provided");
                }
                const animationsArray = Array.isArray(animation) ? animation : [animation];
                const name = animationsArray[0].name;
                animationGroupToUse = new core_Animations_animationGroup__WEBPACK_IMPORTED_MODULE_3__.AnimationGroup("flowGraphAnimationGroup-" + name + "-" + target.name, context.configuration.scene);
                let isInterpolation = false;
                const interpolationAnimations = context._getGlobalContextVariable("interpolationAnimations", []);
                for (const anim of animationsArray) {
                    animationGroupToUse.addTargetedAnimation(anim, target);
                    if (interpolationAnimations.indexOf(anim.uniqueId) !== -1) {
                        isInterpolation = true;
                    }
                }
                if (isInterpolation) {
                    this._checkInterpolationDuplications(context, animationsArray, target);
                }
            }
            // not accepting 0
            const speed = this.speed.getValue(context) || 1;
            const from = this.from.getValue(context) ?? 0;
            // not accepting 0
            const to = this.to.getValue(context) || animationGroupToUse.to;
            const loop = !isFinite(to) || this.loop.getValue(context);
            this.currentAnimationGroup.setValue(animationGroupToUse, context);
            const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
            // check if it already running
            if (currentlyRunningAnimationGroups.indexOf(animationGroupToUse.uniqueId) !== -1) {
                animationGroupToUse.stop();
            }
            try {
                animationGroupToUse.start(loop, speed, from, to);
                animationGroupToUse.onAnimationGroupEndObservable.add(() => this._onAnimationGroupEnd(context));
                animationGroupToUse.onAnimationEndObservable.add(() => this._eventsSignalOutputs["animationEnd"]._activateSignal(context));
                animationGroupToUse.onAnimationLoopObservable.add(() => this._eventsSignalOutputs["animationLoop"]._activateSignal(context));
                animationGroupToUse.onAnimationGroupLoopObservable.add(() => this._eventsSignalOutputs["animationGroupLoop"]._activateSignal(context));
                currentlyRunningAnimationGroups.push(animationGroupToUse.uniqueId);
                context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
            }
            catch (e) {
                this._reportError(context, e);
            }
        }
    }
    _reportError(context, error) {
        super._reportError(context, error);
        this.currentFrame.setValue(-1, context);
        this.currentTime.setValue(-1, context);
    }
    /**
     * @internal
     */
    _executeOnTick(_context) {
        const ag = this.currentAnimationGroup.getValue(_context);
        if (ag) {
            this.currentFrame.setValue(ag.getCurrentFrame(), _context);
            this.currentTime.setValue(ag.animatables[0]?.elapsedTime ?? 0, _context);
        }
    }
    _execute(context) {
        this._startPendingTasks(context);
    }
    _onAnimationGroupEnd(context) {
        this._removeFromCurrentlyRunning(context, this.currentAnimationGroup.getValue(context));
        this._resetAfterCanceled(context);
        this.done._activateSignal(context);
    }
    /**
     * The idea behind this function is to check every running animation group and check if the targeted animations it uses are interpolation animations.
     * If they are, we want to see that they don't collide with the current interpolation animations that are starting to play.
     * If they do, we want to stop the already-running animation group.
     * @internal
     */
    _checkInterpolationDuplications(context, animation, target) {
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        for (const uniqueId of currentlyRunningAnimationGroups) {
            const ag = context.assetsContext.animationGroups.find((ag) => ag.uniqueId === uniqueId);
            if (ag) {
                for (const anim of ag.targetedAnimations) {
                    for (const animToCheck of animation) {
                        if (anim.animation.targetProperty === animToCheck.targetProperty && anim.target === target) {
                            this._stopAnimationGroup(context, ag);
                        }
                    }
                }
            }
        }
    }
    _stopAnimationGroup(context, animationGroup) {
        // stop, while skipping the on AnimationEndObservable to avoid the "done" signal
        animationGroup.stop(true);
        animationGroup.dispose();
        this._removeFromCurrentlyRunning(context, animationGroup);
    }
    _removeFromCurrentlyRunning(context, animationGroup) {
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        const idx = currentlyRunningAnimationGroups.indexOf(animationGroup.uniqueId);
        if (idx !== -1) {
            currentlyRunningAnimationGroups.splice(idx, 1);
            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
        }
    }
    /**
     * @internal
     * Stop any currently running animations.
     */
    _cancelPendingTasks(context) {
        const ag = this.currentAnimationGroup.getValue(context);
        if (ag) {
            this._stopAnimationGroup(context, ag);
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */, FlowGraphPlayAnimationBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0FuaW1hdGlvbl9mbG93R3JhcGhQbGF5QW5pbWF0aW9uQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7O0FBR0E7QUFDQTtBQWlEQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQW5pbWF0aW9uL2Zsb3dHcmFwaFBsYXlBbmltYXRpb25CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIsIFJpY2hUeXBlQm9vbGVhbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uR3JvdXAgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvbkdyb3VwXCI7XHJcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcblxyXG4vKipcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKiBBIGJsb2NrIHRoYXQgcGxheXMgYW4gYW5pbWF0aW9uIG9uIGFuIGFuaW1hdGFibGUgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFBsYXlBbmltYXRpb25CbG9jayBleHRlbmRzIEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgc3BlZWQgb2YgdGhlIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHNwZWVkOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBTaG91bGQgdGhlIGFuaW1hdGlvbiBsb29wP1xyXG4gICAgICogTm90IGluIGdsVEYgc3BlY3MsIGJ1dCB1c2VmdWwgZm9yIHRoZSBlbmdpbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBsb29wOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxib29sZWFuPjtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIHN0YXJ0aW5nIGZyYW1lIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBmcm9tOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgZW5kaW5nIGZyYW1lIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB0bzogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgY3VycmVudCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY3VycmVudEZyYW1lOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIGFuaW1hdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGN1cnJlbnRUaW1lOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBhbmltYXRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHJ1bm5pbmcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBjdXJyZW50QW5pbWF0aW9uR3JvdXA6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEFuaW1hdGlvbkdyb3VwPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElucHV0OiBXaWxsIGJlIGluaXRpYWxpemVkIGlmIG5vIGFuaW1hdGlvbiBncm91cCB3YXMgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBhbmltYXRpb25Hcm91cDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248QW5pbWF0aW9uR3JvdXA+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQ6IElmIHByb3ZpZGVkIHRoaXMgYW5pbWF0aW9uIHdpbGwgYmUgdXNlZC4gUHJpb3JpdHkgd2lsbCBiZSBnaXZlbiB0byB0aGUgYW5pbWF0aW9uIGdyb3VwIGlucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5pbWF0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxBbmltYXRpb24gfCBBbmltYXRpb25bXT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgdGFyZ2V0IG9iamVjdCB0aGF0IHdpbGwgYmUgYW5pbWF0ZWQuIElmIGFuaW1hdGlvbiBncm91cCBpcyBwcm92aWRlZCB0aGlzIGlucHV0IHdpbGwgYmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9iamVjdDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248YW55PjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZywgW1wiYW5pbWF0aW9uTG9vcFwiLCBcImFuaW1hdGlvbkVuZFwiLCBcImFuaW1hdGlvbkdyb3VwTG9vcFwiXSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwic3BlZWRcIiwgUmljaFR5cGVOdW1iZXIpO1xyXG4gICAgICAgIHRoaXMubG9vcCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJsb29wXCIsIFJpY2hUeXBlQm9vbGVhbik7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImZyb21cIiwgUmljaFR5cGVOdW1iZXIsIDApO1xyXG4gICAgICAgIHRoaXMudG8gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwidG9cIiwgUmljaFR5cGVOdW1iZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwiY3VycmVudEZyYW1lXCIsIFJpY2hUeXBlTnVtYmVyKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJjdXJyZW50VGltZVwiLCBSaWNoVHlwZU51bWJlcik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkdyb3VwID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJjdXJyZW50QW5pbWF0aW9uR3JvdXBcIiwgUmljaFR5cGVBbnkpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uR3JvdXAgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiYW5pbWF0aW9uR3JvdXBcIiwgUmljaFR5cGVBbnksIGNvbmZpZz8uYW5pbWF0aW9uR3JvdXApO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImFuaW1hdGlvblwiLCBSaWNoVHlwZUFueSk7XHJcbiAgICAgICAgdGhpcy5vYmplY3QgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwib2JqZWN0XCIsIFJpY2hUeXBlQW55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9wcmVwYXJlUGVuZGluZ1Rhc2tzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhZyA9IHRoaXMuYW5pbWF0aW9uR3JvdXAuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24uZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgaWYgKCFhZyAmJiAhYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBcIk5vIGFuaW1hdGlvbiBvciBhbmltYXRpb24gZ3JvdXAgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWYgYW4gYW5pbWF0aW9uIGdyb3VwIHdhcyBhbHJlYWR5IGNyZWF0ZWQsIGRpc3Bvc2UgaXQgYW5kIGNyZWF0ZSBhIG5ldyBvbmVcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEFuaW1hdGlvbkdyb3VwID0gdGhpcy5jdXJyZW50QW5pbWF0aW9uR3JvdXAuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50QW5pbWF0aW9uR3JvdXAgJiYgY3VycmVudEFuaW1hdGlvbkdyb3VwICE9PSBhZykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEFuaW1hdGlvbkdyb3VwLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uR3JvdXBUb1VzZSA9IGFnO1xyXG4gICAgICAgICAgICAvLyBjaGVjayB3aGljaCBhbmltYXRpb24gdG8gdXNlLiBJZiBubyBhbmltYXRpb25Hcm91cCB3YXMgZGVmaW5lZCBhbmQgYW4gYW5pbWF0aW9uIHdhcyBwcm92aWRlZCwgdXNlIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbiAmJiAhYW5pbWF0aW9uR3JvdXBUb1VzZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5vYmplY3QuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBcIk5vIHRhcmdldCBvYmplY3QgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25zQXJyYXkgPSBBcnJheS5pc0FycmF5KGFuaW1hdGlvbikgPyBhbmltYXRpb24gOiBbYW5pbWF0aW9uXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBhbmltYXRpb25zQXJyYXlbMF0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwVG9Vc2UgPSBuZXcgQW5pbWF0aW9uR3JvdXAoXCJmbG93R3JhcGhBbmltYXRpb25Hcm91cC1cIiArIG5hbWUgKyBcIi1cIiArIHRhcmdldC5uYW1lLCBjb250ZXh0LmNvbmZpZ3VyYXRpb24uc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzSW50ZXJwb2xhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbkFuaW1hdGlvbnMgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJpbnRlcnBvbGF0aW9uQW5pbWF0aW9uc1wiLCBbXSkgYXMgbnVtYmVyW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW0gb2YgYW5pbWF0aW9uc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBUb1VzZS5hZGRUYXJnZXRlZEFuaW1hdGlvbihhbmltLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0aW9uQW5pbWF0aW9ucy5pbmRleE9mKGFuaW0udW5pcXVlSWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ludGVycG9sYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnRlcnBvbGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnRlcnBvbGF0aW9uRHVwbGljYXRpb25zKGNvbnRleHQsIGFuaW1hdGlvbnNBcnJheSwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3QgYWNjZXB0aW5nIDBcclxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSB0aGlzLnNwZWVkLmdldFZhbHVlKGNvbnRleHQpIHx8IDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmZyb20uZ2V0VmFsdWUoY29udGV4dCkgPz8gMDtcclxuICAgICAgICAgICAgLy8gbm90IGFjY2VwdGluZyAwXHJcbiAgICAgICAgICAgIGNvbnN0IHRvID0gdGhpcy50by5nZXRWYWx1ZShjb250ZXh0KSB8fCBhbmltYXRpb25Hcm91cFRvVXNlLnRvO1xyXG4gICAgICAgICAgICBjb25zdCBsb29wID0gIWlzRmluaXRlKHRvKSB8fCB0aGlzLmxvb3AuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkdyb3VwLnNldFZhbHVlKGFuaW1hdGlvbkdyb3VwVG9Vc2UsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3VwcyA9IGNvbnRleHQuX2dldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHNcIiwgW10pIGFzIG51bWJlcltdO1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBpdCBhbHJlYWR5IHJ1bm5pbmdcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMuaW5kZXhPZihhbmltYXRpb25Hcm91cFRvVXNlLnVuaXF1ZUlkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwVG9Vc2Uuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cFRvVXNlLnN0YXJ0KGxvb3AsIHNwZWVkLCBmcm9tLCB0byk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cFRvVXNlLm9uQW5pbWF0aW9uR3JvdXBFbmRPYnNlcnZhYmxlLmFkZCgoKSA9PiB0aGlzLl9vbkFuaW1hdGlvbkdyb3VwRW5kKGNvbnRleHQpKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwVG9Vc2Uub25BbmltYXRpb25FbmRPYnNlcnZhYmxlLmFkZCgoKSA9PiB0aGlzLl9ldmVudHNTaWduYWxPdXRwdXRzW1wiYW5pbWF0aW9uRW5kXCJdLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cFRvVXNlLm9uQW5pbWF0aW9uTG9vcE9ic2VydmFibGUuYWRkKCgpID0+IHRoaXMuX2V2ZW50c1NpZ25hbE91dHB1dHNbXCJhbmltYXRpb25Mb29wXCJdLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cFRvVXNlLm9uQW5pbWF0aW9uR3JvdXBMb29wT2JzZXJ2YWJsZS5hZGQoKCkgPT4gdGhpcy5fZXZlbnRzU2lnbmFsT3V0cHV0c1tcImFuaW1hdGlvbkdyb3VwTG9vcFwiXS5fYWN0aXZhdGVTaWduYWwoY29udGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwcy5wdXNoKGFuaW1hdGlvbkdyb3VwVG9Vc2UudW5pcXVlSWQpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5fc2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwiY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwc1wiLCBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoY29udGV4dCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIF9yZXBvcnRFcnJvcihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBlcnJvcjogc3RyaW5nIHwgRXJyb3IpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5fcmVwb3J0RXJyb3IoY29udGV4dCwgZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lLnNldFZhbHVlKC0xLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLnNldFZhbHVlKC0xLCBjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2V4ZWN1dGVPblRpY2soX2NvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhZyA9IHRoaXMuY3VycmVudEFuaW1hdGlvbkdyb3VwLmdldFZhbHVlKF9jb250ZXh0KTtcclxuICAgICAgICBpZiAoYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUuc2V0VmFsdWUoYWcuZ2V0Q3VycmVudEZyYW1lKCksIF9jb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZS5zZXRWYWx1ZShhZy5hbmltYXRhYmxlc1swXT8uZWxhcHNlZFRpbWUgPz8gMCwgX2NvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVuZGluZ1Rhc2tzKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uQW5pbWF0aW9uR3JvdXBFbmQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUZyb21DdXJyZW50bHlSdW5uaW5nKGNvbnRleHQsIHRoaXMuY3VycmVudEFuaW1hdGlvbkdyb3VwLmdldFZhbHVlKGNvbnRleHQpKTtcclxuICAgICAgICB0aGlzLl9yZXNldEFmdGVyQ2FuY2VsZWQoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5kb25lLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBpZGVhIGJlaGluZCB0aGlzIGZ1bmN0aW9uIGlzIHRvIGNoZWNrIGV2ZXJ5IHJ1bm5pbmcgYW5pbWF0aW9uIGdyb3VwIGFuZCBjaGVjayBpZiB0aGUgdGFyZ2V0ZWQgYW5pbWF0aW9ucyBpdCB1c2VzIGFyZSBpbnRlcnBvbGF0aW9uIGFuaW1hdGlvbnMuXHJcbiAgICAgKiBJZiB0aGV5IGFyZSwgd2Ugd2FudCB0byBzZWUgdGhhdCB0aGV5IGRvbid0IGNvbGxpZGUgd2l0aCB0aGUgY3VycmVudCBpbnRlcnBvbGF0aW9uIGFuaW1hdGlvbnMgdGhhdCBhcmUgc3RhcnRpbmcgdG8gcGxheS5cclxuICAgICAqIElmIHRoZXkgZG8sIHdlIHdhbnQgdG8gc3RvcCB0aGUgYWxyZWFkeS1ydW5uaW5nIGFuaW1hdGlvbiBncm91cC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jaGVja0ludGVycG9sYXRpb25EdXBsaWNhdGlvbnMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgYW5pbWF0aW9uOiBBbmltYXRpb25bXSwgdGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzID0gY29udGV4dC5fZ2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwiY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwc1wiLCBbXSkgYXMgbnVtYmVyW107XHJcbiAgICAgICAgZm9yIChjb25zdCB1bmlxdWVJZCBvZiBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFnID0gY29udGV4dC5hc3NldHNDb250ZXh0LmFuaW1hdGlvbkdyb3Vwcy5maW5kKChhZykgPT4gYWcudW5pcXVlSWQgPT09IHVuaXF1ZUlkKTtcclxuICAgICAgICAgICAgaWYgKGFnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuaW0gb2YgYWcudGFyZ2V0ZWRBbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltVG9DaGVjayBvZiBhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW0uYW5pbWF0aW9uLnRhcmdldFByb3BlcnR5ID09PSBhbmltVG9DaGVjay50YXJnZXRQcm9wZXJ0eSAmJiBhbmltLnRhcmdldCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQW5pbWF0aW9uR3JvdXAoY29udGV4dCwgYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0b3BBbmltYXRpb25Hcm91cChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBhbmltYXRpb25Hcm91cDogQW5pbWF0aW9uR3JvdXApIHtcclxuICAgICAgICAvLyBzdG9wLCB3aGlsZSBza2lwcGluZyB0aGUgb24gQW5pbWF0aW9uRW5kT2JzZXJ2YWJsZSB0byBhdm9pZCB0aGUgXCJkb25lXCIgc2lnbmFsXHJcbiAgICAgICAgYW5pbWF0aW9uR3JvdXAuc3RvcCh0cnVlKTtcclxuICAgICAgICBhbmltYXRpb25Hcm91cC5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUN1cnJlbnRseVJ1bm5pbmcoY29udGV4dCwgYW5pbWF0aW9uR3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZUZyb21DdXJyZW50bHlSdW5uaW5nKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIGFuaW1hdGlvbkdyb3VwOiBBbmltYXRpb25Hcm91cCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzXCIsIFtdKSBhcyBudW1iZXJbXTtcclxuICAgICAgICBjb25zdCBpZHggPSBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzLmluZGV4T2YoYW5pbWF0aW9uR3JvdXAudW5pcXVlSWQpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX3NldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHNcIiwgY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBTdG9wIGFueSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2NhbmNlbFBlbmRpbmdUYXNrcyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYWcgPSB0aGlzLmN1cnJlbnRBbmltYXRpb25Hcm91cC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICBpZiAoYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcEFuaW1hdGlvbkdyb3VwKGNvbnRleHQsIGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uLCBGbG93R3JhcGhQbGF5QW5pbWF0aW9uQmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9