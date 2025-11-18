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
        const uniqueId = (0,core_Misc_guid__WEBPACK_IMPORTED_MODULE_2__.RandomGUID)();
        const dataInputs = [];
        const dataOutputs = [];
        const signalInputs = [];
        const signalOutputs = [];
        const config = {};
        const metadata = {};
        return {
            uniqueId,
            className,
            dataInputs,
            dataOutputs,
            signalInputs,
            signalOutputs,
            config,
            type,
            metadata,
        };
    }
    _parseNodeConfiguration(node, block, nodeMapping, blockType) {
        const configuration = block.config;
        if (node.configuration) {
            const keys = Object.keys(node.configuration);
            for (const key of keys) {
                const value = node.configuration?.[key];
                // value is always an array, never a number or string
                if (!value) {
                    core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(["No value found for node configuration", key]);
                    throw new Error("Error parsing node configuration");
                }
                const configMapping = nodeMapping.configuration?.[key];
                const belongsToBlock = configMapping && configMapping.toBlock ? configMapping.toBlock === blockType : nodeMapping.blocks.indexOf(blockType) === 0;
                if (belongsToBlock) {
                    // get the right name for the configuration key
                    const configKey = configMapping?.name || key;
                    if ((!value || typeof value.value === "undefined") && typeof configMapping?.defaultValue !== "undefined") {
                        configuration[configKey] = {
                            value: configMapping.defaultValue,
                        };
                    }
                    else if (value.value.length >= 0) {
                        // supporting int[] and int/boolean/string
                        configuration[configKey] = {
                            value: value.value.length === 1 ? value.value[0] : value.value,
                        };
                    }
                    else {
                        core_Misc_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warn(["Invalid value for node configuration", value]);
                    }
                    // make sure we transform the data if needed
                    if (configMapping && configMapping.dataTransformer) {
                        configuration[configKey].value = configMapping.dataTransformer([configuration[configKey].value], this)[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyc19kaXN0X2dsVEZfMl8wX0V4dGVuc2lvbnNfS0hSX2ludGVyYWN0aXZpdHlfanMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUlBO0FBRUE7QUFPQTtBQUVBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFvQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBaUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBbkRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7QUFFQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTs7Ozs7OztBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUdBOzs7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7Ozs7O0FBTUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUdBO0FBR0E7QUEyQ0E7Ozs7QUFJQTtBQUNBO0FBdUJBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBOUJBOztBQUVBO0FBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTZCQTs7QUFFQTtBQUNBO0FBMEJBO0FBR0E7QUFBQTtBQTVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFNQTtBQUVBO0FBRUE7QUFHQTtBQXdDQTs7Ozs7QUFLQTtBQUNBO0FBNkRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWhGQTs7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFRQTs7OztBQUlBO0FBQ0E7QUFFQTtBQTRCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqZEE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBRUE7QUFJQTtBQWdDQTs7Ozs7QUFLQTtBQUNBO0FBbUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBckJBOzs7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZMQTs7OztBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQWtCQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFWQTtBQUlBO0FBSUE7QUF6Q0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQTRCQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBSUE7OztBQUdBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBR0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFnQkE7QUFmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUdBO0FBRUE7OztBQUdBO0FBQ0E7QUF5QkE7QUFDQTtBQVBBOzs7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFHQTs7OztBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUErQkE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFvQkE7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUdBO0FBbUJBOzs7O0FBSUE7QUFDQTtBQXlCQTtBQW5CQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUVBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBQUE7O0FBTUE7OztBQUdBO0FBQ0E7QUFtQ0E7QUFqQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFhQTs7QUFFQTtBQUNBO0FBWUE7OztBQUdBO0FBQ0E7QUFBQTtBQWZBOztBQUVBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUVBO0FBZ0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvQmxvY2tzL2Zsb3dHcmFwaEJsb2NrRmFjdG9yeS50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGgudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoQXNzZXRzQ29udGV4dC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaEJsb2NrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaENvbm5lY3Rpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoQ29udGV4dC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhDb29yZGluYXRvci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhEYXRhQ29ubmVjdGlvbi50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhFdmVudEJsb2NrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbC50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhMb2dnZXIudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvZmxvd0dyYXBoUGFyc2VyLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL2Zsb3dHcmFwaFNjZW5lRXZlbnRDb29yZGluYXRvci50cyIsImZpbGU6Ly8vL2hvbWUvdTAwMDAvYWtuc2hyL0JhYnlsb24uanMvcGFja2FnZXMvZGV2L2NvcmUvc3JjL0Zsb3dHcmFwaC9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uLnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvY29yZS9zcmMvRmxvd0dyYXBoL3NlcmlhbGl6YXRpb24udHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9jb3JlL3NyYy9GbG93R3JhcGgvdXRpbHMudHMiLCJmaWxlOi8vLy9ob21lL3UwMDAwL2FrbnNoci9CYWJ5bG9uLmpzL3BhY2thZ2VzL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzIuMC9FeHRlbnNpb25zL0tIUl9pbnRlcmFjdGl2aXR5LnRzIiwiZmlsZTovLy8vaG9tZS91MDAwMC9ha25zaHIvQmFieWxvbi5qcy9wYWNrYWdlcy9kZXYvbG9hZGVycy9zcmMvZ2xURi8yLjAvRXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS9pbnRlcmFjdGl2aXR5R3JhcGhQYXJzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuLi9mbG93R3JhcGhCbG9ja1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcblxuLyoqXG4gKiBBbnkgZXh0ZXJuYWwgbW9kdWxlIHRoYXQgd2lzaGVzIHRvIGFkZCBhIG5ldyBibG9jayB0byB0aGUgZmxvdyBncmFwaCBjYW4gYWRkIHRvIHRoaXMgb2JqZWN0IHVzaW5nIHRoZSBoZWxwZXIgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IEN1c3RvbUJsb2NrczogUmVjb3JkPHN0cmluZywgKCkgPT4gUHJvbWlzZTx0eXBlb2YgRmxvd0dyYXBoQmxvY2s+PiA9IHt9O1xuXG4vKipcbiAqIElmIHlvdSB3YW50IHRvIGFkZCBhIG5ldyBibG9jayB0byB0aGUgYmxvY2sgZmFjdG9yeSwgeW91IHNob3VsZCB1c2UgdGhpcyBmdW5jdGlvbi5cbiAqIFBsZWFzZSBiZSBzdXJlIHRvIGNob29zZSBhIHVuaXF1ZSBuYW1lIGFuZCBkZWZpbmUgdGhlIHJlc3BvbnNpYmxlIG1vZHVsZS5cbiAqIEBwYXJhbSBtb2R1bGUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgYmxvY2tcbiAqIEBwYXJhbSBibG9ja05hbWUgdGhlIG5hbWUgb2YgdGhlIGJsb2NrLiBUaGlzIHNob3VsZCBiZSB1bmlxdWUuXG4gKiBAcGFyYW0gZmFjdG9yeSBhbiBhc3luYyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBibG9ja1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9CbG9ja0ZhY3RvcnkobW9kdWxlOiBzdHJpbmcsIGJsb2NrTmFtZTogc3RyaW5nLCBmYWN0b3J5OiAoKSA9PiBQcm9taXNlPHR5cGVvZiBGbG93R3JhcGhCbG9jaz4pOiB2b2lkIHtcbiAgICBDdXN0b21CbG9ja3NbYCR7bW9kdWxlfS8ke2Jsb2NrTmFtZX1gXSA9IGZhY3Rvcnk7XG59XG5cbi8qKlxuICogYSBmdW5jdGlvbiB0byBnZXQgYSBmYWN0b3J5IGZ1bmN0aW9uIGZvciBhIGJsb2NrLlxuICogQHBhcmFtIGJsb2NrTmFtZSB0aGUgYmxvY2sgbmFtZSB0byBpbml0aWFsaXplLiBJZiB0aGUgYmxvY2sgY29tZXMgZnJvbSBhbiBleHRlcm5hbCBtb2R1bGUsIHRoZSBuYW1lIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0IFwibW9kdWxlL2Jsb2NrTmFtZVwiXG4gKiBAcmV0dXJucyBhbiBhc3luYyBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gdGhlIGJsb2NrIGNsYXNzIHdoZW4gY2FsbGVkLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tGYWN0b3J5KGJsb2NrTmFtZTogRmxvd0dyYXBoQmxvY2tOYW1lcyB8IHN0cmluZyk6ICgpID0+IFByb21pc2U8dHlwZW9mIEZsb3dHcmFwaEJsb2NrPiB7XG4gICAgc3dpdGNoIChibG9ja05hbWUpIHtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlBsYXlBbmltYXRpb246XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0FuaW1hdGlvbi9mbG93R3JhcGhQbGF5QW5pbWF0aW9uQmxvY2tcIikpLkZsb3dHcmFwaFBsYXlBbmltYXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlN0b3BBbmltYXRpb246XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0FuaW1hdGlvbi9mbG93R3JhcGhTdG9wQW5pbWF0aW9uQmxvY2tcIikpLkZsb3dHcmFwaFN0b3BBbmltYXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlBhdXNlQW5pbWF0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9BbmltYXRpb24vZmxvd0dyYXBoUGF1c2VBbmltYXRpb25CbG9ja1wiKSkuRmxvd0dyYXBoUGF1c2VBbmltYXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlZhbHVlSW50ZXJwb2xhdGlvbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQW5pbWF0aW9uL2Zsb3dHcmFwaEludGVycG9sYXRpb25CbG9ja1wiKSkuRmxvd0dyYXBoSW50ZXJwb2xhdGlvbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2NlbmVSZWFkeUV2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaFNjZW5lUmVhZHlFdmVudEJsb2NrXCIpKS5GbG93R3JhcGhTY2VuZVJlYWR5RXZlbnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNjZW5lVGlja0V2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaFNjZW5lVGlja0V2ZW50QmxvY2tcIikpLkZsb3dHcmFwaFNjZW5lVGlja0V2ZW50QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TZW5kQ3VzdG9tRXZlbnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXZlbnQvZmxvd0dyYXBoU2VuZEN1c3RvbUV2ZW50QmxvY2tcIikpLkZsb3dHcmFwaFNlbmRDdXN0b21FdmVudEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUmVjZWl2ZUN1c3RvbUV2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaFJlY2VpdmVDdXN0b21FdmVudEJsb2NrXCIpKS5GbG93R3JhcGhSZWNlaXZlQ3VzdG9tRXZlbnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk1lc2hQaWNrRXZlbnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXZlbnQvZmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrXCIpKS5GbG93R3JhcGhNZXNoUGlja0V2ZW50QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5FOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhFQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5QSTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoUGlCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkluZjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoSW5mQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5OYU46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaE5hTkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUmFuZG9tOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhSYW5kb21CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkFkZDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQWRkQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TdWJ0cmFjdDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoU3VidHJhY3RCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk11bHRpcGx5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhNdWx0aXBseUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRGl2aWRlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhEaXZpZGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkFiczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQWJzQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaWduOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhTaWduQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5UcnVuYzpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoVHJ1bmNCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkZsb29yOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhGbG9vckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2VpbDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQ2VpbEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUm91bmQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFJvdW5kQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5GcmFjdGlvbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRnJhY3Rpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk5lZ2F0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhOZWdhdGlvbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTW9kdWxvOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhNb2R1bG9CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk1pbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTWluQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaE1heEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2xhbXA6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaENsYW1wQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TYXR1cmF0ZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoU2F0dXJhdGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk1hdGhJbnRlcnBvbGF0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhNYXRoSW50ZXJwb2xhdGlvbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXF1YWxpdHk6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEVxdWFsaXR5QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZXNzVGhhbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTGVzc1RoYW5CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkxlc3NUaGFuT3JFcXVhbDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTGVzc1RoYW5PckVxdWFsQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5HcmVhdGVyVGhhbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoR3JlYXRlclRoYW5CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkdyZWF0ZXJUaGFuT3JFcXVhbDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoR3JlYXRlclRoYW5PckVxdWFsQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Jc05hTjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoSXNOYW5CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLklzSW5maW5pdHk6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaElzSW5maW5pdHlCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRlZ1RvUmFkOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhEZWdUb1JhZEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUmFkVG9EZWc6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFJhZFRvRGVnQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TaW46XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFNpbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29zOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhDb3NCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlRhbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoVGFuQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Bc2luOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhBc2luQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BY29zOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhBY29zQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BdGFuOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhBdGFuQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BdGFuMjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQXRhbjJCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNpbmg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFNpbmhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvc2g6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaENvc2hCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlRhbmg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFRhbmhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkFzaW5oOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhBc2luaEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQWNvc2g6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEFjb3NoQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5BdGFuaDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQXRhbmhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkV4cG9uZW50aWFsOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhFeHBCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkxvZzpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTG9nQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2cyOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhMb2cyQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Mb2cxMDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTG9nMTBCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNxdWFyZVJvb3Q6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFNxdWFyZVJvb3RCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlBvd2VyOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhQb3dlckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ3ViZVJvb3Q6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEN1YmVSb290QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlQW5kOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhCaXR3aXNlQW5kQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5CaXR3aXNlT3I6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEJpdHdpc2VPckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZU5vdDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQml0d2lzZU5vdEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZVhvcjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQml0d2lzZVhvckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZUxlZnRTaGlmdDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQml0d2lzZUxlZnRTaGlmdEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQml0d2lzZVJpZ2h0U2hpZnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEJpdHdpc2VSaWdodFNoaWZ0QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZW5ndGg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaExlbmd0aEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTm9ybWFsaXplOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhOb3JtYWxpemVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRvdDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoRG90QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Dcm9zczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQ3Jvc3NCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlJvdGF0ZTJEOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhSb3RhdGUyREJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUm90YXRlM0Q6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaFZlY3Rvck1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFJvdGF0ZTNEQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5UcmFuc3Bvc2U6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaFRyYW5zcG9zZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRGV0ZXJtaW5hbnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaERldGVybWluYW50QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnZlcnRNYXRyaXg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaEludmVydE1hdHJpeEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuTWF0cml4TXVsdGlwbGljYXRpb246XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdHJpeE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaE1hdHJpeE11bHRpcGxpY2F0aW9uQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5CcmFuY2g6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaEJyYW5jaEJsb2NrXCIpKS5GbG93R3JhcGhCcmFuY2hCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlNldERlbGF5OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhTZXREZWxheUJsb2NrXCIpKS5GbG93R3JhcGhTZXREZWxheUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ2FuY2VsRGVsYXk6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaENhbmNlbERlbGF5QmxvY2tcIikpLkZsb3dHcmFwaENhbmNlbERlbGF5QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5DYWxsQ291bnRlcjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoQ291bnRlckJsb2NrXCIpKS5GbG93R3JhcGhDYWxsQ291bnRlckJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRGVib3VuY2U6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaERlYm91bmNlQmxvY2tcIikpLkZsb3dHcmFwaERlYm91bmNlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5UaHJvdHRsZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoVGhyb3R0bGVCbG9ja1wiKSkuRmxvd0dyYXBoVGhyb3R0bGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRvTjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoRG9OQmxvY2tcIikpLkZsb3dHcmFwaERvTkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRmxpcEZsb3A6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaEZsaXBGbG9wQmxvY2tcIikpLkZsb3dHcmFwaEZsaXBGbG9wQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Gb3JMb29wOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhGb3JMb29wQmxvY2tcIikpLkZsb3dHcmFwaEZvckxvb3BCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk11bHRpR2F0ZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQ29udHJvbEZsb3cvZmxvd0dyYXBoTXVsdGlHYXRlQmxvY2tcIikpLkZsb3dHcmFwaE11bHRpR2F0ZUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2VxdWVuY2U6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaFNlcXVlbmNlQmxvY2tcIikpLkZsb3dHcmFwaFNlcXVlbmNlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Td2l0Y2g6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaFN3aXRjaEJsb2NrXCIpKS5GbG93R3JhcGhTd2l0Y2hCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLldhaXRBbGw6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0NvbnRyb2xGbG93L2Zsb3dHcmFwaFdhaXRBbGxCbG9ja1wiKSkuRmxvd0dyYXBoV2FpdEFsbEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuV2hpbGVMb29wOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9Db250cm9sRmxvdy9mbG93R3JhcGhXaGlsZUxvb3BCbG9ja1wiKSkuRmxvd0dyYXBoV2hpbGVMb29wQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db25zb2xlTG9nOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V4ZWN1dGlvbi9mbG93R3JhcGhDb25zb2xlTG9nQmxvY2tcIikpLkZsb3dHcmFwaENvbnNvbGVMb2dCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbmRpdGlvbmFsOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvZmxvd0dyYXBoQ29uZGl0aW9uYWxEYXRhQmxvY2tcIikpLkZsb3dHcmFwaENvbmRpdGlvbmFsRGF0YUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29uc3RhbnQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9mbG93R3JhcGhDb25zdGFudEJsb2NrXCIpKS5GbG93R3JhcGhDb25zdGFudEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJhbnNmb3JtQ29vcmRpbmF0ZXNTeXN0ZW06XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9mbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc1N5c3RlbUJsb2NrXCIpKS5GbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc1N5c3RlbUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0QXNzZXQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9mbG93R3JhcGhHZXRBc3NldEJsb2NrXCIpKS5GbG93R3JhcGhHZXRBc3NldEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuR2V0UHJvcGVydHk6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9mbG93R3JhcGhHZXRQcm9wZXJ0eUJsb2NrXCIpKS5GbG93R3JhcGhHZXRQcm9wZXJ0eUJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuU2V0UHJvcGVydHk6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL2Zsb3dHcmFwaFNldFByb3BlcnR5QmxvY2tcIikpLkZsb3dHcmFwaFNldFByb3BlcnR5QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5HZXRWYXJpYWJsZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL2Zsb3dHcmFwaEdldFZhcmlhYmxlQmxvY2tcIikpLkZsb3dHcmFwaEdldFZhcmlhYmxlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5TZXRWYXJpYWJsZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vZmxvd0dyYXBoU2V0VmFyaWFibGVCbG9ja1wiKSkuRmxvd0dyYXBoU2V0VmFyaWFibGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkpzb25Qb2ludGVyUGFyc2VyOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVHJhbnNmb3JtZXJzL2Zsb3dHcmFwaEpzb25Qb2ludGVyUGFyc2VyQmxvY2tcIikpLkZsb3dHcmFwaEpzb25Qb2ludGVyUGFyc2VyQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5MZWFkaW5nWmVyb3M6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaExlYWRpbmdaZXJvc0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJhaWxpbmdaZXJvczpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoVHJhaWxpbmdaZXJvc0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuT25lQml0c0NvdW50ZXI6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhCbG9ja3NcIikpLkZsb3dHcmFwaE9uZUJpdHNDb3VudGVyQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lVmVjdG9yMjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aENvbWJpbmVFeHRyYWN0QmxvY2tzXCIpKS5GbG93R3JhcGhDb21iaW5lVmVjdG9yMkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29tYmluZVZlY3RvcjM6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhDb21iaW5lRXh0cmFjdEJsb2Nrc1wiKSkuRmxvd0dyYXBoQ29tYmluZVZlY3RvcjNCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbWJpbmVWZWN0b3I0OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3NcIikpLkZsb3dHcmFwaENvbWJpbmVWZWN0b3I0QmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Db21iaW5lTWF0cml4OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3NcIikpLkZsb3dHcmFwaENvbWJpbmVNYXRyaXhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RWZWN0b3IyOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRoQ29tYmluZUV4dHJhY3RCbG9ja3NcIikpLkZsb3dHcmFwaEV4dHJhY3RWZWN0b3IyQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5FeHRyYWN0VmVjdG9yMzpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0aENvbWJpbmVFeHRyYWN0QmxvY2tzXCIpKS5GbG93R3JhcGhFeHRyYWN0VmVjdG9yM0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuRXh0cmFjdFZlY3RvcjQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhDb21iaW5lRXh0cmFjdEJsb2Nrc1wiKSkuRmxvd0dyYXBoRXh0cmFjdFZlY3RvcjRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkV4dHJhY3RNYXRyaXg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9NYXRoL2Zsb3dHcmFwaE1hdGhDb21iaW5lRXh0cmFjdEJsb2Nrc1wiKSkuRmxvd0dyYXBoRXh0cmFjdE1hdHJpeEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuVHJhbnNmb3JtVmVjdG9yOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhUcmFuc2Zvcm1CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLlRyYW5zZm9ybUNvb3JkaW5hdGVzOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhUcmFuc2Zvcm1Db29yZGluYXRlc0Jsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuQ29uanVnYXRlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhDb25qdWdhdGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkFuZ2xlQmV0d2VlbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoQW5nbGVCZXR3ZWVuQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5RdWF0ZXJuaW9uRnJvbUF4aXNBbmdsZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoVmVjdG9yTWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoUXVhdGVybmlvbkZyb21BeGlzQW5nbGVCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkF4aXNBbmdsZUZyb21RdWF0ZXJuaW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhBeGlzQW5nbGVGcm9tUXVhdGVybmlvbkJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUXVhdGVybmlvbkZyb21EaXJlY3Rpb25zOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhWZWN0b3JNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhRdWF0ZXJuaW9uRnJvbURpcmVjdGlvbnNCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLk1hdHJpeERlY29tcG9zZTpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL01hdGgvZmxvd0dyYXBoTWF0cml4TWF0aEJsb2Nrc1wiKSkuRmxvd0dyYXBoTWF0cml4RGVjb21wb3NlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5NYXRyaXhDb21wb3NlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvTWF0aC9mbG93R3JhcGhNYXRyaXhNYXRoQmxvY2tzXCIpKS5GbG93R3JhcGhNYXRyaXhDb21wb3NlQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Cb29sZWFuVG9GbG9hdDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhUeXBlVG9UeXBlQmxvY2tzXCIpKS5GbG93R3JhcGhCb29sZWFuVG9GbG9hdDtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkJvb2xlYW5Ub0ludDpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhUeXBlVG9UeXBlQmxvY2tzXCIpKS5GbG93R3JhcGhCb29sZWFuVG9JbnQ7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9hdFRvQm9vbGVhbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhUeXBlVG9UeXBlQmxvY2tzXCIpKS5GbG93R3JhcGhGbG9hdFRvQm9vbGVhbjtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkludFRvQm9vbGVhbjpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9EYXRhL1RyYW5zZm9ybWVycy9mbG93R3JhcGhUeXBlVG9UeXBlQmxvY2tzXCIpKS5GbG93R3JhcGhJbnRUb0Jvb2xlYW47XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5JbnRUb0Zsb2F0OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVHJhbnNmb3JtZXJzL2Zsb3dHcmFwaFR5cGVUb1R5cGVCbG9ja3NcIikpLkZsb3dHcmFwaEludFRvRmxvYXQ7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5GbG9hdFRvSW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVHJhbnNmb3JtZXJzL2Zsb3dHcmFwaFR5cGVUb1R5cGVCbG9ja3NcIikpLkZsb3dHcmFwaEZsb2F0VG9JbnQ7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5FYXNpbmc6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRXhlY3V0aW9uL0FuaW1hdGlvbi9mbG93R3JhcGhFYXNpbmdCbG9ja1wiKSkuRmxvd0dyYXBoRWFzaW5nQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5CZXppZXJDdXJ2ZUVhc2luZzpcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoKSA9PiAoYXdhaXQgaW1wb3J0KFwiLi9FeGVjdXRpb24vQW5pbWF0aW9uL2Zsb3dHcmFwaEJlemllckN1cnZlRWFzaW5nQmxvY2tcIikpLkZsb3dHcmFwaEJlemllckN1cnZlRWFzaW5nQmxvY2s7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQmxvY2tOYW1lcy5Qb2ludGVyT3ZlckV2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaFBvaW50ZXJPdmVyRXZlbnRCbG9ja1wiKSkuRmxvd0dyYXBoUG9pbnRlck92ZXJFdmVudEJsb2NrO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEJsb2NrTmFtZXMuUG9pbnRlck91dEV2ZW50OlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0V2ZW50L2Zsb3dHcmFwaFBvaW50ZXJPdXRFdmVudEJsb2NrXCIpKS5GbG93R3JhcGhQb2ludGVyT3V0RXZlbnRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvbnRleHQ6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9VdGlscy9mbG93R3JhcGhDb250ZXh0QmxvY2tcIikpLkZsb3dHcmFwaENvbnRleHRCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkFycmF5SW5kZXg6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9VdGlscy9mbG93R3JhcGhBcnJheUluZGV4QmxvY2tcIikpLkZsb3dHcmFwaEFycmF5SW5kZXhCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkNvZGVFeGVjdXRpb246XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9VdGlscy9mbG93R3JhcGhDb2RlRXhlY3V0aW9uQmxvY2tcIikpLkZsb3dHcmFwaENvZGVFeGVjdXRpb25CbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkluZGV4T2Y6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9VdGlscy9mbG93R3JhcGhJbmRleE9mQmxvY2tcIikpLkZsb3dHcmFwaEluZGV4T2ZCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkZ1bmN0aW9uUmVmZXJlbmNlOlxuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IChhd2FpdCBpbXBvcnQoXCIuL0RhdGEvVXRpbHMvZmxvd0dyYXBoRnVuY3Rpb25SZWZlcmVuY2VCbG9ja1wiKSkuRmxvd0dyYXBoRnVuY3Rpb25SZWZlcmVuY2VCbG9jaztcbiAgICAgICAgY2FzZSBGbG93R3JhcGhCbG9ja05hbWVzLkRhdGFTd2l0Y2g6XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydChcIi4vRGF0YS9mbG93R3JhcGhEYXRhU3dpdGNoQmxvY2tcIikpLkZsb3dHcmFwaERhdGFTd2l0Y2hCbG9jaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBibG9jayBpcyBhIGN1c3RvbSBibG9ja1xuICAgICAgICAgICAgaWYgKEN1c3RvbUJsb2Nrc1tibG9ja05hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEN1c3RvbUJsb2Nrc1tibG9ja05hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGJsb2NrIG5hbWUgJHtibG9ja05hbWV9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRXZlbnRCbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEV2ZW50QmxvY2tcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb29yZGluYXRvciB9IGZyb20gXCIuL2Zsb3dHcmFwaENvb3JkaW5hdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgSU9iamVjdEFjY2Vzc29yIH0gZnJvbSBcIi4vdHlwZURlZmluaXRpb25zXCI7XHJcbmltcG9ydCB0eXBlIHsgSVBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCIuLi9PYmplY3RNb2RlbC9vYmplY3RNb2RlbEludGVyZmFjZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRUeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEV2ZW50VHJpZ2dlciB9IGZyb20gXCIuL2Zsb3dHcmFwaFNjZW5lRXZlbnRDb29yZGluYXRvclwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3IgfSBmcm9tIFwiLi9mbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhNZXNoUGlja0V2ZW50QmxvY2sgfSBmcm9tIFwiLi9CbG9ja3MvRXZlbnQvZmxvd0dyYXBoTWVzaFBpY2tFdmVudEJsb2NrXCI7XHJcbmltcG9ydCB7IF9Jc0Rlc2NlbmRhbnRPZiB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBGbG93R3JhcGhTdGF0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBncmFwaCBpcyBzdG9wcGVkXHJcbiAgICAgKi9cclxuICAgIFN0b3BwZWQsXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBncmFwaCBpcyBydW5uaW5nXHJcbiAgICAgKi9cclxuICAgIFN0YXJ0ZWQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJhbWV0ZXJzIHVzZWQgdG8gY3JlYXRlIGEgZmxvdyBncmFwaC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaFBhcmFtcyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzY2VuZSB0aGF0IHRoZSBmbG93IGdyYXBoIGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIHNjZW5lOiBTY2VuZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGV2ZW50IGNvb3JkaW5hdG9yIHVzZWQgYnkgdGhlIGZsb3cgZ3JhcGguXHJcbiAgICAgKi9cclxuICAgIGNvb3JkaW5hdG9yOiBGbG93R3JhcGhDb29yZGluYXRvcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHBhcnNpbmcgYSBmbG93IGdyYXBoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoUGFyc2VPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBjb21wbGV4IHZhbHVlcyBpbiBhIHNjZW5lLlxyXG4gICAgICogQHBhcmFtIGtleSB0aGUga2V5IG9mIHRoZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byByZWFkIHRoZSB2YWx1ZSBmcm9tXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRvIHJlYWQgdGhlIHZhbHVlIGZyb21cclxuICAgICAqL1xyXG4gICAgdmFsdWVQYXJzZUZ1bmN0aW9uPzogKGtleTogc3RyaW5nLCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIGFzc2V0c0NvbnRhaW5lcjogSUFzc2V0Q29udGFpbmVyLCBzY2VuZTogU2NlbmUpID0+IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZsb3cgZ3JhcGggY29vcmRpbmF0b3IuXHJcbiAgICAgKi9cclxuICAgIGNvb3JkaW5hdG9yOiBGbG93R3JhcGhDb29yZGluYXRvcjtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgcGF0aCB0byBhbiBvYmplY3QgYWNjZXNzb3IuXHJcbiAgICAgKi9cclxuICAgIHBhdGhDb252ZXJ0ZXI/OiBJUGF0aFRvT2JqZWN0Q29udmVydGVyPElPYmplY3RBY2Nlc3Nvcj47XHJcbn1cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gcmVwcmVzZW50IGEgZmxvdyBncmFwaC5cclxuICogQSBmbG93IGdyYXBoIGlzIGEgZ3JhcGggb2YgYmxvY2tzIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGNvbXBsZXggbG9naWMuXHJcbiAqIEJsb2NrcyBjYW4gYmUgYWRkZWQgdG8gdGhlIGdyYXBoIGFuZCBjb25uZWN0ZWQgdG8gZWFjaCBvdGhlci5cclxuICogVGhlIGdyYXBoIGNhbiB0aGVuIGJlIHN0YXJ0ZWQsIHdoaWNoIHdpbGwgaW5pdCBhbmQgc3RhcnQgYWxsIG9mIGl0cyBldmVudCBibG9ja3MuXHJcbiAqXHJcbiAqIEBleHBlcmltZW50YWwgRmxvd0dyYXBoIGlzIHN0aWxsIGluIGRldmVsb3BtZW50IGFuZCBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGgge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBncmFwaCBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25TdGF0ZUNoYW5nZWRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPEZsb3dHcmFwaFN0YXRlPiA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2V2ZW50QmxvY2tzOiB7IFtrZXlvZiBpbiBGbG93R3JhcGhFdmVudFR5cGVdOiBGbG93R3JhcGhFdmVudEJsb2NrW10gfSA9IHtcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lUmVhZHldOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lRGlzcG9zZV06IFtdLFxyXG4gICAgICAgIFtGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVCZWZvcmVSZW5kZXJdOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLk1lc2hQaWNrXTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyRG93bl06IFtdLFxyXG4gICAgICAgIFtGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlclVwXTogW10sXHJcbiAgICAgICAgW0Zsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyTW92ZV06IFtdLFxyXG4gICAgICAgIFtGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlck92ZXJdOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJPdXRdOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lQWZ0ZXJSZW5kZXJdOiBbXSxcclxuICAgICAgICBbRmxvd0dyYXBoRXZlbnRUeXBlLk5vVHJpZ2dlcl06IFtdLFxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBfc2NlbmU6IFNjZW5lO1xyXG4gICAgcHJpdmF0ZSBfY29vcmRpbmF0b3I6IEZsb3dHcmFwaENvb3JkaW5hdG9yO1xyXG4gICAgcHJpdmF0ZSBfZXhlY3V0aW9uQ29udGV4dHM6IEZsb3dHcmFwaENvbnRleHRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfc2NlbmVFdmVudENvb3JkaW5hdG9yOiBGbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3I7XHJcbiAgICBwcml2YXRlIF9ldmVudE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxJRmxvd0dyYXBoRXZlbnRUcmlnZ2VyPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhdGUgb2YgdGhlIGdyYXBoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3N0YXRlOiBGbG93R3JhcGhTdGF0ZSA9IEZsb3dHcmFwaFN0YXRlLlN0b3BwZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc3RhdGUgb2YgdGhlIGdyYXBoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHN0YXRlIG9mIHRoZSBncmFwaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHN0YXRlKHZhbHVlOiBGbG93R3JhcGhTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIEZsb3cgR3JhcGhcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgY29uc3RydWN0aW9uIHBhcmFtZXRlcnMuIGN1cnJlbnRseSBvbmx5IHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocGFyYW1zOiBJRmxvd0dyYXBoUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVFdmVudENvb3JkaW5hdG9yID0gbmV3IEZsb3dHcmFwaFNjZW5lRXZlbnRDb29yZGluYXRvcih0aGlzLl9zY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fY29vcmRpbmF0b3IgPSBwYXJhbXMuY29vcmRpbmF0b3I7XHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50T2JzZXJ2ZXIgPSB0aGlzLl9zY2VuZUV2ZW50Q29vcmRpbmF0b3Iub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUuYWRkKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHQgb2YgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gdGhpcy5fZ2V0Q29udGV4dHVhbE9yZGVyKGV2ZW50LnR5cGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiBvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgY29udGV4dHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJsb2NrLl9leGVjdXRlRXZlbnQoY29udGV4dCwgZXZlbnQucGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGN1c3RvbSBiZWhhdmlvcihzKSBvZiBzcGVjaWZpYyBldmVudHNcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZVJlYWR5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lRXZlbnRDb29yZGluYXRvci5zY2VuZVJlYWR5VHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lQmVmb3JlUmVuZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29udGV4dCBvZiB0aGlzLl9leGVjdXRpb25Db250ZXh0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9ub3RpZnlPblRpY2soZXZlbnQucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVEaXNwb3NlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb250ZXh0LiBBIGNvbnRleHQgcmVwcmVzZW50cyBvbmUgc2VsZiBjb250YWluZWQgZXhlY3V0aW9uIGZvciB0aGUgZ3JhcGgsIHdpdGggaXRzIG93biB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY29udGV4dCwgd2hlcmUgeW91IGNhbiBnZXQgYW5kIHNldCB2YXJpYWJsZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZUNvbnRleHQoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBGbG93R3JhcGhDb250ZXh0KHsgc2NlbmU6IHRoaXMuX3NjZW5lLCBjb29yZGluYXRvcjogdGhpcy5fY29vcmRpbmF0b3IgfSk7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMucHVzaChjb250ZXh0KTtcclxuICAgICAgICByZXR1cm4gY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGV4ZWN1dGlvbiBjb250ZXh0IGF0IGEgZ2l2ZW4gaW5kZXhcclxuICAgICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHRoZSBleGVjdXRpb24gY29udGV4dCBhdCB0aGF0IGluZGV4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDb250ZXh0KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uQ29udGV4dHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFuIGV2ZW50IGJsb2NrLiBXaGVuIHRoZSBncmFwaCBpcyBzdGFydGVkLCBpdCB3aWxsIHN0YXJ0IGxpc3RlbmluZyB0byBldmVudHNcclxuICAgICAqIGZyb20gdGhlIGJsb2NrIGFuZCBleGVjdXRlIHRoZSBncmFwaCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cclxuICAgICAqIEBwYXJhbSBibG9jayB0aGUgZXZlbnQgYmxvY2sgdG8gYmUgYWRkZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZEV2ZW50QmxvY2soYmxvY2s6IEZsb3dHcmFwaEV2ZW50QmxvY2spOiB2b2lkIHtcclxuICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJPdmVyIHx8IGJsb2NrLnR5cGUgPT09IEZsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lLmNvbnN0YW50bHlVcGRhdGVNZXNoVW5kZXJQb2ludGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRvbid0IGFkZCBpZiBOb1RyaWdnZXIsIGJ1dCBzdGlsbCBzdGFydCB0aGUgcGVuZGluZyB0YXNrc1xyXG4gICAgICAgIGlmIChibG9jay50eXBlICE9PSBGbG93R3JhcGhFdmVudFR5cGUuTm9UcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50QmxvY2tzW2Jsb2NrLnR5cGVdLnB1c2goYmxvY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBhbHJlYWR5IHN0YXJ0ZWQsIHNvcnQgYW5kIGFkZCB0byB0aGUgcGVuZGluZ1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBGbG93R3JhcGhTdGF0ZS5TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29udGV4dCBvZiB0aGlzLl9leGVjdXRpb25Db250ZXh0cykge1xyXG4gICAgICAgICAgICAgICAgYmxvY2suX3N0YXJ0UGVuZGluZ1Rhc2tzKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlZE9ic2VydmFibGUuYWRkT25jZSgoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRmxvd0dyYXBoU3RhdGUuU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29udGV4dCBvZiB0aGlzLl9leGVjdXRpb25Db250ZXh0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5fc3RhcnRQZW5kaW5nVGFza3MoY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgdGhlIGZsb3cgZ3JhcGguIEluaXRpYWxpemVzIHRoZSBldmVudCBibG9ja3MgYW5kIHN0YXJ0cyBsaXN0ZW5pbmcgdG8gZXZlbnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEZsb3dHcmFwaFN0YXRlLlN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXhlY3V0aW9uQ29udGV4dHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5hZGQoKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRmxvd0dyYXBoU3RhdGUuU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRQZW5kaW5nRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgb25seSBldmVudCB3ZSBuZWVkIHRvIGNoZWNrIGlzIHRoZSBzY2VuZSByZWFkeSBldmVudC4gSWYgdGhlIHNjZW5lIGlzIGFscmVhZHkgcmVhZHkgd2hlbiB0aGUgZ3JhcGggc3RhcnRzLCB3ZSBzaG91bGQgc3RhcnQgdGhlIHBlbmRpbmcgdGFza3MuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NlbmUuaXNSZWFkeSh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lRXZlbnRDb29yZGluYXRvci5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVSZWFkeSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBGbG93R3JhcGhTdGF0ZS5TdGFydGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVuZGluZ0V2ZW50cygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRleHQgb2YgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRoaXMuX2V2ZW50QmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmRlciA9IHRoaXMuX2dldENvbnRleHR1YWxPcmRlcih0eXBlIGFzIEZsb3dHcmFwaEV2ZW50VHlwZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIG9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suX3N0YXJ0UGVuZGluZ1Rhc2tzKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbnRleHR1YWxPcmRlcih0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUsIGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiBGbG93R3JhcGhFdmVudEJsb2NrW10ge1xyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gdGhpcy5fZXZlbnRCbG9ja3NbdHlwZV0uc29ydCgoYSwgYikgPT4gYi5pbml0UHJpb3JpdHkgLSBhLmluaXRQcmlvcml0eSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSBGbG93R3JhcGhFdmVudFR5cGUuTWVzaFBpY2spIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzaFBpY2tPcmRlciA9IFtdIGFzIEZsb3dHcmFwaEV2ZW50QmxvY2tbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBibG9jazEgb2Ygb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBibG9jayBpcyBhIG1lc2ggcGljaywgZ3VhcmFudGVlIHRoYXQgcGlja3Mgb2YgY2hpbGRyZW4gbWVzaGVzIGNvbWUgYmVmb3JlIHBpY2tzIG9mIHBhcmVudCBtZXNoZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2gxID0gKGJsb2NrMSBhcyBGbG93R3JhcGhNZXNoUGlja0V2ZW50QmxvY2spLmFzc2V0LmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBvcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrMiA9IG9yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2gyID0gKGJsb2NrMiBhcyBGbG93R3JhcGhNZXNoUGlja0V2ZW50QmxvY2spLmFzc2V0LmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNoMSAmJiBtZXNoMiAmJiBfSXNEZXNjZW5kYW50T2YobWVzaDEsIG1lc2gyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNoUGlja09yZGVyLnNwbGljZShpLCAwLCBibG9jazEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNoUGlja09yZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlcyBvZiB0aGUgZmxvdyBncmFwaC4gQ2FuY2VscyBhbnkgcGVuZGluZyB0YXNrcyBhbmQgcmVtb3ZlcyBhbGwgZXZlbnQgbGlzdGVuZXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gRmxvd0dyYXBoU3RhdGUuU3RvcHBlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBGbG93R3JhcGhTdGF0ZS5TdG9wcGVkO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udGV4dCBvZiB0aGlzLl9leGVjdXRpb25Db250ZXh0cykge1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9jbGVhclBlbmRpbmdCbG9ja3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW9uQ29udGV4dHMubGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5fZXZlbnRCbG9ja3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRCbG9ja3NbdHlwZSBhcyBGbG93R3JhcGhFdmVudFR5cGVdLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V2ZW50T2JzZXJ2ZXI/LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NjZW5lRXZlbnRDb29yZGluYXRvci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlcyBhIGZ1bmN0aW9uIGluIGFsbCBibG9ja3Mgb2YgYSBmbG93IGdyYXBoLCBzdGFydGluZyB3aXRoIHRoZSBldmVudCBibG9ja3MuXHJcbiAgICAgKiBAcGFyYW0gdmlzaXRvciB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZpc2l0QWxsQmxvY2tzKHZpc2l0b3I6IChibG9jazogRmxvd0dyYXBoQmxvY2spID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCB2aXNpdExpc3Q6IEZsb3dHcmFwaEJsb2NrW10gPSBbXTtcclxuICAgICAgICBjb25zdCBpZHNBZGRlZFRvVmlzaXRMaXN0ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRoaXMuX2V2ZW50QmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5fZXZlbnRCbG9ja3NbdHlwZSBhcyBGbG93R3JhcGhFdmVudFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICB2aXNpdExpc3QucHVzaChibG9jayk7XHJcbiAgICAgICAgICAgICAgICBpZHNBZGRlZFRvVmlzaXRMaXN0LmFkZChibG9jay51bmlxdWVJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlICh2aXNpdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBibG9jayA9IHZpc2l0TGlzdC5wb3AoKSE7XHJcbiAgICAgICAgICAgIHZpc2l0b3IoYmxvY2spO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhSW4gb2YgYmxvY2suZGF0YUlucHV0cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIGRhdGFJbi5fY29ubmVjdGVkUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlkc0FkZGVkVG9WaXNpdExpc3QuaGFzKGNvbm5lY3Rpb24uX293bmVyQmxvY2sudW5pcXVlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0TGlzdC5wdXNoKGNvbm5lY3Rpb24uX293bmVyQmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZHNBZGRlZFRvVmlzaXRMaXN0LmFkZChjb25uZWN0aW9uLl9vd25lckJsb2NrLnVuaXF1ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJsb2NrIGluc3RhbmNlb2YgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2lnbmFsT3V0IG9mIGJsb2NrLnNpZ25hbE91dHB1dHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbm5lY3Rpb24gb2Ygc2lnbmFsT3V0Ll9jb25uZWN0ZWRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkc0FkZGVkVG9WaXNpdExpc3QuaGFzKGNvbm5lY3Rpb24uX293bmVyQmxvY2sudW5pcXVlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpdExpc3QucHVzaChjb25uZWN0aW9uLl9vd25lckJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkc0FkZGVkVG9WaXNpdExpc3QuYWRkKGNvbm5lY3Rpb24uX293bmVyQmxvY2sudW5pcXVlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyBhIGdyYXBoXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHdyaXRlIHRoZSB2YWx1ZXMgaW5cclxuICAgICAqIEBwYXJhbSB2YWx1ZVNlcmlhbGl6ZUZ1bmN0aW9uIGEgZnVuY3Rpb24gdG8gc2VyaWFsaXplIGNvbXBsZXggdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge30sIHZhbHVlU2VyaWFsaXplRnVuY3Rpb24/OiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuYWxsQmxvY2tzID0gW107XHJcbiAgICAgICAgdGhpcy52aXNpdEFsbEJsb2NrcygoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZEJsb2NrOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgYmxvY2suc2VyaWFsaXplKHNlcmlhbGl6ZWRCbG9jayk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuYWxsQmxvY2tzLnB1c2goc2VyaWFsaXplZEJsb2NrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmV4ZWN1dGlvbkNvbnRleHRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250ZXh0IG9mIHRoaXMuX2V4ZWN1dGlvbkNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgY29udGV4dC5zZXJpYWxpemUoc2VyaWFsaXplZENvbnRleHQsIHZhbHVlU2VyaWFsaXplRnVuY3Rpb24pO1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmV4ZWN1dGlvbkNvbnRleHRzLnB1c2goc2VyaWFsaXplZENvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEFuaW1hdGlvbkdyb3VwIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25Hcm91cFwiO1xuaW1wb3J0IHR5cGUgeyBBbmltYXRpb24gfSBmcm9tIFwiY29yZS9BbmltYXRpb25zL2FuaW1hdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2NhbWVyYVwiO1xuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9saWdodFwiO1xuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcblxuLyoqXG4gKiBUaGUgdHlwZSBvZiB0aGUgYXNzZXRzIHRoYXQgZmxvdyBncmFwaCBzdXBwb3J0c1xuICovXG5leHBvcnQgY29uc3QgZW51bSBGbG93R3JhcGhBc3NldFR5cGUge1xuICAgIEFuaW1hdGlvbiA9IFwiQW5pbWF0aW9uXCIsXG4gICAgQW5pbWF0aW9uR3JvdXAgPSBcIkFuaW1hdGlvbkdyb3VwXCIsXG4gICAgTWVzaCA9IFwiTWVzaFwiLFxuICAgIE1hdGVyaWFsID0gXCJNYXRlcmlhbFwiLFxuICAgIENhbWVyYSA9IFwiQ2FtZXJhXCIsXG4gICAgTGlnaHQgPSBcIkxpZ2h0XCIsXG4gICAgLy8gRnVydGhlciBhc3NldCB0eXBlcyB3aWxsIGJlIGFkZGVkIGhlcmUgd2hlbiBuZWVkZWQuXG59XG5cbmV4cG9ydCB0eXBlIEFzc2V0VHlwZTxUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlPiA9IFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGUuQW5pbWF0aW9uXG4gICAgPyBBbmltYXRpb25cbiAgICA6IFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGUuQW5pbWF0aW9uR3JvdXBcbiAgICAgID8gQW5pbWF0aW9uR3JvdXBcbiAgICAgIDogVCBleHRlbmRzIEZsb3dHcmFwaEFzc2V0VHlwZS5NZXNoXG4gICAgICAgID8gTWVzaFxuICAgICAgICA6IFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGUuTWF0ZXJpYWxcbiAgICAgICAgICA/IE1hdGVyaWFsXG4gICAgICAgICAgOiBUIGV4dGVuZHMgRmxvd0dyYXBoQXNzZXRUeXBlLkNhbWVyYVxuICAgICAgICAgICAgPyBDYW1lcmFcbiAgICAgICAgICAgIDogVCBleHRlbmRzIEZsb3dHcmFwaEFzc2V0VHlwZS5MaWdodFxuICAgICAgICAgICAgICA/IExpZ2h0XG4gICAgICAgICAgICAgIDogbmV2ZXI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXNzZXQgd2l0aCB0aGUgZ2l2ZW4gaW5kZXggYW5kIHR5cGUgZnJvbSB0aGUgYXNzZXRzIGNvbnRleHQuXG4gKiBAcGFyYW0gYXNzZXRzQ29udGV4dCBUaGUgYXNzZXRzIGNvbnRleHQgdG8gZ2V0IHRoZSBhc3NldCBmcm9tXG4gKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgYXNzZXRcbiAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGFzc2V0XG4gKiBAcGFyYW0gdXNlSW5kZXhBc1VuaXF1ZUlkIElmIHNldCB0byB0cnVlLCBpbnN0ZWFkIG9mIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgaXQgd2lsbCBzZWFyY2ggZm9yIHRoZSB1bmlxdWUgaWQgb2YgdGhlIGFzc2V0LlxuICogQHJldHVybnMgVGhlIGFzc2V0IG9yIG51bGwgaWYgbm90IGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRGbG93R3JhcGhBc3NldFdpdGhUeXBlPFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGU+KFxuICAgIGFzc2V0c0NvbnRleHQ6IElBc3NldENvbnRhaW5lcixcbiAgICB0eXBlOiBULFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgdXNlSW5kZXhBc1VuaXF1ZUlkPzogYm9vbGVhblxuKTogTnVsbGFibGU8QXNzZXRUeXBlPFQ+PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQXNzZXRUeXBlLkFuaW1hdGlvbjpcbiAgICAgICAgICAgIHJldHVybiB1c2VJbmRleEFzVW5pcXVlSWRcbiAgICAgICAgICAgICAgICA/ICgoYXNzZXRzQ29udGV4dC5hbmltYXRpb25zLmZpbmQoKGEpID0+IGEudW5pcXVlSWQgPT09IGluZGV4KSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKVxuICAgICAgICAgICAgICAgIDogKChhc3NldHNDb250ZXh0LmFuaW1hdGlvbnNbaW5kZXhdIGFzIEFzc2V0VHlwZTx0eXBlb2YgdHlwZT4pID8/IG51bGwpO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEFzc2V0VHlwZS5BbmltYXRpb25Hcm91cDpcbiAgICAgICAgICAgIHJldHVybiB1c2VJbmRleEFzVW5pcXVlSWRcbiAgICAgICAgICAgICAgICA/ICgoYXNzZXRzQ29udGV4dC5hbmltYXRpb25Hcm91cHMuZmluZCgoYSkgPT4gYS51bmlxdWVJZCA9PT0gaW5kZXgpIGFzIEFzc2V0VHlwZTx0eXBlb2YgdHlwZT4pID8/IG51bGwpXG4gICAgICAgICAgICAgICAgOiAoKGFzc2V0c0NvbnRleHQuYW5pbWF0aW9uR3JvdXBzW2luZGV4XSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKTtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhBc3NldFR5cGUuTWVzaDpcbiAgICAgICAgICAgIHJldHVybiB1c2VJbmRleEFzVW5pcXVlSWRcbiAgICAgICAgICAgICAgICA/ICgoYXNzZXRzQ29udGV4dC5tZXNoZXMuZmluZCgoYSkgPT4gYS51bmlxdWVJZCA9PT0gaW5kZXgpIGFzIEFzc2V0VHlwZTx0eXBlb2YgdHlwZT4pID8/IG51bGwpXG4gICAgICAgICAgICAgICAgOiAoKGFzc2V0c0NvbnRleHQubWVzaGVzW2luZGV4XSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKTtcbiAgICAgICAgY2FzZSBGbG93R3JhcGhBc3NldFR5cGUuTWF0ZXJpYWw6XG4gICAgICAgICAgICByZXR1cm4gdXNlSW5kZXhBc1VuaXF1ZUlkXG4gICAgICAgICAgICAgICAgPyAoKGFzc2V0c0NvbnRleHQubWF0ZXJpYWxzLmZpbmQoKGEpID0+IGEudW5pcXVlSWQgPT09IGluZGV4KSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKVxuICAgICAgICAgICAgICAgIDogKChhc3NldHNDb250ZXh0Lm1hdGVyaWFsc1tpbmRleF0gYXMgQXNzZXRUeXBlPHR5cGVvZiB0eXBlPikgPz8gbnVsbCk7XG4gICAgICAgIGNhc2UgRmxvd0dyYXBoQXNzZXRUeXBlLkNhbWVyYTpcbiAgICAgICAgICAgIHJldHVybiB1c2VJbmRleEFzVW5pcXVlSWRcbiAgICAgICAgICAgICAgICA/ICgoYXNzZXRzQ29udGV4dC5jYW1lcmFzLmZpbmQoKGEpID0+IGEudW5pcXVlSWQgPT09IGluZGV4KSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKVxuICAgICAgICAgICAgICAgIDogKChhc3NldHNDb250ZXh0LmNhbWVyYXNbaW5kZXhdIGFzIEFzc2V0VHlwZTx0eXBlb2YgdHlwZT4pID8/IG51bGwpO1xuICAgICAgICBjYXNlIEZsb3dHcmFwaEFzc2V0VHlwZS5MaWdodDpcbiAgICAgICAgICAgIHJldHVybiB1c2VJbmRleEFzVW5pcXVlSWRcbiAgICAgICAgICAgICAgICA/ICgoYXNzZXRzQ29udGV4dC5saWdodHMuZmluZCgoYSkgPT4gYS51bmlxdWVJZCA9PT0gaW5kZXgpIGFzIEFzc2V0VHlwZTx0eXBlb2YgdHlwZT4pID8/IG51bGwpXG4gICAgICAgICAgICAgICAgOiAoKGFzc2V0c0NvbnRleHQubGlnaHRzW2luZGV4XSBhcyBBc3NldFR5cGU8dHlwZW9mIHR5cGU+KSA/PyBudWxsKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tXaXRoT3V0U2lnbmFsXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBhc3luYyBleGVjdXRpb24gYmxvY2sgY2FuIHN0YXJ0IHRhc2tzIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhc3luY2hyb25vdXNseS5cclxuICogSXQgc2hvdWxkIGFsc28gYmUgcmVzcG9uc2libGUgZm9yIGNsZWFyaW5nIGl0IGluIF9jYW5jZWxQZW5kaW5nVGFza3MuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9jayBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCB7XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBjb25uZWN0aW9uOiBUaGUgc2lnbmFsIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGFzeW5jaHJvbm91cyBleGVjdXRpb24gb2YgdGhpcyBibG9jayBpcyBkb25lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZG9uZTogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50c1NpZ25hbE91dHB1dHM6IHsgW2V2ZW50TmFtZTogc3RyaW5nXTogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiwgZXZlbnRzPzogc3RyaW5nW10pIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KFwiZG9uZVwiKTtcclxuICAgICAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzU2lnbmFsT3V0cHV0c1tldmVudE5hbWVdID0gdGhpcy5fcmVnaXN0ZXJTaWduYWxPdXRwdXQoZXZlbnROYW1lICsgXCJFdmVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBvdmVycmlkZGVuIHRvIHN0YXJ0IGFueVxyXG4gICAgICogcGVuZGluZyB0YXNrcyB0aGlzIG5vZGUgbWlnaHQgaGF2ZSwgc3VjaCBhc1xyXG4gICAgICogdGltZW91dHMgYW5kIHBsYXlpbmcgYW5pbWF0aW9ucy5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBfcHJlcGFyZVBlbmRpbmdUYXNrcyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgb3ZlcnJpZGRlbiB0byBleGVjdXRlIGFueVxyXG4gICAgICogbG9naWMgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgb24gZXZlcnkgZnJhbWVcclxuICAgICAqIHdoaWxlIHRoZSBhc3luYyB0YXNrIGlzIHBlbmRpbmcuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBpbiB3aGljaCBpdCBpcyBydW5uaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZXhlY3V0ZU9uVGljayhfY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGNvbnRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zdGFydFBlbmRpbmdUYXNrcyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQuX2dldEV4ZWN1dGlvblZhcmlhYmxlKHRoaXMsIFwiX2luaXRpYWxpemVkXCIsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxQZW5kaW5nVGFza3MoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0QWZ0ZXJDYW5jZWxlZChjb250ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3ByZXBhcmVQZW5kaW5nVGFza3MoY29udGV4dCk7XHJcbiAgICAgICAgY29udGV4dC5fYWRkUGVuZGluZ0Jsb2NrKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3V0Ll9hY3RpdmF0ZVNpZ25hbChjb250ZXh0KTtcclxuICAgICAgICBjb250ZXh0Ll9zZXRFeGVjdXRpb25WYXJpYWJsZSh0aGlzLCBcIl9pbml0aWFsaXplZFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3Jlc2V0QWZ0ZXJDYW5jZWxlZChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KSB7XHJcbiAgICAgICAgY29udGV4dC5fZGVsZXRlRXhlY3V0aW9uVmFyaWFibGUodGhpcywgXCJfaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgY29udGV4dC5fcmVtb3ZlUGVuZGluZ0Jsb2NrKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBfY2FuY2VsUGVuZGluZ1Rhc2tzKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCB7IFJhbmRvbUdVSUQgfSBmcm9tIFwiLi4vTWlzYy9ndWlkXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBSaWNoVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2ssIElPYmplY3RBY2Nlc3NvciB9IGZyb20gXCIuL3R5cGVEZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVTZXJpYWxpemF0aW9uRnVuY3Rpb24gfSBmcm9tIFwiLi9zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJUGF0aFRvT2JqZWN0Q29udmVydGVyIH0gZnJvbSBcIi4uL09iamVjdE1vZGVsL29iamVjdE1vZGVsSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL0lBc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEFjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaExvZ2dlclwiO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgZm9yIHBhcnNpbmcgYSBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEJsb2NrUGFyc2VPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHZhbHVlIGZyb20gYSBzZXJpYWxpemF0aW9uIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleSBvZiB0aGUgcHJvcGVydHlcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBzZXJpYWxpemF0aW9uIG9iamVjdCB3aGVyZSB0aGUgcHJvcGVydHkgaXMgbG9jYXRlZFxyXG4gICAgICogQHBhcmFtIHNjZW5lIHRoZSBzY2VuZSB0aGF0IHRoZSBibG9jayBpcyBiZWluZyBwYXJzZWQgaW5cclxuICAgICAqIEByZXR1cm5zIHRoZSBwYXJzZWQgdmFsdWVcclxuICAgICAqL1xyXG4gICAgdmFsdWVQYXJzZUZ1bmN0aW9uPzogKGtleTogc3RyaW5nLCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIGFzc2V0c0NvbnRhaW5lcjogSUFzc2V0Q29udGFpbmVyLCBzY2VuZTogU2NlbmUpID0+IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0cyBjb250YWluZXIgdG8gdXNlIHdoZW4gbG9hZGluZyBhc3NldHMuXHJcbiAgICAgKi9cclxuICAgIGFzc2V0c0NvbnRhaW5lcj86IElBc3NldENvbnRhaW5lcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNjZW5lIHRoYXQgdGhlIGJsb2NrIGlzIGJlaW5nIHBhcnNlZCBpbi5cclxuICAgICAqL1xyXG4gICAgc2NlbmU6IFNjZW5lO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGF0aCBjb252ZXJ0ZXIgdG8gdXNlIHRvIGNvbnZlcnQgdGhlIHBhdGggdG8gYW4gb2JqZWN0IGFjY2Vzc29yLlxyXG4gICAgICovXHJcbiAgICBwYXRoQ29udmVydGVyPzogSVBhdGhUb09iamVjdENvbnZlcnRlcjxJT2JqZWN0QWNjZXNzb3I+O1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgYSBibG9jay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIFtleHRyYVByb3BlcnR5S2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGJsb2NrIGluIGEgZmxvdyBncmFwaC4gVGhlIG1vc3QgYmFzaWMgZm9ybVxyXG4gKiBvZiBhIGJsb2NrIGhhcyBpbnB1dHMgYW5kIG91dHB1dHMgdGhhdCBjb250YWluXHJcbiAqIGRhdGEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHJhbmRvbWx5IGdlbmVyYXRlZCBHVUlEIGZvciBlYWNoIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdW5pcXVlSWQgPSBSYW5kb21HVUlEKCk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgaW5wdXRzIG9mIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhdGFJbnB1dHM6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT5bXTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRhdGEgb3V0cHV0cyBvZiB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkYXRhT3V0cHV0czogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248YW55PltdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0YWRhdGEgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtZXRhZGF0YTogYW55O1xyXG5cclxuICAgIC8qKiBDb25zdHJ1Y3RvciBpcyBwcm90ZWN0ZWQgc28gb25seSBzdWJjbGFzc2VzIGNhbiBiZSBpbnN0YW50aWF0ZWRcclxuICAgICAqIEBwYXJhbSBjb25maWcgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhpcyBibG9ja1xyXG4gICAgICogQGludGVybmFsIC0gZG8gbm90IHVzZSBkaXJlY3RseS4gRXh0ZW5kIHRoaXMgY2xhc3MgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGJsb2NrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbmZpZz86IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuY29uZmlnPy5uYW1lID8/IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhSW5wdXRzID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhT3V0cHV0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBibG9jayBuZWVkcyB0byB1cGRhdGUgaXRzIG91dHB1dCBmbG93cy5cclxuICAgICAqIEBwYXJhbSBfY29udGV4dCB0aGUgY29udGV4dCBpbiB3aGljaCBpdCBpcyBydW5uaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfdXBkYXRlT3V0cHV0cyhfY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGVtcHR5IGJ5IGRlZmF1bHQsIG92ZXJyaWRkZW4gaW4gZGF0YSBibG9ja3NcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGRhdGEgaW5wdXQgb24gdGhlIGJsb2NrLlxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGlucHV0XHJcbiAgICAgKiBAcGFyYW0gcmljaFR5cGUgdGhlIHR5cGUgb2YgdGhlIGlucHV0XHJcbiAgICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIG9wdGlvbmFsIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGlucHV0LiBJZiBub3Qgc2V0LCB0aGUgcmljaCB0eXBlJ3MgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckRhdGFJbnB1dDxUPihuYW1lOiBzdHJpbmcsIHJpY2hUeXBlOiBSaWNoVHlwZTxUPiwgZGVmYXVsdFZhbHVlPzogVCk6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbihuYW1lLCBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5JbnB1dCwgdGhpcywgcmljaFR5cGUsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhSW5wdXRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBhIGRhdGEgb3V0cHV0IG9uIHRoZSBibG9jay5cclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxyXG4gICAgICogQHBhcmFtIHJpY2hUeXBlIHRoZSB0eXBlIG9mIHRoZSBpbnB1dFxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBvcHRpb25hbCBkZWZhdWx0IHZhbHVlIG9mIHRoZSBpbnB1dC4gSWYgbm90IHNldCwgdGhlIHJpY2ggdHlwZSdzIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkLlxyXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgY29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJEYXRhT3V0cHV0PFQ+KG5hbWU6IHN0cmluZywgcmljaFR5cGU6IFJpY2hUeXBlPFQ+LCBkZWZhdWx0VmFsdWU/OiBUKTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VD4ge1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbihuYW1lLCBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5PdXRwdXQsIHRoaXMsIHJpY2hUeXBlLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZGF0YU91dHB1dHMucHVzaChvdXRwdXQpO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiB0aGUgbmFtZSBvZiBhIGRhdGEgaW5wdXQsIHJldHVybnMgdGhlIGNvbm5lY3Rpb24gaWYgaXQgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgaW5wdXRcclxuICAgICAqIEByZXR1cm5zIHRoZSBjb25uZWN0aW9uIGlmIGl0IGV4aXN0cywgdW5kZWZpbmVkIG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGF0YUlucHV0KG5hbWU6IHN0cmluZyk6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT4gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFJbnB1dHMuZmluZCgoaSkgPT4gaS5uYW1lID09PSBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIHRoZSBuYW1lIG9mIGEgZGF0YSBvdXRwdXQsIHJldHVybnMgdGhlIGNvbm5lY3Rpb24gaWYgaXQgZXhpc3RzXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgb3V0cHV0XHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY29ubmVjdGlvbiBpZiBpdCBleGlzdHMsIHVuZGVmaW5lZCBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldERhdGFPdXRwdXQobmFtZTogc3RyaW5nKTogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248YW55PiB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU91dHB1dHMuZmluZCgoaSkgPT4gaS5uYW1lID09PSBuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBibG9ja1xyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBzZXJpYWxpemUgdG9cclxuICAgICAqIEBwYXJhbSBfdmFsdWVTZXJpYWxpemVGdW5jdGlvbiBhIGZ1bmN0aW9uIHRoYXQgc2VyaWFsaXplcyBhIHNwZWNpZmljIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge30sIF92YWx1ZVNlcmlhbGl6ZUZ1bmN0aW9uOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkgPT4gYW55ID0gZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uKSB7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC51bmlxdWVJZCA9IHRoaXMudW5pcXVlSWQ7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jb25maWcgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBfdmFsdWVTZXJpYWxpemVGdW5jdGlvbihrZXksIGNvbmZpZ1trZXldLCBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhSW5wdXRzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhT3V0cHV0cyA9IFtdO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMuZGF0YUlucHV0cykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkSW5wdXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBpbnB1dC5zZXJpYWxpemUoc2VyaWFsaXplZElucHV0KTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhSW5wdXRzLnB1c2goc2VyaWFsaXplZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvdXRwdXQgb2YgdGhpcy5kYXRhT3V0cHV0cykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkT3V0cHV0OiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgb3V0cHV0LnNlcmlhbGl6ZShzZXJpYWxpemVkT3V0cHV0KTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhT3V0cHV0cy5wdXNoKHNlcmlhbGl6ZWRPdXRwdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VyaWFsaXplcyB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gX3NlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBmcm9tXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXNlcmlhbGl6ZShfc2VyaWFsaXphdGlvbk9iamVjdDogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaykge1xyXG4gICAgICAgIC8vIG5vLW9wIGJ5IGRlZmF1bHRcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2xvZyhjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0LCBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbiwgcGF5bG9hZD86IGFueSkge1xyXG4gICAgICAgIGNvbnRleHQubG9nZ2VyPy5hZGRMb2dJdGVtKHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLnVuaXF1ZUlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY2xhc3MgbmFtZSBvZiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIkZsb3dHcmFwaEJsb2NrXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmFuZG9tR1VJRCB9IGZyb20gXCIuLi9NaXNjL2d1aWRcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBhIGNvbm5lY3Rpb24gcG9pbnQgLSBpbnB1dCBvciBvdXRwdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSB7XHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGludGVyZmFjZSBmb3IgYSBjb25uZWN0YWJsZSBwb2ludCBpbiB0aGUgZmxvdyBncmFwaC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbm5lY3RhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQSB1bmlxdWVseSBpZGVudGlmeWluZyBzdHJpbmcgZm9yIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICB1bmlxdWVJZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiB0aGUgcG9pbnRzIHRoYXQgdGhpcyBwb2ludCBpcyBjb25uZWN0ZWQgdG8uXHJcbiAgICAgKi9cclxuICAgIF9jb25uZWN0ZWRQb2ludDogQXJyYXk8SUNvbm5lY3RhYmxlPjtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpZiB0aGUgY29ubmVjdGlvbiBjYW4gb25seSBiZSBjb25uZWN0ZWQgdG8gb25lIG90aGVyIHBvaW50LlxyXG4gICAgICovXHJcbiAgICBfaXNTaW5ndWxhckNvbm5lY3Rpb24oKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgX2Nvbm5lY3Rpb25UeXBlOiBGbG93R3JhcGhDb25uZWN0aW9uVHlwZTtcclxuICAgIC8qKlxyXG4gICAgICogQ29ubmVjdCB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0gcG9pbnQgdGhlIHBvaW50IHRvIGNvbm5lY3QgdG8uXHJcbiAgICAgKi9cclxuICAgIGNvbm5lY3RUbyhwb2ludDogSUNvbm5lY3RhYmxlKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGNvbm5lY3Rpb24gY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoQ29ubmVjdGlvbjxCbG9ja1QsIENvbm5lY3RlZFRvVCBleHRlbmRzIElDb25uZWN0YWJsZT4gaW1wbGVtZW50cyBJQ29ubmVjdGFibGUge1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9jb25uZWN0ZWRQb2ludDogQXJyYXk8Q29ubmVjdGVkVG9UPiA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIHN0cmluZyBmb3IgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1bmlxdWVJZCA9IFJhbmRvbUdVSUQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb25uZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfY29ubmVjdGlvblR5cGU6IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCBmb3IgcGFyc2luZyBjb25uZWN0aW9ucy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICAvLyBkaXNhYmxlIHdhcm5pbmcgYXMgdGhpcyBpcyB1c2VkIGZvciBwYXJzaW5nXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBwdWJsaWMgY29ubmVjdGVkUG9pbnRJZHM6IGFueVtdID0gW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBfY29ubmVjdGlvblR5cGU6IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlLFxyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqLyBwdWJsaWMgX293bmVyQmxvY2s6IEJsb2NrVFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uVHlwZSA9IF9jb25uZWN0aW9uVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0eXBlIG9mIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGlvblR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBPdmVycmlkZSB0aGlzIHRvIGluZGljYXRlIGlmIGEgcG9pbnQgY2FuIGNvbm5lY3QgdG8gbW9yZSB0aGFuIG9uZSBwb2ludC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIF9pc1Npbmd1bGFyQ29ubmVjdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaWYgYSBwb2ludCBpcyBjb25uZWN0ZWQgdG8gYW55IG90aGVyIHBvaW50LlxyXG4gICAgICogQHJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBwb2ludCBpcyBjb25uZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Nvbm5lY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkUG9pbnQubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbm5lY3RzIHR3byBjb25uZWN0aW9ucyB0b2dldGhlci5cclxuICAgICAqIEBwYXJhbSBwb2ludCB0aGUgY29ubmVjdGlvbiB0byBjb25uZWN0IHRvLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29ubmVjdFRvKHBvaW50OiBDb25uZWN0ZWRUb1QpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGlvblR5cGUgPT09IHBvaW50Ll9jb25uZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb25uZWN0IHR3byBwb2ludHMgb2YgdHlwZSAke3RoaXMuY29ubmVjdGlvblR5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGhpcy5faXNTaW5ndWxhckNvbm5lY3Rpb24oKSAmJiB0aGlzLl9jb25uZWN0ZWRQb2ludC5sZW5ndGggPiAwKSB8fCAocG9pbnQuX2lzU2luZ3VsYXJDb25uZWN0aW9uKCkgJiYgcG9pbnQuX2Nvbm5lY3RlZFBvaW50Lmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1heCBudW1iZXIgb2YgY29ubmVjdGlvbnMgZm9yIHBvaW50IHJlYWNoZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZFBvaW50LnB1c2gocG9pbnQpO1xyXG4gICAgICAgIHBvaW50Ll9jb25uZWN0ZWRQb2ludC5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdHMgdHdvIGNvbm5lY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIHBvaW50IHRoZSBjb25uZWN0aW9uIHRvIGRpc2Nvbm5lY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSByZW1vdmVGcm9tTG9jYWwgaWYgdHJ1ZSwgdGhlIGNvbm5lY3Rpb24gd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGxvY2FsIGNvbm5lY3Rpb24gbGlzdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc2Nvbm5lY3RGcm9tKHBvaW50OiBDb25uZWN0ZWRUb1QsIHJlbW92ZUZyb21Mb2NhbCA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleExvY2FsID0gdGhpcy5fY29ubmVjdGVkUG9pbnQuaW5kZXhPZihwb2ludCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhDb25uZWN0ZWQgPSBwb2ludC5fY29ubmVjdGVkUG9pbnQuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXhMb2NhbCA9PT0gLTEgfHwgaW5kZXhDb25uZWN0ZWQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbW92ZUZyb21Mb2NhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRQb2ludC5zcGxpY2UoaW5kZXhMb2NhbCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvaW50Ll9jb25uZWN0ZWRQb2ludC5zcGxpY2UoaW5kZXhDb25uZWN0ZWQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzY29ubmVjdHMgYWxsIGNvbm5lY3RlZCBwb2ludHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNjb25uZWN0RnJvbUFsbCgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMuX2Nvbm5lY3RlZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdEZyb20ocG9pbnQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdGVkUG9pbnQubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMuX2Nvbm5lY3RlZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdEZyb20ocG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmVzIHRoZSBjb25uZWN0aW9uIHRvIGEgSlNPTiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkgPSB7fSkge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QudW5pcXVlSWQgPSB0aGlzLnVuaXF1ZUlkO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Ll9jb25uZWN0aW9uVHlwZSA9IHRoaXMuX2Nvbm5lY3Rpb25UeXBlO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY29ubmVjdGVkUG9pbnRJZHMgPSBbXTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLl9jb25uZWN0ZWRQb2ludCkge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbm5lY3RlZFBvaW50SWRzLnB1c2gocG9pbnQudW5pcXVlSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIGNvbm5lY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJGR0Nvbm5lY3Rpb25cIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VyaWFsaXplIGZyb20gYSBvYmplY3QgaW50byB0aGlzXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIGRlc2VyaWFsaXplIGZyb20uXHJcbiAgICAgKi9cclxuICAgIGRlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSkge1xyXG4gICAgICAgIHRoaXMudW5pcXVlSWQgPSBzZXJpYWxpemF0aW9uT2JqZWN0LnVuaXF1ZUlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHNlcmlhbGl6YXRpb25PYmplY3QubmFtZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uVHlwZSA9IHNlcmlhbGl6YXRpb25PYmplY3QuX2Nvbm5lY3Rpb25UeXBlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkUG9pbnRJZHMgPSBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbm5lY3RlZFBvaW50SWRzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCIuLi9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgUmFuZG9tR1VJRCB9IGZyb20gXCIuLi9NaXNjL2d1aWRcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGggfSBmcm9tIFwiLi9mbG93R3JhcGhcIjtcclxuaW1wb3J0IHsgZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvb3JkaW5hdG9yIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29vcmRpbmF0b3JcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBBc3NldFR5cGUsIEZsb3dHcmFwaEFzc2V0VHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaEFzc2V0c0NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0Rmxvd0dyYXBoQXNzZXRXaXRoVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaEFzc2V0c0NvbnRleHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEFjdGlvbiwgRmxvd0dyYXBoTG9nZ2VyIH0gZnJvbSBcIi4vZmxvd0dyYXBoTG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUZsb3dHcmFwaE9uVGlja0V2ZW50UGF5bG9hZCB9IGZyb20gXCIuL0Jsb2Nrcy9FdmVudC9mbG93R3JhcGhTY2VuZVRpY2tFdmVudEJsb2NrXCI7XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0aW9uIHBhcmFtZXRlcnMgZm9yIHRoZSBjb250ZXh0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoQ29udGV4dENvbmZpZ3VyYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2NlbmUgdGhhdCB0aGUgZmxvdyBncmFwaCBjb250ZXh0IGJlbG9uZ3MgdG8uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IHNjZW5lOiBTY2VuZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGV2ZW50IGNvb3JkaW5hdG9yIHVzZWQgYnkgdGhlIGZsb3cgZ3JhcGggY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgY29vcmRpbmF0b3I6IEZsb3dHcmFwaENvb3JkaW5hdG9yO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0cyBjb250ZXh0IHVzZWQgYnkgdGhlIGZsb3cgZ3JhcGggY29udGV4dC5cclxuICAgICAqIElmIG5vbmUgaXMgcHJvdmlkZWQsIGEgZGVmYXVsdCBvbmUgd2lsbCBiZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBhc3NldHNDb250ZXh0PzogSUFzc2V0Q29udGFpbmVyO1xyXG59XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBmb3IgcGFyc2luZyBhIGNvbnRleHQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGbG93R3JhcGhDb250ZXh0UGFyc2VPcHRpb25zIHtcclxuICAgIC8qKlxyXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHZhbHVlIGZyb20gYSBzZXJpYWxpemF0aW9uIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGtleSBvZiB0aGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgY3VycmVudCBzY2VuZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgdmFsdWVQYXJzZUZ1bmN0aW9uPzogKGtleTogc3RyaW5nLCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIGFzc2V0c0NvbnRhaW5lcjogSUFzc2V0Q29udGFpbmVyLCBzY2VuZTogU2NlbmUpID0+IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGdyYXBoIHRoYXQgdGhlIGNvbnRleHQgaXMgYmVpbmcgcGFyc2VkIGluLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSBncmFwaDogRmxvd0dyYXBoO1xyXG59XHJcbi8qKlxyXG4gKiBUaGUgY29udGV4dCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBleGVjdXRpb24gb2YgdGhlIGZsb3cgZ3JhcGguXHJcbiAqIEl0IGNvbnRhaW5zIGJvdGggdXNlci1kZWZpbmVkIHZhcmlhYmxlcywgd2hpY2ggYXJlIGRlcml2ZWQgZnJvbVxyXG4gKiBhIG1vcmUgZ2VuZXJhbCB2YXJpYWJsZSBkZWZpbml0aW9uLCBhbmQgZXhlY3V0aW9uIHZhcmlhYmxlcyB0aGF0XHJcbiAqIGFyZSBzZXQgYnkgdGhlIGJsb2Nrcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhDb250ZXh0IHtcclxuICAgIC8qKlxyXG4gICAgICogQSByYW5kb21seSBnZW5lcmF0ZWQgR1VJRCBmb3IgZWFjaCBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyB1bmlxdWVJZCA9IFJhbmRvbUdVSUQoKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlc2UgYXJlIHRoZSB2YXJpYWJsZXMgZGVmaW5lZCBieSBhIHVzZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3VzZXJWYXJpYWJsZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlc2UgYXJlIHRoZSB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBibG9ja3MuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2V4ZWN1dGlvblZhcmlhYmxlczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBjb250ZXh0LXNwZWNpZmljIGdsb2JhbCB2YXJpYWJsZXMsIGF2YWlsYWJsZSB0byBhbGwgYmxvY2tzIGluIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nbG9iYWxDb250ZXh0VmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIFRoZXNlIGFyZSB0aGUgdmFsdWVzIGZvciB0aGUgZGF0YSBjb25uZWN0aW9uIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jb25uZWN0aW9uVmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIFRoZXNlIGFyZSB0aGUgdmFyaWFibGVzIHNldCBieSB0aGUgZ3JhcGguXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZ3VyYXRpb246IElGbG93R3JhcGhDb250ZXh0Q29uZmlndXJhdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlc2UgYXJlIGJsb2NrcyB0aGF0IGhhdmUgY3VycmVudGx5IHBlbmRpbmcgdGFza3MvbGlzdGVuZXJzIHRoYXQgbmVlZCB0byBiZSBjbGVhbmVkIHVwLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9wZW5kaW5nQmxvY2tzOiBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrW10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogQSBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgSUQgZm9yIGVhY2ggZXhlY3V0aW9uLlxyXG4gICAgICogSW5jcmVtZW50ZWQgZm9yIGV2ZXJ5IGJsb2NrIGV4ZWN1dGVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9leGVjdXRpb25JZCA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgdGhhdCBpcyB0cmlnZ2VyZWQgd2hlbiBhIG5vZGUgaXMgZXhlY3V0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbk5vZGVFeGVjdXRlZE9ic2VydmFibGU6IE9ic2VydmFibGU8Rmxvd0dyYXBoQmxvY2s+ID0gbmV3IE9ic2VydmFibGU8Rmxvd0dyYXBoQmxvY2s+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXRzIGNvbnRleHQgdXNlZCBieSB0aGUgZmxvdyBncmFwaCBjb250ZXh0LlxyXG4gICAgICogTm90ZSB0aGF0IGl0IGNhbiBiZSBzaGFyZWQgYmV0d2VlbiBmbG93IGdyYXBoIGNvbnRleHRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXNzZXRzQ29udGV4dDogSUFzc2V0Q29udGFpbmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0byB0cmVhdCBkYXRhIGFzIHJpZ2h0LWhhbmRlZC5cclxuICAgICAqIFRoaXMgaXMgdXNlZCB3aGVuIHNlcmlhbGl6aW5nIGRhdGEgZnJvbSBhIHJpZ2h0LWhhbmRlZCBzeXN0ZW0sIHdoaWxlIHJ1bm5pbmcgdGhlIGNvbnRleHQgaW4gYSBsZWZ0LWhhbmRlZCBzeXN0ZW0sIGZvciBleGFtcGxlIGluIGdsVEYgcGFyc2luZy5cclxuICAgICAqIERlZmF1bHQgaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmVhdERhdGFBc1JpZ2h0SGFuZGVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5hYmxlTG9nZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxvZ2dlciB1c2VkIGJ5IHRoZSBjb250ZXh0IHRvIGxvZyBhY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9nZ2VyOiBOdWxsYWJsZTxGbG93R3JhcGhMb2dnZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIGxvZ2dpbmcgb24gdGhpcyBjb250ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZW5hYmxlTG9nZ2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlTG9nZ2luZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGVuYWJsZUxvZ2dpbmcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fZW5hYmxlTG9nZ2luZyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbmFibGVMb2dnaW5nID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VuYWJsZUxvZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgRmxvd0dyYXBoTG9nZ2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ1RvQ29uc29sZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IElGbG93R3JhcGhDb250ZXh0Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24gPSBwYXJhbXM7XHJcbiAgICAgICAgdGhpcy5hc3NldHNDb250ZXh0ID0gcGFyYW1zLmFzc2V0c0NvbnRleHQgPz8gcGFyYW1zLnNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSB1c2VyLWRlZmluZWQgdmFyaWFibGUgaXMgZGVmaW5lZC5cclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzVmFyaWFibGUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcy5fdXNlclZhcmlhYmxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHVzZXItZGVmaW5lZCB2YXJpYWJsZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFZhcmlhYmxlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJWYXJpYWJsZXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLkNvbnRleHRWYXJpYWJsZVNldCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFuIGFzc2V0cyBmcm9tIHRoZSBhc3NldHMgY29udGV4dCBiYXNlZCBvbiBpdHMgdHlwZSBhbmQgaW5kZXggaW4gdGhlIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgYXNzZXRcclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGFzc2V0XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgYXNzZXQgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEFzc2V0PFQgZXh0ZW5kcyBGbG93R3JhcGhBc3NldFR5cGU+KHR5cGU6IFQsIGluZGV4OiBudW1iZXIpOiBOdWxsYWJsZTxBc3NldFR5cGU8VD4+IHtcclxuICAgICAgICByZXR1cm4gR2V0Rmxvd0dyYXBoQXNzZXRXaXRoVHlwZSh0aGlzLmFzc2V0c0NvbnRleHQsIHR5cGUsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHVzZXItZGVmaW5lZCB2YXJpYWJsZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICogQHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VmFyaWFibGUobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLkNvbnRleHRWYXJpYWJsZUdldCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl91c2VyVmFyaWFibGVzW25hbWVdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyVmFyaWFibGVzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbGwgdXNlciB2YXJpYWJsZXMgbWFwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgdXNlclZhcmlhYmxlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclZhcmlhYmxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc2NlbmUgdGhhdCB0aGUgY29udGV4dCBiZWxvbmdzIHRvLlxyXG4gICAgICogQHJldHVybnMgdGhlIHNjZW5lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTY2VuZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbi5zY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRVbmlxdWVJZFByZWZpeGVkTmFtZShvYmo6IEZsb3dHcmFwaEJsb2NrLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHtvYmoudW5pcXVlSWR9XyR7bmFtZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIHRvIHJldHVybiBpZiB0aGUgdmFyaWFibGUgaXMgbm90IGRlZmluZWRcclxuICAgICAqIEByZXR1cm5zIHRoZSB2YXJpYWJsZSB2YWx1ZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgdmFyaWFibGUgaXMgbm90IGRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9nZXRHbG9iYWxDb250ZXh0VmFyaWFibGU8VD4obmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLkdsb2JhbFZhcmlhYmxlR2V0LFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcG9zc2libGVWYWx1ZTogdGhpcy5fZ2xvYmFsQ29udGV4dFZhcmlhYmxlc1tuYW1lXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5faGFzR2xvYmFsQ29udGV4dFZhcmlhYmxlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nbG9iYWxDb250ZXh0VmFyaWFibGVzW25hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgZ2xvYmFsIGNvbnRleHQgdmFyaWFibGVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldEdsb2JhbENvbnRleHRWYXJpYWJsZTxUPihuYW1lOiBzdHJpbmcsIHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXI/LmFkZExvZ0l0ZW0oe1xyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbi5HbG9iYWxWYXJpYWJsZVNldCxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBuYW1lLCB2YWx1ZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2dsb2JhbENvbnRleHRWYXJpYWJsZXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhIGdsb2JhbCBjb250ZXh0IHZhcmlhYmxlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2RlbGV0ZUdsb2JhbENvbnRleHRWYXJpYWJsZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlcj8uYWRkTG9nSXRlbSh7XHJcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHRoaXMudW5pcXVlSWQsXHJcbiAgICAgICAgICAgIGFjdGlvbjogRmxvd0dyYXBoQWN0aW9uLkdsb2JhbFZhcmlhYmxlRGVsZXRlLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7IG5hbWUgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fZ2xvYmFsQ29udGV4dFZhcmlhYmxlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGEgZ2xvYmFsIGNvbnRleHQgdmFyaWFibGUgaXMgZGVmaW5lZFxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGVcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9oYXNHbG9iYWxDb250ZXh0VmFyaWFibGUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcy5fZ2xvYmFsQ29udGV4dFZhcmlhYmxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhbiBpbnRlcm5hbCBleGVjdXRpb24gdmFyaWFibGVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldEV4ZWN1dGlvblZhcmlhYmxlKGJsb2NrOiBGbG93R3JhcGhCbG9jaywgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW9uVmFyaWFibGVzW3RoaXMuX2dldFVuaXF1ZUlkUHJlZml4ZWROYW1lKGJsb2NrLCBuYW1lKV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBpbnRlcm5hbCBleGVjdXRpb24gdmFyaWFibGVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ2V0RXhlY3V0aW9uVmFyaWFibGU8VD4oYmxvY2s6IEZsb3dHcmFwaEJsb2NrLCBuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXNFeGVjdXRpb25WYXJpYWJsZShibG9jaywgbmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvblZhcmlhYmxlc1t0aGlzLl9nZXRVbmlxdWVJZFByZWZpeGVkTmFtZShibG9jaywgbmFtZSldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGFuIGludGVybmFsIGV4ZWN1dGlvbiB2YXJpYWJsZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gYmxvY2tcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZGVsZXRlRXhlY3V0aW9uVmFyaWFibGUoYmxvY2s6IEZsb3dHcmFwaEJsb2NrLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5fZXhlY3V0aW9uVmFyaWFibGVzW3RoaXMuX2dldFVuaXF1ZUlkUHJlZml4ZWROYW1lKGJsb2NrLCBuYW1lKV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBpbnRlcm5hbCBleGVjdXRpb24gdmFyaWFibGUgaXMgZGVmaW5lZFxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gYmxvY2tcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2hhc0V4ZWN1dGlvblZhcmlhYmxlKGJsb2NrOiBGbG93R3JhcGhCbG9jaywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFVuaXF1ZUlkUHJlZml4ZWROYW1lKGJsb2NrLCBuYW1lKSBpbiB0aGlzLl9leGVjdXRpb25WYXJpYWJsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIGNvbm5lY3Rpb24gdmFsdWUgaXMgZGVmaW5lZFxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gY29ubmVjdGlvblBvaW50XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2hhc0Nvbm5lY3Rpb25WYWx1ZShjb25uZWN0aW9uUG9pbnQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT4pIHtcclxuICAgICAgICByZXR1cm4gY29ubmVjdGlvblBvaW50LnVuaXF1ZUlkIGluIHRoaXMuX2Nvbm5lY3Rpb25WYWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBjb25uZWN0aW9uIHZhbHVlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBjb25uZWN0aW9uUG9pbnRcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3NldENvbm5lY3Rpb25WYWx1ZTxUPihjb25uZWN0aW9uUG9pbnQ6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPFQ+LCB2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25WYWx1ZXNbY29ubmVjdGlvblBvaW50LnVuaXF1ZUlkXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyPy5hZGRMb2dJdGVtKHtcclxuICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogdGhpcy51bmlxdWVJZCxcclxuICAgICAgICAgICAgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24uU2V0Q29ubmVjdGlvblZhbHVlLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uUG9pbnRJZDogY29ubmVjdGlvblBvaW50LnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBjb25uZWN0aW9uIHZhbHVlIGJ5IGtleVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgb2YgdGhlIGNvbm5lY3Rpb24gdmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIF9zZXRDb25uZWN0aW9uVmFsdWVCeUtleTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uVmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIGNvbm5lY3Rpb24gdmFsdWVcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQHBhcmFtIGNvbm5lY3Rpb25Qb2ludFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9nZXRDb25uZWN0aW9uVmFsdWU8VD4oY29ubmVjdGlvblBvaW50OiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPik6IFQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyPy5hZGRMb2dJdGVtKHtcclxuICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogdGhpcy51bmlxdWVJZCxcclxuICAgICAgICAgICAgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24uR2V0Q29ubmVjdGlvblZhbHVlLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uUG9pbnRJZDogY29ubmVjdGlvblBvaW50LnVuaXF1ZUlkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2Nvbm5lY3Rpb25WYWx1ZXNbY29ubmVjdGlvblBvaW50LnVuaXF1ZUlkXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblZhbHVlc1tjb25uZWN0aW9uUG9pbnQudW5pcXVlSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjb25maWd1cmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBwZW5kaW5nIGJsb2NrcyBpbiB0aGlzIGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIHBlbmRpbmcgYmxvY2tzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaGFzUGVuZGluZ0Jsb2NrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGVuZGluZ0Jsb2Nrcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgYmxvY2sgdG8gdGhlIGxpc3Qgb2YgYmxvY2tzIHRoYXQgaGF2ZSBwZW5kaW5nIHRhc2tzLlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAcGFyYW0gYmxvY2tcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9hZGRQZW5kaW5nQmxvY2soYmxvY2s6IEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2spIHtcclxuICAgICAgICAvLyBjaGVjayBpZiBibG9jayBpcyBhbHJlYWR5IGluIHRoZSBhcnJheVxyXG4gICAgICAgIGlmICh0aGlzLl9wZW5kaW5nQmxvY2tzLmluY2x1ZGVzKGJsb2NrKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmdCbG9ja3MucHVzaChibG9jayk7XHJcbiAgICAgICAgLy8gc29ydCBwZW5kaW5nIGJsb2NrcyBieSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmdCbG9ja3Muc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgYmxvY2sgZnJvbSB0aGUgbGlzdCBvZiBibG9ja3MgdGhhdCBoYXZlIHBlbmRpbmcgdGFza3MuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBibG9ja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX3JlbW92ZVBlbmRpbmdCbG9jayhibG9jazogRmxvd0dyYXBoQXN5bmNFeGVjdXRpb25CbG9jaykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcGVuZGluZ0Jsb2Nrcy5pbmRleE9mKGJsb2NrKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdCbG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBhbGwgcGVuZGluZyBibG9ja3MuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9jbGVhclBlbmRpbmdCbG9ja3MoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLl9wZW5kaW5nQmxvY2tzKSB7XHJcbiAgICAgICAgICAgIGJsb2NrLl9jYW5jZWxQZW5kaW5nVGFza3ModGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BlbmRpbmdCbG9ja3MubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogRnVuY3Rpb24gdGhhdCBub3RpZmllcyB0aGUgbm9kZSBleGVjdXRlZCBvYnNlcnZhYmxlXHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX25vdGlmeUV4ZWN1dGVOb2RlKG5vZGU6IEZsb3dHcmFwaEJsb2NrKSB7XHJcbiAgICAgICAgdGhpcy5vbk5vZGVFeGVjdXRlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyPy5hZGRMb2dJdGVtKHtcclxuICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBub2RlLmdldENsYXNzTmFtZSgpLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogbm9kZS51bmlxdWVJZCxcclxuICAgICAgICAgICAgYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24uRXhlY3V0ZUJsb2NrLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBfbm90aWZ5T25UaWNrKGZyYW1lUGF5bG9hZDogSUZsb3dHcmFwaE9uVGlja0V2ZW50UGF5bG9hZCkge1xyXG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWVzIGFzIGdsb2JhbCB2YXJpYWJsZXNcclxuICAgICAgICB0aGlzLl9zZXRHbG9iYWxDb250ZXh0VmFyaWFibGUoXCJ0aW1lU2luY2VTdGFydFwiLCBmcmFtZVBheWxvYWQudGltZVNpbmNlU3RhcnQpO1xyXG4gICAgICAgIHRoaXMuX3NldEdsb2JhbENvbnRleHRWYXJpYWJsZShcImRlbHRhVGltZVwiLCBmcmFtZVBheWxvYWQuZGVsdGFUaW1lKTtcclxuICAgICAgICAvLyBpdGVyYXRlIHRoZSBwZW5kaW5nIGJsb2NrcyBhbmQgcnVuIGVhY2ggb25lJ3Mgb25GcmFtZSBmdW5jdGlvblxyXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5fcGVuZGluZ0Jsb2Nrcykge1xyXG4gICAgICAgICAgICBibG9jay5fZXhlY3V0ZU9uVGljaz8uKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2luY3JlYXNlRXhlY3V0aW9uSWQoKSB7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW9uSWQrKztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQSBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgSUQgZm9yIGVhY2ggZXhlY3V0aW9uLlxyXG4gICAgICogSW5jcmVtZW50ZWQgZm9yIGV2ZXJ5IGJsb2NrIGV4ZWN1dGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGV4ZWN1dGlvbklkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25JZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgYSBjb250ZXh0XHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHdyaXRlIHRoZSB2YWx1ZXMgaW5cclxuICAgICAqIEBwYXJhbSB2YWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbiBhIGZ1bmN0aW9uIHRvIHNlcmlhbGl6ZSBjb21wbGV4IHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9LCB2YWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbjogKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpID0+IHZvaWQgPSBkZWZhdWx0VmFsdWVTZXJpYWxpemF0aW9uRnVuY3Rpb24pIHtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LnVuaXF1ZUlkID0gdGhpcy51bmlxdWVJZDtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Ll91c2VyVmFyaWFibGVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fdXNlclZhcmlhYmxlcykge1xyXG4gICAgICAgICAgICB2YWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbihrZXksIHRoaXMuX3VzZXJWYXJpYWJsZXNba2V5XSwgc2VyaWFsaXphdGlvbk9iamVjdC5fdXNlclZhcmlhYmxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuX2Nvbm5lY3Rpb25WYWx1ZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9jb25uZWN0aW9uVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uKGtleSwgdGhpcy5fY29ubmVjdGlvblZhbHVlc1trZXldLCBzZXJpYWxpemF0aW9uT2JqZWN0Ll9jb25uZWN0aW9uVmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VyaWFsaXplIGFzc2V0cyBjb250ZXh0LCBpZiBub3Qgc2NlbmVcclxuICAgICAgICBpZiAodGhpcy5hc3NldHNDb250ZXh0ICE9PSB0aGlzLmdldFNjZW5lKCkpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5fYXNzZXRzQ29udGV4dCA9IHtcclxuICAgICAgICAgICAgICAgIG1lc2hlczogdGhpcy5hc3NldHNDb250ZXh0Lm1lc2hlcy5tYXAoKG0pID0+IG0uaWQpLFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzOiB0aGlzLmFzc2V0c0NvbnRleHQubWF0ZXJpYWxzLm1hcCgobSkgPT4gbS5pZCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlczogdGhpcy5hc3NldHNDb250ZXh0LnRleHR1cmVzLm1hcCgobSkgPT4gbS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnM6IHRoaXMuYXNzZXRzQ29udGV4dC5hbmltYXRpb25zLm1hcCgobSkgPT4gbS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIGxpZ2h0czogdGhpcy5hc3NldHNDb250ZXh0LmxpZ2h0cy5tYXAoKG0pID0+IG0uaWQpLFxyXG4gICAgICAgICAgICAgICAgY2FtZXJhczogdGhpcy5hc3NldHNDb250ZXh0LmNhbWVyYXMubWFwKChtKSA9PiBtLmlkKSxcclxuICAgICAgICAgICAgICAgIHNvdW5kczogdGhpcy5hc3NldHNDb250ZXh0LnNvdW5kcz8ubWFwKChtKSA9PiBtLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgc2tlbGV0b25zOiB0aGlzLmFzc2V0c0NvbnRleHQuc2tlbGV0b25zLm1hcCgobSkgPT4gbS5pZCksXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZVN5c3RlbXM6IHRoaXMuYXNzZXRzQ29udGV4dC5wYXJ0aWNsZVN5c3RlbXMubWFwKChtKSA9PiBtLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cmllczogdGhpcy5hc3NldHNDb250ZXh0Lmdlb21ldHJpZXMubWFwKChtKSA9PiBtLmlkKSxcclxuICAgICAgICAgICAgICAgIG11bHRpTWF0ZXJpYWxzOiB0aGlzLmFzc2V0c0NvbnRleHQubXVsdGlNYXRlcmlhbHMubWFwKChtKSA9PiBtLmlkKSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU5vZGVzOiB0aGlzLmFzc2V0c0NvbnRleHQudHJhbnNmb3JtTm9kZXMubWFwKChtKSA9PiBtLmlkKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIkZsb3dHcmFwaENvbnRleHRcIjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE9ic2VydmVyIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGggfSBmcm9tIFwiLi9mbG93R3JhcGhcIjtcclxuaW1wb3J0IHR5cGUgeyBJUGF0aFRvT2JqZWN0Q29udmVydGVyIH0gZnJvbSBcIi4uL09iamVjdE1vZGVsL29iamVjdE1vZGVsSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElPYmplY3RBY2Nlc3NvciB9IGZyb20gXCIuL3R5cGVEZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IElBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL0lBc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5cclxuLyoqXHJcbiAqIFBhcmFtZXRlcnMgdXNlZCB0byBjcmVhdGUgYSBmbG93IGdyYXBoIGVuZ2luZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dHcmFwaENvb3JkaW5hdG9yQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBzY2VuZSB0aGF0IHRoZSBmbG93IGdyYXBoIGVuZ2luZSBiZWxvbmdzIHRvLlxyXG4gICAgICovXHJcbiAgICBzY2VuZTogU2NlbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJhbWV0ZXJzIHVzZWQgdG8gcGFyc2UgYSBmbG93IGdyYXBoIGNvb3JkaW5hdG9yLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoQ29vcmRpbmF0b3JQYXJzZU9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgdG8gcGFyc2UgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgc2VyaWFsaXphdGlvbiBvYmplY3Qgd2hlcmUgdGhlIHByb3BlcnR5IGlzIGxvY2F0ZWRcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhhdCB0aGUgYmxvY2sgaXMgYmVpbmcgcGFyc2VkIGluXHJcbiAgICAgKi9cclxuICAgIHZhbHVlUGFyc2VGdW5jdGlvbj86IChrZXk6IHN0cmluZywgc2VyaWFsaXphdGlvbk9iamVjdDogYW55LCBhc3NldHNDb250YWluZXI6IElBc3NldENvbnRhaW5lciwgc2NlbmU6IFNjZW5lKSA9PiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXRoIGNvbnZlcnRlciB0byB1c2UgdG8gY29udmVydCB0aGUgcGF0aCB0byBhbiBvYmplY3QgYWNjZXNzb3IuXHJcbiAgICAgKi9cclxuICAgIHBhdGhDb252ZXJ0ZXI6IElQYXRoVG9PYmplY3RDb252ZXJ0ZXI8SU9iamVjdEFjY2Vzc29yPjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNjZW5lIHRoYXQgdGhlIGZsb3cgZ3JhcGggY29vcmRpbmF0b3IgYmVsb25ncyB0by5cclxuICAgICAqL1xyXG4gICAgc2NlbmU6IFNjZW5lO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGFsbCBvZiB0aGUgZXhpc3RpbmcgZmxvdyBncmFwaHMgYW5kIGlzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyBuZXcgb25lcy5cclxuICogSXQgYWxzbyBoYW5kbGVzIHN0YXJ0aW5nL3N0b3BwaW5nIG11bHRpcGxlIGdyYXBocyBhbmQgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZW0gdGhyb3VnaCBhbiBFdmVudCBDb29yZGluYXRvclxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIGZsb3cgZ3JhcGggc3lzdGVtLlxyXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY2xhc3MgaXMgc3RpbGwgaW4gZGV2ZWxvcG1lbnQgYW5kIGlzIHN1YmplY3QgdG8gY2hhbmdlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaENvb3JkaW5hdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGV2ZW50cyBwZXIgdHlwZS5cclxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIGV2ZW50cyB0aGF0IGNhbiBiZSBjcmVhdGVkIGluIGEgc2luZ2xlIHNjZW5lLlxyXG4gICAgICogVGhpcyBpcyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1heEV2ZW50c1BlclR5cGU6IG51bWJlciA9IDMwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGV4ZWN1dGlvbiBvZiBhIHNwZWNpZmljIGV2ZW50IGluIGEgc2luZ2xlIGZyYW1lLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1heEV2ZW50VHlwZUV4ZWN1dGlvblBlckZyYW1lOiBudW1iZXIgPSAzMDtcclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBBIGxpc3Qgb2YgYWxsIHRoZSBjb29yZGluYXRvcnMgcGVyIHNjZW5lLiBXaWxsIGJlIHVzZWQgYnkgdGhlIGluc3BlY3RvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNjZW5lQ29vcmRpbmF0b3JzOiBNYXA8U2NlbmUsIEZsb3dHcmFwaENvb3JkaW5hdG9yW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdCkgY3VzdG9tIGV2ZW50cyB3aWxsIGJlIGRpc3BhdGNoZWQgc3luY2hyb25vdXNseS5cclxuICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgZXZlbnRzIHdpbGwgYmUgZGlzcGF0Y2hlZCBpbW1lZGlhdGVseSB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZmxvd0dyYXBoczogRmxvd0dyYXBoW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jdXN0b21FdmVudHNNYXA6IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8YW55Pj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXZlbnRFeGVjdXRpb25Db3VudGVyOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHByaXZhdGUgX2Rpc3Bvc2VPYnNlcnZlcjogT2JzZXJ2ZXI8U2NlbmU+O1xyXG4gICAgcHJpdmF0ZSBfb25CZWZvcmVSZW5kZXJPYnNlcnZlcjogT2JzZXJ2ZXI8U2NlbmU+O1xyXG4gICAgcHJpdmF0ZSBfZXhlY3V0ZU9uTmV4dEZyYW1lOiB7IGlkOiBzdHJpbmc7IGRhdGE/OiBhbnk7IHVuaXF1ZUlkOiBudW1iZXIgfVtdID0gW107XHJcbiAgICBwcml2YXRlIF9ldmVudFVuaXF1ZUlkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYmxvY2tcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY29uZmlnOiBJRmxvd0dyYXBoQ29vcmRpbmF0b3JDb25maWd1cmF0aW9uXHJcbiAgICApIHtcclxuICAgICAgICAvLyBXaGVuIHRoZSBzY2VuZSBpcyBkaXNwb3NlZCwgZGlzcG9zZSBhbGwgZ3JhcGhzIGN1cnJlbnRseSBydW5uaW5nIG9uIGl0LlxyXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VPYnNlcnZlciA9IHRoaXMuY29uZmlnLnNjZW5lLm9uRGlzcG9zZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX29uQmVmb3JlUmVuZGVyT2JzZXJ2ZXIgPSB0aGlzLmNvbmZpZy5zY2VuZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGV2ZW50IGV4ZWN1dGlvbiBjb3VudGVyIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBmcmFtZS5cclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRFeGVjdXRpb25Db3VudGVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIC8vIGR1cGxpY2F0ZSB0aGUgX2V4ZWN1dGVPbk5leHRGcmFtZSBhcnJheSB0byBhdm9pZCBtb2RpZnlpbmcgaXQgd2hpbGUgaXRlcmF0aW5nIG92ZXIgaXRcclxuICAgICAgICAgICAgY29uc3QgZXhlY3V0ZU9uTmV4dEZyYW1lID0gdGhpcy5fZXhlY3V0ZU9uTmV4dEZyYW1lLnNsaWNlKDApO1xyXG4gICAgICAgICAgICBpZiAoZXhlY3V0ZU9uTmV4dEZyYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnRzIHRoYXQgd2VyZSB0cmlnZ2VyZWQgb24gdGhlIG5leHQgZnJhbWUuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV4ZWN1dGVPbk5leHRGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5Q3VzdG9tRXZlbnQoZXZlbnQuaWQsIGV2ZW50LmRhdGEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGV2ZW50IGZyb20gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9leGVjdXRlT25OZXh0RnJhbWUuZmluZEluZGV4KChlKSA9PiBlLnVuaXF1ZUlkID09PSBldmVudC51bmlxdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9leGVjdXRlT25OZXh0RnJhbWUuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGl0c2VsZiB0byB0aGUgU2NlbmVDb29yZGluYXRvcnMgbGlzdCBmb3IgdGhlIEluc3BlY3Rvci5cclxuICAgICAgICBjb25zdCBjb29yZGluYXRvcnMgPSBGbG93R3JhcGhDb29yZGluYXRvci5TY2VuZUNvb3JkaW5hdG9ycy5nZXQodGhpcy5jb25maWcuc2NlbmUpID8/IFtdO1xyXG4gICAgICAgIGNvb3JkaW5hdG9ycy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBmbG93IGdyYXBoIGFuZCBhZGRzIGl0IHRvIHRoZSBsaXN0IG9mIGV4aXN0aW5nIGZsb3cgZ3JhcGhzXHJcbiAgICAgKiBAcmV0dXJucyBhIG5ldyBmbG93IGdyYXBoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVHcmFwaCgpOiBGbG93R3JhcGgge1xyXG4gICAgICAgIGNvbnN0IGdyYXBoID0gbmV3IEZsb3dHcmFwaCh7IHNjZW5lOiB0aGlzLmNvbmZpZy5zY2VuZSwgY29vcmRpbmF0b3I6IHRoaXMgfSk7XHJcbiAgICAgICAgdGhpcy5fZmxvd0dyYXBocy5wdXNoKGdyYXBoKTtcclxuICAgICAgICByZXR1cm4gZ3JhcGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGEgZmxvdyBncmFwaCBmcm9tIHRoZSBsaXN0IG9mIGV4aXN0aW5nIGZsb3cgZ3JhcGhzIGFuZCBkaXNwb3NlcyBpdFxyXG4gICAgICogQHBhcmFtIGdyYXBoIHRoZSBncmFwaCB0byByZW1vdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUdyYXBoKGdyYXBoOiBGbG93R3JhcGgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2Zsb3dHcmFwaHMuaW5kZXhPZihncmFwaCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBncmFwaC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Zsb3dHcmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgYWxsIGdyYXBoc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBncmFwaCBvZiB0aGlzLl9mbG93R3JhcGhzKSB7XHJcbiAgICAgICAgICAgIGdyYXBoLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZXMgYWxsIGdyYXBoc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGdyYXBoIG9mIHRoaXMuX2Zsb3dHcmFwaHMpIHtcclxuICAgICAgICAgICAgZ3JhcGguZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9mbG93R3JhcGhzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZGlzcG9zZU9ic2VydmVyPy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9vbkJlZm9yZVJlbmRlck9ic2VydmVyPy5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGl0c2VsZiBmcm9tIHRoZSBTY2VuZUNvb3JkaW5hdG9ycyBsaXN0IGZvciB0aGUgSW5zcGVjdG9yLlxyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdG9ycyA9IEZsb3dHcmFwaENvb3JkaW5hdG9yLlNjZW5lQ29vcmRpbmF0b3JzLmdldCh0aGlzLmNvbmZpZy5zY2VuZSkgPz8gW107XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb29yZGluYXRvcnMuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvb3JkaW5hdG9ycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBjb29yZGluYXRvciB0byBhIEpTT04gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBzZXJpYWxpemUgdG9cclxuICAgICAqIEBwYXJhbSB2YWx1ZVNlcmlhbGl6ZUZ1bmN0aW9uIHRoZSBmdW5jdGlvbiB0byB1c2UgdG8gc2VyaWFsaXplIHRoZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSwgdmFsdWVTZXJpYWxpemVGdW5jdGlvbj86IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc2VyaWFsaXphdGlvbk9iamVjdDogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5fZmxvd0dyYXBocyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZ3JhcGggb2YgdGhpcy5fZmxvd0dyYXBocykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkR3JhcGggPSB7fTtcclxuICAgICAgICAgICAgZ3JhcGguc2VyaWFsaXplKHNlcmlhbGl6ZWRHcmFwaCwgdmFsdWVTZXJpYWxpemVGdW5jdGlvbik7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuX2Zsb3dHcmFwaHMucHVzaChzZXJpYWxpemVkR3JhcGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseSA9IHRoaXMuZGlzcGF0Y2hFdmVudHNTeW5jaHJvbm91c2x5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiBmbG93IGdyYXBoc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGZsb3dHcmFwaHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zsb3dHcmFwaHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgYmUgbm90aWZpZWQgd2hlbiB0aGUgZXZlbnQgd2l0aCB0aGUgZ2l2ZW4gaWQgaXMgZmlyZWQuXHJcbiAgICAgKiBAcGFyYW0gaWQgdGhlIGlkIG9mIHRoZSBldmVudFxyXG4gICAgICogQHJldHVybnMgdGhlIG9ic2VydmFibGUgZm9yIHRoZSBldmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q3VzdG9tRXZlbnRPYnNlcnZhYmxlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlID0gdGhpcy5fY3VzdG9tRXZlbnRzTWFwLmdldChpZCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIHJlY2VpdmUgZXZlbnQgaXMgaW5pdGlhbGl6ZWQgYmVmb3JlIHNjZW5lIHN0YXJ0LCBzbyBubyBuZWVkIHRvIG5vdGlmeSBpZiB0cmlnZ2VyZWQuIGJ1dCBwb3NzaWJsZSFcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPGFueT4oLyp1bmRlZmluZWQsIHRydWUqLyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1c3RvbUV2ZW50c01hcC5zZXQoaWQsIG9ic2VydmFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoZSBvYnNlcnZhYmxlIGZvciB0aGUgZ2l2ZW4gZXZlbnQgaWQgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBpZCB0aGUgaWQgb2YgdGhlIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gYXN5bmMgaWYgdHJ1ZSwgdGhlIGV2ZW50IHdpbGwgYmUgZGlzcGF0Y2hlZCBhc3luY2hyb25vdXNseVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5Q3VzdG9tRXZlbnQoaWQ6IHN0cmluZywgZGF0YTogYW55LCBhc3luYzogYm9vbGVhbiA9ICF0aGlzLmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseSkge1xyXG4gICAgICAgIGlmIChhc3luYykge1xyXG4gICAgICAgICAgICB0aGlzLl9leGVjdXRlT25OZXh0RnJhbWUucHVzaCh7IGlkLCBkYXRhLCB1bmlxdWVJZDogdGhpcy5fZXZlbnRVbmlxdWVJZCsrIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBub3QgZXhjZWVkaW5nIHRoZSBtYXggbnVtYmVyIG9mIGV2ZW50c1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudEV4ZWN1dGlvbkNvdW50ZXIuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuX2V2ZW50RXhlY3V0aW9uQ291bnRlci5nZXQoaWQpITtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRFeGVjdXRpb25Db3VudGVyLnNldChpZCwgY291bnQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID49IEZsb3dHcmFwaENvb3JkaW5hdG9yLk1heEV2ZW50VHlwZUV4ZWN1dGlvblBlckZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IEZsb3dHcmFwaENvb3JkaW5hdG9yLk1heEV2ZW50VHlwZUV4ZWN1dGlvblBlckZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYEZsb3dHcmFwaENvb3JkaW5hdG9yOiBUb28gbWFueSBleGVjdXRpb25zIG9mIGV2ZW50IFwiJHtpZH1cIi5gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50RXhlY3V0aW9uQ291bnRlci5zZXQoaWQsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5fY3VzdG9tRXZlbnRzTWFwLmdldChpZCk7XHJcbiAgICAgICAgaWYgKG9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDb25uZWN0aW9uLCBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IFJpY2hUeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uIH0gZnJvbSBcIi4vc2VyaWFsaXphdGlvblwiO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNvbm5lY3Rpb24gcG9pbnQgZm9yIGRhdGEuXHJcbiAqIEFuIHVuY29ubmVjdGVkIGlucHV0IHBvaW50IGNhbiBoYXZlIGEgZGVmYXVsdCB2YWx1ZS5cclxuICogQW4gb3V0cHV0IHBvaW50IHdpbGwgb25seSBoYXZlIGEgdmFsdWUgaWYgaXQgaXMgY29ubmVjdGVkIHRvIGFuIGlucHV0IHBvaW50LiBGdXJ0aGVybW9yZSxcclxuICogaWYgdGhlIHBvaW50IGJlbG9uZ3MgdG8gYSBcImZ1bmN0aW9uXCIgbm9kZSwgdGhlIG5vZGUgd2lsbCBydW4gaXRzIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VD4gZXh0ZW5kcyBGbG93R3JhcGhDb25uZWN0aW9uPEZsb3dHcmFwaEJsb2NrLCBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbjxUPj4ge1xyXG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIHVzZWQgZm9yIGRlYnVnZ2luZyBwdXJwb3NlcyEgSXQgaXMgdGhlIGxhc3QgdmFsdWUgdGhhdCB3YXMgc2V0IHRvIHRoaXMgY29ubmVjdGlvbiB3aXRoIEFOWSBjb250ZXh0LlxyXG4gICAgICogRG8gbm90IHVzZSB0aGlzIHZhbHVlIGZvciBhbnl0aGluZyBlbHNlLCBhcyBpdCBtaWdodCBiZSB3cm9uZyBpZiB1c2VkIGluIGEgZGlmZmVyZW50IGNvbnRleHQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2xhc3RWYWx1ZTogTnVsbGFibGU8VD4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogYSBkYXRhIHRyYW5zZm9ybWVyIGZ1bmN0aW9uLCBpZiBuZWVkZWQuXHJcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSwgdG8gZm9yY2Ugc2Vjb25kcyBpbnRvIG1pbGxpc2Vjb25kcyBvdXRwdXQsIGlmIGl0IG1ha2VzIHNlbnNlIGluIHlvdXIgY2FzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRhdGFUcmFuc2Zvcm1lcjogTnVsbGFibGU8KHZhbHVlOiBUKSA9PiBUPiA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBjb25uZWN0aW9uIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblZhbHVlQ2hhbmdlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxUPigpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgZGF0YSBjb25uZWN0aW9uIHBvaW50LlxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbm5lY3Rpb25cclxuICAgICAqIEBwYXJhbSBjb25uZWN0aW9uVHlwZSB0aGUgdHlwZSBvZiB0aGUgY29ubmVjdGlvblxyXG4gICAgICogQHBhcmFtIG93bmVyQmxvY2sgdGhlIGJsb2NrIHRoYXQgb3ducyB0aGlzIGNvbm5lY3Rpb25cclxuICAgICAqIEBwYXJhbSByaWNoVHlwZSB0aGUgdHlwZSBvZiB0aGUgZGF0YSBpbiB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gX2RlZmF1bHRWYWx1ZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvblxyXG4gICAgICogQHBhcmFtIF9vcHRpb25hbCBpZiB0aGUgY29ubmVjdGlvbiBpcyBvcHRpb25hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGNvbm5lY3Rpb25UeXBlOiBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSxcclxuICAgICAgICBvd25lckJsb2NrOiBGbG93R3JhcGhCbG9jayxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0aGUgdHlwZSBvZiB0aGUgZGF0YSBpbiB0aGlzIGJsb2NrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJpY2hUeXBlOiBSaWNoVHlwZTxUPixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBbYW55XSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogVCA9IHJpY2hUeXBlLmRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBbZmFsc2VdIGlmIHRoZSBjb25uZWN0aW9uIGlzIG9wdGlvbmFsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfb3B0aW9uYWw6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY29ubmVjdGlvblR5cGUsIG93bmVyQmxvY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGNvbm5lY3Rpb24gaXMgb3B0aW9uYWwuXHJcbiAgICAgKiBDdXJyZW50bHkgb25seSB1c2VkIGZvciBVSSBjb250cm9sLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG9wdGlvbmFsKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25hbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlzIHRoaXMgY29ubmVjdGlvbiBkaXNhYmxlZFxyXG4gICAgICogSWYgdGhlIGNvbm5lY3Rpb24gaXMgZGlzYWJsZWQgeW91IHdpbGwgbm90IGJlIGFibGUgdG8gY29ubmVjdCBhbnl0aGluZyB0byBpdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc2FibGVkID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RGcm9tQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW4gb3V0cHV0IGRhdGEgYmxvY2sgY2FuIGNvbm5lY3QgdG8gbXVsdGlwbGUgaW5wdXQgZGF0YSBibG9ja3MsXHJcbiAgICAgKiBidXQgYW4gaW5wdXQgZGF0YSBibG9jayBjYW4gb25seSBjb25uZWN0IHRvIG9uZSBvdXRwdXQgZGF0YSBibG9jay5cclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGNvbm5lY3Rpb24gaXMgc2luZ3VsYXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIF9pc1Npbmd1bGFyQ29ubmVjdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uVHlwZSA9PT0gRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUuSW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHZhbHVlIG9mIHRoZSBjb25uZWN0aW9uIGluIGEgc3BlY2lmaWMgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0XHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCB0byB3aGljaCB0aGUgdmFsdWUgaXMgc2V0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogVCwgY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSB2YWx1ZSBpcyBkaWZmZXJlbnRcclxuICAgICAgICBpZiAoY29udGV4dC5fZ2V0Q29ubmVjdGlvblZhbHVlKHRoaXMpID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQuX3NldENvbm5lY3Rpb25WYWx1ZSh0aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSB2YWx1ZSBvZiB0aGUgY29ubmVjdGlvbiB0byB0aGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSB2YWx1ZSBpcyByZXNldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzZXRUb0RlZmF1bHRWYWx1ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29udGV4dC5fc2V0Q29ubmVjdGlvblZhbHVlKHRoaXMsIHRoaXMuX2RlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25uZWN0IHRoaXMgcG9pbnQgdG8gYW5vdGhlciBwb2ludC5cclxuICAgICAqIEBwYXJhbSBwb2ludCB0aGUgcG9pbnQgdG8gY29ubmVjdCB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGNvbm5lY3RUbyhwb2ludDogRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb248VD4pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLmNvbm5lY3RUbyhwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VmFsdWVPckRlZmF1bHQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCk6IFQge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGNvbnRleHQuX2dldENvbm5lY3Rpb25WYWx1ZSh0aGlzKSA/PyB0aGlzLl9kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVRyYW5zZm9ybWVyID8gdGhpcy5kYXRhVHJhbnNmb3JtZXIodmFsKSA6IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBjb25uZWN0aW9uIGluIGEgc3BlY2lmaWMgY29udGV4dC5cclxuICAgICAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGZyb20gd2hpY2ggdGhlIHZhbHVlIGlzIHJldHJpZXZlZFxyXG4gICAgICogQHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRWYWx1ZShjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogVCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblR5cGUgPT09IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlLk91dHB1dCkge1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9ub3RpZnlFeGVjdXRlTm9kZSh0aGlzLl9vd25lckJsb2NrKTtcclxuICAgICAgICAgICAgdGhpcy5fb3duZXJCbG9jay5fdXBkYXRlT3V0cHV0cyhjb250ZXh0KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRWYWx1ZU9yRGVmYXVsdChjb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJpY2hUeXBlLnR5cGVUcmFuc2Zvcm1lciA/IHRoaXMucmljaFR5cGUudHlwZVRyYW5zZm9ybWVyKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICF0aGlzLmlzQ29ubmVjdGVkKCkgPyB0aGlzLl9nZXRWYWx1ZU9yRGVmYXVsdChjb250ZXh0KSA6IHRoaXMuX2Nvbm5lY3RlZFBvaW50WzBdLmdldFZhbHVlKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX2xhc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJpY2hUeXBlLnR5cGVUcmFuc2Zvcm1lciA/IHRoaXMucmljaFR5cGUudHlwZVRyYW5zZm9ybWVyKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfZ2V0TGFzdFZhbHVlKCk6IE51bGxhYmxlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiRmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSB0b1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QucmljaFR5cGUgPSB7fTtcclxuICAgICAgICB0aGlzLnJpY2hUeXBlLnNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0LnJpY2hUeXBlKTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0Lm9wdGlvbmFsID0gdGhpcy5fb3B0aW9uYWw7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlU2VyaWFsaXphdGlvbkZ1bmN0aW9uKFwiZGVmYXVsdFZhbHVlXCIsIHRoaXMuX2RlZmF1bHRWYWx1ZSwgc2VyaWFsaXphdGlvbk9iamVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJGbG93R3JhcGhEYXRhQ29ubmVjdGlvblwiLCBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbik7XHJcbiIsImltcG9ydCB7IEZsb3dHcmFwaEFzeW5jRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbnRleHRcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoRXZlbnRUeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoRXZlbnRUeXBlXCI7XHJcblxyXG4vKipcclxuICogQSB0eXBlIG9mIGJsb2NrIHRoYXQgbGlzdGVucyB0byBhbiBldmVudCBvYnNlcnZhYmxlIGFuZCBhY3RpdmF0ZXNcclxuICogaXRzIG91dHB1dCBzaWduYWwgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZsb3dHcmFwaEV2ZW50QmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhBc3luY0V4ZWN1dGlvbkJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIHByaW9yaXR5IG9mIGluaXRpYWxpemF0aW9uIG9mIHRoaXMgYmxvY2suXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgc2NlbmUgc3RhcnQgc2hvdWxkIGhhdmUgYSBuZWdhdGl2ZSBwcmlvcml0eSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbml0aWFsaXplZCBsYXN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdFByaW9yaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUgPSBGbG93R3JhcGhFdmVudFR5cGUuTm9UcmlnZ2VyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9leGVjdXRlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBjb250ZXh0Ll9ub3RpZnlFeGVjdXRlTm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmRvbmUuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZSB0aGUgZXZlbnQuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgZmxvdyBncmFwaCB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuXHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBpbiB3aGljaCB0aGUgZXZlbnQgaXMgZXhlY3V0ZWRcclxuICAgICAqIEBwYXJhbSBwYXlsb2FkIHRoZSBwYXlsb2FkIG9mIHRoZSBldmVudFxyXG4gICAgICogQHJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgaWYgdGhlIGV2ZW50IHNob3VsZCBzdG9wIHByb3BhZ2F0aW9uLiBpZiBmYWxzZSwgdGhlIGV2ZW50IHdpbGwgc3RvcCBwcm9wYWdhdGluZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IF9leGVjdXRlRXZlbnQoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgcGF5bG9hZDogYW55KTogYm9vbGVhbjtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEJsb2NrXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi9mbG93R3JhcGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XHJcblxyXG4vKipcclxuICogQSBibG9jayB0aGF0IGV4ZWN1dGVzIHNvbWUgYWN0aW9uLiBBbHdheXMgaGFzIGFuIGlucHV0IHNpZ25hbCAod2hpY2ggaXMgbm90IHVzZWQgYnkgZXZlbnQgYmxvY2tzKS5cclxuICogQ2FuIGhhdmUgb25lIG9yIG1vcmUgb3V0cHV0IHNpZ25hbHMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2sgZXh0ZW5kcyBGbG93R3JhcGhCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIElucHV0IGNvbm5lY3Rpb246IFRoZSBpbnB1dCBzaWduYWwgb2YgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW46IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb247XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBvdXRwdXQgY29ubmVjdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNpZ25hbCBhbiBlcnJvciwgaWYgdGhlIGJsb2NrIGRlZmluZXMgaXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBlcnJvcjogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogSW5wdXQgY29ubmVjdGlvbnMgdGhhdCBhY3RpdmF0ZSB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaWduYWxJbnB1dHM6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25bXTtcclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb25zIHRoYXQgY2FuIGFjdGl2YXRlIGRvd25zdHJlYW0gYmxvY2tzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2lnbmFsT3V0cHV0czogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbltdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByaW9yaXR5IG9mIHRoZSBibG9jay4gSGlnaGVyIHByaW9yaXR5IGJsb2NrcyB3aWxsIGJlIGV4ZWN1dGVkIGZpcnN0LlxyXG4gICAgICogTm90ZSB0aGF0IHByaW9yaXR5IGNhbm5vdCBiZSBjaGFuZ2UgQUZURVIgdGhlIGJsb2NrIHdhcyBhZGRlZCBhcyBzb3J0aW5nIGhhcHBlbnMgd2hlbiB0aGUgYmxvY2sgaXMgYWRkZWQgdG8gdGhlIGV4ZWN1dGlvbiBxdWV1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb25maWc/OiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICB0aGlzLnNpZ25hbElucHV0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2lnbmFsT3V0cHV0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW4gPSB0aGlzLl9yZWdpc3RlclNpZ25hbElucHV0KFwiaW5cIik7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuX3JlZ2lzdGVyU2lnbmFsT3V0cHV0KFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEV4ZWN1dGVzIHRoZSBmbG93IGdyYXBoIGV4ZWN1dGlvbiBibG9jay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IF9leGVjdXRlKGNvbnRleHQ6IEZsb3dHcmFwaENvbnRleHQsIGNhbGxpbmdTaWduYWw6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24pOiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBfcmVnaXN0ZXJTaWduYWxJbnB1dChuYW1lOiBzdHJpbmcpOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IG5ldyBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKG5hbWUsIEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlLklucHV0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNpZ25hbElucHV0cy5wdXNoKGlucHV0KTtcclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9yZWdpc3RlclNpZ25hbE91dHB1dChuYW1lOiBzdHJpbmcpOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIHtcclxuICAgICAgICBjb25zdCBvdXRwdXQgPSBuZXcgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbihuYW1lLCBGbG93R3JhcGhDb25uZWN0aW9uVHlwZS5PdXRwdXQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2lnbmFsT3V0cHV0cy5wdXNoKG91dHB1dCk7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3VucmVnaXN0ZXJTaWduYWxJbnB1dChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2lnbmFsSW5wdXRzLmZpbmRJbmRleCgoaW5wdXQpID0+IGlucHV0Lm5hbWUgPT09IG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduYWxJbnB1dHNbaW5kZXhdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduYWxJbnB1dHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF91bnJlZ2lzdGVyU2lnbmFsT3V0cHV0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zaWduYWxPdXRwdXRzLmZpbmRJbmRleCgob3V0cHV0KSA9PiBvdXRwdXQubmFtZSA9PT0gbmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25hbE91dHB1dHNbaW5kZXhdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zaWduYWxPdXRwdXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfcmVwb3J0RXJyb3IoY29udGV4dDogRmxvd0dyYXBoQ29udGV4dCwgZXJyb3I6IEVycm9yIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvci5wYXlsb2FkID0gdHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiID8gbmV3IEVycm9yKGVycm9yKSA6IGVycm9yO1xyXG4gICAgICAgIHRoaXMuZXJyb3IuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBuYW1lIG9mIGEgc2lnbmFsIGlucHV0LCByZXR1cm4gdGhhdCBpbnB1dCBpZiBpdCBleGlzdHNcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxyXG4gICAgICogQHJldHVybnMgaWYgdGhlIGlucHV0IGV4aXN0cywgdGhlIGlucHV0LiBPdGhlcndpc2UsIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNpZ25hbElucHV0KG5hbWU6IHN0cmluZyk6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25hbElucHV0cy5maW5kKChpbnB1dCkgPT4gaW5wdXQubmFtZSA9PT0gbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIG5hbWUgb2YgYSBzaWduYWwgb3V0cHV0LCByZXR1cm4gdGhhdCBpbnB1dCBpZiBpdCBleGlzdHNcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBpbnB1dFxyXG4gICAgICogQHJldHVybnMgaWYgdGhlIGlucHV0IGV4aXN0cywgdGhlIGlucHV0LiBPdGhlcndpc2UsIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNpZ25hbE91dHB1dChuYW1lOiBzdHJpbmcpOiBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaWduYWxPdXRwdXRzLmZpbmQoKG91dHB1dCkgPT4gb3V0cHV0Lm5hbWUgPT09IG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGlzIGJsb2NrXHJcbiAgICAgKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHNlcmlhbGl6ZSBpblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIuc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsSW5wdXRzID0gW107XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zaWduYWxPdXRwdXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLnNpZ25hbElucHV0cykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkSW5wdXQ6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBpbnB1dC5zZXJpYWxpemUoc2VyaWFsaXplZElucHV0KTtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5zaWduYWxJbnB1dHMucHVzaChzZXJpYWxpemVkSW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiB0aGlzLnNpZ25hbE91dHB1dHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZE91dHB1dDogYW55ID0ge307XHJcbiAgICAgICAgICAgIG91dHB1dC5zZXJpYWxpemUoc2VyaWFsaXplZE91dHB1dCk7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsT3V0cHV0cy5wdXNoKHNlcmlhbGl6ZWRPdXRwdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VyaWFsaXplcyBmcm9tIGFuIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBmcm9tXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBkZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hbElucHV0ID0gdGhpcy5nZXRTaWduYWxJbnB1dChzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbElucHV0c1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKHNpZ25hbElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBzaWduYWxJbnB1dC5kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0LnNpZ25hbElucHV0c1tpXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzaWduYWwgaW5wdXQgd2l0aCBuYW1lIFwiICsgc2VyaWFsaXphdGlvbk9iamVjdC5zaWduYWxJbnB1dHNbaV0ubmFtZSArIFwiIGluIGJsb2NrIFwiICsgc2VyaWFsaXphdGlvbk9iamVjdC5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VyaWFsaXphdGlvbk9iamVjdC5zaWduYWxPdXRwdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hbE91dHB1dCA9IHRoaXMuZ2V0U2lnbmFsT3V0cHV0KHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsT3V0cHV0c1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKHNpZ25hbE91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgc2lnbmFsT3V0cHV0LmRlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsT3V0cHV0c1tpXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzaWduYWwgb3V0cHV0IHdpdGggbmFtZSBcIiArIHNlcmlhbGl6YXRpb25PYmplY3Quc2lnbmFsT3V0cHV0c1tpXS5uYW1lICsgXCIgaW4gYmxvY2sgXCIgKyBzZXJpYWxpemF0aW9uT2JqZWN0LmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2xhc3MgbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2tcIjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhCbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBBbiBleGVjdXRpb24gYmxvY2sgdGhhdCBoYXMgYW4gb3V0IHNpZ25hbC4gVGhpcyBzaWduYWwgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN5bmNocm9ub3VzIGV4ZWN1dGlvbiBvZiB0aGlzIGJsb2NrIGlzIGRvbmUuXHJcbiAqIE1vc3QgZXhlY3V0aW9uIGJsb2NrcyB3aWxsIGluaGVyaXQgZnJvbSB0aGlzLCBleGNlcHQgZm9yIHRoZSBvbmVzIHRoYXQgaGF2ZSBtdWx0aXBsZSBzaWduYWxzIHRvIGJlIHRyaWdnZXJlZC5cclxuICogKHN1Y2ggYXMgaWYgYmxvY2tzKVxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrV2l0aE91dFNpZ25hbCBleHRlbmRzIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IGNvbm5lY3Rpb246IFRoZSBzaWduYWwgdGhhdCBpcyBzeW5jaHJvbm91cyB0cmlnZ2VyZWQgd2hlbiB0aGUgZXhlY3V0aW9uIG9mIHRoaXMgYmxvY2sgaXMgZG9uZS5cclxuICAgICAqIE5vdGUgdGhhdCBpcyBjYXNlIG9mIGV2ZW50cyBvciBhc3luYyB5b3UgbWlnaHQgd2FudCB0byB1c2UgdGhlIGBkb25lYCBzaWduYWwgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG91dDogRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29uZmlnPzogSUZsb3dHcmFwaEJsb2NrQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5vdXQgPSB0aGlzLl9yZWdpc3RlclNpZ25hbE91dHB1dChcIm91dFwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xuXG5leHBvcnQgY29uc3QgZW51bSBGbG93R3JhcGhBY3Rpb24ge1xuICAgIEV4ZWN1dGVCbG9jayA9IFwiRXhlY3V0ZUJsb2NrXCIsXG4gICAgRXhlY3V0ZUV2ZW50ID0gXCJFeGVjdXRlRXZlbnRcIixcbiAgICBUcmlnZ2VyQ29ubmVjdGlvbiA9IFwiVHJpZ2dlckNvbm5lY3Rpb25cIixcbiAgICBDb250ZXh0VmFyaWFibGVTZXQgPSBcIkNvbnRleHRWYXJpYWJsZVNldFwiLFxuICAgIEdsb2JhbFZhcmlhYmxlU2V0ID0gXCJHbG9iYWxWYXJpYWJsZVNldFwiLFxuICAgIEdsb2JhbFZhcmlhYmxlRGVsZXRlID0gXCJHbG9iYWxWYXJpYWJsZURlbGV0ZVwiLFxuICAgIEdsb2JhbFZhcmlhYmxlR2V0ID0gXCJHbG9iYWxWYXJpYWJsZUdldFwiLFxuICAgIEFkZENvbm5lY3Rpb24gPSBcIkFkZENvbm5lY3Rpb25cIixcbiAgICBHZXRDb25uZWN0aW9uVmFsdWUgPSBcIkdldENvbm5lY3Rpb25WYWx1ZVwiLFxuICAgIFNldENvbm5lY3Rpb25WYWx1ZSA9IFwiU2V0Q29ubmVjdGlvblZhbHVlXCIsXG4gICAgQWN0aXZhdGVTaWduYWwgPSBcIkFjdGl2YXRlU2lnbmFsXCIsXG4gICAgQ29udGV4dFZhcmlhYmxlR2V0ID0gXCJDb250ZXh0VmFyaWFibGVHZXRcIixcbn1cblxuLyoqXG4gKiBBbiBpdGVtIGluIHRoZSBmbG93IGdyYXBoIGxvZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoTG9nSXRlbSB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgb2YgdGhlIGxvZyBpdGVtLlxuICAgICAqL1xuICAgIHRpbWU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIHRoYXQgdHJpZ2dlcmVkIHRoZSBsb2cuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgYmxvY2svbW9kdWxlIHRoYXQgdHJpZ2dlcmVkIHRoZSBsb2cuXG4gICAgICovXG4gICAgdW5pcXVlSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aW9uIHRoYXQgd2FzIGxvZ2dlZC5cbiAgICAgKi9cbiAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGF5bG9hZCBvZiB0aGUgbG9nXG4gICAgICogVGhpcyBjYW4gYmUgYW55IGRhdGEgdGhhdCBpcyByZWxldmFudCB0byB0aGUgYWN0aW9uLlxuICAgICAqIEZvciBleGFtcGxlLCB0aGUgdmFsdWUgb2YgYSBjb25uZWN0aW9uLCB0aGUgdmFsdWUgb2YgYSB2YXJpYWJsZSwgZXRjLlxuICAgICAqIFRoaXMgaXMgb3B0aW9uYWwuXG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHdpbGwgYmUgcmVzcG9uc2libGUgb2YgbG9nZ2luZyB0aGUgZmxvdyBncmFwaCBhY3Rpdml0eS5cbiAqIE5vdGUgdGhhdCB1c2luZyB0aGlzIGNsYXNzIG1pZ2h0IHJlZHVjZSBwZXJmb3JtYW5jZSwgYXMgaXQgd2lsbCBsb2cgZXZlcnkgYWN0aW9uLCBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4gKiBJdCBhdHRhY2hlcyB0byBhIGZsb3cgZ3JhcGggYW5kIHVzZXMgbWV0YS1wcm9ncmFtbWluZyB0byByZXBsYWNlIHRoZSBtZXRob2RzIG9mIHRoZSBmbG93IGdyYXBoIHRvIGFkZCBsb2dnaW5nIGFiaWxpdGllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZsb3dHcmFwaExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBsb2cgdG8gdGhlIGNvbnNvbGUuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1RvQ29uc29sZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvZyBjYWNoZSBvZiB0aGUgZmxvdyBncmFwaC5cbiAgICAgKiBFYWNoIGl0ZW0gaXMgYSBsb2dnZWQgaXRlbSwgaW4gb3JkZXIgb2YgZXhlY3V0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2c6IElGbG93R3JhcGhMb2dJdGVtW10gPSBbXTtcblxuICAgIHB1YmxpYyBhZGRMb2dJdGVtKGl0ZW06IElGbG93R3JhcGhMb2dJdGVtKSB7XG4gICAgICAgIGlmICghaXRlbS50aW1lKSB7XG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nLnB1c2goaXRlbSk7XG4gICAgICAgIGlmICh0aGlzLmxvZ1RvQ29uc29sZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLnBheWxvYWQ/LnZhbHVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZS5nZXRDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuTG9nKGBbRkdMb2ddICR7aXRlbS5jbGFzc05hbWV9OiR7aXRlbS51bmlxdWVJZC5zcGxpdChcIi1cIilbMF19ICR7aXRlbS5hY3Rpb259IC0gJHtKU09OLnN0cmluZ2lmeSh2YWx1ZS5nZXRDbGFzc05hbWUoKSl9OiAke3ZhbHVlLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlci5Mb2coYFtGR0xvZ10gJHtpdGVtLmNsYXNzTmFtZX06JHtpdGVtLnVuaXF1ZUlkLnNwbGl0KFwiLVwiKVswXX0gJHtpdGVtLmFjdGlvbn0gLSAke0pTT04uc3RyaW5naWZ5KGl0ZW0ucGF5bG9hZCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbXNPZlR5cGUoYWN0aW9uOiBGbG93R3JhcGhBY3Rpb24pOiBJRmxvd0dyYXBoTG9nSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nLmZpbHRlcigoaSkgPT4gaS5hY3Rpb24gPT09IGFjdGlvbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcbmltcG9ydCB7IGJsb2NrRmFjdG9yeSB9IGZyb20gXCIuL0Jsb2Nrcy9mbG93R3JhcGhCbG9ja0ZhY3RvcnlcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCIuL0Jsb2Nrcy9mbG93R3JhcGhCbG9ja05hbWVzXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaCwgSUZsb3dHcmFwaFBhcnNlT3B0aW9ucyB9IGZyb20gXCIuL2Zsb3dHcmFwaFwiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhCbG9jaywgSUZsb3dHcmFwaEJsb2NrUGFyc2VPcHRpb25zIH0gZnJvbSBcIi4vZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQ29udGV4dCwgSUZsb3dHcmFwaENvbnRleHRQYXJzZU9wdGlvbnMgfSBmcm9tIFwiLi9mbG93R3JhcGhDb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhDb29yZGluYXRvclBhcnNlT3B0aW9ucyB9IGZyb20gXCIuL2Zsb3dHcmFwaENvb3JkaW5hdG9yXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhDb29yZGluYXRvciB9IGZyb20gXCIuL2Zsb3dHcmFwaENvb3JkaW5hdG9yXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoRGF0YUNvbm5lY3Rpb25cIjtcbmltcG9ydCB7IEZsb3dHcmFwaEV2ZW50QmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhFdmVudEJsb2NrXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhFeGVjdXRpb25CbG9jayB9IGZyb20gXCIuL2Zsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24gfSBmcm9tIFwiLi9mbG93R3JhcGhTaWduYWxDb25uZWN0aW9uXCI7XG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVQYXJzZUZ1bmN0aW9uLCBuZWVkc1BhdGhDb252ZXJ0ZXIgfSBmcm9tIFwiLi9zZXJpYWxpemF0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IElTZXJpYWxpemVkRmxvd0dyYXBoLCBJU2VyaWFsaXplZEZsb3dHcmFwaEJsb2NrLCBJU2VyaWFsaXplZEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiLi90eXBlRGVmaW5pdGlvbnNcIjtcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcbmltcG9ydCB7IGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlLCBSaWNoVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaFJpY2hUeXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb25uZWN0aW9uIH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29ubmVjdGlvblwiO1xuXG4vKipcbiAqIEdpdmVuIGEgbGlzdCBvZiBibG9ja3MsIGZpbmQgYW4gb3V0cHV0IGRhdGEgY29ubmVjdGlvbiB0aGF0IGhhcyBhIHNwZWNpZmljIHVuaXF1ZSBpZFxuICogQHBhcmFtIGJsb2NrcyBhIGxpc3Qgb2YgZmxvdyBncmFwaCBibG9ja3NcbiAqIEBwYXJhbSB1bmlxdWVJZCB0aGUgdW5pcXVlIGlkIG9mIGEgY29ubmVjdGlvblxuICogQHJldHVybnMgdGhlIGNvbm5lY3Rpb24gdGhhdCBoYXMgdGhpcyB1bmlxdWUgaWQuIHRocm93cyBhbiBlcnJvciBpZiBub25lIHdhcyBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0RGF0YU91dENvbm5lY3Rpb25CeVVuaXF1ZUlkKGJsb2NrczogRmxvd0dyYXBoQmxvY2tbXSwgdW5pcXVlSWQ6IHN0cmluZyk6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT4ge1xuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgYmxvY2tzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZGF0YU91dCBvZiBibG9jay5kYXRhT3V0cHV0cykge1xuICAgICAgICAgICAgaWYgKGRhdGFPdXQudW5pcXVlSWQgPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFPdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgZGF0YSBvdXQgY29ubmVjdGlvbiB3aXRoIHVuaXF1ZSBpZCBcIiArIHVuaXF1ZUlkKTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgYmxvY2tzLCBmaW5kIGFuIGlucHV0IHNpZ25hbCBjb25uZWN0aW9uIHRoYXQgaGFzIGEgc3BlY2lmaWMgdW5pcXVlIGlkXG4gKiBAcGFyYW0gYmxvY2tzIGEgbGlzdCBvZiBmbG93IGdyYXBoIGJsb2Nrc1xuICogQHBhcmFtIHVuaXF1ZUlkIHRoZSB1bmlxdWUgaWQgb2YgYSBjb25uZWN0aW9uXG4gKiBAcmV0dXJucyB0aGUgY29ubmVjdGlvbiB0aGF0IGhhcyB0aGlzIHVuaXF1ZSBpZC4gdGhyb3dzIGFuIGVycm9yIGlmIG5vbmUgd2FzIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRTaWduYWxJbkNvbm5lY3Rpb25CeVVuaXF1ZUlkKGJsb2NrczogRmxvd0dyYXBoQmxvY2tbXSwgdW5pcXVlSWQ6IHN0cmluZyk6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24ge1xuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgYmxvY2tzKSB7XG4gICAgICAgIGlmIChibG9jayBpbnN0YW5jZW9mIEZsb3dHcmFwaEV4ZWN1dGlvbkJsb2NrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNpZ25hbEluIG9mIGJsb2NrLnNpZ25hbElucHV0cykge1xuICAgICAgICAgICAgICAgIGlmIChzaWduYWxJbi51bmlxdWVJZCA9PT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25hbEluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzaWduYWwgaW4gY29ubmVjdGlvbiB3aXRoIHVuaXF1ZSBpZCBcIiArIHVuaXF1ZUlkKTtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBzZXJpYWxpemVkIGNvb3JkaW5hdG9yLlxuICogQHBhcmFtIHNlcmlhbGl6ZWRPYmplY3QgdGhlIG9iamVjdCB0byBwYXJzZVxuICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgdG8gdXNlIHdoZW4gcGFyc2luZ1xuICogQHJldHVybnMgdGhlIHBhcnNlZCBjb29yZGluYXRvclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUGFyc2VDb29yZGluYXRvckFzeW5jKHNlcmlhbGl6ZWRPYmplY3Q6IGFueSwgb3B0aW9uczogSUZsb3dHcmFwaENvb3JkaW5hdG9yUGFyc2VPcHRpb25zKSB7XG4gICAgY29uc3QgdmFsdWVQYXJzZUZ1bmN0aW9uID0gb3B0aW9ucy52YWx1ZVBhcnNlRnVuY3Rpb24gPz8gZGVmYXVsdFZhbHVlUGFyc2VGdW5jdGlvbjtcbiAgICBjb25zdCBjb29yZGluYXRvciA9IG5ldyBGbG93R3JhcGhDb29yZGluYXRvcih7IHNjZW5lOiBvcHRpb25zLnNjZW5lIH0pO1xuXG4gICAgaWYgKHNlcmlhbGl6ZWRPYmplY3QuZGlzcGF0Y2hFdmVudHNTeW5jaHJvbm91c2x5KSB7XG4gICAgICAgIGNvb3JkaW5hdG9yLmRpc3BhdGNoRXZlbnRzU3luY2hyb25vdXNseSA9IHNlcmlhbGl6ZWRPYmplY3QuZGlzcGF0Y2hFdmVudHNTeW5jaHJvbm91c2x5O1xuICAgIH1cblxuICAgIGF3YWl0IG9wdGlvbnMuc2NlbmUud2hlblJlYWR5QXN5bmMoKTtcbiAgICAvLyBpZiBjdXN0b20gZGVmYXVsdCB2YWx1ZXMgYXJlIGRlZmluZWQsIHNldCB0aGVtIGluIHRoZSBnbG9iYWwgY29udGV4dFxuICAgIGlmIChzZXJpYWxpemVkT2JqZWN0Ll9kZWZhdWx0VmFsdWVzKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlcmlhbGl6ZWRPYmplY3QuX2RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgIC8vIGtleSBpcyB0aGUgRmxvd0dyYXBoVHlwZSwgdmFsdWUgaXMgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2VyaWFsaXplZE9iamVjdC5fZGVmYXVsdFZhbHVlc1trZXldO1xuICAgICAgICAgICAgZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUoa2V5KS5kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhc3luYy1wYXJzZSB0aGUgZmxvdyBncmFwaHMuIFRoaXMgY2FuIGJlIGRvbmUgaW4gcGFyYWxsZWxcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgc2VyaWFsaXplZE9iamVjdC5fZmxvd0dyYXBocz8ubWFwKFxuICAgICAgICAgICAgYXN5bmMgKHNlcmlhbGl6ZWRHcmFwaDogYW55KSA9PiBhd2FpdCBQYXJzZUZsb3dHcmFwaEFzeW5jKHNlcmlhbGl6ZWRHcmFwaCwgeyBjb29yZGluYXRvciwgdmFsdWVQYXJzZUZ1bmN0aW9uLCBwYXRoQ29udmVydGVyOiBvcHRpb25zLnBhdGhDb252ZXJ0ZXIgfSlcbiAgICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdG9yO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGdyYXBoIGZyb20gYSBnaXZlbiBzZXJpYWxpemF0aW9uIG9iamVjdFxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB3aGVyZSB0aGUgdmFsdWVzIGFyZSB3cml0dGVuXG4gKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIGZvciBwYXJzaW5nIHRoZSBncmFwaFxuICogQHJldHVybnMgdGhlIHBhcnNlZCBncmFwaFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUGFyc2VGbG93R3JhcGhBc3luYyhzZXJpYWxpemF0aW9uT2JqZWN0OiBJU2VyaWFsaXplZEZsb3dHcmFwaCwgb3B0aW9uczogSUZsb3dHcmFwaFBhcnNlT3B0aW9ucyk6IFByb21pc2U8Rmxvd0dyYXBoPiB7XG4gICAgLy8gZ2V0IGFsbCBjbGFzc2VzIHR5cGVzIG5lZWRlZCBmb3IgdGhlIGJsb2NrcyB1c2luZyB0aGUgYmxvY2sgZmFjdG9yeVxuICAgIGNvbnN0IHJlc29sdmVkQ2xhc3NlcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmFsbEJsb2Nrcy5tYXAoYXN5bmMgKHNlcmlhbGl6ZWRCbG9jaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NGYWN0b3J5ID0gYmxvY2tGYWN0b3J5KHNlcmlhbGl6ZWRCbG9jay5jbGFzc05hbWUgYXMgRmxvd0dyYXBoQmxvY2tOYW1lcyk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY2xhc3NGYWN0b3J5KCk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBhc3luYyB3aWxsIGJlIHVzZWQgd2hlbiB3ZSBzdGFydCB1c2luZyB0aGUgYmxvY2sgYXN5bmMgZmFjdG9yeVxuICAgIHJldHVybiBQYXJzZUZsb3dHcmFwaChzZXJpYWxpemF0aW9uT2JqZWN0LCBvcHRpb25zLCByZXNvbHZlZENsYXNzZXMpO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGdyYXBoIGZyb20gYSBnaXZlbiBzZXJpYWxpemF0aW9uIG9iamVjdFxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB3aGVyZSB0aGUgdmFsdWVzIGFyZSB3cml0dGVuXG4gKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIGZvciBwYXJzaW5nIHRoZSBncmFwaFxuICogQHBhcmFtIHJlc29sdmVkQ2xhc3NlcyB0aGUgcmVzb2x2ZWQgY2xhc3NlcyBmb3IgdGhlIGJsb2Nrc1xuICogQHJldHVybnMgdGhlIHBhcnNlZCBncmFwaFxuICovXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VGbG93R3JhcGgoc2VyaWFsaXphdGlvbk9iamVjdDogSVNlcmlhbGl6ZWRGbG93R3JhcGgsIG9wdGlvbnM6IElGbG93R3JhcGhQYXJzZU9wdGlvbnMsIHJlc29sdmVkQ2xhc3NlczogKHR5cGVvZiBGbG93R3JhcGhCbG9jaylbXSkge1xuICAgIGNvbnN0IGdyYXBoID0gb3B0aW9ucy5jb29yZGluYXRvci5jcmVhdGVHcmFwaCgpO1xuICAgIGNvbnN0IGJsb2NrczogRmxvd0dyYXBoQmxvY2tbXSA9IFtdO1xuICAgIGNvbnN0IHZhbHVlUGFyc2VGdW5jdGlvbiA9IG9wdGlvbnMudmFsdWVQYXJzZUZ1bmN0aW9uID8/IGRlZmF1bHRWYWx1ZVBhcnNlRnVuY3Rpb247XG4gICAgLy8gUGFyc2UgYWxsIGJsb2Nrc1xuICAgIC8vIGZvciAoY29uc3Qgc2VyaWFsaXplZEJsb2NrIG9mIHNlcmlhbGl6YXRpb25PYmplY3QuYWxsQmxvY2tzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpYWxpemF0aW9uT2JqZWN0LmFsbEJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkQmxvY2sgPSBzZXJpYWxpemF0aW9uT2JqZWN0LmFsbEJsb2Nrc1tpXTtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBQYXJzZUZsb3dHcmFwaEJsb2NrV2l0aENsYXNzVHlwZShcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRCbG9jayxcbiAgICAgICAgICAgIHsgc2NlbmU6IG9wdGlvbnMuY29vcmRpbmF0b3IuY29uZmlnLnNjZW5lLCBwYXRoQ29udmVydGVyOiBvcHRpb25zLnBhdGhDb252ZXJ0ZXIsIGFzc2V0c0NvbnRhaW5lcjogb3B0aW9ucy5jb29yZGluYXRvci5jb25maWcuc2NlbmUsIHZhbHVlUGFyc2VGdW5jdGlvbiB9LFxuICAgICAgICAgICAgcmVzb2x2ZWRDbGFzc2VzW2ldXG4gICAgICAgICk7XG4gICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgICAgaWYgKGJsb2NrIGluc3RhbmNlb2YgRmxvd0dyYXBoRXZlbnRCbG9jaykge1xuICAgICAgICAgICAgZ3JhcGguYWRkRXZlbnRCbG9jayhibG9jayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZ0ZXIgcGFyc2luZyBhbGwgYmxvY2tzLCBjb25uZWN0IHRoZW1cbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGFJbiBvZiBibG9jay5kYXRhSW5wdXRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlcmlhbGl6ZWRDb25uZWN0aW9uIG9mIGRhdGFJbi5jb25uZWN0ZWRQb2ludElkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBHZXREYXRhT3V0Q29ubmVjdGlvbkJ5VW5pcXVlSWQoYmxvY2tzLCBzZXJpYWxpemVkQ29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgZGF0YUluLmNvbm5lY3RUbyhjb25uZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2sgaW5zdGFuY2VvZiBGbG93R3JhcGhFeGVjdXRpb25CbG9jaykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzaWduYWxPdXQgb2YgYmxvY2suc2lnbmFsT3V0cHV0cykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2VyaWFsaXplZENvbm5lY3Rpb24gb2Ygc2lnbmFsT3V0LmNvbm5lY3RlZFBvaW50SWRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBHZXRTaWduYWxJbkNvbm5lY3Rpb25CeVVuaXF1ZUlkKGJsb2Nrcywgc2VyaWFsaXplZENvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzaWduYWxPdXQuY29ubmVjdFRvKGNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNlcmlhbGl6ZWRDb250ZXh0IG9mIHNlcmlhbGl6YXRpb25PYmplY3QuZXhlY3V0aW9uQ29udGV4dHMpIHtcbiAgICAgICAgUGFyc2VGbG93R3JhcGhDb250ZXh0KHNlcmlhbGl6ZWRDb250ZXh0LCB7IGdyYXBoLCB2YWx1ZVBhcnNlRnVuY3Rpb24gfSwgc2VyaWFsaXphdGlvbk9iamVjdC5yaWdodEhhbmRlZCk7XG4gICAgfVxuICAgIHJldHVybiBncmFwaDtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBjb250ZXh0XG4gKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGNvbnRleHQgc2VyaWFsaXphdGlvbiB2YWx1ZXNcbiAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciBwYXJzaW5nIHRoZSBjb250ZXh0XG4gKiBAcGFyYW0gcmlnaHRIYW5kZWQgd2hldGhlciB0aGUgc2VyaWFsaXplZCBkYXRhIGlzIHJpZ2h0IGhhbmRlZFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlRmxvd0dyYXBoQ29udGV4dChzZXJpYWxpemF0aW9uT2JqZWN0OiBJU2VyaWFsaXplZEZsb3dHcmFwaENvbnRleHQsIG9wdGlvbnM6IElGbG93R3JhcGhDb250ZXh0UGFyc2VPcHRpb25zLCByaWdodEhhbmRlZD86IGJvb2xlYW4pOiBGbG93R3JhcGhDb250ZXh0IHtcbiAgICBjb25zdCByZXN1bHQgPSBvcHRpb25zLmdyYXBoLmNyZWF0ZUNvbnRleHQoKTtcbiAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC5lbmFibGVMb2dnaW5nKSB7XG4gICAgICAgIHJlc3VsdC5lbmFibGVMb2dnaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVzdWx0LnRyZWF0RGF0YUFzUmlnaHRIYW5kZWQgPSByaWdodEhhbmRlZCB8fCBmYWxzZTtcbiAgICBjb25zdCB2YWx1ZVBhcnNlRnVuY3Rpb24gPSBvcHRpb25zLnZhbHVlUGFyc2VGdW5jdGlvbiA/PyBkZWZhdWx0VmFsdWVQYXJzZUZ1bmN0aW9uO1xuICAgIHJlc3VsdC51bmlxdWVJZCA9IHNlcmlhbGl6YXRpb25PYmplY3QudW5pcXVlSWQ7XG4gICAgY29uc3Qgc2NlbmUgPSByZXN1bHQuZ2V0U2NlbmUoKTtcbiAgICAvLyBjaGVjayBpZiBhc3NldHMgY29udGV4dCBpcyBhdmFpbGFibGVcbiAgICBpZiAoc2VyaWFsaXphdGlvbk9iamVjdC5fYXNzZXRzQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhYyA9IHNlcmlhbGl6YXRpb25PYmplY3QuX2Fzc2V0c0NvbnRleHQ7XG4gICAgICAgIGNvbnN0IGFzc2V0c0NvbnRleHQ6IElBc3NldENvbnRhaW5lciA9IHtcbiAgICAgICAgICAgIG1lc2hlczogYWMubWVzaGVzPy5tYXAoKG06IHN0cmluZykgPT4gc2NlbmUuZ2V0TWVzaEJ5SWQobSkpLFxuICAgICAgICAgICAgbGlnaHRzOiBhYy5saWdodHM/Lm1hcCgobDogc3RyaW5nKSA9PiBzY2VuZS5nZXRMaWdodEJ5TmFtZShsKSksXG4gICAgICAgICAgICBjYW1lcmFzOiBhYy5jYW1lcmFzPy5tYXAoKGM6IHN0cmluZykgPT4gc2NlbmUuZ2V0Q2FtZXJhQnlOYW1lKGMpKSxcbiAgICAgICAgICAgIG1hdGVyaWFsczogYWMubWF0ZXJpYWxzPy5tYXAoKG06IHN0cmluZykgPT4gc2NlbmUuZ2V0TWF0ZXJpYWxCeUlkKG0pKSxcbiAgICAgICAgICAgIHRleHR1cmVzOiBhYy50ZXh0dXJlcz8ubWFwKCh0OiBzdHJpbmcpID0+IHNjZW5lLmdldFRleHR1cmVCeU5hbWUodCkpLFxuICAgICAgICAgICAgYW5pbWF0aW9uczogYWMuYW5pbWF0aW9ucz8ubWFwKChhOiBzdHJpbmcpID0+IHNjZW5lLmFuaW1hdGlvbnMuZmluZCgoYW5pbSkgPT4gYW5pbS5uYW1lID09PSBhKSksXG4gICAgICAgICAgICBza2VsZXRvbnM6IGFjLnNrZWxldG9ucz8ubWFwKChzOiBzdHJpbmcpID0+IHNjZW5lLmdldFNrZWxldG9uQnlOYW1lKHMpKSxcbiAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogYWMucGFydGljbGVTeXN0ZW1zPy5tYXAoKHBzOiBzdHJpbmcpID0+IHNjZW5lLmdldFBhcnRpY2xlU3lzdGVtQnlJZChwcykpLFxuICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzOiBhYy5hbmltYXRpb25Hcm91cHM/Lm1hcCgoYWc6IHN0cmluZykgPT4gc2NlbmUuZ2V0QW5pbWF0aW9uR3JvdXBCeU5hbWUoYWcpKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybU5vZGVzOiBhYy50cmFuc2Zvcm1Ob2Rlcz8ubWFwKCh0bjogc3RyaW5nKSA9PiBzY2VuZS5nZXRUcmFuc2Zvcm1Ob2RlQnlJZCh0bikpLFxuICAgICAgICAgICAgcm9vdE5vZGVzOiBbXSxcbiAgICAgICAgICAgIG11bHRpTWF0ZXJpYWxzOiBbXSxcbiAgICAgICAgICAgIG1vcnBoVGFyZ2V0TWFuYWdlcnM6IFtdLFxuICAgICAgICAgICAgZ2VvbWV0cmllczogW10sXG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyczogW10sXG4gICAgICAgICAgICBlbnZpcm9ubWVudFRleHR1cmU6IG51bGwsXG4gICAgICAgICAgICBwb3N0UHJvY2Vzc2VzOiBbXSxcbiAgICAgICAgICAgIHNvdW5kczogbnVsbCxcbiAgICAgICAgICAgIGVmZmVjdExheWVyczogW10sXG4gICAgICAgICAgICBsYXllcnM6IFtdLFxuICAgICAgICAgICAgcmVmbGVjdGlvblByb2JlczogW10sXG4gICAgICAgICAgICBsZW5zRmxhcmVTeXN0ZW1zOiBbXSxcbiAgICAgICAgICAgIHByb2NlZHVyYWxUZXh0dXJlczogW10sXG4gICAgICAgICAgICBnZXROb2RlczogZnVuY3Rpb24gKCk6IEFycmF5PE5vZGU+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LmFzc2V0c0NvbnRleHQgPSBhc3NldHNDb250ZXh0O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzZXJpYWxpemF0aW9uT2JqZWN0Ll91c2VyVmFyaWFibGVzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVQYXJzZUZ1bmN0aW9uKGtleSwgc2VyaWFsaXphdGlvbk9iamVjdC5fdXNlclZhcmlhYmxlcywgcmVzdWx0LmFzc2V0c0NvbnRleHQsIHNjZW5lKTtcbiAgICAgICAgcmVzdWx0LnVzZXJWYXJpYWJsZXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzZXJpYWxpemF0aW9uT2JqZWN0Ll9jb25uZWN0aW9uVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVQYXJzZUZ1bmN0aW9uKGtleSwgc2VyaWFsaXphdGlvbk9iamVjdC5fY29ubmVjdGlvblZhbHVlcywgcmVzdWx0LmFzc2V0c0NvbnRleHQsIHNjZW5lKTtcbiAgICAgICAgcmVzdWx0Ll9zZXRDb25uZWN0aW9uVmFsdWVCeUtleShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGJsb2NrIGZyb20gYSBzZXJpYWxpemF0aW9uIG9iamVjdFxuICogVGhpcyBmdW5jdGlvbiBpcyBhc3luYyBkdWUgdG8gdGhlIGZhY3RvcnkgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIGJsb2NrJ3MgY2xhc3MuIElmIHlvdSBsb2FkIHRoZSBjbGFzcyBleHRlcm5hbGx5IHVzZSBQYXJzZUJsb2NrV2l0aENsYXNzVHlwZVxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0byBwYXJzZSBmcm9tXG4gKiBAcGFyYW0gcGFyc2VPcHRpb25zIG9wdGlvbnMgZm9yIHBhcnNpbmcgdGhlIGJsb2NrXG4gKiBAcmV0dXJucyB0aGUgcGFyc2VkIGJsb2NrXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQYXJzZUJsb2NrQXN5bmMoc2VyaWFsaXphdGlvbk9iamVjdDogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaywgcGFyc2VPcHRpb25zOiBJRmxvd0dyYXBoQmxvY2tQYXJzZU9wdGlvbnMpOiBQcm9taXNlPEZsb3dHcmFwaEJsb2NrPiB7XG4gICAgY29uc3QgY2xhc3NGYWN0b3J5ID0gYmxvY2tGYWN0b3J5KHNlcmlhbGl6YXRpb25PYmplY3QuY2xhc3NOYW1lIGFzIEZsb3dHcmFwaEJsb2NrTmFtZXMpO1xuICAgIGNvbnN0IGNsYXNzVHlwZSA9IGF3YWl0IGNsYXNzRmFjdG9yeSgpO1xuICAgIHJldHVybiBQYXJzZUZsb3dHcmFwaEJsb2NrV2l0aENsYXNzVHlwZShzZXJpYWxpemF0aW9uT2JqZWN0LCBwYXJzZU9wdGlvbnMsIGNsYXNzVHlwZSk7XG59XG5cbi8qKlxuICogUGFyc2VzIGEgYmxvY2sgZnJvbSBhIHNlcmlhbGl6YXRpb24gb2JqZWN0XG4gKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHBhcnNlIGZyb21cbiAqIEBwYXJhbSBwYXJzZU9wdGlvbnMgb3B0aW9ucyBmb3IgcGFyc2luZyB0aGUgYmxvY2tcbiAqIEBwYXJhbSBjbGFzc1R5cGUgdGhlIGNsYXNzIHR5cGUgb2YgdGhlIGJsb2NrLiBUaGlzIGlzIHVzZWQgd2hlbiB0aGUgY2xhc3MgaXMgbm90IGxvYWRlZCBhc3luY2hyb25vdXNseVxuICogQHJldHVybnMgdGhlIHBhcnNlZCBibG9ja1xuICovXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VGbG93R3JhcGhCbG9ja1dpdGhDbGFzc1R5cGUoXG4gICAgc2VyaWFsaXphdGlvbk9iamVjdDogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jayxcbiAgICBwYXJzZU9wdGlvbnM6IElGbG93R3JhcGhCbG9ja1BhcnNlT3B0aW9ucyxcbiAgICBjbGFzc1R5cGU6IHR5cGVvZiBGbG93R3JhcGhCbG9ja1xuKTogRmxvd0dyYXBoQmxvY2sge1xuICAgIGNvbnN0IHBhcnNlZENvbmZpZzogYW55ID0ge307XG4gICAgY29uc3QgdmFsdWVQYXJzZUZ1bmN0aW9uID0gcGFyc2VPcHRpb25zLnZhbHVlUGFyc2VGdW5jdGlvbiA/PyBkZWZhdWx0VmFsdWVQYXJzZUZ1bmN0aW9uO1xuICAgIGlmIChzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmZpZykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmZpZykge1xuICAgICAgICAgICAgcGFyc2VkQ29uZmlnW2tleV0gPSB2YWx1ZVBhcnNlRnVuY3Rpb24oa2V5LCBzZXJpYWxpemF0aW9uT2JqZWN0LmNvbmZpZywgcGFyc2VPcHRpb25zLmFzc2V0c0NvbnRhaW5lciB8fCBwYXJzZU9wdGlvbnMuc2NlbmUsIHBhcnNlT3B0aW9ucy5zY2VuZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5lZWRzUGF0aENvbnZlcnRlcihzZXJpYWxpemF0aW9uT2JqZWN0LmNsYXNzTmFtZSkpIHtcbiAgICAgICAgaWYgKCFwYXJzZU9wdGlvbnMucGF0aENvbnZlcnRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aCBjb252ZXJ0ZXIgaXMgcmVxdWlyZWQgZm9yIHRoaXMgYmxvY2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkQ29uZmlnLnBhdGhDb252ZXJ0ZXIgPSBwYXJzZU9wdGlvbnMucGF0aENvbnZlcnRlcjtcbiAgICB9XG4gICAgY29uc3Qgb2JqID0gbmV3IGNsYXNzVHlwZShwYXJzZWRDb25maWcpO1xuICAgIG9iai51bmlxdWVJZCA9IHNlcmlhbGl6YXRpb25PYmplY3QudW5pcXVlSWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpYWxpemF0aW9uT2JqZWN0LmRhdGFJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF0YUlucHV0ID0gb2JqLmdldERhdGFJbnB1dChzZXJpYWxpemF0aW9uT2JqZWN0LmRhdGFJbnB1dHNbaV0ubmFtZSk7XG4gICAgICAgIGlmIChkYXRhSW5wdXQpIHtcbiAgICAgICAgICAgIGRhdGFJbnB1dC5kZXNlcmlhbGl6ZShzZXJpYWxpemF0aW9uT2JqZWN0LmRhdGFJbnB1dHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgZGF0YSBpbnB1dCB3aXRoIG5hbWUgXCIgKyBzZXJpYWxpemF0aW9uT2JqZWN0LmRhdGFJbnB1dHNbaV0ubmFtZSArIFwiIGluIGJsb2NrIFwiICsgc2VyaWFsaXphdGlvbk9iamVjdC5jbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhT3V0cHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXRhT3V0cHV0ID0gb2JqLmdldERhdGFPdXRwdXQoc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhT3V0cHV0c1tpXS5uYW1lKTtcbiAgICAgICAgaWYgKGRhdGFPdXRwdXQpIHtcbiAgICAgICAgICAgIGRhdGFPdXRwdXQuZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdC5kYXRhT3V0cHV0c1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBkYXRhIG91dHB1dCB3aXRoIG5hbWUgXCIgKyBzZXJpYWxpemF0aW9uT2JqZWN0LmRhdGFPdXRwdXRzW2ldLm5hbWUgKyBcIiBpbiBibG9jayBcIiArIHNlcmlhbGl6YXRpb25PYmplY3QuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYmoubWV0YWRhdGEgPSBzZXJpYWxpemF0aW9uT2JqZWN0Lm1ldGFkYXRhO1xuICAgIG9iai5kZXNlcmlhbGl6ZSAmJiBvYmouZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBQYXJzZXMgYSBjb25uZWN0aW9uIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCB0aGUgb2JqZWN0IHRvIHBhcnNlIGZyb20uXG4gKiBAcGFyYW0gb3duZXJCbG9jayB0aGUgYmxvY2sgdGhhdCBvd25zIHRoZSBjb25uZWN0aW9uLlxuICogQHBhcmFtIGNsYXNzVHlwZSB0aGUgY2xhc3MgdHlwZSBvZiB0aGUgY29ubmVjdGlvbi5cbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQgY29ubmVjdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlR3JhcGhDb25uZWN0aW9uV2l0aENsYXNzVHlwZTxCbG9ja1QgZXh0ZW5kcyBGbG93R3JhcGhCbG9jaz4oc2VyaWFsaXphdGlvbk9iamVjdDogYW55ID0ge30sIG93bmVyQmxvY2s6IEJsb2NrVCwgY2xhc3NUeXBlOiB0eXBlb2YgRmxvd0dyYXBoQ29ubmVjdGlvbikge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgY2xhc3NUeXBlKHNlcmlhbGl6YXRpb25PYmplY3QubmFtZSwgc2VyaWFsaXphdGlvbk9iamVjdC5fY29ubmVjdGlvblR5cGUsIG93bmVyQmxvY2spO1xuICAgIGNvbm5lY3Rpb24uZGVzZXJpYWxpemUoc2VyaWFsaXphdGlvbk9iamVjdCk7XG4gICAgcmV0dXJuIGNvbm5lY3Rpb247XG59XG5cbi8qKlxuICogUGFyc2VzIGEgZGF0YSBjb25uZWN0aW9uIGZyb20gYSBzZXJpYWxpemVkIG9iamVjdC5cbiAqIEBwYXJhbSBzZXJpYWxpemF0aW9uT2JqZWN0IHRoZSBvYmplY3QgdG8gcGFyc2UgZnJvbVxuICogQHBhcmFtIG93bmVyQmxvY2sgdGhlIGJsb2NrIHRoYXQgb3ducyB0aGUgY29ubmVjdGlvblxuICogQHBhcmFtIGNsYXNzVHlwZSB0aGUgY2xhc3MgdHlwZSBvZiB0aGUgZGF0YSBjb25uZWN0aW9uXG4gKiBAcmV0dXJucyB0aGUgcGFyc2VkIGNvbm5lY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlR3JhcGhEYXRhQ29ubmVjdGlvbihzZXJpYWxpemF0aW9uT2JqZWN0OiBhbnksIG93bmVyQmxvY2s6IEZsb3dHcmFwaEJsb2NrLCBjbGFzc1R5cGU6IHR5cGVvZiBGbG93R3JhcGhEYXRhQ29ubmVjdGlvbik6IEZsb3dHcmFwaERhdGFDb25uZWN0aW9uPGFueT4ge1xuICAgIGNvbnN0IHJpY2hUeXBlID0gUGFyc2VSaWNoVHlwZShzZXJpYWxpemF0aW9uT2JqZWN0LnJpY2hUeXBlKTtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBzZXJpYWxpemF0aW9uT2JqZWN0LmRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IGNsYXNzVHlwZShzZXJpYWxpemF0aW9uT2JqZWN0Lm5hbWUsIHNlcmlhbGl6YXRpb25PYmplY3QuX2Nvbm5lY3Rpb25UeXBlLCBvd25lckJsb2NrLCByaWNoVHlwZSwgZGVmYXVsdFZhbHVlLCAhIXNlcmlhbGl6YXRpb25PYmplY3QuX29wdGlvbmFsKTtcbiAgICBjb25uZWN0aW9uLmRlc2VyaWFsaXplKHNlcmlhbGl6YXRpb25PYmplY3QpO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIHJpY2ggdHlwZSBmcm9tIGEgc2VyaWFsaXphdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gc2VyaWFsaXphdGlvbk9iamVjdCBhIHNlcmlhbGl6YXRpb24gb2JqZWN0XG4gKiBAcmV0dXJucyB0aGUgcGFyc2VkIHJpY2ggdHlwZVxuICovXG5mdW5jdGlvbiBQYXJzZVJpY2hUeXBlKHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSk6IFJpY2hUeXBlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUmljaFR5cGUoc2VyaWFsaXphdGlvbk9iamVjdC50eXBlTmFtZSwgc2VyaWFsaXphdGlvbk9iamVjdC5kZWZhdWx0VmFsdWUpO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBQb2ludGVySW5mbyB9IGZyb20gXCJjb3JlL0V2ZW50cy9wb2ludGVyRXZlbnRzXCI7XG5pbXBvcnQgeyBQb2ludGVyRXZlbnRUeXBlcyB9IGZyb20gXCJjb3JlL0V2ZW50cy9wb2ludGVyRXZlbnRzXCI7XG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcbmltcG9ydCB0eXBlIHsgT2JzZXJ2ZXIgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiY29yZS9NaXNjL29ic2VydmFibGVcIjtcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XG5pbXBvcnQgeyBGbG93R3JhcGhFdmVudFR5cGUgfSBmcm9tIFwiLi9mbG93R3JhcGhFdmVudFR5cGVcIjtcblxuLyoqXG4gKiB0aGUgaW50ZXJmYWNlIG9mIHRoZSBvYmplY3QgdGhlIHNjZW5lIGV2ZW50IGNvb3JkaW5hdG9yIHdpbGwgdHJpZ2dlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJRmxvd0dyYXBoRXZlbnRUcmlnZ2VyIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgZXZlbnRcbiAgICAgKi9cbiAgICB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGU7XG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgb2YgdGhlIGV2ZW50XG4gICAgICovXG4gICAgcGF5bG9hZD86IGFueTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBjb29yZGluYXRpbmcgdGhlIGV2ZW50cyB0aGF0IGFyZSB0cmlnZ2VyZWQgaW4gdGhlIHNjZW5lLlxuICogSXQgcmVnaXN0ZXJzIGFsbCBvYnNlcnZlcnMgbmVlZGVkIHRvIHRyYWNrIGNlcnRhaW4gZXZlbnRzIGFuZCB0cmlnZ2VycyB0aGUgYmxvY2tzIHRoYXQgYXJlIGxpc3RlbmluZyB0byB0aGVtLlxuICogQWJzdHJhY3RpbmcgdGhlIGV2ZW50cyBmcm9tIHRoZSBjbGFzcyB3aWxsIGFsbG93IHVzIHRvIGVhc2lseSBjaGFuZ2UgdGhlIGV2ZW50cyB0aGF0IGFyZSBiZWluZyBsaXN0ZW5lZCB0bywgYW5kIHRyaWdnZXIgdGhlbSBpbiBhbnkgb3JkZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG93R3JhcGhTY2VuZUV2ZW50Q29vcmRpbmF0b3Ige1xuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBfc2NlbmU6IFNjZW5lO1xuXG4gICAgLyoqXG4gICAgICogcmVnaXN0ZXIgdG8gdGhpcyBvYnNlcnZhYmxlIHRvIGdldCBmbG93IGdyYXBoIGV2ZW50IG5vdGlmaWNhdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIG9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPElGbG93R3JhcGhFdmVudFRyaWdnZXI+ID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIC8qKlxuICAgICAqIFdhcyBzY2VuZS1yZWFkeSBhbHJlYWR5IHRyaWdnZXJlZD9cbiAgICAgKi9cbiAgICBwdWJsaWMgc2NlbmVSZWFkeVRyaWdnZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBfc2NlbmVEaXNwb3NlT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPFNjZW5lPj47XG4gICAgcHJpdmF0ZSBfc2NlbmVSZWFkeU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxTY2VuZT4+O1xuICAgIHByaXZhdGUgX3NjZW5lT25CZWZvcmVSZW5kZXJPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8U2NlbmU+PjtcbiAgICBwcml2YXRlIF9tZXNoUGlja2VkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPFBvaW50ZXJJbmZvPj47XG4gICAgcHJpdmF0ZSBfbWVzaFVuZGVyUG9pbnRlck9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx7IG1lc2g6IE51bGxhYmxlPEFic3RyYWN0TWVzaD47IHBvaW50ZXJJZDogbnVtYmVyIH0+PjtcbiAgICBwcml2YXRlIF9wb2ludGVyVW5kZXJNZXNoU3RhdGU6IHsgW3BvaW50ZXJJZDogbnVtYmVyXTogTnVsbGFibGU8QWJzdHJhY3RNZXNoPiB9ID0ge307XG5cbiAgICBwcml2YXRlIF9zdGFydGluZ1RpbWU6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuX3NjZW5lUmVhZHlPYnNlcnZlciA9IHRoaXMuX3NjZW5lLm9uUmVhZHlPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2NlbmVSZWFkeVRyaWdnZXJlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHsgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlLlNjZW5lUmVhZHkgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZVJlYWR5VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2NlbmVEaXNwb3NlT2JzZXJ2ZXIgPSB0aGlzLl9zY2VuZS5vbkRpc3Bvc2VPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZS5TY2VuZURpc3Bvc2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zY2VuZU9uQmVmb3JlUmVuZGVyT2JzZXJ2ZXIgPSB0aGlzLl9zY2VuZS5vbkJlZm9yZVJlbmRlck9ic2VydmFibGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRoaXMuX3NjZW5lLmdldEVuZ2luZSgpLmdldERlbHRhVGltZSgpIC8gMTAwMDsgLy8gc2V0IGluIHNlY29uZHNcbiAgICAgICAgICAgIHRoaXMub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuU2NlbmVCZWZvcmVSZW5kZXIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICB0aW1lU2luY2VTdGFydDogdGhpcy5fc3RhcnRpbmdUaW1lLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRpbmdUaW1lICs9IGRlbHRhVGltZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbWVzaFBpY2tlZE9ic2VydmVyID0gdGhpcy5fc2NlbmUub25Qb2ludGVyT2JzZXJ2YWJsZS5hZGQoKHBvaW50ZXJJbmZvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZS5NZXNoUGljaywgcGF5bG9hZDogcG9pbnRlckluZm8gfSk7XG4gICAgICAgIH0sIFBvaW50ZXJFdmVudFR5cGVzLlBPSU5URVJQSUNLKTsgLy8gc2hvdWxkIGl0IGJlIHBvaW50ZXJkb3duP1xuXG4gICAgICAgIHRoaXMuX21lc2hVbmRlclBvaW50ZXJPYnNlcnZlciA9IHRoaXMuX3NjZW5lLm9uTWVzaFVuZGVyUG9pbnRlclVwZGF0ZWRPYnNlcnZhYmxlLmFkZCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaGFzIGNoYW5nZWQuIENoZWNrIHRoZSBzdGF0ZSBvZiB0aGUgbGFzdCBjaGFuZ2UgYW5kIHNlZSBpZiBpdCBpcyBhIG1lc2ggb3IgbnVsbC5cbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgbWVzaCBhbmQgdGhlIHByZXZpb3VzIHN0YXRlIHdhcyBudWxsLCB0cmlnZ2VyIG92ZXIgZXZlbnQuIElmIGl0IGlzIG51bGwgYW5kIHRoZSBwcmV2aW91cyBzdGF0ZSB3YXMgYSBtZXNoLCB0cmlnZ2VyIG91dCBldmVudC5cbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgbWVzaCBhbmQgdGhlIHByZXZpb3VzIHN0YXRlIHdhcyBhIG1lc2gsIHRyaWdnZXIgb3V0IGZyb20gdGhlIG9sZCBtZXNoIGFuZCBvdmVyIHRoZSBuZXcgbWVzaFxuICAgICAgICAgICAgLy8gaWYgaXQgaXMgbnVsbCBhbmQgdGhlIHByZXZpb3VzIHN0YXRlIHdhcyBudWxsLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgY29uc3QgcG9pbnRlcklkID0gZGF0YS5wb2ludGVySWQ7XG4gICAgICAgICAgICBjb25zdCBtZXNoID0gZGF0YS5tZXNoO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHRoaXMuX3BvaW50ZXJVbmRlck1lc2hTdGF0ZVtwb2ludGVySWRdO1xuICAgICAgICAgICAgaWYgKCFwcmV2aW91c1N0YXRlICYmIG1lc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3ZlciwgcGF5bG9hZDogeyBwb2ludGVySWQsIG1lc2ggfSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNTdGF0ZSAmJiAhbWVzaCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudFRyaWdnZXJlZE9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHsgdHlwZTogRmxvd0dyYXBoRXZlbnRUeXBlLlBvaW50ZXJPdXQsIHBheWxvYWQ6IHsgcG9pbnRlcklkLCBtZXNoOiBwcmV2aW91c1N0YXRlIH0gfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzU3RhdGUgJiYgbWVzaCAmJiBwcmV2aW91c1N0YXRlICE9PSBtZXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoeyB0eXBlOiBGbG93R3JhcGhFdmVudFR5cGUuUG9pbnRlck91dCwgcGF5bG9hZDogeyBwb2ludGVySWQsIG1lc2g6IHByZXZpb3VzU3RhdGUsIG92ZXI6IG1lc2ggfSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRUcmlnZ2VyZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyh7IHR5cGU6IEZsb3dHcmFwaEV2ZW50VHlwZS5Qb2ludGVyT3ZlciwgcGF5bG9hZDogeyBwb2ludGVySWQsIG1lc2gsIG91dDogcHJldmlvdXNTdGF0ZSB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcG9pbnRlclVuZGVyTWVzaFN0YXRlW3BvaW50ZXJJZF0gPSBtZXNoO1xuICAgICAgICB9LCBQb2ludGVyRXZlbnRUeXBlcy5QT0lOVEVSTU9WRSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuX3NjZW5lRGlzcG9zZU9ic2VydmVyPy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fc2NlbmVSZWFkeU9ic2VydmVyPy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fc2NlbmVPbkJlZm9yZVJlbmRlck9ic2VydmVyPy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fbWVzaFBpY2tlZE9ic2VydmVyPy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fbWVzaFVuZGVyUG9pbnRlck9ic2VydmVyPy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5vbkV2ZW50VHJpZ2dlcmVkT2JzZXJ2YWJsZS5jbGVhcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgRmxvd0dyYXBoRXhlY3V0aW9uQmxvY2sgfSBmcm9tIFwiLi9mbG93R3JhcGhFeGVjdXRpb25CbG9ja1wiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDb25uZWN0aW9uLCBGbG93R3JhcGhDb25uZWN0aW9uVHlwZSB9IGZyb20gXCIuL2Zsb3dHcmFwaENvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhDb250ZXh0IH0gZnJvbSBcIi4vZmxvd0dyYXBoQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcIi4uL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaEFjdGlvbiB9IGZyb20gXCIuL2Zsb3dHcmFwaExvZ2dlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb25uZWN0aW9uIHBvaW50IGZvciBhIHNpZ25hbC5cclxuICogV2hlbiBhbiBvdXRwdXQgcG9pbnQgaXMgYWN0aXZhdGVkLCBpdCB3aWxsIGFjdGl2YXRlIHRoZSBjb25uZWN0ZWQgaW5wdXQgcG9pbnQuXHJcbiAqIFdoZW4gYW4gaW5wdXQgcG9pbnQgaXMgYWN0aXZhdGVkLCBpdCB3aWxsIGV4ZWN1dGUgdGhlIGJsb2NrIGl0IGJlbG9uZ3MgdG8uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvbiBleHRlbmRzIEZsb3dHcmFwaENvbm5lY3Rpb248Rmxvd0dyYXBoRXhlY3V0aW9uQmxvY2ssIEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24+IHtcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9uYWwgcGF5bG9hZC4gQ2FuIGJlIHVzZWQsIGZvciBleGFtcGxlLCB3aGVuIGFuIGVycm9yIGlzIHRocm93biB0byBwYXNzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXlsb2FkOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJpb3JpdHkgb2YgdGhlIHNpZ25hbC4gU2lnbmFscyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGZpcnN0LlxyXG4gICAgICogU2V0IHByaW9yaXR5IGJlZm9yZSBhZGRpbmcgdGhlIGNvbm5lY3Rpb24gYXMgc29ydGluZyBoYXBwZW5zIG9ubHkgd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBhZGRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHByaW9yaXR5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBfaXNTaW5ndWxhckNvbm5lY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBjb25uZWN0VG8ocG9pbnQ6IEZsb3dHcmFwaFNpZ25hbENvbm5lY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5jb25uZWN0VG8ocG9pbnQpO1xyXG4gICAgICAgIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHByaW9yaXR5IHRvIGhhbmRsZSBleGVjdXRpb24gb3JkZXJcclxuICAgICAgICB0aGlzLl9jb25uZWN0ZWRQb2ludC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9hY3RpdmF0ZVNpZ25hbChjb250ZXh0OiBGbG93R3JhcGhDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29udGV4dC5sb2dnZXI/LmFkZExvZ0l0ZW0oe1xyXG4gICAgICAgICAgICBhY3Rpb246IEZsb3dHcmFwaEFjdGlvbi5BY3RpdmF0ZVNpZ25hbCxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9vd25lckJsb2NrLmdldENsYXNzTmFtZSgpLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogdGhpcy5fb3duZXJCbG9jay51bmlxdWVJZCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvblR5cGU6IHRoaXMuY29ubmVjdGlvblR5cGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblR5cGUgPT09IEZsb3dHcmFwaENvbm5lY3Rpb25UeXBlLklucHV0KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuX25vdGlmeUV4ZWN1dGVOb2RlKHRoaXMuX293bmVyQmxvY2spO1xyXG4gICAgICAgICAgICB0aGlzLl9vd25lckJsb2NrLl9leGVjdXRlKGNvbnRleHQsIHRoaXMpO1xyXG4gICAgICAgICAgICBjb250ZXh0Ll9pbmNyZWFzZUV4ZWN1dGlvbklkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25uZWN0ZWRQb2ludCBvZiB0aGlzLl9jb25uZWN0ZWRQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkUG9pbnQuX2FjdGl2YXRlU2lnbmFsKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiRmxvd0dyYXBoU2lnbmFsQ29ubmVjdGlvblwiLCBGbG93R3JhcGhTaWduYWxDb25uZWN0aW9uKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBJQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9JQXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgeyBNYXRyaXgsIFF1YXRlcm5pb24sIFZlY3RvcjIsIFZlY3RvcjMsIFZlY3RvcjQgfSBmcm9tIFwiLi4vTWF0aHMvbWF0aC52ZWN0b3JcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhCbG9ja05hbWVzIH0gZnJvbSBcIi4vQmxvY2tzL2Zsb3dHcmFwaEJsb2NrTmFtZXNcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCIuL0N1c3RvbVR5cGVzL2Zsb3dHcmFwaEludGVnZXJcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoVHlwZXMsIGdldFJpY2hUeXBlQnlGbG93R3JhcGhUeXBlIH0gZnJvbSBcIi4vZmxvd0dyYXBoUmljaFR5cGVzXCI7XHJcbmltcG9ydCB0eXBlIHsgVHJhbnNmb3JtTm9kZSB9IGZyb20gXCJjb3JlL01lc2hlcy90cmFuc2Zvcm1Ob2RlXCI7XHJcbmltcG9ydCB7IEZsb3dHcmFwaE1hdHJpeDJELCBGbG93R3JhcGhNYXRyaXgzRCB9IGZyb20gXCIuL0N1c3RvbVR5cGVzL2Zsb3dHcmFwaE1hdHJpeFwiO1xyXG5cclxuZnVuY3Rpb24gSXNNZXNoQ2xhc3NOYW1lKGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gXCJNZXNoXCIgfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IFwiQWJzdHJhY3RNZXNoXCIgfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IFwiR3JvdW5kTWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIkluc3RhbmNlTWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIkxpbmVzTWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIkdvbGRiZXJnTWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIkdyZWFzZWRMaW5lTWVzaFwiIHx8XHJcbiAgICAgICAgY2xhc3NOYW1lID09PSBcIlRyYWlsTWVzaFwiXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJc1ZlY3RvckNsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjIgfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjMgfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQgfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlF1YXRlcm5pb24gfHxcclxuICAgICAgICBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLkNvbG9yMyB8fFxyXG4gICAgICAgIGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuQ29sb3I0XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJc01hdHJpeENsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4IHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4MkQgfHwgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5NYXRyaXgzRDtcclxufVxyXG5cclxuZnVuY3Rpb24gSXNBbmltYXRpb25Hcm91cENsYXNzTmFtZShjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gXCJBbmltYXRpb25Hcm91cFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXJzZVZlY3RvcihjbGFzc05hbWU6IHN0cmluZywgdmFsdWU6IEFycmF5PG51bWJlcj4sIGZsaXBIYW5kZWRuZXNzID0gZmFsc2UpIHtcclxuICAgIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5Gcm9tQXJyYXkodmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjMpIHtcclxuICAgICAgICBpZiAoZmxpcEhhbmRlZG5lc3MpIHtcclxuICAgICAgICAgICAgdmFsdWVbMl0gKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBWZWN0b3IzLkZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuVmVjdG9yNCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3I0LkZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbikge1xyXG4gICAgICAgIGlmIChmbGlwSGFuZGVkbmVzcykge1xyXG4gICAgICAgICAgICB2YWx1ZVsyXSAqPSAtMTtcclxuICAgICAgICAgICAgdmFsdWVbM10gKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBRdWF0ZXJuaW9uLkZyb21BcnJheSh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuQ29sb3IzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcjModmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuQ29sb3I0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcjQodmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdmFsdWVbM10pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdmVjdG9yIGNsYXNzIG5hbWUgJHtjbGFzc05hbWV9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBmdW5jdGlvbiB0aGF0IHNlcmlhbGl6ZXMgdmFsdWVzIGluIGEgY29udGV4dCBvYmplY3QgdG8gYSBzZXJpYWxpemF0aW9uIG9iamVjdFxyXG4gKiBAcGFyYW0ga2V5IHRoZSBrZXkgd2hlcmUgdGhlIHZhbHVlIHNob3VsZCBiZSBzdG9yZWQgaW4gdGhlIHNlcmlhbGl6YXRpb24gb2JqZWN0XHJcbiAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gc3RvcmVcclxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB3aGVyZSB0aGUgdmFsdWUgd2lsbCBiZSBzdG9yZWRcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZVNlcmlhbGl6YXRpb25GdW5jdGlvbihrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc2VyaWFsaXphdGlvbk9iamVjdDogYW55KSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB2YWx1ZT8uZ2V0Q2xhc3NOYW1lPy4oKSA/PyBcIlwiO1xyXG4gICAgaWYgKElzVmVjdG9yQ2xhc3NOYW1lKGNsYXNzTmFtZSkgfHwgSXNNYXRyaXhDbGFzc05hbWUoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Rba2V5XSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLmFzQXJyYXkoKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuSW50ZWdlcikge1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3Rba2V5XSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZSAmJiAodmFsdWUuaWQgfHwgdmFsdWUubmFtZSkpIHtcclxuICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdFtrZXldID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBvbmx5IGlmIGl0IGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBzZXJpYWxpemUgdmFsdWUgJHt2YWx1ZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHZhbHVlcyBzdG9yZWQgaW4gYSBzZXJpYWxpemF0aW9uIG9iamVjdFxyXG4gKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gdGhlIHZhbHVlIHRoYXQgd2lsbCBiZSBwYXJzZWRcclxuICogQHBhcmFtIHNlcmlhbGl6YXRpb25PYmplY3QgdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgcGFyc2VkXHJcbiAqIEBwYXJhbSBhc3NldHNDb250YWluZXIgdGhlIGFzc2V0cyBjb250YWluZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZmluZCB0aGUgb2JqZWN0c1xyXG4gKiBAcGFyYW0gc2NlbmVcclxuICogQHJldHVybnNcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZVBhcnNlRnVuY3Rpb24oa2V5OiBzdHJpbmcsIHNlcmlhbGl6YXRpb25PYmplY3Q6IGFueSwgYXNzZXRzQ29udGFpbmVyOiBJQXNzZXRDb250YWluZXIsIHNjZW5lOiBTY2VuZSkge1xyXG4gICAgY29uc3QgaW50ZXJtZWRpYXRlVmFsdWUgPSBzZXJpYWxpemF0aW9uT2JqZWN0W2tleV07XHJcbiAgICBsZXQgZmluYWxWYWx1ZTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGludGVybWVkaWF0ZVZhbHVlPy50eXBlID8/IGludGVybWVkaWF0ZVZhbHVlPy5jbGFzc05hbWU7XHJcbiAgICBpZiAoSXNNZXNoQ2xhc3NOYW1lKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBsZXQgbm9kZXM6IFRyYW5zZm9ybU5vZGVbXSA9IHNjZW5lLm1lc2hlcy5maWx0ZXIoKG0pID0+IChpbnRlcm1lZGlhdGVWYWx1ZS5pZCA/IG0uaWQgPT09IGludGVybWVkaWF0ZVZhbHVlLmlkIDogbS5uYW1lID09PSBpbnRlcm1lZGlhdGVWYWx1ZS5uYW1lKSk7XHJcbiAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBub2RlcyA9IHNjZW5lLnRyYW5zZm9ybU5vZGVzLmZpbHRlcigobSkgPT4gKGludGVybWVkaWF0ZVZhbHVlLmlkID8gbS5pZCA9PT0gaW50ZXJtZWRpYXRlVmFsdWUuaWQgOiBtLm5hbWUgPT09IGludGVybWVkaWF0ZVZhbHVlLm5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlLnVuaXF1ZUlkID8gbm9kZXMuZmluZCgobSkgPT4gbS51bmlxdWVJZCA9PT0gaW50ZXJtZWRpYXRlVmFsdWUudW5pcXVlSWQpIDogbm9kZXNbMF07XHJcbiAgICB9IGVsc2UgaWYgKElzVmVjdG9yQ2xhc3NOYW1lKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBmaW5hbFZhbHVlID0gUGFyc2VWZWN0b3IoY2xhc3NOYW1lLCBpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKElzQW5pbWF0aW9uR3JvdXBDbGFzc05hbWUoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgIC8vIGRvIG5vdCB1c2UgdGhlIHNjZW5lLmdldEFuaW1hdGlvbkdyb3VwQnlOYW1lIGJlY2F1c2UgaXQgaXMgcG9zc2libGUgdGhhdCB0d28gQUdzIHdpbGwgaGF2ZSB0aGUgc2FtZSBuYW1lXHJcbiAgICAgICAgY29uc3QgYWdzID0gc2NlbmUuYW5pbWF0aW9uR3JvdXBzLmZpbHRlcigoYWcpID0+IGFnLm5hbWUgPT09IGludGVybWVkaWF0ZVZhbHVlLm5hbWUpO1xyXG4gICAgICAgIC8vIHVuaXF1ZUlkIGNoYW5nZXMgb24gZWFjaCBsb2FkLiB0aGlzIGlzIHVzZWQgZm9yIHRoZSBnbFRGIGxvYWRlciwgdGhhdCB1c2VzIHNlcmlhbGl6YXRpb24gYWZ0ZXIgdGhlIHNjZW5lIHdhcyBsb2FkZWQuXHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IGFncy5sZW5ndGggPT09IDEgPyBhZ3NbMF0gOiBhZ3MuZmluZCgoYWcpID0+IGFnLnVuaXF1ZUlkID09PSBpbnRlcm1lZGlhdGVWYWx1ZS51bmlxdWVJZCk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4KSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IE1hdHJpeC5Gcm9tQXJyYXkoaW50ZXJtZWRpYXRlVmFsdWUudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJEKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IG5ldyBGbG93R3JhcGhNYXRyaXgyRChpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4M0QpIHtcclxuICAgICAgICBmaW5hbFZhbHVlID0gbmV3IEZsb3dHcmFwaE1hdHJpeDNEKGludGVybWVkaWF0ZVZhbHVlLnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IEZsb3dHcmFwaEludGVnZXIuRnJvbVZhbHVlKGludGVybWVkaWF0ZVZhbHVlLnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5OdW1iZXIgfHwgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5TdHJpbmcgfHwgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5Cb29sZWFuKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlLnZhbHVlWzBdO1xyXG4gICAgfSBlbHNlIGlmIChpbnRlcm1lZGlhdGVWYWx1ZSAmJiBpbnRlcm1lZGlhdGVWYWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZmluYWxWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcm1lZGlhdGVWYWx1ZSkpIHtcclxuICAgICAgICAgICAgLy8gY29uZmlndXJhdGlvbiBkYXRhIG9mIGFuIGV2ZW50XHJcbiAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZS5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbC5ldmVudERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWNjW3ZhbC5pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZ2V0UmljaFR5cGVCeUZsb3dHcmFwaFR5cGUodmFsLnR5cGUpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjW3ZhbC5pZF0udmFsdWUgPSBkZWZhdWx0VmFsdWVQYXJzZUZ1bmN0aW9uKFwidmFsdWVcIiwgdmFsLCBhc3NldHNDb250YWluZXIsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaW5hbFZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmFsVmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHaXZlbiBhIG5hbWUgb2YgYSBmbG93IGdyYXBoIGJsb2NrIGNsYXNzLCByZXR1cm4gaWYgdGhpc1xyXG4gKiBjbGFzcyBuZWVkcyB0byBiZSBjcmVhdGVkIHdpdGggYSBwYXRoIGNvbnZlcnRlci4gVXNlZCBpblxyXG4gKiBwYXJzaW5nLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBuYW1lIG9mIHRoZSBmbG93IGdyYXBoIGJsb2NrIGNsYXNzXHJcbiAqIEByZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBjbGFzcyBuZWVkcyBhIHBhdGggY29udmVydGVyXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBuZWVkc1BhdGhDb252ZXJ0ZXIoY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vIEkgYW0gbm90IHVzaW5nIHRoZSBDbGFzc05hbWUgcHJvcGVydHkgaGVyZSBiZWNhdXNlIGl0IHdhcyBjYXVzaW5nIGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxyXG4gICAgLy8gdGhhdCBqZXN0IGRpZG4ndCBsaWtlIVxyXG4gICAgcmV0dXJuIGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoQmxvY2tOYW1lcy5Kc29uUG9pbnRlclBhcnNlcjtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE1hdHJpeCwgUXVhdGVybmlvbiwgVmVjdG9yMiwgVmVjdG9yMywgVmVjdG9yNCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCIuLi9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoSW50ZWdlciB9IGZyb20gXCIuL0N1c3RvbVR5cGVzL2Zsb3dHcmFwaEludGVnZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBGbG93R3JhcGhNYXRyaXgyRCwgRmxvd0dyYXBoTWF0cml4M0QgfSBmcm9tIFwiLi9DdXN0b21UeXBlcy9mbG93R3JhcGhNYXRyaXhcIjtcclxuaW1wb3J0IHsgRmxvd0dyYXBoVHlwZXMgfSBmcm9tIFwiLi9mbG93R3JhcGhSaWNoVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICogUmV0dXJucyBpZiBtZXNoMSBpcyBhIGRlc2NlbmRhbnQgb2YgbWVzaDJcclxuICogQHBhcmFtIG1lc2gxXHJcbiAqIEBwYXJhbSBtZXNoMlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9Jc0Rlc2NlbmRhbnRPZihtZXNoMTogTm9kZSwgbWVzaDI6IE5vZGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIShtZXNoMS5wYXJlbnQgJiYgKG1lc2gxLnBhcmVudCA9PT0gbWVzaDIgfHwgX0lzRGVzY2VuZGFudE9mKG1lc2gxLnBhcmVudCwgbWVzaDIpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZsb3dHcmFwaE51bWJlciA9IG51bWJlciB8IEZsb3dHcmFwaEludGVnZXI7XHJcbmV4cG9ydCB0eXBlIEZsb3dHcmFwaFZlY3RvciA9IFZlY3RvcjIgfCBWZWN0b3IzIHwgVmVjdG9yNCB8IFF1YXRlcm5pb247XHJcbmV4cG9ydCB0eXBlIEZsb3dHcmFwaE1hdHJpeCA9IE1hdHJpeCB8IEZsb3dHcmFwaE1hdHJpeDJEIHwgRmxvd0dyYXBoTWF0cml4M0Q7XHJcbmV4cG9ydCB0eXBlIEZsb3dHcmFwaE1hdGhPcGVyYXRpb25UeXBlID0gRmxvd0dyYXBoTnVtYmVyIHwgRmxvd0dyYXBoVmVjdG9yIHwgRmxvd0dyYXBoTWF0cml4IHwgYm9vbGVhbjtcclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfR2V0Q2xhc3NOYW1lT2YodjogYW55KSB7XHJcbiAgICBpZiAodi5nZXRDbGFzc05hbWUpIHtcclxuICAgICAgICByZXR1cm4gdi5nZXRDbGFzc05hbWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBDaGVjayBpZiB0d28gY2xhc3NuYW1lIGFyZSB0aGUgc2FtZSBhbmQgYXJlIHZlY3RvciBvciBxdWF0ZXJuaW9uIGNsYXNzZXMuXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGZpcnN0IGNsYXNzIG5hbWVcclxuICogQHBhcmFtIGNsYXNzTmFtZTIgdGhlIHNlY29uZCBjbGFzcyBuYW1lXHJcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIHR3byBjbGFzcyBuYW1lcyBhcmUgdGhlIHNhbWUgYW5kIGFyZSB2ZWN0b3Igb3IgcXVhdGVybmlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9BcmVTYW1lVmVjdG9yT3JRdWF0ZXJuaW9uQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBjbGFzc05hbWUgPT09IGNsYXNzTmFtZTIgJiZcclxuICAgICAgICAoY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5WZWN0b3IyIHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuVmVjdG9yMyB8fCBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjQgfHwgY2xhc3NOYW1lID09PSBGbG93R3JhcGhUeXBlcy5RdWF0ZXJuaW9uKVxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBDaGVjayBpZiB0d28gY2xhc3NuYW1lIGFyZSB0aGUgc2FtZSBhbmQgYXJlIG1hdHJpeCBjbGFzc2VzLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBmaXJzdCBjbGFzcyBuYW1lXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUyIHRoZSBzZWNvbmQgY2xhc3MgbmFtZVxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSB0d28gY2xhc3MgbmFtZXMgYXJlIHRoZSBzYW1lIGFuZCBhcmUgbWF0cml4IGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX0FyZVNhbWVNYXRyaXhDbGFzcyhjbGFzc05hbWU6IHN0cmluZywgY2xhc3NOYW1lMjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lID09PSBjbGFzc05hbWUyICYmIChjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeCB8fCBjbGFzc05hbWUgPT09IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJEIHx8IGNsYXNzTmFtZSA9PT0gRmxvd0dyYXBoVHlwZXMuTWF0cml4M0QpO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIENoZWNrIGlmIHR3byBjbGFzc25hbWUgYXJlIHRoZSBzYW1lIGFuZCBhcmUgaW50ZWdlciBjbGFzc2VzLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBmaXJzdCBjbGFzcyBuYW1lXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUyIHRoZSBzZWNvbmQgY2xhc3MgbmFtZVxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZSB0d28gY2xhc3MgbmFtZXMgYXJlIHRoZSBzYW1lIGFuZCBhcmUgaW50ZWdlciBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9BcmVTYW1lSW50ZWdlckNsYXNzKGNsYXNzTmFtZTogc3RyaW5nLCBjbGFzc05hbWUyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBjbGFzc05hbWUgPT09IFwiRmxvd0dyYXBoSW50ZWdlclwiICYmIGNsYXNzTmFtZTIgPT09IFwiRmxvd0dyYXBoSW50ZWdlclwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIG51bWVyaWMgdmFsdWUuXHJcbiAqIEBwYXJhbSBhIHRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBudW1iZXIuXHJcbiAqIEBwYXJhbSB2YWxpZElmTmFOIHdoZXRoZXIgdG8gY29uc2lkZXIgTmFOIGFzIGEgdmFsaWQgbnVtYmVyLlxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIGEgaXMgYSBGbG93R3JhcGhOdW1iZXIgKEludGVnZXIgb3IgbnVtYmVyKS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpYyhhOiBGbG93R3JhcGhNYXRoT3BlcmF0aW9uVHlwZSwgdmFsaWRJZk5hTj86IGJvb2xlYW4pOiBhIGlzIEZsb3dHcmFwaE51bWJlciB7XHJcbiAgICBjb25zdCBpc051bWVyaWMgPSB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgKGEgYXMgRmxvd0dyYXBoSW50ZWdlcik/LnZhbHVlID09PSBcIm51bWJlclwiO1xyXG4gICAgaWYgKGlzTnVtZXJpYyAmJiAhdmFsaWRJZk5hTikge1xyXG4gICAgICAgIHJldHVybiAhaXNOYU4oZ2V0TnVtZXJpY1ZhbHVlKGEgYXMgRmxvd0dyYXBoTnVtYmVyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNOdW1lcmljO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBudW1lcmljIHZhbHVlIG9mIGEgRmxvd0dyYXBoTnVtYmVyLlxyXG4gKiBAcGFyYW0gYSB0aGUgb2JqZWN0IHRvIGdldCB0aGUgbnVtZXJpYyB2YWx1ZSBmcm9tLlxyXG4gKiBAcmV0dXJucyB0aGUgbnVtZXJpYyB2YWx1ZS5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWVyaWNWYWx1ZShhOiBGbG93R3JhcGhOdW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiID8gYSA6IGEudmFsdWU7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlIHsgSUtIUkludGVyYWN0aXZpdHkgfSBmcm9tIFwiYmFieWxvbmpzLWdsdGYyaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB0eXBlIHsgR0xURkxvYWRlciB9IGZyb20gXCIuLi9nbFRGTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJFeHRlbnNpb24gfSBmcm9tIFwiLi4vZ2xURkxvYWRlckV4dGVuc2lvblwiO1xyXG5pbXBvcnQgeyBGbG93R3JhcGhDb29yZGluYXRvciB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9mbG93R3JhcGhDb29yZGluYXRvclwiO1xyXG5pbXBvcnQgeyBQYXJzZUZsb3dHcmFwaEFzeW5jIH0gZnJvbSBcImNvcmUvRmxvd0dyYXBoL2Zsb3dHcmFwaFBhcnNlclwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckdMVEZFeHRlbnNpb24sIHVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJFeHRlbnNpb25SZWdpc3RyeVwiO1xyXG5pbXBvcnQgdHlwZSB7IEdMVEZQYXRoVG9PYmplY3RDb252ZXJ0ZXIgfSBmcm9tIFwiLi9nbHRmUGF0aFRvT2JqZWN0Q29udmVydGVyXCI7XHJcbmltcG9ydCB7IEFkZE9iamVjdEFjY2Vzc29yVG9LZXksIEdldFBhdGhUb09iamVjdENvbnZlcnRlciB9IGZyb20gXCIuL29iamVjdE1vZGVsTWFwcGluZ1wiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGl2aXR5R3JhcGhUb0Zsb3dHcmFwaFBhcnNlciB9IGZyb20gXCIuL0tIUl9pbnRlcmFjdGl2aXR5L2ludGVyYWN0aXZpdHlHcmFwaFBhcnNlclwiO1xyXG5pbXBvcnQgeyBhZGRUb0Jsb2NrRmFjdG9yeSB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9CbG9ja3MvZmxvd0dyYXBoQmxvY2tGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBJQW5pbWF0aW9uIH0gZnJvbSBcIi4uL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBOQU1FID0gXCJLSFJfaW50ZXJhY3Rpdml0eVwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCIuLi8uLi9nbFRGRmlsZUxvYWRlclwiIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgR0xURkxvYWRlckV4dGVuc2lvbk9wdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlZmluZXMgb3B0aW9ucyBmb3IgdGhlIEtIUl9pbnRlcmFjdGl2aXR5IGV4dGVuc2lvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBOT1RFOiBEb24ndCB1c2UgTkFNRSBoZXJlIGFzIGl0IHdpbGwgYnJlYWsgdGhlIFVNRCB0eXBlIGRlY2xhcmF0aW9ucy5cclxuICAgICAgICBbXCJLSFJfaW50ZXJhY3Rpdml0eVwiXToge307XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkZXIgZXh0ZW5zaW9uIGZvciBLSFJfaW50ZXJhY3Rpdml0eVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtIUl9pbnRlcmFjdGl2aXR5IGltcGxlbWVudHMgSUdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGV4dGVuc2lvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBOQU1FO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdGhpcyBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfcGF0aENvbnZlcnRlcj86IEdMVEZQYXRoVG9PYmplY3RDb252ZXJ0ZXI8YW55LCBhbnksIGFueT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBwYXJhbSBfbG9hZGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogR0xURkxvYWRlcikge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuX2xvYWRlci5pc0V4dGVuc2lvblVzZWQoTkFNRSk7XHJcbiAgICAgICAgdGhpcy5fcGF0aENvbnZlcnRlciA9IEdldFBhdGhUb09iamVjdENvbnZlcnRlcih0aGlzLl9sb2FkZXIuZ2x0Zik7XHJcbiAgICAgICAgLy8gYXZvaWQgc3RhcnRpbmcgYW5pbWF0aW9ucyBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICAgIF9sb2FkZXIuX3NraXBTdGFydEFuaW1hdGlvblN0ZXAgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgb2JqZWN0IG1vZGVsIHdpdGggbmV3IHBvaW50ZXJzXHJcblxyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gX2xvYWRlci5iYWJ5bG9uU2NlbmU7XHJcbiAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgIF9BZGRJbnRlcmFjdGl2aXR5T2JqZWN0TW9kZWwoc2NlbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICAodGhpcy5fbG9hZGVyIGFzIGFueSkgPSBudWxsO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wYXRoQ29udmVydGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXNcclxuICAgIHB1YmxpYyBhc3luYyBvblJlYWR5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZSB8fCAhdGhpcy5fcGF0aENvbnZlcnRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5fbG9hZGVyLmJhYnlsb25TY2VuZTtcclxuICAgICAgICBjb25zdCBpbnRlcmFjdGl2aXR5RGVmaW5pdGlvbiA9IHRoaXMuX2xvYWRlci5nbHRmLmV4dGVuc2lvbnM/LktIUl9pbnRlcmFjdGl2aXR5IGFzIElLSFJJbnRlcmFjdGl2aXR5O1xyXG4gICAgICAgIGlmICghaW50ZXJhY3Rpdml0eURlZmluaXRpb24pIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gdGVjaG5pY2FsbHkgdGhyb3csIGJ1dCBpdCdzIG5vdCBhIGNyaXRpY2FsIGVycm9yXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdG9yID0gbmV3IEZsb3dHcmFwaENvb3JkaW5hdG9yKHsgc2NlbmUgfSk7XHJcbiAgICAgICAgY29vcmRpbmF0b3IuZGlzcGF0Y2hFdmVudHNTeW5jaHJvbm91c2x5ID0gZmFsc2U7IC8vIGdsVEYgaW50ZXJhY3Rpdml0eSBkaXNwYXRjaGVzIGV2ZW50cyBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIGNvbnN0IGdyYXBocyA9IGludGVyYWN0aXZpdHlEZWZpbml0aW9uLmdyYXBocy5tYXAoKGdyYXBoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBJbnRlcmFjdGl2aXR5R3JhcGhUb0Zsb3dHcmFwaFBhcnNlcihncmFwaCwgdGhpcy5fbG9hZGVyLmdsdGYsIHRoaXMuX2xvYWRlci5wYXJlbnQudGFyZ2V0RnBzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlci5zZXJpYWxpemVUb0Zsb3dHcmFwaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHBhcnNlIGVhY2ggZ3JhcGggYXN5bmNcclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChncmFwaHMubWFwKGFzeW5jIChncmFwaCkgPT4gYXdhaXQgUGFyc2VGbG93R3JhcGhBc3luYyhncmFwaCwgeyBjb29yZGluYXRvciwgcGF0aENvbnZlcnRlcjogdGhpcy5fcGF0aENvbnZlcnRlciB9KSkpO1xyXG5cclxuICAgICAgICBjb29yZGluYXRvci5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIHBvcHVsYXRlcyB0aGUgb2JqZWN0IG1vZGVsIHdpdGggdGhlIGludGVyYWN0aXZpdHkgZXh0ZW5zaW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX0FkZEludGVyYWN0aXZpdHlPYmplY3RNb2RlbChzY2VuZTogU2NlbmUpIHtcclxuICAgIC8vIE5vdGUgLSBhbGwgb2YgdGhvc2UgYXJlIHJlYWQtb25seSwgYXMgcGVyIHRoZSBzcGVjcyFcclxuXHJcbiAgICAvLyBhY3RpdmUgY2FtZXJhIHJvdGF0aW9uXHJcbiAgICBBZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL2V4dGVuc2lvbnMvS0hSX2ludGVyYWN0aXZpdHkvPy9hY3RpdmVDYW1lcmEvcm90YXRpb25cIiwge1xyXG4gICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNjZW5lLmFjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBRdWF0ZXJuaW9uKE5hTiwgTmFOLCBOYU4sIE5hTik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcXVhdCA9IFF1YXRlcm5pb24uRnJvbVJvdGF0aW9uTWF0cml4KHNjZW5lLmFjdGl2ZUNhbWVyYS5nZXRXb3JsZE1hdHJpeCgpKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgaWYgKCFzY2VuZS51c2VSaWdodEhhbmRlZFN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgcXVhdC53ICo9IC0xOyAvLyBnbFRGIHVzZXMgcmlnaHQtaGFuZGVkIHN5c3RlbSwgd2hpbGUgYmFieWxvbiB1c2VzIGxlZnQtaGFuZGVkXHJcbiAgICAgICAgICAgICAgICBxdWF0LnggKj0gLTE7IC8vIGdsVEYgdXNlcyByaWdodC1oYW5kZWQgc3lzdGVtLCB3aGlsZSBiYWJ5bG9uIHVzZXMgbGVmdC1oYW5kZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcXVhdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwiUXVhdGVybmlvblwiLFxyXG4gICAgICAgIGdldFRhcmdldDogKCkgPT4gc2NlbmUuYWN0aXZlQ2FtZXJhLFxyXG4gICAgfSk7XHJcbiAgICAvLyBhY3RpdmVDYW1lcmEgcG9zaXRpb25cclxuICAgIEFkZE9iamVjdEFjY2Vzc29yVG9LZXkoXCIvZXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS8/L2FjdGl2ZUNhbWVyYS9wb3NpdGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2NlbmUuYWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoTmFOLCBOYU4sIE5hTik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gc2NlbmUuYWN0aXZlQ2FtZXJhLmdldFdvcmxkTWF0cml4KCkuZ2V0VHJhbnNsYXRpb24oKTsgLy8gbm90IGdsb2JhbCBwb3NpdGlvblxyXG4gICAgICAgICAgICBpZiAoIXNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MueCAqPSAtMTsgLy8gZ2xURiB1c2VzIHJpZ2h0LWhhbmRlZCBzeXN0ZW0sIHdoaWxlIGJhYnlsb24gdXNlcyBsZWZ0LWhhbmRlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcIlZlY3RvcjNcIixcclxuICAgICAgICBnZXRUYXJnZXQ6ICgpID0+IHNjZW5lLmFjdGl2ZUNhbWVyYSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIC9hbmltYXRpb25zL3t9IHBvaW50ZXJzOlxyXG4gICAgQWRkT2JqZWN0QWNjZXNzb3JUb0tleShcIi9hbmltYXRpb25zL3t9L2V4dGVuc2lvbnMvS0hSX2ludGVyYWN0aXZpdHkvaXNQbGF5aW5nXCIsIHtcclxuICAgICAgICBnZXQ6IChhbmltYXRpb246IElBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwPy5pc1BsYXlpbmcgPz8gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcclxuICAgICAgICBnZXRUYXJnZXQ6IChhbmltYXRpb246IElBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIEFkZE9iamVjdEFjY2Vzc29yVG9LZXkoXCIvYW5pbWF0aW9ucy97fS9leHRlbnNpb25zL0tIUl9pbnRlcmFjdGl2aXR5L21pblRpbWVcIiwge1xyXG4gICAgICAgIGdldDogKGFuaW1hdGlvbjogSUFuaW1hdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwPy5mcm9tID8/IDApIC8gNjA7IC8vIGZpeGVkIGZhY3RvciBmb3IgZHVyYXRpb24tdG8tZnJhbWVzIGNvbnZlcnNpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBBZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL2FuaW1hdGlvbnMve30vZXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS9tYXhUaW1lXCIsIHtcclxuICAgICAgICBnZXQ6IChhbmltYXRpb246IElBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cD8udG8gPz8gMCkgLyA2MDsgLy8gZml4ZWQgZmFjdG9yIGZvciBkdXJhdGlvbi10by1mcmFtZXMgY29udmVyc2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBnZXRUYXJnZXQ6IChhbmltYXRpb246IElBbmltYXRpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbi5fYmFieWxvbkFuaW1hdGlvbkdyb3VwO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIHBsYXloZWFkXHJcbiAgICBBZGRPYmplY3RBY2Nlc3NvclRvS2V5KFwiL2FuaW1hdGlvbnMve30vZXh0ZW5zaW9ucy9LSFJfaW50ZXJhY3Rpdml0eS9wbGF5aGVhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXA/LmdldEN1cnJlbnRGcmFtZSgpID8/IDApIC8gNjA7IC8vIGZpeGVkIGZhY3RvciBmb3IgZHVyYXRpb24tdG8tZnJhbWVzIGNvbnZlcnNpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvL3ZpcnR1YWxQbGF5aGVhZCAtIFRPRE8sIGRvIHdlIHN1cHBvcnQgdGhpcyBwcm9wZXJ0eSBpbiBvdXIgYW5pbWF0aW9ucz8gZ2V0Q3VycmVudEZyYW1lICBpcyB0aGUgb25seSBtZXRob2Qgd2UgaGF2ZSBmb3IgdGhpcy5cclxuICAgIEFkZE9iamVjdEFjY2Vzc29yVG9LZXkoXCIvYW5pbWF0aW9ucy97fS9leHRlbnNpb25zL0tIUl9pbnRlcmFjdGl2aXR5L3ZpcnR1YWxQbGF5aGVhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYW5pbWF0aW9uLl9iYWJ5bG9uQW5pbWF0aW9uR3JvdXA/LmdldEN1cnJlbnRGcmFtZSgpID8/IDApIC8gNjA7IC8vIGZpeGVkIGZhY3RvciBmb3IgZHVyYXRpb24tdG8tZnJhbWVzIGNvbnZlcnNpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiAoYW5pbWF0aW9uOiBJQW5pbWF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmltYXRpb24uX2JhYnlsb25BbmltYXRpb25Hcm91cDtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFJlZ2lzdGVyIGZsb3cgZ3JhcGggYmxvY2tzLiBEbyBpdCBoZXJlIHNvIHRoZXkgYXJlIGF2YWlsYWJsZSB3aGVuIHRoZSBleHRlbnNpb24gaXMgZW5hYmxlZC5cclxuYWRkVG9CbG9ja0ZhY3RvcnkoTkFNRSwgXCJGbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyXCIsIGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiAoYXdhaXQgaW1wb3J0KFwiLi9LSFJfaW50ZXJhY3Rpdml0eS9mbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyXCIpKS5GbG93R3JhcGhHTFRGRGF0YVByb3ZpZGVyO1xyXG59KTtcclxuXHJcbnVucmVnaXN0ZXJHTFRGRXh0ZW5zaW9uKE5BTUUpO1xyXG5yZWdpc3RlckdMVEZFeHRlbnNpb24oTkFNRSwgdHJ1ZSwgKGxvYWRlcikgPT4gbmV3IEtIUl9pbnRlcmFjdGl2aXR5KGxvYWRlcikpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IElLSFJJbnRlcmFjdGl2aXR5X0dyYXBoLCBJS0hSSW50ZXJhY3Rpdml0eV9Ob2RlLCBJS0hSSW50ZXJhY3Rpdml0eV9PdXRwdXRTb2NrZXRSZWZlcmVuY2UsIElLSFJJbnRlcmFjdGl2aXR5X1ZhcmlhYmxlIH0gZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xuaW1wb3J0IHR5cGUgeyBJR0xURiB9IGZyb20gXCIuLi8uLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xuaW1wb3J0IHR5cGUgeyBJR0xURlRvRmxvd0dyYXBoTWFwcGluZyB9IGZyb20gXCIuL2RlY2xhcmF0aW9uTWFwcGVyXCI7XG5pbXBvcnQgeyBnZXRNYXBwaW5nRm9yRGVjbGFyYXRpb24sIGdldE1hcHBpbmdGb3JGdWxsT3BlcmF0aW9uTmFtZSB9IGZyb20gXCIuL2RlY2xhcmF0aW9uTWFwcGVyXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xuaW1wb3J0IHR5cGUgeyBJU2VyaWFsaXplZEZsb3dHcmFwaCwgSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaywgSVNlcmlhbGl6ZWRGbG93R3JhcGhDb25uZWN0aW9uLCBJU2VyaWFsaXplZEZsb3dHcmFwaENvbnRleHQgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvdHlwZURlZmluaXRpb25zXCI7XG5pbXBvcnQgeyBSYW5kb21HVUlEIH0gZnJvbSBcImNvcmUvTWlzYy9ndWlkXCI7XG5pbXBvcnQgdHlwZSB7IElGbG93R3JhcGhCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRmxvd0dyYXBoQmxvY2tOYW1lcyB9IGZyb20gXCJjb3JlL0Zsb3dHcmFwaC9CbG9ja3MvZmxvd0dyYXBoQmxvY2tOYW1lc1wiO1xuaW1wb3J0IHsgRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgRmxvd0dyYXBoVHlwZXMgfSBmcm9tIFwiY29yZS9GbG93R3JhcGgvZmxvd0dyYXBoUmljaFR5cGVzXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpdml0eUV2ZW50IHtcbiAgICBldmVudElkOiBzdHJpbmc7XG4gICAgZXZlbnREYXRhPzoge1xuICAgICAgICBldmVudERhdGE6IGJvb2xlYW47XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgdmFsdWU/OiBhbnk7XG4gICAgfVtdO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGNvbnN0IGdsdGZUeXBlVG9CYWJ5bG9uVHlwZToge1xuICAgIFtrZXk6IHN0cmluZ106IHsgbGVuZ3RoOiBudW1iZXI7IGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzOyBlbGVtZW50VHlwZTogXCJudW1iZXJcIiB8IFwiYm9vbGVhblwiIH07XG59ID0ge1xuICAgIGZsb2F0OiB7IGxlbmd0aDogMSwgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXMuTnVtYmVyLCBlbGVtZW50VHlwZTogXCJudW1iZXJcIiB9LFxuICAgIGJvb2w6IHsgbGVuZ3RoOiAxLCBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcy5Cb29sZWFuLCBlbGVtZW50VHlwZTogXCJib29sZWFuXCIgfSxcbiAgICBmbG9hdDI6IHsgbGVuZ3RoOiAyLCBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcy5WZWN0b3IyLCBlbGVtZW50VHlwZTogXCJudW1iZXJcIiB9LFxuICAgIGZsb2F0MzogeyBsZW5ndGg6IDMsIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLlZlY3RvcjMsIGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgZmxvYXQ0OiB7IGxlbmd0aDogNCwgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXMuVmVjdG9yNCwgZWxlbWVudFR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICBmbG9hdDR4NDogeyBsZW5ndGg6IDE2LCBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcy5NYXRyaXgsIGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIH0sXG4gICAgZmxvYXQyeDI6IHsgbGVuZ3RoOiA0LCBmbG93R3JhcGhUeXBlOiBGbG93R3JhcGhUeXBlcy5NYXRyaXgyRCwgZWxlbWVudFR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICBmbG9hdDN4MzogeyBsZW5ndGg6IDksIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLk1hdHJpeDNELCBlbGVtZW50VHlwZTogXCJudW1iZXJcIiB9LFxuICAgIGludDogeyBsZW5ndGg6IDEsIGZsb3dHcmFwaFR5cGU6IEZsb3dHcmFwaFR5cGVzLkludGVnZXIsIGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIH0sXG59O1xuXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpdml0eUdyYXBoVG9GbG93R3JhcGhQYXJzZXIge1xuICAgIC8qKlxuICAgICAqIE5vdGUgLSB0aGUgZ3JhcGggc2hvdWxkIGJlIHJlamVjdGVkIGlmIHRoZSBzYW1lIHR5cGUgaXMgZGVmaW5lZCB0d2ljZS5cbiAgICAgKiBXZSBjdXJyZW50bHkgZG9uJ3QgdmFsaWRhdGUgdGhhdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF90eXBlczogeyBsZW5ndGg6IG51bWJlcjsgZmxvd0dyYXBoVHlwZTogRmxvd0dyYXBoVHlwZXM7IGVsZW1lbnRUeXBlOiBcIm51bWJlclwiIHwgXCJib29sZWFuXCIgfVtdID0gW107XG4gICAgcHJpdmF0ZSBfbWFwcGluZ3M6IHsgZmxvd0dyYXBoTWFwcGluZzogSUdMVEZUb0Zsb3dHcmFwaE1hcHBpbmc7IGZ1bGxPcGVyYXRpb25OYW1lOiBzdHJpbmcgfVtdID0gW107XG4gICAgcHJpdmF0ZSBfc3RhdGljVmFyaWFibGVzOiB7IHR5cGU6IEZsb3dHcmFwaFR5cGVzOyB2YWx1ZTogYW55W10gfVtdID0gW107XG4gICAgcHJpdmF0ZSBfZXZlbnRzOiBJbnRlcmFjdGl2aXR5RXZlbnRbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ludGVybmFsRXZlbnRzQ291bnRlcjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9ub2RlczogeyBibG9ja3M6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2tbXTsgZnVsbE9wZXJhdGlvbk5hbWU6IHN0cmluZyB9W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9pbnRlcmFjdGl2aXR5R3JhcGg6IElLSFJJbnRlcmFjdGl2aXR5X0dyYXBoLFxuICAgICAgICBwcml2YXRlIF9nbHRmOiBJR0xURixcbiAgICAgICAgcHVibGljIF9hbmltYXRpb25UYXJnZXRGcHM6IG51bWJlciA9IDYwXG4gICAgKSB7XG4gICAgICAgIC8vIHN0YXJ0IHdpdGggdHlwZXNcbiAgICAgICAgdGhpcy5fcGFyc2VUeXBlcygpO1xuICAgICAgICAvLyBjb250aW51ZSB3aXRoIGRlY2xhcmF0aW9uc1xuICAgICAgICB0aGlzLl9wYXJzZURlY2xhcmF0aW9ucygpO1xuICAgICAgICB0aGlzLl9wYXJzZVZhcmlhYmxlcygpO1xuICAgICAgICB0aGlzLl9wYXJzZUV2ZW50cygpO1xuICAgICAgICB0aGlzLl9wYXJzZU5vZGVzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcnJheXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlczogdGhpcy5fdHlwZXMsXG4gICAgICAgICAgICBtYXBwaW5nczogdGhpcy5fbWFwcGluZ3MsXG4gICAgICAgICAgICBzdGF0aWNWYXJpYWJsZXM6IHRoaXMuX3N0YXRpY1ZhcmlhYmxlcyxcbiAgICAgICAgICAgIGV2ZW50czogdGhpcy5fZXZlbnRzLFxuICAgICAgICAgICAgbm9kZXM6IHRoaXMuX25vZGVzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlVHlwZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLnR5cGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC50eXBlcykge1xuICAgICAgICAgICAgdGhpcy5fdHlwZXMucHVzaChnbHRmVHlwZVRvQmFieWxvblR5cGVbdHlwZS5zaWduYXR1cmVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlRGVjbGFyYXRpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGRlY2xhcmF0aW9uIG9mIHRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIHRoZSBtYXBwaW5nIGZvciB0aGlzIG9wZXJhdGlvblxuICAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IGdldE1hcHBpbmdGb3JEZWNsYXJhdGlvbihkZWNsYXJhdGlvbik7XG4gICAgICAgICAgICAvLyBtYXBwaW5nIGlzIGRlZmluZWQsIGJlY2F1c2Ugd2UgZ2VuZXJhdGUgYW4gZW1wdHkgbWFwcGluZyBpZiBpdCdzIG5vdCBmb3VuZFxuICAgICAgICAgICAgaWYgKCFtYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIG1hcHBpbmcgZm91bmQgZm9yIGRlY2xhcmF0aW9uXCIsIGRlY2xhcmF0aW9uXSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBkZWNsYXJhdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9tYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgICAgICBmbG93R3JhcGhNYXBwaW5nOiBtYXBwaW5nLFxuICAgICAgICAgICAgICAgIGZ1bGxPcGVyYXRpb25OYW1lOiBkZWNsYXJhdGlvbi5leHRlbnNpb24gPyBkZWNsYXJhdGlvbi5vcCArIFwiOlwiICsgZGVjbGFyYXRpb24uZXh0ZW5zaW9uIDogZGVjbGFyYXRpb24ub3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlVmFyaWFibGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlIG9mIHRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMuX3BhcnNlVmFyaWFibGUodmFyaWFibGUpO1xuICAgICAgICAgICAgLy8gc2V0IHRoZSBkZWZhdWx0IHZhbHVlcyBoZXJlXG4gICAgICAgICAgICB0aGlzLl9zdGF0aWNWYXJpYWJsZXMucHVzaChwYXJzZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VWYXJpYWJsZSh2YXJpYWJsZTogSUtIUkludGVyYWN0aXZpdHlfVmFyaWFibGUsIGRhdGFUcmFuc2Zvcm0/OiAodmFsdWU6IGFueSwgcGFyc2VyOiBJbnRlcmFjdGl2aXR5R3JhcGhUb0Zsb3dHcmFwaFBhcnNlcikgPT4gYW55KSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl90eXBlc1t2YXJpYWJsZS50eXBlXTtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gdHlwZSBmb3VuZCBmb3IgdmFyaWFibGVcIiwgdmFyaWFibGVdKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgdmFyaWFibGVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YXJpYWJsZS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhcmlhYmxlLnZhbHVlLmxlbmd0aCAhPT0gdHlwZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiSW52YWxpZCB2YWx1ZSBsZW5ndGggZm9yIHZhcmlhYmxlXCIsIHZhcmlhYmxlLCB0eXBlXSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyB2YXJpYWJsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YXJpYWJsZS52YWx1ZSB8fCBbXTtcbiAgICAgICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZS5mbG93R3JhcGhUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5Cb29sZWFuOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5JbnRlZ2VyOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKDApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaChOYU4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjI6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goTmFOLCBOYU4pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLlZlY3RvcjM6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goTmFOLCBOYU4sIE5hTik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuVmVjdG9yNDpcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDJEOlxuICAgICAgICAgICAgICAgIGNhc2UgRmxvd0dyYXBoVHlwZXMuUXVhdGVybmlvbjpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZmlsbChOYU4sIDAsIDQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEZsb3dHcmFwaFR5cGVzLk1hdHJpeDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZmlsbChOYU4sIDAsIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG93R3JhcGhUeXBlcy5NYXRyaXgzRDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuZmlsbChOYU4sIDAsIDkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBjYXNlIG9mIE5hTiwgSW5maW5pdHksIHdlIG5lZWQgdG8gcGFyc2UgdGhlIHN0cmluZyB0byB0aGUgb2JqZWN0IGl0c2VsZlxuICAgICAgICBpZiAodHlwZS5lbGVtZW50VHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdmFsdWVbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhbHVlWzBdID0gcGFyc2VGbG9hdCh2YWx1ZVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZS5mbG93R3JhcGhUeXBlLCB2YWx1ZTogZGF0YVRyYW5zZm9ybSA/IGRhdGFUcmFuc2Zvcm0odmFsdWUsIHRoaXMpIDogdmFsdWUgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZUV2ZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGguZXZlbnRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiB0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGguZXZlbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWQ6IEludGVyYWN0aXZpdHlFdmVudCA9IHtcbiAgICAgICAgICAgICAgICBldmVudElkOiBldmVudC5pZCB8fCBcImludGVybmFsRXZlbnRfXCIgKyB0aGlzLl9pbnRlcm5hbEV2ZW50c0NvdW50ZXIrKyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZXZlbnQudmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkLmV2ZW50RGF0YSA9IE9iamVjdC5rZXlzKGV2ZW50LnZhbHVlcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRWYWx1ZSA9IGV2ZW50LnZhbHVlcz8uW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIHZhbHVlIGZvdW5kIGZvciBldmVudCBrZXlcIiwga2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIGV2ZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5fdHlwZXNbZXZlbnRWYWx1ZS50eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gdHlwZSBmb3VuZCBmb3IgZXZlbnQgdmFsdWVcIiwgZXZlbnRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBldmVudHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgZXZlbnRWYWx1ZS52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMuX3BhcnNlVmFyaWFibGUoZXZlbnRWYWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZS5mbG93R3JhcGhUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMucHVzaChjb252ZXJ0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VOb2RlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGgubm9kZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLm5vZGVzKSB7XG4gICAgICAgICAgICAvLyBzb21lIHZhbGlkYXRpb25cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5kZWNsYXJhdGlvbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBkZWNsYXJhdGlvbiBmb3VuZCBmb3Igbm9kZVwiLCBub2RlXSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2Rlc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1hcHBpbmcgPSB0aGlzLl9tYXBwaW5nc1tub2RlLmRlY2xhcmF0aW9uXTtcbiAgICAgICAgICAgIGlmICghbWFwcGluZykge1xuICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBtYXBwaW5nIGZvdW5kIGZvciBub2RlXCIsIG5vZGVdKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIG5vZGVzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hcHBpbmcuZmxvd0dyYXBoTWFwcGluZy52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IG1hcHBpbmcuZmxvd0dyYXBoTWFwcGluZy52YWxpZGF0aW9uKG5vZGUsIHRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaCwgdGhpcy5fZ2x0Zik7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgdmFsaWRhdGluZyBpbnRlcmFjdGl2aXR5IG5vZGUgJHt0aGlzLl9pbnRlcmFjdGl2aXR5R3JhcGguZGVjbGFyYXRpb25zPy5bbm9kZS5kZWNsYXJhdGlvbl0ub3B9IC0gJHt2YWxpZGF0aW9uUmVzdWx0LmVycm9yfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrczogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9ja1tdID0gW107XG4gICAgICAgICAgICAvLyBjcmVhdGUgYmxvY2socykgZm9yIHRoaXMgbm9kZSB1c2luZyB0aGUgbWFwcGluZ1xuICAgICAgICAgICAgZm9yIChjb25zdCBibG9ja1R5cGUgb2YgbWFwcGluZy5mbG93R3JhcGhNYXBwaW5nLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fZ2V0RW1wdHlCbG9jayhibG9ja1R5cGUsIG1hcHBpbmcuZnVsbE9wZXJhdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlTm9kZUNvbmZpZ3VyYXRpb24obm9kZSwgYmxvY2ssIG1hcHBpbmcuZmxvd0dyYXBoTWFwcGluZywgYmxvY2tUeXBlKTtcbiAgICAgICAgICAgICAgICBibG9ja3MucHVzaChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9ub2Rlcy5wdXNoKHsgYmxvY2tzLCBmdWxsT3BlcmF0aW9uTmFtZTogbWFwcGluZy5mdWxsT3BlcmF0aW9uTmFtZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEVtcHR5QmxvY2soY2xhc3NOYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2sge1xuICAgICAgICBjb25zdCB1bmlxdWVJZCA9IFJhbmRvbUdVSUQoKTtcbiAgICAgICAgY29uc3QgZGF0YUlucHV0czogSVNlcmlhbGl6ZWRGbG93R3JhcGhDb25uZWN0aW9uW10gPSBbXTtcbiAgICAgICAgY29uc3QgZGF0YU91dHB1dHM6IElTZXJpYWxpemVkRmxvd0dyYXBoQ29ubmVjdGlvbltdID0gW107XG4gICAgICAgIGNvbnN0IHNpZ25hbElucHV0czogSVNlcmlhbGl6ZWRGbG93R3JhcGhDb25uZWN0aW9uW10gPSBbXTtcbiAgICAgICAgY29uc3Qgc2lnbmFsT3V0cHV0czogSVNlcmlhbGl6ZWRGbG93R3JhcGhDb25uZWN0aW9uW10gPSBbXTtcbiAgICAgICAgY29uc3QgY29uZmlnOiBJRmxvd0dyYXBoQmxvY2tDb25maWd1cmF0aW9uID0ge307XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0ge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bmlxdWVJZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRhdGFJbnB1dHMsXG4gICAgICAgICAgICBkYXRhT3V0cHV0cyxcbiAgICAgICAgICAgIHNpZ25hbElucHV0cyxcbiAgICAgICAgICAgIHNpZ25hbE91dHB1dHMsXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcGFyc2VOb2RlQ29uZmlndXJhdGlvbihub2RlOiBJS0hSSW50ZXJhY3Rpdml0eV9Ob2RlLCBibG9jazogSVNlcmlhbGl6ZWRGbG93R3JhcGhCbG9jaywgbm9kZU1hcHBpbmc6IElHTFRGVG9GbG93R3JhcGhNYXBwaW5nLCBibG9ja1R5cGU6IEZsb3dHcmFwaEJsb2NrTmFtZXMgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IGJsb2NrLmNvbmZpZztcbiAgICAgICAgaWYgKG5vZGUuY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG5vZGUuY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmNvbmZpZ3VyYXRpb24/LltrZXldO1xuICAgICAgICAgICAgICAgIC8vIHZhbHVlIGlzIGFsd2F5cyBhbiBhcnJheSwgbmV2ZXIgYSBudW1iZXIgb3Igc3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gdmFsdWUgZm91bmQgZm9yIG5vZGUgY29uZmlndXJhdGlvblwiLCBrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyBub2RlIGNvbmZpZ3VyYXRpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ01hcHBpbmcgPSBub2RlTWFwcGluZy5jb25maWd1cmF0aW9uPy5ba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWxvbmdzVG9CbG9jayA9IGNvbmZpZ01hcHBpbmcgJiYgY29uZmlnTWFwcGluZy50b0Jsb2NrID8gY29uZmlnTWFwcGluZy50b0Jsb2NrID09PSBibG9ja1R5cGUgOiBub2RlTWFwcGluZy5ibG9ja3MuaW5kZXhPZihibG9ja1R5cGUpID09PSAwO1xuICAgICAgICAgICAgICAgIGlmIChiZWxvbmdzVG9CbG9jaykge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHJpZ2h0IG5hbWUgZm9yIHRoZSBjb25maWd1cmF0aW9uIGtleVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWdLZXkgPSBjb25maWdNYXBwaW5nPy5uYW1lIHx8IGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCghdmFsdWUgfHwgdHlwZW9mIHZhbHVlLnZhbHVlID09PSBcInVuZGVmaW5lZFwiKSAmJiB0eXBlb2YgY29uZmlnTWFwcGluZz8uZGVmYXVsdFZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uW2NvbmZpZ0tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbmZpZ01hcHBpbmcuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS52YWx1ZS5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VwcG9ydGluZyBpbnRbXSBhbmQgaW50L2Jvb2xlYW4vc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uW2NvbmZpZ0tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMSA/IHZhbHVlLnZhbHVlWzBdIDogdmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oW1wiSW52YWxpZCB2YWx1ZSBmb3Igbm9kZSBjb25maWd1cmF0aW9uXCIsIHZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHRyYW5zZm9ybSB0aGUgZGF0YSBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ01hcHBpbmcgJiYgY29uZmlnTWFwcGluZy5kYXRhVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25bY29uZmlnS2V5XS52YWx1ZSA9IGNvbmZpZ01hcHBpbmcuZGF0YVRyYW5zZm9ybWVyKFtjb25maWd1cmF0aW9uW2NvbmZpZ0tleV0udmFsdWVdLCB0aGlzKVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlTm9kZUNvbm5lY3Rpb25zKGNvbnRleHQ6IElTZXJpYWxpemVkRmxvd0dyYXBoQ29udGV4dCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgZ2x0ZiBub2RlXG4gICAgICAgICAgICBjb25zdCBnbHRmTm9kZSA9IHRoaXMuX2ludGVyYWN0aXZpdHlHcmFwaC5ub2Rlcz8uW2ldO1xuICAgICAgICAgICAgaWYgKCFnbHRmTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBuZXZlciBoYXBwZW4gYnV0IGxldCdzIHN0aWxsIGNoZWNrXG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIG5vZGUgZm91bmQgZm9yIGludGVyYWN0aXZpdHkgbm9kZVwiLCB0aGlzLl9ub2Rlc1tpXV0pO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZsb3dHcmFwaEJsb2NrcyA9IHRoaXMuX25vZGVzW2ldO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0TWFwcGVyID0gdGhpcy5fbWFwcGluZ3NbZ2x0Zk5vZGUuZGVjbGFyYXRpb25dO1xuICAgICAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgICAgIGlmICghb3V0cHV0TWFwcGVyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLkVycm9yKFtcIk5vIG1hcHBpbmcgZm91bmQgZm9yIG5vZGVcIiwgZ2x0Zk5vZGVdKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIG5vZGUgY29ubmVjdGlvbnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmbG93c0Zyb21HTFRGID0gZ2x0Zk5vZGUuZmxvd3MgfHwge307XG4gICAgICAgICAgICBjb25zdCBmbG93c0tleXMgPSBPYmplY3Qua2V5cyhmbG93c0Zyb21HTFRGKS5zb3J0KCk7IC8vIHNvcnRpbmcgYXMgc29tZSBvcGVyYXRpb25zIHJlcXVpcmUgc29ydGVkIGtleXNcbiAgICAgICAgICAgIC8vIGNvbm5lY3QgdGhlIGZsb3dzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZsb3dLZXkgb2YgZmxvd3NLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvdyA9IGZsb3dzRnJvbUdMVEZbZmxvd0tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZmxvd01hcHBpbmcgPSBvdXRwdXRNYXBwZXIuZmxvd0dyYXBoTWFwcGluZy5vdXRwdXRzPy5mbG93cz8uW2Zsb3dLZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvY2tldE91dE5hbWUgPSBmbG93TWFwcGluZz8ubmFtZSB8fCBmbG93S2V5O1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNlcmlhbGl6ZWQgc29ja2V0XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0T3V0ID0gdGhpcy5fY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihzb2NrZXRPdXROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IChmbG93TWFwcGluZyAmJiBmbG93TWFwcGluZy50b0Jsb2NrICYmIGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3MuZmluZCgoYikgPT4gYi5jbGFzc05hbWUgPT09IGZsb3dNYXBwaW5nLnRvQmxvY2spKSB8fCBmbG93R3JhcGhCbG9ja3MuYmxvY2tzWzBdO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNpZ25hbE91dHB1dHMucHVzaChzb2NrZXRPdXQpO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgaW5wdXQgbm9kZSBvZiB0aGlzIGJsb2NrXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXROb2RlSWQgPSBmbG93Lm5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUluID0gdGhpcy5fbm9kZXNbaW5wdXROb2RlSWRdO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZUluKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBub2RlIGZvdW5kIGZvciBpbnB1dCBub2RlIGlkXCIsIGlucHV0Tm9kZUlkXSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBtYXBwZXIgZm9yIHRoZSBpbnB1dCBub2RlIC0gaW4gY2FzZSBpdCBtYXBwZWQgdG8gbXVsdGlwbGUgYmxvY2tzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRNYXBwZXIgPSBnZXRNYXBwaW5nRm9yRnVsbE9wZXJhdGlvbk5hbWUobm9kZUluLmZ1bGxPcGVyYXRpb25OYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0TWFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBtYXBwaW5nIGZvdW5kIGZvciBpbnB1dCBub2RlXCIsIG5vZGVJbl0pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIG5vZGUgY29ubmVjdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBmbG93SW5NYXBwaW5nID0gaW5wdXRNYXBwZXIuaW5wdXRzPy5mbG93cz8uW2Zsb3cuc29ja2V0IHx8IFwiaW5cIl07XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5TWFwcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghZmxvd0luTWFwcGluZykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dE1hcHBlci5pbnB1dHM/LmZsb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJbXCIpICYmIGtleS5lbmRzV2l0aChcIl1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU1hcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb3dJbk1hcHBpbmcgPSBpbnB1dE1hcHBlci5pbnB1dHM/LmZsb3dzPy5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBub2RlSW5Tb2NrZXROYW1lID0gZmxvd0luTWFwcGluZyA/IChhcnJheU1hcHBpbmcgPyBmbG93SW5NYXBwaW5nLm5hbWUucmVwbGFjZShcIiQxXCIsIGZsb3cuc29ja2V0IHx8IFwiXCIpIDogZmxvd0luTWFwcGluZy5uYW1lKSA6IGZsb3cuc29ja2V0IHx8IFwiaW5cIjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dEJsb2NrID0gKGZsb3dJbk1hcHBpbmcgJiYgZmxvd0luTWFwcGluZy50b0Jsb2NrICYmIG5vZGVJbi5ibG9ja3MuZmluZCgoYikgPT4gYi5jbGFzc05hbWUgPT09IGZsb3dJbk1hcHBpbmcudG9CbG9jaykpIHx8IG5vZGVJbi5ibG9ja3NbMF07XG4gICAgICAgICAgICAgICAgLy8gaW4gYWxsIG9mIHRoZSBmbG93IGdyYXBoIGlucHV0IGNvbm5lY3Rpb25zLCBmaW5kIHRoZSBvbmUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBzb2NrZXRcbiAgICAgICAgICAgICAgICBsZXQgc29ja2V0SW4gPSBpbnB1dEJsb2NrLnNpZ25hbElucHV0cy5maW5kKChzKSA9PiBzLm5hbWUgPT09IG5vZGVJblNvY2tldE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzb2NrZXQgZG9lc24ndCBleGlzdCwgY3JlYXRlIHRoZSBpbnB1dCBzb2NrZXQgZm9yIHRoZSBjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCFzb2NrZXRJbikge1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXRJbiA9IHRoaXMuX2NyZWF0ZU5ld1NvY2tldENvbm5lY3Rpb24obm9kZUluU29ja2V0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0QmxvY2suc2lnbmFsSW5wdXRzLnB1c2goc29ja2V0SW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0IHRoZSBzb2NrZXRzXG4gICAgICAgICAgICAgICAgc29ja2V0SW4uY29ubmVjdGVkUG9pbnRJZHMucHVzaChzb2NrZXRPdXQudW5pcXVlSWQpO1xuICAgICAgICAgICAgICAgIHNvY2tldE91dC5jb25uZWN0ZWRQb2ludElkcy5wdXNoKHNvY2tldEluLnVuaXF1ZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbm5lY3QgdGhlIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzRnJvbUdMVEYgPSBnbHRmTm9kZS52YWx1ZXMgfHwge307XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXNLZXlzID0gT2JqZWN0LmtleXModmFsdWVzRnJvbUdMVEYpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZUtleSBvZiB2YWx1ZXNLZXlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNGcm9tR0xURlt2YWx1ZUtleV07XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlTWFwcGluZyA9IG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLmlucHV0cz8udmFsdWVzPy5bdmFsdWVLZXldO1xuICAgICAgICAgICAgICAgIGxldCBhcnJheU1hcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlTWFwcGluZykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvdXRwdXRNYXBwZXIuZmxvd0dyYXBoTWFwcGluZy5pbnB1dHM/LnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwiW1wiKSAmJiBrZXkuZW5kc1dpdGgoXCJdXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlNYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU1hcHBpbmcgPSBvdXRwdXRNYXBwZXIuZmxvd0dyYXBoTWFwcGluZy5pbnB1dHM/LnZhbHVlcz8uW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0SW5OYW1lID0gdmFsdWVNYXBwaW5nID8gKGFycmF5TWFwcGluZyA/IHZhbHVlTWFwcGluZy5uYW1lLnJlcGxhY2UoXCIkMVwiLCB2YWx1ZUtleSkgOiB2YWx1ZU1hcHBpbmcubmFtZSkgOiB2YWx1ZUtleTtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBzZXJpYWxpemVkIHNvY2tldFxuICAgICAgICAgICAgICAgIGNvbnN0IHNvY2tldEluID0gdGhpcy5fY3JlYXRlTmV3U29ja2V0Q29ubmVjdGlvbihzb2NrZXRJbk5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gKHZhbHVlTWFwcGluZyAmJiB2YWx1ZU1hcHBpbmcudG9CbG9jayAmJiBmbG93R3JhcGhCbG9ja3MuYmxvY2tzLmZpbmQoKGIpID0+IGIuY2xhc3NOYW1lID09PSB2YWx1ZU1hcHBpbmcudG9CbG9jaykpIHx8IGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3NbMF07XG4gICAgICAgICAgICAgICAgYmxvY2suZGF0YUlucHV0cy5wdXNoKHNvY2tldEluKTtcbiAgICAgICAgICAgICAgICBpZiAoKHZhbHVlIGFzIElLSFJJbnRlcmFjdGl2aXR5X1ZhcmlhYmxlKS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZFZhbHVlID0gdGhpcy5fcGFyc2VWYXJpYWJsZSh2YWx1ZSBhcyBJS0hSSW50ZXJhY3Rpdml0eV9WYXJpYWJsZSwgdmFsdWVNYXBwaW5nICYmIHZhbHVlTWFwcGluZy5kYXRhVHJhbnNmb3JtZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9jb25uZWN0aW9uVmFsdWVzW3NvY2tldEluLnVuaXF1ZUlkXSA9IGNvbnZlcnRlZFZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mICh2YWx1ZSBhcyBJS0hSSW50ZXJhY3Rpdml0eV9PdXRwdXRTb2NrZXRSZWZlcmVuY2UpLm5vZGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZU91dElkID0gKHZhbHVlIGFzIElLSFJJbnRlcmFjdGl2aXR5X091dHB1dFNvY2tldFJlZmVyZW5jZSkubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZU91dFNvY2tldE5hbWUgPSAodmFsdWUgYXMgSUtIUkludGVyYWN0aXZpdHlfT3V0cHV0U29ja2V0UmVmZXJlbmNlKS5zb2NrZXQgfHwgXCJ2YWx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlT3V0ID0gdGhpcy5fbm9kZXNbbm9kZU91dElkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gbm9kZSBmb3VuZCBmb3Igb3V0cHV0IHNvY2tldCByZWZlcmVuY2VcIiwgdmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXRNYXBwZXIgPSBnZXRNYXBwaW5nRm9yRnVsbE9wZXJhdGlvbk5hbWUobm9kZU91dC5mdWxsT3BlcmF0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0cHV0TWFwcGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiTm8gbWFwcGluZyBmb3VuZCBmb3Igb3V0cHV0IHNvY2tldCByZWZlcmVuY2VcIiwgdmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVNYXBwaW5nID0gb3V0cHV0TWFwcGVyLm91dHB1dHM/LnZhbHVlcz8uW25vZGVPdXRTb2NrZXROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycmF5TWFwcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbiBhcnJheSBtYXBwaW5nIGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZU1hcHBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaCBmb3IgYSB2YWx1ZSBtYXBwaW5nIHRoYXQgaGFzIGFuIGFycmF5IG1hcHBpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG91dHB1dE1hcHBlci5vdXRwdXRzPy52YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJbXCIpICYmIGtleS5lbmRzV2l0aChcIl1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlNYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVNYXBwaW5nID0gb3V0cHV0TWFwcGVyLm91dHB1dHM/LnZhbHVlcz8uW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvY2tldE91dE5hbWUgPSB2YWx1ZU1hcHBpbmcgPyAoYXJyYXlNYXBwaW5nID8gdmFsdWVNYXBwaW5nLm5hbWUucmVwbGFjZShcIiQxXCIsIG5vZGVPdXRTb2NrZXROYW1lKSA6IHZhbHVlTWFwcGluZz8ubmFtZSkgOiBub2RlT3V0U29ja2V0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0QmxvY2sgPSAodmFsdWVNYXBwaW5nICYmIHZhbHVlTWFwcGluZy50b0Jsb2NrICYmIG5vZGVPdXQuYmxvY2tzLmZpbmQoKGIpID0+IGIuY2xhc3NOYW1lID09PSB2YWx1ZU1hcHBpbmcudG9CbG9jaykpIHx8IG5vZGVPdXQuYmxvY2tzWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc29ja2V0T3V0ID0gb3V0QmxvY2suZGF0YU91dHB1dHMuZmluZCgocykgPT4gcy5uYW1lID09PSBzb2NrZXRPdXROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNvY2tldCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzb2NrZXRPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldE91dCA9IHRoaXMuX2NyZWF0ZU5ld1NvY2tldENvbm5lY3Rpb24oc29ja2V0T3V0TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRCbG9jay5kYXRhT3V0cHV0cy5wdXNoKHNvY2tldE91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY29ubmVjdCB0aGUgc29ja2V0c1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXRJbi5jb25uZWN0ZWRQb2ludElkcy5wdXNoKHNvY2tldE91dC51bmlxdWVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldE91dC5jb25uZWN0ZWRQb2ludElkcy5wdXNoKHNvY2tldEluLnVuaXF1ZUlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuRXJyb3IoW1wiSW52YWxpZCB2YWx1ZSBmb3IgdmFsdWUgY29ubmVjdGlvblwiLCB2YWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIG5vZGUgY29ubmVjdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbnRlciBibG9jayBjb25uZWN0aW9uc1xuICAgICAgICAgICAgaWYgKG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLmludGVyQmxvY2tDb25uZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb25uZWN0b3Igb2Ygb3V0cHV0TWFwcGVyLmZsb3dHcmFwaE1hcHBpbmcuaW50ZXJCbG9ja0Nvbm5lY3RvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBjb25uZWN0b3IuaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGNvbm5lY3Rvci5vdXRwdXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFyaWFibGUgPSBjb25uZWN0b3IuaXNWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdEZsb3dHcmFwaE5vZGVzKGlucHV0LCBvdXRwdXQsIGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3NbY29ubmVjdG9yLmlucHV0QmxvY2tJbmRleF0sIGZsb3dHcmFwaEJsb2Nrcy5ibG9ja3NbY29ubmVjdG9yLm91dHB1dEJsb2NrSW5kZXhdLCBpc1ZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvdXRwdXRNYXBwZXIuZmxvd0dyYXBoTWFwcGluZy5leHRyYVByb2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5faW50ZXJhY3Rpdml0eUdyYXBoLmRlY2xhcmF0aW9ucz8uW2dsdGZOb2RlLmRlY2xhcmF0aW9uXTtcbiAgICAgICAgICAgICAgICBpZiAoIWRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5FcnJvcihbXCJObyBkZWNsYXJhdGlvbiBmb3VuZCBmb3IgZXh0cmEgcHJvY2Vzc29yXCIsIGdsdGZOb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgbm9kZSBjb25uZWN0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmxvd0dyYXBoQmxvY2tzLmJsb2NrcyA9IG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLmV4dHJhUHJvY2Vzc29yKFxuICAgICAgICAgICAgICAgICAgICBnbHRmTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dE1hcHBlci5mbG93R3JhcGhNYXBwaW5nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBmbG93R3JhcGhCbG9ja3MuYmxvY2tzLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nbHRmXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NyZWF0ZU5ld1NvY2tldENvbm5lY3Rpb24obmFtZTogc3RyaW5nLCBpc091dHB1dD86IGJvb2xlYW4pOiBJU2VyaWFsaXplZEZsb3dHcmFwaENvbm5lY3Rpb24ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5pcXVlSWQ6IFJhbmRvbUdVSUQoKSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBfY29ubmVjdGlvblR5cGU6IGlzT3V0cHV0ID8gRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUuT3V0cHV0IDogRmxvd0dyYXBoQ29ubmVjdGlvblR5cGUuSW5wdXQsXG4gICAgICAgICAgICBjb25uZWN0ZWRQb2ludElkczogW10sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29ubmVjdEZsb3dHcmFwaE5vZGVzKGlucHV0OiBzdHJpbmcsIG91dHB1dDogc3RyaW5nLCBzZXJpYWxpemVkSW5wdXQ6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2ssIHNlcmlhbGl6ZWRPdXRwdXQ6IElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2ssIGlzVmFyaWFibGU/OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGlucHV0QXJyYXkgPSBpc1ZhcmlhYmxlID8gc2VyaWFsaXplZElucHV0LmRhdGFJbnB1dHMgOiBzZXJpYWxpemVkSW5wdXQuc2lnbmFsSW5wdXRzO1xuICAgICAgICBjb25zdCBvdXRwdXRBcnJheSA9IGlzVmFyaWFibGUgPyBzZXJpYWxpemVkT3V0cHV0LmRhdGFPdXRwdXRzIDogc2VyaWFsaXplZE91dHB1dC5zaWduYWxPdXRwdXRzO1xuICAgICAgICBjb25zdCBpbnB1dENvbm5lY3Rpb24gPSBpbnB1dEFycmF5LmZpbmQoKHMpID0+IHMubmFtZSA9PT0gaW5wdXQpIHx8IHRoaXMuX2NyZWF0ZU5ld1NvY2tldENvbm5lY3Rpb24oaW5wdXQpO1xuICAgICAgICBjb25zdCBvdXRwdXRDb25uZWN0aW9uID0gb3V0cHV0QXJyYXkuZmluZCgocykgPT4gcy5uYW1lID09PSBvdXRwdXQpIHx8IHRoaXMuX2NyZWF0ZU5ld1NvY2tldENvbm5lY3Rpb24ob3V0cHV0LCB0cnVlKTtcbiAgICAgICAgLy8gb2Ygbm90IGZvdW5kIGFkZCBpdCB0byB0aGUgYXJyYXlcbiAgICAgICAgaWYgKCFpbnB1dEFycmF5LmZpbmQoKHMpID0+IHMubmFtZSA9PT0gaW5wdXQpKSB7XG4gICAgICAgICAgICBpbnB1dEFycmF5LnB1c2goaW5wdXRDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW91dHB1dEFycmF5LmZpbmQoKHMpID0+IHMubmFtZSA9PT0gb3V0cHV0KSkge1xuICAgICAgICAgICAgb3V0cHV0QXJyYXkucHVzaChvdXRwdXRDb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25uZWN0IHRoZSBzb2NrZXRzXG4gICAgICAgIGlucHV0Q29ubmVjdGlvbi5jb25uZWN0ZWRQb2ludElkcy5wdXNoKG91dHB1dENvbm5lY3Rpb24udW5pcXVlSWQpO1xuICAgICAgICBvdXRwdXRDb25uZWN0aW9uLmNvbm5lY3RlZFBvaW50SWRzLnB1c2goaW5wdXRDb25uZWN0aW9uLnVuaXF1ZUlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFyaWFibGVOYW1lKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIFwic3RhdGljVmFyaWFibGVfXCIgKyBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VyaWFsaXplVG9GbG93R3JhcGgoKTogSVNlcmlhbGl6ZWRGbG93R3JhcGgge1xuICAgICAgICBjb25zdCBjb250ZXh0OiBJU2VyaWFsaXplZEZsb3dHcmFwaENvbnRleHQgPSB7XG4gICAgICAgICAgICB1bmlxdWVJZDogUmFuZG9tR1VJRCgpLFxuICAgICAgICAgICAgX3VzZXJWYXJpYWJsZXM6IHt9LFxuICAgICAgICAgICAgX2Nvbm5lY3Rpb25WYWx1ZXM6IHt9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wYXJzZU5vZGVDb25uZWN0aW9ucyhjb250ZXh0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zdGF0aWNWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5fc3RhdGljVmFyaWFibGVzW2ldO1xuICAgICAgICAgICAgY29udGV4dC5fdXNlclZhcmlhYmxlc1t0aGlzLmdldFZhcmlhYmxlTmFtZShpKV0gPSB2YXJpYWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFsbEJsb2NrcyA9IHRoaXMuX25vZGVzLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsLmJsb2NrcyksIFtdIGFzIElTZXJpYWxpemVkRmxvd0dyYXBoQmxvY2tbXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJpZ2h0SGFuZGVkOiB0cnVlLFxuICAgICAgICAgICAgYWxsQmxvY2tzLFxuICAgICAgICAgICAgZXhlY3V0aW9uQ29udGV4dHM6IFtjb250ZXh0XSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=