import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import log from '../views/log'
import indexback from '../views/back/indexback'
import show1 from '../views/show1'
import show2 from '../views/show2'

Vue.use(VueRouter)
const routes = [

    {
        path: '/index',
        name: 'index',
        component: index,
        meta: {
            title: '主页'
        }
    },
    {
        path: '/show2',
        name: 'show2',
        component: show2,
        meta: {
            title: '展示页'
        }
    },
    {
        path: '/log',
        name: 'log',
        component: log,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/show1',
        name: 'show1',
        component: show1,
        meta: {
            title: '展示页'
        }
    },
    {
        path: '/indexback',
        name: 'indexback',
        component: indexback
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
