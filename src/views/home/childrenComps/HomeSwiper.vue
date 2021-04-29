<template>
  <div>
       <swiper>
            <swiper-item v-for="(item,index) in banner" :key="index">
     <a :href="item.link"> <img :src="item.image" alt="" @load="iamgeLoad"></a>
    </swiper-item>
       </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    props:{
        banner:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            isload:false,
            count:0,
        }
    },
components:{
    Swiper,
    SwiperItem,
},
methods:{
    iamgeLoad(){
        this.count++;
    if(this.count===4){
            this.$emit("imageLoad");
        }
       
    }
}
}
</script>

<style>

</style>