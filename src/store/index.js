import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  users: []
}

const getters = {
  getUsers: state => state.users
}

const actions = {
  async loadUsers ({ commit }) {
    await fetch('https://mock.follow.it/profiles.json').then(async (response) => {
      const results = await response.json()
      commit('setUsers', results)
    })
  }
}

const mutations = {
  setUsers: (state, results) => {
    state.users = results
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
