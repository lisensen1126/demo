import Axios from 'axios'
import { Loading } from 'element-ui'
let loadingInstance
Axios.interceptors.request.use(function (config) {
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
Axios.interceptors.response.use(function (config) {
  loadingInstance.close()
  return config
})
export default Axios
