import Vue from 'vue'
import Router from 'vue-router'
// 引用模板
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singerr'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'

// 引用子路由
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }
  ]
})
