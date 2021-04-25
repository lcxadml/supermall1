<template>
<div id="home">
  <nav-bar  class="home-nav">
   <div slot="center">购物街</div>
  </nav-bar>
 <scroll class="content" ref="scrollRef" :probetype=3 @scroll="scrollMove" :pullUpLoad='true' @pullingUp = 'loadMore'>
   <home-swiper :banner="banner"></home-swiper>
 <recommend :recommend="recommend"></recommend>
 <feature></feature>
 <tab-control :titles="['流行','新款','精选']" class="tab_control" @tabctrolClick='tabctrolClick'>
 </tab-control>
 <goods-list :goods="goods[goodsType].list"></goods-list>
 
 </scroll>
 <back-top @click.native="topClick" v-show="position>500"></back-top>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrenComps/HomeSwiper'
import Recommend from './childrenComps/Recommond'
import Feature from './childrenComps/Feature'

import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata,getHomeData} from 'network/home'

export default {
  data(){
    return {
      banner:null,
      recommend:null,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      goodsitem:['pop','new','sell'],
      tabbarctrolIndex:0,
      position:0,
    }
  },
 
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
 BackTop

  },
  created(){
     // 请求多个数据
   this.getHomeMultidata();
   //  请求商品数据
   this.getHomeData('pop');
   this.getHomeData('new');
   this.getHomeData('sell');
  },
   methods:{
 
 /**
  * 网络请求相关的代码
  */
  getHomeMultidata(){
     // 请求多个数据
     getHomeMultidata().then(res=>{
       console.log(res);
      this.banner = res.banner.list;
    this.recommend = res.recommend.list;
     });
  },
      //  请求商品数据
   getHomeData(type){
     const page = this.goods[type].page+1
      getHomeData(type,page).then(res=>{
     this.goods[type].list.push(...res.list);
     this.goods[type].page++;
    })
  },
  /**
   * 事件监听相关的方法
   */
  // tabcrol点击触发的事件
  tabctrolClick(index){
    this.tabbarctrolIndex = index
  },
  topClick(){
      this.$refs.scrollRef.scrollTo(0,0,500);
  },
  scrollMove(position){
    this.position = -position.y;
   },
  //  上拉加载更多
  loadMore(){
    this.getHomeData(this.goodsType);
    console.log(this.goodsType);
      console.log('上拉加载更多');
  }
   },
   computed:{
     goodsType(){
       return this.goodsitem[this.tabbarctrolIndex];
     }
   },
   
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
}
  .home-nav {
    color: #fff;
    background: #ff8198;
    position: fixed;
    left: 0;right: 0;
    top: 0;
    z-index: 9999;
  }
  .tab_control {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
  .content {
    height:300px;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;right: 0;
    z-index: -9;
  }
  .backtop {
 
  }
</style>