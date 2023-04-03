/*
 * @Date: 2023-04-03 15:34:43
 * @LastEditTime: 2023-04-03 16:06:49
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
