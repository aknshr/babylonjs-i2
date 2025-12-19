import type { TernaryDarkMode } from "usehooks-ts";
import type { IDisposable } from "core/index";
import type { IExtensionFeed } from "./extensibility/extensionFeed";
import type { WeaklyTypedServiceDefinition } from "./modularity/serviceContainer";
import type { ShellServiceOptions } from "./services/shellService";
export type ModularToolOptions = {
    /**
     * The container element where the tool will be rendered.
     */
    containerElement: HTMLElement;
    /**
     * The service definitions to be registered with the tool.
     */
    serviceDefinitions: readonly WeaklyTypedServiceDefinition[];
    /**
     * The theme mode to use. If not specified, the default is "system", which uses the system/browser preference, and the last used mode is persisted.
     */
    themeMode?: TernaryDarkMode;
    /**
     * Whether to show the theme selector in the toolbar. Default is true.
     */
    showThemeSelector?: boolean;
    /**
     * The extension feeds that provide optional extensions the user can install.
     */
    extensionFeeds?: readonly IExtensionFeed[];
} & ShellServiceOptions;
/**
 * Creates a modular tool with a base set of common tool services, including the toolbar/side pane basic UI layout.
 * @param options The options for the tool.
 * @returns A token that can be used to dispose of the tool.
 */
export declare function MakeModularTool(options: ModularToolOptions): IDisposable;
