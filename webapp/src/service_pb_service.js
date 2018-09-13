// package: service
// file: service.proto

var service_pb = require("./service_pb");
var grpc = require("grpc-web-client").grpc;

var Foo = (function () {
  function Foo() {}
  Foo.serviceName = "service.Foo";
  return Foo;
}());

Foo.Bar = {
  methodName: "Bar",
  service: Foo,
  requestStream: false,
  responseStream: false,
  requestType: service_pb.In,
  responseType: service_pb.Out
};

exports.Foo = Foo;

function FooClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FooClient.prototype.bar = function bar(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Foo.Bar, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.FooClient = FooClient;

