<template>
  <div class="goodslistitem">
  <img :src="goodsItem.show.img" alt="">
  <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price+'￥'}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
  </div>
  </div>
</template>

<script>
export default {
props:{
    goodsItem:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style scoped>
.goodslistitem {
    position: relative;
    width: 100%;
    z-index: -1;
}
.goodslistitem img {
    border-radius: 5px;
    width: 100%;
}
.goodslistitem p {
    font-size: 14px;
    width: 100%;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goodslistitem span{
    display: inline-block;
    width: 50%;
    text-align: center;
}
.goodslistitem .price {
    color: #ff8198;
}
.goodslistitem .collect {
    position: relative;
}
.goodslistitem .collect::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background: url('~assets/images/detail/detail_bottom.png')no-repeat;
    background-position:0 0px;
    background-size: 100%;
    position: absolute;
    bottom: 0;
    right: 67%;
  }
</style>