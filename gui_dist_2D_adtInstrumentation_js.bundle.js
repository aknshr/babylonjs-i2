"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["gui_dist_2D_adtInstrumentation_js"],{

/***/ "../gui/dist/2D/adtInstrumentation.js":
/*!********************************************!*\
  !*** ../gui/dist/2D/adtInstrumentation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedDynamicTextureInstrumentation: () => (/* binding */ AdvancedDynamicTextureInstrumentation)
/* harmony export */ });
/* harmony import */ var core_Misc_perfCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/perfCounter */ "../core/dist/Misc/perfCounter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * This class can be used to get instrumentation data from a AdvancedDynamicTexture object
 */
class AdvancedDynamicTextureInstrumentation {
    // Properties
    /**
     * Gets the perf counter used to capture render time
     */
    get renderTimeCounter() {
        return this._renderTime;
    }
    /**
     * Gets the perf counter used to capture layout time
     */
    get layoutTimeCounter() {
        return this._layoutTime;
    }
    /**
     * Enable or disable the render time capture
     */
    get captureRenderTime() {
        return this._captureRenderTime;
    }
    set captureRenderTime(value) {
        if (value === this._captureRenderTime) {
            return;
        }
        this._captureRenderTime = value;
        if (value) {
            this._onBeginRenderObserver = this.texture.onBeginRenderObservable.add(() => {
                this._renderTime.beginMonitoring();
            });
            this._onEndRenderObserver = this.texture.onEndRenderObservable.add(() => {
                this._renderTime.endMonitoring(true);
            });
        }
        else {
            this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver);
            this._onBeginRenderObserver = null;
            this.texture.onEndRenderObservable.remove(this._onEndRenderObserver);
            this._onEndRenderObserver = null;
        }
    }
    /**
     * Enable or disable the layout time capture
     */
    get captureLayoutTime() {
        return this._captureLayoutTime;
    }
    set captureLayoutTime(value) {
        if (value === this._captureLayoutTime) {
            return;
        }
        this._captureLayoutTime = value;
        if (value) {
            this._onBeginLayoutObserver = this.texture.onBeginLayoutObservable.add(() => {
                this._layoutTime.beginMonitoring();
            });
            this._onEndLayoutObserver = this.texture.onEndLayoutObservable.add(() => {
                this._layoutTime.endMonitoring(true);
            });
        }
        else {
            this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver);
            this._onBeginLayoutObserver = null;
            this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver);
            this._onEndLayoutObserver = null;
        }
    }
    /**
     * Instantiates a new advanced dynamic texture instrumentation.
     * This class can be used to get instrumentation data from an AdvancedDynamicTexture object
     * @param texture Defines the AdvancedDynamicTexture to instrument
     */
    constructor(
    /**
     * Define the instrumented AdvancedDynamicTexture.
     */
    texture) {
        this.texture = texture;
        this._captureRenderTime = false;
        this._renderTime = new core_Misc_perfCounter__WEBPACK_IMPORTED_MODULE_0__.PerfCounter();
        this._captureLayoutTime = false;
        this._layoutTime = new core_Misc_perfCounter__WEBPACK_IMPORTED_MODULE_0__.PerfCounter();
        // Observers
        this._onBeginRenderObserver = null;
        this._onEndRenderObserver = null;
        this._onBeginLayoutObserver = null;
        this._onEndLayoutObserver = null;
    }
    /**
     * Dispose and release associated resources.
     */
    dispose() {
        this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver);
        this._onBeginRenderObserver = null;
        this.texture.onEndRenderObservable.remove(this._onEndRenderObserver);
        this._onEndRenderObserver = null;
        this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver);
        this._onBeginLayoutObserver = null;
        this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver);
        this._onEndLayoutObserver = null;
        this.texture = null;
    }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpX2Rpc3RfMkRfYWR0SW5zdHJ1bWVudGF0aW9uX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQWFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQWhHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF1RkE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvZ3VpL3NyYy8yRC9hZHRJbnN0cnVtZW50YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGVyZkNvdW50ZXIgfSBmcm9tIFwiY29yZS9NaXNjL3BlcmZDb3VudGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSURpc3Bvc2FibGUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBBZHZhbmNlZER5bmFtaWNUZXh0dXJlIH0gZnJvbSBcIi4vYWR2YW5jZWREeW5hbWljVGV4dHVyZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgY2FuIGJlIHVzZWQgdG8gZ2V0IGluc3RydW1lbnRhdGlvbiBkYXRhIGZyb20gYSBBZHZhbmNlZER5bmFtaWNUZXh0dXJlIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkRHluYW1pY1RleHR1cmVJbnN0cnVtZW50YXRpb24gaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIF9jYXB0dXJlUmVuZGVyVGltZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyVGltZSA9IG5ldyBQZXJmQ291bnRlcigpO1xyXG5cclxuICAgIHByaXZhdGUgX2NhcHR1cmVMYXlvdXRUaW1lID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9sYXlvdXRUaW1lID0gbmV3IFBlcmZDb3VudGVyKCk7XHJcblxyXG4gICAgLy8gT2JzZXJ2ZXJzXHJcbiAgICBwcml2YXRlIF9vbkJlZ2luUmVuZGVyT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPEFkdmFuY2VkRHluYW1pY1RleHR1cmU+PiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9vbkVuZFJlbmRlck9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxBZHZhbmNlZER5bmFtaWNUZXh0dXJlPj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfb25CZWdpbkxheW91dE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxBZHZhbmNlZER5bmFtaWNUZXh0dXJlPj4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfb25FbmRMYXlvdXRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8QWR2YW5jZWREeW5hbWljVGV4dHVyZT4+ID0gbnVsbDtcclxuXHJcbiAgICAvLyBQcm9wZXJ0aWVzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBwZXJmIGNvdW50ZXIgdXNlZCB0byBjYXB0dXJlIHJlbmRlciB0aW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmVuZGVyVGltZUNvdW50ZXIoKTogUGVyZkNvdW50ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgcGVyZiBjb3VudGVyIHVzZWQgdG8gY2FwdHVyZSBsYXlvdXQgdGltZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxheW91dFRpbWVDb3VudGVyKCk6IFBlcmZDb3VudGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0VGltZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSByZW5kZXIgdGltZSBjYXB0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2FwdHVyZVJlbmRlclRpbWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVSZW5kZXJUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY2FwdHVyZVJlbmRlclRpbWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX2NhcHR1cmVSZW5kZXJUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhcHR1cmVSZW5kZXJUaW1lID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkJlZ2luUmVuZGVyT2JzZXJ2ZXIgPSB0aGlzLnRleHR1cmUub25CZWdpblJlbmRlck9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlclRpbWUuYmVnaW5Nb25pdG9yaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fb25FbmRSZW5kZXJPYnNlcnZlciA9IHRoaXMudGV4dHVyZS5vbkVuZFJlbmRlck9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlclRpbWUuZW5kTW9uaXRvcmluZyh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLm9uQmVnaW5SZW5kZXJPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkJlZ2luUmVuZGVyT2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkJlZ2luUmVuZGVyT2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUub25FbmRSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkVuZFJlbmRlck9ic2VydmVyKTtcclxuICAgICAgICAgICAgdGhpcy5fb25FbmRSZW5kZXJPYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGxheW91dCB0aW1lIGNhcHR1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjYXB0dXJlTGF5b3V0VGltZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FwdHVyZUxheW91dFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjYXB0dXJlTGF5b3V0VGltZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fY2FwdHVyZUxheW91dFRpbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FwdHVyZUxheW91dFRpbWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQmVnaW5MYXlvdXRPYnNlcnZlciA9IHRoaXMudGV4dHVyZS5vbkJlZ2luTGF5b3V0T2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGF5b3V0VGltZS5iZWdpbk1vbml0b3JpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9vbkVuZExheW91dE9ic2VydmVyID0gdGhpcy50ZXh0dXJlLm9uRW5kTGF5b3V0T2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGF5b3V0VGltZS5lbmRNb25pdG9yaW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUub25CZWdpbkxheW91dE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQmVnaW5MYXlvdXRPYnNlcnZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQmVnaW5MYXlvdXRPYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5vbkVuZExheW91dE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRW5kTGF5b3V0T2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkVuZExheW91dE9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbnRpYXRlcyBhIG5ldyBhZHZhbmNlZCBkeW5hbWljIHRleHR1cmUgaW5zdHJ1bWVudGF0aW9uLlxyXG4gICAgICogVGhpcyBjbGFzcyBjYW4gYmUgdXNlZCB0byBnZXQgaW5zdHJ1bWVudGF0aW9uIGRhdGEgZnJvbSBhbiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHRleHR1cmUgRGVmaW5lcyB0aGUgQWR2YW5jZWREeW5hbWljVGV4dHVyZSB0byBpbnN0cnVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmUgdGhlIGluc3RydW1lbnRlZCBBZHZhbmNlZER5bmFtaWNUZXh0dXJlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0ZXh0dXJlOiBBZHZhbmNlZER5bmFtaWNUZXh0dXJlXHJcbiAgICApIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIGFuZCByZWxlYXNlIGFzc29jaWF0ZWQgcmVzb3VyY2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUub25CZWdpblJlbmRlck9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQmVnaW5SZW5kZXJPYnNlcnZlcik7XHJcbiAgICAgICAgdGhpcy5fb25CZWdpblJlbmRlck9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHR1cmUub25FbmRSZW5kZXJPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkVuZFJlbmRlck9ic2VydmVyKTtcclxuICAgICAgICB0aGlzLl9vbkVuZFJlbmRlck9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHR1cmUub25CZWdpbkxheW91dE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQmVnaW5MYXlvdXRPYnNlcnZlcik7XHJcbiAgICAgICAgdGhpcy5fb25CZWdpbkxheW91dE9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHR1cmUub25FbmRMYXlvdXRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkVuZExheW91dE9ic2VydmVyKTtcclxuICAgICAgICB0aGlzLl9vbkVuZExheW91dE9ic2VydmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgKDxhbnk+dGhpcy50ZXh0dXJlKSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==