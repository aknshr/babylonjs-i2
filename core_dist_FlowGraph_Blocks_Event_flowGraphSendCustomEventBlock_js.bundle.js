"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphSendCustomEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSendCustomEventBlock: () => (/* binding */ FlowGraphSendCustomEventBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * A block that sends a custom event.
 * To receive this event you need to use the ReceiveCustomEvent block.
 * This block has no output, but does have inputs based on the eventData from the configuration.
 * @see FlowGraphReceiveCustomEventBlock
 */
class FlowGraphSendCustomEventBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlockWithOutSignal {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        for (const key in this.config.eventData) {
            this.registerDataInput(key, this.config.eventData[key].type, this.config.eventData[key].value);
        }
    }
    _execute(context) {
        const eventId = this.config.eventId;
        // eventData is a map with the key being the data input's name, and value being the data input's value
        const eventData = {};
        for (const port of this.dataInputs) {
            eventData[port.name] = port.getValue(context);
        }
        context.configuration.coordinator.notifyCustomEvent(eventId, eventData);
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */, FlowGraphSendCustomEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoU2VuZEN1c3RvbUV2ZW50QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFrQkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V2ZW50L2Zsb3dHcmFwaFNlbmRDdXN0b21FdmVudEJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWxcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcblxyXG4vKipcclxuICogUGFyYW1ldGVycyB1c2VkIHRvIGNyZWF0ZSBhIEZsb3dHcmFwaFNlbmRDdXN0b21FdmVudEJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoU2VuZEN1c3RvbUV2ZW50QmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBpZCBvZiB0aGUgZXZlbnQgdG8gc2VuZC5cclxuICAgICAqIE5vdGUgLSBpbiB0aGUgZ2xURiBzcGVjcyB0aGlzIGlzIGFuIGluZGV4IHRvIHRoZSBldmVudCBhcnJheSAoaS5lLiAtIGEgbnVtYmVyKVxyXG4gICAgICovXHJcbiAgICBldmVudElkOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lcyBvZiB0aGUgZGF0YSBpbnB1dHMgZm9yIHRoYXQgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIGV2ZW50RGF0YTogeyBba2V5OiBzdHJpbmddOiB7IHR5cGU6IFJpY2hUeXBlPGFueT47IHZhbHVlPzogYW55IH0gfTtcclxufVxyXG4vKipcclxuICogQSBibG9jayB0aGF0IHNlbmRzIGEgY3VzdG9tIGV2ZW50LlxyXG4gKiBUbyByZWNlaXZlIHRoaXMgZXZlbnQgeW91IG5lZWQgdG8gdXNlIHRoZSBSZWNlaXZlQ3VzdG9tRXZlbnQgYmxvY2suXHJcbiAqIFRoaXMgYmxvY2sgaGFzIG5vIG91dHB1dCwgYnV0IGRvZXMgaGF2ZSBpbnB1dHMgYmFzZWQgb24gdGhlIGV2ZW50RGF0YSBmcm9tIHRoZSBjb25maWd1cmF0aW9uLlxyXG4gKiBAc2VlIEZsb3dHcmFwaFJlY2VpdmVDdXN0b21FdmVudEJsb2NrXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoU2VuZEN1c3RvbUV2ZW50QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBjb25maWc6IElGbG93R3JhcGhTZW5kQ3VzdG9tRXZlbnRCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcuZXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoa2V5LCB0aGlzLmNvbmZpZy5ldmVudERhdGFba2V5XS50eXBlLCB0aGlzLmNvbmZpZy5ldmVudERhdGFba2V5XS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRJZCA9IHRoaXMuY29uZmlnLmV2ZW50SWQ7XHJcbiAgICAgICAgLy8gZXZlbnREYXRhIGlzIGEgbWFwIHdpdGggdGhlIGtleSBiZWluZyB0aGUgZGF0YSBpbnB1dCdzIG5hbWUsIGFuZCB2YWx1ZSBiZWluZyB0aGUgZGF0YSBpbnB1dCdzIHZhbHVlXHJcbiAgICAgICAgY29uc3QgZXZlbnREYXRhOiBhbnkgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcnQgb2YgdGhpcy5kYXRhSW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50RGF0YVtwb3J0Lm5hbWVdID0gcG9ydC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuY29uZmlndXJhdGlvbi5jb29yZGluYXRvci5ub3RpZnlDdXN0b21FdmVudChldmVudElkLCBldmVudERhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlJlY2VpdmVDdXN0b21FdmVudDtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuUmVjZWl2ZUN1c3RvbUV2ZW50LCBGbG93R3JhcGhTZW5kQ3VzdG9tRXZlbnRCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==