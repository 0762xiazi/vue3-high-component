<template>
  <Fetch endpoint="fetchCompanyAddresses" paginate>
    <template #default="{ data }">
      <AddressList :addressData="data" :address-type="'办公'" :editAddress="editAddress"></AddressList>
    </template>

    <template #loading>Loading....</template>

    <template #pagination="{ nextPage, prevPage,currentPage }">
      <div class="pagination">
        <div>当前是第{{currentPage}}页</div>
        <button @click="prevPage">上一页</button>
        <button @click="nextPage">下一页</button>
      </div>
    </template>
  </Fetch>
</template>

<script>
  import Fetch from "../components/Fetch.vue";
  import AddressList from "../components/AddressList.vue";
  import address from "../api/address";
  export default {
    name: "FetchIndex",
    data(){
      return {
        editAddress:address.editClick
      }
    },
    components:{
      Fetch,
      AddressList
    }
  }
</script>

<style scoped>

</style>
