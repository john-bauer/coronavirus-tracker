import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/resources",
    name: "Resources",
    component: () => import("../views/Resources.vue")
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "is-active",
  base: process.env.BASE_URL,
  routes
});

export default router;
