<!--
 * @Date: 2023-03-20 10:59:43
 * @LastEditTime: 2023-04-03 15:38:26
 * @FilePath: /vue-Test/src/App.vue
 * @Description: 
 * 
-->
<template>
  <div>
    <!-- <router-link to="/home">home</router-link>
      <router-link to="/login">login</router-link> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped></style>
