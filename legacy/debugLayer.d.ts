import type { IInspectorOptions } from "core/index";
import { DebugLayer } from "core/Debug/debugLayer";
declare class DebugLayerEx extends DebugLayer {
    show(config?: IInspectorOptions): Promise<DebugLayer>;
}
declare const DebugLayerExKey: unique symbol;
declare module "core/scene" {
    interface Scene {
        /**
         * @internal
         * Backing field
         */
        [DebugLayerExKey]?: DebugLayerEx;
    }
}
/**
 * Attaches Inspector v2 to Scene.debugLayer.
 */
export declare function AttachDebugLayer(): void;
/**
 * Detaches Inspector v2 from Scene.debugLayer.
 */
export declare function DetachDebugLayer(): void;
export {};
