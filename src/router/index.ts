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
