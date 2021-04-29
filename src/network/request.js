import axios from 'axios'


 export function request(config){
        // 1创建axios 的实例    
   const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:50000,
});
instance.interceptors.request.use(config=>{
    return config;
});
// instance.interceptors.response.use(response=>{
//     return response.data.data;
// })
    return instance(config);
}