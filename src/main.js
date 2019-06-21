// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'
import axios from './http/axios'
import i18n from './i18n/i18n'
// import utils from '@/utils/crypto'
// Vue.prototype.utils = utils
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1) + '元'
})
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(store)

Vue.prototype.axios = axios
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
console.log(vm.$i18n)
