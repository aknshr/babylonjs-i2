import type { IDisposable } from "core/index";
/**
 * Custom hook to manage a resource with automatic disposal. The resource is created once initially, and recreated
 * if the factory function changes. Whenever the resource is recreated, the previous instance is disposed. The final
 * instance is disposed when the component using this hook unmounts.
 * @param factory A function that creates the resource.
 * @returns The created resource.
 */
export declare function useResource<T extends IDisposable>(factory: () => T): T;
/**
 * Custom hook to manage an asynchronous resource with automatic disposal. The resource is created once initially, and recreated
 * if the factory function changes. Whenever the resource is recreated, the previous instance is disposed. The final
 * instance is disposed when the component using this hook unmounts.
 * @param factory A function that creates the resource.
 * @returns The created resource.
 */
export declare function useAsyncResource<T extends IDisposable>(factory: (abortSignal: AbortSignal) => Promise<T>): T | undefined;
