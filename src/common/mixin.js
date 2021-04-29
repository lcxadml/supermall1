import BackTop from 'components/content/backTop/BackTop.vue';
export const itemListenerMixin = {
    mounted(){
        console.log("使用了混入");
    }
}
export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            position:0,
        }
    },
    methods:{
        topClick(){
            this.$refs.detailScroll?this.$refs.detailScroll.scrollTo(0,0):this.$refs.scrollRef.scrollTo(0,0)
          }
    }
}