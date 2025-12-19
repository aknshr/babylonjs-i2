import type { FunctionComponent } from "react";
import type { ISettingsContext } from "../../../services/settingsContext";
import { Camera } from "core/Cameras/camera";
/**
 * The general properties component for a camera.
 * @param props - The component props containing the camera and settings context.
 * @returns JSX.Element
 */
export declare const CameraGeneralProperties: FunctionComponent<{
    camera: Camera;
    settings: ISettingsContext;
}>;
