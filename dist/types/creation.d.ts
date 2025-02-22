import { ChunksArgument, DtypeString, CompressorConfig, Order, Filter, FillType } from './types';
import { Store } from './storage/types';
import { ZarrArray } from './core/index';
import { TypedArray } from './nestedArray/types';
import { NestedArray } from './nestedArray/index';
import type { CID } from 'multiformats/cid';
export type CreateArrayOptions = {
    shape: number | number[];
    chunks?: ChunksArgument;
    dtype?: DtypeString;
    compressor?: CompressorConfig | null;
    fillValue?: FillType;
    order?: Order;
    store?: Store | string;
    overwrite?: boolean;
    path?: string | null;
    chunkStore?: Store;
    filters?: Filter[];
    cacheMetadata?: boolean;
    cacheAttrs?: boolean;
    readOnly?: boolean;
    dimensionSeparator?: '.' | '/';
};
/**
 *
 * @param shape Array shape.
 * @param chunks  Chunk shape. If `true`, will be guessed from `shape` and `dtype`. If
 *      `false`, will be set to `shape`, i.e., single chunk for the whole array.
 *      If an int, the chunk size in each dimension will be given by the value
 *      of `chunks`. Default is `true`.
 * @param dtype NumPy dtype.
 * @param compressor Primary compressor.
 * @param fillValue Default value to use for uninitialized portions of the array.
 * @param order Memory layout to be used within each chunk.
 * @param store Store or path to directory in file system or name of zip file.
 * @param overwrite  If True, delete all pre-existing data in `store` at `path` before creating the array.
 * @param path Path under which array is stored.
 * @param chunkStore Separate storage for chunks. If not provided, `store` will be used for storage of both chunks and metadata.
 * @param filters Sequence of filters to use to encode chunk data prior to compression.
 * @param cacheMetadata If `true` (default), array configuration metadata will be cached for the
 *      lifetime of the object. If `false`, array metadata will be reloaded
 *      prior to all data access and modification operations (may incur
 *      overhead depending on storage and data access pattern).
 * @param cacheAttrs If `true` (default), user attributes will be cached for attribute read
 *      operations. If `false`, user attributes are reloaded from the store prior
 *      to all attribute read operations.
 * @param readOnly `true` if array should be protected against modification, defaults to `false`.
 * @param dimensionSeparator if specified, defines an alternate string separator placed between the dimension chunks.
 */
export declare function create({ shape, chunks, dtype, compressor, fillValue, order, store: storeArgument, overwrite, path, chunkStore, filters, cacheMetadata, cacheAttrs, readOnly, dimensionSeparator }: CreateArrayOptions): Promise<ZarrArray>;
/**
 * Create an empty array.
 */
export declare function empty(shape: number | number[], opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
/**
 * Create an array, with zero being used as the default value for
 * uninitialized portions of the array.
 */
export declare function zeros(shape: number | number[], opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
/**
 * Create an array, with one being used as the default value for
 * uninitialized portions of the array.
 */
export declare function ones(shape: number | number[], opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
/**
 * Create an array, with `fill_value` being used as the default value for
 * uninitialized portions of the array
 */
export declare function full(shape: number | number[], fillValue: FillType, opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
export declare function array(data: Buffer | ArrayBuffer | NestedArray<TypedArray>, opts?: Omit<CreateArrayOptions, 'shape'>): Promise<ZarrArray<any>>;
export declare function openArray({ ipfsElements, cid, shape, mode, chunks, dtype, compressor, fillValue, order, store: storeArgument, overwrite, path, chunkStore, filters, cacheMetadata, cacheAttrs, dimensionSeparator, }?: any): Promise<ZarrArray<any>>;
export declare function normalizeStoreArgument(store?: Store | string, cid?: CID, ipfsElements?: any): Store;
