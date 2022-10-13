// import { createRouter, createWebHistory } from "vue-router";
import JakartaData from "../data/JakartaData.vue";
import JabarData from "../data/JabarData.vue";
import JatengData from "../data/JatengData.vue";
import JatimData from "../data/JatimData.vue";
import BaliData from "../data/BaliData.vue";

import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "jakarta",
        component: JakartaData,
    },
    {
        path: "/jabar",
        name: "jabar",
        component: JabarData,
    },
    {
        path: "/jateng",
        name: "jateng",
        component: JatengData,
    },
    {
        path: "/jatim",
        name: "jatim",
        component: JatimData,
    },
    {
        path: "/bali",
        name: "bali",
        component: BaliData,
    },
];
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;