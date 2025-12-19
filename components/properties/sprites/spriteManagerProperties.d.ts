import type { FunctionComponent } from "react";
import type { SpriteManager } from "core/Sprites/spriteManager";
import type { ISelectionService } from "../../../services/selectionService";
export declare const SpriteManagerGeneralProperties: FunctionComponent<{
    spriteManager: SpriteManager;
    selectionService: ISelectionService;
}>;
export declare const SpriteManagerOtherProperties: FunctionComponent<{
    spriteManager: SpriteManager;
}>;
export declare const SpriteManagerCellProperties: FunctionComponent<{
    spriteManager: SpriteManager;
}>;
