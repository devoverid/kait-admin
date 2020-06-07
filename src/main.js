import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// Modules
import Waves from 'vue-waves-effect'
import VuePageTransition from 'vue-page-transition'
import '../node_modules/nprogress/nprogress.css'
import './assets/scss/app.scss'
import CKEditor from '@ckeditor/ckeditor5-vue';

// Components
import KaitAvatar from './components/Avatar/KaitAvatar.vue'
import KaitCard from './components/Card/KaitCard.vue'
import KaitCardHeader from './components/Card/KaitCardHeader.vue'
import KaitCardBody from './components/Card/KaitCardBody.vue'
import KaitCardFooter from './components/Card/KaitCardFooter.vue'
import KaitCheckbox from './components/Checkbox/KaitCheckbox.vue'
import KaitDropdown from './components/Dropdown/KaitDropdown.vue'
import KaitDropdownItem from './components/Dropdown/KaitDropdownItem.vue'
import KaitTable from './components/Table/KaitTable.vue'
import KaitAlert from './components/Alert/KaitAlert.vue'
import KaitBadge from './components/Badge/KaitBadge.vue'
import KaitButton from './components/Button/KaitButton.vue'
import KaitProgress from './components/Progress/KaitProgress.vue'
import KaitInput from './components/Input/KaitInput.vue'
import KaitModal from './components/Modal/KaitModal.vue'
import KaitPagination from './components/Pagination/KaitPagination.vue'
import KaitRadio from './components/Radio/KaitRadio.vue'
import KaitSelect from './components/Select/KaitSelect.vue'


Vue.component('kait-avatar', KaitAvatar)
Vue.component('kait-card', KaitCard)
Vue.component('kait-card-header', KaitCardHeader)
Vue.component('kait-card-body', KaitCardBody)
Vue.component('kait-card-footer', KaitCardFooter)
Vue.component('kait-checkbox', KaitCheckbox)
Vue.component('kait-dropdown', KaitDropdown)
Vue.component('kait-dropdown-item', KaitDropdownItem)
Vue.component('kait-table', KaitTable)
Vue.component('kait-alert', KaitAlert)
Vue.component('kait-badge', KaitBadge)
Vue.component('kait-button', KaitButton)
Vue.component('kait-progress', KaitProgress)
Vue.component('kait-input', KaitInput)
Vue.component('kait-modal', KaitModal)
Vue.component('kait-pagination', KaitPagination)
Vue.component('kait-radio', KaitRadio)
Vue.component('kait-select', KaitSelect)

Vue.config.productionTip = false
Vue.use(Waves)
Vue.use(VuePageTransition)
Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
