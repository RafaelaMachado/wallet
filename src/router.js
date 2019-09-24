import Vue from 'vue'
import Router from 'vue-router'

const Wallet = () => import('@/views/Wallet' /* webpackChunkName: "wallet" */)
const Login = () => import('@/views/Login' /* webpackChunkName: "login" */)
const Register = () => import('@/views/Register' /* webpackChunkName: "register" */)

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'wallet',
            path: '/',
            component: Wallet
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
