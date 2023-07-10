import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WriteNewComponent from '../components/WriteNewComponent.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductLandingPage from '../components/ProductLandingPage.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerDetails from '../components/CustomerDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/test',
    name: 'test',
    component: WriteNewComponent
  },

  {
    path: '/product-card',
    name: 'product_card',
    component: ProductCard
  },

  {
    path: '/product-landing-page',
    name: 'product_landing_page',
    component: ProductLandingPage
  },
  
  {
    path: '/customers',
    name: 'customers',
    component: CustomersView
  },

  {
    path: '/customer-details',
    name: 'customer_details',
    component: CustomerDetails
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
