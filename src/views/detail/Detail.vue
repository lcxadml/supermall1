<template>
  <div id="detail">
    <detail-nav-bar class="detail_nav_bar"></detail-nav-bar>
    <scroll class="scrolldetail" ref="detailScroll" > 
      <detail-swiper :topimages='topImge'></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
    <detail-param-info :paramInfo="paramsInfo"></detail-param-info>
    <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childrenCopms/DetailNavBar.vue';
import {getDetail,Goods,Shop,Param,getRecommend} from 'network/detail.js'
import DetailSwiper from './childrenCopms/DetailSwiper'
import DetailBaseInfo from './childrenCopms/DetailBaseInfo.vue';
import DetailShopInfo from './childrenCopms/DetailShopInfo.vue';
import Scroll from 'components/common/scroll/Scroll'
import DetailCommentInfo from './DetailCommentInfo.vue';
import DetailGoodsInfo from './childrenCopms/DetailGoodsInfo.vue';
import DetailParamInfo from './childrenCopms/DetailParamInfo.vue';
import GoodsList from 'components/content/goods/GoodsList'
import {itemListenerMixin} from 'common/mixin.js'
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
  },
    mixins:[
      itemListenerMixin
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
        }
    },
    methods:{
      imgLoad(){
          this.$refs.detailScroll.refresh();
      }
    },
    created(){
      // 保存传入的iid
        this.iid = this.$route.params.iid;
        //根据iid请求的详情数据
       getDetail(this.iid).then(res=>{
          // 分离数据
          const data = res.data.result
          // 1获取图片的数据
          console.log(data);
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
    }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .scrolldetail {
    overflow: hidden;
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
</style>