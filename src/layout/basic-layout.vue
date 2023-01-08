<template>
  <div class="layout">
    <a-layout>
      <a-layout-header>
        <LayoutHeader />
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <LayoutContent />
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <LayoutFooter />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import {
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from '@/components'
</script>

<style lang="less" scoped>
.layout {
  background-color: #f4f4f4;
  background-image: radial-gradient(#cccccc 10%, transparent 0);
  background-size: 10px 10px;
  :deep(.arco-layout-content) {
    background-color: #f4f4f4;
    margin-top: 30px;
    background-image: radial-gradient(#cccccc 10%, transparent 0);
    background-size: 10px 10px;
  }
}
</style>
