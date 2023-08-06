<template>
  <HelloWorld />
  <a-divider orientation="center">分割线</a-divider>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style scoped></style>
