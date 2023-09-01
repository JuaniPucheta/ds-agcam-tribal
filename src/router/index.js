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
