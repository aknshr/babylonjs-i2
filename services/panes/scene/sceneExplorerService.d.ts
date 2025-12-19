import type { IDisposable } from "core/index";
import type { EntityBase, SceneExplorerCommandProvider, SceneExplorerSection } from "../../../components/scene/sceneExplorer";
import type { IService, ServiceDefinition } from "../../../modularity/serviceDefinition";
import type { ISceneContext } from "../../sceneContext";
import type { ISelectionService } from "../../selectionService";
import type { IShellService } from "../../shellService";
export declare const SceneExplorerServiceIdentity: unique symbol;
/**
 * Allows new sections or commands to be added to the scene explorer pane.
 */
export interface ISceneExplorerService extends IService<typeof SceneExplorerServiceIdentity> {
    /**
     * Adds a new section (e.g. "Nodes", "Materials", etc.) (this includes all descendants within the scene graph).
     * @param section A description of the section to add.
     */
    addSection<T extends EntityBase>(section: SceneExplorerSection<T>): IDisposable;
    /**
     * Adds a new command (e.g. "Delete", "Rename", etc.) that can be executed on entities in the scene explorer.
     * @param command A description of the command to add.
     */
    addEntityCommand<T extends EntityBase>(command: SceneExplorerCommandProvider<T>): IDisposable;
    /**
     * Adds a new command that can be executed on sections in the scene explorer.
     * @param command A description of the command to add.
     */
    addSectionCommand<T extends string>(command: SceneExplorerCommandProvider<T, "contextMenu">): IDisposable;
}
/**
 * Provides a scene explorer pane that enables browsing the scene graph and executing commands on entities.
 */
export declare const SceneExplorerServiceDefinition: ServiceDefinition<[ISceneExplorerService], [ISceneContext, IShellService, ISelectionService]>;
