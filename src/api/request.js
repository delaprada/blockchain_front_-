import axios from 'axios'
const qs = require('qs')

const baseUrl = "http://120.79.177.124:8080";

axios.defaults.withCredentials = true;

// 登陆
export const signIn = (values) => {
    return axios.post(baseUrl + '/user/login_test', qs.stringify({
        user_name: values.username,
        password: values.password,
    }))
}

// 注册
export const signUp = (values) => {
    return axios.post(baseUrl + '/user/regist_test', qs.stringify({
        user_name: values.username,
        password: values.password,
        address: values.address
    }))
}

// 登出
export const logOut = () => {
    return axios.post(baseUrl + '/user/loginout');
}

// // 登陆之后获取用户信息（头像，用户名, 积分数）
// export const getPersonalInfo = () => { 
//     return axios.get(baseUrl + '/user/getlogin');
// }

// 获取积分余额
export const getBalance = () => {
    return axios.get(baseUrl + '/trans/b_enquiry');
}

// 获取商品列表
export const getProductList = () => {
    return axios.get(baseUrl + '/item/itemlist');
}

// // 获取用积分支付的商品列表
// export const getPointProductList = () => { 
//     return axios.get(baseUrl + '/item-list');
//  }

// 获取商品详细信息(通过商品id)
export const getProduct = (id) => {
    return axios.get(baseUrl + '/item/itemmsg', {
        params: {
            id: id
        }
    });
}

// 用现金购买，获得积分
export const buyProduct = (id) => {
    return axios.post(baseUrl + '/item/buy', qs.stringify({
        id: id,
    }))
}
