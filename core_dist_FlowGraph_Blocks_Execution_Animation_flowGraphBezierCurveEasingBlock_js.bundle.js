"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphBezierCurveEasingBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js":
/*!********************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphBezierCurveEasingBlock: () => (/* binding */ FlowGraphBezierCurveEasingBlock)
/* harmony export */ });
/* harmony import */ var core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Animations/easing */ "../core/dist/Animations/easing.js");
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * An easing block that generates a BezierCurveEase easingFunction object based on the data provided.
 */
class FlowGraphBezierCurveEasingBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphBlock {
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
        this.mode = this.registerDataInput("mode", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeNumber, 0);
        this.controlPoint1 = this.registerDataInput("controlPoint1", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeVector2);
        this.controlPoint2 = this.registerDataInput("controlPoint2", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeVector2);
        this.easingFunction = this.registerDataOutput("easingFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
    }
    _updateOutputs(context) {
        const mode = this.mode.getValue(context);
        const controlPoint1 = this.controlPoint1.getValue(context);
        const controlPoint2 = this.controlPoint2.getValue(context);
        if (mode === undefined) {
            return;
        }
        const key = `${mode}-${controlPoint1.x}-${controlPoint1.y}-${controlPoint2.x}-${controlPoint2.y}`;
        if (!this._easingFunctions[key]) {
            const easing = new core_Animations_easing__WEBPACK_IMPORTED_MODULE_0__.BezierCurveEase(controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y);
            easing.setEasingMode(mode);
            this._easingFunctions[key] = easing;
        }
        this.easingFunction.setValue(this._easingFunctions[key], context);
    }
    getClassName() {
        return "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */, FlowGraphBezierCurveEasingBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0FuaW1hdGlvbl9mbG93R3JhcGhCZXppZXJDdXJ2ZUVhc2luZ0Jsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFHQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQTJCQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBVkE7OztBQUdBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vQW5pbWF0aW9uL2Zsb3dHcmFwaEJlemllckN1cnZlRWFzaW5nQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBFYXNpbmdGdW5jdGlvbiB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvZWFzaW5nXCI7XG5pbXBvcnQgeyBCZXppZXJDdXJ2ZUVhc2UgfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2Vhc2luZ1wiO1xuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZU51bWJlciwgUmljaFR5cGVWZWN0b3IyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBWZWN0b3IyIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XG5cbi8qKlxuICogQW4gZWFzaW5nIGJsb2NrIHRoYXQgZ2VuZXJhdGVzIGEgQmV6aWVyQ3VydmVFYXNlIGVhc2luZ0Z1bmN0aW9uIG9iamVjdCBiYXNlZCBvbiB0aGUgZGF0YSBwcm92aWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEJlemllckN1cnZlRWFzaW5nQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIG1vZGUgb2YgdGhlIGVhc2luZyBmdW5jdGlvbi5cbiAgICAgKiBFYXNpbmdGdW5jdGlvbi5FQVNJTkdNT0RFX0VBU0VJTiwgRWFzaW5nRnVuY3Rpb24uRUFTSU5HTU9ERV9FQVNFT1VULCBFYXNpbmdGdW5jdGlvbi5FQVNJTkdNT0RFX0VBU0VJTk9VVFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBtb2RlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogQ29udHJvbCBwb2ludCAxIGZvciBiZXppZXIgY3VydmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xQb2ludDE6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFZlY3RvcjI+O1xuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IENvbnRyb2wgcG9pbnQgMiBmb3IgYmV6aWVyIGN1cnZlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBjb250cm9sUG9pbnQyOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxWZWN0b3IyPjtcblxuICAgIC8qKlxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIG9iamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZWFzaW5nRnVuY3Rpb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEVhc2luZ0Z1bmN0aW9uPjtcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGNhY2hlIG9mIHJldXNhYmxlIGVhc2luZyBmdW5jdGlvbnMuXG4gICAgICoga2V5IGlzIHR5cGUtbW9kZS1wcm9wZXJ0aWVzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZWFzaW5nRnVuY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IEVhc2luZ0Z1bmN0aW9uIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvKipcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvblxuICAgICkge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIHRoaXMubW9kZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJtb2RlXCIsIFJpY2hUeXBlTnVtYmVyLCAwKTtcbiAgICAgICAgdGhpcy5jb250cm9sUG9pbnQxID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImNvbnRyb2xQb2ludDFcIiwgUmljaFR5cGVWZWN0b3IyKTtcbiAgICAgICAgdGhpcy5jb250cm9sUG9pbnQyID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImNvbnRyb2xQb2ludDJcIiwgUmljaFR5cGVWZWN0b3IyKTtcblxuICAgICAgICB0aGlzLmVhc2luZ0Z1bmN0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJlYXNpbmdGdW5jdGlvblwiLCBSaWNoVHlwZUFueSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF91cGRhdGVPdXRwdXRzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHRoaXMubW9kZS5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgY29uc3QgY29udHJvbFBvaW50MSA9IHRoaXMuY29udHJvbFBvaW50MS5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgY29uc3QgY29udHJvbFBvaW50MiA9IHRoaXMuY29udHJvbFBvaW50Mi5nZXRWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAobW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXkgPSBgJHttb2RlfS0ke2NvbnRyb2xQb2ludDEueH0tJHtjb250cm9sUG9pbnQxLnl9LSR7Y29udHJvbFBvaW50Mi54fS0ke2NvbnRyb2xQb2ludDIueX1gO1xuICAgICAgICBpZiAoIXRoaXMuX2Vhc2luZ0Z1bmN0aW9uc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBlYXNpbmcgPSBuZXcgQmV6aWVyQ3VydmVFYXNlKGNvbnRyb2xQb2ludDEueCwgY29udHJvbFBvaW50MS55LCBjb250cm9sUG9pbnQyLngsIGNvbnRyb2xQb2ludDIueSk7XG4gICAgICAgICAgICBlYXNpbmcuc2V0RWFzaW5nTW9kZShtb2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2Vhc2luZ0Z1bmN0aW9uc1trZXldID0gZWFzaW5nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWFzaW5nRnVuY3Rpb24uc2V0VmFsdWUodGhpcy5fZWFzaW5nRnVuY3Rpb25zW2tleV0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuQmV6aWVyQ3VydmVFYXNpbmc7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQmV6aWVyQ3VydmVFYXNpbmcsIEZsb3dHcmFwaEJlemllckN1cnZlRWFzaW5nQmxvY2spO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==