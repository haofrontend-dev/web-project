import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "@/config/filsebase";
Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) next({ name: "login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "General" */ "../views/Project/General.vue"),
  },
  {
    path: "/projects/beauty",
    name: "projects-beauty",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Beauty" */ "../views/Project/Beauty.vue"),
  },
  {
    path: "/projects/f&b",
    name: "projects-f&b",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "F&B" */ "../views/Project/F&B.vue"),
  },
  {
    path: "/projects/key-visual",
    name: "projects-key-visual",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "KeyVisual" */ "../views/Project/KeyVisual.vue"
      ),
  },
  {
    path: "/projects/branding",
    name: "projects-branding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Branding" */ "../views/Project/Branding.vue"
      ),
  },
  {
    path: "/projects/motion-ai",
    name: "projects-motionAi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "MotionAi" */ "../views/Project/MotionAi.vue"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ContactView" */ "../views/ContactView.vue"),
  },

  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "auth",
    },
    component: () =>
      import(
        /* webpackChunkName: "RegisterView" */ "../views/RegisterView.vue"
      ),
    beforeEnter: requireAuth,
  },
  {
    path: "/admin",
    name: "admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "admin",
    },
    component: () =>
      import(/* webpackChunkName: "UploadView" */ "../views/UploadView.vue"),
    beforeEnter: requireAuth,
    children: [],
  },
  {
    path: "/upload-image",
    name: "uploadImage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "admin",
    },
    component: () =>
      import(/* webpackChunkName: "UploadView" */ "../views/UploadView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/admin/project",
    name: "admin-general",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "admin",
    },
    component: () =>
      import(
        /* webpackChunkName: "ProjectUpload" */ "../views/admin/project/ProjectUpload.vue"
      ),
    beforeEnter: requireAuth,
  },
  {
    path: "/admin/project/new",
    name: "admin-new-project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "admin",
    },
    component: () =>
      import(
        /* webpackChunkName: "AddProject" */ "../views/admin/project/AddProject.vue"
      ),
    beforeEnter: requireAuth,
  },
  {
    path: "/admin/project/edit/:id",
    name: "admin-new-project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "admin",
    },
    component: () =>
      import(
        /* webpackChunkName: "EditProject" */ "../views/admin/project/EditProject.vue"
      ),
    beforeEnter: requireAuth,
  },
  {
    path: "/admin/home",
    name: "admin-home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      layout: "admin",
    },
    component: () =>
      import(
        /* webpackChunkName: "UploadHomePage" */ "../views/admin/home/UploadHomePage.vue"
      ),
    beforeEnter: requireAuth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "/",
  routes,
});

export default router;
