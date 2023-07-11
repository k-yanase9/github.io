// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import tipsview from '../views/tipsview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
},
{
  path: '/tips/:mdfile?/:create_at?/:last_modify?',
  name: 'tips',
  component:tipsview
},
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
