<template>
  <div id="app">
   <main-tab-ber></main-tab-ber>
    <keep-alive exclude="Detail">
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBer from '../../tabbar/src/components/MainTabBer.vue'

export default {
  components:{
MainTabBer,

  }
}
</script>
<style lang="less">
@import './assets/css/base.css';
</style>
