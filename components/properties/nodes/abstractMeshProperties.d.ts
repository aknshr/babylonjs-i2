import type { FunctionComponent } from "react";
import type { AbstractMesh } from "core/index";
import type { ISelectionService } from "../../../services/selectionService";
import "core/Rendering/edgesRenderer";
import "core/Rendering/outlineRenderer";
export declare const AbstractMeshGeneralProperties: FunctionComponent<{
    mesh: AbstractMesh;
    selectionService: ISelectionService;
}>;
export declare const AbstractMeshDisplayProperties: FunctionComponent<{
    mesh: AbstractMesh;
}>;
export declare const AbstractMeshAdvancedProperties: FunctionComponent<{
    mesh: AbstractMesh;
}>;
export declare const AbstractMeshOutlineOverlayProperties: FunctionComponent<{
    mesh: AbstractMesh;
}>;
export declare const AbstractMeshOcclusionsProperties: FunctionComponent<{
    mesh: AbstractMesh;
}>;
export declare const AbstractMeshEdgeRenderingProperties: FunctionComponent<{
    mesh: AbstractMesh;
}>;
export declare const AbstractMeshDebugProperties: FunctionComponent<{
    mesh: AbstractMesh;
}>;
