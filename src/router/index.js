import Vue from 'vue'
import Router from 'vue-router'
import EchartsOne from '@/components/EchartsOne'
import StudyOne from '@/components/StudyOne'
import StudyTwo from '@/components/StudyTwo'
import StudyThree from '@/components/StudyThree'
import A from '@/components/son/A'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudyThree',
      component: StudyThree
    }
  ]
})
