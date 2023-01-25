import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Play from '@/views/Play.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Homee',meta:{title:'hi'}, component: Home },
        { path: '/home', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/play', name: 'Play', component: Play },
    ]
})
export default router