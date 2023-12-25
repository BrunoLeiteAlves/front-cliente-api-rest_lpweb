import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/clientes',
        name: 'ShowClientes',

        component: () => import('../views/Clientes.vue')
    },
    {
      path: '/clientesedit/:id', // Adicione um parâmetro dinâmico ':id'
      name: 'EditClientes',
      component: () => import('../components/ClienteFormEdit.vue') // Use o componente ClienteFormEdit para edição
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router