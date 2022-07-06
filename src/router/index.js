// import store from '@/store'
import {createWebHistory, createRouter} from 'vue-router'

const Login = () => import('Pages/LoginPage.vue' /* webpackChunkName: "resource/js/components/LoginPage" */)

const MoviesRatingsPage = () => import('Pages/MoviesRatingsPage.vue' /* webpackChunkName: "resource/js/components/MoviesRatingsPage" */)

const routes = [
    {
        name: 'movies-ratings',
        path: '/',
        component: MoviesRatingsPage,
        meta: {
            middleware: 'auth',
            title: 'Movies Ratings'
        },
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            middleware: 'guest',
            title: 'Login'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
}) 

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

export default router