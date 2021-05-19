<template></template>

<script>
  import AddressHocComponent from "../composables/AddressHocComponent";
  import AddressList from "../components/AddressList.vue";
  import address from "../api/address";
  export default {
    name: "companyMailAddressIndex",
    setup(props, context) {
      const { component } =
        AddressHocComponent({WrappedComponent:AddressList,fetchData:address.fetchCompanyMailAddresses,props:{addressType:'寄票地址',editAddress:address.editClick}})
      return component
    }
  }
</script>

<style scoped>

</style>
