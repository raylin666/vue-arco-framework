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
      <a-tag color="lime">3周前</a-tag>
    </a-divider>
    <div class="title">
      手把手教你源码编译安装PHP及相关扩展
    </div>
    <a-divider />
    <div class="content">
      说明
我这边用的是 Mac 操作系统 来演示, 下载的PHP版本 - 7.4.24。

下载、解压
如果你本地有 wget 命令, 可以直接

shell
wget https://www.php.net/distributions/php-7.4.24.tar.gz
当然, 你也可以 点击PHP官网 下载对应的PHP版本源码


下载完之后解压 tar -zxvf php-7.4.24.tar.gz, 为了方便之后需要调试 PHP 的 C 源码, 所以我把 php-7.4.24 文件夹复制放到 /Users/linshan/Container/C 目录下。

配置
PHP 初始的配置和安装过程被 configure 脚本中一系列命令行选项控制。可以通过 ./configure --help 命令了解 PHP 所有可用的编译选项及简短解释。

Linux 下安装软件的步骤：

./configure 执行配置选项（例如 --prefix 可以指定安装位置），判断硬件及操作系统平台，生成 Makefile 文件
make 编译
make install 安装
常用的配置选项
1. PHP 选项
运行下配置, 用最简单的配置参数

shell
./configure --prefix=/Users/linshan/Container/C/php-7.4.24/php74 --enable-debug --enable-mysqlnd --enable-posix --with-iconv=/usr/local/opt/libiconv
在此过程中可能会出现一些报错提示, 根据提示查看相关文档就能解决掉, 这里就不一一说明了。如果一切顺利, 大概会展示下图信息


编译、安装
运行如下命令

shell
make && make install
不出意外, 你会看到如下输出:


此时, 编译安装完成！我们通过 PHP 命令验证下是否安装成功:

shell
/Users/linshan/Container/C/php-7.4.24/php74/bin/php -v

源码安装 swoole 扩展
首先下载 swoole 源码, 你也可以到 https://github.com/swoole/swoole-src git 下载

shell
git clone git@github.com:swoole/swoole-src.git
进入 swoole-src 目录

shell
cd swoole-src
通过执行 phpize 命令生成 swoole 安装的 configure 文件

shell
/Users/linshan/Container/C/php-7.4.24/php74/bin/phpize
一切顺利的话, 会生成configure执行文件, 这样就可以配置swoole选项了

接下来配置 swoole

shell
./configure --with-php-config=/Users/linshan/Container/C/php-7.4.24/php74/bin/php-config
编译安装

shell
make && make install

将扩展加入到 php.ini 配置文件, 由于编译安装后并没有设置 php.ini 相关信息, 所以理论上应该是没有该文件的。可以先看看安装在哪个目录
shell
/Users/linshan/Container/C/php-7.4.24/php74/bin/php -i |grep php.ini

然后我们将 /Users/linshan/Container/C/php-7.4.24 目录下的 php.ini-development 或 php.ini-production 配置文件拷贝到 /Users/linshan/Container/C/php-7.4.24/php74/lib 目录下并重命名为 php.ini。

打开 php.ini 文件, 将 swoole 扩展加入到配置中 => extension=swoole.so 。


我们看下是否有安装成功 swoole 扩展

shell
/Users/linshan/Container/C/php-7.4.24/php74/bin/php -m

可以看到是安装成功的, 然后我们可以看看 swoole 相关信息

shell
/Users/linshan/Container/C/php-7.4.24/php74/bin/php --ri swoole

到此, 整个源码编译安装就完成了, 相关的扩展也是类似方式, 安装过程中遇到的环境或软件扩展报错基本都不复杂, 相对容易解决。

    </div>
    <a-divider />
    <a-row>
      <a-col :span="12">
        <div class="prev-title">
          上一篇: 手把手教你源码编译安装PHP及相关扩展
        </div>
      </a-col>
      <a-col :span="12">
        <div class="next-title" style="float: right;">
          下一篇: 手把手教你源码编译安装PHP及相关扩展
        </div>
      </a-col>
    </a-row>
    <a-divider />
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
    padding: 30px 0 10px 0;
    color: #2b2b2b;
    font-size: 18px;
    font-weight: 420;
    text-shadow: 1px 0 1px grey;
  }
  .content-from {
    align-items: center;
    justify-content: space-between;
    div {
      font-size: 14px;
      line-height: 30px;
      margin: 5px 0;
    }
  }
}
</style>
