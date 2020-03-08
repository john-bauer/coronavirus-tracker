import Vue from "vue";
import Vuex from "vuex";
import coronavirus from "@/store/modules/coronavirus";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coronavirus
  }
});
