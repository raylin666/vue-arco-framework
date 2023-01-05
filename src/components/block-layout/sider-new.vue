<template>
  <a-card :bordered="false" :style="{ width: '100%' }" title="最新文章">
    <div class="item">
      <a-row>
        <a-col :span="3" class="key-num">
          <a-tag color="#f53f3f">1</a-tag>
        </a-col>
        <a-col :span="21" class="title">
          PHP 8.2 对 WordPress、插件和开发人员意味着什么？
        </a-col>
        <a-col :span="20">
          <span class="zan" style="color: #f53f3f">293 人点赞过</span>
        </a-col>
        <a-col :span="4" class="date">
          <a-tag color="lime">3周前</a-tag>
        </a-col>
      </a-row>
    </div>
    <div class="item">
      <a-row>
        <a-col :span="3" class="key-num">
          <a-tag color="#eb0aa4">2</a-tag>
        </a-col>
        <a-col :span="21" class="title">
          PHP 8.2 对 WordPress、插件和开发人员意味着什么？
        </a-col>
        <a-col :span="20">
          <span class="zan" style="color: #eb0aa4">293 人点赞过</span>
        </a-col>
        <a-col :span="4" class="date">
          <a-tag color="lime">3周前</a-tag>
        </a-col>
      </a-row>
    </div>
    <div class="item">
      <a-row>
        <a-col :span="3" class="key-num">
          <a-tag color="#ff7d00">3</a-tag>
        </a-col>
        <a-col :span="21" class="title">
          PHP 8.2 对 WordPress、插件和开发人员意味着什么？
        </a-col>
        <a-col :span="20">
          <span class="zan" style="color: #ff7d00">293 人点赞过</span>
        </a-col>
        <a-col :span="4" class="date">
          <a-tag color="lime">3周前</a-tag>
        </a-col>
      </a-row>
    </div>
    <div class="item">
      <a-row>
        <a-col :span="3" class="key-num">
          <a-tag color="#7816ff">4</a-tag>
        </a-col>
        <a-col :span="21" class="title">
          PHP 8.2 对 WordPress、插件和开发人员意味着什么？
        </a-col>
        <a-col :span="20">
          <span class="zan" style="color: #7816ff">293 人点赞过</span>
        </a-col>
        <a-col :span="4" class="date">
          <a-tag color="lime">3周前</a-tag>
        </a-col>
      </a-row>
    </div>
    <div class="item">
      <a-row>
        <a-col :span="3" class="key-num">
          <a-tag color="#00b42a">5</a-tag>
        </a-col>
        <a-col :span="21" class="title">
          PHP 8.2 对 插件和开发人员意味着什么 WordPress、插件和开发人员意味着什么？
        </a-col>
        <a-col :span="20">
          <span class="zan" style="color:#00b42a;">293 人点赞过</span>
        </a-col>
        <a-col :span="4" class="date">
          <a-tag color="lime">3周前</a-tag>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.item {
  margin-bottom: 10px;
  .title {
    margin-bottom: 10px;
    line-height: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .zan {
    font-size: 12px;
    text-shadow: 0 1px 0 #ccc;
  }
  .date {
    float: right;
  }
  .key-num :deep(.arco-tag) {
    margin-top: 12px;
  }
}
</style>
