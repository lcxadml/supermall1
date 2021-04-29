// import {request} from './request'

//     export function getDetail(iid){
//         return request({
//             url:'/detail',
//             params:{
//                 iid
//             }
//         })
//     }
import {request} from "./request"
export function getDetail(iid){
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
}   
export class Goods {
    constructor(itemInfo,columns,services){
        
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.lowPrice
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice 
    }
}
//商铺信息
export class Shop {
	constructor(shopInfo) {
	    this.shopLogo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}
//参数信息
export class Param {
	constructor(info, rule) {
        // image可能没有值
        this.image = info.images ? info.images[0] : '';
	    this.info = info.set;
		this.rule = rule.tables;
	}
}

// 获取推荐数据
export function getRecommend(){
        return request({
            url:'/recommend',
            
        })
}