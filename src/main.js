import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from 'Store'

import './css/main.scss'

import 'materialize-css/dist/js/materialize.js'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')