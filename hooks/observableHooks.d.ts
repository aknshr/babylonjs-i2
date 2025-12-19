import type { IReadonlyObservable } from "core/index";
import type { ObservableCollection } from "../misc/observableCollection";
/**
 * Returns the current value of the accessor and updates it when the specified event is fired on the specified element.
 * @param accessor A function that returns the current value.
 * @param element The element to listen for the event on.
 * @param eventNames The names of the events to listen for.
 * @returns The current value of the accessor.
 *  * @remarks If the accessor function is not idempotent (e.g. it returns a different array or object instance each time it is called),
 * then there is a good chance it should be wrapped in a `useCallback` to prevent unnecessary re-renders or re-render infinite loops.
 */
export declare function useEventfulState<T>(accessor: () => T, element: HTMLElement | null | undefined, ...eventNames: string[]): T;
/**
 * Returns the current value of the accessor and updates it when any of the specified observables change.
 * @param accessor A function that returns the current value.
 * @param observables The observables to listen for changes on.
 * @returns The current value of the accessor.
 * @remarks If the accessor function is not idempotent (e.g. it returns a different array or object instance each time it is called),
 * then there is a good chance it should be wrapped in a `useCallback` to prevent unnecessary re-renders or re-render infinite loops.
 */
export declare function useObservableState<T>(accessor: () => T, ...observables: Array<IReadonlyObservable | null | undefined>): T;
/**
 * Returns a copy of the items in the collection and updates it when the collection changes.
 * @param collection The collection to observe.
 * @returns A copy of the items in the collection.
 */
export declare function useObservableCollection<T>(collection: ObservableCollection<T>): T[];
/**
 * Returns a copy of the items in the collection sorted by the order property and updates it when the collection changes.
 * @param collection The collection to observe.
 * @returns A copy of the items in the collection sorted by the order property.
 */
export declare function useOrderedObservableCollection<T extends Readonly<{
    order?: number;
}>>(collection: ObservableCollection<T>): T[];
