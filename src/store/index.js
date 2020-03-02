import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: state => { //这里使用箭头函数，如果要使用 `this` 获取局部状态，必须使用常规函数
      return state.count+1
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
