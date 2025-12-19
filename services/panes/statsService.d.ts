import type { IDisposable, Scene } from "core/index";
import type { DynamicAccordionSection, DynamicAccordionSectionContent } from "../../components/extensibleAccordion";
import type { IService, ServiceDefinition } from "../../modularity/serviceDefinition";
import type { ISceneContext } from "../sceneContext";
import type { IShellService } from "../shellService";
export declare const StatsServiceIdentity: unique symbol;
/**
 * Allows new sections or content to be added to the stats pane.
 */
export interface IStatsService extends IService<typeof StatsServiceIdentity> {
    /**
     * Adds a new section (e.g. "Count", "Frame Steps Duration", etc.).
     * @param section A description of the section to add.
     */
    addSection(section: DynamicAccordionSection): IDisposable;
    /**
     * Adds content to one or more sections.
     * @param content A description of the content to add.
     */
    addSectionContent(content: DynamicAccordionSectionContent<Scene>): IDisposable;
}
/**
 * Provides a scene stats pane.
 */
export declare const StatsServiceDefinition: ServiceDefinition<[IStatsService], [IShellService, ISceneContext]>;
