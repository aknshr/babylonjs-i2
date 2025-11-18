"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_flowGraphSetVariableBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSetVariableBlock: () => (/* binding */ FlowGraphSetVariableBlock)
/* harmony export */ });
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * This block will set a variable on the context.
 */
class FlowGraphSetVariableBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        // check if the variable is defined
        if (!config.variable && !config.variables) {
            throw new Error("FlowGraphSetVariableBlock: variable/variables is not defined");
        }
        // check if the variable is an array
        if (config.variables && config.variable) {
            throw new Error("FlowGraphSetVariableBlock: variable and variables are both defined");
        }
        // check if we have either a variable or variables. If we have variables, set the inputs correctly
        if (config.variables) {
            for (const variable of config.variables) {
                this.registerDataInput(variable, core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
            }
        }
        else {
            this.registerDataInput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
        }
    }
    _execute(context, _callingSignal) {
        if (this.config?.variables) {
            for (const variable of this.config.variables) {
                this._saveVariable(context, variable);
            }
        }
        else {
            this._saveVariable(context, this.config?.variable, "value");
        }
        this.out._activateSignal(context);
    }
    _saveVariable(context, variableName, inputName) {
        // check if there is an animation(group) running on this variable. If there is, stop the animation - a value was force-set.
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        for (const animationUniqueId of currentlyRunningAnimationGroups) {
            const animationGroup = context.assetsContext.animationGroups.find((animationGroup) => animationGroup.uniqueId == animationUniqueId);
            if (animationGroup) {
                // check if there is a target animation that has the target set to be the context
                for (const targetAnimation of animationGroup.targetedAnimations) {
                    // check if the target property is the variable we are setting
                    if (targetAnimation.target === context) {
                        // check the variable name
                        if (targetAnimation.animation.targetProperty === variableName) {
                            // stop the animation
                            animationGroup.stop();
                            // remove the animation from the currently running animations
                            const index = currentlyRunningAnimationGroups.indexOf(animationUniqueId);
                            if (index > -1) {
                                currentlyRunningAnimationGroups.splice(index, 1);
                            }
                            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
                            break;
                        }
                    }
                }
            }
        }
        const value = this.getDataInput(inputName || variableName)?.getValue(context);
        context.setVariable(variableName, value);
    }
    getClassName() {
        return "FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */;
    }
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.variable = this.config?.variable;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */, FlowGraphSetVariableBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX2Zsb3dHcmFwaFNldFZhcmlhYmxlQmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBR0E7QUFpQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vZmxvd0dyYXBoU2V0VmFyaWFibGVCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWxcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBGbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhTZXRWYXJpYWJsZUJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBzZXQuXG4gICAgICovXG4gICAgdmFyaWFibGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGVzIHRvIHNldC5cbiAgICAgKi9cbiAgICB2YXJpYWJsZXM/OiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBUaGlzIGJsb2NrIHdpbGwgc2V0IGEgdmFyaWFibGUgb24gdGhlIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhTZXRWYXJpYWJsZUJsb2NrPFQ+IGV4dGVuZHMgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElGbG93R3JhcGhTZXRWYXJpYWJsZUJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICAvLyBjaGVjayBpZiB0aGUgdmFyaWFibGUgaXMgZGVmaW5lZFxuICAgICAgICBpZiAoIWNvbmZpZy52YXJpYWJsZSAmJiAhY29uZmlnLnZhcmlhYmxlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmxvd0dyYXBoU2V0VmFyaWFibGVCbG9jazogdmFyaWFibGUvdmFyaWFibGVzIGlzIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSB2YXJpYWJsZSBpcyBhbiBhcnJheVxuICAgICAgICBpZiAoY29uZmlnLnZhcmlhYmxlcyAmJiBjb25maWcudmFyaWFibGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZsb3dHcmFwaFNldFZhcmlhYmxlQmxvY2s6IHZhcmlhYmxlIGFuZCB2YXJpYWJsZXMgYXJlIGJvdGggZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGVpdGhlciBhIHZhcmlhYmxlIG9yIHZhcmlhYmxlcy4gSWYgd2UgaGF2ZSB2YXJpYWJsZXMsIHNldCB0aGUgaW5wdXRzIGNvcnJlY3RseVxuICAgICAgICBpZiAoY29uZmlnLnZhcmlhYmxlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiBjb25maWcudmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRhdGFJbnB1dCh2YXJpYWJsZSwgUmljaFR5cGVBbnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInZhbHVlXCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBfY2FsbGluZ1NpZ25hbDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb25maWc/LnZhcmlhYmxlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiB0aGlzLmNvbmZpZy52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zYXZlVmFyaWFibGUoY29udGV4dCwgdmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZVZhcmlhYmxlKGNvbnRleHQsIHRoaXMuY29uZmlnPy52YXJpYWJsZSwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2F2ZVZhcmlhYmxlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIHZhcmlhYmxlTmFtZTogc3RyaW5nLCBpbnB1dE5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uKGdyb3VwKSBydW5uaW5nIG9uIHRoaXMgdmFyaWFibGUuIElmIHRoZXJlIGlzLCBzdG9wIHRoZSBhbmltYXRpb24gLSBhIHZhbHVlIHdhcyBmb3JjZS1zZXQuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMgPSBjb250ZXh0Ll9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzXCIsIFtdKSBhcyBudW1iZXJbXTtcbiAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb25VbmlxdWVJZCBvZiBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25Hcm91cCA9IGNvbnRleHQuYXNzZXRzQ29udGV4dC5hbmltYXRpb25Hcm91cHMuZmluZCgoYW5pbWF0aW9uR3JvdXApID0+IGFuaW1hdGlvbkdyb3VwLnVuaXF1ZUlkID09IGFuaW1hdGlvblVuaXF1ZUlkKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25Hcm91cCkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgdGFyZ2V0IGFuaW1hdGlvbiB0aGF0IGhhcyB0aGUgdGFyZ2V0IHNldCB0byBiZSB0aGUgY29udGV4dFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFyZ2V0QW5pbWF0aW9uIG9mIGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGFyZ2V0IHByb3BlcnR5IGlzIHRoZSB2YXJpYWJsZSB3ZSBhcmUgc2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QW5pbWF0aW9uLnRhcmdldCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhlIHZhcmlhYmxlIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRBbmltYXRpb24uYW5pbWF0aW9uLnRhcmdldFByb3BlcnR5ID09PSB2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHRoZSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBhbmltYXRpb24gZnJvbSB0aGUgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwcy5pbmRleE9mKGFuaW1hdGlvblVuaXF1ZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuX3NldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHNcIiwgY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldERhdGFJbnB1dChpbnB1dE5hbWUgfHwgdmFyaWFibGVOYW1lKT8uZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuc2V0VmFyaWFibGUodmFyaWFibGVOYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXRWYXJpYWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmZpZy52YXJpYWJsZSA9IHRoaXMuY29uZmlnPy52YXJpYWJsZTtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXRWYXJpYWJsZSwgRmxvd0dyYXBoU2V0VmFyaWFibGVCbG9jayk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=