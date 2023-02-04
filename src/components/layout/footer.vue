<template>
  <div class="footer">
    <a-row>
      <a-col :span="12" :offset="6">
        <BlockLayoutFooter />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import {
  BlockLayoutFooter,
} from '@/components'
</script>

<style scoped>
.footer {
  padding: 10px 0;
  margin-top: 30px;
  background-color: black;
  height: 100px;
  color: #ffffff;
}
</style>
