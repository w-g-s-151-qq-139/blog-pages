import Router from 'vue-router'
import Vue from 'vue'
import login from "@/components/login";
import register from "@/components/register";
import forget from "@/components/forget";
import index from "@/components/index";

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {path: "/", component: index},
        {path:"/login",component:login},
        {path:"/register",component:register},
        {path:"/forget",component:forget}
    ]
})