<template>
  <common-header :hederData="hederData"></common-header>

</template>

<script>
  import CommonHeader from '@/components/CommonHeader'
  export default {
    name: 'Home',
    components: {
      CommonHeader
    },
    data (){
      return{
        hederData: {
          titleType: 2 ,
          location: '地址'
        }
      }
    }
  }
</script>

<style>

</style>