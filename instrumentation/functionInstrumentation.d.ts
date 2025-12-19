import type { IDisposable } from "core/index";
export type FunctionHooks = {
    /**
     * This function will be called after the hooked function is called.
     */
    afterCall?: () => void;
};
/**
 * Intercepts a function on an object and allows you to add hooks that will be called during function execution.
 * @param target The object containing the function to intercept.
 * @param propertyKey The key of the property that is a function (this is the function that will be intercepted).
 * @param hooks The hooks to call during the function execution.
 * @returns A disposable that removes the hooks when disposed and returns the object to its original state.
 */
export declare function InterceptFunction<T extends object>(target: T, propertyKey: keyof T, hooks: FunctionHooks): IDisposable;
