import { createWebHistory, createRouter } from "vue-router";

import home from '@/views/home'
import legal from '@/views/legal'
import dataprotection from '@/views/dataprotection'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home ,
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: legal ,
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: dataprotection ,
  },

  ]

  
export const router = createRouter({
    history: createWebHistory(),
    routes,
  });