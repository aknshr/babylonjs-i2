"use strict";
(self["webpackChunk_dev_inspector_v2"] = self["webpackChunk_dev_inspector_v2"] || []).push([["loaders_dist_glTF_2_0_Extensions_KHR_interactivity_js"],{

/***/ "../core/dist/FlowGraph/Blocks/flowGraphBlockFactory.js":
/*!**************************************************************!*\
  !*** ../core/dist/FlowGraph/Blocks/flowGraphBlockFactory.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToBlockFactory: () => (/* binding */ addToBlockFactory),
/* harmony export */   blockFactory: () => (/* binding */ blockFactory)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * Any external module that wishes to add a new block to the flow graph can add to this object using the helper function.
 */
const CustomBlocks = {};
/**
 * If you want to add a new block to the block factory, you should use this function.
 * Please be sure to choose a unique name and define the responsible module.
 * @param module the name of the module that is responsible for the block
 * @param blockName the name of the block. This should be unique.
 * @param factory an async factory function to generate the block
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function addToBlockFactory(module, blockName, factory) {
    CustomBlocks[`${module}/${blockName}`] = factory;
}
/**
 * a function to get a factory function for a block.
 * @param blockName the block name to initialize. If the block comes from an external module, the name should be in the format "module/blockName"
 * @returns an async factory function that will return the block class when called.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function blockFactory(blockName) {
    switch (blockName) {
        case "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphPlayAnimationBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/Animation/flowGraphPlayAnimationBlock */ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js"))).FlowGraphPlayAnimationBlock;
        case "FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphStopAnimationBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/Animation/flowGraphStopAnimationBlock */ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js"))).FlowGraphStopAnimationBlock;
        case "FlowGraphPauseAnimationBlock" /* FlowGraphBlockNames.PauseAnimation */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphPauseAnimationBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/Animation/flowGraphPauseAnimationBlock */ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphPauseAnimationBlock.js"))).FlowGraphPauseAnimationBlock;
        case "FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphInterpolationBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/Animation/flowGraphInterpolationBlock */ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js"))).FlowGraphInterpolationBlock;
        case "FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphSceneReadyEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphSceneReadyEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js"))).FlowGraphSceneReadyEventBlock;
        case "FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphSceneTickEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphSceneTickEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js"))).FlowGraphSceneTickEventBlock;
        case "FlowGraphSendCustomEventBlock" /* FlowGraphBlockNames.SendCustomEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphSendCustomEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphSendCustomEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js"))).FlowGraphSendCustomEventBlock;
        case "FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphReceiveCustomEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphReceiveCustomEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js"))).FlowGraphReceiveCustomEventBlock;
        case "FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphMeshPickEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphMeshPickEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js"))).FlowGraphMeshPickEventBlock;
        case "FlowGraphEBlock" /* FlowGraphBlockNames.E */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphEBlock;
        case "FlowGraphPIBlock" /* FlowGraphBlockNames.PI */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphPiBlock;
        case "FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphInfBlock;
        case "FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphNaNBlock;
        case "FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphRandomBlock;
        case "FlowGraphAddBlock" /* FlowGraphBlockNames.Add */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAddBlock;
        case "FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphSubtractBlock;
        case "FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphMultiplyBlock;
        case "FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphDivideBlock;
        case "FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAbsBlock;
        case "FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphSignBlock;
        case "FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphTruncBlock;
        case "FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphFloorBlock;
        case "FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphCeilBlock;
        case "FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphRoundBlock;
        case "FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphFractionBlock;
        case "FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphNegationBlock;
        case "FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphModuloBlock;
        case "FlowGraphMinBlock" /* FlowGraphBlockNames.Min */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphMinBlock;
        case "FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphMaxBlock;
        case "FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphClampBlock;
        case "FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphSaturateBlock;
        case "FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphMathInterpolationBlock;
        case "FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphEqualityBlock;
        case "FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphLessThanBlock;
        case "FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphLessThanOrEqualBlock;
        case "FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphGreaterThanBlock;
        case "FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphGreaterThanOrEqualBlock;
        case "FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphIsNanBlock;
        case "FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphIsInfinityBlock;
        case "FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphDegToRadBlock;
        case "FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphRadToDegBlock;
        case "FlowGraphSinBlock" /* FlowGraphBlockNames.Sin */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphSinBlock;
        case "FlowGraphCosBlock" /* FlowGraphBlockNames.Cos */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphCosBlock;
        case "FlowGraphTanBlock" /* FlowGraphBlockNames.Tan */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphTanBlock;
        case "FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAsinBlock;
        case "FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAcosBlock;
        case "FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAtanBlock;
        case "FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAtan2Block;
        case "FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphSinhBlock;
        case "FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphCoshBlock;
        case "FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphTanhBlock;
        case "FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAsinhBlock;
        case "FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAcoshBlock;
        case "FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphAtanhBlock;
        case "FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphExpBlock;
        case "FlowGraphLogBlock" /* FlowGraphBlockNames.Log */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphLogBlock;
        case "FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphLog2Block;
        case "FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphLog10Block;
        case "FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphSquareRootBlock;
        case "FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphPowerBlock;
        case "FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphCubeRootBlock;
        case "FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphBitwiseAndBlock;
        case "FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphBitwiseOrBlock;
        case "FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphBitwiseNotBlock;
        case "FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphBitwiseXorBlock;
        case "FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphBitwiseLeftShiftBlock;
        case "FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphBitwiseRightShiftBlock;
        case "FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphLengthBlock;
        case "FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphNormalizeBlock;
        case "FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphDotBlock;
        case "FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphCrossBlock;
        case "FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphRotate2DBlock;
        case "FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphRotate3DBlock;
        case "FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMatrixMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js"))).FlowGraphTransposeBlock;
        case "FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMatrixMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js"))).FlowGraphDeterminantBlock;
        case "FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMatrixMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js"))).FlowGraphInvertMatrixBlock;
        case "FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMatrixMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js"))).FlowGraphMatrixMultiplicationBlock;
        case "FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphBranchBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphBranchBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js"))).FlowGraphBranchBlock;
        case "FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphSetDelayBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphSetDelayBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js"))).FlowGraphSetDelayBlock;
        case "FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphCancelDelayBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphCancelDelayBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js"))).FlowGraphCancelDelayBlock;
        case "FlowGraphCallCounterBlock" /* FlowGraphBlockNames.CallCounter */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphCounterBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphCounterBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js"))).FlowGraphCallCounterBlock;
        case "FlowGraphDebounceBlock" /* FlowGraphBlockNames.Debounce */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphDebounceBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphDebounceBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js"))).FlowGraphDebounceBlock;
        case "FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphThrottleBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphThrottleBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js"))).FlowGraphThrottleBlock;
        case "FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphDoNBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphDoNBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js"))).FlowGraphDoNBlock;
        case "FlowGraphFlipFlopBlock" /* FlowGraphBlockNames.FlipFlop */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphFlipFlopBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphFlipFlopBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js"))).FlowGraphFlipFlopBlock;
        case "FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphForLoopBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphForLoopBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js"))).FlowGraphForLoopBlock;
        case "FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphMultiGateBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphMultiGateBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js"))).FlowGraphMultiGateBlock;
        case "FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphSequenceBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphSequenceBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js"))).FlowGraphSequenceBlock;
        case "FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphSwitchBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphSwitchBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js"))).FlowGraphSwitchBlock;
        case "FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphWaitAllBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphWaitAllBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js"))).FlowGraphWaitAllBlock;
        case "FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_ControlFlow_flowGraphWhileLoopBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/ControlFlow/flowGraphWhileLoopBlock */ "../core/dist/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js"))).FlowGraphWhileLoopBlock;
        case "FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_flowGraphConsoleLogBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/flowGraphConsoleLogBlock */ "../core/dist/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js"))).FlowGraphConsoleLogBlock;
        case "FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphConditionalDataBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphConditionalDataBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js"))).FlowGraphConditionalDataBlock;
        case "FlowGraphConstantBlock" /* FlowGraphBlockNames.Constant */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphConstantBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphConstantBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphConstantBlock.js"))).FlowGraphConstantBlock;
        case "FlowGraphTransformCoordinatesSystemBlock" /* FlowGraphBlockNames.TransformCoordinatesSystem */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphTransformCoordinatesSystemBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphTransformCoordinatesSystemBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js"))).FlowGraphTransformCoordinatesSystemBlock;
        case "FlowGraphGetAssetBlock" /* FlowGraphBlockNames.GetAsset */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphGetAssetBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphGetAssetBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js"))).FlowGraphGetAssetBlock;
        case "FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphGetPropertyBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphGetPropertyBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js"))).FlowGraphGetPropertyBlock;
        case "FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_flowGraphSetPropertyBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/flowGraphSetPropertyBlock */ "../core/dist/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js"))).FlowGraphSetPropertyBlock;
        case "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphGetVariableBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphGetVariableBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js"))).FlowGraphGetVariableBlock;
        case "FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_flowGraphSetVariableBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/flowGraphSetVariableBlock */ "../core/dist/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js"))).FlowGraphSetVariableBlock;
        case "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphJsonPointerParserBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphJsonPointerParserBlock */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js"))).FlowGraphJsonPointerParserBlock;
        case "FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphLeadingZerosBlock;
        case "FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphTrailingZerosBlock;
        case "FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js"))).FlowGraphOneBitsCounterBlock;
        case "FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphCombineVector2Block;
        case "FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphCombineVector3Block;
        case "FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphCombineVector4Block;
        case "FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphCombineMatrixBlock;
        case "FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphExtractVector2Block;
        case "FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphExtractVector3Block;
        case "FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphExtractVector4Block;
        case "FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMathCombineExtractBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMathCombineExtractBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js"))).FlowGraphExtractMatrixBlock;
        case "FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphTransformBlock;
        case "FlowGraphTransformCoordinatesBlock" /* FlowGraphBlockNames.TransformCoordinates */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphTransformCoordinatesBlock;
        case "FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphConjugateBlock;
        case "FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphAngleBetweenBlock;
        case "FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphQuaternionFromAxisAngleBlock;
        case "FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphAxisAngleFromQuaternionBlock;
        case "FlowGraphQuaternionFromDirectionsBlock" /* FlowGraphBlockNames.QuaternionFromDirections */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphVectorMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphVectorMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js"))).FlowGraphQuaternionFromDirectionsBlock;
        case "FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMatrixMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js"))).FlowGraphMatrixDecomposeBlock;
        case "FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Math_flowGraphMatrixMathBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Math/flowGraphMatrixMathBlocks */ "../core/dist/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js"))).FlowGraphMatrixComposeBlock;
        case "FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphTypeToTypeBlocks */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js"))).FlowGraphBooleanToFloat;
        case "FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphTypeToTypeBlocks */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js"))).FlowGraphBooleanToInt;
        case "FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphTypeToTypeBlocks */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js"))).FlowGraphFloatToBoolean;
        case "FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphTypeToTypeBlocks */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js"))).FlowGraphIntToBoolean;
        case "FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphTypeToTypeBlocks */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js"))).FlowGraphIntToFloat;
        case "FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Transformers_flowGraphTypeToTypeBlocks_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Transformers/flowGraphTypeToTypeBlocks */ "../core/dist/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js"))).FlowGraphFloatToInt;
        case "FlowGraphEasingBlock" /* FlowGraphBlockNames.Easing */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphEasingBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/Animation/flowGraphEasingBlock */ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js"))).FlowGraphEasingBlock;
        case "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Execution_Animation_flowGraphBezierCurveEasingBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Execution/Animation/flowGraphBezierCurveEasingBlock */ "../core/dist/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js"))).FlowGraphBezierCurveEasingBlock;
        case "FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphPointerOverEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphPointerOverEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js"))).FlowGraphPointerOverEventBlock;
        case "FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Event_flowGraphPointerOutEventBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Event/flowGraphPointerOutEventBlock */ "../core/dist/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js"))).FlowGraphPointerOutEventBlock;
        case "FlowGraphContextBlock" /* FlowGraphBlockNames.Context */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Utils_flowGraphContextBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Utils/flowGraphContextBlock */ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js"))).FlowGraphContextBlock;
        case "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Utils_flowGraphArrayIndexBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Utils/flowGraphArrayIndexBlock */ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js"))).FlowGraphArrayIndexBlock;
        case "FlowGraphCodeExecutionBlock" /* FlowGraphBlockNames.CodeExecution */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Utils_flowGraphCodeExecutionBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Utils/flowGraphCodeExecutionBlock */ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js"))).FlowGraphCodeExecutionBlock;
        case "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Utils_flowGraphIndexOfBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Utils/flowGraphIndexOfBlock */ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js"))).FlowGraphIndexOfBlock;
        case "FlowGraphFunctionReference" /* FlowGraphBlockNames.FunctionReference */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_Utils_flowGraphFunctionReferenceBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/Utils/flowGraphFunctionReferenceBlock */ "../core/dist/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js"))).FlowGraphFunctionReferenceBlock;
        case "FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */:
            return async () => (await __webpack_require__.e(/*! import() */ "core_dist_FlowGraph_Blocks_Data_flowGraphDataSwitchBlock_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Data/flowGraphDataSwitchBlock */ "../core/dist/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js"))).FlowGraphDataSwitchBlock;
        default:
            // check if the block is a custom block
            if (CustomBlocks[blockName]) {
                return CustomBlocks[blockName];
            }
            throw new Error(`Unknown block name ${blockName}`);
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

/***/ "../core/dist/FlowGraph/flowGraph.js":
/*!*******************************************!*\
  !*** ../core/dist/FlowGraph/flowGraph.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraph: () => (/* binding */ FlowGraph),
/* harmony export */   FlowGraphState: () => (/* binding */ FlowGraphState)
/* harmony export */ });
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _flowGraphContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraphContext */ "../core/dist/FlowGraph/flowGraphContext.js");
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* harmony import */ var _flowGraphSceneEventCoordinator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flowGraphSceneEventCoordinator */ "../core/dist/FlowGraph/flowGraphSceneEventCoordinator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../core/dist/FlowGraph/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






var FlowGraphState;
(function (FlowGraphState) {
    /**
     * The graph is stopped
     */
    FlowGraphState[FlowGraphState["Stopped"] = 0] = "Stopped";
    /**
     * The graph is running
     */
    FlowGraphState[FlowGraphState["Started"] = 1] = "Started";
})(FlowGraphState || (FlowGraphState = {}));
/**
 * Class used to represent a flow graph.
 * A flow graph is a graph of blocks that can be used to create complex logic.
 * Blocks can be added to the graph and connected to each other.
 * The graph can then be started, which will init and start all of its event blocks.
 *
 * @experimental FlowGraph is still in development and is subject to change.
 */
class FlowGraph {
    /**
     * The state of the graph
     */
    get state() {
        return this._state;
    }
    /**
     * The state of the graph
     */
    set state(value) {
        this._state = value;
        this.onStateChangedObservable.notifyObservers(value);
    }
    /**
     * Construct a Flow Graph
     * @param params construction parameters. currently only the scene
     */
    constructor(params) {
        /**
         * An observable that is triggered when the state of the graph changes.
         */
        this.onStateChangedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /** @internal */
        this._eventBlocks = {
            ["SceneReady" /* FlowGraphEventType.SceneReady */]: [],
            ["SceneDispose" /* FlowGraphEventType.SceneDispose */]: [],
            ["SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */]: [],
            ["MeshPick" /* FlowGraphEventType.MeshPick */]: [],
            ["PointerDown" /* FlowGraphEventType.PointerDown */]: [],
            ["PointerUp" /* FlowGraphEventType.PointerUp */]: [],
            ["PointerMove" /* FlowGraphEventType.PointerMove */]: [],
            ["PointerOver" /* FlowGraphEventType.PointerOver */]: [],
            ["PointerOut" /* FlowGraphEventType.PointerOut */]: [],
            ["SceneAfterRender" /* FlowGraphEventType.SceneAfterRender */]: [],
            ["NoTrigger" /* FlowGraphEventType.NoTrigger */]: [],
        };
        this._executionContexts = [];
        /**
         * The state of the graph
         */
        this._state = 0 /* FlowGraphState.Stopped */;
        this._scene = params.scene;
        this._sceneEventCoordinator = new _flowGraphSceneEventCoordinator__WEBPACK_IMPORTED_MODULE_3__.FlowGraphSceneEventCoordinator(this._scene);
        this._coordinator = params.coordinator;
        this._eventObserver = this._sceneEventCoordinator.onEventTriggeredObservable.add((event) => {
            for (const context of this._executionContexts) {
                const order = this._getContextualOrder(event.type, context);
                for (const block of order) {
                    // iterate contexts
                    if (!block._executeEvent(context, event.payload)) {
                        break;
                    }
                }
            }
            // custom behavior(s) of specific events
            switch (event.type) {
                case "SceneReady" /* FlowGraphEventType.SceneReady */:
                    this._sceneEventCoordinator.sceneReadyTriggered = true;
                    break;
                case "SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */:
                    for (const context of this._executionContexts) {
                        context._notifyOnTick(event.payload);
                    }
                    break;
                case "SceneDispose" /* FlowGraphEventType.SceneDispose */:
                    this.dispose();
                    break;
            }
        });
    }
    /**
     * Create a context. A context represents one self contained execution for the graph, with its own variables.
     * @returns the context, where you can get and set variables
     */
    createContext() {
        const context = new _flowGraphContext__WEBPACK_IMPORTED_MODULE_1__.FlowGraphContext({ scene: this._scene, coordinator: this._coordinator });
        this._executionContexts.push(context);
        return context;
    }
    /**
     * Returns the execution context at a given index
     * @param index the index of the context
     * @returns the execution context at that index
     */
    getContext(index) {
        return this._executionContexts[index];
    }
    /**
     * Add an event block. When the graph is started, it will start listening to events
     * from the block and execute the graph when they are triggered.
     * @param block the event block to be added
     */
    addEventBlock(block) {
        if (block.type === "PointerOver" /* FlowGraphEventType.PointerOver */ || block.type === "PointerOut" /* FlowGraphEventType.PointerOut */) {
            this._scene.constantlyUpdateMeshUnderPointer = true;
        }
        // don't add if NoTrigger, but still start the pending tasks
        if (block.type !== "NoTrigger" /* FlowGraphEventType.NoTrigger */) {
            this._eventBlocks[block.type].push(block);
        }
        // if already started, sort and add to the pending
        if (this.state === 1 /* FlowGraphState.Started */) {
            for (const context of this._executionContexts) {
                block._startPendingTasks(context);
            }
        }
        else {
            this.onStateChangedObservable.addOnce((state) => {
                if (state === 1 /* FlowGraphState.Started */) {
                    for (const context of this._executionContexts) {
                        block._startPendingTasks(context);
                    }
                }
            });
        }
    }
    /**
     * Starts the flow graph. Initializes the event blocks and starts listening to events.
     */
    start() {
        if (this.state === 1 /* FlowGraphState.Started */) {
            return;
        }
        if (this._executionContexts.length === 0) {
            this.createContext();
        }
        this.onStateChangedObservable.add((state) => {
            if (state === 1 /* FlowGraphState.Started */) {
                this._startPendingEvents();
                // the only event we need to check is the scene ready event. If the scene is already ready when the graph starts, we should start the pending tasks.
                if (this._scene.isReady(true)) {
                    this._sceneEventCoordinator.onEventTriggeredObservable.notifyObservers({ type: "SceneReady" /* FlowGraphEventType.SceneReady */ });
                }
            }
        });
        this.state = 1 /* FlowGraphState.Started */;
    }
    _startPendingEvents() {
        for (const context of this._executionContexts) {
            for (const type in this._eventBlocks) {
                const order = this._getContextualOrder(type, context);
                for (const block of order) {
                    block._startPendingTasks(context);
                }
            }
        }
    }
    _getContextualOrder(type, context) {
        const order = this._eventBlocks[type].sort((a, b) => b.initPriority - a.initPriority);
        if (type === "MeshPick" /* FlowGraphEventType.MeshPick */) {
            const meshPickOrder = [];
            for (const block1 of order) {
                // If the block is a mesh pick, guarantee that picks of children meshes come before picks of parent meshes
                const mesh1 = block1.asset.getValue(context);
                let i = 0;
                for (; i < order.length; i++) {
                    const block2 = order[i];
                    const mesh2 = block2.asset.getValue(context);
                    if (mesh1 && mesh2 && (0,_utils__WEBPACK_IMPORTED_MODULE_4__._IsDescendantOf)(mesh1, mesh2)) {
                        break;
                    }
                }
                meshPickOrder.splice(i, 0, block1);
            }
            return meshPickOrder;
        }
        return order;
    }
    /**
     * Disposes of the flow graph. Cancels any pending tasks and removes all event listeners.
     */
    dispose() {
        if (this.state === 0 /* FlowGraphState.Stopped */) {
            return;
        }
        this.state = 0 /* FlowGraphState.Stopped */;
        for (const context of this._executionContexts) {
            context._clearPendingBlocks();
        }
        this._executionContexts.length = 0;
        for (const type in this._eventBlocks) {
            this._eventBlocks[type].length = 0;
        }
        this._eventObserver?.remove();
        this._sceneEventCoordinator.dispose();
    }
    /**
     * Executes a function in all blocks of a flow graph, starting with the event blocks.
     * @param visitor the function to execute.
     */
    visitAllBlocks(visitor) {
        const visitList = [];
        const idsAddedToVisitList = new Set();
        for (const type in this._eventBlocks) {
            for (const block of this._eventBlocks[type]) {
                visitList.push(block);
                idsAddedToVisitList.add(block.uniqueId);
            }
        }
        while (visitList.length > 0) {
            const block = visitList.pop();
            visitor(block);
            for (const dataIn of block.dataInputs) {
                for (const connection of dataIn._connectedPoint) {
                    if (!idsAddedToVisitList.has(connection._ownerBlock.uniqueId)) {
                        visitList.push(connection._ownerBlock);
                        idsAddedToVisitList.add(connection._ownerBlock.uniqueId);
                    }
                }
            }
            if (block instanceof _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphExecutionBlock) {
                for (const signalOut of block.signalOutputs) {
                    for (const connection of signalOut._connectedPoint) {
                        if (!idsAddedToVisitList.has(connection._ownerBlock.uniqueId)) {
                            visitList.push(connection._ownerBlock);
                            idsAddedToVisitList.add(connection._ownerBlock.uniqueId);
                        }
                    }
                }
            }
        }
    }
    /**
     * Serializes a graph
     * @param serializationObject the object to write the values in
     * @param valueSerializeFunction a function to serialize complex values
     */
    serialize(serializationObject = {}, valueSerializeFunction) {
        serializationObject.allBlocks = [];
        this.visitAllBlocks((block) => {
            const serializedBlock = {};
            block.serialize(serializedBlock);
            serializationObject.allBlocks.push(serializedBlock);
        });
        serializationObject.executionContexts = [];
        for (const context of this._executionContexts) {
            const serializedContext = {};
            context.serialize(serializedContext, valueSerializeFunction);
            serializationObject.executionContexts.push(serializedContext);
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

/***/ "../core/dist/FlowGraph/flowGraphAssetsContext.js":
/*!********************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphAssetsContext.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphAssetType: () => (/* binding */ FlowGraphAssetType),
/* harmony export */   GetFlowGraphAssetWithType: () => (/* binding */ GetFlowGraphAssetWithType)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * The type of the assets that flow graph supports
 */
var FlowGraphAssetType;
(function (FlowGraphAssetType) {
    FlowGraphAssetType["Animation"] = "Animation";
    FlowGraphAssetType["AnimationGroup"] = "AnimationGroup";
    FlowGraphAssetType["Mesh"] = "Mesh";
    FlowGraphAssetType["Material"] = "Material";
    FlowGraphAssetType["Camera"] = "Camera";
    FlowGraphAssetType["Light"] = "Light";
    // Further asset types will be added here when needed.
})(FlowGraphAssetType || (FlowGraphAssetType = {}));
/**
 * Returns the asset with the given index and type from the assets context.
 * @param assetsContext The assets context to get the asset from
 * @param type The type of the asset
 * @param index The index of the asset
 * @param useIndexAsUniqueId If set to true, instead of the index in the array it will search for the unique id of the asset.
 * @returns The asset or null if not found
 */
function GetFlowGraphAssetWithType(assetsContext, type, index, useIndexAsUniqueId) {
    switch (type) {
        case "Animation" /* FlowGraphAssetType.Animation */:
            return useIndexAsUniqueId
                ? (assetsContext.animations.find((a) => a.uniqueId === index) ?? null)
                : (assetsContext.animations[index] ?? null);
        case "AnimationGroup" /* FlowGraphAssetType.AnimationGroup */:
            return useIndexAsUniqueId
                ? (assetsContext.animationGroups.find((a) => a.uniqueId === index) ?? null)
                : (assetsContext.animationGroups[index] ?? null);
        case "Mesh" /* FlowGraphAssetType.Mesh */:
            return useIndexAsUniqueId
                ? (assetsContext.meshes.find((a) => a.uniqueId === index) ?? null)
                : (assetsContext.meshes[index] ?? null);
        case "Material" /* FlowGraphAssetType.Material */:
            return useIndexAsUniqueId
                ? (assetsContext.materials.find((a) => a.uniqueId === index) ?? null)
                : (assetsContext.materials[index] ?? null);
        case "Camera" /* FlowGraphAssetType.Camera */:
            return useIndexAsUniqueId
                ? (assetsContext.cameras.find((a) => a.uniqueId === index) ?? null)
                : (assetsContext.cameras[index] ?? null);
        case "Light" /* FlowGraphAssetType.Light */:
            return useIndexAsUniqueId
                ? (assetsContext.lights.find((a) => a.uniqueId === index) ?? null)
                : (assetsContext.lights[index] ?? null);
        default:
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

/***/ "../core/dist/FlowGraph/flowGraphAsyncExecutionBlock.js":
/*!**************************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphAsyncExecutionBlock.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphAsyncExecutionBlock: () => (/* binding */ FlowGraphAsyncExecutionBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphExecutionBlockWithOutSignal */ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * An async execution block can start tasks that will be executed asynchronously.
 * It should also be responsible for clearing it in _cancelPendingTasks.
 */
class FlowGraphAsyncExecutionBlock extends _flowGraphExecutionBlockWithOutSignal__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlockWithOutSignal {
    constructor(config, events) {
        super(config);
        this._eventsSignalOutputs = {};
        this.done = this._registerSignalOutput("done");
        if (events) {
            for (const eventName of events) {
                this._eventsSignalOutputs[eventName] = this._registerSignalOutput(eventName + "Event");
            }
        }
    }
    /**
     * @internal
     * This function can be overridden to execute any
     * logic that should be executed on every frame
     * while the async task is pending.
     * @param context the context in which it is running
     */
    _executeOnTick(_context) { }
    /**
     * @internal
     * @param context
     */
    _startPendingTasks(context) {
        if (context._getExecutionVariable(this, "_initialized", false)) {
            this._cancelPendingTasks(context);
            this._resetAfterCanceled(context);
        }
        this._preparePendingTasks(context);
        context._addPendingBlock(this);
        this.out._activateSignal(context);
        context._setExecutionVariable(this, "_initialized", true);
    }
    _resetAfterCanceled(context) {
        context._deleteExecutionVariable(this, "_initialized");
        context._removePendingBlock(this);
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

/***/ "../core/dist/FlowGraph/flowGraphBlock.js":
/*!************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphBlock.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphBlock: () => (/* binding */ FlowGraphBlock)
/* harmony export */ });
/* harmony import */ var _Misc_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/guid */ "../core/dist/Misc/guid.js");
/* harmony import */ var _flowGraphDataConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraphDataConnection */ "../core/dist/FlowGraph/flowGraphDataConnection.js");
/* harmony import */ var _serialization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialization */ "../core/dist/FlowGraph/serialization.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * A block in a flow graph. The most basic form
 * of a block has inputs and outputs that contain
 * data.
 */
class FlowGraphBlock {
    /** Constructor is protected so only subclasses can be instantiated
     * @param config optional configuration for this block
     * @internal - do not use directly. Extend this class instead.
     */
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        this.config = config;
        /**
         * A randomly generated GUID for each block.
         */
        this.uniqueId = (0,_Misc_guid__WEBPACK_IMPORTED_MODULE_0__.RandomGUID)();
        this.name = this.config?.name ?? this.getClassName();
        this.dataInputs = [];
        this.dataOutputs = [];
    }
    /**
     * @internal
     * This function is called when the block needs to update its output flows.
     * @param _context the context in which it is running
     */
    _updateOutputs(_context) {
        // empty by default, overridden in data blocks
    }
    /**
     * Registers a data input on the block.
     * @param name the name of the input
     * @param richType the type of the input
     * @param defaultValue optional default value of the input. If not set, the rich type's default value will be used.
     * @returns the created connection
     */
    registerDataInput(name, richType, defaultValue) {
        const input = new _flowGraphDataConnection__WEBPACK_IMPORTED_MODULE_1__.FlowGraphDataConnection(name, 0 /* FlowGraphConnectionType.Input */, this, richType, defaultValue);
        this.dataInputs.push(input);
        return input;
    }
    /**
     * Registers a data output on the block.
     * @param name the name of the input
     * @param richType the type of the input
     * @param defaultValue optional default value of the input. If not set, the rich type's default value will be used.
     * @returns the created connection
     */
    registerDataOutput(name, richType, defaultValue) {
        const output = new _flowGraphDataConnection__WEBPACK_IMPORTED_MODULE_1__.FlowGraphDataConnection(name, 1 /* FlowGraphConnectionType.Output */, this, richType, defaultValue);
        this.dataOutputs.push(output);
        return output;
    }
    /**
     * Given the name of a data input, returns the connection if it exists
     * @param name the name of the input
     * @returns the connection if it exists, undefined otherwise
     */
    getDataInput(name) {
        return this.dataInputs.find((i) => i.name === name);
    }
    /**
     * Given the name of a data output, returns the connection if it exists
     * @param name the name of the output
     * @returns the connection if it exists, undefined otherwise
     */
    getDataOutput(name) {
        return this.dataOutputs.find((i) => i.name === name);
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     * @param _valueSerializeFunction a function that serializes a specific value
     */
    serialize(serializationObject = {}, _valueSerializeFunction = _serialization__WEBPACK_IMPORTED_MODULE_2__.defaultValueSerializationFunction) {
        serializationObject.uniqueId = this.uniqueId;
        serializationObject.config = {};
        if (this.config) {
            const config = this.config;
            const keys = Object.keys(config);
            for (const key of keys) {
                _valueSerializeFunction(key, config[key], serializationObject.config);
            }
        }
        serializationObject.dataInputs = [];
        serializationObject.dataOutputs = [];
        serializationObject.className = this.getClassName();
        for (const input of this.dataInputs) {
            const serializedInput = {};
            input.serialize(serializedInput);
            serializationObject.dataInputs.push(serializedInput);
        }
        for (const output of this.dataOutputs) {
            const serializedOutput = {};
            output.serialize(serializedOutput);
            serializationObject.dataOutputs.push(serializedOutput);
        }
    }
    /**
     * Deserializes this block
     * @param _serializationObject the object to deserialize from
     */
    deserialize(_serializationObject) {
        // no-op by default
    }
    _log(context, action, payload) {
        context.logger?.addLogItem({
            action,
            payload,
            className: this.getClassName(),
            uniqueId: this.uniqueId,
        });
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphBlock";
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

/***/ "../core/dist/FlowGraph/flowGraphConnection.js":
/*!*****************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphConnection.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphConnection: () => (/* binding */ FlowGraphConnection),
/* harmony export */   FlowGraphConnectionType: () => (/* binding */ FlowGraphConnectionType)
/* harmony export */ });
/* harmony import */ var _Misc_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/guid */ "../core/dist/Misc/guid.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * The type of a connection point - input or output.
 */
var FlowGraphConnectionType;
(function (FlowGraphConnectionType) {
    FlowGraphConnectionType[FlowGraphConnectionType["Input"] = 0] = "Input";
    FlowGraphConnectionType[FlowGraphConnectionType["Output"] = 1] = "Output";
})(FlowGraphConnectionType || (FlowGraphConnectionType = {}));
/**
 * The base connection class.
 */
class FlowGraphConnection {
    constructor(name, _connectionType, 
    /* @internal */ _ownerBlock) {
        this._ownerBlock = _ownerBlock;
        /** @internal */
        this._connectedPoint = [];
        /**
         * A uniquely identifying string for the connection.
         */
        this.uniqueId = (0,_Misc_guid__WEBPACK_IMPORTED_MODULE_0__.RandomGUID)();
        /**
         * Used for parsing connections.
         * @internal
         */
        // disable warning as this is used for parsing
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.connectedPointIds = [];
        this.name = name;
        this._connectionType = _connectionType;
    }
    /**
     * The type of the connection
     */
    get connectionType() {
        return this._connectionType;
    }
    /**
     * @internal
     * Override this to indicate if a point can connect to more than one point.
     */
    _isSingularConnection() {
        return true;
    }
    /**
     * Returns if a point is connected to any other point.
     * @returns boolean indicating if the point is connected.
     */
    isConnected() {
        return this._connectedPoint.length > 0;
    }
    /**
     * Connects two connections together.
     * @param point the connection to connect to.
     */
    connectTo(point) {
        if (this._connectionType === point._connectionType) {
            throw new Error(`Cannot connect two points of type ${this.connectionType}`);
        }
        if ((this._isSingularConnection() && this._connectedPoint.length > 0) || (point._isSingularConnection() && point._connectedPoint.length > 0)) {
            throw new Error("Max number of connections for point reached");
        }
        this._connectedPoint.push(point);
        point._connectedPoint.push(this);
    }
    /**
     * Disconnects two connections.
     * @param point the connection to disconnect from.
     * @param removeFromLocal if true, the connection will be removed from the local connection list.
     */
    disconnectFrom(point, removeFromLocal = true) {
        const indexLocal = this._connectedPoint.indexOf(point);
        const indexConnected = point._connectedPoint.indexOf(this);
        if (indexLocal === -1 || indexConnected === -1) {
            return;
        }
        if (removeFromLocal) {
            this._connectedPoint.splice(indexLocal, 1);
        }
        point._connectedPoint.splice(indexConnected, 1);
    }
    /**
     * Disconnects all connected points.
     */
    disconnectFromAll() {
        for (const point of this._connectedPoint) {
            this.disconnectFrom(point, false);
        }
        this._connectedPoint.length = 0;
    }
    dispose() {
        for (const point of this._connectedPoint) {
            this.disconnectFrom(point);
        }
    }
    /**
     * Saves the connection to a JSON object.
     * @param serializationObject the object to serialize to.
     */
    serialize(serializationObject = {}) {
        serializationObject.uniqueId = this.uniqueId;
        serializationObject.name = this.name;
        serializationObject._connectionType = this._connectionType;
        serializationObject.connectedPointIds = [];
        serializationObject.className = this.getClassName();
        for (const point of this._connectedPoint) {
            serializationObject.connectedPointIds.push(point.uniqueId);
        }
    }
    /**
     * @returns class name of the connection.
     */
    getClassName() {
        return "FGConnection";
    }
    /**
     * Deserialize from a object into this
     * @param serializationObject the object to deserialize from.
     */
    deserialize(serializationObject) {
        this.uniqueId = serializationObject.uniqueId;
        this.name = serializationObject.name;
        this._connectionType = serializationObject._connectionType;
        this.connectedPointIds = serializationObject.connectedPointIds;
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

/***/ "../core/dist/FlowGraph/flowGraphContext.js":
/*!**************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphContext: () => (/* binding */ FlowGraphContext)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/decorators */ "../core/dist/Misc/decorators.js");
/* harmony import */ var _Misc_guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/guid */ "../core/dist/Misc/guid.js");
/* harmony import */ var _serialization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialization */ "../core/dist/FlowGraph/serialization.js");
/* harmony import */ var _Misc_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _flowGraphAssetsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flowGraphAssetsContext */ "../core/dist/FlowGraph/flowGraphAssetsContext.js");
/* harmony import */ var _flowGraphLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flowGraphLogger */ "../core/dist/FlowGraph/flowGraphLogger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








/**
 * The context represents the current state and execution of the flow graph.
 * It contains both user-defined variables, which are derived from
 * a more general variable definition, and execution variables that
 * are set by the blocks.
 */
class FlowGraphContext {
    /**
     * Enable logging on this context
     */
    get enableLogging() {
        return this._enableLogging;
    }
    set enableLogging(value) {
        if (this._enableLogging === value) {
            return;
        }
        this._enableLogging = value;
        if (this._enableLogging) {
            this.logger = new _flowGraphLogger__WEBPACK_IMPORTED_MODULE_5__.FlowGraphLogger();
            this.logger.logToConsole = true;
        }
        else {
            this.logger = null;
        }
    }
    constructor(params) {
        /**
         * A randomly generated GUID for each context.
         */
        this.uniqueId = (0,_Misc_guid__WEBPACK_IMPORTED_MODULE_1__.RandomGUID)();
        /**
         * These are the variables defined by a user.
         */
        this._userVariables = {};
        /**
         * These are the variables set by the blocks.
         */
        this._executionVariables = {};
        /**
         * A context-specific global variables, available to all blocks in the context.
         */
        this._globalContextVariables = {};
        /**
         * These are the values for the data connection points
         */
        this._connectionValues = {};
        /**
         * These are blocks that have currently pending tasks/listeners that need to be cleaned up.
         */
        this._pendingBlocks = [];
        /**
         * A monotonically increasing ID for each execution.
         * Incremented for every block executed.
         */
        this._executionId = 0;
        /**
         * Observable that is triggered when a node is executed.
         */
        this.onNodeExecutedObservable = new _Misc_observable__WEBPACK_IMPORTED_MODULE_3__.Observable();
        /**
         * Whether to treat data as right-handed.
         * This is used when serializing data from a right-handed system, while running the context in a left-handed system, for example in glTF parsing.
         * Default is false.
         */
        this.treatDataAsRightHanded = false;
        this._enableLogging = false;
        this._configuration = params;
        this.assetsContext = params.assetsContext ?? params.scene;
    }
    /**
     * Check if a user-defined variable is defined.
     * @param name the name of the variable
     * @returns true if the variable is defined
     */
    hasVariable(name) {
        return name in this._userVariables;
    }
    /**
     * Set a user-defined variable.
     * @param name the name of the variable
     * @param value the value of the variable
     */
    setVariable(name, value) {
        this._userVariables[name] = value;
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "ContextVariableSet" /* FlowGraphAction.ContextVariableSet */,
            payload: {
                name,
                value,
            },
        });
    }
    /**
     * Get an assets from the assets context based on its type and index in the array
     * @param type The type of the asset
     * @param index The index of the asset
     * @returns The asset or null if not found
     */
    getAsset(type, index) {
        return (0,_flowGraphAssetsContext__WEBPACK_IMPORTED_MODULE_4__.GetFlowGraphAssetWithType)(this.assetsContext, type, index);
    }
    /**
     * Get a user-defined variable.
     * @param name the name of the variable
     * @returns the value of the variable
     */
    getVariable(name) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "ContextVariableGet" /* FlowGraphAction.ContextVariableGet */,
            payload: {
                name,
                value: this._userVariables[name],
            },
        });
        return this._userVariables[name];
    }
    /**
     * Gets all user variables map
     */
    get userVariables() {
        return this._userVariables;
    }
    /**
     * Get the scene that the context belongs to.
     * @returns the scene
     */
    getScene() {
        return this._configuration.scene;
    }
    _getUniqueIdPrefixedName(obj, name) {
        return `${obj.uniqueId}_${name}`;
    }
    /**
     * @internal
     * @param name name of the variable
     * @param defaultValue default value to return if the variable is not defined
     * @returns the variable value or the default value if the variable is not defined
     */
    _getGlobalContextVariable(name, defaultValue) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GlobalVariableGet" /* FlowGraphAction.GlobalVariableGet */,
            payload: {
                name,
                defaultValue,
                possibleValue: this._globalContextVariables[name],
            },
        });
        if (this._hasGlobalContextVariable(name)) {
            return this._globalContextVariables[name];
        }
        else {
            return defaultValue;
        }
    }
    /**
     * Set a global context variable
     * @internal
     * @param name the name of the variable
     * @param value the value of the variable
     */
    _setGlobalContextVariable(name, value) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GlobalVariableSet" /* FlowGraphAction.GlobalVariableSet */,
            payload: { name, value },
        });
        this._globalContextVariables[name] = value;
    }
    /**
     * Delete a global context variable
     * @internal
     * @param name the name of the variable
     */
    _deleteGlobalContextVariable(name) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GlobalVariableDelete" /* FlowGraphAction.GlobalVariableDelete */,
            payload: { name },
        });
        delete this._globalContextVariables[name];
    }
    /**
     * Check if a global context variable is defined
     * @internal
     * @param name the name of the variable
     * @returns true if the variable is defined
     */
    _hasGlobalContextVariable(name) {
        return name in this._globalContextVariables;
    }
    /**
     * Set an internal execution variable
     * @internal
     * @param name
     * @param value
     */
    _setExecutionVariable(block, name, value) {
        this._executionVariables[this._getUniqueIdPrefixedName(block, name)] = value;
    }
    /**
     * Get an internal execution variable
     * @internal
     * @param name
     * @returns
     */
    _getExecutionVariable(block, name, defaultValue) {
        if (this._hasExecutionVariable(block, name)) {
            return this._executionVariables[this._getUniqueIdPrefixedName(block, name)];
        }
        else {
            return defaultValue;
        }
    }
    /**
     * Delete an internal execution variable
     * @internal
     * @param block
     * @param name
     */
    _deleteExecutionVariable(block, name) {
        delete this._executionVariables[this._getUniqueIdPrefixedName(block, name)];
    }
    /**
     * Check if an internal execution variable is defined
     * @internal
     * @param block
     * @param name
     * @returns
     */
    _hasExecutionVariable(block, name) {
        return this._getUniqueIdPrefixedName(block, name) in this._executionVariables;
    }
    /**
     * Check if a connection value is defined
     * @internal
     * @param connectionPoint
     * @returns
     */
    _hasConnectionValue(connectionPoint) {
        return connectionPoint.uniqueId in this._connectionValues;
    }
    /**
     * Set a connection value
     * @internal
     * @param connectionPoint
     * @param value
     */
    _setConnectionValue(connectionPoint, value) {
        this._connectionValues[connectionPoint.uniqueId] = value;
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "SetConnectionValue" /* FlowGraphAction.SetConnectionValue */,
            payload: {
                connectionPointId: connectionPoint.uniqueId,
                value,
            },
        });
    }
    /**
     * Set a connection value by key
     * @internal
     * @param key the key of the connection value
     * @param value the value of the connection
     */
    _setConnectionValueByKey(key, value) {
        this._connectionValues[key] = value;
    }
    /**
     * Get a connection value
     * @internal
     * @param connectionPoint
     * @returns
     */
    _getConnectionValue(connectionPoint) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GetConnectionValue" /* FlowGraphAction.GetConnectionValue */,
            payload: {
                connectionPointId: connectionPoint.uniqueId,
                value: this._connectionValues[connectionPoint.uniqueId],
            },
        });
        return this._connectionValues[connectionPoint.uniqueId];
    }
    /**
     * Get the configuration
     * @internal
     * @param name
     * @param value
     */
    get configuration() {
        return this._configuration;
    }
    /**
     * Check if there are any pending blocks in this context
     * @returns true if there are pending blocks
     */
    get hasPendingBlocks() {
        return this._pendingBlocks.length > 0;
    }
    /**
     * Add a block to the list of blocks that have pending tasks.
     * @internal
     * @param block
     */
    _addPendingBlock(block) {
        // check if block is already in the array
        if (this._pendingBlocks.includes(block)) {
            return;
        }
        this._pendingBlocks.push(block);
        // sort pending blocks by priority
        this._pendingBlocks.sort((a, b) => a.priority - b.priority);
    }
    /**
     * Remove a block from the list of blocks that have pending tasks.
     * @internal
     * @param block
     */
    _removePendingBlock(block) {
        const index = this._pendingBlocks.indexOf(block);
        if (index !== -1) {
            this._pendingBlocks.splice(index, 1);
        }
    }
    /**
     * Clear all pending blocks.
     * @internal
     */
    _clearPendingBlocks() {
        for (const block of this._pendingBlocks) {
            block._cancelPendingTasks(this);
        }
        this._pendingBlocks.length = 0;
    }
    /**
     * @internal
     * Function that notifies the node executed observable
     * @param node
     */
    _notifyExecuteNode(node) {
        this.onNodeExecutedObservable.notifyObservers(node);
        this.logger?.addLogItem({
            time: Date.now(),
            className: node.getClassName(),
            uniqueId: node.uniqueId,
            action: "ExecuteBlock" /* FlowGraphAction.ExecuteBlock */,
        });
    }
    _notifyOnTick(framePayload) {
        // set the values as global variables
        this._setGlobalContextVariable("timeSinceStart", framePayload.timeSinceStart);
        this._setGlobalContextVariable("deltaTime", framePayload.deltaTime);
        // iterate the pending blocks and run each one's onFrame function
        for (const block of this._pendingBlocks) {
            block._executeOnTick?.(this);
        }
    }
    /**
     * @internal
     */
    _increaseExecutionId() {
        this._executionId++;
    }
    /**
     * A monotonically increasing ID for each execution.
     * Incremented for every block executed.
     */
    get executionId() {
        return this._executionId;
    }
    /**
     * Serializes a context
     * @param serializationObject the object to write the values in
     * @param valueSerializationFunction a function to serialize complex values
     */
    serialize(serializationObject = {}, valueSerializationFunction = _serialization__WEBPACK_IMPORTED_MODULE_2__.defaultValueSerializationFunction) {
        serializationObject.uniqueId = this.uniqueId;
        serializationObject._userVariables = {};
        for (const key in this._userVariables) {
            valueSerializationFunction(key, this._userVariables[key], serializationObject._userVariables);
        }
        serializationObject._connectionValues = {};
        for (const key in this._connectionValues) {
            valueSerializationFunction(key, this._connectionValues[key], serializationObject._connectionValues);
        }
        // serialize assets context, if not scene
        if (this.assetsContext !== this.getScene()) {
            serializationObject._assetsContext = {
                meshes: this.assetsContext.meshes.map((m) => m.id),
                materials: this.assetsContext.materials.map((m) => m.id),
                textures: this.assetsContext.textures.map((m) => m.name),
                animations: this.assetsContext.animations.map((m) => m.name),
                lights: this.assetsContext.lights.map((m) => m.id),
                cameras: this.assetsContext.cameras.map((m) => m.id),
                sounds: this.assetsContext.sounds?.map((m) => m.name),
                skeletons: this.assetsContext.skeletons.map((m) => m.id),
                particleSystems: this.assetsContext.particleSystems.map((m) => m.name),
                geometries: this.assetsContext.geometries.map((m) => m.id),
                multiMaterials: this.assetsContext.multiMaterials.map((m) => m.id),
                transformNodes: this.assetsContext.transformNodes.map((m) => m.id),
            };
        }
    }
    /**
     * @returns the class name of the object.
     */
    getClassName() {
        return "FlowGraphContext";
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], FlowGraphContext.prototype, "uniqueId", void 0);


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

/***/ "../core/dist/FlowGraph/flowGraphCoordinator.js":
/*!******************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphCoordinator.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphCoordinator: () => (/* binding */ FlowGraphCoordinator)
/* harmony export */ });
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _flowGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraph */ "../core/dist/FlowGraph/flowGraph.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




/**
 * This class holds all of the existing flow graphs and is responsible for creating new ones.
 * It also handles starting/stopping multiple graphs and communication between them through an Event Coordinator
 * This is the entry point for the flow graph system.
 * @experimental This class is still in development and is subject to change.
 */
class FlowGraphCoordinator {
    constructor(
    /**
     * the configuration of the block
     */
    config) {
        this.config = config;
        /**
         * When set to true (default) custom events will be dispatched synchronously.
         * This means that the events will be dispatched immediately when they are triggered.
         */
        this.dispatchEventsSynchronously = true;
        this._flowGraphs = [];
        this._customEventsMap = new Map();
        this._eventExecutionCounter = new Map();
        this._executeOnNextFrame = [];
        this._eventUniqueId = 0;
        // When the scene is disposed, dispose all graphs currently running on it.
        this._disposeObserver = this.config.scene.onDisposeObservable.add(() => {
            this.dispose();
        });
        this._onBeforeRenderObserver = this.config.scene.onBeforeRenderObservable.add(() => {
            // Reset the event execution counter at the beginning of each frame.
            this._eventExecutionCounter.clear();
            // duplicate the _executeOnNextFrame array to avoid modifying it while iterating over it
            const executeOnNextFrame = this._executeOnNextFrame.slice(0);
            if (executeOnNextFrame.length) {
                // Execute the events that were triggered on the next frame.
                for (const event of executeOnNextFrame) {
                    this.notifyCustomEvent(event.id, event.data, false);
                    // remove the event from the array
                    const index = this._executeOnNextFrame.findIndex((e) => e.uniqueId === event.uniqueId);
                    if (index !== -1) {
                        this._executeOnNextFrame.splice(index, 1);
                    }
                }
            }
        });
        // Add itself to the SceneCoordinators list for the Inspector.
        const coordinators = FlowGraphCoordinator.SceneCoordinators.get(this.config.scene) ?? [];
        coordinators.push(this);
    }
    /**
     * Creates a new flow graph and adds it to the list of existing flow graphs
     * @returns a new flow graph
     */
    createGraph() {
        const graph = new _flowGraph__WEBPACK_IMPORTED_MODULE_1__.FlowGraph({ scene: this.config.scene, coordinator: this });
        this._flowGraphs.push(graph);
        return graph;
    }
    /**
     * Removes a flow graph from the list of existing flow graphs and disposes it
     * @param graph the graph to remove
     */
    removeGraph(graph) {
        const index = this._flowGraphs.indexOf(graph);
        if (index !== -1) {
            graph.dispose();
            this._flowGraphs.splice(index, 1);
        }
    }
    /**
     * Starts all graphs
     */
    start() {
        for (const graph of this._flowGraphs) {
            graph.start();
        }
    }
    /**
     * Disposes all graphs
     */
    dispose() {
        for (const graph of this._flowGraphs) {
            graph.dispose();
        }
        this._flowGraphs.length = 0;
        this._disposeObserver?.remove();
        this._onBeforeRenderObserver?.remove();
        // Remove itself from the SceneCoordinators list for the Inspector.
        const coordinators = FlowGraphCoordinator.SceneCoordinators.get(this.config.scene) ?? [];
        const index = coordinators.indexOf(this);
        if (index !== -1) {
            coordinators.splice(index, 1);
        }
    }
    /**
     * Serializes this coordinator to a JSON object.
     * @param serializationObject the object to serialize to
     * @param valueSerializeFunction the function to use to serialize the value
     */
    serialize(serializationObject, valueSerializeFunction) {
        serializationObject._flowGraphs = [];
        for (const graph of this._flowGraphs) {
            const serializedGraph = {};
            graph.serialize(serializedGraph, valueSerializeFunction);
            serializationObject._flowGraphs.push(serializedGraph);
        }
        serializationObject.dispatchEventsSynchronously = this.dispatchEventsSynchronously;
    }
    /**
     * Gets the list of flow graphs
     */
    get flowGraphs() {
        return this._flowGraphs;
    }
    /**
     * Get an observable that will be notified when the event with the given id is fired.
     * @param id the id of the event
     * @returns the observable for the event
     */
    getCustomEventObservable(id) {
        let observable = this._customEventsMap.get(id);
        if (!observable) {
            // receive event is initialized before scene start, so no need to notify if triggered. but possible!
            observable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable( /*undefined, true*/);
            this._customEventsMap.set(id, observable);
        }
        return observable;
    }
    /**
     * Notifies the observable for the given event id with the given data.
     * @param id the id of the event
     * @param data the data to send with the event
     * @param async if true, the event will be dispatched asynchronously
     */
    notifyCustomEvent(id, data, async = !this.dispatchEventsSynchronously) {
        if (async) {
            this._executeOnNextFrame.push({ id, data, uniqueId: this._eventUniqueId++ });
            return;
        }
        // check if we are not exceeding the max number of events
        if (this._eventExecutionCounter.has(id)) {
            const count = this._eventExecutionCounter.get(id);
            this._eventExecutionCounter.set(id, count + 1);
            if (count >= FlowGraphCoordinator.MaxEventTypeExecutionPerFrame) {
                if (count === FlowGraphCoordinator.MaxEventTypeExecutionPerFrame) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Warn(`FlowGraphCoordinator: Too many executions of event "${id}".`);
                }
                return;
            }
        }
        else {
            this._eventExecutionCounter.set(id, 1);
        }
        const observable = this._customEventsMap.get(id);
        if (observable) {
            observable.notifyObservers(data);
        }
    }
}
/**
 * The maximum number of events per type.
 * This is used to limit the number of events that can be created in a single scene.
 * This is to prevent infinite loops.
 */
FlowGraphCoordinator.MaxEventsPerType = 30;
/**
 * The maximum number of execution of a specific event in a single frame.
 */
FlowGraphCoordinator.MaxEventTypeExecutionPerFrame = 30;
/**
 * @internal
 * A list of all the coordinators per scene. Will be used by the inspector
 */
FlowGraphCoordinator.SceneCoordinators = new Map();


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

/***/ "../core/dist/FlowGraph/flowGraphDataConnection.js":
/*!*********************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphDataConnection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphDataConnection: () => (/* binding */ FlowGraphDataConnection)
/* harmony export */ });
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* harmony import */ var _flowGraphConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraphConnection */ "../core/dist/FlowGraph/flowGraphConnection.js");
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* harmony import */ var _serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialization */ "../core/dist/FlowGraph/serialization.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");





/**
 * Represents a connection point for data.
 * An unconnected input point can have a default value.
 * An output point will only have a value if it is connected to an input point. Furthermore,
 * if the point belongs to a "function" node, the node will run its function to update the value.
 */
class FlowGraphDataConnection extends _flowGraphConnection__WEBPACK_IMPORTED_MODULE_1__.FlowGraphConnection {
    /**
     * Create a new data connection point.
     * @param name the name of the connection
     * @param connectionType the type of the connection
     * @param ownerBlock the block that owns this connection
     * @param richType the type of the data in this block
     * @param _defaultValue the default value of the connection
     * @param _optional if the connection is optional
     */
    constructor(name, connectionType, ownerBlock, 
    /**
     * the type of the data in this block
     */
    richType, 
    /**
     * [any] the default value of the connection
     */
    _defaultValue = richType.defaultValue, 
    /**
     * [false] if the connection is optional
     */
    _optional = false) {
        super(name, connectionType, ownerBlock);
        this.richType = richType;
        this._defaultValue = _defaultValue;
        this._optional = _optional;
        this._isDisabled = false;
        /**
         * This is used for debugging purposes! It is the last value that was set to this connection with ANY context.
         * Do not use this value for anything else, as it might be wrong if used in a different context.
         */
        this._lastValue = null;
        /**
         * a data transformer function, if needed.
         * This can be used, for example, to force seconds into milliseconds output, if it makes sense in your case.
         */
        this.dataTransformer = null;
        /**
         * An observable that is triggered when the value of the connection changes.
         */
        this.onValueChangedObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_2__.Observable();
    }
    /**
     * Whether or not the connection is optional.
     * Currently only used for UI control.
     */
    get optional() {
        return this._optional;
    }
    /**
     * is this connection disabled
     * If the connection is disabled you will not be able to connect anything to it.
     */
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        if (this._isDisabled === value) {
            return;
        }
        this._isDisabled = value;
        if (this._isDisabled) {
            this.disconnectFromAll();
        }
    }
    /**
     * An output data block can connect to multiple input data blocks,
     * but an input data block can only connect to one output data block.
     * @returns true if the connection is singular
     */
    _isSingularConnection() {
        return this.connectionType === 0 /* FlowGraphConnectionType.Input */;
    }
    /**
     * Set the value of the connection in a specific context.
     * @param value the value to set
     * @param context the context to which the value is set
     */
    setValue(value, context) {
        // check if the value is different
        if (context._getConnectionValue(this) === value) {
            return;
        }
        context._setConnectionValue(this, value);
        this.onValueChangedObservable.notifyObservers(value);
    }
    /**
     * Reset the value of the connection to the default value.
     * @param context the context in which the value is reset
     */
    resetToDefaultValue(context) {
        context._setConnectionValue(this, this._defaultValue);
    }
    /**
     * Connect this point to another point.
     * @param point the point to connect to.
     */
    connectTo(point) {
        if (this._isDisabled) {
            return;
        }
        super.connectTo(point);
    }
    _getValueOrDefault(context) {
        const val = context._getConnectionValue(this) ?? this._defaultValue;
        return this.dataTransformer ? this.dataTransformer(val) : val;
    }
    /**
     * Gets the value of the connection in a specific context.
     * @param context the context from which the value is retrieved
     * @returns the value of the connection
     */
    getValue(context) {
        if (this.connectionType === 1 /* FlowGraphConnectionType.Output */) {
            context._notifyExecuteNode(this._ownerBlock);
            this._ownerBlock._updateOutputs(context);
            const value = this._getValueOrDefault(context);
            this._lastValue = value;
            return this.richType.typeTransformer ? this.richType.typeTransformer(value) : value;
        }
        const value = !this.isConnected() ? this._getValueOrDefault(context) : this._connectedPoint[0].getValue(context);
        this._lastValue = value;
        return this.richType.typeTransformer ? this.richType.typeTransformer(value) : value;
    }
    /**
     * @internal
     */
    _getLastValue() {
        return this._lastValue;
    }
    /**
     * @returns class name of the object.
     */
    getClassName() {
        return "FlowGraphDataConnection";
    }
    /**
     * Serializes this object.
     * @param serializationObject the object to serialize to
     */
    serialize(serializationObject = {}) {
        super.serialize(serializationObject);
        serializationObject.richType = {};
        this.richType.serialize(serializationObject.richType);
        serializationObject.optional = this._optional;
        (0,_serialization__WEBPACK_IMPORTED_MODULE_3__.defaultValueSerializationFunction)("defaultValue", this._defaultValue, serializationObject);
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("FlowGraphDataConnection", FlowGraphDataConnection);


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

/***/ "../core/dist/FlowGraph/flowGraphEventBlock.js":
/*!*****************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphEventBlock.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphEventBlock: () => (/* binding */ FlowGraphEventBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphAsyncExecutionBlock */ "../core/dist/FlowGraph/flowGraphAsyncExecutionBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * A type of block that listens to an event observable and activates
 * its output signal when the event is triggered.
 */
class FlowGraphEventBlock extends _flowGraphAsyncExecutionBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphAsyncExecutionBlock {
    constructor() {
        super(...arguments);
        /**
         * the priority of initialization of this block.
         * For example, scene start should have a negative priority because it should be initialized last.
         */
        this.initPriority = 0;
        /**
         * The type of the event
         */
        this.type = "NoTrigger" /* FlowGraphEventType.NoTrigger */;
    }
    /**
     * @internal
     */
    _execute(context) {
        context._notifyExecuteNode(this);
        this.done._activateSignal(context);
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

/***/ "../core/dist/FlowGraph/flowGraphExecutionBlock.js":
/*!*********************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphExecutionBlock.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphExecutionBlock: () => (/* binding */ FlowGraphExecutionBlock)
/* harmony export */ });
/* harmony import */ var _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphBlock */ "../core/dist/FlowGraph/flowGraphBlock.js");
/* harmony import */ var _flowGraphSignalConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraphSignalConnection */ "../core/dist/FlowGraph/flowGraphSignalConnection.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * A block that executes some action. Always has an input signal (which is not used by event blocks).
 * Can have one or more output signals.
 */
class FlowGraphExecutionBlock extends _flowGraphBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphBlock {
    constructor(config) {
        super(config);
        /**
         * The priority of the block. Higher priority blocks will be executed first.
         * Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.
         */
        this.priority = 0;
        this.signalInputs = [];
        this.signalOutputs = [];
        this.in = this._registerSignalInput("in");
        this.error = this._registerSignalOutput("error");
    }
    _registerSignalInput(name) {
        const input = new _flowGraphSignalConnection__WEBPACK_IMPORTED_MODULE_1__.FlowGraphSignalConnection(name, 0 /* FlowGraphConnectionType.Input */, this);
        this.signalInputs.push(input);
        return input;
    }
    _registerSignalOutput(name) {
        const output = new _flowGraphSignalConnection__WEBPACK_IMPORTED_MODULE_1__.FlowGraphSignalConnection(name, 1 /* FlowGraphConnectionType.Output */, this);
        this.signalOutputs.push(output);
        return output;
    }
    _unregisterSignalInput(name) {
        const index = this.signalInputs.findIndex((input) => input.name === name);
        if (index !== -1) {
            this.signalInputs[index].dispose();
            this.signalInputs.splice(index, 1);
        }
    }
    _unregisterSignalOutput(name) {
        const index = this.signalOutputs.findIndex((output) => output.name === name);
        if (index !== -1) {
            this.signalOutputs[index].dispose();
            this.signalOutputs.splice(index, 1);
        }
    }
    _reportError(context, error) {
        this.error.payload = typeof error === "string" ? new Error(error) : error;
        this.error._activateSignal(context);
    }
    /**
     * Given a name of a signal input, return that input if it exists
     * @param name the name of the input
     * @returns if the input exists, the input. Otherwise, undefined.
     */
    getSignalInput(name) {
        return this.signalInputs.find((input) => input.name === name);
    }
    /**
     * Given a name of a signal output, return that input if it exists
     * @param name the name of the input
     * @returns if the input exists, the input. Otherwise, undefined.
     */
    getSignalOutput(name) {
        return this.signalOutputs.find((output) => output.name === name);
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize in
     */
    serialize(serializationObject = {}) {
        super.serialize(serializationObject);
        serializationObject.signalInputs = [];
        serializationObject.signalOutputs = [];
        for (const input of this.signalInputs) {
            const serializedInput = {};
            input.serialize(serializedInput);
            serializationObject.signalInputs.push(serializedInput);
        }
        for (const output of this.signalOutputs) {
            const serializedOutput = {};
            output.serialize(serializedOutput);
            serializationObject.signalOutputs.push(serializedOutput);
        }
    }
    /**
     * Deserializes from an object
     * @param serializationObject the object to deserialize from
     */
    deserialize(serializationObject) {
        for (let i = 0; i < serializationObject.signalInputs.length; i++) {
            const signalInput = this.getSignalInput(serializationObject.signalInputs[i].name);
            if (signalInput) {
                signalInput.deserialize(serializationObject.signalInputs[i]);
            }
            else {
                throw new Error("Could not find signal input with name " + serializationObject.signalInputs[i].name + " in block " + serializationObject.className);
            }
        }
        for (let i = 0; i < serializationObject.signalOutputs.length; i++) {
            const signalOutput = this.getSignalOutput(serializationObject.signalOutputs[i].name);
            if (signalOutput) {
                signalOutput.deserialize(serializationObject.signalOutputs[i]);
            }
            else {
                throw new Error("Could not find signal output with name " + serializationObject.signalOutputs[i].name + " in block " + serializationObject.className);
            }
        }
    }
    /**
     * @returns the class name
     */
    getClassName() {
        return "FlowGraphExecutionBlock";
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

/***/ "../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js":
/*!**********************************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphExecutionBlockWithOutSignal.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphExecutionBlockWithOutSignal: () => (/* binding */ FlowGraphExecutionBlockWithOutSignal)
/* harmony export */ });
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


/**
 * An execution block that has an out signal. This signal is triggered when the synchronous execution of this block is done.
 * Most execution blocks will inherit from this, except for the ones that have multiple signals to be triggered.
 * (such as if blocks)
 */
class FlowGraphExecutionBlockWithOutSignal extends _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_0__.FlowGraphExecutionBlock {
    constructor(config) {
        super(config);
        this.out = this._registerSignalOutput("out");
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

/***/ "../core/dist/FlowGraph/flowGraphLogger.js":
/*!*************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphLogger.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphAction: () => (/* binding */ FlowGraphAction),
/* harmony export */   FlowGraphLogger: () => (/* binding */ FlowGraphLogger)
/* harmony export */ });
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");


var FlowGraphAction;
(function (FlowGraphAction) {
    FlowGraphAction["ExecuteBlock"] = "ExecuteBlock";
    FlowGraphAction["ExecuteEvent"] = "ExecuteEvent";
    FlowGraphAction["TriggerConnection"] = "TriggerConnection";
    FlowGraphAction["ContextVariableSet"] = "ContextVariableSet";
    FlowGraphAction["GlobalVariableSet"] = "GlobalVariableSet";
    FlowGraphAction["GlobalVariableDelete"] = "GlobalVariableDelete";
    FlowGraphAction["GlobalVariableGet"] = "GlobalVariableGet";
    FlowGraphAction["AddConnection"] = "AddConnection";
    FlowGraphAction["GetConnectionValue"] = "GetConnectionValue";
    FlowGraphAction["SetConnectionValue"] = "SetConnectionValue";
    FlowGraphAction["ActivateSignal"] = "ActivateSignal";
    FlowGraphAction["ContextVariableGet"] = "ContextVariableGet";
})(FlowGraphAction || (FlowGraphAction = {}));
/**
 * This class will be responsible of logging the flow graph activity.
 * Note that using this class might reduce performance, as it will log every action, according to the configuration.
 * It attaches to a flow graph and uses meta-programming to replace the methods of the flow graph to add logging abilities.
 */
class FlowGraphLogger {
    constructor() {
        /**
         * Whether to log to the console.
         */
        this.logToConsole = false;
        /**
         * The log cache of the flow graph.
         * Each item is a logged item, in order of execution.
         */
        this.log = [];
    }
    addLogItem(item) {
        if (!item.time) {
            item.time = Date.now();
        }
        this.log.push(item);
        if (this.logToConsole) {
            const value = item.payload?.value;
            if (typeof value === "object" && value.getClassName) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(`[FGLog] ${item.className}:${item.uniqueId.split("-")[0]} ${item.action} - ${JSON.stringify(value.getClassName())}: ${value.toString()}`);
            }
            else {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(`[FGLog] ${item.className}:${item.uniqueId.split("-")[0]} ${item.action} - ${JSON.stringify(item.payload)}`);
            }
        }
    }
    getItemsOfType(action) {
        return this.log.filter((i) => i.action === action);
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

/***/ "../core/dist/FlowGraph/flowGraphParser.js":
/*!*************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphParser.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDataOutConnectionByUniqueId: () => (/* binding */ GetDataOutConnectionByUniqueId),
/* harmony export */   GetSignalInConnectionByUniqueId: () => (/* binding */ GetSignalInConnectionByUniqueId),
/* harmony export */   ParseBlockAsync: () => (/* binding */ ParseBlockAsync),
/* harmony export */   ParseCoordinatorAsync: () => (/* binding */ ParseCoordinatorAsync),
/* harmony export */   ParseFlowGraph: () => (/* binding */ ParseFlowGraph),
/* harmony export */   ParseFlowGraphAsync: () => (/* binding */ ParseFlowGraphAsync),
/* harmony export */   ParseFlowGraphBlockWithClassType: () => (/* binding */ ParseFlowGraphBlockWithClassType),
/* harmony export */   ParseFlowGraphContext: () => (/* binding */ ParseFlowGraphContext),
/* harmony export */   ParseGraphConnectionWithClassType: () => (/* binding */ ParseGraphConnectionWithClassType),
/* harmony export */   ParseGraphDataConnection: () => (/* binding */ ParseGraphDataConnection)
/* harmony export */ });
/* harmony import */ var _Blocks_flowGraphBlockFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocks/flowGraphBlockFactory */ "../core/dist/FlowGraph/Blocks/flowGraphBlockFactory.js");
/* harmony import */ var _flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowGraphCoordinator */ "../core/dist/FlowGraph/flowGraphCoordinator.js");
/* harmony import */ var _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flowGraphEventBlock */ "../core/dist/FlowGraph/flowGraphEventBlock.js");
/* harmony import */ var _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flowGraphExecutionBlock */ "../core/dist/FlowGraph/flowGraphExecutionBlock.js");
/* harmony import */ var _serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serialization */ "../core/dist/FlowGraph/serialization.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");







/**
 * Given a list of blocks, find an output data connection that has a specific unique id
 * @param blocks a list of flow graph blocks
 * @param uniqueId the unique id of a connection
 * @returns the connection that has this unique id. throws an error if none was found
 */
function GetDataOutConnectionByUniqueId(blocks, uniqueId) {
    for (const block of blocks) {
        for (const dataOut of block.dataOutputs) {
            if (dataOut.uniqueId === uniqueId) {
                return dataOut;
            }
        }
    }
    throw new Error("Could not find data out connection with unique id " + uniqueId);
}
/**
 * Given a list of blocks, find an input signal connection that has a specific unique id
 * @param blocks a list of flow graph blocks
 * @param uniqueId the unique id of a connection
 * @returns the connection that has this unique id. throws an error if none was found
 */
function GetSignalInConnectionByUniqueId(blocks, uniqueId) {
    for (const block of blocks) {
        if (block instanceof _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphExecutionBlock) {
            for (const signalIn of block.signalInputs) {
                if (signalIn.uniqueId === uniqueId) {
                    return signalIn;
                }
            }
        }
    }
    throw new Error("Could not find signal in connection with unique id " + uniqueId);
}
/**
 * Parses a serialized coordinator.
 * @param serializedObject the object to parse
 * @param options the options to use when parsing
 * @returns the parsed coordinator
 */
async function ParseCoordinatorAsync(serializedObject, options) {
    const valueParseFunction = options.valueParseFunction ?? _serialization__WEBPACK_IMPORTED_MODULE_4__.defaultValueParseFunction;
    const coordinator = new _flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_1__.FlowGraphCoordinator({ scene: options.scene });
    if (serializedObject.dispatchEventsSynchronously) {
        coordinator.dispatchEventsSynchronously = serializedObject.dispatchEventsSynchronously;
    }
    await options.scene.whenReadyAsync();
    // if custom default values are defined, set them in the global context
    if (serializedObject._defaultValues) {
        for (const key in serializedObject._defaultValues) {
            // key is the FlowGraphType, value is the default value
            const value = serializedObject._defaultValues[key];
            (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_5__.getRichTypeByFlowGraphType)(key).defaultValue = value;
        }
    }
    // async-parse the flow graphs. This can be done in parallel
    await Promise.all(serializedObject._flowGraphs?.map(async (serializedGraph) => await ParseFlowGraphAsync(serializedGraph, { coordinator, valueParseFunction, pathConverter: options.pathConverter })));
    return coordinator;
}
/**
 * Parses a graph from a given serialization object
 * @param serializationObject the object where the values are written
 * @param options options for parsing the graph
 * @returns the parsed graph
 */
async function ParseFlowGraphAsync(serializationObject, options) {
    // get all classes types needed for the blocks using the block factory
    const resolvedClasses = await Promise.all(serializationObject.allBlocks.map(async (serializedBlock) => {
        const classFactory = (0,_Blocks_flowGraphBlockFactory__WEBPACK_IMPORTED_MODULE_0__.blockFactory)(serializedBlock.className);
        return await classFactory();
    }));
    // async will be used when we start using the block async factory
    return ParseFlowGraph(serializationObject, options, resolvedClasses);
}
/**
 * Parses a graph from a given serialization object
 * @param serializationObject the object where the values are written
 * @param options options for parsing the graph
 * @param resolvedClasses the resolved classes for the blocks
 * @returns the parsed graph
 */
function ParseFlowGraph(serializationObject, options, resolvedClasses) {
    const graph = options.coordinator.createGraph();
    const blocks = [];
    const valueParseFunction = options.valueParseFunction ?? _serialization__WEBPACK_IMPORTED_MODULE_4__.defaultValueParseFunction;
    // Parse all blocks
    // for (const serializedBlock of serializationObject.allBlocks) {
    for (let i = 0; i < serializationObject.allBlocks.length; i++) {
        const serializedBlock = serializationObject.allBlocks[i];
        const block = ParseFlowGraphBlockWithClassType(serializedBlock, { scene: options.coordinator.config.scene, pathConverter: options.pathConverter, assetsContainer: options.coordinator.config.scene, valueParseFunction }, resolvedClasses[i]);
        blocks.push(block);
        if (block instanceof _flowGraphEventBlock__WEBPACK_IMPORTED_MODULE_2__.FlowGraphEventBlock) {
            graph.addEventBlock(block);
        }
    }
    // After parsing all blocks, connect them
    for (const block of blocks) {
        for (const dataIn of block.dataInputs) {
            for (const serializedConnection of dataIn.connectedPointIds) {
                const connection = GetDataOutConnectionByUniqueId(blocks, serializedConnection);
                dataIn.connectTo(connection);
            }
        }
        if (block instanceof _flowGraphExecutionBlock__WEBPACK_IMPORTED_MODULE_3__.FlowGraphExecutionBlock) {
            for (const signalOut of block.signalOutputs) {
                for (const serializedConnection of signalOut.connectedPointIds) {
                    const connection = GetSignalInConnectionByUniqueId(blocks, serializedConnection);
                    signalOut.connectTo(connection);
                }
            }
        }
    }
    for (const serializedContext of serializationObject.executionContexts) {
        ParseFlowGraphContext(serializedContext, { graph, valueParseFunction }, serializationObject.rightHanded);
    }
    return graph;
}
/**
 * Parses a context
 * @param serializationObject the object containing the context serialization values
 * @param options the options for parsing the context
 * @param rightHanded whether the serialized data is right handed
 * @returns
 */
function ParseFlowGraphContext(serializationObject, options, rightHanded) {
    const result = options.graph.createContext();
    if (serializationObject.enableLogging) {
        result.enableLogging = true;
    }
    result.treatDataAsRightHanded = rightHanded || false;
    const valueParseFunction = options.valueParseFunction ?? _serialization__WEBPACK_IMPORTED_MODULE_4__.defaultValueParseFunction;
    result.uniqueId = serializationObject.uniqueId;
    const scene = result.getScene();
    // check if assets context is available
    if (serializationObject._assetsContext) {
        const ac = serializationObject._assetsContext;
        const assetsContext = {
            meshes: ac.meshes?.map((m) => scene.getMeshById(m)),
            lights: ac.lights?.map((l) => scene.getLightByName(l)),
            cameras: ac.cameras?.map((c) => scene.getCameraByName(c)),
            materials: ac.materials?.map((m) => scene.getMaterialById(m)),
            textures: ac.textures?.map((t) => scene.getTextureByName(t)),
            animations: ac.animations?.map((a) => scene.animations.find((anim) => anim.name === a)),
            skeletons: ac.skeletons?.map((s) => scene.getSkeletonByName(s)),
            particleSystems: ac.particleSystems?.map((ps) => scene.getParticleSystemById(ps)),
            animationGroups: ac.animationGroups?.map((ag) => scene.getAnimationGroupByName(ag)),
            transformNodes: ac.transformNodes?.map((tn) => scene.getTransformNodeById(tn)),
            rootNodes: [],
            multiMaterials: [],
            morphTargetManagers: [],
            geometries: [],
            actionManagers: [],
            environmentTexture: null,
            postProcesses: [],
            sounds: null,
            effectLayers: [],
            layers: [],
            reflectionProbes: [],
            lensFlareSystems: [],
            proceduralTextures: [],
            getNodes: function () {
                throw new Error("Function not implemented.");
            },
        };
        result.assetsContext = assetsContext;
    }
    for (const key in serializationObject._userVariables) {
        const value = valueParseFunction(key, serializationObject._userVariables, result.assetsContext, scene);
        result.userVariables[key] = value;
    }
    for (const key in serializationObject._connectionValues) {
        const value = valueParseFunction(key, serializationObject._connectionValues, result.assetsContext, scene);
        result._setConnectionValueByKey(key, value);
    }
    return result;
}
/**
 * Parses a block from a serialization object
 * This function is async due to the factory method that is used to create the block's class. If you load the class externally use ParseBlockWithClassType
 * @param serializationObject the object to parse from
 * @param parseOptions options for parsing the block
 * @returns the parsed block
 */
async function ParseBlockAsync(serializationObject, parseOptions) {
    const classFactory = (0,_Blocks_flowGraphBlockFactory__WEBPACK_IMPORTED_MODULE_0__.blockFactory)(serializationObject.className);
    const classType = await classFactory();
    return ParseFlowGraphBlockWithClassType(serializationObject, parseOptions, classType);
}
/**
 * Parses a block from a serialization object
 * @param serializationObject the object to parse from
 * @param parseOptions options for parsing the block
 * @param classType the class type of the block. This is used when the class is not loaded asynchronously
 * @returns the parsed block
 */
function ParseFlowGraphBlockWithClassType(serializationObject, parseOptions, classType) {
    const parsedConfig = {};
    const valueParseFunction = parseOptions.valueParseFunction ?? _serialization__WEBPACK_IMPORTED_MODULE_4__.defaultValueParseFunction;
    if (serializationObject.config) {
        for (const key in serializationObject.config) {
            parsedConfig[key] = valueParseFunction(key, serializationObject.config, parseOptions.assetsContainer || parseOptions.scene, parseOptions.scene);
        }
    }
    if ((0,_serialization__WEBPACK_IMPORTED_MODULE_4__.needsPathConverter)(serializationObject.className)) {
        if (!parseOptions.pathConverter) {
            throw new Error("Path converter is required for this block");
        }
        parsedConfig.pathConverter = parseOptions.pathConverter;
    }
    const obj = new classType(parsedConfig);
    obj.uniqueId = serializationObject.uniqueId;
    for (let i = 0; i < serializationObject.dataInputs.length; i++) {
        const dataInput = obj.getDataInput(serializationObject.dataInputs[i].name);
        if (dataInput) {
            dataInput.deserialize(serializationObject.dataInputs[i]);
        }
        else {
            throw new Error("Could not find data input with name " + serializationObject.dataInputs[i].name + " in block " + serializationObject.className);
        }
    }
    for (let i = 0; i < serializationObject.dataOutputs.length; i++) {
        const dataOutput = obj.getDataOutput(serializationObject.dataOutputs[i].name);
        if (dataOutput) {
            dataOutput.deserialize(serializationObject.dataOutputs[i]);
        }
        else {
            throw new Error("Could not find data output with name " + serializationObject.dataOutputs[i].name + " in block " + serializationObject.className);
        }
    }
    obj.metadata = serializationObject.metadata;
    obj.deserialize && obj.deserialize(serializationObject);
    return obj;
}
/**
 * Parses a connection from an object
 * @param serializationObject the object to parse from.
 * @param ownerBlock the block that owns the connection.
 * @param classType the class type of the connection.
 * @returns the parsed connection.
 */
function ParseGraphConnectionWithClassType(serializationObject = {}, ownerBlock, classType) {
    const connection = new classType(serializationObject.name, serializationObject._connectionType, ownerBlock);
    connection.deserialize(serializationObject);
    return connection;
}
/**
 * Parses a data connection from a serialized object.
 * @param serializationObject the object to parse from
 * @param ownerBlock the block that owns the connection
 * @param classType the class type of the data connection
 * @returns the parsed connection
 */
function ParseGraphDataConnection(serializationObject, ownerBlock, classType) {
    const richType = ParseRichType(serializationObject.richType);
    const defaultValue = serializationObject.defaultValue;
    const connection = new classType(serializationObject.name, serializationObject._connectionType, ownerBlock, richType, defaultValue, !!serializationObject._optional);
    connection.deserialize(serializationObject);
    return connection;
}
/**
 * Parses a rich type from a serialization object.
 * @param serializationObject a serialization object
 * @returns the parsed rich type
 */
function ParseRichType(serializationObject) {
    return new _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_5__.RichType(serializationObject.typeName, serializationObject.defaultValue);
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

/***/ "../core/dist/FlowGraph/flowGraphSceneEventCoordinator.js":
/*!****************************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphSceneEventCoordinator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSceneEventCoordinator: () => (/* binding */ FlowGraphSceneEventCoordinator)
/* harmony export */ });
/* harmony import */ var core_Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Events/pointerEvents */ "../core/dist/Events/pointerEvents.js");
/* harmony import */ var core_Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/observable */ "../core/dist/Misc/observable.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * This class is responsible for coordinating the events that are triggered in the scene.
 * It registers all observers needed to track certain events and triggers the blocks that are listening to them.
 * Abstracting the events from the class will allow us to easily change the events that are being listened to, and trigger them in any order.
 */
class FlowGraphSceneEventCoordinator {
    constructor(scene) {
        /**
         * register to this observable to get flow graph event notifications.
         */
        this.onEventTriggeredObservable = new core_Misc_observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        /**
         * Was scene-ready already triggered?
         */
        this.sceneReadyTriggered = false;
        this._pointerUnderMeshState = {};
        this._startingTime = 0;
        this._scene = scene;
        this._initialize();
    }
    _initialize() {
        this._sceneReadyObserver = this._scene.onReadyObservable.add(() => {
            if (!this.sceneReadyTriggered) {
                this.onEventTriggeredObservable.notifyObservers({ type: "SceneReady" /* FlowGraphEventType.SceneReady */ });
                this.sceneReadyTriggered = true;
            }
        });
        this._sceneDisposeObserver = this._scene.onDisposeObservable.add(() => {
            this.onEventTriggeredObservable.notifyObservers({ type: "SceneDispose" /* FlowGraphEventType.SceneDispose */ });
        });
        this._sceneOnBeforeRenderObserver = this._scene.onBeforeRenderObservable.add(() => {
            const deltaTime = this._scene.getEngine().getDeltaTime() / 1000; // set in seconds
            this.onEventTriggeredObservable.notifyObservers({
                type: "SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */,
                payload: {
                    timeSinceStart: this._startingTime,
                    deltaTime,
                },
            });
            this._startingTime += deltaTime;
        });
        this._meshPickedObserver = this._scene.onPointerObservable.add((pointerInfo) => {
            this.onEventTriggeredObservable.notifyObservers({ type: "MeshPick" /* FlowGraphEventType.MeshPick */, payload: pointerInfo });
        }, core_Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__.PointerEventTypes.POINTERPICK); // should it be pointerdown?
        this._meshUnderPointerObserver = this._scene.onMeshUnderPointerUpdatedObservable.add((data) => {
            // check if the data has changed. Check the state of the last change and see if it is a mesh or null.
            // if it is a mesh and the previous state was null, trigger over event. If it is null and the previous state was a mesh, trigger out event.
            // if it is a mesh and the previous state was a mesh, trigger out from the old mesh and over the new mesh
            // if it is null and the previous state was null, do nothing.
            const pointerId = data.pointerId;
            const mesh = data.mesh;
            const previousState = this._pointerUnderMeshState[pointerId];
            if (!previousState && mesh) {
                this.onEventTriggeredObservable.notifyObservers({ type: "PointerOver" /* FlowGraphEventType.PointerOver */, payload: { pointerId, mesh } });
            }
            else if (previousState && !mesh) {
                this.onEventTriggeredObservable.notifyObservers({ type: "PointerOut" /* FlowGraphEventType.PointerOut */, payload: { pointerId, mesh: previousState } });
            }
            else if (previousState && mesh && previousState !== mesh) {
                this.onEventTriggeredObservable.notifyObservers({ type: "PointerOut" /* FlowGraphEventType.PointerOut */, payload: { pointerId, mesh: previousState, over: mesh } });
                this.onEventTriggeredObservable.notifyObservers({ type: "PointerOver" /* FlowGraphEventType.PointerOver */, payload: { pointerId, mesh, out: previousState } });
            }
            this._pointerUnderMeshState[pointerId] = mesh;
        }, core_Events_pointerEvents__WEBPACK_IMPORTED_MODULE_0__.PointerEventTypes.POINTERMOVE);
    }
    dispose() {
        this._sceneDisposeObserver?.remove();
        this._sceneReadyObserver?.remove();
        this._sceneOnBeforeRenderObserver?.remove();
        this._meshPickedObserver?.remove();
        this._meshUnderPointerObserver?.remove();
        this.onEventTriggeredObservable.clear();
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

/***/ "../core/dist/FlowGraph/flowGraphSignalConnection.js":
/*!***********************************************************!*\
  !*** ../core/dist/FlowGraph/flowGraphSignalConnection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowGraphSignalConnection: () => (/* binding */ FlowGraphSignalConnection)
/* harmony export */ });
/* harmony import */ var _flowGraphConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowGraphConnection */ "../core/dist/FlowGraph/flowGraphConnection.js");
/* harmony import */ var _Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc/typeStore */ "../core/dist/Misc/typeStore.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



/**
 * Represents a connection point for a signal.
 * When an output point is activated, it will activate the connected input point.
 * When an input point is activated, it will execute the block it belongs to.
 */
class FlowGraphSignalConnection extends _flowGraphConnection__WEBPACK_IMPORTED_MODULE_0__.FlowGraphConnection {
    constructor() {
        super(...arguments);
        /**
         * The priority of the signal. Signals with higher priority will be executed first.
         * Set priority before adding the connection as sorting happens only when the connection is added.
         */
        this.priority = 0;
    }
    _isSingularConnection() {
        return false;
    }
    connectTo(point) {
        super.connectTo(point);
        // sort according to priority to handle execution order
        this._connectedPoint.sort((a, b) => b.priority - a.priority);
    }
    /**
     * @internal
     */
    _activateSignal(context) {
        context.logger?.addLogItem({
            action: "ActivateSignal" /* FlowGraphAction.ActivateSignal */,
            className: this._ownerBlock.getClassName(),
            uniqueId: this._ownerBlock.uniqueId,
            payload: {
                connectionType: this.connectionType,
                name: this.name,
            },
        });
        if (this.connectionType === 0 /* FlowGraphConnectionType.Input */) {
            context._notifyExecuteNode(this._ownerBlock);
            this._ownerBlock._execute(context, this);
            context._increaseExecutionId();
        }
        else {
            for (const connectedPoint of this._connectedPoint) {
                connectedPoint._activateSignal(context);
            }
        }
    }
}
(0,_Misc_typeStore__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("FlowGraphSignalConnection", FlowGraphSignalConnection);


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

/***/ "../core/dist/FlowGraph/serialization.js":
/*!***********************************************!*\
  !*** ../core/dist/FlowGraph/serialization.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValueParseFunction: () => (/* binding */ defaultValueParseFunction),
/* harmony export */   defaultValueSerializationFunction: () => (/* binding */ defaultValueSerializationFunction),
/* harmony export */   needsPathConverter: () => (/* binding */ needsPathConverter)
/* harmony export */ });
/* harmony import */ var _Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Maths/math.color */ "../core/dist/Maths/math.color.js");
/* harmony import */ var _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* harmony import */ var _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTypes/flowGraphInteger */ "../core/dist/FlowGraph/CustomTypes/flowGraphInteger.js");
/* harmony import */ var _flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flowGraphRichTypes */ "../core/dist/FlowGraph/flowGraphRichTypes.js");
/* harmony import */ var _CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomTypes/flowGraphMatrix */ "../core/dist/FlowGraph/CustomTypes/flowGraphMatrix.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");






function IsMeshClassName(className) {
    return (className === "Mesh" ||
        className === "AbstractMesh" ||
        className === "GroundMesh" ||
        className === "InstanceMesh" ||
        className === "LinesMesh" ||
        className === "GoldbergMesh" ||
        className === "GreasedLineMesh" ||
        className === "TrailMesh");
}
function IsVectorClassName(className) {
    return (className === "Vector2" /* FlowGraphTypes.Vector2 */ ||
        className === "Vector3" /* FlowGraphTypes.Vector3 */ ||
        className === "Vector4" /* FlowGraphTypes.Vector4 */ ||
        className === "Quaternion" /* FlowGraphTypes.Quaternion */ ||
        className === "Color3" /* FlowGraphTypes.Color3 */ ||
        className === "Color4" /* FlowGraphTypes.Color4 */);
}
function IsMatrixClassName(className) {
    return className === "Matrix" /* FlowGraphTypes.Matrix */ || className === "Matrix2D" /* FlowGraphTypes.Matrix2D */ || className === "Matrix3D" /* FlowGraphTypes.Matrix3D */;
}
function IsAnimationGroupClassName(className) {
    return className === "AnimationGroup";
}
function ParseVector(className, value, flipHandedness = false) {
    if (className === "Vector2" /* FlowGraphTypes.Vector2 */) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(value);
    }
    else if (className === "Vector3" /* FlowGraphTypes.Vector3 */) {
        if (flipHandedness) {
            value[2] *= -1;
        }
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(value);
    }
    else if (className === "Vector4" /* FlowGraphTypes.Vector4 */) {
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(value);
    }
    else if (className === "Quaternion" /* FlowGraphTypes.Quaternion */) {
        if (flipHandedness) {
            value[2] *= -1;
            value[3] *= -1;
        }
        return _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(value);
    }
    else if (className === "Color3" /* FlowGraphTypes.Color3 */) {
        return new _Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3(value[0], value[1], value[2]);
    }
    else if (className === "Color4" /* FlowGraphTypes.Color4 */) {
        return new _Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color4(value[0], value[1], value[2], value[3]);
    }
    else {
        throw new Error(`Unknown vector class name ${className}`);
    }
}
/**
 * The default function that serializes values in a context object to a serialization object
 * @param key the key where the value should be stored in the serialization object
 * @param value the value to store
 * @param serializationObject the object where the value will be stored
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function defaultValueSerializationFunction(key, value, serializationObject) {
    const className = value?.getClassName?.() ?? "";
    if (IsVectorClassName(className) || IsMatrixClassName(className)) {
        serializationObject[key] = {
            value: value.asArray(),
            className,
        };
    }
    else if (className === "FlowGraphInteger" /* FlowGraphTypes.Integer */) {
        serializationObject[key] = {
            value: value.value,
            className,
        };
    }
    else {
        if (className && (value.id || value.name)) {
            serializationObject[key] = {
                id: value.id,
                name: value.name,
                className,
            };
        }
        else {
            // only if it is not an object
            if (typeof value !== "object") {
                serializationObject[key] = value;
            }
            else {
                throw new Error(`Could not serialize value ${value}`);
            }
        }
    }
}
/**
 * The default function that parses values stored in a serialization object
 * @param key the key to the value that will be parsed
 * @param serializationObject the object that will be parsed
 * @param assetsContainer the assets container that will be used to find the objects
 * @param scene
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function defaultValueParseFunction(key, serializationObject, assetsContainer, scene) {
    const intermediateValue = serializationObject[key];
    let finalValue;
    const className = intermediateValue?.type ?? intermediateValue?.className;
    if (IsMeshClassName(className)) {
        let nodes = scene.meshes.filter((m) => (intermediateValue.id ? m.id === intermediateValue.id : m.name === intermediateValue.name));
        if (nodes.length === 0) {
            nodes = scene.transformNodes.filter((m) => (intermediateValue.id ? m.id === intermediateValue.id : m.name === intermediateValue.name));
        }
        finalValue = intermediateValue.uniqueId ? nodes.find((m) => m.uniqueId === intermediateValue.uniqueId) : nodes[0];
    }
    else if (IsVectorClassName(className)) {
        finalValue = ParseVector(className, intermediateValue.value);
    }
    else if (IsAnimationGroupClassName(className)) {
        // do not use the scene.getAnimationGroupByName because it is possible that two AGs will have the same name
        const ags = scene.animationGroups.filter((ag) => ag.name === intermediateValue.name);
        // uniqueId changes on each load. this is used for the glTF loader, that uses serialization after the scene was loaded.
        finalValue = ags.length === 1 ? ags[0] : ags.find((ag) => ag.uniqueId === intermediateValue.uniqueId);
    }
    else if (className === "Matrix" /* FlowGraphTypes.Matrix */) {
        finalValue = _Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(intermediateValue.value);
    }
    else if (className === "Matrix2D" /* FlowGraphTypes.Matrix2D */) {
        finalValue = new _CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_4__.FlowGraphMatrix2D(intermediateValue.value);
    }
    else if (className === "Matrix3D" /* FlowGraphTypes.Matrix3D */) {
        finalValue = new _CustomTypes_flowGraphMatrix__WEBPACK_IMPORTED_MODULE_4__.FlowGraphMatrix3D(intermediateValue.value);
    }
    else if (className === "FlowGraphInteger" /* FlowGraphTypes.Integer */) {
        finalValue = _CustomTypes_flowGraphInteger__WEBPACK_IMPORTED_MODULE_2__.FlowGraphInteger.FromValue(intermediateValue.value);
    }
    else if (className === "number" /* FlowGraphTypes.Number */ || className === "string" /* FlowGraphTypes.String */ || className === "boolean" /* FlowGraphTypes.Boolean */) {
        finalValue = intermediateValue.value[0];
    }
    else if (intermediateValue && intermediateValue.value !== undefined) {
        finalValue = intermediateValue.value;
    }
    else {
        if (Array.isArray(intermediateValue)) {
            // configuration data of an event
            finalValue = intermediateValue.reduce((acc, val) => {
                if (!val.eventData) {
                    return acc;
                }
                acc[val.id] = {
                    type: (0,_flowGraphRichTypes__WEBPACK_IMPORTED_MODULE_3__.getRichTypeByFlowGraphType)(val.type),
                };
                if (typeof val.value !== "undefined") {
                    acc[val.id].value = defaultValueParseFunction("value", val, assetsContainer, scene);
                }
                return acc;
            }, {});
        }
        else {
            finalValue = intermediateValue;
        }
    }
    return finalValue;
}
/**
 * Given a name of a flow graph block class, return if this
 * class needs to be created with a path converter. Used in
 * parsing.
 * @param className the name of the flow graph block class
 * @returns a boolean indicating if the class needs a path converter
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function needsPathConverter(className) {
    // I am not using the ClassName property here because it was causing a circular dependency
    // that jest didn't like!
    return className === "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */;
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

/***/ "../core/dist/FlowGraph/utils.js":
/*!***************************************!*\
  !*** ../core/dist/FlowGraph/utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _AreSameIntegerClass: () => (/* binding */ _AreSameIntegerClass),
/* harmony export */   _AreSameMatrixClass: () => (/* binding */ _AreSameMatrixClass),
/* harmony export */   _AreSameVectorOrQuaternionClass: () => (/* binding */ _AreSameVectorOrQuaternionClass),
/* harmony export */   _GetClassNameOf: () => (/* binding */ _GetClassNameOf),
/* harmony export */   _IsDescendantOf: () => (/* binding */ _IsDescendantOf),
/* harmony export */   getNumericValue: () => (/* binding */ getNumericValue),
/* harmony export */   isNumeric: () => (/* binding */ isNumeric)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/**
 * @internal
 * Returns if mesh1 is a descendant of mesh2
 * @param mesh1
 * @param mesh2
 * @returns
 */
function _IsDescendantOf(mesh1, mesh2) {
    return !!(mesh1.parent && (mesh1.parent === mesh2 || _IsDescendantOf(mesh1.parent, mesh2)));
}
/**
 * @internal
 */
function _GetClassNameOf(v) {
    if (v.getClassName) {
        return v.getClassName();
    }
    return;
}
/**
 * @internal
 * Check if two classname are the same and are vector or quaternion classes.
 * @param className the first class name
 * @param className2 the second class name
 * @returns whether the two class names are the same and are vector or quaternion classes.
 */
function _AreSameVectorOrQuaternionClass(className, className2) {
    return (className === className2 &&
        (className === "Vector2" /* FlowGraphTypes.Vector2 */ || className === "Vector3" /* FlowGraphTypes.Vector3 */ || className === "Vector4" /* FlowGraphTypes.Vector4 */ || className === "Quaternion" /* FlowGraphTypes.Quaternion */));
}
/**
 * @internal
 * Check if two classname are the same and are matrix classes.
 * @param className the first class name
 * @param className2 the second class name
 * @returns whether the two class names are the same and are matrix classes.
 */
function _AreSameMatrixClass(className, className2) {
    return className === className2 && (className === "Matrix" /* FlowGraphTypes.Matrix */ || className === "Matrix2D" /* FlowGraphTypes.Matrix2D */ || className === "Matrix3D" /* FlowGraphTypes.Matrix3D */);
}
/**
 * @internal
 * Check if two classname are the same and are integer classes.
 * @param className the first class name
 * @param className2 the second class name
 * @returns whether the two class names are the same and are integer classes.
 */
function _AreSameIntegerClass(className, className2) {
    return className === "FlowGraphInteger" && className2 === "FlowGraphInteger";
}
/**
 * Check if an object has a numeric value.
 * @param a the object to check if it is a number.
 * @param validIfNaN whether to consider NaN as a valid number.
 * @returns whether a is a FlowGraphNumber (Integer or number).
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function isNumeric(a, validIfNaN) {
    const isNumeric = typeof a === "number" || typeof a?.value === "number";
    if (isNumeric && !validIfNaN) {
        return !isNaN(getNumericValue(a));
    }
    return isNumeric;
}
/**
 * Get the numeric value of a FlowGraphNumber.
 * @param a the object to get the numeric value from.
 * @returns the numeric value.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getNumericValue(a) {
    return typeof a === "number" ? a : a.value;
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

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity.js":
/*!****************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_interactivity.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KHR_interactivity: () => (/* binding */ KHR_interactivity),
/* harmony export */   _AddInteractivityObjectModel: () => (/* binding */ _AddInteractivityObjectModel)
/* harmony export */ });
/* harmony import */ var core_FlowGraph_flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/FlowGraph/flowGraphCoordinator */ "../core/dist/FlowGraph/flowGraphCoordinator.js");
/* harmony import */ var core_FlowGraph_flowGraphParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/FlowGraph/flowGraphParser */ "../core/dist/FlowGraph/flowGraphParser.js");
/* harmony import */ var _glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTFLoaderExtensionRegistry */ "../loaders/dist/glTF/2.0/glTFLoaderExtensionRegistry.js");
/* harmony import */ var _objectModelMapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectModelMapping */ "../loaders/dist/glTF/2.0/Extensions/objectModelMapping.js");
/* harmony import */ var _KHR_interactivity_interactivityGraphParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_interactivity/interactivityGraphParser */ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.js");
/* harmony import */ var core_FlowGraph_Blocks_flowGraphBlockFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/FlowGraph/Blocks/flowGraphBlockFactory */ "../core/dist/FlowGraph/Blocks/flowGraphBlockFactory.js");
/* harmony import */ var core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/Maths/math.vector */ "../core/dist/Maths/math.vector.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");








const NAME = "KHR_interactivity";
/**
 * Loader extension for KHR_interactivity
 */
class KHR_interactivity {
    /**
     * @internal
     * @param _loader
     */
    constructor(_loader) {
        this._loader = _loader;
        /**
         * The name of this extension.
         */
        this.name = NAME;
        this.enabled = this._loader.isExtensionUsed(NAME);
        this._pathConverter = (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.GetPathToObjectConverter)(this._loader.gltf);
        // avoid starting animations automatically.
        _loader._skipStartAnimationStep = true;
        // Update object model with new pointers
        const scene = _loader.babylonScene;
        if (scene) {
            _AddInteractivityObjectModel(scene);
        }
    }
    dispose() {
        this._loader = null;
        delete this._pathConverter;
    }
    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/no-misused-promises
    async onReady() {
        if (!this._loader.babylonScene || !this._pathConverter) {
            return;
        }
        const scene = this._loader.babylonScene;
        const interactivityDefinition = this._loader.gltf.extensions?.KHR_interactivity;
        if (!interactivityDefinition) {
            // This can technically throw, but it's not a critical error
            return;
        }
        const coordinator = new core_FlowGraph_flowGraphCoordinator__WEBPACK_IMPORTED_MODULE_0__.FlowGraphCoordinator({ scene });
        coordinator.dispatchEventsSynchronously = false; // glTF interactivity dispatches events asynchronously
        const graphs = interactivityDefinition.graphs.map((graph) => {
            const parser = new _KHR_interactivity_interactivityGraphParser__WEBPACK_IMPORTED_MODULE_4__.InteractivityGraphToFlowGraphParser(graph, this._loader.gltf, this._loader.parent.targetFps);
            return parser.serializeToFlowGraph();
        });
        // parse each graph async
        await Promise.all(graphs.map(async (graph) => await (0,core_FlowGraph_flowGraphParser__WEBPACK_IMPORTED_MODULE_1__.ParseFlowGraphAsync)(graph, { coordinator, pathConverter: this._pathConverter })));
        coordinator.start();
    }
}
/**
 * @internal
 * populates the object model with the interactivity extension
 */
function _AddInteractivityObjectModel(scene) {
    // Note - all of those are read-only, as per the specs!
    // active camera rotation
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/extensions/KHR_interactivity/?/activeCamera/rotation", {
        get: () => {
            if (!scene.activeCamera) {
                return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Quaternion(NaN, NaN, NaN, NaN);
            }
            const quat = core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Quaternion.FromRotationMatrix(scene.activeCamera.getWorldMatrix()).normalize();
            if (!scene.useRightHandedSystem) {
                quat.w *= -1; // glTF uses right-handed system, while babylon uses left-handed
                quat.x *= -1; // glTF uses right-handed system, while babylon uses left-handed
            }
            return quat;
        },
        type: "Quaternion",
        getTarget: () => scene.activeCamera,
    });
    // activeCamera position
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/extensions/KHR_interactivity/?/activeCamera/position", {
        get: () => {
            if (!scene.activeCamera) {
                return new core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_6__.Vector3(NaN, NaN, NaN);
            }
            const pos = scene.activeCamera.getWorldMatrix().getTranslation(); // not global position
            if (!scene.useRightHandedSystem) {
                pos.x *= -1; // glTF uses right-handed system, while babylon uses left-handed
            }
            return pos;
        },
        type: "Vector3",
        getTarget: () => scene.activeCamera,
    });
    // /animations/{} pointers:
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/animations/{}/extensions/KHR_interactivity/isPlaying", {
        get: (animation) => {
            return animation._babylonAnimationGroup?.isPlaying ?? false;
        },
        type: "boolean",
        getTarget: (animation) => {
            return animation._babylonAnimationGroup;
        },
    });
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/animations/{}/extensions/KHR_interactivity/minTime", {
        get: (animation) => {
            return (animation._babylonAnimationGroup?.from ?? 0) / 60; // fixed factor for duration-to-frames conversion
        },
        type: "number",
        getTarget: (animation) => {
            return animation._babylonAnimationGroup;
        },
    });
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/animations/{}/extensions/KHR_interactivity/maxTime", {
        get: (animation) => {
            return (animation._babylonAnimationGroup?.to ?? 0) / 60; // fixed factor for duration-to-frames conversion
        },
        type: "number",
        getTarget: (animation) => {
            return animation._babylonAnimationGroup;
        },
    });
    // playhead
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/animations/{}/extensions/KHR_interactivity/playhead", {
        get: (animation) => {
            return (animation._babylonAnimationGroup?.getCurrentFrame() ?? 0) / 60; // fixed factor for duration-to-frames conversion
        },
        type: "number",
        getTarget: (animation) => {
            return animation._babylonAnimationGroup;
        },
    });
    //virtualPlayhead - TODO, do we support this property in our animations? getCurrentFrame  is the only method we have for this.
    (0,_objectModelMapping__WEBPACK_IMPORTED_MODULE_3__.AddObjectAccessorToKey)("/animations/{}/extensions/KHR_interactivity/virtualPlayhead", {
        get: (animation) => {
            return (animation._babylonAnimationGroup?.getCurrentFrame() ?? 0) / 60; // fixed factor for duration-to-frames conversion
        },
        type: "number",
        getTarget: (animation) => {
            return animation._babylonAnimationGroup;
        },
    });
}
// Register flow graph blocks. Do it here so they are available when the extension is enabled.
(0,core_FlowGraph_Blocks_flowGraphBlockFactory__WEBPACK_IMPORTED_MODULE_5__.addToBlockFactory)(NAME, "FlowGraphGLTFDataProvider", async () => {
    return (await __webpack_require__.e(/*! import() */ "loaders_dist_glTF_2_0_Extensions_KHR_interactivity_flowGraphGLTFDataProvider_js").then(__webpack_require__.bind(__webpack_require__, /*! ./KHR_interactivity/flowGraphGLTFDataProvider */ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/flowGraphGLTFDataProvider.js"))).FlowGraphGLTFDataProvider;
});
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.unregisterGLTFExtension)(NAME);
(0,_glTFLoaderExtensionRegistry__WEBPACK_IMPORTED_MODULE_2__.registerGLTFExtension)(NAME, true, (loader) => new KHR_interactivity(loader));


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

/***/ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.js":
/*!*****************************************************************************************!*\
  !*** ../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InteractivityGraphToFlowGraphParser: () => (/* binding */ InteractivityGraphToFlowGraphParser),
/* harmony export */   gltfTypeToBabylonType: () => (/* binding */ gltfTypeToBabylonType)
/* harmony export */ });
/* harmony import */ var _declarationMapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declarationMapper */ "../loaders/dist/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.js");
/* harmony import */ var core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/logger */ "../core/dist/Misc/logger.js");
/* harmony import */ var core_Misc_guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/Misc/guid */ "../core/dist/Misc/guid.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");




// eslint-disable-next-line @typescript-eslint/naming-convention
const gltfTypeToBabylonType = {
    float: { length: 1, flowGraphType: "number" /* FlowGraphTypes.Number */, elementType: "number" },
    bool: { length: 1, flowGraphType: "boolean" /* FlowGraphTypes.Boolean */, elementType: "boolean" },
    float2: { length: 2, flowGraphType: "Vector2" /* FlowGraphTypes.Vector2 */, elementType: "number" },
    float3: { length: 3, flowGraphType: "Vector3" /* FlowGraphTypes.Vector3 */, elementType: "number" },
    float4: { length: 4, flowGraphType: "Vector4" /* FlowGraphTypes.Vector4 */, elementType: "number" },
    float4x4: { length: 16, flowGraphType: "Matrix" /* FlowGraphTypes.Matrix */, elementType: "number" },
    float2x2: { length: 4, flowGraphType: "Matrix2D" /* FlowGraphTypes.Matrix2D */, elementType: "number" },
    float3x3: { length: 9, flowGraphType: "Matrix3D" /* FlowGraphTypes.Matrix3D */, elementType: "number" },
    int: { length: 1, flowGraphType: "FlowGraphInteger" /* FlowGraphTypes.Integer */, elementType: "number" },
};
class InteractivityGraphToFlowGraphParser {
    constructor(_interactivityGraph, _gltf, _animationTargetFps = 60) {
        this._interactivityGraph = _interactivityGraph;
        this._gltf = _gltf;
        this._animationTargetFps = _animationTargetFps;
        /**
         * Note - the graph should be rejected if the same type is defined twice.
         * We currently don't validate that.
         */
        this._types = [];
        this._mappings = [];
        this._staticVariables = [];
        this._events = [];
        this._internalEventsCounter = 0;
        this._nodes = [];
        // start with types
        this._parseTypes();
        // continue with declarations
        this._parseDeclarations();
        this._parseVariables();
        this._parseEvents();
        this._parseNodes();
    }
    get arrays() {
        return {
            types: this._types,
            mappings: this._mappings,
            staticVariables: this._staticVariables,
            events: this._events,
            nodes: this._nodes,
        };
    }
    _parseTypes() {
        if (!this._interactivityGraph.types) {
            return;
        }
        for (const type of this._interactivityGraph.types) {
            this._types.push(gltfTypeToBabylonType[type.signature]);
        }
    }
    _parseDeclarations() {
        if (!this._interactivityGraph.declarations) {
            return;
        }
        for (const declaration of this._interactivityGraph.declarations) {
            // make sure we have the mapping for this operation
            const mapping = (0,_declarationMapper__WEBPACK_IMPORTED_MODULE_0__.getMappingForDeclaration)(declaration);
            // mapping is defined, because we generate an empty mapping if it's not found
            if (!mapping) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No mapping found for declaration", declaration]);
                throw new Error("Error parsing declarations");
            }
            this._mappings.push({
                flowGraphMapping: mapping,
                fullOperationName: declaration.extension ? declaration.op + ":" + declaration.extension : declaration.op,
            });
        }
    }
    _parseVariables() {
        if (!this._interactivityGraph.variables) {
            return;
        }
        for (const variable of this._interactivityGraph.variables) {
            const parsed = this._parseVariable(variable);
            // set the default values here
            this._staticVariables.push(parsed);
        }
    }
    _parseVariable(variable, dataTransform) {
        const type = this._types[variable.type];
        if (!type) {
            core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No type found for variable", variable]);
            throw new Error("Error parsing variables");
        }
        if (variable.value) {
            if (variable.value.length !== type.length) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["Invalid value length for variable", variable, type]);
                throw new Error("Error parsing variables");
            }
        }
        const value = variable.value || [];
        if (!value.length) {
            switch (type.flowGraphType) {
                case "boolean" /* FlowGraphTypes.Boolean */:
                    value.push(false);
                    break;
                case "FlowGraphInteger" /* FlowGraphTypes.Integer */:
                    value.push(0);
                    break;
                case "number" /* FlowGraphTypes.Number */:
                    value.push(NaN);
                    break;
                case "Vector2" /* FlowGraphTypes.Vector2 */:
                    value.push(NaN, NaN);
                    break;
                case "Vector3" /* FlowGraphTypes.Vector3 */:
                    value.push(NaN, NaN, NaN);
                    break;
                case "Vector4" /* FlowGraphTypes.Vector4 */:
                case "Matrix2D" /* FlowGraphTypes.Matrix2D */:
                case "Quaternion" /* FlowGraphTypes.Quaternion */:
                    value.fill(NaN, 0, 4);
                    break;
                case "Matrix" /* FlowGraphTypes.Matrix */:
                    value.fill(NaN, 0, 16);
                    break;
                case "Matrix3D" /* FlowGraphTypes.Matrix3D */:
                    value.fill(NaN, 0, 9);
                    break;
                default:
                    break;
            }
        }
        // in case of NaN, Infinity, we need to parse the string to the object itself
        if (type.elementType === "number" && typeof value[0] === "string") {
            value[0] = parseFloat(value[0]);
        }
        return { type: type.flowGraphType, value: dataTransform ? dataTransform(value, this) : value };
    }
    _parseEvents() {
        if (!this._interactivityGraph.events) {
            return;
        }
        for (const event of this._interactivityGraph.events) {
            const converted = {
                eventId: event.id || "internalEvent_" + this._internalEventsCounter++,
            };
            if (event.values) {
                converted.eventData = Object.keys(event.values).map((key) => {
                    const eventValue = event.values?.[key];
                    if (!eventValue) {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No value found for event key", key]);
                        throw new Error("Error parsing events");
                    }
                    const type = this._types[eventValue.type];
                    if (!type) {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No type found for event value", eventValue]);
                        throw new Error("Error parsing events");
                    }
                    const value = typeof eventValue.value !== "undefined" ? this._parseVariable(eventValue) : undefined;
                    return {
                        id: key,
                        type: type.flowGraphType,
                        eventData: true,
                        value,
                    };
                });
            }
            this._events.push(converted);
        }
    }
    _parseNodes() {
        if (!this._interactivityGraph.nodes) {
            return;
        }
        for (const node of this._interactivityGraph.nodes) {
            // some validation
            if (typeof node.declaration !== "number") {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No declaration found for node", node]);
                throw new Error("Error parsing nodes");
            }
            const mapping = this._mappings[node.declaration];
            if (!mapping) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No mapping found for node", node]);
                throw new Error("Error parsing nodes");
            }
            if (mapping.flowGraphMapping.validation) {
                const validationResult = mapping.flowGraphMapping.validation(node, this._interactivityGraph, this._gltf);
                if (!validationResult.valid) {
                    throw new Error(`Error validating interactivity node ${this._interactivityGraph.declarations?.[node.declaration].op} - ${validationResult.error}`);
                }
            }
            const blocks = [];
            // create block(s) for this node using the mapping
            for (const blockType of mapping.flowGraphMapping.blocks) {
                const block = this._getEmptyBlock(blockType, mapping.fullOperationName);
                this._parseNodeConfiguration(node, block, mapping.flowGraphMapping, blockType);
                blocks.push(block);
            }
            this._nodes.push({ blocks, fullOperationName: mapping.fullOperationName });
        }
    }
    _getEmptyBlock(className, type) {
        return {
            uniqueId: (0,core_Misc_guid__WEBPACK_IMPORTED_MODULE_2__.RandomGUID)(),
            className,
            dataInputs: [],
            dataOutputs: [],
            signalInputs: [],
            signalOutputs: [],
            config: {},
            type,
            metadata: {},
        };
    }
    _parseNodeConfiguration(node, block, nodeMapping, blockType) {
        const gltfConfiguration = node.configuration;
        if (gltfConfiguration) {
            for (const key in gltfConfiguration) {
                const gltfProperty = gltfConfiguration[key];
                if (!gltfProperty) {
                    throw new Error("Error parsing node configuration");
                }
                const propertyMapping = nodeMapping.configuration?.[key];
                const belongsToBlock = propertyMapping && propertyMapping.toBlock ? propertyMapping.toBlock === blockType : nodeMapping.blocks.indexOf(blockType) === 0;
                if (belongsToBlock) {
                    let value = propertyMapping?.defaultValue;
                    if (gltfProperty?.value) {
                        value = gltfProperty.value;
                    }
                    if (!propertyMapping?.isArray) {
                        if (value.length !== 1) {
                            core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn(`Invalid non-array value length: ${value.length}`);
                        }
                        value = value[0];
                    }
                    if (propertyMapping?.dataTransformer) {
                        value = propertyMapping.dataTransformer(value, this);
                    }
                    if (value !== undefined) {
                        // Update the flow graph block config.
                        block.config[propertyMapping?.name || key] = {
                            value: value,
                        };
                    }
                }
            }
        }
    }
    _parseNodeConnections(context) {
        for (let i = 0; i < this._nodes.length; i++) {
            // get the corresponding gltf node
            const gltfNode = this._interactivityGraph.nodes?.[i];
            if (!gltfNode) {
                // should never happen but let's still check
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No node found for interactivity node", this._nodes[i]]);
                throw new Error("Error parsing node connections");
            }
            const flowGraphBlocks = this._nodes[i];
            const outputMapper = this._mappings[gltfNode.declaration];
            // validate
            if (!outputMapper) {
                core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No mapping found for node", gltfNode]);
                throw new Error("Error parsing node connections");
            }
            const flowsFromGLTF = gltfNode.flows || {};
            const flowsKeys = Object.keys(flowsFromGLTF).sort(); // sorting as some operations require sorted keys
            // connect the flows
            for (const flowKey of flowsKeys) {
                const flow = flowsFromGLTF[flowKey];
                const flowMapping = outputMapper.flowGraphMapping.outputs?.flows?.[flowKey];
                const socketOutName = flowMapping?.name || flowKey;
                // create a serialized socket
                const socketOut = this._createNewSocketConnection(socketOutName, true);
                const block = (flowMapping && flowMapping.toBlock && flowGraphBlocks.blocks.find((b) => b.className === flowMapping.toBlock)) || flowGraphBlocks.blocks[0];
                block.signalOutputs.push(socketOut);
                // get the input node of this block
                const inputNodeId = flow.node;
                const nodeIn = this._nodes[inputNodeId];
                if (!nodeIn) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No node found for input node id", inputNodeId]);
                    throw new Error("Error parsing node connections");
                }
                // get the mapper for the input node - in case it mapped to multiple blocks
                const inputMapper = (0,_declarationMapper__WEBPACK_IMPORTED_MODULE_0__.getMappingForFullOperationName)(nodeIn.fullOperationName);
                if (!inputMapper) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No mapping found for input node", nodeIn]);
                    throw new Error("Error parsing node connections");
                }
                let flowInMapping = inputMapper.inputs?.flows?.[flow.socket || "in"];
                let arrayMapping = false;
                if (!flowInMapping) {
                    for (const key in inputMapper.inputs?.flows) {
                        if (key.startsWith("[") && key.endsWith("]")) {
                            arrayMapping = true;
                            flowInMapping = inputMapper.inputs?.flows?.[key];
                        }
                    }
                }
                const nodeInSocketName = flowInMapping ? (arrayMapping ? flowInMapping.name.replace("$1", flow.socket || "") : flowInMapping.name) : flow.socket || "in";
                const inputBlock = (flowInMapping && flowInMapping.toBlock && nodeIn.blocks.find((b) => b.className === flowInMapping.toBlock)) || nodeIn.blocks[0];
                // in all of the flow graph input connections, find the one with the same name as the socket
                let socketIn = inputBlock.signalInputs.find((s) => s.name === nodeInSocketName);
                // if the socket doesn't exist, create the input socket for the connection
                if (!socketIn) {
                    socketIn = this._createNewSocketConnection(nodeInSocketName);
                    inputBlock.signalInputs.push(socketIn);
                }
                // connect the sockets
                socketIn.connectedPointIds.push(socketOut.uniqueId);
                socketOut.connectedPointIds.push(socketIn.uniqueId);
            }
            // connect the values
            const valuesFromGLTF = gltfNode.values || {};
            const valuesKeys = Object.keys(valuesFromGLTF);
            for (const valueKey of valuesKeys) {
                const value = valuesFromGLTF[valueKey];
                let valueMapping = outputMapper.flowGraphMapping.inputs?.values?.[valueKey];
                let arrayMapping = false;
                if (!valueMapping) {
                    for (const key in outputMapper.flowGraphMapping.inputs?.values) {
                        if (key.startsWith("[") && key.endsWith("]")) {
                            arrayMapping = true;
                            valueMapping = outputMapper.flowGraphMapping.inputs?.values?.[key];
                        }
                    }
                }
                const socketInName = valueMapping ? (arrayMapping ? valueMapping.name.replace("$1", valueKey) : valueMapping.name) : valueKey;
                // create a serialized socket
                const socketIn = this._createNewSocketConnection(socketInName);
                const block = (valueMapping && valueMapping.toBlock && flowGraphBlocks.blocks.find((b) => b.className === valueMapping.toBlock)) || flowGraphBlocks.blocks[0];
                block.dataInputs.push(socketIn);
                if (value.value !== undefined) {
                    const convertedValue = this._parseVariable(value, valueMapping && valueMapping.dataTransformer);
                    context._connectionValues[socketIn.uniqueId] = convertedValue;
                }
                else if (typeof value.node !== "undefined") {
                    const nodeOutId = value.node;
                    const nodeOutSocketName = value.socket || "value";
                    const nodeOut = this._nodes[nodeOutId];
                    if (!nodeOut) {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No node found for output socket reference", value]);
                        throw new Error("Error parsing node connections");
                    }
                    const outputMapper = (0,_declarationMapper__WEBPACK_IMPORTED_MODULE_0__.getMappingForFullOperationName)(nodeOut.fullOperationName);
                    if (!outputMapper) {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No mapping found for output socket reference", value]);
                        throw new Error("Error parsing node connections");
                    }
                    let valueMapping = outputMapper.outputs?.values?.[nodeOutSocketName];
                    let arrayMapping = false;
                    // check if there is an array mapping defined
                    if (!valueMapping) {
                        // search for a value mapping that has an array mapping
                        for (const key in outputMapper.outputs?.values) {
                            if (key.startsWith("[") && key.endsWith("]")) {
                                arrayMapping = true;
                                valueMapping = outputMapper.outputs?.values?.[key];
                            }
                        }
                    }
                    const socketOutName = valueMapping ? (arrayMapping ? valueMapping.name.replace("$1", nodeOutSocketName) : valueMapping?.name) : nodeOutSocketName;
                    const outBlock = (valueMapping && valueMapping.toBlock && nodeOut.blocks.find((b) => b.className === valueMapping.toBlock)) || nodeOut.blocks[0];
                    let socketOut = outBlock.dataOutputs.find((s) => s.name === socketOutName);
                    // if the socket doesn't exist, create it
                    if (!socketOut) {
                        socketOut = this._createNewSocketConnection(socketOutName, true);
                        outBlock.dataOutputs.push(socketOut);
                    }
                    // connect the sockets
                    socketIn.connectedPointIds.push(socketOut.uniqueId);
                    socketOut.connectedPointIds.push(socketIn.uniqueId);
                }
                else {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["Invalid value for value connection", value]);
                    throw new Error("Error parsing node connections");
                }
            }
            // inter block connections
            if (outputMapper.flowGraphMapping.interBlockConnectors) {
                for (const connector of outputMapper.flowGraphMapping.interBlockConnectors) {
                    const input = connector.input;
                    const output = connector.output;
                    const isVariable = connector.isVariable;
                    this._connectFlowGraphNodes(input, output, flowGraphBlocks.blocks[connector.inputBlockIndex], flowGraphBlocks.blocks[connector.outputBlockIndex], isVariable);
                }
            }
            if (outputMapper.flowGraphMapping.extraProcessor) {
                const declaration = this._interactivityGraph.declarations?.[gltfNode.declaration];
                if (!declaration) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No declaration found for extra processor", gltfNode]);
                    throw new Error("Error parsing node connections");
                }
                flowGraphBlocks.blocks = outputMapper.flowGraphMapping.extraProcessor(gltfNode, declaration, outputMapper.flowGraphMapping, this, flowGraphBlocks.blocks, context, this._gltf);
            }
        }
    }
    _createNewSocketConnection(name, isOutput) {
        return {
            uniqueId: (0,core_Misc_guid__WEBPACK_IMPORTED_MODULE_2__.RandomGUID)(),
            name,
            _connectionType: isOutput ? 1 /* FlowGraphConnectionType.Output */ : 0 /* FlowGraphConnectionType.Input */,
            connectedPointIds: [],
        };
    }
    _connectFlowGraphNodes(input, output, serializedInput, serializedOutput, isVariable) {
        const inputArray = isVariable ? serializedInput.dataInputs : serializedInput.signalInputs;
        const outputArray = isVariable ? serializedOutput.dataOutputs : serializedOutput.signalOutputs;
        const inputConnection = inputArray.find((s) => s.name === input) || this._createNewSocketConnection(input);
        const outputConnection = outputArray.find((s) => s.name === output) || this._createNewSocketConnection(output, true);
        // of not found add it to the array
        if (!inputArray.find((s) => s.name === input)) {
            inputArray.push(inputConnection);
        }
        if (!outputArray.find((s) => s.name === output)) {
            outputArray.push(outputConnection);
        }
        // connect the sockets
        inputConnection.connectedPointIds.push(outputConnection.uniqueId);
        outputConnection.connectedPointIds.push(inputConnection.uniqueId);
    }
    getVariableName(index) {
        return "staticVariable_" + index;
    }
    serializeToFlowGraph() {
        const context = {
            uniqueId: (0,core_Misc_guid__WEBPACK_IMPORTED_MODULE_2__.RandomGUID)(),
            _userVariables: {},
            _connectionValues: {},
        };
        this._parseNodeConnections(context);
        for (let i = 0; i < this._staticVariables.length; i++) {
            const variable = this._staticVariables[i];
            context._userVariables[this.getVariableName(i)] = variable;
        }
        const allBlocks = this._nodes.reduce((acc, val) => acc.concat(val.blocks), []);
        return {
            rightHanded: true,
            allBlocks,
            executionContexts: [context],
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2ludGVyYWN0aXZpdHlfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUlBO0FBRUE7QUFPQTtBQUVBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFvQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBaUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBbkRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7QUFFQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTs7Ozs7OztBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUdBOzs7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7Ozs7O0FBTUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUdBO0FBR0E7QUEyQ0E7Ozs7QUFJQTtBQUNBO0FBdUJBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBOUJBOztBQUVBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTZCQTs7QUFFQTtBQUNBO0FBMEJBO0FBR0E7QUFBQTtBQTVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFNQTtBQUVBO0FBRUE7QUFHQTtBQXdDQTs7Ozs7QUFLQTtBQUNBO0FBNkRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWhGQTs7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFRQTs7OztBQUlBO0FBQ0E7QUFFQTtBQTRCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqZEE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBRUE7QUFJQTtBQWdDQTs7Ozs7QUFLQTtBQUNBO0FBbUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBckJBOzs7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZMQTs7OztBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQWtCQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFWQTtBQUlBO0FBSUE7QUF6Q0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQTRCQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBSUE7OztBQUdBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBR0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFnQkE7QUFmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUF5QkE7QUFDQTtBQVBBOzs7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFHQTs7OztBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUErQkE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFvQkE7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUdBO0FBbUJBOzs7O0FBSUE7QUFDQTtBQXlCQTtBQW5CQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUVBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBQUE7O0FBTUE7OztBQUdBO0FBQ0E7QUFtQ0E7QUFqQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFhQTs7QUFFQTtBQUNBO0FBWUE7OztBQUdBO0FBQ0E7QUFBQTtBQWZBOztBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUVBO0FBZUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWRBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL0Jsb2Nrcy9mbG93R3JhcGhCbG9ja0ZhY3RvcnkudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaEFzc2V0c0NvbnRleHQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhCbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhDb25uZWN0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbnRleHQudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoQ29vcmRpbmF0b3IudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoRXZlbnRCbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhFeGVjdXRpb25CbG9jay50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoTG9nZ2VyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaFBhcnNlci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3IudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9zZXJpYWxpemF0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL3V0aWxzLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2xvYWRlcnMvc3JjL2dsVEYvMi4wL0V4dGVuc2lvbnMvS0hSX2ludGVyYWN0aXZpdHkvaW50ZXJhY3Rpdml0eUdyYXBoUGFyc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiLi4vZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5cbi8qKlxuICogQW55IGV4dGVybmFsIG1vZHVsZSB0aGF0IHdpc2hlcyB0byBhZGQgYSBuZXcgYmxvY2sgdG8gdGhlIGZsb3cgZ3JhcGggY2FuIGFkZCB0byB0aGlzIG9iamVjdCB1c2luZyB0aGUgaGVscGVyIGZ1bmN0aW9uLlxuICovXG5jb25zdCBDdXN0b21CbG9ja3M6IFJlY29yZDxzdHJpbmcsICgpID0+IFByb21pc2U8dHlwZW9mIEZsb3dHcmFwaEJsb2NrPj4gPSB7fTtcblxuLyoqXG4gKiBJZiB5b3Ugd2FudCB0byBhZGQgYSBuZXcgYmxvY2sgdG8gdGhlIGJsb2NrIGZhY3RvcnksIHlvdSBzaG91bGQgdXNlIHRoaXMgZnVuY3Rpb24uXG4gKiBQbGVhc2UgYmUgc3VyZSB0byBjaG9vc2UgYSB1bmlxdWUgbmFtZSBhbmQgZGVmaW5lIHRoZSByZXNwb25zaWJsZSBtb2R1bGUuXG4gKiBAcGFyYW0gbW9kdWxlIHRoZSBuYW1lIG9mIHRoZSBtb2R1bGUgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIGJsb2NrXG4gKiBAcGFyYW0gYmxvY2tOYW1lIHRoZSBuYW1lIG9mIHRoZSBibG9jay4gVGhpcyBzaG91bGQgYmUgdW5pcXVlLlxuICogQHBhcmFtIGZhY3RvcnkgYW4gYXN5bmMgZmFjdG9yeSBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgYmxvY2tcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvQmxvY2tGYWN0b3J5KG1vZHVsZTogc3RyaW5nLCBibG9ja05hbWU6IHN0cmluZywgZmFjdG9yeTogKCkgPT4gUHJvbWlzZTx0eXBlb2YgRmxvd0dyYXBoQmxvY2s+KTogdm9pZCB7XG4gICAgQ3VzdG9tQmxvY2tzW2Ake21vZHVsZX0vJHtibG9ja05hbWV9YF0gPSBmYWN0b3J5O1xufVxuXG4vKipcbiAqIGEgZnVuY3Rpb24gdG8gZ2V0IGEgZmFjdG9yeSBmdW5jdGlvbiBmb3IgYSBibG9jay5cbiAqIEBwYXJhbSBibG9ja05hbWUgdGhlIGJsb2NrIG5hbWUgdG8gaW5pdGlhbGl6ZS4gSWYgdGhlIGJsb2NrIGNvbWVzIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlLCB0aGUgbmFtZSBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCBcIm1vZHVsZS9ibG9ja05hbWVcIlxuICogQHJldHVybnMgYW4gYXN5bmMgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSBibG9jayBjbGFzcyB3aGVuIGNhbGxlZC5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrRmFjdG9yeShibG9ja05hbWU6IEZsb3dHcmFwaEJsb2NrTmFtZXMgfCBzdHJpbmcpOiAoKSA9PiBQcm9taXNlPHR5cGVvZiBGbG93R3JhcGhCbG9jaz4ge1xuICAgIHN3aXRjaCAoYmxvY2tOYW1lKSB7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5QbGF5QW5pbWF0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9BbmltYXRpb24vZmxvd0dyYXBoUGxheUFuaW1hdGlvbkJsb2NrXCIpKS5GbG93R3JhcGhQbGF5QW5pbWF0aW9uQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TdG9wQW5pbWF0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9BbmltYXRpb24vZmxvd0dyYXBoU3RvcEFuaW1hdGlvbkJsb2NrXCIpKS5GbG93R3JhcGhTdG9wQW5pbWF0aW9uQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5QYXVzZUFuaW1hdGlvbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQW5pbWF0aW9uL2Zsb3dHcmFwaFBhdXNlQW5pbWF0aW9uQmxvY2tcIikpLkZsb3dHcmFwaFBhdXNlQW5pbWF0aW9uQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5WYWx1ZUludGVycG9sYXRpb246XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0FuaW1hdGlvbi9mbG93R3JhcGhJbnRlcnBvbGF0aW9uQmxvY2tcIikpLkZsb3dHcmFwaEludGVycG9sYXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNjZW5lUmVhZHlFdmVudDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FdmVudC9mbG93R3JhcGhTY2VuZVJlYWR5RXZlbnRCbG9ja1wiKSkuRmxvd0dyYXBoU2NlbmVSZWFkeUV2ZW50QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TY2VuZVRpY2tFdmVudDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FdmVudC9mbG93R3JhcGhTY2VuZVRpY2tFdmVudEJsb2NrXCIpKS5GbG93R3JhcGhTY2VuZVRpY2tFdmVudEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2VuZEN1c3RvbUV2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaFNlbmRDdXN0b21FdmVudEJsb2NrXCIpKS5GbG93R3JhcGhTZW5kQ3VzdG9tRXZlbnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlJlY2VpdmVDdXN0b21FdmVudDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FdmVudC9mbG93R3JhcGhSZWNlaXZlQ3VzdG9tRXZlbnRCbG9ja1wiKSkuRmxvd0dyYXBoUmVjZWl2ZUN1c3RvbUV2ZW50QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NZXNoUGlja0V2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaE1lc2hQaWNrRXZlbnRCbG9ja1wiKSkuRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUEk6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFBpQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbmY6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEluZkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTmFOOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhOYU5CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlJhbmRvbTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoUmFuZG9tQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BZGQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEFkZEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU3VidHJhY3Q6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFN1YnRyYWN0QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NdWx0aXBseTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTXVsdGlwbHlCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRpdmlkZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRGl2aWRlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BYnM6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEFic0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2lnbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoU2lnbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJ1bmM6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFRydW5jQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9vcjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRmxvb3JCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNlaWw6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaENlaWxCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlJvdW5kOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhSb3VuZEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRnJhY3Rpb246XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEZyYWN0aW9uQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5OZWdhdGlvbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTmVnYXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk1vZHVsbzpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTW9kdWxvQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NaW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaE1pbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF4OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhNYXhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNsYW1wOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhDbGFtcEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2F0dXJhdGU6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFNhdHVyYXRlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRoSW50ZXJwb2xhdGlvbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTWF0aEludGVycG9sYXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkVxdWFsaXR5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhFcXVhbGl0eUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVzc1RoYW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaExlc3NUaGFuQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhbk9yRXF1YWw6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaExlc3NUaGFuT3JFcXVhbEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuR3JlYXRlclRoYW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEdyZWF0ZXJUaGFuQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhbk9yRXF1YWw6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEdyZWF0ZXJUaGFuT3JFcXVhbEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuSXNOYU46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaElzTmFuQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Jc0luZmluaXR5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhJc0luZmluaXR5QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5EZWdUb1JhZDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRGVnVG9SYWRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlJhZFRvRGVnOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhSYWRUb0RlZ0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2luOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhTaW5CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQ29zQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5UYW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFRhbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXNpbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQXNpbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQWNvczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQWNvc0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQXRhbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbjI6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEF0YW4yQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaW5oOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhTaW5oQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db3NoOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhDb3NoQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5UYW5oOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhUYW5oQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Bc2luaDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQXNpbmhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkFjb3NoOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhBY29zaEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQXRhbmg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEF0YW5oQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHBvbmVudGlhbDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRXhwQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2c6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaExvZ0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTG9nMjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTG9nMkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTG9nMTA6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaExvZzEwQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TcXVhcmVSb290OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhTcXVhcmVSb290QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Qb3dlcjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoUG93ZXJCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkN1YmVSb290OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhDdWJlUm9vdEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUFuZDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQml0d2lzZUFuZEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZU9yOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhCaXR3aXNlT3JCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VOb3Q6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEJpdHdpc2VOb3RCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VYb3I6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEJpdHdpc2VYb3JCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VMZWZ0U2hpZnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEJpdHdpc2VMZWZ0U2hpZnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkJpdHdpc2VSaWdodFNoaWZ0OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhCaXR3aXNlUmlnaHRTaGlmdEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVuZ3RoOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhMZW5ndGhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk5vcm1hbGl6ZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTm9ybWFsaXplQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Eb3Q6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaERvdEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ3Jvc3M6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaENyb3NzQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Sb3RhdGUyRDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoUm90YXRlMkRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTNEOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhSb3RhdGUzREJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJhbnNwb3NlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRyaXhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhUcmFuc3Bvc2VCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRldGVybWluYW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRyaXhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhEZXRlcm1pbmFudEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuSW52ZXJ0TWF0cml4OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRyaXhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhJbnZlcnRNYXRyaXhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk1hdHJpeE11bHRpcGxpY2F0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRyaXhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhNYXRyaXhNdWx0aXBsaWNhdGlvbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQnJhbmNoOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhCcmFuY2hCbG9ja1wiKSkuRmxvd0dyYXBoQnJhbmNoQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXREZWxheTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoU2V0RGVsYXlCbG9ja1wiKSkuRmxvd0dyYXBoU2V0RGVsYXlCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNhbmNlbERlbGF5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhDYW5jZWxEZWxheUJsb2NrXCIpKS5GbG93R3JhcGhDYW5jZWxEZWxheUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2FsbENvdW50ZXI6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaENvdW50ZXJCbG9ja1wiKSkuRmxvd0dyYXBoQ2FsbENvdW50ZXJCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRlYm91bmNlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhEZWJvdW5jZUJsb2NrXCIpKS5GbG93R3JhcGhEZWJvdW5jZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuVGhyb3R0bGU6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaFRocm90dGxlQmxvY2tcIikpLkZsb3dHcmFwaFRocm90dGxlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Eb046XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaERvTkJsb2NrXCIpKS5GbG93R3JhcGhEb05CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkZsaXBGbG9wOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhGbGlwRmxvcEJsb2NrXCIpKS5GbG93R3JhcGhGbGlwRmxvcEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRm9yTG9vcDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoRm9yTG9vcEJsb2NrXCIpKS5GbG93R3JhcGhGb3JMb29wQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NdWx0aUdhdGU6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaE11bHRpR2F0ZUJsb2NrXCIpKS5GbG93R3JhcGhNdWx0aUdhdGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNlcXVlbmNlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhTZXF1ZW5jZUJsb2NrXCIpKS5GbG93R3JhcGhTZXF1ZW5jZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU3dpdGNoOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhTd2l0Y2hCbG9ja1wiKSkuRmxvd0dyYXBoU3dpdGNoQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5XYWl0QWxsOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhXYWl0QWxsQmxvY2tcIikpLkZsb3dHcmFwaFdhaXRBbGxCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLldoaWxlTG9vcDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoV2hpbGVMb29wQmxvY2tcIikpLkZsb3dHcmFwaFdoaWxlTG9vcEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29uc29sZUxvZzpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vZmxvd0dyYXBoQ29uc29sZUxvZ0Jsb2NrXCIpKS5GbG93R3JhcGhDb25zb2xlTG9nQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db25kaXRpb25hbDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL2Zsb3dHcmFwaENvbmRpdGlvbmFsRGF0YUJsb2NrXCIpKS5GbG93R3JhcGhDb25kaXRpb25hbERhdGFCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbnN0YW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvZmxvd0dyYXBoQ29uc3RhbnRCbG9ja1wiKSkuRmxvd0dyYXBoQ29uc3RhbnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybUNvb3JkaW5hdGVzU3lzdGVtOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvZmxvd0dyYXBoVHJhbnNmb3JtQ29vcmRpbmF0ZXNTeXN0ZW1CbG9ja1wiKSkuRmxvd0dyYXBoVHJhbnNmb3JtQ29vcmRpbmF0ZXNTeXN0ZW1CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkdldEFzc2V0OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvZmxvd0dyYXBoR2V0QXNzZXRCbG9ja1wiKSkuRmxvd0dyYXBoR2V0QXNzZXRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkdldFByb3BlcnR5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvZmxvd0dyYXBoR2V0UHJvcGVydHlCbG9ja1wiKSkuRmxvd0dyYXBoR2V0UHJvcGVydHlCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNldFByb3BlcnR5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9mbG93R3JhcGhTZXRQcm9wZXJ0eUJsb2NrXCIpKS5GbG93R3JhcGhTZXRQcm9wZXJ0eUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0VmFyaWFibGU6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9mbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrXCIpKS5GbG93R3JhcGhHZXRWYXJpYWJsZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2V0VmFyaWFibGU6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL2Zsb3dHcmFwaFNldFZhcmlhYmxlQmxvY2tcIikpLkZsb3dHcmFwaFNldFZhcmlhYmxlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlcjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhKc29uUG9pbnRlclBhcnNlckJsb2NrXCIpKS5GbG93R3JhcGhKc29uUG9pbnRlclBhcnNlckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTGVhZGluZ1plcm9zOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhMZWFkaW5nWmVyb3NCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlRyYWlsaW5nWmVyb3M6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFRyYWlsaW5nWmVyb3NCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk9uZUJpdHNDb3VudGVyOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhPbmVCaXRzQ291bnRlckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjI6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhDb21iaW5lRXh0cmFjdEJsb2Nrc1wiKSkuRmxvd0dyYXBoQ29tYmluZVZlY3RvcjJCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVWZWN0b3IzOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3NcIikpLkZsb3dHcmFwaENvbWJpbmVWZWN0b3IzQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yNDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aENvbWJpbmVFeHRyYWN0QmxvY2tzXCIpKS5GbG93R3JhcGhDb21iaW5lVmVjdG9yNEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZU1hdHJpeDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aENvbWJpbmVFeHRyYWN0QmxvY2tzXCIpKS5GbG93R3JhcGhDb21iaW5lTWF0cml4QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0VmVjdG9yMjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aENvbWJpbmVFeHRyYWN0QmxvY2tzXCIpKS5GbG93R3JhcGhFeHRyYWN0VmVjdG9yMkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjM6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhDb21iaW5lRXh0cmFjdEJsb2Nrc1wiKSkuRmxvd0dyYXBoRXh0cmFjdFZlY3RvcjNCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RWZWN0b3I0OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3NcIikpLkZsb3dHcmFwaEV4dHJhY3RWZWN0b3I0QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0TWF0cml4OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3NcIikpLkZsb3dHcmFwaEV4dHJhY3RNYXRyaXhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybVZlY3RvcjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoVHJhbnNmb3JtQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5UcmFuc2Zvcm1Db29yZGluYXRlczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoVHJhbnNmb3JtQ29vcmRpbmF0ZXNCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbmp1Z2F0ZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQ29uanVnYXRlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BbmdsZUJldHdlZW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEFuZ2xlQmV0d2VlbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUXVhdGVybmlvbkZyb21BeGlzQW5nbGU6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFF1YXRlcm5pb25Gcm9tQXhpc0FuZ2xlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BeGlzQW5nbGVGcm9tUXVhdGVybmlvbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQXhpc0FuZ2xlRnJvbVF1YXRlcm5pb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlF1YXRlcm5pb25Gcm9tRGlyZWN0aW9uczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoUXVhdGVybmlvbkZyb21EaXJlY3Rpb25zQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRyaXhEZWNvbXBvc2U6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaE1hdHJpeERlY29tcG9zZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF0cml4Q29tcG9zZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0cml4TWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTWF0cml4Q29tcG9zZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQm9vbGVhblRvRmxvYXQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9UcmFuc2Zvcm1lcnMvZmxvd0dyYXBoVHlwZVRvVHlwZUJsb2Nrc1wiKSkuRmxvd0dyYXBoQm9vbGVhblRvRmxvYXQ7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Cb29sZWFuVG9JbnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9UcmFuc2Zvcm1lcnMvZmxvd0dyYXBoVHlwZVRvVHlwZUJsb2Nrc1wiKSkuRmxvd0dyYXBoQm9vbGVhblRvSW50O1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxvYXRUb0Jvb2xlYW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9UcmFuc2Zvcm1lcnMvZmxvd0dyYXBoVHlwZVRvVHlwZUJsb2Nrc1wiKSkuRmxvd0dyYXBoRmxvYXRUb0Jvb2xlYW47XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnRUb0Jvb2xlYW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9UcmFuc2Zvcm1lcnMvZmxvd0dyYXBoVHlwZVRvVHlwZUJsb2Nrc1wiKSkuRmxvd0dyYXBoSW50VG9Cb29sZWFuO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuSW50VG9GbG9hdDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhUeXBlVG9UeXBlQmxvY2tzXCIpKS5GbG93R3JhcGhJbnRUb0Zsb2F0O1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxvYXRUb0ludDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhUeXBlVG9UeXBlQmxvY2tzXCIpKS5GbG93R3JhcGhGbG9hdFRvSW50O1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRWFzaW5nOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9BbmltYXRpb24vZmxvd0dyYXBoRWFzaW5nQmxvY2tcIikpLkZsb3dHcmFwaEVhc2luZ0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQmV6aWVyQ3VydmVFYXNpbmc6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0FuaW1hdGlvbi9mbG93R3JhcGhCZXppZXJDdXJ2ZUVhc2luZ0Jsb2NrXCIpKS5GbG93R3JhcGhCZXppZXJDdXJ2ZUVhc2luZ0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUG9pbnRlck92ZXJFdmVudDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FdmVudC9mbG93R3JhcGhQb2ludGVyT3ZlckV2ZW50QmxvY2tcIikpLkZsb3dHcmFwaFBvaW50ZXJPdmVyRXZlbnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlBvaW50ZXJPdXRFdmVudDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FdmVudC9mbG93R3JhcGhQb2ludGVyT3V0RXZlbnRCbG9ja1wiKSkuRmxvd0dyYXBoUG9pbnRlck91dEV2ZW50QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db250ZXh0OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVXRpbHMvZmxvd0dyYXBoQ29udGV4dEJsb2NrXCIpKS5GbG93R3JhcGhDb250ZXh0QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BcnJheUluZGV4OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVXRpbHMvZmxvd0dyYXBoQXJyYXlJbmRleEJsb2NrXCIpKS5GbG93R3JhcGhBcnJheUluZGV4QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db2RlRXhlY3V0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVXRpbHMvZmxvd0dyYXBoQ29kZUV4ZWN1dGlvbkJsb2NrXCIpKS5GbG93R3JhcGhDb2RlRXhlY3V0aW9uQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbmRleE9mOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVXRpbHMvZmxvd0dyYXBoSW5kZXhPZkJsb2NrXCIpKS5GbG93R3JhcGhJbmRleE9mQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5GdW5jdGlvblJlZmVyZW5jZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1V0aWxzL2Zsb3dHcmFwaEZ1bmN0aW9uUmVmZXJlbmNlQmxvY2tcIikpLkZsb3dHcmFwaEZ1bmN0aW9uUmVmZXJlbmNlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5EYXRhU3dpdGNoOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvZmxvd0dyYXBoRGF0YVN3aXRjaEJsb2NrXCIpKS5GbG93R3JhcGhEYXRhU3dpdGNoQmxvY2s7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgYmxvY2sgaXMgYSBjdXN0b20gYmxvY2tcbiAgICAgICAgICAgIGlmIChDdXN0b21CbG9ja3NbYmxvY2tOYW1lXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDdXN0b21CbG9ja3NbYmxvY2tOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBibG9jayBuYW1lICR7YmxvY2tOYW1lfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEV2ZW50QmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhFdmVudEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29vcmRpbmF0b3IgfSBmcm9tIFwiLi9mbG93R3JhcGhDb29yZGluYXRvclwiO1xyXG5pbXBvcnQgdHlwZSB7IElPYmplY3RBY2Nlc3NvciB9IGZyb20gXCIuL3R5cGVEZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElQYXRoVG9PYmplY3RDb252ZXJ0ZXIgfSBmcm9tIFwiLi4vT2JqZWN0TW9kZWwvb2JqZWN0TW9kZWxJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV2ZW50VHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaEV2ZW50VHlwZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhFdmVudFRyaWdnZXIgfSBmcm9tIFwiLi9mbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3JcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoU2NlbmVFdmVudENvb3JkaW5hdG9yIH0gZnJvbSBcIi4vZmxvd0dyYXBoU2NlbmVFdmVudENvb3JkaW5hdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrIH0gZnJvbSBcIi4vQmxvY2tzL0V2ZW50L2Zsb3dHcmFwaE1lc2hQaWNrRXZlbnRCbG9ja1wiO1xyXG5pbXBvcnQgeyBfSXNEZXNjZW5kYW50T2YgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gRmxvd0dyYXBoU3RhdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ3JhcGggaXMgc3RvcHBlZFxyXG4gICAgICovXHJcbiAgICBTdG9wcGVkLFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZ3JhcGggaXMgcnVubmluZ1xyXG4gICAgICovXHJcbiAgICBTdGFydGVkLFxyXG59XHJcblxyXG4vKipcclxuICogUGFyYW1ldGVycyB1c2VkIHRvIGNyZWF0ZSBhIGZsb3cgZ3JhcGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhQYXJhbXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2NlbmUgdGhhdCB0aGUgZmxvdyBncmFwaCBiZWxvbmdzIHRvLlxyXG4gICAgICovXHJcbiAgICBzY2VuZTogU2NlbmU7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCBjb29yZGluYXRvciB1c2VkIGJ5IHRoZSBmbG93IGdyYXBoLlxyXG4gICAgICovXHJcbiAgICBjb29yZGluYXRvcjogRmxvd0dyYXBoQ29vcmRpbmF0b3I7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBwYXJzaW5nIGEgZmxvdyBncmFwaC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFBhcnNlT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgY29tcGxleCB2YWx1ZXMgaW4gYSBzY2VuZS5cclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleSBvZiB0aGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gcmVhZCB0aGUgdmFsdWUgZnJvbVxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0byByZWFkIHRoZSB2YWx1ZSBmcm9tXHJcbiAgICAgKi9cclxuICAgIHZhbHVlUGFyc2VGdW5jdGlvbj86IChrZXk6IHN0cmluZywgc2VyaWFsaXphdGlvbk9iamVjdDogYW55LCBhc3NldHNDb250YWluZXI6IElBc3NldENvbnRhaW5lciwgc2NlbmU6IFNjZW5lKSA9PiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmbG93IGdyYXBoIGNvb3JkaW5hdG9yLlxyXG4gICAgICovXHJcbiAgICBjb29yZGluYXRvcjogRmxvd0dyYXBoQ29vcmRpbmF0b3I7XHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIHBhdGggdG8gYW4gb2JqZWN0IGFjY2Vzc29yLlxyXG4gICAgICovXHJcbiAgICBwYXRoQ29udmVydGVyPzogSVBhdGhUb09iamVjdENvbnZlcnRlcjxJT2JqZWN0QWNjZXNzb3I+O1xyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIHJlcHJlc2VudCBhIGZsb3cgZ3JhcGguXHJcbiAqIEEgZmxvdyBncmFwaCBpcyBhIGdyYXBoIG9mIGJsb2NrcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBjb21wbGV4IGxvZ2ljLlxyXG4gKiBCbG9ja3MgY2FuIGJlIGFkZGVkIHRvIHRoZSBncmFwaCBhbmQgY29ubmVjdGVkIHRvIGVhY2ggb3RoZXIuXHJcbiAqIFRoZSBncmFwaCBjYW4gdGhlbiBiZSBzdGFydGVkLCB3aGljaCB3aWxsIGluaXQgYW5kIHN0YXJ0IGFsbCBvZiBpdHMgZXZlbnQgYmxvY2tzLlxyXG4gKlxyXG4gKiBAZXhwZXJpbWVudGFsIEZsb3dHcmFwaCBpcyBzdGlsbCBpbiBkZXZlbG9wbWVudCBhbmQgaXMgc3ViamVjdCB0byBjaGFuZ2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoIHtcclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgZ3JhcGggY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxGbG93R3JhcGhTdGF0ZT4gPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9ldmVudEJsb2NrczogeyBba2V5b2YgaW4gRmxvd0dyYXBoRXZlbnRUeXBlXTogRmxvd0dyYXBoRXZlbnRCbG9ja1tdIH0gPSB7XHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZVJlYWR5XTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZURpc3Bvc2VdOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lQmVmb3JlUmVuZGVyXTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5NZXNoUGlja106IFtdLFxyXG4gICAgICAgIFtGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlckRvd25dOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJVcF06IFtdLFxyXG4gICAgICAgIFtGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlck1vdmVdOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJPdmVyXTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3V0XTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZUFmdGVyUmVuZGVyXTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5Ob1RyaWdnZXJdOiBbXSxcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NjZW5lOiBTY2VuZTtcclxuICAgIHByaXZhdGUgX2Nvb3JkaW5hdG9yOiBGbG93R3JhcGhDb29yZGluYXRvcjtcclxuICAgIHByaXZhdGUgX2V4ZWN1dGlvbkNvbnRleHRzOiBGbG93R3JhcGhDb250ZXh0W10gPSBbXTtcclxuICAgIHByaXZhdGUgX3NjZW5lRXZlbnRDb29yZGluYXRvcjogRmxvd0dyYXBoU2NlbmVFdmVudENvb3JkaW5hdG9yO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUZsb3dHcmFwaEV2ZW50VHJpZ2dlcj4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0YXRlIG9mIHRoZSBncmFwaFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogRmxvd0dyYXBoU3RhdGUgPSBGbG93R3JhcGhTdGF0ZS5TdG9wcGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0YXRlIG9mIHRoZSBncmFwaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzdGF0ZSBvZiB0aGUgZ3JhcGhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBzdGF0ZSh2YWx1ZTogRmxvd0dyYXBoU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3QgYSBGbG93IEdyYXBoXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIGNvbnN0cnVjdGlvbiBwYXJhbWV0ZXJzLiBjdXJyZW50bHkgb25seSB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBhcmFtczogSUZsb3dHcmFwaFBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX3NjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lRXZlbnRDb29yZGluYXRvciA9IG5ldyBGbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3IodGhpcy5fc2NlbmUpO1xyXG4gICAgICAgIHRoaXMuX2Nvb3JkaW5hdG9yID0gcGFyYW1zLmNvb3JkaW5hdG9yO1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudE9ic2VydmVyID0gdGhpcy5fc2NlbmVFdmVudENvb3JkaW5hdG9yLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLmFkZCgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb250ZXh0IG9mIHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlciA9IHRoaXMuX2dldENvbnRleHR1YWxPcmRlcihldmVudC50eXBlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2Ygb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIGNvbnRleHRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFibG9jay5fZXhlY3V0ZUV2ZW50KGNvbnRleHQsIGV2ZW50LnBheWxvYWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjdXN0b20gYmVoYXZpb3Iocykgb2Ygc3BlY2lmaWMgZXZlbnRzXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVSZWFkeTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZUV2ZW50Q29vcmRpbmF0b3Iuc2NlbmVSZWFkeVRyaWdnZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZUJlZm9yZVJlbmRlcjpcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHQgb2YgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5fbm90aWZ5T25UaWNrKGV2ZW50LnBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lRGlzcG9zZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29udGV4dC4gQSBjb250ZXh0IHJlcHJlc2VudHMgb25lIHNlbGYgY29udGFpbmVkIGV4ZWN1dGlvbiBmb3IgdGhlIGdyYXBoLCB3aXRoIGl0cyBvd24gdmFyaWFibGVzLlxyXG4gICAgICogQHJldHVybnMgdGhlIGNvbnRleHQsIHdoZXJlIHlvdSBjYW4gZ2V0IGFuZCBzZXQgdmFyaWFibGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVDb250ZXh0KCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgRmxvd0dyYXBoQ29udGV4dCh7IHNjZW5lOiB0aGlzLl9zY2VuZSwgY29vcmRpbmF0b3I6IHRoaXMuX2Nvb3JkaW5hdG9yIH0pO1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzLnB1c2goY29udGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBleGVjdXRpb24gY29udGV4dCBhdCBhIGdpdmVuIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggdGhlIGluZGV4IG9mIHRoZSBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgZXhlY3V0aW9uIGNvbnRleHQgYXQgdGhhdCBpbmRleFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q29udGV4dChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhbiBldmVudCBibG9jay4gV2hlbiB0aGUgZ3JhcGggaXMgc3RhcnRlZCwgaXQgd2lsbCBzdGFydCBsaXN0ZW5pbmcgdG8gZXZlbnRzXHJcbiAgICAgKiBmcm9tIHRoZSBibG9jayBhbmQgZXhlY3V0ZSB0aGUgZ3JhcGggd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXHJcbiAgICAgKiBAcGFyYW0gYmxvY2sgdGhlIGV2ZW50IGJsb2NrIHRvIGJlIGFkZGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRFdmVudEJsb2NrKGJsb2NrOiBGbG93R3JhcGhFdmVudEJsb2NrKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09IEZsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3ZlciB8fCBibG9jay50eXBlID09PSBGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlck91dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5jb25zdGFudGx5VXBkYXRlTWVzaFVuZGVyUG9pbnRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkb24ndCBhZGQgaWYgTm9UcmlnZ2VyLCBidXQgc3RpbGwgc3RhcnQgdGhlIHBlbmRpbmcgdGFza3NcclxuICAgICAgICBpZiAoYmxvY2sudHlwZSAhPT0gRmxvd0dyYXBoRXZlbnRUeXBlLk5vVHJpZ2dlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudEJsb2Nrc1tibG9jay50eXBlXS5wdXNoKGJsb2NrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgYWxyZWFkeSBzdGFydGVkLCBzb3J0IGFuZCBhZGQgdG8gdGhlIHBlbmRpbmdcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gRmxvd0dyYXBoU3RhdGUuU3RhcnRlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHQgb2YgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrLl9zdGFydFBlbmRpbmdUYXNrcyhjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlLmFkZE9uY2UoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZsb3dHcmFwaFN0YXRlLlN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHQgb2YgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suX3N0YXJ0UGVuZGluZ1Rhc2tzKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHRoZSBmbG93IGdyYXBoLiBJbml0aWFsaXplcyB0aGUgZXZlbnQgYmxvY2tzIGFuZCBzdGFydHMgbGlzdGVuaW5nIHRvIGV2ZW50cy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBGbG93R3JhcGhTdGF0ZS5TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUuYWRkKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZsb3dHcmFwaFN0YXRlLlN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVuZGluZ0V2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9ubHkgZXZlbnQgd2UgbmVlZCB0byBjaGVjayBpcyB0aGUgc2NlbmUgcmVhZHkgZXZlbnQuIElmIHRoZSBzY2VuZSBpcyBhbHJlYWR5IHJlYWR5IHdoZW4gdGhlIGdyYXBoIHN0YXJ0cywgd2Ugc2hvdWxkIHN0YXJ0IHRoZSBwZW5kaW5nIHRhc2tzLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NjZW5lLmlzUmVhZHkodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZUV2ZW50Q29vcmRpbmF0b3Iub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHsgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lUmVhZHkgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gRmxvd0dyYXBoU3RhdGUuU3RhcnRlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydFBlbmRpbmdFdmVudHMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZXh0IG9mIHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLl9ldmVudEJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSB0aGlzLl9nZXRDb250ZXh0dWFsT3JkZXIodHlwZSBhcyBGbG93R3JhcGhFdmVudFR5cGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLl9zdGFydFBlbmRpbmdUYXNrcyhjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb250ZXh0dWFsT3JkZXIodHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlLCBjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogRmxvd0dyYXBoRXZlbnRCbG9ja1tdIHtcclxuICAgICAgICBjb25zdCBvcmRlciA9IHRoaXMuX2V2ZW50QmxvY2tzW3R5cGVdLnNvcnQoKGEsIGIpID0+IGIuaW5pdFByaW9yaXR5IC0gYS5pbml0UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gRmxvd0dyYXBoRXZlbnRUeXBlLk1lc2hQaWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc2hQaWNrT3JkZXIgPSBbXSBhcyBGbG93R3JhcGhFdmVudEJsb2NrW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sxIG9mIG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYmxvY2sgaXMgYSBtZXNoIHBpY2ssIGd1YXJhbnRlZSB0aGF0IHBpY2tzIG9mIGNoaWxkcmVuIG1lc2hlcyBjb21lIGJlZm9yZSBwaWNrcyBvZiBwYXJlbnQgbWVzaGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNoMSA9IChibG9jazEgYXMgRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrKS5hc3NldC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgb3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9jazIgPSBvcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoMiA9IChibG9jazIgYXMgRmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrKS5hc3NldC5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzaDEgJiYgbWVzaDIgJiYgX0lzRGVzY2VuZGFudE9mKG1lc2gxLCBtZXNoMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzaFBpY2tPcmRlci5zcGxpY2UoaSwgMCwgYmxvY2sxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzaFBpY2tPcmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZXMgb2YgdGhlIGZsb3cgZ3JhcGguIENhbmNlbHMgYW55IHBlbmRpbmcgdGFza3MgYW5kIHJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEZsb3dHcmFwaFN0YXRlLlN0b3BwZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gRmxvd0dyYXBoU3RhdGUuU3RvcHBlZDtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHQgb2YgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgY29udGV4dC5fY2xlYXJQZW5kaW5nQmxvY2tzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRoaXMuX2V2ZW50QmxvY2tzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50QmxvY2tzW3R5cGUgYXMgRmxvd0dyYXBoRXZlbnRUeXBlXS5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ldmVudE9ic2VydmVyPy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9zY2VuZUV2ZW50Q29vcmRpbmF0b3IuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgYSBmdW5jdGlvbiBpbiBhbGwgYmxvY2tzIG9mIGEgZmxvdyBncmFwaCwgc3RhcnRpbmcgd2l0aCB0aGUgZXZlbnQgYmxvY2tzLlxyXG4gICAgICogQHBhcmFtIHZpc2l0b3IgdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2aXNpdEFsbEJsb2Nrcyh2aXNpdG9yOiAoYmxvY2s6IEZsb3dHcmFwaEJsb2NrKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaXRMaXN0OiBGbG93R3JhcGhCbG9ja1tdID0gW107XHJcbiAgICAgICAgY29uc3QgaWRzQWRkZWRUb1Zpc2l0TGlzdCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLl9ldmVudEJsb2Nrcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuX2V2ZW50QmxvY2tzW3R5cGUgYXMgRmxvd0dyYXBoRXZlbnRUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgdmlzaXRMaXN0LnB1c2goYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgaWRzQWRkZWRUb1Zpc2l0TGlzdC5hZGQoYmxvY2sudW5pcXVlSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAodmlzaXRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB2aXNpdExpc3QucG9wKCkhO1xyXG4gICAgICAgICAgICB2aXNpdG9yKGJsb2NrKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YUluIG9mIGJsb2NrLmRhdGFJbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29ubmVjdGlvbiBvZiBkYXRhSW4uX2Nvbm5lY3RlZFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZHNBZGRlZFRvVmlzaXRMaXN0Lmhhcyhjb25uZWN0aW9uLl9vd25lckJsb2NrLnVuaXF1ZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdExpc3QucHVzaChjb25uZWN0aW9uLl9vd25lckJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRzQWRkZWRUb1Zpc2l0TGlzdC5hZGQoY29ubmVjdGlvbi5fb3duZXJCbG9jay51bmlxdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChibG9jayBpbnN0YW5jZW9mIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpZ25hbE91dCBvZiBibG9jay5zaWduYWxPdXRwdXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIHNpZ25hbE91dC5fY29ubmVjdGVkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZHNBZGRlZFRvVmlzaXRMaXN0Lmhhcyhjb25uZWN0aW9uLl9vd25lckJsb2NrLnVuaXF1ZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRMaXN0LnB1c2goY29ubmVjdGlvbi5fb3duZXJCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHNBZGRlZFRvVmlzaXRMaXN0LmFkZChjb25uZWN0aW9uLl9vd25lckJsb2NrLnVuaXF1ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgYSBncmFwaFxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byB3cml0ZSB0aGUgdmFsdWVzIGluXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVTZXJpYWxpemVGdW5jdGlvbiBhIGZ1bmN0aW9uIHRvIHNlcmlhbGl6ZSBjb21wbGV4IHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9LCB2YWx1ZVNlcmlhbGl6ZUZ1bmN0aW9uPzogKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmFsbEJsb2NrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmlzaXRBbGxCbG9ja3MoKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRCbG9jazogYW55ID0ge307XHJcbiAgICAgICAgICAgIGJsb2NrLnNlcmlhbGl6ZShzZXJpYWxpemVkQmxvY2spO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmFsbEJsb2Nrcy5wdXNoKHNlcmlhbGl6ZWRCbG9jayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5leGVjdXRpb25Db250ZXh0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udGV4dCBvZiB0aGlzLl9leGVjdXRpb25Db250ZXh0cykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2VyaWFsaXplKHNlcmlhbGl6ZWRDb250ZXh0LCB2YWx1ZVNlcmlhbGl6ZUZ1bmN0aW9uKTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5leGVjdXRpb25Db250ZXh0cy5wdXNoKHNlcmlhbGl6ZWRDb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBBbmltYXRpb25Hcm91cCB9IGZyb20gXCJjb3JlL0FuaW1hdGlvbnMvYW5pbWF0aW9uR3JvdXBcIjtcbmltcG9ydCB0eXBlIHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBNZXNoIH0gZnJvbSBcImNvcmUvTWVzaGVzL21lc2hcIjtcbmltcG9ydCB0eXBlIHsgTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbWF0ZXJpYWxcIjtcbmltcG9ydCB0eXBlIHsgQ2FtZXJhIH0gZnJvbSBcImNvcmUvQ2FtZXJhcy9jYW1lcmFcIjtcbmltcG9ydCB0eXBlIHsgTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvbGlnaHRcIjtcbmltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XG5cbi8qKlxuICogVGhlIHR5cGUgb2YgdGhlIGFzc2V0cyB0aGF0IGZsb3cgZ3JhcGggc3VwcG9ydHNcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gRmxvd0dyYXBoQXNzZXRUeXBlIHtcbiAgICBBbmltYXRpb24gPSBcIkFuaW1hdGlvblwiLFxuICAgIEFuaW1hdGlvbkdyb3VwID0gXCJBbmltYXRpb25Hcm91cFwiLFxuICAgIE1lc2ggPSBcIk1lc2hcIixcbiAgICBNYXRlcmlhbCA9IFwiTWF0ZXJpYWxcIixcbiAgICBDYW1lcmEgPSBcIkNhbWVyYVwiLFxuICAgIExpZ2h0ID0gXCJMaWdodFwiLFxuICAgIC8vIEZ1cnRoZXIgYXNzZXQgdHlwZXMgd2lsbCBiZSBhZGRlZCBoZXJlIHdoZW4gbmVlZGVkLlxufVxuXG5leHBvcnQgdHlwZSBBc3NldFR5cGU8VCBleHRlbmRzIEZsb3dHcmFwaEFzc2V0VHlwZT4gPSBUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlLkFuaW1hdGlvblxuICAgID8gQW5pbWF0aW9uXG4gICAgOiBUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlLkFuaW1hdGlvbkdyb3VwXG4gICAgICA/IEFuaW1hdGlvbkdyb3VwXG4gICAgICA6IFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGUuTWVzaFxuICAgICAgICA/IE1lc2hcbiAgICAgICAgOiBUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlLk1hdGVyaWFsXG4gICAgICAgICAgPyBNYXRlcmlhbFxuICAgICAgICAgIDogVCBleHRlbmRzIEZsb3dHcmFwaEFzc2V0VHlwZS5DYW1lcmFcbiAgICAgICAgICAgID8gQ2FtZXJhXG4gICAgICAgICAgICA6IFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGUuTGlnaHRcbiAgICAgICAgICAgICAgPyBMaWdodFxuICAgICAgICAgICAgICA6IG5ldmVyO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGFzc2V0IHdpdGggdGhlIGdpdmVuIGluZGV4IGFuZCB0eXBlIGZyb20gdGhlIGFzc2V0cyBjb250ZXh0LlxuICogQHBhcmFtIGFzc2V0c0NvbnRleHQgVGhlIGFzc2V0cyBjb250ZXh0IHRvIGdldCB0aGUgYXNzZXQgZnJvbVxuICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIGFzc2V0XG4gKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBhc3NldFxuICogQHBhcmFtIHVzZUluZGV4QXNVbmlxdWVJZCBJZiBzZXQgdG8gdHJ1ZSwgaW5zdGVhZCBvZiB0aGUgaW5kZXggaW4gdGhlIGFycmF5IGl0IHdpbGwgc2VhcmNoIGZvciB0aGUgdW5pcXVlIGlkIG9mIHRoZSBhc3NldC5cbiAqIEByZXR1cm5zIFRoZSBhc3NldCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0Rmxvd0dyYXBoQXNzZXRXaXRoVHlwZTxUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlPihcbiAgICBhc3NldHNDb250ZXh0OiBJQXNzZXRDb250YWluZXIsXG4gICAgdHlwZTogVCxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIHVzZUluZGV4QXNVbmlxdWVJZD86IGJvb2xlYW5cbik6IE51bGxhYmxlPEFzc2V0VHlwZTxUPj4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEFzc2V0VHlwZS5BbmltYXRpb246XG4gICAgICAgICAgICByZXR1cm4gdXNlSW5kZXhBc1VuaXF1ZUlkXG4gICAgICAgICAgICAgICAgPyAoKGFzc2V0c0NvbnRleHQuYW5pbWF0aW9ucy5maW5kKChhKSA9PiBhLnVuaXF1ZUlkID09PSBpbmRleCkgYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbClcbiAgICAgICAgICAgICAgICA6ICgoYXNzZXRzQ29udGV4dC5hbmltYXRpb25zW2luZGV4XSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKTtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhBc3NldFR5cGUuQW5pbWF0aW9uR3JvdXA6XG4gICAgICAgICAgICByZXR1cm4gdXNlSW5kZXhBc1VuaXF1ZUlkXG4gICAgICAgICAgICAgICAgPyAoKGFzc2V0c0NvbnRleHQuYW5pbWF0aW9uR3JvdXBzLmZpbmQoKGEpID0+IGEudW5pcXVlSWQgPT09IGluZGV4KSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKVxuICAgICAgICAgICAgICAgIDogKChhc3NldHNDb250ZXh0LmFuaW1hdGlvbkdyb3Vwc1tpbmRleF0gYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbCk7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQXNzZXRUeXBlLk1lc2g6XG4gICAgICAgICAgICByZXR1cm4gdXNlSW5kZXhBc1VuaXF1ZUlkXG4gICAgICAgICAgICAgICAgPyAoKGFzc2V0c0NvbnRleHQubWVzaGVzLmZpbmQoKGEpID0+IGEudW5pcXVlSWQgPT09IGluZGV4KSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKVxuICAgICAgICAgICAgICAgIDogKChhc3NldHNDb250ZXh0Lm1lc2hlc1tpbmRleF0gYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbCk7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQXNzZXRUeXBlLk1hdGVyaWFsOlxuICAgICAgICAgICAgcmV0dXJuIHVzZUluZGV4QXNVbmlxdWVJZFxuICAgICAgICAgICAgICAgID8gKChhc3NldHNDb250ZXh0Lm1hdGVyaWFscy5maW5kKChhKSA9PiBhLnVuaXF1ZUlkID09PSBpbmRleCkgYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbClcbiAgICAgICAgICAgICAgICA6ICgoYXNzZXRzQ29udGV4dC5tYXRlcmlhbHNbaW5kZXhdIGFzIEFzc2V0VHlwZTx0eXBlb2YgdHlwZT4pID8/IG51bGwpO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEFzc2V0VHlwZS5DYW1lcmE6XG4gICAgICAgICAgICByZXR1cm4gdXNlSW5kZXhBc1VuaXF1ZUlkXG4gICAgICAgICAgICAgICAgPyAoKGFzc2V0c0NvbnRleHQuY2FtZXJhcy5maW5kKChhKSA9PiBhLnVuaXF1ZUlkID09PSBpbmRleCkgYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbClcbiAgICAgICAgICAgICAgICA6ICgoYXNzZXRzQ29udGV4dC5jYW1lcmFzW2luZGV4XSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKTtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhBc3NldFR5cGUuTGlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gdXNlSW5kZXhBc1VuaXF1ZUlkXG4gICAgICAgICAgICAgICAgPyAoKGFzc2V0c0NvbnRleHQubGlnaHRzLmZpbmQoKGEpID0+IGEudW5pcXVlSWQgPT09IGluZGV4KSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKVxuICAgICAgICAgICAgICAgIDogKChhc3NldHNDb250ZXh0LmxpZ2h0c1tpbmRleF0gYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB9IGZyb20gXCIuL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XHJcblxyXG4vKipcclxuICogQW4gYXN5bmMgZXhlY3V0aW9uIGJsb2NrIGNhbiBzdGFydCB0YXNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXN5bmNocm9ub3VzbHkuXHJcbiAqIEl0IHNob3VsZCBhbHNvIGJlIHJlc3BvbnNpYmxlIGZvciBjbGVhcmluZyBpdCBpbiBfY2FuY2VsUGVuZGluZ1Rhc2tzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgY29ubmVjdGlvbjogVGhlIHNpZ25hbCB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBhc3luY2hyb25vdXMgZXhlY3V0aW9uIG9mIHRoaXMgYmxvY2sgaXMgZG9uZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRvbmU6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcblxyXG4gICAgcHJvdGVjdGVkIF9ldmVudHNTaWduYWxPdXRwdXRzOiB7IFtldmVudE5hbWU6IHN0cmluZ106IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24sIGV2ZW50cz86IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLmRvbmUgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcImRvbmVcIik7XHJcbiAgICAgICAgaWYgKGV2ZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1NpZ25hbE91dHB1dHNbZXZlbnROYW1lXSA9IHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KGV2ZW50TmFtZSArIFwiRXZlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgb3ZlcnJpZGRlbiB0byBzdGFydCBhbnlcclxuICAgICAqIHBlbmRpbmcgdGFza3MgdGhpcyBub2RlIG1pZ2h0IGhhdmUsIHN1Y2ggYXNcclxuICAgICAqIHRpbWVvdXRzIGFuZCBwbGF5aW5nIGFuaW1hdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX3ByZXBhcmVQZW5kaW5nVGFza3MoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIG92ZXJyaWRkZW4gdG8gZXhlY3V0ZSBhbnlcclxuICAgICAqIGxvZ2ljIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIG9uIGV2ZXJ5IGZyYW1lXHJcbiAgICAgKiB3aGlsZSB0aGUgYXN5bmMgdGFzayBpcyBwZW5kaW5nLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgaW4gd2hpY2ggaXQgaXMgcnVubmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2V4ZWN1dGVPblRpY2soX2NvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc3RhcnRQZW5kaW5nVGFza3MoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xyXG4gICAgICAgIGlmIChjb250ZXh0Ll9nZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcIl9pbml0aWFsaXplZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FuY2VsUGVuZGluZ1Rhc2tzKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEFmdGVyQ2FuY2VsZWQoY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcmVwYXJlUGVuZGluZ1Rhc2tzKGNvbnRleHQpO1xyXG4gICAgICAgIGNvbnRleHQuX2FkZFBlbmRpbmdCbG9jayh0aGlzKTtcclxuICAgICAgICB0aGlzLm91dC5fYWN0aXZhdGVTaWduYWwoY29udGV4dCk7XHJcbiAgICAgICAgY29udGV4dC5fc2V0RXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJfaW5pdGlhbGl6ZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9yZXNldEFmdGVyQ2FuY2VsZWQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnRleHQuX2RlbGV0ZUV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiX2luaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuX3JlbW92ZVBlbmRpbmdCbG9jayh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgX2NhbmNlbFBlbmRpbmdUYXNrcyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgeyBSYW5kb21HVUlEIH0gZnJvbSBcIi4uL01pc2MvZ3VpZFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgUmljaFR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrLCBJT2JqZWN0QWNjZXNzb3IgfSBmcm9tIFwiLi90eXBlRGVmaW5pdGlvbnNcIjtcclxuaW1wb3J0IHsgZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgSVBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCIuLi9PYmplY3RNb2RlbC9vYmplY3RNb2RlbEludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhBY3Rpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhMb2dnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBwYXJzaW5nIGEgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhCbG9ja1BhcnNlT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSB2YWx1ZSBmcm9tIGEgc2VyaWFsaXphdGlvbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgc2VyaWFsaXphdGlvbiBvYmplY3Qgd2hlcmUgdGhlIHByb3BlcnR5IGlzIGxvY2F0ZWRcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhhdCB0aGUgYmxvY2sgaXMgYmVpbmcgcGFyc2VkIGluXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHZhbHVlUGFyc2VGdW5jdGlvbj86IChrZXk6IHN0cmluZywgc2VyaWFsaXphdGlvbk9iamVjdDogYW55LCBhc3NldHNDb250YWluZXI6IElBc3NldENvbnRhaW5lciwgc2NlbmU6IFNjZW5lKSA9PiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldHMgY29udGFpbmVyIHRvIHVzZSB3aGVuIGxvYWRpbmcgYXNzZXRzLlxyXG4gICAgICovXHJcbiAgICBhc3NldHNDb250YWluZXI/OiBJQXNzZXRDb250YWluZXI7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzY2VuZSB0aGF0IHRoZSBibG9jayBpcyBiZWluZyBwYXJzZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHNjZW5lOiBTY2VuZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhdGggY29udmVydGVyIHRvIHVzZSB0byBjb252ZXJ0IHRoZSBwYXRoIHRvIGFuIG9iamVjdCBhY2Nlc3Nvci5cclxuICAgICAqL1xyXG4gICAgcGF0aENvbnZlcnRlcj86IElQYXRoVG9PYmplY3RDb252ZXJ0ZXI8SU9iamVjdEFjY2Vzc29yPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGEgYmxvY2suXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBbZXh0cmFQcm9wZXJ0eUtleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQSBibG9jayBpbiBhIGZsb3cgZ3JhcGguIFRoZSBtb3N0IGJhc2ljIGZvcm1cclxuICogb2YgYSBibG9jayBoYXMgaW5wdXRzIGFuZCBvdXRwdXRzIHRoYXQgY29udGFpblxyXG4gKiBkYXRhLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaEJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogQSByYW5kb21seSBnZW5lcmF0ZWQgR1VJRCBmb3IgZWFjaCBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVuaXF1ZUlkID0gUmFuZG9tR1VJRCgpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkYXRhIGlucHV0cyBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRhSW5wdXRzOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+W107XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkYXRhIG91dHB1dHMgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGF0YU91dHB1dHM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT5bXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGFkYXRhIHRoYXQgY2FuIGJlIHVzZWQgYnkgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWV0YWRhdGE6IGFueTtcclxuXHJcbiAgICAvKiogQ29uc3RydWN0b3IgaXMgcHJvdGVjdGVkIHNvIG9ubHkgc3ViY2xhc3NlcyBjYW4gYmUgaW5zdGFudGlhdGVkXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgYmxvY2tcclxuICAgICAqIEBpbnRlcm5hbCAtIGRvIG5vdCB1c2UgZGlyZWN0bHkuIEV4dGVuZCB0aGlzIGNsYXNzIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbmZpZz8ubmFtZSA/PyB0aGlzLmdldENsYXNzTmFtZSgpO1xyXG4gICAgICAgIHRoaXMuZGF0YUlucHV0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0YU91dHB1dHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgYmxvY2sgbmVlZHMgdG8gdXBkYXRlIGl0cyBvdXRwdXQgZmxvd3MuXHJcbiAgICAgKiBAcGFyYW0gX2NvbnRleHQgdGhlIGNvbnRleHQgaW4gd2hpY2ggaXQgaXMgcnVubmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3VwZGF0ZU91dHB1dHMoX2NvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICAvLyBlbXB0eSBieSBkZWZhdWx0LCBvdmVycmlkZGVuIGluIGRhdGEgYmxvY2tzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBkYXRhIGlucHV0IG9uIHRoZSBibG9jay5cclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxyXG4gICAgICogQHBhcmFtIHJpY2hUeXBlIHRoZSB0eXBlIG9mIHRoZSBpbnB1dFxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBvcHRpb25hbCBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnB1dC4gSWYgbm90IHNldCwgdGhlIHJpY2ggdHlwZSdzIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkLlxyXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgY29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJEYXRhSW5wdXQ8VD4obmFtZTogc3RyaW5nLCByaWNoVHlwZTogUmljaFR5cGU8VD4sIGRlZmF1bHRWYWx1ZT86IFQpOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24obmFtZSwgRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUuSW5wdXQsIHRoaXMsIHJpY2hUeXBlLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZGF0YUlucHV0cy5wdXNoKGlucHV0KTtcclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBkYXRhIG91dHB1dCBvbiB0aGUgYmxvY2suXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgaW5wdXRcclxuICAgICAqIEBwYXJhbSByaWNoVHlwZSB0aGUgdHlwZSBvZiB0aGUgaW5wdXRcclxuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgb3B0aW9uYWwgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgaW5wdXQuIElmIG5vdCBzZXQsIHRoZSByaWNoIHR5cGUncyBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZC5cclxuICAgICAqIEByZXR1cm5zIHRoZSBjcmVhdGVkIGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyRGF0YU91dHB1dDxUPihuYW1lOiBzdHJpbmcsIHJpY2hUeXBlOiBSaWNoVHlwZTxUPiwgZGVmYXVsdFZhbHVlPzogVCk6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+IHtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBuZXcgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24obmFtZSwgRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUuT3V0cHV0LCB0aGlzLCByaWNoVHlwZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB0aGlzLmRhdGFPdXRwdXRzLnB1c2gob3V0cHV0KTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIG5hbWUgb2YgYSBkYXRhIGlucHV0LCByZXR1cm5zIHRoZSBjb25uZWN0aW9uIGlmIGl0IGV4aXN0c1xyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGlucHV0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY29ubmVjdGlvbiBpZiBpdCBleGlzdHMsIHVuZGVmaW5lZCBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldERhdGFJbnB1dChuYW1lOiBzdHJpbmcpOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhSW5wdXRzLmZpbmQoKGkpID0+IGkubmFtZSA9PT0gbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiB0aGUgbmFtZSBvZiBhIGRhdGEgb3V0cHV0LCByZXR1cm5zIHRoZSBjb25uZWN0aW9uIGlmIGl0IGV4aXN0c1xyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIG91dHB1dFxyXG4gICAgICogQHJldHVybnMgdGhlIGNvbm5lY3Rpb24gaWYgaXQgZXhpc3RzLCB1bmRlZmluZWQgb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXREYXRhT3V0cHV0KG5hbWU6IHN0cmluZyk6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT4gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFPdXRwdXRzLmZpbmQoKGkpID0+IGkubmFtZSA9PT0gbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgYmxvY2tcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gc2VyaWFsaXplIHRvXHJcbiAgICAgKiBAcGFyYW0gX3ZhbHVlU2VyaWFsaXplRnVuY3Rpb24gYSBmdW5jdGlvbiB0aGF0IHNlcmlhbGl6ZXMgYSBzcGVjaWZpYyB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9LCBfdmFsdWVTZXJpYWxpemVGdW5jdGlvbjogKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpID0+IGFueSA9IGRlZmF1bHRWYWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbikge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudW5pcXVlSWQgPSB0aGlzLnVuaXF1ZUlkO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29uZmlnID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgX3ZhbHVlU2VyaWFsaXplRnVuY3Rpb24oa2V5LCBjb25maWdba2V5XSwgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YUlucHV0cyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YU91dHB1dHMgPSBbXTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLmRhdGFJbnB1dHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZElucHV0OiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgaW5wdXQuc2VyaWFsaXplKHNlcmlhbGl6ZWRJbnB1dCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YUlucHV0cy5wdXNoKHNlcmlhbGl6ZWRJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgb3V0cHV0IG9mIHRoaXMuZGF0YU91dHB1dHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZE91dHB1dDogYW55ID0ge307XHJcbiAgICAgICAgICAgIG91dHB1dC5zZXJpYWxpemUoc2VyaWFsaXplZE91dHB1dCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YU91dHB1dHMucHVzaChzZXJpYWxpemVkT3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlcmlhbGl6ZXMgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIF9zZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgZnJvbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVzZXJpYWxpemUoX3NlcmlhbGl6YXRpb25PYmplY3Q6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2spIHtcclxuICAgICAgICAvLyBuby1vcCBieSBkZWZhdWx0XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9sb2coY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24sIHBheWxvYWQ/OiBhbnkpIHtcclxuICAgICAgICBjb250ZXh0LmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgcGF5bG9hZCxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogdGhpcy51bmlxdWVJZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGNsYXNzIG5hbWUgb2YgdGhpcyBibG9ja1xyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJGbG93R3JhcGhCbG9ja1wiO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJhbmRvbUdVSUQgfSBmcm9tIFwiLi4vTWlzYy9ndWlkXCI7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgYSBjb25uZWN0aW9uIHBvaW50IC0gaW5wdXQgb3Igb3V0cHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUge1xyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcmZhY2UgZm9yIGEgY29ubmVjdGFibGUgcG9pbnQgaW4gdGhlIGZsb3cgZ3JhcGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25uZWN0YWJsZSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgdW5pcXVlbHkgaWRlbnRpZnlpbmcgc3RyaW5nIGZvciB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgdW5pcXVlSWQ6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgdGhlIHBvaW50cyB0aGF0IHRoaXMgcG9pbnQgaXMgY29ubmVjdGVkIHRvLlxyXG4gICAgICovXHJcbiAgICBfY29ubmVjdGVkUG9pbnQ6IEFycmF5PElDb25uZWN0YWJsZT47XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaWYgdGhlIGNvbm5lY3Rpb24gY2FuIG9ubHkgYmUgY29ubmVjdGVkIHRvIG9uZSBvdGhlciBwb2ludC5cclxuICAgICAqL1xyXG4gICAgX2lzU2luZ3VsYXJDb25uZWN0aW9uKCk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIF9jb25uZWN0aW9uVHlwZTogRmxvd0dyYXBoQ29ubmVjdGlvblR5cGU7XHJcbiAgICAvKipcclxuICAgICAqIENvbm5lY3QgdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50LlxyXG4gICAgICogQHBhcmFtIHBvaW50IHRoZSBwb2ludCB0byBjb25uZWN0IHRvLlxyXG4gICAgICovXHJcbiAgICBjb25uZWN0VG8ocG9pbnQ6IElDb25uZWN0YWJsZSk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBjb25uZWN0aW9uIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvbm5lY3Rpb248QmxvY2tULCBDb25uZWN0ZWRUb1QgZXh0ZW5kcyBJQ29ubmVjdGFibGU+IGltcGxlbWVudHMgSUNvbm5lY3RhYmxlIHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfY29ubmVjdGVkUG9pbnQ6IEFycmF5PENvbm5lY3RlZFRvVD4gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogQSB1bmlxdWVseSBpZGVudGlmeWluZyBzdHJpbmcgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdW5pcXVlSWQgPSBSYW5kb21HVUlEKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29ubmVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2Nvbm5lY3Rpb25UeXBlOiBGbG93R3JhcGhDb25uZWN0aW9uVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgZm9yIHBhcnNpbmcgY29ubmVjdGlvbnMuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgLy8gZGlzYWJsZSB3YXJuaW5nIGFzIHRoaXMgaXMgdXNlZCBmb3IgcGFyc2luZ1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgcHVibGljIGNvbm5lY3RlZFBvaW50SWRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgX2Nvbm5lY3Rpb25UeXBlOiBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSxcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi8gcHVibGljIF9vd25lckJsb2NrOiBCbG9ja1RcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblR5cGUgPSBfY29ubmVjdGlvblR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25UeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogT3ZlcnJpZGUgdGhpcyB0byBpbmRpY2F0ZSBpZiBhIHBvaW50IGNhbiBjb25uZWN0IHRvIG1vcmUgdGhhbiBvbmUgcG9pbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaXNTaW5ndWxhckNvbm5lY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGlmIGEgcG9pbnQgaXMgY29ubmVjdGVkIHRvIGFueSBvdGhlciBwb2ludC5cclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgcG9pbnQgaXMgY29ubmVjdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb25uZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZFBvaW50Lmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25uZWN0cyB0d28gY29ubmVjdGlvbnMgdG9nZXRoZXIuXHJcbiAgICAgKiBAcGFyYW0gcG9pbnQgdGhlIGNvbm5lY3Rpb24gdG8gY29ubmVjdCB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbm5lY3RUbyhwb2ludDogQ29ubmVjdGVkVG9UKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25UeXBlID09PSBwb2ludC5fY29ubmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29ubmVjdCB0d28gcG9pbnRzIG9mIHR5cGUgJHt0aGlzLmNvbm5lY3Rpb25UeXBlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMuX2lzU2luZ3VsYXJDb25uZWN0aW9uKCkgJiYgdGhpcy5fY29ubmVjdGVkUG9pbnQubGVuZ3RoID4gMCkgfHwgKHBvaW50Ll9pc1Npbmd1bGFyQ29ubmVjdGlvbigpICYmIHBvaW50Ll9jb25uZWN0ZWRQb2ludC5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYXggbnVtYmVyIG9mIGNvbm5lY3Rpb25zIGZvciBwb2ludCByZWFjaGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0ZWRQb2ludC5wdXNoKHBvaW50KTtcclxuICAgICAgICBwb2ludC5fY29ubmVjdGVkUG9pbnQucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3RzIHR3byBjb25uZWN0aW9ucy5cclxuICAgICAqIEBwYXJhbSBwb2ludCB0aGUgY29ubmVjdGlvbiB0byBkaXNjb25uZWN0IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gcmVtb3ZlRnJvbUxvY2FsIGlmIHRydWUsIHRoZSBjb25uZWN0aW9uIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBsb2NhbCBjb25uZWN0aW9uIGxpc3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNjb25uZWN0RnJvbShwb2ludDogQ29ubmVjdGVkVG9ULCByZW1vdmVGcm9tTG9jYWwgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhMb2NhbCA9IHRoaXMuX2Nvbm5lY3RlZFBvaW50LmluZGV4T2YocG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4Q29ubmVjdGVkID0gcG9pbnQuX2Nvbm5lY3RlZFBvaW50LmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4TG9jYWwgPT09IC0xIHx8IGluZGV4Q29ubmVjdGVkID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZW1vdmVGcm9tTG9jYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkUG9pbnQuc3BsaWNlKGluZGV4TG9jYWwsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb2ludC5fY29ubmVjdGVkUG9pbnQuc3BsaWNlKGluZGV4Q29ubmVjdGVkLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3RzIGFsbCBjb25uZWN0ZWQgcG9pbnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzY29ubmVjdEZyb21BbGwoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLl9jb25uZWN0ZWRQb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RGcm9tKHBvaW50LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZFBvaW50Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLl9jb25uZWN0ZWRQb2ludCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RGcm9tKHBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlcyB0aGUgY29ubmVjdGlvbiB0byBhIEpTT04gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBzZXJpYWxpemUgdG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge30pIHtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnVuaXF1ZUlkID0gdGhpcy51bmlxdWVJZDtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5fY29ubmVjdGlvblR5cGUgPSB0aGlzLl9jb25uZWN0aW9uVHlwZTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbm5lY3RlZFBvaW50SWRzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5fY29ubmVjdGVkUG9pbnQpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25uZWN0ZWRQb2ludElkcy5wdXNoKHBvaW50LnVuaXF1ZUlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiRkdDb25uZWN0aW9uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlcmlhbGl6ZSBmcm9tIGEgb2JqZWN0IGludG8gdGhpc1xyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBmcm9tLlxyXG4gICAgICovXHJcbiAgICBkZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gc2VyaWFsaXphdGlvbk9iamVjdC51bmlxdWVJZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBzZXJpYWxpemF0aW9uT2JqZWN0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblR5cGUgPSBzZXJpYWxpemF0aW9uT2JqZWN0Ll9jb25uZWN0aW9uVHlwZTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZFBvaW50SWRzID0gc2VyaWFsaXphdGlvbk9iamVjdC5jb25uZWN0ZWRQb2ludElkcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiLi4vTWlzYy9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJhbmRvbUdVSUQgfSBmcm9tIFwiLi4vTWlzYy9ndWlkXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoIH0gZnJvbSBcIi4vZmxvd0dyYXBoXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRWYWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3NlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb29yZGluYXRvciB9IGZyb20gXCIuL2Zsb3dHcmFwaENvb3JkaW5hdG9yXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRUeXBlLCBGbG93R3JhcGhBc3NldFR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhBc3NldHNDb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldEZsb3dHcmFwaEFzc2V0V2l0aFR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhBc3NldHNDb250ZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhBY3Rpb24sIEZsb3dHcmFwaExvZ2dlciB9IGZyb20gXCIuL2Zsb3dHcmFwaExvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhPblRpY2tFdmVudFBheWxvYWQgfSBmcm9tIFwiLi9CbG9ja3MvRXZlbnQvZmxvd0dyYXBoU2NlbmVUaWNrRXZlbnRCbG9ja1wiO1xyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdGlvbiBwYXJhbWV0ZXJzIGZvciB0aGUgY29udGV4dC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaENvbnRleHRDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNjZW5lIHRoYXQgdGhlIGZsb3cgZ3JhcGggY29udGV4dCBiZWxvbmdzIHRvLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBzY2VuZTogU2NlbmU7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBldmVudCBjb29yZGluYXRvciB1c2VkIGJ5IHRoZSBmbG93IGdyYXBoIGNvbnRleHQuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGNvb3JkaW5hdG9yOiBGbG93R3JhcGhDb29yZGluYXRvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhc3NldHMgY29udGV4dCB1c2VkIGJ5IHRoZSBmbG93IGdyYXBoIGNvbnRleHQuXHJcbiAgICAgKiBJZiBub25lIGlzIHByb3ZpZGVkLCBhIGRlZmF1bHQgb25lIHdpbGwgYmUgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYXNzZXRzQ29udGV4dD86IElBc3NldENvbnRhaW5lcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHBhcnNpbmcgYSBjb250ZXh0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoQ29udGV4dFBhcnNlT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSB2YWx1ZSBmcm9tIGEgc2VyaWFsaXphdGlvbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgb2YgdGhlIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIGN1cnJlbnQgc2NlbmVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHZhbHVlUGFyc2VGdW5jdGlvbj86IChrZXk6IHN0cmluZywgc2VyaWFsaXphdGlvbk9iamVjdDogYW55LCBhc3NldHNDb250YWluZXI6IElBc3NldENvbnRhaW5lciwgc2NlbmU6IFNjZW5lKSA9PiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBncmFwaCB0aGF0IHRoZSBjb250ZXh0IGlzIGJlaW5nIHBhcnNlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZ3JhcGg6IEZsb3dHcmFwaDtcclxufVxyXG4vKipcclxuICogVGhlIGNvbnRleHQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBhbmQgZXhlY3V0aW9uIG9mIHRoZSBmbG93IGdyYXBoLlxyXG4gKiBJdCBjb250YWlucyBib3RoIHVzZXItZGVmaW5lZCB2YXJpYWJsZXMsIHdoaWNoIGFyZSBkZXJpdmVkIGZyb21cclxuICogYSBtb3JlIGdlbmVyYWwgdmFyaWFibGUgZGVmaW5pdGlvbiwgYW5kIGV4ZWN1dGlvbiB2YXJpYWJsZXMgdGhhdFxyXG4gKiBhcmUgc2V0IGJ5IHRoZSBibG9ja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29udGV4dCB7XHJcbiAgICAvKipcclxuICAgICAqIEEgcmFuZG9tbHkgZ2VuZXJhdGVkIEdVSUQgZm9yIGVhY2ggY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgdW5pcXVlSWQgPSBSYW5kb21HVUlEKCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZXNlIGFyZSB0aGUgdmFyaWFibGVzIGRlZmluZWQgYnkgYSB1c2VyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF91c2VyVmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIFRoZXNlIGFyZSB0aGUgdmFyaWFibGVzIHNldCBieSB0aGUgYmxvY2tzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9leGVjdXRpb25WYXJpYWJsZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgY29udGV4dC1zcGVjaWZpYyBnbG9iYWwgdmFyaWFibGVzLCBhdmFpbGFibGUgdG8gYWxsIGJsb2NrcyBpbiB0aGUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2xvYmFsQ29udGV4dFZhcmlhYmxlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGVzZSBhcmUgdGhlIHZhbHVlcyBmb3IgdGhlIGRhdGEgY29ubmVjdGlvbiBwb2ludHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfY29ubmVjdGlvblZhbHVlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGVzZSBhcmUgdGhlIHZhcmlhYmxlcyBzZXQgYnkgdGhlIGdyYXBoLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWd1cmF0aW9uOiBJRmxvd0dyYXBoQ29udGV4dENvbmZpZ3VyYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIFRoZXNlIGFyZSBibG9ja3MgdGhhdCBoYXZlIGN1cnJlbnRseSBwZW5kaW5nIHRhc2tzL2xpc3RlbmVycyB0aGF0IG5lZWQgdG8gYmUgY2xlYW5lZCB1cC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcGVuZGluZ0Jsb2NrczogRmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9ja1tdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIEEgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIElEIGZvciBlYWNoIGV4ZWN1dGlvbi5cclxuICAgICAqIEluY3JlbWVudGVkIGZvciBldmVyeSBibG9jayBleGVjdXRlZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZXhlY3V0aW9uSWQgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gYSBub2RlIGlzIGV4ZWN1dGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Ob2RlRXhlY3V0ZWRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPEZsb3dHcmFwaEJsb2NrPiA9IG5ldyBPYnNlcnZhYmxlPEZsb3dHcmFwaEJsb2NrPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0cyBjb250ZXh0IHVzZWQgYnkgdGhlIGZsb3cgZ3JhcGggY29udGV4dC5cclxuICAgICAqIE5vdGUgdGhhdCBpdCBjYW4gYmUgc2hhcmVkIGJldHdlZW4gZmxvdyBncmFwaCBjb250ZXh0cy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzc2V0c0NvbnRleHQ6IElBc3NldENvbnRhaW5lcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdG8gdHJlYXQgZGF0YSBhcyByaWdodC1oYW5kZWQuXHJcbiAgICAgKiBUaGlzIGlzIHVzZWQgd2hlbiBzZXJpYWxpemluZyBkYXRhIGZyb20gYSByaWdodC1oYW5kZWQgc3lzdGVtLCB3aGlsZSBydW5uaW5nIHRoZSBjb250ZXh0IGluIGEgbGVmdC1oYW5kZWQgc3lzdGVtLCBmb3IgZXhhbXBsZSBpbiBnbFRGIHBhcnNpbmcuXHJcbiAgICAgKiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJlYXREYXRhQXNSaWdodEhhbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2VuYWJsZUxvZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsb2dnZXIgdXNlZCBieSB0aGUgY29udGV4dCB0byBsb2cgYWN0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvZ2dlcjogTnVsbGFibGU8Rmxvd0dyYXBoTG9nZ2VyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSBsb2dnaW5nIG9uIHRoaXMgY29udGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVuYWJsZUxvZ2dpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZUxvZ2dpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBlbmFibGVMb2dnaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VuYWJsZUxvZ2dpbmcgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlTG9nZ2luZyA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IEZsb3dHcmFwaExvZ2dlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dUb0NvbnNvbGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBJRmxvd0dyYXBoQ29udGV4dENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gcGFyYW1zO1xyXG4gICAgICAgIHRoaXMuYXNzZXRzQ29udGV4dCA9IHBhcmFtcy5hc3NldHNDb250ZXh0ID8/IHBhcmFtcy5zY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGEgdXNlci1kZWZpbmVkIHZhcmlhYmxlIGlzIGRlZmluZWQuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc1ZhcmlhYmxlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuX3VzZXJWYXJpYWJsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSB1c2VyLWRlZmluZWQgdmFyaWFibGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWYXJpYWJsZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl91c2VyVmFyaWFibGVzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5sb2dnZXI/LmFkZExvZ0l0ZW0oe1xyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbi5Db250ZXh0VmFyaWFibGVTZXQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBhc3NldHMgZnJvbSB0aGUgYXNzZXRzIGNvbnRleHQgYmFzZWQgb24gaXRzIHR5cGUgYW5kIGluZGV4IGluIHRoZSBhcnJheVxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBhc3NldFxyXG4gICAgICogQHJldHVybnMgVGhlIGFzc2V0IG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBc3NldDxUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlPih0eXBlOiBULCBpbmRleDogbnVtYmVyKTogTnVsbGFibGU8QXNzZXRUeXBlPFQ+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdldEZsb3dHcmFwaEFzc2V0V2l0aFR5cGUodGhpcy5hc3NldHNDb250ZXh0LCB0eXBlLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSB1c2VyLWRlZmluZWQgdmFyaWFibGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFZhcmlhYmxlKG5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXI/LmFkZExvZ0l0ZW0oe1xyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbi5Db250ZXh0VmFyaWFibGVHZXQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fdXNlclZhcmlhYmxlc1tuYW1lXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclZhcmlhYmxlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYWxsIHVzZXIgdmFyaWFibGVzIG1hcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHVzZXJWYXJpYWJsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJWYXJpYWJsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNjZW5lIHRoYXQgdGhlIGNvbnRleHQgYmVsb25ncyB0by5cclxuICAgICAqIEByZXR1cm5zIHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VW5pcXVlSWRQcmVmaXhlZE5hbWUob2JqOiBGbG93R3JhcGhCbG9jaywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7b2JqLnVuaXF1ZUlkfV8ke25hbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZGVmYXVsdCB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIHZhcmlhYmxlIGlzIG5vdCBkZWZpbmVkXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgdmFyaWFibGUgdmFsdWUgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHZhcmlhYmxlIGlzIG5vdCBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlPFQ+KG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKTogVCB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXI/LmFkZExvZ0l0ZW0oe1xyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbi5HbG9iYWxWYXJpYWJsZUdldCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlVmFsdWU6IHRoaXMuX2dsb2JhbENvbnRleHRWYXJpYWJsZXNbbmFtZV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0dsb2JhbENvbnRleHRWYXJpYWJsZShuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2xvYmFsQ29udGV4dFZhcmlhYmxlc1tuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIGdsb2JhbCBjb250ZXh0IHZhcmlhYmxlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zZXRHbG9iYWxDb250ZXh0VmFyaWFibGU8VD4obmFtZTogc3RyaW5nLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyPy5hZGRMb2dJdGVtKHtcclxuICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogdGhpcy51bmlxdWVJZCxcclxuICAgICAgICAgICAgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24uR2xvYmFsVmFyaWFibGVTZXQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgbmFtZSwgdmFsdWUgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9nbG9iYWxDb250ZXh0VmFyaWFibGVzW25hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYSBnbG9iYWwgY29udGV4dCB2YXJpYWJsZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9kZWxldGVHbG9iYWxDb250ZXh0VmFyaWFibGUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXI/LmFkZExvZ0l0ZW0oe1xyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbi5HbG9iYWxWYXJpYWJsZURlbGV0ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBuYW1lIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2dsb2JhbENvbnRleHRWYXJpYWJsZXNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIGdsb2JhbCBjb250ZXh0IHZhcmlhYmxlIGlzIGRlZmluZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfaGFzR2xvYmFsQ29udGV4dFZhcmlhYmxlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMuX2dsb2JhbENvbnRleHRWYXJpYWJsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYW4gaW50ZXJuYWwgZXhlY3V0aW9uIHZhcmlhYmxlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zZXRFeGVjdXRpb25WYXJpYWJsZShibG9jazogRmxvd0dyYXBoQmxvY2ssIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGlvblZhcmlhYmxlc1t0aGlzLl9nZXRVbmlxdWVJZFByZWZpeGVkTmFtZShibG9jaywgbmFtZSldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYW4gaW50ZXJuYWwgZXhlY3V0aW9uIHZhcmlhYmxlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dldEV4ZWN1dGlvblZhcmlhYmxlPFQ+KGJsb2NrOiBGbG93R3JhcGhCbG9jaywgbmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faGFzRXhlY3V0aW9uVmFyaWFibGUoYmxvY2ssIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25WYXJpYWJsZXNbdGhpcy5fZ2V0VW5pcXVlSWRQcmVmaXhlZE5hbWUoYmxvY2ssIG5hbWUpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhbiBpbnRlcm5hbCBleGVjdXRpb24gdmFyaWFibGVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2RlbGV0ZUV4ZWN1dGlvblZhcmlhYmxlKGJsb2NrOiBGbG93R3JhcGhCbG9jaywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2V4ZWN1dGlvblZhcmlhYmxlc1t0aGlzLl9nZXRVbmlxdWVJZFByZWZpeGVkTmFtZShibG9jaywgbmFtZSldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gaW50ZXJuYWwgZXhlY3V0aW9uIHZhcmlhYmxlIGlzIGRlZmluZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9oYXNFeGVjdXRpb25WYXJpYWJsZShibG9jazogRmxvd0dyYXBoQmxvY2ssIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRVbmlxdWVJZFByZWZpeGVkTmFtZShibG9jaywgbmFtZSkgaW4gdGhpcy5fZXhlY3V0aW9uVmFyaWFibGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSBjb25uZWN0aW9uIHZhbHVlIGlzIGRlZmluZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGNvbm5lY3Rpb25Qb2ludFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9oYXNDb25uZWN0aW9uVmFsdWUoY29ubmVjdGlvblBvaW50OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+KSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25Qb2ludC51bmlxdWVJZCBpbiB0aGlzLl9jb25uZWN0aW9uVmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgY29ubmVjdGlvbiB2YWx1ZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gY29ubmVjdGlvblBvaW50XHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zZXRDb25uZWN0aW9uVmFsdWU8VD4oY29ubmVjdGlvblBvaW50OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPiwgdmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uVmFsdWVzW2Nvbm5lY3Rpb25Qb2ludC51bmlxdWVJZF0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLlNldENvbm5lY3Rpb25WYWx1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBvaW50SWQ6IGNvbm5lY3Rpb25Qb2ludC51bmlxdWVJZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgY29ubmVjdGlvbiB2YWx1ZSBieSBrZXlcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGtleSB0aGUga2V5IG9mIHRoZSBjb25uZWN0aW9uIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2V0Q29ubmVjdGlvblZhbHVlQnlLZXk8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvblZhbHVlc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBjb25uZWN0aW9uIHZhbHVlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBjb25uZWN0aW9uUG9pbnRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ2V0Q29ubmVjdGlvblZhbHVlPFQ+KGNvbm5lY3Rpb25Qb2ludDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VD4pOiBUIHtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLkdldENvbm5lY3Rpb25WYWx1ZSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblBvaW50SWQ6IGNvbm5lY3Rpb25Qb2ludC51bmlxdWVJZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9jb25uZWN0aW9uVmFsdWVzW2Nvbm5lY3Rpb25Qb2ludC51bmlxdWVJZF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25WYWx1ZXNbY29ubmVjdGlvblBvaW50LnVuaXF1ZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uZmlndXJhdGlvblxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBibG9ja3MgaW4gdGhpcyBjb250ZXh0XHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBwZW5kaW5nIGJsb2Nrc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc1BlbmRpbmdCbG9ja3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlbmRpbmdCbG9ja3MubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGJsb2NrIHRvIHRoZSBsaXN0IG9mIGJsb2NrcyB0aGF0IGhhdmUgcGVuZGluZyB0YXNrcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGJsb2NrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfYWRkUGVuZGluZ0Jsb2NrKGJsb2NrOiBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgYmxvY2sgaXMgYWxyZWFkeSBpbiB0aGUgYXJyYXlcclxuICAgICAgICBpZiAodGhpcy5fcGVuZGluZ0Jsb2Nrcy5pbmNsdWRlcyhibG9jaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wZW5kaW5nQmxvY2tzLnB1c2goYmxvY2spO1xyXG4gICAgICAgIC8vIHNvcnQgcGVuZGluZyBibG9ja3MgYnkgcHJpb3JpdHlcclxuICAgICAgICB0aGlzLl9wZW5kaW5nQmxvY2tzLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGJsb2NrIGZyb20gdGhlIGxpc3Qgb2YgYmxvY2tzIHRoYXQgaGF2ZSBwZW5kaW5nIHRhc2tzLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gYmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9yZW1vdmVQZW5kaW5nQmxvY2soYmxvY2s6IEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2spIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3BlbmRpbmdCbG9ja3MuaW5kZXhPZihibG9jayk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nQmxvY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYWxsIHBlbmRpbmcgYmxvY2tzLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfY2xlYXJQZW5kaW5nQmxvY2tzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5fcGVuZGluZ0Jsb2Nrcykge1xyXG4gICAgICAgICAgICBibG9jay5fY2FuY2VsUGVuZGluZ1Rhc2tzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wZW5kaW5nQmxvY2tzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEZ1bmN0aW9uIHRoYXQgbm90aWZpZXMgdGhlIG5vZGUgZXhlY3V0ZWQgb2JzZXJ2YWJsZVxyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9ub3RpZnlFeGVjdXRlTm9kZShub2RlOiBGbG93R3JhcGhCbG9jaykge1xyXG4gICAgICAgIHRoaXMub25Ob2RlRXhlY3V0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhub2RlKTtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbm9kZS5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IG5vZGUudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLkV4ZWN1dGVCbG9jayxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX25vdGlmeU9uVGljayhmcmFtZVBheWxvYWQ6IElGbG93R3JhcGhPblRpY2tFdmVudFBheWxvYWQpIHtcclxuICAgICAgICAvLyBzZXQgdGhlIHZhbHVlcyBhcyBnbG9iYWwgdmFyaWFibGVzXHJcbiAgICAgICAgdGhpcy5fc2V0R2xvYmFsQ29udGV4dFZhcmlhYmxlKFwidGltZVNpbmNlU3RhcnRcIiwgZnJhbWVQYXlsb2FkLnRpbWVTaW5jZVN0YXJ0KTtcclxuICAgICAgICB0aGlzLl9zZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJkZWx0YVRpbWVcIiwgZnJhbWVQYXlsb2FkLmRlbHRhVGltZSk7XHJcbiAgICAgICAgLy8gaXRlcmF0ZSB0aGUgcGVuZGluZyBibG9ja3MgYW5kIHJ1biBlYWNoIG9uZSdzIG9uRnJhbWUgZnVuY3Rpb25cclxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuX3BlbmRpbmdCbG9ja3MpIHtcclxuICAgICAgICAgICAgYmxvY2suX2V4ZWN1dGVPblRpY2s/Lih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9pbmNyZWFzZUV4ZWN1dGlvbklkKCkge1xyXG4gICAgICAgIHRoaXMuX2V4ZWN1dGlvbklkKys7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIElEIGZvciBlYWNoIGV4ZWN1dGlvbi5cclxuICAgICAqIEluY3JlbWVudGVkIGZvciBldmVyeSBibG9jayBleGVjdXRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBleGVjdXRpb25JZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIGEgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byB3cml0ZSB0aGUgdmFsdWVzIGluXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVTZXJpYWxpemF0aW9uRnVuY3Rpb24gYSBmdW5jdGlvbiB0byBzZXJpYWxpemUgY29tcGxleCB2YWx1ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fSwgdmFsdWVTZXJpYWxpemF0aW9uRnVuY3Rpb246IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc2VyaWFsaXphdGlvbk9iamVjdDogYW55KSA9PiB2b2lkID0gZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uKSB7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC51bmlxdWVJZCA9IHRoaXMudW5pcXVlSWQ7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5fdXNlclZhcmlhYmxlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3VzZXJWYXJpYWJsZXMpIHtcclxuICAgICAgICAgICAgdmFsdWVTZXJpYWxpemF0aW9uRnVuY3Rpb24oa2V5LCB0aGlzLl91c2VyVmFyaWFibGVzW2tleV0sIHNlcmlhbGl6YXRpb25PYmplY3QuX3VzZXJWYXJpYWJsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Ll9jb25uZWN0aW9uVmFsdWVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fY29ubmVjdGlvblZhbHVlcykge1xyXG4gICAgICAgICAgICB2YWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbihrZXksIHRoaXMuX2Nvbm5lY3Rpb25WYWx1ZXNba2V5XSwgc2VyaWFsaXphdGlvbk9iamVjdC5fY29ubmVjdGlvblZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlcmlhbGl6ZSBhc3NldHMgY29udGV4dCwgaWYgbm90IHNjZW5lXHJcbiAgICAgICAgaWYgKHRoaXMuYXNzZXRzQ29udGV4dCAhPT0gdGhpcy5nZXRTY2VuZSgpKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuX2Fzc2V0c0NvbnRleHQgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXNoZXM6IHRoaXMuYXNzZXRzQ29udGV4dC5tZXNoZXMubWFwKChtKSA9PiBtLmlkKSxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsczogdGhpcy5hc3NldHNDb250ZXh0Lm1hdGVyaWFscy5tYXAoKG0pID0+IG0uaWQpLFxyXG4gICAgICAgICAgICAgICAgdGV4dHVyZXM6IHRoaXMuYXNzZXRzQ29udGV4dC50ZXh0dXJlcy5tYXAoKG0pID0+IG0ubmFtZSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zOiB0aGlzLmFzc2V0c0NvbnRleHQuYW5pbWF0aW9ucy5tYXAoKG0pID0+IG0ubmFtZSksXHJcbiAgICAgICAgICAgICAgICBsaWdodHM6IHRoaXMuYXNzZXRzQ29udGV4dC5saWdodHMubWFwKChtKSA9PiBtLmlkKSxcclxuICAgICAgICAgICAgICAgIGNhbWVyYXM6IHRoaXMuYXNzZXRzQ29udGV4dC5jYW1lcmFzLm1hcCgobSkgPT4gbS5pZCksXHJcbiAgICAgICAgICAgICAgICBzb3VuZHM6IHRoaXMuYXNzZXRzQ29udGV4dC5zb3VuZHM/Lm1hcCgobSkgPT4gbS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIHNrZWxldG9uczogdGhpcy5hc3NldHNDb250ZXh0LnNrZWxldG9ucy5tYXAoKG0pID0+IG0uaWQpLFxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW1zOiB0aGlzLmFzc2V0c0NvbnRleHQucGFydGljbGVTeXN0ZW1zLm1hcCgobSkgPT4gbS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJpZXM6IHRoaXMuYXNzZXRzQ29udGV4dC5nZW9tZXRyaWVzLm1hcCgobSkgPT4gbS5pZCksXHJcbiAgICAgICAgICAgICAgICBtdWx0aU1hdGVyaWFsczogdGhpcy5hc3NldHNDb250ZXh0Lm11bHRpTWF0ZXJpYWxzLm1hcCgobSkgPT4gbS5pZCksXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogdGhpcy5hc3NldHNDb250ZXh0LnRyYW5zZm9ybU5vZGVzLm1hcCgobSkgPT4gbS5pZCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJGbG93R3JhcGhDb250ZXh0XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoIH0gZnJvbSBcIi4vZmxvd0dyYXBoXCI7XHJcbmltcG9ydCB0eXBlIHsgSVBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCIuLi9PYmplY3RNb2RlbC9vYmplY3RNb2RlbEludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJT2JqZWN0QWNjZXNzb3IgfSBmcm9tIFwiLi90eXBlRGVmaW5pdGlvbnNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQYXJhbWV0ZXJzIHVzZWQgdG8gY3JlYXRlIGEgZmxvdyBncmFwaCBlbmdpbmUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhDb29yZGluYXRvckNvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2NlbmUgdGhhdCB0aGUgZmxvdyBncmFwaCBlbmdpbmUgYmVsb25ncyB0by5cclxuICAgICAqL1xyXG4gICAgc2NlbmU6IFNjZW5lO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyYW1ldGVycyB1c2VkIHRvIHBhcnNlIGEgZmxvdyBncmFwaCBjb29yZGluYXRvci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaENvb3JkaW5hdG9yUGFyc2VPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHRvIHBhcnNlIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5LlxyXG4gICAgICogQHBhcmFtIGtleSB0aGUga2V5IG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIHNlcmlhbGl6YXRpb24gb2JqZWN0IHdoZXJlIHRoZSBwcm9wZXJ0eSBpcyBsb2NhdGVkXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoYXQgdGhlIGJsb2NrIGlzIGJlaW5nIHBhcnNlZCBpblxyXG4gICAgICovXHJcbiAgICB2YWx1ZVBhcnNlRnVuY3Rpb24/OiAoa2V5OiBzdHJpbmcsIHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSwgYXNzZXRzQ29udGFpbmVyOiBJQXNzZXRDb250YWluZXIsIHNjZW5lOiBTY2VuZSkgPT4gYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGF0aCBjb252ZXJ0ZXIgdG8gdXNlIHRvIGNvbnZlcnQgdGhlIHBhdGggdG8gYW4gb2JqZWN0IGFjY2Vzc29yLlxyXG4gICAgICovXHJcbiAgICBwYXRoQ29udmVydGVyOiBJUGF0aFRvT2JqZWN0Q29udmVydGVyPElPYmplY3RBY2Nlc3Nvcj47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzY2VuZSB0aGF0IHRoZSBmbG93IGdyYXBoIGNvb3JkaW5hdG9yIGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIHNjZW5lOiBTY2VuZTtcclxufVxyXG4vKipcclxuICogVGhpcyBjbGFzcyBob2xkcyBhbGwgb2YgdGhlIGV4aXN0aW5nIGZsb3cgZ3JhcGhzIGFuZCBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgbmV3IG9uZXMuXHJcbiAqIEl0IGFsc28gaGFuZGxlcyBzdGFydGluZy9zdG9wcGluZyBtdWx0aXBsZSBncmFwaHMgYW5kIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGVtIHRocm91Z2ggYW4gRXZlbnQgQ29vcmRpbmF0b3JcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBmbG93IGdyYXBoIHN5c3RlbS5cclxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNsYXNzIGlzIHN0aWxsIGluIGRldmVsb3BtZW50IGFuZCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb29yZGluYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBldmVudHMgcGVyIHR5cGUuXHJcbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gbGltaXQgdGhlIG51bWJlciBvZiBldmVudHMgdGhhdCBjYW4gYmUgY3JlYXRlZCBpbiBhIHNpbmdsZSBzY2VuZS5cclxuICAgICAqIFRoaXMgaXMgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNYXhFdmVudHNQZXJUeXBlOiBudW1iZXIgPSAzMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBleGVjdXRpb24gb2YgYSBzcGVjaWZpYyBldmVudCBpbiBhIHNpbmdsZSBmcmFtZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNYXhFdmVudFR5cGVFeGVjdXRpb25QZXJGcmFtZTogbnVtYmVyID0gMzA7XHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQSBsaXN0IG9mIGFsbCB0aGUgY29vcmRpbmF0b3JzIHBlciBzY2VuZS4gV2lsbCBiZSB1c2VkIGJ5IHRoZSBpbnNwZWN0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTY2VuZUNvb3JkaW5hdG9yczogTWFwPFNjZW5lLCBGbG93R3JhcGhDb29yZGluYXRvcltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gc2V0IHRvIHRydWUgKGRlZmF1bHQpIGN1c3RvbSBldmVudHMgd2lsbCBiZSBkaXNwYXRjaGVkIHN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGV2ZW50cyB3aWxsIGJlIGRpc3BhdGNoZWQgaW1tZWRpYXRlbHkgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50c1N5bmNocm9ub3VzbHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Zsb3dHcmFwaHM6IEZsb3dHcmFwaFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VzdG9tRXZlbnRzTWFwOiBNYXA8c3RyaW5nLCBPYnNlcnZhYmxlPGFueT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHByaXZhdGUgX2V2ZW50RXhlY3V0aW9uQ291bnRlcjogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBwcml2YXRlIF9kaXNwb3NlT2JzZXJ2ZXI6IE9ic2VydmVyPFNjZW5lPjtcclxuICAgIHByaXZhdGUgX29uQmVmb3JlUmVuZGVyT2JzZXJ2ZXI6IE9ic2VydmVyPFNjZW5lPjtcclxuICAgIHByaXZhdGUgX2V4ZWN1dGVPbk5leHRGcmFtZTogeyBpZDogc3RyaW5nOyBkYXRhPzogYW55OyB1bmlxdWVJZDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRVbmlxdWVJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbmZpZzogSUZsb3dHcmFwaENvb3JkaW5hdG9yQ29uZmlndXJhdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gV2hlbiB0aGUgc2NlbmUgaXMgZGlzcG9zZWQsIGRpc3Bvc2UgYWxsIGdyYXBocyBjdXJyZW50bHkgcnVubmluZyBvbiBpdC5cclxuICAgICAgICB0aGlzLl9kaXNwb3NlT2JzZXJ2ZXIgPSB0aGlzLmNvbmZpZy5zY2VuZS5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9vbkJlZm9yZVJlbmRlck9ic2VydmVyID0gdGhpcy5jb25maWcuc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBldmVudCBleGVjdXRpb24gY291bnRlciBhdCB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggZnJhbWUuXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50RXhlY3V0aW9uQ291bnRlci5jbGVhcigpO1xyXG4gICAgICAgICAgICAvLyBkdXBsaWNhdGUgdGhlIF9leGVjdXRlT25OZXh0RnJhbWUgYXJyYXkgdG8gYXZvaWQgbW9kaWZ5aW5nIGl0IHdoaWxlIGl0ZXJhdGluZyBvdmVyIGl0XHJcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGVPbk5leHRGcmFtZSA9IHRoaXMuX2V4ZWN1dGVPbk5leHRGcmFtZS5zbGljZSgwKTtcclxuICAgICAgICAgICAgaWYgKGV4ZWN1dGVPbk5leHRGcmFtZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50cyB0aGF0IHdlcmUgdHJpZ2dlcmVkIG9uIHRoZSBuZXh0IGZyYW1lLlxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBleGVjdXRlT25OZXh0RnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUN1c3RvbUV2ZW50KGV2ZW50LmlkLCBldmVudC5kYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBldmVudCBmcm9tIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZXhlY3V0ZU9uTmV4dEZyYW1lLmZpbmRJbmRleCgoZSkgPT4gZS51bmlxdWVJZCA9PT0gZXZlbnQudW5pcXVlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZU9uTmV4dEZyYW1lLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBpdHNlbGYgdG8gdGhlIFNjZW5lQ29vcmRpbmF0b3JzIGxpc3QgZm9yIHRoZSBJbnNwZWN0b3IuXHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0b3JzID0gRmxvd0dyYXBoQ29vcmRpbmF0b3IuU2NlbmVDb29yZGluYXRvcnMuZ2V0KHRoaXMuY29uZmlnLnNjZW5lKSA/PyBbXTtcclxuICAgICAgICBjb29yZGluYXRvcnMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgZmxvdyBncmFwaCBhbmQgYWRkcyBpdCB0byB0aGUgbGlzdCBvZiBleGlzdGluZyBmbG93IGdyYXBoc1xyXG4gICAgICogQHJldHVybnMgYSBuZXcgZmxvdyBncmFwaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlR3JhcGgoKTogRmxvd0dyYXBoIHtcclxuICAgICAgICBjb25zdCBncmFwaCA9IG5ldyBGbG93R3JhcGgoeyBzY2VuZTogdGhpcy5jb25maWcuc2NlbmUsIGNvb3JkaW5hdG9yOiB0aGlzIH0pO1xyXG4gICAgICAgIHRoaXMuX2Zsb3dHcmFwaHMucHVzaChncmFwaCk7XHJcbiAgICAgICAgcmV0dXJuIGdyYXBoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIGZsb3cgZ3JhcGggZnJvbSB0aGUgbGlzdCBvZiBleGlzdGluZyBmbG93IGdyYXBocyBhbmQgZGlzcG9zZXMgaXRcclxuICAgICAqIEBwYXJhbSBncmFwaCB0aGUgZ3JhcGggdG8gcmVtb3ZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmVHcmFwaChncmFwaDogRmxvd0dyYXBoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9mbG93R3JhcGhzLmluZGV4T2YoZ3JhcGgpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZ3JhcGguZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9mbG93R3JhcGhzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIGFsbCBncmFwaHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgZ3JhcGggb2YgdGhpcy5fZmxvd0dyYXBocykge1xyXG4gICAgICAgICAgICBncmFwaC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIGFsbCBncmFwaHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBncmFwaCBvZiB0aGlzLl9mbG93R3JhcGhzKSB7XHJcbiAgICAgICAgICAgIGdyYXBoLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZmxvd0dyYXBocy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VPYnNlcnZlcj8ucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5fb25CZWZvcmVSZW5kZXJPYnNlcnZlcj8ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBpdHNlbGYgZnJvbSB0aGUgU2NlbmVDb29yZGluYXRvcnMgbGlzdCBmb3IgdGhlIEluc3BlY3Rvci5cclxuICAgICAgICBjb25zdCBjb29yZGluYXRvcnMgPSBGbG93R3JhcGhDb29yZGluYXRvci5TY2VuZUNvb3JkaW5hdG9ycy5nZXQodGhpcy5jb25maWcuc2NlbmUpID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29vcmRpbmF0b3JzLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb29yZGluYXRvcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgY29vcmRpbmF0b3IgdG8gYSBKU09OIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gc2VyaWFsaXplIHRvXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVTZXJpYWxpemVGdW5jdGlvbiB0aGUgZnVuY3Rpb24gdG8gdXNlIHRvIHNlcmlhbGl6ZSB0aGUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIHZhbHVlU2VyaWFsaXplRnVuY3Rpb24/OiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuX2Zsb3dHcmFwaHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGdyYXBoIG9mIHRoaXMuX2Zsb3dHcmFwaHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZEdyYXBoID0ge307XHJcbiAgICAgICAgICAgIGdyYXBoLnNlcmlhbGl6ZShzZXJpYWxpemVkR3JhcGgsIHZhbHVlU2VyaWFsaXplRnVuY3Rpb24pO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Ll9mbG93R3JhcGhzLnB1c2goc2VyaWFsaXplZEdyYXBoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kaXNwYXRjaEV2ZW50c1N5bmNocm9ub3VzbHkgPSB0aGlzLmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGxpc3Qgb2YgZmxvdyBncmFwaHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBmbG93R3JhcGhzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mbG93R3JhcGhzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gdGhlIGV2ZW50IHdpdGggdGhlIGdpdmVuIGlkIGlzIGZpcmVkLlxyXG4gICAgICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgZXZlbnRcclxuICAgICAqIEByZXR1cm5zIHRoZSBvYnNlcnZhYmxlIGZvciB0aGUgZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEN1c3RvbUV2ZW50T2JzZXJ2YWJsZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBsZXQgb2JzZXJ2YWJsZSA9IHRoaXMuX2N1c3RvbUV2ZW50c01hcC5nZXQoaWQpO1xyXG4gICAgICAgIGlmICghb2JzZXJ2YWJsZSkge1xyXG4gICAgICAgICAgICAvLyByZWNlaXZlIGV2ZW50IGlzIGluaXRpYWxpemVkIGJlZm9yZSBzY2VuZSBzdGFydCwgc28gbm8gbmVlZCB0byBub3RpZnkgaWYgdHJpZ2dlcmVkLiBidXQgcG9zc2libGUhXHJcbiAgICAgICAgICAgIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KC8qdW5kZWZpbmVkLCB0cnVlKi8pO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXN0b21FdmVudHNNYXAuc2V0KGlkLCBvYnNlcnZhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgb2JzZXJ2YWJsZSBmb3IgdGhlIGdpdmVuIGV2ZW50IGlkIHdpdGggdGhlIGdpdmVuIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBldmVudFxyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxyXG4gICAgICogQHBhcmFtIGFzeW5jIGlmIHRydWUsIHRoZSBldmVudCB3aWxsIGJlIGRpc3BhdGNoZWQgYXN5bmNocm9ub3VzbHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeUN1c3RvbUV2ZW50KGlkOiBzdHJpbmcsIGRhdGE6IGFueSwgYXN5bmM6IGJvb2xlYW4gPSAhdGhpcy5kaXNwYXRjaEV2ZW50c1N5bmNocm9ub3VzbHkpIHtcclxuICAgICAgICBpZiAoYXN5bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZU9uTmV4dEZyYW1lLnB1c2goeyBpZCwgZGF0YSwgdW5pcXVlSWQ6IHRoaXMuX2V2ZW50VW5pcXVlSWQrKyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgbm90IGV4Y2VlZGluZyB0aGUgbWF4IG51bWJlciBvZiBldmVudHNcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnRFeGVjdXRpb25Db3VudGVyLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLl9ldmVudEV4ZWN1dGlvbkNvdW50ZXIuZ2V0KGlkKSE7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50RXhlY3V0aW9uQ291bnRlci5zZXQoaWQsIGNvdW50ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA+PSBGbG93R3JhcGhDb29yZGluYXRvci5NYXhFdmVudFR5cGVFeGVjdXRpb25QZXJGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSBGbG93R3JhcGhDb29yZGluYXRvci5NYXhFdmVudFR5cGVFeGVjdXRpb25QZXJGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKGBGbG93R3JhcGhDb29yZGluYXRvcjogVG9vIG1hbnkgZXhlY3V0aW9ucyBvZiBldmVudCBcIiR7aWR9XCIuYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudEV4ZWN1dGlvbkNvdW50ZXIuc2V0KGlkLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuX2N1c3RvbUV2ZW50c01hcC5nZXQoaWQpO1xyXG4gICAgICAgIGlmIChvYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ29ubmVjdGlvbiwgRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBSaWNoVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRWYWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbiB9IGZyb20gXCIuL3NlcmlhbGl6YXRpb25cIjtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb25uZWN0aW9uIHBvaW50IGZvciBkYXRhLlxyXG4gKiBBbiB1bmNvbm5lY3RlZCBpbnB1dCBwb2ludCBjYW4gaGF2ZSBhIGRlZmF1bHQgdmFsdWUuXHJcbiAqIEFuIG91dHB1dCBwb2ludCB3aWxsIG9ubHkgaGF2ZSBhIHZhbHVlIGlmIGl0IGlzIGNvbm5lY3RlZCB0byBhbiBpbnB1dCBwb2ludC4gRnVydGhlcm1vcmUsXHJcbiAqIGlmIHRoZSBwb2ludCBiZWxvbmdzIHRvIGEgXCJmdW5jdGlvblwiIG5vZGUsIHRoZSBub2RlIHdpbGwgcnVuIGl0cyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+IGV4dGVuZHMgRmxvd0dyYXBoQ29ubmVjdGlvbjxGbG93R3JhcGhCbG9jaywgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VD4+IHtcclxuICAgIHByaXZhdGUgX2lzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyB1c2VkIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMhIEl0IGlzIHRoZSBsYXN0IHZhbHVlIHRoYXQgd2FzIHNldCB0byB0aGlzIGNvbm5lY3Rpb24gd2l0aCBBTlkgY29udGV4dC5cclxuICAgICAqIERvIG5vdCB1c2UgdGhpcyB2YWx1ZSBmb3IgYW55dGhpbmcgZWxzZSwgYXMgaXQgbWlnaHQgYmUgd3JvbmcgaWYgdXNlZCBpbiBhIGRpZmZlcmVudCBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9sYXN0VmFsdWU6IE51bGxhYmxlPFQ+ID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGEgZGF0YSB0cmFuc2Zvcm1lciBmdW5jdGlvbiwgaWYgbmVlZGVkLlxyXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIGZvcmNlIHNlY29uZHMgaW50byBtaWxsaXNlY29uZHMgb3V0cHV0LCBpZiBpdCBtYWtlcyBzZW5zZSBpbiB5b3VyIGNhc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRhVHJhbnNmb3JtZXI6IE51bGxhYmxlPCh2YWx1ZTogVCkgPT4gVD4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvbiBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8VD4oKTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGRhdGEgY29ubmVjdGlvbiBwb2ludC5cclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgKiBAcGFyYW0gY29ubmVjdGlvblR5cGUgdGhlIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb25cclxuICAgICAqIEBwYXJhbSBvd25lckJsb2NrIHRoZSBibG9jayB0aGF0IG93bnMgdGhpcyBjb25uZWN0aW9uXHJcbiAgICAgKiBAcGFyYW0gcmljaFR5cGUgdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIF9kZWZhdWx0VmFsdWUgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGNvbm5lY3Rpb25cclxuICAgICAqIEBwYXJhbSBfb3B0aW9uYWwgaWYgdGhlIGNvbm5lY3Rpb24gaXMgb3B0aW9uYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBjb25uZWN0aW9uVHlwZTogRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUsXHJcbiAgICAgICAgb3duZXJCbG9jazogRmxvd0dyYXBoQmxvY2ssXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIHR5cGUgb2YgdGhlIGRhdGEgaW4gdGhpcyBibG9ja1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByaWNoVHlwZTogUmljaFR5cGU8VD4sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogW2FueV0gdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGNvbm5lY3Rpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF9kZWZhdWx0VmFsdWU6IFQgPSByaWNoVHlwZS5kZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogW2ZhbHNlXSBpZiB0aGUgY29ubmVjdGlvbiBpcyBvcHRpb25hbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX29wdGlvbmFsOiBib29sZWFuID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNvbm5lY3Rpb25UeXBlLCBvd25lckJsb2NrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjb25uZWN0aW9uIGlzIG9wdGlvbmFsLlxyXG4gICAgICogQ3VycmVudGx5IG9ubHkgdXNlZCBmb3IgVUkgY29udHJvbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBvcHRpb25hbCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpcyB0aGlzIGNvbm5lY3Rpb24gZGlzYWJsZWRcclxuICAgICAqIElmIHRoZSBjb25uZWN0aW9uIGlzIGRpc2FibGVkIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIGNvbm5lY3QgYW55dGhpbmcgdG8gaXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0RnJvbUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuIG91dHB1dCBkYXRhIGJsb2NrIGNhbiBjb25uZWN0IHRvIG11bHRpcGxlIGlucHV0IGRhdGEgYmxvY2tzLFxyXG4gICAgICogYnV0IGFuIGlucHV0IGRhdGEgYmxvY2sgY2FuIG9ubHkgY29ubmVjdCB0byBvbmUgb3V0cHV0IGRhdGEgYmxvY2suXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIHNpbmd1bGFyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfaXNTaW5ndWxhckNvbm5lY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblR5cGUgPT09IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlLklucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvbiBpbiBhIHNwZWNpZmljIGNvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHNldFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgdG8gd2hpY2ggdGhlIHZhbHVlIGlzIHNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IFQsIGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgdmFsdWUgaXMgZGlmZmVyZW50XHJcbiAgICAgICAgaWYgKGNvbnRleHQuX2dldENvbm5lY3Rpb25WYWx1ZSh0aGlzKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0Ll9zZXRDb25uZWN0aW9uVmFsdWUodGhpcywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgdmFsdWUgb2YgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBpbiB3aGljaCB0aGUgdmFsdWUgaXMgcmVzZXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlc2V0VG9EZWZhdWx0VmFsdWUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnRleHQuX3NldENvbm5lY3Rpb25WYWx1ZSh0aGlzLCB0aGlzLl9kZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdCB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0gcG9pbnQgdGhlIHBvaW50IHRvIGNvbm5lY3QgdG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBjb25uZWN0VG8ocG9pbnQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5jb25uZWN0VG8ocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFZhbHVlT3JEZWZhdWx0KGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBUIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBjb250ZXh0Ll9nZXRDb25uZWN0aW9uVmFsdWUodGhpcykgPz8gdGhpcy5fZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFUcmFuc2Zvcm1lciA/IHRoaXMuZGF0YVRyYW5zZm9ybWVyKHZhbCkgOiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvbiBpbiBhIHNwZWNpZmljIGNvbnRleHQuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBmcm9tIHdoaWNoIHRoZSB2YWx1ZSBpcyByZXRyaWV2ZWRcclxuICAgICAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IFQge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25UeXBlID09PSBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5PdXRwdXQpIHtcclxuICAgICAgICAgICAgY29udGV4dC5fbm90aWZ5RXhlY3V0ZU5vZGUodGhpcy5fb3duZXJCbG9jayk7XHJcbiAgICAgICAgICAgIHRoaXMuX293bmVyQmxvY2suX3VwZGF0ZU91dHB1dHMoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0VmFsdWVPckRlZmF1bHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yaWNoVHlwZS50eXBlVHJhbnNmb3JtZXIgPyB0aGlzLnJpY2hUeXBlLnR5cGVUcmFuc2Zvcm1lcih2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAhdGhpcy5pc0Nvbm5lY3RlZCgpID8gdGhpcy5fZ2V0VmFsdWVPckRlZmF1bHQoY29udGV4dCkgOiB0aGlzLl9jb25uZWN0ZWRQb2ludFswXS5nZXRWYWx1ZShjb250ZXh0KTtcclxuICAgICAgICB0aGlzLl9sYXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yaWNoVHlwZS50eXBlVHJhbnNmb3JtZXIgPyB0aGlzLnJpY2hUeXBlLnR5cGVUcmFuc2Zvcm1lcih2YWx1ZSkgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2dldExhc3RWYWx1ZSgpOiBOdWxsYWJsZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkZsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBzZXJpYWxpemUgdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyLnNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnJpY2hUeXBlID0ge307XHJcbiAgICAgICAgdGhpcy5yaWNoVHlwZS5zZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdC5yaWNoVHlwZSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5vcHRpb25hbCA9IHRoaXMuX29wdGlvbmFsO1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbihcImRlZmF1bHRWYWx1ZVwiLCB0aGlzLl9kZWZhdWx0VmFsdWUsIHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIiwgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24pO1xyXG4iLCJpbXBvcnQgeyBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV2ZW50VHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaEV2ZW50VHlwZVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBvZiBibG9jayB0aGF0IGxpc3RlbnMgdG8gYW4gZXZlbnQgb2JzZXJ2YWJsZSBhbmQgYWN0aXZhdGVzXHJcbiAqIGl0cyBvdXRwdXQgc2lnbmFsIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhFdmVudEJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIHRoZSBwcmlvcml0eSBvZiBpbml0aWFsaXphdGlvbiBvZiB0aGlzIGJsb2NrLlxyXG4gICAgICogRm9yIGV4YW1wbGUsIHNjZW5lIHN0YXJ0IHNob3VsZCBoYXZlIGEgbmVnYXRpdmUgcHJpb3JpdHkgYmVjYXVzZSBpdCBzaG91bGQgYmUgaW5pdGlhbGl6ZWQgbGFzdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRQcmlvcml0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBldmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlID0gRmxvd0dyYXBoRXZlbnRUeXBlLk5vVHJpZ2dlcjtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29udGV4dC5fbm90aWZ5RXhlY3V0ZU5vZGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kb25lLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhlIGV2ZW50LiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGZsb3cgZ3JhcGggd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLlxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgaW4gd2hpY2ggdGhlIGV2ZW50IGlzIGV4ZWN1dGVkXHJcbiAgICAgKiBAcGFyYW0gcGF5bG9hZCB0aGUgcGF5bG9hZCBvZiB0aGUgZXZlbnRcclxuICAgICAqIEByZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBldmVudCBzaG91bGQgc3RvcCBwcm9wYWdhdGlvbi4gaWYgZmFsc2UsIHRoZSBldmVudCB3aWxsIHN0b3AgcHJvcGFnYXRpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBfZXhlY3V0ZUV2ZW50KGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIHBheWxvYWQ6IGFueSk6IGJvb2xlYW47XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIEEgYmxvY2sgdGhhdCBleGVjdXRlcyBzb21lIGFjdGlvbi4gQWx3YXlzIGhhcyBhbiBpbnB1dCBzaWduYWwgKHdoaWNoIGlzIG5vdCB1c2VkIGJ5IGV2ZW50IGJsb2NrcykuXHJcbiAqIENhbiBoYXZlIG9uZSBvciBtb3JlIG91dHB1dCBzaWduYWxzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIGV4dGVuZHMgRmxvd0dyYXBoQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnB1dCBjb25uZWN0aW9uOiBUaGUgaW5wdXQgc2lnbmFsIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGluOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb3V0cHV0IGNvbm5lY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBzaWduYWwgYW4gZXJyb3IsIGlmIHRoZSBibG9jayBkZWZpbmVzIGl0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZXJyb3I6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb25zIHRoYXQgYWN0aXZhdGUgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2lnbmFsSW5wdXRzOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uW107XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9ucyB0aGF0IGNhbiBhY3RpdmF0ZSBkb3duc3RyZWFtIGJsb2Nrcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNpZ25hbE91dHB1dHM6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25bXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwcmlvcml0eSBvZiB0aGUgYmxvY2suIEhpZ2hlciBwcmlvcml0eSBibG9ja3Mgd2lsbCBiZSBleGVjdXRlZCBmaXJzdC5cclxuICAgICAqIE5vdGUgdGhhdCBwcmlvcml0eSBjYW5ub3QgYmUgY2hhbmdlIEFGVEVSIHRoZSBibG9jayB3YXMgYWRkZWQgYXMgc29ydGluZyBoYXBwZW5zIHdoZW4gdGhlIGJsb2NrIGlzIGFkZGVkIHRvIHRoZSBleGVjdXRpb24gcXVldWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBwcmlvcml0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5zaWduYWxJbnB1dHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNpZ25hbE91dHB1dHMgPSBbXTtcclxuICAgICAgICB0aGlzLmluID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxJbnB1dChcImluXCIpO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBFeGVjdXRlcyB0aGUgZmxvdyBncmFwaCBleGVjdXRpb24gYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBfZXhlY3V0ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBjYWxsaW5nU2lnbmFsOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3JlZ2lzdGVyU2lnbmFsSW5wdXQobmFtZTogc3RyaW5nKTogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBuZXcgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbihuYW1lLCBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5JbnB1dCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaWduYWxJbnB1dHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfcmVnaXN0ZXJTaWduYWxPdXRwdXQobmFtZTogc3RyaW5nKTogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gbmV3IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24obmFtZSwgRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUuT3V0cHV0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNpZ25hbE91dHB1dHMucHVzaChvdXRwdXQpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF91bnJlZ2lzdGVyU2lnbmFsSW5wdXQobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNpZ25hbElucHV0cy5maW5kSW5kZXgoKGlucHV0KSA9PiBpbnB1dC5uYW1lID09PSBuYW1lKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsSW5wdXRzW2luZGV4XS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsSW5wdXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfdW5yZWdpc3RlclNpZ25hbE91dHB1dChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2lnbmFsT3V0cHV0cy5maW5kSW5kZXgoKG91dHB1dCkgPT4gb3V0cHV0Lm5hbWUgPT09IG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduYWxPdXRwdXRzW2luZGV4XS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbmFsT3V0cHV0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3JlcG9ydEVycm9yKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIGVycm9yOiBFcnJvciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZXJyb3IucGF5bG9hZCA9IHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IG5ldyBFcnJvcihlcnJvcikgOiBlcnJvcjtcclxuICAgICAgICB0aGlzLmVycm9yLl9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgbmFtZSBvZiBhIHNpZ25hbCBpbnB1dCwgcmV0dXJuIHRoYXQgaW5wdXQgaWYgaXQgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgaW5wdXRcclxuICAgICAqIEByZXR1cm5zIGlmIHRoZSBpbnB1dCBleGlzdHMsIHRoZSBpbnB1dC4gT3RoZXJ3aXNlLCB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTaWduYWxJbnB1dChuYW1lOiBzdHJpbmcpOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaWduYWxJbnB1dHMuZmluZCgoaW5wdXQpID0+IGlucHV0Lm5hbWUgPT09IG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBuYW1lIG9mIGEgc2lnbmFsIG91dHB1dCwgcmV0dXJuIHRoYXQgaW5wdXQgaWYgaXQgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgaW5wdXRcclxuICAgICAqIEByZXR1cm5zIGlmIHRoZSBpbnB1dCBleGlzdHMsIHRoZSBpbnB1dC4gT3RoZXJ3aXNlLCB1bmRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTaWduYWxPdXRwdXQobmFtZTogc3RyaW5nKTogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmFsT3V0cHV0cy5maW5kKChvdXRwdXQpID0+IG91dHB1dC5uYW1lID09PSBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBzZXJpYWxpemUgaW5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyLnNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbElucHV0cyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsT3V0cHV0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdGhpcy5zaWduYWxJbnB1dHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZElucHV0OiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgaW5wdXQuc2VyaWFsaXplKHNlcmlhbGl6ZWRJbnB1dCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsSW5wdXRzLnB1c2goc2VyaWFsaXplZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2YgdGhpcy5zaWduYWxPdXRwdXRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRPdXRwdXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBvdXRwdXQuc2VyaWFsaXplKHNlcmlhbGl6ZWRPdXRwdXQpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbE91dHB1dHMucHVzaChzZXJpYWxpemVkT3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlcmlhbGl6ZXMgZnJvbSBhbiBvYmplY3RcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgZnJvbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzaWduYWxJbnB1dCA9IHRoaXMuZ2V0U2lnbmFsSW5wdXQoc2VyaWFsaXphdGlvbk9iamVjdC5zaWduYWxJbnB1dHNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzaWduYWxJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgc2lnbmFsSW5wdXQuZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdC5zaWduYWxJbnB1dHNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2lnbmFsIGlucHV0IHdpdGggbmFtZSBcIiArIHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsSW5wdXRzW2ldLm5hbWUgKyBcIiBpbiBibG9jayBcIiArIHNlcmlhbGl6YXRpb25PYmplY3QuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsT3V0cHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzaWduYWxPdXRwdXQgPSB0aGlzLmdldFNpZ25hbE91dHB1dChzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbE91dHB1dHNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChzaWduYWxPdXRwdXQpIHtcclxuICAgICAgICAgICAgICAgIHNpZ25hbE91dHB1dC5kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbE91dHB1dHNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2lnbmFsIG91dHB1dCB3aXRoIG5hbWUgXCIgKyBzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbE91dHB1dHNbaV0ubmFtZSArIFwiIGluIGJsb2NrIFwiICsgc2VyaWFsaXphdGlvbk9iamVjdC5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgdGhlIGNsYXNzIG5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XHJcblxyXG4vKipcclxuICogQW4gZXhlY3V0aW9uIGJsb2NrIHRoYXQgaGFzIGFuIG91dCBzaWduYWwuIFRoaXMgc2lnbmFsIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzeW5jaHJvbm91cyBleGVjdXRpb24gb2YgdGhpcyBibG9jayBpcyBkb25lLlxyXG4gKiBNb3N0IGV4ZWN1dGlvbiBibG9ja3Mgd2lsbCBpbmhlcml0IGZyb20gdGhpcywgZXhjZXB0IGZvciB0aGUgb25lcyB0aGF0IGhhdmUgbXVsdGlwbGUgc2lnbmFscyB0byBiZSB0cmlnZ2VyZWQuXHJcbiAqIChzdWNoIGFzIGlmIGJsb2NrcylcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbG93R3JhcGhFeGVjdXRpb25CbG9ja1dpdGhPdXRTaWduYWwgZXh0ZW5kcyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgc2lnbmFsIHRoYXQgaXMgc3luY2hyb25vdXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGV4ZWN1dGlvbiBvZiB0aGlzIGJsb2NrIGlzIGRvbmUuXHJcbiAgICAgKiBOb3RlIHRoYXQgaXMgY2FzZSBvZiBldmVudHMgb3IgYXN5bmMgeW91IG1pZ2h0IHdhbnQgdG8gdXNlIHRoZSBgZG9uZWAgc2lnbmFsIGluc3RlYWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvdXQ6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMub3V0ID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxPdXRwdXQoXCJvdXRcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcblxuZXhwb3J0IGNvbnN0IGVudW0gRmxvd0dyYXBoQWN0aW9uIHtcbiAgICBFeGVjdXRlQmxvY2sgPSBcIkV4ZWN1dGVCbG9ja1wiLFxuICAgIEV4ZWN1dGVFdmVudCA9IFwiRXhlY3V0ZUV2ZW50XCIsXG4gICAgVHJpZ2dlckNvbm5lY3Rpb24gPSBcIlRyaWdnZXJDb25uZWN0aW9uXCIsXG4gICAgQ29udGV4dFZhcmlhYmxlU2V0ID0gXCJDb250ZXh0VmFyaWFibGVTZXRcIixcbiAgICBHbG9iYWxWYXJpYWJsZVNldCA9IFwiR2xvYmFsVmFyaWFibGVTZXRcIixcbiAgICBHbG9iYWxWYXJpYWJsZURlbGV0ZSA9IFwiR2xvYmFsVmFyaWFibGVEZWxldGVcIixcbiAgICBHbG9iYWxWYXJpYWJsZUdldCA9IFwiR2xvYmFsVmFyaWFibGVHZXRcIixcbiAgICBBZGRDb25uZWN0aW9uID0gXCJBZGRDb25uZWN0aW9uXCIsXG4gICAgR2V0Q29ubmVjdGlvblZhbHVlID0gXCJHZXRDb25uZWN0aW9uVmFsdWVcIixcbiAgICBTZXRDb25uZWN0aW9uVmFsdWUgPSBcIlNldENvbm5lY3Rpb25WYWx1ZVwiLFxuICAgIEFjdGl2YXRlU2lnbmFsID0gXCJBY3RpdmF0ZVNpZ25hbFwiLFxuICAgIENvbnRleHRWYXJpYWJsZUdldCA9IFwiQ29udGV4dFZhcmlhYmxlR2V0XCIsXG59XG5cbi8qKlxuICogQW4gaXRlbSBpbiB0aGUgZmxvdyBncmFwaCBsb2cuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaExvZ0l0ZW0ge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIG9mIHRoZSBsb2cgaXRlbS5cbiAgICAgKi9cbiAgICB0aW1lPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyB0aGF0IHRyaWdnZXJlZCB0aGUgbG9nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIGJsb2NrL21vZHVsZSB0aGF0IHRyaWdnZXJlZCB0aGUgbG9nLlxuICAgICAqL1xuICAgIHVuaXF1ZUlkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGFjdGlvbiB0aGF0IHdhcyBsb2dnZWQuXG4gICAgICovXG4gICAgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb247XG4gICAgLyoqXG4gICAgICogVGhlIHBheWxvYWQgb2YgdGhlIGxvZ1xuICAgICAqIFRoaXMgY2FuIGJlIGFueSBkYXRhIHRoYXQgaXMgcmVsZXZhbnQgdG8gdGhlIGFjdGlvbi5cbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIHZhbHVlIG9mIGEgY29ubmVjdGlvbiwgdGhlIHZhbHVlIG9mIGEgdmFyaWFibGUsIGV0Yy5cbiAgICAgKiBUaGlzIGlzIG9wdGlvbmFsLlxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyB3aWxsIGJlIHJlc3BvbnNpYmxlIG9mIGxvZ2dpbmcgdGhlIGZsb3cgZ3JhcGggYWN0aXZpdHkuXG4gKiBOb3RlIHRoYXQgdXNpbmcgdGhpcyBjbGFzcyBtaWdodCByZWR1Y2UgcGVyZm9ybWFuY2UsIGFzIGl0IHdpbGwgbG9nIGV2ZXJ5IGFjdGlvbiwgYWNjb3JkaW5nIHRvIHRoZSBjb25maWd1cmF0aW9uLlxuICogSXQgYXR0YWNoZXMgdG8gYSBmbG93IGdyYXBoIGFuZCB1c2VzIG1ldGEtcHJvZ3JhbW1pbmcgdG8gcmVwbGFjZSB0aGUgbWV0aG9kcyBvZiB0aGUgZmxvdyBncmFwaCB0byBhZGQgbG9nZ2luZyBhYmlsaXRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhMb2dnZXIge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gbG9nIHRvIHRoZSBjb25zb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dUb0NvbnNvbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsb2cgY2FjaGUgb2YgdGhlIGZsb3cgZ3JhcGguXG4gICAgICogRWFjaCBpdGVtIGlzIGEgbG9nZ2VkIGl0ZW0sIGluIG9yZGVyIG9mIGV4ZWN1dGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nOiBJRmxvd0dyYXBoTG9nSXRlbVtdID0gW107XG5cbiAgICBwdWJsaWMgYWRkTG9nSXRlbShpdGVtOiBJRmxvd0dyYXBoTG9nSXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0udGltZSkge1xuICAgICAgICAgICAgaXRlbS50aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZy5wdXNoKGl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5sb2dUb0NvbnNvbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5wYXlsb2FkPy52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUuZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkxvZyhgW0ZHTG9nXSAke2l0ZW0uY2xhc3NOYW1lfToke2l0ZW0udW5pcXVlSWQuc3BsaXQoXCItXCIpWzBdfSAke2l0ZW0uYWN0aW9ufSAtICR7SlNPTi5zdHJpbmdpZnkodmFsdWUuZ2V0Q2xhc3NOYW1lKCkpfTogJHt2YWx1ZS50b1N0cmluZygpfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuTG9nKGBbRkdMb2ddICR7aXRlbS5jbGFzc05hbWV9OiR7aXRlbS51bmlxdWVJZC5zcGxpdChcIi1cIilbMF19ICR7aXRlbS5hY3Rpb259IC0gJHtKU09OLnN0cmluZ2lmeShpdGVtLnBheWxvYWQpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1zT2ZUeXBlKGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uKTogSUZsb3dHcmFwaExvZ0l0ZW1bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZy5maWx0ZXIoKGkpID0+IGkuYWN0aW9uID09PSBhY3Rpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XG5pbXBvcnQgeyBibG9ja0ZhY3RvcnkgfSBmcm9tIFwiLi9CbG9ja3MvZmxvd0dyYXBoQmxvY2tGYWN0b3J5XCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEJsb2NrTmFtZXMgfSBmcm9tIFwiLi9CbG9ja3MvZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGgsIElGbG93R3JhcGhQYXJzZU9wdGlvbnMgfSBmcm9tIFwiLi9mbG93R3JhcGhcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2ssIElGbG93R3JhcGhCbG9ja1BhcnNlT3B0aW9ucyB9IGZyb20gXCIuL2Zsb3dHcmFwaEJsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQsIElGbG93R3JhcGhDb250ZXh0UGFyc2VPcHRpb25zIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBJRmxvd0dyYXBoQ29vcmRpbmF0b3JQYXJzZU9wdGlvbnMgfSBmcm9tIFwiLi9mbG93R3JhcGhDb29yZGluYXRvclwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQ29vcmRpbmF0b3IgfSBmcm9tIFwiLi9mbG93R3JhcGhDb29yZGluYXRvclwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaERhdGFDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhFdmVudEJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXZlbnRCbG9ja1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgZGVmYXVsdFZhbHVlUGFyc2VGdW5jdGlvbiwgbmVlZHNQYXRoQ29udmVydGVyIH0gZnJvbSBcIi4vc2VyaWFsaXphdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBJU2VyaWFsaXplZEZsb3dHcmFwaCwgSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaywgSVNlcmlhbGl6ZWRGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4vdHlwZURlZmluaXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XG5pbXBvcnQgeyBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZSwgUmljaFR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbm5lY3Rpb25cIjtcblxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgYmxvY2tzLCBmaW5kIGFuIG91dHB1dCBkYXRhIGNvbm5lY3Rpb24gdGhhdCBoYXMgYSBzcGVjaWZpYyB1bmlxdWUgaWRcbiAqIEBwYXJhbSBibG9ja3MgYSBsaXN0IG9mIGZsb3cgZ3JhcGggYmxvY2tzXG4gKiBAcGFyYW0gdW5pcXVlSWQgdGhlIHVuaXF1ZSBpZCBvZiBhIGNvbm5lY3Rpb25cbiAqIEByZXR1cm5zIHRoZSBjb25uZWN0aW9uIHRoYXQgaGFzIHRoaXMgdW5pcXVlIGlkLiB0aHJvd3MgYW4gZXJyb3IgaWYgbm9uZSB3YXMgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdldERhdGFPdXRDb25uZWN0aW9uQnlVbmlxdWVJZChibG9ja3M6IEZsb3dHcmFwaEJsb2NrW10sIHVuaXF1ZUlkOiBzdHJpbmcpOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+IHtcbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGFPdXQgb2YgYmxvY2suZGF0YU91dHB1dHMpIHtcbiAgICAgICAgICAgIGlmIChkYXRhT3V0LnVuaXF1ZUlkID09PSB1bmlxdWVJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhT3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGRhdGEgb3V0IGNvbm5lY3Rpb24gd2l0aCB1bmlxdWUgaWQgXCIgKyB1bmlxdWVJZCk7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBsaXN0IG9mIGJsb2NrcywgZmluZCBhbiBpbnB1dCBzaWduYWwgY29ubmVjdGlvbiB0aGF0IGhhcyBhIHNwZWNpZmljIHVuaXF1ZSBpZFxuICogQHBhcmFtIGJsb2NrcyBhIGxpc3Qgb2YgZmxvdyBncmFwaCBibG9ja3NcbiAqIEBwYXJhbSB1bmlxdWVJZCB0aGUgdW5pcXVlIGlkIG9mIGEgY29ubmVjdGlvblxuICogQHJldHVybnMgdGhlIGNvbm5lY3Rpb24gdGhhdCBoYXMgdGhpcyB1bmlxdWUgaWQuIHRocm93cyBhbiBlcnJvciBpZiBub25lIHdhcyBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0U2lnbmFsSW5Db25uZWN0aW9uQnlVbmlxdWVJZChibG9ja3M6IEZsb3dHcmFwaEJsb2NrW10sIHVuaXF1ZUlkOiBzdHJpbmcpOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIHtcbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICBpZiAoYmxvY2sgaW5zdGFuY2VvZiBGbG93R3JhcGhFeGVjdXRpb25CbG9jaykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzaWduYWxJbiBvZiBibG9jay5zaWduYWxJbnB1dHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmFsSW4udW5pcXVlSWQgPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaWduYWxJbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc2lnbmFsIGluIGNvbm5lY3Rpb24gd2l0aCB1bmlxdWUgaWQgXCIgKyB1bmlxdWVJZCk7XG59XG5cbi8qKlxuICogUGFyc2VzIGEgc2VyaWFsaXplZCBjb29yZGluYXRvci5cbiAqIEBwYXJhbSBzZXJpYWxpemVkT2JqZWN0IHRoZSBvYmplY3QgdG8gcGFyc2VcbiAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIHRvIHVzZSB3aGVuIHBhcnNpbmdcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQgY29vcmRpbmF0b3JcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBhcnNlQ29vcmRpbmF0b3JBc3luYyhzZXJpYWxpemVkT2JqZWN0OiBhbnksIG9wdGlvbnM6IElGbG93R3JhcGhDb29yZGluYXRvclBhcnNlT3B0aW9ucykge1xuICAgIGNvbnN0IHZhbHVlUGFyc2VGdW5jdGlvbiA9IG9wdGlvbnMudmFsdWVQYXJzZUZ1bmN0aW9uID8/IGRlZmF1bHRWYWx1ZVBhcnNlRnVuY3Rpb247XG4gICAgY29uc3QgY29vcmRpbmF0b3IgPSBuZXcgRmxvd0dyYXBoQ29vcmRpbmF0b3IoeyBzY2VuZTogb3B0aW9ucy5zY2VuZSB9KTtcblxuICAgIGlmIChzZXJpYWxpemVkT2JqZWN0LmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseSkge1xuICAgICAgICBjb29yZGluYXRvci5kaXNwYXRjaEV2ZW50c1N5bmNocm9ub3VzbHkgPSBzZXJpYWxpemVkT2JqZWN0LmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseTtcbiAgICB9XG5cbiAgICBhd2FpdCBvcHRpb25zLnNjZW5lLndoZW5SZWFkeUFzeW5jKCk7XG4gICAgLy8gaWYgY3VzdG9tIGRlZmF1bHQgdmFsdWVzIGFyZSBkZWZpbmVkLCBzZXQgdGhlbSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcbiAgICBpZiAoc2VyaWFsaXplZE9iamVjdC5fZGVmYXVsdFZhbHVlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzZXJpYWxpemVkT2JqZWN0Ll9kZWZhdWx0VmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBrZXkgaXMgdGhlIEZsb3dHcmFwaFR5cGUsIHZhbHVlIGlzIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNlcmlhbGl6ZWRPYmplY3QuX2RlZmF1bHRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKGtleSkuZGVmYXVsdFZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYXN5bmMtcGFyc2UgdGhlIGZsb3cgZ3JhcGhzLiBUaGlzIGNhbiBiZSBkb25lIGluIHBhcmFsbGVsXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHNlcmlhbGl6ZWRPYmplY3QuX2Zsb3dHcmFwaHM/Lm1hcChcbiAgICAgICAgICAgIGFzeW5jIChzZXJpYWxpemVkR3JhcGg6IGFueSkgPT4gYXdhaXQgUGFyc2VGbG93R3JhcGhBc3luYyhzZXJpYWxpemVkR3JhcGgsIHsgY29vcmRpbmF0b3IsIHZhbHVlUGFyc2VGdW5jdGlvbiwgcGF0aENvbnZlcnRlcjogb3B0aW9ucy5wYXRoQ29udmVydGVyIH0pXG4gICAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBjb29yZGluYXRvcjtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBncmFwaCBmcm9tIGEgZ2l2ZW4gc2VyaWFsaXphdGlvbiBvYmplY3RcbiAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3Qgd2hlcmUgdGhlIHZhbHVlcyBhcmUgd3JpdHRlblxuICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBmb3IgcGFyc2luZyB0aGUgZ3JhcGhcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQgZ3JhcGhcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBhcnNlRmxvd0dyYXBoQXN5bmMoc2VyaWFsaXphdGlvbk9iamVjdDogSVNlcmlhbGl6ZWRGbG93R3JhcGgsIG9wdGlvbnM6IElGbG93R3JhcGhQYXJzZU9wdGlvbnMpOiBQcm9taXNlPEZsb3dHcmFwaD4ge1xuICAgIC8vIGdldCBhbGwgY2xhc3NlcyB0eXBlcyBuZWVkZWQgZm9yIHRoZSBibG9ja3MgdXNpbmcgdGhlIGJsb2NrIGZhY3RvcnlcbiAgICBjb25zdCByZXNvbHZlZENsYXNzZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5hbGxCbG9ja3MubWFwKGFzeW5jIChzZXJpYWxpemVkQmxvY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzRmFjdG9yeSA9IGJsb2NrRmFjdG9yeShzZXJpYWxpemVkQmxvY2suY2xhc3NOYW1lIGFzIEZsb3dHcmFwaEJsb2NrTmFtZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNsYXNzRmFjdG9yeSgpO1xuICAgICAgICB9KVxuICAgICk7XG4gICAgLy8gYXN5bmMgd2lsbCBiZSB1c2VkIHdoZW4gd2Ugc3RhcnQgdXNpbmcgdGhlIGJsb2NrIGFzeW5jIGZhY3RvcnlcbiAgICByZXR1cm4gUGFyc2VGbG93R3JhcGgoc2VyaWFsaXphdGlvbk9iamVjdCwgb3B0aW9ucywgcmVzb2x2ZWRDbGFzc2VzKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBncmFwaCBmcm9tIGEgZ2l2ZW4gc2VyaWFsaXphdGlvbiBvYmplY3RcbiAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3Qgd2hlcmUgdGhlIHZhbHVlcyBhcmUgd3JpdHRlblxuICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBmb3IgcGFyc2luZyB0aGUgZ3JhcGhcbiAqIEBwYXJhbSByZXNvbHZlZENsYXNzZXMgdGhlIHJlc29sdmVkIGNsYXNzZXMgZm9yIHRoZSBibG9ja3NcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQgZ3JhcGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmxvd0dyYXBoKHNlcmlhbGl6YXRpb25PYmplY3Q6IElTZXJpYWxpemVkRmxvd0dyYXBoLCBvcHRpb25zOiBJRmxvd0dyYXBoUGFyc2VPcHRpb25zLCByZXNvbHZlZENsYXNzZXM6ICh0eXBlb2YgRmxvd0dyYXBoQmxvY2spW10pIHtcbiAgICBjb25zdCBncmFwaCA9IG9wdGlvbnMuY29vcmRpbmF0b3IuY3JlYXRlR3JhcGgoKTtcbiAgICBjb25zdCBibG9ja3M6IEZsb3dHcmFwaEJsb2NrW10gPSBbXTtcbiAgICBjb25zdCB2YWx1ZVBhcnNlRnVuY3Rpb24gPSBvcHRpb25zLnZhbHVlUGFyc2VGdW5jdGlvbiA/PyBkZWZhdWx0VmFsdWVQYXJzZUZ1bmN0aW9uO1xuICAgIC8vIFBhcnNlIGFsbCBibG9ja3NcbiAgICAvLyBmb3IgKGNvbnN0IHNlcmlhbGl6ZWRCbG9jayBvZiBzZXJpYWxpemF0aW9uT2JqZWN0LmFsbEJsb2Nrcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VyaWFsaXphdGlvbk9iamVjdC5hbGxCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZEJsb2NrID0gc2VyaWFsaXphdGlvbk9iamVjdC5hbGxCbG9ja3NbaV07XG4gICAgICAgIGNvbnN0IGJsb2NrID0gUGFyc2VGbG93R3JhcGhCbG9ja1dpdGhDbGFzc1R5cGUoXG4gICAgICAgICAgICBzZXJpYWxpemVkQmxvY2ssXG4gICAgICAgICAgICB7IHNjZW5lOiBvcHRpb25zLmNvb3JkaW5hdG9yLmNvbmZpZy5zY2VuZSwgcGF0aENvbnZlcnRlcjogb3B0aW9ucy5wYXRoQ29udmVydGVyLCBhc3NldHNDb250YWluZXI6IG9wdGlvbnMuY29vcmRpbmF0b3IuY29uZmlnLnNjZW5lLCB2YWx1ZVBhcnNlRnVuY3Rpb24gfSxcbiAgICAgICAgICAgIHJlc29sdmVkQ2xhc3Nlc1tpXVxuICAgICAgICApO1xuICAgICAgICBibG9ja3MucHVzaChibG9jayk7XG4gICAgICAgIGlmIChibG9jayBpbnN0YW5jZW9mIEZsb3dHcmFwaEV2ZW50QmxvY2spIHtcbiAgICAgICAgICAgIGdyYXBoLmFkZEV2ZW50QmxvY2soYmxvY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFmdGVyIHBhcnNpbmcgYWxsIGJsb2NrcywgY29ubmVjdCB0aGVtXG4gICAgZm9yIChjb25zdCBibG9jayBvZiBibG9ja3MpIHtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhSW4gb2YgYmxvY2suZGF0YUlucHV0cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzZXJpYWxpemVkQ29ubmVjdGlvbiBvZiBkYXRhSW4uY29ubmVjdGVkUG9pbnRJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gR2V0RGF0YU91dENvbm5lY3Rpb25CeVVuaXF1ZUlkKGJsb2Nrcywgc2VyaWFsaXplZENvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIGRhdGFJbi5jb25uZWN0VG8oY29ubmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrIGluc3RhbmNlb2YgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2spIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2lnbmFsT3V0IG9mIGJsb2NrLnNpZ25hbE91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNlcmlhbGl6ZWRDb25uZWN0aW9uIG9mIHNpZ25hbE91dC5jb25uZWN0ZWRQb2ludElkcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gR2V0U2lnbmFsSW5Db25uZWN0aW9uQnlVbmlxdWVJZChibG9ja3MsIHNlcmlhbGl6ZWRDb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsT3V0LmNvbm5lY3RUbyhjb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBzZXJpYWxpemVkQ29udGV4dCBvZiBzZXJpYWxpemF0aW9uT2JqZWN0LmV4ZWN1dGlvbkNvbnRleHRzKSB7XG4gICAgICAgIFBhcnNlRmxvd0dyYXBoQ29udGV4dChzZXJpYWxpemVkQ29udGV4dCwgeyBncmFwaCwgdmFsdWVQYXJzZUZ1bmN0aW9uIH0sIHNlcmlhbGl6YXRpb25PYmplY3QucmlnaHRIYW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gZ3JhcGg7XG59XG5cbi8qKlxuICogUGFyc2VzIGEgY29udGV4dFxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBjb250ZXh0IHNlcmlhbGl6YXRpb24gdmFsdWVzXG4gKiBAcGFyYW0gb3B0aW9ucyB0aGUgb3B0aW9ucyBmb3IgcGFyc2luZyB0aGUgY29udGV4dFxuICogQHBhcmFtIHJpZ2h0SGFuZGVkIHdoZXRoZXIgdGhlIHNlcmlhbGl6ZWQgZGF0YSBpcyByaWdodCBoYW5kZWRcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUZsb3dHcmFwaENvbnRleHQoc2VyaWFsaXphdGlvbk9iamVjdDogSVNlcmlhbGl6ZWRGbG93R3JhcGhDb250ZXh0LCBvcHRpb25zOiBJRmxvd0dyYXBoQ29udGV4dFBhcnNlT3B0aW9ucywgcmlnaHRIYW5kZWQ/OiBib29sZWFuKTogRmxvd0dyYXBoQ29udGV4dCB7XG4gICAgY29uc3QgcmVzdWx0ID0gb3B0aW9ucy5ncmFwaC5jcmVhdGVDb250ZXh0KCk7XG4gICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3QuZW5hYmxlTG9nZ2luZykge1xuICAgICAgICByZXN1bHQuZW5hYmxlTG9nZ2luZyA9IHRydWU7XG4gICAgfVxuICAgIHJlc3VsdC50cmVhdERhdGFBc1JpZ2h0SGFuZGVkID0gcmlnaHRIYW5kZWQgfHwgZmFsc2U7XG4gICAgY29uc3QgdmFsdWVQYXJzZUZ1bmN0aW9uID0gb3B0aW9ucy52YWx1ZVBhcnNlRnVuY3Rpb24gPz8gZGVmYXVsdFZhbHVlUGFyc2VGdW5jdGlvbjtcbiAgICByZXN1bHQudW5pcXVlSWQgPSBzZXJpYWxpemF0aW9uT2JqZWN0LnVuaXF1ZUlkO1xuICAgIGNvbnN0IHNjZW5lID0gcmVzdWx0LmdldFNjZW5lKCk7XG4gICAgLy8gY2hlY2sgaWYgYXNzZXRzIGNvbnRleHQgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHNlcmlhbGl6YXRpb25PYmplY3QuX2Fzc2V0c0NvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYWMgPSBzZXJpYWxpemF0aW9uT2JqZWN0Ll9hc3NldHNDb250ZXh0O1xuICAgICAgICBjb25zdCBhc3NldHNDb250ZXh0OiBJQXNzZXRDb250YWluZXIgPSB7XG4gICAgICAgICAgICBtZXNoZXM6IGFjLm1lc2hlcz8ubWFwKChtOiBzdHJpbmcpID0+IHNjZW5lLmdldE1lc2hCeUlkKG0pKSxcbiAgICAgICAgICAgIGxpZ2h0czogYWMubGlnaHRzPy5tYXAoKGw6IHN0cmluZykgPT4gc2NlbmUuZ2V0TGlnaHRCeU5hbWUobCkpLFxuICAgICAgICAgICAgY2FtZXJhczogYWMuY2FtZXJhcz8ubWFwKChjOiBzdHJpbmcpID0+IHNjZW5lLmdldENhbWVyYUJ5TmFtZShjKSksXG4gICAgICAgICAgICBtYXRlcmlhbHM6IGFjLm1hdGVyaWFscz8ubWFwKChtOiBzdHJpbmcpID0+IHNjZW5lLmdldE1hdGVyaWFsQnlJZChtKSksXG4gICAgICAgICAgICB0ZXh0dXJlczogYWMudGV4dHVyZXM/Lm1hcCgodDogc3RyaW5nKSA9PiBzY2VuZS5nZXRUZXh0dXJlQnlOYW1lKHQpKSxcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IGFjLmFuaW1hdGlvbnM/Lm1hcCgoYTogc3RyaW5nKSA9PiBzY2VuZS5hbmltYXRpb25zLmZpbmQoKGFuaW0pID0+IGFuaW0ubmFtZSA9PT0gYSkpLFxuICAgICAgICAgICAgc2tlbGV0b25zOiBhYy5za2VsZXRvbnM/Lm1hcCgoczogc3RyaW5nKSA9PiBzY2VuZS5nZXRTa2VsZXRvbkJ5TmFtZShzKSksXG4gICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbXM6IGFjLnBhcnRpY2xlU3lzdGVtcz8ubWFwKChwczogc3RyaW5nKSA9PiBzY2VuZS5nZXRQYXJ0aWNsZVN5c3RlbUJ5SWQocHMpKSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkdyb3VwczogYWMuYW5pbWF0aW9uR3JvdXBzPy5tYXAoKGFnOiBzdHJpbmcpID0+IHNjZW5lLmdldEFuaW1hdGlvbkdyb3VwQnlOYW1lKGFnKSksXG4gICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogYWMudHJhbnNmb3JtTm9kZXM/Lm1hcCgodG46IHN0cmluZykgPT4gc2NlbmUuZ2V0VHJhbnNmb3JtTm9kZUJ5SWQodG4pKSxcbiAgICAgICAgICAgIHJvb3ROb2RlczogW10sXG4gICAgICAgICAgICBtdWx0aU1hdGVyaWFsczogW10sXG4gICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXJzOiBbXSxcbiAgICAgICAgICAgIGdlb21ldHJpZXM6IFtdLFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcnM6IFtdLFxuICAgICAgICAgICAgZW52aXJvbm1lbnRUZXh0dXJlOiBudWxsLFxuICAgICAgICAgICAgcG9zdFByb2Nlc3NlczogW10sXG4gICAgICAgICAgICBzb3VuZHM6IG51bGwsXG4gICAgICAgICAgICBlZmZlY3RMYXllcnM6IFtdLFxuICAgICAgICAgICAgbGF5ZXJzOiBbXSxcbiAgICAgICAgICAgIHJlZmxlY3Rpb25Qcm9iZXM6IFtdLFxuICAgICAgICAgICAgbGVuc0ZsYXJlU3lzdGVtczogW10sXG4gICAgICAgICAgICBwcm9jZWR1cmFsVGV4dHVyZXM6IFtdLFxuICAgICAgICAgICAgZ2V0Tm9kZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxOb2RlPiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdC5hc3NldHNDb250ZXh0ID0gYXNzZXRzQ29udGV4dDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2VyaWFsaXphdGlvbk9iamVjdC5fdXNlclZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFyc2VGdW5jdGlvbihrZXksIHNlcmlhbGl6YXRpb25PYmplY3QuX3VzZXJWYXJpYWJsZXMsIHJlc3VsdC5hc3NldHNDb250ZXh0LCBzY2VuZSk7XG4gICAgICAgIHJlc3VsdC51c2VyVmFyaWFibGVzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc2VyaWFsaXphdGlvbk9iamVjdC5fY29ubmVjdGlvblZhbHVlcykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlUGFyc2VGdW5jdGlvbihrZXksIHNlcmlhbGl6YXRpb25PYmplY3QuX2Nvbm5lY3Rpb25WYWx1ZXMsIHJlc3VsdC5hc3NldHNDb250ZXh0LCBzY2VuZSk7XG4gICAgICAgIHJlc3VsdC5fc2V0Q29ubmVjdGlvblZhbHVlQnlLZXkoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBibG9jayBmcm9tIGEgc2VyaWFsaXphdGlvbiBvYmplY3RcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYXN5bmMgZHVlIHRvIHRoZSBmYWN0b3J5IG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBibG9jaydzIGNsYXNzLiBJZiB5b3UgbG9hZCB0aGUgY2xhc3MgZXh0ZXJuYWxseSB1c2UgUGFyc2VCbG9ja1dpdGhDbGFzc1R5cGVcbiAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gcGFyc2UgZnJvbVxuICogQHBhcmFtIHBhcnNlT3B0aW9ucyBvcHRpb25zIGZvciBwYXJzaW5nIHRoZSBibG9ja1xuICogQHJldHVybnMgdGhlIHBhcnNlZCBibG9ja1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUGFyc2VCbG9ja0FzeW5jKHNlcmlhbGl6YXRpb25PYmplY3Q6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2ssIHBhcnNlT3B0aW9uczogSUZsb3dHcmFwaEJsb2NrUGFyc2VPcHRpb25zKTogUHJvbWlzZTxGbG93R3JhcGhCbG9jaz4ge1xuICAgIGNvbnN0IGNsYXNzRmFjdG9yeSA9IGJsb2NrRmFjdG9yeShzZXJpYWxpemF0aW9uT2JqZWN0LmNsYXNzTmFtZSBhcyBGbG93R3JhcGhCbG9ja05hbWVzKTtcbiAgICBjb25zdCBjbGFzc1R5cGUgPSBhd2FpdCBjbGFzc0ZhY3RvcnkoKTtcbiAgICByZXR1cm4gUGFyc2VGbG93R3JhcGhCbG9ja1dpdGhDbGFzc1R5cGUoc2VyaWFsaXphdGlvbk9iamVjdCwgcGFyc2VPcHRpb25zLCBjbGFzc1R5cGUpO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGJsb2NrIGZyb20gYSBzZXJpYWxpemF0aW9uIG9iamVjdFxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBwYXJzZSBmcm9tXG4gKiBAcGFyYW0gcGFyc2VPcHRpb25zIG9wdGlvbnMgZm9yIHBhcnNpbmcgdGhlIGJsb2NrXG4gKiBAcGFyYW0gY2xhc3NUeXBlIHRoZSBjbGFzcyB0eXBlIG9mIHRoZSBibG9jay4gVGhpcyBpcyB1c2VkIHdoZW4gdGhlIGNsYXNzIGlzIG5vdCBsb2FkZWQgYXN5bmNocm9ub3VzbHlcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQgYmxvY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmxvd0dyYXBoQmxvY2tXaXRoQ2xhc3NUeXBlKFxuICAgIHNlcmlhbGl6YXRpb25PYmplY3Q6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2ssXG4gICAgcGFyc2VPcHRpb25zOiBJRmxvd0dyYXBoQmxvY2tQYXJzZU9wdGlvbnMsXG4gICAgY2xhc3NUeXBlOiB0eXBlb2YgRmxvd0dyYXBoQmxvY2tcbik6IEZsb3dHcmFwaEJsb2NrIHtcbiAgICBjb25zdCBwYXJzZWRDb25maWc6IGFueSA9IHt9O1xuICAgIGNvbnN0IHZhbHVlUGFyc2VGdW5jdGlvbiA9IHBhcnNlT3B0aW9ucy52YWx1ZVBhcnNlRnVuY3Rpb24gPz8gZGVmYXVsdFZhbHVlUGFyc2VGdW5jdGlvbjtcbiAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcpIHtcbiAgICAgICAgICAgIHBhcnNlZENvbmZpZ1trZXldID0gdmFsdWVQYXJzZUZ1bmN0aW9uKGtleSwgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcsIHBhcnNlT3B0aW9ucy5hc3NldHNDb250YWluZXIgfHwgcGFyc2VPcHRpb25zLnNjZW5lLCBwYXJzZU9wdGlvbnMuc2NlbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuZWVkc1BhdGhDb252ZXJ0ZXIoc2VyaWFsaXphdGlvbk9iamVjdC5jbGFzc05hbWUpKSB7XG4gICAgICAgIGlmICghcGFyc2VPcHRpb25zLnBhdGhDb252ZXJ0ZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGggY29udmVydGVyIGlzIHJlcXVpcmVkIGZvciB0aGlzIGJsb2NrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnNlZENvbmZpZy5wYXRoQ29udmVydGVyID0gcGFyc2VPcHRpb25zLnBhdGhDb252ZXJ0ZXI7XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IG5ldyBjbGFzc1R5cGUocGFyc2VkQ29uZmlnKTtcbiAgICBvYmoudW5pcXVlSWQgPSBzZXJpYWxpemF0aW9uT2JqZWN0LnVuaXF1ZUlkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhSW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGFJbnB1dCA9IG9iai5nZXREYXRhSW5wdXQoc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhSW5wdXRzW2ldLm5hbWUpO1xuICAgICAgICBpZiAoZGF0YUlucHV0KSB7XG4gICAgICAgICAgICBkYXRhSW5wdXQuZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhSW5wdXRzW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGRhdGEgaW5wdXQgd2l0aCBuYW1lIFwiICsgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhSW5wdXRzW2ldLm5hbWUgKyBcIiBpbiBibG9jayBcIiArIHNlcmlhbGl6YXRpb25PYmplY3QuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YU91dHB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF0YU91dHB1dCA9IG9iai5nZXREYXRhT3V0cHV0KHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YU91dHB1dHNbaV0ubmFtZSk7XG4gICAgICAgIGlmIChkYXRhT3V0cHV0KSB7XG4gICAgICAgICAgICBkYXRhT3V0cHV0LmRlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QuZGF0YU91dHB1dHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgZGF0YSBvdXRwdXQgd2l0aCBuYW1lIFwiICsgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhT3V0cHV0c1tpXS5uYW1lICsgXCIgaW4gYmxvY2sgXCIgKyBzZXJpYWxpemF0aW9uT2JqZWN0LmNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqLm1ldGFkYXRhID0gc2VyaWFsaXphdGlvbk9iamVjdC5tZXRhZGF0YTtcbiAgICBvYmouZGVzZXJpYWxpemUgJiYgb2JqLmRlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xuICAgIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogUGFyc2VzIGEgY29ubmVjdGlvbiBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBwYXJzZSBmcm9tLlxuICogQHBhcmFtIG93bmVyQmxvY2sgdGhlIGJsb2NrIHRoYXQgb3ducyB0aGUgY29ubmVjdGlvbi5cbiAqIEBwYXJhbSBjbGFzc1R5cGUgdGhlIGNsYXNzIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb24uXG4gKiBAcmV0dXJucyB0aGUgcGFyc2VkIGNvbm5lY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUdyYXBoQ29ubmVjdGlvbldpdGhDbGFzc1R5cGU8QmxvY2tUIGV4dGVuZHMgRmxvd0dyYXBoQmxvY2s+KHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9LCBvd25lckJsb2NrOiBCbG9ja1QsIGNsYXNzVHlwZTogdHlwZW9mIEZsb3dHcmFwaENvbm5lY3Rpb24pIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IGNsYXNzVHlwZShzZXJpYWxpemF0aW9uT2JqZWN0Lm5hbWUsIHNlcmlhbGl6YXRpb25PYmplY3QuX2Nvbm5lY3Rpb25UeXBlLCBvd25lckJsb2NrKTtcbiAgICBjb25uZWN0aW9uLmRlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGRhdGEgY29ubmVjdGlvbiBmcm9tIGEgc2VyaWFsaXplZCBvYmplY3QuXG4gKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHBhcnNlIGZyb21cbiAqIEBwYXJhbSBvd25lckJsb2NrIHRoZSBibG9jayB0aGF0IG93bnMgdGhlIGNvbm5lY3Rpb25cbiAqIEBwYXJhbSBjbGFzc1R5cGUgdGhlIGNsYXNzIHR5cGUgb2YgdGhlIGRhdGEgY29ubmVjdGlvblxuICogQHJldHVybnMgdGhlIHBhcnNlZCBjb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUdyYXBoRGF0YUNvbm5lY3Rpb24oc2VyaWFsaXphdGlvbk9iamVjdDogYW55LCBvd25lckJsb2NrOiBGbG93R3JhcGhCbG9jaywgY2xhc3NUeXBlOiB0eXBlb2YgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb24pOiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxhbnk+IHtcbiAgICBjb25zdCByaWNoVHlwZSA9IFBhcnNlUmljaFR5cGUoc2VyaWFsaXphdGlvbk9iamVjdC5yaWNoVHlwZSk7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gc2VyaWFsaXphdGlvbk9iamVjdC5kZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBjbGFzc1R5cGUoc2VyaWFsaXphdGlvbk9iamVjdC5uYW1lLCBzZXJpYWxpemF0aW9uT2JqZWN0Ll9jb25uZWN0aW9uVHlwZSwgb3duZXJCbG9jaywgcmljaFR5cGUsIGRlZmF1bHRWYWx1ZSwgISFzZXJpYWxpemF0aW9uT2JqZWN0Ll9vcHRpb25hbCk7XG4gICAgY29ubmVjdGlvbi5kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0KTtcbiAgICByZXR1cm4gY29ubmVjdGlvbjtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSByaWNoIHR5cGUgZnJvbSBhIHNlcmlhbGl6YXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgYSBzZXJpYWxpemF0aW9uIG9iamVjdFxuICogQHJldHVybnMgdGhlIHBhcnNlZCByaWNoIHR5cGVcbiAqL1xuZnVuY3Rpb24gUGFyc2VSaWNoVHlwZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpOiBSaWNoVHlwZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFJpY2hUeXBlKHNlcmlhbGl6YXRpb25PYmplY3QudHlwZU5hbWUsIHNlcmlhbGl6YXRpb25PYmplY3QuZGVmYXVsdFZhbHVlKTtcbn1cbiIsImltcG9ydCB0eXBlIHsgUG9pbnRlckluZm8gfSBmcm9tIFwiY29yZS9FdmVudHMvcG9pbnRlckV2ZW50c1wiO1xuaW1wb3J0IHsgUG9pbnRlckV2ZW50VHlwZXMgfSBmcm9tIFwiY29yZS9FdmVudHMvcG9pbnRlckV2ZW50c1wiO1xuaW1wb3J0IHR5cGUgeyBBYnN0cmFjdE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvYWJzdHJhY3RNZXNoXCI7XG5pbXBvcnQgdHlwZSB7IE9ic2VydmVyIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRUeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXZlbnRUeXBlXCI7XG5cbi8qKlxuICogdGhlIGludGVyZmFjZSBvZiB0aGUgb2JqZWN0IHRoZSBzY2VuZSBldmVudCBjb29yZGluYXRvciB3aWxsIHRyaWdnZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEV2ZW50VHJpZ2dlciB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIGV2ZW50XG4gICAgICovXG4gICAgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlO1xuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIG9mIHRoZSBldmVudFxuICAgICAqL1xuICAgIHBheWxvYWQ/OiBhbnk7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY29vcmRpbmF0aW5nIHRoZSBldmVudHMgdGhhdCBhcmUgdHJpZ2dlcmVkIGluIHRoZSBzY2VuZS5cbiAqIEl0IHJlZ2lzdGVycyBhbGwgb2JzZXJ2ZXJzIG5lZWRlZCB0byB0cmFjayBjZXJ0YWluIGV2ZW50cyBhbmQgdHJpZ2dlcnMgdGhlIGJsb2NrcyB0aGF0IGFyZSBsaXN0ZW5pbmcgdG8gdGhlbS5cbiAqIEFic3RyYWN0aW5nIHRoZSBldmVudHMgZnJvbSB0aGUgY2xhc3Mgd2lsbCBhbGxvdyB1cyB0byBlYXNpbHkgY2hhbmdlIHRoZSBldmVudHMgdGhhdCBhcmUgYmVpbmcgbGlzdGVuZWQgdG8sIGFuZCB0cmlnZ2VyIHRoZW0gaW4gYW55IG9yZGVyLlxuICovXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoU2NlbmVFdmVudENvb3JkaW5hdG9yIHtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgX3NjZW5lOiBTY2VuZTtcblxuICAgIC8qKlxuICAgICAqIHJlZ2lzdGVyIHRvIHRoaXMgb2JzZXJ2YWJsZSB0byBnZXQgZmxvdyBncmFwaCBldmVudCBub3RpZmljYXRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBvbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxJRmxvd0dyYXBoRXZlbnRUcmlnZ2VyPiA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbiAgICAvKipcbiAgICAgKiBXYXMgc2NlbmUtcmVhZHkgYWxyZWFkeSB0cmlnZ2VyZWQ/XG4gICAgICovXG4gICAgcHVibGljIHNjZW5lUmVhZHlUcmlnZ2VyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgX3NjZW5lRGlzcG9zZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxTY2VuZT4+O1xuICAgIHByaXZhdGUgX3NjZW5lUmVhZHlPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8U2NlbmU+PjtcbiAgICBwcml2YXRlIF9zY2VuZU9uQmVmb3JlUmVuZGVyT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPFNjZW5lPj47XG4gICAgcHJpdmF0ZSBfbWVzaFBpY2tlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxQb2ludGVySW5mbz4+O1xuICAgIHByaXZhdGUgX21lc2hVbmRlclBvaW50ZXJPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8eyBtZXNoOiBOdWxsYWJsZTxBYnN0cmFjdE1lc2g+OyBwb2ludGVySWQ6IG51bWJlciB9Pj47XG4gICAgcHJpdmF0ZSBfcG9pbnRlclVuZGVyTWVzaFN0YXRlOiB7IFtwb2ludGVySWQ6IG51bWJlcl06IE51bGxhYmxlPEFic3RyYWN0TWVzaD4gfSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBfc3RhcnRpbmdUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XG4gICAgICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9zY2VuZVJlYWR5T2JzZXJ2ZXIgPSB0aGlzLl9zY2VuZS5vblJlYWR5T2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNjZW5lUmVhZHlUcmlnZ2VyZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZVJlYWR5IH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVSZWFkeVRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3NjZW5lRGlzcG9zZU9ic2VydmVyID0gdGhpcy5fc2NlbmUub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVEaXNwb3NlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2NlbmVPbkJlZm9yZVJlbmRlck9ic2VydmVyID0gdGhpcy5fc2NlbmUub25CZWZvcmVSZW5kZXJPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0aGlzLl9zY2VuZS5nZXRFbmdpbmUoKS5nZXREZWx0YVRpbWUoKSAvIDEwMDA7IC8vIHNldCBpbiBzZWNvbmRzXG4gICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7XG4gICAgICAgICAgICAgICAgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lQmVmb3JlUmVuZGVyLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZVNpbmNlU3RhcnQ6IHRoaXMuX3N0YXJ0aW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0aW5nVGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21lc2hQaWNrZWRPYnNlcnZlciA9IHRoaXMuX3NjZW5lLm9uUG9pbnRlck9ic2VydmFibGUuYWRkKChwb2ludGVySW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuTWVzaFBpY2ssIHBheWxvYWQ6IHBvaW50ZXJJbmZvIH0pO1xuICAgICAgICB9LCBQb2ludGVyRXZlbnRUeXBlcy5QT0lOVEVSUElDSyk7IC8vIHNob3VsZCBpdCBiZSBwb2ludGVyZG93bj9cblxuICAgICAgICB0aGlzLl9tZXNoVW5kZXJQb2ludGVyT2JzZXJ2ZXIgPSB0aGlzLl9zY2VuZS5vbk1lc2hVbmRlclBvaW50ZXJVcGRhdGVkT2JzZXJ2YWJsZS5hZGQoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBkYXRhIGhhcyBjaGFuZ2VkLiBDaGVjayB0aGUgc3RhdGUgb2YgdGhlIGxhc3QgY2hhbmdlIGFuZCBzZWUgaWYgaXQgaXMgYSBtZXNoIG9yIG51bGwuXG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIG1lc2ggYW5kIHRoZSBwcmV2aW91cyBzdGF0ZSB3YXMgbnVsbCwgdHJpZ2dlciBvdmVyIGV2ZW50LiBJZiBpdCBpcyBudWxsIGFuZCB0aGUgcHJldmlvdXMgc3RhdGUgd2FzIGEgbWVzaCwgdHJpZ2dlciBvdXQgZXZlbnQuXG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIG1lc2ggYW5kIHRoZSBwcmV2aW91cyBzdGF0ZSB3YXMgYSBtZXNoLCB0cmlnZ2VyIG91dCBmcm9tIHRoZSBvbGQgbWVzaCBhbmQgb3ZlciB0aGUgbmV3IG1lc2hcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIG51bGwgYW5kIHRoZSBwcmV2aW91cyBzdGF0ZSB3YXMgbnVsbCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgIGNvbnN0IHBvaW50ZXJJZCA9IGRhdGEucG9pbnRlcklkO1xuICAgICAgICAgICAgY29uc3QgbWVzaCA9IGRhdGEubWVzaDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSB0aGlzLl9wb2ludGVyVW5kZXJNZXNoU3RhdGVbcG9pbnRlcklkXTtcbiAgICAgICAgICAgIGlmICghcHJldmlvdXNTdGF0ZSAmJiBtZXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlck92ZXIsIHBheWxvYWQ6IHsgcG9pbnRlcklkLCBtZXNoIH0gfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzU3RhdGUgJiYgIW1lc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3V0LCBwYXlsb2FkOiB7IHBvaW50ZXJJZCwgbWVzaDogcHJldmlvdXNTdGF0ZSB9IH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c1N0YXRlICYmIG1lc2ggJiYgcHJldmlvdXNTdGF0ZSAhPT0gbWVzaCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHsgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJPdXQsIHBheWxvYWQ6IHsgcG9pbnRlcklkLCBtZXNoOiBwcmV2aW91c1N0YXRlLCBvdmVyOiBtZXNoIH0gfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlck92ZXIsIHBheWxvYWQ6IHsgcG9pbnRlcklkLCBtZXNoLCBvdXQ6IHByZXZpb3VzU3RhdGUgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXJVbmRlck1lc2hTdGF0ZVtwb2ludGVySWRdID0gbWVzaDtcbiAgICAgICAgfSwgUG9pbnRlckV2ZW50VHlwZXMuUE9JTlRFUk1PVkUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLl9zY2VuZURpc3Bvc2VPYnNlcnZlcj8ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX3NjZW5lUmVhZHlPYnNlcnZlcj8ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX3NjZW5lT25CZWZvcmVSZW5kZXJPYnNlcnZlcj8ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX21lc2hQaWNrZWRPYnNlcnZlcj8ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX21lc2hVbmRlclBvaW50ZXJPYnNlcnZlcj8ucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUuY2xlYXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ29ubmVjdGlvbiwgRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhDb25uZWN0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCIuLi9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhBY3Rpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhMb2dnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY29ubmVjdGlvbiBwb2ludCBmb3IgYSBzaWduYWwuXHJcbiAqIFdoZW4gYW4gb3V0cHV0IHBvaW50IGlzIGFjdGl2YXRlZCwgaXQgd2lsbCBhY3RpdmF0ZSB0aGUgY29ubmVjdGVkIGlucHV0IHBvaW50LlxyXG4gKiBXaGVuIGFuIGlucHV0IHBvaW50IGlzIGFjdGl2YXRlZCwgaXQgd2lsbCBleGVjdXRlIHRoZSBibG9jayBpdCBiZWxvbmdzIHRvLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gZXh0ZW5kcyBGbG93R3JhcGhDb25uZWN0aW9uPEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrLCBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIE9wdGlvbmFsIHBheWxvYWQuIENhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSwgd2hlbiBhbiBlcnJvciBpcyB0aHJvd24gdG8gcGFzcyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGF5bG9hZDogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByaW9yaXR5IG9mIHRoZSBzaWduYWwuIFNpZ25hbHMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBmaXJzdC5cclxuICAgICAqIFNldCBwcmlvcml0eSBiZWZvcmUgYWRkaW5nIHRoZSBjb25uZWN0aW9uIGFzIHNvcnRpbmcgaGFwcGVucyBvbmx5IHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgYWRkZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcmlvcml0eTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgX2lzU2luZ3VsYXJDb25uZWN0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgY29ubmVjdFRvKHBvaW50OiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuY29ubmVjdFRvKHBvaW50KTtcclxuICAgICAgICAvLyBzb3J0IGFjY29yZGluZyB0byBwcmlvcml0eSB0byBoYW5kbGUgZXhlY3V0aW9uIG9yZGVyXHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkUG9pbnQuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfYWN0aXZhdGVTaWduYWwoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnRleHQubG9nZ2VyPy5hZGRMb2dJdGVtKHtcclxuICAgICAgICAgICAgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24uQWN0aXZhdGVTaWduYWwsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5fb3duZXJCbG9jay5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMuX293bmVyQmxvY2sudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25UeXBlOiB0aGlzLmNvbm5lY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25UeXBlID09PSBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5JbnB1dCkge1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9ub3RpZnlFeGVjdXRlTm9kZSh0aGlzLl9vd25lckJsb2NrKTtcclxuICAgICAgICAgICAgdGhpcy5fb3duZXJCbG9jay5fZXhlY3V0ZShjb250ZXh0LCB0aGlzKTtcclxuICAgICAgICAgICAgY29udGV4dC5faW5jcmVhc2VFeGVjdXRpb25JZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29ubmVjdGVkUG9pbnQgb2YgdGhpcy5fY29ubmVjdGVkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZFBvaW50Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhcIkZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIiwgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbik7XHJcbiIsImltcG9ydCB0eXBlIHsgSUFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvSUFzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB7IENvbG9yMywgQ29sb3I0IH0gZnJvbSBcIi4uL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgTWF0cml4LCBRdWF0ZXJuaW9uLCBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0IH0gZnJvbSBcIi4uL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuL0Jsb2Nrcy9mbG93R3JhcGhCbG9ja05hbWVzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiLi9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaFR5cGVzLCBnZXRSaWNoVHlwZUJ5Rmxvd0dyYXBoVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFRyYW5zZm9ybU5vZGUgfSBmcm9tIFwiY29yZS9NZXNoZXMvdHJhbnNmb3JtTm9kZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhNYXRyaXgyRCwgRmxvd0dyYXBoTWF0cml4M0QgfSBmcm9tIFwiLi9DdXN0b21UeXBlcy9mbG93R3JhcGhNYXRyaXhcIjtcclxuXHJcbmZ1bmN0aW9uIElzTWVzaENsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBjbGFzc05hbWUgPT09IFwiTWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIkFic3RyYWN0TWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIkdyb3VuZE1lc2hcIiB8fFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gXCJJbnN0YW5jZU1lc2hcIiB8fFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gXCJMaW5lc01lc2hcIiB8fFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gXCJHb2xkYmVyZ01lc2hcIiB8fFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gXCJHcmVhc2VkTGluZU1lc2hcIiB8fFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gXCJUcmFpbE1lc2hcIlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSXNWZWN0b3JDbGFzc05hbWUoY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3IyIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0IHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5Db2xvcjMgfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLkNvbG9yNFxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSXNNYXRyaXhDbGFzc05hbWUoY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCB8fCBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJEIHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4M0Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIElzQW5pbWF0aW9uR3JvdXBDbGFzc05hbWUoY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBjbGFzc05hbWUgPT09IFwiQW5pbWF0aW9uR3JvdXBcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFyc2VWZWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcsIHZhbHVlOiBBcnJheTxudW1iZXI+LCBmbGlwSGFuZGVkbmVzcyA9IGZhbHNlKSB7XHJcbiAgICBpZiAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuRnJvbUFycmF5KHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3IzKSB7XHJcbiAgICAgICAgaWYgKGZsaXBIYW5kZWRuZXNzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlWzJdICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVmVjdG9yMy5Gcm9tQXJyYXkodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yNC5Gcm9tQXJyYXkodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb24pIHtcclxuICAgICAgICBpZiAoZmxpcEhhbmRlZG5lc3MpIHtcclxuICAgICAgICAgICAgdmFsdWVbMl0gKj0gLTE7XHJcbiAgICAgICAgICAgIHZhbHVlWzNdICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUXVhdGVybmlvbi5Gcm9tQXJyYXkodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLkNvbG9yMykge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IzKHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0pO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLkNvbG9yNCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3I0KHZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHZlY3RvciBjbGFzcyBuYW1lICR7Y2xhc3NOYW1lfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgZnVuY3Rpb24gdGhhdCBzZXJpYWxpemVzIHZhbHVlcyBpbiBhIGNvbnRleHQgb2JqZWN0IHRvIGEgc2VyaWFsaXphdGlvbiBvYmplY3RcclxuICogQHBhcmFtIGtleSB0aGUga2V5IHdoZXJlIHRoZSB2YWx1ZSBzaG91bGQgYmUgc3RvcmVkIGluIHRoZSBzZXJpYWxpemF0aW9uIG9iamVjdFxyXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHN0b3JlXHJcbiAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3Qgd2hlcmUgdGhlIHZhbHVlIHdpbGwgYmUgc3RvcmVkXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWVTZXJpYWxpemF0aW9uRnVuY3Rpb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdmFsdWU/LmdldENsYXNzTmFtZT8uKCkgPz8gXCJcIjtcclxuICAgIGlmIChJc1ZlY3RvckNsYXNzTmFtZShjbGFzc05hbWUpIHx8IElzTWF0cml4Q2xhc3NOYW1lKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0W2tleV0gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5hc0FycmF5KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLkludGVnZXIpIHtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0W2tleV0gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWUgJiYgKHZhbHVlLmlkIHx8IHZhbHVlLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Rba2V5XSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiB2YWx1ZS5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gb25seSBpZiBpdCBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3Qgc2VyaWFsaXplIHZhbHVlICR7dmFsdWV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBmdW5jdGlvbiB0aGF0IHBhcnNlcyB2YWx1ZXMgc3RvcmVkIGluIGEgc2VyaWFsaXphdGlvbiBvYmplY3RcclxuICogQHBhcmFtIGtleSB0aGUga2V5IHRvIHRoZSB2YWx1ZSB0aGF0IHdpbGwgYmUgcGFyc2VkXHJcbiAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHBhcnNlZFxyXG4gKiBAcGFyYW0gYXNzZXRzQ29udGFpbmVyIHRoZSBhc3NldHMgY29udGFpbmVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGZpbmQgdGhlIG9iamVjdHNcclxuICogQHBhcmFtIHNjZW5lXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VmFsdWVQYXJzZUZ1bmN0aW9uKGtleTogc3RyaW5nLCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIGFzc2V0c0NvbnRhaW5lcjogSUFzc2V0Q29udGFpbmVyLCBzY2VuZTogU2NlbmUpIHtcclxuICAgIGNvbnN0IGludGVybWVkaWF0ZVZhbHVlID0gc2VyaWFsaXphdGlvbk9iamVjdFtrZXldO1xyXG4gICAgbGV0IGZpbmFsVmFsdWU7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpbnRlcm1lZGlhdGVWYWx1ZT8udHlwZSA/PyBpbnRlcm1lZGlhdGVWYWx1ZT8uY2xhc3NOYW1lO1xyXG4gICAgaWYgKElzTWVzaENsYXNzTmFtZShjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgbGV0IG5vZGVzOiBUcmFuc2Zvcm1Ob2RlW10gPSBzY2VuZS5tZXNoZXMuZmlsdGVyKChtKSA9PiAoaW50ZXJtZWRpYXRlVmFsdWUuaWQgPyBtLmlkID09PSBpbnRlcm1lZGlhdGVWYWx1ZS5pZCA6IG0ubmFtZSA9PT0gaW50ZXJtZWRpYXRlVmFsdWUubmFtZSkpO1xyXG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbm9kZXMgPSBzY2VuZS50cmFuc2Zvcm1Ob2Rlcy5maWx0ZXIoKG0pID0+IChpbnRlcm1lZGlhdGVWYWx1ZS5pZCA/IG0uaWQgPT09IGludGVybWVkaWF0ZVZhbHVlLmlkIDogbS5uYW1lID09PSBpbnRlcm1lZGlhdGVWYWx1ZS5uYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZS51bmlxdWVJZCA/IG5vZGVzLmZpbmQoKG0pID0+IG0udW5pcXVlSWQgPT09IGludGVybWVkaWF0ZVZhbHVlLnVuaXF1ZUlkKSA6IG5vZGVzWzBdO1xyXG4gICAgfSBlbHNlIGlmIChJc1ZlY3RvckNsYXNzTmFtZShjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IFBhcnNlVmVjdG9yKGNsYXNzTmFtZSwgaW50ZXJtZWRpYXRlVmFsdWUudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChJc0FuaW1hdGlvbkdyb3VwQ2xhc3NOYW1lKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAvLyBkbyBub3QgdXNlIHRoZSBzY2VuZS5nZXRBbmltYXRpb25Hcm91cEJ5TmFtZSBiZWNhdXNlIGl0IGlzIHBvc3NpYmxlIHRoYXQgdHdvIEFHcyB3aWxsIGhhdmUgdGhlIHNhbWUgbmFtZVxyXG4gICAgICAgIGNvbnN0IGFncyA9IHNjZW5lLmFuaW1hdGlvbkdyb3Vwcy5maWx0ZXIoKGFnKSA9PiBhZy5uYW1lID09PSBpbnRlcm1lZGlhdGVWYWx1ZS5uYW1lKTtcclxuICAgICAgICAvLyB1bmlxdWVJZCBjaGFuZ2VzIG9uIGVhY2ggbG9hZC4gdGhpcyBpcyB1c2VkIGZvciB0aGUgZ2xURiBsb2FkZXIsIHRoYXQgdXNlcyBzZXJpYWxpemF0aW9uIGFmdGVyIHRoZSBzY2VuZSB3YXMgbG9hZGVkLlxyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBhZ3MubGVuZ3RoID09PSAxID8gYWdzWzBdIDogYWdzLmZpbmQoKGFnKSA9PiBhZy51bmlxdWVJZCA9PT0gaW50ZXJtZWRpYXRlVmFsdWUudW5pcXVlSWQpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCkge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBNYXRyaXguRnJvbUFycmF5KGludGVybWVkaWF0ZVZhbHVlLnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5NYXRyaXgyRCkge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBuZXcgRmxvd0dyYXBoTWF0cml4MkQoaW50ZXJtZWRpYXRlVmFsdWUudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNEKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IG5ldyBGbG93R3JhcGhNYXRyaXgzRChpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuSW50ZWdlcikge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBGbG93R3JhcGhJbnRlZ2VyLkZyb21WYWx1ZShpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTnVtYmVyIHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuU3RyaW5nIHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuQm9vbGVhbikge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZVswXTtcclxuICAgIH0gZWxzZSBpZiAoaW50ZXJtZWRpYXRlVmFsdWUgJiYgaW50ZXJtZWRpYXRlVmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpbmFsVmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJtZWRpYXRlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyYXRpb24gZGF0YSBvZiBhbiBldmVudFxyXG4gICAgICAgICAgICBmaW5hbFZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWUucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWwuZXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjY1t2YWwuaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlKHZhbC50eXBlKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1t2YWwuaWRdLnZhbHVlID0gZGVmYXVsdFZhbHVlUGFyc2VGdW5jdGlvbihcInZhbHVlXCIsIHZhbCwgYXNzZXRzQ29udGFpbmVyLCBzY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmluYWxWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbFZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogR2l2ZW4gYSBuYW1lIG9mIGEgZmxvdyBncmFwaCBibG9jayBjbGFzcywgcmV0dXJuIGlmIHRoaXNcclxuICogY2xhc3MgbmVlZHMgdG8gYmUgY3JlYXRlZCB3aXRoIGEgcGF0aCBjb252ZXJ0ZXIuIFVzZWQgaW5cclxuICogcGFyc2luZy5cclxuICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgbmFtZSBvZiB0aGUgZmxvdyBncmFwaCBibG9jayBjbGFzc1xyXG4gKiBAcmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgY2xhc3MgbmVlZHMgYSBwYXRoIGNvbnZlcnRlclxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgZnVuY3Rpb24gbmVlZHNQYXRoQ29udmVydGVyKGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyBJIGFtIG5vdCB1c2luZyB0aGUgQ2xhc3NOYW1lIHByb3BlcnR5IGhlcmUgYmVjYXVzZSBpdCB3YXMgY2F1c2luZyBhIGNpcmN1bGFyIGRlcGVuZGVuY3lcclxuICAgIC8vIHRoYXQgamVzdCBkaWRuJ3QgbGlrZSFcclxuICAgIHJldHVybiBjbGFzc05hbWUgPT09IEZsb3dHcmFwaEJsb2NrTmFtZXMuSnNvblBvaW50ZXJQYXJzZXI7XHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBNYXRyaXgsIFF1YXRlcm5pb24sIFZlY3RvcjIsIFZlY3RvcjMsIFZlY3RvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiLi4vbm9kZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEludGVnZXIgfSBmcm9tIFwiLi9DdXN0b21UeXBlcy9mbG93R3JhcGhJbnRlZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoTWF0cml4MkQsIEZsb3dHcmFwaE1hdHJpeDNEIH0gZnJvbSBcIi4vQ3VzdG9tVHlwZXMvZmxvd0dyYXBoTWF0cml4XCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaFR5cGVzIH0gZnJvbSBcIi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIFJldHVybnMgaWYgbWVzaDEgaXMgYSBkZXNjZW5kYW50IG9mIG1lc2gyXHJcbiAqIEBwYXJhbSBtZXNoMVxyXG4gKiBAcGFyYW0gbWVzaDJcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfSXNEZXNjZW5kYW50T2YobWVzaDE6IE5vZGUsIG1lc2gyOiBOb2RlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEobWVzaDEucGFyZW50ICYmIChtZXNoMS5wYXJlbnQgPT09IG1lc2gyIHx8IF9Jc0Rlc2NlbmRhbnRPZihtZXNoMS5wYXJlbnQsIG1lc2gyKSkpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBGbG93R3JhcGhOdW1iZXIgPSBudW1iZXIgfCBGbG93R3JhcGhJbnRlZ2VyO1xyXG5leHBvcnQgdHlwZSBGbG93R3JhcGhWZWN0b3IgPSBWZWN0b3IyIHwgVmVjdG9yMyB8IFZlY3RvcjQgfCBRdWF0ZXJuaW9uO1xyXG5leHBvcnQgdHlwZSBGbG93R3JhcGhNYXRyaXggPSBNYXRyaXggfCBGbG93R3JhcGhNYXRyaXgyRCB8IEZsb3dHcmFwaE1hdHJpeDNEO1xyXG5leHBvcnQgdHlwZSBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSA9IEZsb3dHcmFwaE51bWJlciB8IEZsb3dHcmFwaFZlY3RvciB8IEZsb3dHcmFwaE1hdHJpeCB8IGJvb2xlYW47XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX0dldENsYXNzTmFtZU9mKHY6IGFueSkge1xyXG4gICAgaWYgKHYuZ2V0Q2xhc3NOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHYuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQ2hlY2sgaWYgdHdvIGNsYXNzbmFtZSBhcmUgdGhlIHNhbWUgYW5kIGFyZSB2ZWN0b3Igb3IgcXVhdGVybmlvbiBjbGFzc2VzLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBmaXJzdCBjbGFzcyBuYW1lXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUyIHRoZSBzZWNvbmQgY2xhc3MgbmFtZVxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSB0d28gY2xhc3MgbmFtZXMgYXJlIHRoZSBzYW1lIGFuZCBhcmUgdmVjdG9yIG9yIHF1YXRlcm5pb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfQXJlU2FtZVZlY3Rvck9yUXVhdGVybmlvbkNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBjbGFzc05hbWUyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBjbGFzc05hbWUyICYmXHJcbiAgICAgICAgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuVmVjdG9yMiB8fCBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjMgfHwgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0IHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbilcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQ2hlY2sgaWYgdHdvIGNsYXNzbmFtZSBhcmUgdGhlIHNhbWUgYW5kIGFyZSBtYXRyaXggY2xhc3Nlcy5cclxuICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgZmlyc3QgY2xhc3MgbmFtZVxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lMiB0aGUgc2Vjb25kIGNsYXNzIG5hbWVcclxuICogQHJldHVybnMgd2hldGhlciB0aGUgdHdvIGNsYXNzIG5hbWVzIGFyZSB0aGUgc2FtZSBhbmQgYXJlIG1hdHJpeCBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9BcmVTYW1lTWF0cml4Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gY2xhc3NOYW1lMiAmJiAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5NYXRyaXggfHwgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5NYXRyaXgyRCB8fCBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNEKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBDaGVjayBpZiB0d28gY2xhc3NuYW1lIGFyZSB0aGUgc2FtZSBhbmQgYXJlIGludGVnZXIgY2xhc3Nlcy5cclxuICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgZmlyc3QgY2xhc3MgbmFtZVxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lMiB0aGUgc2Vjb25kIGNsYXNzIG5hbWVcclxuICogQHJldHVybnMgd2hldGhlciB0aGUgdHdvIGNsYXNzIG5hbWVzIGFyZSB0aGUgc2FtZSBhbmQgYXJlIGludGVnZXIgY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfQXJlU2FtZUludGVnZXJDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgY2xhc3NOYW1lMjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lID09PSBcIkZsb3dHcmFwaEludGVnZXJcIiAmJiBjbGFzc05hbWUyID09PSBcIkZsb3dHcmFwaEludGVnZXJcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBudW1lcmljIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSB0aGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgbnVtYmVyLlxyXG4gKiBAcGFyYW0gdmFsaWRJZk5hTiB3aGV0aGVyIHRvIGNvbnNpZGVyIE5hTiBhcyBhIHZhbGlkIG51bWJlci5cclxuICogQHJldHVybnMgd2hldGhlciBhIGlzIGEgRmxvd0dyYXBoTnVtYmVyIChJbnRlZ2VyIG9yIG51bWJlcikuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWMoYTogRmxvd0dyYXBoTWF0aE9wZXJhdGlvblR5cGUsIHZhbGlkSWZOYU4/OiBib29sZWFuKTogYSBpcyBGbG93R3JhcGhOdW1iZXIge1xyXG4gICAgY29uc3QgaXNOdW1lcmljID0gdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIChhIGFzIEZsb3dHcmFwaEludGVnZXIpPy52YWx1ZSA9PT0gXCJudW1iZXJcIjtcclxuICAgIGlmIChpc051bWVyaWMgJiYgIXZhbGlkSWZOYU4pIHtcclxuICAgICAgICByZXR1cm4gIWlzTmFOKGdldE51bWVyaWNWYWx1ZShhIGFzIEZsb3dHcmFwaE51bWJlcikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzTnVtZXJpYztcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbnVtZXJpYyB2YWx1ZSBvZiBhIEZsb3dHcmFwaE51bWJlci5cclxuICogQHBhcmFtIGEgdGhlIG9iamVjdCB0byBnZXQgdGhlIG51bWVyaWMgdmFsdWUgZnJvbS5cclxuICogQHJldHVybnMgdGhlIG51bWVyaWMgdmFsdWUuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1lcmljVmFsdWUoYTogRmxvd0dyYXBoTnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiA/IGEgOiBhLnZhbHVlO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG5pbXBvcnQgdHlwZSB7IElLSFJJbnRlcmFjdGl2aXR5IH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEdMVEZMb2FkZXIgfSBmcm9tIFwiLi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElHTFRGTG9hZGVyRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ29vcmRpbmF0b3IgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29vcmRpbmF0b3JcIjtcclxuaW1wb3J0IHsgUGFyc2VGbG93R3JhcGhBc3luYyB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhQYXJzZXJcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJHTFRGRXh0ZW5zaW9uLCB1bnJlZ2lzdGVyR0xURkV4dGVuc2lvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVyRXh0ZW5zaW9uUmVnaXN0cnlcIjtcclxuaW1wb3J0IHR5cGUgeyBHTFRGUGF0aFRvT2JqZWN0Q29udmVydGVyIH0gZnJvbSBcIi4vZ2x0ZlBhdGhUb09iamVjdENvbnZlcnRlclwiO1xyXG5pbXBvcnQgeyBBZGRPYmplY3RBY2Nlc3NvclRvS2V5LCBHZXRQYXRoVG9PYmplY3RDb252ZXJ0ZXIgfSBmcm9tIFwiLi9vYmplY3RNb2RlbE1hcHBpbmdcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3Rpdml0eUdyYXBoVG9GbG93R3JhcGhQYXJzZXIgfSBmcm9tIFwiLi9LSFJfaW50ZXJhY3Rpdml0eS9pbnRlcmFjdGl2aXR5R3JhcGhQYXJzZXJcIjtcclxuaW1wb3J0IHsgYWRkVG9CbG9ja0ZhY3RvcnkgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvQmxvY2tzL2Zsb3dHcmFwaEJsb2NrRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgSUFuaW1hdGlvbiB9IGZyb20gXCIuLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgTkFNRSA9IFwiS0hSX2ludGVyYWN0aXZpdHlcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwiLi4vLi4vZ2xURkZpbGVMb2FkZXJcIiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1qc2RvYywgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEdMVEZMb2FkZXJFeHRlbnNpb25PcHRpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWZpbmVzIG9wdGlvbnMgZm9yIHRoZSBLSFJfaW50ZXJhY3Rpdml0eSBleHRlbnNpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gTk9URTogRG9uJ3QgdXNlIE5BTUUgaGVyZSBhcyBpdCB3aWxsIGJyZWFrIHRoZSBVTUQgdHlwZSBkZWNsYXJhdGlvbnMuXHJcbiAgICAgICAgW1wiS0hSX2ludGVyYWN0aXZpdHlcIl06IHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTG9hZGVyIGV4dGVuc2lvbiBmb3IgS0hSX2ludGVyYWN0aXZpdHlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBLSFJfaW50ZXJhY3Rpdml0eSBpbXBsZW1lbnRzIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gTkFNRTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB3aGV0aGVyIHRoaXMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX3BhdGhDb252ZXJ0ZXI/OiBHTFRGUGF0aFRvT2JqZWN0Q29udmVydGVyPGFueSwgYW55LCBhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gX2xvYWRlclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IEdMVEZMb2FkZXIpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLl9sb2FkZXIuaXNFeHRlbnNpb25Vc2VkKE5BTUUpO1xyXG4gICAgICAgIHRoaXMuX3BhdGhDb252ZXJ0ZXIgPSBHZXRQYXRoVG9PYmplY3RDb252ZXJ0ZXIodGhpcy5fbG9hZGVyLmdsdGYpO1xyXG4gICAgICAgIC8vIGF2b2lkIHN0YXJ0aW5nIGFuaW1hdGlvbnMgYXV0b21hdGljYWxseS5cclxuICAgICAgICBfbG9hZGVyLl9za2lwU3RhcnRBbmltYXRpb25TdGVwID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG9iamVjdCBtb2RlbCB3aXRoIG5ldyBwb2ludGVyc1xyXG5cclxuICAgICAgICBjb25zdCBzY2VuZSA9IF9sb2FkZXIuYmFieWxvblNjZW5lO1xyXG4gICAgICAgIGlmIChzY2VuZSkge1xyXG4gICAgICAgICAgICBfQWRkSW50ZXJhY3Rpdml0eU9iamVjdE1vZGVsKHNjZW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgKHRoaXMuX2xvYWRlciBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgICBkZWxldGUgdGhpcy5fcGF0aENvbnZlcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIEB0eXBlc2NyaXB0LWVzbGludC9uby1taXN1c2VkLXByb21pc2VzXHJcbiAgICBwdWJsaWMgYXN5bmMgb25SZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmUgfHwgIXRoaXMuX3BhdGhDb252ZXJ0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuX2xvYWRlci5iYWJ5bG9uU2NlbmU7XHJcbiAgICAgICAgY29uc3QgaW50ZXJhY3Rpdml0eURlZmluaXRpb24gPSB0aGlzLl9sb2FkZXIuZ2x0Zi5leHRlbnNpb25zPy5LSFJfaW50ZXJhY3Rpdml0eSBhcyBJS0hSSW50ZXJhY3Rpdml0eTtcclxuICAgICAgICBpZiAoIWludGVyYWN0aXZpdHlEZWZpbml0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgY2FuIHRlY2huaWNhbGx5IHRocm93LCBidXQgaXQncyBub3QgYSBjcml0aWNhbCBlcnJvclxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb29yZGluYXRvciA9IG5ldyBGbG93R3JhcGhDb29yZGluYXRvcih7IHNjZW5lIH0pO1xyXG4gICAgICAgIGNvb3JkaW5hdG9yLmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseSA9IGZhbHNlOyAvLyBnbFRGIGludGVyYWN0aXZpdHkgZGlzcGF0Y2hlcyBldmVudHMgYXN5bmNocm9ub3VzbHlcclxuICAgICAgICBjb25zdCBncmFwaHMgPSBpbnRlcmFjdGl2aXR5RGVmaW5pdGlvbi5ncmFwaHMubWFwKChncmFwaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgSW50ZXJhY3Rpdml0eUdyYXBoVG9GbG93R3JhcGhQYXJzZXIoZ3JhcGgsIHRoaXMuX2xvYWRlci5nbHRmLCB0aGlzLl9sb2FkZXIucGFyZW50LnRhcmdldEZwcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZXIuc2VyaWFsaXplVG9GbG93R3JhcGgoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBwYXJzZSBlYWNoIGdyYXBoIGFzeW5jXHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoZ3JhcGhzLm1hcChhc3luYyAoZ3JhcGgpID0+IGF3YWl0IFBhcnNlRmxvd0dyYXBoQXN5bmMoZ3JhcGgsIHsgY29vcmRpbmF0b3IsIHBhdGhDb252ZXJ0ZXI6IHRoaXMuX3BhdGhDb252ZXJ0ZXIgfSkpKTtcclxuXHJcbiAgICAgICAgY29vcmRpbmF0b3Iuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBwb3B1bGF0ZXMgdGhlIG9iamVjdCBtb2RlbCB3aXRoIHRoZSBpbnRlcmFjdGl2aXR5IGV4dGVuc2lvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9BZGRJbnRlcmFjdGl2aXR5T2JqZWN0TW9kZWwoc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAvLyBOb3RlIC0gYWxsIG9mIHRob3NlIGFyZSByZWFkLW9ubHksIGFzIHBlciB0aGUgc3BlY3MhXHJcblxyXG4gICAgLy8gYWN0aXZlIGNhbWVyYSByb3RhdGlvblxyXG4gICAgQWRkT2JqZWN0QWNjZXNzb3JUb0tleShcIi9leHRlbnNpb25zL0tIUl9pbnRlcmFjdGl2aXR5Lz8vYWN0aXZlQ2FtZXJhL3JvdGF0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzY2VuZS5hY3RpdmVDYW1lcmEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUXVhdGVybmlvbihOYU4sIE5hTiwgTmFOLCBOYU4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHF1YXQgPSBRdWF0ZXJuaW9uLkZyb21Sb3RhdGlvbk1hdHJpeChzY2VuZS5hY3RpdmVDYW1lcmEuZ2V0V29ybGRNYXRyaXgoKSkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIGlmICghc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHF1YXQudyAqPSAtMTsgLy8gZ2xURiB1c2VzIHJpZ2h0LWhhbmRlZCBzeXN0ZW0sIHdoaWxlIGJhYnlsb24gdXNlcyBsZWZ0LWhhbmRlZFxyXG4gICAgICAgICAgICAgICAgcXVhdC54ICo9IC0xOyAvLyBnbFRGIHVzZXMgcmlnaHQtaGFuZGVkIHN5c3RlbSwgd2hpbGUgYmFieWxvbiB1c2VzIGxlZnQtaGFuZGVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHF1YXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcIlF1YXRlcm5pb25cIixcclxuICAgICAgICBnZXRUYXJnZXQ6ICgpID0+IHNjZW5lLmFjdGl2ZUNhbWVyYSxcclxuICAgIH0pO1xyXG4gICAgLy8gYWN0aXZlQ2FtZXJhIHBvc2l0aW9uXHJcbiAgICBBZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL2V4dGVuc2lvbnMvS0hSX2ludGVyYWN0aXZpdHkvPy9hY3RpdmVDYW1lcmEvcG9zaXRpb25cIiwge1xyXG4gICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKE5hTiwgTmFOLCBOYU4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHNjZW5lLmFjdGl2ZUNhbWVyYS5nZXRXb3JsZE1hdHJpeCgpLmdldFRyYW5zbGF0aW9uKCk7IC8vIG5vdCBnbG9iYWwgcG9zaXRpb25cclxuICAgICAgICAgICAgaWYgKCFzY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcG9zLnggKj0gLTE7IC8vIGdsVEYgdXNlcyByaWdodC1oYW5kZWQgc3lzdGVtLCB3aGlsZSBiYWJ5bG9uIHVzZXMgbGVmdC1oYW5kZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCJWZWN0b3IzXCIsXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiAoKSA9PiBzY2VuZS5hY3RpdmVDYW1lcmEsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAvYW5pbWF0aW9ucy97fSBwb2ludGVyczpcclxuICAgIEFkZE9iamVjdEFjY2Vzc29yVG9LZXkoXCIvYW5pbWF0aW9ucy97fS9leHRlbnNpb25zL0tIUl9pbnRlcmFjdGl2aXR5L2lzUGxheWluZ1wiLCB7XHJcbiAgICAgICAgZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cD8uaXNQbGF5aW5nID8/IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCJib29sZWFuXCIsXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBBZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL2FuaW1hdGlvbnMve30vZXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS9taW5UaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IChhbmltYXRpb246IElBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cD8uZnJvbSA/PyAwKSAvIDYwOyAvLyBmaXhlZCBmYWN0b3IgZm9yIGR1cmF0aW9uLXRvLWZyYW1lcyBjb252ZXJzaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGdldFRhcmdldDogKGFuaW1hdGlvbjogSUFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgQWRkT2JqZWN0QWNjZXNzb3JUb0tleShcIi9hbmltYXRpb25zL3t9L2V4dGVuc2lvbnMvS0hSX2ludGVyYWN0aXZpdHkvbWF4VGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXA/LnRvID8/IDApIC8gNjA7IC8vIGZpeGVkIGZhY3RvciBmb3IgZHVyYXRpb24tdG8tZnJhbWVzIGNvbnZlcnNpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyBwbGF5aGVhZFxyXG4gICAgQWRkT2JqZWN0QWNjZXNzb3JUb0tleShcIi9hbmltYXRpb25zL3t9L2V4dGVuc2lvbnMvS0hSX2ludGVyYWN0aXZpdHkvcGxheWhlYWRcIiwge1xyXG4gICAgICAgIGdldDogKGFuaW1hdGlvbjogSUFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwPy5nZXRDdXJyZW50RnJhbWUoKSA/PyAwKSAvIDYwOyAvLyBmaXhlZCBmYWN0b3IgZm9yIGR1cmF0aW9uLXRvLWZyYW1lcyBjb252ZXJzaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGdldFRhcmdldDogKGFuaW1hdGlvbjogSUFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy92aXJ0dWFsUGxheWhlYWQgLSBUT0RPLCBkbyB3ZSBzdXBwb3J0IHRoaXMgcHJvcGVydHkgaW4gb3VyIGFuaW1hdGlvbnM/IGdldEN1cnJlbnRGcmFtZSAgaXMgdGhlIG9ubHkgbWV0aG9kIHdlIGhhdmUgZm9yIHRoaXMuXHJcbiAgICBBZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL2FuaW1hdGlvbnMve30vZXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS92aXJ0dWFsUGxheWhlYWRcIiwge1xyXG4gICAgICAgIGdldDogKGFuaW1hdGlvbjogSUFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwPy5nZXRDdXJyZW50RnJhbWUoKSA/PyAwKSAvIDYwOyAvLyBmaXhlZCBmYWN0b3IgZm9yIGR1cmF0aW9uLXRvLWZyYW1lcyBjb252ZXJzaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGdldFRhcmdldDogKGFuaW1hdGlvbjogSUFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXA7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBSZWdpc3RlciBmbG93IGdyYXBoIGJsb2Nrcy4gRG8gaXQgaGVyZSBzbyB0aGV5IGFyZSBhdmFpbGFibGUgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXHJcbmFkZFRvQmxvY2tGYWN0b3J5KE5BTUUsIFwiRmxvd0dyYXBoR0xURkRhdGFQcm92aWRlclwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gKGF3YWl0IGltcG9ydChcIi4vS0hSX2ludGVyYWN0aXZpdHkvZmxvd0dyYXBoR0xURkRhdGFQcm92aWRlclwiKSkuRmxvd0dyYXBoR0xURkRhdGFQcm92aWRlcjtcclxufSk7XHJcblxyXG51bnJlZ2lzdGVyR0xURkV4dGVuc2lvbihOQU1FKTtcclxucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUsIHRydWUsIChsb2FkZXIpID0+IG5ldyBLSFJfaW50ZXJhY3Rpdml0eShsb2FkZXIpKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJS0hSSW50ZXJhY3Rpdml0eV9HcmFwaCwgSUtIUkludGVyYWN0aXZpdHlfTm9kZSwgSUtIUkludGVyYWN0aXZpdHlfT3V0cHV0U29ja2V0UmVmZXJlbmNlLCBJS0hSSW50ZXJhY3Rpdml0eV9WYXJpYWJsZSB9IGZyb20gXCJiYWJ5bG9uanMtZ2x0ZjJpbnRlcmZhY2VcIjtcbmltcG9ydCB0eXBlIHsgSUdMVEYgfSBmcm9tIFwiLi4vLi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcbmltcG9ydCB0eXBlIHsgSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmcgfSBmcm9tIFwiLi9kZWNsYXJhdGlvbk1hcHBlclwiO1xuaW1wb3J0IHsgZ2V0TWFwcGluZ0ZvckRlY2xhcmF0aW9uLCBnZXRNYXBwaW5nRm9yRnVsbE9wZXJhdGlvbk5hbWUgfSBmcm9tIFwiLi9kZWNsYXJhdGlvbk1hcHBlclwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcbmltcG9ydCB0eXBlIHsgSVNlcmlhbGl6ZWRGbG93R3JhcGgsIElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2ssIElTZXJpYWxpemVkRmxvd0dyYXBoQ29ubmVjdGlvbiwgSVNlcmlhbGl6ZWRGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL3R5cGVEZWZpbml0aW9uc1wiO1xuaW1wb3J0IHsgUmFuZG9tR1VJRCB9IGZyb20gXCJjb3JlL01pc2MvZ3VpZFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL0Jsb2Nrcy9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhUeXBlcyB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhSaWNoVHlwZXNcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGl2aXR5RXZlbnQge1xuICAgIGV2ZW50SWQ6IHN0cmluZztcbiAgICBldmVudERhdGE/OiB7XG4gICAgICAgIGV2ZW50RGF0YTogYm9vbGVhbjtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICB2YWx1ZT86IGFueTtcbiAgICB9W107XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgY29uc3QgZ2x0ZlR5cGVUb0JhYnlsb25UeXBlOiB7XG4gICAgW2tleTogc3RyaW5nXTogeyBsZW5ndGg6IG51bWJlcjsgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXM7IGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIHwgXCJib29sZWFuXCIgfTtcbn0gPSB7XG4gICAgZmxvYXQ6IHsgbGVuZ3RoOiAxLCBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcy5OdW1iZXIsIGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgYm9vbDogeyBsZW5ndGg6IDEsIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLkJvb2xlYW4sIGVsZW1lbnRUeXBlOiBcImJvb2xlYW5cIiB9LFxuICAgIGZsb2F0MjogeyBsZW5ndGg6IDIsIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjIsIGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgZmxvYXQzOiB7IGxlbmd0aDogMywgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXMuVmVjdG9yMywgZWxlbWVudFR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICBmbG9hdDQ6IHsgbGVuZ3RoOiA0LCBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcy5WZWN0b3I0LCBlbGVtZW50VHlwZTogXCJudW1iZXJcIiB9LFxuICAgIGZsb2F0NHg0OiB7IGxlbmd0aDogMTYsIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCwgZWxlbWVudFR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICBmbG9hdDJ4MjogeyBsZW5ndGg6IDQsIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJELCBlbGVtZW50VHlwZTogXCJudW1iZXJcIiB9LFxuICAgIGZsb2F0M3gzOiB7IGxlbmd0aDogOSwgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXMuTWF0cml4M0QsIGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgaW50OiB7IGxlbmd0aDogMSwgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXMuSW50ZWdlciwgZWxlbWVudFR5cGU6IFwibnVtYmVyXCIgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGl2aXR5R3JhcGhUb0Zsb3dHcmFwaFBhcnNlciB7XG4gICAgLyoqXG4gICAgICogTm90ZSAtIHRoZSBncmFwaCBzaG91bGQgYmUgcmVqZWN0ZWQgaWYgdGhlIHNhbWUgdHlwZSBpcyBkZWZpbmVkIHR3aWNlLlxuICAgICAqIFdlIGN1cnJlbnRseSBkb24ndCB2YWxpZGF0ZSB0aGF0LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3R5cGVzOiB7IGxlbmd0aDogbnVtYmVyOyBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlczsgZWxlbWVudFR5cGU6IFwibnVtYmVyXCIgfCBcImJvb2xlYW5cIiB9W10gPSBbXTtcbiAgICBwcml2YXRlIF9tYXBwaW5nczogeyBmbG93R3JhcGhNYXBwaW5nOiBJR0xURlRvRmxvd0dyYXBoTWFwcGluZzsgZnVsbE9wZXJhdGlvbk5hbWU6IHN0cmluZyB9W10gPSBbXTtcbiAgICBwcml2YXRlIF9zdGF0aWNWYXJpYWJsZXM6IHsgdHlwZTogRmxvd0dyYXBoVHlwZXM7IHZhbHVlOiBhbnlbXSB9W10gPSBbXTtcbiAgICBwcml2YXRlIF9ldmVudHM6IEludGVyYWN0aXZpdHlFdmVudFtdID0gW107XG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxFdmVudHNDb3VudGVyOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX25vZGVzOiB7IGJsb2NrczogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9ja1tdOyBmdWxsT3BlcmF0aW9uTmFtZTogc3RyaW5nIH1bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2ludGVyYWN0aXZpdHlHcmFwaDogSUtIUkludGVyYWN0aXZpdHlfR3JhcGgsXG4gICAgICAgIHByaXZhdGUgX2dsdGY6IElHTFRGLFxuICAgICAgICBwdWJsaWMgX2FuaW1hdGlvblRhcmdldEZwczogbnVtYmVyID0gNjBcbiAgICApIHtcbiAgICAgICAgLy8gc3RhcnQgd2l0aCB0eXBlc1xuICAgICAgICB0aGlzLl9wYXJzZVR5cGVzKCk7XG4gICAgICAgIC8vIGNvbnRpbnVlIHdpdGggZGVjbGFyYXRpb25zXG4gICAgICAgIHRoaXMuX3BhcnNlRGVjbGFyYXRpb25zKCk7XG4gICAgICAgIHRoaXMuX3BhcnNlVmFyaWFibGVzKCk7XG4gICAgICAgIHRoaXMuX3BhcnNlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3BhcnNlTm9kZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFycmF5cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGVzOiB0aGlzLl90eXBlcyxcbiAgICAgICAgICAgIG1hcHBpbmdzOiB0aGlzLl9tYXBwaW5ncyxcbiAgICAgICAgICAgIHN0YXRpY1ZhcmlhYmxlczogdGhpcy5fc3RhdGljVmFyaWFibGVzLFxuICAgICAgICAgICAgZXZlbnRzOiB0aGlzLl9ldmVudHMsXG4gICAgICAgICAgICBub2RlczogdGhpcy5fbm9kZXMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VUeXBlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGgudHlwZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgb2YgdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLnR5cGVzKSB7XG4gICAgICAgICAgICB0aGlzLl90eXBlcy5wdXNoKGdsdGZUeXBlVG9CYWJ5bG9uVHlwZVt0eXBlLnNpZ25hdHVyZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VEZWNsYXJhdGlvbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZGVjbGFyYXRpb24gb2YgdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGhhdmUgdGhlIG1hcHBpbmcgZm9yIHRoaXMgb3BlcmF0aW9uXG4gICAgICAgICAgICBjb25zdCBtYXBwaW5nID0gZ2V0TWFwcGluZ0ZvckRlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcbiAgICAgICAgICAgIC8vIG1hcHBpbmcgaXMgZGVmaW5lZCwgYmVjYXVzZSB3ZSBnZW5lcmF0ZSBhbiBlbXB0eSBtYXBwaW5nIGlmIGl0J3Mgbm90IGZvdW5kXG4gICAgICAgICAgICBpZiAoIW1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gbWFwcGluZyBmb3VuZCBmb3IgZGVjbGFyYXRpb25cIiwgZGVjbGFyYXRpb25dKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIGRlY2xhcmF0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgICAgIGZsb3dHcmFwaE1hcHBpbmc6IG1hcHBpbmcsXG4gICAgICAgICAgICAgICAgZnVsbE9wZXJhdGlvbk5hbWU6IGRlY2xhcmF0aW9uLmV4dGVuc2lvbiA/IGRlY2xhcmF0aW9uLm9wICsgXCI6XCIgKyBkZWNsYXJhdGlvbi5leHRlbnNpb24gOiBkZWNsYXJhdGlvbi5vcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VWYXJpYWJsZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLnZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdmFyaWFibGUgb2YgdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLnZhcmlhYmxlcykge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5fcGFyc2VWYXJpYWJsZSh2YXJpYWJsZSk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRlZmF1bHQgdmFsdWVzIGhlcmVcbiAgICAgICAgICAgIHRoaXMuX3N0YXRpY1ZhcmlhYmxlcy5wdXNoKHBhcnNlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZVZhcmlhYmxlKHZhcmlhYmxlOiBJS0hSSW50ZXJhY3Rpdml0eV9WYXJpYWJsZSwgZGF0YVRyYW5zZm9ybT86ICh2YWx1ZTogYW55LCBwYXJzZXI6IEludGVyYWN0aXZpdHlHcmFwaFRvRmxvd0dyYXBoUGFyc2VyKSA9PiBhbnkpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX3R5cGVzW3ZhcmlhYmxlLnR5cGVdO1xuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyB0eXBlIGZvdW5kIGZvciB2YXJpYWJsZVwiLCB2YXJpYWJsZV0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyB2YXJpYWJsZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFyaWFibGUudmFsdWUubGVuZ3RoICE9PSB0eXBlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJJbnZhbGlkIHZhbHVlIGxlbmd0aCBmb3IgdmFyaWFibGVcIiwgdmFyaWFibGUsIHR5cGVdKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIHZhcmlhYmxlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhcmlhYmxlLnZhbHVlIHx8IFtdO1xuICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlLmZsb3dHcmFwaFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLkJvb2xlYW46XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLkludGVnZXI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKE5hTik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yMjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChOYU4sIE5hTik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yMzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChOYU4sIE5hTiwgTmFOKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5WZWN0b3I0OlxuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4MkQ6XG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWxsKE5hTiwgMCwgNCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuTWF0cml4OlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWxsKE5hTiwgMCwgMTYpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNEOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWxsKE5hTiwgMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgTmFOLCBJbmZpbml0eSwgd2UgbmVlZCB0byBwYXJzZSB0aGUgc3RyaW5nIHRvIHRoZSBvYmplY3QgaXRzZWxmXG4gICAgICAgIGlmICh0eXBlLmVsZW1lbnRUeXBlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB2YWx1ZVswXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFsdWVbMF0gPSBwYXJzZUZsb2F0KHZhbHVlWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlLmZsb3dHcmFwaFR5cGUsIHZhbHVlOiBkYXRhVHJhbnNmb3JtID8gZGF0YVRyYW5zZm9ybSh2YWx1ZSwgdGhpcykgOiB2YWx1ZSB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlRXZlbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5ldmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIHRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5ldmVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZDogSW50ZXJhY3Rpdml0eUV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50SWQ6IGV2ZW50LmlkIHx8IFwiaW50ZXJuYWxFdmVudF9cIiArIHRoaXMuX2ludGVybmFsRXZlbnRzQ291bnRlcisrLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChldmVudC52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWQuZXZlbnREYXRhID0gT2JqZWN0LmtleXMoZXZlbnQudmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudFZhbHVlID0gZXZlbnQudmFsdWVzPy5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gdmFsdWUgZm91bmQgZm9yIGV2ZW50IGtleVwiLCBrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgZXZlbnRzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl90eXBlc1tldmVudFZhbHVlLnR5cGVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyB0eXBlIGZvdW5kIGZvciBldmVudCB2YWx1ZVwiLCBldmVudFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIGV2ZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBldmVudFZhbHVlLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiID8gdGhpcy5fcGFyc2VWYXJpYWJsZShldmVudFZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLmZsb3dHcmFwaFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudERhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKGNvbnZlcnRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZU5vZGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5ub2Rlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGgubm9kZXMpIHtcbiAgICAgICAgICAgIC8vIHNvbWUgdmFsaWRhdGlvblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlLmRlY2xhcmF0aW9uICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIGRlY2xhcmF0aW9uIGZvdW5kIGZvciBub2RlXCIsIG5vZGVdKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIG5vZGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IHRoaXMuX21hcHBpbmdzW25vZGUuZGVjbGFyYXRpb25dO1xuICAgICAgICAgICAgaWYgKCFtYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIG1hcHBpbmcgZm91bmQgZm9yIG5vZGVcIiwgbm9kZV0pO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWFwcGluZy5mbG93R3JhcGhNYXBwaW5nLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gbWFwcGluZy5mbG93R3JhcGhNYXBwaW5nLnZhbGlkYXRpb24obm9kZSwgdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLCB0aGlzLl9nbHRmKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQudmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciB2YWxpZGF0aW5nIGludGVyYWN0aXZpdHkgbm9kZSAke3RoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5kZWNsYXJhdGlvbnM/Lltub2RlLmRlY2xhcmF0aW9uXS5vcH0gLSAke3ZhbGlkYXRpb25SZXN1bHQuZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmxvY2tzOiBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrW10gPSBbXTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBibG9jayhzKSBmb3IgdGhpcyBub2RlIHVzaW5nIHRoZSBtYXBwaW5nXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrVHlwZSBvZiBtYXBwaW5nLmZsb3dHcmFwaE1hcHBpbmcuYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLl9nZXRFbXB0eUJsb2NrKGJsb2NrVHlwZSwgbWFwcGluZy5mdWxsT3BlcmF0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VOb2RlQ29uZmlndXJhdGlvbihub2RlLCBibG9jaywgbWFwcGluZy5mbG93R3JhcGhNYXBwaW5nLCBibG9ja1R5cGUpO1xuICAgICAgICAgICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnB1c2goeyBibG9ja3MsIGZ1bGxPcGVyYXRpb25OYW1lOiBtYXBwaW5nLmZ1bGxPcGVyYXRpb25OYW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0RW1wdHlCbG9jayhjbGFzc05hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nKTogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jayB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bmlxdWVJZDogUmFuZG9tR1VJRCgpLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgZGF0YUlucHV0czogW10sXG4gICAgICAgICAgICBkYXRhT3V0cHV0czogW10sXG4gICAgICAgICAgICBzaWduYWxJbnB1dHM6IFtdLFxuICAgICAgICAgICAgc2lnbmFsT3V0cHV0czogW10sXG4gICAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7fSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZU5vZGVDb25maWd1cmF0aW9uKG5vZGU6IElLSFJJbnRlcmFjdGl2aXR5X05vZGUsIGJsb2NrOiBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrLCBub2RlTWFwcGluZzogSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmcsIGJsb2NrVHlwZTogRmxvd0dyYXBoQmxvY2tOYW1lcyB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBnbHRmQ29uZmlndXJhdGlvbiA9IG5vZGUuY29uZmlndXJhdGlvbjtcbiAgICAgICAgaWYgKGdsdGZDb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBnbHRmQ29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdsdGZQcm9wZXJ0eSA9IGdsdGZDb25maWd1cmF0aW9uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCFnbHRmUHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbmZpZ3VyYXRpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHlNYXBwaW5nID0gbm9kZU1hcHBpbmcuY29uZmlndXJhdGlvbj8uW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgYmVsb25nc1RvQmxvY2sgPSBwcm9wZXJ0eU1hcHBpbmcgJiYgcHJvcGVydHlNYXBwaW5nLnRvQmxvY2sgPyBwcm9wZXJ0eU1hcHBpbmcudG9CbG9jayA9PT0gYmxvY2tUeXBlIDogbm9kZU1hcHBpbmcuYmxvY2tzLmluZGV4T2YoYmxvY2tUeXBlKSA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoYmVsb25nc1RvQmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcHJvcGVydHlNYXBwaW5nPy5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnbHRmUHJvcGVydHk/LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGdsdGZQcm9wZXJ0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJvcGVydHlNYXBwaW5nPy5pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYEludmFsaWQgbm9uLWFycmF5IHZhbHVlIGxlbmd0aDogJHt2YWx1ZS5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlNYXBwaW5nPy5kYXRhVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlNYXBwaW5nLmRhdGFUcmFuc2Zvcm1lcih2YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBmbG93IGdyYXBoIGJsb2NrIGNvbmZpZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmNvbmZpZ1twcm9wZXJ0eU1hcHBpbmc/Lm5hbWUgfHwga2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VOb2RlQ29ubmVjdGlvbnMoY29udGV4dDogSVNlcmlhbGl6ZWRGbG93R3JhcGhDb250ZXh0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY29ycmVzcG9uZGluZyBnbHRmIG5vZGVcbiAgICAgICAgICAgIGNvbnN0IGdsdGZOb2RlID0gdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLm5vZGVzPy5baV07XG4gICAgICAgICAgICBpZiAoIWdsdGZOb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIG5ldmVyIGhhcHBlbiBidXQgbGV0J3Mgc3RpbGwgY2hlY2tcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gbm9kZSBmb3VuZCBmb3IgaW50ZXJhY3Rpdml0eSBub2RlXCIsIHRoaXMuX25vZGVzW2ldXSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbm5lY3Rpb25zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmxvd0dyYXBoQmxvY2tzID0gdGhpcy5fbm9kZXNbaV07XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRNYXBwZXIgPSB0aGlzLl9tYXBwaW5nc1tnbHRmTm9kZS5kZWNsYXJhdGlvbl07XG4gICAgICAgICAgICAvLyB2YWxpZGF0ZVxuICAgICAgICAgICAgaWYgKCFvdXRwdXRNYXBwZXIpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gbWFwcGluZyBmb3VuZCBmb3Igbm9kZVwiLCBnbHRmTm9kZV0pO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZsb3dzRnJvbUdMVEYgPSBnbHRmTm9kZS5mbG93cyB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IGZsb3dzS2V5cyA9IE9iamVjdC5rZXlzKGZsb3dzRnJvbUdMVEYpLnNvcnQoKTsgLy8gc29ydGluZyBhcyBzb21lIG9wZXJhdGlvbnMgcmVxdWlyZSBzb3J0ZWQga2V5c1xuICAgICAgICAgICAgLy8gY29ubmVjdCB0aGUgZmxvd3NcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmxvd0tleSBvZiBmbG93c0tleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG93ID0gZmxvd3NGcm9tR0xURltmbG93S2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG93TWFwcGluZyA9IG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLm91dHB1dHM/LmZsb3dzPy5bZmxvd0tleV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0T3V0TmFtZSA9IGZsb3dNYXBwaW5nPy5uYW1lIHx8IGZsb3dLZXk7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgc2VyaWFsaXplZCBzb2NrZXRcbiAgICAgICAgICAgICAgICBjb25zdCBzb2NrZXRPdXQgPSB0aGlzLl9jcmVhdGVOZXdTb2NrZXRDb25uZWN0aW9uKHNvY2tldE91dE5hbWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gKGZsb3dNYXBwaW5nICYmIGZsb3dNYXBwaW5nLnRvQmxvY2sgJiYgZmxvd0dyYXBoQmxvY2tzLmJsb2Nrcy5maW5kKChiKSA9PiBiLmNsYXNzTmFtZSA9PT0gZmxvd01hcHBpbmcudG9CbG9jaykpIHx8IGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3NbMF07XG4gICAgICAgICAgICAgICAgYmxvY2suc2lnbmFsT3V0cHV0cy5wdXNoKHNvY2tldE91dCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBpbnB1dCBub2RlIG9mIHRoaXMgYmxvY2tcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE5vZGVJZCA9IGZsb3cubm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSW4gPSB0aGlzLl9ub2Rlc1tpbnB1dE5vZGVJZF07XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIG5vZGUgZm91bmQgZm9yIGlucHV0IG5vZGUgaWRcIiwgaW5wdXROb2RlSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbm5lY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIG1hcHBlciBmb3IgdGhlIGlucHV0IG5vZGUgLSBpbiBjYXNlIGl0IG1hcHBlZCB0byBtdWx0aXBsZSBibG9ja3NcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dE1hcHBlciA9IGdldE1hcHBpbmdGb3JGdWxsT3BlcmF0aW9uTmFtZShub2RlSW4uZnVsbE9wZXJhdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghaW5wdXRNYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIG1hcHBpbmcgZm91bmQgZm9yIGlucHV0IG5vZGVcIiwgbm9kZUluXSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZsb3dJbk1hcHBpbmcgPSBpbnB1dE1hcHBlci5pbnB1dHM/LmZsb3dzPy5bZmxvdy5zb2NrZXQgfHwgXCJpblwiXTtcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlNYXBwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFmbG93SW5NYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGlucHV0TWFwcGVyLmlucHV0cz8uZmxvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIltcIikgJiYga2V5LmVuZHNXaXRoKFwiXVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5TWFwcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvd0luTWFwcGluZyA9IGlucHV0TWFwcGVyLmlucHV0cz8uZmxvd3M/LltrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVJblNvY2tldE5hbWUgPSBmbG93SW5NYXBwaW5nID8gKGFycmF5TWFwcGluZyA/IGZsb3dJbk1hcHBpbmcubmFtZS5yZXBsYWNlKFwiJDFcIiwgZmxvdy5zb2NrZXQgfHwgXCJcIikgOiBmbG93SW5NYXBwaW5nLm5hbWUpIDogZmxvdy5zb2NrZXQgfHwgXCJpblwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0QmxvY2sgPSAoZmxvd0luTWFwcGluZyAmJiBmbG93SW5NYXBwaW5nLnRvQmxvY2sgJiYgbm9kZUluLmJsb2Nrcy5maW5kKChiKSA9PiBiLmNsYXNzTmFtZSA9PT0gZmxvd0luTWFwcGluZy50b0Jsb2NrKSkgfHwgbm9kZUluLmJsb2Nrc1swXTtcbiAgICAgICAgICAgICAgICAvLyBpbiBhbGwgb2YgdGhlIGZsb3cgZ3JhcGggaW5wdXQgY29ubmVjdGlvbnMsIGZpbmQgdGhlIG9uZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIHNvY2tldFxuICAgICAgICAgICAgICAgIGxldCBzb2NrZXRJbiA9IGlucHV0QmxvY2suc2lnbmFsSW5wdXRzLmZpbmQoKHMpID0+IHMubmFtZSA9PT0gbm9kZUluU29ja2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNvY2tldCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgdGhlIGlucHV0IHNvY2tldCBmb3IgdGhlIGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoIXNvY2tldEluKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldEluID0gdGhpcy5fY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihub2RlSW5Tb2NrZXROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRCbG9jay5zaWduYWxJbnB1dHMucHVzaChzb2NrZXRJbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3QgdGhlIHNvY2tldHNcbiAgICAgICAgICAgICAgICBzb2NrZXRJbi5jb25uZWN0ZWRQb2ludElkcy5wdXNoKHNvY2tldE91dC51bmlxdWVJZCk7XG4gICAgICAgICAgICAgICAgc29ja2V0T3V0LmNvbm5lY3RlZFBvaW50SWRzLnB1c2goc29ja2V0SW4udW5pcXVlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29ubmVjdCB0aGUgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXNGcm9tR0xURiA9IGdsdGZOb2RlLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlc0tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZXNGcm9tR0xURik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlS2V5IG9mIHZhbHVlc0tleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc0Zyb21HTFRGW3ZhbHVlS2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVNYXBwaW5nID0gb3V0cHV0TWFwcGVyLmZsb3dHcmFwaE1hcHBpbmcuaW5wdXRzPy52YWx1ZXM/Llt2YWx1ZUtleV07XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TWFwcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWVNYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLmlucHV0cz8udmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJbXCIpICYmIGtleS5lbmRzV2l0aChcIl1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU1hcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTWFwcGluZyA9IG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLmlucHV0cz8udmFsdWVzPy5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzb2NrZXRJbk5hbWUgPSB2YWx1ZU1hcHBpbmcgPyAoYXJyYXlNYXBwaW5nID8gdmFsdWVNYXBwaW5nLm5hbWUucmVwbGFjZShcIiQxXCIsIHZhbHVlS2V5KSA6IHZhbHVlTWFwcGluZy5uYW1lKSA6IHZhbHVlS2V5O1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNlcmlhbGl6ZWQgc29ja2V0XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0SW4gPSB0aGlzLl9jcmVhdGVOZXdTb2NrZXRDb25uZWN0aW9uKHNvY2tldEluTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSAodmFsdWVNYXBwaW5nICYmIHZhbHVlTWFwcGluZy50b0Jsb2NrICYmIGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3MuZmluZCgoYikgPT4gYi5jbGFzc05hbWUgPT09IHZhbHVlTWFwcGluZy50b0Jsb2NrKSkgfHwgZmxvd0dyYXBoQmxvY2tzLmJsb2Nrc1swXTtcbiAgICAgICAgICAgICAgICBibG9jay5kYXRhSW5wdXRzLnB1c2goc29ja2V0SW4pO1xuICAgICAgICAgICAgICAgIGlmICgodmFsdWUgYXMgSUtIUkludGVyYWN0aXZpdHlfVmFyaWFibGUpLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udmVydGVkVmFsdWUgPSB0aGlzLl9wYXJzZVZhcmlhYmxlKHZhbHVlIGFzIElLSFJJbnRlcmFjdGl2aXR5X1ZhcmlhYmxlLCB2YWx1ZU1hcHBpbmcgJiYgdmFsdWVNYXBwaW5nLmRhdGFUcmFuc2Zvcm1lcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuX2Nvbm5lY3Rpb25WYWx1ZXNbc29ja2V0SW4udW5pcXVlSWRdID0gY29udmVydGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKHZhbHVlIGFzIElLSFJJbnRlcmFjdGl2aXR5X091dHB1dFNvY2tldFJlZmVyZW5jZSkubm9kZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlT3V0SWQgPSAodmFsdWUgYXMgSUtIUkludGVyYWN0aXZpdHlfT3V0cHV0U29ja2V0UmVmZXJlbmNlKS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlT3V0U29ja2V0TmFtZSA9ICh2YWx1ZSBhcyBJS0hSSW50ZXJhY3Rpdml0eV9PdXRwdXRTb2NrZXRSZWZlcmVuY2UpLnNvY2tldCB8fCBcInZhbHVlXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVPdXQgPSB0aGlzLl9ub2Rlc1tub2RlT3V0SWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBub2RlIGZvdW5kIGZvciBvdXRwdXQgc29ja2V0IHJlZmVyZW5jZVwiLCB2YWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbm5lY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dE1hcHBlciA9IGdldE1hcHBpbmdGb3JGdWxsT3BlcmF0aW9uTmFtZShub2RlT3V0LmZ1bGxPcGVyYXRpb25OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvdXRwdXRNYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBtYXBwaW5nIGZvdW5kIGZvciBvdXRwdXQgc29ja2V0IHJlZmVyZW5jZVwiLCB2YWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbm5lY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZU1hcHBpbmcgPSBvdXRwdXRNYXBwZXIub3V0cHV0cz8udmFsdWVzPy5bbm9kZU91dFNvY2tldE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyYXlNYXBwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGFycmF5IG1hcHBpbmcgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlTWFwcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBhIHZhbHVlIG1hcHBpbmcgdGhhdCBoYXMgYW4gYXJyYXkgbWFwcGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb3V0cHV0TWFwcGVyLm91dHB1dHM/LnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIltcIikgJiYga2V5LmVuZHNXaXRoKFwiXVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU1hcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU1hcHBpbmcgPSBvdXRwdXRNYXBwZXIub3V0cHV0cz8udmFsdWVzPy5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0T3V0TmFtZSA9IHZhbHVlTWFwcGluZyA/IChhcnJheU1hcHBpbmcgPyB2YWx1ZU1hcHBpbmcubmFtZS5yZXBsYWNlKFwiJDFcIiwgbm9kZU91dFNvY2tldE5hbWUpIDogdmFsdWVNYXBwaW5nPy5uYW1lKSA6IG5vZGVPdXRTb2NrZXROYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRCbG9jayA9ICh2YWx1ZU1hcHBpbmcgJiYgdmFsdWVNYXBwaW5nLnRvQmxvY2sgJiYgbm9kZU91dC5ibG9ja3MuZmluZCgoYikgPT4gYi5jbGFzc05hbWUgPT09IHZhbHVlTWFwcGluZy50b0Jsb2NrKSkgfHwgbm9kZU91dC5ibG9ja3NbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBzb2NrZXRPdXQgPSBvdXRCbG9jay5kYXRhT3V0cHV0cy5maW5kKChzKSA9PiBzLm5hbWUgPT09IHNvY2tldE91dE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc29ja2V0IGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNvY2tldE91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0T3V0ID0gdGhpcy5fY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihzb2NrZXRPdXROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEJsb2NrLmRhdGFPdXRwdXRzLnB1c2goc29ja2V0T3V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25uZWN0IHRoZSBzb2NrZXRzXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldEluLmNvbm5lY3RlZFBvaW50SWRzLnB1c2goc29ja2V0T3V0LnVuaXF1ZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0T3V0LmNvbm5lY3RlZFBvaW50SWRzLnB1c2goc29ja2V0SW4udW5pcXVlSWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJJbnZhbGlkIHZhbHVlIGZvciB2YWx1ZSBjb25uZWN0aW9uXCIsIHZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGludGVyIGJsb2NrIGNvbm5lY3Rpb25zXG4gICAgICAgICAgICBpZiAob3V0cHV0TWFwcGVyLmZsb3dHcmFwaE1hcHBpbmcuaW50ZXJCbG9ja0Nvbm5lY3RvcnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbm5lY3RvciBvZiBvdXRwdXRNYXBwZXIuZmxvd0dyYXBoTWFwcGluZy5pbnRlckJsb2NrQ29ubmVjdG9ycykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGNvbm5lY3Rvci5pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gY29ubmVjdG9yLm91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWYXJpYWJsZSA9IGNvbm5lY3Rvci5pc1ZhcmlhYmxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0Rmxvd0dyYXBoTm9kZXMoaW5wdXQsIG91dHB1dCwgZmxvd0dyYXBoQmxvY2tzLmJsb2Nrc1tjb25uZWN0b3IuaW5wdXRCbG9ja0luZGV4XSwgZmxvd0dyYXBoQmxvY2tzLmJsb2Nrc1tjb25uZWN0b3Iub3V0cHV0QmxvY2tJbmRleF0sIGlzVmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLmV4dHJhUHJvY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGguZGVjbGFyYXRpb25zPy5bZ2x0Zk5vZGUuZGVjbGFyYXRpb25dO1xuICAgICAgICAgICAgICAgIGlmICghZGVjbGFyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIGRlY2xhcmF0aW9uIGZvdW5kIGZvciBleHRyYSBwcm9jZXNzb3JcIiwgZ2x0Zk5vZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbm5lY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmbG93R3JhcGhCbG9ja3MuYmxvY2tzID0gb3V0cHV0TWFwcGVyLmZsb3dHcmFwaE1hcHBpbmcuZXh0cmFQcm9jZXNzb3IoXG4gICAgICAgICAgICAgICAgICAgIGdsdGZOb2RlLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0TWFwcGVyLmZsb3dHcmFwaE1hcHBpbmcsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3MsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dsdGZcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihuYW1lOiBzdHJpbmcsIGlzT3V0cHV0PzogYm9vbGVhbik6IElTZXJpYWxpemVkRmxvd0dyYXBoQ29ubmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bmlxdWVJZDogUmFuZG9tR1VJRCgpLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIF9jb25uZWN0aW9uVHlwZTogaXNPdXRwdXQgPyBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5PdXRwdXQgOiBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5JbnB1dCxcbiAgICAgICAgICAgIGNvbm5lY3RlZFBvaW50SWRzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb25uZWN0Rmxvd0dyYXBoTm9kZXMoaW5wdXQ6IHN0cmluZywgb3V0cHV0OiBzdHJpbmcsIHNlcmlhbGl6ZWRJbnB1dDogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaywgc2VyaWFsaXplZE91dHB1dDogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaywgaXNWYXJpYWJsZT86IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaW5wdXRBcnJheSA9IGlzVmFyaWFibGUgPyBzZXJpYWxpemVkSW5wdXQuZGF0YUlucHV0cyA6IHNlcmlhbGl6ZWRJbnB1dC5zaWduYWxJbnB1dHM7XG4gICAgICAgIGNvbnN0IG91dHB1dEFycmF5ID0gaXNWYXJpYWJsZSA/IHNlcmlhbGl6ZWRPdXRwdXQuZGF0YU91dHB1dHMgOiBzZXJpYWxpemVkT3V0cHV0LnNpZ25hbE91dHB1dHM7XG4gICAgICAgIGNvbnN0IGlucHV0Q29ubmVjdGlvbiA9IGlucHV0QXJyYXkuZmluZCgocykgPT4gcy5uYW1lID09PSBpbnB1dCkgfHwgdGhpcy5fY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihpbnB1dCk7XG4gICAgICAgIGNvbnN0IG91dHB1dENvbm5lY3Rpb24gPSBvdXRwdXRBcnJheS5maW5kKChzKSA9PiBzLm5hbWUgPT09IG91dHB1dCkgfHwgdGhpcy5fY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihvdXRwdXQsIHRydWUpO1xuICAgICAgICAvLyBvZiBub3QgZm91bmQgYWRkIGl0IHRvIHRoZSBhcnJheVxuICAgICAgICBpZiAoIWlucHV0QXJyYXkuZmluZCgocykgPT4gcy5uYW1lID09PSBpbnB1dCkpIHtcbiAgICAgICAgICAgIGlucHV0QXJyYXkucHVzaChpbnB1dENvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3V0cHV0QXJyYXkuZmluZCgocykgPT4gcy5uYW1lID09PSBvdXRwdXQpKSB7XG4gICAgICAgICAgICBvdXRwdXRBcnJheS5wdXNoKG91dHB1dENvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbm5lY3QgdGhlIHNvY2tldHNcbiAgICAgICAgaW5wdXRDb25uZWN0aW9uLmNvbm5lY3RlZFBvaW50SWRzLnB1c2gob3V0cHV0Q29ubmVjdGlvbi51bmlxdWVJZCk7XG4gICAgICAgIG91dHB1dENvbm5lY3Rpb24uY29ubmVjdGVkUG9pbnRJZHMucHVzaChpbnB1dENvbm5lY3Rpb24udW5pcXVlSWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWYXJpYWJsZU5hbWUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gXCJzdGF0aWNWYXJpYWJsZV9cIiArIGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXJpYWxpemVUb0Zsb3dHcmFwaCgpOiBJU2VyaWFsaXplZEZsb3dHcmFwaCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQ6IElTZXJpYWxpemVkRmxvd0dyYXBoQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBSYW5kb21HVUlEKCksXG4gICAgICAgICAgICBfdXNlclZhcmlhYmxlczoge30sXG4gICAgICAgICAgICBfY29ubmVjdGlvblZhbHVlczoge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3BhcnNlTm9kZUNvbm5lY3Rpb25zKGNvbnRleHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0YXRpY1ZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLl9zdGF0aWNWYXJpYWJsZXNbaV07XG4gICAgICAgICAgICBjb250ZXh0Ll91c2VyVmFyaWFibGVzW3RoaXMuZ2V0VmFyaWFibGVOYW1lKGkpXSA9IHZhcmlhYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWxsQmxvY2tzID0gdGhpcy5fbm9kZXMucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwuYmxvY2tzKSwgW10gYXMgSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9ja1tdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmlnaHRIYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICBhbGxCbG9ja3MsXG4gICAgICAgICAgICBleGVjdXRpb25Db250ZXh0czogW2NvbnRleHRdLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==