<template>
  <div class="detail">
    <a-row>
      <a-col :span="12">
        <div class="tag">
          <a-space>
            <a-tag color="green">PHP</a-tag>
            <a-tag color="orange">JavaScript</a-tag>
            <a-tag color="blue">服务器运维</a-tag>
          </a-space>
        </div>
      </a-col>
      <a-col :span="12">
        <a-space size="large" style="float: right;">
          <div>
            <IconThumbUp /> 202
          </div>
          <div>
            <IconHeart /> 128
          </div>
          <div>
            <IconMessage /> 22
          </div>
          <div>
            <IconEye /> 382
          </div>
        </a-space>
      </a-col>
    </a-row>
    <a-divider orientation="center">
      <a-tag color="magenta">作者 林山 于 2022年03月20日 发布</a-tag>
    </a-divider>
    <div class="title">
      手把手教你源码编译安装PHP及相关扩展
    </div>
    <a-divider orientation="right" style="margin-top: 25px;">
      <a-tag>正文内容 - 字数 3K</a-tag>
    </a-divider>
    <div class="content">
      <p>说明
我这边用的是 Mac 操作系统 来演示, 下载的PHP版本 - 7.4.24。</p>
<p>
下载、解压
如果你本地有 wget 命令, 可以直接</p>
<p>
shell
wget https://www.php.net/distributions/php-7.4.24.tar.gz
当然, 你也可以 点击PHP官网 下载对应的PHP版本源码
</p>
<p>
下载完之后解压 tar -zxvf php-7.4.24.tar.gz, 为了方便之后需要调试 PHP 的 C 源码, 所以我把 php-7.4.24 文件夹复制放到 /Users/linshan/Container/C 目录下。
</p>
<p>
配置
PHP 初始的配置和安装过程被 configure 脚本中一系列命令行选项控制。可以通过 ./configure --help 命令了解 PHP 所有可用的编译选项及简短解释。
</p>
<p>
Linux 下安装软件的步骤：
</p>
<p>
./configure 执行配置选项（例如 --prefix 可以指定安装位置），判断硬件及操作系统平台，生成 Makefile 文件
make 编译
make install 安装
常用的配置选项
1. PHP 选项
运行下配置, 用最简单的配置参数
</p>
<p>
到此, 整个源码编译安装就完成了, 相关的扩展也是类似方式, 安装过程中遇到的环境或软件扩展报错基本都不复杂, 相对容易解决。
</p>
    </div>
    <a-divider />
    <a-row>
      <a-col :span="10">
        <div class="prev-title">
          <router-link :to="{ name: 'articleInfo', params: { id: 2 } }">上一篇: 手把手教你源码编译安装PHP及相关扩展</router-link>
        </div>
      </a-col>
      <a-col :span="10" :offset="4">
        <div class="next-title">
          <router-link :to="{ name: 'articleInfo', params: { id: 3 } }">下一篇: 手把手教你源码编译安装PHP及相关扩展</router-link>
        </div>
      </a-col>
    </a-row>
    <div class="content-from">
      <div><a-alert>文章作者: 林山</a-alert></div>
      <div><a-alert type="success">文章链接: http://blog.ls331.com/20211009/6d9baf3/</a-alert></div>
      <div><a-alert type="warning">版权声明: 本博客所有文章除特別声明外，均采用 CC BY 4.0 许可协议。转载请注明来源 林山 !</a-alert></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconThumbUp, IconHeart, IconEye, IconMessage } from '@arco-design/web-vue/es/icon'
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
    background-image: url('http://blog.ls331.com/medias/featureimages/40.jpg');
    background-size: cover;
    background-position: center center;
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
