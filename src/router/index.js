import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/punch_diary',
        name: 'PunchDiary',
        component: () => import('../views/PunchDiaryPage.vue'),
    },
    {
        path: '/potential_order',
        name: 'PotentialOrder',
        component: () => import('../views/PotentialOrderPage.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;