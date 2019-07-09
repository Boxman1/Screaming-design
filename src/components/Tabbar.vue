<template>
  <nav>
    <ul>
      <router-link to="/index" tag="li" activeClass="myactive">
        <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home.png" />
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li" activeClass="myactive">
        <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/category.png" />
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li" activeClass="myactive">
        <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/buy.png" />
        <span>购物车</span>
      </router-link>
      <router-link to="/message" tag="li" activeClass="myactive">
        <img src="https://m.wowdsgn.com/static/img/message.png" />
        <span>消息</span>
      </router-link>
      <router-link to="/user" tag="li" activeClass="myactive">
        <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png" />
        <span>我</span>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.myactive {
  color: #000;
}
nav {
  width: 7.5rem;
  height: 0.88rem;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #f5f5f5;
  z-index: 999;
  ul {
    width: 100%;
    height: 100%;
    zoom: 1;
    list-style: none;
    li {
      float: left;
      width: 20%;
      height: 100%;
      font-size: 0rem;
      color: #000;
      text-align: center;
      img {
        display: block;
        width: 0.46rem;
        margin-right: auto;
        margin-left: auto;
      }
      span{
          font-size: 0.2rem;
    display: block;
      }
    }
  }
}
</style>
