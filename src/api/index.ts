import axios from 'axios'

// 创建axios实例
const request = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    //baseURL: 'http://127.0.0.1:801/wx/',
    // 超时
    timeout: 2000,
    // 设置Content-Type，规定了前后端的交互使用json
    headers: {'Content-Type': 'application/json;charset=utf-8'}
})
//请求拦截
request.interceptors.request.use((config)=>{
    config.url = "/wx" + config.url;
    return config;
})
export default request