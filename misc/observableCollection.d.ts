import type { IDisposable, IReadonlyObservable } from "core/index";
/**
 * A collection of items that can be observed for changes.
 */
export declare class ObservableCollection<T> {
    private readonly _items;
    private readonly _keys;
    private readonly _observable;
    /**
     * An observable that notifies observers when the collection changes.
     */
    get observable(): IReadonlyObservable<void>;
    /**
     * The items in the collection.
     */
    get items(): readonly T[];
    /**
     * Adds an item to the collection.
     * @param item The item to add.
     * @returns A disposable that removes the item from the collection when disposed.
     */
    add(item: T): IDisposable;
}
