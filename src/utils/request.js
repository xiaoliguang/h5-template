import axios from 'axios'
import qs from 'qs'
import CryptoJS from './md5.js'

/*  todo 计算签名
let handleData = function(data) {
    return qs.stringify(data).replace(/[&|=]/g, '')
}
let appKey = 'seed-universalcard-user'
let appSecret = '4b91aac3835f4ea8b7807e5fb866d6e1'
let nonce = 'OyKY0DOWXpKAflyF'
let timestamp = Date.parse(new Date())

let signature = `appKey=${appKey}&appSecret=${appSecret}&nonce=${nonce}&timestamp=${timestamp}&${handleData({
    width: '10',
    height: '20',
    color: '#fff'
})}`
let md5Signature = CryptoJS.MD5(signature)
    .toString()
    .toUpperCase()

*/

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json',
        zone:process.env.ZONE || ''
    },
    timeout: 60 * 1000
})
// request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    res => {
        const code = res.data.code || 200
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
