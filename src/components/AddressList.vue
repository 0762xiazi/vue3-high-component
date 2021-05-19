<template>
  <table border="1" cellspacing="0" cellpadding="10" width="80%">
    <thead>
    <tr>
      <th>类型</th>
      <th>姓名</th>
      <th>电话</th>
      <th>详细地址</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(addressInfo,index) in addressData" :key="index">
      <td>{{ addressType }}</td>
      <td>{{ addressInfo.name }}</td>
      <td>{{ addressInfo.phone }}</td>
      <td>{{ addressInfo.address }}</td>
      <td>
        <button @click="editAddress({ addressData:addressInfo, addressType });">编辑</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "AddressList",
    props: ['addressData', 'addressType','editAddress']
  }
</script>

<style scoped>

</style>
