import type { ServiceDefinition } from "../modularity/serviceDefinition";
import type { IGizmoService } from "./gizmoService";
import type { ISceneContext } from "./sceneContext";
import type { ISelectionService } from "./selectionService";
import type { ISettingsContext } from "./settingsContext";
import type { IShellService } from "./shellService";
export declare const PickingServiceDefinition: ServiceDefinition<[], [ISceneContext, IShellService, ISelectionService, IGizmoService, ISettingsContext]>;
