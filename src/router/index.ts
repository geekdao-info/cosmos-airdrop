import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home.vue')
    },
    {
        path: '/hello-world',
        name: 'helloWorld',
        component: HelloWorld
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/404/404')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
