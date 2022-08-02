import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Progress from './components/index'
Vue.use(Progress)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
