/*
 * @Date: 2023-04-03 15:57:11
 * @LastEditTime: 2023-04-03 17:30:10
 * @FilePath: /vue-Test/src/store/test.ts
 * @Description:
 *
 */
import { defineStore } from "pinia";
import { Names } from "./store-namespace";

type User = {
  name: string;
  age: number;
};

let result: User = {
  name: "jjd",
  age: 18,
};

const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      current: <number>1,
      name: <string>"jjd",
      user: <User>{},
    };
  },
  //类似于computed 可以帮我们去修饰我们的值
  getters: {},
  //可以操作异步 和 同步提交state
  actions: {
    changeCurrent(current: number): void {
      this.current = current;
    },
    setUser(): void {
      this.user = result;
    },
    setName(name: string): void {
      this.name = name;
    },
    async setAsyncUser() {
      const result = await Login();
      this.user = result;
      this.setName("zyy");
    },
  },
  //store的持久化
  persist: {
    enabled: true, //是否开启持久化
    strategies: [
      {
        key: <string>Names.Test, //设置存储的key
        storage: localStorage, //表示存储在localStorage
      },
    ],
  },
});
