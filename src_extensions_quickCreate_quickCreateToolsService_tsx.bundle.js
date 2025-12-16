"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["src_extensions_quickCreate_quickCreateToolsService_tsx"],{

/***/ "../core/dist/Materials/uniformBufferEffectCommonAccessor.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Materials/uniformBufferEffectCommonAccessor.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniformBufferEffectCommonAccessor: () => (/* binding */ UniformBufferEffectCommonAccessor)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/** @internal */
class UniformBufferEffectCommonAccessor {
    _isUbo(uboOrEffect) {
        return uboOrEffect.addUniform !== undefined;
    }
    constructor(uboOrEffect) {
        if (this._isUbo(uboOrEffect)) {
            this.setMatrix3x3 = uboOrEffect.updateMatrix3x3.bind(uboOrEffect);
            this.setMatrix2x2 = uboOrEffect.updateMatrix2x2.bind(uboOrEffect);
            this.setFloat = uboOrEffect.updateFloat.bind(uboOrEffect);
            this.setFloat2 = uboOrEffect.updateFloat2.bind(uboOrEffect);
            this.setFloat3 = uboOrEffect.updateFloat3.bind(uboOrEffect);
            this.setFloat4 = uboOrEffect.updateFloat4.bind(uboOrEffect);
            this.setFloatArray = uboOrEffect.updateFloatArray.bind(uboOrEffect);
            this.setArray = uboOrEffect.updateArray.bind(uboOrEffect);
            this.setIntArray = uboOrEffect.updateIntArray.bind(uboOrEffect);
            this.setMatrix = uboOrEffect.updateMatrix.bind(uboOrEffect);
            this.setMatrices = uboOrEffect.updateMatrices.bind(uboOrEffect);
            this.setVector3 = uboOrEffect.updateVector3.bind(uboOrEffect);
            this.setVector4 = uboOrEffect.updateVector4.bind(uboOrEffect);
            this.setColor3 = uboOrEffect.updateColor3.bind(uboOrEffect);
            this.setColor4 = uboOrEffect.updateColor4.bind(uboOrEffect);
            this.setDirectColor4 = uboOrEffect.updateDirectColor4.bind(uboOrEffect);
            this.setInt = uboOrEffect.updateInt.bind(uboOrEffect);
            this.setInt2 = uboOrEffect.updateInt2.bind(uboOrEffect);
            this.setInt3 = uboOrEffect.updateInt3.bind(uboOrEffect);
            this.setInt4 = uboOrEffect.updateInt4.bind(uboOrEffect);
        }
        else {
            this.setMatrix3x3 = uboOrEffect.setMatrix3x3.bind(uboOrEffect);
            this.setMatrix2x2 = uboOrEffect.setMatrix2x2.bind(uboOrEffect);
            this.setFloat = uboOrEffect.setFloat.bind(uboOrEffect);
            this.setFloat2 = uboOrEffect.setFloat2.bind(uboOrEffect);
            this.setFloat3 = uboOrEffect.setFloat3.bind(uboOrEffect);
            this.setFloat4 = uboOrEffect.setFloat4.bind(uboOrEffect);
            this.setFloatArray = uboOrEffect.setFloatArray.bind(uboOrEffect);
            this.setArray = uboOrEffect.setArray.bind(uboOrEffect);
            this.setIntArray = uboOrEffect.setIntArray.bind(uboOrEffect);
            this.setMatrix = uboOrEffect.setMatrix.bind(uboOrEffect);
            this.setMatrices = uboOrEffect.setMatrices.bind(uboOrEffect);
            this.setVector3 = uboOrEffect.setVector3.bind(uboOrEffect);
            this.setVector4 = uboOrEffect.setVector4.bind(uboOrEffect);
            this.setColor3 = uboOrEffect.setColor3.bind(uboOrEffect);
            this.setColor4 = uboOrEffect.setColor4.bind(uboOrEffect);
            this.setDirectColor4 = uboOrEffect.setDirectColor4.bind(uboOrEffect);
            this.setInt = uboOrEffect.setInt.bind(uboOrEffect);
            this.setInt2 = uboOrEffect.setInt2.bind(uboOrEffect);
            this.setInt3 = uboOrEffect.setInt3.bind(uboOrEffect);
            this.setInt4 = uboOrEffect.setInt4.bind(uboOrEffect);
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

/***/ "../core/dist/Particles/Node/Blocks/Emitters/boxShapeBlock.js":
/*!********************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/Emitters/boxShapeBlock.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxShapeBlock: () => (/* binding */ BoxShapeBlock)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Maths/math.scalar.functions */ "../core/dist/Maths/math.scalar.functions.js");
/* harmony import */ var _emitters_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitters.functions */ "../core/dist/Particles/Node/Blocks/Emitters/emitters.functions.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Block used to provide a flow of particles emitted from a box shape.
 */
class BoxShapeBlock extends _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__.NodeParticleBlock {
    /**
     * Create a new BoxShapeBlock
     * @param name defines the block name
     */
    constructor(name) {
        super(name);
        this.registerInput("particle", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Particle);
        this.registerInput("direction1", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Vector3, true, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 1.0, 0));
        this.registerInput("direction2", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Vector3, true, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 1.0, 0));
        this.registerInput("minEmitBox", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Vector3, true, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(-0.5, -0.5, -0.5));
        this.registerInput("maxEmitBox", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Vector3, true, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3(0.5, 0.5, 0.5));
        this.registerOutput("output", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Particle);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "BoxShapeBlock";
    }
    /**
     * Gets the particle input component
     */
    get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the direction1 input component
     */
    get direction1() {
        return this._inputs[1];
    }
    /**
     * Gets the direction2 input component
     */
    get direction2() {
        return this._inputs[2];
    }
    /**
     * Gets the minEmitBox input component
     */
    get minEmitBox() {
        return this._inputs[3];
    }
    /**
     * Gets the maxEmitBox input component
     */
    get maxEmitBox() {
        return this._inputs[4];
    }
    /**
     * Gets the output component
     */
    get output() {
        return this._outputs[0];
    }
    /**
     * Builds the block
     * @param state defines the build state
     */
    _build(state) {
        const system = this.particle.getConnectedValue(state);
        system._directionCreation.process = (particle) => {
            state.particleContext = particle;
            state.systemContext = system;
            const direction1 = this.direction1.getConnectedValue(state);
            const direction2 = this.direction2.getConnectedValue(state);
            const randX = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__.RandomRange)(direction1.x, direction2.x);
            const randY = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__.RandomRange)(direction1.y, direction2.y);
            const randZ = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__.RandomRange)(direction1.z, direction2.z);
            if (system.isLocal) {
                particle.direction.copyFromFloats(randX, randY, randZ);
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformNormalFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.direction);
            }
            particle._initialDirection = particle.direction.clone();
        };
        system._positionCreation.process = (particle) => {
            state.particleContext = particle;
            state.systemContext = system;
            const minEmitBox = this.minEmitBox.getConnectedValue(state);
            const maxEmitBox = this.maxEmitBox.getConnectedValue(state);
            const randX = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__.RandomRange)(minEmitBox.x, maxEmitBox.x);
            const randY = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__.RandomRange)(minEmitBox.y, maxEmitBox.y);
            const randZ = (0,core_Maths_math_scalar_functions__WEBPACK_IMPORTED_MODULE_4__.RandomRange)(minEmitBox.z, maxEmitBox.z);
            if (system.isLocal) {
                particle.position.copyFromFloats(randX, randY, randZ);
            }
            else {
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.TransformCoordinatesFromFloatsToRef(randX, randY, randZ, state.emitterWorldMatrix, particle.position);
            }
            (0,_emitters_functions__WEBPACK_IMPORTED_MODULE_5__._CreateLocalPositionData)(particle);
        };
        this.output._storedValue = system;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.BoxShapeBlock", BoxShapeBlock);


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

/***/ "../core/dist/Particles/Node/Blocks/Emitters/createParticleBlock.js":
/*!**************************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/Emitters/createParticleBlock.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateParticleBlock: () => (/* binding */ CreateParticleBlock)
/* harmony export */ });
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var core_Particles_particleSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Particles/particleSystem */ "../core/dist/Particles/particleSystem.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Particles_EmitterTypes_pointParticleEmitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Particles/EmitterTypes/pointParticleEmitter */ "../core/dist/Particles/EmitterTypes/pointParticleEmitter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








const ColorDiff = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_3__.Color4();
/**
 * @internal
 */
class CreateParticleBlock extends _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlock {
    /**
     * Create a new CreateParticleBlock
     * @param name defines the block name
     */
    constructor(name) {
        super(name);
        this.registerInput("emitPower", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Float, true, 1);
        this.registerInput("lifeTime", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Float, true, 1);
        this.registerInput("color", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Color4, true, new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_3__.Color4(1, 1, 1, 1));
        this.registerInput("colorDead", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Color4, true, new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_3__.Color4(0, 0, 0, 0));
        this.registerInput("scale", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Vector2, true, new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector2(1, 1));
        this.registerInput("angle", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Float, true, 0);
        this.registerInput("size", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Float, true, 1);
        this.registerOutput("particle", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Particle);
        this.scale.acceptedConnectionPointTypes.push(_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBlockConnectionPointTypes.Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "CreateParticleBlock";
    }
    /**
     * Gets the emitPower input component
     */
    get emitPower() {
        return this._inputs[0];
    }
    /**
     * Gets the lifeTime input component
     */
    get lifeTime() {
        return this._inputs[1];
    }
    /**
     * Gets the color input component
     */
    get color() {
        return this._inputs[2];
    }
    /**
     * Gets the color dead input component
     */
    get colorDead() {
        return this._inputs[3];
    }
    /**
     * Gets the scale input component
     */
    get scale() {
        return this._inputs[4];
    }
    /**
     * Gets the angle input component
     */
    get angle() {
        return this._inputs[5];
    }
    /**
     * Gets the size component
     */
    get size() {
        return this._inputs[6];
    }
    /**
     * Gets the particle output component
     */
    get particle() {
        return this._outputs[0];
    }
    /**
     * @internal
     */
    _build(state) {
        const system = new core_Particles_particleSystem__WEBPACK_IMPORTED_MODULE_2__.ParticleSystem(this.name, state.capacity, state.scene, null, false, undefined, true);
        system.particleEmitterType = new core_Particles_EmitterTypes_pointParticleEmitter__WEBPACK_IMPORTED_MODULE_6__.PointParticleEmitter();
        // Creation
        system._lifeTimeCreation.process = (particle, system) => {
            state.particleContext = particle;
            particle.lifeTime = this.lifeTime.getConnectedValue(state);
            system._emitPower = this.emitPower.getConnectedValue(state);
        };
        system._colorCreation.process = (particle) => {
            state.particleContext = particle;
            const color = this.color.getConnectedValue(state);
            if (color !== undefined) {
                particle.color.copyFrom(color);
            }
        };
        system._colorDeadCreation.process = (particle) => {
            state.particleContext = particle;
            particle.colorDead.copyFrom(this.colorDead.getConnectedValue(state));
            particle.initialColor.copyFrom(particle.color);
            particle.colorDead.subtractToRef(particle.initialColor, ColorDiff);
            ColorDiff.scaleToRef(1.0 / particle.lifeTime, particle.colorStep);
        };
        system._sizeCreation.process = (particle) => {
            state.particleContext = particle;
            const size = this.size.getConnectedValue(state);
            if (size !== undefined) {
                particle.size = size;
            }
            else {
                particle.size = 1.0;
            }
            const scale = this.scale.getConnectedValue(state);
            if (scale.x !== undefined) {
                particle.scale.x = scale.x;
                particle.scale.y = scale.y;
            }
            else {
                particle.scale.x = scale;
                particle.scale.y = scale;
            }
        };
        system._angleCreation.process = (particle) => {
            state.particleContext = particle;
            particle.angle = this.angle.getConnectedValue(state);
        };
        this.particle._storedValue = system;
    }
}
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.RegisterClass)("BABYLON.CreateParticleBlock", CreateParticleBlock);


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

/***/ "../core/dist/Particles/Node/Blocks/Emitters/emitters.functions.js":
/*!*************************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/Emitters/emitters.functions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _CreateLocalPositionData: () => (/* binding */ _CreateLocalPositionData)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Creates the local position data for the particle
 * @param particle The particle to update
 */
function _CreateLocalPositionData(particle) {
    if (!particle._localPosition) {
        particle._localPosition = particle.position.clone();
    }
    else {
        particle._localPosition.copyFrom(particle.position);
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

/***/ "../core/dist/Particles/Node/Blocks/Triggers/triggerTools.js":
/*!*******************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/Triggers/triggerTools.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _TriggerSubEmitter: () => (/* binding */ _TriggerSubEmitter)
/* harmony export */ });
/* harmony import */ var _nodeParticleBuildState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nodeParticleBuildState */ "../core/dist/Particles/Node/nodeParticleBuildState.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * @internal
 * Tools for managing particle triggers and sub-emitter systems.
 */
function _TriggerSubEmitter(template, scene, location) {
    const newState = new _nodeParticleBuildState__WEBPACK_IMPORTED_MODULE_0__.NodeParticleBuildState();
    newState.scene = scene;
    const clone = template.createSystem(newState);
    clone.canStart = () => true; // Allow the cloned system to start
    clone.emitter = location.clone(); // Set the emitter to the particle's position
    clone.disposeOnStop = true; // Clean up the system when it stops
    clone.start();
    return clone;
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

/***/ "../core/dist/Particles/Node/Blocks/Update/updatePositionBlock.js":
/*!************************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/Update/updatePositionBlock.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdatePositionBlock: () => (/* binding */ UpdatePositionBlock)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var core_Particles_Queue_executionQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Particles/Queue/executionQueue */ "../core/dist/Particles/Queue/executionQueue.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Block used to update the position of a particle
 */
class UpdatePositionBlock extends _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_2__.NodeParticleBlock {
    /**
     * Create a new UpdateDirectionBlock
     * @param name defines the block name
     */
    constructor(name) {
        super(name);
        this.registerInput("particle", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Particle);
        this.registerInput("position", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Vector3);
        this.registerOutput("output", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Particle);
    }
    /**
     * Gets the particle component
     */
    get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the position input component
     */
    get position() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */
    get output() {
        return this._outputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "UpdatePositionBlock";
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */
    _build(state) {
        const system = this.particle.getConnectedValue(state);
        this.output._storedValue = system;
        if (!this.position.isConnected) {
            return;
        }
        const processPosition = (particle) => {
            state.particleContext = particle;
            state.systemContext = system;
            particle.position.copyFrom(this.position.getConnectedValue(state));
        };
        const positionProcessing = {
            process: processPosition,
            previousItem: null,
            nextItem: null,
        };
        if (system._updateQueueStart) {
            (0,core_Particles_Queue_executionQueue__WEBPACK_IMPORTED_MODULE_3__._ConnectAtTheEnd)(positionProcessing, system._updateQueueStart);
        }
        else {
            system._updateQueueStart = positionProcessing;
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.UpdatePositionBlock", UpdatePositionBlock);


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

/***/ "../core/dist/Particles/Node/Blocks/particleInputBlock.js":
/*!****************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/particleInputBlock.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticleInputBlock: () => (/* binding */ ParticleInputBlock)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Enums/nodeParticleContextualSources */ "../core/dist/Particles/Node/Enums/nodeParticleContextualSources.js");
/* harmony import */ var _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Enums/nodeParticleSystemSources */ "../core/dist/Particles/Node/Enums/nodeParticleSystemSources.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









/**
 * Block used to expose an input value
 */
class ParticleInputBlock extends _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__.NodeParticleBlock {
    /**
     * Gets or sets the connection point type (default is float)
     */
    get type() {
        if (this._type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.AutoDetect) {
            if (this.value != null) {
                if (!isNaN(this.value)) {
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float;
                    return this._type;
                }
                switch (this.value.getClassName()) {
                    case "Vector2":
                        this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2;
                        return this._type;
                    case "Vector3":
                        this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3;
                        return this._type;
                    case "Color4":
                        this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4;
                        return this._type;
                    case "Matrix":
                        this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Matrix;
                        return this._type;
                }
            }
        }
        return this._type;
    }
    /**
     * Gets a boolean indicating that the current connection point is a system source
     */
    get isSystemSource() {
        return this._contextualSource === _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.None && this._systemSource !== _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.None;
    }
    /**
     * Gets or sets the system source used by this input block
     */
    get systemSource() {
        return this._systemSource;
    }
    set systemSource(value) {
        this._systemSource = value;
        if (value !== _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.None) {
            this._contextualSource = _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.None;
            this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float;
            switch (value) {
                case _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.Time:
                case _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.Delta:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float;
                    break;
                case _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.Emitter:
                case _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.CameraPosition:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3;
                    break;
            }
            if (this.output) {
                this.output.type = this._type;
            }
        }
    }
    /**
     * Gets a boolean indicating that the current connection point is a contextual value
     */
    get isContextual() {
        return this._contextualSource !== _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.None;
    }
    /**
     * Gets or sets the current contextual value
     */
    get contextualValue() {
        return this._contextualSource;
    }
    set contextualValue(value) {
        this._contextualSource = value;
        if (value !== _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.None) {
            this._systemSource = _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.None;
            switch (value) {
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Scale:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2;
                    break;
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Position:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Direction:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.ScaledDirection:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.InitialDirection:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.LocalPositionUpdated:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3;
                    break;
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Color:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.InitialColor:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.ColorDead:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.ColorStep:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.ScaledColorStep:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4;
                    break;
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Age:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Lifetime:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Angle:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.AgeGradient:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.Size:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.DirectionScale:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float;
                    break;
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.SpriteCellEnd:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.SpriteCellStart:
                case _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.SpriteCellIndex:
                    this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int;
                    break;
            }
            if (this.output) {
                this.output.type = this._type;
            }
        }
    }
    /**
     * Creates a new InputBlock
     * @param name defines the block name
     * @param type defines the type of the input (can be set to NodeParticleBlockConnectionPointTypes.AutoDetect)
     */
    constructor(name, type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.AutoDetect) {
        super(name);
        this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Undefined;
        /** Gets or set a value used to limit the range of float values */
        this.min = 0;
        /** Gets or set a value used to limit the range of float values */
        this.max = 0;
        /** Gets or sets the group to use to display this block in the Inspector */
        this.groupInInspector = "";
        /**
         * Gets or sets a boolean indicating that this input is displayed in the Inspector
         */
        this.displayInInspector = true;
        /** Gets an observable raised when the value is changed */
        this.onValueChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** @internal */
        this._systemSource = _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.None;
        this._contextualSource = _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_6__.NodeParticleContextualSources.None;
        this._type = type;
        this._isInput = true;
        this._storedValue = null;
        this.setDefaultValue();
        this.registerOutput("output", type);
    }
    /**
     * Gets or sets the value of that point.
     * Please note that this value will be ignored if valueCallback is defined
     */
    get value() {
        return this._storedValue;
    }
    set value(value) {
        if (this.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float) {
            if (this.min !== this.max) {
                value = Math.max(this.min, value);
                value = Math.min(this.max, value);
            }
        }
        this._storedValue = value;
        this.onValueChangedObservable.notifyObservers(this);
    }
    /**
     * Gets or sets a callback used to get the value of that point.
     * Please note that setting this value will force the connection point to ignore the value property
     */
    get valueCallback() {
        return this._valueCallback;
    }
    set valueCallback(value) {
        this._valueCallback = value;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "ParticleInputBlock";
    }
    /**
     * Gets the output component
     */
    get output() {
        return this._outputs[0];
    }
    /**
     * Set the input block to its default value (based on its type)
     */
    setDefaultValue() {
        switch (this.type) {
            case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int:
            case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float:
                this.value = 0;
                break;
            case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2:
                this.value = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector2.Zero();
                break;
            case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3:
                this.value = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector3.Zero();
                break;
            case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4:
                this.value = new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__.Color4(1, 1, 1, 1);
                break;
            case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Matrix:
                this.value = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Matrix.Identity();
                break;
        }
    }
    _build(state) {
        super._build(state);
        if (this.isSystemSource) {
            this.output._storedValue = null;
            this.output._storedFunction = (state) => {
                return state.getSystemValue(this._systemSource);
            };
        }
        else if (this.isContextual) {
            this.output._storedValue = null;
            this.output._storedFunction = (state) => {
                return state.getContextualValue(this._contextualSource);
            };
        }
        else {
            this.output._storedValue = this.value;
            // As a function to let the user dynamically change the value at runtime
            this.output._storedFunction = () => {
                return this.value;
            };
        }
    }
    dispose() {
        this.onValueChangedObservable.clear();
        super.dispose();
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.type = this.type;
        serializationObject.contextualValue = this.contextualValue;
        serializationObject.systemSource = this.systemSource;
        serializationObject.min = this.min;
        serializationObject.max = this.max;
        serializationObject.groupInInspector = this.groupInInspector;
        serializationObject.displayInInspector = this.displayInInspector;
        if (this._storedValue !== null && !this.isContextual && !this.isSystemSource) {
            if (this._storedValue.asArray) {
                serializationObject.valueType = "BABYLON." + this._storedValue.getClassName();
                serializationObject.value = this._storedValue.asArray();
            }
            else {
                serializationObject.valueType = "number";
                serializationObject.value = this._storedValue;
            }
        }
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this._type = serializationObject.type;
        this.contextualValue = serializationObject.contextualValue;
        this.systemSource = serializationObject.systemSource || _Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_7__.NodeParticleSystemSources.None;
        this.min = serializationObject.min || 0;
        this.max = serializationObject.max || 0;
        this.groupInInspector = serializationObject.groupInInspector || "";
        if (serializationObject.displayInInspector !== undefined) {
            this.displayInInspector = serializationObject.displayInInspector;
        }
        if (!serializationObject.valueType) {
            return;
        }
        if (serializationObject.valueType === "number") {
            this._storedValue = serializationObject.value;
        }
        else {
            const valueType = (0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.GetClass)(serializationObject.valueType);
            if (valueType) {
                this._storedValue = valueType.FromArray(serializationObject.value);
            }
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.ParticleInputBlock", ParticleInputBlock);


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

/***/ "../core/dist/Particles/Node/Blocks/particleMathBlock.js":
/*!***************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/particleMathBlock.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticleMathBlock: () => (/* binding */ ParticleMathBlock),
/* harmony export */   ParticleMathBlockOperations: () => (/* binding */ ParticleMathBlockOperations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Decorators/nodeDecorator */ "../core/dist/Decorators/nodeDecorator.js");
/* harmony import */ var _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * Operations supported by the Math block
 */
var ParticleMathBlockOperations;
(function (ParticleMathBlockOperations) {
    /** Add */
    ParticleMathBlockOperations[ParticleMathBlockOperations["Add"] = 0] = "Add";
    /** Subtract */
    ParticleMathBlockOperations[ParticleMathBlockOperations["Subtract"] = 1] = "Subtract";
    /** Multiply */
    ParticleMathBlockOperations[ParticleMathBlockOperations["Multiply"] = 2] = "Multiply";
    /** Divide */
    ParticleMathBlockOperations[ParticleMathBlockOperations["Divide"] = 3] = "Divide";
    /** Max */
    ParticleMathBlockOperations[ParticleMathBlockOperations["Max"] = 4] = "Max";
    /** Min */
    ParticleMathBlockOperations[ParticleMathBlockOperations["Min"] = 5] = "Min";
})(ParticleMathBlockOperations || (ParticleMathBlockOperations = {}));
/**
 * Block used to apply math functions
 */
class ParticleMathBlock extends _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__.NodeParticleBlock {
    /**
     * Create a new ParticleMathBlock
     * @param name defines the block name
     */
    constructor(name) {
        super(name);
        /**
         * Gets or sets the operation applied by the block
         */
        this.operation = ParticleMathBlockOperations.Add;
        this.registerInput("left", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.AutoDetect);
        this.registerInput("right", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.AutoDetect);
        this.registerOutput("output", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.BasedOnInput);
        this.output._typeConnectionSource = this.left;
        const excludedConnectionPointTypes = [
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Matrix,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Particle,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Texture,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.System,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.FloatGradient,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4Gradient,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2Gradient,
            _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3Gradient,
        ];
        this.left.excludedConnectionPointTypes.push(...excludedConnectionPointTypes);
        this.right.excludedConnectionPointTypes.push(...excludedConnectionPointTypes);
        this._linkConnectionTypes(0, 1);
        this._connectionObservers = [
            this.left.onConnectionObservable.add(() => this._updateInputOutputTypes()),
            this.left.onDisconnectionObservable.add(() => this._updateInputOutputTypes()),
            this.right.onConnectionObservable.add(() => this._updateInputOutputTypes()),
            this.right.onDisconnectionObservable.add(() => this._updateInputOutputTypes()),
        ];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "ParticleMathBlock";
    }
    /**
     * Gets the left input component
     */
    get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right input component
     */
    get right() {
        return this._inputs[1];
    }
    /**
     * Gets the geometry output component
     */
    get output() {
        return this._outputs[0];
    }
    _build(state) {
        let func;
        const left = this.left;
        const right = this.right;
        if (!left.isConnected || !right.isConnected) {
            this.output._storedFunction = null;
            this.output._storedValue = null;
            return;
        }
        const leftIsScalar = left.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float || left.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int;
        const rightIsScalar = right.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float || right.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int;
        // If both input types are scalars, then this is a scalar operation.
        const isScalar = leftIsScalar && rightIsScalar;
        switch (this.operation) {
            case ParticleMathBlockOperations.Add: {
                if (isScalar) {
                    func = (state) => {
                        return left.getConnectedValue(state) + right.getConnectedValue(state);
                    };
                }
                else if (leftIsScalar) {
                    func = (state) => {
                        return state.adapt(left, right.type).add(right.getConnectedValue(state));
                    };
                }
                else {
                    func = (state) => {
                        return left.getConnectedValue(state).add(state.adapt(right, left.type));
                    };
                }
                break;
            }
            case ParticleMathBlockOperations.Subtract: {
                if (isScalar) {
                    func = (state) => {
                        return left.getConnectedValue(state) - right.getConnectedValue(state);
                    };
                }
                else if (leftIsScalar) {
                    func = (state) => {
                        return state.adapt(left, right.type).subtract(right.getConnectedValue(state));
                    };
                }
                else {
                    func = (state) => {
                        return left.getConnectedValue(state).subtract(state.adapt(right, left.type));
                    };
                }
                break;
            }
            case ParticleMathBlockOperations.Multiply: {
                if (isScalar) {
                    func = (state) => {
                        return left.getConnectedValue(state) * right.getConnectedValue(state);
                    };
                }
                else if (leftIsScalar) {
                    func = (state) => {
                        return state.adapt(left, right.type).multiply(right.getConnectedValue(state));
                    };
                }
                else {
                    func = (state) => {
                        return left.getConnectedValue(state).multiply(state.adapt(right, left.type));
                    };
                }
                break;
            }
            case ParticleMathBlockOperations.Divide: {
                if (isScalar) {
                    func = (state) => {
                        return left.getConnectedValue(state) / right.getConnectedValue(state);
                    };
                }
                else if (leftIsScalar) {
                    func = (state) => {
                        return state.adapt(left, right.type).divide(right.getConnectedValue(state));
                    };
                }
                else {
                    func = (state) => {
                        return left.getConnectedValue(state).divide(state.adapt(right, left.type));
                    };
                }
                break;
            }
            case ParticleMathBlockOperations.Min: {
                if (isScalar) {
                    func = (state) => {
                        return Math.min(left.getConnectedValue(state), right.getConnectedValue(state));
                    };
                }
                else {
                    const [vector, scalar] = leftIsScalar ? [right, left] : [left, right];
                    switch (vector.type) {
                        case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2: {
                            func = (state) => {
                                return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Minimize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                            };
                            break;
                        }
                        case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3: {
                            func = (state) => {
                                return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Minimize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                            };
                            break;
                        }
                        case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4: {
                            func = (state) => {
                                const other = vector.getConnectedValue(state);
                                const { r, g, b, a } = state.adapt(scalar, vector.type);
                                return new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__.Color4(Math.min(other.r, r), Math.min(other.g, g), Math.min(other.b, b), Math.min(other.a, a));
                            };
                            break;
                        }
                    }
                }
                break;
            }
            case ParticleMathBlockOperations.Max: {
                if (isScalar) {
                    func = (state) => {
                        return Math.max(left.getConnectedValue(state), right.getConnectedValue(state));
                    };
                }
                else {
                    const [vector, scalar] = leftIsScalar ? [right, left] : [left, right];
                    switch (vector.type) {
                        case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2: {
                            func = (state) => {
                                return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.Maximize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                            };
                            break;
                        }
                        case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3: {
                            func = (state) => {
                                return core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Maximize(vector.getConnectedValue(state), state.adapt(scalar, vector.type));
                            };
                            break;
                        }
                        case _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4: {
                            func = (state) => {
                                const other = vector.getConnectedValue(state);
                                const { r, g, b, a } = state.adapt(scalar, vector.type);
                                return new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_5__.Color4(Math.max(other.r, r), Math.min(other.g, g), Math.min(other.b, b), Math.min(other.a, a));
                            };
                            break;
                        }
                    }
                    break;
                }
            }
        }
        this.output._storedFunction = (state) => {
            if (left.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int) {
                return func(state) | 0;
            }
            return func(state);
        };
    }
    _updateInputOutputTypes() {
        // First update the output type with the initial assumption that we'll base it on the left input.
        this.output._typeConnectionSource = this.left;
        if (this.left.isConnected && this.right.isConnected) {
            // Both inputs are connected, so we need to determine the output type based on the input types.
            if (this.left.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int ||
                (this.left.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float && this.right.type !== _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int)) {
                this.output._typeConnectionSource = this.right;
            }
        }
        else if (this.left.isConnected !== this.right.isConnected) {
            // Only one input is connected, so we need to determine the output type based on the connected input.
            this.output._typeConnectionSource = this.left.isConnected ? this.left : this.right;
        }
        // Next update the accepted connection point types for the inputs based on the current input connection state.
        if (this.left.isConnected || this.right.isConnected) {
            for (const [first, second] of [
                [this.left, this.right],
                [this.right, this.left],
            ]) {
                // Always allow Ints and Floats.
                first.acceptedConnectionPointTypes = [_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int, _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float];
                if (second.isConnected) {
                    // The same types as the connected input are always allowed.
                    first.acceptedConnectionPointTypes.push(second.type);
                    // If the other input is a scalar, then we also allow Vector types.
                    if (second.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Int || second.type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Float) {
                        first.acceptedConnectionPointTypes.push(_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector2, _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Vector3, _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_4__.NodeParticleBlockConnectionPointTypes.Color4);
                    }
                }
            }
        }
    }
    /**
     * Release resources
     */
    dispose() {
        super.dispose();
        for (const observer of this._connectionObservers) {
            observer.remove();
        }
        this._connectionObservers.length = 0;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.operation = this.operation;
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.operation = serializationObject.operation;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_2__.editableInPropertyPage)("Operation", 5 /* PropertyTypeForEdition.List */, "ADVANCED", {
        notifiers: { rebuild: true },
        embedded: true,
        options: [
            { label: "Add", value: ParticleMathBlockOperations.Add },
            { label: "Subtract", value: ParticleMathBlockOperations.Subtract },
            { label: "Multiply", value: ParticleMathBlockOperations.Multiply },
            { label: "Divide", value: ParticleMathBlockOperations.Divide },
            { label: "Max", value: ParticleMathBlockOperations.Max },
            { label: "Min", value: ParticleMathBlockOperations.Min },
        ],
    })
], ParticleMathBlock.prototype, "operation", void 0);
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.ParticleMathBlock", ParticleMathBlock);


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

/***/ "../core/dist/Particles/Node/Blocks/particleSourceTextureBlock.js":
/*!************************************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/particleSourceTextureBlock.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticleTextureSourceBlock: () => (/* binding */ ParticleTextureSourceBlock)
/* harmony export */ });
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var core_Misc_textureTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/textureTools */ "../core/dist/Misc/textureTools.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * Block used to provide a texture for particles in a particle system
 */
class ParticleTextureSourceBlock extends _nodeParticleBlock__WEBPACK_IMPORTED_MODULE_3__.NodeParticleBlock {
    /**
     * Gets or sets the URL of the texture to be used by this block.
     */
    get url() {
        return this._url;
    }
    set url(value) {
        if (this._url === value) {
            return;
        }
        this._cachedData = null;
        this._url = value;
        this._textureDataUrl = "";
        this._sourceTexture = null;
    }
    /**
     * Gets or sets the data URL of the texture to be used by this block.
     * This is a base64 encoded string representing the texture data.
     */
    get textureDataUrl() {
        return this._textureDataUrl;
    }
    set textureDataUrl(value) {
        if (this._textureDataUrl === value) {
            return;
        }
        this._cachedData = null;
        this._textureDataUrl = value;
        this._url = "";
        this._sourceTexture = null;
    }
    /**
     * Directly sets the texture to be used by this block.
     * This value will not be serialized.
     */
    set sourceTexture(value) {
        if (this._sourceTexture === value) {
            return;
        }
        this._cachedData = null;
        this._sourceTexture = value;
        this._url = value.url || "";
        this._textureDataUrl = "";
    }
    /**
     * Create a new ParticleTextureSourceBlock
     * @param name defines the block name
     */
    constructor(name) {
        super(name);
        this._url = "";
        this._textureDataUrl = "";
        this._sourceTexture = null;
        this._cachedData = null;
        /**
         * Indicates if the texture data should be serialized as a base64 string.
         */
        this.serializedCachedData = false;
        this.registerOutput("texture", _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_2__.NodeParticleBlockConnectionPointTypes.Texture);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "ParticleTextureSourceBlock";
    }
    /**
     * Gets the texture output component
     */
    get texture() {
        return this._outputs[0];
    }
    /**
     * Gets the texture content as a promise
     * @returns a promise that resolves to the texture content, including width, height, and pixel data
     */
    async extractTextureContentAsync() {
        if (!this.texture._storedValue && !this._sourceTexture) {
            return null;
        }
        if (this._cachedData) {
            return this._cachedData;
        }
        const texture = this.texture._storedValue || this._sourceTexture;
        return await new Promise((resolve, reject) => {
            if (!texture.isReady()) {
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                texture.onLoadObservable.addOnce(async () => {
                    try {
                        this._cachedData = await this.extractTextureContentAsync();
                        resolve(this._cachedData);
                    }
                    catch (e) {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject(e);
                    }
                });
                return;
            }
            const size = texture.getSize();
            if (texture.getContent) {
                const proceduralTexture = texture;
                proceduralTexture
                    .getContent()
                    // eslint-disable-next-line github/no-then
                    ?.then((data) => {
                    this._cachedData = {
                        width: size.width,
                        height: size.height,
                        data: data,
                    };
                    resolve(this._cachedData);
                })
                    // eslint-disable-next-line github/no-then
                    .catch(reject);
            }
            else {
                core_Misc_textureTools__WEBPACK_IMPORTED_MODULE_4__.TextureTools.GetTextureDataAsync(texture, size.width, size.height)
                    // eslint-disable-next-line github/no-then
                    .then((data) => {
                    this._cachedData = {
                        width: size.width,
                        height: size.height,
                        data: new Uint8ClampedArray(data),
                    };
                    texture.dispose();
                    resolve(this._cachedData);
                })
                    // eslint-disable-next-line github/no-then
                    .catch(reject);
            }
        });
    }
    /**
     * Builds the block
     * @param state defines the current build state
     */
    _build(state) {
        if (this._sourceTexture) {
            this.texture._storedValue = this._sourceTexture;
            return;
        }
        if (!this._textureDataUrl && !this._url) {
            this.texture._storedValue = null;
            return;
        }
        if (this._textureDataUrl) {
            this.texture._storedValue = new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__.Texture(this._textureDataUrl, state.scene);
            return;
        }
        this.texture._storedValue = new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__.Texture(this._url, state.scene);
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.url = this.url;
        serializationObject.serializedCachedData = this.serializedCachedData;
        if (this.serializedCachedData) {
            serializationObject.textureDataUrl = this.textureDataUrl;
        }
        return serializationObject;
    }
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.url = serializationObject.url;
        this.serializedCachedData = !!serializationObject.serializedCachedData;
        if (serializationObject.textureDataUrl) {
            this.textureDataUrl = serializationObject.textureDataUrl;
        }
    }
    dispose() {
        if (!this._sourceTexture) {
            if (this.texture._storedValue) {
                this.texture._storedValue.dispose();
                this.texture._storedValue = null;
            }
        }
        super.dispose();
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.ParticleTextureSourceBlock", ParticleTextureSourceBlock);


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

/***/ "../core/dist/Particles/Node/Blocks/systemBlock.js":
/*!*********************************************************!*\
  !*** ../core/dist/Particles/Node/Blocks/systemBlock.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemBlock: () => (/* binding */ SystemBlock)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Decorators/nodeDecorator */ "../core/dist/Decorators/nodeDecorator.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Particles/baseParticleSystem */ "../core/dist/Particles/baseParticleSystem.js");
/* harmony import */ var core_Particles_Node_nodeParticleBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Particles/Node/nodeParticleBlock */ "../core/dist/Particles/Node/nodeParticleBlock.js");
/* harmony import */ var core_Particles_Node_Blocks_Triggers_triggerTools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Particles/Node/Blocks/Triggers/triggerTools */ "../core/dist/Particles/Node/Blocks/Triggers/triggerTools.js");
/* harmony import */ var core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










/**
 * Block used to get a system of particles
 */
class SystemBlock extends core_Particles_Node_nodeParticleBlock__WEBPACK_IMPORTED_MODULE_5__.NodeParticleBlock {
    /**
     * Create a new SystemBlock
     * @param name defines the block name
     */
    constructor(name) {
        super(name);
        /**
         * Gets or sets the blend mode for the particle system
         */
        this.blendMode = core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__.BaseParticleSystem.BLENDMODE_ONEONE;
        /**
         * Gets or sets the epsilon value used for comparison
         */
        this.capacity = 1000;
        /**
         * Gets or sets the manual emit count
         */
        this.manualEmitCount = -1;
        /**
         * Gets or sets the target stop duration for the particle system
         */
        this.startDelay = 0;
        /**
         * Gets or sets the target stop duration for the particle system
         */
        this.updateSpeed = 0.0167;
        /**
         * Gets or sets the number of pre-warm cycles before rendering the particle system
         */
        this.preWarmCycles = 0;
        /**
         * Gets or sets the time step multiplier used for pre-warm
         */
        this.preWarmStepOffset = 0;
        /**
         * Gets or sets a boolean indicating if the system is billboard based
         */
        this.isBillboardBased = true;
        /**
         * Gets or sets a boolean indicating if the system coordinate space is local or global
         */
        this.isLocal = false;
        /**
         * Gets or sets a boolean indicating if the system should be disposed when stopped
         */
        this.disposeOnStop = false;
        /**
         * Gets or sets a boolean indicating if the system should not start automatically
         */
        this.doNoStart = false;
        /** @internal */
        this._internalId = SystemBlock._IdCounter++;
        this._isSystem = true;
        this.registerInput("particle", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.Particle);
        this.registerInput("emitRate", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.Int, true, 10, 0);
        this.registerInput("texture", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.Texture);
        this.registerInput("translationPivot", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.Vector2, true);
        this.registerInput("textureMask", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.Color4, true);
        this.registerInput("targetStopDuration", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.Float, true, 0, 0);
        this.registerInput("onStart", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.System, true);
        this.registerInput("onEnd", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.System, true);
        this.registerOutput("system", core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_7__.NodeParticleBlockConnectionPointTypes.System);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */
    getClassName() {
        return "SystemBlock";
    }
    /**
     * Gets the particle input component
     */
    get particle() {
        return this._inputs[0];
    }
    /**
     * Gets the emitRate input component
     */
    get emitRate() {
        return this._inputs[1];
    }
    /**
     * Gets the texture input component
     */
    get texture() {
        return this._inputs[2];
    }
    /**
     * Gets the translationPivot input component
     */
    get translationPivot() {
        return this._inputs[3];
    }
    /**
     * Gets the textureMask input component
     */
    get textureMask() {
        return this._inputs[4];
    }
    /**
     * Gets the targetStopDuration input component
     */
    get targetStopDuration() {
        return this._inputs[5];
    }
    /**
     * Gets the onStart input component
     */
    get onStart() {
        return this._inputs[6];
    }
    /**
     * Gets the onEnd input component
     */
    get onEnd() {
        return this._inputs[7];
    }
    /**
     * Gets the system output component
     */
    get system() {
        return this._outputs[0];
    }
    /**
     * Builds the block and return a functional particle system
     * @param state defines the building state
     * @returns the built particle system
     */
    createSystem(state) {
        state.capacity = this.capacity;
        state.buildId = this._buildId++;
        this.build(state);
        const particleSystem = this.particle.getConnectedValue(state);
        particleSystem.particleTexture = this.texture.getConnectedValue(state);
        particleSystem.emitRate = this.emitRate.getConnectedValue(state);
        particleSystem.manualEmitCount = this.manualEmitCount;
        particleSystem.updateSpeed = this.updateSpeed;
        particleSystem.preWarmCycles = this.preWarmCycles;
        particleSystem.preWarmStepOffset = this.preWarmStepOffset;
        particleSystem.blendMode = this.blendMode;
        particleSystem.name = this.name;
        particleSystem._targetStopDuration = this.targetStopDuration.getConnectedValue(state) ?? 0;
        particleSystem.startDelay = this.startDelay;
        particleSystem.isBillboardBased = this.isBillboardBased;
        particleSystem.translationPivot = this.translationPivot.getConnectedValue(state) || core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_2__.Vector2.Zero();
        particleSystem.textureMask = this.textureMask.getConnectedValue(state) ?? new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_3__.Color4(1, 1, 1, 1);
        particleSystem.isLocal = this.isLocal;
        particleSystem.disposeOnStop = this.disposeOnStop;
        // The emit rate can vary if it is connected to another block like a gradient
        particleSystem._calculateEmitRate = () => {
            state.systemContext = particleSystem;
            return this.emitRate.getConnectedValue(state);
        };
        this.system._storedValue = this;
        particleSystem.canStart = () => {
            return !this.doNoStart;
        };
        particleSystem.onStartedObservable.add((system) => {
            // Triggers
            const onStartSystem = this.onStart.getConnectedValue(state);
            if (onStartSystem) {
                system.onStartedObservable.addOnce(() => {
                    state.systemContext = particleSystem;
                    const clone = (0,core_Particles_Node_Blocks_Triggers_triggerTools__WEBPACK_IMPORTED_MODULE_6__._TriggerSubEmitter)(onStartSystem, state.scene, state.emitterPosition);
                    this.onDisposeObservable.addOnce(() => {
                        // Clean up the cloned system when the original system is disposed
                        clone.dispose();
                    });
                });
            }
            const onEndSystem = this.onEnd.getConnectedValue(state);
            if (onEndSystem) {
                system.onStoppedObservable.addOnce(() => {
                    state.systemContext = particleSystem;
                    const clone = (0,core_Particles_Node_Blocks_Triggers_triggerTools__WEBPACK_IMPORTED_MODULE_6__._TriggerSubEmitter)(onEndSystem, state.scene, state.emitterPosition);
                    this.onDisposeObservable.addOnce(() => {
                        // Clean up the cloned system when the original system is disposed
                        clone.dispose();
                    });
                });
            }
        });
        this.onDisposeObservable.addOnce(() => {
            particleSystem.dispose();
        });
        // Return
        return particleSystem;
    }
    /**
     * Serializes the system block
     * @returns The serialized object
     */
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.capacity = this.capacity;
        serializationObject.manualEmitCount = this.manualEmitCount;
        serializationObject.blendMode = this.blendMode;
        serializationObject.updateSpeed = this.updateSpeed;
        serializationObject.preWarmCycles = this.preWarmCycles;
        serializationObject.preWarmStepOffset = this.preWarmStepOffset;
        serializationObject.isBillboardBased = this.isBillboardBased;
        serializationObject.isLocal = this.isLocal;
        serializationObject.disposeOnStop = this.disposeOnStop;
        serializationObject.doNoStart = this.doNoStart;
        serializationObject.startDelay = this.startDelay;
        return serializationObject;
    }
    /**
     * Deserializes the system block
     * @param serializationObject The serialized system
     */
    _deserialize(serializationObject) {
        super._deserialize(serializationObject);
        this.capacity = serializationObject.capacity;
        this.manualEmitCount = serializationObject.manualEmitCount ?? -1;
        this.updateSpeed = serializationObject.updateSpeed ?? 0.0167;
        this.preWarmCycles = serializationObject.preWarmCycles ?? 0;
        this.preWarmStepOffset = serializationObject.preWarmStepOffset ?? 0;
        this.isBillboardBased = serializationObject.isBillboardBased ?? true;
        this.isLocal = serializationObject.isLocal ?? false;
        this.disposeOnStop = serializationObject.disposeOnStop ?? false;
        this.doNoStart = !!serializationObject.doNoStart;
        if (serializationObject.emitRate !== undefined) {
            this.emitRate.value = serializationObject.emitRate;
        }
        if (serializationObject.blendMode !== undefined) {
            this.blendMode = serializationObject.blendMode;
        }
        if (serializationObject.startDelay !== undefined) {
            this.startDelay = serializationObject.startDelay;
        }
    }
}
SystemBlock._IdCounter = 0;
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Blend mode", 5 /* PropertyTypeForEdition.List */, "ADVANCED", {
        notifiers: { rebuild: true },
        embedded: true,
        options: [
            { label: "OneOne", value: core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__.BaseParticleSystem.BLENDMODE_ONEONE },
            { label: "Standard", value: core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__.BaseParticleSystem.BLENDMODE_STANDARD },
            { label: "Add", value: core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__.BaseParticleSystem.BLENDMODE_ADD },
            { label: "Multiply", value: core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__.BaseParticleSystem.BLENDMODE_MULTIPLY },
            { label: "MultiplyAdd", value: core_Particles_baseParticleSystem__WEBPACK_IMPORTED_MODULE_4__.BaseParticleSystem.BLENDMODE_MULTIPLYADD },
        ],
    })
], SystemBlock.prototype, "blendMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Capacity", 2 /* PropertyTypeForEdition.Int */, "ADVANCED", { embedded: true, notifiers: { rebuild: true }, min: 0, max: 10000 })
], SystemBlock.prototype, "capacity", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Manual emit count", 2 /* PropertyTypeForEdition.Int */, "ADVANCED", { embedded: true, notifiers: { rebuild: true }, min: -1 })
], SystemBlock.prototype, "manualEmitCount", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Delay start(ms)", 1 /* PropertyTypeForEdition.Float */, "ADVANCED", { embedded: true, notifiers: { rebuild: true }, min: 0 })
], SystemBlock.prototype, "startDelay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("updateSpeed", 1 /* PropertyTypeForEdition.Float */, "ADVANCED", { embedded: true, notifiers: { rebuild: true }, min: 0, max: 0.1 })
], SystemBlock.prototype, "updateSpeed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Pre-warm cycles", 1 /* PropertyTypeForEdition.Float */, "ADVANCED", { embedded: true, notifiers: { rebuild: true }, min: 0 })
], SystemBlock.prototype, "preWarmCycles", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Pre-warm step multiplier", 1 /* PropertyTypeForEdition.Float */, "ADVANCED", { embedded: true, notifiers: { rebuild: true }, min: 0 })
], SystemBlock.prototype, "preWarmStepOffset", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Is billboard based", 0 /* PropertyTypeForEdition.Boolean */, "ADVANCED", { embedded: true, notifiers: { rebuild: true } })
], SystemBlock.prototype, "isBillboardBased", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Is local", 0 /* PropertyTypeForEdition.Boolean */, "ADVANCED", { embedded: true, notifiers: { rebuild: true } })
], SystemBlock.prototype, "isLocal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Dispose on stop", 0 /* PropertyTypeForEdition.Boolean */, "ADVANCED", { embedded: true, notifiers: { rebuild: true } })
], SystemBlock.prototype, "disposeOnStop", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,core_Decorators_nodeDecorator__WEBPACK_IMPORTED_MODULE_0__.editableInPropertyPage)("Do no start", 0 /* PropertyTypeForEdition.Boolean */, "ADVANCED", { embedded: true, notifiers: { rebuild: true } })
], SystemBlock.prototype, "doNoStart", void 0);
(0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.SystemBlock", SystemBlock);


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

/***/ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js":
/*!**********************************************************************************!*\
  !*** ../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleBlockConnectionPointTypes: () => (/* binding */ NodeParticleBlockConnectionPointTypes)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Defines the kind of connection point for node geometry
 */
var NodeParticleBlockConnectionPointTypes;
(function (NodeParticleBlockConnectionPointTypes) {
    /** Int */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Int"] = 1] = "Int";
    /** Float */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Float"] = 2] = "Float";
    /** Vector2 */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector2"] = 4] = "Vector2";
    /** Vector3 */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector3"] = 8] = "Vector3";
    /** Matrix */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Matrix"] = 16] = "Matrix";
    /** Particle */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Particle"] = 32] = "Particle";
    /** Texture */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Texture"] = 64] = "Texture";
    /** Color4 */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Color4"] = 128] = "Color4";
    /** FloatGradient */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["FloatGradient"] = 256] = "FloatGradient";
    /** Vector2Gradient */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector2Gradient"] = 512] = "Vector2Gradient";
    /** Vector3Gradient */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Vector3Gradient"] = 1024] = "Vector3Gradient";
    /** Color4Gradient */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Color4Gradient"] = 2048] = "Color4Gradient";
    /** System */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["System"] = 4096] = "System";
    /** Detect type based on connection */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["AutoDetect"] = 8192] = "AutoDetect";
    /** Output type that will be defined by input type */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["BasedOnInput"] = 16384] = "BasedOnInput";
    /** Undefined */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["Undefined"] = 32768] = "Undefined";
    /** Bitmask of all types */
    NodeParticleBlockConnectionPointTypes[NodeParticleBlockConnectionPointTypes["All"] = 65535] = "All";
})(NodeParticleBlockConnectionPointTypes || (NodeParticleBlockConnectionPointTypes = {}));


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

/***/ "../core/dist/Particles/Node/Enums/nodeParticleContextualSources.js":
/*!**************************************************************************!*\
  !*** ../core/dist/Particles/Node/Enums/nodeParticleContextualSources.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleContextualSources: () => (/* binding */ NodeParticleContextualSources)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Defines the kind of contextual sources for node particles
 */
var NodeParticleContextualSources;
(function (NodeParticleContextualSources) {
    /** None */
    NodeParticleContextualSources[NodeParticleContextualSources["None"] = 0] = "None";
    /** Position */
    NodeParticleContextualSources[NodeParticleContextualSources["Position"] = 1] = "Position";
    /** Direction */
    NodeParticleContextualSources[NodeParticleContextualSources["Direction"] = 2] = "Direction";
    /** Age */
    NodeParticleContextualSources[NodeParticleContextualSources["Age"] = 3] = "Age";
    /** Lifetime */
    NodeParticleContextualSources[NodeParticleContextualSources["Lifetime"] = 4] = "Lifetime";
    /** Color */
    NodeParticleContextualSources[NodeParticleContextualSources["Color"] = 5] = "Color";
    /** ScaledDirection */
    NodeParticleContextualSources[NodeParticleContextualSources["ScaledDirection"] = 6] = "ScaledDirection";
    /** Scale */
    NodeParticleContextualSources[NodeParticleContextualSources["Scale"] = 7] = "Scale";
    /** AgeGradient */
    NodeParticleContextualSources[NodeParticleContextualSources["AgeGradient"] = 8] = "AgeGradient";
    /** Angle */
    NodeParticleContextualSources[NodeParticleContextualSources["Angle"] = 9] = "Angle";
    /** SpriteCellIndex */
    NodeParticleContextualSources[NodeParticleContextualSources["SpriteCellIndex"] = 16] = "SpriteCellIndex";
    /** SpriteCellStart */
    NodeParticleContextualSources[NodeParticleContextualSources["SpriteCellStart"] = 17] = "SpriteCellStart";
    /** SpriteCellEnd */
    NodeParticleContextualSources[NodeParticleContextualSources["SpriteCellEnd"] = 18] = "SpriteCellEnd";
    /** Initial Color */
    NodeParticleContextualSources[NodeParticleContextualSources["InitialColor"] = 19] = "InitialColor";
    /** Color Dead*/
    NodeParticleContextualSources[NodeParticleContextualSources["ColorDead"] = 20] = "ColorDead";
    /** Initial Direction */
    NodeParticleContextualSources[NodeParticleContextualSources["InitialDirection"] = 21] = "InitialDirection";
    /** Color Step */
    NodeParticleContextualSources[NodeParticleContextualSources["ColorStep"] = 22] = "ColorStep";
    /** Scaled Color Step */
    NodeParticleContextualSources[NodeParticleContextualSources["ScaledColorStep"] = 23] = "ScaledColorStep";
    /** Local Position Updated */
    NodeParticleContextualSources[NodeParticleContextualSources["LocalPositionUpdated"] = 24] = "LocalPositionUpdated";
    /** Size */
    NodeParticleContextualSources[NodeParticleContextualSources["Size"] = 25] = "Size";
    /** Direction Scale */
    NodeParticleContextualSources[NodeParticleContextualSources["DirectionScale"] = 32] = "DirectionScale";
})(NodeParticleContextualSources || (NodeParticleContextualSources = {}));


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

/***/ "../core/dist/Particles/Node/Enums/nodeParticleSystemSources.js":
/*!**********************************************************************!*\
  !*** ../core/dist/Particles/Node/Enums/nodeParticleSystemSources.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleSystemSources: () => (/* binding */ NodeParticleSystemSources)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Enum used to define system values e.g. values automatically provided by the system
 */
var NodeParticleSystemSources;
(function (NodeParticleSystemSources) {
    /** None */
    NodeParticleSystemSources[NodeParticleSystemSources["None"] = 0] = "None";
    /** Time */
    NodeParticleSystemSources[NodeParticleSystemSources["Time"] = 1] = "Time";
    /** Delta time */
    NodeParticleSystemSources[NodeParticleSystemSources["Delta"] = 2] = "Delta";
    /** Emitter */
    NodeParticleSystemSources[NodeParticleSystemSources["Emitter"] = 3] = "Emitter";
    /** Camera position */
    NodeParticleSystemSources[NodeParticleSystemSources["CameraPosition"] = 4] = "CameraPosition";
})(NodeParticleSystemSources || (NodeParticleSystemSources = {}));


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

/***/ "../core/dist/Particles/Node/nodeParticleBlock.js":
/*!********************************************************!*\
  !*** ../core/dist/Particles/Node/nodeParticleBlock.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleBlock: () => (/* binding */ NodeParticleBlock)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var core_Misc_uniqueIdGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/uniqueIdGenerator */ "../core/dist/Misc/uniqueIdGenerator.js");
/* harmony import */ var _nodeParticleBlockConnectionPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodeParticleBlockConnectionPoint */ "../core/dist/Particles/Node/nodeParticleBlockConnectionPoint.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * Defines a block that can be used inside a node based particle system
 */
class NodeParticleBlock {
    /**
     * Gets a boolean indicating if this block is a teleport out
     */
    get isTeleportOut() {
        return this._isTeleportOut;
    }
    /**
     * Gets a boolean indicating if this block is a teleport in
     */
    get isTeleportIn() {
        return this._isTeleportIn;
    }
    /**
     * Gets a boolean indicating that this block is a system block
     */
    get isSystem() {
        return this._isSystem;
    }
    /**
     * Gets a boolean indicating that this block is an input block
     */
    get isInput() {
        return this._isInput;
    }
    /**
     * Gets a boolean indicating if this block is a debug block
     */
    get isDebug() {
        return this._isDebug;
    }
    /**
     * Gets or set the name of the block
     */
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Gets the current class name e.g. "NodeParticleBlock"
     * @returns the class name
     */
    getClassName() {
        return "NodeParticleBlock";
    }
    /**
     * Gets the list of input points
     */
    get inputs() {
        return this._inputs;
    }
    /** Gets the list of output points */
    get outputs() {
        return this._outputs;
    }
    /**
     * Creates a new NodeParticleBlock
     * @param name defines the block name
     */
    constructor(name) {
        this._name = "";
        this._isInput = false;
        this._isSystem = false;
        this._isDebug = false;
        this._isTeleportOut = false;
        this._isTeleportIn = false;
        /** @internal */
        this._inputs = new Array();
        /** @internal */
        this._outputs = new Array();
        /**
         * Gets an observable raised when the block is built
         */
        this.onBuildObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_4__.Observable();
        /**
         * Gets an observable raised when the block is disposed
         */
        this.onDisposeObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_4__.Observable();
        /**
         * Gets an observable raised when the inputs of the block change
         */
        this.onInputChangedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_4__.Observable();
        /** Gets or sets a boolean indicating that this input can be edited from a collapsed frame */
        this.visibleOnFrame = false;
        this._name = name;
        this.uniqueId = core_Misc_uniqueIdGenerator__WEBPACK_IMPORTED_MODULE_1__.UniqueIdGenerator.UniqueId;
    }
    _inputRename(name) {
        return name;
    }
    _outputRename(name) {
        return name;
    }
    /**
     * Checks if the current block is an ancestor of a given block
     * @param block defines the potential descendant block to check
     * @returns true if block is a descendant
     */
    isAnAncestorOf(block) {
        for (const output of this._outputs) {
            if (!output.hasEndpoints) {
                continue;
            }
            for (const endpoint of output.endpoints) {
                if (endpoint.ownerBlock === block) {
                    return true;
                }
                if (endpoint.ownerBlock.isAnAncestorOf(block)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Checks if the current block is an ancestor of a given type
     * @param type defines the potential type to check
     * @returns true if block is a descendant
     */
    isAnAncestorOfType(type) {
        if (this.getClassName() === type) {
            return true;
        }
        for (const output of this._outputs) {
            if (!output.hasEndpoints) {
                continue;
            }
            for (const endpoint of output.endpoints) {
                if (endpoint.ownerBlock.isAnAncestorOfType(type)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Find an input by its name
     * @param name defines the name of the input to look for
     * @returns the input or null if not found
     */
    getInputByName(name) {
        const filter = this._inputs.filter((e) => e.name === name);
        if (filter.length) {
            return filter[0];
        }
        return null;
    }
    _linkConnectionTypes(inputIndex0, inputIndex1, looseCoupling = false) {
        if (looseCoupling) {
            this._inputs[inputIndex1]._acceptedConnectionPointType = this._inputs[inputIndex0];
        }
        else {
            this._inputs[inputIndex0]._linkedConnectionSource = this._inputs[inputIndex1];
            this._inputs[inputIndex0]._isMainLinkSource = true;
        }
        this._inputs[inputIndex1]._linkedConnectionSource = this._inputs[inputIndex0];
    }
    /**
     * Register a new input. Must be called inside a block constructor
     * @param name defines the connection point name
     * @param type defines the connection point type
     * @param isOptional defines a boolean indicating that this input can be omitted
     * @param value value to return if there is no connection
     * @param valueMin min value accepted for value
     * @param valueMax max value accepted for value
     * @returns the current block
     */
    registerInput(name, type, isOptional = false, value, valueMin, valueMax) {
        const point = new _nodeParticleBlockConnectionPoint__WEBPACK_IMPORTED_MODULE_2__.NodeParticleConnectionPoint(name, this, 0 /* NodeParticleConnectionPointDirection.Input */);
        point.type = type;
        point.isOptional = isOptional;
        point.defaultValue = value;
        point.value = value;
        point.valueMin = valueMin;
        point.valueMax = valueMax;
        this._inputs.push(point);
        this.onInputChangedObservable.notifyObservers(point);
        return this;
    }
    /**
     * Register a new output. Must be called inside a block constructor
     * @param name defines the connection point name
     * @param type defines the connection point type
     * @param point an already created connection point. If not provided, create a new one
     * @returns the current block
     */
    registerOutput(name, type, point) {
        point = point ?? new _nodeParticleBlockConnectionPoint__WEBPACK_IMPORTED_MODULE_2__.NodeParticleConnectionPoint(name, this, 1 /* NodeParticleConnectionPointDirection.Output */);
        point.type = type;
        this._outputs.push(point);
        return this;
    }
    /**
     * Builds the block. Must be implemented by derived classes.
     * @param _state defines the current build state
     */
    _build(_state) { }
    _customBuildStep(_state) {
        // Must be implemented by children
    }
    /**
     * Builds the block
     * @param state defines the current build state
     * @returns the built block
     */
    build(state) {
        if (this._buildId === state.buildId) {
            return true;
        }
        if (this._outputs.length > 0) {
            if (!this._outputs.some((o) => o.hasEndpoints) && !this.isDebug && !this.isSystem) {
                return false;
            }
        }
        this._buildId = state.buildId;
        // Check if "parent" blocks are compiled
        for (const input of this._inputs) {
            if (!input.connectedPoint) {
                if (!input.isOptional) {
                    // Emit a warning
                    state.notConnectedNonOptionalInputs.push(input);
                }
                continue;
            }
            const block = input.connectedPoint.ownerBlock;
            if (block && block !== this && !block.isSystem) {
                block.build(state);
            }
        }
        this._customBuildStep(state);
        // Logs
        if (state.verbose) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Log(`Building ${this.name} [${this.getClassName()}]`);
        }
        this._build(state);
        this.onBuildObservable.notifyObservers(this);
        return false;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */
    serialize() {
        const serializationObject = {};
        serializationObject.customType = "BABYLON." + this.getClassName();
        serializationObject.id = this.uniqueId;
        serializationObject.name = this.name;
        serializationObject.visibleOnFrame = this.visibleOnFrame;
        serializationObject.comments = this.comments;
        serializationObject.inputs = [];
        serializationObject.outputs = [];
        for (const input of this.inputs) {
            serializationObject.inputs.push(input.serialize());
        }
        for (const output of this.outputs) {
            serializationObject.outputs.push(output.serialize(false));
        }
        return serializationObject;
    }
    /**
     * @internal
     */
    _deserialize(serializationObject) {
        this._name = serializationObject.name;
        this.comments = serializationObject.comments;
        this.visibleOnFrame = !!serializationObject.visibleOnFrame;
        this._deserializePortDisplayNamesAndExposedOnFrame(serializationObject);
    }
    _deserializePortDisplayNamesAndExposedOnFrame(serializationObject) {
        const serializedInputs = serializationObject.inputs;
        const serializedOutputs = serializationObject.outputs;
        if (serializedInputs) {
            for (const port of serializedInputs) {
                const input = this.inputs.find((i) => i.name === port.name);
                if (!input) {
                    return;
                }
                if (port.displayName) {
                    input.displayName = port.displayName;
                }
                if (port.isExposedOnFrame) {
                    input.isExposedOnFrame = port.isExposedOnFrame;
                    input.exposedPortPosition = port.exposedPortPosition;
                }
                if (port.value !== undefined && port.value !== null) {
                    if (port.valueType === "number") {
                        input.value = port.value;
                    }
                    else {
                        const valueType = (0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.GetClass)(port.valueType);
                        if (valueType) {
                            input.value = valueType.FromArray(port.value);
                        }
                    }
                }
            }
        }
        if (serializedOutputs) {
            for (let i = 0; i < serializedOutputs.length; i++) {
                const port = serializedOutputs[i];
                if (port.displayName) {
                    this.outputs[i].displayName = port.displayName;
                }
                if (port.isExposedOnFrame) {
                    this.outputs[i].isExposedOnFrame = port.isExposedOnFrame;
                    this.outputs[i].exposedPortPosition = port.exposedPortPosition;
                }
            }
        }
    }
    /**
     * Clone the current block to a new identical block
     * @returns a copy of the current block
     */
    clone() {
        const serializationObject = this.serialize();
        const blockType = (0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_5__.GetClass)(serializationObject.customType);
        if (blockType) {
            const block = new blockType();
            block._deserialize(serializationObject);
            return block;
        }
        return null;
    }
    /**
     * Release resources
     */
    dispose() {
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        for (const input of this.inputs) {
            input.dispose();
        }
        for (const output of this.outputs) {
            output.dispose();
        }
        this.onBuildObservable.clear();
        this.onInputChangedObservable.clear();
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("comment")
], NodeParticleBlock.prototype, "comments", void 0);


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

/***/ "../core/dist/Particles/Node/nodeParticleBlockConnectionPoint.js":
/*!***********************************************************************!*\
  !*** ../core/dist/Particles/Node/nodeParticleBlockConnectionPoint.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleConnectionPoint: () => (/* binding */ NodeParticleConnectionPoint),
/* harmony export */   NodeParticleConnectionPointCompatibilityStates: () => (/* binding */ NodeParticleConnectionPointCompatibilityStates),
/* harmony export */   NodeParticleConnectionPointDirection: () => (/* binding */ NodeParticleConnectionPointDirection)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Enum used to define the compatibility state between two connection points
 */
var NodeParticleConnectionPointCompatibilityStates;
(function (NodeParticleConnectionPointCompatibilityStates) {
    /** Points are compatibles */
    NodeParticleConnectionPointCompatibilityStates[NodeParticleConnectionPointCompatibilityStates["Compatible"] = 0] = "Compatible";
    /** Points are incompatible because of their types */
    NodeParticleConnectionPointCompatibilityStates[NodeParticleConnectionPointCompatibilityStates["TypeIncompatible"] = 1] = "TypeIncompatible";
    /** Points are incompatible because they are in the same hierarchy **/
    NodeParticleConnectionPointCompatibilityStates[NodeParticleConnectionPointCompatibilityStates["HierarchyIssue"] = 2] = "HierarchyIssue";
})(NodeParticleConnectionPointCompatibilityStates || (NodeParticleConnectionPointCompatibilityStates = {}));
/**
 * Defines the direction of a connection point
 */
var NodeParticleConnectionPointDirection;
(function (NodeParticleConnectionPointDirection) {
    /** Input */
    NodeParticleConnectionPointDirection[NodeParticleConnectionPointDirection["Input"] = 0] = "Input";
    /** Output */
    NodeParticleConnectionPointDirection[NodeParticleConnectionPointDirection["Output"] = 1] = "Output";
})(NodeParticleConnectionPointDirection || (NodeParticleConnectionPointDirection = {}));
/**
 * Defines a connection point for a block
 */
class NodeParticleConnectionPoint {
    /** Gets the direction of the point */
    get direction() {
        return this._direction;
    }
    /**
     * Gets or sets the connection point type (default is float)
     */
    get type() {
        if (this._type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.AutoDetect) {
            if (this._ownerBlock.isInput) {
                return this._ownerBlock.type;
            }
            if (this._connectedPoint) {
                return this._connectedPoint.type;
            }
            if (this._linkedConnectionSource) {
                if (this._linkedConnectionSource.isConnected) {
                    return this._linkedConnectionSource.type;
                }
                if (this._linkedConnectionSource._defaultConnectionPointType) {
                    return this._linkedConnectionSource._defaultConnectionPointType;
                }
            }
            if (this._defaultConnectionPointType) {
                return this._defaultConnectionPointType;
            }
        }
        if (this._type === _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.BasedOnInput) {
            if (this._typeConnectionSource) {
                if (!this._typeConnectionSource.isConnected && this._defaultConnectionPointType) {
                    return this._defaultConnectionPointType;
                }
                if (this._typeConnectionSourceTranslation) {
                    return this._typeConnectionSourceTranslation(this._typeConnectionSource.type);
                }
                return this._typeConnectionSource.type;
            }
            else if (this._defaultConnectionPointType) {
                return this._defaultConnectionPointType;
            }
        }
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    /**
     * Gets a boolean indicating that the current point is connected to another NodeMaterialBlock
     */
    get isConnected() {
        return this.connectedPoint !== null || this.hasEndpoints;
    }
    /** Get the other side of the connection (if any) */
    get connectedPoint() {
        return this._connectedPoint;
    }
    /** Get the block that owns this connection point */
    get ownerBlock() {
        return this._ownerBlock;
    }
    /** Get the block connected on the other side of this connection (if any) */
    get sourceBlock() {
        if (!this._connectedPoint) {
            return null;
        }
        return this._connectedPoint.ownerBlock;
    }
    /** Get the block connected on the endpoints of this connection (if any) */
    get connectedBlocks() {
        if (this._endpoints.length === 0) {
            return [];
        }
        return this._endpoints.map((e) => e.ownerBlock);
    }
    /** Gets the list of connected endpoints */
    get endpoints() {
        return this._endpoints;
    }
    /** Gets a boolean indicating if that output point is connected to at least one input */
    get hasEndpoints() {
        return this._endpoints && this._endpoints.length > 0;
    }
    /** Get the inner type (ie AutoDetect for instance instead of the inferred one) */
    get innerType() {
        if (this._linkedConnectionSource && !this._isMainLinkSource && this._linkedConnectionSource.isConnected) {
            return this.type;
        }
        return this._type;
    }
    /**
     * Creates a new connection point
     * @param name defines the connection point name
     * @param ownerBlock defines the block hosting this connection point
     * @param direction defines the direction of the connection point
     */
    constructor(name, ownerBlock, direction) {
        /** @internal */
        this._connectedPoint = null;
        /** @internal */
        this._storedValue = null;
        /** @internal */
        this._storedFunction = null;
        /** @internal */
        this._acceptedConnectionPointType = null;
        this._endpoints = new Array();
        this._type = _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.Particle;
        /** @internal */
        this._linkedConnectionSource = null;
        /** @internal */
        this._typeConnectionSource = null;
        /** @internal */
        this._typeConnectionSourceTranslation = null;
        /** @internal */
        this._defaultConnectionPointType = null;
        /** @internal */
        this._isMainLinkSource = false;
        /**
         * Gets or sets the additional types supported by this connection point
         */
        this.acceptedConnectionPointTypes = [];
        /**
         * Gets or sets the additional types excluded by this connection point
         */
        this.excludedConnectionPointTypes = [];
        /**
         * Observable triggered when this point is connected
         */
        this.onConnectionObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable triggered when this point is disconnected
         */
        this.onDisconnectionObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Gets or sets a boolean indicating that this connection point is exposed on a frame
         */
        this.isExposedOnFrame = false;
        /**
         * Gets or sets number indicating the position that the port is exposed to on a frame
         */
        this.exposedPortPosition = -1;
        /**
         * Gets the default value used for this point at creation time
         */
        this.defaultValue = null;
        /**
         * Gets or sets the default value used for this point if nothing is connected
         */
        this.value = null;
        /**
         * Gets or sets the min value accepted for this point if nothing is connected
         */
        this.valueMin = null;
        /**
         * Gets or sets the max value accepted for this point if nothing is connected
         */
        this.valueMax = null;
        this._ownerBlock = ownerBlock;
        this.name = name;
        this._direction = direction;
    }
    /**
     * Gets the current class name e.g. "NodeMaterialConnectionPoint"
     * @returns the class name
     */
    getClassName() {
        return "NodeParticleConnectionPoint";
    }
    /**
     * Gets the value represented by this connection point
     * @param state current evaluation state
     * @returns the connected value or the value if nothing is connected
     */
    getConnectedValue(state) {
        if (this.isConnected) {
            if (this._connectedPoint?._storedFunction) {
                return this._connectedPoint._storedFunction(state);
            }
            return this._connectedPoint._storedValue;
        }
        return this.value;
    }
    /**
     * Gets a boolean indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a boolean
     */
    canConnectTo(connectionPoint) {
        return this.checkCompatibilityState(connectionPoint) === 0 /* NodeParticleConnectionPointCompatibilityStates.Compatible */;
    }
    /**
     * Gets a number indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a number defining the compatibility state
     */
    checkCompatibilityState(connectionPoint) {
        const ownerBlock = this._ownerBlock;
        const otherBlock = connectionPoint.ownerBlock;
        if (this.type !== connectionPoint.type && connectionPoint.innerType !== _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.AutoDetect) {
            // Accepted types
            if (connectionPoint.acceptedConnectionPointTypes && connectionPoint.acceptedConnectionPointTypes.indexOf(this.type) !== -1) {
                return 0 /* NodeParticleConnectionPointCompatibilityStates.Compatible */;
            }
            else {
                return 1 /* NodeParticleConnectionPointCompatibilityStates.TypeIncompatible */;
            }
        }
        // Excluded
        if (connectionPoint.excludedConnectionPointTypes && connectionPoint.excludedConnectionPointTypes.indexOf(this.type) !== -1) {
            return 1 /* NodeParticleConnectionPointCompatibilityStates.TypeIncompatible */;
        }
        // Check hierarchy
        let targetBlock = otherBlock;
        let sourceBlock = ownerBlock;
        if (this.direction === 0 /* NodeParticleConnectionPointDirection.Input */) {
            targetBlock = ownerBlock;
            sourceBlock = otherBlock;
        }
        if (targetBlock.isAnAncestorOf(sourceBlock)) {
            return 2 /* NodeParticleConnectionPointCompatibilityStates.HierarchyIssue */;
        }
        return 0 /* NodeParticleConnectionPointCompatibilityStates.Compatible */;
    }
    /**
     * Connect this point to another connection point
     * @param connectionPoint defines the other connection point
     * @param ignoreConstraints defines if the system will ignore connection type constraints (default is false)
     * @returns the current connection point
     */
    connectTo(connectionPoint, ignoreConstraints = false) {
        if (!ignoreConstraints && !this.canConnectTo(connectionPoint)) {
            // eslint-disable-next-line no-throw-literal
            throw `Cannot connect these two connectors. source: "${this.ownerBlock.name}".${this.name}, target: "${connectionPoint.ownerBlock.name}".${connectionPoint.name}`;
        }
        this._endpoints.push(connectionPoint);
        connectionPoint._connectedPoint = this;
        this.onConnectionObservable.notifyObservers(connectionPoint);
        connectionPoint.onConnectionObservable.notifyObservers(this);
        return this;
    }
    /**
     * Disconnect this point from one of his endpoint
     * @param endpoint defines the other connection point
     * @returns the current connection point
     */
    disconnectFrom(endpoint) {
        const index = this._endpoints.indexOf(endpoint);
        if (index === -1) {
            return this;
        }
        this._endpoints.splice(index, 1);
        endpoint._connectedPoint = null;
        this.onDisconnectionObservable.notifyObservers(endpoint);
        endpoint.onDisconnectionObservable.notifyObservers(this);
        return this;
    }
    /**
     * Fill the list of excluded connection point types with all types other than those passed in the parameter
     * @param mask Types (ORed values of NodeMaterialBlockConnectionPointTypes) that are allowed, and thus will not be pushed to the excluded list
     */
    addExcludedConnectionPointFromAllowedTypes(mask) {
        let bitmask = 1;
        while (bitmask < _Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_1__.NodeParticleBlockConnectionPointTypes.All) {
            if (!(mask & bitmask)) {
                this.excludedConnectionPointTypes.push(bitmask);
            }
            bitmask = bitmask << 1;
        }
    }
    /**
     * Serializes this point in a JSON representation
     * @param isInput defines if the connection point is an input (default is true)
     * @returns the serialized point object
     */
    serialize(isInput = true) {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.displayName = this.displayName;
        if (this.value !== undefined && this.value !== null) {
            if (this.value.asArray) {
                serializationObject.valueType = "BABYLON." + this.value.getClassName();
                serializationObject.value = this.value.asArray();
            }
            else {
                serializationObject.valueType = "number";
                serializationObject.value = this.value;
            }
        }
        if (isInput && this.connectedPoint) {
            serializationObject.inputName = this.name;
            serializationObject.targetBlockId = this.connectedPoint.ownerBlock.uniqueId;
            serializationObject.targetConnectionName = this.connectedPoint.name;
            serializationObject.isExposedOnFrame = true;
            serializationObject.exposedPortPosition = this.exposedPortPosition;
        }
        if (this.isExposedOnFrame || this.exposedPortPosition >= 0) {
            serializationObject.isExposedOnFrame = true;
            serializationObject.exposedPortPosition = this.exposedPortPosition;
        }
        return serializationObject;
    }
    /**
     * Release resources
     */
    dispose() {
        this.onConnectionObservable.clear();
        this.onDisconnectionObservable.clear();
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

/***/ "../core/dist/Particles/Node/nodeParticleBuildState.js":
/*!*************************************************************!*\
  !*** ../core/dist/Particles/Node/nodeParticleBuildState.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleBuildState: () => (/* binding */ NodeParticleBuildState)
/* harmony export */ });
/* harmony import */ var core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes */ "../core/dist/Particles/Node/Enums/nodeParticleBlockConnectionPointTypes.js");
/* harmony import */ var core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Particles/Node/Enums/nodeParticleContextualSources */ "../core/dist/Particles/Node/Enums/nodeParticleContextualSources.js");
/* harmony import */ var core_Particles_Node_Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Particles/Node/Enums/nodeParticleSystemSources */ "../core/dist/Particles/Node/Enums/nodeParticleSystemSources.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






/**
 * Class used to store node based geometry build state
 */
class NodeParticleBuildState {
    constructor() {
        /** Gets or sets the list of non connected mandatory inputs */
        this.notConnectedNonOptionalInputs = [];
        /**
         * Gets or sets the particle context for contextual data
         */
        this.particleContext = null;
        /**
         * Gets or sets the system context for contextual data
         */
        this.systemContext = null;
        /**
         * Gets or sets the index of the gradient to use
         */
        this.gradientIndex = 0;
        /**
         * Gets or sets next gradient in line
         */
        this.nextGradientIndex = 0;
    }
    /**
     * Emits errors if any
     */
    emitErrors() {
        let errorMessage = "";
        for (const notConnectedInput of this.notConnectedNonOptionalInputs) {
            errorMessage += `input ${notConnectedInput.name} from block ${notConnectedInput.ownerBlock.name}[${notConnectedInput.ownerBlock.getClassName()}] is not connected and is not optional.\n`;
        }
        if (errorMessage) {
            // eslint-disable-next-line no-throw-literal
            throw "Build of Node Particle System Set failed:\n" + errorMessage;
        }
    }
    /**
     * Adapt a value to a target type
     * @param source defines the value to adapt
     * @param targetType defines the target type
     * @returns the adapted value
     */
    adapt(source, targetType) {
        const value = source.getConnectedValue(this) || 0;
        if (source.type === targetType) {
            return value;
        }
        switch (targetType) {
            case core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_2__.NodeParticleBlockConnectionPointTypes.Vector2:
                return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2(value, value);
            case core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_2__.NodeParticleBlockConnectionPointTypes.Vector3:
                return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(value, value, value);
            case core_Particles_Node_Enums_nodeParticleBlockConnectionPointTypes__WEBPACK_IMPORTED_MODULE_2__.NodeParticleBlockConnectionPointTypes.Color4:
                return new core_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color4(value, value, value, value);
        }
        return null;
    }
    /**
     * Gets the value associated with a contextual source
     * @param source Source of the contextual value
     * @returns the value associated with the source
     */
    getContextualValue(source) {
        if (!this.particleContext || !this.systemContext) {
            return null;
        }
        switch (source) {
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Position:
                return this.particleContext.position;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Direction:
                return this.particleContext.direction;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.DirectionScale:
                return this.particleContext._directionScale;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.ScaledDirection:
                this.particleContext.direction.scaleToRef(this.particleContext._directionScale, this.particleContext._scaledDirection);
                return this.particleContext._scaledDirection;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Color:
                return this.particleContext.color;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.InitialColor:
                return this.particleContext.initialColor;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.ColorDead:
                return this.particleContext.colorDead;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Age:
                return this.particleContext.age;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Lifetime:
                return this.particleContext.lifeTime;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Angle:
                return this.particleContext.angle;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Scale:
                return this.particleContext.scale;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.Size:
                return this.particleContext.size;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.AgeGradient:
                return this.particleContext.age / this.particleContext.lifeTime;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.SpriteCellEnd:
                return this.systemContext.endSpriteCellID;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.SpriteCellIndex:
                return this.particleContext.cellIndex;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.SpriteCellStart:
                return this.systemContext.startSpriteCellID;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.InitialDirection:
                return this.particleContext._initialDirection;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.ColorStep:
                return this.particleContext.colorStep;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.ScaledColorStep:
                this.particleContext.colorStep.scaleToRef(this.systemContext._scaledUpdateSpeed, this.systemContext._scaledColorStep);
                return this.systemContext._scaledColorStep;
            case core_Particles_Node_Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_3__.NodeParticleContextualSources.LocalPositionUpdated:
                this.particleContext.direction.scaleToRef(this.particleContext._directionScale, this.particleContext._scaledDirection);
                this.particleContext._localPosition.addInPlace(this.particleContext._scaledDirection);
                core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.TransformCoordinatesToRef(this.particleContext._localPosition, this.systemContext._emitterWorldMatrix, this.particleContext.position);
                return this.particleContext.position;
        }
        return null;
    }
    /**
     * Gets the emitter world matrix
     */
    get emitterWorldMatrix() {
        if (!this.systemContext) {
            return null;
        }
        return this.systemContext._emitterWorldMatrix;
    }
    /**
     * Gets the emitter inverse world matrix
     */
    get emitterInverseWorldMatrix() {
        if (!this.systemContext) {
            return null;
        }
        return this.systemContext._emitterInverseWorldMatrix;
    }
    /**
     * Gets the emitter position
     */
    get emitterPosition() {
        if (!this.systemContext) {
            return null;
        }
        if (!this.systemContext.emitter) {
            return null;
        }
        if (this.systemContext.emitter instanceof core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3) {
            return this.systemContext.emitter;
        }
        return this.systemContext.emitter.absolutePosition;
    }
    /**
     * Gets the value associated with a system source
     * @param source Source of the system value
     * @returns the value associated with the source
     */
    getSystemValue(source) {
        if (!this.systemContext) {
            return null;
        }
        switch (source) {
            case core_Particles_Node_Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_4__.NodeParticleSystemSources.Time:
                return this.systemContext._actualFrame;
            case core_Particles_Node_Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_4__.NodeParticleSystemSources.Delta:
                return this.systemContext._scaledUpdateSpeed;
            case core_Particles_Node_Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_4__.NodeParticleSystemSources.Emitter:
                return this.emitterPosition;
            case core_Particles_Node_Enums_nodeParticleSystemSources__WEBPACK_IMPORTED_MODULE_4__.NodeParticleSystemSources.CameraPosition:
                return this.scene.activeCamera?.globalPosition || core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        }
        return null;
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

/***/ "../core/dist/Particles/Node/nodeParticleSystemSet.js":
/*!************************************************************!*\
  !*** ../core/dist/Particles/Node/nodeParticleSystemSet.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeParticleSystemSet: () => (/* binding */ NodeParticleSystemSet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var _particleSystemSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../particleSystemSet */ "../core/dist/Particles/particleSystemSet.js");
/* harmony import */ var _Blocks_systemBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blocks/systemBlock */ "../core/dist/Particles/Node/Blocks/systemBlock.js");
/* harmony import */ var _nodeParticleBuildState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodeParticleBuildState */ "../core/dist/Particles/Node/nodeParticleBuildState.js");
/* harmony import */ var core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Misc/decorators.serialization */ "../core/dist/Misc/decorators.serialization.js");
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var core_Misc_webRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Misc/webRequest */ "../core/dist/Misc/webRequest.js");
/* harmony import */ var core_Engines_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core/Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var core_Misc_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core/Misc/tools */ "../core/dist/Misc/tools.js");
/* harmony import */ var core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/Engines/abstractEngine */ "../core/dist/Engines/abstractEngine.js");
/* harmony import */ var _Blocks_particleInputBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Blocks/particleInputBlock */ "../core/dist/Particles/Node/Blocks/particleInputBlock.js");
/* harmony import */ var _Blocks_particleSourceTextureBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Blocks/particleSourceTextureBlock */ "../core/dist/Particles/Node/Blocks/particleSourceTextureBlock.js");
/* harmony import */ var _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Enums/nodeParticleContextualSources */ "../core/dist/Particles/Node/Enums/nodeParticleContextualSources.js");
/* harmony import */ var _Blocks_Update_updatePositionBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Blocks/Update/updatePositionBlock */ "../core/dist/Particles/Node/Blocks/Update/updatePositionBlock.js");
/* harmony import */ var _Blocks_particleMathBlock__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Blocks/particleMathBlock */ "../core/dist/Particles/Node/Blocks/particleMathBlock.js");
/* harmony import */ var _Blocks_Emitters_boxShapeBlock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Blocks/Emitters/boxShapeBlock */ "../core/dist/Particles/Node/Blocks/Emitters/boxShapeBlock.js");
/* harmony import */ var _Blocks_Emitters_createParticleBlock__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Blocks/Emitters/createParticleBlock */ "../core/dist/Particles/Node/Blocks/Emitters/createParticleBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




















/**
 * Defines a set of particle systems defined as a node graph.
 * NPE: #K6F1ZB#1
 * PG: #ZT509U#1
 */
class NodeParticleSystemSet {
    /**
     * Gets the system blocks
     */
    get systemBlocks() {
        return this._systemBlocks;
    }
    /**
     * Gets the list of input blocks attached to this material
     * @returns an array of InputBlocks
     */
    get inputBlocks() {
        const blocks = [];
        for (const block of this.attachedBlocks) {
            if (block.isInput) {
                blocks.push(block);
            }
        }
        return blocks;
    }
    /**
     * Get a block by its name
     * @param name defines the name of the block to retrieve
     * @returns the required block or null if not found
     */
    getBlockByName(name) {
        let result = null;
        for (const block of this.attachedBlocks) {
            if (block.name === name) {
                if (!result) {
                    result = block;
                }
                else {
                    core_Misc_tools__WEBPACK_IMPORTED_MODULE_9__.Tools.Warn("More than one block was found with the name `" + name + "`");
                    return result;
                }
            }
        }
        return result;
    }
    /**
     * Get a block using a predicate
     * @param predicate defines the predicate used to find the good candidate
     * @returns the required block or null if not found
     */
    getBlockByPredicate(predicate) {
        for (const block of this.attachedBlocks) {
            if (predicate(block)) {
                return block;
            }
        }
        return null;
    }
    /**
     * Get an input block using a predicate
     * @param predicate defines the predicate used to find the good candidate
     * @returns the required input block or null if not found
     */
    getInputBlockByPredicate(predicate) {
        for (const block of this.attachedBlocks) {
            if (block.isInput && predicate(block)) {
                return block;
            }
        }
        return null;
    }
    /**
     * Creates a new set
     * @param name defines the name of the set
     */
    constructor(name) {
        this._systemBlocks = [];
        this._buildId = 0;
        /**
         * Gets an array of blocks that needs to be serialized even if they are not yet connected
         */
        this.attachedBlocks = [];
        /**
         * Gets or sets data used by visual editor
         * @see https://npe.babylonjs.com
         */
        this.editorData = null;
        /**
         * Observable raised when the particle set is built
         */
        this.onBuildObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_5__.Observable();
        this.BJSNODEPARTICLEEDITOR = this._getGlobalNodeParticleEditor();
        this.name = name;
    }
    /**
     * Gets the current class name of the node particle set e.g. "NodeParticleSystemSet"
     * @returns the class name
     */
    getClassName() {
        return "NodeParticleSystemSet";
    }
    _initializeBlock(node, autoConfigure = true) {
        if (this.attachedBlocks.indexOf(node) === -1) {
            this.attachedBlocks.push(node);
        }
        for (const input of node.inputs) {
            const connectedPoint = input.connectedPoint;
            if (connectedPoint) {
                const block = connectedPoint.ownerBlock;
                if (block !== node) {
                    this._initializeBlock(block, autoConfigure);
                }
            }
        }
    }
    /** Get the editor from bundle or global
     * @returns the global NPE
     */
    _getGlobalNodeParticleEditor() {
        // UMD Global name detection from Webpack Bundle UMD Name.
        if (typeof NODEPARTICLEEDITOR !== "undefined") {
            return NODEPARTICLEEDITOR;
        }
        // In case of module let's check the global emitted from the editor entry point.
        if (typeof BABYLON !== "undefined" && typeof BABYLON.NodeParticleEditor !== "undefined") {
            return BABYLON;
        }
        return undefined;
    }
    /** Creates the node editor window.
     * @param additionalConfig Define the configuration of the editor
     */
    _createNodeParticleEditor(additionalConfig) {
        const nodeEditorConfig = {
            nodeParticleSet: this,
            ...additionalConfig,
        };
        this.BJSNODEPARTICLEEDITOR.NodeParticleEditor.Show(nodeEditorConfig);
    }
    /**
     * Launch the node particle editor
     * @param config Define the configuration of the editor
     * @returns a promise fulfilled when the node editor is visible
     */
    async editAsync(config) {
        return await new Promise((resolve) => {
            this.BJSNODEPARTICLEEDITOR = this.BJSNODEPARTICLEEDITOR || this._getGlobalNodeParticleEditor();
            if (typeof this.BJSNODEPARTICLEEDITOR == "undefined") {
                const editorUrl = config && config.editorURL ? config.editorURL : NodeParticleSystemSet.EditorURL;
                // Load editor and add it to the DOM
                core_Misc_tools__WEBPACK_IMPORTED_MODULE_9__.Tools.LoadBabylonScript(editorUrl, () => {
                    this.BJSNODEPARTICLEEDITOR = this.BJSNODEPARTICLEEDITOR || this._getGlobalNodeParticleEditor();
                    this._createNodeParticleEditor(config?.nodeEditorConfig);
                    resolve();
                });
            }
            else {
                // Otherwise creates the editor
                this._createNodeParticleEditor(config?.nodeEditorConfig);
                resolve();
            }
        });
    }
    /**
     * Builds the particle system set from the defined blocks.
     * @param scene defines the hosting scene
     * @param verbose defines whether to log detailed information during the build process (false by default)
     * @returns a promise that resolves to the built particle system set
     */
    async buildAsync(scene, verbose = false) {
        return await new Promise((resolve) => {
            const output = new _particleSystemSet__WEBPACK_IMPORTED_MODULE_1__.ParticleSystemSet();
            // Initialize all blocks
            for (const block of this._systemBlocks) {
                this._initializeBlock(block);
            }
            // Build the blocks
            for (const block of this.systemBlocks) {
                const state = new _nodeParticleBuildState__WEBPACK_IMPORTED_MODULE_3__.NodeParticleBuildState();
                state.buildId = this._buildId++;
                state.scene = scene;
                state.verbose = verbose;
                const system = block.createSystem(state);
                system._source = this;
                system._blockReference = block._internalId;
                // Errors
                state.emitErrors();
                output.systems.push(system);
            }
            this.onBuildObservable.notifyObservers(this);
            resolve(output);
        });
    }
    /**
     * Clear the current node particle set
     */
    clear() {
        this.attachedBlocks.length = 0;
        this._systemBlocks.length = 0;
    }
    /**
     * Clear the current set and restore it to a default state
     */
    setToDefault() {
        this.clear();
        this.editorData = null;
        // Main system
        const system = new _Blocks_systemBlock__WEBPACK_IMPORTED_MODULE_2__.SystemBlock("Particle system");
        // Update position
        const updatePositionBlock = new _Blocks_Update_updatePositionBlock__WEBPACK_IMPORTED_MODULE_14__.UpdatePositionBlock("Update position");
        updatePositionBlock.output.connectTo(system.particle);
        // Contextual inputs
        const positionBlock = new _Blocks_particleInputBlock__WEBPACK_IMPORTED_MODULE_11__.ParticleInputBlock("Position");
        positionBlock.contextualValue = _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_13__.NodeParticleContextualSources.Position;
        const directionBlock = new _Blocks_particleInputBlock__WEBPACK_IMPORTED_MODULE_11__.ParticleInputBlock("Scaled direction");
        directionBlock.contextualValue = _Enums_nodeParticleContextualSources__WEBPACK_IMPORTED_MODULE_13__.NodeParticleContextualSources.ScaledDirection;
        // Add
        const addBlock = new _Blocks_particleMathBlock__WEBPACK_IMPORTED_MODULE_15__.ParticleMathBlock("Add");
        addBlock.operation = _Blocks_particleMathBlock__WEBPACK_IMPORTED_MODULE_15__.ParticleMathBlockOperations.Add;
        positionBlock.output.connectTo(addBlock.left);
        directionBlock.output.connectTo(addBlock.right);
        addBlock.output.connectTo(updatePositionBlock.position);
        // Create particle
        const createParticleBlock = new _Blocks_Emitters_createParticleBlock__WEBPACK_IMPORTED_MODULE_17__.CreateParticleBlock("Create particle");
        // Shape
        const emitterShape = new _Blocks_Emitters_boxShapeBlock__WEBPACK_IMPORTED_MODULE_16__.BoxShapeBlock("Box shape");
        createParticleBlock.particle.connectTo(emitterShape.particle);
        emitterShape.output.connectTo(updatePositionBlock.particle);
        // Texture
        const textureBlock = new _Blocks_particleSourceTextureBlock__WEBPACK_IMPORTED_MODULE_12__.ParticleTextureSourceBlock("Texture");
        textureBlock.texture.connectTo(system.texture);
        textureBlock.url = core_Misc_tools__WEBPACK_IMPORTED_MODULE_9__.Tools.GetAssetUrl("https://assets.babylonjs.com/core/textures/flare.png");
        this._systemBlocks.push(system);
    }
    /**
     * Remove a block from the current system set
     * @param block defines the block to remove
     */
    removeBlock(block) {
        const attachedBlockIndex = this.attachedBlocks.indexOf(block);
        if (attachedBlockIndex > -1) {
            this.attachedBlocks.splice(attachedBlockIndex, 1);
        }
        if (block.isSystem) {
            const index = this._systemBlocks.indexOf(block);
            if (index > -1) {
                this._systemBlocks.splice(index, 1);
            }
        }
    }
    /**
     * Clear the current graph and load a new one from a serialization object
     * @param source defines the JSON representation of the particle set
     * @param merge defines whether or not the source must be merged or replace the current content
     */
    parseSerializedObject(source, merge = false) {
        if (!merge) {
            this.clear();
        }
        const map = {};
        // Create blocks
        for (const parsedBlock of source.blocks) {
            const blockType = (0,core_Misc_typeStore__WEBPACK_IMPORTED_MODULE_6__.GetClass)(parsedBlock.customType);
            if (blockType) {
                const block = new blockType();
                block._deserialize(parsedBlock);
                map[parsedBlock.id] = block;
                this.attachedBlocks.push(block);
                if (block.isSystem) {
                    this._systemBlocks.push(block);
                }
            }
        }
        // Reconnect teleportation
        for (const block of this.attachedBlocks) {
            if (block.isTeleportOut) {
                const teleportOut = block;
                const id = teleportOut._tempEntryPointUniqueId;
                if (id) {
                    const source = map[id];
                    if (source) {
                        source.attachToEndpoint(teleportOut);
                    }
                }
            }
        }
        // Connections - Starts with input blocks only (except if in "merge" mode where we scan all blocks)
        for (let blockIndex = 0; blockIndex < source.blocks.length; blockIndex++) {
            const parsedBlock = source.blocks[blockIndex];
            const block = map[parsedBlock.id];
            if (!block) {
                continue;
            }
            if (block.inputs.length && parsedBlock.inputs.some((i) => i.targetConnectionName) && !merge) {
                continue;
            }
            this._restoreConnections(block, source, map);
        }
        // UI related info
        if (source.locations || (source.editorData && source.editorData.locations)) {
            const locations = source.locations || source.editorData.locations;
            for (const location of locations) {
                if (map[location.blockId]) {
                    location.blockId = map[location.blockId].uniqueId;
                }
            }
            if (merge && this.editorData && this.editorData.locations) {
                locations.concat(this.editorData.locations);
            }
            if (source.locations) {
                this.editorData = {
                    locations: locations,
                };
            }
            else {
                this.editorData = source.editorData;
                this.editorData.locations = locations;
            }
            const blockMap = {};
            for (const key in map) {
                blockMap[key] = map[key].uniqueId;
            }
            this.editorData.map = blockMap;
        }
        this.comment = source.comment;
    }
    _restoreConnections(block, source, map) {
        for (const outputPoint of block.outputs) {
            for (const candidate of source.blocks) {
                const target = map[candidate.id];
                if (!target) {
                    continue;
                }
                for (const input of candidate.inputs) {
                    if (map[input.targetBlockId] === block && input.targetConnectionName === outputPoint.name) {
                        const inputPoint = target.getInputByName(input.inputName);
                        if (!inputPoint || inputPoint.isConnected) {
                            continue;
                        }
                        outputPoint.connectTo(inputPoint, true);
                        this._restoreConnections(target, source, map);
                        continue;
                    }
                }
            }
        }
    }
    /**
     * Serializes this node particle set in a JSON representation
     * @param selectedBlocks defines the list of blocks to save (if null the whole node particle set will be saved)
     * @returns the serialized particle system set object
     */
    serialize(selectedBlocks) {
        const serializationObject = selectedBlocks ? {} : core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.Serialize(this);
        serializationObject.editorData = JSON.parse(JSON.stringify(this.editorData)); // Copy
        let blocks = [];
        if (selectedBlocks) {
            blocks = selectedBlocks;
        }
        else {
            serializationObject.customType = "BABYLON.NodeParticleSystemSet";
        }
        // Blocks
        serializationObject.blocks = [];
        for (const block of blocks) {
            serializationObject.blocks.push(block.serialize());
        }
        if (!selectedBlocks) {
            for (const block of this.attachedBlocks) {
                if (blocks.indexOf(block) !== -1) {
                    continue;
                }
                serializationObject.blocks.push(block.serialize());
            }
        }
        return serializationObject;
    }
    /**
     * Makes a duplicate of the current particle system set.
     * @param name defines the name to use for the new particle system set
     * @returns the cloned particle system set
     */
    clone(name) {
        const serializationObject = this.serialize();
        const clone = core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.Clone(() => new NodeParticleSystemSet(name), this);
        clone.name = name;
        clone.snippetId = this.snippetId;
        clone.parseSerializedObject(serializationObject);
        clone._buildId = this._buildId;
        return clone;
    }
    /**
     * Disposes the resources
     */
    dispose() {
        for (const block of this.attachedBlocks) {
            block.dispose();
        }
        this.attachedBlocks.length = 0;
        this.onBuildObservable.clear();
    }
    /**
     * Creates a new node particle set set to default basic configuration
     * @param name defines the name of the particle set
     * @returns a new NodeParticleSystemSet
     */
    static CreateDefault(name) {
        const nodeParticleSet = new NodeParticleSystemSet(name);
        nodeParticleSet.setToDefault();
        return nodeParticleSet;
    }
    /**
     * Creates a node particle set from parsed data
     * @param source defines the JSON representation of the particle set
     * @returns a new node particle set
     */
    static Parse(source) {
        const nodeParticleSet = core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.Parse(() => new NodeParticleSystemSet(source.name), source, null);
        nodeParticleSet.parseSerializedObject(source);
        return nodeParticleSet;
    }
    /**
     * Creates a node particle set from a snippet saved in a remote file
     * @param name defines the name of the node particle set to create
     * @param url defines the url to load from
     * @param nodeParticleSet defines a node particle set to update (instead of creating a new one)
     * @returns a promise that will resolve to the new node particle set
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    static ParseFromFileAsync(name, url, nodeParticleSet) {
        return new Promise((resolve, reject) => {
            const request = new core_Misc_webRequest__WEBPACK_IMPORTED_MODULE_7__.WebRequest();
            request.addEventListener("readystatechange", () => {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const serializationObject = JSON.parse(request.responseText);
                        if (!nodeParticleSet) {
                            nodeParticleSet = core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.Parse(() => new NodeParticleSystemSet(name), serializationObject, null);
                        }
                        nodeParticleSet.parseSerializedObject(serializationObject);
                        resolve(nodeParticleSet);
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the node particle system set");
                    }
                }
            });
            request.open("GET", url);
            request.send();
        });
    }
    /**
     * Creates a node particle set from a snippet saved by the node particle editor
     * @param snippetId defines the snippet to load
     * @param nodeParticleSet defines a node particle set to update (instead of creating a new one)
     * @returns a promise that will resolve to the new node particle set
     */
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    static ParseFromSnippetAsync(snippetId, nodeParticleSet) {
        if (snippetId === "_BLANK") {
            return Promise.resolve(NodeParticleSystemSet.CreateDefault("blank"));
        }
        return new Promise((resolve, reject) => {
            const request = new core_Misc_webRequest__WEBPACK_IMPORTED_MODULE_7__.WebRequest();
            request.addEventListener("readystatechange", () => {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const snippet = JSON.parse(JSON.parse(request.responseText).jsonPayload);
                        const serializationObject = JSON.parse(snippet.nodeParticle);
                        if (!nodeParticleSet) {
                            nodeParticleSet = core_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_4__.SerializationHelper.Parse(() => new NodeParticleSystemSet(snippetId), serializationObject, null);
                        }
                        nodeParticleSet.parseSerializedObject(serializationObject);
                        nodeParticleSet.snippetId = snippetId;
                        try {
                            resolve(nodeParticleSet);
                        }
                        catch (err) {
                            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                            reject(err);
                        }
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the snippet " + snippetId);
                    }
                }
            });
            request.open("GET", this.SnippetUrl + "/" + snippetId.replace(/#/g, "/"));
            request.send();
        });
    }
}
/** Define the Url to load node editor script */
NodeParticleSystemSet.EditorURL = `${core_Misc_tools__WEBPACK_IMPORTED_MODULE_9__.Tools._DefaultCdnUrl}/v${core_Engines_abstractEngine__WEBPACK_IMPORTED_MODULE_10__.AbstractEngine.Version}/nodeParticleEditor/babylon.nodeParticleEditor.js`;
/** Define the Url to load snippets */
NodeParticleSystemSet.SnippetUrl = core_Engines_constants__WEBPACK_IMPORTED_MODULE_8__.Constants.SnippetUrl;
(0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], NodeParticleSystemSet.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("comment")
], NodeParticleSystemSet.prototype, "comment", void 0);


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

/***/ "../core/dist/Particles/webgl2ParticleSystem.js":
/*!******************************************************!*\
  !*** ../core/dist/Particles/webgl2ParticleSystem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebGL2ParticleSystem: () => (/* binding */ WebGL2ParticleSystem)
/* harmony export */ });
/* harmony import */ var _EmitterTypes_customParticleEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmitterTypes/customParticleEmitter */ "../core/dist/Particles/EmitterTypes/customParticleEmitter.js");
/* harmony import */ var _Materials_uniformBufferEffectCommonAccessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Materials/uniformBufferEffectCommonAccessor */ "../core/dist/Materials/uniformBufferEffectCommonAccessor.js");
/* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Engines/constants */ "../core/dist/Engines/constants.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _Shaders_gpuUpdateParticles_fragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shaders/gpuUpdateParticles.fragment */ "../core/dist/Shaders/gpuUpdateParticles.fragment.js");
/* harmony import */ var _Shaders_gpuUpdateParticles_vertex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shaders/gpuUpdateParticles.vertex */ "../core/dist/Shaders/gpuUpdateParticles.vertex.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/** @internal */
class WebGL2ParticleSystem {
    /** @internal */
    constructor(parent, engine) {
        this._renderVAO = [];
        this._updateVAO = [];
        /** @internal */
        this.alignDataInBuffer = false;
        this._parent = parent;
        this._engine = engine;
        this._updateEffectOptions = {
            attributes: [
                "position",
                "initialPosition",
                "age",
                "life",
                "seed",
                "size",
                "color",
                "direction",
                "initialDirection",
                "angle",
                "cellIndex",
                "cellStartOffset",
                "noiseCoordinates1",
                "noiseCoordinates2",
            ],
            uniformsNames: [
                "currentCount",
                "timeDelta",
                "emitterWM",
                "lifeTime",
                "color1",
                "color2",
                "sizeRange",
                "scaleRange",
                "gravity",
                "emitPower",
                "direction1",
                "direction2",
                "minEmitBox",
                "maxEmitBox",
                "radius",
                "directionRandomizer",
                "height",
                "coneAngle",
                "stopFactor",
                "angleRange",
                "radiusRange",
                "cellInfos",
                "noiseStrength",
                "limitVelocityDamping",
                "flowMapProjection",
                "flowMapStrength",
            ],
            uniformBuffersNames: [],
            samplers: [
                "randomSampler",
                "randomSampler2",
                "sizeGradientSampler",
                "angularSpeedGradientSampler",
                "velocityGradientSampler",
                "limitVelocityGradientSampler",
                "noiseSampler",
                "dragGradientSampler",
                "flowMapSampler",
            ],
            defines: "",
            fallbacks: null,
            onCompiled: null,
            onError: null,
            indexParameters: null,
            maxSimultaneousLights: 0,
            transformFeedbackVaryings: [],
        };
    }
    /** @internal */
    contextLost() {
        this._updateEffect = undefined;
        this._renderVAO.length = 0;
        this._updateVAO.length = 0;
    }
    /** @internal */
    isUpdateBufferCreated() {
        return !!this._updateEffect;
    }
    /** @internal */
    isUpdateBufferReady() {
        return this._updateEffect?.isReady() ?? false;
    }
    /** @internal */
    createUpdateBuffer(defines) {
        this._updateEffectOptions.transformFeedbackVaryings = ["outPosition"];
        this._updateEffectOptions.transformFeedbackVaryings.push("outAge");
        this._updateEffectOptions.transformFeedbackVaryings.push("outSize");
        this._updateEffectOptions.transformFeedbackVaryings.push("outLife");
        this._updateEffectOptions.transformFeedbackVaryings.push("outSeed");
        this._updateEffectOptions.transformFeedbackVaryings.push("outDirection");
        if (this._parent.particleEmitterType instanceof _EmitterTypes_customParticleEmitter__WEBPACK_IMPORTED_MODULE_0__.CustomParticleEmitter) {
            this._updateEffectOptions.transformFeedbackVaryings.push("outInitialPosition");
        }
        if (!this._parent._colorGradientsTexture) {
            this._updateEffectOptions.transformFeedbackVaryings.push("outColor");
        }
        if (!this._parent._isBillboardBased) {
            this._updateEffectOptions.transformFeedbackVaryings.push("outInitialDirection");
        }
        if (this._parent.noiseTexture) {
            this._updateEffectOptions.transformFeedbackVaryings.push("outNoiseCoordinates1");
            this._updateEffectOptions.transformFeedbackVaryings.push("outNoiseCoordinates2");
        }
        this._updateEffectOptions.transformFeedbackVaryings.push("outAngle");
        if (this._parent.isAnimationSheetEnabled) {
            this._updateEffectOptions.transformFeedbackVaryings.push("outCellIndex");
            if (this._parent.spriteRandomStartCell) {
                this._updateEffectOptions.transformFeedbackVaryings.push("outCellStartOffset");
            }
        }
        this._updateEffectOptions.defines = defines;
        this._updateEffect = this._engine.createEffect("gpuUpdateParticles", this._updateEffectOptions, this._engine);
        return new _Materials_uniformBufferEffectCommonAccessor__WEBPACK_IMPORTED_MODULE_1__.UniformBufferEffectCommonAccessor(this._updateEffect);
    }
    /** @internal */
    createVertexBuffers(updateBuffer, renderVertexBuffers) {
        this._updateVAO.push(this._createUpdateVAO(updateBuffer));
        this._renderVAO.push(this._engine.recordVertexArrayObject(renderVertexBuffers, null, this._parent._getWrapper(this._parent.blendMode).effect));
        this._engine.bindArrayBuffer(null);
        this._renderVertexBuffers = renderVertexBuffers;
    }
    /** @internal */
    createParticleBuffer(data) {
        return data;
    }
    /** @internal */
    bindDrawBuffers(index, effect, indexBuffer) {
        if (indexBuffer) {
            this._engine.bindBuffers(this._renderVertexBuffers, indexBuffer, effect);
        }
        else {
            this._engine.bindVertexArrayObject(this._renderVAO[index], null);
        }
    }
    /** @internal */
    preUpdateParticleBuffer() {
        const engine = this._engine;
        this._engine.enableEffect(this._updateEffect);
        if (!engine.setState) {
            throw new Error("GPU particles cannot work without a full Engine. ThinEngine is not supported");
        }
    }
    /** @internal */
    updateParticleBuffer(index, targetBuffer, currentActiveCount) {
        this._updateEffect.setTexture("randomSampler", this._parent._randomTexture);
        this._updateEffect.setTexture("randomSampler2", this._parent._randomTexture2);
        if (this._parent._flowMap) {
            this._updateEffect.setTexture("flowMapSampler", this._parent._flowMap);
        }
        if (this._parent._sizeGradientsTexture) {
            this._updateEffect.setTexture("sizeGradientSampler", this._parent._sizeGradientsTexture);
        }
        if (this._parent._angularSpeedGradientsTexture) {
            this._updateEffect.setTexture("angularSpeedGradientSampler", this._parent._angularSpeedGradientsTexture);
        }
        if (this._parent._velocityGradientsTexture) {
            this._updateEffect.setTexture("velocityGradientSampler", this._parent._velocityGradientsTexture);
        }
        if (this._parent._limitVelocityGradientsTexture) {
            this._updateEffect.setTexture("limitVelocityGradientSampler", this._parent._limitVelocityGradientsTexture);
        }
        if (this._parent._dragGradientsTexture) {
            this._updateEffect.setTexture("dragGradientSampler", this._parent._dragGradientsTexture);
        }
        if (this._parent.noiseTexture) {
            this._updateEffect.setTexture("noiseSampler", this._parent.noiseTexture);
        }
        // Bind source VAO
        this._engine.bindVertexArrayObject(this._updateVAO[index], null);
        // Update
        const engine = this._engine;
        engine.bindTransformFeedbackBuffer(targetBuffer.getBuffer());
        engine.setRasterizerState(false);
        engine.beginTransformFeedback(true);
        engine.drawArraysType(_Engines_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.MATERIAL_PointListDrawMode, 0, currentActiveCount);
        engine.endTransformFeedback();
        engine.setRasterizerState(true);
        engine.bindTransformFeedbackBuffer(null);
    }
    /** @internal */
    releaseBuffers() { }
    /** @internal */
    releaseVertexBuffers() {
        for (let index = 0; index < this._updateVAO.length; index++) {
            this._engine.releaseVertexArrayObject(this._updateVAO[index]);
        }
        this._updateVAO.length = 0;
        for (let index = 0; index < this._renderVAO.length; index++) {
            this._engine.releaseVertexArrayObject(this._renderVAO[index]);
        }
        this._renderVAO.length = 0;
    }
    _createUpdateVAO(source) {
        const updateVertexBuffers = {};
        updateVertexBuffers["position"] = source.createVertexBuffer("position", 0, 3);
        let offset = 3;
        updateVertexBuffers["age"] = source.createVertexBuffer("age", offset, 1);
        offset += 1;
        updateVertexBuffers["size"] = source.createVertexBuffer("size", offset, 3);
        offset += 3;
        updateVertexBuffers["life"] = source.createVertexBuffer("life", offset, 1);
        offset += 1;
        updateVertexBuffers["seed"] = source.createVertexBuffer("seed", offset, 4);
        offset += 4;
        updateVertexBuffers["direction"] = source.createVertexBuffer("direction", offset, 3);
        offset += 3;
        if (this._parent.particleEmitterType instanceof _EmitterTypes_customParticleEmitter__WEBPACK_IMPORTED_MODULE_0__.CustomParticleEmitter) {
            updateVertexBuffers["initialPosition"] = source.createVertexBuffer("initialPosition", offset, 3);
            offset += 3;
        }
        if (!this._parent._colorGradientsTexture) {
            updateVertexBuffers["color"] = source.createVertexBuffer("color", offset, 4);
            offset += 4;
        }
        if (!this._parent._isBillboardBased) {
            updateVertexBuffers["initialDirection"] = source.createVertexBuffer("initialDirection", offset, 3);
            offset += 3;
        }
        if (this._parent.noiseTexture) {
            updateVertexBuffers["noiseCoordinates1"] = source.createVertexBuffer("noiseCoordinates1", offset, 3);
            offset += 3;
            updateVertexBuffers["noiseCoordinates2"] = source.createVertexBuffer("noiseCoordinates2", offset, 3);
            offset += 3;
        }
        if (this._parent._angularSpeedGradientsTexture) {
            updateVertexBuffers["angle"] = source.createVertexBuffer("angle", offset, 1);
            offset += 1;
        }
        else {
            updateVertexBuffers["angle"] = source.createVertexBuffer("angle", offset, 2);
            offset += 2;
        }
        if (this._parent._isAnimationSheetEnabled) {
            updateVertexBuffers["cellIndex"] = source.createVertexBuffer("cellIndex", offset, 1);
            offset += 1;
            if (this._parent.spriteRandomStartCell) {
                updateVertexBuffers["cellStartOffset"] = source.createVertexBuffer("cellStartOffset", offset, 1);
                offset += 1;
            }
        }
        const vao = this._engine.recordVertexArrayObject(updateVertexBuffers, null, this._updateEffect);
        this._engine.bindArrayBuffer(null);
        return vao;
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_3__.RegisterClass)("BABYLON.WebGL2ParticleSystem", WebGL2ParticleSystem);


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

/***/ "../core/dist/Shaders/gpuUpdateParticles.fragment.js":
/*!***********************************************************!*\
  !*** ../core/dist/Shaders/gpuUpdateParticles.fragment.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gpuUpdateParticlesPixelShader: () => (/* binding */ gpuUpdateParticlesPixelShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "gpuUpdateParticlesPixelShader";
const shader = `#version 300 es
void main() {discard;}
`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const gpuUpdateParticlesPixelShader = { name, shader };


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

/***/ "../core/dist/Shaders/gpuUpdateParticles.vertex.js":
/*!*********************************************************!*\
  !*** ../core/dist/Shaders/gpuUpdateParticles.vertex.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gpuUpdateParticlesVertexShader: () => (/* binding */ gpuUpdateParticlesVertexShader)
/* harmony export */ });
/* harmony import */ var _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Engines/shaderStore */ "../core/dist/Engines/shaderStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// Do not edit.

const name = "gpuUpdateParticlesVertexShader";
const shader = `#version 300 es
#define PI 3.14159
uniform float currentCount;uniform float timeDelta;uniform float stopFactor;
#ifndef LOCAL
uniform mat4 emitterWM;
#endif
uniform vec2 lifeTime;uniform vec2 emitPower;uniform vec2 sizeRange;uniform vec4 scaleRange;
#ifdef FLOWMAP
uniform mat4 flowMapProjection;uniform float flowMapStrength;uniform sampler2D flowMapSampler;
#endif
#ifndef COLORGRADIENTS
uniform vec4 color1;uniform vec4 color2;
#endif
uniform vec3 gravity;uniform sampler2D randomSampler;uniform sampler2D randomSampler2;uniform vec4 angleRange;
#ifdef BOXEMITTER
uniform vec3 direction1;uniform vec3 direction2;uniform vec3 minEmitBox;uniform vec3 maxEmitBox;
#endif
#ifdef POINTEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#endif
#ifdef HEMISPHERICEMITTER
uniform float radius;uniform float radiusRange;uniform float directionRandomizer;
#endif
#ifdef SPHEREEMITTER
uniform float radius;uniform float radiusRange;
#ifdef DIRECTEDSPHEREEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
#ifdef CYLINDEREMITTER
uniform float radius;uniform float height;uniform float radiusRange;
#ifdef DIRECTEDCYLINDEREMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
#ifdef CONEEMITTER
uniform vec2 radius;uniform float coneAngle;uniform vec2 height;
#ifdef DIRECTEDCONEEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
in vec3 position;
#ifdef CUSTOMEMITTER
in vec3 initialPosition;
#endif
in float age;in float life;in vec4 seed;in vec3 size;
#ifndef COLORGRADIENTS
in vec4 color;
#endif
in vec3 direction;
#ifndef BILLBOARD
in vec3 initialDirection;
#endif
#ifdef ANGULARSPEEDGRADIENTS
in float angle;
#else
in vec2 angle;
#endif
#ifdef ANIMATESHEET
in float cellIndex;
#ifdef ANIMATESHEETRANDOMSTART
in float cellStartOffset;
#endif
#endif
#ifdef NOISE
in vec3 noiseCoordinates1;in vec3 noiseCoordinates2;
#endif
out vec3 outPosition;
#ifdef CUSTOMEMITTER
out vec3 outInitialPosition;
#endif
out float outAge;out float outLife;out vec4 outSeed;out vec3 outSize;
#ifndef COLORGRADIENTS
out vec4 outColor;
#endif
out vec3 outDirection;
#ifndef BILLBOARD
out vec3 outInitialDirection;
#endif
#ifdef ANGULARSPEEDGRADIENTS
out float outAngle;
#else
out vec2 outAngle;
#endif
#ifdef ANIMATESHEET
out float outCellIndex;
#ifdef ANIMATESHEETRANDOMSTART
out float outCellStartOffset;
#endif
#endif
#ifdef NOISE
out vec3 outNoiseCoordinates1;out vec3 outNoiseCoordinates2;
#endif
#ifdef SIZEGRADIENTS
uniform sampler2D sizeGradientSampler;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
uniform sampler2D angularSpeedGradientSampler;
#endif 
#ifdef VELOCITYGRADIENTS
uniform sampler2D velocityGradientSampler;
#endif
#ifdef LIMITVELOCITYGRADIENTS
uniform sampler2D limitVelocityGradientSampler;uniform float limitVelocityDamping;
#endif
#ifdef DRAGGRADIENTS
uniform sampler2D dragGradientSampler;
#endif
#ifdef NOISE
uniform vec3 noiseStrength;uniform sampler2D noiseSampler;
#endif
#ifdef ANIMATESHEET
uniform vec4 cellInfos;
#endif
vec3 getRandomVec3(float offset) {return texture(randomSampler2,vec2(float(gl_VertexID)*offset/currentCount,0)).rgb;}
vec4 getRandomVec4(float offset) {return texture(randomSampler,vec2(float(gl_VertexID)*offset/currentCount,0));}
void main() {float newAge=age+timeDelta; 
if (newAge>=life && stopFactor != 0.) {vec3 newPosition;vec3 newDirection;vec4 randoms=getRandomVec4(seed.x);outLife=lifeTime.x+(lifeTime.y-lifeTime.x)*randoms.r;outAge=newAge-life;outSeed=seed;
#ifdef SIZEGRADIENTS 
outSize.x=texture(sizeGradientSampler,vec2(0,0)).r;
#else
outSize.x=sizeRange.x+(sizeRange.y-sizeRange.x)*randoms.g;
#endif
outSize.y=scaleRange.x+(scaleRange.y-scaleRange.x)*randoms.b;outSize.z=scaleRange.z+(scaleRange.w-scaleRange.z)*randoms.a; 
#ifndef COLORGRADIENTS
outColor=color1+(color2-color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
outAngle.y=angleRange.x+(angleRange.y-angleRange.x)*randoms.a;outAngle.x=angleRange.z+(angleRange.w-angleRange.z)*randoms.r;
#else
outAngle=angleRange.z+(angleRange.w-angleRange.z)*randoms.r;
#endif 
#ifdef POINTEMITTER
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);newPosition=vec3(0,0,0);newDirection=direction1+(direction2-direction1)*randoms3;
#elif defined(BOXEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);newPosition=minEmitBox+(maxEmitBox-minEmitBox)*randoms2;newDirection=direction1+(direction2-direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float phi=2.0*PI*randoms2.x;float theta=acos(2.0*randoms2.y-1.0);float randX=cos(phi)*sin(theta);float randY=cos(theta);float randZ=sin(phi)*sin(theta);newPosition=(radius-(radius*radiusRange*randoms2.z))*vec3(randX,abs(randY),randZ);newDirection=newPosition+directionRandomizer*randoms3; 
#elif defined(SPHEREEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float phi=2.0*PI*randoms2.x;float theta=acos(2.0*randoms2.y-1.0);float randX=cos(phi)*sin(theta);float randY=cos(theta);float randZ=sin(phi)*sin(theta);newPosition=(radius-(radius*radiusRange*randoms2.z))*vec3(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=normalize(direction1+(direction2-direction1)*randoms3);
#else
newDirection=normalize(newPosition+directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float yPos=(randoms2.x-0.5)*height;float angle=randoms2.y*PI*2.;float inverseRadiusRangeSquared=((1.-radiusRange)*(1.-radiusRange));float positionRadius=radius*sqrt(inverseRadiusRangeSquared+(randoms2.z*(1.-inverseRadiusRangeSquared)));float xPos=positionRadius*cos(angle);float zPos=positionRadius*sin(angle);newPosition=vec3(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
angle=angle+((randoms3.x-0.5)*PI)*directionRandomizer;newDirection=vec3(cos(angle),(randoms3.y-0.5)*directionRandomizer,sin(angle));newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
vec3 randoms2=getRandomVec3(seed.y);float s=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
float h=0.0001;
#else
float h=randoms2.y*height.y;h=1.-h*h; 
#endif
float lRadius=radius.x-radius.x*randoms2.z*radius.y;lRadius=lRadius*h;float randX=lRadius*sin(s);float randZ=lRadius*cos(s);float randY=h *height.x;newPosition=vec3(randX,randY,randZ); 
vec3 randoms3=getRandomVec3(seed.z);
#ifdef DIRECTEDCONEEMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
if (abs(cos(coneAngle))==1.0) {newDirection=vec3(0.,1.0,0.);} else {newDirection=normalize(newPosition+directionRandomizer*randoms3); }
#endif
#elif defined(CUSTOMEMITTER)
newPosition=initialPosition;outInitialPosition=initialPosition;
#else 
newPosition=vec3(0.,0.,0.);newDirection=2.0*(getRandomVec3(seed.w)-vec3(0.5,0.5,0.5));
#endif
float power=emitPower.x+(emitPower.y-emitPower.x)*randoms.a;
#ifdef LOCAL
outPosition=newPosition;
#else
outPosition=(emitterWM*vec4(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
outDirection=direction;
#ifndef BILLBOARD 
outInitialDirection=direction;
#endif
#else
#ifdef LOCAL
vec3 initial=newDirection;
#else 
vec3 initial=(emitterWM*vec4(newDirection,0.)).xyz;
#endif
outDirection=initial*power;
#ifndef BILLBOARD 
outInitialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
outCellIndex=cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
outCellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
outNoiseCoordinates1=noiseCoordinates1;outNoiseCoordinates2=noiseCoordinates2;
#endif
} else {float directionScale=timeDelta;outAge=newAge;float ageGradient=newAge/life;
#ifdef VELOCITYGRADIENTS
directionScale*=texture(velocityGradientSampler,vec2(ageGradient,0)).r;
#endif
#ifdef DRAGGRADIENTS
directionScale*=1.0-texture(dragGradientSampler,vec2(ageGradient,0)).r;
#endif
#if defined(CUSTOMEMITTER)
outPosition=position+(direction-position)*ageGradient; 
outInitialPosition=initialPosition;
#else
outPosition=position+direction*directionScale;
#endif
outLife=life;outSeed=seed;
#ifndef COLORGRADIENTS 
outColor=color;
#endif
#ifdef SIZEGRADIENTS
outSize.x=texture(sizeGradientSampler,vec2(ageGradient,0)).r;outSize.yz=size.yz;
#else
outSize=size;
#endif 
#ifndef BILLBOARD 
outInitialDirection=initialDirection;
#endif
#ifdef CUSTOMEMITTER
outDirection=direction;
#else
vec3 updatedDirection=direction+gravity*timeDelta;
#ifdef FLOWMAP
vec4 clipSpace=(flowMapProjection*vec4(position,1.));vec3 ndcSpace=clipSpace.xyz/clipSpace.w;vec2 flowMapUV=ndcSpace.xy*0.5+0.5;vec4 flowMapValue=texture(flowMapSampler,flowMapUV);vec3 flowMapDirection=(flowMapValue.xyz*2.0-1.0)*flowMapValue.w;updatedDirection+=flowMapDirection*timeDelta*flowMapStrength;
#endif
#ifdef LIMITVELOCITYGRADIENTS
float limitVelocity=texture(limitVelocityGradientSampler,vec2(ageGradient,0)).r;float currentVelocity=length(updatedDirection);if (currentVelocity>limitVelocity) {updatedDirection=updatedDirection*limitVelocityDamping;}
#endif
outDirection=updatedDirection;
#ifdef NOISE
float fetchedR=texture(noiseSampler,vec2(noiseCoordinates1.x,noiseCoordinates1.y)*vec2(0.5)+vec2(0.5)).r;float fetchedG=texture(noiseSampler,vec2(noiseCoordinates1.z,noiseCoordinates2.x)*vec2(0.5)+vec2(0.5)).r;float fetchedB=texture(noiseSampler,vec2(noiseCoordinates2.y,noiseCoordinates2.z)*vec2(0.5)+vec2(0.5)).r;vec3 force=vec3(2.*fetchedR-1.,2.*fetchedG-1.,2.*fetchedB-1.)*noiseStrength;outDirection=outDirection+force*timeDelta;outNoiseCoordinates1=noiseCoordinates1;outNoiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
float angularSpeed=texture(angularSpeedGradientSampler,vec2(ageGradient,0)).r;outAngle=angle+angularSpeed*timeDelta;
#else
outAngle=vec2(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
float offsetAge=outAge;float dist=cellInfos.y-cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
outCellStartOffset=cellStartOffset;offsetAge+=cellStartOffset;
#else
float cellStartOffset=0.;
#endif 
float ratio=0.;if (cellInfos.w==1.0) {ratio=clamp(mod(cellStartOffset+cellInfos.z*offsetAge,life)/life,0.,1.0);}
else {ratio=clamp(cellStartOffset+cellInfos.z*offsetAge/life,0.,1.0);}
outCellIndex=float(int(cellInfos.x+ratio*dist));
#endif
}}`;
// Sideeffect
if (!_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    _Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
const gpuUpdateParticlesVertexShader = { name, shader };


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

/***/ "./src/extensions/quickCreate/cameras.tsx":
/*!************************************************!*\
  !*** ./src/extensions/quickCreate/cameras.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CamerasContent: () => (/* binding */ CamerasContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Cameras/arcRotateCamera */ "../core/dist/Cameras/arcRotateCamera.js");
/* harmony import */ var core_Cameras_universalCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Cameras/universalCamera */ "../core/dist/Cameras/universalCamera.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/button */ "../sharedUiComponents/src/fluent/primitives/button.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "../../../node_modules/@fluentui/react-components/lib/index.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/inputPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/inputPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/spinButtonPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/spinButtonPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/vectorPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/vectorPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_checkboxPropertyLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/checkboxPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/checkboxPropertyLine.tsx");
/* harmony import */ var _settingsPopover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settingsPopover */ "./src/extensions/quickCreate/settingsPopover.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();












const useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.makeStyles)({
    section: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.tokens.spacingVerticalM,
    },
    row: { display: "flex", alignItems: "center", gap: "4px" },
});
/**
 * Cameras content component
 * @param props - Component props
 * @returns React component
 */
const CamerasContent = ({ scene }) => {
    _react_refresh_temp_2();
    const classes = useStyles();
    // ArcRotate Camera state
    const [arcRotateCameraName, setArcRotateCameraName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("ArcRotate Camera");
    const [arcRotateCameraTarget, setArcRotateCameraTarget] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));
    const [arcRotateCameraRadius, setArcRotateCameraRadius] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(10);
    const [arcRotateCameraAlpha, setArcRotateCameraAlpha] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const [arcRotateCameraBeta, setArcRotateCameraBeta] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(45);
    const [arcRotateCameraUseRadians, setArcRotateCameraUseRadians] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    // Universal Camera state
    const [universalCameraName, setUniversalCameraName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Universal Camera");
    const [universalCameraPosition, setUniversalCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, -10));
    const handleCreateArcRotateCamera = () => {
        const alpha = arcRotateCameraUseRadians ? arcRotateCameraAlpha : (arcRotateCameraAlpha * Math.PI) / 180;
        const beta = arcRotateCameraUseRadians ? arcRotateCameraBeta : (arcRotateCameraBeta * Math.PI) / 180;
        const camera = new core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_1__.ArcRotateCamera(arcRotateCameraName, alpha, beta, arcRotateCameraRadius, arcRotateCameraTarget, scene);
        camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
        if (!scene.activeCamera) {
            scene.activeCamera = camera;
        }
    };
    const handleCreateUniversalCamera = () => {
        const camera = new core_Cameras_universalCamera__WEBPACK_IMPORTED_MODULE_2__.UniversalCamera(universalCameraName, universalCameraPosition, scene);
        camera.attachControl(scene.getEngine().getRenderingCanvas(), true);
        if (!scene.activeCamera) {
            scene.activeCamera = camera;
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.section, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: handleCreateArcRotateCamera, label: "ArcRotate Camera" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_11__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__.TextInputPropertyLine, { label: "Name", value: arcRotateCameraName, onChange: (value) => setArcRotateCameraName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_9__.Vector3PropertyLine, { label: "Target", value: arcRotateCameraTarget, onChange: (value) => setArcRotateCameraTarget(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_8__.SpinButtonPropertyLine, { label: "Radius", value: arcRotateCameraRadius, onChange: (value) => setArcRotateCameraRadius(value), min: 0.1, max: 1000, step: 0.5 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_8__.SpinButtonPropertyLine, { label: `Alpha ${arcRotateCameraUseRadians ? "(rad)" : "(deg)"}`, value: arcRotateCameraAlpha, onChange: (value) => setArcRotateCameraAlpha(value), min: arcRotateCameraUseRadians ? -Math.PI * 2 : -360, max: arcRotateCameraUseRadians ? Math.PI * 2 : 360, step: arcRotateCameraUseRadians ? 0.1 : 5 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_8__.SpinButtonPropertyLine, { label: `Beta ${arcRotateCameraUseRadians ? "(rad)" : "(deg)"}`, value: arcRotateCameraBeta, onChange: (value) => setArcRotateCameraBeta(value), min: arcRotateCameraUseRadians ? 0 : 0, max: arcRotateCameraUseRadians ? Math.PI : 180, step: arcRotateCameraUseRadians ? 0.1 : 5 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_checkboxPropertyLine__WEBPACK_IMPORTED_MODULE_10__.CheckboxPropertyLine, { label: "Use Radians", value: arcRotateCameraUseRadians, onChange: (value) => setArcRotateCameraUseRadians(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: "primary", onClick: handleCreateArcRotateCamera, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: handleCreateUniversalCamera, label: "Universal Camera" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_11__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__.TextInputPropertyLine, { label: "Name", value: universalCameraName, onChange: (value) => setUniversalCameraName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_9__.Vector3PropertyLine, { label: "Position", value: universalCameraPosition, onChange: (value) => setUniversalCameraPosition(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: "primary", onClick: handleCreateUniversalCamera, label: "Create" })] })] })] }));
};
_react_refresh_temp_1 = CamerasContent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CamerasContent");
_react_refresh_temp_2(CamerasContent, "ufsqrKAXU9OI3YVdZpPIHgrfmt4=", false, () => [useStyles]);


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

/***/ "./src/extensions/quickCreate/lights.tsx":
/*!***********************************************!*\
  !*** ./src/extensions/quickCreate/lights.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightsContent: () => (/* binding */ LightsContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Lights/pointLight */ "../core/dist/Lights/pointLight.js");
/* harmony import */ var core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Lights/directionalLight */ "../core/dist/Lights/directionalLight.js");
/* harmony import */ var core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Lights/spotLight */ "../core/dist/Lights/spotLight.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/button */ "../sharedUiComponents/src/fluent/primitives/button.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "../../../node_modules/@fluentui/react-components/lib/index.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/inputPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/inputPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/spinButtonPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/spinButtonPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/vectorPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/vectorPropertyLine.tsx");
/* harmony import */ var _settingsPopover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settingsPopover */ "./src/extensions/quickCreate/settingsPopover.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();












const useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.makeStyles)({
    section: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.tokens.spacingVerticalM,
    },
    row: { display: "flex", alignItems: "center", gap: "4px" },
});
/**
 * Lights content component
 * @param props - Component props
 * @returns React component
 */
const LightsContent = ({ scene }) => {
    _react_refresh_temp_2();
    const classes = useStyles();
    // Point Light state
    const [pointLightName, setPointLightName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Point Light");
    const [pointLightPosition, setPointLightPosition] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 5, 0));
    // Directional Light state
    const [directionalLightName, setDirectionalLightName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Directional Light");
    const [directionalLightDirection, setDirectionalLightDirection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(1, -1, 0));
    // Spotlight state
    const [spotlightName, setSpotlightName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Spotlight");
    const [spotlightPosition, setSpotlightPosition] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 5, 0));
    const [spotlightDirection, setSpotlightDirection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, -1, 0));
    const [spotlightAngle, setSpotlightAngle] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const [spotlightExponent, setSpotlightExponent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const handleCreatePointLight = () => {
        const light = new core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_1__.PointLight(pointLightName, pointLightPosition, scene);
        light.intensity = 1.0;
    };
    const handleCreateDirectionalLight = () => {
        const dirLight = new core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(directionalLightName, directionalLightDirection, scene);
        dirLight.intensity = 1.0;
    };
    const handleCreateSpotlight = () => {
        const spotlight = new core_Lights_spotLight__WEBPACK_IMPORTED_MODULE_3__.SpotLight(spotlightName, spotlightPosition, spotlightDirection, spotlightAngle, spotlightExponent, scene);
        spotlight.intensity = 1.0;
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.section, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCreatePointLight, label: "Point Light" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_11__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Name", value: pointLightName, onChange: (value) => setPointLightName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_10__.Vector3PropertyLine, { label: "Position", value: pointLightPosition, onChange: (value) => setPointLightPosition(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: "primary", onClick: handleCreatePointLight, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCreateDirectionalLight, label: "Directional Light" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_11__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Name", value: directionalLightName, onChange: (value) => setDirectionalLightName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_10__.Vector3PropertyLine, { label: "Direction", value: directionalLightDirection, onChange: (value) => setDirectionalLightDirection(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: "primary", onClick: handleCreateDirectionalLight, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCreateSpotlight, label: "Spotlight" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_11__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Name", value: spotlightName, onChange: (value) => setSpotlightName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_10__.Vector3PropertyLine, { label: "Position", value: spotlightPosition, onChange: (value) => setSpotlightPosition(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_vectorPropertyLine__WEBPACK_IMPORTED_MODULE_10__.Vector3PropertyLine, { label: "Direction", value: spotlightDirection, onChange: (value) => setSpotlightDirection(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_9__.SpinButtonPropertyLine, { label: "Angle", value: spotlightAngle, onChange: (value) => setSpotlightAngle(value), min: 0, max: Math.PI, step: 0.1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_9__.SpinButtonPropertyLine, { label: "Exponent", value: spotlightExponent, onChange: (value) => setSpotlightExponent(value), min: 0, max: 10, step: 0.1 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: "primary", onClick: handleCreateSpotlight, label: "Create" })] })] })] }));
};
_react_refresh_temp_1 = LightsContent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "LightsContent");
_react_refresh_temp_2(LightsContent, "50xgC39zI6lG5us7Ayik4lQAbrU=", false, () => [useStyles]);


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

/***/ "./src/extensions/quickCreate/materials.tsx":
/*!**************************************************!*\
  !*** ./src/extensions/quickCreate/materials.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialsContent: () => (/* binding */ MaterialsContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var core_Materials_Node_nodeMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/Node/nodeMaterial */ "../core/dist/Materials/Node/nodeMaterial.js");
/* harmony import */ var core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Materials/PBR/pbrMaterial */ "../core/dist/Materials/PBR/pbrMaterial.js");
/* harmony import */ var core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Materials/standardMaterial */ "../core/dist/Materials/standardMaterial.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/button */ "../sharedUiComponents/src/fluent/primitives/button.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "../../../node_modules/@fluentui/react-components/lib/index.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/inputPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/inputPropertyLine.tsx");
/* harmony import */ var _settingsPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settingsPopover */ "./src/extensions/quickCreate/settingsPopover.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();









const useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.makeStyles)({
    section: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.tokens.spacingVerticalM,
    },
    row: { display: "flex", alignItems: "center", gap: "4px" },
});
/**
 * Materials content component
 * @param props - Component props
 * @returns React component
 */
const MaterialsContent = ({ scene }) => {
    _react_refresh_temp_2();
    const classes = useStyles();
    // Node Material state
    const [nodeMaterialName, setNodeMaterialName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Node Material");
    const [nodeMaterialSnippetId, setNodeMaterialSnippetId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    // PBR Material state
    const [pbrMaterialName, setPbrMaterialName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("PBR Material");
    // Standard Material state
    const [standardMaterialName, setStandardMaterialName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Standard Material");
    const handleCreateNodeMaterialAsync = async () => {
        if (nodeMaterialSnippetId) {
            try {
                const nodeMaterial = await core_Materials_Node_nodeMaterial__WEBPACK_IMPORTED_MODULE_1__.NodeMaterial.ParseFromSnippetAsync(nodeMaterialSnippetId, scene);
                nodeMaterial.name = nodeMaterialName;
            }
            catch (e) {
                alert("Failed to load Node Material from snippet: " + e);
            }
        }
        else {
            const nodeMaterial = new core_Materials_Node_nodeMaterial__WEBPACK_IMPORTED_MODULE_1__.NodeMaterial(nodeMaterialName, scene);
            nodeMaterial.build();
        }
    };
    const handleCreatePBRMaterial = () => {
        new core_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_2__.PBRMaterial(pbrMaterialName, scene);
    };
    const handleCreateStandardMaterial = () => {
        new core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_3__.StandardMaterial(standardMaterialName, scene);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.section, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: handleCreateNodeMaterialAsync, label: "Node Material" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__.TextInputPropertyLine, { label: "Name", value: nodeMaterialName, onChange: (value) => setNodeMaterialName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__.TextInputPropertyLine, { label: "Snippet ID", value: nodeMaterialSnippetId, onChange: (value) => setNodeMaterialSnippetId(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: "primary", onClick: handleCreateNodeMaterialAsync, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: handleCreatePBRMaterial, label: "PBR Material" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__.TextInputPropertyLine, { label: "Name", value: pbrMaterialName, onChange: (value) => setPbrMaterialName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: "primary", onClick: handleCreatePBRMaterial, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: handleCreateStandardMaterial, label: "Standard Material" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_7__.TextInputPropertyLine, { label: "Name", value: standardMaterialName, onChange: (value) => setStandardMaterialName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: "primary", onClick: handleCreateStandardMaterial, label: "Create" })] })] })] }));
};
_react_refresh_temp_1 = MaterialsContent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "MaterialsContent");
_react_refresh_temp_2(MaterialsContent, "5Us3iWtsRuBqkpwXel+zhugOaJo=", false, () => [useStyles]);


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

/***/ "./src/extensions/quickCreate/meshes.tsx":
/*!***********************************************!*\
  !*** ./src/extensions/quickCreate/meshes.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshesContent: () => (/* binding */ MeshesContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Meshes/meshBuilder */ "../core/dist/Meshes/meshBuilder.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/button */ "../sharedUiComponents/src/fluent/primitives/button.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "../../../node_modules/@fluentui/react-components/lib/index.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/inputPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/inputPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/spinButtonPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/spinButtonPropertyLine.tsx");
/* harmony import */ var core_Misc_filesInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core/Misc/filesInput */ "../core/dist/Misc/filesInput.js");
/* harmony import */ var _settingsPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settingsPopover */ "./src/extensions/quickCreate/settingsPopover.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_checkboxPropertyLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/checkboxPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/checkboxPropertyLine.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1, _react_refresh_temp_2;
var _react_refresh_temp_3;
_react_refresh_temp_3 = __webpack_require__.$Refresh$.signature();










const useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({
    section: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.tokens.spacingVerticalM,
    },
    row: { display: "flex", alignItems: "center", gap: "4px" },
});
const SetCamera = function (scene) {
    const camera = scene.activeCamera;
    if (camera && camera.radius !== undefined) {
        camera.radius = 5;
    }
};
_react_refresh_temp_1 = SetCamera;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "SetCamera");
/**
 * @internal
 */
const MeshesContent = ({ scene }) => {
    _react_refresh_temp_3();
    const classes = useStyles();
    const [sphereParams, setSphereParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "Sphere",
        segments: 32,
        diameter: 1,
        diameterX: 1,
        diameterY: 1,
        diameterZ: 1,
        arc: 1,
        slice: 1,
        uniform: true,
    });
    const handleSphereParamChange = (key, value) => {
        setSphereParams((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const [boxParams, setBoxParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "Box",
        size: 1,
        width: 1,
        height: 1,
        depth: 1,
    });
    const handleBoxParamChange = (key, value) => {
        setBoxParams((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const [cylinderParams, setCylinderParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "Cylinder",
        height: 2,
        diameterTop: 1,
        diameterBottom: 1,
        diameter: 1,
        tessellation: 32,
        subdivisions: 1,
        arc: 1,
    });
    const handleCylinderParamChange = (key, value) => {
        setCylinderParams((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const [coneParams, setConeParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "Cone",
        height: 2,
        diameter: 1,
        diameterTop: 0,
        diameterBottom: 1,
        tessellation: 32,
        subdivisions: 1,
        arc: 1,
    });
    const [coneUp, setConeUp] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const handleConeParamChange = (key, value) => {
        setConeParams((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const [groundParams, setGroundParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "Ground",
        width: 10,
        height: 10,
        subdivisions: 1,
        subdivisionsX: 1,
        subdivisionsY: 1,
    });
    const handleGroundParamChange = (key, value) => {
        setGroundParams((prev) => ({
            ...prev,
            [key]: value,
        }));
    };
    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [importMeshName, setImportMeshName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("ImportedMesh");
    const handleLocalMeshImport = (event) => {
        const files = event.target.files;
        if (!files || files.length === 0) {
            return;
        }
        const filesArray = Array.from(files);
        if (importMeshName.trim().length > 0 && filesArray.length > 0) {
            const originalFile = filesArray[0];
            const extensionIndex = originalFile.name.lastIndexOf(".");
            const extension = extensionIndex >= 0 ? originalFile.name.substring(extensionIndex) : "";
            const sanitizedName = importMeshName.trim();
            const desiredFileName = sanitizedName.toLowerCase().endsWith(extension.toLowerCase()) ? sanitizedName : `${sanitizedName}${extension}`;
            filesArray[0] = new File([originalFile], desiredFileName, { type: originalFile.type, lastModified: originalFile.lastModified });
        }
        const filesInput = new core_Misc_filesInput__WEBPACK_IMPORTED_MODULE_7__.FilesInput(scene.getEngine(), scene, null, null, null, null, null, null, (_sceneFile, _scene, message) => {
            alert(message ? `Failed to import mesh: ${message}` : "Failed to import mesh.");
        }, true);
        filesInput.displayLoadingUI = false;
        filesInput.loadFiles({ target: { files: filesArray } });
        filesInput.dispose();
        event.target.value = "";
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.section, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => {
                            core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateSphere("Sphere", {}, scene);
                            SetCamera(scene);
                        }, label: "Sphere" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__.TextInputPropertyLine, { label: "Name", value: sphereParams.name, onChange: (val) => handleSphereParamChange("name", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Segments", value: sphereParams.segments, min: 0, onChange: (val) => handleSphereParamChange("segments", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter", value: sphereParams.diameter, min: 0, step: 0.1, onChange: (val) => handleSphereParamChange("diameter", val), disabled: !sphereParams.uniform }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_checkboxPropertyLine__WEBPACK_IMPORTED_MODULE_9__.CheckboxPropertyLine, { label: "Uniform", value: sphereParams.uniform, onChange: (checked) => handleSphereParamChange("uniform", checked) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter X", value: sphereParams.diameterX, min: 0, step: 0.1, onChange: (val) => handleSphereParamChange("diameterX", val), disabled: sphereParams.uniform }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter Y", value: sphereParams.diameterY, min: 0, step: 0.1, onChange: (val) => handleSphereParamChange("diameterY", val), disabled: sphereParams.uniform }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter Z", value: sphereParams.diameterZ, min: 0, step: 0.1, onChange: (val) => handleSphereParamChange("diameterZ", val), disabled: sphereParams.uniform }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Arc", value: sphereParams.arc, min: 0, max: 1, step: 0.1, onChange: (val) => handleSphereParamChange("arc", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Slice", value: sphereParams.slice, min: 0, max: 1, step: 0.1, onChange: (val) => handleSphereParamChange("slice", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { appearance: "primary", onClick: () => {
                                        // Create params object based on uniform checkbox
                                        const createParams = {
                                            segments: sphereParams.segments,
                                            arc: sphereParams.arc,
                                            slice: sphereParams.slice,
                                        };
                                        if (sphereParams.uniform) {
                                            // If uniform is checked, use diameter
                                            createParams.diameter = sphereParams.diameter;
                                        }
                                        else {
                                            // If uniform is unchecked, use individual diameters
                                            createParams.diameterX = sphereParams.diameterX;
                                            createParams.diameterY = sphereParams.diameterY;
                                            createParams.diameterZ = sphereParams.diameterZ;
                                        }
                                        core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateSphere(sphereParams.name, createParams, scene);
                                        SetCamera(scene);
                                    }, label: "Create" }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => {
                            core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateBox("Box", {}, scene);
                            SetCamera(scene);
                        }, label: "Box" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__.TextInputPropertyLine, { label: "Name", value: boxParams.name, onChange: (val) => handleBoxParamChange("name", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Size", value: boxParams.size, min: 0, step: 0.1, onChange: (val) => handleBoxParamChange("size", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Width", value: boxParams.width, min: 0, step: 0.1, onChange: (val) => handleBoxParamChange("width", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Height", value: boxParams.height, min: 0, step: 0.1, onChange: (val) => handleBoxParamChange("height", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Depth", value: boxParams.depth, min: 0, step: 0.1, onChange: (val) => handleBoxParamChange("depth", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { appearance: "primary", onClick: () => {
                                        core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateBox(boxParams.name, boxParams, scene);
                                        SetCamera(scene);
                                    }, label: "Create" }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => {
                            core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateCylinder("Cylinder", {}, scene);
                            SetCamera(scene);
                        }, label: "Cylinder" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__.TextInputPropertyLine, { label: "Name", value: cylinderParams.name, onChange: (val) => handleCylinderParamChange("name", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Height", value: cylinderParams.height, min: 0, step: 0.1, onChange: (val) => handleCylinderParamChange("height", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter Top", value: cylinderParams.diameterTop, min: 0, step: 0.1, onChange: (val) => handleCylinderParamChange("diameterTop", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter Bottom", value: cylinderParams.diameterBottom, min: 0, step: 0.1, onChange: (val) => handleCylinderParamChange("diameterBottom", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter", value: cylinderParams.diameter, min: 0, step: 0.1, onChange: (val) => handleCylinderParamChange("diameter", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Tessellation", value: cylinderParams.tessellation, min: 3, onChange: (val) => handleCylinderParamChange("tessellation", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Subdivisions", value: cylinderParams.subdivisions, min: 1, onChange: (val) => handleCylinderParamChange("subdivisions", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Arc", value: cylinderParams.arc, min: 0, max: 1, step: 0.1, onChange: (val) => handleCylinderParamChange("arc", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { appearance: "primary", onClick: () => {
                                        core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateCylinder(cylinderParams.name, cylinderParams, scene);
                                        SetCamera(scene);
                                    }, label: "Create" }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => {
                            core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateCylinder("Cone", { diameterTop: 0 }, scene);
                            SetCamera(scene);
                        }, label: "Cone" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__.TextInputPropertyLine, { label: "Name", value: coneParams.name, onChange: (val) => handleConeParamChange("name", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Height", value: coneParams.height, min: 0, step: 0.1, onChange: (val) => handleConeParamChange("height", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Diameter", value: coneParams.diameter, min: 0, step: 0.1, onChange: (val) => handleConeParamChange("diameter", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Tessellation", value: coneParams.tessellation, min: 3, onChange: (val) => handleConeParamChange("tessellation", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Subdivisions", value: coneParams.subdivisions, min: 1, onChange: (val) => handleConeParamChange("subdivisions", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Arc", value: coneParams.arc, min: 0, max: 1, step: 0.1, onChange: (val) => handleConeParamChange("arc", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_checkboxPropertyLine__WEBPACK_IMPORTED_MODULE_9__.CheckboxPropertyLine, { label: "Up", value: coneUp, onChange: (val) => setConeUp(val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { appearance: "primary", onClick: () => {
                                        const coneParamsToUse = {
                                            ...coneParams,
                                            diameterTop: coneUp ? 0 : coneParams.diameterTop,
                                            diameterBottom: coneUp ? coneParams.diameterBottom : 0,
                                        };
                                        core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateCylinder(coneParams.name, coneParamsToUse, scene);
                                        SetCamera(scene);
                                    }, label: "Create" }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => {
                            core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateGround("Ground", {}, scene);
                            SetCamera(scene);
                        }, label: "Ground" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__.TextInputPropertyLine, { label: "Name", value: groundParams.name, onChange: (val) => handleGroundParamChange("name", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Width", value: groundParams.width, min: 0, step: 0.1, onChange: (val) => handleGroundParamChange("width", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Height", value: groundParams.height, min: 0, step: 0.1, onChange: (val) => handleGroundParamChange("height", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Subdivisions", value: groundParams.subdivisions, min: 1, onChange: (val) => handleGroundParamChange("subdivisions", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Subdivisions X", value: groundParams.subdivisionsX, min: 1, onChange: (val) => handleGroundParamChange("subdivisionsX", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_6__.SpinButtonPropertyLine, { label: "Subdivisions Y", value: groundParams.subdivisionsY, min: 1, onChange: (val) => handleGroundParamChange("subdivisionsY", val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { appearance: "primary", onClick: () => {
                                        core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_1__.MeshBuilder.CreateGround(groundParams.name, groundParams, scene);
                                        SetCamera(scene);
                                    }, label: "Create" }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => {
                            fileInputRef.current?.click();
                        }, label: "Import Mesh" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_8__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_5__.TextInputPropertyLine, { label: "Name", value: importMeshName, onChange: (val) => setImportMeshName(val) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_3__.Button, { appearance: "primary", onClick: () => {
                                        fileInputRef.current?.click();
                                    }, label: "Import" }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ref: fileInputRef, type: "file", accept: ".babylon,.glb,.gltf,.obj,.stl,.ply,.mesh,.babylonmeshdata", multiple: true, style: { display: "none" }, onChange: handleLocalMeshImport })] })] }));
};
_react_refresh_temp_2 = MeshesContent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_2, "MeshesContent");
_react_refresh_temp_3(MeshesContent, "8APZ7fEpyOCeSjcVz7sV5q+AjHI=", false, () => [useStyles]);


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

/***/ "./src/extensions/quickCreate/particles.tsx":
/*!**************************************************!*\
  !*** ./src/extensions/quickCreate/particles.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticlesContent: () => (/* binding */ ParticlesContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var core_Particles_particleSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Particles/particleSystem */ "../core/dist/Particles/particleSystem.js");
/* harmony import */ var core_Particles_gpuParticleSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Particles/gpuParticleSystem */ "../core/dist/Particles/gpuParticleSystem.js");
/* harmony import */ var core_Particles_Node_nodeParticleSystemSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/Particles/Node/nodeParticleSystemSet */ "../core/dist/Particles/Node/nodeParticleSystemSet.js");
/* harmony import */ var core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/Materials/Textures/texture */ "../core/dist/Materials/Textures/texture.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/button */ "../sharedUiComponents/src/fluent/primitives/button.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "../../../node_modules/@fluentui/react-components/lib/index.js");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/inputPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/inputPropertyLine.tsx");
/* harmony import */ var shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared-ui-components/fluent/hoc/propertyLines/spinButtonPropertyLine */ "../sharedUiComponents/src/fluent/hoc/propertyLines/spinButtonPropertyLine.tsx");
/* harmony import */ var _settingsPopover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settingsPopover */ "./src/extensions/quickCreate/settingsPopover.tsx");
/* harmony import */ var core_Particles_webgl2ParticleSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core/Particles/webgl2ParticleSystem */ "../core/dist/Particles/webgl2ParticleSystem.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();











// Side-effect import needed for GPUParticleSystem

const useStyles = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.makeStyles)({
    section: {
        display: "flex",
        flexDirection: "column",
        rowGap: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.tokens.spacingVerticalM,
    },
    row: { display: "flex", alignItems: "center", gap: "4px" },
});
/**
 * Particles content component
 * @param props - Component props
 * @returns React component
 */
const ParticlesContent = ({ scene }) => {
    _react_refresh_temp_2();
    const classes = useStyles();
    // CPU Particle System state
    const [cpuParticleSystemName, setCpuParticleSystemName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Particle System");
    const [cpuParticleSystemCapacity, setCpuParticleSystemCapacity] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(2000);
    // GPU Particle System state
    const [gpuParticleSystemName, setGpuParticleSystemName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("GPU Particle System");
    const [gpuParticleSystemCapacity, setGpuParticleSystemCapacity] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(2000);
    // Node Particle System state
    const [nodeParticleSystemName, setNodeParticleSystemName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("Node Particle System");
    const [nodeParticleSystemSnippetId, setNodeParticleSystemSnippetId] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const handleCreateCPUParticleSystem = () => {
        setTimeout(() => {
            const system = new core_Particles_particleSystem__WEBPACK_IMPORTED_MODULE_1__.ParticleSystem(cpuParticleSystemName, cpuParticleSystemCapacity, scene);
            system.particleTexture = new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture("https://assets.babylonjs.com/textures/flare.png", scene);
            system.start();
        }, 0);
    };
    const handleCreateGPUParticleSystem = () => {
        if (core_Particles_gpuParticleSystem__WEBPACK_IMPORTED_MODULE_2__.GPUParticleSystem.IsSupported) {
            setTimeout(() => {
                const system = new core_Particles_gpuParticleSystem__WEBPACK_IMPORTED_MODULE_2__.GPUParticleSystem(gpuParticleSystemName, { capacity: gpuParticleSystemCapacity }, scene);
                system.particleTexture = new core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_4__.Texture("https://assets.babylonjs.com/textures/flare.png", scene);
                system.start();
            }, 0);
        }
        else {
            alert("GPU Particle System is not supported.");
        }
    };
    const handleCreateNodeParticleSystemAsync = async () => {
        try {
            let nodeParticleSet;
            const snippetId = nodeParticleSystemSnippetId.trim();
            if (snippetId) {
                nodeParticleSet = await core_Particles_Node_nodeParticleSystemSet__WEBPACK_IMPORTED_MODULE_3__.NodeParticleSystemSet.ParseFromSnippetAsync(snippetId);
                nodeParticleSet.name = nodeParticleSystemName;
            }
            else {
                nodeParticleSet = core_Particles_Node_nodeParticleSystemSet__WEBPACK_IMPORTED_MODULE_3__.NodeParticleSystemSet.CreateDefault(nodeParticleSystemName);
            }
            const particleSystemSet = await nodeParticleSet.buildAsync(scene);
            for (const system of particleSystemSet.systems) {
                system.name = nodeParticleSystemName;
            }
            particleSystemSet.start();
        }
        catch (e) {
            __webpack_require__.g.console.error("Error creating Node Particle System:", e);
            alert("Failed to create Node Particle System: " + e);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.section, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCreateCPUParticleSystem, label: "CPU Particle System" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_10__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Name", value: cpuParticleSystemName, onChange: (value) => setCpuParticleSystemName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_9__.SpinButtonPropertyLine, { label: "Capacity", value: cpuParticleSystemCapacity, onChange: (value) => setCpuParticleSystemCapacity(value), min: 1, max: 100000, step: 100 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: "primary", onClick: handleCreateCPUParticleSystem, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCreateGPUParticleSystem, label: "GPU Particle System" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_10__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Name", value: gpuParticleSystemName, onChange: (value) => setGpuParticleSystemName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_spinButtonPropertyLine__WEBPACK_IMPORTED_MODULE_9__.SpinButtonPropertyLine, { label: "Capacity", value: gpuParticleSystemCapacity, onChange: (value) => setGpuParticleSystemCapacity(value), min: 1, max: 1000000, step: 1000 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: "primary", onClick: handleCreateGPUParticleSystem, label: "Create" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classes.row, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: handleCreateNodeParticleSystemAsync, label: "Node Particle System" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_settingsPopover__WEBPACK_IMPORTED_MODULE_10__.SettingsPopover, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Name", value: nodeParticleSystemName, onChange: (value) => setNodeParticleSystemName(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_hoc_propertyLines_inputPropertyLine__WEBPACK_IMPORTED_MODULE_8__.TextInputPropertyLine, { label: "Snippet ID", value: nodeParticleSystemSnippetId, onChange: (value) => setNodeParticleSystemSnippetId(value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_button__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: "primary", onClick: handleCreateNodeParticleSystemAsync, label: "Create" })] })] })] }));
};
_react_refresh_temp_1 = ParticlesContent;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "ParticlesContent");
_react_refresh_temp_2(ParticlesContent, "Ie5kUV+VxssSVMgA/V8mXWhqwpY=", false, () => [useStyles]);


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

/***/ "./src/extensions/quickCreate/quickCreateToolsService.tsx":
/*!****************************************************************!*\
  !*** ./src/extensions/quickCreate/quickCreateToolsService.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateToolsServiceDefinition: () => (/* binding */ CreateToolsServiceDefinition),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/accordion */ "../sharedUiComponents/src/fluent/primitives/accordion.tsx");
/* harmony import */ var _services_shellService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shellService */ "./src/services/shellService.tsx");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "../../../node_modules/@fluentui/react-icons/lib/index.js");
/* harmony import */ var _services_sceneContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sceneContext */ "./src/services/sceneContext.ts");
/* harmony import */ var _hooks_observableHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/observableHooks */ "./src/hooks/observableHooks.ts");
/* harmony import */ var core_Particles_webgl2ParticleSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Particles/webgl2ParticleSystem */ "../core/dist/Particles/webgl2ParticleSystem.js");
/* harmony import */ var _meshes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meshes */ "./src/extensions/quickCreate/meshes.tsx");
/* harmony import */ var _materials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./materials */ "./src/extensions/quickCreate/materials.tsx");
/* harmony import */ var _lights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lights */ "./src/extensions/quickCreate/lights.tsx");
/* harmony import */ var _cameras__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cameras */ "./src/extensions/quickCreate/cameras.tsx");
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./particles */ "./src/extensions/quickCreate/particles.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







// Side-effect import needed for GPUParticleSystem






// TODO: This is just a placeholder for a dynamically installed extension that brings in asset creation tools (node materials, etc.).
const CreateToolsServiceDefinition = {
    friendlyName: "Creation Tools",
    consumes: [_services_shellService__WEBPACK_IMPORTED_MODULE_2__.ShellServiceIdentity, _services_sceneContext__WEBPACK_IMPORTED_MODULE_4__.SceneContextIdentity],
    factory: (shellService, sceneContext) => {
        var _react_refresh_temp_1;
        _react_refresh_temp_1 = __webpack_require__.$Refresh$.signature();
        const registration = shellService.addSidePane({
            key: "Create",
            title: "Creation Tools",
            icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.CollectionsAdd20Regular,
            horizontalLocation: "left",
            verticalLocation: "top",
            content: _react_refresh_temp_1(() => {
                _react_refresh_temp_1();
                const scene = (0,_hooks_observableHooks__WEBPACK_IMPORTED_MODULE_5__.useObservableState)(() => sceneContext.currentScene, sceneContext.currentSceneObservable);
                return (scene && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__.Accordion, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionSection, { title: "Meshes", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_meshes__WEBPACK_IMPORTED_MODULE_7__.MeshesContent, { scene: scene }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionSection, { title: "Materials", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_materials__WEBPACK_IMPORTED_MODULE_8__.MaterialsContent, { scene: scene }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionSection, { title: "Lights", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lights__WEBPACK_IMPORTED_MODULE_9__.LightsContent, { scene: scene }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionSection, { title: "Particles", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_particles__WEBPACK_IMPORTED_MODULE_11__.ParticlesContent, { scene: scene }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_components_fluent_primitives_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionSection, { title: "Cameras", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cameras__WEBPACK_IMPORTED_MODULE_10__.CamerasContent, { scene: scene }) })] }) })));
            }, "U1zo5AfT9ckIUi/iQkGxOzmDL+M=", false, () => [_hooks_observableHooks__WEBPACK_IMPORTED_MODULE_5__.useObservableState]),
        });
        return {
            dispose: () => registration.dispose(),
        };
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    serviceDefinitions: [CreateToolsServiceDefinition],
});


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

/***/ "./src/extensions/quickCreate/settingsPopover.tsx":
/*!********************************************************!*\
  !*** ./src/extensions/quickCreate/settingsPopover.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPopover: () => (/* binding */ SettingsPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_components_fluent_primitives_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-ui-components/fluent/primitives/popover */ "../sharedUiComponents/src/fluent/primitives/popover.tsx");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-icons */ "../../../node_modules/@fluentui/react-icons/lib/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;



/**
 * Settings popover component
 * @param props
 * @returns
 */
const SettingsPopover = (props) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_components_fluent_primitives_popover__WEBPACK_IMPORTED_MODULE_1__.Popover, { icon: _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.SettingsRegular, children: [" ", props.children, " "] });
};
_react_refresh_temp_1 = SettingsPopover;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "SettingsPopover");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2V4dGVuc2lvbnNfcXVpY2tDcmVhdGVfcXVpY2tDcmVhdGVUb29sc1NlcnZpY2VfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFLQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBc0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUE3SkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWlDQTtBQUNBO0FBd0NBO0FBb0VBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25WQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFvQkE7OztBQUdBO0FBQ0E7QUFDQTtBQXhCQTs7QUFFQTtBQWFBO0FBV0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUE5U0E7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1ZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFhQTs7QUFFQTtBQUNBO0FBV0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBakVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQTJEQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFrRkE7OztBQUdBO0FBQ0E7QUFDQTtBQXBGQTs7QUFFQTtBQVlBO0FBRUE7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUEzU0E7QUFnQkE7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFrT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVEE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFrQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBaEhBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBMkNBO0FBQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF4VkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUVBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQW9EQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQS9NQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQTZIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQWNBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBNEtBO0FBdEtBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFvQkE7Ozs7QUFJQTtBQUNBO0FBMkNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQXRIQTtBQUNBO0FBYUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQXNIQTtBQTNCQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBcmxCQTtBQUNBO0FBRUE7QUFDQTtBQTJCQTtBQURBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQVlBO0FBQ0E7QUFSQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsVUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBeUNBO0FBM0VBOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7OztBQUlBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9DQTtBQXJFQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQStCQTtBQWxFQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBMERBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUE0Q0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBU0E7QUFDQTtBQWdCQTtBQTVZQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7OztBQUlBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUErQ0E7QUF2R0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvTWF0ZXJpYWxzL3VuaWZvcm1CdWZmZXJFZmZlY3RDb21tb25BY2Nlc3Nvci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1BhcnRpY2xlcy9Ob2RlL0Jsb2Nrcy9FbWl0dGVycy9ib3hTaGFwZUJsb2NrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUGFydGljbGVzL05vZGUvQmxvY2tzL0VtaXR0ZXJzL2NyZWF0ZVBhcnRpY2xlQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9CbG9ja3MvRW1pdHRlcnMvZW1pdHRlcnMuZnVuY3Rpb25zLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUGFydGljbGVzL05vZGUvQmxvY2tzL1RyaWdnZXJzL3RyaWdnZXJUb29scy50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1BhcnRpY2xlcy9Ob2RlL0Jsb2Nrcy9VcGRhdGUvdXBkYXRlUG9zaXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1BhcnRpY2xlcy9Ob2RlL0Jsb2Nrcy9wYXJ0aWNsZUlucHV0QmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9CbG9ja3MvcGFydGljbGVNYXRoQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9CbG9ja3MvcGFydGljbGVTb3VyY2VUZXh0dXJlQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9CbG9ja3Mvc3lzdGVtQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9FbnVtcy9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUGFydGljbGVzL05vZGUvRW51bXMvbm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9FbnVtcy9ub2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvUGFydGljbGVzL05vZGUvbm9kZVBhcnRpY2xlQmxvY2sudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1BhcnRpY2xlcy9Ob2RlL25vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvTm9kZS9ub2RlUGFydGljbGVTeXN0ZW1TZXQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9QYXJ0aWNsZXMvd2ViZ2wyUGFydGljbGVTeXN0ZW0udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9TaGFkZXJzL2dwdVVwZGF0ZVBhcnRpY2xlcy5mcmFnbWVudC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL1NoYWRlcnMvZ3B1VXBkYXRlUGFydGljbGVzLnZlcnRleC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvZXh0ZW5zaW9ucy9xdWlja0NyZWF0ZS9jYW1lcmFzLnRzeCIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvZXh0ZW5zaW9ucy9xdWlja0NyZWF0ZS9saWdodHMudHN4IiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvaW5zcGVjdG9yLXYyL3NyYy9leHRlbnNpb25zL3F1aWNrQ3JlYXRlL21hdGVyaWFscy50c3giLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9pbnNwZWN0b3ItdjIvc3JjL2V4dGVuc2lvbnMvcXVpY2tDcmVhdGUvbWVzaGVzLnRzeCIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvZXh0ZW5zaW9ucy9xdWlja0NyZWF0ZS9wYXJ0aWNsZXMudHN4IiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvaW5zcGVjdG9yLXYyL3NyYy9leHRlbnNpb25zL3F1aWNrQ3JlYXRlL3F1aWNrQ3JlYXRlVG9vbHNTZXJ2aWNlLnRzeCIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2luc3BlY3Rvci12Mi9zcmMvZXh0ZW5zaW9ucy9xdWlja0NyZWF0ZS9zZXR0aW5nc1BvcG92ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSUNvbG9yM0xpa2UsIElDb2xvcjRMaWtlLCBJTWF0cml4TGlrZSwgSVZlY3RvcjNMaWtlLCBJVmVjdG9yNExpa2UgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC5saWtlXCI7XHJcbmltcG9ydCB0eXBlIHsgRWZmZWN0IH0gZnJvbSBcIi4vZWZmZWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgVW5pZm9ybUJ1ZmZlciB9IGZyb20gXCIuL3VuaWZvcm1CdWZmZXJcIjtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIFVuaWZvcm1CdWZmZXJFZmZlY3RDb21tb25BY2Nlc3NvciB7XHJcbiAgICBwdWJsaWMgc2V0TWF0cml4M3gzOiAobmFtZTogc3RyaW5nLCBtYXRyaXg6IEZsb2F0MzJBcnJheSkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0TWF0cml4MngyOiAobmFtZTogc3RyaW5nLCBtYXRyaXg6IEZsb2F0MzJBcnJheSkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0RmxvYXQ6IChuYW1lOiBzdHJpbmcsIHg6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0RmxvYXQyOiAobmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc3VmZml4Pzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRGbG9hdDM6IChuYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0RmxvYXQ0OiAobmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB3OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0RmxvYXRBcnJheTogKG5hbWU6IHN0cmluZywgYXJyYXk6IEZsb2F0MzJBcnJheSkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0QXJyYXk6IChuYW1lOiBzdHJpbmcsIGFycmF5OiBudW1iZXJbXSkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0SW50QXJyYXk6IChuYW1lOiBzdHJpbmcsIGFycmF5OiBJbnQzMkFycmF5KSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRNYXRyaXg6IChuYW1lOiBzdHJpbmcsIG1hdDogSU1hdHJpeExpa2UpID0+IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIHNldE1hdHJpY2VzOiAobmFtZTogc3RyaW5nLCBtYXQ6IEZsb2F0MzJBcnJheSkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0VmVjdG9yMzogKG5hbWU6IHN0cmluZywgdmVjdG9yOiBJVmVjdG9yM0xpa2UpID0+IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIHNldFZlY3RvcjQ6IChuYW1lOiBzdHJpbmcsIHZlY3RvcjogSVZlY3RvcjRMaWtlKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRDb2xvcjM6IChuYW1lOiBzdHJpbmcsIGNvbG9yOiBJQ29sb3IzTGlrZSwgc3VmZml4Pzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRDb2xvcjQ6IChuYW1lOiBzdHJpbmcsIGNvbG9yOiBJQ29sb3IzTGlrZSwgYWxwaGE6IG51bWJlciwgc3VmZml4Pzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBzZXREaXJlY3RDb2xvcjQ6IChuYW1lOiBzdHJpbmcsIGNvbG9yOiBJQ29sb3I0TGlrZSkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0SW50OiAobmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0SW50MjogKG5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgc2V0SW50MzogKG5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgc3VmZml4Pzogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBzZXRJbnQ0OiAobmFtZTogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB3OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbiAgICBwcml2YXRlIF9pc1Vibyh1Ym9PckVmZmVjdDogVW5pZm9ybUJ1ZmZlciB8IEVmZmVjdCk6IHVib09yRWZmZWN0IGlzIFVuaWZvcm1CdWZmZXIge1xyXG4gICAgICAgIHJldHVybiAodWJvT3JFZmZlY3QgYXMgVW5pZm9ybUJ1ZmZlcikuYWRkVW5pZm9ybSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVib09yRWZmZWN0OiBVbmlmb3JtQnVmZmVyIHwgRWZmZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVWJvKHVib09yRWZmZWN0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpeDN4MyA9IHVib09yRWZmZWN0LnVwZGF0ZU1hdHJpeDN4My5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgyeDIgPSB1Ym9PckVmZmVjdC51cGRhdGVNYXRyaXgyeDIuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmxvYXQgPSB1Ym9PckVmZmVjdC51cGRhdGVGbG9hdC5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGbG9hdDIgPSB1Ym9PckVmZmVjdC51cGRhdGVGbG9hdDIuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmxvYXQzID0gdWJvT3JFZmZlY3QudXBkYXRlRmxvYXQzLmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZsb2F0NCA9IHVib09yRWZmZWN0LnVwZGF0ZUZsb2F0NC5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGbG9hdEFycmF5ID0gdWJvT3JFZmZlY3QudXBkYXRlRmxvYXRBcnJheS5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBcnJheSA9IHVib09yRWZmZWN0LnVwZGF0ZUFycmF5LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEludEFycmF5ID0gdWJvT3JFZmZlY3QudXBkYXRlSW50QXJyYXkuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cml4ID0gdWJvT3JFZmZlY3QudXBkYXRlTWF0cml4LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpY2VzID0gdWJvT3JFZmZlY3QudXBkYXRlTWF0cmljZXMuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVjdG9yMyA9IHVib09yRWZmZWN0LnVwZGF0ZVZlY3RvcjMuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVjdG9yNCA9IHVib09yRWZmZWN0LnVwZGF0ZVZlY3RvcjQuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sb3IzID0gdWJvT3JFZmZlY3QudXBkYXRlQ29sb3IzLmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbG9yNCA9IHVib09yRWZmZWN0LnVwZGF0ZUNvbG9yNC5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREaXJlY3RDb2xvcjQgPSB1Ym9PckVmZmVjdC51cGRhdGVEaXJlY3RDb2xvcjQuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW50ID0gdWJvT3JFZmZlY3QudXBkYXRlSW50LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEludDIgPSB1Ym9PckVmZmVjdC51cGRhdGVJbnQyLmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEludDMgPSB1Ym9PckVmZmVjdC51cGRhdGVJbnQzLmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEludDQgPSB1Ym9PckVmZmVjdC51cGRhdGVJbnQ0LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cml4M3gzID0gdWJvT3JFZmZlY3Quc2V0TWF0cml4M3gzLmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE1hdHJpeDJ4MiA9IHVib09yRWZmZWN0LnNldE1hdHJpeDJ4Mi5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGbG9hdCA9IHVib09yRWZmZWN0LnNldEZsb2F0LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZsb2F0MiA9IHVib09yRWZmZWN0LnNldEZsb2F0Mi5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGbG9hdDMgPSB1Ym9PckVmZmVjdC5zZXRGbG9hdDMuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmxvYXQ0ID0gdWJvT3JFZmZlY3Quc2V0RmxvYXQ0LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZsb2F0QXJyYXkgPSB1Ym9PckVmZmVjdC5zZXRGbG9hdEFycmF5LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFycmF5ID0gdWJvT3JFZmZlY3Quc2V0QXJyYXkuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW50QXJyYXkgPSB1Ym9PckVmZmVjdC5zZXRJbnRBcnJheS5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXggPSB1Ym9PckVmZmVjdC5zZXRNYXRyaXguYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0cmljZXMgPSB1Ym9PckVmZmVjdC5zZXRNYXRyaWNlcy5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWN0b3IzID0gdWJvT3JFZmZlY3Quc2V0VmVjdG9yMy5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWN0b3I0ID0gdWJvT3JFZmZlY3Quc2V0VmVjdG9yNC5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcjMgPSB1Ym9PckVmZmVjdC5zZXRDb2xvcjMuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sb3I0ID0gdWJvT3JFZmZlY3Quc2V0Q29sb3I0LmJpbmQodWJvT3JFZmZlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERpcmVjdENvbG9yNCA9IHVib09yRWZmZWN0LnNldERpcmVjdENvbG9yNC5iaW5kKHVib09yRWZmZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbnQgPSB1Ym9PckVmZmVjdC5zZXRJbnQuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW50MiA9IHVib09yRWZmZWN0LnNldEludDIuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW50MyA9IHVib09yRWZmZWN0LnNldEludDMuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW50NCA9IHVib09yRWZmZWN0LnNldEludDQuYmluZCh1Ym9PckVmZmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IH0gZnJvbSBcIi4uLy4uL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50XCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSB9IGZyb20gXCIuLi8uLi9ub2RlUGFydGljbGVCdWlsZFN0YXRlXCI7XHJcbmltcG9ydCB0eXBlIHsgUGFydGljbGUgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvcGFydGljbGVcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2hhcGVCbG9jayB9IGZyb20gXCIuL0lTaGFwZUJsb2NrXCI7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMgfSBmcm9tIFwiLi4vLi4vRW51bXMvbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQmxvY2sgfSBmcm9tIFwiLi4vLi4vbm9kZVBhcnRpY2xlQmxvY2tcIjtcclxuaW1wb3J0IHsgUmFuZG9tUmFuZ2UgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnNjYWxhci5mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgX0NyZWF0ZUxvY2FsUG9zaXRpb25EYXRhIH0gZnJvbSBcIi4vZW1pdHRlcnMuZnVuY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQmxvY2sgdXNlZCB0byBwcm92aWRlIGEgZmxvdyBvZiBwYXJ0aWNsZXMgZW1pdHRlZCBmcm9tIGEgYm94IHNoYXBlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJveFNoYXBlQmxvY2sgZXh0ZW5kcyBOb2RlUGFydGljbGVCbG9jayBpbXBsZW1lbnRzIElTaGFwZUJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IEJveFNoYXBlQmxvY2tcclxuICAgICAqIEBwYXJhbSBuYW1lIGRlZmluZXMgdGhlIGJsb2NrIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoXCJwYXJ0aWNsZVwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlBhcnRpY2xlKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoXCJkaXJlY3Rpb24xXCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuVmVjdG9yMywgdHJ1ZSwgbmV3IFZlY3RvcjMoMCwgMS4wLCAwKSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwiZGlyZWN0aW9uMlwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjMsIHRydWUsIG5ldyBWZWN0b3IzKDAsIDEuMCwgMCkpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnB1dChcIm1pbkVtaXRCb3hcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IzLCB0cnVlLCBuZXcgVmVjdG9yMygtMC41LCAtMC41LCAtMC41KSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwibWF4RW1pdEJveFwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjMsIHRydWUsIG5ldyBWZWN0b3IzKDAuNSwgMC41LCAwLjUpKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT3V0cHV0KFwib3V0cHV0XCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuUGFydGljbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIkJveFNoYXBlQmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBhcnRpY2xlIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBhcnRpY2xlKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGRpcmVjdGlvbjEgaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uMSgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dHNbMV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBkaXJlY3Rpb24yIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbjIoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbWluRW1pdEJveCBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtaW5FbWl0Qm94KCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1szXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG1heEVtaXRCb3ggaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbWF4RW1pdEJveCgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dHNbNF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBvdXRwdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgb3V0cHV0KCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgZGVmaW5lcyB0aGUgYnVpbGQgc3RhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9idWlsZChzdGF0ZTogTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMucGFydGljbGUuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG5cclxuICAgICAgICBzeXN0ZW0uX2RpcmVjdGlvbkNyZWF0aW9uLnByb2Nlc3MgPSAocGFydGljbGU6IFBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcnRpY2xlQ29udGV4dCA9IHBhcnRpY2xlO1xyXG4gICAgICAgICAgICBzdGF0ZS5zeXN0ZW1Db250ZXh0ID0gc3lzdGVtO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uMSA9IHRoaXMuZGlyZWN0aW9uMS5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uMiA9IHRoaXMuZGlyZWN0aW9uMi5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgVmVjdG9yMztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRYID0gUmFuZG9tUmFuZ2UoZGlyZWN0aW9uMS54LCBkaXJlY3Rpb24yLngpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kWSA9IFJhbmRvbVJhbmdlKGRpcmVjdGlvbjEueSwgZGlyZWN0aW9uMi55KTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZFogPSBSYW5kb21SYW5nZShkaXJlY3Rpb24xLnosIGRpcmVjdGlvbjIueik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3lzdGVtLmlzTG9jYWwpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLmRpcmVjdGlvbi5jb3B5RnJvbUZsb2F0cyhyYW5kWCwgcmFuZFksIHJhbmRaKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFZlY3RvcjMuVHJhbnNmb3JtTm9ybWFsRnJvbUZsb2F0c1RvUmVmKHJhbmRYLCByYW5kWSwgcmFuZFosIHN0YXRlLmVtaXR0ZXJXb3JsZE1hdHJpeCEsIHBhcnRpY2xlLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLl9pbml0aWFsRGlyZWN0aW9uID0gcGFydGljbGUuZGlyZWN0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3lzdGVtLl9wb3NpdGlvbkNyZWF0aW9uLnByb2Nlc3MgPSAocGFydGljbGU6IFBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcnRpY2xlQ29udGV4dCA9IHBhcnRpY2xlO1xyXG4gICAgICAgICAgICBzdGF0ZS5zeXN0ZW1Db250ZXh0ID0gc3lzdGVtO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWluRW1pdEJveCA9IHRoaXMubWluRW1pdEJveC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgVmVjdG9yMztcclxuICAgICAgICAgICAgY29uc3QgbWF4RW1pdEJveCA9IHRoaXMubWF4RW1pdEJveC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgVmVjdG9yMztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRYID0gUmFuZG9tUmFuZ2UobWluRW1pdEJveC54LCBtYXhFbWl0Qm94LngpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5kWSA9IFJhbmRvbVJhbmdlKG1pbkVtaXRCb3gueSwgbWF4RW1pdEJveC55KTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZFogPSBSYW5kb21SYW5nZShtaW5FbWl0Qm94LnosIG1heEVtaXRCb3gueik7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3lzdGVtLmlzTG9jYWwpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uLmNvcHlGcm9tRmxvYXRzKHJhbmRYLCByYW5kWSwgcmFuZFopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVmVjdG9yMy5UcmFuc2Zvcm1Db29yZGluYXRlc0Zyb21GbG9hdHNUb1JlZihyYW5kWCwgcmFuZFksIHJhbmRaLCBzdGF0ZS5lbWl0dGVyV29ybGRNYXRyaXghLCBwYXJ0aWNsZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF9DcmVhdGVMb2NhbFBvc2l0aW9uRGF0YShwYXJ0aWNsZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vdXRwdXQuX3N0b3JlZFZhbHVlID0gc3lzdGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5Cb3hTaGFwZUJsb2NrXCIsIEJveFNoYXBlQmxvY2spO1xyXG4iLCJpbXBvcnQgeyBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzIH0gZnJvbSBcIi4uLy4uL0VudW1zL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXNcIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQmxvY2sgfSBmcm9tIFwiLi4vLi4vbm9kZVBhcnRpY2xlQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQgfSBmcm9tIFwiLi4vLi4vbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRcIjtcclxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvcGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVCdWlsZFN0YXRlIH0gZnJvbSBcIi4uLy4uL25vZGVQYXJ0aWNsZUJ1aWxkU3RhdGVcIjtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5pbXBvcnQgdHlwZSB7IF9JRXhlY3V0aW9uUXVldWVJdGVtIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL1F1ZXVlL2V4ZWN1dGlvblF1ZXVlXCI7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuaW1wb3J0IHsgX1JlbW92ZUZyb21RdWV1ZSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9RdWV1ZS9leGVjdXRpb25RdWV1ZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFBhcnRpY2xlIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3BhcnRpY2xlXCI7XHJcbmltcG9ydCB0eXBlIHsgVGhpblBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3RoaW5QYXJ0aWNsZVN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgUG9pbnRQYXJ0aWNsZUVtaXR0ZXIgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvRW1pdHRlclR5cGVzL3BvaW50UGFydGljbGVFbWl0dGVyXCI7XHJcblxyXG5jb25zdCBDb2xvckRpZmYgPSBuZXcgQ29sb3I0KCk7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3JlYXRlUGFydGljbGVCbG9jayBleHRlbmRzIE5vZGVQYXJ0aWNsZUJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IENyZWF0ZVBhcnRpY2xlQmxvY2tcclxuICAgICAqIEBwYXJhbSBuYW1lIGRlZmluZXMgdGhlIGJsb2NrIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoXCJlbWl0UG93ZXJcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwibGlmZVRpbWVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwiY29sb3JcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5Db2xvcjQsIHRydWUsIG5ldyBDb2xvcjQoMSwgMSwgMSwgMSkpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnB1dChcImNvbG9yRGVhZFwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkNvbG9yNCwgdHJ1ZSwgbmV3IENvbG9yNCgwLCAwLCAwLCAwKSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwic2NhbGVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IyLCB0cnVlLCBuZXcgVmVjdG9yMigxLCAxKSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwiYW5nbGVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCwgdHJ1ZSwgMCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwic2l6ZVwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkZsb2F0LCB0cnVlLCAxKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT3V0cHV0KFwicGFydGljbGVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5QYXJ0aWNsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NhbGUuYWNjZXB0ZWRDb25uZWN0aW9uUG9pbnRUeXBlcy5wdXNoKE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuRmxvYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIkNyZWF0ZVBhcnRpY2xlQmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGVtaXRQb3dlciBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBlbWl0UG93ZXIoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGlmZVRpbWUgaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGlmZVRpbWUoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29sb3IgaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29sb3IoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY29sb3IgZGVhZCBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb2xvckRlYWQoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc2NhbGUgaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2NhbGUoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgYW5nbGUgaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYW5nbGUoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgc2l6ZSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzaXplKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1s2XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBhcnRpY2xlIG91dHB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwYXJ0aWNsZSgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfYnVpbGQoc3RhdGU6IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUpIHtcclxuICAgICAgICBjb25zdCBzeXN0ZW0gPSBuZXcgUGFydGljbGVTeXN0ZW0odGhpcy5uYW1lLCBzdGF0ZS5jYXBhY2l0eSwgc3RhdGUuc2NlbmUsIG51bGwsIGZhbHNlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgIHN5c3RlbS5wYXJ0aWNsZUVtaXR0ZXJUeXBlID0gbmV3IFBvaW50UGFydGljbGVFbWl0dGVyKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW9uXHJcbiAgICAgICAgc3lzdGVtLl9saWZlVGltZUNyZWF0aW9uLnByb2Nlc3MgPSAocGFydGljbGU6IFBhcnRpY2xlLCBzeXN0ZW06IFRoaW5QYXJ0aWNsZVN5c3RlbSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wYXJ0aWNsZUNvbnRleHQgPSBwYXJ0aWNsZTtcclxuICAgICAgICAgICAgcGFydGljbGUubGlmZVRpbWUgPSB0aGlzLmxpZmVUaW1lLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKTtcclxuICAgICAgICAgICAgc3lzdGVtLl9lbWl0UG93ZXIgPSB0aGlzLmVtaXRQb3dlci5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3lzdGVtLl9jb2xvckNyZWF0aW9uLnByb2Nlc3MgPSAocGFydGljbGU6IFBhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcnRpY2xlQ29udGV4dCA9IHBhcnRpY2xlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLmNvbG9yLmNvcHlGcm9tKGNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN5c3RlbS5fY29sb3JEZWFkQ3JlYXRpb24ucHJvY2VzcyA9IChwYXJ0aWNsZTogUGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFydGljbGVDb250ZXh0ID0gcGFydGljbGU7XHJcblxyXG4gICAgICAgICAgICBwYXJ0aWNsZS5jb2xvckRlYWQuY29weUZyb20odGhpcy5jb2xvckRlYWQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpKTtcclxuICAgICAgICAgICAgcGFydGljbGUuaW5pdGlhbENvbG9yLmNvcHlGcm9tKHBhcnRpY2xlLmNvbG9yKTtcclxuICAgICAgICAgICAgcGFydGljbGUuY29sb3JEZWFkLnN1YnRyYWN0VG9SZWYocGFydGljbGUuaW5pdGlhbENvbG9yLCBDb2xvckRpZmYpO1xyXG4gICAgICAgICAgICBDb2xvckRpZmYuc2NhbGVUb1JlZigxLjAgLyBwYXJ0aWNsZS5saWZlVGltZSwgcGFydGljbGUuY29sb3JTdGVwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzeXN0ZW0uX3NpemVDcmVhdGlvbi5wcm9jZXNzID0gKHBhcnRpY2xlOiBQYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wYXJ0aWNsZUNvbnRleHQgPSBwYXJ0aWNsZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemUuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNpemUgPSAxLjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsZS5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZS54ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxlLnggPSBzY2FsZS54O1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUuc2NhbGUueSA9IHNjYWxlLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zY2FsZS54ID0gc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zY2FsZS55ID0gc2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzeXN0ZW0uX2FuZ2xlQ3JlYXRpb24ucHJvY2VzcyA9IChwYXJ0aWNsZTogUGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFydGljbGVDb250ZXh0ID0gcGFydGljbGU7XHJcblxyXG4gICAgICAgICAgICBwYXJ0aWNsZS5hbmdsZSA9IHRoaXMuYW5nbGUuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucGFydGljbGUuX3N0b3JlZFZhbHVlID0gc3lzdGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5DcmVhdGVQYXJ0aWNsZUJsb2NrXCIsIENyZWF0ZVBhcnRpY2xlQmxvY2spO1xyXG4iLCJpbXBvcnQgdHlwZSB7IFBhcnRpY2xlIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3BhcnRpY2xlXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgbG9jYWwgcG9zaXRpb24gZGF0YSBmb3IgdGhlIHBhcnRpY2xlXHJcbiAqIEBwYXJhbSBwYXJ0aWNsZSBUaGUgcGFydGljbGUgdG8gdXBkYXRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX0NyZWF0ZUxvY2FsUG9zaXRpb25EYXRhKHBhcnRpY2xlOiBQYXJ0aWNsZSk6IHZvaWQge1xyXG4gICAgaWYgKCFwYXJ0aWNsZS5fbG9jYWxQb3NpdGlvbikge1xyXG4gICAgICAgIHBhcnRpY2xlLl9sb2NhbFBvc2l0aW9uID0gcGFydGljbGUucG9zaXRpb24uY2xvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFydGljbGUuX2xvY2FsUG9zaXRpb24uY29weUZyb20ocGFydGljbGUucG9zaXRpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFN5c3RlbUJsb2NrIH0gZnJvbSBcIi4uL3N5c3RlbUJsb2NrXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUgfSBmcm9tIFwiLi4vLi4vbm9kZVBhcnRpY2xlQnVpbGRTdGF0ZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIFRvb2xzIGZvciBtYW5hZ2luZyBwYXJ0aWNsZSB0cmlnZ2VycyBhbmQgc3ViLWVtaXR0ZXIgc3lzdGVtcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfVHJpZ2dlclN1YkVtaXR0ZXIodGVtcGxhdGU6IFN5c3RlbUJsb2NrLCBzY2VuZTogU2NlbmUsIGxvY2F0aW9uOiBWZWN0b3IzKTogUGFydGljbGVTeXN0ZW0ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBuZXcgTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSgpO1xyXG4gICAgbmV3U3RhdGUuc2NlbmUgPSBzY2VuZTtcclxuICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY3JlYXRlU3lzdGVtKG5ld1N0YXRlKTtcclxuICAgIGNsb25lLmNhblN0YXJ0ID0gKCkgPT4gdHJ1ZTsgLy8gQWxsb3cgdGhlIGNsb25lZCBzeXN0ZW0gdG8gc3RhcnRcclxuICAgIGNsb25lLmVtaXR0ZXIgPSBsb2NhdGlvbi5jbG9uZSgpOyAvLyBTZXQgdGhlIGVtaXR0ZXIgdG8gdGhlIHBhcnRpY2xlJ3MgcG9zaXRpb25cclxuICAgIGNsb25lLmRpc3Bvc2VPblN0b3AgPSB0cnVlOyAvLyBDbGVhbiB1cCB0aGUgc3lzdGVtIHdoZW4gaXQgc3RvcHNcclxuICAgIGNsb25lLnN0YXJ0KCk7XHJcblxyXG4gICAgcmV0dXJuIGNsb25lO1xyXG59XHJcbiIsImltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcyB9IGZyb20gXCIuLi8uLi9FbnVtcy9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJsb2NrIH0gZnJvbSBcIi4uLy4uL25vZGVQYXJ0aWNsZUJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IH0gZnJvbSBcIi4uLy4uL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50XCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSB9IGZyb20gXCIuLi8uLi9ub2RlUGFydGljbGVCdWlsZFN0YXRlXCI7XHJcbmltcG9ydCB0eXBlIHsgVGhpblBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3RoaW5QYXJ0aWNsZVN5c3RlbVwiO1xyXG5pbXBvcnQgdHlwZSB7IFBhcnRpY2xlIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3BhcnRpY2xlXCI7XHJcbmltcG9ydCB7IF9Db25uZWN0QXRUaGVFbmQgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvUXVldWUvZXhlY3V0aW9uUXVldWVcIjtcclxuaW1wb3J0IHR5cGUgeyBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBCbG9jayB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgYSBwYXJ0aWNsZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZVBvc2l0aW9uQmxvY2sgZXh0ZW5kcyBOb2RlUGFydGljbGVCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBVcGRhdGVEaXJlY3Rpb25CbG9ja1xyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgYmxvY2sgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnB1dChcInBhcnRpY2xlXCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuUGFydGljbGUpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnB1dChcInBvc2l0aW9uXCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuVmVjdG9yMyk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck91dHB1dChcIm91dHB1dFwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlBhcnRpY2xlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBhcnRpY2xlIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBhcnRpY2xlKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHBvc2l0aW9uIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1sxXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG91dHB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvdXRwdXQoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3V0cHV0c1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgY2xhc3MgbmFtZVxyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJVcGRhdGVQb3NpdGlvbkJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgZGVmaW5lcyB0aGUgY3VycmVudCBidWlsZCBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2J1aWxkKHN0YXRlOiBOb2RlUGFydGljbGVCdWlsZFN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5wYXJ0aWNsZS5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgVGhpblBhcnRpY2xlU3lzdGVtO1xyXG4gICAgICAgIHRoaXMub3V0cHV0Ll9zdG9yZWRWYWx1ZSA9IHN5c3RlbTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnBvc2l0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NQb3NpdGlvbiA9IChwYXJ0aWNsZTogUGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFydGljbGVDb250ZXh0ID0gcGFydGljbGU7XHJcbiAgICAgICAgICAgIHN0YXRlLnN5c3RlbUNvbnRleHQgPSBzeXN0ZW07XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uLmNvcHlGcm9tKHRoaXMucG9zaXRpb24uZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpIGFzIFZlY3RvcjMpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uUHJvY2Vzc2luZyA9IHtcclxuICAgICAgICAgICAgcHJvY2VzczogcHJvY2Vzc1Bvc2l0aW9uLFxyXG4gICAgICAgICAgICBwcmV2aW91c0l0ZW06IG51bGwsXHJcbiAgICAgICAgICAgIG5leHRJdGVtOiBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzeXN0ZW0uX3VwZGF0ZVF1ZXVlU3RhcnQpIHtcclxuICAgICAgICAgICAgX0Nvbm5lY3RBdFRoZUVuZChwb3NpdGlvblByb2Nlc3NpbmcsIHN5c3RlbS5fdXBkYXRlUXVldWVTdGFydCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3lzdGVtLl91cGRhdGVRdWV1ZVN0YXJ0ID0gcG9zaXRpb25Qcm9jZXNzaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhcIkJBQllMT04uVXBkYXRlUG9zaXRpb25CbG9ja1wiLCBVcGRhdGVQb3NpdGlvbkJsb2NrKTtcclxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR2V0Q2xhc3MsIFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vLi4vLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHsgTWF0cml4LCBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcIi4uLy4uLy4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJsb2NrIH0gZnJvbSBcIi4uL25vZGVQYXJ0aWNsZUJsb2NrXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMgfSBmcm9tIFwiLi4vRW51bXMvbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB9IGZyb20gXCIuLi9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUgfSBmcm9tIFwiLi4vbm9kZVBhcnRpY2xlQnVpbGRTdGF0ZVwiO1xyXG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzIH0gZnJvbSBcIi4uL0VudW1zL25vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMgfSBmcm9tIFwiLi4vRW51bXMvbm9kZVBhcnRpY2xlU3lzdGVtU291cmNlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEJsb2NrIHVzZWQgdG8gZXhwb3NlIGFuIGlucHV0IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFydGljbGVJbnB1dEJsb2NrIGV4dGVuZHMgTm9kZVBhcnRpY2xlQmxvY2sge1xyXG4gICAgcHJpdmF0ZSBfc3RvcmVkVmFsdWU6IGFueTtcclxuICAgIHByaXZhdGUgX3ZhbHVlQ2FsbGJhY2s6ICgpID0+IGFueTtcclxuICAgIHByaXZhdGUgX3R5cGU6IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMgPSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlVuZGVmaW5lZDtcclxuXHJcbiAgICAvKiogR2V0cyBvciBzZXQgYSB2YWx1ZSB1c2VkIHRvIGxpbWl0IHRoZSByYW5nZSBvZiBmbG9hdCB2YWx1ZXMgKi9cclxuICAgIHB1YmxpYyBtaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIEdldHMgb3Igc2V0IGEgdmFsdWUgdXNlZCB0byBsaW1pdCB0aGUgcmFuZ2Ugb2YgZmxvYXQgdmFsdWVzICovXHJcbiAgICBwdWJsaWMgbWF4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIGdyb3VwIHRvIHVzZSB0byBkaXNwbGF5IHRoaXMgYmxvY2sgaW4gdGhlIEluc3BlY3RvciAqL1xyXG4gICAgcHVibGljIGdyb3VwSW5JbnNwZWN0b3IgPSBcIlwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhpcyBpbnB1dCBpcyBkaXNwbGF5ZWQgaW4gdGhlIEluc3BlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcGxheUluSW5zcGVjdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkICovXHJcbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8UGFydGljbGVJbnB1dEJsb2NrPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBjb25uZWN0aW9uIHBvaW50IHR5cGUgKGRlZmF1bHQgaXMgZmxvYXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzIHtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5BdXRvRGV0ZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudmFsdWUuZ2V0Q2xhc3NOYW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVmVjdG9yMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVmVjdG9yM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ29sb3I0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3R5cGUgPSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkNvbG9yNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1hdHJpeFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5NYXRyaXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwcml2YXRlIF9zeXN0ZW1Tb3VyY2U6IE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMgPSBOb2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzLk5vbmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhlIGN1cnJlbnQgY29ubmVjdGlvbiBwb2ludCBpcyBhIHN5c3RlbSBzb3VyY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc1N5c3RlbVNvdXJjZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dHVhbFNvdXJjZSA9PT0gTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTm9uZSAmJiB0aGlzLl9zeXN0ZW1Tb3VyY2UgIT09IE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMuTm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3lzdGVtIHNvdXJjZSB1c2VkIGJ5IHRoaXMgaW5wdXQgYmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzeXN0ZW1Tb3VyY2UoKTogTm9kZVBhcnRpY2xlU3lzdGVtU291cmNlcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5c3RlbVNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHN5c3RlbVNvdXJjZSh2YWx1ZTogTm9kZVBhcnRpY2xlU3lzdGVtU291cmNlcykge1xyXG4gICAgICAgIHRoaXMuX3N5c3RlbVNvdXJjZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT09IE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMuTm9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250ZXh0dWFsU291cmNlID0gTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuRmxvYXQ7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMuVGltZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlU3lzdGVtU291cmNlcy5EZWx0YTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlU3lzdGVtU291cmNlcy5FbWl0dGVyOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzLkNhbWVyYVBvc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R5cGUgPSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQudHlwZSA9IHRoaXMuX3R5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGV4dHVhbFNvdXJjZSA9IE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLk5vbmU7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgdGhhdCB0aGUgY3VycmVudCBjb25uZWN0aW9uIHBvaW50IGlzIGEgY29udGV4dHVhbCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzQ29udGV4dHVhbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dHVhbFNvdXJjZSAhPT0gTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgY3VycmVudCBjb250ZXh0dWFsIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29udGV4dHVhbFZhbHVlKCk6IE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dHVhbFNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNvbnRleHR1YWxWYWx1ZSh2YWx1ZTogTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLl9jb250ZXh0dWFsU291cmNlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTm9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zeXN0ZW1Tb3VyY2UgPSBOb2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzLk5vbmU7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNjYWxlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R5cGUgPSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlBvc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5EaXJlY3Rpb246XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNjYWxlZERpcmVjdGlvbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuSW5pdGlhbERpcmVjdGlvbjpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTG9jYWxQb3NpdGlvblVwZGF0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHlwZSA9IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuVmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuQ29sb3I6XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkluaXRpYWxDb2xvcjpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuQ29sb3JEZWFkOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5Db2xvclN0ZXA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNjYWxlZENvbG9yU3RlcDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5Db2xvcjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkFnZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTGlmZXRpbWU6XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkFuZ2xlOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5BZ2VHcmFkaWVudDpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuU2l6ZTpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuRGlyZWN0aW9uU2NhbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHlwZSA9IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuRmxvYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNwcml0ZUNlbGxFbmQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNwcml0ZUNlbGxTdGFydDpcclxuICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuU3ByaXRlQ2VsbEluZGV4OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R5cGUgPSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkludDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC50eXBlID0gdGhpcy5fdHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgSW5wdXRCbG9ja1xyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgYmxvY2sgbmFtZVxyXG4gICAgICogQHBhcmFtIHR5cGUgZGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgaW5wdXQgKGNhbiBiZSBzZXQgdG8gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5BdXRvRGV0ZWN0KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzID0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5BdXRvRGV0ZWN0KSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2lzSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N0b3JlZFZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck91dHB1dChcIm91dHB1dFwiLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgdmFsdWUgb2YgdGhhdCBwb2ludC5cclxuICAgICAqIFBsZWFzZSBub3RlIHRoYXQgdGhpcyB2YWx1ZSB3aWxsIGJlIGlnbm9yZWQgaWYgdmFsdWVDYWxsYmFjayBpcyBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmVkVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5taW4gIT09IHRoaXMubWF4KSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHRoaXMubWluLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHRoaXMubWF4LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0b3JlZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGNhbGxiYWNrIHVzZWQgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGF0IHBvaW50LlxyXG4gICAgICogUGxlYXNlIG5vdGUgdGhhdCBzZXR0aW5nIHRoaXMgdmFsdWUgd2lsbCBmb3JjZSB0aGUgY29ubmVjdGlvbiBwb2ludCB0byBpZ25vcmUgdGhlIHZhbHVlIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdmFsdWVDYWxsYmFjaygpOiAoKSA9PiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZUNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdmFsdWVDYWxsYmFjayh2YWx1ZTogKCkgPT4gYW55KSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWVDYWxsYmFjayA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIlBhcnRpY2xlSW5wdXRCbG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgb3V0cHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG91dHB1dCgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBpbnB1dCBibG9jayB0byBpdHMgZGVmYXVsdCB2YWx1ZSAoYmFzZWQgb24gaXRzIHR5cGUpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREZWZhdWx0VmFsdWUoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkludDpcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkZsb2F0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gVmVjdG9yMi5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkNvbG9yNDpcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ29sb3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5NYXRyaXg6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0cml4LklkZW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIF9idWlsZChzdGF0ZTogTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSkge1xyXG4gICAgICAgIHN1cGVyLl9idWlsZChzdGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3lzdGVtU291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Ll9zdG9yZWRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Ll9zdG9yZWRGdW5jdGlvbiA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmdldFN5c3RlbVZhbHVlKHRoaXMuX3N5c3RlbVNvdXJjZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29udGV4dHVhbCkge1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dC5fc3RvcmVkVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dC5fc3RvcmVkRnVuY3Rpb24gPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5nZXRDb250ZXh0dWFsVmFsdWUodGhpcy5fY29udGV4dHVhbFNvdXJjZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQuX3N0b3JlZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgLy8gQXMgYSBmdW5jdGlvbiB0byBsZXQgdGhlIHVzZXIgZHluYW1pY2FsbHkgY2hhbmdlIHRoZSB2YWx1ZSBhdCBydW50aW1lXHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0Ll9zdG9yZWRGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBzdXBlci5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC50eXBlID0gdGhpcy50eXBlO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29udGV4dHVhbFZhbHVlID0gdGhpcy5jb250ZXh0dWFsVmFsdWU7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zeXN0ZW1Tb3VyY2UgPSB0aGlzLnN5c3RlbVNvdXJjZTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm1pbiA9IHRoaXMubWluO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubWF4ID0gdGhpcy5tYXg7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5ncm91cEluSW5zcGVjdG9yID0gdGhpcy5ncm91cEluSW5zcGVjdG9yO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZGlzcGxheUluSW5zcGVjdG9yID0gdGhpcy5kaXNwbGF5SW5JbnNwZWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdG9yZWRWYWx1ZSAhPT0gbnVsbCAmJiAhdGhpcy5pc0NvbnRleHR1YWwgJiYgIXRoaXMuaXNTeXN0ZW1Tb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0b3JlZFZhbHVlLmFzQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudmFsdWVUeXBlID0gXCJCQUJZTE9OLlwiICsgdGhpcy5fc3RvcmVkVmFsdWUuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnZhbHVlID0gdGhpcy5fc3RvcmVkVmFsdWUuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC52YWx1ZVR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC52YWx1ZSA9IHRoaXMuX3N0b3JlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2Rlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLl9kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHNlcmlhbGl6YXRpb25PYmplY3QudHlwZTtcclxuICAgICAgICB0aGlzLmNvbnRleHR1YWxWYWx1ZSA9IHNlcmlhbGl6YXRpb25PYmplY3QuY29udGV4dHVhbFZhbHVlO1xyXG4gICAgICAgIHRoaXMuc3lzdGVtU291cmNlID0gc2VyaWFsaXphdGlvbk9iamVjdC5zeXN0ZW1Tb3VyY2UgfHwgTm9kZVBhcnRpY2xlU3lzdGVtU291cmNlcy5Ob25lO1xyXG5cclxuICAgICAgICB0aGlzLm1pbiA9IHNlcmlhbGl6YXRpb25PYmplY3QubWluIHx8IDA7XHJcbiAgICAgICAgdGhpcy5tYXggPSBzZXJpYWxpemF0aW9uT2JqZWN0Lm1heCB8fCAwO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJbkluc3BlY3RvciA9IHNlcmlhbGl6YXRpb25PYmplY3QuZ3JvdXBJbkluc3BlY3RvciB8fCBcIlwiO1xyXG4gICAgICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LmRpc3BsYXlJbkluc3BlY3RvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUluSW5zcGVjdG9yID0gc2VyaWFsaXphdGlvbk9iamVjdC5kaXNwbGF5SW5JbnNwZWN0b3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNlcmlhbGl6YXRpb25PYmplY3QudmFsdWVUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LnZhbHVlVHlwZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yZWRWYWx1ZSA9IHNlcmlhbGl6YXRpb25PYmplY3QudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVUeXBlID0gR2V0Q2xhc3Moc2VyaWFsaXphdGlvbk9iamVjdC52YWx1ZVR5cGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcmVkVmFsdWUgPSB2YWx1ZVR5cGUuRnJvbUFycmF5KHNlcmlhbGl6YXRpb25PYmplY3QudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5QYXJ0aWNsZUlucHV0QmxvY2tcIiwgUGFydGljbGVJbnB1dEJsb2NrKTtcclxuIiwiaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlUeXBlRm9yRWRpdGlvbiwgZWRpdGFibGVJblByb3BlcnR5UGFnZSB9IGZyb20gXCIuLi8uLi8uLi9EZWNvcmF0b3JzL25vZGVEZWNvcmF0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBOb2RlUGFydGljbGVCbG9jayB9IGZyb20gXCIuLi9ub2RlUGFydGljbGVCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB9IGZyb20gXCIuLi9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFwiO1xyXG5pbXBvcnQgeyBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzIH0gZnJvbSBcIi4uL0VudW1zL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVCdWlsZFN0YXRlIH0gZnJvbSBcIi4uL25vZGVQYXJ0aWNsZUJ1aWxkU3RhdGVcIjtcclxuaW1wb3J0IHsgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5cclxuLyoqXHJcbiAqIE9wZXJhdGlvbnMgc3VwcG9ydGVkIGJ5IHRoZSBNYXRoIGJsb2NrXHJcbiAqL1xyXG5leHBvcnQgZW51bSBQYXJ0aWNsZU1hdGhCbG9ja09wZXJhdGlvbnMge1xyXG4gICAgLyoqIEFkZCAqL1xyXG4gICAgQWRkLFxyXG4gICAgLyoqIFN1YnRyYWN0ICovXHJcbiAgICBTdWJ0cmFjdCxcclxuICAgIC8qKiBNdWx0aXBseSAqL1xyXG4gICAgTXVsdGlwbHksXHJcbiAgICAvKiogRGl2aWRlICovXHJcbiAgICBEaXZpZGUsXHJcbiAgICAvKiogTWF4ICovXHJcbiAgICBNYXgsXHJcbiAgICAvKiogTWluICovXHJcbiAgICBNaW4sXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCbG9jayB1c2VkIHRvIGFwcGx5IG1hdGggZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFydGljbGVNYXRoQmxvY2sgZXh0ZW5kcyBOb2RlUGFydGljbGVCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgb3BlcmF0aW9uIGFwcGxpZWQgYnkgdGhlIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIEBlZGl0YWJsZUluUHJvcGVydHlQYWdlKFwiT3BlcmF0aW9uXCIsIFByb3BlcnR5VHlwZUZvckVkaXRpb24uTGlzdCwgXCJBRFZBTkNFRFwiLCB7XHJcbiAgICAgICAgbm90aWZpZXJzOiB7IHJlYnVpbGQ6IHRydWUgfSxcclxuICAgICAgICBlbWJlZGRlZDogdHJ1ZSxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiQWRkXCIsIHZhbHVlOiBQYXJ0aWNsZU1hdGhCbG9ja09wZXJhdGlvbnMuQWRkIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiU3VidHJhY3RcIiwgdmFsdWU6IFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5TdWJ0cmFjdCB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIk11bHRpcGx5XCIsIHZhbHVlOiBQYXJ0aWNsZU1hdGhCbG9ja09wZXJhdGlvbnMuTXVsdGlwbHkgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJEaXZpZGVcIiwgdmFsdWU6IFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5EaXZpZGUgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJNYXhcIiwgdmFsdWU6IFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5NYXggfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJNaW5cIiwgdmFsdWU6IFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5NaW4gfSxcclxuICAgICAgICBdLFxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBvcGVyYXRpb24gPSBQYXJ0aWNsZU1hdGhCbG9ja09wZXJhdGlvbnMuQWRkO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nvbm5lY3Rpb25PYnNlcnZlcnM6IE9ic2VydmVyPE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludD5bXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBQYXJ0aWNsZU1hdGhCbG9ja1xyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgYmxvY2sgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnB1dChcImxlZnRcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5BdXRvRGV0ZWN0KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoXCJyaWdodFwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkF1dG9EZXRlY3QpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyT3V0cHV0KFwib3V0cHV0XCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuQmFzZWRPbklucHV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5vdXRwdXQuX3R5cGVDb25uZWN0aW9uU291cmNlID0gdGhpcy5sZWZ0O1xyXG5cclxuICAgICAgICBjb25zdCBleGNsdWRlZENvbm5lY3Rpb25Qb2ludFR5cGVzID0gW1xyXG4gICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLk1hdHJpeCxcclxuICAgICAgICAgICAgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5QYXJ0aWNsZSxcclxuICAgICAgICAgICAgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5UZXh0dXJlLFxyXG4gICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlN5c3RlbSxcclxuICAgICAgICAgICAgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdEdyYWRpZW50LFxyXG4gICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkNvbG9yNEdyYWRpZW50LFxyXG4gICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjJHcmFkaWVudCxcclxuICAgICAgICAgICAgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IzR3JhZGllbnQsXHJcbiAgICAgICAgXSBhcyBjb25zdDtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0LmV4Y2x1ZGVkQ29ubmVjdGlvblBvaW50VHlwZXMucHVzaCguLi5leGNsdWRlZENvbm5lY3Rpb25Qb2ludFR5cGVzKTtcclxuICAgICAgICB0aGlzLnJpZ2h0LmV4Y2x1ZGVkQ29ubmVjdGlvblBvaW50VHlwZXMucHVzaCguLi5leGNsdWRlZENvbm5lY3Rpb25Qb2ludFR5cGVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGlua0Nvbm5lY3Rpb25UeXBlcygwLCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvbk9ic2VydmVycyA9IFtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0Lm9uQ29ubmVjdGlvbk9ic2VydmFibGUuYWRkKCgpID0+IHRoaXMuX3VwZGF0ZUlucHV0T3V0cHV0VHlwZXMoKSksXHJcbiAgICAgICAgICAgIHRoaXMubGVmdC5vbkRpc2Nvbm5lY3Rpb25PYnNlcnZhYmxlLmFkZCgoKSA9PiB0aGlzLl91cGRhdGVJbnB1dE91dHB1dFR5cGVzKCkpLFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Lm9uQ29ubmVjdGlvbk9ic2VydmFibGUuYWRkKCgpID0+IHRoaXMuX3VwZGF0ZUlucHV0T3V0cHV0VHlwZXMoKSksXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQub25EaXNjb25uZWN0aW9uT2JzZXJ2YWJsZS5hZGQoKCkgPT4gdGhpcy5fdXBkYXRlSW5wdXRPdXRwdXRUeXBlcygpKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIlBhcnRpY2xlTWF0aEJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsZWZ0IGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxlZnQoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgcmlnaHQgaW5wdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmlnaHQoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZ2VvbWV0cnkgb3V0cHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG91dHB1dCgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfYnVpbGQoc3RhdGU6IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUpIHtcclxuICAgICAgICBsZXQgZnVuYzogKHN0YXRlOiBOb2RlUGFydGljbGVCdWlsZFN0YXRlKSA9PiBhbnk7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMubGVmdDtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMucmlnaHQ7XHJcblxyXG4gICAgICAgIGlmICghbGVmdC5pc0Nvbm5lY3RlZCB8fCAhcmlnaHQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQuX3N0b3JlZEZ1bmN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5vdXRwdXQuX3N0b3JlZFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGVmdElzU2NhbGFyID0gbGVmdC50eXBlID09PSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkZsb2F0IHx8IGxlZnQudHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5JbnQ7XHJcbiAgICAgICAgY29uc3QgcmlnaHRJc1NjYWxhciA9IHJpZ2h0LnR5cGUgPT09IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuRmxvYXQgfHwgcmlnaHQudHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5JbnQ7XHJcblxyXG4gICAgICAgIC8vIElmIGJvdGggaW5wdXQgdHlwZXMgYXJlIHNjYWxhcnMsIHRoZW4gdGhpcyBpcyBhIHNjYWxhciBvcGVyYXRpb24uXHJcbiAgICAgICAgY29uc3QgaXNTY2FsYXIgPSBsZWZ0SXNTY2FsYXIgJiYgcmlnaHRJc1NjYWxhcjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5BZGQ6IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NjYWxhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpICsgcmlnaHQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxlZnRJc1NjYWxhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmFkYXB0KGxlZnQsIHJpZ2h0LnR5cGUpLmFkZChyaWdodC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpLmFkZChzdGF0ZS5hZGFwdChyaWdodCwgbGVmdC50eXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFydGljbGVNYXRoQmxvY2tPcGVyYXRpb25zLlN1YnRyYWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTY2FsYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0LmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSAtIHJpZ2h0LmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZWZ0SXNTY2FsYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5hZGFwdChsZWZ0LCByaWdodC50eXBlKS5zdWJ0cmFjdChyaWdodC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpLnN1YnRyYWN0KHN0YXRlLmFkYXB0KHJpZ2h0LCBsZWZ0LnR5cGUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYXJ0aWNsZU1hdGhCbG9ja09wZXJhdGlvbnMuTXVsdGlwbHk6IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NjYWxhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpICogcmlnaHQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxlZnRJc1NjYWxhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmFkYXB0KGxlZnQsIHJpZ2h0LnR5cGUpLm11bHRpcGx5KHJpZ2h0LmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkubXVsdGlwbHkoc3RhdGUuYWRhcHQocmlnaHQsIGxlZnQudHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5EaXZpZGU6IHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NjYWxhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpIC8gcmlnaHQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxlZnRJc1NjYWxhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmFkYXB0KGxlZnQsIHJpZ2h0LnR5cGUpLmRpdmlkZShyaWdodC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpLmRpdmlkZShzdGF0ZS5hZGFwdChyaWdodCwgbGVmdC50eXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFydGljbGVNYXRoQmxvY2tPcGVyYXRpb25zLk1pbjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2NhbGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5taW4obGVmdC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSksIHJpZ2h0LmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3ZlY3Rvciwgc2NhbGFyXSA9IGxlZnRJc1NjYWxhciA/IFtyaWdodCwgbGVmdF0gOiBbbGVmdCwgcmlnaHRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlY3Rvci50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjIuTWluaW1pemUodmVjdG9yLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSwgc3RhdGUuYWRhcHQoc2NhbGFyLCB2ZWN0b3IudHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5WZWN0b3IzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjMuTWluaW1pemUodmVjdG9yLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSwgc3RhdGUuYWRhcHQoc2NhbGFyLCB2ZWN0b3IudHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5Db2xvcjQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdGhlciA9IHZlY3Rvci5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByLCBnLCBiLCBhIH0gPSBzdGF0ZS5hZGFwdChzY2FsYXIsIHZlY3Rvci50eXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcjQoTWF0aC5taW4ob3RoZXIuciwgciksIE1hdGgubWluKG90aGVyLmcsIGcpLCBNYXRoLm1pbihvdGhlci5iLCBiKSwgTWF0aC5taW4ob3RoZXIuYSwgYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYXJ0aWNsZU1hdGhCbG9ja09wZXJhdGlvbnMuTWF4OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTY2FsYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jID0gKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0LmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSwgcmlnaHQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbdmVjdG9yLCBzY2FsYXJdID0gbGVmdElzU2NhbGFyID8gW3JpZ2h0LCBsZWZ0XSA6IFtsZWZ0LCByaWdodF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmVjdG9yLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMi5NYXhpbWl6ZSh2ZWN0b3IuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpLCBzdGF0ZS5hZGFwdChzY2FsYXIsIHZlY3Rvci50eXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMgPSAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMy5NYXhpbWl6ZSh2ZWN0b3IuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpLCBzdGF0ZS5hZGFwdChzY2FsYXIsIHZlY3Rvci50eXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkNvbG9yNDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuYyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyID0gdmVjdG9yLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHIsIGcsIGIsIGEgfSA9IHN0YXRlLmFkYXB0KHNjYWxhciwgdmVjdG9yLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yNChNYXRoLm1heChvdGhlci5yLCByKSwgTWF0aC5taW4ob3RoZXIuZywgZyksIE1hdGgubWluKG90aGVyLmIsIGIpLCBNYXRoLm1pbihvdGhlci5hLCBhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3V0cHV0Ll9zdG9yZWRGdW5jdGlvbiA9IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGVmdC50eXBlID09PSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkludCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMoc3RhdGUpIHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZnVuYyhzdGF0ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVJbnB1dE91dHB1dFR5cGVzKCkge1xyXG4gICAgICAgIC8vIEZpcnN0IHVwZGF0ZSB0aGUgb3V0cHV0IHR5cGUgd2l0aCB0aGUgaW5pdGlhbCBhc3N1bXB0aW9uIHRoYXQgd2UnbGwgYmFzZSBpdCBvbiB0aGUgbGVmdCBpbnB1dC5cclxuICAgICAgICB0aGlzLm91dHB1dC5fdHlwZUNvbm5lY3Rpb25Tb3VyY2UgPSB0aGlzLmxlZnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxlZnQuaXNDb25uZWN0ZWQgJiYgdGhpcy5yaWdodC5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAvLyBCb3RoIGlucHV0cyBhcmUgY29ubmVjdGVkLCBzbyB3ZSBuZWVkIHRvIGRldGVybWluZSB0aGUgb3V0cHV0IHR5cGUgYmFzZWQgb24gdGhlIGlucHV0IHR5cGVzLlxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQudHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5JbnQgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLmxlZnQudHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCAmJiB0aGlzLnJpZ2h0LnR5cGUgIT09IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuSW50KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0Ll90eXBlQ29ubmVjdGlvblNvdXJjZSA9IHRoaXMucmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVmdC5pc0Nvbm5lY3RlZCAhPT0gdGhpcy5yaWdodC5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IG9uZSBpbnB1dCBpcyBjb25uZWN0ZWQsIHNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdXRwdXQgdHlwZSBiYXNlZCBvbiB0aGUgY29ubmVjdGVkIGlucHV0LlxyXG4gICAgICAgICAgICB0aGlzLm91dHB1dC5fdHlwZUNvbm5lY3Rpb25Tb3VyY2UgPSB0aGlzLmxlZnQuaXNDb25uZWN0ZWQgPyB0aGlzLmxlZnQgOiB0aGlzLnJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTmV4dCB1cGRhdGUgdGhlIGFjY2VwdGVkIGNvbm5lY3Rpb24gcG9pbnQgdHlwZXMgZm9yIHRoZSBpbnB1dHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5wdXQgY29ubmVjdGlvbiBzdGF0ZS5cclxuICAgICAgICBpZiAodGhpcy5sZWZ0LmlzQ29ubmVjdGVkIHx8IHRoaXMucmlnaHQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbZmlyc3QsIHNlY29uZF0gb2YgW1xyXG4gICAgICAgICAgICAgICAgW3RoaXMubGVmdCwgdGhpcy5yaWdodF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5yaWdodCwgdGhpcy5sZWZ0XSxcclxuICAgICAgICAgICAgXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIGFsbG93IEludHMgYW5kIEZsb2F0cy5cclxuICAgICAgICAgICAgICAgIGZpcnN0LmFjY2VwdGVkQ29ubmVjdGlvblBvaW50VHlwZXMgPSBbTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5JbnQsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuRmxvYXRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWNvbmQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc2FtZSB0eXBlcyBhcyB0aGUgY29ubmVjdGVkIGlucHV0IGFyZSBhbHdheXMgYWxsb3dlZC5cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdC5hY2NlcHRlZENvbm5lY3Rpb25Qb2ludFR5cGVzLnB1c2goc2Vjb25kLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3RoZXIgaW5wdXQgaXMgYSBzY2FsYXIsIHRoZW4gd2UgYWxzbyBhbGxvdyBWZWN0b3IgdHlwZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlY29uZC50eXBlID09PSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkludCB8fCBzZWNvbmQudHlwZSA9PT0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdC5hY2NlcHRlZENvbm5lY3Rpb25Qb2ludFR5cGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkNvbG9yNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbGVhc2UgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMuX2Nvbm5lY3Rpb25PYnNlcnZlcnMpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25PYnNlcnZlcnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBibG9jayBpbiBhIEpTT04gcmVwcmVzZW50YXRpb25cclxuICAgICAqIEByZXR1cm5zIHRoZSBzZXJpYWxpemVkIGJsb2NrIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IHN1cGVyLnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm9wZXJhdGlvbiA9IHRoaXMub3BlcmF0aW9uO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2Rlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLl9kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBzZXJpYWxpemF0aW9uT2JqZWN0Lm9wZXJhdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhcIkJBQllMT04uUGFydGljbGVNYXRoQmxvY2tcIiwgUGFydGljbGVNYXRoQmxvY2spO1xyXG4iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi8uLi8uLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzIH0gZnJvbSBcIi4uL0VudW1zL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXNcIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQmxvY2sgfSBmcm9tIFwiLi4vbm9kZVBhcnRpY2xlQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQgfSBmcm9tIFwiLi4vbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVCdWlsZFN0YXRlIH0gZnJvbSBcIi4uL25vZGVQYXJ0aWNsZUJ1aWxkU3RhdGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFRleHR1cmVUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdGV4dHVyZVRvb2xzXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiLi4vLi4vLi4vTWF0ZXJpYWxzL1RleHR1cmVzL2Jhc2VUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgUHJvY2VkdXJhbFRleHR1cmUgfSBmcm9tIFwiLi4vLi4vLi4vTWF0ZXJpYWxzXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHVzZWQgdG8gZGVmaW5lIHRleHR1cmUgZGF0YVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVBhcnRpY2xlVGV4dHVyZURhdGEge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgZGF0YTogVWludDhDbGFtcGVkQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCbG9jayB1c2VkIHRvIHByb3ZpZGUgYSB0ZXh0dXJlIGZvciBwYXJ0aWNsZXMgaW4gYSBwYXJ0aWNsZSBzeXN0ZW1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZVRleHR1cmVTb3VyY2VCbG9jayBleHRlbmRzIE5vZGVQYXJ0aWNsZUJsb2NrIHtcclxuICAgIHByaXZhdGUgX3VybDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX3RleHR1cmVEYXRhVXJsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBfc291cmNlVGV4dHVyZTogTnVsbGFibGU8QmFzZVRleHR1cmU+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2NhY2hlZERhdGE6IE51bGxhYmxlPElOb2RlUGFydGljbGVUZXh0dXJlRGF0YT4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB0ZXh0dXJlIGRhdGEgc2hvdWxkIGJlIHNlcmlhbGl6ZWQgYXMgYSBiYXNlNjQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplZENhY2hlZERhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgVVJMIG9mIHRoZSB0ZXh0dXJlIHRvIGJlIHVzZWQgYnkgdGhpcyBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1cmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdXJsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXJsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhY2hlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVEYXRhVXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zb3VyY2VUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgZGF0YSBVUkwgb2YgdGhlIHRleHR1cmUgdG8gYmUgdXNlZCBieSB0aGlzIGJsb2NrLlxyXG4gICAgICogVGhpcyBpcyBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRleHR1cmUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0ZXh0dXJlRGF0YVVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlRGF0YVVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRleHR1cmVEYXRhVXJsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZURhdGFVcmwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhY2hlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVEYXRhVXJsID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9zb3VyY2VUZXh0dXJlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpcmVjdGx5IHNldHMgdGhlIHRleHR1cmUgdG8gYmUgdXNlZCBieSB0aGlzIGJsb2NrLlxyXG4gICAgICogVGhpcyB2YWx1ZSB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHNvdXJjZVRleHR1cmUodmFsdWU6IE51bGxhYmxlPEJhc2VUZXh0dXJlPikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VyY2VUZXh0dXJlID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhY2hlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3NvdXJjZVRleHR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl91cmwgPSAodmFsdWUgYXMgVGV4dHVyZSkudXJsIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZURhdGFVcmwgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IFBhcnRpY2xlVGV4dHVyZVNvdXJjZUJsb2NrXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBibG9jayBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck91dHB1dChcInRleHR1cmVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5UZXh0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgY2xhc3MgbmFtZVxyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJQYXJ0aWNsZVRleHR1cmVTb3VyY2VCbG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdGV4dHVyZSBvdXRwdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdGV4dHVyZSgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdGV4dHVyZSBjb250ZW50IGFzIGEgcHJvbWlzZVxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHRleHR1cmUgY29udGVudCwgaW5jbHVkaW5nIHdpZHRoLCBoZWlnaHQsIGFuZCBwaXhlbCBkYXRhXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGV4dHJhY3RUZXh0dXJlQ29udGVudEFzeW5jKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50ZXh0dXJlLl9zdG9yZWRWYWx1ZSAmJiAhdGhpcy5fc291cmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jYWNoZWREYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZWREYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMudGV4dHVyZS5fc3RvcmVkVmFsdWUgfHwgdGhpcy5fc291cmNlVGV4dHVyZTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8XHJcbiAgICAgICAgICAgIE51bGxhYmxlPHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFVpbnQ4Q2xhbXBlZEFycmF5O1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgID4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXNcclxuICAgICAgICAgICAgICAgIHRleHR1cmUub25Mb2FkT2JzZXJ2YWJsZS5hZGRPbmNlKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWREYXRhID0gYXdhaXQgdGhpcy5leHRyYWN0VGV4dHVyZUNvbnRlbnRBc3luYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX2NhY2hlZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gdGV4dHVyZS5nZXRTaXplKCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlLmdldENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2NlZHVyYWxUZXh0dXJlID0gdGV4dHVyZSBhcyBQcm9jZWR1cmFsVGV4dHVyZTtcclxuICAgICAgICAgICAgICAgIHByb2NlZHVyYWxUZXh0dXJlXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldENvbnRlbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgID8udGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZWREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNpemUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSBhcyBVaW50OENsYW1wZWRBcnJheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9jYWNoZWREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnaXRodWIvbm8tdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVGV4dHVyZVRvb2xzLkdldFRleHR1cmVEYXRhQXN5bmModGV4dHVyZSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdpdGh1Yi9uby10aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVkRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ldyBVaW50OENsYW1wZWRBcnJheShkYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fY2FjaGVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2l0aHViL25vLXRoZW5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBibG9ja1xyXG4gICAgICogQHBhcmFtIHN0YXRlIGRlZmluZXMgdGhlIGN1cnJlbnQgYnVpbGQgc3RhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9idWlsZChzdGF0ZTogTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VyY2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5fc3RvcmVkVmFsdWUgPSB0aGlzLl9zb3VyY2VUZXh0dXJlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3RleHR1cmVEYXRhVXJsICYmICF0aGlzLl91cmwpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlLl9zdG9yZWRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlRGF0YVVybCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUuX3N0b3JlZFZhbHVlID0gbmV3IFRleHR1cmUodGhpcy5fdGV4dHVyZURhdGFVcmwsIHN0YXRlLnNjZW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZXh0dXJlLl9zdG9yZWRWYWx1ZSA9IG5ldyBUZXh0dXJlKHRoaXMuX3VybCwgc3RhdGUuc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gc3VwZXIuc2VyaWFsaXplKCk7XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudXJsID0gdGhpcy51cmw7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zZXJpYWxpemVkQ2FjaGVkRGF0YSA9IHRoaXMuc2VyaWFsaXplZENhY2hlZERhdGE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlcmlhbGl6ZWRDYWNoZWREYXRhKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudGV4dHVyZURhdGFVcmwgPSB0aGlzLnRleHR1cmVEYXRhVXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIF9kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICBzdXBlci5fZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMudXJsID0gc2VyaWFsaXphdGlvbk9iamVjdC51cmw7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxpemVkQ2FjaGVkRGF0YSA9ICEhc2VyaWFsaXphdGlvbk9iamVjdC5zZXJpYWxpemVkQ2FjaGVkRGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3QudGV4dHVyZURhdGFVcmwpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlRGF0YVVybCA9IHNlcmlhbGl6YXRpb25PYmplY3QudGV4dHVyZURhdGFVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc291cmNlVGV4dHVyZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlLl9zdG9yZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlLl9zdG9yZWRWYWx1ZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmUuX3N0b3JlZFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLlBhcnRpY2xlVGV4dHVyZVNvdXJjZUJsb2NrXCIsIFBhcnRpY2xlVGV4dHVyZVNvdXJjZUJsb2NrKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBQYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9wYXJ0aWNsZVN5c3RlbVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9Ob2RlL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50XCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9Ob2RlL25vZGVQYXJ0aWNsZUJ1aWxkU3RhdGVcIjtcclxuXHJcbmltcG9ydCB7IGVkaXRhYmxlSW5Qcm9wZXJ0eVBhZ2UsIFByb3BlcnR5VHlwZUZvckVkaXRpb24gfSBmcm9tIFwiY29yZS9EZWNvcmF0b3JzL25vZGVEZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IEJhc2VQYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9iYXNlUGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQmxvY2sgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvTm9kZS9ub2RlUGFydGljbGVCbG9ja1wiO1xyXG5pbXBvcnQgeyBfVHJpZ2dlclN1YkVtaXR0ZXIgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvTm9kZS9CbG9ja3MvVHJpZ2dlcnMvdHJpZ2dlclRvb2xzXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvTm9kZS9FbnVtcy9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzXCI7XHJcblxyXG4vKipcclxuICogQmxvY2sgdXNlZCB0byBnZXQgYSBzeXN0ZW0gb2YgcGFydGljbGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3lzdGVtQmxvY2sgZXh0ZW5kcyBOb2RlUGFydGljbGVCbG9jayB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfSWRDb3VudGVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgYmxlbmQgbW9kZSBmb3IgdGhlIHBhcnRpY2xlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBAZWRpdGFibGVJblByb3BlcnR5UGFnZShcIkJsZW5kIG1vZGVcIiwgUHJvcGVydHlUeXBlRm9yRWRpdGlvbi5MaXN0LCBcIkFEVkFOQ0VEXCIsIHtcclxuICAgICAgICBub3RpZmllcnM6IHsgcmVidWlsZDogdHJ1ZSB9LFxyXG4gICAgICAgIGVtYmVkZGVkOiB0cnVlLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJPbmVPbmVcIiwgdmFsdWU6IEJhc2VQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiU3RhbmRhcmRcIiwgdmFsdWU6IEJhc2VQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfU1RBTkRBUkQgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJBZGRcIiwgdmFsdWU6IEJhc2VQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfQUREIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiTXVsdGlwbHlcIiwgdmFsdWU6IEJhc2VQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfTVVMVElQTFkgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJNdWx0aXBseUFkZFwiLCB2YWx1ZTogQmFzZVBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9NVUxUSVBMWUFERCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9KVxyXG4gICAgcHVibGljIGJsZW5kTW9kZSA9IEJhc2VQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBlcHNpbG9uIHZhbHVlIHVzZWQgZm9yIGNvbXBhcmlzb25cclxuICAgICAqL1xyXG4gICAgQGVkaXRhYmxlSW5Qcm9wZXJ0eVBhZ2UoXCJDYXBhY2l0eVwiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkludCwgXCJBRFZBTkNFRFwiLCB7IGVtYmVkZGVkOiB0cnVlLCBub3RpZmllcnM6IHsgcmVidWlsZDogdHJ1ZSB9LCBtaW46IDAsIG1heDogMTAwMDAgfSlcclxuICAgIHB1YmxpYyBjYXBhY2l0eSA9IDEwMDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIG1hbnVhbCBlbWl0IGNvdW50XHJcbiAgICAgKi9cclxuICAgIEBlZGl0YWJsZUluUHJvcGVydHlQYWdlKFwiTWFudWFsIGVtaXQgY291bnRcIiwgUHJvcGVydHlUeXBlRm9yRWRpdGlvbi5JbnQsIFwiQURWQU5DRURcIiwgeyBlbWJlZGRlZDogdHJ1ZSwgbm90aWZpZXJzOiB7IHJlYnVpbGQ6IHRydWUgfSwgbWluOiAtMSB9KVxyXG4gICAgcHVibGljIG1hbnVhbEVtaXRDb3VudCA9IC0xO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB0YXJnZXQgc3RvcCBkdXJhdGlvbiBmb3IgdGhlIHBhcnRpY2xlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBAZWRpdGFibGVJblByb3BlcnR5UGFnZShcIkRlbGF5IHN0YXJ0KG1zKVwiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkZsb2F0LCBcIkFEVkFOQ0VEXCIsIHsgZW1iZWRkZWQ6IHRydWUsIG5vdGlmaWVyczogeyByZWJ1aWxkOiB0cnVlIH0sIG1pbjogMCB9KVxyXG4gICAgcHVibGljIHN0YXJ0RGVsYXkgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB0YXJnZXQgc3RvcCBkdXJhdGlvbiBmb3IgdGhlIHBhcnRpY2xlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBAZWRpdGFibGVJblByb3BlcnR5UGFnZShcInVwZGF0ZVNwZWVkXCIsIFByb3BlcnR5VHlwZUZvckVkaXRpb24uRmxvYXQsIFwiQURWQU5DRURcIiwgeyBlbWJlZGRlZDogdHJ1ZSwgbm90aWZpZXJzOiB7IHJlYnVpbGQ6IHRydWUgfSwgbWluOiAwLCBtYXg6IDAuMSB9KVxyXG4gICAgcHVibGljIHVwZGF0ZVNwZWVkID0gMC4wMTY3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBudW1iZXIgb2YgcHJlLXdhcm0gY3ljbGVzIGJlZm9yZSByZW5kZXJpbmcgdGhlIHBhcnRpY2xlIHN5c3RlbVxyXG4gICAgICovXHJcbiAgICBAZWRpdGFibGVJblByb3BlcnR5UGFnZShcIlByZS13YXJtIGN5Y2xlc1wiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkZsb2F0LCBcIkFEVkFOQ0VEXCIsIHsgZW1iZWRkZWQ6IHRydWUsIG5vdGlmaWVyczogeyByZWJ1aWxkOiB0cnVlIH0sIG1pbjogMCB9KVxyXG4gICAgcHVibGljIHByZVdhcm1DeWNsZXMgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB0aW1lIHN0ZXAgbXVsdGlwbGllciB1c2VkIGZvciBwcmUtd2FybVxyXG4gICAgICovXHJcbiAgICBAZWRpdGFibGVJblByb3BlcnR5UGFnZShcIlByZS13YXJtIHN0ZXAgbXVsdGlwbGllclwiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkZsb2F0LCBcIkFEVkFOQ0VEXCIsIHsgZW1iZWRkZWQ6IHRydWUsIG5vdGlmaWVyczogeyByZWJ1aWxkOiB0cnVlIH0sIG1pbjogMCB9KVxyXG4gICAgcHVibGljIHByZVdhcm1TdGVwT2Zmc2V0ID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgc3lzdGVtIGlzIGJpbGxib2FyZCBiYXNlZFxyXG4gICAgICovXHJcbiAgICBAZWRpdGFibGVJblByb3BlcnR5UGFnZShcIklzIGJpbGxib2FyZCBiYXNlZFwiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkJvb2xlYW4sIFwiQURWQU5DRURcIiwgeyBlbWJlZGRlZDogdHJ1ZSwgbm90aWZpZXJzOiB7IHJlYnVpbGQ6IHRydWUgfSB9KVxyXG4gICAgcHVibGljIGlzQmlsbGJvYXJkQmFzZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBzeXN0ZW0gY29vcmRpbmF0ZSBzcGFjZSBpcyBsb2NhbCBvciBnbG9iYWxcclxuICAgICAqL1xyXG4gICAgQGVkaXRhYmxlSW5Qcm9wZXJ0eVBhZ2UoXCJJcyBsb2NhbFwiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkJvb2xlYW4sIFwiQURWQU5DRURcIiwgeyBlbWJlZGRlZDogdHJ1ZSwgbm90aWZpZXJzOiB7IHJlYnVpbGQ6IHRydWUgfSB9KVxyXG4gICAgcHVibGljIGlzTG9jYWwgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgc3lzdGVtIHNob3VsZCBiZSBkaXNwb3NlZCB3aGVuIHN0b3BwZWRcclxuICAgICAqL1xyXG4gICAgQGVkaXRhYmxlSW5Qcm9wZXJ0eVBhZ2UoXCJEaXNwb3NlIG9uIHN0b3BcIiwgUHJvcGVydHlUeXBlRm9yRWRpdGlvbi5Cb29sZWFuLCBcIkFEVkFOQ0VEXCIsIHsgZW1iZWRkZWQ6IHRydWUsIG5vdGlmaWVyczogeyByZWJ1aWxkOiB0cnVlIH0gfSlcclxuICAgIHB1YmxpYyBkaXNwb3NlT25TdG9wID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIHN5c3RlbSBzaG91bGQgbm90IHN0YXJ0IGF1dG9tYXRpY2FsbHlcclxuICAgICAqL1xyXG4gICAgQGVkaXRhYmxlSW5Qcm9wZXJ0eVBhZ2UoXCJEbyBubyBzdGFydFwiLCBQcm9wZXJ0eVR5cGVGb3JFZGl0aW9uLkJvb2xlYW4sIFwiQURWQU5DRURcIiwgeyBlbWJlZGRlZDogdHJ1ZSwgbm90aWZpZXJzOiB7IHJlYnVpbGQ6IHRydWUgfSB9KVxyXG4gICAgcHVibGljIGRvTm9TdGFydCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfaW50ZXJuYWxJZCA9IFN5c3RlbUJsb2NrLl9JZENvdW50ZXIrKztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBTeXN0ZW1CbG9ja1xyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgYmxvY2sgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzU3lzdGVtID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwicGFydGljbGVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5QYXJ0aWNsZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwiZW1pdFJhdGVcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5JbnQsIHRydWUsIDEwLCAwKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoXCJ0ZXh0dXJlXCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuVGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwidHJhbnNsYXRpb25QaXZvdFwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnB1dChcInRleHR1cmVNYXNrXCIsIE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuQ29sb3I0LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5wdXQoXCJ0YXJnZXRTdG9wRHVyYXRpb25cIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5GbG9hdCwgdHJ1ZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwib25TdGFydFwiLCBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlN5c3RlbSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcklucHV0KFwib25FbmRcIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5TeXN0ZW0sIHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJPdXRwdXQoXCJzeXN0ZW1cIiwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5TeXN0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIlN5c3RlbUJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBwYXJ0aWNsZSBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwYXJ0aWNsZSgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBlbWl0UmF0ZSBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBlbWl0UmF0ZSgpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dHNbMV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB0ZXh0dXJlIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRleHR1cmUoKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdHJhbnNsYXRpb25QaXZvdCBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0cmFuc2xhdGlvblBpdm90KCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1szXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHRleHR1cmVNYXNrIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRleHR1cmVNYXNrKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1s0XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHRhcmdldFN0b3BEdXJhdGlvbiBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0YXJnZXRTdG9wRHVyYXRpb24oKTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzWzVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgb25TdGFydCBpbnB1dCBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvblN0YXJ0KCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1s2XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG9uRW5kIGlucHV0IGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9uRW5kKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0c1s3XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHN5c3RlbSBvdXRwdXQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3lzdGVtKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGJsb2NrIGFuZCByZXR1cm4gYSBmdW5jdGlvbmFsIHBhcnRpY2xlIHN5c3RlbVxyXG4gICAgICogQHBhcmFtIHN0YXRlIGRlZmluZXMgdGhlIGJ1aWxkaW5nIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgYnVpbHQgcGFydGljbGUgc3lzdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVTeXN0ZW0oc3RhdGU6IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUpOiBQYXJ0aWNsZVN5c3RlbSB7XHJcbiAgICAgICAgc3RhdGUuY2FwYWNpdHkgPSB0aGlzLmNhcGFjaXR5O1xyXG4gICAgICAgIHN0YXRlLmJ1aWxkSWQgPSB0aGlzLl9idWlsZElkKys7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGQoc3RhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJ0aWNsZVN5c3RlbSA9IHRoaXMucGFydGljbGUuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpIGFzIFBhcnRpY2xlU3lzdGVtO1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IHRoaXMudGV4dHVyZS5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSk7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uZW1pdFJhdGUgPSB0aGlzLmVtaXRSYXRlLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSBhcyBudW1iZXI7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ubWFudWFsRW1pdENvdW50ID0gdGhpcy5tYW51YWxFbWl0Q291bnQ7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0udXBkYXRlU3BlZWQgPSB0aGlzLnVwZGF0ZVNwZWVkO1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnByZVdhcm1DeWNsZXMgPSB0aGlzLnByZVdhcm1DeWNsZXM7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0ucHJlV2FybVN0ZXBPZmZzZXQgPSB0aGlzLnByZVdhcm1TdGVwT2Zmc2V0O1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmJsZW5kTW9kZSA9IHRoaXMuYmxlbmRNb2RlO1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uX3RhcmdldFN0b3BEdXJhdGlvbiA9ICh0aGlzLnRhcmdldFN0b3BEdXJhdGlvbi5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgbnVtYmVyKSA/PyAwO1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnN0YXJ0RGVsYXkgPSB0aGlzLnN0YXJ0RGVsYXk7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uaXNCaWxsYm9hcmRCYXNlZCA9IHRoaXMuaXNCaWxsYm9hcmRCYXNlZDtcclxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS50cmFuc2xhdGlvblBpdm90ID0gKHRoaXMudHJhbnNsYXRpb25QaXZvdC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSkgYXMgVmVjdG9yMikgfHwgVmVjdG9yMi5aZXJvKCk7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0udGV4dHVyZU1hc2sgPSB0aGlzLnRleHR1cmVNYXNrLmdldENvbm5lY3RlZFZhbHVlKHN0YXRlKSA/PyBuZXcgQ29sb3I0KDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLmlzTG9jYWwgPSB0aGlzLmlzTG9jYWw7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0uZGlzcG9zZU9uU3RvcCA9IHRoaXMuZGlzcG9zZU9uU3RvcDtcclxuXHJcbiAgICAgICAgLy8gVGhlIGVtaXQgcmF0ZSBjYW4gdmFyeSBpZiBpdCBpcyBjb25uZWN0ZWQgdG8gYW5vdGhlciBibG9jayBsaWtlIGEgZ3JhZGllbnRcclxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5fY2FsY3VsYXRlRW1pdFJhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN5c3RlbUNvbnRleHQgPSBwYXJ0aWNsZVN5c3RlbTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdFJhdGUuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpIGFzIG51bWJlcjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnN5c3RlbS5fc3RvcmVkVmFsdWUgPSB0aGlzO1xyXG5cclxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5jYW5TdGFydCA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmRvTm9TdGFydDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwYXJ0aWNsZVN5c3RlbS5vblN0YXJ0ZWRPYnNlcnZhYmxlLmFkZCgoc3lzdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXJzXHJcbiAgICAgICAgICAgIGNvbnN0IG9uU3RhcnRTeXN0ZW0gPSB0aGlzLm9uU3RhcnQuZ2V0Q29ubmVjdGVkVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAob25TdGFydFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLm9uU3RhcnRlZE9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzdGVtQ29udGV4dCA9IHBhcnRpY2xlU3lzdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0gX1RyaWdnZXJTdWJFbWl0dGVyKG9uU3RhcnRTeXN0ZW0sIHN0YXRlLnNjZW5lLCBzdGF0ZS5lbWl0dGVyUG9zaXRpb24hKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZE9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgY2xvbmVkIHN5c3RlbSB3aGVuIHRoZSBvcmlnaW5hbCBzeXN0ZW0gaXMgZGlzcG9zZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uRW5kU3lzdGVtID0gdGhpcy5vbkVuZC5nZXRDb25uZWN0ZWRWYWx1ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChvbkVuZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLm9uU3RvcHBlZE9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc3lzdGVtQ29udGV4dCA9IHBhcnRpY2xlU3lzdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0gX1RyaWdnZXJTdWJFbWl0dGVyKG9uRW5kU3lzdGVtLCBzdGF0ZS5zY2VuZSwgc3RhdGUuZW1pdHRlclBvc2l0aW9uISk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGNsb25lZCBzeXN0ZW0gd2hlbiB0aGUgb3JpZ2luYWwgc3lzdGVtIGlzIGRpc3Bvc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGRPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZGlzcG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZXR1cm5cclxuICAgICAgICByZXR1cm4gcGFydGljbGVTeXN0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoZSBzeXN0ZW0gYmxvY2tcclxuICAgICAqIEByZXR1cm5zIFRoZSBzZXJpYWxpemVkIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IHN1cGVyLnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNhcGFjaXR5ID0gdGhpcy5jYXBhY2l0eTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm1hbnVhbEVtaXRDb3VudCA9IHRoaXMubWFudWFsRW1pdENvdW50O1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuYmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGU7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC51cGRhdGVTcGVlZCA9IHRoaXMudXBkYXRlU3BlZWQ7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5wcmVXYXJtQ3ljbGVzID0gdGhpcy5wcmVXYXJtQ3ljbGVzO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucHJlV2FybVN0ZXBPZmZzZXQgPSB0aGlzLnByZVdhcm1TdGVwT2Zmc2V0O1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuaXNCaWxsYm9hcmRCYXNlZCA9IHRoaXMuaXNCaWxsYm9hcmRCYXNlZDtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlzTG9jYWwgPSB0aGlzLmlzTG9jYWw7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kaXNwb3NlT25TdG9wID0gdGhpcy5kaXNwb3NlT25TdG9wO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZG9Ob1N0YXJ0ID0gdGhpcy5kb05vU3RhcnQ7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zdGFydERlbGF5ID0gdGhpcy5zdGFydERlbGF5O1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VyaWFsaXplcyB0aGUgc3lzdGVtIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCBUaGUgc2VyaWFsaXplZCBzeXN0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICBzdXBlci5fZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSBzZXJpYWxpemF0aW9uT2JqZWN0LmNhcGFjaXR5O1xyXG4gICAgICAgIHRoaXMubWFudWFsRW1pdENvdW50ID0gc2VyaWFsaXphdGlvbk9iamVjdC5tYW51YWxFbWl0Q291bnQgPz8gLTE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTcGVlZCA9IHNlcmlhbGl6YXRpb25PYmplY3QudXBkYXRlU3BlZWQgPz8gMC4wMTY3O1xyXG4gICAgICAgIHRoaXMucHJlV2FybUN5Y2xlcyA9IHNlcmlhbGl6YXRpb25PYmplY3QucHJlV2FybUN5Y2xlcyA/PyAwO1xyXG4gICAgICAgIHRoaXMucHJlV2FybVN0ZXBPZmZzZXQgPSBzZXJpYWxpemF0aW9uT2JqZWN0LnByZVdhcm1TdGVwT2Zmc2V0ID8/IDA7XHJcbiAgICAgICAgdGhpcy5pc0JpbGxib2FyZEJhc2VkID0gc2VyaWFsaXphdGlvbk9iamVjdC5pc0JpbGxib2FyZEJhc2VkID8/IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0xvY2FsID0gc2VyaWFsaXphdGlvbk9iamVjdC5pc0xvY2FsID8/IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZU9uU3RvcCA9IHNlcmlhbGl6YXRpb25PYmplY3QuZGlzcG9zZU9uU3RvcCA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvTm9TdGFydCA9ICEhc2VyaWFsaXphdGlvbk9iamVjdC5kb05vU3RhcnQ7XHJcblxyXG4gICAgICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LmVtaXRSYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0UmF0ZS52YWx1ZSA9IHNlcmlhbGl6YXRpb25PYmplY3QuZW1pdFJhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC5ibGVuZE1vZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJsZW5kTW9kZSA9IHNlcmlhbGl6YXRpb25PYmplY3QuYmxlbmRNb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3Quc3RhcnREZWxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREZWxheSA9IHNlcmlhbGl6YXRpb25PYmplY3Quc3RhcnREZWxheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLlN5c3RlbUJsb2NrXCIsIFN5c3RlbUJsb2NrKTtcclxuIiwiLyoqXHJcbiAqIERlZmluZXMgdGhlIGtpbmQgb2YgY29ubmVjdGlvbiBwb2ludCBmb3Igbm9kZSBnZW9tZXRyeVxyXG4gKi9cclxuZXhwb3J0IGVudW0gTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcyB7XHJcbiAgICAvKiogSW50ICovXHJcbiAgICBJbnQgPSAweDAwMDEsXHJcbiAgICAvKiogRmxvYXQgKi9cclxuICAgIEZsb2F0ID0gMHgwMDAyLFxyXG4gICAgLyoqIFZlY3RvcjIgKi9cclxuICAgIFZlY3RvcjIgPSAweDAwMDQsXHJcbiAgICAvKiogVmVjdG9yMyAqL1xyXG4gICAgVmVjdG9yMyA9IDB4MDAwOCxcclxuICAgIC8qKiBNYXRyaXggKi9cclxuICAgIE1hdHJpeCA9IDB4MDAxMCxcclxuICAgIC8qKiBQYXJ0aWNsZSAqL1xyXG4gICAgUGFydGljbGUgPSAweDAwMjAsXHJcbiAgICAvKiogVGV4dHVyZSAqL1xyXG4gICAgVGV4dHVyZSA9IDB4MDA0MCxcclxuICAgIC8qKiBDb2xvcjQgKi9cclxuICAgIENvbG9yNCA9IDB4MDA4MCxcclxuICAgIC8qKiBGbG9hdEdyYWRpZW50ICovXHJcbiAgICBGbG9hdEdyYWRpZW50ID0gMHgwMTAwLFxyXG4gICAgLyoqIFZlY3RvcjJHcmFkaWVudCAqL1xyXG4gICAgVmVjdG9yMkdyYWRpZW50ID0gMHgwMjAwLFxyXG4gICAgLyoqIFZlY3RvcjNHcmFkaWVudCAqL1xyXG4gICAgVmVjdG9yM0dyYWRpZW50ID0gMHgwNDAwLFxyXG4gICAgLyoqIENvbG9yNEdyYWRpZW50ICovXHJcbiAgICBDb2xvcjRHcmFkaWVudCA9IDB4MDgwMCxcclxuICAgIC8qKiBTeXN0ZW0gKi9cclxuICAgIFN5c3RlbSA9IDB4MTAwMCxcclxuICAgIC8qKiBEZXRlY3QgdHlwZSBiYXNlZCBvbiBjb25uZWN0aW9uICovXHJcbiAgICBBdXRvRGV0ZWN0ID0gMHgyMDAwLFxyXG4gICAgLyoqIE91dHB1dCB0eXBlIHRoYXQgd2lsbCBiZSBkZWZpbmVkIGJ5IGlucHV0IHR5cGUgKi9cclxuICAgIEJhc2VkT25JbnB1dCA9IDB4NDAwMCxcclxuICAgIC8qKiBVbmRlZmluZWQgKi9cclxuICAgIFVuZGVmaW5lZCA9IDB4ODAwMCxcclxuICAgIC8qKiBCaXRtYXNrIG9mIGFsbCB0eXBlcyAqL1xyXG4gICAgQWxsID0gMHhmZmZmLFxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG4vKipcclxuICogRGVmaW5lcyB0aGUga2luZCBvZiBjb250ZXh0dWFsIHNvdXJjZXMgZm9yIG5vZGUgcGFydGljbGVzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcyB7XHJcbiAgICAvKiogTm9uZSAqL1xyXG4gICAgTm9uZSA9IDB4MDAwMCxcclxuICAgIC8qKiBQb3NpdGlvbiAqL1xyXG4gICAgUG9zaXRpb24gPSAweDAwMDEsXHJcbiAgICAvKiogRGlyZWN0aW9uICovXHJcbiAgICBEaXJlY3Rpb24gPSAweDAwMDIsXHJcbiAgICAvKiogQWdlICovXHJcbiAgICBBZ2UgPSAweDAwMDMsXHJcbiAgICAvKiogTGlmZXRpbWUgKi9cclxuICAgIExpZmV0aW1lID0gMHgwMDA0LFxyXG4gICAgLyoqIENvbG9yICovXHJcbiAgICBDb2xvciA9IDB4MDAwNSxcclxuICAgIC8qKiBTY2FsZWREaXJlY3Rpb24gKi9cclxuICAgIFNjYWxlZERpcmVjdGlvbiA9IDB4MDAwNixcclxuICAgIC8qKiBTY2FsZSAqL1xyXG4gICAgU2NhbGUgPSAweDAwMDcsXHJcbiAgICAvKiogQWdlR3JhZGllbnQgKi9cclxuICAgIEFnZUdyYWRpZW50ID0gMHgwMDA4LFxyXG4gICAgLyoqIEFuZ2xlICovXHJcbiAgICBBbmdsZSA9IDB4MDAwOSxcclxuICAgIC8qKiBTcHJpdGVDZWxsSW5kZXggKi9cclxuICAgIFNwcml0ZUNlbGxJbmRleCA9IDB4MDAxMCxcclxuICAgIC8qKiBTcHJpdGVDZWxsU3RhcnQgKi9cclxuICAgIFNwcml0ZUNlbGxTdGFydCA9IDB4MDAxMSxcclxuICAgIC8qKiBTcHJpdGVDZWxsRW5kICovXHJcbiAgICBTcHJpdGVDZWxsRW5kID0gMHgwMDEyLFxyXG4gICAgLyoqIEluaXRpYWwgQ29sb3IgKi9cclxuICAgIEluaXRpYWxDb2xvciA9IDB4MDAxMyxcclxuICAgIC8qKiBDb2xvciBEZWFkKi9cclxuICAgIENvbG9yRGVhZCA9IDB4MDAxNCxcclxuICAgIC8qKiBJbml0aWFsIERpcmVjdGlvbiAqL1xyXG4gICAgSW5pdGlhbERpcmVjdGlvbiA9IDB4MDAxNSxcclxuICAgIC8qKiBDb2xvciBTdGVwICovXHJcbiAgICBDb2xvclN0ZXAgPSAweDAwMTYsXHJcbiAgICAvKiogU2NhbGVkIENvbG9yIFN0ZXAgKi9cclxuICAgIFNjYWxlZENvbG9yU3RlcCA9IDB4MDAxNyxcclxuICAgIC8qKiBMb2NhbCBQb3NpdGlvbiBVcGRhdGVkICovXHJcbiAgICBMb2NhbFBvc2l0aW9uVXBkYXRlZCA9IDB4MDAxOCxcclxuICAgIC8qKiBTaXplICovXHJcbiAgICBTaXplID0gMHgwMDE5LFxyXG4gICAgLyoqIERpcmVjdGlvbiBTY2FsZSAqL1xyXG4gICAgRGlyZWN0aW9uU2NhbGUgPSAweDAwMjAsXHJcbn1cclxuIiwiLyoqXHJcbiAqIEVudW0gdXNlZCB0byBkZWZpbmUgc3lzdGVtIHZhbHVlcyBlLmcuIHZhbHVlcyBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW1cclxuICovXHJcbmV4cG9ydCBlbnVtIE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMge1xyXG4gICAgLyoqIE5vbmUgKi9cclxuICAgIE5vbmUgPSAwLFxyXG4gICAgLyoqIFRpbWUgKi9cclxuICAgIFRpbWUgPSAxLFxyXG4gICAgLyoqIERlbHRhIHRpbWUgKi9cclxuICAgIERlbHRhID0gMixcclxuICAgIC8qKiBFbWl0dGVyICovXHJcbiAgICBFbWl0dGVyID0gMyxcclxuICAgIC8qKiBDYW1lcmEgcG9zaXRpb24gKi9cclxuICAgIENhbWVyYVBvc2l0aW9uID0gNCxcclxufVxyXG4iLCJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgVW5pcXVlSWRHZW5lcmF0b3IgfSBmcm9tIFwiY29yZS9NaXNjL3VuaXF1ZUlkR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCwgTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50RGlyZWN0aW9uIH0gZnJvbSBcIi4vbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzIH0gZnJvbSBcIi4vRW51bXMvbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUgfSBmcm9tIFwiLi9ub2RlUGFydGljbGVCdWlsZFN0YXRlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR2V0Q2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBibG9jayB0aGF0IGNhbiBiZSB1c2VkIGluc2lkZSBhIG5vZGUgYmFzZWQgcGFydGljbGUgc3lzdGVtXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTm9kZVBhcnRpY2xlQmxvY2sge1xyXG4gICAgcHJpdmF0ZSBfbmFtZSA9IFwiXCI7XHJcbiAgICBwcm90ZWN0ZWQgX2J1aWxkSWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfaXNJbnB1dCA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pc1N5c3RlbSA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pc0RlYnVnID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgX2lzVGVsZXBvcnRPdXQgPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBfaXNUZWxlcG9ydEluID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHVuaXF1ZSBpZCBvZiB0aGUgbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdW5pcXVlSWQ6IG51bWJlcjtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2lucHV0cyA9IG5ldyBBcnJheTxOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQ+KCk7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX291dHB1dHMgPSBuZXcgQXJyYXk8Tm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50PigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbiBvYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBibG9jayBpcyBidWlsdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25CdWlsZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxOb2RlUGFydGljbGVCbG9jaz4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gb2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgYmxvY2sgaXMgZGlzcG9zZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRGlzcG9zZU9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxOb2RlUGFydGljbGVCbG9jaz4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYW4gb2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgaW5wdXRzIG9mIHRoZSBibG9jayBjaGFuZ2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uSW5wdXRDaGFuZ2VkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhpcyBibG9jayBpcyBhIHRlbGVwb3J0IG91dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzVGVsZXBvcnRPdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVGVsZXBvcnRPdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgYmxvY2sgaXMgYSB0ZWxlcG9ydCBpblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzVGVsZXBvcnRJbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNUZWxlcG9ydEluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHRoaXMgYmxvY2sgaXMgYSBzeXN0ZW0gYmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc1N5c3RlbSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTeXN0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhpcyBibG9jayBpcyBhbiBpbnB1dCBibG9ja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzSW5wdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgYmxvY2sgaXMgYSBkZWJ1ZyBibG9ja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzRGVidWcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZyZWUgY29tbWVudCBhYm91dCB0aGUgYmxvY2tcclxuICAgICAqL1xyXG4gICAgQHNlcmlhbGl6ZShcImNvbW1lbnRcIilcclxuICAgIHB1YmxpYyBjb21tZW50czogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgdGhhdCB0aGlzIGlucHV0IGNhbiBiZSBlZGl0ZWQgZnJvbSBhIGNvbGxhcHNlZCBmcmFtZSAqL1xyXG4gICAgcHVibGljIHZpc2libGVPbkZyYW1lID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldCB0aGUgbmFtZSBvZiB0aGUgYmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IGNsYXNzIG5hbWUgZS5nLiBcIk5vZGVQYXJ0aWNsZUJsb2NrXCJcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTm9kZVBhcnRpY2xlQmxvY2tcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2YgaW5wdXQgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaW5wdXRzKCk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXRzIHRoZSBsaXN0IG9mIG91dHB1dCBwb2ludHMgKi9cclxuICAgIHB1YmxpYyBnZXQgb3V0cHV0cygpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX291dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IE5vZGVQYXJ0aWNsZUJsb2NrXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBibG9jayBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gVW5pcXVlSWRHZW5lcmF0b3IuVW5pcXVlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9pbnB1dFJlbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX291dHB1dFJlbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBibG9jayBpcyBhbiBhbmNlc3RvciBvZiBhIGdpdmVuIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gYmxvY2sgZGVmaW5lcyB0aGUgcG90ZW50aWFsIGRlc2NlbmRhbnQgYmxvY2sgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgYmxvY2sgaXMgYSBkZXNjZW5kYW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0FuQW5jZXN0b3JPZihibG9jazogTm9kZVBhcnRpY2xlQmxvY2spOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiB0aGlzLl9vdXRwdXRzKSB7XHJcbiAgICAgICAgICAgIGlmICghb3V0cHV0Lmhhc0VuZHBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW5kcG9pbnQgb2Ygb3V0cHV0LmVuZHBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50Lm93bmVyQmxvY2sgPT09IGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kcG9pbnQub3duZXJCbG9jay5pc0FuQW5jZXN0b3JPZihibG9jaykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IGJsb2NrIGlzIGFuIGFuY2VzdG9yIG9mIGEgZ2l2ZW4gdHlwZVxyXG4gICAgICogQHBhcmFtIHR5cGUgZGVmaW5lcyB0aGUgcG90ZW50aWFsIHR5cGUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgYmxvY2sgaXMgYSBkZXNjZW5kYW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0FuQW5jZXN0b3JPZlR5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2xhc3NOYW1lKCkgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiB0aGlzLl9vdXRwdXRzKSB7XHJcbiAgICAgICAgICAgIGlmICghb3V0cHV0Lmhhc0VuZHBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW5kcG9pbnQgb2Ygb3V0cHV0LmVuZHBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50Lm93bmVyQmxvY2suaXNBbkFuY2VzdG9yT2ZUeXBlKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgYW4gaW5wdXQgYnkgaXRzIG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIGlucHV0IHRvIGxvb2sgZm9yXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgaW5wdXQgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElucHV0QnlOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2lucHV0cy5maWx0ZXIoKGUpID0+IGUubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2xpbmtDb25uZWN0aW9uVHlwZXMoaW5wdXRJbmRleDA6IG51bWJlciwgaW5wdXRJbmRleDE6IG51bWJlciwgbG9vc2VDb3VwbGluZyA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGxvb3NlQ291cGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRzW2lucHV0SW5kZXgxXS5fYWNjZXB0ZWRDb25uZWN0aW9uUG9pbnRUeXBlID0gdGhpcy5faW5wdXRzW2lucHV0SW5kZXgwXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dHNbaW5wdXRJbmRleDBdLl9saW5rZWRDb25uZWN0aW9uU291cmNlID0gdGhpcy5faW5wdXRzW2lucHV0SW5kZXgxXTtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXRzW2lucHV0SW5kZXgwXS5faXNNYWluTGlua1NvdXJjZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lucHV0c1tpbnB1dEluZGV4MV0uX2xpbmtlZENvbm5lY3Rpb25Tb3VyY2UgPSB0aGlzLl9pbnB1dHNbaW5wdXRJbmRleDBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgaW5wdXQuIE11c3QgYmUgY2FsbGVkIGluc2lkZSBhIGJsb2NrIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBjb25uZWN0aW9uIHBvaW50IG5hbWVcclxuICAgICAqIEBwYXJhbSB0eXBlIGRlZmluZXMgdGhlIGNvbm5lY3Rpb24gcG9pbnQgdHlwZVxyXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWwgZGVmaW5lcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHRoaXMgaW5wdXQgY2FuIGJlIG9taXR0ZWRcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSB0byByZXR1cm4gaWYgdGhlcmUgaXMgbm8gY29ubmVjdGlvblxyXG4gICAgICogQHBhcmFtIHZhbHVlTWluIG1pbiB2YWx1ZSBhY2NlcHRlZCBmb3IgdmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZU1heCBtYXggdmFsdWUgYWNjZXB0ZWQgZm9yIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBibG9ja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJJbnB1dChuYW1lOiBzdHJpbmcsIHR5cGU6IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMsIGlzT3B0aW9uYWw6IGJvb2xlYW4gPSBmYWxzZSwgdmFsdWU/OiBhbnksIHZhbHVlTWluPzogYW55LCB2YWx1ZU1heD86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludChuYW1lLCB0aGlzLCBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnREaXJlY3Rpb24uSW5wdXQpO1xyXG4gICAgICAgIHBvaW50LnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHBvaW50LmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsO1xyXG4gICAgICAgIHBvaW50LmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHBvaW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgcG9pbnQudmFsdWVNaW4gPSB2YWx1ZU1pbjtcclxuICAgICAgICBwb2ludC52YWx1ZU1heCA9IHZhbHVlTWF4O1xyXG5cclxuICAgICAgICB0aGlzLl9pbnB1dHMucHVzaChwb2ludCk7XHJcblxyXG4gICAgICAgIHRoaXMub25JbnB1dENoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhwb2ludCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgb3V0cHV0LiBNdXN0IGJlIGNhbGxlZCBpbnNpZGUgYSBibG9jayBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgY29ubmVjdGlvbiBwb2ludCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBkZWZpbmVzIHRoZSBjb25uZWN0aW9uIHBvaW50IHR5cGVcclxuICAgICAqIEBwYXJhbSBwb2ludCBhbiBhbHJlYWR5IGNyZWF0ZWQgY29ubmVjdGlvbiBwb2ludC4gSWYgbm90IHByb3ZpZGVkLCBjcmVhdGUgYSBuZXcgb25lXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBibG9ja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPdXRwdXQobmFtZTogc3RyaW5nLCB0eXBlOiBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLCBwb2ludD86IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCkge1xyXG4gICAgICAgIHBvaW50ID0gcG9pbnQgPz8gbmV3IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludChuYW1lLCB0aGlzLCBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnREaXJlY3Rpb24uT3V0cHV0KTtcclxuICAgICAgICBwb2ludC50eXBlID0gdHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3V0cHV0cy5wdXNoKHBvaW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGJsb2NrLiBNdXN0IGJlIGltcGxlbWVudGVkIGJ5IGRlcml2ZWQgY2xhc3Nlcy5cclxuICAgICAqIEBwYXJhbSBfc3RhdGUgZGVmaW5lcyB0aGUgY3VycmVudCBidWlsZCBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2J1aWxkKF9zdGF0ZTogTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSkge31cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2N1c3RvbUJ1aWxkU3RlcChfc3RhdGU6IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICAvLyBNdXN0IGJlIGltcGxlbWVudGVkIGJ5IGNoaWxkcmVuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgdGhlIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgZGVmaW5lcyB0aGUgY3VycmVudCBidWlsZCBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgdGhlIGJ1aWx0IGJsb2NrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBidWlsZChzdGF0ZTogTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9idWlsZElkID09PSBzdGF0ZS5idWlsZElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX291dHB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX291dHB1dHMuc29tZSgobykgPT4gby5oYXNFbmRwb2ludHMpICYmICF0aGlzLmlzRGVidWcgJiYgIXRoaXMuaXNTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYnVpbGRJZCA9IHN0YXRlLmJ1aWxkSWQ7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIFwicGFyZW50XCIgYmxvY2tzIGFyZSBjb21waWxlZFxyXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdGhpcy5faW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXQuY29ubmVjdGVkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaXNPcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVtaXQgYSB3YXJuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubm90Q29ubmVjdGVkTm9uT3B0aW9uYWxJbnB1dHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBpbnB1dC5jb25uZWN0ZWRQb2ludC5vd25lckJsb2NrO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2sgJiYgYmxvY2sgIT09IHRoaXMgJiYgIWJsb2NrLmlzU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBibG9jay5idWlsZChzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2N1c3RvbUJ1aWxkU3RlcChzdGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIExvZ3NcclxuICAgICAgICBpZiAoc3RhdGUudmVyYm9zZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuTG9nKGBCdWlsZGluZyAke3RoaXMubmFtZX0gWyR7dGhpcy5nZXRDbGFzc05hbWUoKX1dYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9idWlsZChzdGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMub25CdWlsZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgYmxvY2sgaW4gYSBKU09OIHJlcHJlc2VudGF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgc2VyaWFsaXplZCBibG9jayBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY3VzdG9tVHlwZSA9IFwiQkFCWUxPTi5cIiArIHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5pZCA9IHRoaXMudW5pcXVlSWQ7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudmlzaWJsZU9uRnJhbWUgPSB0aGlzLnZpc2libGVPbkZyYW1lO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29tbWVudHMgPSB0aGlzLmNvbW1lbnRzO1xyXG5cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlucHV0cyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Qub3V0cHV0cyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMuaW5wdXRzKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuaW5wdXRzLnB1c2goaW5wdXQuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2YgdGhpcy5vdXRwdXRzKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Qub3V0cHV0cy5wdXNoKG91dHB1dC5zZXJpYWxpemUoZmFsc2UpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHNlcmlhbGl6YXRpb25PYmplY3QubmFtZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gc2VyaWFsaXphdGlvbk9iamVjdC5jb21tZW50cztcclxuICAgICAgICB0aGlzLnZpc2libGVPbkZyYW1lID0gISFzZXJpYWxpemF0aW9uT2JqZWN0LnZpc2libGVPbkZyYW1lO1xyXG4gICAgICAgIHRoaXMuX2Rlc2VyaWFsaXplUG9ydERpc3BsYXlOYW1lc0FuZEV4cG9zZWRPbkZyYW1lKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2Rlc2VyaWFsaXplUG9ydERpc3BsYXlOYW1lc0FuZEV4cG9zZWRPbkZyYW1lKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRJbnB1dHMgPSBzZXJpYWxpemF0aW9uT2JqZWN0LmlucHV0cztcclxuICAgICAgICBjb25zdCBzZXJpYWxpemVkT3V0cHV0cyA9IHNlcmlhbGl6YXRpb25PYmplY3Qub3V0cHV0cztcclxuICAgICAgICBpZiAoc2VyaWFsaXplZElucHV0cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvcnQgb2Ygc2VyaWFsaXplZElucHV0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0cy5maW5kKChpKSA9PiBpLm5hbWUgPT09IHBvcnQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocG9ydC5kaXNwbGF5TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmRpc3BsYXlOYW1lID0gcG9ydC5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3J0LmlzRXhwb3NlZE9uRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5pc0V4cG9zZWRPbkZyYW1lID0gcG9ydC5pc0V4cG9zZWRPbkZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmV4cG9zZWRQb3J0UG9zaXRpb24gPSBwb3J0LmV4cG9zZWRQb3J0UG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9ydC52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHBvcnQudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9ydC52YWx1ZVR5cGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBwb3J0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IEdldENsYXNzKHBvcnQudmFsdWVUeXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWVUeXBlLkZyb21BcnJheShwb3J0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsaXplZE91dHB1dHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpYWxpemVkT3V0cHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9ydCA9IHNlcmlhbGl6ZWRPdXRwdXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvcnQuZGlzcGxheU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbaV0uZGlzcGxheU5hbWUgPSBwb3J0LmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvcnQuaXNFeHBvc2VkT25GcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1tpXS5pc0V4cG9zZWRPbkZyYW1lID0gcG9ydC5pc0V4cG9zZWRPbkZyYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1tpXS5leHBvc2VkUG9ydFBvc2l0aW9uID0gcG9ydC5leHBvc2VkUG9ydFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvbmUgdGhlIGN1cnJlbnQgYmxvY2sgdG8gYSBuZXcgaWRlbnRpY2FsIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgYmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb25lKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSB0aGlzLnNlcmlhbGl6ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBibG9ja1R5cGUgPSBHZXRDbGFzcyhzZXJpYWxpemF0aW9uT2JqZWN0LmN1c3RvbVR5cGUpO1xyXG4gICAgICAgIGlmIChibG9ja1R5cGUpIHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2s6IE5vZGVQYXJ0aWNsZUJsb2NrID0gbmV3IGJsb2NrVHlwZSgpO1xyXG4gICAgICAgICAgICBibG9jay5fZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbGVhc2UgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdGhpcy5pbnB1dHMpIHtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2YgdGhpcy5vdXRwdXRzKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uQnVpbGRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQmxvY2sgfSBmcm9tIFwiLi9ub2RlUGFydGljbGVCbG9ja1wiO1xyXG5pbXBvcnQgeyBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzIH0gZnJvbSBcIi4vRW51bXMvbm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUgfSBmcm9tIFwiLi9ub2RlUGFydGljbGVCdWlsZFN0YXRlXCI7XHJcbmltcG9ydCB0eXBlIHsgUGFydGljbGVJbnB1dEJsb2NrIH0gZnJvbSBcIi4vQmxvY2tzL3BhcnRpY2xlSW5wdXRCbG9ja1wiO1xyXG5cclxuLyoqXHJcbiAqIEVudW0gdXNlZCB0byBkZWZpbmUgdGhlIGNvbXBhdGliaWxpdHkgc3RhdGUgYmV0d2VlbiB0d28gY29ubmVjdGlvbiBwb2ludHNcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludENvbXBhdGliaWxpdHlTdGF0ZXMge1xyXG4gICAgLyoqIFBvaW50cyBhcmUgY29tcGF0aWJsZXMgKi9cclxuICAgIENvbXBhdGlibGUsXHJcbiAgICAvKiogUG9pbnRzIGFyZSBpbmNvbXBhdGlibGUgYmVjYXVzZSBvZiB0aGVpciB0eXBlcyAqL1xyXG4gICAgVHlwZUluY29tcGF0aWJsZSxcclxuICAgIC8qKiBQb2ludHMgYXJlIGluY29tcGF0aWJsZSBiZWNhdXNlIHRoZXkgYXJlIGluIHRoZSBzYW1lIGhpZXJhcmNoeSAqKi9cclxuICAgIEhpZXJhcmNoeUlzc3VlLFxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgZGlyZWN0aW9uIG9mIGEgY29ubmVjdGlvbiBwb2ludFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50RGlyZWN0aW9uIHtcclxuICAgIC8qKiBJbnB1dCAqL1xyXG4gICAgSW5wdXQsXHJcbiAgICAvKiogT3V0cHV0ICovXHJcbiAgICBPdXRwdXQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgY29ubmVjdGlvbiBwb2ludCBmb3IgYSBibG9ja1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX293bmVyQmxvY2s6IE5vZGVQYXJ0aWNsZUJsb2NrO1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9jb25uZWN0ZWRQb2ludDogTnVsbGFibGU8Tm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9zdG9yZWRWYWx1ZTogYW55ID0gbnVsbDtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfc3RvcmVkRnVuY3Rpb246IE51bGxhYmxlPChzdGF0ZTogTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSkgPT4gYW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9hY2NlcHRlZENvbm5lY3Rpb25Qb2ludFR5cGU6IE51bGxhYmxlPE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludD4gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2VuZHBvaW50cyA9IG5ldyBBcnJheTxOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQ+KCk7XHJcbiAgICBwcml2YXRlIF9kaXJlY3Rpb246IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludERpcmVjdGlvbjtcclxuICAgIHByaXZhdGUgX3R5cGUgPSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlBhcnRpY2xlO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfbGlua2VkQ29ubmVjdGlvblNvdXJjZTogTnVsbGFibGU8Tm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF90eXBlQ29ubmVjdGlvblNvdXJjZTogTnVsbGFibGU8Tm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50PiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF90eXBlQ29ubmVjdGlvblNvdXJjZVRyYW5zbGF0aW9uOiBOdWxsYWJsZTwoc291cmNlOiBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzKSA9PiBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzPiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9kZWZhdWx0Q29ubmVjdGlvblBvaW50VHlwZTogTnVsbGFibGU8Tm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcz4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfaXNNYWluTGlua1NvdXJjZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBHZXRzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHBvaW50ICovXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBhZGRpdGlvbmFsIHR5cGVzIHN1cHBvcnRlZCBieSB0aGlzIGNvbm5lY3Rpb24gcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjY2VwdGVkQ29ubmVjdGlvblBvaW50VHlwZXM6IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXNbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBhZGRpdGlvbmFsIHR5cGVzIGV4Y2x1ZGVkIGJ5IHRoaXMgY29ubmVjdGlvbiBwb2ludFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhjbHVkZWRDb25uZWN0aW9uUG9pbnRUeXBlczogTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlc1tdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHRyaWdnZXJlZCB3aGVuIHRoaXMgcG9pbnQgaXMgY29ubmVjdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNvbm5lY3Rpb25PYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8Tm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50PigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSB0cmlnZ2VyZWQgd2hlbiB0aGlzIHBvaW50IGlzIGRpc2Nvbm5lY3RlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25EaXNjb25uZWN0aW9uT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHRoaXMgY29ubmVjdGlvbiBwb2ludCBpcyBleHBvc2VkIG9uIGEgZnJhbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRXhwb3NlZE9uRnJhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBudW1iZXIgaW5kaWNhdGluZyB0aGUgcG9zaXRpb24gdGhhdCB0aGUgcG9ydCBpcyBleHBvc2VkIHRvIG9uIGEgZnJhbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4cG9zZWRQb3J0UG9zaXRpb246IG51bWJlciA9IC0xO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCB2YWx1ZSB1c2VkIGZvciB0aGlzIHBvaW50IGF0IGNyZWF0aW9uIHRpbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlZmF1bHRWYWx1ZTogTnVsbGFibGU8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGRlZmF1bHQgdmFsdWUgdXNlZCBmb3IgdGhpcyBwb2ludCBpZiBub3RoaW5nIGlzIGNvbm5lY3RlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWU6IE51bGxhYmxlPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBtaW4gdmFsdWUgYWNjZXB0ZWQgZm9yIHRoaXMgcG9pbnQgaWYgbm90aGluZyBpcyBjb25uZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlTWluOiBOdWxsYWJsZTxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgbWF4IHZhbHVlIGFjY2VwdGVkIGZvciB0aGlzIHBvaW50IGlmIG5vdGhpbmcgaXMgY29ubmVjdGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZU1heDogTnVsbGFibGU8YW55PiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGNvbm5lY3Rpb24gcG9pbnQgdHlwZSAoZGVmYXVsdCBpcyBmbG9hdClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkF1dG9EZXRlY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX293bmVyQmxvY2suaXNJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9vd25lckJsb2NrIGFzIFBhcnRpY2xlSW5wdXRCbG9jaykudHlwZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkUG9pbnQudHlwZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xpbmtlZENvbm5lY3Rpb25Tb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9saW5rZWRDb25uZWN0aW9uU291cmNlLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmtlZENvbm5lY3Rpb25Tb3VyY2UudHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9saW5rZWRDb25uZWN0aW9uU291cmNlLl9kZWZhdWx0Q29ubmVjdGlvblBvaW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9saW5rZWRDb25uZWN0aW9uU291cmNlLl9kZWZhdWx0Q29ubmVjdGlvblBvaW50VHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRDb25uZWN0aW9uUG9pbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENvbm5lY3Rpb25Qb2ludFR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl90eXBlID09PSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLkJhc2VkT25JbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdHlwZUNvbm5lY3Rpb25Tb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdHlwZUNvbm5lY3Rpb25Tb3VyY2UuaXNDb25uZWN0ZWQgJiYgdGhpcy5fZGVmYXVsdENvbm5lY3Rpb25Qb2ludFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENvbm5lY3Rpb25Qb2ludFR5cGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdHlwZUNvbm5lY3Rpb25Tb3VyY2VUcmFuc2xhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90eXBlQ29ubmVjdGlvblNvdXJjZVRyYW5zbGF0aW9uKHRoaXMuX3R5cGVDb25uZWN0aW9uU291cmNlLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGVDb25uZWN0aW9uU291cmNlLnR5cGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZGVmYXVsdENvbm5lY3Rpb25Qb2ludFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29ubmVjdGlvblBvaW50VHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBjb25uZWN0aW9uIHBvaW50IG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgY29ubmVjdGlvbiBwb2ludCBkaXNwbGF5IG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBib29sZWFuIGluZGljYXRpbmcgdGhhdCB0aGlzIGNvbm5lY3Rpb24gcG9pbnQgY2FuIGJlIG9taXR0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzT3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHRoYXQgdGhlIGN1cnJlbnQgcG9pbnQgaXMgY29ubmVjdGVkIHRvIGFub3RoZXIgTm9kZU1hdGVyaWFsQmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc0Nvbm5lY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0ZWRQb2ludCAhPT0gbnVsbCB8fCB0aGlzLmhhc0VuZHBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHRoZSBvdGhlciBzaWRlIG9mIHRoZSBjb25uZWN0aW9uIChpZiBhbnkpICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZFBvaW50KCk6IE51bGxhYmxlPE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWRQb2ludDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHRoZSBibG9jayB0aGF0IG93bnMgdGhpcyBjb25uZWN0aW9uIHBvaW50ICovXHJcbiAgICBwdWJsaWMgZ2V0IG93bmVyQmxvY2soKTogTm9kZVBhcnRpY2xlQmxvY2sge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vd25lckJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXQgdGhlIGJsb2NrIGNvbm5lY3RlZCBvbiB0aGUgb3RoZXIgc2lkZSBvZiB0aGlzIGNvbm5lY3Rpb24gKGlmIGFueSkgKi9cclxuICAgIHB1YmxpYyBnZXQgc291cmNlQmxvY2soKTogTnVsbGFibGU8Tm9kZVBhcnRpY2xlQmxvY2s+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2Nvbm5lY3RlZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZFBvaW50Lm93bmVyQmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCB0aGUgYmxvY2sgY29ubmVjdGVkIG9uIHRoZSBlbmRwb2ludHMgb2YgdGhpcyBjb25uZWN0aW9uIChpZiBhbnkpICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3RlZEJsb2NrcygpOiBBcnJheTxOb2RlUGFydGljbGVCbG9jaz4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmRwb2ludHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmRwb2ludHMubWFwKChlKSA9PiBlLm93bmVyQmxvY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBHZXRzIHRoZSBsaXN0IG9mIGNvbm5lY3RlZCBlbmRwb2ludHMgKi9cclxuICAgIHB1YmxpYyBnZXQgZW5kcG9pbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmRwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhhdCBvdXRwdXQgcG9pbnQgaXMgY29ubmVjdGVkIHRvIGF0IGxlYXN0IG9uZSBpbnB1dCAqL1xyXG4gICAgcHVibGljIGdldCBoYXNFbmRwb2ludHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZHBvaW50cyAmJiB0aGlzLl9lbmRwb2ludHMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHRoZSBpbm5lciB0eXBlIChpZSBBdXRvRGV0ZWN0IGZvciBpbnN0YW5jZSBpbnN0ZWFkIG9mIHRoZSBpbmZlcnJlZCBvbmUpICovXHJcbiAgICBwdWJsaWMgZ2V0IGlubmVyVHlwZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlua2VkQ29ubmVjdGlvblNvdXJjZSAmJiAhdGhpcy5faXNNYWluTGlua1NvdXJjZSAmJiB0aGlzLl9saW5rZWRDb25uZWN0aW9uU291cmNlLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb25uZWN0aW9uIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBjb25uZWN0aW9uIHBvaW50IG5hbWVcclxuICAgICAqIEBwYXJhbSBvd25lckJsb2NrIGRlZmluZXMgdGhlIGJsb2NrIGhvc3RpbmcgdGhpcyBjb25uZWN0aW9uIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIGRlZmluZXMgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY29ubmVjdGlvbiBwb2ludFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvd25lckJsb2NrOiBOb2RlUGFydGljbGVCbG9jaywgZGlyZWN0aW9uOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnREaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9vd25lckJsb2NrID0gb3duZXJCbG9jaztcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgY2xhc3MgbmFtZSBlLmcuIFwiTm9kZU1hdGVyaWFsQ29ubmVjdGlvblBvaW50XCJcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbGFzcyBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnRcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoaXMgY29ubmVjdGlvbiBwb2ludFxyXG4gICAgICogQHBhcmFtIHN0YXRlIGN1cnJlbnQgZXZhbHVhdGlvbiBzdGF0ZVxyXG4gICAgICogQHJldHVybnMgdGhlIGNvbm5lY3RlZCB2YWx1ZSBvciB0aGUgdmFsdWUgaWYgbm90aGluZyBpcyBjb25uZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENvbm5lY3RlZFZhbHVlKHN0YXRlOiBOb2RlUGFydGljbGVCdWlsZFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZFBvaW50Py5fc3RvcmVkRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWRQb2ludC5fc3RvcmVkRnVuY3Rpb24oc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWRQb2ludCEuX3N0b3JlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGN1cnJlbnQgcG9pbnQgY2FuIGJlIGNvbm5lY3RlZCB0byBhbm90aGVyIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gY29ubmVjdGlvblBvaW50IGRlZmluZXMgdGhlIG90aGVyIGNvbm5lY3Rpb24gcG9pbnRcclxuICAgICAqIEByZXR1cm5zIGEgYm9vbGVhblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuQ29ubmVjdFRvKGNvbm5lY3Rpb25Qb2ludDogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb21wYXRpYmlsaXR5U3RhdGUoY29ubmVjdGlvblBvaW50KSA9PT0gTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50Q29tcGF0aWJpbGl0eVN0YXRlcy5Db21wYXRpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIG51bWJlciBpbmRpY2F0aW5nIGlmIHRoZSBjdXJyZW50IHBvaW50IGNhbiBiZSBjb25uZWN0ZWQgdG8gYW5vdGhlciBwb2ludFxyXG4gICAgICogQHBhcmFtIGNvbm5lY3Rpb25Qb2ludCBkZWZpbmVzIHRoZSBvdGhlciBjb25uZWN0aW9uIHBvaW50XHJcbiAgICAgKiBAcmV0dXJucyBhIG51bWJlciBkZWZpbmluZyB0aGUgY29tcGF0aWJpbGl0eSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hlY2tDb21wYXRpYmlsaXR5U3RhdGUoY29ubmVjdGlvblBvaW50OiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQpOiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnRDb21wYXRpYmlsaXR5U3RhdGVzIHtcclxuICAgICAgICBjb25zdCBvd25lckJsb2NrID0gdGhpcy5fb3duZXJCbG9jaztcclxuICAgICAgICBjb25zdCBvdGhlckJsb2NrID0gY29ubmVjdGlvblBvaW50Lm93bmVyQmxvY2s7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgIT09IGNvbm5lY3Rpb25Qb2ludC50eXBlICYmIGNvbm5lY3Rpb25Qb2ludC5pbm5lclR5cGUgIT09IE5vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXMuQXV0b0RldGVjdCkge1xyXG4gICAgICAgICAgICAvLyBBY2NlcHRlZCB0eXBlc1xyXG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvblBvaW50LmFjY2VwdGVkQ29ubmVjdGlvblBvaW50VHlwZXMgJiYgY29ubmVjdGlvblBvaW50LmFjY2VwdGVkQ29ubmVjdGlvblBvaW50VHlwZXMuaW5kZXhPZih0aGlzLnR5cGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludENvbXBhdGliaWxpdHlTdGF0ZXMuQ29tcGF0aWJsZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnRDb21wYXRpYmlsaXR5U3RhdGVzLlR5cGVJbmNvbXBhdGlibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEV4Y2x1ZGVkXHJcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25Qb2ludC5leGNsdWRlZENvbm5lY3Rpb25Qb2ludFR5cGVzICYmIGNvbm5lY3Rpb25Qb2ludC5leGNsdWRlZENvbm5lY3Rpb25Qb2ludFR5cGVzLmluZGV4T2YodGhpcy50eXBlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludENvbXBhdGliaWxpdHlTdGF0ZXMuVHlwZUluY29tcGF0aWJsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGhpZXJhcmNoeVxyXG4gICAgICAgIGxldCB0YXJnZXRCbG9jayA9IG90aGVyQmxvY2s7XHJcbiAgICAgICAgbGV0IHNvdXJjZUJsb2NrID0gb3duZXJCbG9jaztcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludERpcmVjdGlvbi5JbnB1dCkge1xyXG4gICAgICAgICAgICB0YXJnZXRCbG9jayA9IG93bmVyQmxvY2s7XHJcbiAgICAgICAgICAgIHNvdXJjZUJsb2NrID0gb3RoZXJCbG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRCbG9jay5pc0FuQW5jZXN0b3JPZihzb3VyY2VCbG9jaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludENvbXBhdGliaWxpdHlTdGF0ZXMuSGllcmFyY2h5SXNzdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50Q29tcGF0aWJpbGl0eVN0YXRlcy5Db21wYXRpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdCB0aGlzIHBvaW50IHRvIGFub3RoZXIgY29ubmVjdGlvbiBwb2ludFxyXG4gICAgICogQHBhcmFtIGNvbm5lY3Rpb25Qb2ludCBkZWZpbmVzIHRoZSBvdGhlciBjb25uZWN0aW9uIHBvaW50XHJcbiAgICAgKiBAcGFyYW0gaWdub3JlQ29uc3RyYWludHMgZGVmaW5lcyBpZiB0aGUgc3lzdGVtIHdpbGwgaWdub3JlIGNvbm5lY3Rpb24gdHlwZSBjb25zdHJhaW50cyAoZGVmYXVsdCBpcyBmYWxzZSlcclxuICAgICAqIEByZXR1cm5zIHRoZSBjdXJyZW50IGNvbm5lY3Rpb24gcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbm5lY3RUbyhjb25uZWN0aW9uUG9pbnQ6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCwgaWdub3JlQ29uc3RyYWludHMgPSBmYWxzZSk6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCB7XHJcbiAgICAgICAgaWYgKCFpZ25vcmVDb25zdHJhaW50cyAmJiAhdGhpcy5jYW5Db25uZWN0VG8oY29ubmVjdGlvblBvaW50KSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxyXG4gICAgICAgICAgICB0aHJvdyBgQ2Fubm90IGNvbm5lY3QgdGhlc2UgdHdvIGNvbm5lY3RvcnMuIHNvdXJjZTogXCIke3RoaXMub3duZXJCbG9jay5uYW1lfVwiLiR7dGhpcy5uYW1lfSwgdGFyZ2V0OiBcIiR7Y29ubmVjdGlvblBvaW50Lm93bmVyQmxvY2submFtZX1cIi4ke2Nvbm5lY3Rpb25Qb2ludC5uYW1lfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbmRwb2ludHMucHVzaChjb25uZWN0aW9uUG9pbnQpO1xyXG4gICAgICAgIGNvbm5lY3Rpb25Qb2ludC5fY29ubmVjdGVkUG9pbnQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ29ubmVjdGlvbk9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGNvbm5lY3Rpb25Qb2ludCk7XHJcbiAgICAgICAgY29ubmVjdGlvblBvaW50Lm9uQ29ubmVjdGlvbk9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgdGhpcyBwb2ludCBmcm9tIG9uZSBvZiBoaXMgZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSBlbmRwb2ludCBkZWZpbmVzIHRoZSBvdGhlciBjb25uZWN0aW9uIHBvaW50XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3VycmVudCBjb25uZWN0aW9uIHBvaW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNjb25uZWN0RnJvbShlbmRwb2ludDogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50KTogTm9kZVBhcnRpY2xlQ29ubmVjdGlvblBvaW50IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2VuZHBvaW50cy5pbmRleE9mKGVuZHBvaW50KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VuZHBvaW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGVuZHBvaW50Ll9jb25uZWN0ZWRQb2ludCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMub25EaXNjb25uZWN0aW9uT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZW5kcG9pbnQpO1xyXG4gICAgICAgIGVuZHBvaW50Lm9uRGlzY29ubmVjdGlvbk9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbGwgdGhlIGxpc3Qgb2YgZXhjbHVkZWQgY29ubmVjdGlvbiBwb2ludCB0eXBlcyB3aXRoIGFsbCB0eXBlcyBvdGhlciB0aGFuIHRob3NlIHBhc3NlZCBpbiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgKiBAcGFyYW0gbWFzayBUeXBlcyAoT1JlZCB2YWx1ZXMgb2YgTm9kZU1hdGVyaWFsQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcykgdGhhdCBhcmUgYWxsb3dlZCwgYW5kIHRodXMgd2lsbCBub3QgYmUgcHVzaGVkIHRvIHRoZSBleGNsdWRlZCBsaXN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRFeGNsdWRlZENvbm5lY3Rpb25Qb2ludEZyb21BbGxvd2VkVHlwZXMobWFzazogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGJpdG1hc2sgPSAxO1xyXG4gICAgICAgIHdoaWxlIChiaXRtYXNrIDwgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5BbGwpIHtcclxuICAgICAgICAgICAgaWYgKCEobWFzayAmIGJpdG1hc2spKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2x1ZGVkQ29ubmVjdGlvblBvaW50VHlwZXMucHVzaChiaXRtYXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiaXRtYXNrID0gYml0bWFzayA8PCAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBwb2ludCBpbiBhIEpTT04gcmVwcmVzZW50YXRpb25cclxuICAgICAqIEBwYXJhbSBpc0lucHV0IGRlZmluZXMgaWYgdGhlIGNvbm5lY3Rpb24gcG9pbnQgaXMgYW4gaW5wdXQgKGRlZmF1bHQgaXMgdHJ1ZSlcclxuICAgICAqIEByZXR1cm5zIHRoZSBzZXJpYWxpemVkIHBvaW50IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKGlzSW5wdXQgPSB0cnVlKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5hc0FycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnZhbHVlVHlwZSA9IFwiQkFCWUxPTi5cIiArIHRoaXMudmFsdWUuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnZhbHVlID0gdGhpcy52YWx1ZS5hc0FycmF5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnZhbHVlVHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzSW5wdXQgJiYgdGhpcy5jb25uZWN0ZWRQb2ludCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlucHV0TmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC50YXJnZXRCbG9ja0lkID0gdGhpcy5jb25uZWN0ZWRQb2ludC5vd25lckJsb2NrLnVuaXF1ZUlkO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnRhcmdldENvbm5lY3Rpb25OYW1lID0gdGhpcy5jb25uZWN0ZWRQb2ludC5uYW1lO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmlzRXhwb3NlZE9uRnJhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmV4cG9zZWRQb3J0UG9zaXRpb24gPSB0aGlzLmV4cG9zZWRQb3J0UG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0V4cG9zZWRPbkZyYW1lIHx8IHRoaXMuZXhwb3NlZFBvcnRQb3NpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuaXNFeHBvc2VkT25GcmFtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZXhwb3NlZFBvcnRQb3NpdGlvbiA9IHRoaXMuZXhwb3NlZFBvcnRQb3NpdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsZWFzZSByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5vbkNvbm5lY3Rpb25PYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc2Nvbm5lY3Rpb25PYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBQYXJ0aWNsZSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9wYXJ0aWNsZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFRoaW5QYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy90aGluUGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHR5cGUgeyBOb2RlUGFydGljbGVDb25uZWN0aW9uUG9pbnQgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvTm9kZS9ub2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFwiO1xyXG5cclxuaW1wb3J0IHsgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcyB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9Ob2RlL0VudW1zL25vZGVQYXJ0aWNsZUJsb2NrQ29ubmVjdGlvblBvaW50VHlwZXNcIjtcclxuaW1wb3J0IHsgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMgfSBmcm9tIFwiY29yZS9QYXJ0aWNsZXMvTm9kZS9FbnVtcy9ub2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlc1wiO1xyXG5pbXBvcnQgeyBOb2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL05vZGUvRW51bXMvbm9kZVBhcnRpY2xlU3lzdGVtU291cmNlc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gc3RvcmUgbm9kZSBiYXNlZCBnZW9tZXRyeSBidWlsZCBzdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjYXBhY3RpdHkgb2YgdGhlIHBhcnRpY2xlIHN5c3RlbSB0byBidWlsZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FwYWNpdHk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHNjZW5lIHdoZXJlIHRoZSBwYXJ0aWNsZSBzeXN0ZW0gaXMgYnVpbHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNjZW5lOiBTY2VuZTtcclxuXHJcbiAgICAvKiogR2V0cyBvciBzZXRzIHRoZSBidWlsZCBpZGVudGlmaWVyICovXHJcbiAgICBwdWJsaWMgYnVpbGRJZDogbnVtYmVyO1xyXG5cclxuICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIGxpc3Qgb2Ygbm9uIGNvbm5lY3RlZCBtYW5kYXRvcnkgaW5wdXRzICovXHJcbiAgICBwdWJsaWMgbm90Q29ubmVjdGVkTm9uT3B0aW9uYWxJbnB1dHM6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludFtdID0gW107XHJcblxyXG4gICAgLyoqIEdldHMgb3Igc2V0cyBhIGJvb2xlYW4gaW5kaWNhdGluZyB0aGF0IHZlcmJvc2UgbW9kZSBpcyBvbiAqL1xyXG4gICAgcHVibGljIHZlcmJvc2U6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHBhcnRpY2xlIGNvbnRleHQgZm9yIGNvbnRleHR1YWwgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFydGljbGVDb250ZXh0OiBOdWxsYWJsZTxQYXJ0aWNsZT4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBzeXN0ZW0gY29udGV4dCBmb3IgY29udGV4dHVhbCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzeXN0ZW1Db250ZXh0OiBOdWxsYWJsZTxUaGluUGFydGljbGVTeXN0ZW0+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgaW5kZXggb2YgdGhlIGdyYWRpZW50IHRvIHVzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ3JhZGllbnRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIG5leHQgZ3JhZGllbnQgaW4gbGluZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmV4dEdyYWRpZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgbmV4dCBncmFkaWVudCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmV4dEdyYWRpZW50VmFsdWU6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXRzIGVycm9ycyBpZiBhbnlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVtaXRFcnJvcnMoKSB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgbm90Q29ubmVjdGVkSW5wdXQgb2YgdGhpcy5ub3RDb25uZWN0ZWROb25PcHRpb25hbElucHV0cykge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYGlucHV0ICR7bm90Q29ubmVjdGVkSW5wdXQubmFtZX0gZnJvbSBibG9jayAke1xyXG4gICAgICAgICAgICAgICAgbm90Q29ubmVjdGVkSW5wdXQub3duZXJCbG9jay5uYW1lXHJcbiAgICAgICAgICAgIH1bJHtub3RDb25uZWN0ZWRJbnB1dC5vd25lckJsb2NrLmdldENsYXNzTmFtZSgpfV0gaXMgbm90IGNvbm5lY3RlZCBhbmQgaXMgbm90IG9wdGlvbmFsLlxcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXHJcbiAgICAgICAgICAgIHRocm93IFwiQnVpbGQgb2YgTm9kZSBQYXJ0aWNsZSBTeXN0ZW0gU2V0IGZhaWxlZDpcXG5cIiArIGVycm9yTWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGFwdCBhIHZhbHVlIHRvIGEgdGFyZ2V0IHR5cGVcclxuICAgICAqIEBwYXJhbSBzb3VyY2UgZGVmaW5lcyB0aGUgdmFsdWUgdG8gYWRhcHRcclxuICAgICAqIEBwYXJhbSB0YXJnZXRUeXBlIGRlZmluZXMgdGhlIHRhcmdldCB0eXBlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgYWRhcHRlZCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBhZGFwdChzb3VyY2U6IE5vZGVQYXJ0aWNsZUNvbm5lY3Rpb25Qb2ludCwgdGFyZ2V0VHlwZTogTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlLmdldENvbm5lY3RlZFZhbHVlKHRoaXMpIHx8IDA7XHJcblxyXG4gICAgICAgIGlmIChzb3VyY2UudHlwZSA9PT0gdGFyZ2V0VHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRhcmdldFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmFsdWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVCbG9ja0Nvbm5lY3Rpb25Qb2ludFR5cGVzLlZlY3RvcjM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModmFsdWUsIHZhbHVlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQmxvY2tDb25uZWN0aW9uUG9pbnRUeXBlcy5Db2xvcjQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yNCh2YWx1ZSwgdmFsdWUsIHZhbHVlLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbnRleHR1YWwgc291cmNlXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFNvdXJjZSBvZiB0aGUgY29udGV4dHVhbCB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc291cmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDb250ZXh0dWFsVmFsdWUoc291cmNlOiBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcykge1xyXG4gICAgICAgIGlmICghdGhpcy5wYXJ0aWNsZUNvbnRleHQgfHwgIXRoaXMuc3lzdGVtQ29udGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoc291cmNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuUG9zaXRpb246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZUNvbnRleHQucG9zaXRpb247XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuRGlyZWN0aW9uOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5EaXJlY3Rpb25TY2FsZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlQ29udGV4dC5fZGlyZWN0aW9uU2NhbGU7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuU2NhbGVkRGlyZWN0aW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUNvbnRleHQuZGlyZWN0aW9uLnNjYWxlVG9SZWYodGhpcy5wYXJ0aWNsZUNvbnRleHQuX2RpcmVjdGlvblNjYWxlLCB0aGlzLnBhcnRpY2xlQ29udGV4dC5fc2NhbGVkRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlQ29udGV4dC5fc2NhbGVkRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkNvbG9yOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmNvbG9yO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkluaXRpYWxDb2xvcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlQ29udGV4dC5pbml0aWFsQ29sb3I7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuQ29sb3JEZWFkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmNvbG9yRGVhZDtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5BZ2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZUNvbnRleHQuYWdlO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkxpZmV0aW1lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmxpZmVUaW1lO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkFuZ2xlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmFuZ2xlO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNjYWxlOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LnNjYWxlO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLlNpemU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZUNvbnRleHQuc2l6ZTtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5BZ2VHcmFkaWVudDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlQ29udGV4dC5hZ2UgLyB0aGlzLnBhcnRpY2xlQ29udGV4dC5saWZlVGltZTtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5TcHJpdGVDZWxsRW5kOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ29udGV4dC5lbmRTcHJpdGVDZWxsSUQ7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuU3ByaXRlQ2VsbEluZGV4OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmNlbGxJbmRleDtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5TcHJpdGVDZWxsU3RhcnQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db250ZXh0LnN0YXJ0U3ByaXRlQ2VsbElEO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzLkluaXRpYWxEaXJlY3Rpb246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZUNvbnRleHQuX2luaXRpYWxEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuQ29sb3JTdGVwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LmNvbG9yU3RlcDtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5TY2FsZWRDb2xvclN0ZXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlQ29udGV4dC5jb2xvclN0ZXAuc2NhbGVUb1JlZih0aGlzLnN5c3RlbUNvbnRleHQuX3NjYWxlZFVwZGF0ZVNwZWVkLCB0aGlzLnN5c3RlbUNvbnRleHQuX3NjYWxlZENvbG9yU3RlcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db250ZXh0Ll9zY2FsZWRDb2xvclN0ZXA7XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuTG9jYWxQb3NpdGlvblVwZGF0ZWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlQ29udGV4dC5kaXJlY3Rpb24uc2NhbGVUb1JlZih0aGlzLnBhcnRpY2xlQ29udGV4dC5fZGlyZWN0aW9uU2NhbGUsIHRoaXMucGFydGljbGVDb250ZXh0Ll9zY2FsZWREaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUNvbnRleHQuX2xvY2FsUG9zaXRpb24hLmFkZEluUGxhY2UodGhpcy5wYXJ0aWNsZUNvbnRleHQuX3NjYWxlZERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBWZWN0b3IzLlRyYW5zZm9ybUNvb3JkaW5hdGVzVG9SZWYodGhpcy5wYXJ0aWNsZUNvbnRleHQuX2xvY2FsUG9zaXRpb24hLCB0aGlzLnN5c3RlbUNvbnRleHQuX2VtaXR0ZXJXb3JsZE1hdHJpeCwgdGhpcy5wYXJ0aWNsZUNvbnRleHQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDb250ZXh0LnBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBlbWl0dGVyIHdvcmxkIG1hdHJpeFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVtaXR0ZXJXb3JsZE1hdHJpeCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3lzdGVtQ29udGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ29udGV4dC5fZW1pdHRlcldvcmxkTWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZW1pdHRlciBpbnZlcnNlIHdvcmxkIG1hdHJpeFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVtaXR0ZXJJbnZlcnNlV29ybGRNYXRyaXgoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN5c3RlbUNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbnRleHQuX2VtaXR0ZXJJbnZlcnNlV29ybGRNYXRyaXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBlbWl0dGVyIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW1pdHRlclBvc2l0aW9uKCk6IE51bGxhYmxlPFZlY3RvcjM+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3lzdGVtQ29udGV4dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zeXN0ZW1Db250ZXh0LmVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zeXN0ZW1Db250ZXh0LmVtaXR0ZXIgaW5zdGFuY2VvZiBWZWN0b3IzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbnRleHQuZW1pdHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoPEFic3RyYWN0TWVzaD50aGlzLnN5c3RlbUNvbnRleHQuZW1pdHRlcikuYWJzb2x1dGVQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBhIHN5c3RlbSBzb3VyY2VcclxuICAgICAqIEBwYXJhbSBzb3VyY2UgU291cmNlIG9mIHRoZSBzeXN0ZW0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNvdXJjZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U3lzdGVtVmFsdWUoc291cmNlOiBOb2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN5c3RlbUNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHNvdXJjZSkge1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMuVGltZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbnRleHQuX2FjdHVhbEZyYW1lO1xyXG4gICAgICAgICAgICBjYXNlIE5vZGVQYXJ0aWNsZVN5c3RlbVNvdXJjZXMuRGVsdGE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db250ZXh0Ll9zY2FsZWRVcGRhdGVTcGVlZDtcclxuICAgICAgICAgICAgY2FzZSBOb2RlUGFydGljbGVTeXN0ZW1Tb3VyY2VzLkVtaXR0ZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyUG9zaXRpb247XHJcbiAgICAgICAgICAgIGNhc2UgTm9kZVBhcnRpY2xlU3lzdGVtU291cmNlcy5DYW1lcmFQb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFjdGl2ZUNhbWVyYT8uZ2xvYmFsUG9zaXRpb24gfHwgVmVjdG9yMy5aZXJvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW1TZXQgfSBmcm9tIFwiLi4vcGFydGljbGVTeXN0ZW1TZXRcIjtcclxuaW1wb3J0IHsgU3lzdGVtQmxvY2sgfSBmcm9tIFwiLi9CbG9ja3Mvc3lzdGVtQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUJ1aWxkU3RhdGUgfSBmcm9tIFwiLi9ub2RlUGFydGljbGVCdWlsZFN0YXRlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZVBhcnRpY2xlQmxvY2sgfSBmcm9tIFwiLi9ub2RlUGFydGljbGVCbG9ja1wiO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzLnNlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHZXRDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IFdlYlJlcXVlc3QgfSBmcm9tIFwiY29yZS9NaXNjL3dlYlJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcImNvcmUvRW5naW5lcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0RW5naW5lIH0gZnJvbSBcImNvcmUvRW5naW5lcy9hYnN0cmFjdEVuZ2luZVwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZUlucHV0QmxvY2sgfSBmcm9tIFwiLi9CbG9ja3MvcGFydGljbGVJbnB1dEJsb2NrXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlVGV4dHVyZVNvdXJjZUJsb2NrIH0gZnJvbSBcIi4vQmxvY2tzL3BhcnRpY2xlU291cmNlVGV4dHVyZUJsb2NrXCI7XHJcbmltcG9ydCB7IE5vZGVQYXJ0aWNsZUNvbnRleHR1YWxTb3VyY2VzIH0gZnJvbSBcIi4vRW51bXMvbm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXNcIjtcclxuaW1wb3J0IHsgVXBkYXRlUG9zaXRpb25CbG9jayB9IGZyb20gXCIuL0Jsb2Nrcy9VcGRhdGUvdXBkYXRlUG9zaXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZU1hdGhCbG9jaywgUGFydGljbGVNYXRoQmxvY2tPcGVyYXRpb25zIH0gZnJvbSBcIi4vQmxvY2tzL3BhcnRpY2xlTWF0aEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgUGFydGljbGVUZWxlcG9ydE91dEJsb2NrIH0gZnJvbSBcIi4vQmxvY2tzL1RlbGVwb3J0L3BhcnRpY2xlVGVsZXBvcnRPdXRCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IFBhcnRpY2xlVGVsZXBvcnRJbkJsb2NrIH0gZnJvbSBcIi4vQmxvY2tzL1RlbGVwb3J0L3BhcnRpY2xlVGVsZXBvcnRJbkJsb2NrXCI7XHJcbmltcG9ydCB7IEJveFNoYXBlQmxvY2sgfSBmcm9tIFwiLi9CbG9ja3MvRW1pdHRlcnMvYm94U2hhcGVCbG9ja1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVQYXJ0aWNsZUJsb2NrIH0gZnJvbSBcIi4vQmxvY2tzL0VtaXR0ZXJzL2NyZWF0ZVBhcnRpY2xlQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbi8vIGRlY2xhcmUgTk9ERVBBUlRJQ0xFRURJVE9SIG5hbWVzcGFjZSBmb3IgY29tcGlsYXRpb24gaXNzdWVcclxuZGVjbGFyZSBsZXQgTk9ERVBBUlRJQ0xFRURJVE9SOiBhbnk7XHJcbmRlY2xhcmUgbGV0IEJBQllMT046IGFueTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdXNlZCB0byBjb25maWd1cmUgdGhlIG5vZGUgcGFydGljbGUgZWRpdG9yXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOb2RlUGFydGljbGVFZGl0b3JPcHRpb25zIHtcclxuICAgIC8qKiBEZWZpbmUgdGhlIFVSTCB0byBsb2FkIG5vZGUgZWRpdG9yIHNjcmlwdCBmcm9tICovXHJcbiAgICBlZGl0b3JVUkw/OiBzdHJpbmc7XHJcbiAgICAvKiogQWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgTlBFICovXHJcbiAgICBub2RlRWRpdG9yQ29uZmlnPzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj86IENvbG9yNDtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgc2V0IG9mIHBhcnRpY2xlIHN5c3RlbXMgZGVmaW5lZCBhcyBhIG5vZGUgZ3JhcGguXHJcbiAqIE5QRTogI0s2RjFaQiMxXHJcbiAqIFBHOiAjWlQ1MDlVIzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBOb2RlUGFydGljbGVTeXN0ZW1TZXQge1xyXG4gICAgcHJpdmF0ZSBfc3lzdGVtQmxvY2tzOiBTeXN0ZW1CbG9ja1tdID0gW107XHJcbiAgICBwcml2YXRlIF9idWlsZElkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiBEZWZpbmUgdGhlIFVybCB0byBsb2FkIG5vZGUgZWRpdG9yIHNjcmlwdCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFZGl0b3JVUkwgPSBgJHtUb29scy5fRGVmYXVsdENkblVybH0vdiR7QWJzdHJhY3RFbmdpbmUuVmVyc2lvbn0vbm9kZVBhcnRpY2xlRWRpdG9yL2JhYnlsb24ubm9kZVBhcnRpY2xlRWRpdG9yLmpzYDtcclxuXHJcbiAgICAvKiogRGVmaW5lIHRoZSBVcmwgdG8gbG9hZCBzbmlwcGV0cyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTbmlwcGV0VXJsID0gQ29uc3RhbnRzLlNuaXBwZXRVcmw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTbmlwcGV0IElEIGlmIHRoZSBtYXRlcmlhbCB3YXMgY3JlYXRlZCBmcm9tIHRoZSBzbmlwcGV0IHNlcnZlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc25pcHBldElkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGFuIGFycmF5IG9mIGJsb2NrcyB0aGF0IG5lZWRzIHRvIGJlIHNlcmlhbGl6ZWQgZXZlbiBpZiB0aGV5IGFyZSBub3QgeWV0IGNvbm5lY3RlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXR0YWNoZWRCbG9ja3M6IE5vZGVQYXJ0aWNsZUJsb2NrW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBkYXRhIHVzZWQgYnkgdmlzdWFsIGVkaXRvclxyXG4gICAgICogQHNlZSBodHRwczovL25wZS5iYWJ5bG9uanMuY29tXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlZGl0b3JEYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgcGFydGljbGUgc2V0IGlzIGJ1aWx0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkJ1aWxkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE5vZGVQYXJ0aWNsZVN5c3RlbVNldD4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBzZXRcclxuICAgICAqL1xyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBmcmVlIGNvbW1lbnQgYWJvdXQgdGhlIHNldFxyXG4gICAgICovXHJcbiAgICBAc2VyaWFsaXplKFwiY29tbWVudFwiKVxyXG4gICAgcHVibGljIGNvbW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHN5c3RlbSBibG9ja3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzeXN0ZW1CbG9ja3MoKTogU3lzdGVtQmxvY2tbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5c3RlbUJsb2NrcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2YgaW5wdXQgYmxvY2tzIGF0dGFjaGVkIHRvIHRoaXMgbWF0ZXJpYWxcclxuICAgICAqIEByZXR1cm5zIGFuIGFycmF5IG9mIElucHV0QmxvY2tzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaW5wdXRCbG9ja3MoKSB7XHJcbiAgICAgICAgY29uc3QgYmxvY2tzOiBQYXJ0aWNsZUlucHV0QmxvY2tbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5hdHRhY2hlZEJsb2Nrcykge1xyXG4gICAgICAgICAgICBpZiAoYmxvY2suaXNJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tzLnB1c2goYmxvY2sgYXMgUGFydGljbGVJbnB1dEJsb2NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJsb2NrcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIGJsb2NrIGJ5IGl0cyBuYW1lXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBibG9jayB0byByZXRyaWV2ZVxyXG4gICAgICogQHJldHVybnMgdGhlIHJlcXVpcmVkIGJsb2NrIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCbG9ja0J5TmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuYXR0YWNoZWRCbG9ja3MpIHtcclxuICAgICAgICAgICAgaWYgKGJsb2NrLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJNb3JlIHRoYW4gb25lIGJsb2NrIHdhcyBmb3VuZCB3aXRoIHRoZSBuYW1lIGBcIiArIG5hbWUgKyBcImBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIGJsb2NrIHVzaW5nIGEgcHJlZGljYXRlXHJcbiAgICAgKiBAcGFyYW0gcHJlZGljYXRlIGRlZmluZXMgdGhlIHByZWRpY2F0ZSB1c2VkIHRvIGZpbmQgdGhlIGdvb2QgY2FuZGlkYXRlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVxdWlyZWQgYmxvY2sgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEJsb2NrQnlQcmVkaWNhdGUocHJlZGljYXRlOiAoYmxvY2s6IE5vZGVQYXJ0aWNsZUJsb2NrKSA9PiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLmF0dGFjaGVkQmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUoYmxvY2spKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFuIGlucHV0IGJsb2NrIHVzaW5nIGEgcHJlZGljYXRlXHJcbiAgICAgKiBAcGFyYW0gcHJlZGljYXRlIGRlZmluZXMgdGhlIHByZWRpY2F0ZSB1c2VkIHRvIGZpbmQgdGhlIGdvb2QgY2FuZGlkYXRlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcmVxdWlyZWQgaW5wdXQgYmxvY2sgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElucHV0QmxvY2tCeVByZWRpY2F0ZShwcmVkaWNhdGU6IChibG9jazogUGFydGljbGVJbnB1dEJsb2NrKSA9PiBib29sZWFuKTogTnVsbGFibGU8UGFydGljbGVJbnB1dEJsb2NrPiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLmF0dGFjaGVkQmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9jay5pc0lucHV0ICYmIHByZWRpY2F0ZShibG9jayBhcyBQYXJ0aWNsZUlucHV0QmxvY2spKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2sgYXMgUGFydGljbGVJbnB1dEJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXRcclxuICAgICAqIEBwYXJhbSBuYW1lIGRlZmluZXMgdGhlIG5hbWUgb2YgdGhlIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgY2xhc3MgbmFtZSBvZiB0aGUgbm9kZSBwYXJ0aWNsZSBzZXQgZS5nLiBcIk5vZGVQYXJ0aWNsZVN5c3RlbVNldFwiXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiTm9kZVBhcnRpY2xlU3lzdGVtU2V0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUJsb2NrKG5vZGU6IE5vZGVQYXJ0aWNsZUJsb2NrLCBhdXRvQ29uZmlndXJlID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjaGVkQmxvY2tzLmluZGV4T2Yobm9kZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoZWRCbG9ja3MucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2Ygbm9kZS5pbnB1dHMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGVkUG9pbnQgPSBpbnB1dC5jb25uZWN0ZWRQb2ludDtcclxuICAgICAgICAgICAgaWYgKGNvbm5lY3RlZFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IGNvbm5lY3RlZFBvaW50Lm93bmVyQmxvY2s7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sgIT09IG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplQmxvY2soYmxvY2ssIGF1dG9Db25maWd1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQkpTTk9ERVBBUlRJQ0xFRURJVE9SID0gdGhpcy5fZ2V0R2xvYmFsTm9kZVBhcnRpY2xlRWRpdG9yKCk7XHJcblxyXG4gICAgLyoqIEdldCB0aGUgZWRpdG9yIGZyb20gYnVuZGxlIG9yIGdsb2JhbFxyXG4gICAgICogQHJldHVybnMgdGhlIGdsb2JhbCBOUEVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0R2xvYmFsTm9kZVBhcnRpY2xlRWRpdG9yKCk6IGFueSB7XHJcbiAgICAgICAgLy8gVU1EIEdsb2JhbCBuYW1lIGRldGVjdGlvbiBmcm9tIFdlYnBhY2sgQnVuZGxlIFVNRCBOYW1lLlxyXG4gICAgICAgIGlmICh0eXBlb2YgTk9ERVBBUlRJQ0xFRURJVE9SICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOT0RFUEFSVElDTEVFRElUT1I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbiBjYXNlIG9mIG1vZHVsZSBsZXQncyBjaGVjayB0aGUgZ2xvYmFsIGVtaXR0ZWQgZnJvbSB0aGUgZWRpdG9yIGVudHJ5IHBvaW50LlxyXG4gICAgICAgIGlmICh0eXBlb2YgQkFCWUxPTiAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgQkFCWUxPTi5Ob2RlUGFydGljbGVFZGl0b3IgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJBQllMT047XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHRoZSBub2RlIGVkaXRvciB3aW5kb3cuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbENvbmZpZyBEZWZpbmUgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGVkaXRvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVOb2RlUGFydGljbGVFZGl0b3IoYWRkaXRpb25hbENvbmZpZz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG5vZGVFZGl0b3JDb25maWc6IGFueSA9IHtcclxuICAgICAgICAgICAgbm9kZVBhcnRpY2xlU2V0OiB0aGlzLFxyXG4gICAgICAgICAgICAuLi5hZGRpdGlvbmFsQ29uZmlnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5CSlNOT0RFUEFSVElDTEVFRElUT1IuTm9kZVBhcnRpY2xlRWRpdG9yLlNob3cobm9kZUVkaXRvckNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXVuY2ggdGhlIG5vZGUgcGFydGljbGUgZWRpdG9yXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIERlZmluZSB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgZWRpdG9yXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgZnVsZmlsbGVkIHdoZW4gdGhlIG5vZGUgZWRpdG9yIGlzIHZpc2libGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGVkaXRBc3luYyhjb25maWc/OiBJTm9kZVBhcnRpY2xlRWRpdG9yT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkJKU05PREVQQVJUSUNMRUVESVRPUiA9IHRoaXMuQkpTTk9ERVBBUlRJQ0xFRURJVE9SIHx8IHRoaXMuX2dldEdsb2JhbE5vZGVQYXJ0aWNsZUVkaXRvcigpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuQkpTTk9ERVBBUlRJQ0xFRURJVE9SID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRvclVybCA9IGNvbmZpZyAmJiBjb25maWcuZWRpdG9yVVJMID8gY29uZmlnLmVkaXRvclVSTCA6IE5vZGVQYXJ0aWNsZVN5c3RlbVNldC5FZGl0b3JVUkw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBlZGl0b3IgYW5kIGFkZCBpdCB0byB0aGUgRE9NXHJcbiAgICAgICAgICAgICAgICBUb29scy5Mb2FkQmFieWxvblNjcmlwdChlZGl0b3JVcmwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJKU05PREVQQVJUSUNMRUVESVRPUiA9IHRoaXMuQkpTTk9ERVBBUlRJQ0xFRURJVE9SIHx8IHRoaXMuX2dldEdsb2JhbE5vZGVQYXJ0aWNsZUVkaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5vZGVQYXJ0aWNsZUVkaXRvcihjb25maWc/Lm5vZGVFZGl0b3JDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGNyZWF0ZXMgdGhlIGVkaXRvclxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTm9kZVBhcnRpY2xlRWRpdG9yKGNvbmZpZz8ubm9kZUVkaXRvckNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyB0aGUgcGFydGljbGUgc3lzdGVtIHNldCBmcm9tIHRoZSBkZWZpbmVkIGJsb2Nrcy5cclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBob3N0aW5nIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gdmVyYm9zZSBkZWZpbmVzIHdoZXRoZXIgdG8gbG9nIGRldGFpbGVkIGluZm9ybWF0aW9uIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyAoZmFsc2UgYnkgZGVmYXVsdClcclxuICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBidWlsdCBwYXJ0aWNsZSBzeXN0ZW0gc2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBidWlsZEFzeW5jKHNjZW5lOiBTY2VuZSwgdmVyYm9zZSA9IGZhbHNlKTogUHJvbWlzZTxQYXJ0aWNsZVN5c3RlbVNldD4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxQYXJ0aWNsZVN5c3RlbVNldD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbmV3IFBhcnRpY2xlU3lzdGVtU2V0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIGFsbCBibG9ja3NcclxuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLl9zeXN0ZW1CbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVCbG9jayhibG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBibG9ja3NcclxuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLnN5c3RlbUJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgTm9kZVBhcnRpY2xlQnVpbGRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYnVpbGRJZCA9IHRoaXMuX2J1aWxkSWQrKztcclxuICAgICAgICAgICAgICAgIHN0YXRlLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS52ZXJib3NlID0gdmVyYm9zZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzeXN0ZW0gPSBibG9jay5jcmVhdGVTeXN0ZW0oc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLl9zb3VyY2UgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLl9ibG9ja1JlZmVyZW5jZSA9IGJsb2NrLl9pbnRlcm5hbElkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEVycm9yc1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZW1pdEVycm9ycygpO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dHB1dC5zeXN0ZW1zLnB1c2goc3lzdGVtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkJ1aWxkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcyk7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKG91dHB1dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciB0aGUgY3VycmVudCBub2RlIHBhcnRpY2xlIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hlZEJsb2Nrcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3N5c3RlbUJsb2Nrcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgdGhlIGN1cnJlbnQgc2V0IGFuZCByZXN0b3JlIGl0IHRvIGEgZGVmYXVsdCBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VG9EZWZhdWx0KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gTWFpbiBzeXN0ZW1cclxuICAgICAgICBjb25zdCBzeXN0ZW0gPSBuZXcgU3lzdGVtQmxvY2soXCJQYXJ0aWNsZSBzeXN0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uQmxvY2sgPSBuZXcgVXBkYXRlUG9zaXRpb25CbG9jayhcIlVwZGF0ZSBwb3NpdGlvblwiKTtcclxuICAgICAgICB1cGRhdGVQb3NpdGlvbkJsb2NrLm91dHB1dC5jb25uZWN0VG8oc3lzdGVtLnBhcnRpY2xlKTtcclxuXHJcbiAgICAgICAgLy8gQ29udGV4dHVhbCBpbnB1dHNcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkJsb2NrID0gbmV3IFBhcnRpY2xlSW5wdXRCbG9jayhcIlBvc2l0aW9uXCIpO1xyXG4gICAgICAgIHBvc2l0aW9uQmxvY2suY29udGV4dHVhbFZhbHVlID0gTm9kZVBhcnRpY2xlQ29udGV4dHVhbFNvdXJjZXMuUG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQmxvY2sgPSBuZXcgUGFydGljbGVJbnB1dEJsb2NrKFwiU2NhbGVkIGRpcmVjdGlvblwiKTtcclxuICAgICAgICBkaXJlY3Rpb25CbG9jay5jb250ZXh0dWFsVmFsdWUgPSBOb2RlUGFydGljbGVDb250ZXh0dWFsU291cmNlcy5TY2FsZWREaXJlY3Rpb247XHJcblxyXG4gICAgICAgIC8vIEFkZFxyXG4gICAgICAgIGNvbnN0IGFkZEJsb2NrID0gbmV3IFBhcnRpY2xlTWF0aEJsb2NrKFwiQWRkXCIpO1xyXG4gICAgICAgIGFkZEJsb2NrLm9wZXJhdGlvbiA9IFBhcnRpY2xlTWF0aEJsb2NrT3BlcmF0aW9ucy5BZGQ7XHJcbiAgICAgICAgcG9zaXRpb25CbG9jay5vdXRwdXQuY29ubmVjdFRvKGFkZEJsb2NrLmxlZnQpO1xyXG4gICAgICAgIGRpcmVjdGlvbkJsb2NrLm91dHB1dC5jb25uZWN0VG8oYWRkQmxvY2sucmlnaHQpO1xyXG4gICAgICAgIGFkZEJsb2NrLm91dHB1dC5jb25uZWN0VG8odXBkYXRlUG9zaXRpb25CbG9jay5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBwYXJ0aWNsZVxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZVBhcnRpY2xlQmxvY2sgPSBuZXcgQ3JlYXRlUGFydGljbGVCbG9jayhcIkNyZWF0ZSBwYXJ0aWNsZVwiKTtcclxuXHJcbiAgICAgICAgLy8gU2hhcGVcclxuICAgICAgICBjb25zdCBlbWl0dGVyU2hhcGUgPSBuZXcgQm94U2hhcGVCbG9jayhcIkJveCBzaGFwZVwiKTtcclxuICAgICAgICBjcmVhdGVQYXJ0aWNsZUJsb2NrLnBhcnRpY2xlLmNvbm5lY3RUbyhlbWl0dGVyU2hhcGUucGFydGljbGUpO1xyXG4gICAgICAgIGVtaXR0ZXJTaGFwZS5vdXRwdXQuY29ubmVjdFRvKHVwZGF0ZVBvc2l0aW9uQmxvY2sucGFydGljbGUpO1xyXG5cclxuICAgICAgICAvLyBUZXh0dXJlXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZUJsb2NrID0gbmV3IFBhcnRpY2xlVGV4dHVyZVNvdXJjZUJsb2NrKFwiVGV4dHVyZVwiKTtcclxuICAgICAgICB0ZXh0dXJlQmxvY2sudGV4dHVyZS5jb25uZWN0VG8oc3lzdGVtLnRleHR1cmUpO1xyXG4gICAgICAgIHRleHR1cmVCbG9jay51cmwgPSBUb29scy5HZXRBc3NldFVybChcImh0dHBzOi8vYXNzZXRzLmJhYnlsb25qcy5jb20vY29yZS90ZXh0dXJlcy9mbGFyZS5wbmdcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N5c3RlbUJsb2Nrcy5wdXNoKHN5c3RlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBibG9jayBmcm9tIHRoZSBjdXJyZW50IHN5c3RlbSBzZXRcclxuICAgICAqIEBwYXJhbSBibG9jayBkZWZpbmVzIHRoZSBibG9jayB0byByZW1vdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUJsb2NrKGJsb2NrOiBOb2RlUGFydGljbGVCbG9jaykge1xyXG4gICAgICAgIGNvbnN0IGF0dGFjaGVkQmxvY2tJbmRleCA9IHRoaXMuYXR0YWNoZWRCbG9ja3MuaW5kZXhPZihibG9jayk7XHJcbiAgICAgICAgaWYgKGF0dGFjaGVkQmxvY2tJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoZWRCbG9ja3Muc3BsaWNlKGF0dGFjaGVkQmxvY2tJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmxvY2suaXNTeXN0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zeXN0ZW1CbG9ja3MuaW5kZXhPZihibG9jayBhcyBTeXN0ZW1CbG9jayk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zeXN0ZW1CbG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIHRoZSBjdXJyZW50IGdyYXBoIGFuZCBsb2FkIGEgbmV3IG9uZSBmcm9tIGEgc2VyaWFsaXphdGlvbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSBzb3VyY2UgZGVmaW5lcyB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFydGljbGUgc2V0XHJcbiAgICAgKiBAcGFyYW0gbWVyZ2UgZGVmaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgc291cmNlIG11c3QgYmUgbWVyZ2VkIG9yIHJlcGxhY2UgdGhlIGN1cnJlbnQgY29udGVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFyc2VTZXJpYWxpemVkT2JqZWN0KHNvdXJjZTogYW55LCBtZXJnZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCFtZXJnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXA6IHsgW2tleTogbnVtYmVyXTogTm9kZVBhcnRpY2xlQmxvY2sgfSA9IHt9O1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYmxvY2tzXHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJzZWRCbG9jayBvZiBzb3VyY2UuYmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrVHlwZSA9IEdldENsYXNzKHBhcnNlZEJsb2NrLmN1c3RvbVR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jazogTm9kZVBhcnRpY2xlQmxvY2sgPSBuZXcgYmxvY2tUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBibG9jay5fZGVzZXJpYWxpemUocGFyc2VkQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgbWFwW3BhcnNlZEJsb2NrLmlkXSA9IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoZWRCbG9ja3MucHVzaChibG9jayk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmlzU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3lzdGVtQmxvY2tzLnB1c2goYmxvY2sgYXMgU3lzdGVtQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNvbm5lY3QgdGVsZXBvcnRhdGlvblxyXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5hdHRhY2hlZEJsb2Nrcykge1xyXG4gICAgICAgICAgICBpZiAoYmxvY2suaXNUZWxlcG9ydE91dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVsZXBvcnRPdXQgPSBibG9jayBhcyBQYXJ0aWNsZVRlbGVwb3J0T3V0QmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRlbGVwb3J0T3V0Ll90ZW1wRW50cnlQb2ludFVuaXF1ZUlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gbWFwW2lkXSBhcyBQYXJ0aWNsZVRlbGVwb3J0SW5CbG9jaztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5hdHRhY2hUb0VuZHBvaW50KHRlbGVwb3J0T3V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3Rpb25zIC0gU3RhcnRzIHdpdGggaW5wdXQgYmxvY2tzIG9ubHkgKGV4Y2VwdCBpZiBpbiBcIm1lcmdlXCIgbW9kZSB3aGVyZSB3ZSBzY2FuIGFsbCBibG9ja3MpXHJcbiAgICAgICAgZm9yIChsZXQgYmxvY2tJbmRleCA9IDA7IGJsb2NrSW5kZXggPCBzb3VyY2UuYmxvY2tzLmxlbmd0aDsgYmxvY2tJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEJsb2NrID0gc291cmNlLmJsb2Nrc1tibG9ja0luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBtYXBbcGFyc2VkQmxvY2suaWRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFibG9jaykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChibG9jay5pbnB1dHMubGVuZ3RoICYmIHBhcnNlZEJsb2NrLmlucHV0cy5zb21lKChpOiBhbnkpID0+IGkudGFyZ2V0Q29ubmVjdGlvbk5hbWUpICYmICFtZXJnZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcmVzdG9yZUNvbm5lY3Rpb25zKGJsb2NrLCBzb3VyY2UsIG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVSSByZWxhdGVkIGluZm9cclxuICAgICAgICBpZiAoc291cmNlLmxvY2F0aW9ucyB8fCAoc291cmNlLmVkaXRvckRhdGEgJiYgc291cmNlLmVkaXRvckRhdGEubG9jYXRpb25zKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGJsb2NrSWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGlzQ29sbGFwc2VkOiBib29sZWFuO1xyXG4gICAgICAgICAgICB9W10gPSBzb3VyY2UubG9jYXRpb25zIHx8IHNvdXJjZS5lZGl0b3JEYXRhLmxvY2F0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbG9jYXRpb24gb2YgbG9jYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFwW2xvY2F0aW9uLmJsb2NrSWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uYmxvY2tJZCA9IG1hcFtsb2NhdGlvbi5ibG9ja0lkXS51bmlxdWVJZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG1lcmdlICYmIHRoaXMuZWRpdG9yRGF0YSAmJiB0aGlzLmVkaXRvckRhdGEubG9jYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMuY29uY2F0KHRoaXMuZWRpdG9yRGF0YS5sb2NhdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc291cmNlLmxvY2F0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yRGF0YSA9IHNvdXJjZS5lZGl0b3JEYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JEYXRhLmxvY2F0aW9ucyA9IGxvY2F0aW9ucztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmxvY2tNYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG1hcCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tNYXBba2V5XSA9IG1hcFtrZXldLnVuaXF1ZUlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVkaXRvckRhdGEubWFwID0gYmxvY2tNYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSBzb3VyY2UuY29tbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXN0b3JlQ29ubmVjdGlvbnMoYmxvY2s6IE5vZGVQYXJ0aWNsZUJsb2NrLCBzb3VyY2U6IGFueSwgbWFwOiB7IFtrZXk6IG51bWJlcl06IE5vZGVQYXJ0aWNsZUJsb2NrIH0pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG91dHB1dFBvaW50IG9mIGJsb2NrLm91dHB1dHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2Ygc291cmNlLmJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbWFwW2NhbmRpZGF0ZS5pZF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGNhbmRpZGF0ZS5pbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFwW2lucHV0LnRhcmdldEJsb2NrSWRdID09PSBibG9jayAmJiBpbnB1dC50YXJnZXRDb25uZWN0aW9uTmFtZSA9PT0gb3V0cHV0UG9pbnQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFBvaW50ID0gdGFyZ2V0LmdldElucHV0QnlOYW1lKGlucHV0LmlucHV0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXRQb2ludCB8fCBpbnB1dFBvaW50LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0UG9pbnQuY29ubmVjdFRvKGlucHV0UG9pbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXN0b3JlQ29ubmVjdGlvbnModGFyZ2V0LCBzb3VyY2UsIG1hcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBub2RlIHBhcnRpY2xlIHNldCBpbiBhIEpTT04gcmVwcmVzZW50YXRpb25cclxuICAgICAqIEBwYXJhbSBzZWxlY3RlZEJsb2NrcyBkZWZpbmVzIHRoZSBsaXN0IG9mIGJsb2NrcyB0byBzYXZlIChpZiBudWxsIHRoZSB3aG9sZSBub2RlIHBhcnRpY2xlIHNldCB3aWxsIGJlIHNhdmVkKVxyXG4gICAgICogQHJldHVybnMgdGhlIHNlcmlhbGl6ZWQgcGFydGljbGUgc3lzdGVtIHNldCBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZShzZWxlY3RlZEJsb2Nrcz86IE5vZGVQYXJ0aWNsZUJsb2NrW10pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBzZWxlY3RlZEJsb2NrcyA/IHt9IDogU2VyaWFsaXphdGlvbkhlbHBlci5TZXJpYWxpemUodGhpcyk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5lZGl0b3JEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmVkaXRvckRhdGEpKTsgLy8gQ29weVxyXG5cclxuICAgICAgICBsZXQgYmxvY2tzOiBOb2RlUGFydGljbGVCbG9ja1tdID0gW107XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZEJsb2Nrcykge1xyXG4gICAgICAgICAgICBibG9ja3MgPSBzZWxlY3RlZEJsb2NrcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmN1c3RvbVR5cGUgPSBcIkJBQllMT04uTm9kZVBhcnRpY2xlU3lzdGVtU2V0XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCbG9ja3NcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmJsb2NrcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmJsb2Nrcy5wdXNoKGJsb2NrLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc2VsZWN0ZWRCbG9ja3MpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLmF0dGFjaGVkQmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tzLmluZGV4T2YoYmxvY2spICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5ibG9ja3MucHVzaChibG9jay5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgYSBkdXBsaWNhdGUgb2YgdGhlIGN1cnJlbnQgcGFydGljbGUgc3lzdGVtIHNldC5cclxuICAgICAqIEBwYXJhbSBuYW1lIGRlZmluZXMgdGhlIG5hbWUgdG8gdXNlIGZvciB0aGUgbmV3IHBhcnRpY2xlIHN5c3RlbSBzZXRcclxuICAgICAqIEByZXR1cm5zIHRoZSBjbG9uZWQgcGFydGljbGUgc3lzdGVtIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xvbmUobmFtZTogc3RyaW5nKTogTm9kZVBhcnRpY2xlU3lzdGVtU2V0IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gdGhpcy5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLkNsb25lKCgpID0+IG5ldyBOb2RlUGFydGljbGVTeXN0ZW1TZXQobmFtZSksIHRoaXMpO1xyXG4gICAgICAgIGNsb25lLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIGNsb25lLnNuaXBwZXRJZCA9IHRoaXMuc25pcHBldElkO1xyXG5cclxuICAgICAgICBjbG9uZS5wYXJzZVNlcmlhbGl6ZWRPYmplY3Qoc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcbiAgICAgICAgY2xvbmUuX2J1aWxkSWQgPSB0aGlzLl9idWlsZElkO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlcyB0aGUgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5hdHRhY2hlZEJsb2Nrcykge1xyXG4gICAgICAgICAgICBibG9jay5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaGVkQmxvY2tzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5vbkJ1aWxkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBub2RlIHBhcnRpY2xlIHNldCBzZXQgdG8gZGVmYXVsdCBiYXNpYyBjb25maWd1cmF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBwYXJ0aWNsZSBzZXRcclxuICAgICAqIEByZXR1cm5zIGEgbmV3IE5vZGVQYXJ0aWNsZVN5c3RlbVNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZURlZmF1bHQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpY2xlU2V0ID0gbmV3IE5vZGVQYXJ0aWNsZVN5c3RlbVNldChuYW1lKTtcclxuXHJcbiAgICAgICAgbm9kZVBhcnRpY2xlU2V0LnNldFRvRGVmYXVsdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbm9kZVBhcnRpY2xlU2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5vZGUgcGFydGljbGUgc2V0IGZyb20gcGFyc2VkIGRhdGFcclxuICAgICAqIEBwYXJhbSBzb3VyY2UgZGVmaW5lcyB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFydGljbGUgc2V0XHJcbiAgICAgKiBAcmV0dXJucyBhIG5ldyBub2RlIHBhcnRpY2xlIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBhcnNlKHNvdXJjZTogYW55KTogTm9kZVBhcnRpY2xlU3lzdGVtU2V0IHtcclxuICAgICAgICBjb25zdCBub2RlUGFydGljbGVTZXQgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKCgpID0+IG5ldyBOb2RlUGFydGljbGVTeXN0ZW1TZXQoc291cmNlLm5hbWUpLCBzb3VyY2UsIG51bGwpO1xyXG5cclxuICAgICAgICBub2RlUGFydGljbGVTZXQucGFyc2VTZXJpYWxpemVkT2JqZWN0KHNvdXJjZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlUGFydGljbGVTZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbm9kZSBwYXJ0aWNsZSBzZXQgZnJvbSBhIHNuaXBwZXQgc2F2ZWQgaW4gYSByZW1vdGUgZmlsZVxyXG4gICAgICogQHBhcmFtIG5hbWUgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgbm9kZSBwYXJ0aWNsZSBzZXQgdG8gY3JlYXRlXHJcbiAgICAgKiBAcGFyYW0gdXJsIGRlZmluZXMgdGhlIHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEBwYXJhbSBub2RlUGFydGljbGVTZXQgZGVmaW5lcyBhIG5vZGUgcGFydGljbGUgc2V0IHRvIHVwZGF0ZSAoaW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBvbmUpXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIG5ldyBub2RlIHBhcnRpY2xlIHNldFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgc3RhdGljIFBhcnNlRnJvbUZpbGVBc3luYyhuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBub2RlUGFydGljbGVTZXQ/OiBOb2RlUGFydGljbGVTeXN0ZW1TZXQpOiBQcm9taXNlPE5vZGVQYXJ0aWNsZVN5c3RlbVNldD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgV2ViUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVQYXJ0aWNsZVNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVBhcnRpY2xlU2V0ID0gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZSgoKSA9PiBuZXcgTm9kZVBhcnRpY2xlU3lzdGVtU2V0KG5hbWUpLCBzZXJpYWxpemF0aW9uT2JqZWN0LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVBhcnRpY2xlU2V0LnBhcnNlU2VyaWFsaXplZE9iamVjdChzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobm9kZVBhcnRpY2xlU2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiVW5hYmxlIHRvIGxvYWQgdGhlIG5vZGUgcGFydGljbGUgc3lzdGVtIHNldFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5vZGUgcGFydGljbGUgc2V0IGZyb20gYSBzbmlwcGV0IHNhdmVkIGJ5IHRoZSBub2RlIHBhcnRpY2xlIGVkaXRvclxyXG4gICAgICogQHBhcmFtIHNuaXBwZXRJZCBkZWZpbmVzIHRoZSBzbmlwcGV0IHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSBub2RlUGFydGljbGVTZXQgZGVmaW5lcyBhIG5vZGUgcGFydGljbGUgc2V0IHRvIHVwZGF0ZSAoaW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBvbmUpXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIG5ldyBub2RlIHBhcnRpY2xlIHNldFxyXG4gICAgICovXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBwdWJsaWMgc3RhdGljIFBhcnNlRnJvbVNuaXBwZXRBc3luYyhzbmlwcGV0SWQ6IHN0cmluZywgbm9kZVBhcnRpY2xlU2V0PzogTm9kZVBhcnRpY2xlU3lzdGVtU2V0KTogUHJvbWlzZTxOb2RlUGFydGljbGVTeXN0ZW1TZXQ+IHtcclxuICAgICAgICBpZiAoc25pcHBldElkID09PSBcIl9CTEFOS1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoTm9kZVBhcnRpY2xlU3lzdGVtU2V0LkNyZWF0ZURlZmF1bHQoXCJibGFua1wiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFdlYlJlcXVlc3QoKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNuaXBwZXQgPSBKU09OLnBhcnNlKEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpLmpzb25QYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IEpTT04ucGFyc2Uoc25pcHBldC5ub2RlUGFydGljbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlUGFydGljbGVTZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVQYXJ0aWNsZVNldCA9IFNlcmlhbGl6YXRpb25IZWxwZXIuUGFyc2UoKCkgPT4gbmV3IE5vZGVQYXJ0aWNsZVN5c3RlbVNldChzbmlwcGV0SWQpLCBzZXJpYWxpemF0aW9uT2JqZWN0LCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVBhcnRpY2xlU2V0LnBhcnNlU2VyaWFsaXplZE9iamVjdChzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVBhcnRpY2xlU2V0LnNuaXBwZXRJZCA9IHNuaXBwZXRJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5vZGVQYXJ0aWNsZVNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJVbmFibGUgdG8gbG9hZCB0aGUgc25pcHBldCBcIiArIHNuaXBwZXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB0aGlzLlNuaXBwZXRVcmwgKyBcIi9cIiArIHNuaXBwZXRJZC5yZXBsYWNlKC8jL2csIFwiL1wiKSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgVmVydGV4QnVmZmVyLCBCdWZmZXIgfSBmcm9tIFwiLi4vQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBUaGluRW5naW5lIH0gZnJvbSBcIi4uL0VuZ2luZXMvdGhpbkVuZ2luZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEVmZmVjdCwgSUVmZmVjdENyZWF0aW9uT3B0aW9ucyB9IGZyb20gXCIuLi9NYXRlcmlhbHMvZWZmZWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUdQVVBhcnRpY2xlU3lzdGVtUGxhdGZvcm0gfSBmcm9tIFwiLi9JR1BVUGFydGljbGVTeXN0ZW1QbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tUGFydGljbGVFbWl0dGVyIH0gZnJvbSBcIi4vRW1pdHRlclR5cGVzL2N1c3RvbVBhcnRpY2xlRW1pdHRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEdQVVBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcIi4vZ3B1UGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHR5cGUgeyBEYXRhQXJyYXksIE51bGxhYmxlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgRGF0YUJ1ZmZlciB9IGZyb20gXCIuLi9CdWZmZXJzL2RhdGFCdWZmZXJcIjtcclxuaW1wb3J0IHsgVW5pZm9ybUJ1ZmZlckVmZmVjdENvbW1vbkFjY2Vzc29yIH0gZnJvbSBcIi4uL01hdGVyaWFscy91bmlmb3JtQnVmZmVyRWZmZWN0Q29tbW9uQWNjZXNzb3JcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiLi4vTWlzYy90eXBlU3RvcmVcIjtcclxuXHJcbmltcG9ydCBcIi4uL1NoYWRlcnMvZ3B1VXBkYXRlUGFydGljbGVzLmZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4uL1NoYWRlcnMvZ3B1VXBkYXRlUGFydGljbGVzLnZlcnRleFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBFbmdpbmUgfSBmcm9tIFwiLi4vRW5naW5lcy9lbmdpbmVcIjtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGNsYXNzIFdlYkdMMlBhcnRpY2xlU3lzdGVtIGltcGxlbWVudHMgSUdQVVBhcnRpY2xlU3lzdGVtUGxhdGZvcm0ge1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBHUFVQYXJ0aWNsZVN5c3RlbTtcclxuICAgIHByaXZhdGUgX2VuZ2luZTogVGhpbkVuZ2luZTtcclxuICAgIHByaXZhdGUgX3VwZGF0ZUVmZmVjdDogRWZmZWN0O1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRWZmZWN0T3B0aW9uczogSUVmZmVjdENyZWF0aW9uT3B0aW9ucztcclxuICAgIHByaXZhdGUgX3JlbmRlclZBTzogV2ViR0xWZXJ0ZXhBcnJheU9iamVjdFtdID0gW107XHJcbiAgICBwcml2YXRlIF91cGRhdGVWQU86IFdlYkdMVmVydGV4QXJyYXlPYmplY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyVmVydGV4QnVmZmVyczogeyBba2V5OiBzdHJpbmddOiBWZXJ0ZXhCdWZmZXIgfTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgYWxpZ25EYXRhSW5CdWZmZXIgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEdQVVBhcnRpY2xlU3lzdGVtLCBlbmdpbmU6IFRoaW5FbmdpbmUpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImluaXRpYWxQb3NpdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwibGlmZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpemVcIixcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImluaXRpYWxEaXJlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwiYW5nbGVcIixcclxuICAgICAgICAgICAgICAgIFwiY2VsbEluZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcImNlbGxTdGFydE9mZnNldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJub2lzZUNvb3JkaW5hdGVzMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJub2lzZUNvb3JkaW5hdGVzMlwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB1bmlmb3Jtc05hbWVzOiBbXHJcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRDb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lRGVsdGFcIixcclxuICAgICAgICAgICAgICAgIFwiZW1pdHRlcldNXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpZmVUaW1lXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbG9yMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb2xvcjJcIixcclxuICAgICAgICAgICAgICAgIFwic2l6ZVJhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInNjYWxlUmFuZ2VcIixcclxuICAgICAgICAgICAgICAgIFwiZ3Jhdml0eVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbWl0UG93ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkaXJlY3Rpb24yXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1pbkVtaXRCb3hcIixcclxuICAgICAgICAgICAgICAgIFwibWF4RW1pdEJveFwiLFxyXG4gICAgICAgICAgICAgICAgXCJyYWRpdXNcIixcclxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uUmFuZG9taXplclwiLFxyXG4gICAgICAgICAgICAgICAgXCJoZWlnaHRcIixcclxuICAgICAgICAgICAgICAgIFwiY29uZUFuZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BGYWN0b3JcIixcclxuICAgICAgICAgICAgICAgIFwiYW5nbGVSYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyYWRpdXNSYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjZWxsSW5mb3NcIixcclxuICAgICAgICAgICAgICAgIFwibm9pc2VTdHJlbmd0aFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW1pdFZlbG9jaXR5RGFtcGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJmbG93TWFwUHJvamVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbG93TWFwU3RyZW5ndGhcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlcnNOYW1lczogW10sXHJcbiAgICAgICAgICAgIHNhbXBsZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBcInJhbmRvbVNhbXBsZXJcIixcclxuICAgICAgICAgICAgICAgIFwicmFuZG9tU2FtcGxlcjJcIixcclxuICAgICAgICAgICAgICAgIFwic2l6ZUdyYWRpZW50U2FtcGxlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmd1bGFyU3BlZWRHcmFkaWVudFNhbXBsZXJcIixcclxuICAgICAgICAgICAgICAgIFwidmVsb2NpdHlHcmFkaWVudFNhbXBsZXJcIixcclxuICAgICAgICAgICAgICAgIFwibGltaXRWZWxvY2l0eUdyYWRpZW50U2FtcGxlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJub2lzZVNhbXBsZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZHJhZ0dyYWRpZW50U2FtcGxlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbG93TWFwU2FtcGxlclwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkZWZpbmVzOiBcIlwiLFxyXG4gICAgICAgICAgICBmYWxsYmFja3M6IG51bGwsXHJcbiAgICAgICAgICAgIG9uQ29tcGlsZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGluZGV4UGFyYW1ldGVyczogbnVsbCxcclxuICAgICAgICAgICAgbWF4U2ltdWx0YW5lb3VzTGlnaHRzOiAwLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBjb250ZXh0TG9zdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3QgPSB1bmRlZmluZWQgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclZBTy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZBTy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBpc1VwZGF0ZUJ1ZmZlckNyZWF0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fdXBkYXRlRWZmZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBpc1VwZGF0ZUJ1ZmZlclJlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVFZmZlY3Q/LmlzUmVhZHkoKSA/PyBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgY3JlYXRlVXBkYXRlQnVmZmVyKGRlZmluZXM6IHN0cmluZyk6IFVuaWZvcm1CdWZmZXJFZmZlY3RDb21tb25BY2Nlc3NvciB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0T3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzID0gW1wib3V0UG9zaXRpb25cIl07XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0T3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLnB1c2goXCJvdXRBZ2VcIik7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0T3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLnB1c2goXCJvdXRTaXplXCIpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdE9wdGlvbnMudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncy5wdXNoKFwib3V0TGlmZVwiKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3RPcHRpb25zLnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3MucHVzaChcIm91dFNlZWRcIik7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0T3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLnB1c2goXCJvdXREaXJlY3Rpb25cIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQucGFydGljbGVFbWl0dGVyVHlwZSBpbnN0YW5jZW9mIEN1c3RvbVBhcnRpY2xlRW1pdHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3RPcHRpb25zLnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3MucHVzaChcIm91dEluaXRpYWxQb3NpdGlvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGFyZW50Ll9jb2xvckdyYWRpZW50c1RleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0T3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLnB1c2goXCJvdXRDb2xvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGFyZW50Ll9pc0JpbGxib2FyZEJhc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdE9wdGlvbnMudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncy5wdXNoKFwib3V0SW5pdGlhbERpcmVjdGlvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQubm9pc2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdE9wdGlvbnMudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncy5wdXNoKFwib3V0Tm9pc2VDb29yZGluYXRlczFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdE9wdGlvbnMudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncy5wdXNoKFwib3V0Tm9pc2VDb29yZGluYXRlczJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3RPcHRpb25zLnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3MucHVzaChcIm91dEFuZ2xlXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50LmlzQW5pbWF0aW9uU2hlZXRFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdE9wdGlvbnMudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncy5wdXNoKFwib3V0Q2VsbEluZGV4XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50LnNwcml0ZVJhbmRvbVN0YXJ0Q2VsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0T3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLnB1c2goXCJvdXRDZWxsU3RhcnRPZmZzZXRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdE9wdGlvbnMuZGVmaW5lcyA9IGRlZmluZXM7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0ID0gdGhpcy5fZW5naW5lLmNyZWF0ZUVmZmVjdChcImdwdVVwZGF0ZVBhcnRpY2xlc1wiLCB0aGlzLl91cGRhdGVFZmZlY3RPcHRpb25zLCB0aGlzLl9lbmdpbmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFVuaWZvcm1CdWZmZXJFZmZlY3RDb21tb25BY2Nlc3Nvcih0aGlzLl91cGRhdGVFZmZlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVWZXJ0ZXhCdWZmZXJzKHVwZGF0ZUJ1ZmZlcjogQnVmZmVyLCByZW5kZXJWZXJ0ZXhCdWZmZXJzOiB7IFtrZXk6IHN0cmluZ106IFZlcnRleEJ1ZmZlciB9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVkFPLnB1c2godGhpcy5fY3JlYXRlVXBkYXRlVkFPKHVwZGF0ZUJ1ZmZlcikpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJWQU8ucHVzaCh0aGlzLl9lbmdpbmUucmVjb3JkVmVydGV4QXJyYXlPYmplY3QocmVuZGVyVmVydGV4QnVmZmVycywgbnVsbCwgdGhpcy5fcGFyZW50Ll9nZXRXcmFwcGVyKHRoaXMuX3BhcmVudC5ibGVuZE1vZGUpLmVmZmVjdCEpKTtcclxuICAgICAgICB0aGlzLl9lbmdpbmUuYmluZEFycmF5QnVmZmVyKG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJWZXJ0ZXhCdWZmZXJzID0gcmVuZGVyVmVydGV4QnVmZmVycztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGFydGljbGVCdWZmZXIoZGF0YTogbnVtYmVyW10pOiBEYXRhQXJyYXkgfCBEYXRhQnVmZmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgYmluZERyYXdCdWZmZXJzKGluZGV4OiBudW1iZXIsIGVmZmVjdDogRWZmZWN0LCBpbmRleEJ1ZmZlcjogTnVsbGFibGU8RGF0YUJ1ZmZlcj4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoaW5kZXhCdWZmZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW5naW5lLmJpbmRCdWZmZXJzKHRoaXMuX3JlbmRlclZlcnRleEJ1ZmZlcnMsIGluZGV4QnVmZmVyLCBlZmZlY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZ2luZS5iaW5kVmVydGV4QXJyYXlPYmplY3QodGhpcy5fcmVuZGVyVkFPW2luZGV4XSwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBwcmVVcGRhdGVQYXJ0aWNsZUJ1ZmZlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBlbmdpbmUgPSB0aGlzLl9lbmdpbmUgYXMgRW5naW5lO1xyXG5cclxuICAgICAgICB0aGlzLl9lbmdpbmUuZW5hYmxlRWZmZWN0KHRoaXMuX3VwZGF0ZUVmZmVjdCk7XHJcblxyXG4gICAgICAgIGlmICghZW5naW5lLnNldFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdQVSBwYXJ0aWNsZXMgY2Fubm90IHdvcmsgd2l0aG91dCBhIGZ1bGwgRW5naW5lLiBUaGluRW5naW5lIGlzIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVQYXJ0aWNsZUJ1ZmZlcihpbmRleDogbnVtYmVyLCB0YXJnZXRCdWZmZXI6IEJ1ZmZlciwgY3VycmVudEFjdGl2ZUNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3Quc2V0VGV4dHVyZShcInJhbmRvbVNhbXBsZXJcIiwgdGhpcy5fcGFyZW50Ll9yYW5kb21UZXh0dXJlKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3Quc2V0VGV4dHVyZShcInJhbmRvbVNhbXBsZXIyXCIsIHRoaXMuX3BhcmVudC5fcmFuZG9tVGV4dHVyZTIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50Ll9mbG93TWFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdC5zZXRUZXh0dXJlKFwiZmxvd01hcFNhbXBsZXJcIiwgdGhpcy5fcGFyZW50Ll9mbG93TWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuX3NpemVHcmFkaWVudHNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdC5zZXRUZXh0dXJlKFwic2l6ZUdyYWRpZW50U2FtcGxlclwiLCB0aGlzLl9wYXJlbnQuX3NpemVHcmFkaWVudHNUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuX2FuZ3VsYXJTcGVlZEdyYWRpZW50c1RleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWZmZWN0LnNldFRleHR1cmUoXCJhbmd1bGFyU3BlZWRHcmFkaWVudFNhbXBsZXJcIiwgdGhpcy5fcGFyZW50Ll9hbmd1bGFyU3BlZWRHcmFkaWVudHNUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuX3ZlbG9jaXR5R3JhZGllbnRzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFZmZlY3Quc2V0VGV4dHVyZShcInZlbG9jaXR5R3JhZGllbnRTYW1wbGVyXCIsIHRoaXMuX3BhcmVudC5fdmVsb2NpdHlHcmFkaWVudHNUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuX2xpbWl0VmVsb2NpdHlHcmFkaWVudHNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdC5zZXRUZXh0dXJlKFwibGltaXRWZWxvY2l0eUdyYWRpZW50U2FtcGxlclwiLCB0aGlzLl9wYXJlbnQuX2xpbWl0VmVsb2NpdHlHcmFkaWVudHNUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQuX2RyYWdHcmFkaWVudHNUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdC5zZXRUZXh0dXJlKFwiZHJhZ0dyYWRpZW50U2FtcGxlclwiLCB0aGlzLl9wYXJlbnQuX2RyYWdHcmFkaWVudHNUZXh0dXJlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQubm9pc2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVmZmVjdC5zZXRUZXh0dXJlKFwibm9pc2VTYW1wbGVyXCIsIHRoaXMuX3BhcmVudC5ub2lzZVRleHR1cmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmluZCBzb3VyY2UgVkFPXHJcbiAgICAgICAgdGhpcy5fZW5naW5lLmJpbmRWZXJ0ZXhBcnJheU9iamVjdCh0aGlzLl91cGRhdGVWQU9baW5kZXhdLCBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlXHJcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5fZW5naW5lIGFzIEVuZ2luZTtcclxuXHJcbiAgICAgICAgZW5naW5lLmJpbmRUcmFuc2Zvcm1GZWVkYmFja0J1ZmZlcih0YXJnZXRCdWZmZXIuZ2V0QnVmZmVyKCkpO1xyXG4gICAgICAgIGVuZ2luZS5zZXRSYXN0ZXJpemVyU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGVuZ2luZS5iZWdpblRyYW5zZm9ybUZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgIGVuZ2luZS5kcmF3QXJyYXlzVHlwZShDb25zdGFudHMuTUFURVJJQUxfUG9pbnRMaXN0RHJhd01vZGUsIDAsIGN1cnJlbnRBY3RpdmVDb3VudCk7XHJcbiAgICAgICAgZW5naW5lLmVuZFRyYW5zZm9ybUZlZWRiYWNrKCk7XHJcbiAgICAgICAgZW5naW5lLnNldFJhc3Rlcml6ZXJTdGF0ZSh0cnVlKTtcclxuICAgICAgICBlbmdpbmUuYmluZFRyYW5zZm9ybUZlZWRiYWNrQnVmZmVyKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyByZWxlYXNlQnVmZmVycygpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHJlbGVhc2VWZXJ0ZXhCdWZmZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl91cGRhdGVWQU8ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZ2luZS5yZWxlYXNlVmVydGV4QXJyYXlPYmplY3QodGhpcy5fdXBkYXRlVkFPW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZBTy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcmVuZGVyVkFPLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmdpbmUucmVsZWFzZVZlcnRleEFycmF5T2JqZWN0KHRoaXMuX3JlbmRlclZBT1tpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW5kZXJWQU8ubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVVcGRhdGVWQU8oc291cmNlOiBCdWZmZXIpOiBXZWJHTFZlcnRleEFycmF5T2JqZWN0IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVWZXJ0ZXhCdWZmZXJzOiB7IFtrZXk6IHN0cmluZ106IFZlcnRleEJ1ZmZlciB9ID0ge307XHJcbiAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcInBvc2l0aW9uXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcInBvc2l0aW9uXCIsIDAsIDMpO1xyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMztcclxuICAgICAgICB1cGRhdGVWZXJ0ZXhCdWZmZXJzW1wiYWdlXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcImFnZVwiLCBvZmZzZXQsIDEpO1xyXG4gICAgICAgIG9mZnNldCArPSAxO1xyXG4gICAgICAgIHVwZGF0ZVZlcnRleEJ1ZmZlcnNbXCJzaXplXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcInNpemVcIiwgb2Zmc2V0LCAzKTtcclxuICAgICAgICBvZmZzZXQgKz0gMztcclxuICAgICAgICB1cGRhdGVWZXJ0ZXhCdWZmZXJzW1wibGlmZVwiXSA9IHNvdXJjZS5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJsaWZlXCIsIG9mZnNldCwgMSk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDE7XHJcbiAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcInNlZWRcIl0gPSBzb3VyY2UuY3JlYXRlVmVydGV4QnVmZmVyKFwic2VlZFwiLCBvZmZzZXQsIDQpO1xyXG4gICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIHVwZGF0ZVZlcnRleEJ1ZmZlcnNbXCJkaXJlY3Rpb25cIl0gPSBzb3VyY2UuY3JlYXRlVmVydGV4QnVmZmVyKFwiZGlyZWN0aW9uXCIsIG9mZnNldCwgMyk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQucGFydGljbGVFbWl0dGVyVHlwZSBpbnN0YW5jZW9mIEN1c3RvbVBhcnRpY2xlRW1pdHRlcikge1xyXG4gICAgICAgICAgICB1cGRhdGVWZXJ0ZXhCdWZmZXJzW1wiaW5pdGlhbFBvc2l0aW9uXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcImluaXRpYWxQb3NpdGlvblwiLCBvZmZzZXQsIDMpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGFyZW50Ll9jb2xvckdyYWRpZW50c1RleHR1cmUpIHtcclxuICAgICAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcImNvbG9yXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcImNvbG9yXCIsIG9mZnNldCwgNCk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9wYXJlbnQuX2lzQmlsbGJvYXJkQmFzZWQpIHtcclxuICAgICAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcImluaXRpYWxEaXJlY3Rpb25cIl0gPSBzb3VyY2UuY3JlYXRlVmVydGV4QnVmZmVyKFwiaW5pdGlhbERpcmVjdGlvblwiLCBvZmZzZXQsIDMpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQubm9pc2VUZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZlcnRleEJ1ZmZlcnNbXCJub2lzZUNvb3JkaW5hdGVzMVwiXSA9IHNvdXJjZS5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJub2lzZUNvb3JkaW5hdGVzMVwiLCBvZmZzZXQsIDMpO1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gMztcclxuICAgICAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcIm5vaXNlQ29vcmRpbmF0ZXMyXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcIm5vaXNlQ29vcmRpbmF0ZXMyXCIsIG9mZnNldCwgMyk7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5fYW5ndWxhclNwZWVkR3JhZGllbnRzVGV4dHVyZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVWZXJ0ZXhCdWZmZXJzW1wiYW5nbGVcIl0gPSBzb3VyY2UuY3JlYXRlVmVydGV4QnVmZmVyKFwiYW5nbGVcIiwgb2Zmc2V0LCAxKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcImFuZ2xlXCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcImFuZ2xlXCIsIG9mZnNldCwgMik7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5faXNBbmltYXRpb25TaGVldEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdXBkYXRlVmVydGV4QnVmZmVyc1tcImNlbGxJbmRleFwiXSA9IHNvdXJjZS5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJjZWxsSW5kZXhcIiwgb2Zmc2V0LCAxKTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQuc3ByaXRlUmFuZG9tU3RhcnRDZWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWZXJ0ZXhCdWZmZXJzW1wiY2VsbFN0YXJ0T2Zmc2V0XCJdID0gc291cmNlLmNyZWF0ZVZlcnRleEJ1ZmZlcihcImNlbGxTdGFydE9mZnNldFwiLCBvZmZzZXQsIDEpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbyA9IHRoaXMuX2VuZ2luZS5yZWNvcmRWZXJ0ZXhBcnJheU9iamVjdCh1cGRhdGVWZXJ0ZXhCdWZmZXJzLCBudWxsLCB0aGlzLl91cGRhdGVFZmZlY3QpO1xyXG4gICAgICAgIHRoaXMuX2VuZ2luZS5iaW5kQXJyYXlCdWZmZXIobnVsbCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YW87XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLldlYkdMMlBhcnRpY2xlU3lzdGVtXCIsIFdlYkdMMlBhcnRpY2xlU3lzdGVtKTtcclxuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImdwdVVwZGF0ZVBhcnRpY2xlc1BpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI3ZlcnNpb24gMzAwIGVzXG52b2lkIG1haW4oKSB7ZGlzY2FyZDt9XG5gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZ3B1VXBkYXRlUGFydGljbGVzUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCIuLi9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImdwdVVwZGF0ZVBhcnRpY2xlc1ZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCN2ZXJzaW9uIDMwMCBlc1xuI2RlZmluZSBQSSAzLjE0MTU5XG51bmlmb3JtIGZsb2F0IGN1cnJlbnRDb3VudDt1bmlmb3JtIGZsb2F0IHRpbWVEZWx0YTt1bmlmb3JtIGZsb2F0IHN0b3BGYWN0b3I7XG4jaWZuZGVmIExPQ0FMXG51bmlmb3JtIG1hdDQgZW1pdHRlcldNO1xuI2VuZGlmXG51bmlmb3JtIHZlYzIgbGlmZVRpbWU7dW5pZm9ybSB2ZWMyIGVtaXRQb3dlcjt1bmlmb3JtIHZlYzIgc2l6ZVJhbmdlO3VuaWZvcm0gdmVjNCBzY2FsZVJhbmdlO1xuI2lmZGVmIEZMT1dNQVBcbnVuaWZvcm0gbWF0NCBmbG93TWFwUHJvamVjdGlvbjt1bmlmb3JtIGZsb2F0IGZsb3dNYXBTdHJlbmd0aDt1bmlmb3JtIHNhbXBsZXIyRCBmbG93TWFwU2FtcGxlcjtcbiNlbmRpZlxuI2lmbmRlZiBDT0xPUkdSQURJRU5UU1xudW5pZm9ybSB2ZWM0IGNvbG9yMTt1bmlmb3JtIHZlYzQgY29sb3IyO1xuI2VuZGlmXG51bmlmb3JtIHZlYzMgZ3Jhdml0eTt1bmlmb3JtIHNhbXBsZXIyRCByYW5kb21TYW1wbGVyO3VuaWZvcm0gc2FtcGxlcjJEIHJhbmRvbVNhbXBsZXIyO3VuaWZvcm0gdmVjNCBhbmdsZVJhbmdlO1xuI2lmZGVmIEJPWEVNSVRURVJcbnVuaWZvcm0gdmVjMyBkaXJlY3Rpb24xO3VuaWZvcm0gdmVjMyBkaXJlY3Rpb24yO3VuaWZvcm0gdmVjMyBtaW5FbWl0Qm94O3VuaWZvcm0gdmVjMyBtYXhFbWl0Qm94O1xuI2VuZGlmXG4jaWZkZWYgUE9JTlRFTUlUVEVSXG51bmlmb3JtIHZlYzMgZGlyZWN0aW9uMTt1bmlmb3JtIHZlYzMgZGlyZWN0aW9uMjtcbiNlbmRpZlxuI2lmZGVmIEhFTUlTUEhFUklDRU1JVFRFUlxudW5pZm9ybSBmbG9hdCByYWRpdXM7dW5pZm9ybSBmbG9hdCByYWRpdXNSYW5nZTt1bmlmb3JtIGZsb2F0IGRpcmVjdGlvblJhbmRvbWl6ZXI7XG4jZW5kaWZcbiNpZmRlZiBTUEhFUkVFTUlUVEVSXG51bmlmb3JtIGZsb2F0IHJhZGl1czt1bmlmb3JtIGZsb2F0IHJhZGl1c1JhbmdlO1xuI2lmZGVmIERJUkVDVEVEU1BIRVJFRU1JVFRFUlxudW5pZm9ybSB2ZWMzIGRpcmVjdGlvbjE7dW5pZm9ybSB2ZWMzIGRpcmVjdGlvbjI7XG4jZWxzZVxudW5pZm9ybSBmbG9hdCBkaXJlY3Rpb25SYW5kb21pemVyO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBDWUxJTkRFUkVNSVRURVJcbnVuaWZvcm0gZmxvYXQgcmFkaXVzO3VuaWZvcm0gZmxvYXQgaGVpZ2h0O3VuaWZvcm0gZmxvYXQgcmFkaXVzUmFuZ2U7XG4jaWZkZWYgRElSRUNURURDWUxJTkRFUkVNSVRURVJcbnVuaWZvcm0gdmVjMyBkaXJlY3Rpb24xO3VuaWZvcm0gdmVjMyBkaXJlY3Rpb24yO1xuI2Vsc2VcbnVuaWZvcm0gZmxvYXQgZGlyZWN0aW9uUmFuZG9taXplcjtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgQ09ORUVNSVRURVJcbnVuaWZvcm0gdmVjMiByYWRpdXM7dW5pZm9ybSBmbG9hdCBjb25lQW5nbGU7dW5pZm9ybSB2ZWMyIGhlaWdodDtcbiNpZmRlZiBESVJFQ1RFRENPTkVFTUlUVEVSXG51bmlmb3JtIHZlYzMgZGlyZWN0aW9uMTt1bmlmb3JtIHZlYzMgZGlyZWN0aW9uMjtcbiNlbHNlXG51bmlmb3JtIGZsb2F0IGRpcmVjdGlvblJhbmRvbWl6ZXI7XG4jZW5kaWZcbiNlbmRpZlxuaW4gdmVjMyBwb3NpdGlvbjtcbiNpZmRlZiBDVVNUT01FTUlUVEVSXG5pbiB2ZWMzIGluaXRpYWxQb3NpdGlvbjtcbiNlbmRpZlxuaW4gZmxvYXQgYWdlO2luIGZsb2F0IGxpZmU7aW4gdmVjNCBzZWVkO2luIHZlYzMgc2l6ZTtcbiNpZm5kZWYgQ09MT1JHUkFESUVOVFNcbmluIHZlYzQgY29sb3I7XG4jZW5kaWZcbmluIHZlYzMgZGlyZWN0aW9uO1xuI2lmbmRlZiBCSUxMQk9BUkRcbmluIHZlYzMgaW5pdGlhbERpcmVjdGlvbjtcbiNlbmRpZlxuI2lmZGVmIEFOR1VMQVJTUEVFREdSQURJRU5UU1xuaW4gZmxvYXQgYW5nbGU7XG4jZWxzZVxuaW4gdmVjMiBhbmdsZTtcbiNlbmRpZlxuI2lmZGVmIEFOSU1BVEVTSEVFVFxuaW4gZmxvYXQgY2VsbEluZGV4O1xuI2lmZGVmIEFOSU1BVEVTSEVFVFJBTkRPTVNUQVJUXG5pbiBmbG9hdCBjZWxsU3RhcnRPZmZzZXQ7XG4jZW5kaWZcbiNlbmRpZlxuI2lmZGVmIE5PSVNFXG5pbiB2ZWMzIG5vaXNlQ29vcmRpbmF0ZXMxO2luIHZlYzMgbm9pc2VDb29yZGluYXRlczI7XG4jZW5kaWZcbm91dCB2ZWMzIG91dFBvc2l0aW9uO1xuI2lmZGVmIENVU1RPTUVNSVRURVJcbm91dCB2ZWMzIG91dEluaXRpYWxQb3NpdGlvbjtcbiNlbmRpZlxub3V0IGZsb2F0IG91dEFnZTtvdXQgZmxvYXQgb3V0TGlmZTtvdXQgdmVjNCBvdXRTZWVkO291dCB2ZWMzIG91dFNpemU7XG4jaWZuZGVmIENPTE9SR1JBRElFTlRTXG5vdXQgdmVjNCBvdXRDb2xvcjtcbiNlbmRpZlxub3V0IHZlYzMgb3V0RGlyZWN0aW9uO1xuI2lmbmRlZiBCSUxMQk9BUkRcbm91dCB2ZWMzIG91dEluaXRpYWxEaXJlY3Rpb247XG4jZW5kaWZcbiNpZmRlZiBBTkdVTEFSU1BFRURHUkFESUVOVFNcbm91dCBmbG9hdCBvdXRBbmdsZTtcbiNlbHNlXG5vdXQgdmVjMiBvdXRBbmdsZTtcbiNlbmRpZlxuI2lmZGVmIEFOSU1BVEVTSEVFVFxub3V0IGZsb2F0IG91dENlbGxJbmRleDtcbiNpZmRlZiBBTklNQVRFU0hFRVRSQU5ET01TVEFSVFxub3V0IGZsb2F0IG91dENlbGxTdGFydE9mZnNldDtcbiNlbmRpZlxuI2VuZGlmXG4jaWZkZWYgTk9JU0Vcbm91dCB2ZWMzIG91dE5vaXNlQ29vcmRpbmF0ZXMxO291dCB2ZWMzIG91dE5vaXNlQ29vcmRpbmF0ZXMyO1xuI2VuZGlmXG4jaWZkZWYgU0laRUdSQURJRU5UU1xudW5pZm9ybSBzYW1wbGVyMkQgc2l6ZUdyYWRpZW50U2FtcGxlcjtcbiNlbmRpZiBcbiNpZmRlZiBBTkdVTEFSU1BFRURHUkFESUVOVFNcbnVuaWZvcm0gc2FtcGxlcjJEIGFuZ3VsYXJTcGVlZEdyYWRpZW50U2FtcGxlcjtcbiNlbmRpZiBcbiNpZmRlZiBWRUxPQ0lUWUdSQURJRU5UU1xudW5pZm9ybSBzYW1wbGVyMkQgdmVsb2NpdHlHcmFkaWVudFNhbXBsZXI7XG4jZW5kaWZcbiNpZmRlZiBMSU1JVFZFTE9DSVRZR1JBRElFTlRTXG51bmlmb3JtIHNhbXBsZXIyRCBsaW1pdFZlbG9jaXR5R3JhZGllbnRTYW1wbGVyO3VuaWZvcm0gZmxvYXQgbGltaXRWZWxvY2l0eURhbXBpbmc7XG4jZW5kaWZcbiNpZmRlZiBEUkFHR1JBRElFTlRTXG51bmlmb3JtIHNhbXBsZXIyRCBkcmFnR3JhZGllbnRTYW1wbGVyO1xuI2VuZGlmXG4jaWZkZWYgTk9JU0VcbnVuaWZvcm0gdmVjMyBub2lzZVN0cmVuZ3RoO3VuaWZvcm0gc2FtcGxlcjJEIG5vaXNlU2FtcGxlcjtcbiNlbmRpZlxuI2lmZGVmIEFOSU1BVEVTSEVFVFxudW5pZm9ybSB2ZWM0IGNlbGxJbmZvcztcbiNlbmRpZlxudmVjMyBnZXRSYW5kb21WZWMzKGZsb2F0IG9mZnNldCkge3JldHVybiB0ZXh0dXJlKHJhbmRvbVNhbXBsZXIyLHZlYzIoZmxvYXQoZ2xfVmVydGV4SUQpKm9mZnNldC9jdXJyZW50Q291bnQsMCkpLnJnYjt9XG52ZWM0IGdldFJhbmRvbVZlYzQoZmxvYXQgb2Zmc2V0KSB7cmV0dXJuIHRleHR1cmUocmFuZG9tU2FtcGxlcix2ZWMyKGZsb2F0KGdsX1ZlcnRleElEKSpvZmZzZXQvY3VycmVudENvdW50LDApKTt9XG52b2lkIG1haW4oKSB7ZmxvYXQgbmV3QWdlPWFnZSt0aW1lRGVsdGE7IFxuaWYgKG5ld0FnZT49bGlmZSAmJiBzdG9wRmFjdG9yICE9IDAuKSB7dmVjMyBuZXdQb3NpdGlvbjt2ZWMzIG5ld0RpcmVjdGlvbjt2ZWM0IHJhbmRvbXM9Z2V0UmFuZG9tVmVjNChzZWVkLngpO291dExpZmU9bGlmZVRpbWUueCsobGlmZVRpbWUueS1saWZlVGltZS54KSpyYW5kb21zLnI7b3V0QWdlPW5ld0FnZS1saWZlO291dFNlZWQ9c2VlZDtcbiNpZmRlZiBTSVpFR1JBRElFTlRTIFxub3V0U2l6ZS54PXRleHR1cmUoc2l6ZUdyYWRpZW50U2FtcGxlcix2ZWMyKDAsMCkpLnI7XG4jZWxzZVxub3V0U2l6ZS54PXNpemVSYW5nZS54KyhzaXplUmFuZ2UueS1zaXplUmFuZ2UueCkqcmFuZG9tcy5nO1xuI2VuZGlmXG5vdXRTaXplLnk9c2NhbGVSYW5nZS54KyhzY2FsZVJhbmdlLnktc2NhbGVSYW5nZS54KSpyYW5kb21zLmI7b3V0U2l6ZS56PXNjYWxlUmFuZ2Uueisoc2NhbGVSYW5nZS53LXNjYWxlUmFuZ2UueikqcmFuZG9tcy5hOyBcbiNpZm5kZWYgQ09MT1JHUkFESUVOVFNcbm91dENvbG9yPWNvbG9yMSsoY29sb3IyLWNvbG9yMSkqcmFuZG9tcy5iO1xuI2VuZGlmXG4jaWZuZGVmIEFOR1VMQVJTUEVFREdSQURJRU5UUyBcbm91dEFuZ2xlLnk9YW5nbGVSYW5nZS54KyhhbmdsZVJhbmdlLnktYW5nbGVSYW5nZS54KSpyYW5kb21zLmE7b3V0QW5nbGUueD1hbmdsZVJhbmdlLnorKGFuZ2xlUmFuZ2Uudy1hbmdsZVJhbmdlLnopKnJhbmRvbXMucjtcbiNlbHNlXG5vdXRBbmdsZT1hbmdsZVJhbmdlLnorKGFuZ2xlUmFuZ2Uudy1hbmdsZVJhbmdlLnopKnJhbmRvbXMucjtcbiNlbmRpZiBcbiNpZmRlZiBQT0lOVEVNSVRURVJcbnZlYzMgcmFuZG9tczI9Z2V0UmFuZG9tVmVjMyhzZWVkLnkpO3ZlYzMgcmFuZG9tczM9Z2V0UmFuZG9tVmVjMyhzZWVkLnopO25ld1Bvc2l0aW9uPXZlYzMoMCwwLDApO25ld0RpcmVjdGlvbj1kaXJlY3Rpb24xKyhkaXJlY3Rpb24yLWRpcmVjdGlvbjEpKnJhbmRvbXMzO1xuI2VsaWYgZGVmaW5lZChCT1hFTUlUVEVSKVxudmVjMyByYW5kb21zMj1nZXRSYW5kb21WZWMzKHNlZWQueSk7dmVjMyByYW5kb21zMz1nZXRSYW5kb21WZWMzKHNlZWQueik7bmV3UG9zaXRpb249bWluRW1pdEJveCsobWF4RW1pdEJveC1taW5FbWl0Qm94KSpyYW5kb21zMjtuZXdEaXJlY3Rpb249ZGlyZWN0aW9uMSsoZGlyZWN0aW9uMi1kaXJlY3Rpb24xKSpyYW5kb21zMzsgXG4jZWxpZiBkZWZpbmVkKEhFTUlTUEhFUklDRU1JVFRFUilcbnZlYzMgcmFuZG9tczI9Z2V0UmFuZG9tVmVjMyhzZWVkLnkpO3ZlYzMgcmFuZG9tczM9Z2V0UmFuZG9tVmVjMyhzZWVkLnopO2Zsb2F0IHBoaT0yLjAqUEkqcmFuZG9tczIueDtmbG9hdCB0aGV0YT1hY29zKDIuMCpyYW5kb21zMi55LTEuMCk7ZmxvYXQgcmFuZFg9Y29zKHBoaSkqc2luKHRoZXRhKTtmbG9hdCByYW5kWT1jb3ModGhldGEpO2Zsb2F0IHJhbmRaPXNpbihwaGkpKnNpbih0aGV0YSk7bmV3UG9zaXRpb249KHJhZGl1cy0ocmFkaXVzKnJhZGl1c1JhbmdlKnJhbmRvbXMyLnopKSp2ZWMzKHJhbmRYLGFicyhyYW5kWSkscmFuZFopO25ld0RpcmVjdGlvbj1uZXdQb3NpdGlvbitkaXJlY3Rpb25SYW5kb21pemVyKnJhbmRvbXMzOyBcbiNlbGlmIGRlZmluZWQoU1BIRVJFRU1JVFRFUilcbnZlYzMgcmFuZG9tczI9Z2V0UmFuZG9tVmVjMyhzZWVkLnkpO3ZlYzMgcmFuZG9tczM9Z2V0UmFuZG9tVmVjMyhzZWVkLnopO2Zsb2F0IHBoaT0yLjAqUEkqcmFuZG9tczIueDtmbG9hdCB0aGV0YT1hY29zKDIuMCpyYW5kb21zMi55LTEuMCk7ZmxvYXQgcmFuZFg9Y29zKHBoaSkqc2luKHRoZXRhKTtmbG9hdCByYW5kWT1jb3ModGhldGEpO2Zsb2F0IHJhbmRaPXNpbihwaGkpKnNpbih0aGV0YSk7bmV3UG9zaXRpb249KHJhZGl1cy0ocmFkaXVzKnJhZGl1c1JhbmdlKnJhbmRvbXMyLnopKSp2ZWMzKHJhbmRYLHJhbmRZLHJhbmRaKTtcbiNpZmRlZiBESVJFQ1RFRFNQSEVSRUVNSVRURVJcbm5ld0RpcmVjdGlvbj1ub3JtYWxpemUoZGlyZWN0aW9uMSsoZGlyZWN0aW9uMi1kaXJlY3Rpb24xKSpyYW5kb21zMyk7XG4jZWxzZVxubmV3RGlyZWN0aW9uPW5vcm1hbGl6ZShuZXdQb3NpdGlvbitkaXJlY3Rpb25SYW5kb21pemVyKnJhbmRvbXMzKTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChDWUxJTkRFUkVNSVRURVIpXG52ZWMzIHJhbmRvbXMyPWdldFJhbmRvbVZlYzMoc2VlZC55KTt2ZWMzIHJhbmRvbXMzPWdldFJhbmRvbVZlYzMoc2VlZC56KTtmbG9hdCB5UG9zPShyYW5kb21zMi54LTAuNSkqaGVpZ2h0O2Zsb2F0IGFuZ2xlPXJhbmRvbXMyLnkqUEkqMi47ZmxvYXQgaW52ZXJzZVJhZGl1c1JhbmdlU3F1YXJlZD0oKDEuLXJhZGl1c1JhbmdlKSooMS4tcmFkaXVzUmFuZ2UpKTtmbG9hdCBwb3NpdGlvblJhZGl1cz1yYWRpdXMqc3FydChpbnZlcnNlUmFkaXVzUmFuZ2VTcXVhcmVkKyhyYW5kb21zMi56KigxLi1pbnZlcnNlUmFkaXVzUmFuZ2VTcXVhcmVkKSkpO2Zsb2F0IHhQb3M9cG9zaXRpb25SYWRpdXMqY29zKGFuZ2xlKTtmbG9hdCB6UG9zPXBvc2l0aW9uUmFkaXVzKnNpbihhbmdsZSk7bmV3UG9zaXRpb249dmVjMyh4UG9zLHlQb3MselBvcyk7XG4jaWZkZWYgRElSRUNURURDWUxJTkRFUkVNSVRURVJcbm5ld0RpcmVjdGlvbj1kaXJlY3Rpb24xKyhkaXJlY3Rpb24yLWRpcmVjdGlvbjEpKnJhbmRvbXMzO1xuI2Vsc2VcbmFuZ2xlPWFuZ2xlKygocmFuZG9tczMueC0wLjUpKlBJKSpkaXJlY3Rpb25SYW5kb21pemVyO25ld0RpcmVjdGlvbj12ZWMzKGNvcyhhbmdsZSksKHJhbmRvbXMzLnktMC41KSpkaXJlY3Rpb25SYW5kb21pemVyLHNpbihhbmdsZSkpO25ld0RpcmVjdGlvbj1ub3JtYWxpemUobmV3RGlyZWN0aW9uKTtcbiNlbmRpZlxuI2VsaWYgZGVmaW5lZChDT05FRU1JVFRFUilcbnZlYzMgcmFuZG9tczI9Z2V0UmFuZG9tVmVjMyhzZWVkLnkpO2Zsb2F0IHM9Mi4wKlBJKnJhbmRvbXMyLng7XG4jaWZkZWYgQ09ORUVNSVRURVJTUEFXTlBPSU5UXG5mbG9hdCBoPTAuMDAwMTtcbiNlbHNlXG5mbG9hdCBoPXJhbmRvbXMyLnkqaGVpZ2h0Lnk7aD0xLi1oKmg7IFxuI2VuZGlmXG5mbG9hdCBsUmFkaXVzPXJhZGl1cy54LXJhZGl1cy54KnJhbmRvbXMyLnoqcmFkaXVzLnk7bFJhZGl1cz1sUmFkaXVzKmg7ZmxvYXQgcmFuZFg9bFJhZGl1cypzaW4ocyk7ZmxvYXQgcmFuZFo9bFJhZGl1cypjb3Mocyk7ZmxvYXQgcmFuZFk9aCAqaGVpZ2h0Lng7bmV3UG9zaXRpb249dmVjMyhyYW5kWCxyYW5kWSxyYW5kWik7IFxudmVjMyByYW5kb21zMz1nZXRSYW5kb21WZWMzKHNlZWQueik7XG4jaWZkZWYgRElSRUNURURDT05FRU1JVFRFUlxubmV3RGlyZWN0aW9uPWRpcmVjdGlvbjErKGRpcmVjdGlvbjItZGlyZWN0aW9uMSkqcmFuZG9tczM7XG4jZWxzZVxuaWYgKGFicyhjb3MoY29uZUFuZ2xlKSk9PTEuMCkge25ld0RpcmVjdGlvbj12ZWMzKDAuLDEuMCwwLik7fSBlbHNlIHtuZXdEaXJlY3Rpb249bm9ybWFsaXplKG5ld1Bvc2l0aW9uK2RpcmVjdGlvblJhbmRvbWl6ZXIqcmFuZG9tczMpOyB9XG4jZW5kaWZcbiNlbGlmIGRlZmluZWQoQ1VTVE9NRU1JVFRFUilcbm5ld1Bvc2l0aW9uPWluaXRpYWxQb3NpdGlvbjtvdXRJbml0aWFsUG9zaXRpb249aW5pdGlhbFBvc2l0aW9uO1xuI2Vsc2UgXG5uZXdQb3NpdGlvbj12ZWMzKDAuLDAuLDAuKTtuZXdEaXJlY3Rpb249Mi4wKihnZXRSYW5kb21WZWMzKHNlZWQudyktdmVjMygwLjUsMC41LDAuNSkpO1xuI2VuZGlmXG5mbG9hdCBwb3dlcj1lbWl0UG93ZXIueCsoZW1pdFBvd2VyLnktZW1pdFBvd2VyLngpKnJhbmRvbXMuYTtcbiNpZmRlZiBMT0NBTFxub3V0UG9zaXRpb249bmV3UG9zaXRpb247XG4jZWxzZVxub3V0UG9zaXRpb249KGVtaXR0ZXJXTSp2ZWM0KG5ld1Bvc2l0aW9uLDEuKSkueHl6O1xuI2VuZGlmXG4jaWZkZWYgQ1VTVE9NRU1JVFRFUlxub3V0RGlyZWN0aW9uPWRpcmVjdGlvbjtcbiNpZm5kZWYgQklMTEJPQVJEIFxub3V0SW5pdGlhbERpcmVjdGlvbj1kaXJlY3Rpb247XG4jZW5kaWZcbiNlbHNlXG4jaWZkZWYgTE9DQUxcbnZlYzMgaW5pdGlhbD1uZXdEaXJlY3Rpb247XG4jZWxzZSBcbnZlYzMgaW5pdGlhbD0oZW1pdHRlcldNKnZlYzQobmV3RGlyZWN0aW9uLDAuKSkueHl6O1xuI2VuZGlmXG5vdXREaXJlY3Rpb249aW5pdGlhbCpwb3dlcjtcbiNpZm5kZWYgQklMTEJPQVJEIFxub3V0SW5pdGlhbERpcmVjdGlvbj1pbml0aWFsO1xuI2VuZGlmXG4jZW5kaWZcbiNpZmRlZiBBTklNQVRFU0hFRVQgXG5vdXRDZWxsSW5kZXg9Y2VsbEluZm9zLng7XG4jaWZkZWYgQU5JTUFURVNIRUVUUkFORE9NU1RBUlRcbm91dENlbGxTdGFydE9mZnNldD1yYW5kb21zLmEqb3V0TGlmZTtcbiNlbmRpZiBcbiNlbmRpZlxuI2lmZGVmIE5PSVNFXG5vdXROb2lzZUNvb3JkaW5hdGVzMT1ub2lzZUNvb3JkaW5hdGVzMTtvdXROb2lzZUNvb3JkaW5hdGVzMj1ub2lzZUNvb3JkaW5hdGVzMjtcbiNlbmRpZlxufSBlbHNlIHtmbG9hdCBkaXJlY3Rpb25TY2FsZT10aW1lRGVsdGE7b3V0QWdlPW5ld0FnZTtmbG9hdCBhZ2VHcmFkaWVudD1uZXdBZ2UvbGlmZTtcbiNpZmRlZiBWRUxPQ0lUWUdSQURJRU5UU1xuZGlyZWN0aW9uU2NhbGUqPXRleHR1cmUodmVsb2NpdHlHcmFkaWVudFNhbXBsZXIsdmVjMihhZ2VHcmFkaWVudCwwKSkucjtcbiNlbmRpZlxuI2lmZGVmIERSQUdHUkFESUVOVFNcbmRpcmVjdGlvblNjYWxlKj0xLjAtdGV4dHVyZShkcmFnR3JhZGllbnRTYW1wbGVyLHZlYzIoYWdlR3JhZGllbnQsMCkpLnI7XG4jZW5kaWZcbiNpZiBkZWZpbmVkKENVU1RPTUVNSVRURVIpXG5vdXRQb3NpdGlvbj1wb3NpdGlvbisoZGlyZWN0aW9uLXBvc2l0aW9uKSphZ2VHcmFkaWVudDsgXG5vdXRJbml0aWFsUG9zaXRpb249aW5pdGlhbFBvc2l0aW9uO1xuI2Vsc2Vcbm91dFBvc2l0aW9uPXBvc2l0aW9uK2RpcmVjdGlvbipkaXJlY3Rpb25TY2FsZTtcbiNlbmRpZlxub3V0TGlmZT1saWZlO291dFNlZWQ9c2VlZDtcbiNpZm5kZWYgQ09MT1JHUkFESUVOVFMgXG5vdXRDb2xvcj1jb2xvcjtcbiNlbmRpZlxuI2lmZGVmIFNJWkVHUkFESUVOVFNcbm91dFNpemUueD10ZXh0dXJlKHNpemVHcmFkaWVudFNhbXBsZXIsdmVjMihhZ2VHcmFkaWVudCwwKSkucjtvdXRTaXplLnl6PXNpemUueXo7XG4jZWxzZVxub3V0U2l6ZT1zaXplO1xuI2VuZGlmIFxuI2lmbmRlZiBCSUxMQk9BUkQgXG5vdXRJbml0aWFsRGlyZWN0aW9uPWluaXRpYWxEaXJlY3Rpb247XG4jZW5kaWZcbiNpZmRlZiBDVVNUT01FTUlUVEVSXG5vdXREaXJlY3Rpb249ZGlyZWN0aW9uO1xuI2Vsc2VcbnZlYzMgdXBkYXRlZERpcmVjdGlvbj1kaXJlY3Rpb24rZ3Jhdml0eSp0aW1lRGVsdGE7XG4jaWZkZWYgRkxPV01BUFxudmVjNCBjbGlwU3BhY2U9KGZsb3dNYXBQcm9qZWN0aW9uKnZlYzQocG9zaXRpb24sMS4pKTt2ZWMzIG5kY1NwYWNlPWNsaXBTcGFjZS54eXovY2xpcFNwYWNlLnc7dmVjMiBmbG93TWFwVVY9bmRjU3BhY2UueHkqMC41KzAuNTt2ZWM0IGZsb3dNYXBWYWx1ZT10ZXh0dXJlKGZsb3dNYXBTYW1wbGVyLGZsb3dNYXBVVik7dmVjMyBmbG93TWFwRGlyZWN0aW9uPShmbG93TWFwVmFsdWUueHl6KjIuMC0xLjApKmZsb3dNYXBWYWx1ZS53O3VwZGF0ZWREaXJlY3Rpb24rPWZsb3dNYXBEaXJlY3Rpb24qdGltZURlbHRhKmZsb3dNYXBTdHJlbmd0aDtcbiNlbmRpZlxuI2lmZGVmIExJTUlUVkVMT0NJVFlHUkFESUVOVFNcbmZsb2F0IGxpbWl0VmVsb2NpdHk9dGV4dHVyZShsaW1pdFZlbG9jaXR5R3JhZGllbnRTYW1wbGVyLHZlYzIoYWdlR3JhZGllbnQsMCkpLnI7ZmxvYXQgY3VycmVudFZlbG9jaXR5PWxlbmd0aCh1cGRhdGVkRGlyZWN0aW9uKTtpZiAoY3VycmVudFZlbG9jaXR5PmxpbWl0VmVsb2NpdHkpIHt1cGRhdGVkRGlyZWN0aW9uPXVwZGF0ZWREaXJlY3Rpb24qbGltaXRWZWxvY2l0eURhbXBpbmc7fVxuI2VuZGlmXG5vdXREaXJlY3Rpb249dXBkYXRlZERpcmVjdGlvbjtcbiNpZmRlZiBOT0lTRVxuZmxvYXQgZmV0Y2hlZFI9dGV4dHVyZShub2lzZVNhbXBsZXIsdmVjMihub2lzZUNvb3JkaW5hdGVzMS54LG5vaXNlQ29vcmRpbmF0ZXMxLnkpKnZlYzIoMC41KSt2ZWMyKDAuNSkpLnI7ZmxvYXQgZmV0Y2hlZEc9dGV4dHVyZShub2lzZVNhbXBsZXIsdmVjMihub2lzZUNvb3JkaW5hdGVzMS56LG5vaXNlQ29vcmRpbmF0ZXMyLngpKnZlYzIoMC41KSt2ZWMyKDAuNSkpLnI7ZmxvYXQgZmV0Y2hlZEI9dGV4dHVyZShub2lzZVNhbXBsZXIsdmVjMihub2lzZUNvb3JkaW5hdGVzMi55LG5vaXNlQ29vcmRpbmF0ZXMyLnopKnZlYzIoMC41KSt2ZWMyKDAuNSkpLnI7dmVjMyBmb3JjZT12ZWMzKDIuKmZldGNoZWRSLTEuLDIuKmZldGNoZWRHLTEuLDIuKmZldGNoZWRCLTEuKSpub2lzZVN0cmVuZ3RoO291dERpcmVjdGlvbj1vdXREaXJlY3Rpb24rZm9yY2UqdGltZURlbHRhO291dE5vaXNlQ29vcmRpbmF0ZXMxPW5vaXNlQ29vcmRpbmF0ZXMxO291dE5vaXNlQ29vcmRpbmF0ZXMyPW5vaXNlQ29vcmRpbmF0ZXMyO1xuI2VuZGlmIFxuI2VuZGlmIFxuI2lmZGVmIEFOR1VMQVJTUEVFREdSQURJRU5UU1xuZmxvYXQgYW5ndWxhclNwZWVkPXRleHR1cmUoYW5ndWxhclNwZWVkR3JhZGllbnRTYW1wbGVyLHZlYzIoYWdlR3JhZGllbnQsMCkpLnI7b3V0QW5nbGU9YW5nbGUrYW5ndWxhclNwZWVkKnRpbWVEZWx0YTtcbiNlbHNlXG5vdXRBbmdsZT12ZWMyKGFuZ2xlLngrYW5nbGUueSp0aW1lRGVsdGEsYW5nbGUueSk7XG4jZW5kaWZcbiNpZmRlZiBBTklNQVRFU0hFRVQgXG5mbG9hdCBvZmZzZXRBZ2U9b3V0QWdlO2Zsb2F0IGRpc3Q9Y2VsbEluZm9zLnktY2VsbEluZm9zLng7XG4jaWZkZWYgQU5JTUFURVNIRUVUUkFORE9NU1RBUlRcbm91dENlbGxTdGFydE9mZnNldD1jZWxsU3RhcnRPZmZzZXQ7b2Zmc2V0QWdlKz1jZWxsU3RhcnRPZmZzZXQ7XG4jZWxzZVxuZmxvYXQgY2VsbFN0YXJ0T2Zmc2V0PTAuO1xuI2VuZGlmIFxuZmxvYXQgcmF0aW89MC47aWYgKGNlbGxJbmZvcy53PT0xLjApIHtyYXRpbz1jbGFtcChtb2QoY2VsbFN0YXJ0T2Zmc2V0K2NlbGxJbmZvcy56Km9mZnNldEFnZSxsaWZlKS9saWZlLDAuLDEuMCk7fVxuZWxzZSB7cmF0aW89Y2xhbXAoY2VsbFN0YXJ0T2Zmc2V0K2NlbGxJbmZvcy56Km9mZnNldEFnZS9saWZlLDAuLDEuMCk7fVxub3V0Q2VsbEluZGV4PWZsb2F0KGludChjZWxsSW5mb3MueCtyYXRpbypkaXN0KSk7XG4jZW5kaWZcbn19YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGdwdVVwZGF0ZVBhcnRpY2xlc1ZlcnRleFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCJpbXBvcnQgeyBBcmNSb3RhdGVDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2FyY1JvdGF0ZUNhbWVyYVwiO1xuaW1wb3J0IHsgVW5pdmVyc2FsQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy91bml2ZXJzYWxDYW1lcmFcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9wcmltaXRpdmVzL2J1dHRvblwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdG9rZW5zIH0gZnJvbSBcIkBmbHVlbnR1aS9yZWFjdC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL2lucHV0UHJvcGVydHlMaW5lXCI7XG5pbXBvcnQgeyBTcGluQnV0dG9uUHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy9zcGluQnV0dG9uUHJvcGVydHlMaW5lXCI7XG5pbXBvcnQgeyBWZWN0b3IzUHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy92ZWN0b3JQcm9wZXJ0eUxpbmVcIjtcbmltcG9ydCB7IENoZWNrYm94UHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy9jaGVja2JveFByb3BlcnR5TGluZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NQb3BvdmVyIH0gZnJvbSBcIi4vc2V0dGluZ3NQb3BvdmVyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHNlY3Rpb246IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbE0sXG4gICAgfSxcbiAgICByb3c6IHsgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI0cHhcIiB9LFxufSk7XG5cbnR5cGUgQ2FtZXJhc0NvbnRlbnRQcm9wcyA9IHtcbiAgICBzY2VuZTogU2NlbmU7XG59O1xuXG4vKipcbiAqIENhbWVyYXMgY29udGVudCBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIENvbXBvbmVudCBwcm9wc1xuICogQHJldHVybnMgUmVhY3QgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCBDYW1lcmFzQ29udGVudDogRnVuY3Rpb25Db21wb25lbnQ8Q2FtZXJhc0NvbnRlbnRQcm9wcz4gPSAoeyBzY2VuZSB9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgLy8gQXJjUm90YXRlIENhbWVyYSBzdGF0ZVxuICAgIGNvbnN0IFthcmNSb3RhdGVDYW1lcmFOYW1lLCBzZXRBcmNSb3RhdGVDYW1lcmFOYW1lXSA9IHVzZVN0YXRlKFwiQXJjUm90YXRlIENhbWVyYVwiKTtcbiAgICBjb25zdCBbYXJjUm90YXRlQ2FtZXJhVGFyZ2V0LCBzZXRBcmNSb3RhdGVDYW1lcmFUYXJnZXRdID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoMCwgMCwgMCkpO1xuICAgIGNvbnN0IFthcmNSb3RhdGVDYW1lcmFSYWRpdXMsIHNldEFyY1JvdGF0ZUNhbWVyYVJhZGl1c10gPSB1c2VTdGF0ZSgxMCk7XG4gICAgY29uc3QgW2FyY1JvdGF0ZUNhbWVyYUFscGhhLCBzZXRBcmNSb3RhdGVDYW1lcmFBbHBoYV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbYXJjUm90YXRlQ2FtZXJhQmV0YSwgc2V0QXJjUm90YXRlQ2FtZXJhQmV0YV0gPSB1c2VTdGF0ZSg0NSk7XG4gICAgY29uc3QgW2FyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnMsIHNldEFyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gVW5pdmVyc2FsIENhbWVyYSBzdGF0ZVxuICAgIGNvbnN0IFt1bml2ZXJzYWxDYW1lcmFOYW1lLCBzZXRVbml2ZXJzYWxDYW1lcmFOYW1lXSA9IHVzZVN0YXRlKFwiVW5pdmVyc2FsIENhbWVyYVwiKTtcbiAgICBjb25zdCBbdW5pdmVyc2FsQ2FtZXJhUG9zaXRpb24sIHNldFVuaXZlcnNhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKG5ldyBWZWN0b3IzKDAsIDEsIC0xMCkpO1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlQXJjUm90YXRlQ2FtZXJhID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbHBoYSA9IGFyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnMgPyBhcmNSb3RhdGVDYW1lcmFBbHBoYSA6IChhcmNSb3RhdGVDYW1lcmFBbHBoYSAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICBjb25zdCBiZXRhID0gYXJjUm90YXRlQ2FtZXJhVXNlUmFkaWFucyA/IGFyY1JvdGF0ZUNhbWVyYUJldGEgOiAoYXJjUm90YXRlQ2FtZXJhQmV0YSAqIE1hdGguUEkpIC8gMTgwO1xuXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBBcmNSb3RhdGVDYW1lcmEoYXJjUm90YXRlQ2FtZXJhTmFtZSwgYWxwaGEsIGJldGEsIGFyY1JvdGF0ZUNhbWVyYVJhZGl1cywgYXJjUm90YXRlQ2FtZXJhVGFyZ2V0LCBzY2VuZSk7XG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHNjZW5lLmdldEVuZ2luZSgpLmdldFJlbmRlcmluZ0NhbnZhcygpLCB0cnVlKTtcbiAgICAgICAgaWYgKCFzY2VuZS5hY3RpdmVDYW1lcmEpIHtcbiAgICAgICAgICAgIHNjZW5lLmFjdGl2ZUNhbWVyYSA9IGNhbWVyYTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVVbml2ZXJzYWxDYW1lcmEgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBVbml2ZXJzYWxDYW1lcmEodW5pdmVyc2FsQ2FtZXJhTmFtZSwgdW5pdmVyc2FsQ2FtZXJhUG9zaXRpb24sIHNjZW5lKTtcbiAgICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2woc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyaW5nQ2FudmFzKCksIHRydWUpO1xuICAgICAgICBpZiAoIXNjZW5lLmFjdGl2ZUNhbWVyYSkge1xuICAgICAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhID0gY2FtZXJhO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgey8qIEFyY1JvdGF0ZSBDYW1lcmEgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQXJjUm90YXRlQ2FtZXJhfSBsYWJlbD1cIkFyY1JvdGF0ZSBDYW1lcmFcIiAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e2FyY1JvdGF0ZUNhbWVyYU5hbWV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEFyY1JvdGF0ZUNhbWVyYU5hbWUodmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VmVjdG9yM1Byb3BlcnR5TGluZSBsYWJlbD1cIlRhcmdldFwiIHZhbHVlPXthcmNSb3RhdGVDYW1lcmFUYXJnZXR9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEFyY1JvdGF0ZUNhbWVyYVRhcmdldCh2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e2FyY1JvdGF0ZUNhbWVyYVJhZGl1c30gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXJjUm90YXRlQ2FtZXJhUmFkaXVzKHZhbHVlKX0gbWluPXswLjF9IG1heD17MTAwMH0gc3RlcD17MC41fSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BBbHBoYSAke2FyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnMgPyBcIihyYWQpXCIgOiBcIihkZWcpXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthcmNSb3RhdGVDYW1lcmFBbHBoYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEFyY1JvdGF0ZUNhbWVyYUFscGhhKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17YXJjUm90YXRlQ2FtZXJhVXNlUmFkaWFucyA/IC1NYXRoLlBJICogMiA6IC0zNjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e2FyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnMgPyBNYXRoLlBJICogMiA6IDM2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2FyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnMgPyAwLjEgOiA1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BCZXRhICR7YXJjUm90YXRlQ2FtZXJhVXNlUmFkaWFucyA/IFwiKHJhZClcIiA6IFwiKGRlZylcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FyY1JvdGF0ZUNhbWVyYUJldGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBcmNSb3RhdGVDYW1lcmFCZXRhKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17YXJjUm90YXRlQ2FtZXJhVXNlUmFkaWFucyA/IDAgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXthcmNSb3RhdGVDYW1lcmFVc2VSYWRpYW5zID8gTWF0aC5QSSA6IDE4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2FyY1JvdGF0ZUNhbWVyYVVzZVJhZGlhbnMgPyAwLjEgOiA1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hQcm9wZXJ0eUxpbmUgbGFiZWw9XCJVc2UgUmFkaWFuc1wiIHZhbHVlPXthcmNSb3RhdGVDYW1lcmFVc2VSYWRpYW5zfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBcmNSb3RhdGVDYW1lcmFVc2VSYWRpYW5zKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUFyY1JvdGF0ZUNhbWVyYX0gbGFiZWw9XCJDcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBVbml2ZXJzYWwgQ2FtZXJhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVVuaXZlcnNhbENhbWVyYX0gbGFiZWw9XCJVbml2ZXJzYWwgQ2FtZXJhXCIgLz5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0UHJvcGVydHlMaW5lIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXt1bml2ZXJzYWxDYW1lcmFOYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRVbml2ZXJzYWxDYW1lcmFOYW1lKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZlY3RvcjNQcm9wZXJ0eUxpbmUgbGFiZWw9XCJQb3NpdGlvblwiIHZhbHVlPXt1bml2ZXJzYWxDYW1lcmFQb3NpdGlvbn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VW5pdmVyc2FsQ2FtZXJhUG9zaXRpb24odmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ3JlYXRlVW5pdmVyc2FsQ2FtZXJhfSBsYWJlbD1cIkNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBQb2ludExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3BvaW50TGlnaHRcIjtcbmltcG9ydCB7IERpcmVjdGlvbmFsTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvZGlyZWN0aW9uYWxMaWdodFwiO1xuaW1wb3J0IHsgU3BvdExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3Nwb3RMaWdodFwiO1xuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L3ByaW1pdGl2ZXMvYnV0dG9uXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB0b2tlbnMgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dFByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvaW5wdXRQcm9wZXJ0eUxpbmVcIjtcbmltcG9ydCB7IFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL3NwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcIjtcbmltcG9ydCB7IFZlY3RvcjNQcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL3ZlY3RvclByb3BlcnR5TGluZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NQb3BvdmVyIH0gZnJvbSBcIi4vc2V0dGluZ3NQb3BvdmVyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHNlY3Rpb246IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbE0sXG4gICAgfSxcbiAgICByb3c6IHsgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI0cHhcIiB9LFxufSk7XG5cbnR5cGUgTGlnaHRzQ29udGVudFByb3BzID0ge1xuICAgIHNjZW5lOiBTY2VuZTtcbn07XG5cbi8qKlxuICogTGlnaHRzIGNvbnRlbnQgY29tcG9uZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBDb21wb25lbnQgcHJvcHNcbiAqIEByZXR1cm5zIFJlYWN0IGNvbXBvbmVudFxuICovXG5leHBvcnQgY29uc3QgTGlnaHRzQ29udGVudDogRnVuY3Rpb25Db21wb25lbnQ8TGlnaHRzQ29udGVudFByb3BzPiA9ICh7IHNjZW5lIH0pID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICAvLyBQb2ludCBMaWdodCBzdGF0ZVxuICAgIGNvbnN0IFtwb2ludExpZ2h0TmFtZSwgc2V0UG9pbnRMaWdodE5hbWVdID0gdXNlU3RhdGUoXCJQb2ludCBMaWdodFwiKTtcbiAgICBjb25zdCBbcG9pbnRMaWdodFBvc2l0aW9uLCBzZXRQb2ludExpZ2h0UG9zaXRpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoMCwgNSwgMCkpO1xuXG4gICAgLy8gRGlyZWN0aW9uYWwgTGlnaHQgc3RhdGVcbiAgICBjb25zdCBbZGlyZWN0aW9uYWxMaWdodE5hbWUsIHNldERpcmVjdGlvbmFsTGlnaHROYW1lXSA9IHVzZVN0YXRlKFwiRGlyZWN0aW9uYWwgTGlnaHRcIik7XG4gICAgY29uc3QgW2RpcmVjdGlvbmFsTGlnaHREaXJlY3Rpb24sIHNldERpcmVjdGlvbmFsTGlnaHREaXJlY3Rpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoMSwgLTEsIDApKTtcblxuICAgIC8vIFNwb3RsaWdodCBzdGF0ZVxuICAgIGNvbnN0IFtzcG90bGlnaHROYW1lLCBzZXRTcG90bGlnaHROYW1lXSA9IHVzZVN0YXRlKFwiU3BvdGxpZ2h0XCIpO1xuICAgIGNvbnN0IFtzcG90bGlnaHRQb3NpdGlvbiwgc2V0U3BvdGxpZ2h0UG9zaXRpb25dID0gdXNlU3RhdGUobmV3IFZlY3RvcjMoMCwgNSwgMCkpO1xuICAgIGNvbnN0IFtzcG90bGlnaHREaXJlY3Rpb24sIHNldFNwb3RsaWdodERpcmVjdGlvbl0gPSB1c2VTdGF0ZShuZXcgVmVjdG9yMygwLCAtMSwgMCkpO1xuICAgIGNvbnN0IFtzcG90bGlnaHRBbmdsZSwgc2V0U3BvdGxpZ2h0QW5nbGVdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW3Nwb3RsaWdodEV4cG9uZW50LCBzZXRTcG90bGlnaHRFeHBvbmVudF0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVBvaW50TGlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFBvaW50TGlnaHQocG9pbnRMaWdodE5hbWUsIHBvaW50TGlnaHRQb3NpdGlvbiwgc2NlbmUpO1xuICAgICAgICBsaWdodC5pbnRlbnNpdHkgPSAxLjA7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZURpcmVjdGlvbmFsTGlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpckxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoZGlyZWN0aW9uYWxMaWdodE5hbWUsIGRpcmVjdGlvbmFsTGlnaHREaXJlY3Rpb24sIHNjZW5lKTtcbiAgICAgICAgZGlyTGlnaHQuaW50ZW5zaXR5ID0gMS4wO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVTcG90bGlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwb3RsaWdodCA9IG5ldyBTcG90TGlnaHQoc3BvdGxpZ2h0TmFtZSwgc3BvdGxpZ2h0UG9zaXRpb24sIHNwb3RsaWdodERpcmVjdGlvbiwgc3BvdGxpZ2h0QW5nbGUsIHNwb3RsaWdodEV4cG9uZW50LCBzY2VuZSk7XG4gICAgICAgIHNwb3RsaWdodC5pbnRlbnNpdHkgPSAxLjA7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgey8qIFBvaW50IExpZ2h0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVBvaW50TGlnaHR9IGxhYmVsPVwiUG9pbnQgTGlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e3BvaW50TGlnaHROYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRQb2ludExpZ2h0TmFtZSh2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWZWN0b3IzUHJvcGVydHlMaW5lIGxhYmVsPVwiUG9zaXRpb25cIiB2YWx1ZT17cG9pbnRMaWdodFBvc2l0aW9ufSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRQb2ludExpZ2h0UG9zaXRpb24odmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ3JlYXRlUG9pbnRMaWdodH0gbGFiZWw9XCJDcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBEaXJlY3Rpb25hbCBMaWdodCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVEaXJlY3Rpb25hbExpZ2h0fSBsYWJlbD1cIkRpcmVjdGlvbmFsIExpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0UHJvcGVydHlMaW5lIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXtkaXJlY3Rpb25hbExpZ2h0TmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0RGlyZWN0aW9uYWxMaWdodE5hbWUodmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VmVjdG9yM1Byb3BlcnR5TGluZSBsYWJlbD1cIkRpcmVjdGlvblwiIHZhbHVlPXtkaXJlY3Rpb25hbExpZ2h0RGlyZWN0aW9ufSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXREaXJlY3Rpb25hbExpZ2h0RGlyZWN0aW9uKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZURpcmVjdGlvbmFsTGlnaHR9IGxhYmVsPVwiQ3JlYXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L1NldHRpbmdzUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU3BvdGxpZ2h0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVNwb3RsaWdodH0gbGFiZWw9XCJTcG90bGlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e3Nwb3RsaWdodE5hbWV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFNwb3RsaWdodE5hbWUodmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VmVjdG9yM1Byb3BlcnR5TGluZSBsYWJlbD1cIlBvc2l0aW9uXCIgdmFsdWU9e3Nwb3RsaWdodFBvc2l0aW9ufSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTcG90bGlnaHRQb3NpdGlvbih2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWZWN0b3IzUHJvcGVydHlMaW5lIGxhYmVsPVwiRGlyZWN0aW9uXCIgdmFsdWU9e3Nwb3RsaWdodERpcmVjdGlvbn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U3BvdGxpZ2h0RGlyZWN0aW9uKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJBbmdsZVwiIHZhbHVlPXtzcG90bGlnaHRBbmdsZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U3BvdGxpZ2h0QW5nbGUodmFsdWUpfSBtaW49ezB9IG1heD17TWF0aC5QSX0gc3RlcD17MC4xfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZSBsYWJlbD1cIkV4cG9uZW50XCIgdmFsdWU9e3Nwb3RsaWdodEV4cG9uZW50fSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTcG90bGlnaHRFeHBvbmVudCh2YWx1ZSl9IG1pbj17MH0gbWF4PXsxMH0gc3RlcD17MC4xfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ3JlYXRlU3BvdGxpZ2h0fSBsYWJlbD1cIkNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBOb2RlTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvTm9kZS9ub2RlTWF0ZXJpYWxcIjtcbmltcG9ydCB7IFBCUk1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1BCUi9wYnJNYXRlcmlhbFwiO1xuaW1wb3J0IHsgU3RhbmRhcmRNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zdGFuZGFyZE1hdGVyaWFsXCI7XG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L3ByaW1pdGl2ZXMvYnV0dG9uXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB0b2tlbnMgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dFByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvaW5wdXRQcm9wZXJ0eUxpbmVcIjtcbmltcG9ydCB7IFNldHRpbmdzUG9wb3ZlciB9IGZyb20gXCIuL3NldHRpbmdzUG9wb3ZlclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICBzZWN0aW9uOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICByb3dHYXA6IHRva2Vucy5zcGFjaW5nVmVydGljYWxNLFxuICAgIH0sXG4gICAgcm93OiB7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IFwiNHB4XCIgfSxcbn0pO1xuXG50eXBlIE1hdGVyaWFsc0NvbnRlbnRQcm9wcyA9IHtcbiAgICBzY2VuZTogU2NlbmU7XG59O1xuXG4vKipcbiAqIE1hdGVyaWFscyBjb250ZW50IGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gQ29tcG9uZW50IHByb3BzXG4gKiBAcmV0dXJucyBSZWFjdCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IE1hdGVyaWFsc0NvbnRlbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PE1hdGVyaWFsc0NvbnRlbnRQcm9wcz4gPSAoeyBzY2VuZSB9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgLy8gTm9kZSBNYXRlcmlhbCBzdGF0ZVxuICAgIGNvbnN0IFtub2RlTWF0ZXJpYWxOYW1lLCBzZXROb2RlTWF0ZXJpYWxOYW1lXSA9IHVzZVN0YXRlKFwiTm9kZSBNYXRlcmlhbFwiKTtcbiAgICBjb25zdCBbbm9kZU1hdGVyaWFsU25pcHBldElkLCBzZXROb2RlTWF0ZXJpYWxTbmlwcGV0SWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICAvLyBQQlIgTWF0ZXJpYWwgc3RhdGVcbiAgICBjb25zdCBbcGJyTWF0ZXJpYWxOYW1lLCBzZXRQYnJNYXRlcmlhbE5hbWVdID0gdXNlU3RhdGUoXCJQQlIgTWF0ZXJpYWxcIik7XG5cbiAgICAvLyBTdGFuZGFyZCBNYXRlcmlhbCBzdGF0ZVxuICAgIGNvbnN0IFtzdGFuZGFyZE1hdGVyaWFsTmFtZSwgc2V0U3RhbmRhcmRNYXRlcmlhbE5hbWVdID0gdXNlU3RhdGUoXCJTdGFuZGFyZCBNYXRlcmlhbFwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZU5vZGVNYXRlcmlhbEFzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAobm9kZU1hdGVyaWFsU25pcHBldElkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRlcmlhbCA9IGF3YWl0IE5vZGVNYXRlcmlhbC5QYXJzZUZyb21TbmlwcGV0QXN5bmMobm9kZU1hdGVyaWFsU25pcHBldElkLCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgbm9kZU1hdGVyaWFsLm5hbWUgPSBub2RlTWF0ZXJpYWxOYW1lO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGxvYWQgTm9kZSBNYXRlcmlhbCBmcm9tIHNuaXBwZXQ6IFwiICsgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0ZXJpYWwgPSBuZXcgTm9kZU1hdGVyaWFsKG5vZGVNYXRlcmlhbE5hbWUsIHNjZW5lKTtcbiAgICAgICAgICAgIG5vZGVNYXRlcmlhbC5idWlsZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVBCUk1hdGVyaWFsID0gKCkgPT4ge1xuICAgICAgICBuZXcgUEJSTWF0ZXJpYWwocGJyTWF0ZXJpYWxOYW1lLCBzY2VuZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVN0YW5kYXJkTWF0ZXJpYWwgPSAoKSA9PiB7XG4gICAgICAgIG5ldyBTdGFuZGFyZE1hdGVyaWFsKHN0YW5kYXJkTWF0ZXJpYWxOYW1lLCBzY2VuZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgey8qIE5vZGUgTWF0ZXJpYWwgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlTm9kZU1hdGVyaWFsQXN5bmN9IGxhYmVsPVwiTm9kZSBNYXRlcmlhbFwiIC8+XG4gICAgICAgICAgICAgICAgPFNldHRpbmdzUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFByb3BlcnR5TGluZSBsYWJlbD1cIk5hbWVcIiB2YWx1ZT17bm9kZU1hdGVyaWFsTmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Tm9kZU1hdGVyaWFsTmFtZSh2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJTbmlwcGV0IElEXCIgdmFsdWU9e25vZGVNYXRlcmlhbFNuaXBwZXRJZH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Tm9kZU1hdGVyaWFsU25pcHBldElkKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZU5vZGVNYXRlcmlhbEFzeW5jfSBsYWJlbD1cIkNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFBCUiBNYXRlcmlhbCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVQQlJNYXRlcmlhbH0gbGFiZWw9XCJQQlIgTWF0ZXJpYWxcIiAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e3Bick1hdGVyaWFsTmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UGJyTWF0ZXJpYWxOYW1lKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVBCUk1hdGVyaWFsfSBsYWJlbD1cIkNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFN0YW5kYXJkIE1hdGVyaWFsICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVN0YW5kYXJkTWF0ZXJpYWx9IGxhYmVsPVwiU3RhbmRhcmQgTWF0ZXJpYWxcIiAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e3N0YW5kYXJkTWF0ZXJpYWxOYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRTdGFuZGFyZE1hdGVyaWFsTmFtZSh2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVTdGFuZGFyZE1hdGVyaWFsfSBsYWJlbD1cIkNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBNZXNoQnVpbGRlciB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB0eXBlIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L3ByaW1pdGl2ZXMvYnV0dG9uXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB0b2tlbnMgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFRleHRJbnB1dFByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvaW5wdXRQcm9wZXJ0eUxpbmVcIjtcbmltcG9ydCB7IFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL3NwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcIjtcbmltcG9ydCB7IEZpbGVzSW5wdXQgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVzSW5wdXRcIjtcbmltcG9ydCB7IFNldHRpbmdzUG9wb3ZlciB9IGZyb20gXCIuL3NldHRpbmdzUG9wb3ZlclwiO1xuaW1wb3J0IHsgQ2hlY2tib3hQcm9wZXJ0eUxpbmUgfSBmcm9tIFwic2hhcmVkLXVpLWNvbXBvbmVudHMvZmx1ZW50L2hvYy9wcm9wZXJ0eUxpbmVzL2NoZWNrYm94UHJvcGVydHlMaW5lXCI7XG5pbXBvcnQgdHlwZSB7IEFyY1JvdGF0ZUNhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvYXJjUm90YXRlQ2FtZXJhXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHNlY3Rpb246IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHJvd0dhcDogdG9rZW5zLnNwYWNpbmdWZXJ0aWNhbE0sXG4gICAgfSxcbiAgICByb3c6IHsgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI0cHhcIiB9LFxufSk7XG5cbmNvbnN0IFNldENhbWVyYSA9IGZ1bmN0aW9uIChzY2VuZTogU2NlbmUpIHtcbiAgICBjb25zdCBjYW1lcmEgPSBzY2VuZS5hY3RpdmVDYW1lcmEgYXMgQXJjUm90YXRlQ2FtZXJhO1xuICAgIGlmIChjYW1lcmEgJiYgY2FtZXJhLnJhZGl1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNhbWVyYS5yYWRpdXMgPSA1O1xuICAgIH1cbn07XG5cbnR5cGUgU3BoZXJlUGFyYW1zID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzZWdtZW50czogbnVtYmVyO1xuICAgIGRpYW1ldGVyOiBudW1iZXI7XG4gICAgZGlhbWV0ZXJYOiBudW1iZXI7XG4gICAgZGlhbWV0ZXJZOiBudW1iZXI7XG4gICAgZGlhbWV0ZXJaOiBudW1iZXI7XG4gICAgYXJjOiBudW1iZXI7XG4gICAgc2xpY2U6IG51bWJlcjtcbiAgICB1bmlmb3JtOiBib29sZWFuO1xufTtcblxudHlwZSBCb3hQYXJhbXMgPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGRlcHRoOiBudW1iZXI7XG59O1xuXG50eXBlIEN5bGluZGVyUGFyYW1zID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBkaWFtZXRlclRvcDogbnVtYmVyO1xuICAgIGRpYW1ldGVyQm90dG9tOiBudW1iZXI7XG4gICAgZGlhbWV0ZXI6IG51bWJlcjtcbiAgICB0ZXNzZWxsYXRpb246IG51bWJlcjtcbiAgICBzdWJkaXZpc2lvbnM6IG51bWJlcjtcbiAgICBhcmM6IG51bWJlcjtcbn07XG5cbnR5cGUgQ29uZVBhcmFtcyA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgZGlhbWV0ZXI6IG51bWJlcjtcbiAgICBkaWFtZXRlclRvcDogbnVtYmVyO1xuICAgIGRpYW1ldGVyQm90dG9tOiBudW1iZXI7XG4gICAgdGVzc2VsbGF0aW9uOiBudW1iZXI7XG4gICAgc3ViZGl2aXNpb25zOiBudW1iZXI7XG4gICAgYXJjOiBudW1iZXI7XG59O1xuXG50eXBlIEdyb3VuZFBhcmFtcyA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBzdWJkaXZpc2lvbnM6IG51bWJlcjtcbiAgICBzdWJkaXZpc2lvbnNYOiBudW1iZXI7XG4gICAgc3ViZGl2aXNpb25zWTogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IE1lc2hlc0NvbnRlbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PHsgc2NlbmU6IFNjZW5lIH0+ID0gKHsgc2NlbmUgfSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBbc3BoZXJlUGFyYW1zLCBzZXRTcGhlcmVQYXJhbXNdID0gdXNlU3RhdGU8U3BoZXJlUGFyYW1zPih7XG4gICAgICAgIG5hbWU6IFwiU3BoZXJlXCIsXG4gICAgICAgIHNlZ21lbnRzOiAzMixcbiAgICAgICAgZGlhbWV0ZXI6IDEsXG4gICAgICAgIGRpYW1ldGVyWDogMSxcbiAgICAgICAgZGlhbWV0ZXJZOiAxLFxuICAgICAgICBkaWFtZXRlclo6IDEsXG4gICAgICAgIGFyYzogMSxcbiAgICAgICAgc2xpY2U6IDEsXG4gICAgICAgIHVuaWZvcm06IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVTcGhlcmVQYXJhbUNoYW5nZSA9IDxLIGV4dGVuZHMga2V5b2YgU3BoZXJlUGFyYW1zPihrZXk6IEssIHZhbHVlOiBTcGhlcmVQYXJhbXNbS10pID0+IHtcbiAgICAgICAgc2V0U3BoZXJlUGFyYW1zKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbYm94UGFyYW1zLCBzZXRCb3hQYXJhbXNdID0gdXNlU3RhdGU8Qm94UGFyYW1zPih7XG4gICAgICAgIG5hbWU6IFwiQm94XCIsXG4gICAgICAgIHNpemU6IDEsXG4gICAgICAgIHdpZHRoOiAxLFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQm94UGFyYW1DaGFuZ2UgPSA8SyBleHRlbmRzIGtleW9mIEJveFBhcmFtcz4oa2V5OiBLLCB2YWx1ZTogQm94UGFyYW1zW0tdKSA9PiB7XG4gICAgICAgIHNldEJveFBhcmFtcygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW2N5bGluZGVyUGFyYW1zLCBzZXRDeWxpbmRlclBhcmFtc10gPSB1c2VTdGF0ZTxDeWxpbmRlclBhcmFtcz4oe1xuICAgICAgICBuYW1lOiBcIkN5bGluZGVyXCIsXG4gICAgICAgIGhlaWdodDogMixcbiAgICAgICAgZGlhbWV0ZXJUb3A6IDEsXG4gICAgICAgIGRpYW1ldGVyQm90dG9tOiAxLFxuICAgICAgICBkaWFtZXRlcjogMSxcbiAgICAgICAgdGVzc2VsbGF0aW9uOiAzMixcbiAgICAgICAgc3ViZGl2aXNpb25zOiAxLFxuICAgICAgICBhcmM6IDEsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDeWxpbmRlclBhcmFtQ2hhbmdlID0gPEsgZXh0ZW5kcyBrZXlvZiBDeWxpbmRlclBhcmFtcz4oa2V5OiBLLCB2YWx1ZTogQ3lsaW5kZXJQYXJhbXNbS10pID0+IHtcbiAgICAgICAgc2V0Q3lsaW5kZXJQYXJhbXMoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtjb25lUGFyYW1zLCBzZXRDb25lUGFyYW1zXSA9IHVzZVN0YXRlPENvbmVQYXJhbXM+KHtcbiAgICAgICAgbmFtZTogXCJDb25lXCIsXG4gICAgICAgIGhlaWdodDogMixcbiAgICAgICAgZGlhbWV0ZXI6IDEsXG4gICAgICAgIGRpYW1ldGVyVG9wOiAwLFxuICAgICAgICBkaWFtZXRlckJvdHRvbTogMSxcbiAgICAgICAgdGVzc2VsbGF0aW9uOiAzMixcbiAgICAgICAgc3ViZGl2aXNpb25zOiAxLFxuICAgICAgICBhcmM6IDEsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbY29uZVVwLCBzZXRDb25lVXBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDb25lUGFyYW1DaGFuZ2UgPSA8SyBleHRlbmRzIGtleW9mIENvbmVQYXJhbXM+KGtleTogSywgdmFsdWU6IENvbmVQYXJhbXNbS10pID0+IHtcbiAgICAgICAgc2V0Q29uZVBhcmFtcygocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBba2V5XTogdmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW2dyb3VuZFBhcmFtcywgc2V0R3JvdW5kUGFyYW1zXSA9IHVzZVN0YXRlPEdyb3VuZFBhcmFtcz4oe1xuICAgICAgICBuYW1lOiBcIkdyb3VuZFwiLFxuICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgIHN1YmRpdmlzaW9uczogMSxcbiAgICAgICAgc3ViZGl2aXNpb25zWDogMSxcbiAgICAgICAgc3ViZGl2aXNpb25zWTogMSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUdyb3VuZFBhcmFtQ2hhbmdlID0gPEsgZXh0ZW5kcyBrZXlvZiBHcm91bmRQYXJhbXM+KGtleTogSywgdmFsdWU6IEdyb3VuZFBhcmFtc1tLXSkgPT4ge1xuICAgICAgICBzZXRHcm91bmRQYXJhbXMoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW2ltcG9ydE1lc2hOYW1lLCBzZXRJbXBvcnRNZXNoTmFtZV0gPSB1c2VTdGF0ZShcIkltcG9ydGVkTWVzaFwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvY2FsTWVzaEltcG9ydCA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgICAgIGlmICghZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWxlc0FycmF5ID0gQXJyYXkuZnJvbShmaWxlcyk7XG4gICAgICAgIGlmIChpbXBvcnRNZXNoTmFtZS50cmltKCkubGVuZ3RoID4gMCAmJiBmaWxlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZSA9IGZpbGVzQXJyYXlbMF07XG4gICAgICAgICAgICBjb25zdCBleHRlbnNpb25JbmRleCA9IG9yaWdpbmFsRmlsZS5uYW1lLmxhc3RJbmRleE9mKFwiLlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbkluZGV4ID49IDAgPyBvcmlnaW5hbEZpbGUubmFtZS5zdWJzdHJpbmcoZXh0ZW5zaW9uSW5kZXgpIDogXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IHNhbml0aXplZE5hbWUgPSBpbXBvcnRNZXNoTmFtZS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCBkZXNpcmVkRmlsZU5hbWUgPSBzYW5pdGl6ZWROYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkpID8gc2FuaXRpemVkTmFtZSA6IGAke3Nhbml0aXplZE5hbWV9JHtleHRlbnNpb259YDtcbiAgICAgICAgICAgIGZpbGVzQXJyYXlbMF0gPSBuZXcgRmlsZShbb3JpZ2luYWxGaWxlXSwgZGVzaXJlZEZpbGVOYW1lLCB7IHR5cGU6IG9yaWdpbmFsRmlsZS50eXBlLCBsYXN0TW9kaWZpZWQ6IG9yaWdpbmFsRmlsZS5sYXN0TW9kaWZpZWQgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWxlc0lucHV0ID0gbmV3IEZpbGVzSW5wdXQoXG4gICAgICAgICAgICBzY2VuZS5nZXRFbmdpbmUoKSxcbiAgICAgICAgICAgIHNjZW5lLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgKF9zY2VuZUZpbGUsIF9zY2VuZSwgbWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UgPyBgRmFpbGVkIHRvIGltcG9ydCBtZXNoOiAke21lc3NhZ2V9YCA6IFwiRmFpbGVkIHRvIGltcG9ydCBtZXNoLlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgZmlsZXNJbnB1dC5kaXNwbGF5TG9hZGluZ1VJID0gZmFsc2U7XG4gICAgICAgIGZpbGVzSW5wdXQubG9hZEZpbGVzKHsgdGFyZ2V0OiB7IGZpbGVzOiBmaWxlc0FycmF5IH0gfSk7XG4gICAgICAgIGZpbGVzSW5wdXQuZGlzcG9zZSgpO1xuXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcIlNwaGVyZVwiLCB7fSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU2V0Q2FtZXJhKHNjZW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTcGhlcmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNldHRpbmdzUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFByb3BlcnR5TGluZSBsYWJlbD1cIk5hbWVcIiB2YWx1ZT17c3BoZXJlUGFyYW1zLm5hbWV9IG9uQ2hhbmdlPXsodmFsOiBzdHJpbmcpID0+IGhhbmRsZVNwaGVyZVBhcmFtQ2hhbmdlKFwibmFtZVwiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZSBsYWJlbD1cIlNlZ21lbnRzXCIgdmFsdWU9e3NwaGVyZVBhcmFtcy5zZWdtZW50c30gbWluPXswfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVTcGhlcmVQYXJhbUNoYW5nZShcInNlZ21lbnRzXCIsIHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGhlcmVQYXJhbXMuZGlhbWV0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVTcGhlcmVQYXJhbUNoYW5nZShcImRpYW1ldGVyXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNwaGVyZVBhcmFtcy51bmlmb3JtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hQcm9wZXJ0eUxpbmUgbGFiZWw9XCJVbmlmb3JtXCIgdmFsdWU9e3NwaGVyZVBhcmFtcy51bmlmb3JtfSBvbkNoYW5nZT17KGNoZWNrZWQpID0+IGhhbmRsZVNwaGVyZVBhcmFtQ2hhbmdlKFwidW5pZm9ybVwiLCBjaGVja2VkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlhbWV0ZXIgWFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BoZXJlUGFyYW1zLmRpYW1ldGVyWH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZVNwaGVyZVBhcmFtQ2hhbmdlKFwiZGlhbWV0ZXJYXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3BoZXJlUGFyYW1zLnVuaWZvcm19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpYW1ldGVyIFlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwaGVyZVBhcmFtcy5kaWFtZXRlcll9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVTcGhlcmVQYXJhbUNoYW5nZShcImRpYW1ldGVyWVwiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NwaGVyZVBhcmFtcy51bmlmb3JtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaWFtZXRlciBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGhlcmVQYXJhbXMuZGlhbWV0ZXJafVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlU3BoZXJlUGFyYW1DaGFuZ2UoXCJkaWFtZXRlclpcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzcGhlcmVQYXJhbXMudW5pZm9ybX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJBcmNcIiB2YWx1ZT17c3BoZXJlUGFyYW1zLmFyY30gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezAuMX0gb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlU3BoZXJlUGFyYW1DaGFuZ2UoXCJhcmNcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJTbGljZVwiIHZhbHVlPXtzcGhlcmVQYXJhbXMuc2xpY2V9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXswLjF9IG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZVNwaGVyZVBhcmFtQ2hhbmdlKFwic2xpY2VcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZ2FwOiA4LCBtYXJnaW5Ub3A6IDE2IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBwYXJhbXMgb2JqZWN0IGJhc2VkIG9uIHVuaWZvcm0gY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlUGFyYW1zOiBQYXJ0aWFsPFNwaGVyZVBhcmFtcz4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50czogc3BoZXJlUGFyYW1zLnNlZ21lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJjOiBzcGhlcmVQYXJhbXMuYXJjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2U6IHNwaGVyZVBhcmFtcy5zbGljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BoZXJlUGFyYW1zLnVuaWZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHVuaWZvcm0gaXMgY2hlY2tlZCwgdXNlIGRpYW1ldGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQYXJhbXMuZGlhbWV0ZXIgPSBzcGhlcmVQYXJhbXMuZGlhbWV0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB1bmlmb3JtIGlzIHVuY2hlY2tlZCwgdXNlIGluZGl2aWR1YWwgZGlhbWV0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQYXJhbXMuZGlhbWV0ZXJYID0gc3BoZXJlUGFyYW1zLmRpYW1ldGVyWDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVBhcmFtcy5kaWFtZXRlclkgPSBzcGhlcmVQYXJhbXMuZGlhbWV0ZXJZO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUGFyYW1zLmRpYW1ldGVyWiA9IHNwaGVyZVBhcmFtcy5kaWFtZXRlclo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoc3BoZXJlUGFyYW1zLm5hbWUsIGNyZWF0ZVBhcmFtcywgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRDYW1lcmEoc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVCb3goXCJCb3hcIiwge30sIHNjZW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldENhbWVyYShzY2VuZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm94XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e2JveFBhcmFtcy5uYW1lfSBvbkNoYW5nZT17KHZhbDogc3RyaW5nKSA9PiBoYW5kbGVCb3hQYXJhbUNoYW5nZShcIm5hbWVcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJTaXplXCIgdmFsdWU9e2JveFBhcmFtcy5zaXplfSBtaW49ezB9IHN0ZXA9ezAuMX0gb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlQm94UGFyYW1DaGFuZ2UoXCJzaXplXCIsIHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lIGxhYmVsPVwiV2lkdGhcIiB2YWx1ZT17Ym94UGFyYW1zLndpZHRofSBtaW49ezB9IHN0ZXA9ezAuMX0gb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlQm94UGFyYW1DaGFuZ2UoXCJ3aWR0aFwiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZSBsYWJlbD1cIkhlaWdodFwiIHZhbHVlPXtib3hQYXJhbXMuaGVpZ2h0fSBtaW49ezB9IHN0ZXA9ezAuMX0gb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlQm94UGFyYW1DaGFuZ2UoXCJoZWlnaHRcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJEZXB0aFwiIHZhbHVlPXtib3hQYXJhbXMuZGVwdGh9IG1pbj17MH0gc3RlcD17MC4xfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVCb3hQYXJhbUNoYW5nZShcImRlcHRoXCIsIHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGdhcDogOCwgbWFyZ2luVG9wOiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVCb3goYm94UGFyYW1zLm5hbWUsIGJveFBhcmFtcywgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRDYW1lcmEoc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVDeWxpbmRlcihcIkN5bGluZGVyXCIsIHt9LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTZXRDYW1lcmEoc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN5bGluZGVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e2N5bGluZGVyUGFyYW1zLm5hbWV9IG9uQ2hhbmdlPXsodmFsOiBzdHJpbmcpID0+IGhhbmRsZUN5bGluZGVyUGFyYW1DaGFuZ2UoXCJuYW1lXCIsIHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lIGxhYmVsPVwiSGVpZ2h0XCIgdmFsdWU9e2N5bGluZGVyUGFyYW1zLmhlaWdodH0gbWluPXswfSBzdGVwPXswLjF9IG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZUN5bGluZGVyUGFyYW1DaGFuZ2UoXCJoZWlnaHRcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlhbWV0ZXIgVG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjeWxpbmRlclBhcmFtcy5kaWFtZXRlclRvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZUN5bGluZGVyUGFyYW1DaGFuZ2UoXCJkaWFtZXRlclRvcFwiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaWFtZXRlciBCb3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N5bGluZGVyUGFyYW1zLmRpYW1ldGVyQm90dG9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlQ3lsaW5kZXJQYXJhbUNoYW5nZShcImRpYW1ldGVyQm90dG9tXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjeWxpbmRlclBhcmFtcy5kaWFtZXRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZUN5bGluZGVyUGFyYW1DaGFuZ2UoXCJkaWFtZXRlclwiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXNzZWxsYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N5bGluZGVyUGFyYW1zLnRlc3NlbGxhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17M31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZUN5bGluZGVyUGFyYW1DaGFuZ2UoXCJ0ZXNzZWxsYXRpb25cIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3ViZGl2aXNpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjeWxpbmRlclBhcmFtcy5zdWJkaXZpc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVDeWxpbmRlclBhcmFtQ2hhbmdlKFwic3ViZGl2aXNpb25zXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lIGxhYmVsPVwiQXJjXCIgdmFsdWU9e2N5bGluZGVyUGFyYW1zLmFyY30gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezAuMX0gb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlQ3lsaW5kZXJQYXJhbUNoYW5nZShcImFyY1wiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBnYXA6IDgsIG1hcmdpblRvcDogMTYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVzaEJ1aWxkZXIuQ3JlYXRlQ3lsaW5kZXIoY3lsaW5kZXJQYXJhbXMubmFtZSwgY3lsaW5kZXJQYXJhbXMsIHNjZW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0Q2FtZXJhKHNjZW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTWVzaEJ1aWxkZXIuQ3JlYXRlQ3lsaW5kZXIoXCJDb25lXCIsIHsgZGlhbWV0ZXJUb3A6IDAgfSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU2V0Q2FtZXJhKHNjZW5lKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e2NvbmVQYXJhbXMubmFtZX0gb25DaGFuZ2U9eyh2YWw6IHN0cmluZykgPT4gaGFuZGxlQ29uZVBhcmFtQ2hhbmdlKFwibmFtZVwiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZSBsYWJlbD1cIkhlaWdodFwiIHZhbHVlPXtjb25lUGFyYW1zLmhlaWdodH0gbWluPXswfSBzdGVwPXswLjF9IG9uQ2hhbmdlPXsodmFsOiBudW1iZXIpID0+IGhhbmRsZUNvbmVQYXJhbUNoYW5nZShcImhlaWdodFwiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZSBsYWJlbD1cIkRpYW1ldGVyXCIgdmFsdWU9e2NvbmVQYXJhbXMuZGlhbWV0ZXJ9IG1pbj17MH0gc3RlcD17MC4xfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVDb25lUGFyYW1DaGFuZ2UoXCJkaWFtZXRlclwiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZSBsYWJlbD1cIlRlc3NlbGxhdGlvblwiIHZhbHVlPXtjb25lUGFyYW1zLnRlc3NlbGxhdGlvbn0gbWluPXszfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVDb25lUGFyYW1DaGFuZ2UoXCJ0ZXNzZWxsYXRpb25cIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJTdWJkaXZpc2lvbnNcIiB2YWx1ZT17Y29uZVBhcmFtcy5zdWJkaXZpc2lvbnN9IG1pbj17MX0gb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlQ29uZVBhcmFtQ2hhbmdlKFwic3ViZGl2aXNpb25zXCIsIHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lIGxhYmVsPVwiQXJjXCIgdmFsdWU9e2NvbmVQYXJhbXMuYXJjfSBtaW49ezB9IG1heD17MX0gc3RlcD17MC4xfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVDb25lUGFyYW1DaGFuZ2UoXCJhcmNcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94UHJvcGVydHlMaW5lIGxhYmVsPVwiVXBcIiB2YWx1ZT17Y29uZVVwfSBvbkNoYW5nZT17KHZhbDogYm9vbGVhbikgPT4gc2V0Q29uZVVwKHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGdhcDogOCwgbWFyZ2luVG9wOiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25lUGFyYW1zVG9Vc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25lUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbWV0ZXJUb3A6IGNvbmVVcCA/IDAgOiBjb25lUGFyYW1zLmRpYW1ldGVyVG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbWV0ZXJCb3R0b206IGNvbmVVcCA/IGNvbmVQYXJhbXMuZGlhbWV0ZXJCb3R0b20gOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVDeWxpbmRlcihjb25lUGFyYW1zLm5hbWUsIGNvbmVQYXJhbXNUb1VzZSwgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRDYW1lcmEoc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJHcm91bmRcIiwge30sIHNjZW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldENhbWVyYShzY2VuZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JvdW5kXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e2dyb3VuZFBhcmFtcy5uYW1lfSBvbkNoYW5nZT17KHZhbDogc3RyaW5nKSA9PiBoYW5kbGVHcm91bmRQYXJhbUNoYW5nZShcIm5hbWVcIiwgdmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmUgbGFiZWw9XCJXaWR0aFwiIHZhbHVlPXtncm91bmRQYXJhbXMud2lkdGh9IG1pbj17MH0gc3RlcD17MC4xfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVHcm91bmRQYXJhbUNoYW5nZShcIndpZHRoXCIsIHZhbCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGluQnV0dG9uUHJvcGVydHlMaW5lIGxhYmVsPVwiSGVpZ2h0XCIgdmFsdWU9e2dyb3VuZFBhcmFtcy5oZWlnaHR9IG1pbj17MH0gc3RlcD17MC4xfSBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVHcm91bmRQYXJhbUNoYW5nZShcImhlaWdodFwiLCB2YWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJkaXZpc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VuZFBhcmFtcy5zdWJkaXZpc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVHcm91bmRQYXJhbUNoYW5nZShcInN1YmRpdmlzaW9uc1wiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJkaXZpc2lvbnMgWFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3JvdW5kUGFyYW1zLnN1YmRpdmlzaW9uc1h9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbDogbnVtYmVyKSA9PiBoYW5kbGVHcm91bmRQYXJhbUNoYW5nZShcInN1YmRpdmlzaW9uc1hcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3ViZGl2aXNpb25zIFlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dyb3VuZFBhcmFtcy5zdWJkaXZpc2lvbnNZfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWw6IG51bWJlcikgPT4gaGFuZGxlR3JvdW5kUGFyYW1DaGFuZ2UoXCJzdWJkaXZpc2lvbnNZXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGdhcDogOCwgbWFyZ2luVG9wOiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoZ3JvdW5kUGFyYW1zLm5hbWUsIGdyb3VuZFBhcmFtcywgc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRDYW1lcmEoc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlSW5wdXRSZWYuY3VycmVudD8uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbXBvcnQgTWVzaFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0UHJvcGVydHlMaW5lIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXtpbXBvcnRNZXNoTmFtZX0gb25DaGFuZ2U9eyh2YWw6IHN0cmluZykgPT4gc2V0SW1wb3J0TWVzaE5hbWUodmFsKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZ2FwOiA4IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbXBvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cIi5iYWJ5bG9uLC5nbGIsLmdsdGYsLm9iaiwuc3RsLC5wbHksLm1lc2gsLmJhYnlsb25tZXNoZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMb2NhbE1lc2hJbXBvcnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcImNvcmUvUGFydGljbGVzL3BhcnRpY2xlU3lzdGVtXCI7XG5pbXBvcnQgeyBHUFVQYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCJjb3JlL1BhcnRpY2xlcy9ncHVQYXJ0aWNsZVN5c3RlbVwiO1xuaW1wb3J0IHsgTm9kZVBhcnRpY2xlU3lzdGVtU2V0IH0gZnJvbSBcImNvcmUvUGFydGljbGVzL05vZGUvbm9kZVBhcnRpY2xlU3lzdGVtU2V0XCI7XG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvcHJpbWl0aXZlcy9idXR0b25cIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHRva2VucyB9IGZyb20gXCJAZmx1ZW50dWkvcmVhY3QtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGV4dElucHV0UHJvcGVydHlMaW5lIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9ob2MvcHJvcGVydHlMaW5lcy9pbnB1dFByb3BlcnR5TGluZVwiO1xuaW1wb3J0IHsgU3BpbkJ1dHRvblByb3BlcnR5TGluZSB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvaG9jL3Byb3BlcnR5TGluZXMvc3BpbkJ1dHRvblByb3BlcnR5TGluZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NQb3BvdmVyIH0gZnJvbSBcIi4vc2V0dGluZ3NQb3BvdmVyXCI7XG5cbi8vIFNpZGUtZWZmZWN0IGltcG9ydCBuZWVkZWQgZm9yIEdQVVBhcnRpY2xlU3lzdGVtXG5pbXBvcnQgXCJjb3JlL1BhcnRpY2xlcy93ZWJnbDJQYXJ0aWNsZVN5c3RlbVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICBzZWN0aW9uOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICByb3dHYXA6IHRva2Vucy5zcGFjaW5nVmVydGljYWxNLFxuICAgIH0sXG4gICAgcm93OiB7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IFwiNHB4XCIgfSxcbn0pO1xuXG50eXBlIFBhcnRpY2xlc0NvbnRlbnRQcm9wcyA9IHtcbiAgICBzY2VuZTogU2NlbmU7XG59O1xuXG4vKipcbiAqIFBhcnRpY2xlcyBjb250ZW50IGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gQ29tcG9uZW50IHByb3BzXG4gKiBAcmV0dXJucyBSZWFjdCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcnRpY2xlc0NvbnRlbnQ6IEZ1bmN0aW9uQ29tcG9uZW50PFBhcnRpY2xlc0NvbnRlbnRQcm9wcz4gPSAoeyBzY2VuZSB9KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgLy8gQ1BVIFBhcnRpY2xlIFN5c3RlbSBzdGF0ZVxuICAgIGNvbnN0IFtjcHVQYXJ0aWNsZVN5c3RlbU5hbWUsIHNldENwdVBhcnRpY2xlU3lzdGVtTmFtZV0gPSB1c2VTdGF0ZShcIlBhcnRpY2xlIFN5c3RlbVwiKTtcbiAgICBjb25zdCBbY3B1UGFydGljbGVTeXN0ZW1DYXBhY2l0eSwgc2V0Q3B1UGFydGljbGVTeXN0ZW1DYXBhY2l0eV0gPSB1c2VTdGF0ZSgyMDAwKTtcblxuICAgIC8vIEdQVSBQYXJ0aWNsZSBTeXN0ZW0gc3RhdGVcbiAgICBjb25zdCBbZ3B1UGFydGljbGVTeXN0ZW1OYW1lLCBzZXRHcHVQYXJ0aWNsZVN5c3RlbU5hbWVdID0gdXNlU3RhdGUoXCJHUFUgUGFydGljbGUgU3lzdGVtXCIpO1xuICAgIGNvbnN0IFtncHVQYXJ0aWNsZVN5c3RlbUNhcGFjaXR5LCBzZXRHcHVQYXJ0aWNsZVN5c3RlbUNhcGFjaXR5XSA9IHVzZVN0YXRlKDIwMDApO1xuXG4gICAgLy8gTm9kZSBQYXJ0aWNsZSBTeXN0ZW0gc3RhdGVcbiAgICBjb25zdCBbbm9kZVBhcnRpY2xlU3lzdGVtTmFtZSwgc2V0Tm9kZVBhcnRpY2xlU3lzdGVtTmFtZV0gPSB1c2VTdGF0ZShcIk5vZGUgUGFydGljbGUgU3lzdGVtXCIpO1xuICAgIGNvbnN0IFtub2RlUGFydGljbGVTeXN0ZW1TbmlwcGV0SWQsIHNldE5vZGVQYXJ0aWNsZVN5c3RlbVNuaXBwZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZUNQVVBhcnRpY2xlU3lzdGVtID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN5c3RlbSA9IG5ldyBQYXJ0aWNsZVN5c3RlbShjcHVQYXJ0aWNsZVN5c3RlbU5hbWUsIGNwdVBhcnRpY2xlU3lzdGVtQ2FwYWNpdHksIHNjZW5lKTtcbiAgICAgICAgICAgIHN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcImh0dHBzOi8vYXNzZXRzLmJhYnlsb25qcy5jb20vdGV4dHVyZXMvZmxhcmUucG5nXCIsIHNjZW5lKTtcbiAgICAgICAgICAgIHN5c3RlbS5zdGFydCgpO1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlR1BVUGFydGljbGVTeXN0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGlmIChHUFVQYXJ0aWNsZVN5c3RlbS5Jc1N1cHBvcnRlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3lzdGVtID0gbmV3IEdQVVBhcnRpY2xlU3lzdGVtKGdwdVBhcnRpY2xlU3lzdGVtTmFtZSwgeyBjYXBhY2l0eTogZ3B1UGFydGljbGVTeXN0ZW1DYXBhY2l0eSB9LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiaHR0cHM6Ly9hc3NldHMuYmFieWxvbmpzLmNvbS90ZXh0dXJlcy9mbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGFydCgpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkdQVSBQYXJ0aWNsZSBTeXN0ZW0gaXMgbm90IHN1cHBvcnRlZC5cIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlTm9kZVBhcnRpY2xlU3lzdGVtQXN5bmMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbm9kZVBhcnRpY2xlU2V0O1xuICAgICAgICAgICAgY29uc3Qgc25pcHBldElkID0gbm9kZVBhcnRpY2xlU3lzdGVtU25pcHBldElkLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChzbmlwcGV0SWQpIHtcbiAgICAgICAgICAgICAgICBub2RlUGFydGljbGVTZXQgPSBhd2FpdCBOb2RlUGFydGljbGVTeXN0ZW1TZXQuUGFyc2VGcm9tU25pcHBldEFzeW5jKHNuaXBwZXRJZCk7XG4gICAgICAgICAgICAgICAgbm9kZVBhcnRpY2xlU2V0Lm5hbWUgPSBub2RlUGFydGljbGVTeXN0ZW1OYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlUGFydGljbGVTZXQgPSBOb2RlUGFydGljbGVTeXN0ZW1TZXQuQ3JlYXRlRGVmYXVsdChub2RlUGFydGljbGVTeXN0ZW1OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlU3lzdGVtU2V0ID0gYXdhaXQgbm9kZVBhcnRpY2xlU2V0LmJ1aWxkQXN5bmMoc2NlbmUpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzeXN0ZW0gb2YgcGFydGljbGVTeXN0ZW1TZXQuc3lzdGVtcykge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5uYW1lID0gbm9kZVBhcnRpY2xlU3lzdGVtTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtU2V0LnN0YXJ0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5jb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgTm9kZSBQYXJ0aWNsZSBTeXN0ZW06XCIsIGUpO1xuICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gY3JlYXRlIE5vZGUgUGFydGljbGUgU3lzdGVtOiBcIiArIGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICAgICAgey8qIENQVSBQYXJ0aWNsZSBTeXN0ZW0gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ3JlYXRlQ1BVUGFydGljbGVTeXN0ZW19IGxhYmVsPVwiQ1BVIFBhcnRpY2xlIFN5c3RlbVwiIC8+XG4gICAgICAgICAgICAgICAgPFNldHRpbmdzUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFByb3BlcnR5TGluZSBsYWJlbD1cIk5hbWVcIiB2YWx1ZT17Y3B1UGFydGljbGVTeXN0ZW1OYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRDcHVQYXJ0aWNsZVN5c3RlbU5hbWUodmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BpbkJ1dHRvblByb3BlcnR5TGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3B1UGFydGljbGVTeXN0ZW1DYXBhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldENwdVBhcnRpY2xlU3lzdGVtQ2FwYWNpdHkodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDAwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVDUFVQYXJ0aWNsZVN5c3RlbX0gbGFiZWw9XCJDcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBHUFUgUGFydGljbGUgU3lzdGVtICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUdQVVBhcnRpY2xlU3lzdGVtfSBsYWJlbD1cIkdQVSBQYXJ0aWNsZSBTeXN0ZW1cIiAvPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e2dwdVBhcnRpY2xlU3lzdGVtTmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0R3B1UGFydGljbGVTeXN0ZW1OYW1lKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5CdXR0b25Qcm9wZXJ0eUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dwdVBhcnRpY2xlU3lzdGVtQ2FwYWNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRHcHVQYXJ0aWNsZVN5c3RlbUNhcGFjaXR5KHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MTAwMDAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwMDB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVHUFVQYXJ0aWNsZVN5c3RlbX0gbGFiZWw9XCJDcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvU2V0dGluZ3NQb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBOb2RlIFBhcnRpY2xlIFN5c3RlbSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVOb2RlUGFydGljbGVTeXN0ZW1Bc3luY30gbGFiZWw9XCJOb2RlIFBhcnRpY2xlIFN5c3RlbVwiIC8+XG4gICAgICAgICAgICAgICAgPFNldHRpbmdzUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFByb3BlcnR5TGluZSBsYWJlbD1cIk5hbWVcIiB2YWx1ZT17bm9kZVBhcnRpY2xlU3lzdGVtTmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Tm9kZVBhcnRpY2xlU3lzdGVtTmFtZSh2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRQcm9wZXJ0eUxpbmUgbGFiZWw9XCJTbmlwcGV0IElEXCIgdmFsdWU9e25vZGVQYXJ0aWNsZVN5c3RlbVNuaXBwZXRJZH0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Tm9kZVBhcnRpY2xlU3lzdGVtU25pcHBldElkKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZU5vZGVQYXJ0aWNsZVN5c3RlbUFzeW5jfSBsYWJlbD1cIkNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9TZXR0aW5nc1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IFNlcnZpY2VEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL21vZHVsYXJpdHkvc2VydmljZURlZmluaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgSVNjZW5lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2VuZUNvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgSVNoZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zaGVsbFNlcnZpY2VcIjtcbmltcG9ydCB7IEFjY29yZGlvbiBhcyBCYWJ5bG9uQWNjb3JkaW9uLCBBY2NvcmRpb25TZWN0aW9uIGFzIEJhYnlsb25BY2NvcmRpb25TZWN0aW9uIH0gZnJvbSBcInNoYXJlZC11aS1jb21wb25lbnRzL2ZsdWVudC9wcmltaXRpdmVzL2FjY29yZGlvblwiO1xuaW1wb3J0IHsgU2hlbGxTZXJ2aWNlSWRlbnRpdHkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2hlbGxTZXJ2aWNlXCI7XG5cbmltcG9ydCB7IENvbGxlY3Rpb25zQWRkMjBSZWd1bGFyIH0gZnJvbSBcIkBmbHVlbnR1aS9yZWFjdC1pY29uc1wiO1xuaW1wb3J0IHsgU2NlbmVDb250ZXh0SWRlbnRpdHkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NlbmVDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VPYnNlcnZhYmxlU3RhdGUgfSBmcm9tIFwiLi4vLi4vaG9va3Mvb2JzZXJ2YWJsZUhvb2tzXCI7XG5cbi8vIFNpZGUtZWZmZWN0IGltcG9ydCBuZWVkZWQgZm9yIEdQVVBhcnRpY2xlU3lzdGVtXG5pbXBvcnQgXCJjb3JlL1BhcnRpY2xlcy93ZWJnbDJQYXJ0aWNsZVN5c3RlbVwiO1xuaW1wb3J0IHsgTWVzaGVzQ29udGVudCB9IGZyb20gXCIuL21lc2hlc1wiO1xuaW1wb3J0IHsgTWF0ZXJpYWxzQ29udGVudCB9IGZyb20gXCIuL21hdGVyaWFsc1wiO1xuaW1wb3J0IHsgTGlnaHRzQ29udGVudCB9IGZyb20gXCIuL2xpZ2h0c1wiO1xuaW1wb3J0IHsgQ2FtZXJhc0NvbnRlbnQgfSBmcm9tIFwiLi9jYW1lcmFzXCI7XG5pbXBvcnQgeyBQYXJ0aWNsZXNDb250ZW50IH0gZnJvbSBcIi4vcGFydGljbGVzXCI7XG5cbi8vIFRPRE86IFRoaXMgaXMganVzdCBhIHBsYWNlaG9sZGVyIGZvciBhIGR5bmFtaWNhbGx5IGluc3RhbGxlZCBleHRlbnNpb24gdGhhdCBicmluZ3MgaW4gYXNzZXQgY3JlYXRpb24gdG9vbHMgKG5vZGUgbWF0ZXJpYWxzLCBldGMuKS5cbmV4cG9ydCBjb25zdCBDcmVhdGVUb29sc1NlcnZpY2VEZWZpbml0aW9uOiBTZXJ2aWNlRGVmaW5pdGlvbjxbXSwgW0lTaGVsbFNlcnZpY2UsIElTY2VuZUNvbnRleHRdPiA9IHtcbiAgICBmcmllbmRseU5hbWU6IFwiQ3JlYXRpb24gVG9vbHNcIixcbiAgICBjb25zdW1lczogW1NoZWxsU2VydmljZUlkZW50aXR5LCBTY2VuZUNvbnRleHRJZGVudGl0eV0sXG4gICAgZmFjdG9yeTogKHNoZWxsU2VydmljZSwgc2NlbmVDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IHNoZWxsU2VydmljZS5hZGRTaWRlUGFuZSh7XG4gICAgICAgICAgICBrZXk6IFwiQ3JlYXRlXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJDcmVhdGlvbiBUb29sc1wiLFxuICAgICAgICAgICAgaWNvbjogQ29sbGVjdGlvbnNBZGQyMFJlZ3VsYXIsXG4gICAgICAgICAgICBob3Jpem9udGFsTG9jYXRpb246IFwibGVmdFwiLFxuICAgICAgICAgICAgdmVydGljYWxMb2NhdGlvbjogXCJ0b3BcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2VuZSA9IHVzZU9ic2VydmFibGVTdGF0ZSgoKSA9PiBzY2VuZUNvbnRleHQuY3VycmVudFNjZW5lLCBzY2VuZUNvbnRleHQuY3VycmVudFNjZW5lT2JzZXJ2YWJsZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBzY2VuZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWJ5bG9uQWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFieWxvbkFjY29yZGlvblNlY3Rpb24gdGl0bGU9XCJNZXNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNoZXNDb250ZW50IHNjZW5lPXtzY2VuZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWJ5bG9uQWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhYnlsb25BY2NvcmRpb25TZWN0aW9uIHRpdGxlPVwiTWF0ZXJpYWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxzQ29udGVudCBzY2VuZT17c2NlbmV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFieWxvbkFjY29yZGlvblNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWJ5bG9uQWNjb3JkaW9uU2VjdGlvbiB0aXRsZT1cIkxpZ2h0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0c0NvbnRlbnQgc2NlbmU9e3NjZW5lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhYnlsb25BY2NvcmRpb25TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFieWxvbkFjY29yZGlvblNlY3Rpb24gdGl0bGU9XCJQYXJ0aWNsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJ0aWNsZXNDb250ZW50IHNjZW5lPXtzY2VuZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWJ5bG9uQWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhYnlsb25BY2NvcmRpb25TZWN0aW9uIHRpdGxlPVwiQ2FtZXJhc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYXNDb250ZW50IHNjZW5lPXtzY2VuZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWJ5bG9uQWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhYnlsb25BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IHJlZ2lzdHJhdGlvbi5kaXNwb3NlKCksXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzZXJ2aWNlRGVmaW5pdGlvbnM6IFtDcmVhdGVUb29sc1NlcnZpY2VEZWZpbml0aW9uXSxcbn0gYXMgY29uc3Q7XG4iLCJpbXBvcnQgdHlwZSB7IEZ1bmN0aW9uQ29tcG9uZW50LCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gXCJzaGFyZWQtdWktY29tcG9uZW50cy9mbHVlbnQvcHJpbWl0aXZlcy9wb3BvdmVyXCI7XG5pbXBvcnQgeyBTZXR0aW5nc1JlZ3VsYXIgfSBmcm9tIFwiQGZsdWVudHVpL3JlYWN0LWljb25zXCI7XG5cbi8qKlxuICogU2V0dGluZ3MgcG9wb3ZlciBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IFNldHRpbmdzUG9wb3ZlcjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHNXaXRoQ2hpbGRyZW48e30+PiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiA8UG9wb3ZlciBpY29uPXtTZXR0aW5nc1JlZ3VsYXJ9PiB7cHJvcHMuY2hpbGRyZW59IDwvUG9wb3Zlcj47XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9