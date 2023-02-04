import { createApp } from 'vue'
import 'assets/style/global.less'
import '@arco-design/web-vue/dist/arco.less'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/locale'
import ArcoVue from '@arco-design/web-vue'
import '@/mock'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
    componentPrefix: 'a'
})
app.mount('#app')
