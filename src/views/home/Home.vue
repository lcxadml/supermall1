<template>
<div id="home">
  <nav-bar  class="home-nav">
   <div slot="center">购物街</div>
  </nav-bar>
   <tab-control :titles="['流行','新款','精选']"  @tabctrolClick='tabctrolClick' ref="tabbarCtrol1" v-show="isTabFixed">
 </tab-control>
  <!--  @pullingUp = 'loadMore' -->
 <scroll class="content" ref="scrollRef" :probetype=3 @scroll="scrollMove" :pullUpLoad='true' @pullingUp = 'loadMore'>
   <home-swiper :banner="banner" @imageLoad="imageLoad"></home-swiper>
 <recommend :recommend="recommend"></recommend>
 <feature></feature>
 <tab-control :titles="['流行','新款','精选']" class="tab_control" @tabctrolClick='tabctrolClick' ref="tabbarCtrol2">
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
import {debounce} from 'common/utils.js'

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
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,
      itemImageListener:null,
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
      this.banner = res.data.data.banner.list;
    this.recommend = res.data.data.recommend.list;
     });
  },
      //  请求商品数据
   getHomeData(type){
     const page = this.goods[type].page+1
      getHomeData(type,page).then(res=>{
     this.goods[type].list.push(...res.data.data.list);
     this.goods[type].page++;
    })
  },
  /**
   * 事件监听相关的方法
   */
  // tabcrol点击触发的事件
  tabctrolClick(index){
    this.tabbarctrolIndex = index;
    this.$refs.tabbarCtrol1.currentIndex = this.tabbarctrolIndex;
    this.$refs.tabbarCtrol2.currentIndex = this.tabbarctrolIndex;
  },
  topClick(){
      this.$refs.scrollRef.scrollTo(0,0,500);
  },
  // 防抖动函数
  scrollMove(position){
    this.position = -position.y;
    // 决定是否吸顶（position:fixed）

    this.isTabFixed  = this.position>this.tabOffsetTop; 
   },
  
  //  上拉加载更多
  loadMore(){
    this.getHomeData(this.goodsType);
  },
  imageLoad(){
this.tabOffsetTop = this.$refs.tabbarCtrol2.$el.offsetTop;
  }
   },
   computed:{
     goodsType(){
       return this.goodsitem[this.tabbarctrolIndex];
     }
   },
   mounted(){
       //  图片加载完成的事件监听
        const refresh =  debounce(this.$refs.scrollRef.refresh);
      this.itemImageListener =   this.$bus.$on('itemImageLoad',()=>{
          refresh();
   })
      // 获取组件的offsettop
      // 所有组件都有一个属性$el:用于获取组件中的元素
   },
   activated(){
     this.$refs.scrollRef.scrollTo(0,this.saveY,0);
     this.$refs.scrollRef.refresh();
   },
   deactivated(){
    //  保存Y值
     this.saveY = this.$refs.scrollRef.getScrollY();
    //  取消全局事件的监听
    this.$bus.off('itemImageLoad',this.itemImageListener)
   }
  
}
</script>

<style scoped>
#home {
  position: relative;
}
  .home-nav {
    color: #fff;
    background: #ff8198;

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
  .tab_control1 {
    display: none;
  }
  .showTab {
    display: block;
  }
</style>