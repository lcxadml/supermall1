<template>
  
     <div class="tab-bar">
     <slot></slot>
   </div>
    <!-- <router-view/> -->

</template>

<script>
export default {

}
</script>

<style>

  .tab-bar {

    display: flex;
    position: fixed;
    left: 0;
    right:0;
    bottom: 0;
    height: 49px;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
    z-index: 9;
        padding-top: 10px!important;
  }
  
</style>