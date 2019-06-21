import axios from 'axios'
import {
  Loading
} from 'element-ui'
let loadingInstance
// 自动切换环境
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://baidu/'
}
axios.interceptors.request.use(function (config) {
  loadingInstance = Loading.service({
    lock: true,
    text: '请求资源中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  //   setTimeout(() => {
  //     console.log(store.state.isShow)
  //   }, 10000)
  return config
})
// 定义一个响应拦截器
axios.interceptors.response.use(function (config) {
  loadingInstance.close()
  return config
})
export default axios
