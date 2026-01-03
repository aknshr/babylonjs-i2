"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphJsonPointerParserBlock_js"],{

/***/ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js":
/*!******************************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphJsonPointerParserBlock: () => (/* binding */ FlowGraphJsonPointerParserBlock)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphPathConverterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphPathConverterComponent */ "../core/dist/FlowGraph/flowGraphPathConverterComponent.js");
/* harmony import */ var core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flowGraphCachedOperationBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * This block will take a JSON pointer and parse it to get the value from the JSON object.
 * The output is an object and a property name.
 * Optionally, the block can also output the value of the property. This is configurable.
 */
class FlowGraphJsonPointerParserBlock extends _flowGraphCachedOperationBlock__WEBPACK_IMPORTED_MODULE_5__.FlowGraphCachedOperationBlock {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        super(core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, config);
        this.config = config;
        this.object = this.registerDataOutput("object", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.propertyName = this.registerDataOutput("propertyName", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny);
        this.setterFunction = this.registerDataOutput("setFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, this._setPropertyValue.bind(this));
        this.getterFunction = this.registerDataOutput("getFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, this._getPropertyValue.bind(this));
        this.generateAnimationsFunction = this.registerDataOutput("generateAnimationsFunction", core_FlowGraph_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeAny, this._getInterpolationAnimationPropertyInfo.bind(this));
        this.templateComponent = new core_FlowGraph_flowGraphPathConverterComponent__WEBPACK_IMPORTED_MODULE_0__.FlowGraphPathConverterComponent(config.jsonPointer, this);
    }
    _doOperation(context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        const value = accessorContainer.info.get(accessorContainer.object);
        const object = accessorContainer.info.getTarget?.(accessorContainer.object);
        const propertyName = accessorContainer.info.getPropertyName?.[0](accessorContainer.object);
        if (!object) {
            throw new Error("Object is undefined");
        }
        else {
            this.object.setValue(object, context);
            if (propertyName) {
                this.propertyName.setValue(propertyName, context);
            }
        }
        return value;
    }
    _setPropertyValue(_target, _propertyName, value, context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        const type = accessorContainer.info.type;
        if (type.startsWith("Color")) {
            value = ToColor(value, type);
        }
        accessorContainer.info.set?.(value, accessorContainer.object);
    }
    _getPropertyValue(_target, _propertyName, context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        const type = accessorContainer.info.type;
        const value = accessorContainer.info.get(accessorContainer.object);
        if (type.startsWith("Color")) {
            return FromColor(value);
        }
        return value;
    }
    _getInterpolationAnimationPropertyInfo(_target, _propertyName, context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        return (keys, fps, animationType, easingFunction) => {
            const animations = [];
            // make sure keys are of the right type (in case of float3 color/vector)
            const type = accessorContainer.info.type;
            if (type.startsWith("Color")) {
                keys = keys.map((key) => {
                    return {
                        frame: key.frame,
                        value: ToColor(key.value, type),
                    };
                });
            }
            accessorContainer.info.interpolation?.forEach((info, index) => {
                const name = accessorContainer.info.getPropertyName?.[index](accessorContainer.object) || "Animation-interpolation-" + index;
                // generate the keys based on interpolation info
                let newKeys = keys;
                if (animationType !== info.type) {
                    // convert the keys to the right type
                    newKeys = keys.map((key) => {
                        return {
                            frame: key.frame,
                            value: info.getValue(undefined, key.value.asArray ? key.value.asArray() : [key.value], 0, 1),
                        };
                    });
                }
                const animationData = info.buildAnimations(accessorContainer.object, name, 60, newKeys);
                for (const animation of animationData) {
                    if (easingFunction) {
                        animation.babylonAnimation.setEasingFunction(easingFunction);
                    }
                    animations.push(animation.babylonAnimation);
                }
            });
            return animations;
        };
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */;
    }
}
function ToColor(value, expectedValue) {
    if (value.getClassName().startsWith("Color")) {
        return value;
    }
    if (expectedValue === "Color3") {
        return new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(value.x, value.y, value.z);
    }
    else if (expectedValue === "Color4") {
        return new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color4(value.x, value.y, value.z, value.w);
    }
    return value;
}
function FromColor(value) {
    if (value instanceof core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3) {
        return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(value.r, value.g, value.b);
    }
    else if (value instanceof core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color4) {
        return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector4(value.r, value.g, value.b, value.a);
    }
    throw new Error("Invalid color type");
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_2__.RegisterClass)("FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */, FlowGraphJsonPointerParserBlock);


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

/***/ "../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js":
/*!***************************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCachedOperationBlock: () => (/* binding */ FlowGraphCachedOperationBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const CacheName = "cachedOperationValue";
const CacheExecIdName = "cachedExecutionId";
/**
 * A block that will cache the result of an operation and deliver it as an output.
 */
class FlowGraphCachedOperationBlock extends _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(outputRichType, config) {
        super(config);
        this.value = this.registerDataOutput("value", outputRichType);
        this.isValid = this.registerDataOutput("isValid", _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeBoolean);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, CacheExecIdName, -1);
        const cachedValue = context._getExecutionVariable(this, CacheName, null);
        if (cachedValue !== undefined && cachedValue !== null && cachedExecutionId === context.executionId) {
            this.isValid.setValue(true, context);
            this.value.setValue(cachedValue, context);
        }
        else {
            try {
                const calculatedValue = this._doOperation(context);
                if (calculatedValue === undefined || calculatedValue === null) {
                    this.isValid.setValue(false, context);
                    return;
                }
                context._setExecutionVariable(this, CacheName, calculatedValue);
                context._setExecutionVariable(this, CacheExecIdName, context.executionId);
                this.value.setValue(calculatedValue, context);
                this.isValid.setValue(true, context);
            }
            catch (e) {
                this.isValid.setValue(false, context);
            }
        }
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

/***/ "../core/dist/FlowGraph/flowGraphPathConverterComponent.js":
/*!*****************************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphPathConverterComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphPathConverterComponent: () => (/* binding */ FlowGraphPathConverterComponent)
/* harmony export */ });
/* harmony import */ var _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



