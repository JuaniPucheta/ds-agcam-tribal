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
        component: () => import('@/views/Home.vue'),
        meta: {
          title: 'Home',
        }
      },
      {
        path: '/components/button',
        name: 'ButtonComponent',
        component: () => import('@/components/Button.vue'),
        meta: {
          title: 'Button',
        }
      },
      {
        path: '/components/input',
        name: 'InputComponent',
        component: () => import('@/components/Input.vue'),
        meta: {
          title: 'Input',
        }
      },
      {
        path: '/components/login-form',
        name: 'LoginFormComponent',
        component: () => import('@/components/LoginForm.vue'),
        meta: {
          title: 'Login Form',
        }
      },
      {
        path: '/components/register-form',
        name: 'RegisterFormComponent',
        component: () => import('@/components/RegisterForm.vue'),
        meta: {
          title: 'Register Form',
        }
      },
      {
        path: '/components/forget-password',
        name: 'ForgetPasswordComponent',
        component: () => import('@/components/ForgetPassword.vue'),
        meta: {
          title: 'Forget Password',
        }
      },
      {
        path: '/components/inputs',
        name: 'InputsComponent',
        component: () => import('@/components/Inputs.vue'),
        meta: {
          title: 'Inputs',
        }
      },
      {
        path: '/components/table',
        name: 'TablesComponent',
        component: () => import('@/components/Tables.vue'),
        meta: {
          title: 'Tables',
        }
      },
      {
        path: '/components/table-actions',
        name: 'TableActionComponent',
        component: () => import('@/components/TablesActions.vue'),
        meta: {
          title: 'Table Actions',
        }
      },
      {
        path: '/views/about',
        name: 'AboutComponent',
        component: () => import('@/views/About.vue'),
        meta: {
          title: 'About',
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
