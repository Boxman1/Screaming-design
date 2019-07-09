<template>
  <div id="login">
      <div class="box">
        <header class="header">
        <a href="./Index.vue" class="header-left">
            <img
            src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png"
            />
        </a>
        <h3>登录</h3>
        <a href="/register" class="header-right">注册</a>
        </header>
        <div class="centerbox">
        <ul>
        <li v-for="(data,index) in datalist" :key="data" @click="handleClick(index)" :class="current===index?'on':''">{{data}}</li>
        </ul>
        <component :is="aa"></component>
        </div>
        <a href="/register" class="register">快速注册</a>
    </div>
  </div>
</template>

<script>
import Mima from './Login/Mima'
import Duanxin from './Login/Duanxin'
export default {
  data () {
    return {
      aa: 'Mima',
      datalist: ['密码登录', '短信登录'],
      list: ['Mima', 'Duanxin'],
      current: 0
    }
  },
  methods: {
    handleClick (index) {
      // console.log(index)
      this.aa = this.list[index]
      this.current = index
    }
  },
  components: {
   Mima,
   Duanxin
  }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
html{
    height: 700px !important;
}
#login{
    height: 50rem;
     overflow: hidden;
}
// .box{
   
// }
header{
    display: block;
}
.header{
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid #f5f5f5;
    // background: yellow;
    .header-left{
        display: inline-block;
        width: 0.64rem;
        height: 0.64rem;
        line-height: 0.5rem;
        position: absolute;
        left: 0.2rem;
        top: 1.4rem;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        border-radius: 50%;
        -moz-border-radius: 50%;
        img{
            width: 2rem;
            height: 2rem
        }
    }
    .header-right {
    display: inline-block;
    width: 2rem;
    height: 1rem;
    line-height: 1rem;
    position: absolute;
    right: 0.3rem;
    top: 1.5rem;
    text-decoration: none;
    color: #000
    }
    h3{
        text-align: center;
        height: 3rem;
        line-height: 3rem
    }
}
.centerbox{
    ul {
    width: 71rem;
    list-style: none;
    display: block;
    -webkit-margin-before: 1em;
    margin-block-start: 1em;
    -webkit-margin-after: 1em;
    margin-block-end: 1em;
    -webkit-margin-start: 0px;
    margin-inline-start: 0px;
    -webkit-margin-end: 0px;
    margin-inline-end: 0px;
    -webkit-padding-start: 0.04rem;
    padding-inline-start: 0.04rem;
        li {
          float: left;
    color: black;
    width: 8.2rem;
    height: 1.4rem;
    line-height: 0.4rem;
    text-align: center;
    margin: 1rem 1.43rem;
    font-size: 18px;
    padding: 0 0.22rem;
            }
        }
  }
  .register{
    position: absolute;
    bottom: 22.8rem;
    right: 0rem;
    width: 5rem;
    text-decoration: none;
    color: black;
  }
.on {
border-bottom: 0.1rem solid black;
        color: #000;
        height: 0.74rem;
      }
</style>
