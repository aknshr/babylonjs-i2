"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphSceneReadyEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSceneReadyEventBlock: () => (/* binding */ FlowGraphSceneReadyEventBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Block that triggers when a scene is ready.
 */
class FlowGraphSceneReadyEventBlock extends _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphEventBlock {
    constructor() {
        super(...arguments);
        this.initPriority = -1;
        this.type = "SceneReady" /* FlowGraphEventType.SceneReady */;
    }
    _executeEvent(context, _payload) {
        this._execute(context);
        return true;
    }
    _preparePendingTasks(context) {
        // no-op
    }
    _cancelPendingTasks(context) {
        // no-op
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */, FlowGraphSceneReadyEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoU2NlbmVSZWFkeUV2ZW50QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7O0FBQ0E7QUFFQTtBQWtCQTtBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FdmVudC9mbG93R3JhcGhTY2VuZVJlYWR5RXZlbnRCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbG93R3JhcGhFdmVudEJsb2NrIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEV2ZW50QmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRUeXBlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEV2ZW50VHlwZVwiO1xyXG4vKipcclxuICogQmxvY2sgdGhhdCB0cmlnZ2VycyB3aGVuIGEgc2NlbmUgaXMgcmVhZHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoU2NlbmVSZWFkeUV2ZW50QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFdmVudEJsb2NrIHtcclxuICAgIHB1YmxpYyBvdmVycmlkZSBpbml0UHJpb3JpdHk6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUgPSBGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVSZWFkeTtcclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2V4ZWN1dGVFdmVudChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBfcGF5bG9hZDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0ZShjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfcHJlcGFyZVBlbmRpbmdUYXNrcyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gbm8tb3BcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfY2FuY2VsUGVuZGluZ1Rhc2tzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICAvLyBuby1vcFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5TY2VuZVJlYWR5RXZlbnQ7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLlNjZW5lUmVhZHlFdmVudCwgRmxvd0dyYXBoU2NlbmVSZWFkeUV2ZW50QmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=