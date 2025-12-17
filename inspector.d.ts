import type { IDisposable, Scene } from "core/scene";
import type { ModularToolOptions } from "./modularTool";
export type InspectorOptions = Omit<ModularToolOptions, "toolbarMode"> & {
    autoResizeEngine?: boolean;
};
export declare function ShowInspector(scene: Scene, options?: Partial<InspectorOptions>): IDisposable;
