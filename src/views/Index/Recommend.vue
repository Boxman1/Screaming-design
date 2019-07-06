<template>
    <div>
        <Swiper></Swiper>
        <commodity :shuju="datalist[1]"></commodity>
        <commodity :shuju="datalist[2]"></commodity>
        <commodity :shuju="datalist[3]"></commodity>
        <commodity :shuju="datalist[4]"></commodity>
        <commodity :shuju="datalist[5]"></commodity>
        <commodity :shuju="datalist[6]"></commodity>
    </div>
</template>

<script>
import Swiper from '../../components/swiper'
import commodity from '../../components/commodity'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  components: {
    commodity,
    Swiper
  },
  mounted () {
    axios.get('/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562384647110').then(res => {
      // console.log(res.data.data.modules)
      this.datalist = res.data.data.modules
    })
  }
}
</script>

<style>

</style>
