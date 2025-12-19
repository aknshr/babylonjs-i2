import type { FunctionComponent } from "react";
import type { ParticleSystem } from "core/Particles/particleSystem";
import type { Scene } from "core/scene";
import { Attractor } from "core/Particles/attractor";
type AttractorListProps = {
    scene: Scene;
    attractors: Array<Attractor>;
    system: ParticleSystem;
};
export declare const AttractorList: FunctionComponent<AttractorListProps>;
export {};
