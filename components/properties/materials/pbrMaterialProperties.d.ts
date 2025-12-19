import type { FunctionComponent } from "react";
import type { PBRMaterial } from "core/Materials/PBR/pbrMaterial";
/**
 * Displays the lighting and color properties of a PBR material.
 * @param props - The required properties
 * @returns A JSX element representing the lighting and color properties.
 */
export declare const PBRMaterialLightingAndColorProperties: FunctionComponent<{
    material: PBRMaterial;
}>;
