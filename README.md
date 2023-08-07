## 🦶👋 🏠 Vue 3 + Vite + TypeScript + Arco Design UI 企业级脚手架

### 脚手架搭建过程

```shell
# 下载模版及启动项目 (会提示输入项目名称[例如`vue-framework`], 选择 Vue 框架, 选择 TypeScript 即可)
npm create vite\@latest

# 进入项目
cd vue-framework

# 下载依赖
npm install

# 启动项目
npm run dev
```

### TypeScript 配置

项目根目录下找到 `tsconfig.json` 文件，它是是用来配置 TS 编译选项的。
这一步可以晚一点配置，但是避免后面操作过程中的一些报错，可以提前配置好，以下是我使用的配置项，基本对每一项都做了解释。

```json
{
  "compilerOptions": {
    "target": "ES2020", // 用于指定 TS 最后编译出来的 ES 版本
    "useDefineForClassFields": true,  // 将 class 声明中的字段语义从 [[Set]] 变更到 [[Define]]
    "module": "ES2020", // 设置编译后代码使用的模块化系统：commonjs | UMD | AMD | ES2020 | ESNext | System
    "lib": ["ES2020", "DOM", "DOM.Iterable"], // TS 需要引用的库，即声明文件，es5 默认引用 dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array"
    "skipLibCheck": true, // 忽略所有的声明文件（ *.d.ts）的类型检查
    "baseUrl": ".",  // 解析非相对模块的基地址，默认是当前目录
    "paths": {
      // 解决引入报错 找不到模块 “@/xxxx” 或其相应的类型声明
      "@/*": ["src/*"],
    },

    /* Bundler mode */
    "moduleResolution": "Node",  // 模块解析策略，TS 默认用 Node 的解析策略，即相对的方式导入
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,  // 允许导入扩展名为 “.json” 的模块
    "isolatedModules": true, // 确保每个文件都可以在不依赖其他导入的情况下安全地进行传输
    "esModuleInterop": true,  // 支持导入 CommonJs 模块
    "allowJs": true, // 允许编译器编译 JS，JSX 文件
    "noEmit": true, // 不输出文件,即编译后不会生成任何 JS 文件
    "jsx": "preserve",  // 在 `.tsx`文件里支持JSX：`"React"`或 `"Preserve"`

    /* Linting */
    "strict": true, // 开启所有的严格检查
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。默认值：module === "system" 或设置了 --esModuleInterop 且 module 不为 es2015 / esnext
  },
  "include": [
    "src/**/*.ts", 
    "src/**/*.d.ts",
    "src/**/*.tsx", 
    "src/**/*.vue",
  ],
  "exclude": ["node_modules"],
  // 每个引用的 `path` 属性都可以指向到包含 `tsconfig.json` 文件的目录，或者直接指向到配置文件本身（名字是任意的）
  "references": [{ "path": "./tsconfig.node.json" }],
}

```

### 引入 ESLint + StyleLint + Prettier 规范代码风格和质量

> `ESLint 是代码检查工具（lint 工具）`: 我们用它来避免低级错误和统一代码的风格，以保证代码质量
> `StyleLint 为 CSS 的 lint 工具`: 可格式化 CSS 代码，检查 CSS 语法错误与不合理的写法，指定 CSS 书写顺序等
> `Prettier 是代码格式化工具`: 我们用它来统一代码格式，风格。

```shell
# 安装插件 初始化 ESLint (需要回答很多问题, 如下是选择方案)
npm init @eslint/config

# 问题一
# 问: How would you like to use ESLint? (您希望如何使用ESLint？)
# 答: To check syntax and find problems (检查语法并发现问题)

# 问题二
# 问: What type of modules does your project use? (您的项目使用什么类型的模块？)
# 答: JavaScript modules (import/export) (JavaScript模块（导入/导出)

# 问题三
# 问: Which framework does your project use? (您的项目使用哪个框架？)
# 答: Vue.js

# 问题四
# 问: Does your project use TypeScript? (你的项目使用TypeScript吗？)
# 答: Yes

# 问题五
# 问: Where does your code run? (你的代码在哪里运行？)
# 答: Browser

# 问题六
# 问: What format do you want your config file to be in? (您希望配置文件的格式是什么？)
# 答: JavaScript

# 问题七
# 问: Would you like to install them now? (你想现在安装吗？)
# 答: Yes

# 问题八
# 问: Which package manager do you want to use? (您要使用哪个程序包管理器？)
# 答: npm
```

