<template>
  <div class="goodslist">
     <goods-list-item
      v-for="(item,index) in goods" 
      :key="index" 
      :goods-item="item"
      class="goodlistitem"
      ></goods-list-item>
  </div>
</template>

<script>
   import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
 
props:{
    goods:{
        type:Array,
        default(){
            return [];
        }
    }
},
components:{
    GoodsListItem
}
}
</script>

<style scoped>
 .goodslist {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
 }
 .goodslist  .goodlistitem{
     width: 47%;
 }
</style>