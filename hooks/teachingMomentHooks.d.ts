import type { Nullable } from "core/index";
import type { OnOpenChangeData, PositioningImperativeRef } from "@fluentui/react-components";
/**
 * Creates a hook for managing teaching moment state.
 * @param name The unique name of the teaching moment.
 * @returns A hook that returns the teaching moment state.
 */
export declare function MakeTeachingMoment(name: string): (suppress?: boolean) => {
    readonly shouldDisplay: boolean;
    readonly onDismissed: () => void;
    readonly reset: () => void;
};
/**
 * Creates a hook for managing teaching moment state for a dialog.
 * @param name The unique name of the teaching moment.
 * @returns A hook that returns the teaching moment state for a dialog.
 */
export declare function MakeDialogTeachingMoment(name: string): (suppress?: boolean) => {
    readonly shouldDisplay: boolean;
    readonly onOpenChange: (e: unknown, data: OnOpenChangeData) => void;
    readonly reset: () => void;
};
/**
 * Creates a hook for managing teaching moment state for a popover.
 * @param name The unique name of the teaching moment.
 * @returns A hook that returns the teaching moment state for a popover.
 */
export declare function MakePopoverTeachingMoment(name: string): (suppress?: boolean) => {
    readonly shouldDisplay: boolean;
    readonly positioningRef: import("react").Dispatch<import("react").SetStateAction<Nullable<PositioningImperativeRef>>>;
    readonly targetRef: import("react").Dispatch<import("react").SetStateAction<Nullable<HTMLElement>>>;
    readonly onOpenChange: (e: unknown, data: OnOpenChangeData) => void;
    readonly reset: () => void;
};
