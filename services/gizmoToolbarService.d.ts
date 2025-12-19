import type { ServiceDefinition } from "../modularity/serviceDefinition";
import type { ISceneContext } from "./sceneContext";
import type { ISelectionService } from "./selectionService";
import type { IShellService } from "./shellService";
import type { IGizmoService } from "./gizmoService";
export declare const GizmoToolbarServiceDefinition: ServiceDefinition<[], [ISceneContext, IShellService, ISelectionService, IGizmoService]>;
