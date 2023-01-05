<template>
  <div class="sider">
    <a-row style="margin-bottom: 15px;">
      <a-col :span="1"></a-col>
      <a-col :span="23">
        <BlockLayoutSiderSign />
      </a-col>
    </a-row>
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
  BlockLayoutSiderNew,
  BlockLayoutSiderSign,
} from '@/components'
</script>

<style lang="less" scoped>
.sider {

}
</style>
