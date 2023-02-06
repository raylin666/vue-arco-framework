<template>
  <div>
    <div v-for="(item, index) in listItem" :key="index">
      <CardArticleListItem
        :list-item="item"
      />
      <a-divider />
    </div>
    <a-pagination :total="200" size="large" show-page-size />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  CardArticleListItem,
} from '@/components'
import { requestArticleList } from '@/api/article'

const listItem = ref()
const page = 1
const size = 10
onMounted(() => {
  // 请求文章列表数据
  requestArticleList(page, size).then(response => {
    listItem.value = response.data
  })
})
</script>

<style lang="less" scoped>
  :deep(.arco-pagination-size-large .arco-pagination-item) {
    border-radius: 20px;
  }
</style>
