<template>
  <a-row>
    <a-col :span="8">
      <a-image width="100%" height="180" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
    </a-col>
    <a-col :span="16">
      <div class="info">
        <div class="title">
          PHP 8.2 对 WordPress、插件和开发人员意味着什么？
        </div>
        <div class="tag">
          <a-space>
            <a-tag color="green">PHP</a-tag>
            <a-tag color="orange">JavaScript</a-tag>
            <a-tag color="blue">服务器运维</a-tag>
          </a-space>
        </div>
        <div class="desc">
          PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，
          作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的...
        </div>
        <div class="action">
          <a-row>
            <a-col :span="12">
              <a-space size="large">
                <a-avatar :size="20">
                  <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                </a-avatar>
                <span class="username">林山</span>
              </a-space>
            </a-col>
            <a-col :span="12">
              <a-space size="large" style="float: right;">
                <div>
                  2周前
                </div>
                <div>
                  <IconHeart /> 10
                </div>
                <div>
                  <IconMessage /> 8
                </div>
                <div>
                  <IconEye /> 211
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
import { IconHeart, IconEye, IconMessage } from '@arco-design/web-vue/es/icon'
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
      margin-left: -18px;
      font-size: 14px;
    }
  }
}
</style>
