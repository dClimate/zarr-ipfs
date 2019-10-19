/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ZarrMetadataType = t.union("ZarrArrayMetadata", "ZarrGroupMetadata");

export const UserAttributes = t.name("object");

export const FillType = t.union("number", t.lit("NaN"), t.lit("Infinity"), t.lit("-Infinity"), "null");

export const Order = t.union(t.lit("C"), t.lit("F"));

export const DtypeString = t.union(t.lit("<i4"), t.lit("<i8"), t.lit("<f4"), t.lit("<f8"));

export const ChunksArgument = t.union("number", t.array(t.union("number", "null")), "boolean", "null");

export const Compressor = t.iface([], {
  "id": "string",
});

export const Filter = t.iface([], {
  "id": "string",
});

export const ZarrArrayMetadata = t.iface([], {
  "zarr_format": t.union(t.lit(1), t.lit(2)),
  "shape": t.array("number"),
  "chunks": t.array("number"),
  "dtype": t.union("DtypeString", t.array("DtypeString")),
  "compressor": t.union("null", t.iface([], {
    "id": "string",
  })),
  "fill_value": "FillType",
  "order": "Order",
  "filters": t.union("null", t.array("Filter")),
});

export const ZarrGroupMetadata = t.iface([], {
  "zarr_format": t.union(t.lit(1), t.lit(2)),
});

const exportedTypeSuite: t.ITypeSuite = {
  ZarrMetadataType,
  UserAttributes,
  FillType,
  Order,
  DtypeString,
  ChunksArgument,
  Compressor,
  Filter,
  ZarrArrayMetadata,
  ZarrGroupMetadata,
};
export default exportedTypeSuite;
