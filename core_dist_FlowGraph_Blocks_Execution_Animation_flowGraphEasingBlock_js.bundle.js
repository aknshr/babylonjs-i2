"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphEasingBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js":
/*!*********************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EasingFunctionType: () => (/* binding */ EasingFunctionType),
/* harmony export */   FlowGraphEasingBlock: () => (/* binding */ FlowGraphEasingBlock)
/* harmony export */ });
/* harmony import */ var core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Animations/easing */ "../core/dist/Animations/easing.js");
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * The type of the easing function.
 */
var EasingFunctionType;
(function (EasingFunctionType) {
    EasingFunctionType[EasingFunctionType["CircleEase"] = 0] = "CircleEase";
    EasingFunctionType[EasingFunctionType["BackEase"] = 1] = "BackEase";
    EasingFunctionType[EasingFunctionType["BounceEase"] = 2] = "BounceEase";
    EasingFunctionType[EasingFunctionType["CubicEase"] = 3] = "CubicEase";
    EasingFunctionType[EasingFunctionType["ElasticEase"] = 4] = "ElasticEase";
    EasingFunctionType[EasingFunctionType["ExponentialEase"] = 5] = "ExponentialEase";
    EasingFunctionType[EasingFunctionType["PowerEase"] = 6] = "PowerEase";
    EasingFunctionType[EasingFunctionType["QuadraticEase"] = 7] = "QuadraticEase";
    EasingFunctionType[EasingFunctionType["QuarticEase"] = 8] = "QuarticEase";
    EasingFunctionType[EasingFunctionType["QuinticEase"] = 9] = "QuinticEase";
    EasingFunctionType[EasingFunctionType["SineEase"] = 10] = "SineEase";
    EasingFunctionType[EasingFunctionType["BezierCurveEase"] = 11] = "BezierCurveEase";
})(EasingFunctionType || (EasingFunctionType = {}));
/**
 * @internal
 * Creates an easing function object based on the type and parameters provided.
 * This is not tree-shaking friendly, so if you need cubic bezier, use the dedicated bezier block.
 * @param type The type of the easing function.
 * @param controlPoint1 The first control point for the bezier curve.
 * @param controlPoint2 The second control point for the bezier curve.
 * @returns The easing function object.
 */
function CreateEasingFunction(type, ...parameters) {
    switch (type) {
        case 11 /* EasingFunctionType.BezierCurveEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.BezierCurveEase(...parameters);
        case 0 /* EasingFunctionType.CircleEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.CircleEase();
        case 1 /* EasingFunctionType.BackEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.BackEase(...parameters);
        case 2 /* EasingFunctionType.BounceEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.BounceEase(...parameters);
        case 3 /* EasingFunctionType.CubicEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.CubicEase();
        case 4 /* EasingFunctionType.ElasticEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.ElasticEase(...parameters);
        case 5 /* EasingFunctionType.ExponentialEase */:
            return new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.ExponentialEase(...parameters);
        default:
            throw new Error("Easing type not yet implemented");
    }
}
/**
 * An easing block that generates an easingFunction object based on the data provided.
 */
class FlowGraphEasingBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        /**
         * Internal cache of reusable easing functions.
         * key is type-mode-properties
         */
        this._easingFunctions = {};
        this.type = this.registerDataInput("type", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny, 11);
        this.mode = this.registerDataInput("mode", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeNumber, 0);
        this.parameters = this.registerDataInput("parameters", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny, [1, 0, 0, 1]);
        this.easingFunction = this.registerDataOutput("easingFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
    }
    _updateOutputs(context) {
        const type = this.type.getValue(context);
        const mode = this.mode.getValue(context);
        const parameters = this.parameters.getValue(context);
        if (type === undefined || mode === undefined) {
            return;
        }
        const key = `${type}-${mode}-${parameters.join("-")}`;
        if (!this._easingFunctions[key]) {
            const easing = CreateEasingFunction(type, ...parameters);
            easing.setEasingMode(mode);
            this._easingFunctions[key] = easing;
        }
        this.easingFunction.setValue(this._easingFunctions[key], context);
    }
    getClassName() {
        return "FlowGraphEasingBlock" /* FlowGraphBlockNames.Easing */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphEasingBlock" /* FlowGraphBlockNames.Easing */, FlowGraphEasingBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0FuaW1hdGlvbl9mbG93R3JhcGhFYXNpbmdCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUE0QkE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQVZBOzs7QUFHQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXhlY3V0aW9uL0FuaW1hdGlvbi9mbG93R3JhcGhFYXNpbmdCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEVhc2luZ0Z1bmN0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9lYXNpbmdcIjtcbmltcG9ydCB7IEJhY2tFYXNlLCBCZXppZXJDdXJ2ZUVhc2UsIEJvdW5jZUVhc2UsIENpcmNsZUVhc2UsIEN1YmljRWFzZSwgRWxhc3RpY0Vhc2UsIEV4cG9uZW50aWFsRWFzZSB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvZWFzaW5nXCI7XG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcblxuLyoqXG4gKiBUaGUgdHlwZSBvZiB0aGUgZWFzaW5nIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgZW51bSBFYXNpbmdGdW5jdGlvblR5cGUge1xuICAgIENpcmNsZUVhc2UgPSAwLFxuICAgIEJhY2tFYXNlID0gMSxcbiAgICBCb3VuY2VFYXNlID0gMixcbiAgICBDdWJpY0Vhc2UgPSAzLFxuICAgIEVsYXN0aWNFYXNlID0gNCxcbiAgICBFeHBvbmVudGlhbEVhc2UgPSA1LFxuICAgIFBvd2VyRWFzZSA9IDYsXG4gICAgUXVhZHJhdGljRWFzZSA9IDcsXG4gICAgUXVhcnRpY0Vhc2UgPSA4LFxuICAgIFF1aW50aWNFYXNlID0gOSxcbiAgICBTaW5lRWFzZSA9IDEwLFxuICAgIEJlemllckN1cnZlRWFzZSA9IDExLFxufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICogQ3JlYXRlcyBhbiBlYXNpbmcgZnVuY3Rpb24gb2JqZWN0IGJhc2VkIG9uIHRoZSB0eXBlIGFuZCBwYXJhbWV0ZXJzIHByb3ZpZGVkLlxuICogVGhpcyBpcyBub3QgdHJlZS1zaGFraW5nIGZyaWVuZGx5LCBzbyBpZiB5b3UgbmVlZCBjdWJpYyBiZXppZXIsIHVzZSB0aGUgZGVkaWNhdGVkIGJlemllciBibG9jay5cbiAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBlYXNpbmcgZnVuY3Rpb24uXG4gKiBAcGFyYW0gY29udHJvbFBvaW50MSBUaGUgZmlyc3QgY29udHJvbCBwb2ludCBmb3IgdGhlIGJlemllciBjdXJ2ZS5cbiAqIEBwYXJhbSBjb250cm9sUG9pbnQyIFRoZSBzZWNvbmQgY29udHJvbCBwb2ludCBmb3IgdGhlIGJlemllciBjdXJ2ZS5cbiAqIEByZXR1cm5zIFRoZSBlYXNpbmcgZnVuY3Rpb24gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBDcmVhdGVFYXNpbmdGdW5jdGlvbih0eXBlOiBFYXNpbmdGdW5jdGlvblR5cGUsIC4uLnBhcmFtZXRlcnM6IG51bWJlcltdKTogRWFzaW5nRnVuY3Rpb24ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEVhc2luZ0Z1bmN0aW9uVHlwZS5CZXppZXJDdXJ2ZUVhc2U6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJlemllckN1cnZlRWFzZSguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgY2FzZSBFYXNpbmdGdW5jdGlvblR5cGUuQ2lyY2xlRWFzZTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2lyY2xlRWFzZSgpO1xuICAgICAgICBjYXNlIEVhc2luZ0Z1bmN0aW9uVHlwZS5CYWNrRWFzZTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmFja0Vhc2UoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIGNhc2UgRWFzaW5nRnVuY3Rpb25UeXBlLkJvdW5jZUVhc2U6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJvdW5jZUVhc2UoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIGNhc2UgRWFzaW5nRnVuY3Rpb25UeXBlLkN1YmljRWFzZTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3ViaWNFYXNlKCk7XG4gICAgICAgIGNhc2UgRWFzaW5nRnVuY3Rpb25UeXBlLkVsYXN0aWNFYXNlOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbGFzdGljRWFzZSguLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgY2FzZSBFYXNpbmdGdW5jdGlvblR5cGUuRXhwb25lbnRpYWxFYXNlOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFeHBvbmVudGlhbEVhc2UoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFYXNpbmcgdHlwZSBub3QgeWV0IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBbiBlYXNpbmcgYmxvY2sgdGhhdCBnZW5lcmF0ZXMgYW4gZWFzaW5nRnVuY3Rpb24gb2JqZWN0IGJhc2VkIG9uIHRoZSBkYXRhIHByb3ZpZGVkLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoRWFzaW5nQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIHR5cGUgb2YgdGhlIGVhc2luZyBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248RWFzaW5nRnVuY3Rpb25UeXBlPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBtb2RlIG9mIHRoZSBlYXNpbmcgZnVuY3Rpb24uXG4gICAgICogRWFzaW5nRnVuY3Rpb24uRUFTSU5HTU9ERV9FQVNFSU4sIEVhc2luZ0Z1bmN0aW9uLkVBU0lOR01PREVfRUFTRU9VVCwgRWFzaW5nRnVuY3Rpb24uRUFTSU5HTU9ERV9FQVNFSU5PVVRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgbW9kZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246cGFyYW1ldGVycyBmb3IgZWFzaW5nLiBmb3IgZXhhbXBsZSBjb250cm9sIHBvaW50cyBmb3IgQmV6aWVyQ3VydmVFYXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBwYXJhbWV0ZXJzOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXJbXT47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGVhc2luZyBmdW5jdGlvbiBvYmplY3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGVhc2luZ0Z1bmN0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxFYXNpbmdGdW5jdGlvbj47XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBjYWNoZSBvZiByZXVzYWJsZSBlYXNpbmcgZnVuY3Rpb25zLlxuICAgICAqIGtleSBpcyB0eXBlLW1vZGUtcHJvcGVydGllc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2Vhc2luZ0Z1bmN0aW9uczogeyBba2V5OiBzdHJpbmddOiBFYXNpbmdGdW5jdGlvbiB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cbiAgICApIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwidHlwZVwiLCBSaWNoVHlwZUFueSwgMTEpO1xuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwibW9kZVwiLCBSaWNoVHlwZU51bWJlciwgMCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJwYXJhbWV0ZXJzXCIsIFJpY2hUeXBlQW55LCBbMSwgMCwgMCwgMV0pO1xuXG4gICAgICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImVhc2luZ0Z1bmN0aW9uXCIsIFJpY2hUeXBlQW55KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlLmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBtb2RlID0gdGhpcy5tb2RlLmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzLmdldFZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgbW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXkgPSBgJHt0eXBlfS0ke21vZGV9LSR7cGFyYW1ldGVycy5qb2luKFwiLVwiKX1gO1xuICAgICAgICBpZiAoIXRoaXMuX2Vhc2luZ0Z1bmN0aW9uc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmcgPSBDcmVhdGVFYXNpbmdGdW5jdGlvbih0eXBlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIGVhc2luZy5zZXRFYXNpbmdNb2RlKG1vZGUpO1xuICAgICAgICAgICAgdGhpcy5fZWFzaW5nRnVuY3Rpb25zW2tleV0gPSBlYXNpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lYXNpbmdGdW5jdGlvbi5zZXRWYWx1ZSh0aGlzLl9lYXNpbmdGdW5jdGlvbnNba2V5XSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5FYXNpbmc7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuRWFzaW5nLCBGbG93R3JhcGhFYXNpbmdCbG9jayk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9