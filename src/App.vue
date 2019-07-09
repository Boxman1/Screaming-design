<template>
  <div>
    <!-- <Nav></Nav> -->
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// import Nav from './views/nav/Nav'
import Tabbar from './components/Tabbar'
export default {
  components: {
    // Nav,
    Tabbar
  }
}
</script>

<style>

</style>
