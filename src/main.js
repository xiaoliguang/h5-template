import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directive from './directive'
import plugins from '@/plugins'
import './styles/lib-reset.css'
import './styles/animate.css'

// todo 自动引入
import message from '@/components/message/src/main.js'
import loading from '@/components/loading/src/main.js'
import Backtop from '@/components/backtop/index.js'

import monitor from '@/assets/js/data-tracking.js'

Vue.component(Backtop.name, Backtop)
const install = function(Vue) {
    Vue.prototype.$message = message
    Vue.prototype.$loading = loading
}
Vue.use(install)
Vue.use(directive)
Vue.use(plugins)

// console.log('process.env.NODE_ENV：' + process.env.NODE_ENV)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
