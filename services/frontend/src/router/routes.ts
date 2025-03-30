import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/IndexPage.vue')
    }]
  },
  {
    path: '/workers',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/WorkerPage.vue'),
      },
      {
        path: 'calendar',
        component: () => import('pages/WorkerCalendarPage.vue'),
      },
      {
        path: 'user/:workerId',
        component: () => import('pages/WorkerPage.vue'),
      },
    ]
  },
  {
    path: '/work-types',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/WorkTypesPage.vue'),
      }
    ]
  },
  {
    path: '/orders',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/OrderPage.vue'),
      },
      {
        path: ':orderId',
        component: () => import('pages/OrderPage.vue'),
      }]
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/SettingsPage.vue'),
    }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
