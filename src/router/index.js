import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../views/Layouts/Admin.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('../views/Vertical/Dashboard.vue'),
        meta: {
          title: 'Dashboard - Kait Admin',
        },
      },
      {
        path: '/components/alert',
        name: 'components.alert',
        component: () => import('../views/Vertical/ComponentAlert.vue'),
        meta: {
          title: 'Alert - Kait Admin',
        },
      },
      {
        path: '/components/avatar',
        name: 'components.avatar',
        component: () => import('../views/Vertical/ComponentAvatar.vue'),
        meta: {
          title: 'Avatar - Kait Admin',
        },
      },
      {
        path: '/components/buttons',
        name: 'components.buttons',
        component: () => import('../views/Vertical/ComponentButton.vue'),
        meta: {
          title: 'Buttons - Kait Admin',
        },
      },
      {
        path: '/components/badge',
        name: 'components.badge',
        component: () => import('../views/Vertical/ComponentBadge.vue'),
        meta: {
          title: 'Badge - Kait Admin',
        },
      },
      {
        path: '/components/breadcrumb',
        name: 'components.breadcrumb',
        component: () => import('../views/Vertical/ComponentBreadcrumb.vue'),
        meta: {
          title: 'Breadcrumb - Kait Admin',
        },
      },
      {
        path: '/components/card',
        name: 'components.card',
        component: () => import('../views/Vertical/ComponentCard.vue'),
      },
      {
        path: '/components/checkbox',
        name: 'components.checkbox',
        component: () => import('../views/Vertical/ComponentCheckbox.vue'),
      },
      {
        path: '/components/dropdown',
        name: 'components.dropdown',
        component: () => import('../views/Vertical/ComponentDropdown.vue'),
      },
      {
        path: '/components/input',
        name: 'components.input',
        component: () => import('../views/Vertical/ComponentInput.vue'),
      },
      {
        path: '/components/modal',
        name: 'components.modal',
        component: () => import('../views/Vertical/ComponentModal.vue'),
      },
      {
        path: '/components/pagination',
        name: 'components.pagination',
        component: () => import('../views/Vertical/ComponentPagination.vue'),
      },
      {
        path: '/components/progress',
        name: 'components.progress',
        component: () => import('../views/Vertical/ComponentProgress.vue'),
      },
      {
        path: '/components/select',
        name: 'components.select',
        component: () => import('../views/Vertical/ComponentSelect.vue'),
      },
      {
        path: '/components/radio',
        name: 'components.radio',
        component: () => import('../views/Vertical/ComponentRadio.vue'),
      },
      {
        path: '/form/advanced-form',
        name: 'form.advanced',
        component: () => import('../views/Vertical/FormAdvanced.vue'),
      },
      {
        path: '/form/editor',
        name: 'form.editor',
        component: () => import('../views/Vertical/FormEditor.vue'),
      },
      {
        path: '/modules/sweet-alert2',
        name: 'modules.sweet-alert2',
        component: () => import('../views/Vertical/ModuleSweetAlert2.vue'),
      },
      {
        path: '/modules/chartjs',
        name: 'modules.chartjs',
        component: () => import('../views/Vertical/ModuleChartJS.vue'),
      },
      {
        path: '/modules/vue-select',
        name: 'modules.vue-select',
        component: () => import('../views/Vertical/ModuleVueSelect.vue'),
      },
      {
        path: '/table/basic',
        name: 'table.basic',
        component: () => import('../views/Vertical/TableBasic.vue'),
      },
      {
        path: '/table/advanced',
        name: 'table.advanced',
        component: () => import('../views/Vertical/TableAdvanced.vue'),
      },
    ],
  },
  {
    path: '/error',
    component: () => import('../views/Layouts/Error.vue'),
    children: [
      {
        path: '401',
        name: 'error.401',
        component: () => import('../views/Vertical/Error401.vue'),
      },
      {
        path: '403',
        name: 'error.403',
        component: () => import('../views/Vertical/Error403.vue'),
      },
      {
        path: '404',
        name: 'error.404',
        component: () => import('../views/Vertical/Error404.vue'),
      },
      {
        path: '500',
        name: 'error.500',
        component: () => import('../views/Vertical/Error500.vue'),
      },
    ]
  },
  {
    path: '/auth',
    component: () => import('../views/Layouts/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('../views/Vertical/AuthLogin.vue')
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () => import('../views/Vertical/AuthRegister.vue')
      },
      {
        path: 'forgot-password',
        name: 'auth.forgotPassword',
        component: () => import('../views/Vertical/AuthForgotPassword.vue')
      },
    ]
  },
  {
    path: '/auth/v2',
    component: () => import('../views/Layouts/AuthV2.vue'),
    children: [
      {
        path: 'login',
        name: 'auth.login.v2',
        component: () => import('../views/Vertical/AuthLoginV2.vue')
      },
      {
        path: 'register',
        name: 'auth.register.v2',
        component: () => import('../views/Vertical/AuthRegisterV2.vue')
      },
      {
        path: 'forgot-password',
        name: 'auth.forgotPassword.v2',
        component: () => import('../views/Vertical/AuthForgotPasswordV2.vue')
      },
    ]
  },
  { 
    path: '*', 
    component: () => import('../views/Vertical/Error404.vue')
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if (!nearestWithMeta) return next();
  
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
