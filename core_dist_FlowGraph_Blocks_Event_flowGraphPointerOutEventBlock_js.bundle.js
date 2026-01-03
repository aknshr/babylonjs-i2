"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphPointerOutEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js":
/*!****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphPointerOutEventBlock: () => (/* binding */ FlowGraphPointerOutEventBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A pointe out event block.
 * This block can be used as an entry pointer to when a pointer is out of a specific target mesh.
 */
class FlowGraphPointerOutEventBlock extends core_FlowGraph_flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphEventBlock {
    constructor(config) {
        super(config);
        this.type = "PointerOut" /* FlowGraphEventType.PointerOut */;
        this.pointerId = this.registerDataOutput("pointerId", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.targetMesh = this.registerDataInput("targetMesh", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config?.targetMesh);
        this.meshOutOfPointer = this.registerDataOutput("meshOutOfPointer", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    _executeEvent(context, payload) {
        const mesh = this.targetMesh.getValue(context);
        this.meshOutOfPointer.setValue(payload.mesh, context);
        this.pointerId.setValue(payload.pointerId, context);
        const skipEvent = payload.over && (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__._IsDescendantOf)(payload.mesh, mesh);
        if (!skipEvent && (payload.mesh === mesh || (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__._IsDescendantOf)(payload.mesh, mesh))) {
            this._execute(context);
            return !this.config?.stopPropagation;
        }
        return true;
    }
    _preparePendingTasks(_context) {
        // no-op
    }
    _cancelPendingTasks(_context) {
        // no-op
    }
    getClassName() {
        return "FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */, FlowGraphPointerOutEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoUG9pbnRlck91dEV2ZW50QmxvY2tfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFvQ0E7OztBQUdBO0FBQ0E7QUFrQkE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FdmVudC9mbG93R3JhcGhQb2ludGVyT3V0RXZlbnRCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29udGV4dFwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhFdmVudEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhFdmVudFR5cGUgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRXZlbnRUeXBlXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL2Fic3RyYWN0TWVzaFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBSaWNoVHlwZUFueSwgUmljaFR5cGVOdW1iZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcbmltcG9ydCB7IF9Jc0Rlc2NlbmRhbnRPZiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC91dGlsc1wiO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBwb2ludGVyIG91dCBldmVudCBibG9jay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoUG9pbnRlck91dEV2ZW50QmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRoaXMgbWVzaCBibG9jayBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQuXG4gICAgICovXG4gICAgc3RvcFByb3BhZ2F0aW9uPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtZXNoIHRvIGxpc3RlbiB0by4gQ2FuIGFsc28gYmUgc2V0IGJ5IHRoZSBhc3NldCBpbnB1dC5cbiAgICAgKi9cbiAgICB0YXJnZXRNZXNoPzogQWJzdHJhY3RNZXNoO1xufVxuXG4vKipcbiAqIFBheWxvYWQgZm9yIHRoZSBwb2ludGVyIG91dCBldmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoUG9pbnRlck91dEV2ZW50UGF5bG9hZCB7XG4gICAgLyoqXG4gICAgICogVGhlIHBvaW50ZXIgaWQuXG4gICAgICovXG4gICAgcG9pbnRlcklkOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIG1lc2ggdGhhdCB3YXMgcGlja2VkLlxuICAgICAqL1xuICAgIG1lc2g6IEFic3RyYWN0TWVzaDtcblxuICAgIC8qKlxuICAgICAqIElmIHBvcHVsYXRlZCwgdGhlIGhvdmVyIGV2ZW50IG1vdmVkIHRvIHRoaXMgbWVzaCBmcm9tIHRoZSBgbWVzaGAgdmFyaWFibGVcbiAgICAgKi9cbiAgICBvdmVyPzogQWJzdHJhY3RNZXNoO1xufVxuXG4vKipcbiAqIEEgcG9pbnRlIG91dCBldmVudCBibG9jay5cbiAqIFRoaXMgYmxvY2sgY2FuIGJlIHVzZWQgYXMgYW4gZW50cnkgcG9pbnRlciB0byB3aGVuIGEgcG9pbnRlciBpcyBvdXQgb2YgYSBzcGVjaWZpYyB0YXJnZXQgbWVzaC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFBvaW50ZXJPdXRFdmVudEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoRXZlbnRCbG9jayB7XG4gICAgLyoqXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBwb2ludGVyIGlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBwb2ludGVySWQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPG51bWJlcj47XG5cbiAgICAvKipcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgbWVzaCB0byBsaXN0ZW4gdG8uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHRhcmdldE1lc2g6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEFic3RyYWN0TWVzaD47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIG1lc2ggdGhhdCB0aGUgcG9pbnRlciBpcyBvdXQgb2YuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG1lc2hPdXRPZlBvaW50ZXI6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEFic3RyYWN0TWVzaD47XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlID0gRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJPdXQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaFBvaW50ZXJPdXRFdmVudEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwicG9pbnRlcklkXCIsIFJpY2hUeXBlTnVtYmVyKTtcbiAgICAgICAgdGhpcy50YXJnZXRNZXNoID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInRhcmdldE1lc2hcIiwgUmljaFR5cGVBbnksIGNvbmZpZz8udGFyZ2V0TWVzaCk7XG4gICAgICAgIHRoaXMubWVzaE91dE9mUG9pbnRlciA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwibWVzaE91dE9mUG9pbnRlclwiLCBSaWNoVHlwZUFueSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF9leGVjdXRlRXZlbnQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgcGF5bG9hZDogSUZsb3dHcmFwaFBvaW50ZXJPdXRFdmVudFBheWxvYWQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWVzaCA9IHRoaXMudGFyZ2V0TWVzaC5nZXRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgdGhpcy5tZXNoT3V0T2ZQb2ludGVyLnNldFZhbHVlKHBheWxvYWQubWVzaCwgY29udGV4dCk7XG4gICAgICAgIHRoaXMucG9pbnRlcklkLnNldFZhbHVlKHBheWxvYWQucG9pbnRlcklkLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc2tpcEV2ZW50ID0gcGF5bG9hZC5vdmVyICYmIF9Jc0Rlc2NlbmRhbnRPZihwYXlsb2FkLm1lc2gsIG1lc2gpO1xuICAgICAgICBpZiAoIXNraXBFdmVudCAmJiAocGF5bG9hZC5tZXNoID09PSBtZXNoIHx8IF9Jc0Rlc2NlbmRhbnRPZihwYXlsb2FkLm1lc2gsIG1lc2gpKSkge1xuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5jb25maWc/LnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIF9wcmVwYXJlUGVuZGluZ1Rhc2tzKF9jb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBfY2FuY2VsUGVuZGluZ1Rhc2tzKF9jb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlBvaW50ZXJPdXRFdmVudDtcbiAgICB9XG59XG5cblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5Qb2ludGVyT3V0RXZlbnQsIEZsb3dHcmFwaFBvaW50ZXJPdXRFdmVudEJsb2NrKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=