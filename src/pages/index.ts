import type { RouteRecordRaw } from 'vue-router'

export const pages: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./home'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('./search'),
  },
]
