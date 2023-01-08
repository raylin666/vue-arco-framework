<template>
  <div>
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <CardListItem />
    <a-divider />
    <a-pagination :total="200" size="large" show-page-size />
  </div>
</template>

<script setup lang="ts">
import {
  CardListItem,
} from '@/components'
</script>

<style lang="less" scoped>
  :deep(.arco-pagination-size-large .arco-pagination-item) {
    border-radius: 20px;
  }
</style>
