<template>
  <a-card :bordered="false" :style="{ width: '100%' }">
    <a-row>
      <a-col :span="24" class="title">
        <IconHome :size="15" style="color: #b500f7" /> &nbsp;<span>点击领取今天的签到奖励!</span>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { IconHome } from '@arco-design/web-vue/es/icon'
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  span {
    color: transparent;
    background: linear-gradient(to right, #c000ff, #7d00cb, #ff0000, #0118ff);
    -webkit-background-clip: text;
  }
}
</style>
