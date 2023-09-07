// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: '/components/button',
        name: 'ButtonPage',
        component: () => import('../components/ButtonPage.vue'),
      },
      {
        path: '/components/input',
        name: 'InputPage',
        component: () => import('../components/InputsPage.vue'),
      },
      {
        path: '/components/login-form',
        name: 'LoginFormPage',
        component: () => import('../components/LoginFormPage.vue'),
      },
      {
        path: '/components/register-form',
        name: 'RegisterFormPage',
        component: () => import('../components/RegisterFormPage.vue'),
      },
      {
        path: '/components/forget-password',
        name: 'ForgetPasswordPage',
        component: () => import('../components/ForgetPasswordPage.vue'),
      },
      {
        path: '/components/inputs',
        name: 'InputsPage',
        component: () => import('../components/InputsPage.vue'),
      },
      {
        path: '/components/table',
        name: 'TablesPage',
        component: () => import('../components/TablesPage.vue'),
      },
      {
        path: '/components/table-actions',
        name: 'TableActionPage',
        component: () => import('../components/TablesActionsPage.vue'),
      },
      {
        path: '/views/about',
        name: 'AboutPage',
        component: () => import('../views/AboutPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
