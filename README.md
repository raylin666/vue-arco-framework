## 🦶👋 🏠 Vue 3 + Vite + TypeScript + Arco Design UI 企业级脚手架

### 脚手架搭建过程

```shell
# 下载模版及启动项目 (会提示输入项目名称[例如`vue-framework`], 选择 Vue 框架, 选择 TypeScript 即可)
npm init vite@latest

# 进入项目
cd vue-framework

# 下载依赖
npm install

# 启动项目
npm run dev
```

### 安装代码校验 EsLint

```shell
# 安装插件
npm i eslint

# 初始化 eslint (需要回答很多问题, 如下是选择方案)
npx eslint --init

# 问题一
# 问: Need to install the following packages:  @eslint/create-config@0.4.1
# 答: y

# 问题二
# 问: How would you like to use ESLint?
# 答: style

# 问题三
# 问: What type of modules does your project use?
# 答: esm

# 问题四
# 问: Which framework does your project use?
# 答: vue

# 问题五
# 问: Does your project use TypeScript?
# 答: Yes

# 问题六
# 问: Where does your code run?
# 答: browser

# 问题七
# 问: How would you like to define a style for your project?
# 答: guide

# 问题八
# 问: Which style guide do you want to follow?
# 答: standard-with-typescript

# 问题九
# 问: What format do you want your config file to be in?
# 答: JavaScript

# 问题十
# 问: Would you like to install them now?
# 答: Yes

# 问题十一
# 问: Which package manager do you want to use?
# 答: npm
```

### 安装代码格式化 Prettier

```shell
# 安装插件
npm i prettier
```

创建 `.prettierrc` 文件, 添加如下内容：

```json
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "TrailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid",
  "quoteProps": "consistent",
  "useEditorConfig": true,
  "vueIndentScriptAndStyle": true,
  "htmlWhitespaceSensitivity": "strict",
  "overrides": [
    {
      "files": ".prettierrc"
    }
  ]
}
```

### 安装 CSS 预处理

由于 `vite` 是支持 `less` | `scss` 的, 我们这里使用的是 `less`, 安装方式如下:

```shell
npm i less --save-dev
```

创建 `src/assets/style` 目录, 创建 `breakpoint.less` 文件:

```less
// ==============breakpoint============

// Extra small screen / phone
@screen-xs: 480px;

// Small screen / tablet
@screen-sm: 576px;

// Medium screen / desktop
@screen-md: 768px;

// Large screen / wide desktop
@screen-lg: 992px;

// Extra large screen / full hd
@screen-xl: 1200px;

// Extra extra large screen / large desktop
@screen-xxl: 1600px;
```

然后将 `src/style.css` 文件更名为 `global.less`，修改其内容为:

```less
.cursor-pointer {
  cursor: pointer;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: none;
  padding: 0;
  margin: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  color: #333;
  -webkit-text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}

a {
  text-decoration: none;
}

input {
  border: none;
  outline: none;
}

@keyframes scaleBig {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.animate-img {
  animation: scaleBig 3s linear 1s forwards;
}
```

接着移动到 `src/assets/style` 目录下。

打开 `src/main.ts` 文件, 将 `import './style.css'` 修改为 `import './assets/style/global.less'` , 后面配置了 `Vite` 的别名后可改为 `import 'assets/style/global.less'`。

### 环境变量与模式

`Vite` 在一个特殊的 `import.meta.env` 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：
> `import.meta.env.MODE`: {string} 应用运行的模式。
> `import.meta.env.BASE_URL`: {string} 部署应用时的基本 URL。他由base 配置项决定。
> `import.meta.env.PROD`: {boolean} 应用是否运行在生产环境。
> `import.meta.env.DEV`: {boolean} 应用是否运行在开发环境 (永远与 `import.meta.env.PROD` 相反)。

`Vite` 使用 `dotenv` 从你的 <b>环境目录</b> 中的下列文件加载额外的环境变量：
```shell
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

加载的环境变量也会通过 `import.meta.env` 暴露给客户端源码。
为了防止意外地将一些环境变量泄漏到客户端，只有以 `VITE_` 为前缀的变量才会暴露给经过 `vite` 处理的代码。

我们将 `src/vite-env.d.ts` 文件改名为 `env.d.ts`, 接着按下面这样增加 `ImportMetaEnv` 的定义：

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_BASIC_PROXY_PASS: string
    readonly VITE_API_BASIC_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
```

