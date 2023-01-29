import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import EditPage from "../views/EditPage.vue";
import CreatePage from "../views/CreatePage.vue";
import ViewPage from "../views/ViewPage.vue";

import MyNotesPage from "../views/MyNotesPage.vue";
import ViewNotes from "../views/FindNotes.vue";

import LoginPage from "../views/Login.vue";
import SignupPage from "../views/Signup.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: SignupPage,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditPage,
    },
    {
      path: "/create",
      name: "create",
      component: CreatePage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: MyNotesPage,
    },
    {
      path: "/search",
      name: "search",
      component: ViewNotes,
    },
    {
      path: "/view/:id",
      name: "view",
      component: ViewPage,
    }
  ],
});

export default router;
