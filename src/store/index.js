import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 挂载到vue实例上
export default new Vuex.Store({
  // 
  state: {
    cartList:[],
  },
    // 修改任何东西都要通过mutations
  mutations: {
    addCount(state,oldProduct){
      oldProduct.count++
    },
    addToCart(state,payload){
      payload.checked = true
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context,payload){
      return new Promise((resove,reject)=>{
        let oldProduct = context.state.cartList.find(item =>payload.iid===item.iid);
        if(oldProduct){
         //  oldProduct.count++;
         context.commit('addCount',oldProduct)
         resove('当前商品数量+1')
        }else {
          payload.count = 1;
         //  state.cartList.push(payload);
         context.commit("addToCart",payload);
         resove('添加新的商品成功！')
        }
      })

   }
  },

  modules: {
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
