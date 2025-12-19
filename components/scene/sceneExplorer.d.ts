import type { ComponentType, FunctionComponent } from "react";
import type { IDisposable, IReadonlyObservable, Scene } from "core/index";
export type EntityBase = Readonly<{
    uniqueId: number;
    reservedDataStore?: Record<PropertyKey, unknown>;
}>;
export type EntityDisplayInfo = Partial<IDisposable> & Readonly<{
    /**
     * The name of the entity to display in the Scene Explorer tree.
     */
    name: string;
    /**
     * An observable that notifies when the display info (such as the name) changes.
     */
    onChange?: IReadonlyObservable<void>;
}>;
export type SceneExplorerSection<T extends EntityBase> = Readonly<{
    /**
     * The display name of the section (e.g. "Nodes", "Materials", etc.).
     */
    displayName: string;
    /**
     * An optional order for the section, relative to other sections.
     * Defaults to 0.
     */
    order?: number;
    /**
     * A function that returns the root entities for this section.
     */
    getRootEntities: () => readonly T[];
    /**
     * An optional function that returns the children of a given entity.
     */
    getEntityChildren?: (entity: T) => readonly T[];
    /**
     * Gets the display information for a given entity.
     * This is ideally "live" display info (e.g. updates to the display info are taken into account and communicated via the observable).
     * This means in many cases the display info will need to be disposed when it is no longer needed so observable registrations can be removed.
     */
    getEntityDisplayInfo: (entity: T) => EntityDisplayInfo;
    /**
     * An optional icon component to render for the entity.
     */
    entityIcon?: ComponentType<{
        entity: T;
    }>;
    /**
     * A function that returns an array of observables for when entities are added to the scene.
     */
    getEntityAddedObservables: () => readonly IReadonlyObservable<T>[];
    /**
     * A function that returns an array of observables for when entities are removed from the scene.
     */
    getEntityRemovedObservables: () => readonly IReadonlyObservable<T>[];
    /**
     * A function that returns an array of observables for when entities are moved (e.g. re-parented) within the scene.
     */
    getEntityMovedObservables?: () => readonly IReadonlyObservable<T>[];
}>;
type InlineCommand = {
    /**
     * An icon component to render for the command. Required for inline commands.
     */
    icon: ComponentType;
    /**
     * The mode of the command. Inline commands are shown directly in the tree item layout. Inline by default.
     */
    mode?: "inline";
};
type ContextMenuCommand = {
    /**
     * An icon component to render for the command. Optional for context menu commands.
     */
    icon?: ComponentType;
    /**
     * The mode of the command. Context menu commands are shown in the context menu for the tree item.
     */
    mode: "contextMenu";
};
type CommandMode = NonNullable<(InlineCommand | ContextMenuCommand)["mode"]>;
type ActionCommand = {
    readonly type: "action";
    /**
     * The function that executes the command.
     */
    execute(): void;
};
type ToggleCommand = {
    readonly type: "toggle";
    /**
     * A boolean indicating if the command is enabled.
     */
    isEnabled: boolean;
};
type CommandType = (ActionCommand | ToggleCommand)["type"];
export type SceneExplorerCommand<ModeT extends CommandMode = CommandMode, TypeT extends CommandType = CommandType> = Partial<IDisposable> & Readonly<{
    /**
     * The display name of the command (e.g. "Delete", "Rename", etc.).
     */
    displayName: string;
    /**
     * An observable that notifies when the command state changes.
     */
    onChange?: IReadonlyObservable<unknown>;
}> & (ModeT extends "inline" ? InlineCommand : ContextMenuCommand) & (TypeT extends "action" ? ActionCommand : ToggleCommand);
export type SceneExplorerCommandProvider<ContextT, ModeT extends CommandMode = CommandMode, TypeT extends CommandType = CommandType> = Readonly<{
    /**
     * An optional order for the section, relative to other commands.
     * Defaults to 0.
     */
    order?: number;
    /**
     * A predicate function that determines if the command is applicable to the given context.
     */
    predicate: (context: unknown) => context is ContextT;
    /**
     * Gets the command information for the given context.
     */
    getCommand: (context: ContextT) => SceneExplorerCommand<ModeT, TypeT>;
}>;
declare const ActionCommand: FunctionComponent<{
    command: SceneExplorerCommand<"inline", "action">;
}>;
declare const ToggleCommand: FunctionComponent<{
    command: SceneExplorerCommand<"inline", "toggle">;
}>;
export declare const SceneExplorer: FunctionComponent<{
    sections: readonly SceneExplorerSection<EntityBase>[];
    entityCommandProviders: readonly SceneExplorerCommandProvider<EntityBase>[];
    sectionCommandProviders: readonly SceneExplorerCommandProvider<string, "contextMenu">[];
    scene: Scene;
    selectedEntity?: unknown;
    setSelectedEntity?: (entity: unknown) => void;
}>;
export {};
