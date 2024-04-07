import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home.vue";
import New from "../pages/New.vue";
import Diary from "../pages/Diary.vue";
import Edit from "../pages/Edit.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/new",
    name: "new",
    component: New,
  },
  {
    path: "/diary",
    name: "diary",
    component: Diary,
  },
  {
    path: "/edit",
    name: "edit",
    component: Edit,
  },
  {
    path: "*",
    redirect: "/",
  },
];
export default new Router({
  mode: "history",
  routes,
  // strict: process.env.NODE_ENV !== "production",
});
