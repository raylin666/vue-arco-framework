<template>
  <div class="detail">
    <a-row>
      <a-col :span="12">
        <div class="tag">
          <a-space>
            <span v-for="(item, index) in info?.tags" :key="index">
              <a-tag :color="item.color">{{ item.name }}</a-tag>
            </span>
          </a-space>
        </div>
      </a-col>
      <a-col :span="12">
        <a-space size="large" style="float: right;">
          <div>
            <IconThumbUp /> {{ info?.zanCount }}
          </div>
          <div>
            <IconHeart /> {{ info?.collectionCount }}
          </div>
          <div>
            <IconMessage /> {{ info?.commentCount }}
          </div>
          <div>
            <IconEye /> {{ info?.viewCount }}
          </div>
        </a-space>
      </a-col>
    </a-row>
    <a-divider orientation="center">
      <a-tag color="magenta">作者 {{ info?.author }} 于 {{ info?.time }} - {{ info?.date }} 发布</a-tag>
    </a-divider>
    <div class="title">
      {{ info?.title }}
    </div>
    <a-divider orientation="right" style="margin-top: 25px;">
      <a-tag>正文内容 - 字数 {{ info?.contentLength }}</a-tag>
    </a-divider>
    <div class="content">
      {{ info?.content }}
    </div>
    <a-divider />
    <a-row>
      <a-col :span="10">
        <div class="prev-title" v-if="info?.prevArticle?.id">
          <router-link :to="{ name: 'articleInfo', params: { id: info?.prevArticle.id } }">上一篇: {{ info?.prevArticle.title }}</router-link>
        </div>
      </a-col>
      <a-col :span="10" :offset="4">
        <div class="next-title" v-if="info?.nextArticle?.id">
          <router-link :to="{ name: 'articleInfo', params: { id: info?.nextArticle.id } }">下一篇: {{ info?.nextArticle.title }}</router-link>
        </div>
      </a-col>
    </a-row>
    <div class="content-from">
      <div><a-alert>文章作者: {{ info?.copyrightAuthor }}</a-alert></div>
      <div><a-alert type="success">文章链接: {{ info?.copyrightLink }}</a-alert></div>
      <div><a-alert type="warning">版权声明: {{ info?.copyrightStatement }}</a-alert></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { IconThumbUp, IconHeart, IconEye, IconMessage } from '@arco-design/web-vue/es/icon'
import { requestArticleInfo } from '@/api/article'
import { ArticleInfo } from '@/types/article';
import { isArray } from '@/utils/is';

const router = useRouter()

const id = ref(0)
const info = ref<ArticleInfo>()
onMounted(() => {
  if (isArray(router.currentRoute.value.params.id)) {
    id.value = parseInt(router.currentRoute.value.params.id[0])
  } else {
    id.value = parseInt(router.currentRoute.value.params.id)
  }

  // 测试 mock, 默认固定值。请求真实接口地址时需要删除该代码
  id.value = 0

  // 请求文章详情数据
  requestArticleInfo(id.value).then(response => {
    info.value = response.data
    info.value.contentLength = '3K'
  })
})
</script>

<style lang="less" scoped>
.detail {
  .title {
    text-align: center;
    padding: 180px 0;
    color: #ffffff;
    font-size: 24px;
    font-weight: 420;
    margin-top: 30px;
    text-shadow: 1px 0 1px grey;
    opacity: 0.9;
    background-image: url('http://cdn.ls331.com/storage/blogHomeBackgroundImage2021.jpg');
    background-size: cover;
    // background-position: center center;
    border-radius: 10px;
  }
  .content-from {
    margin-top: 20px;
    div {
      font-size: 14px;
      line-height: 30px;
      margin: 5px 0;
    }
  }
  .content {
    padding: 0;
    line-height: 40px;
  }
  .prev-title {
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    border-bottom: 1px solid #c9c8c847;
    line-height: 50px;
    padding: 0 16px;
    font-size: 14px;
    a {
      color: transparent;
      background: linear-gradient(to right, #0042ff, #7d00cb, #3d00ff, #291bfd);
      -webkit-background-clip: text;
    }
  }
  .next-title {
    text-align: right;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    border-bottom: 1px solid #c9c8c847;
    line-height: 50px;
    padding: 0 16px;
    font-size: 14px;
    a {
      color: transparent;
      background: linear-gradient(to right, #0042ff, #7d00cb, #3d00ff, #291bfd);
      -webkit-background-clip: text;
    }
  }
}
</style>
