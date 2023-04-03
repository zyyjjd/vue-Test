/*
 * @Date: 2023-04-03 15:34:43
 * @LastEditTime: 2023-04-03 17:39:19
 * @FilePath: /vue-Test/src/router/index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Ref",
    component: () => import("../pages/Ref.vue"),
  },
  {
    path: "/testpinia",
    name: "TestPinia",
    component: () => import("../pages/testPinia.vue"),
  },
  {
    path: "/Reactive",
    name: "Reactive",
    component: () => import("../pages/Reactive.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
