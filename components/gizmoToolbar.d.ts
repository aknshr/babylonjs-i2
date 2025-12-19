import type { FunctionComponent } from "react";
import type { Scene } from "core/index";
import type { IGizmoService } from "../services/gizmoService";
export declare const GizmoToolbar: FunctionComponent<{
    scene: Scene;
    entity: unknown;
    gizmoService: IGizmoService;
}>;