完成后会在根目录下生成 `.eslintrc.cjs` 配置文件, 将配置设置为如下(你也可以根据实际情况调整):

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser', // 解析 .vue 文件
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    '@typescript-eslint/no-var-requires': 0, // 解决报错：Require statement not part of import statement.
    'vue/multi-word-component-names': 'off', // 关闭组件命名规则娇艳
    '@typescript-eslint/no-explicit-any': 0, // 不允许显式的any类型
    '@typescript-eslint/no-unused-vars': 1 // 禁止未使用过的变量
  }
}

```

同时创建 `.eslintignore` 为 `ESLint` 忽略指定文件:

```
/*.json
/*.js
dist
```

接着安装 `StyleLint` 插件
```shell
# stylelint:  css 样式 lint 工具, 用户检测样式文件(.css文件)
# postcss: 转换 css 代码工具
# postcss-less: 识别 less 语法的插件
# postcss-html: 识别 html/vue 中的 <style></style> 标签中的样式
# stylelint-config-standard: StyleLint 的标准可共享配置规则，详细可查看官方文档
# stylelint-config-prettier: 关闭所有不必要或可能与 Prettier 冲突的规则
# stylelint-config-recommended-less: less 的推荐可共享配置规则，详细可查看官方文档
# stylelint-config-standard-vue: lint.vue 文件的样式配置
# stylelint-less: stylelint-config-recommended-less less 的 StyleLint 规则集合
# stylelint-order: 指定样式书写的顺序，在 .stylelintrc.js 中 order/properties-order 指定顺序
# stylelint-config-css-modules: css-module 的方案来处理样式文件

npm install stylelint
npm install postcss-less
npm install stylelint-config-standard
npm install stylelint-order
npm install stylelint-config-css-modules
```

安装完后配置根目录创建配置文件 `.stylelintrc.cjs` 文件, 新增内容如下:

```js
module.exports = {
  processors: [],
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {
    'selector-class-pattern': [
      // 命名规范 -
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ],
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
    'shorthand-property-no-redundant-values': true, // 简写属性
    'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
    'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    'selector-max-id': 0, // 限制一个选择器中 ID 选择器的数量
    'max-nesting-depth': 3,
    'order/properties-order': [
      // 规则顺序
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'clear',
      'font',
      'font-family',
      'font-size',
      'font-smoothing',
      'osx-font-smoothing',
      'font-style',
      'font-weight',
      'line-height',
      'letter-spacing',
      'word-spacing',
      'color',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'word-break',
      'word-wrap',
      'white-space',
      'vertical-align',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'pointer-events',
      'cursor',
      'background',
      'background-color',
      'border',
      'border-radius',
      'content',
      'outline',
      'outline-offset',
      'opacity',
      'filter',
      'visibility',
      'size',
      'transform'
    ]
  }
}

```

最后安装代码格式化插件 `Prettier`

```shell
npm install prettier
```

创建 `.prettierrc.cjs` 文件, 添加如下内容:

```js
module.exports = {
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  useTabs: false, // 是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  semi: false, // 行尾是否使用分号，默认为true
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  trailingComma: 'none', // 是否使用尾逗号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  singleAttributePerLine: false, // 每行强制换行，只能使用单个属性
  endOfLine: 'auto',
  arrowParens: 'avoid',
  quoteProps: 'consistent',
  useEditorConfig: true,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'strict'
}

```

同时创建 `.prettierignore` 为 `Prettier` 忽略指定文件:

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh
```

`ESLint` 和 `Prettier` 的配置难免会有冲突，目前比较成熟的方案是使用以下两个插件:

> `eslint-plugin-prettier`: 基于 `Prettier` 代码风格的 `ESLint` 规则，即`ESLint` 使用 `Pretter` 规则来格式化代码
> `eslint-config-prettier`: 禁用所有与格式相关的 `ESLint` 规则，解决 `Prettier` 与 `ESLint` 规则冲突，确保将其放在 `extends` 队列最后，这样它将覆盖其他配置

```shell
# 安装插件
npm install eslint-config-prettier
npm install eslint-plugin-prettier
```

安装完成后在 `.eslintrc.cjs` 文件中 `extends` 的最后添加一个配置
```js
extends: [
  'eslint:recommended',
  'plugin:vue/vue3-essential',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended' // 新增这行, 必须放在最后面
],
```

### 安装 CSS 预处理

由于 `vite` 是支持 `less` | `scss` 的, 我们这里使用的是 `less`, 安装方式如下:

```shell
npm install less
```

创建 `src/assets/style` 目录, 创建 `breakpoint.less` 文件:

```less
/* Extra small screen / phone */
@screen-xs: 480px;

