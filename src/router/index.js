import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WriteNewComponent from '../components/WriteNewComponent.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductLandingPage from '../views/ProductLandingPage.vue'
import CustomersView from '../views/CustomersView.vue'
import CustomerDetails from '../views/CustomerDetails.vue'
import LoginPage from '../views/LoginPage.vue'
import MyProfile from '../views/MyProfile.vue'

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
    path: '/product-landing-page/:id',
    name: 'product_landing_page',
    component: ProductLandingPage,
    props: true
  },
  
  {
    path: '/customers',
    name: 'customers',
    component: CustomersView
  },

  {
    path: '/customer-details/:id',
    name: 'customer_details',
    component: CustomerDetails,
    props: true
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },

  {
    path: '/my-profile',
    name: 'my_profile',
    component: MyProfile,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
