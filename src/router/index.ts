import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Epic from '../views/Epic.vue'
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publish/epic',
    name: 'Epic',
    component: Epic
  },
  {
    path: '/generate/sprint',
    name: 'Sprint',
    component: HelloWorld
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
