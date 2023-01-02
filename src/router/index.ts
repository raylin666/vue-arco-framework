import {createRouter, createWebHistory} from 'vue-router'

// 默认布局 (整个内容块)
export const BASIC_LAYOUT = () => import('@/layout/basic-layout.vue')
// 侧栏布局 (带有侧边栏内容块)
export const SIDER_LAYOUT = () => import('@/layout/sider-layout.vue')

const routes = [
    {
        path: '/',
        name: 'index',
        component: SIDER_LAYOUT,
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
