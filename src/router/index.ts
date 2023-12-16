import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CatalogView from "@/views/CatalogView.vue";
import ProductView from "@/views/ProductView.vue";

export enum RouterNames {
  home = "home",
  catalog = "catalog",
  about = "about",
  product = "product",
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouterNames.home,
    component: HomeView,
  },
  {
    path: "/catalog",
    name: RouterNames.catalog,
    component: CatalogView,
  },
  {
    path: "/about",
    name: RouterNames.about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/product/:id(\\d+)",
    name: RouterNames.product,
    // TODO: Очень нужно сделать на странице товара карусель с предлагаемыми товарами чтобы проверить работу Реагирование на изменение параметров https://vue-router-ru.netlify.app/guide/essentials/dynamic-matching.html
    component: ProductView,
    // TODO: разобраться с пропсами
    // props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
