import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  ADD (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}
const actions = {
  add (context) {
    context.commit('ADD')
  },
  decrement (context) {
    context.commit('DECREMENT')
  },
  addIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('ADD')
    }
  },
  addAsync ({commit}) {
    setTimeout(() => {
      commit('ADD')
    }, 1000)
  }
}
const getters = {
  type (state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
