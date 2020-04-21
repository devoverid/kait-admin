import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LayoutAdmin from '../views/Layouts/Admin.vue';
import AdminDashboard from '../views/Admin/Dashboard.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: '',
        name: 'admin.dashboard',
        component: AdminDashboard
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
