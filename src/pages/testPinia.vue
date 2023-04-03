<!--
 * @Date: 2023-04-02 22:22:43
 * @LastEditTime: 2023-04-03 17:00:58
 * @FilePath: /vue-Test/src/pages/testPinia.vue
 * @Description: 
 * 
-->
<template>
    <div>
        <div>{{ Test.current }}--{{ Test.name }}</div>
        <div>我是解构具有响应式的 {{ current }}--{{ name }}</div>
        <div>我是异步数据-- {{ user }}</div>
        <button class="btn btn-success text-white" @click="change">改变</button>
        <button class="btn btn-group" @click="asyncChange">异步改变，等2s</button>
        <button class="btn btn-square" @click="resert">resert</button>
    </div>
</template>

<script setup lang='ts'>
import { useTestStore } from '@/store/test'
import { storeToRefs } from 'pinia';
const Test = useTestStore()

//解构响应式的state
const { current, name, user } = storeToRefs(Test)
//5种改变state的方法
//1.直接改变 current = 111
//2. Test.$patch({current: 222, name: '222jjd'})
//3.Test.$patch(state=>{state.current = 333, state.name = '333jjd'})
//4.Test.$state = {current: 444, name: '444jjd'}
//5.action Test.changeCurrent(555)

const change = () => {
    Test.changeCurrent(555)
}

const asyncChange = () => {
    Test.setAsyncUser()
}

const resert = () => {
    Test.$reset()
}

//订阅state的变化
Test.$subscribe((arg, state) => {
    console.log('====>', arg);
    console.log('====>', state);

})

//订阅action的变化
Test.$onAction((arg) => {
    console.log('action====>', arg);
    arg.after(() => {
        console.log('after');
    })
})

</script>

<style scoped lang='less'></style>