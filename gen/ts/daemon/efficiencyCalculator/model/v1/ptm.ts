/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { DoubleValue } from "../../../../google/protobuf/wrappers";
import {
  DetalizationType,
  detalizationTypeFromJSON,
  detalizationTypeToJSON,
  StartOfDayType,
  startOfDayTypeFromJSON,
  startOfDayTypeToJSON,
  WhereCondition,
} from "../../../common/model/v1/filterConditions";

export const protobufPackage = "efficiencyCalculator.model.v1";

export enum GroupByType {
  GROUP_BY_PRODUCT = 0,
  GROUP_BY_PRODLINE = 1,
  GROUP_BY_LINESET = 2,
  GROUP_BY_FURNACE = 3,
  UNRECOGNIZED = -1,
}

export function groupByTypeFromJSON(object: any): GroupByType {
  switch (object) {
    case 0:
    case "GROUP_BY_PRODUCT":
      return GroupByType.GROUP_BY_PRODUCT;
    case 1:
    case "GROUP_BY_PRODLINE":
      return GroupByType.GROUP_BY_PRODLINE;
    case 2:
    case "GROUP_BY_LINESET":
      return GroupByType.GROUP_BY_LINESET;
    case 3:
    case "GROUP_BY_FURNACE":
      return GroupByType.GROUP_BY_FURNACE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GroupByType.UNRECOGNIZED;
  }
}

