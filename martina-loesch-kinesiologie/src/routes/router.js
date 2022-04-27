import { createWebHistory, createRouter } from "vue-router";

import home from '@/views/home'
import contact from '@/views/contact'
import legal from '@/views/legal'
import dataprotection from '@/views/dataprotection'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home ,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact ,
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
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        console.log(from, savedPosition)
        // BEFORE:
        // return { selector: to.hash }
  
        return { el: to.hash }
      }
    },
  });