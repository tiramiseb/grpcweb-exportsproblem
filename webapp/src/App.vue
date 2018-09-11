<template>
  <div>
    This text is not displayed because the import error makes it impossible
  </div>
</template>

<script>
import {FooClient, Foo} from './service_pb_service';
console.log("Foo and FooClient:")
console.log(Foo);
console.log(FooClient);
export default {
  name: 'app',
}
</script>
