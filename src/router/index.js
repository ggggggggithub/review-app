import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import BookPage from "../components/BookPage.vue";
import MoviePage from "../components/MoviePage.vue";
import DramaPage from "../components/DramaPage.vue";
import LoginPage from "@/components/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/books",
    name: "BookPage",
    component: BookPage,
  },
  {
    path: "/movies",
    name: "MoviePage",
    component: MoviePage,
  },
  {
    path: "/dramas",
    name: "DramaPage",
    component: DramaPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
