"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Execution_flowGraphConsoleLogBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js":
/*!***************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphConsoleLogBlock: () => (/* binding */ FlowGraphConsoleLogBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Block that logs a message to the console.
 */
class FlowGraphConsoleLogBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config) {
        super(config);
        this.message = this.registerDataInput("message", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.logType = this.registerDataInput("logType", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, "log");
        if (config?.messageTemplate) {
            const matches = this._getTemplateMatches(config.messageTemplate);
            for (const match of matches) {
                this.registerDataInput(match, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
            }
        }
    }
    /**
     * @internal
     */
    _execute(context) {
        const typeValue = this.logType.getValue(context);
        const messageValue = this._getMessageValue(context);
        if (typeValue === "warn") {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Warn(messageValue);
        }
        else if (typeValue === "error") {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Error(messageValue);
        }
        else {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Log(messageValue);
        }
        // activate the output flow block
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */
    getClassName() {
        return "FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */;
    }
    _getMessageValue(context) {
        if (this.config?.messageTemplate) {
            let template = this.config.messageTemplate;
            const matches = this._getTemplateMatches(template);
            for (const match of matches) {
                const value = this.getDataInput(match)?.getValue(context);
                if (value !== undefined) {
                    // replace all
                    template = template.replace(new RegExp(`\\{${match}\\}`, "g"), value.toString());
                }
            }
            return template;
        }
        else {
            return this.message.getValue(context);
        }
    }
    _getTemplateMatches(template) {
        const regex = /\{([^}]+)\}/g;
        const matches = [];
        let match;
        while ((match = regex.exec(template)) !== null) {
            matches.push(match[1]);
        }
        return matches;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */, FlowGraphConsoleLogBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRXhlY3V0aW9uX2Zsb3dHcmFwaENvbnNvbGVMb2dCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTs7QUFFQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9FeGVjdXRpb24vZmxvd0dyYXBoQ29uc29sZUxvZ0Jsb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbFwiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZUFueSB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIGNvbnNvbGUgbG9nIGJsb2NrLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoQ29uc29sZUxvZ0Jsb2NrQ29uZmlndXJhdGlvbiBleHRlbmRzIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvcHRpb25hbCBtZXNzYWdlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGxvZyBtZXNzYWdlLlxyXG4gICAgICogSWYgcHJvdmlkZWQsIHRoZSB0ZW1wbGF0ZSBjYW4gaG9sZCBwbGFjZWhvbGRlcnMgZm9yIHRoZSBtZXNzYWdlIHZhbHVlLlxyXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIHRoZSB0ZW1wbGF0ZSBpcyBcIlRoZSBtZXNzYWdlIGlzOiBcXHtkYXRhXFx9XCIsIGEgbmV3IGRhdGEgaW5wdXQgY2FsbGVkIFwiZGF0YVwiIHdpbGwgYmUgY3JlYXRlZC5cclxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgbWVzc2FnZSBpbnB1dCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgcGxhY2Vob2xkZXIgaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAgICovXHJcbiAgICBtZXNzYWdlVGVtcGxhdGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCbG9jayB0aGF0IGxvZ3MgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvbnNvbGVMb2dCbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIFdpbGwgYmUgaWdub3JlZCBpZiBhIG1lc3NhZ2UgdGVtcGxhdGUgaXMgcHJvdmlkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBtZXNzYWdlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIGxvZyB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbG9nVHlwZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248XCJsb2dcIiB8IFwid2FyblwiIHwgXCJlcnJvclwiPjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaENvbnNvbGVMb2dCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJtZXNzYWdlXCIsIFJpY2hUeXBlQW55KTtcclxuICAgICAgICB0aGlzLmxvZ1R5cGUgPSB0aGlzLnJlZ2lzdGVyRGF0YUlucHV0KFwibG9nVHlwZVwiLCBSaWNoVHlwZUFueSwgXCJsb2dcIik7XHJcbiAgICAgICAgaWYgKGNvbmZpZz8ubWVzc2FnZVRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9nZXRUZW1wbGF0ZU1hdGNoZXMoY29uZmlnLm1lc3NhZ2VUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRhdGFJbnB1dChtYXRjaCwgUmljaFR5cGVBbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdHlwZVZhbHVlID0gdGhpcy5sb2dUeXBlLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IHRoaXMuX2dldE1lc3NhZ2VWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICBpZiAodHlwZVZhbHVlID09PSBcIndhcm5cIikge1xyXG4gICAgICAgICAgICBMb2dnZXIuV2FybihtZXNzYWdlVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZVZhbHVlID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLkVycm9yKG1lc3NhZ2VWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTG9nZ2VyLkxvZyhtZXNzYWdlVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhY3RpdmF0ZSB0aGUgb3V0cHV0IGZsb3cgYmxvY2tcclxuICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBGbG93R3JhcGhCbG9ja05hbWVzLkNvbnNvbGVMb2c7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TWVzc2FnZVZhbHVlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZz8ubWVzc2FnZVRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nID0gdGhpcy5jb25maWcubWVzc2FnZVRlbXBsYXRlO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5fZ2V0VGVtcGxhdGVNYXRjaGVzKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtYXRjaCBvZiBtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0RGF0YUlucHV0KG1hdGNoKT8uZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFx7JHttYXRjaH1cXFxcfWAsIFwiZ1wiKSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UuZ2V0VmFsdWUoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRlbXBsYXRlTWF0Y2hlcyh0ZW1wbGF0ZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL1xceyhbXn1dKylcXH0vZztcclxuICAgICAgICBjb25zdCBtYXRjaGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuICAgICAgICB3aGlsZSAoKG1hdGNoID0gcmVnZXguZXhlYyh0ZW1wbGF0ZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaFsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29uc29sZUxvZywgRmxvd0dyYXBoQ29uc29sZUxvZ0Jsb2NrKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9