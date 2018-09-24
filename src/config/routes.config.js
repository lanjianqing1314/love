import Login from '@/view/login/index'
import Index from '@/view/index/index'
import Manager from '@/view/manager/index'

export const routes = [
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    path: '/manager',
    name: 'manager',
    meta: {
      requireAuth: true
    },
    component: Manager
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
