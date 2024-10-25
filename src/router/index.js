// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import BookPage from "../components/BookPage.vue";
import MoviePage from "../components/MoviePage.vue";
import DramaPage from "../components/DramaPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
