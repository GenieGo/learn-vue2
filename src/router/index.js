import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home.vue";
import New from "../pages/New.vue";

Vue.use(Router);

const routes = [
  {
    path: "/home",
    redirect: Home,
  },
  {
    path: "/new",
    redirect: New,
  },
];
export default new Router({
  routes,
  // strict: process.env.NODE_ENV !== "production",
});
