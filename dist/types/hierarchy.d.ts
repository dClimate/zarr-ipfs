import type { CID } from 'multiformats/cid';
import { AsyncMutableMapping, AsyncMutableMappingProxy } from './mutableMapping';
import { Store } from './storage/types';
import { UserAttributes, PersistenceMode } from './types';
import { Attributes } from './attributes';
import { CreateArrayOptions } from './creation';
import { NestedArray } from './nestedArray';
import { TypedArray } from './nestedArray/types';
import { ZarrArray } from './core';
export declare class Group<StoreGetOptions = any> implements AsyncMutableMapping<Group<StoreGetOptions> | ZarrArray<StoreGetOptions>> {
    /**
     * A `Store` providing the underlying storage for the group.
     */
    store: Store<StoreGetOptions>;
    /**
     * Storage path.
     */
    path: string;
    /**
     * Group name following h5py convention.
     */
    get name(): string;
    /**
     * Final component of name.
     */
    get basename(): string;
    /**
     * An object containing user-defined attributes. Note that
     * attribute values are stored as a JSON string in a store.
     */
    attrs: Attributes<UserAttributes>;
    private _chunkStore;
    /**
     * A `Store` providing the underlying storage for array chunks.
     */
    get chunkStore(): Store<StoreGetOptions>;
    private keyPrefix;
    readOnly: boolean;
    private meta;
    static create<StoreGetOptions>(store: Store<StoreGetOptions>, path?: string | null, readOnly?: boolean, chunkStore?: Store<StoreGetOptions> | null, cacheAttrs?: boolean): Promise<Group<StoreGetOptions>>;
    private static loadMetadataForConstructor;
    private constructor();
    private itemPath;
    /**
     * Create a sub-group.
     */
    createGroup(name: string, overwrite?: boolean): Promise<Group<StoreGetOptions>>;
    /**
     * Obtain a sub-group, creating one if it doesn't exist.
     */
    requireGroup(name: string, overwrite?: boolean): Promise<Group<StoreGetOptions>>;
    private getOptsForArrayCreation;
    /**
     * Creates an array
     */
    array(name: string, data: Buffer | ArrayBuffer | NestedArray<TypedArray>, opts?: Omit<CreateArrayOptions, 'shape'>, overwrite?: boolean): Promise<ZarrArray<any>>;
    empty(name: string, shape: number | number[], opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
    zeros(name: string, shape: number | number[], opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
    ones(name: string, shape: number | number[], opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
    full(name: string, shape: number | number[], fillValue: number | null, opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
    createDataset(name: string, shape?: number | number[], data?: Buffer | ArrayBuffer | NestedArray<TypedArray>, opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<StoreGetOptions>>;
    getItem(item: string): Promise<Group<StoreGetOptions> | ZarrArray<StoreGetOptions>>;
    setItem(item: string, value: any): Promise<boolean>;
    deleteItem(_item: string): Promise<boolean>;
    containsItem(item: string): Promise<boolean>;
    proxy(): AsyncMutableMappingProxy<Group<StoreGetOptions>>;
}
/**
 * Create a group.
 * @param store Store or path to directory in file system.
 * @param path Group path within store.
 * @param chunkStore Separate storage for chunks. If not provided, `store` will be used for storage of both chunks and metadata.
 * @param overwrite If `true`, delete any pre-existing data in `store` at `path` before creating the group.
 * @param cacheAttrs If `true` (default), user attributes will be cached for attribute read operations.
 *   If `false`, user attributes are reloaded from the store prior to all attribute read operations.
 */
export declare function group<StoreGetOptions>(store?: Store<StoreGetOptions> | string, path?: string | null, chunkStore?: Store<StoreGetOptions>, overwrite?: boolean, cacheAttrs?: boolean): Promise<Group<StoreGetOptions>>;
/**
 * Open a group using file-mode-like semantics.
 * @param store Store or path to directory in file system or name of zip file.
 * @param path Group path within store.
 * @param mode Persistence mode, see `PersistenceMode` type.
 * @param chunkStore Store or path to directory in file system or name of zip file.
 * @param cacheAttrs If `true` (default), user attributes will be cached for attribute read operations
 *   If False, user attributes are reloaded from the store prior to all attribute read operations.
 * @param ipfsElements IPFS elements which will be used to fetch and store data on the IPFS network
 * @param cid IPFS CID (content identifier) of the zarr file (if it is stored on the IPFS network)
 */
export declare function openGroup(store?: Store | string, path?: string | null, mode?: PersistenceMode, chunkStore?: Store, cacheAttrs?: boolean, ipfsElements?: any, cid?: CID): Promise<Group<any>>;
