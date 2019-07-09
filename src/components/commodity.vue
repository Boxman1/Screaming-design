<template>
  <div class="commodity" v-if="shuju">
    <div class="title">
      <h1>{{shuju.moduleName}}</h1>
      <h3>{{shuju.moduleDescription}}</h3>
    <!-- {{shuju}} -->
    </div>
    <div class="banner">
      <img :src="shuju.moduleContent.banners[0].bannerImgSrc" />

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: null
    }
  },
  mounted () {
    // console.log('aaaa', this.shuju)
  },
  props: ['shuju']
}
</script>

<style lang="scss" scoped>
.commodity {
  padding: 0.3rem 0.3rem 0rem;
  background-color: #fff;
    margin-bottom: 0.3rem;
  .title {
      padding: 0;
    padding-bottom: 0.26rem;
    h1 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
      text-align: center;
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      margin-bottom: 0.2rem;
      text-align: center;
    }
  }
  .banner{
    img{
      width: 100%;
    height: auto;
    }
  }
}
</style>
