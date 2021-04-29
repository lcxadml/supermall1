<template>

      <swiper>
  <swiper-item class="swiper-item" v-for="(item,index) in topimages" :key="index">
    <img :src="item" alt="">
  </swiper-item>
      </swiper>
    <!-- <swiper>
            <swiper-item v-for="(item,index) in topimages" :key="index">
    <img :src="item" alt="">
    </swiper-item>
       </swiper> -->

</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    props:{
        topimages:{
            type:Array,
            default(){
                return []
            }
        }
    },

components:{
    SwiperItem,
    Swiper,
}
}
</script>

<style scoped>
    .swiper-item {
        height: 300px;
        overflow: hidden;
    }
</style>