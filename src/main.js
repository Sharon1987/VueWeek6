import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
//程式進入點,App為根目錄
//createApp(App).use(router).mount('#app')
const app=createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')