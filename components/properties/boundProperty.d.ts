import type { ComponentProps, ComponentType } from "react";
/**
 * Helper type to check if a type includes null or undefined
 */
type IsNullable<T> = null extends T ? true : undefined extends T ? true : false;
/**
 * Base props for BoundProperty
 */
type BaseBoundPropertyProps<TargetT extends object, PropertyKeyT extends keyof TargetT, ComponentT extends ComponentType<any>> = Omit<ComponentProps<ComponentT>, "value" | "onChange" | "nullable" | "defaultValue" | "ignoreNullable"> & {
    component: ComponentT;
    target: TargetT | null | undefined;
    propertyKey: PropertyKeyT;
    convertTo?: (value: TargetT[PropertyKeyT]) => TargetT[PropertyKeyT];
    convertFrom?: (value: TargetT[PropertyKeyT]) => TargetT[PropertyKeyT];
};
/**
 * Enhanced BoundProperty props that enforces strict nullable handling
 */
export type BoundPropertyProps<TargetT extends object, PropertyKeyT extends keyof TargetT, ComponentT extends ComponentType<any>> = BaseBoundPropertyProps<TargetT, PropertyKeyT, ComponentT> & (IsNullable<TargetT[PropertyKeyT]> extends true ? ComponentProps<ComponentT> extends {
    nullable?: boolean;
} ? {
    nullable: true;
    defaultValue: NonNullable<TargetT[PropertyKeyT]>;
} | {
    ignoreNullable: true;
    defaultValue: NonNullable<TargetT[PropertyKeyT]>;
} : never : {});
declare function BoundPropertyImpl<TargetT extends object, PropertyKeyT extends keyof TargetT, ComponentT extends ComponentType<any>>(props: BoundPropertyProps<TargetT, PropertyKeyT, ComponentT>, ref?: any): import("react/jsx-runtime").JSX.Element | null;
/**
 * Intercepts the passed in component's target[propertyKey] with useInterceptObservable and sets component state using useObservableState.
 * Renders the passed in component with value as the new observableState value and onChange as a callback to set the target[propertyKey] value.
 *
 * NOTE: BoundProperty has strict nullable enforcement!
 *
 * If Target[PropertyKey] is Nullable, caller can only bind to a component that explicitly handles nullable (and caller must send nullable/defaultValue props)
 *
 * @param props BoundPropertyProps with strict nullable validation
 * @returns JSX element
 */
export declare const BoundProperty: typeof BoundPropertyImpl;
export {};
