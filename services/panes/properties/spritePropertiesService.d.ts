import type { ServiceDefinition } from "../../../modularity/serviceDefinition";
import type { ISettingsContext } from "../../../services/settingsContext";
import type { ISelectionService } from "../../selectionService";
import type { IPropertiesService } from "./propertiesService";
export declare const SpritePropertiesServiceDefinition: ServiceDefinition<[], [IPropertiesService, ISelectionService, ISettingsContext]>;
