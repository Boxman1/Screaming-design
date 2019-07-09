<template>
    <div>
        1111
        <smallSwiper :shuju = 'smallSwiperList[1]' v-if="smallSwiperList.length">
            
        </smallSwiper>
    </div>
</template>

<script>
import smallSwiper from './Furniture/swiper-small'
import axios from 'axios' 
export default {
    data () {
        return {
            smallSwiperList:[]
        }
    },
    mounted () {
        axios.get('/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1562498578781').then(res=>{
            
                  this.smallSwiperList = res.data.data.modules
                   
           
          
        //    console.log(this.smallSwiperList)
        })
    },
    components:{
        smallSwiper
    }
}
</script>

<style lang="scss" scoped>

</style>
