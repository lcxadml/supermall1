<template>
  <div class="recommends">
      <div class="recommend_item" v-for="(item,index) in recommend" :key="index">
         <a :href="item.link"> <img :src="item.image" alt=""></a>
         <div style="text-align:center;">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
props:{
    recommend:{
        type:Array,
        default(){
            return []
        }
    }
},
}
</script>

<style scpoed>
.recommends {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend_item {
    flex: 1;
}
.recommend_item img {
    width: 80%;
}
</style>