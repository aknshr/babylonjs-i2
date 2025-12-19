import type { FunctionComponent } from "react";
export type MaterialWithNormalMaps = {
    invertNormalMapX: boolean;
    invertNormalMapY: boolean;
};
/**
 * Displays the normal map properties of a standard material.
 * @param props - The required properties
 * @returns A JSX element representing the normal map properties.
 */
export declare const NormalMapProperties: FunctionComponent<{
    material: MaterialWithNormalMaps;
}>;
