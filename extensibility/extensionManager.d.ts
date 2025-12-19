import type { IDisposable } from "core/index";
import type { ServiceContainer } from "../modularity/serviceContainer";
import type { IExtensionFeed, ExtensionMetadata } from "./extensionFeed";
/**
 * Represents a loaded extension.
 */
export interface IExtension {
    /**
     * The metadata for the extension.
     */
    readonly metadata: ExtensionMetadata;
    /**
     * Whether the extension is currently being installed, uninstalled, enabled, or disabled.
     */
    readonly isStateChanging: boolean;
    /**
     * Whether the extension is enabled.
     */
    readonly isInstalled: boolean;
    /**
     * Installs the extension.
     */
    installAsync(): Promise<void>;
    /**
     * Uninstalls the extension.
     */
    uninstallAsync(): Promise<void>;
    /**
     * Adds a handler that is called when the state of the extension changes.
     * @param handler The handler to add.
     * @returns A disposable that removes the handler when disposed.
     */
    addStateChangedHandler(handler: () => void): IDisposable;
}
/**
 * Provides information about an extension installation failure.
 */
export type InstallFailedInfo = {
    /**
     * The metadata of the extension that failed to install.
     */
    extension: ExtensionMetadata;
    /**
     * The error that occurred during the installation.
     */
    error: unknown;
};
/**
 * Represents a query for loaded extensions.
 */
export interface IExtensionQuery {
    /**
     * The total number of extensions that satisfy the query.
     */
    readonly totalCount: number;
    /**
     * Fetches a range of extensions from the query.
     * @param index The index of the first extension to fetch.
     * @param count The number of extensions to fetch.
     * @returns A promise that resolves to the extensions.
     */
    getExtensionsAsync(index: number, count: number): Promise<IExtension[]>;
}
/**
 * Manages the installation, uninstallation, enabling, and disabling of extensions.
 */
export declare class ExtensionManager implements IDisposable {
    private readonly _serviceContainer;
    private readonly _feeds;
    private readonly _onInstallFailed;
    private readonly _installedExtensions;
    private readonly _stateChangedHandlers;
    private constructor();
    /**
     * Creates a new instance of the ExtensionManager.
     * This will automatically rehydrate previously installed and enabled extensions.
     * @param serviceContainer The service container to use.
     * @param feeds The extension feeds to include.
     * @param onInstallFailed A callback that is called when an extension installation fails.
     * @returns A promise that resolves to the new instance of the ExtensionManager.
     */
    static CreateAsync(serviceContainer: ServiceContainer, feeds: readonly IExtensionFeed[], onInstallFailed: (info: InstallFailedInfo) => void): Promise<ExtensionManager>;
    /**
     * Gets the names of the feeds that are included in the extension manager.
     * @returns The names of the feeds.
     */
    get feedNames(): string[];
    /**
     * Queries the extension manager for extensions.
     * @param filter The filter to apply to the query.
     * @param feeds The feeds to include in the query.
     * @param installedOnly Whether to only include installed extensions.
     * @returns A promise that resolves to the extension query.
     */
    queryExtensionsAsync(filter?: string, feeds?: string[], installedOnly?: boolean): Promise<IExtensionQuery>;
    /**
     * Disposes the extension manager.
     */
    dispose(): void;
    private _installAsync;
    private _uninstallAsync;
    private _enableAsync;
    private _disableAsync;
    private _addStateChangedHandler;
    private _createExtension;
    private _createInstalledExtension;
}
