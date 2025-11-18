"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_flowGraphGetAssetBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js":
/*!********************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphGetAssetBlock: () => (/* binding */ FlowGraphGetAssetBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphAssetsContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphAssetsContext */ "../core/dist/FlowGraph/flowGraphAssetsContext.js");
/* harmony import */ var core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/FlowGraph/CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* harmony import */ var core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/FlowGraph/utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * A block that will deliver an asset as an output, based on its type and place in the assets index.
 *
 * The assets are loaded from the assetsContext defined in the context running this block. The assetsContext is a class extending AbstractClass,
 * meaning it can be a Scene, an AssetsContainers, and any other class that extends AbstractClass.
 */
class FlowGraphGetAssetBlock extends core_FlowGraph_flowGraphBlock__WEBPACK_IMPORTED_MODULE_1__.FlowGraphBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(config);
        this.config = config;
        this.type = this.registerDataInput("type", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny, config.type);
        this.value = this.registerDataOutput("value", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny);
        this.index = this.registerDataInput("index", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_2__.RichTypeAny, new core_FlowGraph_CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_4__.FlowGraphInteger((0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_5__.getNumericValue)(config.index ?? -1)));
    }
    _updateOutputs(context) {
        const type = this.type.getValue(context);
        const index = this.index.getValue(context);
        // get the asset from the context
        const asset = (0,core_FlowGraph_flowGraphAssetsContext__WEBPACK_IMPORTED_MODULE_0__.GetFlowGraphAssetWithType)(context.assetsContext, type, (0,core_FlowGraph_utils__WEBPACK_IMPORTED_MODULE_5__.getNumericValue)(index), this.config.useIndexAsUniqueId);
        this.value.setValue(asset, context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphGetAssetBlock" /* FlowGraphBlockNames.GetAsset */;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("FlowGraphGetAssetBlock" /* FlowGraphBlockNames.GetAsset */, FlowGraphGetAssetBlock);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9mbG93R3JhcGhHZXRBc3NldEJsb2NrX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBdUJBOzs7OztBQUtBO0FBQ0E7QUFnQkE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL0RhdGEvZmxvd0dyYXBoR2V0QXNzZXRCbG9jay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFzc2V0VHlwZSwgRmxvd0dyYXBoQXNzZXRUeXBlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEFzc2V0c0NvbnRleHRcIjtcbmltcG9ydCB7IEdldEZsb3dHcmFwaEFzc2V0V2l0aFR5cGUgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQXNzZXRzQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFJpY2hUeXBlQW55IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaE51bWJlciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0TnVtZXJpY1ZhbHVlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3V0aWxzXCI7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIGdldCBhc3NldCBibG9jay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoR2V0QXNzZXRCbG9ja0NvbmZpZ3VyYXRpb248VD4gZXh0ZW5kcyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYXNzZXQgdGhhdCB3aWxsIGJlIHJldHJpZXZlZC5cbiAgICAgKi9cbiAgICB0eXBlOiBUO1xuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBvZiB0aGUgYXNzZXQgaW4gdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXkgaW4gdGhlIGFzc2V0cyBjb250ZXh0LlxuICAgICAqIElmIG5vdCBwcm92aWRlZCB5b3UgY2FuIHN0aWxsIGNoYW5nZSBpdCB1c2luZyB0aGUgaW5wdXQgY29ubmVjdGlvbi5cbiAgICAgKi9cbiAgICBpbmRleD86IG51bWJlciB8IEZsb3dHcmFwaEludGVnZXI7XG5cbiAgICAvKipcbiAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgaW5zdGVhZCBvZiB0aGUgaW5kZXggaW4gdGhlIGFycmF5IGl0IHdpbGwgc2VhcmNoIGZvciB0aGUgdW5pcXVlIGlkIG9mIHRoZSBhc3NldC5cbiAgICAgKiBUaGUgdmFsdWUgb2YgaW5kZXggd2lsbCBiZSB1c2VkIGFzIHRoZSB1bmlxdWUgaWQuXG4gICAgICovXG4gICAgdXNlSW5kZXhBc1VuaXF1ZUlkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIGJsb2NrIHRoYXQgd2lsbCBkZWxpdmVyIGFuIGFzc2V0IGFzIGFuIG91dHB1dCwgYmFzZWQgb24gaXRzIHR5cGUgYW5kIHBsYWNlIGluIHRoZSBhc3NldHMgaW5kZXguXG4gKlxuICogVGhlIGFzc2V0cyBhcmUgbG9hZGVkIGZyb20gdGhlIGFzc2V0c0NvbnRleHQgZGVmaW5lZCBpbiB0aGUgY29udGV4dCBydW5uaW5nIHRoaXMgYmxvY2suIFRoZSBhc3NldHNDb250ZXh0IGlzIGEgY2xhc3MgZXh0ZW5kaW5nIEFic3RyYWN0Q2xhc3MsXG4gKiBtZWFuaW5nIGl0IGNhbiBiZSBhIFNjZW5lLCBhbiBBc3NldHNDb250YWluZXJzLCBhbmQgYW55IG90aGVyIGNsYXNzIHRoYXQgZXh0ZW5kcyBBYnN0cmFjdENsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoR2V0QXNzZXRCbG9jazxUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlPiBleHRlbmRzIEZsb3dHcmFwaEJsb2NrIHtcbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPE51bGxhYmxlPEFzc2V0VHlwZTxUPj4+O1xuXG4gICAgLyoqXG4gICAgICogSW5wdXQgY29ubmVjdGlvbjogVGhlIHR5cGUgb2YgdGhlIGFzc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPjtcblxuICAgIC8qKlxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBpbmRleCBvZiB0aGUgYXNzZXQgaW4gdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXkgaW4gdGhlIGFzc2V0cyBjb250ZXh0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBpbmRleDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Rmxvd0dyYXBoTnVtYmVyPjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGNvbmZpZzogSUZsb3dHcmFwaEdldEFzc2V0QmxvY2tDb25maWd1cmF0aW9uPFQ+XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJ0eXBlXCIsIFJpY2hUeXBlQW55LCBjb25maWcudHlwZSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInZhbHVlXCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMucmVnaXN0ZXJEYXRhSW5wdXQoXCJpbmRleFwiLCBSaWNoVHlwZUFueSwgbmV3IEZsb3dHcmFwaEludGVnZXIoZ2V0TnVtZXJpY1ZhbHVlKGNvbmZpZy5pbmRleCA/PyAtMSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlLmdldFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXguZ2V0VmFsdWUoY29udGV4dCk7XG4gICAgICAgIC8vIGdldCB0aGUgYXNzZXQgZnJvbSB0aGUgY29udGV4dFxuICAgICAgICBjb25zdCBhc3NldCA9IEdldEZsb3dHcmFwaEFzc2V0V2l0aFR5cGUoY29udGV4dC5hc3NldHNDb250ZXh0LCB0eXBlLCBnZXROdW1lcmljVmFsdWUoaW5kZXgpLCB0aGlzLmNvbmZpZy51c2VJbmRleEFzVW5pcXVlSWQpO1xuICAgICAgICB0aGlzLnZhbHVlLnNldFZhbHVlKGFzc2V0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0QXNzZXQ7XG4gICAgfVxufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0QXNzZXQsIEZsb3dHcmFwaEdldEFzc2V0QmxvY2spO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9