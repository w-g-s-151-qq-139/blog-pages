import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router";
import axios from 'axios'
import storage from "@/js/storage";


Vue.use(Element)

Vue.prototype.$http = axios
Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
    el: '#app'
}).$mount('#app')

//响应拦截器
axios.interceptors.response.use(response => {
        let code = response.data.code
        let access_token = response.data.resultData.access_token
        console.log(code)
        if (code == "401") {
            router.push({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath}
            })
        }
        storage.reset("access_token",access_token)
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
//请求拦截器
axios.interceptors.request.use(config => {
        if (config.url == "/api/login" || config.url == "/api/userExit") {
            return config
        }
        let token = storage.get("access_token")
        console.log(config.url)
        config.headers = {
            "Authorization": token,
            'Access-Control-Allow-Methods':'OPTIONS,POST,GET'
        }
        return config
    },
    error => {
        return Promise.reject(error)
    })
