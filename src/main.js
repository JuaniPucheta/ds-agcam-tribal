import { createApp } from 'vue'
import App from './App.vue'
import './assets/input.css'
import router from './router' // Importa tu configuración de Vue Router
import Vue2Transitions from 'vue2-transitions'
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router) // Agrega el router a la instancia de Vue
app.use(Vue2Transitions) // Usa Vue Transitions en tu aplicación

app.mount('#app')
