import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const moduleA = {
  state: {
    count: 0,
    ishow: false
  },
  actions: {
    increment ({ commit }, n) {
      setTimeout(() => {
        commit('increment', n)
      }, 2000)
    }
  },
  mutations: {
    increment (state, n) {
      console.log(n)
      state.count += n.id
      n.callback()
    }
  },
  getters: {
    aaaaa: (state) => (id) => {
      console.log(id)
      return id
    }
  }
}
const store = new Vuex.Store({
  modules: {
    home: moduleA
  }

})
export default store
