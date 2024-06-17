import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import TopupPage from '@/views/TopupPage.vue'
import store from '@/store/store'
import { IS_USER_AUTHENTICATED_GETTER } from '@/store/storeconstants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      meta: {
        auth: false
      }
    },
    {
      path: '/top-up',
      name: 'TopupPage',
      component: TopupPage,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ('auth' in to.meta && to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]) {
    next('/login');
  } else if ('auth' in to.meta && !to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]) {
    next('/');
  } else {
    next();
  }
});

export default router
