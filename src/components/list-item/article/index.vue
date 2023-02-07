<template>
  <a-row>
    <a-col :span="8">
      <a-image width="100%" height="180" :src="listItem?.cover" />
    </a-col>
    <a-col :span="16">
      <div class="info">
        <div class="title">
          <router-link :to="{ name: 'articleInfo', params: { id: listItem?.id } }">{{ listItem?.title }}</router-link>
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
                <span class="username"><a-tag color="rgb(251 251 251)">{{ listItem?.author }}</a-tag></span>
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
import { ArticleListItem } from '@/types/article'
import { PropType } from 'vue'

const props = defineProps({
  listItem: Object as PropType<ArticleListItem>,
})
</script>

<style lang="less" scoped>
.info {
  padding-left: 20px;
  .title, a {
    color: transparent;
    background: linear-gradient(to right, #181819, #2a3231, #8210e9, #000000);
    -webkit-background-clip: text;
    font-size: 18px;
    font-weight: 420;
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
    :deep(.arco-avatar-image) {
      border-radius: 5px;
    }
    .username {
      margin-left: -44px;
      padding-left: 24px;
      background-color: #f2f2f2;
      border-radius: 10px;
      font-size: 14px;
      :deep(.arco-tag) {
        background-image: linear-gradient(to right, #e9e9e9, #656b9f, #172ca8);
        color: #ffffff;
        font-weight: 400;
        border-radius: 4px;
        border: none;
        margin-left: -4px;
        height: 22px;
      }
    }
  }
}
</style>
