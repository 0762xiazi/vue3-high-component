import { createRouter, createWebHistory } from  'vue-router'

//组件模块
import FetchIndex from './pages/FetchIndex.vue'
import companyMailAddressIndex from "./pages/companyMailAddressIndex.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/FetchIndex',
      name: 'FetchIndex',
      component: FetchIndex
    },
    {
      path: '/companyMailAddressIndex',
      name: 'companyMailAddressIndex',
      component: companyMailAddressIndex
    }
  ]
})

export default router
