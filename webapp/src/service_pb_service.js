// package: service
// file: service.proto


// var exports = (typeof module === 'object' && module != null && module.exports !== undefined) ? module.exports : {};
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
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.FooClient = FooClient;

