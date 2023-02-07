<template>
  <a-affix :offset-top="0">
    <div class="header">
      <a-row>
        <a-col :span="3" :offset="3">
          <BlockLayoutLogo />
        </a-col>
        <a-col :span="8">
          <BlockLayoutHeaderMenu
           :list="headerMenuList"
           />
        </a-col>
        <a-col :span="7">
          <BlockLayoutHeaderSearch />
        </a-col>
      </a-row>
    </div>
  </a-affix>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  BlockLayoutLogo,
  BlockLayoutHeaderMenu,
  BlockLayoutHeaderSearch,
} from '@/components'
import { headerMenu } from '@/types/menu'

const headerMenuList = computed<headerMenu[]>(() => [
  {
    title: '首页',
    name: 'home',
  },
  {
    title: '快讯',
    name: 'kuaiXun',
  },
  {
    title: '专题',
    name: 'zhuanTi',
  },
  {
    title: '商城',
    name: 'shangCheng',
  },
  {
    title: '导航',
    name: 'daoHang',
  },
  {
    title: '圈子',
    name: 'quanZi',
    isBadge: true,
    badgeText: '交流',
    badgeBg: 'blue',
  },
])
</script>

<style lang="less" scoped>
.header {
  background-image: url("/top_bg_image.png");
  box-shadow: 0 0 10px grey;
  :deep(.arco-col) {
    height: 64px;
    line-height: 64px;
    color: var(--color-black);
  }
}
</style>
