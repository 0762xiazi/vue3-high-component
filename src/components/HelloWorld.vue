<template>
<!--  <h1>{{ msg }}</h1>-->
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
  // import useCount from "../composables/useCount";
  import Count from "./Count.vue";
  import HocComponent from "../composables/HocComponent";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  setup(props, context) {
    const { component } = HocComponent({WrappedComponent:Count})
    return component
  }
}
</script>
