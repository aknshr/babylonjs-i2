import type { ServiceDefinition } from "../../../modularity/serviceDefinition";
import type { IGizmoService } from "../../gizmoService";
import type { ISceneContext } from "../../sceneContext";
import type { ISceneExplorerService } from "./sceneExplorerService";
import "core/Rendering/boundingBoxRenderer";
export declare const NodeExplorerServiceDefinition: ServiceDefinition<[], [ISceneExplorerService, ISceneContext, IGizmoService]>;
