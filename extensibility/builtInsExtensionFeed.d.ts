import type { IExtensionFeed, ExtensionMetadata, IExtensionMetadataQuery, ExtensionModule } from "./extensionFeed";
export type BuiltInExtension = ExtensionMetadata & {
    /**
     * Gets the extension module, typically dynamically importing the extension.
     * @returns The extension module (e.g. a collection of ServiceDefinitions).
     */
    getExtensionModuleAsync(): Promise<ExtensionModule>;
};
/**
 * A simple extension feed implementation that provides a fixed set of "built in" extensions.
 * "Built in" in this context means extensions that are known at bundling time, and included
 * in the bundle. Each extension can be dynamically imported so they are split into separate
 * bundle chunks and downloaded only when first installed.
 */
export declare class BuiltInsExtensionFeed implements IExtensionFeed {
    readonly name: string;
    private readonly _extensions;
    constructor(name: string, extensions: Iterable<BuiltInExtension>);
    queryExtensionsAsync(filter?: string): Promise<IExtensionMetadataQuery>;
    getExtensionModuleAsync(name: string): Promise<ExtensionModule | undefined>;
}
