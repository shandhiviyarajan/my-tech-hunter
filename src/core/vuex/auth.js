/**
 * @module:Vuex Boiler Plate
 * @name:_
 * @author:_
 */

// import { HTTPAUTH } from '@/core/interceptors/inteceptors'
// import router from '@/core/router/index'
/**
 * State
 */
const state = {
  admin_stats: '',
  admin_chart: '',
  isAuthenticated: false,
  filter: false
}
/**
 * getters
 */
const getters = {

  isFilter: (state) => {
    return state.filter
  },
  isAuthenticated: state => {
    return state.isAuthenticated
  }
}
/**
 * actions
 */
const actions = {

  AuthLogin ({ commit }) {

    commit('SET_USER', true)
  },

  AuthLogout ({ commit }) {
    commit('SET_USER', false)
  }

}

/**
 * mutations
 */
const mutations = {

  SET_USER: (state, data) => {
    state.isAuthenticated = data
  },

  SET_FILTER: (state, data) => {
    state.filter = data
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
