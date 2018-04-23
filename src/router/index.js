import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Personal from '@/components/OrderCenter/Personal'
import MonthlyInquiry from '@/components/MonthRecharge/monthlyInquiry'
import MonthlyRecharge from '@/components/MonthRecharge/monthlyRecharge'
import MonthlyOrders from '@/components/MonthRecharge/monthlyOrders'
import TempOrder from '@/components/OrderCenter/TempOrder'
import SubstituteOrder from '@/components/OrderCenter/SubstituteOrder'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/monthlyInquiry',
      name: 'MonthlyInquiry',
      component: MonthlyInquiry
    },
    {
      path: '/monthlyRecharge',
      name: 'MonthlyRecharge',
      component: MonthlyRecharge
    },
    {
      path: '/monthlyOrders',
      name: 'MonthlyOrders',
      component: MonthlyOrders
    },
    {
      path: '/personal/temp',
      name: 'TempOrder',
      component: TempOrder
    },
    {
      path: '/personal/substitute',
      name: 'SubstituteOrder',
      component: SubstituteOrder
    }
  ]
})
