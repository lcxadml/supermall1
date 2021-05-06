<template>
<div class="cart">
  <!-- 导航 -->
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}}) </div>
  </nav-bar>
  <!-- 商品列表 -->
<scroll class="content">
  <cart-list></cart-list>
</scroll>
  <!-- 底部汇总 -->
  <cart-buttom-bar></cart-buttom-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex'
import CartList from './children/CartList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartButtomBar from './children/CartButtomBar.vue'
export default {
  components:{
    NavBar,
    CartList,
    Scroll,
    CartButtomBar,
  },
  computed:{
    ...mapGetters([
      'cartLength',
      
    ])
  }
}
</script>

<style scoped>
  .cart {
    z-index: 5;
  }
  .nav-bar {
    background: #ff8198;
    color:white;
    font-weight: 700;
  }
  .content {
    overflow: hidden;
position: fixed;
top: 44px;
bottom: 49px;
left: 0;
right: 0;
}
</style>