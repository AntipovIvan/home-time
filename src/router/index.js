import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import List from "../pages/List.vue";
import Chatroom from "../pages/Chatroom.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "お問い合わせ",
    component: About,
  },
  {
    path: "/",
    name: "サービス紹介",
    component: List,
  },
  {
    path: "/",
    name: "チャットルム",
    component: Chatroom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
