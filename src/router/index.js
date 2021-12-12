import { createRouter, createWebHashHistory } from 'vue-router'
import Options from '../views/Options.vue'
import Composition from '../views/Composition.vue'
import Setup from '../views/Setup.vue'

const routes = [
  {
    path: '/',
    name: 'Options',
    component: Options
  },
  {
    path: '/composition',
    name: 'Composition',
    component: Composition
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
