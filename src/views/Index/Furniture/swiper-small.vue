<template>
  <div>
     <slot></slot>
  </div>
</template>
<script>
import Swiper from 'swiper'
import '../../../assets/swiper.css'
export default {
  data () {
    return {}
  },
  mounted () {
    // eslint-disable-next-line
    new Swiper('.xpp', {
      slidesPerView: 3.5,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>

.container {
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;

}
.swiper-container {
  width: 100%;
  height: 100%;

}
.swiper-slide {

  .list {
    width: 1.8rem;
    line-height: normal;
    img {
      width: 100%;
      height: auto;
    }
    .text{
      margin-top: 0.1rem;
    margin-right: 0.1rem;

    p{
      font-size: 0.24rem;
      line-height: 0.24rem;
    color: #808080;
    width: 1.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    }
    span{
      font-size: 0.24rem;
      line-height: 0.24rem;
    }
    }
  }
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

  background-color: #fff;
  margin-bottom: 0.3rem;
  .title {
    padding: 0.26rem 0rem 0rem;
    h1 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
      text-align: center;
      line-height: 0.36rem;
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      margin-bottom: 0.2rem;
      font-weight: normal;
      text-align: center;
      line-height: 0.24rem;
    }
  }
  .lianjie{
    text-align: center;
    line-height: normal;
    padding: 0.3rem 0.4rem;
    font-size: 0.24rem;
    color: #4A4A4A;
    background: url(../../../assets/jiantou.png) no-repeat right center;
    // background-size: 10%;
    background-position-x: 4.4rem;
    background-position-y: .35rem;
    padding: 0.3rem;
  }
}
</style>

<style lang="scss" scoped>

</style>
