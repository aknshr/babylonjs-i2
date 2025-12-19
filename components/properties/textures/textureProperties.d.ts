import type { Texture } from "core/index";
import type { ISettingsContext } from "../../../services/settingsContext";
import type { FunctionComponent } from "react";
export declare const TexturePreviewProperties: FunctionComponent<{
    texture: Texture;
}>;
export declare const TextureGeneralProperties: FunctionComponent<{
    texture: Texture;
}>;
export declare const TextureTransformProperties: FunctionComponent<{
    texture: Texture;
    settings: ISettingsContext;
}>;
