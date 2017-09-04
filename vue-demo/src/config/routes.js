import Vue from 'vue'
import Router from 'vue-router'
// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
// 引用子路由
import Frame from '../frame/subroute'


// 引用子页面
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userSet from '../page/user/set.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/content',
      component: content
    },
    {
      name: 'user',
      path: '/user',
      component: Frame,
      children: [
        {name: 'default', path: '/user/', redirect: '/user/userdefault'},
        {name: 'userdefault', path: '/user/userdefault', component: userIndex},
        {name: 'userinfo', path: '/user/userinfo', component: userInfo},
        {name: 'userlast', path: '/user/userlast', component: userSet}
      ]
    }

  ]
})
