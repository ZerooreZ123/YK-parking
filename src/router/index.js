import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Personal from '@/components/OrderCenter/Personal'
import MonthlyInquiry from '@/components/MonthRecharge/monthlyInquiry'
import MonthlyRecharge from '@/components/MonthRecharge/monthlyRecharge'
import MonthlyOrders from '@/components/MonthRecharge/monthlyOrders'
import TempOrder from '@/components/OrderCenter/TempOrder'
import SubstituteOrder from '@/components/OrderCenter/SubstituteOrder'
import TemporaryPay from '@/components/temporaryPay'
import Surrender from '@/components/surrender'
import CarManagement from '@/components/carManagement'

const NoticeReminding = resolve => require(['@/components/noticeReminding'], resolve)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
    },
    {
      path: '/temporaryPay',
      name: 'TemporaryPay',
      component: TemporaryPay
    },
    {
      path: '/surrender',
      name: 'Surrender',
      component: Surrender
    },
    {
      path: '/carManagement',
      name: 'CarManagement',
      component: CarManagement
    },
    {
      path: '/noticeReminding',
      name: 'noticeReminding',
      component: NoticeReminding
    }
    // {
    //   path: '/home',
    //   children: [
    //     {
    //       path: '/',
    //       component: Home
    //     },
    //     {
    //       path: 'saleplan',
    //       component: saleplan,
    //       children: [{
    //         path: "/",
    //         component: saleplancontent
    //       },
    //       {
    //         path: "createsaleplan",
    //         component: createsaleplan
    //       },
    //       {
    //         path: "saleplaninfo",
    //         component: saleplaninfo
    //       }
    //   ]
    // }
  ]
})
