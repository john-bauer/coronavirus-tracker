import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import chartStylesMixin from "@/mixins/chartStylesMixin.js";
import "./assets/scss/app.scss";

Vue.use(Buefy);
Vue.mixin(chartStylesMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
