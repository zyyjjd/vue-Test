/*
 * @Date: 2023-04-03 15:34:43
 * @LastEditTime: 2023-04-03 15:36:56
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
