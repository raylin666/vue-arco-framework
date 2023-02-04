<template>
  <div>
    <p>本站已安全运行 <span>{{ dateTime }}</span></p>
    <p>Copyright © {{ betDate }} {{ author }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ keepRecordIdent }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteShowDateTime } from '@/utils/datetime'

const author = '林山'
const betDate = '2015 - 2023'
const keepRecordIdent = '粤ICP备15033975号-2'
let dateTime = ref(siteShowDateTime(2015, 0o6, 0o6))
setInterval(()=>{
  dateTime.value = siteShowDateTime(2015, 0o6, 0o6)
}, 1000)
</script>

<style lang="less" scoped>
div {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  p {
    line-height: 40px;
  }
}
</style>
