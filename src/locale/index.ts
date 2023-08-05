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
