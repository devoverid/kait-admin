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
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
