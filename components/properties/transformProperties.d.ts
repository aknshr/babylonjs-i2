import type { FunctionComponent } from "react";
import type { Nullable, Quaternion, Vector3 } from "core/index";
import type { ISettingsContext } from "../../services/settingsContext";
export type Transform = {
    position: Vector3;
    rotation: Vector3;
    rotationQuaternion: Nullable<Quaternion>;
    scaling: Vector3;
};
export declare const TransformProperties: FunctionComponent<{
    transform: Transform;
    settings: ISettingsContext;
}>;
