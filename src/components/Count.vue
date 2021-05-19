<template>
  <div @click="addCount">{{count}}</div>
</template>

<script>
  export default {
    name: "Count",
    props:{
      count:Number,
      AddCount:Function
    },
    methods:{
      addCount(){
        this.AddCount()
      }
    }
  }
</script>

<style scoped>

</style>
