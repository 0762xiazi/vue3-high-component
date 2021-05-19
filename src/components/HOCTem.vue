<template>
  <div>
    <slot v-if="data" :data="data"/>

    <slot v-if="!loading" name="pagination" v-bind="{ nextPage, prevPage }"/>

    <slot v-if="error" name="error" :message="error.message"/>

    <slot v-if="loading" name="loading"/>
  </div>

</template>

<script>
  import { ref, onMounted } from 'vue';

  export default {
    name: "HOCTem",
    props: {
      endpoint: {
        type: String,
        required: true,
      }
    },
    setup({ endpoint }) {
      const data = ref(null);
      const loading = ref(true);
      const error = ref(null);
      const currentPage = ref(1);

      function fetchData(page = 1) {
        // ...
      }

      function nextPage() {
        return fetchData(currentPage.value + 1);
      }

      function prevPage() {
        if (currentPage.value <= 1) {
          return;
        }
        fetchData(currentPage.value - 1);
      }


      onMounted(() => {
        fetchData();
      });

      return {
        data,
        loading,
        error,
        nextPage,
        prevPage
      };
    }
  };

</script>

<style scoped>

</style>
