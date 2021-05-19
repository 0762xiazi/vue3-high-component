<template>
  <div>
    <slot v-if="data&&!loading" :data="data"/>

    <slot v-if="!loading" name="pagination" v-bind="{ nextPage, prevPage,currentPage }"/>

    <slot v-if="loading" name="loading"/>
  </div>
</template>
<script>
  import { useFetch, usePagination } from "../composables/HocFetch";
  import { toRefs } from "vue";

  export default {
    name: "Fetch",
    props: {
      paginate: Boolean,
      endpoint: String
    },
    setup(props) {
      let { paginate, endpoint } = toRefs(props)
      let addonAPI = {};
      const pagination = usePagination();
      let currentPage = pagination.currentPage || 1
      if (paginate) {
        addonAPI = {
          ...addonAPI,
          currentPage:pagination.currentPage,
          nextPage: pagination.nextPage,
          prevPage: pagination.prevPage
        };

      }

      const coreAPI = useFetch(endpoint,currentPage);

      return {
        ...addonAPI,
        ...coreAPI
      };
    }
  };
</script>
