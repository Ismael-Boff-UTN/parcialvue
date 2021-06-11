import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alumnos',
    name: 'Alumnos',
    component: () => import('../views/Alumnos.vue')
  },
  {
    path: '/mejor-alumno',
    name: 'MejorAlumno',
    component: () => import('../views/MejorAlumno.vue')
  },
  {
    path: '/detalle/:id',
    name: 'DetalleAlumno',
    component: () => import('../views/DetalleAlumno.vue')
  },
  {
    path: '/alumnos/:filtro',
    name: 'Buscar',
    component: () => import('../views/Buscar.vue')
  },
  {
    path: '/alumnos-leg/:filtro',
    name: 'BuscarLegajo',
    component: () => import('../views/BuscarLegajo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
