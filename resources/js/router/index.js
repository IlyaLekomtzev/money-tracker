import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Home
        },
        {
            path: '/balance',
            name: 'Balance',
            component: () => import('../views/Balance')
        },
        {
            path: '/add',
            name: 'Add',
            component: () => import('../views/items/Add')
        },
        {
            path: '*',
            name: 'Not Found',
            component: () => import('../views/404')
        },
    ],
    linkActiveClass: 'current',
});

export default router;
