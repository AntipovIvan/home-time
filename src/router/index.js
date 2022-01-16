import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Chatroom from "../views/Chatroom.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("@/views/List"),
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
  },
  {
    path: "/details/:id",
    name: "ServiceDetails",
    component: () => import("@/views/ServiceDetails"),
    props: true,
  },
  {
    path: "/no-image",
    beforeEnter() {
      location.href = "https://no-image.co.jp/";
    },
    name: "ノーイメージ",
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
