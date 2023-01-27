<template>
  <a-row>
    <a-col :span="8">
      <a-image width="100%" height="180" :src="listItem?.cover" />
    </a-col>
    <a-col :span="16">
      <div class="info">
        <div class="title">
          {{ listItem?.title }}
        </div>
        <div style="float: left">
          <a-space>
            <a-tag color="lime">{{ listItem?.time }}</a-tag>
          </a-space>
        </div>
        <div class="tag">
          <a-space>
            <span v-for="(item, index) in listItem?.tags" :key="index">
              <a-tag :color="item.color">{{ item.name }}</a-tag>
            </span>
          </a-space>
        </div>
        <div class="desc">
          {{ listItem?.description }}
        </div>
        <div class="action">
          <a-row>
            <a-col :span="12">
              <a-space size="large">
                <a-avatar :size="20">
                  <img alt="avatar" :src="listItem?.avatar" />
                </a-avatar>
                <span class="username"><a-tag color="rgb(251 251 251)">{{ listItem?.username }}</a-tag></span>
              </a-space>
            </a-col>
            <a-col :span="12">
              <a-space size="large" style="float: right; margin-top: 8px;">
                <div>
                  <IconThumbUp /> {{ listItem?.zanCount }}
                </div>
                <div>
                  <IconHeart /> {{ listItem?.collectionCount }}
                </div>
                <div>
                  <IconMessage /> {{ listItem?.commentCount }}
                </div>
                <div>
                  <IconEye /> {{ listItem?.viewCount }}
                </div>
              </a-space>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { IconThumbUp, IconHeart, IconEye, IconMessage } from '@arco-design/web-vue/es/icon'
import { indexArticleListItem } from '@/types/components/list-item'
import { PropType } from 'vue'

const props = defineProps({
  listItem: Object as PropType<indexArticleListItem>,
})
</script>

<style lang="less" scoped>
.info {
  padding-left: 20px;
  .title {
    color: #2b2b2b;
    font-size: 18px;
    font-weight: 420;
    text-shadow: 1px 0 1px grey;
    margin-bottom: 14px;
  }
  .tag {
    float: right;
    margin-bottom: 14px;
  }
  .desc {
    clear: both;
    font-size: 14px;
    line-height: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-bottom: 12px;
  }
  .action {
    color: #9c9999;
    .username {
      margin-left: -44px;
      padding-left: 24px;
      background-color: #f2f2f2;
      border-radius: 10px;
      font-size: 14px;
      :deep(.arco-tag) {
        background-image: linear-gradient(to right, #e9e9e9, #a6a6f4, #a8b0ff);
        color: #ffffff;
        font-weight: 400;
        border-radius: 10px;
        border: none;
      }
    }
  }
}
</style>
