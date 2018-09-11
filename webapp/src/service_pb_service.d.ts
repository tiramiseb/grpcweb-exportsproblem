// package: service
// file: service.proto

import * as service_pb from "./service_pb";
import {grpc} from "grpc-web-client";

type FooBar = {
  readonly methodName: string;
  readonly service: typeof Foo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof service_pb.In;
  readonly responseType: typeof service_pb.Out;
};

export class Foo {
  static readonly serviceName: string;
  static readonly Bar: FooBar;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class FooClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  bar(
    requestMessage: service_pb.In,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: service_pb.Out|null) => void
  ): void;
  bar(
    requestMessage: service_pb.In,
    callback: (error: ServiceError, responseMessage: service_pb.Out|null) => void
  ): void;
}

