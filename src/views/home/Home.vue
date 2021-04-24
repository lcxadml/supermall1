<template>
<div>
  <nav-bar  class="home-nav">
   <div slot="center">购物街</div>
  </nav-bar>
 <home-swiper :banner="banner"></home-swiper>
 <recommend :recommend="recommend"></recommend>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrenComps/HomeSwiper'
import Recommend from './childrenComps/Recommond'

import {getHomeMultidata} from 'network/home'
export default {
  data(){
    return {
      banner:null,
      recommend:null,
    }
  },
  methods:{
    addCount(count){
        this.$store.commit("addCount",count)
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
  },
  created(){
    // 请求多个数据
     getHomeMultidata().then(res=>{
       console.log(res);
      this.banner = res.banner.list;
    this.recommend = res.recommend.list;
     });
  }
}
</script>

<style scoped>
  .home-nav {
    color: #fff;
    background: #ff8198;
  }
</style>