import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobileView: false,
    wholeObjs: Array
  },
  mutations: {
    CHANGE_MOBILE_VIEW(state, payload) {
      state.isMobileView = payload
    },
    WHOLE_OBJS(state, payload) {
      state.wholeObjs = payload
    }
  },
  actions: {
    changeView: function({commit}, payload) {
      commit('CHANGE_MOBILE_VIEW', payload)
    },
    addWholeObjs: function({commit}, payload) {
      commit('WHOLE_OBJS', payload)
    }
  },
  modules: {}
});
