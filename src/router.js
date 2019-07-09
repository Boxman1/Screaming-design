import Vue from 'vue'
import Router from 'vue-router'
import Cart from './views/Cart.vue'
import Message from './views/Message.vue'
import User from './views/User.vue'
import Index from './views/Index.vue'
import Item from './views/Item.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue';

import Mima from './views/Login/Mima.vue'
import Duanxin from './views/Login/Duanxin.vue'
import Recommend from './views/Index/Recommend.vue'
import Furniture from './views/Index/Furniture.vue'
import HomeFurniture from './views/Index/homeFurniture.vue'
import Activity from './views/Index/Activity.vue'
import Category from './views/Index/Category.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'furniture',
          component: Furniture
        },
        {
          path: 'homefurniture',
          component: HomeFurniture
        },
        {
          path: 'activity',
          component: Activity
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      children: [
        {
          path: 'mima',
          component: Mima
        },
        {
          path: 'duanxin',
          component: Duanxin
        }
      ]
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]

})

export default router
