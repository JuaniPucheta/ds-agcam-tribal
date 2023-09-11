import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/default/DefaultPage.vue'),
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
        path: '/components/combobox',
        name: 'ComboboxPage',
        component: () => import('../components/ComboboxPage.vue'),
      },
      {
        path: '/components/file-input',
        name: 'FileInputPage',
        component: () => import('../components/FileInputPage.vue'),
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
        path: '/components/form-1',
        name: 'Form1Page',
        component: () => import('../components/Form1Page.vue'),
      },
      {
        path: '/components/modals',
        name: 'ModalsPage',
        component: () => import('../components/ModalsPage.vue'),
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
