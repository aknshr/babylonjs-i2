import type { FunctionComponent } from "react";
import type { StandardMaterial } from "core/Materials/standardMaterial";
/**
 * Displays the levels properties of a standard material.
 * @param props - The required properties
 * @returns A JSX element representing the levels properties.
 */
export declare const StandardMaterialLevelsProperties: FunctionComponent<{
    standardMaterial: StandardMaterial;
}>;
/**
 * Displays the lighting and color properties of a standard material.
 * @param props - The required properties
 * @returns A JSX element representing the lighting and color properties.
 */
export declare const StandardMaterialLightingAndColorProperties: FunctionComponent<{
    standardMaterial: StandardMaterial;
}>;
/**
 * Displays the texture properties of a standard material.
 * @param props - The required properties
 * @returns A JSX element representing the texture properties.
 */
export declare const StandardMaterialTexturesProperties: FunctionComponent<{
    standardMaterial: StandardMaterial;
}>;
