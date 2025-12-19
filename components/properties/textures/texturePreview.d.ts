import type { BaseTexture } from "core/Materials/Textures/baseTexture";
import type { FunctionComponent } from "react";
type TexturePreviewProps = {
    texture: BaseTexture;
    width: number;
    height: number;
};
export declare const TexturePreview: FunctionComponent<TexturePreviewProps>;
export {};