/* Small screen / tablet */
@screen-sm: 576px;

/* Medium screen / desktop */
@screen-md: 768px;

/* Large screen / wide desktop */
@screen-lg: 992px;

/* Extra large screen / full hd */
@screen-xl: 1200px;

/* Extra extra large screen / large desktop */
@screen-xxl: 1600px;
```

然后将 `src/style.css` 文件更名为 `global.less`，至于默认基础样式, 你可以根据实际情况修改, 也可以参考如下我的设置:

```less
.cursor-pointer {
  cursor: pointer;
}

* {
  padding: 0;
  margin: 0;
  text-size-adjust: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  color: #333;
  text-size-adjust: 100% !important;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

input {
  border: none;
  outline: none;
}

/* stylelint-disable-next-line keyframes-name-pattern */
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

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

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
npm install vue-i18n@next
```

我们创建 `src/locale` 目录来存储国际化语言文件, 创建 `zh-CN.ts` 文件用来配置中文语言化, 内容如下:

```ts
export default {
  title: '微服务框架'
}

```

创建 `en-US.ts` 文件用来配置英文语言化, 内容如下:

```ts
export default {
  title: 'Microservices framework'
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
    'zh-CN': cn
  }
})

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

例如我们打开 `src/components/Helloworld.vue` 文件修改内容为:

```vue
<template>{{ msg }} - {{ t('title') }}</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import i18n from '../locale'
  import { useI18n } from 'vue-i18n'

  defineProps({
    msg: {
      type: String as PropType<string>,
      default: ''
    }
  })

  const { t } = useI18n()

  console.log(i18n.global.t('title'))
</script>

<style scoped></style>

```

如果能正常按照您的设置显示对应的语言化, 则表示配置成功了 ～

### 设置 Vite 配置项

首先将根目录下的 `vite.config.ts` 文件移动到根目录的 `config` 目录下(如果没有则创建目录), 改名为 `vite.config.base.ts` (公共环境使用)

接下来我们需要用到 `NodeJS` 的声明文件, 安装命令如下:

```shell
npm i --save-dev @types/node
# vite ESLint 依赖插件
npm install vite-plugin-eslint
```

安装完后我们打开配置文件 `vite.config.base.ts`, 内容修改为如下:

```ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.cn/config/
export default defineConfig({
  // 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）
  plugins: [vue()],
  // 配置 `@` 访问别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src')
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets')
      }
    ],
    extensions: ['.ts', '.js']
  },
  // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
  define: {
    'process.env': {}
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less'
          )}";`
        },
        javascriptEnabled: true
      }
    }
  }
})

