import type { ISettingsContext } from "../services/settingsContext";
import type { HorizontalLocation, VerticalLocation } from "../services/shellService";
/**
 * Gets the compact mode setting.
 * @returns A tuple containing the current compact mode value, a function to update it, and a function to reset it.
 */
export declare function useCompactMode(): readonly [boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>, () => void];
/**
 * Gets the side pane dock overrides configuration.
 * @returns A record mapping side pane IDs to their dock locations.
 */
export declare function useSidePaneDockOverrides(): readonly [Record<string, Readonly<{
    horizontalLocation: HorizontalLocation;
    verticalLocation: VerticalLocation;
}> | undefined>, import("react").Dispatch<import("react").SetStateAction<Record<string, Readonly<{
    horizontalLocation: HorizontalLocation;
    verticalLocation: VerticalLocation;
}> | undefined>>>, () => void];
/**
 * Gets functions used to convert to/from display values for angles based on the current settings.
 * @param settings The settings context to use for determining if angles should be displayed in degrees or radians.
 * @returns A tuple containing the functions to convert to and from display values.
 */
export declare function useAngleConverters(settings: ISettingsContext): readonly [(angle: number, wrap?: boolean) => number, (angle: number, wrap?: boolean) => number, boolean];
