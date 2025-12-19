import type { IDisposable, Scene } from "core/scene";
import type { IService, ServiceDefinition } from "../../modularity/serviceDefinition";
import type { IShellService } from "../shellService";
import type { DynamicAccordionSection, DynamicAccordionSectionContent } from "../../components/extensibleAccordion";
import type { ISceneContext } from "../sceneContext";
export declare const ToolsServiceIdentity: unique symbol;
/**
 * A service that provides tools for the user to generate artifacts or perform actions on entities.
 */
export interface IToolsService extends IService<typeof ToolsServiceIdentity> {
    /**
     * Adds a new section (e.g. "Export", "Capture", etc.).
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
 * A collection of usually optional, dynamic extensions.
 * Common examples includes importing/exporting, or other general creation tools.
 */
export declare const ToolsServiceDefinition: ServiceDefinition<[IToolsService], [IShellService, ISceneContext]>;
