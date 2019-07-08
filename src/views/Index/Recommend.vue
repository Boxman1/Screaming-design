<template>
    <div>
        <Swiper v-if="datalist[0]" :key ="datalist[0].length">
          <div class="swiper-slide" v-for="data in datalist[0].moduleContent.banners" :key="data.id">
            <img :src="data.bannerImgSrc">
          </div>
        </Swiper>
        <div class="con">
          <commodity :shuju="datalist[1]"></commodity>
        <commodity :shuju="datalist[2]"></commodity>
        <commodity :shuju="datalist[3]"></commodity>
        <commodity :shuju="datalist[4]"></commodity>
        <commodity :shuju="datalist[5]"></commodity>
        <commodity :shuju="datalist[6]"></commodity>
        <p>已经到底了</p>
        </div>

    </div>
</template>

<script>

import Swiper from '../../components/Swiper'
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

      // console.log(this.datalist[0])
    })
  }
}
</script>

<style lang="scss" scoped>
.con{
  margin-bottom: 0.88rem;
  p{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
