"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphStopAnimationBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js":
/*!****************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphStopAnimationBlock: () => (/* binding */ FlowGraphStopAnimationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_FlowGraph_flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/flowGraphAsyncExecutionBlock */ "../core/dist/FlowGraph/flowGraphAsyncExecutionBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * @experimental
 * Block that stops a running animation
 */
class FlowGraphStopAnimationBlock extends core_FlowGraph_flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphAsyncExecutionBlock {
    constructor(config) {
        super(config);
        this.animationGroup = this.registerDataInput("animationGroup", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeAny);
        this.stopAtFrame = this.registerDataInput("stopAtFrame", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_0__.RichTypeNumber, -1);
    }
    _preparePendingTasks(context) {
        const animationToStopValue = this.animationGroup.getValue(context);
        const stopAtFrame = this.stopAtFrame.getValue(context) ?? -1;
        // get the context variable
        const pendingStopAnimations = context._getGlobalContextVariable("pendingStopAnimations", []);
        // add the animation to the list
        pendingStopAnimations.push({ uniqueId: animationToStopValue.uniqueId, stopAtFrame });
        // set the global context variable
        context._setGlobalContextVariable("pendingStopAnimations", pendingStopAnimations);
    }
    _cancelPendingTasks(context) {
        // remove the animation from the list
        const animationToStopValue = this.animationGroup.getValue(context);
        const pendingStopAnimations = context._getGlobalContextVariable("pendingStopAnimations", []);
        for (let i = 0; i < pendingStopAnimations.length; i++) {
            if (pendingStopAnimations[i].uniqueId === animationToStopValue.uniqueId) {
                pendingStopAnimations.splice(i, 1);
                // set the global context variable
                context._setGlobalContextVariable("pendingStopAnimations", pendingStopAnimations);
                break;
            }
        }
    }
    _execute(context) {
        const animationToStopValue = this.animationGroup.getValue(context);
        const stopTime = this.stopAtFrame.getValue(context) ?? -1;
        // check the values
        if (!animationToStopValue) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Warn("No animation group provided to stop.");
            return this._reportError(context, "No animation group provided to stop.");
        }
        if (isNaN(stopTime)) {
            return this._reportError(context, "Invalid stop time.");
        }
        if (stopTime > 0) {
            this._startPendingTasks(context);
        }
        else {
            this._stopAnimation(animationToStopValue, context);
        }
        // note that out will not be triggered in case of an error
        this.out._activateSignal(context);
    }
    _executeOnTick(context) {
        const animationToStopValue = this.animationGroup.getValue(context);
        // check each frame if any animation should be stopped
        const pendingStopAnimations = context._getGlobalContextVariable("pendingStopAnimations", []);
        for (let i = 0; i < pendingStopAnimations.length; i++) {
            // compare the uniqueId to the animation to stop
            if (pendingStopAnimations[i].uniqueId === animationToStopValue.uniqueId) {
                // check if the current frame is AFTER the stopAtFrame
                if (animationToStopValue.getCurrentFrame() >= pendingStopAnimations[i].stopAtFrame) {
                    // stop the animation
                    this._stopAnimation(animationToStopValue, context);
                    // remove the animation from the list
                    pendingStopAnimations.splice(i, 1);
                    // set the global context variable
                    context._setGlobalContextVariable("pendingStopAnimations", pendingStopAnimations);
                    this.done._activateSignal(context);
                    context._removePendingBlock(this);
                    break;
                }
            }
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */;
    }
    _stopAnimation(animationGroup, context) {
        const currentlyRunning = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        const index = currentlyRunning.indexOf(animationGroup.uniqueId);
        if (index !== -1) {
            animationGroup.stop();
            currentlyRunning.splice(index, 1);
            // update the global context variable
            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunning);
        }
        else {
            // Logger.Warn("Trying to stop an animation that is not running.");
            // no-op for now. Probably no need to log anything here.
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */, FlowGraphStopAnimationBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0FuaW1hdGlvbl9mbG93R3JhcGhTdG9wQW5pbWF0aW9uQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQW5pbWF0aW9uL2Zsb3dHcmFwaFN0b3BBbmltYXRpb25CbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZU51bWJlciB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBBbmltYXRpb25Hcm91cCB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uR3JvdXBcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9ja1wiO1xyXG4vKipcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKiBCbG9jayB0aGF0IHN0b3BzIGEgcnVubmluZyBhbmltYXRpb25cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhTdG9wQW5pbWF0aW9uQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIGFuaW1hdGlvbiB0byBzdG9wLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYW5pbWF0aW9uR3JvdXA6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEFuaW1hdGlvbkdyb3VwPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb24gLSBpZiBkZWZpbmVkIChwb3NpdGl2ZSBpbnRlZ2VyKSB0aGUgYW5pbWF0aW9uIHdpbGwgc3RvcCBhdCB0aGlzIGZyYW1lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RvcEF0RnJhbWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Hcm91cCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJhbmltYXRpb25Hcm91cFwiLCBSaWNoVHlwZUFueSk7XHJcbiAgICAgICAgdGhpcy5zdG9wQXRGcmFtZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJzdG9wQXRGcmFtZVwiLCBSaWNoVHlwZU51bWJlciwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfcHJlcGFyZVBlbmRpbmdUYXNrcyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVG9TdG9wVmFsdWUgPSB0aGlzLmFuaW1hdGlvbkdyb3VwLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BBdEZyYW1lID0gdGhpcy5zdG9wQXRGcmFtZS5nZXRWYWx1ZShjb250ZXh0KSA/PyAtMTtcclxuICAgICAgICAvLyBnZXQgdGhlIGNvbnRleHQgdmFyaWFibGVcclxuICAgICAgICBjb25zdCBwZW5kaW5nU3RvcEFuaW1hdGlvbnMgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXHJcbiAgICAgICAgICAgIFwicGVuZGluZ1N0b3BBbmltYXRpb25zXCIsXHJcbiAgICAgICAgICAgIFtdIGFzIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZUlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBzdG9wQXRGcmFtZTogbnVtYmVyO1xyXG4gICAgICAgICAgICB9W11cclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGFkZCB0aGUgYW5pbWF0aW9uIHRvIHRoZSBsaXN0XHJcbiAgICAgICAgcGVuZGluZ1N0b3BBbmltYXRpb25zLnB1c2goeyB1bmlxdWVJZDogYW5pbWF0aW9uVG9TdG9wVmFsdWUudW5pcXVlSWQsIHN0b3BBdEZyYW1lIH0pO1xyXG4gICAgICAgIC8vIHNldCB0aGUgZ2xvYmFsIGNvbnRleHQgdmFyaWFibGVcclxuICAgICAgICBjb250ZXh0Ll9zZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJwZW5kaW5nU3RvcEFuaW1hdGlvbnNcIiwgcGVuZGluZ1N0b3BBbmltYXRpb25zKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfY2FuY2VsUGVuZGluZ1Rhc2tzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICAvLyByZW1vdmUgdGhlIGFuaW1hdGlvbiBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVG9TdG9wVmFsdWUgPSB0aGlzLmFuaW1hdGlvbkdyb3VwLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdTdG9wQW5pbWF0aW9ucyA9IGNvbnRleHQuX2dldEdsb2JhbENvbnRleHRWYXJpYWJsZShcclxuICAgICAgICAgICAgXCJwZW5kaW5nU3RvcEFuaW1hdGlvbnNcIixcclxuICAgICAgICAgICAgW10gYXMge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlSWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHN0b3BBdEZyYW1lOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1bXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZW5kaW5nU3RvcEFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBlbmRpbmdTdG9wQW5pbWF0aW9uc1tpXS51bmlxdWVJZCA9PT0gYW5pbWF0aW9uVG9TdG9wVmFsdWUudW5pcXVlSWQpIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdTdG9wQW5pbWF0aW9ucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGdsb2JhbCBjb250ZXh0IHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9zZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJwZW5kaW5nU3RvcEFuaW1hdGlvbnNcIiwgcGVuZGluZ1N0b3BBbmltYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uVG9TdG9wVmFsdWUgPSB0aGlzLmFuaW1hdGlvbkdyb3VwLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BUaW1lID0gdGhpcy5zdG9wQXRGcmFtZS5nZXRWYWx1ZShjb250ZXh0KSA/PyAtMTtcclxuICAgICAgICAvLyBjaGVjayB0aGUgdmFsdWVzXHJcbiAgICAgICAgaWYgKCFhbmltYXRpb25Ub1N0b3BWYWx1ZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihcIk5vIGFuaW1hdGlvbiBncm91cCBwcm92aWRlZCB0byBzdG9wLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcG9ydEVycm9yKGNvbnRleHQsIFwiTm8gYW5pbWF0aW9uIGdyb3VwIHByb3ZpZGVkIHRvIHN0b3AuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYU4oc3RvcFRpbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnRFcnJvcihjb250ZXh0LCBcIkludmFsaWQgc3RvcCB0aW1lLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0b3BUaW1lID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFBlbmRpbmdUYXNrcyhjb250ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9wQW5pbWF0aW9uKGFuaW1hdGlvblRvU3RvcFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm90ZSB0aGF0IG91dCB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQgaW4gY2FzZSBvZiBhbiBlcnJvclxyXG4gICAgICAgIHRoaXMub3V0Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2V4ZWN1dGVPblRpY2soY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblRvU3RvcFZhbHVlID0gdGhpcy5hbmltYXRpb25Hcm91cC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICAvLyBjaGVjayBlYWNoIGZyYW1lIGlmIGFueSBhbmltYXRpb24gc2hvdWxkIGJlIHN0b3BwZWRcclxuICAgICAgICBjb25zdCBwZW5kaW5nU3RvcEFuaW1hdGlvbnMgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJwZW5kaW5nU3RvcEFuaW1hdGlvbnNcIiwgW10gYXMgeyB1bmlxdWVJZDogbnVtYmVyOyBzdG9wQXRGcmFtZTogbnVtYmVyIH1bXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZW5kaW5nU3RvcEFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29tcGFyZSB0aGUgdW5pcXVlSWQgdG8gdGhlIGFuaW1hdGlvbiB0byBzdG9wXHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nU3RvcEFuaW1hdGlvbnNbaV0udW5pcXVlSWQgPT09IGFuaW1hdGlvblRvU3RvcFZhbHVlLnVuaXF1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgY3VycmVudCBmcmFtZSBpcyBBRlRFUiB0aGUgc3RvcEF0RnJhbWVcclxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25Ub1N0b3BWYWx1ZS5nZXRDdXJyZW50RnJhbWUoKSA+PSBwZW5kaW5nU3RvcEFuaW1hdGlvbnNbaV0uc3RvcEF0RnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHRoZSBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wQW5pbWF0aW9uKGFuaW1hdGlvblRvU3RvcFZhbHVlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGFuaW1hdGlvbiBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1N0b3BBbmltYXRpb25zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGdsb2JhbCBjb250ZXh0IHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fc2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwicGVuZGluZ1N0b3BBbmltYXRpb25zXCIsIHBlbmRpbmdTdG9wQW5pbWF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZW1vdmVQZW5kaW5nQmxvY2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlN0b3BBbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RvcEFuaW1hdGlvbihhbmltYXRpb25Hcm91cDogQW5pbWF0aW9uR3JvdXAsIGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50bHlSdW5uaW5nID0gY29udGV4dC5fZ2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwiY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwc1wiLCBbXSkgYXMgbnVtYmVyW107XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50bHlSdW5uaW5nLmluZGV4T2YoYW5pbWF0aW9uR3JvdXAudW5pcXVlSWQpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXAuc3RvcCgpO1xyXG4gICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZ2xvYmFsIGNvbnRleHQgdmFyaWFibGVcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwiY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwc1wiLCBjdXJyZW50bHlSdW5uaW5nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBMb2dnZXIuV2FybihcIlRyeWluZyB0byBzdG9wIGFuIGFuaW1hdGlvbiB0aGF0IGlzIG5vdCBydW5uaW5nLlwiKTtcclxuICAgICAgICAgICAgLy8gbm8tb3AgZm9yIG5vdy4gUHJvYmFibHkgbm8gbmVlZCB0byBsb2cgYW55dGhpbmcgaGVyZS5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlN0b3BBbmltYXRpb24sIEZsb3dHcmFwaFN0b3BBbmltYXRpb25CbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==