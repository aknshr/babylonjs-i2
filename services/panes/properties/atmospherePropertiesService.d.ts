import type { ServiceDefinition } from "../../../modularity/serviceDefinition";
import type { ISelectionService } from "../../selectionService";
import type { IPropertiesService } from "./propertiesService";
import type { ISceneContext } from "../../../services/sceneContext";
export declare const AtmospherePropertiesServiceDefinition: ServiceDefinition<[], [IPropertiesService, ISelectionService, ISceneContext]>;
