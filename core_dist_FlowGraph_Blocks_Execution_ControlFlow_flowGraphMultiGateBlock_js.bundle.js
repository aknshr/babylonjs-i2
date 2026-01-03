"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphMultiGateBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js":
/*!**************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphMultiGateBlock: () => (/* binding */ FlowGraphMultiGateBlock)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that has an input flow and routes it to any potential output flows, randomly or sequentially
 */
class FlowGraphMultiGateBlock extends _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphExecutionBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        /**
         * Output connections: The output signals.
         */
        this.outputSignals = [];
        this.reset = this._registerSignalInput("reset");
        this.lastIndex = this.registerDataOutput("lastIndex", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeFlowGraphInteger, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(-1));
        this.setNumberOfOutputSignals(config?.outputSignalCount);
    }
    _getNextIndex(indexesUsed) {
        // find the next index available from the indexes used array
        // if all outputs were used, reset the indexes used array if we are in a loop multi gate
        if (!indexesUsed.includes(false)) {
            if (this.config.isLoop) {
                indexesUsed.fill(false);
            }
        }
        if (!this.config.isRandom) {
            return indexesUsed.indexOf(false);
        }
        else {
            const unusedIndexes = indexesUsed.map((used, index) => (used ? -1 : index)).filter((index) => index !== -1);
            return unusedIndexes.length ? unusedIndexes[Math.floor(Math.random() * unusedIndexes.length)] : -1;
        }
    }
    /**
     * Sets the block's output signals. Would usually be passed from the constructor but can be changed afterwards.
     * @param numberOutputSignals the number of output flows
     */
    setNumberOfOutputSignals(numberOutputSignals = 1) {
        // check the size of the outFlow Array, see if it is not larger than needed
        while (this.outputSignals.length > numberOutputSignals) {
            const flow = this.outputSignals.pop();
            if (flow) {
                flow.disconnectFromAll();
                this._unregisterSignalOutput(flow.name);
            }
        }
        while (this.outputSignals.length < numberOutputSignals) {
            this.outputSignals.push(this._registerSignalOutput(`out_${this.outputSignals.length}`));
        }
    }
    _execute(context, callingSignal) {
        // set the state(s) of the block
        if (!context._hasExecutionVariable(this, "indexesUsed")) {
            context._setExecutionVariable(this, "indexesUsed", this.outputSignals.map(() => false));
        }
        if (callingSignal === this.reset) {
            context._deleteExecutionVariable(this, "indexesUsed");
            this.lastIndex.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(-1), context);
            return;
        }
        const indexesUsed = context._getExecutionVariable(this, "indexesUsed", []);
        const nextIndex = this._getNextIndex(indexesUsed);
        if (nextIndex > -1) {
            this.lastIndex.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(nextIndex), context);
            indexesUsed[nextIndex] = true;
            context._setExecutionVariable(this, "indexesUsed", indexesUsed);
            this.outputSignals[nextIndex]._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */;
    }
    /**
     * Serializes the block.
     * @param serializationObject the object to serialize to.
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.outputSignalCount = this.config.outputSignalCount;
        serializationObject.config.isRandom = this.config.isRandom;
        serializationObject.config.loop = this.config.isLoop;
        serializationObject.config.startIndex = this.config.startIndex;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */, FlowGraphMultiGateBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaE11bHRpR2F0ZUJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUlBO0FBbUJBOztBQUVBO0FBQ0E7QUFjQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBYkE7O0FBRUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaE11bHRpR2F0ZUJsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciB0aGUgbXVsdGkgZ2F0ZSBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaE11bHRpR2F0ZUJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIG91dHB1dCBzaWduYWxzLiBSZXF1aXJlZC5cclxuICAgICAqL1xyXG4gICAgb3V0cHV0U2lnbmFsQ291bnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgdGhlIGJsb2NrIHNob3VsZCBwaWNrIGEgcmFuZG9tIG91dHB1dCBmbG93IGZyb20gdGhlIG9uZXMgdGhhdCBoYXZlbid0IGJlZW4gZXhlY3V0ZWQuIERlZmF1bHQgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGlzUmFuZG9tPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgdGhlIGJsb2NrIHNob3VsZCBsb29wIGJhY2sgdG8gdGhlIGZpcnN0IG91dHB1dCBmbG93IGFmdGVyIGV4ZWN1dGluZyB0aGUgbGFzdCBvbmUuIERlZmF1bHQgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGlzTG9vcD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGJsb2NrIHRoYXQgaGFzIGFuIGlucHV0IGZsb3cgYW5kIHJvdXRlcyBpdCB0byBhbnkgcG90ZW50aWFsIG91dHB1dCBmbG93cywgcmFuZG9tbHkgb3Igc2VxdWVudGlhbGx5XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoTXVsdGlHYXRlQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFJlc2V0cyB0aGUgZ2F0ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHJlc2V0OiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbnM6IFRoZSBvdXRwdXQgc2lnbmFscy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG91dHB1dFNpZ25hbHM6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25bXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IG91dHB1dCBmbG93LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGFzdEluZGV4OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxGbG93R3JhcGhJbnRlZ2VyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYmxvY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgY29uZmlnOiBJRmxvd0dyYXBoTXVsdGlHYXRlQmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMucmVzZXQgPSB0aGlzLl9yZWdpc3RlclNpZ25hbElucHV0KFwicmVzZXRcIik7XHJcbiAgICAgICAgdGhpcy5sYXN0SW5kZXggPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcImxhc3RJbmRleFwiLCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIG5ldyBGbG93R3JhcGhJbnRlZ2VyKC0xKSk7XHJcbiAgICAgICAgdGhpcy5zZXROdW1iZXJPZk91dHB1dFNpZ25hbHMoY29uZmlnPy5vdXRwdXRTaWduYWxDb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TmV4dEluZGV4KGluZGV4ZXNVc2VkOiBib29sZWFuW10pOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGZpbmQgdGhlIG5leHQgaW5kZXggYXZhaWxhYmxlIGZyb20gdGhlIGluZGV4ZXMgdXNlZCBhcnJheVxyXG5cclxuICAgICAgICAvLyBpZiBhbGwgb3V0cHV0cyB3ZXJlIHVzZWQsIHJlc2V0IHRoZSBpbmRleGVzIHVzZWQgYXJyYXkgaWYgd2UgYXJlIGluIGEgbG9vcCBtdWx0aSBnYXRlXHJcbiAgICAgICAgaWYgKCFpbmRleGVzVXNlZC5pbmNsdWRlcyhmYWxzZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzTG9vcCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXhlc1VzZWQuZmlsbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5pc1JhbmRvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1VzZWQuaW5kZXhPZihmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdW51c2VkSW5kZXhlcyA9IGluZGV4ZXNVc2VkLm1hcCgodXNlZCwgaW5kZXgpID0+ICh1c2VkID8gLTEgOiBpbmRleCkpLmZpbHRlcigoaW5kZXgpID0+IGluZGV4ICE9PSAtMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bnVzZWRJbmRleGVzLmxlbmd0aCA/IHVudXNlZEluZGV4ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdW51c2VkSW5kZXhlcy5sZW5ndGgpXSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGJsb2NrJ3Mgb3V0cHV0IHNpZ25hbHMuIFdvdWxkIHVzdWFsbHkgYmUgcGFzc2VkIGZyb20gdGhlIGNvbnN0cnVjdG9yIGJ1dCBjYW4gYmUgY2hhbmdlZCBhZnRlcndhcmRzLlxyXG4gICAgICogQHBhcmFtIG51bWJlck91dHB1dFNpZ25hbHMgdGhlIG51bWJlciBvZiBvdXRwdXQgZmxvd3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldE51bWJlck9mT3V0cHV0U2lnbmFscyhudW1iZXJPdXRwdXRTaWduYWxzOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIG91dEZsb3cgQXJyYXksIHNlZSBpZiBpdCBpcyBub3QgbGFyZ2VyIHRoYW4gbmVlZGVkXHJcbiAgICAgICAgd2hpbGUgKHRoaXMub3V0cHV0U2lnbmFscy5sZW5ndGggPiBudW1iZXJPdXRwdXRTaWduYWxzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZsb3cgPSB0aGlzLm91dHB1dFNpZ25hbHMucG9wKCk7XHJcbiAgICAgICAgICAgIGlmIChmbG93KSB7XHJcbiAgICAgICAgICAgICAgICBmbG93LmRpc2Nvbm5lY3RGcm9tQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91bnJlZ2lzdGVyU2lnbmFsT3V0cHV0KGZsb3cubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm91dHB1dFNpZ25hbHMubGVuZ3RoIDwgbnVtYmVyT3V0cHV0U2lnbmFscykge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dFNpZ25hbHMucHVzaCh0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChgb3V0XyR7dGhpcy5vdXRwdXRTaWduYWxzLmxlbmd0aH1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBjYWxsaW5nU2lnbmFsOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBzdGF0ZShzKSBvZiB0aGUgYmxvY2tcclxuICAgICAgICBpZiAoIWNvbnRleHQuX2hhc0V4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiaW5kZXhlc1VzZWRcIikpIHtcclxuICAgICAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgXCJpbmRleGVzVXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRTaWduYWxzLm1hcCgoKSA9PiBmYWxzZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYWxsaW5nU2lnbmFsID09PSB0aGlzLnJlc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX2RlbGV0ZUV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiaW5kZXhlc1VzZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEluZGV4LnNldFZhbHVlKG5ldyBGbG93R3JhcGhJbnRlZ2VyKC0xKSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXhlc1VzZWQgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImluZGV4ZXNVc2VkXCIsIFtdIGFzIGJvb2xlYW5bXSk7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5fZ2V0TmV4dEluZGV4KGluZGV4ZXNVc2VkKTtcclxuICAgICAgICBpZiAobmV4dEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0SW5kZXguc2V0VmFsdWUobmV3IEZsb3dHcmFwaEludGVnZXIobmV4dEluZGV4KSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIGluZGV4ZXNVc2VkW25leHRJbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImluZGV4ZXNVc2VkXCIsIGluZGV4ZXNVc2VkKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXRTaWduYWxzW25leHRJbmRleF0uX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuTXVsdGlHYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGUgYmxvY2suXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29uZmlnLm91dHB1dFNpZ25hbENvdW50ID0gdGhpcy5jb25maWcub3V0cHV0U2lnbmFsQ291bnQ7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcuaXNSYW5kb20gPSB0aGlzLmNvbmZpZy5pc1JhbmRvbTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmZpZy5sb29wID0gdGhpcy5jb25maWcuaXNMb29wO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29uZmlnLnN0YXJ0SW5kZXggPSB0aGlzLmNvbmZpZy5zdGFydEluZGV4O1xyXG4gICAgfVxyXG59XHJcblJlZ2lzdGVyQ2xhc3MoRmxvd0dyYXBoQmxvY2tOYW1lcy5NdWx0aUdhdGUsIEZsb3dHcmFwaE11bHRpR2F0ZUJsb2NrKTtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==