import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login.vue';
import Login from '../views/login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: 'Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import ('../views/Dashboard.vue'),
        meta: { requiresAuth: true},
    },
    {
        path: '*',
        redirect: '/Login',
    },
];

const router = new VueRouter ({
    mode: 'history',
    base: Process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('token');
    if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn){
        next('/login');
    } else {
        next();
    }
});

export default router;