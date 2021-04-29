<template>
  <h1 class="wrapper">
  
  </h1>
</template>

<script>
import BScroll from 'better-scroll'
export default {
mounted(){
  // const bs = new BScroll('.wrapper',{
  //   probeType:2,
  //   click:true,
  //   pullUpLoad:true
  // });
    // bs.on('pullingUp',()=>{
    //   // 发送网络请求
    //   console.log("11");
    //   setTimeout(()=>{
    //     bs.finishPullUp();
    //   },1000)
    // })
  // bs.on('scroll',(possion)=>{
  //   console.log(possion);
  // })
},
data(){
  return {
    count:0
  }
}
}
</script>

<style>
.wrapper {
  height: 100vh;
}
</style>