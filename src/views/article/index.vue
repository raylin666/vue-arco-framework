<template>
  <div>
    <div v-for="(item, index) in listItem" :key="index">
      <CardArticleListItem
        :list-item="item"
      />
      <a-divider />
    </div>
    <a-pagination :total="listCount" size="large" show-page-size />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  CardArticleListItem,
} from '@/components'
import { requestArticleList } from '@/api/article'

// 列表数据
const listItem = ref()
// 列表数量
const listCount = ref(0)
// 分页页码
const page = 1
// 分页数量
const size = 10
onMounted(() => {
  // 请求文章列表数据
  requestArticleList(page, size).then(response => {
    listItem.value = response.data.list
    listCount.value = response.data.count
  })
})
</script>

<style lang="less" scoped>
  :deep(.arco-pagination-size-large .arco-pagination-item) {
    border-radius: 20px;
  }
</style>
