"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_AudioV2_webAudio_webAudioMainBus_js"],{

/***/ "../core/dist/AudioV2/abstractAudio/abstractAudioBus.js":
/*!**************************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/abstractAudioBus.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractAudioBus: () => (/* binding */ AbstractAudioBus)
/* harmony export */ });
/* harmony import */ var _abstractAudioOutNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioOutNode */ "../core/dist/AudioV2/abstractAudio/abstractAudioOutNode.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class representing an audio bus with volume control.
 *
 * An audio bus is a node in the audio graph that can have multiple inputs and outputs. It is typically used to group
 * sounds together and apply effects to them.
 */
class AbstractAudioBus extends _abstractAudioOutNode__WEBPACK_IMPORTED_MODULE_0__.AbstractAudioOutNode {
    constructor(name, engine) {
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */);
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

/***/ }),

/***/ "../core/dist/AudioV2/abstractAudio/mainAudioBus.js":
/*!**********************************************************!*\
  !*** ../core/dist/AudioV2/abstractAudio/mainAudioBus.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainAudioBus: () => (/* binding */ MainAudioBus)
/* harmony export */ });
/* harmony import */ var _abstractAudioBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractAudioBus */ "../core/dist/AudioV2/abstractAudio/abstractAudioBus.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * Abstract class representing a main audio bus.
 *
 * Main audio buses are the last bus in the audio graph.
 *
 * Unlike {@link AudioBus} instances, `MainAudioBus` instances have no spatial audio and stereo output capabilities,
 * and they cannot be connected downstream to another audio bus. They only connect downstream to the audio engine's
 * main output.
 *
 * Main audio buses are created by the {@link CreateMainAudioBusAsync} function.
 */
class MainAudioBus extends _abstractAudioBus__WEBPACK_IMPORTED_MODULE_0__.AbstractAudioBus {
    constructor(name, engine) {
        super(name, engine);
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

/***/ }),

/***/ "../core/dist/AudioV2/webAudio/webAudioMainBus.js":
/*!********************************************************!*\
  !*** ../core/dist/AudioV2/webAudio/webAudioMainBus.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _WebAudioMainBus: () => (/* binding */ _WebAudioMainBus)
