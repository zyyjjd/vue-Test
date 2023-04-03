<!--
 * @Date: 2023-03-27 09:26:30
 * @LastEditTime: 2023-04-03 15:38:50
 * @FilePath: /vue-Test/src/pages/Ref.vue
 * @Description: 
 * 
-->
<template>
    <div ref="div">小满Ref</div>
    <hr>
    <div>
        {{ name }}
    </div>
    <hr>
    <button @click="change" class="btn">修改 customRef</button>
    <div ref="dom">我是dom</div>
</template>
   
<script setup lang='ts'>
import { ref, reactive, onMounted, shallowRef, customRef } from 'vue'
import type { Ref } from 'vue';
type M = {
    name: string
}

const dom = ref<HTMLElement>()




//ref shallowRef
//ref 深层次 shallowRef 浅层次的响应
//ref 和shallowRef是不能一块写的，不然会影响shallowRef造成视图的更新
const Man = ref<M>({ name: '小满' })
//自定义防抖
function myRef<T = any>(value: T) {
    let timer: any;
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newVal) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    console.log('触发了set')
                    value = newVal
                    trigger()
                }, 500)
            }
        }
    })
}

const defineRef = (value: string) => {
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newVal) {
                value = newVal
                trigger()
            }
        }
    })
}

const name = myRef<string>('小满')


const change = () => {
    name.value = '大满'
    console.log(dom.value?.innerHTML);
}

</script>
<style scoped></style>