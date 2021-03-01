import axios from 'axios'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 60*1000
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
