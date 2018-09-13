<template>
  <div>
    This text is displayed with <tt>yarn serve</tt> but not with <tt>yarn build</tt>.
  </div>
</template>

<script>
import {FooClient, Foo} from './service_pb_service';
import {In, Out} from './service_pb';
console.log("Foo, FooClient, In and Out:")
console.log(Foo);
console.log(FooClient);
console.log(In);
console.log(Out);
export default {
  name: 'app',
}
</script>