const PathHasTemplatesRegex = new RegExp(/\/\{(\w+)\}(?=\/|$)/g);
/**
 * @experimental
 * A component that converts a path to an object accessor.
 */
class FlowGraphPathConverterComponent {
    constructor(path, ownerBlock) {
        this.path = path;
        this.ownerBlock = ownerBlock;
        /**
         * The templated inputs for the provided path.
         */
        this.templatedInputs = [];
        let match = PathHasTemplatesRegex.exec(path);
        const templateSet = new Set();
        while (match) {
            const [, matchGroup] = match;
            if (templateSet.has(matchGroup)) {
                throw new Error("Duplicate template variable detected.");
            }
            templateSet.add(matchGroup);
            this.templatedInputs.push(ownerBlock.registerDataInput(matchGroup, _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_1__.RichTypeFlowGraphInteger, new _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_0__.FlowGraphInteger(0)));
            match = PathHasTemplatesRegex.exec(path);
        }
    }
    /**
     * Get the accessor for the path.
     * @param pathConverter the path converter to use to convert the path to an object accessor.
     * @param context the context to use.
     * @returns the accessor for the path.
     * @throws if the value for a templated input is invalid.
     */
    getAccessor(pathConverter, context) {
        let finalPath = this.path;
        for (const templatedInput of this.templatedInputs) {
            const valueToReplace = templatedInput.getValue(context).value;
            if (typeof valueToReplace !== "number" || valueToReplace < 0) {
                throw new Error("Invalid value for templated input.");
            }
            finalPath = finalPath.replace(`{${templatedInput.name}}`, valueToReplace.toString());
        }
        return pathConverter.convert(finalPath);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9kaXN0X0Zsb3dHcmFwaF9CbG9ja3NfRGF0YV9UcmFuc2Zvcm1lcnNfZmxvd0dyYXBoSnNvblBvaW50ZXJQYXJzZXJCbG9ja19qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQXFCQTs7OztBQUlBO0FBQ0E7QUErQkE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU5BOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9UcmFuc2Zvcm1lcnMvZmxvd0dyYXBoSnNvblBvaW50ZXJQYXJzZXJCbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9CbG9ja3MvRGF0YS9mbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhQYXRoQ29udmVydGVyQ29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQXNzZXRUeXBlIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaEFzc2V0c0NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IEZsb3dHcmFwaFBhdGhDb252ZXJ0ZXJDb21wb25lbnQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUGF0aENvbnZlcnRlckNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmljaFR5cGVBbnkgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IElPYmplY3RBY2Nlc3NvciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC90eXBlRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB0eXBlIHsgSVBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCJjb3JlL09iamVjdE1vZGVsL29iamVjdE1vZGVsSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcbmltcG9ydCB0eXBlIHsgRWFzaW5nRnVuY3Rpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2Vhc2luZ1wiO1xuaW1wb3J0IHsgVmVjdG9yMywgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgeyBDb2xvcjMsIENvbG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcbmltcG9ydCB7IEZsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrIH0gZnJvbSBcIi4uL2Zsb3dHcmFwaENhY2hlZE9wZXJhdGlvbkJsb2NrXCI7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgdGhlIEpTT04gcG9pbnRlciBwYXJzZXIgYmxvY2suXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEpzb25Qb2ludGVyUGFyc2VyQmxvY2tDb25maWd1cmF0aW9uIGV4dGVuZHMgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogVGhlIEpTT04gcG9pbnRlciB0byBwYXJzZS5cbiAgICAgKi9cbiAgICBqc29uUG9pbnRlcjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXRoIGNvbnZlcnRlciB0byB1c2UgdG8gY29udmVydCB0aGUgcGF0aCB0byBhbiBvYmplY3QgYWNjZXNzb3IuXG4gICAgICovXG4gICAgcGF0aENvbnZlcnRlcjogSVBhdGhUb09iamVjdENvbnZlcnRlcjxJT2JqZWN0QWNjZXNzb3I+O1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBvdXRwdXQgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBvdXRwdXRWYWx1ZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhpcyBibG9jayB3aWxsIHRha2UgYSBKU09OIHBvaW50ZXIgYW5kIHBhcnNlIGl0IHRvIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgSlNPTiBvYmplY3QuXG4gKiBUaGUgb3V0cHV0IGlzIGFuIG9iamVjdCBhbmQgYSBwcm9wZXJ0eSBuYW1lLlxuICogT3B0aW9uYWxseSwgdGhlIGJsb2NrIGNhbiBhbHNvIG91dHB1dCB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5LiBUaGlzIGlzIGNvbmZpZ3VyYWJsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEpzb25Qb2ludGVyUGFyc2VyQmxvY2s8UCBleHRlbmRzIGFueSwgTyBleHRlbmRzIEZsb3dHcmFwaEFzc2V0VHlwZT4gZXh0ZW5kcyBGbG93R3JhcGhDYWNoZWRPcGVyYXRpb25CbG9jazxQPiB7XG4gICAgLyoqXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgcHJvcGVydHkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IG9iamVjdDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Tz47XG5cbiAgICAvKipcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHByb3BlcnR5IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHByb3BlcnR5TmFtZTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248c3RyaW5nPjtcblxuICAgIC8qKlxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IHNldHRlckZ1bmN0aW9uOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjwodGFyZ2V0OiBPLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IFAsIGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpID0+IHZvaWQ+O1xuXG4gICAgLyoqXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IEEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0dGVyRnVuY3Rpb246IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPCh0YXJnZXQ6IE8sIHByb3BlcnR5TmFtZTogc3RyaW5nLCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSA9PiBQIHwgdW5kZWZpbmVkPjtcblxuICAgIC8qKlxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSBpbnRlcnBvbGF0aW9uIGFuaW1hdGlvbiBwcm9wZXJ0eSBpbmZvLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBnZW5lcmF0ZUFuaW1hdGlvbnNGdW5jdGlvbjogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248KCkgPT4gKGtleXM6IGFueVtdLCBmcHM6IG51bWJlciwgZWFzaW5nRnVuY3Rpb24/OiBFYXNpbmdGdW5jdGlvbikgPT4gQW5pbWF0aW9uW10+O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCB3aXRoIHRoZSB0ZW1wbGF0ZWQgaW5wdXRzIGZvciB0aGUgcHJvdmlkZWQgcGF0aC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVDb21wb25lbnQ6IEZsb3dHcmFwaFBhdGhDb252ZXJ0ZXJDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGNvbmZpZzogSUZsb3dHcmFwaEpzb25Qb2ludGVyUGFyc2VyQmxvY2tDb25maWd1cmF0aW9uXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFJpY2hUeXBlQW55LCBjb25maWcpO1xuICAgICAgICB0aGlzLm9iamVjdCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwib2JqZWN0XCIsIFJpY2hUeXBlQW55KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInByb3BlcnR5TmFtZVwiLCBSaWNoVHlwZUFueSk7XG4gICAgICAgIHRoaXMuc2V0dGVyRnVuY3Rpb24gPSB0aGlzLnJlZ2lzdGVyRGF0YU91dHB1dChcInNldEZ1bmN0aW9uXCIsIFJpY2hUeXBlQW55LCB0aGlzLl9zZXRQcm9wZXJ0eVZhbHVlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmdldHRlckZ1bmN0aW9uID0gdGhpcy5yZWdpc3RlckRhdGFPdXRwdXQoXCJnZXRGdW5jdGlvblwiLCBSaWNoVHlwZUFueSwgdGhpcy5fZ2V0UHJvcGVydHlWYWx1ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuaW1hdGlvbnNGdW5jdGlvbiA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwiZ2VuZXJhdGVBbmltYXRpb25zRnVuY3Rpb25cIiwgUmljaFR5cGVBbnksIHRoaXMuX2dldEludGVycG9sYXRpb25BbmltYXRpb25Qcm9wZXJ0eUluZm8uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGVtcGxhdGVDb21wb25lbnQgPSBuZXcgRmxvd0dyYXBoUGF0aENvbnZlcnRlckNvbXBvbmVudChjb25maWcuanNvblBvaW50ZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSBfZG9PcGVyYXRpb24oY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IFAge1xuICAgICAgICBjb25zdCBhY2Nlc3NvckNvbnRhaW5lciA9IHRoaXMudGVtcGxhdGVDb21wb25lbnQuZ2V0QWNjZXNzb3IodGhpcy5jb25maWcucGF0aENvbnZlcnRlciwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYWNjZXNzb3JDb250YWluZXIuaW5mby5nZXQoYWNjZXNzb3JDb250YWluZXIub2JqZWN0KSBhcyBQO1xuICAgICAgICBjb25zdCBvYmplY3QgPSBhY2Nlc3NvckNvbnRhaW5lci5pbmZvLmdldFRhcmdldD8uKGFjY2Vzc29yQ29udGFpbmVyLm9iamVjdCk7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGFjY2Vzc29yQ29udGFpbmVyLmluZm8uZ2V0UHJvcGVydHlOYW1lPy5bMF0oYWNjZXNzb3JDb250YWluZXIub2JqZWN0KTtcbiAgICAgICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdCBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5zZXRWYWx1ZShvYmplY3QsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydHlOYW1lLnNldFZhbHVlKHByb3BlcnR5TmFtZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldFByb3BlcnR5VmFsdWUoX3RhcmdldDogTywgX3Byb3BlcnR5TmFtZTogc3RyaW5nLCB2YWx1ZTogUCwgY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb25zdCBhY2Nlc3NvckNvbnRhaW5lciA9IHRoaXMudGVtcGxhdGVDb21wb25lbnQuZ2V0QWNjZXNzb3IodGhpcy5jb25maWcucGF0aENvbnZlcnRlciwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY2Nlc3NvckNvbnRhaW5lci5pbmZvLnR5cGU7XG4gICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJDb2xvclwiKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBUb0NvbG9yKHZhbHVlIGFzIFZlY3RvcjQsIHR5cGUpIGFzIHVua25vd24gYXMgUDtcbiAgICAgICAgfVxuICAgICAgICBhY2Nlc3NvckNvbnRhaW5lci5pbmZvLnNldD8uKHZhbHVlLCBhY2Nlc3NvckNvbnRhaW5lci5vYmplY3QpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFByb3BlcnR5VmFsdWUoX3RhcmdldDogTywgX3Byb3BlcnR5TmFtZTogc3RyaW5nLCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogUCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc29yQ29udGFpbmVyID0gdGhpcy50ZW1wbGF0ZUNvbXBvbmVudC5nZXRBY2Nlc3Nvcih0aGlzLmNvbmZpZy5wYXRoQ29udmVydGVyLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgdHlwZSA9IGFjY2Vzc29yQ29udGFpbmVyLmluZm8udHlwZTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhY2Nlc3NvckNvbnRhaW5lci5pbmZvLmdldChhY2Nlc3NvckNvbnRhaW5lci5vYmplY3QpO1xuICAgICAgICBpZiAodHlwZS5zdGFydHNXaXRoKFwiQ29sb3JcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBGcm9tQ29sb3IodmFsdWUgYXMgQ29sb3IzIHwgQ29sb3I0KSBhcyB1bmtub3duIGFzIFA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlIGFzIFAgfCB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0SW50ZXJwb2xhdGlvbkFuaW1hdGlvblByb3BlcnR5SW5mbyhcbiAgICAgICAgX3RhcmdldDogTyxcbiAgICAgICAgX3Byb3BlcnR5TmFtZTogc3RyaW5nLFxuICAgICAgICBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0XG4gICAgKTogKGtleXM6IGFueVtdLCBmcHM6IG51bWJlciwgYW5pbWF0aW9uVHlwZTogbnVtYmVyLCBlYXNpbmdGdW5jdGlvbj86IEVhc2luZ0Z1bmN0aW9uKSA9PiBBbmltYXRpb25bXSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc29yQ29udGFpbmVyID0gdGhpcy50ZW1wbGF0ZUNvbXBvbmVudC5nZXRBY2Nlc3Nvcih0aGlzLmNvbmZpZy5wYXRoQ29udmVydGVyLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIChrZXlzOiBhbnlbXSwgZnBzOiBudW1iZXIsIGFuaW1hdGlvblR5cGU6IG51bWJlciwgZWFzaW5nRnVuY3Rpb24/OiBFYXNpbmdGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uczogQW5pbWF0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBrZXlzIGFyZSBvZiB0aGUgcmlnaHQgdHlwZSAoaW4gY2FzZSBvZiBmbG9hdDMgY29sb3IvdmVjdG9yKVxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IGFjY2Vzc29yQ29udGFpbmVyLmluZm8udHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJDb2xvclwiKSkge1xuICAgICAgICAgICAgICAgIGtleXMgPSBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZToga2V5LmZyYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvQ29sb3Ioa2V5LnZhbHVlLCB0eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjY2Vzc29yQ29udGFpbmVyLmluZm8uaW50ZXJwb2xhdGlvbj8uZm9yRWFjaCgoaW5mbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYWNjZXNzb3JDb250YWluZXIuaW5mby5nZXRQcm9wZXJ0eU5hbWU/LltpbmRleF0oYWNjZXNzb3JDb250YWluZXIub2JqZWN0KSB8fCBcIkFuaW1hdGlvbi1pbnRlcnBvbGF0aW9uLVwiICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIGtleXMgYmFzZWQgb24gaW50ZXJwb2xhdGlvbiBpbmZvXG4gICAgICAgICAgICAgICAgbGV0IG5ld0tleXM6IGFueVtdID0ga2V5cztcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uVHlwZSAhPT0gaW5mby50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdGhlIGtleXMgdG8gdGhlIHJpZ2h0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5cyA9IGtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGtleS5mcmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5mby5nZXRWYWx1ZSh1bmRlZmluZWQsIGtleS52YWx1ZS5hc0FycmF5ID8ga2V5LnZhbHVlLmFzQXJyYXkoKSA6IFtrZXkudmFsdWVdLCAwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb25EYXRhID0gaW5mby5idWlsZEFuaW1hdGlvbnMoYWNjZXNzb3JDb250YWluZXIub2JqZWN0LCBuYW1lLCA2MCwgbmV3S2V5cyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYW5pbWF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWFzaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5iYWJ5bG9uQW5pbWF0aW9uLnNldEVhc2luZ0Z1bmN0aW9uKGVhc2luZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbWF0aW9uLmJhYnlsb25BbmltYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9ucztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjbGFzcyBuYW1lIG9mIHRoaXMgYmxvY2tcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBUb0NvbG9yKHZhbHVlOiBhbnksIGV4cGVjdGVkVmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZS5nZXRDbGFzc05hbWUoKS5zdGFydHNXaXRoKFwiQ29sb3JcIikpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIGFzIHVua25vd24gYXMgQ29sb3IzIHwgQ29sb3I0O1xuICAgIH1cbiAgICBpZiAoZXhwZWN0ZWRWYWx1ZSA9PT0gXCJDb2xvcjNcIikge1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yMyh2YWx1ZS54LCB2YWx1ZS55LCB2YWx1ZS56KTtcbiAgICB9IGVsc2UgaWYgKGV4cGVjdGVkVmFsdWUgPT09IFwiQ29sb3I0XCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcjQodmFsdWUueCwgdmFsdWUueSwgdmFsdWUueiwgdmFsdWUudyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRnJvbUNvbG9yKHZhbHVlOiBDb2xvcjMgfCBDb2xvcjQpOiBWZWN0b3IzIHwgVmVjdG9yNCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29sb3IzKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29sb3I0KSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yNCh2YWx1ZS5yLCB2YWx1ZS5nLCB2YWx1ZS5iLCB2YWx1ZS5hKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciB0eXBlXCIpO1xufVxuXG5SZWdpc3RlckNsYXNzKEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXIsIEZsb3dHcmFwaEpzb25Qb2ludGVyUGFyc2VyQmxvY2spO1xuIiwiaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuLi8uLi9mbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4uLy4uL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgeyBSaWNoVHlwZUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcblxyXG5jb25zdCBDYWNoZU5hbWUgPSBcImNhY2hlZE9wZXJhdGlvblZhbHVlXCI7XHJcbmNvbnN0IENhY2hlRXhlY0lkTmFtZSA9IFwiY2FjaGVkRXhlY3V0aW9uSWRcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGJsb2NrIHRoYXQgd2lsbCBjYWNoZSB0aGUgcmVzdWx0IG9mIGFuIG9wZXJhdGlvbiBhbmQgZGVsaXZlciBpdCBhcyBhbiBvdXRwdXQuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmxvd0dyYXBoQ2FjaGVkT3BlcmF0aW9uQmxvY2s8T3V0cHV0VD4gZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvdXRwdXQgb2YgdGhlIG9wZXJhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPE91dHB1dFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFdoZXRoZXIgdGhlIHZhbHVlIGlzIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNWYWxpZDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248Ym9vbGVhbj47XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3V0cHV0UmljaFR5cGU6IFJpY2hUeXBlPE91dHB1dFQ+LCBjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwidmFsdWVcIiwgb3V0cHV0UmljaFR5cGUpO1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMucmVnaXN0ZXJEYXRhT3V0cHV0KFwiaXNWYWxpZFwiLCBSaWNoVHlwZUJvb2xlYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBPcGVyYXRpb24gdG8gcmVhbGl6ZVxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGdyYXBoIGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IF9kb09wZXJhdGlvbihjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogT3V0cHV0VCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX3VwZGF0ZU91dHB1dHMoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEV4ZWN1dGlvbklkID0gY29udGV4dC5fZ2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgQ2FjaGVFeGVjSWROYW1lLCAtMSk7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkVmFsdWUgPSBjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZTxOdWxsYWJsZTxPdXRwdXRUPj4odGhpcywgQ2FjaGVOYW1lLCBudWxsKTtcclxuICAgICAgICBpZiAoY2FjaGVkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWNoZWRWYWx1ZSAhPT0gbnVsbCAmJiBjYWNoZWRFeGVjdXRpb25JZCA9PT0gY29udGV4dC5leGVjdXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQuc2V0VmFsdWUodHJ1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoY2FjaGVkVmFsdWUsIGNvbnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB0aGlzLl9kb09wZXJhdGlvbihjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVkVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBjYWxjdWxhdGVkVmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQuc2V0VmFsdWUoZmFsc2UsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIENhY2hlTmFtZSwgY2FsY3VsYXRlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuX3NldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIENhY2hlRXhlY0lkTmFtZSwgY29udGV4dC5leGVjdXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLnNldFZhbHVlKGNhbGN1bGF0ZWRWYWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQuc2V0VmFsdWUodHJ1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZC5zZXRWYWx1ZShmYWxzZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJT2JqZWN0SW5mbywgSVBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCIuLi9PYmplY3RNb2RlbC9vYmplY3RNb2RlbEludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiLi9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XHJcbmltcG9ydCB7IFJpY2hUeXBlRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCIuL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElPYmplY3RBY2Nlc3NvciB9IGZyb20gXCIuL3R5cGVEZWZpbml0aW9uc1wiO1xyXG5cclxuY29uc3QgUGF0aEhhc1RlbXBsYXRlc1JlZ2V4ID0gbmV3IFJlZ0V4cCgvXFwvXFx7KFxcdyspXFx9KD89XFwvfCQpL2cpO1xyXG5cclxuLyoqXHJcbiAqIEBleHBlcmltZW50YWxcclxuICogQSBjb21wb25lbnQgdGhhdCBjb252ZXJ0cyBhIHBhdGggdG8gYW4gb2JqZWN0IGFjY2Vzc29yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFBhdGhDb252ZXJ0ZXJDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGVtcGxhdGVkIGlucHV0cyBmb3IgdGhlIHByb3ZpZGVkIHBhdGguXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZWRJbnB1dHM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPEZsb3dHcmFwaEludGVnZXI+W10gPSBbXTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcGF0aDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvd25lckJsb2NrOiBGbG93R3JhcGhCbG9ja1xyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gUGF0aEhhc1RlbXBsYXRlc1JlZ2V4LmV4ZWMocGF0aCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3QgWywgbWF0Y2hHcm91cF0gPSBtYXRjaDtcclxuICAgICAgICAgICAgaWYgKHRlbXBsYXRlU2V0LmhhcyhtYXRjaEdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlIHRlbXBsYXRlIHZhcmlhYmxlIGRldGVjdGVkLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVNldC5hZGQobWF0Y2hHcm91cCk7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVkSW5wdXRzLnB1c2gob3duZXJCbG9jay5yZWdpc3RlckRhdGFJbnB1dChtYXRjaEdyb3VwLCBSaWNoVHlwZUZsb3dHcmFwaEludGVnZXIsIG5ldyBGbG93R3JhcGhJbnRlZ2VyKDApKSk7XHJcbiAgICAgICAgICAgIG1hdGNoID0gUGF0aEhhc1RlbXBsYXRlc1JlZ2V4LmV4ZWMocGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBhY2Nlc3NvciBmb3IgdGhlIHBhdGguXHJcbiAgICAgKiBAcGFyYW0gcGF0aENvbnZlcnRlciB0aGUgcGF0aCBjb252ZXJ0ZXIgdG8gdXNlIHRvIGNvbnZlcnQgdGhlIHBhdGggdG8gYW4gb2JqZWN0IGFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgdG8gdXNlLlxyXG4gICAgICogQHJldHVybnMgdGhlIGFjY2Vzc29yIGZvciB0aGUgcGF0aC5cclxuICAgICAqIEB0aHJvd3MgaWYgdGhlIHZhbHVlIGZvciBhIHRlbXBsYXRlZCBpbnB1dCBpcyBpbnZhbGlkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QWNjZXNzb3IocGF0aENvbnZlcnRlcjogSVBhdGhUb09iamVjdENvbnZlcnRlcjxJT2JqZWN0QWNjZXNzb3I+LCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogSU9iamVjdEluZm88SU9iamVjdEFjY2Vzc29yPiB7XHJcbiAgICAgICAgbGV0IGZpbmFsUGF0aCA9IHRoaXMucGF0aDtcclxuICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlZElucHV0IG9mIHRoaXMudGVtcGxhdGVkSW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9SZXBsYWNlID0gdGVtcGxhdGVkSW5wdXQuZ2V0VmFsdWUoY29udGV4dCkudmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVUb1JlcGxhY2UgIT09IFwibnVtYmVyXCIgfHwgdmFsdWVUb1JlcGxhY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciB0ZW1wbGF0ZWQgaW5wdXQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsUGF0aCA9IGZpbmFsUGF0aC5yZXBsYWNlKGB7JHt0ZW1wbGF0ZWRJbnB1dC5uYW1lfX1gLCB2YWx1ZVRvUmVwbGFjZS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGhDb252ZXJ0ZXIuY29udmVydChmaW5hbFBhdGgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=