export function groupByTypeToJSON(object: GroupByType): string {
  switch (object) {
    case GroupByType.GROUP_BY_PRODUCT:
      return "GROUP_BY_PRODUCT";
    case GroupByType.GROUP_BY_PRODLINE:
      return "GROUP_BY_PRODLINE";
    case GroupByType.GROUP_BY_LINESET:
      return "GROUP_BY_LINESET";
    case GroupByType.GROUP_BY_FURNACE:
      return "GROUP_BY_FURNACE";
    case GroupByType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Total {
  pack: number;
  melt: number;
  ptm: number | undefined;
}

export interface DataItem {
  pack: number;
  melt: number;
  ptm: number | undefined;
  prodlineId?: number | undefined;
  linesetId?: number | undefined;
  furnaceId?: number | undefined;
  complexId?: number | undefined;
}

export interface HistoryItem {
  time: Date | undefined;
  pack: number;
  melt: number;
  ptm: number | undefined;
  prodlineId?: number | undefined;
  linesetId?: number | undefined;
  furnaceId?: number | undefined;
  complexId?: number | undefined;
}

export interface TotalEfficiencyRequest {
  from: Date | undefined;
  to: Date | undefined;
  where: WhereCondition[];
  groupBy: GroupByType[];
}

export interface TotalEfficiencyResponse {
  total: Total | undefined;
  data: DataItem[];
}

export interface HistoryEfficiencyRequest {
  from: Date | undefined;
  to: Date | undefined;
  where: WhereCondition[];
  groupBy: GroupByType[];
  startOfDay: StartOfDayType;
  Detalization: DetalizationType;
  IsFillEmptyPeriods: boolean;
}

export interface HistoryEfficiencyResponse {
  total: Total | undefined;
  data: DataItem[];
  history: HistoryItem[];
}

function createBaseTotal(): Total {
  return { pack: 0, melt: 0, ptm: undefined };
}

export const Total = {
  encode(message: Total, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pack !== 0) {
      writer.uint32(9).double(message.pack);
    }
    if (message.melt !== 0) {
      writer.uint32(17).double(message.melt);
    }
    if (message.ptm !== undefined) {
      DoubleValue.encode({ value: message.ptm! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Total {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pack = reader.double();
          break;
        case 2:
          message.melt = reader.double();
          break;
        case 3:
          message.ptm = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Total {
    return {
      pack: isSet(object.pack) ? Number(object.pack) : 0,
      melt: isSet(object.melt) ? Number(object.melt) : 0,
      ptm: isSet(object.ptm) ? Number(object.ptm) : undefined,
    };
  },

  toJSON(message: Total): unknown {
    const obj: any = {};
    message.pack !== undefined && (obj.pack = message.pack);
    message.melt !== undefined && (obj.melt = message.melt);
    message.ptm !== undefined && (obj.ptm = message.ptm);
    return obj;
  },

  create<I extends Exact<DeepPartial<Total>, I>>(base?: I): Total {
    return Total.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Total>, I>>(object: I): Total {
    const message = createBaseTotal();
    message.pack = object.pack ?? 0;
    message.melt = object.melt ?? 0;
    message.ptm = object.ptm ?? undefined;
    return message;
  },
};

function createBaseDataItem(): DataItem {
  return {
    pack: 0,
    melt: 0,
    ptm: undefined,
    prodlineId: undefined,
    linesetId: undefined,
    furnaceId: undefined,
    complexId: undefined,
  };
}

export const DataItem = {
  encode(message: DataItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pack !== 0) {
      writer.uint32(9).double(message.pack);
    }
    if (message.melt !== 0) {
      writer.uint32(17).double(message.melt);
    }
    if (message.ptm !== undefined) {
      DoubleValue.encode({ value: message.ptm! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.prodlineId !== undefined) {
      writer.uint32(32).int32(message.prodlineId);
    }
    if (message.linesetId !== undefined) {
      writer.uint32(40).int32(message.linesetId);
    }
    if (message.furnaceId !== undefined) {
      writer.uint32(48).int32(message.furnaceId);
    }
    if (message.complexId !== undefined) {
      writer.uint32(56).int32(message.complexId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pack = reader.double();
          break;
        case 2:
          message.melt = reader.double();
          break;
        case 3:
          message.ptm = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.prodlineId = reader.int32();
          break;
        case 5:
          message.linesetId = reader.int32();
          break;
        case 6:
          message.furnaceId = reader.int32();
          break;
        case 7:
          message.complexId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataItem {
    return {
      pack: isSet(object.pack) ? Number(object.pack) : 0,
      melt: isSet(object.melt) ? Number(object.melt) : 0,
      ptm: isSet(object.ptm) ? Number(object.ptm) : undefined,
      prodlineId: isSet(object.prodline_id) ? Number(object.prodline_id) : undefined,
      linesetId: isSet(object.lineset_id) ? Number(object.lineset_id) : undefined,
      furnaceId: isSet(object.furnace_id) ? Number(object.furnace_id) : undefined,
      complexId: isSet(object.complex_id) ? Number(object.complex_id) : undefined,
    };
  },

  toJSON(message: DataItem): unknown {
    const obj: any = {};
    message.pack !== undefined && (obj.pack = message.pack);
    message.melt !== undefined && (obj.melt = message.melt);
    message.ptm !== undefined && (obj.ptm = message.ptm);
    message.prodlineId !== undefined && (obj.prodline_id = Math.round(message.prodlineId));
    message.linesetId !== undefined && (obj.lineset_id = Math.round(message.linesetId));
    message.furnaceId !== undefined && (obj.furnace_id = Math.round(message.furnaceId));
    message.complexId !== undefined && (obj.complex_id = Math.round(message.complexId));
    return obj;
  },

  create<I extends Exact<DeepPartial<DataItem>, I>>(base?: I): DataItem {
    return DataItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataItem>, I>>(object: I): DataItem {
    const message = createBaseDataItem();
    message.pack = object.pack ?? 0;
    message.melt = object.melt ?? 0;
    message.ptm = object.ptm ?? undefined;
    message.prodlineId = object.prodlineId ?? undefined;
    message.linesetId = object.linesetId ?? undefined;
    message.furnaceId = object.furnaceId ?? undefined;
    message.complexId = object.complexId ?? undefined;
    return message;
  },
};

function createBaseHistoryItem(): HistoryItem {
  return {
    time: undefined,
    pack: 0,
    melt: 0,
    ptm: undefined,
    prodlineId: undefined,
    linesetId: undefined,
    furnaceId: undefined,
    complexId: undefined,
  };
}

export const HistoryItem = {
  encode(message: HistoryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.pack !== 0) {
      writer.uint32(17).double(message.pack);
    }
    if (message.melt !== 0) {
      writer.uint32(25).double(message.melt);
    }
    if (message.ptm !== undefined) {
      DoubleValue.encode({ value: message.ptm! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.prodlineId !== undefined) {
      writer.uint32(40).int32(message.prodlineId);
    }
    if (message.linesetId !== undefined) {
      writer.uint32(48).int32(message.linesetId);
    }
    if (message.furnaceId !== undefined) {
      writer.uint32(56).int32(message.furnaceId);
    }
    if (message.complexId !== undefined) {
      writer.uint32(64).int32(message.complexId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pack = reader.double();
          break;
        case 3:
          message.melt = reader.double();
          break;
        case 4:
          message.ptm = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 5:
          message.prodlineId = reader.int32();
          break;
        case 6:
          message.linesetId = reader.int32();
          break;
        case 7:
          message.furnaceId = reader.int32();
          break;
        case 8:
          message.complexId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoryItem {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      pack: isSet(object.pack) ? Number(object.pack) : 0,
      melt: isSet(object.melt) ? Number(object.melt) : 0,
      ptm: isSet(object.ptm) ? Number(object.ptm) : undefined,
      prodlineId: isSet(object.prodline_id) ? Number(object.prodline_id) : undefined,
      linesetId: isSet(object.lineset_id) ? Number(object.lineset_id) : undefined,
      furnaceId: isSet(object.furnace_id) ? Number(object.furnace_id) : undefined,
      complexId: isSet(object.complex_id) ? Number(object.complex_id) : undefined,
    };
  },

  toJSON(message: HistoryItem): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.pack !== undefined && (obj.pack = message.pack);
    message.melt !== undefined && (obj.melt = message.melt);
    message.ptm !== undefined && (obj.ptm = message.ptm);
    message.prodlineId !== undefined && (obj.prodline_id = Math.round(message.prodlineId));
    message.linesetId !== undefined && (obj.lineset_id = Math.round(message.linesetId));
    message.furnaceId !== undefined && (obj.furnace_id = Math.round(message.furnaceId));
    message.complexId !== undefined && (obj.complex_id = Math.round(message.complexId));
    return obj;
  },

  create<I extends Exact<DeepPartial<HistoryItem>, I>>(base?: I): HistoryItem {
    return HistoryItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HistoryItem>, I>>(object: I): HistoryItem {
    const message = createBaseHistoryItem();
    message.time = object.time ?? undefined;
    message.pack = object.pack ?? 0;
    message.melt = object.melt ?? 0;
    message.ptm = object.ptm ?? undefined;
    message.prodlineId = object.prodlineId ?? undefined;
    message.linesetId = object.linesetId ?? undefined;
    message.furnaceId = object.furnaceId ?? undefined;
    message.complexId = object.complexId ?? undefined;
    return message;
  },
};

function createBaseTotalEfficiencyRequest(): TotalEfficiencyRequest {
  return { from: undefined, to: undefined, where: [], groupBy: [] };
}

export const TotalEfficiencyRequest = {
  encode(message: TotalEfficiencyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.where) {
      WhereCondition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.groupBy) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalEfficiencyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalEfficiencyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.where.push(WhereCondition.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupBy.push(reader.int32() as any);
            }
          } else {
            message.groupBy.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalEfficiencyRequest {
    return {
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      where: Array.isArray(object?.where) ? object.where.map((e: any) => WhereCondition.fromJSON(e)) : [],
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => groupByTypeFromJSON(e)) : [],
    };
  },

  toJSON(message: TotalEfficiencyRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    if (message.where) {
      obj.where = message.where.map((e) => e ? WhereCondition.toJSON(e) : undefined);
    } else {
      obj.where = [];
    }
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => groupByTypeToJSON(e));
    } else {
      obj.groupBy = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalEfficiencyRequest>, I>>(base?: I): TotalEfficiencyRequest {
    return TotalEfficiencyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalEfficiencyRequest>, I>>(object: I): TotalEfficiencyRequest {
    const message = createBaseTotalEfficiencyRequest();
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    message.where = object.where?.map((e) => WhereCondition.fromPartial(e)) || [];
    message.groupBy = object.groupBy?.map((e) => e) || [];
    return message;
  },
};

function createBaseTotalEfficiencyResponse(): TotalEfficiencyResponse {
  return { total: undefined, data: [] };
}

export const TotalEfficiencyResponse = {
  encode(message: TotalEfficiencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== undefined) {
      Total.encode(message.total, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.data) {
      DataItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TotalEfficiencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalEfficiencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Total.decode(reader, reader.uint32());
          break;
        case 2:
          message.data.push(DataItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalEfficiencyResponse {
    return {
      total: isSet(object.total) ? Total.fromJSON(object.total) : undefined,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => DataItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: TotalEfficiencyResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total ? Total.toJSON(message.total) : undefined);
    if (message.data) {
      obj.data = message.data.map((e) => e ? DataItem.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalEfficiencyResponse>, I>>(base?: I): TotalEfficiencyResponse {
    return TotalEfficiencyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalEfficiencyResponse>, I>>(object: I): TotalEfficiencyResponse {
    const message = createBaseTotalEfficiencyResponse();
    message.total = (object.total !== undefined && object.total !== null) ? Total.fromPartial(object.total) : undefined;
    message.data = object.data?.map((e) => DataItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHistoryEfficiencyRequest(): HistoryEfficiencyRequest {
  return {
    from: undefined,
    to: undefined,
    where: [],
    groupBy: [],
    startOfDay: 0,
    Detalization: 0,
    IsFillEmptyPeriods: false,
  };
}

export const HistoryEfficiencyRequest = {
  encode(message: HistoryEfficiencyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(10).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.where) {
      WhereCondition.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.groupBy) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.startOfDay !== 0) {
      writer.uint32(40).int32(message.startOfDay);
    }
    if (message.Detalization !== 0) {
      writer.uint32(48).int32(message.Detalization);
    }
    if (message.IsFillEmptyPeriods === true) {
      writer.uint32(56).bool(message.IsFillEmptyPeriods);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEfficiencyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryEfficiencyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.where.push(WhereCondition.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupBy.push(reader.int32() as any);
            }
          } else {
            message.groupBy.push(reader.int32() as any);
          }
          break;
        case 5:
          message.startOfDay = reader.int32() as any;
          break;
        case 6:
          message.Detalization = reader.int32() as any;
          break;
        case 7:
          message.IsFillEmptyPeriods = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoryEfficiencyRequest {
    return {
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      where: Array.isArray(object?.where) ? object.where.map((e: any) => WhereCondition.fromJSON(e)) : [],
      groupBy: Array.isArray(object?.groupBy) ? object.groupBy.map((e: any) => groupByTypeFromJSON(e)) : [],
      startOfDay: isSet(object.startOfDay) ? startOfDayTypeFromJSON(object.startOfDay) : 0,
      Detalization: isSet(object.Detalization) ? detalizationTypeFromJSON(object.Detalization) : 0,
      IsFillEmptyPeriods: isSet(object.IsFillEmptyPeriods) ? Boolean(object.IsFillEmptyPeriods) : false,
    };
  },

  toJSON(message: HistoryEfficiencyRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    if (message.where) {
      obj.where = message.where.map((e) => e ? WhereCondition.toJSON(e) : undefined);
    } else {
      obj.where = [];
    }
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => groupByTypeToJSON(e));
    } else {
      obj.groupBy = [];
    }
    message.startOfDay !== undefined && (obj.startOfDay = startOfDayTypeToJSON(message.startOfDay));
    message.Detalization !== undefined && (obj.Detalization = detalizationTypeToJSON(message.Detalization));
    message.IsFillEmptyPeriods !== undefined && (obj.IsFillEmptyPeriods = message.IsFillEmptyPeriods);
    return obj;
  },

  create<I extends Exact<DeepPartial<HistoryEfficiencyRequest>, I>>(base?: I): HistoryEfficiencyRequest {
    return HistoryEfficiencyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HistoryEfficiencyRequest>, I>>(object: I): HistoryEfficiencyRequest {
    const message = createBaseHistoryEfficiencyRequest();
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    message.where = object.where?.map((e) => WhereCondition.fromPartial(e)) || [];
    message.groupBy = object.groupBy?.map((e) => e) || [];
    message.startOfDay = object.startOfDay ?? 0;
    message.Detalization = object.Detalization ?? 0;
    message.IsFillEmptyPeriods = object.IsFillEmptyPeriods ?? false;
    return message;
  },
};

function createBaseHistoryEfficiencyResponse(): HistoryEfficiencyResponse {
  return { total: undefined, data: [], history: [] };
}

export const HistoryEfficiencyResponse = {
  encode(message: HistoryEfficiencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== undefined) {
      Total.encode(message.total, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.data) {
      DataItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.history) {
      HistoryItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryEfficiencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryEfficiencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = Total.decode(reader, reader.uint32());
          break;
        case 2:
          message.data.push(DataItem.decode(reader, reader.uint32()));
          break;
        case 3:
          message.history.push(HistoryItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoryEfficiencyResponse {
    return {
      total: isSet(object.total) ? Total.fromJSON(object.total) : undefined,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => DataItem.fromJSON(e)) : [],
      history: Array.isArray(object?.history) ? object.history.map((e: any) => HistoryItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: HistoryEfficiencyResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total ? Total.toJSON(message.total) : undefined);
    if (message.data) {
      obj.data = message.data.map((e) => e ? DataItem.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    if (message.history) {
      obj.history = message.history.map((e) => e ? HistoryItem.toJSON(e) : undefined);
    } else {
      obj.history = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HistoryEfficiencyResponse>, I>>(base?: I): HistoryEfficiencyResponse {
    return HistoryEfficiencyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HistoryEfficiencyResponse>, I>>(object: I): HistoryEfficiencyResponse {
    const message = createBaseHistoryEfficiencyResponse();
    message.total = (object.total !== undefined && object.total !== null) ? Total.fromPartial(object.total) : undefined;
    message.data = object.data?.map((e) => DataItem.fromPartial(e)) || [];
    message.history = object.history?.map((e) => HistoryItem.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
