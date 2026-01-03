"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Event_flowGraphMeshPickEventBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js":
/*!**************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphMeshPickEventBlock: () => (/* binding */ FlowGraphMeshPickEventBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Events/pointerEvents */ "../core/dist/Events/pointerEvents.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "../core/dist/FlowGraph/utils.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * A block that activates when a mesh is picked.
 */
class FlowGraphMeshPickEventBlock extends _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphEventBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        /**
         * the type of the event this block reacts to
         */
        this.type = "MeshPick" /* FlowGraphEventType.MeshPick */;
        this.asset = this.registerDataInput("asset", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__.RichTypeAny, config?.targetMesh);
        this.pickedPoint = this.registerDataOutput("pickedPoint", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__.RichTypeVector3);
        this.pickOrigin = this.registerDataOutput("pickOrigin", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__.RichTypeVector3);
        this.pointerId = this.registerDataOutput("pointerId", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__.RichTypeNumber);
        this.pickedMesh = this.registerDataOutput("pickedMesh", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__.RichTypeAny);
        this.pointerType = this.registerDataInput("pointerType", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_4__.RichTypeAny, _Events_pointerEvents__WEBPACK_IMPORTED_MODULE_1__.PointerEventTypes.POINTERPICK);
    }
    _getReferencedMesh(context) {
        return this.asset.getValue(context);
    }
    _executeEvent(context, pickedInfo) {
        // get the pointer type
        const pointerType = this.pointerType.getValue(context);
        if (pointerType !== pickedInfo.type) {
            // returning true here to continue the propagation of the pointer event to the rest of the blocks
            return true;
        }
        // check if the mesh is the picked mesh or a descendant
        const mesh = this._getReferencedMesh(context);
        if (mesh && pickedInfo.pickInfo?.pickedMesh && (pickedInfo.pickInfo?.pickedMesh === mesh || (0,_utils__WEBPACK_IMPORTED_MODULE_3__._IsDescendantOf)(pickedInfo.pickInfo?.pickedMesh, mesh))) {
            this.pointerId.setValue(pickedInfo.event.pointerId, context);
            this.pickOrigin.setValue(pickedInfo.pickInfo.ray?.origin, context);
            this.pickedPoint.setValue(pickedInfo.pickInfo.pickedPoint, context);
            this.pickedMesh.setValue(pickedInfo.pickInfo.pickedMesh, context);
            this._execute(context);
            // stop the propagation if the configuration says so
            return !this.config?.stopPropagation;
        }
        else {
            // reset the outputs
            this.pointerId.resetToDefaultValue(context);
            this.pickOrigin.resetToDefaultValue(context);
            this.pickedPoint.resetToDefaultValue(context);
            this.pickedMesh.resetToDefaultValue(context);
        }
        return true;
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
    _cancelPendingTasks(_context) {
        // no-op
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */, FlowGraphMeshPickEventBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXZlbnRfZmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBaUJBOztBQUVBO0FBQ0E7QUFvQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQVRBOztBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXZlbnQvZmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQWJzdHJhY3RNZXNoIH0gZnJvbSBcIi4uLy4uLy4uL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRCbG9jayB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhFdmVudEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgUG9pbnRlckluZm8gfSBmcm9tIFwiLi4vLi4vLi4vRXZlbnRzL3BvaW50ZXJFdmVudHNcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50VHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vRXZlbnRzL3BvaW50ZXJFdmVudHNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgX0lzRGVzY2VuZGFudE9mIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi4vZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlQW55LCBSaWNoVHlwZU51bWJlciwgUmljaFR5cGVWZWN0b3IzIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFdmVudFR5cGUgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRXZlbnRUeXBlXCI7XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgbWVzaCBwaWNrIGV2ZW50IGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgdGhpcyBtZXNoIGJsb2NrIHByb3BhZ2F0aW9uIG9mIHRoZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgc3RvcFByb3BhZ2F0aW9uPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtZXNoIHRvIGxpc3RlbiB0by4gQ2FuIGFsc28gYmUgc2V0IGJ5IHRoZSBhc3NldCBpbnB1dC5cclxuICAgICAqL1xyXG4gICAgdGFyZ2V0TWVzaD86IEFic3RyYWN0TWVzaDtcclxufVxyXG4vKipcclxuICogQSBibG9jayB0aGF0IGFjdGl2YXRlcyB3aGVuIGEgbWVzaCBpcyBwaWNrZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoRXZlbnRCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBtZXNoIHRvIGxpc3RlbiB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGFzc2V0OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxBYnN0cmFjdE1lc2g+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBwaWNrZWQgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBwaWNrZWRQb2ludDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VmVjdG9yMz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHBpY2tlZCBvcmlnaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBwaWNrT3JpZ2luOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxWZWN0b3IzPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgcG9pbnRlciBpZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHBvaW50ZXJJZDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgcGlja2VkIG1lc2guIFBvc3NpYmx5IE5PVCB0aGUgc2FtZSBhcyB0aGUgYXNzZXQgKGNvdWxkIGJlIGEgZGVzY2VuZGFudCkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBwaWNrZWRNZXNoOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxBYnN0cmFjdE1lc2g+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIHR5cGUgb2YgdGhlIHBvaW50ZXIgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBwb2ludGVyVHlwZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248UG9pbnRlckV2ZW50VHlwZXM+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIHR5cGUgb2YgdGhlIGV2ZW50IHRoaXMgYmxvY2sgcmVhY3RzIHRvXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUgPSBGbG93R3JhcGhFdmVudFR5cGUuTWVzaFBpY2s7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBjb25maWc/OiBJRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrQ29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLmFzc2V0ID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcImFzc2V0XCIsIFJpY2hUeXBlQW55LCBjb25maWc/LnRhcmdldE1lc2gpO1xyXG4gICAgICAgIHRoaXMucGlja2VkUG9pbnQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInBpY2tlZFBvaW50XCIsIFJpY2hUeXBlVmVjdG9yMyk7XHJcbiAgICAgICAgdGhpcy5waWNrT3JpZ2luID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJwaWNrT3JpZ2luXCIsIFJpY2hUeXBlVmVjdG9yMyk7XHJcbiAgICAgICAgdGhpcy5wb2ludGVySWQgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInBvaW50ZXJJZFwiLCBSaWNoVHlwZU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5waWNrZWRNZXNoID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJwaWNrZWRNZXNoXCIsIFJpY2hUeXBlQW55KTtcclxuICAgICAgICB0aGlzLnBvaW50ZXJUeXBlID0gdGhpcy5yZWdpc3RlckRhdGFJbnB1dChcInBvaW50ZXJUeXBlXCIsIFJpY2hUeXBlQW55LCBQb2ludGVyRXZlbnRUeXBlcy5QT0lOVEVSUElDSyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9nZXRSZWZlcmVuY2VkTWVzaChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogQWJzdHJhY3RNZXNoIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NldC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2V4ZWN1dGVFdmVudChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBwaWNrZWRJbmZvOiBQb2ludGVySW5mbyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGdldCB0aGUgcG9pbnRlciB0eXBlXHJcbiAgICAgICAgY29uc3QgcG9pbnRlclR5cGUgPSB0aGlzLnBvaW50ZXJUeXBlLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChwb2ludGVyVHlwZSAhPT0gcGlja2VkSW5mby50eXBlKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybmluZyB0cnVlIGhlcmUgdG8gY29udGludWUgdGhlIHByb3BhZ2F0aW9uIG9mIHRoZSBwb2ludGVyIGV2ZW50IHRvIHRoZSByZXN0IG9mIHRoZSBibG9ja3NcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBtZXNoIGlzIHRoZSBwaWNrZWQgbWVzaCBvciBhIGRlc2NlbmRhbnRcclxuICAgICAgICBjb25zdCBtZXNoID0gdGhpcy5fZ2V0UmVmZXJlbmNlZE1lc2goY29udGV4dCk7XHJcbiAgICAgICAgaWYgKG1lc2ggJiYgcGlja2VkSW5mby5waWNrSW5mbz8ucGlja2VkTWVzaCAmJiAocGlja2VkSW5mby5waWNrSW5mbz8ucGlja2VkTWVzaCA9PT0gbWVzaCB8fCBfSXNEZXNjZW5kYW50T2YocGlja2VkSW5mby5waWNrSW5mbz8ucGlja2VkTWVzaCwgbWVzaCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRlcklkLnNldFZhbHVlKChwaWNrZWRJbmZvLmV2ZW50IGFzIFBvaW50ZXJFdmVudCkucG9pbnRlcklkLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5waWNrT3JpZ2luLnNldFZhbHVlKHBpY2tlZEluZm8ucGlja0luZm8ucmF5Py5vcmlnaW4hLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5waWNrZWRQb2ludC5zZXRWYWx1ZShwaWNrZWRJbmZvLnBpY2tJbmZvLnBpY2tlZFBvaW50ISwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMucGlja2VkTWVzaC5zZXRWYWx1ZShwaWNrZWRJbmZvLnBpY2tJbmZvLnBpY2tlZE1lc2gsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9leGVjdXRlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAvLyBzdG9wIHRoZSBwcm9wYWdhdGlvbiBpZiB0aGUgY29uZmlndXJhdGlvbiBzYXlzIHNvXHJcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5jb25maWc/LnN0b3BQcm9wYWdhdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZXNldCB0aGUgb3V0cHV0c1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50ZXJJZC5yZXNldFRvRGVmYXVsdFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tPcmlnaW4ucmVzZXRUb0RlZmF1bHRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5waWNrZWRQb2ludC5yZXNldFRvRGVmYXVsdFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tlZE1lc2gucmVzZXRUb0RlZmF1bHRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9wcmVwYXJlUGVuZGluZ1Rhc2tzKF9jb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gbm8tb3BcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2NhbmNlbFBlbmRpbmdUYXNrcyhfY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIC8vIG5vLW9wXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLk1lc2hQaWNrRXZlbnQ7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLk1lc2hQaWNrRXZlbnQsIEZsb3dHcmFwaE1lc2hQaWNrRXZlbnRCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=