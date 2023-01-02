import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.cn/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  return {
    mode: 'production',
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
    build: {
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(
                'src/assets/style/vars.less'
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  };
})
