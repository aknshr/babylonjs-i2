import type { FunctionComponent } from "react";
import type { PBRBaseMaterial } from "core/Materials/PBR/pbrBaseMaterial";
declare module "core/Materials/PBR/pbrSheenConfiguration" {
    interface PBRSheenConfiguration {
        _useRoughness: boolean;
    }
}
export declare const PBRBaseMaterialClearCoatProperties: FunctionComponent<{
    material: PBRBaseMaterial;
}>;
export declare const PBRBaseMaterialIridescenceProperties: FunctionComponent<{
    material: PBRBaseMaterial;
}>;
export declare const PBRBaseMaterialAnisotropicProperties: FunctionComponent<{
    material: PBRBaseMaterial;
}>;
export declare const PBRBaseMaterialSheenProperties: FunctionComponent<{
    material: PBRBaseMaterial;
}>;
