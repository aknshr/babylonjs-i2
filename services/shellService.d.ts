import type { ComponentType } from "react";
import type { IDisposable, Nullable } from "core/index";
import type { IService, ServiceDefinition } from "../modularity/serviceDefinition";
export type HorizontalLocation = "left" | "right";
export type VerticalLocation = "top" | "bottom";
/**
 * Describes an item that can be added to one of the shell's toolbars.
 */
export type ToolbarItemDefinition = {
    /**
     * A unique key for the toolbar item.
     */
    key: string;
    /**
     * The component to render for the toolbar item.
     */
    component: ComponentType;
    /**
     * An optional order for the toolbar item, relative to other items.
     * Defaults to 0.
     */
    order?: number;
    /**
     * The horizontal location of the toolbar item.
     * Can be either "left" or "right".
     * In "compact" toolbar mode, "left" and "right" mean the "compact" toolbars at the top/bottom of the left/right side panes.
     * In "full" toolbar mode, "left" and "right" mean the left side and right side of the full width toolbars above/below the side panes.
     */
    horizontalLocation: HorizontalLocation;
    /**
     * The vertical location of the toolbar item.
     * Can be either "top" or "bottom".
     */
    verticalLocation: VerticalLocation;
    /**
     * An optional display name for the toolbar item, used for teaching moments, tooltips, etc.
     */
    displayName?: string;
    /**
     * An optional flag to suppress the teaching moment for this toolbar item.
     * Defaults to false.
     * Teaching moments are more helpful for dynamically added items, possibly from extensions.
     */
    suppressTeachingMoment?: boolean;
};
/**
 * Describes a side pane that can be added to the shell's left or right side.
 */
export type SidePaneDefinition = {
    /**
     * A unique key for the side pane.
     */
    key: string;
    /**
     * An icon component to render for the pane tab.
     */
    icon: ComponentType;
    /**
     * The component to render for the side pane's content.
     */
    content: ComponentType;
    /**
     * An optional order for the side pane, relative to other panes.
     * Defaults to 0.
     */
    order?: number;
    /**
     * The horizontal location of the side pane.
     * Can be either "left" or "right".
     */
    horizontalLocation: HorizontalLocation;
    /**
     * The vertical location of the side pane.
     * Can be either "top" or "bottom".
     */
    verticalLocation: VerticalLocation;
    /**
     * The title of the side pane, displayed as a standardized header at the top of the pane.
     */
    title: string;
    /**
     * An optional flag to suppress the teaching moment for this side pane.
     * Defaults to false.
     * Teaching moments are more helpful for dynamically added panes, possibly from extensions.
     */
    suppressTeachingMoment?: boolean;
};
type RegisteredSidePane = {
    readonly key: string;
    select(): void;
};
type SidePaneContainer = {
    readonly isDocked: boolean;
    dock(): void;
    undock(): void;
};
/**
 * Describes content that can be added to the shell's central area (between the side panes and toolbars - e.g. the main content).
 */
export type CentralContentDefinition = {
    /**
     * A unique key for the central content.
     */
    key: string;
    /**
     * The component to render for the central content.
     */
    component: ComponentType;
    /**
     * An optional order for content, relative to other central content.
     * Defaults to 0.
     */
    order?: number;
};
export declare const RootComponentServiceIdentity: unique symbol;
/**
 * Exposes a top level component that should be rendered as the React root.
 */
export interface IRootComponentService extends IService<typeof RootComponentServiceIdentity> {
    /**
     * The root component that should be rendered as the React root.
     */
    readonly rootComponent: ComponentType;
}
export declare const ShellServiceIdentity: unique symbol;
/**
 * Provides a shell for the application, including toolbars, side panes, and central content.
 * This service allows adding toolbar items, side panes, and central content dynamically.
 */
export interface IShellService extends IService<typeof ShellServiceIdentity> {
    /**
     * Adds a new item to one of the shell's toolbars.
     * @param item Defines the item to add.
     */
    addToolbarItem(item: Readonly<ToolbarItemDefinition>): IDisposable;
    /**
     * Adds a new side pane to the shell.
     * @param pane Defines the side pane to add.
     */
    addSidePane(pane: Readonly<SidePaneDefinition>): IDisposable;
    /**
     * Adds new central content to the shell.
     * @param content Defines the content area to add.
     */
    addCentralContent(content: Readonly<CentralContentDefinition>): IDisposable;
    /**
     * Resets the side pane layout to the default configuration.
     */
    resetSidePaneLayout(): void;
    /**
     * The left side pane container.
     */
    readonly leftSidePaneContainer: Nullable<SidePaneContainer>;
    /**
     * The right side pane container.
     */
    readonly rightSidePaneContainer: Nullable<SidePaneContainer>;
    /**
     * The side panes currently present in the shell.
     */
    readonly sidePanes: readonly RegisteredSidePane[];
}
type ToolbarMode = "full" | "compact";
type LayoutMode = "inline" | "overlay";
/**
 * Options for configuring the shell service.
 */
export type ShellServiceOptions = {
    /**
     * The default width of the left side pane.
     */
    leftPaneDefaultWidth?: number;
    /**
     * The minimum width of the left side pane.
     */
    leftPaneMinWidth?: number;
    /**
     * The default width of the right side pane.
     */
    rightPaneDefaultWidth?: number;
    /**
     * The minimum width of the right side pane.
     */
    rightPaneMinWidth?: number;
    /**
     * The mode of the toolbars.
     * Can be either "full" (default) or "compact".
     * In "full" mode, toolbars are displayed above and below the side panes.
     * In "compact" mode, toolbars are displayed at the top and bottom of the left and right side panes.
     */
    toolbarMode?: ToolbarMode;
    /**
     * A function that can remap the default location of side panes.
     * @param sidePane The side pane to remap.
     * @returns The new location for the side pane.
     */
    sidePaneRemapper?: (sidePane: Readonly<SidePaneDefinition>) => Nullable<{
        horizontalLocation: HorizontalLocation;
        verticalLocation: VerticalLocation;
    }>;
    /**
     * Determines whether the side panes and toolbars are displayed inline with the central content, or overlayed on top of it.
     */
    layoutMode?: LayoutMode;
};
export declare function MakeShellServiceDefinition({ leftPaneDefaultWidth, leftPaneMinWidth, rightPaneDefaultWidth, rightPaneMinWidth, toolbarMode, sidePaneRemapper, layoutMode, }?: ShellServiceOptions): ServiceDefinition<[IShellService, IRootComponentService], []>;
export {};
