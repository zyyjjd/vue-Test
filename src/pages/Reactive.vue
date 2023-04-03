<!--
 * @Date: 2023-03-27 16:21:22
 * @LastEditTime: 2023-04-03 17:38:13
 * @FilePath: /justdoitVue/src/pages/Reactive.vue
 * @Description: 
 * 
-->
<template>
    <div>{{ person.name }}</div>
    <div>{{ reFtestnoRef }}</div>
    <button class="w-16 h-9 border border-blue-400 text-white text-center bg-green-500 text-2xl rounded-2xl"
        @click="change">点击</button>
</template>

<script setup lang="ts">
import { reactive, toRef } from 'vue';
//reactive proxy 不能直接赋值 否则破坏响应式对象的结构
//解决方案1：数组可以使用push+解构
//解决方案2:添加一个对象，把数组作为一个属性去解决
const testnoRef = {
    name: '小满',
    age: 18
}
const person = reactive({
    name: '小满',
    age: 18
})
//toRef 会返回一个ref对象,变成响应式对象
const reFtestnoRef = toRef(testnoRef, 'name')
const change = () => {
    person.name = '大满'
    testnoRef.name = 'abc'
}
</script>

<style></style>