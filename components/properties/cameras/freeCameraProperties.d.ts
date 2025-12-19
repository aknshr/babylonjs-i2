import type { FunctionComponent } from "react";
import type { FreeCamera } from "core/index";
import type { ISettingsContext } from "../../../services/settingsContext";
export declare const FreeCameraTransformProperties: FunctionComponent<{
    camera: FreeCamera;
    settings: ISettingsContext;
}>;
export declare const FreeCameraControlProperties: FunctionComponent<{
    camera: FreeCamera;
}>;
export declare const FreeCameraCollisionProperties: FunctionComponent<{
    camera: FreeCamera;
}>;
