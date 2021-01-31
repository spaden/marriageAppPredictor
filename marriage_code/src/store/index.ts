import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobileView: false
  },
  mutations: {
    CHANGE_MOBILE_VIEW(state, payload) {
      state.isMobileView = payload
    }
  },
  actions: {
    changeView: function({commit}, payload) {
      commit('CHANGE_MOBILE_VIEW', payload)
    }
  },
  modules: {}
});
