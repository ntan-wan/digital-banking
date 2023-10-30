import { createRouter, createWebHashHistory } from 'vue-router';
import { useSiteStore } from '@/stores/site.store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      layout: 'blank',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const siteStore = useSiteStore();
  const layoutName = to.meta.layout;

  siteStore.setLayout(layoutName);
});

export default router;
