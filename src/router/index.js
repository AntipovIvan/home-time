import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import List from "../views/List.vue";
import Chatroom from "../views/Chatroom.vue";

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
