import Toast from '../toast/Toast'
const obj = {}
obj.install = function(vue){
//   1创建组件构造器
const toastConstructor = vue.extend(Toast)

// 2,new的方式根据组件构造器,可以创建出来一个组件对象
const toast = new toastConstructor();

//3, 将组件构造器手动挂载到某一个元素上
toast.$mount()

// 4,toast.$el对应的就是div
document.body.appendChild(toast.$el)

vue.prototype.$toast = toast
}
export default obj