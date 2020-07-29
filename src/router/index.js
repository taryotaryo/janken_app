import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../components/Game.vue'
import Score from '../components/Score.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  },
  {
    path: '*',
    name: 'Game',
    component: Game
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
