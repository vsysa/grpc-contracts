/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {
  HistoryEfficiencyRequest,
  HistoryEfficiencyResponse,
  TotalEfficiencyRequest,
  TotalEfficiencyResponse,
} from "../../model/v1/ptm";

export const protobufPackage = "efficiencyCalculator.service.v1.ptm";

export interface Ptm {
  GetTotalByCounter(request: TotalEfficiencyRequest): Promise<TotalEfficiencyResponse>;
  GetHistoryByCounter(request: HistoryEfficiencyRequest): Promise<HistoryEfficiencyResponse>;
  GetTotalByPacked(request: TotalEfficiencyRequest): Promise<TotalEfficiencyResponse>;
  GetHistoryByPacked(request: HistoryEfficiencyRequest): Promise<HistoryEfficiencyResponse>;
  GetTotalBySaleable(request: TotalEfficiencyRequest): Promise<TotalEfficiencyResponse>;
  GetHistoryBySaleable(request: HistoryEfficiencyRequest): Promise<HistoryEfficiencyResponse>;
}

export class PtmClientImpl implements Ptm {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "efficiencyCalculator.service.v1.ptm.Ptm";
    this.rpc = rpc;
    this.GetTotalByCounter = this.GetTotalByCounter.bind(this);
    this.GetHistoryByCounter = this.GetHistoryByCounter.bind(this);
    this.GetTotalByPacked = this.GetTotalByPacked.bind(this);
    this.GetHistoryByPacked = this.GetHistoryByPacked.bind(this);
    this.GetTotalBySaleable = this.GetTotalBySaleable.bind(this);
    this.GetHistoryBySaleable = this.GetHistoryBySaleable.bind(this);
  }
  GetTotalByCounter(request: TotalEfficiencyRequest): Promise<TotalEfficiencyResponse> {
    const data = TotalEfficiencyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTotalByCounter", data);
    return promise.then((data) => TotalEfficiencyResponse.decode(new _m0.Reader(data)));
  }

  GetHistoryByCounter(request: HistoryEfficiencyRequest): Promise<HistoryEfficiencyResponse> {
    const data = HistoryEfficiencyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHistoryByCounter", data);
    return promise.then((data) => HistoryEfficiencyResponse.decode(new _m0.Reader(data)));
  }

  GetTotalByPacked(request: TotalEfficiencyRequest): Promise<TotalEfficiencyResponse> {
    const data = TotalEfficiencyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTotalByPacked", data);
    return promise.then((data) => TotalEfficiencyResponse.decode(new _m0.Reader(data)));
  }

  GetHistoryByPacked(request: HistoryEfficiencyRequest): Promise<HistoryEfficiencyResponse> {
    const data = HistoryEfficiencyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHistoryByPacked", data);
    return promise.then((data) => HistoryEfficiencyResponse.decode(new _m0.Reader(data)));
  }

  GetTotalBySaleable(request: TotalEfficiencyRequest): Promise<TotalEfficiencyResponse> {
    const data = TotalEfficiencyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTotalBySaleable", data);
    return promise.then((data) => TotalEfficiencyResponse.decode(new _m0.Reader(data)));
  }

  GetHistoryBySaleable(request: HistoryEfficiencyRequest): Promise<HistoryEfficiencyResponse> {
    const data = HistoryEfficiencyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHistoryBySaleable", data);
    return promise.then((data) => HistoryEfficiencyResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
