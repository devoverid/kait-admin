import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Waves from 'vue-waves-effect'
import VuePageTransition from 'vue-page-transition'
import '../node_modules/nprogress/nprogress.css'
import './assets/css/styles.css'

Vue.config.productionTip = false
Vue.use(Waves)
Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
