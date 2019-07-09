<template>
    <div>
        <h1 v-for="data in datalist" :key="data.parentProductId">详情页面
            {{data.productName}}
        </h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/pages/category/20?currentPage=1&sort=onShelfTime&order=desc&_=1562333636709').then(res => {
      this.datalist = res.data.data
    })
  }
}
</script>

<style>

</style>
