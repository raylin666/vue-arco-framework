<template>
  <div class="menu">
    <a-menu mode="horizontal" :default-selected-keys="['home']">
      <a-menu-item v-for="(item, index) in props.list" :key="item.name">
        <div v-if="item.isBadge">
          <a-badge :text="item.badgeText" :offset="[20, -6]" :dotStyle="{ background: item.badgeBg, color: '#ffffff', width: '40px', height: '20px' }">{{ item.title }}</a-badge>
        </div>
        <div v-else>{{ item.title }}</div>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { HeaderMenu } from '@/types/menu'
import { PropType } from 'vue'

const props = defineProps({
  list: Array as PropType<HeaderMenu[]>,
})
</script>

<style lang="less" scoped>
.menu {
  :deep(.arco-menu-light) {
    background-color: transparent;
  }
  :deep(.arco-menu-item) {
    color: #333333;
    font-size: 16px;
    font-weight: 400;
    .arco-menu-selected-label {
      background-color: #f77234;
    }
  }
  :deep(.arco-menu-item.arco-menu-selected) {
    background-color: #fafafa;
    color: #f77234;
  }
  :deep(.arco-menu-item.arco-menu-selected:hover), :deep(.arco-menu-item):hover {
    background-color: var(--color-white);
  }
}
</style>
