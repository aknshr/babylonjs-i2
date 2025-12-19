import type { IReadonlyObservable, Nullable } from "core/index";
import type { IService, ServiceDefinition } from "../modularity/serviceDefinition";
import type { ISettingsContext } from "./settingsContext";
import type { IShellService } from "./shellService";
export declare const SelectionServiceIdentity: unique symbol;
/**
 * Tracks the currently selected entity.
 */
export interface ISelectionService extends IService<typeof SelectionServiceIdentity> {
    /**
     * Gets or sets the currently selected entity.
     */
    selectedEntity: Nullable<unknown>;
    /**
     * An observable that notifies when the selected entity changes.
     */
    readonly onSelectedEntityChanged: IReadonlyObservable<void>;
}
export declare const SelectionServiceDefinition: ServiceDefinition<[ISelectionService], [IShellService, ISettingsContext]>;
