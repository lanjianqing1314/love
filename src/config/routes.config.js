/**
 * 路由配置文件（模块使用异步加载）
 * @author lanjianqing
 */
export const routes = [
  {
    path: '/',
    name: '/',
    component: (resolve) => require(['@/view/index/index'], resolve)
  },
  {
    path: '/manager',
    name: 'manager',
    meta: {
      requireAuth: true
    },
    component: (resolve) => require(['@/view/manager/index'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/view/login/index'], resolve)
  }
]
