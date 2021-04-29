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
    //  observeDOM:true,
    this.scroll = new BScroll(this.$refs.wraperRef,{
         probeType:this.probetype,
         pullUpLoad:this.pullUpLoad,
         click:true,
        
    })
    // 监听位置
    this.scroll.on('scroll',(possion)=>{
        this.$emit('scroll',possion);
    })
    // 监听上拉加载更多
if(this.pullUpLoad){
     this.scroll.on('pullingUp',()=>{
      // 发送网络请求
    this.$emit('pullingUp')
      setTimeout(()=>{
         this.scroll.finishPullUp();
      },200)
    })
}
},
methods:{
    scrollTo(x,y,time=320){
        this.scroll.scrollTo(x,y,time); 
    },
    refresh(){
        this.scroll.refresh();
    },
    getScrollY(){
        return this.scroll ? this.scroll.y:0;
    }
},
components:{
    BScroll
}
}
</script>

<style>

</style>