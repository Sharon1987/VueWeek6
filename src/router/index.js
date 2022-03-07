import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  /* {
    path: '/',
    name: 'Home',
    component: Home,
  }, */
  {
    // 根目錄
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'admin_products',
        component: () => import('../views/AdminProductsView.vue'),
      },
      {
        path: 'admin_coupon',
        component: () => import('../views/AdminCouponView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:'active', //加上bootstrap樣式
});

export default router;
