import type { IDisposable, Scene } from "core/index";
import type { DynamicAccordionSection, DynamicAccordionSectionContent } from "../../components/extensibleAccordion";
import type { IService, ServiceDefinition } from "../../modularity/serviceDefinition";
import type { ISceneContext } from "../sceneContext";
import type { ISettingsContext } from "../settingsContext";
import type { IShellService } from "../shellService";
export declare const SettingsServiceIdentity: unique symbol;
/**
 * Allows new sections or content to be added to the Settings pane.
 */
export interface ISettingsService extends IService<typeof SettingsServiceIdentity> {
    /**
     * Adds a new section.
     * @param section A description of the section to add.
     */
    addSection(section: DynamicAccordionSection): IDisposable;
    /**
     * Adds content to one or more sections.
     * @param content A description of the content to add.
     */
    addSectionContent(content: DynamicAccordionSectionContent<Scene>): IDisposable;
}
export declare const SettingsServiceDefinition: ServiceDefinition<[ISettingsContext, ISettingsService], [IShellService, ISceneContext]>;
