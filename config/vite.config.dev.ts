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
