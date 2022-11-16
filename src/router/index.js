import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/movies/:id",
      name: "Movie",
      component: () => import("@/views/SingleContentView.vue"),
      props: true,
    },
    {
      path: "/series/:id",
      name: "Series",
      component: () => import("@/views/SingleContentView.vue"),
      props: true,
    },
    {
      path: "/auth",
      children: [
        {
          path: "",
          name: "Login",
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: "signup",
          name: "Signup",
          component: () => import("@/views/auth/SignupView.vue"),
        },
      ],
    },
  ],
});

export default router;
