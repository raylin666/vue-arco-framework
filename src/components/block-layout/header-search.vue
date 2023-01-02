<template>
  <div class="search" style="float: right">
    <a-space>
      <a-input-group>
        <a-select
            v-model="selectValueSearch"
            :field-names="selectFieldNamesSearch"
            :options="selectValueSearchOptions"
            :style="{ width:'80px', borderRight: 'none' }" />
        <a-input-search :style="{width:'200px'}" placeholder="可搜索您感兴趣的内容" search-button/>
      </a-input-group>
      <a-button>登录</a-button>
      <a-button>快速注册</a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const selectValueSearch = ref('wenZhang')
const selectFieldNamesSearch = {value: 'key', label: 'name'}
const selectValueSearchOptions = reactive([
  { key: 'wenZhang', name: '文章' },
  { key: 'kuaiXun', name: '快讯' },
  { key: 'zhuanTi', name: '专题' },
])
</script>

<style lang="less" scoped>
.search {
  :deep(.arco-select-view-focus) {
    border-color: #f2f3f5;
  }
  :deep(.arco-btn) {
    background-color: rgb(255 255 255 / 29%);
  }
  :deep(.arco-btn:hover) {
    background-color: var(--color-secondary-hover);
  }
  :deep(.arco-input-search) {
    .arco-input-focus {
      border-color: #f2f3f5;
    }
    .arco-input-search-btn {
      background-color: #f2f3f5;
      color: #333333;
    }
    .arco-input-search-btn:hover {
      background-color: var(--color-secondary-hover);
    }
  }
}
</style>
