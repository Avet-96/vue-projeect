import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './registerServiceWorker'
import './assets/style/css/theme-1.css'
import './assets/style/css/theme-2.css'
import './assets/style/css/theme-3.css'
import './assets/style/css/theme-4.css'
import './assets/style/css/theme-5.css'
import './assets/style/css/theme-6.css'
import './assets/style/css/theme-7.css'
import './assets/style/css/theme-8.css'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
