import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../components/ProductList.vue";
import PageNotFound from "../components/PageNotFound.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/deals/:product_id",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
