<template>
  <a class="goodslistitem" href="javascript:;" @click="itemclick">
  <img :src="showImage" alt="" @load="imageLoad">
  <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price+'￥'}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
  </div>
  </a>
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
},
methods:{
    imageLoad(){
   this.$bus.$emit('itemImageLoad');
    },
    itemclick(){
      this.$router.push('/detail/'+this.goodsItem.iid);
  }

},
computed:{
    showImage(){
        return this.goodsItem.image ||this.goodsItem.show.img
    }
}
}
</script>

<style scoped>
.goodslistitem {
    position: relative;
    width: 100%;
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