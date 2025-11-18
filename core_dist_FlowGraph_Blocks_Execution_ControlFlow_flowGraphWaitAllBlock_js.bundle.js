"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphWaitAllBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js":
/*!************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphWaitAllBlock: () => (/* binding */ FlowGraphWaitAllBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * A block that waits for all input flows to be activated before activating its output flow.
 */
class FlowGraphWaitAllBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlockWithOutSignal {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        /**
         * An array of input signals
         */
        this.inFlows = [];
        this._cachedActivationState = [];
        this.reset = this._registerSignalInput("reset");
        this.completed = this._registerSignalOutput("completed");
        this.remainingInputs = this.registerDataOutput("remainingInputs", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeFlowGraphInteger, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(this.config.inputSignalCount || 0));
        // The first inFlow is the default input signal all execution blocks have
        for (let i = 0; i < this.config.inputSignalCount; i++) {
            this.inFlows.push(this._registerSignalInput(`in_${i}`));
        }
        // no need for in
        this._unregisterSignalInput("in");
    }
    _getCurrentActivationState(context) {
        const activationState = this._cachedActivationState;
        activationState.length = 0;
        if (!context._hasExecutionVariable(this, "activationState")) {
            for (let i = 0; i < this.config.inputSignalCount; i++) {
                activationState.push(false);
            }
        }
        else {
            const contextActivationState = context._getExecutionVariable(this, "activationState", []);
            for (let i = 0; i < contextActivationState.length; i++) {
                activationState.push(contextActivationState[i]);
            }
        }
        return activationState;
    }
    _execute(context, callingSignal) {
        const activationState = this._getCurrentActivationState(context);
        if (callingSignal === this.reset) {
            for (let i = 0; i < this.config.inputSignalCount; i++) {
                activationState[i] = false;
            }
        }
        else {
            const index = this.inFlows.indexOf(callingSignal);
            if (index >= 0) {
                activationState[index] = true;
            }
        }
        this.remainingInputs.setValue(new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_3__.FlowGraphInteger(activationState.filter((v) => !v).length), context);
        context._setExecutionVariable(this, "activationState", activationState.slice());
        if (!activationState.includes(false)) {
            this.completed._activateSignal(context);
            for (let i = 0; i < this.config.inputSignalCount; i++) {
                activationState[i] = false;
            }
        }
        else {
            callingSignal !== this.reset && this.out._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */;
    }
    /**
     * Serializes this block into a object
     * @param serializationObject the object to serialize to
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.inputFlows = this.config.inputSignalCount;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */, FlowGraphWaitAllBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX0NvbnRyb2xGbG93X2Zsb3dHcmFwaFdhaXRBbGxCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQVlBOztBQUVBO0FBQ0E7QUFxQkE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQVZBOztBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhXYWl0QWxsQmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIH0gZnJvbSBcIi4uLy4uLy4uL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbFwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQ3VzdG9tVHlwZXMvZmxvd0dyYXBoSW50ZWdlclwiO1xyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIHdhaXQgYWxsIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoV2FpdEFsbEJsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGlucHV0IHNpZ25hbHMuIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBpbnB1dCBmbG93LlxyXG4gICAgICogZ2xURiBpbnRlcmFjdGl2aXR5IGhhcyBhIG1heCBvZiA2NCBpbnB1dCBmbG93cy5cclxuICAgICAqL1xyXG4gICAgaW5wdXRTaWduYWxDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQSBibG9jayB0aGF0IHdhaXRzIGZvciBhbGwgaW5wdXQgZmxvd3MgdG8gYmUgYWN0aXZhdGVkIGJlZm9yZSBhY3RpdmF0aW5nIGl0cyBvdXRwdXQgZmxvdy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhXYWl0QWxsQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBSZXNldHMgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzZXQ6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjpXaGVuIHRoZSBsYXN0IG1pc3NpbmcgZmxvdyBpcyBhY3RpdmF0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbXBsZXRlZDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgbnVtYmVyIG9mIHJlbWFpbmluZyBpbnB1dHMgdG8gYmUgYWN0aXZhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtYWluaW5nSW5wdXRzOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxGbG93R3JhcGhJbnRlZ2VyPjtcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgaW5wdXQgc2lnbmFsc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5GbG93czogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIF9jYWNoZWRBY3RpdmF0aW9uU3RhdGU6IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBjb25maWc6IElGbG93R3JhcGhXYWl0QWxsQmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0ID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxJbnB1dChcInJlc2V0XCIpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxPdXRwdXQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdJbnB1dHMgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInJlbWFpbmluZ0lucHV0c1wiLCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIG5ldyBGbG93R3JhcGhJbnRlZ2VyKHRoaXMuY29uZmlnLmlucHV0U2lnbmFsQ291bnQgfHwgMCkpO1xyXG4gICAgICAgIC8vIFRoZSBmaXJzdCBpbkZsb3cgaXMgdGhlIGRlZmF1bHQgaW5wdXQgc2lnbmFsIGFsbCBleGVjdXRpb24gYmxvY2tzIGhhdmVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmlucHV0U2lnbmFsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmluRmxvd3MucHVzaCh0aGlzLl9yZWdpc3RlclNpZ25hbElucHV0KGBpbl8ke2l9YCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBubyBuZWVkIGZvciBpblxyXG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJTaWduYWxJbnB1dChcImluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEN1cnJlbnRBY3RpdmF0aW9uU3RhdGUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuX2NhY2hlZEFjdGl2YXRpb25TdGF0ZTtcclxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUubGVuZ3RoID0gMDtcclxuICAgICAgICBpZiAoIWNvbnRleHQuX2hhc0V4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiYWN0aXZhdGlvblN0YXRlXCIpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcuaW5wdXRTaWduYWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUucHVzaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0QWN0aXZhdGlvblN0YXRlID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJhY3RpdmF0aW9uU3RhdGVcIiwgW10gYXMgYm9vbGVhbltdKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZXh0QWN0aXZhdGlvblN0YXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUucHVzaChjb250ZXh0QWN0aXZhdGlvblN0YXRlW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWN0aXZhdGlvblN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBjYWxsaW5nU2lnbmFsOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5fZ2V0Q3VycmVudEFjdGl2YXRpb25TdGF0ZShjb250ZXh0KTtcclxuICAgICAgICBpZiAoY2FsbGluZ1NpZ25hbCA9PT0gdGhpcy5yZXNldCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmlucHV0U2lnbmFsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5GbG93cy5pbmRleE9mKGNhbGxpbmdTaWduYWwpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdJbnB1dHMuc2V0VmFsdWUobmV3IEZsb3dHcmFwaEludGVnZXIoYWN0aXZhdGlvblN0YXRlLmZpbHRlcigodikgPT4gIXYpLmxlbmd0aCksIGNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcImFjdGl2YXRpb25TdGF0ZVwiLCBhY3RpdmF0aW9uU3RhdGUuc2xpY2UoKSk7XHJcblxyXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25maWcuaW5wdXRTaWduYWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGVbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxpbmdTaWduYWwgIT09IHRoaXMucmVzZXQgJiYgdGhpcy5vdXQuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuV2FpdEFsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBibG9jayBpbnRvIGEgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcuaW5wdXRGbG93cyA9IHRoaXMuY29uZmlnLmlucHV0U2lnbmFsQ291bnQ7XHJcbiAgICB9XHJcbn1cclxuUmVnaXN0ZXJDbGFzcyhGbG93R3JhcGhCbG9ja05hbWVzLldhaXRBbGwsIEZsb3dHcmFwaFdhaXRBbGxCbG9jayk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==