/* harmony export */ });
/* harmony import */ var _abstractAudio_mainAudioBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractAudio/mainAudioBus */ "../core/dist/AudioV2/abstractAudio/mainAudioBus.js");
/* harmony import */ var _subNodes_webAudioBaseSubGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subNodes/webAudioBaseSubGraph */ "../core/dist/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/** @internal */
class _WebAudioMainBus extends _abstractAudio_mainAudioBus__WEBPACK_IMPORTED_MODULE_0__.MainAudioBus {
    /** @internal */
    constructor(name, engine) {
        super(name, engine);
        this._subGraph = new _WebAudioMainBus._SubGraph(this);
    }
    /** @internal */
    async _initAsync(options) {
        await this._subGraph.initAsync(options);
        if (this.engine.mainOut) {
            if (!this._connect(this.engine.mainOut)) {
                throw new Error("Connect failed");
            }
        }
        this.engine._addMainBus(this);
    }
    /** @internal */
    dispose() {
        super.dispose();
        this.engine._removeMainBus(this);
    }
    /** @internal */
    get _inNode() {
        return this._subGraph._inNode;
    }
    /** @internal */
    get _outNode() {
        return this._subGraph._outNode;
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    /** @internal */
    getClassName() {
        return "_WebAudioMainBus";
    }
}
_WebAudioMainBus._SubGraph = class extends _subNodes_webAudioBaseSubGraph__WEBPACK_IMPORTED_MODULE_1__._WebAudioBaseSubGraph {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0F1ZGlvVjJfd2ViQXVkaW9fd2ViQXVkaW9NYWluQnVzX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBTUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQVNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL2Fic3RyYWN0QXVkaW8vYWJzdHJhY3RBdWRpb0J1cy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0F1ZGlvVjIvYWJzdHJhY3RBdWRpby9tYWluQXVkaW9CdXMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9BdWRpb1YyL3dlYkF1ZGlvL3dlYkF1ZGlvTWFpbkJ1cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb05vZGVUeXBlIH0gZnJvbSBcIi4vYWJzdHJhY3RBdWRpb05vZGVcIjtcbmltcG9ydCB0eXBlIHsgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgeyBBYnN0cmFjdEF1ZGlvT3V0Tm9kZSB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9PdXROb2RlXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0QXVkaW9CdXNPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0QXVkaW9PdXROb2RlT3B0aW9ucyB7fVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIHJlcHJlc2VudGluZyBhbiBhdWRpbyBidXMgd2l0aCB2b2x1bWUgY29udHJvbC5cbiAqXG4gKiBBbiBhdWRpbyBidXMgaXMgYSBub2RlIGluIHRoZSBhdWRpbyBncmFwaCB0aGF0IGNhbiBoYXZlIG11bHRpcGxlIGlucHV0cyBhbmQgb3V0cHV0cy4gSXQgaXMgdHlwaWNhbGx5IHVzZWQgdG8gZ3JvdXBcbiAqIHNvdW5kcyB0b2dldGhlciBhbmQgYXBwbHkgZWZmZWN0cyB0byB0aGVtLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBdWRpb0J1cyBleHRlbmRzIEFic3RyYWN0QXVkaW9PdXROb2RlIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IEF1ZGlvRW5naW5lVjIpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZW5naW5lLCBBdWRpb05vZGVUeXBlLkhBU19JTlBVVFNfQU5EX09VVFBVVFMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFic3RyYWN0QXVkaW9CdXMgfSBmcm9tIFwiLi9hYnN0cmFjdEF1ZGlvQnVzXCI7XG5pbXBvcnQgdHlwZSB7IEF1ZGlvRW5naW5lVjIgfSBmcm9tIFwiLi9hdWRpb0VuZ2luZVYyXCI7XG5pbXBvcnQgdHlwZSB7IElBYnN0cmFjdEF1ZGlvQnVzT3B0aW9ucyB9IGZyb20gXCIuL2Fic3RyYWN0QXVkaW9CdXNcIjtcblxuLyoqXG4gKiBPcHRpb25zIGZvciBjcmVhdGluZyBhIG1haW4gYXVkaW8gYnVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElNYWluQXVkaW9CdXNPcHRpb25zIGV4dGVuZHMgSUFic3RyYWN0QXVkaW9CdXNPcHRpb25zIHt9XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgcmVwcmVzZW50aW5nIGEgbWFpbiBhdWRpbyBidXMuXG4gKlxuICogTWFpbiBhdWRpbyBidXNlcyBhcmUgdGhlIGxhc3QgYnVzIGluIHRoZSBhdWRpbyBncmFwaC5cbiAqXG4gKiBVbmxpa2Uge0BsaW5rIEF1ZGlvQnVzfSBpbnN0YW5jZXMsIGBNYWluQXVkaW9CdXNgIGluc3RhbmNlcyBoYXZlIG5vIHNwYXRpYWwgYXVkaW8gYW5kIHN0ZXJlbyBvdXRwdXQgY2FwYWJpbGl0aWVzLFxuICogYW5kIHRoZXkgY2Fubm90IGJlIGNvbm5lY3RlZCBkb3duc3RyZWFtIHRvIGFub3RoZXIgYXVkaW8gYnVzLiBUaGV5IG9ubHkgY29ubmVjdCBkb3duc3RyZWFtIHRvIHRoZSBhdWRpbyBlbmdpbmUnc1xuICogbWFpbiBvdXRwdXQuXG4gKlxuICogTWFpbiBhdWRpbyBidXNlcyBhcmUgY3JlYXRlZCBieSB0aGUge0BsaW5rIENyZWF0ZU1haW5BdWRpb0J1c0FzeW5jfSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1haW5BdWRpb0J1cyBleHRlbmRzIEFic3RyYWN0QXVkaW9CdXMge1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGVuZ2luZTogQXVkaW9FbmdpbmVWMikge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RBdWRpb05vZGUgfSBmcm9tIFwiLi4vYWJzdHJhY3RBdWRpby9hYnN0cmFjdEF1ZGlvTm9kZVwiO1xuaW1wb3J0IHR5cGUgeyBJTWFpbkF1ZGlvQnVzT3B0aW9ucyB9IGZyb20gXCIuLi9hYnN0cmFjdEF1ZGlvL21haW5BdWRpb0J1c1wiO1xuaW1wb3J0IHsgTWFpbkF1ZGlvQnVzIH0gZnJvbSBcIi4uL2Fic3RyYWN0QXVkaW8vbWFpbkF1ZGlvQnVzXCI7XG5pbXBvcnQgeyBfV2ViQXVkaW9CYXNlU3ViR3JhcGggfSBmcm9tIFwiLi9zdWJOb2Rlcy93ZWJBdWRpb0Jhc2VTdWJHcmFwaFwiO1xuaW1wb3J0IHR5cGUgeyBfV2ViQXVkaW9FbmdpbmUgfSBmcm9tIFwiLi93ZWJBdWRpb0VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJV2ViQXVkaW9Jbk5vZGUsIElXZWJBdWRpb1N1cGVyTm9kZSB9IGZyb20gXCIuL3dlYkF1ZGlvTm9kZVwiO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgX1dlYkF1ZGlvTWFpbkJ1cyBleHRlbmRzIE1haW5BdWRpb0J1cyBpbXBsZW1lbnRzIElXZWJBdWRpb1N1cGVyTm9kZSB7XG4gICAgcHJvdGVjdGVkIF9zdWJHcmFwaDogX1dlYkF1ZGlvQmFzZVN1YkdyYXBoO1xuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZTtcblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBlbmdpbmU6IF9XZWJBdWRpb0VuZ2luZSkge1xuICAgICAgICBzdXBlcihuYW1lLCBlbmdpbmUpO1xuXG4gICAgICAgIHRoaXMuX3N1YkdyYXBoID0gbmV3IF9XZWJBdWRpb01haW5CdXMuX1N1YkdyYXBoKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2luaXRBc3luYyhvcHRpb25zOiBQYXJ0aWFsPElNYWluQXVkaW9CdXNPcHRpb25zPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLl9zdWJHcmFwaC5pbml0QXN5bmMob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLm1haW5PdXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdCh0aGlzLmVuZ2luZS5tYWluT3V0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3QgZmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX2FkZE1haW5CdXModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG5cbiAgICAgICAgdGhpcy5lbmdpbmUuX3JlbW92ZU1haW5CdXModGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX2luTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YkdyYXBoLl9pbk5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgX291dE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJHcmFwaC5fb3V0Tm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHN1cGVyLl9jb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5jb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX2Rpc2Nvbm5lY3Qobm9kZTogSVdlYkF1ZGlvSW5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpc2Nvbm5lY3RlZCA9IHN1cGVyLl9kaXNjb25uZWN0KG5vZGUpO1xuXG4gICAgICAgIGlmICghZGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5faW5Ob2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9vdXROb2RlPy5kaXNjb25uZWN0KG5vZGUuX2luTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJfV2ViQXVkaW9NYWluQnVzXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX1N1YkdyYXBoID0gY2xhc3MgZXh0ZW5kcyBfV2ViQXVkaW9CYXNlU3ViR3JhcGgge1xuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgX293bmVyOiBfV2ViQXVkaW9NYWluQnVzO1xuXG4gICAgICAgIHByb3RlY3RlZCBnZXQgX2Rvd25zdHJlYW1Ob2RlcygpOiBOdWxsYWJsZTxTZXQ8QWJzdHJhY3RBdWRpb05vZGU+PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXIuX2Rvd25zdHJlYW1Ob2RlcyA/PyBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=