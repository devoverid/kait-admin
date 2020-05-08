import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Waves from 'vue-waves-effect'
import VuePageTransition from 'vue-page-transition'
import '../node_modules/nprogress/nprogress.css'
import './assets/scss/app.scss'

import KaitCard from '@/components/Card/KaitCard.vue'
import KaitCardHeader from '@/components/Card/KaitCardHeader.vue'
import KaitCardBody from '@/components/Card/KaitCardBody.vue'
import KaitCardFooter from '@/components/Card/KaitCardFooter.vue'
import KaitTable from '@/components/Table/KaitTable.vue'
import KaitAlert from '@/components/Alert/KaitAlert.vue'
import KaitBadge from '@/components/Badge/KaitBadge.vue'
import KaitButton from '@/components/Button/KaitButton.vue'
import KaitProgress from '@/components/Progress/KaitProgress.vue'

Vue.component('kait-card', KaitCard)
Vue.component('kait-card-header', KaitCardHeader)
Vue.component('kait-card-body', KaitCardBody)
Vue.component('kait-card-footer', KaitCardFooter)
Vue.component('kait-table', KaitTable)
Vue.component('kait-alert', KaitAlert)
Vue.component('kait-badge', KaitBadge)
Vue.component('kait-button', KaitButton)
Vue.component('kait-progress', KaitProgress)

Vue.config.productionTip = false
Vue.use(Waves)
Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
