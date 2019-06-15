import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import vuex from '@/components/vuex'
import ElementBtn from '@/components/ElementBtn'
import ElementInput from '@/components/elementInput'
import Pages from '@/components/pages'
import i18n from '@/components/i18n'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '222',
        name: 'ElementBtn',
        component: ElementBtn
      }
      ]
    },
    {
      path: '/i18n',
      name: 'i18n',
      component: i18n
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex,
      children: [{
        path: '333',
        name: 'ElementInput',
        component: ElementInput
      }
      ]
    },
    {
      path: '/pages/:id',
      name: 'pages',
      component: Pages
    }
  ]
})
