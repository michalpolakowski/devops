import { createRouter, createWebHashHistory } from 'vue-router'
import Pubs from '../views/Pubs'
import PubForm from '../views/PubForm.vue'
import PubDetail from "@/views/PubDetail";


const routes = [
  {
    path: '/',
    name: 'Pubs',
    component: Pubs
  },
  {
    path: '/create-pub',
    name: 'Create pub',
    component: PubForm
  },
  {
    path: '/pub/:id',
    name: 'Pub details',
    component: PubDetail
  },
  {
    path: '/edit-pub/:id',
    name: 'Edit pub',
    component: PubForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
