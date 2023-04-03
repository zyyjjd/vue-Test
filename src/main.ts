/*
 * @Date: 2023-04-03 15:19:36
 * @LastEditTime: 2023-04-03 15:38:14
 * @FilePath: /vue-Test/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
