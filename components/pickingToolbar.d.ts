import type { FunctionComponent } from "react";
import type { Scene } from "core/index";
import type { IGizmoService } from "../services/gizmoService";
export declare const PickingToolbar: FunctionComponent<{
    scene: Scene;
    selectEntity: (entity: unknown) => void;
    gizmoService: IGizmoService;
    ignoreBackfaces?: boolean;
}>;
