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
        component: () => import('../views/Admin/Dashboard.vue'),
        meta: {
          title: 'Dashboard - Kait Admin',
        },
      },
      {
        path: '/components/alert',
        name: 'components.alert',
        component: () => import('../views/Admin/ComponentAlert.vue'),
        meta: {
          title: 'Alert - Kait Admin',
        },
      },
      {
        path: '/components/buttons',
        name: 'components.buttons',
        component: () => import('../views/Admin/ComponentButton.vue'),
        meta: {
          title: 'Buttons - Kait Admin',
        },
      },
      {
        path: '/components/badge',
        name: 'components.badge',
        component: () => import('../views/Admin/ComponentBadge.vue'),
        meta: {
          title: 'Badge - Kait Admin',
        },
      },
      {
        path: '/components/card',
        name: 'components.card',
        component: () => import('../views/Admin/ComponentCard.vue'),
      },
      {
        path: '/components/form',
        name: 'components.form',
        component: () => import('../views/Admin/ComponentForm.vue'),
      },
      {
        path: '/components/modal',
        name: 'components.modal',
        component: () => import('../views/Admin/ComponentModal.vue'),
      },
      {
        path: '/components/pagination',
        name: 'components.pagination',
        component: () => import('../views/Admin/ComponentPagination.vue'),
      },
      {
        path: '/components/progress',
        name: 'components.progress',
        component: () => import('../views/Admin/ComponentProgress.vue'),
      },
    ],
  },
  { 
    path: '*', 
    component: () => import('../views/Admin/Error404.vue')
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
