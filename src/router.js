import Vue from 'vue'
import Router from 'vue-router'
import Cart from './views/Cart.vue'
import Message from './views/Message.vue'
import User from './views/User.vue'
import Index from './views/Index.vue'
import Item from './views/Item.vue'

import Recommend from './views/Index/Recommend.vue'
import Furniture from './views/Index/Furniture.vue'
import HomeFurniture from './views/Index/homeFurniture.vue'
import Activity from './views/Index/Activity.vue'

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
      path: '*',
      redirect: '/index'
    }
  ]

})

export default router
