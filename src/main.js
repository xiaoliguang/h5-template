import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from "@/plugins"
// import clickoutside from '@/directive/clickoutside'
import "./styles/lib-reset.css"

// todo 自动引入
import message from "@/components/message/src/main.js"
import loading from "@/components/loading/src/main.js"
import Backtop from "@/components/backtop/index.js"
Vue.component(Backtop.name, Backtop)
const install = function (Vue) {
    Vue.prototype.$message = message
    Vue.prototype.$loading = loading
}
Vue.use(install)
Vue.use(plugins)

console.log('process.env.NODE_ENV：'+process.env.NODE_ENV);
// Vue.directive(clickoutside)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
