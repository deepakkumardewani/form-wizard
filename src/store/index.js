import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  mutations: {
    setData(state, payload) {
      console.log(payload);
      state.userInfo = payload;
    },
  },
});
