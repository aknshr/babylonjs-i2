import type { IDisposable, Nullable } from "core/index";
/**
 * Gets the property descriptor for a property on an object, including inherited properties.
 * @param target The object containing the property.
 * @param propertyKey The key of the property to get the descriptor for.
 * @returns The owner of the property (which may be different from the target in the case of inheritance) along with the property descriptor, or null if the property is not found.
 */
export declare function GetPropertyDescriptor<T extends object>(target: T, propertyKey: keyof T): Nullable<[owner: object, descriptor: PropertyDescriptor]>;
/**
 * Checks if a property is readonly.
 * @param propertyDescriptor The property descriptor to check.
 * @returns True if the property is readonly, false otherwise.
 */
export declare function IsPropertyReadonly(propertyDescriptor: PropertyDescriptor): boolean;
export type PropertyHooks = {
    /**
     * This function will be called after the hooked property is set.
     */
    afterSet?: () => void;
};
/**
 * Intercepts a property on an object and allows you to add hooks that will be called when the property is get or set.
 * @param target The object containing the property to intercept.
 * @param propertyKey The key of the property to intercept.
 * @param hooks The hooks to call when the property is get or set.
 * @returns A disposable that removes the hooks when disposed and returns the object to its original state.
 */
export declare function InterceptProperty<T extends object>(target: T, propertyKey: keyof T, hooks: PropertyHooks): IDisposable;
