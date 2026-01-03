"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphPointerOverEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js":
/*!*****************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphPointerOverEventBlock: () => (/* binding */ FlowGraphPointerOverEventBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A pointer over event block.
 * This block can be used as an entry pointer to when a pointer is over a specific target mesh.
 */
class FlowGraphPointerOverEventBlock extends core_FlowGraph_flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphEventBlock {
    constructor(config) {
        super(config);
        this.type = "PointerOver" /* FlowGraphEventType.PointerOver */;
        this.pointerId = this.registerDataOutput("pointerId", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeNumber);
        this.targetMesh = this.registerDataInput("targetMesh", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config?.targetMesh);
        this.meshUnderPointer = this.registerDataOutput("meshUnderPointer", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
    }
    _executeEvent(context, payload) {
        const mesh = this.targetMesh.getValue(context);
        this.meshUnderPointer.setValue(payload.mesh, context);
        // skip if we moved from a mesh that is under the hierarchy of the target mesh
        const skipEvent = payload.out && (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_3__._IsDescendantOf)(payload.out, mesh);
        this.pointerId.setValue(payload.pointerId, context);
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
        return "FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */, FlowGraphPointerOverEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoUG9pbnRlck92ZXJFdmVudEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBTUE7QUFDQTtBQUNBO0FBb0NBOzs7QUFHQTtBQUNBO0FBa0JBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FdmVudC9mbG93R3JhcGhQb2ludGVyT3ZlckV2ZW50QmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEV2ZW50QmxvY2sgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRXZlbnRCbG9ja1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRUeXBlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEV2ZW50VHlwZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHsgUmljaFR5cGVBbnksIFJpY2hUeXBlTnVtYmVyIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XG5pbXBvcnQgeyBfSXNEZXNjZW5kYW50T2YgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdXRpbHNcIjtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgcG9pbnRlciBvdmVyIGV2ZW50IGJsb2NrLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhQb2ludGVyT3ZlckV2ZW50QmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRoaXMgbWVzaCBibG9jayBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQuXG4gICAgICovXG4gICAgc3RvcFByb3BhZ2F0aW9uPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtZXNoIHRvIGxpc3RlbiB0by4gQ2FuIGFsc28gYmUgc2V0IGJ5IHRoZSBhc3NldCBpbnB1dC5cbiAgICAgKi9cbiAgICB0YXJnZXRNZXNoPzogQWJzdHJhY3RNZXNoO1xufVxuXG4vKipcbiAqIFBheWxvYWQgZm9yIHRoZSBwb2ludGVyIG92ZXIgZXZlbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFBvaW50ZXJPdmVyRXZlbnRQYXlsb2FkIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcG9pbnRlciBpZC5cbiAgICAgKi9cbiAgICBwb2ludGVySWQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWVzaCB0aGF0IHdhcyBwaWNrZWQuXG4gICAgICovXG4gICAgbWVzaDogQWJzdHJhY3RNZXNoO1xuXG4gICAgLyoqXG4gICAgICogSWYgcG9wdWxhdGVkLCB0aGUgaG92ZXIgZXZlbnQgbW92ZWQgZnJvbSB0aGlzIG1lc2ggdG8gdGhlIGBtZXNoYCB2YXJpYWJsZVxuICAgICAqL1xuICAgIG91dD86IEFic3RyYWN0TWVzaDtcbn1cblxuLyoqXG4gKiBBIHBvaW50ZXIgb3ZlciBldmVudCBibG9jay5cbiAqIFRoaXMgYmxvY2sgY2FuIGJlIHVzZWQgYXMgYW4gZW50cnkgcG9pbnRlciB0byB3aGVuIGEgcG9pbnRlciBpcyBvdmVyIGEgc3BlY2lmaWMgdGFyZ2V0IG1lc2guXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhQb2ludGVyT3ZlckV2ZW50QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFdmVudEJsb2NrIHtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHBvaW50ZXIgaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHBvaW50ZXJJZDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBtZXNoIHRvIGxpc3RlbiB0by5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFyZ2V0TWVzaDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248QWJzdHJhY3RNZXNoPjtcblxuICAgIC8qKlxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgbWVzaCB0aGF0IGlzIHVuZGVyIHRoZSBwb2ludGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBtZXNoVW5kZXJQb2ludGVyOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxBYnN0cmFjdE1lc2g+O1xuXG4gICAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZSA9IEZsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3ZlcjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoUG9pbnRlck92ZXJFdmVudEJsb2NrQ29uZmlndXJhdGlvbikge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgICAgICB0aGlzLnBvaW50ZXJJZCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwicG9pbnRlcklkXCIsIFJpY2hUeXBlTnVtYmVyKTtcbiAgICAgICAgdGhpcy50YXJnZXRNZXNoID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInRhcmdldE1lc2hcIiwgUmljaFR5cGVBbnksIGNvbmZpZz8udGFyZ2V0TWVzaCk7XG4gICAgICAgIHRoaXMubWVzaFVuZGVyUG9pbnRlciA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwibWVzaFVuZGVyUG9pbnRlclwiLCBSaWNoVHlwZUFueSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIF9leGVjdXRlRXZlbnQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgcGF5bG9hZDogSUZsb3dHcmFwaFBvaW50ZXJPdmVyRXZlbnRQYXlsb2FkKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1lc2ggPSB0aGlzLnRhcmdldE1lc2guZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIHRoaXMubWVzaFVuZGVyUG9pbnRlci5zZXRWYWx1ZShwYXlsb2FkLm1lc2gsIGNvbnRleHQpO1xuICAgICAgICAvLyBza2lwIGlmIHdlIG1vdmVkIGZyb20gYSBtZXNoIHRoYXQgaXMgdW5kZXIgdGhlIGhpZXJhcmNoeSBvZiB0aGUgdGFyZ2V0IG1lc2hcbiAgICAgICAgY29uc3Qgc2tpcEV2ZW50ID0gcGF5bG9hZC5vdXQgJiYgX0lzRGVzY2VuZGFudE9mKHBheWxvYWQub3V0LCBtZXNoKTtcbiAgICAgICAgdGhpcy5wb2ludGVySWQuc2V0VmFsdWUocGF5bG9hZC5wb2ludGVySWQsIGNvbnRleHQpO1xuICAgICAgICBpZiAoIXNraXBFdmVudCAmJiAocGF5bG9hZC5tZXNoID09PSBtZXNoIHx8IF9Jc0Rlc2NlbmRhbnRPZihwYXlsb2FkLm1lc2gsIG1lc2gpKSkge1xuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5jb25maWc/LnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIG92ZXJyaWRlIF9wcmVwYXJlUGVuZGluZ1Rhc2tzKF9jb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBfY2FuY2VsUGVuZGluZ1Rhc2tzKF9jb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIC8vIG5vLW9wXG4gICAgfVxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKSB7XG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLlBvaW50ZXJPdmVyRXZlbnQ7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuUG9pbnRlck92ZXJFdmVudCwgRmxvd0dyYXBoUG9pbnRlck92ZXJFdmVudEJsb2NrKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=