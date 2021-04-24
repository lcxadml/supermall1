<template> 
<div class="tabbar-item" @click="itemClick">

<div v-if="!isActive">
     <slot  name="item-icon" ></slot>
</div>
 <div v-else>
      <slot name="item-icon-active" ></slot>
 </div>
  <div :style="activeStyle">
      <slot name="item-text"></slot>
  </div>

</div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default(){
                return 'red'
            }
        },
    },
    data(){
        return {
        
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path).catch(err=>{
                return new Error("重复点击相同的路径")
            });
        }
    },
   
    computed:{
        isActive(){
            return this.$route.path==this.path
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    }
 
}
</script>

<style>
.tabbar-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    background-color: #f6f6f6;
    align-items: center;
    font-size: 14px;
  }

  .tabbar-item img{
    width: 24px;
    height: 24px;
    margin-bottom: 3px;
  }
  .active {
      color: red;
  }
</style>