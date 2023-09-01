// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/components/button',
        name: 'ButtonComponent',
        component: () => import('@/components/Button.vue'),
      },
      {
        path: '/components/input',
        name: 'InputComponent',
        component: () => import('@/components/Input.vue'),
      },
      {
        path: '/components/login-form',
        name: 'LoginFormComponent',
        component: () => import('@/components/LoginForm.vue'),
      },
      {
        path: '/components/register-form',
        name: 'RegisterFormComponent',
        component: () => import('@/components/RegisterForm.vue'),
      },
      {
        path: '/components/forget-password',
        name: 'ForgetPasswordComponent',
        component: () => import('@/components/ForgetPassword.vue'),
      },
      {
        path: '/components/inputs',
        name: 'InputsComponent',
        component: () => import('@/components/Inputs.vue'),
      },
      {
        path: '/components/table',
        name: 'TablesComponent',
        component: () => import('@/components/Tables.vue'),
      },
      {
        path: '/components/table-actions',
        name: 'TableActionComponent',
        component: () => import('@/components/TablesActions.vue'),
      },
      {
        path: '/views/about',
        name: 'AboutComponent',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
