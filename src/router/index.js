import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [];
export default new Router({
  routes,
  strict: process.env.NODE_ENV !== "production",
});
