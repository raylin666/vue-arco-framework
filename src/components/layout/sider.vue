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
        <BlockLayoutSiderNew />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  BlockLayoutSiderNew,
  BlockLayoutSiderSign,
} from '@/components'
import { todaySignListItem, continuitySignListItem } from '@/types/components/sider'

const todaySignList = computed<todaySignListItem[]>(() => [
  {
    nickname: '张三',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '7小时前',
    count: 30,
  },
  {
    nickname: '太挑剔的鸟儿',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '3天前',
    count: 30,
  },
  {
    nickname: '马五',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '6天前',
    count: 30,
  },
  {
    nickname: '小乖乖',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '20分钟前',
    count: 30,
  },
  {
    nickname: '张林夕',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '12小时前',
    count: 30,
  }
])

const continuitySignList = computed<continuitySignListItem[]>(() => [
  {
    nickname: '手放开',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '23小时前',
    signDay: 30,
  },
  {
    nickname: '冰冰',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '1天前',
    signDay: 30,
  },
  {
    nickname: '王治郅',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '20天前',
    signDay: 30,
  },
  {
    nickname: '史可法',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '17小时前',
    signDay: 30,
  },
  {
    nickname: '杨阳洋',
    avatar: 'http://blog.ls331.com/medias/logo.svg',
    time: '20小时前',
    signDay: 30,
  }
])
</script>

<style lang="less" scoped>
.sider {

}
</style>
