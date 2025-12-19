import type { Camera, IDisposable, Light, Scene } from "core/index";
import type { IService, ServiceDefinition } from "../modularity/serviceDefinition";
import { CameraGizmo } from "core/Gizmos/cameraGizmo";
import { LightGizmo } from "core/Gizmos/lightGizmo";
import { UtilityLayerRenderer } from "core/Rendering/utilityLayerRenderer";
type Reference<T> = {
    value: T;
} & IDisposable;
export declare const GizmoServiceIdentity: unique symbol;
export interface IGizmoService extends IService<typeof GizmoServiceIdentity> {
    getUtilityLayer(scene: Scene, layer?: string): Reference<UtilityLayerRenderer>;
    getCameraGizmo(camera: Camera): Reference<CameraGizmo>;
    getLightGizmo(light: Light): Reference<LightGizmo>;
    getCameraGizmos(scene: Scene): readonly CameraGizmo[];
    getLightGizmos(scene: Scene): readonly LightGizmo[];
}
export declare const GizmoServiceDefinition: ServiceDefinition<[IGizmoService], []>;
export {};
