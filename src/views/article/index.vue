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
import { computed } from 'vue'
import {
  CardArticleListItem,
} from '@/components'
import { articleListItem } from '@/types/components/list-item'

const listItem = computed<articleListItem[]>(() => [
  {
    id: 1,
    cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
    time: '3周前',
    tags: [
      { name: 'PHP', color: 'green' },
      { name: 'JavaScript', color: 'orange' },
      { name: '服务器运维', color: 'blue' },
    ],
    description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    username: '林山',
    zanCount: 20,
    collectionCount: 48,
    commentCount: 394,
    viewCount: 3928,
  },
  {
    id: 2,
    cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
    time: '3周前',
    tags: [
      { name: 'PHP', color: 'green' },
      { name: 'JavaScript', color: 'orange' },
      { name: '服务器运维', color: 'blue' },
    ],
    description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    username: '林山',
    zanCount: 20,
    collectionCount: 48,
    commentCount: 394,
    viewCount: 3928,
  },
  {
    id: 3,
    cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
    time: '3周前',
    tags: [
      { name: 'PHP', color: 'green' },
      { name: 'JavaScript', color: 'orange' },
      { name: '服务器运维', color: 'blue' },
    ],
    description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    username: '林山',
    zanCount: 20,
    collectionCount: 48,
    commentCount: 394,
    viewCount: 3928,
  },
  {
    id: 4,
    cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
    time: '3周前',
    tags: [
      { name: 'PHP', color: 'green' },
      { name: 'JavaScript', color: 'orange' },
      { name: '服务器运维', color: 'blue' },
    ],
    description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    username: '林山',
    zanCount: 20,
    collectionCount: 48,
    commentCount: 394,
    viewCount: 3928,
  },
  {
    id: 5,
    cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
    time: '3周前',
    tags: [
      { name: 'PHP', color: 'green' },
      { name: 'JavaScript', color: 'orange' },
      { name: '服务器运维', color: 'blue' },
    ],
    description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    username: '林山',
    zanCount: 20,
    collectionCount: 48,
    commentCount: 394,
    viewCount: 3928,
  },
  {
    id: 6,
    cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
    time: '3周前',
    tags: [
      { name: 'PHP', color: 'green' },
      { name: 'JavaScript', color: 'orange' },
      { name: '服务器运维', color: 'blue' },
    ],
    description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
    avatar: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    username: '林山',
    zanCount: 20,
    collectionCount: 48,
    commentCount: 394,
    viewCount: 3928,
  },
])
</script>

<style lang="less" scoped>
  :deep(.arco-pagination-size-large .arco-pagination-item) {
    border-radius: 20px;
  }
</style>
