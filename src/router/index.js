import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/clientes',
        name: 'ShowClientes',

        component: () => import('../views/Clientes.vue')
    },
    {
      path: '/clientesedit/:id', // parâmetro dinâmico ':id'
      name: 'EditClientes',
      component: () => import('../components/ClienteFormEdit.vue')
    },
    {
        path: '/',
        name: 'ShowLogin',

        component: () => import('../views/LoginPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router