```

接着新建 `vite.config.dev.ts` 配置文件(开发环境使用), 配置内容如下:

```ts
import { loadEnv, mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import baseConfig from './vite.config.base'

const mode = 'development'

// 根据当前工作目录中的 `mode` 加载 .env 文件
// 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
const env = loadEnv(mode, process.cwd(), '')

// https://vitejs.cn/config/
export default mergeConfig(
  {
    mode: mode,
    server: {
      // 在开发服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。若你想指定喜欢的浏览器打开服务器，你可以设置环境变量 process.env.BROWSER（例如：firefox）
      open: true,
      fs: {
        // 限制为工作区 root 路径以外的文件的访问
        strict: true
      },
      // 指定开发服务器端口
      port: 3000,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: true,
      // 为开发服务器配置自定义代理规则
      proxy: {
        [env.VITE_API_BASIC_URL]: {
          // 接口地址, 按实际填写
          target: env.VITE_API_BASIC_PROXY_PASS,
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${env.VITE_API_BASIC_URL}`), '')
        }
      }
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules']
      })
    ]
  },
  baseConfig
)

```

最后新建 `vite.config.prod.ts` 配置文件(生产环境使用), 配置内容如下:

```ts
import { loadEnv, mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import baseConfig from './vite.config.base'

const mode = 'production'

// 根据当前工作目录中的 `mode` 加载 .env 文件
// 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
const env = loadEnv(mode, process.cwd(), '')

// https://vitejs.cn/config/
export default mergeConfig(
  {
    mode: mode,
    server: {
      fs: {
        // 限制为工作区 root 路径以外的文件的访问
        strict: true
      },
      // 指定开发服务器端口
      port: 3000,
      // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: true,
      // 为开发服务器配置自定义代理规则
      proxy: {
        [env.VITE_API_BASIC_URL]: {
          // 接口地址, 按实际填写
          target: env.VITE_API_BASIC_PROXY_PASS,
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${env.VITE_API_BASIC_URL}`), '')
        }
      }
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules']
      })
    ],
    build: {
      chunkSizeWarningLimit: 2000
    }
  },
  baseConfig
)

```

打开根目录下的 `tsconfig.node.json` 文件, 将内容替换为:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["config/vite.config.base.ts", "config/vite.config.dev.ts", "config/vite.config.prod.ts"]
}

```

打开根目录下的 `package.json` 文件:
> 1. (开发环境 `npm run dev`) - 将 `scripts` 配置的 `dev` 修改为 `vite --config ./config/vite.config.dev.ts`
> 2. (打包环境 `npm run build`) - 将 `scripts` 配置的 `build` 修改为 `vue-tsc --noEmit && vite build --config ./config/vite.config.prod.ts`
> 3. (打包并访问项目 `npm run preview`) - 将 `scripts` 配置的 `preview` 修改为 `npm run build && vite preview --host`
> 4. (ESLint 语法工具检查 `npm run lint`) - 在 `scripts` 配置下新增 `lint` 修改为 `eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix`
> 5. (样式代码格式化工具检查 `npm run lint:css`) 在 `scripts` 配置下新增 `lint:css` 修改为 `stylelint \"src/**/*.(less|css)\" --fix --custom-syntax postcss-less`

### 安装 Arco Design UI 框架

```shell
npm install @arco-design/web-vue
```

在 `main.ts` 文件中引入 `arco-design`, 完整代码如下 ：

```ts
import { createApp } from 'vue'
import '@arco-design/web-vue/dist/arco.less'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import i18n from './locale'
import 'assets/style/global.less'

const app = createApp(App)

app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
  componentPrefix: 'a'
})
app.use(ArcoVueIcon)

app.use(i18n)

app.mount('#app')

```

此时就可以使用 `Arco Design UI` 框架了, 官方框架组件前缀默认名称是 `a`, 假设你将 `componentPrefix` 改为了 `arco` , 那么复制官方组件代码后得改下前缀名称哦，比如 `<arco-button type="primary">按钮</arco-button>` ~

### 组件设计及布局

打开 `src/components/HelloWorld.vue` 文件将其内容修改为:

```vue
<template>
  <div>
    <a-alert type="success" banner center>Hello ArcoFramework!</a-alert>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

```

创建 `src/layout` 目录, 并在目录下新建 `basic-layout.vue` 基础布局文件, 引入 `HelloWorld` 组件, 代码如下:

