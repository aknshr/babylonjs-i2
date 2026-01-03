"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_flowGraphSetPropertyBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSetPropertyBlock: () => (/* binding */ FlowGraphSetPropertyBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * This block will set a property on a given target asset.
 * The property name can include dots ("."), which will be interpreted as a path to the property.
 * The target asset is an input and can be changed at any time.
 * The value of the property is an input and can be changed at any time.
 *
 * For example, with an input of a mesh asset, the property name "position.x" will set the x component of the position of the mesh.
 *
 * Note that it is recommended to input the object on which you are working on (i.e. a material) than providing a mesh and then getting the material from it.
 */
class FlowGraphSetPropertyBlock extends core_FlowGraph_flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlockWithOutSignal {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        this.object = this.registerDataInput("object", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config.target);
        this.value = this.registerDataInput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.propertyName = this.registerDataInput("propertyName", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config.propertyName);
        this.customSetFunction = this.registerDataInput("customSetFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    _execute(context, _callingSignal) {
        try {
            const target = this.object.getValue(context);
            const value = this.value.getValue(context);
            const propertyName = this.propertyName.getValue(context);
            this._stopRunningAnimations(context, target, propertyName);
            const setFunction = this.customSetFunction.getValue(context);
            if (setFunction) {
                setFunction(target, propertyName, value, context);
            }
            else {
                this._setPropertyValue(target, propertyName, value);
            }
        }
        catch (e) {
            this._reportError(context, e);
        }
        this.out._activateSignal(context);
    }
    _stopRunningAnimations(context, target, propertyName) {
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        for (const uniqueId of currentlyRunningAnimationGroups) {
            const animationGroup = context.assetsContext.animationGroups.find((animationGroup) => animationGroup.uniqueId === uniqueId);
            if (animationGroup) {
                for (const targetedAnimations of animationGroup.targetedAnimations) {
                    if (targetedAnimations.target === target && targetedAnimations.animation.targetProperty === propertyName) {
                        animationGroup.stop(true);
                        animationGroup.dispose();
                        const index = currentlyRunningAnimationGroups.indexOf(uniqueId);
                        if (index !== -1) {
                            currentlyRunningAnimationGroups.splice(index, 1);
                            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
                        }
                    }
                }
            }
        }
    }
    _setPropertyValue(target, propertyName, value) {
        const path = propertyName.split(".");
        let obj = target;
        for (let i = 0; i < path.length - 1; i++) {
            const prop = path[i];
            if (obj[prop] === undefined) {
                obj[prop] = {};
            }
            obj = obj[prop];
        }
        obj[path[path.length - 1]] = value;
    }
    getClassName() {
        return "FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */, FlowGraphSetPropertyBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX2Zsb3dHcmFwaFNldFByb3BlcnR5QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFlQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQXNCQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9mbG93R3JhcGhTZXRQcm9wZXJ0eUJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXNzZXRUeXBlLCBGbG93R3JhcGhBc3NldFR5cGUgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQXNzZXRzQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWxcIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFNldFByb3BlcnR5QmxvY2tDb25maWd1cmF0aW9uPE8gZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGU+IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlIHNldFxuICAgICAqL1xuICAgIHByb3BlcnR5TmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYXNzZXQgZnJvbSB3aGljaCB0aGUgcHJvcGVydHkgd2lsbCBiZSByZXRyaWV2ZWRcbiAgICAgKi9cbiAgICB0YXJnZXQ/OiBBc3NldFR5cGU8Tz47XG59XG5cbi8qKlxuICogVGhpcyBibG9jayB3aWxsIHNldCBhIHByb3BlcnR5IG9uIGEgZ2l2ZW4gdGFyZ2V0IGFzc2V0LlxuICogVGhlIHByb3BlcnR5IG5hbWUgY2FuIGluY2x1ZGUgZG90cyAoXCIuXCIpLCB3aGljaCB3aWxsIGJlIGludGVycHJldGVkIGFzIGEgcGF0aCB0byB0aGUgcHJvcGVydHkuXG4gKiBUaGUgdGFyZ2V0IGFzc2V0IGlzIGFuIGlucHV0IGFuZCBjYW4gYmUgY2hhbmdlZCBhdCBhbnkgdGltZS5cbiAqIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgaXMgYW4gaW5wdXQgYW5kIGNhbiBiZSBjaGFuZ2VkIGF0IGFueSB0aW1lLlxuICpcbiAqIEZvciBleGFtcGxlLCB3aXRoIGFuIGlucHV0IG9mIGEgbWVzaCBhc3NldCwgdGhlIHByb3BlcnR5IG5hbWUgXCJwb3NpdGlvbi54XCIgd2lsbCBzZXQgdGhlIHggY29tcG9uZW50IG9mIHRoZSBwb3NpdGlvbiBvZiB0aGUgbWVzaC5cbiAqXG4gKiBOb3RlIHRoYXQgaXQgaXMgcmVjb21tZW5kZWQgdG8gaW5wdXQgdGhlIG9iamVjdCBvbiB3aGljaCB5b3UgYXJlIHdvcmtpbmcgb24gKGkuZS4gYSBtYXRlcmlhbCkgdGhhbiBwcm92aWRpbmcgYSBtZXNoIGFuZCB0aGVuIGdldHRpbmcgdGhlIG1hdGVyaWFsIGZyb20gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhTZXRQcm9wZXJ0eUJsb2NrPFAgZXh0ZW5kcyBhbnksIE8gZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGU+IGV4dGVuZHMgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIHtcbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFA+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIHRhcmdldCBhc3NldCBmcm9tIHdoaWNoIHRoZSBwcm9wZXJ0eSB3aWxsIGJlIHJldHJpZXZlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBvYmplY3Q6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEFzc2V0VHlwZTxPPj47XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBwcm9wZXJ0eU5hbWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPHN0cmluZz47XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXG4gICAgICogSWYgc2V0IGl0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHNldCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgY3VzdG9tU2V0RnVuY3Rpb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPCh0YXJnZXQ6IEFzc2V0VHlwZTxPPiwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBQLCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSA9PiB2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoU2V0UHJvcGVydHlCbG9ja0NvbmZpZ3VyYXRpb248Tz5cbiAgICApIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwib2JqZWN0XCIsIFJpY2hUeXBlQW55LCBjb25maWcudGFyZ2V0KTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJ2YWx1ZVwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInByb3BlcnR5TmFtZVwiLCBSaWNoVHlwZUFueSwgY29uZmlnLnByb3BlcnR5TmFtZSk7XG4gICAgICAgIHRoaXMuY3VzdG9tU2V0RnVuY3Rpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwiY3VzdG9tU2V0RnVuY3Rpb25cIiwgUmljaFR5cGVBbnkpO1xuICAgIH1cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2V4ZWN1dGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgX2NhbGxpbmdTaWduYWw6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMub2JqZWN0LmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlLmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eU5hbWUuZ2V0VmFsdWUoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0b3BSdW5uaW5nQW5pbWF0aW9ucyhjb250ZXh0LCB0YXJnZXQsIHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldEZ1bmN0aW9uID0gdGhpcy5jdXN0b21TZXRGdW5jdGlvbi5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChzZXRGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHlOYW1lLCB2YWx1ZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldFByb3BlcnR5VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoY29udGV4dCwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdXQuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3N0b3BSdW5uaW5nQW5pbWF0aW9ucyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCB0YXJnZXQ6IGFueSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudGx5UnVubmluZ0FuaW1hdGlvbkdyb3VwcyA9IGNvbnRleHQuX2dldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHNcIiwgW10pIGFzIG51bWJlcltdO1xuICAgICAgICBmb3IgKGNvbnN0IHVuaXF1ZUlkIG9mIGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkdyb3VwID0gY29udGV4dC5hc3NldHNDb250ZXh0LmFuaW1hdGlvbkdyb3Vwcy5maW5kKChhbmltYXRpb25Hcm91cCkgPT4gYW5pbWF0aW9uR3JvdXAudW5pcXVlSWQgPT09IHVuaXF1ZUlkKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25Hcm91cCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdGFyZ2V0ZWRBbmltYXRpb25zIG9mIGFuaW1hdGlvbkdyb3VwLnRhcmdldGVkQW5pbWF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ZWRBbmltYXRpb25zLnRhcmdldCA9PT0gdGFyZ2V0ICYmIHRhcmdldGVkQW5pbWF0aW9ucy5hbmltYXRpb24udGFyZ2V0UHJvcGVydHkgPT09IHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXAuc3RvcCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwLmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzLmluZGV4T2YodW5pcXVlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9zZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJjdXJyZW50bHlSdW5uaW5nQW5pbWF0aW9uR3JvdXBzXCIsIGN1cnJlbnRseVJ1bm5pbmdBbmltYXRpb25Hcm91cHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0UHJvcGVydHlWYWx1ZSh0YXJnZXQ6IEFzc2V0VHlwZTxPPiwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBQKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBwcm9wZXJ0eU5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICBsZXQgb2JqID0gdGFyZ2V0IGFzIGFueTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvcCA9IHBhdGhbaV07XG4gICAgICAgICAgICBpZiAob2JqW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iaiA9IG9ialtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgICBvYmpbcGF0aFtwYXRoLmxlbmd0aCAtIDFdXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2V0UHJvcGVydHk7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2V0UHJvcGVydHksIEZsb3dHcmFwaFNldFByb3BlcnR5QmxvY2spO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==