/*
 * @Date: 2023-04-03 15:19:36
 * @LastEditTime: 2023-04-03 17:17:48
 * @FilePath: /vue-Test/src/main.ts
 * @Description:
 *
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

//
const store = createPinia();
store.use(piniaPluginPersist);

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
