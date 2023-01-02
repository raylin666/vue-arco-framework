<template>
  <a-affix :offset-top="0">
    <div class="header">
      <a-row>
        <a-col :span="3" :offset="3">
          <BlockLayoutLogo />
        </a-col>
        <a-col :span="8">
          <BlockLayoutHeaderMenu />
        </a-col>
        <a-col :span="7">
          <BlockLayoutHeaderSearch />
        </a-col>
      </a-row>
    </div>
  </a-affix>
</template>

<script setup lang="ts">
import {
  BlockLayoutLogo,
  BlockLayoutHeaderMenu,
  BlockLayoutHeaderSearch,
} from '@/components'
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