```vue
<template>
  <HelloWorld />
  <a-divider orientation="center">分割线</a-divider>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style scoped></style>

```

创建 `src/views/index` 目录, 并在目录下新建 `index.vue` 业务展示文件, 代码如下:

```vue
<template>
  <div style="margin-top: 30px">
    <a-row>
      <a-col :span="4" :offset="11">
        <a-button type="dashed" status="warning"
          ><icon-right-circle />&nbsp;&nbsp;点击内容按钮</a-button
        >
      </a-col>
    </a-row>
  </div>
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
import { createRouter, createWebHistory } from 'vue-router'

export const DEFAULT_LAYOUT = () => import('@/layout/basic-layout.vue')

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
        meta: {}
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

```

在 `main.ts` 中引入该文件, 相关代码如下:

```ts
import router from './router'

app.use(router)
```

在 `App.vue` 里添加 `router-view` 标签, 完整代码如下:

```vue
<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>

```

启动项目, 看下访问效果及布局内容显示是否正常/是否符合预期呢?

```shell
npm run dev 
```

正常情况下会在不同的区块内容分别显示: 
```shell
Hello World!
分割线
点击内容按钮
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
import store from './store'

app.use(store)
```

接下来修改 `src/views/index/index.vue` 业务文件引入 `store`, 并且将存储中的 count 挂载到页面上，点击按钮向 store 发送事件完成 count 的累加, 完整代码如下：

```vue
<template>
  <div style="margin-top: 30px">
    <a-row>
      <a-col :span="4" :offset="10">
        <a-button type="dashed" status="warning" @click="onClick"
          ><icon-right-circle />&nbsp;&nbsp;点击内容按钮, 点击总次数为
          &nbsp;<span class="button-count">{{ count }}</span> &nbsp;次</a-button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '@/store'
  import { requestUserLogin } from '@/api/user'

  onMounted(() => {
    requestUserLogin({ account: 'admin', password: '123456' }).then(res => {
      console.log(res)
    })
  })

  const store = useCounterStore()
  const { count } = storeToRefs(store)
  const onClick = () => {
    store.increment()
  }
</script>

<style scoped>
  .button-count {
    color: #2bbe2f;
  }
</style>

```

完成后启动项目 看看点击按钮后 count 是否会一直累加呢? ~

### 封装 Axios 请求类

```shell
npm install axios
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
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const result = response.data
    if (result.status != 200) {
      const errorMessage = result.message || '内部未知错误'
      Message.error({
        content: errorMessage,
        duration: 5 * 1000
      })

      return Promise.reject(new Error(errorMessage))
    }

    return result
  },
  error => {
    console.log('错误信息:' + error) // for debug
    Message.error({
      content: error.message,
      duration: 5 * 1000
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
  return request.post('/user/login', params)
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
npm install @types/mockjs
npm install mockjs
```

创建 `src/mock` 目录，并新建 `user.ts` 文件, 简单模拟一下 login 接口的调用:

```ts
import Mock from 'mockjs'

Mock.mock('/user/login', 'post', () => {
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
import './mock'
```

启动项目, 打开控制台 `Console`, 刷新页面可以看到打印出来了 `{token: 'raylin666'}`， 说明我们的 `mock` 已经成功了～

### 结尾

至此我们的基础脚手架就搭建完成了，之后就可以直接在这个脚手架上写业务代码了 ~

该项目的构建过程也是基于本脚手架创建并改造的，代码未必和本教程完全一致哈(可能改造过)。

本教程主要是讲解 `如何搭建脚手架`, 如果您需要自己写一套脚手架就照着本教程的步骤操作就可以了。

当然，您如果看懂本项目或者不想重新搭建脚手架, 也可以将代码拉下来直接使用哦 ～

可能还能涉及到其他相关的包(推荐):

```shell
# 基于 Vue 组合式 API 的实用工具集
npm install @vueuse/core
# 用来处理 URL 中的参数
npm install query-string
```