import type { Observable } from "core/index";
export type PropertyChangeInfo = {
    readonly entity: unknown;
    readonly propertyKey: PropertyKey;
    readonly oldValue: unknown;
    readonly newValue: unknown;
};
export type PropertyContext = {
    readonly onPropertyChanged: Observable<PropertyChangeInfo>;
};
export declare const PropertyContext: import("react").Context<PropertyContext | undefined>;
export declare function usePropertyChangedNotifier(): <ObjectT, PropertyT extends keyof ObjectT>(entity: ObjectT, propertyKey: PropertyT, oldValue: ObjectT[PropertyT], newValue: ObjectT[PropertyT]) => void;
