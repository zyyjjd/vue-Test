/*
 * @Date: 2023-04-03 15:19:36
 * @LastEditTime: 2023-04-03 15:32:45
 * @FilePath: /vue-Test/vite.config.ts
 * @Description: 简单的vite配置
 *
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; //官方解析tsx插件
import { join } from "path";
import AutoImport from "unplugin-auto-import/vite"; //无需import直接上手vue3

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
