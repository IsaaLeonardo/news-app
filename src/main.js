import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Details from './components/Details/Details.vue'
import { createRouter, createWebHashHistory} from 'vue-router'

import './assets/main.css'

const routes = [
    { path: '/', component: Home },
    { path: '/details/:id', component: Details },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
