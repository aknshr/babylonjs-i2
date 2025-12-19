import type { FunctionComponent } from "react";
import type { ArcRotateCamera } from "core/index";
import type { ISettingsContext } from "../../../services/settingsContext";
export declare const ArcRotateCameraTransformProperties: FunctionComponent<{
    camera: ArcRotateCamera;
    settings: ISettingsContext;
}>;
export declare const ArcRotateCameraControlProperties: FunctionComponent<{
    camera: ArcRotateCamera;
}>;
export declare const ArcRotateCameraCollisionProperties: FunctionComponent<{
    camera: ArcRotateCamera;
}>;
export declare const ArcRotateCameraLimitsProperties: FunctionComponent<{
    camera: ArcRotateCamera;
}>;
export declare const ArcRotateCameraBehaviorsProperties: FunctionComponent<{
    camera: ArcRotateCamera;
}>;
