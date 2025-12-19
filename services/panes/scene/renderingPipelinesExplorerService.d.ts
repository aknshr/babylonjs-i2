import type { ServiceDefinition } from "../../../modularity/serviceDefinition";
import type { ISceneContext } from "../../sceneContext";
import type { ISceneExplorerService } from "./sceneExplorerService";
import "core/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent";
export declare const RenderingPipelineExplorerServiceDefinition: ServiceDefinition<[], [ISceneExplorerService, ISceneContext]>;