接着我们在根目录下分别创建 `.env.development` 和 `.env.production` 配置文件, 内容如下:
```shell
VITE_APP_TITLE= 'Vue 3 + Vite + TypeScript + Arco Design UI'
VITE_API_BASIC_PROXY_PASS= 'http://127.0.0.1:10010'
VITE_API_BASIC_URL= '/api'
```

在你的应用中，你就可以使用 `import.meta.env.VITE_APP_TITLE` 渲染标题。

### 国际化语言包

```shell
npm install vue-i18n
```

我们创建 `src/locale` 目录来存储国际化语言文件, 创建 `zh-CN.ts` 文件用来配置中文语言化, 内容如下:

```ts
export default {
    'title': '计数器'
}
```

创建 `en-US.ts` 文件用来配置英文语言化, 内容如下:

```ts
export default {
    'title': 'counter'
}
```

接下来创建 `index.ts` 文件:

```ts
import { createI18n } from 'vue-i18n'
import en from './en-US'
import cn from './zh-CN'

const defaultLocale = localStorage.getItem('locale') || 'zh-CN'

const i18n = createI18n({
    // 本地化语言
    locale: defaultLocale,
    // 语言环境中不存在相应 massage 键时回退到指定语言
    fallbackLocale: 'zh-CN',
    // 是否允许在 Legacy API 模式下使用 Composition API
    allowComposition: true,
    // 本地化语言对应关系
    messages: {
        'en-US': en,
        'zh-CN': cn,
    },
});

export default i18n
```

打开 `src/main.ts` 文件引入国际化语言, 完整代码如下:

```ts
import { createApp } from 'vue'
import './assets/style/global.less'
import App from './App.vue'
import i18n from './locale'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
```

此时我们就可以在组件文件通过 `import i18n from '@/locale'`(如果你配置了 `VITE` 别名的话) 或 `import { useI18n } from 'vue-i18n'` 来使用国际化语言。

例如我们打开 `src/components/Helloworld.vue` 文件修改内容为 :
```vue
<template>
  {{ t('title') }}
</template>

<script setup lang="ts">
import i18n from '../locale'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

console.log(i18n.global.t("title"))
</script>

<style scoped></style>
```

如果能正常按照您的设置显示对应的语言化, 则表示配置成功了 ～

### 设置 Vite 配置项

首先将根目录下的 `vite.config.ts` 文件移动到根目录的 `config` 目录下(如果没有则创建目录), 改名为 `vite.config.dev.ts` (开发环境使用)

接下来我们需要用到 `NodeJS` 的声明文件, 安装命令如下:

```shell
npm i --save-dev @types/node
```

安装完后我们打开配置文件 `vite.config.dev.ts`, 内容如下:

