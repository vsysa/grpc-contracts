/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "common.model.v1";

export enum StartOfDayType {
  START_OF_DAY = 0,
  START_OF_SHIFT = 1,
  UNRECOGNIZED = -1,
}

export function startOfDayTypeFromJSON(object: any): StartOfDayType {
  switch (object) {
    case 0:
    case "START_OF_DAY":
      return StartOfDayType.START_OF_DAY;
    case 1:
    case "START_OF_SHIFT":
      return StartOfDayType.START_OF_SHIFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StartOfDayType.UNRECOGNIZED;
  }
}

export function startOfDayTypeToJSON(object: StartOfDayType): string {
  switch (object) {
    case StartOfDayType.START_OF_DAY:
      return "START_OF_DAY";
    case StartOfDayType.START_OF_SHIFT:
      return "START_OF_SHIFT";
    case StartOfDayType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DetalizationType {
  DETALIZATION_MINUTE = 0,
  DETALIZATION_HOUR = 1,
  DETALIZATION_SHIFT = 2,
  DETALIZATION_DAY = 3,
  DETALIZATION_WEEK = 4,
  DETALIZATION_MONTH = 5,
  DETALIZATION_YEAR = 6,
  UNRECOGNIZED = -1,
}

export function detalizationTypeFromJSON(object: any): DetalizationType {
  switch (object) {
    case 0:
    case "DETALIZATION_MINUTE":
      return DetalizationType.DETALIZATION_MINUTE;
    case 1:
    case "DETALIZATION_HOUR":
      return DetalizationType.DETALIZATION_HOUR;
    case 2:
    case "DETALIZATION_SHIFT":
      return DetalizationType.DETALIZATION_SHIFT;
    case 3:
    case "DETALIZATION_DAY":
      return DetalizationType.DETALIZATION_DAY;
    case 4:
    case "DETALIZATION_WEEK":
      return DetalizationType.DETALIZATION_WEEK;
    case 5:
    case "DETALIZATION_MONTH":
      return DetalizationType.DETALIZATION_MONTH;
    case 6:
    case "DETALIZATION_YEAR":
      return DetalizationType.DETALIZATION_YEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DetalizationType.UNRECOGNIZED;
  }
}

export function detalizationTypeToJSON(object: DetalizationType): string {
  switch (object) {
    case DetalizationType.DETALIZATION_MINUTE:
      return "DETALIZATION_MINUTE";
    case DetalizationType.DETALIZATION_HOUR:
      return "DETALIZATION_HOUR";
    case DetalizationType.DETALIZATION_SHIFT:
      return "DETALIZATION_SHIFT";
    case DetalizationType.DETALIZATION_DAY:
      return "DETALIZATION_DAY";
    case DetalizationType.DETALIZATION_WEEK:
      return "DETALIZATION_WEEK";
    case DetalizationType.DETALIZATION_MONTH:
      return "DETALIZATION_MONTH";
    case DetalizationType.DETALIZATION_YEAR:
      return "DETALIZATION_YEAR";
    case DetalizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface WhereCondition {
  linesetId: number[];
  productId: number[];
  prodlineId: number[];
  furnaceId: number[];
}

function createBaseWhereCondition(): WhereCondition {
  return { linesetId: [], productId: [], prodlineId: [], furnaceId: [] };
}

export const WhereCondition = {
  encode(message: WhereCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.linesetId) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.productId) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.prodlineId) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.furnaceId) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WhereCondition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhereCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.linesetId.push(reader.int32());
            }
          } else {
            message.linesetId.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.productId.push(reader.int32());
            }
          } else {
            message.productId.push(reader.int32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.prodlineId.push(reader.int32());
            }
          } else {
            message.prodlineId.push(reader.int32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.furnaceId.push(reader.int32());
            }
          } else {
            message.furnaceId.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhereCondition {
    return {
      linesetId: Array.isArray(object?.lineset_id) ? object.lineset_id.map((e: any) => Number(e)) : [],
      productId: Array.isArray(object?.product_id) ? object.product_id.map((e: any) => Number(e)) : [],
      prodlineId: Array.isArray(object?.prodline_id) ? object.prodline_id.map((e: any) => Number(e)) : [],
      furnaceId: Array.isArray(object?.furnace_id) ? object.furnace_id.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: WhereCondition): unknown {
    const obj: any = {};
    if (message.linesetId) {
      obj.lineset_id = message.linesetId.map((e) => Math.round(e));
    } else {
      obj.lineset_id = [];
    }
    if (message.productId) {
      obj.product_id = message.productId.map((e) => Math.round(e));
    } else {
      obj.product_id = [];
    }
    if (message.prodlineId) {
      obj.prodline_id = message.prodlineId.map((e) => Math.round(e));
    } else {
      obj.prodline_id = [];
    }
    if (message.furnaceId) {
      obj.furnace_id = message.furnaceId.map((e) => Math.round(e));
    } else {
      obj.furnace_id = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WhereCondition>, I>>(base?: I): WhereCondition {
    return WhereCondition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WhereCondition>, I>>(object: I): WhereCondition {
    const message = createBaseWhereCondition();
    message.linesetId = object.linesetId?.map((e) => e) || [];
    message.productId = object.productId?.map((e) => e) || [];
    message.prodlineId = object.prodlineId?.map((e) => e) || [];
    message.furnaceId = object.furnaceId?.map((e) => e) || [];
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
