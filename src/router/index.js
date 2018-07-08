import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import UserProducts from '@/components/UserProducts'
import Products from '@/components/Products'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/user-products',
      name: 'UserProducts',
      component: UserProducts
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    }
  ]
})