```ts
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.cn/config/
export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), '');
    return {
        mode: 'development',
        // 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）
        plugins: [vue()],
        resolve: {
            // 配置 `@` 访问别名
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, '../src'),
                },
                {
                    find: 'assets',
                    replacement: resolve(__dirname, '../src/assets'),
                },
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
                },
            ]
        },
        // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
        define: {
            'process.env': {},
        },
        server: {
            // 指定服务器应该监听哪个 IP 地址
            host: '127.0.0.1',
            // 指定开发服务器端口
            port: 3000,
            // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
            strictPort: true,
            // 在开发服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。若你想指定喜欢的浏览器打开服务器，你可以设置环境变量 process.env.BROWSER（例如：firefox）
            open: true,
            fs: {
                // 限制为工作区 root 路径以外的文件的访问
                strict: true,
            },
            // 为开发服务器配置自定义代理规则
            proxy: {
                [env.VITE_API_BASIC_URL]: {
                    // 接口地址, 按实际填写
                    target: env.VITE_API_BASIC_PROXY_PASS,
                    changeOrigin: true,
                    rewrite: (path: any) =>
                        path.replace(new RegExp(`^${ env.VITE_API_BASIC_URL }`), ''),
                },
            }
        },
        css: {
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        hack: `true; @import (reference) "${resolve(
                            'src/assets/style/breakpoint.less'
                        )}";`,
                    },
                    javascriptEnabled: true,
                },
            },
        },
    };
})
```

再拷贝一份更名为 `vite.config.prod.ts` (生产环境使用), 记得修改下配置内的 `mode` 为 `production` 。

然后在根目录的 `tsconfig.json` 文件 `compilerOptions` 配置里增加:

```shell
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}
```

打开根目录下的 `package.json` 文件:
> 1. (开发环境 `npm run dev`) - 将 `scripts` 配置的 `dev` 修改为 `vite --config ./config/vite.config.dev.ts`
> 2. (打包环境 `npm run build`) - 将 `scripts` 配置的 `build` 修改为 `vue-tsc --noEmit && vite build --config ./config/vite.config.prod.ts`
> 3. (打包并访问项目 `npm run preview`) - 将 `scripts` 配置的 `preview` 修改为 `npm run build && vite preview --host`

### 安装 Arco Design UI 框架

```shell
npm install --save-dev @arco-design/web-vue
```

在 `main.ts` 文件中引入 `arco-design`, 完整代码如下 ：

```ts
import { createApp } from 'vue'
import 'assets/style/global.less'
import '@arco-design/web-vue/dist/arco.css';
import App from '@/App.vue'
import i18n from '@/locale'
import ArcoVue from '@arco-design/web-vue'

const app = createApp(App)
app.use(i18n)
app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
    componentPrefix: 'a'
})
app.mount('#app')
```

此时就可以使用 `Arco Design UI` 框架了, 官方框架组件前缀默认名称是 `a`, 假设你将 `componentPrefix` 改为了 `arco` , 那么复制官方组件代码后得改下前缀名称哦，比如 `<arco-button type="primary">按钮</arco-button>` ~

### 组件设计及布局

我们简单地使用 `Arco Design UI` 框架组件和布局页面, 在 `src/components` 目录下创建 `layout` 文件夹用来存放基础布局组件, 分别创建三个布局文件:

> header.vue
```vue
<template>
  Header
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

> sider.vue
```vue
<template>
  Sider
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

> footer.vue
```vue
<template>
  Footer
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

然后在 `src/layout` 目录下(没有则自行创建), 创建 `basic-layout.vue` 文件引入上述的布局组件, 代码如下:

```vue
<template>
  <div class="layout">
    <a-layout style="height: 400px;">
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout>
        <a-layout-sider theme="dark">
          <Sider />
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/layout/header.vue'
import Sider from '@/components/layout/sider.vue'
import Footer from '@/components/layout/footer.vue'
</script>

<style scoped>
.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer),
.layout :deep(.arco-layout-sider-children),
.layout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout :deep(.arco-layout-header),
.layout :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
```

我们创建 `src/views` 目录(用来存放业务页面), 在目录下创建 `index` 文件夹, 将 `src/components/HelloWorld.vue` 文件移动过来改名为 `index.vue` , 并将代码内容修改为:

```vue
<template>
  Content
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

### 安装配置路由

```shell
npm install vue-router@4
```

创建 `src/router` 目录, 并在目录下新建 `index.ts` 基础路由文件, 配置代码如下:

```ts
import {createRouter, createWebHistory} from 'vue-router'

export const DEFAULT_LAYOUT = () => import('@/layout/basic-layout.vue');

const routes = [
    {
        path: '/',
        name: 'index',
        component: DEFAULT_LAYOUT,
        meta: {},
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('@/views/index/index.vue'),
                meta: {},
            },
        ],
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
```

在 `main.ts` 中引入该文件, 相关代码如下:

```ts
import router from '@/router'

app.use(router)
```

在 `App.vue` 里添加 `router-view` 标签, 完整代码如下:

```vue
<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
```

启动项目, 看下访问效果及布局内容显示是否正常/是否符合预期呢?
正常情况下会在不同的区块内容分别显示: Header ｜ Sider ｜ Content ｜ Footer 。

```shell
npm run dev 
```

### 安装配置状态管理器

```shell
# 安装 pinia
npm install pinia
```

在 `src/store` 目录下(没有则自行创建), 新建 `counter.ts` 文件用来存储计数器, 内容如下:

```ts
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})

