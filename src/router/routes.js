

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

export default [
  /* -----> Public routes <----- */
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }
];
