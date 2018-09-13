# Test repo for another problem with ts-protoc-gen for gRPC-Web @improbable-eng

See https://github.com/improbable-eng/ts-protoc-gen/issues/111

## How to test

Serve the `webapp/dist/` directory with any web server and try with any web browser.

(tested with NginX + Chromium)

### Result

You see the following error in the console (example with Chromium):

```
service_pb.js:300 Uncaught ReferenceError: exports is not defined
    at Module.29fd (service_pb.js:300)
    at s (bootstrap:78)
    at Object.8599 (service_pb_service.js:4)
    at s (bootstrap:78)
    at Module.56d7 (App.vue?685f:2)
    at s (bootstrap:78)
    at Object.0 (bootstrap:151)
    at s (bootstrap:78)
    at r (bootstrap:45)
    at 0 (bootstrap:151)
```

Please note this behaviour is not encountered when serving files with `yarn serve`.

## Initialized with

No need to execute this, it's just so that what I have done is clear.

```
vue create webapp
cd webapp
yarn add google-protobuf @types/google-protobuf grpc-web-client
yarn add -D ts-protoc-gen
# Change ts-protoc-gen version to 0.7.7-pre.687bcc7 in package.json
yarn install
protoc -I../rpc service.proto --plugin="protoc-gen-ts=node_modules/.bin/protoc-gen-ts" --js_out=import_style=commonjs:src --ts_out=service=true:src
yarn build
```

