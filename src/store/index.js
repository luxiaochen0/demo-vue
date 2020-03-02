import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: state => {
      return state.count + 1
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    reduction(state) {
      state.count--
    },
  },
  actions: {
    // 接受一个与 store 实例具有相同方法和属性的 context 对象
    add(context) {
      context.commit('add')
    },
    // 接受一个与 store 实例具有相同方法和属性的 context 对象
    reduction(context) {
      context.commit('reduction')
    }
  },
  modules: {
  }
})
