// package: service
// file: service.proto

import * as jspb from "google-protobuf";

export class In extends jspb.Message {
  getIn(): string;
  setIn(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): In.AsObject;
  static toObject(includeInstance: boolean, msg: In): In.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: In, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): In;
  static deserializeBinaryFromReader(message: In, reader: jspb.BinaryReader): In;
}

export namespace In {
  export type AsObject = {
    pb_in: string,
  }
}

export class Out extends jspb.Message {
  getOut(): string;
  setOut(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Out.AsObject;
  static toObject(includeInstance: boolean, msg: Out): Out.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Out, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Out;
  static deserializeBinaryFromReader(message: Out, reader: jspb.BinaryReader): Out;
}

export namespace Out {
  export type AsObject = {
    out: string,
  }
}

