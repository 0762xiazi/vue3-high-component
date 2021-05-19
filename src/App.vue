<template>
  <div id="app">
    <router-link class="link" to="/FetchIndex">使用具名插槽实现的高阶组件</router-link><br/>
    <router-link class="link" to="/companyMailAddressIndex">普通的高阶组件</router-link>
    <router-view/>
  </div>

</template>

<script>
  import companyMailAddressIndex from "./pages/companyMailAddressIndex.vue";
  export default {
    name: "App",
    components: {
      companyMailAddressIndex
    }
  };
</script>

<style>
  .error {
    color: red;
  }
</style>
