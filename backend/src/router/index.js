import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword
    }
];

const route = createRouter({
    history: createWebHistory(),
    routes
})

export default route;
