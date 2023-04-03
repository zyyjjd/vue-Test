/*
 * @Date: 2023-04-03 15:22:18
 * @LastEditTime: 2023-04-03 15:28:30
 * @FilePath: /vue-Test/tailwind.config.js
 * @Description:
 *
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
