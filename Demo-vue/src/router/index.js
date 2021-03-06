import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import HelloAMap from 'components/HelloAMap'
import LazyLoad from 'components/LazyLoad'
import Table from 'components/Table'
import DragTable from 'components/DragTable'
import TableTwo from 'components/TableTwo'
import Guide from 'components/guide/Guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloAMap',
      name: 'HelloAMap',
      component: HelloAMap
    },
    {
      path: '/lazyLoad',
      name: 'LazyLoad',
      component: LazyLoad
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/dragTable',
      name: 'DragTable',
      component: DragTable
    },
    {
      path: '/tableTwo',
      name: 'tableTwo',
      component: TableTwo
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }
  ]
})
