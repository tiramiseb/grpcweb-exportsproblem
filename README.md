# Test repo for a problem with ts-protoc-gen for gRPC-Web @improbable-eng

See https://github.com/improbable-eng/ts-protoc-gen/issues/103

## How to test

First, install yarn, then:

```
cd webapp
yarn install
yarn serve
```

Then login to http://localhost:8080 and check the console.

### Result

You see the following error in the console:

```
service_pb_service.js?8599:22 Uncaught ReferenceError: exports is not defined
    at eval (service_pb_service.js?8599:22)
    at Module../src/service_pb_service.js (app.js:2568)
    at __webpack_require__ (app.js:725)
    at fn (app.js:102)
    at eval (cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&:8)
    at Module../node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js& (app.js:911)
    at __webpack_require__ (app.js:725)
    at fn (app.js:102)
    at eval (App.vue?c53a:1)
    at Module../src/App.vue?vue&type=script&lang=js& (app.js:2521)
```

### One step forward (maybe)

Uncomment the following line at the top of the `webapp/src/service_pb_service.js` file:

```
var exports = (typeof module === 'object' && module != null && module.exports !== undefined) ? module.exports : {};
```

(you don't need to reload anything, it is reloaded automatically)

Then, you see that Foo and FooClient are not defined, in the console:

```
Foo and FooClient:
undefined
undefined
```

## Initialized with

No need to execute this, it's just so that what I have done is clear.

```
vue create webapp
cd webapp
yarn add google-protobuf @types/google-protobuf grpc-web-client
yarn add -D ts-protoc-gen
```