export default useCounterStore
```

然后创建 `index.ts` 文件, 内容如下:

```ts
import { createPinia } from 'pinia'
import useCounterStore from './counter'

const pinia = createPinia()

export { useCounterStore }
export default pinia
```

打开 `main.ts` 文件引入 `store`, 代码如下:

```ts
import store from '@/store'

app.use(store)
```

接下来修改 `src/views/index/index.vue` 业务文件引入 `store`, 并且将存储中的 count 挂载到页面上，点击按钮向 store 发送事件完成 count 的累加, 完整代码如下：

```vue
<template>
  <a-button type="primary" @click='onClick'>计数器: {{ count }}</a-button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store'

const store = useCounterStore()
const { count } = storeToRefs(store)
const onClick = () => {
  store.increment()
}
</script>

<style scoped></style>
```

完成后启动项目 看看点击按钮后 count 是否会一直累加呢? ~

### 封装 Axios 请求类

```shell
npm i axios
```

创建 `src/utils/axios` 目录，然后在其下创建 `request.ts` 文件:

```ts
import axios from 'axios'
import { Message } from '@arco-design/web-vue'

const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status != 200) {
      const defaultMessage = '内部未知错误'
      Message.error({
        content: res.message || defaultMessage,
        duration: 5 * 1000,
      })

      return Promise.reject(new Error(res.message || defaultMessage))
    } else {
      return res.data
    }
  },
  error => {
    console.log('错误信息:' + error)   // for debug
    Message.error({
      content: error.message,
      duration: 5 * 1000,
    })

    return Promise.reject(error)
  }
)

export default instance
```

创建 `src/api` 目录用来存储 API 请求文件，然后在其下创建 `user.ts` 文件：

```ts
import request from '@/utils/axios/request'

// 请求用户登录接口
export function requestUserLogin(params: any) {
    return request({
        url: '/user/login',
        method: 'post',
        params
    })
}
```

然后在 `src/views/index/index.vue` 业务文件中通过 `onMounted` 调用 `login` 接口:

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { requestUserLogin } from '@/api/user'

onMounted(() => {
  requestUserLogin({ account: 'admin', password: '123456' }).then(res => {
    console.log(res)
  })
})
</script>
```

刷新下页面, 此时可以看到提示 `Request failed with status code 404`, 说明其实请求是发送出去的, 只是我们没有这个接口地址而已。为了方便本地调试接口, 我们先配置下 `mockjs` 来模拟接口响应 。

### 安装数据模拟 MockJS

```shell
npm i --save-dev @types/mockjs
npm i mockjs -D
```

创建 `src/mock` 目录，并新建 `user.ts` 文件, 简单模拟一下 login 接口的调用:

```ts
import Mock from 'mockjs'

Mock.mock('/user/login', 'post', (data: any) => {
    return {
        data: { token: 'raylin666' },
        status: 200,
        message: 'success'
    }
})
```

接着创建 `index.ts` 文件, 将刚刚的 `user.ts` 文件引入进来:

```ts
import Mock from 'mockjs'

import './user'

// 设置拦截 AJAX 请求的响应时间
Mock.setup({
    timeout: '600-1000'
})
```

最后在 `main.ts` 中引入 `mock` 即可:

```ts
import '@/mock'
```

启动项目, 打开控制台 `Console`, 刷新页面可以看到打印出来了 `{token: 'raylin666'}`， 说明我们的 `mock` 已经成功了～

### 结尾

至此我们的基础脚手架就搭建完成了，之后就可以直接在这个脚手架上写业务代码了 ~

该项目的构建过程也是基于本脚手架创建并改造的，代码未必和本教程一致哈(因为改造过)。

本教程主要是讲解 << 如何搭建脚手架 >>, 如果您需要自己写一套脚手架就照着本教程的步骤操作就可以了。

当然，您如果看懂本项目或者不想重新搭建脚手架, 也可以将代码拉下来直接使用哦 ～

涉及到其他相关的包:

```shell
npm install @vueuse/core
npm install query-string
```
