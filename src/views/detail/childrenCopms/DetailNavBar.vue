<template>
  <div>
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/images/common/back.svg" alt="">
          </div>
          <div slot="center" class="center">
            <div v-for="(item,index) in titles" :key="index" @click="itemclick(index)" :class="{active:currentIndex===index}">{{item}}</div>
          </div>
        
      </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"

export default {
  data(){
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex:0,
          isActive:false,
      }
  },
    components: { 
        NavBar
         },
    methods:{
        itemclick(index){
            this.currentIndex = index;
            this.$emit('titleClick',index);
        },
        backClick(){
            this.$router.go(-1);
        }
    },
  
}

</script>

<style scoped>
.center {
    display: flex;
}
.center>div {
    font-size: 13px;
    flex: 1;
}
.active{
    color: deeppink;
}
.back {
    margin-top: 5px;
}
</style>

