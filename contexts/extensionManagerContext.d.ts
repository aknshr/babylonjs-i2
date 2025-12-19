import type { ExtensionManager } from "../extensibility/extensionManager";
export type ExtensionManagerContext = {
    readonly extensionManager: ExtensionManager;
};
export declare const ExtensionManagerContext: import("react").Context<ExtensionManagerContext | undefined>;
export declare function useExtensionManager(): ExtensionManager | undefined;
