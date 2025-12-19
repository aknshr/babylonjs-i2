import type { FunctionComponent } from "react";
import type { MakePopoverTeachingMoment } from "../hooks/teachingMomentHooks";
type TeachingMomentState = ReturnType<ReturnType<typeof MakePopoverTeachingMoment>>;
type TeachingMomentProps = Pick<TeachingMomentState, "shouldDisplay" | "positioningRef" | "onOpenChange"> & {
    title: string;
    description: string;
};
/**
 * A component that displays a teaching moment popover.
 * @param props Props for the teaching moment popover.
 * @returns The teaching moment popover.
 */
export declare const TeachingMoment: FunctionComponent<TeachingMomentProps>;
export {};
