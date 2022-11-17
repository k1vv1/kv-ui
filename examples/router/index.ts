import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/home/index.vue"),
  },
  {
    path: "/icon",
    name: "icon",
    component: () => import("@/icon/index.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () => import("@/button/index.vue"),
  },
  {
    path: "/link",
    name: "link",
    component: () => import("@/link/index.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("@/upload/index.vue"),
  },
  {
    path: "/shake",
    name: "shake",
    component: () => import("@/shake/index.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
