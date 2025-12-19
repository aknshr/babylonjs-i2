import type { FunctionComponent } from "react";
import type { Sprite } from "core/index";
import type { ISelectionService } from "../../../services/selectionService";
import type { ISettingsContext } from "../../../services/settingsContext";
export declare const SpriteGeneralProperties: FunctionComponent<{
    sprite: Sprite;
    selectionService: ISelectionService;
}>;
export declare const SpriteTransformProperties: FunctionComponent<{
    sprite: Sprite;
    settings: ISettingsContext;
}>;
export declare const SpriteAnimationProperties: FunctionComponent<{
    sprite: Sprite;
}>;
export declare const SpriteOtherProperties: FunctionComponent<{
    sprite: Sprite;
}>;
export declare const SpriteCellProperties: FunctionComponent<{
    sprite: Sprite;
}>;
