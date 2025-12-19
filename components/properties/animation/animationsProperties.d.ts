import type { FunctionComponent } from "react";
import type { AnimationRange } from "core/Animations/animationRange";
import type { Nullable } from "core/types";
import type { IAnimatable } from "core/Animations/animatable.interface";
import type { Scene } from "core/scene";
import { AnimationPropertiesOverride } from "core/Animations/animationPropertiesOverride";
export interface IAnimationRangeContainer {
    getAnimationRanges(): Nullable<AnimationRange>[];
}
export interface IAnimatableContainer {
    getAnimatables(): IAnimatable[];
}
declare module "core/Animations/animatable" {
    interface Animatable {
        animationPropertiesOverride?: AnimationPropertiesOverride;
    }
}
export declare const AnimationsProperties: FunctionComponent<{
    scene: Scene;
    entity: Partial<IAnimatable & IAnimationRangeContainer & IAnimatableContainer>;
}>;
