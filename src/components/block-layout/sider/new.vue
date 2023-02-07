<template>
  <a-card :bordered="false" :style="{ width: '100%' }" title="最新文章">
    <div class="item" v-for="(item, index) in props.list" :key="index">
      <a-row v-if="index < 5">
        <a-col :span="3" class="key-num">
          <a-tag :color="colors[index]">{{ index + 1 }}</a-tag>
        </a-col>
        <a-col :span="21" class="title">
          <router-link :to="{ name: 'articleInfo', params: { id: item.id } }">{{ item.title }}</router-link>
        </a-col>
        <a-col :span="20" style="margin-top: 10px;">
          <span class="zan" :style="{color: colors[index]}">{{ item.zanCount }} 人点赞过</span>
        </a-col>
        <a-col :span="4" class="date" style="margin-top: 10px;">
          <a-tag color="lime">{{ item.time }}</a-tag>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { NewArticleListItem } from '@/types/article'
import { PropType } from 'vue'

const colors = ['#f53f3f', '#eb0aa4', '#ff7d00', '#7816ff', '#00b42a']
const props = defineProps({
  list: Array as PropType<NewArticleListItem[]>,
})
</script>

<style lang="less" scoped>
.item {
  margin-bottom: 10px;
  .title {
    line-height: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    a {
      color: #333333;
    }
  }
  .zan {
    font-size: 12px;
    text-shadow: 0 1px 0 #ccc;
  }
  .date {
    float: right;
  }
  .key-num :deep(.arco-tag) {
    margin-top: 0;
  }
}
</style>
