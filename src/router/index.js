import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../views/Home.vue";

//路由配置
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    }
  ]
});

export default router;
