import type { StandardMaterial } from "core/Materials/standardMaterial";
import type { Color3 } from "core/Maths/math.color";
import type { AbstractMesh } from "core/Meshes/abstractMesh";
import type { Attractor } from "core/Particles/attractor";
import type { Scene } from "core/scene";
import type { FunctionComponent } from "react";
type AttractorProps = {
    attractor: Attractor;
    id: number;
    impostorScale: number;
    impostorColor: Color3;
    impostorMaterial: StandardMaterial;
    scene: Scene;
    isControlled: (impostor: AbstractMesh) => boolean;
    onControl: (impostor?: AbstractMesh) => void;
};
/**
 * Represents the UX of an attractor, a sphere with a color/size whose position matches that of the underlying attractor
 * @param props
 * @returns
 */
export declare const AttractorComponent: FunctionComponent<AttractorProps>;
export {};
