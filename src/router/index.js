import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import About from "../views/About.vue";
import Summary from "../views/Summary.vue";
import AgeError from "../views/AgeError.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/summary",
    name: "summary",
    component: Summary,
  },
  {
    path: "/age-error",
    name: "age-error",
    component: AgeError,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
