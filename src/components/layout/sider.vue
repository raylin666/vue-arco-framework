<template>
  <div class="sider">
    <a-row>
      <a-col :span="1"></a-col>
      <a-col :span="23">
        <BlockLayoutSiderNew />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {
  BlockLayoutSiderNew
} from '@/components'
</script>

<style lang="less" scoped>
.sider {

}
</style>
