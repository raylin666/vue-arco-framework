<template>
  <div class="sider">
    <a-row style="margin-bottom: 15px;">
      <a-col :span="1"></a-col>
      <a-col :span="23">
        <BlockLayoutSiderSign
          :today-sign-list="todaySignList"
          :continuity-sign-list="continuitySignList"
        />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="1"></a-col>
      <a-col :span="23">
        <BlockLayoutSiderNew
         :list="newArticleList"
         />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  BlockLayoutSiderNew,
  BlockLayoutSiderSign,
} from '@/components'
import { requestNewArticleList } from '@/api/article'
import { requestSignList } from '@/api/sign'

// 最新文章列表数据
const newArticleList = ref()
// 今日签到列表数据
const todaySignList = ref()
// 连续签到列表数据
const continuitySignList = ref()
onMounted(() => {
  // 请求最新文章列表数据
  requestNewArticleList().then(response => {
    newArticleList.value = response.data
  })
  // 请求签到列表数据
  requestSignList().then(response => {
    todaySignList.value = response.data.today
    continuitySignList.value = response.data.continuity
  })
})
</script>

<style lang="less" scoped>
.sider {

}
</style>
