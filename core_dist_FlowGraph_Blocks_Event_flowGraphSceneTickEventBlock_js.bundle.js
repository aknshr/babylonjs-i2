"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphSceneTickEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js":
/*!***************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSceneTickEventBlock: () => (/* binding */ FlowGraphSceneTickEventBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * Block that triggers on scene tick (before each render).
 */
class FlowGraphSceneTickEventBlock extends _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphEventBlock {
    constructor() {
        super();
        this.type = "SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */;
        this.timeSinceStart = this.registerDataOutput("timeSinceStart", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeNumber);
        this.deltaTime = this.registerDataOutput("deltaTime", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeNumber);
    }
    /**
     * @internal
     */
    _preparePendingTasks(_context) {
        // no-op
    }
    /**
     * @internal
     */
    _executeEvent(context, payload) {
        this.timeSinceStart.setValue(payload.timeSinceStart, context);
        this.deltaTime.setValue(payload.deltaTime, context);
        this._execute(context);
        return true;
    }
    /**
     * @internal
     */
    _cancelPendingTasks(_context) {
        // no-op
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */, FlowGraphSceneTickEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoU2NlbmVUaWNrRXZlbnRCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQW1CQTs7QUFFQTtBQUNBO0FBYUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V2ZW50L2Zsb3dHcmFwaFNjZW5lVGlja0V2ZW50QmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhFdmVudEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgUmljaFR5cGVOdW1iZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV2ZW50VHlwZSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhFdmVudFR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBQYXlsb2FkIGZvciB0aGUgc2NlbmUgdGljayBldmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaE9uVGlja0V2ZW50UGF5bG9hZCB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIHNjZW5lIHN0YXJ0ZWQuXHJcbiAgICAgKi9cclxuICAgIHRpbWVTaW5jZVN0YXJ0OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgZnJhbWUuXHJcbiAgICAgKi9cclxuICAgIGRlbHRhVGltZTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQmxvY2sgdGhhdCB0cmlnZ2VycyBvbiBzY2VuZSB0aWNrIChiZWZvcmUgZWFjaCByZW5kZXIpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFNjZW5lVGlja0V2ZW50QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFdmVudEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIHRpbWUgaW4gc2Vjb25kcyBzaW5jZSB0aGUgc2NlbmUgc3RhcnRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHRpbWVTaW5jZVN0YXJ0OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIHRpbWUgaW4gc2Vjb25kcyBzaW5jZSB0aGUgbGFzdCBmcmFtZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGRlbHRhVGltZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlID0gRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lQmVmb3JlUmVuZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50aW1lU2luY2VTdGFydCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwidGltZVNpbmNlU3RhcnRcIiwgUmljaFR5cGVOdW1iZXIpO1xyXG4gICAgICAgIHRoaXMuZGVsdGFUaW1lID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJkZWx0YVRpbWVcIiwgUmljaFR5cGVOdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfcHJlcGFyZVBlbmRpbmdUYXNrcyhfY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIC8vIG5vLW9wXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9leGVjdXRlRXZlbnQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgcGF5bG9hZDogSUZsb3dHcmFwaE9uVGlja0V2ZW50UGF5bG9hZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMudGltZVNpbmNlU3RhcnQuc2V0VmFsdWUocGF5bG9hZC50aW1lU2luY2VTdGFydCwgY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5kZWx0YVRpbWUuc2V0VmFsdWUocGF5bG9hZC5kZWx0YVRpbWUsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGUoY29udGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9jYW5jZWxQZW5kaW5nVGFza3MoX2NvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpIHtcclxuICAgICAgICAvLyBuby1vcFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gRmxvd0dyYXBoQmxvY2tOYW1lcy5TY2VuZVRpY2tFdmVudDtcclxuICAgIH1cclxufVxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuU2NlbmVUaWNrRXZlbnQsIEZsb3dHcmFwaFNjZW5lVGlja0V2ZW50QmxvY2spO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9