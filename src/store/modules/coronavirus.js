import coronavirusApi from "@/api/coronavirusApi";

const state = {
  status: {
    loading: null
  },
  coronavirusData: null
};

const mutations = {
  SET_CORONAVIRUS_DATA(state, payload) {
    window.console.log(payload);
    state.coronavirusData = payload;
  },
  SET_STATUS_LOADING(state, payload) {
    state.status.loading = payload;
  }
};

const actions = {
  async getAllCoronavirusData({ commit }) {
    try {
      commit("SET_CORONAVIRUS_DATA", await coronavirusApi.getData("all"));
    } catch (error) {
      return error;
    }
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
