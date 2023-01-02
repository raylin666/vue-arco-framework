<template>
  <div class="layout">
    <a-layout>
      <a-layout-header>
        <LayoutHeader />
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <LayoutSiderContent />
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
  LayoutSiderContent,
  LayoutFooter,
} from '@/components'
</script>

<style lang="less" scoped>
.layout {
  background-color: #f4f4f4;
  :deep(.arco-layout-content) {
    background-color: #f4f4f4;
    margin-top: 30px;
  }
}
</style>
