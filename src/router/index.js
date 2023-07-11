import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../configs/firebaseConfig";
const requireAuth = (_, __, next) => {
  const user = projectAuth.currentUser;
  if (user) {
    next();
  } else {
    // console.log("Before Enter route:", to, from, next);
    alert("You should be logged in before entering this route!");
    next({ name: "Login", params: {} });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      text: "Welcome Sky Bert",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profile.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      leading: true,
      text: "Report",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      leading: false,
      text: "Budget",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      leading: true,
      text: "New Transaction",
      isShowFooter: false,
    },
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/new-transaction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
