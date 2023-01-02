<template>
  <div class="sider-content">
    <a-row>
      <a-col :span="13" :offset="3">
        <a-card :bordered="false" :style="{ width: '100%' }">
          <router-view></router-view>
        </a-card>
      </a-col>
      <a-col :span="5">
        <LayoutSider />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {
  LayoutSider
} from '@/components'
</script>

<style lang="less" scoped>
.sider-content {

}
</style>
