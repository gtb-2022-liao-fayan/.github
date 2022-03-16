import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/basic/home' },
    {
      path: '/login',
      component: '@/pages/Login',
    },
    {
      path: '/basic',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/basic/home',
          component: '@/pages/Home',
        },
        {
          path: '/basic/msg',
          component: '@/pages/Message',
        },
        {
          path: '/basic/mine',
          component: '@/pages/Mine',
        },
      ],
    },
    {
      path: '/second',
      component: '@/layouts/SecondLayout',
      routes: [
        {
          path: '/second/book',
          component: '@/pages/Book',
        },
      ],
    },
  ],
  sass: {},
  fastRefresh: {},
});
