// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import tipsview from '../views/tipsview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
},
{
  path: '/tips/:mdfile?',
  name: 'tips',
  component:tipsview
},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
