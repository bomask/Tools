//import Vue from 'vue'
//import VueRouter from 'vue-router'

const DataMaker = () => import('../views/dataMaker/DataMaker')
const timeTools= () => import('../views/timeTools/timeTools')
const tool3= () => import('../views/tool3/tool3')
const tool4= () => import('../views/tool4/tool4')




//1、安装插件
Vue.use(VueRouter)


//2、创建路由对象
const routes = [{path: '', redirect: '/DataMaker'},
  {
    path: '/DataMaker',
    component: DataMaker 
  }, {
    path: '/timeTools',
    component: timeTools
  }, {
    path: '/tool3',
    component: tool3
  }, {
    path: '/tool4',
    component: tool4
  }]

const router = new VueRouter({
  routes,
  mode:'history'
})


//3、导出router

export default router
