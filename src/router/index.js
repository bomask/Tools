import Vue from 'vue'
import VueRouter from 'vue-router'

const UniIDMaker = () => import('../views/uniIDMaker/UniIDMaker')
const tool2= () => import('../views/tool2/tool2')
const tool3= () => import('../views/tool3/tool3')
const tool4= () => import('../views/tool4/tool4')




//1、安装插件
Vue.use(VueRouter)


//2、创建路由对象
const routes = [{path: '', redirect: '/uniIdMaker'},
  {
    path: '/uniIdMaker',
    component: UniIDMaker 
  }, {
    path: '/tool2',
    component: tool2
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
