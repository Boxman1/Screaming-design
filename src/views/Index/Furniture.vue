<template>
    <div v-if="smallSwiperList">
        <smallSwiper>
             <div class="container">
      <div class="title">
        <h1>{{smallSwiperList[1].moduleName}}</h1>
        <h3>{{smallSwiperList[1].moduleDescription}}</h3>
      </div>

      <div class="swiper-container xpp">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide" v-for="data in smallSwiperList[1].moduleContent.products" :key="data.productId">
            <div class="list">
               <img :src="data.productImg" />
              <div class="text">
                <p>{{data.productTitle}}</p>
                <span>￥{{data.originalPrice}}</span>
              </div>
            </div>
          </div>

        </div>
        <!-- Add Pagination -->
      </div>
    <div class="lianjie">
        查看全部
    </div>

    </div>
        </smallSwiper>
    </div>
</template>

<script>
import smallSwiper from './Furniture/swiper-small'
import axios from 'axios'
export default {
  data () {
    return {
      smallSwiperList: null
    }
  },
  mounted () {
    axios.get('/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1562498578781').then(res => {
      this.smallSwiperList = res.data.data.modules
      console.log(this.smallSwiperList)
    })
  },
  components: {
    smallSwiper
  }
}
</script>

<style lang="scss" scoped>

</style>
