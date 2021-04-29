<template>
  <div id="detail">
    <detail-nav-bar class="detail_nav_bar" @titleClick='titleClick' ref="nav"></detail-nav-bar>
    <scroll class="scrolldetail" ref="detailScroll" @scroll="contentScroll" :probetype="3"> 
      <detail-swiper :topimages='topImge'></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
    <detail-param-info :paramInfo="paramsInfo" ref="paramRef"></detail-param-info>
    <detail-comment-info :commentInfo="commentInfo" ref="commentRef"></detail-comment-info>
    <goods-list :goods="recommends" ref="recommendRef"></goods-list>
    </scroll>
    <detail-bottom-bar class="bottomBar" @addCart="addCart"></detail-bottom-bar>
    <back-top  @click.native="topClick" v-show="position>500"></back-top>
  </div>
</template>

<script>
import {getDetail,Goods,Shop,Param,getRecommend} from 'network/detail.js'

import DetailNavBar from './childrenCopms/DetailNavBar.vue';
import DetailSwiper from './childrenCopms/DetailSwiper'
import DetailBaseInfo from './childrenCopms/DetailBaseInfo.vue';
import DetailShopInfo from './childrenCopms/DetailShopInfo.vue';
import DetailCommentInfo from './DetailCommentInfo.vue';
import DetailGoodsInfo from './childrenCopms/DetailGoodsInfo.vue';
import DetailParamInfo from './childrenCopms/DetailParamInfo.vue';
import DetailBottomBar from './childrenCopms/DetailBottomBar';

import {backTopMixin} from 'common/mixin.js'
import {debounce} from 'common/utils.js'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:"Detail",
  components: { 
    DetailNavBar,
  DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailCommentInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodsList,
    DetailBottomBar,
  },
    mixins:[
 backTopMixin
    ],
    data(){
        return {
            iid:null,
            topImge:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramsInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],  
            getThemTopYs:null,
            currentIndex:0,

        }
    },
    methods:{
      imgLoad(){
    this.$refs.detailScroll.refresh()
      },
      titleClick(index){
       this.$refs.detailScroll.scrollTo(0,-this.themeTopYs[index],1000)
      },
      contentScroll(position){
        this.position = -position.y;
        // 1 获取y值
        const positionY = -position.y;
        // posionY和主题中的值进行对比
        for(let i = 0;i<this.themeTopYs.length;i++){
            if(this.currentIndex!==i&&((i<this.themeTopYs.length-1&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])||(i==this.themeTopYs.length-1&&positionY>this.themeTopYs[this.themeTopYs.length-1]))){
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex;
            }
        }  
    },
      addCart(){
        const product = {}
        product.image = this.topImge[0];
        product.title = this.goods.title;
        product.desc =  this.goods.desc;
        product.price = this.goods.price;
        product.iid = this.iid;
        console.log(product);
        console.log('点击添加到购物车');
      },
    },
    created(){
      // 保存传入的iid
        this.iid = this.$route.params.iid;
        //根据iid请求的详情数据
       getDetail(this.iid).then(res=>{
          // 分离数据
          const data = res.data.result
          // 1获取图片的数据
    
        this.topImge = data.itemInfo.topImages;
        // 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        // 3 .创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
        // 4,保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5,获取参数信息
        this.paramsInfo = new Param(data.itemParams.info,data.itemParams.rule)
        // 6获取评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0];
        }
    
   
     
       })
 
      getRecommend().then(res=>{
       this.recommends = res.data.data.list
      })
      
    },
 
    mounted(){
      this.getThemTopYs = debounce(()=>{
          // DOM已经渲染出来了，但是图片是没有加载完全的
          // 一般情况下值不对都是因为图片还没有加载完全
            this.themeTopYs = []
          this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.paramRef?this.$refs.paramRef.$el.offsetTop:0);
        this.themeTopYs.push(this.$refs.commentRef?this.$refs.commentRef.$el.offsetTop:0);
        this.themeTopYs.push(this.$refs.recommendRef?this.$refs.recommendRef.$el.offsetTop:0);
        })
           //  图片加载完成的事件监听
        const refresh =  debounce(this.$refs.detailScroll.refresh);
      this.itemImageListener = this.$bus.$on('itemImageLoad',()=>{
        this.getThemTopYs();
          refresh();  
   })
    }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .scrolldetail {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
     
  }
  .detail_nav_bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .bottomBar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
</style>