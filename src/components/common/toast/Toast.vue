<template>
  <div class="toast" v-if="iShow">
      <div>
        {{message}}
      </div>
  </div>
</template>

<script>
export default {
// props:{
//     message:{
//         type:String,
//         default(){
//             return ""
//         }
//     }
// }
data(){
    return {
        message:"",
        iShow:false
    }
},
methods:{
    show(message,during=2000){
        this.iShow = true
        this.message = message
        let timer = setTimeout(()=>{
            this.message = '';
            this.iShow = false;
        },during)
    }
}
}
</script>

<style scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 9;
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    background-color: rgba(0,0,0,.7);
    transform: translate(-50%,-50%);
}
.toast div{
    color: #fff;
}
</style>