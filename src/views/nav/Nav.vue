<template>
  <div>
    <ul>
      <li v-for="(data,index) in datalist" :key="data" @click="handleClick(index)" :class="current===index?'on':''">{{data}}</li>
      <component :is="aa"></component>
    </ul>
  </div>
</template>

<script>
import Activity from '../Index/Activity'
import Furniture from '../Index/Furniture'
import homeFurniture from '../Index/homeFurniture'
import Recommend from '../Index/Recommend'
export default {
  data () {
    return {
      aa: 'Recommend',
      datalist: ['推荐', '家具', '家居', '活动'],
      list: ['Recommend', 'Furniture', 'homeFurniture', 'Activity'],
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
    Activity,
    Furniture,
    Recommend,
    homeFurniture
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  background: #fff;
  ul {
    list-style: none;
    background: #fff;
    height: 0.8rem;
    // overflow: hidden;
    li {
      float: left;
      color: #808080;
      margin: 0rem 0.43rem;
      font-size: 0.28rem;
      padding: 0 0.22rem;

    }
  }
}
.on {
        border-bottom: 0.06rem solid #202020;
        color: #000;
        height: 0.74rem;
      }
</style>
