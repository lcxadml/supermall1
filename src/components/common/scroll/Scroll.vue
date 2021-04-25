<template>
  <div class="waper" ref="wraperRef">
      <div class="content">
          <slot ></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
data(){
    return { 
        scroll:null
    }
},
props:{
    probetype:{
        type:Number,
        default(){
            return 0
        },
    },
    pullUpLoad:{
        type:Boolean,
        default(){
            return false;
        }
    }
},
mounted(){
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wraperRef,{
         click:true,
         probeType:this.probetype,
         pullUpLoad:this.pullUpLoad,
    })
    // 监听位置
    this.scroll.on('scroll',(possion)=>{
        this.$emit('scroll',possion);
    })
    // 监听上拉加载更多
 this.scroll.on('pullingUp',()=>{
      // 发送网络请求
    this.$emit('pullingUp')
      setTimeout(()=>{
         this.scroll.finishPullUp();
      },1000)
    })
},
methods:{
    scrollTo(x,y,time=320){
        this.scroll.scrollTo(x,y,time); 
    }
},
components:{
    BScroll
}
}
</script>

<style>

</style>