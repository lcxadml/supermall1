<template>
  <tab-bar class="tabbar">
      <tab-bar-item path='/home' activeColor="deepPink">
            <img src="assets/images/tabbar/home.svg" slot="item-icon" alt="">
            <img src="assets/images/tabbar/home_active.svg" slot="item-icon-active" alt="">
            <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="deepPink">
            <img src="assets/images/tabbar/category.svg" slot="item-icon" alt="">
                <img src="assets/images/tabbar/category_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/shopcat' activeColor="deepPink">
            <img src="assets/images/tabbar/shopcart.svg" slot="item-icon" alt="">
                <img src="assets/images/tabbar/shopcart_active.svg" slot="item-icon-active" alt="">
    <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="deepPink">
            <img src="assets/images/tabbar/profile.svg" slot="item-icon" alt="">
                <img src="assets/images/tabbar/profile_active.svg" slot="item-icon-active" alt="">
    <div slot="item-text">我的</div>
      </tab-bar-item>
    
    </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar'
  import TabBarItem from '../common/tabbar/TabBarItem'
export default {
components:{
    TabBar,
    TabBarItem,
   
  }
}
</script>

<style scoped>

</style>