import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'BlogList',
        meta: {layout: 'main'},
        component: () => import('@/views/BlogList')
    },
    {
        path: '/about',
        name: 'About',
        meta: {layout: 'main'},
        component: () => import('@/views/About')
    },
    {
        path: '/blog-posts',
        name: 'BlogPosts',
        meta: {layout: 'main'},
        component: () => import('@/views/BlogPosts')
    },
    {
        path: '/registration',
        name: 'Registration',
        meta: {layout: 'empty'},
        component: () => import('@/views/Registration')
    },
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: () => import('@/views/Login')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
