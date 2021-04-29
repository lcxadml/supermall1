<template>
<div class="tab_control">
    <div v-for="(item,index) in titles" :key="index" class="tab_control_item" @click="tabConTrol(index)">
        <span :class="{active:index===currentIndex}">{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
props:{
    titles:{
        type:Array,
        default(){
            return [];
        }
    }
},
data(){
    return {
        currentIndex:0,
    }
},
methods:{
    tabConTrol(index){
        this.currentIndex = index;
        this.$emit('tabctrolClick',index)
    }
}
}
</script>

<style scoped>
.tab_control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.tab_control_item {
    flex: 1;
}
.active {
    color: #ff5777;
    border-bottom: 2px solid #ff5777;
}
.tab_control span{
    padding: 3px;
}
</style>